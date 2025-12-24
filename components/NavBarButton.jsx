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
        "relative inline-flex items-center justify-center font-medium transition-all",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Shape
        shape === "default" && "rounded-xl",
        shape === "rounded" && "rounded-full",

        // Variants
        variant === "nav" &&
          `
          relative
          bg-black/90 text-white
          border border-white/15
          rounded-xl
          backdrop-blur-md
          hover:border-white/40
          hover:bg-black
          transition-all
          `,

        // CTA variant
        variant === "cta" &&
          `
          bg-orange-600 text-white
          hover:bg-orange-500
          rounded-xl
          shadow-lg
          `,

        // Sizes
        size === "nav" && "h-20 w-36 text-base",
        size === "cta" && "h-20 w-48 text-lg",

        className
      )}
      {...props}
    />
  );
}
