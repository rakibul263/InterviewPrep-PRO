"use client";

import React, { useState, useMemo } from "react";
import { getAllMockSessions } from "@/data/mock-interviews";
import { MockQuestionCard } from "@/components/mock/MockQuestionCard";
import { useUserProgress } from "@/hooks/useUserProgress";
import {
  Sparkles,
  Calendar,
  Layers,
  Search,
  CheckCircle2,
  Bookmark,
  Flame,
  Languages,
  BookOpen,
  Filter,
  GraduationCap,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function MockInterviewsPage() {
  const sessions = getAllMockSessions();
  const [selectedSessionSlug, setSelectedSessionSlug] = useState<string>(
    sessions[0]?.slug || "react-nextjs-august-2026"
  );
  const [globalLang, setGlobalLang] = useState<"en" | "bn">("bn");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "completed" | "incomplete" | "favorites" | "must-know"
  >("all");
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const { isCompleted, isFavorite } = useUserProgress();

  const currentSession = useMemo(() => {
    return sessions.find((s) => s.slug === selectedSessionSlug) || sessions[0];
  }, [sessions, selectedSessionSlug]);

  const questions = currentSession?.questions || [];

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = q.question.toLowerCase().includes(query);
        const matchesBangla = q.banglaQuestion.toLowerCase().includes(query);
        const matchesTopic = q.topic.toLowerCase().includes(query);
        const matchesTags = q.tags.some((t) => t.toLowerCase().includes(query));
        const matchesQuick =
          q.english.quickAnswer.toLowerCase().includes(query) ||
          q.bangla.quickAnswer.toLowerCase().includes(query);

        if (
          !matchesTitle &&
          !matchesBangla &&
          !matchesTopic &&
          !matchesTags &&
          !matchesQuick
        ) {
          return false;
        }
      }

      // 2. Topic Filter
      if (selectedTopic !== "all" && q.topic !== selectedTopic) {
        return false;
      }

      // 3. Status Filter
      if (statusFilter === "completed" && !isCompleted(q.id)) return false;
      if (statusFilter === "incomplete" && isCompleted(q.id)) return false;
      if (statusFilter === "favorites" && !isFavorite(q.id)) return false;
      if (statusFilter === "must-know" && q.importance !== "Must Know") return false;

      return true;
    });
  }, [questions, searchQuery, selectedTopic, statusFilter, isCompleted, isFavorite]);

  // Topic counts dynamically calculated per session
  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: questions.length,
    };
    questions.forEach((q) => {
      counts[q.topic] = (counts[q.topic] || 0) + 1;
    });
    return counts;
  }, [questions]);

  // Unique topics in current session
  const sessionTopics = useMemo(() => {
    const list: string[] = [];
    questions.forEach((q) => {
      if (!list.includes(q.topic)) list.push(q.topic);
    });
    return list;
  }, [questions]);

  // Session completion stats
  const completedCount = useMemo(() => {
    return questions.filter((q) => isCompleted(q.id)).length;
  }, [questions, isCompleted]);

  const progressPercent =
    questions.length > 0 ? Math.round((completedCount / questions.length) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 animate-in fade-in-50 duration-200">
      {/* 0. Session Selection Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-2 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          {sessions.map((sess) => (
            <button
              key={sess.slug}
              onClick={() => {
                setSelectedSessionSlug(sess.slug);
                setSelectedTopic("all");
                setSearchQuery("");
              }}
              className={cn(
                "flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
                selectedSessionSlug === sess.slug
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100 ring-1 ring-zinc-300/80 dark:ring-zinc-700"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40"
              )}
            >
              <span>{sess.category}</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-[11px] font-mono font-bold">
                {sess.totalQuestions} Qs
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 1. Hero / Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 sm:p-8 dark:border-amber-800/40 dark:from-amber-950/40 dark:via-zinc-900/40">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <GraduationCap className="h-4 w-4" />
              <span>NLAP Mock Interview Archive</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {currentSession.title}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {currentSession.description}
            </p>

            {/* Date & Category meta tags */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <Calendar className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                <span>Date: <strong>{currentSession.formattedDate}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <Layers className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Category: <strong>{currentSession.category}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{currentSession.totalQuestions} Curated Questions</span>
              </div>
            </div>
          </div>

          {/* Progress Widget Card */}
          <div className="w-full md:w-64 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 backdrop-blur-xs shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-zinc-600 dark:text-zinc-400">Session Progress</span>
              <span className="font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {progressPercent}%
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>{completedCount} of {questions.length} Mastered</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {questions.length - completedCount} Left
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Controls & Language Switcher */}
      <div className="space-y-4">
        {/* Global Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search mock questions, concepts, hooks, tags..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
            />
          </div>

          {/* Global Language Toggle & Expand All Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpandAll(!expandAll)}
              className="px-3 py-2 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors cursor-pointer"
            >
              {expandAll ? "Collapse All Details" : "Expand All Details"}
            </button>

            <div className="flex items-center p-1 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300/50 dark:border-zinc-700">
              <span className="text-xs font-semibold px-2 text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                <Languages className="h-3.5 w-3.5" />
                Language:
              </span>
              <button
                onClick={() => setGlobalLang("bn")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer",
                  globalLang === "bn"
                    ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                🇧🇩 বাংলা
              </button>
              <button
                onClick={() => setGlobalLang("en")}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer",
                  globalLang === "en"
                    ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>

        {/* Topic Pills Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedTopic("all")}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer",
              selectedTopic === "all"
                ? "bg-zinc-900 text-white border-zinc-900 shadow-xs dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100"
                : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800/80"
            )}
          >
            All Topics ({topicCounts.all || 0})
          </button>
          {sessionTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer",
                selectedTopic === topic
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-xs dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100"
                  : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800/80"
              )}
            >
              {topic} ({topicCounts[topic] || 0})
            </button>
          ))}
        </div>

        {/* Status Pills Filter */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-zinc-400 font-medium mr-1">Filter:</span>
            {[
              { id: "all", label: "All Status" },
              { id: "completed", label: "Completed" },
              { id: "incomplete", label: "Needs Practice" },
              { id: "must-know", label: "🔥 Must Know" },
              { id: "favorites", label: "Favorites" },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setStatusFilter(st.id as any)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer",
                  statusFilter === st.id
                    ? "bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 font-semibold"
                    : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                )}
              >
                {st.label}
              </button>
            ))}
          </div>

          {(searchQuery || selectedTopic !== "all" || statusFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("all");
                setStatusFilter("all");
              }}
              className="inline-flex items-center gap-1 text-xs text-rose-600 hover:underline cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* 3. Question List with Click-to-Expand Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Questions List ({filteredQuestions.length} Questions)
          </div>
          <span className="text-xs text-zinc-500">
            👉 যে প্রশ্নের ওপর ক্লিক করবেন সেটির বিস্তারিত উত্তর ও কোড ওপেন হবে
          </span>
        </div>

        {filteredQuestions.length > 0 ? (
          <div className="space-y-4">
            {filteredQuestions.map((item) => (
              <MockQuestionCard
                key={item.id}
                item={item}
                globalLang={globalLang}
                defaultExpanded={expandAll}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 space-y-3">
            <Search className="h-8 w-8 text-zinc-400 mx-auto" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              No mock questions found
            </h3>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              No questions matched your search query or active filter. Try resetting your search or topic selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
