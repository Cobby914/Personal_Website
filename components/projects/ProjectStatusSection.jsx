"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ProjectCard from "@/components/projects/ProjectCard";
import { textShadow, textShadowSoft } from "@/components/projects/projectStyles";

export default function ProjectStatusSection({
  id,
  title,
  description,
  projects,
  onOpenProject,
}) {
  return (
    <section id={id} className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2
            className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl"
            style={{ textShadow }}
          >
            {title}
          </h2>
          <p
            className="mx-auto mb-10 max-w-3xl text-center text-base text-white/85 sm:text-lg"
            style={{ textShadow: textShadowSoft }}
          >
            {description}
          </p>
        </AnimateOnScroll>
        <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              stagger={i * 90}
              cardIndex={i}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
