import { MockInterviewItem } from "@/types";
import { day1Questions } from "./day1";
import { day2Questions } from "./day2";

export interface PlacementDayInfo {
  id: string;
  dayNumber: number;
  title: string;
  module: string;
  topic: string;
  questionRange: [number, number];
  count: number;
  badgeColor: string;
}

export const PLACEMENT_ARENA_DAYS: PlacementDayInfo[] = [
  {
    id: "day-1-js-fund-1",
    dayNumber: 1,
    title: "Day 1 — JavaScript Fundamentals I",
    module: "JavaScript Fundamentals I",
    topic: "Variables, Data Types, Functions & Scope",
    questionRange: [1, 15],
    count: 15,
    badgeColor: "amber",
  },
  {
    id: "day-2-js-fund-2",
    dayNumber: 2,
    title: "Day 2 — JavaScript Fundamentals II",
    module: "JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    questionRange: [16, 30],
    count: 15,
    badgeColor: "indigo",
  },
];

export const PLACEMENT_ARENA_QUESTIONS: MockInterviewItem[] = [
  ...day1Questions,
  ...day2Questions,
];

export { day1Questions, day2Questions };
