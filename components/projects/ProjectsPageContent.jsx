"use client";

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

function ProjectCard({ project, stagger = 0 }) {
  return (
    <AnimateOnScroll stagger={stagger} as="article">
      <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white" style={{ textShadow }}>
          {project.title}
        </h3>
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
      </div>
    </AnimateOnScroll>
  );
}

function ProjectStatusSection({ id, title, description, projects }) {
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
            <ProjectCard key={project.id} project={project} stagger={i * 90} />
          ))}
        </div>
      </div>
    </section>
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
      />

      <ProjectStatusSection
        id="projects-in-progress"
        title="In Progress"
        description="Projects that are actively being built and tested."
        projects={IN_PROGRESS_PROJECTS}
      />

      <ProjectStatusSection
        id="projects-finished"
        title="Finished"
        description="Completed work that is deployed, documented, or production-ready."
        projects={FINISHED_PROJECTS}
      />

      <GitHubRevealSection />
    </>
  );
}
