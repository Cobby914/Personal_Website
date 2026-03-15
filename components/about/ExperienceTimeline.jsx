"use client";

import TimelineCard from "@/components/about/TimelineCard";
import YearSeparator from "@/components/about/YearSeparator";
import { TIMELINE_ENTRIES } from "@/components/about/experienceTimelineData";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical line - centered */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/25"
        aria-hidden
      />

      <div className="space-y-0">
        {TIMELINE_ENTRIES.map((item, i) => {
          if (item.type === "separator") {
            return <YearSeparator key={`sep-${item.label}`} label={item.label} index={i} />;
          }
          const entryCount = TIMELINE_ENTRIES.slice(0, i).filter((x) => x.type !== "separator").length;
          return (
            <TimelineCard
              key={item.id}
              entry={item}
              isRight={entryCount % 2 === 0}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}
