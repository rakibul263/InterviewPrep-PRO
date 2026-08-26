import { Question } from "@/types";

export const javascriptPerformanceAdvancedQuestions: Question[] = [
  {
    id: "js-memory-leaks-causes",
    slug: "js-memory-leaks-causes",
    question: "What causes memory leaks in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "JavaScript-এ Memory Leak ঘটে যখন অ্যাপ্লিকেশনে এমন কিছু অবজেক্ট বা ডেটা মেমরিতে অবিকল থেকে যায় যা ভবিষ্যতে আর কখনো ব্যবহার হবে না, কিন্তু কোনো না কোনো সক্রিয় রেফারেন্স থাকার কারণে Garbage Collector সেগুলোকে মেমরি থেকে মুক্ত করতে পারে না। প্রধান কারণগুলো হলো: ১. অনিচ্ছাকৃত গ্লোবাল ভ্যারিয়েবল, ২. ফরগটেন টাইমার বা ইন্টারভ্যাল (setInterval), ৩. ক্লোজারের ভুল ব্যবহার, ৪. আন-রিমুভড DOM ইভেন্ট লিসেনার ও ডিটাচড DOM নোডস।",
    easyExplanation: "সহজ ভাষায় বুঝুন:\n১. আপনি রুমে বসে কাজ করার পর কিছু অপ্রয়োজনীয় কাগজ মেঝের ময়লার ঝুড়িতে ফেলে দেন, যাতে ক্লিনার এসে ফেলে দিতে পারে।\n২. কিন্তু আপনি যদি কোনো আবর্জনাকে আপনার টেবিলের সাথে আঠা দিয়ে আটকে রাখেন (active reference), ক্লিনার ভাববে এটা দরকারি জিনিস এবং সে কখনই এটা ফেলবে না।\n৩. এভাবে অপ্রয়োজনীয় জিনিস জমতে জমতে একসময় রুম বা আপনার কম্পিউটারের RAM সম্পূর্ণ ভরে যায় এবং ব্রাউজার স্লো বা ক্র্যাশ করে। এটিই Memory Leak।",
    interviewAnswer: "A memory leak in JavaScript occurs when memory allocated to objects is no longer needed by the application but remains retained because reachable references prevent the Garbage Collector from freeing it. The primary causes are: 1. Accidental Global Variables (e.g., missing let/const), 2. Forgotten Timers or Callbacks (un-cleared setIntervals), 3. Outlived Closures retaining large scope variables, 4. Detached DOM Trees (retaining JS references to deleted DOM nodes), and 5. Lingering Event Listeners on unmounted components.",
    detailedExplanation: {
      whatItIs: "মেমরি স্পেসের অপচয় ও জমাট বাঁধা যা দীর্ঘমেয়াদে অ্যাপ্লিকেশনের পারফরম্যান্স ধ্বংস করে।",
      whyItExists: "জাভাস্ক্রিপ্ট অটোমেটিক মেমরি ম্যানেজমেন্ট বা গার্বেজ কালেকশন (Mark-and-Sweep) ব্যবহার করে। কোনো ডেটা পর্যন্ত যদি রুট অবজেক্ট (Window) থেকে চেইন বেয়ে পৌঁছানো যায় (Reachable), তবে ইঞ্জিন তাকে ডিলিট করতে পারে না।",
      howItWorks: "অব্যবহৃত অবজেক্টের সাথে গ্লোবাল স্কোপ, ইভেন্ট টার্গেট বা টাইমারের রেফারেন্স লিঙ্ক থেকে গেলে মেমরি প্রতিনিয়ত বাড়তে থাকে।",
      whenToUse: "React-এ `useEffect` এর ভেতর cleanup ফাংশন রিটার্ন করা, `clearInterval` নিশ্চিত করা এবং `WeakMap` / `WeakSet` ব্যবহার করা।",
      keyPoints: [
        "Accidental Globals: `window.data = hugeArray` or `undeclaredVar = 10`.",
        "Uncleared Timers: `setInterval` running forever.",
        "Detached DOM: Keeping DOM node in JS variable after removing from page.",
        "Unremoved Listeners: `window.addEventListener('resize', ...)` without cleanup."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Un-cleared setInterval Memory Leak
function startTracking() {
  const bigData = new Array(100000).fill("Data");
  
  const timerId = setInterval(() => {
    // bigData ক্লোজারে আটকে আছে এবং প্রতি সেকেন্ডে রান হচ্ছে
    console.log("Tracking size:", bigData.length);
  }, 1000);

  // সমাধান: ক্লিনআপ মেথড রিটার্ন করা
  return () => clearInterval(timerId);
}

const stopTracking = startTracking();
// যখন প্রয়োজন শেষ:
// stopTracking(); // মেমরি ফ্রি হয়ে যাবে

// ২. Detached DOM Leak
let detachedButton;
function createButton() {
  detachedButton = document.createElement("button");
  detachedButton.textContent = "Click Me";
  document.body.appendChild(detachedButton);
}

function removeButton() {
  document.body.removeChild(detachedButton);
  // ❌ বাটনের রেফারেন্স এখনো detachedButton এ আছে, তাই GC ডিলিট করতে পারছে না
  // ✅ সমাধান:
  detachedButton = null;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "টাইমার ক্লিনিং",
          description: "clearInterval কল না করলে bigData মেমরি চিরতরে আটকে থাকবে।"
        },
        {
          step: 2,
          title: "ডিটাচড নোড সমাধান",
          description: "DOM থেকে রিমুভ করার পর জাভাস্ক্রিপ্ট ভ্যারিয়েবলেও null সেট করে মেমরি পয়েন্টার মুক্ত করতে হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Component Unmount Leak",
        description: "কম্পোনেন্ট আনমাউন্ট হওয়ার পরও ব্যাকগ্রাউন্ডে নেটওয়ার্ক বা উইন্ডো স্ক্রল লিসেনার চলতে থাকলে React 'Can't perform state update on unmounted component' ওয়ার্নিং দেয়।"
      },
      {
        title: "Single Page Application (SPA) Fatigue",
        description: "ট্যাব রিলোড ছাড়া সারাদিন চলা ড্যাশবোর্ডগুলোতে মেমরি লিকের কারণে কয়েক ঘণ্টা পর ব্রাউজার ট্যাব ল্যাগ করা।"
      }
    ],
    interviewTips: {
      tip: "Chrome DevTools-এর 'Memory Heap Snapshot' এবং 'Allocation timeline' দিয়ে কীভাবে মেমরি লিক ডিটেক্ট করতে হয় তা উল্লেখ করলে ইন্টারভিউয়ার অত্যন্ত সন্তুষ্ট হন।",
      deliveryStrategy: "সংজ্ঞা -> ৪টি প্রধান কারণ -> React cleanup ফাংশনের সাথে কানেক্ট করে সমাধান বলুন।",
      avoidSaying: [
        {
          wrong: "জাভাস্ক্রিপ্টে গার্বেজ কালেক্টর থাকায় মেমরি লিক হওয়া অসম্ভব।",
          right: "গার্বেজ কালেক্টর স্বয়ংক্রিয় হলেও রেফারেন্স আন-ক্লিয়ার্ড থাকলে সেটি মেমরি লিক চিহ্নিত করতে পারে না।"
        }
      ]
    },
    quickRevision: [
      "Memory Leak = অপ্রয়োজনীয় অবজেক্ট মেমরিতে রেফারেন্স থাকার কারণে ডিলিট না হওয়া।",
      "প্রধান কারণ: Uncleared setInterval, Detached DOM nodes, Lingering Listeners, Unintended Globals.",
      "সমাধান: React useEffect cleanup, clearInterval, `obj = null` করা, WeakMap ব্যবহার করা।",
      "ডিবাগ টুল: Chrome DevTools Memory Heap Profiler."
    ],
    followUpQuestions: [
      {
        question: "How does garbage collection work (mark-and-sweep)?",
        targetId: "garbage-collection-mark-and-sweep",
        shortHint: "গার্বেজ কালেকশন ইন্টারনালস।"
      }
    ],
    tags: ["JavaScript", "Performance", "Memory Leak", "Garbage Collection", "DevTools"]
  },
  {
    id: "garbage-collection-mark-and-sweep",
    slug: "garbage-collection-mark-and-sweep",
    question: "How does garbage collection work (mark-and-sweep) in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer: "JavaScript Engine মেমরি ম্যানেজ করতে প্রধানত 'Mark-and-Sweep' অ্যালগরিদম ব্যবহার করে। এই প্রক্রিয়ায় ইঞ্জিন গ্লোবাল রুট অবজেক্ট (`window` বা `global`) থেকে শুরু করে সমস্ত চাইল্ড রেফারেন্স ট্রাভার্স করে এবং পৌঁছানো যায় এমন সমস্ত অবজেক্টকে 'Mark' (চিহ্নিত) করে। এরপর পুরো মেমরি হিপ স্ক্যান করে যে অবজেক্টগুলোতে কোনো মার্ক পড়েনি (Unreachable), সেগুলোকে মেমরি থেকে 'Sweep' (মুছে পরিষ্কার) করে।",
    easyExplanation: "সহজ গাছের শিকড়ের মতো ভাবুন:\n১. Root (গাছের গোড়া): যেমন আপনার গ্লোবাল অবজেক্ট বা বর্তমান কল স্ট্যাকের লোকাল ভ্যারিয়েবল।\n২. Mark Phase: গোড়া থেকে শুরু করে যতগুলো ডালপালা বা পাতায় হাত দেওয়া যায় (Reachability), সেগুলোর গায়ে লাল রঙ (Mark) লাগিয়ে দেওয়া হয়।\n৩. Sweep Phase: যে ডাল বা শুকনো পাতায় গোড়া থেকে কোনোভাবেই যাওয়া যায় না (যেগুলোতে কোনো লাল দাগ নেই), ক্লিনার এসে সেগুলোকে কেটে ফেলে (Sweep) এবং মেমরি ফাঁকা করে দেয়।",
    interviewAnswer: "JavaScript engines (like V8) manage memory automatically using the Mark-and-Sweep garbage collection algorithm based on the concept of 'Reachability'. Starting from defined 'Roots' (the global object, active call stack execution contexts, and local parameters), the GC traverses and 'Marks' all reachable objects and their nested references. In the 'Sweep' phase, any un-marked objects in the heap are deemed unreachable and their allocated memory is reclaimed for future use. Modern engines enhance this with generational collection (Young vs Old generation) and incremental marking.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্ট রানটাইমের মেমরি অটো-রিক্লেমেশন অ্যালগরিদম।",
      whyItExists: "পূর্বে ব্যবহৃত Reference Counting অ্যালগরিদম সার্কুলার রেফারেন্স (Circular references যেখানে দুই অবজেক্ট একে অপরকে পয়েন্ট করে থাকে) হ্যান্ডেল করতে ব্যর্থ হয়ে মেমরি লিক করত। Mark-and-Sweep সার্কুলার প্রবলেম সফলভাবে সমাধান করে।",
      howItWorks: "১. Roots নির্ধারণ (Global, Call Stack, DOM)। ২. গ্রাফ ট্রাভার্সাল (DFS/BFS) দিয়ে Reachable নোড মার্ক করা। ৩. আন-মার্কড মেমরি বাফার ড্রপ বা ফ্রি করা। ৪. মেমরি ফ্র্যাগমেন্টেশন কমাতে কম্প্যাক্ট (Compact) করা।",
      whenToUse: "WeakMap এবং WeakSet ব্যবহারের পেছনে মূল কারণ হলো তারা GC-কে Mark-and-Sweep প্রক্রিয়ায় রেফারেন্স আন-রিচেবল ধরে নিয়ে মেমরি রিলিজ করতে সাহায্য করে।",
      keyPoints: [
        "Root Reachability: যদি রুট থেকে পৌঁছানো না যায়, তবে অবজেক্ট মুছে যাবে।",
        "Solves Circular Reference bug cleanly.",
        "Generational GC: নতুন অবজেক্ট Young generation-এ যায় (ঘন ঘন স্ক্যান হয়), দীর্ঘস্থায়ী অবজেক্ট Old generation-এ প্রোমোট হয়।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Reachable অবজেক্ট
let user = { name: "Shuvo" }; // user -> { name: "Shuvo" } (Reachable from Root)

// ২. Unreachable হওয়া
user = null; // আসল অবজেক্টের সাথে রুটের সংযোগ বিচ্ছিন্ন! 
// Next GC cycle-এ { name: "Shuvo" } মেমরি থেকে Sweep হয়ে যাবে

// ৩. সার্কুলার রেফারেন্স এবং Mark-and-Sweep এর সমাধান
function createFamily() {
  let father = {};
  let mother = {};

  father.wife = mother; // father points to mother
  mother.husband = father; // mother points to father

  return "Family created";
}

createFamily();
// ফাংশন শেষ হওয়ার পর father ও mother একে অপরকে রেফারেন্স করলেও,
// রুটের সাথে তাদের কোনো সংযোগ নেই।
// Mark-and-Sweep সফলভাবে উভয় অবজেক্টকেই মুছে ফেলবে!`,
      explanationSteps: [
        {
          step: 1,
          title: "রুট সংযোগ বিচ্ছিন্ন",
          description: "user = null করার পর অবজেক্টটি মেমরিতে থাকলেও রুট থেকে আন-রিচেবল হয়ে যাওয়ায় GC সেটিকে মুছে দেবে।"
        },
        {
          step: 2,
          title: "সার্কুলার রেফারেন্স হ্যান্ডলিং",
          description: "father এবং mother একে অপরকে পয়েন্ট করে থাকলেও রুটের কোনো মার্ক না থাকায় মেমরি থেকে স্বয়ংক্রিয়ভাবে ক্লিন হয়ে যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "WeakMap for Private Metadata",
        description: "DOM নোডের সাথে মেটাডাটা বাইন্ড করতে `const meta = new WeakMap()` ব্যবহার করা যাতে DOM মুছে গেলে মেটাডাটাও স্বয়ংক্রিয়ভাবে GC হয়ে যায়।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'Reference counting ব্যবহার হয়'। বলুন 'Reference Counting বাদ দিয়ে আধুনিক ইঞ্জিনে Reachability ভিত্তিক Mark-and-Sweep ব্যবহার হয়'।",
      deliveryStrategy: "Reachability ধারণা -> Roots -> Mark Phase -> Sweep Phase -> সার্কুলার রেফারেন্স সমাধানের সুবিধা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "সার্কুলার রেফারেন্স থাকলে জাভাস্ক্রিপ্ট কখনো মেমরি ক্লিয়ার করতে পারে না।",
          right: "পুরোনো রেফারেন্স কাউন্টিং অ্যালগরিদমে এই সমস্যা ছিল, কিন্তু আধুনিক Mark-and-Sweep-এ রুট থেকে বিচ্ছিন্ন হলে সার্কুলার রেফারেন্সও সফলভাবে ক্লিয়ার হয়।"
        }
      ]
    },
    quickRevision: [
      "Reachability = রুট থেকে অবজেক্টে পৌঁছানো যায় কি না।",
      "Roots = Global object, Call stack variables, DOM.",
      "Mark: সব রিচেবল অবজেক্ট দাগানো হয়।",
      "Sweep: আন-মার্কড অবজেক্ট মেমরি থেকে মুছে দেওয়া হয়।",
      "Circular Reference মেমরি লিক সমস্যা সফলভাবে দূর করে।"
    ],
    followUpQuestions: [
      {
        question: "What causes memory leaks in JavaScript?",
        targetId: "js-memory-leaks-causes",
        shortHint: "মেমরি লিকের বাস্তব কারণসমূহ।"
      }
    ],
    tags: ["JavaScript", "V8", "Garbage Collection", "Memory Management", "Mark and Sweep"]
  },
  {
    id: "debounce-vs-throttle",
    slug: "debounce-vs-throttle",
    question: "Difference between debounce and throttle.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Debounce কোনো ইভেন্ট ক্রমাগত ঘটতে থাকলে ফাংশন এক্সিকিউশন পিছিয়ে দেয় এবং ব্যবহারকারী টাইপিং বা ইভেন্ট ট্রিগার করা বন্ধ করার একটি নির্দিষ্ট সময় (যেমন ৫০০ms) পর কেবল একবার ফাংশনটি রান করে। আর Throttle কোনো দ্রুত ঘটতে থাকা ইভেন্টের সময় একটি নির্দিষ্ট বিরতিতে (যেমন প্রতি ৫০০ms পর পর) নিয়মিত বিরতিতে ফাংশনটি এক্সিকিউট করতে থাকে।",
    easyExplanation: "বাস্তব জীবনের উদাহরণ দিয়ে বুঝুন:\n\n১. Debounce (লিফটের সেন্সর দরজা):\n- লিফটের দরজায় কেউ দাঁড়ালে টাইমার রিসেট হয়। যতক্ষণ মানুষ আসতেই থাকবে, দরজা বন্ধ হবে না। যখন মানুষ আসা বন্ধ হবে এবং ৫ সেকেন্ড কেউ আসবে না, তখনই কেবল দরজা বন্ধ হয়ে লিফট চলবে।\n- ব্যবহার: Search Bar (ইউজার টাইপ করা শেষ করলে তবেই API কল হবে)।\n\n২. Throttle (বন্দুকের গুলির রেট অব ফায়ার):\n- আপনি যতই ট্রিগার চেপে ধরে রাখুন না কেন, মেশিনগান প্রতি ১ সেকেন্ডে কেবল ১টি করে গুলি ছুড়বে।\n- ব্যবহার: Window Scroll / Resize / Game Button (স্ক্রল করার সময় প্রতি ২০০ms পর পর পেজ পজিশন ক্যালকুলেট করা)।",
    interviewAnswer: "Debounce and Throttle are rate-limiting techniques used to control how often a function is executed in response to frequent events. Debounce delays function execution until a specified delay has elapsed since the LAST time the event was triggered (resetting the timer on every event). Throttle enforces a maximum execution frequency, guaranteeing that the function is executed at most once every specified time interval, regardless of how many times the event fires.",
    detailedExplanation: {
      whatItIs: "UI ইভেন্ট অপটিমাইজেশন ও ব্রাউজার পারফরম্যান্স টেকনিক।",
      whyItExists: "ইনপুট টাইপিং, উইন্ডো স্ক্রল বা রিসাইজ ইভেন্ট প্রতি সেকেন্ডে শত শত বার ফায়ার হয়ে DOM ও নেটওয়ার্ক ওভারলোড করে অ্যাপ ল্যাগি করে ফেলে।",
      howItWorks: "Debounce টাইমার রি-সেট করে `clearTimeout` দিয়ে। Throttle একটি ফ্ল্যাগ বা লাস্ট এক্সিকিউশন টাইমস্ট্যাম্প চেক করে ইন্টারভ্যাল পার হয়েছে কি না দেখে।",
      whenToUse: "Search autocomplete, Form autosave এ Debounce। আর Infinite scroll, Window resize, Drag-and-Drop এ Throttle।",
      keyPoints: [
        "Debounce: Runs ONCE after inactivity (Grouping bursts).",
        "Throttle: Runs REGULARLY at fixed intervals (Pacing steady stream).",
        "উভয় টেকনিক ক্লোজারের মাধ্যমে স্টেট মেইনটেইন করে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. কাস্টম Debounce ইমপ্লিমেন্টেশন
function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    clearTimeout(timerId); // পূর্বের টাইমার বাতিল
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// ২. কাস্টম Throttle ইমপ্লিমেন্টেশন
function throttle(fn, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// ৩. ব্যবহার
const handleSearch = debounce((query) => {
  console.log("Fetching API for search:", query);
}, 400);

const handleScroll = throttle(() => {
  console.log("Recalculating scroll position:", window.scrollY);
}, 200);`,
      explanationSteps: [
        {
          step: 1,
          title: "Debounce টাইমার রিসেট",
          description: "clearTimeout(timerId) নিশ্চিত করে ব্যবহারকারী টাইপ করতে থাকলে পূর্বের শিডিউল্ড কল বাতিল হয়ে নতুন টাইমার চালু হবে।"
        },
        {
          step: 2,
          title: "Throttle ইন্টারভ্যাল চেক",
          description: "now - lastTime >= interval শর্ত পূরণ হলেই কেবল ফাংশন রান করে এবং টাইমস্ট্যাম্প আপডেট করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Search Autocomplete Input",
        description: "ব্যবহারকারী 'macbook pro' টাইপ করার সময় প্রতিটি অক্ষরের জন্য ১০টি রিকোয়েস্ট না পাঠিয়ে টাইপিং শেষে ১টি রিকোয়েস্ট পাঠানো।"
      },
      {
        title: "Infinite Scroll Trigger",
        description: "ইউজার দ্রুত স্ক্রল করার সময় প্রতি ২৫০ms অন্তর বটম বাউন্ডারি চেক করে পরবর্তী পেজের ডেটা লোড করা।"
      }
    ],
    interviewTips: {
      tip: "লিফটের দরজা (Debounce) এবং মেশিনগানের ফায়ারিং রেট (Throttle)-এর উপমা ইন্টারভিউতে বলুন—এটি তাৎক্ষণিকভাবে আপনার বোঝাপড়া পরিষ্কার করে দেয়।",
      deliveryStrategy: "সংজ্ঞা -> উপমা -> কোড স্নিপেট (clearTimeout vs Date.now) -> সার্চ বার বনাম স্ক্রল ইভেন্টের ব্যবহার বলুন।",
      avoidSaying: [
        {
          wrong: "Debounce এবং Throttle একই রকম কাজ করে শুধু নাম আলাদা।",
          right: "Debounce কাজ করে বিরতির (inactivity) ওপর ভিত্তি করে, আর Throttle কাজ করে সময়সীমার ফ্রিকোয়েন্সির (fixed rate) ওপর ভিত্তি করে।"
        }
      ]
    },
    quickRevision: [
      "Debounce: শেষ ইভেন্টের পর টাইমার পার হলে ১ বার চলে (Search Input, Auto-save).",
      "Throttle: নির্দিষ্ট সময় পরপর নিয়মিত চলে (Scroll, Resize, Mousemove).",
      "Debounce uses `clearTimeout` timer reset.",
      "Throttle tracks `lastExecutionTime` or boolean flag."
    ],
    followUpQuestions: [
      {
        question: "What causes memory leaks in JavaScript?",
        targetId: "js-memory-leaks-causes",
        shortHint: "ইভেন্ট লিসেনার ও টাইমার ম্যানেজমেন্ট।"
      }
    ],
    tags: ["JavaScript", "Performance", "Debounce", "Throttle", "Optimization"]
  },
  {
    id: "event-delegation-benefits",
    slug: "event-delegation-benefits",
    question: "Explain event delegation and its benefits.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Event Delegation হলো JavaScript DOM ইভেন্ট হ্যান্ডলিংয়ের একটি দক্ষ প্যাটার্ন, যেখানে প্রতিটি চাইল্ড এলিমেন্টে আলাদা আলাদা ইভেন্ট লিসেনার না বসিয়ে Event Bubbling-এর সুবিধা নিয়ে তাদের কমন প্যারেন্ট এলিমেন্টে মাত্র একটি ইভেন্ট লিসেনার যুক্ত করা হয় এবং `event.target` দিয়ে ক্লিক হওয়া চাইল্ড এলিমেন্টটি চিহ্নিত করা হয়।",
    easyExplanation: "সহজ উদাহরণ দিয়ে বুঝুন:\n১. ধরুন একটি টেবিলে ১০০০টি বাটন বা লিস্ট আইটেম আছে।\n২. সাধারণ নিয়মে ১০০০টি বাটনে ১০০০টি `addEventListener` বসালে প্রচুর মেমরি নষ্ট হবে এবং ব্রাউজার স্লো হয়ে যাবে।\n৩. কিন্তু আপনি যদি শুধু তাদের প্যারেন্ট `<ul>` ট্যাগে ১টি মাত্র লিসেনার বসান, তবে যে বাটনেই ক্লিক হোক না কেন, Event Bubbling-এর কারণে ইভেন্টটি লাফিয়ে প্যারেন্ট ট্যাগে চলে আসবে।\n৪. আপনি `event.target` দিয়ে দেখে নিতে পারেন কোন বাটনে ক্লিক হয়েছে।\n৫. এমনকি ভবিষ্যতে নতুন কোনো বাটন ডায়নামিকালি যোগ হলেও নতুন করে কোনো লিসেনার বসাতে হবে না!",
    interviewAnswer: "Event Delegation is a DOM pattern where instead of attaching event listeners to multiple individual child elements, a single listener is attached to their common parent container. Leveraging JavaScript's Event Bubbling (propagation from target up through the DOM tree), events on children bubble up to the parent where `event.target` identifies the originating element. The primary benefits are significant memory savings, reduced initialization time, and automatic support for dynamically added/removed DOM nodes without re-binding listeners.",
    detailedExplanation: {
      whatItIs: "ইভেন্ট বাবলিং আর্কিটেকচারের ওপর ভিত্তি করে তৈরি সেন্ট্রালাইজড ইভেন্ট ম্যানেজমেন্ট প্যাটার্ন।",
      whyItExists: "হাজার হাজার নোডে আলাদা লিসেনার বসানোর মেমরি ওভারহেড কমাতে এবং ডায়নামিক DOM ম্যানিপুলেশন সহজ করতে।",
      howItWorks: "১. প্যারেন্ট এলিমেন্টে লিসেনার রেজিস্টার হয়। ২. চাইল্ডে ক্লিক হলে Capturing -> Target -> Bubbling ফেজে ইভেন্ট উপরে ওঠে। ৩. প্যারেন্টের কলব্যাকে `event.target.closest(selector)` বা `event.target.matches()` দিয়ে চাইল্ড আইডেন্টিফাই করা হয়।",
      whenToUse: "বড় টেবিল রো অ্যাকশন, ইনফিনিট স্ক্রল লিস্ট আইটেম, ট্যাগ ক্লাউড এবং ডায়নামিক মোডাল মেনুতে।",
      keyPoints: [
        "Leverages Event Bubbling.",
        "`event.target` = The exact clicked element.",
        "`event.currentTarget` = The parent element holding the listener.",
        "Automatic support for dynamically inserted elements."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// HTML: <ul id="todoList"><li data-id="1">Task 1 <button class="del">Delete</button></li> ... </ul>

const todoList = document.querySelector("#todoList");

// ১. প্যারেন্টে সিঙ্গেল লিসেনার
todoList.addEventListener("click", (event) => {
  // ২. ক্লিক হওয়া এলিমেন্টটি ডিলিট বাটন কি না চেক করা
  if (event.target.classList.contains("del")) {
    const parentLi = event.target.closest("li");
    const taskId = parentLi.dataset.id;
    
    console.log("Deleting task ID:", taskId);
    parentLi.remove();
  }
});

// ৩. নতুন চাইল্ড ডায়নামিকালি যোগ হলেও কাজ করবে
const newLi = document.createElement("li");
newLi.dataset.id = "2";
newLi.innerHTML = 'Task 2 <button class="del">Delete</button>';
todoList.appendChild(newLi); // কোনো নতুন addEventListener ছাড়াই Delete বাটন কাজ করবে!`,
      explanationSteps: [
        {
          step: 1,
          title: "প্যারেন্ট লিসেনার",
          description: "todoList প্যারেন্ট কন্টেইনারে ১টি মাত্র লিসেনার থাকায় মেমরি অপটিমাইজ হয়েছে।"
        },
        {
          step: 2,
          title: "টার্গেট ভ্যালিডেশন",
          description: "event.target.classList.contains('del') নিশ্চিত করে যে ক্লিকের উৎস সঠিক ডিলিট বাটন ছিল।"
        },
        {
          step: 3,
          title: "ডায়নামিক সাপোর্ট",
          description: "ভবিষ্যতে যুক্ত হওয়া নতুন এলিমেন্টগুলোতেও স্বয়ংক্রিয়ভাবে ইভেন্ট বাবলিং কাজ করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Synthetic Event System",
        description: "React 17+ এর আগ পর্যন্ত পুরো অ্যাপ্লিকেশনের সব ইভেন্টকে `document` রুটে এবং বর্তমানে React Root কন্টেইনারে Event Delegation-এর মাধ্যমেই হ্যান্ডেল করে।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে 'Event Bubbling' এবং `event.target` বনাম `event.currentTarget`-এর পার্থক্য উল্লেখ করতে ভুলবেন না।",
      deliveryStrategy: "সংজ্ঞা -> বাবলিং মেকানিজম -> ৩টি মূল সুবিধা (Memory, Dynamic elements, Less code) -> React-এর ব্যবহারের উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "সব ইভেন্ট বাবল করে।",
          right: "বেশিরভাগ ইভেন্ট বাবল করলেও কিছু ইভেন্ট (যেমন focus, blur, mouseenter, mouseleave) ডিফল্টভাবে বাবল করে না (তাদের জন্য focusin/focusout ব্যবহার করতে হয়)।"
        }
      ]
    },
    quickRevision: [
      "Event Delegation = চাইল্ডের বদলে প্যারেন্টে ১টি লিসেনার বসানো।",
      "Event Bubbling-এর ওপর ভিত্তি করে কাজ করে।",
      "`event.target` = যেখানে ক্লিক হয়েছে; `event.currentTarget` = প্যারেন্ট যেখানে লিসেনার আছে।",
      "সুবিধা: Huge Memory Savings এবং Dynamic elements স্বয়ংক্রিয়ভাবে কাজ করে।"
    ],
    followUpQuestions: [
      {
        question: "How does this behave in normal functions vs event handlers?",
        targetId: "this-keyword-behavior",
        shortHint: "ইভেন্ট হ্যান্ডলারে 'this' পয়েন্টার।"
      }
    ],
    tags: ["JavaScript", "DOM", "Event Delegation", "Event Bubbling", "Performance"]
  },
  {
    id: "immutability-why-it-matters",
    slug: "immutability-why-it-matters",
    question: "Explain immutability and why it matters in JavaScript and React.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Immutability (অপরিবর্তনীয়তা) হলো এমন একটি নীতি যেখানে কোনো ডেটা অবজেক্ট বা অ্যারেকে তৈরি করার পর সরাসরি তার মান পরিবর্তন (mutate) করা যায় না; কোনো পরিবর্তন করতে হলে আসল ডেটাকে অক্ষত রেখে পরিবর্তিত মানসহ সম্পূর্ণ নতুন একটি কপি তৈরি করতে হয়। এটি প্রেডিক্টেবল স্টেট, সাইড-ইফেক্ট প্রতিরোধ এবং React-এর দ্রুত রি-রেন্ডারিং ডিটেকশনের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    easyExplanation: "সহজ ব্যাংকের পাসবুকের মতো বুঝুন:\n১. পাসবুকে আপনি কোনো পুরোনো এন্ট্রি রবার দিয়ে মুছে এডিট করতে পারেন না (No Mutation).\n২. নতুন কোনো টাকা জমা হলে বা খরচ হলে নিচে একটি সম্পূর্ণ নতুন লাইন যোগ হয় (New State).\n৩. ফলে ব্যাংকে কোনো গরমিল হয় না এবং অতীতে কী ঘটেছিল তার সম্পূর্ণ হিস্ট্রি (Time travel debugging) নিখুঁত থাকে।\n\nকেন React-এ এটি জরুরি?\nReact চেক করে `oldState === newState` কি না (Fast Shallow Comparison)। আপনি যদি আসল অবজেক্ট মিউটেট করেন, তবে অবজেক্টের মেমরি অ্যাড্রেস একই থাকে, ফলে React মনে করে কিছুই বদলায়নি এবং স্ক্রিন আপডেট (Re-render) করে না!",
    interviewAnswer: "Immutability is a design pattern where data structures cannot be modified after their creation. Instead of mutating an existing object/array in-place, you create a new copy incorporating the changes. In modern JavaScript and React, immutability is vital because: 1. It enables predictable state management and eliminates unintended side-effects, 2. It allows blazing-fast reference comparisons (Object.is / ===) for change detection instead of expensive deep recursive comparisons, and 3. It facilitates time-travel debugging and undo/redo capabilities.",
    detailedExplanation: {
      whatItIs: "স্টেটকে অপরিবর্তনীয় রেখে পিউর ফাংশন ও কপিয়িং মেথডোলজি দিয়ে অ্যাপ্লিকেশন স্টেট ম্যানেজ করার পদ্ধতি।",
      whyItExists: "শেয়ার্ড মিউটেবল স্টেট সফটওয়্যার ডেভেলপমেন্টে সবথেকে বেশি হিডেন বাগ ও সাইড-ইফেক্ট তৈরি করে।",
      howItWorks: "Primitive ডেটা (string, number, boolean) জাভাস্ক্রিপ্টে ডিফল্টভাবেই immutable। Reference টাইপ (objects, arrays) mutable হওয়ায় স্প্রেড অপারেটর (`...`), `map`, `filter`, `slice` বা Immer লাইব্রেরি দিয়ে ইমিউটেবল প্যাটার্ন বজায় রাখা হয়।",
      whenToUse: "React `useState`, Redux Reducers, Zustand এবং সমস্ত স্টেট ম্যানেজমেন্ট সিস্টেমে।",
      keyPoints: [
        "Prevents bugs from shared mutable references.",
        "Enables O(1) shallow reference comparison (`prevProps !== nextProps`).",
        "Required for React State updates (`setUsers([...users, newUser])`)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ❌ ভুল: Mutable approach (React রি-রেন্ডার ট্রিগার নাও হতে পারে)
const state = { user: { name: "Shuvo", points: 100 } };
state.user.points = 150; // In-place mutation! Reference remains the same.

// ✅ সঠিক: Immutable approach (Spreading & Creating New Copy)
const updatedState = {
  ...state,
  user: {
    ...state.user,
    points: 150 // New object reference created!
  }
};

console.log(state === updatedState); // false (React instantly detects state change!)
console.log(state.user.points);      // 100 (Original state safe)
console.log(updatedState.user.points); // 150`,
      explanationSteps: [
        {
          step: 1,
          title: "ইন-প্লেস মিউটেশনের ঝুঁকি",
          description: "state.user.points সরাসরি পরিবর্তন করলে পূর্বের স্টেটের রেকর্ড নষ্ট হয়ে যায় এবং রেফারেন্স একই থাকে।"
        },
        {
          step: 2,
          title: "ইমিউটেবল স্প্রেডিং",
          description: "নতুন অবজেক্ট রেফারেন্স তৈরি হওয়ায় React নিমেষেই state !== updatedState ডিটেক্ট করে UI আপডেট করতে পারে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React.memo & PureComponent",
        description: "React.memo প্রপস কম্প্যারিজনে `prevProps === nextProps` চেক করে অপ্রয়োজনীয় রি-রেন্ডার থামায়।"
      },
      {
        title: "Redux Time-Travel Debugger",
        description: "প্রতিটি অ্যাকশনের আগের এবং পরের স্টেট রেকর্ড করে রিওয়াইন্ড ও ফাস্ট-ফরওয়ার্ড করার ক্ষমতা।"
      }
    ],
    interviewTips: {
      tip: "বলুন: 'Immutability allows React to do fast O(1) reference checks instead of slow recursive deep comparisons'. এই একটি বাক্যই ইন্টারভিউয়ারের মন জয় করতে যথেষ্ট।",
      deliveryStrategy: "সংজ্ঞা -> React-এর O(1) রেফারেন্স চেক সুবিধা -> সাইড-ইফেক্ট নির্মূল -> কোড উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "Immutability মানে const ভ্যারিয়েবল ব্যবহার করা।",
          right: "const শুধু ভ্যারিয়েবল রি-অ্যাসাইন হওয়া আটকায়; অবজেক্টের অভ্যন্তরীণ প্রোপার্টি মিউটেশন আটকায় না।"
        }
      ]
    },
    quickRevision: [
      "Immutability = আসল ডেটা পরিবর্তন না করে নতুন কপি তৈরি করা।",
      "React shallow reference comparison (`old === new`) দিয়ে নিমেষে স্টেট চেঞ্জ বোঝে।",
      "সাইড-ইফেক্ট দূর করে এবং Time-travel debugging সহজ করে।",
      "টুলস: Spread operator (`...`), `map/filter`, `structuredClone`, `Immer`।"
    ],
    followUpQuestions: [
      {
        question: "What is the difference between shallow copy and deep copy?",
        targetId: "shallow-copy-vs-deep-copy",
        shortHint: "কপিয়িং মেকানিজম।"
      },
      {
        question: "What are pure functions?",
        targetId: "pure-functions-concept",
        shortHint: "ইমিউটেবিলিটির সাথে পিউর ফাংশনের সম্পর্ক।"
      }
    ],
    tags: ["JavaScript", "React", "Immutability", "Performance", "State Management"]
  },
  {
    id: "pure-functions-concept",
    slug: "pure-functions-concept",
    question: "What are pure functions and why are they important?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Pure Function হলো এমন একটি ফাংশন যা দুটি শর্ত মেনে চলে: ১. একই ইনপুট (আর্গুমেন্ট) দিলে তা সবসময় একই আউটপুট রিটার্ন করবে (Deterministic), এবং ২. ফাংশনটির কোনো সাইড-ইফেক্ট (Side-effect) থাকবে না (যেমন গ্লোবাল ভ্যারিয়েবল পরিবর্তন না করা, DOM মিউটেট না করা, বা নেটওয়ার্ক রিকোয়েস্ট না চালানো)।",
    easyExplanation: "সহজ ক্যালকুলেটরের মতো বুঝুন:\n১. ক্যালকুলেটরে `2 + 3` টিপলে আজ, কাল বা ১০ বছর পর চাপলেও আউটপুট সবসময় `5` আসবে।\n২. এটি যোগ করার সময় বাইরের কোনো ফ্যান চালু করবে না বা কারোর ওয়ালেট থেকে টাকা কাটবে না (No side effects)।\n\nImpure Function কী?\n- যে ফাংশনে `Math.random()`, `Date.now()`, বা বাইরের ভ্যারিয়েবল বদলানোর কাজ থাকে, সেগুলো Impure কারণ প্রতিবার কল করলে ভিন্ন ফল আসতে পারে বা বাইরের জিনিস প্রভাবিত হতে পারে।",
    interviewAnswer: "A Pure Function is a function that satisfies two fundamental rules: 1. Determinism: Given the same arguments, it will always return the exact same output, and 2. No Side Effects: It does not modify any state outside its scope (e.g., no mutating arguments, no changing global variables, no I/O, no DOM modifications, and no API calls). Pure functions are critical in modern software engineering because they are predictable, easily testable, highly cacheable (memoizable), and form the bedrock of React component rendering and Redux reducers.",
    detailedExplanation: {
      whatItIs: "ফাংশনাল প্রোগ্রামিংয়ের ভিত্তিপ্রস্তর যা কোডের প্রেডিক্টেবিলিটি নিশ্চিত করে।",
      whyItExists: "ফাংশনের ভেতর হিডেন স্টেট বা এনভায়রনমেন্টের ওপর নির্ভরশীলতা দূর করে কোড টেস্ট এবং রিফ্যাক্টরিং সহজ করতে।",
      howItWorks: "ফাংশন শুধু তার প্যারামিটারের ইনপুট নেয়, লোকালভাবে ক্যালকুলেশন করে এবং রেজাল্ট রিটার্ন করে।",
      whenToUse: "React Components (যা প্রপস নিয়ে JSX দেয়), Redux Reducers, Utility helper functions এবং Memoized ক্যালকুলেশনে।",
      keyPoints: [
        "Same Input -> Always Same Output.",
        "Zero Side-Effects (No mutation, No I/O, No Globals).",
        "Referential Transparency: Function call can be replaced by its result without breaking anything.",
        "Easily testable (No mock dependencies required)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ✅ Pure Function (প্রেডিক্টেবল ও সাইড-ইফেক্ট মুক্ত)
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
console.log(calculateTax(100, 0.15)); // সবসময় 15 আসবে

// ❌ Impure Function 1 (সাইড-ইফেক্ট: বাইরের অ্যারে মিউটেট করছে)
const cart = [];
function addToCartImpure(item) {
  cart.push(item); // Modifies external variable!
}

// ✅ Pure Alternative (ইমিউটেবল ও পিউর)
function addToCartPure(currentCart, item) {
  return [...currentCart, item]; // Returns new array, touches nothing outside
}

// ❌ Impure Function 2 (নন-ডিটারমিনিস্টিক: প্রতিবার আউটপুট বদলে যায়)
function generateOrderId() {
  return "ORD-" + Math.random() + "-" + Date.now();
}`,
      explanationSteps: [
        {
          step: 1,
          title: "ডিটারমিনিস্টিক পিউর ফাংশন",
          description: "calculateTax ইনপুটের বাইরে কোনো কিছুর ওপর নির্ভর করে না এবং কোনো বাহ্যিক পরিবর্তন ঘটায় না।"
        },
        {
          step: 2,
          title: "ইমপিউর মিউটেশন বনাম পিউর সলিউশন",
          description: "addToCartPure বাইরের কার্ট না বদলে নতুন কপি রিটার্ন করায় এটি সম্পূর্ণ পিউর।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Component Rendering",
        description: "React আশা করে কম্পোনেন্টের রেন্ডার লজিক যেন পিউর থাকে: `(props) => JSX`।"
      },
      {
        title: "Memoization & Caching",
        description: "যেহেতু একই ইনপুটে একই রেজাল্ট আসে, তাই ভারী ক্যালকুলেশন `useMemo` দিয়ে মেমোইজ করা যায়।"
      }
    ],
    interviewTips: {
      tip: "'Referential Transparency' এবং 'Memoization'-এর সুবিধা উল্লেখ করুন।",
      deliveryStrategy: "২টি শর্ত (Deterministic + No Side-Effects) -> Pure বনাম Impure কোড উদাহরণ -> React/Redux-এ গুরুত্ব তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "সব ফাংশনই পিউর হওয়া উচিত।",
          right: "অ্যাপ্লিকেশনে সাইড-ইফেক্ট (API কল, ডেটাবেস রাইট, DOM আপডেট) লাগবেই, তবে সেগুলোকে আইসোলেটেড বা আলাদা করে বাকি বিজনেস লজিক পিউর রাখাই লক্ষ্য।"
        }
      ]
    },
    quickRevision: [
      "Pure Function = Same Input -> Same Output + Zero Side Effects.",
      "কোনো গ্লোবাল ভ্যারিয়েবল বা আর্গুমেন্ট মিউটেট করে না।",
      "Math.random() বা Date.now() থাকলে ফাংশন Impure হয়ে যায়।",
      "সুবিধা: 100% Testable, Predictable, Memoizable (useMemo/Cache friendly)।"
    ],
    followUpQuestions: [
      {
        question: "Explain immutability and why it matters.",
        targetId: "immutability-why-it-matters",
        shortHint: "ইমিউটেবিলিটি ও পিউর ফাংশন।"
      }
    ],
    tags: ["JavaScript", "Functional Programming", "Pure Functions", "React", "Redux"]
  }
];
