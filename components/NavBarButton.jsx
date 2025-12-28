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
        "relative inline-flex items-center justify-center font-medium transition-all select-none",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // 🔲 SHAPE (single source of truth)
        shape === "default" && "rounded-xl",
        shape === "rounded" && "rounded-full",
        shape === "square" && "rounded-none",

        // 🎨 VARIANTS (no rounding here)
        variant === "nav" &&
          `
          bg-[#22222A] text-white
          hover:bg-[#1F2238]
          active:bg-[#171A26]

          `,
        variant === "transparent" &&
          `
          bg-transparent text-white
          border border-black
          hover:bg-white/10
          active:bg-white/20
          px-4 py-2
          `,

        variant == "default" &&
          `
          bg-blue-600 text-white
          hover:bg-blue-700
          active:bg-blue-800
          px-4 py-2
          `,

        // 📏 SIZES
        size === "nav" && "h-20 min-w-30 px-8 text-lg",
        size === "cta" && "h-20 w-48 text-lg",

        className
      )}
      {...props}
    />
  );
}
