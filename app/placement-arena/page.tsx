"use client";

import React, { useState, useMemo } from "react";
import {
  PLACEMENT_ARENA_QUESTIONS,
  PLACEMENT_ARENA_DAYS,
} from "@/data/placement-arena";
import { MockQuestionCard } from "@/components/mock/MockQuestionCard";
import { useUserProgress } from "@/hooks/useUserProgress";
import {
  Trophy,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
  Bookmark,
  Languages,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Zap,
  Target,
  GraduationCap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function PlacementArenaPage() {
  const [selectedDayId, setSelectedDayId] = useState<string>("all");
  const [globalLang, setGlobalLang] = useState<"en" | "bn">("bn");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "completed" | "incomplete" | "favorites" | "must-know"
  >("all");
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const { isCompleted, isFavorite } = useUserProgress();
  const allQuestions = PLACEMENT_ARENA_QUESTIONS;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      // 1. Day Filter
      if (selectedDayId !== "all") {
        const targetDay = PLACEMENT_ARENA_DAYS.find((d) => d.id === selectedDayId);
        if (targetDay) {
          if (
            q.questionNumber < targetDay.questionRange[0] ||
            q.questionNumber > targetDay.questionRange[1]
          ) {
            return false;
          }
        }
      }

      // 2. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = q.question.toLowerCase().includes(query);
        const matchesBangla = q.banglaQuestion.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesModule = (q.module || "").toLowerCase().includes(query);
        const matchesTags = q.tags.some((t) => t.toLowerCase().includes(query));
        const matchesQuick =
          q.english.quickAnswer.toLowerCase().includes(query) ||
          q.bangla.quickAnswer.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesBangla &&
          !matchesTopic &&
          !matchesModule &&
          !matchesTags &&
          !matchesQuick
        ) {
          return false;
        }
      }

      // 3. Status Filter
      if (statusFilter === "completed" && !isCompleted(q.id)) return false;
      if (statusFilter === "incomplete" && isCompleted(q.id)) return false;
      if (statusFilter === "favorites" && !isFavorite(q.id)) return false;
      if (statusFilter === "must-know" && q.importance !== "Must Know") return false;

      return true;
    });
  }, [allQuestions, selectedDayId, searchQuery, statusFilter, isCompleted, isFavorite]);

  // Overall Completion Progress
  const completedCount = useMemo(() => {
    return allQuestions.filter((q) => isCompleted(q.id)).length;
  }, [allQuestions, isCompleted]);

  const progressPercent = Math.round((completedCount / allQuestions.length) * 100);

  // Day completion counts
  const dayCompletion = useMemo(() => {
    const map: Record<string, { completed: number; total: number }> = {};
    PLACEMENT_ARENA_DAYS.forEach((day) => {
      const dayQuestions = allQuestions.filter(
        (q) =>
          q.questionNumber >= day.questionRange[0] &&
          q.questionNumber <= day.questionRange[1]
      );
      const done = dayQuestions.filter((q) => isCompleted(q.id)).length;
      map[day.id] = { completed: done, total: dayQuestions.length };
    });
    return map;
  }, [allQuestions, isCompleted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50 via-white to-purple-50/60 p-6 sm:p-8 dark:border-indigo-900/40 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-indigo-950/30 shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-400/15 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-300/60 dark:border-indigo-800/60 shadow-2xs">
                  <Trophy className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Placement Arena
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/50 dark:border-amber-800/50">
                  {PLACEMENT_ARENA_DAYS.length} Days Active ({allQuestions.length} Questions)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-800/50">
                  <CheckCircle2 className="w-3 h-3" />
                  Bilingual Solutions
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                প্লেসমেন্ট অ্যারেনা — Placement Arena
              </h1>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                A structured, day-by-day technical placement curriculum. Master core frontend, backend, and computer science concepts with quick summaries, senior interview speech scripts, deep dive architectural insights, code snippets, and common pitfalls.
              </p>

              {/* Progress Bar */}
              <div className="pt-2 max-w-md space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Curriculum Progress ({completedCount} / {allQuestions.length})
                  </span>
                  <span className="text-indigo-700 dark:text-indigo-400 font-bold">{progressPercent}%</span>
                </div>
                <Progress value={progressPercent} className="h-2 bg-indigo-100 dark:bg-zinc-800" />
              </div>
            </div>

            {/* Global Language Toggle & Expand All */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <div className="flex items-center gap-1 bg-white/90 dark:bg-zinc-800/90 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xs">
                <Languages className="w-4 h-4 ml-2 text-zinc-400" />
                <button
                  onClick={() => setGlobalLang("bn")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                    globalLang === "bn"
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  )}
                >
                  বাংলা
                </button>
                <button
                  onClick={() => setGlobalLang("en")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                    globalLang === "en"
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  )}
                >
                  English
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setExpandAll(!expandAll)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors shadow-2xs cursor-pointer"
                >
                  {expandAll ? (
                    <>
                      <ChevronUp className="w-3.5 h-3.5" />
                      Collapse All
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3.5 h-3.5" />
                      Expand All
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Days Navigator Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              Day-by-Day Curriculum
            </h2>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Showing {filteredQuestions.length} of {allQuestions.length} Questions
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedDayId("all")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer",
                selectedDayId === "all"
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 shadow-xs"
                  : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800/70"
              )}
            >
              All Days ({allQuestions.length})
            </button>

            {PLACEMENT_ARENA_DAYS.map((day) => {
              const comp = dayCompletion[day.id] || { completed: 0, total: day.count };
              const isDone = comp.completed === comp.total && comp.total > 0;
              const isSelected = selectedDayId === day.id;

              return (
                <button
                  key={day.id}
                  onClick={() => setSelectedDayId(day.id)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 cursor-pointer",
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-xs dark:bg-indigo-500 dark:border-indigo-500"
                      : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800/70"
                  )}
                >
                  <span>{day.title}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.2 rounded-full text-[10px] font-mono",
                      isSelected
                        ? "bg-white/20 text-white"
                        : isDone
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    )}
                  >
                    {comp.completed}/{comp.total}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search variables, closures, hoisting, TDZ, data types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-zinc-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none shrink-0">
            {(
              [
                { id: "all", label: "All", icon: null },
                { id: "must-know", label: "Must Know", icon: Sparkles },
                { id: "incomplete", label: "Incomplete", icon: null },
                { id: "completed", label: "Completed", icon: CheckCircle2 },
                { id: "favorites", label: "Favorites", icon: Bookmark },
              ] as { id: typeof statusFilter; label: string; icon: React.ComponentType<{ className?: string }> | null }[]
            ).map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setStatusFilter(filter.id)}
                  className={cn(
                    "px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer",
                    statusFilter === filter.id
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-2xs font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  )}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Cards List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 space-y-3">
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                No questions match your filter
              </h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                Try clearing your search query or switching to 'All' status filter to view Day 1 questions.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setSelectedDayId("all");
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-2xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredQuestions.map((item) => (
              <MockQuestionCard
                key={item.id}
                item={item}
                globalLang={globalLang}
                defaultExpanded={expandAll}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
