import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  FileText,
  Layers3,
  Loader2,
  Network,
  Paperclip,
  Pencil,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LanguageMenu } from "@/components/LanguageMenu";
import { useLanguage } from "@/hooks/useLanguage";
import type { TranslationKey } from "@/lib/i18n";
import { generateFollowup, generateStudyResource } from "@/lib/study.functions";
import {
  previewMessage,
  type FollowupAction,
  type FollowupResult,
  type StudyFormat,
  type StudyResult,
} from "@/lib/study";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "جلسة مذاكرة — StudyWise AI" },
      {
        name: "description",
        content: "أرسل درسك واحصل على ملخص أو بطاقات مراجعة أو خريطة ذهنية باللغة التي تختارها.",
      },
      { property: "og:title", content: "جلسة مذاكرة — StudyWise AI" },
      {
        property: "og:description",
        content: "مساحة محادثة لتحويل الدروس إلى موارد مراجعة ذكية.",
      },
    ],
  }),
  component: Chat,
});

type Turn = {
  request: string;
  format: StudyFormat;
  result?: { format: StudyFormat; data: StudyResult };
  failed?: boolean;
};

const starters: { id: StudyFormat; icon: typeof FileText; title: TranslationKey; desc: TranslationKey }[] = [
  { id: "summary", icon: FileText, title: "summaryTitle", desc: "summaryDesc" },
  { id: "flashcards", icon: Layers3, title: "flashcardsTitle", desc: "flashcardsDesc" },
  { id: "mindmap", icon: Network, title: "mindmapTitle", desc: "mindmapDesc" },
];

const followups: { action: FollowupAction; label: TranslationKey; icon: typeof Brain }[] = [
  { action: "quiz", label: "quiz", icon: Brain },
  { action: "assessment", label: "assessment", icon: Check },
  { action: "childExplain", label: "childExplain", icon: Sparkles },
  { action: "terms", label: "terms2", icon: FileText },
];

