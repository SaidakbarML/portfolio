"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { PROFILE } from "@/data/profile";
import { EASE_OUT_EXPO } from "@/lib/motion";

const BOOT_LINES = [
  "connecting to pipeline…",
  "loading stages 00–07",
  "ready",
];

/** Brief boot sequence that lifts once the page is interactive. */
export function Preloader() {
  const [visible, setVisible] = React.useState(true);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), reduceMotion ? 120 : 1050);
    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  React.useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          aria-hidden
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="fixed inset-0 z-90 flex flex-col justify-between bg-ink p-6 sm:p-10"
        >
          <div className="flex items-center justify-between">
            <span className="flex size-9 items-center justify-center bg-cyan font-mono text-xs font-bold text-ink">
              SU
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
              {PROFILE.headline}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {BOOT_LINES.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.22 }}
                className="font-mono text-[11px] text-white/45"
              >
                <span className="text-cyan">❯</span> {line}
              </motion.p>
            ))}
          </div>

          <div>
            <p className="display text-[clamp(2rem,8vw,5rem)] text-white">
              {PROFILE.fullName}
            </p>
            <div className="mt-5 h-[3px] w-full bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.95, ease: EASE_OUT_EXPO }}
                className="h-full w-full origin-left bg-cyan"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
