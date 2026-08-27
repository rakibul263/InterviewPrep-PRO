"use client";

import React, { useState, useEffect } from "react";
import { MockInterviewItem } from "@/types";
import { useUserProgress } from "@/hooks/useUserProgress";
import { SmartText } from "@/components/ui/SmartText";
import {
  CheckCircle2,
  Bookmark,
  MessageSquareQuote,
  Copy,
  Check,
  Code2,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MockQuestionCardProps {
  item: MockInterviewItem;
  globalLang: "en" | "bn" | "dual";
  defaultExpanded?: boolean;
}

export function MockQuestionCard({
  item,
  globalLang,
  defaultExpanded = false,
}: MockQuestionCardProps) {
  const { isCompleted, toggleComplete, isFavorite, toggleFavorite } = useUserProgress();
  const [localLang, setLocalLang] = useState<"en" | "bn" | null>(null);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copiedSpeech, setCopiedSpeech] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Sync defaultExpanded when parent changes (e.g. Expand All / Collapse All)
  useEffect(() => {
    setIsExpanded(defaultExpanded);
  }, [defaultExpanded]);

  const completed = isCompleted(item.id);
  const favorite = isFavorite(item.id);

  // Determine current active language for this card
  const activeLang = localLang || (globalLang === "dual" ? "bn" : globalLang);
  const content = activeLang === "bn" ? item.bangla : item.english;

  const handleCopySpeech = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopiedSpeech(true);
      setTimeout(() => setCopiedSpeech(false), 2000);
    }
  };

  const handleCopyCode = (e: React.MouseEvent, code: string) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getTopicColor = (topic: MockInterviewItem["topic"]) => {
    switch (topic) {
      case "React Core":
        return "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800";
      case "Next.js App Router":
        return "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800";
      case "Performance & Data":
        return "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800";
      case "Security & Architecture":
        return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800";
      default:
        return "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700";
    }
  };

  const getDifficultyBadge = (diff: MockInterviewItem["difficulty"]) => {
    switch (diff) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300";
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300";
    }
  };

  return (
    <div
      id={item.id}
      className={cn(
        "rounded-2xl border transition-all duration-200 scroll-mt-24 shadow-xs overflow-hidden",
        completed
          ? "border-emerald-200/90 bg-emerald-50/15 dark:border-emerald-900/50 dark:bg-emerald-950/10"
          : isExpanded
          ? "border-amber-300/80 bg-white dark:border-amber-700/50 dark:bg-zinc-900/90 shadow-md ring-1 ring-amber-500/10"
          : "border-zinc-200/90 bg-white dark:border-zinc-800/90 dark:bg-zinc-900/70 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
      )}
    >
      {/* Clickable Header Accordion Trigger */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 cursor-pointer select-none transition-colors hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center justify-center h-6 px-2.5 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-mono font-bold shadow-2xs">
              #{item.questionNumber}
            </span>
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-medium border",
                getTopicColor(item.topic)
              )}
            >
              {item.topic}
            </span>
            <span
              className={cn(
                "px-2 py-0.5 rounded-md text-[11px] font-medium",
                getDifficultyBadge(item.difficulty)
              )}
            >
              {item.difficulty}
            </span>
            {item.importance === "Must Know" && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-[11px] font-semibold">
                <Flame className="h-3 w-3" />
                Must Know
              </span>
            )}
          </div>

          {/* Top Actions: Favorite, Mark Done, & Accordion Chevron */}
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {/* Per-Question Language Toggle (visible when expanded) */}
            {isExpanded && (
              <div className="flex items-center p-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/70 dark:border-zinc-700/60">
                <button
                  type="button"
                  onClick={() => setLocalLang("bn")}
                  className={cn(
                    "px-2 py-1 rounded-md text-xs font-medium transition-all cursor-pointer",
                    activeLang === "bn"
                      ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100 font-semibold"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  )}
                  title="বাংলায় দেখুন"
                >
                  🇧🇩 বাংলা
                </button>
                <button
                  type="button"
                  onClick={() => setLocalLang("en")}
                  className={cn(
                    "px-2 py-1 rounded-md text-xs font-medium transition-all cursor-pointer",
                    activeLang === "en"
                      ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100 font-semibold"
                      : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  )}
                  title="View in English"
                >
                  🇬🇧 English
                </button>
              </div>
            )}

            {/* Favorite button */}
            <button
              type="button"
              onClick={() => toggleFavorite(item.id)}
              className={cn(
                "p-1.5 rounded-lg border transition-colors cursor-pointer",
                favorite
                  ? "border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
                  : "border-zinc-200 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
              )}
              title={favorite ? "Saved to Favorites" : "Add to Favorites"}
            >
              <Bookmark className="h-4 w-4" fill={favorite ? "currentColor" : "none"} />
            </button>

            {/* Complete button */}
            <button
              type="button"
              onClick={() => toggleComplete(item.id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer",
                completed
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
                  : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{completed ? "Done" : "Mark Done"}</span>
            </button>

            {/* Expand / Collapse Button */}
            <div className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>

        {/* Question Title (English + Bangla translation) */}
        <div className="mt-3.5 space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {item.question}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {item.banglaQuestion}
          </p>
        </div>

        {/* Collapsed Hint Preview */}
        {!isExpanded && (
          <div className="mt-3 flex items-center justify-between text-xs text-amber-700 dark:text-amber-400/90 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 font-medium">
            <span className="truncate max-w-md text-zinc-500 dark:text-zinc-400">
              💡 {content.quickAnswer.slice(0, 100)}...
            </span>
            <span className="shrink-0 flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
              Click to view answer & script <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </div>
        )}
      </div>

      {/* Expanded Full Details Section */}
      {isExpanded && (
        <div className="p-5 pt-0 space-y-5 border-t border-zinc-100 dark:border-zinc-800/80 animate-in fade-in-50 duration-150">
          {/* 1. Quick Summary Pill Box */}
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>
                {activeLang === "bn"
                  ? "সংক্ষিপ্ত সারসংক্ষেপ (30-Sec Summary)"
                  : "Quick 30-Second Summary"}
              </span>
            </div>
            <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
              <SmartText text={content.quickAnswer} />
            </p>
          </div>

          {/* 2. Interview Speech / Script Box (How to speak in interview) */}
          <div className="rounded-xl border border-blue-200/90 bg-blue-50/40 p-4 sm:p-5 dark:border-blue-900/50 dark:bg-blue-950/20 relative">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-500 shadow-xs">
                  <MessageSquareQuote className="h-3.5 w-3.5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
                  {activeLang === "bn"
                    ? "ইন্টারভিউতে যেভাবে কনফিডেন্টলি বলবেন (Interview Delivery Script)"
                    : "What to Say in the Interview (Senior Delivery Script)"}
                </h4>
              </div>

              <button
                type="button"
                onClick={(e) => handleCopySpeech(e, content.interviewSpeech)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 shadow-2xs hover:bg-blue-50 transition-colors cursor-pointer"
              >
                {copiedSpeech ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Script</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative pl-3.5 border-l-2 border-blue-400 dark:border-blue-500 my-2">
              <p className="text-sm sm:text-base leading-relaxed text-zinc-900 dark:text-zinc-100 font-medium italic">
                &ldquo;<SmartText text={content.interviewSpeech} />&rdquo;
              </p>
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
              <span>💡</span>
              <span>
                {activeLang === "bn"
                  ? "টিপ: ইন্টারভিউতে মুখস্থ না বলে এই পয়েন্টগুলো স্বাভাবিক ভঙ্গিতে নিজের ভাষায় উপস্থাপন করুন।"
                  : "Tip: Deliver this smoothly using your own voice—focus on clear technical ownership."}
              </span>
            </div>
          </div>

          {/* 3. Deep Dive & Core Breakdown */}
          <div className="space-y-4 pt-1">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-zinc-600 dark:text-zinc-400" />
                <span>
                  {activeLang === "bn"
                    ? "গভীর টেকনিক্যাল পয়েন্ট ও বিশ্লেষণ (Deep Dive Breakdown)"
                    : "Architectural & Technical Deep Dive"}
                </span>
              </h4>
              <ul className="space-y-2.5 pl-1">
                {content.deepDive.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>
                      <SmartText text={point} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Code Snippet if provided */}
            {content.codeSnippet && (
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 overflow-hidden shadow-md">
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-mono text-zinc-300 font-medium">
                      {content.codeSnippet.caption || "Production Code Pattern"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleCopyCode(e, content.codeSnippet!.code)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-xs font-mono leading-relaxed text-emerald-300">
                    <code>{content.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* 5. Common Traps & Mistakes to Avoid */}
            {content.commonMistakes && content.commonMistakes.length > 0 && (
              <div className="p-4 rounded-xl border border-rose-200/80 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-950/20">
                <div className="flex items-center gap-2 mb-2 text-rose-800 dark:text-rose-300 font-semibold text-xs uppercase tracking-wider">
                  <AlertTriangle className="h-3.5 w-3.5 text-rose-500" />
                  <span>
                    {activeLang === "bn"
                      ? "ইন্টারভিউতে যে ভুলগুলো এড়িয়ে চলবেন (Common Traps)"
                      : "Common Traps & Mistakes to Avoid"}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {content.commonMistakes.map((mistake, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <span className="text-rose-500 font-bold shrink-0">✕</span>
                      <span>
                        <SmartText text={mistake} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Pro Tips */}
            {content.proTips && content.proTips.length > 0 && (
              <div className="p-4 rounded-xl border border-amber-200/80 bg-amber-50/40 dark:border-amber-900/40 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 mb-2 text-amber-900 dark:text-amber-300 font-semibold text-xs uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  <span>
                    {activeLang === "bn"
                      ? "প্রো-টিপস ও ইন্টারভিউ হ্যাক"
                      : "Pro Tips & Senior Insights"}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {content.proTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200"
                    >
                      <span className="text-amber-500 font-bold shrink-0">✓</span>
                      <span>
                        <SmartText text={tip} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Card Footer: Collapse toggle & tags */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-500">
            <div className="flex flex-wrap items-center gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
            >
              <span>{isExpanded ? "Collapse Details" : "Show Full Details"}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
