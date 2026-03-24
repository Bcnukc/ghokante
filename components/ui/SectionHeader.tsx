// components/ui/SectionHeader.tsx
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  viewAllHref,
  viewAllText = "View All",
  centered = false,
}: SectionHeaderProps) {
  if (centered) {
    return (
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline text-primary mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl font-bold font-headline text-primary mb-2">
          {title}
        </h2>
        {subtitle && <p className="text-on-surface-variant">{subtitle}</p>}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-secondary font-bold flex items-center gap-1 hover:gap-2 transition-all"
        >
          {viewAllText}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      )}
    </div>
  );
}
