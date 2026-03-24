// app/universities/[slug]/[program]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SemesterCardFeatured from "@/components/ui/SemesterCardFeatured";
import SemesterCard from "@/components/ui/SemesterCard";
import SemesterCardWide from "@/components/ui/SemesterCardWide";
import SemesterCardDark from "@/components/ui/SemesterCardDark";
import SubjectCard from "@/components/ui/SubjectCard";
import { getProgramData, getAllProgramParams } from "@/lib/programs-data";

// Pre-render all program pages at build time
export async function generateStaticParams() {
  return getAllProgramParams();
}

// Dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; program: string }>;
}): Promise<Metadata> {
  const { slug, program: programSlug } = await params;
  const program = getProgramData(slug, programSlug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return {
    title: `${program.abbreviation} Resources at ${program.universityAbbr}`,
    description: `Access comprehensive academic resources for ${program.name} at ${program.universityName} on Ghokante.`,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string; program: string }>;
}) {
  const { slug, program: programSlug } = await params;
  const program = getProgramData(slug, programSlug);

  if (!program) {
    notFound();
  }

  const basePath = `/universities/${program.universitySlug}/${program.slug}`;

  // Find the first semester with subjects to display
  const activeSemester =
    program.semesters.find((s) => s.subjects.length > 0) || null;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Universities", href: "/universities" },
              {
                label: program.universityAbbr,
                href: `/universities/${program.universitySlug}`,
              },
              { label: program.abbreviation },
            ]}
          />
        </div>

        {/* Stream Banner Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="relative overflow-hidden bg-primary-container text-on-primary-container rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-white via-transparent to-black" />

            {/* Left: Text content */}
            <div className="relative z-10 max-w-2xl">
              <span className="font-headline text-sm font-bold tracking-widest uppercase mb-4 block text-blue-200">
                {program.universityName}
              </span>

              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                {program.abbreviation}
              </h1>

              <p className="font-body text-xl md:text-2xl opacity-90 leading-relaxed italic border-l-4 border-tertiary-fixed pl-6">
                {program.description}
              </p>

              {/* Info pills */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 font-headline bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  <span className="material-symbols-outlined text-lg">
                    calendar_today
                  </span>
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 font-headline bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  <span className="material-symbols-outlined text-lg">
                    menu_book
                  </span>
                  <span>{program.totalSemesters}</span>
                </div>
                <div className="flex items-center gap-2 font-headline bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  <span className="material-symbols-outlined text-lg">
                    verified
                  </span>
                  <span>{program.affiliation}</span>
                </div>
              </div>
            </div>

            {/* Right: Decorative card */}
            <div className="relative z-10 hidden lg:block">
              <div className="w-64 h-80 bg-surface-container-lowest rounded-3xl rotate-6 shadow-2xl p-6 flex flex-col justify-end overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={program.bannerImageUrl}
                    alt={`${program.universityName} academic crest`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-headline font-bold text-primary text-xl relative">
                  Academic Excellence
                </p>
                <p className="font-headline text-on-surface-variant text-xs relative">
                  The Digital Atheneum
                </p>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
            </div>
          </div>
        </section>

        {/* Semester Navigation — Bento Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          {/* Section header */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">
                Academic Roadmap
              </h2>
              <p className="font-body text-lg text-on-surface-variant italic">
                Select a semester to explore specialized modules and archived
                knowledge.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-surface-container px-4 py-2 rounded-full font-headline text-xs font-bold text-on-surface-variant">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {program.semesters.length} Semesters Total
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {program.semesters.map((semester) => {
              switch (semester.variant) {
                case "featured":
                  return (
                    <SemesterCardFeatured
                      key={semester.number}
                      semester={semester}
                      basePath={basePath}
                    />
                  );
                case "wide":
                  return (
                    <SemesterCardWide
                      key={semester.number}
                      semester={semester}
                      basePath={basePath}
                    />
                  );
                case "dark":
                  return (
                    <SemesterCardDark
                      key={semester.number}
                      semester={semester}
                      basePath={basePath}
                    />
                  );
                default:
                  return (
                    <SemesterCard
                      key={semester.number}
                      semester={semester}
                      basePath={basePath}
                    />
                  );
              }
            })}
          </div>
        </section>

        {/* Active Semester Subjects */}
        {activeSemester && (
          <section
            className="bg-surface-container-low py-20 px-6"
            id={`semester-${activeSemester.number}`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-headline text-2xl font-black">
                    {String(activeSemester.number).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="font-headline text-3xl font-extrabold text-on-surface">
                      {activeSemester.label} Semester Subjects
                    </h2>
                    <p className="font-body text-xl opacity-70 italic">
                      {activeSemester.description ||
                        "Core subjects for this semester."}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="font-headline text-sm font-bold bg-surface-container-lowest border border-outline-variant/30 px-6 py-3 rounded-xl hover:bg-white transition-all">
                    Download Syllabus
                  </button>
                </div>
              </div>

              {/* Subject cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeSemester.subjects.map((subject) => (
                  <SubjectCard
                    key={subject.slug}
                    {...subject}
                    basePath={`${basePath}/semester-${activeSemester.number}`}
                  />
                ))}
              </div>

              {/* View all link */}
              <div className="mt-12 text-center">
                <Link
                  href={`${basePath}/semester-${activeSemester.number}`}
                  className="font-headline font-bold text-primary group inline-flex items-center gap-2 hover:gap-4 transition-all"
                >
                  View All Subjects for {activeSemester.label} Semester
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
