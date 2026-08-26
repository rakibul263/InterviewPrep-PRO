import { Question } from "@/types";

export const nextjsDeepDiveQuestions: Question[] = [
  {
    id: "nextjs-fundamentals-vs-traditional-react",
    slug: "nextjs-fundamentals-vs-traditional-react",
    question: "What is Next.js, why was it invented, and how does it solve traditional React (CSR/CRA) limitations?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "**Next.js** হলো React-এর ওপর তৈরি একটি প্রোডাকশন-গ্রেড ফুলস্ট্যাক ফ্রেমওয়ার্ক যা সার্ভার-সাইড রেন্ডারিং (SSR), স্ট্যাটিক সাইট জেনারেশন (SSG), ফাইল-সিস্টেম রাউটিং, এবং বিল্ট-ইন অপ্টিমাইজেশন প্রদান করে। ট্র্যাডিশনাল ক্লায়েন্ট-সাইড React (CRA/Vite)-এর দুর্বল এসইও (SEO), ধীরগতির ফার্স্ট লোড টাইম (Large JS Bundle), এবং জটিল কনফিগারেশন সমস্যা সমাধান করতে এটি উদ্ভাবিত হয়।",
    easyExplanation:
      "React এবং Next.js এর মধ্যকার মৌলিক পার্থক্য ও সুবিধার বিশ্লেষণ:\n\n১. **ট্র্যাডিশনাল React (CRA/Vite) এর সমস্যা**:\n- **Blank Page Syndrome**: সার্ভার থেকে শুধু একটি খালি `index.html` এবং বিশাল JavaScript ফাইল নামতো। ব্রাউজারে সম্পূর্ণ JS ডাউনলোড ও রান না হওয়া পর্যন্ত স্ক্রিন সাদা হয়ে থাকত (High FCP/LCP)।\n- **খারাপ এসইও (Poor SEO)**: গুগল বা সোশ্যাল মিডিয়া ক্রলার পেজে এসে কোনো টেক্সট পেত না, কারণ সব কনটেন্ট জাভাস্ক্রিপ্ট দিয়ে ক্লায়েন্টে তৈরি হতো।\n\n২. **Next.js এর সমাধানসমূহ**:\n- **Server-Side Rendering (SSR) & SSG**: সার্ভারেই প্রি-রেন্ডার করা সম্পূর্ণ HTML তৈরি করে ব্রাউজারে পাঠানো হয়, ফলে সার্চ ইঞ্জিন সাথে সাথে কনটেন্ট পড়তে পারে এবং ইউজার চোখের পলকে পেজ দেখতে পায়।\n- **File-System Routing (App Router)**: কোনো বাহ্যিক লাইব্রেরি ছাড়া শুধু ফোল্ডার বানিয়ে (`app/blog/page.tsx`) স্বয়ংক্রিয়ভাবে রুট তৈরি করা যায়।\n- **API Routes / Route Handlers**: আলাদা Node.js/Express সার্ভার সেটআপ ছাড়াই একই প্রজেক্টে ব্যাকএন্ড এন্ডপয়েন্ট তৈরি করা যায়।\n- **অটোমেটিক অপ্টিমাইজেশন**: ইমেজ কম্প্রেশন (`next/image`), ফন্ট সেলফ-হোস্টিং (`next/font`), এবং স্ক্রিপ্ট অপ্টিমাইজেশন বিল্ট-ইন থাকে।",
    interviewAnswer:
      "Next.js is a full-stack React framework engineered for performance, SEO, and developer experience. Traditional Client-Side Rendered (CSR) React applications suffer from slow initial page loads (due to heavy bundle sizes) and poor search engine crawlability because the initial HTML shell is empty. Next.js overcomes these challenges by offering hybrid rendering strategies (SSR, SSG, ISR), React Server Components (RSC), zero-config file-system routing, built-in Route Handlers, and automatic asset optimizations.",
    detailedExplanation: {
      whatItIs:
        "React-এর জন্য তৈরি Vercel-এর আধুনিক ফুলস্ট্যাক প্রোডাকশন ফ্রেমওয়ার্ক।",
      whyItExists:
        "ওয়েব পারফরম্যান্স (Core Web Vitals), সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), এবং সিম্পল ফুলস্ট্যাক আর্কিটেকচার নিশ্চিত করতে।",
      howItWorks:
        "সার্ভারে রিকোয়েস্ট আসার সাথে সাথে React Server Components এক্সিকিউট করে প্রি-রেন্ডার করা HTML এবং RSC পেলোড স্ট্রিম করে ব্রাউজারে পাঠায়।",
      whenToUse:
        "ই-কমার্স, ব্লগ, ল্যান্ডিং পেজ, SaaS ড্যাশবোর্ড এবং যেকোনো পাবলিক-ফেসিং এসইও-গুরুত্বপূর্ণ ওয়েব অ্যাপ্লিকেশনে।",
      keyPoints: [
        "React হলো লাইব্রেরি; Next.js হলো ফুলস্ট্যাক অপ্টিমাইজড ফ্রেমওয়ার্ক।",
        "App Router (React Server Components ভিত্তিক) আধুনিক স্ট্যান্ডার্ড।",
        "হাইব্রিড রেন্ডারিং: একই অ্যাপে কিছু পেজ Static, কিছু পেজ SSR রাখা যায়।",
      ],
    },
    codeExample: {
      language: "typescript",
      code: `// app/users/page.tsx - React Server Component (ডিফল্ট)
// কোনো 'useEffect' বা ক্লায়েন্ট স্টেট ছাড়াই সরাসরি সার্ভারে ডেটা ফেচিং!
export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 }, // ১ ঘন্টা ক্যাশ থাকবে (ISR)
  });
  const users = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">ব্যবহারকারীদের তালিকা (Server Rendered)</h1>
      <ul className="mt-4 space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="p-2 border rounded">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </main>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Zero-bundle server fetch",
          description: "ডেটা ফেচিং সম্পূর্ণ সার্ভারে ঘটে, কোনো ক্লায়েন্ট বান্ডেল বা লোডিং স্পিনার ছাড়াই ব্রাউজার সরাসরি ফুল HTML পায়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Pages (Target / Nike)",
        description: "লাখ লাখ প্রোডাক্ট পেজের চমৎকার গুগল র‍্যাংকিং নিশ্চিত করতে স্ট্যাটিক জেনারেশন ও এসএসআর ব্যবহার।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js provides a hybrid architecture allowing us to choose the best rendering strategy (SSG, SSR, ISR, CSR) on a per-route basis while improving Core Web Vitals out of the box.'",
      deliveryStrategy: "App Router বনাম Pages Router-এর পার্থক্য এক লাইনে উল্লেখ করতে পারেন।",
      avoidSaying: [
        {
          wrong: "Next.js এবং React দুটো আলাদা ল্যাঙ্গুয়েজ।",
          right: "Next.js হলো React-এর ওপর নির্মিত ফুলস্ট্যাক ফ্রেমওয়ার্ক যা React-এর ফিচারগুলোকে সার্ভার ক্যাপাবিলিটি দিয়ে সমৃদ্ধ করে।",
        },
      ],
    },
    quickRevision: [
      "Next.js = Full-Stack React Framework।",
      "সমাধান করে: Slow Initial Load, Poor SEO, Complex Webpack Config।",
      "ফিচার: File-System Routing, SSR/SSG/ISR, Image/Font Optimization, Route Handlers।",
    ],
    followUpQuestions: [
      {
        question: "App Router এবং Pages Router এর মধ্যে মূল স্থাপত্যগত পার্থক্য কী?",
        shortHint: "App Router ডিফল্টভাবে React Server Components (RSC) ব্যবহার করে এবং ফোল্ডার-বেসড নেস্টেড লেআউট সাপোর্ট করে।",
      },
    ],
    tags: ["Next.js", "SSR", "SSG", "App Router", "Fullstack", "SEO"],
  },
  {
    id: "hydration-and-hydration-mismatch-in-nextjs",
    slug: "hydration-and-hydration-mismatch-in-nextjs",
    question: "What is Hydration in React/Next.js, how does it work, and what causes Hydration Mismatches?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**Hydration** হলো সার্ভার থেকে পাঠানো স্ট্যাটিক HTML মার্কআপের সাথে ক্লায়েন্ট-সাইড JavaScript এবং ইভেন্ট লিসেনারগুলো যুক্ত করে পেজটিকে সম্পূর্ণ ইন্টারঅ্যাক্টিভ করার প্রক্রিয়া। আর যখন সার্ভার রেন্ডার করা HTML এবং ক্লায়েন্টের ব্রাউজার ডমের মধ্যে কোনো অমিল থাকে (যেমন: `Date.now()`, `typeof window`, ব্রাউজার এক্সটেনশন বা ইনভ্যালিড HTML নেস্টিং), তখন **Hydration Mismatch Error** তৈরি হয়।",
    easyExplanation:
      "হাইড্রেশন প্রক্রিয়া এবং এর সমস্যাগুলো সহজ ভাষায়:\n\n১. **হাইড্রেশন কী? (Watering the dry HTML)**:\n- সার্ভার থেকে ব্রাউজারে যে HTML আসে তা দেখতে সুন্দর হলেও প্রাণহীন বা 'শুকনো' (বাটনে ক্লিক করলে কাজ করে না)।\n- ব্রাউজার যখন React JavaScript ডাউনলোড করে, তখন এটি সার্ভারের তৈরি DOM নোডগুলোর সাথে ইভেন্ট হ্যান্ডলার (`onClick`, `onChange`, `state`) জুড়ে দিয়ে পেজটিকে 'সজীব ও কার্যকর' করে। এই প্রক্রিয়াকে **Hydration** বলে।\n\n২. **Hydration Mismatch কেন হয়?**\n- সার্ভার এবং ক্লায়েন্ট একই কোড দুই জায়গায় রান করে। যদি দুই জায়গায় রেজাল্ট ভিন্ন হয়, তবেই হাইড্রেশন মিসম্যাচ ঘটে:\n  - **সময়ের অমিল**: `new Date().toLocaleTimeString()` সার্ভারের টাইমজোনে এক দেখায়, ইউজারের কম্পিউটারে ভিন্ন দেখায়।\n  - **Browser-only APIs**: `localStorage` বা `window.innerWidth` সার্ভারে `undefined`, কিন্তু ক্লায়েন্টে ভ্যালু থাকে।\n  - **Browser Extensions**: Grammarly বা পাসওয়ার্ড ম্যানেজার ব্রাউজারের `<body>` বা `<input>`-এ ক্লায়েন্ট সাইডে এক্সট্রা অ্যাট্রিবিউট ঢুকিয়ে দেয়।\n  - **Invalid HTML Nesting**: `<p>` এর ভেতর `<div>` ঢোকানো (HTML স্পেক অনুযায়ী ব্রাউজার অটো-কারেক্ট করে `<p>` ভেঙে ফেলে)।\n\n৩. **সমাধানের উপায়**:\n- `useEffect` বা `mounted` স্টেট ব্যবহার করে ক্লায়েন্ট-অনলি ডেটা রেন্ডার করা।\n- এক্সটেনশনের জন্য `<body suppressHydrationWarning>` ব্যবহার করা।\n- `next/dynamic` দিয়ে `{ ssr: false }` কম্পোনেন্ট লোড করা।",
    interviewAnswer:
      "**Hydration** is the client-side process where React takes the pre-rendered static HTML from the server and attaches event listeners, state, and effects to make it fully interactive. A **Hydration Mismatch** occurs when the initial client-rendered Virtual DOM tree differs from the server-rendered HTML. Common culprits include non-deterministic values (like `Date.now()`), accessing browser globals (`localStorage`, `window`) during initial render, browser extension mutations, and invalid HTML nesting (like `<p><div></div></p>`). We resolve this via `suppressHydrationWarning`, `useEffect` mounting checks, or dynamic client-only imports.",
    detailedExplanation: {
      whatItIs:
        "SSR/SSG আউটপুটকে ক্লায়েন্ট React ট্রির সাথে সিঙ্ক্রোনাইজ করার প্রক্রিয়া।",
      whyItExists:
        "সম্পূর্ণ DOM নতুন করে তৈরি না করে বিদ্যমান সার্ভার মার্কআপ রিইউজ করে দ্রুত ইন্টারঅ্যাক্টিভিটি দেওয়ার জন্য।",
      howItWorks:
        "React ক্লায়েন্ট ট্রি এবং সার্ভার DOM নোডের ওপর সমান্তরালে হেঁটে যায় এবং মেমরি নোডগুলোর সাথে ভার্চুয়াল ফাইবার লিংক করে। কোনো অমিল পেলে সতর্কবার্তা দিয়ে ক্লায়েন্ট ভার্সন দিয়ে রিপেয়ার করে।",
      whenToUse:
        "Next.js অ্যাপ্লিকেশনের সমস্ত SSR/SSG পেজে স্বয়ংক্রিয়ভাবে হাইড্রেশন ঘটে।",
      keyPoints: [
        "Hydration = Attaching event handlers to server HTML.",
        "Mismatch crashes: Date/Time differences, window APIs, Extensions, Invalid HTML.",
        "Fixes: `useEffect` mount check, `suppressHydrationWarning`, `dynamic(..., { ssr: false })`.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `// ✅ ক্লায়েন্ট-অনলি ডেটা নিরাপদে হাইড্রেশন করার আদর্শ প্যাটার্ন
import { useState, useEffect } from "react";

export default function SafeHydratedClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // শুধুমাত্র ক্লায়েন্ট মাউন্ট হওয়ার পর রান হবে
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="p-4 border rounded">
      <p>Current Time:</p>
      {/* মাউন্টের আগে ফলব্যাক টেক্সট থাকে, ফলে সার্ভার ও ক্লায়েন্ট মিসম্যাচ হয় না */}
      <span className="font-bold">{time || "Loading time..."}</span>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Mounting Guard",
          description: "সার্ভারে এবং ক্লায়েন্টের প্রথম রেন্ডারে 'Loading time...' থাকবে, ফলে initial HTML ১০০% ম্যাচ করবে। মাউন্ট হওয়ার পর useEffect সঠিক ক্লায়েন্ট টাইম বসিয়ে দেবে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "User Location / Local Time Display",
        description: "ব্যবহারকারীর স্থানীয় সময় বা লোকাল স্টোরেজের লগইন স্ট্যাটাস সার্ভার হাইড্রেশন এরর ছাড়া দেখানো।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'To avoid hydration mismatches, ensure deterministic initial rendering between server and client. Defer browser-specific state (like localStorage) to useEffect.'",
      deliveryStrategy: "HTML স্পেসিফিকেশনের ইনভ্যালিড নেস্টিং (যেমন `<p>` এর ভেতর `<p>` বা `<div>`) কীভাবে হাইড্রেশন ভাঙে তা উদাহরণ দিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "সব জায়গায় suppressHydrationWarning বসিয়ে দেওয়া উচিত।",
          right: "suppressHydrationWarning শুধুমাত্র এক্সটার্নাল পরিবর্তন (যেমন Grammarly বা তারিখ) এর জন্য সুনির্দিষ্টভাবে ব্যবহার করা উচিত; অ্যাপের আর্কিটেকচারাল বাগের জন্য নয়।",
        },
      ],
    },
    quickRevision: [
      "Hydration: সার্ভার HTML + ক্লায়েন্ট JS Event Listeners।",
      "Mismatch কারণ: `Date.now()`, `window`, Browser Extensions, Invalid Nesting।",
      "সমাধান: `mounted` স্টেট, `suppressHydrationWarning`, `ssr: false`।",
    ],
    followUpQuestions: [
      {
        question: "Selective Hydration কী এবং React 18 Suspense কীভাবে এতে সাহায্য করে?",
        shortHint: "পেজের একটি ভারী কম্পোনেন্ট লোড হওয়ার আগেই বাকি কম্পোনেন্টগুলো আগেভাগে হাইড্রেট হয়ে যায়।",
      },
    ],
    tags: ["Next.js", "Hydration", "SSR", "Debugging", "React 19"],
  },
  {
    id: "nextjs-rendering-strategies-csr-ssr-ssg-isr",
    slug: "nextjs-rendering-strategies-csr-ssr-ssg-isr",
    question: "Explain the differences between CSR, SSR, SSG, and ISR in Next.js. How do you enable each?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**CSR** (ক্লায়েন্টে ব্রাউজার রেন্ডার করে), **SSR** (প্রতিটি ব্যবহারকারীর রিকোয়েস্টে সার্ভারে রিয়েল-টাইম রেন্ডার হয়), **SSG** (বিল্ড টাইমে একবার HTML জেনারেট হয়ে CDN-এ ক্যাশ থাকে), এবং **ISR** (বিল্ডের পরও ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পরপর পেজ স্বয়ংক্রিয়ভাবে রি-জেনারেট হয়)। Next.js App Router-এ ক্যাশিং ও ফেচ অপশন (`cache: 'no-store'`, `next: { revalidate: 60 }`) দিয়ে এগুলো কনফিগার করা হয়।",
    easyExplanation:
      "৪টি রেন্ডারিং স্ট্র্যাটেজির তুলনামূলক পর্যালোচনা:\n\n১. **CSR (Client-Side Rendering)**:\n- ব্রাউজারে জাভাস্ক্রিপ্ট রান করে UI বানায়।\n- ব্যবহার: ইউজার ড্যাশবোর্ড, সেটিংস পেজ (যেখানে এসইও প্রয়োজন নেই)।\n- কীভাবে: `'use client'` এবং `useEffect` দিয়ে ফেচ।\n\n২. **SSG (Static Site Generation)**:\n- `npm run build` করার সময় একবার তৈরি হয় এবং বিশ্বজুড়ে CDN এজ সার্ভারে সংরক্ষিত থাকে। সবচেয়ে দ্রুততম (Fastest)।\n- ব্যবহার: ব্লগ পোস্ট, হেল্প সেন্টার, প্রাইভেসি পলিসি।\n- কীভাবে: ডিফল্ট Server Component (যেখানে কোনো ডায়নামিক রিকোয়েস্ট কুকি/হেডার নেই)।\n\n৩. **SSR (Server-Side Rendering)**:\n- প্রতিবার ব্যবহারকারী পেজে ঢুকলে সার্ভার সাথে সাথে ডেটাবেস থেকে ফ্রেশ ডেটা নিয়ে রিয়েল-টাইমে HTML বানায়।\n- ব্যবহার: লাইভ শেয়ার মার্কেট, টিকিট বুকিং, ব্যক্তিগত ফিড।\n- কীভাবে: `fetch(url, { cache: 'no-store' })` অথবা `cookies()`, `headers()` অ্যাক্সেস করে।\n\n৪. **ISR (Incremental Static Regeneration)**:\n- SSG-এর সুপারপাওয়ার! পেজটি স্ট্যাটিক থাকবে কিন্তু ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় (যেমন ৬০ সেকেন্ড) পর পর স্বয়ংক্রিয়ভাবে নতুন ডেটা দিয়ে রিফ্রেশ হয়ে যাবে।\n- ব্যবহার: ই-কমার্স প্রোডাক্ট ক্যাটালগ, নিউজ পেপার।\n- কীভাবে: `fetch(url, { next: { revalidate: 60 } })` অথবা `export const revalidate = 60`।",
    interviewAnswer:
      "Next.js supports four primary rendering strategies: **CSR** renders on the browser for private, interactive dashboards; **SSG** compiles HTML once at build-time for maximum CDN speed and perfect SEO; **SSR** generates fresh HTML dynamically on every incoming request for real-time personalization; and **ISR** allows static pages to be revalidated and rebuilt in the background on a time-based or on-demand trigger (`revalidateTag`/`revalidatePath`) without redeploying the entire app.",
    detailedExplanation: {
      whatItIs:
        "ওয়েব পেজ জেনারেশনের ৪টি হাইব্রিড কৌশল।",
      whyItExists:
        "পারফরম্যান্স, সার্ভার কস্ট, রিয়েল-টাইম ডেটা ফ্রেশনেস এবং এসইও-এর মধ্যে নিখুঁত ব্যালেন্স করার জন্য।",
      howItWorks:
        "Next.js App Router-এর ডাটা ক্যাশ (Data Cache) এবং ফুল রুট ক্যাশ (Full Route Cache) রিকোয়েস্টের ক্যাশ পলিসি দেখে ঠিক করে পেজটি স্ট্যাটিক না ডায়নামিক হবে।",
      whenToUse:
        "স্ট্যাটিক কন্টেন্টে SSG; সেমি-ডায়নামিক ক্যাটালগে ISR; পার্সোনালাইজড লাইভ ডেটায় SSR; এবং হেভি ইন্টারেক্টিভ পার্টে CSR।",
      keyPoints: [
        "SSG: Build-time generation (Fastest TTFB).",
        "ISR: Background regeneration via `next: { revalidate: X }`.",
        "SSR: Per-request dynamic rendering via `cache: 'no-store'`.",
        "CSR: Client-only via `'use client'` + SWR / React Query.",
      ],
    },
    codeExample: {
      language: "typescript",
      code: `// ১. SSG (Static) - ডিফল্ট
export async function StaticPage() {
  const data = await fetch('https://api.example.com/posts').then(r => r.json());
  return <div>{data.title}</div>;
}

// ২. ISR (Incremental Static Regeneration) - প্রতি ৬০ সেকেন্ডে ব্যাকগ্রাউন্ড রিভ্যালিডেশন
export async function ISRPage() {
  const data = await fetch('https://api.example.com/products', {
    next: { revalidate: 60, tags: ['products'] }
  }).then(r => r.json());
  return <div>{data.price}</div>;
}

// ৩. SSR (Dynamic Server-Side) - প্রতি রিকোয়েস্টে লাইভ ফেচ
export async function SSRPage() {
  const data = await fetch('https://api.example.com/stock-ticker', {
    cache: 'no-store'
  }).then(r => r.json());
  return <div>{data.price}</div>;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Declarative caching",
          description: "fetch অপশনের ভেতরেই cache পলিসি ঘোষণা করে Next.js-এ সহজে SSR, SSG এবং ISR টগল করা যায়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Architecture (Amazon/Shopify)",
        description: "হোমপেজ ও ক্যাটাগরি পেজে ISR (৬০ সেকেন্ড), চেকআউট ও পেমেন্টে SSR, এবং ইউজার অ্যাকাউন্ট সেটিংসে CSR ব্যবহার।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js App Router treats all components as Server Components by default (SSG). Adding `no-store` or dynamic cookies turns it into SSR, while `revalidate` enables ISR.'",
      deliveryStrategy: "On-demand revalidation (`revalidatePath` এবং `revalidateTag`) কীভাবে সিএমএস পাবলিশিংয়ে কাজ করে তা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "Next.js এ সব পেজ শুধু SSR হয়।",
          right: "Next.js একটি হাইব্রিড ফ্রেমওয়ার্ক—এখানে প্রতিটি রুটের জন্য আলাদা আলাদাভাবে SSG, SSR, ISR বা CSR নির্বাচন করা যায়।",
        },
      ],
    },
    quickRevision: [
      "CSR: Client-only | Private pages।",
      "SSG: Build-time | Superfast CDN।",
      "ISR: SSG + Background timer (`revalidate: 60`)।",
      "SSR: Real-time per request (`cache: 'no-store'`)।",
    ],
    followUpQuestions: [
      {
        question: "On-demand revalidation এবং Time-based revalidation এর মধ্যে পার্থক্য কী?",
        shortHint: "Time-based নির্দিষ্ট সময় পর পর ক্যাশ চেক করে; On-demand একটি ওয়েবহুক বা অ্যাকশনের মাধ্যমে তাৎক্ষণিক ক্যাশ বাতিল করে।",
      },
    ],
    tags: ["Next.js", "SSR", "SSG", "ISR", "CSR", "Architecture"],
  },
  {
    id: "use-client-vs-use-server-in-nextjs",
    slug: "use-client-vs-use-server-in-nextjs",
    question: "What is the purpose of 'use client' vs 'use server' directives in Next.js?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "`'use client'` ফাইলের শীর্ষে ব্যবহার করে **Client Component Boundary** তৈরি করা হয় (যাতে ব্রাউজার ইভেন্ট, `useState`, `useEffect` ব্যবহার করা যায়)। আর `'use server'` ব্যবহার করে **Server Actions** সংজ্ঞায়িত করা হয় (যা ক্লায়েন্ট থেকে সরাসরি সার্ভারে কল করা যায় এমন সিকিউর ফাংশন যেমন ফর্ম সাবমিট বা ডাটাবেস মিউটেশন)।",
    easyExplanation:
      "Next.js App Router-এর দুটি অত্যন্ত গুরুত্বপূর্ণ ডিরেক্টিভ:\n\n১. **`'use client'` ডিরেক্টিভ**:\n- Next.js-এ সব কম্পোনেন্ট ডিফল্টভাবে **Server Components** (সার্ভারেই রেন্ডার হয়, ব্রাউজারে ০ কিলোবাইট JS পাঠায়)।\n- কিন্তু আপনার যদি কোনো বাটন ক্লিকে ইন্টারঅ্যাকশন (`onClick`), কাস্টম স্টেট (`useState`), সাইড-ইফেক্ট (`useEffect`), বা ব্রাউজার API (`localStorage`, Geolocation) দরকার হয়, তখন ফাইলের একদম প্রথমে `'use client'` লিখে ক্লায়েন্ট বাউন্ডারি ঘোষণা করতে হয়।\n- মনে রাখবেন: `'use client'` মানে কম্পোনেন্টটি শুধুমাত্র ক্লায়েন্টে চলে না; এটি সার্ভারেও প্রি-রেন্ডার হয় কিন্তু ব্রাউজারে এর JS বান্ডেল পাঠানো হয়।\n\n২. **`'use server'` ডিরেক্টিভ**:\n- এটি কম্পোনেন্ট বানানোর জন্য নয়, বরং **Server Actions (সার্ভার ফাংশন)** ঘোষণার জন্য ব্যবহৃত হয়।\n- এটি কোনো async ফাংশনের ভেতর বা ফাইলের শীর্ষে লিখলে Next.js ফাংশনটিকে একটি সিকিউর POST API এন্ডপয়েন্টে রূপান্তর করে।\n- ক্লায়েন্ট ফর্ম থেকে সরাসরি এই ফাংশন কল করে ডাটাবেস কোয়েরি বা Prisma মিউটেশন চালানো যায় কোনো আলাদা API রুট বানানো ছাড়াই।",
    interviewAnswer:
      "**`'use client'`** defines the boundary between React Server Components (RSC) and Client Components. It instructs the bundler to include the module and its dependencies in the client-side JavaScript bundle, enabling hooks (`useState`, `useEffect`) and DOM event listeners (`onClick`). **`'use server'`** declares **Server Actions**—asynchronous server-only functions that can be invoked directly from Client Components or HTML forms, executing securely on the server with automatic RPC serialization.",
    detailedExplanation: {
      whatItIs:
        "React 19 এবং Next.js App Router-এর আর্কিটেকচারাল বাউন্ডারি ডিরেক্টিভ।",
      whyItExists:
        "ক্লায়েন্ট বান্ডেল সাইজ নাটকীয়ভাবে কমাতে এবং ক্লায়েন্ট-সার্ভার ডেটা ট্রান্সফারে টাইপ-সেফ সিমলেস ব্রিজিং তৈরি করতে।",
      howItWorks:
        "`'use client'` ক্লায়েন্ট মডিউল গ্রাফে এন্ট্রি পয়েন্ট চিহ্নিত করে। `'use server'` ফাংশনের জন্য ব্যাকগ্রাউন্ডে একটি ইউনিক অ্যাকশন আইডি এবং সিকিউর HTTP POST রুট জেনারেট করে।",
      whenToUse:
        "ইন্টারেক্টিভ উইজেটে `'use client'`; ডাটাবেস মিউটেশন, ফর্ম হ্যান্ডলিং ও অথেন্টিকেশনে `'use server'` ব্যবহার করুন।",
      keyPoints: [
        "ডিফল্ট কম্পোনেন্ট = Server Component (কোনো ডিরেক্টিভ লাগে না)।",
        "`'use client'` ইভেন্ট হ্যান্ডলার ও হুক ব্যবহারের ক্লায়েন্ট বাউন্ডারি।",
        "`'use server'` ফাংশন লেভেল বা মডিউল লেভেলে Server Action তৈরি করে।",
      ],
    },
    codeExample: {
      language: "typescript",
      code: `// ১. actions/userActions.ts - Server Action
'use server';

import { revalidatePath } from 'next/cache';

export async function updateUserBio(formData: FormData) {
  const bio = formData.get('bio') as string;
  // সরাসরি ডাটাবেসে সেভ (সার্ভার সাইড সিকিউর)
  console.log('Saved to DB:', bio);
  
  revalidatePath('/profile'); // ক্যাশ রিভ্যালিডেট
  return { success: true };
}

// ২. components/BioEditor.tsx - Client Component
'use client';

import { useState } from 'react';
import { updateUserBio } from '@/actions/userActions';

export default function BioEditor() {
  const [loading, setLoading] = useState(false);

  return (
    <form action={async (formData) => {
      setLoading(true);
      await updateUserBio(formData);
      setLoading(false);
    }}>
      <textarea name="bio" placeholder="Write your bio..." />
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Bio'}
      </button>
    </form>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Fullstack seamless integration",
          description: "BioEditor ক্লায়েন্টে স্টেট হ্যান্ডেল করছে এবং সাবমিটের সময় সার্ভার অ্যাকশন updateUserBio-কে সরাসরি রিমোট ফাংশন হিসেবে এক্সিকিউট করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Shopping Cart & Checkout",
        description: "কার্ট আইটেম কাউন্টার ও ড্রপডাউনে `'use client'`, আর 'Place Order' বাটনে ডাটাবেস অর্ডারের জন্য `'use server'` ব্যবহার।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে সতর্কতার সাথে বলুন: ''use client' does NOT mean server rendering is disabled; the component is still pre-rendered to HTML on the server. It simply marks where client-side hydration begins.'",
      deliveryStrategy: "কেন Server Actions ব্যবহারের ফলে আলাদা API রুট তৈরির বয়লারপ্লেট কমে যায় তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "use server দিয়ে সার্ভার কম্পোনেন্ট তৈরি করা হয়।",
          right: "সার্ভার কম্পোনেন্ট ডিফল্টভাবেই তৈরি হয় (কোনো ডিরেক্টিভ লাগে না); 'use server' শুধুমাত্র Server Actions সংজ্ঞায়িত করতে ব্যবহৃত হয়।",
        },
      ],
    },
    quickRevision: [
      "`'use client'`: ক্লায়েন্ট বাউন্ডারি (Hooks + Events)।",
      "`'use server'`: Server Actions (Direct server-side async functions)।",
      "ডিফল্ট: Server Components (Zero Client JS Bundle)।",
    ],
    followUpQuestions: [
      {
        question: "Server Component-এর ভেতরে কি Client Component নেস্ট করা যায়?",
        shortHint: "হ্যাঁ, এবং Client Component-এর ভেতর `children` প্রপস হিসেবে Server Component পাস করা যায়।",
      },
    ],
    tags: ["Next.js", "Server Actions", "Server Components", "use client", "use server"],
  },
  {
    id: "nextjs-caching-streaming-and-seo-optimization",
    slug: "nextjs-caching-streaming-and-seo-optimization",
    question: "How does Next.js handle Caching, Streaming with Suspense, and Built-in SEO Optimization?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "Next.js ৪-স্তরের মাল্টি-লেয়ার ক্যাশিং পরিচালনা করে: ১. **Request Memoization** (একই রেন্ডারে ডুপ্লিকেট ফেচ ডি-ডুপ্লিকেট করা), ২. **Data Cache** (ক্রস-রিকোয়েস্ট ফেচ ক্যাশ), ৩. **Full Route Cache** (সার্ভার HTML ও RSC পেলোড), এবং ৪. **Router Cache** (ক্লায়েন্ট ব্রাউজারে ইন-মেমরি রুট ক্যাশ)। **Streaming & Suspense** ভারী ডেটা ফেচ হওয়ার আগেই পেজের ফ্রেম ব্রাউজারে পাঠিয়ে দেয়। আর `generateMetadata` API দিয়ে বিল্ট-ইন ডাইনামিক এসইও ও OpenGraph হ্যান্ডেল করা হয়।",
    easyExplanation:
      "Next.js-এর আর্কিটেকচারের সবচেয়ে শক্তিশালী ৩টি পারফরম্যান্স পিলার:\n\n১. **Streaming & React Suspense (তাত্ক্ষণিক লোডিং)**:\n- আগে পুরো পেজের সমস্ত ডেটা ডাটাবেস থেকে না আসা পর্যন্ত ইউজার সাদা স্ক্রিন দেখত।\n- Streaming-এর মাধ্যমে Next.js পেজের ফাস্ট অংশগুলো (Navbar, Layout) ব্রাউজারে সাথে সাথে পাঠিয়ে দেয় এবং ধীরগতির অংশগুলোকে `<Suspense fallback={<Skeleton />}>` দিয়ে মুড়িয়ে রাখে। ব্যাকগ্রাউন্ডে ডেটা আসামাত্র চাঙ্ক আকারে পাঠিয়ে দেয়।\n\n২. **৪টি ক্যাশিং লেয়ার (The 4 Caching Mechanisms)**:\n- **Request Memoization**: একই কম্পোনেন্ট ট্রিতে ৪ বার `fetch('/user')` কল করলেও সার্ভার ব্যাকএন্ডে মাত্র ১ বার নেটওয়ার্ক রিকোয়েস্ট পাঠায়।\n- **Data Cache**: `next: { revalidate: 60 }` দিয়ে ডেটাবেস রেসপন্স ডিস্কে ক্যাশ করে।\n- **Full Route Cache**: স্ট্যাটিক পেজের সম্পূর্ণ HTML বিল্ড টাইমে ক্যাশ থাকে।\n- **Client Router Cache**: ইউজার পেজ ব্রাউজ করার সময় ক্লায়েন্ট মেমরিতে প্রিফেচ করা রুট ক্যাশ থাকে, ফলে ব্যাক/ফরোয়ার্ড ক্লিক ইনস্ট্যান্ট হয়।\n\n৩. **Built-in SEO & Metadata**:\n- `export async function generateMetadata({ params })` দিয়ে প্রতিটি ব্লগের জন্য ডাইনামিক টাইটেল, ডেসক্রিপশন ও সোশ্যাল শেয়ার ইমেজ (OpenGraph) তৈরি করা যায়।\n- `<Link>` কম্পোনেন্ট ভিউপোর্টে থাকা লিংকগুলোর কোড আগেভাগেই **Prefetch** করে রাখে।",
    interviewAnswer:
      "Next.js maximizes performance via a multi-tiered architecture. **Streaming with Suspense** breaks the server response into progressive HTML chunks, streaming fast UI instantly while loading slower async components via skeleton fallbacks. Next.js employs four distinct caching layers: Request Memoization (per-render deduplication), Data Cache (cross-request persistent fetch cache), Full Route Cache (static HTML/RSC on the server), and Client Router Cache (session-based in-memory navigation cache). For SEO, the Metadata API (`generateMetadata`) provides automated tags, sitemaps, OpenGraph cards, and Core Web Vitals optimizations.",
    detailedExplanation: {
      whatItIs:
        "Next.js App Router-এর পারফরম্যান্স, ক্যাশিং ও ডিসকভারেবিলিটি আর্কিটেকচার।",
      whyItExists:
        "সর্বনিম্ন TTFB (Time to First Byte), শূন্য রেন্ডার ব্লকিং এবং ম্যাক্সিমাম সার্চ ইঞ্জিন র‍্যাঙ্কিং অর্জন করার জন্য।",
      howItWorks:
        "Node.js/Edge রানটাইম HTTP/1.1 Transfer-Encoding: chunked বা HTTP/2 ডেটা ফ্রেম দিয়ে ব্রাউজারে স্ট্রিমিং সম্পন্ন করে।",
      whenToUse:
        "সমস্ত প্রোডাকশন অ্যাপ্লিকেশনে। বিশেষ করে ভারী ড্যাশবোর্ড এবং ইকমার্স প্রোডাক্ট পেজে Suspense স্ট্রিমিং ও ডাইনামিক মেটাডাটা অপরিহার্য।",
      keyPoints: [
        "Suspense Streaming সার্ভার রেন্ডারিংয়ের সময় TTFB কমিয়ে দেয়।",
        "৪টি ক্যাশ লেয়ার: Request Memoization, Data Cache, Full Route Cache, Router Cache।",
        "`generateMetadata` দিয়ে সম্পূর্ণ টাইপ-সেফ এসইও মেটাডাটা তৈরি হয়।",
        "`next/image` স্বয়ংক্রিয়ভাবে WebP/AVIF কনভার্সন ও লেজি লোডিং দেয়।",
      ],
    },
    codeExample: {
      language: "typescript",
      code: `// app/blog/[slug]/page.tsx
import { Suspense } from "react";

// ১. Built-in Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetch(\`https://api.example.com/posts/\${slug}\`).then(r => r.json());
  
  return {
    title: \`\${post.title} | Prep Portal\`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

// ২. ধীরগতির কম্পোনেন্ট যা স্ট্রিম হবে
async function SlowCommentsSection({ slug }: { slug: string }) {
  // ৩ সেকেন্ড সময় নিলেও মূল পেজ আটকে থাকবে না
  const comments = await fetch(\`https://api.example.com/comments/\${slug}\`, { cache: 'no-store' }).then(r => r.json());
  return <div>Comments: {comments.length}</div>;
}

// ৩. মেইন পেজ
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Blog Article: {slug}</h1>
      <p>Instant fast content rendered from server...</p>

      {/* স্ট্রিমিং ফলব্যাক: কমেন্ট আসতে দেরি হলে স্কেলিটন দেখাবে */}
      <Suspense fallback={<div className="animate-pulse bg-zinc-200 h-24 rounded" />}>
        <SlowCommentsSection slug={slug} />
      </Suspense>
    </main>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Metadata generation",
          description: "generateMetadata স্বয়ংক্রিয়ভাবে গুগল ও ফেসবুক বটকে সঠিক টাইটেল ও ছবি সরবরাহ করবে।",
        },
        {
          step: 2,
          title: "Suspense Streaming",
          description: "মূল আর্টিকেলটি সাথে সাথে দেখা যাবে; কমেন্ট সেকশন লোড হওয়া পর্যন্ত স্কেলিটন প্লেসহোল্ডার দেখাবে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "News Portal Article Page",
        description: "খবরের মূল টেক্সট ও ছবি ১০০ মিলিসেকেন্ডে লোড হওয়া এবং সাইডবারের রিকমেন্ডেড ও ট্রেন্ডিং নিউজগুলো ব্যাকগ্রাউন্ডে স্ট্রিম হওয়া।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে ৪টি ক্যাশিং লেয়ারের নাম ক্রমানুসারে বললে সিনিয়র আর্কিটেক্ট লেভেলের ইম্প্রেশন তৈরি হয়: 'Request Memoization (React), Data Cache (Next.js server), Full Route Cache (Server HTML), and Router Cache (Client browser memory).'",
      deliveryStrategy: "Time to First Byte (TTFB) কমাতে Streaming কীভাবে সাহায্য করে তা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "Next.js এ ক্যাশিং ডিসেবল করার কোনো উপায় নেই।",
          right: "Next.js এ `export const dynamic = 'force-dynamic'`, `revalidatePath`, বা `cache: 'no-store'` দিয়ে যেকোনো ক্যাশ লেয়ার সহজেই বাইপাস বা ক্লিয়ার করা যায়।",
        },
      ],
    },
    quickRevision: [
      "Streaming with Suspense: দ্রুত চাঙ্ক রেন্ডারিং ও কম TTFB।",
      "৪টি ক্যাশ: Request Memoization, Data Cache, Full Route Cache, Router Cache।",
      "SEO: `generateMetadata` + `<Link prefetch>` + `next/image`।",
    ],
    followUpQuestions: [
      {
        question: "Next.js-এ Middleware কীভাবে কাজ করে এবং কখন ব্যবহার করা হয়?",
        shortHint: "রিকোয়েস্ট কমপ্লিট হওয়ার আগেই এজ (Edge)-এ অথেন্টিকেশন চেক, রিডাইরেক্ট বা হেডার মডিফাই করতে Middleware ব্যবহৃত হয়।",
      },
    ],
    tags: ["Next.js", "Streaming", "Suspense", "Caching", "SEO", "Performance"],
  },
];
