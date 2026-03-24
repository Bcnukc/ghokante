// app/confessions/page.tsx
import type { Metadata } from "next";
import ConfessionCardFeatured from "@/components/ui/ConfessionCardFeatured";
import ConfessionCardCompact from "@/components/ui/ConfessionCardCompact";
import ConfessionCardSimple from "@/components/ui/ConfessionCardSimple";
import ConfessionCardEditorial from "@/components/ui/ConfessionCardEditorial";
import { confessions } from "@/lib/confessions-data";

export const metadata: Metadata = {
  title: "Confessions",
  description:
    "The Digital Atheneum's anonymous sanctuary. Share your thoughts, university secrets, and scholarly musings at Ghokante.",
};

export default function ConfessionsPage() {
  const featured = confessions.find((c) => c.variant === "featured");
  const compact = confessions.find((c) => c.variant === "compact");
  const simple = confessions.find((c) => c.variant === "simple");
  const editorial = confessions.find((c) => c.variant === "editorial");

  return (
    <div className="min-h-screen">
      <main className="pt-12 pb-20 px-6 max-w-screen-xl mx-auto">
        {/* Hero Header */}
        <header className="mb-16 md:flex items-end justify-between space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold font-headline uppercase tracking-widest rounded-full mb-4">
              The Digital Atheneum
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-primary leading-tight">
              Confessions
            </h1>
            <p className="mt-4 text-xl text-on-surface-variant max-w-lg leading-relaxed italic font-body">
              Whispers from the corridors of academia. Share anonymously, read
              collectively.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-surface-container-low px-5 py-3 rounded-full hover:bg-surface-container-high transition-colors font-headline font-semibold text-sm cursor-pointer">
              <span className="material-symbols-outlined">filter_list</span>
              Latest
            </button>
            <button className="flex items-center gap-2 bg-tertiary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all font-headline font-bold text-sm cursor-pointer">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                edit_note
              </span>
              Submit Secret
            </button>
          </div>
        </header>

        {/* Confessions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Row 1: Featured (8 cols) + Compact + CTA (4 cols) */}
          {featured && <ConfessionCardFeatured {...featured} />}

          <div className="md:col-span-4 space-y-8">
            {compact && <ConfessionCardCompact {...compact} />}

            {/* Academic Audit CTA */}
            <div className="bg-primary-container text-on-primary-container p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline font-extrabold text-lg mb-2">
                  Academic Audit
                </h3>
                <p className="font-body text-base opacity-90 leading-snug">
                  Have a secret about a specific faculty? Submit to our
                  moderated board.
                </p>
                <button className="mt-6 w-full py-3 bg-white text-primary font-headline font-bold rounded-xl text-sm cursor-pointer hover:bg-primary-fixed transition-colors">
                  Join Discussion
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-[9rem]">
                  security
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Simple (4 cols) + Editorial (8 cols) */}
          {simple && <ConfessionCardSimple {...simple} />}
          {editorial && <ConfessionCardEditorial {...editorial} />}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="font-headline font-bold text-primary group flex items-center gap-2 mx-auto cursor-pointer">
            Discover more whispers
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
              keyboard_double_arrow_down
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
