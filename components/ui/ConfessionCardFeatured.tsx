// components/ui/ConfessionCardFeatured.tsx
import type { Confession } from "@/types";

export default function ConfessionCardFeatured({
  content,
  authorLabel,
  timeAgo,
  location,
  likes,
  comments,
}: Confession) {
  return (
    <div className="md:col-span-8 group">
      <div className="bg-surface-container-lowest p-10 rounded-3xl editorial-shadow h-full flex flex-col justify-between hover:bg-primary-fixed/30 transition-all duration-500">
        <div>
          {/* Author */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container">
                person
              </span>
            </div>
            <div>
              <p className="font-headline font-bold text-sm text-primary">
                {authorLabel}
              </p>
              <p className="font-label text-xs text-on-surface-variant">
                {timeAgo}
                {location && ` \u2022 ${location}`}
              </p>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-body leading-tight text-on-background mb-6">
            &ldquo;{content}&rdquo;
          </h2>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-outline-variant/20">
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">favorite</span>
              <span className="font-headline text-xs font-bold">{likes}</span>
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">chat_bubble</span>
              <span className="font-headline text-xs font-bold">
                {comments}
              </span>
            </button>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
