// app/universities/[slug]/[program]/[semester]/[subject]/[chapter]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ChapterTabs from "@/components/ui/ChapterTabs";
import ResourceCard from "@/components/ui/ResourceCard";
import ChapterRoadmap from "@/components/ui/ChapterRoadmap";
import RelatedModules from "@/components/ui/RelatedModules";
import TopContributors from "@/components/ui/TopContributors";
import CommentSection from "@/components/ui/CommentSection";
import { getChapterData, getAllChapterParams } from "@/lib/chapters-data";

type PageParams = {
  slug: string;
  program: string;
  semester: string;
  subject: string;
  chapter: string;
};

export async function generateStaticParams() {
  return getAllChapterParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug, program, semester, subject, chapter } = await params;
  const data = getChapterData(slug, program, semester, subject, chapter);

  if (!data) {
    return { title: "Chapter Not Found" };
  }

  return {
    title: `Chapter ${data.chapterNumber} ${data.subjectName} Notes & Resources`,
    description: `${data.chapterTitle} - Access notes, lab questions, cheatsheets, and videos for ${data.subjectName}, ${data.semesterLabel} Semester ${data.programAbbr}, ${data.universityAbbr}.`,
  };
}

export default async function ChapterDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug, program, semester, subject, chapter } = await params;
  const data = getChapterData(slug, program, semester, subject, chapter);

  if (!data) {
    notFound();
  }

  const subjectPath = `/universities/${data.universitySlug}/${data.programSlug}/${semester}/${data.subjectSlug}`;

  return (
    <div className="min-h-screen">
      <main className="pt-8 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
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
                href: `/universities/${data.universitySlug}/${data.programSlug}/${semester}`,
              },
              {
                label: data.subjectName,
                href: subjectPath,
              },
              {
                label: `Chapter ${data.chapterNumber}`,
              },
            ]}
          />
        </div>

        {/* Chapter Header */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold font-headline rounded-full mb-4">
                {data.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-6 leading-tight">
                Chapter {data.chapterNumber}: {data.chapterTitle}
              </h1>
              <p className="text-xl text-on-surface-variant font-body leading-relaxed italic">
                {data.description}
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-headline font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <span className="material-symbols-outlined">download</span>
                Full Pack
              </button>
              <button className="p-3 bg-surface-container-high text-primary rounded-xl hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
        <ChapterTabs tabs={data.tabs} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ======================== */}
          {/* Main Content — Resources */}
          {/* ======================== */}
          <div className="lg:col-span-8 space-y-10">
            {/* Resource Cards */}
            {data.resources.map((resource) => (
              <ResourceCard key={resource.slug} {...resource} />
            ))}

            {/* Comments Section */}
            <CommentSection comments={data.comments} />
          </div>

          {/* ======================== */}
          {/* Sidebar                  */}
          {/* ======================== */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Chapter Roadmap */}
            <ChapterRoadmap
              items={data.roadmap}
              syllabusYear={data.syllabusYear}
            />

            {/* Related Modules */}
            <RelatedModules
              modules={data.relatedModules}
              basePath={subjectPath}
            />

            {/* Top Contributors */}
            <TopContributors contributors={data.contributors} />
          </aside>
        </div>
      </main>
    </div>
  );
}
