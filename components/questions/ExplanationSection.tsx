import React from "react";
import { BookOpenText } from "lucide-react";
import { SmartText } from "@/components/ui/SmartText";

interface ExplanationSectionProps {
  easyExplanation: string;
}

export function ExplanationSection({ easyExplanation }: ExplanationSectionProps) {
  // Split paragraphs by double newline for pleasant line breaks and reading rhythm
  const paragraphs = easyExplanation.split("\n\n");

  return (
    <section className="space-y-3 pt-2">
      <div className="flex items-center gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <BookOpenText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          সহজ ব্যাখ্যা (Easy Step-by-Step Explanation)
        </h2>
      </div>

      <div className="space-y-3.5 text-[15px] sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="whitespace-pre-line">
            <SmartText text={p} />
          </p>
        ))}
      </div>
    </section>
  );
}
