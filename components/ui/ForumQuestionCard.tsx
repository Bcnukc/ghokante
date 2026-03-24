// components/ui/ForumPostCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { ForumPost } from "@/types";

function getBadgeClasses(style?: string): string {
  switch (style) {
    case "verified":
      return "bg-tertiary-fixed text-on-tertiary-fixed";
    case "announcement":
      return "bg-primary-fixed text-on-primary-fixed";
    default:
      return "bg-surface-container text-on-surface-variant";
  }
}

export default function ForumPostCard(post: ForumPost) {
  // Social variant — compact card
  if (post.variant === "social") {
    return (
      <Link href={`/forums/${post.id}`}>
        <article className="bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">
              diversity_3
            </span>
            <p className="font-headline text-[10px] text-primary uppercase font-bold tracking-widest">
              {post.authorRole}
            </p>
          </div>
          <h3 className="font-body text-xl font-bold leading-tight mb-3 text-on-surface">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 text-outline">
            <span className="font-headline text-xs font-bold">
              {post.commentCount} Replies
            </span>
            <span className="font-headline text-xs">&bull;</span>
            <span className="font-headline text-xs">
              Updated {post.timeAgo}
            </span>
          </div>
        </article>
      </Link>
    );
  }

  // Editorial variant — full card
  return (
    <Link href={`/forums/${post.id}`}>
      <article className="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow hover:bg-primary-fixed/10 transition-colors cursor-pointer group">
        {/* Author */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
            {post.authorAvatar ? (
              <Image
                src={post.authorAvatar}
                alt={post.authorName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-primary font-bold font-headline text-sm">
                {post.authorInitials}
              </span>
            )}
          </div>
          <div>
            <p className="font-headline text-sm font-bold text-on-surface">
              {post.authorName}
            </p>
            <p className="font-headline text-[10px] text-outline uppercase tracking-widest">
              {post.authorRole} &bull; {post.timeAgo}
            </p>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-body text-2xl font-bold leading-tight mb-4 text-on-surface group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="font-body text-lg text-on-surface-variant line-clamp-2 mb-6">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-outline-variant/20 pt-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-outline">
              <span className="material-symbols-outlined text-sm">forum</span>
              <span className="font-headline text-xs font-bold">
                {post.commentCount} Comments
              </span>
            </div>
            <div className="flex items-center gap-2 text-outline">
              <span className="material-symbols-outlined text-sm">
                favorite
              </span>
              <span className="font-headline text-xs font-bold">
                {post.likeCount}
              </span>
            </div>
          </div>
          {post.badge && (
            <div
              className={`font-headline text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${getBadgeClasses(post.badgeStyle)}`}
            >
              {post.badge}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
