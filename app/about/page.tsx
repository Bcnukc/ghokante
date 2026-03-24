// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  timelineEvents,
  teamMembers,
  featurePoints,
  heroImageUrl,
} from "@/lib/about-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ghokante - the editorial-first academic platform designed to preserve and distribute the intellectual heritage of Nepal's premier universities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
        </div>

        {/* ======================== */}
        {/* Hero Section             */}
        {/* ======================== */}
        <section className="max-w-7xl mx-auto px-8 mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-headline font-extrabold text-5xl lg:text-7xl text-primary leading-[1.1] mb-8 tracking-tighter">
                Democratizing Academic Excellence{" "}
                <span className="italic font-body font-normal text-tertiary block mt-2">
                  in Nepal.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5 pb-4">
              <p className="text-xl lg:text-2xl font-body leading-relaxed text-on-surface-variant">
                Ghokante is an editorial-first academic platform designed to
                preserve and distribute the intellectual heritage of
                Nepal&apos;s premier universities.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative overflow-hidden rounded-xl aspect-[21/9] group">
            <Image
              src={heroImageUrl}
              alt="Modern minimalist library interior with sunbeams streaming through high windows"
              fill
              className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </section>

        {/* ======================== */}
        {/* Mission & Story          */}
        {/* ======================== */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Left Column: Story + Timeline */}
              <div>
                <div className="mb-12">
                  <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-tertiary block mb-4">
                    The Mandate
                  </span>
                  <h2 className="font-headline text-4xl font-bold text-on-surface mb-8">
                    Bridging the Gap
                  </h2>
                  <div className="space-y-6 text-lg font-body leading-relaxed text-on-surface-variant">
                    <p>
                      The academic landscape in Nepal is rich with knowledge,
                      yet fractured by accessibility. Students at{" "}
                      <span className="text-primary font-semibold italic">
                        TU, PU, KU, and PoU
                      </span>{" "}
                      often find themselves navigating a fragmented ecosystem of
                      physical archives and inconsistent digital resources.
                    </p>
                    <p>
                      Ghokante was founded on a singular premise: every student
                      deserves access to the finest scholarly materials,
                      regardless of their institutional affiliation. We curate,
                      digitize, and distribute high-level academic assets to
                      ensure that no intellect is left unrefined for lack of
                      resources.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-12 border-l-2 border-outline-variant/30 pl-8 ml-2 mt-16">
                  {timelineEvents.map((event) => (
                    <div key={event.year} className="relative">
                      <div
                        className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-surface-container-low ${
                          event.color === "primary"
                            ? "bg-primary"
                            : "bg-tertiary"
                        }`}
                      />
                      <span
                        className={`font-headline text-sm font-extrabold ${
                          event.color === "primary"
                            ? "text-primary"
                            : "text-tertiary"
                        }`}
                      >
                        {event.year}
                      </span>
                      <h3 className="font-headline text-lg font-bold mt-1">
                        {event.title}
                      </h3>
                      <p className="text-sm font-body text-on-surface-variant mt-2">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Digital Atheneum Sticky Card */}
              <div className="relative">
                <div className="sticky top-32 p-12 bg-surface-container-lowest rounded-xl editorial-shadow border border-outline-variant/10">
                  <div className="mb-8">
                    <span
                      className="material-symbols-outlined text-4xl text-tertiary mb-6 block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      temple_buddhist
                    </span>
                    <h2 className="font-headline text-3xl font-bold text-on-surface mb-6">
                      The Digital Atheneum
                    </h2>
                    <p className="text-lg font-body leading-relaxed text-on-surface-variant italic mb-8">
                      &ldquo;We envision a future where knowledge is not a
                      commodity to be bought, but a community asset to be
                      shared.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-4">
                    {featurePoints.map((point) => (
                      <div key={point.title} className="flex gap-4 items-start">
                        <span className="material-symbols-outlined text-primary">
                          {point.icon}
                        </span>
                        <div>
                          <h4 className="font-headline font-bold text-sm uppercase tracking-wider">
                            {point.title}
                          </h4>
                          <p className="text-sm font-body text-on-surface-variant">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================== */}
        {/* Contributors Section     */}
        {/* ======================== */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="text-center mb-20">
            <span className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">
              The Collective
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface">
              By Students, For Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-surface-container-lowest rounded-xl overflow-hidden p-8 transition-all hover:translate-y-[-8px]"
              >
                <div className="mb-6 w-20 h-20 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all relative">
                  <Image
                    src={member.avatarUrl}
                    alt={member.avatarAlt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-headline font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-headline text-xs font-bold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="font-body text-on-surface-variant italic">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ======================== */}
        {/* Call to Action            */}
        {/* ======================== */}
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="bg-primary-container/10 border border-primary/10 rounded-2xl p-12 lg:p-24 text-center relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline font-bold text-4xl text-primary mb-6">
                Join the Movement
              </h2>
              <p className="text-xl font-body text-on-surface-variant mb-12">
                Whether you are a topper with meticulous notes or a professor
                with a collection of rare papers, your contribution can ignite a
                hundred minds.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-tertiary text-white px-10 py-4 rounded-md font-headline font-bold text-sm tracking-widest uppercase active:scale-90 transition-transform cursor-pointer">
                  Become a Contributor
                </button>
                <Link
                  href="/universities"
                  className="border border-primary text-primary px-10 py-4 rounded-md font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
                >
                  Explore the Archive
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
