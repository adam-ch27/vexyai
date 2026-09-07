import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/hooks/useLanguage";
import { contactEmail, infoPage, infoTopics, type InfoTopic } from "@/lib/site-content";

export const Route = createFileRoute("/info/$topic")({
  beforeLoad: ({ params }) => {
    if (!infoTopics.includes(params.topic as InfoTopic)) throw notFound();
  },
  head: () => ({
    meta: [
      { title: "معلومات ودعم — StudyWise AI" },
      {
        name: "description",
        content: "صفحات الدعم والمعلومات والأسئلة الشائعة وسياسة الخصوصية وشروط الاستخدام في StudyWise AI.",
      },
      { property: "og:title", content: "معلومات ودعم — StudyWise AI" },
      {
        property: "og:description",
        content: "كل ما تحتاج معرفته عن StudyWise AI: الدعم، الأسئلة الشائعة، الخصوصية والشروط.",
      },
    ],
  }),
  component: InfoRoute,
});

function InfoRoute() {
  const { topic } = Route.useParams();
  const { t, dir, language } = useLanguage();
  const page = infoPage(language, topic as InfoTopic);
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

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

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{page.title}</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">{page.lead}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {page.highlights.map((item) => (
            <span key={item} className="highlight-pill">
              <Sparkles className="h-3.5 w-3.5" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {page.sections.map((section) => (
            <article key={section.heading} className="assistant-bubble">
              <h2 className="text-lg font-bold">{section.heading}</h2>
              <p className="mt-2 text-sm leading-8 text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="assistant-bubble mt-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold">{t("emailUs")}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t("responseTime")}</p>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="suggestion-chip"
          >
            <Mail className="h-4 w-4" />
            {contactEmail}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
