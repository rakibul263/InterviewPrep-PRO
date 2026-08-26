"use client";

import React from "react";
import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Question } from "@/types";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  showCategory?: boolean;
}

export function QuestionCard({
  question,
  showCategory = true,
}: QuestionCardProps) {
  const { isCompleted, isFavorite, toggleComplete, toggleFavorite } =
    useUserProgress();

  const completed = isCompleted(question.id);
  const favorite = isFavorite(question.id);

  const getDifficultyVariant = (difficulty: string) => {
    if (difficulty === "Beginner") return "beginner";
    if (difficulty === "Intermediate") return "intermediate";
    return "advanced";
  };

  const getImportanceVariant = (importance: string) => {
    if (importance === "Must Know") return "must-know";
    if (importance === "High") return "high";
    if (importance === "Medium") return "medium";
    return "low";
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-xl border bg-white p-4 sm:p-5 transition-all hover:border-zinc-300 dark:bg-zinc-900/70 dark:border-zinc-800 dark:hover:border-zinc-700",
        completed
          ? "border-emerald-200/80 dark:border-emerald-950/60 bg-emerald-50/10 dark:bg-emerald-950/10"
          : "border-zinc-200/80"
      )}
    >
      <div>
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {showCategory && (
              <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                {question.category}
              </span>
            )}
            {showCategory && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
            <Badge variant={getDifficultyVariant(question.difficulty)}>
              {question.difficulty}
            </Badge>
            <Badge variant={getImportanceVariant(question.importance)}>
              {question.importance === "Must Know" ? (
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3 fill-amber-500 text-amber-500" />
                  Must Know
                </span>
              ) : (
                question.importance
              )}
            </Badge>
          </div>

          <div className="flex items-center gap-1">
            {/* Toggle Bookmark */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(question.id);
              }}
              title={favorite ? "Remove from Favorites" : "Bookmark as Favorite"}
              className={cn(
                "p-1.5 rounded-md transition-colors cursor-pointer",
                favorite
                  ? "text-amber-500 bg-amber-50 dark:bg-amber-950/40"
                  : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800"
              )}
            >
              <Bookmark
                className={cn(
                  "h-4 w-4",
                  favorite && "fill-amber-500 text-amber-500"
                )}
              />
            </button>

            {/* Toggle Completion */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleComplete(question.id);
              }}
              title={completed ? "Mark as Incomplete" : "Mark as Completed"}
              className={cn(
                "p-1.5 rounded-md transition-colors cursor-pointer",
                completed
                  ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40"
                  : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800"
              )}
            >
              {completed ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Circle className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Question Title */}
        <Link
          href={`/questions/${question.slug}`}
          className="block group/link"
        >
          <h3
            className={cn(
              "text-base font-semibold leading-snug transition-colors group-hover/link:text-zinc-600 dark:group-hover/link:text-zinc-300",
              completed
                ? "text-zinc-800 dark:text-zinc-200 font-medium"
                : "text-zinc-900 dark:text-zinc-50"
            )}
          >
            {question.question}
          </h3>
        </Link>

        {/* Short Answer Preview in Bengali */}
        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {question.shortAnswer.replace(/\*\*/g, "")}
        </p>
      </div>

      {/* Card Footer Bottom Link */}
      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
          {question.codeExample && (
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] text-zinc-600 dark:text-zinc-300">
              Code
            </span>
          )}
          {question.interviewTips && (
            <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-300">
              Tips
            </span>
          )}
        </div>

        <Link
          href={`/questions/${question.slug}`}
          className="inline-flex items-center gap-1 font-medium text-zinc-900 dark:text-zinc-100 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Read Answer</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
