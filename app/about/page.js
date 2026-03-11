import AppShell from "@/components/AppShell";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata = {
  title: "About | Colin Kwon",
  description: "Learn more about Colin Kwon - software and AI developer.",
};

export default function AboutPage() {
  return (
    <AppShell backgroundImage="/images/background.jpg">
      <AboutPageContent />
    </AppShell>
  );
}
