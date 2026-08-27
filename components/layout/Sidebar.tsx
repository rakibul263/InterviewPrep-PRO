"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  HelpCircle,
  FolderTree,
  Bookmark,
  Sparkles,
  Flame,
  LineChart,
  StickyNote,
  Settings,
  BookOpen,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { ALL_QUESTIONS } from "@/data/questions";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/ui/Logo";

export function Sidebar() {
  const pathname = usePathname();
  const { progress } = useUserProgress();

  const totalQuestions = ALL_QUESTIONS.length;
  const completedCount = progress.completedQuestionIds.length;
  const favoriteCount = progress.favoriteQuestionIds.length;
  const mustKnowCount = ALL_QUESTIONS.filter(
    (q) => q.importance === "Must Know"
  ).length;
  const progressPercent =
    totalQuestions > 0 ? Math.round((completedCount / totalQuestions) * 100) : 0;

  const navItems = [
    {
      label: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      label: "NLAP Mock Interview",
      href: "/mock-interviews",
      icon: GraduationCap,
      badge: 36,
      badgeColor: "amber",
      highlight: true,
    },
    {
      label: "Interview Questions",
      href: "/questions",
      icon: HelpCircle,
      badge: totalQuestions,
    },
    {
      label: "Categories",
      href: "/categories",
      icon: FolderTree,
    },
    {
      label: "Must Know",
      href: "/important",
      icon: Sparkles,
      badge: mustKnowCount,
      badgeColor: "amber",
    },
    {
      label: "Favorites",
      href: "/favorites",
      icon: Bookmark,
      badge: favoriteCount > 0 ? favoriteCount : undefined,
    },
    {
      label: "Practice Mode",
      href: "/practice",
      icon: Flame,
      highlight: true,
    },
    {
      label: "Interview Focus",
      href: "/interview-mode",
      icon: BookOpen,
    },
    {
      label: "Progress",
      href: "/progress",
      icon: LineChart,
    },
    {
      label: "Notes",
      href: "/notes",
      icon: StickyNote,
      badge: Object.keys(progress.notes).length || undefined,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 z-30 border-r border-zinc-200/80 bg-zinc-50/50 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-5 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <Logo size="md" href="/" />
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-2 pb-2 text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all",
                isActive
                  ? "bg-zinc-900 text-white shadow-xs dark:bg-zinc-100 dark:text-zinc-900"
                  : item.highlight
                  ? "text-amber-700 hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-amber-950/30"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/60"
              )}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform group-hover:scale-110",
                    isActive
                      ? "text-white dark:text-zinc-900"
                      : item.highlight
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-zinc-400 dark:text-zinc-500"
                  )}
                />
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-full text-[10px] font-mono",
                    isActive
                      ? "bg-white/20 text-white dark:bg-zinc-900/20 dark:text-zinc-900"
                      : item.badgeColor === "amber"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                      : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Preparation Progress Widget */}
      <div className="p-4 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/40 dark:bg-zinc-900/20 m-3 rounded-xl">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Preparation</span>
          </div>
          <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {progressPercent}%
          </span>
        </div>
        <Progress value={progressPercent} className="h-1.5 mb-2" />
        <div className="flex justify-between items-center text-[11px] text-zinc-500 dark:text-zinc-400">
          <span>
            {completedCount} of {totalQuestions} Done
          </span>
          <Link
            href="/progress"
            className="text-zinc-900 dark:text-zinc-100 hover:underline font-medium"
          >
            Details →
          </Link>
        </div>
      </div>
    </aside>
  );
}
