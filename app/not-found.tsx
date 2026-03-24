// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <span className="material-symbols-outlined text-8xl text-outline mb-6">
        search_off
      </span>
      <h1 className="text-4xl font-extrabold font-headline text-primary mb-4">
        Page Not Found
      </h1>
      <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="academic-gradient text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all"
        >
          Go Home
        </Link>
        <Link
          href="/search"
          className="bg-surface-container text-primary px-6 py-3 rounded-xl font-bold border border-outline-variant hover:bg-surface-container-high transition-all"
        >
          Search Resources
        </Link>
      </div>
    </div>
  );
}
