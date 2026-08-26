"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { ALL_QUESTIONS } from "@/data/questions";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";

export default function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const category = CATEGORIES.find(
    (c) => c.slug.toLowerCase() === resolvedParams.slug.toLowerCase()
  );

  if (!category) {
    notFound();
  }

  const categoryQuestions = ALL_QUESTIONS.filter(
    (q) => q.categorySlug.toLowerCase() === category.slug.toLowerCase()
  );

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-200">
      {/* Breadcrumb & Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BackButton fallbackHref="/categories" label="ক্যাটাগরিতে ফিরে যান (Back)" />

        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/categories"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Categories
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-zinc-900 dark:text-zinc-100 font-medium">
            {category.name}
          </span>
        </nav>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {category.name} Questions
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {category.description}
          </p>
        </div>

        <Link href={`/practice?category=${category.slug}`}>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-zinc-950">
            Practice {category.name}
          </Button>
        </Link>
      </div>

      {/* Questions Grid */}
      {categoryQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} showCategory={false} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            No questions added to this category yet.
          </p>
          <Link href="/questions" className="mt-3 inline-block">
            <Button variant="outline" size="sm">
              Browse All Questions
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
