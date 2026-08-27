"use client";

import React from "react";
import Link from "next/link";
import {
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Bookmark,
  FolderTree,
  Flame,
  ArrowRight,
  PlayCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { CATEGORIES } from "@/data/categories";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { progress, isCompleted } = useUserProgress();

  const totalQuestions = ALL_QUESTIONS.length;
  const completedCount = progress.completedQuestionIds.length;
  const favoriteCount = progress.favoriteQuestionIds.length;
  const mustKnowQuestions = ALL_QUESTIONS.filter(
    (q) => q.importance === "Must Know"
  );
  const mustKnowCount = mustKnowQuestions.length;
  const overallProgress =
    totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  // Recently viewed or in-progress questions
  const continueLearningQuestions = (
    progress.recentlyViewedIds && progress.recentlyViewedIds.length > 0
      ? progress.recentlyViewedIds
          .map((id) => ALL_QUESTIONS.find((q) => q.id === id || q.slug === id))
          .filter(Boolean)
      : ALL_QUESTIONS.slice(0, 3)
  ).slice(0, 3);

  // Category completion calculations
  const categoryStats = CATEGORIES.map((cat) => {
    const categoryQuestions = ALL_QUESTIONS.filter(
      (q) => q.categorySlug.toLowerCase() === cat.slug.toLowerCase()
    );
    const catTotal = categoryQuestions.length;
    const catCompleted = categoryQuestions.filter((q) =>
      progress.completedQuestionIds.includes(q.id)
    ).length;
    const catPercent = catTotal > 0 ? Math.round((catCompleted / catTotal) * 100) : 0;

    return {
      ...cat,
      totalQuestions: catTotal,
      completedQuestions: catCompleted,
      progressPercent: catPercent,
    };
  });

  const calculateDaysRemaining = () => {
    if (!progress.targetDate) return null;
    const target = new Date(progress.targetDate);
    const today = new Date();
    target.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysRemaining = calculateDaysRemaining();

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            ইন্টারভিউ প্রস্তুতি ড্যাশবোর্ড
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Welcome to your personal interview preparation portal. Simple natural Bangla explanations for high-confidence interviews.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/practice">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-zinc-950 font-semibold shadow-xs">
              <Flame className="h-4 w-4 mr-1.5 fill-current" />
              Practice Flashcards
            </Button>
          </Link>
          <Link href="/interview-mode">
            <Button variant="outline">
              <BookOpen className="h-4 w-4 mr-1.5" />
              Focus Mode
            </Button>
          </Link>
        </div>
      </div>

      {/* Target Interview Date Countdown Banner (if set) */}
      {progress.targetDate && daysRemaining !== null && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/80 dark:border-amber-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white font-bold shadow-xs">
              <Sparkles className="h-5 w-5 fill-current" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {daysRemaining > 0
                  ? `🎯 টার্গেট ইন্টারভিউ আর মাত্র ${daysRemaining} দিন বাকি!`
                  : daysRemaining === 0
                  ? "🎉 আজই আপনার ইন্টারভিউয়ের নির্ধারিত দিন! Best of luck!"
                  : `ইন্টারভিউয়ের তারিখ ${Math.abs(daysRemaining)} দিন আগে অতিক্রান্ত হয়েছে।`}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Target Date: {progress.targetDate} • প্রতিদিন অন্তত ৫টি প্রশ্ন রিভিশন করুন।
              </div>
            </div>
          </div>

          <Link href="/settings">
            <Button variant="outline" size="sm" className="h-7 text-xs border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200">
              Change Date
            </Button>
          </Link>
        </div>
      )}

      {/* Featured NLAP Mock Interview Session Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-500/15 via-indigo-500/10 to-transparent p-5 sm:p-6 dark:border-amber-700/60 dark:from-amber-950/40 dark:via-zinc-900/60 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-[11px] font-bold">
              <Sparkles className="h-3 w-3" />
              <span>NEW: Today's Mock Interview (36 Questions)</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
              React & Next.js Core to Advanced Mock Session
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Date: <strong>August 27, 2026</strong> • All 36 interview questions with Bangla & English toggle scripts, deep dives, code patterns, and glossary hover tooltips.
            </p>
          </div>

          <Link href="/mock-interviews">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:text-zinc-950 font-bold px-4 py-2 shadow-xs cursor-pointer">
              <span>Start Mock Prep</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* 1. Overview Statistics Cards */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Overview
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Total Questions */}
          <Link
            href="/questions"
            className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <HelpCircle className="h-4 w-4 text-blue-500" />
              <span className="text-[10px] uppercase font-mono">Total</span>
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {totalQuestions}
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Interview Questions
            </p>
          </Link>

          {/* Completed Questions */}
          <Link
            href="/questions"
            className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-[10px] uppercase font-mono">Done</span>
            </div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {completedCount}
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Completed ({overallProgress}%)
            </p>
          </Link>

          {/* Must Know */}
          <Link
            href="/important"
            className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/20 hover:border-amber-300 dark:border-amber-900/40 dark:bg-amber-950/20 dark:hover:border-amber-800 transition-all group"
          >
            <div className="flex items-center justify-between text-amber-500 mb-2">
              <Sparkles className="h-4 w-4 fill-amber-500" />
              <span className="text-[10px] uppercase font-mono font-semibold">Priority</span>
            </div>
            <div className="text-2xl font-bold text-amber-800 dark:text-amber-300">
              {mustKnowCount}
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Must Know Questions
            </p>
          </Link>

          {/* Favorites */}
          <Link
            href="/favorites"
            className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <Bookmark className="h-4 w-4 text-amber-500" />
              <span className="text-[10px] uppercase font-mono">Saved</span>
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {favoriteCount}
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Favorite Questions
            </p>
          </Link>

          {/* Categories */}
          <Link
            href="/categories"
            className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <FolderTree className="h-4 w-4 text-purple-500" />
              <span className="text-[10px] uppercase font-mono">Domains</span>
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {CATEGORIES.length}
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Tech Categories
            </p>
          </Link>

          {/* Preparation Readiness */}
          <Link
            href="/progress"
            className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="text-[10px] uppercase font-mono">Status</span>
            </div>
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {overallProgress}%
            </div>
            <Progress value={overallProgress} className="h-1.5 mt-2" />
          </Link>
        </div>
      </section>

      {/* 2. Continue Learning Section */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Continue Learning (সাম্প্রতিক পড়া প্রশ্নসমূহ)
          </h2>
          <Link
            href="/questions"
            className="text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {continueLearningQuestions.map((q) => {
            if (!q) return null;
            const completed = isCompleted(q.id);

            return (
              <div
                key={q.id}
                className="flex flex-col justify-between p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                      {q.category}
                    </span>
                    <Badge
                      variant={
                        q.difficulty === "Beginner"
                          ? "beginner"
                          : q.difficulty === "Intermediate"
                          ? "intermediate"
                          : "advanced"
                      }
                    >
                      {q.difficulty}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2">
                    {q.question}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mt-2">
                    {q.shortAnswer.replace(/\*\*/g, "")}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-zinc-500">
                    {completed ? "Completed ✅" : "In Progress ⏳"}
                  </span>
                  <Link href={`/questions/${q.slug}`}>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      Continue →
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Category Overview Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Category Overview (টেকনোলজি অনুযায়ী অগ্রগতি)
          </h2>
          <Link
            href="/categories"
            className="text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
          >
            <span>All Categories Hub</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {categoryStats.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="flex flex-col justify-between p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cat.name}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    {cat.completedQuestions}/{cat.totalQuestions}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mb-3">
                  {cat.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-[10px] text-zinc-400 mb-1 font-mono">
                  <span>Progress</span>
                  <span>{cat.progressPercent}%</span>
                </div>
                <Progress value={cat.progressPercent} className="h-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
