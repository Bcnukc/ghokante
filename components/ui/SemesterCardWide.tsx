// components/ui/SemesterCardWide.tsx
import Link from "next/link";
import type { Semester } from "@/types";

interface Props {
  semester: Semester;
  basePath: string;
}

export default function SemesterCardWide({ semester, basePath }: Props) {
  return (
    <Link
      href={`${basePath}/semester-${semester.number}`}
      className="lg:col-span-2 group bg-surface-container-low hover:bg-primary-fixed/30 transition-all duration-300 p-6 rounded-[2rem] flex justify-between items-center shadow-sm"
    >
      <div>
        <h3 className="font-headline text-2xl font-bold text-on-surface">
          {semester.label}{" "}
          <span className="inline-block ml-2 text-xs opacity-60 uppercase font-bold tracking-widest">
            Semester
          </span>
        </h3>
        {semester.description && (
          <p className="font-body text-sm mt-1 opacity-70">
            {semester.description}
          </p>
        )}
      </div>
      {semester.icon && (
        <span className="material-symbols-outlined text-3xl opacity-20">
          {semester.icon}
        </span>
      )}
    </Link>
  );
}
