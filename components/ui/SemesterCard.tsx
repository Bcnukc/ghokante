// components/ui/SemesterCard.tsx
import Link from "next/link";
import type { Semester } from "@/types";

interface Props {
  semester: Semester;
  basePath: string;
}

export default function SemesterCard({ semester, basePath }: Props) {
  return (
    <Link
      href={`${basePath}/semester-${semester.number}`}
      className="group bg-surface-container-lowest hover:bg-primary-fixed/30 transition-all duration-300 p-6 rounded-[2rem] flex flex-col justify-between shadow-sm"
    >
      <h3 className="font-headline text-2xl font-bold text-on-surface">
        {semester.label}{" "}
        <span className="text-xs block opacity-60 uppercase font-bold tracking-widest mt-1">
          Semester
        </span>
      </h3>
      <div className="mt-4">
        <span className="font-headline text-[10px] font-bold text-on-surface-variant">
          {semester.moduleCount
            ? `${semester.moduleCount}${semester.moduleCount === "Electives Focus" ? "" : " MODULES"}`
            : ""}
        </span>
        <div className="w-8 h-1 bg-primary-fixed-dim mt-2 group-hover:w-full transition-all duration-500" />
      </div>
    </Link>
  );
}
