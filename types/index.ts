export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Importance = "Low" | "Medium" | "High" | "Must Know";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color?: string;
  questionCount?: number;
}

export interface CodeExplanationStep {
  step: number;
  title: string;
  description: string;
}

export interface CommonMistake {
  wrong: string;
  right: string;
  explanation?: string;
}

export interface RealWorldUseCase {
  title: string;
  description: string;
  example?: string;
}

export interface FollowUpQuestion {
  question: string;
  targetId?: string;
  shortHint?: string;
}

export interface Question {
  id: string;
  slug: string;
  question: string;
  category: string;
  categorySlug: string;
  difficulty: Difficulty;
  importance: Importance;
  shortAnswer: string;
  easyExplanation: string;
  interviewAnswer: string;
  detailedExplanation: {
    whatItIs: string;
    whyItExists: string;
    howItWorks: string;
    whenToUse: string;
    keyPoints: string[];
  };
  codeExample?: {
    language: string;
    code: string;
    explanationSteps: CodeExplanationStep[];
  };
  realWorldExamples: RealWorldUseCase[];
  interviewTips: {
    tip: string;
    deliveryStrategy?: string;
    avoidSaying: CommonMistake[];
  };
  quickRevision: string[];
  followUpQuestions: FollowUpQuestion[];
  tags: string[];
}

export interface UserProgressState {
  completedQuestionIds: string[];
  favoriteQuestionIds: string[];
  notes: Record<string, string>; // questionId -> note content
  recentlyViewedIds: string[];
  practiceStats: {
    totalPracticed: number;
    knownCount: number;
    needsRevisionCount: number;
    history: {
      questionId: string;
      result: "known" | "needsRevision";
      timestamp: number;
    }[];
  };
  readingFontSize: "normal" | "large" | "xlarge";
  targetDate?: string;
}

export interface QuestionFilterState {
  searchQuery: string;
  category: string;
  difficulty: string;
  importance: string;
  status: "all" | "completed" | "incomplete" | "favorites" | "must-know";
  sortBy: "default" | "importance" | "difficulty" | "category";
}
