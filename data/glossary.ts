export interface TechGlossaryTerm {
  term: string;
  aliases?: string[];
  banglaTitle: string;
  shortExplanation: string;
  exampleOrTip?: string;
  category?: string;
}

export const TECH_GLOSSARY: Record<string, TechGlossaryTerm> = {
  hoisting: {
    term: "Hoisting",
    aliases: ["hoisted"],
    banglaTitle: "হয়স্টিং (Hoisting)",
    shortExplanation:
      "জাভাস্ক্রিপ্ট কোড এক্সিকিউট করার আগে মেমরি অ্যালোকেশন ধাপে ভেরিয়েবল ও ফাংশন ডিক্লারেশনকে তার স্কোপের শীর্ষে উঠিয়ে নেওয়া।",
    exampleOrTip: "var আনডিফাইন্ড ভ্যালু পায়, কিন্তু let ও const টিডিজেড (TDZ)-এ থাকে।",
  },
  "temporal dead zone": {
    term: "Temporal Dead Zone (TDZ)",
    aliases: ["tdz"],
    banglaTitle: "টেম্পোরাল ডেড জোন (TDZ)",
    shortExplanation:
      "let এবং const ভেরিয়েবলের স্কোপের শুরু থেকে তাদের ইনিশিয়ালাইজেশন লাইন পর্যন্ত সময়কাল, যখন ওই ভেরিয়েবল অ্যাক্সেস করলে ReferenceError হয়।",
    exampleOrTip: "বাগ এড়াতে ভেরিয়েবল ডিক্লেয়ার করার আগে ব্যবহার নিষিদ্ধ করে।",
  },
  "execution context": {
    term: "Execution Context",
    aliases: ["execution contexts"],
    banglaTitle: "এক্সিকিউশন কনটেক্সট",
    shortExplanation:
      "জাভাস্ক্রিপ্ট কোড যে এনভায়রনমেন্টে রান ও ইভ্যালুয়েট হয়। এতে দুটি ধাপ থাকে: Memory Creation Phase এবং Code Execution Phase।",
    exampleOrTip: "গ্লোবাল কোডের জন্য Global Execution Context এবং প্রতি ফাংশন কলের জন্য Function Execution Context তৈরি হয়।",
  },
  "call stack": {
    term: "Call Stack",
    aliases: ["callstack"],
    banglaTitle: "কল স্ট্যাক (Call Stack)",
    shortExplanation:
      "একটি LIFO (Last In, First Out) ডেটা স্ট্রাকচার যা জাভাস্ক্রিপ্ট ইঞ্জিনে বর্তমানে কোন ফাংশন এক্সিকিউট হচ্ছে এবং এর পরের কাজ কী তা ট্র্যাক করে।",
    exampleOrTip: "স্ট্যাক ওভারফ্লো (Stack Overflow) হয় যখন অতিরিক্ত বা ইনফিনিট রিকার্সন ঘটে।",
  },
  "microtask queue": {
    term: "Microtask Queue",
    aliases: ["microtasks", "microtask"],
    banglaTitle: "মাইক্রোটাস্ক কিউ (Microtask Queue)",
    shortExplanation:
      "প্রমিজের কলব্যাক (`.then`, `.catch`, `await`) এবং `queueMicrotask` রাখার কিউ। ইভেন্ট লুপ সাধারণ ম্যাক্রোটাস্কের (যেমন setTimeout) চেয়ে একে সর্বোচ্চ অগ্রাধিকার দেয়।",
    exampleOrTip: "কল স্ট্যাক খালি হলেই পরবর্তী ম্যাক্রোটাস্কে যাওয়ার আগে সব মাইক্রোটাস্ক এক্সিকিউট হয়।",
  },
  "task queue": {
    term: "Task Queue / Callback Queue",
    aliases: ["callback queue", "macrotask queue", "macrotasks"],
    banglaTitle: "টাস্ক কিউ / ম্যাক্রোটাস্ক কিউ",
    shortExplanation:
      "`setTimeout`, `setInterval`, DOM Event ইত্যাদির কলব্যাকগুলো যে কিউতে জমা থাকে।",
    exampleOrTip: "কল স্ট্যাক এবং মাইক্রোটাস্ক কিউ সম্পূর্ণ খালি হলে তবেই এখান থেকে কলব্যাক রান হয়।",
  },
  "event loop": {
    term: "Event Loop",
    aliases: ["eventloop"],
    banglaTitle: "ইভেন্ট লুপ (Event Loop)",
    shortExplanation:
      "একটি নিরবচ্ছিন্ন মনিটরিং মেকানিজম যা কল স্ট্যাক এবং কিউগুলোকে পর্যবেক্ষণ করে। স্ট্যাক খালি হলে কিউ থেকে কাজ নিয়ে স্ট্যাকে পুশ করে।",
    exampleOrTip: "জাভাস্ক্রিপ্টকে সিঙ্গল-থ্রেডেড হওয়া সত্ত্বেও নন-ব্লকিং অ্যাসিনক্রোনাস কাজ করার ক্ষমতা দেয়।",
  },
  closure: {
    term: "Closure",
    aliases: ["closures"],
    banglaTitle: "ক্লোজার (Closure)",
    shortExplanation:
      "একটি ফাংশন এবং তার চারপাশের লেক্সিক্যাল এনভায়রনমেন্টের কম্বিনেশন। অর্থাৎ প্যারেন্ট ফাংশন রিটার্ন হয়ে যাওয়ার পরেও ইনার ফাংশন আউটার ভেরিয়েবলগুলোকে মনে রাখে।",
    exampleOrTip: "ডাটা প্রাইভেসি (Encapsulation), Memoization ও React Custom Hooks-এ ক্লোজার অপরিহার্য।",
  },
  "memory leak": {
    term: "Memory Leak",
    aliases: ["memory leaks"],
    banglaTitle: "মেমরি লিক (Memory Leak)",
    shortExplanation:
      "অ্যাপ্লিকেশনে অপ্রয়োজনীয় মেমরি বরাদ্দ থাকা যা আর কোনো কাজে লাগছে না কিন্তু গারবেজ কালেক্টর ক্লিন করতে পারছে না।",
    exampleOrTip: "সাধারণ কারণ: গ্লোবাল ভেরিয়েবল, অনিবন্ধিত ইভেন্ট লিসেনার, বা আন-ক্লিনড টাইমার।",
  },
  "garbage collection": {
    term: "Garbage Collection (GC)",
    aliases: ["garbage collector", "mark and sweep", "mark-and-sweep"],
    banglaTitle: "গারবেজ কালেকশন (Mark-and-Sweep)",
    shortExplanation:
      "জাভাস্ক্রিপ্ট ইঞ্জিনের স্বয়ংক্রিয় মেমরি ম্যানেজমেন্ট। যা রুট অবজেক্ট থেকে আনরিচেবল (Unreachable) মেমরি শনাক্ত করে ফ্রি করে দেয়।",
  },
  "lexical scope": {
    term: "Lexical Scope",
    aliases: ["lexical scoping", "lexical environment"],
    banglaTitle: "লেক্সিক্যাল স্কোপিং",
    shortExplanation:
      "কোডের মধ্যে ভেরিয়েবল বা ফাংশন ঠিক কোথায় ডিক্লেয়ার করা হয়েছে তার ওপর ভিত্তি করে স্কোপ নির্ধারিত হওয়া (Static Scope)।",
  },
  prototype: {
    term: "Prototype & Prototype Chaining",
    aliases: ["prototypes", "prototypal inheritance", "prototype chain"],
    banglaTitle: "প্রোটোটাইপ চেইনিং",
    shortExplanation:
      "জাভাস্ক্রিপ্টে অবজেক্টগুলোর মধ্যে প্রপার্টি ও মেথড শেয়ার করার মেকানিজম। অবজেক্টে প্রপার্টি না পেলে ইঞ্জিন তার `__proto__` ধরে উপরে খুঁজতে থাকে।",
  },
  "shallow copy": {
    term: "Shallow Copy",
    aliases: ["shallow clone"],
    banglaTitle: "শ্যালো কপি (Shallow Copy)",
    shortExplanation:
      "শুধুমাত্র প্রথম লেভেলের প্রপার্টি কপি করে। নেস্টেড অবজেক্টগুলোর মেমরি রেফারেন্স কপি হয়, ফলে নেস্টেড ভ্যালু পরিবর্তনে মূল অবজেক্টও বদলে যায়।",
    exampleOrTip: "উদাহরণ: `Object.assign({}, obj)` অথবা Spread `{ ...obj }`।",
  },
  "deep copy": {
    term: "Deep Copy",
    aliases: ["deep clone"],
    banglaTitle: "ডিপ কপি (Deep Copy)",
    shortExplanation:
      "নেস্টেড অবজেক্টসহ প্রতিটি লেভেলের ডাটা সম্পূর্ণ নতুন মেমরি লোকেশনে কপি করা, যাতে মূল অবজেক্ট সম্পূর্ণ অক্ষত থাকে।",
    exampleOrTip: "উপায়: `structuredClone(obj)` অথবা `lodash.cloneDeep`।",
  },
  currying: {
    term: "Currying",
    aliases: ["curried"],
    banglaTitle: "কারিং (Currying)",
    shortExplanation:
      "একাধিক আর্গুমেন্ট গ্রহণকারী ফাংশনকে এমন এক সিকোয়েন্সে রূপান্তর করা যেখানে প্রতিটি ফাংশন শুধুমাত্র একটি আর্গুমেন্ট নিয়ে পরবর্তী ফাংশন রিটার্ন করে।",
    exampleOrTip: "`f(a, b, c)` কে `f(a)(b)(c)` ফরম্যাটে পরিবর্তন করা।",
  },
  debounce: {
    term: "Debounce",
    aliases: ["debouncing", "debounced"],
    banglaTitle: "ডিবউন্স (Debounce)",
    shortExplanation:
      "বারবার ঘটা কোনো ইভেন্টের শেষ ঘটনার পর নির্দিষ্ট সময় বিরতি দিয়ে ফাংশনটিকে শুধুমাত্র একবার এক্সিকিউট করা।",
    exampleOrTip: "লাইভ সার্চ ইনপুট (Live Search) এবং উইন্ডো রিসাইজে অতিরিক্ত API কল থামাতে ব্যবহৃত হয়।",
  },
  throttle: {
    term: "Throttle",
    aliases: ["throttling", "throttled"],
    banglaTitle: "থ্রটল (Throttle)",
    shortExplanation:
      "একটি নির্দিষ্ট সময় পর পর নিশ্চিতভাবে মাত্র একবার ফাংশনটি রান করানো, যত ঘনঘনই ইভেন্ট ঘটুক না কেন।",
    exampleOrTip: "ইনফিনিট স্ক্রলিং (Infinite Scroll) ও গেম লুপ ইভেন্টে পারফরম্যান্স ধরে রাখতে ব্যবহৃত হয়।",
  },
  "pure function": {
    term: "Pure Function",
    aliases: ["pure functions"],
    banglaTitle: "পিওর ফাংশন (Pure Function)",
    shortExplanation:
      "একই ইনপুট দিলে সর্বদা একই আউটপুট দেয় এবং এর কোনো সাইড-ইফেক্ট (Side Effects) বা বাইরের স্টেট পরিবর্তন থাকে না।",
  },
  immutability: {
    term: "Immutability",
    aliases: ["immutable"],
    banglaTitle: "ইমিউটেবিলিটি (Immutability)",
    shortExplanation:
      "একবার ডেটা তৈরি হলে তা আর সরাসরি পরিবর্তন না করে, পরিবর্তনের জন্য নতুন কপি তৈরি করার নীতি।",
    exampleOrTip: "React State ও Redux আর্কিটেকচারের মূল ভিত্তি।",
  },
  "event delegation": {
    term: "Event Delegation",
    aliases: ["event bubbling"],
    banglaTitle: "ইভেন্ট ডেলিগেশন",
    shortExplanation:
      "প্রতিটি চাইল্ড এলিমেন্টে আলাদা লিসেনার না বসিয়ে, ইভেন্ট বাবলিং (Event Bubbling)-এর সুযোগ নিয়ে তাদের কমন প্যারেন্ট এলিমেন্টে একটিমাত্র লিসেনার বসানো।",
  },
  promise: {
    term: "Promise",
    aliases: ["promises", "async", "await"],
    banglaTitle: "প্রমিজ (Promise)",
    shortExplanation:
      "একটি অ্যাসিনক্রোনাস অপারেশনের চূড়ান্ত ফলাফল (Success বা Failure) নির্দেশক অবজেক্ট যার ৩টি স্টেট থাকে: Pending, Fulfilled, Rejected।",
  },
  "discriminated union": {
    term: "Discriminated Union",
    aliases: ["tagged union", "discriminated unions"],
    banglaTitle: "ডিসক্রিমিনেটেড ইউনিয়ন (Tagged Union)",
    shortExplanation:
      "TypeScript-এ এমন টাইপ প্যাটার্ন যেখানে একাধিক অবজেক্ট টাইপের মধ্যে একটি কমন লিটারেল প্রপার্টি (যেমন `kind` বা `type`) থাকে যা দেখে টাইপ ন্যারো করা যায়।",
  },
  "type inference": {
    term: "Type Inference",
    aliases: ["inferred"],
    banglaTitle: "টাইপ ইনফারেন্স (Type Inference)",
    shortExplanation:
      "TypeScript স্বয়ংক্রিয়ভাবে ভ্যালু এবং অ্যাসাইনমেন্ট দেখে ভেরিয়েবলের টাইপ নির্ধারণ করার ক্ষমতা।",
  },
  generics: {
    term: "Generics",
    aliases: ["generic"],
    banglaTitle: "জেনেরিক্স (Generics)",
    shortExplanation:
      "টাইপকে প্যারামিটার হিসেবে পাস করার ক্ষমতা, যার মাধ্যমে টাইপ সেফটি বজায় রেখে বিভিন্ন ডাটা টাইপের জন্য রিইউজেবল কোড লেখা যায়।",
  },
  zod: {
    term: "Zod Schema Validation",
    aliases: ["zod schema"],
    banglaTitle: "Zod ভ্যালিডেশন",
    shortExplanation:
      "TypeScript-প্রথম রানটাইম স্কিমা ডিক্লারেশন এবং ভ্যালিডেশন লাইব্রেরি, যা API রেসপন্সকে রানটাইমে ভ্যালিডেট করে টাইপ-সেফ করে।",
  },
  ssr: {
    term: "SSR (Server-Side Rendering)",
    aliases: ["server side rendering"],
    banglaTitle: "সার্ভার-সাইড রেন্ডারিং (SSR)",
    shortExplanation:
      "প্রতিটি ক্লায়েন্ট রিকোয়েস্টে সার্ভারে ডায়নামিকভাবে HTML তৈরি করে ব্রাউজারে পাঠানো।",
    exampleOrTip: "লাইভ বা পার্সোনালাইজড ডেটার জন্য উপযোগী।",
  },
  ssg: {
    term: "SSG (Static Site Generation)",
    aliases: ["static generation"],
    banglaTitle: "স্ট্যাটিক সাইট জেনারেশন (SSG)",
    shortExplanation:
      "বিল্ড টাইমে (Build Time) একবার সব HTML পেজ বানিয়ে রাখা, যা অত্যন্ত দ্রুত CDN থেকে সার্ভ হয়।",
  },
  isr: {
    term: "ISR (Incremental Static Regeneration)",
    aliases: ["incremental static regeneration"],
    banglaTitle: "ইনক্রিমেন্টাল স্ট্যাটিক রিজেনারেশন (ISR)",
    shortExplanation:
      "পুরো সাইট রি-বিল্ড না করে ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পর পর স্ট্যাটিক পেজ আপডেট করার Next.js টেকনোলজি।",
  },
  hydration: {
    term: "Hydration",
    aliases: ["hydrated", "rehydration"],
    banglaTitle: "হাইড্রেশন (Hydration)",
    shortExplanation:
      "সার্ভার থেকে পাঠানো স্ট্যাটিক HTML-এর সাথে ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট এবং ইভেন্ট লিসেনার যুক্ত করে পেজকে ইন্টারঅ্যাক্টিভ করা।",
  },
  "virtual dom": {
    term: "Virtual DOM",
    aliases: ["vdom"],
    banglaTitle: "ভার্চুয়াল ডম (Virtual DOM)",
    shortExplanation:
      "মেমরিতে থাকা রিয়েল ব্রাউজার DOM-এর একটি হালকা জাভাস্ক্রিপ্ট অবজেক্ট রিপ্রেজেন্টেশন, যার মাধ্যমে React ডিফারেন্স (Diffing) করে শুধুমাত্র প্রয়োজনীয় অংশ আপডেট করে।",
    category: "React Core",
  },
  reconciliation: {
    term: "Reconciliation",
    aliases: ["reconciler", "diffing algorithm", "diffing"],
    banglaTitle: "রিকনসিলিয়েশন (Reconciliation)",
    shortExplanation:
      "React-এর একটি অ্যালগরিদম যার মাধ্যমে পূর্ববর্তী Virtual DOM এবং নতুন Virtual DOM-এর তুলনা (Diffing) করে ঠিক কোন অংশগুলো রিয়েল ব্রাউজার DOM-এ আপডেট করতে হবে তা নিখুঁতভাবে নির্ধারণ করা হয়।",
    exampleOrTip: "React টাইপ কম্প্যারিজন এবং 'key' প্রপ ব্যবহার করে O(n) সময়ে অপ্টিমাইজড রিকনসিলিয়েশন করে।",
    category: "React Core",
  },
  fiber: {
    term: "React Fiber",
    aliases: ["react fiber", "fiber node", "fibers"],
    banglaTitle: "রিঅ্যাক্ট ফাইবার (React Fiber Engine)",
    shortExplanation:
      "React 16-এ ইন্ট্রোডিউস করা সম্পূর্ণ নতুন রিকনসিলিয়েশন আর্কিটেকচার। এটি রেন্ডারিং টাস্ককে ছোট ছোট ওয়ার্ক ইউনিটে ভাগ করে পজ (pause), রিজিউম (resume) বা বাতিল করার মাধ্যমে কনকারেন্ট (Concurrent) ও স্মুথ ৬fps ইউজার এক্সপেরিয়েন্স নিশ্চিত করে।",
    exampleOrTip: "ফাইবার নোডগুলো Singly-Linked List কাঠামোর মাধ্যমে চাইল্ড, সিবলিং ও রিটার্ন পয়েন্ট ট্র্যাক করে।",
    category: "React Internals",
  },
  "controlled component": {
    term: "Controlled Component",
    aliases: ["controlled components", "controlled input"],
    banglaTitle: "কন্ট্রোল্ড কম্পোনেন্ট",
    shortExplanation:
      "এমন ফর্ম এলিমেন্ট যার ইনপুট ভ্যালু সম্পূর্ণভাবে React State দ্বারা নিয়ন্ত্রিত হয় এবং যেকোনো পরিবর্তনের সাথে সাথে onChange হ্যান্ডলারের মাধ্যমে স্টেট আপডেট হয়।",
    exampleOrTip: "Single source of truth নিশ্চিত করে এবং ইনস্ট্যান্ট ইনপুট ভ্যালিডেশনের সুযোগ দেয়।",
    category: "React Forms",
  },
  "uncontrolled component": {
    term: "Uncontrolled Component",
    aliases: ["uncontrolled components", "uncontrolled form"],
    banglaTitle: "আনকন্ট্রোল্ড কম্পোনেন্ট",
    shortExplanation:
      "এমন ফর্ম এলিমেন্ট যার অভ্যন্তরীণ মান ব্রাউজার DOM নিজে হ্যান্ডেল করে। React এতে কোনো স্টেট মেইনটেইন করে না, বরং প্রয়োজনে `useRef` বা ফর্ম সাবমিট দিয়ে সরাসরি DOM থেকে মান নেওয়া হয়।",
    exampleOrTip: "ফাইল আপলোড `<input type='file' />` এবং হেভি পারফরম্যান্স ফর্মের জন্য উপযুক্ত।",
    category: "React Forms",
  },
  "dependency array": {
    term: "Dependency Array",
    aliases: ["deps array", "dependencies array"],
    banglaTitle: "ডিপেন্ডেন্সি অ্যারে (Dependency Array)",
    shortExplanation:
      "`useEffect`, `useMemo`, বা `useCallback`-এ পাস করা ভ্যালুর অ্যারে। রেন্ডারের সময় `Object.is()` দিয়ে পূর্ববর্তী ও বর্তমান ভ্যালুর তুলনা করে হুকটি পুনরায় এক্সিকিউট হবে কি না তা নির্ধারণ করে।",
    exampleOrTip: "অবজেক্ট বা ফাংশন সরাসরি ডিপেন্ডেন্সিতে দিলে রেফারেন্স ভিন্নতার কারণে ইনফিনিট লুপ হতে পারে।",
    category: "React Hooks",
  },
  "stale closure": {
    term: "Stale Closure",
    aliases: ["stale state", "stale closures"],
    banglaTitle: "স্টেল ক্লোজার (Stale Closure)",
    shortExplanation:
      "যখন একটি ফাংশন বা অ্যাসিঙ্ক কলব্যাক তার তৈরি হওয়ার সময়কার পুরোনো স্টেট/প্রপসের ভ্যালু মেমরিতে ধরে রাখে এবং পরিবর্তিত নতুন স্টেট দেখতে পায় না।",
    exampleOrTip: "সমাধান: `setCount(prev => prev + 1)` ফাংশনাল আপডেট বা রিফ (`useRef`) ব্যবহার করা।",
    category: "React Hooks",
  },
  "server component": {
    term: "Server Component (RSC)",
    aliases: ["server components", "rsc", "react server components"],
    banglaTitle: "সার্ভার কম্পোনেন্ট (RSC)",
    shortExplanation:
      "React ও Next.js App Router-এর এমন একটি কম্পোনেন্ট যা শুধুমাত্র সার্ভারেই এক্সিকিউট হয় এবং ক্লায়েন্ট ব্রাউজারে জিরো (0 KB) জাভাস্ক্রিপ্ট বান্ডেল পাঠায়। সরাসরি ডাটাবেস ও সিক্রেট অ্যাক্সেস করতে পারে।",
    exampleOrTip: "এতে useState, useEffect বা ব্রাউজার DOM ইভেন্ট হ্যান্ডলার ব্যবহার করা যায় না।",
    category: "Next.js",
  },
  "client component": {
    term: "Client Component",
    aliases: ["client components", "'use client'"],
    banglaTitle: "ক্লায়েন্ট কম্পোনেন্ট ('use client')",
    shortExplanation:
      "Next.js-এ ফাইলটির শীর্ষে `'use client'` লিখে সংজ্ঞায়িত করা কম্পোনেন্ট যা ব্রাউজারে হাইড্রেট হয় এবং ইন্টারঅ্যাক্টিভিটি (useState, onClick, DOM APIs) প্রদান করে।",
    exampleOrTip: "পারফরম্যান্স ভালো রাখতে ক্লায়েন্ট বাউন্ডারিকে ট্রি-এর একদম নিচের পাতায় (Leaf Node) সীমাবদ্ধ রাখা উচিত।",
    category: "Next.js",
  },
  "request memoization": {
    term: "Request Memoization",
    aliases: ["fetch memoization", "react cache"],
    banglaTitle: "রিকোয়েস্ট মেমোইজেশন",
    shortExplanation:
      "একই রেন্ডার সাইকেলে একই API বা ফাংশনে একাধিকবার রিকোয়েস্ট হলে React ও Next.js স্বয়ংক্রিয়ভাবে প্রথম কলের রেজাল্ট মেমরিতে ক্যাশ করে রাখে এবং পরবর্তীতে ডুপ্লিকেট নেটওয়ার্ক কল বন্ধ করে।",
    category: "Next.js Caching",
  },
  "data cache": {
    term: "Data Cache",
    aliases: ["nextjs data cache", "fetch cache"],
    banglaTitle: "নেক্সটজেএস ডেটা ক্যাশ (Data Cache)",
    shortExplanation:
      "সার্ভার সাইডে রিকোয়েস্টের বাইরেও ডেটা সংরক্ষণ করে রাখার স্থায়ী ক্যাশ লেয়ার। যা `revalidateTag` বা নির্দিষ্ট টাইম ইন্টারভালে ইনভ্যালিডেট না হওয়া পর্যন্ত সার্ভারলেস বা সার্ভার রিস্টার্টেও অটুট থাকে।",
    category: "Next.js Caching",
  },
  "full route cache": {
    term: "Full Route Cache",
    aliases: ["route cache", "static html cache"],
    banglaTitle: "ফুল রুট ক্যাশ (Full Route Cache)",
    shortExplanation:
      "বিল্ড টাইমে বা অন-ডিমান্ড রিভ্যালিডেশনের সময় সম্পূর্ণ পেজের স্ট্যাটিক HTML এবং RSC Payload সার্ভারে ক্যাশ করে রাখা, যাতে কোনো রেন্ডারিং খরচ ছাড়াই তাত্ক্ষণিক রেসপন্স দেওয়া যায়।",
    category: "Next.js Caching",
  },
  "router cache": {
    term: "Router Cache (Client Cache)",
    aliases: ["client router cache"],
    banglaTitle: "ক্লায়েন্ট রাউটার ক্যাশ (Router Cache)",
    shortExplanation:
      "ব্রাউজার মেমরিতে ভিজিট করা প্রিফেচড রুট সেগমেন্টগুলো সেভ রাখা। ফলে ক্লায়েন্ট-সাইড নেভিগেশনে সার্ভারে রিকোয়েস্ট না পাঠিয়ে তৎক্ষণাৎ ট্রানজিশন হয়।",
    category: "Next.js Caching",
  },
  middleware: {
    term: "Next.js Middleware",
    aliases: ["middleware.ts", "proxy.ts", "edge middleware"],
    banglaTitle: "মিডলওয়্যার (Middleware)",
    shortExplanation:
      "একটি রিকোয়েস্ট পেজে পৌঁছানোর আগেই Edge Runtime-এ তাকে ইন্টারসেপ্ট করার শক্তিশালী লেয়ার। এর মাধ্যমে সিকিউরিটি রিডাইরেক্ট, অথেন্টিকেশন চেক, কুকি রিরাইট এবং রিভার্স প্রক্সি করা যায়।",
    exampleOrTip: "মিডলওয়্যার এজ রানটাইমে চলে, তাই এতে ভারী Node.js লাইব্রেরি ব্যবহার করা যায় না।",
    category: "Next.js Security",
  },
  "error boundary": {
    term: "Error Boundary",
    aliases: ["error boundaries", "error.tsx", "global-error.tsx"],
    banglaTitle: "এরর বাউন্ডারি (Error Boundary)",
    shortExplanation:
      "React-এর একটি বিশেষ মেকানিজম যা চাইল্ড কম্পোনেন্ট ট্রির জাভাস্ক্রিপ্ট এররগুলোকে ক্যাচ করে পুরো অ্যাপ ক্র্যাশ হওয়া থেকে রক্ষা করে এবং ইউজারকে একটি সুন্দর ফলব্যাক UI দেখায়।",
    category: "React Architecture",
  },
  virtualization: {
    term: "List Virtualization (Windowing)",
    aliases: ["virtualized list", "virtual scroll", "windowing"],
    banglaTitle: "লিস্ট ভার্চুয়ালাইজেশন (Windowing)",
    shortExplanation:
      "হাজার হাজার ডেটার মধ্যে শুধুমাত্র ব্যবহারকারীর স্ক্রিনে যে কয়টি আইটেম দেখা যাচ্ছে ঠিক সে কয়টি DOM নোড রেন্ডার করা এবং স্ক্রল অনুযায়ী ডাইনামিকালি নোড রিসাইকেল করা।",
    exampleOrTip: "`@tanstack/react-virtual` বা `react-window` দিয়ে লাখ লাখ আইটেম ল্যাগ ছাড়া রেন্ডার করা যায়।",
    category: "Performance",
  },
  "layout thrashing": {
    term: "Layout Thrashing",
    aliases: ["reflow", "forced synchronous layout"],
    banglaTitle: "লেআউট থ্র্যাশিং (Layout Thrashing)",
    shortExplanation:
      "জাভাস্ক্রিপ্ট লুপের মধ্যে বারবার DOM রিড (যেমন `offsetHeight`) এবং DOM রাইট (যেমন `style.height`) করার ফলে ব্রাউজারকে ঘনঘন পুরো লেআউট রি-ক্যালকুলেট করতে বাধ্য হওয়া, যা চরম ল্যাগ তৈরি করে।",
    category: "Performance",
  },
  ttfb: {
    term: "TTFB (Time to First Byte)",
    aliases: ["time to first byte"],
    banglaTitle: "টাইম টু ফার্স্ট বাইট (TTFB)",
    shortExplanation:
      "ব্রাউজার রিকোয়েস্ট পাঠানোর পর সার্ভার থেকে রেসপন্সের প্রথম ১ বাইট ডেটা রিসিভ করতে যে সময় লাগে। ভারী সার্ভার ক্যালকুলেশন বা ধীর ডাটাবেস কল TTFB বাড়িয়ে দেয়।",
    exampleOrTip: "Next.js Streaming এবং `<Suspense>` ব্যবহার করে TTFB নাটকীয়ভাবে কমানো যায়।",
    category: "Performance",
  },
  "lifting state up": {
    term: "Lifting State Up",
    aliases: ["lift state up", "lift state"],
    banglaTitle: "স্টেট লিফটিং (Lifting State Up)",
    shortExplanation:
      "যখন একাধিক সিবলিং কম্পোনেন্টের একই ডেটা শেয়ার করার প্রয়োজন হয়, তখন স্টেটটিকে তাদের নিকটতম কমন প্যারেন্ট কম্পোনেন্টে স্থানান্তর করা।",
    category: "React Patterns",
  },
  "web worker": {
    term: "Web Worker",
    aliases: ["web workers", "worker thread"],
    banglaTitle: "ওয়েব ওয়ার্কার (Web Worker)",
    shortExplanation:
      "ব্রাউজারের ব্যাকগ্রাউন্ডে আলাদা থ্রেডে ভারী গাণিতিক হিসাব বা ডাটা প্রসেসিং চালানো, যাতে মেইন UI থ্রেড এবং ইউজার ইন্টারঅ্যাকশন কখনোই ফ্রিজ না হয়।",
    category: "Performance",
  },
  "route grouping": {
    term: "Route Grouping",
    aliases: ["route groups", "(group)"],
    banglaTitle: "রুট গ্রুপিং (Route Groups)",
    shortExplanation:
      "Next.js App Router-এ ফোল্ডারের নাম প্রথম বন্ধনী `(folder)` দিয়ে রাখলে তা URL পাথে কোনো প্রভাব না ফেলে শুধুমাত্র লজিক্যাল অর্গানাইজেশন বা আলাদা রুট লেআউট তৈরি করতে দেয়।",
    category: "Next.js",
  },
  "dynamic routing": {
    term: "Dynamic Routing",
    aliases: ["[slug]", "catch-all routes", "optional catch-all"],
    banglaTitle: "ডায়নামিক রাউটিং (Dynamic Routing)",
    shortExplanation:
      "Next.js-এ ব্র্যাকেট সিনট্যাক্স যেমন `[id]` বা `[...slug]` ব্যবহার করে রানটাইমে URL প্যারামিটার গ্রহণ করে কনটেন্ট রেন্ডার করার ব্যবস্থা।",
    category: "Next.js",
  },
  "http-only cookie": {
    term: "HTTP-Only Cookie",
    aliases: ["httponly cookies", "secure cookies", "httponly"],
    banglaTitle: "এইচটিটিপি-অনলি কুকি (HTTP-Only Cookie)",
    shortExplanation:
      "এমন এক ধরনের ব্রাউজার কুকি যা ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট (`document.cookie`) দিয়ে কখনোই পড়া বা এক্সেস করা যায় না। এটি XSS অ্যাটাক থেকে টোকেন বা সেশন আইডি সুরক্ষিত রাখে।",
    exampleOrTip: "Next.js-এ `cookies()` API বা মিডলওয়্যারে `httpOnly: true, secure: true, sameSite: 'lax'` দিয়ে সেট করতে হয়।",
    category: "Security",
  },
  libuv: {
    term: "Libuv Library",
    aliases: ["libuv library", "threadpool"],
    banglaTitle: "লিবইউভি (Libuv C++ লাইব্রেরি)",
    shortExplanation:
      "Node.js-এর ব্যাকবোন হিসেবে কাজ করা একটি মাল্টি-প্ল্যাটফর্ম C লাইব্রেরি, যা ইভেন্ট লুপ, থ্রেড পুল (Thread Pool), ফাইল সিস্টেম ও নেটওয়ার্কিংয়ের অ্যাসিঙ্ক্রোনাস নন-ব্লকিং I/O পরিচালনা করে।",
    exampleOrTip: "ডিফল্টভাবে Libuv-এর থ্রেড পুলে ৪টি থ্রেড থাকে, যা `UV_THREADPOOL_SIZE` দিয়ে বাড়ানো যায়।",
    category: "Node.js Core",
  },
  "v8 engine": {
    term: "V8 JavaScript Engine",
    aliases: ["v8", "google v8"],
    banglaTitle: "গুগল V8 ইঞ্জিন",
    shortExplanation:
      "গুগলের তৈরি ওপেন-সোর্স হাই-পারফরম্যান্স C++ ইঞ্জিন, যা জাভাস্ক্রিপ্ট কোডকে সরাসরি মেশিনের নেটিভ বাইনারি কোডে (Just-In-Time Compilation - JIT) কম্পাইল করে এক্সিকিউট করে।",
    category: "Node.js Core",
  },
  "thread pool": {
    term: "Libuv Thread Pool",
    aliases: ["thread pool", "libuv thread pool", "worker threads pool"],
    banglaTitle: "থ্রেড পুল (Thread Pool)",
    shortExplanation:
      "Node.js মেইন থ্রেডকে ব্লক না করে ভারী ফাইল সিস্টেম অপারেশন (`fs`), ক্রিপ্টোগ্রাফি (`crypto`), এবং DNS লুকআপ ব্যাকগ্রাউন্ডে চালানোর জন্য Libuv-এর পরিচালিত থ্রেড গুচ্ছ।",
    category: "Node.js Core",
  },
  "worker thread": {
    term: "Worker Threads (`worker_threads`)",
    aliases: ["worker threads", "worker_threads", "workerthread"],
    banglaTitle: "ওয়ার্কার থ্রেডস (Worker Threads)",
    shortExplanation:
      "Node.js-এ ভারী গাণিতিক হিসাব বা CPU-ইনটেনসিভ কাজকে মূল ইভেন্ট লুপ ব্লক না করে সমান্তরালে (Parallel) চালানোর অফিশিয়াল মডিউল।",
    exampleOrTip: "CPU-বাউন্ড কাজের জন্য Worker Threads এবং I/O স্কেলিংয়ের জন্য Cluster মডিউল ব্যবহার করা সেরা।",
    category: "Node.js Architecture",
  },
  clustering: {
    term: "Clustering (`cluster`)",
    aliases: ["cluster module", "cluster", "node clustering"],
    banglaTitle: "ক্লাস্টারিং (Cluster Module)",
    shortExplanation:
      "সার্ভারের মাল্টি-কোর CPU-এর সবকটি কোরকে কাজে লাগাতে একাধিক চাইল্ড প্রসেস (Worker Process) তৈরি করে একই সার্ভার পোর্ট শেয়ার করে লোড ব্যালেন্স করার পদ্ধতি।",
    exampleOrTip: "PM2 প্রসেস ম্যানেজার দিয়ে জিরো-কনফিগে ক্লাস্টার মোড চালানো যায়।",
    category: "Node.js Architecture",
  },
  process: {
    term: "OS Process",
    aliases: ["processes", "child process", "child_process"],
    banglaTitle: "প্রসেস (OS Process)",
    shortExplanation:
      "অপারেটিং সিস্টেমে চলমান কোনো প্রোগ্রামের সম্পূর্ণ স্বতন্ত্র এক্সিকিউশন ইউনিট যার নিজস্ব মেমরি স্পেস, PID এবং রিসোর্স বরাদ্দ থাকে।",
    category: "System & OS",
  },
  thread: {
    term: "OS Thread",
    aliases: ["threads", "multi-threading", "single-threaded"],
    banglaTitle: "থ্রেড (OS Thread)",
    shortExplanation:
      "একটি প্রসেসের মধ্যকার সবচেয়ে ছোট এক্সিকিউশন ইউনিট যা ওই প্রসেসের শেয়ার্ড মেমরি ব্যবহার করে একাধিক কাজ সম্পাদন করে।",
    category: "System & OS",
  },
  "non-blocking i/o": {
    term: "Non-Blocking I/O",
    aliases: ["non blocking io", "non-blocking", "asynchronous i/o"],
    banglaTitle: "নন-ব্লকিং ইনপুট/আউটপুট (Non-Blocking I/O)",
    shortExplanation:
      "ফাইল রিড, ডাটাবেস কোয়েরি বা নেটওয়ার্ক কলের মতো দীর্ঘমেয়াদী কাজ ব্যাকগ্রাউন্ডে দিয়ে মেইন থ্রেডকে অন্য রিকোয়েস্ট প্রসেস করতে দেওয়া, যার ফলে কোনো রিকোয়েস্টই থ্রেড ফ্রিজ করে না।",
    category: "Node.js Core",
  },
  "event emitter": {
    term: "EventEmitter (`events`)",
    aliases: ["event emitter", "event emitters", "eventemitter"],
    banglaTitle: "ইভেন্ট এমিটার (EventEmitter)",
    shortExplanation:
      "Node.js-এর একটি কোর ক্লাস যা পাবলিশ-সাবস্ক্রাইব (Pub/Sub) প্যাটার্নে কাস্টম ইভেন্ট ফায়ার (`emit`) এবং হ্যান্ডেল (`on` / `once`) করতে দেয়। Streams ও HTTP সার্ভার এর ওপর নির্মিত।",
    exampleOrTip: "`emitter.on('data', handler)` দিয়ে লিসেন এবং `emitter.emit('data', payload)` দিয়ে ট্রিগার করা হয়।",
    category: "Node.js Core",
  },
  stream: {
    term: "Node.js Streams",
    aliases: ["streams", "readable stream", "writable stream", "duplex stream", "transform stream"],
    banglaTitle: "স্ট্রিমস (Node.js Streams)",
    shortExplanation:
      "সম্পূর্ণ ফাইল মেমরিতে একবারে লোড না করে ক্ষুদ্র ক্ষুদ্র অংশে (Chunks) ক্রমান্বয়ে ডেটা রিড বা রাইট করার মেকানিজম, যা মেমরি ব্যবহার ৯০% পর্যন্ত কমায়।",
    exampleOrTip: "৪ প্রকার স্ট্রিম: Readable, Writable, Duplex (যেমন TCP Socket), Transform (যেমন zlib compression)।",
    category: "Node.js File System",
  },
  buffer: {
    term: "Node.js Buffer",
    aliases: ["buffers", "buffer memory", "raw binary"],
    banglaTitle: "বাফার (Buffer Memory)",
    shortExplanation:
      "V8 হিপ মেমরির বাইরে বরাদ্দকৃত কাঁচা বাইনারি ডেটা সংরক্ষণের বিশেষ মেমরি ব্লক, যা স্ট্রিমিং ও ফাইল প্রসেসিংয়ে দ্রুত বাইট প্রসেস করতে সাহায্য করে।",
    exampleOrTip: "`Buffer.from('Hello')` বা `Buffer.alloc(10)` দিয়ে বাফার তৈরি হয়।",
    category: "Node.js Core",
  },
  backpressure: {
    term: "Backpressure in Streams",
    aliases: ["back pressure", "stream backpressure"],
    banglaTitle: "ব্যাকপ্রেশার (Backpressure)",
    shortExplanation:
      "যখন ডাটা রিড হওয়ার গতি ডাটা রাইট হওয়ার গতির চেয়ে দ্রুত হয়, তখন বাফার উপচে পড়া ও মেমরি ক্র্যাশ ঠেকাতে ডেটা পড়ার প্রবাহ সাময়িকভাবে থামিয়ে দেওয়ার নিয়ন্ত্রণ মেকানিজম।",
    exampleOrTip: "সরাসরি `.pipe()` ব্যবহার করলে Node.js স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার হ্যান্ডেল করে।",
    category: "Node.js File System",
  },
  pipe: {
    term: "Stream Piping (`pipe`)",
    aliases: ["piping", "stream.pipeline", "readable.pipe"],
    banglaTitle: "স্ট্রিম পাইপিং (`pipe` / `pipeline`)",
    shortExplanation:
      "একটি Readable স্ট্রিমের আউটপুট সরাসরি একটি Writable স্ট্রিমে কোনো ম্যানুয়াল বাফার হ্যান্ডলিং ছাড়াই চ্যানেল করার সহজ মেকানিজম।",
    exampleOrTip: "এরর হ্যান্ডলিং নিখুঁত রাখতে `stream.pipeline` ব্যবহার করা সবচেয়ে নিরাপদ।",
    category: "Node.js File System",
  },
  commonjs: {
    term: "CommonJS (CJS)",
    aliases: ["commonjs module", "require()", "module.exports"],
    banglaTitle: "কমনজেএস মডিউল (CommonJS)",
    shortExplanation:
      "Node.js-এর ট্র্যাডিশনাল সিনক্রোনাস মডিউল সিস্টেম যেখানে `require()` দিয়ে মডিউল লোড এবং `module.exports` দিয়ে এক্সপোর্ট করা হয়।",
    category: "Node.js Architecture",
  },
  "es modules": {
    term: "ES Modules (ESM)",
    aliases: ["esm", "ecmascript modules", "import export"],
    banglaTitle: "ইএস মডিউলস (ES Modules)",
    shortExplanation:
      "আধুনিক জাভাস্ক্রিপ্টের অফিশিয়াল স্ট্যান্ডার্ড মডিউল সিস্টেম যা স্ট্যাটিক ও অ্যাসিঙ্ক্রোনাসভাবে `import` এবং `export` সিনট্যাক্সে মডিউল হ্যান্ডেল করে এবং ট্রি-শেকিং সাপোর্ট করে।",
    exampleOrTip: "Node.js-এ `package.json`-এ `\"type\": \"module\"` যোগ করে ESM এনাবল করা যায়।",
    category: "Node.js Architecture",
  },
  npm: {
    term: "NPM (Node Package Manager)",
    aliases: ["npm registry", "npm package", "npx"],
    banglaTitle: "এনপিএম (Node Package Manager)",
    shortExplanation:
      "বিশ্বের বৃহত্তম জাভাস্ক্রিপ্ট সফটওয়্যার রেজিস্ট্রি এবং কমান্ড-লাইন টুল যার মাধ্যমে ওপেন-সোর্স প্যাকেজ ইন্সটল, ভার্সন কন্ট্রোল ও স্ক্রিপ্ট রান করা যায়।",
    category: "Node.js Tools",
  },
  "package.json": {
    term: "package.json Manifest",
    aliases: ["package.json", "npm manifest"],
    banglaTitle: "প্যাকেজ ডট জেএসএন (package.json)",
    shortExplanation:
      "প্রজেক্টের মেটাডাটা, স্ক্রিপ্ট, ডিপেন্ডেন্সি (Dependencies) এবং কনফিগারেশন ধারণকারী মূল কনফিগ ফাইল।",
    category: "Node.js Tools",
  },
  "package-lock.json": {
    term: "package-lock.json",
    aliases: ["package-lock", "lockfile"],
    banglaTitle: "প্যাকেজ লক ফাইল (package-lock.json)",
    shortExplanation:
      "প্রজেক্টে ইন্সটল করা প্রতিটি প্যাকেজের এক্সাক্ট ভার্সন এবং তার সাব-ডিপেন্ডেন্সির ডিপেন্ডেন্সি ট্রি লক করে রাখে যাতে সব মেশিনে একই পরিবেশ বজায় থাকে।",
    category: "Node.js Tools",
  },
  microservices: {
    term: "Microservices Architecture",
    aliases: ["microservice", "microservices", "monolith vs microservices"],
    banglaTitle: "মাইক্রোসার্ভিস আর্কিটেকচার",
    shortExplanation:
      "একটি বড় অ্যাপ্লিকেশনকে ছোট ছোট, স্বাধীনভাবে ডিপ্লয়যোগ্য ও নির্দিষ্ট দায়িত্বপ্রাপ্ত সার্ভিসে বিভক্ত করার আর্কিটেকচার যা নেটওয়ার্ক API দিয়ে পরস্পরের সাথে যোগাযোগ করে।",
    category: "System Design",
  },
  express: {
    term: "Express.js",
    aliases: ["expressjs", "express framework", "express server"],
    banglaTitle: "এক্সপ্রেস জেএস (Express.js)",
    shortExplanation:
      "Node.js-এর জন্য অত্যন্ত জনপ্রিয়, ফাস্ট, আন-অপিনিয়নেটেড এবং মিনিমালিস্ট ওয়েব ফ্রেমওয়ার্ক যা শক্তিশালী রাউটিং ও মিডলওয়্যার পাইপলাইন প্রদান করে।",
    category: "Express.js",
  },
  "express middleware": {
    term: "Express Middleware",
    aliases: ["middlewares", "middleware function", "req res next"],
    banglaTitle: "এক্সপ্রেস মিডলওয়্যার",
    shortExplanation:
      "এমন একটি ফাংশন যার কাছে Request (`req`), Response (`res`) অবজেক্ট এবং পরবর্তী মিডলওয়্যারে যাওয়ার জন্য `next()` ফাংশনের অ্যাক্সেস থাকে।",
    exampleOrTip: "মিডলওয়্যারে অবশ্যই `res.send()` রেসপন্স পাঠাতে হয় অথবা `next()` কল করতে হয়, নতুবা রিকোয়েস্ট হ্যাং হয়ে থাকবে।",
    category: "Express.js",
  },
  cors: {
    term: "CORS (Cross-Origin Resource Sharing)",
    aliases: ["cross-origin resource sharing", "cors policy", "cors error"],
    banglaTitle: "কোর্স (CORS - Cross-Origin Resource Sharing)",
    shortExplanation:
      "ব্রাউজারের একটি সিকিউরিটি মেকানিজম যা এক ডোমেইন/পোর্ট (Origin) থেকে অন্য ডোমেইনে HTTP রিকোয়েস্ট করার অনুমতি HTTP হেডারের (`Access-Control-Allow-Origin`) মাধ্যমে নিয়ন্ত্রণ করে।",
    exampleOrTip: "Express-এ `cors()` মিডলওয়্যার দিয়ে অনুমোদিত অরিজিন কনফিগার করা হয়।",
    category: "Web Security",
  },
  jwt: {
    term: "JSON Web Token (JWT)",
    aliases: ["jsonwebtoken", "jwt token", "bearer token"],
    banglaTitle: "জেডব্লিউটি (JSON Web Token)",
    shortExplanation:
      "একটি কম্প্যাক্ট, ইউআরএল-সেফ এবং ক্রিপ্টোগ্রাফিক্যালি সাইন করা টোকেন যা ৩টি অংশে বিভক্ত: Header, Payload, এবং Signature (`header.payload.signature`)। স্টেটলেস অথেনটিকেশনে ব্যবহৃত হয়।",
    exampleOrTip: "JWT সাধারণত রিকোয়েস্টের `Authorization: Bearer <token>` হেডারে পাঠানো হয়।",
    category: "Security",
  },
  "rate limiting": {
    term: "Rate Limiting & Throttling",
    aliases: ["rate limit", "rate limiter", "api throttling", "express-rate-limit"],
    banglaTitle: "রেট লিমিটিং ও থ্রটলিং (Rate Limiting)",
    shortExplanation:
      "একটি নির্দিষ্ট সময়সীমায় (যেমন প্রতি মিনিটে) একক আইপি বা ইউজারের করা রিকোয়েস্টের সংখ্যা সীমিত করে সার্ভারকে DDoS ও ব্রুট-ফোর্স অ্যাটাক থেকে রক্ষা করার ডিফেন্স টেকনিক।",
    exampleOrTip: "Express-এ `express-rate-limit` প্যাকেজ দিয়ে `429 Too Many Requests` স্ট্যাটাস রিটার্ন করা হয়।",
    category: "Security",
  },
  salting: {
    term: "Password Salting",
    aliases: ["salt", "bcrypt salt", "salted hash"],
    banglaTitle: "পাসওয়ার্ড সল্টিং (Password Salting)",
    shortExplanation:
      "পাসওয়ার্ড হ্যাশ করার আগে তার সাথে একটি ইউনিক র‍্যান্ডম স্ট্রিং (Salt) যুক্ত করা, যাতে রেইনবো টেবিল অ্যাটাক এবং দুটি ইউজারের একই পাসওয়ার্ড হলেও হ্যাশ সম্পূর্ণ আলাদা হয়।",
    exampleOrTip: "`bcrypt.hash(password, 10)` স্বয়ংক্রিয়ভাবে সল্ট জেনারেট ও সংযুক্ত করে।",
    category: "Security",
  },
  "stateless auth": {
    term: "Stateless vs Stateful Authentication",
    aliases: ["stateless authentication", "stateful authentication", "session vs token"],
    banglaTitle: "স্টেটলেস বনাম স্টেটফুল অথেন্টিকেশন",
    shortExplanation:
      "স্টেটফুল পদ্ধতিতে সার্ভার ডাটাবেস/রেডিসে সেশন আইডি সংরক্ষণ করে কুকি পাঠায়; আর স্টেটলেস পদ্ধতিতে (JWT) সার্ভার কোনো স্টেট রাখে না, টোকেনের সিগনেচার যাচাই করেই অথরাইজ করে।",
    category: "Security",
  },
  csrf: {
    term: "CSRF (Cross-Site Request Forgery)",
    aliases: ["cross-site request forgery", "csrf attack", "xsrf"],
    banglaTitle: "সিএসআরএফ অ্যাটাক (CSRF Attack)",
    shortExplanation:
      "ইউজারের ব্রাউজারের অটোমেটিক কুকি পাঠানোর সুযোগ নিয়ে হ্যাকার ইউজারকে না জানিয়ে তার লগইন থাকা ব্যাংকিং বা সোশ্যাল একাউন্টে ক্ষতিকর রিকোয়েস্ট এক্সিকিউট করানো।",
    exampleOrTip: "প্রতিরোধ: `SameSite=Strict/Lax` কুকি অ্যাট্রিবিউট এবং অ্যান্টি-CSRF টোকেন ব্যবহার করা।",
    category: "Security",
  },
  xss: {
    term: "XSS (Cross-Site Scripting)",
    aliases: ["cross site scripting", "xss attack", "stored xss"],
    banglaTitle: "এক্সএসএস অ্যাটাক (Cross-Site Scripting)",
    shortExplanation:
      "ওয়েবসাইটে ক্ষতিকর জাভাস্ক্রিপ্ট কোড ইনজেক্ট করে ইউজারের সেশন টোকেন, কুকি বা সংবেদনশীল ডেটা চুরি করার হ্যাকিং টেকনিক।",
    exampleOrTip: "প্রতিরোধ: ইনপুট স্যানিটাইজেশন, HTML এস্কেপিং, এবং `Content-Security-Policy (CSP)` হেডার।",
    category: "Security",
  },
  "sql injection": {
    term: "SQL / NoSQL Injection",
    aliases: ["nosql injection", "sqli", "injection attack"],
    banglaTitle: "এসকিউএল / নো-এসকিউএল ইনজেকশন",
    shortExplanation:
      "অনিরাপদ ইউজার ইনপুটের মাধ্যমে ডাটাবেস কোয়েরির লজিক বদলে দিয়ে অবৈধ ডেটা রিড, ডিলিট বা পুরো ডাটাবেস হাইজ্যাক করার আক্রমণ।",
    exampleOrTip: "প্রতিরোধ: Parameterized Queries (Prepared Statements) এবং ORM/ODM (Prisma/Mongoose) ব্যবহার করা।",
    category: "Security",
  },
  helmet: {
    term: "Helmet.js Security",
    aliases: ["helmet.js", "helmet middleware"],
    banglaTitle: "হেলমেট জেএস (Helmet.js)",
    shortExplanation:
      "Express.js অ্যাপ্লিকেশনে বিভিন্ন সিকিউরিটি HTTP রেসপন্স হেডার (যেমন `Content-Security-Policy`, `X-Content-Type-Options`, `Strict-Transport-Security`) স্বয়ংক্রিয়ভাবে সেট করার অপরিহার্য মিডলওয়্যার।",
    exampleOrTip: "`app.use(helmet())` এক লাইনে ১৫টির বেশি সিকিউরিটি হেডার কনফিগার করে দেয়।",
    category: "Security",
  },
  "brute force": {
    term: "Brute-Force Attack",
    aliases: ["brute-force", "brute force attack", "credential stuffing"],
    banglaTitle: "ব্রুট-ফোর্স অ্যাটাক (Brute-Force Attack)",
    shortExplanation:
      "অটোমেটেড বটের সাহায্যে ঘনঘন হাজার হাজার পাসওয়ার্ড বা কম্বিনেশন ট্রাই করে সঠিক লগইন ক্রিডেনশিয়াল ক্র্যাক করার চেষ্টা।",
    exampleOrTip: "প্রতিরোধ: Rate limiting, একাউন্ট লকআউট পলিসি, CAPTCHA, এবং Multi-Factor Authentication (MFA)।",
    category: "Security",
  },
};


