"use client";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import React from "react";

export function Button({
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
        "inline-flex items-center justify-center font-medium transition-colors",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Shape
        shape === "default" && "rounded-md",
        shape === "rounded" && "rounded-full",
        shape === "circle" && "rounded-full p-0",

        // Variants
        variant === "ghost" &&
          "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800",

        // Sizes
        size === "sm" && shape !== "circle" && "h-8 px-3 text-sm",
        size === "md" && shape !== "circle" && "h-10 px-4 text-sm",
        size === "lg" && shape !== "circle" && "h-12 px-6 text-base",
        size === "xl" && shape !== "circle" && "h-14 px-8 text-lg",

        // Circle sizing
        size === "sm" && shape === "circle" && "h-8 w-8",
        size === "md" && shape === "circle" && "h-10 w-10",
        size === "lg" && shape === "circle" && "h-12 w-12",
        size === "xl" && shape === "circle" && "h-14 w-14",

        className
      )}
      {...props}
    />
  );
}
