"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "li";
  /** Adds lift + accent border on hover. */
  interactive?: boolean;
  /** Solid offset shadow in the slab's accent colour. */
  offset?: boolean;
}

/**
 * Hard-edged surface that inherits its slab's tone tokens. Deliberately not a
 * glass card — the whole design leans printed rather than frosted.
 */
export function Panel({
  className,
  children,
  as = "div",
  interactive = true,
  offset = false,
  ...props
}: PanelProps) {
  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "panel relative",
        interactive && "transition-colors duration-300 hover:border-[color:var(--accent)]",
        offset && "panel-offset",
        className,
      )}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </Comp>
  );
}

/** Numbered corner tag used on project and achievement panels. */
export function PanelIndex({ value }: { value: string }) {
  return (
    <span
      className="absolute right-0 top-0 px-2.5 py-1 font-mono text-[10px] tracking-widest"
      style={{ background: "var(--accent)", color: "var(--on-accent)" }}
    >
      {value}
    </span>
  );
}
