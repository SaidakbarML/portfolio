"use client";

import { motion } from "framer-motion";

import { HEADLINE_STATS } from "@/data/stats";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** A ledger rather than a card grid: full-bleed rows with an oversized number. */
export function Stats() {
  const { t } = useI18n();

  return (
    <section
      aria-label={t.stats.title}
      className="border-t border-white/8 py-14"
    >
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6 border-b border-white/15 pb-3">
          <h2 className="text-2xl font-bold tracking-tight">{t.stats.title}</h2>
        </div>

        <ul>
          {HEADLINE_STATS.map((stat, index) => {
            const copy = t.stats.items[stat.key as keyof typeof t.stats.items];
            return (
              <motion.li
                key={stat.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease: EASE_OUT_EXPO }}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-white/12 py-4 transition-colors duration-300 hover:bg-white/5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:px-3"
              >
                <span className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-volt transition-transform duration-300 group-hover:translate-x-2">
                  {stat.prefix}{stat.value}{stat.suffix}
                </span>
                <span className="text-[15px] font-medium sm:text-base">{copy?.label}</span>
                {copy?.description && (
                  <span className="col-span-2 mt-0.5 font-mono text-[11px] text-white/35 sm:col-span-1 sm:mt-0 sm:text-right">
                    {copy.description}
                  </span>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
