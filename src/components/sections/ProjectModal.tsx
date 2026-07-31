"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Project } from "@/types";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <Dialog open onOpenChange={(open) => !open && onClose()}>
          <DialogContent aria-describedby={`${project.id}-desc`}>
            <div className="slab-ink overflow-y-auto overscroll-contain">
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-3.5 sm:px-9">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  case study / {project.slug}
                </span>
                <span className="mono-label hidden sm:block">{project.year}</span>
              </div>

              <div className="px-6 py-8 sm:px-9 sm:py-10">
                <DialogTitle className="display text-[clamp(2.5rem,7vw,5rem)]">
                  {project.name}
                </DialogTitle>
                <DialogDescription
                  id={`${project.id}-desc`}
                  className="mt-4 max-w-2xl text-lg leading-snug text-[color:var(--fg-muted)]"
                >
                  {project.tagline}
                </DialogDescription>

                {/* Metrics */}
                <dl className="mt-9 grid grid-cols-2 gap-px border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-4">
                  {project.metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease: EASE_OUT_EXPO }}
                      className="bg-[color:var(--surface)] p-5"
                    >
                      <dd className="display text-3xl text-[color:var(--accent)]">
                        <AnimatedCounter
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                          decimals={metric.decimals}
                        />
                      </dd>
                      <dt className="mono-label mt-2">{metric.label}</dt>
                    </motion.div>
                  ))}
                </dl>

                <Block n="01" title="Overview">
                  <p>{project.summary}</p>
                </Block>

                <div className="grid gap-x-10 lg:grid-cols-2">
                  <Block n="02" title="Problem">
                    <p>{project.problem}</p>
                  </Block>
                  <Block n="03" title="Solution">
                    <p>{project.solution}</p>
                  </Block>
                </div>

                <Block n="04" title="Architecture">
                  <p className="mb-6">{project.architecture}</p>
                  <Placeholder
                    src={project.architectureDiagram}
                    alt={`${project.name} architecture diagram`}
                    label="Architecture diagram"
                    hint={`public${project.architectureDiagram}`}
                    icon="workflow"
                    accent={project.accent}
                    aspect="aspect-16/9"
                    sizes="(max-width: 1024px) 90vw, 56rem"
                    className="rounded-none"
                  />
                </Block>

                <Block n="05" title="Technology stack">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-1.5 border border-[color:var(--line)] px-2.5 py-1.5 text-[12px] text-[color:var(--fg-muted)]"
                      >
                        <TechIcon name={tech} className="size-3" aria-hidden />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block n="06" title="Challenges & solutions">
                  <ul className="grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
                    {project.challenges.map((challenge) => (
                      <li key={challenge.heading} className="bg-[color:var(--surface)] p-5">
                        <h4 className="text-[15px] font-semibold text-[color:var(--fg)]">
                          {challenge.heading}
                        </h4>
                        <p className="mt-2 text-[13px] leading-relaxed">{challenge.body}</p>
                      </li>
                    ))}
                  </ul>
                </Block>

                <div className="grid gap-x-10 lg:grid-cols-2">
                  <Block n="07" title="Production deployment">
                    <p>{project.deployment}</p>
                  </Block>
                  <Block n="08" title="Scalability">
                    <p>{project.scalability}</p>
                  </Block>
                </div>

                <Block n="09" title="Impact">
                  <p>{project.impact}</p>
                </Block>

                <Block n="10" title="Screenshots">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.screenshots.map((shot, i) => (
                      <Placeholder
                        key={shot}
                        src={shot}
                        alt={`${project.name} screenshot ${i + 1}`}
                        label={`Screenshot ${i + 1}`}
                        hint={`public${shot}`}
                        icon="line-chart"
                        accent={project.accent}
                        sizes="(max-width: 640px) 90vw, 26rem"
                        className="rounded-none"
                      />
                    ))}
                  </div>
                </Block>

                <div className="grid gap-x-10 lg:grid-cols-2">
                  <Block n="11" title="Lessons learned">
                    <List items={project.lessons} />
                  </Block>
                  <Block n="12" title="Future improvements">
                    <List items={project.future} />
                  </Block>
                </div>

                {project.links.length > 0 && (
                  <div className="mt-10 flex flex-wrap gap-3 border-t border-[color:var(--line)] pt-8">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-1"
                        style={{ background: "var(--accent)", color: "var(--on-accent)" }}
                      >
                        {link.type === "github" ? (
                          <SiGithub aria-hidden />
                        ) : (
                          <ArrowUpRight className="size-4" aria-hidden />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-[color:var(--line)] pt-7">
      <h3 className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
          {n}
        </span>
        <span className="text-lg font-semibold tracking-tight text-[color:var(--fg)]">
          {title}
        </span>
      </h3>
      <div className="mt-4 text-[15px] leading-relaxed text-[color:var(--fg-muted)]">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 size-1.5 shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-[14px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
