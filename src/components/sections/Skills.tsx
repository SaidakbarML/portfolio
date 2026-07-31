"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { SKILL_CATEGORIES } from "@/data/skills";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Skill, SkillCategory } from "@/types";

const TOTAL_SKILLS = SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0);

/** Proficiency rendered as a 5-cell density meter instead of a progress bar. */
const CELLS = 5;

export function Skills() {
  const [activeId, setActiveId] = React.useState(SKILL_CATEGORIES[0].id);
  const active = SKILL_CATEGORIES.find((c) => c.id === activeId) ?? SKILL_CATEGORIES[0];

  return (
    <div className="shell py-24 sm:py-32 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query="SELECT skill, level FROM stack GROUP BY domain"
        meta={`${TOTAL_SKILLS} rows · ${SKILL_CATEGORIES.length} groups`}
        title="Weighted by what I've"
        accentWord="actually run."
        lede="Depth reflects production use, not tutorials watched."
      />

      <div className="mt-16 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        {/* Domain selector */}
        <ul className="flex flex-col bg-[color:var(--surface)]">
          {SKILL_CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setActiveId(category.id)}
                onMouseEnter={() => setActiveId(category.id)}
                aria-pressed={category.id === activeId}
                className={cn(
                  "group flex w-full items-center gap-3.5 border-b border-[color:var(--line)] px-5 py-4 text-left transition-colors duration-200",
                  category.id === activeId
                    ? "bg-[color:var(--accent)] text-[color:var(--on-accent)]"
                    : "hover:bg-[color:var(--surface-2)]",
                )}
              >
                <UiIcon name={category.icon} className="size-4 shrink-0" aria-hidden />
                <span className="flex-1 text-[15px] font-medium">{category.title}</span>
                <span className="font-mono text-[11px] opacity-60">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Detail panel */}
        <div className="bg-[color:var(--surface)] p-6 sm:p-9">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-3xl sm:text-4xl">{active.title}</h3>
              <span className="mono-label shrink-0">{active.id}</span>
            </div>
            <p className="mt-3 text-[15px] text-[color:var(--fg-muted)]">{active.blurb}</p>

            <ul className="mt-8 flex flex-col">
              {active.skills.map((skill, i) => (
                <SkillRow key={skill.name} skill={skill} index={i} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const filled = Math.round((skill.level / 100) * CELLS);

  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: EASE_OUT_EXPO }}
      className="group flex items-center gap-5 border-t border-[color:var(--line)] py-3.5 last:border-b"
    >
      <span className="flex-1 text-[15px] font-medium">{skill.name}</span>

      {skill.note && (
        <span className="hidden font-mono text-[10px] text-[color:var(--fg-faint)] sm:block">
          {skill.note}
        </span>
      )}

      <span
        className="flex shrink-0 gap-1"
        role="img"
        aria-label={`${skill.name}: ${filled} of ${CELLS}`}
      >
        {Array.from({ length: CELLS }, (_, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0.2, opacity: 0.3 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: index * 0.06 + i * 0.05 }}
            className={cn("h-5 w-2.5 origin-bottom")}
            style={{
              background: i < filled ? "var(--accent)" : "var(--line)",
            }}
          />
        ))}
      </span>
    </motion.li>
  );
}

/** Skill categories are also used by the SEO graph. */
export type { SkillCategory };
