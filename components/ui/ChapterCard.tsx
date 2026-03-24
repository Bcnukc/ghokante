// components/ui/ChapterCard.tsx
import Link from "next/link";
import type { Chapter } from "@/types";

interface ChapterCardProps {
  chapter: Chapter;
  basePath: string;
}

export default function ChapterCard({ chapter, basePath }: ChapterCardProps) {
  return (
    <Link href={`${basePath}/chapter-${chapter.number}`}>
      <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:bg-primary-fixed/30 transition-all duration-300 border border-outline-variant/10">
        {/* Left: Chapter info */}
        <div className="mb-4 md:mb-0">
          <span className="text-xs font-label font-bold text-tertiary uppercase tracking-widest">
            Chapter {String(chapter.number).padStart(2, "0")}
          </span>
          <h3 className="text-xl font-headline font-extrabold text-on-surface mt-1">
            {chapter.title}
          </h3>
          <p className="text-on-surface-variant font-body text-sm mt-1 max-w-md">
            {chapter.description}
          </p>
        </div>

        {/* Right: Resource icons + arrow */}
        <div className="flex gap-4 md:gap-6 items-center">
          {chapter.resources.map((res) => (
            <div key={res.type} className="text-center">
              <span
                className={`material-symbols-outlined ${res.iconColor} mb-1 block`}
              >
                {res.icon}
              </span>
              <span className="text-[10px] font-label font-bold">
                {String(res.count).padStart(2, "0")} {res.label}
              </span>
            </div>
          ))}
          <div className="ml-2 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
