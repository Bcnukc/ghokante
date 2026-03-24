// components/ui/NoticeCard.tsx
import Link from "next/link";
import type { Notice } from "@/types";

export default function NoticeCard({
  university,
  department,
  title,
  publishedDate,
  borderColor,
  href,
}: Notice) {
  // Convert "border-secondary" to "text-secondary" for label color
  const textColor = borderColor.replace("border-", "text-");

  return (
    <Link href={href}>
      <div
        className={`p-4 bg-white border-l-4 ${borderColor} rounded-r-xl shadow-sm hover:shadow-md transition-all cursor-pointer`}
      >
        <span className={`text-[10px] font-bold uppercase ${textColor}`}>
          {university} &bull; {department}
        </span>
        <p className="font-bold text-sm text-primary mt-1">{title}</p>
        <p className="text-xs text-on-surface-variant mt-2">
          Published: {publishedDate}
        </p>
      </div>
    </Link>
  );
}
