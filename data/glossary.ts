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
  },
};
