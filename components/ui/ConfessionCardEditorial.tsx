// components/ui/ConfessionCardEditorial.tsx
import Image from "next/image";
import type { Confession } from "@/types";

export default function ConfessionCardEditorial({
  content,
  reactions,
  hotTake,
  imageUrl,
}: Confession) {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-3xl editorial-shadow flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
      {/* Image */}
      {imageUrl && (
        <div className="md:w-1/3 h-48 w-full rounded-2xl overflow-hidden relative">
          <Image
            src={imageUrl}
            alt="Confession illustration"
            fill
            className="object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
          />
        </div>
      )}

      {/* Content */}
      <div className={imageUrl ? "md:w-2/3" : "w-full"}>
        {hotTake && (
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-error" />
            <span className="font-headline text-[10px] font-bold text-error uppercase tracking-tighter">
              Hot Take
            </span>
          </div>
        )}

        <p className="text-2xl font-body leading-tight text-on-background mb-6">
          &ldquo;{content}&rdquo;
        </p>

        {reactions && (
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-headline text-[10px] font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                add_reaction
              </span>
              {reactions} REAX
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
