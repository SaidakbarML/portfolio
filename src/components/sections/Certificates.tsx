"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CERTIFICATES } from "@/data/education";
import { QueryHeading } from "@/components/common/QueryHeading";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Certificates() {
  return (
    <div className="shell py-24 sm:py-32 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query="SELECT name, issuer FROM certificates"
        meta={`${CERTIFICATES.length} rows · 3ms`}
        title="Training, applied"
        accentWord="immediately."
      />

      <ul className="mt-14 border-t border-[color:var(--line)]">
        {CERTIFICATES.map((certificate, index) => {
          const Row = certificate.href ? motion.a : motion.div;

          return (
            <motion.li
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: EASE_OUT_EXPO }}
            >
              <Row
                {...(certificate.href
                  ? { href: certificate.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid grid-cols-1 items-center gap-x-6 gap-y-3 border-b border-[color:var(--line)] py-7 transition-colors duration-300 hover:bg-[color:var(--surface-2)] sm:grid-cols-[3rem_minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:px-4"
              >
                <span className="font-mono text-[11px] text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-semibold leading-tight tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {certificate.name}
                </h3>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--fg-faint)]">
                    {certificate.issuer}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-[color:var(--line)] px-2 py-0.5 text-[11px] text-[color:var(--fg-muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </span>
                </div>

                {certificate.href && (
                  <ArrowUpRight className="size-5 shrink-0 text-[color:var(--fg-faint)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[color:var(--accent)]" />
                )}
              </Row>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
