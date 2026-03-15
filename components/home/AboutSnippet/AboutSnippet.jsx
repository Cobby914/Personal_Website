import Link from "next/link";
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
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          More about me
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
      </AnimateOnScroll>
    </section>
  );
}
