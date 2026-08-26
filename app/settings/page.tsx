"use client";

import React, { useState, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Settings,
  Moon,
  Sun,
  Laptop,
  Type,
  Download,
  Upload,
  RotateCcw,
  Check,
  AlertTriangle,
  Calendar,
  Sparkles,
  FileJson,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/BackButton";

export default function SettingsPage() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const {
    progress,
    setFontSize,
    setTargetDate,
    resetAllProgress,
    exportBackupJson,
    importBackupJson,
  } = useUserProgress();

  const [importText, setImportText] = useState("");
  const [importStatus, setImportStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [resetFeedback, setResetFeedback] = useState(false);
  const [exportFeedback, setExportFeedback] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. Export Handler
  const handleExport = () => {
    const jsonStr = exportBackupJson();
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `interview-prep-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportFeedback(true);
    setTimeout(() => setExportFeedback(false), 2500);
  };

  // 2. Import from Text
  const handleImportText = () => {
    if (!importText.trim()) return;
    const success = importBackupJson(importText);
    if (success) {
      setImportStatus({
        type: "success",
        message: "ব্যাকআপ ডেটা সফলভাবে রিস্টোর হয়েছে! (Data restored successfully)",
      });
      setImportText("");
      setTimeout(() => setImportStatus(null), 3500);
    } else {
      setImportStatus({
        type: "error",
        message: "ভুল ফরম্যাট! অনুগ্রহ করে সঠিক JSON ফাইল পেস্ট করুন।",
      });
      setTimeout(() => setImportStatus(null), 4000);
    }
  };

  // 3. Import from File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importBackupJson(content);
        if (success) {
          setImportStatus({
            type: "success",
            message: `${file.name} ফাইল থেকে ডেটা সফলভাবে রিস্টোর হয়েছে!`,
          });
          setTimeout(() => setImportStatus(null), 3500);
        } else {
          setImportStatus({
            type: "error",
            message: "ফাইলটি সঠিক ব্যাকআপ JSON ফাইল নয়।",
          });
          setTimeout(() => setImportStatus(null), 4000);
        }
      }
    };
    reader.readAsText(file);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 4. Reset All Progress
  const handleReset = () => {
    resetAllProgress();
    setShowResetConfirm(false);
    setResetFeedback(true);
    setTimeout(() => setResetFeedback(false), 3000);
  };

  // Date Calculations
  const calculateDaysRemaining = () => {
    if (!progress.targetDate) return null;
    const target = new Date(progress.targetDate);
    const today = new Date();
    target.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = calculateDaysRemaining();

  const setDatePreset = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const formatted = d.toISOString().slice(0, 10);
    setTargetDate(formatted);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12 animate-in fade-in-50 duration-200">
      <BackButton fallbackHref="/" />

      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
            <Settings className="h-4 w-4" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Settings & Preferences
          </h1>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Customize reading typography, themes, target interview date, and manage your progress backups.
        </p>
      </div>

      {/* 1. Theme Configuration */}
      <section className="p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Interface Theme (থিম নির্বাচন)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Select light, dark, or automatic system theme.
            </p>
          </div>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 capitalize">
            Current: {theme} {theme === "system" ? `(${resolvedTheme})` : ""}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Light (লাইট)", value: "light", icon: Sun },
            { label: "Dark (ডার্ক)", value: "dark", icon: Moon },
            { label: "System (সিস্টেম)", value: "system", icon: Laptop },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = theme === item.value;
            return (
              <button
                key={item.value}
                onClick={() => setTheme(item.value)}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-md font-semibold"
                    : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-emerald-400" />
                )}
                <Icon className="h-5 w-5 mb-1.5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Reading Typography & Font Size */}
      <section className="p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Reading Font Size (বাংলা ফন্ট সাইজ)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Adjust text scaling for comfortable reading across all questions.
            </p>
          </div>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 capitalize">
            {progress.readingFontSize || "normal"}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Normal (স্বাভাবিক)", value: "normal" as const, scale: "100%" },
            { label: "Large (বড়)", value: "large" as const, scale: "115%" },
            { label: "Extra Large (আরও বড়)", value: "xlarge" as const, scale: "130%" },
          ].map((item) => {
            const isSelected = (progress.readingFontSize || "normal") === item.value;
            return (
              <button
                key={item.value}
                onClick={() => setFontSize(item.value)}
                className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 shadow-md font-semibold"
                    : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-emerald-400" />
                )}
                <Type className="h-4 w-4 mb-1" />
                <span className="text-xs">{item.label}</span>
                <span className="text-[10px] opacity-70 font-mono mt-0.5">{item.scale}</span>
              </button>
            );
          })}
        </div>

        {/* Live Font Size Reading Preview */}
        <div className="p-3.5 rounded-lg border border-zinc-200/60 bg-zinc-50/70 dark:border-zinc-800 dark:bg-zinc-950/60">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 block mb-1">
            লাইভ প্রিভিউ (Live Preview):
          </span>
          <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            JavaScript হলো একটি সিঙ্গল-থ্রেডেড নন-ব্লকিং ল্যাঙ্গুয়েজ। ইভেন্ট লুপের মাধ্যমে এটি অ্যাসিনক্রোনাস কাজ পরিচালনা করে।
          </p>
        </div>
      </section>

      {/* 3. Target Interview Date & Countdown */}
      <section className="p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Target Interview Date (ইন্টারভিউয়ের সম্ভাব্য তারিখ ও কাউন্টডাউন)
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Set your target date to activate the countdown timer and stay focused.
          </p>
        </div>

        {/* Live Countdown Card if Set */}
        {progress.targetDate && daysRemaining !== null && (
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-900/50 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                  {daysRemaining > 0
                    ? `ইন্টারভিউ আর মাত্র ${daysRemaining} দিন বাকি!`
                    : daysRemaining === 0
                    ? "আজই আপনার ইন্টারভিউয়ের দিন! শুভকামনা! 🎉"
                    : `ইন্টারভিউয়ের তারিখ ${Math.abs(daysRemaining)} দিন আগে অতিক্রান্ত হয়েছে।`}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  Target Date: {progress.targetDate}
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setTargetDate(undefined)}
              className="h-7 text-xs border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200"
            >
              Clear
            </Button>
          </div>
        )}

        {/* Date Input & Quick Presets */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="date"
              value={progress.targetDate || ""}
              onChange={(e) => setTargetDate(e.target.value || undefined)}
              className="h-9 px-3 rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer"
            />
            {progress.targetDate && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <Check className="h-3.5 w-3.5" />
                Date Saved!
              </span>
            )}
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-zinc-400 font-medium">Quick Presets:</span>
            {[
              { label: "+7 Days", days: 7 },
              { label: "+15 Days", days: 15 },
              { label: "+30 Days", days: 30 },
              { label: "+60 Days", days: 60 },
            ].map((p) => (
              <button
                key={p.days}
                onClick={() => setDatePreset(p.days)}
                className="px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Backup, Export & Import */}
      <section className="p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Data Backup & Restore (ডেটা ব্যাকআপ ও রিস্টোর)
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Download your completed questions, bookmarks, notes, and practice history as a JSON file or restore from a previous backup.
          </p>
        </div>

        {/* Status Alert */}
        {importStatus && (
          <div
            className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 animate-in fade-in-50 ${
              importStatus.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
                : "bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800"
            }`}
          >
            {importStatus.type === "success" ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
            ) : (
              <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
            )}
            <span>{importStatus.message}</span>
          </div>
        )}

        {/* Action Buttons: Export & File Upload */}
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-1.5" />
            Export Backup (JSON File)
          </Button>

          {exportFeedback && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              File Downloaded!
            </span>
          )}

          {/* Hidden File Input & Trigger */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json"
            className="hidden"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4 mr-1.5" />
            Upload Backup File (.json)
          </Button>
        </div>

        {/* Paste JSON Import */}
        <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
          <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300 block">
            Or Paste JSON Text Content Directly:
          </label>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder='Paste your backup JSON code here: {"completedQuestionIds": [...], ...}'
            rows={3}
            className="w-full p-2.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 font-mono text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
          <div className="flex justify-end">
            <Button
              size="sm"
              onClick={handleImportText}
              disabled={!importText.trim()}
              className="text-xs"
            >
              <Upload className="h-4 w-4 mr-1.5" />
              Restore from Text
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Danger Zone: Reset Progress */}
      <section className="p-5 rounded-xl border border-rose-200 bg-rose-50/20 dark:border-rose-950 dark:bg-rose-950/10 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-rose-800 dark:text-rose-400">
              Reset Progress (অগ্রগতি রিসেট)
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
              Clear all completed checkmarks, bookmarks, custom notes, and start fresh.
            </p>
          </div>

          {resetFeedback && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              Reset Completed!
            </span>
          )}
        </div>

        {showResetConfirm ? (
          <div className="p-4 rounded-xl bg-rose-100/90 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-900 dark:text-rose-200">
              <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600" />
              <span>আপনি কি নিশ্চিত যে সমস্ত অগ্রগতি ও নোট রিসেট করতে চান? (Are you sure?)</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                className="text-xs"
                onClick={handleReset}
              >
                হ্যাঁ, রিসেট করুন (Yes, Reset)
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setShowResetConfirm(false)}
              >
                বাতিল (Cancel)
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => setShowResetConfirm(true)}
            className="text-xs"
          >
            <RotateCcw className="h-4 w-4 mr-1.5" />
            Reset All Progress
          </Button>
        )}
      </section>
    </div>
  );
}
