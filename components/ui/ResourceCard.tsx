// components/ui/ResourceCard.tsx
import Image from "next/image";
import type { ResourceItem } from "@/types";

export default function ResourceCard({
  title,
  fileIcon,
  fileIconColor,
  fileIconBg,
  authorName,
  authorAvatar,
  authorInitials,
  date,
  rating,
  views,
  downloads,
  likes,
}: ResourceItem) {
  return (
    <article className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl transition-all hover:bg-primary-fixed/10 group">
      <div className="flex flex-col md:flex-row gap-6">
        {/* File type icon */}
        <div
          className={`w-16 h-16 ${fileIconBg} flex items-center justify-center rounded-2xl flex-shrink-0`}
        >
          <span
            className={`material-symbols-outlined ${fileIconColor} text-3xl`}
          >
            {fileIcon}
          </span>
        </div>

        <div className="flex-grow">
          {/* Title + Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-body font-bold text-on-surface group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-tertiary flex-shrink-0 ml-4">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-headline text-sm font-bold">{rating}</span>
            </div>
          </div>

          {/* Author + Date */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 bg-primary-fixed text-primary flex items-center justify-center rounded-full text-[10px] font-bold">
                  {authorInitials}
                </div>
              )}
              <span className="text-sm font-headline text-on-surface-variant">
                {authorName}
              </span>
            </div>
            <span className="text-sm font-headline text-outline">{date}</span>
          </div>

          {/* Stats + Actions */}
          <div className="flex flex-wrap items-center gap-6 py-4 border-t border-outline-variant/20">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">
                visibility
              </span>
              <span className="text-xs font-headline font-semibold">
                {views} Views
              </span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              <span className="text-xs font-headline font-semibold">
                {downloads} Downloads
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <button className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-xl">
                  thumb_up
                </span>
                <span className="text-xs font-headline">{likes}</span>
              </button>
              <button className="flex items-center gap-1 hover:text-error transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-xl">
                  thumb_down
                </span>
              </button>
              <button className="px-4 py-2 bg-secondary-container text-on-secondary-fixed-variant rounded-lg font-headline font-bold text-xs hover:bg-secondary-fixed transition-all cursor-pointer">
                Preview PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
