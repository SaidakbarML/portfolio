"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSurfaceTone } from "@/hooks/useSurfaceTone";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/**
 * Slim status bar. The DAG rail is the primary navigation on desktop, so this
 * carries identity, the command palette and the mobile menu only.
 */
export function TopBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const { t } = useI18n();

  const active = NAV_ITEMS.find((item) => item.id === activeId) ?? NAV_ITEMS[0];
  const onPaper = useSurfaceTone(28) === "paper";

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: EASE_OUT_EXPO }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500",
          onPaper
            ? "border-ink/12 bg-paper/80 text-ink"
            : "border-white/12 bg-ink/75 text-white",
        )}
      >
        <div className="flex h-14 items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label={`${SITE.name} — ${t.a11y.home}`}>
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-[3px] font-mono text-[11px] font-bold transition-colors duration-500",
                onPaper ? "bg-volt text-white" : "bg-cyan text-ink",
              )}
            >
              SU
            </span>
            <span className="text-[13px] font-semibold tracking-tight">{SITE.name}</span>
            <span
              className={cn(
                "ml-1 hidden font-mono text-[10px] tracking-[0.18em] uppercase sm:inline",
                onPaper ? "text-ink/45" : "text-white/40",
              )}
            >
              / {active.task}
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] md:flex",
                onPaper ? "text-ink/45" : "text-white/40",
              )}
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-lime" />
              </span>
              {t.topbar.openToWork}
            </span>

            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label={t.a11y.openPalette}
              className={cn(
                "hidden items-center gap-1.5 rounded-[4px] border px-2.5 py-1.5 font-mono text-[11px] transition-colors md:flex",
                onPaper
                  ? "border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"
                  : "border-white/15 text-white/55 hover:border-white/40 hover:text-white",
              )}
            >
              <Command className="size-3" />K
            </button>

            <LanguageSwitcher onPaper={onPaper} />

            <a
              href="#contact"
              className={cn(
                "rounded-[4px] px-4 py-2 text-[13px] font-semibold transition-transform hover:-translate-y-0.5",
                onPaper ? "bg-ink text-paper" : "bg-cyan text-ink",
              )}
            >
              {t.topbar.hireMe}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              aria-expanded={mobileOpen}
              className={cn(
                "flex size-9 items-center justify-center rounded-[4px] border xl:hidden",
                onPaper ? "border-ink/15" : "border-white/15",
              )}
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile: the DAG rendered full-screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink pt-14 xl:hidden"
          >
            <motion.ol
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex h-full flex-col justify-center gap-1 px-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                    },
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/10 py-4"
                  >
                    <span className="font-mono text-[11px] text-cyan">{item.stage}</span>
                    <span
                      className={cn(
                        "text-2xl font-semibold tracking-tight",
                        activeId === item.id ? "text-cyan" : "text-white/70",
                      )}
                    >
                      {t.nav[item.id]}
                    </span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/30">
                      {item.task}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
