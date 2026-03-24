// app/universities/[slug]/[program]/[semester]/[subject]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChapterCard from "@/components/ui/ChapterCard";
import SyllabusSidebar from "@/components/ui/SyllabusSidebar";
import BookList from "@/components/ui/BookList";
import RelatedSubjectsList from "@/components/ui/RelatedSubjectsList";
import { getSubjectData, getAllSubjectParams } from "@/lib/subjects-data";

type PageParams = {
  slug: string;
  program: string;
  semester: string;
  subject: string;
};

export async function generateStaticParams() {
  return getAllSubjectParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug, program, semester, subject } = await params;
  const data = getSubjectData(slug, program, semester, subject);

  if (!data) {
    return { title: "Subject Not Found" };
  }

  return {
    title: `${data.name} Resources - ${data.programAbbr} Sem ${data.semesterNumber}`,
    description: `Access notes, lab reports, videos, and past questions for ${data.name} - ${data.semesterLabel} Semester, ${data.programAbbr}, ${data.universityName}.`,
  };
}

export default async function SubjectDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug, program, semester, subject } = await params;
  const data = getSubjectData(slug, program, semester, subject);

  if (!data) {
    notFound();
  }

  const semesterPath = `/universities/${data.universitySlug}/${data.programSlug}/${semester}`;
  const chapterBasePath = `${semesterPath}/${data.slug}`;

  return (
    <div className="min-h-screen">
      <main className="pt-8 pb-20 max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Universities", href: "/universities" },
              {
                label: data.universityAbbr,
                href: `/universities/${data.universitySlug}`,
              },
              {
                label: data.programAbbr,
                href: `/universities/${data.universitySlug}/${data.programSlug}`,
              },
              {
                label: `Sem ${data.semesterNumber}`,
                href: semesterPath,
              },
              { label: data.name },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ======================== */}
          {/* Main Content Area        */}
          {/* ======================== */}
          <div className="lg:col-span-8 space-y-12">
            {/* Subject Header Banner */}
            <header className="relative group overflow-hidden p-10 rounded-3xl bg-primary-container text-on-primary-container shadow-sm border border-outline-variant/10">
              {/* Background decoration */}
              <div className="absolute -right-10 -top-10 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">
                  {data.icon}
                </span>
              </div>

              <div className="relative z-10">
                <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                  {data.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tight mb-2">
                  {data.name}
                </h1>
                <p className="text-xl font-body opacity-90 italic">
                  {data.semesterLabel} Semester, {data.programAbbr},{" "}
                  {data.universityName}
                </p>
              </div>
            </header>

            {/* Chapters Section */}
            <section>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-headline font-bold text-primary">
                    Curriculum Chapters
                  </h2>
                  <p className="text-on-surface-variant font-body mt-1 italic">
                    Structured resources for comprehensive learning
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-label">
                  <span className="flex items-center gap-1 text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Updated 2024
                  </span>
                </div>
              </div>

              {/* Chapter cards list */}
              <div className="space-y-6">
                {data.chapters.map((chapter) => (
                  <ChapterCard
                    key={chapter.number}
                    chapter={chapter}
                    basePath={chapterBasePath}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* ======================== */}
          {/* Sidebar                  */}
          {/* ======================== */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Syllabus Download */}
            <SyllabusSidebar
              subjectName={data.name}
              description={data.syllabusDescription}
            />

            {/* Reference Books */}
            <BookList books={data.books} />

            {/* Related Subjects */}
            <RelatedSubjectsList
              subjects={data.relatedSubjects}
              basePath={semesterPath}
              semesterLabel={data.semesterLabel}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
