"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Eye,
  EyeOff,
} from "lucide-react";
import { FollowUpQuestion } from "@/types";
import { getQuestionById } from "@/data/questions";
import { SmartText } from "@/components/ui/SmartText";
import { Button } from "@/components/ui/button";

interface FollowUpQuestionsProps {
  followUpQuestions?: FollowUpQuestion[];
}

export function FollowUpQuestions({
  followUpQuestions,
}: FollowUpQuestionsProps) {
  if (!followUpQuestions || followUpQuestions.length === 0) return null;

  // Track expanded cards state (initially all false)
  const [expandedIndices, setExpandedIndices] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isAllExpanded =
    followUpQuestions.length > 0 &&
    followUpQuestions.every((_, idx) => expandedIndices[idx]);

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedIndices({});
    } else {
      const all: Record<number, boolean> = {};
      followUpQuestions.forEach((_, idx) => {
        all[idx] = true;
      });
      setExpandedIndices(all);
    }
  };

  return (
    <section className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
      {/* Section Header with Expand/Collapse All */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
            <HelpCircle className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              সম্ভাব্য কাউন্টার বা ফলো-আপ প্রশ্ন (Possible Follow-up Questions)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              মূল উত্তরের পর ইন্টারভিউয়ার সাধারণত যেসব বিপরীত বা ডিপ-ডাইভ প্রশ্ন করতে পারেন:
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleAll}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 dark:text-purple-300 dark:bg-purple-950/40 dark:hover:bg-purple-950/80 transition-colors cursor-pointer w-fit"
        >
          {isAllExpanded ? (
            <>
              <EyeOff className="h-3.5 w-3.5" />
              <span>সব উত্তর লুকান (Collapse All)</span>
            </>
          ) : (
            <>
              <Eye className="h-3.5 w-3.5" />
              <span>সব উত্তর দেখুন (Expand All)</span>
            </>
          )}
        </button>
      </div>

      {/* Follow-up Question Cards */}
      <div className="grid grid-cols-1 gap-3.5">
        {followUpQuestions.map((item, idx) => {
          const isExpanded = !!expandedIndices[idx];
          const targetQuestion = item.targetId ? getQuestionById(item.targetId) : undefined;
          
          // Determine explanation text: prefer linked question's shortAnswer or item's shortHint
          const answerText =
            targetQuestion?.shortAnswer ||
            item.shortHint ||
            "এই প্রশ্নটির বিস্তারিত উত্তর তৈরি করা হচ্ছে। মূল কনসেপ্ট বুঝতে রিলেটেড সেকশনটি পড়ুন।";

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 ${
                isExpanded
                  ? "border-purple-300 bg-purple-50/20 dark:border-purple-900/60 dark:bg-purple-950/15 shadow-xs"
                  : "border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
              }`}
            >
              {/* Question Header Row (Clickable to Toggle) */}
              <button
                type="button"
                onClick={() => toggleCard(idx)}
                className="w-full text-left p-4 sm:p-4.5 flex items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      {item.question}
                    </h3>
                    {!isExpanded && (
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium inline-flex items-center gap-1 mt-1">
                        <Sparkles className="h-3 w-3" />
                        উত্তর পড়তে ক্লিক করুন (Click to view answer)
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                  <span className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-400" />
                    )}
                  </span>
                </div>
              </button>

              {/* Expandable Answer Body */}
              {isExpanded && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-purple-100/80 dark:border-purple-950/60 animate-in fade-in-50 duration-200 space-y-3.5">
                  {/* Bangla Answer Box */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-purple-200/80 dark:border-purple-900/40 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-900 dark:text-purple-300">
                      <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                      <span>সহজ উত্তর (Direct Answer):</span>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
                      <SmartText text={answerText} />
                    </div>
                  </div>

                  {/* If full question exists in question bank, provide direct link */}
                  {targetQuestion && (
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        এই প্রশ্নটির সম্পূর্ণ ১০-দফা বিশ্লেষণ রয়েছে:
                      </span>
                      <Link
                        href={`/questions/${targetQuestion.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 shadow-xs transition-colors"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>সম্পূর্ণ প্রশ্ন পেজে যান →</span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
