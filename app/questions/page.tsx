"use client";

import React, { useState, useMemo } from "react";
import { ALL_QUESTIONS } from "@/data/questions";
import { QuestionFilterState } from "@/types";
import { useUserProgress } from "@/hooks/useUserProgress";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { QuestionFilters } from "@/components/questions/QuestionFilters";

export default function QuestionsPage() {
  const { progress } = useUserProgress();

  const [filters, setFilters] = useState<QuestionFilterState>({
    searchQuery: "",
    category: "all",
    difficulty: "all",
    importance: "all",
    status: "all",
    sortBy: "default",
  });

  const handleReset = () => {
    setFilters({
      searchQuery: "",
      category: "all",
      difficulty: "all",
      importance: "all",
      status: "all",
      sortBy: "default",
    });
  };

  const filteredQuestions = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      // 1. Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = q.question.toLowerCase().includes(query);
        const matchesCategory = q.category.toLowerCase().includes(query);
        const matchesShortAnswer = q.shortAnswer.toLowerCase().includes(query);
        const matchesTags = q.tags.some((t) => t.toLowerCase().includes(query));

        if (!matchesTitle && !matchesCategory && !matchesShortAnswer && !matchesTags) {
          return false;
        }
      }

      // 2. Category filter
      if (filters.category !== "all" && q.categorySlug.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }

      // 3. Difficulty filter
      if (filters.difficulty !== "all" && q.difficulty !== filters.difficulty) {
        return false;
      }

      // 4. Importance filter
      if (filters.importance !== "all" && q.importance !== filters.importance) {
        return false;
      }

      // 5. Status filter
      if (filters.status === "completed") {
        if (!progress.completedQuestionIds.includes(q.id)) return false;
      } else if (filters.status === "incomplete") {
        if (progress.completedQuestionIds.includes(q.id)) return false;
      } else if (filters.status === "favorites") {
        if (!progress.favoriteQuestionIds.includes(q.id)) return false;
      } else if (filters.status === "must-know") {
        if (q.importance !== "Must Know") return false;
      }

      return true;
    });
  }, [filters, progress]);

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Interview Questions (ইন্টারভিউ প্রশ্নব্যাংক)
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Explore all JavaScript, TypeScript, React, and Full-Stack interview questions with simple natural Bangla explanations.
        </p>
      </div>

      {/* Filter Component */}
      <QuestionFilters
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleReset}
        totalCount={filteredQuestions.length}
      />

      {/* Questions Grid */}
      {filteredQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30">
          <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
            No questions found
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, clearing filters, or switching categories to find what you need.
          </p>
          <button
            onClick={handleReset}
            className="mt-4 px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
