"use client";

import * as React from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  /** Words brighten progressively as this block scrolls through the viewport. */
  as?: "p" | "h2" | "h3";
}

/**
 * Scroll-linked text highlight: each word interpolates from muted to full
 * contrast based on how far the paragraph has travelled through the viewport.
 */
export function WordReveal({ text, className, as = "p" }: WordRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  const words = text.split(" ");
  const Comp = motion[as];

  return (
    <div ref={ref}>
      <Comp className={cn("flex flex-wrap", className)}>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1.6) / words.length]}
          >
            {word}
          </Word>
        ))}
      </Comp>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute inset-0 opacity-15" aria-hidden>
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

/** Character-level entrance animation for headings. */
export function CharReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.024, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: "0.45em", rotateX: -60 },
            show: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
