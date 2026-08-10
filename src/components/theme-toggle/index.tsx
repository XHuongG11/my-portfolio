import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="
        flex items-center justify-center w-9 h-9 rounded-full
        border border-[var(--border)] bg-transparent
        text-[var(--text-muted)] cursor-pointer
        transition-all duration-300
        hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-110
        outline-none
      "
    >
      {theme === "dark" ? (
        <Sun size={18} className="animate-spin-in" />
      ) : (
        <Moon size={18} className="animate-spin-in" />
      )}
    </button>
  );
}

export default ThemeToggle;