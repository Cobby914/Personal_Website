"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-20 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="mb-6 text-2xl font-bold text-white sm:text-3xl"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Get in Touch
        </h2>
        <p
          className="mb-8 text-lg text-white/90"
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Contact me
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
