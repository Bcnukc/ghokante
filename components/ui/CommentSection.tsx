// components/ui/CommentSection.tsx
"use client";

import Image from "next/image";
import type { Comment } from "@/types";

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <section className="mt-20">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">forum</span>
        <h2 className="text-2xl font-headline font-bold">Scholar Discussion</h2>
      </div>

      {/* Comment input */}
      <div className="bg-surface-container-low p-6 rounded-2xl mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
            U
          </div>
          <div className="flex-grow">
            <textarea
              className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary rounded-xl font-body text-lg p-4 mb-4 min-h-[120px] resize-none"
              placeholder="Add a contributing thought or query..."
            />
            <div className="flex justify-end">
              <button className="px-6 py-2.5 bg-primary text-on-primary font-bold font-headline rounded-lg hover:bg-primary-container transition-all cursor-pointer">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comment list */}
      <div className="space-y-8">
        {comments.map((comment, index) => (
          <div key={index} className="flex gap-4">
            <Image
              src={comment.authorAvatar}
              alt={comment.authorName}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-headline font-bold text-sm">
                  {comment.authorName}
                </span>
                <span className="text-xs text-outline font-headline">
                  &bull; {comment.timeAgo}
                </span>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {comment.content}
              </p>
              <div className="flex items-center gap-4 mt-3">
                <button className="text-xs font-headline text-primary font-bold cursor-pointer">
                  Reply
                </button>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">
                    thumb_up
                  </span>
                  <span className="text-[10px] font-headline">
                    {comment.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
