"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

/**
 * Radix primitives handle focus trapping and dismissal; `asChild` hands the
 * rendering to Framer Motion so enter/exit stay animated.
 */
const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal forceMount>
    <DialogPrimitive.Overlay forceMount asChild>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-md"
      />
    </DialogPrimitive.Overlay>

    <DialogPrimitive.Content ref={ref} forceMount asChild {...props}>
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 flex max-h-[92dvh] w-[min(64rem,94vw)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden border-2 border-cyan bg-ink shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]",
          className,
        )}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute right-4 top-3 z-20 flex size-9 items-center justify-center border border-white/20 bg-ink text-white/70 transition-colors hover:border-cyan hover:text-cyan"
        >
          <X className="size-4" />
        </DialogPrimitive.Close>
      </motion.div>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = "DialogContent";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
