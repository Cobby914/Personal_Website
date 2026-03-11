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
      {/* Vertical line - centered */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/25"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((entry, i) => {
          const isRight = i % 2 === 0;
          const content = (
            <>
              <span
                className="text-lg font-semibold text-white/70 md:text-xl"
                style={{ textShadow: textShadowSoft }}
              >
                {entry.year}
              </span>
              <h3
                className="mt-2 text-xl font-semibold text-white md:text-2xl lg:text-3xl"
                style={{ textShadow: textShadowSoft }}
              >
                {entry.title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed text-white/80 md:text-lg lg:text-xl"
                style={{ textShadow: textShadowSoft }}
              >
                {entry.description}
              </p>
              {entry.location && (
                <p
                  className="mt-2 text-base text-white/60 md:text-lg"
                  style={{ textShadow: textShadowSoft }}
                >
                  {entry.location}
                </p>
              )}
            </>
          );
          return (
            <AnimateOnScroll key={entry.id} stagger={i * 80} as="div">
              <div className="relative flex min-h-[180px] items-center py-8 md:min-h-[220px] md:py-12">
                {/* Left content (odd index) */}
                <div className="flex w-1/2 flex-col pr-8 text-right md:pr-16">
                  {!isRight && <div className="inline-flex flex-col items-end">{content}</div>}
                </div>

                {/* Center: Timeline dot */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <div className="h-4 w-4 rounded-full border-2 border-white/50 bg-white/20 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </div>

                {/* Right content (even index) */}
                <div className="flex w-1/2 flex-col pl-8 text-left md:pl-16">
                  {isRight && <div className="inline-flex flex-col items-start">{content}</div>}
                </div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
