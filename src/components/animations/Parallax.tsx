"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface ParallaxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Positive drifts up as you scroll down, negative drifts down. */
  speed?: number;
  axis?: "y" | "x";
  /** Smooths the scroll-linked value so motion feels weighted. */
  damped?: boolean;
}

export function Parallax({
  children,
  className,
  speed = 60,
  axis = "y",
  damped = true,
  ...props
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const source = damped ? smooth : scrollYProgress;
  const distance = reduceMotion ? 0 : speed;
  const offset = useTransform(source, [0, 1], [distance, -distance]);

  return (
    <motion.div
      ref={ref}
      style={axis === "y" ? { y: offset } : { x: offset }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}

/** Scales and fades content as it enters and leaves the viewport. */
export function ScrollScale({
  children,
  className,
  from = 0.88,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { from?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.45"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : from, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}
