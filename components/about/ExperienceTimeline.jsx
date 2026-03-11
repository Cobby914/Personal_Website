"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

// Placeholder timeline entries - replace with your real experiences
const TIMELINE_ENTRIES = [
  {
    id: "1",
    year: "2025",
    title: "Current role / project",
    description: "Add your current role or what you're working on now.",
    location: "Location (optional)",
  },
  {
    id: "2",
    year: "2024",
    title: "Role or project",
    description: "Describe your experience, achievements, or what you learned.",
    location: "Location (optional)",
  },
  {
    id: "3",
    year: "2023",
    title: "Role or project",
    description: "Describe your experience, achievements, or what you learned.",
    location: "Location (optional)",
  },
];

const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-3 top-0 bottom-0 w-px bg-white/20 sm:left-4"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((entry, i) => (
          <AnimateOnScroll key={entry.id} stagger={i * 60} as="div">
            <div className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center sm:h-8 sm:w-8">
                <div className="h-3 w-3 rounded-full border-2 border-white/40 bg-white/10 sm:h-4 sm:w-4" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <span
                  className="text-sm font-semibold text-white/70"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.year}
                </span>
                <h3
                  className="mt-1 text-lg font-semibold text-white sm:text-xl"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed text-white/80 sm:text-lg"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.description}
                </p>
                {entry.location && (
                  <p
                    className="mt-1 text-sm text-white/60"
                    style={{ textShadow: textShadowSoft }}
                  >
                    {entry.location}
                  </p>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
