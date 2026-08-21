"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { EXPERIENCES } from "@/data/experience";
import { TechIcon } from "@/components/common/Icon";
import { LogoPlaceholder } from "@/components/common/Placeholder";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Experience as ExperienceType } from "@/types";

export function Experience() {
  const { t } = useI18n();

  return (
    <div className="shell py-20 sm:py-24">
      <QueryHeading
        title={t.experience.title}
        accentWord={t.experience.accent}
        lede={t.experience.lede}
      />

      <div className="mt-12 flex flex-col gap-14">
        {EXPERIENCES.map((experience, index) => (
          <Role key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}

function Role({ experience, index }: { experience: ExperienceType; index: number }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const copy = t.experience.roles[experience.id as keyof typeof t.experience.roles];
  const metricLabels = copy.metrics as Record<string, string>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease: EASE_OUT_EXPO }}
      className="border-t border-white/10 pt-8"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <LogoPlaceholder
            src={experience.logo}
            alt={experience.company}
            fallback={experience.company.slice(0, 2).toUpperCase()}
          />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-volt">
              {experience.company} — {copy.employmentType}
            </p>
            <h3 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">{copy.role}</h3>
          </div>
        </div>
        <div className="shrink-0 lg:text-right">
          <p className="font-mono text-sm font-medium text-white/70">{copy.period}</p>
          <p className="mono-label mt-1">{copy.location}</p>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/60">{copy.summary}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <ul className="flex flex-col">
          {copy.achievements.slice(0, 4).map((achievement, i) => (
            <li
              key={achievement}
              className="flex gap-5 border-b border-white/8 py-3.5"
            >
              <span className="shrink-0 font-mono text-[11px] text-volt">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-snug">{achievement}</span>
            </li>
          ))}
        </ul>

        <div>
          <p className="mono-label mb-3">{t.experience.stackLabel}</p>
          <ul className="flex flex-wrap gap-1.5">
            {experience.stack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-1.5 border border-white/10 px-2.5 py-1.5 text-[12px] text-white/55 transition-colors hover:border-volt/40 hover:text-white/80"
              >
                <TechIcon name={tech} className="size-3" aria-hidden />
                {tech}
              </li>
            ))}
          </ul>

          {experience.metrics.length > 0 && (
            <>
              <p className="mono-label mt-6 mb-3">{t.experience.impactLabel}</p>
              <dl className="grid grid-cols-2 gap-px bg-white/8">
                {experience.metrics.map((metric) => (
                  <div key={metric.key} className="bg-ink-2 p-4">
                    <dd className="text-2xl font-bold tracking-tight">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </dd>
                    <dt className="mono-label mt-1">{metricLabels[metric.key]}</dt>
                  </div>
                ))}
              </dl>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
