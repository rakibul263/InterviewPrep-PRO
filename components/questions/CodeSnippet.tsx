"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  Code2,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Question } from "@/types";
import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  codeExample?: Question["codeExample"];
}

// Parse code into lines with optional step annotations
function parseCodeLines(code: string): string[] {
  return code.split("\n");
}

// Map step index to code line ranges (heuristic based on step order)
function getHighlightedLineRange(
  code: string,
  stepIndex: number,
  totalSteps: number
): { start: number; end: number } {
  const lines = parseCodeLines(code);
  const totalLines = lines.length;
  // Divide code lines proportionally among steps
  const linesPerStep = Math.ceil(totalLines / totalSteps);
  const start = stepIndex * linesPerStep;
  const end = Math.min(start + linesPerStep - 1, totalLines - 1);
  return { start, end };
}

// Color palette for steps
const STEP_COLORS = [
  {
    bg: "rgba(99,102,241,0.18)",
    border: "#6366f1",
    text: "#a5b4fc",
    badge: "bg-indigo-600",
    glow: "shadow-indigo-500/40",
  },
  {
    bg: "rgba(16,185,129,0.14)",
    border: "#10b981",
    text: "#6ee7b7",
    badge: "bg-emerald-600",
    glow: "shadow-emerald-500/40",
  },
  {
    bg: "rgba(245,158,11,0.14)",
    border: "#f59e0b",
    text: "#fcd34d",
    badge: "bg-amber-500",
    glow: "shadow-amber-500/40",
  },
  {
    bg: "rgba(236,72,153,0.14)",
    border: "#ec4899",
    text: "#f9a8d4",
    badge: "bg-pink-600",
    glow: "shadow-pink-500/40",
  },
  {
    bg: "rgba(59,130,246,0.14)",
    border: "#3b82f6",
    text: "#93c5fd",
    badge: "bg-blue-600",
    glow: "shadow-blue-500/40",
  },
  {
    bg: "rgba(168,85,247,0.14)",
    border: "#a855f7",
    text: "#d8b4fe",
    badge: "bg-purple-600",
    glow: "shadow-purple-500/40",
  },
  {
    bg: "rgba(20,184,166,0.14)",
    border: "#14b8a6",
    text: "#5eead4",
    badge: "bg-teal-600",
    glow: "shadow-teal-500/40",
  },
  {
    bg: "rgba(239,68,68,0.14)",
    border: "#ef4444",
    text: "#fca5a5",
    badge: "bg-red-600",
    glow: "shadow-red-500/40",
  },
];

