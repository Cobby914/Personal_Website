"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ExperienceTimeline from "./ExperienceTimeline";

// Placeholder image for landing - replace with real path when available
const LANDING_IMAGE = "https://placehold.co/320x400/1a1a2e/4a5568?text=Photo";

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

export default function AboutPageContent() {
  return (
    <>
      {/* Section 1: Landing */}
      <section
        id="about-landing"
        className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center sm:px-8"
      >
        <AnimateOnScroll>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl">
                <img
                  src={LANDING_IMAGE}
                  alt="Profile"
                  className="aspect-[4/5] w-[200px] object-cover sm:w-[240px] md:w-[280px]"
                />
              </div>
            </div>
            <h1
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              style={{ textShadow }}
            >
              About Me
            </h1>
            <p
              className="mt-4 max-w-2xl mx-auto text-lg text-white/90 sm:text-xl"
              style={{ textShadow: textShadowSoft }}
            >
              Software and AI developer building things for the web.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Section 2: Who I am */}
      <section
        id="about-who-i-am"
        className="relative w-full px-6 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2
              className="mb-8 text-2xl font-bold text-white sm:text-3xl"
              style={{ textShadow }}
            >
              Who I Am
            </h2>
            <div
              className="space-y-4 text-lg leading-relaxed text-white/90 sm:text-xl"
              style={{ textShadow: textShadowSoft }}
            >
              <p>
                I&apos;m a software developer focused on AI and web development.
                I build tools and applications that solve real problems and
                delight users. I&apos;m always open to new opportunities—whether
                that&apos;s a full-time role, collaboration on interesting
                projects, or just connecting with fellow developers.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source, or enjoying the great
                outdoors.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Section 3: Experience timeline */}
      <section
        id="about-experience"
        className="relative w-full px-6 py-20 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll>
            <h2
              className="mb-12 text-2xl font-bold text-white sm:text-3xl"
              style={{ textShadow }}
            >
              Experience
            </h2>
            <ExperienceTimeline />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
