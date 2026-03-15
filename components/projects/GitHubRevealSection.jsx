"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll/AnimateOnScroll";
import { textShadow, textShadowSoft } from "@/components/projects/projectStyles";

export default function GitHubRevealSection() {
  return (
    <section id="projects-github" className="relative w-full px-6 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/20 bg-black/55 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              GitHub
            </p>
            <h2
              className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ textShadow }}
            >
              Explore More Projects on GitHub
            </h2>
            <p
              className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
              style={{ textShadow: textShadowSoft }}
            >
              Browse repositories, active experiments, and code samples that are
              not fully documented on this page yet.
            </p>
            <div className="mt-7">
              <Link
                href="https://github.com/Cobby914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit GitHub
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
