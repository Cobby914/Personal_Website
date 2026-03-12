"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ScrambleText from "@/components/ui/ScrambleText/ScrambleText";
import ScrollCue from "@/components/ui/ScrollCue/ScrollCue";

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

const PLANNING_PROJECTS = [
  {
    id: "planning-1",
    title: "AI Study Assistant",
    summary: "Early design phase for a tool that helps students plan and review topics.",
    tech: ["Next.js", "Python", "OpenAI API"],
  },
  {
    id: "planning-2",
    title: "Scuba Logbook App",
    summary: "Concepting a dive tracking app with location, conditions, and photo notes.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

const IN_PROGRESS_PROJECTS = [
  {
    id: "progress-0",
    title: "Personal Website (Dec 2025 - Present)",
    summary:
      "Building my personal website with Next.js, React, and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    details: [
      "Developing page-level sections for About, Projects, and Hobbies with shared design patterns.",
      "Improving UX through reveal animations, clearer content hierarchy, and responsive layouts.",
      "Continuously updating project content, routing, and metadata as new work is completed.",
    ],
    resources: [
      { label: "Live Site", href: "/", type: "Demo" },
    ],
  },
  {
    id: "progress-1",
    title: "TENA Technical Lead (Dec 2025 - Present)",
    summary:
      "Leading full-stack development with React and Node.js, managing roadmap execution and agile sprint delivery.",
    tech: ["React", "Node.js", "PostgreSQL JSONB"],
  },
  {
    id: "progress-2",
    title: "UCI Research Assistant (Dec 2025 - Present)",
    summary:
      "Researching multimodal camera-radar perception systems and implementing deep learning models for better object detection.",
    tech: ["PyTorch", "Computer Vision", "Sensor Fusion"],
  },
  {
    id: "progress-3",
    title: "Commit the Change Platform (Sep 2025 - Present)",
    summary:
      "Building a React + Node.js platform for Celebrating Life CHC, including Google OAuth admin approvals and CRUD location APIs.",
    tech: ["React", "Node.js", "TypeScript", "Express"],
  },
  {
    id: "progress-4",
    title: "Canvas -> Notion Sync (Feb 2026 - Present)",
    summary:
      "Building an automation tool that syncs Canvas assignments into Notion with deduping, task generation, and scheduled GitHub Actions runs.",
    tech: ["Python", "Canvas API", "Notion API", "GitHub Actions"],
    details: [
      "Fetches upcoming Canvas assignments and syncs them to Notion while preventing duplicate entries.",
      "Generates task tracker items with automatic priority and effort scoring based on due dates and points.",
      "Runs automatically through GitHub Actions with secure environment-based credentials.",
    ],
    resources: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Cobby914/CanvasNotionSync",
        type: "Repository",
      },
      {
        label: "Project README",
        href: "https://github.com/Cobby914/CanvasNotionSync#readme",
        type: "Document",
      },
    ],
  },
];

