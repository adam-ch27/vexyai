import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  ImageIcon,
  Layers3,
  Loader2,
  MessageSquarePlus,
  Mic,
  Network,
  Paperclip,
  Pencil,
  PanelLeft,
  RotateCcw,
  Send,
  Sparkles,
  Square,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/hooks/useLanguage";
import type { AnyKey } from "@/lib/i18n";
import {
  extractLessonText,
  generateFollowup,
  generateMindMapImage,
  generateStudyResource,
  transcribeLessonAudio,
} from "@/lib/study.functions";
import {
  conversationTitle,
  newConversationId,
  useConversations,
  type Conversation,
  type StoredTurn,
} from "@/lib/history";
import {
  previewMessage,
  type FollowupAction,
  type FollowupResult,
  type MindMapResult,
  type StudyFormat,
  type StudyResult,
} from "@/lib/study";

export const Route = createFileRoute("/chat")({
  validateSearch: (search: Record<string, unknown>) => ({
    c: typeof search['c'] === "string" ? search['c'] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "جلسة مذاكرة — StudyWise AI" },
      {
        name: "description",
        content: "أرسل درسك نصًا أو ملفًا أو تسجيلًا صوتيًا واحصل على ملخص أو بطاقات أو خريطة ذهنية.",
      },
      { property: "og:title", content: "جلسة مذاكرة — StudyWise AI" },
      {
        property: "og:description",
        content: "مساحة محادثة لتحويل الدروس إلى موارد مراجعة ذكية بست لغات.",
      },
    ],
  }),
  component: Chat,
});

const starters: { id: StudyFormat; icon: typeof FileText; title: AnyKey; desc: AnyKey }[] = [
  { id: "summary", icon: FileText, title: "summaryTitle", desc: "summaryDesc" },
  { id: "flashcards", icon: Layers3, title: "flashcardsTitle", desc: "flashcardsDesc" },
  { id: "mindmap", icon: Network, title: "mindmapTitle", desc: "mindmapDesc" },
];

const followups: { action: FollowupAction; label: AnyKey; icon: typeof Brain }[] = [
  { action: "quiz", label: "quiz", icon: Brain },
  { action: "assessment", label: "assessment", icon: Check },
  { action: "childExplain", label: "childExplain", icon: Sparkles },
  { action: "terms", label: "terms2", icon: FileText },
];

function readAsDataUrl(file: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("read failed"));
    reader.readAsDataURL(file);
  });
}

