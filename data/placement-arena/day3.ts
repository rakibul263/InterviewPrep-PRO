import { MockInterviewItem } from "@/types";

export const day3Questions: MockInterviewItem[] = [
  {
    id: "pa-d3-q31-what-is-react",
    questionNumber: 31,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is React and what problem does it solve?",
    banglaQuestion: "React কী এবং এটি ওয়েব ডেভেলপমেন্টে কোন কোন প্রধান সমস্যার সমাধান করে?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Architecture", "Virtual DOM", "Declarative UI", "Components"],
    english: {
      quickAnswer: "React is a declarative, component-based JavaScript library for building user interfaces. It solves the performance bottleneck, tight coupling, and manual synchronization issues of traditional imperative DOM manipulation.",
      interviewSpeech: "React is an open-source JavaScript library developed by Meta for building dynamic and scalable user interfaces. Before React, frontend development relied heavily on imperative DOM manipulation using vanilla JavaScript or jQuery. In that paradigm, whenever application state changed, developers had to manually query the DOM, find specific elements, and update their contents or classes. As applications scaled, this led to massive code complexity, race conditions, and severe performance bottlenecks caused by frequent browser reflows and repaints.\n\nReact solves this with three core pillars: Declarative UI, Component-Based Architecture, and the Virtual DOM. Instead of dictating 'how' to manipulate the DOM step-by-step, developers describe 'what' the UI should look like for a given state using JSX. React takes care of reconciling the differences and updating only the mutated elements efficiently. Furthermore, React encourages breaking complex interfaces into isolated, reusable, self-contained components with unidirectional data flow, making modern web applications predictable, maintainable, and testable.",
      deepDive: [
        "**Imperative vs Declarative**: Imperative programming tells the browser *how* to change elements step-by-step (`document.getElementById().appendChild()`). Declarative programming describes the desired UI outcome for a given state (`return <Profile user={user} />`), and React handles the underlying DOM operations.",
        "**Component Reusability**: Components encapsulate structure, styles, and state logic into isolated building blocks. This modularity allows teams to compose complex applications out of small, easily testable primitives.",
        "**Unidirectional Data Flow**: Data flows strictly downwards from parent to child via props. This one-way predictability eliminates bidirectional state synchronization chaos common in older frameworks (like AngularJS two-way binding).",
        "**Virtual DOM & Batching**: React maintains an in-memory lightweight representation of the real DOM. When state changes occur, React computes minimal diffs (Reconciliation) and batches DOM mutations, preventing expensive browser layout thrashing."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Imperative DOM vs Declarative React Paradigm",
        code: "// 1. Imperative (Vanilla JS / jQuery) - Manual DOM Mutation\nconst countEl = document.getElementById('count');\nconst btnEl = document.getElementById('btn');\nlet count = 0;\nbtnEl.addEventListener('click', () => {\n  count++;\n  countEl.innerText = `Count: ${count}`; // Manually sync DOM with state\n  if (count > 5) countEl.style.color = 'red'; // Fragile imperative logic\n});\n\n// 2. Declarative (React) - UI is a Pure Function of State: UI = f(state)\nimport React, { useState } from 'react';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p style={{ color: count > 5 ? 'red' : 'black' }}>\n        Count: {count}\n      </p>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Calling React a 'framework'. React is strictly a view-layer library; routing, state management, and build tools are chosen by the developer or bundled by frameworks like Next.js.",
        "Thinking React directly updates the real DOM on every state change without diffing (it calculates differences in the Virtual DOM first).",
        "Assuming React solves backend business logic; it is solely focused on state-to-UI synchronization."
      ],
      proTips: [
        "In interviews, summarize React with the mathematical formula: `UI = f(state)`. Emphasize that React makes UI predictable because the rendered view is simply a projection of the current application state."
      ]
    },
    bangla: {
      quickAnswer: "React হলো একটি ডিক্লারেটিভ ও কম্পোনেন্ট-ভিত্তিক জাভাস্ক্রিপ্ট লাইব্রেরি, যা মূলত ইউজার ইন্টারফেস (UI) তৈরির জন্য ব্যবহৃত হয়। এটি সনাতন ম্যানুয়াল DOM ম্যানিপুলেশনের জটিলতা ও পারফরম্যান্স সমস্যা সমাধান করে।",
      interviewSpeech: "React হলো মেটা (Facebook) দ্বারা তৈরি একটি অত্যন্ত জনপ্রিয় ওপেন-সোর্স জাভাস্ক্রিপ্ট লাইব্রেরি যা আধুনিক ইউজার ইন্টারফেস তৈরিতে ব্যবহৃত হয়। React আসার আগে আমরা জাভাস্ক্রিপ্ট বা jQuery দিয়ে 'ইম্পারেটিভ' (Imperative) পদ্ধতিতে DOM ম্যানিপুলেট করতাম। অর্থাৎ ডেটা বদলালে কোড লিখে ব্রাউজারের নির্দিষ্ট এলিমেন্ট খুঁজে বের করে তার ভেতরের টেক্সট বা স্টাইল ম্যানুয়ালি আপডেট করতে হতো। প্রজেক্ট বড় হওয়ার সাথে সাথে কোড নিয়ন্ত্রণহীন হয়ে যেত এবং ঘন ঘন DOM পরিবর্তনের ফলে সাইট স্লো হয়ে যেত।\n\nReact মূলত ৩টি প্রধান বিষয়ের মাধ্যমে এই সমস্যার সমাধান করেছে:\n১. ডিক্লারেটিভ ইউআই (Declarative UI): এখানে স্টেপ বাই স্টেপ DOM পরিবর্তনের নির্দেশ দিতে হয় না, বরং স্টেট অনুযায়ী ইউআই কেমন দেখাবে তা একবার বলে দিলেই React স্বয়ংক্রিয়ভাবে ব্রাউজারের সাথে সিঙ্ক করে নেয়।\n২. কম্পোনেন্ট-ভিত্তিক আর্কিটেকচার (Component-Based): পুরো ওয়েবসাইটকে ছোট ছোট স্বাধীন ও রি-ইউজেবল কম্পোনেন্টে ভাগ করা যায়।\n৩. ভার্চুয়াল ডম (Virtual DOM): মেমরিতে DOM-এর একটি হালকা কপি রেখে React শুধুমাত্র পরিবর্তিত অংশটুকুই রিয়েল DOM-এ আপডেট করে, যার ফলে ব্রাউজার অত্যন্ত ফাস্ট থাকে।",
      deepDive: [
        "**ইম্পারেটিভ বনাম ডিক্লারেটিভ**: ইম্পারেটিভ পদ্ধতিতে 'কীভাবে' DOM পরিবর্তন করতে হবে তা স্টেপ-বাই-স্টেপ লিখতে হয় (`document.getElementById()`)। আর ডিক্লারেটিভে স্টেট কেমন থাকলে স্ক্রিন কেমন হবে তা ডিক্লেয়ার করা হয় (`UI = f(state)`)।",
        "**কম্পোনেন্ট রি-ইউজেবিলিটি**: একটি বাটন, হেডার বা কার্ড একবার তৈরি করে শত শত জায়গায় স্বাধীনভাবে ব্যবহার করা যায়।",
        "**একমুখী ডেটা প্রবাহ (Unidirectional Data Flow)**: ডেটা সবসময় পেরেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টের দিকে নামে (Props-এর মাধ্যমে), ফলে ডেটা ফ্লো সহজে ট্র্যাক করা যায়।",
        "**পারফরম্যান্স অপ্টিমাইজেশন**: ব্রাউজারের আসল DOM ম্যানিপুলেশন অনেক ব্যয়বহুল (Reflow/Repaint)। React ভার্চুয়াল DOM ও Diffing অ্যালগরিদম ব্যবহার করে আসল DOM পরিবর্তনকে সর্বনিম্ন পর্যায়ে রাখে।"
      ],
      commonMistakes: [
        "React-কে একটি 'ফ্রেমওয়ার্ক' বলা। React কোনো ফুল-ফ্লেজড ফ্রেমওয়ার্ক নয়, এটি কেবল একটি View Library। রাউটিং বা ডেটাবেসের মতো ফিচার ফ্রেমওয়ার্কে (যেমন Next.js) থাকে।",
        "মনে করা যে স্টেট চেঞ্জ হলেই React সরাসরি ব্রাউজারের আসল DOM-এ তাৎক্ষণিক রিরাইট করে (প্রথমে VDOM-এ ডিফারেন্স বের করে তারপর ন্যূনতম ব্যাচ আপডেট পাঠায়)।"
      ],
      proTips: [
        "ইন্টারভিউতে এক লাইনে বলুন: 'React-এর মূল দর্শন হলো UI = f(state), অর্থাৎ স্টেট যেমন হবে ইউজার ইন্টারফেসও অবিকল তার একটি বিশুদ্ধ প্রতিফলন হবে।'"
      ]
    }
  },
  {
    id: "pa-d3-q32-what-is-jsx",
    questionNumber: 32,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is JSX and why is it used in React?",
    banglaQuestion: "JSX কী এবং React-এ এটি কেন ব্যবহার করা হয়?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "JSX", "Babel", "Transpilation", "JavaScript"],
    english: {
      quickAnswer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript code. It is transpiled at build time into standard `React.createElement()` or `_jsx()` calls.",
      interviewSpeech: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets developers write visual UI structures directly within JavaScript files using familiar HTML-like syntax. While browsers cannot natively execute JSX, build tools like Babel, SWC, or ESBuild compile JSX into standard JavaScript function calls—historically `React.createElement()` and in modern React versions the automatic runtime `_jsx()`.\n\nReact uses JSX because rendering logic and UI markup are fundamentally coupled in modern component-driven architectures. Instead of artificially separating technologies into distinct HTML and JS files, React embraces 'Separation of Concerns' at the component level. JSX provides massive benefits: it brings the full expressive power of JavaScript (ternaries, array methods, variable interpolation) directly into markup, catches syntax and structural errors at compile time, and inherently prevents Cross-Site Scripting (XSS) attacks by automatically escaping embedded variables before rendering.",
      deepDive: [
        "**Transpilation Output**: Every JSX tag `<div className=\"box\"><span>Hello</span></div>` compiles to `_jsx('div', { className: 'box', children: _jsx('span', { children: 'Hello' }) })` which generates an immutable Virtual DOM object (React element).",
        "**Single Parent Constraint**: JSX must return a single root element (or a `<React.Fragment>` / `<>...</>`) because a function in JavaScript can only return one single value or object reference.",
        "**Security & Built-in XSS Protection**: By default, React DOM escapes any values embedded in JSX expressions `{value}` before rendering them to string, converting potential HTML injection strings into harmless text.",
        "**Attribute Differences from HTML**: Because JSX is JavaScript, reserved keywords are modified: `class` becomes `className`, `for` becomes `htmlFor`, and event listeners use camelCase (`onClick`, `onChange`). Inline styles accept JS objects with camelCase CSS properties (`style={{ backgroundColor: 'red' }}`)."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "JSX Syntax vs Transpiled JavaScript",
        code: "// 1. JSX Code written by developer\nfunction UserCard({ name, role, isAdmin }) {\n  return (\n    <div className=\"card\" tabIndex={0}>\n      <h2 style={{ color: isAdmin ? 'purple' : 'navy' }}>{name}</h2>\n      <p>Role: {role}</p>\n    </div>\n  );\n}\n\n// 2. What the compiler (Babel / SWC) produces under the hood:\nimport { jsx as _jsx, jsxs as _jsxs } from \"react/jsx-runtime\";\n\nfunction UserCardCompiled({ name, role, isAdmin }) {\n  return _jsxs(\"div\", {\n    className: \"card\",\n    tabIndex: 0,\n    children: [\n      _jsx(\"h2\", {\n        style: { color: isAdmin ? 'purple' : 'navy' },\n        children: name\n      }),\n      _jsxs(\"p\", {\n        children: [\"Role: \", role]\n      })\n    ]\n  });\n}"
      },
      commonMistakes: [
        "Thinking JSX is valid HTML that the browser natively parses. Browsers throw a SyntaxError if they encounter raw JSX without compilation.",
        "Attempting to use `class` instead of `className` or `for` instead of `htmlFor`.",
        "Trying to render raw JavaScript objects `{user}` directly inside JSX instead of primitive properties `{user.name}`."
      ],
      proTips: [
        "Mention that modern React (version 17+) uses the Automatic JSX Runtime (`react/jsx-runtime`), meaning you no longer need to write `import React from 'react'` at the top of every single file just to use JSX."
      ]
    },
    bangla: {
      quickAnswer: "JSX (JavaScript XML) হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন, যার সাহায্যে জাভাস্ক্রিপ্ট কোডের ভেতরে সরাসরি HTML-এর মতো কোড লেখা যায়। ব্রাউজার সরাসরি এটি বোঝে না, তাই Babel বা SWC এটিকে সাধারণ `_jsx()` ফাংশনে রূপান্তর করে।",
      interviewSpeech: "JSX-এর পূর্ণরূপ হলো JavaScript XML। এটি কোনো স্বতন্ত্র ভাষা নয়, বরং জাভাস্ক্রিপ্টের একটি সিনট্যাক্টিক সুগার যা আমাদের JS ফাইলের মধ্যে সরাসরি HTML-এর মতো দেখতে ভিজ্যুয়াল মার্কআপ লিখতে দেয়। ব্রাউজার সরাসরি JSX চালাতে পারে না; কোড বিল্ড করার সময় Babel বা SWC ট্রান্সপিলার এটিকে সাধারণ জাভাস্ক্রিপ্ট ফাংশন কল (যেমন `React.createElement` বা আধুনিক `_jsx` রানটাইম)-এ কনভার্ট করে দেয়।\n\nReact-এ JSX ব্যবহারের মূল কারণ হলো আধুনিক কম্পোনেন্ট আর্কিটেকচারে UI মার্কআপ এবং বিজনেস লজিক পরস্পরের সাথে ওতপ্রোতভাবে জড়িত। আলাদা HTML ও JS ফাইলে না রেখে React উপাদানগুলোকে একটি স্বয়ংসম্পূর্ণ কম্পোনেন্টের ভেতরে নিয়ে আসে। JSX ব্যবহারের ফলে জাভাস্ক্রিপ্টের পুরো ক্ষমতা (যেমন ভেরিয়েবল, টার্নারি অপারেটর, ম্যাপ ইত্যাদি) মার্কআপের ভেতর কার্লি ব্রেসেস `{}` দিয়ে ব্যবহার করা যায়। এছাড়া JSX স্বয়ংক্রিয়ভাবে ইউজারের ইনপুট এস্কেপ (escape) করে Cross-Site Scripting (XSS) অ্যাটাক প্রতিহত করে নিরাপত্তা নিশ্চিত করে।",
      deepDive: [
        "**ট্রান্সপাইলেশন মেকানিজম**: JSX কোড মূলত সাধারণ ফাংশন কলে রূপান্তর হয়। `<p className=\"txt\">Hi</p>` রূপান্তরিত হয়ে `_jsx('p', { className: 'txt', children: 'Hi' })` অবজেক্ট তৈরি করে।",
        "**একটি সিঙ্গেল রুট প্যারেন্ট থাকার কারণ**: জাভাস্ক্রিপ্টে একটি ফাংশন থেকে একসাথে একাধিক রিটার্ন পাঠানো যায় না; একটিমাত্র মান রিটার্ন করতে হয়। তাই JSX-এ সব উপাদানকে একটি প্যারেন্ট ট্যাগ বা React Fragment (`<>...</>`) দিয়ে র‍্যাপ করতে হয়।",
        "**HTML-এর সাথে পার্থক্য**: যেহেতু এটি জাভাস্ক্রিপ্ট, তাই সংরক্ষিত কি-ওয়ার্ড ব্যবহার করা যায় না। যেমন `class`-এর জায়গায় `className`, `for`-এর জায়গায় `htmlFor`, এবং ইভেন্টে camelCase (`onClick`) লিখতে হয়।",
        "**বিল্ট-ইন XSS প্রোটেকশন**: JSX-এর ভেতর কোনো স্ট্রিং প্রিন্ট করার আগে React ডিফল্টভাবে তা স্যানিটাইজ করে, ফলে ক্ষতিকর স্ক্রিপ্ট রান হতে পারে না।"
      ],
      commonMistakes: [
        "মনে করা যে ব্রাউজার সরাসরি JSX বোঝে; ট্রান্সপাইলার ছাড়া JSX ব্রাউজারে চালালে SyntaxError দেখাবে।",
        "JSX এক্সপ্রেশনের ভেতর সরাসরি আস্ত অবজেক্ট রেন্ডার করার চেষ্টা করা, যেমন `<div>{user}</div>` (সবসময় প্রিমিটিভ ভ্যালু `{user.name}` রেন্ডার করতে হবে)।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'React 17-এর পর থেকে নতুন JSX Transform আসার কারণে ফাইলে শুধু JSX লেখার জন্য `import React from \"react\"` লেখার প্রয়োজন পড়ে না।'"
      ]
    }
  },
  {
    id: "pa-d3-q33-functional-vs-class-components",
    questionNumber: 33,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the difference between functional and class components?",
    banglaQuestion: "Functional Components এবং Class Components-এর মধ্যে পার্থক্য কী?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Functional Components", "Class Components", "Hooks", "Lifecycle"],
    english: {
      quickAnswer: "Functional components are plain JavaScript functions that accept props and return JSX, using Hooks for state and lifecycle. Class components extend `React.Component`, require a `render()` method, use `this.state`, and rely on lifecycle methods.",
      interviewSpeech: "Historically, React components were authored using ES6 classes extending `React.Component`. Class components stored local state via `this.state`, modified it with `this.setState()`, and handled lifecycle events using explicit methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. However, class components suffered from significant pain points: verbose boilerplate code, complex `this` keyword binding, and difficult code sharing between components (which previously required higher-order components or render props).\n\nWith React 16.8, Hooks were introduced, making Functional Components the modern industry standard. Functional components are simply pure JavaScript functions that receive `props` as an argument and return JSX. With hooks like `useState`, `useEffect`, and `useRef`, functional components can do everything class components can—with drastically less code, no `this` ambiguity, better TypeScript inference, and superior code splitting and minification. Today, class components are legacy, maintained only for backward compatibility.",
      deepDive: [
        "**State & Lifecycle Handling**: Classes use `this.state = {}` and lifecycle methods (`componentDidMount`, etc.). Functional components use `useState` and unified `useEffect` synchronization.",
        "**The 'this' Keyword Binding**: In class components, event handlers frequently required explicit binding in the constructor (`this.handleClick = this.handleClick.bind(this)`) or arrow functions. Functional components capture variables naturally via JavaScript closures.",
        "**Code Size & Minification**: Functional components transpile to smaller bundles and optimize better in modern JavaScript minifiers (like Terser/Rollup) because they don't carry ES6 class prototype scaffolding.",
        "**Custom Logic Extraction**: Sharing stateful logic between class components required cumbersome HOCs or render props. With functional components, custom hooks (`useAuth`, `useFetch`) allow seamless sharing of stateful logic without changing component hierarchy."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Class Component vs Modern Functional Component",
        code: "// 1. Legacy Class Component\nimport React, { Component } from 'react';\n\nclass UserProfileClass extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n    this.increment = this.increment.bind(this); // 'this' binding nightmare\n  }\n  componentDidMount() {\n    document.title = `Count: ${this.state.count}`;\n  }\n  componentDidUpdate() {\n    document.title = `Count: ${this.state.count}`;\n  }\n  increment() {\n    this.setState((prev) => ({ count: prev.count + 1 }));\n  }\n  render() {\n    return (\n      <button onClick={this.increment}>\n        Count: {this.state.count}\n      </button>\n    );\n  }\n}\n\n// 2. Modern Functional Component (Concise & Clean)\nimport React, { useState, useEffect } from 'react';\n\nfunction UserProfileFn() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <button onClick={() => setCount(prev => prev + 1)}>\n      Count: {count}\n    </button>\n  );\n}"
      },
      commonMistakes: [
        "Thinking functional components are slower than class components (functional components are lightweight, avoid class instantiations, and are the focus of all modern React performance improvements).",
        "Believing you can use React Hooks inside class components (Hooks only work inside functional components or custom hooks).",
        "Assuming class components are deprecated and will be removed immediately (they are legacy, not deprecated; they still exist for backward compatibility and Error Boundaries)."
      ],
      proTips: [
        "Mention in the interview that the only remaining use case where a class component is still technically required in React is for implementing an **Error Boundary** (`componentDidCatch` and `getDerivedStateFromError`), as no hook equivalent exists yet."
      ]
    },
    bangla: {
      quickAnswer: "Functional Components হলো সাধারণ জাভাস্ক্রিপ্ট ফাংশন যা প্রপস গ্রহণ করে JSX রিটার্ন করে এবং হুকস (Hooks) ব্যবহার করে স্টেট নিয়ন্ত্রণ করে। আর Class Components হলো ES6 ক্লাস যাতে `render()` মেথড, `this.state` এবং লাইফসাইকেল মেথড থাকে।",
      interviewSpeech: "React-এর শুরুর দিকে স্টেটফুল লজিক লেখার একমাত্র উপায় ছিল Class Components। এতে `React.Component` ক্লাস এক্সটেন্ড করতে হতো, কনস্ট্রাক্টরে `this.state` ডিফাইন করতে হতো এবং `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`-এর মতো বিভিন্ন লাইফসাইকেল মেথড ব্যবহার করতে হতো। তবে ক্লাস কম্পোনেন্টে প্রচুর বয়লারপ্লেট কোড লিখতে হতো, `this` কি-ওয়ার্ড বাইন্ড করার ঝামেলা ছিল এবং একাধিক কম্পোনেন্টের মধ্যে লজিক শেয়ার করা বেশ জটিল ছিল।\n\nReact 16.8 সংস্করণে 'Hooks' আসার পর Functional Components আধুনিক ইন্ডাস্ট্রির স্ট্যান্ডার্ডে পরিণত হয়। ফাংশনাল কম্পোনেন্ট মূলত একটি পিউর জাভাস্ক্রিপ্ট ফাংশন যা `props` রিসিভ করে সরাসরি JSX রিটার্ন করে। `useState` এবং `useEffect`-এর মতো হুক ব্যবহারের মাধ্যমে ক্লাস কম্পোনেন্টের সমস্ত ফিচার এতে অনেক কম কোডে, পরিষ্কারভাবে এবং `this`-এর ঝামেলা ছাড়াই অর্জন করা যায়। বর্তমান সময়ে নতুন প্রজেক্টে সম্পূর্ণভাবে ফাংশনাল কম্পোনেন্ট ব্যবহার করা হয়।",
      deepDive: [
        "**সিনট্যাক্স ও বয়লারপ্লেট**: ক্লাস কম্পোনেন্টে কনস্ট্রাক্টর, সুপার, বাইন্ডিং ও রেন্ডার মেথড লাগে। ফাংশনাল কম্পোনেন্ট কয়েক লাইনের সরল ফাংশন।",
        "**`this` কি-ওয়ার্ডের জটিলতা**: ক্লাসে মেথডের ভেতরে `this` লস্ট হওয়ার ভয় থাকে বলে কনস্ট্রাক্টরে বাইন্ড করতে হতো। ফাংশনাল কম্পোনেন্টে জাভাস্ক্রিপ্ট ক্লোজার (Closure) ব্যবহারের ফলে `this` ছাড়াই সরাসরি ভেরিয়েবল ব্যবহার করা যায়।",
        "**স্টেট ও লাইফসাইকেল**: ক্লাসে স্টেট একটিমাত্র অবজেক্টে রাখতে হতো এবং বিভিন্ন লাইফসাইকেলে কোড ছড়িয়ে থাকত। ফাংশনালে একাধিক `useState` এবং একটি `useEffect` দিয়ে মাউন্ট, আপডেট ও আনমাউন্ট হ্যান্ডেল করা যায়।",
        "**লজিক শেয়ারিং**: ক্লাসে লজিক শেয়ার করতে HOC বা Render Props-এর জটিলতা লাগত, কিন্তু ফাংশনালে নিজস্ব কাস্টম হুক তৈরি করে সহজেই স্টেটফুল লজিক শেয়ার করা যায়।"
      ],
      commonMistakes: [
        "মনে করা যে ফাংশনাল কম্পোনেন্ট ক্লাস কম্পোনেন্টের চেয়ে ধীরগতির (আসলে ফাংশনাল কম্পোনেন্ট অনেক লাইটওয়েট এবং আধুনিক অপ্টিমাইজেশন ফ্রেন্ডলি)।",
        "ক্লাস কম্পোনেন্টের ভেতরে হুক (Hooks) ব্যবহার করার চেষ্টা করা (হুকস শুধুমাত্র ফাংশনাল কম্পোনেন্ট বা কাস্টম হুকে কাজ করে)।"
      ],
      proTips: [
        "ইন্টারভিউতে একটি প্রো-টিপ শেয়ার করুন: 'বর্তমানে শুধু একটি জায়গায় ক্লাস কম্পোনেন্ট বাধ্যতামূলক—সেটি হলো Error Boundary তৈরি করার সময় (`componentDidCatch` মেথড), কারণ এর কোনো সমকক্ষ অফিসিয়াল হুক এখনও আসেনি।'"
      ]
    }
  },
  {
    id: "pa-d3-q34-virtual-dom-and-reconciliation",
    questionNumber: 34,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the virtual DOM and how does React use it?",
    banglaQuestion: "Virtual DOM কী এবং React এটি কীভাবে ব্যবহার করে রেন্ডারিং অপ্টিমাইজ করে?",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["React", "Virtual DOM", "Reconciliation", "Diffing Algorithm", "Fiber"],
    english: {
      quickAnswer: "The Virtual DOM (VDOM) is a lightweight in-memory JavaScript representation of the real DOM. React uses it to diff against the previous tree (Reconciliation) and compute the minimal set of real DOM mutations needed.",
      interviewSpeech: "The Virtual DOM is an abstraction of the HTML DOM kept in memory and synced with the 'real' DOM by libraries like ReactDOM. Direct manipulation of the browser's real DOM tree is computationally expensive—not because JavaScript is slow, but because modifying DOM elements causes the browser engine to perform layout calculations (reflow) and repaint screen pixels.\n\nReact solves this by decoupling rendering into three distinct steps: 1) Render Phase, 2) Reconciliation (Diffing), and 3) Commit Phase. When a component's state or props change, React runs the render function and generates a new Virtual DOM tree of plain JavaScript objects. React then compares this new tree with the previous Virtual DOM tree using an optimized O(n) heuristic diffing algorithm (powered by React Fiber). It pinpoints the exact nodes that were added, removed, or changed. Finally, in the Commit Phase, React applies only the minimal batch of changes directly to the real browser DOM in a single pass. This ensures 60 FPS smooth user interfaces.",
      deepDive: [
        "**Heuristic Diffing Rules (O(n))**: Comparing two arbitrary trees normally takes O(n³). React achieves O(n) using two heuristics: elements of different types produce completely different trees (rebuild node from scratch), and list elements with consistent `key` props retain their identity across renders.",
        "**Render vs Commit Phase**: In the *Render Phase*, React executes component functions, builds the Fiber tree, and calculates diffs (can be interrupted or paused in React 18 Concurrent Mode). In the *Commit Phase*, ReactDOM synchronously writes the computed updates to the real DOM.",
        "**Lightweight JS Representation**: A real DOM node contains hundreds of internal properties and prototype methods. A Virtual DOM node is a simple JS object with just `type`, `props`, and `key`.",
        "**React Fiber Architecture**: React 16+ rewrote the core reconciliation engine into React Fiber, turning recursive rendering into a linked-list work-loop that allows prioritizing urgent updates (like user typing) over non-urgent updates (like large data lists)."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Conceptual Anatomy of a Virtual DOM Node vs Real DOM",
        code: "// What a Real DOM node looks like:\n// In the browser, document.createElement('div') has 250+ properties (style, dataset, clientWidth, etc.)\n\n// What a React Virtual DOM node (React Element) looks like:\nconst vdomNode = {\n  $$typeof: Symbol.for('react.element'),\n  type: 'button',\n  key: null,\n  ref: null,\n  props: {\n    className: 'btn-primary',\n    onClick: () => console.log('Clicked'),\n    children: 'Submit'\n  }\n};\n\n// When state changes from 'Submit' to 'Submitting...':\n// 1. React produces a new VDOM node: { ...props: { children: 'Submitting...' } }\n// 2. Diffing compares old node vs new node: Only 'children' changed\n// 3. Commit Phase executes minimal DOM update: buttonElement.textContent = 'Submitting...';"
      },
      commonMistakes: [
        "Believing Virtual DOM is always faster than Vanilla JS (well-crafted direct vanilla DOM manipulation can be faster, but React provides guaranteed consistent high performance with declarative ergonomics).",
        "Confusing Shadow DOM with Virtual DOM. Shadow DOM is a browser-native standard for CSS encapsulation in Web Components; Virtual DOM is a JavaScript abstraction specific to React.",
        "Thinking the entire real DOM is re-rendered whenever any state changes."
      ],
      proTips: [
        "Highlight the difference between **Render Phase** (pure JS, non-blocking, interruptible in React 18) and **Commit Phase** (synchronous DOM mutations). Interviewers love candidates who understand this distinction."
      ]
    },
    bangla: {
      quickAnswer: "Virtual DOM (VDOM) হলো ব্রাউজারের আসল DOM-এর একটি হালকা মেমরি-ভিত্তিক জাভাস্ক্রিপ্ট রূপ। React এটি ব্যবহার করে স্টেটের পরিবর্তনের পর আগের ট্রির সাথে নতুন ট্রির তুলনা (Diffing) করে এবং শুধুমাত্র প্রয়োজনীয় অংশটুকুই আসল DOM-এ আপডেট করে।",
      interviewSpeech: "ভার্চুয়াল DOM হলো ব্রাউজারের রিয়েল DOM-এর একটি লাইটওয়েট অবজেক্ট রিপ্রেজেন্টেশন যা মেমরিতে থাকে। ব্রাউজারের আসল DOM ম্যানিপুলেট করা অত্যন্ত ব্যয়বহুল, কারণ প্রতিবার DOM এলিমেন্ট পরিবর্তন হলে ব্রাউজারকে স্ক্রিনের লেআউট হিসাব (Reflow) এবং পিক্সেল রিড্র (Repaint) করতে হয়, যা সাইট স্লো করে দেয়।\n\nReact এই সমস্যা দূর করতে ৩টি ধাপে কাজ করে:\n১. রেন্ডার ফেজ: কম্পোনেন্টের স্টেট পরিবর্তন হলে React মেমরির ভেতর নতুন একটি ভার্চুয়াল DOM ট্রি তৈরি করে।\n২. রিকনসিলিয়েশন বা ডিফে (Diffing): React তার অপ্টিমাইজড Diffing অ্যালগরিদমের মাধ্যমে নতুন ভার্চুয়াল ট্রির সাথে আগের ভার্চুয়াল ট্রির তুলনা করে দেখে ঠিক কোন কোন নোড বা প্রোপার্টি পরিবর্তিত হয়েছে।\n৩. কমিট ফেজ: সবশেষে কেবল সেই পরিবর্তিত অংশটুকুই একবারে ব্রাউজারের আসল DOM-এ রাইট করে।\nফলস্বরূপ পুরো পেজ বা পুরো ট্রি রি-রেন্ডার না হয়ে স্ক্রিনে নিখুঁত ও দ্রুত পারফরম্যান্স পাওয়া যায়।",
      deepDive: [
        "**হিউরিস্টিক ডিফে (O(n)) অ্যালগরিদম**: সাধারণ ট্রির পার্থক্য বের করতে O(n³) সময় লাগে, কিন্তু React দুটি প্রধান অনুমানের উপর ভিত্তি করে O(n) সময়ে ডিফে শেষ করে: এলিমেন্টের টাইপ পরিবর্তন হলে পুরো সাবট্রি নতুন করে তৈরি হয় এবং লিস্টে ইউনিক `key` থাকলে নোড চিনতে পারে।",
        "**Shadow DOM বনাম Virtual DOM**: অনেকেই দুটো গুলিয়ে ফেলে। Shadow DOM হলো ব্রাউজারের নিজস্ব ফিচার (Web Components-এর স্টাইল আইসোলেশনের জন্য), আর Virtual DOM হলো React-এর নিজস্ব পিউর জাভাস্ক্রিপ্ট অবজেক্ট মেকানিজম।",
        "**React Fiber**: React 16 থেকে রিকনসিলিয়েশন ইঞ্জিনকে 'Fiber'-এ রূপান্তর করা হয়েছে, যা রেন্ডারিংয়ের কাজকে ছোট ছোট ভাগে ভাগ করে জরুরি কাজকে (যেমন ইউজারের টাইপিং) বেশি প্রায়োরিটি দিতে পারে।",
        "**মেমরিতে হালকা**: আসল DOM নোডে ২৫০টির বেশি বিল্ট-ইন প্রোপার্টি থাকে, কিন্তু ভার্চুয়াল DOM নোড কেবল `type`, `props` এবং `key` যুক্ত একটি সাধারণ অবজেক্ট।"
      ],
      commonMistakes: [
        "মনে করা যে Virtual DOM আসল DOM-এর চেয়ে জাদুকরীভাবে দ্রুত। আসলে নিখুঁত ভ্যানিলা কোড বেশি ফাস্ট হতে পারে, তবে React আমাদের স্কেলযোগ্য কোড ও নিশ্চিত পারফরম্যান্স দেয়।",
        "Virtual DOM এবং ব্রাউজারের Shadow DOM একই জিনিস মনে করা।"
      ],
      proTips: [
        "ইন্টারভিউতে উল্লেখ করুন: 'React 18-এ Concurrent Rendering আসার পর Render Phase-কে পজ বা ইন্টারাপ্ট করা যায়, কিন্তু Commit Phase সবসময় সিঙ্ক্রোনাসলি আসল DOM-এ আপডেট পাঠায়।'"
      ]
    }
  },
  {
    id: "pa-d3-q35-usestate-hook-explained",
    questionNumber: 35,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "Explain the useState hook with an example.",
    banglaQuestion: "উদাহরণসহ useState হুকের কার্যপদ্ধতি ব্যাখ্যা করুন।",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "useState", "Hooks", "State", "Functional Updates"],
    english: {
      quickAnswer: "`useState` is a React hook that allows functional components to declare and update reactive state variables. It returns a tuple: the current state value and a dispatcher function to update it.",
      interviewSpeech: "`useState` is the fundamental hook in React for managing local component state. When called, it accepts an initial state value and returns an array tuple with exactly two items: `[currentState, setStateFunction]`. Whenever the updater function is called with a new value, React schedules a re-render of the component with the updated state.\n\nTwo critical advanced patterns must be highlighted when discussing `useState`: Functional Updates and Lazy Initialization. Because React batches state updates for performance, calling `setCount(count + 1)` multiple times in the same tick will only increment by 1 due to closures capturing stale values. To safely derive state from the latest existing state, we pass an updater callback `setCount(prev => prev + 1)`. Secondly, if the initial state requires an expensive computation (like reading from `localStorage` or parsing a large dataset), we should pass a function initializer `useState(() => expensiveCompute())`. This ensures the expensive logic runs strictly once on mount, rather than on every subsequent re-render.",
      deepDive: [
        "**Array Destructuring Convention**: `const [val, setVal] = useState(init)` leverages ES6 array destructuring. The names are arbitrary, but following the `[something, setSomething]` convention is universal.",
        "**Automatic Batching (React 18)**: React 18 batches state updates inside promises, timeouts, and native event handlers automatically into a single render pass.",
        "**Stale State Closure Traps**: In asynchronous callbacks or multiple synchronous set calls, referencing the state variable directly captures the snapshot from the current render. Always use functional updates `setVal(prev => ...)` when the next state depends on the previous.",
        "**Lazy Initial State**: Passing `useState(computeExpensiveValue())` executes the function on *every single render* (even though React ignores the return value after mount). Passing `useState(() => computeExpensiveValue())` runs it exclusively on the initial mount."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "useState with Functional Updates & Lazy Initialization",
        code: "import React, { useState } from 'react';\n\nexport function ShoppingCart() {\n  // 1. Lazy Initial State: only parses localStorage on mount\n  const [items, setItems] = useState(() => {\n    const saved = localStorage.getItem('cart_items');\n    return saved ? JSON.parse(saved) : [];\n  });\n\n  const [quantity, setQuantity] = useState(1);\n\n  // 2. Functional Updates: prevents stale closure bugs when called consecutively\n  const handleTripleAdd = () => {\n    // Incorrect (will only increment by 1):\n    // setQuantity(quantity + 1);\n    // setQuantity(quantity + 1);\n    // setQuantity(quantity + 1);\n\n    // Correct: Each call receives the latest pending state\n    setQuantity(prev => prev + 1);\n    setQuantity(prev => prev + 1);\n    setQuantity(prev => prev + 1); // Increments by 3 reliably\n  };\n\n  return (\n    <div>\n      <h3>Cart Items: {items.length}</h3>\n      <p>Quantity: {quantity}</p>\n      <button onClick={handleTripleAdd}>+3 Quantity</button>\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Directly mutating state variables (`items.push(newItem)` followed by `setItems(items)`). React uses `Object.is` reference comparison; if the object reference hasn't changed, React will skip the re-render. Always return a new copy (`[...items, newItem]`).",
        "Calling `useState` conditionally inside `if` statements or loops (violates the Rules of Hooks).",
        "Expecting the state variable to update immediately on the next line of code after calling `setState` (state updates are scheduled asynchronously)."
      ],
      proTips: [
        "Always remind the interviewer that React's state setter does NOT immediately mutate the variable in place. If you log `setCount(5); console.log(count);`, it still prints the old count from the current execution snapshot."
      ]
    },
    bangla: {
      quickAnswer: "`useState` হলো React-এর একটি কোর হুক যার সাহায্যে ফাংশনাল কম্পোনেন্টে রিঅ্যাক্টিভ স্টেট তৈরি ও পরিবর্তন করা যায়। এটি একটি টাপল `[state, setState]` রিটার্ন করে।",
      interviewSpeech: "`useState` হলো React-এর সবচেয়ে বহুল ব্যবহৃত হুক। ফাংশনাল কম্পোনেন্টে কোনো পরিবর্তনশীল ডেটা ধরে রাখা এবং সেই ডেটা পরিবর্তনের সাথে সাথে স্ক্রিনে ইউআই স্বয়ংক্রিয়ভাবে আপডেট করার জন্য `useState` ব্যবহার করা হয়। এটি কল করলে আর্গুমেন্ট হিসেবে ইনিশিয়াল ভ্যালু নেয় এবং দুটি উপাদানসহ একটি অ্যারে রিটার্ন করে: প্রথমটি বর্তমান স্টেটের মান এবং দ্বিতীয়টি সেই স্টেট আপডেট করার ডিসপ্যাচার ফাংশন (`[count, setCount]`)।\n\n`useState`-এ দুটি গুরুত্বপূর্ণ বিষয় সবসময় ইন্টারভিউতে তুলে ধরা উচিত:\n১. ফাংশনাল আপডেট (Functional Update): যখন নতুন স্টেটের মান আগের মানের উপর নির্ভরশীল হয়, তখন সরাসরি `setCount(count + 1)` না লিখে `setCount(prev => prev + 1)` লেখা উচিত। এতে পর পর একাধিকবার স্টেট আপডেট হলেও বা কোনো অ্যাসিঙ্ক অপারেশনে পুরনো মান (Stale Closure) থাকার বাগ এড়ানো যায়।\n২. লেজি ইনিশিয়ালাইজেশন (Lazy Initialization): যদি কোনো বড় ডেটা প্রসেস করে বা `localStorage` থেকে রিড করে স্টেটের প্রাথমিক মান সেট করতে হয়, তবে সেখানে ফাংশন পাস করতে হয় (`useState(() => getInitialData())`)। এতে প্রাথমিক হিসাবটি কেবল কম্পোনেন্ট মাউন্ট হওয়ার সময় একবারই চলে, প্রতি রেন্ডারে বারবার অপ্রয়োজনে এক্সিকিউট হয় না।",
      deepDive: [
        "**ইমিউটেবিলিটি (Immutability)**: React স্টেটের রেফারেন্স চেক করে (`Object.is`)। তাই সরাসরি `state.push()` বা মিউটেট করলে React মনে করে কিছুই বদলায়নি এবং রি-রেন্ডার ট্রিগার করে না। সবসময় নতুন কপি তৈরি করতে হয় (`[...prev, newItem]`)।",
        "**অটোমেটিক ব্যাচিং**: React 18 থেকে একই ইভেন্টের মধ্যে একাধিক স্টেট আপডেট থাকলে React সেগুলোকে একসাথে ব্যাচ করে মাত্র একবার রি-রেন্ডার করায়।",
        "**অ্যাসিঙ্ক্রোনাস নেচার**: `setCount(5)` লেখার পরের লাইনেই `console.log(count)` করলে ৫ পাওয়া যাবে না, কারণ বর্তমান রেন্ডার সাইকেলে `count` ভেরিয়েবলটি পূর্বের মানের স্ন্যাপশট হিসেবে লক থাকে।",
        "**হুকের নিয়মাবলী**: `useState` কখনোই কোনো `if` কন্ডিশন, লুপ বা নেস্টেড ফাংশনের ভেতরে কল করা যাবে না—সর্বদা কম্পোনেন্টের টপ-লেভেলে রাখতে হবে।"
      ],
      commonMistakes: [
        "স্টেট সরাসরি মিউট করা (যেমন `user.name = 'Ali'` লিখে `setUser(user)` কল করা)। রেফারেন্স একই থাকায় রি-রেন্ডার হবে না।",
        "`setState` কল করার সাথে সাথেই ভেরিয়েবলের নতুন মান দেখতে পাওয়ার আশা করা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'স্টেট আগের মানের উপর নির্ভর করলে সবসময় `setSomething(prev => prev + 1)` প্যাটার্ন ব্যবহার করাই বেস্ট প্র্যাকটিস।'"
      ]
    }
  },
  {
    id: "pa-d3-q36-useeffect-hook-and-use-cases",
    questionNumber: 36,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the useEffect hook and what are its use cases?",
    banglaQuestion: "useEffect হুক কী এবং এর প্রধান ব্যবহারের ক্ষেত্রগুলো (Use Cases) কী কী?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "useEffect", "Hooks", "Lifecycle", "Side Effects", "Cleanup"],
    english: {
      quickAnswer: "`useEffect` is a hook designed to synchronize a component with external systems and manage side effects like API data fetching, event listeners, timers, and manual DOM subscriptions.",
      interviewSpeech: "`useEffect` tells React that your component needs to run a 'side effect' after the UI has been rendered to the screen. In pure functional programming, a component's render should be a pure calculation with no side effects. `useEffect` gives us an escape hatch to perform asynchronous actions and interact with the outside world—such as making HTTP requests, setting up subscriptions or WebSockets, manipulating timers, and adding browser event listeners.\n\nThe hook accepts a callback function and an optional dependency array (`deps`). The dependency array controls execution:\n1. Omitted deps: runs after *every single render*.\n2. Empty array `[]`: runs strictly *once after initial mount* (equivalent to `componentDidMount`).\n3. Dependencies `[depA, depB]`: runs on mount and *re-runs only when specified dependencies change*.\n\nCrucially, `useEffect` can return a **cleanup function**. React runs this cleanup function before re-running the effect on new dependency changes, and when the component unmounts. This is mandatory for canceling pending HTTP requests, clearing `setInterval` timers, and removing event listeners to prevent memory leaks.",
      deepDive: [
        "**Post-Paint Execution**: Unlike `useLayoutEffect` which runs synchronously before paint, `useEffect` is deferred until after the browser has painted the screen, ensuring that non-visual side effects don't block user interactions.",
        "**The Cleanup Function Contract**: The returned callback is not just for unmounting. React cleans up the previous effect's resources *before* running the effect again with new props/state.",
        "**Stale Closure Risks**: If a state or prop is referenced inside `useEffect` but missing from the dependency array, the effect closes over the stale value from an earlier render. Modern ESLint `react-hooks/exhaustive-deps` catches this.",
        "**React 18 Strict Mode Double Invocation**: In local development with Strict Mode, React intentionally mounts, unmounts, and re-mounts effects once to verify that your cleanup logic properly handles tear-down."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Data Fetching with AbortController and Event Listener Cleanup",
        code: "import React, { useState, useEffect } from 'react';\n\nexport function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [windowWidth, setWindowWidth] = useState(window.innerWidth);\n\n  // Effect 1: API Fetching with proper AbortController cleanup\n  useEffect(() => {\n    const controller = new AbortController();\n\n    async function loadUser() {\n      try {\n        const res = await fetch(`https://api.example.com/users/${userId}`, {\n          signal: controller.signal\n        });\n        const data = await res.json();\n        setUser(data);\n      } catch (err) {\n        if (err.name !== 'AbortError') console.error('Fetch failed', err);\n      }\n    }\n\n    loadUser();\n\n    // Cleanup: cancel pending request if userId changes or component unmounts\n    return () => controller.abort();\n  }, [userId]);\n\n  // Effect 2: Browser Event Listener with cleanup\n  useEffect(() => {\n    const handleResize = () => setWindowWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n\n    return () => window.removeEventListener('resize', handleResize);\n  }, []); // Run only on mount and unmount\n\n  return <div>Width: {windowWidth} | User: {user ? user.name : 'Loading...'}</div>;\n}"
      },
      commonMistakes: [
        "Omitting necessary variables from the dependency array to prevent re-fetching (leading to stale closure bugs).",
        "Using `useEffect` for pure data transformations that can be derived directly during render (`const fullName = firstName + ' ' + lastName`).",
        "Forgetting the cleanup function for event listeners, timers, or subscriptions, resulting in severe browser memory leaks."
      ],
      proTips: [
        "Cite the official React Docs philosophy: 'Use `useEffect` to synchronize with external systems, not to synchronize internal React state.' Derived state should simply be calculated during render, not in an effect."
      ]
    },
    bangla: {
      quickAnswer: "`useEffect` হলো একটি React হুক যার মাধ্যমে কম্পোনেন্টের সাইড-ইফেক্ট (Side Effects)—যেমন API থেকে ডেটা আনা, টাইমার সেট করা, ব্রাউজার ইভেন্ট লিসেনার যোগ করা ইত্যাদি—হ্যান্ডেল করা হয়।",
      interviewSpeech: "`useEffect` মূলত React কম্পোনেন্টকে বাইরের জগতের সাথে সিঙ্ক করার জন্য ব্যবহৃত হয়। React-এর দর্শন অনুযায়ী কম্পোনেন্টের রেন্ডারিং লজিক পিউর (বিশুদ্ধ) হওয়া উচিত, যাতে কোনো পার্শ্বপ্রতিক্রিয়া না থাকে। কিন্তু বাস্তব অ্যাপ্লিকেশনে আমাদের ডেটাবেস বা API থেকে ডেটা আনতে হয়, ব্রাউজারের `window` ইভেন্ট শুনতে হয় বা টাইমার চালাতে হয়। এই কাজগুলোকেই 'সাইড ইফেক্ট' বলা হয়, যা `useEffect`-এর ভেতরে লেখা হয়।\n\n`useEffect` দুটি আর্গুমেন্ট গ্রহণ করে: একটি কলব্যাক ফাংশন এবং একটি ডিপেনডেন্সি অ্যারে (`[]`):\n১. ডিপেনডেন্সি অ্যারে না দিলে: কম্পোনেন্ট যতবার রেন্ডার হবে ততবার ইফেক্ট রান করবে।\n২. খালি অ্যারে `[]` দিলে: কম্পোনেন্ট স্ক্রিনে আসার পর (Mount) শুধুমাত্র একবারই রান করবে।\n৩. ডিপেনডেন্সি মান দিলে `[userId]`: শুরুতে একবার এবং পরবর্তীতে যখনই `userId` পরিবর্তন হবে কেবল তখনই রান করবে।\n\nসবচেয়ে গুরুত্বপূর্ণ বিষয় হলো এর **ক্লিনআপ ফাংশন (Cleanup Function)**। ইফেক্টের ভেতর থেকে একটি ফাংশন রিটার্ন করা যায় যা কম্পোনেন্ট আনমাউন্ট হওয়ার সময় বা পুনরায় ইফেক্ট চলার আগে রিসোর্স (যেমন `removeEventListener`, `clearInterval`, `abort()`) খালি করে দিয়ে মেমোরি লিক রোধ করে।",
      deepDive: [
        "**ব্রাউজার পেইন্টের পর এক্সিকিউশন**: `useEffect` ব্রাউজারে ইউআই পেইন্ট হওয়ার পর অ্যাসিনক্রোনাসভাবে চলে, ফলে ব্যবহারকারীর স্ক্রিন ফ্রিজ বা ল্যাগ হয় না।",
        "**ক্লিনআপ কেন আবশ্যক**: যদি ইভেন্ট লিসেনার যোগ করে তা ক্লিনআপ না করা হয়, তবে প্রতি রি-রেন্ডারে নতুন নতুন লিসেনার মেমরিতে জমা হয়ে অ্যাপ ক্র্যাশ করাতে পারে।",
        "**স্টেট থেকে ক্যালকুলেশন বনাম ইফেক্ট**: অনেকেই সাধারণ ডেটা ক্যালকুলেশনের জন্য ইফেক্ট ব্যবহার করে (যেমন দুটি স্টেট যোগ করা)। এটি ভুল; যা সরাসরি ভেরিয়েবলে ক্যালকুলেট করা যায় তার জন্য `useEffect` ব্যবহার করা অনুচিত।",
        "**React 18 Strict Mode**: ডেভেলপমেন্টে Strict Mode অন থাকলে React ইচ্ছাকৃতভাবে ইফেক্টকে দুইবার মাউন্ট-আনমাউন্ট করে দেখে যে আপনার ক্লিনআপ ঠিকমতো কাজ করছে কিনা।"
      ],
      commonMistakes: [
        "ডিপেনডেন্সি অ্যারে খালি রেখে ভেতরে স্টেট বা প্রপস ব্যবহার করা, যার ফলে ইফেক্ট পুরনো ডেটা ধরে রাখে (Stale Closure)।",
        "টাইমার (`setInterval`) চালিয়ে ক্লিনআপ ফাংশনে `clearInterval` করতে ভুলে যাওয়া, যার ফলে ব্যাকগ্রাউন্ডে শত শত টাইমার চলতেই থাকে।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'যদি কোনো ডেটা বিদ্যমান props বা state থেকে হিসাব করা সম্ভব হয়, তবে তার জন্য `useEffect` না লিখে সরাসরি রেন্ডারের সময় ক্যালকুলেট করাই সেরা প্র্যাকটিস।'"
      ]
    }
  },
  {
    id: "pa-d3-q37-controlled-vs-uncontrolled-components",
    questionNumber: 37,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the difference between controlled and uncontrolled components?",
    banglaQuestion: "Controlled এবং Uncontrolled Components-এর মধ্যে পার্থক্য কী?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Forms", "Controlled Components", "Uncontrolled Components", "useRef"],
    english: {
      quickAnswer: "Controlled components have their form data controlled by React state via `value` and `onChange`. Uncontrolled components store their form data internally in the native DOM, accessed using `useRef`.",
      interviewSpeech: "The difference between controlled and uncontrolled components lies in where the 'Single Source of Truth' for form data lives. In a **Controlled Component**, the input element's value is completely bound to React state via the `value` prop, and changes are handled via the `onChange` event callback. React state is the single source of truth—the DOM input does not hold its own independent value. This allows instantaneous validation, dynamic formatting, disabling submit buttons based on state, and syncing inputs with other UI elements.\n\nIn contrast, an **Uncontrolled Component** leaves form data management to the browser's native DOM. The component specifies an initial value using `defaultValue`, and we query the current input value on-demand when needed (usually on form submission) using a React ref (`useRef`) or native `FormData`. Uncontrolled components require less boilerplate code and are well-suited for simple forms, integrating with non-React third-party DOM libraries, or handling massive file uploads where streaming direct from the DOM node is more performant.",
      deepDive: [
        "**Single Source of Truth**: Controlled components place data authority inside the React Virtual DOM state tree; Uncontrolled components delegate data authority to the browser's DOM element.",
        "**Initial Value Binding**: Controlled inputs use `value={state}`; Uncontrolled inputs use `defaultValue=\"initial\"` (or `defaultChecked` for checkboxes). Passing `value` without `onChange` locks the input as read-only.",
        "**Performance Tradeoffs**: Controlled inputs cause a re-render on every keystroke (usually negligible, but can affect low-end devices in massive forms). Uncontrolled inputs cause zero re-renders while the user types.",
        "**Validation Timing**: Controlled inputs excel at instant, real-time character-by-character validation and formatting (e.g., credit card masking). Uncontrolled inputs perform validation at submission time."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Controlled Input vs Uncontrolled Input with useRef",
        code: "import React, { useState, useRef } from 'react';\n\n// 1. Controlled Component (React State is Source of Truth)\nexport function ControlledForm() {\n  const [email, setEmail] = useState('');\n  const isEmailValid = email.includes('@');\n\n  return (\n    <form onSubmit={(e) => { e.preventDefault(); console.log(email); }}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)} // State drives input value\n        placeholder=\"Controlled Email\"\n      />\n      {!isEmailValid && email.length > 0 && <span style={{ color: 'red' }}>Invalid email!</span>}\n      <button type=\"submit\" disabled={!isEmailValid}>Submit</button>\n    </form>\n  );\n}\n\n// 2. Uncontrolled Component (DOM holds value, accessed via ref)\nexport function UncontrolledForm() {\n  const fileInputRef = useRef(null);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    // Read value directly from the DOM node on submit\n    alert(`Selected File: ${fileInputRef.current.files[0]?.name}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"file\" ref={fileInputRef} defaultValue=\"\" />\n      <button type=\"submit\">Upload</button>\n    </form>\n  );\n}"
      },
      commonMistakes: [
        "Accidentally switching an input from uncontrolled to controlled (e.g., initializing state with `undefined`, which makes React treat it as uncontrolled, and then updating state with a string, triggering the 'A component is changing an uncontrolled input to be controlled' warning). Always initialize with an empty string `''`.",
        "Using `value` instead of `defaultValue` on an uncontrolled input without an `onChange` handler."
      ],
      proTips: [
        "In modern React, most standard text inputs are best implemented as controlled components. However, for file inputs `<input type=\"file\" />`, React *forces* them to be uncontrolled because browser security prevents programmatically setting the file value."
      ]
    },
    bangla: {
      quickAnswer: "Controlled Components-এ ফর্ম ইনপুটের মান React স্টেটের মাধ্যমে (`value` এবং `onChange`) পুরোপুরি নিয়ন্ত্রিত হয়। আর Uncontrolled Components-এ ডেটা সরাসরি ব্রাউজারের DOM এলিমেন্টের ভেতর থাকে এবং `useRef`-এর মাধ্যমে তা নেওয়া হয়।",
      interviewSpeech: "Controlled এবং Uncontrolled কম্পোনেন্টের মূল পার্থক্য হলো ফর্ম ডেটার 'Single Source of Truth' কার হাতে রয়েছে। **Controlled Component**-এ ইনপুটের মান সরাসরি React স্টেটের সাথে যুক্ত থাকে। ইনপুটে `value={text}` এবং `onChange={(e) => setText(e.target.value)}` ব্যবহার করা হয়। ব্যবহারকারী প্রতিটি অক্ষর টাইপ করার সাথে সাথে স্টেট আপডেট হয় এবং সেই স্টেট ইনপুটের মান নির্ধারণ করে। এর সুবিধা হলো টাইপ করার সাথে সাথেই লাইভ ভ্যালিডেশন করা যায়, ইনপুটের লেখা অনুযায়ী সাবমিট বাটন এনেবল/ডিসেবেল করা যায় বা টেক্সট ফরম্যাট করা যায়।\n\nঅপরদিকে **Uncontrolled Component**-এ ইনপুটের মান ব্রাউজারের নিজস্ব DOM ধরে রাখে। এতে প্রতি ক্লিকে স্টেট পরিবর্তন হয় না; বরং ফর্ম সাবমিট করার সময় `useRef` ব্যবহার করে সরাসরি DOM নোড থেকে মান রিড করা হয় (যেমন `inputRef.current.value`)। প্রাথমিক মান দিতে `defaultValue` ব্যবহার করা হয়। ফাইল আপলোড ইনপুট বা খুব সাধারণ ফর্মের ক্ষেত্রে এটি দ্রুত ও কম কোডে কাজ করে।",
      deepDive: [
        "**সিঙ্গেল সোর্স অব ট্রুথ**: কন্ট্রোল্ড কম্পোনেন্টে ডেটা পুরোপুরি React-এর ভার্চুয়াল DOM স্টেটের নিয়ন্ত্রণে থাকে; আনকন্ট্রোল্ডে আসল DOM-এর নিয়ন্ত্রণে থাকে।",
        "**রি-রেন্ডারিং পার্থক্য**: কন্ট্রোল্ডে প্রতিবার কী-স্ট্রোক চাপলে কম্পোনেন্ট রি-রেন্ডার হয় (যা ইনস্ট্যান্ট ভ্যালিডেশনের সুযোগ দেয়)। আনকন্ট্রোল্ডে টাইপ করার সময় কোনো রি-রেন্ডার হয় না।",
        "**ইনপুট টু কন্ট্রোল্ড ওয়ার্নিং**: স্টেটের প্রাথমিক মান যদি `undefined` বা `null` দেওয়া হয়, তবে React তাকে প্রথমে আনকন্ট্রোল্ড মনে করে এবং পরে মান পেলে কন্ট্রোল্ড বানিয়ে লাল ওয়ার্নিং দেয়। তাই শুরুতে সবসময় ফাঁকা স্ট্রিং `''` দিতে হয়।",
        "**ফাইল ইনপুট `<input type=\"file\" />`**: ব্রাউজার সিকিউরিটির কারণে ফাইল ইনপুটের মান জাভাস্ক্রিপ্ট দিয়ে সেট করা যায় না, তাই React-এ ফাইল ইনপুট সর্বদা আনকন্ট্রোল্ড রাখতে হয়।"
      ],
      commonMistakes: [
        "কন্ট্রোল্ড ইনপুটের ক্ষেত্রে `value={state}` দিয়ে `onChange` হ্যান্ডলার না দেওয়া (এতে ইনপুটটি রিড-অনলি লক হয়ে যায়)।",
        "স্টেটের শুরুতে `undefined` রাখা, যার ফলে কনসোলে 'component is changing uncontrolled to controlled' ওয়ার্নিং আসে।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'রিয়েল-টাইম ভ্যালিডেশন এবং ডায়নামিক ইউআইয়ের জন্য Controlled কম্পোনেন্ট সেরা; তবে ফাইল আপলোড বা সিম্পল ফর্ম সাবমিশনের ক্ষেত্রে Uncontrolled ও FormData ব্যবহার করা অনেক বেশি ক্লিন।'"
      ]
    }
  },
  {
    id: "pa-d3-q38-react-props-and-passing",
    questionNumber: 38,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What are props in React and how are they passed?",
    banglaQuestion: "React-এ Props কী এবং এগুলো কীভাবে এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে পাস করা হয়?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Props", "Components", "Data Flow", "Children"],
    english: {
      quickAnswer: "Props (short for properties) are read-only, immutable arguments passed top-down from parent to child components, enabling dynamic component configuration and unidirectional data flow.",
      interviewSpeech: "Props, short for properties, are the mechanism by which React components communicate with one another. They adhere strictly to React's unidirectional (top-down) data flow, meaning data can only be passed from a parent component down to its children. In functional components, props are received as a single JavaScript object argument in the component function signature.\n\nProps can carry virtually any JavaScript value: primitives (strings, numbers, booleans), complex data structures (objects, arrays), React elements (JSX), and functions. Passing functions as props—often called callback props—is how child components communicate back up to parent components by invoking the callback with data. Crucially, props are strictly immutable: a child component must never modify the props it receives. Pure functions and pure components must not cause side effects on their inputs.",
      deepDive: [
        "**Immutability Rule**: React enforces that components must behave like pure functions with respect to their props. Modifying `props.title = 'New'` violates React's contract and leads to unpredictable rendering glitches.",
        "**The Special `children` Prop**: Any content placed between opening and closing tags `<Modal><p>Body text</p></Modal>` is implicitly passed to the child as `props.children`, enabling powerful component composition.",
        "**Callback Props for Upward Communication**: Since data flows strictly downwards, a child component sends events or data to its parent by invoking a callback function passed down as a prop (`<Child onSelect={(item) => setSelected(item)} />`).",
        "**Prop Spreading**: The JSX spread syntax `<Card {...user} />` unpacks all properties of an object into separate props. While convenient, it should be used judiciously to avoid passing unwanted HTML attributes down to DOM nodes."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Passing Primitives, Callback Functions, and Children Props",
        code: "import React from 'react';\n\n// Child Component receiving and destructuring props\nfunction UserBadge({ name, role = 'Member', onPromote, children }) {\n  return (\n    <div className=\"badge-card\">\n      <h4>{name} ({role})</h4>\n      {/* Rendering children passed between tags */}\n      <div className=\"badge-content\">{children}</div>\n      {/* Upward communication via callback prop */}\n      <button onClick={() => onPromote(name)}>Promote User</button>\n    </div>\n  );\n}\n\n// Parent Component passing props downwards\nexport function TeamList() {\n  const handlePromote = (userName) => {\n    alert(`Promoted ${userName} to Team Lead!`);\n  };\n\n  return (\n    <div>\n      <UserBadge\n        name=\"Ayesha Rahman\"\n        role=\"Senior Developer\"\n        onPromote={handlePromote}\n      >\n        <p>Specialization: Distributed Systems & React</p>\n      </UserBadge>\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Attempting to reassign or mutate props directly inside a child component (`props.count = 10`).",
        "Confusing `props` with `state`. Props are owned and passed by the parent (external); state is owned and managed by the component itself (internal).",
        "Overusing prop spreading (`{...props}`) recklessly, which can pollute the DOM with non-standard attributes and cause React warnings."
      ],
      proTips: [
        "Use destructuring with default values in the function parameter signature `function Button({ variant = 'primary', size = 'md', ...rest })`. It makes component APIs instantly readable and self-documenting."
      ]
    },
    bangla: {
      quickAnswer: "Props (Properties-এর সংক্ষিপ্ত রূপ) হলো রিড-অনলি ও ইমিউটেবল ডেটা, যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে প্যারামিটার হিসেবে পাঠানো হয়। এটি React-এর একমুখী ডেটা প্রবাহ (Unidirectional Data Flow) বজায় রাখে।",
      interviewSpeech: "React-এ Props হলো কম্পোনেন্টগুলোর মধ্যে ডেটা আদান-প্রদানের মাধ্যম। এটি ঠিক জাভাস্ক্রিপ্ট ফাংশনের প্যারামিটারের মতো কাজ করে। React-এর নিয়ম অনুযায়ী ডেটা সবসময় ওপর থেকে নিচে অর্থাৎ Parent কম্পোনেন্ট থেকে Child কম্পোনেন্টের দিকে প্রবাহিত হয় (Unidirectional Data Flow)। চাইল্ড কম্পোনেন্ট তার প্রথম আর্গুমেন্ট হিসেবে props অবজেক্টটি গ্রহণ করে।\n\nProps হিসেবে আমরা যেকোনো জাভাস্ক্রিপ্ট ডেটা টাইপ পাঠাতে পারি—যেমন স্ট্রিং, নাম্বার, বুলিয়ান, অবজেক্ট, অ্যারে, এমনকি অন্য কোনো JSX কম্পোনেন্ট। বিশেষ করে ফাংশন পাঠানো যায়, যাকে 'Callback Props' বলা হয়। চাইল্ড কম্পোনেন্ট কোনো ইভেন্ট ঘটার পর প্যারেন্টকে জানাতে চাইলে এই কলব্যাক ফাংশনটিকে কল করে ডেটা ওপরে পাঠায়। তবে সবচেয়ে বড় নিয়ম হলো: Props হলো সম্পূর্ণ 'ইমিউটেবল' (Immutable বা অপরিবর্তনশীল)। অর্থাৎ চাইল্ড কখনোই তার রিসিভ করা প্রপসের মান নিজে থেকে পরিবর্তন করতে পারে না।",
      deepDive: [
        "**ইমিউটেবিলিটি নিয়ম**: চাইল্ড কম্পোনেন্টের ভেতরে `props.name = 'নতুন নাম'` লিখে মান বদলানো সম্পূর্ণ নিষিদ্ধ। React পিউর ফাংশনের নিয়মে চলে।",
        "**স্পেশাল `children` প্রপ**: কোনো কম্পোনেন্টের ওপেনিং ও ক্লোজিং ট্যাগের মাঝে যা কিছু লেখা হয় (`<Card><p>Hello</p></Card>`), তা স্বয়ংক্রিয়ভাবে চাইল্ডের কাছে `props.children` হিসেবে পৌঁছে যায়। এটি কম্পোজিশনে ব্যাপক ব্যবহৃত হয়।",
        "**নিচ থেকে ওপরে যোগাযোগ**: চাইল্ড সরাসরি প্যারেন্টের স্টেট বদলাতে পারে না। প্যারেন্ট একটি হ্যান্ডলার ফাংশন প্রপস হিসেবে পাঠায় (`onDelete={handleDelete}`), এবং চাইল্ড তা এক্সিকিউট করে প্যারেন্টকে নোটিফাই করে।",
        "**ডিফল্ট প্রপস ও ডিসট্রাকচারিং**: প্রপস রিসিভ করার সময় প্যারামিটারেই ডিসট্রাকচার করে ডিফল্ট মান দেওয়া (`({ theme = 'light' })`) কোডকে অনেক বেশি পরিষ্কার রাখে।"
      ],
      commonMistakes: [
        "চাইল্ড কম্পোনেন্টে প্রপসের মান সরাসরি পরিবর্তন করার চেষ্টা করা।",
        "Props এবং State গুলিয়ে ফেলা (Props আসে বাইরে প্যারেন্ট থেকে এবং রিড-অনলি; State থাকে কম্পোনেন্টের নিজস্ব ভেতরে এবং পরিবর্তনশীল)।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'React-এর বিশুদ্ধতা রক্ষার জন্য সমস্ত কম্পোনেন্টকে তাদের props-এর সাপেক্ষে Pure Function-এর মতো আচরণ করতে হয়।'"
      ]
    }
  },
  {
    id: "pa-d3-q39-prop-drilling-and-solutions",
    questionNumber: 39,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is prop drilling and how can it be avoided?",
    banglaQuestion: "Prop Drilling কী এবং কীভাবে এটি এড়ানো বা সমাধান করা যায়?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Prop Drilling", "Context API", "Component Composition", "State Management"],
    english: {
      quickAnswer: "Prop drilling is the process of passing props through intermediate components that do not need them, solely to reach deeply nested children. It can be avoided using Component Composition, React Context API, or State Management libraries.",
      interviewSpeech: "Prop drilling occurs when data needs to be passed from a high-level ancestor component down to a deeply nested descendant component through multiple intermediary levels that have no actual use for the data themselves. For example, passing `currentUser` from `App` down through `Header`, `Navbar`, and `NavLinks` just so `UserProfilePicture` can display an avatar.\n\nWhile passing props 1 or 2 levels down is completely fine and explicit, deep prop drilling creates heavy technical debt: it clutters intermediary components with useless props, creates tight coupling, and makes refactoring painful because modifying a prop requires updating every component along the chain.\n\nWe avoid prop drilling using three main approaches:\n1. **Component Composition**: Often overlooked, simply lifting the nested child up and passing it down using `children` or JSX slots (`<Header profile={<UserProfile user={user} />} />`). Intermediary components don't even need to know the `user` prop exists!\n2. **React Context API**: Creating a context (`createContext`) and consuming it via `useContext` allows any child in the subtree to access ambient global state directly without passing props through intermediate layers.\n3. **Global State Management**: For large-scale applications with high-frequency updates, libraries like Zustand, Redux Toolkit, or Jotai store state outside the React component tree.",
      deepDive: [
        "**Coupling & Maintenance Burden**: Prop drilling makes intermediate components brittle. If the shape of the drilled prop changes, all pass-through components require code updates and unit test modifications.",
        "**Composition Before Context**: The official React documentation explicitly advises trying Component Composition before reaching for Context. Passing elements as `children` preserves simplicity without Context overhead.",
        "**Context Re-render Gotcha**: All components consuming a Context re-render whenever the Context value changes, unless the context is carefully split or consumers are memoized.",
        "**When Prop Drilling is Acceptable**: 1-2 levels of prop passing is not a code smell; it is explicit and easier to trace than global state abstractions."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Prop Drilling Problem vs Clean Component Composition & Context API",
        code: "// 1. Problem: Prop Drilling (Intermediate 'Navbar' has no use for 'theme')\nfunction App() {\n  const [theme] = useState('dark');\n  return <Header theme={theme} />;\n}\nfunction Header({ theme }) { return <Navbar theme={theme} />; }\nfunction Navbar({ theme }) { return <ThemeToggle theme={theme} />; }\n\n// 2. Solution A: Component Composition (Slots / Children) - No Context Needed!\nfunction CleanHeader({ children }) {\n  return <header className=\"header-bar\">{children}</header>;\n}\nfunction CleanApp() {\n  const [theme, setTheme] = useState('dark');\n  return (\n    <CleanHeader>\n      <ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />\n    </CleanHeader>\n  );\n}\n\n// 3. Solution B: React Context API (Direct Consumer)\nimport React, { createContext, useContext } from 'react';\nconst ThemeContext = createContext('light');\n\nfunction ContextThemeToggle() {\n  const theme = useContext(ThemeContext); // Direct access without intermediaries!\n  return <span>Current Theme: {theme}</span>;\n}"
      },
      commonMistakes: [
        "Reaching for heavy global state libraries (like Redux) for simple 2-level prop passing that could easily be solved with normal props or composition.",
        "Thinking Context API is the *only* solution to prop drilling (Component Composition is often much simpler and faster).",
        "Putting every single state variable into one giant global Context, causing the entire app to re-render on any minor keystroke."
      ],
      proTips: [
        "Senior tip for interviews: Always mention **Component Composition** first before mentioning Context API or Redux. It proves you understand fundamental React architectural design rather than blindly reaching for global state."
      ]
    },
    bangla: {
      quickAnswer: "Prop Drilling হলো এমন একটি সমস্যা যেখানে কোনো ডেটা একদম ভেতরের চাইল্ড কম্পোনেন্টে পৌঁছানোর জন্য মাঝের অপ্রয়োজনীয় অনেকগুলো কম্পোনেন্টের মধ্য দিয়ে প্রপস পাস করতে হয়। Component Composition, Context API বা স্টেট ম্যানেজমেন্ট দিয়ে এটি সমাধান করা যায়।",
      interviewSpeech: "React অ্যাপ্লিকেশনে যখন ওপরের কোনো প্যারেন্ট কম্পোনেন্টের স্টেট একদম নিচের কোনো চাইল্ড কম্পোনেন্টে প্রয়োজন হয়, এবং মাঝে ৩-৪টি এমন কম্পোনেন্ট থাকে যাদের ওই ডেটার কোনো প্রয়োজনই নেই—তখন বাধ্য হয়ে মাঝখানের সবার মধ্য দিয়ে প্রপস পাস করে নিয়ে যাওয়ার প্রক্রিয়াকে **Prop Drilling** বলা হয়।\n\n১ বা ২ লেভেল পর্যন্ত প্রপস পাস করা স্বাভাবিক ও ক্লিন। কিন্তু লেভেল বেশি গভীর হলে কোড মেইনটেইন করা দুঃস্বপ্নে পরিণত হয়; কারণ মাঝের প্রতিটি কম্পোনেন্টে অযথা কোড বাড়ে এবং ডেটার ফরম্যাট পরিবর্তন করলে সবকটি ইন্টারমিডিয়েট ফাইল এডিট করতে হয়।\n\nProp Drilling দূর করার ৩টি জনপ্রিয় সমাধান:\n১. **Component Composition**: Context ব্যবহারের আগেই React অফিসিয়ালি কম্পোজিশন সাজেস্ট করে। চাইল্ড কম্পোনেন্টকে আগে থেকেই প্যারেন্টে ডিফাইন করে `children` বা স্লট হিসেবে পাঠালে মাঝের কম্পোনেন্টগুলোকে ডেটা দেখতেও হয় না।\n২. **React Context API**: `createContext` এবং `useContext` হুক ব্যবহার করে একটি গ্লোবাল কনটেক্সট তৈরি করা যায়, যার ফলে সাব-ট্রির যেকোনো কম্পোনেন্ট সরাসরি ডেটা রিড করতে পারে।\n৩. **External State Management**: বড় প্রজেক্টে জটিল ও ঘনঘন পরিবর্তিত ডেটার জন্য Zustand বা Redux Toolkit ব্যবহার করে ডেটা কম্পোনেন্ট ট্রির বাইরে ম্যানেজ করা যায়।",
      deepDive: [
        "**কোড কাপলিং**: Prop drilling-এর কারণে মাঝের কম্পোনেন্টগুলো অপ্রয়োজনীয়ভাবে টাইটলি কাপল্ড হয়ে পড়ে, ফলে তাদের আলাদা করে অন্য কোথাও রি-ইউজ করা কঠিন হয়।",
        "**কম্পোজিশন ফার্স্ট অ্যাপ্রোচ**: অনেক ডেভেলপার ড্রিলিং দেখলেই হুট করে Redux বা Context বসিয়ে দেয়। অথচ প্যারেন্টে `<Header><Avatar user={user} /></Header>` লিখলে কোনো গ্লোবাল স্টেট ছাড়াই সমস্যা সমাধান হয়ে যায়।",
        "**Context-এর ওভারহেড**: Context-এর মান পরিবর্তন হলে সেই কনটেক্সটের সমস্ত কনজিউমার কম্পোনেন্ট রি-রেন্ডার হয়, তাই ছোটখাটো ড্রিলিংয়ে অযথা Context ব্যবহার করা ঠিক নয়।",
        "**ট্রেসিং সুবিধা**: অল্প লেভেলের ড্রিলিং ভালো, কারণ কোড পড়ে সহজে বোঝা যায় ডেটা কোথা থেকে কোথায় যাচ্ছে (Explicit Data Flow)।"
      ],
      commonMistakes: [
        "সামান্য ২ লেভেল ডেটা পাসের জন্যই হুট করে বড় স্টেট লাইব্রেরি (যেমন Redux) সেটআপ করে কোডের জটিলতা বাড়ানো।",
        "Context API-ই prop drilling দূর করার একমাত্র সমাধান মনে করা (Component Composition অনেক ক্ষেত্রে বেশি কার্যকর)।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'Prop drilling দূর করার জন্য আমি প্রথমে Component Composition বিবেচনা করি। এতে কাজ না হলে Context API এবং বড় স্কেলের জটিল স্টেট হলে Zustand/Redux ব্যবহার করি।'"
      ]
    }
  },
  {
    id: "pa-d3-q40-usecontext-hook-explained",
    questionNumber: 40,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "Explain the useContext hook with an example.",
    banglaQuestion: "উদাহরণসহ useContext হুকের কার্যপদ্ধতি ব্যাখ্যা করুন।",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "useContext", "Context API", "Hooks", "Global State"],
    english: {
      quickAnswer: "`useContext` is a hook that allows functional components to subscribe to and read data from a React Context directly, bypassing the need for nested `<Context.Consumer>` wrappers.",
      interviewSpeech: "The `useContext` hook is the modern functional way to consume data from React's Context API. Before hooks, reading context required wrapping JSX in clunky `<MyContext.Consumer>{value => ...}</MyContext.Consumer>` render props. `useContext` simplifies this completely down to a single clean line: `const value = useContext(MyContext)`.\n\nThe Context workflow consists of three steps:\n1. **Creation**: Calling `createContext(defaultValue)` to generate a context object.\n2. **Provision**: Wrapping the component tree with `<MyContext.Provider value={currentValue}>` to broadcast data downwards.\n3. **Consumption**: Any descendant component calls `useContext(MyContext)` to directly read the current value.\n\nWhenever the `value` passed to the Provider changes, all descendant components calling `useContext(MyContext)` will automatically re-render with the latest value, regardless of whether intermediate components are memoized with `React.memo`. Typical use cases include global themes (dark/light), authenticated user sessions, and language localization.",
      deepDive: [
        "**Provider Lookup**: `useContext` searches upwards in the component tree for the nearest matching `<Context.Provider>`. If no provider is found, it falls back to the default value specified in `createContext(defaultValue)`.",
        "**Re-rendering Trigger**: React uses `Object.is` reference equality to detect changes in the Provider's `value`. If an inline object `value={{ theme, toggleTheme }}` is passed without `useMemo`, a new object is allocated on every parent render, forcing all consumers to re-render.",
        "**Custom Provider Pattern**: A clean industry best practice is to encapsulate the Context, Provider, and custom consumption hook (`useTheme()`) inside a single module, throwing a helpful error if used outside its Provider.",
        "**Context Splitting**: To prevent unnecessary re-renders, separate contexts that change at different frequencies (e.g., split `UserAuthContext` from `ThemeContext`)."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Custom ThemeContext with Provider and Clean useContext Hook",
        code: "import React, { createContext, useContext, useState, useMemo } from 'react';\n\n// 1. Create Context\nconst ThemeContext = createContext(null);\n\n// 2. Custom Provider Component\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));\n\n  // Memoize value to avoid unnecessary re-renders of consumers\n  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);\n\n  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;\n}\n\n// 3. Custom Hook with defensive guard\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) {\n    throw new Error('useTheme must be used within a ThemeProvider');\n  }\n  return context;\n}\n\n// 4. Consumer Component\nexport function HeaderToggle() {\n  const { theme, toggleTheme } = useTheme();\n  return (\n    <button onClick={toggleTheme}>\n      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode\n    </button>\n  );\n}"
      },
      commonMistakes: [
        "Passing new unmemoized object literals directly to `<Provider value={{ user, logout }}>`, causing every consumer to re-render every time the Provider's parent renders.",
        "Forgetting to wrap the consumer components with the `<Context.Provider>`, which results in falling back to the initial default value or undefined.",
        "Using Context API as a full replacement for all application state, leading to performance degradation in high-frequency update scenarios."
      ],
      proTips: [
        "Always expose a dedicated custom hook (e.g., `useAuth()`, `useTheme()`) rather than exporting the raw context object. Inside the hook, check `if (!context) throw new Error(...)` to give fellow developers instant debugging feedback if they forget the Provider."
      ]
    },
    bangla: {
      quickAnswer: "`useContext` হলো এমন একটি React হুক যা কোনো চাইল্ড কম্পোনেন্টকে সরাসরি React Context-এর ডেটা রিড ও সাবস্ক্রাইব করার সুযোগ দেয়, মাঝখানে কোনো প্রপস পাস বা কনজিউমার ট্যাগের ঝামেলা ছাড়াই।",
      interviewSpeech: "`useContext` হুক হলো React Context API থেকে ডেটা ব্যবহার করার আধুনিক ফাংশনাল উপায়। পূর্বে কনটেক্সট থেকে ডেটা পড়তে `<ThemeContext.Consumer>` লিখে রেন্ডার প্রপসের জটিল কোড লিখতে হতো। `useContext` আসার পর এখন মাত্র এক লাইনে ডেটা অ্যাক্সেস করা যায়: `const { theme } = useContext(ThemeContext)`।\n\nContext মূলত ৩টি ধাপে কাজ করে:\n১. তৈরি করা: `createContext(defaultValue)` দিয়ে একটি কনটেক্সট অবজেক্ট বানানো হয়।\n২. প্রোভাইড করা: প্যারেন্ট লেভেলে `<ThemeContext.Provider value={...}>` দিয়ে পুরো কম্পোনেন্ট ট্রিকে মুড়িয়ে দেওয়া হয়।\n৩. গ্রহণ করা: সাব-ট্রির যেকোনো চাইল্ড কম্পোনেন্ট `useContext(ThemeContext)` কল করে সরাসরি মানটি পড়তে পারে।\n\nযখনই প্রোভাইডারের `value` পরিবর্তন হয়, যে সমস্ত কম্পোনেন্ট এই কনটেক্সটটি কনজিউম করছে তারা সবাই স্বয়ংক্রিয়ভাবে নতুন মান নিয়ে রি-রেন্ডার হবে। থিম পরিবর্তন (Dark/Light mode), ইউজার লগইন সেশন বা ল্যাঙ্গুয়েজের মতো গ্লোবাল ডেটার জন্য এটি আদর্শ।",
      deepDive: [
        "**নিকটবর্তী প্রোভাইডার খোঁজা**: `useContext` ট্রি বেয়ে ওপরের দিকে নিকটতম `<Provider>` খোঁজে। যদি উপরে কোনো প্রোভাইডার না পায়, তবে `createContext()` তৈরির সময় দেওয়া ডিফল্ট ভ্যালুটি ব্যবহার করে।",
        "**অপ্রয়োজনীয় রি-রেন্ডার রোধে `useMemo`**: প্রোভাইডারে অবজেক্ট পাস করার সময় (`value={{ theme, toggle }}`) তা `useMemo` দিয়ে মেমোইজ করা উচিত, অন্যথায় প্যারেন্ট রেন্ডার হলেই নতুন অবজেক্ট তৈরি হয়ে সমস্ত কনজিউমারকে অকারণে রি-রেন্ডার করাবে।",
        "**কাস্টম হুক প্যাটার্ন**: সরাসরি Context এক্সপোর্ট না করে `useTheme()` বা `useAuth()` কাস্টম হুক তৈরি করা ইন্ডাস্ট্রির বেস্ট প্র্যাকটিস। এতে প্রোভাইডারের বাইরে হুক কল করলে সুন্দর কাস্টম এরর মেসেজ দেওয়া যায়।",
        "**কখন ব্যবহার করবেন না**: যদি ডেটা প্রতি সেকেন্ডে বহাবার পরিবর্তিত হয় (যেমন কোনো অ্যানিমেশন বা দ্রুত টাইপিং), তবে Context ব্যবহার করলে পারফরম্যান্সে ড্রপ হতে পারে।"
      ],
      commonMistakes: [
        "কম্পোনেন্ট ট্রিকে `<Context.Provider>` দিয়ে র‍্যাপ করতে ভুলে যাওয়া।",
        "প্রোভাইডারে সরাসরি আনমেমোইজড অবজেক্ট পাস করা, যার ফলে অ্যাপের সমস্ত কনজিউমার অহেতুক রি-রেন্ডার হয়।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'আমি সবসময় Context-এর সাথে একটি কাস্টম হুক তৈরি করি (যেমন `useAuth`), যা চেক করে কম্পোনেন্টটি Provider-এর ভেতরে আছে কি না; না থাকলে ডেভেলপার-ফ্রেন্ডলি এক্সেপশন থ্রো করে।'"
      ]
    }
  },
  {
    id: "pa-d3-q41-useref-hook-and-use-cases",
    questionNumber: 41,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the useRef hook and when would you use it?",
    banglaQuestion: "useRef হুক কী এবং এটি কখন ও কেন ব্যবহার করা উচিত?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "useRef", "Hooks", "DOM", "Mutable Reference", "Re-render"],
    english: {
      quickAnswer: "`useRef` is a hook that returns a mutable ref object `{ current: initialValue }` that persists for the entire lifetime of the component WITHOUT triggering a re-render when its value changes.",
      interviewSpeech: "`useRef` is a built-in React hook that provides a persistent, mutable reference container across component renders. It returns a plain JavaScript object with a single mutable property: `.current`. Unlike state (`useState`), mutating `.current` directly does NOT trigger a component re-render.\n\n`useRef` has two primary use cases in real-world applications:\n1. **Direct DOM Access**: Attaching the ref object to a JSX element `<input ref={inputRef} />` gives you direct access to the underlying native browser DOM node once mounted. This is essential for managing focus, triggering text selection, measuring element dimensions (`getBoundingClientRect`), scrolling to specific positions, or integrating with imperative third-party libraries (like Chart.js or D3).\n2. **Storing Mutable Instance Variables**: When you need to keep track of mutable data that does *not* visually impact the UI—such as timer IDs (`setInterval`/`setTimeout`), previous state values, render counts, or tracking whether a component is mounted—`useRef` is the ideal tool because updating it avoids triggering costly, unnecessary re-renders.",
      deepDive: [
        "**Persistence Guarantee**: The ref object `{ current: ... }` is created once on mount and React guarantees the exact same object reference is returned on every subsequent render.",
        "**No Re-render on Mutation**: Writing `countRef.current = countRef.current + 1` mutates the property silently in memory without entering React's Render or Commit phases.",
        "**DOM Attachment Lifecycle**: During the render phase, `ref.current` is not yet attached to the DOM node. React populates `ref.current` with the DOM element during the Commit phase before `useEffect` fires, and sets it back to `null` on unmount.",
        "**Do Not Read/Write during Render**: Mutating or reading `ref.current` during the pure rendering phase (outside of effects or event handlers) can cause unpredictable behavior in React 18 Concurrent Mode."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "1. DOM Node Focusing & 2. Persistent Timer ID Storage",
        code: "import React, { useRef, useState, useEffect } from 'react';\n\nexport function FocusAndStopwatch() {\n  // Use Case 1: Direct DOM access\n  const inputRef = useRef(null);\n  const handleFocus = () => inputRef.current?.focus();\n\n  // Use Case 2: Mutable variable storage (Timer ID) without causing re-renders\n  const [seconds, setSeconds] = useState(0);\n  const timerIdRef = useRef(null); // Holds setInterval ID\n\n  const startTimer = () => {\n    if (timerIdRef.current !== null) return;\n    timerIdRef.current = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n  };\n\n  const stopTimer = () => {\n    clearInterval(timerIdRef.current);\n    timerIdRef.current = null;\n  };\n\n  useEffect(() => {\n    return () => clearInterval(timerIdRef.current); // Cleanup on unmount\n  }, []);\n\n  return (\n    <div>\n      <input ref={inputRef} placeholder=\"Click focus button...\" />\n      <button onClick={handleFocus}>Focus Input</button>\n      <hr />\n      <p>Timer: {seconds}s</p>\n      <button onClick={startTimer}>Start</button>\n      <button onClick={stopTimer}>Stop</button>\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Using `useRef` when the data changes should visibly update the screen (if the UI needs to update when data changes, you MUST use `useState`).",
        "Reading or writing `ref.current` directly in the component's render body instead of inside effects or handlers.",
        "Forgetting that `.current` is `null` on the initial render until the DOM node mounts."
      ],
      proTips: [
        "In interviews, describe `useRef` as: 'The functional equivalent of an instance field (this.something) in a class component.' It persists across renders without triggering a re-render when modified."
      ]
    },
    bangla: {
      quickAnswer: "`useRef` হলো একটি React হুক যা একটি পরিবর্তনশীল রেফারেন্স অবজেক্ট `{ current: initialValue }` রিটার্ন করে। এর মান পরিবর্তন হলেও কম্পোনেন্ট পুনরায় রেন্ডার (Re-render) হয় না।",
      interviewSpeech: "`useRef` হলো React-এর এমন একটি হুক যা কম্পোনেন্টের পুরো লাইফটাইমে মেমরিতে একটি অপরিবর্তনশীল অবজেক্ট রেফারেন্স ধরে রাখে। এটি কল করলে একটি অবজেক্ট পাওয়া যায় যার ভেতর একটিমাত্র প্রোপার্টি থাকে: `.current`। `useState`-এর সাথে এর সবচেয়ে বড় তফাৎ হলো: স্টেটের মান বদলালে কম্পোনেন্ট রি-রেন্ডার হয়, কিন্তু `ref.current`-এর মান সরাসরি পরিবর্তন করলেও কম্পোনেন্ট কখনোই রি-রেন্ডার হয় না।\n\nবাস্তব প্রজেক্টে `useRef`-এর দুটি প্রধান ব্যবহার রয়েছে:\n১. সরাসরি ব্রাউজারের আসল DOM অ্যাক্সেস করা: কোনো ইনপুট ফিল্ডে ফোকাস করা (`inputRef.current.focus()`), স্ক্রোল পজিশন নিয়ন্ত্রণ করা, এলিমেন্টের সাইজ মাপা কিংবা থার্ড-পার্টি লাইব্রেরি (যেমন Chart.js) ইনিশিয়ালাইজ করার জন্য JSX এলিমেন্টে `ref={myRef}` বসিয়ে DOM নোডটি ধরা হয়।\n২. রি-রেন্ডার ছাড়া মিউটেবল ডেটা সংরক্ষণ করা: যদি এমন কোনো ডেটা মনে রাখার প্রয়োজন হয় যা স্ক্রিনের ইউআইতে সরাসরি কোনো প্রভাব ফেলে না—যেমন `setInterval`-এর টাইমার আইডি, কোনো পূর্ববর্তী স্টেটের মান (Previous State) বা কম্পোনেন্টটি প্রথমবার রেন্ডার হচ্ছে কি না তা ট্র্যাক করা—তখন `useRef` ব্যবহার করা হয়।",
      deepDive: [
        "**স্থায়ী রেফারেন্স**: কম্পোনেন্ট যতবারই রি-রেন্ডার হোক না কেন, React গ্যারান্টি দেয় যে `useRef` সবসময় মেমরির একই অবজেক্ট রেফারেন্স ফেরত দেবে।",
        "**রি-রেন্ডার না হওয়ার সুবিধা**: `ref.current = 100` লিখলে ব্যাকগ্রাউন্ডে মান আপডেট হয় কিন্তু React কোনো Render বা Commit সাইকেল চালায় না, যা হাই-পারফরম্যান্স লজিকের জন্য দারুণ।",
        "**DOM বাইন্ডিংয়ের সময়**: রেন্ডার চলার সময় `ref.current`-এর মান `null` থাকে। React যখন রিয়েল DOM-এ নোডটি মাউন্ট করে (Commit Phase), তখন নোডটি `ref.current`-এ অ্যাসাইন করে।",
        "**রেন্ডার বডিতে মিউট না করা**: কম্পোনেন্ট ফাংশনের রেন্ডার বডির ভেতরে সরাসরি `ref.current` পরিবর্তন করা অনুচিত; এটি সর্বদা কোনো ইভেন্ট হ্যান্ডলার বা `useEffect`-এর ভেতরে করা উচিত।"
      ],
      commonMistakes: [
        "এমন ডেটার জন্য `useRef` ব্যবহার করা যা পরিবর্তিত হলে স্ক্রিনের লেখাও বদলানো উচিত (স্ক্রিনের ভিজ্যুয়াল ডেটার জন্য অবশ্যই `useState` লাগবে)।",
        "প্রথম রেন্ডারের আগেই DOM নোড খোঁজার চেষ্টা করা (মাউন্ট হওয়ার আগে `current` সর্বদা `null` থাকে)।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'useRef মূলত ক্লাস কম্পোনেন্টের instance variable-এর মতো কাজ করে—এটি রি-রেন্ডার না ঘটিয়ে রেন্ডারগুলোর মাঝে যেকোনো মিউটেবল ভ্যালু বা DOM রেফারেন্স সংরক্ষণ করে।'"
      ]
    }
  },
  {
    id: "pa-d3-q42-react-keys-in-lists",
    questionNumber: 42,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What are React keys and why are they important in lists?",
    banglaQuestion: "React-এ keys কী এবং লিস্ট রেন্ডারিং করার সময় এটি কেন এত গুরুত্বপূর্ণ?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Keys", "Lists", "Reconciliation", "Virtual DOM", "Performance"],
    english: {
      quickAnswer: "Keys are unique string or number identifiers given to array items in React. They provide elements with a stable identity so React's reconciliation algorithm can accurately identify which items were added, removed, or reordered.",
      interviewSpeech: "In React, whenever you render a dynamic collection or list of elements using `.map()`, React requires a special `key` prop on the outermost element of each item. Keys serve as stable unique identifiers for elements across re-renders.\n\nUnder the hood, React's reconciliation diffing algorithm compares the new Virtual DOM tree with the previous one. Without keys, if an item is inserted at the top of a list of 1,000 items, React would compare the 1st new item to the 1st old item, find a mismatch, mutate it, and cascade mutations down through every single element in the list. With unique, stable keys, React instantly recognizes that existing nodes simply shifted position: it leaves the 1,000 existing DOM elements completely intact and merely inserts the single new element at the top.\n\nFurthermore, keys protect internal component state. If list items contain local state (like input fields or open accordion states) and items are sorted or deleted without proper keys, React will inadvertently reuse the wrong DOM nodes, causing user input from one row to leak into another row.",
      deepDive: [
        "**Diffing Optimization**: Keys allow React to transition from an O(n³) tree comparison algorithm to an O(n) linear operation by matching keys between the old and new fiber trees.",
        "**Why Array Index as Key is Dangerous**: Using array index `key={index}` is an anti-pattern when lists can be filtered, sorted, deleted, or prepended. The item at index 0 changes identity when a new item is unshifted, causing UI bugs, broken transitions, and state corruption.",
        "**Keys Must Be Globally or Locally Unique?**: Keys do NOT need to be globally unique across the entire application; they only need to be unique among their immediate siblings in the same array.",
        "**Forcing Component Reset via Key**: Passing a different `key` to an ordinary component `<UserProfile key={userId} />` forces React to completely unmount the old instance and remount a fresh instance with pristine state."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Proper Unique Keys vs Dangerous Index Keys Bug",
        code: "import React, { useState } from 'react';\n\nexport function TodoList() {\n  const [todos, setTodos] = useState([\n    { id: 'todo-101', text: 'Learn React Core' },\n    { id: 'todo-102', text: 'Master Virtual DOM' },\n    { id: 'todo-103', text: 'Ace Technical Interview' }\n  ]);\n\n  const handlePrepend = () => {\n    const newTodo = { id: `todo-${Date.now()}`, text: 'Wake up early' };\n    setTodos([newTodo, ...todos]);\n  };\n\n  return (\n    <div>\n      <button onClick={handlePrepend}>Add Todo at Top</button>\n      <ul>\n        {/* GOOD: Stable, unique ID from database/model */}\n        {todos.map(todo => (\n          <li key={todo.id}>\n            <input defaultValue={todo.text} />\n          </li>\n        ))}\n\n        {/* BAD (Anti-Pattern): Using array index */}\n        {/* todos.map((todo, index) => <li key={index}>...</li>) */}\n      </ul>\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Using array indices (`key={index}`) for dynamic lists where items can be reordered, sorted, or removed.",
        "Generating random keys during render (`key={Math.random()}`). This forces React to destroy and recreate the entire DOM tree on every single render, destroying state and tanking performance.",
        "Placing the `key` prop on an inner tag instead of the outermost returned tag inside the `.map()` loop."
      ],
      proTips: [
        "Mention the 'Key as a Reset Mechanism' trick: You can intentionally change a component's `key` prop (e.g., `<Form key={resetCounter} />`) to tell React to discard the old component instance and reset all its internal state cleanly without writing tedious cleanup effects."
      ]
    },
    bangla: {
      quickAnswer: "React-এ `key` হলো একটি বিশেষ ইউনিক আইডেন্টিফায়ার যা লিস্টের প্রতিটি এলিমেন্টকে আলাদাভাবে শনাক্ত করতে ব্যবহৃত হয়। এটি React-এর ডিফে (Diffing) অ্যালগরিদমকে বুঝতে সাহায্য করে কোন আইটেমটি যোগ, পরিবর্তন বা ডিলিট হয়েছে।",
      interviewSpeech: "React-এ যখন আমরা কোনো অ্যারের উপর `.map()` লুপ চালিয়ে লিস্ট রেন্ডার করি, তখন প্রতিটি আইটেমের সবচেয়ে বাইরের এলিমেন্টে একটি ইউনিক `key` প্রপ দিতে হয়। Key মূলত ভার্চুয়াল DOM ট্রির ভেতর প্রতিটি লিস্ট আইটেমের একটি স্থায়ী পরিচয়পত্র (Identity) হিসেবে কাজ করে।\n\nReact যখন পূর্বের ভার্চুয়াল ট্রির সাথে নতুন ট্রির তুলনা করে (Reconciliation), তখন এই `key` দেখে সে বুঝতে পারে লিস্টে কোনো নতুন আইটেম যুক্ত হয়েছে, কোনোটি মুছে ফেলা হয়েছে নাকি ক্রমবিন্যাস (Sort/Reorder) পরিবর্তন হয়েছে। যদি ১,০০০ আইটেমের লিস্টের একদম শুরুতে ১টি নতুন আইটেম যুক্ত হয় এবং সঠিক key দেওয়া থাকে, তবে React পুরো ১,০০০ এলিমেন্টকে রি-রেন্ডার না করে শুধুমাত্র নতুন এলিমেন্টটি শুরুতে ইনসার্ট করে দেয়।\n\nসঠিক key না দিলে বা অ্যারের `index`-কে key হিসেবে ব্যবহার করলে মারাত্মক বাগ হতে পারে। যেমন: কোনো আইটেম ডিলিট বা রি-অর্ডার করলে ইনপুট ফিল্ডের ভ্যালু বা চেকবক্সের স্টেট ভুল লাইনে শিফট হয়ে যেতে পারে, কারণ React ইনডেক্স অনুযায়ী পুরনো DOM নোড ভুল ডেটায় রি-ইউজ করে ফেলে।",
      deepDive: [
        "**পারফরম্যান্স বৃদ্ধি**: সঠিক key ব্যবহারের ফলে React লিনিয়ার সময়ে O(n) রিকনসিলিয়েশন শেষ করে, অপ্রয়োজনীয় DOM রিড্র কমায়।",
        "**ইনডেক্স ব্যবহারের বিপদ**: `key={index}` ব্যবহার করা একটি বড় অ্যান্টি-প্যাটার্ন (Anti-pattern) যদি লিস্ট ফিল্টার বা রিভার্স করা হয়। নতুন আইটেম শুরুতে ঢুকলে ইনডেক্স ০-এর আইডি বদলে যায়, ফলে ইনপুটের ভেতরের লেখা ওলটপালট হয়ে যায়।",
        "**কী ধরনের মান দেওয়া উচিত**: ডাটাবেসের ইউনিক `id` (যেমন UUID বা MongoDB `_id`) হলো সেরা key।",
        "**Math.random() দেওয়ার ভুল**: প্রতি রেন্ডারে রেন্ডম key দিলে React প্রতিবার পুরোনো সমস্ত নোড ভেঙে ফেলে নতুন করে বানায়, যার ফলে সাইট চরম স্লো হয়ে যায়।"
      ],
      commonMistakes: [
        "ডাইনামিক বা পরিবর্তনশীল লিস্টে `key={index}` ব্যবহার করা।",
        "রেন্ডারের সময় `key={Math.random()}` তৈরি করা (এতে প্রতি ক্লিকে সব স্টেট মুছে গিয়ে নতুন নোড তৈরি হয়)।",
        "লুপের সবচেয়ে ভেতরের এলিমেন্টে key বসানো (সবসময় লুপের একদম বাইরের প্যারেন্ট ট্যাগে key দিতে হয়)।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'Key শুধুমাত্র লিস্টের জন্যই নয়, কোনো নির্দিষ্ট কম্পোনেন্টের অভ্যন্তরীণ সমস্ত স্টেট এক ক্লিকে সম্পূর্ণ রিসেট করতে তার `key` প্রপ পরিবর্তন করে দেওয়া React-এর একটি চমৎকার কৌশল।'"
      ]
    }
  },
  {
    id: "pa-d3-q43-state-vs-props",
    questionNumber: 43,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is the difference between state and props?",
    banglaQuestion: "React-এ State এবং Props-এর মধ্যে মৌলিক পার্থক্যগুলো কী কী?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "State", "Props", "Data Flow", "Architecture"],
    english: {
      quickAnswer: "Props are external, read-only inputs passed into a component by its parent. State is internal, private data managed and updated within the component itself over time.",
      interviewSpeech: "While both `state` and `props` are plain JavaScript objects that trigger a component re-render when they change, they serve fundamentally different architectural roles in React.\n\n**Props** (short for properties) represent the external configuration of a component. They are passed downwards from a parent component to a child component, behaving exactly like function parameters. From the child component's perspective, props are strictly read-only and immutable. A component cannot change its own props directly; it can only request changes by invoking callback functions passed by the parent.\n\n**State**, on the other hand, represents the internal, mutable memory of a component. It is declared and managed directly inside the component (typically using `useState`). State holds data that changes over time as a direct result of user actions, network responses, or timer events. When a component modifies its state via the updater function, it schedules a re-render for itself and its descendant subtree.",
      deepDive: [
        "**Ownership & Control**: Props are owned and controlled by the parent component; State is privately owned and encapsulated within the component that declared it.",
        "**Mutability**: Props are strictly immutable within the receiver; State is updated through its designated updater function (`setState`).",
        "**Re-render Cascade**: When a parent's state changes, it re-renders and passes new props down to children, triggering child re-renders. A child updating its own state re-renders only itself and its descendants, leaving parent components unaffected.",
        "**Derived State Anti-Pattern**: Copying props directly into state (`const [val, setVal] = useState(props.initialVal)`) disconnects future prop updates from the state unless explicitly synchronized. Derive values on the fly whenever possible."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Parent Managing State & Child Receiving Props",
        code: "import React, { useState } from 'react';\n\n// Child Component: Receives external configuration via PROPS (Read-only)\nfunction CounterDisplay({ count, onReset }) {\n  // props.count = 0; // ERROR: Cannot mutate props!\n  return (\n    <div className=\"counter-box\">\n      <h3>Current Count: {count}</h3>\n      <button onClick={onReset}>Reset Count</button>\n    </div>\n  );\n}\n\n// Parent Component: Owns and manages private STATE\nexport function CounterManager() {\n  // State: internal and mutable via setCount\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>\n      {/* Passing state downwards as props + passing callback prop */}\n      <CounterDisplay\n        count={count}\n        onReset={() => setCount(0)}\n      />\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Trying to directly modify props inside a child component (`props.title = 'New'`).",
        "Duplicating props into state unnecessarily when the value could simply be calculated directly in the render function.",
        "Believing parent components re-render when a child component's local state updates (state updates only bubble downwards, never upwards)."
      ],
      proTips: [
        "Present the summary table in interviews: Props are External, Read-Only, and Passed Downwards. State is Internal, Mutable, and Encapsulated Locally."
      ]
    },
    bangla: {
      quickAnswer: "Props হলো প্যারেন্ট থেকে চাইল্ডে আসা রিড-অনলি ও অপরিবর্তনশীল কনফিগারেশন ডেটা। আর State হলো কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ পরিবর্তনশীল ডেটা যা ব্যবহারকারীর অ্যাকশন বা সময়ের সাথে আপডেট হয়।",
      interviewSpeech: "React-এ `state` এবং `props` উভয়ই পরিবর্তন হলে কম্পোনেন্ট রি-রেন্ডার হয়, তবে এদের উদ্দেশ্য ও নিয়ন্ত্রণ সম্পূর্ণ আলাদা।\n\n**Props**: প্রপস হলো বাইরের ডেটা যা Parent কম্পোনেন্ট থেকে Child কম্পোনেন্টে প্যারামিটার আকারে পাঠানো হয়। চাইল্ডের কাছে প্রপস হলো পুরোপুরি রিড-অনলি (Read-only) বা অপরিবর্তনশীল। চাইল্ড কখনোই নিজে নিজে প্রপসের মান বদলাতে পারে না।\n\n**State**: স্টেট হলো কম্পোনেন্টের নিজস্ব ব্যক্তিগত মেমোরি। এটি কম্পোনেন্টের ভেতরেই `useState` দিয়ে তৈরি ও ম্যানেজ করা হয়। ইউজারের টাইপিং, বাটনে ক্লিক বা API থেকে ডেটা আসার পর যে ডেটা পরিবর্তিত হয়, তা স্টেটে রাখা হয়। স্টেটের মান পরিবর্তন হলে কম্পোনেন্ট নিজে এবং তার নিচের চাইল্ডরা স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয়।\n\nসহজ উপমা: একটি গাড়ির ক্ষেত্রে প্রস্তুতকারকের দেওয়া ইঞ্জিন ক্ষমতা বা মডেল হলো `props` (যা বাইরে থেকে নির্ধারিত ও ফিক্সড), আর গাড়ি চালানোর সময় তার বর্তমান গতি বা ফুয়েল লেভেল হলো `state` (যা ভেতরে সার্বক্ষণিক পরিবর্তিত হয়)।",
      deepDive: [
        "**মালিকানা (Ownership)**: Props-এর মালিক হলো প্যারেন্ট কম্পোনেন্ট; আর State-এর মালিক স্বয়ং সেই নির্দিষ্ট কম্পোনেন্ট।",
        "**পরিবর্তনযোগ্যতা (Mutability)**: চাইল্ডের ভেতরে Props পরিবর্তন করা নিষিদ্ধ; কিন্তু State-কে সেটার ফাংশন (`setState`) দিয়ে যেকোনো সময় আপডেট করা যায়।",
        "**ডেটা ফ্লো**: Props একমুখীভাবে ওপর থেকে নিচে নামে। চাইল্ডের স্টেট পরিবর্তিত হলে প্যারেন্টে কোনো রি-রেন্ডার হয় না, কেবল চাইল্ড ও তার সাব-ট্রি রি-রেন্ডার হয়।",
        "**অপ্রয়োজনীয় স্টেট বনাম প্রপস**: প্রপস থেকে সরাসরি স্টেট ডুপ্লিকেট করা অনুচিত। যেমন `props.firstName` ও `props.lastName` থাকলে `fullName` নামে আলাদা স্টেট বানানোর দরকার নেই, রেন্ডারে সরাসরি যোগ করাই যথেষ্ট।"
      ],
      commonMistakes: [
        "চাইল্ড কম্পোনেন্টের ভেতরে `props`-এর মান সরাসরি রি-অ্যাসাইন করার চেষ্টা করা।",
        "প্রপসের মান দিয়ে স্টেট ইনিশিয়ালাইজ করে পরে প্যারেন্টে প্রপস বদলালেও স্টেটে আপডেট না হওয়ার বাগ তৈরি করা।"
      ],
      proTips: [
        "ইন্টারভিউতে এক লাইনে পার্থক্য বুঝিয়ে বলুন: 'Props হলো কম্পোনেন্টের ইনপুট আর্গুমেন্ট (External & Immutable), আর State হলো কম্পোনেন্টের অভ্যন্তরীণ মেমোরি (Internal & Mutable)।'"
      ]
    }
  },
  {
    id: "pa-d3-q44-conditional-rendering-in-react",
    questionNumber: 44,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "How does conditional rendering work in React?",
    banglaQuestion: "React-এ কন্ডিশনাল রেন্ডারিং (Conditional Rendering) কীভাবে কাজ করে?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["React", "Conditional Rendering", "JSX", "Ternary", "Logical AND"],
    english: {
      quickAnswer: "Conditional rendering in React works by evaluating JavaScript conditions (like `if` statements, ternary operators, or logical `&&`) to dynamically return and render different JSX trees based on state or props.",
      interviewSpeech: "Conditional rendering in React is not handled by proprietary template directives (like `v-if` in Vue or `*ngIf` in Angular). Instead, React leverages the full expressive power of standard JavaScript logic to determine which JSX elements should be returned.\n\nThere are four primary patterns for conditional rendering in React:\n1. **`if/else` Statements**: Best for early returns, such as rendering full-page loading spinners, error states, or permission guards before reaching the main component body.\n2. **Ternary Operator (`condition ? <TrueView /> : <FalseView />`)**: Ideal for inline branching within JSX, such as toggling between 'Log In' and 'Log Out' buttons.\n3. **Logical AND Operator (`condition && <Component />`)**: Perfect for conditionally rendering an element only when a condition is truthy, and rendering nothing when falsy.\n4. **Switch Statements or Object Mappings**: Excellent for multi-state UIs, such as rendering different card layouts depending on status (`'idle'`, `'loading'`, `'success'`, `'error'`).",
      deepDive: [
        "**The Falsy Number Zero Gotcha**: In JavaScript, `0 && <Component />` evaluates to `0`, NOT `false`. Because React renders numbers, writing `{items.length && <List />}` when `items.length` is 0 will render an accidental `0` directly on the screen! Always write `{items.length > 0 && <List />}` or `{Boolean(items.length) && <List />}`.",
        "**Rendering `null` to Hide Elements**: If a component returns `null`, React simply skips mounting its DOM representation entirely without throwing an error.",
        "**Early Return Optimization**: Placing guard clauses at the top of a component `if (!user) return <LoadingSpinner />;` keeps the rest of the component clean and prevents deep indentation.",
        "**Object Lookup Pattern**: Instead of messy nested ternaries, mapping status strings to components (`const views = { loading: <Spin />, error: <Err /> }; return views[status];`) is much cleaner."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Early Return, Ternary, and the '0 && Gotcha' Fix",
        code: "import React from 'react';\n\nexport function UserDashboard({ user, isLoading, notifications = [] }) {\n  // 1. Early Return for Loading/Auth guards\n  if (isLoading) {\n    return <div className=\"spinner\">Loading profile...</div>;\n  }\n  if (!user) {\n    return <div className=\"error\">Please log in to continue.</div>;\n  }\n\n  return (\n    <div className=\"dashboard\">\n      <h2>Welcome, {user.name}!</h2>\n\n      {/* 2. Ternary Operator: Toggle between VIP and Standard badge */}\n      {user.isVip ? (\n        <span className=\"badge-vip\">⭐ VIP Member</span>\n      ) : (\n        <span className=\"badge-std\">Standard Member</span>\n      )}\n\n      {/* 3. Logical AND with Safe Length Check (Avoids rendering '0') */}\n      {/* BAD: {notifications.length && <NotificationList />} -> prints '0' if empty */}\n      {/* GOOD: Explicit boolean check */}\n      {notifications.length > 0 && (\n        <div className=\"alerts\">\n          You have {notifications.length} unread alerts!\n        </div>\n      )}\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Using `{count && <Component />}` when `count` can be `0`. React renders `0` as text on screen. Always use `{count > 0 && <Component />}`.",
        "Writing deeply nested ternary operators inside JSX (`a ? b ? c : d : e ? f : g`), making the template unreadable and prone to logical bugs.",
        "Forgetting to return JSX from an `if` block, resulting in returning `undefined` which previously caused React runtime errors."
      ],
      proTips: [
        "Always warn the interviewer about the `{count && <Component />}` zero-rendering bug. Demonstrating knowledge of this specific JavaScript coercion pitfall proves practical production experience."
      ]
    },
    bangla: {
      quickAnswer: "React-এ কন্ডিশনাল রেন্ডারিং হলো সাধারণ জাভাস্ক্রিপ্ট কন্ডিশন (যেমন `if/else`, টার্নারি অপারেটর `? :`, বা লজিক্যাল `&&`) ব্যবহার করে স্টেট বা প্রপসের উপর ভিত্তি করে ভিন্ন ভিন্ন JSX স্ক্রিনে প্রদর্শন করা।",
      interviewSpeech: "React-এ কন্ডিশনাল রেন্ডারিংয়ের জন্য কোনো বিশেষ ফ্রেমওয়ার্ক ডিরেক্টিভ (যেমন Vue-এর `v-if` বা Angular-এর `*ngIf`) লাগে না। এখানে সাধারণ জাভাস্ক্রিপ্টের লজিক দিয়েই সম্পূর্ণ কাজ করা হয়। স্টেট বা প্রপসের মান অনুযায়ী ইউজার ইন্টারফেসে কোন উপাদানটি রেন্ডার হবে তা নির্ধারণ করার পদ্ধতিকেই কন্ডিশনাল রেন্ডারিং বলে।\n\nReact-এ কন্ডিশনাল রেন্ডারিং করার ৪টি প্রধান উপায়:\n১. `if/else` ও আর্লি রিটার্ন (Early Return): কোনো ডেটা লোড হওয়ার আগ পর্যন্ত লোডিং স্পিনার বা এরর মেসেজ দেখাতে কম্পোনেন্টের শুরুতেই `if (loading) return <Spinner />` ব্যবহার করা সবচেয়ে ক্লিন পদ্ধতি।\n২. টার্নারি অপারেটর (`condition ? <A /> : <B />`): JSX-এর ভেতরে দুটি অবস্থার মধ্যে একটি বেছে নিতে (যেমন ইউজার লগইন থাকলে 'Logout' বাটন, না থাকলে 'Login' বাটন) টার্নারি অপারেটর আদর্শ।\n৩. লজিক্যাল AND (`condition && <Element />`): কোনো শর্ত সত্য হলেই কেবল একটি উপাদান দেখাতে চাইলে এবং মিথ্যা হলে কিছু না দেখাতে চাইলে `&&` ব্যবহার করা হয়।\n৪. অবজেক্ট ম্যাপিং (Enum lookup): একাধিক স্টেট থাকলে (যেমন idle, loading, success, error) নেস্টেড টার্নারি না লিখে অবজেক্ট বা সুইচের মাধ্যমে ভিউ রিটার্ন করা যায়।",
      deepDive: [
        "**সংখ্যা ০ (Zero) রেন্ডারিংয়ের ফাঁদ**: জাভাস্ক্রিপ্টে `0 && <Component />` এক্সপ্রেশনটি `0` রিটার্ন করে, `false` নয়। ফলে React স্ক্রিনে সরাসরি `0` প্রিন্ট করে দেয়! তাই লিস্ট ফাঁকা থাকলে মেসেজ দেখানোর ক্ষেত্রে সর্বদা `{list.length > 0 && <List />}` লেখা উচিত।",
        "**আর্লি রিটার্নের সুবিধা**: ফাংশনের শুরুতেই গার্ড ক্লজ দিয়ে এরর ও লোডিং হ্যান্ডেল করলে নিচের মূল কোড অত্যন্ত পরিষ্কার ও রিডেবল থাকে।",
        "**`null` রিটার্ন করা**: কোনো কম্পোনেন্ট থেকে `null` রিটার্ন করলে React ব্রাউজারে কিছুই রেন্ডার করে না, কোনো এররও দেয় না।",
        "**নেস্টেড টার্নারি পরিহার**: JSX-এর ভেতর একের ভেতর এক টার্নারি (`a ? b : c ? d : e`) কোডের রিডেবিলিটি নষ্ট করে। এমন ক্ষেত্রে আলাদা সাব-ফাংশন বা অবজেক্ট ম্যাপ ব্যবহার করা উচিত।"
      ],
      commonMistakes: [
        "`{items.length && <List />}` লেখা। অ্যারে খালি হলে স্ক্রিনে `0` ভেসে ওঠে। সর্বদা `{items.length > 0 && <List />}` লেখা উচিত।",
        "JSX-এর ভেতর মাত্রাতিরিক্ত নেস্টেড টার্নারি লিখে কোড দুর্বোধ্য করে ফেলা।"
      ],
      proTips: [
        "ইন্টারভিউতে '০ রেন্ডার হওয়ার বাগ'-এর কথা উল্লেখ করুন: 'লজিক্যাল `&&`-এর বাম পাশে কখনো সরাসরি length সংখ্যা রাখা উচিত নয়, সর্বদা বুলিয়ানে কনভার্ট করে বা `> 0` লিখে ব্যবহার করা নিরাপদ।'"
      ]
    }
  },
  {
    id: "pa-d3-q45-react-memo-and-use-cases",
    questionNumber: 45,
    module: "Day 3 — React Fundamentals",
    topic: "Components, Hooks & State Management",
    question: "What is React.memo and when should you use it?",
    banglaQuestion: "React.memo কী এবং এটি কখন ব্যবহার করা উচিত এবং কখন এড়িয়ে চলা উচিত?",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["React", "React.memo", "Performance", "Optimization", "Memoization", "useCallback"],
    english: {
      quickAnswer: "`React.memo` is a higher-order component (HOC) that optimizes rendering by memoizing the component's rendered output, skipping re-renders if incoming props have not changed according to a shallow comparison.",
      interviewSpeech: "`React.memo` is a performance optimization tool built into React. By default, whenever a parent component re-renders, all of its child components recursively re-render as well—even if the child's props have not changed at all. While React's virtual DOM diffing is extremely fast, re-rendering large, deeply nested subtrees can cause noticeable performance degradation.\n\nWrapping a functional component with `React.memo` alters this default behavior. Before re-rendering the wrapped component, React performs a shallow equality check (`Object.is`) on the incoming props against the previous props. If all props are identical, React skips rendering the component entirely and reuses the previously rendered Virtual DOM output.\n\nHowever, `React.memo` is NOT a magic bullet and should NOT be wrapped around every component blindly. First, the shallow comparison itself incurs a small CPU cost. Second and most importantly, if the parent passes unmemoized objects, arrays, or inline functions (`onClick={() => {}}`), a new object reference is created on every parent render. This invalidates the shallow comparison every single time, making `React.memo` completely useless while adding pointless comparison overhead. For `React.memo` to work effectively with callbacks, functions must be memoized using `useCallback`.",
      deepDive: [
        "**Shallow Comparison Mechanism**: `React.memo` checks props using shallow equality. Primitives are checked by value (`5 === 5`), but objects and functions are checked by memory reference. `{ a: 1 } !== { a: 1 }`.",
        "**Custom Comparison Callback**: You can supply a custom comparator function as the second argument: `React.memo(Component, (prevProps, nextProps) => areEqual)`. Note that this is the inverse of `shouldComponentUpdate` (return `true` to skip render, `false` to re-render).",
        "**Pairing with `useCallback` and `useMemo`**: If a memoized child accepts an object or function prop, the parent MUST wrap those props with `useMemo` or `useCallback` to maintain referential stability across renders.",
        "**When NOT to use `React.memo`**: Avoid using it for cheap, lightweight components (like a basic button or simple paragraph), components whose props change on almost every render anyway, or components wrapped around `children` that are newly allocated JSX elements."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "React.memo Paired with useCallback for Referential Stability",
        code: "import React, { useState, useCallback } from 'react';\n\n// Heavy child component wrapped in React.memo\nconst ExpensiveChart = React.memo(function ExpensiveChart({ data, onExport }) {\n  console.log('Rendering ExpensiveChart...'); // Only logs when data or onExport reference changes\n  return (\n    <div className=\"chart\">\n      <h4>Chart Data Points: {data.length}</h4>\n      <button onClick={onExport}>Export PDF</button>\n    </div>\n  );\n});\n\nexport function AnalyticsDashboard() {\n  const [count, setCount] = useState(0);\n  const [data] = useState([10, 20, 30, 40, 50]);\n\n  // CRITICAL: useCallback ensures the function reference remains identical across renders\n  const handleExport = useCallback(() => {\n    console.log('Exporting data...');\n  }, []); // Stable reference\n\n  return (\n    <div>\n      {/* Clicking this button re-renders AnalyticsDashboard, but ExpensiveChart will NOT re-render */}\n      <button onClick={() => setCount(c => c + 1)}>Increment Count: {count}</button>\n      <ExpensiveChart data={data} onExport={handleExport} />\n    </div>\n  );\n}"
      },
      commonMistakes: [
        "Wrapping a component in `React.memo` while passing inline anonymous functions `<Child onClick={() => doSomething()} />`. This completely defeats the memoization because a new function instance is created on every render.",
        "Applying `React.memo` prematurely everywhere across the app without measuring performance (premature optimization).",
        "Expecting `React.memo` to stop re-renders triggered by internal state or context changes (if a component's internal `useState` or consumed `useContext` changes, it will STILL re-render regardless of `React.memo`)."
      ],
      proTips: [
        "Summarize the golden rule: 'Use `React.memo` only when a component is computationally expensive to render, renders often with identical props, and its props have referential stability (primitives or memoized with `useCallback`/`useMemo`).'"
      ]
    },
    bangla: {
      quickAnswer: "`React.memo` হলো একটি Higher-Order Component (HOC) যা কোনো ফাংশনাল কম্পোনেন্টের প্রপস পরিবর্তন না হলে তার অপ্রয়োজনীয় রি-রেন্ডার আটকে দেয় এবং পূর্বের রেন্ডার করা রেজাল্ট ক্যাশ (মেমোইজ) থেকে রি-ইউজ করে।",
      interviewSpeech: "`React.memo` হলো পারফরম্যান্স অপ্টিমাইজেশনের একটি চমৎকার টুল। React-এর ডিফল্ট নিয়ম হলো: যখন কোনো Parent কম্পোনেন্ট রি-রেন্ডার হয়, তখন তার নিচের সমস্ত Child কম্পোনেন্টও স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয়—এমনকি যদি চাইল্ডের কোনো প্রপস পরিবর্তন নাও হয়! সাধারণ ছোটখাটো কম্পোনেন্টের জন্য এতে কোনো সমস্যা না হলেও, বড় এবং জটিল চাইল্ড কম্পোনেন্টের ক্ষেত্রে এটি সাইটকে স্লো করে দিতে পারে।\n\nযখন আমরা কোনো কম্পোনেন্টকে `React.memo(MyComponent)` দিয়ে র‍্যাপ করি, তখন React তার রেন্ডারিং পদ্ধতিতে পরিবর্তন আনে। প্যারেন্ট রি-রেন্ডার হলে React চাইল্ডের বর্তমান প্রপসের সাথে পূর্ববর্তী প্রপসের একটি 'শ্যালো কম্প্যারিজন' (Shallow Comparison) করে। যদি সব প্রপস অবিকল আগের মতোই থাকে, তবে React চাইল্ডটিকে পুনরায় রেন্ডার না করে আগের রেন্ডার করা ভার্চুয়াল DOM সরাসরি ব্যবহার করে।\n\nতবে এটি চোখ বন্ধ করে সব কম্পোনেন্টে ব্যবহার করা উচিত নয়। প্রথমত, প্রপস চেক করতেও কিছুটা প্রসেসর শক্তি খরচ হয়। দ্বিতীয়ত, প্যারেন্ট থেকে যদি কোনো সাধারণ অবজেক্ট বা ইনলাইন ফাংশন (`onClick={() => ...}`) চাইল্ডে পাস করা হয়, তবে প্রতি রেন্ডারে তাদের নতুন মেমোরি রেফারেন্স তৈরি হয়। ফলে `React.memo`-এর শ্যালো চেক ব্যর্থ হয় এবং কম্পোনেন্টটি রি-রেন্ডার হয়ে যায়। তাই ফাংশন পাস করার সময় অবশ্যই `useCallback` ব্যবহার করতে হয়।",
      deepDive: [
        "**শ্যালো কম্প্যারিজন**: `React.memo` প্রিমিটিভ মানগুলোকে সরাসরি ভ্যালু দিয়ে চেক করে (`2 === 2`), কিন্তু অবজেক্ট বা ফাংশনগুলোকে মেমোরি রেফারেন্স দিয়ে চেক করে। তাই নতুন রেফারেন্স তৈরি হলে মেমোইজেশন নষ্ট হয়।",
        "**কখন ব্যবহার করবেন**: যখন কোনো কম্পোনেন্টে অনেক বেশি ক্যালকুলেশন বা বড় DOM ট্রি থাকে, যা একই প্রপস নিয়ে ঘনঘন অপ্রয়োজনে রি-রেন্ডার হচ্ছে।",
        "**কখন ব্যবহার করবেন না**: খুব হালকা বা ছোট কম্পোনেন্টে (যেমন একটি সাধারণ বাটন বা টেক্সট) বা এমন কম্পোনেন্টে যার প্রপস সবসময় পরিবর্তিত হতেই থাকে।",
        "**স্টেট ও কনটেক্সট**: মনে রাখবেন, `React.memo` কেবল প্রপসের পরিবর্তনের রি-রেন্ডার আটকায়। কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ State বা Context পরিবর্তন হলে এটি অবশ্যই রি-রেন্ডার হবে।"
      ],
      commonMistakes: [
        "ইনলাইন ফাংশন বা অবজেক্ট পাস করে `React.memo` কাজ করবে আশা করা (অবশ্যই প্যারেন্টে `useCallback` বা `useMemo` ব্যবহার করতে হবে)।",
        "কোনো মাপজোখ ছাড়াই প্রজেক্টের প্রতিটি কম্পোনেন্টে অন্ধভাবে `React.memo` বসিয়ে মেমোরি ও কম্প্যারিজন ওভারহেড বাড়িয়ে ফেলা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'React.memo হলো প্রি-ম্যাচিউর অপ্টিমাইজেশনের জায়গা নয়; প্রোফাইলার দিয়ে মেপে যখন দেখা যায় একটি বড় কম্পোনেন্ট অপরিবর্তিত প্রপস নিয়েও বারবার রি-রেন্ডার হয়ে ল্যাগ করছে, কেবল তখনই `useCallback`-এর সাথে মিলিয়ে এটি ব্যবহার করা উচিত।'"
      ]
    }
  }
];
