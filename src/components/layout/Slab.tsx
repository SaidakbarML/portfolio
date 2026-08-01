"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import type { SectionId, SlabTone } from "@/types";

interface SlabProps {
  id: SectionId;
  tone: SlabTone;
  stage?: string;
  task?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * One pipeline stage. Owns its surface tokens, so every child styles itself
 * from --fg / --line / --accent and inverts automatically.
 */
export function Slab({ id, tone, stage, task, className, children }: SlabProps) {
  const ref = React.useRef<HTMLElement>(null);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={ref}
      id={id}
      data-tone={tone}
      aria-label={t.nav[id]}
      className={cn(
        "relative scroll-mt-16",
        tone === "ink" ? "slab-ink" : "slab-paper",
        className,
      )}
    >
      {stage && (
        <header className="relative z-10 border-b border-[color:var(--line)]">
          <div className="shell flex items-center justify-between gap-4 py-2.5">
            <div className="flex items-center gap-3 sm:gap-5">
              <span
                className="flex size-6 items-center justify-center rounded-[3px] text-[10px] font-bold"
                style={{ background: "var(--accent)", color: "var(--on-accent)" }}
              >
                {stage}
              </span>
              <span className="mono-label">{t.nav[id]}</span>
              {task && (
                <span className="mono-label hidden opacity-60 sm:inline">
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
