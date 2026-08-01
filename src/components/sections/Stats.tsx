"use client";

import { motion } from "framer-motion";

import { HEADLINE_STATS } from "@/data/stats";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** A ledger rather than a card grid: full-bleed rows with an oversized number. */
export function Stats() {
  const { t } = useI18n();

  return (
    <section
      data-tone="ink"
      aria-label={t.stats.title}
      className="slab-ink relative overflow-hidden py-14"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-20" />

      <div className="shell relative xl:pl-[calc(var(--rail-w)-4rem)]">
        <div className="flex items-baseline justify-between gap-6 border-b-2 border-white pb-3">
          <h2 className="display text-[clamp(1.5rem,3.5vw,2.5rem)]">{t.stats.title}</h2>
          <span className="mono-label shrink-0">
            {HEADLINE_STATS.length} {t.stats.metricsCount}
          </span>
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
                <span className="display text-[clamp(1.75rem,4vw,2.75rem)] text-cyan transition-transform duration-300 group-hover:translate-x-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
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
