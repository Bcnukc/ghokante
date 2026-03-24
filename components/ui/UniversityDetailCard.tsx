// components/ui/UniversityDetailCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { UniversityDetail } from "@/types";

export default function UniversityDetailCard({
  name,
  abbreviation,
  slug,
  logoUrl,
  streams,
  resources,
  contributors,
  badge,
}: UniversityDetail) {
  return (
    <Link href={`/universities/${slug}`}>
      <article className="group bg-surface-container-lowest rounded-2xl editorial-shadow overflow-hidden transition-all hover:bg-primary-fixed/30 cursor-pointer relative">
        {/* Optional badge */}
        {badge && (
          <div className="absolute top-6 right-6 z-10">
            <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full font-label uppercase tracking-widest">
              {badge}
            </span>
          </div>
        )}

        {/* Main content */}
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
          {/* Logo */}
          <div className="w-32 h-32 flex-shrink-0 bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${name} official emblem`}
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-grow">
            <h2 className="text-2xl font-headline font-extrabold text-primary mb-1">
              {name}
            </h2>
            <p className="text-sm font-label font-black text-on-surface-variant/60 tracking-widest mb-4">
              {abbreviation}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex flex-col">
                <span className="text-sm font-label font-bold text-on-surface-variant">
                  Streams
                </span>
                <span className="text-xl font-headline font-black text-on-surface">
                  {streams}
                </span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30" />
              <div className="flex flex-col">
                <span className="text-sm font-label font-bold text-on-surface-variant">
                  Resources
                </span>
                <span className="text-xl font-headline font-black text-on-surface">
                  {resources}
                </span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30" />
              <div className="flex flex-col">
                <span className="text-sm font-label font-bold text-on-surface-variant">
                  Contributors
                </span>
                <span className="text-xl font-headline font-black text-on-surface">
                  {contributors}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="bg-surface-container-low/50 px-8 md:px-12 py-4 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
          <span className="text-sm font-label font-bold text-primary">
            Explore Faculty &amp; Syllabus
          </span>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
            arrow_forward_ios
          </span>
        </div>
      </article>
    </Link>
  );
}
