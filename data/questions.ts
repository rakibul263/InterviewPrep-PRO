import { Question } from "@/types";
import { javascriptCoreQuestions } from "./questions/javascript-core";
import { javascriptFunctionsQuestions } from "./questions/javascript-functions";
import { javascriptObjectsAsyncQuestions } from "./questions/javascript-objects-async";
import { javascriptPerformanceAdvancedQuestions } from "./questions/javascript-performance-advanced";
import { javascriptArraysObjectsQuestions } from "./questions/javascript-arrays-objects";
import { javascriptBrowserWebApisQuestions } from "./questions/javascript-browser-webapis";
import { reactDeepDiveQuestions } from "./questions/react-deep-dive";
import { nextjsDeepDiveQuestions } from "./questions/nextjs-deep-dive";
import { typescriptTypesQuestions } from "./questions/typescript-types";
import { typescriptAdvancedQuestions } from "./questions/typescript-advanced";
import { typescriptArchitectureInternalsQuestions } from "./questions/typescript-architecture-internals";
import { fullstackAndSystemQuestions } from "./questions/fullstack-and-system";
import { nodejsQuestions } from "./questions/nodejs";
import { expressjsQuestions } from "./questions/expressjs";

export const ALL_QUESTIONS: Question[] = [
  ...javascriptCoreQuestions,
  ...javascriptFunctionsQuestions,
  ...javascriptObjectsAsyncQuestions,
  ...javascriptArraysObjectsQuestions,
  ...javascriptPerformanceAdvancedQuestions,
  ...javascriptBrowserWebApisQuestions,
  ...reactDeepDiveQuestions,
  ...nextjsDeepDiveQuestions,
  ...typescriptTypesQuestions,
  ...typescriptAdvancedQuestions,
  ...typescriptArchitectureInternalsQuestions,
  ...fullstackAndSystemQuestions,
  ...nodejsQuestions,
  ...expressjsQuestions,
];

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id === id || q.slug === id);
}

export function getQuestionsByCategory(categorySlug: string): Question[] {
  return ALL_QUESTIONS.filter(
    (q) => q.categorySlug.toLowerCase() === categorySlug.toLowerCase()
  );
}

export function getRelatedQuestions(questionId: string, limit = 4): Question[] {
  const current = getQuestionById(questionId);
  if (!current) return [];

  return ALL_QUESTIONS.filter(
    (q) => q.id !== questionId && q.categorySlug === current.categorySlug
  ).slice(0, limit);
}

export function getMustKnowQuestions(): Question[] {
  return ALL_QUESTIONS.filter((q) => q.importance === "Must Know");
}