export function CodeSnippet({ codeExample }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showCallStack, setShowCallStack] = useState(true);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);

  if (!codeExample) return null;

  const steps = codeExample.explanationSteps || [];
  const codeLines = parseCodeLines(codeExample.code);
  const totalSteps = steps.length;

  const color = STEP_COLORS[currentStep % STEP_COLORS.length];
  const highlightRange =
    totalSteps > 0
      ? getHighlightedLineRange(codeExample.code, currentStep, totalSteps)
      : { start: 0, end: codeLines.length - 1 };

  // Auto-play
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2800);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalSteps]);

  // Scroll active line into view
  useEffect(() => {
    if (activeLineRef.current && codeContainerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentStep]);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(codeExample.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleStart = () => {
    setHasStarted(true);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStep((p) => Math.max(0, p - 1));
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStep((p) => Math.min(totalSteps - 1, p + 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setHasStarted(false);
  };

  const stepData = steps[currentStep];
  const progress = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 100;

  return (
    <section className="space-y-0 pt-2" id="code-execution-visualizer">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800/80 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/30">
            <Code2 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-none">
              কোড এক্সিকিউশন ভিজ্যুয়ালাইজার
            </h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              Interactive Code Execution Flow — লাইন-বাই-লাইন দেখুন কোড কীভাবে চলছে
            </p>
          </div>
        </div>
        <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
          <Zap className="h-3 w-3 text-amber-400" />
          {codeExample.language.toUpperCase()}
        </span>
      </div>

      {/* Main Visualizer Card */}
      <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d1117] shadow-2xl shadow-black/40">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-zinc-800">
          <div className="flex items-center gap-3">
            {/* Traffic Lights */}
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28ca42]" />
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs">
              <Terminal className="h-3 w-3" />
              <span>
                example.{codeExample.language === "typescript" ? "ts" : "js"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {totalSteps > 0 && (
              <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: color.border }}
                />
                Step {currentStep + 1}/{totalSteps}
              </div>
            )}
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
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Split Layout: Code + Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
          {/* ═══════════════════════════════════════
              LEFT PANEL: Annotated Code View
          ═══════════════════════════════════════ */}
          <div
            ref={codeContainerRef}
            className="overflow-y-auto max-h-[420px] border-b lg:border-b-0 lg:border-r border-zinc-800 relative"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="p-4 font-mono text-xs sm:text-[13px] leading-6 select-text">
              {codeLines.map((line, idx) => {
                const isHighlighted =
                  hasStarted &&
                  idx >= highlightRange.start &&
                  idx <= highlightRange.end;
                const isFirstHighlighted = hasStarted && idx === highlightRange.start;

                return (
                  <div
                    key={idx}
                    ref={isFirstHighlighted ? activeLineRef : undefined}
                    className={cn(
                      "relative flex items-start gap-3 px-2 py-0.5 rounded-md transition-all duration-300 group"
                    )}
                    style={
                      isHighlighted
                        ? {
                            backgroundColor: color.bg,
                            borderLeft: `2px solid ${color.border}`,
                            paddingLeft: "10px",
                          }
                        : { borderLeft: "2px solid transparent" }
                    }
                  >
                    {/* Line Number */}
                    <span
                      className={cn(
                        "shrink-0 select-none text-[11px] w-6 text-right transition-all duration-300",
                        isHighlighted ? "font-bold" : "text-zinc-600"
                      )}
                      style={isHighlighted ? { color: color.text } : {}}
                    >
                      {idx + 1}
                    </span>

                    {/* Code Content */}
                    <span
                      className={cn(
                        "flex-1 whitespace-pre transition-all duration-200",
                        isHighlighted
                          ? "text-zinc-100"
                          : "text-zinc-400"
                      )}
                    >
                      {line || " "}
                    </span>

                    {/* Execution Pointer for first highlighted line */}
                    {isFirstHighlighted && (
                      <span
                        className={cn(
                          "absolute -right-1 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg",
                          color.badge,
                          color.glow
                        )}
                        style={{ color: "#fff", zIndex: 10 }}
                      >
                        <ArrowRight className="h-2.5 w-2.5" />
                        <span>EXEC</span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════
              RIGHT PANEL: Execution Inspector
          ═══════════════════════════════════════ */}
          <div className="flex flex-col">
            {!hasStarted ? (
              /* Start Screen */
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div
                  className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    boxShadow: "0 0 40px rgba(99,102,241,0.4)",
                  }}
                >
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100 mb-1">
                    এক্সিকিউশন শুরু করুন
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-xs">
                    Play চাপলে দেখবেন কোড কীভাবে লাইন-বাই-লাইন execute হচ্ছে এবং প্রতিটি ধাপে কী হচ্ছে।
                  </p>
                </div>
                {totalSteps > 0 && (
                  <button
                    onClick={handleStart}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.5)",
                    }}
                  >
                    <Play className="h-4 w-4 fill-white" />
                    Auto Play শুরু করুন
                  </button>
                )}
                {totalSteps === 0 && (
                  <p className="text-xs text-zinc-600 italic">
                    No step-by-step breakdown available for this question.
                  </p>
                )}
              </div>
            ) : (
              /* Active Execution Inspector */
              <div className="flex-1 flex flex-col min-h-0">
                {/* Step Info Header */}
                <div
                  className="p-4 border-b border-zinc-800/80"
                  style={{ borderBottom: `1px solid ${color.border}30` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={cn(
                        "inline-flex items-center justify-center h-6 w-6 rounded-full text-[11px] font-bold text-white shadow-lg",
                        color.badge,
                        color.glow
                      )}
                    >
                      {currentStep + 1}
                    </span>
                    <div className="flex-1">
                      <div
                        className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                        style={{ color: color.text }}
                      >
                        ▶ Executing Step {currentStep + 1} of {totalSteps}
                      </div>
                      <h3 className="text-sm font-bold text-zinc-100 leading-tight">
                        {stepData?.title}
                      </h3>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1 rounded-full bg-zinc-800 mt-2 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${color.border}, ${STEP_COLORS[(currentStep + 1) % STEP_COLORS.length].border})`,
                        boxShadow: `0 0 8px ${color.border}`,
                      }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div
                    className="p-3.5 rounded-xl text-sm leading-relaxed text-zinc-300 border"
                    style={{
                      backgroundColor: color.bg,
                      borderColor: `${color.border}30`,
                    }}
                  >
                    {stepData?.description}
                  </div>

                  {/* Line Range Info */}
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: color.border }}
                    />
                    <span>
                      Lines {highlightRange.start + 1}–{highlightRange.end + 1} highlighted
                    </span>
                  </div>

                  {/* Mini Call Stack / Execution Context */}
                  <div className="mt-4">
                    <button
                      onClick={() => setShowCallStack((s) => !s)}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer mb-2"
                    >
                      <Cpu className="h-3 w-3 text-indigo-400" />
                      <span>Execution Context</span>
                      {showCallStack ? (
                        <ChevronUp className="h-3 w-3" />
                      ) : (
                        <ChevronDown className="h-3 w-3" />
                      )}
                    </button>
                    {showCallStack && (
                      <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 space-y-1.5">
                        {/* Call Stack Entries — show completed steps as stack frames */}
                        {steps.slice(0, currentStep + 1).map((s, i) => {
                          const c = STEP_COLORS[i % STEP_COLORS.length];
                          const isActive = i === currentStep;
                          return (
                            <div
                              key={i}
                              className={cn(
                                "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] font-mono transition-all",
                                isActive
                                  ? "text-zinc-100"
                                  : "text-zinc-500"
                              )}
                              style={
                                isActive
                                  ? {
                                      backgroundColor: c.bg,
                                      border: `1px solid ${c.border}40`,
                                    }
                                  : {}
                              }
                            >
                              <Layers
                                className="h-3 w-3 shrink-0"
                                style={{ color: c.border }}
                              />
                              <span className="truncate">{s.title}</span>
                              {isActive && (
                                <span
                                  className="ml-auto shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded"
                                  style={{
                                    backgroundColor: c.border + "20",
                                    color: c.text,
                                  }}
                                >
                                  ← ACTIVE
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Playback Controls ─── */}
            {totalSteps > 0 && (
              <div className="p-3 border-t border-zinc-800 bg-[#0d1117]">
                {/* Step Dots */}
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  {steps.map((_, i) => {
                    const c = STEP_COLORS[i % STEP_COLORS.length];
                    const isDone = i < currentStep;
                    const isActive = i === currentStep && hasStarted;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setHasStarted(true);
                          setIsPlaying(false);
                          setCurrentStep(i);
                        }}
                        className={cn(
                          "rounded-full transition-all duration-300 cursor-pointer",
                          isActive
                            ? "h-2.5 w-6"
                            : isDone
                            ? "h-2 w-2"
                            : "h-2 w-2 bg-zinc-700 hover:bg-zinc-500"
                        )}
                        style={
                          isActive
                            ? { backgroundColor: c.border, boxShadow: `0 0 6px ${c.border}` }
                            : isDone
                            ? { backgroundColor: c.border + "80" }
                            : {}
                        }
                        title={`Step ${i + 1}: ${steps[i]?.title}`}
                      />
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={handleReset}
                    title="Reset"
                    className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>

                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0 || !hasStarted}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => {
                      if (!hasStarted) {
                        handleStart();
                      } else {
                        setIsPlaying((p) => !p);
                      }
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                    style={{
                      background: isPlaying
                        ? "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
                        : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                      boxShadow: isPlaying
                        ? "0 4px 16px rgba(245,158,11,0.4)"
                        : "0 4px 16px rgba(99,102,241,0.4)",
                    }}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 fill-white" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-white" />
                        {hasStarted ? "Play" : "Start"}
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentStep === totalSteps - 1}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Speed indicator */}
                  <div className="ml-1 text-[10px] font-mono text-zinc-600 select-none">
                    2.8s
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          STEP TIMELINE (below the card)
      ═══════════════════════════════════════ */}
      {totalSteps > 0 && (
        <div className="pt-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            Step-by-Step Execution Timeline
          </h3>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 z-0" />

            <div className="space-y-2 relative z-10">
              {steps.map((step, idx) => {
                const c = STEP_COLORS[idx % STEP_COLORS.length];
                const isActive = hasStarted && idx === currentStep;
                const isDone = hasStarted && idx < currentStep;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setHasStarted(true);
                      setIsPlaying(false);
                      setCurrentStep(idx);
                    }}
                    className={cn(
                      "w-full flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer group/step",
                      isActive
                        ? "shadow-lg"
                        : isDone
                        ? "border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/40 dark:bg-zinc-900/30"
                        : "border-zinc-200/60 dark:border-zinc-800/40 bg-white/60 dark:bg-zinc-900/20 hover:border-zinc-300 dark:hover:border-zinc-700"
                    )}
                    style={
                      isActive
                        ? {
                            backgroundColor: c.bg.replace("0.18", "0.08").replace("0.14", "0.06"),
                            borderColor: c.border + "60",
                            boxShadow: `0 0 0 1px ${c.border}30, 0 4px 20px ${c.border}15`,
                          }
                        : {}
                    }
                  >
                    {/* Step Circle */}
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-md transition-all duration-300 mt-0.5"
                      )}
                      style={
                        isActive
                          ? {
                              background: `linear-gradient(135deg, ${c.border}, ${STEP_COLORS[(idx + 1) % STEP_COLORS.length].border})`,
                              color: "#fff",
                              boxShadow: `0 0 16px ${c.border}60, 0 4px 10px ${c.border}40`,
                            }
                          : isDone
                          ? {
                              background: "#10b981",
                              color: "#fff",
                            }
                          : {
                              background: "#e4e4e7",
                              color: "#71717a",
                            }
                      }
                    >
                      {isDone ? "✓" : step.step}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={cn(
                            "text-sm font-semibold leading-tight transition-colors",
                            isActive
                              ? "text-zinc-900 dark:text-zinc-50"
                              : isDone
                              ? "text-zinc-700 dark:text-zinc-300"
                              : "text-zinc-600 dark:text-zinc-400"
                          )}
                        >
                          {step.title}
                        </h4>
                        {isActive && (
                          <span
                            className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: c.border + "20",
                              color: c.text,
                              border: `1px solid ${c.border}40`,
                            }}
                          >
                            ▶ Running
                          </span>
                        )}
                        {isDone && (
                          <span className="shrink-0 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                            ✓ Done
                          </span>
                        )}
                      </div>
                      <p
                        className={cn(
                          "text-xs mt-1 leading-relaxed transition-all",
                          isActive
                            ? "text-zinc-700 dark:text-zinc-300"
                            : "text-zinc-500 dark:text-zinc-500 line-clamp-2"
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
