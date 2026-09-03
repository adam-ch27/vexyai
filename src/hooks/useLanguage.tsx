import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { languageInfo, translate, type LanguageCode, type TranslationKey } from "@/lib/i18n";

type LanguageContextValue = {
  language: LanguageCode;
  dir: "rtl" | "ltr";
  setLanguage: (code: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "studywise-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
    if (stored && stored !== language) setLanguageState(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dir = languageInfo(language).dir;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    window.localStorage.setItem(STORAGE_KEY, code);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, dir, setLanguage, t: (key: TranslationKey) => translate(language, key) }),
    [language, dir, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
