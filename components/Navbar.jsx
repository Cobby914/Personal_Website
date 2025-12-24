"use client";

import Link from "next/link";
import { Button } from "./ui";
import { NavBarButton } from "./ui";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Center: Nav Cards */}
        <div className="flex gap-4">
          <Link href="/">
            <NavBarButton shape="default" variant="nav" size="nav">
              Home
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/about">
            <NavBarButton variant="nav" size="nav">
              About
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/projects">
            <NavBarButton variant="nav" size="nav">
              Projects
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/contact">
            <NavBarButton variant="nav" size="nav">
              Contact
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>
        </div>

        {/* Right: Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
