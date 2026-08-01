"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

import { EDUCATION, LANGUAGE_SKILLS } from "@/data/education";
import { Reveal } from "@/components/animations/Reveal";
import { LogoPlaceholder, Placeholder } from "@/components/common/Placeholder";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { LanguageSkill } from "@/types";

export function Education() {
  const { t } = useI18n();
  const items = t.education.items as Record<
    string,
    {
      institution: string;
      credential: string;
      field: string;
      period: string;
      detail: string;
      highlights: string[];
    }
  >;

  return (
    <div className="shell py-16 sm:py-20 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query={t.education.query}
        meta={`${EDUCATION.length} ${t.education.meta}`}
        title={t.education.title}
        accentWord={t.education.accent}
      />

      <div className="mt-10 flex flex-col gap-10">
        {EDUCATION.map((item) => {
          const copy = items[item.id];
          return (
            <Reveal key={item.id}>
              <div className="grid gap-7 border-t-2 border-[color:var(--fg)] pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div>
                  <div className="flex items-start gap-4">
                    <LogoPlaceholder
                      src={item.logo}
                      alt={copy.institution}
                      fallback={copy.institution
                        .split(" ")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")}
                    />
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                        {copy.period} · {copy.detail}
                      </p>
                      <h3 className="display mt-2 text-[clamp(1.5rem,3.5vw,2.25rem)]">
                        {copy.credential} {copy.field}
                      </h3>
                    </div>
                  </div>

                  {item.institutionUrl ? (
                    <a
                      href={item.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block border-b border-current text-[15px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--accent)]"
                    >
                      {copy.institution}
                    </a>
                  ) : (
                    <p className="mt-3 text-[15px] text-[color:var(--fg-muted)]">
                      {copy.institution}
                    </p>
                  )}

                  <ul className="mt-6 flex flex-col">
                    {copy.highlights.map((highlight, i) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45, delay: i * 0.06 }}
                        className="flex gap-4 border-b border-[color:var(--line)] py-3.5"
                      >
                        <span className="font-mono text-[11px] text-[color:var(--accent)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] leading-snug">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Campus photo */}
                <Placeholder
                  src={item.image}
                  alt={copy.institution}
                  label={copy.institution}
                  hint={`public${item.image}`}
                  icon="graduation-cap"
                  aspect="aspect-4/3"
                  sizes="(max-width: 1024px) 92vw, 560px"
                  className="rounded-none"
                />
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12">
        <p className="mono-label">{t.education.languagesLabel}</p>
        <ul className="mt-4 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
          {LANGUAGE_SKILLS.map((language, index) => (
            <LanguageCell key={language.key} language={language} delay={index * 0.07} />
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function LanguageCell({ language, delay }: { language: LanguageSkill; delay: number }) {
  const ref = React.useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const { t } = useI18n();

  const copy = (t.education.languages as Record<string, { name: string; level: string }>)[
    language.key
  ];

  return (
    <li ref={ref} className="bg-[color:var(--surface)] p-5">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-lg font-semibold tracking-tight">{copy?.name}</span>
        <span className="font-mono text-[11px] text-[color:var(--accent)]">{copy?.level}</span>
      </div>
      <div
        className="mt-3.5 h-1.5 w-full bg-[color:var(--line)]"
        role="progressbar"
        aria-valuenow={language.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${copy?.name} — ${t.a11y.proficiency}`}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: language.proficiency / 100 } : { scaleX: 0 }}
          transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
          className="h-full w-full origin-left"
          style={{ background: "var(--accent)" }}
        />
      </div>
    </li>
  );
}
