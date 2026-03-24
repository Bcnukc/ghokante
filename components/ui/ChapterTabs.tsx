"use client";

import { useState } from "react";

interface ChapterTabsProps {
  tabs: string[];
}

export default function ChapterTabs({ tabs }: ChapterTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mb-12 border-b border-outline-variant/30 sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
      <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`pb-4 font-headline font-medium whitespace-nowrap transition-all cursor-pointer ${
              index === activeTab
                ? "text-primary border-b-2 border-primary font-bold"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
}
