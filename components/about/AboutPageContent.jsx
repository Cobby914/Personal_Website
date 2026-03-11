"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import ScrambleText from "@/components/ui/ScrambleText/ScrambleText";
import ScrollCue from "@/components/ui/ScrollCue/ScrollCue";
import ExperienceTimeline from "./ExperienceTimeline";

const LANDING_IMAGE = "/images/profile-photo.png";

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

export default function AboutPageContent() {
  return (
    <>
      {/* Hero section - full viewport so Who I am starts below the image */}
      <section
        id="about-landing"
        className="relative flex min-h-screen shrink-0 flex-col items-center justify-center px-6 py-24 text-center sm:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            <ScrambleText text="About Me" delay={2200} speed={40} />
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg text-white sm:text-xl md:text-2xl"
            style={{
              textShadow:
                "0 1px 3px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            <ScrambleText
              text="Learn more about me and my experience."
              delay={3100}
              speed={25}
            />
          </p>
        </div>
        <ScrollCue />
      </section>

      {/* Who I am - transparent to inherit AppShell bg-black + noise overlay */}
      <section
        id="about-who-i-am"
        className="relative w-full px-6 pt-16 pb-20 sm:px-8 sm:pt-20 md:pb-24 md:pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
            <AnimateOnScroll stagger={0} as="div" className="flex-shrink-0">
              <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl md:mx-0">
                <img
                  src={LANDING_IMAGE}
                  alt="Colin Kwon"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll stagger={80} as="div" className="flex-1">
              <h2
                className="mb-6 text-2xl font-bold text-white sm:text-3xl"
                style={{ textShadow }}
              >
                Who I Am
              </h2>
              <div
                className="space-y-4 text-lg leading-relaxed text-white/90 sm:text-xl"
                style={{ textShadow: textShadowSoft }}
              >
                <p>
                  I&apos;m a developer who enjoys building things that people actually use. 
                  Always being interested in AI and full-stack development, I used this excitement 
                  to build my own projects and find opportunities related to it. A lot of what motivates 
                  me is the process of figuring things out—whether that&apos;s learning a new technology, 
                  debugging a tough problem, or building something from scratch and watching it come together. 
                  My hope is to continue to build impactful projects and further my skills as a developer.
                </p>
                <p>
                  Interestingly outside of programming, I spend my time playing volleyball, 
                  training jiu-jitsu, scuba diving, and taking photos.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Section 3: Experience timeline */}
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
    </>
  );
}
