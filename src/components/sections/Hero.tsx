"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ASSET_PATHS } from "@/constants/assets";
import { PROFILE, SOCIALS } from "@/data/profile";
import { CvDownload } from "@/components/common/CvDownload";
import { UiIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";

const DELAY = 0.1;

export function Hero() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden pt-16">
      <div className="shell relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: DELAY, ease: EASE_OUT_EXPO }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400"
            >
              {t.hero.location} — {t.hero.availability}
            </motion.p>

            <h1 className="mt-5 text-[clamp(3rem,10vw,7rem)] font-bold tracking-tight leading-[0.92] text-gray-900">
              {[PROFILE.firstName, PROFILE.lastName].map((word, wi) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: DELAY + 0.1 + wi * 0.08,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY + 0.35, ease: EASE_OUT_EXPO }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY + 0.5, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CvDownload />
              <a
                href="#projects"
                className="group flex items-center gap-2 border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
              >
                {t.hero.seeWork}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: DELAY + 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[12px] text-gray-400 transition-colors hover:text-gray-700"
                  >
                    <UiIcon name={social.icon} className="size-3.5" aria-hidden />
                    {social.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: DELAY + 0.25, ease: EASE_OUT_EXPO }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
              <Placeholder
                src={ASSET_PATHS.profile}
                alt={PROFILE.fullName}
                label={t.hero.photoLabel}
                hint="public/images/profile.jpg"
                icon="users"
                aspect="aspect-3/4"
                priority
                sizes="30vw"
                className="rounded-none border-0"
              />
            </div>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: DELAY + 0.75, ease: EASE_OUT_EXPO }}
          className="mt-16 grid grid-cols-2 border-t border-black/8 sm:grid-cols-4"
        >
          {[
            { label: t.hero.stats.years, value: "3+" },
            { label: t.hero.stats.records, value: "5.3M" },
            { label: t.hero.stats.orgs, value: "3" },
            { label: t.hero.stats.banks, value: "2" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-b border-black/6 py-5 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-6 sm:first:pl-0"
            >
              <dd className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{stat.value}</dd>
              <dt className="mono-label mt-2">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
