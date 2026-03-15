"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import {
  FINISHED_PROJECTS,
  IN_PROGRESS_PROJECTS,
} from "@/components/projects/projectData";

const AUTO_ADVANCE_MS = 5000;
const MAX_SUMMARY_WORDS = 28;

function truncateWords(text, maxWords) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function ProjectCard({ project, status, isActive, onClick }) {
  const projectSummary = truncateWords(project.summary, MAX_SUMMARY_WORDS);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group mx-auto flex aspect-square w-full max-w-[330px] flex-col justify-between rounded-xl border bg-white/5 p-4 text-left backdrop-blur-sm transition duration-300 sm:max-w-[360px] ${
        isActive
          ? "border-white/35 shadow-[0_12px_35px_rgba(0,0,0,0.28)]"
          : "border-white/12 hover:border-white/25 hover:bg-white/10"
      }`}
    >
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-white/80">
            {status}
          </span>
        </div>
        <h3 className="text-base font-semibold text-white sm:text-lg">{project.title}</h3>
        <p className="mt-2 line-clamp-6 text-sm leading-relaxed text-white/75">
          {projectSummary}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((techItem) => (
          <span
            key={techItem}
            className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] text-white/80"
          >
            {techItem}
          </span>
        ))}
      </div>
    </button>
  );
}

export default function FeaturedWork() {
  const featuredProjects = useMemo(
    () => [
      ...IN_PROGRESS_PROJECTS.slice(0, 2).map((project) => ({
        ...project,
        status: "In Progress",
      })),
      ...FINISHED_PROJECTS.slice(0, 3).map((project) => ({
        ...project,
        status: "Finished",
      })),
    ],
    []
  );
  const totalProjects = featuredProjects.length;
  const loopedProjects = useMemo(() => {
    if (totalProjects < 2) return featuredProjects;
    return [
      featuredProjects[totalProjects - 1],
      ...featuredProjects,
      featuredProjects[0],
    ];
  }, [featuredProjects, totalProjects]);
  const [slideIndex, setSlideIndex] = useState(totalProjects > 1 ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const activeIndex =
    totalProjects > 1 ? (slideIndex - 1 + totalProjects) % totalProjects : 0;

  function goToSlide(index) {
    if (totalProjects < 2) return;

    const targetIndex = (index + totalProjects) % totalProjects;
    const forwardSteps = (targetIndex - activeIndex + totalProjects) % totalProjects;
    const backwardSteps = (activeIndex - targetIndex + totalProjects) % totalProjects;
    const stepDelta = forwardSteps <= backwardSteps ? forwardSteps : -backwardSteps;

    setSlideIndex((current) => current + stepDelta);
  }

  useEffect(() => {
    if (isPaused || totalProjects < 2) return;

    const intervalId = setInterval(() => {
      setSlideIndex((current) => current + 1);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(intervalId);
  }, [isPaused, totalProjects]);

  function handleTrackTransitionEnd() {
    if (totalProjects < 2) return;

    if (slideIndex === 0) {
      setIsAnimating(false);
      setSlideIndex(totalProjects);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
      return;
    }

    if (slideIndex === totalProjects + 1) {
      setIsAnimating(false);
      setSlideIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  }

  return (
    <section
      id="featured-work"
      className="relative w-full px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <h2
            className="mb-10 text-2xl font-bold text-white sm:text-3xl"
            style={{
              textShadow: "0 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            Featured Work
          </h2>

          <div
            className="relative mx-auto w-full max-w-[760px] overflow-hidden rounded-2xl border border-white/15 bg-black/30 p-3 backdrop-blur-sm sm:p-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div
              className={`flex ${isAnimating ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(-${slideIndex * 100}%)`,
              }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {loopedProjects.map((project, index) => {
                const normalizedIndex =
                  totalProjects > 1
                    ? (index - 1 + totalProjects) % totalProjects
                    : index;

                return (
                <div key={`${project.id}-${index}`} className="w-full flex-shrink-0 px-0.5 sm:px-1">
                  <ProjectCard
                    project={project}
                    status={project.status}
                    isActive={normalizedIndex === activeIndex}
                    onClick={() => goToSlide(normalizedIndex)}
                  />
                </div>
              );
              })}
            </div>

            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/55 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-black/75 sm:left-3 sm:text-sm"
              aria-label="Show previous project"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/55 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-black/75 sm:right-3 sm:text-sm"
              aria-label="Show next project"
            >
              Next
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {featuredProjects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to ${project.title}`}
                  className={`h-2.5 rounded-full transition ${
                    isActive ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>

          <div className="mt-2 text-center text-xs text-white/60">
            {activeIndex + 1} / {featuredProjects.length}
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
        </AnimateOnScroll>
      </div>
    </section>
  );
}
