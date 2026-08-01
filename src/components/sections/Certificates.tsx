"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CERTIFICATES } from "@/data/education";
import { LogoPlaceholder } from "@/components/common/Placeholder";
import { QueryHeading } from "@/components/common/QueryHeading";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Certificates() {
  const { t } = useI18n();
  const items = t.certificates.items as Record<string, { name: string; skills: string[] }>;

  return (
    <div className="shell py-16 sm:py-20 xl:pl-[calc(var(--rail-w)-4rem)]">
      <QueryHeading
        query={t.certificates.query}
        meta={`${CERTIFICATES.length} ${t.certificates.meta}`}
        title={t.certificates.title}
        accentWord={t.certificates.accent}
      />

      <ul className="mt-10 border-t border-[color:var(--line)]">
        {CERTIFICATES.map((certificate, index) => {
          const copy = items[certificate.id];
          const Row = certificate.href ? motion.a : motion.div;

          return (
            <motion.li
              key={certificate.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_OUT_EXPO }}
            >
              <Row
                {...(certificate.href
                  ? { href: certificate.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid grid-cols-1 items-center gap-x-5 gap-y-3 border-b border-[color:var(--line)] py-5 transition-colors duration-300 hover:bg-[color:var(--surface-2)] sm:grid-cols-[auto_minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:px-3"
              >
                <LogoPlaceholder
                  src={certificate.logo}
                  alt={certificate.issuer}
                  fallback={certificate.issuer.slice(0, 2).toUpperCase()}
                  className="size-11"
                />

                <h3 className="text-lg font-semibold leading-tight tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                  {copy?.name}
                </h3>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--fg-faint)]">
                    {certificate.issuer}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {copy?.skills.map((skill) => (
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
