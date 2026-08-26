"use client";

import React, { useState } from "react";
import { MessageSquareQuote, Copy, Check } from "lucide-react";
import { SmartText } from "@/components/ui/SmartText";

interface InterviewAnswerCardProps {
  interviewAnswer: string;
}

export function InterviewAnswerCard({ interviewAnswer }: InterviewAnswerCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(interviewAnswer);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="rounded-xl border border-blue-200/80 bg-blue-50/30 p-5 dark:border-blue-900/40 dark:bg-blue-950/20">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-500">
            <MessageSquareQuote className="h-3.5 w-3.5" />
          </div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-900 dark:text-blue-300">
            ইন্টারভিউতে যেভাবে বলবেন (Interview Script)
          </h2>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Script</span>
            </>
          )}
        </button>
      </div>

      <div className="relative pl-4 border-l-2 border-blue-400 dark:border-blue-500 my-2">
        <blockquote className="text-base sm:text-lg leading-relaxed text-zinc-900 dark:text-zinc-100 font-medium italic">
          &ldquo;<SmartText text={interviewAnswer} />&rdquo;
        </blockquote>
      </div>

      <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-3">
        💡 এটি ইন্টারভিউতে সরাসরি স্বাভাবিকভাবে বলার মতো করে সাজানো। তোতাপাখির মতো মুখস্থ না করে নিজের ভাষায় ডেলিভারি দিন।
      </p>
    </section>
  );
}
