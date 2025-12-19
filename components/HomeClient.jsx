"use client";

import { useThemeStore } from "@/store/useThemeStore";

export default function HomeClient() {
  const theme = useThemeStore((s) => s.theme);  
  return (
    <div>
        Home(theme: {theme})
    </div>
  );
}
