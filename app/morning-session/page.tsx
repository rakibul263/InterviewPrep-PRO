"use client";

import React, { useState, useMemo } from "react";
import {
  MORNING_SESSION_QUESTIONS,
  MORNING_SESSION_MODULES,
} from "@/data/morning-session";
import { MockQuestionCard } from "@/components/mock/MockQuestionCard";
import { useUserProgress } from "@/hooks/useUserProgress";
import {
  Sunrise,
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
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function MorningSessionPage() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("all");
  const [globalLang, setGlobalLang] = useState<"en" | "bn">("bn");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "completed" | "incomplete" | "favorites" | "must-know"
  >("all");
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const { isCompleted, isFavorite } = useUserProgress();
  const allQuestions = MORNING_SESSION_QUESTIONS;

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      // 1. Module Filter
      if (selectedModuleId !== "all") {
        const targetMod = MORNING_SESSION_MODULES.find((m) => m.id === selectedModuleId);
        if (targetMod) {
          if (
            q.questionNumber < targetMod.questionRange[0] ||
            q.questionNumber > targetMod.questionRange[1]
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
  }, [allQuestions, selectedModuleId, searchQuery, statusFilter, isCompleted, isFavorite]);

  // Overall Completion Progress
  const completedCount = useMemo(() => {
    return allQuestions.filter((q) => isCompleted(q.id)).length;
  }, [allQuestions, isCompleted]);

  const progressPercent = Math.round((completedCount / allQuestions.length) * 100);

  // Module completion counts
  const moduleCompletion = useMemo(() => {
    const map: Record<string, { completed: number; total: number }> = {};
    MORNING_SESSION_MODULES.forEach((mod) => {
      const modQuestions = allQuestions.filter(
        (q) =>
          q.questionNumber >= mod.questionRange[0] &&
          q.questionNumber <= mod.questionRange[1]
      );
      const done = modQuestions.filter((q) => isCompleted(q.id)).length;
      map[mod.id] = { completed: done, total: modQuestions.length };
    });
    return map;
  }, [allQuestions, isCompleted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500/5 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-orange-50/60 p-6 sm:p-8 dark:border-amber-900/30 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-amber-950/20 shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-400/15 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800/60 shadow-2xs">
                  <Sunrise className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Morning Session Interview
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-800/50">
                  100 Questions Complete
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300/50 dark:border-blue-800/50">
                  7 Core Modules
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Morning Session Comprehensive Interview Prep
              </h1>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Complete mastery curriculum covering JavaScript Fundamentals I & II, React Fundamentals & Advanced, Node.js & Express, MongoDB & Mongoose, and Full-Stack Integration. Includes instant quick answers, verbal interview delivery scripts, deep dives, code snippets, and common mistakes.
              </p>

              {/* Progress Bar */}
              <div className="pt-2 max-w-md space-y-1.5">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Overall Progress ({completedCount} / {allQuestions.length})
                  </span>
                  <span className="text-amber-700 dark:text-amber-400 font-bold">{progressPercent}%</span>
                </div>
                <Progress value={progressPercent} className="h-2 bg-amber-100 dark:bg-zinc-800" />
              </div>
            </div>

            {/* Global Language Toggle */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
              <div className="flex items-center gap-1 bg-white/80 dark:bg-zinc-800/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-2xs">
                <Languages className="w-4 h-4 ml-2 text-zinc-400" />
                <button
                  onClick={() => setGlobalLang("bn")}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                    globalLang === "bn"
                      ? "bg-amber-600 text-white shadow-2xs"
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
                      ? "bg-amber-600 text-white shadow-2xs"
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

        {/* 7 Modules Navigator Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              Filter by Modules ({MORNING_SESSION_MODULES.length})
            </h2>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Showing {filteredQuestions.length} of {allQuestions.length} Questions
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedModuleId("all")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer",
                selectedModuleId === "all"
                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                  : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-700"
              )}
            >
              All Modules ({allQuestions.length})
            </button>

            {MORNING_SESSION_MODULES.map((mod) => {
              const comp = moduleCompletion[mod.id];
              const isSelected = selectedModuleId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 cursor-pointer",
                    isSelected
                      ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                      : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-700"
                  )}
                >
                  <span>{mod.name}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    )}
                  >
                    {comp ? `${comp.completed}/${comp.total}` : mod.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all 100 questions, topics, keywords or concepts..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Status Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
            {(
              [
                { id: "all", label: "All" },
                { id: "must-know", label: "Must Know", icon: Sparkles },
                { id: "completed", label: "Completed", icon: CheckCircle2 },
                { id: "incomplete", label: "Incomplete" },
                { id: "favorites", label: "Favorites", icon: Bookmark },
              ] as const
            ).map((filter) => {
              const Icon = "icon" in filter ? filter.icon : null;
              const active = statusFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setStatusFilter(filter.id)}
                  className={cn(
                    "px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer",
                    active
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  )}
                >
                  {Icon && <Icon className="w-3 h-3" />}
                  {filter.label}
                </button>
              );
            })}

            {(searchQuery || statusFilter !== "all" || selectedModuleId !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setStatusFilter("all");
                  setSelectedModuleId("all");
                }}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Reset Filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Questions Render List */}
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-3">
            <BookOpen className="w-10 h-10 mx-auto text-zinc-400" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              No Questions Match Your Filter
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              Try adjusting your search query, switching module tabs, or clearing your status filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setSelectedModuleId("all");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((q) => (
              <MockQuestionCard
                key={q.id}
                item={q}
                globalLang={globalLang}
                defaultExpanded={expandAll}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
