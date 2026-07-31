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
import type { Project } from "@/types";

export function Projects() {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  const openFeatured = React.useCallback(
    () => setActiveProject(PROJECTS.find((p) => p.featured) ?? PROJECTS[0]),
    [],
  );

  return (
    <>
      <div className="shell pt-24 sm:pt-32 xl:pl-[calc(var(--rail-w)-4rem)]">
        <QueryHeading
          query="SELECT * FROM projects WHERE users > 0"
          meta={`${PROJECTS.length} rows · 14ms`}
          title="Systems in production,"
          accentWord="not notebooks."
          lede="Banks, marketplaces and call centres. Open a case study for the architecture and what I'd change."
        />

        <FeaturedProject onOpenCaseStudy={openFeatured} />
      </div>

      <HorizontalDeck projects={OTHER_PROJECTS} onOpen={setActiveProject} />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

/**
 * Desktop: the deck travels sideways while the stage is pinned, so vertical
 * scrolling reads as horizontal movement through the projects.
 * Mobile: native snap carousel — same left/right motion, no pinning.
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
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop, projects.length]);

  const pinned = mounted && isDesktop && !reduceMotion;

  if (!pinned) {
    return (
      <div className="mt-16 pb-24">
        <p className="shell mono-label mb-5">swipe → more work</p>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <div key={project.id} className="w-[min(86vw,25rem)] shrink-0 snap-center">
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
      style={{ height: distance > 0 ? `${distance + 800}px` : "160vh" }}
      className="relative mt-20"
    >
      <div className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden">
        <div className="shell mb-8 flex items-end justify-between gap-6 xl:pl-[calc(var(--rail-w)-4rem)]">
          <div>
            <p className="mono-label">more work</p>
            <h3 className="display mt-3 text-[clamp(1.5rem,3.5vw,2.5rem)]">
              The deck scrolls{" "}
              <span style={{ color: "var(--accent)" }}>sideways</span>
            </h3>
          </div>
          <div className="hidden w-56 shrink-0 lg:block">
            <div className="h-[3px] w-full bg-[color:var(--line)]">
              <motion.div
                style={{ scaleX: progress, background: "var(--accent)" }}
                className="h-full w-full origin-left"
              />
            </div>
            <p className="mono-label mt-2 text-right">{projects.length} projects</p>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 pl-[max(1.25rem,calc((100vw-84rem)/2+4rem))] pr-20 will-change-transform"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="w-[26rem] shrink-0"
            >
              <ProjectCard project={project} index={index} onOpen={onOpen} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
