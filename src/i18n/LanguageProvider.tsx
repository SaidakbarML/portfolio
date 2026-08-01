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

/** Nothing external changes the preferred locale, so this never notifies. */
const subscribe = () => () => {};

/** Client snapshot: explicit ?lang= wins, then a saved choice, then the browser. */
function readPreferredLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(fromUrl)) return fromUrl;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }

  const browser = window.navigator.language?.slice(0, 2);
  return isLocale(browser) ? browser : DEFAULT_LOCALE;
}

/**
 * Language state lives on the client so the site stays a single static page —
 * no per-locale routes to deploy, and switching is instant with no reload.
 *
 * The initial value comes from useSyncExternalStore rather than an effect: it
 * returns the default during SSR and hydration, then the real preference, which
 * keeps server and client markup in agreement without a cascading re-render.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const preferred = React.useSyncExternalStore(
    subscribe,
    readPreferredLocale,
    () => DEFAULT_LOCALE,
  );

  const [chosen, setChosen] = React.useState<Locale | null>(null);
  const locale = chosen ?? preferred;

  React.useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setChosen(next);
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
