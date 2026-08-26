"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StickyNote, Search, ArrowRight, Trash2, Edit3, X } from "lucide-react";
import { ALL_QUESTIONS } from "@/data/questions";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BackButton } from "@/components/ui/BackButton";

export default function NotesPage() {
  const { progress, saveNote, deleteNote } = useUserProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const notesList = Object.entries(progress.notes || {})
    .filter(([_, content]) => Boolean(content && content.trim()))
    .map(([questionId, content]) => {
      const question = ALL_QUESTIONS.find(
        (q) => q.id === questionId || q.slug === questionId
      );
      return {
        questionId,
        content,
        question: question || {
          id: questionId,
          slug: questionId,
          question: `Question: ${questionId}`,
          category: "General",
        },
      };
    });

  const filteredNotes = notesList.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.content.toLowerCase().includes(q) ||
      item.question.question.toLowerCase().includes(q) ||
      item.question.category.toLowerCase().includes(q)
    );
  });

  const handleStartEdit = (id: string, currentContent: string) => {
    setEditingId(id);
    setEditContent(currentContent);
  };

  const handleSaveEdit = (id: string) => {
    saveNote(id, editContent);
    setEditingId(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      <BackButton fallbackHref="/" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <StickyNote className="h-6 w-6 text-amber-500" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              My Personal Notes (আমার নোটসমূহ)
            </h1>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Centralized hub for all your custom notes, mnemonics, and interview reminders.
          </p>
        </div>

        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {notesList.length} {notesList.length === 1 ? "Note" : "Notes"} Recorded
        </span>
      </div>

      {/* Search Input */}
      {notesList.length > 0 && (
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Search within your notes or question titles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      {/* Notes Grid */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNotes.map(({ questionId, content, question }) => (
            <div
              key={questionId}
              className="flex flex-col justify-between p-5 rounded-xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-xs space-y-3"
            >
              <div>
                {/* Question Link & Category */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                    {question.category}
                  </span>
                  <Link
                    href={`/questions/${question.slug}`}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Question</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <Link href={`/questions/${question.slug}`} className="block group">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:underline line-clamp-2 mb-3">
                    {question.question}
                  </h3>
                </Link>

                {/* Editable / View Note Content */}
                {editingId === questionId ? (
                  <div className="space-y-2">
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={4}
                      className="w-full p-2.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => handleSaveEdit(questionId)}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-lg bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
                    {content}
                  </div>
                )}
              </div>

              {/* Action Toolbar */}
              {editingId !== questionId && (
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs text-zinc-600 dark:text-zinc-400"
                    onClick={() => handleStartEdit(questionId, content)}
                  >
                    <Edit3 className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40"
                    onClick={() => deleteNote(questionId)}
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Delete
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
          <StickyNote className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
          <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
            {searchQuery ? "No matching notes found" : "No personal notes yet"}
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm mx-auto">
            Add custom notes directly on any question page to capture your personal tips, tricks, and interview reflections.
          </p>
          <Link href="/questions" className="mt-4 inline-block">
            <Button variant="outline" size="sm">
              Browse Questions
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
