import Link from "next/link";
import AppShell from "@/components/AppShell";

export default function HomePage() {
  return (
    <AppShell backgroundImage="/images/background.jpg">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Colin Kwon
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
          Software developer building things for the web
        </p>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Welcome to my portfolio. Explore my projects, learn about my background,
          and get in touch.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
