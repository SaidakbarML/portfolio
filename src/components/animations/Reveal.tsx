"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO, viewportEarly } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.75,
  distance = 32,
  blur = true,
  once = true,
  amount = viewportEarly.amount,
  ...props
}: RevealProps) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x * distance,
      y: offset.y * distance,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/** Parent wrapper — pair with <StaggerItem> children. */
export function Stagger({
  children,
  className,
  stagger = 0.09,
  delay = 0.05,
  once = true,
  amount = 0.15,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 26,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { distance?: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: EASE_OUT_EXPO },
        },
      }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}
