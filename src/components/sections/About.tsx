"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { PROFILE } from "@/data/profile";
import { Reveal } from "@/components/animations/Reveal";
import { WordReveal } from "@/components/animations/WordReveal";
import { UiIcon } from "@/components/common/Icon";
import { QueryHeading } from "@/components/common/QueryHeading";
import { TechMarquee } from "@/components/common/TechMarquee";

export function About() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="shell py-24 sm:py-32 xl:pl-[calc(var(--rail-w)-4rem)]">
        <QueryHeading
          query="SELECT * FROM engineer WHERE ships = true"
          meta="1 row · 12ms"
          title="I build ML that"
          accentWord="survives production."
        />

        {/* Narrative — two columns, scroll-linked word highlight */}
        <div className="mt-16 grid gap-x-14 gap-y-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {PROFILE.about.slice(0, 2).map((paragraph, i) => (
              <WordReveal
                key={i}
                text={paragraph}
                className="text-xl leading-[1.45] sm:text-2xl"
              />
            ))}
          </div>
          <div className="flex flex-col gap-6 lg:pt-16">
            {PROFILE.about.slice(2).map((paragraph, i) => (
              <WordReveal
                key={i}
                text={paragraph}
                className="text-lg leading-[1.5] sm:text-xl"
              />
            ))}
          </div>
        </div>

        {/* Facts as a data readout */}
        <Reveal className="mt-20">
          <p className="mono-label">record</p>
          <dl className="mt-4 grid border-t border-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {PROFILE.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1.5 border-b border-[color:var(--line)] py-5 pr-6 sm:odd:border-r lg:odd:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--fg-faint)]">
                  {fact.label}
                </dt>
                <dd className="text-base font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Principles — numbered, no cards */}
        <div className="mt-20">
          <p className="mono-label">operating principles</p>
          <ol className="mt-6 grid gap-px border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
            {PROFILE.principles.map((principle, i) => (
              <li
                key={principle.title}
                className="group relative bg-[color:var(--surface)] p-7 transition-colors duration-300 hover:bg-[color:var(--surface-2)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-widest text-[color:var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <UiIcon
                    name={principle.icon}
                    className="size-5 text-[color:var(--fg-faint)] transition-colors group-hover:text-[color:var(--accent)]"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[15px] leading-snug text-[color:var(--fg-muted)]">
                  {principle.body}
                </p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Full-bleed tool marquee */}
      <motion.div style={{ x: shift }} className="pb-20">
        <TechMarquee />
      </motion.div>
    </div>
  );
}
