"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

import { EDUCATION } from "@/data/education";
import { LANGUAGES } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { QueryHeading } from "@/components/common/QueryHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Education() {
  return (
    <div className="shell py-24 sm:py-32 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query="SELECT * FROM education"
        meta={`${EDUCATION.length} row · 4ms`}
        title="Studying and shipping,"
        accentWord="in parallel."
      />

      <div className="mt-14 flex flex-col gap-12">
        {EDUCATION.map((item) => (
          <Reveal key={item.id}>
            <div className="grid gap-8 border-t-2 border-[color:var(--fg)] pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {item.period} · {item.detail}
                </p>
                <h3 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)]">
                  {item.credential} {item.field}
                </h3>
                {item.institutionUrl ? (
                  <a
                    href={item.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block border-b border-current text-[15px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--accent)]"
                  >
                    {item.institution}
                  </a>
                ) : (
                  <p className="mt-3 text-[15px] text-[color:var(--fg-muted)]">
                    {item.institution}
                  </p>
                )}
              </div>

              <ul className="flex flex-col">
                {item.highlights.map((highlight, i) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex gap-5 border-b border-[color:var(--line)] py-4"
                  >
                    <span className="font-mono text-[11px] text-[color:var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-snug">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Languages */}
      <Reveal className="mt-16">
        <p className="mono-label">languages</p>
        <ul className="mt-5 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-3">
          {LANGUAGES.map((language, index) => (
            <LanguageCell key={language.name} language={language} delay={index * 0.08} />
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function LanguageCell({
  language,
  delay,
}: {
  language: (typeof LANGUAGES)[number];
  delay: number;
}) {
  const ref = React.useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <li ref={ref} className="bg-[color:var(--surface)] p-6">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-xl font-semibold tracking-tight">{language.name}</span>
        <span className="font-mono text-[11px] text-[color:var(--accent)]">
          {language.level}
        </span>
      </div>
      <div
        className="mt-4 h-1.5 w-full bg-[color:var(--line)]"
        role="progressbar"
        aria-valuenow={language.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${language.name} proficiency`}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: language.proficiency / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: EASE_OUT_EXPO }}
          className="h-full w-full origin-left"
          style={{ background: "var(--accent)" }}
        />
      </div>
    </li>
  );
}
