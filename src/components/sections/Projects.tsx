"use client";

import * as React from "react";

import { OTHER_PROJECTS, PROJECTS } from "@/data/projects";
import { QueryHeading } from "@/components/common/QueryHeading";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";
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
      <div className="shell py-20 sm:py-24">
        <QueryHeading
          title={t.projects.title}
          accentWord={t.projects.accent}
          lede={t.projects.lede}
        />

        <FeaturedProject onOpenCaseStudy={openFeatured} />

        <div className="mt-16">
          <p className="mono-label mb-6">{t.projects.moreWork}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
