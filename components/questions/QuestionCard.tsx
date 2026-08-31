"use client";

import React from "react";
import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Play,
} from "lucide-react";
import { Question } from "@/types";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  showCategory?: boolean;
}

const CATEGORY_COLORS: Record<string, { from: string; to: string; dot: string }> = {
  javascript: { from: "#f59e0b", to: "#f97316", dot: "#f59e0b" },
  typescript: { from: "#3b82f6", to: "#6366f1", dot: "#3b82f6" },
  react: { from: "#06b6d4", to: "#3b82f6", dot: "#06b6d4" },
  nextjs: { from: "#6366f1", to: "#8b5cf6", dot: "#6366f1" },
  nodejs: { from: "#10b981", to: "#14b8a6", dot: "#10b981" },
  expressjs: { from: "#64748b", to: "#475569", dot: "#64748b" },
  "fullstack-and-system": { from: "#8b5cf6", to: "#ec4899", dot: "#8b5cf6" },
};

function getCategoryColor(slug: string) {
  return CATEGORY_COLORS[slug] || { from: "#6366f1", to: "#8b5cf6", dot: "#6366f1" };
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

  const catColor = getCategoryColor(question.categorySlug);
  const steps = question.codeExample?.explanationSteps || [];
  const hasDiagram = !!question.visualDiagram;
  const hasCode = !!question.codeExample;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border bg-white overflow-hidden transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-0.5",
        "dark:bg-zinc-900/80 dark:hover:bg-zinc-900",
        completed
          ? "border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/20 dark:bg-emerald-950/10"
          : "border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
      )}
    >
      {/* Top gradient accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${catColor.from}, ${catColor.to})`,
          opacity: completed ? 1 : 0.6,
        }}
      />

      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {showCategory && (
              <span
                className="flex items-center gap-1 text-[11px] font-semibold"
                style={{ color: catColor.from }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: catColor.dot }}
                />
                {question.category}
              </span>
            )}
            {showCategory && (
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
            )}
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
                "p-1.5 rounded-lg transition-all cursor-pointer",
                favorite
                  ? "text-amber-500 bg-amber-50 dark:bg-amber-950/40"
                  : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-800"
              )}
            >
              <Bookmark
                className={cn("h-4 w-4", favorite && "fill-amber-500 text-amber-500")}
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
                "p-1.5 rounded-lg transition-all cursor-pointer",
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
        <Link href={`/questions/${question.slug}`} className="block group/link">
          <h3
            className={cn(
              "text-sm sm:text-base font-semibold leading-snug transition-colors",
              "group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400",
              completed
                ? "text-zinc-700 dark:text-zinc-300"
                : "text-zinc-900 dark:text-zinc-50"
            )}
          >
            {question.question}
          </h3>
        </Link>

        {/* Short Answer Preview */}
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {question.shortAnswer.replace(/\*\*/g, "")}
        </p>

        {/* Mini Execution Steps Preview */}
        {steps.length > 0 && (
          <div className="rounded-xl border border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-950/40 p-2.5 space-y-1.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Cpu className="h-3 w-3 text-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Execution Flow ({steps.length} steps)
              </span>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md border"
                    style={{
                      backgroundColor: `hsla(${(i * 47 + 220) % 360}, 60%, 50%, 0.12)`,
                      borderColor: `hsla(${(i * 47 + 220) % 360}, 60%, 50%, 0.25)`,
                      color: `hsl(${(i * 47 + 220) % 360}, 60%, 45%)`,
                    }}
                  >
                    {step.step}. {step.title}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight className="h-2.5 w-2.5 text-zinc-300 dark:text-zinc-700 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between">
        {/* Feature Pills */}
        <div className="flex items-center gap-1.5">
          {hasCode && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold border border-emerald-200/60 dark:border-emerald-900/40">
              <Code2 className="h-2.5 w-2.5" />
              Code
            </span>
          )}
          {hasDiagram && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 text-[10px] font-semibold border border-indigo-200/60 dark:border-indigo-900/40">
              <Zap className="h-2.5 w-2.5" />
              Visual
            </span>
          )}
          {question.importance === "Must Know" && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-[10px] font-semibold border border-amber-200/60 dark:border-amber-900/40">
              <Play className="h-2.5 w-2.5 fill-current" />
              Priority
            </span>
          )}
        </div>

        <Link
          href={`/questions/${question.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link"
        >
          <span>View Answer</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Hover glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${catColor.from}08, transparent 60%)`,
        }}
      />
    </div>
  );
}
