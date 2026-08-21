"use client";

import { motion } from "framer-motion";

import { ACHIEVEMENTS } from "@/data/stats";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Achievements() {
  const { t } = useI18n();
  const items = t.achievements.items as Record<
    string,
    { title: string; description: string; metric: string }
  >;

  return (
    <div className="shell pb-16 pt-4 sm:pb-20">
      <QueryHeading
        query={t.achievements.query}
        meta={`${ACHIEVEMENTS.length} ${t.achievements.meta}`}
        title={t.achievements.title}
        accentWord={t.achievements.accent}
      />

      <ul className="mt-10 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement, index) => {
          const copy = items[achievement.id];
          return (
            <li
              key={achievement.id}
              className="group relative flex flex-col bg-[color:var(--surface)] p-5 transition-colors duration-300 hover:bg-[color:var(--surface-2)]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
                style={{ background: "var(--accent)" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: EASE_OUT_EXPO }}
              >
                <div className="flex items-start justify-between gap-4">
                  <UiIcon
                    name={achievement.icon}
                    className="size-5 text-[color:var(--fg-faint)] transition-colors group-hover:text-[color:var(--accent)]"
                    aria-hidden
                  />
                  <span className="display text-3xl text-[color:var(--accent)]">
                    <AnimatedCounter
                      value={achievement.metric.value}
                      prefix={achievement.metric.prefix}
                      suffix={achievement.metric.suffix}
                      decimals={achievement.metric.decimals}
                    />
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-semibold leading-tight tracking-tight">
                  {copy?.title}
                </h3>
                <p className="mt-2 text-[13px] leading-snug text-[color:var(--fg-muted)]">
                  {copy?.description}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
