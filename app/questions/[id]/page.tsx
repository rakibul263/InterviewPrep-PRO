"use client";

import React, { useEffect, use } from "react";
import { notFound } from "next/navigation";
import { getQuestionById } from "@/data/questions";
import { useUserProgress } from "@/hooks/useUserProgress";
import { QuestionHeader } from "@/components/questions/QuestionHeader";
import { ShortAnswerBox } from "@/components/questions/ShortAnswerBox";
import { ExplanationSection } from "@/components/questions/ExplanationSection";
import { InterviewAnswerCard } from "@/components/questions/InterviewAnswerCard";
import { DetailedBreakdown } from "@/components/questions/DetailedBreakdown";
import { CodeSnippet } from "@/components/questions/CodeSnippet";
import { RealWorldBox } from "@/components/questions/RealWorldBox";
import { TipsAndMistakes } from "@/components/questions/TipsAndMistakes";
import { QuickRevisionCard } from "@/components/questions/QuickRevisionCard";
import { FollowUpQuestions } from "@/components/questions/FollowUpQuestions";
import { QuestionNotes } from "@/components/questions/QuestionNotes";
import { QuestionNavigation } from "@/components/questions/QuestionNavigation";
import { cn } from "@/lib/utils";

export default function QuestionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { recordQuestionView, progress } = useUserProgress();
  const question = getQuestionById(resolvedParams.id);
  const questionId = question?.id;

  useEffect(() => {
    if (questionId) {
      recordQuestionView(questionId);
    }
  }, [questionId, recordQuestionView]);

  if (!question) {
    notFound();
  }

  // Reading font size class
  const getFontSizeClass = () => {
    if (progress.readingFontSize === "large") return "text-lg";
    if (progress.readingFontSize === "xlarge") return "text-xl";
    return "text-base";
  };

  return (
    <article
      className={cn(
        "max-w-3xl mx-auto space-y-8 pb-16 animate-in fade-in-50 duration-200",
        getFontSizeClass()
      )}
    >
      {/* 1. Question Header & Meta Bar */}
      <QuestionHeader question={question} />

      {/* 2. Short Answer (সংক্ষিপ্ত উত্তর) */}
      <ShortAnswerBox shortAnswer={question.shortAnswer} />

      {/* 3. Easy Explanation (সহজ ব্যাখ্যা) */}
      <ExplanationSection easyExplanation={question.easyExplanation} />

      {/* 4. Interview Speech Answer (ইন্টারভিউতে যেভাবে বলবেন) */}
      <InterviewAnswerCard interviewAnswer={question.interviewAnswer} />

      {/* 5. Detailed Breakdown (বিস্তারিত বিশ্লেষণ: What, Why, How, When) */}
      <DetailedBreakdown detailedExplanation={question.detailedExplanation} />

      {/* 6. Code Snippet & Bangla Steps */}
      {question.codeExample && <CodeSnippet codeExample={question.codeExample} />}

      {/* 7. Real World Production Use Cases */}
      {question.realWorldExamples && question.realWorldExamples.length > 0 && (
        <RealWorldBox realWorldExamples={question.realWorldExamples} />
      )}

      {/* 8. Interview Tips & Avoid Saying Comparison */}
      <TipsAndMistakes interviewTips={question.interviewTips} />

      {/* 9. Quick Revision Key Points (এক নজরে মনে রাখুন) */}
      <QuickRevisionCard quickRevision={question.quickRevision} />

      {/* 10. Clickable Follow-up Questions */}
      {question.followUpQuestions && question.followUpQuestions.length > 0 && (
        <FollowUpQuestions followUpQuestions={question.followUpQuestions} />
      )}

      {/* 11. Editable Personal Notes */}
      <QuestionNotes questionId={question.id} />

      {/* 12. Bottom Navigation (Previous / Next Question) */}
      <QuestionNavigation currentQuestionId={question.id} />
    </article>
  );
}
