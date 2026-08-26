import { Question } from "@/types";

export const javascriptFunctionsQuestions: Question[] = [
  {
    id: "js-closure-and-memory-leaks",
    slug: "js-closure-and-memory-leaks",
    question: "What is a closure, and when does it cause memory leaks?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Closure হলো JavaScript-এর এমন একটি বৈশিষ্ট্য যেখানে একটি inner function তার outer function-এর lexical scope-এর ভ্যারিয়েবলগুলোকে মনে রাখতে এবং অ্যাক্সেস করতে পারে, এমনকি outer function-এর execution শেষ হয়ে Call Stack থেকে মুছে যাওয়ার পরেও। যদি দীর্ঘমেয়াদী অবজেক্ট বা DOM ইভেন্টে অপ্রয়োজনীয় ক্লোজার রেফারেন্স আটকে রাখা হয়, তবে Garbage Collector মেমরি ফ্রি করতে পারে না এবং মেমরি লিক সৃষ্টি হয়।",
    easyExplanation: "সহজভাবে বুঝুন:\n১. সাধারণত কোনো ফাংশন রান হওয়া শেষ হলে তার ভেতরের ভ্যারিয়েবলগুলো মেমরি থেকে মুছে যায়।\n২. কিন্তু যদি আউটার ফাংশনের ভেতরে আরেকটি ইনার ফাংশন থাকে এবং ইনার ফাংশন বাইরের কোনো ভ্যারিয়েবল ব্যবহার করে রিটার্ন হয়ে আসে, তবে JS ইঞ্জিন ওই ভ্যারিয়েবলগুলোকে মুছতে পারে না।\n৩. ইনার ফাংশনটি তার সাথে করে বাইরের পরিবেশের একটা 'স্মৃতি বা ব্যাকপ্যাক' সাথে নিয়ে বেঁচে থাকে। এই পুরো প্যাকেজটাকে বলে Closure।\n\nকখন মেমরি লিক হয়?\n- ধরুন ক্লোজারের ভেতরে অনেক বড় একটা অ্যারে বা ডেটা অবজেক্ট আছে যা আর কখনো ব্যবহার হবে না, কিন্তু ইনার ফাংশনটি কোনো গ্লোবাল ইভেন্ট লিসেনারে যুক্ত হয়ে রয়ে গেছে। তখন Garbage Collector ওই মেমরি পরিষ্কার করতে পারে না।",
    interviewAnswer: "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment). It allows an inner function to access an outer function's scope even after the outer function has executed and returned. While closures enable powerful patterns like data encapsulation, private state, and memoization, they can cause memory leaks when unnecessary or large references in the lexical environment are retained in global variables, long-lived timers, or unremoved DOM event listeners.",
    detailedExplanation: {
      whatItIs: "ফাংশন এবং তার লেক্সিক্যাল এনভায়রনমেন্ট রেফারেন্সের সমন্বিত রূপ যা মেমরিতে সংরক্ষিত থাকে।",
      whyItExists: "জাভাস্ক্রিপ্টে অবজেক্ট ওরিয়েন্টেড ল্যাঙ্গুয়েজের মতো প্রাইভেট ভেরিয়েবল ও স্টেট ক্যাপসুলিংয়ের সুবিধা দিতে এবং ফাংশন ফ্যাক্টরি ও রিয়্যাক্ট হুকস তৈরি করতে।",
      howItWorks: "যখন একটি ফাংশন তৈরি হয়, তার ইন্টারনাল `[[Environment]]` প্রোপার্টিতে বর্তমান লেক্সিক্যাল এনভায়রনমেন্ট সেভ হয়। আউটার ফাংশন রিটার্ন করার পরও ইনার ফাংশনের রেফারেন্স জীবিত থাকলে Garbage Collector ওই লেক্সিক্যাল এনভায়রনমেন্ট মেমরি থেকে রিমুভ করে না।",
      whenToUse: "React useState/useEffect হুকস, ডেটা এনক্যাপসুলেশন (Data hiding), ফাংশন ফ্যাক্টরি, কারিং এবং মেমোইজেশনে।",
      keyPoints: [
        "Closure remembers its lexical scope.",
        "Private variables তৈরিতে সাহায্য করে (যেখানে সরাসরি বাইরে থেকে এক্সেস বন্ধ রাখা যায়)।",
        "Memory Leak প্রতিরোধে অব্যবহৃত ইভেন্ট লিসেনার রিমুভ করতে হয় এবং রেফারেন্সে `null` সেট করতে হয়।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. বেসিক ক্লোজার ও প্রাইভেট কাউন্টার
function createCounter() {
  let count = 0; // Private state (সরাসরি বাইরে থেকে পরিবর্তন করা অসম্ভব)

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(count); // ReferenceError: count is not accessible

// ২. মেমরি লিকের ঝুঁকি ও সমাধান
function setupLeak() {
  const hugeData = new Array(1000000).fill("⚠️ Large Memory");

  // এই ক্লোজারটি গ্লোবাল উইন্ডোতে আটকে থেকে মেমরি লিক ঘটাতে পারে
  window.leakHandler = function() {
    console.log(hugeData.length);
  };
}

// সমাধান: প্রয়োজন শেষে ইভেন্ট রিমুভ বা নাল করা
function cleanup() {
  window.leakHandler = null; // মেমরি ফ্রি করে দেওয়া হলো
}`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রাইভেট স্টেট ইনিশিয়ালাইজেশন",
          description: "createCounter কল হয়ে শেষ হয়ে গেলেও count ভ্যারিয়েবলটি মেমরিতে সংরক্ষিত থাকে।"
        },
        {
          step: 2,
          title: "ইনার মেথড এক্সেস",
          description: "increment ও getCount মেথড দুটি ক্লোজারের মাধ্যমে count-কে মডিফাই ও রিড করতে পারে।"
        },
        {
          step: 3,
          title: "মেমরি ক্লিনআপ প্যাটার্ন",
          description: "গ্লোবাল বা দীর্ঘমেয়াদী রেফারেন্স নাল করার মাধ্যমে Garbage Collector-কে মেমরি রিক্লেইম করতে দেওয়া হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React useState Hook",
        description: "রিয়্যাক্টের কম্পোনেন্ট বারবার রি-রেন্ডার হলেও useState হুক ক্লোজারের মাধ্যমেই কম্পোনেন্টের পূর্বের স্টেট ধরে রাখে।"
      },
      {
        title: "Debounce Function",
        description: "একটি টাইমার আইডি ক্লোজারে ধরে রেখে বারবার দ্রুত ইভেন্ট ফায়ারিং ঠেকানো।"
      }
    ],
    interviewTips: {
      tip: "কখনোই শুধু বলবেন না 'ফাংশনের ভেতরে ফাংশন থাকাকে ক্লোজার বলে'। বলবেন: 'ইনার ফাংশন যখন আউটার ফাংশন শেষ হওয়ার পরও তার লেক্সিক্যাল স্কোপ মনে রাখে' — এটি পারফেক্ট উত্তর।",
      deliveryStrategy: "সংজ্ঞা -> প্রাইভেট স্টেটের ব্যবহার -> রিয়্যাক্ট হুকের উদাহরণ -> মেমরি লিক ও ক্লিনআপ স্ট্র্যাটেজি।",
      avoidSaying: [
        {
          wrong: "Closure means a function inside another function.",
          right: "Closure is an inner function bundled with its lexical environment that retains access to outer variables even after execution."
        }
      ]
    },
    quickRevision: [
      "Closure = ফাংশন + তার লেক্সিক্যাল এনভায়রনমেন্টের মেমরি রেফারেন্স।",
      "Outer ফাংশন শেষ হয়ে গেলেও Inner ফাংশন ভ্যারিয়েবল এক্সেস করতে পারে।",
      "মূল ব্যবহার: Data Encapsulation, React Hooks, Debouncing.",
      "মেমরি লিক প্রতিরোধ: অব্যবহৃত ক্লোজার রেফারেন্স নাল (null) করুন ও Event Listener রিমুভ করুন।"
    ],
    followUpQuestions: [
      {
        question: "Explain lexical scoping with an example.",
        targetId: "lexical-scoping-example",
        shortHint: "লেক্সিক্যাল স্কোপিং কীভাবে কাজ করে।"
      },
      {
        question: "Difference between debounce and throttle.",
        targetId: "debounce-vs-throttle",
        shortHint: "ক্লোজার ভিত্তিক পারফরম্যান্স অপটিমাইজেশন।"
      }
    ],
    tags: ["JavaScript", "Functions", "Closure", "Memory Leak", "Scope"]
  },
  {
    id: "function-declaration-vs-expression",
    slug: "function-declaration-vs-expression",
    question: "Difference between function declaration and function expression.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Function Declaration সম্পূর্ণ বডিসহ Hoist হয়, যার ফলে এটি কোডে লেখার আগেই কল করা যায়। আর Function Expression একটি ভ্যারিয়েবলের মধ্যে ফাংশন অ্যাসাইন করে তৈরি করা হয়, যা ভ্যারিয়েবলের হোস্টিং নিয়ম মেনে চলে এবং এক্সিকিউশন লাইনে পৌঁছানোর আগে কল করা যায় না।",
    easyExplanation: "সহজ তুলনা:\n\n১. Function Declaration (ঘোষণামূলক):\n- ফরম্যাট: `function add() { ... }`\n- সুবিধা: আপনি ফাইলের যেকোনো জায়গায় (এমনকি উপরেও) একে কল করতে পারেন কারণ JS ইঞ্জিন শুরুতেই পুরো ফাংশন মেমরিতে রেখে দেয়।\n\n২. Function Expression (এক্সপ্রেশন বা ভ্যারিয়েবলে রাখা):\n- ফরম্যাট: `const add = function() { ... }` বা Arrow function `const add = () => { ... }`\n- নিয়ম: যতক্ষণ না কোড ওই লাইনে পৌঁছাবে, ততক্ষণ ফাংশন তৈরি হবে না। আগে কল করতে গেলে এরর খাবেন।",
    interviewAnswer: "A Function Declaration is a standalone statement that is fully hoisted with its definition to the top of its scope, meaning it can be invoked before it is defined in the source code. A Function Expression is when a function is assigned to a variable (e.g., const fn = function() {}). Function expressions follow the hoisting rules of the variable used (let/const remain in TDZ; var is undefined), so they can only be invoked after the execution reaches the assignment line.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্টে ফাংশন সংজ্ঞায়িত করার দুটি ভিন্ন সিনট্যাক্টিক্যাল এবং বিহেভিওরাল উপায়।",
      whyItExists: "ডিক্লেয়ারেশন কোড স্ট্রাকচারিং সহজ করে, অন্যদিকে এক্সপ্রেশন ফাংশনকে ফার্স্ট-ক্লাস সিটিজেন হিসেবে আর্গুমেন্টে পাস করা, কন্ডিশনাল ফাংশন তৈরি করা ও অ্যানোনিমাস ফাংশন ব্যবহারের সুবিধা দেয়।",
      howItWorks: "JS ইঞ্জিনের ক্রিয়েশন ফেজে ডিক্লেয়ারেশন সরাসরি মেমরিতে ফাংশন অবজেক্ট হিসেবে বাইন্ড হয়। আর এক্সপ্রেশনের ক্ষেত্রে কেবল ভ্যারিয়েবলটি hoist হয় (uninitialized/undefined), এক্সিকিউশন ফেজে অ্যাসাইনমেন্ট লাইনে আসার পর ফাংশন অবজেক্ট তৈরি হয়।",
      whenToUse: "গ্লোবাল বা মডিউল-লেভেল হেল্পার ফাংশনের জন্য Declaration চমৎকার। আর Callback, IIFE, Arrow function, এবং অবজেক্টের মেথড ডায়নামিকালি পাস করতে Expression সেরা।",
      keyPoints: [
        "Declaration: Hoisted with body (can call before).",
        "Expression: Not hoisted with body (calling before causes TypeError/ReferenceError).",
        "Expressions can be anonymous or named for better stack traces."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Function Declaration (উপরে কল করা সম্ভব)
console.log(calculateSum(5, 10)); // Output: 15
function calculateSum(a, b) {
  return a + b;
}

// ২. Function Expression (উপরে কল করলে এরর)
try {
  console.log(multiply(5, 10)); // ❌ ReferenceError!
  const multiply = function(a, b) {
    return a * b;
  };
} catch (e) {
  console.log(e.message); // Cannot access 'multiply' before initialization
}

// ৩. Named Function Expression (Stack Trace-এর জন্য ভালো)
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // ভেতরের নাম 'fact' রিকার্শনে ব্যবহার করা যায়
};
console.log(factorial(5)); // 120`,
      explanationSteps: [
        {
          step: 1,
          title: "ডিক্লেয়ারেশন হোস্টিং",
          description: "calculateSum ডিফাইন করার আগেই এক্সিকিউট হয়েছে কারণ ইঞ্জিন পুরো ফাংশন মেমরিতে তুলে নিয়েছিল।"
        },
        {
          step: 2,
          title: "এক্সপ্রেশন টিডিজেড",
          description: "multiply ভ্যারিয়েবলটি const হওয়ায় ইনিশিয়ালাইজেশন লাইনের আগে কল করায় ReferenceError হয়েছে।"
        },
        {
          step: 3,
          title: "নেমড এক্সপ্রেশন সুবিধা",
          description: "fact নামটি ডিবাগিং স্ট্যাক ট্রেস এবং সেলফ-রিকার্শনে সাহায্য করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Component vs Helper",
        description: "অনেকে React কম্পোনেন্ট `export default function App()` ডিক্লেয়ারেশনে লেখেন এবং ইভেন্ট হ্যান্ডলার `const handleClick = () => {}` এক্সপ্রেশনে লেখেন।"
      },
      {
        title: "Conditional Function Assignment",
        description: "রানটাইম কন্ডিশন বা ব্রাউজার সাপোর্টের ওপর ভিত্তি করে ভ্যারিয়েবলে ভিন্ন ভিন্ন ফাংশন অ্যাসাইন করা।"
      }
    ],
    interviewTips: {
      tip: "পার্থক্য বলার সময় 'Hoisting' এবং 'Runtime Assignment' এই দুটি বিষয় স্পষ্ট করে তুলে ধরুন।",
      deliveryStrategy: "সিনট্যাক্স -> হোস্টিং বিহেভিয়ার -> কোড উদাহরণ দিয়ে শেষ করুন।",
      avoidSaying: [
        {
          wrong: "দুটির মধ্যে কোনো পার্থক্য নেই, শুধু লেখার স্টাইল আলাদা।",
          right: "সিনট্যাক্সের পাশাপাশি হোস্টিং এবং রানটাইম এক্সিকিউশন টাইমিংয়ে এদের মৌলিক পার্থক্য রয়েছে।"
        }
      ]
    },
    quickRevision: [
      "Declaration: function name() {} -> পুরো বডিসহ Hoist হয় (Safe to call before).",
      "Expression: const name = function() {} -> ভ্যারিয়েবলের হোস্টিং নিয়ম মানে (Cannot call before).",
      "Arrow Functions সবসময় Function Expression.",
      "Named Function Expressions ডিবাগিংয়ে ভালো স্ট্যাক ট্রেস দেয়।"
    ],
    followUpQuestions: [
      {
        question: "Explain hoisting for var, let, const, and function declarations.",
        targetId: "hoisting-var-let-const-functions",
        shortHint: "হোস্টিং মেকানিজমের গভীরে।"
      },
      {
        question: "How does this behave in normal vs arrow functions?",
        targetId: "this-keyword-behavior",
        shortHint: "অ্যারো ফাংশনে 'this' এর আচরণ।"
      }
    ],
    tags: ["JavaScript", "Functions", "Hoisting", "Syntax"]
  },
  {
    id: "this-keyword-behavior",
    slug: "this-keyword-behavior",
    question: "How does this behave in: normal functions, arrow functions, and event handlers?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Normal Function-এ `this` নির্ধারিত হয় ফাংশনটি কীভাবে এবং কোথা থেকে কল করা হয়েছে তার ওপর (Runtime context)। Arrow Function-এর নিজস্ব কোনো `this` নেই, এটি তার আশেপাশের Lexical Scope থেকে `this` ধার করে। আর DOM Event Handler-এ `this` সাধারণত যে এলিমেন্টে ইভেন্ট লিসেনারটি যুক্ত করা হয়েছে (current target) তাকে নির্দেশ করে।",
    easyExplanation: "সহজ নিয়মে বুঝুন:\n\n১. Normal Function (ডায়নামিক):\n- যে অবজেক্ট দিয়ে কল করবেন, `this` হবে সেই অবজেক্ট।\n- যেমন: `user.greet()` হলে `this` হবে `user`।\n- সরাসরি `greet()` কল করলে নন-স্ট্রিক্ট মোডে `window/global` এবং স্ট্রিক্ট মোডে `undefined` হবে।\n\n২. Arrow Function (লেক্সিক্যাল বা ধার করা):\n- নিজের কোনো `this` নেই। সে জন্ম নেওয়ার সময় তার আশেপাশের স্কোপে যে `this` ছিল, সেটাই চিরকাল ধরে রাখে। `call/apply/bind` দিয়েও তার `this` বদলানো যায় না।\n\n৩. DOM Event Handler:\n- সাধারণ ফাংশন দিলে `this` হবে যে HTML বাটনে ক্লিক করেছেন সেই বাটন এলিমেন্ট।\n- অ্যারো ফাংশন দিলে বাইরের উইন্ডো বা প্যারেন্ট কম্পোনেন্ট `this` হিসেবে পাবে।",
    interviewAnswer: "In JavaScript, 'this' refers to the execution context of a function call. In Normal Functions, 'this' is dynamically bound at runtime depending on how the function is invoked (e.g., method call -> parent object; standalone call -> window in non-strict or undefined in strict mode; constructor -> new instance). In Arrow Functions, 'this' is lexically bound, inheriting 'this' from the enclosing execution context at the time of creation. In DOM Event Handlers with standard function callbacks, 'this' automatically points to the DOM element that received the event (event.currentTarget).",
    detailedExplanation: {
      whatItIs: "JavaScript রানটাইমে কোড এক্সিকিউশনের বর্তমান সাবজেক্ট অবজেক্টের পয়েন্টার।",
      whyItExists: "একই ফাংশন বা মেথড যাতে একাধিক অবজেক্টে শেয়ার করে ব্যবহার করা যায় এবং অবজেক্ট ওরিয়েন্টেড স্টাইলে কোড রিইউজ করা যায়।",
      howItWorks: "৪টি নিয়মে `this` নির্ধারিত হয়:\n১. New Binding: `new MyClass()` -> নতুন তৈরি হওয়া ইনস্ট্যান্স।\n২. Explicit Binding: `.call()`, `.apply()`, `.bind()` দিয়ে সরাসরি পাস করা অবজেক্ট।\n৩. Implicit Binding: `obj.myFunc()` -> `obj` অবজেক্ট।\n৪. Default Binding: সরাসরি `myFunc()` -> `window` (বা `undefined` in strict mode)।\nঅ্যারো ফাংশন এই ৪ নিয়মের বাইরে—সে লেক্সিক্যাল এনভায়রনমেন্ট থেকে `this` নেয়।",
      whenToUse: "React Class Component বা ইভেন্ট হ্যান্ডলারে 'this' লস হওয়া ঠেকাতে Arrow Functions বা `.bind()` ব্যবহৃত হয়।",
      keyPoints: [
        "Normal Functions have dynamic `this`.",
        "Arrow Functions have lexical `this` (cannot be changed via bind/call/apply).",
        "DOM Event callbacks (regular func) point to `event.currentTarget`.",
        "Strict mode prevents global object pollution by setting standalone `this` to undefined."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const user = {
  name: "Shuvo",
  // ১. Normal Method
  regularGreet() {
    console.log("Normal:", this.name);
  },
  // ২. Arrow Method
  arrowGreet: () => {
    console.log("Arrow:", this.name); // Lexical 'this' (window/undefined)
  },
  // ৩. Nested Function Problem & Arrow Solution
  printDelayed() {
    setTimeout(function() {
      // console.log("Delayed normal:", this.name); // ❌ undefined (standalone call)
    }, 100);

    setTimeout(() => {
      console.log("Delayed arrow:", this.name); // ✅ "Shuvo" (inherits from printDelayed)
    }, 100);
  }
};

user.regularGreet(); // Normal: Shuvo
user.arrowGreet();   // Arrow: undefined
user.printDelayed();  // Delayed arrow: Shuvo

// ৪. DOM Event Listener Example
const btn = document.querySelector("#myBtn");
if (btn) {
  btn.addEventListener("click", function() {
    console.log(this); // <button id="myBtn"> (button element)
  });

  btn.addEventListener("click", () => {
    console.log(this); // window (lexical enclosing scope)
  });
}`,
      explanationSteps: [
        {
          step: 1,
          title: "ইমপ্লিসিট মেথড কল",
          description: "user.regularGreet() কল করায় ডটের আগের অবজেক্ট user হলো regularGreet-এর this।"
        },
        {
          step: 2,
          title: "অ্যারো ফাংশনে লেক্সিক্যাল স্কোপ",
          description: "arrowGreet একটি অবজেক্ট লিটারেলে ডিফাইন করা, তাই তার লেক্সিক্যাল প্যারেন্ট হলো গ্লোবাল স্কোপ (যেখানে name undefined)।"
        },
        {
          step: 3,
          title: "নেস্টেড সেট-টাইমআউটে সমাধান",
          description: "setTimeout-এর ভেতর অ্যারো ফাংশন ব্যবহার করায় সে printDelayed মেথডের user this-কে সফলভাবে ধরে রেখেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Class Components",
        description: "ক্লাস কম্পোনেন্টে `this.handleClick = this.handleClick.bind(this)` অথবা অ্যারো ফাংশন ক্লাস ফিল্ড সিনট্যাক্স ব্যবহার করে this ধরে রাখা।"
      },
      {
        title: "Library Method Chaining",
        description: "jQuery বা Lodash বা কাস্টম ক্লাসে `return this;` দিয়ে ফ্লুয়েন্ট API মেথড চেইনিং তৈরি করা।"
      }
    ],
    interviewTips: {
      tip: "৪টি বাইন্ডিং রুল (New, Explicit, Implicit, Default) উল্লেখ করুন। ইন্টারভিউয়াররা এটি খুব পছন্দ করেন।",
      deliveryStrategy: "Normal Function (Dynamic) -> Arrow Function (Lexical) -> DOM Event Listener (Element) -> Strict Mode পার্থক্য পরিষ্কার করুন।",
      avoidSaying: [
        {
          wrong: "this সবসময় যে অবজেক্টের ভেতর লেখা হয়েছে তাকেই পয়েন্ট করে।",
          right: "Normal ফাংশনে this নির্ভর করে কল করার পদ্ধতির ওপর, আর অ্যারো ফাংশনে লেক্সিক্যাল প্যারেন্ট স্কোপের ওপর।"
        }
      ]
    },
    quickRevision: [
      "Normal Function: Dynamic this (নির্ভর করে কল করার ওপর; obj.fn() -> obj)।",
      "Arrow Function: Lexical this (আশেপাশের স্কোপ থেকে নেয়, bind দিয়েও বদলানো যায় না)।",
      "Event Listener (Normal): this = event.currentTarget (যে বাটনে ক্লিক হয়েছে)।",
      "Strict Mode: Standalone ফাংশন কলে this = undefined (নন-স্ট্রিক্টে window)।"
    ],
    followUpQuestions: [
      {
        question: "Explain bind, call, and apply with use cases.",
        targetId: "bind-call-apply",
        shortHint: "এক্সপ্লিসিটলি this বাইন্ড করার উপায়।"
      }
    ],
    tags: ["JavaScript", "this keyword", "Arrow Functions", "Event Handling", "Context"]
  },
  {
    id: "bind-call-apply",
    slug: "bind-call-apply",
    question: "Explain bind, call, and apply with use cases.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "`call` এবং `apply` কোনো ফাংশনকে একটি নির্দিষ্ট `this` কনটেক্সট এবং আর্গুমেন্ট দিয়ে সাথে সাথে (immediately) এক্সিকিউট করে। পার্থক্য হলো `call` আর্গুমেন্ট নেয় কমা দিয়ে আলাদা করে (`arg1, arg2`), আর `apply` আর্গুমেন্ট নেয় অ্যারে আকারে (`[arg1, arg2]`)। আর `bind` সাথে সাথে ফাংশন রান না করে একটি নির্দিষ্ট `this` সহ নতুন একটি ফাংশন রিটার্ন করে, যা ভবিষ্যতে যেকোনো সময় কল করা যায়।",
    easyExplanation: "মনে রাখার সহজ টেকনিক:\n\n১. call (C = Comma):\n- ফাংশন সাথে সাথে চালাবে। আর্গুমেন্ট কমা দিয়ে লিখবেন।\n- `greet.call(person, 'Hello', '!')`\n\n২. apply (A = Array):\n- ফাংশন সাথে সাথে চালাবে। কিন্তু আর্গুমেন্ট ব্র্যাকেটে অ্যারে আকারে পাঠাতে হবে।\n- `greet.apply(person, ['Hello', '!'])`\n\n৩. bind (B = Bound function for later):\n- সাথে সাথে চালাবে না। একটি নতুন ফাংশন বানিয়ে দেবে যাতে 'this' ফিক্সড করা থাকে। আপনি পরে যেকোনো সময় কল করতে পারবেন।\n- `const boundGreet = greet.bind(person); boundGreet('Hello', '!');`",
    interviewAnswer: "call, apply, and bind are methods available on Function.prototype used to explicitly set the 'this' context of a function. 'call' invokes the function immediately, accepting arguments individually separated by commas. 'apply' also invokes the function immediately, but accepts arguments as a single array. 'bind' does not invoke the function immediately; instead, it returns a new function with the specified 'this' context and optional preset parameters (function currying), which can be called later.",
    detailedExplanation: {
      whatItIs: "ফাংশনের `this` ভ্যালুকে ম্যানুয়ালি এবং এক্সপ্লিসিটলি কন্ট্রোল করার জন্য ৩টি প্রোটোটাইপ মেথড।",
      whyItExists: "মেথড বরোয়িং (অন্য অবজেক্টের ফাংশন নিজের অবজেক্টে চালানো), ফাংশন কারিং এবং কলব্যাক বা ইভেন্ট হ্যান্ডলারে 'this' ফিক্সড রাখার জন্য।",
      howItWorks: "JS ইঞ্জিন ইন্টারনালি ফাংশনের এক্সিকিউশন কনটেক্সট তৈরির সময় পাস করা প্রথম আর্গুমেন্ট অবজেক্টটিকে `this` হিসেবে অ্যাসাইন করে।",
      whenToUse: "Math.max-এ অ্যারে পাস করতে apply (বা আধুনিক স্প্রেড `...`), অবজেক্টের মেথড অন্য ডেটায় ধার নিতে call, এবং React ইভেন্ট হ্যান্ডলারে মেথড বাইন্ড করতে bind।",
      keyPoints: [
        "call(thisArg, arg1, arg2, ...) -> Immediate Execution.",
        "apply(thisArg, [argsArray]) -> Immediate Execution with Array.",
        "bind(thisArg, arg1, ...) -> Returns a new bounded function.",
        "আধুনিক ES6 স্প্রেড অপারেটর আসার পর apply-এর প্রয়োজনীয়তা অনেক কমে গেছে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const developer1 = {
  name: "Shuvo",
  role: "Full Stack Engineer"
};

const developer2 = {
  name: "Rahim",
  role: "Frontend Engineer"
};

function introduce(greeting, punctuation) {
  console.log(\`\${greeting}, I am \${this.name}, working as a \${this.role}\${punctuation}\`);
}

// ১. call (কমা দিয়ে আর্গুমেন্ট)
introduce.call(developer1, "Hello", "!");
// Output: "Hello, I am Shuvo, working as a Full Stack Engineer!"

// ২. apply (অ্যারে দিয়ে আর্গুমেন্ট)
introduce.apply(developer2, ["Hi there", "."]);
// Output: "Hi there, I am Rahim, working as a Frontend Engineer."

// ৩. bind (ভবিষ্যতে ব্যবহারের জন্য নতুন ফাংশন)
const introduceShuvo = introduce.bind(developer1, "Welcome");
introduceShuvo(" 🎉");
// Output: "Welcome, I am Shuvo, working as a Full Stack Engineer 🎉"`,
      explanationSteps: [
        {
          step: 1,
          title: "call মেথড কল",
          description: "developer1 অবজেক্টকে this বানিয়ে সাথে সাথে introduce ফাংশন রান করেছে।"
        },
        {
          step: 2,
          title: "apply মেথড কল",
          description: "আর্গুমেন্ট লিস্ট অ্যারে ['Hi there', '.'] আকারে পাস করা হয়েছে।"
        },
        {
          step: 3,
          title: "bind মেথড কল",
          description: "নতুন ফাংশন introduceShuvo তৈরি হয়েছে যা পরবর্তীতে কল করার সময়ও developer1 কেই this হিসেবে ধরে রেখেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Method Borrowing",
        description: "সাধারণ অ্যারে লাইক অবজেক্টে Array মেথড ধার নেওয়া: `Array.prototype.slice.call(arguments)`।"
      },
      {
        title: "React Event Handlers",
        description: "ক্লাস কম্পোনেন্টে কনস্ট্রাক্টরের ভেতরে `this.submit = this.submit.bind(this)`।"
      }
    ],
    interviewTips: {
      tip: "কখনোই ভুলবেন না: 'call ও apply সাথে সাথে চালায়, কিন্তু bind নতুন ফাংশন দেয় যা পরে চালানো যায়'।",
      deliveryStrategy: "পার্থক্য ছক আকারে বা ৩টি বুলেট পয়েন্টে বলুন, তারপর একটি মেথড বরোয়িংয়ের উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "bind সাথে সাথে ফাংশন রান করে দেয়।",
          right: "bind সাথে সাথে রান করে না, এটি একটি নতুন বাইন্ডেড ফাংশন রিটার্ন করে যা ভবিষ্যতে ইনভোক করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "call: সাথে সাথে চালায়, আর্গুমেন্ট কমা দিয়ে (Comma).",
      "apply: সাথে সাথে চালায়, আর্গুমেন্ট অ্যারে দিয়ে (Array).",
      "bind: সাথে সাথে চালায় না, নতুন ফাংশন বানায় (Bound Function).",
      "সবগুলোই এক্সপ্লিসিট 'this' বাইন্ডিংয়ের জন্য ব্যবহৃত হয়।"
    ],
    followUpQuestions: [
      {
        question: "What is currying and why is it useful?",
        targetId: "currying-and-usefulness",
        shortHint: "bind বা ক্লোজার দিয়ে পার্শিয়াল অ্যাপ্লিকেশন।"
      }
    ],
    tags: ["JavaScript", "Functions", "bind", "call", "apply", "this"]
  },
  {
    id: "currying-and-usefulness",
    slug: "currying-and-usefulness",
    question: "What is currying and why is it useful?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "Currying হলো ফাংশনাল প্রোগ্রামিংয়ের একটি টেকনিক যেখানে একাধিক আর্গুমেন্ট নেওয়া একটি ফাংশনকে রূপান্তর করে এমন একটি চেইন অব ফাংশনে পরিণত করা হয়, যার প্রতিটি ফাংশন একবারে মাত্র একটি আর্গুমেন্ট গ্রহণ করে (যেমন `f(a, b, c)` রূপান্তর হয়ে `f(a)(b)(c)` হয়)। এটি কোড রিইউজ, পার্শিয়াল অ্যাপ্লিকেশন এবং কনফিগারেশন তৈরিতে অত্যন্ত দরকারি।",
    easyExplanation: "সহজ উদাহরণ দিয়ে বুঝুন:\nসাধারণত আমরা ফাংশনে সব তথ্য একসাথে পাঠাই: `discount(0.2, 100)` -> 80 টাকা।\n\nকারিং টেকনিকে আমরা ফাংশনটাকে ভেঙে ফেলি:\n১. প্রথমে ডিসকাউন্টের হার দিই: `const tenPercentDiscount = discount(0.1)`\n২. এরপর যত প্রোডাক্ট আসবে, শুধু তার দাম দেব: `tenPercentDiscount(500)` -> 450 টাকা, `tenPercentDiscount(1000)` -> 900 টাকা।\n\nঅর্থাৎ, একটা ফাংশন আরেকটা ফাংশন রিটার্ন করে করে আর্গুমেন্টগুলো জমিয়ে রাখে এবং সব আর্গুমেন্ট পাওয়ার পর ফাইনাল রেজাল্ট দেয়।",
    interviewAnswer: "Currying is an advanced functional programming technique of transforming a function that takes multiple arguments into a sequence of nested unary functions (functions that take a single argument). Instead of taking all arguments at once like f(a, b, c), it evaluates f(a)(b)(c). Currying is useful for Partial Application, creating specialized reusable helper functions, improving code composability, and handling event callbacks with custom parameters.",
    detailedExplanation: {
      whatItIs: "একাধিক প্যারামিটারের ফাংশনকে সিঙ্গেল প্যারামিটার ফাংশন চেইনে রূপান্তর করার মেকানিজম।",
      whyItExists: "ফাংশনাল প্রোগ্রামিংয়ে লজিক কম্পোজিশন সহজ করতে, সাধারণ ফাংশন থেকে স্পেশালাইজড ফাংশন জেনারেট করতে এবং আর্গুমেন্টগুলোকে ধাপে ধাপে ভ্যালিডেট করতে।",
      howItWorks: "ক্লোজারের সাহায্যে প্রতিটি ফাংশন তার পূর্ববর্তী আর্গুমেন্টগুলোকে মেমরিতে ধরে রাখে। যখন শেষ আর্গুমেন্টটি সরবরাহ করা হয়, তখন মূল লজিকটি ক্যালকুলেট হয়ে রিটার্ন করে।",
      whenToUse: "লগিং সিস্টেম (যেমন `logger('DEBUG')('Database connection failed')`), রিঅ্যাক্ট ইভেন্ট হ্যান্ডলারে প্যারামিটার পাস করতে, এবং Redux Middleware তৈরিতে।",
      keyPoints: [
        "f(a, b, c) -> f(a)(b)(c)",
        "Closure-এর মেমরি রিটেনশনের ওপর নির্ভর করে তৈরি।",
        "Partial Application তৈরি করতে সাহায্য করে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সাধারণ নন-কারাইড ফাংশন
const sendNotification = (type, user, message) => {
  return \`[\${type.toUpperCase()}] To: \${user} -> \${message}\`;
};

// ২. কারাইড ফাংশন (Curried with Arrow Functions)
const curriedNotification = (type) => (user) => (message) => {
  return \`[\${type.toUpperCase()}] To: \${user} -> \${message}\`;
};

// ৩. রিইউজেবল স্পেশালাইজড ফাংশন তৈরি
const sendEmailAlert = curriedNotification("EMAIL");
const sendToAdmin = sendEmailAlert("admin@company.com");

console.log(sendToAdmin("Database memory 90% full!"));
// Output: "[EMAIL] To: admin@company.com -> Database memory 90% full!"

console.log(sendToAdmin("New User Signup!"));
// Output: "[EMAIL] To: admin@company.com -> New User Signup!"`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রথম কনফিগারেশন লেয়ার",
          description: "curriedNotification('EMAIL') কল করে টাইপ ফিক্সড করে একটি নতুন ফাংশন তৈরি করা হলো।"
        },
        {
          step: 2,
          title: "দ্বিতীয় টার্গেট লেয়ার",
          description: "sendEmailAlert('admin@company.com') কল করে ইউজার ফিক্সড করে স্পেশালাইজড ফাংশন তৈরি করা হলো।"
        },
        {
          step: 3,
          title: "ফাইনাল এক্সিকিউশন",
          description: "এখন যেকোনো মেসেজ পাঠালেই পূর্বে সেভ থাকা EMAIL এবং admin@company.com যুক্ত হয়ে আউটপুট পাওয়া যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Redux Middleware Architecture",
        description: "Redux-এর মিডলওয়্যার কারিং প্যাটার্নে লেখা হয়: `const logger = store => next => action => { ... }`।"
      },
      {
        title: "React Event Handlers with IDs",
        description: "লিস্ট আইটেমে আইডি পাস করতে: `<button onClick={handleDelete(item.id)}>Delete</button>` যেখানে `handleDelete = id => event => { ... }`।"
      }
    ],
    interviewTips: {
      tip: "কারিংয়ের ব্যবহার হিসেবে Redux Middleware বা React onClick হ্যান্ডলারের বাস্তব ব্যবহারের কথা বললে ইন্টারভিউয়ার বুঝবেন আপনি প্রোডাকশনে এটি ব্যবহার করেছেন।",
      deliveryStrategy: "সংজ্ঞা `f(a)(b)` -> ক্লোজারের ভূমিকা -> রিয়েল ওয়ার্ল্ড লগিং বা ইভেন্ট হ্যান্ডলারের উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "কারিং মানে শুধু অনেকগুলো নেস্টেড ফাংশন লেখা।",
          right: "কারিং হলো মাল্টি-আর্গুমেন্ট ফাংশনকে সিঙ্গেল-আর্গুমেন্ট ফাংশন সিকোয়েন্সে রূপান্তর করা যা পার্শিয়াল অ্যাপ্লিকেশন তৈরিতে সাহায্য করে।"
        }
      ]
    },
    quickRevision: [
      "Currying: f(a, b, c) -> f(a)(b)(c)।",
      "একবারে ১টি আর্গুমেন্ট গ্রহণ করে পরবর্তী ফাংশন রিটার্ন করে।",
      "ক্লোজারের সাহায্যে আর্গুমেন্ট মনে রাখে।",
      "সুবিধা: Reusable specialized functions তৈরি, Partial application, Cleaner composition।"
    ],
    followUpQuestions: [
      {
        question: "What is function composition?",
        targetId: "function-composition",
        shortHint: "একাধিক ফাংশনকে পাইপলাইনে যুক্ত করা।"
      }
    ],
    tags: ["JavaScript", "Functional Programming", "Currying", "Closures"]
  },
  {
    id: "function-composition",
    slug: "function-composition",
    question: "What is function composition?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "Function Composition হলো এমন একটি কৌশল যেখানে দুই বা ততোধিক ছোট ছোট পিউর ফাংশনকে একত্রিত করে একটি নতুন জটিল ফাংশন তৈরি করা হয়, যেখানে একটি ফাংশনের আউটপুট স্বয়ংক্রিয়ভাবে পরবর্তী ফাংশনের ইনপুট হিসেবে প্রবেশ করে (যেমন `f(g(x))` বা `pipe(f, g)(x)`।",
    easyExplanation: "সহজ কারখানার অ্যাসেম্বলি লাইনের মতো ভাবুন:\nধরুন আপনি একটি টেক্সট প্রসেস করবেন:\n১. প্রথমে টেক্সটের স্পেস ট্রিম করবেন (`trim`)\n২. এরপর সব বড় হাতের অক্ষরে রূপান্তর করবেন (`toUpperCase`)\n৩. এরপর শেষে একটা এক্সক্লেমেশন মার্ক যোগ করবেন (`addExclamation`)\n\nসাধারণ নিয়মে আমরা লিখি: `addExclamation(toUpperCase(trim(str)))` যা পড়া খুব কঠিন।\n\nFunction Composition বা Pipe দিয়ে আমরা সুন্দর পাইপলাইন বানিয়ে ফেলি:\n`const formatText = compose(addExclamation, toUpperCase, trim)`\nএখন শুধু `formatText('  hello  ')` কল করলেই ধাপে ধাপে সব প্রসেস হয়ে বের হয়ে আসবে!",
    interviewAnswer: "Function composition is a mathematical and functional programming pattern of combining two or more pure functions to produce a new function. Executing the composed function is equivalent to passing the result of one function as the argument to the next, usually denoted as f(g(x)) or via pipeline utilities (compose/pipe). This promotes modularity, testability, and separation of concerns by building complex workflows from simple, single-purpose functions.",
    detailedExplanation: {
      whatItIs: "ছোট ছোট ইউনারি (সিঙ্গেল ইনপুট) পিউর ফাংশন জোড়া লাগিয়ে জটিল বিজনেস লজিক পাইপলাইন বানানোর টেকনিক।",
      whyItExists: "কোডের রিইউজেবিলিটি বাড়াতে, ডেটা মিউটেশন এড়াতে এবং বড় বড় ফাংশনকে সহজে টেস্টেবল ছোট ছোট ইউনিটে ভাগ রাখতে।",
      howItWorks: "Compose ফাংশন সাধারণত ডান থেকে বামে (Right-to-Left: `f(g(x))`) এবং Pipe ফাংশন বাম থেকে ডানে (Left-to-Right: `g -> f`) `Array.prototype.reduce` ব্যবহার করে ডেটা ফ্লো নিয়ন্ত্রণ করে।",
      whenToUse: "ডেটা ট্রান্সফর্মেশন পাইপলাইন, ফর্ম ভ্যালিডেশন চেইনিং এবং মিডলওয়্যার আর্কিটেকচারে।",
      keyPoints: [
        "Compose: Right-to-Left evaluation (Mathematical notation: (f ∘ g)(x) = f(g(x))).",
        "Pipe: Left-to-Right evaluation (More natural for developers: first -> then -> then).",
        "Pure functions এবং Immutability থাকা বাধ্যতামূলক।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. ছোট ছোট পিউর ফাংশন
const trim = (str) => str.trim();
const toLower = (str) => str.toLowerCase();
const wrapInTag = (tag) => (str) => \`<\${tag}>\${str}</\${tag}>\`;

// ২. কাস্টম Pipe ফাংশন (Left to Right)
const pipe = (...fns) => (x) => fns.reduce((value, fn) => fn(value), x);

// ৩. কাস্টম Compose ফাংশন (Right to Left)
const compose = (...fns) => (x) => fns.reduceRight((value, fn) => fn(value), x);

// ৪. পাইপলাইন তৈরি
const createSlugTag = pipe(
  trim,
  toLower,
  wrapInTag("span")
);

console.log(createSlugTag("   JavaScript Interview Prep   "));
// Output: "<span>javascript interview prep</span>"`,
      explanationSteps: [
        {
          step: 1,
          title: "সিঙ্গেল পারপাস ফাংশন",
          description: "trim, toLower এবং wrapInTag প্রত্যেকে তাদের নিজস্ব একক দায়িত্ব পালন করে।"
        },
        {
          step: 2,
          title: "pipe ইমপ্লিমেন্টেশন",
          description: "Array.reduce ব্যবহার করে প্রথম ফাংশনের আউটপুট দ্বিতীয়টিতে এবং এভাবে ক্রমানুসারে ডেটা পাস করা হয়েছে।"
        },
        {
          step: 3,
          title: "ক্লিন রিইউজেবল কোড",
          description: "createSlugTag ফাংশনটি এখন যেকোনো স্ট্রিংয়ের জন্য একটি সম্পূর্ণ ডেটা ট্রান্সফর্মেশন পাইপলাইন হিসেবে কাজ করছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Express / Redux Middleware",
        description: "Redux-এর `applyMiddleware(thunk, logger)` ইন্টারনালি `compose` ফাংশন ব্যবহার করে অ্যাকশন ডিসপ্যাচ পাইপলাইন তৈরি করে।"
      },
      {
        title: "Lodash / Ramda Utilities",
        description: "ডেভেলপাররা জটিল ডেটা প্রসেসিংয়ে `lodash/fp.flow` বা `ramda.compose` ব্যবহার করেন।"
      }
    ],
    interviewTips: {
      tip: "Compose (Right-to-Left) বনাম Pipe (Left-to-Right)-এর পার্থক্য উল্লেখ করুন। Array.reduce দিয়ে কীভাবে pipe তৈরি করতে হয় তা ২ লাইনে লিখে দিলে ইন্টারভিউয়ার অত্যন্ত খুশি হবেন।",
      deliveryStrategy: "সংজ্ঞা `f(g(x))` -> Pipe বনাম Compose পার্থক্য -> `reduce` দিয়ে ইমপ্লিমেন্টেশন ও রিয়েল ওয়ার্ল্ড ডেটা পাইপলাইনের উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "ফাংশন কম্পোজিশন মানে অনেকগুলো ফাংশন পরপর কল করা।",
          right: "এটি একটি ফাংশনের রেজাল্ট সরাসরি পরবর্তী ফাংশনের আর্গুমেন্ট হিসেবে পাস করে নতুন একটি সম্মিলিত ফাংশন তৈরি করার মেকানিজম।"
        }
      ]
    },
    quickRevision: [
      "Function Composition = f(g(x)) (Combining pure functions).",
      "Compose: Right-to-Left (গণিত স্টাইল).",
      "Pipe: Left-to-Right (ডেভেলপার ফ্রেন্ডলি স্টাইল: input -> fn1 -> fn2).",
      "ইমপ্লিমেন্ট করা হয় `Array.reduce` বা `reduceRight` দিয়ে।"
    ],
    followUpQuestions: [
      {
        question: "What are pure functions?",
        targetId: "pure-functions-concept",
        shortHint: "ফাংশন কম্পোজিশনের পূর্বশর্ত।"
      }
    ],
    tags: ["JavaScript", "Functional Programming", "Composition", "Pipe", "Reduce"]
  }
];
