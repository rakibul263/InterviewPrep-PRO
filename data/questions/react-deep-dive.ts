import { Question } from "@/types";

export const reactDeepDiveQuestions: Question[] = [
  {
    id: "react-basics-and-workflow",
    slug: "react-basics-and-workflow",
    question: "What is React, why was it invented, and what is its declarative component-based workflow?",
    category: "React",
    categorySlug: "react",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "React হলো ফেসবুক (Meta) কর্তৃক ডেভেলপ করা একটি ডিক্লারেটিভ, কম্পোনেন্ট-বেসড ওপেন সোর্স JavaScript লাইব্রেরি যা ইউজার ইন্টারফেস (UI) তৈরিতে ব্যবহৃত হয়। প্রথাগত DOM ম্যানিপুলেশনের জটিলতা দূর করতে এবং স্টেট পরিবর্তনের সাথে সাথে UI-কে দ্রুত ও স্বয়ংক্রিয়ভাবে সিঙ্ক রাখতে React উদ্ভাবন করা হয়।",
    easyExplanation:
      "React-এর মূল কনসেপ্ট ও কাজের ধারা বুঝতে নিচের বিষয়গুলো জানুন:\n\n১. **কেন উদ্ভাবন হয়েছিল?**\n- আগে ভ্যানিলা JS বা jQuery দিয়ে DOM আপডেট করতে গেলে ম্যানুয়ালি `document.getElementById` দিয়ে প্রতিটি এলিমেন্ট খুঁজে আপডেট করতে হতো। প্রজেক্ট বড় হলে কে কখন কোন DOM চেঞ্জ করছে তা ট্র্যাক করা অসম্ভব হয়ে পড়ত (Spaghetti code)।\n- ফেসবুকের নোটিফিকেশন সিস্টেম জটিল হওয়ায় তারা এমন একটি সিস্টেম চাইল যেখানে **'State বদলালে UI নিজে থেকেই আপডেট হবে'**।\n\n২. **Component-Based Architecture**:\n- সম্পূর্ণ UI-কে ছোট ছোট স্বয়ংসম্পূর্ণ ব্লকে (Button, Navbar, Card) ভাগ করা হয়। কোড পুনঃব্যবহারযোগ্য (Reusable) ও টেস্ট করা সহজ হয়।\n\n৩. **Declarative UI (ডিক্লারেটিভ পদ্ধতি)**:\n- **ইম্পারেটিভ (Imperative)**: 'DOM-এ যাও, ক্লাস বদলাও, টেক্সট ঢোকাও' (কীভাবে করতে হবে তার প্রতিটি ধাপ বলা)।\n- **ডিক্লারেটিভ (Declarative)**: 'স্টেট যদি `isLoggedIn` হয় তবে প্রোফাইল দেখাও, নাহলে লগইন বাটন দেখাও' (কী দেখতে চাই তা ডিক্লেয়ার করা)। বাকি DOM রেন্ডারিং React নিজে হ্যান্ডেল করে।",
    interviewAnswer:
      "React is a declarative, component-driven JavaScript library for building modern user interfaces. It was created by Meta to solve the state-synchronization complexity of large-scale applications. Instead of imperatively manipulating the browser DOM, React allows developers to describe *what* the UI should look like for a given state using components and JSX. Under the hood, React manages the Virtual DOM and performs efficient reconciliation to batch and minimize actual browser DOM updates.",
    detailedExplanation: {
      whatItIs:
        "UI লেয়ার তৈরির জন্য একটি কম্পোনেন্ট-ভিত্তিক জাভাস্ক্রিপ্ট লাইব্রেরি (ফ্রেমওয়ার্ক নয়, কারণ এটি শুধুমাত্র ভিউ লেয়ার হ্যান্ডেল করে)।",
      whyItExists:
        "ম্যানুয়াল DOM অপারেশনের স্লো পারফরম্যান্স এবং কমপ্লেক্স স্টেট ম্যানেজমেন্টের বিশৃঙ্খলা দূর করতে।",
      howItWorks:
        "কম্পোনেন্টের স্টেট বা প্রপস পরিবর্তিত হলে React নতুন Virtual DOM ট্রি তৈরি করে, আগের ট্রির সাথে Diffing অ্যালগরিদম দিয়ে তুলনা করে এবং শুধুমাত্র পরিবর্তিত অংশটুকু আসল ব্রাউজার DOM-এ পুশ করে।",
      whenToUse:
        "সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA), ডাইনামিক ড্যাশবোর্ড, সোশ্যাল মিডিয়া ফিড এবং হাইলি ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশনে।",
      keyPoints: [
        "React একটি Library, সম্পূর্ণ Framework নয়।",
        "Declarative: স্টেট পরিবর্তনের ওপর ভিত্তি করে UI সংজ্ঞায়িত হয়।",
        "Unidirectional Data Flow: ডেটা সবসময় প্যারেন্ট থেকে চাইল্ডের দিকে একমুখী প্রবাহিত হয়।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `// ডিক্লারেটিভ কম্পোনেন্ট উদাহরণ
function NotificationBadge({ unreadCount }) {
  // আমরা শুধু স্টেট অনুযায়ী UI ঘোষণা করছি (Declarative)
  return (
    <div className="relative">
      <button className="p-2 bg-zinc-100 rounded-full">🔔</button>
      {unreadCount > 0 && (
        <span className="badge absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
          {unreadCount}
        </span>
      )}
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "State-driven rendering",
          description: "unreadCount শূন্যের বেশি হলে ব্যাজ রেন্ডার হবে, কোনো ম্যানুয়াল DOM এলিমেন্ট ইনসার্ট করতে হচ্ছে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Facebook Notification Counter",
        description: "রিয়েল-টাইম স্টেট পরিবর্তনের সাথে সাথে পুরো পেজ রিলোড না করে শুধু নোটিফিকেশন ব্যাজের সংখ্যা আপডেট করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'React is a library focused purely on the View layer, utilizing Declarative UI and Component Reusability to make complex UIs predictable.'",
      deliveryStrategy: "Imperative vs Declarative এর পার্থক্য একটি বাস্তব উদাহরণ দিয়ে স্পষ্ট করুন।",
      avoidSaying: [
        {
          wrong: "React একটি ফুলস্ট্যাক ফ্রেমওয়ার্ক যেমন Angular বা Django।",
          right: "React একটি ভিউ-লেয়ার লাইব্রেরি। ফুলস্ট্যাক ক্ষমতার জন্য আমরা Next.js বা Remix ব্যবহার করি।",
        },
      ],
    },
    quickRevision: [
      "React = Declarative UI + Component Architecture + Virtual DOM।",
      "Meta দ্বারা তৈরিকৃত (২০১৩ সালে ওপেন সোর্স)।",
      "একমুখী ডেটা প্রবাহ (One-way data binding)।",
    ],
    followUpQuestions: [
      {
        question: "React কেন একটি Framework নয়, বরং Library?",
        shortHint: "কারণ React শুধু UI (View) হ্যান্ডেল করে; রাউটিং বা ডেটাবেস কানেকশনের জন্য আলাদা প্যাকেজ লাগে।",
      },
    ],
    tags: ["React", "Core", "Basics", "Declarative UI", "Components"],
  },
  {
    id: "virtual-dom-diffing-algorithm-and-reconciliation",
    slug: "virtual-dom-diffing-algorithm-and-reconciliation",
    question: "How does the Virtual DOM, Diffing Algorithm, and Reconciliation work in React? What are its limitations?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**Virtual DOM (VDOM)** হলো আসল ব্রাউজার DOM-এর একটি হালকা মেমরি অবজেক্ট রিপ্রেজেন্টেশন। স্টেট পরিবর্তিত হলে React একটি নতুন VDOM ট্রি তৈরি করে এবং **Reconciliation** প্রক্রিয়ায় হিউরিস্টিক **Diffing Algorithm (O(n))** ব্যবহার করে পুরনো ট্রির সাথে তুলনা করে। এরপর শুধুমাত্র যেটুকু পরিবর্তন দরকার, সেটুকু ব্যাচ আকারে আসল ব্রাউজার DOM-এ প্যাচ করে।",
    easyExplanation:
      "আসল ব্রাউজার DOM আপডেট করা অত্যন্ত ব্যয়বহুল (Slow), কারণ প্রতিটি পরিবর্তনে ব্রাউজারকে Style Calculation, Layout Reflow ও Repaint করতে হয়।\n\n**React যেভাবে দ্রুত কাজ করে (৩টি ধাপ)**:\n১. **Virtual DOM**: জাভাস্ক্রিপ্ট অবজেক্ট হিসেবে পুরো UI-এর একটি কপি মেমরিতে রাখে।\n২. **Diffing Algorithm**: স্টেট বদলালে নতুন VDOM তৈরি হয় এবং React দুটি ট্রির মধ্যে তুলনা করে:\n   - যদি এলিমেন্টের টাইপ আলাদা হয় (যেমন `<div>` থেকে `<span>`), পুরো সাব-ট্রি ধ্বংস করে নতুন বানায়।\n   - যদি টাইপ একই থাকে, শুধু পরিবর্তিত অ্যাট্রিবিউট বা স্টাইল আপডেট করে।\n   - লিস্টের ক্ষেত্রে `key` প্রপ দেখে কোন আইটেমটি নতুন, মুছে গেছে বা স্থান পরিবর্তন করেছে তা নিখুঁতভাবে শনাক্ত করে।\n৩. **Reconciliation (পুনর্মিলন)**: হিসাব করা ন্যূনতম পরিবর্তনগুলো ব্রাউজারের আসল DOM-এ একবারে অ্যাপ্লাই করে।\n\n**সীমাবদ্ধতা ও সমস্যা**:\n- লিস্টে ইউনিক `key` না দিলে বা ইনডেক্স (`index`) কি হিসেবে দিলে রি-অর্ডারিংয়ের সময় ভুল কম্পোনেন্ট রি-রেন্ডার হয় বা স্টেট নষ্ট হয়।\n- খুব গভীর নেস্টেড স্ট্রাকচারে অতিরিক্ত মেমরি ও তুলনা সময় লাগতে পারে।",
    interviewAnswer:
      "The Virtual DOM is an in-memory lightweight abstraction of the actual browser DOM. When a component's state or props change, React generates a new Virtual DOM snapshot. During **Reconciliation**, React applies its **O(n) Heuristic Diffing Algorithm** based on two assumptions: two elements of different types produce different trees, and children with unique `key` props remain stable across renders. The calculated delta is then batched and committed to the real DOM in a single pass, minimizing layout reflows.",
    detailedExplanation: {
      whatItIs:
        "React-এর অপ্টিমাইজড UI রেন্ডারিং ইঞ্জিন ও অ্যালগরিদম।",
      whyItExists:
        "জেনেরিক ট্রি কম্প্যারিজন অ্যালগরিদম O(n³) সময় নেয় যা ১০০০ নোডের জন্য বিলিয়ন অপারেশন। React-এর Diffing অ্যালগরিদম এটিকে O(n) লিনিয়ার সময়ে নামিয়ে আনে।",
      howItWorks:
        "Fiber আর্কিটেকচারের মাধ্যমে React রেন্ডার ফেজে VDOM নোডগুলোকে লিঙ্কড লিস্ট (Fiber Nodes) আকারে প্রসেস করে এবং কমিট ফেজে আসল DOM মিউটেট করে।",
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
function TodoList({ todos }) {
  return (
    <ul>
      {/* ❌ ভুল: key হিসেবে index দিলে ফিল্টারিং বা রি-অর্ডারে বাগ হবে */}
      {/* {todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)} */}

      {/* ✅ সঠিক: স্থায়ী ও ইউনিক আইডি ব্যবহার */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
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
        question: "React Fiber কী এবং এটি কীভাবে Reconciliation-কে ইন্টারাপ্টেবল বানায়?",
        shortHint: "Fiber হলো React 16-এ আনা রি-রাইট ইঞ্জিন যা রেন্ডার কাজকে ছোট চাঙ্কে ভাগ করে প্রাইওরিটি ভিত্তিক শিডিউল করতে পারে।",
      },
    ],
    tags: ["React", "Virtual DOM", "Diffing", "Reconciliation", "Fiber"],
  },
  {
    id: "react-fiber-render-phase-commit-phase",
    slug: "react-fiber-render-phase-commit-phase",
    question: "What is React Fiber and how does the Render Phase differ from the Commit Phase?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "**React Fiber** হলো React 16-এ যুক্ত করা নতুন কোর রিকনসিলিয়েশন ইঞ্জিন, যা রেন্ডারিং কাজকে ছোট ছোট চাঙ্কে ভাগ করে বিরতি (Pause), অগ্রাধিকার (Prioritize) এবং পুনরায় শুরু করার ক্ষমতা দেয়। React-এর আপডেট দুটি ধাপে ঘটে: ১. **Render Phase** (অ্যাসিনক্রোনাস ও ইন্টারাপ্টেবল, যেখানে পরিবর্তন হিসাব করা হয়) এবং ২. **Commit Phase** (সিনক্রোনাস, যেখানে আসল DOM-এ পরিবর্তন অ্যাপ্লাই হয়)।",
    easyExplanation:
      "আগের React-এ (Stack Reconciler) একবার রেন্ডারিং শুরু হলে পুরো ট্রি শেষ না হওয়া পর্যন্ত থামানো যেত না। ফলে বড় অ্যানিমেশন বা দ্রুত টাইপ করার সময় ফ্রেম ড্রপ বা ল্যাগ হতো।\n\n**React Fiber-এর আর্কিটেকচার**:\n- এটি প্রতিটি কম্পোনেন্টকে একটি **Fiber Node** (এক ধরনের Linked List) হিসেবে সাজায়।\n- এটি ব্রাউজারের মেইন থ্রেডকে দীর্ঘ সময় আটকে রাখে না; বরং ইউজার ইনপুট বা অ্যানিমেশনকে উচ্চ অগ্রাধিকার দেয়।\n\n**React আপডেটের দুটি প্রধান ফেজ**:\n১. **Render / Reconciliation Phase**:\n- React নতুন Virtual DOM ট্রি তৈরি করে এবং পরিবর্তনগুলো (Effects list) হিসাব করে।\n- এটি সম্পূর্ণ **Asynchronous ও Interruptible** (উচ্চ প্রাইওরিটির কাজ আসলে React এটি মাঝপথে থামিয়ে দিতে পারে)।\n- এখানে কোনো আসল DOM ম্যানিপুলেশন হয় না।\n\n২. **Commit Phase**:\n- Render ফেজে প্রস্তুতকৃত তালিকা অনুযায়ী আসল ব্রাউজার DOM আপডেট করা হয়।\n- এটি **Synchronous** (মাঝপথে থামানো যায় না, যাতে ইউজার অসম্পূর্ণ UI না দেখে)।\n- এই ফেজে `componentDidMount`, `componentDidUpdate`, এবং `useLayoutEffect` রান করে।",
    interviewAnswer:
      "React Fiber is the reimplementation of React's core reconciliation algorithm designed to enable incremental rendering and priority-based scheduling. React splits work into two phases: The **Render Phase** is asynchronous, non-blocking, and interruptible—it computes the virtual diff and creates an effect list without touching the DOM. The **Commit Phase** is synchronous and uninterruptible—it applies the calculated mutations to the actual browser DOM and executes layout/lifecycle effects.",
    detailedExplanation: {
      whatItIs:
        "React-এর ইন্টারনাল শিডিউলিং ও লিঙ্কড-লিস্ট বেসড ডেটা স্ট্রাকচার আর্কিটেকচার।",
      whyItExists:
        "স্মুথ ৬০ FPS অ্যানিমেশন নিশ্চিত করতে এবং টাইম-স্লাইসিং (Concurrent Features) সক্ষম করতে।",
      howItWorks:
        "Fiber নোডে `child`, `sibling`, এবং `return` পয়েন্টার থাকে। ব্রাউজার আইডল সময়ে `requestIdleCallback` স্টাইলে কো-অপারেটিভ মাল্টিটাস্কিং পরিচালনা করে।",
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

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // উচ্চ অগ্রাধিকার: ইনপুট ফিল্ড তাৎক্ষণিক টাইপ দেখাবে
    setQuery(e.target.value);

    // নিম্ন অগ্রাধিকার (Fiber Interruptible): বড় লিস্ট ফিল্টারিং
    startTransition(() => {
      const filtered = performHeavySearch(e.target.value);
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <p>Filtering list in background...</p>}
      <ResultsList data={results} />
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Urgent vs Non-Urgent",
          description: "setQuery জরুরিভাবে ইনপুট আপডেট করে, আর startTransition Fiber-কে ভারী কাজ ব্যাকগ্রাউন্ডে করার নির্দেশ দেয়।",
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
      "Fiber: Incremental Rendering + Priority Scheduling।",
      "Render Phase: Asynchronous, interruptible, computes changes।",
      "Commit Phase: Synchronous, mutates real DOM, runs lifecycle effects।",
    ],
    followUpQuestions: [
      {
        question: "useLayoutEffect এবং useEffect এর মধ্যে কোন ফেজে কে রান করে?",
        targetId: "uselayouteffect-vs-useeffect-differences",
        shortHint: "useLayoutEffect কমিট ফেজে DOM মিউটেশনের ঠিক পরেই সিনক্রোনাসলি রান করে; useEffect ব্রাউজার পেইন্টের পরে অ্যাসিনক্রোনাসলি রান করে।",
      },
    ],
    tags: ["React", "Fiber", "Render Phase", "Commit Phase", "Concurrent"],
  },
  {
    id: "uselayouteffect-vs-useeffect-differences",
    slug: "uselayouteffect-vs-useeffect-differences",
    question: "What is the difference between useEffect and useLayoutEffect in React?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "`useEffect` ব্রাউজার স্ক্রিনে UI আঁকার (Paint) পর **অ্যাসিনক্রোনাসলি ও নন-ব্লকিংভাবে** রান করে (API কল, সাবস্ক্রিপশনের জন্য ডিফল্ট পছন্দ)। আর `useLayoutEffect` DOM পরিবর্তনের ঠিক পরপরই কিন্তু ব্রাউজার স্ক্রিনে আঁকার **আগেই সিনক্রোনাসলি** রান করে (DOM পরিমাপ করা বা ফ্লিকারিং প্রতিরোধে ব্যবহৃত হয়)।",
    easyExplanation:
      "এই দুটি হুকের মূল পার্থক্য হলো তাদের এক্সিকিউশনের সময় (Timing):\n\n১. **`useEffect` (ডিফল্ট হুক)**:\n- ধাপ: State Change -> React updates DOM -> **Browser Paints Screen** -> `useEffect` runs!\n- এটি ব্রাউজার পেইন্টকে ব্লক করে না, তাই ইউজার ইন্টারফেস দ্রুত রেসপন্স করে।\n- ডেটা ফেচিং, ইভেন্ট লিসেনার সেটআপ, বা টাইমারের জন্য সবসময় `useEffect` ব্যবহার করবেন।\n\n২. **`useLayoutEffect` (স্পেশাল সিনক্রোনাস হুক)**:\n- ধাপ: State Change -> React updates DOM -> **`useLayoutEffect` runs synchronously** -> **Browser Paints Screen**!\n- যেহেতু এটি পেইন্টের আগে চলে, তাই এটি দিয়ে DOM নোডের সাইজ (`getBoundingClientRect`) মেপে স্টেট পরিবর্তন করলে স্ক্রিনে কোনো কাঁপুনি বা ফ্লিকারিং (Screen Flickering) হয় না।\n- সতর্কতা: ভারী কাজ করলে ব্রাউজার স্ক্রিন আটকে যাবে (UI lag)।",
    interviewAnswer:
      "The primary difference between `useEffect` and `useLayoutEffect` is timing. `useEffect` runs asynchronously **after** the browser paints the screen, making it non-blocking and ideal for side effects like API fetching, event subscriptions, and timers. In contrast, `useLayoutEffect` executes synchronously **before** the browser paints, right after DOM mutations. It is specifically meant for DOM measurements (like calculating tooltip or popover coordinates) where synchronously mutating state prevents visual layout flickering.",
    detailedExplanation: {
      whatItIs:
        "React-এর দুটি সাইড-ইফেক্ট হুক যা বিভিন্ন লাইফসাইকেল টাইমিংয়ে এক্সিকিউট হয়।",
      whyItExists:
        "বেশিরভাগ সাইড-ইফেক্ট নন-ব্লকিং রাখা জরুরি, কিন্তু কিছু ক্ষেত্রে স্ক্রিন ফ্লিকার রোধে ব্রাউজার পেইন্টের আগে সিনক্রোনাস ক্যালকুলেশন দরকার হয়।",
      howItWorks:
        "কমিট ফেজে React প্রথমে DOM মিউটেট করে, তারপর `useLayoutEffect` কলব্যাকগুলো চালায় এবং ব্রাউজারকে পেইন্ট করার সুযোগ দেয়। পেইন্ট শেষ হলে ম্যাক্রোটাস্ক কিউ থেকে `useEffect` চালায়।",
      whenToUse:
        "৯৯% ক্ষেত্রে `useEffect` ব্যবহার করুন। শুধুমাত্র ডাইনামিক পজিশনিং (Tooltip, Popover position, Modal bounds) ক্যালকুলেশনে `useLayoutEffect` ব্যবহার করুন।",
      keyPoints: [
        "`useEffect`: Runs asynchronously AFTER paint (Non-blocking)।",
        "`useLayoutEffect`: Runs synchronously BEFORE paint (Blocks paint until finished)।",
        "SSR-এ `useLayoutEffect` ব্যবহার করলে ওয়ার্নিং দেয় (কারণ সার্ভারে ব্রাউজার DOM থাকে না)।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useRef, useLayoutEffect, useEffect } from "react";

function Tooltip({ targetRect }) {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // ✅ useLayoutEffect: ব্রাউজার স্ক্রিনে দেখানোর আগেই পজিশন নিখুঁত করা
  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const { height, width } = tooltipRef.current.getBoundingClientRect();
      setPosition({
        top: targetRect.top - height - 8,
        left: targetRect.left + (targetRect.width / 2) - (width / 2),
      });
    }
  }, [targetRect]);

  // ✅ useEffect: সাধারণ লগিং বা ডেটা ফেচ
  useEffect(() => {
    console.log("Tooltip mounted cleanly after paint!");
  }, []);

  return (
    <div
      ref={tooltipRef}
      style={{ top: \`\${position.top}px\`, left: \`\${position.left}px\` }}
      className="fixed bg-black text-white p-2 rounded text-xs"
    >
      Tooltip Content
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Flicker-free positioning",
          description: "useLayoutEffect পেইন্টের আগেই কোঅর্ডিনেট সেট করে দেওয়ায় ব্যবহারকারী টুলটিপকে লাফাতে (jump/flicker) দেখবে না।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Floating UI / Tooltip Library (Radix / Popper)",
        description: "বাটন ভিউপোর্টের সীমানায় গেলে ড্রপডাউন উপরে খুলবে না নিচে খুলবে তা স্ক্রিন আঁকার আগেই হিসাব করা।",
      },
      {
        title: "Auto-scrolling Chat Box to Bottom",
        description: "নতুন মেসেজ আসার সাথে সাথে স্ক্রল পজিশন ইনস্ট্যান্ট নিচে লক করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Always use `useEffect` by default. Reach for `useLayoutEffect` only when you need to read DOM measurements and synchronously update state before the user sees a visual flicker.'",
      deliveryStrategy: "SSR ফ্রেমওয়ার্কে (Next.js) `useLayoutEffect` কেন সতর্কতার সাথে ব্যবহার করতে হয় তা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "useLayoutEffect আধুনিক এবং বেশি শক্তিশালী তাই সবসময় এটি ব্যবহার করা উচিত।",
          right: "useLayoutEffect মেইন থ্রেডকে ব্লক করে ব্রাউজার পেইন্ট পিছিয়ে দেয়, তাই এটি শুধুমাত্র ফ্লিকারিং রোধে সুনির্দিষ্ট ক্ষেত্রে প্রযোজ্য।",
        },
      ],
    },
    quickRevision: [
      "`useEffect`: Asynchronous | After Paint | Default choice।",
      "`useLayoutEffect`: Synchronous | Before Paint | Layout measurements & flicker prevention।",
      "Server Side Rendering (SSR)-এ `useLayoutEffect` সতর্কভাবে হ্যান্ডেল করতে হয়।",
    ],
    followUpQuestions: [
      {
        question: "React 18-এ useInsertionEffect হুকটি কেন আনা হয়েছিল?",
        shortHint: "CSS-in-JS লাইব্রেরিগুলোকে (Emotion/Styled-components) স্টাইল ট্যাগ ইনসার্ট করার সময় পারফরম্যান্স বুস্ট দেওয়ার জন্য।",
      },
    ],
    tags: ["React Hooks", "useEffect", "useLayoutEffect", "Lifecycle", "Performance"],
  },
  {
    id: "react-state-vs-props-controlled-uncontrolled",
    slug: "react-state-vs-props-controlled-uncontrolled",
    question: "What is the difference between State and Props, and Controlled vs Uncontrolled Components in React?",
    category: "React",
    categorySlug: "react",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "**Props** হলো কম্পোনেন্টের বাইরের প্যারেন্ট থেকে পাঠানো রিড-অনলি (ইমিউটেবল) ডেটা। **State** হলো কম্পোনেন্টের অভ্যন্তরীণ নিজস্ব পরিবর্তনযোগ্য (মিউটেবল) ডেটা যা পরিবর্তিত হলে রি-রেন্ডার ট্রিগার হয়। ফর্ম ইনপুটে, যার ভ্যালু সম্পূর্ণ React State দিয়ে নিয়ন্ত্রিত হয় তাকে **Controlled Component** বলে; আর যার ভ্যালু সরাসরি ব্রাউজার DOM (`useRef`) হ্যান্ডেল করে তাকে **Uncontrolled Component** বলে।",
    easyExplanation:
      "React অ্যাপ্লিকেশন ডেটা ফ্লো বোঝার দুটি মূল কনসেপ্ট:\n\n১. **Props বনাম State**:\n- **Props (Properties)**: ফাংশন প্যারামিটারের মতো। প্যারেন্ট কম্পোনেন্ট চাইল্ডকে দেয়। চাইল্ড কখনোই সরাসরি তার props পরিবর্তন করতে পারে না (Props are Read-Only)।\n- **State**: কম্পোনেন্টের নিজস্ব মেমরি। ব্যবহারকারীর ইন্টারঅ্যাকশনে (যেমন বাটনে ক্লিক বা ইনপুট টাইপ) State পরিবর্তিত হতে পারে এবং স্টেট বদলালে কম্পোনেন্ট স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয়।\n\n২. **Controlled বনাম Uncontrolled Components**:\n- **Controlled Component**: ইনপুটের মান React স্টেট (`value={text}` এবং `onChange={e => setText(e.target.value)}`) দ্বারা নিয়ন্ত্রিত। একক সত্যের উৎস (Single Source of Truth) থাকে, তাই ইনস্ট্যান্ট ভ্যালিডেশন বা কন্ডিশনাল বাটন ডিজেবল করা সহজ।\n- **Uncontrolled Component**: ইনপুটের মান সরাসরি ব্রাউজার DOM মনে রাখে। React শুধুমাত্র সাবমিটের সময় `useRef()` দিয়ে মান সংগ্রহ করে। সাধারণ ফর্ম বা ফাইল আপলোডে এটি দ্রুত ও কম কোডের সমাধান।",
    interviewAnswer:
      "**Props** are immutable configuration passed down from parent to child components, upholding unidirectional data flow. **State** represents internal, mutable component state managed via `useState`/`useReducer` that triggers re-renders upon change. Regarding form elements: a **Controlled Component** binds its input value to React state via `value` and `onChange`, giving React full control. An **Uncontrolled Component** lets the native DOM maintain form state internally, reading values on-demand using `useRef`.",
    detailedExplanation: {
      whatItIs:
        "React-এর ডেটা ম্যানেজমেন্ট ও ফর্ম হ্যান্ডলিংয়ের মৌলিক আর্কিটেকচার।",
      whyItExists:
        "প্রেডিক্টেবল একমুখী ডেটা ফ্লো এবং ফর্মে সহজ ইউজার ইনপুট ট্র্যাকিং ও ভ্যালিডেশনের জন্য।",
      howItWorks:
        "Controlled ইনপুটে প্রতি কি-স্ট্রোকে স্টেট আপডেট হয় এবং VDOM রি-রেন্ডারের মাধ্যমে নতুন ভ্যালু ইনপুটে প্রতিফলিত হয়। Uncontrolled ইনপুটে DOM ইন্টারনালি ভ্যালু রাখে এবং রি-রেন্ডার ছাড়াই সাবমিটে ডেটা দেয়।",
      whenToUse:
        "ডাইনামিক ফর্ম, লাইভ ভ্যালিডেশন ও কন্ডিশনাল ফিল্ডের জন্য Controlled Component; সিম্পল সার্চ বা ফাইল আপলোড (`<input type='file'>`) ইনপুটের জন্য Uncontrolled Component ব্যবহার করুন।",
      keyPoints: [
        "Props: Read-only, passed from parent to child.",
        "State: Mutable internally, triggers re-render.",
        "Controlled: Value stored in React state, single source of truth.",
        "Uncontrolled: Value stored in DOM, accessed via `useRef`.",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import { useState, useRef } from "react";

// ১. Controlled Component (React State দ্বারা নিয়ন্ত্রিত)
function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Controlled input"
      />
      <p>Live Character Count: {name.length}</p>
    </div>
  );
}

// ২. Uncontrolled Component (DOM & useRef দ্বারা পরিচালিত)
function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted value: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} defaultValue="Initial" />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Controlled flow",
          description: "ইনপুটে টাইপ করলেই setName স্টেট আপডেট হয় এবং লাইভ ক্যারেক্টার কাউন্ট দেখায়।",
        },
        {
          step: 2,
          title: "Uncontrolled flow",
          description: "টাইপিংয়ের সময় কোনো স্টেট আপডেট বা রি-রেন্ডার হয় না; সাবমিটের সময় inputRef.current.value দিয়ে সরাসরি DOM থেকে মান নেওয়া হয়।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Credit Card Live Formatter",
        description: "টাইপ করার সাথে সাথে ৪ সংখ্যা পর পর স্পেস বসানো এবং লাইভ ভ্যালিডেশনের জন্য Controlled কম্পোনেন্ট ব্যবহার।",
      },
      {
        title: "File Upload Input",
        description: "`<input type='file'>` সবসময় একটি Uncontrolled কম্পোনেন্ট কারণ ব্রাউজার সিকিউরিটি কারণে এর ভ্যালু সরাসরি JS স্টেট দিয়ে সেট করা যায় না।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Controlled components provide a Single Source of Truth and enable instant validation, while Uncontrolled components are closer to native HTML forms and avoid re-renders on keystrokes.'",
      deliveryStrategy: "React Hook Form লাইব্রেরি কীভাবে Uncontrolled পারফরম্যান্সের সাথে Controlled ভ্যালিডেশন কম্বাইন করে তা উল্লেখ করতে পারেন।",
      avoidSaying: [
        {
          wrong: "Props চাইল্ডের ভেতর থেকে `props.name = 'new'` দিয়ে পরিবর্তন করা যায়।",
          right: "Props সবসময় ইমিউটেবল ও রিড-অনলি; চাইল্ড থেকে কোনো ডেটা বদলাতে হলে প্যারেন্ট থেকে কলব্যাক ফাংশন পাস করতে হয়।",
        },
      ],
    },
    quickRevision: [
      "Props: প্যারেন্ট থেকে আসে | Read-only | ইমিউটেবল।",
      "State: কম্পোনেন্টের নিজস্ব মেমরি | রি-রেন্ডার ট্রিগার করে।",
      "Controlled: `value` + `onChange` (React State)।",
      "Uncontrolled: `useRef` + `defaultValue` (Browser DOM)।",
    ],
    followUpQuestions: [
      {
        question: "Prop Drilling কী এবং এটি কীভাবে সমাধান করা যায়?",
        shortHint: "অনেক স্তরের কম্পোনেন্টে প্রপস পাস করা। সমাধান: React Context API, Zustand, বা Component Composition।",
      },
    ],
    tags: ["React", "State", "Props", "Forms", "Controlled Components"],
  },
  {
    id: "react-prevent-unnecessary-re-renders-optimization",
    slug: "react-prevent-unnecessary-re-renders-optimization",
    question: "What causes unnecessary re-renders in React and how do you prevent them using React.memo, useMemo, and useCallback?",
    category: "React",
    categorySlug: "react",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer:
      "React-এ প্যারেন্ট কম্পোনেন্ট রি-রেন্ডার হলে ডিফল্টভাবে তার সমস্ত চাইল্ড কম্পোনেন্টও রি-রেন্ডার হয়। এছাড়া প্রতি রেন্ডারে নতুন ফাংশন/অবজেক্ট রেফারেন্স তৈরি হওয়া এবং স্টেট কোলোকেশনের অভাব অপ্রয়োজনীয় রি-রেন্ডার তৈরি করে। এটি প্রতিরোধে **`React.memo`** (প্রপস শ্যালো তুলনা করে চাইল্ড স্কিপ করা), **`useCallback`** (ফাংশন রেফারেন্স মেমোইজ করা), **`useMemo`** (ভারী ক্যালকুলেশন ক্যাশ করা) এবং স্টেট ডাউন-পুশিং ব্যবহার করা হয়।",
    easyExplanation:
      "React-এর ডিফল্ট আচরণ হলো: প্যারেন্ট কম্পোনেন্টের স্টেট বদলালে নিচে থাকা সব চাইল্ড স্বয়ংক্রিয়ভাবে পুনরায় রান করে, এমনকি চাইল্ডের প্রপস অপরিবর্তিত থাকলেও।\n\n**প্রধান কারণসমূহ**:\n১. **রেফারেনশিয়াল সমতা ভঙ্গ (Referential Inequality)**: JavaScript-এ `{}` বা `() => {}` প্রতি রেন্ডারে নতুন মেমরি অ্যাড্রেস তৈরি করে। ফলে চাইল্ড কম্পোনেন্ট মনে করে প্রপস বদলে গেছে।\n২. **স্টেটের ভুল অবস্থান**: একটি ইনপুট টাইপিংয়ের স্টেট পুরো পেজের টপে রাখলে প্রতি কি-স্ট্রোকে পুরো পেজ কেঁপে ওঠে।\n\n**প্রতিরোধের শক্তিশালী ৪টি হাতিয়ার**:\n১. **`React.memo(Component)`**: কম্পোনেন্টকে র্যাপ করে। যদি এর প্রপস না বদলায়, তবে রি-রেন্ডার বন্ধ করে আগের রেন্ডার করা রেজাল্ট রিটার্ন করে।\n২. **`useCallback(fn, deps)`**: ফাংশনের রেফারেন্স মনে রাখে, যাতে `React.memo` করা চাইল্ড অপ্রয়োজনীয় রি-রেন্ডার না হয়।\n৩. **`useMemo(() => compute(), deps)`**: সময়সাপেক্ষ জটিল হিসাব (যেমন ১০,০০০ ডেটা ফিল্টারিং) ক্যাশ করে রাখে।\n৪. **Component Composition / State Colocation**: স্টেটকে ঠিক যে চাইল্ডে প্রয়োজন শুধুমাত্র সেখানেই রাখা (Push state down)।",
    interviewAnswer:
      "Unnecessary re-renders in React occur primarily because child components re-render by default whenever their parent updates, and recreating functions or objects inline breaks referential equality during prop comparison. We prevent this by combining **`React.memo`** for components with **`useCallback`** to stabilize function props and **`useMemo`** to cache expensive computed values. Additionally, architectural techniques like **State Colocation** and passing JSX as children (Composition) eliminate re-renders without adding memoization overhead.",
    detailedExplanation: {
      whatItIs:
        "React রেন্ডারিং অপ্টিমাইজেশন ও মেমরি মেমোইজেশন প্যাটার্ন।",
      whyItExists:
        "বড় অ্যাপ্লিকেশনগুলোতে ফ্রেম রেট ঠিক রাখতে, UI ল্যাগ দূর করতে এবং পারফরম্যান্স বটলনেক কমাতে।",
      howItWorks:
        "`React.memo` প্রপসের শ্যালো কম্প্যারিজন (`prevProps === nextProps`) করে। `useCallback` এবং `useMemo` তাদের ডিপেন্ডেন্সি অ্যারে চেক করে মেমোইজড রেফারেন্স রিটার্ন করে।",
      whenToUse:
        "ভারী কম্পোনেন্ট, বড় তালিকা/টেবিল, এবং ঘনঘন স্টেট আপডেট হওয়া প্যারেন্টের সাব-ট্রি অপ্টিমাইজেশনে। সাধারণ ছোট কম্পোনেন্টে প্রি-ম্যাচিউর অপ্টিমাইজেশন এড়িয়ে চলুন।",
      keyPoints: [
        "React.memo ছাড়া একা useCallback ব্যবহার করলে রি-রেন্ডার থামে না।",
        "React Developer Tools Profiler দিয়ে আসল বটলনেক মেপে অপ্টিমাইজ করুন।",
        "স্টেট কোলোকেশন (State Colocation) মেমোইজেশনের চেয়েও দ্রুত ও ক্লিন কোড দেয়।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import React, { useState, useCallback, useMemo } from "react";

// ১. React.memo দিয়ে চাইল্ড কম্পোনেন্ট র্যাপ করা
const HeavyList = React.memo(function HeavyList({ items, onItemClick }) {
  console.log("HeavyList rendered! (Expensive)");
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
});

export default function ParentDashboard() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const rawItems = [{ id: 1, name: "Alpha" }, { id: 2, name: "Beta" }];

  // ২. useMemo: ফিল্টারিং ক্যাশ করা
  const filteredItems = useMemo(() => {
    return rawItems.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  // ৩. useCallback: ফাংশন রেফারেন্স স্ট্যাবল রাখা
  const handleItemClick = useCallback((id) => {
    console.log("Item clicked:", id);
  }, []);

  return (
    <div>
      {/* এই কাউন্টার স্টেট বাড়ালেও HeavyList রি-রেন্ডার হবে না! */}
      <button onClick={() => setCount((c) => c + 1)}>Counter: {count}</button>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />

      <HeavyList items={filteredItems} onItemClick={handleItemClick} />
    </div>
  );
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Referential stability",
          description: "useCallback এবং useMemo এর কারণে filteredItems ও handleItemClick এর রেফারেন্স বদলায় না।",
        },
        {
          step: 2,
          title: "Skipped render",
          description: "কাউন্টার বাটনে ক্লিক করলে Parent রি-রেন্ডার হলেও React.memo এর কারণে HeavyList রি-রেন্ডার স্কিপ করে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Interactive Charts & Maps",
        description: "পেজের সাইডবার টগল করলেও ভারী SVG চার্ট বা Leaflet ম্যাপ যেন পুনরায় রি-রেন্ডার না হয় তা নিশ্চিত করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে সতর্কতার সাথে বলুন: 'Do not memoize everything blindly because memoization itself has a memory and comparison cost. Measure first with React Profiler, then apply memo/useCallback.'",
      deliveryStrategy: "Component Composition প্যাটার্ন (passing components as `children`) উল্লেখ করলে সিনিয়র লেভেলের ইম্প্রেশন তৈরি হয়।",
      avoidSaying: [
        {
          wrong: "সব ফাংশনে useCallback দিলে সাইট ফাস্ট হয়ে যায়।",
          right: "useCallback শুধুমাত্র তখনই রি-রেন্ডার বাঁচায় যখন ফাংশনটি কোনো React.memo যুক্ত চাইল্ডে প্রপস হিসেবে যায় বা অন্য কোনো হুকের ডিপেন্ডেন্সিতে থাকে।",
        },
      ],
    },
    quickRevision: [
      "`React.memo`: চাইল্ড কম্পোনেন্টের প্রপস শ্যালো তুলনা করে রি-রেন্ডার থামায়।",
      "`useCallback`: ফাংশন রেফারেন্স স্ট্যাবল রাখে।",
      "`useMemo`: জটিল গণনার মান মেমোইজ করে।",
      "স্টেট নিচে নামানো (Colocation) সেরা প্রাথমিক সমাধান।",
    ],
    followUpQuestions: [
      {
        question: "React 19-এ কি useCallback এবং useMemo-এর ব্যবহার কমে গেছে?",
        shortHint: "হ্যাঁ, React Compiler (Forget) স্বয়ংক্রিয়ভাবে বিল্ড টাইমে মেমোইজেশন হ্যান্ডেল করতে পারে।",
      },
    ],
    tags: ["React", "Performance", "useMemo", "useCallback", "React.memo", "Optimization"],
  },
  {
    id: "react-error-boundaries-and-strict-mode",
    slug: "react-error-boundaries-and-strict-mode",
    question: "What are React Error Boundaries, how do you handle global errors, and what is React StrictMode?",
    category: "React",
    categorySlug: "react",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer:
      "**Error Boundary** হলো একটি বিশেষ ক্লাস কম্পোনেন্ট যা তার চাইল্ড কম্পোনেন্ট ট্রির যেকোনো জাভাস্ক্রিপ্ট রেন্ডারিং এরর ক্যাচ করে, পুরো অ্যাপ ক্র্যাশ হওয়া থেকে বাঁচায় এবং একটি ফলব্যাক UI (Fallback UI) প্রদর্শন করে। আর **StrictMode** হলো একটি ডেভেলপমেন্ট-অনলি টুল যা সম্ভাব্য বাগ, আনসেফ লাইফসাইকেল, ডিপ্রিকেটেড API এবং অপ্রত্যাশিত সাইড-ইফেক্ট ধরার জন্য কম্পোনেন্টকে দুইবার রেন্ডার করে।",
    easyExplanation:
      "প্রোডাকশন অ্যাপ্লিকেশনের স্ট্যাবিলিটি ও ডিবাগিংয়ের দুটি গুরুত্বপূর্ণ ফিচার:\n\n১. **Error Boundary (ক্র্যাশ গার্ড)**:\n- সাধারণ জাভাস্ক্রিপ্ট এরর হলে পুরো React অ্যাপ সাদা স্ক্রিন (White Screen of Death) হয়ে ক্র্যাশ করত।\n- Error Boundary কম্পোনেন্ট পুরো ট্রি বা নির্দিষ্ট সেকশনকে (যেমন পেমেন্ট উইজেট বা সাইডবার) ঘিরে রাখে। কোনো চাইল্ডে রেন্ডারিং এরর হলে শুধু ওই অংশটুকু সুন্দর এরর মেসেজ দেখায়, বাকি অ্যাপ স্বাভাবিকভাবে চালু থাকে।\n- এটি `static getDerivedStateFromError` এবং `componentDidCatch` মেথড দিয়ে তৈরি হয়।\n- সীমাবদ্ধতা: এটি ইভেন্ট হ্যান্ডলার (`onClick`), অ্যাসিনক্রোনাস কোড (`setTimeout`, `fetch`) বা সার্ভার সাইড রেন্ডারিং এরর ধরতে পারে না (সেগুলোর জন্য সাধারণ `try...catch` লাগে)।\n\n২. **React StrictMode**:\n- এটি প্রোডাকশন বিল্ডে কোনো প্রভাব ফেলে না (`Zero production overhead`)।\n- ডেভেলপমেন্টে `useEffect` এবং কম্পোনেন্টকে ইচ্ছাকৃতভাবে **দুইবার রান (Double Invocation)** করায়, যাতে ডেভেলপার নিশ্চিত করতে পারে যে তাদের ইফেক্টগুলোতে সঠিক Cleanup ফাংশন আছে এবং মেমরি লিক হচ্ছে না।",
    interviewAnswer:
      "An **Error Boundary** is a React class component that catches JavaScript errors anywhere in its child component tree, logs the errors, and displays a graceful fallback UI instead of crashing the whole application. It implements `static getDerivedStateFromError` to update fallback state and `componentDidCatch` for error logging to monitoring services like Sentry. **StrictMode** is a development-only helper that checks for side-effects by intentionally double-rendering components and double-invoking effects to expose missing cleanups and deprecated APIs.",
    detailedExplanation: {
      whatItIs:
        "React-এর গ্লোবাল এরর হ্যান্ডলিং প্যাটার্ন এবং ডেভেলপমেন্ট কোয়ালিটি অ্যাসুরেন্স মোড।",
      whyItExists:
        "UI ক্র্যাশ আইসোলেট করতে, সেন্ট্রালাইজড এরর লগিং নিশ্চিত করতে এবং কনকারেন্ট মোডের জন্য কোডকে নিরাপদ রাখতে।",
      howItWorks:
        "React রেন্ডার ফেজে এরর থ্রো হলে প্যারেন্ট চেইনে নিকটতম Error Boundary নোড খোঁজে এবং তার ফলব্যাক VDOM রেন্ডার করে।",
      whenToUse:
        "রাউটের মূল লেআউটে, থার্ড-পার্টি উইজেটে এবং জটিল ডেটা ভিজ্যুয়ালাইজেশন সেকশনে Error Boundary ব্যবহার করুন।",
      keyPoints: [
        "Error Boundary অবশ্যই Class Component হতে হবে (অথবা `react-error-boundary` প্যাকেজ ব্যবহার করতে হবে)।",
        "ইভেন্ট হ্যান্ডলারের এরর Error Boundary ক্যাচ করে না (`try/catch` দরকার)।",
        "StrictMode ডেভেলপমেন্টে দুইবার ইফেক্ট চালায় সাইড-ইফেক্ট বাগ ধরতে।",
      ],
    },
    codeExample: {
      language: "jsx",
      code: `import React from "react";

// ১. কাস্টম Error Boundary ক্লাস কম্পোনেন্ট
class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // ফলব্যাক UI দেখানোর জন্য স্টেট আপডেট
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Sentry বা লগিং সার্ভিসে এরর পাঠানো
    console.error("Logged to Sentry:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 rounded-xl bg-red-50 text-red-900 border border-red-200">
          <h2 className="text-lg font-bold">দুঃখিত! কিছু একটা ভুল হয়েছে।</h2>
          <p className="text-sm mt-1">দয়া করে পেজটি রিফ্রেশ করুন বা পরে চেষ্টা করুন।</p>
          <button onClick={() => window.location.reload()} className="mt-3 px-3 py-1 bg-red-600 text-white rounded text-xs">
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// ২. অ্যাপে ব্যবহার
/*
<React.StrictMode>
  <GlobalErrorBoundary>
    <App />
  </GlobalErrorBoundary>
</React.StrictMode>
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "Crash Protection",
          description: "App-এর ভেতরে কোনো ক্র্যাশ হলে GlobalErrorBoundary তা আটকে দিয়ে সুন্দর রিফ্রেশ বাটনসহ এরর মেসেজ দেখাবে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Payment Gateway Isolation",
        description: "স্ট্রাইপ বা পেপ্যাল পেমেন্ট উইজেট লোড হতে ব্যর্থ হলেও ইউজার যেন পুরো ই-কমার্স সাইট ব্যবহার করতে পারে।",
      },
      {
        title: "Monitoring with Sentry / Datadog",
        description: "`componentDidCatch`-এ ক্লায়েন্ট ক্র্যাশের স্ট্যাকট্রেস ও ইউজার সেশন মেটাডাটা সেন্ট্রাল সার্ভারে পাঠানো।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Error Boundaries do not catch errors inside Event Handlers, Async Code, or Server-Side Rendering. For event handlers, we still use regular try/catch blocks.'",
      deliveryStrategy: "StrictMode কেন ডেভেলপমেন্টে ইফেক্ট ২ বার চালায় তা ব্যাখ্যা করলে ভালো ইম্প্রেশন তৈরি হয়।",
      avoidSaying: [
        {
          wrong: "Error Boundary সব ধরণের এরর (যেমন বাটন ক্লিকের নেটওয়ার্ক এরর) ক্যাচ করে।",
          right: "Error Boundary শুধুমাত্র রেন্ডার ফেজ, লাইফসাইকেল এবং কনস্ট্রাক্টরের রেন্ডারিং এরর ক্যাচ করে।",
        },
      ],
    },
    quickRevision: [
      "Error Boundary: রেন্ডারিং এরর আটকে ফলব্যাক UI দেখায় (White screen রোধ করে)।",
      "`getDerivedStateFromError`: ফলব্যাক স্টেট সেট করে।",
      "`componentDidCatch`: এরর সার্ভিসে লগ করে।",
      "StrictMode: Dev-only double render দিয়ে মেমরি লিক ও সাইড-ইফেক্ট ধরে।",
    ],
    followUpQuestions: [
      {
        question: "Next.js App Router-এ কীভাবে Error Boundary ব্যবহার করা হয়?",
        shortHint: "`error.tsx` ফাইল স্বয়ংক্রিয়ভাবে চাইল্ড রুটগুলোকে একটি Client Error Boundary দিয়ে র্যাপ করে।",
      },
    ],
    tags: ["React", "Error Boundary", "StrictMode", "Error Handling", "Debugging"],
  },
];
