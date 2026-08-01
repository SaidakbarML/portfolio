export const LOCALES = ["en", "uz", "ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { label: string; short: string; htmlLang: string }
> = {
  en: { label: "English", short: "EN", htmlLang: "en" },
  uz: { label: "O‘zbekcha", short: "UZ", htmlLang: "uz" },
  ru: { label: "Русский", short: "RU", htmlLang: "ru" },
};

export const STORAGE_KEY = "portfolio-locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}
