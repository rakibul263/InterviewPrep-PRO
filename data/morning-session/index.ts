import { MockInterviewItem } from "@/types";

export interface MorningModuleInfo {
  id: string;
  name: string;
  topic: string;
  questionRange: [number, number];
  count: number;
  badgeColor: string;
}

export const MORNING_SESSION_MODULES: MorningModuleInfo[] = [
  {
    id: "js-fund-1",
    name: "JavaScript Fundamentals I",
    topic: "Variables, Data Types, Functions & Scope",
    questionRange: [1, 15],
    count: 15,
    badgeColor: "amber",
  },
  {
    id: "js-fund-2",
    name: "JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    questionRange: [16, 30],
    count: 15,
    badgeColor: "orange",
  },
  {
    id: "react-fund",
    name: "React Fundamentals",
    topic: "Components, Hooks & State Management",
    questionRange: [31, 45],
    count: 15,
    badgeColor: "cyan",
  },
  {
    id: "react-adv",
    name: "React Advanced",
    topic: "Routing, Performance & Patterns",
    questionRange: [46, 60],
    count: 15,
    badgeColor: "blue",
  },
  {
    id: "node-express",
    name: "Node.js & Express",
    topic: "Server, REST APIs & Middleware",
    questionRange: [61, 75],
    count: 15,
    badgeColor: "emerald",
  },
  {
    id: "mongodb-mongoose",
    name: "MongoDB & Mongoose",
    topic: "Database Design, Schemas & Queries",
    questionRange: [76, 90],
    count: 15,
    badgeColor: "green",
  },
  {
    id: "fullstack-integration",
    name: "Full-Stack Integration",
    topic: "Auth, Deployment & Best Practices",
    questionRange: [91, 100],
    count: 10,
    badgeColor: "purple",
  },
];

export const MORNING_SESSION_QUESTIONS: MockInterviewItem[] = [
  {
    "id": "ms-q1-var-let-const",
    "questionNumber": 1,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between var, let, and const in JavaScript?",
    "banglaQuestion": "JavaScript-এ var, let এবং const-এর মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Variables",
      "Scope",
      "Hoisting",
      "ES6"
    ],
    "english": {
      "quickAnswer": "`var` is function-scoped and hoisted with `undefined`, while `let` and `const` are block-scoped and hoisted into the Temporal Dead Zone (TDZ). `const` additionally prevents variable reassignment.",
      "interviewSpeech": "The difference lies in scope, hoisting behavior, and reassignability. `var` is function-scoped (or globally scoped if declared outside a function), meaning it ignores `{}` blocks like loops and if-statements, and can be redeclared. When hoisted, `var` is initialized with `undefined`. `let` and `const`, introduced in ES6, are block-scoped—meaning they live strictly inside the enclosing curly braces `{}`. They are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ) until execution reaches their declaration line, throwing a `ReferenceError` if accessed early. Finally, `let` allows value reassignment, whereas `const` requires immediate initialization and binds its variable identifier immutably.",
      "deepDive": [
        "**Scope**: `var` attaches to the nearest function or `window` global; `let`/`const` adhere to block boundaries (`if`, `for`, `while`).",
        "**Hoisting**: `var` is initialized with `undefined`; `let`/`const` enter the TDZ (uninitialized).",
        "**Mutation vs Reassignment**: `const user = { name: 'A' }` allows `user.name = 'B'` (object mutation), but disallows `user = {}` (reassignment)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "var vs let vs const in Action",
        "code": "// var ignores block scope:\nif (true) {\n  var a = 10;\n  let b = 20;\n}\nconsole.log(a); // 10\n// console.log(b); // ReferenceError: b is not defined\n\n// const prevents reassignment, not mutation:\nconst config = { theme: 'dark' };\nconfig.theme = 'light'; // Allowed!\n// config = {}; // TypeError: Assignment to constant variable"
      },
      "commonMistakes": [
        "Thinking `const` makes objects deeply immutable (use `Object.freeze()` for shallow freeze).",
        "Saying `let` and `const` are not hoisted (they ARE hoisted, but placed in the TDZ)."
      ],
      "proTips": [
        "Mention the modern standard: 'Default to `const` for predictable immutability; use `let` only when values must change; avoid `var` entirely in modern ES6+ codebases.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`var` হলো ফাংশন-স্কোপড এবং `undefined` দিয়ে হোইস্টেড হয়; আর `let` এবং `const` হলো ব্লক-স্কোপড এবং TDZ-এ থাকে। `const`-এ রিঅ্যাসাইন করা যায় না।",
      "interviewSpeech": "`var`, `let` এবং `const`-এর মধ্যে ৩টি মূল পার্থক্য রয়েছে: স্কোপ, হোইস্টিং এবং রিঅ্যাসাইনমেন্ট। `var` হলো ফাংশন-স্কোপড, অর্থাৎ এটি কোনো `if` বা `for` লুপের কার্লি ব্রেসেস `{}` মানে না, যার ফলে বাগ হওয়ার ঝুঁকি থাকে। আর `var` ডিক্লেয়ারেশনের আগেই অ্যাক্সেস করলে `undefined` দেয়। অন্যদিকে ES6-এর `let` এবং `const` হলো ব্লক-স্কোপড—এরা যে ব্লকে ডিক্লেয়ার হয় কেবল সেখানেই সীমাবদ্ধ থাকে। এদের হোইস্টিং হলেও ডিক্লেয়ারেশন লাইনে পৌঁছানোর আগ পর্যন্ত এরা 'Temporal Dead Zone (TDZ)'-এ থাকে, তাই আগে অ্যাক্সেস করলে ReferenceError দেয়। সবশেষে, `let`-এর মান পরিবর্তন (রিঅ্যাসাইন) করা যায়, কিন্তু `const`-এর ভেরিয়েবল আইডেন্টিফায়ার রিঅ্যাসাইন করা যায় না।",
      "deepDive": [
        "**স্কোপিং**: `var` ফাংশন স্কোপড, `let` ও `const` ব্লক স্কোপড।",
        "**হোইস্টিং**: `var` ইনিশিয়ালাইজ হয় `undefined` দিয়ে, `let`/`const` থাকে TDZ-এ।",
        "**মিউটেশন বনাম রিঅ্যাসাইন**: `const`-এ অবজেক্টের ভেতরের প্রপার্টি বদলানো যায়, তবে নতুন অবজেক্ট অ্যাসাইন করা যায় না।"
      ],
      "commonMistakes": [
        "`let` এবং `const` হোইস্ট হয় না—এমন ভুল কথা বলা। তারা হোইস্ট হয়, কিন্তু TDZ-এর কারণে এরর দেয়।"
      ],
      "proTips": [
        "বলুন: 'আধুনিক জাভাস্ক্রিপ্টে ডিফল্টভাবে `const` ব্যবহার করা উচিত, মান বদলালে `let`, আর `var` সম্পূর্ণ পরিহার করা উচিত।'"
      ]
    }
  },
  {
    "id": "ms-q2-hoisting",
    "questionNumber": 2,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain the concept of hoisting in JavaScript.",
    "banglaQuestion": "JavaScript-এ হোইস্টিং (Hoisting) কী এবং এটি কীভাবে কাজ করে?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Hoisting",
      "Execution Context",
      "Memory"
    ],
    "english": {
      "quickAnswer": "Hoisting is JavaScript's default behavior of allocating memory for variable and function declarations during the Creation Phase of the Execution Context before executing any code.",
      "interviewSpeech": "During the compilation/creation phase of an Execution Context, the V8 engine scans the script and allocates memory for all declarations. Function declarations are hoisted completely with their function body definition, meaning they can be invoked before they appear in code. Variables declared with `var` are hoisted and initialized to `undefined`. Variables declared with `let` and `const` are also hoisted, but they remain uninitialized in the Temporal Dead Zone (TDZ). Function expressions and arrow functions assigned to variables follow variable hoisting rules, not function declaration rules.",
      "deepDive": [
        "**Two-Phase Execution**: 1) Creation Phase (memory allocation / hoisting), 2) Execution Phase (line-by-line interpretation).",
        "**Function Declarations vs Expressions**: Function declarations hoist completely; `const fn = () => {}` hoists `fn` as TDZ variable, throwing error if called before declaration.",
        "**Precedence**: Function declarations are hoisted before variable declarations."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Hoisting Mechanics",
        "code": "// Function declaration: Fully hoisted\ngreet(); // Output: \"Hello!\"\nfunction greet() { console.log(\"Hello!\"); }\n\n// var variable: Hoisted as undefined\nconsole.log(age); // undefined\nvar age = 25;\n\n// let/const: Hoisted into TDZ\n// console.log(city); // ReferenceError: Cannot access 'city' before initialization\nconst city = \"Dhaka\";"
      },
      "commonMistakes": [
        "Thinking code physically moves to the top of the file (it's purely a memory allocation phase in the JS engine)."
      ],
      "proTips": [
        "Explain Execution Context phases: 'Hoisting is not physical code movement; it is the natural consequence of the Memory Creation phase of the Execution Context.'"
      ]
    },
    "bangla": {
      "quickAnswer": "হোইস্টিং হলো জাভাস্ক্রিপ্ট ইঞ্জিনের এক্সিকিউশন কনটেক্সটের মেমোরি ক্রিয়েশন ফেজে ভেরিয়েবল ও ফাংশন ডিক্লেয়ারেশনকে মেমোরিতে আগে থেকেই বরাদ্দ করে রাখার আচরণ।",
      "interviewSpeech": "কোড রান করার আগে জাভাস্ক্রিপ্ট ইঞ্জিন একটি 'Creation Phase' চালায়। এই ধাপে কোডের সব ডিক্লেয়ারেশনের জন্য মেমোরি বরাদ্দ হয়। সাধারণ ফাংশন ডিক্লেয়ারেশনগুলো পুরো বডিসহ মেমরিতে জমা হয়, যার ফলে কোডে লেখার আগেই ফাংশন কল করা সম্ভব হয়। `var` ভেরিয়েবলগুলো মেমরিতে `undefined` মান নিয়ে জায়গা পায়। আর `let` এবং `const`-এর মেমোরি রেজিস্টার হলেও কোনো ইনিশিয়াল মান পায় না—তারা Temporal Dead Zone (TDZ)-এ থাকে। ফলে ডিক্লেয়ারেশনের আগে ডাকলে এরর দেয়। কোড শারীরিকভাবে ফাইলের উপরে উঠে যায় না, ইঞ্জিন মেমরিতে আগে থেকে সাজিয়ে রাখে বলেই একে হোইস্টিং বলা হয়।",
      "deepDive": [
        "**২টি ফেজ**: ১) মেমোরি ক্রিয়েশন ফেজ (হোইস্টিং), ২) কোড এক্সিকিউশন ফেজ।",
        "**ফাংশন বনাম ভেরিয়েবল**: রেগুলার ফাংশন সম্পূর্ণ হোইস্ট হয়; কিন্তু অ্যারো ফাংশন বা ভেরিয়েবল এক্সপ্রেশন ভেরিয়েবলের মতো হোইস্ট হয়।"
      ],
      "commonMistakes": [
        "কোড স্ক্রিপ্টের একদম উপরে ফিজিক্যালি মুভ করে ভাবা।"
      ],
      "proTips": [
        "এক্সিকিউশন কনটেক্সটের মেমোরি ক্রিয়েশন ফেজের কথা উল্লেখ করলে সিনিয়র কনসেপ্ট স্পষ্ট হয়।"
      ]
    }
  },
  {
    "id": "ms-q3-primitive-data-types",
    "questionNumber": 3,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What are the primitive data types in JavaScript?",
    "banglaQuestion": "JavaScript-এ প্রিমিতিভ (Primitive) ডেটা টাইপগুলো কী কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Data Types",
      "Primitives",
      "Memory"
    ],
    "english": {
      "quickAnswer": "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. They are immutable and passed by value.",
      "interviewSpeech": "JavaScript has 7 primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Everything else in JavaScript is an Object (including arrays, functions, and regex). Primitives are immutable—their values cannot be altered once created—and they are stored directly in call stack memory and passed by value. For example, modifying a string creates an entirely new string in memory rather than mutating the original bytes.",
      "deepDive": [
        "**Primitive vs Non-Primitive**: Primitives store values directly in stack; Non-primitives (Objects) store references pointing to heap memory.",
        "**Immutability**: `let str = 'hello'; str[0] = 'H';` does not mutate `str`. It remains 'hello'.",
        "**The `typeof null` Bug**: `typeof null === 'object'` is a legacy historical bug in the initial 10-day JS implementation due to type-tag encoding."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "7 Primitives in JavaScript",
        "code": "const str = \"Hello\";        // string\nconst num = 42;             // number (64-bit float)\nconst big = 9007199254740991n; // bigint\nconst bool = true;          // boolean\nconst undef = undefined;    // undefined\nconst sym = Symbol(\"id\");   // symbol (unique token)\nconst empty = null;         // null (intentional absence of value)"
      },
      "commonMistakes": [
        "Listing Array or Function as primitive types (they are Objects).",
        "Saying `typeof null` returns 'null' (it returns 'object' due to a 1995 JS bug)."
      ],
      "proTips": [
        "Acknowledge BigInt (added in ES2020) and Symbol (added in ES6) to show complete modern awareness of all 7 primitives."
      ]
    },
    "bangla": {
      "quickAnswer": "JavaScript-এ ৭টি প্রিমিটিভ ডেটা টাইপ আছে: string, number, bigint, boolean, undefined, symbol এবং null। এগুলো ইমিউটেবল (অপরিবর্তনীয়) এবং পাস-বাই-ভ্যালু।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে ডেটা মূলত দুই প্রকার: প্রিমিটিভ এবং নন-প্রিমিটিভ (অবজেক্ট)। প্রিমিটিভ ডেটা টাইপ মোট ৭টি: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` এবং `null`। এই ৭টি ছাড়া বাকি সবকিছুই (যেমন অ্যারে, ফাংশন, অবজেক্ট) অবজেক্ট রেফারেন্স। প্রিমিটিভ ডেটার মূল বৈশিষ্ট্য হলো এগুলো ইমিউটেবল (immutable)—অর্থাৎ মেমরিতে এদের আসল মান সরাসরি পরিবর্তন করা যায় না, কোনো অপারেশন করলে নতুন মেমোরি ভ্যালু তৈরি হয়। এরা স্ট্যাক মেমরিতে সংরক্ষিত থাকে এবং ভ্যালু আকারে কপি (pass-by-value) হয়।",
      "deepDive": [
        "**স্ট্যাক বনাম হিপ**: প্রিমিটিভ সরাসরি ভ্যালু রাখে স্ট্যাকে; অবজেক্ট রাখে হিপ মেমরির রেফারেন্স পয়েন্টার।",
        "**`typeof null` বাগ**: জাভাস্ক্রিপ্টের প্রথম ভার্সনের একটি ঐতিহাসিক বাগে `typeof null` অবজেক্ট রিটার্ন করে।"
      ],
      "commonMistakes": [
        "Array বা Function-কে প্রিমিটিভ বলা।"
      ],
      "proTips": [
        "ES6-এর Symbol এবং ES2020-এর BigInt-এর নাম উল্লেখ করতে ভুলবেন না।"
      ]
    }
  },
  {
    "id": "ms-q4-double-vs-triple-equals",
    "questionNumber": 4,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between == and === in JavaScript?",
    "banglaQuestion": "JavaScript-এ == (লুজ ইকুয়ালিটি) এবং === (স্ট্রিক্ট ইকুয়ালিটি)-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Equality",
      "Type Coercion",
      "Operators"
    ],
    "english": {
      "quickAnswer": "`==` (loose equality) performs implicit type coercion before comparison, while `===` (strict equality) compares both value and data type without any type conversion.",
      "interviewSpeech": "The difference centers on implicit type coercion. The double equals `==` operator checks for value equality after coercing the operands to a common type using the Abstract Equality Comparison Algorithm. For example, `'5' == 5` evaluates to `true` because the string `'5'` is coerced to number `5`. The triple equals `===` operator checks for strict equality—it compares both the value AND the data type directly without conversion. Therefore, `'5' === 5` evaluates to `false` because their types (`string` vs `number`) differ. In modern development, `===` is the universal best practice to prevent unexpected coercion bugs.",
      "deepDive": [
        "**Type Coercion Gotchas**: `0 == ''` is `true`, `0 == false` is `true`, `null == undefined` is `true`.",
        "**Strict Equality**: `null === undefined` is `false`, `0 === false` is `false`.",
        "**Object Comparison**: Both `==` and `===` compare object references in memory, not structural contents (`{} === {}` is always `false`)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "== vs ===",
        "code": "// Loose Equality (==): Type coercion applied\nconsole.log(5 == \"5\");           // true (string coerced to number)\nconsole.log(null == undefined);   // true\nconsole.log(0 == false);          // true\n\n// Strict Equality (===): No coercion, checks type + value\nconsole.log(5 === \"5\");          // false (number !== string)\nconsole.log(null === undefined);  // false\nconsole.log(0 === false);         // false"
      },
      "commonMistakes": [
        "Assuming `[1] === [1]` is true; non-primitives are compared by reference address, not value."
      ],
      "proTips": [
        "Mention the only common acceptable use case for `==`: checking for both null and undefined simultaneously (`if (val == null)`)."
      ]
    },
    "bangla": {
      "quickAnswer": "`==` (লুজ ইকুয়ালিটি) টাইপ কনভার্সন (Type Coercion) করে শুধু ভ্যালু তুলনা করে; আর `===` (স্ট্রিক্ট ইকুয়ালিটি) কোনো কনভার্সন ছাড়াই ভ্যালু ও ডেটা টাইপ উভয়ই তুলনা করে।",
      "interviewSpeech": "পার্থক্যটি মূলত টাইপ রূপান্তরের (Type Coercion)-এ। যখন আমরা `==` ব্যবহার করি, জাভাস্ক্রিপ্ট ইন্টারনাল অ্যালগরিদম দিয়ে দুই পাশের ডেটা টাইপ এক বানিয়ে নেয় এবং তারপর তুলনা করে—যেমন `'5' == 5` সত্য (true) হবে কারণ স্ট্রিং '৫' নাম্বারে কনভার্ট হয়ে যায়। অন্যদিকে `===` হলো স্ট্রিক্ট ইকুয়ালিটি—এটি কোনো প্রকার টাইপ রূপান্তর করে না। এটি মান এবং ডেটা টাইপ দুটোই হুবহু এক হতে হয়। ফলে `'5' === 5` মিথ্যা (false) হবে কারণ একটি string ও অন্যটি number। অপ্রত্যাশিত বাগ এড়াতে আধুনিক কোডিংয়ে সর্বদা `===` ব্যবহার করা ইন্ডাস্ট্রি স্ট্যান্ডার্ড।",
      "deepDive": [
        "**Coercion অদ্ভুততা**: `0 == ''` true হয়, `false == 0` true হয়।",
        "**স্ট্রিক্ট চেক**: `0 === ''` false হয়।",
        "**অবজেক্ট রেফারেন্স**: অবজেক্টের ক্ষেত্রে `===` মেমোরি রেফারেন্স চেক করে, ভেতরের ডেটা নয় (`{} === {}` false)।"
      ],
      "commonMistakes": [
        "দুটি অ্যারে `[1] === [1]` সত্য মনে করা (মেমোরি রেফারেন্স আলাদা থাকায় মিথ্যা হয়)।"
      ],
      "proTips": [
        "বলুন: '`null` এবং `undefined` দুটোই একসাথে চেক করতে `x == null` লেখা ছাড়া বাকি সব ক্ষেত্রে সর্বদা `===` ব্যবহার করা উচিত।'"
      ]
    }
  },
  {
    "id": "ms-q5-closures",
    "questionNumber": 5,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain how closures work in JavaScript with an example.",
    "banglaQuestion": "JavaScript-এ ক্লোজার (Closure) কীভাবে কাজ করে? একটি বাস্তব উদাহরণসহ ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Closures",
      "Scope",
      "Functions",
      "Memory"
    ],
    "english": {
      "quickAnswer": "A closure is the combination of a function bundled together with references to its surrounding lexical environment, allowing an inner function to access an outer function's scope even after the outer function has finished executing.",
      "interviewSpeech": "A closure is created every time a function is created in JavaScript. It grants an inner function access to variables defined in its outer (enclosing) lexical scope. Even after the outer parent function has completely returned and its execution context is popped off the call stack, the inner function retains a live reference to those outer variables in heap memory. Closures are the foundation of data privacy, factory functions, currying, event handlers, and React hooks like `useState`.",
      "deepDive": [
        "**Lexical Scope Retention**: The engine keeps variables in heap memory as long as a child function retains a reference.",
        "**Data Encapsulation**: Private variables can be hidden from global scope using closures.",
        "**Memory Leaks**: Careless retention of large closures in event listeners can prevent garbage collection."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Private Counter using Closure",
        "code": "function createCounter() {\n  let count = 0; // Private variable enclosed within createCounter\n\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount: () => count\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.getCount());  // 2\n// count variable cannot be accessed or modified directly from outside!"
      },
      "commonMistakes": [
        "Saying closures make copies of variables (they hold references to the actual variable in the lexical environment)."
      ],
      "proTips": [
        "Connect closure to React: 'React hooks like useState work fundamentally via closures—preserving component state across re-renders.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ক্লোজার হলো এমন একটি মেকানিজম যার মাধ্যমে কোনো ইনার ফাংশন তার প্যারেন্ট আউটার ফাংশন এক্সিকিউট হয়ে শেষ হয়ে যাওয়ার পরেও প্যারেন্টের লেক্সিক্যাল স্কোপের ভেরিয়েবল অ্যাক্সেস করতে পারে।",
      "interviewSpeech": "ক্লোজার হলো জাভাস্ক্রিপ্টের অন্যতম শক্তিশালী কনসেপ্ট। যখন কোনো ফাংশনের ভেতরে আরেকটি ফাংশন থাকে, তখন ভেতরের ফাংশনটি তার বাইরের প্যারেন্ট ফাংশনের ভেরিয়েবলগুলোকে মনে রাখে। এমনকি প্যারেন্ট ফাংশনটি কল হয়ে কল-স্ট্যাক থেকে বেরিয়ে গেলেও, ইনার ফাংশন সেই ভেরিয়েবলগুলোর রেফারেন্স মেমরিতে ধরে রাখে। একেই ক্লোজার বলে। এর সবচেয়ে বড় ব্যবহার হলো ডেটা এনক্যাপসুলেশন বা প্রাইভেট ভেরিয়েবল তৈরি করা—বাইরের কোনো কোড সেই ভেরিয়েবল সরাসরি পরিবর্তন করতে পারে না, কেবল ইনার ফাংশন দিয়েই হ্যান্ডেল করা যায়। React-এর `useState` হুকও ক্লোজারের ওপর ভিত্তি করে স্টেট মনে রাখে।",
      "deepDive": [
        "**লেক্সিক্যাল মেমরি**: আউটার ফাংশন শেষ হলেও ইঞ্জিন হিপ মেমরিতে ভেরিয়েবলটি টিকিয়ে রাখে।",
        "**প্রাইভেট স্টেট**: জাভাস্ক্রিপ্টে প্রাইভেট প্রপার্টি তৈরির সবচেয়ে ক্লাসিক প্যাটার্ন।"
      ],
      "commonMistakes": [
        "ক্লোজার ভেরিয়েবলের কপি তৈরি করে ভাবা। এটি সরাসরি মেমোরি রেফারেন্স মনে রাখে।"
      ],
      "proTips": [
        "React-এর `useState` হুকের স্টেট কীভাবে ক্লোজার দিয়ে কাজ করে তা ইন্টারভিউতে উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "ms-q6-null-vs-undefined",
    "questionNumber": 6,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between null and undefined in JavaScript?",
    "banglaQuestion": "JavaScript-এ null এবং undefined-এর মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "null",
      "undefined",
      "Data Types"
    ],
    "english": {
      "quickAnswer": "`undefined` means a variable has been declared but has not yet been assigned a value (system default), while `null` represents the intentional absence of any object value (assigned explicitly by developer).",
      "interviewSpeech": "Both `undefined` and `null` represent missing values, but they differ in origin, type, and semantic intent. `undefined` is JavaScript's default indicator that an identifier exists but has no value yet—such as an uninitialized `let x;`, a function with no return statement, or a missing object property. `null`, by contrast, is an intentional assignment made by the developer to signal that an object reference or value is explicitly empty. In terms of types: `typeof undefined === 'undefined'`, while `typeof null === 'object'` due to an ancient JS engine bug. Numerically, `Number(null)` coerces to `0`, while `Number(undefined)` coerces to `NaN`.",
      "deepDive": [
        "**Core Concept**: `undefined` means a variable has been declared but has not yet been assigned a value (system default), while `null` represents the intentional absence of any object value (assigned explicitly by developer).",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "`undefined` মানে ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু এখনো মান দেওয়া হয়নি (স্বয়ংক্রিয়); আর `null` হলো ডেভেলপার দ্বারা সচেতনভাবে মান খালি ঘোষণা করা।",
      "interviewSpeech": "উভয়ই মান না থাকা নির্দেশ করলেও তাদের উদ্দেশ্য আলাদা। `undefined` স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট ইঞ্জিন দেয়—যখন কোনো ভেরিয়েবল ডিক্লেয়ার করে মান না দেওয়া হয়, ফাংশন কিছু রিটার্ন না করলে, বা অবজেক্টের অবর্তমান প্রপার্টি খুঁজলে `undefined` আসে। আর `null` হলো ডেভেলপার নিজে ইচ্ছাকৃতভাবে সেট করে বোঝায় যে 'এখানে বর্তমানে কোনো অবজেক্ট বা মান নেই'। টাইপের দিক থেকে `typeof undefined` হলো 'undefined', আর `typeof null` ঐতিহাসিক বাগের কারণে 'object'। গাণিতিক কনভার্সনে `null` হয় ০, কিন্তু `undefined` হয় `NaN`।",
      "deepDive": [
        "**মূল ধারণা**: `undefined` মানে ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু এখনো মান দেওয়া হয়নি (স্বয়ংক্রিয়); আর `null` হলো ডেভেলপার দ্বারা সচেতনভাবে মান খালি ঘোষণা করা।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q7-arrow-vs-regular-functions",
    "questionNumber": 7,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What are arrow functions and how do they differ from regular functions?",
    "banglaQuestion": "Arrow Functions কী এবং সাধারণ রেগুলার ফাংশনের সাথে এদের মূল পার্থক্যগুলো কী কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "ES6",
      "Arrow Functions",
      "this",
      "Functions"
    ],
    "english": {
      "quickAnswer": "Arrow functions provide a concise syntax and lexical `this` binding (they do not have their own `this`, `arguments`, `super`, or `new.target` and cannot be used as constructors).",
      "interviewSpeech": "Introduced in ES6, arrow functions provide both syntactic conciseness and critical functional differences compared to regular functions: 1) **Lexical `this`**: Regular functions bind `this` dynamically based on *how* they are called. Arrow functions do not have their own `this`; they capture `this` lexically from their enclosing scope. 2) **No `arguments` object**: Arrow functions do not have an `arguments` keyword (you use rest parameters `...args` instead). 3) **Cannot be Constructors**: Arrow functions lack a `prototype` property and cannot be invoked with `new`. 4) **Implicit Return**: One-line arrow functions can implicitly return an expression without `{}` or `return` keyword.",
      "deepDive": [
        "**Core Concept**: Arrow functions provide a concise syntax and lexical `this` binding (they do not have their own `this`, `arguments`, `super`, or `new.target` and cannot be used as constructors).",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Arrow Functions সংক্ষিপ্ত সিনট্যাক্স দেয় এবং এদের নিজস্ব `this` নেই (বাইরের লেক্সিক্যাল স্কোপ থেকে `this` গ্রহণ করে), এদের constructor হিসেবে ব্যবহার করা যায় না এবং নিজস্ব `arguments` অবজেক্ট থাকে না।",
      "interviewSpeech": "ES6-এ আসা অ্যারো ফাংশনের মূল সুবিধা হলো এর সংক্ষিপ্ত রূপ এবং লেক্সিক্যাল `this`। সাধারণ রেগুলার ফাংশনে `this` নির্ভর করে ফাংশনটি *কীভাবে কল করা হয়েছে* তার ওপর। কিন্তু অ্যারো ফাংশনের নিজস্ব কোনো `this` থাকে না—এটি তার চারপাশের প্যারেন্ট স্কোপ থেকে `this` ধার করে (Lexical this)। দ্বিতীয়ত, অ্যারো ফাংশনে কোনো `arguments` অবজেক্ট থাকে না, এর বদলে রেস্ট প্যারামিটার (`...args`) ব্যবহার করতে হয়। তৃতীয়ত, অ্যারো ফাংশনকে কখনো `new` দিয়ে কনস্ট্রাক্টর হিসেবে কল করা যায় না। চতুর্থত, এক লাইনের ফাংশনে সেকেন্ড ব্র্যাকেট ছাড়াই স্বয়ংক্রিয় রিটার্ন করা যায়।",
      "deepDive": [
        "**মূল ধারণা**: Arrow Functions সংক্ষিপ্ত সিনট্যাক্স দেয় এবং এদের নিজস্ব `this` নেই (বাইরের লেক্সিক্যাল স্কোপ থেকে `this` গ্রহণ করে), এদের constructor হিসেবে ব্যবহার করা যায় না এবং নিজস্ব `arguments` অবজেক্ট থাকে না।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q8-scope-chain",
    "questionNumber": 8,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the scope chain in JavaScript?",
    "banglaQuestion": "JavaScript-এ Scope Chain কী এবং ইঞ্জিন কীভাবে ভেরিয়েবল খুঁজে বের করে?",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "JavaScript",
      "Scope",
      "Scope Chain",
      "Lexical Environment"
    ],
    "english": {
      "quickAnswer": "The scope chain is the hierarchical sequence of nested lexical environments that JavaScript traverses outward from the local scope to the global scope to resolve variable references.",
      "interviewSpeech": "When a variable is referenced in JavaScript, the engine first looks for it in the current local execution context's lexical environment. If it is not found, the engine follows the internal `[[OuterEnv]]` reference to the parent outer function's scope, repeating this process upward through each enclosing block or function until it reaches the Global Scope. This linked chain of environments is called the Scope Chain. If the variable cannot be found even in the global scope, a `ReferenceError` is thrown.",
      "deepDive": [
        "**Core Concept**: The scope chain is the hierarchical sequence of nested lexical environments that JavaScript traverses outward from the local scope to the global scope to resolve variable references.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Scope Chain হলো নেস্টেড লেক্সিক্যাল স্কোপের একটি শিকল, যার মাধ্যমে জাভাস্ক্রিপ্ট ইঞ্জিন লোকাল স্কোপ থেকে শুরু করে ধাপে ধাপে বাইরের প্যারেন্ট স্কোপ এবং সবশেষে গ্লোবাল স্কোপ পর্যন্ত ভেরিয়েবল খুঁজে বেড়ায়।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে যখন কোনো ভেরিয়েবল খোঁজা হয়, ইঞ্জিন প্রথমে দেখে বর্তমান লোকাল ফাংশনে সেটি আছে কি না। না পেলে সে তার বাইরের প্যারেন্ট ফাংশনের স্কোপে খোঁজে, সেখানেও না পেলে তার বাইরের স্কোপে—এভাবে খুঁজতে খুঁজতে একদম গ্লোবাল স্কোপ পর্যন্ত পৌঁছায়। স্কোপের এই ধারাবাহিক শিকলকেই Scope Chain বলে। যদি গ্লোবাল স্কোপেও ভেরিয়েবলটি না পাওয়া যায়, তবে ইঞ্জিন `ReferenceError` প্রদর্শন করে।",
      "deepDive": [
        "**মূল ধারণা**: Scope Chain হলো নেস্টেড লেক্সিক্যাল স্কোপের একটি শিকল, যার মাধ্যমে জাভাস্ক্রিপ্ট ইঞ্জিন লোকাল স্কোপ থেকে শুরু করে ধাপে ধাপে বাইরের প্যারেন্ট স্কোপ এবং সবশেষে গ্লোবাল স্কোপ পর্যন্ত ভেরিয়েবল খুঁজে বেড়ায়।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q9-temporal-dead-zone",
    "questionNumber": 9,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain the concept of the Temporal Dead Zone (TDZ).",
    "banglaQuestion": "Temporal Dead Zone (TDZ) কী এবং এটি কেন ঘটে?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "TDZ",
      "let",
      "const",
      "Hoisting"
    ],
    "english": {
      "quickAnswer": "The Temporal Dead Zone (TDZ) is the period between entering a block scope and the actual execution of a `let` or `const` declaration line, during which accessing the variable throws a ReferenceError.",
      "interviewSpeech": "Although variables declared with `let` and `const` are hoisted to the top of their enclosing block scope during the memory creation phase, they remain in an uninitialized state. The Temporal Dead Zone represents the spatial-temporal span from the start of the block until the JavaScript engine executes the line where the variable is explicitly declared and initialized. Any attempt to read or write to that variable inside the TDZ throws an immediate `ReferenceError: Cannot access variable before initialization`. This design prevents silent bugs caused by accessing unassigned variables before declaration.",
      "deepDive": [
        "**Core Concept**: The Temporal Dead Zone (TDZ) is the period between entering a block scope and the actual execution of a `let` or `const` declaration line, during which accessing the variable throws a ReferenceError.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "ব্লক স্কোপের শুরু থেকে `let` বা `const` ডিক্লেয়ারেশনের লাইন এক্সিকিউট হওয়ার মধ্যবর্তী সময়কে TDZ বলে, এই সময়ে ভেরিয়েবল অ্যাক্সেস করলে ReferenceError হয়।",
      "interviewSpeech": "যখন একটি ব্লক শুরু হয়, তখন `let` এবং `const` ভেরিয়েবলগুলোর মেমোরি হোইস্টিং হলেও তাদের কোনো মান দিয়ে ইনিশিয়ালাইজ করা হয় না। কোড রান হতে হতে যতক্ষণ না ঠিক সেই ডিক্লেয়ারেশনের লাইনে পৌঁছায়, ততক্ষণ পর্যন্ত ভেরিয়েবলটি একটি নিষিদ্ধ জোনে থাকে—যাকে 'Temporal Dead Zone (TDZ)' বলে। এই জোনের মধ্যে ভেরিয়েবলটি পড়তে বা লিখতে গেলে জাভাস্ক্রিপ্ট `ReferenceError` দেয়। এটি `var`-এর মতো ভুলবশত `undefined` পাওয়ার নীরব বাগ প্রতিরোধ করার জন্যই ES6-এ ডিজাইন করা হয়েছে।",
      "deepDive": [
        "**মূল ধারণা**: ব্লক স্কোপের শুরু থেকে `let` বা `const` ডিক্লেয়ারেশনের লাইন এক্সিকিউট হওয়ার মধ্যবর্তী সময়কে TDZ বলে, এই সময়ে ভেরিয়েবল অ্যাক্সেস করলে ReferenceError হয়।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q10-pure-functions",
    "questionNumber": 10,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is a pure function? Give an example.",
    "banglaQuestion": "Pure Function কী? বাস্তব উদাহরণসহ বুঝিয়ে বলুন।",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Functional Programming",
      "Pure Functions",
      "Side Effects"
    ],
    "english": {
      "quickAnswer": "A pure function is a deterministic function that always returns the exact same output for the same input arguments, and causes zero observable side effects.",
      "interviewSpeech": "A pure function adheres to two strict functional programming principles: First, **Determinism**—given the same inputs, it will always return the exact same output, with no dependency on mutable external state, random numbers, or system clocks. Second, **No Side Effects**—it does not mutate external variables, modify its input arguments, write to the DOM, make network API calls, or perform console logging. Pure functions are predictable, trivially testable, easily cached via memoization, and form the core philosophy behind React components and Redux reducers.",
      "deepDive": [
        "**Core Concept**: A pure function is a deterministic function that always returns the exact same output for the same input arguments, and causes zero observable side effects.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Pure Function হলো এমন একটি ফাংশন যা নির্দিষ্ট ইনপুটের জন্য সর্বদা একই আউটপুট দেয় এবং এর বাইরের কোনো ভেরিয়েবল বা সিস্টেমের ওপর কোনো পার্শ্বপ্রতিক্রিয়া (Side Effect) থাকে না।",
      "interviewSpeech": "একটি পিওর ফাংশনের দুটি প্রধান বৈশিষ্ট্য থাকে: ১) **ডিটারমিনিজম**: একই আর্গুমেন্ট দিলে এটি সবসময় একই রেজাল্ট রিটার্ন করবে—বাইরের কোনো পরিবর্তনশীল ভেরিয়েবল বা র‍্যান্ডম মানের ওপর নির্ভর করবে না। ২) **নো সাইড-ইফেক্ট**: এটি বাইরের কোনো গ্লোবাল ভেরিয়েবল বদলাবে না, প্যারামিটারে পাঠানো অবজেক্ট মিউটেট করবে না, কোনো কনসোল লগ বা API রিকোয়েস্ট পাঠাবে না। পিওর ফাংশন টেস্ট করা সহজ, মেমোইজেশন দিয়ে ক্যাশ করা যায় এবং React কম্পোনেন্ট ও Redux রিডিউসারের মূল দর্শনই হলো এই Pure Function।",
      "deepDive": [
        "**মূল ধারণা**: Pure Function হলো এমন একটি ফাংশন যা নির্দিষ্ট ইনপুটের জন্য সর্বদা একই আউটপুট দেয় এবং এর বাইরের কোনো ভেরিয়েবল বা সিস্টেমের ওপর কোনো পার্শ্বপ্রতিক্রিয়া (Side Effect) থাকে না।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q11-function-declaration-vs-expression",
    "questionNumber": 11,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between function declaration and function expression?",
    "banglaQuestion": "Function Declaration এবং Function Expression-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Functions",
      "Hoisting"
    ],
    "english": {
      "quickAnswer": "Function declarations are hoisted completely with their implementation, while function expressions are assigned to variables and follow variable hoisting rules (cannot be called before their assignment line).",
      "interviewSpeech": "The primary difference lies in syntax and hoisting. A **Function Declaration** begins with the `function` keyword as a standalone statement (e.g. `function add(a, b) { return a + b; }`). It is hoisted entirely to the top of its scope, allowing you to invoke it before the declaration in code. A **Function Expression** defines a function as part of a larger expression, typically assigned to a variable (e.g. `const add = function(a, b) { ... }` or an arrow function). Because it is assigned to a variable, it obeys variable hoisting: if declared with `const` or `let`, invoking it before its assignment results in a `ReferenceError` due to the TDZ.",
      "deepDive": [
        "**Core Concept**: Function declarations are hoisted completely with their implementation, while function expressions are assigned to variables and follow variable hoisting rules (cannot be called before their assignment line).",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Function Declaration সম্পূর্ণ বডিসহ হোইস্টেড হয় তাই কোডে লেখার আগেই কল করা যায়; আর Function Expression ভেরিয়েবলে অ্যাসাইন থাকে বলে ডিক্লেয়ার করার আগে কল করা যায় না।",
      "interviewSpeech": "মূল পার্থক্য হোইস্টিং এবং সিনট্যাক্সে। **Function Declaration** সরাসরি `function myFunc() {}` স্টেটমেন্ট দিয়ে শুরু হয়। জাভাস্ক্রিপ্ট ইঞ্জিন এটিকে পুরো বডিসহ হোইস্ট করে ফেলে, তাই কোডে ফাংশন লেখার আগেই তাকে কল করা যায়। আর **Function Expression** হলো একটি ফাংশনকে কোনো ভেরিয়েবলের মধ্যে অ্যাসাইন করে রাখা (যেমন: `const myFunc = function() {}` বা অ্যারো ফাংশন)। যেহেতু এটি ভেরিয়েবলে থাকে, তাই এটি ভেরিয়েবলের হোইস্টিং নিয়ম মেনে চলে—ডিক্লেয়ারেশনের পূর্বে কল করলে এটি ReferenceError দেয়।",
      "deepDive": [
        "**মূল ধারণা**: Function Declaration সম্পূর্ণ বডিসহ হোইস্টেড হয় তাই কোডে লেখার আগেই কল করা যায়; আর Function Expression ভেরিয়েবলে অ্যাসাইন থাকে বলে ডিক্লেয়ার করার আগে কল করা যায় না।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q12-default-parameters",
    "questionNumber": 12,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What are default parameters in JavaScript?",
    "banglaQuestion": "JavaScript-এ Default Parameters কী এবং এগুলো কীভাবে কাজ করে?",
    "difficulty": "Beginner",
    "importance": "Medium",
    "tags": [
      "JavaScript",
      "ES6",
      "Parameters",
      "Functions"
    ],
    "english": {
      "quickAnswer": "Default parameters allow named function parameters to be initialized with default values if no value or `undefined` is passed during the function call.",
      "interviewSpeech": "Introduced in ES6, default parameters allow developers to assign fallback values directly in the function parameter signature (e.g., `function greet(name = 'Guest')`). The default value is applied *only* if the argument is omitted or explicitly passed as `undefined`. Crucially, if you pass `null`, `false`, `0`, or `''`, the default parameter is NOT triggered because those are valid values. Default parameters can also be expressions or call other functions, and they are evaluated at runtime when the function is called.",
      "deepDive": [
        "**Core Concept**: Default parameters allow named function parameters to be initialized with default values if no value or `undefined` is passed during the function call.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Default Parameters ফাংশন কলের সময় কোনো আর্গুমেন্ট না দিলে বা `undefined` পাস করলে প্যারামিটারের জন্য একটি ডিফল্ট ফলব্যাক মান নির্ধারণ করে দেয়।",
      "interviewSpeech": "ES6-এ আসা ডিফল্ট প্যারামিটার দিয়ে আমরা ফাংশন সিগনেচারেই সরাসরি ফলব্যাক মান ঠিক করে দিতে পারি (যেমন: `function greet(name = 'Guest')`)। যদি ফাংশন ডাকার সময় কোনো আর্গুমেন্ট না দেওয়া হয় বা স্পষ্টভাবে `undefined` পাঠানো হয়, কেবল তখনই ডিফল্ট মান কাজ করে। মনে রাখবেন, যদি কেউ `null`, `0` বা `''` পাঠায়, তখন কিন্তু ডিফল্ট মান বসবে না কারণ এগুলো ভ্যালিড ভ্যালু। ডিফল্ট প্যারামিটারের ভেতর যেকোনো এক্সপ্রেশন বা অন্য ফাংশন কলও রাখা যায়।",
      "deepDive": [
        "**মূল ধারণা**: Default Parameters ফাংশন কলের সময় কোনো আর্গুমেন্ট না দিলে বা `undefined` পাস করলে প্যারামিটারের জন্য একটি ডিফল্ট ফলব্যাক মান নির্ধারণ করে দেয়।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q13-typeof-operator",
    "questionNumber": 13,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the typeof operator and what are its possible return values?",
    "banglaQuestion": "typeof অপারেটর কী এবং এটি কী কী সম্ভাব্য স্ট্রিং ভ্যালু রিটার্ন করতে পারে?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "JavaScript",
      "typeof",
      "Operators",
      "Data Types"
    ],
    "english": {
      "quickAnswer": "`typeof` is an operator that returns a string indicating the type of the operand: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function', and 'object'.",
      "interviewSpeech": "`typeof` is a unary operator used to inspect the primitive type of an operand without throwing errors on undeclared variables. It returns one of eight string identifiers: `'undefined'`, `'boolean'`, `'number'`, `'bigint'`, `'string'`, `'symbol'`, `'function'`, and `'object'`. Notable quirks: 1) Arrays and Plain Objects both return `'object'` (use `Array.isArray()` to differentiate), 2) `typeof null` returns `'object'` due to an ancient JS bug, and 3) Functions return `'function'` even though functions are technically objects under the hood.",
      "deepDive": [
        "**Core Concept**: `typeof` is an operator that returns a string indicating the type of the operand: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function', and 'object'.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "`typeof` হলো একটি অপারেটর যা অপারেন্ডের ডেটা টাইপ নির্দেশক একটি স্ট্রিং রিটার্ন করে: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function' এবং 'object'।",
      "interviewSpeech": "`typeof` হলো এমন একটি অপারেটর যা কোনো ভেরিয়েবলের ধরন যাচাই করতে ব্যবহৃত হয়। এটি মোট ৮ ধরনের স্ট্রিং রিটার্ন করতে পারে। এর মধ্যে দুটি বিশেষ বিষয় মনে রাখতে হয়: প্রথমত, `typeof null` রিটার্ন করে `'object'`, যা জাভাস্ক্রিপ্টের প্রথম ভার্সনের একটি সুপরিচিত ঐতিহাসিক বাগ। দ্বিতীয়ত, সাধারণ অবজেক্ট এবং অ্যারে উভয়ের জন্যই এটি `'object'` রিটার্ন করে (তাই অ্যারে চেক করতে `Array.isArray()` ব্যবহার করতে হয়)। আর ফাংশনের ক্ষেত্রে এটি সরাসরি `'function'` রিটার্ন করে।",
      "deepDive": [
        "**মূল ধারণা**: `typeof` হলো একটি অপারেটর যা অপারেন্ডের ডেটা টাইপ নির্দেশক একটি স্ট্রিং রিটার্ন করে: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function' এবং 'object'।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q14-type-coercion",
    "questionNumber": 14,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain type coercion in JavaScript with examples.",
    "banglaQuestion": "JavaScript-এ টাইপ রূপান্তর বা Type Coercion কী? বাস্তব উদাহরণসহ ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "JavaScript",
      "Type Coercion",
      "Implicit Coercion",
      "Explicit Coercion"
    ],
    "english": {
      "quickAnswer": "Type coercion is the automatic or implicit conversion of values from one data type to another by the JavaScript engine during operations.",
      "interviewSpeech": "Type coercion occurs when operators receive mismatched data types. JavaScript handles this in two ways: **Explicit Coercion** (type casting initiated by developer, like `Number('42')` or `Boolean(1)`), and **Implicit Coercion** (automatic conversion performed behind the scenes by JS runtime). The most famous example is the `+` operator: if either operand is a string, JavaScript converts the other operand to a string and concatenates (`1 + '2' === '12'`). However, arithmetic operators like `-`, `*`, and `/` strictly coerce strings to numbers (`'6' - 2 === 4`). In boolean contexts (like `if` statements), values are coerced to truthy or falsy.",
      "deepDive": [
        "**Core Concept**: Type coercion is the automatic or implicit conversion of values from one data type to another by the JavaScript engine during operations.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "Type Coercion হলো বিভিন্ন অপারেশনের সময় জাভাস্ক্রিপ্ট ইঞ্জিন কর্তৃক স্বয়ংক্রিয়ভাবে বা স্পষ্টভাবে এক ডেটা টাইপকে অন্য ডেটা টাইপে রূপান্তর করার প্রক্রিয়া।",
      "interviewSpeech": "টাইপ কোয়েরশন দুই প্রকার: **এক্সপ্লিসিট (Explicit)**, যা ডেভেলপার নিজে করে (যেমন `Number('10')`), এবং **ইমপ্লিসিট (Implicit)**, যা জাভাস্ক্রিপ্ট নিজে নিজে ব্যাকগ্রাউন্ডে রূপান্তর করে। যেমন `+` অপারেটরের একপাশে স্ট্রিং থাকলে অন্য পাশকেও স্ট্রিং বানিয়ে কনক্যাট করে (`'5' + 2 = '52'`)। কিন্তু বিয়োগ (`-`), গুণ (`*`) বা ভাগের ক্ষেত্রে স্ট্রিংকে নাম্বারে রূপান্তর করে ফেলে (`'10' - 2 = 8`)। এছাড়া `if` কন্ডিশনে যেকোনো মান ট্রু বা ফলসে কনভার্ট হয়ে যায় (Truthy/Falsy)।",
      "deepDive": [
        "**মূল ধারণা**: Type Coercion হলো বিভিন্ন অপারেশনের সময় জাভাস্ক্রিপ্ট ইঞ্জিন কর্তৃক স্বয়ংক্রিয়ভাবে বা স্পষ্টভাবে এক ডেটা টাইপকে অন্য ডেটা টাইপে রূপান্তর করার প্রক্রিয়া।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q15-iife",
    "questionNumber": 15,
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is an immediately invoked function expression (IIFE)?",
    "banglaQuestion": "Immediately Invoked Function Expression (IIFE) কী এবং এটি কেন ব্যবহার করা হতো?",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "tags": [
      "JavaScript",
      "IIFE",
      "Scope",
      "Design Patterns"
    ],
    "english": {
      "quickAnswer": "An IIFE is a JavaScript function that runs as soon as it is defined, creating an isolated private lexical scope to avoid polluting the global namespace.",
      "interviewSpeech": "An IIFE (pronounced 'iffy') is a function expression defined and immediately executed using two pairs of parentheses: `(function() { ... })();`. Prior to ES6 modules and `let`/`const` block scoping, all `var` variables were function-scoped. IIFEs were the primary design pattern for creating private state and preventing global namespace pollution in libraries (like jQuery). Today, while ES6 modules have reduced their ubiquity, IIFEs are still useful in top-level async functions, isolating one-off initialization logic, and module bundlers.",
      "deepDive": [
        "**Core Concept**: An IIFE is a JavaScript function that runs as soon as it is defined, creating an isolated private lexical scope to avoid polluting the global namespace.",
        "**Key Mechanism**: Review how the runtime environment, lexical scoping, or framework reconciliation manages this pattern.",
        "**Production Recommendation**: Always follow modern industry conventions, avoiding deprecated syntax and anti-patterns."
      ]
    },
    "bangla": {
      "quickAnswer": "IIFE হলো এমন একটি ফাংশন যা ডিফাইন করার সাথে সাথেই নিজে নিজে এক্সিকিউট হয়ে যায় এবং একটি প্রাইভেট স্কোপ তৈরি করে গ্লোবাল স্কোপ দূষণমুক্ত রাখে।",
      "interviewSpeech": "IIFE (Immediately Invoked Function Expression) হলো এমন ফাংশন যা লেখার পরপরই দুটি প্রথম বন্ধনী দিয়ে সাথে সাথে কল হয়ে যায়: `(function() { ... })();`। ES6 আসার আগে যখন শুধু `var` ছিল, তখন গ্লোবাল ভেরিয়েবল ওভাররাইট হয়ে যাওয়া ঠেকাতে এবং প্রাইভেট কোড তৈরি করতে IIFE ছিল প্রধান হাতিয়ার (যেমন jQuery লাইব্রেরি তৈরিতে)। আধুনিক ES6 মডিউল ও ব্লক স্কোপের কারণে এর ব্যবহার কিছুটা কমলেও, টপ-লেভেল অ্যাসিঙ্ক কোড এক নিমেষে রান করাতে বা এককালীন ইনিশিয়ালাইজেশন লজিক আটকাতে এখনো IIFE ব্যবহৃত হয়।",
      "deepDive": [
        "**মূল ধারণা**: IIFE হলো এমন একটি ফাংশন যা ডিফাইন করার সাথে সাথেই নিজে নিজে এক্সিকিউট হয়ে যায় এবং একটি প্রাইভেট স্কোপ তৈরি করে গ্লোবাল স্কোপ দূষণমুক্ত রাখে।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q16-destructuring",
    "questionNumber": 16,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is destructuring in JavaScript? Explain with array and object examples.",
    "banglaQuestion": "JavaScript-এ Destructuring কী? Array এবং Object-এর উদাহরণসহ ব্যাখ্যা করুন।",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "ES6",
      "Destructuring",
      "Array",
      "Object"
    ],
    "english": {
      "quickAnswer": "Destructuring is an ES6 syntax that unpacks values from arrays or properties from objects into distinct, readable variables in a single expression.",
      "interviewSpeech": "Destructuring allows us to extract multiple values from arrays or objects directly into variables with concise syntax. For arrays, destructuring unpacks values based on order/index, allowing defaults and skipping elements. For objects, destructuring unpacks values based on property names/keys, allowing renaming, default values, and nested extraction. It dramatically reduces boilerplate code like `const first = arr[0]` or `const name = user.name`.",
      "deepDive": [
        "**Array Destructuring**: Positional assignment `const [a, b, , d = 4] = [1, 2, 3]`.",
        "**Object Destructuring**: Key-based assignment `const { name: fullName, age = 18 } = user`.",
        "**Nested & Dynamic**: `const { address: { city } } = user` or dynamic key `const { [dynamicKey]: val } = obj`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Array & Object Destructuring",
        "code": "// Array Destructuring\nconst [primary, secondary, ...rest] = ['React', 'Next.js', 'Node.js', 'MongoDB'];\nconsole.log(primary, secondary); // 'React', 'Next.js'\n\n// Object Destructuring with renaming and defaults\nconst user = { id: 101, username: 'rakib', role: 'admin' };\nconst { username: userName, email = 'no-email@test.com' } = user;\nconsole.log(userName, email); // 'rakib', 'no-email@test.com'"
      },
      "commonMistakes": [
        "Destructuring properties from `undefined` or `null` (throws TypeError: Cannot destructure property of undefined).",
        "Confusing array positional extraction with object key extraction."
      ],
      "proTips": [
        "Use destructuring directly in function parameter lists: `function Avatar({ src, alt = 'Avatar' }) { ... }`."
      ]
    },
    "bangla": {
      "quickAnswer": "Destructuring হলো ES6-এর একটি শক্তিশালী সিনট্যাক্স যার মাধ্যমে array বা object থেকে মান খুব সহজে সরাসরি ভেরিয়েবলে ভেঙে নেওয়া যায়।",
      "interviewSpeech": "Destructuring আমাদের কোডকে অনেক ক্লিন এবং রিডেবল করে। Array destructuring পজিশন বা ইনডেক্স অনুযায়ী মান বের করে, যেখানে আমরা চাইলে উপাদান স্কিপ করতে পারি কিংবা ডিফল্ট মান দিতে পারি। আর Object destructuring কী (key) এর নাম ধরে মান আলাদা করে, যেখানে প্রপার্টি রিনেম করা এবং ডিফল্ট ভ্যালু সেট করার চমৎকার সুবিধা আছে।",
      "deepDive": [
        "Array destructuring অর্ডারের উপর নির্ভর করে (`[a, b]`).",
        "Object destructuring প্রপার্টি নামের উপর নির্ভর করে (`{ name: newName }`).",
        "ফাংশন প্যারামিটারে প্রপস সরাসরি destructure করা React-এ অত্যন্ত জনপ্রিয় প্যাটার্ন।"
      ],
      "commonMistakes": [
        "`null` বা `undefined` থেকে destructure করতে গেলে ক্র্যাশ করে, তাই ডিফল্ট এম্পটি অবজেক্ট `{}` দেওয়া নিরাপদ।"
      ],
      "proTips": [
        "রিনেম করার জন্য কোলন ব্যবহার করুন: `{ name: userName }` এবং ডিফল্টের জন্য সমান চিহ্ন: `{ role = 'guest' }`।"
      ]
    }
  },
  {
    "id": "ms-q17-spread-rest-operators",
    "questionNumber": 17,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What are the spread and rest operators and how are they used?",
    "banglaQuestion": "Spread এবং Rest অপারেটর কী এবং এদের ব্যবহার কীভাবে করা হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "ES6",
      "Spread",
      "Rest",
      "Immutability"
    ],
    "english": {
      "quickAnswer": "Both use three dots (`...`), but Spread expands an iterable into individual elements, while Rest condenses multiple individual elements into a single array.",
      "interviewSpeech": "Although both use the identical `...` syntax, their intent and placement are opposites. The Spread operator 'spreads out' an array or object into individual elements or keys. We use it for shallow copying arrays/objects, combining collections, or passing array items as separate arguments to functions. Conversely, the Rest operator 'gathers' remaining individual items into a single array. We use it in function parameter definitions to handle variable arguments, or in destructuring to capture unextracted properties.",
      "deepDive": [
        "**Spread (`...`)**: Expands elements. Example: `[...arr1, ...arr2]` or `{ ...obj1, key: value }`.",
        "**Rest (`...`)**: Gathers elements into an array. Example: `function sum(...nums) {}` or `const { id, ...details } = user`.",
        "**Immutability**: Spread is the foundation for immutable state updates in React (e.g., `setTodos([...prev, newTodo])`)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Spread vs Rest Operators",
        "code": "// Spread: Expanding\nconst defaultSettings = { theme: 'light', sound: true };\nconst userSettings = { ...defaultSettings, theme: 'dark' }; // theme overwritten\n\n// Rest: Collecting into an array\nfunction calculateTotal(discount, ...prices) {\n  const sum = prices.reduce((acc, curr) => acc + curr, 0);\n  return sum - discount;\n}\nconsole.log(calculateTotal(10, 50, 30, 20)); // 90"
      },
      "commonMistakes": [
        "Placing the Rest parameter anywhere except the very last position in function parameters or destructuring patterns.",
        "Assuming spread creates a deep copy (spread only performs a shallow copy)."
      ],
      "proTips": [
        "Rule of thumb: In assignments or function calls, `...` is Spread. In function definitions or destructuring targets, `...` is Rest."
      ]
    },
    "bangla": {
      "quickAnswer": "দুটোই `...` তিন ডট দিয়ে লেখা হয়। Spread উপাদানগুলোকে ছড়িয়ে দেয় বা কপি করে, আর Rest একাধিক উপাদানকে একটি অ্যারেতে গুটিয়ে ফেলে।",
      "interviewSpeech": "Spread এবং Rest দেখতে একরকম হলেও এদের কাজ বিপরীত। Spread অপারেটর একটি অ্যারে বা অবজেক্টকে ছড়িয়ে (expand) দেয়—যেমন দুটি অ্যারে মার্জ করা বা অবজেক্টের শ্যালো কপি তৈরি করে স্টেট আপডেট করা। অন্যদিকে Rest অপারেটর একাধিক প্যারামিটার বা প্রপার্টিকে একটি অ্যারেতে গুটিয়ে (collect) নেয়—যেমন ফাংশনের অবশিষ্ট প্যারামিটারগুলো নেওয়া বা destructuring-এ বাকি প্রপার্টিগুলো এক জায়গায় রাখা।",
      "deepDive": [
        "Spread ছড়ায় (Expand), Rest জড়ো করে (Gather)।",
        "React-এ স্টেট ইমিউটেবলি আপডেট করতে Spread সবচেয়ে বেশি ব্যবহৃত হয়।",
        "Rest প্যারামিটার সবসময় সবার শেষে থাকতে হয়।"
      ],
      "commonMistakes": [
        "Rest প্যারামিটারকে অন্য প্যারামিটারের শুরুতে বা মাঝে দিলে সিনট্যাক্স এরর হয়।"
      ],
      "proTips": [
        "মনে রাখবেন: ফাংশন কলে Spread, আর ফাংশন প্যারামিটারে Rest!"
      ]
    }
  },
  {
    "id": "ms-q18-map-filter-reduce",
    "questionNumber": 18,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "Explain the difference between map(), filter(), and reduce().",
    "banglaQuestion": "map(), filter() এবং reduce()-এর মধ্যকার পার্থক্য ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Functional Programming",
      "Array Methods",
      "ES6"
    ],
    "english": {
      "quickAnswer": "`map()` transforms every element into a new array of the same length; `filter()` selects elements matching a boolean predicate into a shorter/equal array; `reduce()` accumulates all elements into a single resultant value.",
      "interviewSpeech": "`map()`, `filter()`, and `reduce()` are pure, non-mutating higher-order array methods essential in functional JavaScript and React. `map()` runs a callback on each item and returns a brand-new array with identical length containing the transformed elements. `filter()` tests each item with a boolean condition and returns a new array keeping only elements that returned `true`. `reduce()` iterates over the array carrying an accumulator and current value, synthesizing the entire array down to a single output—which can be a number, string, object, or even another nested structure.",
      "deepDive": [
        "**`map`**: 1-to-1 transformation. Input length === Output length.",
        "**`filter`**: Subsetting. Output length <= Input length.",
        "**`reduce`**: Aggregation or folding. Returns any arbitrary accumulator type (`acc, curr, index, arr`).",
        "**Non-mutating**: None of these modify the original source array."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "map vs filter vs reduce Comparison",
        "code": "const numbers = [10, 20, 30, 40, 50];\n\n// map: Double each number\nconst doubled = numbers.map(n => n * 2); // [20, 40, 60, 80, 100]\n\n// filter: Keep only items > 25\nconst filtered = numbers.filter(n => n > 25); // [30, 40, 50]\n\n// reduce: Calculate total sum (initial accumulator = 0)\nconst totalSum = numbers.reduce((acc, curr) => acc + curr, 0); // 150"
      },
      "commonMistakes": [
        "Using `map()` when you don't return anything or only want side effects (use `forEach()` instead).",
        "Forgetting to provide the initial value in `reduce()` (can cause unexpected behavior or crash on empty arrays)."
      ],
      "proTips": [
        "Chaining these methods (`arr.filter(...).map(...).reduce(...)`) is standard functional practice, but for massive arrays (100k+), a single `for` loop or single `reduce` is faster."
      ]
    },
    "bangla": {
      "quickAnswer": "`map()` প্রতিটি উপাদান রূপান্তর করে সমান দৈর্ঘ্যের নতুন অ্যারে দেয়, `filter()` শর্তানুযায়ী কিছু উপাদান ছাঁটাই করে, আর `reduce()` সব উপাদান মিলিয়ে একটি একক মান বা ডেটায় পরিণত করে।",
      "interviewSpeech": "এই তিনটিই ইমিউটেবল অ্যারে মেথড যা মূল অ্যারেকে পরিবর্তন করে না। `map()` অ্যারের প্রতিটি এলিমেন্টকে ট্রান্সফর্ম করে সমসংখ্যক উপাদানের নতুন অ্যারে বানায় (যেমন React-এ JSX রেন্ডার করতে)। `filter()` ট্রু/ফলস কন্ডিশন চেক করে শর্ত পূরণকারী উপাদান দিয়ে ছোট অ্যারে বানায়। আর `reduce()` একটি একিউমুলেটর ব্যবহার করে পুরো অ্যারেকে একটি সিঙ্গেল মানে কনভার্ট করে (যেমন টোটাল যোগফল বা গ্রুপিং)।",
      "deepDive": [
        "`map`: ইনপুট ও আউটপুটের উপাদান সংখ্যা সমান থাকে।",
        "`filter`: শর্ত না মিললে উপাদান বাদ পড়ে।",
        "`reduce`: যেকোনো আউটপুট টাইপে (number, object, hashmap) কনভার্ট করতে পারে।"
      ],
      "commonMistakes": [
        "রিটার্ন দরকার না থাকলে `map()` ব্যবহার করা ঠিক নয়, শুধু সাইড ইফেক্টের জন্য `forEach()` ব্যবহার করুন।"
      ],
      "proTips": [
        "`reduce()`-এ সবসময় ইনিশিয়াল ভ্যালু পাস করা ভালো প্র্যাকটিস।"
      ]
    }
  },
  {
    "id": "ms-q19-for-in-vs-for-of",
    "questionNumber": 19,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is the difference between for...in and for...of loops?",
    "banglaQuestion": "for...in এবং for...of লুপের মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "JavaScript",
      "Loops",
      "Iteration",
      "Objects",
      "ES6"
    ],
    "english": {
      "quickAnswer": "`for...in` iterates over the enumerable keys (property names) of an object or array (including prototype properties), while `for...of` iterates over the values of an iterable collection (Array, Map, Set, String).",
      "interviewSpeech": "The core difference is 'keys vs values' and 'objects vs iterables'. `for...in` is designed for inspectable objects; it loops over enumerable keys/properties as strings, and critically traverses up the prototype chain unless checked with `hasOwnProperty()`. If used on arrays, it gives indices as strings, not numbers. In contrast, `for...of` was introduced in ES6 for iterable collections implementing the `[Symbol.iterator]` protocol (Arrays, Sets, Maps, strings). It directly yields the values in sequential order and ignores prototypes.",
      "deepDive": [
        "**`for...in`**: Loops over **Keys** (strings). Works on general Objects.",
        "**`for...of`**: Loops over **Values**. Works only on **Iterables** (Arrays, Sets, Maps, NodeLists). Fails on plain objects unless `Object.entries(obj)` is used.",
        "**Async iteration**: `for await (... of ...)` works natively with async iterators."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "for...in vs for...of Loop Comparison",
        "code": "const stack = ['React', 'Next.js'];\nstack.customProp = 'Extra';\n\n// for...in loops over KEYS (including custom properties)\nfor (const key in stack) {\n  console.log(key); // \"0\", \"1\", \"customProp\"\n}\n\n// for...of loops over VALUES (only iterable array elements)\nfor (const val of stack) {\n  console.log(val); // \"React\", \"Next.js\"\n}"
      },
      "commonMistakes": [
        "Using `for...of` on plain objects (throws TypeError: obj is not iterable). Use `for (const [k, v] of Object.entries(obj))` instead.",
        "Using `for...in` for array summation (indices are strings, leading to string concatenation bugs)."
      ],
      "proTips": [
        "Mnemonic: `for...in` gives the Index/key; `for...of` gives the Object value."
      ]
    },
    "bangla": {
      "quickAnswer": "`for...in` অবজেক্ট বা অ্যারের কী (keys/indices) নিয়ে লুপ করে, আর `for...of` ইটারেবলের সরাসরি মান (values) নিয়ে লুপ করে।",
      "interviewSpeech": "`for...in` মূলত অবজেক্টের কি (properties) গুলোর উপর লুপ চালানোর জন্য ব্যবহৃত হয় এবং এটি প্রোটোটাইপ চেইনের প্রপার্টিও নিয়ে আসতে পারে। অ্যারেতে চালালে এটি ইনডেক্সগুলোকে স্ট্রিং হিসেবে দেয়। অন্যদিকে `for...of` হলো ES6-এর মেকানিজম যা সরাসরি উপাদানের ভ্যালুর উপর লুপ করে। এটি Array, Set, Map, String ইত্যাদি ইটারেবলের উপর কাজ করে। সাধারণ অবজেক্টে সরাসরি `for...of` চলে না কারণ অবজেক্ট ইটারেবল নয়।",
      "deepDive": [
        "`for...in`: Key / Property নামের উপর ঘুরে।",
        "`for...of`: সরাসরি Value বা মানের উপর ঘুরে।",
        "প্লেইন অবজেক্টে `for...of` চালাতে `Object.entries(obj)` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "প্লেইন অবজেক্টের উপর `for...of` কল করলে `TypeError: obj is not iterable` এরর দেয়।"
      ],
      "proTips": [
        "সহজে মনে রাখার টেকনিক: `in` মানে ইনডেক্স/কী, `of` মানে উপাদান বা ভ্যালু।"
      ]
    }
  },
  {
    "id": "ms-q20-template-literals-tagged-templates",
    "questionNumber": 20,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What are template literals and tagged templates?",
    "banglaQuestion": "Template Literals এবং Tagged Templates কী? এদের ব্যবহার ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "JavaScript",
      "ES6",
      "Template Literals",
      "Tagged Templates",
      "Styled Components"
    ],
    "english": {
      "quickAnswer": "Template literals are backtick-delimited strings allowing embedded `${expressions}` and multiline text. Tagged templates allow prefixing template literals with a parsing function to parse strings and values customly (e.g., styled-components, SQL query formatters).",
      "interviewSpeech": "Template literals (ES6 backticks ` ` ` `) revolutionized string formatting in JavaScript by supporting multiline strings without `\\n` escaping and inline interpolation via `${expression}`. Tagged templates are an advanced feature where a function precedes the template string, like `tag`Hello ${name}``. The tag function receives an array of static string pieces as its first argument and the evaluated interpolated expressions as subsequent arguments. This powerful pattern is used by libraries like styled-components (`styled.div`...``), GraphQL (`gql`...``), and SQL query sanitizers to prevent injection attacks.",
      "deepDive": [
        "**Template Literal Syntax**: `` `Hello ${user.name}` `` with multiline support.",
        "**Tagged Template Signature**: `function tag(strings, ...values) { ... }`.",
        "**`strings.raw`**: Exposes the raw unescaped string representations."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Template Literals & Custom Tagged Template",
        "code": "// Tagged Template Function that sanitizes or formats values\nfunction highlight(strings, ...values) {\n  return strings.reduce((acc, str, i) => {\n    const val = values[i] ? `<mark>${values[i]}</mark>` : '';\n    return `${acc}${str}${val}`;\n  }, '');\n}\n\nconst tech = 'Next.js';\nconst role = 'Fullstack';\nconst html = highlight`I build apps with ${tech} as a ${role} engineer.`;\nconsole.log(html);\n// \"I build apps with <mark>Next.js</mark> as a <mark>Fullstack</mark> engineer.\""
      },
      "commonMistakes": [
        "Forgetting that tagged template functions receive the static strings as an array of length `values.length + 1`."
      ],
      "proTips": [
        "Mentioning that styled-components and Prisma/SQL tag templates use this exact native JS feature scores high points with interviewers."
      ]
    },
    "bangla": {
      "quickAnswer": "Template literals ব্যাকটিক্স (`` ` ``) দিয়ে তৈরি স্ট্রিং যাতে সহজে `${}` দিয়ে ভেরিয়েবল এবং মাল্টিলাইন লেখা যায়। আর Tagged templates হলো ব্যাকটিক্সের আগে একটি ফাংশন বসিয়ে স্ট্রিং ও মানগুলোকে কাস্টম প্রসেস করার উন্নত কৌশল।",
      "interviewSpeech": "Template literals আসার ফলে স্ট্রিং কনক্যাটিনেশন (`+` চিহ্ন দেওয়া) বন্ধ হয়েছে এবং মাল্টিলাইন স্ট্রিং খুব সহজ হয়েছে। আর Tagged Template হলো এমন একটি ফিচার যেখানে ব্যাকটিক্স স্ট্রিং-এর আগে একটি ফাংশন ট্যাগ হিসেবে বসে—যেমন `styled.div`color: red;``. ফাংশনটি স্ট্রিংয়ের টেক্সট পার্টগুলোকে একটি অ্যারে হিসেবে এবং ডায়নামিক এক্সপ্রেশনগুলোকে আলাদা ভ্যালু হিসেবে পায়। এটি SQL ইনজেকশন প্রতিরোধ, এইচটিএমএল স্যানিটাইজেশন এবং styled-components-এর মতো আধুনিক লাইব্রেরিতে ব্যাপকভাবে ব্যবহৃত হয়।",
      "deepDive": [
        "ব্যাকটিক্স দিয়ে মাল্টিলাইন স্ট্রিং কোনো `\\n` ছাড়া সরাসরি লেখা যায়।",
        "Tagged Template ফাংশন প্রথম প্যারামিটারে স্ট্রিংয়ের খণ্ডগুলো এবং বাকি প্যারামিটারে এক্সপ্রেশনের মানগুলো পায়।"
      ],
      "commonMistakes": [
        "মনে করা যে styled-components কোনো জাদুকরী সিনট্যাক্স, অথচ এটি আসলে পিওর জাভাস্ক্রিপ্ট Tagged Template!"
      ],
      "proTips": [
        "ইন্টারভিউতে styled-components বা graphql-এর `gql`...`` এর উদাহরণ দিন।"
      ]
    }
  },
  {
    "id": "ms-q21-event-loop",
    "questionNumber": 21,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is the event loop in JavaScript?",
    "banglaQuestion": "JavaScript-এ Event Loop কী এবং এটি কীভাবে কাজ করে?",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Event Loop",
      "Call Stack",
      "Microtasks",
      "Macrotasks",
      "Concurrency"
    ],
    "english": {
      "quickAnswer": "The Event Loop is JavaScript's concurrency mechanism that continuously coordinates the single-threaded Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (timers/I/O) to achieve non-blocking asynchronous execution.",
      "interviewSpeech": "JavaScript is a single-threaded language with a single Call Stack, meaning it can only execute one piece of code at a time. To perform non-blocking I/O, timers, and HTTP requests, JavaScript relies on the runtime environment (browser or Node.js) and the Event Loop. When an async task starts (like `fetch()` or `setTimeout`), it offloads to the Web API / C++ background thread. Upon completion, its callback is enqueued into either the Microtask Queue (Promises, `queueMicrotask`, `process.nextTick`) or the Macrotask Queue (`setTimeout`, `setInterval`, I/O). The Event Loop constantly monitors the Call Stack: as soon as the stack is completely empty, it drains ALL microtasks first before picking up the next single macrotask.",
      "deepDive": [
        "**Call Stack**: Synchronous execution frames LIFO.",
        "**Microtasks (High Priority)**: `Promise.then/catch/finally`, `queueMicrotask()`, `MutationObserver`. Entire queue is drained immediately once the call stack is clear.",
        "**Macrotasks (Task Queue)**: `setTimeout`, `setInterval`, `setImmediate` (Node), DOM events, I/O. Executed one per loop iteration after microtasks.",
        "**Render step (Browser)**: Browsers recalculate styles and paint between macrotask iterations after microtasks drain."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Event Loop Execution Order Puzzle",
        "code": "console.log('1 - Sync');\n\nsetTimeout(() => {\n  console.log('2 - Macrotask (Timeout)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3 - Microtask (Promise)');\n});\n\nconsole.log('4 - Sync');\n\n// Output order:\n// 1 - Sync\n// 4 - Sync\n// 3 - Microtask (Promise) -> Microtasks drain first!\n// 2 - Macrotask (Timeout)"
      },
      "commonMistakes": [
        "Thinking `setTimeout(fn, 0)` executes immediately (it is placed in the macrotask queue and must wait for current stack and all microtasks).",
        "Believing JavaScript itself is multi-threaded (the engine JS execution is single-threaded; Web APIs/libuv provide the concurrency)."
      ],
      "proTips": [
        "Remember the mantra: 'Synchronous Stack first -> All Microtasks -> DOM Render (browser) -> Next Macrotask'."
      ]
    },
    "bangla": {
      "quickAnswer": "Event Loop হলো জাভাস্ক্রিপ্টের এমন এক মেকানিজম যা সিঙ্গল থ্রেডেড হওয়া সত্ত্বেও কল স্ট্যাক এবং ব্যাকগ্রাউন্ড টাস্ক কিউ (Microtasks & Macrotasks) সমন্বয় করে নন-ব্লকিং অ্যাসিনক্রোনাস কাজ পরিচালনা করে।",
      "interviewSpeech": "জাভাস্ক্রিপ্ট সিঙ্গেল থ্রেডেড, অর্থাৎ এতে একটি মাত্র কল স্ট্যাক (Call Stack) থাকে এবং একবারে একটি কাজই হতে পারে। কোনো দীর্ঘ কাজ (যেমন নেটওয়ার্ক কল বা টাইমার) ব্রাউজার ব্যাকগ্রাউন্ডে পাঠিয়ে দেয়। কাজ শেষ হলে এদের কলব্যাক টাস্ক কিউতে জমা হয়। Event Loop সারাক্ষণ কল স্ট্যাক পর্যবেক্ষণ করে। যখনই স্ট্যাক ফাঁকা হয়, এটি মাইক্রোটাস্ক কিউ (যেমন Promise) এর সব কাজ আগে শেষ করে, তারপর ম্যাক্রোটাস্ক কিউ (যেমন `setTimeout`) থেকে কাজ এনে স্ট্যাকে পাঠায়। এর ফলেই অ্যাপ কখনো ফ্রিজ হয় না।",
      "deepDive": [
        "**Call Stack**: সিঙ্ক্রোনাস কোড এক্সিকিউট করে।",
        "**Microtask Queue**: প্রমিজ এবং `queueMicrotask`। এর প্রায়োরিটি সবচেয়ে বেশি।",
        "**Macrotask Queue**: `setTimeout`, `setInterval`। মাইক্রোটাস্ক সব ক্লিয়ার হওয়ার পর এটি থেকে একে একে কাজ নেওয়া হয়।"
      ],
      "commonMistakes": [
        "`setTimeout(..., 0)` মানে সাথে সাথে চলা নয়; এটি ম্যাক্রোটাস্ক কিউতে জমা হয় এবং স্ট্যাক ও মাইক্রোটাস্ক ফাঁকা হওয়ার পর চলে।"
      ],
      "proTips": [
        "সহজ ক্রম: সিঙ্ক কোড -> সব মাইক্রোটাস্ক (Promise) -> ম্যাক্রোটাস্ক (setTimeout)।"
      ]
    }
  },
  {
    "id": "ms-q22-promises-explained",
    "questionNumber": 22,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "Explain how Promises work in JavaScript.",
    "banglaQuestion": "JavaScript-এ Promises কীভাবে কাজ করে তা ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Promises",
      "Async",
      "ES6",
      "Error Handling"
    ],
    "english": {
      "quickAnswer": "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value, existing in one of three states: pending, fulfilled, or rejected.",
      "interviewSpeech": "Before Promises, asynchronous JavaScript relied on nested callbacks, leading to unmaintainable 'callback hell' and inversion of control. A Promise represents a placeholder for a future asynchronous value. It starts in the `pending` state and permanently transitions to either `fulfilled` (with a resolved value via `resolve()`) or `rejected` (with an error reason via `reject()`). Promises are chainable using `.then()` for success and `.catch()` for errors, where each `.then()` returns a new Promise, allowing linear asynchronous flows and centralized error handling.",
      "deepDive": [
        "**States**: `pending` -> `fulfilled` OR `rejected` (Settled/Immutable once settled).",
        "**Combinators**: `Promise.all()` (fails-fast), `Promise.allSettled()` (waits for all), `Promise.race()` (first to settle), `Promise.any()` (first to fulfill).",
        "**Microtask Queue**: Promise callbacks always execute asynchronously in the Microtask Queue."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Promise Creation and Consumption",
        "code": "function fetchUserData(userId) {\n  return new Promise((resolve, reject) => {\n    if (!userId) {\n      return reject(new Error('User ID required'));\n    }\n    setTimeout(() => {\n      resolve({ id: userId, name: 'Alice', role: 'Engineer' });\n    }, 500);\n  });\n}\n\nfetchUserData(1)\n  .then(user => {\n    console.log('Fetched:', user.name);\n    return user.role;\n  })\n  .then(role => console.log('Role is:', role))\n  .catch(err => console.error('Error:', err.message))\n  .finally(() => console.log('Fetch attempt complete'));"
      },
      "commonMistakes": [
        "Nesting `.then()` calls inside `.then()` callbacks (re-creating 'promise hell' instead of returning and chaining them).",
        "Forgetting to attach a `.catch()` or handle unhandled promise rejections."
      ],
      "proTips": [
        "Explain `Promise.allSettled()` vs `Promise.all()`: `allSettled` is resilient because one failure won't discard the other successful results."
      ]
    },
    "bangla": {
      "quickAnswer": "Promise হলো একটি অবজেক্ট যা ভবিষ্যতে সম্পন্ন হতে যাওয়া কোনো অ্যাসিনক্রোনাস কাজের ফলাফল (বা এরর) নির্দেশ করে। এর তিনটি স্টেট থাকে: pending, fulfilled, এবং rejected।",
      "interviewSpeech": "কলব্যাক হেল (Callback Hell) এবং অগোছালো কোড থেকে মুক্তি দিতে ES6-এ Promise আনা হয়। একটি প্রমিজ শুরুতে `pending` অবস্থায় থাকে। কাজ সফল হলে `resolve()` কলের মাধ্যমে এটি `fulfilled` হয়, আর ব্যর্থ হলে `reject()` কলের মাধ্যমে `rejected` হয়। প্রমিজের সাথে `.then()` দিয়ে ফলাফল ধরা যায় এবং `.catch()` দিয়ে চমৎকারভাবে এরর হ্যান্ডেল করা যায়। প্রতিটি `.then()` আরেকটি নতুন প্রমিজ রিটার্ন করে, ফলে চেইনিং করা সহজ হয়।",
      "deepDive": [
        "৩টি স্টেট: Pending (অপেক্ষমান), Fulfilled (সফল), Rejected (ব্যর্থ)।",
        "স্থায়িত্ব: একবার ফিলাপ বা রিজেক্ট হয়ে গেলে প্রমিজের স্টেট আর বদলানো যায় না।",
        "মেথডস: `Promise.all`, `Promise.allSettled`, `Promise.race`।"
      ],
      "commonMistakes": [
        "একটি `.then()` এর ভেতর আরেকটি `.then()` নেস্ট করা। সবসময় ভ্যালু রিটার্ন করে ফ্ল্যাট চেইনিং করা উচিত।"
      ],
      "proTips": [
        "সবগুলো রিকোয়েস্টের পূর্ণাঙ্গ চিত্র পেতে `Promise.allSettled()` সেরা কারণ কোনো একটি ফেইল করলেও বাকিগুলোর রেজাল্ট পাওয়া যায়।"
      ]
    }
  },
  {
    "id": "ms-q23-async-await-benefits",
    "questionNumber": 23,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is async/await and how does it improve upon Promises?",
    "banglaQuestion": "async/await কী এবং এটি সাধারণ Promise-এর চেয়ে কীভাবে উন্নত?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Async/Await",
      "Promises",
      "ES8",
      "Clean Code"
    ],
    "english": {
      "quickAnswer": "`async/await` is syntactic sugar built on top of Promises (and generators) that allows asynchronous code to be written and read sequentially like synchronous code, using standard `try/catch` blocks.",
      "interviewSpeech": "Introduced in ES2017 (ES8), `async/await` provides a cleaner, more intuitive abstraction over Promises. Any function prefixed with `async` automatically wraps its return value in a Promise. Inside an `async` function, the `await` keyword pauses execution until the awaited Promise settles, unpacking its resolved value. It vastly improves code readability by eliminating nested `.then()` callbacks, simplifies complex conditional branching, and enables standard synchronous `try/catch/finally` blocks for unified error handling.",
      "deepDive": [
        "**Syntactic Sugar**: Under the hood, `async/await` compiles down to Promises and generator functions.",
        "**Sequential vs Concurrent**: Sequential `await fetch(a); await fetch(b);` takes time A + B. Use `await Promise.all([fetch(a), fetch(b)])` for parallel execution.",
        "**Error Handling**: Catches both asynchronous rejections and synchronous parsing errors within the same `try/catch` block."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "async/await with Concurrent Optimization and Error Handling",
        "code": "async function loadDashboardData(userId) {\n  try {\n    // Run independent network calls in parallel:\n    const [profile, posts] = await Promise.all([\n      fetchUserProfile(userId),\n      fetchUserPosts(userId)\n    ]);\n\n    return { profile, posts };\n  } catch (error) {\n    console.error('Failed to load dashboard:', error.message);\n    throw error;\n  }\n}"
      },
      "commonMistakes": [
        "Awaiting independent operations sequentially in a loop, accidentally creating performance bottlenecks (instead of using `Promise.all`).",
        "Using `await` in regular non-async functions (unless using ES2022 top-level await in modules)."
      ],
      "proTips": [
        "Highlight the difference: '`async/await` doesn't replace Promises—it consumes Promises more elegantly.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`async/await` হলো Promise-এর উপর তৈরি সিনট্যাকটিক সুগার (syntactic sugar), যা অ্যাসিনক্রোনাস কোডকে সাধারণ সিঙ্ক্রোনাস কোডের মতো সহজে পড়তে ও লিখতে সাহায্য করে।",
      "interviewSpeech": "ES8-এ আসা `async/await` প্রমিজ হ্যান্ডলিংকে অনেক সহজ ও সুন্দর করেছে। কোনো ফাংশনের আগে `async` লিখলে সেটি নিজে থেকেই একটি প্রমিজ রিটার্ন করে। আর ফাংশনের ভেতর `await` লিখলে প্রমিজের রেজাল্ট না আসা পর্যন্ত কোড অপেক্ষা করে এবং সরাসরি রেজাল্টটি ফেরত দেয়। ফলে কোনো চেইনিং বা কলব্যাকের ঝামেলা থাকে না। সবচেয়ে বড় সুবিধা হলো—আমরা সাধারণ `try/catch` ব্লক দিয়েই সব ধরনের অ্যাসিনক্রোনাস এরর হ্যান্ডেল করতে পারি।",
      "deepDive": [
        "`async` ফাংশন সবসময় একটি Promise রিটার্ন করে।",
        "`await` শুধু `async` ফাংশনের ভেতরেই কাজ করে।",
        "প্যারালাল রিকোয়েস্ট পাঠানোর জন্য `await Promise.all(...)` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "লুপের ভেতর একটার পর একটা `await` দিয়ে রিকোয়েস্ট স্লো বানিয়ে ফেলা। ইন্ডিপেন্ডেন্ট কল হলে `Promise.all` ব্যবহার করা উচিত।"
      ],
      "proTips": [
        "মনে রাখবেন: `async/await` কিন্তু প্রমিজকে বাতিল করে না, বরং প্রমিজের উপর ভিত্তি করেই কাজ করে।"
      ]
    }
  },
  {
    "id": "ms-q24-call-apply-bind",
    "questionNumber": 24,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is the difference between call(), apply(), and bind()?",
    "banglaQuestion": "call(), apply() এবং bind()-এর মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "JavaScript",
      "Functions",
      "this Context",
      "call",
      "apply",
      "bind"
    ],
    "english": {
      "quickAnswer": "`call()` and `apply()` immediately invoke a function with an explicit `this` context (`call` takes arguments comma-separated; `apply` takes arguments as an array). `bind()` does not execute immediately; it returns a new bound function with the `this` context locked in.",
      "interviewSpeech": "`call`, `apply`, and `bind` are built-in methods on `Function.prototype` used to explicitly control the `this` binding of a function. `call()` invokes the function immediately, accepting the `this` object followed by individual arguments separated by commas. `apply()` also invokes the function immediately, but accepts arguments as a single array (or array-like object). On the other hand, `bind()` does NOT execute the function immediately; instead, it returns a new function with `this` permanently bound to the specified object and optional prepended curried arguments.",
      "deepDive": [
        "**`call(thisArg, arg1, arg2)`**: Immediate invocation, comma list of arguments.",
        "**`apply(thisArg, [arg1, arg2])`**: Immediate invocation, array of arguments.",
        "**`bind(thisArg, arg1)`**: Deferred invocation, returns a new function.",
        "**Arrow Functions**: Arrow functions ignore `call`, `apply`, and `bind` because they have lexical `this`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "call vs apply vs bind in Action",
        "code": "const user = { name: 'Rahim' };\n\nfunction introduce(greeting, punctuation) {\n  console.log(`${greeting}, my name is ${this.name}${punctuation}`);\n}\n\n// 1. call: arguments separated by commas\nintroduce.call(user, 'Hello', '!'); // \"Hello, my name is Rahim!\"\n\n// 2. apply: arguments passed as an array\nintroduce.apply(user, ['Welcome', '.']); // \"Welcome, my name is Rahim.\"\n\n// 3. bind: returns a new function to be called later\nconst greetRahim = introduce.bind(user, 'Hi');\ngreetRahim('?'); // \"Hi, my name is Rahim?\""
      },
      "commonMistakes": [
        "Expecting `bind()` to invoke the function immediately.",
        "Trying to rebind the `this` context of an arrow function (arrow functions cannot be bound)."
      ],
      "proTips": [
        "Mnemonic: **A**pply takes an **A**rray; **C**all takes **C**ommas; **B**ind returns a **B**ound function."
      ]
    },
    "bangla": {
      "quickAnswer": "`call()` এবং `apply()` সাথে সাথেই ফাংশন রান করায় (`call` প্যারামিটার নেয় কমা দিয়ে, `apply` নেয় অ্যারেতে)। আর `bind()` সাথে সাথে রান না করে `this` ফিক্সড করে একটি নতুন ফাংশন বানিয়ে দেয়।",
      "interviewSpeech": "এই তিনটি মেথড কোনো ফাংশনের ভেতরের `this` কার দিকে নির্দেশ করবে তা জোরপূর্বক (explicitly) নির্ধারণ করে দেওয়ার জন্য ব্যবহৃত হয়। `call` ফাংশনকে তাৎক্ষণিকভাবে কল করে এবং আর্গুমেন্টগুলো আলাদা আলাদা কমা দিয়ে গ্রহণ করে। `apply` ও সাথে সাথে কল করে কিন্তু আর্গুমেন্টগুলো একটি অ্যারে হিসেবে গ্রহণ করে। আর `bind` সাথে সাথে এক্সিকিউট হয় না, বরং একটি নতুন ফাংশন তৈরি করে ফেরত দেয় যার সাথে ওই নির্দিষ্ট অবজেক্টটি আজীবনের জন্য বাইন্ড হয়ে থাকে।",
      "deepDive": [
        "`call`: সাথে সাথে কল, কমা সেপারেটেড আর্গুমেন্ট।",
        "`apply`: সাথে সাথে কল, অ্যারে আকারে আর্গুমেন্ট।",
        "`bind`: ভবিষ্যতে কল করার জন্য নতুন ফাংশন বানায়।"
      ],
      "commonMistakes": [
        "Arrow Function-এ `bind`, `call` বা `apply` দিয়ে `this` বদলানোর চেষ্টা করা (অ্যারো ফাংশনে এটি কাজ করে না)।"
      ],
      "proTips": [
        "সহজ কৌশল: **A**pply = **A**rray, **C**all = **C**omma, **B**ind = **B**ound function (পরে ডাকার জন্য)।"
      ]
    }
  },
  {
    "id": "ms-q25-prototypal-inheritance",
    "questionNumber": 25,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is prototypal inheritance in JavaScript?",
    "banglaQuestion": "JavaScript-এ Prototypal Inheritance কী এবং এটি কীভাবে কাজ করে?",
    "difficulty": "Advanced",
    "importance": "High",
    "tags": [
      "JavaScript",
      "Prototypes",
      "OOP",
      "Inheritance",
      "Prototype Chain"
    ],
    "english": {
      "quickAnswer": "Prototypal inheritance is JavaScript's inheritance model where objects inherit properties and methods directly from other objects via a hidden `[[Prototype]]` link (the prototype chain).",
      "interviewSpeech": "Unlike classical OOP languages (like Java or C++) where classes act as blueprints creating static instances, JavaScript objects link directly to other objects. Every JavaScript object has an internal link called `[[Prototype]]` (accessible via `Object.getPrototypeOf()` or `__proto__`). When you look up a property on an object and it isn't found on the object itself, JavaScript traverses up this prototype chain until it finds the property or reaches `null` (the end of the chain, `Object.prototype`). ES6 `class` syntax is merely syntactic sugar over this prototypal mechanism.",
      "deepDive": [
        "**`prototype` vs `__proto__`**: `prototype` is a property on constructor functions used to build instances. `__proto__` (or `[[Prototype]]`) is the actual link on created object instances.",
        "**Memory Efficiency**: Methods defined on `User.prototype` exist only once in memory and are shared across all 10,000 instances.",
        "**End of chain**: `Object.prototype.[[Prototype]] === null`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Prototypal Inheritance in Action",
        "code": "const animal = {\n  isAlive: true,\n  eat() {\n    return 'Eating food...';\n  }\n};\n\n// Create rabbit inheriting from animal prototype\nconst rabbit = Object.create(animal);\nrabbit.jump = true;\n\nconsole.log(rabbit.jump);    // true (found on own property)\nconsole.log(rabbit.eat());   // 'Eating food...' (found on prototype!)\nconsole.log(rabbit.isAlive); // true (found on prototype!)\nconsole.log(Object.getPrototypeOf(rabbit) === animal); // true"
      },
      "commonMistakes": [
        "Assuming ES6 `class` is a real class system like Java (it is just syntactic sugar over prototype chains).",
        "Mutating `Object.prototype` directly (pollutes every single object in the entire application)."
      ],
      "proTips": [
        "Explain that when calling `[1, 2].map()`, `map` isn't copied to every array; it delegates up to `Array.prototype.map` via the prototype chain."
      ]
    },
    "bangla": {
      "quickAnswer": "Prototypal Inheritance হলো জাভাস্ক্রিপ্টের নিজস্ব অবজেক্ট উত্তরাধিকার মডেল, যেখানে একটি অবজেক্ট সরাসরি অন্য একটি অবজেক্ট থেকে প্রপার্টি এবং মেথড উত্তরাধিকার সূত্রে পায়।",
      "interviewSpeech": "জাভা বা সি++ এর মতো ক্লাসিক্যাল ল্যাঙ্গুয়েজে ক্লাস থেকে অবজেক্ট তৈরি হয়। কিন্তু জাভাস্ক্রিপ্টে অবজেক্ট সরাসরি অন্য অবজেক্টের সাথে যুক্ত থাকে। প্রতিটি অবজেক্টের ভেতরে একটি ইন্টারনাল লিঙ্ক বা রেফারেন্স থাকে যাকে `[[Prototype]]` বলা হয়। যখন কোনো অবজেক্টে কোনো প্রপার্টি খোঁজা হয় এবং তা সেখানে না পাওয়া যায়, তখন ইঞ্জিন তার প্রোটোটাইপে গিয়ে খোঁজে। সেখানেও না পেলে তার উপরের প্রোটোটাইপে যায়—এটিকে বলে Prototype Chain। ES6-এর `class` মূলত এই প্রোটোটাইপাল মেকানিজমের উপর লেখা একটি পরিচ্ছন্ন আবরণ মাত্র।",
      "deepDive": [
        "মেমরি অপটিমাইজেশন: মেথডগুলো প্রোটোটাইপে রাখলে লাখ লাখ ইনস্ট্যান্স হলেও মেমোরিতে মেথডটি মাত্র একবারই তৈরি হয়।",
        "চেইনের শেষ মাথা হলো `Object.prototype`, যার প্রোটোটাইপ হলো `null`।"
      ],
      "commonMistakes": [
        "মনে করা যে ES6 ক্লাস জাভার ক্লাসের মতো আসল ক্লাস। এটি সম্পূর্ণ ভুল, ব্যাকএন্ডে এটি পিওর প্রোটোটাইপ।"
      ],
      "proTips": [
        "উদাহরণ দিন: আমরা যখন `arr.map()` চালাই, মেথডটি অ্যারের ভেতরে থাকে না, এটি থাকে `Array.prototype`-এ।"
      ]
    }
  },
  {
    "id": "ms-q26-this-keyword-contexts",
    "questionNumber": 26,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "Explain the concept of this keyword in different contexts.",
    "banglaQuestion": "বিভিন্ন কনটেক্সটে this কিওয়ার্ড কীভাবে কাজ করে তা ব্যাখ্যা করুন।",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "this Keyword",
      "Context",
      "Arrow Functions",
      "Execution Context"
    ],
    "english": {
      "quickAnswer": "In JavaScript, `this` refers to the object currently executing the function, determined dynamically at runtime by *how* the function is called (except for arrow functions, which retain lexical `this`).",
      "interviewSpeech": "The value of `this` is not static; it depends on invocation context. There are 5 primary rules: 1) **Global context**: in browser scripts, `this` refers to `window` (or `undefined` in strict mode `'use strict'`). 2) **Method invocation**: when called as `obj.method()`, `this` points to `obj`. 3) **Constructor invocation**: with `new Person()`, `this` points to the newly allocated instance. 4) **Explicit binding**: using `.call()`, `.apply()`, or `.bind()`, `this` is set to the provided argument. 5) **Arrow functions**: do not have their own `this`; they capture `this` lexically from their surrounding outer enclosing scope.",
      "deepDive": [
        "**Global/Default**: `window` (sloppy) or `undefined` (strict mode).",
        "**Implicit**: The object before the dot at call time (`user.login()` -> `user`).",
        "**Explicit**: `.call(context)`, `.apply(context)`, `.bind(context)`.",
        "**`new` keyword**: Brand new instance object.",
        "**Lexical (Arrow Functions)**: Inherits from outer parent function scope, ignoring call-time dynamic binding."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "this Behavior Across Different Contexts",
        "code": "const team = {\n  name: 'Dev Team',\n  members: ['Karim', 'Salma'],\n  \n  // Method invocation: this === team\n  listMembersRegular() {\n    this.members.forEach(function(member) {\n      // In regular callback, this is lost (window/undefined)!\n      // console.log(`${member} is in ${this.name}`); // Bug: this.name is undefined\n    });\n  },\n\n  listMembersArrow() {\n    this.members.forEach(member => {\n      // Arrow function captures lexical 'this' from listMembersArrow!\n      console.log(`${member} is in ${this.name}`); // Success!\n    });\n  }\n};\n\nteam.listMembersArrow();"
      },
      "commonMistakes": [
        "Passing an object method as a callback (e.g. `setTimeout(obj.method, 1000)`) and expecting `this` to still be `obj` (the context is lost; use an arrow function or `bind`).",
        "Using arrow functions as object methods when you need `this` to refer to the object itself."
      ],
      "proTips": [
        "To determine `this`, ask: 'Is there `new`? Did they use `call/apply/bind`? Is there a dot `obj.fn()`? Is it an arrow function? Otherwise, it defaults to global/undefined.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`this` নির্দেশ করে কোন অবজেক্ট বর্তমানে ফাংশনটিকে এক্সিকিউট করছে। ফাংশনটি *কীভাবে কল করা হয়েছে* তার উপর ভিত্তি করে রানটাইমে `this`-এর মান নির্ধারিত হয়।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে `this` বোঝার মূল নিয়ম হলো ফাংশনটি কীভাবে কল করা হয়েছে তা দেখা: ১) গ্লোবাল স্কোপে বা সাধারণ ফাংশনে `this` হলো উইন্ডো অবজেক্ট (স্ট্রিক্ট মোডে `undefined`)। ২) কোনো অবজেক্টের মেথড হিসেবে কল করলে (`user.show()`), `this` হলো ওই অবজেক্ট। ৩) `new` কিওয়ার্ড দিয়ে কল করলে `this` হলো নতুন তৈরি হওয়া অবজেক্ট। ৪) `call`, `apply`, `bind` দিয়ে নিজের ইচ্ছামতো `this` সেট করা যায়। ৫) আর Arrow Function-এর নিজস্ব কোনো `this` নেই, এটি তার বাইরের চারপাশের স্কোপ থেকে লেক্সিক্যাল `this` ধার করে।",
      "deepDive": [
        "**মূল ধারণা**: `this` নির্দেশ করে কোন অবজেক্ট বর্তমানে ফাংশনটিকে এক্সিকিউট করছে। ফাংশনটি *কীভাবে কল করা হয়েছে* তার উপর ভিত্তি করে রানটাইমে `this`-এর মান নির্ধারিত হয়।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q27-javascript-modules-import-export",
    "questionNumber": 27,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What are JavaScript modules (import/export)?",
    "banglaQuestion": "JavaScript Modules (import/export) কী এবং কীভাবে কাজ করে?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "JavaScript",
      "ES6 Modules",
      "import",
      "export",
      "Clean Architecture"
    ],
    "english": {
      "quickAnswer": "ES6 Modules (ESM) are the official JavaScript standard for splitting code into reusable, isolated files that share logic using `export` (named or default) and `import` declarations.",
      "interviewSpeech": "Before ES6, JavaScript had no official modular system, forcing developers to rely on script tags, IIFEs, or third-party formats like CommonJS (`require`) and AMD. ES Modules (ESM) introduced native static module structure via `import` and `export`. Modules automatically execute in strict mode, have their own isolated top-level scope (no global variable pollution), and are statically analyzable—which allows modern bundlers like Webpack, Vite, and Next.js to perform 'tree-shaking' (dead code elimination).",
      "deepDive": [
        "**Named Exports**: `export const add = () => {}` -> imported with matching names `{ add }`.",
        "**Default Export**: `export default App` -> single primary export imported with any chosen identifier name.",
        "**Static vs Dynamic**: Static `import ... from '...'` occurs at compile time; dynamic `import('./module.js')` loads code asynchronously on-demand for code splitting."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Named and Default Exports & Dynamic Import",
        "code": "// mathUtils.js\nexport const PI = 3.14159; // Named export\nexport function add(a, b) { return a + b; } // Named export\nexport default function multiply(a, b) { return a * b; } // Default export\n\n// app.js\nimport multiply, { PI, add } from './mathUtils.js';\n\n// Dynamic Import (for code splitting / lazy loading)\nbutton.addEventListener('click', async () => {\n  const { calculateInvoice } = await import('./heavyAccounting.js');\n  calculateInvoice();\n});"
      },
      "commonMistakes": [
        "Wrapping a default export inside curly braces during import (e.g., `import { multiply } from './mathUtils.js'` when it was exported as default).",
        "Modifying imported bindings (imported bindings are live, read-only views)."
      ],
      "proTips": [
        "Mention Tree Shaking: Named exports enable bundlers to eliminate unused code, whereas `export default { a, b, c }` bundles the entire object."
      ]
    },
    "bangla": {
      "quickAnswer": "ES6 Modules হলো কোডকে ছোট ছোট আলাদা ফাইলে ভাগ করে প্রয়োজন অনুযায়ী `export` এবং `import` এর মাধ্যমে শেয়ার ও পুনঃব্যবহার করার আধুনিক স্ট্যান্ডার্ড।",
      "interviewSpeech": "অতীতে পুরো জাভাস্ক্রিপ্ট কোড বড় বড় ফাইলে বা গ্লোবাল ভেরিয়েবল দিয়ে লেখা হতো, যা বাগ তৈরি করত। ES6 মডিউলে প্রতিটি ফাইলের নিজস্ব প্রাইভেট স্কোপ থাকে। ফাইল থেকে ফাংশন বা অবজেক্ট বাইরে পাঠাতে `export` (Named বা Default) করা হয় এবং অন্য ফাইলে ব্যবহার করতে `import` করা হয়। এটি বিল্ট-ইন স্ট্রিক্ট মোডে চলে এবং এর ফলে আধুনিক বান্ডলারগুলো (যেমন Next.js বা Vite) ট্রিশেকিং (Tree-shaking) এর মাধ্যমে অপ্রয়োজনীয় কোড বাদ দিয়ে অ্যাপ হালকা করতে পারে।",
      "deepDive": [
        "Named export: এক ফাইলে অনেকগুলো থাকতে পারে এবং কার্লি ব্র্যাকেট `{}` দিয়ে ইমপোর্ট করতে হয়।",
        "Default export: এক ফাইলে একটিই থাকে এবং যেকোনো নামে ইমপোর্ট করা যায়।"
      ],
      "commonMistakes": [
        "Default এক্সপোর্টকে ইমপোর্টের সময় `{}` এর ভেতর লেখা।"
      ],
      "proTips": [
        "ট্রি-শেকিংয়ের জন্য সবসময় Named Export ব্যবহার করা উত্তম।"
      ]
    }
  },
  {
    "id": "ms-q28-shallow-vs-deep-copy",
    "questionNumber": 28,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What is the difference between shallow copy and deep copy of objects?",
    "banglaQuestion": "অবজেক্টের Shallow Copy এবং Deep Copy-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Objects",
      "Shallow Copy",
      "Deep Copy",
      "Immutability"
    ],
    "english": {
      "quickAnswer": "A shallow copy duplicates only the top-level properties (nested objects still share memory references), while a deep copy recursively duplicates every nested object and array, ensuring total independence.",
      "interviewSpeech": "When copying objects in JavaScript, primitive values are copied by value, but objects/arrays are copied by reference. A shallow copy (created via `Object.assign({}, orig)` or the spread operator `{ ...orig }`) copies top-level primitives cleanly, but nested sub-objects remain referenced to the original. Mutating `copy.address.city` will unexpectedly mutate `orig.address.city`. A deep copy creates an entirely new tree of memory. Traditionally done with `JSON.parse(JSON.stringify(obj))` (which lost functions, dates, and undefined), modern JavaScript now natively provides `structuredClone(obj)` for true deep cloning.",
      "deepDive": [
        "**Shallow Copy**: `{ ...obj }`, `Object.assign({}, obj)`, `[...arr]`, `arr.slice()`.",
        "**Deep Copy**: `structuredClone(obj)` (native modern API), lodash `_.cloneDeep()`, or recursive functions.",
        "**JSON Trick Limitations**: `JSON.parse(JSON.stringify(x))` discards `undefined`, `functions`, `Symbols`, converts `Date` to string, and crashes on circular references."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Shallow Copy vs Deep Copy Demonstration",
        "code": "const original = {\n  name: 'Tanvir',\n  skills: { primary: 'React', secondary: 'Node' }\n};\n\n// Shallow Copy using spread\nconst shallow = { ...original };\nshallow.name = 'Hasan'; // Independent top-level\nshallow.skills.primary = 'Vue'; // MUTATES original.skills.primary!\nconsole.log(original.skills.primary); // 'Vue' (Accidental bug!)\n\n// Deep Copy using modern native structuredClone\nconst deep = structuredClone(original);\ndeep.skills.primary = 'Next.js';\nconsole.log(original.skills.primary); // 'Vue' (Original is protected!)"
      },
      "commonMistakes": [
        "Assuming spread `{ ...obj }` creates a deep copy.",
        "Using `JSON.parse(JSON.stringify())` on objects containing Dates or functions."
      ],
      "proTips": [
        "In modern 2024+ interviews, always mention `structuredClone()` as the standard native solution for deep cloning."
      ]
    },
    "bangla": {
      "quickAnswer": "Shallow copy শুধু প্রথম লেভেলের প্রপার্টি কপি করে (ভেতরের নেস্টেড অবজেক্টগুলো আগের রেফারেন্সেই রয়ে যায়), আর Deep copy ভেতরের সমস্ত নেস্টেড অবজেক্টসহ পুরোপুরি আলাদা নতুন মেমরিতে কপি তৈরি করে।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে অবজেক্ট রেফারেন্স টাইপ। আমরা যখন স্প্রেড অপারেটর `{ ...obj }` দিয়ে শ্যালো কপি করি, তখন মূল অবজেক্টের ভেতরের নেস্টেড অবজেক্টটি আগের মেমরির সাথেই কানেক্টেড থাকে। ফলে কপির ভেতরে নেস্টেড ডেটা বদলালে মূল ডেটাও বদলে যায়। ডিপ কপি করতে হলে পুরো অবজেক্ট ট্রি নতুন করে বানাতে হয়। অতীতে `JSON.parse(JSON.stringify(obj))` করা হতো যার অনেক সীমাবদ্ধতা ছিল। তবে আধুনিক ব্রাউজার ও নোডজেএসে এখন চমৎকার বিল্ট-ইন মেথড `structuredClone(obj)` রয়েছে যা নিখুঁত ডিপ কপি তৈরি করে।",
      "deepDive": [
        "স্প্রেড অপারেটর বা `Object.assign()` শুধুমাত্র শ্যালো কপি করে।",
        "ডিপ কপির আধুনিক স্ট্যান্ডার্ড মেথড হলো `structuredClone()`।"
      ],
      "commonMistakes": [
        "মনে করা যে স্প্রেড অপারেটর পুরো ডিপ কপি করে ফেলে।"
      ],
      "proTips": [
        "ইন্টারভিউতে আধুনিক `structuredClone()` মেথডের নাম উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "ms-q29-weakmap-and-weakset",
    "questionNumber": 29,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "What are WeakMap and WeakSet and when would you use them?",
    "banglaQuestion": "WeakMap এবং WeakSet কী এবং এগুলো কখন ব্যবহার করা উচিত?",
    "difficulty": "Advanced",
    "importance": "Medium",
    "tags": [
      "JavaScript",
      "WeakMap",
      "WeakSet",
      "Garbage Collection",
      "Memory Management"
    ],
    "english": {
      "quickAnswer": "`WeakMap` and `WeakSet` are collections that hold 'weak' references to objects only, meaning they do not prevent garbage collection if no other references exist, preventing memory leaks.",
      "interviewSpeech": "In standard `Map` and `Set`, storing an object keeps a strong reference to it in memory, preventing the JavaScript Garbage Collector from cleaning it up even if the rest of your app deletes it. `WeakMap` (key-value pairs where keys MUST be objects) and `WeakSet` (values MUST be objects) hold weak references. Once an object key has no other references elsewhere in the program, it is automatically garbage collected, and its entry vanishes from the Weak collection. Because entries are garbage-collected non-deterministically, they are not iterable and have no `.size` or `.clear()` methods.",
      "deepDive": [
        "**Key Requirements**: Keys in `WeakMap` and values in `WeakSet` MUST be objects (or registered symbols in ES2023).",
        "**Garbage Collection**: Prevents memory leaks automatically when managing DOM nodes or transient metadata.",
        "**Use Cases**: Storing private data for classes, DOM node metadata caches, circular dependency tracking."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "WeakMap for DOM Node Metadata without Memory Leaks",
        "code": "// Caching click counts for DOM elements\nconst clickCounts = new WeakMap();\n\nfunction registerButtonClick(buttonElement) {\n  const count = clickCounts.get(buttonElement) || 0;\n  clickCounts.set(buttonElement, count + 1);\n}\n\n// When buttonElement is removed from DOM and dereferenced:\n// The WeakMap entry is automatically garbage-collected! No memory leak."
      },
      "commonMistakes": [
        "Trying to loop over a WeakMap with `forEach` or checking its `.size` (it is deliberately non-iterable because garbage collection timing is unpredictable).",
        "Using primitives (strings/numbers) as keys in WeakMap (throws TypeError)."
      ],
      "proTips": [
        "Key phrase to say: 'WeakMap enables attaching metadata to third-party objects or DOM elements without causing memory leaks when those objects are destroyed.'"
      ]
    },
    "bangla": {
      "quickAnswer": "WeakMap এবং WeakSet হলো এমন কালেকশন যা অবজেক্টের উইক (weak) রেফারেন্স রাখে, যার ফলে মূল কোডে অবজেক্টটির রেফারেন্স মুছে গেলে গার্বেজ কালেক্টর মেমোরি থেকে স্বয়ংক্রিয়ভাবে তা ক্লিন করে দেয়।",
      "interviewSpeech": "সাধারণ `Map` বা `Set`-এ কোনো অবজেক্ট রাখলে মেমোরিতে স্ট্রং রেফারেন্স থাকে, ফলে অবজেক্ট ডিলিট করলেও মেমোরি খালি হয় না (মেমরি লিক হয়)। কিন্তু `WeakMap` এবং `WeakSet`-এ অবজেক্টের প্রতি দুর্বল (weak) রেফারেন্স থাকে। বাইরে অন্য কোথাও ওই অবজেক্টটির অস্তিত্ব না থাকলে জাভাস্ক্রিপ্ট ইঞ্জিন তাকে স্বয়ংক্রিয়ভাবে মেমোরি থেকে ডিলিট (Garbage Collect) করে দেয়। এর কি (key) সবসময় অবজেক্ট হতে হয়। এতে মেমোরি লিক প্রতিরোধ হয়। যেহেতু গার্বেজ কালেকশন কখন হবে তা নিশ্চিত নয়, তাই এতে লুপ চালানো যায় না এবং কোনো `.size` প্রপার্টি থাকে না।",
      "deepDive": [
        "WeakMap-এর কি (key) এবং WeakSet-এর ভ্যালু সবসময় অবজেক্ট হতে হবে।",
        "মেমোরি লিক সম্পূর্ণ প্রতিরোধ করে।",
        "এতে `.size` নেই এবং কোনো লুপ চালানো যায় না।"
      ],
      "commonMistakes": [
        "WeakMap-এ লুপ চালানোর চেষ্টা করা বা সাইজ বের করতে যাওয়া।"
      ],
      "proTips": [
        "DOM এলিমেন্টের সাথে অতিরিক্ত ডেটা ট্যাগ করে রাখতে এটি চমৎকার।"
      ]
    }
  },
  {
    "id": "ms-q30-memoization-concept",
    "questionNumber": 30,
    "module": "JavaScript Fundamentals II",
    "topic": "Arrays, Objects, ES6+ & Async",
    "question": "Explain the concept of memoization with an example.",
    "banglaQuestion": "Memoization কী? উদাহরণসহ এর কার্যপদ্ধতি ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Memoization",
      "Performance",
      "Optimization",
      "Closures"
    ],
    "english": {
      "quickAnswer": "Memoization is an optimization technique that caches the return results of expensive pure function calls based on their input parameters, returning the cached result when the same inputs occur again.",
      "interviewSpeech": "Memoization speeds up computation by trading memory for time. When a pure function with identical arguments is invoked repeatedly (such as recursive Fibonacci, factorial, or heavy matrix multiplications), recalculating is wasteful. A memoized higher-order function wraps the original function with a cache object in its closure. Before execution, it inspects the cache for the argument key: if present, it returns the stored result in O(1) time; if not, it computes, stores the result in the cache, and returns it. This is the foundation behind React's `useMemo` and `React.memo`.",
      "deepDive": [
        "**Requirement**: The target function MUST be pure (same input always produces same output with no side effects).",
        "**Mechanism**: Relies on JavaScript closures to maintain the cache dictionary.",
        "**React connection**: `useMemo()` memoizes computed values; `useCallback()` memoizes function references."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Generic Memoization Helper Function",
        "code": "function memoize(fn) {\n  const cache = {}; // Preserved in closure\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) {\n      console.log('Returning from cache for:', key);\n      return cache[key];\n    }\n    console.log('Calculating expensive result for:', key);\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nconst expensiveSquare = memoize((n) => n * n);\nconsole.log(expensiveSquare(5)); // Calculating... 25\nconsole.log(expensiveSquare(5)); // Returning from cache... 25"
      },
      "commonMistakes": [
        "Memoizing impure functions that rely on external state, dates, or random numbers.",
        "Unbounded cache growth in long-running apps (mitigate using LRU caches)."
      ],
      "proTips": [
        "Connect it to React: 'React's `useMemo` is literally memoization scoped to component renders!'"
      ]
    },
    "bangla": {
      "quickAnswer": "Memoization হলো এমন একটি পারফরম্যান্স অপটিমাইজেশন টেকনিক যেখানে কোনো ব্যয়বহুল পিওর ফাংশনের আর্গুমেন্টের ইনপুট অনুযায়ী ফলাফল ক্যাশে সেভ করে রাখা হয়, যাতে একই ইনপুটের জন্য বারবার হিসাব না করে ক্যাশ থেকে দ্রুত রিটার্ন করা যায়।",
      "interviewSpeech": "মেমোইজেশন হলো সময় বাঁচানোর জন্য মেমরি ব্যবহারের টেকনিক। যখন কোনো ভারী হিসাব-নিকাশ বা রিকার্সিভ ফাংশন (যেমন ফিবোনাচ্চি) একই ইনপুট দিয়ে বারবার কল করা হয়, তখন প্রতিবার নতুন করে ক্যালকুলেট করা সময়ের অপচয়। মেমোইজেশন ক্লোজার (Closure) ব্যবহার করে একটি ক্যাশ অবজেক্ট রাখে। কোনো ইনপুট আসলে সে আগে ক্যাশ চেক করে—যদি ক্যাশে থাকে তবে সাথে সাথে রিটার্ন করে, আর না থাকলে হিসাব করে ক্যাশে জমিয়ে রেখে আউটপুট দেয়। React-এর `useMemo` এবং `React.memo` এই মেমোইজেশন ধারণার উপর ভিত্তি করেই তৈরি।",
      "deepDive": [
        "ফাংশনটিকে অবশ্যই Pure হতে হবে (একই ইনপুটে সবসময় একই আউটপুট দিতে হবে)।",
        "ক্লোজারের মাধ্যমে ক্যাশ মেমরিতে সংরক্ষিত থাকে।",
        "React-এর `useMemo` এবং `useCallback` মেমোইজেশনের সবচেয়ে বড় প্র্যাক্টিক্যাল উদাহরণ।"
      ],
      "commonMistakes": [
        "ইমপিওর ফাংশনে (যেমন বর্তমান সময় বা র‍্যান্ডম নাম্বার যুক্ত লজিক) মেমোইজেশন ব্যবহার করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'React-এর `useMemo` হুকের মূল ভিত্তিই হলো মেমোইজেশন।'"
      ]
    }
  },
  {
    "id": "ms-q31-what-is-react",
    "questionNumber": 31,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is React and what problem does it solve?",
    "banglaQuestion": "React কী এবং এটি কোন সমস্যার সমাধান করে?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "Architecture",
      "Virtual DOM",
      "Declarative UI",
      "Component-Based"
    ],
    "english": {
      "quickAnswer": "React is an open-source, component-based, declarative JavaScript front-end library for building fast and interactive user interfaces using a Virtual DOM.",
      "interviewSpeech": "React was created by Meta to solve the problem of building complex, dynamic user interfaces at scale. In traditional vanilla JavaScript, developers had to manually manipulate the DOM (`document.getElementById`, `appendChild`), which is imperative, error-prone, hard to keep synchronized with application state, and computationally expensive. React solves this by introducing a declarative, component-driven model: you define what the UI should look like for any given state (`UI = f(state)`), and React's reconciliation engine with the Virtual DOM takes care of efficiently mutating the real browser DOM.",
      "deepDive": [
        "**Declarative vs Imperative**: Imperative says *how* to change the DOM step-by-step; Declarative says *what* the UI should look like given current state.",
        "**Component Architecture**: UI is split into reusable, self-contained bricks.",
        "**Unidirectional Data Flow**: Data flows strictly downwards via props, making debugging predictable."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Declarative React UI vs Imperative DOM",
        "code": "// Imperative Vanilla JS:\n// const btn = document.createElement('button');\n// btn.innerText = count;\n// btn.onclick = () => { count++; btn.innerText = count; };\n\n// Declarative React: UI = f(state)\nfunction Counter() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}"
      },
      "commonMistakes": [
        "Calling React a full-blown framework like Angular (React is primarily a UI library focused on the view layer).",
        "Saying React is fast just because of the Virtual DOM (it's fast because it minimizes expensive DOM repaints)."
      ],
      "proTips": [
        "Mention the core formula: '`UI = f(state)` — React abstracts away manual DOM mutations so engineers can focus on business logic.'"
      ]
    },
    "bangla": {
      "quickAnswer": "React হলো ইউজার ইন্টারফেস (UI) তৈরির জন্য একটি ডিক্লেয়ারেটিভ, কম্পোনেন্ট-ভিত্তিক জাভাস্ক্রিপ্ট লাইব্রেরি, যা ভার্চুয়াল ডম (Virtual DOM) ব্যবহার করে দ্রুত ও দক্ষভাবে ওয়েবসাইট রেন্ডার করে।",
      "interviewSpeech": "অতীতে ভ্যানিলা জাভাস্ক্রিপ্টে ম্যানুয়ালি ডম ম্যানিপুলেট করা (`document.getElementById`) খুব কষ্টসাধ্য ছিল এবং ডেটা পরিবর্তনের সাথে UI সিঙ্ক রাখা কঠিন হয়ে পড়ত। রিয়্যাক্ট এই সমস্যার চমৎকার সমাধান নিয়ে আসে। রিয়্যাক্ট হলো ডিক্লেয়ারেটিভ—আমরা শুধু বলে দিই স্টেট অনুযায়ী স্ক্রিন কেমন দেখাবে (`UI = f(state)`), আর পেছনের Virtual DOM নিজে থেকেই হিসাব করে ব্রাউজারের আসল DOM খুব দ্রুত ও অল্প খরচে আপডেট করে। এছাড়া পুরো ইউআইকে ছোট ছোট রিইউজেবল কম্পোনেন্টে ভাগ করা যায়।",
      "deepDive": [
        "ডিক্লেয়ারেটিভ পদ্ধতি: কোড অনেক পরিষ্কার ও প্রেডিক্টেবল হয়।",
        "কম্পোনেন্ট ভিত্তিক আর্কিটেকচার: একই বাটন বা কার্ড বারবার রিইউজ করা যায়।",
        "একমুখী ডেটা ফ্লো (Unidirectional flow): ডেটা উপর থেকে নিচে যায়, ফলে বাগ ধরা সহজ।"
      ],
      "commonMistakes": [
        "রিয়্যাক্টকে অ্যাঙ্গুলারের মতো ফুল ফ্রেমওয়ার্ক বলা (রিয়্যাক্ট মূলত একটি ভিউ লাইব্রেরি)।"
      ],
      "proTips": [
        "সহজ ভাষায় বলুন: 'রিয়্যাক্ট ম্যানুয়াল DOM খোঁজাখুঁজি বন্ধ করে স্টেট পরিবর্তনের সাথে সাথে স্বয়ংক্রিয়ভাবে স্ক্রিন আপডেট করে দেয়।'"
      ]
    }
  },
  {
    "id": "ms-q32-what-is-jsx",
    "questionNumber": 32,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is JSX and why is it used in React?",
    "banglaQuestion": "JSX কী এবং এটি কেন React-এ ব্যবহার করা হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "JSX",
      "Transpilation",
      "Babel",
      "React.createElement"
    ],
    "english": {
      "quickAnswer": "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files, transpiling under the hood to `React.createElement()` calls.",
      "interviewSpeech": "JSX stands for JavaScript XML. It provides a visual, intuitive syntax for structuring component UI right alongside component logic. Rather than separating markup and logic artificially into separate files, React couples them into loosely coupled units called components. Browsers cannot read JSX directly; compilers like Babel or SWC compile JSX down into standard `React.createElement()` or `_jsx()` calls that evaluate to plain JavaScript objects representing Virtual DOM nodes. JSX also prevents XSS (Cross-Site Scripting) attacks by default because React escapes all values before rendering.",
      "deepDive": [
        "**Transpilation**: `<h1 className='title'>Hi</h1>` transforms into `React.createElement('h1', { className: 'title' }, 'Hi')`.",
        "**Security**: Embedded expressions inside `{}` are automatically escaped to guard against XSS.",
        "**Expressions**: Any valid JS expression can be embedded inside `{}`."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "JSX Syntax vs Transpiled JavaScript",
        "code": "// JSX written by developer:\nconst element = <div className=\"card\"><h2>Hello {user.name}</h2></div>;\n\n// Transpiled by Babel/compiler under the hood:\n// const element = React.createElement(\n//   'div',\n//   { className: 'card' },\n//   React.createElement('h2', null, 'Hello ', user.name)\n// );"
      },
      "commonMistakes": [
        "Writing `class` instead of `className` or `for` instead of `htmlFor` (these are reserved keywords in JavaScript).",
        "Trying to write `if/else` statements directly inside `{}` expressions instead of ternary operators (`? :`)."
      ],
      "proTips": [
        "Clarify that JSX is NOT HTML; it is syntactic sugar for JavaScript function calls creating Virtual DOM tree objects."
      ]
    },
    "bangla": {
      "quickAnswer": "JSX (JavaScript XML) হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন যা আমাদের জাভাস্ক্রিপ্ট ফাইলের ভেতরেই সরাসরি HTML-এর মতো কোড লেখার সুযোগ করে দেয়।",
      "interviewSpeech": "JSX রিয়্যাক্ট ডেভেলপমেন্টকে অবিশ্বাস্যরকম সহজ করে তোলে। আগে এইচটিএমএল এবং স্ক্রিপ্ট আলাদা ফাইলে থাকত, কিন্তু রিয়্যাক্টে কম্পোনেন্টের লজিক এবং মার্কআপ একসঙ্গেই থাকে। ব্রাউজার সরাসরি JSX বুঝতে পারে না, তাই Babel বা আধুনিক কম্পাইলার JSX-কে ব্যাকগ্রাউন্ডে পিওর `React.createElement()` ফাংশন কলে রূপান্তর করে। এর ফলে কোড পড়া অনেক সহজ হয় এবং স্বয়ংক্রিয়ভাবে XSS অ্যাটাক প্রতিরোধ করার জন্য ইনপুট স্যানিটাইজ হয়ে যায়।",
      "deepDive": [
        "JSX কিন্তু আসল HTML নয়, এটি জাভাস্ক্রিপ্টের রূপান্তরযোগ্য সিনট্যাক্স।",
        "জাভাস্ক্রিপ্টের রিজার্ভ কিওয়ার্ডের কারণে `class`-এর বদলে `className` এবং `for`-এর বদলে `htmlFor` লিখতে হয়।",
        "`{}` বন্ধনীর ভেতর যেকোনো বৈধ জাভাস্ক্রিপ্ট এক্সপ্রেশন চালানো যায়।"
      ],
      "commonMistakes": [
        "`{}` এর ভেতরে সরাসরি `if-else` স্টেটমেন্ট লেখা। সেখানে টার্নারি অপারেটর (`condition ? A : B`) ব্যবহার করতে হয়।"
      ],
      "proTips": [
        "বলুন: 'JSX দিনশেষে ব্রাউজারে প্লেইন জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তরিত হয়।'"
      ]
    }
  },
  {
    "id": "ms-q33-functional-vs-class-components",
    "questionNumber": 33,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the difference between functional and class components?",
    "banglaQuestion": "Functional এবং Class কম্পোনেন্টের মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "Functional Components",
      "Class Components",
      "Hooks",
      "Lifecycle"
    ],
    "english": {
      "quickAnswer": "Functional components are plain JavaScript functions utilizing React Hooks for state and lifecycles, whereas Class components extend `React.Component`, use `this` and lifecycle methods (`componentDidMount`), and require verbose boilerplate.",
      "interviewSpeech": "Historically, class components were the only way to manage component state and lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`). They relied heavily on ES6 classes, verbose boilerplate, and tricky `this` binding. In React 16.8, React introduced Hooks (`useState`, `useEffect`), allowing functional components to handle state, side effects, and context with much cleaner, composable code. Today, functional components with hooks are the de facto industry standard, offering superior readability, smaller bundle sizes, easier testing, and seamless compatibility with modern React features like Suspense and Server Components.",
      "deepDive": [
        "**Boilerplate & Readability**: Functional components are simpler and contain far less boilerplate.",
        "**`this` Context**: Functional components avoid `this` binding pitfalls completely.",
        "**Lifecycle Mapping**: `useEffect` cleanly unifies `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` into a single declarative API.",
        "**Modern Legacy**: Class components are maintained for backward compatibility, but no new features or hooks work inside them."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Class Component vs Modern Functional Component",
        "code": "// Legacy Class Component:\nclass CounterClass extends React.Component {\n  state = { count: 0 };\n  componentDidMount() { document.title = `Count: ${this.state.count}`; }\n  render() {\n    return <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n      {this.state.count}\n    </button>;\n  }\n}\n\n// Modern Functional Component with Hooks:\nfunction CounterFunctional() {\n  const [count, setCount] = React.useState(0);\n  React.useEffect(() => { document.title = `Count: ${count}`; }, [count]);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}"
      },
      "commonMistakes": [
        "Saying class components are completely deprecated (they are legacy, but still supported for backward compatibility).",
        "Attempting to call React Hooks inside class components (Hooks only work in functional components)."
      ],
      "proTips": [
        "Emphasize that functional components capture render values automatically via JavaScript closures, preventing stale prop/state bugs that plagued class components."
      ]
    },
    "bangla": {
      "quickAnswer": "Functional কম্পোনেন্ট হলো সাধারণ জাভাস্ক্রিপ্ট ফাংশন যা Hooks ব্যবহার করে স্টেট ও লাইফসাইকেল পরিচালনা করে; আর Class কম্পোনেন্ট হলো পুরোনো অবজেক্ট-ভিত্তিক ক্লাস যাতে `this` এবং বিভিন্ন লাইফসাইকেল মেথড লিখতে হতো।",
      "interviewSpeech": "রিঅ্যাক্ট ১৬.৮-এর আগে স্টেট ব্যবহারের জন্য ক্লাস কম্পোনেন্ট ব্যবহার বাধ্যতামূলক ছিল। কিন্তু ক্লাসে অনেক বেশি বয়লারপ্লেট কোড লিখতে হতো এবং `this` বাইন্ডিংয়ের নানা জটিলতা তৈরি হতো। হুকস আসার পর ফাংশনাল কম্পোনেন্টেই `useState`, `useEffect` দিয়ে সবকিছু অনেক সহজে এবং অল্প কোডে করা যায়। বর্তমানে ফাংশনাল কম্পোনেন্টই আধুনিক রিয়্যাক্টের স্ট্যান্ডার্ড। ক্লাস কম্পোনেন্ট এখনও ব্যাকওয়ার্ড কম্প্যাটিবিলিটির জন্য আছে, তবে নতুন প্রজেক্টে কেবল ফাংশনাল কম্পোনেন্টই লেখা হয়।",
      "deepDive": [
        "ফাংশনাল কম্পোনেন্টে কোনো `this`-এর ঝামেলা নেই।",
        "একটি মাত্র `useEffect` দিয়ে `componentDidMount`, `componentDidUpdate`, এবং `componentWillUnmount` এর কাজ সারা যায়।",
        "কোড সাইজ ছোট হয় এবং রিইউজেবল কাস্টম হুক বানানো যায়।"
      ],
      "commonMistakes": [
        "ক্লাস কম্পোনেন্টের ভেতরে হুক ব্যবহার করার চেষ্টা করা (হুক শুধু ফাংশনাল কম্পোনেন্টেই কাজ করে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'ফাংশনাল কম্পোনেন্ট ক্লোজারের মাধ্যমে কাজ করায় এতে কোড অনেক বেশি প্রেডিক্টেবল থাকে।'"
      ]
    }
  },
  {
    "id": "ms-q34-virtual-dom-and-reconciliation",
    "questionNumber": 34,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the virtual DOM and how does React use it?",
    "banglaQuestion": "Virtual DOM কী এবং React কীভাবে এটি ব্যবহার করে?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Diffing Algorithm",
      "Performance"
    ],
    "english": {
      "quickAnswer": "The Virtual DOM (VDOM) is an in-memory lightweight JavaScript object representation of the real DOM. React updates the VDOM first, diffs it with the previous snapshot, and batches only the precise calculated changes to the real DOM.",
      "interviewSpeech": "Direct browser DOM manipulation is extremely expensive because altering the real DOM triggers browser layout recalculations, reflows, and repainting. React minimizes this by maintaining a Virtual DOM—a lightweight tree of plain JavaScript objects mimicking the actual DOM. When state changes, React creates a new Virtual DOM tree, runs its diffing algorithm (Reconciliation) to compare the new VDOM against the previous snapshot, calculates the minimal set of changes (patch), and batches those surgical updates directly to the real browser DOM in a single flush.",
      "deepDive": [
        "**Why Real DOM is slow**: Real DOM has hundreds of properties per node; layout recalculation and repaint cycles are CPU/GPU heavy.",
        "**Diffing Algorithm (O(n))**: React assumes two elements of different types produce different trees, and uses unique `key` props to match list items across renders.",
        "**React Fiber**: The modern reconciliation engine that enables incremental rendering and interruptible work for 60fps responsiveness."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Virtual DOM Node Representation as Plain JS Object",
        "code": "// What JSX <h1 className=\"title\">Hello World</h1> looks like in Virtual DOM:\nconst vdomNode = {\n  type: 'h1',\n  props: {\n    className: 'title',\n    children: 'Hello World'\n  },\n  key: null,\n  ref: null\n};\n// React compares this plain JS object before touching document.body!"
      },
      "commonMistakes": [
        "Claiming the Virtual DOM is faster than direct optimized vanilla JS (vanilla JS can be faster, but VDOM provides declarative abstraction and automatic optimization without manual DOM manipulation).",
        "Thinking React updates the entire DOM on every render."
      ],
      "proTips": [
        "Mention 'Batching and Surgical Updates': React avoids layout thrashing by calculating minimal diffs and applying them together."
      ]
    },
    "bangla": {
      "quickAnswer": "Virtual DOM হলো রিয়েল DOM-এর একটি লাইটওয়েট জাভাস্ক্রিপ্ট অবজেক্ট রিপ্রেজেন্টেশন। স্টেট বদলালে রিয়্যাক্ট প্রথমে ভার্চুয়াল ডমে পরিবর্তন হিসাব করে (Diffing) এবং শুধু প্রয়োজনীয় অংশটুকু আসল ডমে আপডেট করে।",
      "interviewSpeech": "ব্রাউজারের রিয়েল DOM সরাসরি পরিবর্তন করা খুব ভারী এবং ধীরগতির কাজ, কারণ এতে পুরো পেজের লেআউট ও রি-পেইন্টিং ক্যালকুলেট করতে হয়। রিয়্যাক্ট মেমরিতে একটি ভার্চুয়াল ডম ট্রি রাখে যা সাধারণ জাভাস্ক্রিপ্ট অবজেক্ট। যখনই কোনো স্টেট পরিবর্তিত হয়, রিয়্যাক্ট নতুন একটি ভার্চুয়াল ডম তৈরি করে আগের স্ন্যাপশটের সাথে তুলনা করে—যাকে বলে Reconciliation বা Diffing। এরপর যেটুকু পরিবর্তন হয়েছে ঠিক সেটুকুই অত্যন্ত নিখুঁতভাবে আসল ব্রাউজার ডমে রিফ্লেক্ট করে। ফলে পুরো পেজ রিলোড বা অপ্রয়োজনীয় ডম আপডেট হয় না।",
      "deepDive": [
        "রিয়েল DOM-এ পরিবর্তন করা ব্যয়বহুল (Layout Reflow ও Repaint)।",
        "Diffing অ্যালগরিদম দুটি ভার্চুয়াল ডমের পার্থক্য দ্রুত হিসাব করে।",
        "React Fiber আর্কিটেকচার কাজগুলোকে ছোট ছোট খণ্ডে ভাগ করে মসৃণ পারফরম্যান্স নিশ্চিত করে।"
      ],
      "commonMistakes": [
        "ভাবা যে রিয়্যাক্ট প্রতিবার পুরো আসল DOM মুছে আবার নতুন করে বানায়।"
      ],
      "proTips": [
        "সংক্ষেপে বলুন: 'ভার্চুয়াল ডম হলো মেমরির একটি ব্লুপ্রিন্ট, যার কারণে অপ্রয়োজনীয় DOM রিফ্লো এড়ানো যায়।'"
      ]
    }
  },
  {
    "id": "ms-q35-usestate-hook",
    "questionNumber": 35,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "Explain the useState hook with an example.",
    "banglaQuestion": "useState হুক কী? উদাহরণসহ এর কার্যকারিতা ব্যাখ্যা করুন।",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useState",
      "State",
      "Functional Updates"
    ],
    "english": {
      "quickAnswer": "`useState` is a fundamental React Hook that adds local reactive state to functional components, returning an array with the current state value and a setter function to trigger re-renders.",
      "interviewSpeech": "`useState` allows functional components to track internal state across renders. It takes an initial state (or a lazy initializer function) and returns a two-element tuple: `[currentState, setState]`. Calling `setState` enqueues a re-render with the new value. In React 18+, state updates are automatically batched for performance. If the new state depends on the previous state, you should always pass a functional updater (`setCount(prev => prev + 1)`) to avoid stale state bugs caused by asynchronous closure captures.",
      "deepDive": [
        "**Array Destructuring**: `const [val, setVal] = useState(initial)`.",
        "**Lazy Initializer**: `useState(() => expensiveCalculation())` runs the initializer only on initial mount, not on subsequent re-renders.",
        "**Functional Update**: `setCount(prev => prev + 1)` guarantees accurate state even across batched asynchronous calls."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "useState with Lazy Initialization & Functional Updaters",
        "code": "function Counter() {\n  // Lazy initialization runs only once on initial mount\n  const [count, setCount] = React.useState(() => {\n    return Number(localStorage.getItem('saved_count') || 0);\n  });\n\n  const handleIncrementTriple = () => {\n    // Correct: Functional updates avoid stale closure bugs\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={handleIncrementTriple}>+3</button>\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Mutating state directly (e.g., `state.count = 5` instead of `setState(5)`), which breaks React's change detection.",
        "Calling `setCount(count + 1)` multiple times in the same handler and expecting it to increment multiple times (use functional updater `prev => prev + 1`)."
      ],
      "proTips": [
        "Highlight that `useState` uses `Object.is` for comparison; if you pass the same object reference, React bails out of re-rendering."
      ]
    },
    "bangla": {
      "quickAnswer": "`useState` হলো রিঅ্যাক্টের একটি মৌলিক হুক যা ফাংশনাল কম্পোনেন্টে স্টেট সংরক্ষণ ও আপডেট করার সুবিধা দেয় এবং আপডেট হলে স্ক্রিনকে স্বয়ংক্রিয়ভাবে রি-রেন্ডার করে।",
      "interviewSpeech": "`useState` হুক ইনিশিয়াল ভ্যালু গ্রহণ করে একটি অ্যারে রিটার্ন করে যার প্রথম উপাদান বর্তমান ভ্যালু এবং দ্বিতীয়টি ভ্যালু পরিবর্তন করার সেটার ফাংশন। সেটার ফাংশন কল করলেই রিয়্যাক্ট কম্পোনেন্টকে রি-রেন্ডার করে স্ক্রিন আপডেট করে। পূর্ববর্তী স্টেটের উপর ভিত্তি করে আপডেট করতে হলে সবসময় ফাংশনাল আপডেটার (`prev => prev + 1`) ব্যবহার করা উচিত যাতে অ্যাসিনক্রোনাস ব্যাচিংয়ের কারণে ভুল মান না আসে। কোনো ভারী ডেটা ইনিশিয়ালাইজ করতে Lazy Initializer ফাংশন ব্যবহার করা যায় যা শুধু প্রথমবার রেন্ডার হয়।",
      "deepDive": [
        "স্টেট কখনো সরাসরি মিউটেট (`state = 10`) করা যাবে না, সেটার ফাংশন কল করতে হবে।",
        "ফাংশনাল আপডেটার (`setCount(prev => prev + 1)`) স্টেটের নির্ভুল মান নিশ্চিত করে।"
      ],
      "commonMistakes": [
        "স্টেট পরিবর্তন করার পর সাথে সাথে পরের লাইনে নতুন ভ্যালু প্রিন্ট করার আশা করা (স্টেট আপডেট অ্যাসিনক্রোনাস)।"
      ],
      "proTips": [
        "স্টেটে অবজেক্ট থাকলে স্প্রেড অপারেটর দিয়ে কপি করে আপডেট করুন: `setUser({ ...prev, name: 'New' })`।"
      ]
    }
  },
  {
    "id": "ms-q36-useeffect-hook",
    "questionNumber": 36,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the useEffect hook and what are its use cases?",
    "banglaQuestion": "useEffect হুক কী এবং এর প্রধান ব্যবহারের ক্ষেত্রগুলো কী কী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useEffect",
      "Side Effects",
      "Lifecycle",
      "Cleanup"
    ],
    "english": {
      "quickAnswer": "`useEffect` is a React Hook that lets functional components perform side effects (data fetching, DOM subscriptions, timers) synchronized with component lifecycle and state changes.",
      "interviewSpeech": "`useEffect` serves as the primary gateway for side effects—operations that interact with the world outside the pure render cycle. It takes an effect callback and an optional dependency array. The effect runs after the browser paints. Based on the dependency array: 1) **No array**: runs after *every* render. 2) **Empty array `[]`**: runs *only once* after the initial mount. 3) **Dependency array `[prop, state]`**: runs on mount and whenever any dependency changes. If the effect returns a cleanup function, React executes it before re-running the effect and when the component unmounts.",
      "deepDive": [
        "**Cleanup Function**: Essential for canceling network requests (`AbortController`), clearing `setInterval`, or removing event listeners.",
        "**Timing**: Runs asynchronously *after* paint (unlike `useLayoutEffect` which runs synchronously before paint).",
        "**Stale Closures**: Forgetting dependencies in the array causes effects to capture stale variables from old renders."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "useEffect with Cleanup and AbortController",
        "code": "function UserProfile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  React.useEffect(() => {\n    const controller = new AbortController();\n\n    async function loadUser() {\n      try {\n        const res = await fetch(`/api/users/${userId}`, { signal: controller.signal });\n        const data = await res.json();\n        setUser(data);\n      } catch (err) {\n        if (err.name !== 'AbortError') console.error(err);\n      }\n    }\n\n    loadUser();\n\n    // Cleanup on unmount or when userId changes!\n    return () => controller.abort();\n  }, [userId]); // Only re-run when userId changes\n\n  return <div>{user ? user.name : 'Loading...'}</div>;\n}"
      },
      "commonMistakes": [
        "Omitting variables from the dependency array, causing stale closure bugs.",
        "Using `useEffect` for pure data transformations that could simply be calculated during render."
      ],
      "proTips": [
        "Rule from React Docs: If you can calculate something during render, you don't need an effect. Use `useEffect` strictly for syncing with external systems."
      ]
    },
    "bangla": {
      "quickAnswer": "`useEffect` হলো এমন একটি হুক যা দিয়ে ফাংশনাল কম্পোনেন্টে সাইড-ইফেক্ট (Side Effects) যেমন ডেটা ফেচিং, ইভেন্ট সাবস্ক্রিপশন, টাইমার সেট করা ইত্যাদি নিয়ন্ত্রণ করা হয়।",
      "interviewSpeech": "রিঅ্যাক্টের পিওর রেন্ডারিং সিস্টেমের বাইরে বাইরের জগতের সাথে যোগাযোগ করার জন্য `useEffect` ব্যবহৃত হয়। এটি দুটি জিনিস নেয়: একটি কলব্যাক ফাংশন এবং একটি ডিপেনডেন্সি অ্যারে। ১) ডিপেনডেন্সি না দিলে প্রতি রেন্ডারে চলে। ২) খালি অ্যারে `[]` দিলে শুধু মাউন্ট হওয়ার পর একবার চলে। ৩) ভেরিয়েবল `[id]` দিলে সেই ভেরিয়েবল পরিবর্তনের সাথে সাথে চলে। আর যদি ফাংশন থেকে কোনো ক্লিনআপ ফাংশন রিটার্ন করা হয়, তবে কম্পোনেন্ট আনমাউন্ট হওয়ার সময় বা পরবর্তী রান হওয়ার আগে তা এক্সিকিউট হয়ে মেমরি লিক ঠেকায়।",
      "deepDive": [
        "মাউন্ট: কম্পোনেন্ট স্ক্রিনে আসার পর কোড এক্সিকিউট হয়।",
        "ক্লিনআপ: `return () => { clearInterval(timer); }` টাইমার বা নেটওয়ার্ক রিকোয়েস্ট ক্যানসেল করতে অপরিহার্য।"
      ],
      "commonMistakes": [
        "ক্লিনআপ ফাংশন না দিয়ে ইভেন্ট লিসেনার চালু রেখে দেওয়া, যার ফলে মেমরি লিক হয়।"
      ],
      "proTips": [
        "রিঅ্যাক্টের অফিসিয়াল পরামর্শ: সাধারণ ডেটা ক্যালকুলেশনের জন্য `useEffect` দরকার নেই, শুধু এক্সটারনাল সিস্টেমের সাথে সিঙ্ক করতেই এটি ব্যবহার করুন।"
      ]
    }
  },
  {
    "id": "ms-q37-controlled-vs-uncontrolled-components",
    "questionNumber": 37,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the difference between controlled and uncontrolled components?",
    "banglaQuestion": "Controlled এবং Uncontrolled কম্পোনেন্টের মধ্যে পার্থক্য কী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Forms",
      "Controlled Components",
      "Uncontrolled Components",
      "useRef"
    ],
    "english": {
      "quickAnswer": "A controlled component has its form data handled directly by React component state via `value` and `onChange`, whereas an uncontrolled component lets the browser DOM handle form data internally, accessed on-demand using a `ref`.",
      "interviewSpeech": "In a Controlled Component, the form input element's value is bound directly to React state (`value={text}`). Every keystroke triggers an `onChange` handler that updates the state, making React the 'single source of truth'. This makes instant validation, conditional submit buttons, and dynamic formatting effortless. In an Uncontrolled Component, the DOM maintains the input's state natively (`defaultValue='...'`). You pull the value imperatively when needed (like on form submit) using a `ref` (`inputRef.current.value`). Controlled is the recommended React pattern, but uncontrolled can be useful for performance-critical inputs or simple forms using `react-hook-form`.",
      "deepDive": [
        "**Controlled**: React State = Single source of truth. Props: `value` + `onChange`.",
        "**Uncontrolled**: DOM = Source of truth. Props: `defaultValue` + `ref`.",
        "**Libraries**: `Formik` favors controlled patterns; `React Hook Form` uses uncontrolled inputs under the hood for maximum render performance."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Controlled vs Uncontrolled Input Comparison",
        "code": "// Controlled: State drives the input\nfunction ControlledInput() {\n  const [val, setVal] = React.useState('');\n  return <input value={val} onChange={(e) => setVal(e.target.value)} />;\n}\n\n// Uncontrolled: DOM holds the value, accessed via ref\nfunction UncontrolledInput() {\n  const inputRef = React.useRef(null);\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log('Submitted value:', inputRef.current.value);\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <input defaultValue=\"Initial\" ref={inputRef} />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}"
      },
      "commonMistakes": [
        "Switching an input from uncontrolled to controlled (or vice versa) by passing `undefined` as the initial `value` prop.",
        "Using `value` without an `onChange` handler (results in a read-only input)."
      ],
      "proTips": [
        "Explain that `react-hook-form` leverages uncontrolled inputs with refs to achieve near-zero re-render form validation."
      ]
    },
    "bangla": {
      "quickAnswer": "Controlled কম্পোনেন্টের ইনপুট ভ্যালু সম্পূর্ণ রিয়্যাক্টের স্টেট (`value` ও `onChange`) দ্বারা পরিচালিত হয়; আর Uncontrolled কম্পোনেন্টে ব্রাউজারের নিজস্ব DOM ডেটা ধরে রাখে এবং প্রয়োজন হলে `useRef` দিয়ে তা সংগ্রহ করা হয়।",
      "interviewSpeech": "Controlled কম্পোনেন্টে ইনপুটের প্রতি ক্লিকে `onChange` চলে এবং রিয়্যাক্ট স্টেট আপডেট হয়। এতে রিয়্যাক্টই তথ্যের একমাত্র উৎস (Single Source of Truth) হওয়ায় লাইভ ভ্যালিডেশন বা ইনপুট ডিসেবল করা খুব সহজ। আর Uncontrolled কম্পোনেন্টে সাধারণ HTML ফর্মের মতো ব্রাউজার নিজেই মান সংরক্ষণ করে। আমরা সাবমিট করার মুহূর্তে `useRef`-এর মাধ্যমে মানটি সংগ্রহ করি। রিয়্যাক্টে সাধারণত Controlled প্যাটার্ন সুপারিশ করা হয়, তবে `react-hook-form` লাইব্রেরি পারফরম্যান্স বাড়াতে আনকন্ট্রোল্ড প্যাটার্ন চমৎকারভাবে ব্যবহার করে।",
      "deepDive": [
        "Controlled: `value={state}` + `onChange={(e) => setState(...)}`।",
        "Uncontrolled: `defaultValue='...'` + `ref={myRef}`।"
      ],
      "commonMistakes": [
        "ইনপুটে `value` পাস করা কিন্তু কোনো `onChange` না দেওয়া (ইনপুট লক হয়ে রিড-অনলি হয়ে যায়)।"
      ],
      "proTips": [
        "লাইভ ভ্যালিডেশন চাইলে Controlled, আর বিশাল ফর্মের রেন্ডার বাঁচাতে Uncontrolled সেরা।"
      ]
    }
  },
  {
    "id": "ms-q38-props-in-react",
    "questionNumber": 38,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What are props in React and how are they passed?",
    "banglaQuestion": "React-এ Props কী এবং এগুলো কীভাবে এক কম্পোনেন্ট থেকে অন্যটিতে পাঠানো হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "Props",
      "Immutability",
      "Component Communication",
      "JSX"
    ],
    "english": {
      "quickAnswer": "Props (short for properties) are read-only, immutable data passed from a parent component down to a child component to customize its rendering and behavior.",
      "interviewSpeech": "In React, data flows strictly unidirectionally from parent to child. Props are arguments passed to components just like attributes in HTML or arguments to a function. They allow components to be dynamic, reusable, and pure. A fundamental rule of React is that props are **strictly read-only (immutable)**: a child component must never attempt to mutate its incoming props. If a child needs to communicate back to the parent, the parent passes a callback function as a prop (`onSelect={handleSelect}`).",
      "deepDive": [
        "**Read-Only Guarantee**: `props.title = 'New'` throws an error or breaks React's purity.",
        "**Children Prop**: `props.children` allows component composition (nesting JSX between tags).",
        "**Default Props & Types**: Handled via ES6 default parameters (`{ title = 'Default' }`) or TypeScript interfaces."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Passing Props and Handling Child-to-Parent Callbacks",
        "code": "// Child component receiving props and callback\nfunction UserCard({ name, role, onPromote }) {\n  return (\n    <div className=\"card\">\n      <h3>{name}</h3>\n      <p>Role: {role}</p>\n      <button onClick={() => onPromote(name)}>Promote User</button>\n    </div>\n  );\n}\n\n// Parent passing props downward\nfunction App() {\n  const handlePromote = (userName) => alert(`Promoted ${userName}`);\n  return <UserCard name=\"Salma\" role=\"Developer\" onPromote={handlePromote} />;\n}"
      },
      "commonMistakes": [
        "Mutating props inside a child component.",
        "Forgetting to destructure props or confusing props with internal component state."
      ],
      "proTips": [
        "Describe props with the functional programming concept: 'Props make React components behave like pure functions with respect to their inputs.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Props (Properties) হলো এমন ডেটা যা প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো হয়। এগুলো সম্পূর্ণ রিড-অনলি (ইমিউটেবল) এবং এর মাধ্যমে কম্পোনেন্টকে ডায়নামিক করা যায়।",
      "interviewSpeech": "রিঅ্যাক্টে ডেটা সবসময় উপর থেকে নিচে একমুখী (Unidirectional)ভাবে প্রবাহিত হয়। আমরা যেমন এইচটিএমএল-এ অ্যাট্রিবিউট দিই বা ফাংশনে প্যারামিটার পাস করি, ঠিক তেমনই প্যারেন্ট থেকে চাইল্ডে প্রপস পাঠানো হয়। প্রপসের সবচেয়ে বড় নিয়ম হলো চাইল্ড কম্পোনেন্ট কখনো প্রপস পরিবর্তন (mutate) করতে পারে না। চাইল্ড থেকে প্যারেন্টে কিছু জানাতে চাইলে প্যারেন্ট একটি কলব্যাক ফাংশন প্রপস আকারে পাঠায় যা চাইল্ডের কোনো ইভেন্টে কল হয়।",
      "deepDive": [
        "Props অপরিবর্তনযোগ্য (Read-only/Immutable)।",
        "`children` প্রপস দিয়ে কম্পোনেন্টের ভেতরে অন্য কম্পোনেন্ট নেস্ট করা যায়।"
      ],
      "commonMistakes": [
        "চাইল্ডের ভেতর `props.name = 'নতুন নাম'` লিখে প্রপস বদলানোর চেষ্টা করা।"
      ],
      "proTips": [
        "ফাংশনের আর্গুমেন্টেই সরাসরি Destructuring (`({ name, role })`) করে প্রপস রিসিভ করা আধুনিক স্ট্যান্ডার্ড।"
      ]
    }
  },
  {
    "id": "ms-q39-prop-drilling-solutions",
    "questionNumber": 39,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is prop drilling and how can it be avoided?",
    "banglaQuestion": "Prop Drilling কী এবং এটি কীভাবে সমাধান করা যায়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Prop Drilling",
      "Context API",
      "Component Composition",
      "Redux",
      "State Management"
    ],
    "english": {
      "quickAnswer": "Prop drilling is the tedious process of passing props through multiple intermediary components that do not need the data themselves, purely to deliver it to a deeply nested child.",
      "interviewSpeech": "Prop drilling occurs in large component trees when deeply nested child components need data from a high-level ancestor. Intermediary components must accept and forward props they have no interest in, cluttering code and tightly coupling the tree. We can solve prop drilling using 3 primary strategies: 1) **Component Composition** (passing elements as `children` or slots), 2) **React Context API** (`useContext`) for application-wide or feature-level state like theme and auth, and 3) **Dedicated State Management** libraries like Redux Toolkit, Zustand, or Jotai for complex global application state.",
      "deepDive": [
        "**Problem**: High coupling, fragile refactoring, boilerplate code in middle components.",
        "**First Defense (Composition)**: `<Page user={user}><Sidebar><Nav /></Sidebar></Page>` where `<Nav>` is instantiated at the top level and passed down as children.",
        "**Context API**: Injects state directly into the subtree without touching intermediate nodes.",
        "**External Stores**: Zustand/Redux for frequent global updates."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Avoiding Prop Drilling with Component Composition",
        "code": "// Instead of drilling 'user' through Dashboard -> Sidebar -> UserBadge:\n// Invert control using composition (children slot pattern)!\nfunction Dashboard({ sidebar }) {\n  return <div className=\"layout\">{sidebar}<main>Content</main></div>;\n}\n\nfunction App() {\n  const [user] = React.useState({ name: 'Farhan' });\n  // Pass UserBadge directly without Sidebar having to know about 'user'!\n  return (\n    <Dashboard\n      sidebar={\n        <aside>\n          <UserBadge user={user} />\n        </aside>\n      }\n    />\n  );\n}"
      },
      "commonMistakes": [
        "Immediately jumping to Redux or Context API for every prop-drilling scenario before considering simple component composition.",
        "Putting high-frequency changing state into top-level Context (causes broad re-renders)."
      ],
      "proTips": [
        "Quote the React docs: 'Before reaching for Context, consider component composition. Passing children is often much simpler and faster!'"
      ]
    },
    "bangla": {
      "quickAnswer": "Prop Drilling হলো এমন এক অবস্থা যখন কোনো ডেটা কোনো গভীর চাইল্ড কম্পোনেন্টে পৌঁছে দেওয়ার জন্য মাঝের অপ্রয়োজনীয় কম্পোনেন্টগুলোর মধ্য দিয়ে জোর করে প্রপস পাস করতে হয়।",
      "interviewSpeech": "ধরা যাক আমাদের Root কম্পোনেন্টের কোনো ডেটা ১০ নম্বর লেভেলের চাইল্ডের দরকার। কিন্তু মাঝের ৮টি কম্পোনেন্টের ওই ডেটার কোনো দরকার নেই, তবুও প্রপসটি তাদের মধ্য দিয়ে পাস করাতে হচ্ছে—এটাই Prop Drilling। এর ফলে কোড জটিল হয়ে যায় এবং রিফ্যাক্টরিং কঠিন হয়। এটি সমাধান করার ৩টি চমৎকার উপায় আছে: ১) Component Composition (চিলড্রেন বা স্লট আকারে কম্পোনেন্ট পাস করা), ২) React Context API ব্যবহার করা (যার মাধ্যমে ডেটা সরাসরি কাঙ্ক্ষিত চাইল্ডে প্রোভাইড করা যায়), এবং ৩) Zustand বা Redux-এর মতো গ্লোবাল স্টেট ম্যানেজমেন্ট লাইব্রেরি ব্যবহার করা।",
      "deepDive": [
        "সমস্যা: মাঝের কম্পোনেন্টগুলো অহেতুক জটিল হয়ে যায়।",
        "সমাধান ১: Component Composition (প্রপস ড্রিলিং এড়ানোর সবচেয়ে সহজ ও দ্রুত উপায়)।",
        "সমাধান ২: Context API (থিম, ইউজার লগইন তথ্যের জন্য উপযুক্ত)।",
        "সমাধান ৩: Zustand বা Redux (জটিল গ্লোবাল অ্যাপের জন্য)।"
      ],
      "commonMistakes": [
        "সামান্য প্রপস ড্রিলিং দেখলেই হুট করে পুরো রেডেক্স বা কনটেক্সট সেটআপ করে ফেলা।"
      ],
      "proTips": [
        "ইন্টারভিউতে আগে Component Composition-এর কথা বলুন, তারপর Context ও Zustand-এর কথা বলুন।"
      ]
    }
  },
  {
    "id": "ms-q40-usecontext-hook",
    "questionNumber": 40,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "Explain the useContext hook with an example.",
    "banglaQuestion": "useContext হুক কী? উদাহরণসহ এর ব্যবহার ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useContext",
      "Context API",
      "Global State"
    ],
    "english": {
      "quickAnswer": "`useContext` is a React Hook that allows components to subscribe to and consume data from a React Context directly, bypassing the need to pass props manually through intermediate components.",
      "interviewSpeech": "The `useContext` hook consumes data exposed by a `<Context.Provider value={...}>` higher up in the component tree. You create the context with `createContext()`, wrap the relevant subtree with the `Provider` supplying the state, and any child at any depth can call `useContext(MyContext)` to access the current value. When the provider's `value` changes, every component calling `useContext` for that context will automatically re-render with the latest value.",
      "deepDive": [
        "**Creation**: `const ThemeContext = createContext('light');`.",
        "**Provision**: `<ThemeContext.Provider value={{ theme, toggleTheme }}>`.",
        "**Consumption**: `const { theme } = useContext(ThemeContext);`.",
        "**Re-render trigger**: All subscribing consumers re-render when the context value changes (optimize with `useMemo` on the provider value)."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Theme Context Setup and Consumption",
        "code": "import React, { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nexport function ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('dark');\n  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// Deeply nested child consuming directly without prop drilling\nexport function ThemeToggleButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  return (\n    <button onClick={toggleTheme}>\n      Current Theme: {theme} (Click to toggle)\n    </button>\n  );\n}"
      },
      "commonMistakes": [
        "Calling `useContext` in a component that is not a child of that Context's Provider (returns the default value passed to `createContext`).",
        "Passing a raw un-memoized object literal in the Provider value (`value={{ theme }}`), which creates a new reference on every parent render and causes unnecessary child renders."
      ],
      "proTips": [
        "Wrap your context consumption in a custom hook (e.g. `useTheme()`) that validates if the context is defined, providing helpful error messages if used outside the Provider."
      ]
    },
    "bangla": {
      "quickAnswer": "`useContext` হুক কোনো প্রপস ড্রিলিং ছাড়াই রিয়্যাক্ট কনটেক্সটের প্রোভাইডার থেকে সরাসরি ডেটা রিসিভ করতে সাহায্য করে।",
      "interviewSpeech": "`useContext` গ্লোবাল ডেটা (যেমন ইউজার লগইন স্টেট, কালার থিম বা ভাষা) হ্যান্ডেল করতে ব্যবহৃত হয়। প্রথমে `createContext()` দিয়ে কনটেক্সট তৈরি করতে হয়। এরপর প্যারেন্ট লেভেলে `<Context.Provider value={...}>` দিয়ে ডেটা প্রোভাইড করতে হয়। এখন এর ভেতরের যেকোনো চাইল্ড কম্পোনেন্টে সরাসরি `const data = useContext(MyContext)` লিখে ডেটা অ্যাক্সেস করা যায়। প্রোভাইডারের ভ্যালু পরিবর্তন হলে কনটেক্সট ব্যবহারকারী সকল কম্পোনেন্ট সাথে সাথে আপডেট হয়ে যায়।",
      "deepDive": [
        "প্রপস ড্রিলিং পুরোপুরি দূর করে।",
        "কাস্টম হুক বানিয়ে এর ব্যবহার আরও সহজ ও নিরাপদ করা যায় (যেমন `useTheme()`)।"
      ],
      "commonMistakes": [
        "প্রোভাইডারের বাইরে থেকে `useContext` কল করা (ফলে কোনো এরর না দিয়ে ডিফল্ট ভ্যালু রিটার্ন করে বিভ্রান্ত করে)।"
      ],
      "proTips": [
        "প্রোভাইডারের ভেতরে ভ্যালু দেওয়ার সময় `useMemo` ব্যবহার করলে চাইল্ডদের অপ্রয়োজনীয় রি-রেন্ডার ঠেকানো যায়।"
      ]
    }
  },
  {
    "id": "ms-q41-useref-hook",
    "questionNumber": 41,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the useRef hook and when would you use it?",
    "banglaQuestion": "useRef হুক কী এবং এটি কখন ব্যবহার করা উচিত?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useRef",
      "DOM Access",
      "Mutable Reference",
      "Performance"
    ],
    "english": {
      "quickAnswer": "`useRef` returns a mutable ref object whose `.current` property persists across renders without triggering a component re-render when mutated.",
      "interviewSpeech": "`useRef` serves two primary purposes in React. First, it provides direct, imperative access to real DOM nodes (e.g., focusing an input, scrolling to an element, or measuring element dimensions). Second, it acts as a generic container for holding mutable instance values across renders—similar to an instance variable on a class—where updating the value must NOT trigger a component re-render. Common examples of mutable values include timer IDs (`setInterval`), previous state snapshots, and request counters.",
      "deepDive": [
        "**DOM Access**: `<input ref={inputRef} />` sets `inputRef.current` to the HTML DOM element after mount.",
        "**No Re-renders**: Changing `ref.current = 10` does NOT cause the component to re-render (unlike `useState`).",
        "**Persistence**: The object reference remains strictly identical across every single render throughout the component lifecycle."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "useRef for DOM Focus & Storing Timer ID without Re-rendering",
        "code": "function Stopwatch() {\n  const [seconds, setSeconds] = React.useState(0);\n  // 1. Mutable value that shouldn't cause re-renders when modified\n  const timerRef = React.useRef(null);\n  // 2. Direct DOM access\n  const inputRef = React.useRef(null);\n\n  const startTimer = () => {\n    if (timerRef.current) return;\n    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000);\n  };\n\n  const stopTimer = () => {\n    clearInterval(timerRef.current);\n    timerRef.current = null;\n    inputRef.current?.focus(); // Focus DOM element\n  };\n\n  return (\n    <div>\n      <h3>Seconds: {seconds}</h3>\n      <input ref={inputRef} placeholder=\"Notes...\" />\n      <button onClick={startTimer}>Start</button>\n      <button onClick={stopTimer}>Stop & Focus</button>\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Reading or writing `ref.current` during rendering (violates React purity; only modify refs in event handlers or `useEffect`).",
        "Using `useRef` for values that should be visually displayed on screen (if changing the value must update the UI, use `useState` instead)."
      ],
      "proTips": [
        "Summary sentence: 'Use `useState` when value changes should trigger a visual re-render; use `useRef` when value changes must persist silently in the background or when accessing the DOM.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`useRef` এমন একটি হুক যা একটি মিউটেবল অবজেক্ট (`{ current: initialValue }`) রিটার্ন করে। এর মান পরিবর্তন করলেও কম্পোনেন্ট রি-রেন্ডার হয় না এবং এটি সরাসরি ব্রাউজার DOM অ্যাক্সেস করতে ব্যবহৃত হয়।",
      "interviewSpeech": "`useRef`-এর দুটি প্রধান কাজ রয়েছে: ১) সরাসরি DOM এলিমেন্ট ধরা (যেমন কোনো ইনপুটে অটো-ফোকাস করা, স্ক্রল পজিশন মাপা বা ভিডিও প্লে/পজ করা)। ২) এমন কোনো মান সংরক্ষণ করা যা রেন্ডারের মাঝে হারিয়ে যাবে না কিন্তু পরিবর্তন হলে পেজকে নতুন করে রি-রেন্ডার করার কোনো প্রয়োজন নেই (যেমন টাইমার আইডি, প্রিভিয়াস স্টেট ট্র্যাকিং ইত্যাদি)। `useState` যেখানে মান বদলালে সাথে সাথে পেজ রি-রেন্ডার করে, `useRef` সেখানে নিঃশব্দে মান ধরে রাখে কোনো রি-রেন্ডার ছাড়া।",
      "deepDive": [
        "DOM রেফারেন্স: ইনপুট বা বাটনে `ref={myRef}` দিলে `myRef.current` সরাসরি DOM নোড হয়ে যায়।",
        "রি-রেন্ডার মুক্ত: `.current` প্রপার্টি চেঞ্জ করলে কখনো স্ক্রিন রি-রেন্ডার হয় না।"
      ],
      "commonMistakes": [
        "স্ক্রিনে দেখানোর মতো কোনো ডেটার জন্য `useRef` ব্যবহার করা (UI আপডেট করতে চাইলে অবশ্যই `useState` ব্যবহার করতে হবে)।"
      ],
      "proTips": [
        "মনে রাখার সূত্র: UI পরিবর্তন করতে `useState`, আর ব্যাকগ্রাউন্ডে রেফারেন্স বা DOM ধরতে `useRef`।"
      ]
    }
  },
  {
    "id": "ms-q42-react-keys-importance",
    "questionNumber": 42,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What are React keys and why are they important in lists?",
    "banglaQuestion": "React-এ keys কী এবং লিস্ট রেন্ডার করার ক্ষেত্রে এগুলো কেন জরুরি?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "Keys",
      "Lists",
      "Reconciliation",
      "Diffing Algorithm",
      "Performance"
    ],
    "english": {
      "quickAnswer": "Keys are special string attributes given to array items in JSX that give elements a stable identity, allowing React's diffing algorithm to correctly match, insert, reorder, and remove DOM nodes efficiently without losing internal state.",
      "interviewSpeech": "When React renders a dynamic list of items, it needs a way to identify which items have changed, been added, or been removed between renders. Without keys, React defaults to comparing items positionally by array index. If an item is prepended or deleted from the middle of the list, index-based reconciliation causes React to unnecessarily re-render and mutate every subsequent DOM node, and can cause catastrophic UI bugs where child component local state (like input text or checkbox state) gets assigned to the wrong item. Unique, stable keys (like database IDs) ensure React performs surgical DOM operations and preserves correct component state.",
      "deepDive": [
        "**Reconciliation Match**: Keys allow React to track elements across moves and reordering.",
        "**Array Index as Key Antipattern**: Safe ONLY if the list is static, has no IDs, will never be reordered, filtered, or prepended, and has no uncontrolled internal state.",
        "**Key Reset Pattern**: Changing a component's key `<Form key={userId} />` tells React to throw away the old instance and cleanly re-instantiate from scratch."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Correct Stable Key vs Dangerous Index Key",
        "code": "// DANGEROUS: Using index as key in dynamic/sorted lists!\n// items.map((item, index) => <TodoItem key={index} item={item} />)\n\n// CORRECT: Using unique, stable IDs from data\nfunction TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>\n          <input type=\"checkbox\" defaultChecked={todo.completed} />\n          <span>{todo.title}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}"
      },
      "commonMistakes": [
        "Using `Math.random()` as a key (generates a new key on every render, forcing React to recreate the entire DOM subtree on every single update).",
        "Using array index on lists that can be sorted, filtered, or prepended."
      ],
      "proTips": [
        "Mention the 'Key Reset Pattern': You can intentionally change a component's key to force a clean unmount and remount (e.g. resetting a complex form when switching users)."
      ]
    },
    "bangla": {
      "quickAnswer": "Keys হলো একটি বিশেষ স্ট্রিং অ্যাট্রিবিউট যা লিস্টের প্রতিটি উপাদানকে একটি স্বতন্ত্র পরিচিতি দেয়, যাতে রিয়্যাক্টের Diffing অ্যালগরিদম বুঝতে পারে কোন উপাদানটি যোগ, বিয়োগ বা স্থান পরিবর্তন হয়েছে।",
      "interviewSpeech": "লিস্ট রেন্ডার করার সময় রিয়্যাক্টকে প্রতিটি উপাদানের পরিচয় নিশ্চিত করতে হয়। যদি আমরা `key` না দিই বা অ্যারের `index` কি হিসেবে ব্যবহার করি, তবে লিস্ট ফিল্টার বা রি-অর্ডার করলে রিয়্যাক্ট ভুলভাবে প্রতিটি উপাদানকে নতুন করে রেন্ডার করতে পারে এবং ভেতরের ইনপুট বা চেকবাক্সের স্টেট অন্য উপাদানে চলে গিয়ে মারাত্মক বাগ হতে পারে। কিন্তু প্রতিটি আইটেমের ইউনিক আইডি (যেমন ডাটাবেজ আইডি) কি হিসেবে দিলে রিয়্যাক্ট সুনির্দিষ্ট আইটেমটি সহজে শনাক্ত করতে পারে এবং অত্যন্ত দ্রুত ও নির্ভুলভাবে কেবল প্রয়োজনীয় ডম আপডেট করে।",
      "deepDive": [
        "Diffing অ্যালগরিদম: কি-এর সাহায্যে রিয়্যাক্ট মেমরিতে থাকা উপাদানের সাথে আসল DOM ঠিকঠাক মেলায়।",
        "অ্যারে ইনডেক্স ব্যবহার করা ঝুঁকিপূর্ণ যদি লিস্টটি সর্ট বা ডিলিট করা যায়।",
        "কখনো `Math.random()` কি হিসেবে ব্যবহার করবেন না।"
      ],
      "commonMistakes": [
        "কী হিসেবে `Math.random()` দেওয়া—এর ফলে প্রতি রেন্ডারে নতুন কি তৈরি হয়ে পুরো লিস্ট ধ্বংস হয়ে আবার নতুন করে তৈরি হয়।"
      ],
      "proTips": [
        "মনে রাখবেন: কি-এর মান পুরো অ্যাপে ইউনিক না হলেও চলে, শুধু সংশ্লিষ্ট সিলিং (ভাই-বোন) উপাদানগুলোর মাঝে ইউনিক হতে হবে।"
      ]
    }
  },
  {
    "id": "ms-q43-state-vs-props",
    "questionNumber": 43,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is the difference between state and props?",
    "banglaQuestion": "State এবং Props-এর মধ্যকার পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "React",
      "State",
      "Props",
      "Immutability",
      "Component Lifecycle"
    ],
    "english": {
      "quickAnswer": "State is local, mutable data owned and managed internally by the component itself, while Props are external, immutable configuration data passed into a component from its parent.",
      "interviewSpeech": "The difference between state and props is 'internal vs external' and 'mutable vs read-only'. State is private data managed within a component using `useState` or `useReducer`. The component owns its state and can update it to trigger re-renders based on user interactions. Props (short for properties) are configuration passed down from a parent component, similar to arguments passed to a function. Props are strictly read-only and immutable for the child component. When a parent passes down state as a prop, that data is state to the parent, but immutable props to the child.",
      "deepDive": [
        "**State**: Internal, private, managed via `useState`, changes trigger re-render of self and children.",
        "**Props**: External, public to child, read-only/immutable, changes in received props trigger child re-render.",
        "**Lifting State Up**: When multiple sibling components need to share state, move that state up to their closest common parent and pass it down via props."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "State vs Props Demonstration",
        "code": "// Parent owns STATE\nfunction Parent() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Increment</button>\n      {/* Passing state down as PROPS to Child */}\n      <ChildDisplay countProp={count} />\n    </div>\n  );\n}\n\n// Child receives PROPS (strictly read-only)\nfunction ChildDisplay({ countProp }) {\n  // countProp = 10; // FORBIDDEN! Props are immutable\n  return <h4>Received Count: {countProp}</h4>;\n}"
      },
      "commonMistakes": [
        "Attempting to mutate props directly in a child component.",
        "Duplicating props into local state unnecessarily (`const [name, setName] = useState(props.name)`), leading to out-of-sync state bugs."
      ],
      "proTips": [
        "Succinct summary: 'Props are how components receive data from outside; State is how components remember data from within.'"
      ]
    },
    "bangla": {
      "quickAnswer": "State হলো কোনো কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ পরিবর্তনশীল ডেটা যা কম্পোনেন্ট নিজেই নিয়ন্ত্রণ করে; আর Props হলো প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো অপরিবর্তনযোগ্য (রিড-অনলি) কনফিগারেশন ডেটা।",
      "interviewSpeech": "স্টেট এবং প্রপসের পার্থক্য খুব সহজ: ১) ওনারশিপ: স্টেট কম্পোনেন্টের নিজের একান্ত ব্যক্তিগত, আর প্রপস আসে বাইরে থেকে (প্যারেন্ট থেকে)। ২) পরিবর্তনযোগ্যতা: স্টেট কম্পোনেন্ট নিজে `setState` দিয়ে পরিবর্তন করতে পারে, কিন্তু প্রপস চাইল্ডের কাছে সম্পূর্ণ রিড-অনলি—চাইল্ড তা কখনো পরিবর্তন করতে পারে না। ৩) রেন্ডারিং: স্টেট বা প্রপস কোনোটি পরিবর্তিত হলেই সংশ্লিষ্ট কম্পোনেন্ট রি-রেন্ডার হয়। প্যারেন্টের স্টেট যখন চাইল্ডের কাছে পাঠানো হয়, তখন সেটি প্যারেন্টের কাছে স্টেট হলেও চাইল্ডের কাছে কেবলই প্রপস।",
      "deepDive": [
        "State: নিজস্ব ও নিয়ন্ত্রণযোগ্য।",
        "Props: প্যারেন্ট থেকে আসা এবং অপরিবর্তনযোগ্য।",
        "Lifting State Up: একাধিক চাইল্ডের একই ডেটা লাগলে স্টেটকে তাদের কমন প্যারেন্টে তুলে দিতে হয়।"
      ],
      "commonMistakes": [
        "প্রপস থেকে ডেটা এনে আবার স্টেটে কপি করে রাখা—এতে দুই জায়গায় ডেটা ডিসিঙ্ক হয়ে যেতে পারে।"
      ],
      "proTips": [
        "এক লাইনে বলুন: 'Props হলো বাইরে থেকে পাওয়া তথ্য, আর State হলো ভেতরের নিজস্ব স্মৃতি।'"
      ]
    }
  },
  {
    "id": "ms-q44-conditional-rendering-in-react",
    "questionNumber": 44,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "How does conditional rendering work in React?",
    "banglaQuestion": "React-এ Conditional Rendering কীভাবে কাজ করে?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "React",
      "Conditional Rendering",
      "JSX",
      "Ternary Operator",
      "Short-Circuit"
    ],
    "english": {
      "quickAnswer": "Conditional rendering in React displays different UI elements based on specific conditions using standard JavaScript expressions like ternary operators (`? :`), logical AND (`&&`), early returns, or switch statements.",
      "interviewSpeech": "In React, conditional rendering works the same way conditions work in plain JavaScript. There are 4 primary patterns: 1) **Early return**: If a condition is met (like loading or unauthorized), return early with a component or `null` before rendering the main JSX. 2) **Ternary operator (`condition ? <A /> : <B />`)**: Best for inline binary branching between two views. 3) **Logical AND (`condition && <Element />`)**: Best for conditionally showing or hiding an element. 4) **Element variables or switch cases**: For managing multiple complex UI states.",
      "deepDive": [
        "**Ternary Operator**: `isLoggedIn ? <Dashboard /> : <LoginForm />`.",
        "**Logical AND (`&&`)**: Beware the `0 && <Component />` pitfall! If the left side is the number `0`, React renders the literal number `0` to the screen instead of nothing.",
        "**Returning `null`**: Returning `null` from a component prevents it from rendering anything to the DOM without unmounting unexpectedly."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Conditional Rendering Patterns and the '0' Bug Fix",
        "code": "function NotificationBadge({ count, isLoading, user }) {\n  // 1. Early Return for Loading\n  if (isLoading) return <div>Loading...</div>;\n\n  return (\n    <div>\n      {/* 2. Ternary Operator */}\n      <h1>{user ? `Welcome, ${user.name}` : 'Please Log In'}</h1>\n\n      {/* 3. DANGEROUS: count && ... (if count is 0, renders \"0\" on screen!) */}\n      {/* {count && <span className=\"badge\">{count}</span>} */}\n\n      {/* 3. SAFE: Boolean coercion or explicit comparison */}\n      {count > 0 && <span className=\"badge\">{count}</span>}\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Writing `items.length && <List />`—when `items.length` is `0`, React prints the number `0` onto the webpage! Use `items.length > 0 && <List />` instead.",
        "Attempting to put `if/else` statements directly inside JSX brackets `{}` (only expressions are valid inside `{}`)."
      ],
      "proTips": [
        "Always recommend `count > 0 && ...` or `Boolean(count) && ...` over raw `count && ...` to protect against falsy number render bugs."
      ]
    },
    "bangla": {
      "quickAnswer": "React-এ নির্দিষ্ট শর্তের উপর ভিত্তি করে ভিন্ন ভিন্ন UI উপাদান স্ক্রিনে প্রদর্শন করাকে Conditional Rendering বলে। এটি সাধারণ জাভাস্ক্রিপ্টের টার্নারি অপারেটর (`? :`), লজিক্যাল অ্যান্ড (`&&`), বা আর্লি রিটার্ন (`if`) দিয়ে করা হয়।",
      "interviewSpeech": "রিঅ্যাক্টে শর্তভিত্তিক রেন্ডারিং করার জন্য কোনো বিশেষ ডিরেক্টিভ নেই, পিওর জাভাস্ক্রিপ্ট দিয়েই এটি করা হয়। প্রধান উপায়গুলো হলো: ১) Early Return: কোনো ডেটা লোডিং থাকা অবস্থায় বা এরর হলে শুরুতেই `if (loading) return <Spinner />` দিয়ে রিটার্ন করে দেওয়া। ২) Ternary Operator (`condition ? <User /> : <Login />`): শর্ত অনুযায়ী দুটি ভিন্ন ভিউ দেখাতে। ৩) Logical AND (`condition && <Popup />`): শর্ত সত্য হলে কিছু একটা দেখাতে।",
      "deepDive": [
        "টার্নারি অপারেটর ইনলাইন কন্ডিশনের জন্য সবচেয়ে নিরাপদ।",
        "লজিক্যাল `&&` ব্যবহারের সময় `0` এর ট্র্যাপ থেকে সাবধান থাকতে হবে।"
      ],
      "commonMistakes": [
        "`arr.length && <Component />` লেখা—যদি দৈর্ঘ্য ০ হয়, তবে স্ক্রিনে '0' সংখ্যাটি ভেসে উঠবে! এর বদলে `arr.length > 0 && <Component />` লেখা উচিত।"
      ],
      "proTips": [
        "কোনো কম্পোনেন্ট রেন্ডার না করতে চাইলে সরাসরি `return null;` করুন।"
      ]
    }
  },
  {
    "id": "ms-q45-react-memo-explained",
    "questionNumber": 45,
    "module": "React Fundamentals",
    "topic": "Components, Hooks & State Management",
    "question": "What is React.memo and when should you use it?",
    "banglaQuestion": "React.memo কী এবং এটি কখন ব্যবহার করা উচিত?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Performance",
      "React.memo",
      "Higher-Order Component",
      "Optimization"
    ],
    "english": {
      "quickAnswer": "`React.memo` is a higher-order component (HOC) that optimizes functional components by shallowly comparing incoming props, skipping re-renders if the props haven't changed.",
      "interviewSpeech": "By default in React, when a parent component re-renders, all of its child components re-render recursively, even if their props remained identical. `React.memo` wraps a functional component to memoize its rendered output. Before re-rendering the child, React performs a shallow equality comparison (`Object.is`) on the current props versus previous props. If all props are unchanged, React skips the render pass and reuses the previous Virtual DOM result. It is ideal for heavy components, large lists, or components with expensive rendering logic that receive stable props.",
      "deepDive": [
        "**Shallow Comparison**: By default, `React.memo` checks `prevProps[key] === nextProps[key]`.",
        "**Object/Function Trap**: If the parent passes inline objects (`style={{ color: 'red' }}`) or un-memoized functions (`onClick={() => {}}`), a new reference is created every render, defeating `React.memo`. Combine with `useCallback` and `useMemo`!",
        "**Custom Comparator**: Accepts an optional second argument `(prevProps, nextProps) => boolean`."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "React.memo Combined with useCallback to Prevent Re-renders",
        "code": "// Wrapped in React.memo: Only re-renders if 'user' or 'onSelect' reference changes\nconst UserCard = React.memo(function UserCard({ user, onSelect }) {\n  console.log('Rendering UserCard:', user.name);\n  return <div onClick={() => onSelect(user.id)}>{user.name}</div>;\n});\n\nfunction UserList({ users }) {\n  const [theme, setTheme] = React.useState('light');\n\n  // Must use useCallback, otherwise a new function reference breaks React.memo!\n  const handleSelect = React.useCallback((id) => {\n    console.log('Selected user:', id);\n  }, []);\n\n  return (\n    <div>\n      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>\n        Toggle Theme ({theme})\n      </button>\n      {users.map(u => (\n        <UserCard key={u.id} user={u} onSelect={handleSelect} />\n      ))}\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Wrapping every single small component in `React.memo` (the shallow comparison overhead can actually make cheap components slower).",
        "Using `React.memo` on components that receive newly created inline objects or un-memoized inline arrow functions."
      ],
      "proTips": [
        "Remember: Premature optimization is the root of all evil. Only apply `React.memo` to components that are demonstrably slow or render frequently in large lists."
      ]
    },
    "bangla": {
      "quickAnswer": "`React.memo` হলো একটি Higher-Order Component (HOC) যা চাইল্ড কম্পোনেন্টের প্রপস শ্যালো কম্পেয়ার (Shallow Compare) করে; প্রপস পরিবর্তন না হলে কম্পোনেন্টের অপ্রয়োজনীয় রি-রেন্ডার স্কিপ করে।",
      "interviewSpeech": "রিঅ্যাক্টের স্বাভাবিক নিয়ম অনুযায়ী প্যারেন্ট রি-রেন্ডার হলে তার ভেতরের সব চাইল্ডও রি-রেন্ডার হয়, যদিও চাইল্ডের কোনো পরিবর্তন হয়নি। `React.memo` দিয়ে কোনো কম্পোনেন্টকে র‍্যাপ করে দিলে সে তার পূর্বের প্রপসের সাথে বর্তমান প্রপসের তুলনা করে। যদি প্রপস অপরিবর্তিত থাকে, তবে রিয়্যাক্ট তার আগের রেন্ডার করা রেজাল্টটি রিইউজ করে এবং নতুন করে রেন্ডার করা এড়িয়ে যায়। এটি বড় লিস্ট বা ভারী কোনো কম্পোনেন্টের জন্য দুর্দান্ত পারফরম্যান্স বুস্ট দেয়।",
      "deepDive": [
        "শ্যালো কম্প্যারিজনের মাধ্যমে কাজ করে।",
        "ফাংশন বা অবজেক্ট পাস করলে অবশ্যই `useCallback` বা `useMemo` দিয়ে পাঠাতে হবে, নইলে প্রতিবার নতুন রেফারেন্স তৈরি হয়ে `React.memo` অকেজো হয়ে পড়বে।"
      ],
      "commonMistakes": [
        "অ্যাপের প্রতিটি ছোটখাটো কম্পোনেন্টে অন্ধের মতো `React.memo` বসিয়ে দেওয়া—এতে মেমোরি খরচ বাড়ে কিন্তু কোনো লাভ হয় না।"
      ],
      "proTips": [
        "মনে রাখবেন: `React.memo` শুধু তখনই কাজ করে যখন প্রপসের রেফারেন্স অপরিবর্তিত থাকে।"
      ]
    }
  },
  {
    "id": "ms-q46-usereducer-hook",
    "questionNumber": 46,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is the useReducer hook and when is it preferred over useState?",
    "banglaQuestion": "useReducer হুক কী এবং এটি useState-এর চেয়ে কখন বেশি উপযোগী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useReducer",
      "State Management",
      "Redux Pattern"
    ],
    "english": {
      "quickAnswer": "`useReducer` is a React Hook for managing complex state logic following the Redux pattern `(state, action) => newState`, preferred over `useState` when state transitions involve multiple interrelated fields or complex business rules.",
      "interviewSpeech": "`useReducer` provides an alternative to `useState` that separates state update logic from UI rendering. It accepts a reducer function and initial state, returning the current state and a `dispatch` function. You should prefer `useReducer` over `useState` when: 1) State has multiple nested properties that depend on each other, 2) The next state depends on complex calculations based on previous state, 3) Multiple actions can trigger similar state changes, or 4) You want to pass `dispatch` deeply down the component tree without re-triggering child renders since `dispatch` identity is guaranteed to remain stable.",
      "deepDive": [
        "**Signature**: `const [state, dispatch] = useReducer(reducer, initialState)`.",
        "**Predictability**: All state mutations are centralized in a pure reducer function, making unit testing trivial.",
        "**Performance**: `dispatch` function reference never changes across re-renders, preventing child re-render churn."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "useReducer for Complex Form / Cart State",
        "code": "const initialState = { count: 0, step: 1 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { ...state, count: state.count + state.step };\n    case 'setStep':\n      return { ...state, step: action.payload };\n    case 'reset':\n      return initialState;\n    default:\n      return state;\n  }\n}\n\nfunction CounterWithStep() {\n  const [state, dispatch] = React.useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count} (Step: {state.step})</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+ Step</button>\n      <button onClick={() => dispatch({ type: 'setStep', payload: 5 })}>Set Step 5</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Mutating the state argument directly inside the reducer function instead of returning a fresh copied object.",
        "Using `useReducer` for trivially simple single-field states where `useState` is cleaner."
      ],
      "proTips": [
        "Mention pairing `useReducer` with `useContext` to create a lightweight Redux alternative without external libraries."
      ]
    },
    "bangla": {
      "quickAnswer": "`useReducer` হলো একটি হুক যা Redux প্যাটার্ন `(state, action) => newState` অনুযায়ী কাজ করে। যখন কোনো স্টেটে একাধিক পরস্পর নির্ভরশীল ফিল্ড থাকে বা জটিল লজিক থাকে, তখন `useState`-এর চেয়ে `useReducer` বেশি কার্যকর।",
      "interviewSpeech": "যখন সাধারণ `useState` দিয়ে স্টেটের পরিবর্তন ট্র্যাক করা কঠিন হয়ে পড়ে, তখন `useReducer` ব্যবহার করা হয়। এটি একটি পিওর রিডিউসার ফাংশন এবং ইনিশিয়াল স্টেট নেয়, এবং বর্তমান স্টেট ও একটি `dispatch` ফাংশন রিটার্ন করে। স্টেট ট্রানজিশনগুলো একটি নির্দিষ্ট জায়গায় সেন্ট্রালাইজড থাকে এবং অ্যাকশন টাইপ দেখে আপডেট হয়। বিশেষ করে শপিং কার্ট, মাল্টি-স্টেপ ফর্ম বা জটিল ড্যাশবোর্ডে `useReducer` কোডকে অত্যন্ত গোছানো ও টেস্টেবল করে তোলে।",
      "deepDive": [
        "রিডিউসার ফাংশনটি সবসময় Pure হতে হবে (আগের স্টেট না বদলে নতুন কপি রিটার্ন করতে হবে)।",
        "`dispatch` ফাংশনের রেফারেন্স কখনো বদলায় না, তাই এটি চাইল্ডে পাঠালেও অপ্রয়োজনীয় রি-রেন্ডার হয় না।"
      ],
      "commonMistakes": [
        "রিডিউসারের ভেতরে সরাসরি `state.count++` করে ফেলা (অবশ্যই `{ ...state, count: state.count + 1 }` রিটার্ন করতে হবে)।"
      ],
      "proTips": [
        "`useReducer` এবং `useContext` একসাথে মিলিয়ে খুব সহজেই থার্ড পার্টি লাইব্রেরি ছাড়া মিনি-রেডাক্স তৈরি করা যায়।"
      ]
    }
  },
  {
    "id": "ms-q47-usememo-hook",
    "questionNumber": 47,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "Explain the useMemo hook and give a use case.",
    "banglaQuestion": "useMemo হুক কী? একটি বাস্তব ব্যবহারের ক্ষেত্রসহ ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useMemo",
      "Performance",
      "Optimization",
      "Memoization"
    ],
    "english": {
      "quickAnswer": "`useMemo` is a React Hook that memoizes the calculated result of an expensive function, recalculating it only when one of its specified dependencies changes.",
      "interviewSpeech": "During re-renders, every piece of code inside a functional component body runs again. If a component performs an expensive CPU computation (like filtering or sorting a list of 10,000 items), recalculating on every unrelated state update causes UI stutter and lag. `useMemo` caches the calculated return value. On subsequent renders, React checks the dependency array: if the dependencies have not changed, it skips the expensive calculation and returns the cached result. Another key use case is referential equality—caching an object so it does not trigger child re-renders when passed as a prop.",
      "deepDive": [
        "**Signature**: `const cachedResult = useMemo(() => expensiveFunction(a, b), [a, b])`.",
        "**Cost vs Benefit**: `useMemo` itself incurs memory and comparison overhead; only use it for genuinely computationally intensive operations or referential stability.",
        "**Runs during render**: Code inside `useMemo` runs during rendering, so do NOT perform side effects inside it."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Filtering a Large Dataset with useMemo",
        "code": "function ProductList({ products, searchFilter }) {\n  const [darkMode, setDarkMode] = React.useState(false);\n\n  // Expensive filtering calculation memoized:\n  // Does NOT re-run when darkMode changes!\n  const filteredProducts = React.useMemo(() => {\n    console.log('Filtering 10,000 products...');\n    return products.filter(p => p.name.toLowerCase().includes(searchFilter.toLowerCase()));\n  }, [products, searchFilter]);\n\n  return (\n    <div className={darkMode ? 'dark' : 'light'}>\n      <button onClick={() => setDarkMode(!darkMode)}>Toggle Mode</button>\n      <ul>{filteredProducts.map(p => <li key={p.id}>{p.name}</li>)}</ul>\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Using `useMemo` for cheap operations (e.g. `useMemo(() => a + b, [a, b])`), which adds overhead without any performance gain.",
        "Putting side effects (like data fetching or DOM mutations) inside `useMemo`."
      ],
      "proTips": [
        "Use React DevTools Profiler to verify that an operation is genuinely slow before adding `useMemo`."
      ]
    },
    "bangla": {
      "quickAnswer": "`useMemo` হলো এমন একটি হুক যা কোনো ব্যয়বহুল ক্যালকুলেশনের ফলাফল ক্যাশে সেভ করে রাখে এবং শুধুমাত্র নির্দিষ্ট ডিপেনডেন্সি পরিবর্তিত হলেই পুনরায় ক্যালকুলেট করে।",
      "interviewSpeech": "ফাংশনাল কম্পোনেন্ট রি-রেন্ডার হলে তার ভেতরের পুরো কোড আবার এক্সিকিউট হয়। যদি কম্পোনেন্টে হাজার হাজার ডেটা ফিল্টার বা সর্ট করার মতো কোনো ভারী হিসাব থাকে, তবে অন্য কোনো স্টেট পরিবর্তনের কারণেও অপ্রয়োজনীয়ভাবে সেই ভারী হিসাব আবার চলতে থাকে, যার ফলে অ্যাপ স্লো হয়ে যায়। `useMemo` হুক ওই ভারী হিসাবের রেজাল্ট ক্যাশে জমা রাখে। যতক্ষণ পর্যন্ত ডিপেনডেন্সি না বদলায়, ততক্ষণ সে আগের রেজাল্টটি সরাসরি দিয়ে দেয়। এর ফলে অযথা CPU-র উপর চাপ পড়ে না।",
      "deepDive": [
        "হেভি ক্যালকুলেশন মেমোইজ করতে ব্যবহৃত হয়।",
        "অবজেক্টের রেফারেন্সিয়াল ইকুইলিটি ঠিক রাখতেও কাজে লাগে।"
      ],
      "commonMistakes": [
        "সহজ যোগ-বিয়োগের মতো হালকা কাজে `useMemo` ব্যবহার করা—এতে লাভের চেয়ে ক্ষতি বেশি হয়।"
      ],
      "proTips": [
        "মনে রাখবেন: `useMemo` ফলাফল (Value) ক্যাশ করে, আর `useCallback` ফাংশন ডেফিনিশন ক্যাশ করে।"
      ]
    }
  },
  {
    "id": "ms-q48-usecallback-hook",
    "questionNumber": 48,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is the useCallback hook and when do you use it?",
    "banglaQuestion": "useCallback হুক কী এবং এটি কখন ব্যবহার করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Hooks",
      "useCallback",
      "Referential Equality",
      "React.memo",
      "Optimization"
    ],
    "english": {
      "quickAnswer": "`useCallback` is a React Hook that caches a function definition between renders, returning the identical function memory reference until its dependencies change.",
      "interviewSpeech": "In JavaScript, functions are objects, meaning `() => {} !== () => {}`. Every time a component re-renders, any regular function declared inside it is recreated with a brand new memory reference. If you pass that function as a prop to a child component wrapped in `React.memo`, the child will detect a new prop reference and re-render anyway, completely defeating memoization. `useCallback` solves this by caching the function reference across renders. It should primarily be used when passing callbacks to optimized children relying on referential equality (`React.memo`) or when a function is specified in the dependency array of another hook (like `useEffect`).",
      "deepDive": [
        "**Signature**: `const memoizedFn = useCallback((args) => { ... }, [dependencies])`.",
        "**`useCallback(fn, deps)` vs `useMemo(() => fn, deps)`**: They are functionally identical under the hood; `useCallback` is just syntactic sugar for memoizing a function definition.",
        "**Closure trap**: Omitting state/props from the dependency array will cause the cached function to retain stale values indefinitely."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "useCallback Maintaining Referential Equality for React.memo Child",
        "code": "const HeavyItem = React.memo(({ id, onDelete }) => {\n  console.log('Child Rendered:', id);\n  return <button onClick={() => onDelete(id)}>Delete {id}</button>;\n});\n\nfunction App() {\n  const [items, setItems] = React.useState(['A', 'B', 'C']);\n  const [count, setCount] = React.useState(0);\n\n  // Without useCallback, a NEW function reference is created on every 'count' update,\n  // causing HeavyItem to re-render needlessly!\n  const handleDelete = React.useCallback((itemId) => {\n    setItems(prev => prev.filter(item => item !== itemId));\n  }, []); // Dependencies empty because we used functional state updater\n\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Unrelated Click: {count}</button>\n      {items.map(item => (\n        <HeavyItem key={item} id={item} onDelete={handleDelete} />\n      ))}\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Using `useCallback` on inline event handlers for native HTML elements (`<button onClick={useCallback(...)}>` provides zero benefit).",
        "Forgetting dependencies inside the array, causing stale closure state bugs."
      ],
      "proTips": [
        "Always remember: `useCallback` is only beneficial if the consumer of the callback actually cares about referential stability (e.g. `React.memo` or a `useEffect` dependency)."
      ]
    },
    "bangla": {
      "quickAnswer": "`useCallback` হলো এমন একটি হুক যা ফাংশনের মেমোরি রেফারেন্স ক্যাশে সেভ করে রাখে, যাতে কম্পোনেন্ট রি-রেন্ডার হলেও নতুন করে ফাংশন তৈরি না হয়ে আগের রেফারেন্সটিই বজায় থাকে।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে প্রতিবার কম্পোনেন্ট রি-রেন্ডার হলে ভেতরের সাধারণ ফাংশনগুলো নতুন করে মেমরিতে তৈরি হয়। যদি কোনো চাইল্ড কম্পোনেন্ট `React.memo` দিয়ে অপটিমাইজ করা থাকে এবং আমরা প্যারেন্ট থেকে সাধারণ ফাংশন প্রপস হিসেবে পাঠাই, তবে ফাংশনের মেমরি রেফারেন্স বদলে যাওয়ার কারণে চাইল্ডটি আবার অহেতুক রি-রেন্ডার হয়ে যায়। `useCallback` দিয়ে ফাংশনকে র‍্যাপ করে দিলে যতক্ষণ না ডিপেনডেন্সি বদলায়, ততক্ষণ সে একই রেফারেন্স বজায় রাখে। এটি মূলত `React.memo` ওয়ালা চাইল্ডে ফাংশন পাঠাতে বা `useEffect`-এর ডিপেনডেন্সিতে থাকা ফাংশনের জন্য ব্যবহৃত হয়।",
      "deepDive": [
        "ফাংশনের মেমরি রেফারেন্স অপরিবর্তিত রাখে।",
        "`React.memo`-র সাথে জুটি হিসেবে কাজ করে পারফরম্যান্স রক্ষা করে।"
      ],
      "commonMistakes": [
        "সাধারণ HTML বাটনের `onClick`-এ অহেতুক `useCallback` ব্যবহার করা যেখানে কোনো চাইল্ড অপটিমাইজেশন নেই।"
      ],
      "proTips": [
        "মনে রাখুন: `useMemo` ভ্যালু ধরে রাখে, আর `useCallback` ফাংশনের রেফারেন্স ধরে রাখে।"
      ]
    }
  },
  {
    "id": "ms-q49-react-router-setup",
    "questionNumber": 49,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is React Router and how do you set up client-side routing?",
    "banglaQuestion": "React Router কী এবং কীভাবে ক্লায়েন্ট-সাইড রাউটিং সেটআপ করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "React Router",
      "Client-Side Routing",
      "SPA",
      "Navigation"
    ],
    "english": {
      "quickAnswer": "React Router is the standard routing library for React Single Page Applications (SPAs) that enables dynamic, client-side URL navigation without triggering full page reloads.",
      "interviewSpeech": "In traditional multi-page websites, clicking a link requests a brand-new HTML page from the server, causing a blank screen flash and reload. React Router intercepts browser URL changes using the HTML5 History API (`pushState`, `popState`). It conditionally renders different component trees based on the current URL path without contacting the server for HTML. In React Router v6+, we configure routes using either declarative JSX components (`<BrowserRouter>`, `<Routes>`, `<Route>`) or the modern data API (`createBrowserRouter` and `<RouterProvider>`).",
      "deepDive": [
        "**Core Components**: `BrowserRouter` (manages history), `Routes` (branch matcher), `Route` (maps path to element), `Link` (client-side anchor).",
        "**Nested Routes & Layouts**: Using `<Outlet />` to render child routes inside a shared persistent navbar/sidebar layout.",
        "**Dynamic Params**: `:id` extracted cleanly with the `useParams()` hook."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "React Router v6 Nested Routing Setup with Layout and Outlet",
        "code": "import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\n\nfunction RootLayout() {\n  return (\n    <div>\n      <nav><Link to=\"/\">Home</Link> | <Link to=\"/users\">Users</Link></nav>\n      <main><Outlet /></main> {/* Child routes render here */}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path=\"/\" element={<RootLayout />}>\n          <Route index element={<h2>Welcome Home</h2>} />\n          <Route path=\"users\" element={<h2>Users Directory</h2>} />\n          <Route path=\"users/:id\" element={<UserProfile />} />\n          <Route path=\"*\" element={<h2>404 Not Found</h2>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}"
      },
      "commonMistakes": [
        "Using regular HTML `<a>` tags instead of `<Link to='...'>` (causes full browser refresh and wipes out application state).",
        "Forgetting to include `<Outlet />` in parent layout routes, causing nested children to disappear."
      ],
      "proTips": [
        "Mention the modern React Router v6.4+ Data API (`createBrowserRouter`, `loader`, `action`) which handles data fetching parallel to route loading."
      ]
    },
    "bangla": {
      "quickAnswer": "React Router হলো সিঙ্গেল পেজ অ্যাপ্লিকেশনের (SPA) জন্য ক্লায়েন্ট-সাইড রাউটিং লাইব্রেরি, যা পুরো পেজ রিলোড না করেই ব্রাউজারের URL পরিবর্তনের সাথে সাথে সংশ্লিষ্ট কম্পোনেন্ট স্ক্রিনে প্রদর্শন করে।",
      "interviewSpeech": "সাধারণ ওয়েবসাইটে কোনো লিঙ্কে ক্লিক করলে সার্ভার থেকে নতুন HTML পেজ আসে এবং স্ক্রিন সাদা হয়ে রিলোড হয়। কিন্তু রিয়্যাক্ট রাউটার ব্রাউজারের HTML5 History API ব্যবহার করে পেজ রিলোড সম্পূর্ণ বন্ধ করে দেয়। এটি URL পরিবর্তন ট্র্যাক করে এবং সেই পাথ অনুযায়ী কাঙ্ক্ষিত কম্পোনেন্ট স্ক্রিনে রেন্ডার করে দেয়। আধুনিক React Router v6-এ `<BrowserRouter>`, `<Routes>`, `<Route>`, এবং লেআউট শেয়ার করার জন্য `<Outlet />` ব্যবহার করা হয়।",
      "deepDive": [
        "`<Link>` ট্যাগ ব্যবহার করলে পেজ রিলোড ছাড়া স্মুথ নেভিগেশন হয়।",
        "`<Outlet />` দিয়ে কমন লেআউটের (যেমন Navbar) নিচে চাইল্ড পেজ বসানো যায়।",
        "`useParams()` হুক দিয়ে URL-এর ডাইনামিক আইডি (`:id`) রিড করা যায়।"
      ],
      "commonMistakes": [
        "নেভিগেশনের জন্য সাধারণ HTML `<a href='...'>` ব্যবহার করা (এর ফলে পুরো পেজ রিলোড হয়ে সব স্টেট মুছে যায়)।"
      ],
      "proTips": [
        "সবসময় `<Link to='...'>` বা `useNavigate()` ব্যবহার করবেন।"
      ]
    }
  },
  {
    "id": "ms-q50-usenavigate-vs-link",
    "questionNumber": 50,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is the difference between useNavigate and Link in React Router?",
    "banglaQuestion": "React Router-এ useNavigate এবং Link-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "React",
      "React Router",
      "Navigation",
      "useNavigate",
      "Link",
      "Declarative vs Imperative"
    ],
    "english": {
      "quickAnswer": "`<Link>` is a declarative JSX component for direct user clicks that renders an accessible `<a>` tag, while `useNavigate()` is an imperative hook used to navigate programmatically inside JavaScript functions (e.g. after form submission or timer expiry).",
      "interviewSpeech": "`<Link>` and `useNavigate` represent declarative versus imperative navigation. `<Link to='/about'>` is declarative; it renders a semantic HTML anchor `<a>` tag with proper accessibility attributes (`href`), allowing users to right-click, open in new tab, or hover to see the URL. It is the best choice for all static navigation links. In contrast, `useNavigate()` is an imperative hook that returns a navigation function: `navigate('/dashboard')`. You use `useNavigate` programmatically after an asynchronous action completes—such as redirecting a user after successful login, handling timer expiration, or going back in history with `navigate(-1)`.",
      "deepDive": [
        "**Accessibility & SEO**: `<Link>` creates real `<a>` tags with `href`, critical for web crawlers and screen readers. Buttons using `useNavigate` lack SEO hyperlinks.",
        "**Programmatic Flow**: `navigate('/login', { replace: true, state: { from: location } })` allows history stack control and state passing.",
        "**Back / Forward**: `navigate(-1)` goes back one step in browser history."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Declarative Link vs Imperative useNavigate",
        "code": "import { Link, useNavigate } from 'react-router-dom';\n\nfunction LoginPage() {\n  const navigate = useNavigate();\n\n  const handleLogin = async (e) => {\n    e.preventDefault();\n    await authenticateUser();\n    // Imperative navigation after async operation\n    navigate('/dashboard', { replace: true });\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleLogin}>\n        <button type=\"submit\">Log In</button>\n      </form>\n      {/* Declarative navigation for visible static link */}\n      <p>Don't have an account? <Link to=\"/register\">Sign Up Here</Link></p>\n    </div>\n  );\n}"
      },
      "commonMistakes": [
        "Using `onClick={() => navigate('/...')}` on a button when a simple `<Link>` would provide better accessibility and right-click support.",
        "Using `window.location.href = '...'` in React apps (causes full browser refresh)."
      ],
      "proTips": [
        "Default to `<Link>` for any clickable element intended for user navigation; reserve `useNavigate` strictly for programmatic side effects."
      ]
    },
    "bangla": {
      "quickAnswer": "`<Link>` হলো ডিক্লেয়ারেটিভ JSX কম্পোনেন্ট যা ব্রাউজারে সুন্দর অ্যাক্সেসিবল `<a>` ট্যাগ রেন্ডার করে; আর `useNavigate` হলো একটি ইম্পারেটিভ হুক যা জাভাস্ক্রিপ্ট কোডের ভেতর প্রোগ্রাম্যাটিক্যালি (যেমন লগইনের পর) অন্য পেজে রিডাইরেক্ট করতে ব্যবহৃত হয়।",
      "interviewSpeech": "দুটোই পেজ পরিবর্তনের জন্য হলেও ব্যবহারের জায়গা আলাদা। যেখানে ব্যবহারকারী সরাসরি ক্লিক করে কোথাও যাবে (যেমন মেনুবার বা ফুটার), সেখানে `<Link to='/about'>` ব্যবহার করতে হয় কারণ এটি আসল HTML `<a>` ট্যাগ তৈরি করে, ফলে রাইট ক্লিক করে নিউ ট্যাবে ওপেন করা যায় এবং এসইও (SEO) ভালো হয়। আর `useNavigate` হলো ফাংশনাল কোডের ভেতর থেকে নেভিগেট করার হুক। যেমন—ফর্ম সাবমিট হওয়ার পর, পেমেন্ট সফল হলে বা টাইমার শেষ হলে কোড দিয়ে অন্য পেজে পাঠাতে `navigate('/dashboard')` ব্যবহার করা হয়।",
      "deepDive": [
        "SEO ও অ্যাক্সেসিবিলিটির জন্য `<Link>` শ্রেষ্ঠ।",
        "অ্যাসিঙ্ক কাজের শেষে রিডাইরেক্ট করার জন্য `useNavigate` অপরিহার্য।",
        "`navigate(-1)` দিয়ে ব্রাউজারের ব্যাক বাটনের কাজ করা যায়।"
      ],
      "commonMistakes": [
        "সাধারণ মেনু লিঙ্কেও বাটন বানিয়ে তার `onClick`-এ `navigate()` কল করা (এতে ইউজার রাইট-ক্লিক বা মিডল-ক্লিক করতে পারে না)।"
      ],
      "proTips": [
        "যেখানে ইউজার ক্লিক করবে সেখানে `<Link>`, আর যেখানে কোড ডিসিশন নিয়ে রিডাইরেক্ট করবে সেখানে `useNavigate`।"
      ]
    }
  },
  {
    "id": "ms-q51-custom-hooks",
    "questionNumber": 51,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What are custom hooks in React? Write a simple example.",
    "banglaQuestion": "React-এ Custom Hooks কী? একটি সাধারণ উদাহরণসহ লিখুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Custom Hooks",
      "Code Reuse",
      "DRY",
      "Composition"
    ],
    "english": {
      "quickAnswer": "A custom hook is a JavaScript function starting with `use` that encapsulates reusable, stateful component logic by composing built-in React hooks (`useState`, `useEffect`, etc.).",
      "interviewSpeech": "Custom hooks are the modern standard for sharing stateful logic between components without duplicating code. Unlike traditional patterns like Higher-Order Components (HOCs) or render props which introduced wrapper hell, custom hooks do not add extra DOM elements. A custom hook is simply a function whose name starts with `use` (enforcing React's rules of hooks) that internally calls other hooks. Each component that calls a custom hook gets completely isolated, independent state.",
      "deepDive": [
        "**Naming Convention**: Must start with `use` (e.g. `useWindowSize`, `useFetch`, `useLocalStorage`) so ESLint can enforce the Rules of Hooks.",
        "**Isolated State**: Two components calling the same custom hook do NOT share state; they share the *logic*, not the data instance.",
        "**Return Value**: Can return anything: an array tuple `[val, setVal]`, an object `{ data, loading, error }`, or single primitives."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Reusable useLocalStorage Custom Hook",
        "code": "import { useState, useEffect } from 'react';\n\n// Custom Hook to sync state with localStorage\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch {\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    try {\n      window.localStorage.setItem(key, JSON.stringify(value));\n    } catch (err) {\n      console.error(err);\n    }\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\n// Usage in any component:\nfunction ThemeToggle() {\n  const [theme, setTheme] = useLocalStorage('app_theme', 'dark');\n  return <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>Theme: {theme}</button>;\n}"
      },
      "commonMistakes": [
        "Naming a custom hook without the `use` prefix (disables React's linter checks for conditional hook execution).",
        "Thinking custom hooks share global state between components (state is strictly local to each component call)."
      ],
      "proTips": [
        "Custom hooks cleanly separate business logic from UI rendering: keep your components focused purely on presentation while custom hooks handle the heavy lifting."
      ]
    },
    "bangla": {
      "quickAnswer": "Custom Hook হলো একটি জাভাস্ক্রিপ্ট ফাংশন যার নাম `use` দিয়ে শুরু হয় এবং যা একাধিক বিল্ট-ইন হুক (`useState`, `useEffect`) একত্রিত করে রিইউজেবল স্টেটফুল লজিক তৈরি করে।",
      "interviewSpeech": "একাধিক কম্পোনেন্টে যখন একই ধরনের স্টেটফুল লজিক (যেমন ডেটা ফেচিং, ফর্ম হ্যান্ডলিং, বা লোকাল স্টোরেজ সিঙ্কিং) বারবার লিখতে হয়, তখন সেই লজিককে আলাদা করে একটি কাস্টম হুকে রূপান্তর করা হয়। এটি কোড ডুপ্লিকেশন কমায় এবং কম্পোনেন্টকে অনেক পরিষ্কার রাখে। কাস্টম হুকের নাম অবশ্যই ছোট হাতের `use` দিয়ে শুরু হতে হয় (যেমন `useFetch` বা `useAuth`)। মনে রাখতে হবে, কাস্টম হুক কেবল লজিক শেয়ার করে—প্রতিটি কম্পোনেন্টে এই হুক কল করলে সম্পূর্ণ আলাদা ও স্বাধীন স্টেট তৈরি হয়।",
      "deepDive": [
        "**মূল ধারণা**: Custom Hook হলো একটি জাভাস্ক্রিপ্ট ফাংশন যার নাম `use` দিয়ে শুরু হয় এবং যা একাধিক বিল্ট-ইন হুক (`useState`, `useEffect`) একত্রিত করে রিইউজেবল স্টেটফুল লজিক তৈরি করে।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q52-lazy-loading-in-react",
    "questionNumber": 52,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is lazy loading in React and how is it implemented?",
    "banglaQuestion": "React-এ Lazy Loading কী এবং এটি কীভাবে বাস্তবায়ন করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Lazy Loading",
      "React.lazy",
      "Suspense",
      "Performance",
      "Code Splitting"
    ],
    "english": {
      "quickAnswer": "Lazy loading is a performance technique that defers loading non-critical JavaScript bundles or components until they are actually needed, implemented using `React.lazy()` and `<Suspense>`.",
      "interviewSpeech": "By default, bundlers pack the entire application into a single massive JavaScript bundle. Users must download the whole bundle before the first page renders, severely hurting First Contentful Paint (FCP) and Time to Interactive (TTI). Lazy loading splits the code into smaller chunks that are fetched on-demand. In React, we implement this using `React.lazy(() => import('./Component'))` combined with a `<Suspense fallback={<Spinner />}>` wrapper. When the user navigates to the lazy route or opens a heavy modal, the browser downloads that chunk dynamically in the background while displaying the fallback UI.",
      "deepDive": [
        "**`React.lazy`**: Takes a function that calls a dynamic `import()`, returning a Promise resolving to a module with a default export.",
        "**`<Suspense>`**: Catches the pending promise and displays a fallback indicator until the code finishes loading.",
        "**Route-Level Splitting**: The most effective lazy loading pattern is splitting at the route boundaries in React Router."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Route-Based Lazy Loading with React.lazy and Suspense",
        "code": "import React, { Suspense, lazy } from 'react';\nimport { BrowserRouter, Routes, Route } from 'react-router-dom';\n\n// Heavy page components lazy-loaded on demand\nconst HomePage = lazy(() => import('./pages/HomePage'));\nconst AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      {/* Suspense fallback displayed while downloading the bundle chunk */}\n      <Suspense fallback={<div className=\"loading-spinner\">Loading Page...</div>}>\n        <Routes>\n          <Route path=\"/\" element={<HomePage />} />\n          <Route path=\"/analytics\" element={<AnalyticsDashboard />} />\n        </Routes>\n      </Suspense>\n    </BrowserRouter>\n  );\n}"
      },
      "commonMistakes": [
        "Using `React.lazy` without wrapping it in a `<Suspense>` boundary (causes runtime crash when the component tries to load).",
        "Lazy loading tiny components (the network overhead of an extra HTTP request outweighs the minuscule bundle savings)."
      ],
      "proTips": [
        "Combine route-level lazy loading with prefetching on link hover for near-instant page transitions."
      ]
    },
    "bangla": {
      "quickAnswer": "Lazy Loading হলো এমন একটি কৌশল যার মাধ্যমে পুরো অ্যাপের কোড একসাথে লোড না করে নির্দিষ্ট পেজ বা ভারী কম্পোনেন্টটি যখন স্ক্রিনে দরকার হবে কেবল তখনই অন-ডিমান্ড লোড করা হয়। এটি `React.lazy()` এবং `<Suspense>` দিয়ে করা হয়।",
      "interviewSpeech": "বড় রিয়্যাক্ট অ্যাপে সব কোড একসাথে বান্ডল করলে ইনিশিয়াল লোডিং সাইজ অনেক বড় হয়ে যায় এবং ওয়েবসাইট স্লো ওপেন হয়। লেজি লোডিংয়ের মাধ্যমে কোডকে ছোট ছোট চাঙ্কে (Code Splitting) ভাগ করা হয়। আমরা `React.lazy()` দিয়ে ডাইনামিক `import()` করি এবং তার চারপাশে `<Suspense fallback={<LoadingSpinner />}>` দিয়ে র‍্যাপ করি। এর ফলে ইউজার যখন ওই পেজে যায়, তখনই ব্রাউজার ফাইলটি ব্যাকগ্রাউন্ডে ডাউনলোড করে নেয় এবং ডাউনলোড হওয়া পর্যন্ত স্পিনার দেখায়। এটি সাইটের স্পিড নাটকীয়ভাবে বাড়িয়ে দেয়।",
      "deepDive": [
        "ওয়েবসাইটের Initial Load Time এবং FCP কমায়।",
        "রাউট লেভেলে লেজি লোডিং করা সবচেয়ে বেশি জনপ্রিয়।"
      ],
      "commonMistakes": [
        "`React.lazy`-র বাইরে `<Suspense>` ট্যাগ দিতে ভুলে যাওয়া (ফলে অ্যাপ ক্র্যাশ করবে)।"
      ],
      "proTips": [
        "বড় চার্ট লাইব্রেরি বা ভারী ড্যাশবোর্ড পেজের জন্য লেজি লোডিং অত্যন্ত কার্যকর।"
      ]
    }
  },
  {
    "id": "ms-q53-error-boundaries",
    "questionNumber": 53,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What are React error boundaries and why are they useful?",
    "banglaQuestion": "React-এ Error Boundaries কী এবং এগুলো কেন দরকারী?",
    "difficulty": "Advanced",
    "importance": "High",
    "tags": [
      "React",
      "Error Boundaries",
      "Error Handling",
      "componentDidCatch",
      "Class Components"
    ],
    "english": {
      "quickAnswer": "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree during rendering, lifecycle methods, and constructors, logging the error and displaying a graceful fallback UI instead of crashing the whole application.",
      "interviewSpeech": "In React 16+, an uncaught JavaScript error inside any component during rendering unmounts the entire React component tree, resulting in a blank white screen of death for users. Error Boundaries prevent this by acting like declarative `try/catch` blocks for UI components. They isolate failures: if a single comment widget or sidebar fails, the Error Boundary catches it and renders an error card, keeping the rest of the application fully functional. Currently, Error Boundaries MUST be implemented as Class components because they require `static getDerivedStateFromError()` or `componentDidCatch()` (or use the popular `react-error-boundary` package).",
      "deepDive": [
        "**Lifecycle Methods**: `static getDerivedStateFromError(error)` updates state to render fallback UI; `componentDidCatch(error, errorInfo)` logs errors to Sentry/Datadog.",
        "**What they DO NOT catch**: Event handlers (use `try/catch`), Asynchronous code (`setTimeout`, promises), Server-side rendering (SSR), or errors thrown inside the boundary itself.",
        "**Library**: In modern production apps, engineers use the NPM package `react-error-boundary` to avoid writing class boilerplate."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Error Boundary Class Component Implementation",
        "code": "class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so next render shows fallback UI\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Logged to Sentry:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div className=\"error-card\">\n          <h3>Something went wrong in this section.</h3>\n          <button onClick={() => this.setState({ hasError: false })}>Try again</button>\n        </div>\n      );\n    }\n    return this.props.children;\n  }\n}"
      },
      "commonMistakes": [
        "Expecting Error Boundaries to catch errors inside button `onClick` handlers (they only catch errors thrown during rendering and lifecycles).",
        "Putting only one top-level error boundary and letting the whole screen fail instead of granularly wrapping isolated widgets."
      ],
      "proTips": [
        "In Next.js App Router, `error.tsx` files automatically act as nested React Error Boundaries for that route segment."
      ]
    },
    "bangla": {
      "quickAnswer": "Error Boundary হলো এমন একটি বিশেষ রিয়্যাক্ট কম্পোনেন্ট যা চাইল্ড কম্পোনেন্টের রেন্ডারিংয়ের সময় ঘটা জাভাস্ক্রিপ্ট এররগুলোকে ক্যাচ করে পুরো অ্যাপ ক্র্যাশ হওয়া (হোয়াইট স্ক্রিন) ঠেকায় এবং সেখানে সুন্দর ফলব্যাক UI প্রদর্শন করে।",
      "interviewSpeech": "রিঅ্যাক্ট অ্যাপে কোনো একটি ছোট কম্পোনেন্টে রানটাইম এরর হলে পুরো পেজ ক্র্যাশ করে সাদা হয়ে যেত। Error Boundary এর সমাধান দেয়। এটি কম্পোনেন্টের চারপাশের `try/catch` ব্লকের মতো কাজ করে। যদি কোনো চাইল্ড কম্পোনেন্টে এরর হয়, তবে বাউন্ডারিটি সেটি ধরে ফেলে এবং পুরো সাইট বন্ধ না করে কেবল ওই নির্দিষ্ট জায়গায় একটি সুন্দর 'Something went wrong' মেসেজ দেখায়। এর ফলে সাইটের বাকি অংশ সচল থাকে। এটি এখনো ক্লাস কম্পোনেন্টের `componentDidCatch` এবং `static getDerivedStateFromError` মেথড দিয়ে তৈরি করতে হয়, অথবা `react-error-boundary` প্যাকেজ দিয়ে সহজেই ব্যবহার করা যায়।",
      "deepDive": [
        "পুরো পেজ হোয়াইট স্ক্রিন হওয়া থেকে রক্ষা করে।",
        "ইভেন্ট হ্যান্ডলার বা অ্যাসিঙ্ক কোডের এরর ক্যাচ করতে পারে না (সেগুলোর জন্য সাধারণ `try/catch` লাগে)।"
      ],
      "commonMistakes": [
        "বাটনের `onClick` বা `fetch` রিকোয়েস্টের এরর এটি ক্যাচ করবে এমন ভাবা।"
      ],
      "proTips": [
        "Next.js App Router-এর `error.tsx` ফাইলটি আসলে ব্যাকগ্রাউন্ডে একটি Error Boundary।"
      ]
    }
  },
  {
    "id": "ms-q54-context-api-vs-redux",
    "questionNumber": 54,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is the Context API and when should you use Redux instead?",
    "banglaQuestion": "Context API কী এবং এর বদলে কখন Redux ব্যবহার করা উচিত?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Context API",
      "Redux",
      "Redux Toolkit",
      "State Management",
      "Performance"
    ],
    "english": {
      "quickAnswer": "Context API is React's built-in dependency injection system for low-frequency global data (themes, auth), whereas Redux (via Redux Toolkit) is an external state management architecture optimized for high-frequency updates, complex business logic, and robust debugging tools.",
      "interviewSpeech": "Context API is designed to solve prop drilling for static or low-frequency data like user authentication, themes, or locale. Its limitation is performance: whenever a Context Provider's value changes, EVERY component consuming that context is forced to re-render, even if it only cared about a single unaffected property. Redux (or modern Redux Toolkit / Zustand) is engineered for high-frequency, complex state. It utilizes fine-grained selectors (`useSelector`) that only trigger re-renders when the specifically selected slice of state changes. Redux also provides middleware support (RTK Query, Thunk, Sagas) and powerful Time-Travel debugging via Redux DevTools.",
      "deepDive": [
        "**Context API Best For**: Low-frequency updates (Auth state, Dark/Light mode, Language settings). Zero extra bundle size.",
        "**Redux Toolkit Best For**: High-frequency updates, massive interconnected state trees, caching/server sync (RTK Query), strict predictability.",
        "**Render Optimization**: Redux has selector-level memoization (`useSelector`); Context lacks built-in selector subscriptions."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Context vs Redux Use Case Comparison Table",
        "code": "/*\nFeature           | Context API                | Redux Toolkit (RTK)\n--------------------------------------------------------------------------\nBundle Size       | 0 KB (Built into React)    | ~10 KB\nUpdate Frequency  | Low (Auth, Theme, Locale)  | High (Cart, Stock Tickers)\nPerformance       | Re-renders all consumers   | Precise selector-level renders\nDebugging         | Basic React DevTools       | Time-Travel Redux DevTools\nMiddleware        | Manual / None              | Built-in (RTK Query, Thunk)\n*/"
      },
      "commonMistakes": [
        "Putting high-frequency changing state (like keystrokes or animations) into Context API, resulting in sluggish, laggy apps.",
        "Overengineering simple applications by installing Redux when basic React state and Context are more than sufficient."
      ],
      "proTips": [
        "A killer interview answer: 'Context API is a dependency injection tool, not a full state management library. Redux is a complete state management architecture.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Context API হলো রিয়্যাক্টের নিজস্ব বিল্ট-ইন ফিচার যা কম ঘন ঘন পরিবর্তিত ডেটা (যেমন থিম, ইউজার লগইন) সহজে চাইল্ডে পাঠায়। আর Redux হলো শক্তিশালী এক্সটারনাল স্টেট ম্যানেজমেন্ট লাইব্রেরি যা জটিল ও দ্রুত পরিবর্তনশীল ডেটা এবং চমৎকার ডিবাগিং টুলস প্রদান করে।",
      "interviewSpeech": "সহজ কথায়, থিম পরিবর্তন বা লগইন ইউজারের তথ্যের মতো যে ডেটাগুলো ঘন ঘন বদলায় না, সেগুলোর জন্য Context API সেরা কারণ এর জন্য অতিরিক্ত কোনো লাইব্রেরি ইনস্টল করতে হয় না। কিন্তু Context-এর বড় সমস্যা হলো—ভ্যালু সামান্য বদলালেও সব কনজিউমার কম্পোনেন্ট রি-রেন্ডার হয়। অন্যদিকে Redux বা Zustand-এ `useSelector` থাকে, যার ফলে পুরো স্টেটের মধ্যে শুধু নির্দিষ্ট অংশ বদলালে কেবল সংশ্লিষ্ট কম্পোনেন্টটুকুই রি-রেন্ডার হয়। এছাড়া বড় বড় ই-কমার্স, স্টক মার্কেট অ্যাপ বা জটিল ব্যবসায়িক লজিকের ক্ষেত্রে Redux DevTools ও মিডলওয়্যারের সুবিধার কারণে Redux অপরিহার্য।",
      "deepDive": [
        "Context API: থিম, ভাষা বা লগইন ইউজারের তথ্যের জন্য হালকা ও সেরা।",
        "Redux: বড় প্রজেক্ট, কার্ট সিস্টেম, লাইভ ডেটা এবং পারফরম্যান্স অপটিমাইজেশনের জন্য সেরা।"
      ],
      "commonMistakes": [
        "খুব ঘন ঘন পরিবর্তন হওয়া স্টেট Context-এ রাখা (ফলে পুরো অ্যাপ অহেতুক রি-রেন্ডার হয়ে স্লো হয়)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'Context API হলো ডেটা পাস করার ট্রান্সপোর্ট সিস্টেম, আর Redux হলো একটি পূর্ণাঙ্গ স্টেট ম্যানেজমেন্ট আর্কিটেকচার।'"
      ]
    }
  },
  {
    "id": "ms-q55-reconciliation-in-react",
    "questionNumber": 55,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "Explain the concept of reconciliation in React.",
    "banglaQuestion": "React-এ Reconciliation-এর ধারণাটি ব্যাখ্যা করুন।",
    "difficulty": "Advanced",
    "importance": "High",
    "tags": [
      "React",
      "Reconciliation",
      "Diffing Algorithm",
      "Virtual DOM",
      "Fiber",
      "Heuristics"
    ],
    "english": {
      "quickAnswer": "Reconciliation is the algorithm React uses to compare two Virtual DOM trees (the diffing phase) and compute the minimal set of real DOM operations required to update the screen efficiently.",
      "interviewSpeech": "A generic algorithm to find the minimal tree distance has an O(n^3) time complexity—for 1,000 elements, that would take a billion comparisons. React implements an O(n) heuristic diffing algorithm based on two key assumptions: 1) Two elements of different types will produce fundamentally different trees (e.g. replacing `<div>` with `<span>` unmounts and destroys the entire old tree along with all child state). 2) The developer can hint which child elements remain stable across renders using a unique `key` prop. React Fiber carries out reconciliation incrementally in two phases: the asynchronous, interruptible 'Render phase' (diffing) and the synchronous, non-interruptible 'Commit phase' (applying DOM patches).",
      "deepDive": [
        "**Render Phase**: Calculates the diffs (pure, can be paused/aborted by Fiber scheduler).",
        "**Commit Phase**: Applies updates to the real DOM (fast, synchronous, mutations cannot be interrupted).",
        "**Type Change**: Changing `<Header>` to `<Footer>` triggers full destruction and remounting."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Reconciliation Diffing Logic in Action",
        "code": "// Scenario A: Same type, different attribute -> SURGICAL PATCH\n// Old: <div className=\"before\" title=\"stuff\" />\n// New: <div className=\"after\" title=\"stuff\" />\n// Result: React modifies only className on existing DOM node!\n\n// Scenario B: Different type -> COMPLETE REMOUNT\n// Old: <div><Counter /></div>\n// New: <span><Counter /></div>\n// Result: <div> and Counter are destroyed! Counter's state resets to 0!"
      },
      "commonMistakes": [
        "Assuming reconciliation touches the real DOM directly during comparison (diffing is performed entirely in-memory using Virtual DOM objects).",
        "Declaring a component inside another component's render function (changes the component type reference on every render, triggering full tree destruction)."
      ],
      "proTips": [
        "Highlight the two phases of React Fiber: 'Render/Reconciliation phase is asynchronous and interruptible; Commit phase is synchronous.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Reconciliation হলো রিয়্যাক্টের সেই Diffing অ্যালগরিদম যার মাধ্যমে দুটি ভার্চুয়াল ডম ট্রির মধ্যে পার্থক্য হিসাব করা হয় এবং সর্বনিম্ন খরচে ব্রাউজারের আসল ডম আপডেট করার পরিকল্পনা তৈরি করা হয়।",
      "interviewSpeech": "সাধারণভাবে দুটি ট্রির মধ্যে পার্থক্য বের করতে O(n^3) সময় লাগে যা খুবই ধীরগতির। রিয়্যাক্ট দুটি অনুমানের (Heuristics) উপর ভিত্তি করে একটি O(n) অ্যালগরিদম চালায়: ১) দুটি ভিন্ন টাইপের এলিমেন্ট (যেমন `<div>` পরিবর্তন হয়ে `<span>` হওয়া) পুরো পুরোনো ট্রিকে ধ্বংস করে নতুন ট্রি বানায়। ২) `key` প্রপসের সাহায্যে চাইল্ড এলিমেন্টগুলোকে ট্র্যাক করা যায়। রিয়্যাক্ট ফাইবারের কাজ দুটি ভাগে সম্পন্ন হয়: রেন্ডার ফেজ (যেখানে পার্থক্য হিসাব করা হয় এবং কাজ থামানো বা রি-শিডিউল করা যায়) এবং কমিট ফেজ (যেখানে চূড়ান্ত ডম আপডেট এক নিমেষে অ্যাপ্লাই করা হয়)।",
      "deepDive": [
        "কম্পিউটেশনাল টাইম কমপ্লেক্সিটি O(n)।",
        "Fiber আর্কিটেকচার রেন্ডারিংয়ের কাজকে ছোট ছোট ভাগে ভাগ করে মসৃণ ফ্রেমরেট নিশ্চিত করে।"
      ],
      "commonMistakes": [
        "একটি কম্পোনেন্টের রেন্ডার ফাংশনের ভেতরে আরেকটি নতুন কম্পোনেন্ট তৈরি করা—এতে প্রতিবার টাইপ বদলে পুরো ট্রি ধ্বংস হয়ে যায়।"
      ],
      "proTips": [
        "বলুন: 'রিকনসিলিয়েশন হলো হিসাব করার পর্যায় (Render Phase), আর স্ক্রিনে পরিবর্তনের পর্যায় হলো Commit Phase।'"
      ]
    }
  },
  {
    "id": "ms-q56-react-fragment-vs-empty-tags",
    "questionNumber": 56,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is the difference between React.Fragment and empty tags (<>)?",
    "banglaQuestion": "React.Fragment এবং খালি ট্যাগ (<>)-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "React",
      "Fragments",
      "JSX",
      "Keys",
      "Clean HTML"
    ],
    "english": {
      "quickAnswer": "`<>...</>` is syntactic sugar for `<React.Fragment>...</React.Fragment>`. The ONLY difference is that `<React.Fragment>` supports the `key` attribute (essential when mapping over lists), whereas shorthand `<>` cannot accept any attributes.",
      "interviewSpeech": "React components must return a single root JSX element because JSX transpiles to `React.createElement()` calls, which can only return a single object. Adding extra wrapper `<div>` tags pollutes the DOM, creates accessibility issues, and breaks CSS layouts like Flexbox or CSS Grid. Fragments allow grouping multiple children without adding an extra node to the DOM. The short syntax `<>...</>` is clean and preferred for normal grouping, but it cannot accept keys. When rendering an array of elements where each item requires a unique `key` prop, you must use explicit `<React.Fragment key={item.id}>` syntax.",
      "deepDive": [
        "**No DOM node**: Fragments disappear completely when rendered into the real DOM.",
        "**Key support**: `<React.Fragment key={id}>` is the ONLY form of fragment that accepts props (`key` is the only supported prop).",
        "**CSS Flexbox/Grid**: Fragments prevent breaking grid item hierarchy."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Short Syntax vs Keyed React.Fragment in Lists",
        "code": "// 1. Shorthand syntax: Perfect for simple grouping\nfunction Header() {\n  return (\n    <>\n      <h1>Main Title</h1>\n      <p>Subtitle</p>\n    </>\n  );\n}\n\n// 2. Explicit React.Fragment: REQUIRED when passing 'key'\nfunction Glossary({ items }) {\n  return (\n    <dl>\n      {items.map(item => (\n        // Shorthand <key={item.id}> is a SYNTAX ERROR!\n        <React.Fragment key={item.id}>\n          <dt>{item.term}</dt>\n          <dd>{item.definition}</dd>\n        </React.Fragment>\n      ))}\n    </dl>\n  );\n}"
      },
      "commonMistakes": [
        "Attempting to pass a key or className to shorthand fragment `< key={id}>` (invalid JSX syntax).",
        "Adding useless `<div>` wrappers everywhere that break CSS grid/flex layouts."
      ],
      "proTips": [
        "Always use `<React.Fragment key={...}>` in definition lists `<dl>`, tables `<tr>/<td>`, and mapped arrays."
      ]
    },
    "bangla": {
      "quickAnswer": "`<>...</>` হলো `<React.Fragment>`-এর সংক্ষিপ্ত রূপ। এদের মধ্যে একমাত্র পার্থক্য হলো: `<React.Fragment>`-এ `key` অ্যাট্রিবিউট পাস করা যায় (লিস্টে ম্যাপ করার জন্য জরুরি), কিন্তু শর্টহ্যান্ড `<>`-এ কোনো অ্যাট্রিবিউট বা কি দেওয়া যায় না।",
      "interviewSpeech": "রিঅ্যাক্টে একাধিক উপাদান রিটার্ন করতে হলে কোনো প্যারেন্ট ট্যাগ দিয়ে মুড়িয়ে দিতে হয়। কিন্তু অতিরিক্ত `<div>` বসালে তা ব্রাউজারের আসল ডম নষ্ট করে এবং Flexbox বা Grid লেআউটে সমস্যা করে। ফ্র্যাগমেন্ট কোনো অদৃশ্য মোড়কের মতো কাজ করে যা কোনো বাড়তি ডম নোড তৈরি করে না। সাধারণ জায়গায় `<>...</>` ব্যবহার করা সবচেয়ে ক্লিন। তবে লুপ বা ম্যাপের ভেতর যখন প্রতিটি ফ্র্যাগমেন্টের একটি ইউনিক `key` দরকার হয়, তখন শর্টহ্যান্ডের বদলে পুরো `<React.Fragment key={item.id}>` লিখতে হয়।",
      "deepDive": [
        "**মূল ধারণা**: `<>...</>` হলো `<React.Fragment>`-এর সংক্ষিপ্ত রূপ। এদের মধ্যে একমাত্র পার্থক্য হলো: `<React.Fragment>`-এ `key` অ্যাট্রিবিউট পাস করা যায় (লিস্টে ম্যাপ করার জন্য জরুরি), কিন্তু শর্টহ্যান্ড `<>`-এ কোনো অ্যাট্রিবিউট বা কি দেওয়া যায় না।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q57-forms-in-react",
    "questionNumber": 57,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "How do you handle forms in React? Explain with Formik or react-hook-form.",
    "banglaQuestion": "React-এ কীভাবে ফর্ম হ্যান্ডেল করা হয়? Formik বা react-hook-form দিয়ে ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Forms",
      "react-hook-form",
      "Formik",
      "Validation",
      "Zod"
    ],
    "english": {
      "quickAnswer": "Forms in React can be handled manually using controlled components (`useState`), or via specialized libraries like `react-hook-form` and `Formik` combined with schema validation libraries like `Zod` or `Yup` for peak performance and minimal boilerplate.",
      "interviewSpeech": "Handling complex forms with native `useState` requires dozens of lines of boilerplate for values, errors, touched states, and validation logic, and re-renders the entire component on every keystroke. Modern production React apps use `react-hook-form` (RHF). RHF leverages uncontrolled components with refs under the hood, meaning typing into an input does NOT trigger a component re-render unless explicitly subscribed. It integrates seamlessly with schema validators like Zod via `@hookform/resolvers/zod`, handling instant client-side validation, error messages, and form submission with tiny bundle size and blazing speed.",
      "deepDive": [
        "**React Hook Form advantages**: Minimal re-renders (uncontrolled inputs with refs), tiny bundle size (~8KB), robust TypeScript integration.",
        "**Formik**: Controlled components under the hood, simpler mental model, but more re-render overhead on large forms.",
        "**Schema Validation**: Pair with Zod (`z.object({ email: z.string().email() })`) for type-safe forms."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Modern Type-Safe Form with react-hook-form and Zod",
        "code": "import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\nimport { z } from 'zod';\n\nconst schema = z.object({\n  email: z.string().email('Invalid email address'),\n  password: z.string().min(8, 'Password must be 8+ chars')\n});\n\nfunction LoginForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({\n    resolver: zodResolver(schema)\n  });\n\n  const onSubmit = async (data) => {\n    console.log('Valid Form Data:', data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <input {...register('email')} placeholder=\"Email\" />\n      {errors.email && <p className=\"error\">{errors.email.message}</p>}\n\n      <input type=\"password\" {...register('password')} placeholder=\"Password\" />\n      {errors.password && <p className=\"error\">{errors.password.message}</p>}\n\n      <button type=\"submit\" disabled={isSubmitting}>Submit</button>\n    </form>\n  );\n}"
      },
      "commonMistakes": [
        "Writing hundreds of lines of manual `useState` for large 20-field forms.",
        "Forgetting to register inputs with `{...register('name')}` in react-hook-form."
      ],
      "proTips": [
        "Recommend the modern industry gold standard: '`react-hook-form` paired with `Zod` provides the best performance, smallest bundle, and end-to-end TypeScript safety.'"
      ]
    },
    "bangla": {
      "quickAnswer": "React-এ ফর্ম সাধারণ `useState` দিয়ে হ্যান্ডেল করা যায়, তবে আধুনিক বড় প্রজেক্টে পারফরম্যান্স এবং ক্লিন কোডের জন্য `react-hook-form` বা `Formik` এর সাথে `Zod` ভ্যালিডেশন ব্যবহার করা হয়।",
      "interviewSpeech": "সাধারণ `useState` দিয়ে ফর্ম বানালে প্রতি ক্লিকে পুরো পেজ রি-রেন্ডার হয় এবং এরর মেসেজ, ভ্যালিডেশন লিখতে প্রচুর কোড লিখতে হয়। বর্তমানে ইন্ডাস্ট্রিতে `react-hook-form` সবচেয়ে বেশি জনপ্রিয়। এটি ইনপুটের ভেতরে `useRef` ব্যবহার করে কাজ করায় টাইপ করার সময় কোনো অপ্রয়োজনীয় রি-রেন্ডার হয় না, ফলে ফর্ম খুব ফাস্ট থাকে। এর সাথে `Zod` ভ্যালিডেটর ব্যবহার করলে মাত্র কয়েক লাইনেই ইমেইল, পাসওয়ার্ড বা ফোন নাম্বারের চমৎকার টাইপ-সেফ ভ্যালিডেশন করা যায়।",
      "deepDive": [
        "`react-hook-form`: রি-রেন্ডার এড়ায়, অত্যন্ত হালকা ও ফাস্ট।",
        "`Zod`: ফর্মে কী ধরনের ডেটা আসবে তার স্কিমা ও এরর মেসেজ ঠিক করে দেয়।"
      ],
      "commonMistakes": [
        "বড় ফর্মে ম্যানুয়ালি ২০টি আলাদা `useState` বানিয়ে কোড জগাখিচুড়ি করে ফেলা।"
      ],
      "proTips": [
        "ইন্টারভিউতে `react-hook-form` + `Zod` এর কম্বিনেশনের কথা উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "ms-q58-code-splitting-in-react",
    "questionNumber": 58,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What is code splitting in React and how does it improve performance?",
    "banglaQuestion": "React-এ Code Splitting কী এবং এটি কীভাবে অ্যাপ্লিকেশনের পারফরম্যান্স উন্নত করে?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "React",
      "Code Splitting",
      "Webpack",
      "Vite",
      "Performance",
      "Core Web Vitals"
    ],
    "english": {
      "quickAnswer": "Code splitting is the process of breaking up a single large JavaScript application bundle into smaller, discrete chunks that are loaded on-demand or in parallel, drastically reducing initial page load time.",
      "interviewSpeech": "As applications grow, third-party libraries and page components bloat the single bundled JavaScript file (`bundle.js`) to several megabytes. The browser must download, parse, and execute this massive file before rendering a single interactive pixel, resulting in poor Lighthouse scores and high bounce rates. Code splitting breaks the application into smaller chunks. The user only downloads the critical JavaScript necessary to render the current viewport (Initial Chunk), while other routes and heavy modules (like PDF generators or admin panels) are loaded asynchronously when navigated to.",
      "deepDive": [
        "**Core Web Vitals**: Directly improves FCP (First Contentful Paint), LCP (Largest Contentful Paint), and INP (Interaction to Next Paint).",
        "**Techniques**: Dynamic `import()`, `React.lazy()`, route-based splitting, and component-level vendor splitting.",
        "**Framework Level**: Next.js automatically code-splits every page file in the `app` or `pages` directory out of the box."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Component-Level Dynamic Import Code Splitting",
        "code": "// Instead of importing at top level:\n// import { generatePDFReport } from './heavyPdfLibrary'; // Adds 500KB to initial bundle!\n\nasync function handleDownloadReport(data) {\n  // Code-split: Only downloaded when the user actually clicks the button!\n  const { generatePDFReport } = await import('./heavyPdfLibrary');\n  generatePDFReport(data);\n}"
      },
      "commonMistakes": [
        "Over-splitting into hundreds of tiny 1KB files (HTTP request overhead hurts performance).",
        "Importing massive libraries in top-level app layouts where only a single subpage needs them."
      ],
      "proTips": [
        "Mention that Next.js and Vite configure route-based code splitting automatically by default."
      ]
    },
    "bangla": {
      "quickAnswer": "Code Splitting হলো বিশাল সাইজের জাভাস্ক্রিপ্ট বান্ডল ফাইলকে ছোট ছোট খণ্ডে ভাগ করা, যাতে প্রথমবার শুধু প্রয়োজনীয় কোডটুকু লোড হয় এবং বাকি অংশগুলো প্রয়োজন অনুযায়ী লোড হয়ে পেজের স্পিড বাড়িয়ে দেয়।",
      "interviewSpeech": "অ্যাপ্লিকেশন বড় হলে সব কোড মিলে ৫-১০ মেগাবাইটের একটি বিশাল ফাইল তৈরি হয়। মোবাইল বা স্লো নেটে ইউজার ঢুকলে পুরো ফাইল ডাউনলোড হতে অনেক সময় নেয় এবং স্ক্রিন আটকে থাকে। Code Splitting এই ফাইলটিকে ছোট ছোট চাঙ্কে ভেঙে ফেলে। ইউজার হোমপেজে ঢুকলে কেবল হোমপেজের কোডটুকু ডাউনলোড হয়। অ্যাডমিন ড্যাশবোর্ড বা পিডিএফ ডাউনলোডের মতো ভারী ফিচারগুলো তখনই ব্যাকগ্রাউন্ডে আসে যখন ইউজার ওই পেজে ক্লিক করে। এটি ওয়েবসাইটের Initial Load Time নাটকীয়ভাবে কমিয়ে দেয়।",
      "deepDive": [
        "Lighthouse স্কোর এবং Core Web Vitals উন্নত করে।",
        "ডাইনামিক `import()` এবং `React.lazy()` দিয়ে করা হয়।",
        "Next.js স্বয়ংক্রিয়ভাবেই প্রতিটি পেজকে কোড-স্প্লিট করে।"
      ],
      "commonMistakes": [
        "হোমপেজের ফাইলে এমন কোনো লাইব্রেরি ইমপোর্ট করে রাখা যা শুধু সেটিংস পেজে ব্যবহৃত হয়।"
      ],
      "proTips": [
        "বলুন: 'নেক্সটজেএস প্রতিটি পেজ ও রাউটের জন্য স্বয়ংক্রিয়ভাবে কোড স্প্লিটিং করে দেয়।'"
      ]
    }
  },
  {
    "id": "ms-q59-react-portals",
    "questionNumber": 59,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "What are portals in React and when are they useful?",
    "banglaQuestion": "React Portals কী এবং এগুলো কখন দরকার হয়?",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "React",
      "Portals",
      "createPortal",
      "Modals",
      "Tooltips",
      "DOM Hierarchy"
    ],
    "english": {
      "quickAnswer": "`ReactDOM.createPortal()` provides a way to render a child component into a different DOM node that exists outside the parent component's DOM hierarchy, while maintaining normal React event bubbling and context.",
      "interviewSpeech": "In HTML/CSS, child elements are bound by the styling rules of their parent elements—such as `overflow: hidden`, `z-index`, and `transform` stacking contexts. If you build a modal dialog, tooltip, or dropdown inside a deeply nested container that has `overflow: hidden`, the modal will be visually clipped or trapped behind other elements. React Portals solve this cleanly: `createPortal(children, domNode)` teleports the rendered HTML DOM nodes directly to the end of `document.body` or a dedicated `#modal-root`. Crucially, even though the DOM node lives elsewhere, React synthetic event bubbling and context propagation still work normally according to the React Virtual DOM component tree.",
      "deepDive": [
        "**Signature**: `ReactDOM.createPortal(children, targetDomNode)`.",
        "**Event Bubbling**: A click inside the portal still bubbles up to the React parent component in the Virtual DOM tree, even if they are in completely separate real DOM nodes.",
        "**Common Use Cases**: Modals, Dialogs, Tooltips, Global Toast notifications, floating context menus."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Modal Dialog using React createPortal",
        "code": "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nfunction Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n\n  // Teleports markup directly into #modal-root or document.body!\n  return ReactDOM.createPortal(\n    <div className=\"modal-backdrop\" onClick={onClose}>\n      <div className=\"modal-content\" onClick={(e) => e.stopPropagation()}>\n        {children}\n        <button onClick={onClose}>Close</button>\n      </div>\n    </div>,\n    document.getElementById('modal-root') || document.body\n  );\n}"
      },
      "commonMistakes": [
        "Forgetting to stop event propagation (`e.stopPropagation()`) if clicking modal content shouldn't close the backdrop.",
        "Thinking event bubbling doesn't work across portals (React synthetic events DO bubble through portals according to the React tree)."
      ],
      "proTips": [
        "Emphasize the dual nature: 'DOM-wise, it lives at document.body; React-wise, it remains a true child in the Virtual DOM.'"
      ]
    },
    "bangla": {
      "quickAnswer": "React Portal হলো এমন একটি ফিচার যার মাধ্যমে কোনো চাইল্ড কম্পোনেন্টকে তার প্যারেন্ট DOM কাঠামোর বাইরে গিয়ে অন্য কোনো DOM এলিমেন্টে (যেমন `document.body`-তে) রেন্ডার করা যায়।",
      "interviewSpeech": "প্যারেন্ট কম্পোনেন্টে যদি CSS-এর `overflow: hidden` বা কোনো অদ্ভুত `z-index` বা `transform` থাকে, তবে তার ভেতরের মোডাল, টুলটিপ বা ড্রপডাউন কেটে যায় বা পেছনের স্তরে আটকে থাকে। `ReactDOM.createPortal()` দিয়ে ওই মোডালটিকে সরাসরি প্যারেন্টের বাইরে নিয়ে `<body>` ট্যাগের শেষে বা `#modal-root`-এ রেন্ডার করা যায়। মজার ব্যাপার হলো, আসল DOM-এ এটি বাইরে চলে গেলেও রিয়্যাক্টের ভার্চুয়াল ট্রিতে এটি আগের মতোই চাইল্ড থাকে, ফলে ইভেন্ট বাবলিং (Event Bubbling) এবং কনটেক্সট স্বাভাবিকভাবেই কাজ করে।",
      "deepDive": [
        "মোডাল, ডায়ালগ, টোস্ট এবং টুলটিপের জন্য অপরিহার্য।",
        "ভার্চুয়াল ডমে এটি চাইল্ড হিসেবেই থাকে, তাই ইভেন্ট বাবলিং অক্ষুণ্ণ থাকে।"
      ],
      "commonMistakes": [
        "মনে করা যে পোর্টাল ব্যবহার করলে ইভেন্ট প্যারেন্টে বাবল হবে না।"
      ],
      "proTips": [
        "মোডাল পপআপ বানানোর জন্য রিয়্যাক্টে পোর্টালই সবচেয়ে স্ট্যান্ডার্ড উপায়।"
      ]
    }
  },
  {
    "id": "ms-q60-functional-component-lifecycle",
    "questionNumber": 60,
    "module": "React Advanced",
    "topic": "Routing, Performance & Patterns",
    "question": "Explain the lifecycle of a React functional component with hooks.",
    "banglaQuestion": "Hooks-এর সাহায্যে React Functional Component-এর লাইফসাইকেল ব্যাখ্যা করুন।",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "React",
      "Component Lifecycle",
      "Hooks",
      "useEffect",
      "Mounting",
      "Unmounting"
    ],
    "english": {
      "quickAnswer": "A functional component's lifecycle revolves around three main phases: Mounting (initial render and effects), Updating (state/prop changes and effect re-runs), and Unmounting (cleanup functions), managed declaratively using `useEffect`.",
      "interviewSpeech": "Unlike class components with rigid lifecycle methods, functional components think in terms of synchronization rather than time. The lifecycle consists of: 1) **Mounting**: Component executes, JSX evaluates to Virtual DOM, browser paints the screen, and `useEffect(..., [])` runs its callback. 2) **Updating**: A state or prop change triggers a re-render. React diffs the Virtual DOM and updates the real DOM. If `useEffect(..., [deps])` has changed dependencies, it runs the cleanup function from the previous render, then runs the new effect. 3) **Unmounting**: When removed from the tree, React calls the cleanup function returned by `useEffect`, releasing subscriptions and timers.",
      "deepDive": [
        "**Mounting mapping**: `useEffect(() => { ... }, [])` equivalent to `componentDidMount`.",
        "**Updating mapping**: `useEffect(() => { ... }, [dep])` equivalent to `componentDidUpdate`.",
        "**Unmounting mapping**: `useEffect(() => { return () => cleanup(); }, [])` equivalent to `componentWillUnmount`.",
        "**useLayoutEffect**: Runs synchronously immediately after DOM mutations but *before* the browser paints."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Complete Lifecycle in a Single Functional Component",
        "code": "function LifecycleDemo({ userId }) {\n  const [data, setData] = React.useState(null);\n\n  // 1. Mount & Update: Synchronizes with userId\n  React.useEffect(() => {\n    console.log('1. Effect triggered: Mounted or userId changed to', userId);\n\n    // 2. Unmount / Before-next-run Cleanup:\n    return () => {\n      console.log('2. Cleanup triggered: Unmounted or userId is about to change');\n    };\n  }, [userId]);\n\n  return <div>User: {userId}</div>;\n}"
      },
      "commonMistakes": [
        "Thinking `useEffect` runs before the screen paints (it runs after paint to prevent blocking UI; use `useLayoutEffect` if you must measure the DOM before paint).",
        "Forgetting cleanup functions on subscriptions, leaving dangling listeners in memory."
      ],
      "proTips": [
        "Key phrase: 'Hooks shifted the mental model from lifecycle events (when did it happen) to synchronization with state and external systems (what does it need to sync with).'"
      ]
    },
    "bangla": {
      "quickAnswer": "ফাংশনাল কম্পোনেন্টের লাইফসাইকেল তিনটি প্রধান ধাপে বিভক্ত: Mounting (স্ক্রিনে প্রথম আসা), Updating (স্টেট বা প্রপস পরিবর্তন হওয়া), এবং Unmounting (স্ক্রিন থেকে মুছে যাওয়া)। এগুলো `useEffect` হুকের মাধ্যমে পরিচালিত হয়।",
      "interviewSpeech": "ক্লাস কম্পোনেন্টে লাইফসাইকেল মেথডগুলো আলাদা ছিল, কিন্তু হুকসে সবকিছু সিঙ্ক্রোনাইজেশনের উপর নির্ভর করে: ১) Mounting: কম্পোনেন্টটি প্রথমবার রেন্ডার হয় এবং DOM স্ক্রিনে আসার পর `useEffect(..., [])` কলব্যাক চলে। ২) Updating: স্টেট বা প্রপস পরিবর্তন হলে কম্পোনেন্ট পুনরায় রেন্ডার হয়। ডিপেনডেন্সি অ্যারের মান পরিবর্তিত হলে আগের এফেক্টের ক্লিনআপ ফাংশন চলে, তারপর নতুন এফেক্ট এক্সিকিউট হয়। ৩) Unmounting: কম্পোনেন্ট যখন স্ক্রিন থেকে বিদায় নেয়, তখন `useEffect`-এর রিটার্ন করা ক্লিনআপ ফাংশন চলে টাইমার, লিসেনার বা রিকোয়েস্ট মেমোরি থেকে মুছে দেয়।",
      "deepDive": [
        "মাউন্ট: `useEffect(() => {}, [])` (কম্পোনেন্ট প্রথমবার আসার পর চলে)।",
        "আপডেট: `useEffect(() => {}, [deps])` (ডিপেনডেন্সি পরিবর্তিত হলে চলে)।",
        "আনমাউন্ট: `return () => cleanup()` (বিদায় নেওয়ার সময় মেমোরি ক্লিন করে)।"
      ],
      "commonMistakes": [
        "`useEffect` ব্রাউজার পেইন্টের আগে চলে এমন ভাবা। এটি পেইন্টের পরে চলে যাতে UI আটকায় না।"
      ],
      "proTips": [
        "সহজে বলুন: 'হুকস আসার পর লাইফসাইকেলের চেয়ে স্টেট ও ডেটার সাথে UI সিঙ্ক রাখাই আসল লক্ষ্য।'"
      ]
    }
  },
  {
    "id": "ms-q61-nodejs-vs-browser",
    "questionNumber": 61,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is Node.js and how does it differ from browser JavaScript?",
    "banglaQuestion": "Node.js কী এবং এটি ব্রাউজারের JavaScript থেকে কীভাবে আলাদা?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "Runtime",
      "V8 Engine",
      "Architecture",
      "Backend"
    ],
    "english": {
      "quickAnswer": "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine that executes JavaScript outside the browser on the server.",
      "interviewSpeech": "Before 2009, JavaScript ran exclusively inside web browsers to animate UI and handle user clicks. Ryan Dahl created Node.js by taking Chrome's high-performance V8 C++ engine and combining it with `libuv` (a C library providing an event loop and thread pool) to run JavaScript directly on the operating system. The main differences: 1) **Environment**: Browser JS interacts with web pages (DOM, `window`, `document`, CSS); Node.js interacts with the OS (filesystem `fs`, network sockets `http`, child processes `child_process`). 2) **Global object**: In browsers, it is `window`; in Node.js, it is `global`. 3) **Security**: Browsers run in a strict sandbox for client safety, whereas Node.js has full administrative access to local files and system resources.",
      "deepDive": [
        "**V8 Engine**: Compiles JS directly to native machine code.",
        "**libuv**: Provides event loop, non-blocking I/O, and 4-thread background pool for OS tasks.",
        "**No DOM**: `window`, `document`, `localStorage` do NOT exist in Node.js (unless polyfilled)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Accessing Operating System in Node.js vs Browser",
        "code": "// In Node.js: Direct access to OS and Filesystem\nconst os = require('os');\nconst fs = require('fs');\n\nconsole.log('CPU Architecture:', os.arch());\nconsole.log('Total System Memory (GB):', (os.totalmem() / 1e9).toFixed(2));\n// In browser: window.document (DOM manipulation, strictly sandboxed)"
      },
      "commonMistakes": [
        "Calling Node.js a programming language or framework (it is an execution runtime environment).",
        "Trying to access `window` or `document` inside Node.js code."
      ],
      "proTips": [
        "Mention the two core components: 'Node.js = V8 Engine (for JS execution) + libuv (for async I/O and event loop).'"
      ]
    },
    "bangla": {
      "quickAnswer": "Node.js হলো Google Chrome-এর V8 ইঞ্জিনের উপর তৈরি একটি ওপেন-সোর্স জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট (Runtime Environment), যা দিয়ে ব্রাউজারের বাইরে সার্ভারে জাভাস্ক্রিপ্ট কোড চালানো যায়।",
      "interviewSpeech": "পূর্বে জাভাস্ক্রিপ্ট শুধু ব্রাউজারের ভেতর DOM পরিবর্তন বা অ্যানিমেশনের কাজে লাগত। কিন্তু ২০০৯ সালে Chrome-এর শক্তিশালী V8 ইঞ্জিন এবং C লাইব্রেরি `libuv` একত্রিত করে Node.js তৈরি করা হয়, যার ফলে সার্ভার-সাইডে ফাইল সিস্টেম পড়া, ডাটাবেজ কানেক্ট করা এবং ব্যাকএন্ড API বানানো সম্ভব হয়। ব্রাউজারের জাভাস্ক্রিপ্টে `window`, `document` থাকে কিন্তু ফাইল সিস্টেম বা হার্ডওয়্যার অ্যাক্সেস থাকে না নিরাপত্তার কারণে। আর Node.js-এ কোনো DOM নেই, কিন্তু এতে ফাইল সিস্টেম (`fs`), অপারেটিং সিস্টেম (`os`), এবং নেটওয়ার্কিংয়ের মতো সব ধরনের সার্ভার সুবিধা রয়েছে।",
      "deepDive": [
        "Node.js কোনো ভাষা বা ফ্রেমওয়ার্ক নয়, এটি একটি রানটাইম।",
        "V8 ইঞ্জিন জাভাস্ক্রিপ্টকে সরাসরি মেশিন কোডে রূপান্তর করে।",
        "`libuv` ব্যাকগ্রাউন্ড থ্রেড ও ইভেন্ট লুপ পরিচালনা করে।"
      ],
      "commonMistakes": [
        "Node.js-কে একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ বলা।"
      ],
      "proTips": [
        "মনে রাখবেন: ব্রাউজারের গ্লোবাল অবজেক্ট হলো `window`, আর নোডজেএস-এর গ্লোবাল অবজেক্ট হলো `global`।"
      ]
    }
  },
  {
    "id": "ms-q62-nodejs-event-loop",
    "questionNumber": 62,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is the Node.js event loop and how does it handle async operations?",
    "banglaQuestion": "Node.js Event Loop কী এবং এটি কীভাবে অ্যাসিনক্রোনাস কাজ পরিচালনা করে?",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "Event Loop",
      "libuv",
      "Phases",
      "Thread Pool",
      "Non-Blocking"
    ],
    "english": {
      "quickAnswer": "The Node.js event loop is a single-threaded orchestrator provided by `libuv` that continuously cycles through 6 distinct phases to execute non-blocking asynchronous callbacks, offloading heavy I/O and crypto tasks to a C++ background thread pool.",
      "interviewSpeech": "Even though Node.js runs JavaScript on a single thread, it achieves high-throughput non-blocking I/O through `libuv`'s event loop. When asynchronous tasks are initiated—like network requests, file reading, or cryptography—Node.js delegates them to either kernel async APIs (epoll/kqueue) or libuv's internal 4-thread background worker pool. Once the operation finishes, its callback is placed into the appropriate event loop phase. The event loop iterates continuously through 6 phases: 1) Timers (`setTimeout`), 2) Pending I/O callbacks, 3) Idle/prepare, 4) Poll (retrieves new I/O events), 5) Check (`setImmediate`), and 6) Close callbacks. Microtasks (`process.nextTick` and Promises) execute immediately between phase transitions.",
      "deepDive": [
        "**6 Phases**: Timers -> Pending Callbacks -> Idle/Prepare -> Poll -> Check -> Close.",
        "**`process.nextTick()`**: Runs immediately before any other microtask or phase transition (higher priority than `Promise.then`).",
        "**Thread Pool**: Default size is 4 threads (configurable via `UV_THREADPOOL_SIZE=8`), used for fs, crypto, dns lookups, and zlib."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Node.js Event Loop Execution Priority Order",
        "code": "console.log('1. Synchronous');\n\nsetTimeout(() => console.log('2. Timers Phase (setTimeout)'), 0);\nsetImmediate(() => console.log('3. Check Phase (setImmediate)'));\n\nPromise.resolve().then(() => console.log('4. Microtask (Promise)'));\nprocess.nextTick(() => console.log('5. Top Microtask (process.nextTick)'));\n\n// Expected Output:\n// 1. Synchronous\n// 5. Top Microtask (process.nextTick)\n// 4. Microtask (Promise)\n// 2 or 3 (depending on execution context, Timers vs Check)"
      },
      "commonMistakes": [
        "Thinking Node.js is completely multi-threaded (JS executes on 1 thread; background tasks use libuv threads).",
        "Starving the event loop by running massive CPU-heavy synchronous calculations (like image processing or tight infinite loops) on the main thread."
      ],
      "proTips": [
        "Highlight that `process.nextTick()` has higher priority than `Promise.then()` in Node.js!"
      ]
    },
    "bangla": {
      "quickAnswer": "Node.js Event Loop হলো `libuv` দ্বারা পরিচালিত এমন এক চক্র যা সিঙ্গেল থ্রেডেড হওয়া সত্ত্বেও নন-ব্লকিং I/O এবং ব্যাকগ্রাউন্ড থ্রেডপুলের সাহায্যে সার্ভারের হাজার হাজার কাজ একসাথে সামলায়।",
      "interviewSpeech": "নোডজেএস সিঙ্গেল থ্রেডে চলে, অর্থাৎ মেইন থ্রেডে একবারে একটি কাজই হয়। কিন্তু ফাইল পড়া বা ডাটাবেজের রিকোয়েস্ট আসার সাথে সাথে নোডজেএস তা অপারেটিং সিস্টেম বা পেছনের ৪টি ব্যাকগ্রাউন্ড থ্রেডপুলে (libuv thread pool) পাঠিয়ে দেয়। কাজ শেষ হলে সংশ্লিষ্ট কলব্যাকটি ইভেন্ট লুপের নির্দিষ্ট ফেজে জমা হয়। ইভেন্ট লুপ ৬টি ধাপে ঘোরে: Timers (`setTimeout`), Pending Callbacks, Idle, Poll (নতুন I/O খোঁজা), Check (`setImmediate`), এবং Close Callbacks। আর প্রতি ধাপের মাঝে `process.nextTick` এবং `Promise` সবার আগে এক নিমেষে শেষ করা হয়।",
      "deepDive": [
        "৬টি ফেজ: Timers -> Pending -> Idle -> Poll -> Check -> Close।",
        "`process.nextTick()` প্রমিজের চেয়েও আগে এক্সিকিউট হয়।",
        "থ্রেডপুলের ডিফল্ট সাইজ ৪ (যা বাড়ানো যায় `UV_THREADPOOL_SIZE` দিয়ে)।"
      ],
      "commonMistakes": [
        "মেইন থ্রেডে ভারী গাণিতিক হিসাব বা ইমেজ প্রসেসিং চালানো—এর ফলে পুরো সার্ভার ব্লক হয়ে অন্য ইউজারের রিকোয়েস্ট আটকে যায়।"
      ],
      "proTips": [
        "ভারী CPU কাজের জন্য Node.js Worker Threads ব্যবহার করার পরামর্শ দিন।"
      ]
    }
  },
  {
    "id": "ms-q63-what-is-express",
    "questionNumber": 63,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is Express.js and why is it used with Node.js?",
    "banglaQuestion": "Express.js কী এবং এটি Node.js-এর সাথে কেন ব্যবহার করা হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Express.js",
      "Node.js",
      "REST API",
      "Routing",
      "Middleware",
      "Framework"
    ],
    "english": {
      "quickAnswer": "Express.js is a fast, unopinionated, minimalist web application framework for Node.js that simplifies routing, middleware integration, and HTTP request/response handling for building robust REST APIs.",
      "interviewSpeech": "Building a backend server with Node.js's native `http` module requires manually parsing URLs, checking HTTP methods, handling incoming body streams with data/end events, and configuring content-type headers manually with verbose boilerplate. Express.js acts as a thin, powerful layer on top of Node's `http` module. It provides clean routing (`app.get`, `app.post`), built-in middleware pipelines (`req, res, next`), parameter parsing (`req.params`, `req.query`), and convenient response helpers (`res.json()`, `res.status()`). It is the standard server backbone of the MERN stack.",
      "deepDive": [
        "**Minimalist & Unopinionated**: Does not force a specific project structure or ORM.",
        "**Middleware Pipeline**: The core architectural model where requests flow sequentially through functions.",
        "**Ecosystem**: Compatible with thousands of npm middleware packages (cors, helmet, morgan, multer)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Native Node.js vs Clean Express.js Server",
        "code": "// Express.js: Clean, readable, productive\nconst express = require('express');\nconst app = express();\n\napp.use(express.json()); // Parse JSON body automatically\n\napp.get('/api/users/:id', (req, res) => {\n  const { id } = req.params;\n  res.status(200).json({ success: true, userId: id });\n});\n\napp.listen(5000, () => console.log('Server running on 5000'));"
      },
      "commonMistakes": [
        "Thinking Express replaces Node.js (Express is an npm package running inside Node.js).",
        "Forgetting `app.use(express.json())` when reading POST request body data."
      ],
      "proTips": [
        "Mention that modern alternatives exist (Fastify, NestJS, Hono), but Express remains the most battle-tested and widely supported framework in the Node ecosystem."
      ]
    },
    "bangla": {
      "quickAnswer": "Express.js হলো Node.js-এর জন্য একটি দ্রুতগতির, মিনিমালিস্ট এবং বহুল ব্যবহৃত ওয়েব ফ্রেমওয়ার্ক যা দিয়ে অতি সহজে রাউটিং, মিডলওয়্যার এবং RESTful API তৈরি করা যায়।",
      "interviewSpeech": "Node.js-এর সাধারণ বিল্ট-ইন `http` মডিউল দিয়ে ব্যাকএন্ড বানাতে গেলে URL পার্সিং, মেথড চেক, স্ট্রিম ডেটা হ্যান্ডলিং ইত্যাদি করতে প্রচুর কঠিন কোড লিখতে হতো। Express.js সেই জটিলতাগুলো দূর করে একটি হালকা ও চমৎকার লেয়ার প্রদান করে। এতে খুব সহজে `app.get()`, `app.post()` দিয়ে রাউট বানানো যায়, মিডলওয়্যার পাইপলাইন ব্যবহার করা যায়, এবং `res.json()` দিয়ে সুন্দরভাবে JSON রেসপন্স পাঠানো যায়। MERN স্ট্যাকের ব্যাকএন্ডের প্রধান ভিত্তিই হলো এই Express.js।",
      "deepDive": [
        "রাউটিং এবং মিডলওয়্যার ব্যবস্থাপনাকে অত্যন্ত সহজ করে দেয়।",
        "হাজার হাজার npm প্যাকেজ খুব সহজে এর সাথে প্লাগইন করা যায়।"
      ],
      "commonMistakes": [
        "Express-কে আলাদা ল্যাঙ্গুয়েজ মনে করা (এটি কেবল নোডজেএস-এর একটি লাইব্রেরি)।"
      ],
      "proTips": [
        "POST ডেটা পাওয়ার জন্য `app.use(express.json())` মিডলওয়্যার দেওয়া বাধ্যতামূলক।"
      ]
    }
  },
  {
    "id": "ms-q64-express-middleware",
    "questionNumber": 64,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is middleware in Express.js? Give three examples.",
    "banglaQuestion": "Express.js-এ Middleware কী? তিনটি বাস্তব উদাহরণ দিন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Express.js",
      "Middleware",
      "req res next",
      "Authentication",
      "Logging"
    ],
    "english": {
      "quickAnswer": "Middleware in Express.js is a function that has access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle, allowing it to execute code, modify `req/res`, end the request, or invoke the next middleware.",
      "interviewSpeech": "In Express, every incoming request passes through a sequence of functions called the middleware pipeline. A middleware takes three arguments: `(req, res, next)`. It can inspect the request, mutate data onto `req`, reject unauthorized requests early, or call `next()` to pass control to the next handler in line. If a middleware neither terminates the request (`res.send`) nor calls `next()`, the client is left hanging indefinitely. Three common examples are: 1) **Body parser** (`express.json()`), 2) **Logger** (`morgan`), and 3) **Authentication Guard** (JWT verification).",
      "deepDive": [
        "**Execution Order**: Middlewares execute sequentially in the exact order they are registered with `app.use()`.",
        "**Types**: Application-level, Router-level, Built-in, Third-party, and Error-handling (`err, req, res, next`).",
        "**Request Enrichment**: Auth middleware typically decodes a JWT and attaches `req.user = decodedUser` for downstream handlers."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Custom Auth, Logging, and Built-in Middleware",
        "code": "const express = require('express');\nconst app = express();\n\n// 1. Built-in: Parses incoming JSON body\napp.use(express.json());\n\n// 2. Custom Logger Middleware: Logs request details\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next(); // Pass control forward\n});\n\n// 3. Custom Authentication Guard Middleware\nfunction verifyToken(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Access token required' });\n  \n  // Verify token and attach user to req\n  req.user = { id: 101, role: 'admin' };\n  next();\n}\n\napp.get('/api/protected', verifyToken, (req, res) => {\n  res.json({ message: 'Welcome authorized user', user: req.user });\n});"
      },
      "commonMistakes": [
        "Forgetting to call `next()`, causing the client's HTTP request to hang and time out.",
        "Calling `next()` AND `res.json()` in the same branch, triggering the dreaded 'Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client'."
      ],
      "proTips": [
        "Always `return next()` or `return res.status(...)` to ensure execution immediately stops in that function."
      ]
    },
    "bangla": {
      "quickAnswer": "Middleware হলো এমন একটি ফাংশন যা ক্লায়েন্টের রিকোয়েস্ট (`req`) এবং সার্ভারের রেসপন্সের (`res`) মাঝখানে অবস্থান করে রিকোয়েস্ট প্রসেস, মডিফাই, ভ্যালিডেশন করে বা পরবর্তী মিডলওয়্যারে পাঠাতে `next()` কল করে।",
      "interviewSpeech": "Express-এর পুরো আর্কিটেকচারই মিডলওয়্যার নির্ভর। ক্লায়েন্ট থেকে সার্ভারে কোনো রিকোয়েস্ট আসলে সেটি একে একে বিভিন্ন মিডলওয়্যারের মধ্য দিয়ে যায়। প্রতিটি মিডলওয়্যার ৩টি প্যারামিটার পায়: `(req, res, next)`। এটি চাইলে রিকোয়েস্ট চেক করে এরর দিতে পারে, রিকোয়েস্টে নতুন ডেটা যোগ করতে পারে (যেমন `req.user`), অথবা `next()` কল করে পরবর্তী মিডলওয়্যারে কাজ হস্তান্তর করতে পারে। তিনটি বাস্তব উদাহরণ: ১) `express.json()` (বডি পার্স করার জন্য), ২) রিকোয়েস্ট লগার (যেমন `morgan`), এবং ৩) Authentication Middleware (JWT টোকেন ভ্যালিডেশন)।",
      "deepDive": [
        "মিডলওয়্যারগুলো কোডে যে ক্রমানুসারে লেখা হয়, ঠিক সেভাবেই এক্সিকিউট হয়।",
        "টোকেন ভেরিফাই করে `req.user`-এ ইউজার ডেটা রেখে দিলে যেকোনো কন্ট্রোলার তা পেয়ে যায়।"
      ],
      "commonMistakes": [
        "`next()` কল করতে ভুলে যাওয়া—এর ফলে ব্রাউজারে রিকোয়েস্ট সারাজীবন লোডিং দেখাবে এবং টাইমআউট হয়ে যাবে।"
      ],
      "proTips": [
        "সবসময় `return next()` বা `return res.json(...)` লিখবেন যাতে কোড নিচে চলে গিয়ে ডাবল রেসপন্স এরর না দেয়।"
      ]
    }
  },
  {
    "id": "ms-q65-app-use-vs-app-get",
    "questionNumber": 65,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is the difference between app.use() and app.get() in Express?",
    "banglaQuestion": "Express-এ app.use() এবং app.get()-এর মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Express.js",
      "Routing",
      "app.use",
      "app.get",
      "HTTP Methods"
    ],
    "english": {
      "quickAnswer": "`app.use()` matches ANY HTTP method (GET, POST, PUT, DELETE) and matches paths by prefix (e.g. `/api`), while `app.get()` matches ONLY HTTP GET requests and requires an exact path match.",
      "interviewSpeech": "`app.use()` is designed for mounting middleware or routers across multiple routes. It executes for all HTTP methods (GET, POST, PUT, DELETE, etc.) and performs prefix matching: `app.use('/users', ...)` will catch `/users`, `/users/123`, and `/users/profile/edit`. On the other hand, `app.get()` is an HTTP method-specific routing method. It strictly triggers ONLY when an incoming HTTP request uses the GET method, and it requires an exact route path match (e.g. `app.get('/users', ...)` only triggers for `GET /users`).",
      "deepDive": [
        "**HTTP Methods**: `app.use` handles all methods; `app.get` handles only `GET`.",
        "**Path Matching**: `app.use('/api')` matches any subpath `/api/*`; `app.get('/api')` matches strictly `/api`.",
        "**Mounting**: `app.use('/api/v1', apiRouter)` is the standard pattern to mount sub-routers."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "app.use vs app.get Routing Behavior",
        "code": "// app.use matches ANY HTTP method starting with /users (prefix match)\napp.use('/users', (req, res, next) => {\n  console.log('Fires for GET, POST, PUT, DELETE on /users, /users/123, etc.');\n  next();\n});\n\n// app.get matches ONLY HTTP GET with EXACT path /users\napp.get('/users', (req, res) => {\n  res.json({ message: 'Only fires for GET /users!' });\n});"
      },
      "commonMistakes": [
        "Using `app.use()` instead of `app.get()` to define an endpoint and wondering why it also responds to POST or DELETE requests.",
        "Placing `app.use()` below route definitions and wondering why the middleware never executes."
      ],
      "proTips": [
        "Use `app.use()` for global configurations, parsers, and mounting routers; use `app.get()`, `app.post()`, etc., for specific API endpoints."
      ]
    },
    "bangla": {
      "quickAnswer": "`app.use()` যেকোনো HTTP মেথডের (GET, POST, PUT, DELETE) জন্য চলে এবং প্রিফিক্স পাথ ম্যাচ করে; আর `app.get()` শুধুমাত্র HTTP GET রিকোয়েস্টে চলে এবং হুবহু পাথ মেলায়।",
      "interviewSpeech": "`app.use()` মূলত মিডলওয়্যার বা সাব-রাউটার রেজিস্টার করার জন্য তৈরি। এটি মেথড নিয়ে মাথা ঘামায় না—রিকোয়েস্ট GET হোক বা POST, এটি চলবে। এছাড়া `app.use('/api')` দিলে `/api/users`, `/api/posts` সবগুলোর জন্যই এটি ট্রিগার হয়। অন্যদিকে `app.get()` হলো সুনির্দিষ্ট রাউট হ্যান্ডলার। এটি কেবল ক্লায়েন্ট থেকে GET মেথডের রিকোয়েস্ট আসলেই কাজ করে এবং পাথের সাথে পুরোপুরি মিলতে হয়।",
      "deepDive": [
        "`app.use`: সব HTTP মেথড এবং যেকোনো সাবপাথে চলে।",
        "`app.get`: কেবল GET মেথড এবং নির্দিষ্ট পাথে চলে।"
      ],
      "commonMistakes": [
        "রাউটের নিচে `app.use()` লেখা—মিডলওয়্যার সবসময় রাউটের উপরে লিখতে হয়।"
      ],
      "proTips": [
        "মিডলওয়্যার ও সাব-রাউটার মাউন্ট করতে `app.use()` এবং স্পেসিফিক ডেটা পেতে `app.get()`।"
      ]
    }
  },
  {
    "id": "ms-q66-error-handling-in-express",
    "questionNumber": 66,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "How do you handle errors in Express.js?",
    "banglaQuestion": "Express.js-এ কীভাবে এরর হ্যান্ডলিং করতে হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Express.js",
      "Error Handling",
      "Global Error Middleware",
      "Async Errors",
      "Best Practices"
    ],
    "english": {
      "quickAnswer": "Errors in Express are handled by forwarding exceptions via `next(error)` to a dedicated 4-parameter Global Error-Handling Middleware `(err, req, res, next)` placed at the very end of the middleware stack.",
      "interviewSpeech": "In Express, standard middlewares have 3 parameters, but an Error-Handling Middleware has exactly 4 parameters: `(err, req, res, next)`. Express recognizes the 4-argument signature and skips all regular route handlers to jump directly to this error handler whenever an error is thrown or `next(err)` is called. In asynchronous code (like `async/await`), uncaught promise rejections crash Node unless caught with `try/catch` and passed to `next(err)`—or by using modern Express 5 / `express-async-errors` which catch async errors automatically. A proper global error handler logs the stack trace, standardizes error responses, and sanitizes sensitive database info from clients.",
      "deepDive": [
        "**4-Parameter Signature**: `(err, req, res, next)` MUST have 4 arguments, even if `next` is not called.",
        "**Placement**: Must be declared AFTER all `app.use()` and route definitions.",
        "**Async Error Forwarding**: Always use `try { ... } catch (err) { next(err); }` in async route handlers in Express 4."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Centralized Error Handling Architecture",
        "code": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\n// Async route passing error to next()\napp.get('/api/users/:id', async (req, res, next) => {\n  try {\n    const user = await findUser(req.params.id);\n    if (!user) {\n      const error = new Error('User not found');\n      error.statusCode = 404;\n      return next(error); // Forward to global handler!\n    }\n    res.json(user);\n  } catch (err) {\n    next(err); // Catch async database crashes\n  }\n});\n\n// GLOBAL ERROR HANDLER (Must be placed LAST!)\napp.use((err, req, res, next) => {\n  const status = err.statusCode || 500;\n  console.error('Server Error:', err.message);\n\n  res.status(status).json({\n    success: false,\n    status,\n    message: err.message || 'Internal Server Error',\n    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined\n  });\n});"
      },
      "commonMistakes": [
        "Defining the error handler with only 3 parameters `(err, req, res)`—Express will treat it as a regular middleware and never pass errors to it.",
        "Placing the error handler before the route definitions.",
        "Exposing sensitive database error stack traces to clients in production."
      ],
      "proTips": [
        "In production, always hide `err.stack` and return standardized JSON `{ success: false, message: '...' }`."
      ]
    },
    "bangla": {
      "quickAnswer": "Express-এ এরর হ্যান্ডেল করার জন্য রাউটের ভেতর থেকে `next(err)` কল করা হয়, যা সব রাউট শেষে থাকা ৪টি প্যারামিটারযুক্ত গ্লোবাল এরর হ্যান্ডলার মিডলওয়্যারে `(err, req, res, next)` এররটিকে পাঠিয়ে দেয়।",
      "interviewSpeech": "Express-এ এরর হ্যান্ডলিং অত্যন্ত গোছানো। সাধারণ মিডলওয়্যার ৩টি প্যারামিটার নিলেও গ্লোবাল এরর মিডলওয়্যার ঠিক ৪টি প্যারামিটার নেয়: `(err, req, res, next)`। এই ৪টি প্যারামিটার দেখেই Express বোঝে এটি এরর হ্যান্ডলার। যেকোনো কন্ট্রোলারে কোনো সমস্যা হলে `next(error)` কল করলেই মাঝের সব সাধারণ রাউট বাইপাস করে সরাসরি এই গ্লোবাল হ্যান্ডলারে চলে আসে। এটি অবশ্যই সব রাউটের সবার নিচে লিখতে হয়। এখানে আমরা এরর লগ করতে পারি এবং ক্লায়েন্টকে সুন্দর ও নিরাপদ JSON এরর মেসেজ রেসপন্স দিতে পারি।",
      "deepDive": [
        "অবশ্যই ৪টি প্যারামিটার থাকতে হবে `(err, req, res, next)`।",
        "সবার নিচে ডিফাইন করতে হবে।",
        "প্রোডাকশনে কখনো ডেটাবেজের র সিক্রেট এরর বা স্ট্যাক ট্রেস ক্লায়েন্টকে দেখানো যাবে না।"
      ],
      "commonMistakes": [
        "প্যারামিটার ৩টা দিয়ে দেওয়া—৩টা দিলে এক্সপ্রেস এটিকে সাধারণ মিডলওয়্যার ভাববে এবং কোনো এরর ধরবে না।"
      ],
      "proTips": [
        "অ্যাসিঙ্ক রাউটে এরর হ্যান্ডলিং সহজ করতে `express-async-errors` প্যাকেজ ব্যবহার করতে পারেন।"
      ]
    }
  },
  {
    "id": "ms-q67-environment-variables-nodejs",
    "questionNumber": 67,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What are environment variables and how do you manage them in Node.js?",
    "banglaQuestion": "Environment Variables কী এবং Node.js-এ এগুলো কীভাবে ম্যানেজ করা হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "Environment Variables",
      ".env",
      "dotenv",
      "Security",
      "process.env"
    ],
    "english": {
      "quickAnswer": "Environment variables are external key-value configuration values outside the application codebase (e.g. database credentials, API secret keys, PORT), accessed via `process.env` and managed locally using `.env` files and `dotenv`.",
      "interviewSpeech": "According to the Twelve-Factor App methodology, configuration should strictly be decoupled from code. Hardcoding secrets like database passwords, JWT secrets, and third-party payment keys inside code is a massive security risk and makes deployment across different environments (development, staging, production) impossible without altering code. In Node.js, we store these variables in a `.env` file locally and load them into `process.env` using the `dotenv` package (`require('dotenv').config()`) or modern Node.js v20.6+ native `--env-file=.env` flag. The `.env` file must always be added to `.gitignore` to prevent leaking secrets to GitHub.",
      "deepDive": [
        "**Access**: Read via `process.env.VARIABLE_NAME` (values are always strings).",
        "**Native Node.js (v20.6+)**: `node --env-file=.env server.js` requires zero dependencies.",
        "**Security Rule #1**: NEVER commit `.env` to version control; provide a `.env.example` template instead."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Managing Environment Variables with dotenv",
        "code": "// .env file:\n// PORT=5000\n// MONGO_URI=mongodb+srv://admin:secret@cluster.mongodb.net/prod\n// JWT_SECRET=super_secret_jwt_key\n\n// server.js\nrequire('dotenv').config(); // Load variables into process.env\n\nconst port = process.env.PORT || 3000;\nconst dbUri = process.env.MONGO_URI;\n\nif (!dbUri) {\n  console.error('FATAL: MONGO_URI environment variable missing!');\n  process.exit(1);\n}\n\nconsole.log(`Starting server on port ${port} in ${process.env.NODE_ENV} mode`);"
      },
      "commonMistakes": [
        "Committing the `.env` file to public GitHub repos (can leak production credentials within seconds to automated scrapers).",
        "Forgetting that all values in `process.env` are strings (`process.env.PORT` is `'5000'`, not the number `5000`)."
      ],
      "proTips": [
        "Mention Node.js v20.6+: 'In modern Node.js, you can run `node --env-file=.env index.js` without even installing the `dotenv` package!'"
      ]
    },
    "bangla": {
      "quickAnswer": "Environment Variables হলো কোডের বাইরে সংরক্ষিত কনফিগারেশন ডেটা (যেমন ডাটাবেজ পাসওয়ার্ড, API সিক্রেট কি, PORT), যা `process.env` দিয়ে এক্সেস করা হয় এবং লোকালি `.env` ফাইল ও `dotenv` প্যাকেজ দিয়ে ম্যানেজ করা হয়।",
      "interviewSpeech": "সিক্রেট তথ্য যেমন ডাটাবেজ পাসওয়ার্ড, JWT Secret ইত্যাদি কোডের ভেতর হার্ডকোড করে লেখা মারাত্মক ঝুঁকিপূর্ণ। এছাড়া লোকাল এনভায়রনমেন্ট এবং প্রোডাকশন সার্ভারের সেটিংস আলাদা হতে হয়। তাই এগুলোকে `.env` ফাইলে কি-ভ্যালু আকারে রাখা হয়। Node.js অ্যাপের শুরুতে `dotenv` প্যাকেজ লোড করলে বা Node v20-এর বিল্ট-ইন `--env-file` ফ্ল্যাগ ব্যবহার করলে এগুলো `process.env.KEY` হিসেবে ব্যবহারের উপযোগী হয়। সবচেয়ে গুরুত্বপূর্ণ নিয়ম হলো—`.env` ফাইলটিকে অবশ্যই `.gitignore`-এ রাখতে হবে যাতে ভুলেও গিটহাবে পুশ না হয়।",
      "deepDive": [
        "কোড ও কনফিগারেশন আলাদা রাখে (12-Factor App নীতি)।",
        "`process.env`-এর সকল মান স্ট্রিং হিসেবে পাওয়া যায়।",
        "টিমের জন্য `.env.example` ফাইল রাখা স্ট্যান্ডার্ড প্র্যাকটিস।"
      ],
      "commonMistakes": [
        "ভুল করে `.env` ফাইল গিটহাবে পুশ করে সিক্রেট ফাঁস করে ফেলা।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'Node 20 থেকে কোনো থার্ড পার্টি প্যাকেজ ছাড়াই `--env-file=.env` দিয়ে সরাসরি এনভায়রনমেন্ট ভেরিয়েবল পড়া যায়।'"
      ]
    }
  },
  {
    "id": "ms-q68-commonjs-vs-es-modules-node",
    "questionNumber": 68,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "Explain the difference between CommonJS (require) and ES Modules (import) in Node.",
    "banglaQuestion": "Node-এ CommonJS (require) এবং ES Modules (import)-এর মধ্যে পার্থক্য ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "CommonJS",
      "ES Modules",
      "require",
      "import",
      "Module System"
    ],
    "english": {
      "quickAnswer": "CommonJS uses synchronous `require()` and `module.exports` evaluated dynamically at runtime, while ES Modules (ESM) use static `import/export` parsed at compile time, enabling asynchronous loading, top-level await, and tree-shaking.",
      "interviewSpeech": "Historically, Node.js was built with CommonJS (CJS). Modules are imported synchronously using `const x = require('./x')` and exported via `module.exports`. Because `require` is dynamic (it can be placed inside an `if` statement), bundlers cannot optimize or tree-shake it ahead of time. ES Modules (ESM) is the modern official JavaScript standard (`import/export`). ESM is statically analyzed at parse time before code runs, allowing bundlers to eliminate unused exports. ESM also natively supports top-level `await` and runs in strict mode by default. To enable ESM in Node.js, add `\"type\": \"module\"` to `package.json` or use `.mjs` extensions.",
      "deepDive": [
        "**CommonJS**: `const fs = require('fs'); module.exports = ...` (Synchronous, runtime evaluation, default in older Node).",
        "**ES Modules**: `import fs from 'fs'; export default ...` (Asynchronous loading, static analysis, official standard).",
        "**Global differences**: CommonJS has `__dirname` and `__filename`; ESM replaces them with `import.meta.url` and `import.meta.dirname` (Node 20.11+)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "CommonJS vs Modern ES Modules in Node.js",
        "code": "// 1. CommonJS (package.json has \"type\": \"commonjs\" or omitted)\nconst path = require('path');\nconst calculate = (a, b) => a + b;\nmodule.exports = { calculate };\nconsole.log(__dirname); // Built-in in CJS\n\n// 2. ES Modules (package.json has \"type\": \"module\")\nimport path from 'node:path';\nexport const calculateESM = (a, b) => a + b;\n// Top-level await is natively supported!\n// const data = await fetch('https://api.example.com');\n// __dirname doesn't exist in ESM -> use import.meta.dirname in Node 20.11+"
      },
      "commonMistakes": [
        "Attempting to use `__dirname` or `__filename` inside an ES Module file (throws ReferenceError; use `import.meta.url`).",
        "Using `require()` inside an ES Module without creating a custom `createRequire` helper."
      ],
      "proTips": [
        "Node 20.11+ introduced native `import.meta.dirname` and `import.meta.filename`, eliminating the need for old `fileURLToPath` workarounds in ESM."
      ]
    },
    "bangla": {
      "quickAnswer": "CommonJS হলো নোডজেএস-এর পুরোনো সিনট্যাক্স যা সিঙ্ক্রোনাসভাবে `require()` ও `module.exports` দিয়ে চলে; আর ES Modules (ESM) হলো আধুনিক জাভাস্ক্রিপ্ট স্ট্যান্ডার্ড যা স্ট্যাটিক্যালি `import` ও `export` ব্যবহার করে এবং টপ-লেভেল await সমর্থন করে।",
      "interviewSpeech": "শুরু থেকেই Node.js-এ CommonJS ব্যবহৃত হতো। এতে `require()` যেকোনো জায়গায় রানটাইমে সিঙ্ক্রোনাসভাবে ফাইল লোড করত। কিন্তু ব্রাউজার এবং আধুনিক ফ্রেমওয়ার্কের সাথে সামঞ্জস্য রাখতে নোডজেএস এখন ES Modules (ESM) সাপোর্ট করে। ESM কোড রান হওয়ার আগেই স্ট্যাটিক অ্যানালাইসিস করতে পারে, ফলে বান্ডলারগুলো অপ্রয়োজনীয় কোড মুছে (Tree-shaking) সাইট দ্রুত করতে পারে। এছাড়া ESM-এ কোনো অ্যাসিনক্রোনাস ফাংশন ছাড়াই সরাসরি টপ-লেভেলে `await` লেখা যায়। নোডজেএসে ESM চালু করতে `package.json`-এ `\"type\": \"module\"` লিখে দিতে হয়।",
      "deepDive": [
        "CommonJS: `require()` এবং `module.exports`।",
        "ESM: `import` এবং `export`।",
        "ESM-এ `__dirname` থাকে না, তার বদলে `import.meta.dirname` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "ESM ফাইল বানিয়ে তার ভেতর `__dirname` বা `require()` কল করার চেষ্টা করা।"
      ],
      "proTips": [
        "আধুনিক নোডজেএস প্রজেক্টে `\"type\": \"module\"` ব্যবহার করাই বর্তমান বেস্ট প্র্যাকটিস।"
      ]
    }
  },
  {
    "id": "ms-q69-what-is-cors",
    "questionNumber": 69,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is CORS and how do you enable it in an Express app?",
    "banglaQuestion": "CORS কী এবং Express অ্যাপে এটি কীভাবে এনাবল করতে হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Express.js",
      "CORS",
      "Security",
      "Same-Origin Policy",
      "HTTP Headers",
      "Preflight"
    ],
    "english": {
      "quickAnswer": "CORS (Cross-Origin Resource Sharing) is a browser security mechanism that restricts web pages from making API requests to a different domain, protocol, or port than the one that served the page, configured in Express using the `cors` middleware.",
      "interviewSpeech": "Browsers enforce the Same-Origin Policy (SOP) by default to prevent malicious scripts on `evil.com` from stealing data from `yourbank.com`. An origin is defined by the combination of Protocol, Domain, and Port (`https://myapp.com:3000`). If your React frontend on `localhost:3000` attempts to fetch data from your Express backend on `localhost:5000`, the browser blocks the response unless the backend explicitly authorizes it via CORS HTTP headers (`Access-Control-Allow-Origin`). For non-simple requests (like PUT, DELETE, or custom headers), the browser sends an automatic preflight `OPTIONS` request first. In Express, we configure this easily using the official `cors` package.",
      "deepDive": [
        "**Origin Definition**: Protocol + Domain + Port must match strictly.",
        "**Preflight Request**: HTTP `OPTIONS` check sent automatically by the browser before complex mutations.",
        "**Credentials**: If using cookies or session headers, set `credentials: true` and specify explicit origins (cannot use wildcard `*` with credentials)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Configuring CORS in Express for Production and Localhost",
        "code": "const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\n// Secure CORS configuration\nconst allowedOrigins = ['http://localhost:3000', 'https://myproductionapp.com'];\n\napp.use(cors({\n  origin: function (origin, callback) {\n    // Allow requests with no origin (like mobile apps or Postman)\n    if (!origin || allowedOrigins.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('Blocked by CORS policy'));\n    }\n  },\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n  credentials: true // Allow cookies to be sent across origins\n}));"
      },
      "commonMistakes": [
        "Thinking CORS is a server-side bug or security measure (CORS is enforced strictly by the client browser, not the server).",
        "Using `cors({ origin: '*' })` while sending authenticated cookie credentials (browsers reject this combination)."
      ],
      "proTips": [
        "Clarify that Postman and server-to-server requests never trigger CORS errors—CORS is enforced strictly by web browsers!"
      ]
    },
    "bangla": {
      "quickAnswer": "CORS (Cross-Origin Resource Sharing) হলো ব্রাউজারের একটি নিরাপত্তা ব্যবস্থা যা এক ডোমেইন/পোর্টে থাকা ফ্রন্টএন্ডকে অন্য ডোমেইন/পোর্টে থাকা ব্যাকএন্ড API-তে অননুমোদিত রিকোয়েস্ট পাঠানো থেকে বাধা দেয়। Express-এ `cors` মিডলওয়্যার দিয়ে এটি এলাউ করা হয়।",
      "interviewSpeech": "ব্রাউজার বাই-ডিফল্ট Same-Origin Policy মেনে চলে যাতে কোনো হ্যাকার ওয়েবসাইট আপনার ব্যাংকের তথ্য চুরি করতে না পারে। Origin তৈরি হয় প্রোটোকল, ডোমেইন এবং পোর্ট মিলে। যেমন আপনার React ফ্রন্টএন্ড চলছে `localhost:3000`-এ আর Express ব্যাকএন্ড চলছে `localhost:5000`-এ। পোর্ট আলাদা হওয়ায় ব্রাউজার রিকোয়েস্ট ব্লক করে দেয়। ব্যাকএন্ড সার্ভার যখন হেডার দিয়ে (`Access-Control-Allow-Origin`) জানিয়ে দেয় যে এই ফ্রন্টএন্ডটি নিরাপদ, তখনই কেবল ব্রাউজার ডেটা গ্রহণ করে। Express-এ আমরা `cors()` মিডলওয়্যার ব্যবহার করে খুব সহজে নির্দিষ্ট ফ্রন্টএন্ড URL-কে অনুমতি দিয়ে থাকি।",
      "deepDive": [
        "CORS এরর সার্ভার তৈরি করে না, এটি ব্রাউজারের সিকিউরিটি মেকানিজম।",
        "জটিল রিকোয়েস্টের ক্ষেত্রে ব্রাউজার আগে একটি প্রিফ্লাইট `OPTIONS` রিকোয়েস্ট পাঠায়।",
        "কুকি পাঠাতে চাইলে `credentials: true` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "পোস্টম্যানে রিকোয়েস্ট চালিয়ে CORS এরর টেস্ট করার চেষ্টা করা (পোস্টম্যান বা সার্ভার টু সার্ভার কলে কখনোই CORS এরর আসে না, কারণ ব্রাউজার নেই)।"
      ],
      "proTips": [
        "প্রোডাকশনে কখনো `origin: '*'` দিবেন না, নির্দিষ্ট ক্লায়েন্ট ডোমেইন উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "ms-q70-purpose-of-package-json",
    "questionNumber": 70,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is the purpose of the package.json file?",
    "banglaQuestion": "package.json ফাইলের উদ্দেশ্য কী এবং এতে কী কী থাকে?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "npm",
      "package.json",
      "Dependencies",
      "Scripts",
      "Metadata"
    ],
    "english": {
      "quickAnswer": "`package.json` is the central manifest file for any Node.js project, containing metadata about the project, scripts to automate tasks, and the exact list of dependency packages required to run and develop the application.",
      "interviewSpeech": "`package.json` serves as the heart and blueprint of a Node.js project. It eliminates the need to commit thousands of library files in `node_modules` to Git. Anyone cloning the repository simply runs `npm install`, and npm reads `package.json` to download the exact dependencies. Key fields include: 1) **Metadata**: `name`, `version`, `author`, `license`. 2) **`scripts`**: Command shortcuts like `\"dev\": \"next dev\"` or `\"build\": \"tsc\"`. 3) **`dependencies`**: Packages required in production. 4) **`devDependencies`**: Packages only needed during local development and testing. 5) **`type`**: Set to `\"module\"` for ES Modules.",
      "deepDive": [
        "**`package-lock.json` role**: While `package.json` lists acceptable semver version ranges (e.g. `^4.18.2`), `package-lock.json` locks down the exact, deterministic dependency tree and checksums across all machines.",
        "**Lifecycle Scripts**: `preinstall`, `postinstall`, `prepare` automate workflows.",
        "**Private flag**: `\"private\": true` prevents accidental publication to public npm."
      ],
      "codeSnippet": {
        "language": "json",
        "caption": "Standard package.json Structure",
        "code": "{\n  \"name\": \"interview-prep-backend\",\n  \"version\": \"1.0.0\",\n  \"private\": true,\n  \"type\": \"module\",\n  \"scripts\": {\n    \"dev\": \"nodemon server.js\",\n    \"start\": \"node server.js\",\n    \"test\": \"jest\"\n  },\n  \"dependencies\": {\n    \"express\": \"^4.19.2\",\n    \"mongoose\": \"^8.4.0\",\n    \"dotenv\": \"^16.4.5\"\n  },\n  \"devDependencies\": {\n    \"nodemon\": \"^3.1.0\"\n  }\n}"
      },
      "commonMistakes": [
        "Committing `node_modules` instead of just committing `package.json` and `package-lock.json`.",
        "Deleting `package-lock.json` when troubleshooting dependency issues."
      ],
      "proTips": [
        "Always highlight the difference between `package.json` (intent) and `package-lock.json` (exact locked reality)."
      ]
    },
    "bangla": {
      "quickAnswer": "`package.json` হলো যেকোনো Node.js প্রজেক্টের কেন্দ্রীয় ব্লুপ্রিন্ট বা ম্যানিফেস্ট ফাইল, যাতে প্রজেক্টের নাম, ভার্সন, অটোমেশন স্ক্রিপ্টস এবং প্রয়োজনীয় ডিপেনডেন্সি লাইব্রেরিগুলোর তালিকা থাকে।",
      "interviewSpeech": "একটি প্রজেক্টে হাজার হাজার প্যাকেজের ফাইল (`node_modules`) থাকে যা গিটহাবে আপলোড করা যায় না। `package.json` থাকার কারণে আমরা কেবল এই ছোট ফাইলটি শেয়ার করি এবং অন্য যে কেউ `npm install` দিলেই এই ফাইলটি পড়ে স্বয়ংক্রিয়ভাবে সব ডিপেনডেন্সি ডাউনলোড করে নিতে পারে। এর প্রধান অংশগুলো হলো: ১) প্রজেক্ট মেটাডেটা (name, version), ২) `scripts` (টার্মিনালে রান করার শর্টকাট যেমন `npm run dev`), ৩) `dependencies` (প্রোডাকশনে চলাকালীন দরকারি লাইব্রেরি), এবং ৪) `devDependencies` (শুধু ডেভেলপমেন্টে কোডিং বা টেস্টিংয়ের সময় দরকারি লাইব্রেরি)।",
      "deepDive": [
        "গিটহাবে `node_modules` নয়, শুধু `package.json` এবং `package-lock.json` পুশ করতে হয়।",
        "`package-lock.json` সকল প্যাকেজের এক্সাক্ট ভার্সন লক করে রাখে যাতে সবার কম্পিউটারে হুবহু এক ভার্সন চলে।"
      ],
      "commonMistakes": [
        "গিটহাবে `package.json`-এর সাথে ভুলবশত গিগাবাইট সাইজের `node_modules` ফোল্ডার পুশ করা।"
      ],
      "proTips": [
        "মনে রাখবেন: `package.json` ভার্সন রেঞ্জ বলে দেয়, আর `package-lock.json` নির্দিষ্ট ভার্সন লক করে।"
      ]
    }
  },
  {
    "id": "ms-q71-dependencies-vs-devdependencies",
    "questionNumber": 71,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is npm and what is the difference between dependencies and devDependencies?",
    "banglaQuestion": "npm কী এবং dependencies ও devDependencies-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "npm",
      "dependencies",
      "devDependencies",
      "Package Management"
    ],
    "english": {
      "quickAnswer": "npm (Node Package Manager) is the world's largest software registry and CLI package manager. `dependencies` are required for the application to run in production, while `devDependencies` are only needed locally during development and testing.",
      "interviewSpeech": "npm consists of an online registry of open-source packages and a command-line tool bundled with Node.js. When installing packages: 1) `dependencies` (installed with `npm i <pkg>`) are packages required for the app to function at runtime in production—like `express`, `mongoose`, `jsonwebtoken`, or `bcrypt`. 2) `devDependencies` (installed with `npm i -D <pkg>`) are development-time utilities never needed in production runtime—such as linters (`eslint`), test runners (`jest`), type definitions (`@types/node`), compiler tools (`typescript`), or dev servers (`nodemon`). On production servers, running `npm install --omit=dev` installs only `dependencies`, drastically cutting down deployment size, build time, and security attack surface.",
      "deepDive": [
        "**Production Command**: `npm ci --omit=dev` (or `--production`) ignores `devDependencies`.",
        "**Container Optimization**: Separation allows Docker production images to remain tiny and fast.",
        "**`peerDependencies`**: Required by plugins to ensure the consumer project provides a compatible host package (e.g. React version)."
      ],
      "codeSnippet": {
        "language": "bash",
        "caption": "Installing dependencies vs devDependencies",
        "code": "# Runtime Production Dependencies (saved to \"dependencies\")\nnpm install express mongoose jsonwebtoken\n\n# Development-Only Utilities (saved to \"devDependencies\" via -D or --save-dev)\nnpm install -D nodemon typescript @types/express jest eslint\n\n# Production deployment build command (skips devDependencies):\nnpm ci --omit=dev"
      },
      "commonMistakes": [
        "Installing `nodemon` or `@types/...` into production `dependencies`, bloating the production Docker container.",
        "Installing `express` as a `devDependency` and watching the production container crash on startup because Express is missing."
      ],
      "proTips": [
        "Explain the benefit: 'Keeping devDependencies separate keeps production Docker images small, speeds up deployment pipelines, and reduces security vulnerabilities.'"
      ]
    },
    "bangla": {
      "quickAnswer": "npm হলো নোডজেএস-এর অফিসিয়াল প্যাকেজ ম্যানেজার। `dependencies` হলো সেইসব প্যাকেজ যা প্রোডাকশনে ওয়েবসাইট চালু রাখার জন্য অপরিহার্য; আর `devDependencies` শুধু কোড লেখা ও টেস্টিংয়ের জন্য লোকাল কম্পিউটারে দরকার হয়।",
      "interviewSpeech": "আমরা যখন কোড করি, তখন দুই ধরনের লাইব্রেরি দরকার হয়। যেসব লাইব্রেরি ছাড়া মূল অ্যাপ রানই হতে পারবে না (যেমন `express`, `mongoose`, `jsonwebtoken`) সেগুলোকে `dependencies`-এ রাখা হয় (`npm install package`)। আর যেসব টুলস শুধু কোড ডেভেলপ করার সময় বা টেস্ট করার সময় লাগে (যেমন কোড পরিবর্তনের পর অটো-রিস্টার্ট হওয়ার জন্য `nodemon`, টাইপচেকিংয়ের জন্য `typescript`, বা এরর খোঁজার জন্য `eslint`) সেগুলোকে `devDependencies`-এ রাখা হয় (`npm i -D package`)। প্রোডাকশন সার্ভারে যখন অ্যাপ ডেপ্লয় করা হয়, তখন `npm install --omit=dev` দিলে devDependencies বাদ দিয়ে শুধু দরকারি প্যাকেজ ডাউনলোড হয়, যার ফলে সার্ভার হালকা ও ফাস্ট থাকে।",
      "deepDive": [
        "`dependencies`: প্রোডাকশনে সার্ভার চালাতে ১০০% লাগবে।",
        "`devDependencies`: শুধু লোকাল মেশিনে ডেভেলপ ও টেস্ট করার জন্য।",
        "ডকার ইমেজ ও সার্ভার সাইজ ছোট রাখতে এই বিভাজন অত্যন্ত গুরুত্বপূর্ণ।"
      ],
      "commonMistakes": [
        "`express`-কে ভুল করে `devDependencies`-এ ইনস্টল করা—এর ফলে প্রোডাকশন সার্ভারে কোড ক্র্যাশ করবে কারণ এক্সপ্রেস খুঁজে পাবে না।"
      ],
      "proTips": [
        "`-D` ফ্ল্যাগ দিয়ে devDependencies ইনস্টল করতে হয়।"
      ]
    }
  },
  {
    "id": "ms-q72-restful-api-express-http-methods",
    "questionNumber": 72,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "How do you create a RESTful API with Express? Explain the standard HTTP methods.",
    "banglaQuestion": "Express দিয়ে কীভাবে RESTful API তৈরি করা হয়? স্ট্যান্ডার্ড HTTP মেথডগুলো ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Express.js",
      "REST API",
      "HTTP Methods",
      "CRUD",
      "Status Codes"
    ],
    "english": {
      "quickAnswer": "A RESTful API maps resource endpoints to standard HTTP verbs: `GET` (read), `POST` (create), `PUT` (full replace), `PATCH` (partial update), and `DELETE` (remove), returning standardized JSON data and status codes.",
      "interviewSpeech": "REST (Representational State Transfer) is an architectural style based on stateless client-server communication using standard HTTP protocols. In Express, resources are named with plural nouns (`/api/products`), and HTTP methods define the CRUD action: 1) `GET /api/products`: Retrieves resources (safe, idempotent, returns 200). 2) `POST /api/products`: Creates a new resource (non-idempotent, returns 201 Created). 3) `PUT /api/products/:id`: Replaces the entire resource (idempotent, returns 200). 4) `PATCH /api/products/:id`: Partially updates specific fields (returns 200). 5) `DELETE /api/products/:id`: Removes the resource (idempotent, returns 200 or 204 No Content).",
      "deepDive": [
        "**Idempotency**: Making identical multiple requests produces the exact same server state (`GET`, `PUT`, `DELETE` are idempotent; `POST` is NOT).",
        "**Status Codes**: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Error).",
        "**Plural Nouns**: Best practice dictates plural resource names (`/users`, `/orders`), avoiding verbs in URLs (`/getUsers` is bad REST design)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Standard RESTful CRUD Resource Endpoints in Express",
        "code": "const express = require('express');\nconst router = express.Router();\n\n// GET all items -> 200 OK\nrouter.get('/products', async (req, res) => {\n  res.status(200).json({ success: true, data: [] });\n});\n\n// POST new item -> 201 Created\nrouter.post('/products', async (req, res) => {\n  const newProduct = req.body;\n  res.status(201).json({ success: true, data: newProduct });\n});\n\n// PATCH partial update -> 200 OK\nrouter.patch('/products/:id', async (req, res) => {\n  res.status(200).json({ success: true, message: 'Updated' });\n});\n\n// DELETE item -> 200 OK or 204 No Content\nrouter.delete('/products/:id', async (req, res) => {\n  res.status(204).send();\n});"
      },
      "commonMistakes": [
        "Putting verbs in REST URLs (e.g. `/api/createProduct` or `/api/deleteUser/1`—the HTTP method ALREADY provides the action).",
        "Returning HTTP 200 for newly created resources instead of HTTP 201."
      ],
      "proTips": [
        "Explain Idempotence: 'An HTTP method is idempotent if making the request once produces the identical outcome as making it 100 times.'"
      ]
    },
    "bangla": {
      "quickAnswer": "RESTful API হলো এমন এক আর্কিটেকচার যা স্ট্যান্ডার্ড HTTP মেথডগুলোর মাধ্যমে ডেটা আদান-প্রদান করে: `GET` (পড়া), `POST` (নতুন তৈরি), `PUT` (পুরো রিপ্লেস), `PATCH` (আংশিক আপডেট), এবং `DELETE` (মুছে ফেলা)।",
      "interviewSpeech": "Express-এ প্রফেশনাল REST API বানাতে হলে URL-এ কোনো ভার্ব না দিয়ে প্লুরাল নাউন (যেমন `/api/courses`) ব্যবহার করতে হয়। প্রতিটি কাজের জন্য নির্দিষ্ট HTTP মেথড এবং স্ট্যাটাস কোড থাকে: ১) `GET`: ডেটা পড়ার জন্য (স্ট্যাটাস 200)। ২) `POST`: নতুন ডেটা যোগ করার জন্য (স্ট্যাটাস 201 Created)। ৩) `PUT`: পুরো অবজেক্ট নতুন করে রিপ্লেস করতে। ৪) `PATCH`: অবজেক্টের নির্দিষ্ট দু-একটি ফিল্ড আপডেট করতে। ৫) `DELETE`: কোনো ডেটা ডিলিট করতে (স্ট্যাটাস 200 বা 204)।",
      "deepDive": [
        "URL-এ কখনো ভার্ব লেখা যাবে না (যেমন `/api/deleteUser` লেখা ভুল; সঠিক হলো `DELETE /api/users/:id`)।",
        "Idempotent মেথড: `GET`, `PUT`, `DELETE` বারবার চালালেও একই ফলাফল থাকে; কিন্তু `POST` বারবার চালালে ডুপ্লিকেট ডেটা তৈরি হয়।"
      ],
      "commonMistakes": [
        "সব কাজের জন্যই শুধু `GET` আর `POST` ব্যবহার করা এবং উপযুক্ত স্ট্যাটাস কোড (যেমন 201 বা 404) না দেওয়া।"
      ],
      "proTips": [
        "সঠিক স্ট্যাটাস কোড ব্যবহার করুন: ডেটা ক্রিয়েট হলে 200 নয়, 201 দিন।"
      ]
    }
  },
  {
    "id": "ms-q73-jwt-authentication",
    "questionNumber": 73,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is JWT (JSON Web Token) and how is it used for authentication?",
    "banglaQuestion": "JWT (JSON Web Token) কী এবং অথেনটিকেশনের জন্য এটি কীভাবে ব্যবহার করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JWT",
      "Authentication",
      "Security",
      "Bearer Token",
      "Stateless",
      "Fullstack"
    ],
    "english": {
      "quickAnswer": "A JSON Web Token (JWT) is a compact, URL-safe, digitally signed open standard string consisting of three parts (Header.Payload.Signature) used for stateless authentication and secure data transmission between client and server.",
      "interviewSpeech": "Traditional session-based authentication requires the server to store active session IDs in server memory or Redis, which complicates horizontal scaling. JWT enables stateless authentication: when a user logs in with valid credentials, the backend signs a token containing the user's ID and role using a secret key (`jwt.sign()`) and returns it to the client. The client stores the token (ideally in an `httpOnly` secure cookie) and attaches it in the `Authorization: Bearer <token>` header on subsequent requests. The backend verifies the cryptographic signature with `jwt.verify()` without needing to query a session database.",
      "deepDive": [
        "**3 Parts**: Header (algorithm & token type), Payload (user data & expiry claims `exp`), Signature (HMAC SHA256 of header + payload + secret).",
        "**Stateless Scaling**: The server doesn't maintain session tables, making load balancing across multiple servers effortless.",
        "**Storage Security**: Storing JWT in `localStorage` leaves it vulnerable to XSS; storing in an `httpOnly` cookie mitigates XSS risks."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Signing and Verifying JWT in Node/Express",
        "code": "const jwt = require('jsonwebtoken');\nconst SECRET = process.env.JWT_SECRET;\n\n// 1. Generate Token upon successful login\nfunction generateToken(user) {\n  return jwt.sign(\n    { id: user._id, email: user.email, role: user.role },\n    SECRET,\n    { expiresIn: '1h' } // Expiry claim\n  );\n}\n\n// 2. Middleware to verify JWT on incoming protected requests\nfunction authenticateJWT(req, res, next) {\n  const authHeader = req.headers.authorization;\n  const token = authHeader && authHeader.split(' ')[1]; // Extract Bearer <token>\n\n  if (!token) return res.status(401).json({ error: 'Unauthorized: Token missing' });\n\n  jwt.verify(token, SECRET, (err, decodedUser) => {\n    if (err) return res.status(403).json({ error: 'Forbidden: Invalid or expired token' });\n    req.user = decodedUser; // Attach payload to req\n    next();\n  });\n}"
      },
      "commonMistakes": [
        "Putting sensitive data (like plain text passwords, social security numbers) in the JWT payload (the payload is only Base64-encoded, NOT encrypted, so anyone can read it).",
        "Never setting an expiration time (`expiresIn`), creating tokens that remain valid forever even if compromised."
      ],
      "proTips": [
        "Emphasize the Refresh Token pattern: Issue short-lived Access Tokens (15 mins) and long-lived Refresh Tokens (7 days) stored in `httpOnly` cookies."
      ]
    },
    "bangla": {
      "quickAnswer": "JWT (JSON Web Token) হলো তিনটি অংশে বিভক্ত (Header.Payload.Signature) একটি ডিজিটালি সাইন করা স্ট্রিং, যা ক্লায়েন্ট এবং সার্ভারের মধ্যে স্টেটলেস (Stateless) অথেনটিকেশন নিশ্চিত করতে ব্যবহৃত হয়।",
      "interviewSpeech": "সাধারণ সেশন-ভিত্তিক অথেনটিকেশনে সার্ভারের মেমরিতে সেশন আইডি জমা রাখতে হতো, যার ফলে সার্ভার স্কেল করা কঠিন হতো। JWT হলো স্টেটলেস—ইউজার সঠিক ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করলে সার্ভার একটি সিক্রেট কি (Secret Key) দিয়ে টোকেন সাইন করে ক্লায়েন্টকে দেয়। ক্লায়েন্ট পরবর্তী প্রতিটি রিকোয়েস্টে `Authorization: Bearer <token>` হেডারে টোকেনটি পাঠায়। সার্ভার শুধু তার সিক্রেট কি দিয়ে টোকেনের সিগনেচার ভেরিফাই করে মুহূর্তেই বুঝে ফেলে ইউজার জেনুইন কি না। এর জন্য সার্ভারে কোনো সেশন ডেটাবেজ দেখতে হয় না।",
      "deepDive": [
        "৩টি অংশ: Header (অ্যালগরিদম), Payload (ইউজার আইডি ও এক্সপায়ারি), Signature (ক্রিপ্টোগ্রাফিক সুরক্ষা)।",
        "স্টেটলেস হওয়ায় সার্ভার যেকোনো সময় স্কেল করা যায়।",
        "পে-লোডের ডেটা এনক্রিপ্ট থাকে না, শুধু Base64 এনকোড থাকে—তাই এতে পাসওয়ার্ড রাখা নিষেধ।"
      ],
      "commonMistakes": [
        "টোকেনের পে-লোডে ইউজারের পাসওয়ার্ড বা গোপন তথ্য রেখে দেওয়া (পে-লোড যে কেউ ডিকোড করে দেখতে পারে)।"
      ],
      "proTips": [
        "নিরাপত্তার জন্য অ্যাক্সেস টোকেনের মেয়াদ ১৫ মিনিট এবং রিফ্রেশ টোকেনের মেয়াদ ৭ দিন রাখা আধুনিক স্ট্যান্ডার্ড।"
      ]
    }
  },
  {
    "id": "ms-q74-bcrypt-password-hashing",
    "questionNumber": 74,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is bcrypt and why is it used for password hashing?",
    "banglaQuestion": "bcrypt কী এবং পাসওয়ার্ড হ্যাশিংয়ের জন্য এটি কেন ব্যবহার করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "bcrypt",
      "Security",
      "Hashing",
      "Salting",
      "Authentication"
    ],
    "english": {
      "quickAnswer": "bcrypt is a slow, cryptographic hashing function designed specifically for passwords that incorporates automated random salting and a configurable work factor (rounds) to resist brute-force and rainbow table attacks.",
      "interviewSpeech": "Storing plain-text passwords in a database is an egregious security violation. Even fast hashing algorithms like MD5 or SHA-256 are dangerous for passwords because modern GPUs can compute billions of SHA-256 hashes per second, cracking passwords with precomputed 'rainbow tables' or brute force. bcrypt solves this through two mechanisms: 1) **Salt**: A random string automatically appended to each password before hashing, guaranteeing that two users with identical passwords have completely different hashes, neutralizing rainbow tables. 2) **Work Factor (Cost)**: bcrypt is deliberately slow and CPU/memory-intensive. As hardware gets faster over the years, you can increase the salt rounds (e.g. from 10 to 12) to keep brute-forcing computationally infeasible.",
      "deepDive": [
        "**One-way hash**: You cannot 'decrypt' a bcrypt hash. Verification is done by re-hashing the incoming password with the stored salt and comparing (`bcrypt.compare`).",
        "**Salt Rounds**: Standard recommendation is 10 to 12 rounds (takes ~100ms per hash, unnoticeable to a user but crippling to a brute-force bot).",
        "**Timing Attack Defense**: `bcrypt.compare` uses constant-time comparison to prevent timing attacks."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Password Hashing and Verification with bcrypt",
        "code": "const bcrypt = require('bcrypt');\nconst SALT_ROUNDS = 10;\n\n// 1. Hash Password during Registration\nasync function hashUserPassword(plainPassword) {\n  // Generates salt and hashes in one step\n  const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);\n  return hashedPassword; // Save this to MongoDB!\n}\n\n// 2. Verify Password during Login\nasync function verifyLogin(plainPassword, storedHash) {\n  // Re-hashes plain password with stored salt and checks match\n  const isMatch = await bcrypt.compare(plainPassword, storedHash);\n  return isMatch; // Returns true or false\n}"
      },
      "commonMistakes": [
        "Using fast cryptographic hashes like MD5, SHA-1, or plain SHA-256 for passwords.",
        "Attempting to 'decrypt' a bcrypt hash (hashing is strictly a one-way function, not encryption)."
      ],
      "proTips": [
        "Highlight the difference: 'Encryption is two-way (can be decrypted with a key); Hashing is one-way (can never be reversed).'"
      ]
    },
    "bangla": {
      "quickAnswer": "bcrypt হলো পাসওয়ার্ডের জন্য বিশেষভাবে তৈরি একটি ওয়ান-ওয়ে ক্রিপ্টোগ্রাফিক হ্যাশিং অ্যালগরিদম, যা স্বয়ংক্রিয়ভাবে সল্ট (Salt) যুক্ত করে এবং ব্রুট-ফোর্স বা রেইনবো টেবিল অ্যাটাক প্রতিরোধ করতে ইচ্ছাকৃতভাবে ধীরগতির হিসাব ব্যবহার করে।",
      "interviewSpeech": "ডাটাবেজে প্লেইন টেক্সট পাসওয়ার্ড রাখা অপরাধের সামিল। আবার MD5 বা SHA-256-এর মতো ফাস্ট হ্যাশিং ব্যবহার করলেও আধুনিক গ্রাফিক্স কার্ড দিয়ে সেকেন্ডে কোটি কোটি পাসওয়ার্ড ক্র্যাক করা যায়। bcrypt এর সমাধান দেয় দুটি উপায়ে: ১) Salt: এটি প্রতিটি পাসওয়ার্ডের সাথে স্বয়ংক্রিয়ভাবে একটি ইউনিক র‍্যান্ডম স্ট্রিং যুক্ত করে হ্যাশ করে, ফলে দুজন ইউজারের একই পাসওয়ার্ড হলেও হ্যাশ সম্পূর্ণ আলাদা হয় (রেইনবো টেবিল অকেজো হয়ে যায়)। ২) Work Factor (Salt Rounds): এটি ইচ্ছাকৃতভাবে ধীরগতিতে চলে। আমরা সাধারণত ১০ বা ১২ রাউন্ড সল্ট ব্যবহার করি, যা একজন ইউজারের জন্য মাত্র ১০০ মিলিসেকেন্ড নিলেও হ্যাকারের ব্রুট-ফোর্স অ্যাটাক অসম্ভব করে তোলে।",
      "deepDive": [
        "হ্যাশিং একমুখী (One-way)—হ্যাশ থেকে কখনো আসল পাসওয়ার্ড বের করা যায় না।",
        "লগইনের সময় `bcrypt.compare()` ইনপুটের পাসওয়ার্ডকে আগের সল্ট দিয়ে হ্যাশ করে মিলিয়ে দেখে।"
      ],
      "commonMistakes": [
        "হ্যাশিং এবং এনক্রিপশন গুলিয়ে ফেলা (এনক্রিপশন রিভার্স করা যায় কি দিয়ে, কিন্তু হ্যাশিং কখনো রিভার্স করা যায় না)।"
      ],
      "proTips": [
        "সাধারণত ১০-১২ রাউন্ড সল্ট ব্যবহার করাই ইন্ডাস্ট্রির নিরাপদ স্ট্যান্ডার্ড।"
      ]
    }
  },
  {
    "id": "ms-q75-sync-vs-async-file-operations",
    "questionNumber": 75,
    "module": "Node.js & Express",
    "topic": "Server, REST APIs & Middleware",
    "question": "What is the difference between synchronous and asynchronous file operations in Node.js?",
    "banglaQuestion": "Node.js-এ সিঙ্ক্রোনাস এবং অ্যাসিনক্রোনাস ফাইল অপারেশনের মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Node.js",
      "fs Module",
      "Synchronous",
      "Asynchronous",
      "Non-Blocking",
      "Event Loop"
    ],
    "english": {
      "quickAnswer": "Synchronous file operations (`fs.readFileSync`) block the entire Node.js event loop and freeze all incoming server traffic until the file is read, while asynchronous operations (`fs.promises.readFile` or callbacks) offload the task to the libuv thread pool without blocking.",
      "interviewSpeech": "Node.js's `fs` module provides both synchronous and asynchronous methods for filesystem access. Synchronous methods (ending with `Sync`, like `fs.readFileSync`) execute on the main thread and block execution until the disk read finishes. If 1,000 users are browsing your web app and a synchronous read takes 2 seconds, all 1,000 users are completely frozen. Asynchronous methods (`fs.promises.readFile` or callback-based `fs.readFile`) offload the physical disk I/O to libuv's background thread pool, freeing the main thread immediately to handle incoming HTTP requests. Once the file is ready, the callback or resolved promise is pushed onto the event loop.",
      "deepDive": [
        "**Sync Methods**: `fs.readFileSync`, `fs.writeFileSync` (BLOCKS the single thread).",
        "**Async Methods**: `fs.promises.readFile` with `await` or `fs.readFile(path, callback)` (NON-BLOCKING).",
        "**When is Sync acceptable?**: ONLY during initial server bootstrap before `app.listen()` (e.g. reading a local SSL certificate or configuration file once upon boot)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Blocking Sync vs Non-Blocking Async File Reading",
        "code": "const fs = require('fs');\nconst fsPromises = require('fs/promises');\n\n// 1. DANGEROUS IN REQUEST HANDLERS: Synchronous (Blocks the entire server!)\nfunction badHandler(req, res) {\n  const data = fs.readFileSync('/var/log/huge.txt'); // SERVER FREEZES HERE!\n  res.send(data);\n}\n\n// 2. RECOMMENDED: Asynchronous using Promises (Non-blocking!)\nasync function goodHandler(req, res) {\n  try {\n    const data = await fsPromises.readFile('/var/log/huge.txt', 'utf-8');\n    res.send(data); // Other users continue unaffected!\n  } catch (err) {\n    res.status(500).send(err.message);\n  }\n}"
      },
      "commonMistakes": [
        "Using `fs.readFileSync` inside an Express route handler, completely freezing all concurrent users.",
        "Forgetting error handling with `try/catch` around asynchronous file promises."
      ],
      "proTips": [
        "Rule of thumb: Sync operations are acceptable only once during server startup configuration; inside request routes, always use `fs/promises`."
      ]
    },
    "bangla": {
      "quickAnswer": "সিঙ্ক্রোনাস ফাইল অপারেশন (`fs.readFileSync`) পুরো নোডজেএস মেইন থ্রেডকে ব্লক করে সার্ভার ফ্রিজ করে দেয়; আর অ্যাসিনক্রোনাস অপারেশন (`fs.promises.readFile`) ব্যাকগ্রাউন্ড থ্রেডপুলে কাজ চালিয়ে মেইন থ্রেডকে অন্য ইউজারের জন্য সম্পূর্ণ উন্মুক্ত ও সচল রাখে।",
      "interviewSpeech": "Node.js একটি মাত্র মেইন থ্রেডে কাজ করে। আমরা যদি কোনো রাউট হ্যান্ডলারের ভেতরে সিঙ্ক্রোনাস মেথড (`fs.readFileSync`) ব্যবহার করি, তবে ফাইল পড়া শেষ না হওয়া পর্যন্ত পুরো সার্ভার আটকে থাকে—অন্য কোনো ইউজার তখন সাইটে ঢুকতে পারে না। কিন্তু অ্যাসিনক্রোনাস মেথড (`fs.promises.readFile` বা `fs.readFile`) কল করলে নোডজেএস ফাইল পড়ার কাজটি libuv-এর ব্যাকগ্রাউন্ড থ্রেডপুলে পাঠিয়ে দেয় এবং মেইন থ্রেড সাথে সাথে মুক্ত হয়ে অন্য রিকোয়েস্ট প্রসেস করতে থাকে। ফাইল পড়া শেষ হলে প্রমিজ বা কলব্যাকের মাধ্যমে রেসপন্স পাঠিয়ে দেওয়া হয়।",
      "deepDive": [
        "Sync: মেইন থ্রেডকে থামিয়ে দেয় (Blocking)।",
        "Async: ব্যাকগ্রাউন্ডে চলে, সার্ভার সবসময় সচল থাকে (Non-blocking)।"
      ],
      "commonMistakes": [
        "Express রাউটের ভেতর `readFileSync` ব্যবহার করে সার্ভার হ্যাং করে ফেলা।"
      ],
      "proTips": [
        "সার্ভার স্টার্ট করার সময় কনফিগ বা SSL সার্টিফিকেট একবার পড়তে Sync চলতে পারে, তবে API রুটের ভেতর সবসময় `fs/promises` ব্যবহার করবেন।"
      ]
    }
  },
  {
    "id": "ms-q76-mongodb-vs-sql",
    "questionNumber": 76,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is MongoDB and how does it differ from SQL databases?",
    "banglaQuestion": "MongoDB কী এবং এটি SQL ডাটাবেজ থেকে কীভাবে আলাদা?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "NoSQL",
      "SQL vs NoSQL",
      "BSON",
      "Horizontal Scaling"
    ],
    "english": {
      "quickAnswer": "MongoDB is a leading open-source NoSQL document database that stores flexible JSON-like BSON documents without requiring rigid relational schemas or complex multi-table joins.",
      "interviewSpeech": "Traditional relational databases (like PostgreSQL, MySQL) store data in structured tabular relations with rigid schemas, foreign keys, and normalize data across separate tables requiring expensive SQL joins. MongoDB is a distributed, NoSQL document-oriented database. Instead of tables and rows, MongoDB organizes data into Collections and Documents. Each document is stored as BSON (Binary JSON). This provides dynamic schema flexibility—different documents in the same collection can have different fields. Furthermore, MongoDB is built from the ground up for horizontal scaling across distributed clusters using native sharding and replica sets.",
      "deepDive": [
        "**Schema**: SQL requires predefined static schemas (`CREATE TABLE`); MongoDB is flexible and polymorphic.",
        "**Scaling**: SQL typically scales vertically (bigger server CPU/RAM); MongoDB scales horizontally (sharding across clusters).",
        "**Data Model**: SQL uses Tables, Rows, Columns; MongoDB uses Databases, Collections, Documents."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Relational Mapping vs MongoDB Document Structure",
        "code": "// SQL Concept   -> MongoDB Equivalent\n// Table         -> Collection\n// Row           -> Document\n// Column        -> Field\n// Foreign Key   -> Reference (ObjectId) / Embedded Document\n\n// Example MongoDB Document (in BSON format):\n{\n  \"_id\": ObjectId(\"65dfa1b2c4e3f2001a4b5678\"),\n  \"name\": \"Sarah Khan\",\n  \"skills\": [\"React\", \"Node.js\", \"MongoDB\"],\n  \"address\": {\n    \"city\": \"Dhaka\",\n    \"country\": \"Bangladesh\"\n  }\n}"
      },
      "commonMistakes": [
        "Thinking MongoDB doesn't support ACID transactions (multi-document ACID transactions have been supported since MongoDB 4.0).",
        "Assuming MongoDB has zero schema rules (in production, Mongoose or JSON schema validators provide strict schema enforcement)."
      ],
      "proTips": [
        "Mention use cases: 'Use MongoDB when rapid development, hierarchical embedded documents, or massive horizontal write scalability are required.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MongoDB হলো একটি শীর্ষস্থানীয় NoSQL ডকুমেন্ট ডাটাবেজ, যা ডেটাকে টেবিল ও রো-এর বদলে ফ্লেক্সিবল JSON-এর মতো BSON ডকুমেন্টে সংরক্ষণ করে এবং অতি সহজে হরিজন্টালি স্কেল করা যায়।",
      "interviewSpeech": "PostgreSQL বা MySQL-এর মতো রিলেশনাল ডাটাবেজে ডেটা ফিক্সড স্কিমার টেবিলে রো আকারে থাকে এবং একাধিক টেবিল থেকে ডেটা আনতে ভারী JOIN কুয়েরি করতে হয়। অন্যদিকে MongoDB হলো NoSQL ডকুমেন্ট ডাটাবেজ। এতে টেবিলের জায়গায় থাকে Collection এবং রো-এর জায়গায় থাকে Document। প্রতিটি ডকুমেন্ট BSON ফরম্যাটে সেভ থাকে, যাতে নেস্টেড অবজেক্ট ও অ্যারে সরাসরি সেভ করা যায়। এর ফলে কোনো ফিক্সড স্কিমার সীমাবদ্ধতা থাকে না এবং ক্লাস্টারের মাধ্যমে হাজার হাজার সার্ভারে হরিজন্টাল স্কেলিং (Sharding) খুব সহজে করা যায়।",
      "deepDive": [
        "SQL: টেবিল, রো, কলাম।",
        "MongoDB: ডাটাবেজ, কালেকশন, ডকুমেন্ট।",
        "রিলেশন ছাড়া নেস্টেড ডেটা একসাথে রাখা যায় (Embedded Documents)।"
      ],
      "commonMistakes": [
        "মনে করা যে মঙ্গোডিবিতে কোনো ট্রানজাকশন সাপোর্ট নেই (MongoDB 4.0 থেকে মাল্টি-ডকুমেন্ট ACID ট্রানজাকশন পুরোপুরি সমর্থিত)।"
      ],
      "proTips": [
        "MERN স্ট্যাকে জাভাস্ক্রিপ্ট অবজেক্টের সাথে হুবহু মিলে যাওয়ায় MongoDB সবচেয়ে বেশি জনপ্রিয়।"
      ]
    }
  },
  {
    "id": "ms-q77-mongodb-document-format",
    "questionNumber": 77,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is a document in MongoDB and what format does it use?",
    "banglaQuestion": "MongoDB-তে Document কী এবং এটি কোন ফরম্যাট ব্যবহার করে?",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "MongoDB",
      "Document",
      "BSON",
      "JSON",
      "Data Types"
    ],
    "english": {
      "quickAnswer": "A document in MongoDB is a single data record composed of field-and-value pairs, stored internally in BSON (Binary JSON) format with a 16MB maximum document size limit.",
      "interviewSpeech": "In MongoDB, a document corresponds to a row in a relational database. Documents use key-value pairs where values can be primitive types, arrays, or even nested sub-documents. While developers view and query documents as JSON in their code, MongoDB internally serializes and stores them on disk in BSON (Binary JSON). BSON was engineered by MongoDB to be lightweight, fast to traverse, and capable of encoding rich data types not supported by standard JSON—such as raw `Date` objects, 64-bit integers (`long`), `ObjectId`, binary buffers, and regex patterns. MongoDB imposes a 16MB limit per document to prevent runaway memory usage.",
      "deepDive": [
        "**Why BSON over JSON?**: BSON is binary, has length prefixes for fast O(1) field scanning, and preserves data types (standard JSON lacks Date or binary types).",
        "**16MB Limit**: Guarantees a single document cannot saturate RAM; larger files use MongoDB GridFS.",
        "**Polymorphic**: Documents within the same collection can have differing fields without breaking the collection."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "MongoDB Document with Nested Structures & BSON Types",
        "code": "{\n  \"_id\": ObjectId(\"64f8c12a3d4f1a2b3c4d5e6f\"), // BSON 12-byte ObjectId\n  \"title\": \"Mastering Fullstack\",\n  \"views\": NumberLong(1500000),                // BSON 64-bit Long Integer\n  \"publishedAt\": ISODate(\"2026-03-15T08:00Z\"), // Native BSON Date\n  \"tags\": [\"nodejs\", \"mongodb\", \"react\"],       // Array\n  \"author\": {                                   // Embedded Sub-document\n    \"name\": \"Rakib\",\n    \"verified\": true\n  }\n}"
      },
      "commonMistakes": [
        "Thinking MongoDB stores plain JSON text files on disk (it stores binary BSON).",
        "Attempting to store massive media files directly inside a document exceeding the 16MB limit."
      ],
      "proTips": [
        "Explain BSON's performance edge: 'BSON stores field length prefixes, allowing the database engine to skip past irrelevant fields instantly without scanning every character.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MongoDB-তে Document হলো ডেটার একক রেকর্ড যা ফিল্ড এবং ভ্যালু আকারে থাকে এবং এটি মেমরিতে BSON (Binary JSON) ফরম্যাটে সেভ হয়। প্রতিটি ডকুমেন্টের সর্বোচ্চ সাইজ হতে পারে 16MB।",
      "interviewSpeech": "রিলেশনাল ডাটাবেজের একটি রো (Row)-কে মঙ্গোডিবিতে Document বলা হয়। ডেভেলপার হিসেবে আমরা জাভাস্ক্রিপ্ট অবজেক্ট বা JSON-এর মতো দেখতে পেলেও, মঙ্গোডিবি ইন্টারনালি ডিস্কে এটি BSON (Binary JSON) ফরম্যাটে সেভ করে। সাধারণ JSON-এ Date, ObjectId, বাইনারি ডেটা বা বড় ইন্টিজারের মতো ডেটা টাইপ সাপোর্ট করে না। BSON বাইনারি ফরম্যাট হওয়ায় এটি খুব দ্রুত ট্রাভার্স করা যায় এবং এতে অতিরিক্ত সব ডেটা টাইপ সাপোর্ট করে। প্রতিটি ডকুমেন্টের সাইজ সর্বোচ্চ 16MB পর্যন্ত হতে পারে যাতে সার্ভারের র‍্যাম অতিরিক্ত লোড না হয়।",
      "deepDive": [
        "BSON হলো বাইনারি এনকোডেড JSON।",
        "BSON-এ আসল Date অবজেক্ট এবং ObjectId সংরক্ষিত থাকে।",
        "16MB-র বেশি বড় ফাইলের জন্য MongoDB GridFS ব্যবহার করা হয়।"
      ],
      "commonMistakes": [
        "মনে করা যে মঙ্গোডিবি ডিস্কে প্লেইন টেক্সট JSON সেভ করে।"
      ],
      "proTips": [
        "BSON-এর কারণে ডাটাবেজ ইঞ্জিন খুব দ্রুত ফিল্ড স্কিপ করে কুয়েরি করতে পারে।"
      ]
    }
  },
  {
    "id": "ms-q78-what-is-mongoose",
    "questionNumber": 78,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is Mongoose and what advantages does it offer over the MongoDB driver?",
    "banglaQuestion": "Mongoose কী এবং সাধারণ MongoDB ড্রাইভারের চেয়ে এটি কী কী বাড়তি সুবিধা দেয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "MongoDB",
      "ODM",
      "Schema",
      "Validation",
      "Middleware"
    ],
    "english": {
      "quickAnswer": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides schema-based modeling, built-in type casting, validations, middleware hooks, and query building out of the box.",
      "interviewSpeech": "The official native MongoDB Node.js driver allows direct communication with the database, but it is low-level and schema-less. Any document with missing or corrupted fields can accidentally be saved. Mongoose provides a higher-level ODM abstraction over the native driver. Its key advantages include: 1) **Strict Schemas**: Enforces required fields, types, and defaults at the application layer. 2) **Built-in Validation**: Custom validators, regex matching, and enums. 3) **Middleware Hooks**: `pre` and `post` hooks for password hashing or cascading deletes. 4) **Population**: Convenient simulated joins via `populate()`. 5) **Business Logic**: Attaching custom instance methods and virtual properties directly to models.",
      "deepDive": [
        "**ODM definition**: Maps MongoDB documents to rich JavaScript objects.",
        "**Type Casting**: Automatically casts strings to numbers or ObjectIds where appropriate.",
        "**Lean Queries**: Mongoose wraps results in heavy Mongoose Documents; appending `.lean()` returns plain JS objects, speeding up read queries by 3-5x."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Native Mongo Driver vs Elegant Mongoose Model",
        "code": "// Native MongoDB Driver (Low level, no validation):\n// const collection = db.collection('users');\n// await collection.insertOne({ name: 123, email: 'not-an-email' }); // Permitted!\n\n// Mongoose ODM (Strict, validated, structured):\nconst mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, required: true, unique: true, lowercase: true },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' }\n});\n\nconst User = mongoose.model('User', userSchema);\n// Will immediately reject invalid data with friendly validation errors!"
      },
      "commonMistakes": [
        "Believing Mongoose is mandatory for MongoDB (it is an optional abstraction; you can use the native driver or Prisma).",
        "Forgetting to use `.lean()` on read-only queries, incurring heavy Mongoose document hydration performance costs."
      ],
      "proTips": [
        "In production read-heavy APIs, always mention `.lean()`: 'Using `.lean()` on Mongoose queries bypasses full document hydration for 3-5x faster responses.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose হলো Node.js এবং MongoDB-এর জন্য একটি Object Data Modeling (ODM) লাইব্রেরি, যা স্কিমা ডিফাইন করা, ডেটা ভ্যালিডেশন, মিডলওয়্যার হুকস এবং রিলেশনশিপ হ্যান্ডলিংকে অবিশ্বাস্যরকম সহজ করে দেয়।",
      "interviewSpeech": "সাধারণ নেটিভ মঙ্গোডিবি ড্রাইভার খুব লো-লেভেলের এবং এতে কোনো স্কিমা বা ডেটা চেকিং থাকে না, ফলে যে কেউ ভুল ডেটা ডাটাবেজে ঢুকিয়ে ফেলতে পারে। Mongoose এই নেটিভ ড্রাইভারের উপরে একটি চমৎকার শক্তিশালী আবরণ তৈরি করে। এর সুবিধাগুলো হলো: ১) স্কিমা বাধ্যবাধকতা (কোন ফিল্ড রিকোয়ার্ড, কী টাইপ হবে), ২) ডেটা ভ্যালিডেশন (ইমেইল বা পাসওয়ার্ডের সঠিক ফরম্যাট চেক), ৩) মিডলওয়্যার বা হুকস (সেভ করার ঠিক আগে স্বয়ংক্রিয়ভাবে পাসওয়ার্ড হ্যাশ করা), এবং ৪) পপুলেট মেথড (এক কালেকশনের সাথে অন্য কালেকশনের রিলেশনশিপ সহজে কুয়েরি করা)।",
      "deepDive": [
        "নেটিভ ড্রাইভারের তুলনায় কোড অনেক বেশি নিরাপদ ও পরিষ্কার হয়।",
        "শুধু রিড কুয়েরির ক্ষেত্রে `.lean()` মেথড ব্যবহার করলে গতি ৩-৫ গুণ বেড়ে যায়।"
      ],
      "commonMistakes": [
        "Mongoose-কে MongoDB ডাটাবেজ মনে করা (মঙ্গোডিবি হলো আসল ডাটাবেজ, আর মানগুজ হলো নোডজেএস লাইব্রেরি)।"
      ],
      "proTips": [
        "রিড-অনলি কুয়েরিতে সবসময় `.lean()` ব্যবহার করার কথা ইন্টারভিউতে বলুন।"
      ]
    }
  },
  {
    "id": "ms-q79-mongoose-schemas-and-models",
    "questionNumber": 79,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What are Mongoose schemas and models?",
    "banglaQuestion": "Mongoose Schema এবং Model কী? এদের ভূমিকা ব্যাখ্যা করুন।",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Schema",
      "Model",
      "ODM",
      "Database Design"
    ],
    "english": {
      "quickAnswer": "A Mongoose **Schema** defines the structure, data types, validators, and defaults for documents in a collection, while a **Model** is a compiled constructor class providing the programmatic interface to query, create, update, and delete documents.",
      "interviewSpeech": "Think of a Schema as the architectural blueprint and the Model as the active construction contractor. `mongoose.Schema` outlines the document's shape—declaring fields, BSON data types, default values, custom validation rules, and indexes. Once the schema is configured, `mongoose.model('User', userSchema)` compiles it into a Model. The model is a wrapper around the schema that acts as an interface to the underlying MongoDB collection, giving you access to static CRUD methods like `User.find()`, `User.create()`, and `User.findByIdAndUpdate()`. Instances of models represent individual documents.",
      "deepDive": [
        "**Collection Naming**: Mongoose automatically pluralizes and lowercases the model name for the collection (e.g. `User` becomes `users`, `Person` becomes `people`).",
        "**Timestamps Option**: `{ timestamps: true }` automatically adds and manages `createdAt` and `updatedAt`.",
        "**Virtuals**: Properties defined on schemas that can be read like normal fields but are computed on-the-fly and not saved to disk."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Defining a Schema and Compiling a Model",
        "code": "const mongoose = require('mongoose');\n\n// 1. The SCHEMA: The structural blueprint\nconst productSchema = new mongoose.Schema({\n  name: { type: String, required: [true, 'Product name is required'], trim: true },\n  price: { type: Number, required: true, min: 0 },\n  category: { type: String, default: 'General' }\n}, { timestamps: true });\n\n// 2. The MODEL: The compiled constructor interface\nconst Product = mongoose.model('Product', productSchema);\n// Targets the 'products' collection automatically!\n\n// 3. Using the Model for CRUD\nasync function createNewProduct() {\n  const item = await Product.create({ name: 'Mechanical Keyboard', price: 79.99 });\n  console.log('Created product ID:', item._id);\n}"
      },
      "commonMistakes": [
        "Trying to perform database operations directly on the Schema instead of the compiled Model.",
        "Confusing model name with collection name (Mongoose pluralizes `Student` to `students`)."
      ],
      "proTips": [
        "Always pass `{ timestamps: true }` as the second argument to schemas to get automated audit tracking."
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose **Schema** হলো ডকুমেন্টের স্ট্রাকচার বা ব্লুপ্রিন্ট (কোন ফিল্ড থাকবে, টাইপ কী), আর **Model** হলো সেই স্কিমা থেকে কম্পাইল হওয়া কনস্ট্রাকটর ক্লাস যা দিয়ে ডাটাবেজে কুয়েরি এবং CRUD অপারেশন চালানো হয়।",
      "interviewSpeech": "সহজ উপমায়: Schema হলো বাড়ির নকশা (Blueprint), আর Model হলো সেই নকশা দেখে তৈরি করা আসল কনস্ট্রাক্টর বা ইন্টারফেস। স্কিমার ভেতর আমরা বলে দিই ফিল্ডের নাম কী হবে, তা স্ট্রিং না নাম্বার, কোনো ডিফল্ট ভ্যালু আছে কি না ইত্যাদি। এরপর `mongoose.model('User', userSchema)` দিয়ে মডেল তৈরি করা হয়। এই মডেল ব্যবহার করেই আমরা ডাটাবেজে `User.find()`, `User.create()` ইত্যাদি মেথড চালিয়ে কালেকশনের ডেটা নিয়ে কাজ করি। Mongoose নিজে থেকেই মডেলের নামকে লোয়ারকেস ও প্লুরাল করে কালেকশনের নাম দেয় (যেমন `User` হয়ে যায় `users`)।",
      "deepDive": [
        "Schema: ডকুমেন্টের আকৃতি নির্ধারণ করে।",
        "Model: আসল ডাটাবেজ অপারেশন পরিচালনা করে।",
        "`{ timestamps: true }` অপশন দিলে `createdAt` এবং `updatedAt` নিজে থেকেই তৈরি হয়।"
      ],
      "commonMistakes": [
        "স্কিমার উপর সরাসরি `find()` কল করার চেষ্টা করা (কুয়েরি সবসময় মডেলের উপর করতে হয়)।"
      ],
      "proTips": [
        "মডেলের নাম ক্যাপিটালে সিঙ্গুলার দিন (যেমন `Order`), কালেকশন নিজে থেকেই `orders` হয়ে যাবে।"
      ]
    }
  },
  {
    "id": "ms-q80-find-findone-findbyid",
    "questionNumber": 80,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is the difference between find(), findOne(), and findById() in Mongoose?",
    "banglaQuestion": "Mongoose-এ find(), findOne() এবং findById()-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Queries",
      "find",
      "findOne",
      "findById",
      "CRUD"
    ],
    "english": {
      "quickAnswer": "`find()` returns an array of all matching documents (or empty array); `findOne()` returns the first single document matching the query (or null); `findById()` is shorthand for `findOne({ _id: id })`.",
      "interviewSpeech": "These three methods are the most common reading operations in Mongoose. 1) `Model.find(filter)`: Searches for all documents matching the filter criteria and resolves to an **array** of documents. If no documents match, it returns an empty array `[]`. 2) `Model.findOne(filter)`: Searches for documents matching the filter but returns only the **first** matching single document object (or `null` if no match exists). 3) `Model.findById(id)`: A convenience helper identical to `findOne({ _id: id })`. It automatically casts the provided string ID into a MongoDB BSON `ObjectId` and returns the single document or `null`.",
      "deepDive": [
        "**Return on No Match**: `find()` returns `[]`; `findOne()` and `findById()` return `null`.",
        "**Casting**: `findById('65df...')` automatically casts the string to `new mongoose.Types.ObjectId(...)`. If the ID format is invalid (not 24 hex characters), it throws a CastError.",
        "**Performance**: If you only need one item, use `findOne()` instead of `find()[0]` so the database stops scanning after the first hit."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "find vs findOne vs findById Comparison",
        "code": "// 1. find: Always returns an ARRAY\nconst allAdmins = await User.find({ role: 'admin' });\nconsole.log(Array.isArray(allAdmins)); // true\n\n// 2. findOne: Returns a SINGLE document or null\nconst firstAdmin = await User.findOne({ role: 'admin' });\nif (!firstAdmin) console.log('No admin found');\n\n// 3. findById: Queries specifically by _id (returns document or null)\nconst user = await User.findById('65dfa1b2c4e3f2001a4b5678');\nif (user) console.log('Found user:', user.name);"
      },
      "commonMistakes": [
        "Checking `if (!users)` on the result of `find()`—an empty array `[]` is truthy in JavaScript! Check `users.length === 0` instead.",
        "Passing an invalid length string to `findById()`, which triggers a `CastError` if not validated."
      ],
      "proTips": [
        "Always validate IDs before calling `findById()` using `mongoose.isValidObjectId(id)` to avoid uncaught CastErrors."
      ]
    },
    "bangla": {
      "quickAnswer": "`find()` শর্ত পূরণকারী সকল ডকুমেন্টের একটি অ্যারে রিটার্ন করে; `findOne()` শর্তের সাথে মেলা প্রথম সিঙ্গেল ডকুমেন্টটি (বা null) রিটার্ন করে; আর `findById()` হলো সরাসরি `_id` দিয়ে খোঁজার শর্টকাট।",
      "interviewSpeech": "১) `find()`: ডাটাবেজ থেকে একাধিক ডেটা খুঁজতে ব্যবহৃত হয়। কোনো ম্যাচ না পেলে এটি ফাঁকা অ্যারে `[]` দেয়। ২) `findOne()`: অনেকগুলো ডেটা থাকলেও এটি কেবল প্রথম ম্যাচ করা সিঙ্গেল ডকুমেন্ট অবজেক্টটি তুলে আনে। কিছু না পেলে এটি `null` রিটার্ন করে। ৩) `findById(id)`: এটি মূলত `findOne({ _id: id })`-এর একটি সহজ রূপ। এটি স্বয়ংক্রিয়ভাবে ইনপুট দেওয়া স্ট্রিংকে MongoDB ObjectId-তে কনভার্ট করে কুয়েরি করে এবং রেজাল্ট না পেলে `null` দেয়।",
      "deepDive": [
        "`find()` খালি থাকলে `[]` দেয়, আর `findOne` বা `findById` খালি থাকলে `null` দেয়।",
        "একটি ডেটা দরকার হলে সবসময় `findOne` ব্যবহার করুন, এতে ডাটাবেজ প্রথম আইটেম পাওয়ার পরেই কুয়েরি থামিয়ে দেয়।"
      ],
      "commonMistakes": [
        "`find()` চালিয়ে `if (!result)` দিয়ে চেক করা—জাভাস্ক্রিপ্টে ফাঁকা অ্যারে `[]` কিন্তু ট্রুথি (truthy), তাই `result.length === 0` চেক করতে হবে।"
      ],
      "proTips": [
        "`findById()` ডাকার আগে `mongoose.isValidObjectId(id)` দিয়ে আইডি ভ্যালিড কিনা চেক করা ভালো অভ্যাস।"
      ]
    }
  },
  {
    "id": "ms-q81-crud-operations-mongoose",
    "questionNumber": 81,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "How do you perform CRUD operations in Mongoose?",
    "banglaQuestion": "Mongoose-এ কীভাবে CRUD (Create, Read, Update, Delete) অপারেশন করা হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "CRUD",
      "Create",
      "Read",
      "Update",
      "Delete",
      "Async/Await"
    ],
    "english": {
      "quickAnswer": "CRUD operations in Mongoose are performed asynchronously using Model methods: Create (`Model.create`), Read (`find`, `findById`), Update (`findByIdAndUpdate`, `updateOne`), and Delete (`findByIdAndDelete`, `deleteOne`).",
      "interviewSpeech": "CRUD represents the four fundamental database operations. In Mongoose: 1) **Create**: `Model.create(data)` or `new Model(data).save()`. 2) **Read**: `Model.find()` for lists, `Model.findById(id)` for specific records. 3) **Update**: `Model.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })`. The `{ new: true }` option ensures the method returns the updated document rather than the old original, and `{ runValidators: true }` ensures schema validations run on updates. 4) **Delete**: `Model.findByIdAndDelete(id)` or `Model.deleteOne(filter)`. All operations return Promises and are awaited using `async/await`.",
      "deepDive": [
        "**`{ new: true }` option**: By default, Mongoose update methods return the old document; set `new: true` to get the modified result.",
        "**`{ runValidators: true }`**: Crucial because Mongoose update queries skip schema validations by default unless this flag is passed.",
        "**`save()` vs `findByIdAndUpdate()`**: `save()` executes `pre('save')` middleware (like bcrypt password hashing); `findByIdAndUpdate` bypasses `save` middleware."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Complete Mongoose CRUD Example Flow",
        "code": "// 1. CREATE\nconst newUser = await User.create({ name: 'Tamim', email: 'tamim@test.com' });\n\n// 2. READ\nconst users = await User.find({ role: 'student' }).lean();\nconst user = await User.findById(newUser._id);\n\n// 3. UPDATE (Always include { new: true, runValidators: true })\nconst updatedUser = await User.findByIdAndUpdate(\n  newUser._id,\n  { $set: { name: 'Tamim Iqbal' } },\n  { new: true, runValidators: true }\n);\n\n// 4. DELETE\nawait User.findByIdAndDelete(newUser._id);"
      },
      "commonMistakes": [
        "Forgetting `{ new: true }` on update operations and wondering why the API response contains the stale, pre-update document.",
        "Forgetting `{ runValidators: true }` on updates, allowing invalid data to bypass schema rules."
      ],
      "proTips": [
        "Always pass `{ new: true, runValidators: true }` when performing `findByIdAndUpdate`."
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose-এ CRUD অপারেশনগুলো হলো: Create (`Model.create`), Read (`find`, `findById`), Update (`findByIdAndUpdate`), এবং Delete (`findByIdAndDelete`)।",
      "interviewSpeech": "Mongoose-এ CRUD অপারেশন সম্পূর্ণ অ্যাসিনক্রোনাস: ১) Create: `User.create({ ... })` দিয়ে নতুন ডকুমেন্ট সেভ করা হয়। ২) Read: `User.find()` দিয়ে সকল ডেটা এবং `User.findById(id)` দিয়ে নির্দিষ্ট ডেটা রিড করা হয়। ৩) Update: `User.findByIdAndUpdate(id, data, { new: true, runValidators: true })` দিয়ে ডেটা আপডেট করা হয়। এখানে `{ new: true }` না দিলে পুরোনো ডেটা ফেরত দেয় এবং `{ runValidators: true }` না দিলে স্কিমা ভ্যালিডেশন চেক হয় না। ৪) Delete: `User.findByIdAndDelete(id)` দিয়ে ডেটা মুছে ফেলা হয়।",
      "deepDive": [
        "`{ new: true }`: আপডেটেড নতুন ডেটা ফেরত পাওয়ার জন্য আবশ্যক।",
        "`{ runValidators: true }`: আপডেটের সময়ও স্কিমার নিয়ম কার্যকর রাখতে প্রয়োজন।",
        "পাসওয়ার্ড হ্যাশিংয়ের জন্য `save()` মেথড ব্যবহার করা নিরাপদ কারণ এটি প্রি-হুক রান করায়।"
      ],
      "commonMistakes": [
        "আপডেট করার সময় `{ new: true }` দিতে ভুলে গিয়ে পুরোনো ডেটা রেসপন্স পাঠানো।"
      ],
      "proTips": [
        "`findByIdAndUpdate`-এ সবসময় `{ new: true, runValidators: true }` অপশন দুটি দিয়ে রাখুন।"
      ]
    }
  },
  {
    "id": "ms-q82-mongodb-indexes",
    "questionNumber": 82,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What are MongoDB indexes and why are they important?",
    "banglaQuestion": "MongoDB Indexes কী এবং এগুলো কেন গুরুত্বপূর্ণ?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Indexes",
      "B-Tree",
      "Performance",
      "Query Optimization",
      "COLLSCAN vs IXSCAN"
    ],
    "english": {
      "quickAnswer": "Indexes are special data structures (B-Trees) that store a small, sorted portion of the collection's data to allow MongoDB to locate documents in O(log n) time without performing an expensive Collection Scan (COLLSCAN).",
      "interviewSpeech": "Without indexes, when you query a collection (e.g. `db.users.find({ email: 'user@test.com' })`), MongoDB must perform a Collection Scan (COLLSCAN)—meaning it sequentially reads every single document in the collection from disk. For a collection with 10 million records, a COLLSCAN takes seconds and maxes out CPU and disk I/O. An index creates a sorted B-Tree data structure on the specified field. Instead of scanning 10 million documents, MongoDB executes an Index Scan (IXSCAN), traversing the tree in logarithmic time `O(log n)` and retrieving the document in a few milliseconds. Indexes also enforce unique constraints (`unique: true`) and power compound/text searches.",
      "deepDive": [
        "**Types**: Single field, Compound (`{ user: 1, date: -1 }`), Unique, Multikey (indexing arrays), Text (full-text search), and TTL (Time-To-Live auto expiry).",
        "**Trade-off**: Indexes dramatically speed up Reads, but slightly slow down Writes/Inserts because every write must update the B-Tree.",
        "**Explain Plan**: Use `.explain('executionStats')` to verify that your query uses `IXSCAN` instead of `COLLSCAN`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Creating Indexes in Mongoose Schema and Using explain()",
        "code": "const userSchema = new mongoose.Schema({\n  username: { type: String, required: true },\n  email: { type: String, required: true, unique: true, index: true }, // Single unique index\n  status: String,\n  createdAt: Date\n});\n\n// Compound Index: Optimizes queries sorting by createdAt for a specific status\nuserSchema.index({ status: 1, createdAt: -1 });\n\n// Inspecting Query Performance:\nconst stats = await User.find({ status: 'active' })\n  .sort({ createdAt: -1 })\n  .explain('executionStats');\nconsole.log('Stage:', stats.executionStats.executionStages.stage); // 'IXSCAN' (Fast!)"
      },
      "commonMistakes": [
        "Indexing every single field in a collection (wastes massive RAM and severely slows down write/insert performance).",
        "Ordering compound index fields incorrectly (compound indexes must adhere to the Equality, Sort, Range / ESR rule)."
      ],
      "proTips": [
        "Remember the 'ESR Rule' for compound indexes: Place Equality filters first, Sort fields second, and Range filters last."
      ]
    },
    "bangla": {
      "quickAnswer": "Index হলো বিশেষ ডেটা স্ট্রাকচার (B-Tree) যা ডেটাকে সাজিয়ে রাখে, যার ফলে পুরো কালেকশনের কোটি কোটি ডকুমেন্ট না খুঁজে (COLLSCAN) চোখের পলকে নির্দিষ্ট ডকুমেন্টটি খুঁজে পাওয়া যায় (IXSCAN)।",
      "interviewSpeech": "ডাটাবেজে ইনডেক্স ছাড়া কোনো তথ্য খুঁজতে গেলে পুরো কালেকশন এক এক করে পড়তে হয়—যাকে Collection Scan (COLLSCAN) বলে। কালেকশনে লাখ লাখ ডেটা থাকলে কুয়েরি করতে কয়েক সেকেন্ড লেগে যায় এবং সার্ভার হ্যাং হয়ে যায়। কিন্তু ইনডেক্স করা থাকলে বইয়ের সূচিপত্রের মতো ডেটার একটি সাজানো B-Tree তৈরি হয়। ফলে কোটি ডকুমেন্টের মাঝেও মাত্র কয়েক মিলিসেকেন্ডে কাঙ্ক্ষিত ডেটা পাওয়া যায় (IXSCAN)। ইনডেক্স দিয়ে ইউনিক ভ্যালু (`unique: true`) নিশ্চিত করা যায় এবং স্বয়ংক্রিয়ভাবে পুরোনো ডেটা মুছে ফেলার জন্য TTL ইনডেক্স ব্যবহার করা যায়। তবে মনে রাখতে হবে—ইনডেক্স রিড ফাস্ট করলেও রাইট অপারেশন কিছুটা স্লো করে।",
      "deepDive": [
        "COLLSCAN (খারাপ): পুরো টেবিল বা কালেকশন স্ক্যান করে।",
        "IXSCAN (ভালো): ইনডেক্স ট্রি দিয়ে সরাসরি ডেটায় যায়।",
        "ট্রেড-অফ: রিড কুয়েরি সুপার ফাস্ট হয়, কিন্তু রাইট ও র‍্যাম মেমোরির খরচ কিছুটা বাড়ে।"
      ],
      "commonMistakes": [
        "প্রয়োজন ছাড়া সব ফিল্ডে ইনডেক্স বসিয়ে দেওয়া—এতে প্রচুর মেমোরি নষ্ট হয় এবং ডেটা ইনসার্ট করতে অনেক সময় লাগে।"
      ],
      "proTips": [
        "কুয়েরি অপটিমাইজেশন মাপতে `.explain('executionStats')` মেথড ব্যবহার করার পরামর্শ দিন।"
      ]
    }
  },
  {
    "id": "ms-q83-aggregation-pipeline",
    "questionNumber": 83,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is the aggregation pipeline in MongoDB?",
    "banglaQuestion": "MongoDB-তে Aggregation Pipeline কী এবং এটি কীভাবে কাজ করে?",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Aggregation",
      "Pipeline",
      "Analytics",
      "$match",
      "$group",
      "$lookup"
    ],
    "english": {
      "quickAnswer": "The Aggregation Pipeline is a multi-stage framework for advanced data processing, transformation, grouping, and analytics where documents pass through an ordered sequence of processing stages (like an assembly line).",
      "interviewSpeech": "While standard `find()` queries simply filter and project documents, the Aggregation Pipeline is MongoDB's powerhouse for advanced data processing and analytics. Documents enter a multi-stage pipeline where the output of each stage becomes the input to the next stage. Common stages include: 1) `$match` (filters documents, should be placed first to leverage indexes), 2) `$group` (aggregates data by a key, calculating sums, averages, counts), 3) `$sort` (orders results), 4) `$project` (reshapes fields), 5) `$lookup` (performs relational left-outer joins with other collections), and 6) `$unwind` (deconstructs arrays).",
      "deepDive": [
        "**Pipeline Metaphor**: Factory assembly line where each worker performs one transformation.",
        "**Core Stages**: `$match` -> `$lookup` -> `$unwind` -> `$group` -> `$sort` -> `$limit`.",
        "**Performance**: Always put `$match` and `$sort` as early as possible in the pipeline to utilize indexes before documents are transformed in memory."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Aggregation Pipeline Calculating Monthly Sales Analytics",
        "code": "const salesSummary = await Order.aggregate([\n  // Stage 1: Filter completed orders in 2026\n  {\n    $match: {\n      status: 'completed',\n      createdAt: { $gte: new Date('2026-01-01') }\n    }\n  },\n  // Stage 2: Group by customer and calculate totals\n  {\n    $group: {\n      _id: '$customer',\n      totalSpent: { $sum: '$totalAmount' },\n      orderCount: { $sum: 1 }\n    }\n  },\n  // Stage 3: Filter customers who spent over 500\n  {\n    $match: { totalSpent: { $gte: 500 } }\n  },\n  // Stage 4: Sort descending by highest spenders\n  {\n    $sort: { totalSpent: -1 }\n  }\n]);"
      },
      "commonMistakes": [
        "Placing `$group` before `$match`, forcing MongoDB to group millions of documents before filtering.",
        "Using complex JS `Array.prototype.reduce` in Node.js instead of letting MongoDB's native C++ aggregation engine handle calculations."
      ],
      "proTips": [
        "Rule of thumb: 'Always filter early ($match) to reduce the document volume before entering heavy processing stages ($lookup, $group).'"
      ]
    },
    "bangla": {
      "quickAnswer": "Aggregation Pipeline হলো MongoDB-এর এমন একটি শক্তিশালী ফ্রেমওয়ার্ক যার মাধ্যমে ডেটাকে ধাপে ধাপে (Stages) ফিল্টার, গ্রুপ, ট্রান্সফর্ম এবং অ্যানালিটিক্যাল হিসাব-নিকাশ করে কাঙ্ক্ষিত ফলাফল বের করা যায়।",
      "interviewSpeech": "সাধারণ `find()` কুয়েরি দিয়ে জটিল অ্যানালিটিক্স বা গ্রুপিং করা যায় না। Aggregation Pipeline একটি কারখানার কনভেয়ার বেল্টের মতো কাজ করে। এখানে ডেটা এক স্টেজ থেকে অন্য স্টেজে যায় এবং প্রতিটি স্টেজের আউটপুট পরবর্তী স্টেজের ইনপুট হয়। প্রধান স্টেজগুলো হলো: ১) `$match`: নির্দিষ্ট শর্ত অনুযায়ী ডেটা ফিল্টার করে (সবার শুরুতে রাখা উচিত)। ২) `$group`: নির্দিষ্ট ফিল্ডের ভিত্তিতে ডেটা গ্রুপ করে যোগফল, গড় বা কাউন্ট হিসাব করে। ৩) `$sort`: রেজাল্ট সাজায়। ৪) `$lookup`: অন্য কালেকশনের সাথে রিলেশনাল JOIN তৈরি করে। ৫) `$unwind`: অ্যারে ভেঙে আলাদা ডকুমেন্টে রূপান্তর করে।",
      "deepDive": [
        "ফ্যাক্টরির অ্যাসেম্বলি লাইনের মতো ধাপে ধাপে কাজ করে।",
        "জটিল বিজনেস রিপোর্ট ও ড্যাশবোর্ড ডেটার জন্য অপরিহার্য।",
        "`$lookup` স্টেজ দিয়ে SQL-এর মতো LEFT JOIN করা যায়।"
      ],
      "commonMistakes": [
        "`$match` শুরুতে না দিয়ে পরে দেওয়া—ফলে অপ্রয়োজনীয় লাখ লাখ ডেটা প্রসেস করতে গিয়ে কুয়েরি স্লো হয়ে যায়।"
      ],
      "proTips": [
        "সবসময় পাইপলাইনের সবার শুরুতে `$match` ও `$sort` ব্যবহার করুন যাতে ইনডেক্সের পূর্ণ সুবিধা পাওয়া যায়।"
      ]
    }
  },
  {
    "id": "ms-q84-mongoose-population",
    "questionNumber": 84,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is population (populate) in Mongoose and when do you use it?",
    "banglaQuestion": "Mongoose-এ Population (populate) কী এবং এটি কখন ব্যবহার করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "populate",
      "References",
      "ObjectId",
      "Joins",
      "Relations"
    ],
    "english": {
      "quickAnswer": "Population in Mongoose is a mechanism that automatically replaces a referenced `ObjectId` in a document with the actual document data from another collection, simulating relational joins at the application layer.",
      "interviewSpeech": "In MongoDB, referencing is the standard pattern for modeling normalized relationships (e.g., an Order document storing the `ObjectId` of a User in its `customer` field). By default, querying the order only returns the hex string ID. Mongoose's `populate()` method automatically executes a secondary query behind the scenes to fetch the corresponding User document and swaps the raw ID with the full populated user object. You use it whenever you need normalized relational data without manually writing separate queries. However, because it runs separate queries behind the scenes, over-populating multiple nested relationships can degrade performance.",
      "deepDive": [
        "**Schema Requirement**: Field must have type `mongoose.Schema.Types.ObjectId` and a `ref: 'ModelName'` pointing to the target model.",
        "**Field Selection**: `populate('customer', 'name email')` populates only specific fields.",
        "**Under the Hood**: Population is NOT a database-level join; Mongoose executes an automatic `find({ _id: { $in: [...] } })` query and maps the results in Node.js memory."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Configuring References and Querying with populate()",
        "code": "// 1. Schema with Reference\nconst postSchema = new mongoose.Schema({\n  title: String,\n  author: {\n    type: mongoose.Schema.Types.ObjectId,\n    ref: 'User', // References the 'User' model\n    required: true\n  }\n});\nconst Post = mongoose.model('Post', postSchema);\n\n// 2. Querying with populate (selects only author's name and email)\nconst postWithAuthor = await Post.findById(postId)\n  .populate('author', 'name email')\n  .lean();\n\nconsole.log(postWithAuthor.author.name); // Full author object accessible!"
      },
      "commonMistakes": [
        "Thinking `populate()` is a native MongoDB server-side SQL join (it is performed in Node.js memory by Mongoose executing multiple queries).",
        "Deep multi-level population (`populate('a.b.c.d')`), which can trigger dozens of queries and destroy response times (use Aggregation `$lookup` for heavy joins)."
      ],
      "proTips": [
        "Always select only the fields you need in `populate('user', 'name avatar')` to avoid sending passwords or private user data."
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose-এ `populate()` হলো এমন একটি মেথড যা ডকুমেন্টের ভেতরে থাকা অন্য ডকুমেন্টের রেফারেন্স আইডিকে (`ObjectId`) স্বয়ংক্রিয়ভাবে আসল ডকুমেন্টের অবজেক্ট দিয়ে প্রতিস্থাপন করে দেয় (যা অনেকটা SQL JOIN-এর মতো)।",
      "interviewSpeech": "মঙ্গোডিবিতে এক কালেকশনের সাথে অন্য কালেকশনের রিলেশন বোঝাতে আমরা সাধারণত `ObjectId` রেফারেন্স হিসেবে রাখি। যেমন একটি `Post`-এর মধ্যে `author` হিসেবে ইউজারের আইডি থাকে। শুধু কুয়েরি করলে শুধু আইডিটিই পাওয়া যায়। কিন্তু `.populate('author')` দিলে Mongoose ব্যাকগ্রাউন্ডে ইউজার কালেকশনে কুয়েরি চালিয়ে সেই আইডির পুরো ইউজার তথ্য এনে ওই জায়গায় বসিয়ে দেয়। এর ফলে আমাদের ম্যানুয়ালি আলাদা কুয়েরি করতে হয় না। তবে মনে রাখতে হবে এটি ডাটাবেজ লেভেলের আসল JOIN নয়, Mongoose অ্যাপ লেভেলে একাধিক কুয়েরি করে এটি মেলায়।",
      "deepDive": [
        "**মূল ধারণা**: Mongoose-এ `populate()` হলো এমন একটি মেথড যা ডকুমেন্টের ভেতরে থাকা অন্য ডকুমেন্টের রেফারেন্স আইডিকে (`ObjectId`) স্বয়ংক্রিয়ভাবে আসল ডকুমেন্টের অবজেক্ট দিয়ে প্রতিস্থাপন করে দেয় (যা অনেকটা SQL JOIN-এর মতো)।",
        "**প্রয়োগক্ষেত্র**: বাস্তব প্রজেক্টে বাগ এড়াতে ও কোড ক্লিন রাখতে এই প্যাটার্ন অত্যন্ত জরুরি।",
        "**ইন্টারভিউ টিপস**: বাস্তব উদাহরণ এবং সঠিক টার্মিনোলজি ব্যবহার করে গুছিয়ে উত্তর দিন।"
      ]
    }
  },
  {
    "id": "ms-q85-mongodb-operators",
    "questionNumber": 85,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What are MongoDB operators like $set, $push, $pull, and $in?",
    "banglaQuestion": "MongoDB-র $set, $push, $pull, এবং $in অপারেটরগুলো কী এবং কীভাবে কাজ করে?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Operators",
      "$set",
      "$push",
      "$pull",
      "$in",
      "Atomic Updates"
    ],
    "english": {
      "quickAnswer": "MongoDB operators are atomic update and query keywords starting with `$`: `$set` updates specific fields, `$push` appends an item to an array, `$pull` removes matching items from an array, and `$in` matches any value within a specified list.",
      "interviewSpeech": "MongoDB operators allow atomic, in-place document modifications and advanced filtering directly in the database without needing to fetch, mutate in JavaScript, and write back the entire document. 1) `$set`: Replaces the value of specified fields without affecting any other fields. 2) `$push`: Appends an element to an array field. 3) `$pull`: Removes all instances of a value or matching condition from an array. 4) `$in`: A comparison query operator that matches documents where a field's value equals any value in a specified array (equivalent to SQL `IN (...)`).",
      "deepDive": [
        "**Atomic Updates**: Running `$push` or `$set` directly on MongoDB prevents race conditions when multiple users update simultaneously.",
        "**`$inc`**: Increments a numerical value atomically (perfect for hit counters or inventory counts).",
        "**`$addToSet`**: Similar to `$push`, but guarantees uniqueness like a mathematical Set."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "MongoDB Update and Query Operators in Action",
        "code": "// 1. $set and $push together\nawait User.findByIdAndUpdate(userId, {\n  $set: { status: 'active' },             // Updates field\n  $push: { tags: 'premium' }              // Appends to array\n});\n\n// 2. $pull: Remove an item from array\nawait Post.findByIdAndUpdate(postId, {\n  $pull: { tags: 'outdated' }             // Removes 'outdated' from tags array\n});\n\n// 3. $in: Query documents matching any listed category\nconst activeProducts = await Product.find({\n  category: { $in: ['Electronics', 'Computers', 'Audio'] }\n});"
      },
      "commonMistakes": [
        "Updating an entire document without `$set`, which accidentally overwrites the whole document with only the provided fields in raw MongoDB queries.",
        "Using `$push` when you want unique array items (use `$addToSet` to prevent duplicates)."
      ],
      "proTips": [
        "Use `$addToSet` instead of `$push` when adding items to an array where duplicates must never exist (like user roles or tags)."
      ]
    },
    "bangla": {
      "quickAnswer": "MongoDB অপারেটরগুলো হলো অ্যাটমিক আপডেট ও কুয়েরি কমান্ড: `$set` নির্দিষ্ট ফিল্ড আপডেট করে, `$push` অ্যারেতে নতুন আইটেম যোগ করে, `$pull` অ্যারে থেকে নির্দিষ্ট আইটেম মুছে ফেলে, আর `$in` তালিকার যেকোনো মানের সাথে মেলাতে ব্যবহৃত হয়।",
      "interviewSpeech": "পুরো ডকুমেন্ট লোড না করে সরাসরি ডাটাবেজেই সুনির্দিষ্ট পরিবর্তন করতে এই অপারেটরগুলো ব্যবহার করা হয়: ১) `$set`: ডকুমেন্টের বাকি সব ঠিক রেখে শুধু নির্দিষ্ট ফিল্ড আপডেট করে। ২) `$push`: কোনো অ্যারে ফিল্ডের শেষে নতুন উপাদান যোগ করে। ৩) `$pull`: কোনো অ্যারে থেকে নির্দিষ্ট মান বা শর্ত অনুযায়ী উপাদান বাদ দেয়। ৪) `$in`: কুয়েরি অপারেটর যা একাধিক মানের যেকোনো একটি মিললেই ডেটা তুলে আনে (SQL-এর `IN` এর মতো)।",
      "deepDive": [
        "অ্যাটমিক অপারেশন হওয়ায় কোনো ডেটা রেস কন্ডিশন তৈরি হয় না।",
        "ডুপ্লিকেট এড়াতে `$push`-এর জায়গায় `$addToSet` ব্যবহার করা যায়।"
      ],
      "commonMistakes": [
        "অ্যারেতে ইউনিক আইটেম যোগ করতে গিয়ে `$push` ব্যবহার করে ডুপ্লিকেট বানিয়ে ফেলা।"
      ],
      "proTips": [
        "ইউনিক আইটেম রাখার জন্য সবসময় `$addToSet` ব্যবহার করবেন।"
      ]
    }
  },
  {
    "id": "ms-q86-mongoose-schema-validation",
    "questionNumber": 86,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "How do you handle validation in Mongoose schemas?",
    "banglaQuestion": "Mongoose স্কিমায় কীভাবে ডেটা ভ্যালিডেশন হ্যান্ডেল করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Validation",
      "Custom Validators",
      "Schema",
      "Error Handling"
    ],
    "english": {
      "quickAnswer": "Validation in Mongoose is defined directly in the Schema using built-in validators (`required`, `min`, `max`, `enum`, `match`), custom validator functions (`validate`), or external schema libraries like Zod.",
      "interviewSpeech": "Mongoose performs validation at the application layer before documents are sent to the MongoDB server. It offers built-in validators for every data type: numbers have `min` and `max`; strings have `required`, `trim`, `lowercase`, `minLength`, `maxLength`, `enum` (allowed values), and `match` (RegEx pattern matching). For advanced business rules, you can define custom validators using the `validate` property with a boolean return or custom error message. If validation fails, Mongoose throws a `ValidationError` containing granular details for each invalid field.",
      "deepDive": [
        "**Built-in Validators**: `required: [true, 'Custom error message']`, `enum: ['user', 'admin']`.",
        "**Custom Validator**: `{ validator: (val) => val.length > 5, message: 'Must be > 5' }`.",
        "**Update Validation**: Remember that updates (`findByIdAndUpdate`) do NOT run validators unless `{ runValidators: true }` is explicitly passed."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Built-in and Custom Schema Validation",
        "code": "const userSchema = new mongoose.Schema({\n  username: {\n    type: String,\n    required: [true, 'Username is required'],\n    minlength: [3, 'Username must be at least 3 characters'],\n    trim: true\n  },\n  email: {\n    type: String,\n    required: true,\n    match: [/^\\S+@\\S+\\.\\S+$/, 'Please use a valid email address']\n  },\n  role: {\n    type: String,\n    enum: {\n      values: ['student', 'instructor', 'admin'],\n      message: '{VALUE} is not a supported role'\n    },\n    default: 'student'\n  },\n  age: {\n    type: Number,\n    validate: {\n      validator: (v) => v >= 18,\n      message: 'User must be at least 18 years old'\n    }\n  }\n});"
      },
      "commonMistakes": [
        "Assuming `unique: true` is a validator (it is actually a MongoDB database index constraint, not a Mongoose validator).",
        "Forgetting `{ runValidators: true }` in `findOneAndUpdate` or `findByIdAndUpdate`."
      ],
      "proTips": [
        "Clarify: '`unique: true` is NOT a validator! It instructs MongoDB to build a unique index. If duplicate data is inserted, it throws an E11000 MongoError, not a Mongoose ValidationError.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose স্কিমাতে বিল্ট-ইন ভ্যালিডেটর (`required`, `min`, `max`, `enum`, `match`) এবং কাস্টম `validate` ফাংশনের মাধ্যমে ডেটা ভ্যালিডেশন করা হয়।",
      "interviewSpeech": "Mongoose ডাটাবেজে ডেটা সেভ করার আগেই অ্যাপ্লিকেশন লেভেলে ডেটার সঠিকতা যাচাই করে। স্ট্রিংয়ের জন্য `required`, `minLength`, `maxLength`, `enum` (নির্দিষ্ট ভ্যালুর তালিকা) এবং রেজেক্স দিয়ে `match` রয়েছে। নাম্বারের জন্য `min` এবং `max` রয়েছে। জটিল নিয়মের ক্ষেত্রে আমরা কাস্টম ভ্যালিডেটর ফাংশন লিখতে পারি। কোনো ফিল্ড নিয়ম ভঙ্গ করলে Mongoose একটি `ValidationError` থ্রো করে যার ভেতর স্পষ্ট মেসেজ থাকে। তবে মনে রাখতে হবে, আপডেটের সময় এই ভ্যালিডেশন চালু রাখতে `{ runValidators: true }` অপশন দেওয়া বাধ্যতামূলক।",
      "deepDive": [
        "ভ্যালিডেশন ফেইল করলে ডাটাবেজে কোনো ডেটা সেভ হয় না।",
        "`unique: true` কোনো ভ্যালিডেটর নয়, এটি একটি ডাটাবেজ ইউনিক ইনডেক্স।"
      ],
      "commonMistakes": [
        "`unique: true`-কে সাধারণ ভ্যালিডেটর মনে করা (এটি ইউনিক ইনডেক্স তৈরি করে এবং ডুপ্লিকেট হলে E11000 এরর দেয়)।"
      ],
      "proTips": [
        "ইন্টারভিউতে অবশ্যই বলবেন: '`unique: true` কোনো Mongoose ভ্যালিডেটর নয়, এটি একটি MongoDB ইনডেক্স।'"
      ]
    }
  },
  {
    "id": "ms-q87-embedding-vs-referencing",
    "questionNumber": 87,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is the difference between embedding and referencing documents in MongoDB?",
    "banglaQuestion": "MongoDB-তে Embedding এবং Referencing-এর মধ্যে পার্থক্য কী এবং কোনটি কখন ব্যবহার করা উচিত?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Data Modeling",
      "Embedding",
      "Referencing",
      "Schema Design"
    ],
    "english": {
      "quickAnswer": "Embedding (denormalization) nests child documents directly inside the parent document for fast single-read queries, while Referencing (normalization) stores documents in separate collections linked by `ObjectId` to prevent unbounded document growth.",
      "interviewSpeech": "This is the primary architectural decision in MongoDB data modeling. 1) **Embedding (Denormalization)**: Stores related data inside a single document as nested objects or arrays (e.g. User addresses). Advantages: blazing fast reads (zero joins needed), atomic single-document updates. Limitations: risk of hitting the 16MB document limit and data duplication. 2) **Referencing (Normalization)**: Stores related data in separate collections, storing the target's `ObjectId` (e.g. Authors and Books). Advantages: no document size limits, no data duplication, flexible independent querying. Limitations: requires secondary queries (`populate()`) or aggregation `$lookup`.",
      "deepDive": [
        "**Rule of Thumb (1-to-Few)**: Embed (e.g., a user has 2-3 delivery addresses).",
        "**Rule of Thumb (1-to-Many)**: Reference (e.g., a product has 5,000 customer reviews).",
        "**Rule of Thumb (Many-to-Many)**: Reference (e.g., students and courses).",
        "**Frequency**: Data that is accessed together should generally be stored together."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Embedded vs Referenced Schema Designs",
        "code": "// 1. EMBEDDED: 1-to-Few (Fastest, atomic, nested)\nconst userSchema = new mongoose.Schema({\n  name: String,\n  addresses: [{ street: String, city: String, zip: String }] // Nested sub-documents\n});\n\n// 2. REFERENCED: 1-to-Many / High volume (Scalable, no 16MB risk)\nconst postSchema = new mongoose.Schema({\n  title: String,\n  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Normalized ID reference\n});"
      },
      "commonMistakes": [
        "Embedding arrays that can grow unbounded (e.g., embedding millions of log entries inside a user document will crash the 16MB document limit).",
        "Over-normalizing everything like a relational SQL database, losing MongoDB's read performance advantages."
      ],
      "proTips": [
        "Mantra to say: 'Data that is read together should be stored together (Embed for 1-to-few; Reference for 1-to-many/unbounded).'"
      ]
    },
    "bangla": {
      "quickAnswer": "Embedding হলো মূল ডকুমেন্টের ভেতরেই নেস্টেড অবজেক্ট আকারে ডেটা রাখা (দ্রুত পড়ার জন্য), আর Referencing হলো আলাদা কালেকশনে ডেটা রেখে শুধু `ObjectId` দিয়ে লিঙ্ক করা (বড় ডেটা ও মেমোরি লিমিট এড়াতে)।",
      "interviewSpeech": "ডাটাবেজ ডিজাইনের সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত হলো এটি: ১) Embedding: যখন কোনো ডেটা মূল তথ্যের সাথেই সবসময় দরকার হয় এবং সংখ্যায় অল্প থাকে (যেমন ইউজারের ২/৩টি ঠিকানা), তখন ডকুমেন্টের ভেতরেই অবজেক্ট বা অ্যারে আকারে রাখা হয়। সুবিধা হলো এক কুয়েরিতেই সব ডেটা পাওয়া যায়, কোনো জয়েন লাগে না। ২) Referencing: যখন ডেটা অনেক বেশি হতে পারে (যেমন একটি প্রোডাক্টের হাজার হাজার রিভিউ), তখন আলাদা কালেকশন বানিয়ে শুধু আইডি লিঙ্ক করা হয়। এতে মঙ্গোডিবির 16MB ডকুমেন্ট সাইজ লিমিট অতিক্রম করার কোনো ভয় থাকে না এবং ডেটা ডুপ্লিকেশন রোধ হয়।",
      "deepDive": [
        "1-to-Few: Embed করুন (যেমন অর্ডার আইটেম বা ঠিকানা)।",
        "1-to-Many বা Unbounded: Reference করুন (যেমন ইউজার লগ বা ফেসবুক কমেন্ট)।"
      ],
      "commonMistakes": [
        "যেসব ডেটা প্রতিনিয়ত বাড়তেই থাকে (যেমন লগ) তা ডকুমেন্টে এম্বেড করা—এর ফলে ১৬ মেগাবাইট লিমিট ক্রস করে ডাটাবেজ ক্র্যাশ করবে।"
      ],
      "proTips": [
        "সহজ নিয়ম: 'যে তথ্যগুলো সবসময় একসাথে পড়া হয়, সেগুলোকে একসাথে রাখুন (Embed)।'"
      ]
    }
  },
  {
    "id": "ms-q88-mongodb-objectid",
    "questionNumber": 88,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What is a MongoDB ObjectId and how is it generated?",
    "banglaQuestion": "MongoDB ObjectId কী এবং এটি কীভাবে তৈরি হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "ObjectId",
      "BSON",
      "Primary Key",
      "Distributed ID"
    ],
    "english": {
      "quickAnswer": "An ObjectId is a 12-byte (24 hex character) unique BSON identifier automatically generated as the default `_id` primary key for MongoDB documents, encoding timestamp, machine, process, and counter information.",
      "interviewSpeech": "In relational databases, primary keys are usually auto-incrementing integers (`1, 2, 3`), which requires a centralized coordinator and fails in distributed multi-server clusters. MongoDB solves this by generating a globally unique 12-byte `ObjectId` that can be generated on the client driver or server without cross-network coordination. The 12 bytes consist of: 1) **4 bytes**: Unix epoch timestamp (seconds since 1970, giving built-in creation time), 2) **5 bytes**: Random value unique to the machine and process, and 3) **3 bytes**: An incrementing counter starting at a random number. Because of this structure, ObjectIds are naturally sorted chronologically by creation time.",
      "deepDive": [
        "**12 Bytes = 24 Hexadecimal chars**: e.g., `65dfa1b2c4e3f2001a4b5678`.",
        "**Extract Timestamp**: `objectId.getTimestamp()` extracts the exact creation datetime without requiring a separate `createdAt` field.",
        "**Sorting**: Sorting by `_id: 1` automatically sorts documents chronologically by insertion time."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Inspecting ObjectId Components in Node.js",
        "code": "const mongoose = require('mongoose');\n\n// Generate a new ObjectId\nconst id = new mongoose.Types.ObjectId();\nconsole.log('Hex string (24 chars):', id.toString());\n\n// Extract creation timestamp directly from the first 4 bytes!\nconst createdAt = id.getTimestamp();\nconsole.log('Document was created at:', createdAt.toISOString());"
      },
      "commonMistakes": [
        "Believing ObjectIds are completely random UUIDs (they are structured and chronologically ordered).",
        "Comparing two ObjectIds with `===` in JavaScript (`id1 === id2` checks object memory references and returns false; use `id1.equals(id2)` instead)."
      ],
      "proTips": [
        "Always compare ObjectIds using `id1.equals(id2)` or `id1.toString() === id2.toString()`, never with `===`!"
      ]
    },
    "bangla": {
      "quickAnswer": "ObjectId হলো একটি ১২-বাইটের (২৪ হেক্সাডেসিমেল ক্যারেক্টার) গ্লোবালি ইউনিক প্রাইমারি কি যা প্রতিটি ডকুমেন্টের `_id` হিসেবে স্বয়ংক্রিয়ভাবে তৈরি হয় এবং যার মধ্যে সময়, মেশিন আইডি ও কাউন্টার এনকোড করা থাকে।",
      "interviewSpeech": "SQL-এ সাধারণত ১, ২, ৩ করে অটো-ইনক্রিমেন্ট আইডি তৈরি হয়, যা ডিস্ট্রিবিউটেড ক্লাস্টারে ডুপ্লিকেট হয়ে যাওয়ার ঝুঁকি থাকে। MongoDB ১২ বাইটের ইউনিক `ObjectId` ব্যবহার করে যা সেন্ট্রাল ডাটাবেজের সাহায্য ছাড়াই ক্লায়েন্ট বা সার্ভার যে কেউ তৈরি করতে পারে। এই ১২ বাইটের মধ্যে রয়েছে: ১) প্রথম ৪ বাইট: তৈরি হওয়ার টাইমস্ট্যাম্প (কখন তৈরি হলো), ২) পরবর্তী ৫ বাইট: মেশিন ও প্রসেস ইউনিক আইডেন্টিফায়ার, এবং ৩) শেষ ৩ বাইট: একটি ইনক্রিমেন্টিং কাউন্টার। এর বড় সুবিধা হলো—আইডিগুলো স্বয়ংক্রিয়ভাবেই সময়ের ক্রমানুসারে সাজানো থাকে এবং `id.getTimestamp()` দিলে এটি তৈরির সঠিক তারিখ-সময় পাওয়া যায়।",
      "deepDive": [
        "১২ বাইট = ২৪ হেক্স ক্যারেক্টার।",
        "টাইমস্ট্যাম্প বিল্ট-ইন থাকে, ফলে `_id` অনুযায়ী সর্ট করলেই ডেটা সময়ের ক্রমানুসারে পাওয়া যায়।",
        "জাভাস্ক্রিপ্টে দুটি ObjectId মেলাতে `id1.equals(id2)` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "জাভাস্ক্রিপ্টে `id1 === id2` দিয়ে দুটি অবজেক্ট আইডি মেলানোর চেষ্টা করা (অবজেক্ট রেফারেন্স আলাদা হওয়ায় ফলস আসবে)।"
      ],
      "proTips": [
        "দুটি আইডি মেলাতে সবসময় `id1.equals(id2)` ব্যবহার করুন।"
      ]
    }
  },
  {
    "id": "ms-q89-connecting-mongoose-to-mongodb",
    "questionNumber": 89,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "How do you connect a Node.js app to MongoDB using Mongoose?",
    "banglaQuestion": "Node.js অ্যাপ্লিকেশনের সাথে Mongoose ব্যবহার করে কীভাবে MongoDB কানেক্ট করতে হয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Node.js",
      "Mongoose",
      "MongoDB Connection",
      "Connection Pooling",
      "Best Practices"
    ],
    "english": {
      "quickAnswer": "You connect a Node.js app to MongoDB using `mongoose.connect(uri, options)` inside an asynchronous function, managing connection events (`connected`, `error`, `disconnected`) and maintaining a singleton connection pool.",
      "interviewSpeech": "To establish a robust connection, store your MongoDB connection URI (including credentials and database name) in an environment variable (`process.env.MONGO_URI`). In your database configuration module, call `await mongoose.connect(uri)`. Mongoose automatically manages a built-in connection pool (defaulting to 10 connections), reusing connections across requests. In production, you should wrap the connection logic in a `try/catch` block, listen to connection lifecycle events (`mongoose.connection.on('error')`), and handle graceful shutdowns via `process.on('SIGINT')` to close connections cleanly when the server restarts.",
      "deepDive": [
        "**Connection Pooling**: Mongoose opens a pool of sockets and shares them across all HTTP requests.",
        "**Serverless Caveat**: In serverless environments (Next.js / AWS Lambda), cache the connection across invocations to avoid exhausting database connection limits.",
        "**Deprecated Options**: Options like `useNewUrlParser` and `useUnifiedTopology` are obsolete in Mongoose 6+ and should not be passed."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Production-Ready MongoDB Connection Helper",
        "code": "const mongoose = require('mongoose');\n\nconst connectDB = async () => {\n  try {\n    const conn = await mongoose.connect(process.env.MONGO_URI);\n    console.log(`MongoDB Connected: ${conn.connection.host}`);\n  } catch (error) {\n    console.error('Database connection failed:', error.message);\n    process.exit(1); // Terminate process if DB is unreachable\n  }\n};\n\n// Listen to connection lifecycle events\nmongoose.connection.on('disconnected', () => {\n  console.warn('MongoDB disconnected! Reconnecting...');\n});\n\nmodule.exports = connectDB;"
      },
      "commonMistakes": [
        "Hardcoding connection strings containing passwords directly in code instead of `.env`.",
        "Passing deprecated Mongoose 5 flags like `useNewUrlParser: true` in Mongoose 6+ (causes deprecation warnings).",
        "Opening a new `mongoose.connect()` call on every API route request."
      ],
      "proTips": [
        "In Next.js API routes, use a cached global connection pattern to prevent serverless lambdas from creating thousands of open sockets."
      ]
    },
    "bangla": {
      "quickAnswer": "Node.js-এ MongoDB কানেক্ট করতে `mongoose.connect(process.env.MONGO_URI)` মেথড একটি অ্যাসিনক্রোনাস ফাংশনের ভেতর কল করা হয় এবং কানেকশন ইভেন্ট ও এরর হ্যান্ডলিং ঠিকমতো কনফিগার করা হয়।",
      "interviewSpeech": "প্রোডাকশন-রেডি কানেকশন সেটআপ করার জন্য ডাটাবেজের URI স্ট্রিং সবসময় `.env` ফাইলে রাখা উচিত। এরপর একটি ডাটাবেজ মডিউলে `await mongoose.connect(uri)` কল করা হয়। Mongoose নিজে থেকেই একটি কানেকশন পুল (Connection Pool) তৈরি করে এবং অ্যাপ চলাকালীন প্রতিটি রিকোয়েস্টে সেই কানেকশনগুলো রিইউজ করে। কানেকশন ফেইল করলে অ্যাপ যাতে ক্র্যাশ করে বা লগ দেয় তার জন্য `try/catch` দেওয়া হয় এবং ডাটাবেজ ডিসকানেক্ট হলে যাতে সতর্কবার্তা দেয় তার জন্য `mongoose.connection.on('error')` লিসেনার সেট করা স্ট্যান্ডার্ড প্র্যাকটিস।",
      "deepDive": [
        "কানেকশন স্ট্রিং অবশ্যই `.env` ফাইলে সুরক্ষিত রাখতে হবে।",
        "Mongoose স্বয়ংক্রিয়ভাবে কানেকশন পুল পরিচালনা করে।",
        "Mongoose 6+ ভার্সনে পুরোনো অপশন যেমন `useNewUrlParser` লেখার প্রয়োজন নেই।"
      ],
      "commonMistakes": [
        "প্রতিটি API রিকোয়েস্টের ভেতর বারবার `mongoose.connect()` কল করা।"
      ],
      "proTips": [
        "সার্ভার বন্ধ হওয়ার সময় যাতে ডাটাবেজ কানেকশন সুন্দরভাবে ক্লোজ হয় তার জন্য `process.on('SIGINT')` হ্যান্ডলার যুক্ত করুন।"
      ]
    }
  },
  {
    "id": "ms-q90-mongoose-middleware-hooks",
    "questionNumber": 90,
    "module": "MongoDB & Mongoose",
    "topic": "Database Design, Schemas & Queries",
    "question": "What are Mongoose middleware (pre and post hooks) and when are they useful?",
    "banglaQuestion": "Mongoose Middleware (pre এবং post hooks) কী এবং এগুলো কখন দরকার হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Middleware",
      "Hooks",
      "pre hook",
      "post hook",
      "bcrypt",
      "Automation"
    ],
    "english": {
      "quickAnswer": "Mongoose middleware (pre and post hooks) are functions passed control during the execution of asynchronous schema operations, allowing logic to run immediately before (`pre`) or after (`post`) actions like `save`, `validate`, `find`, or `remove`.",
      "interviewSpeech": "Mongoose middleware provides lifecycle interceptors for schema events. 1) **`pre` hooks**: Execute *before* an event occurs. The classic use case is hashing a user's password with bcrypt right before `save`, or generating a URL slug before validation. In a `pre('save')` hook, `this` refers to the document being saved. 2) **`post` hooks**: Execute *after* an event finishes and the document is written to disk. Common use cases include sending a welcome email after user creation, logging audit trails, or clearing a Redis cache. Types of middleware include Document, Query, Aggregate, and Model middleware.",
      "deepDive": [
        "**Password Hashing Pattern**: Always check `if (!this.isModified('password')) return next();` inside `pre('save')` so existing hashes aren't re-hashed on profile edits.",
        "**`this` Context**: In document middleware (`save`), `this` refers to the document. In query middleware (`find`, `findOneAndUpdate`), `this` refers to the Query object.",
        "**Arrow Function Danger**: Never use arrow functions for `pre` hooks because arrow functions lose lexical `this` binding."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Automated Password Hashing with Mongoose pre('save') Hook",
        "code": "const userSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: { type: String, required: true }\n});\n\n// MUST use regular function (NOT arrow function) to preserve 'this'!\nuserSchema.pre('save', async function (next) {\n  // Only hash the password if it has been modified (or is new)\n  if (!this.isModified('password')) return next();\n\n  const bcrypt = require('bcrypt');\n  const salt = await bcrypt.genSalt(10);\n  this.password = await bcrypt.hash(this.password, salt);\n  next();\n});\n\n// Post hook: Fires after successful database save\nuserSchema.post('save', function (doc) {\n  console.log(`User ${doc.email} successfully registered and saved!`);\n});"
      },
      "commonMistakes": [
        "Using an arrow function `() => {}` in `userSchema.pre('save')`—this breaks `this` context and causes `this.password` to be undefined.",
        "Forgetting `if (!this.isModified('password')) return next()`—this disaster causes the already-hashed password to be re-hashed every time a user updates their name or profile!"
      ],
      "proTips": [
        "Crucial interview tip: 'Always use regular function syntax for Mongoose hooks to bind `this` to the document, and always check `this.isModified()`.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose Middleware (হুকস) হলো এমন কিছু ফাংশন যা কোনো ডকুমেন্টের `save`, `find`, `remove` ইত্যাদি কাজের ঠিক আগে (`pre`) অথবা ঠিক পরে (`post`) স্বয়ংক্রিয়ভাবে এক্সিকিউট হয়।",
      "interviewSpeech": "Mongoose হুকস ডাটাবেজের সাথে কাজের অটোমেশন নিশ্চিত করে। ১) **Pre Hook**: কোনো অ্যাকশন হওয়ার ঠিক আগে চলে। সবচেয়ে জনপ্রিয় উদাহরণ হলো ডাটাবেজে ইউজার সেভ হওয়ার ঠিক আগে স্বয়ংক্রিয়ভাবে পাসওয়ার্ড হ্যাশ করে নেওয়া (`pre('save')`)। এতে কন্ট্রোলারে বারবার হ্যাশিং কোড লিখতে হয় না। ২) **Post Hook**: ডাটাবেজে কাজ সম্পন্ন হওয়ার পর চলে। যেমন—ইউজার ক্রিয়েট সফল হওয়ার পর স্বয়ংক্রিয়ভাবে ওয়েলকাম ইমেইল পাঠানো বা লগ ফাইলে লিখে রাখা।",
      "deepDive": [
        "Pre Hook: কাজের পূর্বে লজিক রান করায় (যেমন পাসওয়ার্ড হ্যাশিং)।",
        "Post Hook: কাজের পরে লজিক রান করায় (যেমন নোটিফিকেশন পাঠানো)।",
        "`pre('save')`-এ কখনো Arrow Function লেখা যাবে না, সাধারণ ফাংশন লিখতে হবে যাতে `this` ডকুমেন্টের দিকে পয়েন্ট করে।"
      ],
      "commonMistakes": [
        "Pre হুকে অ্যারো ফাংশন ব্যবহার করা যার ফলে `this` কাজ করে না এবং পাসওয়ার্ড `undefined` হয়ে যায়।",
        "`this.isModified('password')` চেক না করা—এর ফলে ইউজারের নাম এডিট করলেও পাসওয়ার্ড আবার নতুন করে হ্যাশ হয়ে লক হয়ে যায়।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'পাসওয়ার্ড হ্যাশ করার সময় `this.isModified('password')` চেক করা বাধ্যতামূলক যাতে আনমডিফায়েড পাসওয়ার্ড পুনরায় হ্যাশ না হয়।'"
      ]
    }
  },
  {
    "id": "ms-q91-mern-request-response-cycle",
    "questionNumber": 91,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "Explain the full request-response cycle in a MERN application.",
    "banglaQuestion": "একটি MERN অ্যাপ্লিকেশনে সম্পূর্ণ Request-Response Cycle কীভাবে সম্পন্ন হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MERN",
      "Full-Stack",
      "Architecture",
      "Request-Response",
      "Data Flow"
    ],
    "english": {
      "quickAnswer": "The MERN request-response cycle flows from React UI event -> HTTP fetch/axios -> Express router & middleware -> Controller business logic -> Mongoose ODM query -> MongoDB disk read -> JSON response -> React state update and re-render.",
      "interviewSpeech": "The end-to-end flow in MERN works as follows: 1) **Client Action**: A user interacts with the React frontend (e.g., clicking 'Submit Form'). An event handler triggers an asynchronous HTTP request using Axios or Fetch with JSON payload and headers. 2) **Network & Gateway**: The request travels over HTTPS to the Node.js/Express server (passing through CORS and rate limiters). 3) **Express Pipeline**: Express parses the JSON body (`express.json()`), verifies auth tokens in middleware, and matches the endpoint route. 4) **Controller & Database**: The controller invokes Mongoose Model methods (`User.create()`), which translates the query to BSON and sends it over a socket connection to MongoDB. 5) **Database Execution**: MongoDB writes or reads the document from disk/RAM and returns the result. 6) **Response & Re-render**: Express formats the data into a JSON response with an HTTP status code (200/201). React receives the resolved promise, updates its local state (`setState`), diffs the Virtual DOM, and surgically updates the browser screen.",
      "deepDive": [
        "**Tier 1 (Client)**: React SPA running in browser.",
        "**Tier 2 (Server)**: Node.js & Express REST API / Middleware pipeline.",
        "**Tier 3 (Database)**: MongoDB Atlas / Engine storing BSON documents.",
        "**Asynchronous Glue**: Promises and async/await bridge the network and database latency seamlessly."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Full MERN Cycle Architecture Flow Diagram",
        "code": "/*\n[User Click in React]\n        |\n   (1) fetch('/api/orders', { method: 'POST', body: JSON })\n        v\n[Express Server on Node.js]\n   (2) Middleware (cors -> express.json -> verifyAuthJWT)\n   (3) Route -> Controller (orderController.createOrder)\n        v\n[Mongoose ODM]\n   (4) Order.create({ ...req.body, user: req.user.id })\n        v\n[MongoDB Database Engine]\n   (5) Validates BSON -> Writes to Collection -> Returns Document\n        v\n[Express Response]\n   (6) res.status(201).json({ success: true, order: doc })\n        v\n[React Frontend]\n   (7) const res = await response.json() -> setOrders([...prev, res.order])\n   (8) React Reconciliation updates the browser DOM UI!\n*/"
      },
      "commonMistakes": [
        "Thinking React speaks directly to MongoDB (browsers cannot and should never connect directly to databases for severe security reasons).",
        "Forgetting error propagation across the cycle (unhandled errors crash the chain)."
      ],
      "proTips": [
        "Frame your answer as an 8-step journey from button click to UI repaint—interviewers love this systematic mental model."
      ]
    },
    "bangla": {
      "quickAnswer": "MERN-এ রিকোয়েস্ট-রেসপন্স সাইকেল শুরু হয় React UI ইভেন্ট থেকে -> HTTP রিকোয়েস্ট -> Express মিডলওয়্যার ও কন্ট্রোলার -> Mongoose কুয়েরি -> MongoDB ডেটা প্রসেসিং -> JSON রেসপন্স সার্ভার থেকে ফেরত -> React স্টেট আপডেট ও স্ক্রিন রেন্ডার।",
      "interviewSpeech": "MERN অ্যাপ্লিকেশনে ডেটা প্রবাহের ধাপগুলো হলো: ১) ইউজার রিঅ্যাক্ট ফ্রন্টএন্ডে কোনো বাটন ক্লিক করে (যেমন অর্ডার প্লেস করা)। ২) রিঅ্যাক্ট `fetch` বা `axios` দিয়ে ব্যাকএন্ডে JSON ডেটাসহ রিকোয়েস্ট পাঠায়। ৩) Express সার্ভারে রিকোয়েস্টটি আসলে CORS এবং বডি-পার্সার মিডলওয়্যার পার হয়ে নির্দিষ্ট কন্ট্রোলারে যায়। ৪) কন্ট্রোলার Mongoose-এর মাধ্যমে ডাটাবেজ মডেল কল করে। ৫) MongoDB কুয়েরি এক্সিকিউট করে ডেটা সেভ করে বা তুলে আনে। ৬) Express কন্ট্রোলার উপযুক্ত স্ট্যাটাস কোড (যেমন 201 Created) সহ JSON রেসপন্স পাঠায়। ৭) রিঅ্যাক্ট রেসপন্সটি পেয়ে তার স্টেট আপডেট করে এবং ভার্চুয়াল ডমের মাধ্যমে সাথে সাথে স্ক্রিন নতুন ডেটা দিয়ে রি-রেন্ডার করে দেয়।",
      "deepDive": [
        "ফ্রন্টএন্ড (React) কখনো সরাসরি ডাটাবেজের সাথে যোগাযোগ করে না, নিরাপত্তার জন্য সবসময় ব্যাকএন্ড API-এর মাধ্যমে যায়।",
        "পুরো সাইকেলটি অ্যাসিনক্রোনাসভাবে পরিচালিত হয়।"
      ],
      "commonMistakes": [
        "মনে করা যে ব্রাউজার সরাসরি মঙ্গোডিবির সাথে কথা বলে।"
      ],
      "proTips": [
        "ধাপগুলো পয়েন্ট আকারে সাজিয়ে বললে ইন্টারভিউয়ার অত্যন্ত সন্তুষ্ট হন।"
      ]
    }
  },
  {
    "id": "ms-q92-authentication-vs-authorization",
    "questionNumber": 92,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is the difference between authentication and authorization?",
    "banglaQuestion": "Authentication এবং Authorization-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Security",
      "Authentication",
      "Authorization",
      "RBAC",
      "JWT",
      "Full-Stack"
    ],
    "english": {
      "quickAnswer": "**Authentication (AuthN)** verifies *WHO you are* (identity, e.g. login with email and password), while **Authorization (AuthZ)** determines *WHAT you are allowed to do* (permissions/roles, e.g. admin privileges to delete a user).",
      "interviewSpeech": "Authentication (AuthN) and Authorization (AuthZ) are two distinct stages of application security. Authentication is the process of verifying a user's identity—answering the question 'Who are you?'. This occurs when a user logs in using credentials, OTPs, biometrics, or OAuth (Google login), resulting in an issued JWT or session. Authorization is the process of checking permissions—answering 'What permissions do you have?'. Once an identity is confirmed, authorization determines whether that user has the right to access a specific resource. For example, any authenticated student can view course materials, but only an authorized instructor or admin can edit grades or delete courses (Role-Based Access Control / RBAC).",
      "deepDive": [
        "**Order of Execution**: Authentication ALWAYS happens before Authorization.",
        "**HTTP Status Codes**: 401 Unauthorized means *Unauthenticated* (identity unknown or token missing/expired); 403 Forbidden means *Unauthorized* (identity known, but access is forbidden).",
        "**RBAC Pattern**: Role-Based Access Control where routes are guarded by checking `req.user.role === 'admin'`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Authentication Middleware vs Authorization Guard",
        "code": "// 1. AUTHENTICATION: Verifies who you are (Token check)\nfunction authenticate(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: '401: Identity not verified' });\n  req.user = jwt.verify(token, process.env.JWT_SECRET);\n  next();\n}\n\n// 2. AUTHORIZATION: Verifies what you are allowed to do (Role check)\nfunction authorizeRole(...allowedRoles) {\n  return (req, res, next) => {\n    if (!allowedRoles.includes(req.user.role)) {\n      return res.status(403).json({ error: '403: Forbidden - Insufficient permissions' });\n    }\n    next();\n  };\n}\n\n// Protected route combining both:\napp.delete('/api/users/:id', authenticate, authorizeRole('admin'), deleteUser);"
      },
      "commonMistakes": [
        "Confusing HTTP 401 (Unauthenticated) with HTTP 403 (Unauthorized/Forbidden).",
        "Assuming that once a user is authenticated, they have permission to do everything."
      ],
      "proTips": [
        "Mnemonic: **AuthN** = Identity (**N**ame/Login); **AuthZ** = Permission (**Z**one of access)."
      ]
    },
    "bangla": {
      "quickAnswer": "**Authentication** হলো পরিচয় নিশ্চিত করা (*আপনি কে?* যেমন পাসওয়ার্ড দিয়ে লগইন), আর **Authorization** হলো অধিকার বা পারমিশন যাচাই করা (*আপনার কী কী করার অনুমতি আছে?* যেমন শুধু অ্যাডমিন ইউজার ডিলিট করতে পারবে)।",
      "interviewSpeech": "সহজ ভাষায়: Authentication হলো আপনি যখন ভোটার আইডি বা পাসওয়ার্ড দেখিয়ে প্রমাণ করেন যে আপনি আসলেই অমুক ব্যক্তি। আর Authorization হলো ওই ভবনে ঢোকার পর আপনি কোন কোন রুমে ঢুকতে পারবেন আর কোন রুমে পারবেন না তা চেক করা। রিয়্যাক্ট-নোডজেএস অ্যাপে ইউজার যখন ইমেইল ও পাসওয়ার্ড দিয়ে লগইন করে JWT টোকেন পায়, সেটা হলো Authentication। আর যখন সে কোনো পেজে যায় এবং সার্ভার চেক করে সে স্টুডেন্ট নাকি অ্যাডমিন—সেটা হলো Authorization। স্ট্যাটাস কোড মনে রাখার নিয়ম: টোকেন না থাকলে 401 Unauthorized (আইডেন্টিটি অজানা), আর টোকেন আছে কিন্তু পারমিশন নেই তখন 403 Forbidden।",
      "deepDive": [
        "Authentication সবসময় Authorization-এর আগে ঘটে।",
        "401 Unauthorized = লগইন নেই বা টোকেন মেয়াদোত্তীর্ণ।",
        "403 Forbidden = লগইন আছে কিন্তু সংশ্লিষ্ট পেজে ঢোকার পারমিশন নেই।"
      ],
      "commonMistakes": [
        "401 এবং 403 এর পার্থক্য গুলিয়ে ফেলা।"
      ],
      "proTips": [
        "সহজ সূত্র: AuthN = পরিচয় (Name), AuthZ = অধিকার (Zone of rights)।"
      ]
    }
  },
  {
    "id": "ms-q93-protected-routes-mern",
    "questionNumber": 93,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "How do you implement protected routes in a MERN app?",
    "banglaQuestion": "একটি MERN অ্যাপে Protected Routes কীভাবে বাস্তবায়ন করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MERN",
      "Protected Routes",
      "React Router",
      "Express Middleware",
      "Security"
    ],
    "english": {
      "quickAnswer": "Protected routes in MERN require a two-tier defense: client-side route guards in React Router using `<Navigate to='/login' />` for UX, and server-side JWT verification middleware on Express API endpoints for true security.",
      "interviewSpeech": "True protection cannot happen in the frontend alone because any client-side JavaScript can be inspected or bypassed in the browser console. A complete protected route architecture requires protection at both ends: 1) **Frontend Route Guard**: In React Router, we create a `<ProtectedRoute>` wrapper component. It checks the global auth state: if authenticated, it renders `<Outlet />` or the child page; if not, it redirects the user to `/login` using `<Navigate to='/login' replace state={{ from: location }} />`. 2) **Backend API Guard**: Every sensitive Express endpoint must be protected by an authentication middleware that cryptographically validates the JWT. Even if an attacker bypasses the frontend UI, the backend rejects unauthorized API calls with HTTP 401/403.",
      "deepDive": [
        "**Client-side**: Provides user experience (redirecting guests away from dashboard).",
        "**Server-side**: Provides real security (stopping unauthorized data access).",
        "**Redirect preservation**: Passing `state: { from: location }` lets the login page redirect the user back to the exact page they attempted to visit."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Frontend React Protected Route Component",
        "code": "import { Navigate, Outlet, useLocation } from 'react-router-dom';\nimport { useAuth } from '../context/AuthContext';\n\nexport function ProtectedRoute({ allowedRoles }) {\n  const { user, loading } = useAuth();\n  const location = useLocation();\n\n  if (loading) return <div>Checking authentication...</div>;\n\n  // 1. Not logged in -> Redirect to login, preserving intended URL\n  if (!user) {\n    return <Navigate to=\"/login\" state={{ from: location }} replace />;\n  }\n\n  // 2. Logged in, but lacks required role -> Redirect to unauthorized page\n  if (allowedRoles && !allowedRoles.includes(user.role)) {\n    return <Navigate to=\"/unauthorized\" replace />;\n  }\n\n  // 3. Authorized -> Render child route\n  return <Outlet />;\n}"
      },
      "commonMistakes": [
        "Relying solely on frontend route protection without securing backend API endpoints (anyone can call the API directly using curl/Postman).",
        "Failing to handle the initial auth `loading` state, causing authenticated users to flash briefly to the login page on page refresh."
      ],
      "proTips": [
        "Crucial security tenet: 'Frontend protected routes exist purely for User Experience; Backend protected endpoints provide actual Security.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MERN অ্যাপে Protected Routes দুই স্তরে করতে হয়: ফ্রন্টএন্ডে React Router-এর মাধ্যমে অননুমোদিত ইউজারকে লগইন পেজে রিডাইরেক্ট করা এবং ব্যাকএন্ডে Express মিডলওয়্যার দিয়ে API সুরক্ষিত রাখা।",
      "interviewSpeech": "নিরাপত্তার প্রধান নিয়ম হলো—ফ্রন্টএন্ড কখনোই ১০০% নিরাপদ নয়, কারণ ব্রাউজারের কোড যে কেউ দেখতে বা পরিবর্তন করতে পারে। তাই প্রোটেক্টেড রাউট দুই জায়গায় নিশ্চিত করতে হয়: ১) ফ্রন্টএন্ডে React Router দিয়ে একটি `<ProtectedRoute>` কম্পোনেন্ট বানানো হয় যা চেক করে ইউজার লগইন করা আছে কি না। না থাকলে সে লগইন পেজে রিডাইরেক্ট করে দেয় (`<Navigate to='/login' />`)। ২) আসল নিরাপত্তা থাকে ব্যাকএন্ডে—Express-এর প্রতিটি প্রাইভেট API-তে JWT ভেরিফিকেশন মিডলওয়্যার বসানো থাকে। ফলে ফ্রন্টএন্ড হ্যাক করে কেউ ড্যাশবোর্ডে ঢুকলেও ব্যাকএন্ড থেকে ডেটা পাবে না (401 Unauthorized এরর খাবে)।",
      "deepDive": [
        "ফ্রন্টএন্ড প্রটেকশন ইউজার এক্সপেরিয়েন্সের জন্য।",
        "ব্যাকএন্ড প্রটেকশন আসল নিরাপত্তার জন্য।",
        "পেজ রিফ্রেশ দিলে স্টেট লোড হওয়া পর্যন্ত একটি `loading` স্পিনার দেখাতে হয়।"
      ],
      "commonMistakes": [
        "শুধু ফ্রন্টএন্ডে প্রটেকশন দেওয়া কিন্তু ব্যাকএন্ড API ওপেন রাখা (পোস্টম্যান দিয়ে যেকোনো কেউ ডেটা চুরি করতে পারবে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে এক লাইনে বলুন: 'ফ্রন্টএন্ডের গার্ড কেবল UX-এর জন্য, আর ব্যাকএন্ডের গার্ড হলো আসল সিকিউরিটির জন্য।'"
      ]
    }
  },
  {
    "id": "ms-q94-cookies-vs-localstorage",
    "questionNumber": 94,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is the difference between cookies and localStorage for token storage?",
    "banglaQuestion": "টোকেন সংরক্ষণের জন্য Cookies এবং localStorage-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Security",
      "JWT",
      "Cookies",
      "httpOnly",
      "localStorage",
      "XSS vs CSRF"
    ],
    "english": {
      "quickAnswer": "`localStorage` is vulnerable to Cross-Site Scripting (XSS) because any script running on the page can access it, whereas `httpOnly` secure cookies cannot be accessed by client JavaScript, providing superior protection against token theft.",
      "interviewSpeech": "Where to store authentication tokens is one of web security's biggest debates. Storing JWTs in `localStorage` is convenient: developers access it via `localStorage.setItem('token', ...)` and manually attach it to headers. However, `localStorage` has zero security isolation: if any third-party npm package, malicious ad script, or injected dependency has an XSS vulnerability, it can read `localStorage` and transmit the user's token directly to an attacker's server. In contrast, storing tokens in an `httpOnly, Secure, SameSite=Strict` cookie is far more secure. The `httpOnly` flag blocks JavaScript from reading `document.cookie`. The browser automatically sends the cookie on requests. While cookies are susceptible to Cross-Site Request Forgery (CSRF), this is easily mitigated using `SameSite` attributes and CSRF anti-forgery tokens.",
      "deepDive": [
        "**`localStorage`**: Vulnerable to XSS. Token can be stolen by malicious scripts. Capacity ~5MB.",
        "**`httpOnly Cookie`**: Immune to JS token theft (XSS). Vulnerable to CSRF if `SameSite` is not configured properly. Capacity ~4KB.",
        "**Best Practice Architecture**: Short-lived access token in React memory (variables) + Long-lived refresh token in `httpOnly` cookie."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Setting Secure httpOnly Cookie in Express",
        "code": "// Setting secure httpOnly cookie on login\nres.cookie('refreshToken', token, {\n  httpOnly: true, // Blocks client JavaScript (document.cookie) from reading token!\n  secure: process.env.NODE_ENV === 'production', // Only sent over HTTPS\n  sameSite: 'strict', // Protects against CSRF attacks\n  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days\n});"
      },
      "commonMistakes": [
        "Storing high-value authentication tokens in `localStorage` for financial or enterprise applications.",
        "Setting cookies without `httpOnly` and `SameSite` flags."
      ],
      "proTips": [
        "Gold standard recommendation: 'Store short-lived access tokens in memory and long-lived refresh tokens in an httpOnly, Secure, SameSite cookie.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`localStorage`-এ টোকেন রাখলে XSS অ্যাটাকের মাধ্যমে ক্ষতিকারক জাভাস্ক্রিপ্ট কোড দিয়ে টোকেন চুরি করা সম্ভব; কিন্তু `httpOnly` কুকিতে টোকেন রাখলে ব্রাউজারের কোনো জাভাস্ক্রিপ্ট কোড তা পড়তে পারে না, ফলে টোকেন অনেক বেশি সুরক্ষিত থাকে।",
      "interviewSpeech": "টোকেন রাখার ক্ষেত্রে `localStorage` ব্যবহার করা খুব সহজ হলেও এটি মারাত্মক ঝুঁকিপূর্ণ। আপনার সাইটে যদি কোনো দুর্বল থার্ড-পার্টি লাইব্রেরি থাকে বা XSS অ্যাটাক হয়, তবে হ্যাকার এক লাইনের কোড দিয়েই `localStorage.getItem('token')` করে টোকেন চুরি করে নিতে পারে। কিন্তু সার্ভার থেকে যদি `httpOnly, Secure, SameSite=Strict` ফ্ল্যাগ দিয়ে কুকি সেট করা হয়, তবে ব্রাউজারের কোনো স্ক্রিপ্টই সেই কুকি রিড করতে পারে না। ব্রাউজার নিজে থেকেই প্রতিটি রিকোয়েস্টের সাথে স্বয়ংক্রিয়ভাবে কুকি পাঠিয়ে দেয়। কুকির ক্ষেত্রে CSRF অ্যাটাকের ঝুঁকি থাকলেও `SameSite=Strict` ফ্ল্যাগ দিয়ে তা খুব সহজেই ঠেকানো যায়।",
      "deepDive": [
        "`localStorage`: XSS অ্যাটাকে টোকেন চুরি হওয়া সম্ভব।",
        "`httpOnly Cookie`: জাভাস্ক্রিপ্ট দিয়ে রিড করা অসম্ভব, তাই XSS থেকে সম্পূর্ণ নিরাপদ।",
        "আধুনিক বেস্ট প্র্যাকটিস: মেমরিতে অ্যাক্সেস টোকেন রাখা এবং `httpOnly` কুকিতে রিফ্রেশ টোকেন রাখা।"
      ],
      "commonMistakes": [
        "বড় বড় প্রজেক্টে গুরুত্বপূর্ণ টোকেন সাধারণ `localStorage`-এ রেখে দেওয়া।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'নিরাপত্তার জন্য রিফ্রেশ টোকেন সবসময় httpOnly Secure কুকিতে রাখা উচিত।'"
      ]
    }
  },
  {
    "id": "ms-q95-rest-principles",
    "questionNumber": 95,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is REST and what are the principles of a RESTful API?",
    "banglaQuestion": "REST কী এবং একটি RESTful API-এর মূল নীতিমালাগুলো কী কী?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "REST API",
      "Architecture",
      "Stateless",
      "Client-Server",
      "HTTP",
      "Best Practices"
    ],
    "english": {
      "quickAnswer": "REST (Representational State Transfer) is an architectural style for designing networked applications based on 6 core constraints: Client-Server separation, Statelessness, Cacheability, Uniform Interface, Layered System, and optional Code-on-Demand.",
      "interviewSpeech": "Coined by Roy Fielding in 2000, REST is not a protocol or tool, but an architectural design standard for web APIs. The 6 core principles are: 1) **Client-Server Architecture**: Separation of concerns between user interface and data storage. 2) **Statelessness**: Every request from client to server must contain all information necessary to understand and complete the request; the server stores no client session context. 3) **Cacheable**: Responses must explicitly define whether they can be cached to improve performance. 4) **Uniform Interface**: Consistent resource identifiers (URIs with plural nouns), self-descriptive messages, and HATEOAS. 5) **Layered System**: The client cannot tell whether it is connected directly to the end server or an intermediary proxy, CDN, or load balancer. 6) **Code on Demand (optional)**: Server temporarily transferring executable code (like JS) to client.",
      "deepDive": [
        "**Statelessness advantage**: Enables effortless horizontal autoscaling because any server instance can handle any incoming request.",
        "**Uniform Interface**: Standard HTTP methods (`GET, POST, PUT, DELETE`) acting on nouns (`/api/v1/courses`).",
        "**HATEOAS**: Hypermedia As The Engine Of Application State (providing hyperlinks to related resources in API responses)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "RESTful JSON Resource Representation",
        "code": "// GET /api/v1/articles/101\n// Response: Self-descriptive, JSON representation with clear HTTP headers\n/*\nHTTP/1.1 200 OK\nContent-Type: application/json\nCache-Control: public, max-age=3600\n\n{\n  \"id\": 101,\n  \"title\": \"Understanding REST Architecture\",\n  \"author\": \"Rakibul Hasan\",\n  \"links\": {\n    \"self\": \"/api/v1/articles/101\",\n    \"comments\": \"/api/v1/articles/101/comments\"\n  }\n}\n*/"
      },
      "commonMistakes": [
        "Thinking REST is a protocol or strictly tied to HTTP (it is an architectural style, though almost always implemented over HTTP).",
        "Storing user authentication session state in server memory while claiming the API is RESTful (violates the Statelessness constraint)."
      ],
      "proTips": [
        "Key phrase to highlight: 'In REST, Statelessness means the server never remembers past requests—every incoming request must be completely self-contained with its own authentication credentials.'"
      ]
    },
    "bangla": {
      "quickAnswer": "REST (Representational State Transfer) হলো ওয়েব API তৈরির একটি জনপ্রিয় আর্কিটেকচারাল স্টাইল, যা ক্লায়েন্ট-সার্ভার বিভাজন, স্টেটলেসনেস (Statelessness), ক্যাশযোগ্যতা এবং ইউনিফর্ম ইন্টারফেসের মতো ৬টি প্রধান নীতির উপর ভিত্তি করে কাজ করে।",
      "interviewSpeech": "REST কোনো ফ্রেমওয়ার্ক বা টুল নয়, এটি একটি সফটওয়্যার আর্কিটেকচার নীতি। এর মূল নীতিগুলো হলো: ১) Client-Server: ফ্রন্টএন্ড এবং ব্যাকএন্ড সম্পূর্ণ স্বাধীন ও আলাদা থাকবে। ২) Stateless: সার্ভার কোনো ইউজারের সেশন স্টেট মেমরিতে জমিয়ে রাখবে না; প্রতিটি রিকোয়েস্টে নিজেই নিজের প্রমাণ (যেমন টোকেন) বহন করবে। ৩) Cacheable: সার্ভারের রেসপন্স ক্যাশ করা যাবে কি না তা নির্দিষ্ট থাকতে হবে। ৪) Uniform Interface: একই নিয়মে রিসোর্স ডিক্লেয়ার করতে হবে (যেমন নাউন বা নাম দিয়ে URL, স্ট্যান্ডার্ড HTTP মেথড GET, POST ইত্যাদি)। ৫) Layered System: মাঝে লোড ব্যালান্সার বা প্রক্সি সার্ভার থাকলেও ক্লায়েন্টের ওপর তার কোনো প্রভাব পড়বে না।",
      "deepDive": [
        "Stateless হওয়ার কারণে সার্ভার সহজে স্কেল করা যায়।",
        "URL-এ সবসময় প্লুরাল নামবাচক শব্দ থাকবে (যেমন `/users`, `/products`)।"
      ],
      "commonMistakes": [
        "সার্ভারের মেমরিতে ইউজার ডেটা রেখে দিয়ে দাবি করা যে API-টি RESTful (এটি স্টেটলেস নীতি লঙ্ঘন করে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'REST-এর সবচেয়ে গুরুত্বপূর্ণ নীতি হলো Statelessness, যার কারণে ক্লাউডে সার্ভার স্কেল করা অত্যন্ত সহজ হয়।'"
      ]
    }
  },
  {
    "id": "ms-q96-mvc-pattern-in-mern",
    "questionNumber": 96,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is the MVC pattern and how does it apply to a MERN app?",
    "banglaQuestion": "MVC প্যাটার্ন কী এবং একটি MERN অ্যাপে এটি কীভাবে প্রয়োগ করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Architecture",
      "MVC",
      "MERN",
      "Design Patterns",
      "Clean Code"
    ],
    "english": {
      "quickAnswer": "MVC (Model-View-Controller) is a software design pattern that separates concerns into Data structure (Model), User Interface (View), and Business Logic (Controller). In MERN, Mongoose provides the Models, React serves as the Views, and Express route handlers act as the Controllers.",
      "interviewSpeech": "The Model-View-Controller (MVC) pattern isolates application concerns to make code maintainable, scalable, and testable. In the MERN stack: 1) **Model (M)**: Handled by Mongoose schemas and models (`models/User.js`). It manages database interaction, schema rules, validations, and data persistence with MongoDB. 2) **View (V)**: Handled by the React frontend (`components/`, `pages/`). React is responsible for rendering the UI, capturing user events, and displaying data received from API calls. 3) **Controller (C)**: Handled by Express controller functions (`controllers/userController.js`). Controllers act as the liaison: they process incoming requests from routes, enforce business logic, interact with Models to fetch or update data, and send JSON responses back to the View.",
      "deepDive": [
        "**Separation of Concerns**: Routes define endpoints; Controllers process business rules; Models handle data access.",
        "**Decoupled Frontend**: Unlike traditional MVC (where the server rendered HTML views via EJS/Pug), in MERN the View runs client-side in the browser and communicates via JSON.",
        "**Service Layer**: In larger enterprise MERN apps, business logic is further decoupled into a Service layer (`Controller -> Service -> Model`)."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "MVC Directory Structure and Flow in MERN",
        "code": "/*\nBackend Folder Structure:\n/models       -> Mongoose Schemas (Data Layer)\n/controllers  -> Request handlers & business logic (Controller Layer)\n/routes       -> Endpoint path definitions\nFrontend:\n/src          -> React Components, Hooks, State (View Layer)\n*/\n\n// controllers/userController.js (CONTROLLER)\nconst User = require('../models/userModel'); // MODEL\n\nexports.getUserProfile = async (req, res, next) => {\n  try {\n    const user = await User.findById(req.user.id).select('-password');\n    res.status(200).json({ success: true, data: user }); // Sends to VIEW\n  } catch (err) {\n    next(err);\n  }\n};"
      },
      "commonMistakes": [
        "Writing hundreds of lines of database queries and business logic directly inside route definition files (`routes/user.js`) instead of separating into controllers.",
        "Thinking MVC only applies to server-rendered applications."
      ],
      "proTips": [
        "Clarify: 'In classical MVC, the server rendered HTML views. In modern MERN, React is the View decoupled entirely as a Single Page App talking via JSON APIs.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MVC (Model-View-Controller) হলো একটি সফটওয়্যার আর্কিটেকচারাল প্যাটার্ন যা ডেটা (Model), ইউজার ইন্টারফেস (View) এবং লজিককে (Controller) সম্পূর্ণ আলাদা রাখে। MERN-এ Mongoose হলো Model, React হলো View, আর Express হ্যান্ডলারগুলো হলো Controller।",
      "interviewSpeech": "MVC প্যাটার্ন কোডকে পরিচ্ছন্ন এবং সহজে রিফ্যাক্টর করার উপযোগী করে। MERN স্ট্যাকে এর ভাগগুলো হলো: ১) **Model**: Mongoose স্কিমা ও মডেলগুলো (যেমন `User.js`, `Order.js`) যা MongoDB ডাটাবেজের সাথে যোগাযোগ ও ডেটা স্ট্রাকচার নিয়ন্ত্রণ করে। ২) **View**: React ফ্রন্টএন্ড যা স্ক্রিনে ইউজার ইন্টারফেস দেখায় এবং বাটনের ক্লিক ধরে API-তে রিকোয়েস্ট পাঠায়। ৩) **Controller**: Express-এর কন্ট্রোলার ফাংশনগুলো যা রিকোয়েস্ট রিসিভ করে, বিজনেস লজিক যাচাই করে, মডেল থেকে ডেটা এনে ক্লায়েন্টকে JSON রেসপন্স পাঠায়। এর ফলে কোড কখনোই এলোমেলো হয় না।",
      "deepDive": [
        "Model: ডেটা স্ট্রাকচার ও ডাটাবেজ অপারেশন।",
        "View: React UI ও স্টেট।",
        "Controller: রিকোয়েস্ট প্রসেসিং ও বিজনেস লজিক।"
      ],
      "commonMistakes": [
        "রাউট ফাইলের ভেতরেই (`routes/user.js`) সব ডাটাবেজ কুয়েরি ও লজিক লিখে জগাখিচুড়ি করে ফেলা।"
      ],
      "proTips": [
        "প্রজেক্টে আলাদা `models/`, `controllers/`, এবং `routes/` ফোল্ডার বানিয়ে কাজ করা আদর্শ স্ট্যান্ডার্ড।"
      ]
    }
  },
  {
    "id": "ms-q97-env-file-security",
    "questionNumber": 97,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is .env file and why should it never be committed to Git?",
    "banglaQuestion": ".env ফাইল কী এবং এটি কেন কখনোই Git-এ কমিট করা উচিত নয়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Security",
      ".env",
      "Git",
      "Secret Management",
      "Best Practices",
      "DevOps"
    ],
    "english": {
      "quickAnswer": "A `.env` file stores sensitive environment variables (database connection strings, API secrets, private keys). It must NEVER be committed to Git to prevent catastrophic credential leaks, unauthorized database access, and security breaches.",
      "interviewSpeech": "The `.env` file contains plaintext secret keys that grant absolute administrative access to your infrastructure—such as MongoDB Atlas connection strings with admin passwords, AWS secret access keys, Stripe payment secret keys, and JWT signing secrets. If you commit a `.env` file to a Git repository, automated bot scrapers scour GitHub 24/7 indexing newly pushed commits in real-time. Within seconds of an accidental push, automated scripts can compromise your database, wipe your data for ransom, or rack up thousands of dollars in unauthorized cloud compute charges. Even making a repo private is unsafe because past commits retain the secrets. Always list `.env` in `.gitignore` and supply a sanitized `.env.example` file for collaborators.",
      "deepDive": [
        "**Scraping Bots**: Automated bots scan public GitHub commits in under 30 seconds for AWS, Mongo, and OpenAI API keys.",
        "**Git History**: Deleting the `.env` file in a later commit does NOT remove it from Git history; the entire git history must be purged using tools like `git-filter-repo` or BFG Repo-Cleaner.",
        "**Cloud Deployment**: In production platforms (Vercel, Render, Railway, AWS), variables are injected securely via the platform's Environment Variables dashboard, not by uploading a `.env` file."
      ],
      "codeSnippet": {
        "language": "bash",
        "caption": ".gitignore and .env.example Best Practice",
        "code": "# Inside .gitignore:\nnode_modules/\n.env\n.env.local\n.env.*.local\ndist/\n\n# Inside .env.example (Safe to commit as a team template!):\nPORT=5000\nMONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>\nJWT_SECRET=your_jwt_secret_here\nSTRIPE_SECRET_KEY=sk_test_..."
      },
      "commonMistakes": [
        "Accidentally committing `.env`, deleting it in the next commit, and assuming the secret is safe (it remains forever in commit history!).",
        "Putting production secrets into `.env.example`."
      ],
      "proTips": [
        "If a secret is ever pushed to GitHub, treat it as immediately compromised: revoke and rotate the API key in the provider dashboard immediately!"
      ]
    },
    "bangla": {
      "quickAnswer": "`.env` ফাইলে ডাটাবেজ পাসওয়ার্ড, পেমেন্ট গেটওয়ে কি এবং JWT সিক্রেটের মতো অত্যন্ত সংবেদনশীল তথ্য থাকে। এটি ভুলেও গিটহাবে পুশ করা যাবে না কারণ বট স্ক্র্যাপার মুহূর্তেই তথ্য চুরি করে ডাটাবেজ হ্যাক বা ক্লাউড বিলের বিশাল ক্ষতি করে দিতে পারে।",
      "interviewSpeech": "`.env` হলো আপনার অ্যাপের মূল চাবিকাঠি। এতে MongoDB Atlas-এর পাসওয়ার্ড, Stripe সিক্রেট কি, বা AWS ক্রেডেনশিয়ালস থাকে। গিটহাবে সারাক্ষণ স্বয়ংক্রিয় হ্যাকার বট স্ক্যান করে। কোনো পাবলিক রেপোতে `.env` পুশ হওয়ার ৩০ সেকেন্ডের ভেতর তারা পাসওয়ার্ড পেয়ে ডাটাবেজের সব ডেটা মুছে র‍্যানসমওয়্যার দাবি করতে পারে বা সার্ভার দিয়ে ক্রিপ্টো মাইনিং শুরু করতে পারে। এমনকি পরে গিটহাব থেকে ডিলিট করলেও গিট কমিট হিস্ট্রিতে তা থেকে যায়। তাই সবসময় `.gitignore`-এ `.env` লিখে রাখতে হয় এবং টিমের সুবিধার জন্য পাসওয়ার্ড ছাড়া একটি ডামি `.env.example` ফাইল কমিট করা হয়।",
      "deepDive": [
        "গিটহাবে কখনো সিক্রেট পুশ করা যাবে না।",
        "কখনো ভুলবশত পুশ হয়ে গেলে সাথে সাথে ওই ডাটাবেজ বা সার্ভারের পাসওয়ার্ড পরিবর্তন (Rotate) করতে হবে।",
        "প্রোডাকশনে Vercel বা Render-এর নিজস্ব ড্যাশবোর্ডে গিয়ে এই ভেরিয়েবলগুলো সেট করতে হয়।"
      ],
      "commonMistakes": [
        "ভাবা যে প্রাইভেট রেপোতে পুশ করলে কোনো সমস্যা নেই, বা পরের কমিটে ডিলিট করে দিলেই সব সমাধান হয়ে গেছে।"
      ],
      "proTips": [
        "টিমের জন্য সবসময় পাসওয়ার্ড ফিল্ড ফাঁকা রেখে একটি `.env.example` ফাইল তৈরি করে দিন।"
      ]
    }
  },
  {
    "id": "ms-q98-axios-vs-fetch",
    "questionNumber": 98,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is Axios and how does it differ from the Fetch API?",
    "banglaQuestion": "Axios কী এবং এটি ব্রাউজারের Fetch API থেকে কীভাবে আলাদা?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Axios",
      "Fetch API",
      "HTTP Client",
      "JSON",
      "Interceptors",
      "Full-Stack"
    ],
    "english": {
      "quickAnswer": "Axios is a popular third-party promise-based HTTP client library that automatically transforms JSON, handles HTTP error codes gracefully, supports interceptors, and simplifies request cancellation; Fetch is the native, un-opinionated browser API requiring manual JSON parsing and manual HTTP error status checking.",
      "interviewSpeech": "The native `fetch()` API is built into modern browsers and Node 18+, requiring no installation. However, it requires boilerplate: you must manually call `res.json()`, and critically, `fetch` does NOT reject promises on HTTP error statuses (like 404 or 500)—it only rejects on physical network failures. You must manually check `if (!res.ok) throw ...`. Axios is a standalone library that provides rich developer conveniences: 1) Automatic JSON serialization and parsing, 2) Automatic rejection of promises on HTTP 4xx and 5xx errors, 3) Request and Response **Interceptors** (invaluable for automatically attaching auth JWT headers or handling token refresh globally), 4) Built-in upload progress tracking, and 5) Easy request timeout configuration.",
      "deepDive": [
        "**Error Handling**: Fetch resolves on 404/500; Axios automatically rejects and routes to `.catch()`.",
        "**Interceptors**: Axios interceptors allow injecting headers or catching 401s centrally across the whole app.",
        "**Bundle Size**: Fetch is built-in (0 KB bundle); Axios adds ~13 KB to the client bundle."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Fetch vs Axios Comparison & Auth Interceptor",
        "code": "// 1. Native Fetch: Requires manual ok check and .json() unpacking\nconst fetchUser = async () => {\n  const res = await fetch('/api/user');\n  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);\n  const data = await res.json(); // Extra step!\n  return data;\n};\n\n// 2. Axios: Clean, automatic JSON, rejects on 4xx/5xx, supports interceptors\nimport axios from 'axios';\n\nconst api = axios.create({ baseURL: 'https://api.myapp.com' });\n\n// Global Interceptor attaches JWT token automatically to every request!\napi.interceptors.request.use((config) => {\n  const token = localStorage.getItem('token');\n  if (token) config.headers.Authorization = `Bearer ${token}`;\n  return config;\n});\n\nconst user = (await api.get('/user')).data; // Direct data access!"
      },
      "commonMistakes": [
        "Assuming `fetch()` throws an error on 404 or 500 status codes (it considers them successful HTTP exchanges; you must check `response.ok`).",
        "Forgetting that Axios wraps response data in a `.data` property."
      ],
      "proTips": [
        "Highlight Axios Interceptors: 'The biggest architectural reason teams choose Axios over Fetch is request/response interceptors for centralized JWT token injection and refresh handling.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Axios হলো একটি ফিচার-সমৃদ্ধ থার্ড-পার্টি HTTP লাইব্রেরি যা স্বয়ংক্রিয়ভাবে JSON রূপান্তর করে, এরর হ্যান্ডেল করে এবং ইন্টারসেপ্টর সাপোর্ট করে; আর Fetch হলো ব্রাউজারের বিল্ট-ইন মেথড যাতে ম্যানুয়ালি `res.json()` করতে হয় এবং এরর চেক করতে হয়।",
      "interviewSpeech": "Fetch ব্রাউজারে বিল্ট-ইন থাকায় কোনো অতিরিক্ত লাইব্রেরি ইনস্টল করতে হয় না। কিন্তু Fetch-এর বড় অসুবিধা হলো ৪MD বা 500 এরর আসলে এটি কোনো এরর দেয় না—বরং সফল মনে করে, তাই প্রতিবার `if (!res.ok)` দিয়ে ম্যানুয়ালি এরর হ্যান্ডেল করতে হয় এবং `await res.json()` আলাদা লাইনে লিখতে হয়। অন্যদিকে Axios অনেক বেশি ডেভলপার ফ্রেন্ডলি: এটি স্বয়ংক্রিয়ভাবে JSON ডেটা দিয়ে দেয়, 4xx বা 5xx এরর আসলে সরাসরি `catch`-এ ফেলে দেয়, এবং এতে Interceptors ফিচার রয়েছে যার মাধ্যমে এক জায়গা থেকেই প্রতিটি রিকোয়েস্টে স্বয়ংক্রিয়ভাবে JWT টোকেন যুক্ত করে দেওয়া যায়।",
      "deepDive": [
        "Fetch: 0 KB (বিল্ট-ইন), কিন্তু বয়লারপ্লেট বেশি।",
        "Axios: ১৩ KB সাইজ, কিন্তু স্বয়ংক্রিয় JSON ও শক্তিশালী Interceptors সুবিধা দেয়।"
      ],
      "commonMistakes": [
        "Fetch-এ 404 রেসপন্স আসলে ভাবা যে প্রমিজ নিজে থেকেই রিজেক্ট করবে (Fetch শুধু ইন্টারনেট কানেকশন না থাকলে রিজেক্ট করে)।"
      ],
      "proTips": [
        "টোকেন রিফ্রেশ ও সেন্ট্রাল হেডার সেট করার জন্য Axios Interceptor সেরা সমাধান।"
      ]
    }
  },
  {
    "id": "ms-q99-crud-react-to-express",
    "questionNumber": 99,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "How do you handle CRUD operations between a React frontend and Express backend?",
    "banglaQuestion": "React ফ্রন্টএন্ড এবং Express ব্যাকএন্ডের মধ্যে CRUD অপারেশন কীভাবে সমন্বয় করা হয়?",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Full-Stack",
      "CRUD",
      "React",
      "Express",
      "MERN",
      "State Synchronization"
    ],
    "english": {
      "quickAnswer": "CRUD synchronization involves making asynchronous HTTP requests from React handlers (or data hooks like TanStack Query), processing them through Express REST endpoints, and updating React state optimistically or post-response to keep the UI in sync.",
      "interviewSpeech": "To execute CRUD between React and Express: 1) **Create**: React sends `axios.post('/api/items', newItem)`. Express receives the body, creates the Mongoose document, and returns 201 Created. React appends the new document to state: `setItems(prev => [...prev, res.data])`. 2) **Read**: React fetches data on mount via `useEffect` or TanStack Query (`axios.get('/api/items')`), setting loading spinners until state updates. 3) **Update**: React sends `axios.patch('/api/items/' + id, edits)`. Express validates and updates via `findByIdAndUpdate`, returning 200. React maps through state: `setItems(prev => prev.map(item => item.id === id ? res.data : item))`. 4) **Delete**: React sends `axios.delete('/api/items/' + id)`. Express removes the record via `findByIdAndDelete`. React filters state: `setItems(prev => prev.filter(item => item.id !== id))`.",
      "deepDive": [
        "**State Synchronization**: Always update React state using immutability (`[...prev]`, `.map()`, `.filter()`).",
        "**Optimistic Updates**: Updating the UI immediately before the network response arrives to provide a 0ms instant user feel, rolling back if the request fails.",
        "**Modern Server State**: Modern apps use TanStack Query (React Query) to automate caching, loading flags, background refetching, and mutations."
      ],
      "codeSnippet": {
        "language": "jsx",
        "caption": "Frontend React CRUD Handler Pattern",
        "code": "function ItemManager() {\n  const [items, setItems] = React.useState([]);\n\n  // READ\n  React.useEffect(() => {\n    axios.get('/api/items').then(res => setItems(res.data));\n  }, []);\n\n  // CREATE\n  const handleAdd = async (title) => {\n    const res = await axios.post('/api/items', { title });\n    setItems(prev => [...prev, res.data]); // Immutably append\n  };\n\n  // UPDATE\n  const handleUpdate = async (id, newTitle) => {\n    const res = await axios.patch(`/api/items/${id}`, { title: newTitle });\n    setItems(prev => prev.map(i => i._id === id ? res.data : i));\n  };\n\n  // DELETE\n  const handleDelete = async (id) => {\n    await axios.delete(`/api/items/${id}`);\n    setItems(prev => prev.filter(i => i._id !== id)); // Immutably remove\n  };\n\n  return <div>{/* Render UI with mapped items */}</div>;\n}"
      },
      "commonMistakes": [
        "Mutating React state directly (e.g. `items.push(newItem)` or `items.splice(...)`) instead of returning new array references.",
        "Forgetting to handle loading and error states during network calls."
      ],
      "proTips": [
        "Mention TanStack Query: 'In modern production apps, manual `useEffect` + `useState` CRUD is replaced with TanStack Query for automated caching, deduplication, and optimistic mutations.'"
      ]
    },
    "bangla": {
      "quickAnswer": "React থেকে `axios` বা `fetch` দিয়ে Express-এর REST API-তে রিকোয়েস্ট পাঠানো হয়, এবং সার্ভার থেকে রেসপন্স আসার পর React-এর স্টেট ইমিউটেবলি (`map`, `filter`, স্প্রেড অপারেটর দিয়ে) আপডেট করে UI সিঙ্ক রাখা হয়।",
      "interviewSpeech": "React ও Express-এর মাঝে CRUD অপারেশনের ধাপগুলো হলো: ১) Create: React বাটন থেকে `axios.post` করে ডেটা পাঠায়; Express তা সেভ করে নতুন ডেটা ফেরত দিলে React স্প্রেড অপারেটর দিয়ে স্টেটে যোগ করে (`[...prev, res.data]`)। ২) Read: পেজ লোড হওয়ার সময় `useEffect` দিয়ে `axios.get` করে ডেটা এনে স্টেটে রাখা হয়। ৩) Update: এডিট ফর্মে `axios.patch` কল হয়; ব্যাকএন্ডে আপডেট হওয়ার পর React `.map()` দিয়ে শুধুমাত্র সংশ্লিষ্ট আইটেমটি আপডেট করে দেয়। ৪) Delete: ডিলিট বাটনে `axios.delete` চলে; ব্যাকএন্ড কনফার্ম করলে React `.filter()` চালিয়ে স্টেট থেকে আইটেমটি মুছে ফেলে। আধুনিক অ্যাপগুলোতে এটি আরও মসৃণ করতে TanStack Query ব্যবহার করা হয়।",
      "deepDive": [
        "স্টেট সবসময় ইমিউটেবল পদ্ধতিতে আপডেট করতে হবে।",
        "Optimistic UI: সার্ভার রেসপন্সের অপেক্ষা না করে ইউজারকে সাথে সাথে ফলাফল দেখানো।"
      ],
      "commonMistakes": [
        "স্টেটে সরাসরি `items.push()` দিয়ে ডেটা ঢোকানো (এতে রিয়্যাক্ট পরিবর্তন বুঝতে পারে না)।"
      ],
      "proTips": [
        "বড় প্রজেক্টে ডেটা ফেচিং ও ক্যাশিংয়ের জন্য TanStack Query (React Query) ব্যবহারের কথা উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "ms-q100-deployment-and-hosting-mern",
    "questionNumber": 100,
    "module": "Full-Stack Integration",
    "topic": "Auth, Deployment & Best Practices",
    "question": "What is deployment and what platforms can you use to deploy a MERN app?",
    "banglaQuestion": "Deployment কী এবং একটি MERN অ্যাপ ডেপ্লয় করার জন্য কোন কোন প্ল্যাটফর্ম ব্যবহার করা যায়?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Deployment",
      "DevOps",
      "MERN",
      "Hosting",
      "Vercel",
      "Render",
      "MongoDB Atlas",
      "Docker"
    ],
    "english": {
      "quickAnswer": "Deployment is the process of hosting and running an application on cloud servers so it is publicly accessible over the internet via a domain name. A MERN app is typically deployed as a decoupled architecture: React on Vercel/Netlify, Express on Render/Railway/AWS, and MongoDB on MongoDB Atlas.",
      "interviewSpeech": "Deployment transitions an application from local development (`localhost`) to a 24/7 production cloud environment accessible to real users worldwide. A modern MERN application is generally deployed using a decoupled, specialized architecture: 1) **Database**: Hosted on **MongoDB Atlas** (managed database-as-a-service with automated backups, monitoring, and IP whitelisting). 2) **Backend API**: Deployed on platforms like **Render**, **Railway**, **Fly.io**, or **AWS EC2/Elastic Beanstalk**. The server environment requires setting environment variables (`PORT`, `MONGO_URI`, `JWT_SECRET`). 3) **Frontend SPA**: Built into optimized static HTML/JS/CSS assets (`npm run build`) and hosted on global edge CDNs like **Vercel**, **Netlify**, or **Cloudflare Pages**. 4) **Containerization (Production Grade)**: Large enterprise MERN apps are packaged using **Docker** containers and orchestrated on **Kubernetes** or AWS ECS.",
      "deepDive": [
        "**Build Step**: Frontend transforms JSX and TypeScript to static bundles; backend runs via a production process manager like `pm2` or Docker.",
        "**CORS in Production**: Ensure Express CORS whitelist includes the production Vercel domain (`https://myapp.vercel.app`).",
        "**CI/CD Pipelines**: Automated GitHub Actions pipelines that test, build, and deploy code automatically on every git push to `main`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Standard MERN Production Cloud Architecture",
        "code": "/*\n[React Frontend SPA]\n  -> Hosted on Vercel / Netlify (Global Edge CDN)\n  -> Environment variable: VITE_API_BASE_URL=https://api.myapp.com\n        |\n     (HTTPS REST API Calls)\n        v\n[Express.js Backend API]\n  -> Hosted on Render / Railway / AWS EC2 (Node.js runtime)\n  -> CORS Origin: https://myapp.vercel.app\n  -> Environment variables: MONGO_URI, JWT_SECRET, PORT\n        |\n     (Encrypted TLS Connection)\n        v\n[MongoDB Atlas Database]\n  -> Cloud Database Cluster (AWS / GCP / Azure region)\n  -> IP Whitelist configured for backend server\n*/"
      },
      "commonMistakes": [
        "Forgetting to whitelist the backend server's IP address in MongoDB Atlas Network Access settings (causes connection timeout crash).",
        "Hardcoding `http://localhost:5000` inside frontend production code instead of using environment variables (`import.meta.env.VITE_API_URL`).",
        "Forgetting to configure client-side routing redirects (e.g. `_redirects` or `vercel.json` rewrites) causing 404s on subpage refreshes."
      ],
      "proTips": [
        "Conclude with confidence: 'A modern MERN deployment splits responsibilities: Vercel for the edge-cached React frontend, Render or AWS for the Node/Express backend, and MongoDB Atlas for the database, connected via automated GitHub CI/CD.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Deployment হলো একটি অ্যাপ্লিকেশনকে লোকাল কম্পিউটার থেকে ক্লাউড সার্ভারে তুলে দেওয়া যাতে ইন্টারনেটের মাধ্যমে যেকোনো প্রান্ত থেকে ইউজাররা তা ব্যবহার করতে পারে। MERN অ্যাপ সাধারণত Vercel (ফ্রন্টএন্ড), Render/Railway (ব্যাকএন্ড), এবং MongoDB Atlas (ডাটাবেজ)-এ ডেপ্লয় করা হয়।",
      "interviewSpeech": "অ্যাপ্লিকেশন তৈরি শেষে বিশ্বব্যাপী ইউজারদের জন্য উন্মুক্ত করাই হলো ডেপ্লয়মেন্ট। MERN স্ট্যাক সাধারণত তিনটি পৃথক ও বিশেষায়িত প্ল্যাটফর্মে ভাগ করে ডেপ্লয় করা হয়: ১) **Database**: **MongoDB Atlas** ক্লাউডে হোস্ট করা হয়, যা স্বয়ংক্রিয় ব্যাকআপ ও সিকিউরিটি নিশ্চিত করে। ২) **Backend (Express)**: **Render**, **Railway**, বা **AWS EC2**-তে রান করানো হয়, যেখানে পোর্ট ও ডাটাবেজ সিক্রেট এনভায়রনমেন্ট ভেরিয়েবল হিসেবে দিয়ে দেওয়া হয়। ৩) **Frontend (React)**: কোড বিল্ড করে **Vercel** বা **Netlify**-এর গ্লোবাল CDN-এ হোস্ট করা হয়, যাতে পলকের মধ্যে সাইট ওপেন হয়। বড় ইন্ডাস্ট্রিতে এই তিনটি অংশকে **Docker** দিয়ে কনটেইনার বানিয়ে ক্লাউডে ম্যানেজ করা হয়।",
      "deepDive": [
        "ফ্রন্টএন্ড: Vercel / Netlify (সুপার ফাস্ট CDN)।",
        "ব্যাকএন্ড: Render / Railway / AWS (Node.js সার্ভার)।",
        "ডাটাবেজ: MongoDB Atlas।",
        "GitHub Actions দিয়ে CI/CD পাইপলাইন তৈরি করে অটোমেশন করা যায়।"
      ],
      "commonMistakes": [
        "MongoDB Atlas-এর Network Access-এ IP Whitelist (0.0.0.0/0) এলাউ করতে ভুলে গিয়ে সার্ভার ক্র্যাশ করানো।",
        "ফ্রন্টএন্ড কোডে `http://localhost:5000` হার্ডকোড রেখে দেওয়া।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'আধুনিক MERN আর্কিটেকচারে ফ্রন্টএন্ড Vercel-এ, ব্যাকএন্ড Render বা AWS-এ, এবং ডাটাবেজ MongoDB Atlas-এ ডেপ্লয় করা সবচেয়ে জনপ্রিয় ও কার্যকর সমাধান।'"
      ]
    }
  }
];
