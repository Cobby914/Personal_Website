"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

// Placeholder timeline entries - replace with your real experiences
// Use date format: "Month Year" (e.g. "Jan 2025", "Jun 2024")
// Ordered ascending (oldest first)
// summary: brief info shown by default | details: expanded insight on hover/click
const TIMELINE_ENTRIES = [
  {
    id: "1",
    date: "Mar 2023",
    title: "Role or project",
    summary: "Brief overview of your experience here.",
    details:
      "Add more insight: key achievements, technologies used, impact, lessons learned. This expanded section appears when hovering or clicking the card.",
    location: "Location (optional)",
  },
  {
    id: "2",
    date: "Jun 2024",
    title: "Role or project",
    summary: "Brief overview of your experience here.",
    details:
      "Add more insight: key achievements, technologies used, impact, lessons learned. This expanded section appears when hovering or clicking the card.",
    location: "Location (optional)",
  },
  {
    id: "3",
    date: "Jan 2025",
    title: "Current role / project",
    summary: "Brief overview of what you're doing now.",
    details:
      "Add more insight: key achievements, technologies used, impact, lessons learned. This expanded section appears when hovering or clicking the card.",
    location: "Location (optional)",
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
