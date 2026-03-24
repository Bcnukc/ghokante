// components/layout/TopNavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "Universities" },
  { href: "/forums", label: "Forums" },
  { href: "/confessions", label: "Confessions" },
  { href: "/about", label: "About" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Hide auth buttons when already on login or signup pages
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-white font-headline"
          >
            Ghokante
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-semibold tracking-tight transition-colors ${
                  isActive(link.href)
                    ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Auth + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {!isAuthPage && (
            <>
              <Link
                href="/login"
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="hidden sm:inline-flex bg-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:opacity-90 active:scale-95 transition-all"
              >
                Register
              </Link>
            </>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/30 dark:border-slate-700/30 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 py-2.5 px-3 rounded-xl font-headline font-semibold transition-all ${
                isActive(link.href)
                  ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Only show auth buttons in mobile menu if NOT on auth pages */}
          {!isAuthPage && (
            <div className="pt-3 mt-2 border-t border-slate-200/30 dark:border-slate-700/30 flex gap-3">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
