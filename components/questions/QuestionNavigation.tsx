import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Question } from "@/types";
import { ALL_QUESTIONS } from "@/data/questions";

interface QuestionNavigationProps {
  currentQuestionId: string;
}

export function QuestionNavigation({ currentQuestionId }: QuestionNavigationProps) {
  const currentIndex = ALL_QUESTIONS.findIndex(
    (q) => q.id === currentQuestionId || q.slug === currentQuestionId
  );

  if (currentIndex === -1) return null;

  const prevQuestion = currentIndex > 0 ? ALL_QUESTIONS[currentIndex - 1] : null;
  const nextQuestion =
    currentIndex < ALL_QUESTIONS.length - 1
      ? ALL_QUESTIONS[currentIndex + 1]
      : null;

  return (
    <nav className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {prevQuestion ? (
        <Link
          href={`/questions/${prevQuestion.slug}`}
          className="flex-1 flex items-center gap-3 p-3 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
        >
          <ChevronLeft className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
          <div className="flex flex-col overflow-hidden">
            <span className="text-[11px] text-zinc-400 uppercase font-medium tracking-wider">
              Previous Question
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:underline">
              {prevQuestion.question}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextQuestion ? (
        <Link
          href={`/questions/${nextQuestion.slug}`}
          className="flex-1 flex items-center justify-end text-right gap-3 p-3 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group"
        >
          <div className="flex flex-col overflow-hidden">
            <span className="text-[11px] text-zinc-400 uppercase font-medium tracking-wider">
              Next Question
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:underline">
              {nextQuestion.question}
            </span>
          </div>
          <ChevronRight className="h-5 w-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 shrink-0 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
