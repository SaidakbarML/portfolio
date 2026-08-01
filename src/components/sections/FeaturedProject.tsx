"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CircleAlert, Layers, Server, Sparkles, TrendingUp } from "lucide-react";

import Image from "next/image";

import { ASSET_PATHS, asset } from "@/constants/assets";
import { FEATURED_PROJECT } from "@/data/projects";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Reveal } from "@/components/animations/Reveal";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

const project = FEATURED_PROJECT;

const STAGE_ICONS = {
  problem: CircleAlert,
  solution: Sparkles,
  architecture: Layers,
  deployment: Server,
  impact: TrendingUp,
} as const;

const STAGE_KEYS = ["problem", "solution", "architecture", "deployment", "impact"] as const;

export function FeaturedProject({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  const copy = t.projects.items.asint;
  const asintLogo = asset(ASSET_PATHS.logos.asint);
  const metricLabels = copy.metrics as Record<string, string>;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const diagramY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="mt-12">
      <Reveal direction="none">
        <div className="border-2 border-[color:var(--fg)]">
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-2.5"
            style={{ background: "var(--fg)", color: "var(--surface)" }}
          >
            <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em]">
              {asintLogo && (
                <Image
                  src={asintLogo}
                  alt=""
                  aria-hidden
                  width={64}
                  height={18}
                  className="h-4 w-auto brightness-0 invert dark:invert-0"
                />
              )}
              {t.projects.flagship} — {t.projects.statuses[project.status].toLowerCase()}
            </span>
            <span className="font-mono text-[11px] tracking-widest">{project.year}</span>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="display text-[clamp(2.5rem,7vw,5.5rem)]">{copy.name}</h3>
              <p className="mt-3 max-w-lg text-lg leading-snug sm:text-xl">{copy.tagline}</p>
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-[color:var(--fg-muted)]">
                {copy.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="flex items-center gap-2 px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-1"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  <Layers className="size-4" aria-hidden />
                  {t.projects.readCaseStudy}
                </button>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 border border-[color:var(--line-strong)] px-5 py-3 text-sm font-semibold transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {(copy.links as Record<string, string>)[link.key]}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div style={reduceMotion ? undefined : { y: diagramY }}>
              <Placeholder
                src={project.cover}
                alt={copy.name}
                label={copy.name}
                hint={`public${project.cover}`}
                icon="line-chart"
                fit="cover"
                aspect="aspect-3/2"
                sizes="(max-width: 1024px) 92vw, 560px"
                className="rounded-none"
              />
            </motion.div>
          </div>

          <dl className="grid grid-cols-2 border-t-2 border-[color:var(--fg)] lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.key}
                className="border-b border-[color:var(--line)] p-4 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-[color:var(--line)]"
              >
                <dd className="display text-[clamp(1.5rem,3.5vw,2.25rem)]">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </dd>
                <dt className="mono-label mt-1.5">{metricLabels[metric.key]}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* Sticky system breakdown */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-12">
        <div className="lg:sticky lg:top-20 lg:h-fit">
          <Reveal>
            <p className="mono-label">{t.projects.systemBreakdown}</p>
            <h4 className="display mt-3 text-[clamp(1.35rem,3vw,2.1rem)]">
              {t.projects.breakdownTitle}{" "}
              <span style={{ color: "var(--accent)" }}>{t.projects.breakdownAccent}</span>
            </h4>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 8).map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-1.5 border border-[color:var(--line)] px-2.5 py-1.5 text-[12px] text-[color:var(--fg-muted)]"
                >
                  <TechIcon name={tech} className="size-3" aria-hidden />
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ol className="flex flex-col">
          {STAGE_KEYS.map((key, index) => {
            const Icon = STAGE_ICONS[key];
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                className="border-t border-[color:var(--line)] py-5 last:border-b"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="size-4 text-[color:var(--fg-faint)]" aria-hidden />
                  <h5 className="text-base font-semibold tracking-tight">
                    {t.projects.stages[key]}
                  </h5>
                </div>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[color:var(--fg-muted)]">
                  {copy[key]}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
