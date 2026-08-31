"use client";

import React, { useState, useEffect } from "react";
import {
  Cpu,
  Server,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  RefreshCw,
  Clock,
  Zap,
  Code2,
  CheckCircle2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Workflow,
  Radio,
} from "lucide-react";
import { Question, VisualDiagram, VisualFlowStep } from "@/types";
import { SmartText } from "@/components/ui/SmartText";
import { cn } from "@/lib/utils";

interface VisualFlowCardProps {
  question: Question;
}

export function VisualFlowCard({ question }: VisualFlowCardProps) {
  const diagram = question.visualDiagram || generateFallbackDiagram(question);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = diagram.steps;
  const currentStep = steps[currentStepIndex] || steps[0];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % steps.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  if (!steps || steps.length === 0) return null;

  return (
    <section className="rounded-2xl border border-indigo-200/70 bg-gradient-to-b from-indigo-50/40 via-white to-white p-5 dark:border-indigo-900/40 dark:from-indigo-950/20 dark:via-zinc-900/60 dark:to-zinc-900/60 shadow-sm space-y-5">
      {/* 1. Header Bar with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100 dark:border-indigo-900/30">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-xs">
              <Workflow className="h-4 w-4" />
            </span>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight flex items-center gap-2">
              <span>{diagram.title || "ভিজ্যুয়াল এক্সিকিউশন ও আর্কিটেকচার ফ্লো"}</span>
              <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-medium">
                <Radio className="h-3 w-3 text-indigo-600 animate-pulse" />
                Interactive Visual
              </span>
            </h2>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {diagram.subtitle || "স্টেপ-বাই-স্টেপ কীভাবে এবং কোথায় প্রসেসিং সম্পন্ন হচ্ছে দেখুন:"}
          </p>
        </div>

        {/* Step Navigation Controls */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 bg-white dark:bg-zinc-800/80 p-1 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs">
          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
            }}
            aria-label="Previous Step"
            className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all shadow-xs"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Auto Play</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setCurrentStepIndex((prev) => (prev + 1) % steps.length);
            }}
            aria-label="Next Step"
            className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 px-2 py-0.5 border-l border-zinc-200 dark:border-zinc-700">
            {currentStepIndex + 1}/{steps.length}
          </span>
        </div>
      </div>

      {/* 2. Interactive Pipeline Steps Progress Track */}
      <div className="relative">
        {/* Horizontal Track Connector Line */}
        <div className="hidden sm:block absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full z-0" />
        <div
          className="hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-300 z-0"
          style={{
            width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Step Nodes */}
        <div className="grid grid-cols-2 sm:flex sm:justify-between items-center gap-2 relative z-10">
          {steps.map((s, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStepIndex(idx);
                }}
                className={cn(
                  "flex items-center sm:flex-col gap-2 p-2 sm:p-2.5 rounded-xl border text-left sm:text-center transition-all cursor-pointer",
                  isActive
                    ? "border-indigo-500 bg-white dark:bg-zinc-800 shadow-md ring-2 ring-indigo-500/20 scale-102"
                    : isCompleted
                    ? "border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300"
                    : "border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
                )}
              >
                {/* Node Circle */}
                <div
                  className={cn(
                    "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all",
                    isActive
                      ? "bg-indigo-600 text-white shadow-indigo-500/30 shadow-md ring-4 ring-indigo-100 dark:ring-indigo-950"
                      : isCompleted
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  )}
                >
                  {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : s.step}
                </div>

                <div className="min-w-0">
                  <div
                    className={cn(
                      "text-xs font-semibold truncate",
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-zinc-800 dark:text-zinc-200"
                    )}
                  >
                    {s.title}
                  </div>
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate hidden sm:block">
                    {s.location}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Active Step Deep Dive Inspector */}
      <div className="rounded-xl border border-indigo-100 dark:border-indigo-950/70 bg-white dark:bg-zinc-900 p-4 sm:p-5 shadow-2xs space-y-4 animate-in fade-in-50 zoom-in-98 duration-200">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 shadow-2xs">
              <StepIcon iconName={currentStep.icon} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  ধাপ {currentStep.step}:
                </span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {currentStep.title}
                </h3>
              </div>
              {currentStep.subtitle && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {currentStep.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/80 text-xs font-medium text-zinc-800 dark:text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">অবস্থান (Location):</span>
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">
              {currentStep.location}
            </strong>
          </div>
        </div>

        {/* Step Explanation in Bengali */}
        <div className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800/60 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
          <SmartText text={currentStep.description} />
        </div>

        {/* Optional Live Code / Packet Inspector */}
        {currentStep.highlightSnippet && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 px-1">
              <span className="flex items-center gap-1">
                <Code2 className="h-3.5 w-3.5 text-indigo-500" />
                <span>কোড / ডেটা প্যাকেট ইন্সপেক্টর (Code & Execution Snapshot):</span>
              </span>
              <span className="font-mono text-[10px] text-zinc-400">Live Context</span>
            </div>
            <pre className="p-3 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs overflow-x-auto border border-zinc-800 shadow-inner">
              <code>{currentStep.highlightSnippet}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}

// Icon Selector
function StepIcon({ iconName }: { iconName?: VisualFlowStep["icon"] }) {
  switch (iconName) {
    case "cpu":
      return <Cpu className="h-5 w-5" />;
    case "server":
      return <Server className="h-5 w-5" />;
    case "database":
      return <Database className="h-5 w-5" />;
    case "network":
      return <Globe className="h-5 w-5" />;
    case "layers":
      return <Layers className="h-5 w-5" />;
    case "shield":
      return <ShieldCheck className="h-5 w-5" />;
    case "refresh":
      return <RefreshCw className="h-5 w-5" />;
    case "clock":
      return <Clock className="h-5 w-5" />;
    case "zap":
      return <Zap className="h-5 w-5" />;
    case "check":
      return <CheckCircle2 className="h-5 w-5" />;
    default:
      return <Sparkles className="h-5 w-5" />;
  }
}

// Fallback visual diagram generator if question does not have explicit diagram
function generateFallbackDiagram(q: Question): VisualDiagram {
  // If code explanation steps exist, use them
  if (q.codeExample?.explanationSteps && q.codeExample.explanationSteps.length > 0) {
    const steps: VisualFlowStep[] = q.codeExample.explanationSteps.map((s, idx) => ({
      step: s.step || idx + 1,
      title: s.title,
      description: s.description,
      location: determineLocation(q.categorySlug, idx),
      icon: determineIcon(q.categorySlug, idx),
    }));

    return {
      title: `${q.category} আর্কিটেকচার ও এক্সিকিউশন ফ্লো`,
      subtitle: `স্টেপ-বাই-স্টেপ কীভাবে ${q.question} কাজ সম্পন্ন করে:`,
      steps,
    };
  }

  // Otherwise generate from howItWorks or shortAnswer
  const howParts = q.detailedExplanation?.howItWorks
    ? q.detailedExplanation.howItWorks.split("->").map((p) => p.trim())
    : [q.shortAnswer.substring(0, 100)];

  const steps: VisualFlowStep[] = howParts.map((part, idx) => ({
    step: idx + 1,
    title: `ধাপ ${idx + 1}: ${part.split(":")[0]?.replace(/^[০-৯১-৯0-9.\s]+/, "") || "প্রসেসিং"}`,
    description: part,
    location: determineLocation(q.categorySlug, idx),
    icon: determineIcon(q.categorySlug, idx),
  }));

  return {
    title: `${q.category} আর্কিটেকচার ও লাইফসাইকেল ফ্লো`,
    subtitle: `${q.question} কীভাবে এক্সিকিউট হয়:`,
    steps: steps.length > 0 ? steps : [
      {
        step: 1,
        title: "রিকোয়েস্ট ইনজেকশন",
        description: q.shortAnswer,
        location: "JavaScript Engine",
        icon: "zap"
      }
    ],
  };
}

function determineLocation(categorySlug: string, stepIndex: number): string {
  const nodeLocations = [
    "V8 Call Stack (মেইন থ্রেড)",
    "Libuv Thread Pool & OS Kernel",
    "Event Queue & Microtasks",
    "Event Loop Phase Execution",
  ];

  const expressLocations = [
    "Client Browser / HTTP Socket",
    "Express Global Middleware Stack",
    "Router & Route Guard Layer",
    "Controller & Response Delivery",
  ];

  const reactLocations = [
    "React Component State Trigger",
    "Render Phase (Virtual DOM Diffing)",
    "Commit Phase (Real DOM Mutation)",
    "Browser Repaint & Layout",
  ];

  if (categorySlug === "nodejs") {
    return nodeLocations[stepIndex % nodeLocations.length];
  }
  if (categorySlug === "expressjs" || categorySlug === "rest-api") {
    return expressLocations[stepIndex % expressLocations.length];
  }
  if (categorySlug === "react" || categorySlug === "nextjs") {
    return reactLocations[stepIndex % reactLocations.length];
  }
  return "Execution Context / Runtime Memory";
}

function determineIcon(categorySlug: string, stepIndex: number): VisualFlowStep["icon"] {
  const icons: VisualFlowStep["icon"][] = ["zap", "cpu", "server", "layers", "database", "shield"];
  return icons[stepIndex % icons.length];
}
