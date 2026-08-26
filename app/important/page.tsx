"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Flame } from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/BackButton";

export default function ImportantQuestionsPage() {
  const mustKnowQuestions = ALL_QUESTIONS.filter(
    (q) => q.importance === "Must Know"
  );

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      <BackButton fallbackHref="/questions" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 fill-amber-500 text-amber-500" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Must Know Questions (সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত প্রশ্ন)
            </h1>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Top-tier core technical questions that are virtually guaranteed to be asked in full-stack interviews.
          </p>
        </div>

        <Link href="/practice?filter=must-know">
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:text-zinc-950">
            <Flame className="h-4 w-4 mr-1.5 fill-current" />
            Practice Must Know ({mustKnowQuestions.length})
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mustKnowQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}
