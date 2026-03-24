// app/universities/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FeaturedProgramCard from "@/components/ui/FeaturedProgramCard";
import ProgramCard from "@/components/ui/ProgramCard";
import {
  getUniversityBySlug,
  getAllUniversitySlugs,
} from "@/lib/universities-data";

// Generate static pages for all universities at build time
export async function generateStaticParams() {
  const slugs = getAllUniversitySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    return { title: "University Not Found" };
  }

  return {
    title: `${university.abbreviation} Resources`,
    description: `Access comprehensive academic resources for ${university.name} (${university.abbreviation}) programs on Ghokante.`,
  };
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  const featuredProgram = university.programs.find((p) => p.featured);
  const regularPrograms = university.programs.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="max-w-7xl mx-auto px-6 pt-8 mb-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Universities", href: "/universities" },
            { label: university.abbreviation },
          ]}
        />
      </section>

      {/* University Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left: Text */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label text-[10px] font-bold tracking-wider mb-6">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              ESTABLISHED {university.established}
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
              {university.name}
            </h1>

            <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl">
              {university.description}
            </p>
          </div>

          {/* Right: Logo */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-fixed opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-surface-container-lowest flex items-center justify-center p-8 shadow-xl">
                <Image
                  src={university.logoUrl}
                  alt={`${university.name} official emblem`}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">
              Available Programs
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Select your stream to browse curated notes, past papers, and
              guides.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-label font-bold text-sm cursor-pointer hover:opacity-80 transition-opacity">
            <span>SORT BY POPULARITY</span>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>

        {/* Program Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured program spans 2 columns */}
          {featuredProgram && (
            <div className="lg:col-span-2">
              <FeaturedProgramCard
                {...featuredProgram}
                universitySlug={university.slug}
              />
            </div>
          )}

          {/* Regular programs */}
          {regularPrograms.map((program) => (
            <ProgramCard
              key={program.slug}
              {...program}
              universitySlug={university.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
