"use client";

import { motion } from "framer-motion";

import { LOCALES, LOCALE_META } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

/** Segmented EN / UZ / RU control. Inverts with the surface behind it. */
export function LanguageSwitcher({ onPaper }: { onPaper: boolean }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.a11y.changeLanguage}
      className={cn(
        "flex items-center overflow-hidden rounded-[4px] border",
        onPaper ? "border-ink/15" : "border-white/15",
      )}
    >
      {LOCALES.map((code) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            aria-label={LOCALE_META[code].label}
            className={cn(
              "relative px-2 py-1.5 font-mono text-[11px] font-medium transition-colors",
              isActive
                ? onPaper
                  ? "text-white"
                  : "text-ink"
                : onPaper
                  ? "text-ink/50 hover:text-ink"
                  : "text-white/50 hover:text-white",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="lang-active"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className={cn("absolute inset-0", onPaper ? "bg-ink" : "bg-cyan")}
              />
            )}
            <span className="relative">{LOCALE_META[code].short}</span>
          </button>
        );
      })}
    </div>
  );
}
