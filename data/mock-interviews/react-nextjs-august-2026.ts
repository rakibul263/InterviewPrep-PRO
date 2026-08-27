import { MockInterviewItem, MockInterviewSession } from "@/types";

export const REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026: MockInterviewItem[] = [
  // 1. Reconciliation
  {
    id: "reconciliation-decide-render",
    questionNumber: 1,
    question: "How does reconciliation decide when and what to render?",
    banglaQuestion: "React-এর Reconciliation কীভাবে সিদ্ধান্ত নেয় কখন এবং কী রেন্ডার করতে হবে?",
    topic: "React Core",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Reconciliation", "Virtual DOM", "Diffing", "Fiber", "Render Phase"],
    english: {
      quickAnswer:
        "Reconciliation is React's diffing algorithm that compares the previous Virtual DOM tree with the new one to determine the minimal set of DOM mutations needed.",
      interviewSpeech:
        "When state or props change, React triggers a render phase. It generates a new Virtual DOM tree and runs the Reconciliation algorithm using two key heuristics: First, if two elements have different types (e.g., <div> to <span>), React unmounts the entire old subtree and creates a new one. Second, for lists of elements, React relies on stable 'key' props to match children between renders. Once the diffing is computed in memory, React batches the minimal required changes and commits them to the actual browser DOM during the Commit phase.",
      deepDive: [
        "**Render Phase (Pure & Interruptible)**: React calls component functions and constructs a Work-in-Progress Fiber tree. Diffing happens here in memory without touching real DOM.",
        "**Diffing Heuristics**: Generic tree diffing is O(n³). React optimizes this to O(n) assuming different element types produce different trees, and keys identify stable list nodes.",
        "**Commit Phase (Synchronous & Non-interruptible)**: React applies DOM insertions, updates, deletions, and runs layout effects (`useLayoutEffect`).",
        "**Bailout Mechanism**: If a component's props/state are shallowly equal (via `React.memo` or unchanged state), React skips re-rendering that component's subtree entirely.",
      ],
      codeSnippet: {
        language: "jsx",
        caption: "Reconciliation Type & Key Heuristics",
        code: `// 1. Different element types -> Total tear down and recreation
// Render 1: <Header user={user} />
// Render 2: <Sidebar user={user} /> -> Header is unmounted; Sidebar mounted from scratch.

// 2. Same element type -> Attribute update only (efficient)
// Render 1: <div className="p-2" id="box" />
// Render 2: <div className="p-4" id="box" /> -> Only className mutated on real DOM.

// 3. Keys preserve identity & state in lists
{items.map(item => (
  <Card key={item.id} data={item} /> // Preserves internal state on reorder
))}`,
      },
      commonMistakes: [
        "Confusing 'Render' with 'DOM Paint': Rendering in React is just calling functions to produce Virtual DOM; it does not mean the browser repainted pixel buffers.",
        "Thinking React updates the entire DOM tree whenever state changes.",
      ],
      proTips: [
        "Mention the two distinct phases: 'Render Phase' (pure calculation, Fiber work) and 'Commit Phase' (applying mutations to real DOM).",
      ],
    },
    bangla: {
      quickAnswer:
        "Reconciliation হলো React-এর ডিফিউজিং (Diffing) অ্যালগরিদম যা পূর্ববর্তী Virtual DOM এবং নতুন Virtual DOM তুলনা করে রিয়েল ডমে ন্যূনতম কতটুকু পরিবর্তন করতে হবে তা ঠিক করে।",
      interviewSpeech:
        "স্টেট বা প্রপস পরিবর্তন হলে React রেন্ডার ফেজ শুরু করে। মেমরিতে নতুন Virtual DOM তৈরি করে পুরোনো ট্রির সাথে তুলনা করে। React দুটি মূল নিয়মে O(n) সময়ে সিদ্ধান্ত নেয়: ১) এলিমেন্টের টাইপ যদি বদলে যায় (যেমন <div> থেকে <section>), তাহলে পুরোনো পুরো ট্রি ধ্বংস করে নতুন ট্রি বানায়। ২) একই টাইপ থাকলে শুধু পরিবর্তিত অ্যাট্রিবিউট আপডেট করে। ৩) লিস্টের ক্ষেত্রে 'key' প্রপ দেখে কোন আইটেম যোগ বা বিয়োগ হয়েছে তা ট্র‍্যাক করে। সবশেষে Commit Phase-এ নিখুঁতভাবে রিয়েল ব্রাউজার ডম আপডেট করে।",
      deepDive: [
        "**Render Phase**: কম্পোনেন্ট এক্সিকিউট করে ভার্চুয়াল ডম তৈরি করে; এটি সম্পূর্ণ মেমরিতে চলে এবং ব্রাউজারকে ডিস্টার্ব করে না।",
        "**Diffing Algorithm (O(n))**: সাধারণ ট্রি তুলনায় O(n³) সময় লাগলেও React হিউরিস্টিক নিয়মের মাধ্যমে মাত্র O(n) সময়ে এটি করে।",
        "**Commit Phase**: শুধুমাত্র ডিফারেন্সে পাওয়া আসল পরিবর্তনগুলো ব্রাউজার ডমে একসাথে (Batching) অ্যাপ্লাই করে।",
      ],
      commonMistakes: [
        "রেন্ডার হওয়া মানেই স্ক্রিনে পরিবর্তন হওয়া—এমন ভুল ধারণা রাখা যাবে না। রেন্ডার হলো জাভাস্ক্রিপ্ট ক্যালকুলেশন।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Render Phase' এবং 'Commit Phase'-এর পার্থক্য উল্লেখ করলে পরীক্ষক বুঝবেন আপনার ফাউন্ডেশন অনেক শক্ত।",
      ],
    },
  },

  // 2. State vs Props
  {
    id: "state-vs-props",
    questionNumber: 2,
    question: "State vs Props: What is the core difference?",
    banglaQuestion: "State বনাম Props: এদের মধ্যে মূল পার্থক্য কী?",
    topic: "React Core",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["State", "Props", "Unidirectional Data Flow", "Component Architecture"],
    english: {
      quickAnswer:
        "Props are immutable configuration parameters passed from parent to child, while State is mutable data managed internally by the component itself.",
      interviewSpeech:
        "The fundamental difference lies in ownership and mutability. Props (properties) are external inputs passed down from parent components; they are strictly read-only within the child component to maintain unidirectional data flow. State, on the other hand, is an internal data store initialized and managed within the component using useState or useReducer. When state changes via its setter function, it triggers a re-render of that component and its descendants.",
      deepDive: [
        "**Props (External & Immutable)**: Act like function arguments. A child component must never mutate `props` directly.",
        "**State (Internal & Mutable via Setters)**: Acts like local variables that survive across renders. Mutating state directly (`state.count = 5`) bypasses React scheduler and prevents UI updates.",
        "**Re-render Trigger**: Changing state updates the component; passing new props from a parent also causes the child to re-evaluate.",
        "**Derived State**: Calculate values on-the-fly during render instead of duplicating props into local state.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "State vs Props in Action",
        code: `interface UserCardProps {
  name: string; // Props: Passed from parent, read-only
  role: string;
}

export function UserCard({ name, role }: UserCardProps) {
  // State: Internal component state, owned and managed locally
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="border p-4 rounded">
      <h3>{name} - {role}</h3>
      <button onClick={() => setIsExpanded(prev => !prev)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Copying props directly into initial state without understanding that future prop updates will not automatically sync unless handled.",
        "Directly mutating props inside a child component.",
      ],
      proTips: [
        "Summarize it in one line: 'Props get passed to the component (like parameters), whereas state is managed within the component (like variables)'.",
      ],
    },
    bangla: {
      quickAnswer:
        "Props হলো প্যারেন্ট থেকে চাইল্ডে আসা রিড-অনলি ডেটা, আর State হলো কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ ডেটা যা কম্পোনেন্ট নিজে পরিবর্তন করতে পারে।",
      interviewSpeech:
        "Props এবং State-এর প্রধান পার্থক্য হলো ওনারশিপ (Ownership) এবং মিউটেবিলিটি (Mutability)। Props বাইরে থেকে আর্গুমেন্টের মতো আসে এবং চাইল্ড কম্পোনেন্ট কখনোই সরাসরি Props বদলাতে পারে না। অপরদিকে State কম্পোনেন্টের ভেতরে `useState` দিয়ে তৈরি হয়। State পরিবর্তিত হলে কম্পোনেন্ট স্বয়ংক্রিয়ভাবে রি-রেন্ডার হয় এবং নতুন UI দেখায়।",
      deepDive: [
        "**Props (বহিরাগত ও অপরিবর্তনীয়)**: একমুখী ডেটা প্রবাহ (Unidirectional Data Flow) বজায় রাখে।",
        "**State (অভ্যন্তরীণ ও সেটার দ্বারা পরিবর্তনীয়)**: ইন্টারঅ্যাকশনের সাথে সাথে অ্যাপ্লিকেশনের অবস্থা ধারণ করে।",
        "**ড্রাইভড স্টেট (Derived State)**: প্রপস থেকে হিসাব করে নেওয়া মান আলাদা স্টেটে সেভ না করে সরাসরি রেন্ডারে ক্যালকুলেট করা বেস্ট প্র্যাকটিস।",
      ],
      commonMistakes: [
        "`props.title = 'New'` এভাবে প্রপস সরাসরি পরিবর্তন করার চেষ্টা করা।",
      ],
      proTips: [
        "সহজ ভাষায় বলুন: 'Props আসে উপর থেকে এবং এটি Read-only; আর State থাকে নিজের কাছে এবং এটি Reactive ও Mutable'।",
      ],
    },
  },

  // 3. Controlled vs Uncontrolled Components
  {
    id: "controlled-vs-uncontrolled",
    questionNumber: 3,
    question: "Controlled vs Uncontrolled Components: When should we use which?",
    banglaQuestion: "কন্ট্রোল্ড বনাম আনকন্ট্রোল্ড কম্পোনেন্ট: কখন কোনটি ব্যবহার করা উচিত?",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Forms", "Controlled Components", "useRef", "React 19 Actions"],
    english: {
      quickAnswer:
        "A Controlled component stores form data in React state, whereas an Uncontrolled component lets the DOM handle form state, accessed via refs or FormData.",
      interviewSpeech:
        "In Controlled components, input values are driven by React state via `value` and `onChange` props. This gives us complete control over instant validation, conditional disabling, and dynamic formatting, though every keystroke triggers a component re-render. In Uncontrolled components, form fields maintain their own internal state in the DOM, and we pull values on demand using `useRef` or the `FormData` API on submit. We prefer controlled inputs for complex interactive forms and uncontrolled inputs for file uploads, huge dynamic forms, or simple submit-and-forget forms.",
      deepDive: [
        "**Controlled**: Single Source of Truth in React State. Ideal for instant search, live formatting (e.g., credit card spacing), and reactive UI validation.",
        "**Uncontrolled**: Single Source of Truth in DOM. Zero re-renders during typing, leading to superior performance on massive forms.",
        "**React 19 & Server Actions**: Next.js and React 19 favor native `<form action={serverAction}>` with uncontrolled FormData for progressive enhancement.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Controlled vs Uncontrolled Form Handling",
        code: `// Controlled Component: Value bound to React State
function ControlledInput() {
  const [val, setVal] = useState("");
  return <input value={val} onChange={(e) => setVal(e.target.value)} />;
}

// Uncontrolled Component: DOM maintains state, accessed via Ref / FormData
function UncontrolledForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("username"), fileInputRef.current?.files);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" defaultValue="defaultUser" />
      <input type="file" ref={fileInputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      },
      commonMistakes: [
        "Switching an input from uncontrolled to controlled by passing `undefined` as initial state value instead of `''` (empty string).",
      ],
      proTips: [
        "Mention that modern libraries like React Hook Form use uncontrolled inputs with refs under the hood for optimal typing performance!",
      ],
    },
    bangla: {
      quickAnswer:
        "কন্ট্রোল্ড কম্পোনেন্টে ফর্মের ডেটা React State-এর নিয়ন্ত্রণে থাকে, আর আনকন্ট্রোল্ড কম্পোনেন্টে ব্রাউজার DOM নিজে ডেটা নিয়ন্ত্রণ করে এবং `useRef` বা `FormData` দিয়ে তা রিড করা হয়।",
      interviewSpeech:
        "কন্ট্রোল্ড কম্পোনেন্টে ইনপুটের মান `value` এবং `onChange` দিয়ে React State-এর সাথে সিঙ্ক থাকে। এর সুবিধা হলো প্রতিটি কী-স্ট্রোকে লাইভ ভ্যালিডেশন বা ফরমেটিং করা যায়। আনকন্ট্রোল্ড কম্পোনেন্টে কোনো স্টেট লাগে না, ব্রাউজার DOM নিজেই ডেটা রাখে এবং ফর্ম সাবমিট করার সময় `useRef` বা `new FormData(e.currentTarget)` দিয়ে মান বের করে নেওয়া হয়। ফাইল আপলোড বা বিশাল ফর্মে রেন্ডারিং কমাতে আনকন্ট্রোল্ড প্যাটার্ন ব্যবহার করা হয়।",
      deepDive: [
        "**কন্ট্রোল্ড**: লাইভ সার্চ, ডাইনামিক ফিল্ড ডিসেবল এবং ইনস্ট্যান্ট ইরর মেসেজের জন্য সেরা।",
        "**আনকন্ট্রোল্ড**: টাইপিংয়ের সময় অপ্রয়োজনীয় রি-রেন্ডার হয় না, ফলে পারফরম্যান্স অত্যন্ত ফাস্ট থাকে।",
        "**Next.js ও React 19**: সার্ভার অ্যাকশনের সাথে আনকন্ট্রোল্ড নেটিভ ফর্ম ব্যবহার জনপ্রিয়।",
      ],
      commonMistakes: [
        "শুরুতে `value={state}` তে `undefined` দিলে React ওয়ার্নিং দেয় 'uncontrolled to controlled'। ইনিশিয়াল ভ্যালু সবসময় `''` দিতে হবে।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'React Hook Form লাইব্রেরি ভেতরে আনকন্ট্রোল্ড রিফ (Refs) ব্যবহার করেই এত দ্রুত কাজ করে'।",
      ],
    },
  },

  // 4. useEffect Dependency Array
  {
    id: "useeffect-dependency-array",
    questionNumber: 4,
    question: "How does the useEffect dependency array work?",
    banglaQuestion: "useEffect-এর Dependency Array কীভাবে কাজ করে এবং কেন এটি গুরুত্বপূর্ণ?",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["useEffect", "Hooks", "Dependency Array", "Object.is", "Stale Closure"],
    english: {
      quickAnswer:
        "The useEffect dependency array tells React when to execute the effect callback and its cleanup by performing an Object.is shallow comparison on each item between renders.",
      interviewSpeech:
        "React evaluates the dependency array after every render using `Object.is` shallow comparison. If the array is omitted, the effect runs on mount and after every single render. If an empty array `[]` is provided, it runs only once after the initial mount and cleans up on unmount. When specific dependencies `[a, b]` are listed, React checks if any item changed reference or value compared to the previous render; if at least one did, it runs the cleanup function for the previous effect and then invokes the new effect.",
      deepDive: [
        "**Empty array `[]`**: Runs once on mount, cleanup on unmount.",
        "**No array**: Runs after every render cycle. High risk of infinite loops if setting state inside.",
        "**Object/Array References**: In JavaScript, `{ id: 1 } !== { id: 1 }`. Passing unmemoized objects/functions creates a new reference on every render, triggering the effect repeatedly.",
        "**Stale Closure Warning**: Omitting variables read inside the effect causes it to capture stale variables from initial render.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Dependency Comparison & Proper Cleanup",
        code: `useEffect(() => {
  const controller = new AbortController();

  async function loadData() {
    try {
      const res = await fetch(\`/api/users/\${userId}\`, { signal: controller.signal });
      const data = await res.json();
      setUser(data);
    } catch (err: any) {
      if (err.name !== "AbortError") console.error(err);
    }
  }

  loadData();

  // Cleanup runs BEFORE the next effect execution and on component unmount
  return () => {
    controller.abort();
  };
}, [userId]); // Only re-runs if userId changes according to Object.is`,
      },
      commonMistakes: [
        "Passing inline functions or object literals directly in dependencies without `useCallback` or `useMemo`.",
        "Lying to React by omitting variables from the array to prevent re-execution, creating stale closures.",
      ],
      proTips: [
        "Always rely on the ESLint `react-hooks/exhaustive-deps` rule instead of manually guessing dependencies.",
      ],
    },
    bangla: {
      quickAnswer:
        "useEffect ডিপেন্ডেন্সি অ্যারেতে থাকা প্রতিটি উপাদানের সাথে পূর্ববর্তী রেন্ডারের মান `Object.is()` দিয়ে তুলনা করে; যদি কোনো ভ্যালু বা রেফারেন্স পরিবর্তিত হয় তবেই ইফেক্টটি আবার রান করে।",
      interviewSpeech:
        "React প্রতিটি রেন্ডারের পর ডিপেন্ডেন্সি অ্যারের প্রতিটি আইটেমকে `Object.is` দিয়ে পরীক্ষা করে। অ্যারে না দিলে প্রতি রেন্ডারেই ইফেক্ট চলবে। খালি অ্যারে `[]` দিলে শুধু কম্পোনেন্ট মাউন্ট হওয়ার পর একবার চলবে। আর `[userId]` দিলে যখনই `userId`-এর মান বা রেফারেন্স বদলাবে, React আগের ইফেক্টের ক্লিন-আপ (Cleanup) ফাংশনটি চালিয়ে নতুন ইফেক্টটি এক্সিকিউট করবে।",
      deepDive: [
        "**রেফারেন্স ট্র্যাপ**: জাভাস্ক্রিপ্টে অবজেক্ট বা ফাংশন প্রতি রেন্ডারে নতুন মেমরি রেফারেন্স তৈরি করে, তাই এগুলো ডিপেন্ডেন্সিতে দিলে `useCallback` বা `useMemo` করা জরুরি।",
        "**ক্লিন-আপ ফেজ**: নতুন ইফেক্ট চলার ঠিক পূর্বে আগের ইফেক্টের সাবস্ক্রিপশন বা টাইমার বন্ধ করার জন্য ক্লিন-আপ কল হয়।",
      ],
      commonMistakes: [
        "ডিপেন্ডেন্সির ওয়ার্নিং এড়াতে অ্যারে খালি রেখে দেওয়া, যার ফলে স্টেল ক্লোজারের (Stale Closure) কারণে পুরোনো ডেটা থেকে যায়।",
      ],
      proTips: [
        "ইন্টারভিউতে `AbortController` ক্লিনআপের উদাহরণ দিলে প্রমাণ হবে আপনি প্রোডাকশন-লেভেল কোড লিখতে অভ্যস্ত।",
      ],
    },
  },

  // 5. List Rendering Optimization & Keys
  {
    id: "optimize-list-rendering-keys",
    questionNumber: 5,
    question: "How do we optimize list rendering in React, and why are keys necessary in map()?",
    banglaQuestion: "React-এ List Rendering কীভাবে অপ্টিমাইজ করব এবং map()-এ key কেন দরকার?",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Lists", "Keys", "Virtualization", "React.memo", "Performance"],
    english: {
      quickAnswer:
        "Keys give list items a stable identity so React knows which items were added, removed, or reordered. We optimize large lists using stable unique IDs, List Virtualization, and React.memo.",
      interviewSpeech:
        "During reconciliation, React uses keys to match children in the original tree with children in the new tree. Without a stable key, React defaults to using array indices. When items are inserted, deleted, or sorted, index-based keys shift, causing React to unnecessarily mutate all subsequent DOM elements and scramble uncontrolled child state. For list optimization, we: 1) Always use unique, stable IDs as keys; 2) Wrap list items in `React.memo` with memoized callbacks; 3) Use List Virtualization via `@tanstack/react-virtual` for thousands of rows.",
      deepDive: [
        "**Why Index is an Anti-pattern**: If you delete the first item of an array, the item that was index 1 becomes index 0. React assumes the first element's props changed instead of being deleted, re-rendering everything.",
        "**List Virtualization (Windowing)**: Only renders DOM nodes visible inside the browser viewport (e.g. 20 items out of 10,000), keeping DOM lightweight and 60fps smooth.",
        "**React.memo on Child Cards**: Prevents unchanged list items from re-rendering when parent state or other items change.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Virtualized List with Stable Keys & Memoization",
        code: `import React, { memo } from "react";

// 1. Memoized list row component
const UserRow = memo(function UserRow({ user, onSelect }: { user: User; onSelect: (id: string) => void }) {
  return (
    <div onClick={() => onSelect(user.id)} className="p-3 border-b">
      <span>{user.name}</span> - <span>{user.email}</span>
    </div>
  );
});

// 2. Rendering with stable database ID as key (NEVER array index if list is dynamic)
export function UserList({ users, onSelect }: { users: User[]; onSelect: (id: string) => void }) {
  return (
    <div className="overflow-auto max-h-96">
      {users.map((user) => (
        <UserRow key={user.id} user={user} onSelect={onSelect} />
      ))}
    </div>
  );
}`,
      },
      commonMistakes: [
        "Generating random keys on the fly like `key={Math.random()}`. This destroys and recreates the entire DOM on every render.",
        "Using array index as key on lists that can be filtered, sorted, or mutated.",
      ],
      proTips: [
        "Mention `@tanstack/react-virtual` or `react-window` as the gold standard for rendering 10,000+ items smoothly.",
      ],
    },
    bangla: {
      quickAnswer:
        "Key হলো তালিকার প্রতিটি আইটেমের অনন্য পরিচয়পত্র যা দেখে React বুঝতে পারে কোন আইটেমটি নতুন যোগ হয়েছে, ডিলিট হয়েছে বা রি-অর্ডার হয়েছে। লিস্ট অপ্টিমাইজ করার সেরা উপায় হলো ইউনিক কি, React.memo এবং Virtualization ব্যবহার করা।",
      interviewSpeech:
        "React-এর Virtual DOM যখন লিস্টের পরিবর্তন মেলায়, তখন `key` দেখে সে দ্রুত শনাক্ত করে কোন এলিমেন্টটি সরানো বা বদলানো হয়েছে। Array Index কে কি বানালে আইটেম সর্ট বা ডিলিট করার সময় ইনডেক্স বদলে যায়, ফলে React অপ্রয়োজনীয়ভাবে সব আইটেম রি-রেন্ডার করে এবং ভেতরের ইনপুট স্টেট নষ্ট হয়ে যায়। লিস্ট অপ্টিমাইজ করতে আমরা সবসময় ডেটাবেসের ইউনিক `id` ব্যবহার করি, চাইল্ড কম্পোনেন্টকে `React.memo` করি এবং হাজার হাজার ডেটার জন্য ভার্চুয়ালাইজেশন (যেমন `@tanstack/react-virtual`) ব্যবহার করি।",
      deepDive: [
        "**ইনডেক্স ব্যবহার করলে সমস্যা**: প্রথম আইটেম ডিলিট করলে ২য় আইটেমটি ইনডেক্স ০ পেয়ে যায়, যার ফলে React ভাবে ডেটা বদলেছে এবং পুরো লিস্ট রি-রেন্ডার করে।",
        "**ভার্চুয়ালাইজেশন (Windowing)**: ১০,০০০ আইটেম থাকলেও স্ক্রিনে যে কয়টা দেখা যায় (যেমন ২০টা) শুধু সেটুকুই ডমে রেন্ডার রাখা হয়।",
      ],
      commonMistakes: [
        "`key={Math.random()}` ব্যবহার করা। এটি করলে প্রতি রেন্ডারে পুরো ডম ট্রি ডিলিট হয়ে নতুন করে তৈরি হয়।",
      ],
      proTips: [
        "ইন্টারভিউয়ারকে পরিষ্কারভাবে বলুন: 'স্ট্যাটিক আন-চেঞ্জড লিস্টে ইনডেক্স ব্যবহার করা গেলেও ফিল্টারিং বা সর্টিং লিস্টে ইনডেক্স নিষিদ্ধ'।",
      ],
    },
  },

  // 6. React Fiber
  {
    id: "tell-me-about-react-fiber",
    questionNumber: 6,
    question: "Tell me about React Fiber.",
    banglaQuestion: "React Fiber আর্কিটেকচার সম্পর্কে বিস্তারিত বলুন।",
    topic: "React Core",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["React Fiber", "Concurrent React", "Scheduler", "WorkInProgress"],
    english: {
      quickAnswer:
        "React Fiber is the complete rewrite of React's core reconciliation engine introduced in React 16, designed to enable incremental rendering, task prioritization, and concurrency.",
      interviewSpeech:
        "Before React 16, React used the Stack Reconciler, which traversed the component tree synchronously. If the tree was deep, it blocked the browser's main JavaScript thread, causing dropped frames and laggy input responses. Fiber re-architected this by representing each component as a 'Fiber Node'—a unit of work linked via child, sibling, and return pointers in a singly-linked list. This allows React to pause work, yield to the browser for high-priority tasks (like typing or animation), assign priority lanes, and resume or abort low-priority rendering later. This is the foundation of React 18 & 19 Concurrency (useTransition, Suspense).",
      deepDive: [
        "**Stack vs Fiber**: Stack Reconciler was recursive and non-interruptible. Fiber is iterative and cooperative (scheduling units of work).",
        "**Fiber Node Structure**: Contains component type, key, `child`, `sibling`, `return` (parent), `memoizedState` (hooks), and `lanes` (priority).",
        "**Double Buffering (current vs workInProgress)**: React keeps a `current` Fiber tree (rendered on screen) and builds a `workInProgress` tree in memory. On commit, it simply swaps the pointer in O(1) time.",
        "**Priority Lanes**: Urgent updates (clicks, keystrokes) get high-priority lanes; background data transitions get low-priority lanes.",
      ],
      codeSnippet: {
        language: "typescript",
        caption: "Conceptual Fiber Node Linked-List Representation",
        code: `interface FiberNode {
  tag: WorkTag;             // Component type (Function, Class, HostRoot)
  key: null | string;       // Unique key
  stateNode: any;           // Real DOM element or class instance
  
  // Singly Linked-List Pointers:
  child: FiberNode | null;  // First child
  sibling: FiberNode | null;// Next sibling
  return: FiberNode | null; // Parent fiber node
  
  memoizedState: any;       // Linked list of Hooks (useState, useEffect, etc.)
  lanes: Lanes;             // Priority bitmask for Concurrency
  alternate: FiberNode | null; // Pointer to current or workInProgress twin
}`,
      },
      commonMistakes: [
        "Thinking Fiber is an optional plugin; Fiber is the actual internal core engine of React since v16.",
      ],
      proTips: [
        "Emphasize 'Double Buffering' and 'Interruptible Units of Work'—interviewers love these two exact technical phrases.",
      ],
    },
    bangla: {
      quickAnswer:
        "React Fiber হলো React-এর সম্পূর্ণ রি-রাইট করা রিকনসিলিয়েশন ইঞ্জিন, যা রেন্ডারিং কাজকে ছোট ছোট ভাগে ভাগ করে কনকারেন্সি (Concurrency) এবং প্রায়োরিটি-ভিত্তিক নন-ব্লকিং রেন্ডারিং সম্ভব করে।",
      interviewSpeech:
        "React 16-এর আগের 'Stack Reconciler' সম্পূর্ণ সিঙ্ক্রোনাস ছিল। বিশাল ট্রি রেন্ডার করার সময় মেইন থ্রেড ব্লক হয়ে যেত, যার ফলে ইউজার টাইপ বা স্ক্রল করলে ব্রাউজার আটকে থাকত। ফাইবার আর্কিটেকচারে প্রতিটি কম্পোনেন্টকে একটি 'Fiber Node' (কাজের একক) হিসেবে তৈরি করা হয় যা Singly-Linked List দিয়ে একে অপরের সাথে যুক্ত থাকে (`child`, `sibling`, `return`)। এর ফলে React ভারী রেন্ডারকে মাঝপথে পজ (Pause) করে ইউজারের বাটন ক্লিক বা টাইপিংকে আগে প্রাধান্য দিতে পারে এবং পরে আগের কাজ শেষ করতে পারে। এটিই আজকের `useTransition` এবং Suspense-এর ভিত্তি।",
      deepDive: [
        "**ডাবল বাফারিং (Double Buffering)**: স্ক্রিনে যা আছে তা `current` ট্রি, আর ব্যাকগ্রাউন্ডে যা তৈরি হচ্ছে তা `workInProgress` ট্রি। কাজ শেষ হলে পলকের মধ্যে মেমরিতে পয়েন্টার সোয়াপ হয়ে যায়।",
        "**প্রায়োরিটি লেন্স (Priority Lanes)**: জরুরি ইউজার ইন্টারঅ্যাকশন পায় হাই প্রায়োরিটি, আর ব্যাকগ্রাউন্ড ডেটা ফেচিং পায় লো প্রায়োরিটি।",
      ],
      commonMistakes: [
        "ফাইবার কোনো বাহ্যিক লাইব্রেরি নয়, এটি স্বয়ং React-এর ভেতরের কোর আর্কিটেকচার।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Interruptible Work', 'Priority Lanes' এবং 'Double Buffering' শব্দগুলো ব্যবহার করুন।",
      ],
    },
  },

  // 7. CSR, SSR, ISR, SSG
  {
    id: "csr-ssr-isr-ssg",
    questionNumber: 7,
    question: "Explain and compare CSR, SSR, ISR, and SSG.",
    banglaQuestion: "CSR, SSR, ISR এবং SSG-এর বিস্তারিত তুলনা ও পার্থক্য ব্যাখ্যা করুন।",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Rendering Strategies", "CSR", "SSR", "SSG", "ISR", "Next.js"],
    english: {
      quickAnswer:
        "CSR renders HTML in the browser via JavaScript; SSG builds static HTML once at build time; SSR generates fresh HTML on the server per request; ISR updates static pages incrementally in the background without rebuilding.",
      interviewSpeech:
        "These are the four core web rendering paradigms: 1) CSR (Client-Side Rendering) sends an empty HTML shell and renders everything via browser JS. Great for authenticated dashboards, but poor initial SEO and slower First Contentful Paint. 2) SSG (Static Site Generation) pre-renders HTML at build time, serving instantly from CDN edges. Perfect for documentation and marketing pages. 3) SSR (Server-Side Rendering) executes code on the server on every request to generate dynamic HTML. Best for personalized, real-time data feeds with strong SEO. 4) ISR (Incremental Static Regeneration) combines the speed of SSG with the freshness of SSR by revalidating static pages in the background after a specific interval or on-demand via cache tags.",
      deepDive: [
        "**CSR**: Fast subsequent transitions, heavy initial JS bundle, slow TTFB-to-interactive, zero server rendering compute.",
        "**SSG**: Ultimate speed (TTFB ~ 20ms from CDN), but rebuilding 100,000 pages takes hours at build time.",
        "**SSR**: Always fresh, good for dynamic cookies/headers, but server compute costs and higher TTFB.",
        "**ISR**: Serves cached stale page instantly, triggers background re-generation, then swaps in fresh cache. Solves the build-time scalability problem of SSG.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Next.js App Router Equivalent Syntax",
        code: `// 1. SSG: Default in Next.js Server Components (Static)
export async function Page() {
  const res = await fetch("https://api.example.com/posts", { cache: "force-cache" });
  return <PostList data={await res.json()} />;
}

// 2. SSR: Dynamic per-request rendering
export async function SSRPage() {
  const res = await fetch("https://api.example.com/live-stock", { cache: "no-store" });
  return <StockTicker data={await res.json()} />;
}

// 3. ISR: Revalidate every 60 seconds
export async function ISRPage() {
  const res = await fetch("https://api.example.com/products", {
    next: { revalidate: 60, tags: ["products"] }
  });
  return <Products data={await res.json()} />;
}`,
      },
      commonMistakes: [
        "Assuming ISR serves slow pages to users: ISR serves the cached static page instantly, while the rebuild happens asynchronously in the background (Stale-While-Revalidate).",
      ],
      proTips: [
        "Frame your answer around: 'Build Time vs Request Time' and 'CDN Caching vs Server Compute'.",
      ],
    },
    bangla: {
      quickAnswer:
        "CSR ব্রাউজারে জাভাস্ক্রিপ্ট দিয়ে UI বানায়; SSG বিল্ড টাইমে একবার স্ট্যাটিক HTML তৈরি করে; SSR প্রতি রিকোয়েস্টে সার্ভারে তাজা HTML জেনারেট করে; আর ISR পুরো সাইট রি-বিল্ড না করে নির্দিষ্ট সময় পর পর ব্যাকগ্রাউন্ডে স্ট্যাটিক পেজ আপডেট করে।",
      interviewSpeech:
        "ওয়েব রেন্ডারিংয়ের এই ৪টি আর্কিটেকচার হলো: ১) **CSR (Client-Side Rendering)**: ব্রাউজারে একটি খালি HTML আসে এবং জাভাস্ক্রিপ্ট রান হয়ে UI দেখায়। ইন্টারনাল ড্যাশবোর্ডের জন্য ভালো হলেও SEO খারাপ। ২) **SSG (Static Site Generation)**: প্রোডাকশন বিল্ডের সময় সব পেজের HTML তৈরি হয়ে CDN-এ জমা থাকে। এটি সবচেয়ে দ্রুত লোড হয় (ব্লগ বা ল্যান্ডিং পেজে দারুণ)। ৩) **SSR (Server-Side Rendering)**: প্রতিটি ইউজার রিকোয়েস্টে সার্ভারে কোড রান হয়ে লাইভ HTML পাঠায়। রিয়েল-টাইম ডাটা ও SEO-এর জন্য উপযুক্ত। ৪) **ISR (Incremental Static Regeneration)**: SSG-এর মতো সুপারফাস্ট এবং SSR-এর মতো আপ-টু-ডেট। ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পর পেজ রি-জেনারেট করে ক্যাশ আপডেট করে।",
      deepDive: [
        "**CSR**: ড্যাশবোর্ড ও প্রাইভেট অ্যাপের জন্য পারফেক্ট।",
        "**SSG**: সর্বোচ্চ স্পিড এবং কম সার্ভার খরচ। কিন্তু লাখ লাখ পেজ বিল্ড করতে অনেক সময় লাগে।",
        "**ISR**: লাখ লাখ প্রডাক্ট পেজের স্ট্যাটিক ক্যাশ বজায় রেখেও ব্যাকগ্রাউন্ডে ডাটা ফ্রেশ রাখে।",
      ],
      commonMistakes: [
        "মনে করা যে ISR চলাকালীন ইউজার লোডিং ফেস করে—আসলে ইউজার ইনস্ট্যান্ট ক্যাশ পেজ দেখে, পেছনের সার্ভার নিঃশব্দে রি-ভ্যালিডেট করে।",
      ],
      proTips: [
        "তুলনাটি চার্ট বা পয়েন্ট আকারে উপস্থাপন করলে ইন্টারভিউয়ারের কাছে অত্যন্ত গোছানো মনে হবে।",
      ],
    },
  },

  // 8. File Based Routing
  {
    id: "explain-file-based-routing",
    questionNumber: 8,
    question: "Explain file-based routing in Next.js App Router.",
    banglaQuestion: "Next.js App Router-এর File-based Routing কীভাবে কাজ করে?",
    topic: "Next.js App Router",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["Next.js", "App Router", "Routing", "layout.tsx", "page.tsx"],
    english: {
      quickAnswer:
        "In Next.js App Router, the folder structure inside the `app/` directory directly defines the URL path hierarchy, using special reserved filenames for UI segments.",
      interviewSpeech:
        "Instead of writing programmatic route configs like React Router, Next.js uses file-system hierarchy. Nested folders represent URL path segments—for example, `app/dashboard/analytics/page.tsx` maps directly to `/dashboard/analytics`. Within each route segment, Next.js provides special reserved conventions: `page.tsx` makes the route publicly accessible, `layout.tsx` shares persistent UI across sub-routes without unmounting, `loading.tsx` automatically wraps the page in React Suspense, `error.tsx` provides an Error Boundary, and `not-found.tsx` renders custom 404 pages.",
      deepDive: [
        "**Reserved File Conventions**: `page.tsx`, `layout.tsx`, `template.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts` (API handlers).",
        "**Nested Layouts**: Layouts wrap child routes automatically. When navigating between child pages, only the `page.tsx` re-renders; the layout retains its state and scroll position.",
        "**Route Groups**: Folders with parentheses `(marketing)` group files logically without adding to the URL path.",
        "**Private Folders**: Folders prefixed with underscore `_lib` are excluded from routing.",
      ],
      codeSnippet: {
        language: "text",
        caption: "App Router Directory Structure",
        code: `app/
├── layout.tsx         // Root layout (<html> & <body>)
├── page.tsx           // Route: /
├── loading.tsx        // Global loading skeleton (React Suspense)
├── error.tsx          // Global error boundary
├── (auth)/            // Route Group (ignored in URL)
│   ├── login/
│   │   └── page.tsx   // Route: /login
│   └── register/
│       └── page.tsx   // Route: /register
└── products/
    ├── layout.tsx     // Nested layout for /products
    ├── page.tsx       // Route: /products
    └── [id]/
        └── page.tsx   // Route: /products/123 (Dynamic segment)`,
      },
      commonMistakes: [
        "Forgetting to export a default component from `page.tsx`, causing a 404.",
        "Attempting to name custom route files arbitrarily instead of using `page.tsx`.",
      ],
      proTips: [
        "Mention that App Router uses React Server Components by default for all file-based routes.",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js App Router-এ `app` ফোল্ডারের ভেতরের ফোল্ডার স্ট্রাকচার স্বয়ংক্রিয়ভাবে ওয়েবসাইটের URL পাথ তৈরি করে এবং স্পেশাল ফাইলনেম দিয়ে লেআউট, লোডিং ও এরর হ্যান্ডেল করে।",
      interviewSpeech:
        "প্রথাগত React Router-এ কোড দিয়ে রাউট কনফিগার করতে হয়, কিন্তু Next.js-এ ফোল্ডারের নামই হয়ে যায় URL পাথ। যেমন `app/dashboard/settings/page.tsx` স্বয়ংক্রিয়ভাবে `/dashboard/settings` রাউট তৈরি করে। এর বিশেষ ফাইলগুলো হলো: ১) `page.tsx` (রাউটের মূল UI), ২) `layout.tsx` (সাব-পেজে কমন লেআউট যা আনমাউন্ট হয় না), ৩) `loading.tsx` (স্বয়ংক্রিয় Suspense স্কেলেটন), ৪) `error.tsx` (এরর বাউন্ডারি), এবং ৫) `not-found.tsx` (৪০৪ পেজ)।",
      deepDive: [
        "**নেস্টেড লেআউট**: প্যারেন্ট লেআউট তার জায়গায় স্থির থাকে এবং নেভিগেশনে রি-রেন্ডার হয় না, কেবল ভেতরের পেজ পরিবর্তিত হয়।",
        "**রুট গ্রুপিং `(folder)`**: URL অপরিবর্তিত রেখে কোড সুন্দরভাবে অর্গানাইজ করতে ফোল্ডারের নাম প্রথম বন্ধনীতে রাখা হয়।",
      ],
      commonMistakes: [
        "`page.tsx` ফাইলে `default export` করতে ভুলে যাওয়া।",
      ],
      proTips: [
        "বলুন যে App Router-এ সব ফাইল বাই-ডিফল্ট Server Component হিসেবে থাকে।",
      ],
    },
  },

  // 9. Best Case to Use ISR
  {
    id: "best-case-to-use-isr",
    questionNumber: 9,
    question: "What is the best use case for Incremental Static Regeneration (ISR)?",
    banglaQuestion: "Incremental Static Regeneration (ISR) ব্যবহারের সেরা ক্ষেত্র কোনটি?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["ISR", "Caching", "Performance", "E-commerce", "Revalidation"],
    english: {
      quickAnswer:
        "ISR is best suited for large-scale websites with high traffic and semi-frequently updated content, such as e-commerce product catalogs, news portals, and large blog platforms.",
      interviewSpeech:
        "The prime use case for ISR is when you have thousands or millions of pages that need blazing-fast CDN caching (like SSG) but cannot afford hours of build time or stale content. For instance, in an E-commerce platform with 500,000 products: With pure SSG, building the site takes hours. With pure SSR, server costs explode under heavy traffic. With ISR, we statically pre-render the top 1,000 most popular items at build time. When a user requests any other product, Next.js generates and caches it on-demand. When prices change, on-demand revalidation (`revalidateTag('product-123')`) or time-based revalidation updates the static cache instantly in the background without downtime.",
      deepDive: [
        "**E-Commerce Product Pages**: Instant TTFB via CDN, prices/stocks refresh via background revalidation or on-demand webhooks.",
        "**News & Media Publications**: Breaking news or articles updated periodically.",
        "**On-Demand vs Time-based ISR**: Time-based (`revalidate: 3600`) re-checks hourly; On-Demand (`revalidateTag`) triggers immediately when CMS publishes an edit.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "On-Demand Tag Revalidation with ISR",
        code: `// 1. In your product page (app/products/[id]/page.tsx)
export async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(\`https://api.store.com/products/\${id}\`, {
    next: { tags: [\`product-\${id}\`], revalidate: 86400 } // Fallback 24h or instant tag purge
  });
  const product = await res.json();
  return <ProductView product={product} />;
}

// 2. In your CMS Webhook Handler (app/api/revalidate/route.ts)
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { productId, secret } = await req.json();
  if (secret !== process.env.REVALIDATION_SECRET) return Response.json({ error: "Unauthorized" }, { status: 401 });
  
  revalidateTag(\`product-\${productId}\`); // Instantly purges cache for this product
  return Response.json({ revalidated: true });
}`,
      },
      commonMistakes: [
        "Using ISR for personalized user dashboards (user profile, checkout, banking) where content depends on authentication cookies/sessions (use SSR or CSR instead).",
      ],
      proTips: [
        "Always recommend 'On-Demand Tag Revalidation' over simple interval timers for modern headless CMS architectures.",
      ],
    },
    bangla: {
      quickAnswer:
        "লাখ লাখ পেজযুক্ত ই-কমার্স ওয়েবসাইট, নিউজ পোর্টাল বা বড় ব্লগে যেখানে কনটেন্ট দ্রুত CDN থেকে দেখানো দরকার কিন্তু ডেটা মাঝে মাঝে আপডেট হয়—সেখানেই ISR সেরা সমাধান।",
      interviewSpeech:
        "ISR-এর সেরা উদাহরণ হলো ৫ লাখ প্রডাক্ট সম্বলিত ই-কমার্স সাইট। সম্পূর্ণ SSG করলে সাইট বিল্ড হতে ঘণ্টার পর ঘণ্টা সময় লাগবে, আর SSR করলে লাখ লাখ ইউজারের রিকোয়েস্টে ডাটাবেস ও সার্ভারের ওপর প্রচণ্ড চাপ পড়বে। ISR দিয়ে আমরা বিল্ড টাইমে শুধু টপ ১,০০০ প্রডাক্ট বানিয়ে রাখি। বাকি পেজগুলো প্রথমবার কোনো ভিজিটর রিকোয়েস্ট করলে সার্ভার ব্যাকগ্রাউন্ডে বানিয়ে স্ট্যাটিক ক্যাশে সেভ করে নেয়। যখনই অ্যাডমিন দাম বা স্টক আপডেট করে, `revalidateTag` দিয়ে পলকের মধ্যে ক্যাশ রিফ্রেশ করে ফেলা যায়।",
      deepDive: [
        "**ই-কমার্স ও রিয়েল এস্টেট**: সুপারফাস্ট ব্রাউজিং নিশ্চিত করে এবং সিএমএস আপডেটের সাথে সাথে ক্যাশ ফ্রেশ করে।",
        "**টাইম-বেসড বনাম অন-ডিমান্ড**: টাইম-বেসড নির্দিষ্ট সেকেন্ড পর রি-ভ্যালিডেট করে, আর অন-ডিমান্ড সিএমএস ওয়েব হুক পাওয়া মাত্র ক্যাশ আপডেট করে।",
      ],
      commonMistakes: [
        "ইউজার প্রোফাইল বা পার্সোনালাইজড ড্যাশবোর্ডে ISR ব্যবহার করা যাবে না; সেখানে SSR বা ক্লায়েন্ট ফেচিং দরকার।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Stale-While-Revalidate' মেকানিজম এবং 'On-Demand Tag Purging' উল্লেখ করুন।",
      ],
    },
  },

  // 10. Small Data Slow Component Loading
  {
    id: "small-data-slow-component-why",
    questionNumber: 10,
    question: "In a component I'm rendering small data but still the component is loading very slowly. Why?",
    banglaQuestion: "কম্পোনেন্টে অল্প ডেটা রেন্ডার করা সত্ত্বেও কম্পোনেন্ট অনেক স্লো লোড হচ্ছে। এর সম্ভাব্য কারণ কী কী?",
    topic: "Performance & Data",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Performance", "Bottlenecks", "Layout Thrashing", "Main Thread", "Waterfall"],
    english: {
      quickAnswer:
        "Slow loading of small data is usually caused by synchronous blocking computations, waterfall network requests, unmemoized heavy inline transforms, large bundle imports, or layout thrashing in lifecycle hooks.",
      interviewSpeech:
        "When small data renders slowly, the bottleneck is rarely the DOM size—it's almost always JavaScript execution or request waterfalls. The top root causes are: 1) Blocking the Main Thread with heavy synchronous calculations, regex matching, or deep sorting inside the render function instead of `useMemo` or a Web Worker; 2) Waterfall API calls where sequential awaits block execution; 3) Importing massive synchronous libraries (e.g., full lodash or heavy chart engines) on the critical bundle; 4) Layout Thrashing caused by reading DOM layout (`elem.offsetHeight`) right after writing styles in `useEffect`; 5) Uncontrolled cascading re-render loops from an ancestor context provider.",
      deepDive: [
        "**Synchronous Render Computation**: Executing complex O(n²) filters or JSON parsing on every render tick freezes the main UI thread.",
        "**Waterfall Data Fetching**: Await fetch A -> Await fetch B -> Await fetch C sequentially instead of `Promise.all([fetchA(), fetchB()])`.",
        "**Layout Thrashing (Reflows)**: Interleaving DOM reads (`getBoundingClientRect`) and writes (`elem.style.width = ...`) forces immediate synchronous reflows.",
        "**Heavy Dependency Bundle**: Importing a 500KB visualization library synchronously blocks component initialization.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Fixing Synchronous Render Bottlenecks",
        code: `// BAD: Heavy compute runs synchronously on EVERY single render
function SlowComponent({ items }: { items: string[] }) {
  // Heavy CPU work blocks the main thread
  const processed = items.map(heavyCryptoOrMathOperation); 
  return <div>{processed.join(", ")}</div>;
}

// GOOD: Memoized compute + Async dynamic import for heavy modules
const HeavyChart = dynamic(() => import("./HeavyChart"), { ssr: false });

function FastComponent({ items }: { items: string[] }) {
  const processed = useMemo(() => {
    return items.map(heavyCryptoOrMathOperation);
  }, [items]); // Only runs when items actually change

  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyChart data={processed} />
    </Suspense>
  );
}`,
      },
      commonMistakes: [
        "Assuming slow loading is always a slow network issue without checking the Chrome DevTools Performance profiler.",
      ],
      proTips: [
        "Explain how you would debug this: 1) Run Chrome DevTools Performance Profiler to check Long Tasks (>50ms); 2) Check Network tab for sequential waterfall delays.",
      ],
    },
    bangla: {
      quickAnswer:
        "অল্প ডেটাতেও স্লো হওয়ার কারণ হলো মেইন থ্রেড ব্লকিং ক্যালকুলেশন, ওয়াটারফল API রিকোয়েস্ট, ভারী লাইব্রেরি সিঙ্ক্রোনাসলি ইম্পোর্ট করা, লেআউট থ্র্যাশিং অথবা ইনফিনিট রি-রেন্ডার সাইকেল।",
      interviewSpeech:
        "ডেটা কম হলেও কম্পোনেন্ট স্লো হওয়ার মূল কারণগুলো হলো: ১) রেন্ডার ফাংশনের ভেতরে সরাসরি ভারী গাণিতিক হিসাব বা সর্টিং করা (যা `useMemo` ছাড়া প্রতি রেন্ডারে মেইন থ্রেড ফ্রিজ করে); ২) ওয়াটারফল নেটওয়ার্ক কল—অর্থাৎ `Promise.all` ব্যবহার না করে একটার পর একটা `await` কল করা; ৩) বিশাল সাইজের থার্ড-পার্টি লাইব্রেরি (যেমন হেভি চার্ট বা ডেট লাইব্রেরি) ডায়নামিক ইম্পোর্ট ছাড়া সরাসরি লোড করা; ৪) `useEffect`-এ বারবার DOM রিড ও রাইট করে লেআউট থ্র্যাশিং (Layout Thrashing) ঘটানো; এবং ৫) প্যারেন্ট কনটেক্সট থেকে অতিরিক্ত রি-রেন্ডার আসা।",
      deepDive: [
        "**মেইন থ্রেড ব্লকিং**: জাভাস্ক্রিপ্ট সিঙ্গেল থ্রেডেড, তাই রেন্ডারে কোনো লুপ আটকে থাকলে পুরো UI ফ্রিজ হয়ে যায়।",
        "**ওয়াটারফল সমাধান**: `Promise.all()` দিয়ে প্যারালাল ডেটা ফেচিং করতে হবে।",
        "**ডায়নামিক ইম্পোর্ট**: `next/dynamic` বা `React.lazy` দিয়ে ভারী কম্পোনেন্ট অন-ডিমান্ড লোড করা উচিত।",
      ],
      commonMistakes: [
        "মনে করা যে কম ডেটা থাকলে কোড অপ্টিমাইজেশন দরকার নেই।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'আমি প্রথমে Chrome DevTools Performance Tab দিয়ে Long Tasks (>50ms) এবং রেন্ডার টাইমলাইন পরীক্ষা করব'।",
      ],
    },
  },

  // 11. Form Resets After Submit
  {
    id: "form-resets-after-submit-solve",
    questionNumber: 11,
    question: "After submitting a form it resets or reloads the page. How do you solve it?",
    banglaQuestion: "ফর্ম সাবমিট করার পর পেজ রিলোড হয়ে যায় বা ডেটা রিসেট হয়ে যায়। এটি কীভাবে সমাধান করবেন?",
    topic: "React Core",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["Forms", "e.preventDefault", "Event Handling", "Server Actions", "State Preservation"],
    english: {
      quickAnswer:
        "Default HTML form submission triggers a full browser page refresh. In React, we prevent this by calling `e.preventDefault()` in the onSubmit handler or using React 19 Server Actions.",
      interviewSpeech:
        "By default, when a `<form>` is submitted, the browser executes its native HTTP POST action and reloads the page, which clears all JavaScript memory and resets component states. In traditional React SPA architecture, we solve this by receiving the event object in the `onSubmit` handler and immediately executing `e.preventDefault()`. Then, we handle validation and asynchronous API submission via JavaScript without losing application state. In modern Next.js 15 and React 19, we can use Server Actions with `useActionState` which natively prevents hard reloads while preserving form state and displaying pending transitions.",
      deepDive: [
        "**Root Cause**: Native HTML behavior navigates the browser to the form's `action` URL.",
        "**Traditional React SPA Fix**: `e.preventDefault()` prevents browser navigation, allowing fetch/axios calls.",
        "**React 19 / Next.js Server Actions**: `<form action={serverAction}>` with `useActionState` manages state, optimistic updates, and server validation natively without page reload.",
        "**Draft Preservation**: For multi-step forms, save form progress into `localStorage` or URL query params to survive accidental user refreshes.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Traditional React vs Modern React 19 Server Action Form",
        code: `// Approach 1: Traditional React SPA with e.preventDefault()
export function TraditionalForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents default browser reload & reset
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

// Approach 2: Next.js / React 19 Server Action
async function subscribeAction(prevState: any, formData: FormData) {
  "use server";
  const email = formData.get("email");
  // Database mutation...
  return { success: true, email };
}`,
      },
      commonMistakes: [
        "Placing `<button onClick={handleSave}>` inside a form without `type='button'`, causing it to trigger default form submission.",
      ],
      proTips: [
        "Highlight both the classic `e.preventDefault()` and the modern React 19 / Next.js Server Actions with `useActionState`.",
      ],
    },
    bangla: {
      quickAnswer:
        "ব্রাউজারের ডিফল্ট আচরণ হলো ফর্ম সাবমিটে পুরো পেজ রিলোড করা; এটি আটকাতে `onSubmit` ইভেন্টে `e.preventDefault()` কল করতে হয় অথবা React 19 Server Action ব্যবহার করতে হয়।",
      interviewSpeech:
        "HTML ফর্মের স্বাভাবিক ধর্ম হলো সাবমিট বাটনে ক্লিক করলে পেজটি রিলোড বা রিফ্রেশ হয়ে নতুন পেজে চলে যায়, ফলে মেমরির সব স্টেট রিসেট হয়ে যায়। React-এ এটি সমাধান করতে আমরা ফর্মের `onSubmit` হ্যান্ডলারে ইভেন্ট অবজেক্ট ধরে `e.preventDefault()` চালাই। এর ফলে ব্রাউজারের ডিফল্ট রিলোড বন্ধ হয় এবং আমরা অ্যাসিনক্রোনাসলি API কল করতে পারি। আর Next.js বা React 19-এ ফর্ম অ্যাকশন (`action={formAction}`) এবং `useActionState` ব্যবহার করলে কোনো পেজ রিলোড ছাড়াই স্বয়ংক্রিয়ভাবে ডাটা হ্যান্ডেল করা যায়।",
      deepDive: [
        "**`e.preventDefault()`**: ব্রাউজারের ডিফল্ট সাবমিট বন্ধ করে সম্পূর্ণ কন্ট্রোল জাভাস্ক্রিপ্টের হাতে দেয়।",
        "**বাটন টাইপ ভুল**: ফর্মের ভেতরের যেকোনো সাধারণ বাটনে `type='button'` না দিলে ব্রাউজার তাকে সাবমিট বাটন ভেবে রিলোড করায়।",
      ],
      commonMistakes: [
        "ফর্মের ভেতরের কোনো বাটনকে `type='button'` না দেওয়া, যার ফলে ক্লিক করলেই ফর্ম সাবমিট হয়ে যেত।",
      ],
      proTips: [
        "বলুন যে React 19-এ Server Actions ব্যবহার করলে প্রগ্রেসিভ এনহ্যান্সমেন্ট বজায় থাকে।",
      ],
    },
  },

  // 12. Find Re-render Issue in React & Next
  {
    id: "find-re-render-issue-react-next",
    questionNumber: 12,
    question: "How do you detect and debug unnecessary re-render issues in React and Next.js?",
    banglaQuestion: "React এবং Next.js-এ অপ্রয়োজনীয় Re-render সমস্যা কীভাবে খুঁজে বের করবেন এবং সমাধান করবেন?",
    topic: "Performance & Data",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["React DevTools", "Profiler", "why-did-you-render", "React Scan", "Performance"],
    english: {
      quickAnswer:
        "We identify re-render issues using React DevTools Profiler ('Highlight updates' & flamegraphs), React Scan, the `why-did-you-render` library, and custom `useRef` comparison logs.",
      interviewSpeech:
        "To debug re-render bottlenecks: 1) Enable 'Highlight updates when components render' in React DevTools to visually spot flashing components on interaction. 2) Record a session with the React DevTools Profiler to examine the flamegraph and read 'Why did this render?'—which shows exactly which changed prop or state triggered the render. 3) In modern development, we use tools like `React Scan` or `@welldone-software/why-did-you-render` in development mode, which automatically logs notifications when identical props trigger renders due to unstable object or function references. Once found, we fix them with `useMemo`, `useCallback`, state colocation, or context splitting.",
      deepDive: [
        "**React DevTools Profiler**: Shows render durations, commit phases, and exact prop/state changes.",
        "**React Scan (Million.js ecosystem)**: Modern zero-config tool that highlights component re-render frequency and performance hotspots directly in the browser.",
        "**Why-Did-You-Render (WDYR)**: Monkey-patches React to alert when a component re-rendered with identical values (`props.user !== prevProps.user` by reference only).",
        "**Common Fixes**: Wrap inline objects in `useMemo`, inline callbacks in `useCallback`, move state closer to where it's used (Colocation), or split oversized Context providers.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Custom Hook to Log Changed Props in Development",
        code: `// Quick helper to debug what prop caused a re-render
function useWhyDidYouUpdate(name: string, props: Record<string, any>) {
  const prevProps = useRef<Record<string, any>>({});

  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changesObj: Record<string, { from: any; to: any }> = {};

      allKeys.forEach((key) => {
        if (prevProps.current[key] !== props[key]) {
          changesObj[key] = { from: prevProps.current[key], to: props[key] };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log(\`[WhyUpdate] \${name} re-rendered because:\`, changesObj);
      }
    }
    prevProps.current = props;
  });
}`,
      },
      commonMistakes: [
        "Prematurely wrapping everything in `useMemo` and `useCallback` before actually measuring whether re-renders cause noticeable performance lag.",
      ],
      proTips: [
        "Mention 'React Scan' alongside 'React DevTools Profiler' to show you are up to date with the latest 2026 developer tooling.",
      ],
    },
    bangla: {
      quickAnswer:
        "React DevTools Profiler ('Highlight updates' অপশন চালু করে), React Scan টুল, `why-did-you-render` লাইব্রেরি এবং কাস্টম প্রপস লগার দিয়ে রি-রেন্ডার সমস্যা শনাক্ত করা হয়।",
      interviewSpeech:
        "অপ্রয়োজনীয় রি-রেন্ডার ডিবাগ করার পদ্ধতি: ১) **React DevTools**-এর সেটিংসে গিয়ে 'Highlight updates when components render' অন করলে স্ক্রিনে দেখা যায় কোন কোন কম্পোনেন্ট অনর্থক ফ্ল্যাশ করছে। ২) **Profiler Tab**-এ রেকর্ডিং চালিয়ে Flamegraph দেখলে বোঝা যায় কোন স্টেট বা প্রপস পরিবর্তনের কারণে কম্পোনেন্টটি রি-রেন্ডার হয়েছে। ৩) **React Scan** বা `why-did-you-render` লাইব্রেরি দিয়ে কনসোলে সরাসরি দেখা যায় অবজেক্টের মেমরি রেফারেন্স অমিলের কারণে কোন কম্পোনেন্ট বারবার রান হচ্ছে। সমস্যা শনাক্ত হলে `useMemo`, `useCallback` বা State Colocation দিয়ে সমাধান করি।",
      deepDive: [
        "**React DevTools Profiler**: কোন রেন্ডারে কত মিলিসেকেন্ড লাগল এবং কোন প্রপস বদলাল তা সুস্পষ্ট দেখায়।",
        "**রেফারেন্স প্রবলেম**: `{}` বা `() => {}` ইনলাইনে লিখলে প্রতিবার নতুন রেফারেন্স তৈরি হয়ে রি-রেন্ডার ঘটায়।",
        "**Context Splitting**: বিশাল গ্লোবাল কনটেক্সট ভেঙে ছোট ছোট কনটেক্সট বানালে অপ্রয়োজনীয় চাইল্ড রেন্ডার বন্ধ হয়।",
      ],
      commonMistakes: [
        "প্রোফাইলার দিয়ে না মেপেই আন্দাজে সব জায়গায় `useMemo` বসানো।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'আমি প্রথমে মেজার (Measure) করি Profiler দিয়ে, তারপর প্রবলেম এরিয়াতে ফোকাসড অপ্টিমাইজেশন করি'।",
      ],
    },
  },

  // 13. When to Lift State Up & When to Avoid
  {
    id: "when-to-lift-state-up-avoid",
    questionNumber: 13,
    question: "When should we lift state up, and when should we avoid it?",
    banglaQuestion: "কখন State ওপরে (Lift State Up) উঠানো উচিত এবং কখন এটি এড়িয়ে চলা উচিত?",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["State Management", "Lifting State Up", "Architecture", "Colocation"],
    english: {
      quickAnswer:
        "Lift state up when two or more sibling components need to share or synchronize the same data. Avoid lifting state up when the data is only used locally by a single subtree, as lifting causes unnecessary parent and sibling re-renders.",
      interviewSpeech:
        "State should live as close to where it is used as possible—a principle known as State Colocation. We MUST lift state up to the closest common ancestor when multiple sibling components need to read or update the same piece of data (for example, a filter sidebar and a product grid). However, we should AVOID lifting state up if it represents isolated, transient UI state (like an accordion toggle, input focus, or hover tooltip). Lifting local state to a high-level parent forces that parent and all of its unrelated children to re-render on every micro-interaction, destroying performance.",
      deepDive: [
        "**When to Lift**: Synchronized sibling widgets (e.g., Currency Converter inputs, Cart Counter in header + Cart page).",
        "**When to Avoid**: Isolated UI toggles, text input keystroke state, modal open/close states that only affect one modal.",
        "**Alternative Solutions**: If lifting creates massive prop drilling, use a focused Context, Zustand store, or pass children as JSX (`composition`).",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Proper State Colocation vs Unnecessary Lifting",
        code: `// BAD: Lifting input typing state into page parent causes ENTIRE dashboard to re-render on every keystroke
export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState(""); // Bad placement
  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <HeavyChart /> {/* HeavyChart re-renders on every letter typed! */}
    </div>
  );
}

// GOOD: Colocate search state inside SearchBar or use URL SearchParams with debounce
export function SearchBar() {
  const [localTerm, setLocalTerm] = useState(""); // Colocated local state
  return <input value={localTerm} onChange={(e) => setLocalTerm(e.target.value)} />;
}`,
      },
      commonMistakes: [
        "Hoisting all state to the root page or global store by default, resulting in bloated re-render cascades across the entire app.",
      ],
      proTips: [
        "Use the term 'State Colocation' (keeping state as local as possible) to demonstrate solid React architectural mastery.",
      ],
    },
    bangla: {
      quickAnswer:
        "যখন একাধিক সিবলিং (পাশাপাশি) কম্পোনেন্টের মধ্যে একই ডেটা শেয়ার বা সিঙ্ক করার প্রয়োজন হয়, তখন স্টেট ওপরে তুলতে হয়। কিন্তু শুধুমাত্র কোনো একটি কম্পোনেন্টের নিজস্ব কাজের জন্য স্টেট ওপরে তুললে পুরো প্যারেন্ট ও সিবলিং অনর্থক রি-রেন্ডার হবে, তাই তা এড়ানো উচিত।",
      interviewSpeech:
        "স্টেট ম্যানেজমেন্টের সেরা নিয়ম হলো 'State Colocation'—অর্থাৎ স্টেটকে ঠিক সেখানেই রাখা যেখানে এটি ব্যবহৃত হয়। যখন দুটি সিবলিং কম্পোনেন্টের একই তথ্যের প্রয়োজন হয় (যেমন: ফিল্টার বার এবং প্রডাক্ট লিস্ট), তখন স্টেটটিকে তাদের কমন প্যারেন্টে Lift Up করতে হয়। কিন্তু কোনো লোকাল ইন্টারঅ্যাকশনের স্টেট (যেমন ইনপুটে টাইপিং, অ্যাকর্ডিয়ন ওপেন/ক্লোজ) প্যারেন্টে তোলা উচিত নয়। কারণ এতে প্রতিটি কী-স্ট্রোকে পুরো ড্যাশবোর্ড ও সব চাইল্ড কম্পোনেন্ট বারবার রি-রেন্ডার হয়ে পারফরম্যান্স ড্রপ করবে।",
      deepDive: [
        "**কখন ওপরে তুলবেন**: যখন দুটি আলাদা কম্পোনেন্ট একে অপরের স্টেট অনুযায়ী কাজ করবে।",
        "**কখন তুলবেন না**: লোকাল ডায়ালগ, টুলটিপ, ড্রপডাউন বা ইনপুট ফোকাস স্টেট।",
        "**প্রপ ড্রিলিং এড়াতে**: একাধিক লেয়ার পার করতে হলে Zustand বা React Context ব্যবহার করা যায়।",
      ],
      commonMistakes: [
        "সব স্টেট গ্লোবাল স্টোরে রেখে পুরো অ্যাপকে ধীরগতির করে ফেলা।",
      ],
      proTips: [
        "ইন্টারভিউতে 'State Colocation' টার্মটি ব্যবহার করুন।",
      ],
    },
  },

  // 14. useMemo vs useCallback
  {
    id: "difference-usememo-usecallback",
    questionNumber: 14,
    question: "What is the difference between useMemo and useCallback?",
    banglaQuestion: "useMemo এবং useCallback-এর মধ্যে মূল পার্থক্য কী?",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["useMemo", "useCallback", "Hooks", "Optimization", "Memoization"],
    english: {
      quickAnswer:
        "`useMemo` caches the RESULT of a computation, while `useCallback` caches the FUNCTION DEFINITION instance itself between renders.",
      interviewSpeech:
        "`useMemo` and `useCallback` are performance optimization hooks designed to prevent unnecessary recalculations and re-renders. `useMemo` executes a factory function and memoizes its returned value—it only recalculates when dependencies change. It is ideal for expensive calculations like filtering or sorting large datasets. `useCallback`, on the other hand, memoizes the function definition itself. In JavaScript, a new function reference is created on every render. If we pass a callback function to a memoized child component (`React.memo`), the child will still re-render unless the callback reference is stabilized using `useCallback`.",
      deepDive: [
        "**Syntax Equivalence**: `useCallback(fn, deps)` is syntactically equivalent to `useMemo(() => fn, deps)`.",
        "**useMemo Use Case**: Memoizing expensive math, filtering 1,000+ items, or keeping stable object references in dependency arrays.",
        "**useCallback Use Case**: Stabilizing callback props passed to `React.memo` components, or functions used inside `useEffect` dependency arrays.",
        "**Cost of Memoization**: Both hooks have overhead (memory allocation for dependency arrays and checks). Do not use them on trivial primitive operations.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "useMemo vs useCallback in Action",
        code: `export function ProductDashboard({ products, filterQuery }: Props) {
  // 1. useMemo: Caches the COMPUTED RESULT (Array)
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) => p.title.toLowerCase().includes(filterQuery.toLowerCase()));
  }, [products, filterQuery]); // Only recalculates when products or query changes

  // 2. useCallback: Caches the FUNCTION REFERENCE
  const handleAddToCart = useCallback((productId: string) => {
    console.log("Added to cart:", productId);
  }, []); // Function reference stays identical across re-renders

  return <ProductList items={filteredProducts} onAdd={handleAddToCart} />;
}`,
      },
      commonMistakes: [
        "Using `useCallback` without wrapping the receiving child component in `React.memo`—if the child isn't memoized, it re-renders anyway!",
      ],
      proTips: [
        "Mention that `useCallback(fn, deps)` is simply syntactic sugar for `useMemo(() => fn, deps)`.",
      ],
    },
    bangla: {
      quickAnswer:
        "`useMemo` কোনো ভারী হিসাবের চূড়ান্ত ফলাফল (Value) ক্যাশ করে রাখে, আর `useCallback` একটি ফাংশনের মেমরি রেফারেন্স (Function Instance) ক্যাশ করে রাখে।",
      interviewSpeech:
        "`useMemo` এবং `useCallback` দুটিই রেন্ডার অপ্টিমাইজেশনের হুক। `useMemo` দিয়ে আমরা কোনো জটিল বা ভারী ক্যালকুলেশনের রিটার্ন করা ভ্যালু মেমরিতে ধরে রাখি, যাতে ডিপেন্ডেন্সি না বদলালে প্রতি রেন্ডারে পুনরায় হিসাব করতে না হয় (যেমন বিশাল লিস্ট ফিল্টারিং)। আর `useCallback` দিয়ে আমরা কোনো ফাংশনের রেফারেন্স স্থির রাখি। জাভাস্ক্রিপ্টে প্রতি রেন্ডারে নতুন ফাংশন অবজেক্ট তৈরি হয়; কোনো চাইল্ড কম্পোনেন্টকে `React.memo` করা থাকলেও নতুন ফাংশন পাস করলে সে রি-রেন্ডার হয়ে যায়। সেই অপ্রয়োজনীয় রি-রেন্ডার আটকাতে `useCallback` ব্যবহার করা হয়।",
      deepDive: [
        "**useMemo**: ভ্যালু ক্যাশ করে (যেমন অ্যারে, অবজেক্ট, বড় হিসাব)।",
        "**useCallback**: ফাংশন রেফারেন্স ক্যাশ করে (যেমন ইভেন্ট হ্যান্ডলার)।",
        "**সম্পর্ক**: `useCallback(fn, deps)` আসলে `useMemo(() => fn, deps)`-এর একটি শর্টকাট।",
      ],
      commonMistakes: [
        "চাইল্ড কম্পোনেন্টকে `React.memo` না করে শুধু প্যারেন্টে `useCallback` ব্যবহার করা। চাইল্ড মেমোইজড না থাকলে `useCallback` দিয়ে লাভ হয় না।",
      ],
      proTips: [
        "সহজ কথায় বলুন: 'useMemo রিটার্ন করে একটি মেমোইজড ভ্যালু, আর useCallback রিটার্ন করে একটি মেমোইজড ফাংশন'।",
      ],
    },
  },

  // 15. Fetch Data Directly Inside Server Component
  {
    id: "fetch-data-directly-server-component",
    questionNumber: 15,
    question: "What happens when I fetch data directly inside a Server Component in Next.js?",
    banglaQuestion: "Next.js-এ Server Component-এর ভেতরে সরাসরি ডেটা ফেচ করলে কী ঘটে?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Server Components", "RSC", "Data Fetching", "Security", "Streaming"],
    english: {
      quickAnswer:
        "The async function executes directly on the Node.js/Edge server runtime, fetches data close to the database with zero client JavaScript, never exposes secrets/tokens to the browser, and streams HTML + RSC Payload to the client.",
      interviewSpeech:
        "In Next.js App Router, Server Components can be written as native async functions. When data is fetched directly inside a Server Component: 1) The code executes exclusively on the server (Node.js or Edge runtime). 2) Zero JavaScript for data fetching or data-fetching libraries (like Axios or SWR) is sent to the client bundle, drastically reducing bundle size. 3) Database credentials, API keys, and environment variables stay 100% secure on the server. 4) Next.js automatically dedupes identical `fetch` requests across the component tree during the render. 5) The server renders the component into HTML and an RSC JSON Payload, streaming it to the browser with zero client-side waterfall latency.",
      deepDive: [
        "**Zero Client Bundle Overhead**: Libraries used on the server (Prisma, pg, SDKs) never reach the browser.",
        "**Direct DB Access**: You can query databases directly (`await db.users.findMany()`) without needing an intermediary API route.",
        "**Colocation with Streaming**: Wrapping Server Component fetches in React `<Suspense>` allows the rest of the page to load instantly while data streams in.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Direct Server-Side Data Fetching in Async RSC",
        code: `// app/users/page.tsx - Server Component (Async by default)
import { db } from "@/lib/db"; // Direct Database Client!

export default async function UsersPage() {
  // Executes exclusively on the server!
  // No API routes needed, DB credentials never leak to client bundle.
  const users = await db.user.findMany({
    where: { active: true },
    select: { id: true, name: true, email: true }
  });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Active Users ({users.length})</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Attempting to use `useState`, `useEffect`, or `onClick` handlers directly in an async Server Component (those require `'use client'`).",
      ],
      proTips: [
        "Emphasize: 'Colocating data fetching directly inside Server Components eliminates client-server waterfalls and shrinks client bundle size to zero'.",
      ],
    },
    bangla: {
      quickAnswer:
        "কোডটি সম্পূর্ণ সার্ভারে (Node.js/Edge) এক্সিকিউট হয়, সরাসরি ডাটাবেস এক্সেস করতে পারে, ক্লায়েন্টে কোনো জাভাস্ক্রিপ্ট বান্ডেল পাঠায় না এবং ব্রাউজারে রেন্ডার করা HTML ও RSC পেলোড স্ট্রিম করে।",
      interviewSpeech:
        "Next.js App Router-এ Server Component-এ সরাসরি `async/await` দিয়ে ডেটা ফেচ করলে: ১) কোডটি শুধুই সার্ভারে রান হয়, ফলে ডাটাবেস পাসওয়ার্ড বা সিক্রেট API কী ব্রাউজারে ফাঁস হওয়ার কোনো ভয় থাকে না। ২) ব্রাউজারে Axios বা ডাটা ফেচিং লাইব্রেরির কোনো জাভাস্ক্রিপ্ট বান্ডেল পাঠাতে হয় না (০ কিলোবাইট বান্ডেল সাইজ)। ৩) ইন্টারমিডিয়ারি API রুট ছাড়াই সরাসরি Prisma বা ORM দিয়ে ডাটাবেস কুয়েরি করা যায়। ৪) Next.js একই রেন্ডারে একই API রিকোয়েস্ট একাধিকবার হলে স্বয়ংক্রিয়ভাবে ডিডুপ্লিকেট (Deduplicate) করে। ৫) `<Suspense>` ব্যবহার করে পেজের বাকি অংশ তাৎক্ষণিক দেখিয়ে ডেটা অংশটুকু সার্ভার থেকে স্ট্রিমিং করা যায়।",
      deepDive: [
        "**নিরাপত্তা**: ডাটাবেস সিক্রেট বা টোকেন সবসময় সার্ভারে সুরক্ষিত থাকে।",
        "**জিরো ক্লায়েন্ট বান্ডেল**: ক্লায়েন্টে শুধু ফাইনাল HTML এবং লাইটওয়েট RSC JSON যায়।",
        "**পারফরম্যান্স**: সার্ভার ও ডাটাবেসের মধ্যে লেটেন্সি কম থাকায় ফেচিং অনেক দ্রুত হয়।",
      ],
      commonMistakes: [
        "সার্ভার কম্পোনেন্টে `onClick` বা `useState` ব্যবহার করার চেষ্টা করা (ইন্টারঅ্যাকশনের জন্য চাইল্ড কম্পোনেন্টে `'use client'` ব্যবহার করতে হবে)।",
      ],
      proTips: [
        "ইন্টারভিউতে 'RSC Payload' এবং 'Zero Client Bundle' শব্দগুলো স্পষ্টভাবে উল্লেখ করুন।",
      ],
    },
  },

  // 16. How Next.js Caches Server Data
  {
    id: "how-nextjs-caches-server-data",
    questionNumber: 16,
    question: "How does Next.js cache server data?",
    banglaQuestion: "Next.js সার্ভার ডেটা কীভাবে ক্যাশ (Cache) করে?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Next.js Caching", "Request Memoization", "Data Cache", "Full Route Cache", "Router Cache"],
    english: {
      quickAnswer:
        "Next.js utilizes a 4-tier caching architecture: Request Memoization (per-render React cache), Data Cache (persistent across requests/deployments), Full Route Cache (static HTML/RSC on server), and Router Cache (client-side in-memory).",
      interviewSpeech:
        "Next.js App Router implements a multi-level caching system: 1) **Request Memoization**: Deduplicates identical GET `fetch` calls with the same URL and options across the React component tree during a single render pass. 2) **Data Cache**: A persistent server-side cache that stores fetched data across multiple requests and serverless invocations until invalidated by time (`revalidate: 60`) or tags (`revalidateTag`). 3) **Full Route Cache**: Automatically renders and caches the static HTML and RSC payload of static routes on the server during build or ISR revalidation. 4) **Router Cache**: In-memory client-side cache in the browser that stores visited and prefetched route segments for instant back/forward navigation.",
      deepDive: [
        "**Request Memoization**: React lifecycle level (temporary memory for 1 render).",
        "**Data Cache**: Next.js HTTP server/KV store level (persistent across requests).",
        "**Full Route Cache**: Server-side page snapshot (HTML + RSC payload).",
        "**Client Router Cache**: Browser session memory (instant client transitions).",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Configuring the Data Cache & Revalidation",
        code: `// 1. Data Cache with 1-hour time-based revalidation
const res1 = await fetch("https://api.example.com/data", {
  next: { revalidate: 3600 } 
});

// 2. Data Cache with Cache Tag for on-demand invalidation
const res2 = await fetch("https://api.example.com/products", {
  next: { tags: ["products-list"] }
});

// 3. Opt-out of Data Cache (Always fresh per request)
const res3 = await fetch("https://api.example.com/live-feed", {
  cache: "no-store" 
});`,
      },
      commonMistakes: [
        "Confusing 'Request Memoization' (which lasts only for a single request's render tree) with 'Data Cache' (which persists across multiple user requests).",
      ],
      proTips: [
        "Summarize the 4 levels cleanly: 1. Request Memoization, 2. Data Cache, 3. Full Route Cache, 4. Router Cache.",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js ৪টি স্তরে সার্ভার ডেটা ক্যাশ করে: Request Memoization (একক রেন্ডারে ডুপ্লিকেট রোধ), Data Cache (রিকোয়েস্টের বাইরেও স্থায়ী ক্যাশ), Full Route Cache (স্ট্যাটিক HTML/RSC সার্ভার ক্যাশ), এবং Router Cache (ব্রাউজার মেমরি ক্যাশ)।",
      interviewSpeech:
        "Next.js App Router-এর ক্যাশিং আর্কিটেকচার ৪টি ধাপে কাজ করে: ১) **Request Memoization**: একই পেজে ৩টি আলাদা কম্পোনেন্ট একই `fetch()` কল করলে React প্রথম কলের রেজাল্ট মেমোইজ করে বাকি ২টিতে পাঠিয়ে দেয়, বাড়তি নেটওয়ার্ক কল করে না। ২) **Data Cache**: সার্ভারের স্থায়ী ক্যাশ যা একাধিক ইউজারের রিকোয়েস্টেও ডেটা সেভ রাখে এবং `revalidateTag` বা টাইম শেষ না হওয়া পর্যন্ত ডাটাবেস কল বাঁচায়। ৩) **Full Route Cache**: সম্পূর্ণ স্ট্যাটিক পেজের HTML ও RSC সার্ভারে ক্যাশ করে রাখা। ৪) **Router Cache**: ইউজারের ব্রাউজার মেমরিতে প্রিফেচ করা পেজ সেভ রাখা, যাতে ব্যাক/ফরোয়ার্ড ক্লিকে তাত্ক্ষণিক পেজ বদলে যায়।",
      deepDive: [
        "**Request Memoization**: শুধু একটি রিকোয়েস্টের জীবনকালে মেমরিতে থাকে।",
        "**Data Cache**: সার্ভার রিস্টার্ট হলেও পারসিস্ট করতে পারে।",
        "**ইনভ্যালিডেশন**: `revalidatePath()` বা `revalidateTag()` দিয়ে যেকোনো সময় ক্যাশ ক্লিয়ার করা যায়।",
      ],
      commonMistakes: [
        "মনে করা যে ক্যাশ শুধু ব্রাউজারেই হয়; Next.js-এর অধিকাংশ শক্তিশালী ক্যাশ সার্ভার সাইডে থাকে।",
      ],
      proTips: [
        "ইন্টারভিউতে ৪টি লেয়ারের নাম ক্রমানুসারে বললে পরীক্ষক আপনাকে সিনিয়র লেভেলের ডেভেলপার হিসেবে বিবেচনা করবেন।",
      ],
    },
  },

  // 17. Optimize Heavy Chart in Next.js
  {
    id: "optimize-heavy-chart-nextjs",
    questionNumber: 17,
    question: "How do you optimize heavy charts and data visualizations in Next.js?",
    banglaQuestion: "Next.js-এ ভারী চার্ট (Heavy Charts) এবং ডেটা ভিজ্যুয়ালাইজেশন কীভাবে অপ্টিমাইজ করবেন?",
    topic: "Performance & Data",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Charts", "Performance", "next/dynamic", "Canvas", "Web Workers"],
    english: {
      quickAnswer:
        "We optimize heavy charts using Next.js Dynamic Imports (`next/dynamic` with `ssr: false`), Canvas/WebGL rendering instead of heavy SVG DOM trees, data downsampling (LOD), and Web Workers for data processing.",
      interviewSpeech:
        "Heavy chart libraries (like Chart.js, Recharts, or ECharts) often add 200KB+ of JavaScript and render thousands of SVG DOM nodes that cause severe frame drops. We optimize them using 4 core techniques: 1) **Code Splitting & Lazy Loading**: Load the chart asynchronously using `next/dynamic(() => import(...), { ssr: false })` with a skeleton fallback so the initial page bundle remains tiny and TTFB stays lightning fast. 2) **Canvas/WebGL over SVG**: For datasets with >1,000 points, avoid SVG DOM nodes; use Canvas or WebGL (e.g., ECharts Canvas mode or Deck.gl) to render on a single GPU-accelerated surface. 3) **Data Downsampling & Aggregation**: Never send 100,000 raw points to the browser; aggregate or downsample data on the server. 4) **Web Workers**: Offload heavy JSON parsing or mathematical smoothing to a background Web Worker so the main UI thread never stutters.",
      deepDive: [
        "**next/dynamic with ssr: false**: Bypasses server-side rendering of window-dependent canvas logic and cuts initial JS bundle size.",
        "**DOM Nodes vs Canvas**: 10,000 SVG elements choke the browser DOM engine; 1 `<canvas>` element draws 100,000 points effortlessly via GPU.",
        "**Viewport Intersection**: Only load and render the chart when it scrolls into the user's viewport using `IntersectionObserver`.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Lazy Loading Heavy Chart with Dynamic Import & Skeleton",
        code: `import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import the heavy client-only chart module
const HeavyAnalyticsChart = dynamic(
  () => import("@/components/charts/AnalyticsChart"),
  {
    ssr: false, // Prevents loading heavy chart bundle on server & initial HTML
    loading: () => <Skeleton className="h-80 w-full rounded-xl" /> // Instant skeleton
  }
);

export function AnalyticsSection({ data }: { data: ChartDataPoint[] }) {
  return (
    <div className="p-4 border rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Traffic Analytics</h2>
      <HeavyAnalyticsChart data={data} />
    </div>
  );
}`,
      },
      commonMistakes: [
        "Importing heavy chart libraries synchronously at the top of a root page, bloating the First Load JS for all users.",
        "Rendering tens of thousands of SVG `<circle>` and `<path>` DOM nodes instead of a single Canvas element.",
      ],
      proTips: [
        "Mention 'Canvas/WebGL rendering over SVG DOM nodes for 1,000+ data points' to show deep visualization domain expertise.",
      ],
    },
    bangla: {
      quickAnswer:
        "ভারী চার্ট অপ্টিমাইজ করতে `next/dynamic` দিয়ে `ssr: false` করে লেজি লোড করা, হাজার হাজার SVG নোডের বদলে Canvas/WebGL ব্যবহার করা, এবং সার্ভার বা Web Worker-এ ডেটা ডাউনস্যাম্পলিং করা উচিত।",
      interviewSpeech:
        "Chart.js বা Recharts-এর মতো লাইব্রেরিগুলো বান্ডেল সাইজ অনেক বাড়িয়ে দেয় এবং হাজার হাজার SVG এলিমেন্ট তৈরি করে ব্রাউজার স্লো করে দেয়। অপ্টিমাইজেশনের প্রধান ধাপগুলো হলো: ১) **`next/dynamic` লেজি লোডিং**: `{ ssr: false }` দিয়ে চার্ট মডিউলটি আলাদা বান্ডেলে ভাগ করে অন-ডিমান্ড লোড করা, যাতে মূল পেজ লোডিংয়ে কোনো ল্যাগ না হয়। ২) **SVG বনাম Canvas/WebGL**: হাজার হাজার ডেটা পয়েন্ট থাকলে SVG দিয়ে ডম ভারী না করে Canvas মোড ব্যবহার করা (যা GPU দিয়ে এক সেকেন্ডে লাখ পয়েন্ট আঁকতে পারে)। ৩) **ডেটা ডাউনস্যাম্পলিং**: ক্লায়েন্টে লাখ লাখ কাঁচা ডেটা না পাঠিয়ে সার্ভারেই প্রয়োজনীয় রেঞ্জ বা গড় হিসাব করে পাঠানো। ৪) **Web Worker**: জটিল গাণিতিক ডেটা প্রসেসিং ব্যাকগ্রাউন্ড থ্রেডে চালানো।",
      deepDive: [
        "**`ssr: false`**: ব্রাউজার অবজেক্ট (`window`, `canvas`) না পেয়ে সার্ভার ক্র্যাশ হওয়া ঠেকায় এবং ক্লায়েন্ট বান্ডেল ছোট রাখে।",
        "**স্কেলেটন ফলব্যাক**: চার্ট লোড হওয়ার সময় সুন্দর প্লেসহোল্ডার UI দেখিয়ে ইউজার এক্সপেরিয়েন্স ভালো রাখা।",
      ],
      commonMistakes: [
        "হোমপেজে সরাসরি সিনক্রোনাসলি চার্ট ইম্পোর্ট করে পেজের Initial Bundle Size মেগাবাইট ছাড়িয়ে ফেলা।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: '১,০০০-এর বেশি ডেটা পয়েন্ট থাকলে আমি SVG বাদ দিয়ে Canvas বা WebGL ভিত্তিক চার্ট ইঞ্জিন বেছে নিই'।",
      ],
    },
  },

  // 18. Optimize Same API Call in Next.js
  {
    id: "optimize-same-api-call-nextjs",
    questionNumber: 18,
    question: "How do you optimize the same API call executed multiple times in Next.js?",
    banglaQuestion: "Next.js-এ একই API কল বারবার হওয়া কীভাবে অপ্টিমাইজ বা বন্ধ করবেন?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Request Deduplication", "React cache", "Next.js", "Data Fetching"],
    english: {
      quickAnswer:
        "Next.js automatically dedupes identical `fetch()` requests during render. For non-fetch operations (like direct ORM or DB calls), we use React's `cache()` function to memoize results across the component tree.",
      interviewSpeech:
        "In Next.js App Router, if multiple Server Components in the same render tree (e.g., `Header`, `Sidebar`, and `ProfilePage`) call `fetch('https://api.com/user')` with the same URL and options, Next.js automatically dedupes the request—only a single network call is made, and the result is shared. If we are fetching data using a non-fetch library (such as Prisma, Mongoose, or an SDK), native `fetch` deduping won't apply. In that case, we wrap our database query function in React's `cache()` utility. This ensures the database is queried only once per render pass regardless of how many components call that function.",
      deepDive: [
        "**Automatic Fetch Deduplication**: Built-in for GET requests with matching inputs.",
        "**React `cache()`**: Memoizes any asynchronous function (DB query, ORM call, GraphQL client) for the duration of a single server request lifecycle.",
        "**Client-side Deduplication**: On the client, tools like SWR or TanStack Query (React Query) handle deduping and caching across components.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "React cache() for Non-Fetch Database Deduplication",
        code: `import { cache } from "react";
import { db } from "@/lib/db";

// Memoize direct database query across the entire server render tree
export const getCurrentUser = cache(async (userId: string) => {
  console.log("DB Query Executed for:", userId);
  return await db.user.findUnique({ where: { id: userId } });
});

// Component A (Header.tsx)
export async function Header({ userId }: { userId: string }) {
  const user = await getCurrentUser(userId); // Runs DB query
  return <header>Welcome {user?.name}</header>;
}

// Component B (Sidebar.tsx)
export async function Sidebar({ userId }: { userId: string }) {
  const user = await getCurrentUser(userId); // Returns memoized result instantly! (No 2nd DB query)
  return <aside>{user?.role}</aside>;
}`,
      },
      commonMistakes: [
        "Thinking React `cache()` caches across different users or different requests—it only lives for the duration of a single render pass.",
      ],
      proTips: [
        "Clarify: 'Next.js dedupes `fetch()` automatically, while React `cache()` dedupes custom ORM and DB queries'.",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js একই রেন্ডারে সব `fetch()` কল স্বয়ংক্রিয়ভাবে ডিডুপ্লিকেট করে; আর ডাটাবেস বা Prisma কলের জন্য React-এর `cache()` ফাংশন ব্যবহার করে একক রিকোয়েস্টে একাধিক কল বন্ধ করা হয়।",
      interviewSpeech:
        "Next.js App Router-এ যদি `Header` এবং `Profile` দুটি কম্পোনেন্টেই একই ইউজার ডেটা দরকার হয় এবং তারা একই `fetch('https://api.com/user')` কল করে, তবে Next.js স্বয়ংক্রিয়ভাবে একটিমাত্র নেটওয়ার্ক কল করে বাকিগুলোতে রেজাল্ট শেয়ার করে। কিন্তু আমরা যদি সরাসরি Prisma বা Mongoose দিয়ে ডাটাবেস কুয়েরি করি, তখন নেটিভ `fetch` কাজ করে না। তখন আমরা ফাংশনটিকে React-এর `cache()` দিয়ে র‍্যাপ করে দিই (`export const getUser = cache(async () => ...)` )। এর ফলে যতগুলো কম্পোনেন্টই কল করুক না কেন, এক রেন্ডার সাইকেলে ডাটাবেসে মাত্র একবারই কুয়েরি হিট করবে।",
      deepDive: [
        "**নেটিভ ফেচ ডিডুপ্লিকেট**: কোনো কনফিগ ছাড়াই GET রিকোয়েস্ট অটোমেটিক ক্যাশ হয়।",
        "**React `cache()`**: ডাটাবেস, ফাইল রিডিং বা থার্ড পার্টি SDK-এর জন্য মেমোইজেশন মেকানিজম।",
        "**ক্লায়েন্ট সাইড**: ব্রাউজারে TanStack Query বা SWR ডুপ্লিকেট API কল থামায়।",
      ],
      commonMistakes: [
        "মনে করা যে React `cache()` ডেটাবেসে স্থায়ীভাবে ক্যাশ করে রাখে; এটি শুধুই একটি পেজ রেন্ডার চলাকালীন সময় পর্যন্ত সক্রিয় থাকে।",
      ],
      proTips: [
        "ইন্টারভিউতে Prisma বা ORM-এর উদাহরণ দিলে আপনার রিয়েল-লাইফ ব্যাকএন্ড নলেজ প্রকাশ পাবে।",
      ],
    },
  },

  // 19. Lifecycle Phases in React
  {
    id: "lifecycle-phases-in-react",
    questionNumber: 19,
    question: "Explain the lifecycle phases in React (Class vs Modern Functional Hooks).",
    banglaQuestion: "React-এর Lifecycle Phases এবং Functional Hooks-এর সাথে তাদের সম্পর্ক ব্যাখ্যা করুন।",
    topic: "React Core",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Lifecycle", "Mounting", "Updating", "Unmounting", "useEffect"],
    english: {
      quickAnswer:
        "React component lifecycles consist of 3 primary phases: Mounting (birth), Updating (growth/re-renders), and Unmounting (cleanup/death), handled in modern React via `useEffect` and `useLayoutEffect`.",
      interviewSpeech:
        "Every React component goes through three main lifecycle phases: 1) **Mounting**: When the component is created and inserted into the real DOM. In class components, this was `componentDidMount()`; in functional components, we use `useEffect(() => {}, [])` with an empty dependency array. 2) **Updating**: When props or state change, causing a re-render. In class components, this was `componentDidUpdate()`; in functional components, `useEffect(() => {}, [deps])` runs whenever the specified dependencies change. 3) **Unmounting**: When the component is removed from the DOM. In class components, this was `componentWillUnmount()`; in functional components, we return a cleanup function from `useEffect` (`return () => cleanup()`) to clear timers, abort network requests, and remove event listeners.",
      deepDive: [
        "**Mounting Phase**: Constructor -> Render -> Real DOM Inserted -> `componentDidMount` / `useEffect(..., [])`.",
        "**Updating Phase**: Props/State change -> Render -> Diffing -> Real DOM Patched -> `useEffect(..., [deps])`.",
        "**Unmounting Phase**: Component removed -> Cleanup function executed -> Memory freed.",
        "**Render vs Effect Phase**: The render function must remain pure without side effects; side effects must strictly live inside `useEffect`.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Mapping Class Lifecycles to Modern Functional Hooks",
        code: `export function LifecycleDemo({ userId }: { userId: string }) {
  useEffect(() => {
    // 1. MOUNTING: Runs once when component appears on screen
    console.log("Component Mounted! (like componentDidMount)");

    const handleResize = () => console.log("Resized");
    window.addEventListener("resize", handleResize);

    // 3. UNMOUNTING & CLEANUP: Runs before next effect and on component destruction
    return () => {
      console.log("Component Unmounted! (like componentWillUnmount)");
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array = mount + unmount

  useEffect(() => {
    // 2. UPDATING: Runs whenever userId changes
    console.log("userId updated to:", userId, "(like componentDidUpdate)");
  }, [userId]);

  return <div>Lifecycle Active for User: {userId}</div>;
}`,
      },
      commonMistakes: [
        "Thinking `useEffect` runs synchronously before DOM paint—it runs asynchronously after browser paint. If synchronous measurement is needed before paint, use `useLayoutEffect`.",
      ],
      proTips: [
        "Explain that in modern React, mental models have shifted from 'Lifecycles' to 'Synchronization of Side Effects with State'.",
      ],
    },
    bangla: {
      quickAnswer:
        "React কম্পোনেন্টের ৩টি মূল ফেজ থাকে: Mounting (তৈরি হওয়া), Updating (স্টেট/প্রপস বদলে আপডেট হওয়া), এবং Unmounting (স্ক্রিন থেকে মুছে যাওয়া), যা আধুনিক ফাংশনাল কম্পোনেন্টে `useEffect`-এর মাধ্যমে হ্যান্ডেল করা হয়।",
      interviewSpeech:
        "React-এর লাইফসাইকেল ৩টি ধাপে বিভক্ত: ১) **Mounting (মাউন্টিং)**: কম্পোনেন্টটি প্রথমবার ব্রাউজার ডমে তৈরি হয়ে প্রদর্শিত হওয়া। ক্লাস কম্পোনেন্টে এটি ছিল `componentDidMount`, আর ফাংশনাল কম্পোনেন্টে `useEffect(() => {}, [])` খালি অ্যারে দিয়ে করা হয়। ২) **Updating (আপডেটিং)**: স্টেট বা প্রপস পরিবর্তনের কারণে কম্পোনেন্ট রি-রেন্ডার হওয়া। ক্লাস কম্পোনেন্টে এটি ছিল `componentDidUpdate`, আর হুক্সে `useEffect(() => {}, [deps])` ডিপেন্ডেন্সি দিয়ে করা হয়। ৩) **Unmounting (আনমাউন্টিং)**: যখন কম্পোনেন্ট স্ক্রিন থেকে রিমুভ হয়ে যায়। ক্লাস কম্পোনেন্টে এটি ছিল `componentWillUnmount`, আর ফাংশনাল হুক্সে `useEffect`-এর ভেতর থেকে ক্লিনআপ ফাংশন (`return () => {...}`) রিটার্ন করে টাইমার বা ইভেন্ট লিসেনার রিমুভ করা হয়।",
      deepDive: [
        "**মাউন্টিং**: ডেটা ফেচিং, ইভেন্ট লিসেনার সেটআপ।",
        "**আপডেটিং**: নির্দিষ্ট প্রপস পরিবর্তনের প্রেক্ষিতে সাইড-ইফেক্ট চালানো।",
        "**আনমাউন্টিং**: মেমরি লিক এড়াতে সাবস্ক্রিপশন ও ইন্টারভাল ক্লিয়ার করা।",
      ],
      commonMistakes: [
        "ইফেক্টের ভেতর ইভেন্ট লিসেনার বা setInterval চালু করে ক্লিনআপ ফাংশন না লেখা (যার ফলে মেমরি লিক হয়)।",
      ],
      proTips: [
        "আধুনিক রিঅ্যাক্টে 'Lifecycle'-এর চেয়ে 'Synchronization' ধারণাটি বেশি গ্রহণযোগ্য—এটি ইন্টারভিউতে বলুন।",
      ],
    },
  },

  // 20. How Nested Routing Works in Next.js
  {
    id: "nested-routing-works-nextjs",
    questionNumber: 20,
    question: "How does nested routing work in Next.js?",
    banglaQuestion: "Next.js-এ Nested Routing কীভাবে কাজ করে?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Nested Routing", "App Router", "Layouts", "Preserved State"],
    english: {
      quickAnswer:
        "Nested routing is created by nesting folders within the `app` directory. Each nested folder represents a sub-route segment, and its `layout.tsx` automatically wraps child pages while preserving layout state on navigation.",
      interviewSpeech:
        "In Next.js App Router, routing is hierarchical. Nesting folders creates nested URL segments—for instance, `app/dashboard/settings/page.tsx` renders at `/dashboard/settings`. The superpower of Next.js nested routing is **Nested Layouts**. If `app/dashboard/layout.tsx` defines a sidebar and header, navigating between `/dashboard/analytics` and `/dashboard/settings` only re-renders the dynamic page segment. The parent dashboard layout stays completely mounted, preserving its scroll position, search inputs, and client component state without costly full-page re-mounts.",
      deepDive: [
        "**Hierarchical Component Tree**: `RootLayout` -> `DashboardLayout` -> `SettingsPage`.",
        "**State Preservation**: Navigating between sibling sub-routes does NOT re-mount parent layouts.",
        "**Parallel & Intercepting Routes**: Advanced nested routing features (`@slots` and `(..)photo`) allow rendering multiple independent sub-pages simultaneously.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Nested Layout Wrapping Children",
        code: `// app/dashboard/layout.tsx - Parent Nested Layout
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-zinc-900 text-white p-4">
        {/* Sidebar state remains preserved when switching pages! */}
        <SidebarNav /> 
      </aside>
      <main className="flex-1 overflow-y-auto p-6">
        {children} {/* Renders /dashboard/analytics or /dashboard/settings */}
      </main>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Expecting `template.tsx` to preserve state like `layout.tsx`—templates create a brand-new instance on every navigation, whereas layouts persist state.",
      ],
      proTips: [
        "Contrast `layout.tsx` (persists state across sub-routes) with `template.tsx` (resets state on every navigation).",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js-এ `app` ফোল্ডারের ভেতর একের পর এক ফোল্ডার সাজিয়ে নেস্টেড রাউটিং তৈরি করা হয়, যেখানে প্যারেন্ট `layout.tsx` সব চাইল্ড পেজকে র‍্যাপ করে এবং নেভিগেশনে লেআউটের স্টেট অক্ষত রাখে।",
      interviewSpeech:
        "Next.js App Router-এ ফোল্ডারের ভেতর ফোল্ডার তৈরি করলে তা স্বয়ংক্রিয়ভাবে নেস্টেড URL পাথে পরিণত হয়। যেমন `app/dashboard/settings/page.tsx` লোড হয় `/dashboard/settings` পাথে। এর সবচেয়ে বড় সুবিধা হলো **নেস্টেড লেআউট**। প্যারেন্ট ফোল্ডারে একটি `layout.tsx` থাকলে এবং তার ভেতর সাইডবার থাকলে, আপনি `/dashboard/overview` থেকে `/dashboard/settings`-এ গেলেও সাইডবারটি রিলোড বা আনমাউন্ট হবে না। শুধুমাত্র ভেতরের চাইল্ড কনটেন্ট বদলে যাবে, ফলে সাইডবারের স্ক্রল ও স্টেট সম্পূর্ণ সুরক্ষিত থাকে।",
      deepDive: [
        "**হায়ারার্কিক্যাল ট্রি**: রুট লেআউটের ভেতর নেস্টেড লেআউট, তার ভেতর পেজ রেন্ডার হয়।",
        "**পারফরম্যান্স**: নেভিগেশনে পুরো পেজ রি-মাউন্ট না হয়ে শুধু পরিবর্তিত অংশ লোড হয়।",
        "**`layout.tsx` বনাম `template.tsx`**: লেআউট স্টেট সেভ রাখে, আর টেমপ্লেট প্রতি পেজ ট্রানজিশনে নতুন করে মাউন্ট হয়।",
      ],
      commonMistakes: [
        "লেআউট ফাইলে `{children}` প্রপ রেন্ডার করতে ভুলে যাওয়া, যার ফলে চাইল্ড পেজ স্ক্রিনে আসে না।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Partial Rendering' ও 'State Preservation' শব্দ দুটি ব্যবহার করুন।",
      ],
    },
  },

  // 21. Server Component vs Client Component
  {
    id: "server-component-vs-client-component",
    questionNumber: 21,
    question: "What is a Server Component and how is it different from a Client Component?",
    banglaQuestion: "Server Component কী এবং Client Component-এর সাথে এর পার্থক্য কী?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["RSC", "Client Components", "use client", "Next.js", "Hydration"],
    english: {
      quickAnswer:
        "Server Components (default) execute only on the server, sending 0 KB JS to the client. Client Components (`'use client'`) are pre-rendered on the server and hydrated in the browser for interactivity.",
      interviewSpeech:
        "In Next.js App Router, all components are React Server Components (RSC) by default. Server Components execute exclusively on the server, meaning their code and dependencies are never shipped to the browser, enabling direct database queries and zero client bundle size. However, they cannot use browser APIs, event listeners (`onClick`), or React state hooks (`useState`, `useEffect`). Client Components, designated with the `'use client'` directive at the top of the file, are still pre-rendered on the server into HTML, but their JavaScript is shipped to the client to hydrate and attach event listeners, enabling full interactivity and state management.",
      deepDive: [
        "**Server Components (RSC)**: Async by default, access server resources/DB, zero client bundle overhead, no interactivity/hooks.",
        "**Client Components (`'use client'`)**: Interactive, use hooks (`useState`, `useEffect`), listen to DOM events, access `window`/`localStorage`.",
        "**Composition Pattern**: Keep Server Components high in the tree, push Client Components down to the interactive leaves (e.g., `<LikeButton />`).",
        "**Passing Server to Client**: Pass Server Components as `{children}` props into Client Components to avoid making the whole tree a client bundle.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Composing Server and Client Components",
        code: `// 1. Client Component (app/components/LikeButton.tsx)
"use client";
import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(l => l + 1)}>Likes: {likes}</button>;
}

// 2. Server Component (app/posts/page.tsx)
import { db } from "@/lib/db";
import { LikeButton } from "@/components/LikeButton";

export default async function PostPage() {
  const post = await db.post.findFirst(); // Direct DB call on server
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Interactive leaf component */}
      <LikeButton />
    </article>
  );
}`,
      },
      commonMistakes: [
        "Assuming `'use client'` means the component only runs in the browser—Client Components are still pre-rendered into HTML on the server during initial load!",
      ],
      proTips: [
        "Explain the 'Leaf-Node Client Boundary' rule: Push `'use client'` as far down the component tree as possible.",
      ],
    },
    bangla: {
      quickAnswer:
        "Server Component শুধুমাত্র সার্ভারে রান করে এবং ক্লায়েন্টে ০ কিলোবাইট জাভাস্ক্রিপ্ট পাঠায়; আর Client Component (`'use client'`) সার্ভারে প্রি-রেন্ডার হয়ে ব্রাউজারে হাইড্রেট হয় যাতে বাটন ক্লিক ও স্টেট কাজ করতে পারে।",
      interviewSpeech:
        "Next.js App Router-এ সব কম্পোনেন্ট বাই-ডিফল্ট Server Component। সার্ভার কম্পোনেন্ট শুধু সার্ভারে রান হয়, সরাসরি ডেটাবেস এক্সেস করতে পারে এবং এর কোনো কোড ব্রাউজারে যায় না, ফলে ওয়েবসাইট দ্রুত লোড হয়। কিন্তু এতে `useState`, `useEffect` বা `onClick` ব্যবহার করা যায় না। যেখানে ইউজারের ইন্টারঅ্যাকশন (যেমন ফর্ম, বাটন ক্লিক, অ্যানিমেশন) দরকার, সেখানে ফাইলের মাথায় `'use client'` লিখে Client Component বানাতে হয়। ক্লায়েন্ট কম্পোনেন্টের জাভাস্ক্রিপ্ট ব্রাউজারে ডাউনলোড হয়ে হাইড্রেট (Hydrate) হয়।",
      deepDive: [
        "**সার্ভার কম্পোনেন্ট**: সরাসরি ডাটাবেস ও সিক্রেট এক্সেস, জিরো বান্ডেল সাইজ।",
        "**ক্লায়েন্ট কম্পোনেন্ট**: `useState`, `useEffect`, `localStorage` এবং ব্রাউজার ইভেন্ট হ্যান্ডলার সাপোর্ট করে।",
        "**বেস্ট প্র্যাকটিস**: পুরো পেজকে Client Component না বানিয়ে শুধু ইন্টারঅ্যাক্টিভ বাটন বা ফর্মটুকুকে Client Component বানানো।",
      ],
      commonMistakes: [
        "মনে করা যে `'use client'` দিলে সার্ভারে কিছুই রেন্ডার হয় না—আসলে ক্লায়েন্ট কম্পোনেন্টও প্রথমবার সার্ভার থেকে HTML হিসেবে প্রি-রেন্ডার হয়ে আসে।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Hydration' এবং 'Zero Bundle Size' শব্দ দুটি দিয়ে পার্থক্য তুলে ধরুন।",
      ],
    },
  },

  // 22. Dynamic Routing in Next.js
  {
    id: "dynamic-routing-in-nextjs",
    questionNumber: 22,
    question: "How does dynamic routing work in Next.js?",
    banglaQuestion: "Next.js-এ Dynamic Routing কীভাবে কাজ করে?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Dynamic Routing", "Catch-all", "generateStaticParams", "Next.js 15"],
    english: {
      quickAnswer:
        "Dynamic routes use square bracket folder syntax (e.g., `[id]`, `[...slug]`) to accept variable URL parameters, accessed via the async `params` prop in Next.js 15.",
      interviewSpeech:
        "In Next.js, when route segments are dynamic (like `/blog/react-guide` or `/products/456`), we name the folder in square brackets: `app/products/[id]/page.tsx`. Next.js supports three dynamic conventions: 1) **Single Segment**: `[id]` matches `/products/123`. 2) **Catch-All**: `[...slug]` matches all nested segments like `/docs/getting-started/installation`. 3) **Optional Catch-All**: `[[...slug]]` matches both the base `/docs` and all nested paths. In Next.js 15, the `params` prop is an asynchronous Promise that must be awaited. For static export/SSG, we pair dynamic routes with `generateStaticParams()` to pre-generate paths at build time.",
      deepDive: [
        "**`[slug]`**: Matches one path segment (`/post/1`).",
        "**`[...slug]` (Catch-all)**: Matches multiple segments (`/post/2026/08/intro`). Returns an array of strings in params.",
        "**`[[...slug]]` (Optional Catch-all)**: Also matches the root route without any segments (`/post`).",
        "**`generateStaticParams()`**: Replaces `getStaticPaths` in App Router, returning an array of param objects to pre-render statically at build time.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Next.js 15 Async Params & generateStaticParams",
        code: `// app/blog/[slug]/page.tsx

// 1. Pre-generate static HTML for top posts at build time (SSG)
export async function generateStaticParams() {
  const posts = await getTopPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// 2. Dynamic Page Component (Next.js 15 requires awaiting params)
export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params; // Await params Promise in Next.js 15
  const post = await getPostBySlug(slug);

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.content}</p>
    </article>
  );
}`,
      },
      commonMistakes: [
        "Forgetting that in Next.js 15, `params` and `searchParams` are Promises that must be awaited asynchronously.",
      ],
      proTips: [
        "Mention the Next.js 15 breaking change: `params` is now a Promise (`await params`).",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js-এ ফোল্ডারের নামে থার্ড ব্র্যাকেট `[id]` বা `[...slug]` ব্যবহার করে ডাইনামিক রাউটিং তৈরি করা হয়, এবং Next.js 15-এ `params` প্রমিজ অ্যাওয়েট করে ডেটা পাওয়া যায়।",
      interviewSpeech:
        "যখন URL-এর মান পরিবর্তনশীল হয় (যেমন `/products/123` বা `/blog/my-post`), তখন ফোল্ডারের নাম থার্ড ব্র্যাকেটে লেখা হয়: `app/blog/[slug]/page.tsx`। Next.js-এ ৩ ধরনের ডাইনামিক রাউট আছে: ১) **`[slug]` (সিঙ্গেল সেগমেন্ট)**: `/blog/react` ক্যাচ করে। ২) **`[...slug]` (ক্যাচ-অল)**: একাধিক সাব-পাথ যেমন `/docs/react/hooks/intro` ক্যাচ করে অ্যারে হিসেবে দেয়। ৩) **`[[...slug]]` (অপশনাল ক্যাচ-অল)**: বেস পাথ `/docs` এবং সাব-পাথ দুটোই হ্যান্ডেল করে। Next.js 15-এ `params` একটি অ্যাসিনক্রোনাস প্রমিজ, তাই `const { slug } = await params;` লিখে ডাটা নিতে হয়।",
      deepDive: [
        "**`generateStaticParams`**: বিল্ড টাইমে ডাইনামিক পেজগুলোর স্ট্যাটিক HTML তৈরি করে রাখতে ব্যবহৃত হয়।",
        "**Next.js 15 আপডেট**: `params` এখন সিঙ্ক্রোনাস অবজেক্ট নয়, এটি Promise।",
      ],
      commonMistakes: [
        "Next.js 15-এ `await params` না করে সরাসরি `params.slug` রিড করার চেষ্টা করা।",
      ],
      proTips: [
        "Next.js 15-এর `await params` ফিচারের কথা উল্লেখ করলে ইন্টারভিউয়ার নিশ্চিত হবেন আপনি লেটেস্ট ভার্সনে আপ-টু-ডেট।",
      ],
    },
  },

  // 23. Route Grouping
  {
    id: "tell-me-about-route-grouping",
    questionNumber: 23,
    question: "Tell me about route grouping in Next.js.",
    banglaQuestion: "Next.js-এ Route Grouping কী এবং এর সুবিধা কী?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["Route Groups", "App Router", "Multiple Layouts", "Architecture"],
    english: {
      quickAnswer:
        "Route Grouping uses parenthesis folder names like `(marketing)` or `(shop)` to organize routes or create multiple root layouts without affecting the URL path.",
      interviewSpeech:
        "In Next.js App Router, wrapping a folder name in parentheses—such as `app/(auth)/login/page.tsx`—creates a Route Group. The group name is completely omitted from the resulting URL pathname, so the route resolves directly to `/login`. Route Groups solve two major architectural challenges: 1) **Organizational Cleanliness**: Grouping related routes (e.g. `(marketing)`, `(dashboard)`, `(auth)`) without polluting the URL structure. 2) **Multiple Root / Nested Layouts**: Creating completely different layouts for different sections of the app (for instance, a full-screen centered layout for `(auth)` and a sidebar layout for `(dashboard)`) without sharing the same root layout.",
      deepDive: [
        "**Omitted from URL**: `app/(admin)/users/page.tsx` -> `/users` (NOT `/admin/users`).",
        "**Multiple Root Layouts**: Delete the top-level `app/layout.tsx` and place separate `layout.tsx` files inside `(marketing)` and `(app)` to have distinct `<html>` and `<body>` tags.",
        "**Opting-in Layouts**: Apply specific layouts only to a subset of routes.",
      ],
      codeSnippet: {
        language: "text",
        caption: "Route Group Directory Structure",
        code: `app/
├── (marketing)/
│   ├── layout.tsx         // Marketing Layout (Sticky Navbar, Footer)
│   ├── about/page.tsx     // URL: /about
│   └── page.tsx           // URL: / (Landing Page)
├── (auth)/
│   ├── layout.tsx         // Auth Layout (Centered Minimal Card, No Navbar)
│   ├── login/page.tsx     // URL: /login
│   └── register/page.tsx  // URL: /register
└── (dashboard)/
    ├── layout.tsx         // Dashboard Layout (Sidebar + Topbar)
    └── dashboard/page.tsx // URL: /dashboard`,
      },
      commonMistakes: [
        "Accidentally creating identical URL routes in two different route groups (e.g. `(marketing)/about/page.tsx` and `(shop)/about/page.tsx`), causing a build collision error.",
      ],
      proTips: [
        "Highlight 'Multiple Root Layouts' as the most powerful real-world use case for route groups.",
      ],
    },
    bangla: {
      quickAnswer:
        "রুট গ্রুপিং হলো ফোল্ডারের নাম প্রথম বন্ধনী `(folder)` দিয়ে রাখা, যার ফলে URL পাথ কোনো পরিবর্তন ছাড়াই কোড সুন্দরভাবে ভাগ করা যায় এবং একাধিক সম্পূর্ণ আলাদা রুট লেআউট ব্যবহার করা যায়।",
      interviewSpeech:
        "Next.js App Router-এ ফোল্ডারের নাম প্রথম বন্ধনীতে রাখলে (যেমন `app/(auth)/login/page.tsx`) সেই ফোল্ডারের নামটি ব্রাউজারের URL পাথে আসে না; ব্রাউজারে সরাসরি `/login` শো করে। এর দুটি প্রধান সুবিধা: ১) **কোড অর্গানাইজেশন**: প্রজেক্ট বড় হলে অথেনটিকেশন, ড্যাশবোর্ড বা মার্কেটিং পেজগুলোকে আলাদা ফোল্ডারে গুছিয়ে রাখা যায়। ২) **একাধিক সম্পূর্ণ আলাদা লেআউট**: যেমন `(auth)` গ্রুপের জন্য কোনো সাইডবার বা ফুটার ছাড়া ক্লিন স্ক্রিন লেআউট, আর `(dashboard)` গ্রুপের জন্য ফুল সাইডবার লেআউট তৈরি করা যায়।",
      deepDive: [
        "**URL-এ প্রভাব নেই**: `(marketing)/pricing` সরাসরি `/pricing` হিসেবে কাজ করে।",
        "**মাল্টিপল রুট লেআউট**: মার্কেটিং সাইট ও ড্যাশবোর্ড অ্যাপের জন্য সম্পূর্ণ ভিন্ন ভিন্ন `<html>` ও `<body>` লেআউট রাখা সম্ভব।",
      ],
      commonMistakes: [
        "দুটি আলাদা গ্রুপে একই নামের পাথ রাখা (যেমন `(a)/contact` এবং `(b)/contact`), যা বিল্ড এরর ঘটায়।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'রুট গ্রুপিং দিয়ে আমরা একই অ্যাপের ভেতর মার্কেটিং সাইট ও ড্যাশবোর্ডের জন্য সম্পূর্ণ আলাদা লেআউট হ্যান্ডেল করি'।",
      ],
    },
  },

  // 24. Maintain Protected Route
  {
    id: "maintain-protected-route-nextjs",
    questionNumber: 24,
    question: "How do we maintain and secure protected routes in Next.js?",
    banglaQuestion: "Next.js-এ Protected Route (সুরক্ষিত রাউট) কীভাবে মেইনটেইন ও সিকিউর করবেন?",
    topic: "Security & Architecture",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Protected Routes", "Middleware", "Authentication", "Security", "Redirect"],
    english: {
      quickAnswer:
        "We implement a multi-layered defense using Next.js Edge Middleware for early URL intercepts, Server Component session verification with `redirect()`, and secure HTTP-Only cookies.",
      interviewSpeech:
        "Securing routes in Next.js requires a defense-in-depth approach across 3 layers: 1) **Edge Middleware (`middleware.ts`)**: The first line of defense. It inspects session cookies/JWT tokens on the Edge runtime before any route code executes. If unauthenticated, it immediately redirects to `/login?callbackUrl=...`, preventing unauthorized access and saving server compute. 2) **Server Component Verification**: Middleware can be bypassed if misconfigured, so Server Components and Layouts must also verify the session via `cookies()` and call `redirect('/login')` if invalid. 3) **Data & Mutation Security**: Never rely on route protection alone—always verify user permissions inside Server Actions and Route Handlers before executing sensitive database mutations.",
      deepDive: [
        "**Layer 1: Edge Middleware**: Fast global URL guards using matcher configurations.",
        "**Layer 2: Server Component Layout Guard**: Checks session token directly from `cookies()` and redirects.",
        "**Layer 3: Server Actions Auth Guard**: Validates session and user roles directly before performing database writes.",
        "**Cookie Security**: Tokens must be stored in `httpOnly: true, secure: true, sameSite: 'lax'` cookies to prevent XSS theft.",
      ],
      codeSnippet: {
        language: "typescript",
        caption: "Next.js Middleware + Server Component Auth Guard",
        code: `// 1. middleware.ts - Edge Interception
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("session_token")?.value;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  const isProtected = req.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"]
};`,
      },
      commonMistakes: [
        "Relying ONLY on client-side `useEffect` redirects, which allows unauthenticated users to briefly flash protected UI before redirecting.",
      ],
      proTips: [
        "Mention the 3-layer architecture: 1. Middleware, 2. Server Component Layout, 3. Server Action mutation authorization.",
      ],
    },
    bangla: {
      quickAnswer:
        "আমরা ৩ স্তরের নিরাপত্তা ব্যবহার করি: Edge Middleware দিয়ে শুরুতেই রিডাইরেক্ট, Server Component-এ সেশন চেক করে `redirect()`, এবং Server Action-এ পারমিশন যাচাই করা।",
      interviewSpeech:
        "Next.js-এ প্রটেক্টেড রাউট সুরক্ষিত করার সেরা আর্কিটেকচার হলো ৩-লেয়ার মেকানিজম: ১) **Edge Middleware (`middleware.ts`)**: কোনো পেজ লোড হওয়ার আগেই Edge নেটওয়ার্কে কুকি বা JWT টোকেন চেক করে। টোকেন না থাকলে সরাসরি `/login`-এ রিডাইরেক্ট করে দেয়, ফলে সার্ভার রেন্ডারিংয়ের খরচ বাঁচে। ২) **Server Component Guard**: লেআউট বা পেজের ভেতর `cookies()` দিয়ে সেশন ভেরিফাই করে `redirect('/login')` কল করা। ৩) **Server Actions Security**: শুধু রাউট আটকালেই হবে না; ডাটাবেস আপডেট বা ডিলিট করার আগে সার্ভার অ্যাকশনের ভেতরে ইউজারের রোল ও পারমিশন চেক করতে হবে।",
      deepDive: [
        "**মিডলওয়্যার**: ব্রাউজার রিকোয়েস্ট পেজে পৌঁছানোর আগেই আটকে দেয়।",
        "**HTTP-Only Cookies**: টোকেন সবসময় `httpOnly: true` কুকিতে রাখতে হবে যাতে হ্যাকাররা XSS দিয়ে টোকেন চুরি করতে না পারে।",
      ],
      commonMistakes: [
        "শুধুমাত্র ক্লায়েন্ট সাইডে `useEffect` দিয়ে রিডাইরেক্ট করা; এতে ইউজারের স্ক্রিনে এক সেকেন্ডের জন্য প্রটেক্টেড পেজের কনটেন্ট ফ্ল্যাশ করে ওঠে।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Defense-in-Depth' (বহুস্তরীয় নিরাপত্তা) শব্দটি উল্লেখ করুন।",
      ],
    },
  },

  // 25. Nested Route Not Working Debugging
  {
    id: "nested-route-not-working-debug",
    questionNumber: 25,
    question: "Nested route is not working in Next.js: How will you find the issue and fix it?",
    banglaQuestion: "Next.js-এ Nested Route কাজ করছে না: কীভাবে সমস্যা খুঁজবেন এবং সমাধান করবেন?",
    topic: "Next.js App Router",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["Debugging", "Nested Routes", "children prop", "App Router"],
    english: {
      quickAnswer:
        "We diagnose nested route failures by verifying 5 key areas: folder naming/spelling, presence of `page.tsx`, rendering `{children}` in parent `layout.tsx`, checking middleware URL rewrites, and awaiting async `params` in Next.js 15.",
      interviewSpeech:
        "When a nested route fails to render (returning a 404 or blank screen), I follow a structured 5-step debugging checklist: 1) **Check `{children}` in Parent `layout.tsx`**: The most common bug—if the parent layout forgets to render `{children}`, child pages will never appear. 2) **Verify File Conventions**: Ensure the nested folder contains a properly named `page.tsx` with a `default export`. 3) **Inspect Middleware**: Check `middleware.ts` to see if a regex matcher or rewrite rule is unexpectedly redirecting or intercepting the nested path. 4) **Check Next.js 15 Async Params**: If the route is dynamic, ensure `params` is awaited asynchronously. 5) **Check Route Groups & Collisions**: Ensure no route group `(group)` has conflicting paths or missing layout wrappers.",
      deepDive: [
        "**Step 1: Missing `{children}` in Layout**: Parent layout renders custom UI but forgets `{children}`, leaving a blank canvas.",
        "**Step 2: Typos in Dynamic Brackets**: Using `[id]` in folder but accessing `params.slug` in code.",
        "**Step 3: Middleware Matcher Overreach**: Middleware intercepting all paths due to missing exclusion regex (`/((?!api|_next/static|_next/image|favicon.ico).*)`).",
        "**Step 4: Server Action/Route Handler Conflicts**: Having both `route.ts` and `page.tsx` in the exact same folder segment (only one is allowed).",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Common Fix: Rendering {children} in Parent Layout",
        code: `// Buggy Layout: Parent forgets to render children!
// export default function BadLayout() { return <div><Sidebar /></div>; }

// Fixed Layout: Always render children in layout.tsx
export default function FixedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-grid">
      <Sidebar />
      <main className="content-area">
        {children} {/* Crucial! Renders the nested page.tsx */}
      </main>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Having both `page.tsx` and `route.ts` inside the exact same folder segment, causing Next.js router collisions.",
      ],
      proTips: [
        "Walk through your answer step-by-step as a structured senior engineering checklist.",
      ],
    },
    bangla: {
      quickAnswer:
        "নেস্টেড রাউট কাজ না করলে ৫টি বিষয় চেক করতে হয়: প্যারেন্ট লেআউটে `{children}` রেন্ডার করা আছে কি না, ফোল্ডারে `page.tsx` ও `default export` ঠিক আছে কি না, মিডলওয়্যার ভুল রিডাইরেক্ট করছে কি না, এবং একই ফোল্ডারে `route.ts` ও `page.tsx` একসাথে রাখা হয়েছে কি না।",
      interviewSpeech:
        "নেস্টেড রাউটে ৪০৪ বা সাদা স্ক্রিন আসলে আমি ৫টি ধাপে ডিবাগ করি: ১) **প্যারেন্ট লেআউটের `{children}` চেক করা**: সবচেয়ে কমন ভুল হলো প্যারেন্ট `layout.tsx`-এ `{children}` লিখতে ভুলে যাওয়া; ফলে চাইল্ড পেজের কনটেন্ট দেখায় না। ২) **ফাইল ও ফোল্ডারের নাম**: নিশ্চিত হওয়া যে ফোল্ডারে `page.tsx` আছে এবং কম্পোনেন্টটি `export default` করা হয়েছে। ৩) **মিডলওয়্যার রুলস**: `middleware.ts`-এর ম্যাচিং প্যাটার্ন চেক করা যে তা কোনো অপ্রত্যাশিত রিডাইরেক্ট করছে কি না। ৪) **একই ফোল্ডারে কনফ্লিক্ট**: একই ফোল্ডারে `page.tsx` এবং `route.ts` দুটো একসাথে রাখা যাবে না। ৫) **Next.js 15 Async Params**: ডাইনামিক রাউট হলে `params` অ্যাওয়েট করা হয়েছে কি না তা নিশ্চিত করা।",
      deepDive: [
        "**`{children}` প্রপস**: লেআউটের মূল দায়িত্ব চাইল্ড পেজকে ধারণ করা।",
        "**ক্লিন ক্যাশ**: অনেক সময় `.next` ক্যাশ জমে আটকে থাকে, `rm -rf .next` দিয়ে রিস্টার্ট দিলে সমাধান হয়।",
      ],
      commonMistakes: [
        "ফাইলনেমে ছোটখাটো ভুল যেমন `Page.tsx` (ক্যাপিটাল P) লেখা, যা লিনাক্স সার্ভারে কেস-সেনসিটিভ ৪০৪ এরর দেয়।",
      ],
      proTips: [
        "ইন্টারভিউতে বলবেন: 'আমি প্রথমে ব্রাউজার কনসোল ও টার্মিনাল লগ দেখি, তারপর লেআউটের `{children}` এবং মিডলওয়্যার ম্যাচিং চেক করি'।",
      ],
    },
  },

  // 26. Client-side vs Server-side Cookies
  {
    id: "clientside-vs-serverside-cookies",
    questionNumber: 26,
    question: "How do we set and manage client-side cookies and server-side cookies in Next.js?",
    banglaQuestion: "Next.js-এ Client-side এবং Server-side Cookies কীভাবে সেট ও নিয়ন্ত্রণ করবেন?",
    topic: "Security & Architecture",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["Cookies", "httpOnly", "Security", "next/headers", "NextResponse"],
    english: {
      quickAnswer:
        "Client-side cookies are set via `document.cookie` or JS libraries (accessible to JavaScript). Server-side cookies are set in Server Actions/Route Handlers via `cookies()` from `next/headers` or in Middleware via `NextResponse.cookies.set()` with `httpOnly: true`.",
      interviewSpeech:
        "Client-side cookies are created in the browser using `document.cookie` or libraries like `js-cookie`. They are suitable for non-sensitive preferences like theme mode or UI state, but they CANNOT set `httpOnly` flags and are vulnerable to XSS attacks. Server-side cookies are managed on the server: In Server Actions or Route Handlers, we use `const cookieStore = await cookies()` from `next/headers` to get, set, or delete cookies. In Middleware, we set cookies on the outgoing `NextResponse`. For authentication tokens, we ALWAYS set `httpOnly: true, secure: true, sameSite: 'lax'` on the server so malicious scripts in the browser can never read them.",
      deepDive: [
        "**Client Cookies**: `document.cookie = 'theme=dark; path=/'`. Accessible to JS; never store auth tokens here.",
        "**Server Actions / Route Handlers**: `(await cookies()).set('token', value, { httpOnly: true, secure: true, sameSite: 'lax' })`.",
        "**Next.js Middleware**: `response.cookies.set({ name: 'session', value: '...' })`.",
        "**Security Flags**: `httpOnly: true` (prevents XSS theft), `secure: true` (HTTPS only), `sameSite: 'lax' | 'strict'` (prevents CSRF).",
      ],
      codeSnippet: {
        language: "typescript",
        caption: "Setting Secure Server-Side Cookies in Server Action",
        code: `// app/actions/auth.ts - Server Action
"use server";
import { cookies } from "next/headers";

export async function loginUser(email: string, pass: string) {
  const token = await authenticateWithBackend(email, pass);
  const cookieStore = await cookies();

  // Set secure, HTTP-Only cookie directly on the server response
  cookieStore.set("session_token", token, {
    httpOnly: true, // Inaccessible to client-side document.cookie (XSS immune)
    secure: process.env.NODE_ENV === "production", // HTTPS only in prod
    sameSite: "lax", // Protects against CSRF attacks
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  return { success: true };
}`,
      },
      commonMistakes: [
        "Storing JWT authentication tokens in client-side `localStorage` or non-httpOnly `document.cookie`, exposing users to token theft via third-party scripts or XSS vulnerabilities.",
      ],
      proTips: [
        "Mention the 3 vital security cookie attributes: `httpOnly`, `secure`, and `sameSite`.",
      ],
    },
    bangla: {
      quickAnswer:
        "ক্লায়েন্ট-সাইড কুকি ব্রাউজারে `document.cookie` দিয়ে সেট করা হয় (থিম বা UI প্রেফারেন্সের জন্য); আর সার্ভার-সাইড কুকি Server Action-এ `cookies()` API বা মিডলওয়্যারে `httpOnly: true` সহ সেট করা হয় (সিকিউর টোকেন ও অথেন্টিকেশনের জন্য)।",
      interviewSpeech:
        "ক্লায়েন্ট-সাইড কুকি জাভাস্ক্রিপ্ট কোড থেকে `document.cookie` দিয়ে লেখা ও পড়া যায়। এটি থিম বা সাধারণ তথ্যের জন্য ঠিক আছে, কিন্তু এতে `httpOnly` ফ্ল্যাগ দেওয়া যায় না, ফলে হ্যাকাররা XSS দিয়ে সহজেই তা চুরি করতে পারে। তাই সেনসিটিভ অথেন্টিকেশন টোকেনের জন্য আমরা সার্ভার-সাইড কুকি ব্যবহার করি। Next.js-এ Server Action বা Route Handler-এর ভেতর `cookies()` API দিয়ে `httpOnly: true, secure: true, sameSite: 'lax'` ফ্ল্যাগ দিয়ে কুকি সেট করি। এর ফলে ব্রাউজারের কোনো জাভাস্ক্রিপ্ট ফাইল এই কুকি দেখতে বা চুরি করতে পারে না।",
      deepDive: [
        "**`httpOnly: true`**: ক্লায়েন্ট জাভাস্ক্রিপ্ট দিয়ে রিড করা অসম্ভব, ফলে XSS অ্যাটাক থেকে নিরাপদ।",
        "**`secure: true`**: শুধুমাত্র এনক্রিপ্টেড HTTPS কানেকশনে ডেটা আদান-প্রদান হয়।",
        "**`sameSite: 'lax'`**: ক্রস-সাইট রিকোয়েস্ট ফোরজারি (CSRF) অ্যাটাক প্রতিহত করে।",
      ],
      commonMistakes: [
        "লগইন টোকেন `localStorage`-এ সেভ করে রাখা; এটি যেকোনো ম্যালিসিয়াস স্ক্রিপ্টের মাধ্যমে হ্যাক হওয়া সম্ভব।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'অথেন্টিকেশন টোকেন সবসময় সার্ভার সাইড থেকে HTTP-Only, Secure এবং SameSite কুকিতে সেট করা উচিত'।",
      ],
    },
  },

  // 27. Securely Handle Form User Input
  {
    id: "securely-handle-form-user-input",
    questionNumber: 27,
    question: "How do you securely handle forms and user inputs in React and Next.js?",
    banglaQuestion: "React এবং Next.js-এ ব্যবহারকারীর ফর্ম ইনপুট কীভাবে নিরাপদে ও সুরক্ষিতভাবে হ্যান্ডেল করবেন?",
    topic: "Security & Architecture",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Form Security", "Zod", "XSS", "SQL Injection", "CSRF", "Validation"],
    english: {
      quickAnswer:
        "We secure forms using strict server-side schema validation with Zod, sanitizing inputs against XSS, using parameterized ORM queries against SQL/NoSQL injections, enforcing CSRF protection, and implementing rate limiting.",
      interviewSpeech:
        "Never trust client-side validation alone, as attackers can bypass browser forms using curl or Postman. A secure form pipeline in Next.js includes 5 pillars: 1) **Server-Side Schema Validation**: Validate every input field on the server using Zod or Yup before processing. 2) **Preventing Injection**: Use parameterized queries via ORMs (like Prisma or Drizzle) so malicious SQL/NoSQL strings (`' OR 1=1--`) cannot execute. 3) **XSS Prevention**: React auto-escapes JSX strings by default, but if rendering user HTML, sanitize with `DOMPurify` and never use unescaped `dangerouslySetInnerHTML`. 4) **CSRF Protection**: Next.js Server Actions automatically verify the `Origin` header against the `Host` header to block cross-site request forgery. 5) **Rate Limiting**: Apply IP-based rate limiting with Upstash Redis on sensitive forms (login, payment, password reset) to prevent brute-force attacks.",
      deepDive: [
        "**Zod Server Validation**: `userSchema.safeParse(formData)` rejects unexpected fields and type mismatches.",
        "**XSS Defense**: Avoid raw HTML rendering; sanitize with `isomorphic-dompurify` if rich text is required.",
        "**CSRF Defense**: Server Actions enforce origin checks; use SameSite cookies.",
        "**Rate Limiting**: Protect endpoints against automated bots using `@upstash/ratelimit`.",
      ],
      codeSnippet: {
        language: "typescript",
        caption: "Secure Form Action with Zod Validation & Error Handling",
        code: `// app/actions/contact.ts
"use server";
import { z } from "zod";
import { db } from "@/lib/db";

const ContactSchema = z.object({
  email: z.string().email("Invalid email address").max(100),
  message: z.string().min(10, "Message must be at least 10 chars").max(1000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Extract and validate input data on SERVER
  const parsed = ContactSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  // 2. Parameterized DB write (SQL injection immune)
  await db.contactSubmission.create({
    data: {
      email: parsed.data.email,
      message: parsed.data.message,
    }
  });

  return { success: true, message: "Thank you! We received your message." };
}`,
      },
      commonMistakes: [
        "Relying solely on HTML5 attributes like `required` or client-side regex without validating on the server.",
      ],
      proTips: [
        "Memorize the security mantra: 'Client validation is for User Experience (UX); Server validation is for Security'.",
      ],
    },
    bangla: {
      quickAnswer:
        "ফর্ম সিকিউরিটির মূল নিয়ম হলো সার্ভার সাইডে Zod দিয়ে ভ্যালিডেশন করা, ORM দিয়ে SQL ইনজেকশন ঠেকানো, XSS এড়াতে ইনপুট স্যানিটাইজ করা এবং রেট লিমিটিং (Rate Limiting) প্রয়োগ করা।",
      interviewSpeech:
        "ক্লায়েন্ট-সাইড ভ্যালিডেশন শুধুই ইউজার এক্সপেরিয়েন্সের জন্য; সিকিউরিটির জন্য সার্ভার ভ্যালিডেশন বাধ্যতামূলক কারণ হ্যাকাররা Postman দিয়ে সরাসরি API হিট করতে পারে। নিরাপদ ফর্ম হ্যান্ডলিংয়ের ৫টি নিয়ম: ১) **Zod সার্ভার ভ্যালিডেশন**: সার্ভার অ্যাকশনে প্রতিটি ইনপুট টাইপ ও লেন্থ কঠোরভাবে চেক করা। ২) **SQL/NoSQL ইনজেকশন প্রতিরোধ**: সরাসরি স্ট্রিং কনক্যাট না করে Prisma বা ORM-এর প্যারামিটারাইজড কুয়েরি ব্যবহার করা। ৩) **XSS প্রতিরোধ**: ইউজার কনটেন্টে ক্ষতিকর স্ক্রিপ্ট থাকলে তা ফিল্টার করতে `DOMPurify` ব্যবহার করা এবং `dangerouslySetInnerHTML` পরিহার করা। ৪) **CSRF প্রটেকশন**: Next.js Server Actions স্বয়ংক্রিয়ভাবে Origin হেডার ভেরিফাই করে। ৫) **রেট লিমিটিং**: লগইন বা পাসওয়ার্ড রিসেট ফর্মে ব্রুট-ফোর্স অ্যাটাক থামাতে Upstash Redis দিয়ে রেট লিমিট বসানো।",
      deepDive: [
        "**সার্ভার ভ্যালিডেশন**: ক্লায়েন্ট ভ্যালিডেশন বাইপাস করা সম্ভব, কিন্তু সার্ভার ভ্যালিডেশন সুরক্ষিত।",
        "**প্যারামিটারাইজড কুয়েরি**: ডাটাবেসে ক্ষতিকর কোড এক্সিকিউট হওয়া ঠেকায়।",
        "**রেট লিমিট**: রোবট বা বট দিয়ে হাজার হাজার স্প্যাম সাবমিশন আটকায়।",
      ],
      commonMistakes: [
        "শুধু ব্রাউজারের `required` অ্যাট্রিবিউটের ওপর ভরসা করা।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'Client validation is for UX, Server validation is for Security'।",
      ],
    },
  },

  // 28. useEffect Dependency Array Internals
  {
    id: "useeffect-dependency-array-internals",
    questionNumber: 28,
    question: "How does the useEffect dependency array work internally inside React Fiber?",
    banglaQuestion: "React Fiber ইঞ্জিনের ভেতরে useEffect-এর Dependency Array কীভাবে কাজ করে?",
    topic: "React Core",
    difficulty: "Advanced",
    importance: "High",
    tags: ["useEffect", "React Internals", "Fiber", "Object.is", "memoizedState"],
    english: {
      quickAnswer:
        "React stores the effect and its dependency array in a linked-list on the Fiber node's `memoizedState`. During re-renders, it runs `areHookInputsEqual` using `Object.is` to compare previous and current dependencies.",
      interviewSpeech:
        "Under the hood, every hook call in a component corresponds to a Hook object in a singly-linked list on that component's Fiber node (`fiber.memoizedState`). When `useEffect` runs on initial mount (`mountEffect`), React creates an effect object containing the effect callback, cleanup function, and dependency array, tagging the Fiber with the `Passive` effect bitmask. On subsequent re-renders (`updateEffect`), React calls an internal function `areHookInputsEqual(nextDeps, prevDeps)`. It loops through both arrays comparing each element with `Object.is()`. If any dependency differs by value or reference, React schedules the previous cleanup and the new effect to run asynchronously in the commit phase after the browser paints.",
      deepDive: [
        "**Fiber Hook Linked List**: `fiber.memoizedState -> hook1 -> hook2 -> hook3`.",
        "**`areHookInputsEqual`**: Compares `prevDeps[i]` and `nextDeps[i]` using `Object.is` (handles NaN === NaN, +0 !== -0).",
        "**Passive Effect Tag**: Marks the component so the Scheduler knows to invoke the effect in a microtask/post-paint callback without blocking UI paint.",
        "**Hook Order Requirement**: Because hooks are stored in a linked list indexed by execution order, hooks can never be placed inside `if` statements or loops.",
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Conceptual React Internal areHookInputsEqual Function",
        code: `// Conceptual internal implementation of React's dependency comparison
function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) return false;

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    // Object.is shallow comparison (Identical to ES6 Object.is)
    if (Object.is(nextDeps[i], prevDeps[i])) {
      continue;
    }
    return false; // Found a changed dependency!
  }
  return true; // All dependencies are identical -> Skip effect execution
}`,
      },
      commonMistakes: [
        "Thinking React uses deep equality (`JSON.stringify` or recursive checks) to compare dependencies—React ONLY performs shallow `Object.is` checks for performance reasons.",
      ],
      proTips: [
        "Mention that hooks depend on a strict linked-list order, which is why the 'Rules of Hooks' forbid calling hooks conditionally.",
      ],
    },
    bangla: {
      quickAnswer:
        "React Fiber প্রতিটি হুককে `memoizedState` নামের একটি Singly-Linked List-এ সংরক্ষণ করে এবং রেন্ডারের সময় `Object.is()` দিয়ে আগের ডিপেন্ডেন্সির সাথে বর্তমান ডিপেন্ডেন্সি শ্যালো তুলনা করে।",
      interviewSpeech:
        "React-এর ভেতরে প্রতিটি হুক একটি Singly-Linked List-এর নোড হিসেবে Fiber-এর `memoizedState`-এ জমা থাকে। প্রথম রেন্ডারে (`mountEffect`) React ইফেক্ট ফাংশন, ক্লিনআপ এবং ডিপেন্ডেন্সি অ্যারে সংরক্ষণ করে। পরবর্তী রেন্ডারে (`updateEffect`) React তার ইন্টারনাল `areHookInputsEqual` ফাংশন চালায়, যা একটি লুপের মাধ্যমে `Object.is()` দিয়ে পূর্ববর্তী ও বর্তমান মানগুলো তুলনা করে। কোনো একটি ভ্যালু বা রেফারেন্স পরিবর্তন হলে React ফাইবার নোডে 'Passive' ট্যাগ বসিয়ে দেয়, যার ফলে ব্রাউজার পেইন্ট হওয়ার ঠিক পর শিডিউলার আগের ক্লিনআপ চালিয়ে নতুন ইফেক্ট এক্সিকিউট করে।",
      deepDive: [
        "**হুক লিঙ্কড লিস্ট**: হুকগুলো এক্সিকিউশন অর্ডারের ওপর নির্ভরশীল, তাই এদের `if` বা লুপের ভেতর রাখা যায় না।",
        "**শ্যালো কম্প্যারিজন**: React কখনো ডিপ-কম্প্যারিজন করে না; শুধু `Object.is()` দিয়ে রেফারেন্স চেক করে।",
        "**নন-ব্লকিং এক্সিকিউশন**: ব্রাউজারের পেইন্ট শেষ হওয়ার পর অ্যাসিঙ্কভাবে ইফেক্ট চলে।",
      ],
      commonMistakes: [
        "মনে করা যে React ডিপেন্ডেন্সির ভেতরের অবজেক্টের প্রতিটি প্রপার্টি ডিপ-চেক করে; আসলে শুধুই মেমরি রেফারেন্স দেখে।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Fiber Linked List' এবং 'Object.is Shallow Comparison' টার্মগুলো উল্লেখ করুন।",
      ],
    },
  },

  // 29. Next.js Middleware & Proxy
  {
    id: "nextjs-middleware-proxy",
    questionNumber: 29,
    question: "What is Next.js Middleware and how do we use it for proxying or rewriting requests?",
    banglaQuestion: "Next.js Middleware কী এবং এটি দিয়ে কীভাবে Reverse Proxy বা URL Rewrite করা যায়?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Middleware", "Proxy", "Edge Runtime", "Rewrite", "NextResponse"],
    english: {
      quickAnswer:
        "Next.js Middleware runs code on the Edge before a request completes, allowing you to rewrite URLs, redirect users, modify headers/cookies, and act as a reverse proxy.",
      interviewSpeech:
        "Next.js Middleware is a file located at `middleware.ts` in the project root that executes on the ultra-fast Edge Runtime before a request reaches the route handlers or pages. It allows you to intercept incoming requests and return custom responses. Key use cases include: 1) **Authentication & RBAC**: Checking JWTs and redirecting unauthenticated users. 2) **URL Rewriting & Reverse Proxying**: Using `NextResponse.rewrite()` to serve content from an internal microservice or different path without changing the URL shown in the browser. 3) **Geolocation & A/B Testing**: Reading geo-headers to serve localized content. 4) **Security Headers & CORS**: Injecting Content-Security-Policy (CSP) and CORS headers globally.",
      deepDive: [
        "**Edge Runtime**: Lightweight V8 runtime optimized for sub-10ms global execution. No heavy Node.js built-ins (`fs`, `child_process`).",
        "**`NextResponse.redirect()` vs `NextResponse.rewrite()`**: Redirect changes the browser URL (HTTP 307/308). Rewrite preserves the browser URL while serving content from a different destination (Reverse Proxy).",
        "**Matcher Configuration**: Limits middleware execution to specific routes (`/dashboard/:path*`), skipping static assets (`_next/static`, images).",
      ],
      codeSnippet: {
        language: "typescript",
        caption: "Reverse Proxy & Header Injection in middleware.ts",
        code: `// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Reverse Proxy: Proxy /api/v2 requests to an external microservice
  if (request.nextUrl.pathname.startsWith("/api/v2")) {
    const targetUrl = new URL(
      request.nextUrl.pathname.replace("/api/v2", ""),
      "https://backend-microservice.internal"
    );
    return NextResponse.rewrite(targetUrl); // Reverse proxy without URL change!
  }

  // 2. Inject Security Headers
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};`,
      },
      commonMistakes: [
        "Trying to import heavy Node.js libraries (like Prisma ORM or `bcrypt`) in Middleware—Middleware runs on Edge runtime, which does not support full Node.js APIs.",
      ],
      proTips: [
        "Explain the critical difference: `redirect()` changes the browser URL, whereas `rewrite()` acts as an invisible reverse proxy.",
      ],
    },
    bangla: {
      quickAnswer:
        "Middleware হলো এমন একটি কোড লেয়ার যা কোনো পেজ রেন্ডার হওয়ার আগেই Edge সার্ভারে চলে এবং এর মাধ্যমে রিকোয়েস্ট ইন্টারসেপ্ট করে রিডাইরেক্ট, হেডার পরিবর্তন এবং রিভার্স প্রক্সি (Rewrite) করা যায়।",
      interviewSpeech:
        "Next.js-এর রুট ডিরেক্টরিতে `middleware.ts` ফাইলটি Edge Runtime-এ অত্যন্ত দ্রুত (১০ মিলিসেকেন্ডের মধ্যে) কাজ করে। এর প্রধান ব্যবহারগুলো হলো: ১) **অথেন্টিকেশন ও সিকিউরিটি**: পেজ লোড হওয়ার আগেই টোকেন ভ্যালিডেট করে ইউজারকে লগইন পেজে পাঠানো। ২) **রিভার্স প্রক্সি (Reverse Proxy)**: `NextResponse.rewrite(newUrl)` ব্যবহার করে ব্রাউজারের URL পরিবর্তন না করেই অন্য কোনো ইন্টারনাল সার্ভার বা মাইক্রোসার্ভিসের কনটেন্ট লোড করা। ৩) **জিও-লোকেশন ও আন্তর্জাতিকীকরণ (i18n)**: ইউজারের দেশ বা ভাষা অনুযায়ী সঠিক পেজে রিরাইট করা। ৪) **গ্লোবাল সিকিউরিটি হেডার**: প্রতিটি রেসপন্সে সিকিউরিটি হেডার যুক্ত করা।",
      deepDive: [
        "**`redirect` বনাম `rewrite`**: `redirect` ব্রাউজারের URL বদলে দেয়, আর `rewrite` ব্রাউজারের URL ঠিক রেখে ব্যাকগ্রাউন্ডে অন্য পাথ থেকে ডাটা এনে দেখায় (প্রক্সি)।",
        "**Edge Runtime সীমাবদ্ধতা**: মিডলওয়্যারে Node.js-এর ভারী লাইব্রেরি (যেমন `fs`, `bcrypt` বা ভারী ORM) চলে না।",
      ],
      commonMistakes: [
        "মিডলওয়্যারে ভারী ডাটাবেস কুয়েরি বা Node.js প্যাকেজ ব্যবহার করার চেষ্টা করা।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Edge Execution' এবং 'Reverse Proxy via NextResponse.rewrite' পরিষ্কারভাবে তুলে ধরুন।",
      ],
    },
  },

  // 30. Authentication in Server Components
  {
    id: "auth-in-server-components",
    questionNumber: 30,
    question: "How do we handle authentication and session verification in Server Components?",
    banglaQuestion: "Next.js Server Component-এ Authentication এবং সেশন ভেরিফিকেশন কীভাবে হ্যান্ডেল করবেন?",
    topic: "Security & Architecture",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Authentication", "Server Components", "cookies()", "Session", "Security"],
    english: {
      quickAnswer:
        "We read the secure HTTP-Only session cookie directly on the server using `cookies()` from `next/headers`, verify the JWT or query the database session, and pass the verified user object down or redirect if unauthorized.",
      interviewSpeech:
        "In Next.js Server Components, authentication is handled entirely server-side with zero client round-trips. We extract the session token from incoming request headers using `const cookieStore = await cookies()`. We then verify the cryptographic signature of the JWT using libraries like `jose` or query our database/Redis session store directly. If valid, the Server Component retrieves personalized user data and renders the HTML. If the token is invalid or expired, we invoke Next.js's native `redirect('/login')` function to halt rendering immediately. This eliminates the 'auth flash' loading spinners typical in client-side SPA architectures.",
      deepDive: [
        "**Zero Client Roundtrips**: No `useEffect -> fetch('/api/me') -> setLoading(false)` delay.",
        "**Zero Token Leakage**: JWT secrets and verification keys reside exclusively on the server.",
        "**React `cache()` for Session**: Wrap the `getSession()` helper in React's `cache()` so multiple Server Components in the same tree don't re-verify the token repeatedly.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Session Verification in Server Component with React cache()",
        code: `import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJwt } from "@/lib/auth";

// Memoized session helper for the current render
export const getSession = cache(async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  if (!token) return null;

  try {
    return await verifyJwt(token);
  } catch {
    return null;
  }
});

// app/dashboard/page.tsx - Server Component
export default async function DashboardPage() {
  const user = await getSession();

  // If unauthorized, halt and redirect immediately on the server
  if (!user) {
    redirect("/login?error=session_expired");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <p>Role: {user.role}</p>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Fetching `/api/auth/session` via `fetch()` inside a Server Component instead of reading cookies and querying the database/JWT directly.",
      ],
      proTips: [
        "Highlight that Server Component auth prevents the ugly 'flashing white screen / loading spinner' of client-side SPAs.",
      ],
    },
    bangla: {
      quickAnswer:
        "সার্ভার কম্পোনেন্টে `cookies()` দিয়ে সরাসরি HTTP-Only সেশন টোকেন রিড করা হয়, সার্ভারেই ক্রিপ্টোগ্রাফিক ভেরিফিকেশন বা ডাটাবেস চেক করা হয় এবং অবৈধ হলে সরাসরি `redirect('/login')` কল করা হয়।",
      interviewSpeech:
        "প্রথাগত React SPA-তে পেজ লোড হওয়ার পর `useEffect` দিয়ে `/api/me` কল করে অথেন্টিকেশন চেক করতে হতো, যার ফলে লোডিং স্পিনার ফ্ল্যাশ করত। কিন্তু Next.js Server Component-এ কোনো ক্লায়েন্ট নেটওয়ার্ক কল ছাড়াই সরাসরি সার্ভারেই `const cookieStore = await cookies()` দিয়ে সেশন কুকি পড়া যায়। এরপর `jose` দিয়ে JWT ভেরিফাই বা ডাটাবেসে সেশন মিলিয়ে দেখা হয়। ইউজার ভ্যালিড হলে সার্ভার থেকেই তার পার্সোনালাইজড পেজ রেন্ডার হয়; আর ভ্যালিড না হলে তাৎক্ষণিকভাবে `redirect('/login')` করে দেওয়া হয়।",
      deepDive: [
        "**তাত্ক্ষণিক রেন্ডার**: ব্রাউজারে কোনো অতিরিক্ত অথ API কল করতে হয় না।",
        "**নিরাপত্তা**: টোকেন সিক্রেট কি কখনোই ক্লায়েন্টে উন্মুক্ত হয় না।",
        "**React `cache()`**: একই পেজের একাধিক কম্পোনেন্ট `getSession()` কল করলে রিডানড্যান্ট ভেরিফিকেশন বন্ধ করে।",
      ],
      commonMistakes: [
        "সার্ভার কম্পোনেন্টের ভেতর আবার `fetch('http://localhost:3000/api/auth')` কল করা—যা একদম অপ্রয়োজনীয় ওভারহেড তৈরি করে।",
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'Server Component-এ অথেন্টিকেশন হ্যান্ডেল করলে ক্লায়েন্ট সাইড স্পিনারের কোনো প্রয়োজনই থাকে না'।",
      ],
    },
  },

  // 31. Structuring Large Scale Project
  {
    id: "structure-large-scale-react-next-project",
    questionNumber: 31,
    question: "How do you structure and architect a large-scale React / Next.js project?",
    banglaQuestion: "একটি বড় স্কেলের (Large Scale) React / Next.js প্রজেক্টের ফোল্ডার স্ট্রাকচার ও আর্কিটেকচার কীভাবে ডিজাইন করবেন?",
    topic: "Security & Architecture",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Project Structure", "Architecture", "Feature-based", "Scalability", "Clean Architecture"],
    english: {
      quickAnswer:
        "We structure large-scale projects using a Feature-Based (Domain-Driven) architecture, clear layer separation (UI, Business Logic, Data Access), isolated Design System components, and strict path aliases.",
      interviewSpeech:
        "For large enterprise codebases with dozens of developers, flat folder structures breakdown. I architect projects using a **Feature-Based Modular Architecture**: 1) The `app/` directory is kept ultra-thin, handling purely routing, layouts, and page entrypoints. 2) Core business features reside in `features/<feature-name>/` (e.g., `features/billing`, `features/analytics`), colocating feature-specific components, custom hooks, Server Actions, types, and services in one isolated domain. 3) Global primitives live in `components/ui/` (Design System / Shadcn). 4) Shared infrastructure lives in `lib/` (DB client, auth, utils). 5) We enforce strict boundaries using ESLint boundary rules and TypeScript path aliases (`@/features/...`) to prevent circular dependencies.",
      deepDive: [
        "**Thin App Router (`app/`)**: Only handles routing orchestration, layouts, and metadata.",
        "**Feature Modules (`features/`)**: Self-contained business domains (`features/auth/{components, hooks, actions, types}`).",
        "**Shared Design System (`components/ui`)**: Reusable dumb UI components (Buttons, Inputs, Modals).",
        "**Separation of Concerns**: Data Access Layer (`lib/db`), Business Logic (`features/*/services`), View Layer (`components`).",
      ],
      codeSnippet: {
        language: "text",
        caption: "Enterprise Feature-Based Next.js Architecture",
        code: `my-enterprise-app/
├── app/                      // Thin Routing Layer
│   ├── (auth)/login/page.tsx
│   ├── (dashboard)/
│   │   ├── billing/page.tsx
│   │   └── layout.tsx
│   └── layout.tsx
├── features/                 // Domain-Driven Feature Modules
│   ├── billing/              // Billing Feature Module
│   │   ├── components/       // InvoiceTable, PaymentForm
│   │   ├── hooks/            // useStripeCheckout
│   │   ├── actions/          // createSubscriptionAction.ts
│   │   ├── services/         // stripeService.ts
│   │   └── types/            // billing.types.ts
│   └── analytics/            // Analytics Feature Module
├── components/
│   ├── ui/                   // Design System Primitives (Button, Dialog)
│   └── layout/               // App Shell (Navbar, Sidebar)
├── lib/                      // Infrastructure Layer (db, redis, auth)
├── types/                    // Global ambient types
└── hooks/                    // Global cross-cutting hooks`,
      },
      commonMistakes: [
        "Grouping everything by file type (e.g. putting 500 components in a single `components/` folder and 200 hooks in `hooks/`), making it impossible to navigate feature domains.",
      ],
      proTips: [
        "Mention 'Feature-driven Colocation' and 'Keeping the App Router folder thin' as modern enterprise best practices.",
      ],
    },
    bangla: {
      quickAnswer:
        "বড় প্রজেক্টের জন্য Feature-Based (Domain-Driven) আর্কিটেকচার ব্যবহার করা হয়, যেখানে প্রতিটি ফিচারের (যেমন billing, auth) কম্পোনেন্ট, হুক ও সার্ভিস একসাথে থাকে এবং `app/` ডিরেক্টরিকে শুধুমাত্র রাউটিংয়ের জন্য হালকা রাখা হয়।",
      interviewSpeech:
        "এন্টারপ্রাইজ লেভেলের প্রজেক্টে ফাইল টাইপ অনুযায়ী ফোল্ডার বানালে (সব কম্পোনেন্ট এক ফোল্ডারে, সব হুক আরেক ফোল্ডারে) প্রজেক্ট মেইনটেইন করা অসম্ভব হয়ে পড়ে। তাই আমি **Feature-Based Modular Architecture** অনুসরণ করি: ১) `app/` ফোল্ডারটিকে খুবই হালকা রাখা হয়—এটি শুধুই রাউট এবং লেআউট ডিফাইন করে। ২) আসল বিজনেস লজিক থাকে `features/` ফোল্ডারের ভেতর আলাদা ডোমেইনে (যেমন `features/checkout`, `features/dashboard`), যার ভেতরে ওই ফিচারের নিজস্ব কম্পোনেন্ট, কাস্টম হুক, সার্ভার অ্যাকশন ও টাইপ থাকে। ৩) সব জায়গায় ব্যবহারযোগ্য বেসিক UI কম্পোনেন্টগুলো থাকে `components/ui/`-তে (ডিজাইন সিস্টেম)। ৪) ডাটাবেস ও ইউটিলিটি থাকে `lib/`-এ। এর ফলে একাধিক ডেভেলপার কনফ্লিক্ট ছাড়া কাজ করতে পারে।",
      deepDive: [
        "**ফিচার মডিউল**: যেকোনো ফিচার অন্য প্রজেক্টে সহজে রি-ইউজ বা রিফ্যাক্টর করা যায়।",
        "**লেয়ার সেপারেশন**: UI Layer, Business Logic Layer এবং Data Access Layer সম্পূর্ণ আলাদা থাকে।",
      ],
      commonMistakes: [
        "একক `components` ফোল্ডারের ভেতর শত শত অগোছালো ফাইল রেখে স্প্যাগেটি কোড তৈরি করা।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Feature Colocation' এবং 'Thin Route Layer' শব্দগুলো দিয়ে বোঝান।",
      ],
    },
  },

  // 32. Global Error Handling
  {
    id: "handle-global-error-handling",
    questionNumber: 32,
    question: "How do we handle Global Error Handling in React and Next.js?",
    banglaQuestion: "React এবং Next.js-এ Global Error Handling কীভাবে পরিচালনা করবেন?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Error Handling", "error.tsx", "global-error.tsx", "Error Boundary", "Sentry"],
    english: {
      quickAnswer:
        "Next.js handles errors hierarchically using route-level `error.tsx` Error Boundaries, root layout fallback `global-error.tsx`, structured Server Action return objects, and observability tools like Sentry.",
      interviewSpeech:
        "Error handling in Next.js is structured across 4 distinct levels: 1) **Route-Level `error.tsx`**: A client component Error Boundary that catches runtime errors in nested route segments without crashing the parent layout. It receives `error` and a `reset()` callback to retry rendering. 2) **Root `global-error.tsx`**: Replaces the entire root layout (including `<html>` and `<body>`) if an error occurs inside `app/layout.tsx`. 3) **Server Actions / API Error Pattern**: Never let Server Actions throw uncaught exceptions to the UI. Instead, use a Result pattern returning `{ success: boolean, data?: T, error?: string }`. 4) **Centralized Observability**: Integrate monitoring tools like Sentry or Datadog via Next.js `instrumentation.ts` to capture unhandled stack traces and alert on-call teams.",
      deepDive: [
        "**`error.tsx` (Route Boundary)**: Must be a Client Component (`'use client'`). Retains parent layout.",
        "**`global-error.tsx` (Root Boundary)**: Must define its own `<html>` and `<body>` tags.",
        "**`reset()` function**: Attempts to re-render the segment without requiring a full browser reload.",
        "**`not-found.tsx`**: Triggered programmatically via `notFound()` for missing 404 resources.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Global Error Boundary (app/global-error.tsx)",
        code: `"use client";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service (Sentry / Datadog)
    console.error("Global Crash Caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center p-6 bg-zinc-950 text-white">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-2xl font-bold text-rose-500">Critical Error</h2>
          <p className="text-zinc-400 text-sm">Something went wrong across the application.</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-rose-600 rounded-lg hover:bg-rose-700 font-medium cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}`,
      },
      commonMistakes: [
        "Forgetting to make `error.tsx` or `global-error.tsx` a Client Component (`'use client'`), which causes Next.js build errors.",
      ],
      proTips: [
        "Mention `global-error.tsx` (which catches root layout crashes) in addition to regular `error.tsx`.",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js-এ রুট সেগমেন্টের এরর হ্যান্ডেল করতে `error.tsx`, রুট লেআউট ক্র্যাশ ঠেকাতে `global-error.tsx`, সার্ভার অ্যাকশনে রেজাল্ট অবজেক্ট প্যাটার্ন এবং Sentry দিয়ে এরর মনিটরিং করা হয়।",
      interviewSpeech:
        "Next.js App Router-এ এরর হ্যান্ডলিং ৪টি স্তরে পরিচালিত হয়: ১) **`error.tsx`**: এটি একটি Client Component Error Boundary যা কোনো সাব-পেজে এরর ঘটলে পুরো অ্যাপ ক্র্যাশ না করে শুধু ওই পেজের জায়গায় একটি সুন্দর ফলব্যাক UI দেখায় এবং `reset()` ফাংশন দিয়ে পুনরায় চেষ্টা করার সুযোগ দেয়। ২) **`global-error.tsx`**: যদি মূল রুট `app/layout.tsx`-এ কোনো এরর ঘটে, তখন এটি ট্রিগার হয় এবং এর নিজস্ব `<html>` ও `<body>` দিয়ে অ্যাপ রিকভার করে। ৩) **সার্ভার অ্যাকশন এরর প্যাটার্ন**: সার্ভার ফাংশন থেকে সরাসরি ক্র্যাশ না করে `{ success: false, error: '...' }` ফরম্যাটে স্ট্রাকচার্ড এরর রিটার্ন করা। ৪) **সেন্ট্রি (Sentry) লগিং**: প্রোডাকশনে ইউজারদের অজান্তে ঘটা যেকোনো বাগ রিয়েল-টাইমে ট্র্যাক করা।",
      deepDive: [
        "**`error.tsx`**: প্যারেন্ট লেআউট সুরক্ষিত রাখে, শুধু চাইল্ডে ফলব্যাক দেখায়।",
        "**`reset()` মেথড**: ইউজারকে পুরো পেজ রিফ্রেশ না করিয়ে কম্পোনেন্টটি রি-ট্রাই করতে দেয়।",
      ],
      commonMistakes: [
        "`error.tsx` ফাইলের শুরুতে `'use client'` না দেওয়া; এরর বাউন্ডারিতে ক্লায়েন্ট স্টেট দরকার হয় তাই এটি বাধ্যতামূলক।",
      ],
      proTips: [
        "ইন্টারভিউতে `global-error.tsx` এবং `reset()` মেকানিজম উল্লেখ করুন।",
      ],
    },
  },

  // 33. How to Implement Caching in Next.js
  {
    id: "how-to-implement-caching-nextjs",
    questionNumber: 33,
    question: "How do we implement and control caching in Next.js?",
    banglaQuestion: "Next.js-এ Caching কীভাবে বাস্তবায়ন ও নিয়ন্ত্রণ করবেন?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Caching", "revalidateTag", "revalidatePath", "fetch cache", "Next.js"],
    english: {
      quickAnswer:
        "We implement caching using fetch options (`{ cache: 'force-cache' | 'no-store' }`), time-based revalidation (`{ next: { revalidate: 60 } }`), on-demand cache tags (`{ next: { tags: ['tag'] } }`), and `revalidateTag()` / `revalidatePath()`.",
      interviewSpeech:
        "In Next.js App Router, caching is configured declaratively: 1) **Static Data Caching**: By default, `fetch` requests in Server Components are cached using `cache: 'force-cache'`. 2) **Time-Based Revalidation**: To refresh data periodically, pass `next: { revalidate: 3600 }` (e.g. hourly). 3) **On-Demand Tag-Based Revalidation**: Tag your fetch calls with `next: { tags: ['products'] }`. When data changes in your database or CMS, trigger `revalidateTag('products')` inside a Server Action or Route Handler to purge the cache instantly. 4) **Dynamic Opt-out**: To bypass caching for real-time data, pass `cache: 'no-store'` or export `export const dynamic = 'force-dynamic'`. 5) **In-Memory Query Caching**: Use React `cache()` to memoize non-fetch ORM calls.",
      deepDive: [
        "**`revalidateTag(tag)`**: Purges all cached entries associated with a specific tag across the entire application without rebuilding.",
        "**`revalidatePath(path)`**: Invalidates cached HTML and data for a specific route path.",
        "**Route Segment Config**: `export const revalidate = 60` or `export const dynamic = 'force-dynamic'` configures the entire file.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Full Caching & On-Demand Invalidation Pipeline",
        code: `// 1. Data Fetching with Cache Tag (app/products/page.tsx)
export async function ProductsPage() {
  const res = await fetch("https://api.store.com/items", {
    next: { tags: ["store-items"], revalidate: 86400 } // 24h fallback + tag
  });
  const items = await res.json();
  return <ProductGrid items={items} />;
}

// 2. Server Action to Invalidate on Update (app/actions/product.ts)
"use server";
import { revalidateTag } from "next/cache";

export async function updateProductPrice(id: string, newPrice: number) {
  await db.product.update({ where: { id }, data: { price: newPrice } });
  
  // Instantly purges cache so all users see updated price immediately!
  revalidateTag("store-items");
  return { success: true };
}`,
      },
      commonMistakes: [
        "Assuming that modifying the database automatically updates the cache without explicitly calling `revalidateTag` or `revalidatePath`.",
      ],
      proTips: [
        "Highlight 'On-Demand Tag-based Caching' as the cleanest and most scalable caching pattern in Next.js.",
      ],
    },
    bangla: {
      quickAnswer:
        "Next.js-এ ক্যাশিং নিয়ন্ত্রণ করতে `fetch`-এ `{ cache: 'force-cache' }` বা `{ next: { revalidate: 60, tags: ['item'] } }` দেওয়া হয় এবং ডেটা আপডেটের পর `revalidateTag('item')` কল করে ক্যাশ ফ্রেশ করা হয়।",
      interviewSpeech:
        "Next.js App Router-এ ক্যাশিং বাস্তবায়নের প্রধান উপায়গুলো হলো: ১) **স্ট্যাটিক ক্যাশ**: `fetch(url, { cache: 'force-cache' })` দিয়ে ডেটা পারসিস্টেন্টলি ক্যাশ করা। ২) **টাইম-বেসড রি-ভ্যালিডেশন**: `{ next: { revalidate: 3600 } }` দিয়ে প্রতি ১ ঘণ্টা পর ব্যাকগ্রাউন্ডে ক্যাশ আপডেট করা। ৩) **অন-ডিমান্ড ট্যাগ ক্যাশিং**: ফেচ রিকোয়েস্টে ট্যাগ বসানো `{ next: { tags: ['products'] } }`, এবং প্রোডাক্ট এডিট হলে সার্ভার অ্যাকশন থেকে `revalidateTag('products')` কল করে তৎক্ষণাৎ ক্যাশ ডিলিট করে ফ্রেশ ডেটা আনা। ৪) **ডায়নামিক অপ্ট-আউট**: লাইভ ডেটার জন্য `{ cache: 'no-store' }` বা `export const dynamic = 'force-dynamic'` ব্যবহার করা। ৫) **ফাংশন মেমোইজেশন**: ডাটাবেস কুয়েরির জন্য React `cache()` ব্যবহার করা।",
      deepDive: [
        "**`revalidateTag`**: নির্দিষ্ট ট্যাগযুক্ত সব ডেটা এক ক্লিকে ক্যাশ থেকে ইনভ্যালিডেট করে।",
        "**`revalidatePath`**: নির্দিষ্ট URL পাথের সম্পূর্ণ ক্যাশ ক্লিয়ার করে।",
      ],
      commonMistakes: [
        "ডাটাবেসে আপডেট করার পর `revalidateTag` কল করতে ভুলে যাওয়া, যার ফলে সাইটে পুরোনো ডেটা থেকেই যায়।",
      ],
      proTips: [
        "ইন্টারভিউতে 'On-Demand Tag Invalidation' মেকানিজমটি স্পষ্ট করে বুঝিয়ে বলুন।",
      ],
    },
  },

  // 34. Issues Using Heavy Server Component
  {
    id: "issues-heavy-server-component",
    questionNumber: 34,
    question: "What are the bottlenecks and issues when using a heavy Server Component?",
    banglaQuestion: "একটি ভারী Server Component ব্যবহারের সম্ভাব্য সমস্যা ও সীমাবদ্ধতাগুলো কী কী?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Server Components", "TTFB", "Streaming", "Bottlenecks", "Suspense"],
    english: {
      quickAnswer:
        "Heavy Server Components can cause high Time to First Byte (TTFB) blocking the entire page response, high server CPU/memory usage, cold-start latency on serverless lambdas, and inability to handle interactive client state.",
      interviewSpeech:
        "While Server Components are powerful, making them excessively heavy introduces critical bottlenecks: 1) **High TTFB & Blocked Streaming**: If an async Server Component executes slow database queries or synchronous CPU tasks without React `<Suspense>`, the entire browser response is blocked, leading to a blank screen and poor Time to First Byte (TTFB). 2) **Server Resource Saturation**: Heavy compute on the server increases CPU and memory consumption, escalating hosting costs under high traffic. 3) **Serverless Cold Starts**: Heavy imports increase bundle initialization times on serverless functions (e.g. AWS Lambda / Vercel Edge). 4) **Zero Interactivity**: Server components cannot use hooks or listen to UI events. The solution is to wrap slow data fetches in `<Suspense>` boundaries to stream HTML progressively.",
      deepDive: [
        "**Fix for TTFB**: Wrap slow components in `<Suspense fallback={<Skeleton />}>` so static shell loads in 20ms while data streams.",
        "**Offload CPU Work**: Move heavy computations to asynchronous background worker jobs or queue systems (BullMQ, Redis).",
        "**Selective Hydration**: Keep interactive logic in lean Client Components at the bottom of the tree.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Solving Heavy Server Component TTFB with Suspense Streaming",
        code: `// Slow Server Component (takes 2 seconds to fetch analytics)
async function HeavyAnalytics() {
  const data = await fetchMassiveAnalytics(); // Slow 2s DB query
  return <AnalyticsTable data={data} />;
}

// Page Component: Loads INSTANTLY (20ms TTFB) via Suspense streaming
export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Fast Dashboard Header</h1>
      <p>This part renders immediately without waiting for analytics!</p>
      
      {/* Streams in progressively without blocking the rest of the page */}
      <Suspense fallback={<Skeleton className="h-64 w-full" />}>
        <HeavyAnalytics />
      </Suspense>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Letting multiple slow `await` queries execute at the root of a page without `<Suspense>`, causing the entire page to freeze on load.",
      ],
      proTips: [
        "Explain how React `<Suspense>` streaming is the primary architectural remedy for heavy Server Component latency.",
      ],
    },
    bangla: {
      quickAnswer:
        "ভারী সার্ভার কম্পোনেন্ট পুরো পেজের TTFB (Time to First Byte) বাড়িয়ে পেজ লোডিং আটকে দেয়, সার্ভারের CPU/র‍্যামের খরচ বাড়ায় এবং সার্ভারলেস কোল্ড-স্টার্টের সময় স্লো হয়। সমাধান হলো React Suspense দিয়ে স্ট্রিমিং করা।",
      interviewSpeech:
        "সার্ভার কম্পোনেন্ট অনেক শক্তিশালী হলেও অতিরিক্ত ভারী হলে বড় সমস্যা দেখা দেয়: ১) **স্লো TTFB ও পেজ ব্লকিং**: সার্ভার কম্পোনেন্টে যদি কোনো ভারী ডাটাবেস কুয়েরি বা ধীরগতির API কল থাকে এবং তা `<Suspense>` দিয়ে র‍্যাপ না করা হয়, তবে পুরো পেজের রেসপন্স আটকে থাকে এবং ইউজার সাদা স্ক্রিন দেখে। ২) **সার্ভারের ওপর অতিরিক্ত চাপ**: প্রচুর ইউজার হিট করলে সার্ভারের CPU এবং মেমরি খরচ আকাশচুম্বী হয়ে যায়। ৩) **সার্ভারলেস কোল্ড স্টার্ট**: ভারী লাইব্রেরির কারণে সার্ভারলেস ফাংশন চালু হতে সময় বেশি লাগে। ৪) **ইন্টারঅ্যাক্টিভিটিহীনতা**: এতে কোনো ইভেন্ট বা স্টেট ব্যবহার করা যায় না। এর প্রধান সমাধান হলো ভারী অংশগুলোকে `<Suspense fallback={<Skeleton />}>` দিয়ে র‍্যাপ করে স্ট্রিমিং (Streaming HTML) চালু করা।",
      deepDive: [
        "**TTFB কমানোর উপায়**: পেজের দ্রুত অংশগুলো আগে পাঠানো এবং ভারী অংশগুলো পরে স্ট্রিম করা।",
        "**কোল্ড স্টার্ট**: সার্ভারলেস ফাংশন অপ্টিমাইজেশনের জন্য বড় ডিপেন্ডেন্সি কমানো।",
      ],
      commonMistakes: [
        "পেজের টপ-লেভেলে ৩-৪টি ধীরগতির `await` কল একসাথে রেখে পুরো পেজকে ফ্রিজ করে ফেলা।",
      ],
      proTips: [
        "ইন্টারভিউতে 'React Suspense Streaming' এবং 'TTFB Optimization' সমাধান হিসেবে তুলে ধরুন।",
      ],
    },
  },

  // 35. Maintain Large Number of Pages
  {
    id: "maintain-large-number-of-pages-nextjs",
    questionNumber: 35,
    question: "How can we maintain and scale a large number of pages (e.g. 500,000+) in Next.js?",
    banglaQuestion: "Next.js-এ লাখ লাখ পেজ (যেমন ৫,০০,০০০+ প্রডাক্ট পেজ) কীভাবে স্কেল ও মেইনটেইন করবেন?",
    topic: "Next.js App Router",
    difficulty: "Advanced",
    importance: "High",
    tags: ["Scalability", "ISR", "generateStaticParams", "Architecture", "CDN Caching"],
    english: {
      quickAnswer:
        "We scale 500,000+ pages using Incremental Static Regeneration (ISR) with on-demand generation, pre-rendering only top pages at build time, CDN Edge Caching, Database Connection Pooling, and modular component architecture.",
      interviewSpeech:
        "Scaling a Next.js application to hundreds of thousands or millions of pages requires a multi-pronged strategy: 1) **Selective Pre-rendering with ISR**: Never pre-render all 500,000 pages at build time (builds would take days). Instead, pre-render the top 1,000 most popular items in `generateStaticParams()`. Set `export const dynamicParams = true` so the remaining 499,000 pages are generated on-demand upon first user visit and cached permanently via ISR. 2) **CDN Edge Caching**: Distribute static HTML snapshots across global edge locations (Cloudflare/Fastly/Vercel) so 99% of requests hit the cache with <20ms latency. 3) **Database Connection Pooling**: Use Prisma Accelerate, PgBouncer, or Supabase connection poolers to prevent thousands of simultaneous serverless workers from exhausting database connections. 4) **On-Demand Invalidation**: Purge stale caches via `revalidateTag()` when CMS updates happen instead of full site rebuilds.",
      deepDive: [
        "**`dynamicParams = true`**: Allows on-demand generation of unbuilt dynamic paths on the fly.",
        "**Database Read Replicas & Pooling**: Essential when thousands of concurrent ISR regenerations occur.",
        "**Automated Sitemap Splitting**: Next.js automatically generates chunked sitemaps (`sitemap.xml`) via `generateSitemaps()` for massive SEO catalogs.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "Scaling 500k Pages with Selective Build-time ISR & On-Demand Fallback",
        code: `// app/catalog/[id]/page.tsx

// 1. Only pre-build the top 1,000 highest-traffic products at build time!
export async function generateStaticParams() {
  const topProducts = await db.product.findMany({
    take: 1000,
    orderBy: { views: "desc" },
    select: { id: true }
  });
  return topProducts.map((p) => ({ id: p.id }));
}

// 2. Allow on-demand generation for the other 499,000 products!
export const dynamicParams = true; // Serves on-demand & caches via ISR

export default async function ProductCatalogPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const product = await getProductById(id);
  return <ProductView product={product} />;
}`,
      },
      commonMistakes: [
        "Trying to return 500,000 slugs inside `generateStaticParams()`, causing CI/CD build timeouts and out-of-memory crashes.",
      ],
      proTips: [
        "Mention `generateSitemaps()` for splitting massive sitemaps into Google-compliant 50,000-URL chunks.",
      ],
    },
    bangla: {
      quickAnswer:
        "লাখ লাখ পেজের জন্য বিল্ড টাইমে শুধু টপ ১,০০০ পেজ জেনারেট করা হয় এবং বাকিগুলো `dynamicParams = true` দিয়ে প্রথম রিকোয়েস্টে ISR-এর মাধ্যমে ব্যাকগ্রাউন্ডে তৈরি ও ক্যাশ করা হয়। সাথে CDN ক্যাশিং ও ডাটাবেস কানেকশন পুলিং ব্যবহার করা হয়।",
      interviewSpeech:
        "৫ লাখ পেজের সাইট পরিচালনা করার জন্য আমরা যা করি: ১) **সিলেক্টিভ ISR ও অন-ডিমান্ড জেনারেশন**: বিল্ড টাইমে ৫ লাখ পেজ বানাতে গেলে সার্ভার ক্র্যাশ করবে। তাই `generateStaticParams()`-এ শুধু সেরা ১,০০০ পেজ বিল্ড করা হয়। আর `dynamicParams = true` দিয়ে বাকি পেজগুলো কোনো ইউজার ভিজিট করা মাত্র ব্যাকগ্রাউন্ডে বানিয়ে স্ট্যাটিক ক্যাশে জমা রাখা হয়। ২) **CDN এজ ক্যাশিং**: ক্যাশ পেজগুলো ক্লাউডফ্লেয়ার বা এজ নেটওয়ার্কে থাকে, ফলে ডাটাবেসে কোনো চাপ ছাড়াই ইউজার ২০ মিলিসেকেন্ডে পেজ দেখতে পায়। ৩) **ডাটাবেস কানেকশন পুলিং (PgBouncer/Prisma Accelerate)**: হাজার হাজার সার্ভারলেস ফাংশন যেন ডাটাবেস ক্র্যাশ না করায়। ৪) **অন-ডিমান্ড ট্যাগ রিভ্যালিডেশন**: ডেটা পরিবর্তন হলে `revalidateTag` দিয়ে পলকে নির্দিষ্ট ক্যাশ ফ্রেশ করা হয়।",
      deepDive: [
        "**`dynamicParams = true`**: অজানা পাথে ৪০৪ না দিয়ে অন-ডিমান্ড স্ট্যাটিক পেজ বানায়।",
        "**Sitemap Splitting**: Next.js-এর `generateSitemaps()` দিয়ে ৫০,০০০ করে সাইটম্যাপ টুকরো করা যায়।",
      ],
      commonMistakes: [
        "`generateStaticParams`-এ ৫ লাখ আইডি পাস করে বিল্ড টাইম আউট ঘটানো।",
      ],
      proTips: [
        "ইন্টারভিউতে 'Selective Build-Time Pre-rendering' এবং 'Connection Pooling' কনসেপ্ট তুলে ধরুন।",
      ],
    },
  },

  // 36. Handling Large Datasets in Frontend
  {
    id: "handling-large-datasets-frontend",
    questionNumber: 36,
    question: "If we have a massive dataset (e.g., 100,000+ rows), how do you solve the performance and rendering issues in React?",
    banglaQuestion: "যদি বিশাল সাইজের ডেটাসেট (যেমন ১,০০,০০০+ রো) থাকে, তবে React-এ পারফরম্যান্স ও রেন্ডারিং সমস্যা কীভাবে সমাধান করবেন?",
    topic: "Performance & Data",
    difficulty: "Advanced",
    importance: "Must Know",
    tags: ["Large Datasets", "Virtualization", "Pagination", "Web Workers", "Performance"],
    english: {
      quickAnswer:
        "We handle massive datasets using Server-side Cursor Pagination, List Virtualization (Windowing via `@tanstack/react-virtual`), Web Workers for background data filtering/sorting, and Canvas/WebGL for graphics.",
      interviewSpeech:
        "Rendering 100,000 raw DOM elements will crash the browser due to DOM node exhaustion and massive memory consumption. To solve this, we employ a 4-tier architectural strategy: 1) **Server-Side Pagination & Infinite Scroll**: Never send 100,000 items to the client at once. Use server-side cursor pagination returning 50 items per page with infinite scrolling. 2) **DOM Virtualization (Windowing)**: If all items must be searchable on the client, use `@tanstack/react-virtual` or `react-window`. This renders only the ~20 DOM nodes visible in the current scroll viewport, recycling DOM nodes as the user scrolls. 3) **Web Workers**: Move heavy client-side filtering, fuzzy searching, or sorting of large JSON arrays into a background Web Worker so the main UI thread stays at a silky 60fps. 4) **Memoization & Immutability**: Use `React.memo` and stable row keys to prevent re-rendering unchanged table rows.",
      deepDive: [
        "**Virtualization (Windowing)**: Absolute positioning of only visible rows calculated based on scroll offset.",
        "**Cursor-based Pagination**: Faster and more consistent than offset-based `LIMIT/OFFSET` on large DB tables.",
        "**Web Worker Filtering**: `comlink` library simplifies Web Worker RPC communication for sorting/filtering.",
      ],
      codeSnippet: {
        language: "tsx",
        caption: "List Virtualization with @tanstack/react-virtual",
        code: `import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

export function VirtualizedTable({ rows }: { rows: RowData[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  // Virtualizer calculates which ~20 items are visible out of 100,000!
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40, // Row height in px
    overscan: 5, // Extra buffer rows above/below
  });

  return (
    <div ref={parentRef} className="h-96 overflow-auto border rounded">
      <div
        className="w-full relative"
        style={{ height: \`\${rowVirtualizer.getTotalSize()}px\` }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const row = rows[virtualRow.index];
          return (
            <div
              key={row.id}
              className="absolute top-0 left-0 w-full p-2 border-b flex justify-between"
              style={{
                height: \`\${virtualRow.size}px\`,
                transform: \`translateY(\${virtualRow.start}px)\`,
              }}
            >
              <span>{row.id}</span>
              <span>{row.name}</span>
              <span>{row.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
      },
      commonMistakes: [
        "Fetching all 100,000 objects in one giant JSON payload (e.g. 50MB) and attempting to map them into normal `<div>` elements.",
      ],
      proTips: [
        "Mention the combination of 'Server-side Cursor Pagination' + '@tanstack/react-virtual' + 'Web Workers' for a complete senior answer.",
      ],
    },
    bangla: {
      quickAnswer:
        "বিশাল ডেটাসেট হ্যান্ডেল করতে সার্ভার-সাইড কার্সার পেজিনেশন, `@tanstack/react-virtual` দিয়ে ভার্চুয়ালাইজেশন (শুধুমাত্র স্ক্রিনে দৃশ্যমান ২০টি ডম নোড রেন্ডার করা) এবং ব্যাকগ্রাউন্ড Web Worker ব্যবহার করা হয়।",
      interviewSpeech:
        "ব্রাউজারে ১ লাখ DOM এলিমেন্ট সরাসরি রেন্ডার করলে ব্রাউজার মেমরি ক্র্যাশ করবে। এটি সমাধানের ৪টি সেরা উপায়: ১) **সার্ভার-সাইড পেজিনেশন ও ইনফিনিট স্ক্রল**: সার্ভার থেকে একবারে ১ লাখ ডাটা না এনে পৃষ্ঠা অনুযায়ী ৫০টি করে ডাটা ফেচ করা। ২) **লিস্ট ভার্চুয়ালাইজেশন (Windowing)**: `@tanstack/react-virtual` বা `react-window` ব্যবহার করা। এতে স্ক্রিনের ভেতরে যে ২০-৩০টি রো দেখা যাচ্ছে শুধুই সেগুলো ডমে রেন্ডার থাকে, স্ক্রল করার সাথে সাথে ডম নোডগুলো রি-ইউজ হয়। ৩) **Web Worker**: ক্লায়েন্টে লাখ লাখ ডেটা সার্চ বা সর্ট করতে হলে তা ব্যাকগ্রাউন্ড Web Worker থ্রেডে চালানো, যাতে মেইন UI থ্রেড কখনোই হ্যাং না হয়। ৪) **রো মেমোইজেশন**: `React.memo` দিয়ে টেবিলের রো র‍্যাপ করা যাতে কোনো রো সিলেক্ট করলে বাকি ৯৯,৯৯৯ রো আবার রি-রেন্ডার না হয়।",
      deepDive: [
        "**ভার্চুয়ালাইজেশন**: স্ক্রল পজিশন মেপে ডাইনামিকালি `transform: translateY()` দিয়ে রো পজিশন করা হয়।",
        "**কার্সার পেজিনেশন**: ডেটাবেসের `OFFSET` এভয়েড করে ইনডেক্সড ID ধরে দ্রুত ফেচ করে।",
        "**Web Worker**: UI ফ্রিজিং ছাড়াই ব্যাকগ্রাউন্ডে জটিল ফিল্টারিং চালায়।",
      ],
      commonMistakes: [
        "একবারে ৫০ মেগাবাইটের JSON ফেচ করে সাধারণ `map()` দিয়ে স্ক্রিনে রেন্ডার করার চেষ্টা করা।",
      ],
      proTips: [
        "ইন্টারভিউতে 'DOM Virtualization' এবং 'Web Worker Offloading' স্পষ্টভাবে ব্যাখ্যা করুন।",
      ],
    },
  },
];

export const MOCK_INTERVIEW_SESSIONS: MockInterviewSession[] = [
  {
    id: "react-nextjs-august-2026",
    slug: "react-nextjs-august-2026",
    title: "React & Next.js Core to Advanced Mock Session",
    subtitle: "Complete 36-question mastery covering React internals, App Router, performance, caching, and security.",
    date: "2026-08-27",
    formattedDate: "August 27, 2026",
    category: "React & Next.js Core & Advanced",
    description:
      "A comprehensive mock interview session containing all 36 vital React & Next.js questions asked in modern technical interviews. Equipped with bilingual (English + Bangla) interview scripts, technical deep-dives, code patterns, and interactive glossary tooltips.",
    totalQuestions: REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026.length,
    durationEstimate: "60 - 90 mins",
    questions: REACT_NEXTJS_MOCK_QUESTIONS_AUG_2026,
  },
];
