import { en, type Dictionary } from "./dictionaries/en";
import { ru } from "./dictionaries/ru";
import { uz } from "./dictionaries/uz";
import { DEFAULT_LOCALE, type Locale } from "./config";

export const DICTIONARIES: Record<Locale, Dictionary> = { en, uz, ru };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

export type { Dictionary };
export * from "./config";
