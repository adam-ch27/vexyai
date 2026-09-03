import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const languageNames: Record<string, string> = {
  ar: "Modern Standard Arabic",
  fr: "French",
  en: "English",
  de: "German",
  es: "Spanish",
  pt: "Portuguese",
};

const languageSchema = z.enum(["ar", "fr", "en", "de", "es", "pt"]);
const formatSchema = z.enum(["summary", "flashcards", "mindmap"]);

const schemas = {
  summary: {
    type: "object",
    properties: {
      title: { type: "string" },
      overview: { type: "string" },
      keyPoints: {
        type: "array",
        items: {
          type: "object",
          properties: { heading: { type: "string" }, detail: { type: "string" } },
          required: ["heading", "detail"],
          additionalProperties: false,
        },
      },
      quickReview: { type: "array", items: { type: "string" } },
    },
    required: ["title", "overview", "keyPoints", "quickReview"],
    additionalProperties: false,
  },
  flashcards: {
    type: "object",
    properties: {
      title: { type: "string" },
      cards: {
        type: "array",
        items: {
          type: "object",
          properties: { question: { type: "string" }, answer: { type: "string" } },
          required: ["question", "answer"],
          additionalProperties: false,
        },
      },
    },
    required: ["title", "cards"],
    additionalProperties: false,
  },
  mindmap: {
    type: "object",
    properties: {
      title: { type: "string" },
      centralTopic: { type: "string" },
      nodes: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            label: { type: "string" },
            description: { type: "string" },
            parentId: { type: "string" },
          },
          required: ["id", "label", "description", "parentId"],
          additionalProperties: false,
        },
      },
    },
    required: ["title", "centralTopic", "nodes"],
    additionalProperties: false,
  },
} as const;

const followupSchema = {
  type: "object",
  properties: {
    title: { type: "string" },
    intro: { type: "string" },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          prompt: { type: "string" },
          answer: { type: "string" },
          options: { type: "array", items: { type: "string" } },
        },
        required: ["prompt", "answer", "options"],
        additionalProperties: false,
      },
    },
  },
  required: ["title", "intro", "items"],
  additionalProperties: false,
} as const;

async function callGateway(params: {
  system: string;
  user: string;
  schemaName: string;
  schema: unknown;
}) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI service is not configured");

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: params.system },
        { role: "user", content: params.user },
      ],
      response_format: {
        type: "json_schema",
        json_schema: { name: params.schemaName, strict: true, schema: params.schema },
      },
    }),
  });

  if (response.status === 429) throw new Error("Rate limit reached, please try again shortly.");
  if (response.status === 402) throw new Error("AI credits exhausted.");
  if (!response.ok) throw new Error(`AI request failed (${response.status})`);

  const payload = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = payload.choices?.[0]?.message?.content;
  if (typeof content !== "string") throw new Error("No usable result was generated");
  return JSON.parse(content) as Record<string, unknown>;
}

export const generateStudyResource = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        lesson: z.string().min(20).max(30000),
        format: formatSchema,
        language: languageSchema,
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const target = languageNames[data.language] ?? "Modern Standard Arabic";
    const labels = {
      summary: "a clear study summary",
      flashcards: "study flashcards",
      mindmap: "a mind map structure",
    } as const;

    const result = await callGateway({
      system: `You are a precise study assistant. Answer only in ${target}. Return JSON only.`,
      user: `Turn the following lesson into ${labels[data.format]}. Stay accurate and never add information that is not present in the lesson. Write all text in ${target}.\n\nLesson:\n${data.lesson}`,
      schemaName: `${data.format}_study_resource`,
      schema: schemas[data.format],
    });

    return { format: data.format, data: result };
  });

export const generateFollowup = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        lesson: z.string().min(20).max(30000),
        action: z.enum(["quiz", "assessment", "childExplain", "terms"]),
        language: languageSchema,
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const target = languageNames[data.language] ?? "Modern Standard Arabic";
    const labels = {
      quiz: "a multiple-choice quiz",
      assessment: "a short assessment test",
      childExplain: "a very simple explanation for a child",
      terms: "a list of the most important terms with definitions",
    } as const;

    const result = await callGateway({
      system: `You are a study assistant. Answer only in ${target}. Return JSON only.`,
      user: `Turn this lesson into ${labels[data.action]}. Do not add information beyond the lesson. Write all text in ${target}. Leave "options" as an empty array when multiple choice is not relevant.\n\n${data.lesson}`,
      schemaName: "followup_resource",
      schema: followupSchema,
    });

    return result;
  });
