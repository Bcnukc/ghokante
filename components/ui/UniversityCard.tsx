// components/ui/UniversityCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { University } from "@/types";

export default function UniversityCard({
  name,
  abbreviation,
  slug,
  logoUrl,
  resourceCount,
}: University) {
  return (
    <Link href={`/universities/${slug}`}>
      <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-secondary/10 cursor-pointer">
        <div className="w-16 h-16 rounded-xl bg-slate-100 mb-6 flex items-center justify-center overflow-hidden">
          <Image
            src={logoUrl}
            alt={`${name} Logo`}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-primary mb-1">{abbreviation}</h3>
        <p className="text-sm text-on-surface-variant mb-4 font-medium">
          {name}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider">
            {resourceCount} Files
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">
            arrow_right_alt
          </span>
        </div>
      </div>
    </Link>
  );
}
