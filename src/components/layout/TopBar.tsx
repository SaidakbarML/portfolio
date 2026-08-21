"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navigation";
import { SITE } from "@/constants/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const NAV_LINKS = NAV_ITEMS.filter((item) => item.id !== "home");

export function TopBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const { t } = useI18n();

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-black/8 bg-white/95 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-8">
          <a
            href="#home"
            aria-label={`${SITE.name} — home`}
            className="text-sm font-semibold tracking-tight text-gray-900 transition-opacity hover:opacity-60"
          >
            {SITE.name}
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-sm transition-colors",
                  activeId === item.id
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                {t.nav[item.id]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded px-4 py-2 text-[13px] font-semibold bg-volt text-white transition-opacity hover:opacity-85 lg:block"
            >
              {t.topbar.hireMe}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex size-9 items-center justify-center rounded border border-black/12 text-gray-700 lg:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-16 lg:hidden"
          >
            <nav className="flex flex-col px-6 pt-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-black/8 py-4 text-2xl font-semibold tracking-tight text-gray-500 transition-colors hover:text-gray-900"
                >
                  {t.nav[item.id]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 rounded px-6 py-3.5 text-center text-sm font-bold bg-volt text-white"
              >
                {t.topbar.hireMe}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
