"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { UserProgressState } from "@/types";

const LOCAL_STORAGE_KEY = "INTERVIEW_PREP_USER_PROGRESS_V1";

const DEFAULT_STATE: UserProgressState = {
  completedQuestionIds: [],
  favoriteQuestionIds: [],
  notes: {
    "hoisting-var-let-const-functions":
      "মনে রাখতে হবে: Creation phase-এ মেমরি বরাদ্দ হয়। var undefined পায়, কিন্তু let/const TDZ-এ থাকে।",
    "js-closure-and-memory-leaks":
      "React useEffect cleanup এবং clearInterval এর সাথে ক্লোজারের সম্পর্ক ইন্টারভিউতে জোর দিয়ে বলতে হবে।",
  },
  recentlyViewedIds: [
    "hoisting-var-let-const-functions",
    "temporal-dead-zone-tdz",
    "js-closure-and-memory-leaks",
  ],
  practiceStats: {
    totalPracticed: 3,
    knownCount: 2,
    needsRevisionCount: 1,
    history: [],
  },
  readingFontSize: "normal",
  targetDate: undefined,
};

interface UserProgressContextType {
  progress: UserProgressState;
  isLoaded: boolean;
  isCompleted: (id: string) => boolean;
  isFavorite: (id: string) => boolean;
  getNote: (id: string) => string;
  toggleComplete: (id: string) => void;
  toggleFavorite: (id: string) => void;
  saveNote: (id: string, content: string) => void;
  deleteNote: (id: string) => void;
  recordQuestionView: (id: string) => void;
  recordPracticeAnswer: (id: string, result: "known" | "needsRevision") => void;
  setFontSize: (size: "normal" | "large" | "xlarge") => void;
  setTargetDate: (date?: string) => void;
  resetAllProgress: () => void;
  exportBackupJson: () => string;
  importBackupJson: (jsonString: string) => boolean;
}

const UserProgressContext = createContext<UserProgressContextType | null>(null);

