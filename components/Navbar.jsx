"use client";

import Link from "next/link";
import { NavBarButton } from "./ui";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full px-6 bg-transparent backdrop-blur-sm shadow-md">
      <div className="flex w-full items-center">

        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Right: Nav Cards */}
        <div className="ml-auto flex gap-2">

          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
            { href: "/hobbies", label: "Hobbies" },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <NavBarButton shape="square" variant="nav" size="nav">
                
                {/* Text → bottom-left */}
                <span className="mt-auto text-lg font-semibold leading-tight">
                  {label}
                </span>

                {/* Dot → top-right */}
                <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
              </NavBarButton>
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
