"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import { ASSET_PATHS } from "@/constants/assets";
import { CONTACT, SITE } from "@/constants/site";
import { PROFILE, SOCIALS } from "@/data/profile";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TypingText } from "@/components/animations/TypingText";
import { UiIcon } from "@/components/common/Icon";
import { Placeholder } from "@/components/common/Placeholder";
import { EASE_OUT_EXPO } from "@/lib/motion";

const DELAY = 1.0;

const HERO_STATS = [
  { label: "yrs in production", value: 3, suffix: "+" },
  { label: "records modelled", value: 5.3, suffix: "M" },
  { label: "orgs running it", value: 3, suffix: "" },
  { label: "banks live", value: 2, suffix: "" },
];

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div ref={ref} className="relative min-h-dvh overflow-hidden pt-14">
      {/* Structural background */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-50" />
      <div
        aria-hidden
        className="absolute -left-40 top-0 size-[46rem] rounded-full bg-volt/25 blur-[160px] animate-drift"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 size-[40rem] rounded-full bg-violet/20 blur-[170px] animate-drift"
        style={{ animationDelay: "-13s" }}
      />

      <motion.div
        style={reduceMotion ? undefined : { y, opacity }}
        className="shell relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-16 xl:pl-[calc(var(--rail-w)-4rem)]"
      >
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            {/* Status line */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: DELAY, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45"
            >
              <span className="text-cyan">stage 00 / ingest</span>
              <span aria-hidden>—</span>
              <span>{CONTACT.location}</span>
              <span aria-hidden>—</span>
              <span>{CONTACT.availability}</span>
            </motion.div>

            {/* Name — oversized display */}
            <h1 className="display mt-8 text-[clamp(3.25rem,11vw,9rem)]">
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

            {/* Role — typed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: DELAY + 0.5 }}
              className="mt-7 flex items-center gap-3 border-l-2 border-cyan pl-4"
            >
              <span className="font-mono text-sm text-white/40">role =</span>
              <span className="text-lg font-medium sm:text-2xl">
                <TypingText phrases={PROFILE.roles} />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: DELAY + 0.6, ease: EASE_OUT_EXPO }}
              className="mt-8 max-w-lg text-lg leading-snug text-white/70 sm:text-xl"
            >
              {PROFILE.intro}
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: DELAY + 0.7, ease: EASE_OUT_EXPO }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={SITE.resumePath}
                download
                className="group flex items-center gap-2.5 bg-cyan px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-1"
              >
                <Download className="size-4" aria-hidden />
                Download CV
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2.5 border border-white/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
              >
                See the work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: DELAY + 0.85 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 font-mono text-[12px] text-white/45 transition-colors hover:text-cyan"
                  >
                    <UiIcon name={social.icon} className="size-3.5" aria-hidden />
                    {social.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Portrait */}
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
                alt={`${PROFILE.fullName} — portrait`}
                label="Profile photo"
                hint="public/images/profile.jpg → list in constants/assets.ts"
                icon="users"
                accent="cyan"
                aspect="aspect-3/4"
                priority
                sizes="30vw"
                className="rounded-none border-0"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              {PROFILE.headline}
            </p>
          </motion.div>
        </div>

        {/* Ticker of headline numbers */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY + 0.95, ease: EASE_OUT_EXPO }}
          className="mt-16 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/10 py-5 pr-4 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pl-5 sm:first:pl-0"
            >
              <dd className="display text-4xl sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </dd>
              <dt className="mono-label mt-2 !text-white/40">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY + 1.3 }}
        style={reduceMotion ? undefined : { opacity }}
        className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-cyan lg:flex"
      >
        scroll
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-3.5" />
        </motion.span>
      </motion.a>
    </div>
  );
}
