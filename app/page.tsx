// app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import UniversitiesGrid from "@/components/home/UniversitiesGrid";
import PopularResources from "@/components/home/PopularResources";
import FeaturedSubjects from "@/components/home/FeaturedSubjects";
import HowItWorks from "@/components/home/HowItWorks";
import ForumNotices from "@/components/home/ForumNotices";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UniversitiesGrid />
      <PopularResources />
      <FeaturedSubjects />
      <HowItWorks />
      <ForumNotices />
      <Newsletter />
    </>
  );
}
