// components/home/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="lg:col-span-7 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
            The Scholarly Atelier
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-primary mb-6">
            Nepal&apos;s #1 University <br />
            <span className="text-secondary">Resource Platform</span>
          </h1>

          <p className="text-lg text-on-surface-variant font-body max-w-xl mb-10 leading-relaxed">
            Find notes, slides, past questions, cheatsheets and more for TU, PU,
            KU, PoU. Built for the modern scholar to ace every semester.
          </p>

          {/* Search + CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <SearchBar size="large" />
            <Link
              href="/universities"
              className="academic-gradient text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-secondary-container/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Explore Resources
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm font-medium text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              50k+ Resources
            </span>
            <span className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
              120k+ Students
            </span>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-surface-container-high relative">
            <Image
              src="/images/hero-students.jpg"
              alt="Students collaborating in a modern university library"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-white">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div>
              <p className="text-xs font-bold text-outline">LATEST UPLOAD</p>
              <p className="font-bold text-primary">DSAP Past Questions 2080</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
    </section>
  );
}
