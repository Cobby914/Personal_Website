import AboutImageCarousel from "./AboutImageCarousel";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutWhoIAmSection from "@/components/about/AboutWhoIAmSection";
import AboutExperienceSection from "@/components/about/AboutExperienceSection";

export default function AboutPageContent() {
  return (
    <>
      <AboutHeroSection />
      <AboutWhoIAmSection />
      <AboutImageCarousel />
      <AboutExperienceSection />
    </>
  );
}
