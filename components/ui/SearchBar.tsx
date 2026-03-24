// components/ui/SearchBar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  size?: "default" | "large";
  placeholder?: string;
}

export default function SearchBar({
  size = "default",
  placeholder = "Search for notes, subjects, or questions...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-grow max-w-xl">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
        search
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full pl-12 pr-4 ${
          size === "large" ? "py-4" : "py-3"
        } rounded-xl border-none bg-surface-container-lowest shadow-lg focus:ring-2 focus:ring-secondary transition-all outline-none`}
        placeholder={placeholder}
      />
    </form>
  );
}
