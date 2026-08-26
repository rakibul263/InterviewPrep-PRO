"use client";

import React, { useState } from "react";
import { StickyNote, Save, Check, Trash2, Edit3 } from "lucide-react";
import { useUserProgress } from "@/hooks/useUserProgress";
import { Button } from "@/components/ui/button";

interface QuestionNotesProps {
  questionId: string;
}

export function QuestionNotes({ questionId }: QuestionNotesProps) {
  const { getNote, saveNote, deleteNote } = useUserProgress();
  const currentNote = getNote(questionId);

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(currentNote);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    saveNote(questionId, content);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = () => {
    deleteNote(questionId);
    setContent("");
    setIsEditing(false);
  };

  return (
    <section className="rounded-xl border border-zinc-200/80 bg-zinc-50/50 p-5 dark:border-zinc-800/80 dark:bg-zinc-900/40">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-amber-500" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            আমার ব্যক্তিগত নোট (My Personal Notes)
          </h2>
        </div>

        <div className="flex items-center gap-1.5">
          {saved && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              Saved!
            </span>
          )}
          {!isEditing && currentNote && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setContent(currentNote);
                setIsEditing(true);
              }}
              className="h-7 text-xs"
            >
              <Edit3 className="h-3 w-3 mr-1" />
              Edit
            </Button>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your personalized notes, mnemonics, or key interview reminders for this question..."
            rows={4}
            className="w-full rounded-lg border border-zinc-300 bg-white p-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />
          <div className="flex items-center justify-end gap-2">
            {currentNote && (
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                className="h-8 text-xs"
              >
                <Trash2 className="h-3.5 w-3.5 mr-1" />
                Delete
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setContent(currentNote);
                setIsEditing(false);
              }}
              className="h-8 text-xs"
            >
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave} className="h-8 text-xs">
              <Save className="h-3.5 w-3.5 mr-1" />
              Save Note
            </Button>
          </div>
        </div>
      ) : currentNote ? (
        <div className="rounded-lg bg-white p-3.5 border border-zinc-200/60 dark:bg-zinc-900 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-line leading-relaxed">
          {currentNote}
        </div>
      ) : (
        <div className="py-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
            এই প্রশ্নে আপনার কোনো নিজস্ব নোট নেই। ইন্টারভিউতে মনে রাখার জন্য টিপস বা শর্টকাট লিখে রাখতে পারেন।
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            className="text-xs"
          >
            <Edit3 className="h-3 w-3 mr-1" />
            Add Note
          </Button>
        </div>
      )}
    </section>
  );
}
