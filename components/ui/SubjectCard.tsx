// components/ui/SubjectCard.tsx
import Link from "next/link";
import type { Subject } from "@/types";

interface SubjectCardProps extends Subject {
  basePath: string;
}

export default function SubjectCard({
  name,
  slug,
  icon,
  creditHours,
  resourceCount,
  description,
  basePath,
}: SubjectCardProps) {
  return (
    <Link href={`${basePath}/${slug}`}>
      <div className="bg-surface-container-lowest rounded-[1.5rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
        {/* Header: Icon + Credit */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <span className="font-headline text-[10px] font-black tracking-widest uppercase bg-tertiary-fixed px-2 py-1 rounded">
            {creditHours} Credit Hours
          </span>
        </div>

        {/* Title + Description */}
        <h4 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="font-body text-on-surface-variant leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Footer: Resource count + Arrow */}
        <div className="flex items-center justify-between pt-6 border-t border-surface-container mt-auto">
          <div className="flex items-center gap-2 font-headline text-sm font-semibold text-on-surface-variant">
            <span className="material-symbols-outlined text-lg">
              folder_open
            </span>
            <span>{resourceCount} Resources</span>
          </div>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
