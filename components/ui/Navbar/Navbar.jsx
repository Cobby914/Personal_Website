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
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="flex w-full max-w-6xl mx-auto items-center justify-between px-6 py-4">
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
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
