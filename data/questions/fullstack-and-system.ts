import { Question } from "@/types";

export const fullstackAndSystemQuestions: Question[] = [
  {
    id: "react-virtual-dom-vs-real-dom",
    slug: "react-virtual-dom-vs-real-dom",
    question: "How does React's Virtual DOM work and why is it fast?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Virtual DOM (VDOM) হলো ব্রাউজারের আসল Real DOM-এর একটি হালকা মেমরি রিপ্রেজেন্টেশন (খাঁটি JavaScript অবজেক্ট)। যখন React-এ কোনো স্টেট পরিবর্তন হয়, তখন React মেমরিতে একটি নতুন VDOM ট্রি তৈরি করে এবং পূর্ববর্তী VDOM ট্রির সাথে 'Diffing Algorithm' দিয়ে তুলনা করে। এরপর শুধুমাত্র যে অংশটুকু পরিবর্তিত হয়েছে, ঠিক ততটুকু অংশই 'Reconciliation / Batching' প্রক্রিয়ায় আসল Real DOM-এ একবার আপডেট করে। ফলে ব্রাউজারের ভারী রি-পেইন্ট ও রি-ফ্লো কমে গিয়ে অ্যাপ সুপার ফাস্ট চলে।",
    easyExplanation: "সহজ ভাষায় বুঝুন:\n১. আসল Real DOM খুব ধীরগতির, কারণ DOM-এর একটি ছোট জিনিস বদলালে ব্রাউজারকে পুরো পেজের লেআউট নতুন করে আঁকতে হয় (Expensive Reflow & Repaint)।\n২. React সরাসরি Real DOM-এ হাত দেয় না। সে মেমরির ভেতরে চটজলদি একটি কাগজের খসড়া (Virtual DOM) তৈরি করে।\n৩. যখন আপনার স্টেট বদলায়, সে আগের খসড়ার সাথে নতুন খসড়া মিলিয়ে দেখে (Diffing)।\n৪. সে দেখে: 'ওহ! ১০০০টি লাইনের মধ্যে শুধু ৮ নম্বর লাইনের টেক্সটটা বদলেছে!'\n৫. তখন সে Real DOM-এ গিয়ে শুধুমাত্র ওই ৮ নম্বর লাইনটা বদলে দিয়ে আসে। বাকি ৯৯৯টি লাইন যেমন ছিল তেমনই থাকে।",
    interviewAnswer: "React's Virtual DOM is an in-memory lightweight abstraction of the actual browser DOM. When a component's state or props change, React triggers a re-render that builds a new Virtual DOM tree. React then applies its heuristic O(n) **Diffing Algorithm** during the **Reconciliation** phase (Fiber architecture) to compare the new tree against the snapshot of the previous tree. It computes the minimal set of changes (the delta/patches) and batches them to update the Real DOM efficiently in a single commit phase, drastically minimizing browser layout recalculations (reflow) and repainting.",
    detailedExplanation: {
      whatItIs: "মেমোরি-ভিত্তিক অবজেক্ট ট্রি যা আসল ব্রাউজার DOM ম্যানিপুলেশন অপটিমাইজ করে।",
      whyItExists: "সরাসরি ঘন ঘন Real DOM আপডেট ব্রাউজার পারফরম্যান্স চোক করে ফেলে। VDOM ডেভেলপারদের ডিক্লেয়ারেটিভ কোড লিখতে দেয় আর বিহাইন্ড দ্য সিনসে অপটিমাইজড ব্যাচিং নিশ্চিত করে।",
      howItWorks: "১. State Change -> ২. Render Phase (Create new VDOM) -> ৩. Diffing & Reconciliation (Compute Diff via React Fiber) -> ৪. Commit Phase (Apply minimal patches to Real DOM).",
      whenToUse: "সব React অ্যাপ্লিকেশনে এটি স্বয়ংক্রিয়ভাবে কার্যকর থাকে।",
      keyPoints: [
        "VDOM is a plain JS object tree representation.",
        "Diffing Algorithm is O(n) heuristic.",
        "Keys in lists (`key={id}`) optimize array reordering diffs.",
        "Render Phase is pure; Commit Phase does the actual DOM mutations."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. JSX যা React কম্পাইলার VDOM অবজেক্টে রূপান্তর করে
const element = <h1 className="title">Hello Shuvo</h1>;

// ২. বিহাইন্ড দ্য সিনসে এটি দেখতে একটি সাধারণ JavaScript অবজেক্ট (Virtual DOM Node):
/*
{
  type: 'h1',
  props: {
    className: 'title',
    children: 'Hello Shuvo'
  }
}
*/

// ৩. কেন Lists-এ unique 'key' দেওয়া আবশ্যক:
// key না দিলে React পুরো লিস্ট রি-রেন্ডার করতে পারে।
// key={item.id} দিলে React ঠিক জানে কোন আইটেমটি ইনসার্ট বা ডিলিট হয়েছে।
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "JSX থেকে JS অবজেক্ট",
          description: "JSX কোনো জাদু নয়, এটি React.createElement কল হয়ে মেমরিতে হালকা অবজেক্ট তৈরি করে।"
        },
        {
          step: 2,
          title: "ডিফিং অ্যালগরিদমে key-এর ভূমিকা",
          description: "key={todo.id} থাকার কারণে লিস্টে কোনো আইটেম যোগ হলে React অন্য সব নোড না ভেঙে শুধু নতুন নোডটি ইনসার্ট করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Fiber Architecture",
        description: "React 16+ এ Reconciliation প্রসেসকে ছোট ছোট চাঙ্কে বিভক্ত করে প্রায়োরিটি অনুযায়ী এক্সিকিউট করা যাতে অ্যানিমেশন ও টাইপিং স্মুথ থাকে।"
      }
    ],
    interviewTips: {
      tip: "'Diffing Algorithm', 'Reconciliation', এবং 'Reflow/Repaint minimization' টার্মগুলো উল্লেখ করুন।",
      deliveryStrategy: "সংজ্ঞা -> কেন Real DOM স্লো -> ৪টি ধাপ (State change -> VDOM -> Diffing -> Commit) -> key প্রপসের ভূমিকা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "Virtual DOM আসল DOM-এর চেয়ে দ্রুত কোড রান করে।",
          right: "Virtual DOM কোড দ্রুত করে না, বরং অপ্রয়োজনীয় DOM রি-ফ্লো ও পেইন্ট কমিয়ে রেন্ডারিং অপটিমাইজেশনকে দক্ষ ও প্রেডিক্টেবল করে।"
        }
      ]
    },
    quickRevision: [
      "Virtual DOM = Real DOM-এর হালকা ইন-মেমোরি JavaScript অবজেক্ট রূপ।",
      "স্টেট চেঞ্জ হলে নতুন VDOM তৈরি হয় এবং পূর্বেরটির সাথে Diffing করা হয়।",
      "শুধুমাত্র পরিবর্তিত অংশটুকু ব্যাচ আকারে Real DOM-এ আপডেট হয়।",
      "ব্রাউজারের ভারী Reflow & Repaint কমায়।"
    ],
    followUpQuestions: [
      {
        question: "Next.js SSR vs SSG vs ISR vs CSR rendering strategies.",
        targetId: "nextjs-ssr-vs-ssg-vs-isr",
        shortHint: "সার্ভার সাইড রেন্ডারিং কৌশল।"
      }
    ],
    tags: ["React", "Virtual DOM", "Diffing", "Reconciliation", "Fiber"]
  },
  {
    id: "nextjs-ssr-vs-ssg-vs-isr",
    slug: "nextjs-ssr-vs-ssg-vs-isr",
    question: "Difference between SSR, SSG, ISR, and CSR in Next.js.",
    category: "Next.js",
    categorySlug: "nextjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "১. **CSR (Client-Side Rendering)**: ব্রাউজার খালি HTML পায় এবং জাভাস্ক্রিপ্ট ডাউনলোড করে ক্লায়েন্টেই পুরো পেজ রেন্ডার করে।\n২. **SSR (Server-Side Rendering)**: প্রতিটি ইউজার রিকোয়েস্টে সার্ভার রিয়েল-টাইমে ডেটা ফেচ করে সম্পূর্ণ HTML তৈরি করে ব্রাউজারে পাঠায়।\n৩. **SSG (Static Site Generation)**: বিল্ড টাইমে (Build Time) একবার সব HTML জেনারেট করে CDN-এ রেখে দেয় (সুপার ফাস্ট)।\n৪. **ISR (Incremental Static Regeneration)**: স্ট্যাটিক পেজের সুবিধাও দেয় এবং ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পর পর (যেমন প্রতি ৬০ সেকেন্ডে) পুরো সাইট রি-বিল্ড ছাড়াই পেজ আপডেট করে।",
    easyExplanation: "বাস্তব রেস্তোরাঁর খাবার তৈরির উপমা:\n\n১. CSR (রেডিমেড নুডলসের প্যাকেট):\n- রেস্তোরাঁ আপনাকে কাঁচা প্যাকেট দিল, আপনি টেবিলে বসে নিজে গরম পানি দিয়ে রান্না করে খাবেন (ক্লায়েন্টের ব্রাউজার কাজ করে)।\n\n২. SSR (তাজা রান্না করা বিরিয়ানি):\n- আপনি অর্ডার দিলে শেফ সাথে সাথে চুলায় তাজা খাবার রান্না করে গরম গরম টেবিলে সার্ভ করে (প্রতি রিকোয়েস্টে সার্ভার কাজ করে)।\n\n৩. SSG (প্যাকেটজাত বিস্কুট):\n- কারখানা তৈরির সময়ই ১ লাখ প্যাকেট বানিয়ে দোকানে রেখে দিয়েছে। গ্রাহক আসা মাত্র ১ সেকেন্ডে ডেলিভারি!\n\n৪. ISR (স্মার্ট অটো-রিফিল ডিসপ্লে):\n- খাবার আগে থেকেই ডিসপ্লেতে সাজানো থাকে (Fast), কিন্তু প্রতি ১০ মিনিট অন্তর ব্যাকগ্রাউন্ডে নতুন তাজা খাবার দিয়ে পেছনের তাক রিফ্রেশ করা হয়।",
    interviewAnswer: "Next.js offers flexible rendering strategies tailored for different performance and dynamism needs:\n1. **CSR**: Pure client execution via React SPA. Fast page transitions, but poor initial SEO and slower First Contentful Paint (FCP).\n2. **SSR (Server-Side Rendering / `dynamic = 'force-dynamic'` / `no-store`)**: HTML is generated on the server for EVERY individual HTTP request. Ideal for highly dynamic, user-personalized data.\n3. **SSG (Static Site Generation / `generateStaticParams`)**: HTML is pre-rendered at BUILD time and cached globally on Edge CDNs. Blazing fast, ideal for blogs, marketing, and docs.\n4. **ISR (Incremental Static Regeneration / `revalidate = 60`)**: Enables static pages to be regenerated incrementally in the background after a specified duration without requiring a full rebuild.",
    detailedExplanation: {
      whatItIs: "Next.js App Router-এর ৪টি কোর পেজ রেন্ডারিং ও ক্যাশিং আর্কিটেকচার।",
      whyItExists: "SEO অপটিমাইজেশন, দ্রুততম Time-to-First-Byte (TTFB) এবং ডায়নামিক পারসোনালাইজেশনের ব্যালেন্স তৈরি করতে।",
      howItWorks: "App Router-এ `fetch(url, { next: { revalidate: 60 } })` দিয়ে ISR এবং `{ cache: 'no-store' }` দিয়ে SSR কনফিগার করা হয়।",
      whenToUse: "ড্যাশবোর্ড ও প্রাইভেট সেটিংসে CSR/SSR; ব্লগ ও ল্যান্ডিং পেজে SSG; ই-কমার্স প্রোডাক্ট পেজে ISR।",
      keyPoints: [
        "CSR: Rendered in Browser (Poor SEO, high JS payload).",
        "SSR: Rendered on Every Request on Server (Great SEO, higher TTFB server load).",
        "SSG: Rendered once at Build Time (Fastest, Edge CDN cached).",
        "ISR: Statically cached + background revalidation on timer."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// Next.js App Router Examples (app/products/[id]/page.tsx)

// ১. SSG: বিল্ড টাইমে প্রি-রেন্ডার করা
export async function generateStaticParams() {
  const products = await getPopularProducts();
  return products.map((p) => ({ id: p.id }));
}

// ২. ISR: প্রতি ৬০ সেকেন্ডে ব্যাকগ্রাউন্ডে রি-ভ্যালিডেট হবে
export const revalidate = 60; // ISR revalidation window in seconds

export default async function ProductPage({ params }: { params: { id: string } }) {
  // ৩. ISR Data Fetch
  const res = await fetch(\`https://api.example.com/products/\${params.id}\`, {
    next: { revalidate: 60 }
  });
  const product = await res.json();

  // ৪. SSR (যদি কোনো ডেটা প্রতি রিকোয়েস্টে লাইভ দরকার হয়):
  // const dynamicRes = await fetch(url, { cache: 'no-store' });

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: \${product.price}</p>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "generateStaticParams",
          description: "বিল্ড করার সময় নির্দিষ্ট প্যারামিটারগুলোর জন্য আগেই স্ট্যাটিক HTML তৈরি করে রাখে।"
        },
        {
          step: 2,
          title: "revalidate টাইমউইন্ডো",
          description: "৬০ সেকেন্ড পার হওয়ার পর নতুন রিকোয়েস্ট আসলে Next.js ব্যাকগ্রাউন্ডে পেজ আপডেট করে CDN ক্যাশ রিফ্রেশ করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Page (ISR)",
        description: "লাখ লাখ প্রোডাক্ট পেজ দ্রুত লোড হতে ISR ব্যবহার করে, যাতে দাম বা স্টক পরিবর্তন হলে ৬০ সেকেন্ডের মধ্যে স্বয়ংক্রিয়ভাবে আপডেট হয়ে যায়।"
      },
      {
        title: "Social Feed / User Profile (SSR)",
        description: "ব্যবহারকারীর লাইভ নোটিফিকেশন বা ফিড প্রতি রিকোয়েস্টে সার্ভার থেকে ফ্রেশ লোড করা।"
      }
    ],
    interviewTips: {
      tip: "একটি তুলনামূলক ম্যাট্রিক্স (Build time vs Request time vs SEO vs Speed) দিয়ে উত্তর গুছিয়ে বলুন। Next.js 15 App Router-এর `next: { revalidate: X }` সিনট্যাক্স উল্লেখ করুন।",
      deliveryStrategy: "চারটি কৌশলের ১ লাইনের ডেফিনিশন -> রেস্তোরাঁ উপমা -> App Router-এর সিনট্যাক্স -> কোন ক্ষেত্রে কোনটি সেরা তা বলুন।",
      avoidSaying: [
        {
          wrong: "সব পেজেই SSR ব্যবহার করা ভালো।",
          right: "সব পেজে SSR দিলে সার্ভার ওভারলোড হতে পারে; যেখানে সম্ভব SSG/ISR ব্যবহার করে CDN ক্যাশিংয়ের সুবিধা নেওয়া উচিত।"
        }
      ]
    },
    quickRevision: [
      "CSR: ক্লায়েন্ট ব্রাউজারে রেন্ডার (ড্যাশবোর্ড, সেটিংস).",
      "SSR: প্রতি রিকোয়েস্টে সার্ভারে তাজা রেন্ডার (লাইভ পার্সোনালাইজড ডেটা).",
      "SSG: বিল্ড টাইমে একবার তৈরি (ব্লগ, মার্কেটিং, ডকস).",
      "ISR: স্ট্যাটিক ক্যাশ + নির্দিষ্ট সময় পর ব্যাকগ্রাউন্ডে অটো-আপডেট (ই-কমার্স)."
    ],
    followUpQuestions: [
      {
        question: "What is REST API and how does HTTP communication work?",
        targetId: "rest-api-principles",
        shortHint: "RESTful আর্কিটেকচার।"
      }
    ],
    tags: ["Next.js", "App Router", "SSR", "SSG", "ISR", "Performance"]
  },
  {
    id: "rest-api-principles",
    slug: "rest-api-principles",
    question: "What is a REST API, and what are its core principles and HTTP methods?",
    category: "REST API",
    categorySlug: "rest-api",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "REST (Representational State Transfer) হলো এমন একটি আর্কিটেকচারাল স্টাইল যা স্ট্যান্ডার্ড HTTP প্রোটোকল ব্যবহার করে ক্লায়েন্ট এবং সার্ভারের মধ্যে স্টেটলেস কমিউনিকেশন পরিচালনা করে। এর মূল ভিত্তি হলো Resource-ভিত্তিক URL ডিজাইন (যেমন `/api/users`), স্ট্যান্ডার্ড HTTP Methods (GET, POST, PUT, PATCH, DELETE), সঠিক Status Codes (200, 201, 400, 401, 404, 500), এবং JSON ফরম্যাটে ডেটা ট্রান্সফার।",
    easyExplanation: "সহজ ভাষায় বুঝুন:\n১. REST API হলো ক্লায়েন্ট (Frontend) এবং সার্ভারের (Backend) মধ্যে কথা বলার একটি আন্তর্জাতিক নিয়মকানুন।\n২. এখানে সবকিছুই একেকটি 'Resource' (যেমন ইউজার, প্রোডাক্ট, অর্ডার)।\n৩. আপনি কী করতে চান তা বোঝাতে ক্রিয়াপদ হিসেবে HTTP Methods ব্যবহার করবেন:\n   - `GET /api/users`: ইউজারদের তালিকা দেখা (Read).\n   - `POST /api/users`: নতুন ইউজার তৈরি করা (Create).\n   - `PUT /api/users/1`: ইউজারের সব তথ্য সম্পূর্ণ রিপ্লেস করা (Full Update).\n   - `PATCH /api/users/1`: ইউজারের শুধু নির্দিষ্ট ১টি ফিল্ড (যেমন ফোন নাম্বার) পরিবর্তন করা (Partial Update).\n   - `DELETE /api/users/1`: ইউজার মুছে ফেলা (Delete).\n৪. সার্ভার কাজ শেষ করে একটি কোড ফেরত দেবে (যেমন ২০০ মানে Success, ২০১ মানে Created, ৪০৪ মানে Not Found)।",
    interviewAnswer: "REST (Representational State Transfer) is a set of architectural constraints for designing networked web APIs. Its core principles include: 1. **Client-Server Architecture** (Separation of concerns), 2. **Statelessness** (Every request must contain all context needed; the server stores no client session context), 3. **Cacheability** (Responses must define themselves as cacheable or non-cacheable), 4. **Uniform Interface** (Standard URIs, HTTP verbs, JSON representation), and 5. **Layered System** (Client cannot tell if connected directly to end server or proxy/CDN).",
    detailedExplanation: {
      whatItIs: "ওয়েব সার্ভিসের জন্য বহুল ব্যবহৃত স্ট্যান্ডার্ড আর্কিটেকচারাল গাইডলাইন।",
      whyItExists: "যেকোনো প্ল্যাটফর্ম (Web, iOS, Android, IoT) যাতে একটি সিঙ্গেল ব্যাকএন্ডের সাথে কোনো টাইট কাপলিং ছাড়া ইউনিভার্সাল HTTP দিয়ে ডেটা আদান-প্রদান করতে পারে।",
      howItWorks: "URI দিয়ে রিসোর্স চিহ্নিত হয় (`/orders/123`), HTTP Method দিয়ে অ্যাকশন বোঝায়, হেডার দিয়ে মেটাডাটা ও অথরাইজেশন পাস হয়, এবং বডিতে JSON ডেটা যায়।",
      whenToUse: "সব আধুনিক ওয়েব ও মোবাইল অ্যাপ ব্যাকএন্ড সার্ভিসে।",
      keyPoints: [
        "Idempotency: GET, PUT, DELETE, HEAD, OPTIONS are idempotent (Calling multiple times produces the same result on server).",
        "POST and PATCH are NOT inherently idempotent.",
        "PUT = Full replacement; PATCH = Partial update.",
        "Stateless: Authentication relies on Tokens (JWT / Bearer) in Authorization header."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Express.js RESTful Resource Routing (/api/posts)
import express from "express";
const router = express.Router();

// ১. GET: Read all resources
router.get("/posts", async (req, res) => {
  const posts = await db.posts.find();
  res.status(200).json({ success: true, data: posts });
});

// ২. POST: Create a new resource
router.post("/posts", async (req, res) => {
  const newPost = await db.posts.create(req.body);
  res.status(201).json({ success: true, data: newPost }); // 201 Created
});

// ৩. PATCH: Partial update (e.g. Updating only view count or title)
router.patch("/posts/:id", async (req, res) => {
  const updated = await db.posts.update(req.params.id, { $set: req.body });
  res.status(200).json({ success: true, data: updated });
});

// ৪. DELETE: Remove resource
router.delete("/posts/:id", async (req, res) => {
  await db.posts.delete(req.params.id);
  res.status(204).send(); // 204 No Content
});`,
      explanationSteps: [
        {
          step: 1,
          title: "রিসোর্স ওরাল ডিজাইন",
          description: "/posts ইউআরএল ব্যবহার করে স্পষ্ট রিসোর্স নির্দেশ করা হয়েছে (কখনোই /getPosts বা /deletePost লেখা উচিত নয়)।"
        },
        {
          step: 2,
          title: "স্ট্যান্ডার্ড স্ট্যাটাস কোড",
          description: "সৃষ্টিতে 201 Created, সাকসেসে 200 OK, এবং ডিলিশনে 204 No Content ব্যবহার করা হয়েছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Stripe / GitHub REST API",
        description: "বিশ্বসেরা API ডিজাইন যা স্ট্রিক্ট REST নীতিমালা ও প্রেডিক্টেবল রিসোর্স মডেল মেনে চলে।"
      }
    ],
    interviewTips: {
      tip: "**Idempotency** (আইডেমপোটেন্সি) এবং **PUT বনাম PATCH** এর পার্থক্য ইন্টারভিউয়ারদের চরম প্রিয় প্রশ্ন। স্পষ্ট করে বলুন: 'PUT পুরো অবজেক্ট রিপ্লেস করে, PATCH আংশিক ফিল্ড আপডেট করে'।",
      deliveryStrategy: "সংজ্ঞা -> ৫টি কোর কনস্ট্রেইন্ট (Statelessness, Uniform Interface) -> HTTP Methods ও Idempotency -> স্ট্যাটাস কোডস বলুন।",
      avoidSaying: [
        {
          wrong: "URL-এ অ্যাকশন ভার্ব লেখা উচিত, যেমন `/api/deleteUser?id=5`।",
          right: "REST-এ URL সবসময় Noun (রিসোর্স) হবে যেমন `/api/users/5` এবং অ্যাকশন নির্ধারিত হবে HTTP Verb (DELETE) দ্বারা।"
        }
      ]
    },
    quickRevision: [
      "REST = Stateless, Resource-oriented Architecture.",
      "URI Nouns (`/api/products`), HTTP Verbs (`GET, POST, PUT, PATCH, DELETE`).",
      "PUT = Full overwrite; PATCH = Partial update.",
      "Idempotent Methods: GET, PUT, DELETE (একই রিকোয়েস্ট বারবার পাঠালে একই রেজাল্ট).",
      "Status Codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error)."
    ],
    followUpQuestions: [
      {
        question: "MongoDB vs PostgreSQL - When to choose which?",
        targetId: "mongodb-vs-postgresql",
        shortHint: "ডেটাবেস আর্কিটেকচার।"
      }
    ],
    tags: ["REST API", "HTTP", "Backend", "Architecture", "Web Protocols"]
  },
  {
    id: "mongodb-vs-postgresql",
    slug: "mongodb-vs-postgresql",
    question: "MongoDB (NoSQL) vs PostgreSQL (SQL): When to choose which?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "PostgreSQL হলো একটি শক্তিশালী Relational (SQL) ডেটাবেস যা কঠোর স্কিমা, ACID ট্রানজ্যাকশন, জটিল টেবিল রিলেশনশিপ (Joins), এবং ফাইন্যান্সিয়াল ডেটা ইন্টিগ্রিটির জন্য সেরা। আর MongoDB হলো একটি Document-oriented (NoSQL) ডেটাবেস যা ফ্লেক্সিবল JSON/BSON স্কিমা, দ্রুত প্রোটোটাইপিং, হাই-স্পিড রাইট অপারেশনস, এবং হরাইজন্টাল স্কেলিং বা শার্ডিংয়ের (Sharding) জন্য আদর্শ।",
    easyExplanation: "সহজ তুলনা:\n\n১. PostgreSQL (এক্সেল শিট বা বাঁধাই খাতা):\n- সবকিছু রো এবং কলামে সাজানো।\n- নিয়ম খুব কঠোর (একটি ঘরে ভুল ডেটা টাইপ ঢোকানো অসম্ভব)।\n- একাধিক টেবিলের মধ্যে জোড়া লাগানো (Foreign Key & Joins) চমৎকার।\n- কখন ব্যবহার করবেন: ই-কমার্স অর্ডার, ব্যাংকিং লেনদেন, একাউন্টিং, ইউজার পারমিশন সিস্টেম।\n\n২. MongoDB (কাগজের ফাইল ফোল্ডার):\n- প্রতিটি ডকুমেন্টে আলাদা আলাদা ফিল্ড থাকতে পারে (Flexible Schema)।\n- নেস্টেড ডেটা (যেমন একটি পোস্টের ভেতরেই সব কমেন্ট অবজেক্ট আকারে রাখা) দ্রুত পড়া যায়।\n- কখন ব্যবহার করবেন: সোশ্যাল মিডিয়া ফিড, চ্যাট মেসেজ, আইওটি লগস, কন্টেন্ট ম্যানেজমেন্ট সিস্টেম (CMS)।",
    interviewAnswer: "The choice between PostgreSQL (Relational SQL) and MongoDB (Document NoSQL) depends on data structure, relationship complexity, and consistency requirements:\n- **Choose PostgreSQL** when your domain involves structured relational data with foreign keys, requires strict schema enforcement, mandates complex analytical multi-table JOINs, or demands enterprise-grade ACID transactions (e.g., Fintech, ERP, E-commerce inventory).\n- **Choose MongoDB** when your data is hierarchical, polymorphic, or rapidly evolving without rigid relationships, when you need high-throughput horizontal scaling via native sharding, or when modeling self-contained document trees (e.g., Catalogs, Activity Streams, Real-time Logging, CMS).",
    detailedExplanation: {
      whatItIs: "রিলেশনাল বনাম ডকুমেন্ট ডেটাবেস আর্কিটেকচারের কৌশলগত পার্থক্য।",
      whyItExists: "সফটওয়্যার ইঞ্জিনিয়ারিংয়ে সঠিক ডেটাবেস নির্বাচন সিস্টেমের স্কেলাবিলিটি ও ডেটা ইনটেগ্রিটির প্রধান ভিত্তি।",
      howItWorks: "PostgreSQL টেবিল, ফরেন কি ও B-Tree ইনডেক্সিং এবং MVCC কনকারেন্সি ব্যবহার করে। MongoDB BSON বাইনারি ডকুমেন্টস এবং WiredTiger স্টোরেজ ইঞ্জিন ব্যবহার করে।",
      whenToUse: "ফিনটেক ও কোর অ্যাপে PostgreSQL; দ্রুত পরিবর্তনশীল স্টার্টআপ MVP বা বড় আনস্ট্রাকচার্ড লগে MongoDB।",
      keyPoints: [
        "PostgreSQL: Relational, Strict Schema, Foreign Keys, Complex JOINs, Strong ACID.",
        "MongoDB: Document model (BSON), Flexible Schema, Embedded documents, Native Sharding.",
        "PostgreSQL now natively supports JSONB with indexing (providing best of both worlds)."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. PostgreSQL Schema (via Prisma) - Strict Relations
/*
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  posts     Post[]
}

model Post {
  id        String   @id @default(uuid())
  title     String
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
}
*/

// ২. MongoDB Document Model (Mongoose) - Flexible Embedded Documents
/*
const PostSchema = new mongoose.Schema({
  title: String,
  author: { name: String, avatar: String }, // Embedded object
  comments: [
    { user: String, text: String, date: Date } // Embedded array of comments
  ]
});
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "PostgreSQL নরমালাইজড রিলেশন",
          description: "ডেটা আলাদা টেবিলে সুরক্ষিত থাকে এবং Foreign Key দিয়ে ডেটার অখণ্ডতা নিশ্চিত হয়।"
        },
        {
          step: 2,
          title: "MongoDB ডিনরমালাইজড এম্বেডিং",
          description: "পোস্ট এবং তার কমেন্ট একই ডকুমেন্টে থাকায় কোনো JOIN ছাড়াই ১টি সিঙ্গেল কোয়েরিতে পুরো ডেটা তুলে আনা যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "PostgreSQL JSONB Hybrid Power",
        description: "Uber ও GitLab রিলেশনাল ডেটার পাশাপাশি তাদের ডায়নামিক কনফিগারেশন PostgreSQL-এর ইনডেক্সড `JSONB` কলামে রেখে এক ডেটাবেসেই উভয় সুবিধা গ্রহণ করে।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে উল্লেখ করুন: 'PostgreSQL এখন `JSONB` সাপোর্ট করায় অনেক ক্ষেত্রে NoSQL-এর প্রয়োজনীয়তা একা পূরণ করতে পারে'। এটি আধুনিক আর্কিটেক্টদের অন্যতম প্রিয় পয়েন্ট।",
      deliveryStrategy: "তুলনামূলক ৩টি ভিত্তি (Data Structure, ACID, Scaling) -> রিয়েল ওয়ার্ল্ড ব্যবহারের ক্ষেত্র -> PostgreSQL JSONB সমাধান বলুন।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে কোনো রিলেশন তৈরি করা যায় না।",
          right: "MongoDB-তে `$lookup` এগ্রিগেশন দিয়ে রেফারেন্সিং করা যায়, তবে এটি রিলেশনাল ডাটাবেসের মতো অপটিমাইজড ও রেফারেঞ্চিয়াল ইনটেগ্রিটি বান্ধব নয়।"
        }
      ]
    },
    quickRevision: [
      "PostgreSQL: Strict Relational, Foreign Keys, Complex JOINs, Strong ACID (Fintech, E-commerce).",
      "MongoDB: Flexible JSON Documents, Embedded Models, High Write Speed, Native Sharding (Logs, Feeds, CMS).",
      "PostgreSQL JSONB কলামে NoSQL স্টাইল ডেটাও চমৎকার রাখা যায়।"
    ],
    followUpQuestions: [
      {
        question: "Git rebase vs merge differences and best practices.",
        targetId: "git-rebase-vs-merge",
        shortHint: "ভার্সন কন্ট্রোল স্ট্র্যাটেজি।"
      }
    ],
    tags: ["Databases", "PostgreSQL", "MongoDB", "SQL vs NoSQL", "Architecture"]
  },
  {
    id: "git-rebase-vs-merge",
    slug: "git-rebase-vs-merge",
    question: "Difference between Git Rebase and Git Merge, and when to use which?",
    category: "Git & GitHub",
    categorySlug: "git-github",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Git Merge** দুটি ব্রাঞ্চের হিস্ট্রি অপরিবর্তিত রেখে তাদের একত্রিত করে একটি নতুন 'Merge Commit' তৈরি করে—ফলে পুরো প্রজেক্টের আসল হিস্ট্রি ও টাইমলাইন ১০০% অক্ষত থাকে। আর **Git Rebase** আপনার ফিচার ব্রাঞ্চের সমস্ত কমিটকে মেইন ব্রাঞ্চের লেটেস্ট কমিটের ওপরে এক এক করে নতুন বেস হিসেবে পুনরায় লিখে (Rewrite commit history)—ফলে কোনো অতিরিক্ত মার্জ কমিট ছাড়া একটি সুন্দর সরলরৈখিক (Linear) ও ক্লিন গিট হিস্ট্রি পাওয়া যায়।",
    easyExplanation: "সহজ গাছের ডালপালার উপমা:\n\n১. Git Merge (সেতু তৈরি করা):\n- আপনার ফিচার ব্রাঞ্চ আর মেইন ব্রাঞ্চ পাশাপাশি চলবে।\n- শেষে একটি বড় সেতু (Merge Commit) দিয়ে দুজনকে জুড়ে দেওয়া হবে।\n- সুবিধা: অতীতে কে কখন কী করেছিল সব হুবহু দেখা যায়।\n- অসুবিধা: অনেক শাখা-প্রশাখা হয়ে গিট হিস্ট্রি দেখতে জগাখিচুড়ি বা জটিল হয়ে যেতে পারে।\n\n২. Git Rebase (ডাল কেটে ডগায় জোড়া লাগানো):\n- আপনি ফিচার ব্রাঞ্চের সব কমিট কেটে নিয়ে মেইন ব্রাঞ্চের একদম লেটেস্ট মাথার ওপরে জোড়া লাগিয়ে দিলেন।\n- সুবিধা: গিট লগ দেখতে একদম সোজা সরলরেখার মতো পরিষ্কার মনে হয় (`git log --oneline` দেখলে আনন্দ লাগে)।\n- গোল্ডেন রুল: কখনোই পাবলিক বা শেয়ার্ড ব্রাঞ্চে (যেমন main/master) Rebase করবেন না!",
    interviewAnswer: "Git Merge and Git Rebase are two primary ways to integrate changes from one branch into another:\n- **Git Merge** preserves the complete chronological history of both branches by creating a non-destructive, three-way **Merge Commit**. It is safe for shared/public branches and clearly documents when features were integrated.\n- **Git Rebase** re-applies the commits of the feature branch one-by-one onto the tip of the target branch, rewriting the commit history to maintain a completely linear, clean history without extra merge commits.\n- **The Golden Rule of Rebase**: NEVER rebase commits that exist outside your local repository on public/shared branches.",
    detailedExplanation: {
      whatItIs: "ভার্সন কন্ট্রোলে ব্রাঞ্চ ইন্টিগ্রেশন ও হিস্ট্রি ম্যানেজমেন্টের দুটি মৌলিক কৌশল।",
      whyItExists: "টিমের পছন্দ অনুযায়ী পূর্ণাঙ্গ অডিট ট্রেইল (Merge) অথবা রিডাবল ক্লিন লিনিয়ার হিস্ট্রি (Rebase) নিশ্চিত করতে।",
      howItWorks: "Merge ৩-পয়েন্ট কম্প্যারিজনে নতুন কমিট বানায়। Rebase কমিটগুলোর SHA হ্যাশ বদলে নতুন প্যারেন্ট রেফারেন্স তৈরি করে।",
      whenToUse: "লোকাল ফিচার ব্রাঞ্চ আপ-টু-ডেট রাখতে `git rebase main`। আর ফিচার ব্রাঞ্চ মূল `main` এ রিলিজ করতে Pull Request / Squash & Merge।",
      keyPoints: [
        "Merge is non-destructive (Keeps original commit timestamps and SHAs).",
        "Rebase rewrites commit history (Creates brand new commit hashes).",
        "Golden Rule: Never rebase shared public branches.",
        "Interactive Rebase (`git rebase -i`) is excellent for squashing messy local commits before PR."
      ]
    },
    codeExample: {
      language: "bash",
      code: `### ১. Git Merge Workflow
git checkout main
git pull origin main
git checkout feature-auth
git merge main
# রেজাল্ট: একটি নতুন 'Merge branch main into feature-auth' কমিট তৈরি হবে

### ২. Git Rebase Workflow (Clean Linear History)
git checkout feature-auth
git fetch origin
git rebase origin/main
# কনফ্লিক্ট হলে ঠিক করুন, তারপর:
# git add . && git rebase --continue
# রেজাল্ট: feature-auth ব্রাঞ্চের সব কমিট মেইনের মাথার ওপর সোজা বসে যাবে

### ৩. Interactive Rebase (কমিট গোছানো)
git rebase -i HEAD~3 # শেষ ৩টি অগোছালো কমিটকে ১টি পরিষ্কার কমিটে Squash করা`,
      explanationSteps: [
        {
          step: 1,
          title: "মার্জ কমিট প্রিজারভেশন",
          description: "git merge কোনো কমিট না মুছে নতুন মার্জ কমিট দিয়ে ব্রাঞ্চ যুক্ত করে।"
        },
        {
          step: 2,
          title: "রিবাসিং ও লিনিয়ার চেইন",
          description: "git rebase মূল ব্রাঞ্চের নতুন পরিবর্তনগুলো নিচে রেখে ফিচার কমিটগুলোকে উপরে সাজিয়ে দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "GitHub Squash and Merge",
        description: "PR মার্জ করার সময় GitHub-এ 'Squash and Merge' অপশন ব্যবহার করে ২০টি ছোট ছোট ওয়ার্কিং কমিটকে ১টি অর্থপূর্ণ ক্লিন কমিট বানিয়ে main-এ পুশ করা।"
      }
    ],
    interviewTips: {
      tip: "**The Golden Rule of Rebase** ইন্টারভিউয়ারকে স্পষ্টভাবে বলুন: 'পাবলিক বা টিম মেম্বারদের সাথে শেয়ার্ড ব্রাঞ্চে কখনো রিব্যাস করতে নেই'। এটি টিম কোলাবোরেশনের শীর্ষ রুল।",
      deliveryStrategy: "পার্থক্য (Non-destructive vs History Rewriting) -> লিনিয়ার বনাম ব্রাঞ্চিং গ্রাফ -> Golden Rule -> Squash & Merge এর সেরা ব্যবহার বলুন।",
      avoidSaying: [
        {
          wrong: "Rebase সবসময় Merge-এর চেয়ে ভালো।",
          right: "উভয়ের আলাদা ভূমিকা রয়েছে; লোকাল ব্রাঞ্চ ক্লিন রাখতে Rebase চমৎকার, কিন্তু ট্র্যাকিং ও পাবলিক ব্রাঞ্চ ইন্টিগ্রেশনে Merge নিরাপদ।"
        }
      ]
    },
    quickRevision: [
      "Merge: Non-destructive, নতুন Merge Commit তৈরি করে, হিস্ট্রি অপরিবর্তিত থাকে।",
      "Rebase: হিস্ট্রি রি-রাইট করে, সোজা Linear History দেয় (কোনো মার্জ কমিট নেই)।",
      "Golden Rule: পাবলিক/শেয়ার্ড ব্রাঞ্চে কখনো Rebase করবেন না।",
      "ইন্টারেক্টিভ রিব্যাস (`git rebase -i`) দিয়ে এলোমেলো কমিট স্কোয়াশ করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "HR / Behavioral: Tell me about yourself for a Full Stack Developer.",
        targetId: "hr-tell-me-about-yourself",
        shortHint: "ইন্টারভিউয়ের প্রথম ও মোস্ট ইমপ্যাক্টফুল প্রশ্ন।"
      }
    ],
    tags: ["Git", "GitHub", "Version Control", "Rebase", "Merge", "Best Practices"]
  },
  {
    id: "hr-tell-me-about-yourself",
    slug: "hr-tell-me-about-yourself",
    question: "How to answer 'Tell me about yourself' as a Modern Full-Stack Web Developer?",
    category: "HR / Behavioral",
    categorySlug: "hr-behavioral",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "এই প্রশ্নের উত্তর কখনোই নিজের ব্যক্তিগত জীবনবৃত্তান্ত দিয়ে শুরু করা উচিত নয়। এটি উত্তর দেওয়ার সেরা আন্তর্জাতিক ফর্মুলা হলো **'Present - Past - Future'** বা **'Role - Impact - Passion'** কাঠামো: ১. **Present**: বর্তমানে আপনার রোল, মূল টেক স্ট্যাক (React, Next.js, TypeScript, Node.js) এবং সাম্প্রতিক বড় অর্জন। ২. **Past**: আপনি অতীতে কোন ব্যাকগ্রাউন্ড থেকে এসেছেন এবং কী কী বাস্তব প্রবলেম সলভ করেছেন। ৩. **Future**: আপনি কেন এই নির্দিষ্ট কোম্পানি ও রোলের জন্য পারফেক্ট এবং কীভাবে তাদের ব্যবসায় অবদান রাখতে চান।",
    easyExplanation: "সহজ ৯০ সেকেন্ডের স্ক্রিপ্ট স্ট্রাকচার:\n\n১. প্রথম ৩০ সেকেন্ড (বর্তমান):\n'আমি একজন Full-Stack Web Developer, যিনি React, Next.js, TypeScript এবং Node.js ইকোসিস্টেমে হাই-পারফরম্যান্স ও ইউজার-ফ্রেন্ডলি ওয়েব অ্যাপ্লিকেশন তৈরিতে অভিজ্ঞ...'\n\n২. পরবর্তী ৩০ সেকেন্ড (বাস্তব ইমপ্যাক্ট):\n'আমার সাম্প্রতিক প্রজেক্টে আমি এমন একটি সিস্টেম অপটিমাইজ করেছি যা পেজ লোড টাইম ৪০% কমিয়েছে এবং ক্লিন আর্কিটেকচার বজায় রেখেছে...'\n\n৩. শেষ ৩০ সেকেন্ড (কেন এই কোম্পানি):\n'আমি আপনাদের কোম্পানির প্রোডাক্ট এবং ইঞ্জিনিয়ারিং কালচার ফলো করছি। আমি আমার টাইপ-সেফ আর্কিটেকচার এবং প্রবলেম-সলভিং স্কিল দিয়ে আপনাদের টিমের গ্রোথে সরাসরি অবদান রাখতে চাই।'",
    interviewAnswer: "A high-impact 90-second response follows the **Present-Past-Future** framework: \n'I am a Full-Stack Engineer specializing in modern web technologies including TypeScript, Next.js, React, and Node.js. Currently, I focus on building scalable, type-safe web applications with a strong emphasis on clean code architecture and optimized user experience. In my previous work, I have architected end-to-end features—from designing relational PostgreSQL schemas and REST APIs to creating responsive, accessible UI components. What excites me most about this role at [Company Name] is your focus on [Specific product feature or mission], and I look forward to bringing my full-stack expertise to help accelerate your engineering roadmap.'",
    detailedExplanation: {
      whatItIs: "যেকোনো টেকনিক্যাল বা এইচআর ইন্টারভিউয়ের ওপেনিং পিচ যা পুরো ইন্টারভিউয়ের টোন সেট করে।",
      whyItExists: "ইন্টারভিউয়ার আপনার কমিউনিকেশন স্কিল, কনফিডেন্স, টেকনিক্যাল ফোকাস এবং আপনি কোম্পানির জন্য কতটা প্রাসঙ্গিক তা ২ মিনিটে যাচাই করতে চান।",
      howItWorks: "ব্যক্তিগত বা অপ্রাসঙ্গিক কথা এড়িয়ে সরাসরি প্রফেশনাল ভ্যালু ও অর্জনের ওপর আলোকপাত করা।",
      whenToUse: "ইন্টারভিউয়ের শুরুর প্রথম ২ মিনিটের মধ্যে।",
      keyPoints: [
        "Follow the 'Present -> Past -> Future' structure.",
        "Keep it strictly under 90 to 120 seconds.",
        "Highlight business impact and technical strengths.",
        "Connect directly to why you want to join this specific team."
      ]
    },
    codeExample: {
      language: "markdown",
      code: `### 🎯 The Winning 90-Second Speech Script (বাংলায় প্রস্তুতকৃত):

"নমস্কার / আসসালামু আলাইকুম। আমি শুভ, একজন প্যাশনেট **Full-Stack Web Developer**। 

**[Present]:**
আমি মূলত **React, Next.js, TypeScript, Node.js এবং আধুনিক ডেটাবেস (PostgreSQL/MongoDB)** নিয়ে কাজ করি। আমার মূল ফোকাস থাকে এমন ওয়েব অ্যাপ্লিকেশন তৈরি করা যা কেবল দেখতে সুন্দর নয়, বরং ব্যাকএন্ডে হাইলি স্কেলেবল, টাইপ-সেফ এবং সুপার ফাস্ট।

**[Past & Impact]:**
গত কয়েক বছরে আমি বিভিন্ন বাস্তব প্রজেক্টে সম্পূর্ণ এন্ড-টু-এন্ড ফিচার ডেভেলপ করেছি—যেমন অথেনটিকেশন, স্টেট ম্যানেজমেন্ট, রিয়েল-টাইম সার্চ এবং RESTful API আর্কিটেকচার ডিজাইন। আমি সবসময় ক্লিন কোড, মডুলার কম্পোনেন্ট স্ট্রাকচার এবং রিডাবিলিটি নিশ্চিত করতে পছন্দ করি।

**[Future & Why Here]:**
আমি আপনাদের কোম্পানির [Company/Product Name]-এর কাজগুলো দেখেছি। আমার বিশ্বাস, আধুনিক ফ্রন্টএন্ড এবং ব্যাকএন্ড আর্কিটেকচারে আমার অভিজ্ঞতা আপনাদের প্রোডাক্টের নতুন ফিচার ডেলিভারি এবং টিম স্কেলিংয়ে দ্রুত ভূমিকা রাখতে পারবে।"`,
      explanationSteps: [
        {
          step: 1,
          title: "কনফিডেন্ট ওপেনিং",
          description: "সরাসরি নিজের মূল টেকনিক্যাল পরিচয় ও শক্তিশালী স্ট্যাক তুলে ধরা।"
        },
        {
          step: 2,
          title: "ভ্যালু ও আর্কিটেকচার ফোকাস",
          description: "ক্লিন কোড ও বিজনেস ইমপ্যাক্টের কথা বলে নিজেকে সাধারণ কোডারের চেয়ে আলাদা প্রমাণ করা।"
        },
        {
          step: 3,
          title: "কোম্পানির সাথে সংযোগ",
          description: "কোম্পানির জন্য আপনি কীভাবে লাভজনক হবেন তা স্পষ্ট করে পিচ শেষ করা।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "STAR Method for Follow-up Behavioral Questions",
        description: "Situation (পরিস্থিতি) -> Task (চ্যালেঞ্জ) -> Action (আপনি কী করলেন) -> Result (পরিমাপযোগ্য ফলাফল) দিয়ে সব ইন্টারভিউ প্রশ্নের উত্তর দেওয়া।"
      }
    ],
    interviewTips: {
      tip: "কখনোই সিভিতে লেখা জিনিস হুবহু তোতাপাখির মতো রিডিং পড়বেন না। একটি গল্প বলার মতো করে কনফিডেন্সের সাথে আপনার প্যাশন ও সমস্যা সমাধানের ক্ষমতা তুলে ধরুন।",
      deliveryStrategy: "স্মাইল দিয়ে শুরু -> ৯০ সেকেন্ড টাইম লিমিট মেনে চলা -> Present-Past-Future ফ্রেমওয়ার্ক ধরে শেষ করুন।",
      avoidSaying: [
        {
          wrong: "আমি ছোটবেলা থেকে কম্পিউটার পছন্দ করি, আমার স্কুল অমুক জায়গায়...",
          right: "সরাসরি প্রফেশনাল ফুলস্ট্যাক রোল, টেক স্ট্যাক এবং ব্যবসায়িক ইমপ্যাক্ট দিয়ে শুরু করুন।"
        }
      ]
    },
    quickRevision: [
      "কাঠামো: Present (বর্তমান রোল) -> Past (অর্জন ও প্রজেক্ট) -> Future (কেন এই কোম্পানি).",
      "সময়: সর্বোচ্চ ৯০ থেকে ১২০ সেকেন্ড।",
      "কীওয়ার্ড: TypeScript, Scalable Architecture, Clean Code, Business Impact.",
      "স্মাইল ও কনফিডেন্স বজায় রাখুন।"
    ],
    followUpQuestions: [
      {
        question: "How do you handle conflict or differing technical opinions in a team?",
        shortHint: "STAR মেথডে টিমওয়ার্ক ও সমঝোতা।"
      }
    ],
    tags: ["HR", "Behavioral", "Interview Preparation", "Communication", "STAR Method"]
  }
];
