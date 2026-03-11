"use client";

import Link from "next/link";

// Placeholder projects - replace with real data when available
const PLACEHOLDER_PROJECTS = [
  {
    id: "placeholder-1",
    title: "Project coming soon",
    description: "Building something interesting.",
    thumbnail: null,
    href: "/projects",
  },
  {
    id: "placeholder-2",
    title: "Project coming soon",
    description: "Stay tuned for updates.",
    thumbnail: null,
    href: "/projects",
  },
  {
    id: "placeholder-3",
    title: "Project coming soon",
    description: "More to come.",
    thumbnail: null,
    href: "/projects",
  },
];

function ProjectCard({ project }) {
  return (
    <Link
      href={project.href}
      className="group flex min-w-[280px] max-w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="aspect-video w-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-white/40">No preview yet</span>
        )}
      </div>
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-semibold text-white group-hover:text-white/95">
          {project.title}
        </h3>
        <p className="text-sm text-white/70 line-clamp-2">{project.description}</p>
      </div>
    </Link>
  );
}

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="relative w-full px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-10 text-2xl font-bold text-white sm:text-3xl"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Featured Work
        </h2>

        {/* Carousel container - horizontal scroll on mobile, centered on desktop */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 sm:justify-center sm:overflow-visible">
            {PLACEHOLDER_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            View all projects
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
