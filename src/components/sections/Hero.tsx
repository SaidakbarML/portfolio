"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ASSET_PATHS } from "@/constants/assets";
import { PROFILE, SOCIALS } from "@/data/profile";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TypingText } from "@/components/animations/TypingText";
import { CvDownload } from "@/components/common/CvDownload";
import { UiIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { useI18n } from "@/i18n/LanguageProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import type { Metric } from "@/types";

const DELAY = 0.9;

const HERO_STATS: Metric[] = [
  { key: "years", value: 3, suffix: "+" },
  { key: "records", value: 5.3, suffix: "M", decimals: 1 },
  { key: "orgs", value: 3 },
  { key: "banks", value: 2 },
];

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div ref={ref} className="relative overflow-hidden pt-14">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[40rem] rounded-full bg-volt/25 blur-[150px] animate-drift"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 size-[34rem] rounded-full bg-violet/20 blur-[160px] animate-drift"
        style={{ animationDelay: "-13s" }}
      />

      <motion.div
        style={reduceMotion ? undefined : { y, opacity }}
        className="shell relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-12 xl:pl-[calc(var(--rail-w)-4rem)]"
      >
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45"
            >
              <span className="text-cyan">{t.hero.stage}</span>
              <span aria-hidden>—</span>
              <span>{t.hero.location}</span>
              <span aria-hidden>—</span>
              <span>{t.hero.availability}</span>
            </motion.div>

            <h1 className="display mt-6 text-[clamp(3rem,10vw,8rem)]">
              {[PROFILE.firstName, PROFILE.lastName].map((word, wi) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: DELAY + 0.1 + wi * 0.1,
                      ease: EASE_OUT_EXPO,
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: DELAY + 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-3 border-l-2 border-cyan pl-4"
            >
              <span className="font-mono text-sm text-white/40">{t.hero.roleLabel}</span>
              <span className="text-lg font-medium sm:text-2xl">
                <TypingText phrases={t.hero.roles} />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: DELAY + 0.6, ease: EASE_OUT_EXPO }}
              className="mt-6 max-w-lg text-lg leading-snug text-white/70"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: DELAY + 0.7, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <CvDownload />
              <a
                href="#projects"
                className="group flex items-center gap-2.5 border border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
              >
                {t.hero.seeWork}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: DELAY + 0.85 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-[12px] text-white/45 transition-colors hover:text-cyan"
                  >
                    <UiIcon name={social.icon} className="size-3.5" aria-hidden />
                    {social.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            style={reduceMotion ? undefined : { y: portraitY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: DELAY + 0.3, ease: EASE_OUT_EXPO }}
            className="relative hidden lg:block"
          >
            <div className="relative border border-white/15 p-2">
              <span
                aria-hidden
                className="absolute -left-px -top-px size-4 border-l-2 border-t-2 border-cyan"
              />
              <span
                aria-hidden
                className="absolute -bottom-px -right-px size-4 border-b-2 border-r-2 border-cyan"
              />
              <Placeholder
                src={ASSET_PATHS.profile}
                alt={PROFILE.fullName}
                label={t.hero.photoLabel}
                hint="public/images/profile.jpg"
                icon="users"
                aspect="aspect-3/4"
                priority
                sizes="26vw"
                className="rounded-none border-0"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              {t.hero.headline}
            </p>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY + 0.95, ease: EASE_OUT_EXPO }}
          className="mt-12 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.key}
              className="border-b border-white/10 py-4 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-5 sm:first:pl-0"
            >
              <dd className="display text-4xl sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </dd>
              <dt className="mono-label mt-1.5 !text-white/40">
                {t.hero.stats[stat.key as keyof typeof t.hero.stats]}
              </dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  );
}
