"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { HEADLINE_STATS } from "@/data/stats";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { EASE_OUT_EXPO } from "@/lib/motion";

/**
 * A ledger rather than a card grid: full-bleed rows that expand on hover, with
 * an oversized number per line.
 */
export function Stats() {
  const ref = React.useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bandX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      data-tone="ink"
      aria-label="Impact by the numbers"
      className="slab-ink relative overflow-hidden py-20 sm:py-24"
    >
      <motion.div
        aria-hidden
        style={reduceMotion ? undefined : { x: bandX }}
        className="pointer-events-none absolute inset-y-0 -left-[10%] w-[120%] dot-bg opacity-25"
      />

      <div className="shell relative xl:pl-[calc(var(--rail-w)-4rem)]">
        <div className="flex items-baseline justify-between gap-6 border-b-2 border-white pb-4">
          <h2 className="display text-[clamp(1.75rem,4vw,3rem)]">By the numbers</h2>
          <span className="mono-label shrink-0">
            {HEADLINE_STATS.length} metrics
          </span>
        </div>

        <ul>
          {HEADLINE_STATS.map((stat, index) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: EASE_OUT_EXPO }}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-white/12 py-5 transition-colors duration-300 hover:bg-white/5 sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:px-3"
            >
              <span className="display text-[clamp(2rem,5vw,3.25rem)] text-cyan transition-transform duration-300 group-hover:translate-x-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="text-base font-medium sm:text-lg">{stat.label}</span>
              {stat.description && (
                <span className="col-span-2 mt-1 font-mono text-[11px] text-white/35 sm:col-span-1 sm:mt-0 sm:text-right">
                  {stat.description}
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
