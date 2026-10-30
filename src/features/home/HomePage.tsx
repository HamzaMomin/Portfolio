import AboutSection from "./sections/AboutSection";
import CertificationsSection from "./sections/CertificationsSection";
import HeroSection from "./sections/HeroSection";
import ProjectsPreviewSection from "./sections/ProjectsPreviewSection";
import ReviewsSection from "./sections/ReviewsSection";
import SkillTreeSection from "./sections/SkillTreeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsPreviewSection />
      <ReviewsSection />
      <CertificationsSection />
    </>
  );
}
