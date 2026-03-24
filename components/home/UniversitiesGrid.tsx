// components/home/UniversitiesGrid.tsx
import SectionHeader from "@/components/ui/SectionHeader";
import UniversityCard from "@/components/ui/UniversityCard";
import type { University } from "@/types";

const universities: University[] = [
  {
    name: "Tribhuvan University",
    abbreviation: "TU",
    slug: "tu",
    logoUrl: "/images/universities/tu-logo.png",
    resourceCount: "12,400+",
  },
  {
    name: "Pokhara University",
    abbreviation: "PU",
    slug: "pu",
    logoUrl: "/images/universities/pu-logo.png",
    resourceCount: "8,200+",
  },
  {
    name: "Kathmandu University",
    abbreviation: "KU",
    slug: "ku",
    logoUrl: "/images/universities/ku-logo.png",
    resourceCount: "5,600+",
  },
  {
    name: "Purbanchal University",
    abbreviation: "PoU",
    slug: "pou",
    logoUrl: "/images/universities/pou-logo.png",
    resourceCount: "4,900+",
  },
];

export default function UniversitiesGrid() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Partner Universities"
          subtitle="Access curated content specific to your university board."
          viewAllHref="/universities"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {universities.map((uni) => (
            <UniversityCard key={uni.slug} {...uni} />
          ))}
        </div>
      </div>
    </section>
  );
}
