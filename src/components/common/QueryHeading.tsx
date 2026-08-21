"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface QueryHeadingProps {
  query?: string;
  meta?: string;
  title: string;
  accentWord?: string;
  lede?: string;
  className?: string;
}

export function QueryHeading({ title, accentWord, lede, className }: QueryHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={cn(className)}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="text-[clamp(2rem,5vw,3.25rem)] font-bold tracking-tight leading-[1.05]"
      >
        {title}
        {accentWord && (
          <span className="ml-2 text-volt">{accentWord}</span>
        )}
      </motion.h2>

      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT_EXPO }}
          className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/60"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
