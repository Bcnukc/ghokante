// components/ui/RelatedModules.tsx
import Link from "next/link";
import type { RelatedModule } from "@/types";

interface RelatedModulesProps {
  modules: RelatedModule[];
  basePath: string;
}

export default function RelatedModules({
  modules,
  basePath,
}: RelatedModulesProps) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-3xl">
      <h4 className="text-lg font-headline font-bold mb-6">Related Modules</h4>
      <div className="space-y-6">
        {modules.map((mod) => (
          <Link
            key={mod.number}
            href={mod.href ? `${basePath}/${mod.href}` : "#"}
            className={`flex items-center gap-4 group ${
              mod.variant === "reference" ? "opacity-60 hover:opacity-100" : ""
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-headline transition-transform group-hover:scale-105 ${
                mod.variant === "next"
                  ? "bg-secondary-container text-primary"
                  : "bg-surface-container text-outline"
              }`}
            >
              {mod.number}
            </div>
            <div>
              <p className="font-headline font-bold text-sm text-on-surface leading-tight">
                {mod.title}
              </p>
              <p className="text-[10px] font-headline text-on-surface-variant uppercase tracking-wider">
                {mod.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
