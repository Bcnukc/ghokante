// components/layout/Footer.tsx
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Ghokante" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact Us" },
];

const resourceLinks = [
  { href: "/search?type=past-questions", label: "Old Questions" },
  { href: "/search?type=notes", label: "Handwritten Notes" },
  { href: "/search?type=syllabus", label: "Syllabus" },
  { href: "/search?type=reports", label: "Project Reports" },
];

const socialLinks = [
  {
    href: "https://facebook.com/ghokante",
    icon: "public",
    label: "Facebook",
    hoverBg: "hover:bg-blue-600",
  },
  {
    href: "https://twitter.com/ghokante",
    icon: "alternate_email",
    label: "Twitter",
    hoverBg: "hover:bg-blue-400",
  },
  {
    href: "https://instagram.com/ghokante",
    icon: "photo_camera",
    label: "Instagram",
    hoverBg: "hover:bg-pink-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] dark:shadow-none">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-white font-headline inline-block mb-4"
            >
              Ghokante
            </Link>
            <p className="text-sm font-body text-slate-600 dark:text-slate-400 leading-relaxed">
              Built for the modern scholar. Empowering Nepali students with
              quality university resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline font-bold text-blue-900 dark:text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-headline font-bold text-blue-900 dark:text-white mb-6 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Connect */}
          <div>
            <h4 className="font-headline font-bold text-blue-900 dark:text-white mb-6 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.hoverBg} hover:text-white transition-all shadow-sm`}
                >
                  <span className="material-symbols-outlined text-xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 font-body">
            &copy; {new Date().getFullYear()} Ghokante. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-xs text-slate-500 hover:text-blue-800 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
