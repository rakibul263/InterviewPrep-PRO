import React from "react";
import { Sparkles, XCircle, CheckCircle2, Award } from "lucide-react";
import { Question } from "@/types";
import { SmartText } from "@/components/ui/SmartText";

interface TipsAndMistakesProps {
  interviewTips?: Question["interviewTips"];
}

export function TipsAndMistakes({ interviewTips }: TipsAndMistakesProps) {
  if (!interviewTips) return null;

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          ইন্টারভিউয়ারকে প্রভাবিত করার টিপস (Recruiter Impression & Pro Tips)
        </h2>
      </div>

      {/* Main Pro Tip Box */}
      {interviewTips.tip && (
        <div className="rounded-xl border border-amber-200/90 bg-amber-50/30 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
          <div className="flex items-center gap-2 font-semibold text-xs text-amber-900 dark:text-amber-300 mb-1.5 uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400 fill-amber-500" />
            <span>Golden Interview Tip</span>
          </div>
          <div className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            <SmartText text={interviewTips.tip} />
          </div>
          {interviewTips.deliveryStrategy && (
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 italic">
              🎯 <strong>ডেলিভারি স্ট্র্যাটেজি:</strong>{" "}
              <SmartText text={interviewTips.deliveryStrategy} />
            </p>
          )}
        </div>
      )}

      {/* Avoid Saying vs Say This Comparison */}
      {interviewTips.avoidSaying && interviewTips.avoidSaying.length > 0 && (
        <div className="space-y-3 pt-1">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            কী বলা এড়িয়ে চলবেন বনাম কী বলবেন (Common Mistakes & Better Ways):
          </h3>

          <div className="space-y-3">
            {interviewTips.avoidSaying.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40"
              >
                {/* Avoid Saying */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400">
                    <XCircle className="h-4 w-4 shrink-0" />
                    <span>Avoid Saying (দুর্বল উত্তর):</span>
                  </div>
                  <div className="text-zinc-700 dark:text-zinc-300 bg-rose-50/60 dark:bg-rose-950/30 p-2.5 rounded-lg border border-rose-200/50 dark:border-rose-900/30">
                    &ldquo;<SmartText text={item.wrong} />&rdquo;
                  </div>
                </div>

                {/* Better Alternative */}
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Say This Instead (উন্নত টেকনিক্যাল উত্তর):</span>
                  </div>
                  <div className="text-zinc-700 dark:text-zinc-300 bg-emerald-50/60 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-200/50 dark:border-emerald-900/30">
                    &ldquo;<SmartText text={item.right} />&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
