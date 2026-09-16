import { MockInterviewSession, MockInterviewItem } from "@/types";
import {
  MOCK_INTERVIEW_SESSIONS as REACT_MOCK_SESSIONS,
  REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026,
} from "./react-nextjs-august-2026";
import {
  DATABASE_MOCK_SESSION,
  DATABASE_SQL_NOSQL_MOCK_QUESTIONS,
} from "./database-sql-nosql";

export const MOCK_INTERVIEW_SESSIONS: MockInterviewSession[] = [
  DATABASE_MOCK_SESSION,
  ...REACT_MOCK_SESSIONS,
];

export {
  REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026,
  DATABASE_SQL_NOSQL_MOCK_QUESTIONS,
  DATABASE_MOCK_SESSION,
};

export function getAllMockSessions(): MockInterviewSession[] {
  return MOCK_INTERVIEW_SESSIONS;
}

export function getMockSessionBySlug(slug: string): MockInterviewSession | undefined {
  return MOCK_INTERVIEW_SESSIONS.find((s) => s.slug === slug || s.id === slug);
}

export function getMockSessionByDate(date: string): MockInterviewSession | undefined {
  return MOCK_INTERVIEW_SESSIONS.find((s) => s.date === date);
}

export function getAllMockQuestions(): MockInterviewItem[] {
  return MOCK_INTERVIEW_SESSIONS.flatMap((s) => s.questions);
}

export function getMockQuestionById(id: string): MockInterviewItem | undefined {
  for (const session of MOCK_INTERVIEW_SESSIONS) {
    const found = session.questions.find((q) => q.id === id);
    if (found) return found;
  }
  return undefined;
}
