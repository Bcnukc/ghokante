// components/ui/SubjectIcon.tsx
import Link from "next/link";
import type { Subject } from "@/types";

export default function SubjectIcon({
  name,
  icon,
  resourceCount,
  href = "#",
}: Subject) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="w-20 h-20 rounded-3xl bg-surface-container-low flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:-translate-y-2">
          <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="font-bold text-primary">{name}</h3>
        <p className="text-xs text-on-surface-variant mt-1">
          {resourceCount} Resources
        </p>
      </div>
    </Link>
  );
}
