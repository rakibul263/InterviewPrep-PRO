"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { TECH_GLOSSARY, TechGlossaryTerm } from "@/data/glossary";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartTextProps {
  text: string;
  className?: string;
}

export function SmartText({ text, className }: SmartTextProps) {
  if (!text) return null;

  // 1. Tokenize markdown elements: Bold (**text**) and Inline Code (`code`)
  const tokens = parseMarkdownTokens(text);

  return (
    <span className={cn("leading-relaxed", className)}>
      {tokens.map((token, index) => {
        if (token.type === "bold") {
          return (
            <strong
              key={index}
              className="font-semibold text-zinc-900 dark:text-zinc-100"
            >
              <GlossaryText text={token.content} />
            </strong>
          );
        }

        if (token.type === "code") {
          return (
            <code
              key={index}
              className="px-1.5 py-0.5 mx-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[13px] font-mono text-amber-700 dark:text-amber-300 font-medium inline-block align-baseline"
            >
              {token.content}
            </code>
          );
        }

        return <GlossaryText key={index} text={token.content} />;
      })}
    </span>
  );
}

// Token types for markdown inline parser
interface Token {
  type: "text" | "bold" | "code";
  content: string;
}

function parseMarkdownTokens(input: string): Token[] {
  const tokens: Token[] = [];
  // Regex to match **bold** or `code`
  const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    const fullMatch = match[0];
    const matchIndex = match.index;

    // Push preceding text if any
    if (matchIndex > lastIndex) {
      const plain = input.substring(lastIndex, matchIndex).replace(/\*\*/g, "");
      if (plain) {
        tokens.push({ type: "text", content: plain });
      }
    }

    if (fullMatch.startsWith("**") && match[2] !== undefined) {
      tokens.push({ type: "bold", content: match[2] });
    } else if (fullMatch.startsWith("`") && match[3] !== undefined) {
      tokens.push({ type: "code", content: match[3] });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    const remaining = input.substring(lastIndex).replace(/\*\*/g, "");
    if (remaining) {
      tokens.push({ type: "text", content: remaining });
    }
  }

  return tokens.length > 0 ? tokens : [{ type: "text", content: input.replace(/\*\*/g, "") }];
}

// Glossary Matcher component for text segments
function GlossaryText({ text }: { text: string }) {
  const glossaryKeys = Object.keys(TECH_GLOSSARY);
  if (glossaryKeys.length === 0 || !text) {
    return <>{text}</>;
  }

  // Create searchable terms map
  const searchTermsMap = new Map<string, TechGlossaryTerm>();
  glossaryKeys.forEach((key) => {
    const termObj = TECH_GLOSSARY[key];
    searchTermsMap.set(termObj.term.toLowerCase(), termObj);
    searchTermsMap.set(key.toLowerCase(), termObj);
    termObj.aliases?.forEach((alias) => {
      searchTermsMap.set(alias.toLowerCase(), termObj);
    });
  });

  const sortedTerms = Array.from(searchTermsMap.keys()).sort(
    (a, b) => b.length - a.length
  );

  const escapedTerms = sortedTerms.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedTerms.join("|")})\\b`, "gi");

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }

    const termObj = searchTermsMap.get(matchedText.toLowerCase());

    if (termObj) {
      parts.push(
        <TechTermItem
          key={`${matchIndex}-${matchedText}`}
          termObj={termObj}
          displayWord={matchedText}
        />
      );
    } else {
      parts.push(matchedText);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
}

function TechTermItem({
  termObj,
  displayWord,
}: {
  termObj: TechGlossaryTerm;
  displayWord: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <span className="relative inline-block" ref={triggerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center text-zinc-900 dark:text-zinc-100 font-medium underline decoration-amber-400/70 hover:decoration-amber-500 underline-offset-3 decoration-dotted hover:bg-amber-500/10 px-1 py-0.2 rounded transition-all cursor-help"
        aria-describedby={uniqueId}
      >
        <span>{displayWord}</span>
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div
          id={uniqueId}
          ref={popoverRef}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 sm:w-80 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl text-left animate-in fade-in-50 zoom-in-95 duration-150"
        >
          {/* Popover Header */}
          <div className="flex items-start justify-between gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {termObj.term}
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 font-medium">
                  {termObj.category}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-0.5 rounded"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Simple Bangla Explanation */}
          <div className="mt-2 space-y-2">
            <div className="text-[11px] font-semibold text-amber-900 dark:text-amber-300">
              {termObj.banglaTitle}
            </div>
            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {termObj.shortExplanation}
            </p>

            {/* Quick Pro Tip */}
            {termObj.exampleOrTip && (
              <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/50 dark:border-zinc-800/50 flex items-start gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-tight">
                  <strong className="text-zinc-800 dark:text-zinc-200 font-semibold">
                    টিপ:{" "}
                  </strong>
                  {termObj.exampleOrTip}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Arrow Pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-white dark:border-t-zinc-900" />
        </div>
      )}
    </span>
  );
}
