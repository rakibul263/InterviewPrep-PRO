"use client";

import React from "react";
import Link from "next/link";
import {
  LineChart,
  CheckCircle2,
  Clock,
  Sparkles,
  Flame,
  RotateCcw,
  FolderTree,
  Award,
} from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { CATEGORIES } from "@/data/categories";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function ProgressPage() {
  const { progress, resetAllProgress } = useUserProgress();

  const totalQuestions = ALL_QUESTIONS.length;
  const completedCount = progress.completedQuestionIds.length;
  const remainingCount = Math.max(0, totalQuestions - completedCount);
  const overallPercentage =
    totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  // Category stats
  const categoryStats = CATEGORIES.map((cat) => {
    const list = ALL_QUESTIONS.filter(
      (q) => q.categorySlug.toLowerCase() === cat.slug.toLowerCase()
    );
    const catTotal = list.length;
    const catCompleted = list.filter((q) =>
      progress.completedQuestionIds.includes(q.id)
    ).length;
    const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

    return {
      name: cat.name,
      slug: cat.slug,
      total: catTotal,
      completed: catCompleted,
      percent: catPercent,
    };
  }).filter((cat) => cat.total > 0);

  // Difficulty breakdown
  const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
  const difficultyStats = difficulties.map((diff) => {
    const list = ALL_QUESTIONS.filter((q) => q.difficulty === diff);
    const diffTotal = list.length;
    const diffCompleted = list.filter((q) =>
      progress.completedQuestionIds.includes(q.id)
    ).length;
    const diffPercent =
      diffTotal > 0 ? Math.round((diffCompleted / diffTotal) * 100) : 0;

    return {
      difficulty: diff,
      total: diffTotal,
      completed: diffCompleted,
      percent: diffPercent,
    };
  });

  // Practice stats
  const practiceStats = progress.practiceStats || {
    totalPracticed: 0,
    knownCount: 0,
    needsRevisionCount: 0,
  };
  const accuracyRate =
    practiceStats.totalPracticed > 0
      ? Math.round(
          (practiceStats.knownCount / practiceStats.totalPracticed) * 100
        )
      : 0;

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Preparation Progress & Analytics
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Track your mastery across categories, active recall metrics, and overall readiness score.
          </p>
        </div>

        <Link href="/practice">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:text-zinc-950">
            <Flame className="h-4 w-4 mr-1.5 fill-current" />
            Continue Practice
          </Button>
        </Link>
      </div>

      {/* Main Readiness Gauge */}
      <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-zinc-400">
              Overall Preparation Readiness
            </span>
            <div className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 mt-1 font-mono">
              {overallPercentage}%
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-center">
              <div className="font-bold text-lg">{completedCount}</div>
              <div className="text-[11px] font-sans text-emerald-600 dark:text-emerald-400">Completed</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 text-center">
              <div className="font-bold text-lg">{remainingCount}</div>
              <div className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400">Remaining</div>
            </div>
          </div>
        </div>

        <Progress value={overallPercentage} className="h-2.5" />
      </div>

      {/* 2-Column Section: Category Progress & Practice Recall */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Category Breakdown (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <FolderTree className="h-4 w-4 text-purple-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Category Mastery Breakdown
            </h2>
          </div>

          <div className="space-y-3">
            {categoryStats.map((cat) => (
              <div
                key={cat.slug}
                className="p-4 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
                  >
                    {cat.name}
                  </Link>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400">
                    {cat.completed}/{cat.total} ({cat.percent}%)
                  </span>
                </div>
                <Progress value={cat.percent} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Difficulty & Practice Stats (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Difficulty Mastery */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-500" />
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Difficulty Level Progress
              </h2>
            </div>

            <div className="space-y-3">
              {difficultyStats.map((diff) => (
                <div
                  key={diff.difficulty}
                  className="p-4 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/40 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {diff.difficulty}
                    </span>
                    <span className="font-mono text-zinc-500 dark:text-zinc-400">
                      {diff.completed}/{diff.total} ({diff.percent}%)
                    </span>
                  </div>
                  <Progress value={diff.percent} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Active Recall Practice Stats */}
          <div className="p-5 rounded-xl border border-amber-200/80 bg-amber-50/20 dark:border-amber-900/40 dark:bg-amber-950/20 space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-500 fill-amber-500" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                Flashcard Recall Accuracy
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {practiceStats.totalPracticed}
                </div>
                <div className="text-[10px] text-zinc-500">Practiced</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {practiceStats.knownCount}
                </div>
                <div className="text-[10px] text-zinc-500">I Know This</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="text-xl font-bold font-mono text-rose-600 dark:text-rose-400">
                  {practiceStats.needsRevisionCount}
                </div>
                <div className="text-[10px] text-zinc-500">Needs Revision</div>
              </div>
            </div>

            <div className="pt-2 border-t border-amber-200/60 dark:border-amber-900/40 flex justify-between items-center text-xs text-zinc-600 dark:text-zinc-400">
              <span>Overall Recall Accuracy:</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {accuracyRate}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
