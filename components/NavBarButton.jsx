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

        // NAV VARIANT
        variant === "nav" &&
          `
          h-20 w-36
          flex flex-col
          items-start
          p-4

        bg-black/40
        text-white/85
          border border-white/25
          backdrop-blur-md

        hover:bg-black/55
        hover:border-white/45
        hover:text-white


          transition-all
          hover:scale-[1.06]
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
        size === "nav" && "h-24 min-w-36 text-lg",
        size === "cta" && "h-24 w-48 text-lg",

        className
      )}
      {...props}
    />
  );
}
