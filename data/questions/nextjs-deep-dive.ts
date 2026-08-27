import { Question } from "@/types";

export const nextjsDeepDiveQuestions: Question[] = [
  // 1. Next.js Basics & Fundamentals
  {
    id: "nextjs-fundamentals-vs-traditional-react",
    slug: "nextjs-fundamentals-vs-traditional-react",
    question: "What is Next.js, why was it invented, why did it become popular, what features does it have, and what problems does it solve compared to traditional React?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "**Next.js** হলো Vercel দ্বারা তৈরি একটি প্রোডাকশন-রেডি ফুলস্ট্যাক React ফ্রেমওয়ার্ক। ঐতিহ্যবাহী React SPA (Single Page Application)-এর দুর্বল SEO, ধীরগতির প্রাথমিক পেজ লোড (Slow Initial Load), জটিল কনফিগারেশন এবং ক্লায়েন্ট-সাইড বান্ডেল সাইজের বিশালতা দূর করতে Next.js উদ্ভাবিত হয়। এটি বিল্ট-ইন ফাইল-সিস্টেম রাউটিং, হাইব্রিড রেন্ডারিং (SSR, SSG, ISR, RSC), অটোমেটিক ইমেজ/ফন্ট অপ্টিমাইজেশন এবং ফুলস্ট্যাক API রুট সাপোর্ট করে।",
    easyExplanation:
      "১. **ট্রেডিশনাল React (SPA)-এর কী কী সমস্যা ছিল?**\n- **বাজে SEO (Search Engine Optimization)**: React SPA ব্রাউজারে একটি খালি `<div id=\"root\"></div>` পাঠায়। গুগল বা ফেসবুকের বট এসে কোনো কনটেন্ট দেখতে পেত না, ফলে সার্চ রেজাল্টে র‍্যাঙ্ক করত না।\n- **Slow First Contentful Paint (FCP)**: ব্রাউজারকে মেগা-বাইটের বিশাল জাভাস্ক্রিপ্ট বান্ডেল ডাউনলোড ও এক্সিকিউট করে তারপর স্ক্রিনে কিছু দেখাতে হতো, ফলে স্লো ইন্টারনেটে ইউজার সাদা স্ক্রিন দেখত।\n- **জিরো ব্যাকএন্ড সাপোর্ট**: রাউটিং, বান্ডলিং, ইমেজ রিসাইজিং বা ব্যাকএন্ড API-এর জন্য ১০টি আলাদা লাইব্রেরি কনফিগার করতে হতো।\n\n২. **Next.js কেন বিশ্বব্যাপী জনপ্রিয় হলো?**\n- **হাইব্রিড রেন্ডারিং**: একই প্রজেক্টে প্রয়োজন অনুযায়ী SSR, SSG, ISR এবং Client Rendering ব্যবহার করার স্বাধীনতা।\n- **React Server Components (RSC)**: জিরো ক্লায়েন্ট বান্ডেল সাইজ এবং সরাসরি ডেটাবেস থেকে সিকিউর ডেটা ফেচিং।\n- **File-system Routing (App Router)**: ফোল্ডার বানালেই অটোমেটিক রুট তৈরি হয়ে যায়, কোনো React Router বয়লারপ্লেট লাগে না।\n- **Zero Config**: Webpack, Babel, TypeScript, Tailwind, ESLint সবকিছু আগে থেকেই অপ্টিমাইজড কনফিগার করা থাকে।\n- **Server Actions & API Routes**: আলাদা Node.js/Express সার্ভার ছাড়াই ব্যাকএন্ড তৈরি করা যায়।",
    interviewAnswer:
      "Next.js is an enterprise-grade full-stack framework built on top of React by Vercel. It was created to overcome the intrinsic limitations of traditional React Client-Side Rendered (CSR) Single Page Applications: poor SEO discoverability, slow Time-to-Interactive (TTI) caused by bloated client JavaScript bundles, and lack of native routing or backend capabilities. Next.js gained massive industry adoption because it provides out-of-the-box hybrid rendering (SSR, SSG, ISR, React Server Components), intuitive file-system routing, automated image/font optimization, route handlers, and zero-configuration tooling.",
    detailedExplanation: {
      whatItIs:
        "React-এর ওপর নির্মিত একটি অল-ইন-ওয়ান ফুলস্ট্যাক মেটা-ফ্রেমওয়ার্ক।",
      whyItExists:
        "React SPA-র ব্ল্যাঙ্ক রুট ডম, এসইও ব্যর্থতা, প্রাথমিক লোড ল্যাগ এবং জটিল আর্কিটেকচার দূর করতে।",
      howItWorks:
        "সার্ভার সাইডে Node.js বা Edge রানটাইমে React কম্পোনেন্ট রেন্ডার করে প্রি-রেন্ডার করা HTML ব্রাউজারে পাঠায়, এরপর ক্লায়েন্টে হাইড্রেট করে।",
      whenToUse:
        "ই-কমার্স, ব্লগ, নিউজ পোর্টাল, এন্টারপ্রাইজ SaaS ড্যাশবোর্ড এবং যেকোনো এসইও-গুরুত্বপূর্ণ ওয়েবসাইটে।",
      keyPoints: [
        "React is a View Library; Next.js is a Full-stack Framework.",
        "Solves CSR SEO issues by pre-rendering HTML on the server.",
        "Automatic code-splitting ensures each page only loads its required JavaScript.",
        "Built-in optimizations for images (`next/image`), fonts (`next/font`), and scripts.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// Next.js App Router (app/page.tsx) - React Server Component (Default)
// সার্ভারে সরাসরি ডেটাবেস ফেচ হচ্ছে - ক্লায়েন্টে কোনো JS বান্ডেল যাচ্ছে না!
export default async function HomePage() {
  const products = await getFeaturedProducts(); // Direct DB / API call

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Featured Catalog</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-emerald-600">\${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Zero-bundle server component",
          description: "সার্ভারে HTML তৈরি হয়ে ক্লায়েন্টে আসে; ক্লায়েন্টে কোনো অতিরিক্ত ডেটা-ফেচিং লাইব্রেরি বা JS পাঠানো হয় না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Storefront (Nike, Target)",
        description: "সার্চ ইঞ্জিনে প্রতি মিলিসেকেন্ডে প্রোডাক্টের পেজ র‍্যাঙ্ক করানো এবং ফার্স্ট পেজ লোড ১ সেকেন্ডের নিচে নামিয়ে আনা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js transforms React from a client-side view library into a complete fullstack architectural solution with zero-config hybrid rendering and built-in Core Web Vitals optimizations.'",
      deliveryStrategy: "React SPA বনাম Next.js-এর প্রাথমিক লোড মেকানিজমের পার্থক্য এঁকে বা বর্ণনা করে স্পষ্ট করুন।",
      avoidSaying: [
        {
          wrong: "Next.js এবং React দুটি সম্পূর্ণ আলাদা প্রোগ্রামিং ল্যাঙ্গুয়েজ।",
          right: "Next.js হলো React-এর ওপর তৈরি একটি ফ্রেমওয়ার্ক যা React-এর ফিচারসমূহকে ফুলস্ট্যাক ক্ষমতা ও সার্ভার রেন্ডারিং দেয়।",
        },
      ],
    },
    quickRevision: [
      "Next.js = Full-stack React Framework (by Vercel).",
      "Solves React CSR SEO & slow initial load problems.",
      "Hybrid rendering: SSR, SSG, ISR, CSR, Server Components.",
      "File-system routing + Built-in API routes + Edge Middleware.",
    ],
    followUpQuestions: [
      {
        question: "Next.js App Router এবং Pages Router-এর মধ্যে মূল পার্থক্য কী?",
        shortHint: "App Router React Server Components (RSC), নেস্টেড লেআউট এবং উন্নত স্ট্রিমিং সাপোর্ট করে; Pages Router লেগ্যাসি।",
      },
    ],
    tags: ["Next.js", "Fullstack", "React Framework", "SSR", "SEO", "Architecture"],
  },

  // 2. File-System Routing System (App Router)
  {
    id: "nextjs-file-system-routing-app-router",
    slug: "nextjs-file-system-routing-app-router",
    question: "How does the File-System Routing system work in Next.js App Router, and what are the special file conventions and advanced routing features?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js App Router-এ ফোল্ডারের হায়ারার্কি সরাসরি URL পাথ নির্ধারণ করে। প্রতিটি ফোল্ডারে বিশেষ কিছু ফাইল কনভেনশন থাকে: **`page.tsx`** (রুটের মূল UI), **`layout.tsx`** (শেয়ার্ড ও পারসিস্টেন্ট লেআউট), **`template.tsx`** (প্রতি নেভিগেশনে রি-মাউন্ট হওয়া লেআউট), **`loading.tsx`** (অটোমেটিক Suspense লোডার), **`error.tsx`** (Error Boundary), এবং **`not-found.tsx`**। এছাড়াও অ্যাডভান্সড রুটিংয়ে **Route Groups `(group)`**, **Parallel Routes `@modal`**, এবং **Intercepting Routes `(..)`** সাপোর্ট করে।",
    easyExplanation:
      "১. **ফোল্ডার স্ট্রাকচার ও ফাইল কনভেনশন**:\n- `app/about/page.tsx` -> `/about` রুটে ম্যাপ হয়।\n- `app/blog/[id]/page.tsx` -> ডাইনামিক রুট `/blog/123` হ্যান্ডেল করে।\n- `app/docs/[...slug]/page.tsx` -> Catch-all রুট (`/docs/a/b/c`)।\n- `app/docs/[[...slug]]/page.tsx` -> Optional Catch-all রুট (`/docs` এবং `/docs/a/b`)।\n\n২. **স্পেশাল ফাইলগুলোর দায়িত্ব**:\n- **`layout.tsx`**: স্টেট ধরে রাখে এবং পেজ পরিবর্তনের সময় পুনরায় রেন্ডার হয় না (Navbar, Sidebar)।\n- **`template.tsx`**: `layout`-এর মতোই, তবে প্রতিটি পেজ ট্রানজিশনে নতুন করে মাউন্ট হয় (অ্যানিমেশনের জন্য আদর্শ)।\n- **`loading.tsx`**: পুরো রুটকে স্বয়ংক্রিয়ভাবে `<Suspense fallback={<Loading />}>`-এ মুড়ে দেয়।\n- **`error.tsx`**: ক্লায়েন্ট এরর বাউন্ডারি (`'use client'` আবশ্যক)।\n\n৩. **অ্যাডভান্সড রাউটিং ফিচারসমূহ**:\n- **Route Groups `(marketing)` / `(dashboard)`**: URL পাথ পরিবর্তন না করে শুধুমাত্র কোড ফাইল ও আলাদা লেআউট অর্গানাইজ করা।\n- **Parallel Routes (`@analytics`, `@team`)**: একই লেআউটে একাধিক স্বাধীন পেজ একসাথে পাশাপাশি রেন্ডার করা।\n- **Intercepting Routes (`(..)photo/[id]`)**: পেজ নেভিগেট না করে ফিডের ওপর ইনস্টাগ্রামের মতো মোডালে ছবি দেখানো, কিন্তু লিঙ্ক রিফ্রেশ করলে সম্পূর্ণ পেজে ওপেন হওয়া।",
    interviewAnswer:
      "Next.js App Router utilizes a directory-driven file-system routing model where folders define URL paths and special reserved files define route behavior. Core conventions include `page.tsx` (unique route UI), `layout.tsx` (persistent, state-preserving shared wrappers), `template.tsx` (re-instantiated layouts), `loading.tsx` (automated Suspense boundaries), `error.tsx` (client-side Error Boundaries), and `not-found.tsx`. Advanced paradigms include **Route Groups `(folder)`** to decouple folder structure from URL segments, **Parallel Routes `@slot`** for simultaneous independent sub-views, and **Intercepting Routes `(..)segment`** for contextual modal overlays.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর কোর নেস্টেড রাউটিং ও ফাইল আর্কিটেকচার কনভেনশন।",
      whyItExists:
        "ম্যানুয়াল রুট কনফিগারেশন ফাইল দূর করা এবং নেস্টেড লেআউট ও ফলব্যাকের আর্কিটেকচারাল ইন্টিগ্রিটি বজায় রাখা।",
      howItWorks:
        "Next.js ফোল্ডার ট্রাভার্স করে একটি ইন্টারনাল রুট ট্রি ও রিয়েক্ট কম্পোনেন্ট হায়ারার্কি তৈরি করে।",
      whenToUse:
        "সব আধুনিক Next.js প্রজেক্টের পেজ, লেআউট, মোডাল ও ড্যাশবোর্ড স্ট্রাকচারে।",
      keyPoints: [
        "`page.tsx` is required to make a route publicly accessible.",
        "`layout.tsx` does NOT re-render on sub-route transitions (preserves state).",
        "`error.tsx` must always be a Client Component (`'use client'`).",
        "Route Groups `(name)` do not affect the public URL path.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// app/dashboard/layout.tsx
// Persistent Layout: সাব-পেজ চেঞ্জ হলেও সাইডবারের স্টেট অক্ষুণ্ণ থাকবে
export default function DashboardLayout({
  children,
  analytics, // Parallel Route Slot: app/dashboard/@analytics/page.tsx
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 text-white p-4">
        <h2>Dashboard Nav</h2>
      </aside>
      <main className="flex-1 p-6 space-y-6">
        {children}
        <section className="border p-4 rounded bg-slate-50">
          {analytics}
        </section>
      </main>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Nested layout & Parallel slot",
          description: "DashboardLayout সাইডবার ফিক্সড রেখে মূল পেজ (children) এবং প্যারালাল অ্যানালিটিক্স স্লট একসাথে রেন্ডার করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Instagram / Pinterest Modal Route (Intercepting)",
        description: "ফিডে ছবির ওপর ক্লিক করলে URL বদলে `/photo/123` হয় এবং মোডালে ছবি খোলে; কিন্তু সেই URL রিফ্রেশ দিলে একক পূর্ণাঙ্গ ফটো পেজ প্রদর্শিত হয়।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'App Router is built around nested layouts where layout.tsx preserves state and avoids re-rendering during navigation, whereas template.tsx creates a fresh component instance on every route change.'",
      deliveryStrategy: "Layout বনাম Template এর পার্থক্য এবং Route Groups এর ব্যবহার উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "error.tsx ফাইলটি সার্ভার কম্পোনেন্ট হিসেবে কাজ করে।",
          right: "error.tsx অবশ্যই ক্লায়েন্ট কম্পোনেন্ট (`'use client'`) হতে হবে কারণ এটি ক্লায়েন্ট রানটাইম এরর ক্যাচ করে।",
        },
      ],
    },
    quickRevision: [
      "page.tsx: Route endpoint UI.",
      "layout.tsx: Shared, persistent layout (state preserved).",
      "template.tsx: Re-mounted on every navigation (animations).",
      "loading.tsx: Instant Suspense fallback.",
      "(group): Organizational route grouping (URL unaffected).",
    ],
    followUpQuestions: [
      {
        question: "layout.tsx এবং template.tsx এর মধ্যে মূল পার্থক্য কী?",
        shortHint: "পেজ নেভিগেশনের সময় layout.tsx আনমাউন্ট হয় না এবং স্টেট বজায় রাখে; template.tsx প্রতিবার সম্পূর্ণ নতুন ইনস্ট্যান্স হিসেবে রি-মাউন্ট হয়।",
      },
    ],
    tags: ["Next.js", "App Router", "Routing", "Layouts", "Parallel Routes", "Intercepting Routes"],
  },

  // 3. API Routes, Route Handlers & Middleware
  {
    id: "nextjs-api-routes-and-middleware",
    slug: "nextjs-api-routes-and-middleware",
    question: "How do API Routes / Route Handlers and Middleware work in Next.js, and how are edge proxies implemented?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js App Router-এ **Route Handlers (`route.ts`)** দিয়ে সুরক্ষিত RESTful বা GraphQL ব্যাকএন্ড এন্ডপয়েন্ট তৈরি করা হয় যা স্ট্যান্ডার্ড HTTP মেথড (GET, POST, PUT, DELETE, PATCH) এবং Web Request/Response API সমর্থন করে। **Middleware (`middleware.ts`)** হলো এমন একটি কোড যা কোনো রিকোয়েস্ট সম্পূর্ণ হওয়ার আগে এজ নেটওয়ার্কে (Edge Runtime) ইন্টারসেপ্ট করে অথেনটিকেশন চেক, রিডাইরেক্ট, হেডার মডিফিকেশন, জিও-প্রক্সি বা রেট-লিমিটিং সম্পন্ন করে।",
    easyExplanation:
      "১. **Route Handlers (`app/api/.../route.ts`)**:\n- আলাদা Express.js সার্ভার না চালিয়ে সরাসরি Next.js-এর ভেতরেই সুরক্ষিত API এন্ডপয়েন্ট তৈরি করা যায়।\n- ফাংশনের নাম সরাসরি HTTP মেথড অনুযায়ী দিতে হয়: `export async function GET(request: Request) { ... }`।\n- `NextResponse.json({ success: true })` দিয়ে দ্রুত JSON রেসপন্স রিটার্ন করা যায়।\n\n২. **Next.js Middleware (`middleware.ts`)**:\n- প্রজেক্টের রুট ডিরেক্টরিতে `middleware.ts` ফাইল থাকে।\n- যেকোনো পেজ বা API রুটে রিকোয়েস্ট পৌঁছানোর ঠিক **আগে** মিডলওয়্যার এক্সিকিউট হয়।\n- এটি অতি দ্রুতগতির Vercel Edge Network-এ রান করে।\n\n৩. **মিডলওয়্যারের প্রধান ব্যবহারসমূহ**:\n- **Authentication & Protected Routes**: ইউজার লগইন না থাকলে ড্যাশবোর্ড পেজে যাওয়ার আগেই `/login`-এ রিডাইরেক্ট করা।\n- **URL Rewriting & Reverse Proxy**: ইউজারের ব্রাউজারের URL ঠিক রেখে পেছনের ইন্টারনাল API বা সার্ভারে রিকোয়েস্ট পাঠানো।\n- **Geolocation & Localization**: ইউজারের আইপি ও দেশ অনুযায়ী সঠিক ভাষা বা মুদ্রার পেজে পাঠানো।\n- **Custom Headers**: সিকিউরিটি হেডার (CORS, CSP, Auth Bearer) ইনজেক্ট করা।",
    interviewAnswer:
      "In Next.js App Router, **Route Handlers** (defined in `route.ts` files) provide native full-stack backend capabilities using standard Web `Request` and `Response` interfaces, exposing explicit HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`). **Middleware** (`middleware.ts`) runs on the lightweight **Edge Runtime** before any incoming request is processed by the route tree. It intercepts traffic to perform non-blocking authentication gating, header/cookie mutations, geographical routing, rate-limiting, and URL rewrites/redirects without invoking the heavier Node.js origin server.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর সার্ভারলেস ব্যাকএন্ড এন্ডপয়েন্ট ইঞ্জিন এবং এজ ইন্টারসেপ্টর।",
      whyItExists:
        "আলাদা ব্যাকএন্ড সার্ভার মেইনটেইন করার খরচ কমানো এবং সিকিউরিটি/অথ চেকিংকে এজ নেটওয়ার্কে দ্রুত সম্পাদন করা।",
      howItWorks:
        "Incoming HTTP Request -> Edge Middleware (`middleware.ts`) -> [Allow / Redirect / Rewrite / Set Headers] -> Route Handler or Page.",
      whenToUse:
        "JWT/Cookie Auth ভেরিফিকেশন, স্ট্রাইপ ওয়েবহুক, থার্ড পার্টি API প্রক্সি এবং রেট-লিমিটিংয়ে।",
      keyPoints: [
        "Route Handlers cannot co-exist with a `page.tsx` in the exact same directory route.",
        "Middleware runs on Edge Runtime (cannot use heavy Node.js libraries like standard `fs`).",
        "Use `matcher` config in middleware to strictly define which routes it intercepts.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. middleware.ts (রুট ফোল্ডারে)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

  // Auth Protection: টোকেন না থাকলে লগইনে রিডাইরেক্ট
  if (isDashboard && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // কাস্টম হেডার যুক্ত করে রিকোয়েস্ট পরবর্তী স্তরে পাস
  const response = NextResponse.next();
  response.headers.set("x-custom-security-header", "JobInterviewPortal");
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/protected/:path*"],
};

// ২. app/api/users/route.ts (Route Handler)
export async function POST(req: Request) {
  const body = await req.json();
  // ব্যাকএন্ড লজিক / ডেটাবেস অপারেশন
  return NextResponse.json({ success: true, created: body }, { status: 201 });
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Edge middleware guard",
          description: "ড্যাশবোর্ড রুটে যাওয়ার আগেই এজ লেভেলে কুকি ভ্যালিডেট করে সিকিউর রিডাইরেক্ট করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "অ্যাডমিন বা সাধারণ ইউজারের সেশন কুকি মিডলওয়্যারে যাচাই করে অননুমোদিত ইউজারকে তাৎক্ষণিক অ্যাক্সেস ব্লক করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js Middleware executes on the Edge Runtime before cached content or route handlers are hit, making it the most optimal place for authentication guards and security headers.'",
      deliveryStrategy: "Middleware-এ কেন ভারী Node.js মডিউল (যেমন `crypto` বা `fs`) সরাসরি চলে না (Edge Runtime এর সীমাবদ্ধতা) তা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "Route Handler একই ফোল্ডারে page.tsx এর সাথে একসাথে রাখা যায়।",
          right: "একই রুটে `route.ts` এবং `page.tsx` একসাথে থাকতে পারে না; থাকলে কনফ্লিক্ট তৈরি হয়।",
        },
      ],
    },
    quickRevision: [
      "Route Handlers (`route.ts`): Built-in REST/GraphQL endpoints (`GET`, `POST`, etc.).",
      "Middleware (`middleware.ts`): Intercepts requests on Edge Runtime before matching routes.",
      "Key uses: Auth guards, redirects, rewrites, custom headers, geo-routing.",
      "Configure `matcher` to limit middleware execution scope.",
    ],
    followUpQuestions: [
      {
        question: "Middleware-এ redirect এবং rewrite এর মধ্যে পার্থক্য কী?",
        shortHint: "redirect ব্রাউজারের URL পরিবর্তন করে নতুন পেজে পাঠায়; rewrite ব্রাউজারের URL ঠিক রেখে ইন্টারনালি অন্য কনটেন্ট পরিবেশন করে।",
      },
    ],
    tags: ["Next.js", "Route Handlers", "Middleware", "Edge Runtime", "API Routes", "Security"],
  },

  // 4. Hydration & Hydration Mismatch
  {
    id: "hydration-and-hydration-mismatch-in-nextjs",
    slug: "hydration-and-hydration-mismatch-in-nextjs",
    question: "What is Hydration in Next.js, how does it work, what causes Hydration Mismatches, and how do you prevent/fix them?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Hydration** হলো সেই প্রক্রিয়া যার মাধ্যমে সার্ভার থেকে পাঠানো স্ট্যাটিক HTML মার্কআপের সাথে ক্লায়েন্ট-সাইড রিয়্যাক্ট জাভাস্ক্রিপ্ট যুক্ত হয়ে ইভেন্ট লিসেনার (onClick, onChange) রেজিস্টার করে এবং পেজটিকে সম্পূর্ণ ইন্টারঅ্যাক্টিভ করে তোলে। যখন সার্ভার থেকে রেন্ডার হওয়া HTML এবং ব্রাউজারে প্রথমবার তৈরি হওয়া Virtual DOM-এর মধ্যে তথ্যের অমিল থাকে, তখন **Hydration Mismatch Error** ঘটে।",
    easyExplanation:
      "১. **হাইড্রেশন প্রক্রিয়াটি কীভাবে কাজ করে?**:\n- ধাপ ১: সার্ভার HTML তৈরি করে ব্রাউজারে পাঠায়। ইউজার সাথে সাথে পেজের কনটেন্ট দেখতে পায় (Fast FCP)। কিন্তু তখন বাটন ক্লিক করলে কাজ করে না।\n- ধাপ ২: ব্রাউজার পেছনের জাভাস্ক্রিপ্ট বান্ডেল ডাউনলোড করে।\n- ধাপ ৩: **Hydration Phase** — React ব্রাউজারের আসল HTML ট্রির সাথে Virtual DOM মিলিয়ে দেখে এবং প্রতিটি এলিমেন্টে প্রয়োজনীয় ইভেন্ট লিসেনারগুলো 'সংযুক্ত' (Attach) করে দেয়। এখন পেজটি পুরোপুরি জীবন্ত!\n\n২. **Hydration Mismatch কেন ঘটে?**:\n- **Browser-only APIs ব্যবহার**: রেন্ডারের সময় সরাসরি `window`, `localStorage`, বা `navigator` কল করা (যা সার্ভারে `undefined` কিন্তু ক্লায়েন্টে উপস্থিত)।\n- **Time/Date এবং Random Values**: `new Date().toLocaleTimeString()` বা `Math.random()` ব্যবহার করা (সার্ভারে রেন্ডারের সময় এক মান, ক্লায়েন্টে পৌঁছানোর পর অন্য মান)।\n- **ভুল HTML ট্যাগ নেস্টিং (Invalid HTML)**: যেমন `<p>` ট্যাগের ভেতরে `<div>` বা `<p>` ঢোকানো, অথবা `<table>`-এর ভেতর সরাসরি `<tr>` রাখা (`<tbody>` ছাড়া)। ব্রাউজার অটো-কারেক্ট করে DOM বদলে ফেলে, ফলে React গরমিল পায়।\n\n৩. **কীভাবে সমাধান করবেন?**:\n- **পদ্ধতি ১ (`useEffect` Mounting Pattern)**: শুধুমাত্র মাউন্ট হওয়ার পর ক্লায়েন্ট-স্পেসিফিক কোড চালানো।\n- **পদ্ধতি ২ (`suppressHydrationWarning`)**: সময় বা ডাইনামিক টেক্সটের ক্ষেত্রে নির্দিষ্ট ট্যাগে এই অ্যাট্রিবিউট ব্যবহার করা।\n- **পদ্ধতি ৩ (`dynamic(..., { ssr: false })`)**: ক্লায়েন্ট-অনলি কম্পোনেন্টকে সার্ভার রেন্ডারিং থেকে বাদ দেওয়া।",
    interviewAnswer:
      "**Hydration** is the React process of attaching event handlers and internal state management logic to the server-rendered pre-existing HTML markup in the browser, making the static page dynamic and interactive. A **Hydration Mismatch** occurs when the initial client-rendered Virtual DOM tree differs from the server-generated HTML markup. Common culprits include accessing browser-only APIs (`window`, `localStorage`) during initial render, non-deterministic values (`Date.now()`, `Math.random()`), or browser DOM auto-corrections from invalid HTML tag nesting (e.g., `<div>` inside `<p>`). Fixes involve delaying client execution using a mounted `useEffect` state flag, `suppressHydrationWarning`, or `next/dynamic` with `ssr: false`.",
    detailedExplanation: {
      whatItIs:
        "সার্ভারের স্ট্যাটিক মার্কআপকে ক্লায়েন্টের লাইভ ইন্টারঅ্যাক্টিভ অ্যাপ্লিকেশনে রূপান্তর করার সেতু।",
      whyItExists:
        "সার্ভার রেন্ডারিংয়ের গতি (Fast Paint) এবং ক্লায়েন্ট সাইড রিঅ্যাক্টিভিটির সমন্বয় সাধন করতে।",
      howItWorks:
        "React ক্লায়েন্টে DOM নোড ট্রাভার্স করে, VDOM-এর সাথে ট্যাগ ও টেক্সট মেলায় এবং নোড রি-ক্রিয়েট না করে ইভেন্ট হ্যান্ডলার ইনজেক্ট করে।",
      whenToUse:
        "SSR/SSG থেকে ক্লায়েন্ট কম্পোনেন্টে ইন্টারঅ্যাক্টিভিটি হ্যান্ডেল করার সময়।",
      keyPoints: [
        "Hydration connects JavaScript logic to pre-existing server HTML.",
        "Mismatches break React's tree reconciliation and force expensive client DOM re-renders.",
        "Never use `typeof window !== 'undefined'` directly inside JSX rendering body.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `"use client";

import { useState, useEffect } from "react";

export function HydrationSafeComponent() {
  const [mounted, setMounted] = useState(false);

  // মাউন্ট হওয়ার পর শুধুমাত্র ব্রাউজারে চলবে
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-4 border rounded">
      {/* ১. সেফ ক্লায়েন্ট রেন্ডারিং: সার্ভার ও ইনিশিয়াল ক্লায়েন্ট একই ফলব্যাক দেখবে */}
      <p>
        Theme Mode:{" "}
        {mounted ? localStorage.getItem("theme") || "system" : "loading..."}
      </p>

      {/* ২. suppressHydrationWarning: টাইমস্ট্যাম্প বা ডায়নামিক টেক্সটে */}
      <p suppressHydrationWarning className="text-xs text-slate-500">
        Current Time: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Mounted flag pattern",
          description: "mounted স্টেট ব্যবহার করায় সার্ভার ও প্রাথমিক ক্লায়েন্ট রেন্ডারে কোনো অমিল হয় না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Dark Mode Theme Provider",
        description: "লোকাল স্টোরেজ থেকে ইউজারের ডার্ক থিম প্রেফারেন্স পড়ার সময় হাইড্রেশন মিসম্যাচ রোধ করে মসৃণ থিম লোড করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Hydration mismatches degrade performance because React abandons the pre-rendered server DOM and re-creates DOM nodes from scratch on the client.'",
      deliveryStrategy: "৩টি প্রধান কারণ (Browser APIs, Date/Random, Invalid HTML tags) ক্রমানুসারে ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "সব জায়গায় suppressHydrationWarning বসিয়ে হাইড্রেশন এরর ইগনোর করা উচিত।",
          right: "suppressHydrationWarning শুধুমাত্র অগভীর টেক্সট মিসম্যাচের জন্য; স্ট্রাকচারাল মিসম্যাচ আর্কিটেকচারালি ঠিক করতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Hydration = Attaching event listeners to server-rendered HTML.",
      "Causes: Browser APIs (`window`), `Date.now()`, `Math.random()`, Invalid HTML tags (`<p><div>`).",
      "Fixes: `useEffect` mounted flag, `suppressHydrationWarning`, `next/dynamic({ ssr: false })`।",
    ],
    followUpQuestions: [
      {
        question: "Next.js-এ dynamic import দিয়ে কীভাবে SSR সম্পূর্ণ বন্ধ করবেন?",
        shortHint: "`dynamic(() => import('./Component'), { ssr: false })` ক্লায়েন্ট ছাড়া কম্পোনেন্টটি সার্ভারে রেন্ডার হতে দেয় না।",
      },
    ],
    tags: ["Next.js", "Hydration", "Hydration Mismatch", "SSR", "Client Components", "Debugging"],
  },

  // 5. Rendering Strategies: CSR, SSR, SSG, and ISR Deep Dive
  {
    id: "nextjs-rendering-strategies-csr-ssr-ssg-isr",
    slug: "nextjs-rendering-strategies-csr-ssr-ssg-isr",
    question: "What are the core differences between CSR, SSR, SSG, and ISR in Next.js, and how does each rendering strategy work?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "Next.js ৪টি শক্তিশালী রেন্ডারিং স্ট্র্যাটেজি অফার করে:\n- **CSR (Client-Side Rendering)**: ব্রাউজারে জাভাস্ক্রিপ্ট দিয়ে ক্লায়েন্ট সাইডে রেন্ডার হয়।\n- **SSR (Server-Side Rendering)**: প্রতি রিকোয়েস্টে সার্ভার লাইভ HTML তৈরি করে পাঠায়।\n- **SSG (Static Site Generation)**: বিল্ড টাইমে একবার সমস্ত HTML তৈরি হয়ে গ্লোবাল CDN-এ সংরক্ষিত থাকে।\n- **ISR (Incremental Static Regeneration)**: স্ট্যাটিক পেজের মতো দ্রুত CDN থেকে পরিবেশন করে কিন্তু ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পর পর বা অন-ডিমান্ড ডেটা রিভ্যালিডেট করে নতুন HTML তৈরি করে।",
    easyExplanation:
      "রেন্ডারিং স্ট্র্যাটেজির তুলনামূলক পর্যালোচনা:\n\n| বৈশিষ্ট্য | CSR | SSR | SSG | ISR |\n| :--- | :--- | :--- | :--- | :--- |\n| **HTML তৈরির সময়** | ব্রাউজারে | প্রতি রিকোয়েস্টে সার্ভারে | বিল্ড টাইমে | বিল্ড টাইমে + ব্যাকগ্রাউন্ড রিভ্যালিডেশনে |\n| **TTFB (Time to First Byte)** | অতি দ্রুত (খালি ফাইল) | তুলনামূলক স্লো (সার্ভার প্রসেসিং) | অতি দ্রুত (CDN ক্যাশড) | অতি দ্রুত (CDN ক্যাশড) |\n| **SEO সুবিধা** | খুব দুর্বল | চমৎকার | সেরা | সেরা |\n| **সার্ভার লোড ও খরচ** | শূন্য (ক্লায়েন্টে চলে) | উচ্চ (প্রতি হিটে রেন্ডার) | সর্বনিম্ন (CDN থেকে সার্ভ হয়) | সর্বনিম্ন (CDN থেকে সার্ভ হয়) |\n| **ডেটার সতেজতা (Freshness)** | রিয়েল-টাইম | ১০০% লাইভ রিয়েল-টাইম | বিল্ডের সময়কার ডেটা | নির্দিষ্ট সময় পর পর অটো-আপডেট |\n\n**কখন কোনটি ব্যবহার করবেন?**:\n- **CSR**: প্রাইভেট ড্যাশবোর্ড, ইউজার সেটিংস, ইন্টারঅ্যাক্টিভ গেম।\n- **SSR**: সোশ্যাল মিডিয়া ফিড, লাইভ স্টক এক্সচেঞ্জ, রিকোয়েস্ট কুকি/হেডার নির্ভর পেজ।\n- **SSG**: মার্কেটিং ল্যান্ডিং পেজ, প্রাইভেসি পলিসি, ফিক্সড ডকুমেন্টেশন।\n- **ISR**: ই-কমার্স প্রোডাক্ট পেজ (যেখানে লাখ লাখ প্রোডাক্টের দাম/স্টক নিয়মিত বদলায় কিন্তু পেজ বিল্ডে ঘণ্টার পর ঘণ্টা সময় নেওয়া সম্ভব নয়)।",
    interviewAnswer:
      "Next.js provides a hybrid rendering engine encompassing four distinct strategies: **CSR** offloads rendering entirely to the browser, yielding fast initial responses but empty HTML for crawlers. **SSR** generates fresh HTML dynamically on every request at the origin/edge, delivering real-time state at the expense of TTFB and server computation. **SSG** compiles HTML at build time, deploying immutable assets directly to global Edge CDNs for sub-millisecond TTFB. **ISR** unites the speed of SSG with the freshness of SSR by allowing static routes to revalidate and regenerate incrementally in the background without rebuilding the entire application.",
    detailedExplanation: {
      whatItIs:
        "Next.js আর্কিটেকচারের চারটি মৌলিক রেন্ডারিং মডেল।",
      whyItExists:
        "পারফরম্যান্স, সার্ভার কস্ট, এসইও এবং ডেটা রিয়েল-টাইমনেসের মধ্যে নিখুঁত ভারসাম্য তৈরি করা।",
      howItWorks:
        "App Router-এ রুট সেগমেন্ট কনফিগ (`dynamic`, `revalidate`, `fetch cache`) অনুযায়ী স্বয়ংক্রিয়ভাবে স্ট্র্যাটেজি নির্ধারিত হয়।",
      whenToUse:
        "ল্যান্ডিং পেজে SSG, লাখ লাখ ই-কমার্স আইটেমে ISR, ডায়নামিক ফিডে SSR, এবং ইন্টারঅ্যাক্টিভ প্যানেলে CSR।",
      keyPoints: [
        "SSG and ISR provide the best Core Web Vitals (sub-50ms TTFB via Edge CDN).",
        "SSR should only be used when content must reflect user-specific request headers or cookies.",
        "ISR uses the Stale-While-Revalidate caching pattern.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. SSG (Static Site Generation) - ডিফল্ট
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

// ২. ISR (Incremental Static Regeneration) - প্রতি ৬০ সেকেন্ডে ব্যাকগ্রাউন্ডে রিভ্যালিডেট
export const revalidate = 60; // Route level ISR

// ৩. SSR (Server-Side Rendering) - প্রতি রিকোয়েস্টে ফোর্স ডায়নামিক
// export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // ডেটা ফেচিং লেভেলে ISR ক্যাশিং
  const res = await fetch(\`https://api.example.com/products/\${id}\`, {
    next: { revalidate: 60 }, // 60s ISR
  });
  const product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-slate-600">\${product.price}</p>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Hybrid strategy declaration",
          description: "revalidate ও generateStaticParams কনফিগারেশনের মাধ্যমে সহজে ISR ও SSG পরিচালিত হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Amazon / Flipkart E-Commerce Architecture",
        description: "হোমপেজ ও ক্যাটাগরি পেজে SSG/ISR ব্যবহার করে কোটি কোটি ইউজারের কাছে মিলি-সেকেন্ডে পেজ সার্ভ করা এবং কার্ট ও চেকআউট পেজে CSR/SSR ব্যবহার করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'I choose rendering strategies based on three metrics: SEO requirement, Data Freshness tolerance, and Infrastructure Cost. SSG/ISR is preferred for performance, SSR for request-dependent personalized content.'",
      deliveryStrategy: "চারটি স্ট্র্যাটেজির একটি তুলনামূলক চার্ট মুখে সংক্ষেপে বর্ণনা করুন।",
      avoidSaying: [
        {
          wrong: "Next.js প্রজেক্টে পুরো অ্যাপের জন্য যেকোনো একটি স্ট্র্যাটেজি সিলেক্ট করতে হয়।",
          right: "Next.js একটি হাইব্রিড ফ্রেমওয়ার্ক; প্রতিটি পেজ এবং প্রতিটি ফেচ রিকোয়েস্ট আলাদা আলাদা স্ট্র্যাটেজি ব্যবহার করতে পারে।",
        },
      ],
    },
    quickRevision: [
      "CSR: Client-side JS rendering (Private app/dashboards).",
      "SSR: On-demand server render per request (`dynamic = 'force-dynamic'`).",
      "SSG: Build-time static HTML to CDN (`generateStaticParams`).",
      "ISR: CDN speed + Background revalidation (`revalidate = 60`).",
    ],
    followUpQuestions: [
      {
        question: "Next.js App Router-এ কোনো পেজ কখন স্বয়ংক্রিয়ভাবে SSR হয়ে যায়?",
        shortHint: "যখন পেজে `cookies()`, `headers()`, `searchParams` বা `no-store` ক্যাশহীন ফেচ কল করা হয়।",
      },
    ],
    tags: ["Next.js", "CSR", "SSR", "SSG", "ISR", "Rendering Strategies", "Performance"],
  },

  // 6. Server-Side Rendering (SSR) & Static Site Generation (SSG) Deep Dive
  {
    id: "nextjs-ssr-and-ssg-deep-dive",
    slug: "nextjs-ssr-and-ssg-deep-dive",
    question: "How do Server-Side Rendering (SSR) and Static Site Generation (SSG) work in Next.js, and how do you enable and configure them?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**SSG** বিল্ড টাইমে ডেটা ফেচ করে স্ট্যাটিক HTML ফাইল তৈরি করে CDN-এ পাঠিয়ে দেয়; App Router-এ এটি ডিফল্ট এবং ডাইনামিক রুটের জন্য **`generateStaticParams`** (Pages Router-এ `getStaticProps` ও `getStaticPaths`) ব্যবহার করে। **SSR** প্রতি HTTP রিকোয়েস্টে সার্ভারে রিয়েল-টাইম HTML রেন্ডার করে; App Router-এ এটি সক্রিয় করতে **`export const dynamic = 'force-dynamic'`**, `fetch(..., { cache: 'no-store' })` অথবা `cookies()` / `headers()` ফাংশন ব্যবহার করা হয় (Pages Router-এ `getServerSideProps`)।",
    easyExplanation:
      "১. **Static Site Generation (SSG)**:\n- **কখন চলে**: প্রোডাকশন বিল্ড (`npm run build`) দেওয়ার সময়।\n- **কীভাবে কনফিগার করবেন**:\n  - App Router-এ যেকোনো অ্যাসিনক্রোনাস সার্ভার কম্পোনেন্ট ডিফল্টভাবেই SSG হিসেবে কাজ করে।\n  - ডাইনামিক রুটের ক্ষেত্রে (যেমন `/blog/[slug]`): `generateStaticParams()` ফাংশন লিখে সব slug-এর তালিকা রিটার্ন করতে হয়।\n- **সুবিধা**: সার্ভারে কোনো লোড নেই, বিশ্বব্যাপী CDN থেকে সাব-মিলিসেকেন্ডে পেজ সার্ভ হয়।\n\n২. **Server-Side Rendering (SSR)**:\n- **কখন চলে**: যখনই কোনো ইউজার ব্রাউজারে পেজ রিকোয়েস্ট পাঠায় ঠিক সেই মুহূর্তে সার্ভারে চলে।\n- **কীভাবে সক্রিয় করবেন (App Router)**:\n  - ফাইলে `export const dynamic = 'force-dynamic'` ডিক্লেয়ার করা।\n  - ফেচ রিকোয়েস্টে `cache: 'no-store'` দেওয়া।\n  - রিকোয়েস্ট-টাইম অবজেক্ট যেমন `cookies()` বা `headers()` রিড করা।\n- **সুবিধা**: ডেটা সবসময় শতভাগ তাজা (Live Up-to-date) থাকে এবং পারসোনালাইজড কনটেন্ট (ইউজারের নাম, রোল) সার্ভারেই রেন্ডার করা যায়।\n\n৩. **SSG vs SSR মূল তুলনা**:\n- বিল্ড টাইমে কনটেন্ট জানা থাকলে -> **SSG**।\n- প্রতিটি রিকোয়েস্টে ইউজারের নিজস্ব ডেটা বা হেডার লাগলে -> **SSR**।",
    interviewAnswer:
      "In Next.js, **SSG** pre-renders HTML at build time, caching static assets globally across CDNs for lightning-fast delivery. In the App Router, dynamic SSG routes are configured using `generateStaticParams` (replacing Pages Router's `getStaticProps` and `getStaticPaths`). Conversely, **SSR** executes on every incoming HTTP request at the Node.js/Edge server. In the App Router, SSR is triggered automatically by opting out of caching via `export const dynamic = 'force-dynamic'`, `fetch(url, { cache: 'no-store' })`, or accessing dynamic request functions like `cookies()` and `headers()` (replacing Pages Router's `getServerSideProps`).",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর বিল্ড-টাইম বনাম রিকোয়েস্ট-টাইম প্রি-রেন্ডারিং কনফিগারেশন।",
      whyItExists:
        "সর্বোচ্চ গতি (SSG) বনাম রিকোয়েস্ট-লেভেল রিয়েল-টাইম ইন্টারঅ্যাকশন (SSR) নিয়ন্ত্রণ করা।",
      howItWorks:
        "App Router স্ট্যাটিক এনালাইসিসের মাধ্যমে রুটকে অটোমেটিক Static (SSG) বা Dynamic (SSR) হিসেবে ক্যাটাগরি করে।",
      whenToUse:
        "মার্কেটিং ও ব্লগ সাইটে SSG; ইউজার স্পেসিফিক ড্যাশবোর্ড ও লাইভ ফিডে SSR।",
      keyPoints: [
        "App Router replaces `getStaticProps`/`getStaticPaths` with async Server Components + `generateStaticParams`.",
        "App Router replaces `getServerSideProps` with `force-dynamic` / `no-store` / `cookies()`.",
        "Static rendering is the default behavior in Next.js App Router.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. SSG: বিল্ড টাইমে ১০টি ব্লগের HTML আগে থেকেই বানিয়ে রাখা
export async function generateStaticParams() {
  const posts = await fetch("https://api.example.com/posts").then((r) => r.json());
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// ২. SSR এনাবল করতে চাইলে আনকমেন্ট করুন:
// export const dynamic = "force-dynamic";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetch(\`https://api.example.com/posts/\${slug}\`).then((r) => r.json());

  return (
    <article className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-slate-700">{post.content}</p>
    </article>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "generateStaticParams",
          description: "বিল্ডের সময় slug প্যারামিটারগুলো প্রি-রেন্ডার করে স্ট্যাটিক ফাইল তৈরি করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Documentation Portal (SSG) vs Live Banking Dashboard (SSR)",
        description: "ডকুমেন্টেশন সাইট SSG দিয়ে দ্রুত ওপেন করা, আর ব্যাংকিং ব্যালেন্স পেজ প্রতি রিকোয়েস্টে SSR দিয়ে লাইভ ডেটা আনা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js App Router unifies data fetching. We no longer need getStaticProps or getServerSideProps; any async Server Component naturally executes as SSG by default or switches to SSR when dynamic functions like cookies() or no-store fetches are detected.'",
      deliveryStrategy: "Pages Router এর মেথডগুলোর সাথে App Router এর আধুনিক সমতুল্য ফিচারগুলো তুলনা করে বলুন।",
      avoidSaying: [
        {
          wrong: "App Router-এও getServerSideProps ব্যবহার করতে হয়।",
          right: "getServerSideProps শুধুমাত্র লেগ্যাসি Pages Router-এর অংশ; App Router-এ সরাসরি async Server Component ও dynamic কনফিগ ব্যবহার করা হয়।",
        },
      ],
    },
    quickRevision: [
      "SSG: Build-time generation (`generateStaticParams`).",
      "SSR: Request-time generation (`dynamic = 'force-dynamic'`, `no-store`, `cookies()`).",
      "Pages Router: `getStaticProps` (SSG), `getServerSideProps` (SSR)।",
      "App Router: Async Server Components handle both seamlessly।",
    ],
    followUpQuestions: [
      {
        question: "generateStaticParams-এ অন্তর্ভুক্ত না থাকা slug আসলে কী ঘটবে?",
        shortHint: "`export const dynamicParams = true` থাকলে প্রথম রিকোয়েস্টে পেজটি SSR হয়ে পরে ক্যাশ হবে; false থাকলে 404 পেজ আসবে।",
      },
    ],
    tags: ["Next.js", "SSG", "SSR", "generateStaticParams", "App Router", "Pages Router"],
  },

  // 7. "use client" vs "use server" & React Server Components
  {
    id: "use-client-vs-use-server-in-nextjs",
    slug: "use-client-vs-use-server-in-nextjs",
    question: "What is the purpose of 'use client' and 'use server' directives in Next.js, and how do React Server Components (RSC) work?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "Next.js App Router-এ সব কম্পোনেন্ট ডিফল্টভাবে **React Server Components (RSC)** যা শুধুমাত্র সার্ভারে এক্সিকিউট হয় এবং ব্রাউজারে ০ কিলোবাইট জাভাস্ক্রিপ্ট বান্ডেল পাঠায়। **`'use client'`** একটি সীমানা (Boundary) নির্ধারণ করে যা সেই কম্পোনেন্ট এবং তার সাব-ট্রিতে ক্লায়েন্ট-সাইড ইন্টারঅ্যাক্টিভিটি (হুক্স, স্টেট, ইভেন্ট লিসেনার, ব্রাউজার এপিআই) সক্রিয় করে। **`'use server'`** হলো **Server Actions** ডিক্লেয়ার করার নির্দেশিকা, যা ক্লায়েন্ট থেকে সরাসরি কলযোগ্য সিকিউর ব্যাকএন্ড মিউটেশন ফাংশন তৈরি করে।",
    easyExplanation:
      "১. **React Server Components (RSC - Default)**:\n- App Router-এর প্রতিটি ফাইল ডিফল্টভাবে Server Component।\n- এটি সার্ভারে রান করে সরাসরি ডেটাবেস/ফাইল সিস্টেম অ্যাক্সেস করতে পারে।\n- ক্লায়েন্টে কোনো জাভাস্ক্রিপ্ট বান্ডেল কোড যায় না, শুধুমাত্র রেন্ডার করা লাইটওয়েট RSC Payload যায়।\n- সীমাবদ্ধতা: এতে `useState`, `useEffect`, বা `onClick` ব্যবহার করা যায় না।\n\n২. **`'use client'` ডিরেক্টিভ**:\n- ফাইলের একেবারে শুরুতে লিখতে হয়।\n- এটি কোনো ফাইলকে 'শুধুমাত্র ব্রাউজারে চলবে' এমন করে না; বরং এটি **সার্ভারেও প্রি-রেন্ডার হয় এবং ক্লায়েন্টে হাইড্রেট হয়**।\n- এটি ব্যবহার করবেন যখন: `useState`, `useEffect`, `useRouter`, `onClick`, `onChange`, বা ব্রাউজার এপিআই দরকার হয়।\n\n৩. **`'use server'` ডিরেক্টিভ (Server Actions)**:\n- কোনো অ্যাসিনক্রোনাস ফাংশন বা ফাইলের শুরুতে `'use server'` লিখলে Next.js সেটিকে স্বয়ংক্রিয়ভাবে একটি সিকিউর POST API এন্ডপয়েন্টে রূপান্তর করে।\n- ক্লায়েন্ট ফর্ম বা বাটন থেকে সরাসরি এই ফাংশন কল করে ডেটাবেসে ডেটা সেভ করা যায় কোনো আলাদা `fetch('/api/...')` না লিখেই!",
    interviewAnswer:
      "In Next.js App Router, components are **React Server Components (RSC)** by default, executing exclusively on the server with zero client bundle impact and direct access to backend resources. The **`'use client'`** directive defines a boundary between server and client module graphs; it opts the component into client-side hydration, enabling React hooks (`useState`, `useEffect`), event handlers, and browser APIs. The **`'use server'`** directive designates **Server Actions**—secure, server-executed functions that can be invoked directly from Client Components or HTML forms, seamlessly bridging client interactivity with server mutations.",
    detailedExplanation: {
      whatItIs:
        "সার্ভার-ক্লায়েন্ট বাউন্ডারি মার্কার (`'use client'`) এবং সার্ভার অ্যাকশন ডিক্লারেশন (`'use server'`)।",
      whyItExists:
        "ক্লায়েন্ট বান্ডেল সাইজ নাটকীয়ভাবে কমানো এবং আলাদা API রাউটিং বয়লারপ্লেট ছাড়াই সরাসরি ব্যাকএন্ড মিউটেশন সম্পন্ন করা।",
      howItWorks:
        "`'use client'` বান্ডলারে ক্লায়েন্ট এন্ট্রি পয়েন্ট তৈরি করে; `'use server'` ইন্টারনাল এনক্রিপ্টেড RPC/POST এন্ডপয়েন্ট জেনারেট করে।",
      whenToUse:
        "ভিউ/ডেটা ফেচিংয়ে RSC; ইন্টারেক্টিভ বাটনে `'use client'`; ফর্ম সাবমিট ও ডাটাবেস মিউটেশনে `'use server'`।",
      keyPoints: [
        "RSC is the default in App Router (zero bundle size, no hooks).",
        "`'use client'` does NOT mean client-only; it still pre-renders on the server for initial HTML.",
        "`'use server'` creates Server Actions for form submissions and mutations.",
        "Keep `'use client'` boundaries as far down the component tree (leaf nodes) as possible.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. Server Action (app/actions.ts)
"use server";

import { revalidatePath } from "next/cache";

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string;
  // সরাসরি ডাটাবেসে সেভ (Prisma / SQL)
  await db.post.create({ data: { title } });
  revalidatePath("/posts"); // ISR ক্যাশ তাৎক্ষণিক রিভ্যালিডেট
  return { success: true };
}

// ২. Client Component (components/PostForm.tsx)
"use client";

import { useActionState } from "react";
import { createPostAction } from "@/app/actions";

export function PostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, null);

  return (
    <form action={formAction} className="space-y-2">
      <input name="title" required placeholder="Post title..." className="border p-2" />
      <button type="submit" disabled={isPending} className="btn">
        {isPending ? "Publishing..." : "Create Post"}
      </button>
    </form>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "use server action",
          description: "সার্ভার অ্যাকশন সরাসরি ডাটাবেসে ডেটা ইনসার্ট করে revalidatePath কল করছে।",
        },
        {
          step: 2,
          title: "use client boundary",
          description: "ইন্টারঅ্যাক্টিভ ফর্ম সাবমিট ও লোডিং স্টেট হ্যান্ডেল করতে useActionState হুক ক্লায়েন্টে চলছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Secure Database Form Submission",
        description: "ডাটাবেস কানেকশন স্ট্রিং ক্লায়েন্টে উন্মুক্ত না করে সরাসরি ফর্ম সাবমিটে Server Action চালিয়ে ডেটা সেভ করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: ''use client' does not mean render ONLY on client; it means 'this component will be hydrated on the client'. It is still pre-rendered into static HTML on the server on initial load.'",
      deliveryStrategy: "'use client' এবং 'use server' এর সম্পূর্ণ বিপরীতমুখী ভূমিকার বিষয়টি স্পষ্টভাবে তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "'use client' লিখলে কোনো সার্ভার রেন্ডারিং হয় না।",
          right: "'use client' কম্পোনেন্টও সার্ভার সাইডে প্রাথমিক HTML রেন্ডার তৈরি করে এবং পরে ক্লায়েন্টে হাইড্রেট হয়।",
        },
      ],
    },
    quickRevision: [
      "RSC (Default): Runs only on server, 0kb client JS bundle, direct DB access.",
      "`'use client'`: Defines client hydration boundary (hooks, events, browser APIs).",
      "`'use server'`: Declares Server Actions (RPC mutations directly from UI).",
      "Leaf node pattern: Push 'use client' down to minimal interactive buttons.",
    ],
    followUpQuestions: [
      {
        question: "একটি Server Component কি Client Component-এর ভেতরে চাইল্ড হিসেবে পাস করা যায়?",
        shortHint: "হ্যাঁ, যদি Server Component-টিকে Client Component-এর ভেতর `children` প্রপ হিসেবে পাস করা হয়।",
      },
    ],
    tags: ["Next.js", "use client", "use server", "RSC", "Server Actions", "Architecture"],
  },

  // 8. Incremental Static Regeneration (ISR) & Revalidation
  {
    id: "nextjs-isr-and-revalidation-mechanisms",
    slug: "nextjs-isr-and-revalidation-mechanisms",
    question: "What are the benefits of Incremental Static Regeneration (ISR), and how does Time-based vs On-demand Revalidation work?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Incremental Static Regeneration (ISR)** পুরো ওয়েবসাইট পুনরায় বিল্ড না করেই সুনির্দিষ্ট স্ট্যাটিক পেজগুলোকে ব্যাকগ্রাউন্ডে আপডেট করার ক্ষমতা দেয়। এটি CDN-এর সাব-মিলিসেকেন্ড স্পিডের সাথে ডেটার সতেজতা বজায় রাখে। ISR দুইভাবে কাজ করে: ১. **Time-based Revalidation** (নির্দিষ্ট সময় অন্তর, যেমন `revalidate = 60`), এবং ২. **On-demand Revalidation** (কোনো ইভেন্ট বা মিউটেশন ঘটার সাথে সাথে `revalidatePath()` বা `revalidateTag()` দিয়ে তাৎক্ষণিক ক্যাশ ক্লিয়ার করা)।",
    easyExplanation:
      "১. **ISR-এর অভাবনীয় সুবিধা (Benefits)**:\n- ধরুন আপনার সাইটে ১,০০,০০০ প্রোডাক্ট আছে। SSG দিয়ে সম্পূর্ণ বিল্ড দিতে ১ ঘণ্টা লেগে যাবে।\n- ISR দিয়ে আপনি মাত্র শীর্ষ ২০টি পেজ বিল্ড করতে পারেন। বাকি পেজগুলো প্রথমবার কেউ ভিজিট করলে ব্যাকগ্রাউন্ডে তৈরি হয়ে CDN-এ জমা হবে।\n- **Stale-While-Revalidate**: ইউজার সবসময় CDN থেকে ইনস্ট্যান্ট স্ট্যাটিক পেজ দেখতে পায়, ব্যাকগ্রাউন্ডে ডেটা রিফ্রেশ হয়। ইউজার কোনো লোডিং স্পিনার দেখে না।\n\n২. **Time-Based Revalidation (সময় ভিত্তিক)**:\n- `export const revalidate = 60;` অথবা `fetch(url, { next: { revalidate: 60 } })`।\n- ৬০ সেকেন্ডের মধ্যে ১ কোটি ইউজার আসলেও সার্ভারে কোনো ফেচ কল যাবে না (CDN ক্যাশড রেসপন্স পাবে)।\n- ৬০ সেকেন্ড পার হওয়ার পর প্রথম ইউজারের ভিজিটে পেছনের সার্ভার নতুন ডেটা ফেচ করে নতুন স্ট্যাটিক ফাইল বানিয়ে CDN আপডেট করে দেয়।\n\n৩. **On-Demand Revalidation (তাৎক্ষণিক রিভ্যালিডেশন)**:\n- সময়ের জন্য অপেক্ষা না করে যখনই কোনো অ্যাডমিন ব্লগে 'Publish' বাটনে ক্লিক করল বা দাম আপডেট করল:\n  - `revalidatePath('/blog/[slug]')` -> নির্দিষ্ট পেজের ক্যাশ ক্লিয়ার করে।\n  - `revalidateTag('products')` -> 'products' ট্যাগের সাথে যুক্ত শত শত ক্যাশড কুয়েরি এক মুহূর্তে রিফ্রেশ করে।",
    interviewAnswer:
      "**Incremental Static Regeneration (ISR)** enables static pages to be updated incrementally in the background without rebuilding the entire application. It leverages the **Stale-While-Revalidate** caching pattern, delivering ultra-fast CDN responses to users while refreshing stale content asynchronously. **Time-based revalidation** (`next: { revalidate: seconds }`) purges and regenerates the page after a defined time interval expires. **On-demand revalidation** via `revalidatePath()` or `revalidateTag()` triggers immediate, programmatic cache invalidation across the global Edge network whenever CMS webhooks or Server Action mutations occur.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর স্মার্ট স্ট্যাটিক কনটেন্ট রিভ্যালিডেশন ও ক্যাশ ম্যানেজমেন্ট ফ্রেমওয়ার্ক।",
      whyItExists:
        "বিশাল স্কেলের অ্যাপ্লিকেশনে দীর্ঘ বিল্ড টাইম দূর করা এবং CDN স্পিডের সাথে লাইভ ডেটা সমন্বয় করা।",
      howItWorks:
        "Edge CDN স্টেল পেজ পরিবেশন করে -> ব্যাকগ্রাউন্ডে রেন্ডার জব শিডিউল হয় -> নতুন পেজ রেডি হলে CDN ক্যাশ ওভাররাইট হয়।",
      whenToUse:
        "ই-কমার্স প্রোডাক্ট ক্যাটালগ, নিউজ পেজ, ব্লগ এবং ডাইনামিক অথচ হাই-ট্রাফিক ওয়েবসাইটে।",
      keyPoints: [
        "Eliminates full site rebuilds when content updates in headless CMS.",
        "`revalidateTag` allows fine-grained cache purging without knowing specific URLs.",
        "Delivers sub-50ms TTFB via Edge caching.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. Tag-based ডেটা ফেচিং (app/products/[id]/page.tsx)
export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // ক্যাশ ট্যাগের সাথে ডেটা ফেচ
  const res = await fetch(\`https://api.example.com/products/\${id}\`, {
    next: { tags: ["products", \`product-\${id}\`] },
  });
  const product = await res.json();

  return <div>{product.name} - \${product.price}</div>;
}

// ২. Server Action বা CMS Webhook-এ On-Demand Revalidation
"use server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function updateProductPrice(productId: string, newPrice: number) {
  await db.product.update({ where: { id: productId }, data: { price: newPrice } });

  // ✅ অন-ডিমান্ড ক্যাশ পার্জ: সাথে সাথে গ্লোবাল CDN রিফ্রেশ হবে
  revalidateTag(\`product-\${productId}\`);
  // revalidatePath(\`/products/\${productId}\`);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Tag-based caching",
          description: "fetch কলে 'products' ট্যাগ দেওয়া হয়েছে।",
        },
        {
          step: 2,
          title: "Programmatic revalidation",
          description: "revalidateTag কল করে তাৎক্ষণিকভাবে নির্দিষ্ট প্রোডাক্টের CDN ক্যাশ ক্লিয়ার করা হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Shopify / Headless CMS Content Publishing",
        description: "কন্টেন্ট রাইটার Sanity বা Strapi-তে নতুন আর্টিকেল পাবলিশ করার সাথে সাথে ওয়েবহুক দিয়ে `revalidatePath()` ট্রিগার হয়ে তৎক্ষণাৎ সাইট আপডেট হওয়া।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'On-demand revalidation using revalidateTag is much more efficient than time-based revalidation because pages update only when data actually changes, eliminating unnecessary background rebuilds.'",
      deliveryStrategy: "Stale-While-Revalidate আর্কিটেকচার কীভাবে ইউজারের জন্য জিরো ল্যাগ নিশ্চিত করে তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Time-based ISR এ প্রতি ৬০ সেকেন্ড পর পর ব্যাকগ্রাউন্ডে নিজে থেকেই বিল্ড হতে থাকে ভিজিটর না আসলেও।",
          right: "ISR অলস (Lazy): সময় পার হওয়ার পর কোনো নতুন ভিজিটর আসলে তখনই শুধুমাত্র ব্যাকগ্রাউন্ড রিভ্যালিডেশন শুরু হয়।",
        },
      ],
    },
    quickRevision: [
      "ISR = CDN Static Speed + Background Dynamic Updates.",
      "Time-based: `export const revalidate = 60` / `fetch({ next: { revalidate: 60 } })`।",
      "On-demand: `revalidatePath(path)` ও `revalidateTag(tag)`।",
      "Stale-While-Revalidate pattern avoids layout shifts and spinners.",
    ],
    followUpQuestions: [
      {
        question: "revalidatePath এবং revalidateTag এর মধ্যে কোনটি বেশি স্কেলেবল?",
        shortHint: "revalidateTag; কারণ এটি একাধিক ভিন্ন পেজের একই ক্যাশড কুয়েরি একক ট্যাগ দিয়ে একবারে ইনভ্যালিডেট করতে পারে।",
      },
    ],
    tags: ["Next.js", "ISR", "Revalidation", "revalidatePath", "revalidateTag", "Caching"],
  },

  // 9. Client-Side Rendering (CSR) & Data Fetching Patterns
  {
    id: "nextjs-csr-and-data-fetching-patterns",
    slug: "nextjs-csr-and-data-fetching-patterns",
    question: "How does Client-Side Rendering (CSR) and Data Fetching work on the Server-side vs Client-side in Next.js?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js-এ **Server-side Data Fetching** সরাসরি async Server Components-এ ডাটাবেস কোয়েরি বা `fetch()` দিয়ে সম্পন্ন হয়, যা ক্লায়েন্ট ওয়াটারফল (Waterfall) রোধ করে, API কি সুরক্ষিত রাখে এবং ব্রাউজারে ০ কিলোবাইট বান্ডেল পাঠায়। **Client-side Data Fetching (CSR)** `'use client'` কম্পোনেন্টে `useEffect` অথবা **TanStack Query / SWR** দিয়ে সম্পন্ন হয়, যা ঘন ঘন পরিবর্তিত ডেটা, পোলিং, ইনফিনিট স্ক্রোল এবং ব্রাউজার স্টেট পরিবর্তনের জন্য আদর্শ।",
    easyExplanation:
      "১. **Server-side Data Fetching (Modern App Router Standard)**:\n- সার্ভার কম্পোনেন্টে কোনো হুক বা `useEffect` লাগে না; সরাসরি `async / await` ব্যবহার করা যায়:\n  ```tsx\n  export default async function FeedPage() {\n    const data = await db.post.findMany(); // Direct DB query!\n    return <Feed posts={data} />;\n  }\n  ```\n- **সুবিধা**: ডেটাবেসের সিক্রেট পাসওয়ার্ড ক্লায়েন্টে যায় না, দ্রুত সার্ভার নেটওয়ার্কে ডেটা ফেচ হয়, ক্লায়েন্টে কোনো লোডিং ফ্লিকার থাকে না।\n\n২. **Client-side Data Fetching (CSR)**:\n- যখন পেজ লোড হওয়ার পর ইউজারের অ্যাকশনের ওপর ভিত্তি করে ডেটা বদলাতে হয় (যেমন: লাইভ চ্যাট, সার্চ অটোকমপ্লিট, পেজিনেশন)।\n- সাধারণ `useEffect` দিয়ে ফেচ করলে ডেটা ক্যাশিং ও ডিডিউপিং কঠিন হয়।\n- এজন্য ইন্ডাস্ট্রি স্ট্যান্ডার্ড লাইব্রেরি যেমন **TanStack Query (React Query)** বা **SWR** ব্যবহার করা হয় যা অটোমেটিক রি-ট্রাই, উইন্ডো ফোকাস রিফেচিং এবং অপটিমিস্টিক UI আপডেট প্রদান করে।\n\n৩. **তুলনা (Server Fetch vs Client Fetch)**:\n- ইনিশিয়াল পেজ ডেটা ও এসইও কনটেন্ট -> **Server-side (RSC)**।\n- ডায়নামিক ইউজার ফিল্টারিং, ইনফিনিট স্ক্রোলিং ও অটো-পোলিং -> **Client-side (TanStack Query / SWR)**।",
    interviewAnswer:
      "In modern Next.js App Router, **Server-side data fetching** is executed natively inside asynchronous React Server Components using direct database queries or extended `fetch()` calls. This architecture co-locates data fetching with the backend, eliminates client network waterfalls, keeps secrets off the client, and eliminates client-side bundle weight. **Client-side data fetching (CSR)** is reserved for highly dynamic, user-driven interactions, real-time polling, and infinite pagination, implemented inside `'use client'` components using specialized caching libraries like **TanStack Query** or **SWR**.",
    detailedExplanation: {
      whatItIs:
        "সার্ভার কম্পোনেন্ট ডাটা ফেচিং বনাম ক্লায়েন্ট কোয়েরি ক্যাশিং আর্কিটেকচার।",
      whyItExists:
        "নেটওয়ার্ক ল্যাটেন্সি কমানো, ব্যাকএন্ড ক্রেডেনশিয়াল সুরক্ষিত রাখা এবং ইউজার এক্সপেরিয়েন্স স্মুথ রাখা।",
      howItWorks:
        "সার্ভারে প্যারালাল প্রমিজ রিজলভ করে HTML পাঠানো হয়; ক্লায়েন্টে TanStack Query মেমরি ক্যাশ থেকে ডেটা সিঙ্ক করে।",
      whenToUse:
        "পেজের মূল স্ট্রাকচারে Server Fetch; লাইভ নোটিফিকেশন ও ফিল্টারিংয়ে TanStack Query।",
      keyPoints: [
        "Server Components can fetch directly from the DB without needing an intermediate API route.",
        "Use `Promise.all()` to prevent sequential request waterfalls on the server.",
        "Use TanStack Query on the client for optimistic updates and automatic caching.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. Server-side Data Fetching (Direct Async Server Component)
export default async function UserDashboard() {
  // প্যারালাল ফেচিং - নো ওয়াটারফল!
  const [userData, ordersData] = await Promise.all([
    fetch("https://api.example.com/user").then((r) => r.json()),
    fetch("https://api.example.com/orders").then((r) => r.json()),
  ]);

  return (
    <div className="p-6">
      <h1>Welcome, {userData.name}</h1>
      <OrderList orders={ordersData} />
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Parallel server fetching",
          description: "Promise.all ব্যবহার করে দুটি API কল একসাথে প্যারালালে সার্ভার থেকে এক্সিকিউট করা হয়েছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Social Media Timeline with Real-time Comments",
        description: "টাইমলাইনের মূল পোস্টগুলো সার্ভার সাইডে ফেচ করে দ্রুত লোড করা, এবং পোস্টের লাইভ কমেন্ট ও লাইক কাউন্ট ক্লায়েন্ট-সাইডে TanStack Query দিয়ে পোল করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'With React Server Components, we do not need to create API routes solely to fetch data for our own pages. We query the database directly inside the Server Component and reserve client fetching for interactive sub-views.'",
      deliveryStrategy: "Request Waterfall কী এবং কীভাবে সার্ভার ফেচিং ও `Promise.all` ওয়াটারফল রোধ করে তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Server Component-এ useEffect দিয়ে ডেটা ফেচ করতে হয়।",
          right: "Server Component-এ হুক্স চলে না; সরাসরি `async/await` দিয়ে ডেটা ফেচ করতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Server fetching: Direct `async/await` in RSC, 0kb JS bundle, zero waterfall.",
      "Client fetching: `'use client'` with TanStack Query / SWR for polling & user interactions.",
      "Parallel fetching: Always use `Promise.all()` to avoid waterfalls.",
      "Never create API routes just to consume them inside your own Server Components.",
    ],
    followUpQuestions: [
      {
        question: "Next.js-এ Request Waterfall কীভাবে সৃষ্টি হয় এবং কীভাবে তা প্রতিরোধ করবেন?",
        shortHint: "একাধিক পরপর নেস্টেড `await fetch()` কল করলে ওয়াটারফল হয়; `Promise.all()` অথবা 컴পোনেন্ট কম্পোজিশন দিয়ে প্যারালাল করতে হয়।",
      },
    ],
    tags: ["Next.js", "Data Fetching", "CSR", "RSC", "TanStack Query", "Async Components"],
  },

  // 10. Streaming, Suspense & Next.js Caching Layers
  {
    id: "nextjs-streaming-suspense-and-caching-layers",
    slug: "nextjs-streaming-suspense-and-caching-layers",
    question: "How does Streaming and Suspense work in Next.js, and what is the 4-layer Next.js Caching Architecture?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Streaming with Suspense** পুরো পেজের সব ডেটা তৈরি হওয়া পর্যন্ত অপেক্ষা না করে সার্ভার থেকে প্রস্তুত হওয়া অংশগুলো তাৎক্ষণিক চাঙ্ক (Chunk) আকারে ব্রাউজারে স্ট্রিম করে পাঠায়। Next.js একটি সমন্বিত **৪-স্তরের ক্যাশিং আর্কিটেকচার (4 Caching Layers)** পরিচালনা করে: ১. **Request Memoization** (একক রেন্ডারে ডুপ্লিকেট ফেচ কল রোধ), ২. **Data Cache** (ক্রস-রিকোয়েস্ট সার্ভার ডেটা ক্যাশ), ৩. **Full Route Cache** (স্ট্যাটিক HTML ও RSC পেলোড ক্যাশ), এবং ৪. **Router Cache** (ক্লায়েন্ট ব্রাউজারে ইন-মেমরি রুট ক্যাশ)।",
    easyExplanation:
      "১. **Next.js Streaming কীভাবে কাজ করে?**:\n- সাধারণ SSR-এ একটি স্লো ডেটাবেস কোয়েরির জন্য পুরো পেজ আটকে থাকত (White Screen)।\n- **Streaming (React Suspense ও `loading.tsx`)** দিয়ে পেজের ফাস্ট অংশ (Navbar, Header) ১ মিলিসেকেন্ডে পাঠিয়ে দেওয়া হয়। স্লো অংশগুলোর জায়গায় স্কেলিটন লোডার থাকে। সার্ভারে ডেটা রেডি হওয়ার সাথে সাথে একই ওপেন HTTP কানেকশন দিয়ে আসল UI ব্রাউজারে স্ট্রিম হয়ে স্কেলিটনকে প্রতিস্থাপন করে।\n\n২. **Next.js-এর ৪টি ক্যাশিং স্তর (The 4 Caching Layers)**:\n- **স্তর ১: Request Memoization (Server)**: একই রেন্ডার ট্রিতে ৩টি ভিন্ন কম্পোনেন্ট যদি `fetch('https://api.com/user')` কল করে, Next.js স্বয়ংক্রিয়ভাবে মাত্র ১টি ফেচ রিকোয়েস্ট পাঠায়।\n- **স্তর ২: Data Cache (Server)**: একাধিক রিকোয়েস্ট ও ইউজারের মধ্যে সার্ভার ডেটা স্থায়ীভাবে ক্যাশ করে রাখে (`{ cache: 'force-cache' }` বা ISR `revalidate`)।\n- **স্তর ৩: Full Route Cache (Server)**: বিল্ড বা রিভ্যালিডেশনের সময় পুরো পেজের স্ট্যাটিক HTML এবং RSC Payload ক্যাশ করে রাখে।\n- **স্তর ৪: Router Cache (Client Browser)**: ব্রাউজারের মেমরিতে প্রি-ফেচ করা পেজগুলো জমা রাখে, যাতে লিঙ্কে ক্লিক করলে তাৎক্ষণিক পেজ পরিবর্তন হয়।",
    interviewAnswer:
      "**Streaming with Suspense** progressively renders and flushes UI chunks from the server to the browser over a single HTTP stream using HTTP 1.1 Chunked Transfer Encoding, dramatically reducing Time to First Byte (TTFB) and First Contentful Paint (FCP). Next.js manages a sophisticated **4-Layer Caching Architecture**: 1) **Request Memoization** (deduplicates identical `GET` fetch requests within a single React component render pass on the server), 2) **Data Cache** (persists HTTP fetch data across user sessions and deployments until revalidated), 3) **Full Route Cache** (stores static HTML and RSC payloads on the server for static pages), and 4) **Router Cache** (an in-memory client-side cache storing visited and prefetched route segments).",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর প্রগ্রেসিভ স্ট্রিমিং মেকানিজম এবং ৪-স্তরের গ্লোবাল ক্যাশিং লাইফসাইকেল।",
      whyItExists:
        "TTFB ও রেন্ডার ব্লকিং শূন্যে নামিয়ে আনা এবং অপ্রয়োজনীয় ডাটাবেস ও API লোড প্রতিরোধ করা।",
      howItWorks:
        "HTTP Chunked Transfer Encoding + Server-to-Client React Fiber Stream + Multilayer Cache Lookup।",
      whenToUse:
        "স্লো ডেটা সেকশনে `<Suspense>`, হাই-ট্রাফিক এন্টারপ্রাইজ অ্যাপ্লিকেশনে ক্যাশ টিউনিংয়ে।",
      keyPoints: [
        "Streaming solves the 'slowest API query blocks entire page' SSR problem.",
        "Request Memoization lasts only for the duration of a single render pass.",
        "Data Cache persists across requests and server restarts until explicitly revalidated.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `import { Suspense } from "react";

// স্লো কম্পোনেন্ট (৩ সেকেন্ড সময় নেয়)
async function SlowReviewsList() {
  const reviews = await fetch("https://api.example.com/reviews", {
    next: { revalidate: 300 }, // Layer 2: Data Cache
  }).then((r) => r.json());

  return (
    <ul className="space-y-2">
      {reviews.map((rev: any) => (
        <li key={rev.id} className="border p-2 rounded">{rev.comment}</li>
      ))}
    </ul>
  );
}

export default function ProductPage() {
  return (
    <div className="p-6">
      {/* ১. ফাস্ট হেডার: তাৎক্ষণিক ব্রাউজারে স্ট্রিম হবে (Instant TTFB) */}
      <h1 className="text-2xl font-bold">Product Showcase</h1>
      <p className="text-slate-600">Fast rendered product details...</p>

      {/* ২. স্লো সেকশন: Suspense দিয়ে স্ট্রিম হবে */}
      <Suspense fallback={<div className="animate-pulse p-4 bg-slate-100 mt-4 rounded">Streaming customer reviews...</div>}>
        <SlowReviewsList />
      </Suspense>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Streaming boundary",
          description: "SlowReviewsList ডেটা লোড করার সময় পুরো পেজ আটকে না রেখে তাত্ক্ষণিক হেডার পাঠিয়ে রিভিউ সেকশন স্ট্রিম করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Page with Dynamic Recommendations",
        description: "প্রোডাক্টের মূল ছবি ও বিবরণ তাৎক্ষণিক ১ ফ্রেমের মধ্যে পরিবেশন করা এবং মেশিন লার্নিং রিকমেন্ডেশন ইঞ্জিন Suspense দিয়ে নিচে স্ট্রিম করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js App Router caching has 4 layers: Request Memoization (per-render), Data Cache (cross-request server), Full Route Cache (static HTML/RSC), and Router Cache (in-memory client).' ",
      deliveryStrategy: "৪টি ক্যাশিং লেয়ারের নাম ও স্থায়িত্ব ক্রমানুসারে ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Request Memoization সার্ভার রিস্টার্ট হওয়ার পরও থেকে যায়।",
          right: "Request Memoization শুধুমাত্র একটি একক রেন্ডার লাইফসাইকেলেই স্থায়ী থাকে; ক্রস-রিকোয়েস্টে Data Cache কাজ করে।",
        },
      ],
    },
    quickRevision: [
      "Streaming: HTTP Chunked transfer reduces TTFB.",
      "1. Request Memoization: Deduplicates identical fetches during single render.",
      "2. Data Cache: Persistent server fetch cache (ISR/revalidate).",
      "3. Full Route Cache: Static HTML & RSC payload on server.",
      "4. Router Cache: Client in-memory prefetched route cache.",
    ],
    followUpQuestions: [
      {
        question: "Next.js App Router-এ ক্লায়েন্ট সাইড Router Cache কীভাবে ইনভ্যালিডেট করবেন?",
        shortHint: "`router.refresh()` কল করে অথবা কোনো Server Action এক্সিকিউট হলে স্বয়ংক্রিয়ভাবে Router Cache রিফ্রেশ হয়।",
      },
    ],
    tags: ["Next.js", "Streaming", "Suspense", "Caching", "Request Memoization", "Data Cache"],
  },

  // 11. Prefetching, Navigation & Router Performance
  {
    id: "nextjs-prefetching-and-navigation",
    slug: "nextjs-prefetching-and-navigation",
    question: "How does Prefetching work in Next.js, and how does Next.js optimize navigation and page load performance?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js-এ **Prefetching** হলো এমন একটি পারফরম্যান্স মেকানিজম যার মাধ্যমে কোনো পেজের লিঙ্ক ইউজারের ভিউপোর্টে (Viewport) দৃশ্যমান হওয়ার সাথে সাথে ব্যাকগ্রাউন্ডে সেই রুটের জাভাস্ক্রিপ্ট এবং RSC পেলোড আগে থেকেই ডাউনলোড করে নেওয়া হয়। এর ফলে ইউজার লিঙ্কে ক্লিক করার সাথে সাথে কোনো নেটওয়ার্ক ল্যাগ ছাড়াই **তাৎক্ষণিক (Instant Navigation)** পেজ ট্রানজিশন সম্পন্ন হয়।",
    easyExplanation:
      "১. **Next.js `<Link>` কম্পোনেন্টের প্রি-ফেচিং ম্যাজিক**:\n- সাধারণ HTML `<a href=\"...\">` পুরো পেজ রিলোড করায়।\n- Next.js-এর `<Link href=\"/about\">` ব্রাউজারের **Intersection Observer API** ব্যবহার করে।\n- যখনই কোনো লিঙ্ক স্ক্রিনে দৃশ্যমান হয়, Next.js স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ডে সেই পেজের প্রয়োজনীয় ডেটা ও কোড প্রি-ফেচ করে ক্লায়েন্টের **Router Cache**-এ রেখে দেয়।\n- ইউজার ক্লিক করার আগেই ডেটা তৈরি থাকে, তাই ক্লিক করা মাত্র পেজ ইনস্ট্যান্ট সুইচ করে!\n\n২. **স্ট্যাটিক বনাম ডায়নামিক রুটে প্রি-ফেচিং**:\n- **স্ট্যাটিক রুট (SSG/ISR)**: সম্পূর্ণ রুট এবং তার ডেটা ১০০% আগে থেকেই প্রি-ফেচ করা হয়।\n- **ডায়নামিক রুট (SSR)**: শুধুমাত্র সাধারণ লেআউট এবং `loading.tsx` প্রি-ফেচ করা হয় (সম্পূর্ণ ডায়নামিক ডেটা ক্লিকের সময় আসে যাতে সার্ভার ওভারলোড না হয়)।\n\n৩. **ম্যানুয়াল প্রি-ফেচিং (`router.prefetch()`)**:\n- কোনো বাটনে মাউস হোভার (`onMouseEnter`) করলে প্রোগ্রাম্যাটিকভাবে `router.prefetch('/checkout')` কল করে ট্রানজিশন আরও দ্রুত করা যায়।\n\n৪. **Soft Navigation vs Hard Navigation**:\n- Next.js **Soft Navigation** করে, অর্থাৎ শুধুমাত্র পরিবর্তিত সাব-ট্রি রেন্ডার করে এবং শেয়ার্ড লেআউট (Navbar, Sidebar) অপরিবর্তিত রেখে ক্লায়েন্ট স্টেট ধরে রাখে।",
    interviewAnswer:
      "Prefetching in Next.js proactively downloads route assets in the background as `<Link>` components enter the browser viewport using the Intersection Observer API. For static routes, Next.js prefetches the entire RSC payload and JavaScript bundle; for dynamic routes, it prefetches shared layouts and `loading.tsx` boundaries to prevent server strain. When the user clicks the link, navigation executes as a near-instant **Soft Navigation**, swapping out only the modified subtree without resetting client-side React state or triggering full-page browser reloads.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর ক্লায়েন্ট-সাইড নেভিগেশন অ্যাকসিলারেশন ও প্রি-ফেচিং আর্কিটেকচার।",
      whyItExists:
        "পেজ পরিবর্তনের সময় নেটওয়ার্ক লেটেন্সি শূন্যে নামিয়ে এনে নেটিভ অ্যাপের মতো তাৎক্ষণিক রেসপন্স নিশ্চিত করা।",
      howItWorks:
        "Intersection Observer লিঙ্ক ডিটেক্ট করে -> RSC পেলোড ব্যাকগ্রাউন্ডে ডাউনলোড করে Router Cache-এ রাখে -> ক্লিকে তাৎক্ষণিক রেন্ডার।",
      whenToUse:
        "সমস্ত অভ্যন্তরীণ লিঙ্কিংয়ে `<Link>` এবং হোভার ইন্টারেকশনে `router.prefetch()`।",
      keyPoints: [
        "`<Link>` component prefetches automatically in production.",
        "Static routes are fully prefetched; dynamic routes prefetch down to the nearest `loading.js` boundary.",
        "Set `prefetch={false}` on links with heavy resource weight or rarely clicked footers.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavigationHeader() {
  const router = useRouter();

  return (
    <nav className="flex gap-4 p-4 bg-slate-100">
      {/* ১. ডিফল্ট অপ্টিমাইজড লিঙ্ক: ভিউপোর্টে আসলেই অটোমেটিক প্রি-ফেচ হবে */}
      <Link href="/products" className="text-blue-600 hover:underline">
        Products (Auto-prefetched)
      </Link>

      {/* ২. অপশনাল অপ্টিমাইজেশন: হেভি পেজে প্রি-ফেচ বন্ধ করা */}
      <Link href="/heavy-report" prefetch={false} className="text-slate-600">
        Reports (On-demand)
      </Link>

      {/* ৩. প্রোগ্রাম্যাটিক প্রি-ফেচিং মাউস হোভারে */}
      <button
        onMouseEnter={() => router.prefetch("/checkout")}
        onClick={() => router.push("/checkout")}
        className="px-3 py-1 bg-emerald-600 text-white rounded text-sm"
      >
        Fast Checkout
      </button>
    </nav>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Automatic & manual prefetching",
          description: "Link কম্পোনেন্ট অটোমেটিক প্রি-ফেচ করছে এবং বাটনের হোভার ইভেন্টে router.prefetch দিয়ে ইনস্ট্যান্ট ট্রানজিশন নিশ্চিত করা হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "High-Converting Checkout Flow",
        description: "ইউজার 'Add to Cart' করার সাথে সাথে ব্যাকগ্রাউন্ডে `/checkout` পেজ প্রি-ফেচ করে রাখা যাতে চেকআউট বাটনে ক্লিক করলে চোখের পলকে পেজ চলে আসে।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js uses Soft Navigation via Link prefetching. It keeps shared layouts and existing React state intact while swapping only the changed sub-route from the in-memory Router Cache.'",
      deliveryStrategy: "Production বনাম Development মোডে প্রি-ফেচিংয়ের আচরণ (প্রোডাকশনে কার্যকর হয়) উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "প্রি-ফেচিংয়ের কারণে সার্ভারে কোটি কোটি রিকোয়েস্ট গিয়ে সার্ভার ক্র্যাশ করে।",
          right: "Next.js শুধুমাত্র ভিউপোর্টে দৃশ্যমান লিঙ্কে লো-প্রাইওরিটি রিকোয়েস্ট পাঠায় এবং ডাইনামিক রুটে শুধুমাত্র লেআউট ক্যাশ করে।",
        },
      ],
    },
    quickRevision: [
      "`<Link>` component prefetches automatically when in viewport.",
      "Soft navigation swaps only changing subtrees and preserves state.",
      "Static routes: full prefetch; Dynamic routes: layout + loading boundary.",
      "`router.prefetch('/path')` enables programmatic hover prefetching.",
    ],
    followUpQuestions: [
      {
        question: "কখন Link কম্পোনেন্টে `prefetch={false}` দেওয়া উচিত?",
        shortHint: "যখন পেজে শত শত ফুটার লিঙ্ক থাকে বা খুব কম ব্যবহৃত ভারী রুটের ক্ষেত্রে অপ্রয়োজনীয় ব্যান্ডউইথ বাঁচাতে।",
      },
    ],
    tags: ["Next.js", "Prefetching", "Navigation", "Router Cache", "Performance", "Link"],
  },

  // 12. SEO Optimization & Metadata API
  {
    id: "nextjs-seo-and-metadata-api",
    slug: "nextjs-seo-and-metadata-api",
    question: "How does Next.js improve SEO by default, and how do you implement Static and Dynamic Metadata, OpenGraph, Sitemaps, and Robots?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js বাই-ডিফল্ট সার্ভার-সাইড রেন্ডারিংয়ের মাধ্যমে সার্চ ইঞ্জিন ক্রলারদের (Googlebot) জন্য সম্পূর্ণ HTML কনটেন্ট পরিবেশন করে SEO উন্নত করে। আধুনিক App Router-এ টাইপ-সেফ **Metadata API** দিয়ে স্ট্যাটিক মেটাডাটা (`export const metadata`), ডাইনামিক মেটাডাটা (`generateMetadata`), সোশ্যাল শেয়ারিংয়ের জন্য **OpenGraph / Twitter Card**, এবং ডাইনামিক ফাইল কনভেনশন দিয়ে **`sitemap.ts`** ও **`robots.ts`** তৈরি করা হয়।",
    easyExplanation:
      "১. **Next.js কীভাবে ডিফল্টভাবে SEO উন্নত করে?**:\n- ঐতিহ্যবাহী React SPA-তে সার্চ বটগুলো ফাঁকা HTML পেয়ে ইন্ডেক্স করতে পারত না।\n- Next.js সার্ভারেই হেড ট্যাগ, টাইটেল, ডেসক্রিপশন এবং আসল পেজ কনটেন্ট প্রস্তুত করে পাঠায়, ফলে গুগল ক্রলার মুহূর্তের মধ্যে পেজ ইনডেক্স করতে পারে।\n\n২. **Static vs Dynamic Metadata**:\n- **Static Metadata**: নির্দিষ্ট পেজের জন্য স্ট্যাটিক অবজেক্ট এক্সপোর্ট করা (`export const metadata: Metadata = { title: 'About Us' }`)।\n- **Dynamic Metadata**: ব্লগের শিরোনাম বা প্রোডাক্টের নাম অনুযায়ী মেটাডাটা বানাতে `generateMetadata({ params })` ফাংশন ব্যবহার করা।\n\n৩. **Social Media Previews (OpenGraph & Twitter)**:\n- ফেসবুক বা টুইটারে লিঙ্ক শেয়ার করলে সুন্দর ছবি, টাইটেল ও বিবরণ দেখানোর জন্য `openGraph` অবজেক্ট ডিফাইন করা হয় অথবা `opengraph-image.tsx` দিয়ে স্বয়ংক্রিয় ডাইনামিক ইমেজ জেনারেট করা হয়।\n\n৪. **`sitemap.ts` এবং `robots.ts` কনভেনশন**:\n- কোড লিখে ডেটাবেস থেকে সব URL ফেচ করে স্বয়ংক্রিয় ডাইনামিক XML সাইটম্যাপ (`app/sitemap.ts`) তৈরি করা যায়।\n- সার্চ ইঞ্জিন বটের অ্যাক্সেস কন্ট্রোল করতে `app/robots.ts` ফাইল ব্যবহার করা হয়।",
    interviewAnswer:
      "Next.js elevates SEO out-of-the-box by delivering pre-rendered, crawlable HTML with optimized semantic structure. In the App Router, SEO is managed using the type-safe **Metadata API**: static pages export a `metadata` object, while dynamic routes export an asynchronous `generateMetadata({ params, searchParams })` function to dynamically resolve titles, descriptions, and OpenGraph/Twitter card assets. Next.js also provides dedicated file conventions—`sitemap.ts` and `robots.ts`—to programmatically generate search engine sitemaps and crawler rules directly from dynamic database queries.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর টাইপ-সেফ মেটাডাটা ইঞ্জিন, সোশ্যাল গ্রাফ এবং ক্রলার ইনডেক্সিং সিস্টেম।",
      whyItExists:
        "সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO), সোশ্যাল মিডিয়া ক্লিক-থ্রু রেট (CTR) বৃদ্ধি এবং টাইপ-সেফ হেড ম্যানেজমেন্ট।",
      howItWorks:
        "Next.js মেটাডাটা অবজেক্টকে এনালাইজ করে HTML `<head>`-এ যথাযথ `<title>`, `<meta>`, `<link rel=\"canonical\">` ও OpenGraph ট্যাগ ইনজেক্ট করে।",
      whenToUse:
        "ব্লগ, ই-কমার্স, ল্যান্ডিং পেজ এবং সমস্ত পাবলিক-ফেসিং পেজে।",
      keyPoints: [
        "Use `generateMetadata` for dynamic DB-driven title/description tags.",
        "Parent metadata is merged with child metadata automatically.",
        "`sitemap.ts` and `robots.ts` automatically produce valid `.xml` and `.txt` endpoints.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `import type { Metadata } from "next";

// ১. Dynamic Metadata Generation (app/posts/[slug]/page.tsx)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetch(\`https://api.example.com/posts/\${slug}\`).then((r) => r.json());

  return {
    title: \`\${post.title} | Job Interview Portal\`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      type: "article",
    },
    alternates: {
      canonical: \`https://jobinterview.dev/posts/\${slug}\`,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <article className="p-6">Post content for {slug}</article>;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "generateMetadata",
          description: "সার্ভারে পোস্ট ডেটা ফেচ করে ডায়নামিক টাইটেল, ওপেনগ্রাফ ইমেজ এবং ক্যানোনিকাল লিঙ্ক তৈরি করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Dynamic Social Sharing Cards on Twitter/LinkedIn",
        description: "ইউজার ব্লগের লিঙ্ক লিংকডইন বা ফেসবুকে পোস্ট করলে স্বয়ংক্রিয়ভাবে আর্টিকেলের কভার ছবি ও আকর্ষণীয় হেডলাইন প্রিভিউ কার্ডে ভেসে ওঠা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Next.js App Router metadata is evaluated in parallel with page rendering and stream-safe, meaning metadata tags are placed in the HTML header before the rest of the stream is flushed.'",
      deliveryStrategy: "Static metadata, Dynamic generateMetadata, OpenGraph এবং sitemap.ts এর আর্কিটেকচার তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "App Router-এ মেটাডাটার জন্য <Head> বা react-helmet ব্যবহার করতে হয়।",
          right: "Next.js App Router-এ <Head> বা react-helmet ডেপ্রিকেটেড; অফিশিয়াল Metadata API ব্যবহার করতে হবে।",
        },
      ],
    },
    quickRevision: [
      "Static: `export const metadata: Metadata = { ... }`।",
      "Dynamic: `export async function generateMetadata({ params })`।",
      "OpenGraph: Social cards for Facebook/Twitter/LinkedIn preview.",
      "`app/sitemap.ts` and `app/robots.ts` for automated search engine crawling.",
    ],
    followUpQuestions: [
      {
        question: "Next.js-এ `metadataBase` কনফিগারেশন প্রপার্টির কাজ কী?",
        shortHint: "রিলেটিভ ইমেজ পাথ বা ক্যানোনিকাল URL-এর আগে মূল ডোমেন নেম (`https://example.com`) প্রিফিক্স হিসেবে জুড়ে দেওয়া।",
      },
    ],
    tags: ["Next.js", "SEO", "Metadata", "OpenGraph", "Sitemap", "Robots.txt"],
  },

  // 13. TTFB (Time to First Byte) Measurement & Optimization
  {
    id: "nextjs-ttfb-measurement-and-optimization",
    slug: "nextjs-ttfb-measurement-and-optimization",
    question: "What is TTFB (Time to First Byte), how do you measure and use it, and what are the best techniques to optimize TTFB and Web Vitals in Next.js?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**TTFB (Time to First Byte)** হলো সেই সময়কাল যা ব্রাউজার সার্ভারে কোনো রিকোয়েস্ট পাঠানো থেকে শুরু করে সার্ভার থেকে রেসপন্সের প্রথম বাইটটি রিসিভ করা পর্যন্ত গণনা করা হয়। এটি নেটওয়ার্ক ল্যাটেন্সি, DNS রেজোলিউশন, সার্ভার প্রসেসিং টাইম এবং ডাটাবেস কোয়েরি স্পিডের সমষ্টি। Next.js-এ TTFB অপ্টিমাইজ করার প্রধান উপায় হলো: **Edge Runtime ও CDN ক্যাশিং (SSG/ISR)**, **Streaming with Suspense**, **Database Connection Pooling**, এবং **প্যারালাল ডেটা ফেচিং**।",
    easyExplanation:
      "১. **TTFB কী এবং কেন এটি গুরুত্বপূর্ণ?**:\n- ইউজার ব্রাউজারে এন্টার চাপার পর কত দ্রুত সার্ভার উত্তর দেওয়া শুরু করল—এটাই TTFB।\n- গুগলের Core Web Vitals অনুযায়ী **TTFB ২০০ms-এর নিচে থাকা ভালো**, এবং ৬০০ms-এর বেশি হওয়া খারাপ।\n- TTFB স্লো হলে পেজের **FCP (First Contentful Paint)** এবং **LCP (Largest Contentful Paint)** নিজে থেকেই স্লো হয়ে যায়, কারণ ব্রাউজার তো কিছুই পড়া শুরু করতে পারছে না!\n\n২. **কী কারণে SSR-এ TTFB স্লো হয়ে যায়?**:\n- স্লো বা আন-ইনডেক্সড ডাটাবেস কোয়েরি।\n- সার্ভারলেস ফাংশনের কোল্ড স্টার্ট (Cold Start)।\n- ইউজারের ব্রাউজার থেকে সার্ভারের ভৌগোলিক দূরত্ব (যেমন ইউজার ঢাকায় কিন্তু সার্ভার ইউএসএ-তে)।\n- পরপর নেস্টেড API ওয়াটারফল কল।\n\n৩. **Next.js-এ TTFB কমানোর সেরা টেকনিকসমূহ**:\n- **পদ্ধতি ১: SSG / ISR ব্যবহার করা**: বিল্ড করে CDN-এ রাখলে TTFB সরাসরি ২০-৫০ms-এ নেমে আসে (সার্ভার প্রসেসিং টাইম শূন্য)।\n- **পদ্ধতি ২: Streaming HTML with Suspense**: স্লো ডেটাবেস কোয়েরির জন্য পুরো পেজ আটকে না রেখে পেজের হেডার ও স্কেলিটন তাৎক্ষণিক স্ট্রিম করা।\n- **পদ্ধতি ৩: Edge Runtime ব্যবহার (`export const runtime = 'edge'`)**: ইউজারের সবচেয়ে কাছের ক্লাউডফ্লেয়ার বা ভার্সেল এজ সার্ভার থেকে কোড রান করা।\n- **পদ্ধতি ৪: Connection Pooling (Prisma Accelerate / Neon / PgBouncer)**: সার্ভারলেস ফাংশনে প্রতি রিকোয়েস্টে নতুন DB কানেকশন তৈরির ল্যাগ দূর করা।",
    interviewAnswer:
      "**Time to First Byte (TTFB)** measures the duration between the browser initiating an HTTP request and receiving the first byte of response data from the server, encompassing DNS lookup, TCP/TLS handshake, server processing time, and network latency. In SSR architectures, slow TTFB is typically caused by un-cached backend waterfalls, database latency, serverless cold starts, and geographical distance. In Next.js, TTFB is optimized by leveraging **Edge CDNs via SSG/ISR**, adopting **Streaming with Suspense** to flush initial HTML chunks instantly, switching compute to the **Edge Runtime**, utilizing **Database Connection Pooling**, and executing parallel asynchronous fetches via `Promise.all()`.",
    detailedExplanation: {
      whatItIs:
        "সার্ভার রেসপন্স ল্যাটেন্সি মেজারমেন্ট এবং কোর ওয়েব ভাইটালসের ভিত্তিপ্রস্তর।",
      whyItExists:
        "সার্চ ইঞ্জিন র‍্যাঙ্কিং উন্নত করা, বাউন্স রেট কমানো এবং ব্যবহারকারীর দ্রুততম পেজ লোড নিশ্চিত করা।",
      howItWorks:
        "Client Request -> DNS -> TCP Handshake -> Server Compute & DB Query -> First Byte Flushed to Client.",
      whenToUse:
        "হাই-ট্রাফিক অ্যাপ্লিকেশন পারফরম্যান্স অডিট, SSR অপ্টিমাইজেশন এবং Core Web Vitals মনিটরিংয়ে।",
      keyPoints: [
        "Good TTFB is under 200ms; poor TTFB exceeds 600ms (Google Web Vitals).",
        "SSG/ISR provides near-instant TTFB because HTML is served directly from global CDNs.",
        "Streaming HTML with Suspense allows immediate TTFB even when backend queries take seconds.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. Edge Runtime দিয়ে TTFB অপ্টিমাইজেশন
export const runtime = "edge"; // ইউজারের নিকটতম Edge Server-এ চলবে
export const preferredRegion = ["sin1", "hkg1"]; // এশিয়া রিজিয়ন সিলেক্ট

// ২. Streaming Suspense দিয়ে ফাস্ট বাইট ফ্ল্যাশ করা
import { Suspense } from "react";

async function DatabaseHeavyContent() {
  // ২ সেকেন্ডের ভারী ডেটাবেস কোয়েরি
  const data = await fetch("https://api.example.com/heavy-db", { cache: "no-store" }).then(r => r.json());
  return <div>{data.title}</div>;
}

export default function FastTTFBPage() {
  return (
    <div>
      {/* এই অংশটি ব্রাউজারে প্রথম ২০ms এর মধ্যে পৌঁছে যাবে (Ultra Fast TTFB) */}
      <header className="p-4 bg-slate-900 text-white">
        <h1>Instant Header Streamed</h1>
      </header>

      {/* ভারী ডেটা ব্যাকগ্রাউন্ডে স্ট্রিম হবে */}
      <Suspense fallback={<p className="p-4">Loading heavy data...</p>}>
        <DatabaseHeavyContent />
      </Suspense>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Edge & Streaming synergy",
          description: "Edge runtime এবং Suspense এর মেলবন্ধনে ব্রাউজার তাৎক্ষণিক প্রথম বাইট রিসিভ করে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Global Media Newsroom (BBC, NYTimes)",
        description: "বিশ্বের যেকোনো প্রান্তের ইউজারের জন্য Edge CDN ক্যাশিং ও স্ট্রিমিং ব্যবহার করে ২০০ms এর নিচে আর্টিকেল পরিবেশন করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'TTFB is the foundational Web Vital: if your TTFB is 800ms, your LCP can never be under 800ms. Streaming HTML with Suspense is the ultimate SSR solution to deliver instant TTFB while backend operations resolve.'",
      deliveryStrategy: "Web Vitals এর চেইন (TTFB -> FCP -> LCP -> INP) ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "TTFB শুধুমাত্র ইউজারের ইন্টারনেট স্পিডের ওপর নির্ভর করে।",
          right: "TTFB মূলত সার্ভার প্রসেসিং, ডাটাবেস ল্যাটেন্সি ও ক্যাশিং কনফিগারেশনের ওপর নির্ভর করে।",
        },
      ],
    },
    quickRevision: [
      "TTFB: Time from request until browser receives first byte.",
      "Good: <200ms; Poor: >600ms.",
      "SSG/ISR = 20-50ms TTFB (Served from Edge CDN).",
      "SSR fix: Streaming with Suspense + Edge Runtime + DB Connection Pooling.",
    ],
    followUpQuestions: [
      {
        question: "Chrome DevTools-এ কীভাবে TTFB পরিমাপ করবেন?",
        shortHint: "Network ট্যাবে কোনো রিকোয়েস্টে ক্লিক করে 'Timing' ট্যাবে 'Waiting for server response (TTFB)' মেট্রিক দেখে।",
      },
    ],
    tags: ["Next.js", "TTFB", "Performance", "Core Web Vitals", "Streaming", "Edge Runtime"],
  },

  // 14. Image and Font Optimization (next/image & next/font)
  {
    id: "nextjs-image-and-font-optimization",
    slug: "nextjs-image-and-font-optimization",
    question: "How do you optimize images and fonts in Next.js using next/image and next/font to achieve zero layout shift and blazing fast performance?",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "Next.js **`next/image`** এবং **`next/font`** মডিউল দিয়ে স্বয়ংক্রিয়ভাবে মিডিয়া ও টাইপোগ্রাফি অপ্টিমাইজ করে **CLS (Cumulative Layout Shift) শূন্যে** নামিয়ে আনে। `next/image` স্বয়ংক্রিয়ভাবে আধুনিক **WebP/AVIF** ফরম্যাটে কনভার্ট করে, ডিভাইসের স্ক্রিন অনুযায়ী রেসপন্সিভ সাইজ দেয়, অলস লোডিং (Lazy loading) করে এবং ব্লার প্লেসহোল্ডার (`placeholder='blur'`) দেখায়। `next/font` গুগল ফন্টগুলোকে বিল্ড টাইমে সেলফ-হোস্ট করে কোনো এক্সটারনাল নেটওয়ার্ক রিকোয়েস্ট ছাড়াই জিরো লেআউট শিফটে ফন্ট রেন্ডার করে।",
    easyExplanation:
      "১. **সাধারণ `<img>` ট্যাগের সমস্যা**:\n- বিশালাকার ৫MB JPG/PNG ডাউনলোড হয়ে ব্যান্ডউইথ নষ্ট করে।\n- ইমেজ লোড হওয়ার সময় হঠাৎ করে নিচের টেক্সট ধাক্কা দিয়ে নিচে নেমে যায়, যা বিরক্তিকর **Layout Shift (CLS)** ঘটায়।\n- পেজের নিচে থাকা ছবিগুলোও শুরুতেই ডাউনলোড হয়।\n\n২. **`next/image` কীভাবে ম্যাজিক করে?**:\n- **অটোমেটিক ফরম্যাট কনভার্শন**: ব্রাউজার সাপোর্ট অনুযায়ী স্বয়ংক্রিয়ভাবে হালকা WebP বা AVIF ফরম্যাটে রূপান্তর করে।\n- **রেসপন্সিভ সাইজিং (`sizes`)**: মোবাইলে ছোট রেজোলিউশন এবং ডেস্কটপে বড় রেজোলিউশন পরিবেশন করে।\n- **Lazy Loading (ডিফল্ট)**: স্ক্রোল করে ছবির কাছে না যাওয়া পর্যন্ত ছবি ডাউনলোড হয় না। তবে হিরো ইমেজের জন্য `priority` দিয়ে তাৎক্ষণিক লোড করানো যায়।\n- **Blur Placeholder**: ছবি লোড হওয়ার আগ পর্যন্ত একটি চমৎকার স্মুথ ব্লার ব্যাকগ্রাউন্ড দেখায়।\n- **Zero CLS**: `width` ও `height` অথবা `fill` দিয়ে অ্যাসপেক্ট রেশিও লক রাখে, ফলে কোনো লাফালাফি হয় না।\n\n৩. **`next/font` কীভাবে জিরো লেআউট শিফট দেয়?**:\n- সাধারণ গুগল ফন্টে ব্রাউজার `fonts.googleapis.com`-এ রিকোয়েস্ট পাঠায়, ফলে ফন্ট লোড হতে দেরি হলে প্রথমে সিস্টেম ফন্ট দেখায় এবং পরে ফন্ট বদলে স্ক্রিন কেঁপে ওঠে (FOUT / FOIT)।\n- `next/font` বিল্ড টাইমে স্বয়ংক্রিয়ভাবে ফন্ট ফাইল ডাউনলোড করে আপনার নিজের ডোমেনে লোকালি হোস্ট করে।\n- এটি সাইজ-অ্যাডজাস্ট (`size-adjust`) CSS প্রপার্টি ব্যবহার করে ফলব্যাক ফন্ট ও কাস্টম ফন্টের স্পেসিং নিখুঁত রাখে, ফলে **লেআউট শিফট একদম ০%** হয়!",
    interviewAnswer:
      "Next.js provides native, automated media optimization via `next/image` and `next/font` to eliminate Cumulative Layout Shift (CLS) and maximize Core Web Vitals. **`next/image`** automatically serves modern, compressed formats (AVIF/WebP), resizes assets on-demand based on device viewports via `sizes`, prevents layout reflows using intrinsic aspect ratios or `fill`, enforces lazy loading by default, and supports smooth low-quality image placeholders (`placeholder='blur'`). **`next/font`** downloads Google Fonts at build time to self-host them locally with zero external network roundtrips, utilizing CSS `size-adjust` fallbacks to completely eradicate Flash of Unstyled Text (FOUT) and visual layout shifts.",
    detailedExplanation: {
      whatItIs:
        "Next.js-এর বিল্ট-ইন ইমেজ কম্প্রেসর/রিসাইজার এবং জিরো-শিফট সেলফ-হোস্টেড ফন্ট ইঞ্জিন।",
      whyItExists:
        "লার্জেস্ট কনটেন্টফুল পেইন্ট (LCP) বাড়ানো, লেআউট শিফট (CLS) সম্পূর্ণ নির্মূল করা এবং ব্যান্ডউইথ সাশ্রয় করা।",
      howItWorks:
        "`next/image` Vercel/Node ইমেজ অপ্টিমাইজার পাইপলাইন ব্যবহার করে; `next/font` বিল্ড টাইমে WOFF2 ফন্ট ইনজেক্ট করে।",
      whenToUse:
        "যেকোনো ওয়েব অ্যাপ্লিকেশনের সমস্ত ছবি, ব্যানার, অ্যাভাটার এবং টাইপোগ্রাফিতে।",
      keyPoints: [
        "next/image converts JPG/PNG to AVIF/WebP on-demand and caches at the Edge.",
        "Always use `priority` on above-the-fold Hero banner images to improve LCP.",
        "next/font eliminates privacy issues and external network calls to Google servers.",
      ],
    },
    codeExample: {
      language: "tsx",
      code: `// ১. next/font/google কনফিগারেশন (app/layout.tsx)
import { Inter, Outfit } from "next/font/google";
import Image from "next/image";
import heroImg from "@/public/hero-banner.jpg";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap", // Zero CLS
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">
        {/* ২. next/image অপ্টিমাইজেশন */}
        <div className="relative w-full h-[400px]">
          <Image
            src={heroImg}
            alt="Job Interview Hero Banner"
            placeholder="blur" // অটোমেটিক স্মুথ ব্লার প্লেসহোল্ডার
            priority // Hero Image হওয়ায় তাৎক্ষণিক LCP অপ্টিমাইজড লোড
            fill // প্যারেন্ট ডিভের সাথে রেসপন্সিভ ফিট
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl"
          />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "next/font zero CLS",
          description: "Outfit ফন্টটি বিল্ড টাইমে লোকালি হোস্ট হয়েছে এবং display: 'swap' দিয়ে সেট করা হয়েছে।",
        },
        {
          step: 2,
          title: "next/image priority & blur",
          description: "Hero Image-এ priority এবং placeholder='blur' ব্যবহার করায় LCP স্কোর সেরা হবে এবং কোনো লেআউট শিফট হবে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Netflix / Airbnb Media Heavy Homepage",
        description: "হাজার হাজার ব্যানার ও পোস্টার থাকা সত্ত্বেও `next/image` দিয়ে স্বয়ংক্রিয়ভাবে WebP/AVIF সাইজিং ও অলস লোডিং করে মোবাইল ডেটা ৯৫% সাশ্রয় করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'For above-the-fold hero images, always pass the `priority` property to next/image so the browser preloads the asset immediately, directly optimizing Largest Contentful Paint (LCP).' ",
      deliveryStrategy: "Layout Shift (CLS) কেন ইউজারের বিরক্তির কারণ এবং next/image ও next/font কীভাবে তা ১০০% সমাধান করে তা সুন্দরভাবে বলুন।",
      avoidSaying: [
        {
          wrong: "সব ছবিতে priority={true} দেওয়া ভালো।",
          right: "শুধুমাত্র স্ক্রিনের উপরের দৃশ্যমান ১-২টি Hero ইমেজে priority দিতে হয়; বাকি সব ছবিতে ডিফল্ট Lazy Loading বজায় রাখতে হয়।",
        },
      ],
    },
    quickRevision: [
      "`next/image`: Automatic AVIF/WebP conversion, responsive `sizes`, lazy loading, `placeholder='blur'`।",
      "Always add `priority` to above-the-fold Hero images (LCP boost).",
      "`next/font`: Self-hosts Google Fonts at build time, 0 external network requests, 0 CLS.",
      "Completely eradicates Cumulative Layout Shift (CLS).",
    ],
    followUpQuestions: [
      {
        question: "রিমোট ডোমেইন (যেমন Cloudinary বা AWS S3) থেকে ছবি লোড করতে `next.config.ts`-এ কী কনফিগার করতে হয়?",
        shortHint: "`images.remotePatterns` এ ডোমেন হোস্টনেম এবং প্রোটোকল কনফিগার করতে হয়।",
      },
    ],
    tags: ["Next.js", "next/image", "next/font", "Core Web Vitals", "LCP", "CLS", "Image Optimization"],
  },
];
