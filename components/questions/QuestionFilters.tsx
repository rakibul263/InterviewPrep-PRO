"use client";

import React from "react";
import { Search, X, RotateCcw, Filter } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { QuestionFilterState } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface QuestionFiltersProps {
  filters: QuestionFilterState;
  onFilterChange: (filters: QuestionFilterState) => void;
  onReset: () => void;
  totalCount: number;
}

export function QuestionFilters({
  filters,
  onFilterChange,
  onReset,
  totalCount,
}: QuestionFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, difficulty: e.target.value });
  };

  const handleImportanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, importance: e.target.value });
  };

  const handleStatusChange = (status: QuestionFilterState["status"]) => {
    onFilterChange({ ...filters, status });
  };

  const isFiltered =
    filters.searchQuery !== "" ||
    filters.category !== "all" ||
    filters.difficulty !== "all" ||
    filters.importance !== "all" ||
    filters.status !== "all";

  return (
    <div className="space-y-3 rounded-xl border border-zinc-200/80 bg-white p-4 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs">
      {/* Top Search & Category dropdown bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
        {/* Search input */}
        <div className="relative sm:col-span-6">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search questions, keywords, tags, or concepts..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
            className="pl-9 pr-8"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ ...filters, searchQuery: "" })}
              className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Select */}
        <div className="sm:col-span-3">
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Select */}
        <div className="sm:col-span-3">
          <select
            value={filters.difficulty}
            onChange={handleDifficultyChange}
            className="h-9 w-full rounded-lg border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="all">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Bottom Status Filter Pills & Reset */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-zinc-400 mr-1 hidden sm:inline">Status:</span>
          {(
            [
              { label: "All Questions", value: "all" },
              { label: "Must Know 🔥", value: "must-know" },
              { label: "Completed ✅", value: "completed" },
              { label: "Incomplete ⏳", value: "incomplete" },
              { label: "Favorites ⭐️", value: "favorites" },
            ] as const
          ).map((item) => {
            const isSelected = filters.status === item.value;
            return (
              <button
                key={item.value}
                onClick={() => handleStatusChange(item.value)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-2xs"
                    : "text-zinc-600 bg-zinc-100/80 hover:bg-zinc-200/80 dark:text-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            {totalCount} {totalCount === 1 ? "question" : "questions"} found
          </span>
          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