function Chat() {
  const { t, dir, language } = useLanguage();
  const [lesson, setLesson] = useState("");
  const [format, setFormat] = useState<StudyFormat | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [followupResult, setFollowupResult] = useState<FollowupResult | null>(null);

  const generateFn = useServerFn(generateStudyResource);
  const followupFn = useServerFn(generateFollowup);
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  const generate = useMutation({
    mutationFn: (input: { lesson: string; format: StudyFormat }) =>
      generateFn({ data: { ...input, language } }),
    onSuccess: (data) =>
      setTurns((current) =>
        current.map((turn, index) =>
          index === current.length - 1
            ? { ...turn, result: data as { format: StudyFormat; data: StudyResult }, failed: false }
            : turn,
        ),
      ),
    onError: () => {
      setTurns((current) =>
        current.map((turn, index) =>
          index === current.length - 1 ? { ...turn, failed: true } : turn,
        ),
      );
      toast.error(t("genError"));
    },
  });

  const followup = useMutation({
    mutationFn: (input: { lesson: string; action: FollowupAction }) =>
      followupFn({ data: { ...input, language } }),
    onSuccess: (data) => setFollowupResult(data as FollowupResult),
    onError: () => toast.error(t("genError")),
  });

  const submit = () => {
    if (!format) {
      toast(t("pickFormat"));
      return;
    }
    if (lesson.trim().length < 20) {
      toast(t("tooShort"));
      return;
    }
    const request = lesson.trim();
    setTurns((current) => [...current, { request, format }]);
    setLesson("");
    setFollowupResult(null);
    generate.mutate({ lesson: request, format });
  };

  const retry = (turn: Turn) => {
    setTurns((current) =>
      current.map((item) => (item === turn ? { request: item.request, format: item.format, failed: false } : item)),
    );
    generate.mutate({ lesson: turn.request, format: turn.format });
  };

  const editTurn = (turn: Turn, index: number) => {
    setLesson(turn.request);
    setFormat(turn.format);
    setTurns((current) => current.slice(0, index));
    setFollowupResult(null);
    document.getElementById("lesson-box")?.focus();
  };

  const handleFile = async (file?: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t("fileTooLarge"));
      return;
    }
    try {
      const text = await file.text();
      if (!text.trim()) throw new Error("empty");
      setLesson(text);
      toast.success(t("fileLoaded"));
    } catch {
      toast.error(t("fileTextOnly"));
    }
  };

  const latest = turns[turns.length - 1];

  return (
    <main dir={dir} className="chat-shell min-h-screen text-foreground">
      <header className="sticky top-0 z-20 border-b bg-card/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="brand-mark small">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="font-extrabold">
              StudyWise <span className="brand-accent">AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageMenu compact />
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <BackArrow className="h-4 w-4" />
              {t("home")}
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 pb-12 pt-10">
        <div className="mb-8 text-center">
          <Badge className="mb-4 gap-1.5 border-0 bg-secondary text-accent-strong">
            <Sparkles className="h-3.5 w-3.5" />
            {t("newSession")}
          </Badge>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{t("help")}</h1>
          <p className="mt-3 text-muted-foreground">{t("choose")}</p>
        </div>

        {turns.length === 0 && (
          <div className="grid gap-3 sm:grid-cols-3">
            {starters.map(({ id, icon: Icon, title, desc }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setFormat(id);
                  document.getElementById("lesson-box")?.focus();
                }}
                className={`starter-card text-start ${format === id ? "selected" : ""}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </span>
                  {format === id && <Check className="h-4 w-4 text-accent-strong" />}
                </div>
                <p className="font-bold">{t(title)}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{t(desc)}</p>
              </button>
            ))}
          </div>
        )}

        {turns.length > 0 && (
          <div className="space-y-7">
            {turns.map((turn, index) => (
              <ConversationTurn
                key={`${turn.request.slice(0, 24)}-${index}`}
                turn={turn}
                loading={generate.isPending && index === turns.length - 1}
                onRetry={() => retry(turn)}
                onEdit={() => editTurn(turn, index)}
              />
            ))}
          </div>
        )}

        {latest?.result && (
          <div className="mt-8">
            <p className="mb-3 text-sm font-bold text-muted-foreground">{t("followup")}</p>
            <div className="flex flex-wrap gap-2">
              {followups.map(({ action, label, icon: Icon }) => (
                <button
                  key={action}
                  type="button"
                  className="suggestion-chip"
                  disabled={followup.isPending}
                  onClick={() => followup.mutate({ lesson: latest.request, action })}
                >
                  <Icon className="h-4 w-4" />
                  {t(label)}
                </button>
              ))}
            </div>
            {followup.isPending && (
              <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("thinking")}
              </div>
            )}
          </div>
        )}

        {followupResult && (
          <div className="assistant-bubble mt-6">
            <h2 className="text-lg font-bold">{followupResult.title}</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{followupResult.intro}</p>
            <div className="mt-4 space-y-3">
              {followupResult.items.map((item, index) => (
                <div key={index} className="result-point flex-col items-start">
                  <p className="text-sm font-bold text-foreground">
                    {index + 1}. {item.prompt}
                  </p>
                  {item.options && item.options.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {item.options.map((option, optionIndex) => (
                        <li key={optionIndex}>• {option}</li>
                      ))}
                    </ul>
                  )}
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-16">
        <div className="chat-composer">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-current" />
            {t("newMessage")}
          </div>
          <Textarea
            id="lesson-box"
            value={lesson}
            onChange={(event) => setLesson(event.target.value)}
            placeholder={t("placeholder")}
            className="h-32 max-h-32 resize-none overflow-y-auto border-0 bg-transparent p-0 text-base leading-8 shadow-none focus-visible:ring-0"
          />
          <div className="mt-5 flex flex-wrap items-center gap-3 border-t pt-4">
            <label className="flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary">
              <Paperclip className="h-4 w-4" />
              {t("addFile")}
              <input
                type="file"
                accept=".txt,.md,.csv"
                className="hidden"
                onChange={(event) => handleFile(event.target.files?.[0])}
              />
            </label>
            <Button
              onClick={submit}
              disabled={generate.isPending}
              className="cta-button h-10 gap-2 rounded-full px-5"
            >
              {generate.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {t("send")}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ConversationTurn({
  turn,
  loading,
  onRetry,
  onEdit,
}: {
  turn: Turn;
  loading: boolean;
  onRetry: () => void;
  onEdit: () => void;
}) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const long = turn.request.length > 180;
  const visible = expanded || !long ? turn.request : previewMessage(turn.request);

  return (
    <article className="space-y-4">
      <div className="request-bubble">
        <div className="mb-2 text-xs font-bold text-accent-strong">{t("you")}</div>
        <p className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground">{visible}</p>
        {long && (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 flex items-center gap-1 text-xs font-bold text-accent-strong"
          >
            {expanded ? t("hide") : t("showMore")}
            {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        )}
      </div>

      {loading && (
        <div className="assistant-bubble flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin text-accent-strong" />
          {t("thinking")}
        </div>
      )}

      {turn.result && (
        <div className="assistant-bubble">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold text-accent-strong">
            <Sparkles className="h-4 w-4" />
            {t("assistant")}
          </div>
          <Result result={turn.result} />
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="outline" onClick={onEdit} className="gap-2 rounded-full text-xs">
              <Pencil className="h-3.5 w-3.5" />
              {t("edit")}
            </Button>
            <Button variant="outline" onClick={onRetry} className="gap-2 rounded-full text-xs">
              <RotateCcw className="h-3.5 w-3.5" />
              {t("regenerate")}
            </Button>
          </div>
        </div>
      )}

      {!loading && !turn.result && turn.failed && (
        <div className="flex justify-end">
          <Button variant="outline" onClick={onRetry} className="rounded-full text-xs">
            {t("retry")}
          </Button>
        </div>
      )}
    </article>
  );
}

function Result({ result }: { result: { format: StudyFormat; data: StudyResult } }) {
  const { t } = useLanguage();
  const data = result.data as Record<string, unknown>;
  const title = typeof data['title'] === "string" ? data['title'] : "";

  if (result.format === "summary") {
    const overview = typeof data['overview'] === "string" ? data['overview'] : "";
    const points = (data['keyPoints'] as { heading: string; detail: string }[] | undefined) ?? [];
    const quickReview = (data['quickReview'] as string[] | undefined) ?? [];
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm leading-7 text-muted-foreground">{overview}</p>
        <div className="space-y-3">
          {points.map((point, index) => (
            <div key={index} className="result-point">
              <span>{index + 1}</span>
              <div>
                <b className="text-sm">{point.heading}</b>
                <p>{point.detail}</p>
              </div>
            </div>
          ))}
        </div>
        {quickReview.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-bold">{t("quickReview")}</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {quickReview.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (result.format === "flashcards") {
    const cards = (data['cards'] as { question: string; answer: string }[] | undefined) ?? [];
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {cards.map((card, index) => (
            <div key={index} className="flashcard-static">
              <p className="text-xs font-bold text-accent-strong">{t("question")}</p>
              <b className="block text-sm leading-7">{card.question}</b>
              <p className="mt-3 text-xs font-bold text-accent-strong">{t("answer")}</p>
              <p className="text-sm leading-7 text-muted-foreground">{card.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const centralTopic = typeof data['centralTopic'] === "string" ? data['centralTopic'] : title;
  const nodes =
    (data['nodes'] as { id: string; label: string; description?: string; parentId?: string }[] | undefined) ??
    [];
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mindmap-result">
        <div className="mindmap-center">{centralTopic}</div>
        {nodes.map((node) => (
          <div key={node.id} className="mindmap-node">
            <b className="text-sm">{node.label}</b>
            {node.description && <p>{node.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
