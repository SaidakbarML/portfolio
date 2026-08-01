"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

import { useI18n } from "@/i18n/LanguageProvider";
import { springSnappy } from "@/lib/motion";

export function BackToTop() {
  const { t } = useI18n();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 720);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t.a11y.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={springSnappy}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center border border-white/20 bg-ink text-white/70 transition-colors hover:border-cyan hover:text-cyan"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
