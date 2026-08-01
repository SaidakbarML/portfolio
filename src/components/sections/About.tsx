"use client";

import { motion } from "framer-motion";

import { FACT_KEYS, PRINCIPLE_ICONS, PRINCIPLE_KEYS } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { WordReveal } from "@/components/animations/WordReveal";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { TechMarquee } from "@/components/common/TechMarquee";
import { useI18n } from "@/i18n/LanguageProvider";

export function About() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden">
      <div className="shell py-16 sm:py-20 xl:pl-[calc(var(--rail-w)-4rem)]">
        <QueryHeading
          query={t.about.query}
          meta={t.about.meta}
          title={t.about.title}
          accentWord={t.about.accent}
        />

        {/* Narrative — scroll-linked word highlight, two columns */}
        <div className="mt-12 grid gap-x-12 gap-y-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {t.about.paragraphs.slice(0, 2).map((paragraph, i) => (
              <WordReveal key={i} text={paragraph} className="text-lg leading-[1.45] sm:text-xl" />
            ))}
          </div>
          <div className="flex flex-col gap-5 lg:pt-10">
            {t.about.paragraphs.slice(2).map((paragraph, i) => (
              <WordReveal key={i} text={paragraph} className="text-base leading-[1.5] sm:text-lg" />
            ))}
          </div>
        </div>

        {/* Facts */}
        <Reveal className="mt-14">
          <p className="mono-label">{t.about.recordLabel}</p>
          <dl className="mt-3 grid border-t border-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {FACT_KEYS.map((key) => (
              <div
                key={key}
                className="flex flex-col gap-1 border-b border-[color:var(--line)] py-4 pr-6 sm:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
                  {t.about.facts[key].label}
                </dt>
                <dd className="text-[15px] font-medium">{t.about.facts[key].value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Principles */}
        <div className="mt-14">
          <p className="mono-label">{t.about.principlesLabel}</p>
          <ol className="mt-4 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLE_KEYS.map((key, i) => (
              <li
                key={key}
                className="group relative bg-[color:var(--surface)] p-5 transition-colors duration-300 hover:bg-[color:var(--surface-2)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <UiIcon
                      name={PRINCIPLE_ICONS[key]}
                      className="size-4 text-[color:var(--fg-faint)] transition-colors group-hover:text-[color:var(--accent)]"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">
                    {t.about.principles[key].title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-[color:var(--fg-muted)]">
                    {t.about.principles[key].body}
                  </p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <TechMarquee className="pb-14" />
    </div>
  );
}
