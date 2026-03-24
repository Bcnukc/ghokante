// components/ui/RelatedSubjectsList.tsx
import Link from "next/link";
import type { RelatedSubject } from "@/types";

interface RelatedSubjectsListProps {
  subjects: RelatedSubject[];
  basePath: string;
  semesterLabel: string;
}

export default function RelatedSubjectsList({
  subjects,
  basePath,
  semesterLabel,
}: RelatedSubjectsListProps) {
  return (
    <div className="bg-surface-container-low p-8 rounded-3xl space-y-6">
      <h3 className="text-lg font-headline font-bold text-on-surface">
        {semesterLabel} Semester Core
      </h3>
      <ul className="space-y-4">
        {subjects.map((subject, index) => (
          <li
            key={subject.slug}
            className={
              index > 0 ? "border-t border-outline-variant/20 pt-4" : ""
            }
          >
            <Link
              href={`${basePath}/${subject.slug}`}
              className="flex items-center justify-between group"
            >
              <span className="font-body text-on-surface-variant group-hover:text-primary transition-colors">
                {subject.name}
              </span>
              <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
