// components/ui/ChapterRoadmap.tsx
import type { RoadmapItem } from "@/types";

interface ChapterRoadmapProps {
  items: RoadmapItem[];
  syllabusYear: string;
}

export default function ChapterRoadmap({
  items,
  syllabusYear,
}: ChapterRoadmapProps) {
  return (
    <div className="bg-surface-container-high p-8 rounded-3xl">
      <h4 className="text-xl font-headline font-extrabold text-primary mb-6">
        Chapter Roadmap
      </h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.title} className="flex gap-3 items-start group">
            {item.completed ? (
              <span className="w-5 h-5 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                <span
                  className="material-symbols-outlined text-white text-[12px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check
                </span>
              </span>
            ) : (
              <span className="w-5 h-5 rounded-full border-2 border-primary/30 flex-shrink-0 mt-1" />
            )}
            <span
              className={`font-body ${
                item.completed
                  ? "text-on-surface-variant group-hover:text-primary transition-colors"
                  : "text-on-surface-variant"
              }`}
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">
        <span className="text-xs font-headline font-bold text-tertiary">
          TIED TO {syllabusYear}
        </span>
      </div>
    </div>
  );
}