export function UserProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgressState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setProgress((prev) => ({
          ...DEFAULT_STATE,
          ...parsed,
          notes: { ...DEFAULT_STATE.notes, ...(parsed.notes || {}) },
          practiceStats: {
            ...DEFAULT_STATE.practiceStats,
            ...(parsed.practiceStats || {}),
          },
        }));
      }
    } catch (e) {
      console.error("Failed to load user progress from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when state updates
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error("Failed to save progress to localStorage:", e);
    }
  }, [progress, isLoaded]);

  // Apply font size scale to HTML document
  useEffect(() => {
    if (typeof document === "undefined") return;
    const size = progress.readingFontSize || "normal";
    document.documentElement.setAttribute("data-font-size", size);
  }, [progress.readingFontSize]);

  const isCompleted = useCallback(
    (id: string) => progress.completedQuestionIds.includes(id),
    [progress.completedQuestionIds]
  );

  const isFavorite = useCallback(
    (id: string) => progress.favoriteQuestionIds.includes(id),
    [progress.favoriteQuestionIds]
  );

  const getNote = useCallback(
    (id: string) => progress.notes[id] || "",
    [progress.notes]
  );

  const toggleComplete = useCallback((id: string) => {
    setProgress((prev) => {
      const exists = prev.completedQuestionIds.includes(id);
      return {
        ...prev,
        completedQuestionIds: exists
          ? prev.completedQuestionIds.filter((item) => item !== id)
          : [...prev.completedQuestionIds, id],
      };
    });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setProgress((prev) => {
      const exists = prev.favoriteQuestionIds.includes(id);
      return {
        ...prev,
        favoriteQuestionIds: exists
          ? prev.favoriteQuestionIds.filter((item) => item !== id)
          : [...prev.favoriteQuestionIds, id],
      };
    });
  }, []);

  const saveNote = useCallback((id: string, content: string) => {
    setProgress((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [id]: content,
      },
    }));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setProgress((prev) => {
      const updatedNotes = { ...prev.notes };
      delete updatedNotes[id];
      return {
        ...prev,
        notes: updatedNotes,
      };
    });
  }, []);

  const recordQuestionView = useCallback((id: string) => {
    setProgress((prev) => {
      if (prev.recentlyViewedIds[0] === id) {
        return prev;
      }
      const filtered = prev.recentlyViewedIds.filter((item) => item !== id);
      return {
        ...prev,
        recentlyViewedIds: [id, ...filtered].slice(0, 10),
      };
    });
  }, []);

  const recordPracticeAnswer = useCallback(
    (id: string, result: "known" | "needsRevision") => {
      setProgress((prev) => {
        const historyItem = { questionId: id, result, timestamp: Date.now() };
        const currentStats = prev.practiceStats || DEFAULT_STATE.practiceStats;
        const newKnown =
          result === "known" ? currentStats.knownCount + 1 : currentStats.knownCount;
        const newNeedsRevision =
          result === "needsRevision"
            ? currentStats.needsRevisionCount + 1
            : currentStats.needsRevisionCount;

        const completedIds =
          result === "known" && !prev.completedQuestionIds.includes(id)
            ? [...prev.completedQuestionIds, id]
            : prev.completedQuestionIds;

        return {
          ...prev,
          completedQuestionIds: completedIds,
          practiceStats: {
            totalPracticed: currentStats.totalPracticed + 1,
            knownCount: newKnown,
            needsRevisionCount: newNeedsRevision,
            history: [historyItem, ...(currentStats.history || [])].slice(0, 50),
          },
        };
      });
    },
    []
  );

  const setFontSize = useCallback((size: "normal" | "large" | "xlarge") => {
    setProgress((prev) => ({ ...prev, readingFontSize: size }));
  }, []);

  const setTargetDate = useCallback((date?: string) => {
    setProgress((prev) => ({ ...prev, targetDate: date }));
  }, []);

  const resetAllProgress = useCallback(() => {
    setProgress(DEFAULT_STATE);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.error("Failed to clear localStorage:", e);
    }
  }, []);

  const exportBackupJson = useCallback(() => {
    return JSON.stringify(progress, null, 2);
  }, [progress]);

  const importBackupJson = useCallback((jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === "object") {
        const updatedState: UserProgressState = {
          completedQuestionIds: Array.isArray(parsed.completedQuestionIds)
            ? parsed.completedQuestionIds
            : [],
          favoriteQuestionIds: Array.isArray(parsed.favoriteQuestionIds)
            ? parsed.favoriteQuestionIds
            : [],
          notes: typeof parsed.notes === "object" && parsed.notes !== null
            ? parsed.notes
            : {},
          recentlyViewedIds: Array.isArray(parsed.recentlyViewedIds)
            ? parsed.recentlyViewedIds
            : [],
          practiceStats: parsed.practiceStats || DEFAULT_STATE.practiceStats,
          readingFontSize: parsed.readingFontSize || "normal",
          targetDate: parsed.targetDate,
        };

        setProgress(updatedState);
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));
        } catch (err) {
          console.error("Error saving imported state:", err);
        }
        return true;
      }
      return false;
    } catch (e) {
      console.error("Invalid JSON import:", e);
      return false;
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      progress,
      isLoaded,
      isCompleted,
      isFavorite,
      getNote,
      toggleComplete,
      toggleFavorite,
      saveNote,
      deleteNote,
      recordQuestionView,
      recordPracticeAnswer,
      setFontSize,
      setTargetDate,
      resetAllProgress,
      exportBackupJson,
      importBackupJson,
    }),
    [
      progress,
      isLoaded,
      isCompleted,
      isFavorite,
      getNote,
      toggleComplete,
      toggleFavorite,
      saveNote,
      deleteNote,
      recordQuestionView,
      recordPracticeAnswer,
      setFontSize,
      setTargetDate,
      resetAllProgress,
      exportBackupJson,
      importBackupJson,
    ]
  );

  return (
    <UserProgressContext.Provider value={contextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error("useUserProgress must be used within a UserProgressProvider");
  }
  return context;
}
