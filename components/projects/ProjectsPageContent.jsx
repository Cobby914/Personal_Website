"use client";

import { useState } from "react";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectStatusSection from "@/components/projects/ProjectStatusSection";
import GitHubRevealSection from "@/components/projects/GitHubRevealSection";
import ProjectDetailsModal from "@/components/projects/ProjectDetailsModal";
import {
  FINISHED_PROJECTS,
  IN_PROGRESS_PROJECTS,
  PLANNING_PROJECTS,
} from "@/components/projects/projectData";

export default function ProjectsPageContent() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOriginRect, setModalOriginRect] = useState(null);

  const handleOpenProject = (project, rect) => {
    setModalOriginRect(rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null);
    setActiveProject(project);
  };

  const handleCloseProjectModal = () => {
    setActiveProject(null);
    setModalOriginRect(null);
  };

  return (
    <>
      <ProjectsHeroSection />

      <ProjectStatusSection
        id="projects-planning"
        title="Planning"
        description="Ideas and concepts that are currently being researched and scoped."
        projects={PLANNING_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <ProjectStatusSection
        id="projects-in-progress"
        title="In Progress"
        description="Projects that are actively being built and tested."
        projects={IN_PROGRESS_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <ProjectStatusSection
        id="projects-finished"
        title="Finished"
        description="Completed work that is deployed, documented, or production-ready."
        projects={FINISHED_PROJECTS}
        onOpenProject={handleOpenProject}
      />

      <GitHubRevealSection />
      <ProjectDetailsModal
        project={activeProject}
        originRect={modalOriginRect}
        onClose={handleCloseProjectModal}
      />
    </>
  );
}
