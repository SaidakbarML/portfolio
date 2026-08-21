"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { FACT_KEYS, PRINCIPLE_ICONS, PRINCIPLE_KEYS } from "@/data/profile";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";

export function About() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="shell py-20 sm:py-24">
      <QueryHeading title={t.about.title} accentWord={t.about.accent} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid gap-x-12 gap-y-5 lg:grid-cols-2"
      >
        {t.about.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-gray-600">
            {paragraph}
          </p>
        ))}
      </motion.div>

      <motion.dl
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-14 grid border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FACT_KEYS.map((key) => (
          <div
            key={key}
            className="flex flex-col gap-1 border-b border-gray-100 py-4 pr-6 sm:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
          >
            <dt className="mono-label">{t.about.facts[key].label}</dt>
            <dd className="text-[15px] font-medium text-gray-900">{t.about.facts[key].value}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14"
      >
        <p className="mono-label mb-4">{t.about.principlesLabel}</p>
        <ol className="grid gap-px border border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLE_KEYS.map((key, i) => (
            <li key={key} className="group bg-white p-5 transition-colors hover:bg-gray-50">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] tracking-widest text-volt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <UiIcon
                  name={PRINCIPLE_ICONS[key]}
                  className="size-4 text-gray-300 transition-colors group-hover:text-volt"
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-gray-900">
                {t.about.principles[key].title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-snug text-gray-500">
                {t.about.principles[key].body}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>
    </div>
  );
}
