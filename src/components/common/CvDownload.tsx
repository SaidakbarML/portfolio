"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Download } from "lucide-react";

import { SITE } from "@/constants/site";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** CV languages actually available as files. */
const CV_LANGUAGES = [
  { code: "en" as const, label: "English", short: "EN" },
  { code: "ru" as const, label: "Русский", short: "RU" },
];

/**
 * Download button that defaults to the CV matching the interface language,
 * with a dropdown to grab the other. Uzbek visitors default to English,
 * since there is no Uzbek CV yet.
 */
export function CvDownload({ className }: { className?: string }) {
  const { locale, t } = useI18n();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const preferred = locale === "ru" ? "ru" : "en";

  React.useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative flex", className)}>
      <a
        href={SITE.resumes[preferred]}
        download
        className="flex items-center gap-2.5 bg-cyan px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-1"
      >
        <Download className="size-4" aria-hidden />
        {t.hero.downloadCv}
        <span className="font-mono text-[11px] opacity-70">
          {preferred.toUpperCase()}
        </span>
      </a>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.hero.cvLanguage}
        className="flex items-center border-l border-ink/25 bg-cyan px-3 text-ink transition-transform hover:-translate-y-1"
      >
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
            className="absolute left-0 top-[calc(100%+0.5rem)] z-30 w-full min-w-48 border-2 border-cyan bg-ink"
          >
            {CV_LANGUAGES.map((language) => (
              <li key={language.code} role="none">
                <a
                  role="menuitem"
                  href={SITE.resumes[language.code]}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-white/10 px-4 py-3 text-[13px] text-white/75 transition-colors last:border-b-0 hover:bg-cyan hover:text-ink"
                >
                  <span className="font-mono text-[10px] opacity-60">{language.short}</span>
                  <span className="flex-1">{language.label}</span>
                  {language.code === preferred && <Check className="size-3.5" aria-hidden />}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
