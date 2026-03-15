"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import TimelineCardContent from "@/components/about/TimelineCardContent";

export default function TimelineCard({ entry, isRight, index }) {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isPinned || isHovered;

  return (
    <AnimateOnScroll stagger={index * 80} as="div">
      <div className="relative flex min-h-[140px] items-center py-6 md:min-h-[160px] md:py-8">
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

        <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center md:h-16 md:w-16 lg:h-20 lg:w-20">
          <div className="h-4 w-4 rounded-full border-2 border-white/50 bg-white/20 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </div>

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
