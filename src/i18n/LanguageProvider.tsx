"use client";

import * as React from "react";

import { DEFAULT_LOCALE, LOCALE_META, STORAGE_KEY, isLocale, type Locale } from "./config";
import { getDictionary, type Dictionary } from "./index";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

/**
 * Language state lives on the client so the site stays a single static page —
 * no per-locale routes to deploy, and switching is instant with no reload.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

  // Restore the saved choice after hydration. Reading during render would
  // desync the server HTML, so this deliberately runs as an effect.
  React.useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const preferred = window.navigator.language?.slice(0, 2);

    const next = [fromUrl, stored, preferred].find(isLocale);
    if (next && next !== DEFAULT_LOCALE) setLocaleState(next);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing can block storage; the choice just won't persist.
    }
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: getDictionary(locale) }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = React.useContext(LanguageContext);
  if (!context) throw new Error("useI18n must be used inside <LanguageProvider>");
  return context;
}
