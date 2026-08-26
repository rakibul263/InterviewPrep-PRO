"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, Terminal } from "lucide-react";
import { Question } from "@/types";

interface CodeSnippetProps {
  codeExample?: Question["codeExample"];
}

export function CodeSnippet({ codeExample }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  if (!codeExample) return null;

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(codeExample.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="space-y-4 pt-2">
      <div className="flex items-center justify-between pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
            কোড উদাহরণ ও ব্যাখ্যা (Practical Code Example)
          </h2>
        </div>

        <span className="text-xs font-mono text-zinc-400 uppercase">
          {codeExample.language}
        </span>
      </div>

      {/* Code Viewer Container */}
      <div className="rounded-xl border border-zinc-800 bg-[#0d1117] text-zinc-100 overflow-hidden shadow-lg">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800 text-xs">
          <div className="flex items-center gap-2 text-zinc-400 font-mono">
            <Terminal className="h-3.5 w-3.5 text-zinc-400" />
            <span>example.{codeExample.language === "typescript" ? "ts" : "js"}</span>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-xs font-medium text-zinc-300 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-zinc-200 selection:bg-blue-900 selection:text-white">
          <pre className="whitespace-pre">
            <code>{codeExample.code}</code>
          </pre>
        </div>
      </div>

      {/* Step-by-Step Breakdown in Simple Bangla */}
      {codeExample.explanationSteps && codeExample.explanationSteps.length > 0 && (
        <div className="space-y-2.5 pt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            কোডটি কীভাবে কাজ করছে (Step-by-Step Flow):
          </h3>

          <div className="space-y-2">
            {codeExample.explanationSteps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-3 p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800/60 dark:bg-zinc-900/40 text-sm"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs mb-0.5">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
