"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  BookOpen,
  Folder,
  Sparkles,
  Flame,
  LineChart,
  StickyNote,
  X,
  FileCode,
} from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/utils";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Filter Questions
  const filteredQuestions = ALL_QUESTIONS.filter(
    (q) =>
      q.question.toLowerCase().includes(normalizedQuery) ||
      q.category.toLowerCase().includes(normalizedQuery) ||
      q.tags.some((t) => t.toLowerCase().includes(normalizedQuery)) ||
      q.shortAnswer.toLowerCase().includes(normalizedQuery)
  ).slice(0, 8);

  // Filter Categories
  const filteredCategories = CATEGORIES.filter(
    (c) =>
      c.name.toLowerCase().includes(normalizedQuery) ||
      c.description.toLowerCase().includes(normalizedQuery)
  ).slice(0, 4);

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
    setQuery("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-150">
      <div
        className="relative w-full max-w-xl rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden dark:border-zinc-800 dark:bg-zinc-900 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="h-4 w-4 text-zinc-400 shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search questions, concepts, technologies (e.g. closure, hoisting, typescript)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="h-12 w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-zinc-200 bg-zinc-100 px-1.5 font-mono text-[10px] font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 ml-2">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-zinc-100 dark:divide-zinc-800/60">
          {/* Quick Actions if query is empty */}
          {query === "" && (
            <div className="p-2 space-y-1">
              <div className="px-2 py-1 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Quick Shortcuts
              </div>
              <button
                onClick={() => handleSelect("/practice")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80 transition-colors text-left"
              >
                <Flame className="h-4 w-4 text-amber-500" />
                <span>Start Practice Flashcards</span>
              </button>
              <button
                onClick={() => handleSelect("/important")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80 transition-colors text-left"
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>Must Know Questions</span>
              </button>
              <button
                onClick={() => handleSelect("/interview-mode")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80 transition-colors text-left"
              >
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span>Fullscreen Interview Mode</span>
              </button>
            </div>
          )}

          {/* Categories matches */}
          {filteredCategories.length > 0 && (
            <div className="p-2 space-y-1">
              <div className="px-2 py-1 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Categories
              </div>
              {filteredCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(`/categories/${cat.slug}`)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/80 transition-colors text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Folder className="h-4 w-4 text-zinc-400" />
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-zinc-400">View Category</span>
                </button>
              ))}
            </div>
          )}

          {/* Questions matches */}
          {filteredQuestions.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-2 py-1 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                Questions ({filteredQuestions.length})
              </div>
              {filteredQuestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSelect(`/questions/${q.slug}`)}
                  className="w-full flex flex-col items-start px-3 py-2.5 rounded-lg text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors group"
                >
                  <div className="flex items-center gap-2 w-full">
                    <FileCode className="h-4 w-4 text-zinc-400 shrink-0 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                    <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 truncate flex-1">
                      {q.question}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 shrink-0">
                      {q.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-1 pl-6">
                    {q.shortAnswer}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            query !== "" && (
              <div className="py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
                No questions found matching &ldquo;{query}&rdquo;
              </div>
            )
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
          <span>Tip: Type to filter instantly</span>
          <span className="font-mono">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
