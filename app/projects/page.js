import dynamic from "next/dynamic";
import AppShell from "@/components/AppShell";

const ProjectsPageContent = dynamic(
  () => import("@/components/projects/ProjectsPageContent"),
  { ssr: true }
);

export const metadata = {
  title: "Projects | Colin Kwon",
  description: "Explore Colin Kwon's project roadmap and completed work.",
};

export default function ProjectsPage() {
  return (
    <AppShell backgroundImage="/images/about-background.png">
      <ProjectsPageContent />
    </AppShell>
  );
}