const FINISHED_PROJECTS = [
  {
    id: "finished-2",
    title: "Commit the Change Dashboard (Sep 2024 - Jun 2025)",
    summary:
      "Developed a volunteer tracking dashboard and backend APIs, reducing case manager table load times significantly.",
    tech: ["React", "Chakra UI", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "finished-3",
    title: "Tumor Classification from Scans (Oct 2025 - Dec 2025)",
    summary:
      "Built and tuned a residual neural network pipeline with strong performance and Grad-CAM based model interpretation.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    id: "finished-4",
    title: "Genome Sequencing Pipeline (Oct 2025 - Dec 2025)",
    summary:
      "Combined Humsavar and dbnsfp5.3a data using DuckDB and pandas, then trained neural models that improved F1 outcomes.",
    tech: ["Python", "DuckDB", "Pandas", "Seaborn", "PyTorch"],
  },
  {
    id: "finished-5",
    title: "Reel In Platform (Oct 2024 - May 2025)",
    summary:
      "Built a student project discovery platform with reusable UI modules and API routes used by 50+ students.",
    tech: ["JavaScript", "TypeScript", "React", "CSS", "PostgreSQL"],
  },
];

function ProjectCard({ project, stagger = 0, onOpen }) {
  return (
    <AnimateOnScroll stagger={stagger} as="article">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="h-full w-full rounded-xl border border-white/10 bg-white/5 p-5 text-left shadow-xl backdrop-blur-sm transition hover:border-white/25"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white" style={{ textShadow }}>
            {project.title}
          </h3>
          <span className="mt-1 inline-block text-sm text-white/80" aria-hidden="true">
            ↗
          </span>
        </div>
        <p
          className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/75"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/65">
          Click to view details
        </p>
      </button>
    </AnimateOnScroll>
  );
}

function ProjectStatusSection({ id, title, description, projects, onOpenProject }) {
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
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              stagger={i * 90}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/20 bg-[#0b0b0b]/95 p-6 text-white shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold sm:text-3xl" style={{ textShadow }}>
            {project.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-white/25 px-3 py-1 text-sm text-white/85 transition hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <p
          className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={`${project.id}-modal-${item}`}
              className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/75"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Details
          </p>
          {project.details?.length ? (
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/85">
              {project.details.map((detail) => (
                <li key={`${project.id}-${detail}`}>- {detail}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-white/75">
              More project notes and context will be added soon.
            </p>
          )}
        </div>

        <div className="mt-6 border-t border-white/15 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Resources
          </p>
          {project.resources?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.resources.map((resource) => {
                const isExternal = resource.href.startsWith("http");
                const className =
                  "inline-flex items-center gap-2 rounded-md border border-white/25 px-3 py-1.5 text-xs text-white/85 transition hover:bg-white/10";

                if (isExternal) {
                  return (
                    <a
                      key={`${project.id}-${resource.label}`}
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <span>{resource.type}:</span>
                      <span>{resource.label}</span>
                    </a>
                  );
                }

                return (
                  <Link key={`${project.id}-${resource.label}`} href={resource.href} className={className}>
                    <span>{resource.type}:</span>
                    <span>{resource.label}</span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="mt-3 text-sm text-white/70">
              No documents or videos added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function GitHubRevealSection() {
  return (
    <section id="projects-github" className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/20 bg-black/55 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              GitHub
            </p>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ textShadow }}
            >
              Explore More Projects on GitHub
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
              style={{ textShadow: textShadowSoft }}
            >
              Browse repositories, active experiments, and code samples that are
              not fully documented on this page yet.
            </p>
            <div className="mt-7">
              <Link
                href="https://github.com/Cobby914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit GitHub
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default function ProjectsPageContent() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <section
        id="projects-landing"
        className="relative flex min-h-screen shrink-0 flex-col items-center justify-center px-6 py-24 text-center sm:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            <ScrambleText text="Projects" delay={2200} speed={40} />
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-white sm:text-xl md:text-2xl"
            style={{
              textShadow:
                "0 1px 3px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            <ScrambleText
              text="A roadmap of what I am planning, building, and shipping."
              delay={3100}
              speed={25}
            />
          </p>
        </div>
        <ScrollCue />
      </section>

      <ProjectStatusSection
        id="projects-planning"
        title="Planning"
        description="Ideas and concepts that are currently being researched and scoped."
        projects={PLANNING_PROJECTS}
        onOpenProject={setActiveProject}
      />

      <ProjectStatusSection
        id="projects-in-progress"
        title="In Progress"
        description="Projects that are actively being built and tested."
        projects={IN_PROGRESS_PROJECTS}
        onOpenProject={setActiveProject}
      />

      <ProjectStatusSection
        id="projects-finished"
        title="Finished"
        description="Completed work that is deployed, documented, or production-ready."
        projects={FINISHED_PROJECTS}
        onOpenProject={setActiveProject}
      />

      <GitHubRevealSection />
      <ProjectDetailsModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
