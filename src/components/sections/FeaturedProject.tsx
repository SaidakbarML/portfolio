"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CircleAlert, Layers, Server, Sparkles, TrendingUp } from "lucide-react";

import { FEATURED_PROJECT } from "@/data/projects";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { Reveal } from "@/components/animations/Reveal";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { EASE_OUT_EXPO } from "@/lib/motion";

const project = FEATURED_PROJECT;

const STAGES = [
  { key: "problem", label: "Problem", icon: CircleAlert, body: project.problem },
  { key: "solution", label: "Solution", icon: Sparkles, body: project.solution },
  { key: "architecture", label: "System design", icon: Layers, body: project.architecture },
  { key: "deployment", label: "Deployment", icon: Server, body: project.deployment },
  { key: "impact", label: "Impact", icon: TrendingUp, body: project.impact },
];

export function FeaturedProject({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const diagramY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={ref} className="mt-16">
      {/* Flagship banner */}
      <Reveal direction="none">
        <div className="border-2 border-[color:var(--fg)]">
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 py-3"
            style={{ background: "var(--fg)", color: "var(--surface)" }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.24em]">
              flagship — {project.status.toLowerCase()}
            </span>
            <span className="font-mono text-[11px] tracking-widest">{project.year}</span>
          </div>

          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="display text-[clamp(3rem,9vw,7rem)]">{project.name}</h3>
              <p className="mt-4 max-w-lg text-xl leading-snug sm:text-2xl">
                {project.tagline}
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[color:var(--fg-muted)]">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-1"
                  style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                >
                  <Layers className="size-4" aria-hidden />
                  Read the case study
                </button>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 border border-[color:var(--line-strong)] px-6 py-3.5 text-sm font-semibold transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div style={reduceMotion ? undefined : { y: diagramY }}>
              <Placeholder
                src={project.architectureDiagram}
                alt="ASINT architecture illustration"
                label="Architecture diagram"
                hint={`public${project.architectureDiagram}`}
                icon="workflow"
                accent="cyan"
                aspect="aspect-4/3"
                sizes="(max-width: 1024px) 90vw, 40rem"
                className="rounded-none"
              />
            </motion.div>
          </div>

          {/* Metric band */}
          <dl className="grid grid-cols-2 border-t-2 border-[color:var(--fg)] lg:grid-cols-4">
            {project.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className="border-b border-[color:var(--line)] p-5 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-[color:var(--line)]"
                style={i % 2 === 0 ? undefined : undefined}
              >
                <dd className="display text-[clamp(1.75rem,4vw,2.75rem)]">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    decimals={metric.decimals}
                  />
                </dd>
                <dt className="mono-label mt-2">{metric.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* Sticky system breakdown */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <Reveal>
            <p className="mono-label">system breakdown</p>
            <h4 className="display mt-4 text-[clamp(1.5rem,3.5vw,2.5rem)]">
              A fragmented market, turned into one{" "}
              <span style={{ color: "var(--accent)" }}>priced API</span>
            </h4>
            <ul className="mt-7 flex flex-wrap gap-1.5">
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
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.li
                key={stage.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
                className="border-t border-[color:var(--line)] py-7 last:border-b"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="size-4 text-[color:var(--fg-faint)]" aria-hidden />
                  <h5 className="text-lg font-semibold tracking-tight">{stage.label}</h5>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--fg-muted)]">
                  {stage.body}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Challenges */}
      <Reveal className="mt-14">
        <p className="mono-label">engineering challenges</p>
        <ul className="mt-5 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
          {project.challenges.map((challenge, i) => (
            <li key={challenge.heading} className="bg-[color:var(--surface)] p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h5 className="text-base font-semibold tracking-tight">
                  {challenge.heading}
                </h5>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--fg-muted)]">
                {challenge.body}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
