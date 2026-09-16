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

export interface VisualFlowStep {
  step: number;
  title: string;
  subtitle?: string;
  description: string;
  location: string; // e.g. "Client Browser", "V8 Call Stack", "Libuv Thread Pool", "OS Kernel", "Express Middleware Stack", "Database", "Event Loop"
  badge?: string;
  highlightSnippet?: string;
  icon?: "cpu" | "server" | "database" | "network" | "layers" | "shield" | "refresh" | "clock" | "zap" | "code" | "check";
}

export interface VisualDiagram {
  title: string;
  subtitle?: string;
  steps: VisualFlowStep[];
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
  visualDiagram?: VisualDiagram;
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

export interface MockInterviewContent {
  quickAnswer: string;
  interviewSpeech: string;
  deepDive: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  commonMistakes?: string[];
  proTips?: string[];
}

export type MockInterviewTopic =
  | "React Core"
  | "Next.js App Router"
  | "Performance & Data"
  | "Security & Architecture"
  | "Interpersonal & HR"
  | "MongoDB & NoSQL"
  | "SQL & Relational DB"
  | "Transactions & ACID"
  | "Prisma ORM"
  | "Scaling & Optimization"
  | (string & {});

export interface MockInterviewItem {
  id: string;
  questionNumber: number;
  module?: string;
  question: string;
  banglaQuestion: string;
  topic: MockInterviewTopic;
  difficulty: Difficulty;
  importance: Importance;
  tags: string[];
  english: MockInterviewContent;
  bangla: MockInterviewContent;
}

export interface MockInterviewSession {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string; // ISO date string e.g. "2026-08-27"
  formattedDate: string; // e.g. "August 27, 2026"
  category: string; // "React & Next.js Core & Advanced"
  description: string;
  totalQuestions: number;
  durationEstimate: string;
  questions: MockInterviewItem[];
}

export interface QuestionFilterState {
  searchQuery: string;
  category: string;
  difficulty: string;
  importance: string;
  status: "all" | "completed" | "incomplete" | "favorites" | "must-know";
  sortBy: "default" | "importance" | "difficulty" | "category";
}

