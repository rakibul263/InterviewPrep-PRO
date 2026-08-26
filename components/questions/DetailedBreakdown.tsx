import React from "react";
import { CheckCircle, Info, HelpCircle, Cog, PlayCircle } from "lucide-react";
import { Question } from "@/types";
import { SmartText } from "@/components/ui/SmartText";

interface DetailedBreakdownProps {
  detailedExplanation: Question["detailedExplanation"];
}

export function DetailedBreakdown({ detailedExplanation }: DetailedBreakdownProps) {
  if (!detailedExplanation) return null;

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          বিস্তারিত বিশ্লেষণ (Detailed Breakdown)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* What it is */}
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
            <Info className="h-3.5 w-3.5 text-blue-500" />
            <span>এটি কী? (What it is)</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <SmartText text={detailedExplanation.whatItIs} />
          </p>
        </div>

        {/* Why it exists */}
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-amber-500" />
            <span>এটি কেন তৈরি করা হয়েছে? (Why it exists)</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <SmartText text={detailedExplanation.whyItExists} />
          </p>
        </div>

        {/* How it works */}
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
            <Cog className="h-3.5 w-3.5 text-emerald-500" />
            <span>এটি কীভাবে কাজ করে? (How it works)</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <SmartText text={detailedExplanation.howItWorks} />
          </p>
        </div>

        {/* When to use */}
        <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1.5">
            <PlayCircle className="h-3.5 w-3.5 text-purple-500" />
            <span>কখন ব্যবহার করবেন? (When to use)</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <SmartText text={detailedExplanation.whenToUse} />
          </p>
        </div>
      </div>

      {/* Key Points Bullet List */}
      {detailedExplanation.keyPoints && detailedExplanation.keyPoints.length > 0 && (
        <div className="mt-4 p-4 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/30">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
            মূল পয়েন্টসমূহ (Key Architectural Points)
          </h3>
          <ul className="space-y-2">
            {detailedExplanation.keyPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <SmartText text={point} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
