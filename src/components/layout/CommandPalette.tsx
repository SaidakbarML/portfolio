"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CornerDownLeft, Download, Mail, Search } from "lucide-react";

import { NAV_ITEMS } from "@/constants/navigation";
import { CONTACT, SITE } from "@/constants/site";
import { SOCIALS } from "@/data/profile";
import { PROJECTS } from "@/data/projects";
import { UiIcon } from "@/components/common/Icon";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Command {
  id: string;
  label: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const close = React.useCallback(() => onOpenChange(false), [onOpenChange]);

  const commands = React.useMemo<Command[]>(() => {
    const go = (id: string) => () => {
      close();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const openUrl = (href: string) => () => {
      close();
      window.open(href, "_blank", "noopener,noreferrer");
    };

    return [
      ...NAV_ITEMS.map((item) => ({
        id: `nav-${item.id}`,
        label: item.label,
        group: "Navigate",
        icon: <ArrowRight className="size-4" />,
        action: go(item.id),
      })),
      ...PROJECTS.map((project) => ({
        id: `project-${project.id}`,
        label: project.name,
        group: "Projects",
        icon: <span className="font-mono text-xs">{"</>"}</span>,
        action: go("projects"),
        keywords: project.stack.join(" "),
      })),
      {
        id: "resume",
        label: "Download CV",
        group: "Actions",
        icon: <Download className="size-4" />,
        action: () => {
          close();
          window.open(SITE.resumePath, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "email",
        label: `Email — ${CONTACT.email}`,
        group: "Actions",
        icon: <Mail className="size-4" />,
        action: () => {
          close();
          window.location.href = `mailto:${CONTACT.email}`;
        },
      },
      ...SOCIALS.filter((s) => s.icon !== "mail").map((social) => ({
        id: `social-${social.label}`,
        label: social.label,
        group: "Links",
        icon: <UiIcon name={social.icon} className="size-4" />,
        action: openUrl(social.href),
      })),
    ];
  }, [close]);

  const filtered = React.useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((command) =>
      `${command.label} ${command.group} ${command.keywords ?? ""}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  // Reset derived selection during render rather than in an effect.
  // https://react.dev/learn/you-might-not-need-an-effect
  const [prevQuery, setPrevQuery] = React.useState(query);
  if (prevQuery !== query) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const [prevOpen, setPrevOpen] = React.useState(open);
  if (prevOpen !== open) {
    setPrevOpen(open);
    if (open) {
      setQuery("");
      setPrevQuery("");
      setActiveIndex(0);
    }
  }

  React.useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      filtered[activeIndex]?.action();
    } else if (event.key === "Escape") {
      close();
    }
  }

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Command palette">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="absolute inset-0 bg-ink/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
            onKeyDown={handleKeyDown}
            className="absolute left-1/2 top-[14vh] w-[min(38rem,92vw)] -translate-x-1/2 overflow-hidden border-2 border-cyan bg-ink shadow-[0_40px_120px_-24px_rgba(0,0,0,0.95)]"
          >
            <div className="flex items-center gap-3 border-b border-white/15 px-5 py-4">
              <Search className="size-4 shrink-0 text-cyan" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects and links…"
                aria-label="Search"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
              <kbd className="hidden border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white/40 sm:block">
                ESC
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-white/40">
                  No results for “{query}”
                </p>
              )}

              {filtered.map((command, index) => {
                const showGroup = command.group !== lastGroup;
                lastGroup = command.group;

                return (
                  <React.Fragment key={command.id}>
                    {showGroup && (
                      <p className="px-3 pb-1.5 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                        {command.group}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={command.action}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={cn(
                        "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors",
                        index === activeIndex
                          ? "bg-cyan text-ink"
                          : "text-white/65 hover:bg-white/8",
                      )}
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center">
                        {command.icon}
                      </span>
                      <span className="flex-1 truncate">{command.label}</span>
                      {index === activeIndex && (
                        <CornerDownLeft className="size-3.5 shrink-0 opacity-60" />
                      )}
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
