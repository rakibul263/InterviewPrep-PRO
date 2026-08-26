"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Search,
  Moon,
  Sun,
  Laptop,
  Maximize2,
  Menu,
  X,
  Type,
  Flame,
  Bookmark,
} from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "./CommandMenu";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { progress, setFontSize } = useUserProgress();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  const cycleFontSize = () => {
    const current = progress.readingFontSize || "normal";
    if (current === "normal") setFontSize("large");
    else if (current === "large") setFontSize("xlarge");
    else setFontSize("normal");
  };

  const getFontSizeLabel = () => {
    if (progress.readingFontSize === "large") return "Font Lg";
    if (progress.readingFontSize === "xlarge") return "Font XL";
    return "Font Md";
  };

  return (
    <>
      <header className="sticky top-0 z-20 h-16 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">
          {/* Left: Mobile Brand & Menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
            <Logo size="sm" href="/" />
          </div>

          {/* Center Search Trigger (Desktop & Mobile) */}
          <div className="flex-1 max-w-md mx-2 sm:mx-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full h-9 flex items-center justify-between px-3 rounded-lg border border-zinc-200 bg-zinc-50/80 text-xs text-zinc-400 hover:border-zinc-300 hover:bg-zinc-100/80 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500 dark:hover:border-zinc-700 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-zinc-400" />
                <span>Search questions or concepts...</span>
              </div>
              <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-zinc-200 bg-white px-1.5 font-mono text-[10px] font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Font Size Switcher */}
            <button
              onClick={cycleFontSize}
              title="Change Reading Font Size"
              className="hidden sm:flex items-center gap-1 h-8 px-2.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
            >
              <Type className="h-3.5 w-3.5" />
              <span>{getFontSizeLabel()}</span>
            </button>

            {/* Quick Practice shortcut */}
            <Link
              href="/practice"
              className="hidden lg:flex items-center gap-1.5 h-8 px-3 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/80 hover:bg-amber-100/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60 text-xs font-medium transition-colors"
            >
              <Flame className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>Practice Mode</span>
            </Link>

            {/* Fullscreen Interview Focus Mode */}
            <Link
              href="/interview-mode"
              title="Fullscreen Distraction-free Focus"
              className="flex items-center justify-center h-8 w-8 rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={`Current theme: ${theme || "system"}. Click to toggle.`}
              className="flex items-center justify-center h-8 w-8 rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === "dark" ? (
                <Moon className="h-3.5 w-3.5" />
              ) : theme === "light" ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Laptop className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-150 shadow-lg">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Dashboard
            </Link>
            <Link
              href="/questions"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Interview Questions
            </Link>
            <Link
              href="/categories"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Categories
            </Link>
            <Link
              href="/important"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30"
            >
              Must Know Questions
            </Link>
            <Link
              href="/practice"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Practice Mode
            </Link>
            <Link
              href="/favorites"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Favorites
            </Link>
            <Link
              href="/progress"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Progress & Stats
            </Link>
            <Link
              href="/notes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              My Notes
            </Link>
            <Link
              href="/settings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Settings
            </Link>
          </div>
        )}
      </header>

      {/* Global Command Menu */}
      <CommandMenu
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
