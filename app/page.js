import Navbar from "@/components/Navbar";
import AppShell from "@/components/AppShell";

export default function HomePage() {
  return (
    <AppShell backgroundImage="/images/background.jpg">
      <Navbar />

      <section className="px-8 py-24 text-white">
        <h1 className="text-6xl font-bold">Welcome</h1>
        <p>This page has a background image.</p>
      </section>
    </AppShell>
  );
}
