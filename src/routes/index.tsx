import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  Info,
  Menu,
  Quote,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageMenu } from "@/components/LanguageMenu";
import { useLanguage } from "@/hooks/useLanguage";
import { nextQuoteIndex, studyQuotes } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StudyWise AI — ذاكر بذكاء بست لغات" },
      {
        name: "description",
        content:
          "ألصق درسك واحصل على ملخص واضح أو بطاقات مراجعة أو خريطة ذهنية، بالعربية والفرنسية والإنجليزية والألمانية والإسبانية والبرتغالية.",
      },
      { property: "og:title", content: "StudyWise AI — ذاكر بذكاء بست لغات" },
      {
        property: "og:description",
        content: "حوّل أي درس إلى ملخص أو بطاقات أو خريطة ذهنية في ثوانٍ.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, dir, language } = useLanguage();
  const quotes = studyQuotes[language];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => setQuoteIndex(0), [language]);

  useEffect(() => {
    const timer = window.setInterval(
      () => setQuoteIndex((index) => nextQuoteIndex(index, quotes.length)),
      7000,
    );
    return () => window.clearInterval(timer);
  }, [quotes.length]);

  const quote = quotes[quoteIndex] ?? quotes[0]!;
  const StartArrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <main dir={dir} className="study-home min-h-screen overflow-hidden text-foreground">
      <div className="study-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="brand-mark">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            StudyWise <span className="brand-accent">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <LanguageMenu />
          <Button
            variant="ghost"
            className="hidden rounded-full px-5 text-sm font-bold sm:inline-flex"
          >
            {t("login")}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                aria-label={t("openMenu")}
                className="h-10 w-10 rounded-full bg-card/70 p-0 shadow-sm"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2">
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <UserRound className="h-4 w-4" />
                {t("account")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <Headphones className="h-4 w-4" />
                {t("support")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <Info className="h-4 w-4" />
                {t("about")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <Sparkles className="h-4 w-4" />
                {t("faq")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <Headphones className="h-4 w-4" />
                {t("helpCenter")}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <ShieldCheck className="h-4 w-4" />
                {t("privacy")}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 rounded-xl py-3">
                <ShieldCheck className="h-4 w-4" />
                {t("terms")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-10 text-center lg:px-8">
        <div className="floating-note note-right">
          <span>{t("perk1")}</span>
          <Sparkles className="h-4 w-4 text-accent-strong" />
        </div>
        <div className="floating-note note-left">
          <BookOpen className="h-4 w-4 text-accent-strong" />
          <span>{t("perk3")}</span>
        </div>

        <Badge className="mb-7 gap-2 rounded-full border bg-card/80 px-4 py-2 text-accent-strong shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-current" />
          {t("studySpace")}
        </Badge>

        <h1 className="max-w-4xl text-5xl font-black leading-[1.2] tracking-tight sm:text-7xl">
          {t("heroLead")} <span className="text-accent-strong">{t("heroAccent")}</span>
          <br className="hidden sm:block" /> {t("heroTail")}
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
          {t("heroSub")}
        </p>

        <Link to="/chat" className="mt-10">
          <Button className="cta-button h-16 gap-3 rounded-full px-8 text-base font-extrabold sm:px-10 sm:text-lg">
            {t("start")}
            <StartArrow className="h-5 w-5" />
          </Button>
        </Link>

        <div className="quote-card mt-16 max-w-xl">
          <Quote className="mx-auto mb-3 h-5 w-5 text-accent-strong" />
          <p key={`${language}-${quoteIndex}`} className="quote-animate min-h-14 text-lg font-bold leading-8">
            “{quote.text}”
          </p>
          <p className="mt-2 text-sm text-muted-foreground">— {quote.author}</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-muted-foreground">
          <span>{t("perk1")}</span>
          <span className="h-1 w-1 rounded-full bg-current" />
          <span>{t("perk2")}</span>
          <span className="h-1 w-1 rounded-full bg-current" />
          <span>{t("perk3")}</span>
        </div>
      </section>
    </main>
  );
}
