import { create } from "zustand";

const STORAGE_KEY = "colin-kwon-theme";

function getStoredTheme() {
  if (typeof window === "undefined") return "light";
  try {
    return localStorage.getItem(STORAGE_KEY) || "light";
  } catch {
    return "light";
  }
}

export const useThemeStore = create((set, get) => ({
  theme: "light",
  _hydrated: false,

  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch {}
    }
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    get().setTheme(next);
  },

  hydrate: () => {
    if (get()._hydrated) return;
    set({ theme: getStoredTheme(), _hydrated: true });
  },
}));