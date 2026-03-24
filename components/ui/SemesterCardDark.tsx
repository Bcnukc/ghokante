// components/ui/SemesterCardDark.tsx
import Link from "next/link";
import type { Semester } from "@/types";

interface Props {
  semester: Semester;
  basePath: string;
}

export default function SemesterCardDark({ semester, basePath }: Props) {
  return (
    <Link
      href={`${basePath}/semester-${semester.number}`}
      className="lg:col-span-2 group bg-inverse-surface hover:bg-primary-container transition-all duration-300 p-6 rounded-[2rem] flex flex-col justify-between shadow-lg"
    >
      <div className="flex justify-between">
        <h3 className="font-headline text-2xl font-bold text-surface">
          {semester.label}{" "}
          <span className="text-xs block opacity-60 uppercase font-bold tracking-widest mt-1">
            Semester
          </span>
        </h3>
        <div className="bg-tertiary text-on-tertiary text-[10px] px-2 py-1 rounded font-bold self-start font-headline">
          INTERNSHIP
        </div>
      </div>
      {semester.description && (
        <p className="font-body text-surface text-sm opacity-80 mt-4 italic">
          {semester.description}
        </p>
      )}
    </Link>
  );
}
