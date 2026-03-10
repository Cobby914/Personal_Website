"use client";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import React from "react";

export function NavBarButton({
  asChild = false,
  variant = "default",
  size = "md",
  shape = "default",
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        // ❗ NO alignment here
        "relative inline-flex font-medium transition-all select-none",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Shape
        shape === "default" && "rounded-xl",
        shape === "rounded" && "rounded-full",
        shape === "square" && "rounded-none",

        // NAV VARIANT - compact pill-style links
        variant === "nav" &&
          `
          inline-flex items-center justify-center
          px-4 py-2 rounded-full
          text-sm font-medium

          bg-black/30 dark:bg-white/10
          text-white/90 dark:text-white/90
          border border-white/20 dark:border-white/20
          backdrop-blur-md

          hover:bg-black/50 dark:hover:bg-white/20
          hover:border-white/40 dark:hover:border-white/40
          hover:text-white
          transition-all duration-200
          `,

        // NAV ACTIVE - highlighted current page
        variant === "nav-active" &&
          `
          inline-flex items-center justify-center
          px-4 py-2 rounded-full
          text-sm font-medium

          bg-white/25 dark:bg-white/25
          text-white
          border border-white/40 dark:border-white/40
          backdrop-blur-md
          transition-all duration-200
          `,

        variant === "default" &&
          `
          inline-flex items-center justify-center
          bg-blue-600 text-white
          hover:bg-blue-700
          active:bg-blue-800
          px-4 py-2
          `,

        // Sizes
        size === "nav" && "text-sm",
        size === "cta" && "h-24 w-48 text-lg",

        className
      )}
      {...props}
    />
  );
}
