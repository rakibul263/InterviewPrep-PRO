"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  Circle,
  Share2,
  ChevronRight,
  Sparkles,
  Maximize2,
  Check,
} from "lucide-react";
import { Question } from "@/types";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/BackButton";
import { cn } from "@/lib/utils";

interface QuestionHeaderProps {
  question: Question;
}

export function QuestionHeader({ question }: QuestionHeaderProps) {
  const { isCompleted, isFavorite, toggleComplete, toggleFavorite } =
    useUserProgress();
  const [copied, setCopied] = useState(false);

  const completed = isCompleted(question.id);
  const favorite = isFavorite(question.id);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

  return (
    <header className="space-y-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Top Back Navigation & Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BackButton fallbackHref="/questions" label="তালিকায় ফিরে যান (Back)" />

        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/questions"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Questions
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href={`/categories/${question.categorySlug}`}
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {question.category}
          </Link>
        </nav>
      </div>

      {/* Meta Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="secondary" className="font-semibold">
          {question.category}
        </Badge>
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
        {completed && (
          <Badge variant="completed" className="flex items-center gap-1">
            <Check className="h-3 w-3" />
            Completed
          </Badge>
        )}
      </div>

      {/* Main Question Heading (Optimized for comfortable reading) */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug sm:leading-tight">
        {question.question}
      </h1>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
        <div className="flex items-center gap-2">
          {/* Mark Complete Button */}
          <Button
            variant={completed ? "secondary" : "default"}
            size="sm"
            onClick={() => toggleComplete(question.id)}
            className={cn(
              completed &&
                "text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800"
            )}
          >
            {completed ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Marked as Completed</span>
              </>
            ) : (
              <>
                <Circle className="h-4 w-4" />
                <span>Mark as Completed</span>
              </>
            )}
          </Button>

          {/* Bookmark Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleFavorite(question.id)}
            className={cn(
              favorite &&
                "text-amber-700 bg-amber-50 hover:bg-amber-100 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"
            )}
          >
            <Bookmark
              className={cn(
                "h-4 w-4 mr-1",
                favorite && "fill-amber-500 text-amber-500"
              )}
            />
            <span>{favorite ? "Bookmarked" : "Favorite"}</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {/* Practice This Flashcard */}
          <Link href={`/practice?id=${question.id}`}>
            <Button variant="outline" size="sm">
              Practice This Question
            </Button>
          </Link>

          {/* Copy Link / Share */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            title={copied ? "Link Copied!" : "Copy Link"}
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
