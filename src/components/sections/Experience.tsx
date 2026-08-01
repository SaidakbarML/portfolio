"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { EXPERIENCES } from "@/data/experience";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Reveal } from "@/components/animations/Reveal";
import { TechIcon } from "@/components/common/Icon";
import { LogoPlaceholder } from "@/components/common/Placeholder";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Experience as ExperienceType } from "@/types";

export function Experience() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.65"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="shell py-16 sm:py-20 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query={t.experience.query}
        meta={`${EXPERIENCES.length} ${t.experience.meta}`}
        title={t.experience.title}
        accentWord={t.experience.accent}
        lede={t.experience.lede}
      />

      <div className="relative mt-12">
        <div
          aria-hidden
          className="absolute left-2 top-4 hidden h-[calc(100%-2rem)] w-[2px] bg-[color:var(--line)] md:block"
        >
          <motion.div
            style={{ scaleY: fill, background: "var(--accent)" }}
            className="h-full w-full origin-top"
          />
        </div>

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((experience, index) => (
            <Role key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Role({ experience, index }: { experience: ExperienceType; index: number }) {
  const { t } = useI18n();
  const copy = t.experience.roles[experience.id as keyof typeof t.experience.roles];
  const progression = copy.progression as Record<string, string>;
  const metricLabels = copy.metrics as Record<string, string>;

  return (
    <Reveal delay={index * 0.06} className="relative md:pl-14">
      <motion.span
        aria-hidden
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="absolute left-0 top-3 hidden size-4 md:block"
        style={{ background: "var(--accent)" }}
      />

      <div className="flex flex-col gap-4 border-b-2 border-[color:var(--fg)] pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-4">
          <LogoPlaceholder
            src={experience.logo}
            alt={experience.company}
            fallback={experience.company.slice(0, 2).toUpperCase()}
          />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
              {experience.company} — {copy.employmentType}
            </p>
            <h3 className="display mt-2 text-[clamp(1.5rem,3.5vw,2.5rem)]">{copy.role}</h3>
          </div>
        </div>
        <div className="shrink-0 text-left lg:text-right">
          <p className="font-mono text-sm font-medium">{copy.period}</p>
          <p className="mono-label mt-1">{copy.location}</p>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-snug text-[color:var(--fg-muted)]">
        {copy.summary}
      </p>

      {experience.progressionKeys.length > 0 && (
        <ol className="mt-6 flex flex-wrap items-center gap-2">
          {experience.progressionKeys.map((key, i) => {
            const isLast = i === experience.progressionKeys.length - 1;
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-2"
              >
                <span
                  className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider"
                  style={
                    isLast
                      ? { background: "var(--accent)", color: "var(--on-accent)" }
                      : { border: "1px solid var(--line)", color: "var(--fg-muted)" }
                  }
                >
                  {progression[key]}
                </span>
                {!isLast && (
                  <span aria-hidden className="text-[color:var(--fg-faint)]">
                    →
                  </span>
                )}
              </motion.li>
            );
          })}
        </ol>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <ul className="flex flex-col">
          {copy.achievements.slice(0, 4).map((achievement, i) => (
            <motion.li
              key={achievement}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex gap-5 border-b border-[color:var(--line)] py-3.5"
            >
              <span className="shrink-0 font-mono text-[11px] text-[color:var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-snug">{achievement}</span>
            </motion.li>
          ))}
        </ul>

        <div>
          <p className="mono-label">{t.experience.impactLabel}</p>
          <dl className="mt-3 grid grid-cols-2 gap-px bg-[color:var(--line)]">
            {experience.metrics.map((metric) => (
              <div key={metric.key} className="bg-[color:var(--surface)] p-4">
                <dd className="display text-2xl">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </dd>
                <dt className="mono-label mt-1 !tracking-[0.12em]">
                  {metricLabels[metric.key]}
                </dt>
              </div>
            ))}
          </dl>

          <p className="mono-label mt-6">{t.experience.stackLabel}</p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {experience.stack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-1.5 border border-[color:var(--line)] px-2.5 py-1.5 text-[12px] text-[color:var(--fg-muted)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--fg)]"
              >
                <TechIcon name={tech} className="size-3" aria-hidden />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
