"use client";

import React from "react";
import Link from "next/link";
import { FolderTree, ArrowRight, CheckCircle2 } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { ALL_QUESTIONS } from "@/data/questions";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Progress } from "@/components/ui/progress";

export default function CategoriesHubPage() {
  const { progress } = useUserProgress();

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Categories (ক্যাটাগরি হাব)
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Master interview questions categorized by technology, framework, and software engineering domains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((cat) => {
          const categoryQuestions = ALL_QUESTIONS.filter(
            (q) => q.categorySlug.toLowerCase() === cat.slug.toLowerCase()
          );
          const totalCount = categoryQuestions.length;
          const completedCount = categoryQuestions.filter((q) =>
            progress.completedQuestionIds.includes(q.id)
          ).length;
          const progressPercent =
            totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="flex flex-col justify-between p-5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold text-xs">
                      {cat.name.substring(0, 2).toUpperCase()}
                    </div>
                    <h2 className="font-semibold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat.name}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {completedCount}/{totalCount}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mt-1 mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 space-y-2">
                <div className="flex justify-between items-center text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>Completed: {progressPercent}%</span>
                  <span className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 font-sans font-medium group-hover:translate-x-0.5 transition-transform">
                    Explore Questions →
                  </span>
                </div>
                <Progress value={progressPercent} className="h-1.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
