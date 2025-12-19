"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav 
        className=
        "flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800"
        >
            <div className="flex space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </div>

            <ThemeToggle />
        </nav>
    );
};

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="text-gray-800 dark:text-gray-200 hover:underline"
        >
            {children}
        </Link>
    );
}

export default Navbar;