"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Bookmark,
  Sparkles,
  X,
  Keyboard,
} from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SmartText } from "@/components/ui/SmartText";

export default function InterviewFocusModePage() {
  const { isCompleted, isFavorite, toggleComplete, toggleFavorite } =
    useUserProgress();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const question = ALL_QUESTIONS[currentIndex];
  const completed = question ? isCompleted(question.id) : false;
  const favorite = question ? isFavorite(question.id) : false;

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        if (currentIndex < ALL_QUESTIONS.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setShowAnswer(false);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
          setShowAnswer(false);
        }
      } else if (e.key === " " || e.key.toLowerCase() === "a") {
        e.preventDefault();
        setShowAnswer((prev) => !prev);
      } else if (e.key.toLowerCase() === "c" && question) {
        toggleComplete(question.id);
      } else if (e.key.toLowerCase() === "f" && question) {
        toggleFavorite(question.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, question, toggleComplete, toggleFavorite]);

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Fullscreen error:", err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0d12] text-zinc-100 flex flex-col justify-between p-4 sm:p-8 overflow-y-auto animate-in fade-in-50 duration-150 select-none">
      {/* Top Minimal Toolbar */}
      <header className="flex items-center justify-between gap-4 max-w-4xl mx-auto w-full pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <X className="h-4 w-4" />
            <span>Exit Focus Mode</span>
          </Link>
          <span className="text-zinc-600">•</span>
          <span className="text-xs font-mono text-zinc-400">
            Question {currentIndex + 1} of {ALL_QUESTIONS.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Complete Toggle */}
          <button
            onClick={() => toggleComplete(question.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              completed
                ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>{completed ? "Completed" : "Mark Done (C)"}</span>
          </button>

          {/* Favorite Toggle */}
          <button
            onClick={() => toggleFavorite(question.id)}
            className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
              favorite
                ? "text-amber-400 bg-amber-950/60 border border-amber-800"
                : "text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
            }`}
            title="Bookmark (F)"
          >
            <Bookmark className={`h-4 w-4 ${favorite ? "fill-amber-400" : ""}`} />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleBrowserFullscreen}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
            title="Toggle Browser Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </header>

      {/* Main Focus Centerpiece */}
      <main className="max-w-3xl mx-auto w-full my-auto py-8 space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
            {question.category}
          </Badge>
          <Badge
            variant={
              question.difficulty === "Beginner"
                ? "beginner"
                : question.difficulty === "Intermediate"
                ? "intermediate"
                : "advanced"
            }
          >
            {question.difficulty}
          </Badge>
          {question.importance === "Must Know" && (
            <Badge variant="must-know">Must Know</Badge>
          )}
        </div>

        {/* Question Title */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug sm:leading-tight">
          {question.question}
        </h1>

        {/* Revealed Answer Box */}
        {showAnswer ? (
          <div className="space-y-4 pt-4 border-t border-zinc-800 animate-in fade-in-50 duration-200">
            {/* Short Answer in Simple Bangla */}
            <div className="p-5 rounded-xl bg-zinc-900/90 border border-amber-900/50">
              <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
                সংক্ষিপ্ত উত্তর (Quick Recall):
              </h3>
              <div className="text-base sm:text-lg text-zinc-100 leading-relaxed font-medium">
                <SmartText text={question.shortAnswer} />
              </div>
            </div>

            {/* Interview Script */}
            <div className="p-5 rounded-xl bg-zinc-900/90 border border-blue-900/50">
              <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">
                ইন্টারভিউ স্পিচ স্ক্রিপ্ট:
              </h3>
              <div className="text-base text-zinc-200 italic leading-relaxed">
                &ldquo;<SmartText text={question.interviewAnswer} />&rdquo;
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Link
                href={`/questions/${question.slug}`}
                target="_blank"
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
              >
                Open Full Detailed Notes in New Tab →
              </Link>
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <Button
              size="lg"
              onClick={() => setShowAnswer(true)}
              className="bg-zinc-100 text-zinc-900 hover:bg-white font-semibold shadow-lg text-sm sm:text-base px-6 py-6"
            >
              <Eye className="h-5 w-5 mr-2" />
              Show Answer (Spacebar / A)
            </Button>
          </div>
        )}
      </main>

      {/* Bottom Navigation & Keyboard Shortcuts bar */}
      <footer className="max-w-4xl mx-auto w-full pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentIndex === 0}
            onClick={() => {
              setCurrentIndex((prev) => prev - 1);
              setShowAnswer(false);
            }}
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous (←)
          </Button>

          <Button
            variant="outline"
            size="sm"
            disabled={currentIndex === ALL_QUESTIONS.length - 1}
            onClick={() => {
              setCurrentIndex((prev) => prev + 1);
              setShowAnswer(false);
            }}
            className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 disabled:opacity-30"
          >
            Next (→)
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Keyboard Legend */}
        <div className="hidden md:flex items-center gap-3 text-[11px] font-mono text-zinc-400">
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded bg-zinc-800 border border-zinc-700">Space</kbd> Answer
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded bg-zinc-800 border border-zinc-700">→</kbd> Next
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded bg-zinc-800 border border-zinc-700">C</kbd> Complete
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 rounded bg-zinc-800 border border-zinc-700">F</kbd> Bookmark
          </span>
        </div>
      </footer>
    </div>
  );
}
