import React from "react";
import { CheckCheck, Lightbulb } from "lucide-react";
import { SmartText } from "@/components/ui/SmartText";

interface QuickRevisionCardProps {
  quickRevision?: string[];
}

export function QuickRevisionCard({ quickRevision }: QuickRevisionCardProps) {
  if (!quickRevision || quickRevision.length === 0) return null;

  return (
    <section className="rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 text-white dark:bg-emerald-500">
          <Lightbulb className="h-3.5 w-3.5 fill-current" />
        </div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
          এক নজরে মনে রাখুন (Quick Revision - Remember Key Points)
        </h2>
      </div>

      <ul className="space-y-2">
        {quickRevision.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed"
          >
            <CheckCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <SmartText text={point} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
