"use client";

import React from "react";
import Link from "next/link";
import { Bookmark, Sparkles, HelpCircle } from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { useUserProgress } from "@/hooks/useUserProgress";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/BackButton";

export default function FavoritesPage() {
  const { progress } = useUserProgress();

  const favoriteQuestions = ALL_QUESTIONS.filter((q) =>
    progress.favoriteQuestionIds.includes(q.id)
  );

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      <BackButton fallbackHref="/questions" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <Bookmark className="h-6 w-6 fill-amber-500 text-amber-500" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Favorite Questions (বুকমার্ক করা প্রশ্ন)
            </h1>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Review your hand-picked questions before walking into an interview.
          </p>
        </div>

        {favoriteQuestions.length > 0 && (
          <Link href="/practice?filter=favorites">
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:text-zinc-950">
              Practice Favorites Flashcards
            </Button>
          </Link>
        )}
      </div>

      {favoriteQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {favoriteQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
          <Bookmark className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
            No favorite questions bookmarked yet
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
            Click the bookmark icon on any question to add it here for rapid revision before interviews.
          </p>
          <Link href="/questions" className="mt-4 inline-block">
            <Button variant="outline" size="sm">
              Browse Questions
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
