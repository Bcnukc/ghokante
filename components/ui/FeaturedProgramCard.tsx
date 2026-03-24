// components/ui/FeaturedProgramCard.tsx
import Link from "next/link";
import type { Program } from "@/types";

interface FeaturedProgramCardProps extends Program {
  universitySlug: string;
}

export default function FeaturedProgramCard({
  abbreviation,
  description,
  icon,
  duration,
  resources,
  badge,
  slug,
  universitySlug,
}: FeaturedProgramCardProps) {
  return (
    <Link href={`/universities/${universitySlug}/${slug}`}>
      <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-2xl hover:bg-primary-fixed/30 cursor-pointer">
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Header: Badge + Icon */}
            <div className="flex justify-between items-start mb-6">
              {badge && (
                <span className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-lg font-label text-xs font-extrabold uppercase">
                  {badge}
                </span>
              )}
              <span className="material-symbols-outlined text-primary text-3xl">
                {icon}
              </span>
            </div>

            {/* Title + Description */}
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">
              {abbreviation}
            </h3>
            <p className="font-body text-lg text-on-surface-variant max-w-md">
              {description}
            </p>
          </div>

          {/* Stats + Arrow */}
          <div className="mt-12 flex items-center gap-12 flex-wrap">
            <div>
              <p className="font-label text-xs text-on-surface-variant uppercase font-bold mb-1">
                Duration
              </p>
              <p className="font-headline font-bold text-lg text-on-surface">
                {duration}
              </p>
            </div>
            <div>
              <p className="font-label text-xs text-on-surface-variant uppercase font-bold mb-1">
                Resources
              </p>
              <p className="font-headline font-bold text-lg text-on-surface">
                {resources} Files
              </p>
            </div>
            <div className="ml-auto bg-primary text-white p-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute -right-12 -bottom-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
          <span className="material-symbols-outlined text-[200px]">
            terminal
          </span>
        </div>
      </div>
    </Link>
  );
}
