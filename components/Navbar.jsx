"use client";

import Link from "next/link";
import { NavBarButton } from "./ui";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full px-6 bg-transparent  backdrop-blur-sm shadow-md">
      <div className="flex w-full items-center">
        
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        {/* Right: Nav Cards */}
        <div className="ml-auto flex gap-2">
          <Link href="/">
            <NavBarButton shape="square" variant="nav" size="nav">
              Home
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/about">
            <NavBarButton shape="square" variant="nav" size="nav">
              About
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/projects">
            <NavBarButton shape="square" variant="nav" size="nav">
              Projects
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

          <Link href="/contact">
            <NavBarButton shape="square" variant="nav" size="nav">
              Contact
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>

           <Link href="/hobbies">
            <NavBarButton shape="square" variant="nav" size="nav">
              Hobbies
              <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-white" />
            </NavBarButton>
          </Link>
        </div>

      </div>
    </nav>
  );
}
