// components/ui/ProgramCard.tsx
import Link from "next/link";
import type { Program } from "@/types";

interface ProgramCardProps extends Program {
  universitySlug: string;
}

export default function ProgramCard({
  abbreviation,
  description,
  icon,
  iconStyle,
  iconColor,
  duration,
  resources,
  slug,
  universitySlug,
}: ProgramCardProps) {
  return (
    <Link href={`/universities/${universitySlug}/${slug}`}>
      <div className="group bg-surface-container-low rounded-xl p-8 transition-all hover:bg-surface-container-lowest hover:shadow-lg cursor-pointer h-full flex flex-col">
        {/* Icon + Title + Description */}
        <div className="mb-8">
          <span
            className={`material-symbols-outlined ${iconColor} text-4xl mb-4 block`}
            style={
              iconStyle === "filled"
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {icon}
          </span>
          <h3 className="font-headline text-2xl font-bold text-on-surface">
            {abbreviation}
          </h3>
          <p className="font-body text-on-surface-variant mt-2">
            {description}
          </p>
        </div>

        {/* Stats + Arrow */}
        <div className="flex justify-between items-end mt-auto">
          <div className="space-y-1">
            <p className="font-label text-[10px] text-on-surface-variant uppercase font-bold">
              Stats
            </p>
            <p className="font-headline font-semibold text-sm">
              {duration} &bull; {resources} Res.
            </p>
          </div>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
            arrow_right_alt
          </span>
        </div>
      </div>
    </Link>
  );
}
