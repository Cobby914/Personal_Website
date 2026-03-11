import dynamic from "next/dynamic";
import AppShell from "@/components/AppShell";

const AboutPageContent = dynamic(
  () => import("@/components/about/AboutPageContent"),
  { ssr: true }
);

export const metadata = {
  title: "About | Colin Kwon",
  description: "Learn more about Colin Kwon - software and AI developer.",
};

export default function AboutPage() {
  return (
    <AppShell backgroundImage="/images/about-background.png">
      <AboutPageContent />
    </AppShell>
  );
}
