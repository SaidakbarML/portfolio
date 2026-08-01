"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

import { OTHER_PROJECTS, PROJECTS } from "@/data/projects";
import { QueryHeading } from "@/components/common/QueryHeading";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { useMounted } from "@/hooks/useMounted";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Project } from "@/types";

export function Projects() {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const { t } = useI18n();

  const openFeatured = React.useCallback(
    () => setActiveProject(PROJECTS.find((p) => p.featured) ?? PROJECTS[0]),
    [],
  );

  return (
    <>
      <div className="shell pt-16 sm:pt-20 xl:pl-[calc(var(--rail-w)-4rem)]">
        <QueryHeading
          query={t.projects.query}
          meta={`${PROJECTS.length} ${t.projects.meta}`}
          title={t.projects.title}
          accentWord={t.projects.accent}
          lede={t.projects.lede}
        />

        <FeaturedProject onOpenCaseStudy={openFeatured} />
      </div>

      <HorizontalDeck projects={OTHER_PROJECTS} onOpen={setActiveProject} />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

/**
 * Desktop: the deck travels sideways while the stage is pinned.
 * Mobile / reduced motion: native snap carousel — same left/right motion.
 */
function HorizontalDeck({
  projects,
  onOpen,
}: {
  projects: Project[];
  onOpen: (project: Project) => void;
}) {
  const mounted = useMounted();
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [distance, setDistance] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.0005,
  });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const progress = useTransform(smooth, [0, 1], [0.02, 1]);

  React.useEffect(() => {
    if (!isDesktop) return;

    function measure() {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 64));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop, projects.length]);

  const pinned = mounted && isDesktop && !reduceMotion;

  if (!pinned) {
    return (
      <div className="mt-12 pb-16">
        <p className="shell mono-label mb-4">{t.projects.swipeHint}</p>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <div key={project.id} className="w-[min(86vw,23rem)] shrink-0 snap-center">
              <ProjectCard project={project} index={index} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      // Pin length tracks travel distance, kept tight so the page stays short.
      style={{ height: distance > 0 ? `${distance + 320}px` : "120vh" }}
      className="relative mt-14"
    >
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        <div className="shell mb-6 flex items-end justify-between gap-6 xl:pl-[calc(var(--rail-w)-4rem)]">
          <div>
            <p className="mono-label">{t.projects.moreWork}</p>
            <h3 className="display mt-2 text-[clamp(1.35rem,3vw,2.1rem)]">
              {t.projects.deckTitle}{" "}
              <span style={{ color: "var(--accent)" }}>{t.projects.deckAccent}</span>
            </h3>
          </div>
          <div className="hidden w-56 shrink-0 lg:block">
            <div className="h-[3px] w-full bg-[color:var(--line)]">
              <motion.div
                style={{ scaleX: progress, background: "var(--accent)" }}
                className="h-full w-full origin-left"
              />
            </div>
            <p className="mono-label mt-2 text-right">
              {projects.length} {t.projects.projectsCount}
            </p>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-5 pl-[max(1.25rem,calc((100vw-84rem)/2+4rem))] pr-16 will-change-transform"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-[23rem] shrink-0">
              <ProjectCard project={project} index={index} onOpen={onOpen} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
