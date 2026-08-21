"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { SKILL_CATEGORIES } from "@/data/skills";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const TOTAL_SKILLS = SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0);

/** Proficiency as a 5-cell density meter rather than a progress bar. */
const CELLS = 5;

export function Skills() {
  const [activeId, setActiveId] = React.useState(SKILL_CATEGORIES[0].id);
  const { t } = useI18n();

  const active = SKILL_CATEGORIES.find((c) => c.id === activeId) ?? SKILL_CATEGORIES[0];
  const groups = t.skills.groups as Record<
    string,
    { title: string; blurb: string; notes: Record<string, string> }
  >;
  const activeCopy = groups[active.id];

  return (
    <div className="shell py-16 sm:py-20">
      <QueryHeading
        query={t.skills.query}
        meta={`${TOTAL_SKILLS} ${t.skills.metaRows} · ${SKILL_CATEGORIES.length} ${t.skills.metaGroups}`}
        title={t.skills.title}
        accentWord={t.skills.accent}
        lede={t.skills.lede}
      />

      <div className="mt-12 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
        <ul className="flex flex-col bg-[color:var(--surface)]">
          {SKILL_CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setActiveId(category.id)}
                onMouseEnter={() => setActiveId(category.id)}
                aria-pressed={category.id === activeId}
                className={cn(
                  "flex w-full items-center gap-3 border-b border-[color:var(--line)] px-4 py-3 text-left transition-colors duration-200",
                  category.id === activeId
                    ? "bg-[color:var(--accent)] text-[color:var(--on-accent)]"
                    : "hover:bg-[color:var(--surface-2)]",
                )}
              >
                <UiIcon name={category.icon} className="size-4 shrink-0" aria-hidden />
                <span className="flex-1 text-[14px] font-medium">
                  {groups[category.id]?.title}
                </span>
                <span className="font-mono text-[11px] opacity-60">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="bg-[color:var(--surface)] p-5 sm:p-7">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl sm:text-3xl">{activeCopy?.title}</h3>
              <span className="mono-label shrink-0">{active.id}</span>
            </div>
            <p className="mt-2 text-[14px] text-[color:var(--fg-muted)]">{activeCopy?.blurb}</p>

            <ul className="mt-6 flex flex-col">
              {active.skills.map((skill, i) => (
                <SkillRow
                  key={skill.name}
                  skill={skill}
                  index={i}
                  label={t.skills.names[skill.name] ?? skill.name}
                  note={activeCopy?.notes?.[skill.name]}
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SkillRow({
  skill,
  index,
  label,
  note,
}: {
  skill: Skill;
  index: number;
  label: string;
  note?: string;
}) {
  const filled = Math.round((skill.level / 100) * CELLS);

  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: EASE_OUT_EXPO }}
      className="flex items-center gap-4 border-t border-[color:var(--line)] py-3 last:border-b"
    >
      <span className="flex-1 text-[14px] font-medium">{label}</span>

      {note && (
        <span className="hidden font-mono text-[10px] text-[color:var(--fg-faint)] sm:block">
          {note}
        </span>
      )}

      <span className="flex shrink-0 gap-1" role="img" aria-label={`${label}: ${filled}/${CELLS}`}>
        {Array.from({ length: CELLS }, (_, i) => (
          <span
            key={i}
            className="h-4 w-2.5"
            style={{ background: i < filled ? "var(--accent)" : "var(--line)" }}
          />
        ))}
      </span>
    </motion.li>
  );
}
