"use client";

import Link from "next/link";
import {Button} from "./ui/index";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-between
        px-4 py-4 sm:px-8 sm:py-6
        bg-gray-100/80 dark:bg-gray-900/80
        backdrop-blur-md
        border-b border-gray-200 dark:border-gray-700
      "
    >
      {/* Brand */}
      <Link
        href="/"
        className="
          text-lg font-semibold
          text-gray-900 dark:text-gray-100
          hover:opacity-80
        "
      >
        Colin Kwon
      </Link>

      {/* Nav links */}
      <div className="flex items-center space-x-5 sm:space-x-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href}>
        {children}
      </Link>
  );
}
