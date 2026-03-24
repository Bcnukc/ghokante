// components/ui/ConfessionCardSimple.tsx
import type { Confession } from "@/types";

export default function ConfessionCardSimple({
  content,
  category,
}: Confession) {
  return (
    <div className="md:col-span-4 bg-surface-container-low p-8 rounded-3xl hover:bg-surface-container-lowest transition-all duration-300">
      <p className="font-body text-lg leading-relaxed text-on-background mb-6">
        &ldquo;{content}&rdquo;
      </p>
      <div className="flex items-center justify-between text-on-surface-variant">
        {category && (
          <span className="font-label text-[10px] uppercase font-bold tracking-widest opacity-60">
            Posted in {category}
          </span>
        )}
        <button className="hover:text-primary cursor-pointer">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
    </div>
  );
}
