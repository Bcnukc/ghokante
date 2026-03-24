// components/ui/TopContributors.tsx
import Image from "next/image";
import type { Contributor } from "@/types";

interface TopContributorsProps {
  contributors: Contributor[];
}

export default function TopContributors({
  contributors,
}: TopContributorsProps) {
  return (
    <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
      <h4 className="text-lg font-headline font-bold text-primary mb-6">
        Top Resource Curators
      </h4>
      <div className="space-y-4">
        {contributors.map((contributor) => (
          <div
            key={contributor.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Image
                src={contributor.avatarUrl}
                alt={contributor.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-headline font-medium">
                {contributor.name}
              </span>
            </div>
            <span className="text-[10px] font-headline font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">
              {contributor.resourceCount} Resources
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
