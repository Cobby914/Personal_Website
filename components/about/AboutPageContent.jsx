"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
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
        <AnimateOnScroll>
          <div className="mx-auto max-w-4xl">
            <h1
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
              style={{ textShadow }}
            >
              ABOUT ME
            </h1>
            <p
              className="mt-4 max-w-2xl mx-auto text-lg text-white/90 sm:text-xl"
              style={{ textShadow: textShadowSoft }}
            >
              Developer passionate about building full-stack applications and AI systems that solve real-world problems.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Who I am - transparent to inherit AppShell bg-black + noise overlay */}
      <section
        id="about-who-i-am"
        className="relative w-full px-6 pt-16 pb-20 sm:px-8 sm:pt-20 md:pb-24 md:pt-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
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
                  I&apos;m a software developer focused on AI and full-stack development, 
                  building systems that turn complex ideas into real, usable products. 
                  I enjoy working on challenging technical problems and collaborating 
                  with others to create impactful software. I&apos;m always looking for new opportunities, 
                  interesting projects, and connecting with other developers.
                </p>
                <p>
                  Outside of programming, I spend my time playing volleyball, 
                  training jiu-jitsu, scuba diving, and exploring new technologies.
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
