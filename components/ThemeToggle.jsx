"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
    const theme = useThemeStore((s) => s.theme);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

export default ThemeToggle;