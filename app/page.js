import Link from "next/link";
import AppShell from "@/components/AppShell";
import ScrambleText from "@/components/ui/ScrambleText/ScrambleText";
import ScrollCue from "@/components/ui/ScrollCue/ScrollCue";
import FeaturedWork from "@/components/home/FeaturedWork/FeaturedWork";
import AboutSnippet from "@/components/home/AboutSnippet/AboutSnippet";
import ContactSection from "@/components/home/ContactSection/ContactSection";

export default function HomePage() {
  return (
    <AppShell backgroundImage="/images/background.jpg">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
          }}
        >
          <ScrambleText text="Colin Kwon" delay={2200} speed={40} />
        </h1>
        <p
          className="mt-4 max-w-2xl text-lg text-white sm:text-xl md:text-2xl"
          style={{
            textShadow:
              "0 1px 3px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          <ScrambleText
            text="Software and AI developer building things for the web."
            delay={3100}
            speed={25}
          />
        </p>
        <p
          className="mt-4 max-w-xl text-base text-white/95 sm:text-lg"
          style={{
            textShadow:
              "0 1px 3px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          <ScrambleText
            text="Welcome to my portfolio website. Explore my projects, learn about my background, and get in touch."
            delay={4100}
            speed={20}
          />
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="btn-fade-in rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100"
            style={{ animationDelay: "5.1s" }}
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="btn-fade-in rounded-lg border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            style={{
              textShadow: "0 1px 3px rgba(0,0,0,0.8)",
              animationDelay: "5.7s",
            }}
          >
            Get in Touch
          </Link>
        </div>
        <ScrollCue />
      </section>

      {/* Featured Work */}
      <FeaturedWork />

      {/* About */}
      <AboutSnippet />

      {/* Contact */}
      <ContactSection />
    </AppShell>
  );
}
