"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  resolvedTheme: "light" | "dark";
  systemTheme: "light" | "dark";
  themes: string[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme";
const THEMES = ["light", "dark", "system"];

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = STORAGE_KEY,
  attribute = "class",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<string>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored && THEMES.includes(stored)) {
        setThemeState(stored);
      }
    } catch (e) {
      console.error("Failed to read theme from localStorage:", e);
    }
    setSystemTheme(getSystemTheme());
    setMounted(true);
  }, [storageKey]);

  // Listen for system theme media query changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Compute resolved theme
  const resolvedTheme: "light" | "dark" = useMemo(() => {
    if (theme === "system") {
      return systemTheme;
    }
    return theme === "dark" ? "dark" : "light";
  }, [theme, systemTheme]);

  // Apply theme to document element
  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;

    const root = document.documentElement;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute(attribute, resolvedTheme);
    }
  }, [resolvedTheme, mounted, attribute]);

  const setTheme = useCallback(
    (newTheme: string) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (e) {
        console.error("Failed to save theme to localStorage:", e);
      }
    },
    [storageKey]
  );

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
      themes: THEMES,
    }),
    [theme, setTheme, resolvedTheme, systemTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "system",
      setTheme: () => {},
      resolvedTheme: "dark",
      systemTheme: "dark",
      themes: THEMES,
    };
  }
  return context;
}
