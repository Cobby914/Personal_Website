import Link from "next/link";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Hobbies | Colin Kwon",
  description: "A look at what Colin enjoys outside of coding.",
};

export default function HobbiesPage() {
  return (
    <AppShell backgroundImage="/images/background.jpg">
      <section className="flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-black/55 p-8 text-center text-white shadow-2xl backdrop-blur-md sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Hobbies
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Work In Progress
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            I am currently building this page. Check back soon for a full look
            at the things I enjoy outside of development.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}