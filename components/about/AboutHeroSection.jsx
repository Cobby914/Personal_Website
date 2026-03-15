"use client";

import ScrambleText from "@/components/ui/ScrambleText/ScrambleText";
import ScrollCue from "@/components/ui/ScrollCue/ScrollCue";

export default function AboutHeroSection() {
  return (
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
  );
}
