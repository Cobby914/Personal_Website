"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import { textShadow } from "@/components/about/aboutStyles";

export default function AboutExperienceSection() {
  return (
    <section
      id="about-experience"
      className="relative w-full px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <h2
            className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl"
            style={{ textShadow }}
          >
            Experience
          </h2>
          <ExperienceTimeline />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
