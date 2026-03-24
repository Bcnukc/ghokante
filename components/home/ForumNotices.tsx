// components/home/ForumQuestionCard.tsx (or wherever it lives)
import Link from "next/link";
import Image from "next/image";
import type { ForumQuestion } from "@/types";

export default function ForumQuestionCard({
  title,
  category,
  timeAgo,
  replyCount,
  authorAvatar,
  authorName,
  href,
}: ForumQuestion) {
  return (
    <Link href={href} className="block group">
      <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-fixed/10 transition-colors">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h4>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="font-headline text-[10px] text-tertiary font-bold uppercase">
              {category}
            </span>
            <span className="font-headline text-[10px] text-outline">
              {timeAgo}
            </span>
            <span className="font-headline text-[10px] text-outline">
              {replyCount} replies
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
