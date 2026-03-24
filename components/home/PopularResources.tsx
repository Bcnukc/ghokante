// components/home/PopularResources.tsx
"use client";

import { useRef } from "react";
import ResourceCard from "@/components/ui/ResourceCard";
import type { Resource } from "@/types";

const popularResources: Resource[] = [
  {
    title: "Data Structures Complete Notes",
    subject: "Computer",
    university: "Tribhuvan University - IOE",
    semester: "III Semester",
    fileType: "pdf",
    rating: 4.8,
    viewCount: "2.4k",
    href: "/universities/tu/bsc-csit/semester-3/dsa/chapter-1",
  },
  {
    title: "Digital Signal Processing Slides",
    subject: "Electronics",
    university: "Pokhara University - SoE",
    semester: "V Semester",
    fileType: "pptx",
    rating: 4.5,
    viewCount: "1.8k",
    href: "/universities/pu/be-electronics/semester-5/dsp/chapter-1",
  },
  {
    title: "Structural Analysis Video Series",
    subject: "Civil",
    university: "Kathmandu University",
    semester: "IV Semester",
    fileType: "video",
    rating: 4.9,
    viewCount: "5.1k",
    href: "/universities/ku/be-civil/semester-4/structural-analysis/chapter-1",
  },
  {
    title: "Database Management System Notes",
    subject: "CSIT",
    university: "Tribhuvan University",
    semester: "IV Semester",
    fileType: "pdf",
    rating: 4.7,
    viewCount: "3.2k",
    href: "/universities/tu/bsc-csit/semester-4/dbms/chapter-1",
  },
  {
    title: "Thermodynamics Cheatsheet",
    subject: "Mechanical",
    university: "Purbanchal University",
    semester: "II Semester",
    fileType: "image",
    rating: 4.6,
    viewCount: "1.5k",
    href: "/universities/pou/be-mechanical/semester-2/thermodynamics/chapter-1",
  },
];

export default function PopularResources() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with scroll buttons */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">
            Popular Resources
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:bg-white transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:bg-white transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
        >
          {popularResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
