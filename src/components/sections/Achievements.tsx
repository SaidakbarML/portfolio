"use client";

import { motion } from "framer-motion";

import { ACHIEVEMENTS } from "@/data/stats";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Achievements() {
  return (
    <div className="shell pb-24 pt-8 sm:pb-32 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query="SELECT outcome FROM work WHERE shipped = true"
        meta={`${ACHIEVEMENTS.length} rows · 6ms`}
        title="What the work"
        accentWord="produced."
      />

      <ul className="mt-14 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement, index) => (
          <li
            key={achievement.id}
            className="group relative flex flex-col bg-[color:var(--surface)] p-7 transition-colors duration-300 hover:bg-[color:var(--surface-2)]"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
              style={{ background: "var(--accent)" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.07, ease: EASE_OUT_EXPO }}
            >
            <div className="flex items-start justify-between gap-4">
              <UiIcon
                name={achievement.icon}
                className="size-5 text-[color:var(--fg-faint)] transition-colors group-hover:text-[color:var(--accent)]"
                aria-hidden
              />
              {achievement.metric && (
                <span className="display text-4xl text-[color:var(--accent)]">
                  <AnimatedCounter
                    value={achievement.metric.value}
                    prefix={achievement.metric.prefix}
                    suffix={achievement.metric.suffix}
                    decimals={achievement.metric.decimals}
                  />
                </span>
              )}
            </div>

            <h3 className="mt-6 text-lg font-semibold leading-tight tracking-tight">
              {achievement.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-snug text-[color:var(--fg-muted)]">
              {achievement.description}
            </p>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
