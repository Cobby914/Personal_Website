"use client";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export function Button({
  asChild = false,
  variant = "default",
  size = "md",
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",

        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // Variants
        variant === "ghost" &&
          "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800",

        // Sizes
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4 text-sm",

        className
      )}
      {...props}
    />
  );
}
