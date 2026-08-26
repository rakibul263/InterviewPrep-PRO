import React from "react";
import { Zap } from "lucide-react";
import { SmartText } from "@/components/ui/SmartText";

interface ShortAnswerBoxProps {
  shortAnswer: string;
}

export function ShortAnswerBox({ shortAnswer }: ShortAnswerBoxProps) {
  return (
    <section className="rounded-xl border border-amber-200/90 bg-amber-50/40 p-5 dark:border-amber-900/40 dark:bg-amber-950/20 shadow-2xs">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500 text-white dark:bg-amber-400 dark:text-zinc-950">
          <Zap className="h-3.5 w-3.5 fill-current" />
        </div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-900 dark:text-amber-300">
          সংক্ষিপ্ত উত্তর (Short Answer)
        </h2>
      </div>
      <div className="text-base sm:text-lg leading-relaxed text-zinc-900 dark:text-zinc-100 font-medium">
        <SmartText text={shortAnswer} />
      </div>
    </section>
  );
}
