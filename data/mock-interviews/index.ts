import { MockInterviewSession, MockInterviewItem } from "@/types";
import {
  MOCK_INTERVIEW_SESSIONS,
  REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026,
} from "./react-nextjs-august-2026";

export { MOCK_INTERVIEW_SESSIONS, REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026 };

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
