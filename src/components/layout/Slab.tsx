"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import type { SlabTone } from "@/types";

interface SlabProps {
  id?: string;
  tone: SlabTone;
  stage?: string;
  task?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * One pipeline stage. Owns its own surface tokens, so every child styles
 * itself from --fg / --line / --accent and inverts automatically.
 */
export function Slab({
  id,
  tone,
  stage,
  task,
  label,
  ariaLabel,
  className,
  children,
}: SlabProps) {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The stage header bar tracks scroll progress through the slab.
  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={ref}
      id={id}
      data-tone={tone}
      aria-label={ariaLabel}
      className={cn(
        "relative scroll-mt-20",
        tone === "ink" ? "slab-ink" : "slab-paper",
        className,
      )}
    >
      {stage && (
        <header className="relative z-10 border-b border-[color:var(--line)]">
          <div className="shell flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-3 sm:gap-5">
              <span
                className="flex size-6 items-center justify-center rounded-[3px] text-[10px] font-bold"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                {stage}
              </span>
              <span className="mono-label">{label}</span>
              {task && (
                <span className="mono-label hidden sm:inline opacity-60">
                  task&nbsp;=&nbsp;{task}
                </span>
              )}
            </div>

            <div className="h-[3px] w-24 shrink-0 sm:w-40" style={{ background: "var(--line)" }}>
              <motion.div
                style={{ scaleX: progress, background: "var(--accent)" }}
                className="h-full w-full origin-left"
              />
            </div>
          </div>
        </header>
      )}

      {children}
    </section>
  );
}
