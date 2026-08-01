"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Project } from "@/types";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t } = useI18n();

  return (
    <AnimatePresence>
      {project && (
        <Dialog open onOpenChange={(open) => !open && onClose()}>
          <DialogContent aria-describedby={`${project.id}-desc`}>
            <ModalBody project={project} t={t} />
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

function ModalBody({
  project,
  t,
}: {
  project: Project;
  t: ReturnType<typeof useI18n>["t"];
}) {
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const metricLabels = copy.metrics as Record<string, string>;
  const linkLabels = copy.links as Record<string, string>;

  return (
    <div className="slab-ink overflow-y-auto overscroll-contain">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-3 sm:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
          {t.projects.caseStudy} / {project.slug}
        </span>
        <span className="mono-label hidden sm:block">{project.year}</span>
      </div>

      <div className="px-6 py-7 sm:px-8">
        <DialogTitle className="display text-[clamp(2.25rem,6vw,4rem)]">{copy.name}</DialogTitle>
        <DialogDescription
          id={`${project.id}-desc`}
          className="mt-3 max-w-2xl text-base leading-snug text-[color:var(--fg-muted)]"
        >
          {copy.tagline}
        </DialogDescription>

        <dl className="mt-7 grid grid-cols-2 gap-px border border-[color:var(--line)] bg-[color:var(--line)] lg:grid-cols-4">
          {project.metrics.map((metric, i) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05, ease: EASE_OUT_EXPO }}
              className="bg-[color:var(--surface)] p-4"
            >
              <dd className="display text-2xl text-[color:var(--accent)]">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </dd>
              <dt className="mono-label mt-1.5">{metricLabels[metric.key]}</dt>
            </motion.div>
          ))}
        </dl>

        <Block n="01" title={t.projects.blocks.overview}>
          <p>{copy.summary}</p>
        </Block>

        <div className="grid gap-x-10 lg:grid-cols-2">
          <Block n="02" title={t.projects.blocks.problem}>
            <p>{copy.problem}</p>
          </Block>
          <Block n="03" title={t.projects.blocks.solution}>
            <p>{copy.solution}</p>
          </Block>
        </div>

        <Block n="04" title={t.projects.blocks.architecture}>
          <p className="mb-5">{copy.architecture}</p>
          <Placeholder
            src={project.architectureDiagram}
            alt={t.projects.architectureDiagram}
            label={t.projects.architectureDiagram}
            hint={`public${project.architectureDiagram}`}
            icon="workflow"
            aspect="aspect-16/9"
            sizes="(max-width: 1024px) 92vw, 830px"
            className="rounded-none"
          />
        </Block>

        <Block n="05" title={t.projects.blocks.stack}>
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

        <Block n="06" title={t.projects.blocks.challenges}>
          <ul className="grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
            {copy.challenges.map((challenge) => (
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
          <Block n="07" title={t.projects.blocks.deployment}>
            <p>{copy.deployment}</p>
          </Block>
          <Block n="08" title={t.projects.blocks.scalability}>
            <p>{copy.scalability}</p>
          </Block>
        </div>

        <Block n="09" title={t.projects.blocks.impact}>
          <p>{copy.impact}</p>
        </Block>

        {project.screenshots.length > 0 && (
          <Block n="10" title={t.projects.blocks.screenshots}>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((shot, i) => (
                <Placeholder
                  key={shot}
                  src={shot}
                  alt={`${copy.name} — ${t.projects.screenshot} ${i + 1}`}
                  label={`${t.projects.screenshot} ${i + 1}`}
                  hint={`public${shot}`}
                  icon="line-chart"
                  sizes="(max-width: 640px) 88vw, 400px"
                  className="rounded-none"
                />
              ))}
            </div>
          </Block>
        )}

        <div className="grid gap-x-10 lg:grid-cols-2">
          <Block n="11" title={t.projects.blocks.lessons}>
            <List items={copy.lessons} />
          </Block>
          <Block n="12" title={t.projects.blocks.future}>
            <List items={copy.future} />
          </Block>
        </div>

        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-[color:var(--line)] pt-7">
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
                {linkLabels[link.key]}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
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
    <section className="mt-8 border-t border-[color:var(--line)] pt-6">
      <h3 className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
          {n}
        </span>
        <span className="text-base font-semibold tracking-tight text-[color:var(--fg)]">
          {title}
        </span>
      </h3>
      <div className="mt-3.5 text-[14px] leading-relaxed text-[color:var(--fg-muted)]">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2 size-1.5 shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-[13px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
