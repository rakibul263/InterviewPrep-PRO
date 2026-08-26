import { Question } from "@/types";

export const javascriptBrowserWebApisQuestions: Question[] = [
  {
    id: "cookies-localstorage-sessionstorage-indexeddb",
    slug: "cookies-localstorage-sessionstorage-indexeddb",
    question: "What are the differences between Cookie, LocalStorage, SessionStorage, and IndexedDB?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**Cookie** (~4KB) সার্ভারে প্রতিটি HTTP রিকোয়েস্টের সাথে স্বয়ংক্রিয়ভাবে পাঠানো হয় (অথেন্টিকেশন ও টোকেনের জন্য); **LocalStorage** (~5-10MB) ব্রাউজার বন্ধ করলেও স্থায়ী থাকে; **SessionStorage** (~5MB) ট্যাব বন্ধ করলেই মুছে যায়; এবং **IndexedDB** (~GBs) হলো ব্রাউজারের একটি পাওয়ারফুল NoSQL ডেটাবেস যা বিপুল পরিমাণ স্ট্রাকচার্ড ডেটা ও ফাইল ক্লায়েন্ট-সাইডে অফলাইন সংরক্ষণে ব্যবহৃত হয়।",
    easyExplanation:
      "ব্রাউজারে ক্লায়েন্ট-সাইড ডেটা স্টোর করার ৪টি মূল টেকনোলজির তুলনামূলক বিশ্লেষণ:\n\n১. **Cookies (`~4KB`)**:\n- সার্ভার ও ক্লায়েন্ট উভয়েই পড়তে পারে।\n- প্রতিটি API/HTTP রিকোয়েস্টের হেডারে নিজে থেকেই চলে যায়।\n- `HttpOnly` এবং `Secure` ফ্ল্যাগ দিয়ে XSS আক্রমণ থেকে JWT বা সেশন আইডি সুরক্ষিত রাখা যায়।\n\n২. **LocalStorage (`~5-10MB`)**:\n- শুধুমাত্র ব্রাউজারে থাকে (সার্ভার সরাসরি পায় না)।\n- ব্যবহারকারী নিজে না মুছলে বা কোড দিয়ে ক্লিয়ার না করলে ডেটা আজীবন সংরক্ষিত থাকে।\n- থিম প্রিফারেন্স, ইউজার সেটিংস ও অফলাইন ড্রাফটের জন্য উপযুক্ত।\n\n৩. **SessionStorage (`~5MB`)**:\n- LocalStorage-এর মতোই, কিন্তু এর মেয়াদ শুধুমাত্র বর্তমান ব্রাউজার ট্যাব চালু থাকা পর্যন্ত।\n- ট্যাব বা উইন্ডো বন্ধ করলে স্বয়ংক্রিয়ভাবে সব ডেটা ডিলিট হয়ে যায়।\n- মাল্টি-স্টেপ ফর্ম বা সাময়িক স্টেট সংরক্ষণে উপযুক্ত।\n\n৪. **IndexedDB (`শত শত মেগাবাইট বা গিগাবাইট`)**:\n- সম্পূর্ণ ক্লায়েন্ট-সাইড অ্যাসিনক্রোনাস ট্রানজেকশনাল NoSQL ডেটাবেস।\n- ইনডেক্সিং, অবজেক্ট স্টোর এবং অফলাইন PWA অ্যাপ্লিকেশন তৈরিতে ব্যবহৃত হয়।",
    interviewAnswer:
      "The choice of client storage depends on storage size, lifecycle, and server communication. **Cookies** are small (~4KB), support expiration dates, and are automatically sent to the server with every HTTP request—making `HttpOnly` cookies ideal for secure auth sessions. **LocalStorage** stores 5-10MB synchronously with no expiration until explicitly cleared. **SessionStorage** is scoped to the current browser tab lifetime. For large, complex, or offline-first datasets, **IndexedDB** provides a transactional, indexed asynchronous NoSQL storage engine capable of storing gigabytes of data.",
    detailedExplanation: {
      whatItIs:
        "এটি আধুনিক ওয়েব ব্রাউজারের ৪টি প্রধান ক্লায়েন্ট-সাইড স্টোরেজ মেকানিজম।",
      whyItExists:
        "নেটওয়ার্ক রিকোয়েস্ট না পাঠিয়ে অফলাইন ডেটা অ্যাক্সেস, দ্রুত পেজ লোড, পার্সোনালাইজেশন এবং নিরাপদ অথেন্টিকেশন সেশন ম্যানেজমেন্টের জন্য।",
      howItWorks:
        "LocalStorage ও SessionStorage সিনক্রোনাস কী-ভ্যালু স্টোর হিসেবে কাজ করে। Cookie ব্রাউজার হেডারে `Set-Cookie` ও `Cookie` দিয়ে পরিচালিত হয়। IndexedDB অ্যাসিনক্রোনাস ইভেন্ট ও প্রমিজ-বেসড ট্রানজেকশন রান করে।",
      whenToUse:
        "অথেন্টিকেশন টোকেনের জন্য `HttpOnly Cookie`; লাইটওয়েট সেটিংস ও থিমের জন্য `LocalStorage`; সিঙ্গেল-ট্যাব উইজার্ডের জন্য `SessionStorage`; এবং অফলাইন ক্যাশিং বা ভারী ফাইলের জন্য `IndexedDB` ব্যবহার করুন।",
      keyPoints: [
        "Cookie: ~4KB, স্বয়ংক্রিয়ভাবে HTTP হেডারে সার্ভারে যায়।",
        "LocalStorage: ~5MB, কোনো এক্সপায়ারি নেই (স্থায়ী)।",
        "SessionStorage: ~5MB, ট্যাব বন্ধ হলেই মুছে যায়।",
        "IndexedDB: বড় স্কেলের NoSQL ডেটাবেস, অ্যাসিনক্রোনাস।",
        "নিরাপত্তা সতর্কতা: লোকালস্টোরেজে সেনসিটিভ টোকেন রাখা XSS এর ঝুঁকিতে থাকে।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. LocalStorage ব্যবহার (স্থায়ী ডেটা)
localStorage.setItem('theme', 'dark');
const currentTheme = localStorage.getItem('theme');
console.log('Theme:', currentTheme); // 'dark'

// ২. SessionStorage ব্যবহার (ট্যাব ভিত্তিক ডেটা)
sessionStorage.setItem('tempFormStep', '2');
console.log(sessionStorage.getItem('tempFormStep')); // '2'

// ৩. Cookie তৈরি করা (এক্সপায়ারি ও পাথ সহ)
document.cookie = "username=Shuvo; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/; SameSite=Strict";

// ৪. IndexedDB খোলা (সাধারণ উদাহরণ)
const request = indexedDB.open('OfflineAppDB', 1);
request.onupgradeneeded = (e) => {
  const db = e.target.result;
  db.createObjectStore('products', { keyPath: 'id' });
};
request.onsuccess = (e) => {
  console.log('IndexedDB Ready for offline use!');
};`,
      explanationSteps: [
        {
          step: 1,
          title: "LocalStorage",
          description: "কী-ভ্যালু দিয়ে মেমরিতে সেভ হয় এবং ব্রাউজার রিলোড বা বন্ধ করলেও ডেটা টিকে থাকে।",
        },
        {
          step: 2,
          title: "SessionStorage",
          description: "শুধুমাত্র বর্তমান ব্রাউজার ট্যাবের মেমরিতে সীমাবদ্ধ থাকে।",
        },
        {
          step: 3,
          title: "Cookie Creation",
          description: "এক্সপায়ারি ও সিকিউরিটি ফ্ল্যাগসহ ব্রাউজারের কুকি স্টোরেজে রেজিস্টার হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "JWT Token Security Architecture",
        description: "রিফ্রেশ টোকেনকে `HttpOnly Secure Cookie`-তে রাখা যাতে জাভাস্ক্রিপ্ট XSS অ্যাটাক দিয়ে টোকেন চুরি না হতে পারে।",
      },
      {
        title: "PWA Offline Mode with IndexedDB",
        description: "ইন্টারনেট না থাকলেও ব্যবহারকারীকে ড্রাফট পোস্ট ও আর্টিকেল পড়তে দেওয়ার জন্য Dexie.js / IndexedDB-তে ডেটা ক্যাশ রাখা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারদের সবচেয়ে পছন্দের সিকিউরিটি প্রশ্ন: 'Where should we store JWT tokens?' উত্তর দিন: 'HttpOnly Cookies are the safest against XSS attacks compared to LocalStorage.'",
      deliveryStrategy: "৪টি স্টোরেজের ক্যাপাসিটি, লাইফসাইকেল এবং সার্ভার ট্রাফিকের প্রভাবের উপর ভিত্তি করে সাজিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "সব ডেটা লোকালস্টোরেজে রাখা ভালো কারণ জায়গা বেশি।",
          right: "সেনসিটিভ ডেটা লোকালস্টোরেজে রাখা বিপজ্জনক কারণ যেকোনো ম্যালিসিয়াস JS স্ক্রিপ্ট LocalStorage থেকে তা পড়তে পারে।",
        },
      ],
    },
    quickRevision: [
      "Cookie: 4KB | HTTP হেডারে যায় | HttpOnly দিয়ে নিরাপদ।",
      "LocalStorage: 5-10MB | পার্মানেন্ট | ক্লায়েন্ট অনলি।",
      "SessionStorage: 5MB | ট্যাব ক্লোজ হলে মুছে যায়।",
      "IndexedDB: GBs | NoSQL | অফলাইন PWA ডেটা।",
    ],
    followUpQuestions: [
      {
        question: "LocalStorage কেন সিনক্রোনাস এবং এটি কি পারফরম্যান্স স্লো করতে পারে?",
        shortHint: "হ্যাঁ, এটি মেইন থ্রেডে সিনক্রোনাস I/O ব্লক করে, তাই বড় JSON পার্সিং সাবধানে করা উচিত।",
      },
    ],
    tags: ["Browser", "Storage", "Cookies", "LocalStorage", "IndexedDB", "Security"],
  },
  {
    id: "domcontentloaded-vs-window-onload-defer-async",
    slug: "domcontentloaded-vs-window-onload-defer-async",
    question: "What is the difference between DOMContentLoaded and window.onload, and async vs defer in scripts?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "`DOMContentLoaded` ইভেন্ট ট্রিগার হয় যখন ব্রাউজার সম্পূর্ণ HTML পার্স করে DOM ট্রি তৈরি শেষ করে (ছবি, CSS বা ফ্রেম লোড হওয়ার অপেক্ষা করে না)। আর `window.onload` ফায়ার হয় যখন পুরো পেজসহ সমস্ত বাহ্যিক রিসোর্স (ইমেজ, স্টাইলশিট, ফন্ট) সম্পূর্ণ লোড হয়ে যায়। স্ক্রিপ্ট লোডিংয়ে `defer` স্ক্রিপ্ট ব্যাকগ্রাউন্ডে নামিয়ে DOM পার্সিং শেষে ক্রমানুসারে রান করে, আর `async` নামার সাথে সাথেই DOM পার্সিং থামিয়ে তাৎক্ষণিক রান করে।",
    easyExplanation:
      "ওয়েব পেজ লোডিং ও স্ক্রিপ্ট এক্সিকিউশনের দুটি মূল ধারণা:\n\n১. **ইভেন্ট পার্থক্য (`DOMContentLoaded` বনাম `load`)**:\n- **`DOMContentLoaded`**: অত্যন্ত দ্রুত ফায়ার হয়। ব্রাউজার HTML পড়ে DOM এলিমেন্টগুলো তৈরি করার সাথে সাথেই এটি কল হয়। তাই DOM ম্যানিপুলেশন বা বাটন ইভেন্ট লিসেনার বসাতে এটিই সবচেয়ে উপযুক্ত।\n- **`window.onload`**: পেজের প্রতিটি ভারী ইমেজ, ব্যানার, CSS ও সাব-ফ্রেম সম্পূর্ণ ডাউনলোড হওয়া পর্যন্ত অপেক্ষা করে।\n\n২. **স্ক্রিপ্ট অ্যাট্রিবিউট (`async` বনাম `defer`)**:\n- সাধারণ `<script>`: HTML পার্সিং সম্পূর্ণ বন্ধ (Block) করে স্ক্রিপ্ট ডাউনলোড ও রান করে।\n- **`<script defer>`**: HTML পার্সিংয়ের সমান্তরালে ব্যাকগ্রাউন্ডে স্ক্রিপ্ট ডাউনলোড করে এবং HTML পার্সিং শেষ হলে ডকুমেন্টে যেভাবে লেখা আছে সেই ক্রমানুসারে (in order) রান করে। আধুনিক ওয়েব অ্যাপ্লিকেশনে এটিই সেরা।\n- **`<script async>`**: ব্যাকগ্রাউন্ডে ডাউনলোড হয় কিন্তু ডাউনলোড শেষ হওয়ামাত্রই HTML পার্সিং থামিয়ে রান করে ফেলে (কোনো নির্দিষ্ট অর্ডার মানে না)। অ্যানালিটিক্স বা ট্র্যাকিং স্ক্রিপ্টে এটি উপযুক্ত।",
    interviewAnswer:
      "The key difference between `DOMContentLoaded` and `window.onload` is the resource readiness. `DOMContentLoaded` fires as soon as the HTML DOM tree is constructed without waiting for images or stylesheets, making it the ideal event to initialize UI logic. `window.onload` waits for the entire page and all dependent external resources to finish loading. In script tags, `defer` downloads scripts in parallel and executes them in exact document order after DOM parsing, whereas `async` executes scripts immediately after download, regardless of document order.",
    detailedExplanation: {
      whatItIs:
        "ব্রাউজারের পেজ লাইফসাইকেল ইভেন্টস এবং নন-ব্লকিং স্ক্রিপ্ট লোডিং পলিসি।",
      whyItExists:
        "ব্রাউজারে স্ক্রিপ্ট এক্সিকিউশনের কারণে যেন ইউজার ইন্টারফেস আটকে না যায় (Render-blocking elimination) এবং দ্রুত ফার্স্ট কন্টেন্টফুল পেইন্ট (FCP) নিশ্চিত হয়।",
      howItWorks:
        "ব্রাউজারের HTML পার্সার `defer` পেলে মেইন থ্রেড ব্লক না করে ডাউনলোড শুরু করে এবং `DOMContentLoaded`-এর ঠিক আগে ক্রমানুসারে এক্সিকিউট করে।",
      whenToUse:
        "অ্যাপ্লিকেশন কোড ও ডিপেন্ডেন্সির জন্য `defer` ব্যবহার করুন। ইন্ডিপেন্ডেন্ট থার্ড-পার্টি স্ক্রিপ্ট (Google Analytics, AdSense)-এর জন্য `async` ব্যবহার করুন।",
      keyPoints: [
        "`DOMContentLoaded`: DOM রেডি (Fastest UI interactive event)।",
        "`window.onload`: DOM + Images + Stylesheets সম্পূর্ণ ফিনিশড।",
        "`defer`: ব্যাকগ্রাউন্ড ডাউনলোড -> অর্ডার বজায় রেখে DOM শেষে রান।",
        "`async`: ব্যাকগ্রাউন্ড ডাউনলোড -> যে আগে নামে সে আগে রান করে।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. DOMContentLoaded (HTML DOM ট্রি রেডি)
document.addEventListener("DOMContentLoaded", () => {
  console.log("1. DOM is fully built! Safe to querySelector.");
  const btn = document.getElementById("submit-btn");
});

// ২. window.onload (ছবি ও সব রিসোর্স রেডি)
window.addEventListener("load", () => {
  console.log("2. Entire page with all heavy images & stylesheets loaded!");
});

// HTML স্ক্রিপ্ট লোডিং তুলনা:
// <script src="analytics.js" async></script>   -> কোনো অর্ডারের নিশ্চয়তা নেই, নামলেই রান
// <script src="app.js" defer></script>         -> DOM পার্সিং শেষে অর্ডারে রান হবে`,
      explanationSteps: [
        {
          step: 1,
          title: "DOMContentLoaded listener",
          description: "ছবি ডাউনলোড হওয়ার আগেই ইউজার ইন্টারঅ্যাকশনের জন্য প্রস্তুত হয়।",
        },
        {
          step: 2,
          title: "window.onload listener",
          description: "সব নেটওয়ার্ক এসেট কমপ্লিট হওয়ার পর ট্রিগার হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Optimizing Core Web Vitals (FCP / LCP)",
        description: "রেন্ডার ব্লকিং স্ক্রিপ্ট দূর করতে সমস্ত বান্ডেল স্ক্রিপ্টে `defer` অ্যাট্রিবিউট নিশ্চিত করা।",
      },
      {
        title: "Third-party Tag Managers",
        description: "Google Tag Manager স্ক্রিপ্ট `async` লোড করা যাতে মূল সাইটের রেন্ডারিংয়ে কোনো বাধা না আসে।",
      },
    ],
    interviewTips: {
      tip: "একটি ড্রয়িং বা ডায়াগ্রাম মনের মধ্যে রেখে বলুন: '`defer` preserves execution order and waits for DOM, while `async` executes whenever ready, disregarding order.'",
      deliveryStrategy: "আধুনিক ফ্রেমওয়ার্কগুলো (যেমন Next.js) কেন স্ক্রিপ্টে ডিফল্টভাবে `defer` ব্যবহার করে তা হাইলাইট করুন।",
      avoidSaying: [
        {
          wrong: "দুটোই স্ক্রিপ্ট ফাস্ট করে একভাবেই।",
          right: "defer অর্ডার ঠিক রেখে DOM শেষে এক্সিকিউট করে, আর async অর্ডারের তোয়াক্কা না করে ডাউনলোড হওয়ামাত্রই পার্সিং ব্লক করে রান করে।",
        },
      ],
    },
    quickRevision: [
      "`DOMContentLoaded`: DOM তৈরি হলেই ফায়ার হয় (ইমেজ লাগে না)।",
      "`window.onload`: সম্পূর্ণ পেজ + সব ছবি লোড হলে ফায়ার হয়।",
      "`defer`: সমান্তরালে ডাউনলোড -> ক্রমানুসারে DOM শেষে রান।",
      "`async`: সমান্তরালে ডাউনলোড -> নামামাত্র সাথে সাথে রান।",
    ],
    followUpQuestions: [
      {
        question: "যদি কোনো স্ক্রিপ্টে defer এবং async দুটোই দেওয়া থাকে, তখন কী ঘটবে?",
        shortHint: "মডার্ন ব্রাউজারে async অগ্রাধিকার পাবে, তবে async সাপোর্ট না করলে defer ফলব্যাক হবে।",
      },
    ],
    tags: ["Browser", "Lifecycle", "DOM", "async", "defer", "Performance"],
  },
  {
    id: "event-bubbling-capturing-propagation",
    slug: "event-bubbling-capturing-propagation",
    question: "What is Event Flow, Event Bubbling, and Event Capturing in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "DOM-এ কোনো ইভেন্ট ঘটলে তা ৩টি ধাপে প্রবাহিত হয় (Event Flow): ১. **Capturing Phase** (Window থেকে নিচের দিকে টার্গেট এলিমেন্টে নামে), ২. **Target Phase** (টার্গেটে পৌঁছায়), এবং ৩. **Bubbling Phase** (টার্গেট থেকে উপরের দিকে বাবল হয়ে উইন্ডো পর্যন্ত উঠে যায়)। ডিফল্টভাবে ইভেন্ট লিসেনারগুলো Bubbling ফেজে কাজ করে। `event.stopPropagation()` দিয়ে এই প্রবাহ থামানো যায়।",
    easyExplanation:
      "ব্রাউজারে যখন আপনি কোনো বাটনে ক্লিক করেন, তখন ইভেন্ট কীভাবে চলাচল করে:\n\n১. **ইভেন্ট ফ্লো (Event Flow-এর ৩টি ধাপ)**:\n- **ক্যাপচারিং ফেজ (Capturing / Trickling)**: ইভেন্টটি সবচেয়ে উপরের প্যারেন্ট (`Window` -> `Document` -> `Body`) থেকে নিচে নামতে নামতে নির্দিষ্ট টার্গেটে আসে।\n- **টার্গেট ফেজ (Target)**: মূল যে উপাদানে ক্লিক করা হয়েছে (`<button>`) সেখানে ইভেন্ট পৌঁছায়।\n- **বাবলিং ফেজ (Bubbling)**: টার্গেট থেকে পানির বুদবুদের মতো উপরের প্যারেন্টদের দিকে উঠতে থাকে (`Button` -> `Div` -> `Body` -> `Window`)।\n\n২. **গুরুত্বপূর্ণ মেথডসমূহ**:\n- `event.stopPropagation()`: ইভেন্টটিকে উপরে বাবল হওয়া বা নিচে ক্যাপচার হওয়া থেকে থামিয়ে দেয়।\n- `event.preventDefault()`: ব্রাউজারের ডিফল্ট আচরণ (যেমন ফর্ম সাবমিট হলে পেজ রিলোড হওয়া বা লিংকে ক্লিক করলে অন্য পেজে যাওয়া) বন্ধ করে।",
    interviewAnswer:
      "The DOM Event Flow consists of three distinct phases: **Capturing Phase** (event travels from `window` down to the target element), **Target Phase** (event reaches the target), and **Bubbling Phase** (event bubbles up from the target back to the `window`). By default, `addEventListener` listens in the Bubbling phase unless `{ capture: true }` is passed. We use `e.stopPropagation()` to halt event transmission up the DOM tree and `e.preventDefault()` to stop default browser actions.",
    detailedExplanation: {
      whatItIs:
        "W3C স্ট্যান্ডার্ড অনুযায়ী ব্রাউজার DOM ট্রির মধ্যে ইভেন্ট ছড়ানোর দ্বিমুখী আর্কিটেকচারাল মেকানিজম।",
      whyItExists:
        "নেস্টেড UI কম্পোনেন্টে ইভেন্ট ডেলিগেশন এবং হায়ারারকিক্যাল ইভেন্ট হ্যান্ডলিং সহজ করার জন্য।",
      howItWorks:
        "ব্রাউজার ইভেন্ট ডেসপ্যাচ করার সময় রুট থেকে শুরু করে ক্যাপচার পাথ তৈরি করে, টার্গেটে হ্যান্ডলার রান করে এবং রিভার্স পাথে বাবল ফেজ এক্সিকিউট করে।",
      whenToUse:
        "ইভেন্ট ডেলিগেশনে (যেমন টেবিলের ১০০টি সারির জন্য প্যারেন্টে ১টি লিসেনার), ড্রপডাউন মেনু বাইরে ক্লিকে ক্লোজ করতে এবং গ্লোবাল অ্যানালিটিক্স ক্লিকের জন্য।",
      keyPoints: [
        "৩টি ফেজ: ১. Capturing (Downwards), ২. Target, ৩. Bubbling (Upwards)।",
        "ডিফল্ট লিসেনার বাবলিং ফেজে রান করে (`capture: false`)।",
        "`stopPropagation()` বাবলিং থামায়, `preventDefault()` ব্রাউজারের ডিফল্ট অ্যাকশন থামায়।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `const parent = document.getElementById("parent-div");
const button = document.getElementById("child-btn");

// ১. বাবলিং লিসেনার (ডিফল্ট)
parent.addEventListener("click", () => {
  console.log("Parent DIV clicked (Bubbling Phase)");
});

// ২. চাইল্ড বাটন ক্লিক হ্যান্ডলার
button.addEventListener("click", (event) => {
  console.log("Child Button clicked!");
  
  // বাবলিং থামাতে চাইলে:
  // event.stopPropagation();
});

// ৩. ক্যাপচারিং ফেজে লিসেন করার উপায়:
parent.addEventListener("click", () => {
  console.log("Parent DIV clicked in (Capturing Phase)");
}, { capture: true });`,
      explanationSteps: [
        {
          step: 1,
          title: "Capturing First",
          description: "ক্লিক করার সাথে সাথে আগে ক্যাপচারিং লিসেনার রান করবে।",
        },
        {
          step: 2,
          title: "Target Execution",
          description: "চাইল্ড বাটনের ক্লিক হ্যান্ডলার রান করবে।",
        },
        {
          step: 3,
          title: "Bubbling Phase",
          description: "ইভেন্ট উপরে উঠে প্যারেন্টের বাবলিং হ্যান্ডলার রান করবে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Modal / Dropdown Outside Click Detection",
        description: "মডালের ভেতরের ক্লিকে `e.stopPropagation()` দিয়ে বাবলিং থামানো, যাতে বাইরে উইন্ডো লিসেনারে ক্লিক ডিটেক্ট করে মডাল বন্ধ করা যায়।",
      },
      {
        title: "Event Delegation in Dynamic Lists",
        description: "বাবলিংয়ের সুবিধা নিয়ে প্যারেন্ট `<ul>` এ একটিমাত্র ইভেন্ট লিসেনার দিয়ে নতুন যুক্ত হওয়া সব `<li>` এর ক্লিক হ্যান্ডেল করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Event Delegation is the direct practical superpower gained from Event Bubbling.'",
      deliveryStrategy: "`stopPropagation` বনাম `preventDefault` এর পার্থক্য সবসময় পরিষ্কারভাবে আলাদা করে বলুন।",
      avoidSaying: [
        {
          wrong: "stopPropagation দিলে ব্রাউজারের ডিফল্ট অ্যাকশনও বন্ধ হয়ে যায়।",
          right: "stopPropagation শুধুমাত্র বাবলিং/ক্যাপচারিং থামায়; ডিফল্ট অ্যাকশন থামাতে preventDefault() কল করতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Event Flow: Capturing (Top->Down) -> Target -> Bubbling (Bottom->Up)।",
      "`addEventListener` ডিফল্টভাবে বাবলিং ফেজে থাকে।",
      "`stopPropagation()`: প্যারেন্টে ছড়ানো থামায়।",
      "`preventDefault()`: পেজ রিলোড/লিংক ডিফল্ট আচরণ থামায়।",
    ],
    followUpQuestions: [
      {
        question: "Event Delegation কী এবং এটি কেন মেমরি পারফরম্যান্স বাড়ায়?",
        targetId: "event-delegation-in-javascript",
        shortHint: "প্রতিটি চাইল্ডে লিসেনার না বসিয়ে প্যারেন্টে ১টি লিসেনার বসানো হয়।",
      },
    ],
    tags: ["DOM", "Events", "Event Bubbling", "Event Capturing", "Event Delegation"],
  },
  {
    id: "abortcontroller-canceling-fetch-requests",
    slug: "abortcontroller-canceling-fetch-requests",
    question: "What is the AbortController API and how is it used to cancel fetch requests in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer:
      "`AbortController` হলো আধুনিক জাভাস্ক্রিপ্টের একটি বিল্ট-ইন ব্রাউজার API যার মাধ্যমে চলমান অ্যাসিনক্রোনাস কাজ (যেমন `fetch` রিকোয়েস্ট বা DOM ইভেন্ট লিসেনার) মাঝপথে বন্ধ বা ক্যানসেল করা যায়। এর `signal` প্রপার্টি `fetch` অপশনে পাস করা হয় এবং `controller.abort()` কল করলে রিকোয়েস্ট বাতিল হয়ে যায়।",
    easyExplanation:
      "আগে জাভাস্ক্রিপ্টে একবার `fetch()` কল করলে তা সার্ভার রেসপন্স না দেওয়া পর্যন্ত থামানোর কোনো উপায় ছিল না।\n\n**কেন AbortController দরকার?**\n১. **অটো-কমপ্লিট সার্চ (Typeahead/Search input)**: ব্যবহারকারী দ্রুত টাইপ করার সময় আগের অপ্রয়োজনীয় সার্চ রিকোয়েস্ট ক্যানসেল করে শুধু শেষ রিকোয়েস্টের ফলাফল দেখানো (Race Condition রোধ করা)।\n২. **React Component Unmount**: কোনো পেজ বা কম্পোনেন্ট আনমাউন্ট হয়ে গেলে যাতে ব্যাকগ্রাউন্ডের ফেচ কল মেমরি লিক না করে, তাই `useEffect` এর ক্লিনআপে রিকোয়েস্ট ক্যানসেল করে দেওয়া।\n\n**কীভাবে কাজ করে?**\n- `const controller = new AbortController();` তৈরি করি।\n- ফেচ কলে সিগন্যাল পাস করি: `fetch(url, { signal: controller.signal })`।\n- প্রয়োজন হলে `controller.abort()` কল করি, ফলে রিকোয়েস্টটি একটি `AbortError` দিয়ে সাথে সাথে বাতিল হয়ে যায়।",
    interviewAnswer:
      "`AbortController` is a standard browser API designed to abort one or more asynchronous DOM requests on demand. It exposes an `AbortSignal` object via `controller.signal`, which is passed to the `fetch()` options. When `controller.abort()` is called, the network request is immediately cancelled, and the promise rejects with an `AbortError`. In React, it is the industry standard pattern inside `useEffect` cleanup functions to eliminate race conditions and avoid updating state on unmounted components.",
    detailedExplanation: {
      whatItIs:
        "ওয়েব স্ট্যান্ডার্ড কন্ট্রোলার অবজেক্ট যা অ্যাসিনক্রোনাস অপারেশনগুলোর লাইফসাইকেল ক্যানসেল করার কন্ট্রোল দেয়।",
      whyItExists:
        "নেটওয়ার্ক ব্যান্ডউইথ অপচয় রোধ করতে, রেস কন্ডিশন (Race Condition) বন্ধ করতে এবং আনমাউন্টেড স্টেটে মেমরি ম্যানেজমেন্ট নিশ্চিত করতে।",
      howItWorks:
        "ব্রাউজারের নেটওয়ার্ক লেয়ার `signal`-এর `abort` ইভেন্ট লিসেন করে এবং সিগন্যাল ট্রিগার হওয়ামাত্র TCP সকেট বা নেটওয়ার্ক পাইপলাইন ড্রপ করে।",
      whenToUse:
        "লাইভ সার্চ ইনপুট, ফাইল আপলোড/ডাউনলোড ক্যানসেলেশন বাটন এবং React `useEffect` ক্লিনআপে।",
      keyPoints: [
        "`const controller = new AbortController();`",
        "`fetch(url, { signal: controller.signal })`",
        "`controller.abort()` কল করলে প্রমিজ রিজেক্ট হয়ে `name === 'AbortError'` তৈরি হয়।",
        "একই সিগন্যাল দিয়ে একসাথে একাধিক ফেচ রিকোয়েস্ট ক্যানসেল করা সম্ভব।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সাধারণ Fetch ক্যানসেলেশন
const controller = new AbortController();
const { signal } = controller;

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch request was successfully aborted!");
    } else {
      console.error("Other network error:", error);
    }
  }
}

fetchUserData();

// ১ সেকেন্ডের মধ্যে রেসপন্স না আসলে রিকোয়েস্ট ক্যানসেল করুন
setTimeout(() => {
  controller.abort();
}, 1000);

// ২. React useEffect Cleanup Pattern
/*
useEffect(() => {
  const controller = new AbortController();
  
  fetch('/api/search?q=' + query, { signal: controller.signal })
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => {
      if (err.name !== 'AbortError') setError(err);
    });

  return () => controller.abort(); // Unmount বা Query বদলালে ক্যানসেল
}, [query]);
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "Signal Attachment",
          description: "fetch অপশনে controller.signal পাস করা হয়েছে।",
        },
        {
          step: 2,
          title: "Abort Call",
          description: "controller.abort() কল হওয়ামাত্র নেটওয়ার্ক রিকোয়েস্ট ড্রপ হয়েছে।",
        },
        {
          step: 3,
          title: "AbortError Handling",
          description: "catch ব্লকে error.name === 'AbortError' চেক করে স্বাভাবিক ক্যানসেলেশন হ্যান্ডেল করা হয়েছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Search Autocomplete Race Conditions",
        description: "ইউজার যখন 'Rea' থেকে 'React' লিখছে, তখন 'Rea'-এর বিলম্বিত রেসপন্স যেন 'React'-এর রেজাল্ট ওভাররাইট না করে সেজন্য আগের কল ড্রপ করা।",
      },
      {
        title: "Cancel Large File Upload",
        description: "ইউজার ইউজার-ইন্টারফেসে 'Cancel Upload' বাটনে চাপ দিলে ব্যাকগ্রাউন্ডের মাল্টিপার্ট ফেচ সাথে সাথে বন্ধ করা।",
      },
    ],
    interviewTips: {
      tip: "React ইন্টারভিউতে `useEffect`-এ ফেচ করার প্রশ্ন আসলে সবসময় `AbortController` ক্লিনআপ প্যাটার্ন লিখলে সিনিয়র লেভেলের ইম্প্রেশন তৈরি হয়।",
      deliveryStrategy: "`AbortError` চেক না করলে কনসোলে আনহ্যান্ডেলড এরর লগ হতে পারে—এই সতর্কতাটি উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "ফেচ ক্যানসেল করার কোনো উপায় জাভাস্ক্রিপ্টে নেই।",
          right: "আধুনিক ওয়েব স্ট্যান্ডার্ডে AbortController API ব্যবহার করে সহজে যেকোনো ফেচ রিকোয়েস্ট ক্যানসেল করা যায়।",
        },
      ],
    },
    quickRevision: [
      "`new AbortController()` -> `signal` -> `fetch(url, { signal })`।",
      "`controller.abort()` রিকোয়েস্ট বাতিল করে।",
      "রিজেকশনে `error.name === 'AbortError'` পাওয়া যায়।",
      "React `useEffect` ক্লিনআপ ও লাইভ সার্চে অপরিহার্য।",
    ],
    followUpQuestions: [
      {
        question: "AbortController কি শুধু fetch-এ কাজ করে নাকি ইভেন্ট লিসেনারেও ব্যবহার করা যায়?",
        shortHint: "মডার্ন ব্রাউজারে `addEventListener(type, handler, { signal })` দিয়ে এক ক্লিকে একাধিক ইভেন্ট লিসেনারও রিমুভ করা যায়।",
      },
    ],
    tags: ["AbortController", "Fetch", "Async", "Network", "React Cleanup"],
  },
  {
    id: "intersection-observer-api-explained",
    slug: "intersection-observer-api-explained",
    question: "How does the Intersection Observer API work and why is it better than scroll events?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer:
      "**Intersection Observer API** হলো ব্রাউজারের একটি অত্যন্ত পারফরমেট অ্যাসিনক্রোনাস API, যা কোনো টার্গেট DOM এলিমেন্ট ভিউপোর্টে (বা প্যারেন্ট কন্টেইনারে) প্রবেশ বা প্রস্থান করার মুহূর্ত পর্যবেক্ষণ করে। ট্র্যাডিশনাল `window.onscroll` ইভেন্টের চেয়ে এটি বহুগুণ সেরা কারণ এটি মেইন থ্রেডকে ব্লক করে না এবং অতিরিক্ত রিফ্লো/রিপেইন্ট তৈরি করে না।",
    easyExplanation:
      "ওয়েবসাইটে স্ক্রল করার সময় বিভিন্ন কাজ করতে হয়, যেমন:\n- ছবি স্ক্রিনে আসার পর লোড করা (Image Lazy Loading)।\n- স্ক্রিন নিচে নামলে আরও পোস্ট লোড করা (Infinite Scroll)।\n- স্ক্রল করার সাথে সাথে অ্যানিমেশন চালু করা।\n\n**আগের সমস্যা (`scroll` ইভেন্ট)**:\n- ইউজার স্ক্রল করলেই প্রতি সেকেন্ডে শত শত বার স্ক্রল ইভেন্ট ফায়ার হতো।\n- এলিমেন্টের অবস্থান মাপতে `getBoundingClientRect()` কল করতে হতো, যা ব্রাউজারকে বারবার Layout Reflow করতে বাধ্য করে সাইটকে ল্যাগি বা স্লো করতো।\n\n**Intersection Observer এর সমাধান**:\n- এটি ব্রাউজারের নিজস্ব ব্যাকগ্রাউন্ড থ্রেডে অপ্টিমাইজডভাবে ট্র্যাক করে।\n- এলিমেন্ট যখনই স্ক্রিনে আসে (নির্দিষ্ট থ্রেশহোল্ড যেমন ১০% বা ৫০% দৃশ্যমান হলে), তখনই শুধুমাত্র একবার এর অ্যাসিনক্রোনাস কলব্যাক রান করে।",
    interviewAnswer:
      "The **Intersection Observer API** provides an asynchronous, performant way to observe when a target element intersects with an ancestor element or the top-level viewport. Unlike legacy scroll event listeners that constantly poll `getBoundingClientRect()` on the main UI thread—causing layout thrashing and severe scroll stutter—Intersection Observer operates off the main thread. It delivers high-efficiency Lazy Loading, Infinite Scrolling, and Scroll Animations without impacting Frame Rate (60fps).",
    detailedExplanation: {
      whatItIs:
        "ব্রাউজারের অ্যাসিনক্রোনাস ভিজিবিলিটি অবজারভেশন API।",
      whyItExists:
        "স্ক্রল জ্যাংক (Scroll jank), অতিরিক্ত CPU ইউজেস এবং লেআউট থ্রাশিং প্রতিরোধ করে স্মুথ স্ক্রলিং পারফরম্যান্স নিশ্চিত করতে।",
      howItWorks:
        "ব্রাউজারের কম্পোজিটর ও রেন্ডারিং ইঞ্জিন ইন্টারনাল বাউন্ডিং বক্স ইন্টারসেকশন চেক করে এবং শুধুমাত্র পরিবর্তনের সময় কলব্যাক কিউতে নোটিফিকেশন পাঠায়।",
      whenToUse:
        "ইমেজ/ভিডিও লেজি লোডিং, সোশ্যাল মিডিয়া ইনফিনিট স্ক্রলিং, বিজ্ঞাপন ভিউবিলিটি ট্র্যাকিং এবং স্ক্রল-ট্রিগারড অ্যানিমেশনে।",
      keyPoints: [
        "অ্যাসিনক্রোনাস এবং মেইন থ্রেড নন-ব্লকিং।",
        "`threshold: [0, 0.5, 1]` দিয়ে দৃশ্যমানতার শতকরা পরিমাণ নির্ধারণ করা যায়।",
        "`rootMargin` দিয়ে এলিমেন্ট স্ক্রিনে আসার একটু আগেই প্রি-লোড করানো যায়।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Observer কনফিগারেশন তৈরি
const options = {
  root: null, // null মানে ডিফল্ট ব্রাউজার Viewport
  rootMargin: '100px', // স্ক্রিনে আসার ১০০ পিক্সেল আগেই কাজ শুরু করবে
  threshold: 0.1 // এলিমেন্টের ১০% দৃশ্যমান হলেই ট্রিগার হবে
};

// ২. Observer ইনিশিয়ালাইজেশন
const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // আসল ছবি লোড করা
      console.log('Image loaded lazily:', img.src);
      
      // একবার লোড হয়ে গেলে আর পর্যবেক্ষণ করার দরকার নেই
      observerInstance.unobserve(img);
    }
  });
}, options);

// ৩. DOM এলিমেন্টগুলোকে অবজার্ভ করা
const lazyImages = document.querySelectorAll('img.lazy');
lazyImages.forEach(img => observer.observe(img));`,
      explanationSteps: [
        {
          step: 1,
          title: "Observer Configuration",
          description: "rootMargin এবং threshold দিয়ে কখন কলব্যাক ফায়ার হবে তা ঠিক করা হয়েছে।",
        },
        {
          step: 2,
          title: "Intersection Callback",
          description: "entry.isIntersecting সত্য হলে ছবি লোড করে unobserve করা হয়েছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Infinite Feed (Facebook/Twitter/LinkedIn Style)",
        description: "ফিডের নিচে থাকা একটি খালি 'Sentinel DIV' স্ক্রিনে প্রবেশ করলেই পরবর্তী পেজের ডেটা ফেচ করা।",
      },
      {
        title: "Ad Impressions Analytics",
        description: "কোনো ব্যানার বিজ্ঞাপন ইউজারের চোখের সামনে অন্তত ৫০% সময় নিয়ে ১ সেকেন্ড ছিল কি না তা নিখুঁতভাবে ট্র্যাক করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Intersection Observer avoids layout thrashing by eliminating repetitive getBoundingClientRect() calls inside scroll handlers.'",
      deliveryStrategy: "`unobserve()` মেথড ব্যবহার করে মেমরি অপ্টিমাইজেশন উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "স্ক্রল হ্যান্ডলার আর ইন্টারসেকশন অবজারভার একই পারফরম্যান্স দেয়।",
          right: "স্ক্রল হ্যান্ডলার মেইন থ্রেডে সিনক্রোনাসলি রান করে ল্যাগ তৈরি করে, যেখানে Intersection Observer অ্যাসিনক্রোনাস ও অপ্টিমাইজড।",
        },
      ],
    },
    quickRevision: [
      "Intersection Observer: ভিউপোর্টে এলিমেন্ট প্রবেশ/প্রস্থান অ্যাসিনক্রোনাসলি মাপে।",
      "উপকারিতা: কোনো লেআউট থ্রাশিং বা স্ক্রল ল্যাগ নেই (60 FPS)।",
      "ব্যবহার: Lazy Loading, Infinite Scroll, Viewability Analytics।",
    ],
    followUpQuestions: [
      {
        question: "MutationObserver এবং ResizeObserver এর কাজ কী?",
        shortHint: "MutationObserver DOM পরিবর্তন ট্র্যাক করে, আর ResizeObserver কোনো এলিমেন্টের সাইজ পরিবর্তন পর্যবেক্ষণ করে।",
      },
    ],
    tags: ["IntersectionObserver", "Performance", "Lazy Loading", "DOM APIs"],
  },
  {
    id: "generator-functions-and-iterators-javascript",
    slug: "generator-functions-and-iterators-javascript",
    question: "What are Generator functions (`function*`) and Iterators in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer:
      "**Generator Function (`function*`)** হলো একটি বিশেষ ফাংশন যা এক্সিকিউশন চলাকালীন মাঝপথে থামানো (Pause) এবং পরবর্তীতে আবার চালানো (Resume) যায়। এটি `yield` কি-ওয়ার্ড ব্যবহার করে একে একে ভ্যালু প্রদান করে এবং একটি **Iterator Object** রিটার্ন করে, যা `.next()` মেথড কল করলে `{ value, done }` অবজেক্ট দেয়।",
    easyExplanation:
      "সাধারণ ফাংশন রান হওয়া শুরু করলে শেষ পর্যন্ত চলে রিটার্ন করে বের হয়ে যায়। কিন্তু জেনারেটর ফাংশন মাঝপথে পজ করা যায়:\n\n১. **`function*` ডিক্লারেশন**: নামের আগে একটি স্টার (`*`) থাকে।\n২. **`yield` কি-ওয়ার্ড**: যেখানে `yield` থাকে, ফাংশনটি ঠিক সেখানে তার স্টেট মনে রেখে থেমে যায় এবং ওই ভ্যালুটি বাইরে পাঠায়।\n৩. **`.next()` মেথড**: বাইরে থেকে যখনই `.next()` কল করা হয়, ফাংশনটি তার আগের অবস্থান থেকে আবার চলা শুরু করে পরবর্তী `yield`-এ গিয়ে থামে।\n৪. **Iterator Protocol**: জেনারেটর একটি ইটারেটর রিটার্ন করে যার ফলে এটি সরাসরি `for...of` লুপ এবং Spread অপারেটরে কাজ করে।",
    interviewAnswer:
      "A **Generator Function** is a special type of function defined with `function*` that can pause its execution using the `yield` keyword and resume later when its iterator's `.next()` method is invoked. It implements both the **Iterable** and **Iterator protocols**, returning `{ value: any, done: boolean }` on each iteration. Generators allow lazy evaluation, infinite sequences without memory overflows, and serve as the foundational building block for Redux-Saga and custom async state machines.",
    detailedExplanation: {
      whatItIs:
        "ফাংশন এক্সিকিউশন স্টেট কন্ট্রোল করার এবং কাস্টম সিকোয়েন্স জেনারেট করার ES6 মেকানিজম।",
      whyItExists:
        "লেজি ইভ্যালুয়েশন (Lazy evaluation), ইনফিনিট স্ট্রিম হ্যান্ডলিং এবং নন-ব্লকিং সিকোয়েনশিয়াল ডেটা প্রসেসিংয়ের জন্য।",
      howItWorks:
        "ইঞ্জিন জেনারেটর কল করার সময় সাথে সাথে কোড রান না করে একটি Generator Object তৈরি করে। প্রতি `.next()` কলে ইন্টারনাল এক্সিকিউশন কনটেক্সট রিস্টোর করে পরবর্তী `yield` পর্যন্ত রান করে।",
      whenToUse:
        "বিশাল ডেটাসেট স্ট্রিম করতে, ইউনিক আইডি জেনারেটরে, এবং Redux Saga-এর মতো ইফেক্ট হ্যান্ডলারে।",
      keyPoints: [
        "সিনট্যাক্স: `function* myGen() { yield 1; }`",
        "প্রতিটি `yield` ফাংশনকে পজ (Pause) করে।",
        "রিটার্ন ফরম্যাট: `{ value: 1, done: false }`।",
        "`for...of` লুপ স্বয়ংক্রিয়ভাবে `done: true` না হওয়া পর্যন্ত রান করে।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সাধারণ জেনারেটর ফাংশন
function* idGenerator() {
  let id = 1;
  while (true) { // ইনফিনিট লুপ হলেও মেমরি ব্লক করে না (Lazy!)
    yield \`USER_\${id++}\`;
  }
}

const gen = idGenerator();

console.log(gen.next().value); // "USER_1"
console.log(gen.next().value); // "USER_2"
console.log(gen.next().value); // "USER_3"

// ২. নির্দিষ্ট সিকোয়েন্স জেনারেটর
function* numberSequence() {
  yield 10;
  yield 20;
  yield 30;
}

// for...of দিয়ে সরাসরি লুপ চালানো যায়
for (const num of numberSequence()) {
  console.log("Number:", num);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Generator instantiation",
          description: "idGenerator() কল করলে ফাংশন রান না করে একটি Iterator জেনারেটর রিটার্ন করে।",
        },
        {
          step: 2,
          title: "Lazy yield",
          description: "gen.next() কল করার পর লুপের ভেতর গিয়ে yield করে থেমে যায়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Redux Saga Asynchronous Workflows",
        description: "Redux-Saga-তে অ্যাসিনক্রোনাস অ্যাকশন হ্যান্ডেল করতে `yield takeEvery`, `yield call`, `yield put` জেনারেটর ব্যবহৃত হয়।",
      },
      {
        title: "Paginating Massive Datasets Lazily",
        description: "১০ লাখ ডেটা একবারে মেমরিতে লোড না করে পেজ বাই পেজ প্রয়োজন অনুযায়ী অন-ডিমান্ড `yield` করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Generators enable Lazy Evaluation—they compute values only when requested, saving massive memory for large or infinite datasets.'",
      deliveryStrategy: "`yield*` (জেনারেটর ডেলিগেশন) এবং `return()` / `throw()` মেথড সম্পর্কেও জানা থাকলে উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "জেনারেটরে while(true) দিলে ব্রাউজার ক্র্যাশ করবে।",
          right: "যেহেতু yield এ ফাংশন পজ হয়ে থাকে, তাই while(true) থাকলেও মেমরি ক্র্যাশ করে না বরং নিখুঁত অন-ডিমান্ড ইনফিনিট স্ট্রিম তৈরি করে।",
        },
      ],
    },
    quickRevision: [
      "`function*` + `yield`: এক্সিকিউশন পজ ও রেজ্যুম করে।",
      "`.next()` দিলে `{ value: ..., done: ... }` রিটার্ন করে।",
      "লেজি ইভ্যালুয়েশন (Lazy Evaluation) ও ইনফিনিট সিকোয়েন্সে পারফেক্ট।",
      "Redux Saga আর্কিটেকচারের প্রধান ভিত্তি।",
    ],
    followUpQuestions: [
      {
        question: "Async Generator (`async function*`) কীভাবে কাজ করে এবং `for await...of` কী?",
        shortHint: "অ্যাসিনক্রোনাস স্ট্রিম থেকে ডেটা ইটারেট করতে `yield await Promise` ব্যবহার করা হয়।",
      },
    ],
    tags: ["Generators", "Iterators", "ES6", "Advanced JS", "Lazy Evaluation"],
  },
];
