import { Check, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/lib/i18n";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageMenu({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const current = languages.find((item) => item.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          aria-label={t("language")}
          className={
            compact
              ? "h-9 gap-1.5 rounded-full px-3 text-xs font-bold"
              : "h-10 gap-2 rounded-full bg-card/70 px-3 text-xs font-bold"
          }
        >
          <Languages className="h-4 w-4" />
          {current?.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
        {languages.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => setLanguage(item.code)}
            className="cursor-pointer justify-between rounded-xl py-2.5 font-semibold"
          >
            {item.label}
            {item.code === language && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
