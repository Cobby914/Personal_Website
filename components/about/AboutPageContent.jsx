"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";

// Placeholder images - replace with real paths when available
const PLACEHOLDER_IMAGES = {
  profile: "https://placehold.co/400x500/1a1a2e/4a5568?text=Photo",
  snapshot1: "https://placehold.co/200x200/1a1a2e/4a5568?text=1",
  snapshot2: "https://placehold.co/200x200/1a1a2e/4a5568?text=2",
  snapshot3: "https://placehold.co/200x200/1a1a2e/4a5568?text=3",
};

const textShadow = "0 1px 3px rgba(0,0,0,0.8)";
const textShadowSoft = "0 1px 2px rgba(0,0,0,0.6)";

export default function AboutPageContent() {
  return (
    <section className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <h1
            className="mb-12 text-3xl font-bold text-white sm:text-4xl"
            style={{ textShadow }}
          >
            About Me
          </h1>

          {/* Main content: image + text */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            {/* Profile image placeholder */}
            <AnimateOnScroll stagger={80} as="div" className="flex-shrink-0">
              <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg md:mx-0 md:max-w-[280px]">
                <img
                  src={PLACEHOLDER_IMAGES.profile}
                  alt="Profile"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </AnimateOnScroll>

            {/* Bio text */}
            <AnimateOnScroll stagger={160} as="div" className="flex-1">
              <p
                className="text-lg leading-relaxed text-white/90 sm:text-xl"
                style={{ textShadow: textShadowSoft }}
              >
                I&apos;m a software developer focused on AI and web development.
                I build tools and applications that solve real problems and
                delight users. I&apos;m always open to new opportunities—whether
                that&apos;s a full-time role, collaboration on interesting
                projects, or just connecting with fellow developers.
              </p>
              <p
                className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg"
                style={{ textShadow: textShadowSoft }}
              >
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source, or enjoying the great
                outdoors.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Snapshot grid */}
          <AnimateOnScroll stagger={240} as="div" className="mt-12">
            <p
              className="mb-4 text-sm font-medium text-white/70"
              style={{ textShadow: textShadowSoft }}
            >
              A few snapshots
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                PLACEHOLDER_IMAGES.snapshot1,
                PLACEHOLDER_IMAGES.snapshot2,
                PLACEHOLDER_IMAGES.snapshot3,
              ].map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:border-white/20"
                >
                  <img
                    src={src}
                    alt={`Snapshot ${i + 1}`}
                    className="aspect-square w-[120px] object-cover sm:w-[140px]"
                  />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
