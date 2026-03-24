// components/layout/BottomNavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/search", icon: "search", label: "Search" },
  { href: "/universities", icon: "folder_shared", label: "Resources" },
  { href: "/forums", icon: "forum", label: "Forum" },
  { href: "/profile", icon: "person", label: "Profile" },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg flex justify-around items-center px-4 pb-[env(safe-area-inset-bottom)] pt-2 md:hidden z-50 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-all duration-150 ${
            isActive(item.href)
              ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 scale-90"
              : "text-slate-500 dark:text-slate-400 active:bg-slate-100"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={
              isActive(item.href)
                ? { fontVariationSettings: "'FILL' 1" }
                : undefined
            }
          >
            {item.icon}
          </span>
          <span className="text-[10px] font-medium font-body uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
