import React from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { RealWorldUseCase } from "@/types";

interface RealWorldBoxProps {
  realWorldExamples?: RealWorldUseCase[];
}

export function RealWorldBox({ realWorldExamples }: RealWorldBoxProps) {
  if (!realWorldExamples || realWorldExamples.length === 0) return null;

  return (
    <section className="space-y-3 pt-2">
      <div className="flex items-center gap-2 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <Briefcase className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
          বাস্তব জীবনের প্রোডাকশন ব্যবহার (Real-World Use Cases)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {realWorldExamples.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/40 dark:border-zinc-800/80 dark:bg-zinc-900/40"
          >
            <div className="flex items-center justify-between font-semibold text-xs text-zinc-900 dark:text-zinc-100 mb-1">
              <span>{item.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
