import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";
import { authorName, contactEmail } from "@/lib/site-content";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-9 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
          <Link to="/info/$topic" params={{ topic: "about" }}>{t("about")}</Link>
          <Link to="/info/$topic" params={{ topic: "help" }}>{t("helpCenter")}</Link>
          <Link to="/info/$topic" params={{ topic: "faq" }}>{t("faq")}</Link>
          <Link to="/info/$topic" params={{ topic: "privacy" }}>{t("privacy")}</Link>
          <Link to="/info/$topic" params={{ topic: "terms" }}>{t("terms")}</Link>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
        <p className="text-xs text-muted-foreground">{t("footerLine")}</p>
        <p className="author-line">
          {t("builtBy")} <span>{authorName}</span>
        </p>
      </div>
    </footer>
  );
}
