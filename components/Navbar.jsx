"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { NavbarContainer, NavItem } from "./Navbar.styles";

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavItem>
                <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
                <Link href="/about">About</Link>
            </NavItem>
            <NavItem>
                <Link href="/projects">Projects</Link>
            </NavItem>
            <NavItem>
                <Link href="/contact">Contact</Link>
            </NavItem>
            <ThemeToggle />
        </NavbarContainer>
    );
};

export default Navbar;