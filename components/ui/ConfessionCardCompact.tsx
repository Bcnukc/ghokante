// components/ui/ConfessionCardCompact.tsx
import type { Confession } from "@/types";

export default function ConfessionCardCompact({
  content,
  badge,
  likes,
  comments,
}: Confession) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-3xl editorial-shadow hover:bg-primary-fixed/30 transition-all duration-500">
      {badge && (
        <div className="mb-6">
          <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed text-[9px] font-bold font-headline uppercase rounded">
            {badge}
          </span>
        </div>
      )}

      <p className="text-xl font-body italic leading-relaxed text-on-background mb-8">
        &ldquo;{content}&rdquo;
      </p>

      <div className="flex items-center justify-between text-on-surface-variant">
        <div className="flex gap-4">
          {likes && (
            <button className="flex items-center gap-1.5 hover:text-primary cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                thumb_up
              </span>
              <span className="text-[10px] font-bold">{likes}</span>
            </button>
          )}
          {comments && (
            <button className="flex items-center gap-1.5 hover:text-primary cursor-pointer">
              <span className="material-symbols-outlined text-sm">
                mode_comment
              </span>
              <span className="text-[10px] font-bold">{comments}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