function Chat() {
  const { t, dir, language } = useLanguage();
  const navigate = useNavigate({ from: "/chat" });
  const { c: activeIdParam } = Route.useSearch();
  const { conversations, ready, upsert, remove } = useConversations();

  const [conversationId, setConversationId] = useState<string>(() => newConversationId());
  const [lesson, setLesson] = useState("");
  const [format, setFormat] = useState<StudyFormat | null>(null);
  const [turns, setTurns] = useState<StoredTurn[]>([]);
  const [followupResult, setFollowupResult] = useState<FollowupResult | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [recording, setRecording] = useState(false);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const generateFn = useServerFn(generateStudyResource);
  const followupFn = useServerFn(generateFollowup);
  const extractFn = useServerFn(extractLessonText);
  const transcribeFn = useServerFn(transcribeLessonAudio);
  const mapImageFn = useServerFn(generateMindMapImage);
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  const save = useCallback(
    (nextTurns: StoredTurn[], nextFollowup: FollowupResult | null) => {
      const first = nextTurns[0];
      if (!first) return;
      const existing = conversations.find((item) => item.id === conversationId);
      const conversation: Conversation = {
        id: conversationId,
        title: conversationTitle(first.request, t("untitled")),
        createdAt: existing?.createdAt ?? Date.now(),
        updatedAt: Date.now(),
        turns: nextTurns,
        followup: nextFollowup,
      };
      upsert(conversation);
    },
    [conversationId, conversations, t, upsert],
  );

  const updateTurns = useCallback(
    (updater: (items: StoredTurn[]) => StoredTurn[]) => {
      setTurns((current) => {
        const next = updater(current);
        save(next, followupResult);
        return next;
      });
    },
    [followupResult, save],
  );

  // Load a conversation requested through ?c=
  useEffect(() => {
    if (!ready || !activeIdParam) return;
    const found = conversations.find((item) => item.id === activeIdParam);
    if (!found || found.id === conversationId) return;
    setConversationId(found.id);
    setTurns(found.turns);
    setFollowupResult(found.followup ?? null);
    setLesson("");
    setFormat(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, activeIdParam, conversations.length]);

  const openConversation = (item: Conversation) => {
    setConversationId(item.id);
    setTurns(item.turns);
    setFollowupResult(item.followup ?? null);
    setLesson("");
    setFormat(null);
    setSidebarOpen(false);
    void navigate({ search: { c: item.id } });
  };

  const startNewChat = () => {
    setConversationId(newConversationId());
    setTurns([]);
    setFollowupResult(null);
    setLesson("");
    setFormat(null);
    setSidebarOpen(false);
    void navigate({ search: { c: undefined } });
  };

  const generate = useMutation({
    mutationFn: (input: { lesson: string; format: StudyFormat }) =>
      generateFn({ data: { ...input, language } }),
    onSuccess: (data) =>
      updateTurns((current) =>
        current.map((turn, index) =>
          index === current.length - 1
            ? { ...turn, result: data as { format: StudyFormat; data: StudyResult }, failed: false }
            : turn,
        ),
      ),
    onError: () => {
      updateTurns((current) =>
        current.map((turn, index) => (index === current.length - 1 ? { ...turn, failed: true } : turn)),
      );
      toast.error(t("genError"));
    },
  });

  const followup = useMutation({
    mutationFn: (input: { lesson: string; action: FollowupAction }) =>
      followupFn({ data: { ...input, language } }),
    onSuccess: (data) => {
      setFollowupResult(data as FollowupResult);
      save(turns, data as FollowupResult);
    },
    onError: () => toast.error(t("genError")),
  });

  const mapImage = useMutation({
    mutationFn: (input: { index: number; map: MindMapResult }) =>
      mapImageFn({
        data: {
          centralTopic: input.map.centralTopic || input.map.title,
          nodes: input.map.nodes.slice(0, 12).map((node) => ({
            label: node.label,
            ...(node.description ? { description: node.description } : {}),
          })),
          language,
        },
      }),
    onSuccess: (data, variables) =>
      updateTurns((current) =>
        current.map((turn, index) =>
          index === variables.index ? { ...turn, mapImage: (data as { image: string }).image } : turn,
        ),
      ),
    onError: () => toast.error(t("mapImageError")),
  });

  const extract = useMutation({
    mutationFn: async (file: File) => {
      const dataUrl = await readAsDataUrl(file);
      return extractFn({
        data: { dataUrl, mimeType: file.type || "application/pdf", filename: file.name, language },
      });
    },
    onSuccess: (data) => {
      setLesson((data as { text: string }).text);
      toast.success(t("extracted"));
    },
    onError: () => toast.error(t("genError")),
  });

  const transcribe = useMutation({
    mutationFn: async (blob: Blob) => {
      const dataUrl = await readAsDataUrl(blob);
      const base64 = dataUrl.split(",")[1] ?? "";
      const format = blob.type.includes("mp4") || blob.type.includes("m4a") ? "m4a" : "webm";
      return transcribeFn({ data: { audio: base64, format, language } });
    },
    onSuccess: (data) => {
      const text = (data as { text: string }).text;
      setLesson((current) => (current.trim() ? `${current}\n${text}` : text));
      toast.success(t("extracted"));
    },
    onError: () => toast.error(t("genError")),
  });

  const runGenerate = (request: string, chosen: StudyFormat) => {
    setTurns((current) => {
      const next = [...current, { request, format: chosen }];
      save(next, null);
      return next;
    });
    setFollowupResult(null);
    generate.mutate({ lesson: request, format: chosen });
  };

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
    setLesson("");
    runGenerate(request, format);
  };

  const retry = (turn: StoredTurn, index: number) => {
    updateTurns((current) =>
      current.map((item, position) =>
        position === index ? { request: item.request, format: item.format } : item,
      ),
    );
    generate.mutate({ lesson: turn.request, format: turn.format });
  };

  const editTurn = (turn: StoredTurn, index: number) => {
    setLesson(turn.request);
    setFormat(turn.format);
    updateTurns((current) => current.slice(0, index));
    setFollowupResult(null);
    document.getElementById("lesson-box")?.focus();
  };

  const handleFile = async (file?: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t("fileTooLarge"));
      return;
    }
    const isText = file.type.startsWith("text/") || /\.(txt|md|csv)$/i.test(file.name);
    const isPdf = file.type.includes("pdf") || /\.pdf$/i.test(file.name);
    const isImage = file.type.startsWith("image/");

    if (isText) {
      const text = await file.text();
      if (!text.trim()) {
        toast.error(t("fileKindError"));
        return;
      }
      setLesson(text);
      toast.success(t("fileLoaded"));
      return;
    }
    if (isPdf || isImage) {
      extract.mutate(file);
      return;
    }
    toast.error(t("fileKindError"));
  };

  const toggleRecording = async () => {
    if (recording) {
      recorderRef.current?.stop();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        setRecording(false);
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        if (blob.size > 1000) transcribe.mutate(blob);
      };
      recorderRef.current = recorder;
      recorder.start();
      setRecording(true);
    } catch {
      toast.error(t("micDenied"));
    }
  };

  const latest = turns[turns.length - 1];
  const busy = generate.isPending || extract.isPending || transcribe.isPending;

  return (
    <div dir={dir} className="chat-shell min-h-screen text-foreground">
      <header className="sticky top-0 z-30 border-b bg-card/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              aria-label={t("openHistory")}
              onClick={() => setSidebarOpen(true)}
              className="h-10 w-10 rounded-full p-0 lg:hidden"
            >
              <PanelLeft className="h-4 w-4" />
            </Button>
            <BrandLogo size={34} compact />
          </div>
          <div className="flex items-center gap-2">
            <SiteHeader compact />
            <Link
              to="/"
              className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground sm:flex"
            >
              <BackArrow className="h-4 w-4" />
              {t("home")}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-4 lg:px-5">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-foreground/25 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`history-panel ${sidebarOpen ? "open" : ""}`}>
          <div className="flex items-center justify-between gap-2 pb-3">
            <p className="text-sm font-bold">{t("history")}</p>
            <Button
              variant="ghost"
              aria-label={t("newChat")}
              onClick={() => setSidebarOpen(false)}
              className="h-8 w-8 rounded-full p-0 lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={startNewChat} className="cta-button mb-4 h-10 w-full gap-2 rounded-full text-xs">
            <MessageSquarePlus className="h-4 w-4" />
            {t("newChat")}
          </Button>
          <div className="space-y-1.5 overflow-y-auto">
            {conversations.length === 0 && (
              <p className="px-2 text-xs text-muted-foreground">{t("noHistory")}</p>
            )}
            {conversations.map((item) => (
              <div
                key={item.id}
                className={`history-item ${item.id === conversationId ? "active" : ""}`}
              >
                <button type="button" onClick={() => openConversation(item)} className="truncate text-start">
                  {item.title || t("untitled")}
                </button>
                <button
                  type="button"
                  aria-label={t("deleteChat")}
                  onClick={() => {
                    remove(item.id);
                    if (item.id === conversationId) startNewChat();
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </aside>

        <main className="min-w-0 flex-1 pb-16 pt-8">
          <div className="mx-auto max-w-3xl">
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
                    mapLoading={mapImage.isPending && mapImage.variables?.index === index}
                    onRetry={() => retry(turn, index)}
                    onEdit={() => editTurn(turn, index)}
                    onMapImage={(map) => mapImage.mutate({ index, map })}
                  />
                ))}
              </div>
            )}

            {latest?.result && !generate.isPending && (
              <div className="mt-8 space-y-6">
                <div>
                  <p className="mb-3 text-sm font-bold text-muted-foreground">{t("otherFormats")}</p>
                  <div className="flex flex-wrap gap-2">
                    {starters
                      .filter((item) => item.id !== latest.result?.format)
                      .map(({ id, icon: Icon, title }) => (
                        <button
                          key={id}
                          type="button"
                          className="suggestion-chip"
                          onClick={() => {
                            setFormat(id);
                            runGenerate(latest.request, id);
                          }}
                        >
                          <Icon className="h-4 w-4" />
                          {t(title)}
                        </button>
                      ))}
                  </div>
                </div>

                <div>
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

            <div className="mt-10">
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

                {(extract.isPending || transcribe.isPending || recording) && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-accent-strong">
                    {recording ? (
                      <>
                        <span className="rec-dot" />
                        {t("recordingNow")}
                      </>
                    ) : (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        {extract.isPending ? t("reading") : t("transcribing")}
                      </>
                    )}
                  </div>
                )}

                <div className="mt-5 flex items-center gap-2 border-t pt-4">
                  <label className="composer-tool cursor-pointer" title={t("attachHint")}>
                    <Paperclip className="h-4 w-4" />
                    <span className="hidden sm:inline">{t("addFile")}</span>
                    <input
                      type="file"
                      accept=".txt,.md,.csv,.pdf,image/*"
                      className="hidden"
                      onChange={(event) => {
                        void handleFile(event.target.files?.[0]);
                        event.target.value = "";
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => void toggleRecording()}
                    className={`composer-tool ${recording ? "recording" : ""}`}
                  >
                    {recording ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    <span className="hidden sm:inline">{recording ? t("stopRecord") : t("record")}</span>
                  </button>

                  <Button
                    onClick={submit}
                    disabled={busy}
                    className="cta-button ms-auto h-11 gap-2 rounded-full px-6"
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
          </div>
        </main>
      </div>
    </div>
  );
}

function ConversationTurn({
  turn,
  loading,
  mapLoading,
  onRetry,
  onEdit,
  onMapImage,
}: {
  turn: StoredTurn;
  loading: boolean;
  mapLoading: boolean;
  onRetry: () => void;
  onEdit: () => void;
  onMapImage: (map: MindMapResult) => void;
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

          {turn.result.format === "mindmap" && (
            <div className="mt-5">
              {turn.mapImage ? (
                <div className="space-y-3">
                  <img src={turn.mapImage} alt={t("mindmapTitle")} className="mindmap-image" />
                  <a href={turn.mapImage} download="studywise-mindmap.png" className="suggestion-chip">
                    <Download className="h-4 w-4" />
                    {t("downloadMap")}
                  </a>
                </div>
              ) : (
                <Button
                  variant="outline"
                  disabled={mapLoading}
                  onClick={() => onMapImage(turn.result!.data as MindMapResult)}
                  className="gap-2 rounded-full text-xs"
                >
                  {mapLoading ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      {t("mapImageLoading")}
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-3.5 w-3.5" />
                      {t("mapImageBtn")}
                    </>
                  )}
                </Button>
              )}
            </div>
          )}

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
