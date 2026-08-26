"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  href?: string;
}

export function Logo({
  className,
  size = "md",
  showText = true,
  href = "/",
}: LogoProps) {
  const iconSizeClasses = {
    sm: "h-7 w-7 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
  };

  const titleSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base font-bold",
  };

  const content = (
    <div className={cn("flex items-center gap-2.5 group select-none", className)}>
      {/* Modern Gradient Hexagon / Code Emblem */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-300 dark:text-zinc-950 shadow-md ring-1 ring-zinc-700/30 dark:ring-zinc-300/40 group-hover:scale-105 transition-all duration-200",
          iconSizeClasses[size]
        )}
      >
        {/* Subtle geometric backdrop */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-amber-400 dark:text-amber-600"
        >
          {/* Stylized Terminal / Interview Sparkle */}
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" strokeWidth="2.5" />
        </svg>

        {/* Small top-right status dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans",
                titleSizeClasses[size]
              )}
            >
              Interview<span className="text-amber-600 dark:text-amber-400">Prep</span>
            </span>
            <span className="px-1 py-0.2 rounded bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 text-[9px] font-mono font-bold tracking-wider uppercase">
              PRO
            </span>
          </div>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
            বাংলা ইন্টারভিউ পোর্টাল
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
