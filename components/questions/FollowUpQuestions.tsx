import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { FollowUpQuestion } from "@/types";

interface FollowUpQuestionsProps {
  followUpQuestions?: FollowUpQuestion[];
}

export function FollowUpQuestions({
  followUpQuestions,
}: FollowUpQuestionsProps) {
  if (!followUpQuestions || followUpQuestions.length === 0) return null;

  return (
    <section className="space-y-3 pt-2">
      <div className="flex items-center gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          সম্ভাব্য কাউন্টার বা ফলো-আপ প্রশ্ন (Possible Follow-up Questions)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {followUpQuestions.map((item, idx) => {
          const content = (
            <div className="h-full flex flex-col justify-between p-4 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700 transition-all group cursor-pointer shadow-2xs">
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                  {item.question}
                </h3>
                {item.shortHint && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                    {item.shortHint}
                  </p>
                )}
              </div>
              <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/40 flex items-center justify-end text-xs font-medium text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform">
                <span>Explore Answer →</span>
              </div>
            </div>
          );

          if (item.targetId) {
            return (
              <Link key={idx} href={`/questions/${item.targetId}`} className="block">
                {content}
              </Link>
            );
          }

          return <div key={idx}>{content}</div>;
        })}
      </div>
    </section>
  );
}
