"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TypingTextProps {
  phrases: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
}

interface TypingState {
  index: number;
  length: number;
  deleting: boolean;
}

const INITIAL: TypingState = { index: 0, length: 0, deleting: false };

export function TypingText({
  phrases,
  className,
  typeSpeed = 62,
  deleteSpeed = 28,
  holdDuration = 1900,
}: TypingTextProps) {
  const reduceMotion = useReducedMotion();
  const [state, setState] = React.useState<TypingState>(INITIAL);

  const current = phrases[state.index % phrases.length] ?? "";
  const display = current.slice(0, state.length);

  React.useEffect(() => {
    if (reduceMotion) return;

    const atEnd = !state.deleting && state.length === current.length;
    const atStart = state.deleting && state.length === 0;

    // Every transition happens inside the timeout, so no state is written
    // synchronously during the effect body.
    const delay = atEnd ? holdDuration : state.deleting ? deleteSpeed : typeSpeed;

    const timeout = setTimeout(() => {
      setState((prev) => {
        if (atStart) {
          return { index: (prev.index + 1) % phrases.length, length: 0, deleting: false };
        }
        if (atEnd) {
          return { ...prev, deleting: true };
        }
        return { ...prev, length: prev.length + (prev.deleting ? -1 : 1) };
      });
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    state,
    current.length,
    phrases.length,
    reduceMotion,
    typeSpeed,
    deleteSpeed,
    holdDuration,
  ]);

  // Reduced motion still gets the message, just without the animation.
  if (reduceMotion) {
    return <span className={className}>{phrases.join(" · ")}</span>;
  }

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      {/* Screen readers get the full list rather than a mutating string. */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden style={{ color: "var(--accent, #00e5ff)" }}>
        {display}
      </span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] animate-caret"
        style={{ background: "var(--accent, #00e5ff)" }}
      />
    </span>
  );
}
