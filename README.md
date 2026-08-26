<div align="center">

# InterviewPrep PRO

### The Ultimate Bangla Interview Preparation Platform for Software Engineers

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

[Live Demo](https://interviewprep-pro.vercel.app) &nbsp;|&nbsp; [Report Bug](https://github.com/rakibul263/InterviewPrep-PRO/issues) &nbsp;|&nbsp; [Request Feature](https://github.com/rakibul263/InterviewPrep-PRO/issues)

</div>

---

## About

**InterviewPrep PRO** is a comprehensive, Bangla-language interview preparation portal designed specifically for Bangladeshi software engineers preparing for JavaScript, TypeScript, React, Next.js, Node.js, and full-stack engineering interviews. All explanations are written in natural Bengali (Bangla) to make technical concepts accessible and easy to understand.

> Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

---

## Features

- **100+ Interview Questions** across 16 technology categories
- **Bangla-First UI** — all explanations, tips, and labels in natural Bengali
- **Interactive Glossary** — SmartText auto-detects technical terms and shows Bangla popovers
- **Practice Mode** — Active recall flashcards with session scoring and confetti animation
- **Interview Focus Mode** — Fullscreen distraction-free review with keyboard shortcuts
- **Progress Tracking** — Completion, favorites, notes, and analytics per question/category
- **Command Palette** — Global `Cmd+K` search across all questions
- **Theme System** — Light, Dark, and System mode with persistence
- **Data Backup** — Export/Import all progress as JSON
- **Responsive Design** — Works seamlessly on desktop and mobile

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Language | [TypeScript 5](https://typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Animations | [Canvas Confetti](https://catdad.github.io/canvas-confetti/) |
| Utilities | clsx, tailwind-merge |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18.17 or later
- [npm](https://npmjs.com), [yarn](https://yarnpkg.com), or [pnpm](https://pnpm.io)

### Installation

```bash
# Clone the repository
git clone https://github.com/rakibul263/InterviewPrep-PRO.git

# Navigate to the project directory
cd InterviewPrep-PRO

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Project Structure

```
InterviewPrep-PRO/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Dashboard
│   ├── globals.css               # Global styles
│   ├── categories/               # Category pages
│   ├── questions/                # Question list & detail pages
│   ├── practice/                 # Flashcard practice mode
│   ├── interview-mode/           # Fullscreen focus mode
│   ├── progress/                 # Analytics dashboard
│   ├── favorites/                # Bookmarked questions
│   ├── important/                # Must-know questions
│   ├── notes/                    # Personal notes hub
│   └── settings/                 # App settings
├── components/
│   ├── layout/                   # Sidebar, Header, CommandMenu
│   ├── theme/                    # ThemeProvider
│   ├── ui/                       # Reusable UI primitives
│   └── questions/                # Question-specific components
├── data/
│   ├── categories.ts             # 16 category definitions
│   ├── questions/                # 12 question data files
│   ├── questions.ts              # Question aggregation & helpers
│   └── glossary.ts               # Bangla technical glossary
├── hooks/
│   └── useUserProgress.tsx       # State management with localStorage
├── lib/
│   └── utils.ts                  # Utility functions
└── types/
    └── index.ts                  # TypeScript interfaces
```

---

## Categories

| # | Category | Topics |
|---|----------|--------|
| 1 | JavaScript | Core, Functions, Objects, Arrays, Performance, Browser APIs |
| 2 | TypeScript | Types, Advanced, Architecture |
| 3 | React | Hooks, Virtual DOM, State, Rendering |
| 4 | Next.js | App Router, SSR, SSG, ISR, Server Components |
| 5 | Node.js | Runtime, Modules, Streams |
| 6 | Express.js | Middleware, Routing |
| 7 | MongoDB | NoSQL, Queries, Aggregation |
| 8 | PostgreSQL | SQL, Joins, Indexing |
| 9 | Prisma | ORM, Schema, Migrations |
| 10 | REST API | Design, Authentication, Best Practices |
| 11 | Git & GitHub | Commands, Branching, Collaboration |
| 12 | HTML & CSS | Semantics, Flexbox, Grid |
| 13 | Tailwind CSS | Utility-first, Customization |
| 14 | System Design | Architecture, Scalability |
| 15 | HR / Behavioral | Soft Skills, STAR Method |
| 16 | General Web Dev | Performance, Security, SEO |

---

## Question Structure

Each question includes 12 structured sections:

1. **Short Answer** — Quick Bangla summary
2. **Easy Explanation** — Step-by-step breakdown
3. **Interview Script** — Ready-to-speech answer
4. **Detailed Breakdown** — What, Why, How, When
5. **Code Example** — Terminal-style code viewer with explanation
6. **Real-World Use Cases** — Production examples
7. **Interview Tips** — Golden tips and delivery strategy
8. **Common Mistakes** — What to avoid saying
9. **Quick Revision** — Key bullet points
10. **Follow-up Questions** — Linked related questions
11. **Personal Notes** — Editable notes per question
12. **Navigation** — Previous/Next question browsing

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Open command palette |
| `Space` | Show/hide answer (Focus Mode) |
| `←` / `→` | Previous/next question |
| `C` | Mark as complete |
| `F` | Toggle favorite |
| `Esc` | Exit fullscreen |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

## Author

**Rakibul Islam**

[![GitHub](https://img.shields.io/badge/GitHub-rakibul263-181717?logo=github)](https://github.com/rakibul263)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rakibul263-0A66C2?logo=linkedin)](https://linkedin.com/in/rakibul263)

---

<div align="center">

**Made with passion for the Bangladeshi developer community**

</div>
