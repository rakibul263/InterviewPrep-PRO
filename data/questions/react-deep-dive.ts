import { Question } from "@/types";

export const reactDeepDiveQuestions: Question[] = [
  // 1. React Basics & Workflow
  {
    id: "react-basics-and-workflow",
    slug: "react-basics-and-workflow",
    question: "What is React, why was it invented, what is its declarative component-based workflow, and what are its key features?",
    category: "React",
    categorySlug: "react",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "React হলো মেটা (Facebook) দ্বারা উদ্ভাবিত একটি ওপেন-সোর্স ডিক্লারেটিভ, কম্পোনেন্ট-বেসড জাভাস্ক্রিপ্ট লাইব্রেরি যা হাই-পারফরম্যান্স ইউজার ইন্টারফেস (UI) তৈরির জন্য ব্যবহৃত হয়। প্রথাগত DOM ম্যানিপুলেশনের জটিলতা ও স্লো পারফরম্যান্স দূর করতে এবং 'State পরিবর্তনের সাথে সাথে UI নিজে থেকেই নির্ভুলভাবে আপডেট হবে'—এই ধারণা বাস্তবায়ন করতে React তৈরি হয়।",
    easyExplanation:
      "React-এর মৌলিক ভিত্তি ও কাজের ধারা সহজ ভাষায়:\n\n১. **কেন React উদ্ভাবন করা হয়েছিল?**\n- ভ্যানিলা জাভাস্ক্রিপ্ট বা jQuery-তে DOM আপডেট করতে `document.getElementById()` বা `innerHTML` দিয়ে ম্যানুয়ালি প্রতিটি এলিমেন্ট খুঁজতে হতো। অ্যাপ্লিকেশন বড় হলে কে কখন কোন DOM পরিবর্তন করছে তা ট্র্যাক করা অসম্ভব হয়ে পড়ত (Spaghetti Code)।\n- ফেসবুকের নোটিফিকেশন কাউন্টার ও চ্যাট সিস্টেমের মতো রিয়েল-টাইম ইন্টারফেস সহজে হ্যান্ডেল করতে মেটা React তৈরি করে।\n\n২. **Component-Based Architecture (কম্পোনেন্ট ভিত্তিক কাঠামো)**:\n- সম্পূর্ণ ওয়েবসাইটকে ছোট ছোট স্বাধীন ও রি-ইউজেবল ব্লকে (যেমন: Navbar, SearchBar, ProductCard) ভাগ করা হয়। এর ফলে কোড মেইনটেইন ও টেস্ট করা অত্যন্ত সহজ হয়।\n\n৩. **Declarative UI (ডিক্লারেটিভ বনাম ইম্পারেটিভ)**:\n- **ইম্পারেটিভ (কীভাবে করতে হবে)**: 'বাটনে ক্লিক হলে ক্লাস রিমুভ করো, নতুন এলিমেন্ট বানাও, টেক্সট ঢোকাও'।\n- **ডিক্লারেটিভ (কী দেখতে চাই)**: 'যদি `isLoggedIn === true` হয়, তবে ড্যাশবোর্ড দেখাও; নাহলে লগইন ফর্ম দেখাও'। পেছনের আসল DOM ম্যানিপুলেশন React নিজে স্বয়ংক্রিয়ভাবে করে।\n\n৪. **মূল বৈশিষ্ট্যসমূহ (Key Features)**:\n- **Virtual DOM**: দ্রুত UI রেন্ডারিং ও অপ্টিমাইজড DOM প্যাচিং।\n- **JSX**: জাভাস্ক্রিপ্টের মধ্যে HTML-এর মতো লেখার সুবিধা।\n- **Unidirectional Data Flow**: প্যারেন্ট থেকে চাইল্ডে একমুখী ডেটা প্রবাহ যা কোডকে প্রেডিক্টেবল রাখে।\n- **Rich Ecosystem & Hooks**: স্টেট ম্যানেজমেন্ট ও সাইড-ইফেক্ট নিয়ন্ত্রণের শক্তিশালী ব্যবস্থা।",
    interviewAnswer:
      "React is a declarative, component-driven JavaScript library designed for building rich and scalable user interfaces. It was created by Meta in 2013 to resolve the severe state-synchronization bottlenecks of imperative DOM manipulation. In React, UIs are broken down into self-contained, reusable components. Instead of telling the browser step-by-step how to manipulate the DOM, developers declaratively describe what the UI should look like for any given state. React manages state transitions via its Virtual DOM, computing minimal DOM mutations through efficient reconciliation.",
    detailedExplanation: {
      whatItIs:
        "একটি লাইব্রেরি (ফ্রেমওয়ার্ক নয়) যা ফ্রন্টএন্ড অ্যাপ্লিকেশনের View Layer হ্যান্ডেল করে।",
      whyItExists:
        "ম্যানুয়াল DOM অপারেশনের পারফরম্যান্স ঘাটতি, ল্যাগ এবং জটিল স্প্যাগেটি কোড দূর করতে।",
      howItWorks:
        "কম্পোনেন্টের স্টেট বা প্রপস পরিবর্তন হলে React মেমরিতে নতুন Virtual DOM তৈরি করে, Diffing অ্যালগরিদম দিয়ে পরিবর্তন বের করে এবং শুধুমাত্র পরিবর্তিত অংশ আসল ব্রাউজার DOM-এ পাঠায়।",
      whenToUse:
        "সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA), জটিল ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড এবং রিয়েল-টাইম ওয়েব অ্যাপে।",
      keyPoints: [
        "React একটি Library, পূর্ণাঙ্গ Framework নয়।",
        "Declarative: স্টেট অনুযায়ী UI-এর আউটপুট সংজ্ঞায়িত হয়।",
        "Unidirectional Data Flow: ডেটা সবসময় একমুখী (Parent -> Child) প্রবাহিত হয়।",
        "Component Reusability: একই কম্পোনেন্ট বিভিন্ন স্থানে রি-ইউজ করা যায়।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `// ডিক্লারেটিভ ও কম্পোনেন্ট-বেসড উদাহরণ
function NotificationBadge({ count, label }) {
  // ডিক্লারেটিভ রেন্ডারিং: স্টেট/প্রপস অনুযায়ী কী দেখানো হবে তা ঘোষণা করছি
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium text-slate-700">{label}</span>
      {count > 0 ? (
        <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">
          {count} New
        </span>
      ) : (
        <span className="text-slate-400 text-xs">No updates</span>
      )}
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Declarative condition",
          description: "count > 0 অনুযায়ী ব্যাজ রেন্ডার হচ্ছে, কোনো ম্যানুয়াল DOM ইনসার্ট বা রিমুভ কল করতে হচ্ছে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Social Media Feed & Notifications",
        description: "নতুন নোটিফিকেশন আসলে পুরো পেজ রিফ্রেশ না হয়ে স্বয়ংক্রিয়ভাবে শুধুমাত্র নোটিফিকেশন কাউন্টার ব্যাজ আপডেট হওয়া।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'React is a library focused purely on the View layer, utilizing Declarative UI and Component Reusability to make complex UIs predictable.'",
      deliveryStrategy: "Imperative vs Declarative এর পার্থক্য উদাহরণ সহ সংক্ষেপে তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "React একটি ফুলস্ট্যাক ফ্রেমওয়ার্ক যেমন Angular বা Django।",
          right: "React একটি ভিউ-লেয়ার লাইব্রেরি; ফুলস্ট্যাকের জন্য Next.js বা Remix ব্যবহৃত হয়।",
        },
      ],
    },
    quickRevision: [
      "React = Declarative UI + Component-Based + Virtual DOM + One-Way Data Flow.",
      "Meta দ্বারা ২০১৩ সালে ওপেন সোর্স করা হয়।",
      "ইম্পারেটিভ DOM ম্যানিপুলেশন দূর করে স্টেট-ড্রিভেন UI নিশ্চিত করে।",
    ],
    followUpQuestions: [
      {
        question: "React কেন একটি Framework নয়, বরং Library?",
        shortHint: "কারণ React শুধু View লেয়ার নিয়ন্ত্রণ করে; রাউটিং বা সার্ভার কলের জন্য বাহ্যিক লাইব্রেরি প্রয়োজন হয়।",
      },
    ],
    tags: ["React", "Basics", "Declarative UI", "Component Architecture", "Virtual DOM"],
  },

  // 2. Components & JSX
  {
    id: "react-components-and-jsx",
    slug: "react-components-and-jsx",
    question: "What are Components in React (Functional vs Class Components) and how does JSX work under the hood?",
    category: "React",
    categorySlug: "react",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "React-এ কম্পোনেন্ট হলো UI-এর স্বতন্ত্র ও পুনঃব্যবহারযোগ্য বিল্ডিং ব্লক। বর্তমানে জাভাস্ক্রিপ্ট ফাংশন ও হুক্স ব্যবহার করে **Functional Components** তৈরি করা স্ট্যান্ডার্ড। **JSX (JavaScript XML)** হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন, যা কম্পাইলার (Babel/SWC) দ্বারা `React.createElement()` অথবা আধুনিক `_jsx()` ফাংশন কলে রূপান্তরিত হয়ে ভার্চুয়াল ডম অবজেক্ট তৈরি করে।",
    easyExplanation:
      "১. **Functional vs Class Components**:\n- **Functional Component**: সাধারণ জাভাস্ক্রিপ্ট ফাংশন যা প্রপস গ্রহণ করে JSX রিটার্ন করে। React 16.8-এ Hooks আসার পর ফাংশনাল কম্পোনেন্টেই স্টেট, লাইফসাইকেল ও সাইড-ইফেক্ট হ্যান্ডেল করা যায়। এটি পড়তে সহজ এবং পারফরম্যান্সে দ্রুত।\n- **Class Component**: ES6 ক্লাস ভিত্তিক কম্পোনেন্ট যা `React.Component` এক্সটেন্ড করে এবং `render()` মেথড ব্যবহার করে। স্টেট হ্যান্ডেল করতে `this.state` ও `this.setState` লাগত। বর্তমানে এটি লেগ্যাসি (Legacy)।\n\n২. **JSX কী এবং কীভাবে কাজ করে?**:\n- ব্রাউজার সরাসরি JSX (`<div>Hello</div>`) বুঝতে পারে না।\n- Babel বা SWC কম্পাইলার JSX-কে সাধারণ জাভাস্ক্রিপ্ট ফাংশন কলে ট্রান্সপাইল করে:\n  ```js\n  // JSX:\n  const element = <h1 className=\"title\">Hello</h1>;\n  \n  // Transpiled JavaScript:\n  const element = React.createElement('h1', { className: 'title' }, 'Hello');\n  ```\n- এই ফাংশনটি একটি প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট (React Element) রিটার্ন করে, যা Virtual DOM-এর নোড হিসেবে ব্যবহৃত হয়।",
    interviewAnswer:
      "Components are the modular building blocks of a React application. While Class components relied on ES6 classes and verbose lifecycle methods, modern React uses Functional Components powered by Hooks for state and side-effect management. JSX is a syntax extension that allows developers to write HTML-like structures inside JavaScript. Under the hood, compilers like Babel or SWC transform JSX into `React.createElement()` or React 17's new JSX transform runtime (`jsx()`/`jsxs()`), producing plain JavaScript objects (React Elements) that describe the Virtual DOM tree.",
    detailedExplanation: {
      whatItIs:
        "Functional Component হলো স্টেটফুল UI ফাংশন; JSX হলো UI ডিক্লেয়ার করার সিনট্যাক্স সুগার।",
      whyItExists:
        "জাভাস্ক্রিপ্টের লজিক এবং মার্কআপ একই সাথে কো-লোকেট করতে এবং রিডেবিলিটি বৃদ্ধি করতে।",
      howItWorks:
        "JSX -> Babel/SWC Transpilation -> `jsx(type, props, children)` -> JavaScript Object Tree (Virtual DOM Node) -> Browser DOM Rendering.",
      whenToUse:
        "সব আধুনিক React অ্যাপ্লিকেশনে ফাংশনাল কম্পোনেন্ট এবং JSX ব্যবহার করা হয়।",
      keyPoints: [
        "JSX কোনো স্ট্রিং বা সরাসরি HTML নয়; এটি ট্রান্সপাইল হয়ে জাভাস্ক্রিপ্ট অবজেক্ট তৈরি করে।",
        "Functional Components কোডবেসকে সংক্ষিপ্ত, টেস্টেবল এবং হুক্স-ফ্রেন্ডলি করে।",
        "React 17+ থেকে JSX লেখার জন্য ফাইলে `import React from 'react'` লিখতে হয় না।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `// ১. Functional Component with Hooks
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded">
      <p>Current Count: {count}</p>
      <button 
        onClick={() => setCount((prev) => prev + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

// ২. JSX ট্রান্সপাইলের পেছনে কী ঘটে:
// <p>Current Count: {count}</p>
// রূপান্তরিত হয়:
// React.createElement("p", null, "Current Count: ", count);`,
      explanationSteps: [
        {
          step: 1,
          title: "Functional simplicity",
          description: "this বাইন্ডিং ছাড়া সরাসরি হুক্স দিয়ে স্টেট ম্যানেজ করা যাচ্ছে।",
        },
        {
          step: 2,
          title: "JSX Transpilation",
          description: "JSX সরাসরি ব্রাউজারে রান করে না, বিল্ড টাইমে React.createElement অবজেক্টে পরিণত হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Reusable UI Library Components",
        description: "একটি Button বা Modal কম্পোনেন্ট তৈরি করে পুরো অ্যাপ্লিকেশনে বিভিন্ন প্রপস (variant, size, onClick) দিয়ে পুনঃব্যবহার করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'JSX is syntax sugar for React.createElement(). It creates React Elements, which are lightweight JavaScript objects describing what should appear on screen.'",
      deliveryStrategy: "Class Component কেন বাদ দিয়ে Functional Component গ্রহণ করা হলো (Hooks, this keyword complexity, minification issues) তা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "JSX সরাসরি ব্রাউজারে এক্সিকিউট হয়।",
          right: "JSX ব্রাউজারে চলার আগে Babel বা SWC দ্বারা সাধারণ জাভাস্ক্রিপ্ট ফাংশন কলে ট্রান্সপাইল হতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Functional Components + Hooks হলো আধুনিক React-এর স্ট্যান্ডার্ড।",
      "JSX = React.createElement() সিনট্যাক্স সুগার।",
      "React Element হলো একটি প্লেইন অবজেক্ট: `{ type: 'div', props: { ... } }`।",
    ],
    followUpQuestions: [
      {
        question: "React 17-এর New JSX Transform কী সুবিধা নিয়ে এসেছে?",
        shortHint: "ফাইলে `import React from 'react'` লেখার প্রয়োজন দূর করেছে এবং বান্ডেল সাইজ সামান্য কমিয়েছে।",
      },
    ],
    tags: ["React", "Components", "JSX", "Functional Components", "Class Components"],
  },

  // 3. Virtual DOM, Diffing & Reconciliation
  {
    id: "virtual-dom-diffing-algorithm-and-reconciliation",
    slug: "virtual-dom-diffing-algorithm-and-reconciliation",
    question: "What is the Virtual DOM, how does React use it, how does the Diffing Algorithm and Reconciliation work, and what are their limitations?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Virtual DOM (VDOM)** হলো আসল ব্রাউজার DOM-এর একটি হালকা মেমরি অবজেক্ট রিপ্রেজেন্টেশন। স্টেট পরিবর্তিত হলে React একটি নতুন VDOM ট্রি তৈরি করে এবং **Reconciliation** প্রক্রিয়ায় হিউরিস্টিক **Diffing Algorithm (O(n))** ব্যবহার করে আগের ট্রির সাথে তুলনা করে। এরপর শুধুমাত্র যেটুকু পরিবর্তন দরকার, সেটুকু ব্যাচ আকারে আসল ব্রাউজার DOM-এ প্যাচ করে।",
    easyExplanation:
      "আসল ব্রাউজার DOM আপডেট করা অত্যন্ত ব্যয়বহুল (Slow), কারণ প্রতিটি পরিবর্তনে ব্রাউজারকে Style Calculation, Layout Reflow ও Repaint করতে হয়।\n\n**React যেভাবে দ্রুত কাজ করে (৩টি ধাপ)**:\n১. **Virtual DOM**: জাভাস্ক্রিপ্ট অবজেক্ট হিসেবে পুরো UI-এর একটি কপি মেমরিতে রাখে।\n২. **Diffing Algorithm**: স্টেট বদলালে নতুন VDOM তৈরি হয় এবং React দুটি ট্রির মধ্যে তুলনা করে:\n   - **Element Type চেক**: যদি এলিমেন্টের টাইপ আলাদা হয় (যেমন `<div>` থেকে `<span>`), পুরো সাব-ট্রি ধ্বংস করে নতুন বানায়।\n   - **Same Type চেক**: টাইপ একই থাকলে শুধু পরিবর্তিত অ্যাট্রিবিউট বা স্টাইল আপডেট করে।\n   - **Keys চেক**: লিস্টের ক্ষেত্রে `key` প্রপ দেখে কোন আইটেমটি নতুন, মুছে গেছে বা স্থান পরিবর্তন করেছে তা নিখুঁতভাবে শনাক্ত করে।\n৩. **Reconciliation (পুনর্মিলন)**: হিসাব করা ন্যূনতম পরিবর্তনগুলো ব্রাউজারের আসল DOM-এ একবারে অ্যাপ্লাই করে।\n\n**সীমাবদ্ধতা ও সমস্যা (Limitations)**:\n- **লিস্টে Key না দেওয়া বা Index ব্যবহার**: ইনডেক্স (`index`) কি হিসেবে দিলে রি-অর্ডারিং বা ডিলিটের সময় ভুল কম্পোনেন্ট রি-রেন্ডার হয় বা স্টেট উল্টোপাল্টা হয়ে যায়।\n- **খুব গভীর নেস্টেড স্ট্রাকচার**: অতিরিক্ত গভীর ট্রিতে মেমরি ব্যবহার ও অবজেক্ট ট্রাভার্সাল ওভারহেড বাড়ে।",
    interviewAnswer:
      "The Virtual DOM is an in-memory lightweight representation of the actual DOM tree. When state or props change, React constructs a new Virtual DOM snapshot. During **Reconciliation**, React applies its **O(n) Heuristic Diffing Algorithm** based on two core assumptions: elements of different types produce completely different trees, and child elements with unique, stable `key` props preserve identity across renders. The calculated delta is then batched and committed to the real DOM in a single pass, minimizing expensive layout reflows and repaints.",
    detailedExplanation: {
      whatItIs:
        "React-এর অপ্টিমাইজড UI রেন্ডারিং ইঞ্জিন ও অ্যালগরিদম।",
      whyItExists:
        "সাধারণ ট্রি ডিফারেন্সিয়েশন অ্যালগরিদমের কমপ্লেক্সিটি O(n³), যা ১০০০ নোডের জন্য বিলিয়ন অপারেশন। React-এর হিউরিস্টিক Diffing এটিকে O(n) লিনিয়ার টাইমে নামিয়ে আনে।",
      howItWorks:
        "Fiber নোড ট্রাভার্সাল -> ডিফারেন্স আইডেন্টিফিকেশন -> Effect List জেনারেশন -> সিনক্রোনাস DOM মিউটেশন।",
      whenToUse:
        "React ইন্টারনালি এটি সব সময় চালায়; ডেভেলপার হিসেবে পারফরম্যান্সের জন্য লিস্টে সঠিক স্ট্যাবল `key` দেওয়া নিশ্চিত করতে হয়।",
      keyPoints: [
        "VDOM ব্রাউজার রিফ্লো ও রিপেইন্ট কমিয়ে দেয়।",
        "Diffing Algorithm কমপ্লেক্সিটি O(n)।",
        "লিস্টে কখনই `key={Math.random()}` বা পরিবর্তনশীল ইনডেক্স ব্যবহার করবেন না।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `// লিস্টে সঠিক Key এর গুরুত্ব
function TodoList({ todos, onRemove }) {
  return (
    <ul>
      {/* ❌ ভুল: key হিসেবে index দিলে ফিল্টারিং বা রি-অর্ডারে বাগ হবে */}
      {/* {todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)} */}

      {/* ✅ সঠিক: স্থায়ী ও ইউনিক আইডি ব্যবহার */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Key matching",
          description: "todo.id দেখে React বুঝতে পারে কোন আইটেমটি স্থানান্তরিত বা ডিলিট হয়েছে, ফলে অপ্রয়োজনীয় DOM রি-ক্রিয়েশন বন্ধ হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Dynamic Data Grid / Table",
        description: "হাজার হাজার সারির টেবিলে নির্দিষ্ট একটি সেলের মান পরিবর্তন হলে পুরো টেবিল রি-রেন্ডার না হয়ে শুধুমাত্র ওই নোডটি আপডেট হওয়া।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Generic tree diffing is O(n^3), but React achieves O(n) linear performance using element-type checking and stable key heuristics.'",
      deliveryStrategy: "কেন `key` হিসেবে অ্যারে ইনডেক্স ব্যবহার করা ঝুঁকিপূর্ণ তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Virtual DOM আসল DOM এর চেয়ে সবসময় দ্রুত কাজ করে।",
          right: "Virtual DOM আসল DOM-এর চেয়ে জাদুকরীভাবে দ্রুত নয়, বরং এটি ন্যূনতম DOM অপারেশন গণনা করে অপ্টিমাইজড ও প্রেডিক্টেবল পারফরম্যান্স দেয়।",
        },
      ],
    },
    quickRevision: [
      "Virtual DOM: মেমরিতে রাখা লাইটওয়েট রিপ্রেজেন্টেশন।",
      "Diffing Algorithm: O(n) টাইমে নতুন ও পুরোনো VDOM তুলনা করে।",
      "Reconciliation: হিসেবকৃত পরিবর্তন আসল DOM-এ একবারে অ্যাপ্লাই করে।",
      "Stable `key` অপরিহার্য।",
    ],
    followUpQuestions: [
      {
        question: "React Fiber কীভাবে Reconciliation-কে ইন্টারাপ্টেবল বানায়?",
        shortHint: "Fiber প্রতিটি নোডকে লিঙ্কড লিস্ট আকারে সাজিয়ে কাজকে ছোট চাঙ্কে ভাগ করে ব্রাউজার আইডল সময়ে প্রসেস করে।",
      },
    ],
    tags: ["React", "Virtual DOM", "Diffing", "Reconciliation", "Keys"],
  },

  // 4. Lifecycle Methods & Functional Lifecycle
  {
    id: "react-lifecycle-phases-and-hooks",
    slug: "react-lifecycle-phases-and-hooks",
    question: "What are the React Lifecycle phases (Mounting, Updating, Unmounting), how are they explained, and how do functional components handle them?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "React কম্পোনেন্টের লাইফসাইকেলে ৩টি প্রধান ফেজ রয়েছে: ১. **Mounting** (DOM-এ কম্পোনেন্ট তৈরি ও ইনসার্ট হওয়া), ২. **Updating** (স্টেট বা প্রপস পরিবর্তনের কারণে পুনরায় রেন্ডার হওয়া), এবং ৩. **Unmounting** (DOM থেকে কম্পোনেন্ট মুছে ফেলা)। Functional Components-এ `useEffect`, `useLayoutEffect`, এবং `useInsertionEffect` হুকের মাধ্যমে এই সমস্ত লাইফসাইকেল মেথড অত্যন্ত কার্যকরভাবে পরিচালিত হয়।",
    easyExplanation:
      "React লাইফসাইকেল মেথডসমূহ এবং Functional কম্পোনেন্টে তাদের রূপান্তর:\n\n১. **Mounting Phase (জন্ম)**:\n- **Class**: `constructor()` -> `render()` -> `componentDidMount()` (API কল বা সাবস্ক্রিপশনের জন্য ব্যবহৃত হতো)।\n- **Functional**: `useEffect(() => { ... }, [])` — খালি ডিপেন্ডেন্সি অ্যারে দিলে এটি শুধুমাত্র প্রথম রেন্ডারের পর একবার চলে।\n\n২. **Updating Phase (বৃদ্ধি/পরিবর্তন)**:\n- **Class**: `shouldComponentUpdate()` -> `render()` -> `componentDidUpdate()`।\n- **Functional**: `useEffect(() => { ... }, [depA, depB])` — যখনই `depA` বা `depB` পরিবর্তিত হবে, ইফেক্টটি আবার এক্সিকিউট হবে।\n\n৩. **Unmounting Phase (মৃত্যু/মুছে ফেলা)**:\n- **Class**: `componentWillUnmount()` (টাইমার বন্ধ করা, ইভেন্ট লিসেনার পরিষ্কার করা)।\n- **Functional**: `useEffect` এর ভেতর রিটার্ন করা Cleanup Function `return () => { clearInterval(...) }`।",
    interviewAnswer:
      "The React component lifecycle consists of three distinct phases: **Mounting** (insertion into the DOM), **Updating** (re-rendering due to state/prop changes), and **Unmounting** (removal from the DOM). In class components, these were handled imperatively via `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. In modern functional components, these phases are declaratively synchronized using `useEffect`. Passing an empty dependency array simulates mounting, adding dependencies handles updating, and returning a cleanup function manages unmounting.",
    detailedExplanation: {
      whatItIs:
        "কম্পোনেন্টের জন্ম থেকে মৃত্যু পর্যন্ত বিভিন্ন ধাপ ও ইভেন্ট হ্যান্ডলিং সিস্টেম।",
      whyItExists:
        "API ডেটা ফেচিং, DOM ম্যানিপুলেশন, টাইমার সেট করা এবং মেমরি লিক প্রতিরোধের জন্য ক্লিনআপ লজিক চালানোর সুযোগ দিতে।",
      howItWorks:
        "React রেন্ডার ও কমিট ফেজের পরে রেজিস্টার্ড ইফেক্ট ও লাইফসাইকেল হুকগুলো ক্রমানুসারে কল করে।",
      whenToUse:
        "সাইড-ইফেক্ট যেমন নেটওয়ার্ক রিকোয়েস্ট, ব্রাউজার ইভেন্ট লিসেনার, লোকাল স্টোরেজ সিঙ্কিংয়ে।",
      keyPoints: [
        "Mounting = Initial DOM render.",
        "Updating = Re-render triggered by state/props/context.",
        "Unmounting = Cleanup & DOM removal.",
        "`useEffect` cleanup function unmount হওয়ার সময় এবং পরবর্তী effect চলার ঠিক আগে রান করে।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useEffect } from "react";

export function WindowResizeWatcher() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // ১. Mounting (componentDidMount)
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // ২. Unmounting / Cleanup (componentWillUnmount)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // খালি অ্যারে = শুধুমাত্র Mount ও Unmount-এ কাজ করবে

  return <p>Window Width: {width}px</p>;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Mounting setup",
          description: "ইভেন্ট লিসেনার যোগ করা হচ্ছে প্রথমবার মাউন্টে।",
        },
        {
          step: 2,
          title: "Unmounting cleanup",
          description: "কম্পোনেন্ট আনমাউন্ট হলে লিসেনার রিমুভ করে মেমরি লিক ঠেকানো হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "WebSocket Chat Connection",
        description: "কম্পোনেন্ট মাউন্টে চ্যাট সকেটে কানেক্ট করা এবং আনমাউন্টে সকেট কানেকশন ক্লোজ ও সাবস্ক্রিপশন বাতিল করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Rather than thinking in terms of Class lifecycles, think in terms of synchronization: useEffect synchronizes the component with an external system.'",
      deliveryStrategy: "Cleanup function কেন প্রয়োজন (মেমরি লিক এড়াতে) তা উদাহরণ দিয়ে বোঝান।",
      avoidSaying: [
        {
          wrong: "useEffect এবং componentDidMount হুবহু একই জিনিস।",
          right: "useEffect মাউন্টিং ছাড়াও স্টেট সিঙ্ক্রোনাইজেশনের জন্য কাজ করে এবং এটি ব্রাউজার পেইন্টের পর অ্যাসিনক্রোনাসলি চলে।",
        },
      ],
    },
    quickRevision: [
      "Mounting: `useEffect(fn, [])`",
      "Updating: `useEffect(fn, [deps])`",
      "Unmounting: `useEffect(() => { return () => cleanup() }, [])`",
      "Cleanup function মেমরি লিক প্রতিরোধ করে।",
    ],
    followUpQuestions: [
      {
        question: "useEffect এর cleanup ফাংশন কখন কখন রান করে?",
        shortHint: "কম্পোনেন্ট আনমাউন্টে এবং ডিপেন্ডেন্সি পরিবর্তন হলে পরবর্তী ইফেক্ট এক্সিকিউট হওয়ার ঠিক আগে।",
      },
    ],
    tags: ["React", "Lifecycle", "Hooks", "useEffect", "Mounting", "Unmounting"],
  },

  // 5. React Fiber & Render vs Commit Phase
  {
    id: "react-fiber-render-phase-commit-phase",
    slug: "react-fiber-render-phase-commit-phase",
    question: "What is React Fiber and how does React update occur across the Render Phase and Commit Phase?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**React Fiber** হলো React 16-এ যুক্ত করা আধুনিক রিকনসিলিয়েশন ইঞ্জিন, যা রেন্ডারিং কাজকে ছোট ছোট চাঙ্কে ভাগ করে বিরতি (Pause), অগ্রাধিকার (Prioritize) এবং পুনরায় শুরু করার ক্ষমতা দেয়। React-এর আপডেট দুটি ধাপে ঘটে: ১. **Render Phase** (অ্যাসিনক্রোনাস ও ইন্টারাপ্টেবল, যেখানে VDOM পরিবর্তন হিসাব করা হয়) এবং ২. **Commit Phase** (সিনক্রোনাস, যেখানে আসল DOM-এ পরিবর্তন অ্যাপ্লাই হয়)।",
    easyExplanation:
      "আগের React-এ (Stack Reconciler) একবার রেন্ডারিং শুরু হলে পুরো ট্রি শেষ না হওয়া পর্যন্ত থামানো যেত না। ফলে ভারী কাজের সময় ব্রাউজার ফ্রিজ হয়ে যেত বা ল্যাগ হতো।\n\n**React Fiber-এর আর্কিটেকচার**:\n- এটি প্রতিটি কম্পোনেন্টকে একটি **Fiber Node** (Linked List ডেটা স্ট্রাকচার) হিসেবে সাজায়।\n- এটি ব্রাউজারের মেইন থ্রেডকে দীর্ঘ সময় আটকে রাখে না; বরং ইউজার ইনপুট বা অ্যানিমেশনকে উচ্চ অগ্রাধিকার দেয় (Cooperative Multitasking)।\n\n**React আপডেটের দুটি প্রধান ফেজ**:\n১. **Render / Reconciliation Phase**:\n- React নতুন Virtual DOM ট্রি তৈরি করে এবং পরিবর্তনগুলো (Effects list) হিসাব করে।\n- এটি সম্পূর্ণ **Asynchronous ও Interruptible** (উচ্চ প্রাইওরিটির কাজ আসলে React এটি মাঝপথে থামিয়ে দিতে পারে)।\n- এখানে কোনো আসল DOM ম্যানিপুলেশন হয় না।\n\n২. **Commit Phase**:\n- Render ফেজে প্রস্তুতকৃত তালিকা অনুযায়ী আসল ব্রাউজার DOM আপডেট করা হয়।\n- এটি **Synchronous** (মাঝপথে থামানো যায় না, যাতে ইউজার অসম্পূর্ণ UI না দেখে)।\n- এই ফেজে `componentDidMount`, `componentDidUpdate`, এবং `useLayoutEffect` রান করে।",
    interviewAnswer:
      "React Fiber is the complete rewrite of React's reconciliation engine designed to support incremental rendering, concurrency, and priority-based scheduling. React splits work into two phases: The **Render Phase** is asynchronous, pure, and interruptible—it walks the Fiber tree, computes diffs, and creates side-effect lists without modifying the DOM. The **Commit Phase** is synchronous and uninterruptible—it applies the mutations to the actual browser DOM and runs layout/lifecycle effects.",
    detailedExplanation: {
      whatItIs:
        "React-এর ইন্টারনাল শিডিউলিং ও লিঙ্কড-লিস্ট বেসড ডেটা স্ট্রাকচার আর্কিটেকচার।",
      whyItExists:
        "স্মুথ ৬০ FPS অ্যানিমেশন নিশ্চিত করতে এবং টাইম-স্লাইসিং (Concurrent Features) সক্ষম করতে।",
      howItWorks:
        "Fiber নোডে `child`, `sibling`, এবং `return` পয়েন্টার থাকে। ব্রাউজার আইডল সময়ে `requestIdleCallback` বা মেসেজ চ্যানেল ভিত্তিক কো-অপারেটিভ মাল্টিটাস্কিং পরিচালনা করে।",
      whenToUse:
        "React 18/19-এর `useTransition`, `useDeferredValue`, এবং Suspense ফিচারগুলো সরাসরি Fiber-এর ওপর নির্ভরশীল।",
      keyPoints: [
        "Render Phase: Asynchronous, Diffing calculation, no DOM mutations, interruptible.",
        "Commit Phase: Synchronous, Real DOM update, lifecycle triggers, cannot be paused.",
        "Concurrent Mode ও Suspense Fiber আর্কিটেকচারের সুবিধা।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useTransition } from "react";

export function FiberSearchDemo() {
  const [input, setInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // উচ্চ অগ্রাধিকার: ইনপুট বক্সে টাইপিং তাৎক্ষণিক মসৃণ দেখাবে
    setInput(e.target.value);

    // নিম্ন অগ্রাধিকার (Fiber Interruptible): ভারী লিস্ট ফিল্টারিং
    startTransition(() => {
      const items = Array.from({ length: 5000 }, (_, i) => \`Item \${i + 1} - \${e.target.value}\`);
      setFilteredList(items);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} placeholder="Type to filter..." />
      {isPending && <p className="text-amber-600 text-sm">Fiber is updating in background...</p>}
      <ul>
        {filteredList.slice(0, 10).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Urgent vs Non-Urgent",
          description: "setInput জরুরিভাবে ইনপুট আপডেট করে, আর startTransition Fiber-কে ভারী রেন্ডার ব্যাকগ্রাউন্ডে করার অনুমতি দেয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Large Autocomplete with Smooth Typing",
        description: "১০,০০০ আইটেমের টেবিলে টাইপ করার সময় কি-বোর্ড টাইপিং আটকে না রেখে ব্যাকগ্রাউন্ডে রেজাল্ট আপডেট করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে স্পষ্ট করে বলুন: 'Render phase computes diffs and can be aborted; Commit phase mutates real DOM and must complete synchronously.'",
      deliveryStrategy: "React 18-এর Concurrent React ও `useTransition` এর সাথে Fiber-এর সম্পর্ক উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "DOM আপডেট রেন্ডার ফেজেই হয়ে যায়।",
          right: "রেন্ডার ফেজে শুধু VDOM ডিফারেন্স হিসাব হয়; আসল DOM আপডেট শুধুমাত্র সিনক্রোনাস কমিট ফেজে ঘটে।",
        },
      ],
    },
    quickRevision: [
      "Fiber = Incremental Rendering + Priority Scheduling।",
      "Render Phase: Asynchronous, Diffing, Interruptible।",
      "Commit Phase: Synchronous, Real DOM Mutations।",
    ],
    followUpQuestions: [
      {
        question: "React Fiber-এ Time Slicing কী?",
        shortHint: "ভারী রেন্ডারিং কাজকে ৫ms এর ছোট স্লাইসে ভাগ করে মেইন থ্রেডকে ইউজার ইভেন্ট প্রসেস করার সুযোগ দেওয়া।",
      },
    ],
    tags: ["React", "Fiber", "Render Phase", "Commit Phase", "Concurrent"],
  },

  // 6. useEffect vs useLayoutEffect
  {
    id: "uselayouteffect-vs-useeffect-differences",
    slug: "uselayouteffect-vs-useeffect-differences",
    question: "What is the difference between useEffect and useLayoutEffect, and how does the browser rendering pipeline affect them?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**`useEffect`** ব্রাউজার DOM মিউটেশন এবং স্ক্রিনে পেইন্ট (Paint) সম্পন্ন হওয়ার পর **অ্যাসিনক্রোনাসলি** রান করে, ফলে এটি ব্রাউজার রেন্ডারিং ব্লক করে না। অপরদিকে, **`useLayoutEffect`** DOM মিউটেশনের পর কিন্তু ব্রাউজার স্ক্রিনে পেইন্ট করার ঠিক আগে **সিনক্রোনাসলি** রান করে। এটি মূলত DOM এলিমেন্টের সাইজ মাপা এবং ভিজ্যুয়াল ফ্লিকার (Flicker) রোধ করার জন্য ব্যবহৃত হয়।",
    easyExplanation:
      "ব্রাউজারের রেন্ডারিং পাইপলাইন বোঝার মাধ্যমে এই দুটি হুকের পার্থক্য পরিষ্কার হয়:\n\n**ব্রাউজার এক্সিকিউশন সিকোয়েন্স**:\n১. React Render Phase (VDOM হিসাব)\n২. React Commit Phase (আসল DOM নোড আপডেট)\n৩. ⚡ **`useLayoutEffect`** রান করে (সিনক্রোনাসলি — স্ক্রিনে পেইন্ট হওয়ার আগে)\n৪. 🎨 **Browser Paint** (ইউজার স্ক্রিনে পরিবর্তন দেখতে পায়)\n৫. 🕒 **`useEffect`** রান করে (অ্যাসিনক্রোনাসলি — স্ক্রিন পেইন্টের পর)\n\n**কখন কোনটি ব্যবহার করবেন?**:\n- **`useEffect` (৯৯% ক্ষেত্রে)**: ডেটা ফেচিং, সাবস্ক্রিপশন, টাইমার, অ্যানালিটিক্স ইত্যাদি।\n- **`useLayoutEffect` (খুব বিশেষ ক্ষেত্রে)**: টুলটিপ পজিশনিং, মোডালের উচ্চতা/প্রস্থ মাপা, স্ক্রোল পজিশন ক্যালকুলেশন—যাতে ইউজার কোনো দৃশ্যমান লাফালাফি (Visual Glitch/Flicker) না দেখে।",
    interviewAnswer:
      "`useEffect` executes **asynchronously** after the browser has flushed DOM mutations and completed painting, ensuring that side effects do not block UI responsiveness. `useLayoutEffect` executes **synchronously** immediately after DOM mutations but *before* the browser paints the screen. It blocks visual painting, making it ideal for synchronous DOM measurements (e.g., tooltip positioning, bounding box calculations) where asynchronous updates would cause visible screen flickering.",
    detailedExplanation: {
      whatItIs:
        "`useEffect` হলো পোস্ট-পেইন্ট প্যাসিভ ইফেক্ট; `useLayoutEffect` হলো প্রি-পেইন্ট লেআউট মেজারমেন্ট ইফেক্ট।",
      whyItExists:
        "পারফরম্যান্স বজায় রাখা (`useEffect`) বনাম নিখুঁত ভিজ্যুয়াল লেআউট হিসাব নিশ্চিত করা (`useLayoutEffect`)।",
      howItWorks:
        "`useLayoutEffect` মেইন থ্রেডকে ব্লক করে DOM পরিমাপ করে স্টেট আপডেট করলে ব্রাউজার একবারে চূড়ান্ত অবস্থা পেইন্ট করে।",
      whenToUse:
        "লেআউট মেজারমেন্ট ও ফ্লিকার ফিক্সিং ছাড়া সবসময় `useEffect` ব্যবহার করতে হবে।",
      keyPoints: [
        "`useEffect`: Asynchronous, after browser paint, non-blocking.",
        "`useLayoutEffect`: Synchronous, before browser paint, blocks rendering.",
        "React 18-এ CSS-in-JS লাইব্রেরির জন্য `useInsertionEffect` আনা হয়েছে যা DOM মিউটেশনেরও আগে চলে।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useRef, useLayoutEffect, useEffect } from "react";

export function Tooltip({ text }) {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipRef = useRef(null);

  // ✅ useLayoutEffect: ব্রাউজার পেইন্ট করার আগেই উচ্চতা মেপে পজিশন ঠিক করে
  // useEffect ব্যবহার করলে ইউজার টুলটিপটি ১ ফ্রেমের জন্য লাফাতে দেখত (Flicker)
  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const { height } = tooltipRef.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, []);

  return (
    <div
      ref={tooltipRef}
      style={{ top: \`-\${tooltipHeight + 10}px\` }}
      className="absolute bg-slate-900 text-white text-xs px-2 py-1 rounded"
    >
      {text}
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Pre-paint DOM measurement",
          description: "useLayoutEffect স্ক্রিনে ড্র হওয়ার আগেই উচ্চতা পড়ে সঠিক পজিশন নির্ধারণ করে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Dynamic Popover / Dropdown Positioning",
        description: "ড্রপডাউন স্ক্রিনের নিচে জায়গা না পেলে উপরে দেখানো—স্ক্রিনে ড্র হওয়ার আগেই ক্যালকুলেট করে ফ্লিকার প্রতিরোধ করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Default to useEffect. Only reach for useLayoutEffect if you need synchronous DOM measurements to prevent visual flickering.'",
      deliveryStrategy: "Browser Rendering Pipeline (DOM Mutation -> useLayoutEffect -> Paint -> useEffect) ক্রমানুসারে ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "সবসময় useLayoutEffect ব্যবহার করা ভালো কারণ এটি দ্রুত চলে।",
          right: "useLayoutEffect ব্রাউজার পেইন্টিং ব্লক করে, তাই অপ্রয়োজনে ব্যবহার করলে অ্যাপ ল্যাগ করবে।",
        },
      ],
    },
    quickRevision: [
      "useEffect: Post-paint, Asynchronous, Non-blocking।",
      "useLayoutEffect: Pre-paint, Synchronous, Layout measurements।",
      "useInsertionEffect: Pre-DOM mutation (CSS-in-JS রুল ইনসার্ট করতে)।",
    ],
    followUpQuestions: [
      {
        question: "Next.js SSR-এ useLayoutEffect ব্যবহার করলে কী ওয়ার্নিং দেয় এবং কেন?",
        shortHint: "সার্ভারে কোনো DOM নেই, তাই useLayoutEffect SSR-এ কাজ করে না; ক্লায়েন্ট কম্পোনেন্টে শর্তসাপেক্ষে চালাতে হয়।",
      },
    ],
    tags: ["React", "Hooks", "useEffect", "useLayoutEffect", "Browser Rendering"],
  },

  // 7. React Suspense & Concurrent Features
  {
    id: "react-suspense-and-concurrent-features",
    slug: "react-suspense-and-concurrent-features",
    question: "What is React Suspense, how does it work for code splitting and data fetching, and how does it integrate with Concurrent React?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**React Suspense** হলো React-এর একটি ডিক্লারেটিভ কম্পোনেন্ট বাউন্ডারি যা কোনো কম্পোনেন্ট রেন্ডার হওয়ার জন্য প্রস্তুত না হওয়া পর্যন্ত (যেমন: কোড ডাউনলোড বা ডেটা ফেচিং) একটি ফলব্যাক UI (যেমন: Skeleton বা Spinner) প্রদর্শন করে। এটি প্রমিজ (Promise) ইন্টারসেপ্ট করে কাজ করে এবং React 18/19-এ স্ট্রিমিং সার্ভার রেন্ডারিং ও কনকারেন্ট ফিচারের সাথে গভীরভাবে ইন্টিগ্রেটেড।",
    easyExplanation:
      "আগে প্রতিটি কম্পোনেন্টে `if (isLoading) return <Spinner />` লিখে আলাদাভাবে লোডিং স্টেট হ্যান্ডেল করতে হতো।\n\n**React Suspense কীভাবে কাজ করে?**:\n১. **Suspense Boundary (`<Suspense fallback={<Loading />}>`)**:\n- প্যারেন্ট কম্পোনেন্টে একবার বাউন্ডারি দিয়ে দিলে এর ভেতরের যেকোনো চাইল্ড ডেটা লোড করার সময় নিজে থেকেই ফলব্যাক লোডার দেখাবে।\n২. **কোড স্প্লিটিং ও অলস লোডিং (`React.lazy`)**:\n- ভারী পেজ বা চার্ট লাইব্রেরি শুধুমাত্র যখন প্রয়োজন তখন ডাউনলোড করতে `React.lazy()` ও Suspense ব্যবহার করা হয়:\n  ```jsx\n  const HeavyChart = React.lazy(() => import('./HeavyChart'));\n  ```\n৩. **Data Fetching Suspense (React 19 / Server Components / TanStack Query)**:\n- কম্পোনেন্ট যখন ডেটা লোড করার সময় একটি Promise থ্রো (throw) করে, Suspense সেটি ক্যাচ করে লোডার দেখায় এবং প্রমিজ রিজলভ হলে আসল UI রেন্ডার করে।",
    interviewAnswer:
      "React Suspense is a declarative mechanism that lets components 'wait' for something before rendering, orchestrating loading states seamlessly. Under the hood, a suspended component throws a Promise during the render phase. The nearest `<Suspense>` boundary catches this Promise, pauses the child tree, and displays the specified `fallback` UI. Once the Promise resolves, React resumes rendering the subtree. Suspense powers both client-side code-splitting (via `React.lazy`) and modern Server-Side Streaming in Next.js App Router.",
    detailedExplanation: {
      whatItIs:
        "অ্যাসিনক্রোনাস অপারেশন (কোড ও ডেটা) হ্যান্ডেল করার ডিক্লারেটিভ React বাউন্ডারি।",
      whyItExists:
        "প্রতিটি কম্পোনেন্টে ম্যানুয়াল `isLoading` কন্ডিশনাল চেকিং দূর করতে এবং লেআউট শিফট ছাড়া কো-অর্ডিনেটেড লোডিং স্টেট তৈরি করতে।",
      howItWorks:
        "রেন্ডার ফেজে থ্রো করা Promise ক্যাচ করে ফলব্যাক ড্র করে -> প্রমিজ শেষ হলে সাবট্রি রেন্ডার করে।",
      whenToUse:
        "রুট-লেভেল কোড স্প্লিটিং, ডায়নামিক ইমপোর্ট, সার্ভার কম্পোনেন্ট স্ট্রিমিং এবং ডেটা ফেচিংয়ে।",
      keyPoints: [
        "ডিক্লারেটিভ লোডিং স্টেট: ফলব্যাক বাউন্ডারি স্বয়ংক্রিয়ভাবে হ্যান্ডেল করে।",
        "React.lazy() এর সাথে ক্লায়েন্ট-সাইড বান্ডেল স্প্লিট করে ইনিশিয়াল লোড টাইম কমায়।",
        "Next.js App Router-এর `loading.tsx` ইন্টারনালি Suspense বাউন্ডারি ব্যবহার করে।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { Suspense, lazy } from "react";

// ১. কোড স্প্লিটিং: ইউজার যখন এই পেজে আসবে তখনই শুধু ফাইল ডাউনলোড হবে
const AnalyticsDashboard = lazy(() => import("./AnalyticsDashboard"));

export function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Admin Portal</h1>
      
      {/* ২. Suspense বাউন্ডারি */}
      <Suspense fallback={<div className="animate-pulse p-4 bg-slate-100 rounded">Loading analytics chart...</div>}>
        <AnalyticsDashboard />
      </Suspense>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Lazy loading",
          description: "AnalyticsDashboard এর JS বান্ডেল আলাদা চাঙ্কে স্প্লিট হয়েছে।",
        },
        {
          step: 2,
          title: "Suspense fallback",
          description: "ফাইল ডাউনলোড ও রেন্ডার হওয়া পর্যন্ত স্কেলিটন বা লোডার প্রদর্শিত থাকবে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Detail Page Streaming",
        description: "প্রোডাক্টের মূল বিবরণ ও ছবি তাৎক্ষণিক দেখানো, আর রিভিউ ও রিলেটেড প্রোডাক্ট সেকশন Suspense দিয়ে ব্যাকগ্রাউন্ডে স্ট্রিম করে লোড করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Suspense decouples the loading state from the data-fetching logic, allowing React to orchestrate fallback UI declaratively.'",
      deliveryStrategy: "React.lazy কোড স্প্লিটিং এবং Next.js Server Component Streaming এর উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "Suspense শুধু ডেটা ফেচিংয়ের জন্যই তৈরি করা হয়েছে।",
          right: "Suspense কোড স্প্লিটিং (React.lazy), ডেটা ফেচিং এবং সার্ভার স্ট্রিমিং সবকিছুর জন্যই কাজ করে।",
        },
      ],
    },
    quickRevision: [
      "Suspense: ডিক্লারেটিভ অ্যাসিনক্রোনাস লোডিং বাউন্ডারি।",
      "Promise থ্রো করে ফলব্যাক সক্রিয় করে।",
      "React.lazy + Suspense = Client-side Code Splitting।",
      "Next.js `loading.tsx` ইন্টারনালি Suspense ব্যবহার করে।",
    ],
    followUpQuestions: [
      {
        question: "useTransition এবং Suspense কীভাবে একসাথে কাজ করে?",
        shortHint: "useTransition নতুন ডেটা আসার আগ পর্যন্ত পুরনো UI সক্রিয় রেখে আকস্মিক লোডার ফ্লিকার প্রতিরোধ করে।",
      },
    ],
    tags: ["React", "Suspense", "React.lazy", "Code Splitting", "Concurrent"],
  },

  // 8. State, Props & Prop Drilling
  {
    id: "react-state-props-and-prop-drilling",
    slug: "react-state-props-and-prop-drilling",
    question: "What are State and Props in React, how is data passed from parent to child (and child to parent), and how do you solve Prop Drilling?",
    category: "React",
    categorySlug: "react",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "**Props** হলো প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো অপরিবর্তনশীল (Immutable) ইনপুট। **State** হলো কম্পোনেন্টের অভ্যন্তরীণ পরিবর্তনশীল (Mutable) মেমরি যা পরিবর্তিত হলে UI রি-রেন্ডার হয়। চাইল্ড থেকে প্যারেন্টে ডেটা পাঠাতে Callback Functions পাস করতে হয়। অনেকগুলো মধ্যবর্তী কম্পোনেন্টের মধ্য দিয়ে অপ্রয়োজনীয়ভাবে প্রপস পাস করাকে **Prop Drilling** বলে, যা Context API, State Management (Zustand/Redux) বা Component Composition দিয়ে সমাধান করা হয়।",
    easyExplanation:
      "১. **Props vs State**:\n- **Props (External)**: ফাংশনের আর্গুমেন্টের মতো। চাইল্ড কম্পোনেন্ট প্রপস নিজে থেকে পরিবর্তন করতে পারে না (Read-only)।\n- **State (Internal)**: কম্পোনেন্টের নিজস্ব পরিবর্তনশীল ডেটা। `useState` দিয়ে পরিবর্তিত হলে কম্পোনেন্ট ও তার চাইল্ডরা রি-রেন্ডার হয়।\n\n২. **Parent to Child & Child to Parent Data Flow**:\n- **Parent -> Child**: সরাসরি প্রপস হিসেবে ডেটা পাস করা (`<Child user={user} />`)।\n- **Child -> Parent**: প্যারেন্ট থেকে একটি ফাংশন প্রপস হিসেবে পাঠানো হয় (`<Child onSelect={handleSelect} />`), চাইল্ড ইভেন্টে সেই ফাংশন কল করে প্যারেন্টে ডেটা ফেরত পাঠায় (Lifting State Up)।\n\n৩. **Prop Drilling কী ও কীভাবে দূর করবেন?**:\n- ধরা যাক Component A -> B -> C -> D। ডেটা শুধু D-এর দরকার, কিন্তু B ও C-এর মধ্য দিয়ে শুধু পাস করার জন্য পাঠানো হচ্ছে। এটিই Prop Drilling।\n- **সমাধান ১ (Component Composition)**: `<A><D /></A>` চাইল্ড হিসেবে পাস করা (`props.children`)।\n- **সমাধান ২ (Context API)**: গ্লোবাল প্রোভাইডার দিয়ে সরাসরি `useContext` ব্যবহার করা।\n- **সমাধান ৩ (State Manager)**: Zustand বা Redux Toolkit ব্যবহার করা।",
    interviewAnswer:
      "In React, **Props** represent immutable configuration passed from parent to child, adhering to strict unidirectional data flow. **State** represents local, mutable component memory managed via hooks like `useState`. To communicate from child to parent, React uses the **Lifting State Up** pattern where parents pass callback functions down as props. **Prop Drilling** occurs when data is threaded through multiple intermediary components that do not need it. It is resolved using Component Composition (`children` prop), React Context API, or lightweight state managers like Zustand.",
    detailedExplanation: {
      whatItIs:
        "React-এর ডেটা আর্কিটেকচার: Props (ইনপুট), State (মেমরি), Callback (রিভার্স ফ্লো)।",
      whyItExists:
        "অ্যাপ্লিকেশনের ডেটা প্রবাহকে প্রেডিক্টেবল ও ডিবাগ করা সহজ রাখতে একমুখী ডেটা ফ্লো নীতি বজায় রাখা।",
      howItWorks:
        "প্যারেন্ট স্টেট পরিবর্তন -> চাইল্ড প্রপস আপডেট -> চাইল্ড রেন্ডার।",
      whenToUse:
        "লোকাল UI ডেটাতে State, কম্পোনেন্ট কনফিগারে Props, এবং ডিপলি নেস্টেড শেয়ার্ড ডেটাতে Context/Zustand।",
      keyPoints: [
        "Props are immutable / read-only.",
        "State changes trigger re-render of component and its sub-tree.",
        "Prop drilling can often be solved simply by Component Composition before jumping to Context.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState } from "react";

// প্যারেন্ট কম্পোনেন্ট
export function Parent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 bg-slate-50 border">
      <h3>Selected: {selectedItem || "None"}</h3>
      {/* চাইল্ডে কলব্যাক ফাংশন পাস করা হচ্ছে */}
      <ChildList onSelect={(item) => setSelectedItem(item)} />
    </div>
  );
}

// চাইল্ড কম্পোনেন্ট: কলব্যাক কল করে প্যারেন্টে ডেটা পাঠাচ্ছে
function ChildList({ onSelect }) {
  const items = ["React", "Next.js", "TypeScript"];
  return (
    <div className="flex gap-2 mt-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="px-3 py-1 bg-white border rounded shadow-sm text-sm"
        >
          Select {item}
        </button>
      ))}
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Lifting state up",
          description: "Parent থেকে onSelect কলব্যাক পাঠানো হয়েছে এবং Child ক্লিক ইভেন্টে ডেটা Parent-এ পুশ করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Shopping Cart Quantity Selector",
        description: "কার্ট আইটেমের `+` বা `-` বাটনে ক্লিক করলে চাইল্ড কম্পোনেন্ট প্যারেন্টের `updateQuantity(id, qty)` কলব্যাক কল করে মোট দাম আপডেট করে।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Before reaching for global state to solve prop drilling, I always consider component composition (passing JSX as children).' ",
      deliveryStrategy: "Props vs State এর মূল পার্থক্য এবং Lifting State Up প্যাটার্ন ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Props পরিবর্তন করে চাইল্ড কম্পোনেন্ট প্যারেন্টের স্টেট বদলাতে পারে।",
          right: "Props অপরিবর্তনশীল (read-only); প্যারেন্টের স্টেট বদলাতে প্যারেন্ট থেকে পাঠানো কলব্যাক ফাংশন কল করতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Props: Immutable, Parent -> Child।",
      "State: Mutable, Local memory, triggers re-render।",
      "Child -> Parent: Callback function / Lifting state up।",
      "Prop Drilling সমাধান: Component Composition, Context API, Zustand।",
    ],
    followUpQuestions: [
      {
        question: "Component Composition কীভাবে Context API ছাড়াই Prop Drilling কমায়?",
        shortHint: "প্যারেন্টেই চাইল্ড কম্পোনেন্ট তৈরি করে `<Parent><DeepChild data={data} /></Parent>` আকারে পাস করলে মাঝের কম্পোনেন্টগুলো প্রপস না দেখেই রেন্ডার করতে পারে।",
      },
    ],
    tags: ["React", "State", "Props", "Prop Drilling", "Data Flow"],
  },

  // 9. Controlled vs Uncontrolled & Pure Components
  {
    id: "react-controlled-uncontrolled-and-pure-components",
    slug: "react-controlled-uncontrolled-and-pure-components",
    question: "What are Controlled vs Uncontrolled Components in React, and what are Pure Components / React.memo?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**Controlled Component**-এ ফর্ম ইনপুটের মান সরাসরি React State দ্বারা নিয়ন্ত্রিত হয় (Single Source of Truth)। **Uncontrolled Component**-এ ইনপুটের মান সরাসরি ব্রাউজার DOM নিজেই নিয়ন্ত্রণ করে এবং React `useRef` বা FormData দিয়ে প্রয়োজনে মান পড়ে নেয়। **Pure Component / `React.memo`** হলো এমন কম্পোনেন্ট যা প্রপসের অগভীর তুলনা (Shallow Comparison) করে এবং প্রপস না বদলালে অপ্রয়োজনীয় রি-রেন্ডার স্কিপ করে।",
    easyExplanation:
      "১. **Controlled Components (নিয়ন্ত্রিত)**:\n- ইনপুটের মান `value={state}` এবং পরিবর্তন `onChange={(e) => setState(e.target.value)}` দিয়ে React স্টেটের সাথে বাঁধা থাকে।\n- **সুবিধা**: তাৎক্ষণিক ভ্যালিডেশন, ডায়নামিক ডিসেবল বাটন এবং কাস্টম ফরম্যাটিং সহজ।\n\n২. **Uncontrolled Components (অনিয়ন্ত্রিত)**:\n- ইনপুটে কোনো স্টেট থাকে না; সরাসরি ব্রাউজার DOM মান সংরক্ষণ করে। মান পড়তে `useRef()` বা নেটিভ ফর্ম সাবমিট হ্যান্ডলার ব্যবহার করা হয় (`new FormData(e.target)`)।\n- **সুবিধা**: রেন্ডার কম হয় এবং ফাইল আপলোড ফিল্ডে (`<input type=\"file\" />`) সরাসরি DOM ব্যবহার আবশ্যক।\n\n৩. **Pure Component এবং `React.memo`**:\n- সাধারণ React কম্পোনেন্টে প্যারেন্ট রি-রেন্ডার হলে চাইল্ডের প্রপস না বদলালেও চাইল্ড রি-রেন্ডার হয়।\n- `React.memo(MyComponent)` ব্যবহার করলে React আগের প্রপস এবং নতুন প্রপসের মধ্যে **Shallow Equality Check** (`prevProps === nextProps`) করে। যদি প্রপস একই থাকে, তবে রি-রেন্ডার সম্পূর্ণ বন্ধ থাকে।",
    interviewAnswer:
      "In a **Controlled Component**, form element values are driven entirely by React state via `value` and `onChange` handlers, providing a single source of truth and enabling instant input validation. In an **Uncontrolled Component**, the DOM maintains its own internal state, and React accesses values on-demand using `useRef` or the `FormData` API. **Pure Components** (in class components via `React.PureComponent` and in functional components via `React.memo`) optimize rendering performance by performing a shallow comparison of props and skipping re-renders when inputs have not changed.",
    detailedExplanation: {
      whatItIs:
        "ফর্ম স্টেট হ্যান্ডলিং প্যাটার্ন (Controlled vs Uncontrolled) এবং মেমোইজেশন প্যাটার্ন (`React.memo`)।",
      whyItExists:
        "স্টেটের পূর্ণ নিয়ন্ত্রণ বনাম নেটিভ ব্রাউজার পারফরম্যান্স এবং অপ্রয়োজনীয় চাইল্ড রি-রেন্ডার প্রতিরোধ।",
      howItWorks:
        "Controlled: `state -> DOM` একমুখী লুপ; Uncontrolled: `DOM -> ref.current.value`। React.memo: `Object.is()` শ্যালো কম্প্যারিজন।",
      whenToUse:
        "ইন্টারেক্টিভ ফর্ম ভ্যালিডেশনে Controlled; সাধারণ সাবমিট বা ফাইল আপলোডে Uncontrolled; ভারী চাইল্ড অপ্টিমাইজেশনে `React.memo`।",
      keyPoints: [
        "Controlled: React state drives input value (single source of truth).",
        "Uncontrolled: DOM handles input; accessed via `useRef`.",
        "React.memo performs shallow prop comparison to skip rendering.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import React, { useState, useRef, memo } from "react";

// ১. Controlled Component
export function ControlledInput() {
  const [name, setName] = useState("");
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Controlled (State-driven)"
      className="border p-2 rounded"
    />
  );
}

// ২. Uncontrolled Component
export function UncontrolledInput() {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered value: " + inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} defaultValue="Default" className="border p-2 rounded" />
      <button type="submit">Submit</button>
    </form>
  );
}

// ৩. Pure Component (React.memo)
export const ExpensiveChild = memo(function ExpensiveChild({ title }) {
  console.log("Rendered ExpensiveChild!");
  return <div className="p-2 bg-slate-100 rounded">{title}</div>;
});`,
      explanationSteps: [
        {
          step: 1,
          title: "Controlled vs Uncontrolled",
          description: "Controlled ইনপুট স্টেটের সাথে সিঙ্কড থাকে; Uncontrolled ইনপুট DOM-এ থাকে এবং ref দিয়ে পড়া হয়।",
        },
        {
          step: 2,
          title: "React.memo optimization",
          description: "title প্রপ না বদলালে ExpensiveChild পুনরায় রেন্ডার হবে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Credit Card Input Formatter",
        description: "ইউজার টাইপ করার সাথে সাথে প্রতি ৪ সংখ্যার পর স্পেস বসানো—Controlled ইনপুট ব্যবহার করে স্টেট ফরম্যাট করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Controlled components give full programmatic control over inputs, while uncontrolled components are faster to write and ideal for large forms with libraries like React Hook Form.'",
      deliveryStrategy: "React.memo-র সাথে অবজেক্ট বা ফাংশন প্রপস পাঠালে শ্যালো কম্প্যারিজন ফেইল করার ঝুঁকি (যে কারণে useCallback দরকার) উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "সব কম্পোনেন্টকে React.memo দিয়ে মুড়ে ফেলা উচিত।",
          right: "React.memo-র নিজস্ব মেমরি ও কম্প্যারিজন ওভারহেড আছে, এটি শুধুমাত্র ভারী বা ঘন ঘন রি-রেন্ডার হওয়া কম্পোনেন্টে ব্যবহার করা উচিত।",
        },
      ],
    },
    quickRevision: [
      "Controlled: State drives input value (React manages DOM).",
      "Uncontrolled: DOM manages value (React reads via `useRef`).",
      "PureComponent / React.memo: Shallow prop comparison to skip renders.",
    ],
    followUpQuestions: [
      {
        question: "React.memo ব্যবহারের পরও কেন কম্পোনেন্ট রি-রেন্ডার হতে পারে?",
        shortHint: "যদি প্যারেন্ট প্রতি রেন্ডারে নতুন অবজেক্ট রেফারেন্স বা ইনলাইন অ্যারো ফাংশন পাস করে (Shallow equality fails)।",
      },
    ],
    tags: ["React", "Controlled", "Uncontrolled", "PureComponent", "React.memo"],
  },

  // 10. React Router & Routing Mechanics
  {
    id: "react-router-browser-vs-hash-and-query-params",
    slug: "react-router-browser-vs-hash-and-query-params",
    question: "How does routing work in React, what is React Router, how does BrowserRouter differ from HashRouter, and how are query parameters handled?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "React অ্যাপ্লিকেশনে ক্লায়েন্ট-সাইড রাউটিং ব্রাউজারের **HTML5 History API** (`pushState`, `replaceState`, `popstate`) ব্যবহার করে পুরো পেজ রিলোড না করে শুধুমাত্র সংশ্লিষ্ট কম্পোনেন্ট রেন্ডার করে। **`BrowserRouter`** আধুনিক ক্লিন URL (`/dashboard`) তৈরি করে যার জন্য সার্ভারে ফলব্যাক কনফিগারেশন দরকার। **`HashRouter`** URL-এ হ্যাশ (`/#/dashboard`) ব্যবহার করে যা সার্ভার কল করে না। React Router-এ কুয়েরি প্যারামিটার ম্যানেজ করতে **`useSearchParams`** হুক ব্যবহৃত হয়।",
    easyExplanation:
      "১. **React-এ রাউটিং কীভাবে কাজ করে?**:\n- সাধারণ ওয়েবসাইটে লিঙ্কে ক্লিক করলে ব্রাউজার নতুন HTML পেজের জন্য সার্ভারে রিকোয়েস্ট পাঠায় এবং পেজ সাদা হয়ে রিলোড হয়।\n- React-এ **Client-Side Routing (CSR)** লিঙ্কের ডিফল্ট আচরণ আটকে দেয় (`e.preventDefault()`), URL পরিবর্তন করে এবং ভার্চুয়াল ডম দিয়ে স্ক্রিনের নির্দিষ্ট অংশ আপডেট করে।\n\n২. **BrowserRouter vs HashRouter**:\n- **`BrowserRouter` (স্ট্যান্ডার্ড)**: URL দেখতে স্বাভাবিক (`example.com/about`)। SEO-বান্ধব। তবে ব্রাউজারে সরাসরি পেজ রিফ্রেশ দিলে 404 না আসার জন্য সার্ভারে সব রিকোয়েস্ট `index.html`-এ রিডাইরেক্ট করতে হয়।\n- **`HashRouter`**: URL-এ `#` থাকে (`example.com/#/about`)। হ্যাশের পরের অংশ সার্ভারে পাঠানো হয় না, তাই সার্ভার কনফিগারেশন ছাড়াই স্ট্যাটিক হোস্টিংয়ে (যেমন GitHub Pages) নির্বিঘ্নে কাজ করে।\n\n৩. **Query Parameters হ্যান্ডলিং**:\n- URL-এর কুয়েরি স্ট্রিং (`/products?category=shoes&sort=price_asc`) সহজে রিড ও আপডেট করতে React Router-এর `useSearchParams()` হুক ব্যবহার করা হয় যা ব্রাউজারের নেটিভ `URLSearchParams` অবজেক্টের ওপর নির্মিত।",
    interviewAnswer:
      "Client-side routing in React intercepts standard anchor navigation via the browser's HTML5 History API (`pushState`/`replaceState`), matching the current path against defined route trees to render components dynamically without full-page reloads. **BrowserRouter** utilizes standard URL paths, providing clean SEO-friendly URLs but requiring server-side rewrite rules to route all incoming requests to `index.html`. **HashRouter** relies on the URL hash fragment (`/#/path`), which is never sent to the server, making it ideal for legacy static hosting environments without server routing control. Query parameters are managed via the `useSearchParams` hook, which provides state-like getters and setters for URL parameters.",
    detailedExplanation: {
      whatItIs:
        "React অ্যাপ্লিকেশনের ক্লায়েন্ট-সাইড নেভিগেশন ও URL স্টেট ম্যানেজমেন্ট ইঞ্জিন।",
      whyItExists:
        "সিঙ্গেল পেজ অ্যাপ্লিকেশনের মসৃণ ইউজার এক্সপেরিয়েন্স দেওয়া এবং পেজ রিলোড ছাড়া পেজ ট্রানজিশন নিশ্চিত করা।",
      howItWorks:
        "URL পরিবর্তন -> `popstate` ইভেন্ট লিসেনার ট্রিগার -> React Router ম্যাচিং রুট খুঁজে বের করে -> `<Outlet />` বা `<Route>` রেন্ডার।",
      whenToUse:
        "মাল্টি-পেজ SPA আর্কিটেকচার, ফিল্টারিং, পেজিনেশন এবং ডায়নামিক রুটে।",
      keyPoints: [
        "BrowserRouter: Clean URLs, uses HTML5 History API, requires server fallback configuration.",
        "HashRouter: Hash `#` URLs, no server config needed, poor for SEO.",
        "`useSearchParams` works like `useState`, persisting state directly in the browser address bar.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { BrowserRouter, Routes, Route, Link, useSearchParams, useParams } from "react-router-dom";

// ১. কুয়েরি প্যারামিটার ও সার্চ ফিল্টারিং কম্পোনেন্ট
function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const handleFilterChange = (newCategory) => {
    // URL আপডেট হচ্ছে: /products?category=electronics
    setSearchParams({ category: newCategory });
  };

  return (
    <div className="p-4">
      <h2>Products Filter (Current: {category})</h2>
      <div className="flex gap-2 my-2">
        <button onClick={() => handleFilterChange("electronics")}>Electronics</button>
        <button onClick={() => handleFilterChange("clothing")}>Clothing</button>
      </div>
    </div>
  );
}

// ২. মূল রাউটার কনফিগারেশন
export function AppRouter() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-slate-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products?category=all">Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "useSearchParams",
          description: "URL-এর query parameter রিড ও আপডেট করে ফিল্টার স্টেট সিঙ্ক রাখা হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Search & Pagination",
        description: "পেজিনেশন বা ক্যাটাগরি ফিল্টার URL-এ (`?page=2&sort=low_to_high`) রাখা যাতে ইউজার লিঙ্কটি শেয়ার করলে অপরজন হুবহু একই ফিল্টার করা পেজ দেখতে পায়।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Storing filter and pagination state in query parameters with useSearchParams is a best practice because it makes user views shareable and bookmarkable.'",
      deliveryStrategy: "কেন BrowserRouter প্রোডাকশনে 404 দেয় যদি Nginx বা Vercel-এ `try_files /index.html` কনফিগার না থাকে তা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "HashRouter আধুনিক অ্যাপের জন্য BrowserRouter-এর চেয়ে ভালো।",
          right: "HashRouter আধুনিক অ্যাপে এড়ানো উচিত কারণ হ্যাশ URL দেখতে অপেশাদার এবং সার্চ ইঞ্জিন ইন্ডেক্সিং (SEO) বাধাগ্রস্ত করে।",
        },
      ],
    },
    quickRevision: [
      "Client-side routing = HTML5 History API (`pushState` + `popstate`).",
      "BrowserRouter = Clean URLs + SEO friendly (needs server rewrite rule).",
      "HashRouter = `#` URLs (no server config, good for static hosting).",
      "useSearchParams = Read/write URL query string state.",
    ],
    followUpQuestions: [
      {
        question: "React Router v6-এ Nested Routes এবং `<Outlet />` কীভাবে কাজ করে?",
        shortHint: "প্যারেন্ট লেআউট ফিক্সড রেখে তার ভেতরের `<Outlet />` স্লটে ম্যাচ করা চাইল্ড রুট রেন্ডার করে।",
      },
    ],
    tags: ["React", "React Router", "BrowserRouter", "HashRouter", "Query Params"],
  },

  // 11. React Hooks Overview & Rules of Hooks
  {
    id: "react-hooks-overview-and-rules",
    slug: "react-hooks-overview-and-rules",
    question: "What are React Hooks, why were they introduced, what problems do they solve, and what are the Rules of Hooks?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**React Hooks** হলো বিশেষ ফাংশন (যেমন: `useState`, `useEffect`) যা ফাংশনাল কম্পোনেন্ট থেকেই স্টেট এবং React-এর অন্যান্য ফিচার ব্যবহার করার সুযোগ দেয় (React 16.8-এ যুক্ত)। ক্লাস কম্পোনেন্টের জটিল বয়লারপ্লেট, `this` কি-ওয়ার্ডের বিভ্রান্তি এবং লজিক রি-ইউজ করার জন্য Higher-Order Components (HOC) বা Render Props-এর তৈরি 'Wrapper Hell' দূর করতে Hooks উদ্ভাবন করা হয়। Hooks-এর দুটি প্রধান নিয়ম হলো: ১. শুধুমাত্র কম্পোনেন্টের **শীর্ষ স্তরে (Top-level)** কল করতে হবে (লুপ বা শর্তের ভেতরে নয়), এবং ২. শুধুমাত্র React ফাংশন থেকে কল করতে হবে।",
    easyExplanation:
      "১. **হুক্স আসার আগে কী সমস্যা ছিল?**\n- **Wrapper Hell**: একাধিক কম্পোনেন্টের মধ্যে স্টেটফুল লজিক শেয়ার করতে HOC (`withRouter(withAuth(Component))`) বা Render Props লাগত, ফলে কম্পোনেন্ট ট্রি বিশৃঙ্খল হয়ে যেত।\n- **Complex Class Components**: একই লজিক (যেমন ইভেন্ট লিসেনার সেট ও রিমুভ) `componentDidMount` ও `componentWillUnmount`-এর মধ্যে ছড়িয়ে-ছিটিয়ে থাকত।\n- **`this` Binding Confusion**: ক্লাসে মেথড বাইন্ডিং (`this.handleClick = this.handleClick.bind(this)`) অত্যন্ত বিরক্তিকর ছিল।\n\n২. **হুক্স কীভাবে সমাধান করল?**\n- ফাংশনাল কম্পোনেন্টেই লজিক আলাদা করে **Custom Hooks** বানিয়ে যেকোনো জায়গায় রি-ইউজ করা যায়।\n- কোড সংক্ষিপ্ত ও পাঠযোগ্য হয়।\n\n৩. **Rules of Hooks (হুক্সের কঠোর নিয়মাবলী)**:\n- **নিয়ম ১: শুধুমাত্র Top Level-এ কল করতে হবে**: কোনো `if` কন্ডিশন, `for` লুপ বা নেস্টেড ফাংশনের ভেতরে হুক কল করা যাবে না। কারণ React অভ্যন্তরীণভাবে Fiber নোডে হুকগুলোকে একটি **Linked List** আকারে ক্রম অনুযায়ী ট্র্যাক করে। শর্তের কারণে ক্রম বদলে গেলে স্টেট মিসম্যাচ হয়ে ক্র্যাশ করবে।\n- **নিয়ম ২: শুধুমাত্র React Function-এ কল করতে হবে**: সাধারণ জাভাস্ক্রিপ্ট ফাংশনে হুক কল করা যাবে না; শুধুমাত্র React Functional Component অথবা Custom Hook (`use...`) থেকে কল করতে হবে।",
    interviewAnswer:
      "Introduced in React 16.8, Hooks allow developers to use state, lifecycle events, and context inside functional components. They were invented to solve three core problems: sharing stateful logic without the 'wrapper hell' of HOCs and render props, eliminating massive class components where related logic was fragmented across lifecycle methods, and removing `this` keyword binding complexities. The two foundational **Rules of Hooks** are: 1) Only call hooks at the **top level** (never inside loops, conditions, or nested functions) to preserve the internal linked list execution order across renders, and 2) Only call hooks from React Functional Components or Custom Hooks.",
    detailedExplanation: {
      whatItIs:
        "ফাংশনাল কম্পোনেন্টে স্টেট ও লাইফসাইকেল যুক্ত করার ফাংশন এপিআই।",
      whyItExists:
        "ক্লাস বয়লারপ্লেট, `this` বাইন্ডিং ইস্যু এবং লজিক রি-ইউজের জটিলতা চিরতরে দূর করতে।",
      howItWorks:
        "React প্রতিটি কম্পোনেন্টের Fiber নোডে হুকগুলোর স্টেটকে একটি Singly Linked List আকারে সংরক্ষণ করে। রেন্ডারের ক্রম অপরিবর্তিত থাকলে সঠিক স্টেট পয়েন্ট করা সম্ভব হয়।",
      whenToUse:
        "যেকোনো আধুনিক React কম্পোনেন্টে স্টেট, সাইড-ইফেক্ট, ক্যাশিং ও কন্টেক্সট ব্যবহারে।",
      keyPoints: [
        "Eliminated HOC/Render props wrapper hell.",
        "Internal hook state is tracked via an in-memory linked list keyed by execution order.",
        "Lint rule `eslint-plugin-react-hooks` enforces these rules automatically.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useEffect } from "react";

export function ProperHookUsage({ userId }) {
  // ✅ সঠিক: টপ লেভেলে হুক কল করা হয়েছে
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ❌ ভুল: শর্তের ভেতর হুক কল করলে Fiber Linked List অর্ডার ভেঙে যাবে!
  // if (userId) {
  //   useEffect(() => { ... }, [userId]);
  // }

  // ✅ সঠিক: শর্ত ইফেক্টের ভেতরে দিতে হবে
  useEffect(() => {
    if (!userId) return;

    let isMounted = true;
    fetch(\`/api/users/\${userId}\`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setUser(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [userId]);

  if (!userId) return <p>Please select a user.</p>;
  if (loading) return <p>Loading user profile...</p>;

  return <div>Welcome, {user.name}</div>;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Top-level calling",
          description: "হুক সবসময় কম্পোনেন্টের শুরুতে আনকন্ডিশনালি কল করতে হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Extracting Complex Authentication Logic",
        description: "ইউজার লগইন, টোকেন রিফ্রেশ এবং পারমিশন চেকের জটিল লজিক `useAuth()` কাস্টম হুকে আলাদা করে সব পেজে ১ লাইনে ব্যবহার করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'React relies on the call order of hooks across renders because internal hook state is stored as a linked list on the Fiber node. That is why hooks must never be called inside conditions.'",
      deliveryStrategy: "Fiber-এর Linked list মেকানিজম উল্লেখ করলে ইন্টারভিউয়ার অত্যন্ত সন্তুষ্ট হন।",
      avoidSaying: [
        {
          wrong: "হুক্স ব্যবহার করলে ক্লাস কম্পোনেন্ট আরও দ্রুত রান করে।",
          right: "হুক্স ফাংশনাল কম্পোনেন্টে ব্যবহার হয় এবং কোডবেস ছোট ও রিডেবল করে; এটি ক্লাস কম্পোনেন্টের ওপর চলে না।",
        },
      ],
    },
    quickRevision: [
      "React 16.8-এ যুক্ত।",
      "Wrapper Hell ও `this` বাইন্ডিং দূর করে।",
      "Rule 1: Always call at the Top Level (never in loops/conditions).",
      "Rule 2: Only call from React functions or custom hooks.",
    ],
    followUpQuestions: [
      {
        question: "React কীভাবে বুঝতে পারে কোন useState কোন ভ্যারিয়েবলের?",
        shortHint: "রেন্ডারের সময় হুকগুলোর কল হওয়ার সঠিক ক্রম (Call Order) অনুযায়ী লিঙ্কড লিস্ট ট্রাভার্স করে।",
      },
    ],
    tags: ["React", "Hooks", "Rules of Hooks", "Fiber", "useState"],
  },

  // 12. useState Deep Dive & Batching
  {
    id: "react-usestate-deep-dive-and-batching",
    slug: "react-usestate-deep-dive-and-batching",
    question: "How does the useState hook work internally, how does automatic state batching work, and how does useState compare to useEffect?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**`useState`** ফাংশনাল কম্পোনেন্টের লোকাল মেমরি হিসেবে কাজ করে। প্রতিটি রেন্ডারে React ক্লোজারের (Closure) মাধ্যমে বর্তমান স্টেট ভ্যালু রিটেন করে। একাধিক স্টেট পরিবর্তন হলে React 18-এর **Automatic Batching** ফিচার সেগুলোকে একত্রিত করে মাত্র একটি একক রি-রেন্ডার ট্রিগার করে। `useState` এবং `useEffect`-এর পার্থক্য হলো: `useState` ডেটা বা স্টেট সংরক্ষণের জন্য, আর `useEffect` সেই স্টেট পরিবর্তনের ফলে কোনো বাহ্যিক সিস্টেমে সাইড-ইফেক্ট চালানোর জন্য ব্যবহৃত হয়।",
    easyExplanation:
      "১. **useState কীভাবে কাজ করে?**:\n- `const [count, setCount] = useState(0);`\n- যখন `setCount(count + 1)` কল করা হয়, তখন কিন্তু সাথে সাথে বর্তমান লাইনে `count`-এর মান পরিবর্তিত হয় না! কারণ স্টেট পরিবর্তন একটি অ্যাসিনক্রোনাস রিকোয়েস্ট যা পরবর্তী রেন্ডারে নতুন ভ্যালু সহ ফাংশনটি আবার এক্সিকিউট করে।\n- **Functional Updater (`setCount(prev => prev + 1)`)**: আগের মানের ওপর নির্ভর করে একাধিক আপডেট করতে হলে সবসময় আপডেটার ফাংশন ব্যবহার করতে হয়।\n\n২. **Automatic Batching (React 18)**:\n- আগে শুধুমাত্র React ইভেন্ট হ্যান্ডলারের ভেতরে একাধিক স্টেট আপডেট ব্যাচ (একত্রিত) হতো। কিন্তু `setTimeout`, `fetch`, বা প্রমিজের ভেতর আলাদা আলাদা রি-রেন্ডার হতো।\n- **React 18-এ Automatic Batching** চালু হওয়ায় যেকোনো অ্যাসিনক্রোনাস কোড বা ইভেন্ট হ্যান্ডলারের ভেতর যতগুলো স্টেট আপডেটই থাকুক না কেন, React সেগুলোকে একসাথে ব্যাচ করে শুধুমাত্র **১ বার রি-রেন্ডার** করায়। এতে পারফরম্যান্স বহুগুণ বেড়ে যায়।\n\n৩. **useState vs useEffect**:\n- **`useState`**: UI-এর ডেটা কী তা ধারণ করে (State Storage)।\n- **`useEffect`**: স্টেট পরিবর্তনের পর কী কাজ করতে হবে (API কল, টাইমার, DOM আপডেট) তা নির্ধারণ করে (Side Effect Trigger)।",
    interviewAnswer:
      "`useState` declares a state variable preserved across re-renders via React Fiber's internal hook linked list. Calling the state setter enqueues an update and schedules a re-render. Since React 18, **Automatic Batching** bundles all state updates—whether inside event handlers, `setTimeout`, Promises, or native event listeners—into a single render pass to maximize performance. While `useState` is dedicated to holding synchronous component state, `useEffect` is designed to synchronize that state with external systems and asynchronous side effects.",
    detailedExplanation: {
      whatItIs:
        "কম্পোনেন্টের স্টেট ডিক্লারেশন হুক এবং রি-রেন্ডার ব্যাচিং মেকানিজম।",
      whyItExists:
        "প্রতিটি স্টেট পরিবর্তনের জন্য আলাদা আলাদা DOM রি-রেন্ডার বন্ধ করে ৬০ FPS পারফরম্যান্স ধরে রাখা।",
      howItWorks:
        "আপডেট কিউ তৈরি -> মাইক্রোটাস্কে ব্যাচিং শিডিউল -> রেন্ডার ফেজে সব স্টেট হিসাব করে একবারে UI আপডেট।",
      whenToUse:
        "যেকোনো ডায়নামিক মান যা পরিবর্তন হলে স্ক্রিনের UI পরিবর্তন হওয়া প্রয়োজন।",
      keyPoints: [
        "State updates are asynchronous and batched.",
        "Use functional update `setState(prev => ...)` when next state depends on current state.",
        "React 18 batches updates everywhere, including Promises and timeouts.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState } from "react";

export function CounterDemo() {
  const [count, setCount] = useState(0);

  const handleAsyncIncrement = () => {
    // React 18 Automatic Batching: setTimeout-এর ভেতর থাকলেও মাত্র ১ বার রি-রেন্ডার হবে
    setTimeout(() => {
      // ❌ ভুল: ৩ বার setCount(count + 1) দিলে ৩ বাড়বে না, মাত্র ১ বাড়বে (Stale Closure)
      // setCount(count + 1);
      // setCount(count + 1);

      // ✅ সঠিক: Functional Updater ব্যবহার করলে ৩ বাড়বে
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }, 100);
  };

  return (
    <div className="p-4 border rounded">
      <p>Count: {count}</p>
      <button onClick={handleAsyncIncrement} className="px-3 py-1 bg-indigo-600 text-white rounded">
        Batch Increment (+3)
      </button>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Functional updater",
          description: "prev আর্গুমেন্ট ব্যবহার করায় ব্যাচড আপডেটে সর্বশেষ আপডেটেড মান পাওয়া যায়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Multi-Field Form Reset",
        description: "একটি বাটনে ক্লিক করে নাম, ইমেইল, পাসওয়ার্ড ও লোডিং ফ্ল্যাগ একসাথে ৪টি স্টেট রিসেট করলে React 18 মাত্র ১ বার পুরো পেজ রি-রেন্ডার করে।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'State updates are asynchronous. If your new state depends on the previous state, always pass an updater function `setState(prev => ...)` to avoid stale state closures.'",
      deliveryStrategy: "React 17 বনাম React 18-এর Automatic Batching-এর পার্থক্য ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "`setState` কল করার সাথে সাথে পরের লাইনে স্টেটের নতুন মান পাওয়া যায়।",
          right: "`setState` শিডিউলড হয়; বর্তমান ফাংশন এক্সিকিউশন শেষ হয়ে পরবর্তী রেন্ডার না হওয়া পর্যন্ত স্টেটের মান অপরিবর্তিত থাকে।",
        },
      ],
    },
    quickRevision: [
      "`useState`: Local reactive state variable।",
      "Functional updater: `setState(prev => prev + 1)`।",
      "React 18 Automatic Batching: সব অ্যাসিনক্রোনাস আপডেটে মাত্র ১ বার রি-রেন্ডার।",
      "useState = State Storage; useEffect = Side Effect Execution।",
    ],
    followUpQuestions: [
      {
        question: "যদি কোনো কারণে Automatic Batching বন্ধ করতে হয়, কীভাবে করবেন?",
        shortHint: "`flushSync(() => { setState(...) })` ব্যবহার করে তাৎক্ষণিক সিনক্রোনাস রি-রেন্ডার করানো যায়।",
      },
    ],
    tags: ["React", "useState", "Batching", "React 18", "State"],
  },

  // 13. useContext & Global State Management
  {
    id: "react-usecontext-and-state-management",
    slug: "react-usecontext-and-state-management",
    question: "What is useContext, how is it used, and how does it compare with Global State Management solutions (Zustand, Redux Toolkit, TanStack Query)?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**`useContext`** হলো React-এর বিল্ট-ইন হুক যা Prop Drilling ছাড়াই কম্পোনেন্ট ট্রির যেকোনো স্তরে ডেটা সরাসরি অ্যাক্সেস করার সুবিধা দেয় (`React.createContext` ও `<Provider>`-এর সাথে)। তবে Context API মূলত কদাচিৎ পরিবর্তিত হওয়া ডেটার জন্য উপযুক্ত (যেমন: থিম বা অথেনটিকেশন)। ঘন ঘন পরিবর্তনশীল স্টেট বা পারফরম্যান্স-ক্রিটিক্যাল ডেটার জন্য **Zustand** বা **Redux Toolkit** (Client State) এবং সার্ভার ক্যাশিং ও ডেটা ফেচিংয়ের জন্য **TanStack Query** ব্যবহার করা ইন্ডাস্ট্রি স্ট্যান্ডার্ড।",
    easyExplanation:
      "১. **useContext কীভাবে কাজ করে?**:\n- প্রথমে `const ThemeContext = createContext('light');` তৈরি করা হয়।\n- প্যারেন্টে `<ThemeContext.Provider value={theme}>` দিয়ে ঘিরে দেওয়া হয়।\n- চাইল্ড কম্পোনেন্টে সরাসরি `const theme = useContext(ThemeContext);` দিয়ে মান পড়া যায়।\n\n২. **Context API-এর সমস্যা (Re-render Caveat)**:\n- Context-এর মান সামান্য পরিবর্তন হলে সেই Context ব্যবহারকারী **সব কটি কম্পোনেন্ট স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয়**, এমনকি তাদের প্রপস `React.memo` দিয়ে আটকানো থাকলেও!\n\n৩. **তুলনামূলক বিশ্লেষণ (State Management Matrix)**:\n- **Context API**: লো-ফ্রিকোয়েন্সি গ্লোবাল স্টেট (Dark/Light Theme, Current User Session, Language)।\n- **Zustand**: অত্যন্ত হালকা, সহজ এবং সিলেক্টর (`useStore(state => state.cart)`) সাপোর্ট করে যাতে শুধুমাত্র কার্ট বদলালে কার্ট কম্পোনেন্ট রি-রেন্ডার হয়, বাকিগুলো নয়।\n- **Redux Toolkit (RTK)**: বড় এন্টারপ্রাইজ অ্যাপ্লিকেশনে জটিল স্টেট ট্রানজিশন, মিডলওয়্যার এবং টাইম-ট্রাভেল ডিবাগিংয়ের জন্য।\n- **TanStack Query (React Query)**: **Server State** (API ডেটা ফেচিং, ক্যাশিং, অটো রি-ফেচিং, ডিডিউপিং)। সার্ভার ডেটার জন্য Redux/Zustand ব্যবহার করা অপচয়।",
    interviewAnswer:
      "`useContext` consumes values provided by a `React.createContext().Provider` without manual prop threading. While ideal for low-frequency global values (e.g., Theme, Localization, Auth Session), Context is not an optimized state management tool because any update to the context value triggers re-renders across all consuming components. For complex, high-frequency client state, selector-based libraries like **Zustand** or **Redux Toolkit** prevent unnecessary renders. For server state (fetching, caching, mutation), **TanStack Query** is the de-facto standard.",
    detailedExplanation: {
      whatItIs:
        "React-এর ডিপ ডেটা পাসিং মেকানিজম এবং গ্লোবাল স্টেট ম্যানেজমেন্ট ফ্রেমওয়ার্ক।",
      whyItExists:
        "Prop drilling এড়ানো এবং অ্যাপের সার্বজনীন ডেটা কেন্দ্রীয়ভাবে পরিচালনা করা।",
      howItWorks:
        "Context ভ্যালু বদলালে React ইন্টারনালি সাবস্ক্রাইব করা সব কম্পোনেন্টকে Dirty মার্ক করে রি-রেন্ডার শিডিউল করে।",
      whenToUse:
        "Theme/Auth-এ Context; Cart/Modal State-এ Zustand; API Caching-এ TanStack Query।",
      keyPoints: [
        "Context is a dependency injection / transport mechanism, not a full state manager.",
        "Context updates trigger all consumers to re-render (no native selectors).",
        "Separate Client State (Zustand) from Server State (TanStack Query).",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { createContext, useContext, useState } from "react";

// ১. Context তৈরি
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "Shuvo", role: "Admin" });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ২. চাইল্ড কম্পোনেন্টে ব্যবহার
export function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>Please log in.</p>;

  return (
    <div className="p-3 border rounded">
      <p>Signed in as: <strong>{user.name}</strong> ({user.role})</p>
      <button onClick={logout} className="text-red-500 text-sm mt-1">Logout</button>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Provider pattern",
          description: "AuthProvider চাইল্ড ট্রি-র সবাইকে user ও logout মেথড সরবরাহ করছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Theme Switcher & Localization",
        description: "পুরো অ্যাপ্লিকেশনের Light/Dark থিম অথবা বাংলা/ইংরেজি ভাষা সিলেক্ট করার গ্লোবাল স্টেট পরিচালনা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'I divide state into two categories: Server State managed by TanStack Query, and Client State managed by lightweight stores like Zustand or Context API for theme/auth.'",
      deliveryStrategy: "কেন Context API-তে সিলেক্টর না থাকায় পারফরম্যান্স ড্রপ হতে পারে তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "সব API কল ও ডেটা Redux বা Context-এ সংরক্ষণ করা উচিত।",
          right: "API ডেটা Server State; এটি TanStack Query দিয়ে ক্যাশ ও রি-ফেচ হ্যান্ডেল করা সবচেয়ে কার্যকর।",
        },
      ],
    },
    quickRevision: [
      "useContext = Context Provider থেকে সরাসরি মান গ্রহণ।",
      "Low frequency: Theme, Auth, Locale।",
      "High frequency client state: Zustand / Redux Toolkit।",
      "Server state: TanStack Query (fetching, caching, revalidation)।",
    ],
    followUpQuestions: [
      {
        question: "Context API-র অপ্রয়োজনীয় রি-রেন্ডার কীভাবে কমানো যায়?",
        shortHint: "স্টেট এবং ডিসপ্যাচ ফাংশনকে আলাদা আলাদা দুটি Context-এ ভাগ করে (StateContext ও DispatchContext)।",
      },
    ],
    tags: ["React", "useContext", "State Management", "Zustand", "Redux", "TanStack Query"],
  },

  // 14. useReducer vs useState
  {
    id: "react-usereducer-vs-usestate",
    slug: "react-usereducer-vs-usestate",
    question: "What is the useReducer hook, how does it work, and when should you use useReducer instead of useState?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**`useReducer`** হলো React-এর একটি স্টেট ম্যানেজমেন্ট হুক যা Redux-এর রিডিউসার প্যাটার্ন (`(state, action) => newState`) অনুসরণ করে কাজ করে। যখন কোনো কম্পোনেন্টে একাধিক পরস্পর নির্ভরশীল স্টেট থাকে, জটিল বিজনেস লজিক থাকে, অথবা পরবর্তী স্টেট পূর্ববর্তী স্টেটের ওপর জটিল শর্তের মাধ্যমে নির্ভর করে—তখন `useState`-এর বদলে `useReducer` ব্যবহার করা কোডকে প্রেডিক্টেবল ও টেস্টেবল করে।",
    easyExplanation:
      "১. **useReducer কীভাবে কাজ করে?**:\n- **State**: বর্তমান ডেটা অবজেক্ট।\n- **Action**: কী ঘটনা ঘটেছে তার অবজেক্ট (`{ type: 'ADD_ITEM', payload: item }`)।\n- **Reducer Function**: একটি পিওর ফাংশন যা আগের স্টেট এবং অ্যাকশন গ্রহণ করে নতুন স্টেট রিটার্ন করে।\n- **Dispatch**: অ্যাকশন পাঠানোর ফাংশন (`dispatch({ type: 'INCREMENT' })`)।\n\n২. **useState বনাম useReducer কখন কোনটি?**:\n- **`useState` ব্যবহার করবেন যখন**:\n  - স্টেট সিম্পল (স্ট্রিং, নাম্বার, বুলিয়ান বা সাধারণ অবজেক্ট)।\n  - স্টেট ট্রানজিশন স্বাধীন (একটি পরিবর্তনের সাথে অন্যটি জড়িত নয়)।\n- **`useReducer` ব্যবহার করবেন যখন**:\n  - স্টেট জটিল (নেস্টেড অবজেক্ট বা অ্যারে)।\n  - একটি অ্যাকশনের ফলে একাধিক স্টেট ভ্যারিয়েবল একসাথে পরিবর্তন করতে হয় (যেমন: শপিং কার্ট, মাল্টি-স্টেপ ফর্ম)।\n  - বিজনেস লজিক কম্পোনেন্টের বাইরে আলাদা ফাইলে রেখে ইউনিট টেস্ট করতে চান।",
    interviewAnswer:
      "`useReducer` is an alternative to `useState` that manages complex state transitions using the Reducer pattern: `(state, action) => newState`. Instead of imperative state setters scattered across event handlers, components dispatch descriptive actions, centralizing all state transition logic inside a pure reducer function. `useReducer` is preferred when the next state depends on complex sub-properties, when multiple state variables transition together, or when you need predictable state machine logic that is easily unit-tested outside the React component tree.",
    detailedExplanation: {
      whatItIs:
        "অ্যাকশন ও রিডিউসার ভিত্তিক স্টেট ম্যানেজমেন্ট হুক।",
      whyItExists:
        "কমপ্লেক্স স্টেট ট্রানজিশন কো-লোকেট করতে এবং স্প্যাগেটি `setState` লজিক রোধ করতে।",
      howItWorks:
        "`dispatch(action)` -> React Reducer ফাংশন এক্সিকিউট করে -> নতুন স্টেট তৈরি করে -> কম্পোনেন্ট রি-রেন্ডার করে।",
      whenToUse:
        "শপিং কার্ট, জটিল ফিল্টারিং প্যানেল, মাল্টি-স্টেপ উইজার্ড এবং ফর্ম বিল্ডারে।",
      keyPoints: [
        "Pure function: Reducer must not produce side effects.",
        "Dispatch identity is stable across renders (no need to include in dependency arrays).",
        "Improves readability and testing by separating 'what happened' (action) from 'how state updates' (reducer).",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useReducer } from "react";

// ১. পিওর রিডিউসার ফাংশন
const initialState = { count: 0, step: 1 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };
    case "DECREMENT":
      return { ...state, count: state.count - state.step };
    case "SET_STEP":
      return { ...state, step: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error(\`Unhandled action type: \${action.type}\`);
  }
}

// ২. কম্পোনেন্ট
export function ComplexCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="p-4 border rounded space-y-3">
      <p className="font-semibold">Count: {state.count} (Step: {state.step})</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn">Plus</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} className="btn">Minus</button>
        <button onClick={() => dispatch({ type: "RESET" })} className="btn">Reset</button>
      </div>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ type: "SET_STEP", payload: Number(e.target.value) })}
        className="border p-1 w-20"
      />
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Centralized reducer",
          description: "সব ধরনের স্টেট লজিক counterReducer-এ এককভাবে হ্যান্ডেল করা হচ্ছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Multi-Step Checkout Wizard",
        description: "শিপিং ঠিকানা, পেমেন্ট মেথড, কুপন কোড এবং অর্ডার সামারির জটিল স্টেট ট্রানজিশন `useReducer` দিয়ে হ্যান্ডেল করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'useReducer separates the concern of what happened (actions) from how the state updates (the reducer), making state transitions deterministic and straightforward to unit test.'",
      deliveryStrategy: "useState বনাম useReducer ব্যবহারের সুনির্দিষ্ট ক্রাইটেরিয়া উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "সব স্টেটেই useReducer ব্যবহার করা ভালো কারণ এটি Redux-এর মতো।",
          right: "সাধারণ ১-২টি স্টেটের ক্ষেত্রে useReducer অপ্রয়োজনীয় বয়লারপ্লেট বাড়ায়; সরল স্টেটে useState-ই সেরা।",
        },
      ],
    },
    quickRevision: [
      "`useReducer(reducer, initialState)`",
      "`(state, action) => newState`",
      "Complex state transitions ও multi-variable synchronization-এ সেরা।",
      "Reducer ফাংশন সবসময় Pure হতে হবে।",
    ],
    followUpQuestions: [
      {
        question: "useReducer-এর dispatch ফাংশন কি প্রতি রেন্ডারে পরিবর্তন হয়?",
        shortHint: "না, React গ্যারান্টি দেয় dispatch-এর রেফারেন্স আজীবন স্ট্যাবল থাকে, তাই useEffect dependency-তে এটি দিতে হয় না।",
      },
    ],
    tags: ["React", "useReducer", "useState", "State Management", "Redux Pattern"],
  },

  // 15. Custom Hooks in React
  {
    id: "react-custom-hooks-guide",
    slug: "react-custom-hooks-guide",
    question: "What are Custom Hooks in React, when should you create them, and how do you build reusable custom hooks?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "**Custom Hook** হলো একটি সাধারণ জাভাস্ক্রিপ্ট ফাংশন যার নাম `use` দিয়ে শুরু হয় (যেমন: `useDebounce`, `useLocalStorage`) এবং যার ভেতরে এক বা একাধিক বিল্ট-ইন React Hooks কল করা যায়। যখন একাধিক কম্পোনেন্টের মধ্যে একই স্টেটফুল লজিক (Stateful Logic) ডুপ্লিকেট হয়, তখন UI ঠিক রেখে শুধুমাত্র লজিকটুকু আলাদা ও পুনঃব্যবহারযোগ্য করার জন্য Custom Hooks তৈরি করা হয়।",
    easyExplanation:
      "১. **Custom Hook কী এবং কেন তৈরি করবেন?**:\n- সাধারণ ফাংশনে React হুক্স (`useState`, `useEffect`) কল করা যায় না। কিন্তু ফাংশনের নাম `use` দিয়ে শুরু করলে React সেটিকে Custom Hook হিসেবে গণ্য করে এবং লিন্টার হুক্সের নিয়ম বজায় রাখে।\n- এটি কম্পোনেন্টের কোডকে ক্লিন ও সংক্ষিপ্ত করে।\n\n২. **কাস্টম হুক তৈরির নিয়মাবলী**:\n- ফাংশনের নাম অবশ্যই `use` দিয়ে শুরু হতে হবে (যেমন `useFetch`, `useWindowSize`)।\n- এটি কোনো JSX রিটার্ন করে না; বরং স্টেট ভ্যালু, মেথড বা অবজেক্ট রিটার্ন করে।\n- মনে রাখবেন: কাস্টম হুক **স্টেট শেয়ার করে না**, বরং **লজিক শেয়ার করে**। প্রতিটি কম্পোনেন্টে কাস্টম হুক কল করলে সম্পূর্ণ স্বাধীন নতুন স্টেট তৈরি হয়।\n\n৩. **বহুল ব্যবহৃত কিছু বাস্তব কাস্টম হুক**:\n- `useDebounce`: ঘন ঘন API কল আটকানোর জন্য।\n- `useLocalStorage`: ব্রাউজার স্টোরেজের সাথে স্টেট সিঙ্ক রাখা।\n- `useMediaQuery`: রেসপন্সিভ স্ক্রিন সাইজ নির্ণয়।\n- `useOnClickOutside`: মোডাল বা ড্রপডাউনের বাইরে ক্লিক শনাক্ত করা।",
    interviewAnswer:
      "A Custom Hook is a reusable JavaScript function prefixed with `use` that can invoke other React Hooks. Custom Hooks allow developers to extract and encapsulate stateful logic—such as data fetching, browser storage synchronization, timers, or event listeners—away from the UI layer. Importantly, Custom Hooks share *stateful logic*, not the state itself: each component invocation receives an entirely isolated instance of the internal state.",
    detailedExplanation: {
      whatItIs:
        "স্টেটফুল লজিক এক্সট্রাক্ট এবং রি-ইউজ করার স্ট্যান্ডার্ড React প্যাটার্ন।",
      whyItExists:
        "কম্পোনেন্টে ডুপ্লিকেট কোড দূর করা এবং বিজনেস লজিককে UI প্রেজেন্টেশন থেকে আলাদা করা।",
      howItWorks:
        "কাস্টম হুক কল করা কম্পোনেন্টের Fiber ট্রির সাথে হুকগুলোর স্টেট ইন্টারনালি লিঙ্কড থাকে।",
      whenToUse:
        "যেকোনো সময় ২ বা ততোধিক কম্পোনেন্টে একই স্টেট/ইফেক্ট লজিক থাকলে।",
      keyPoints: [
        "Must be prefixed with `use` (e.g., `useDebounce`).",
        "Shares stateful logic, NOT shared state instances.",
        "Can return anything: primitive, array `[value, setter]`, or object `{ data, error, isLoading }`.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useEffect } from "react";

// ১. রিয়েল-ওয়ার্ল্ড Custom Hook: useDebounce
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // টাইমার সেট করা
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // ইউজার টাইপ করতে থাকলে আগের টাইমার ক্লিয়ার হবে
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ২. কম্পোনেন্টে ব্যবহার
export function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API Search Triggered for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Type to search..."
      className="p-2 border rounded"
    />
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "useDebounce logic",
          description: "ইউজার টাইপ করা থামালে ৪০০ms পর debouncedSearch আপডেট হবে, ফলে সার্ভারে অপ্রয়োজনীয় API রিকোয়েস্ট যাবে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Search Autocomplete Input",
        description: "ইউজার প্রতি ক্যারেক্টার টাইপ করার সময় API কল না করে `useDebounce` দিয়ে টাইপিং শেষ হওয়ার ৫০০ms পর ডেটা ফেচ করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Custom hooks allow us to adhere to the Single Responsibility Principle by decoupling complex state and lifecycle logic from the visual JSX presentation.'",
      deliveryStrategy: "স্পষ্ট করুন যে কাস্টম হুক স্টেট শেয়ার করে না (প্রতিটি কম্পোনেন্ট স্বাধীন স্টেট পায়)।",
      avoidSaying: [
        {
          wrong: "কাস্টম হুক ব্যবহার করলে দুটি কম্পোনেন্ট একই গ্লোবাল স্টেট শেয়ার করে।",
          right: "কাস্টম হুক শুধুমাত্র লজিক শেয়ার করে; স্টেট শেয়ার করতে Context বা Zustand প্রয়োজন।",
        },
      ],
    },
    quickRevision: [
      "Must start with `use...` naming convention.",
      "Shares stateful logic, NOT shared state instances.",
      "Encapsulates `useState`, `useEffect`, etc.",
      "Examples: `useDebounce`, `useLocalStorage`, `useWindowSize`।",
    ],
    followUpQuestions: [
      {
        question: "Custom Hook-এর নাম 'use' দিয়ে শুরু না করলে কী সমস্যা হবে?",
        shortHint: "React-এর লিন্টার (eslint-plugin-react-hooks) হুকের নিয়ম ভঙ্গের ভুলগুলো ধরতে পারবে না।",
      },
    ],
    tags: ["React", "Custom Hooks", "useDebounce", "Reusability", "Logic Extraction"],
  },

  // 16. Advanced Hooks (useMemo, useCallback, useRef, useId, useTransition, useDeferredValue)
  {
    id: "react-advanced-hooks-usememo-usecallback-useref",
    slug: "react-advanced-hooks-usememo-usecallback-useref",
    question: "What are the other essential React Hooks (useMemo, useCallback, useRef, useId, useTransition, useDeferredValue) and when should you use each?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "React-এর উন্নত হুকগুলো পারফরম্যান্স, DOM অ্যাক্সেস এবং কনকারেন্সি নিয়ন্ত্রণের জন্য ব্যবহৃত হয়:\n- **`useMemo`**: ভারী গণনার ফলাফল ক্যাশ (Memoize) করে।\n- **`useCallback`**: ফাংশনের রেফারেন্স স্ট্যাবল রাখে।\n- **`useRef`**: রি-রেন্ডার ট্রিগার না করে পরিবর্তনশীল মান সংরক্ষণ ও সরাসরি DOM নোড অ্যাক্সেস করে।\n- **`useId`**: SSR-বান্ধব ইউনিক আইডি তৈরি করে।\n- **`useTransition` / `useDeferredValue`**: UI না আটকে ব্যাকগ্রাউন্ডে নন-আর্জেন্ট স্টেট আপডেট প্রসেস করে।",
    easyExplanation:
      "প্রতিটি হুকের মূল কাজ ও ব্যবহার:\n\n১. **`useMemo` (ক্যালকুলেশন ক্যাশিং)**:\n- `const total = useMemo(() => calculateTotal(items), [items]);`\n- `items` না বদলালে ভারী ফাংশন আবার চলবে না, আগের সংরক্ষিত ফলাফল ফেরত দেবে।\n\n২. **`useCallback` (ফাংশন রেফারেন্স ক্যাশিং)**:\n- `const handleClick = useCallback(() => { ... }, [id]);`\n- প্যারেন্ট রি-রেন্ডার হলে নতুন ফাংশন অবজেক্ট তৈরি বন্ধ করে এবং `React.memo` করা চাইল্ডের অপ্রয়োজনীয় রি-রেন্ডার ঠেকায়।\n\n৩. **`useRef` (DOM ও স্থায়ী মিউটেবল রেফারেন্স)**:\n- ইনপুটে ফোকাস করা (`inputRef.current.focus()`) অথবা এমন মান রাখা যা পাল্টালে কোনো রি-রেন্ডার দরকার নেই (যেমন: `timerId.current`)।\n\n৪. **`useId` (ইউনিক অ্যাক্সেসিবিলিটি আইডি)**:\n- সার্ভার ও ক্লায়েন্টে একই ইউনিক আইডি তৈরি করে যা ফর্মের `htmlFor` এবং `aria-describedby`-তে হাইড্রেশন মিসম্যাচ রোধ করে।\n\n৫. **`useTransition` & `useDeferredValue` (কনকারেন্ট হুক্স)**:\n- **`useTransition`**: `startTransition(() => setBigList(data))` দিয়ে ভারী রেন্ডারকে লো-প্রাইওরিটি বানিয়ে টাইপিং বা অ্যানিমেশনকে স্মুথ রাখে।\n- **`useDeferredValue`**: প্রপস হিসেবে পাওয়া মানের একটি ডিফায়ার্ড (বিলম্বিত) কপি দেয় যা ব্যাকগ্রাউন্ডে রেন্ডার হয়।",
    interviewAnswer:
      "React provides specialized hooks for optimization and concurrent rendering: **`useMemo`** caches the result of expensive computations between renders. **`useCallback`** memoizes callback function references to prevent breaking reference equality for `React.memo` optimized children. **`useRef`** persists a mutable reference that survives re-renders without triggering a render when mutated (also used for DOM element access). **`useId`** generates hydration-safe unique IDs for accessibility attributes. **`useTransition`** and **`useDeferredValue`** enable Concurrent React by marking state transitions or values as non-blocking and interruptible.",
    detailedExplanation: {
      whatItIs:
        "পারফরম্যান্স অপ্টিমাইজেশন, অ্যাক্সেসিবিলিটি এবং কনকারেন্ট রেন্ডারিং হুক সেট।",
      whyItExists:
        "ব্রাউজার ল্যাগ বন্ধ করা, মেমরি ও রেফারেন্সিয়াল স্ট্যাবিলিটি বজায় রাখা এবং স্মুথ ইউজার এক্সপেরিয়েন্স দেওয়া।",
      howItWorks:
        "ডিপেন্ডেন্সি অ্যারে চেকের মাধ্যমে ক্যাশড রেজাল্ট বা স্ট্যাবল পয়েন্টার সরবরাহ করে।",
      whenToUse:
        "ভারী ফিল্টারিংয়ে `useMemo`, চাইল্ড কলব্যাকে `useCallback`, ফোকাসে `useRef`, সার্চ ল্যাগে `useTransition`।",
      keyPoints: [
        "useMemo memoizes values; useCallback memoizes function references.",
        "useRef mutations do NOT trigger re-renders.",
        "useTransition marks updates as non-urgent, keeping the UI responsive.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useMemo, useCallback, useRef, useId } from "react";

export function AdvancedHooksDemo({ items }) {
  const [filter, setFilter] = useState("");
  const inputRef = useRef(null);
  const inputId = useId();

  // ১. useMemo: ভারী ফিল্টারিং ক্যাশ করা
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  }, [items, filter]);

  // ২. useCallback: স্ট্যাবল মেথড রেফারেন্স
  const handleClear = useCallback(() => {
    setFilter("");
    inputRef.current?.focus(); // ৩. useRef দিয়ে DOM ফোকাস
  }, []);

  return (
    <div className="p-4 space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium">Search Item:</label>
      <input
        id={inputId}
        ref={inputRef}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-1 rounded"
      />
      <button onClick={handleClear} className="ml-2 px-2 py-1 bg-slate-200 rounded">Clear</button>
      <p>Results count: {filteredItems.length}</p>
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "useMemo & useCallback integration",
          description: "ফিল্টার ফলাফল ক্যাশ হচ্ছে এবং ক্লিয়ার বাটনের কলব্যাক ফাংশন মেমোইজ করা হয়েছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Real-time Data Grid Filter & Focus Trap",
        description: "১০,০০০ সারির টেবিলে টাইপ করার সময় `useMemo` দিয়ে দ্রুত সার্চ করা এবং মোডাল ওপেন হলে `useRef` দিয়ে অটো-ফোকাস করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Do not prematurely optimize with useMemo and useCallback everywhere. The overhead of memory caching and dependency array comparison can sometimes exceed the cost of re-rendering.'",
      deliveryStrategy: "useMemo vs useCallback এর সম্পর্ক স্পষ্ট করুন (`useCallback(fn, deps)` মূলত `useMemo(() => fn, deps)` এর সমতুল্য)।",
      avoidSaying: [
        {
          wrong: "useRef-এ ভ্যালু চেঞ্জ হলে কম্পোনেন্ট আপডেট হবে।",
          right: "useRef পরিবর্তন হলে কোনো রি-রেন্ডার ট্রিগার হয় না; এটি সাধারণ মিউটেবল জাভাস্ক্রিপ্ট অবজেক্ট `{ current: ... }`।",
        },
      ],
    },
    quickRevision: [
      "useMemo: Caches calculated value.",
      "useCallback: Caches function instance.",
      "useRef: Mutable container, no re-render, DOM access.",
      "useId: SSR-safe unique identifier.",
      "useTransition: Non-urgent state updates (responsive UI).",
    ],
    followUpQuestions: [
      {
        question: "useCallback এবং useMemo-র মধ্যে অভ্যন্তরীণ সম্পর্ক কী?",
        shortHint: "`useCallback(fn, deps)` হলো মূলত `useMemo(() => fn, deps)` এর একটি সিনট্যাক্স শর্টকাট।",
      },
    ],
    tags: ["React", "useMemo", "useCallback", "useRef", "useId", "useTransition", "Performance"],
  },

  // 17. Performance Optimization & Preventing Unnecessary Re-renders
  {
    id: "react-prevent-unnecessary-re-renders-optimization",
    slug: "react-prevent-unnecessary-re-renders-optimization",
    question: "What causes unnecessary re-renders in React, and what are the best techniques to prevent them?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "React-এ অপ্রয়োজনীয় রি-রেন্ডারের প্রধান কারণগুলো হলো: ১. প্যারেন্ট কম্পোনেন্ট রি-রেন্ডার হওয়া, ২. প্রপসে প্রতি রেন্ডারে নতুন অবজেক্ট বা ফাংশন রেফারেন্স পাস করা, ৩. আন-অপ্টিমাইজড Context API আপডেট, এবং ৪. লোকাল স্টেটের অতিরিক্ত বিস্তার। এটি সমাধানের প্রধান উপায় হলো: **`React.memo`**, **`useCallback` / `useMemo`**, **Component Composition (children lifting)**, **লোকাল স্টেট পুশ-ডাউন**, এবং **Code Splitting (`React.lazy`)**।",
    easyExplanation:
      "১. **অপ্রয়োজনীয় রি-রেন্ডার কেন ঘটে?**:\n- ডিফল্টভাবে প্যারেন্ট রি-রেন্ডার হলে তার ভেতরের সব চাইল্ড স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয়, যদিও তাদের ডেটা বদলায়নি।\n- ইনলাইন ফাংশন (`onClick={() => doSomething()}`) বা অবজেক্ট (`style={{ color: 'red' }}`) পাস করলে প্রতি রেন্ডারে নতুন মেমরি রেফারেন্স তৈরি হয়, ফলে `React.memo` কাজ করে না।\n\n২. **কীভাবে বন্ধ করবেন (Top 5 Techniques)**:\n- **পদ্ধতি ১: স্টেট পুশ ডাউন (State Localization)**:\n  স্টেট পুরো পেজে না রেখে শুধুমাত্র যে বাটন বা ইনপুটে দরকার সেখানে নামিয়ে আনা।\n- **পদ্ধতি ২: Component Composition (`children` prop)**:\n  ভারী চাইল্ড কম্পোনেন্টকে প্যারেন্টের ভেতর না বানিয়ে বাইরে থেকে `<Parent><HeavyChild /></Parent>` আকারে পাঠালে প্যারেন্ট রি-রেন্ডার হলেও চাইল্ড রি-রেন্ডার হবে না।\n- **পদ্ধতি ৩: `React.memo` + `useCallback`**:\n  চাইল্ড কম্পোনেন্টকে মেমোইজ করা এবং পাস করা ফাংশনকে `useCallback` দিয়ে রেফারেনশিয়ালি স্ট্যাবল রাখা।\n- **পদ্ধতি ৪: Context Splitting**:\n  স্টেট এবং ডিসপ্যাচ আলাদা Context-এ রাখা যাতে ডিসপ্যাচ ব্যবহারকারী কম্পোনেন্ট স্টেটের কারণে রি-রেন্ডার না হয়।\n- **পদ্ধতি ৫: Code Splitting & Virtualization**:\n  বড় লিস্টে `react-window` বা `tanstack-virtual` দিয়ে শুধুমাত্র স্ক্রিনে দৃশ্যমান ২০-৩০টি আইটেম রেন্ডার করা।",
    interviewAnswer:
      "Unnecessary re-renders are primarily triggered by parent renders cascading down the component tree, new object/function references failing shallow equality checks, un-scoped context values, and state declared higher than necessary. To optimize, follow these patterns: **Localize State** (push state down), leverage **Component Composition** by passing components as `children`, wrap expensive components in **`React.memo`** paired with **`useCallback`/`useMemo`**, split monolithic contexts, and implement **List Virtualization** (e.g., TanStack Virtual) for massive datasets.",
    detailedExplanation: {
      whatItIs:
        "React অ্যাপ্লিকেশনের পারফরম্যান্স টিউনিং এবং রি-রেন্ডার মিনিমাইজেশন স্ট্র্যাটেজি।",
      whyItExists:
        "জাভাস্ক্রিপ্ট এক্সিকিউশন টাইম কমিয়ে ফ্রেম ড্রপ দূর করা এবং মোবাইল ডিভাইসে দ্রুত রেসপন্স নিশ্চিত করা।",
      howItWorks:
        "শ্যালো কম্প্যারিজন ও কম্পোনেন্ট ট্রি আইসোলেশনের মাধ্যমে VDOM ডিফারেন্সিং স্কিপ করা।",
      whenToUse:
        "বড় টেবিল, রিয়েল-টাইম ড্যাশবোর্ড, ভারী অ্যানিমেশন এবং কমপ্লেক্স ফর্মে।",
      keyPoints: [
        "Push state down to where it is needed before adding useMemo/useCallback.",
        "Component composition (passing `children`) is the cheapest optimization.",
        "Virtualize lists with thousands of DOM nodes.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, memo } from "react";

// ১. অপ্টিমাইজেশন: স্টেট পুশ ডাউন (State Localization)
// পুরো পেজ রি-রেন্ডার না করে শুধু ইনপুট বক্সটি নিজে রেন্ডার হবে
function SearchInput({ onSearch }) {
  const [text, setText] = useState("");
  return (
    <input
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onSearch(e.target.value);
      }}
      placeholder="Type here..."
      className="border p-2"
    />
  );
}

// ২. মেমোইজড চাইল্ড
const HeavyChart = memo(function HeavyChart() {
  console.log("Heavy chart rendered!");
  return <div className="p-6 bg-slate-900 text-white rounded">Chart Visualization</div>;
});

export function Dashboard() {
  return (
    <div className="p-4 space-y-4">
      <SearchInput onSearch={(val) => console.log("Searching:", val)} />
      {/* SearchInput টাইপ করলেও HeavyChart রি-রেন্ডার হবে না */}
      <HeavyChart />
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "State localization",
          description: "SearchInput-এর ভেতরে স্টেট থাকায় Dashboard রি-রেন্ডার হচ্ছে না, ফলে HeavyChart সুরক্ষিত।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Financial Stock Trading Ticker",
        description: "প্রতি সেকেন্ডে শত শত স্টকের দাম আপডেট হওয়ার সময় পুরো পেজ রি-রেন্ডার না করে শুধুমাত্র নির্দিষ্ট প্রাইস সেলে স্টেট আইসোলেট করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'My first optimization rule is always architectural: push state down and use component composition with children. Only after that do I reach for React.memo and useCallback.'",
      deliveryStrategy: "React DevTools Profiler ব্যবহার করে কীভাবে স্লো রেন্ডার চিহ্নিত করেন তা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "সব ফাংশনে useCallback দিলেই রি-রেন্ডার চিরতরে বন্ধ হয়ে যায়।",
          right: "useCallback শুধুমাত্র তখনই কাজ করে যখন চাইল্ড কম্পোনেন্টটি `React.memo` দিয়ে র‍্যাপ করা থাকে।",
        },
      ],
    },
    quickRevision: [
      "1. Push state down (Localize state).",
      "2. Component composition (`children` prop).",
      "3. `React.memo` + `useCallback`/`useMemo`।",
      "4. Context splitting (Separate state & dispatch).",
      "5. List Virtualization for large lists.",
    ],
    followUpQuestions: [
      {
        question: "React DevTools Profiler দিয়ে কীভাবে স্লো রেন্ডার ডিবাগ করবেন?",
        shortHint: "'Why did this render?' অপশন চালু করে ফ্লিকার ও দীর্ঘ রেন্ডার টাইম নেওয়া কম্পোনেন্ট চিহ্নিত করে।",
      },
    ],
    tags: ["React", "Performance", "Optimization", "Re-renders", "React.memo", "Profiling"],
  },

  // 18. Error Boundaries, StrictMode & Memory Leaks
  {
    id: "react-error-boundaries-strictmode-memory-leaks",
    slug: "react-error-boundaries-strictmode-memory-leaks",
    question: "What causes memory leaks in React, what does Strict Mode check for, and how do you handle global errors using Error Boundaries?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Memory Leak** ঘটে যখন কম্পোনেন্ট আনমাউন্ট হওয়ার পরও সাবস্ক্রিপশন, টাইমার (`setInterval`) বা ইভেন্ট লিসেনার চালু থাকে। **Strict Mode** ডেভেলপমেন্ট মোডে কম্পোনেন্ট ও ইফেক্টকে ইচ্ছাকৃতভাবে **দুইবার রান (Double-invoke)** করিয়ে মেমরি লিক, সাইড-ইফেক্ট ক্লিনআপ এবং ডেপ্রিকেটেড এপিআই শনাক্ত করে। **Error Boundary** হলো বিশেষ কম্পোনেন্ট যা চাইল্ড ট্রির যেকোনো জাভাস্ক্রিপ্ট ক্র্যাশ ক্যাচ করে পুরো অ্যাপ সাদা স্ক্রিন (White screen of death) হওয়া ঠেকিয়ে ফলব্যাক UI দেখায়।",
    easyExplanation:
      "১. **Memory Leak কীভাবে ঘটে ও কীভাবে প্রতিরোধ করবেন?**:\n- ধরুন কোনো কম্পোনেন্ট মাউন্টে `setInterval` বা `window.addEventListener` চালু করল, কিন্তু আনমাউন্ট হওয়ার সময় ক্লিয়ার করল না। কম্পোনেন্ট চলে গেলেও ব্রাউজার মেমরিতে ব্যাকগ্রাউন্ড কোড চলতে থাকবে।\n- **সমাধান**: `useEffect`-এর রিটার্ন ক্লিনআপ ফাংশনে `clearInterval` বা `removeEventListener` কল করা এবং API ফেচিংয়ে `AbortController` ব্যবহার করা।\n\n২. **React Strict Mode (`<React.StrictMode>`) কী করে?**:\n- এটি শুধুমাত্র **Development** মোডে কাজ করে (প্রোডাকশনে কোনো প্রভাব ফেলে না)।\n- এটি প্রতিটি কম্পোনেন্টকে মাউন্ট -> আনমাউন্ট -> পুনরায় মাউন্ট করে।\n- **উদ্দেশ্য**: ডেভেলপার ঠিকমতো `useEffect`-এ ক্লিনআপ ফাংশন লিখেছেন কিনা এবং স্টেট পিওর আছে কিনা তা তাৎক্ষণিক নিশ্চিত করা।\n\n৩. **Error Boundaries কীভাবে কাজ করে?**:\n- সাধারণ `try...catch` ডিক্লারেটিভ JSX রেন্ডারিংয়ের ভেতরের এরর ক্যাচ করতে পারে না।\n- Error Boundary ক্লাস কম্পোনেন্টের দুটি মেথড ব্যবহার করে:\n  - `static getDerivedStateFromError(error)`: ফলব্যাক UI দেখানোর স্টেট আপডেট করে।\n  - `componentDidCatch(error, errorInfo)`: Sentry বা লগিং সার্ভারে এরর পাঠায়।\n- আধুনিক অ্যাপে `react-error-boundary` প্যাকেজ ব্যবহার করে ফাংশনাল কম্পোনেন্টেই সহজে বাউন্ডারি দেওয়া যায়।",
    interviewAnswer:
      "A **Memory Leak** in React occurs when unmounted components leave dangling event listeners, intervals, or unresolved asynchronous subscriptions holding references in memory. **React Strict Mode** is a development-only tool that double-invokes render functions and effects to expose uncleaned side effects, impure renders, and deprecated lifecycle usage. **Error Boundaries** are React components that catch JavaScript runtime errors anywhere in their child component tree via `getDerivedStateFromError` (to render a fallback UI) and `componentDidCatch` (to log errors to services like Sentry), preventing the entire application from crashing to a blank white screen.",
    detailedExplanation: {
      whatItIs:
        "মেমরি ও এরর রেজিলিয়েন্স আর্কিটেকচার (Error Boundaries, Cleanups, Strict Mode)।",
      whyItExists:
        "ব্রাউজার মেমরি রক্ষা করা, প্রোডাকশনে ক্র্যাশ হ্যান্ডেল করা এবং বাগমুক্ত অ্যাপ্লিকেশন তৈরি।",
      howItWorks:
        "Error Boundary কম্পোনেন্ট রেন্ডার এরর ক্যাচ করে বাউন্ডারির ভেতরের অংশটুকু বিচ্ছিন্ন করে ফলব্যাক রেন্ডার করে।",
      whenToUse:
        "রুট লেভেল, পেমেন্ট গেটওয়ে, চার্ট মডিউল এবং যেকোনো জটিল থার্ড-পার্টি ইন্টিগ্রেশনে।",
      keyPoints: [
        "Strict Mode double-invokes effects only in development to catch missing cleanups.",
        "Error boundaries catch errors during rendering, lifecycle methods, and constructors.",
        "Error boundaries do NOT catch errors in async event handlers or SSR (use try/catch there).",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import React, { Component, useEffect, useState } from "react";

// ১. মেমরি লিক মুক্ত ইফেক্ট (AbortController সহ)
export function UserProfileWatcher({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    // Cleanup: আনমাউন্ট হলে চলমান নেটওয়ার্ক রিকোয়েস্ট বাতিল হবে
    return () => controller.abort();
  }, [userId]);

  return <div>{user ? user.name : "Loading..."}</div>;
}

// ২. Error Boundary Class Component
export class GlobalErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Logged to Sentry:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded">
          <h2 className="text-red-700 font-bold">Something went wrong!</h2>
          <button onClick={() => this.setState({ hasError: false })} className="mt-2 btn">
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`,
      explanationSteps: [
        {
          step: 1,
          title: "AbortController cleanup",
          description: "কম্পোনেন্ট দ্রুত আনমাউন্ট বা সুইচ হলে ব্যাকগ্রাউন্ড ফেচ বাতিল হয়ে মেমরি লিক রোধ করে।",
        },
        {
          step: 2,
          title: "Error Boundary resilience",
          description: "চাইল্ড ক্র্যাশ করলে পুরো অ্যাপ বন্ধ না হয়ে ফ্রেন্ডলি ফলব্যাক কার্ড প্রদর্শিত হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Payment Gateway Checkout Crash Protection",
        description: "পেমেন্ট উইজেটে কোনো থার্ড পার্টি স্ক্রিপ্ট এরর দিলে পুরো ইকমার্স সাইট বন্ধ না হয়ে শুধুমাত্র পেমেন্ট কার্ডে 'Payment failed, retry' বার্তা দেখানো।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Error Boundaries do not catch errors inside async event handlers (like onClick). For event handlers, standard try/catch blocks must be used.'",
      deliveryStrategy: "React 18 Strict Mode কেন দুইবার চলে (double invocation) তা আত্মবিশ্বাসের সাথে ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Error Boundary সব ধরনের এরর যেমন setTimeout বা onClick এররও ক্যাচ করে।",
          right: "Error Boundary শুধুমাত্র JSX রেন্ডার ফেজ ও লাইফসাইকেল মেথডের এরর ক্যাচ করে; ইভেন্ট হ্যান্ডলারে try/catch লাগে।",
        },
      ],
    },
    quickRevision: [
      "Memory leak prevention: Always return cleanup in `useEffect` (timers, listeners, AbortController).",
      "Strict Mode: Double-invokes in Dev mode to detect side-effect bugs.",
      "Error Boundary: `getDerivedStateFromError` + `componentDidCatch` (Prevents white screen crashes).",
    ],
    followUpQuestions: [
      {
        question: "react-error-boundary প্যাকেজ ব্যবহারের কী সুবিধা?",
        shortHint: "ক্লাস কম্পোনেন্ট না লিখে ফাংশনাল কম্পোনেন্টে `useErrorBoundary` ও `<ErrorBoundary fallback={...}>` ব্যবহার করা যায়।",
      },
    ],
    tags: ["React", "Error Boundary", "Strict Mode", "Memory Leaks", "AbortController", "Resilience"],
  },
];
