"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeProvider/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full min-w-full border-b border-gray-200/70 dark:border-gray-800/70 bg-white/75 dark:bg-gray-950/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-950/60">
      <div className="flex h-16 w-full max-w-6xl mx-auto items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          Colin Kwon
        </Link>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname?.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.55)] dark:hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.65)]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
