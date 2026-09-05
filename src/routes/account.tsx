import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Lock, MessagesSquare, Sparkles, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { useConversations } from "@/lib/history";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "حسابي — StudyWise AI" },
      {
        name: "description",
        content: "تابع محادثاتك المحفوظة على جهازك وعدد الموارد التي أنشأتها في StudyWise AI.",
      },
      { property: "og:title", content: "حسابي — StudyWise AI" },
      {
        property: "og:description",
        content: "لوحة حسابك في StudyWise AI: المحادثات المحفوظة والموارد المولّدة.",
      },
    ],
  }),
  component: Account,
});

function Account() {
  const { t, dir } = useLanguage();
  const { conversations, clear } = useConversations();
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;
  const resources = conversations.reduce(
    (total, item) => total + item.turns.filter((turn) => turn.result).length,
    0,
  );

  return (
    <main dir={dir} className="chat-shell min-h-screen text-foreground">
      <header className="sticky top-0 z-20 border-b bg-card/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <BrandLogo size={34} compact />
          <SiteHeader compact />
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 pb-20 pt-10">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          <BackArrow className="h-4 w-4" />
          {t("backHome")}
        </Link>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{t("account")}</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">{t("accountLead")}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="assistant-bubble">
            <span className="icon-tile mb-4">
              <MessagesSquare className="h-5 w-5" />
            </span>
            <p className="text-3xl font-black">{conversations.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("sessionsCount")}</p>
          </div>
          <div className="assistant-bubble">
            <span className="icon-tile mb-4">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="text-3xl font-black">{resources}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("savedResources")}</p>
          </div>
        </div>

        <div className="assistant-bubble mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-accent-strong" />
            <div>
              <p className="font-bold">
                {t("login")}{" "}
                <Badge className="border-0 bg-secondary text-[10px] text-accent-strong">{t("soon")}</Badge>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t("localOnly")}</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="gap-2 rounded-full text-xs"
            disabled={conversations.length === 0}
            onClick={() => {
              clear();
              toast.success(t("cleared"));
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
            {t("clearAll")}
          </Button>
        </div>

        <div className="mt-8 space-y-2">
          <p className="text-sm font-bold text-muted-foreground">{t("history")}</p>
          {conversations.length === 0 && (
            <p className="text-sm text-muted-foreground">{t("noHistory")}</p>
          )}
          {conversations.map((item) => (
            <Link
              key={item.id}
              to="/chat"
              search={{ c: item.id }}
              className="assistant-bubble flex items-center justify-between gap-4 !py-4"
            >
              <span className="truncate text-sm font-semibold">{item.title || t("untitled")}</span>
              <span className="shrink-0 text-xs text-muted-foreground">
                {new Date(item.updatedAt).toLocaleDateString()}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
