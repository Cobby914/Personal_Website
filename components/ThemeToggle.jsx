"use client";
import { useStore } from "@/store/useStore";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ToggleButton, ToggleThumb } from "./ThemeToggle.styles";

const ThemeToggle = () => {
    const theme = useStore((s) => s.theme);
    const toggleTheme = useStore((s) => s.toggleTheme);

    return (
        <ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
            <ToggleThumb isDark={theme === "dark"}>
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </ToggleThumb>
        </ToggleButton>
    );
};

export default ThemeToggle;