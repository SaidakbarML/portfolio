"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { NAV_ITEMS } from "@/constants/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSurfaceTone } from "@/hooks/useSurfaceTone";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/**
 * Fixed left rail rendering the page as a DAG. Nodes are pipeline stages, the
 * connecting edge fills with scroll progress, and the whole rail inverts when
 * the stage underneath it switches between ink and paper.
 */
export function PipelineRail() {
  const activeId = useScrollSpy(SECTION_IDS);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll();
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeId);
  const onPaper = useSurfaceTone() === "paper";

  return (
    <nav
      aria-label={t.a11y.pipelineStages}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-dvh w-[var(--rail-w)] flex-col justify-center pl-8 xl:flex"
    >
      <div className="pointer-events-auto relative">
        <div
          aria-hidden
          className={cn(
            "absolute left-[7px] top-3 h-[calc(100%-1.5rem)] w-[2px] transition-colors duration-500",
            onPaper ? "bg-ink/15" : "bg-white/15",
          )}
        >
          <motion.div
            style={{ scaleY: fill }}
            className={cn(
              "h-full w-full origin-top transition-colors duration-500",
              onPaper ? "bg-volt" : "bg-cyan",
            )}
          />
        </div>

        <ol className="relative flex flex-col gap-6">
          {NAV_ITEMS.map((item, index) => {
            const isActive = item.id === activeId;
            const isDone = activeIndex > index;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-4"
                >
                  <span className="relative flex size-4 shrink-0 items-center justify-center">
                    {isActive && (
                      <motion.span
                        layoutId="rail-halo"
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        className={cn(
                          "absolute inset-[-7px] rounded-full",
                          onPaper ? "bg-volt/20" : "bg-cyan/25",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative size-2.5 rotate-45 transition-all duration-300",
                        isActive
                          ? onPaper
                            ? "scale-125 bg-volt"
                            : "scale-125 bg-cyan shadow-[0_0_14px_var(--color-cyan)]"
                          : isDone
                            ? onPaper
                              ? "bg-violet"
                              : "bg-volt"
                            : onPaper
                              ? "bg-ink/25 group-hover:bg-ink/60"
                              : "bg-white/25 group-hover:bg-white/60",
                      )}
                    />
                  </span>

                  <span className="flex flex-col leading-none">
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.2em] transition-colors duration-500",
                        isActive
                          ? onPaper
                            ? "text-volt"
                            : "text-cyan"
                          : onPaper
                            ? "text-ink/40"
                            : "text-white/35",
                      )}
                    >
                      {item.stage}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-[13px] font-medium transition-colors duration-500",
                        isActive
                          ? onPaper
                            ? "text-ink"
                            : "text-white"
                          : onPaper
                            ? "text-ink/50 group-hover:text-ink"
                            : "text-white/45 group-hover:text-white/85",
                      )}
                    >
                      {t.nav[item.id]}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
