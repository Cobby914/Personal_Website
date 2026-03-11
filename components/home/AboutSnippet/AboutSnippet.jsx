"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

export default function AboutSnippet() {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-20 sm:px-8 md:py-24"
    >
      <AnimateOnScroll>
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 text-2xl font-bold text-white sm:text-3xl"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          About
        </h2>
        <p
          className="text-lg leading-relaxed text-white/90 sm:text-xl"
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          I&apos;m a software developer focused on AI and web development. I
          build tools and applications that solve real problems and delight
          users. I&apos;m always open to new opportunities—whether that&apos;s a
          full-time role, collaboration on interesting projects, or just
          connecting with fellow developers.
        </p>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
