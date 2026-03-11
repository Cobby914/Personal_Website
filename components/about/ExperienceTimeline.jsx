"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

// Experience timeline - ascending order (oldest first)
// summary: brief info shown by default | details: expanded insight on hover/click
const TIMELINE_ENTRIES = [
  {
    id: "0",
    date: "Sep 2023",
    title: "Arriving to UCI",
    summary: "",
    details: "",
    location: "UC Irvine · Irvine, CA",
  },
  {
    id: "1",
    date: "Aug 2024",
    title: "Software Engineer Intern",
    summary: "Built mortgage lending tools and dashboards at M.K Lending.",
    details:
      "Built a loan-lookup REST API using TypeScript and Node.js, reducing calculations by 4 hours per day. Created a rate-sheet ingestion pipeline with Python, pandas, and PostgreSQL, saving 3 hours of processing. Developed a dashboard tracking employee loans using React and TypeScript for 5+ managers.",
    location: "M.K Lending · Brea, CA",
  },
  {
    id: "2",
    date: "Sep 2024",
    title: "Software Engineer",
    summary: "Full-stack volunteer tracking dashboard at Commit the Change.",
    details:
      "Developed a full-stack volunteer tracking dashboard using React, Chakra UI, and Node.js used by 5+ managers. Built backend API and schemas using PostgreSQL, Axios, and TypeScript. Optimized case manager table loading latency by 30 sec (from 40 sec) using React.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "3",
    date: "May 2025",
    title: "Teacher",
    summary: "Teaching intro to programming in Python and Java.",
    details:
      "Teaching middle schoolers the introduction to programming in both Python and Java at STEMPiA Computer Institute.",
    location: "STEMPiA Computer Institute · Los Angeles, CA",
  },
  {
    id: "4",
    date: "May 2025",
    title: "Director Of Education",
    summary: "Creating curriculum for new members at Commit the Change.",
    details:
      "Creating an approachable curriculum in HTML, CSS, TypeScript, and React with the previous Education Director for new incoming members in Fall.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "5",
    date: "Sep 2025",
    title: "Software Engineer",
    summary: "Full-stack platform for Celebrating Life CHC.",
    details:
      "Building a full-stack platform with React and Node.js for Celebrating Life CHC to serve 100+ local patients. Engineered an admin approval flow using Google OAuth and TypeScript APIs, reducing onboarding time by 40%. Developed RESTful CRUD routes for location management in Express, improving data retrieval speed by 25%.",
    location: "Commit the Change · Irvine, CA",
  },
  {
    id: "6",
    date: "Dec 2025",
    title: "Technical Lead",
    summary: "Spearheading full-stack development at TENA.",
    details:
      "Spearheading full-stack development using React and Node.js, managing the technical roadmap for developers. Orchestrating Agile sprint cycles and task delegation. Architected a PostgreSQL JSONB schema for dynamic user configs, meeting 100% of stakeholder requirements.",
    location: "TENA · Los Angeles, CA",
  },
  {
    id: "7",
    date: "Dec 2025",
    title: "Research Assistant",
    summary: "Multi-modal perception research at UC Irvine.",
    details:
      "Researching a multi-modal perception system fusing camera and radar data to improve object detection accuracy. Implementing SOTA deep learning architectures in PyTorch on sensor calibration and spatial feature alignment. Synthesizing academic literature to evaluate model architectures and design experimental robustness benchmarks.",
    location: "UC Irvine · Irvine, CA",
  },
  {
    id: "8",
    date: "Jan 2026",
    title: "Software Engineer Intern",
    summary: "Building and scaling pet-tech solutions at FiPet.",
    details:
      "Software Engineering Intern focused on building and scaling pet-tech solutions. Working across the stack to design, build, and iterate on product features, collaborate on system architecture, and improve platform reliability. Responsible for taking small-to-medium engineering tasks from concept to production while working closely with the company's founders.",
    location: "FiPet · San Francisco Bay Area",
  },
  {
    id: "9",
    date: "Today",
    title: "Today",
    summary: "",
    details: "",
    location: "",
  },
];

const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

function TimelineCard({ entry, isRight, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered;

  return (
    <AnimateOnScroll stagger={index * 80} as="div">
      <div className="relative flex min-h-[140px] items-center py-6 md:min-h-[160px] md:py-8">
        {/* Left content (odd index) */}
        <div className="flex w-1/2 flex-col pr-6 text-right md:pr-12">
          {!isRight && (
            <TimelineCardContent
              entry={entry}
              isExpanded={isExpanded}
              onToggle={() => setIsPinned((p) => !p)}
              onHoverChange={setIsHovered}
              align="right"
            />
          )}
        </div>

        {/* Center: Timeline dot */}
        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center md:h-16 md:w-16 lg:h-20 lg:w-20">
          <div className="h-4 w-4 rounded-full border-2 border-white/50 bg-white/20 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </div>

        {/* Right content (even index) */}
        <div className="flex w-1/2 flex-col pl-6 text-left md:pl-12">
          {isRight && (
            <TimelineCardContent
              entry={entry}
              isExpanded={isExpanded}
              onToggle={() => setIsPinned((p) => !p)}
              onHoverChange={setIsHovered}
              align="left"
            />
          )}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function TimelineCardContent({ entry, isExpanded, onToggle, onHoverChange, align }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className={`group w-full max-w-md text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${align === "right" ? "text-right" : ""}`}
    >
      <div
        className={`overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 ${align === "right" ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`}
      >
        <span
          className="text-sm font-semibold text-white/70 md:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.date}
        </span>
        <h3
          className="mt-1.5 text-lg font-semibold text-white md:text-xl lg:text-2xl"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.title}
        </h3>
        <p
          className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80 md:text-base"
          style={{ textShadow: textShadowSoft }}
        >
          {entry.summary}
        </p>

        {/* Expanded details */}
        <div
          className={`grid transition-all duration-300 ease-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-white/10 pt-3">
              <p
                className="text-sm leading-relaxed text-white/90 md:text-base"
                style={{ textShadow: textShadowSoft }}
              >
                {entry.details}
              </p>
              {entry.location && (
                <p
                  className="mt-2 text-sm text-white/60"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.location}
                </p>
              )}
              <p className="mt-2 text-xs text-white/50">
                Click to pin open · Click again to collapse
              </p>
            </div>
          </div>
        </div>

        {/* Hover-only expand hint (when not clicked) */}
        {!isExpanded && (
          <p className="mt-2 text-xs text-white/40 transition-opacity group-hover:opacity-100 md:opacity-0">
            Hover or click for more
          </p>
        )}
      </div>
    </button>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line - centered */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/25"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((entry, i) => (
          <TimelineCard
            key={entry.id}
            entry={entry}
            isRight={i % 2 === 0}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
