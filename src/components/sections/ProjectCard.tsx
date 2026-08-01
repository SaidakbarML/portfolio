"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { useI18n } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  index,
  onOpen,
  className,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
  className?: string;
}) {
  const { t } = useI18n();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const metricLabels = copy.metrics as Record<string, string>;
  const linkLabels = copy.links as Record<string, string>;

  const github = project.links.find((link) => link.type === "github");
  const demo = project.links.find((link) => link.type === "demo" || link.type === "live");

  return (
    <article
      className={cn(
        "group flex h-full flex-col border border-[color:var(--line)] bg-[color:var(--surface)] transition-colors duration-300 hover:border-[color:var(--accent)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-2.5">
        <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
          {String(index + 1).padStart(2, "0")} / {copy.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--fg-faint)]">
          {t.projects.statuses[project.status]}
        </span>
      </div>

      <div className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div>
          <Placeholder
            src={project.cover}
            alt={copy.name}
            label={copy.name}
            hint={`public${project.cover}`}
            icon="line-chart"
            fit={project.coverFit}
            aspect="aspect-16/9"
            sizes="(max-width: 640px) 86vw, 368px"
            className="rounded-none border-0"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-2xl">{copy.name}</h3>
          <span className="shrink-0 font-mono text-[11px] text-[color:var(--fg-faint)]">
            {project.year}
          </span>
        </div>

        <p className="mt-2.5 text-[14px] leading-snug text-[color:var(--accent)]">
          {copy.tagline}
        </p>

        <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-[color:var(--fg-muted)]">
          {copy.summary}
        </p>

        <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.key}>
              <dd className="display text-xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </dd>
              <dt className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-faint)]">
                {metricLabels[metric.key]}
              </dt>
            </div>
          ))}
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-1.5 border border-[color:var(--line)] px-2 py-1 text-[11px] text-[color:var(--fg-muted)]"
            >
              <TechIcon name={tech} className="size-3" aria-hidden />
              {tech}
            </li>
          ))}
          {project.stack.length > 5 && (
            <li className="border border-[color:var(--line)] px-2 py-1 text-[11px] text-[color:var(--fg-faint)]">
              +{project.stack.length - 5}
            </li>
          )}
        </ul>

        {/* Links render only when they exist */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="group/btn flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider"
            style={{ color: "var(--accent)" }}
          >
            {t.projects.caseStudy}
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              <SiGithub className="size-3.5" aria-hidden />
              {linkLabels[github.key] ?? t.projects.github}
            </a>
          )}

          {demo && (
            <a
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              {t.projects.live}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
