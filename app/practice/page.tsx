"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Flame,
  CheckCircle2,
  AlertCircle,
  Eye,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Trophy,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { ALL_QUESTIONS } from "@/data/questions";
import { CATEGORIES } from "@/data/categories";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SmartText } from "@/components/ui/SmartText";

function PracticeContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialFilter = searchParams.get("filter") || "all";
  const targetId = searchParams.get("id");

  const { recordPracticeAnswer, progress } = useUserProgress();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [sessionScore, setSessionScore] = useState({ known: 0, needsRevision: 0 });
  const [isSessionFinished, setIsSessionFinished] = useState(false);

  // Filter practice deck
  const deck = useMemo(() => {
    let list = ALL_QUESTIONS;

    if (targetId) {
      const specific = ALL_QUESTIONS.find((q) => q.id === targetId || q.slug === targetId);
      if (specific) return [specific];
    }

    if (selectedCategory !== "all") {
      list = list.filter(
        (q) => q.categorySlug.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedFilter === "must-know") {
      list = list.filter((q) => q.importance === "Must Know");
    } else if (selectedFilter === "favorites") {
      list = list.filter((q) => progress.favoriteQuestionIds.includes(q.id));
    } else if (selectedFilter === "incomplete") {
      list = list.filter((q) => !progress.completedQuestionIds.includes(q.id));
    }

    return list;
  }, [selectedCategory, selectedFilter, targetId, progress]);

  const currentQuestion = deck[currentIndex];

  const handleReveal = () => {
    setIsAnswerRevealed(true);
  };

  const handleGrade = (result: "known" | "needsRevision") => {
    if (!currentQuestion) return;

    recordPracticeAnswer(currentQuestion.id, result);

    setSessionScore((prev) => ({
      known: result === "known" ? prev.known + 1 : prev.known,
      needsRevision: result === "needsRevision" ? prev.needsRevision + 1 : prev.needsRevision,
    }));

    if (currentIndex + 1 < deck.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswerRevealed(false);
    } else {
      setIsSessionFinished(true);
      if (typeof window !== "undefined") {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsAnswerRevealed(false);
    setSessionScore({ known: 0, needsRevision: 0 });
    setIsSessionFinished(false);
  };

  const progressPercent =
    deck.length > 0 ? Math.round(((currentIndex + 1) / deck.length) * 100) : 0;

  if (deck.length === 0) {
    return (
      <div className="py-16 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
        <Flame className="h-10 w-10 text-amber-500 mx-auto mb-3" />
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
          No questions in this practice deck
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Try changing your category or filter selection to load flashcards.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button
            size="sm"
            onClick={() => {
              setSelectedCategory("all");
              setSelectedFilter("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in-50 duration-200">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400 fill-amber-500" />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Practice Mode (Active Recall Flashcards)
          </h1>
        </div>

        {/* Filter Dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              handleRestart();
            }}
            className="h-8 rounded-lg border border-zinc-200 bg-white px-2 text-xs text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="all">All Tech Stacks</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={selectedFilter}
            onChange={(e) => {
              setSelectedFilter(e.target.value);
              handleRestart();
            }}
            className="h-8 rounded-lg border border-zinc-200 bg-white px-2 text-xs text-zinc-800 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <option value="all">All Questions</option>
            <option value="must-know">Must Know Only 🔥</option>
            <option value="favorites">Favorites Only ⭐️</option>
            <option value="incomplete">Incomplete Only ⏳</option>
          </select>
        </div>
      </div>

      {!isSessionFinished ? (
        <div className="space-y-4">
          {/* Deck Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span>
                Card {currentIndex + 1} of {deck.length}
              </span>
              <span>{progressPercent}% Complete</span>
            </div>
            <Progress value={progressPercent} className="h-1.5" />
          </div>

          {/* Flashcard Box */}
          <div className="rounded-2xl border border-zinc-200/90 bg-white dark:border-zinc-800 dark:bg-zinc-900/80 shadow-md p-6 sm:p-8 space-y-6 transition-all min-h-[380px] flex flex-col justify-between">
            {/* Card Header Tags */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{currentQuestion.category}</Badge>
                  <Badge
                    variant={
                      currentQuestion.difficulty === "Beginner"
                        ? "beginner"
                        : currentQuestion.difficulty === "Intermediate"
                        ? "intermediate"
                        : "advanced"
                    }
                  >
                    {currentQuestion.difficulty}
                  </Badge>
                  {currentQuestion.importance === "Must Know" && (
                    <Badge variant="must-know">Must Know</Badge>
                  )}
                </div>

                <Link
                  href={`/questions/${currentQuestion.slug}`}
                  target="_blank"
                  className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 inline-flex items-center gap-1 font-medium"
                >
                  <span>Full Article</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Question Text */}
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer Section (Hidden until Reveal) */}
            {isAnswerRevealed ? (
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 animate-in fade-in-50 duration-200">
                {/* Short Answer in Simple Bangla */}
                <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40">
                  <h3 className="text-xs font-semibold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-1">
                    সংক্ষিপ্ত উত্তর (Quick Recall):
                  </h3>
                  <div className="text-sm sm:text-base text-zinc-900 dark:text-zinc-100 leading-relaxed font-medium">
                    <SmartText text={currentQuestion.shortAnswer} />
                  </div>
                </div>

                {/* Interview Script */}
                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/40">
                  <h3 className="text-xs font-semibold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-1">
                    ইন্টারভিউতে যেভাবে বলবেন:
                  </h3>
                  <div className="text-sm text-zinc-800 dark:text-zinc-200 italic">
                    &ldquo;<SmartText text={currentQuestion.interviewAnswer} />&rdquo;
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center border-2 border-dashed border-zinc-100 dark:border-zinc-800/80 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                  চিন্তা করুন এবং নিজের ভাষায় উত্তর মনে করার চেষ্টা করুন...
                </p>
                <Button
                  onClick={handleReveal}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 shadow-xs"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Show Answer (উত্তর দেখুন)
                </Button>
              </div>
            )}

            {/* Assessment Action Buttons */}
            {isAnswerRevealed && (
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-zinc-400 font-medium">
                  Rate your recall accuracy:
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={() => handleGrade("needsRevision")}
                    className="flex-1 sm:flex-initial text-rose-600 border-rose-200 hover:bg-rose-50 dark:text-rose-400 dark:border-rose-900 dark:hover:bg-rose-950/40"
                  >
                    <AlertCircle className="h-4 w-4 mr-1.5" />
                    Need Revision (ভুলে গেছি)
                  </Button>
                  <Button
                    onClick={() => handleGrade("known")}
                    className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 shadow-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1.5" />
                    I Know This (মনে আছে)
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Session Completed Screen */
        <div className="rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 p-8 text-center space-y-6 shadow-md">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 mx-auto">
            <Trophy className="h-8 w-8" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Practice Session Completed! 🎉
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              চমৎকার প্রস্তুতি! আপনি সফলভাবে এই ডেক শেষ করেছেন।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {sessionScore.known}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">I Know This</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                {sessionScore.needsRevision}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Needs Revision</div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={handleRestart}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Practice Again
            </Button>
            <Link href="/questions">
              <Button>Browse All Questions</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-sm text-zinc-500">
          Loading Practice Flashcards...
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
