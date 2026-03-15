"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import { textShadow, textShadowSoft } from "@/components/about/aboutStyles";

const LANDING_IMAGE = "/images/profile-photo.png";

export default function AboutWhoIAmSection() {
  return (
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
                me is the process of figuring things out-whether that&apos;s learning a new technology,
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
  );
}
