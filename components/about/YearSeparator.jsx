"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import { textShadowSoft } from "@/components/about/aboutStyles";

export default function YearSeparator({ label, index }) {
  return (
    <AnimateOnScroll stagger={index * 40} as="div">
      <div className="relative flex items-center justify-center py-8 md:py-10">
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-px w-12 bg-white/30 md:w-16" aria-hidden />
          <span
            className="text-sm font-semibold uppercase tracking-wider text-white/70 md:text-base"
            style={{ textShadow: textShadowSoft }}
          >
            {label}
          </span>
          <div className="h-px w-12 bg-white/30 md:w-16" aria-hidden />
        </div>
      </div>
    </AnimateOnScroll>
  );
}
