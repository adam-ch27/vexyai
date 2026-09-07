import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { FollowupResult, StudyResult } from "./study";

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
  return JSON.parse(content) as unknown;
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

    const result = (await callGateway({
      system: `You are a precise study assistant. Answer only in ${target}. Return JSON only.`,
      user: `Turn the following lesson into ${labels[data.format]}. Stay accurate and never add information that is not present in the lesson. Write all text in ${target}.\n\nLesson:\n${data.lesson}`,
      schemaName: `${data.format}_study_resource`,
      schema: schemas[data.format],
    })) as StudyResult;

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

    const result = (await callGateway({
      system: `You are a study assistant. Answer only in ${target}. Return JSON only.`,
      user: `Turn this lesson into ${labels[data.action]}. Do not add information beyond the lesson. Write all text in ${target}. Leave "options" as an empty array when multiple choice is not relevant.\n\n${data.lesson}`,
      schemaName: "followup_resource",
      schema: followupSchema,
    })) as FollowupResult;

    return result;
  });

const MULTIMODAL_MODEL = "google/gemini-3.7-flash";
const IMAGE_MODEL = "google/gemini-3-pro-image";

async function callChat(body: Record<string, unknown>) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("AI service is not configured");
  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (response.status === 429) throw new Error("Rate limit reached, please try again shortly.");
  if (response.status === 402) throw new Error("AI credits exhausted.");
  if (!response.ok) throw new Error(`AI request failed (${response.status})`);
  return (await response.json()) as {
    choices?: { message?: { content?: string; images?: { image_url?: { url?: string } }[] } }[];
  };
}

const dataUrlSchema = z
  .string()
  .max(9_000_000)
  .refine((value) => value.startsWith("data:"), "expected a data URL");

export const extractLessonText = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        dataUrl: dataUrlSchema,
        mimeType: z.string().min(3).max(120),
        filename: z.string().max(200).optional(),
        language: languageSchema,
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const isPdf = data.mimeType.includes("pdf");
    const instruction =
      "Extract the full readable study text from this document. Return plain text only, keep the original language of the document, keep headings and lists, and do not add commentary.";

    const content = isPdf
      ? [
          { type: "text", text: instruction },
          {
            type: "file",
            file: { filename: data.filename ?? "lesson.pdf", file_data: data.dataUrl },
          },
        ]
      : [
          { type: "text", text: instruction },
          { type: "image_url", image_url: { url: data.dataUrl } },
        ];

    const payload = await callChat({
      model: MULTIMODAL_MODEL,
      messages: [{ role: "user", content }],
    });
    const text = payload.choices?.[0]?.message?.content;
    if (typeof text !== "string" || !text.trim()) throw new Error("No text could be extracted");
    return { text: text.trim() };
  });

export const transcribeLessonAudio = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        audio: z.string().min(100).max(9_000_000),
        format: z.enum(["webm", "mp4", "m4a", "wav", "mp3", "ogg"]),
        language: languageSchema,
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const target = languageNames[data.language] ?? "Modern Standard Arabic";
    const payload = await callChat({
      model: MULTIMODAL_MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Transcribe this recording word for word. Keep the spoken language; if it is unclear assume ${target}. Return only the transcription text.`,
            },
            {
              type: "input_audio",
              input_audio: { data: data.audio, format: data.format === "mp4" ? "m4a" : data.format },
            },
          ],
        },
      ],
    });
    const text = payload.choices?.[0]?.message?.content;
    if (typeof text !== "string" || !text.trim()) throw new Error("No speech was recognised");
    return { text: text.trim() };
  });

export const generateMindMapImage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        centralTopic: z.string().min(1).max(200),
        nodes: z
          .array(z.object({ label: z.string().max(160), description: z.string().max(400).optional() }))
          .min(1)
          .max(14),
        language: languageSchema,
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const target = languageNames[data.language] ?? "Modern Standard Arabic";
    const branches = data.nodes
      .map((node, index) => `${index + 1}. ${node.label}${node.description ? ` — ${node.description}` : ""}`)
      .join("\n");

    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI service is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: IMAGE_MODEL,
        messages: [
          {
            role: "user",
            content: `Design a vibrant, lively mind map poster in the style of a premium Canva infographic template.
Style: colourful flat-vector illustration, bright but harmonious palette (indigo, gold, teal, coral, mint) on a soft off-white background, rounded pill and card shapes with subtle shadows, thick smooth curved connector lines in different colours, playful accents (small dots, stars, sparkles, ribbons).
Every branch must carry its own simple flat icon or small illustration that visually matches its meaning (book, lightbulb, atom, gear, map, chart, plant, clock...), plus a distinct colour.
The central topic sits in the middle inside a bold, decorated badge, with branches radiating outwards in a balanced, well-spaced, highly organised layout. Clean typography hierarchy: large bold central title, medium bold branch labels, small light description text. No clutter, no overlapping text, plenty of breathing room.
Write every label exactly as given, in ${target}, with correct spelling and correct right-to-left shaping when the language is Arabic. Do not invent extra text or add any words that are not listed below.
Central node: ${data.centralTopic}
Branches:
${branches}`,
          },
        ],
        modalities: ["image", "text"],
      }),
    });

    if (response.status === 429) throw new Error("Rate limit reached, please try again shortly.");
    if (response.status === 402) throw new Error("AI credits exhausted.");
    if (!response.ok) throw new Error(`Image request failed (${response.status})`);

    const payload = (await response.json()) as {
      choices?: { message?: { images?: { image_url?: { url?: string } }[] } }[];
    };
    const url = payload.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!url) throw new Error("No image was generated");
    return { image: url };
  });
