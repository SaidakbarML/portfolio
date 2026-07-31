"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface QueryHeadingProps {
  /** Rendered as the executed statement, e.g. "SELECT * FROM experience". */
  query: string;
  /** Result metadata line, e.g. "2 rows · 18ms". */
  meta: string;
  title: string;
  accentWord?: string;
  lede?: string;
  className?: string;
}

/**
 * Section header styled as an executed query rather than the usual
 * eyebrow-plus-gradient-title pattern.
 */
export function QueryHeading({
  query,
  meta,
  title,
  accentWord,
  lede,
  className,
}: QueryHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref} className={cn("flex flex-col", className)}>
      {/* Executed statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[13px] sm:text-sm"
      >
        <span style={{ color: "var(--accent)" }} aria-hidden>
          ❯
        </span>
        <span className="font-medium" style={{ color: "var(--fg-muted)" }}>
          {query}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-[11px]"
          style={{ color: "var(--fg-faint)" }}
        >
          {meta}
        </motion.span>
      </motion.div>

      {/* Oversized display title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="display mt-5 text-[clamp(2.5rem,7vw,6rem)]"
      >
        {title.split(" ").map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ y: "0.9em", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.1 + i * 0.05, ease: EASE_OUT_EXPO }}
            className="mr-[0.22em] inline-block"
          >
            {word}
          </motion.span>
        ))}
        {accentWord && (
          <motion.span
            initial={{ y: "0.9em", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.1 + title.split(" ").length * 0.05,
              ease: EASE_OUT_EXPO,
            }}
            className="inline-block"
            style={{ color: "var(--accent)" }}
          >
            {accentWord}
          </motion.span>
        )}
      </motion.h2>

      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT_EXPO }}
          className="mt-6 max-w-xl text-lg leading-snug"
          style={{ color: "var(--fg-muted)" }}
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
