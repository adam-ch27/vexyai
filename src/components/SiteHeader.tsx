import { Link } from "@tanstack/react-router";
import { Headphones, Info, Menu, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandLogo } from "@/components/BrandLogo";
import { LanguageMenu } from "@/components/LanguageMenu";
import { useLanguage } from "@/hooks/useLanguage";
import type { InfoTopic } from "@/lib/site-content";

const links: { topic: InfoTopic; icon: typeof Info; label: "support" | "about" | "faq" | "helpCenter" | "privacy" | "terms" }[] = [
  { topic: "support", icon: Headphones, label: "support" },
  { topic: "about", icon: Info, label: "about" },
  { topic: "faq", icon: Sparkles, label: "faq" },
  { topic: "help", icon: Headphones, label: "helpCenter" },
  { topic: "privacy", icon: ShieldCheck, label: "privacy" },
  { topic: "terms", icon: ShieldCheck, label: "terms" },
];

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <LanguageMenu compact={compact} />
      <Button
        variant="ghost"
        disabled
        className="hidden h-10 gap-2 rounded-full px-4 text-sm font-bold opacity-100 sm:inline-flex"
      >
        {t("login")}
        <Badge className="border-0 bg-secondary px-2 py-0.5 text-[10px] font-bold text-accent-strong">
          {t("soon")}
        </Badge>
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
          <DropdownMenuItem asChild className="gap-2 rounded-xl py-3">
            <Link to="/account">
              <UserRound className="h-4 w-4" />
              {t("account")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {links.map(({ topic, icon: Icon, label }) => (
            <DropdownMenuItem key={topic} asChild className="gap-2 rounded-xl py-3">
              <Link to="/info/$topic" params={{ topic }}>
                <Icon className="h-4 w-4" />
                {t(label)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { BrandLogo };
