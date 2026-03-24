// components/ui/ForumTabs.tsx
"use client";

import { useState } from "react";

const tabs = ["Latest", "Hot", "Unresolved"];

export default function ForumTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          onClick={() => setActiveTab(index)}
          className={`font-headline text-sm font-bold cursor-pointer transition-colors ${
            index === activeTab
              ? "text-primary border-b-2 border-primary"
              : "text-outline hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
