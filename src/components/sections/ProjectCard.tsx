"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TechIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
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
  const github = project.links.find((link) => link.type === "github");
  const demo = project.links.find((link) => link.type === "demo" || link.type === "live");

  return (
    <article
      className={cn(
        "group flex h-full flex-col border border-[color:var(--line)] bg-[color:var(--surface)] transition-colors duration-300 hover:border-[color:var(--accent)]",
        className,
      )}
    >
      {/* Header strip */}
      <div className="flex items-center justify-between gap-3 border-b border-[color:var(--line)] px-5 py-3">
        <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--fg-faint)]">
          {project.status}
        </span>
      </div>

      {/* Cover */}
      <div className="relative overflow-hidden border-b border-[color:var(--line)]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Placeholder
            src={project.cover}
            alt={`${project.name} preview`}
            label={project.name}
            hint={`public${project.cover}`}
            icon="line-chart"
            accent={project.accent}
            aspect="aspect-16/9"
            sizes="(max-width: 768px) 90vw, 30rem"
            className="rounded-none border-0"
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-3xl">{project.name}</h3>
          <span className="shrink-0 font-mono text-[11px] text-[color:var(--fg-faint)]">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-[15px] leading-snug text-[color:var(--accent)]">
          {project.tagline}
        </p>

        <p className="mt-4 line-clamp-3 text-[14px] leading-relaxed text-[color:var(--fg-muted)]">
          {project.summary}
        </p>

        {/* Metrics */}
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <dd className="display text-2xl">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </dd>
              <dt className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--fg-faint)]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>

        {/* Stack */}
        <ul className="mt-6 flex flex-wrap gap-1.5">
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

        {/* Actions — links only render when they exist */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="group/btn flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider"
            style={{ color: "var(--accent)" }}
          >
            Case study
            <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>

          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="flex items-center gap-1.5 text-[13px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              <SiGithub className="size-3.5" aria-hidden />
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live site`}
              className="flex items-center gap-1.5 text-[13px] text-[color:var(--fg-muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              {demo.type === "live" ? "Live" : "Demo"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
