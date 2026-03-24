// components/home/PopularResources.tsx
import Link from "next/link";

interface PopularResource {
  title: string;
  subject: string;
  university: string;
  semester: string;
  fileType: "pdf" | "pptx" | "video" | "text" | "image";
  rating: number;
  viewCount: string;
  href: string;
}

const popularResources: PopularResource[] = [
  {
    title: "Introduction to C Programming - Complete Notes",
    subject: "C Programming",
    university: "TU",
    semester: "1st Semester",
    fileType: "pdf",
    rating: 4.8,
    viewCount: "12.4k",
    href: "/universities/tu/bsc-csit/semester-1/c-programming/chapter-1",
  },
  {
    title: "Digital Logic - Gate Level Minimization",
    subject: "Digital Logic",
    university: "TU",
    semester: "1st Semester",
    fileType: "pdf",
    rating: 4.6,
    viewCount: "9.2k",
    href: "/universities/tu/bsc-csit/semester-1/digital-logic/chapter-1",
  },
  {
    title: "Calculus I - Limits and Continuity",
    subject: "Mathematics I",
    university: "TU",
    semester: "1st Semester",
    fileType: "pdf",
    rating: 4.5,
    viewCount: "8.7k",
    href: "/universities/tu/bsc-csit/semester-1/mathematics-i/chapter-1",
  },
  {
    title: "Physics - Oscillation and Waves Lab Report",
    subject: "Physics",
    university: "TU",
    semester: "1st Semester",
    fileType: "pdf",
    rating: 4.3,
    viewCount: "6.1k",
    href: "/universities/tu/bsc-csit/semester-1/physics/chapter-1",
  },
  {
    title: "OOP in Java - Inheritance & Polymorphism",
    subject: "OOP",
    university: "TU",
    semester: "3rd Semester",
    fileType: "pptx",
    rating: 4.7,
    viewCount: "7.8k",
    href: "/universities/tu/bsc-csit/semester-3/oop/chapter-1",
  },
  {
    title: "Data Structures - Linked List Implementation",
    subject: "DSA",
    university: "TU",
    semester: "3rd Semester",
    fileType: "video",
    rating: 4.9,
    viewCount: "15.3k",
    href: "/universities/tu/bsc-csit/semester-3/dsa/chapter-1",
  },
];

const fileTypeConfig = {
  pdf: { icon: "picture_as_pdf", color: "text-red-600", bg: "bg-red-50" },
  pptx: { icon: "slideshow", color: "text-orange-600", bg: "bg-orange-50" },
  video: { icon: "play_circle", color: "text-blue-600", bg: "bg-blue-50" },
  text: { icon: "description", color: "text-green-600", bg: "bg-green-50" },
  image: { icon: "image", color: "text-purple-600", bg: "bg-purple-50" },
};

function PopularResourceCard({
  title,
  subject,
  university,
  semester,
  fileType,
  rating,
  viewCount,
  href,
}: PopularResource) {
  const config = fileTypeConfig[fileType];

  return (
    <Link href={href} className="block group">
      <div className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 hover:shadow-md hover:border-primary/20 transition-all duration-200">
        <div className="flex items-start gap-4">
          {/* File Icon */}
          <div
            className={`w-12 h-12 ${config.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
          >
            <span className={`material-symbols-outlined ${config.color}`}>
              {config.icon}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-headline text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h4>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="font-headline text-[10px] font-bold uppercase tracking-wider text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-md">
                {university}
              </span>
              <span className="font-headline text-[10px] text-outline">
                {subject}
              </span>
              <span className="font-headline text-[10px] text-outline">
                {semester}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-amber-500 text-sm">
                  star
                </span>
                <span className="font-headline text-xs font-bold text-on-surface">
                  {rating}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-outline text-sm">
                  visibility
                </span>
                <span className="font-headline text-xs text-outline">
                  {viewCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PopularResources() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-tertiary block mb-2">
            Trending
          </span>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface">
            Popular Resources
          </h2>
        </div>
        <Link
          href="/universities"
          className="font-headline text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-container transition-colors"
        >
          Browse All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularResources.map((resource, index) => (
          <PopularResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  );
}
