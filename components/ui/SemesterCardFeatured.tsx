// components/ui/SemesterCardFeatured.tsx
import Link from "next/link";
import type { Semester } from "@/types";

interface Props {
  semester: Semester;
  basePath: string;
}

export default function SemesterCardFeatured({ semester, basePath }: Props) {
  return (
    <Link
      href={`${basePath}/semester-${semester.number}`}
      className="md:col-span-2 lg:col-span-3 group bg-surface-container-low hover:bg-primary-fixed transition-all duration-300 p-8 rounded-[2rem] flex flex-col justify-between border-b-4 border-primary"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-headline text-4xl font-extrabold text-primary">
          {semester.label}{" "}
          <span className="text-xl block font-normal opacity-60">Semester</span>
        </h3>
        <span className="material-symbols-outlined text-4xl text-primary opacity-20 group-hover:opacity-100 transition-opacity">
          school
        </span>
      </div>
      <div className="mt-8">
        {semester.description && (
          <p className="font-body text-lg text-on-surface mb-4">
            {semester.description}
          </p>
        )}
        {semester.tags && (
          <div className="flex gap-2 flex-wrap">
            {semester.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-[10px] font-bold font-headline uppercase ${
                  tag === "Start Here"
                    ? "bg-tertiary-fixed"
                    : "bg-surface-container-lowest"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
