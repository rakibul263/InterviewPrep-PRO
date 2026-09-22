import { MockInterviewItem } from "@/types";

export interface PlacementDayInfo {
  id: string;
  dayNumber: number;
  title: string;
  module: string;
  topic: string;
  questionRange: [number, number];
  count: number;
  badgeColor: string;
}

export const PLACEMENT_ARENA_DAYS: PlacementDayInfo[] = [
  {
    "id": "day-1-js-fund-1",
    "dayNumber": 1,
    "title": "Day 1 — JavaScript Fundamentals I",
    "module": "JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "questionRange": [
      1,
      15
    ],
    "count": 15,
    "badgeColor": "amber"
  }
];

export const PLACEMENT_ARENA_QUESTIONS: MockInterviewItem[] = [
  {
    "id": "pa-d1-q1-var-let-const",
    "questionNumber": 1,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between var, let, and const in JavaScript?",
    "banglaQuestion": "JavaScript-এ var, let এবং const-এর মধ্যে মূল পার্থক্য কী কী?",
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
      "quickAnswer": "`var` is function-scoped and hoisted with `undefined`. `let` and `const` are block-scoped `{}` and hoisted into the Temporal Dead Zone (TDZ). `const` additionally requires initialization and prevents identifier reassignment.",
      "interviewSpeech": "The differences between `var`, `let`, and `const` center on three dimensions: Scope, Hoisting, and Reassignability. `var`, available since JavaScript's inception, is function-scoped (or globally scoped if declared outside a function). It completely ignores `{}` block boundaries like `if` statements or `for` loops, and allows accidental re-declaration. When hoisted, `var` is initialized to `undefined`. In contrast, `let` and `const` were introduced in ES6 to provide block scoping—they are strictly confined within the nearest curly braces `{}`. While they are hoisted during the memory allocation phase, they are placed into the Temporal Dead Zone (TDZ) and cannot be accessed before their declaration line. Finally, `let` allows reassigning values, whereas `const` binds an identifier immutably upon declaration. Note that while `const` prevents reassigning the variable reference, objects and arrays assigned to `const` can still have their internal properties mutated.",
      "deepDive": [
        "**Scope Hierarchy**: `var` attaches to the nearest function context or the `window` object in browsers; `let`/`const` adhere strictly to lexical block bounds.",
        "**Hoisting Lifecycle**: In the Creation Phase, `var` is registered and initialized with `undefined`. `let`/`const` are registered in Lexical Environment but remain uninitialized until the evaluation step reaches their line.",
        "**Global Object Pollution**: Top-level `var x = 10;` attaches `window.x = 10;`. Top-level `let y = 20;` does not attach to `window`.",
        "**Object Mutation vs Reassignment**: `const user = { name: 'Rahim' }` prevents `user = {}` (TypeError), but permits `user.name = 'Karim'`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Scope, Reassignment, and TDZ Comparison",
        "code": "// 1. Scope demonstration:\nif (true) {\n  var functionScoped = \"I leak outside!\";\n  let blockScoped = \"I stay inside!\";\n}\nconsole.log(functionScoped); // \"I leak outside!\"\n// console.log(blockScoped); // ReferenceError: blockScoped is not defined\n\n// 2. Re-declaration & Reassignment:\nvar x = 1;\nvar x = 2; // Allowed without error\n\nlet y = 1;\n// let y = 2; // SyntaxError: Identifier 'y' has already been declared\ny = 3; // Allowed reassignment\n\nconst z = 10;\n// z = 20; // TypeError: Assignment to constant variable"
      },
      "commonMistakes": [
        "Thinking `const` creates deeply immutable data structures (use `Object.freeze()` to prevent shallow property mutation).",
        "Claiming `let` and `const` are not hoisted at all (they ARE hoisted, but guarded by TDZ)."
      ],
      "proTips": [
        "State the senior rule of thumb: 'Adopt `const` by default for predictable code; switch to `let` only when variable reassignment is required (such as loop counters); avoid `var` entirely in modern ES6+ codebases.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`var` হলো ফাংশন-স্কোপড এবং `undefined` দিয়ে হোইস্টেড হয়; আর `let` এবং `const` হলো ব্লক-স্কোপড এবং TDZ-এ থাকে। `const`-এ রিঅ্যাসাইন করা যায় না।",
      "interviewSpeech": "`var`, `let` এবং `const`-এর মধ্যে ৩টি প্রধান পার্থক্য রয়েছে: স্কোপ (Scope), হোইস্টিং (Hoisting) এবং রিঅ্যাসাইনমেন্ট (Reassignment)। `var` হলো ফাংশন-স্কোপড, অর্থাৎ এটি কোনো `if` বা `for` লুপের কার্লি ব্রেসেস `{}` মানে না, যার ফলে বাগ হওয়ার বড় ঝুঁকি থাকে এবং এটি একই স্কোপে বারবার রি-ডিক্লেয়ার করা যায়। হোইস্টিংয়ের সময় `var` স্বয়ংক্রিয়ভাবে `undefined` মান নিয়ে মেমরিতে ইনিশিয়ালাইজ হয়। অন্যদিকে ES6-এর `let` এবং `const` হলো ব্লক-স্কোপড—এরা যে ব্লকে ডিক্লেয়ার হয় কেবল সেখানেই সীমাবদ্ধ থাকে। এদেরও হোইস্টিং হয়, তবে ডিক্লেয়ারেশন লাইনে পৌঁছানোর আগ পর্যন্ত এরা 'Temporal Dead Zone (TDZ)'-এ থাকে, ফলে আগে অ্যাক্সেস করলে `ReferenceError` দেয়। সবশেষে, `let`-এর মান পরবর্তীতে পরিবর্তন (reassign) করা যায়, কিন্তু `const`-এর আইডেন্টিফায়ার ডিক্লেয়ারের সময়ই মান দিতে হয় এবং পরে নতুন মান রিঅ্যাসাইন করা যায় না।",
      "deepDive": [
        "**স্কোপিং পার্থক্য**: `var` ফাংশন স্কোপড অথবা ব্রাউজারের `window` অবজেক্টের সাথে যুক্ত হয়ে যায়; `let` ও `const` শুধুমাত্র নির্দিষ্ট `{}` ব্লকের মধ্যেই সীমাবদ্ধ থাকে।",
        "**হোইস্টিং মেকানিজম**: মেমোরি অ্যালটমেন্ট ফেজে `var` মান পায় `undefined`, কিন্তু `let`/`const` আন-ইনিশিয়ালাইজড থাকে (TDZ)।",
        "**গ্লোবাল অবজেক্ট দূষণ**: গ্লোবাল লেভেলে `var x = 5` লিখলে `window.x` হয়ে যায়, কিন্তু `let` বা `const` লিখলে তা `window`-তে যুক্ত হয় না।",
        "**মিউটেশন বনাম রিঅ্যাসাইন**: `const person = { name: 'Ali' }`-এ `person.name = 'Hasan'` করা জায়েজ (Object mutation), কিন্তু `person = {}` করা নিষিদ্ধ।"
      ],
      "commonMistakes": [
        "`let` এবং `const` হোইস্ট হয় না—এমন ভুল ব্যাখ্যা দেওয়া। তারা নিশ্চিতভাবেই হোইস্ট হয়, তবে TDZ গার্ডের কারণে এরর ছুঁড়ে দেয়।",
        "`const` দিয়ে অবজেক্ট তৈরি করলে ভেতরের ডেটাও পরিবর্তন করা যাবে না মনে করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে এক লাইনে বলুন: 'আধুনিক জাভাস্ক্রিপ্ট কোডবেসে ডিফল্টভাবে সর্বদা `const` ব্যবহার করা উচিত, মান পরিবর্তনশীল হলে `let`, এবং `var` সম্পূর্ণ পরিহার করা উচিত।'"
      ]
    }
  },
  {
    "id": "pa-d1-q2-hoisting",
    "questionNumber": 2,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain the concept of hoisting in JavaScript.",
    "banglaQuestion": "JavaScript-এ হোইস্টিং (Hoisting) কী এবং এটি কীভাবে কাজ করে?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Hoisting",
      "Execution Context",
      "Memory Management"
    ],
    "english": {
      "quickAnswer": "Hoisting is the JS engine's mechanism of allocating memory for variable and function declarations during the Creation Phase of the Execution Context before executing any code.",
      "interviewSpeech": "Hoisting is often metaphorically described as 'moving declarations to the top of the file,' but under the hood, it is the direct result of JavaScript's two-phase execution lifecycle: the Creation Phase and the Execution Phase. During the Creation Phase, the V8 engine scans the script and assigns memory slots to all declared identifiers. Function declarations are hoisted completely with their full implementation body, allowing them to be invoked anywhere in the file prior to their declaration line. Variables declared with `var` are allocated and initialized with `undefined`. In contrast, variables declared with `let` and `const` (as well as `class` declarations) are also registered in memory, but left uninitialized in the Temporal Dead Zone (TDZ). Function expressions and arrow functions assigned to variables follow variable hoisting rules rather than function declaration rules.",
      "deepDive": [
        "**Two-Phase Lifecycle**: 1) Creation Phase (Lexical Environment setup, hoisting), 2) Execution Phase (line-by-line interpretation & assignment).",
        "**Function Declarations vs Expressions**: Function declarations (`function sayHi() {}`) are fully hoisted. Function expressions (`const sayHi = () => {}`) leave the variable in TDZ or initialized to `undefined` (if `var`), throwing an error if invoked early.",
        "**Declaration Precedence**: When a variable and a function share the identical name, the function declaration takes precedence during memory allocation."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Hoisting in Functions vs Variables",
        "code": "// 1. Function declaration: Fully hoisted with body\nwelcome(); // Output: \"Welcome to Placement Arena!\"\nfunction welcome() {\n  console.log(\"Welcome to Placement Arena!\");\n}\n\n// 2. var: Hoisted as undefined\nconsole.log(score); // Output: undefined\nvar score = 100;\n\n// 3. let & const: Hoisted into TDZ\n// console.log(rank); // ReferenceError: Cannot access 'rank' before initialization\nconst rank = 1;\n\n// 4. Function expression via var:\n// calculate(); // TypeError: calculate is not a function (it is currently undefined!)\nvar calculate = function() { return 42; };"
      },
      "commonMistakes": [
        "Believing that JavaScript physically cuts and pastes lines of code to the top of the file.",
        "Assuming calling a `var` function expression before its definition gives `ReferenceError` (it actually throws `TypeError: fn is not a function` because it holds `undefined`)."
      ],
      "proTips": [
        "Clarify the V8 Execution Context: 'Hoisting is not source code movement; it is the natural consequence of the Memory Allocation phase before the Code Execution phase begins.'"
      ]
    },
    "bangla": {
      "quickAnswer": "হোইস্টিং হলো জাভাস্ক্রিপ্ট ইঞ্জিনের এক্সিকিউশন কনটেক্সটের মেমোরি ক্রিয়েশন ফেজে ভেরিয়েবল ও ফাংশন ডিক্লেয়ারেশনকে মেমোরিতে আগে থেকেই জায়গা বরাদ্দ করে রাখার আচরণ।",
      "interviewSpeech": "সহজ কথায় হোইস্টিংকে কোড ফাইলের একদম উপরে উঠে যাওয়া মনে হলেও, ইন্টারনালি এটি মূলত জাভাস্ক্রিপ্টের Execution Context-এর মেকানিজম। কোড লাইন-বাই-লাইন চালানোর আগে ইঞ্জিন একটি 'Creation Phase' চালায়। এই ধাপে কোডের সমস্ত ফাংশন ও ভেরিয়েবলের জন্য মেমোরি বরাদ্দ হয়। সাধারণ Function Declaration-এর পুরো বডি মেমরিতে জমা হয়, যার ফলে কোডে লেখার আগেই ফাংশনটি কল করা সম্ভব হয়। `var` দিয়ে লেখা ভেরিয়েবল মেমরিতে `undefined` মান নিয়ে জায়গা পায়। আর `let` এবং `const`-এর নাম মেমরিতে রেজিস্টার হলেও কোনো ইনিশিয়াল মান পায় না—তারা Temporal Dead Zone (TDZ)-এ থাকে। ফলে ডিক্লেয়ারেশনের আগে ডাকলে ReferenceError দেয়। কোড শারীরিকভাবে উপরে ওঠে না, ইঞ্জিন মেমরিতে আগে থেকে সাজিয়ে রাখে বলেই একে হোইস্টিং বলে।",
      "deepDive": [
        "**২টি ফেজ**: ১) মেমোরি ক্রিয়েশন ফেজ (হোইস্টিং সম্পন্ন হয়), ২) কোড এক্সিকিউশন ফেজ (লাইন বাই লাইন রান হয়)।",
        "**ফাংশন এক্সপ্রেশন**: `var fn = () => {}` হলে ডিক্লেয়ারেশনের আগে কল করলে `TypeError: fn is not a function` দেয়, কারণ তখন ভেরিয়েবলের মান থাকে `undefined`।",
        "**অগ্রাধিকার**: একই নামের ফাংশন ও ভেরিয়েবল থাকলে ফাংশন ডিক্লেয়ারেশন মেমোরিতে অগ্রাধিকার পায়।"
      ],
      "commonMistakes": [
        "কোড স্ক্রিপ্টের একদম উপরে ফিজিক্যালি মুভ করে এমন অবৈজ্ঞানিক উত্তর দেওয়া।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Execution Context' এবং 'Creation Phase vs Execution Phase'-এর নাম উল্লেখ করলে সিনিয়র লেভেল গভীরতা প্রকাশ পায়।"
      ]
    }
  },
  {
    "id": "pa-d1-q3-primitive-data-types",
    "questionNumber": 3,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "interviewSpeech": "JavaScript defines 7 primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Everything outside of these 7 types is a non-primitive Object (which includes Arrays, Functions, Plain Objects, and Dates). Primitives have two defining attributes: First, they are immutable—their internal value cannot be modified in place; operations on primitives return a brand new copy in memory. Second, they are stored directly on the execution Call Stack (or inline) and passed by value, whereas non-primitives store a memory address reference pointing to the Heap.",
      "deepDive": [
        "**Stack vs Heap**: Primitives reside directly in Call Stack stack frames; Objects reside in the dynamic memory Heap with pointers on the stack.",
        "**Immutability Example**: When doing `let s = 'hello'; s.toUpperCase();`, string `s` remains `'hello'` because strings cannot be mutated in place.",
        "**ES6 Symbol & ES2020 BigInt**: `Symbol` creates guaranteed-unique identifier tokens (useful for private object keys); `BigInt` allows arbitrary precision integers exceeding `Number.MAX_SAFE_INTEGER` ($2^{53} - 1$).",
        "**The `typeof null` Bug**: `typeof null` returns `'object'` because in the original 1995 JS engine, object types were tagged with the binary prefix `000`, and `null` was represented as a NULL pointer (`0x00`), leading to a permanent false match."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "The 7 Primitives and Immutability",
        "code": "const str = \"Placement\";          // 1. string\nconst num = 2026;                 // 2. number (IEEE 754 64-bit float)\nconst big = 9007199254740995n;    // 3. bigint (arbitrary precision)\nconst bool = true;                // 4. boolean\nconst undef = undefined;          // 5. undefined (unassigned)\nconst sym = Symbol(\"secretId\");   // 6. symbol (unique key)\nconst empty = null;               // 7. null (explicit absence)\n\n// Primitives are immutable:\nlet greeting = \"hello\";\ngreeting[0] = \"H\"; // Silently ignored in non-strict mode, TypeError in strict mode\nconsole.log(greeting); // Still \"hello\"!"
      },
      "commonMistakes": [
        "Listing Array or Function as primitive types (they are specialized Object subtypes).",
        "Thinking `typeof null` returning `'object'` means `null` is an object (it is a historical JS engine quirk)."
      ],
      "proTips": [
        "Always proactively mention `Symbol` and `BigInt` along with the classical 5 types to demonstrate complete up-to-date knowledge of the ECMAScript specification."
      ]
    },
    "bangla": {
      "quickAnswer": "JavaScript-এ ৭টি প্রিমিটিভ ডেটা টাইপ রয়েছে: string, number, bigint, boolean, undefined, symbol এবং null। এরা ইমিউটেবল (অপরিবর্তনশীল) এবং পাস-বাই-ভ্যালু।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে ডেটা মূলত দুই ভাগে বিভক্ত: প্রিমিটিভ এবং নন-প্রিমিটিভ (অবজেক্ট)। প্রিমিটিভ ডেটা টাইপ মোট ৭টি: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` এবং `null`। এই ৭টি বাদে বাকি যা কিছু আছে (অ্যারে, অবজেক্ট, ফাংশন, ডেট) সবই অবজেক্ট টাইপ। প্রিমিটিভ ডেটার মূল বৈশিষ্ট্য হলো এরা ইমিউটেবল (immutable)—অর্থাৎ মেমরিতে এদের মূল মান সরাসরি পরিবর্তন করা যায় না, কোনো অপারেশন চালালে নতুন মেমোরি তৈরি হয়। এরা স্ট্যাক মেমরিতে সংরক্ষিত থাকে এবং সরাসরি ভ্যালু আকারে কপি (pass-by-value) হয়।",
      "deepDive": [
        "**স্ট্যাক বনাম হিপ**: প্রিমিটিভ সরাসরি স্ট্যাক মেমরিতে ভ্যালু হিসেবে থাকে; আর অবজেক্টগুলো হিপ মেমরিতে থাকে এবং স্ট্যাকে শুধু তাদের পয়েন্টার বা রেফারেন্স অ্যাড্রেস থাকে।",
        "**ইমিউটেবিলিটি**: `let str = 'cat'; str[0] = 'r';` লিখলে এর মান 'rat' হবে না, 'cat'-ই থাকবে কারণ প্রিমিটিভ মিউটেট করা যায় না।",
        "**ES6 Symbol ও BigInt**: `Symbol` দিয়ে অবজেক্টের ইউনিক প্রাইভেট কি তৈরি হয়, আর `BigInt` দিয়ে $2^{53} - 1$-এর চেয়ে বড় যেকোনো বিশাল পূর্ণসংখ্যার নিখুঁত হিসাব করা যায়।",
        "**`typeof null` ঐতিহাসিক বাগ**: ১৯৯৫ সালে জাভাস্ক্রিপ্ট তৈরির সময় মেমোরি টাইপ ট্যাগ `000` ছিল অবজেক্টের প্রতীক, আর নাল পয়েন্টারও `0x00` হওয়ায় এটি ভুলবশত 'object' রিটার্ন করে।"
      ],
      "commonMistakes": [
        "Array বা Function-কে প্রিমিটিভ ডেটা টাইপ বলে ভুল করা (এরা মূলত অবজেক্ট)।"
      ],
      "proTips": [
        "স্মার্টলি বলুন: 'ES6-এর Symbol এবং ES2020-এর BigInt সহ জাভাস্ক্রিপ্টে আধুনিক প্রিমিটিভ টাইপ সর্বমোট ৭টি।'"
      ]
    }
  },
  {
    "id": "pa-d1-q4-equality",
    "questionNumber": 4,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between == and === in JavaScript?",
    "banglaQuestion": "JavaScript-এ == (লুজ ইকুয়ালিটি) এবং === (স্ট্রিক্ট ইকুয়ালিটি)-এর মধ্যে মূল পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Equality",
      "Type Coercion",
      "Operators"
    ],
    "english": {
      "quickAnswer": "`==` (loose equality) coerces types before comparison using the Abstract Equality Algorithm, while `===` (strict equality) compares both value and data type with zero type conversion.",
      "interviewSpeech": "The difference between `==` and `===` lies entirely in implicit type coercion. The double-equals operator `==` checks for loose equality: if the two operands have different types, the JavaScript engine applies the Abstract Equality Comparison algorithm to coerce them to a common primitive type before comparing values (e.g., `'42' == 42` becomes `42 == 42`, returning `true`). In contrast, triple-equals `===` enforces strict equality: if the data types differ, it immediately evaluates to `false` without performing any conversion. In modern development, `===` is the universal standard to eliminate subtle, unpredictable type coercion bugs.",
      "deepDive": [
        "**Coercion Corner Cases**: `0 == ''` is `true`, `0 == '0'` is `true`, `false == 0` is `true`, but `'' == '0'` is `false`!",
        "**The `null` and `undefined` Rule**: `null == undefined` evaluates to `true` (by spec convention), but `null === undefined` evaluates to `false`.",
        "**Non-Primitive Reference Equality**: Both `==` and `===` check memory reference address for objects, not content. Therefore, `[] == []` and `{} === {}` are always `false`.",
        "**`NaN` Exception**: `NaN === NaN` is `false`. Use `Number.isNaN()` or `Object.is()` for exact NaN detection."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Loose (==) vs Strict (===) Equality in Action",
        "code": "// Loose Equality (==): Type coercion applied\nconsole.log(5 == \"5\");            // true (string coerced to number)\nconsole.log(false == 0);          // true (false coerced to 0)\nconsole.log(null == undefined);   // true (special rule)\nconsole.log([] == false);         // true (empty array coerced to '' then to 0)\n\n// Strict Equality (===): No coercion (Type + Value checked)\nconsole.log(5 === \"5\");           // false (number !== string)\nconsole.log(false === 0);         // false\nconsole.log(null === undefined);   // false\nconsole.log([] === false);        // false\n\n// Object reference check:\nconst a = { id: 1 };\nconst b = { id: 1 };\nconsole.log(a === b);             // false (different heap memory addresses!)"
      },
      "commonMistakes": [
        "Assuming `[1] === [1]` is true because their items match (arrays are objects, compared by memory reference).",
        "Checking `x === NaN` (NaN is never strictly equal to itself; always use `Number.isNaN(x)`)."
      ],
      "proTips": [
        "Mention the single widely-accepted use case for `==`: checking if a value is either `null` or `undefined` in one stroke using `if (value == null)`."
      ]
    },
    "bangla": {
      "quickAnswer": "`==` (লুজ ইকুয়ালিটি) টাইপ কনভার্সন (Type Coercion) ঘটিয়ে তুলনা করে; আর `===` (স্ট্রিক্ট ইকুয়ালিটি) কোনো রূপান্তর ছাড়াই মান এবং ডেটা টাইপ উভয়ই হুবহু যাচাই করে।",
      "interviewSpeech": "পার্থক্যটি মূলত টাইপ রূপান্তর বা Type Coercion-এর ওপর নির্ভর করে। ডাবল ইকুয়াল `==` লুজ ইকুয়ালিটি চেক করে: যদি দুই পাশের ডেটা টাইপ ভিন্ন হয়, তবে জাভাস্ক্রিপ্ট ইঞ্জিন ইন্টারনাল অ্যালগরিদমের মাধ্যমে উভয়কে একই সাধারণ টাইপে রূপান্তর করে মান তুলনা করে—যেমন `'5' == 5` সত্য (true) হবে কারণ স্ট্রিং '৫' নাম্বারে কনভার্ট হয়ে যায়। অন্যদিকে ট্রিপল ইকুয়াল `===` হলো স্ট্রিক্ট ইকুয়ালিটি—এটি কোনো প্রকার টাইপ রূপান্তর করে না। মান এবং ডেটা টাইপ দুটোই এক না হলে এটি সরাসরি `false` রিটার্ন করে। অনিচ্ছাকৃত বাগ এড়াতে আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে সর্বদা `===` ব্যবহার করা অলিখিত নিয়ম।",
      "deepDive": [
        "**বিচিত্র Coercion কেস**: `0 == ''` ট্রু, `0 == false` ট্রু, কিন্তু `'' == '0'` ফলস!",
        "**`null` ও `undefined`**: `null == undefined` ট্রু হয় (স্পেসিফিকেশনের নিয়মে), কিন্তু `null === undefined` ফলস হয়।",
        "**অবজেক্ট রেফারেন্স তুলনা**: অবজেক্ট বা অ্যারে ভেতরের ডেটা দিয়ে তুলনা হয় না, তাদের মেমোরি অ্যাড্রেস দেখা হয়। তাই `{} === {}` সর্বদা `false`।",
        "**`NaN`-এর অদ্ভুত আচরণ**: জাভাস্ক্রিপ্টে `NaN === NaN` ফলস হয়। এটি যাচাই করতে `Number.isNaN()` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "দুটি অ্যারে `[10] === [10]` ট্রু মনে করা (দুটির মেমোরি পয়েন্টার আলাদা হওয়ায় ফলস হয়)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'শুধুমাত্র একটি ক্ষেত্রে `==` ব্যবহার জনপ্রিয়—যখন কোনো ভেরিয়েবল একই সাথে `null` বা `undefined` কিনা তা `if (x == null)` দিয়ে একবারে চেক করা হয়। বাকি সব ক্ষেত্রে সর্বদা `===` ব্যবহার্য।'"
      ]
    }
  },
  {
    "id": "pa-d1-q5-closures",
    "questionNumber": 5,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain how closures work in JavaScript with an example.",
    "banglaQuestion": "JavaScript-এ ক্লোজার (Closure) কী এবং কীভাবে কাজ করে? বাস্তব উদাহরণসহ ব্যাখ্যা করুন।",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Closures",
      "Scope",
      "Memory",
      "Functions"
    ],
    "english": {
      "quickAnswer": "A closure is the bundling of a function with its surrounding lexical environment, allowing an inner function to retain access to an outer function's variables even after the outer function has completed execution.",
      "interviewSpeech": "A closure is created every time a function is declared in JavaScript. When an inner function references identifiers from an enclosing outer function's scope, the JavaScript engine retains that outer lexical environment in heap memory. Even after the outer function finishes executing and its execution context is popped off the call stack, the inner function preserves a permanent live link to those outer variables via its internal `[[Environment]]` slot. Closures are ubiquitous in modern JavaScript: they form the architectural backbone of data privacy and encapsulation (private state), factory functions, currying, event handlers, and React hooks such as `useState` and `useEffect`.",
      "deepDive": [
        "**Memory Mechanics**: Execution Context is removed from Call Stack upon `return`, but its Variable Environment Record is kept in the Garbage Collector's reach if referenced by the inner function.",
        "**Live Reference, Not a Snapshot**: Closures close over variable *references*, not snapshot values. Mutating the outer variable reflects in all closures referencing it.",
        "**Data Encapsulation**: Private variables inaccessible from external code can be exposed strictly through closure getters/setters.",
        "**Memory Leak Considerations**: Retaining massive DOM elements or long-lived closures inside event handlers without cleaning up can lead to memory bloat."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Encapsulated Bank Account using Closure",
        "code": "function createBankAccount(initialBalance) {\n  let balance = initialBalance; // Private state, protected from outside tampering\n\n  return {\n    deposit(amount) {\n      if (amount > 0) balance += amount;\n      return balance;\n    },\n    withdraw(amount) {\n      if (amount > 0 && amount <= balance) {\n        balance -= amount;\n        return balance;\n      }\n      return \"Insufficient balance!\";\n    },\n    getBalance() {\n      return balance;\n    }\n  };\n}\n\nconst account = createBankAccount(1000);\naccount.deposit(500); // 1500\nconsole.log(account.getBalance()); // 1500\nconsole.log(account.balance); // undefined! (Truly private)"
      },
      "commonMistakes": [
        "Assuming closures copy or snapshot the values at function creation time (they maintain live references to the variable binding).",
        "Using `var` inside a `for` loop with `setTimeout`, where all callbacks close over the same single mutating variable."
      ],
      "proTips": [
        "Demonstrate mastery by connecting closure directly to React: 'React's `useState` hook works precisely because the component function closes over the internal Fiber node state between re-renders.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ক্লোজার (Closure) হলো এমন একটি ব্যবস্থা যার মাধ্যমে কোনো ভেতরের ফাংশন তার বাইরের (প্যারেন্ট) ফাংশনের ভেরিয়েবলগুলোকে বাইরের ফাংশন শেষ হয়ে যাওয়ার পরেও মনে রাখতে এবং ব্যবহার করতে পারে।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে যখনই কোনো ফাংশন তৈরি হয়, তার সাথে তার লেক্সিক্যাল স্কোপের একটি বন্ধন তৈরি হয়—একে ক্লোজার বলে। যখন একটি প্যারেন্ট ফাংশনের ভেতর একটি চাইল্ড ফাংশন থাকে এবং চাইল্ড ফাংশনটি প্যারেন্টের কোনো ভেরিয়েবল ব্যবহার করে, তখন প্যারেন্ট ফাংশনটি রিটার্ন হয়ে কল স্ট্যাক থেকে মুছে গেলেও জাভাস্ক্রিপ্ট ইঞ্জিন চাইল্ড ফাংশনের রেফারেন্সের কারণে সেই ভেরিয়েবলগুলোকে হিপ মেমরিতে বাঁচিয়ে রাখে। ফলে পরবর্তীতে চাইল্ড ফাংশন ডাকলে সে পুরনো ভেরিয়েবল ঠিকই খুঁজে পায়। ডাটা এনক্যাপসুলেশন (প্রাইভেট ভেরিয়েবল তৈরি), ফ্যাক্টরি ফাংশন, কারিং এবং React-এর `useState` হুকের ভিত্তিই হলো এই ক্লোজার।",
      "deepDive": [
        "**মেমোরি রহস্য**: প্যারেন্ট ফাংশন শেষ হলেও ইঞ্জিন দেখে চাইল্ড ফাংশনের `[[Environment]]` রেফারেন্স আছে কি না; থাকলে গারবেজ কালেক্টর সেই মেমোরি ধ্বংস করে না।",
        "**লাইভ রেফারেন্স**: ক্লোজার ভেরিয়েবলের কোনো স্থির ছবি (snapshot) রাখে না, বরং লাইভ মেমোরি রেফারেন্স ধরে রাখে। তাই বাইরের ভেরিয়েবল বদলালে ভেতরের ফাংশন আপডেট মান পায়।",
        "**প্রাইভেট স্টেট তৈরি**: ক্লাসিক্যাল OOP-র মতো প্রাইভেট ভেরিয়েবল তৈরি করতে জাভাস্ক্রিপ্টে ক্লোজারই সেরা মাধ্যম।",
        "**মেমোরি লিক**: অপ্রয়োজনীয় বড় ক্লোজার দীর্ঘক্ষণ ধরে রাখলে মেমোরি ফাঁকা না হয়ে মেমোরি লিক হতে পারে।"
      ],
      "commonMistakes": [
        "`for` লুপে `var` ব্যবহার করে `setTimeout` কল করা, যার ফলে সব টাইমার একই শেষ ভ্যালু প্রিন্ট করে।"
      ],
      "proTips": [
        "ইন্টারভিউয়ারকে বলুন: 'React-এর `useState` কীভাবে প্রতিটি রেন্ডারের পরও স্টেট মনে রাখে? এর পেছনের মূল রহস্যই হলো Closure!'"
      ]
    }
  },
  {
    "id": "pa-d1-q6-null-vs-undefined",
    "questionNumber": 6,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between null and undefined?",
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
      "quickAnswer": "`undefined` is JavaScript's engine-default indicating an unassigned or uninitialized identifier, whereas `null` represents the intentional programmer-assigned absence of an object or value.",
      "interviewSpeech": "Both `null` and `undefined` represent falsy, empty states, but they carry distinct semantic meanings and runtime behaviors. `undefined` is JavaScript's default fallback: a declared variable without an assignment, a function without a `return` statement, or accessing an unassigned property of an object all yield `undefined`. It signifies 'uninitialized.' Conversely, `null` is an explicit assignment chosen by the developer to declare that a variable intentionally points to 'nothing' or an empty object reference. In type checking, `typeof undefined` is `'undefined'`, whereas `typeof null` is `'object'` due to an ancient JS implementation bug. In mathematical conversions, `Number(null)` evaluates to `0`, while `Number(undefined)` evaluates to `NaN`.",
      "deepDive": [
        "**Semantic Intent**: `undefined` = system default (variable not yet initialized); `null` = developer assigned (explicit absence of value).",
        "**Type Difference**: `typeof undefined === 'undefined'`, while `typeof null === 'object'` (the oldest unresolved legacy quirk in JS engine source).",
        "**Arithmetic Coercion**: `5 + null === 5` (null coerces to 0), but `5 + undefined === NaN` (undefined coerces to NaN).",
        "**Nullish Coalescing (`??`)**: Treats both `null` and `undefined` as nullish, but preserves falsy values like `0`, `false`, and `''`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Comparing null vs undefined Behaviors",
        "code": "let a;                // Automatically assigned undefined\nlet b = null;         // Explicitly set to null by developer\n\nconsole.log(typeof a); // \"undefined\"\nconsole.log(typeof b); // \"object\" (historical quirk)\n\n// Equality comparison:\nconsole.log(a == b);  // true  (both represent absence of value)\nconsole.log(a === b); // false (different types!)\n\n// Arithmetic conversion:\nconsole.log(10 + null);      // 10  (null becomes 0)\nconsole.log(10 + undefined); // NaN (undefined becomes NaN)\n\n// JSON Serialization:\nconst data = { x: undefined, y: null };\nconsole.log(JSON.stringify(data)); // '{\"y\":null}' (undefined is stripped!)"
      },
      "commonMistakes": [
        "Treating `null` and `undefined` as completely interchangeable in arithmetic operations (`Number(null) === 0`, `Number(undefined) === NaN`).",
        "Forgetting that `JSON.stringify()` strips properties with `undefined` values while retaining properties with `null`."
      ],
      "proTips": [
        "Explain the modern convention: 'Never assign `undefined` manually; if you need to indicate that a field or reference is deliberately empty, always assign `null`.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`undefined` মানে ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু এখনো মান দেওয়া হয়নি (সিস্টেম ডিফল্ট); আর `null` হলো ডেভেলপার দ্বারা সচেতনভাবে মান খালি ঘোষণা করা (Intentional empty)।",
      "interviewSpeech": "উভয়ই মান না থাকা নির্দেশ করলেও তাদের প্রেক্ষাপট ভিন্ন। `undefined` স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট ইঞ্জিন প্রদান করে—যেমন কোনো ভেরিয়েবল ডিক্লেয়ার করে মান না দিলে, ফাংশনে `return` না লিখলে, বা অবজেক্টের অবর্তমান প্রপার্টি খুঁজলে ডিফল্ট হিসেবে `undefined` আসে। আর `null` হলো ডেভেলপার নিজে ইচ্ছাকৃতভাবে সেট করে বোঝায় যে 'এখানে বর্তমানে কোনো মান বা অবজেক্ট রেফারেন্স নেই'। টাইপ চেকিংয়ে `typeof undefined` হলো 'undefined', আর `typeof null` হলো 'object'। গাণিতিক রূপান্তরে `Number(null)` হয় ০, কিন্তু `Number(undefined)` হয় `NaN`। এছাড়া `JSON.stringify` করার সময় `undefined` ফিল্ড স্বয়ংক্রিয়ভাবে মুছে যায়, কিন্তু `null` ফিল্ড বজায় থাকে।",
      "deepDive": [
        "**উদ্দেশ্যগত পার্থক্য**: `undefined` = সিস্টেম ডিফল্ট (মান দেওয়া হয়নি); `null` = প্রোগ্রামার নিজে খালি বুঝিয়েছেন।",
        "**টাইপ পার্থক্য**: `typeof undefined === 'undefined'`, কিন্তু `typeof null === 'object'` (ঐতিহাসিক ইঞ্জিন বাগের কারণে)।",
        "**গাণিতিক অপারেশন**: `10 + null = 10`, কিন্তু `10 + undefined = NaN`।",
        "**নালিশ কোলেসিং (`??`)**: `null` এবং `undefined` উভয়ের ক্ষেত্রেই ডিফল্ট ভ্যালু দেয়, কিন্তু `0` বা `false`-কে ভ্যালিড ধরে।"
      ],
      "commonMistakes": [
        "কোডে নিজে থেকে `x = undefined` অ্যাসাইন করা (কনভেনশন অনুযায়ী মান খালি বোঝাতে `null` অ্যাসাইন করা উচিত)।"
      ],
      "proTips": [
        "বলুন: 'API রেসপন্সে বা ডাটাবেজে ইচ্ছাকৃত অনুপস্থিত ডেটার জন্য `null` ব্যবহার করা ইন্ডাস্ট্রি বেস্ট প্র্যাকটিস, আর `undefined` জাভাস্ক্রিপ্টের অভ্যন্তরীণ আন-ইনিশিয়ালাইজড স্টেটের জন্য বরাদ্দ রাখা ভালো।'"
      ]
    }
  },
  {
    "id": "pa-d1-q7-arrow-functions",
    "questionNumber": 7,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "Arrow functions provide a concise lambda syntax and lexical `this` binding. Unlike regular functions, they lack their own `this`, `arguments`, `super`, or `new.target` and cannot act as constructors.",
      "interviewSpeech": "Introduced in ES6, arrow functions (`() => {}`) provide syntactic conciseness alongside four profound architectural differences compared to regular functions: 1) **Lexical `this`**: Regular functions bind `this` dynamically depending on how the function is invoked at runtime. Arrow functions do not have their own `this`; they inherit `this` directly from the enclosing lexical scope where they were defined. 2) **No `arguments` object**: Arrow functions do not possess the legacy `arguments` identifier; you must use modern rest parameters `(...args)` instead. 3) **Cannot be Constructors**: Arrow functions lack the internal `[[Construct]]` method and do not have a `.prototype` property, so calling `new ArrowFunc()` throws a `TypeError`. 4) **No duplicate named parameters**: In non-strict mode, regular functions allow duplicate parameter names, whereas arrow functions strictly forbid them.",
      "deepDive": [
        "**Lexical `this` vs Dynamic `this`**: Regular functions bind `this` based on runtime caller; arrow functions capture `this` from enclosing lexical scope.",
        "**No Prototype & No Constructor**: Arrow functions lack `.prototype` and internal `[[Construct]]` method, saving memory.",
        "**No `arguments` Object**: Accessing `arguments` inside an arrow function refers to the outer function's arguments. Use `...args` rest parameters instead."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Regular Function vs Arrow Function this Context",
        "code": "const counter = {\n  count: 0,\n  start() {\n    // Arrow function preserves lexical `this` pointing to `counter`:\n    setInterval(() => {\n      this.count++;\n      console.log(this.count);\n    }, 1000);\n  }\n};\n\n// regular function vs arrow constructor:\nfunction RegularFn() {}\nconst r = new RegularFn(); // Valid\n\nconst ArrowFn = () => {};\n// const a = new ArrowFn(); // TypeError: ArrowFn is not a constructor"
      },
      "commonMistakes": [
        "Using arrow functions as object methods where `this` is expected to point to the parent object.",
        "Attempting to invoke an arrow function with `new`."
      ],
      "proTips": [
        "State the rule: 'Use arrow functions for callbacks and preserving `this`; use standard functions/methods when defining prototype methods or object properties needing dynamic `this`.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Arrow Functions সংক্ষিপ্ত সিনট্যাক্স দেয় এবং এদের নিজস্ব `this` নেই (বাইরের লেক্সিক্যাল স্কোপ থেকে `this` ধার করে), এদের constructor হিসেবে ব্যবহার করা যায় না এবং নিজস্ব `arguments` অবজেক্ট থাকে না।",
      "interviewSpeech": "ES6-এ আসা অ্যারো ফাংশনের মূল সুবিধা হলো এর সংক্ষিপ্ত রূপ এবং লেক্সিক্যাল `this`। সাধারণ রেগুলার ফাংশনে `this` নির্ভর করে ফাংশনটি *কীভাবে কল করা হয়েছে* তার ওপর (ডাইনামিক বাইন্ডিং)। কিন্তু অ্যারো ফাংশনের নিজস্ব কোনো `this` থাকে না—এটি তার চারপাশের প্যারেন্ট লেক্সিক্যাল স্কোপ থেকে `this` সরাসরি গ্রহণ করে। ফলে ক্লাসের ভেতরে বা `setTimeout`-এ পুরনো `bind(this)` বা `const self = this` লেখার দিন শেষ হয়েছে। দ্বিতীয়ত, অ্যারো ফাংশনে কোনো `arguments` অবজেক্ট থাকে না, এর বদলে আধুনিক রেস্ট প্যারামিটার (`...args`) ব্যবহার করতে হয়। তৃতীয়ত, অ্যারো ফাংশনের কোনো `.prototype` থাকে না, তাই এদের `new` দিয়ে কনস্ট্রাক্টর হিসেবে কল করা যায় না। চতুর্থত, অবজেক্টের মেথড হিসেবে অ্যারো ফাংশন ব্যবহার করলে `this` ওই অবজেক্টকে পয়েন্ট করে না।",
      "deepDive": [
        "**লেক্সিক্যাল `this`**: অ্যারো ফাংশন যেখানে ডিক্লেয়ার হয়, সেখানকার `this` আজীবন ধরে রাখে।",
        "**কনস্ট্রাক্টর নয়**: অ্যারো ফাংশনে `.prototype` না থাকায় একে `new` দিয়ে কল করা যায় না।",
        "**`arguments` নেই**: অ্যারো ফাংশনে কোনো `arguments` কিওয়ার্ড থাকে না, এর বদলে `...args` ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "অবজেক্টের মেথড বানাতে অ্যারো ফাংশন ব্যবহার করা (যার ফলে `this` অবজেক্টকে না পেয়ে গ্লোবালকে পায়)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'কলব্যাক ও ইভেন্ট হ্যান্ডলারে অ্যারো ফাংশন বেস্ট, কিন্তু অবজেক্ট মেথডে রেগুলার ফাংশন ব্যবহার্য।'"
      ]
    }
  },
  {
    "id": "pa-d1-q8-scope-chain",
    "questionNumber": 8,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "The scope chain is the hierarchical sequence of nested Lexical Environments that the JavaScript engine traverses outward from local to global to resolve variable identifiers.",
      "interviewSpeech": "In JavaScript, whenever a variable is evaluated, the engine attempts to resolve its identifier through the Scope Chain. Every Execution Context possesses a reference to its outer environment (`[[OuterEnv]]`), creating a linked hierarchy based on where code was written physically in the source file—known as Lexical Scoping. The lookup process begins in the currently active Local Scope. If the identifier is found, lookup terminates immediately (shadowing any outer variables). If not found, the engine traverses one level up to the parent enclosing function or block scope. This outward traversal repeats iteratively until reaching the Global Environment. If the identifier cannot be resolved even in the global scope, JavaScript throws a `ReferenceError: [variable] is not defined` (or implicitly creates a global property in non-strict mode assignment).",
      "deepDive": [
        "**Lexical Scoping (Static Scope)**: Scope resolution is determined at author time by where functions are written in the source code, not where they are invoked.",
        "**Outer Environment Record Link**: Each Lexical Environment holds a reference `[[OuterEnv]]` pointing to its parent, creating a linked-list hierarchy terminating at the Global Environment.",
        "**Shadowing**: An identifier declared in an inner scope obscures an identically-named identifier in an outer scope."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Scope Chain Lookup Traversing Outward",
        "code": "const globalVar = \"Global\";\n\nfunction outer() {\n  const outerVar = \"Outer\";\n  \n  function inner() {\n    const innerVar = \"Inner\";\n    // Resolves innerVar locally, outerVar from parent, globalVar from global:\n    console.log(innerVar); // \"Inner\"\n    console.log(outerVar); // \"Outer\"\n    console.log(globalVar); // \"Global\"\n    // console.log(unknownVar); // ReferenceError: unknownVar is not defined\n  }\n  inner();\n}\nouter();"
      },
      "commonMistakes": [
        "Assuming the scope chain looks downward into child scopes (it is strictly a one-way upward/outward lookup).",
        "Confusing lexical scope (where functions are defined) with dynamic scope (where functions are called)."
      ],
      "proTips": [
        "Mention Lexical Environment: 'Scope chain resolution is purely static; JavaScript checks `[[OuterEnv]]` links in the Lexical Environment hierarchy until it hits the Global Scope.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Scope Chain হলো নেস্টেড লেক্সিক্যাল স্কোপের একটি ধারাবাহিক শিকল, যার মাধ্যমে জাভাস্ক্রিপ্ট ইঞ্জিন লোকাল স্কোপ থেকে শুরু করে ধাপে ধাপে বাইরের প্যারেন্ট স্কোপ এবং গ্লোবাল স্কোপ পর্যন্ত ভেরিয়েবল খুঁজে বেড়ায়।",
      "interviewSpeech": "জাভাস্ক্রিপ্টে যখন কোনো ভেরিয়েবল খোঁজা হয়, ইঞ্জিন প্রথমে দেখে বর্তমান লোকাল ফাংশনে সেটি আছে কি না। না পেলে সে তার বাইরের প্যারেন্ট ফাংশনের স্কোপে খোঁজে, সেখানেও না পেলে তার বাইরের স্কোপে—এভাবে খুঁজতে খুঁজতে একদম গ্লোবাল স্কোপ পর্যন্ত পৌঁছায়। স্কোপের এই ধারাবাহিক শিকলকেই Scope Chain বলে। যদি গ্লোবাল স্কোপেও ভেরিয়েবলটি না পাওয়া যায়, তবে ইঞ্জিন `ReferenceError` প্রদর্শন করে।",
      "deepDive": [
        "**লেক্সিক্যাল স্কোপিং**: ফাংশনটি কোডের কোথায় লেখা হয়েছে তার ওপর ভিত্তি করে স্কোপ তৈরি হয়, কোথা থেকে কল করা হয়েছে তার ওপর নয়।",
        "**একমুখী সন্ধান**: ইঞ্জিন লোকাল থেকে বাইরের দিকে ভেরিয়েবল খোঁজে, বাইরে থেকে ভেতরের স্কোপে কখনোই ঢুকতে পারে না।",
        "**ভ্যারিয়েবল শ্যাডোয়িং**: ভেতরের স্কোপে একই নামের ভেরিয়েবল থাকলে তা বাইরের ভেরিয়েবলকে আড়াল (shadow) করে দেয়।"
      ],
      "commonMistakes": [
        "মনে করা যে প্যারেন্ট ফাংশন তার চাইল্ড ফাংশনের ভেতরের ভেরিয়েবল পড়তে পারে (এটি কঠোরভাবে নিষিদ্ধ)।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Lexical Scoping' এবং 'Static vs Dynamic Scope'-এর পার্থক্য উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "pa-d1-q9-temporal-dead-zone",
    "questionNumber": 9,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "Explain the concept of the temporal dead zone.",
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
      "quickAnswer": "The Temporal Dead Zone (TDZ) is the runtime state within a block scope from its entry point up to the actual line of a `let`, `const`, or `class` declaration, during which accessing the variable throws a ReferenceError.",
      "interviewSpeech": "Although variables declared with `let` and `const` are hoisted during the memory creation phase of an execution context, they are not initialized with a default value like `var` is with `undefined`. The Temporal Dead Zone represents the temporal window from the start of the enclosing `{}` block until the JavaScript engine executes the line of declaration where the variable is assigned. If code attempts to read, write, or query (including `typeof`) that variable while execution is inside the TDZ, the engine throws an immediate `ReferenceError: Cannot access 'variable' before initialization`. The TDZ was intentionally engineered in ES6 to prevent silent bugs that occur when reading unassigned variables before their intended point of declaration.",
      "deepDive": [
        "**Proof of Hoisting**: If `let` were not hoisted, a block-scoped `let x` would fall back to an outer `var x` instead of throwing `ReferenceError`.",
        "**Temporal, Not Spatial**: The TDZ is based on execution time, not just physical file lines. A function referencing `let x` declared later is fine if called AFTER the declaration executes.",
        "**`typeof` is Not Safe in TDZ**: Unlike undeclared variables where `typeof foo === 'undefined'`, accessing a TDZ variable with `typeof` throws a `ReferenceError`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Temporal Dead Zone in Action",
        "code": "// 1. Proof that let is hoisted into TDZ:\nlet value = \"outer\";\n{\n  // Accessing 'value' here throws ReferenceError because the inner 'value' is hoisted into TDZ:\n  // console.log(value); // ReferenceError: Cannot access 'value' before initialization\n  let value = \"inner\";\n  console.log(value); // \"inner\"\n}\n\n// 2. TDZ is temporal (time-based):\nfunction test() {\n  const callMe = () => console.log(name); // Valid declaration\n  // callMe(); // Throws ReferenceError if called here!\n  let name = \"Shuvo\";\n  callMe(); // Outputs \"Shuvo\" because declaration has executed!\n}\ntest();"
      },
      "commonMistakes": [
        "Claiming `let` and `const` do not hoist (they are hoisted into TDZ).",
        "Assuming `typeof` is always safe (inside TDZ, `typeof x` throws `ReferenceError`)."
      ],
      "proTips": [
        "Explain the temporal nature: 'TDZ is temporal, meaning it depends on the order of execution in time, not strictly source line position.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ব্লক স্কোপের শুরু থেকে `let` বা `const` ডিক্লেয়ারেশনের লাইন এক্সিকিউট হওয়ার মধ্যবর্তী সময়কে TDZ বলে, এই সময়ে ভেরিয়েবল অ্যাক্সেস করলে ReferenceError হয়।",
      "interviewSpeech": "যখন একটি ব্লক শুরু হয়, তখন `let` এবং `const` ভেরিয়েবলগুলোর মেমোরি হোইস্টিং হলেও তাদের কোনো মান দিয়ে ইনিশিয়ালাইজ করা হয় না। কোড রান হতে হতে যতক্ষণ না ঠিক সেই ডিক্লেয়ারেশনের লাইনে পৌঁছায়, ততক্ষণ পর্যন্ত ভেরিয়েবলটি একটি নিষিদ্ধ জোনে থাকে—যাকে 'Temporal Dead Zone (TDZ)' বলে। এই জোনের মধ্যে ভেরিয়েবলটি পড়তে বা লিখতে গেলে জাভাস্ক্রিপ্ট `ReferenceError` দেয়। এটি `var`-এর মতো ভুলবশত `undefined` পাওয়ার নীরব বাগ প্রতিরোধ করার জন্যই ES6-এ ডিজাইন করা হয়েছে।",
      "deepDive": [
        "**হোইস্টিংয়ের প্রমাণ**: `let` হোইস্ট না হলে ভেতরের ব্লকে `let x` থাকলে বাইরের `x` পাওয়ার কথা ছিল, কিন্তু তা না পেয়ে ReferenceError হওয়াই প্রমাণ করে যে `let` হোইস্ট হয়েছে।",
        "**সময়ের ওপর নির্ভরশীল (Temporal)**: ডিক্লেয়ারেশন কোডের নিচে থাকলেও যদি ফাংশন ডিক্লেয়ারেশনের পরে রান হয়, তবে এরর দেয় না।",
        "**`typeof` নিরাপদ নয়**: সাধারণ আন-ডিক্লেয়ার্ড ভেরিয়েবলে `typeof` 'undefined' দিলেও TDZ ভেরিয়েবলে `typeof` রান করলে ক্র্যাশ করে।"
      ],
      "commonMistakes": [
        "`let` ও `const` হোইস্ট হয় না—এমন ভুল কথা বলা।"
      ],
      "proTips": [
        "বলুন: 'TDZ মূলত লাইনের অবস্থান নয়, বরং এক্সিকিউশন টাইমের একটি বিশেষ অবস্থা।'"
      ]
    }
  },
  {
    "id": "pa-d1-q10-pure-functions",
    "questionNumber": 10,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is a pure function? Give an example.",
    "banglaQuestion": "Pure Function কী? বাস্তব উদাহরণসহ বুঝিয়ে বলুন।",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Functional Programming",
      "Pure Functions",
      "Side Effects",
      "React"
    ],
    "english": {
      "quickAnswer": "A pure function is a deterministic function that always produces the exact same return value for identical arguments and produces zero observable side effects.",
      "interviewSpeech": "In functional programming and modern frontend architecture, a function is deemed 'pure' if and only if it satisfies two conditions: 1) **Determinism**: Given the exact same set of input arguments, it will always return the identical result. It has no dependency on mutable external state, random number generators (`Math.random()`), or system clocks (`Date.now()`). 2) **Zero Side Effects**: Executing the function produces no observable mutation outside its local execution scope—it does not mutate its arguments, modify global variables, alter the DOM, write to `localStorage`, or make network requests. Pure functions are predictable, extraordinarily easy to unit test, safe for memoization caching, and form the core principle behind React components and Redux reducers.",
      "deepDive": [
        "**Referential Transparency**: An expression or pure function call can be replaced with its evaluated result without altering the program's behavior.",
        "**Immutability Preservation**: Instead of `arr.push(x)` or `obj.key = val`, pure functions return `[...arr, x]` and `{ ...obj, key: val }`.",
        "**Concurrency & Caching**: Pure functions can be safely memoized (`useMemo`) and run in parallel worker threads without race conditions."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Pure vs Impure Function Comparison",
        "code": "// PURE FUNCTION: Deterministic, zero side-effects\nconst addTax = (price, taxRate) => price + price * taxRate;\nconsole.log(addTax(100, 0.15)); // Always 115\n\n// IMPURE FUNCTION 1: Mutates external variable (Side Effect)\nlet cartTotal = 0;\nfunction addToCart(price) {\n  cartTotal += price; // Mutates external state!\n  return cartTotal;\n}\n\n// IMPURE FUNCTION 2: Non-deterministic (Depends on system clock)\nfunction getTimestampedId(prefix) {\n  return `${prefix}_${Date.now()}`; // Output differs every millisecond\n}"
      },
      "commonMistakes": [
        "Thinking `console.log()` inside a function keeps it pure (I/O operations are technically side effects).",
        "Mutating an array passed as parameter via `.splice()` or `.sort()` instead of creating a shallow clone."
      ],
      "proTips": [
        "Connect to React: 'React components and Redux reducers must be pure functions so that reconciliation and state snapshots remain completely deterministic.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Pure Function হলো এমন একটি ফাংশন যা নির্দিষ্ট ইনপুটের জন্য সর্বদা একই আউটপুট দেয় এবং এর বাইরের কোনো ভেরিয়েবল বা সিস্টেমের ওপর কোনো পার্শ্বপ্রতিক্রিয়া (Side Effect) থাকে না।",
      "interviewSpeech": "একটি পিওর ফাংশনের দুটি প্রধান বৈশিষ্ট্য থাকে: ১) **ডিটারমিনিজম**: একই আর্গুমেন্ট দিলে এটি সবসময় একই রেজাল্ট রিটার্ন করবে—বাইরের কোনো পরিবর্তনশীল ভেরিয়েবল বা র‍্যান্ডম মানের ওপর নির্ভর করবে না। ২) **নো সাইড-ইফেক্ট**: এটি বাইরের কোনো গ্লোবাল ভেরিয়েবল বদলাবে না, প্যারামিটারে পাঠানো অবজেক্ট মিউটেট করবে না, কোনো কনসোল লগ বা API রিকোয়েস্ট পাঠাবে না। পিওর ফাংশন টেস্ট করা সহজ, মেমোইজেশন দিয়ে ক্যাশ করা যায় এবং React কম্পোনেন্ট ও Redux রিডিউসারের মূল দর্শনই হলো এই Pure Function।",
      "deepDive": [
        "**রেফারেন্সিয়াল ট্রান্সপারেন্সি**: পিওর ফাংশনের জায়গায় তার সরাসরি আউটপুট বসিয়ে দিলেও প্রোগ্রামের আচরণে কোনো পরিবর্তন আসে না।",
        "**ইমিউটেবল ডেটা**: প্যারামিটারে পাওয়া অবজেক্ট বা অ্যারে সরাসরি মিউটেট না করে নতুন কপি রিটার্ন করা পিওর ফাংশনের প্রধান শর্ত।",
        "**ক্যাশিং সুবিধা**: পিওর ফাংশনের ফলাফল মেমোইজেশন (`useMemo`) দিয়ে সহজে ক্যাশ করা যায়।"
      ],
      "commonMistakes": [
        "ফাংশনে `console.log()` থাকা সত্ত্বেও তাকে সম্পূর্ণ পিওর দাবি করা (কনসোল লগ হলো ব্রাউজার I/O সাইড ইফেক্ট)।"
      ],
      "proTips": [
        "বলুন: 'Redux Reducer এবং React Component পিওর ফাংশন হিসেবে তৈরি করা হয় যাতে স্টেট প্রিডিক্টেবল থাকে।'"
      ]
    }
  },
  {
    "id": "pa-d1-q11-function-declaration-vs-expression",
    "questionNumber": 11,
    "module": "Day 1 — JavaScript Fundamentals I",
    "topic": "Variables, Data Types, Functions & Scope",
    "question": "What is the difference between function declaration and function expression?",
    "banglaQuestion": "Function Declaration এবং Function Expression-এর মধ্যে পার্থক্য কী?",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "JavaScript",
      "Functions",
      "Hoisting",
      "Syntax"
    ],
    "english": {
      "quickAnswer": "Function declarations are standalone statements hoisted completely with their implementation body, whereas function expressions are assigned to variables and follow variable hoisting rules (cannot be invoked before their assignment).",
      "interviewSpeech": "The distinction lies in syntax, hoisting lifecycle, and evaluation timing. A **Function Declaration** is a standalone statement beginning with the `function` keyword (e.g., `function add(a, b) { return a + b; }`). Because it is hoisted completely during the Creation Phase, it can be called anywhere in its enclosing scope—even above its definition line. A **Function Expression**, by contrast, creates a function as part of an assignment expression, typically bound to a variable identifier (e.g., `const add = function(a, b) { ... }` or an arrow function). It is evaluated at runtime when execution reaches that line. If assigned to `let` or `const`, invoking it prior to the declaration throws a `ReferenceError` due to the TDZ; if declared with `var`, it throws a `TypeError: add is not a function` because the variable holds `undefined`.",
      "deepDive": [
        "**Hoisting**: Declarations are loaded into the Variable Environment during the Creation Phase. Expressions are created when the execution reaches the assignment statement.",
        "**Block Scope Behavior**: In strict mode, function declarations inside an `if` block are scoped strictly to that block.",
        "**Named Function Expressions**: `const fn = function factorial(n) { ... }` allows `factorial` to be used for clean recursion and readable stack traces without leaking to outer scope."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Declaration vs Expression Hoisting",
        "code": "// 1. Function Declaration: Fully hoisted, callable here\nconsole.log(declared(2, 3)); // 5\nfunction declared(a, b) {\n  return a + b;\n}\n\n// 2. Function Expression via const: Hoisted into TDZ\n// console.log(expressed(2, 3)); // ReferenceError: Cannot access 'expressed' before initialization\nconst expressed = function(a, b) {\n  return a + b;\n};\n\n// 3. Function Expression via var:\n// console.log(varFunc()); // TypeError: varFunc is not a function (it is currently undefined!)\nvar varFunc = function() {\n  return \"Hello\";\n};"
      },
      "commonMistakes": [
        "Expecting `var myFunc = function() {}` to give `ReferenceError` when called early (it gives `TypeError: myFunc is not a function` because `myFunc` is `undefined`)."
      ],
      "proTips": [
        "Explain code organization: 'Use function declarations for top-level functions that should be accessible throughout the module; use expressions/arrow functions for inline callbacks and closures.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Function Declaration সম্পূর্ণ বডিসহ হোইস্টেড হয় তাই কোডে লেখার আগেই কল করা যায়; আর Function Expression ভেরিয়েবলে অ্যাসাইন থাকে বলে ডিক্লেয়ার করার আগে কল করা যায় না।",
      "interviewSpeech": "মূল পার্থক্য হোইস্টিং এবং সিনট্যাক্সে। **Function Declaration** সরাসরি `function myFunc() {}` স্টেটমেন্ট দিয়ে শুরু হয়। জাভাস্ক্রিপ্ট ইঞ্জিন এটিকে পুরো বডিসহ হোইস্ট করে ফেলে, তাই কোডে ফাংশন লেখার আগেই তাকে কল করা যায়। আর **Function Expression** হলো একটি ফাংশনকে কোনো ভেরিয়েবলের মধ্যে অ্যাসাইন করে রাখা (যেমন: `const myFunc = function() {}` বা অ্যারো ফাংশন)। যেহেতু এটি ভেরিয়েবলে থাকে, তাই এটি ভেরিয়েবলের হোইস্টিং নিয়ম মেনে চলে—ডিক্লেয়ারেশনের পূর্বে কল করলে এটি ReferenceError দেয়।",
      "deepDive": [
        "**মেমোরি লোডিং**: Creation Phase-এ ডিক্লেয়ারেশন পুরো বডিসহ মেমরিতে লোড হয়; এক্সপ্রেশন কেবল লাইন এক্সিকিউশনের সময় মান পায়।",
        "**টাইপ এরর বনাম রেফারেন্স এরর**: `var`-এ রাখা এক্সপ্রেশন আগে কল করলে `TypeError` দেয়, কিন্তু `const`-এ রাখা এক্সপ্রেশন আগে কল করলে `ReferenceError` দেয়।"
      ],
      "commonMistakes": [
        "ফাংশন এক্সপ্রেশনকে ডিক্লেয়ারেশনের মতো আগে কল করা।"
      ],
      "proTips": [
        "বলুন: 'মডিউলের মূল ইউটিলিটি ফাংশন ডিক্লেয়ারেশন দিয়ে এবং শর্তসাপেক্ষ বা কলব্যাক ফাংশন এক্সপ্রেশন দিয়ে লেখা ভালো প্র্যাকটিস।'"
      ]
    }
  },
  {
    "id": "pa-d1-q12-default-parameters",
    "questionNumber": 12,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "Default parameters allow named function parameters to be initialized with default values if no argument or `undefined` is passed during invocation.",
      "interviewSpeech": "Introduced in ES6, default parameters allow developers to specify fallback values directly in the function signature (e.g., `function greet(name = 'Candidate')`). The critical rule is that the default value is triggered *only* when the argument is omitted or explicitly passed as `undefined`. If you pass falsy values like `null`, `false`, `0`, or `''`, the default parameter will NOT trigger because they are valid runtime values. Furthermore, default parameters in JavaScript are evaluated at call time (not at parse time), meaning a new expression or function call is evaluated anew each time the function is invoked.",
      "deepDive": [
        "**Evaluated at Call Time**: A new instance of the default expression is evaluated each time the function is called, not once at module load.",
        "**Parameter TDZ**: Earlier parameters are in scope for later default expressions (e.g. `function area(w, h = w * 2)`), but later parameters cannot be referenced by earlier ones.",
        "**Strict `undefined` Trigger**: Passing `null`, `false`, `0`, or `''` explicitly suppresses the default value."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Default Parameter Nuances and Parameter Scope",
        "code": "// Evaluated at call time:\nconst getDefaultId = () => Math.floor(Math.random() * 1000);\nfunction createUser(name, id = getDefaultId()) {\n  return { name, id };\n}\nconsole.log(createUser(\"Rahim\")); // id is randomly generated\nconsole.log(createUser(\"Karim\")); // id is different!\n\n// null vs undefined trigger:\nfunction test(param = \"DEFAULT\") {\n  console.log(param);\n}\ntest(undefined); // \"DEFAULT\" (triggers default)\ntest();          // \"DEFAULT\" (triggers default)\ntest(null);       // null      (null is a valid value, default ignored!)\ntest(\"\");         // \"\"        (empty string is preserved)"
      },
      "commonMistakes": [
        "Expecting `func(null)` to use the default parameter (it only triggers on `undefined`).",
        "Writing circular default parameters like `function bad(a = b, b = 1)` which throws `ReferenceError` due to parameter TDZ."
      ],
      "proTips": [
        "Highlight Parameter TDZ: 'Default parameters possess their own intermediate parameter scope. Later parameters can reference earlier parameters, but earlier ones cannot reference later ones due to parameter TDZ.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Default Parameters ফাংশন কলের সময় কোনো আর্গুমেন্ট না দিলে বা `undefined` পাস করলে প্যারামিটারের জন্য একটি ডিফল্ট ফলব্যাক মান নির্ধারণ করে দেয়।",
      "interviewSpeech": "ES6-এ আসা ডিফল্ট প্যারামিটার দিয়ে আমরা ফাংশন সিগনেচারেই সরাসরি ফলব্যাক মান ঠিক করে দিতে পারি (যেমন: `function greet(name = 'Guest')`)। যদি ফাংশন ডাকার সময় কোনো আর্গুমেন্ট না দেওয়া হয় বা স্পষ্টভাবে `undefined` পাঠানো হয়, কেবল তখনই ডিফল্ট মান কাজ করে। মনে রাখবেন, যদি কেউ `null`, `0` বা `''` পাঠায়, তখন কিন্তু ডিফল্ট মান বসবে না কারণ এগুলো ভ্যালিড ভ্যালু। ডিফল্ট প্যারামিটারের ভেতর যেকোনো এক্সপ্রেশন বা অন্য ফাংশন কলও রাখা যায়।",
      "deepDive": [
        "**কল টাইমে এক্সিকিউশন**: ডিফল্ট প্যারামিটারে কোনো ফাংশন দিলে তা প্রতিবার ফাংশন কলের সময় ফ্রেশ রান হয়।",
        "**প্যারামিটার TDZ**: আগের প্যারামিটার পরের ডিফল্ট প্যারামিটারে ব্যবহার করা যায় (যেমন `function(x, y = x * 2)`), কিন্তু উল্টোটা করা যায় না।",
        "**কঠোর `undefined` চেক**: শুধুমাত্র `undefined` বা কোনো মান না দিলেই ডিফল্ট মান কাজ করে; `null`, `0` বা `false` দিলে ডিফল্ট মান বসে না।"
      ],
      "commonMistakes": [
        "`null` পাঠালে ডিফল্ট মান কাজ করবে বলে ভুল ধারণা রাখা।"
      ],
      "proTips": [
        "বলুন: '`param = undefined` বা প্যারামিটার বাদ দিলে ডিফল্ট ভ্যালু কাজ করে, কিন্তু `param = null` পাঠালে জাভাস্ক্রিপ্ট `null`-কেই চূড়ান্ত মান হিসেবে গ্রহণ করে।'"
      ]
    }
  },
  {
    "id": "pa-d1-q13-typeof-operator",
    "questionNumber": 13,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "`typeof` is a unary operator returning a string indicating operand type. It has 8 possible outputs: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function', and 'object'.",
      "interviewSpeech": "The `typeof` unary operator returns a lowercase string indicating the evaluated type of an unevaluated operand. According to the ECMAScript specification, it can return one of exactly eight possible string values: `'undefined'`, `'boolean'`, `'number'`, `'bigint'`, `'string'`, `'symbol'`, `'function'`, and `'object'`. There are three famous quirks every senior candidate must know: 1) `typeof null` returns `'object'` due to an original 1995 JS engine type-tagging bug; 2) Arrays, Objects, Dates, and Regex all return `'object'` (use `Array.isArray()` for arrays); and 3) Functions return `'function'`, even though functions inherit from `Object.prototype`.",
      "deepDive": [
        "**The 8 Return Values**: `'undefined'`, `'boolean'`, `'number'`, `'bigint'`, `'string'`, `'symbol'`, `'function'`, and `'object'`.",
        "**The `typeof null` Bug**: Unfixed since 1995 because fixing it would break thousands of legacy websites that check `typeof x === 'object'`.",
        "**How to reliably test types**: Use `Array.isArray()` for arrays, `val === null` for null, and `Object.prototype.toString.call(val)` for exhaustive type detection."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "typeof Returns and Robust Type Checking",
        "code": "// All 8 returns:\nconsole.log(typeof undefined);      // \"undefined\"\nconsole.log(typeof true);           // \"boolean\"\nconsole.log(typeof 42);             // \"number\"\nconsole.log(typeof 42n);            // \"bigint\"\nconsole.log(typeof \"text\");         // \"string\"\nconsole.log(typeof Symbol(\"id\"));  // \"symbol\"\nconsole.log(typeof (() => {}));     // \"function\"\nconsole.log(typeof {});             // \"object\"\n\n// Noteworthy quirks:\nconsole.log(typeof null);           // \"object\" (bug!)\nconsole.log(typeof [1, 2, 3]);       // \"object\"\n\n// Accurate checking utility:\nfunction getRealType(val) {\n  if (val === null) return \"null\";\n  if (Array.isArray(val)) return \"array\";\n  return typeof val;\n}"
      },
      "commonMistakes": [
        "Using `typeof` to verify arrays (it returns `'object'`).",
        "Believing `typeof NaN` is something other than `'number'` (`typeof NaN === 'number'`)."
      ],
      "proTips": [
        "Demonstrate senior acumen: 'To detect the exact native class of any object, use `Object.prototype.toString.call(val)` which returns strings like `[object Date]` or `[object RegExp]`.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`typeof` হলো একটি অপারেটর যা অপারেন্ডের ডেটা টাইপ নির্দেশক একটি স্ট্রিং রিটার্ন করে: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function' এবং 'object'।",
      "interviewSpeech": "`typeof` হলো এমন একটি অপারেটর যা কোনো ভেরিয়েবলের ধরন যাচাই করতে ব্যবহৃত হয়। এটি মোট ৮ ধরনের স্ট্রিং রিটার্ন করতে পারে। এর মধ্যে দুটি বিশেষ বিষয় মনে রাখতে হয়: প্রথমত, `typeof null` রিটার্ন করে `'object'`, যা জাভাস্ক্রিপ্টের প্রথম ভার্সনের একটি সুপরিচিত ঐতিহাসিক বাগ। দ্বিতীয়ত, সাধারণ অবজেক্ট এবং অ্যারে উভয়ের জন্যই এটি `'object'` রিটার্ন করে (তাই অ্যারে চেক করতে `Array.isArray()` ব্যবহার করতে হয়)। আর ফাংশনের ক্ষেত্রে এটি সরাসরি `'function'` রিটার্ন করে।",
      "deepDive": [
        "**মোট ৮টি রিটার্ন টাইপ**: 'undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function', 'object'।",
        "**`typeof NaN`**: `NaN` মানে Not-a-Number হলেও `typeof NaN` রিটার্ন করে 'number'।",
        "**সঠিক টাইপ চেকিং**: অ্যারের জন্য `Array.isArray()`, নালের জন্য `x === null` এবং যেকোনো অবজেক্টের গভীর টাইপ জানতে `Object.prototype.toString.call(x)` ব্যবহার করা উচিত।"
      ],
      "commonMistakes": [
        "অ্যারে চেক করতে `typeof` ব্যবহার করা (অ্যারে অবজেক্ট রিটার্ন করে)।"
      ],
      "proTips": [
        "বলুন: '`typeof null === 'object'` একটি ঐতিহাসিক বাগ এবং `typeof NaN === 'number'`।'"
      ]
    }
  },
  {
    "id": "pa-d1-q14-type-coercion",
    "questionNumber": 14,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "Type coercion is the conversion of a value from one data type to another, either implicitly by the JS engine during an operation or explicitly by the developer.",
      "interviewSpeech": "Type coercion represents how JavaScript reconciles operations across differing data types. It takes two forms: **Explicit Coercion** (type casting purposefully written by the programmer, e.g., `Number('123')` or `Boolean(val)`), and **Implicit Coercion** (behind-the-scenes conversion performed automatically by the engine). The addition operator `+` exhibits string preference: if either operand is a string, the other is coerced to a string and concatenated (`'10' + 5 === '105'`). However, numeric operators like `-`, `*`, `/`, and `%` strictly coerce strings to numbers (`'10' - 5 === 5`). In conditional evaluations (`if`, `while`), values are implicitly coerced to boolean based on whether they are truthy or falsy.",
      "deepDive": [
        "**The `+` Operator Ambiguity**: If either operand is a string, string concatenation takes priority. Otherwise, numeric addition is performed.",
        "**Implicit Boolean Coercion**: The only 8 falsy values in JS: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, and `NaN`. All other values (including `[]` and `{}`) are truthy.",
        "**ToPrimitive Protocol**: When comparing objects to primitives, JavaScript calls `Symbol.toPrimitive`, falling back to `valueOf()` and `toString()`."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Type Coercion Matrix and Edge Cases",
        "code": "// 1. String vs Numeric coercion:\nconsole.log(\"5\" + 2);   // \"52\" (string concatenation)\nconsole.log(\"5\" - 2);   // 3    (numeric subtraction)\nconsole.log(\"5\" * \"2\"); // 10   (numeric multiplication)\nconsole.log(true + 1);  // 2    (true coerced to 1)\nconsole.log(false + 1); // 1    (false coerced to 0)\n\n// 2. Truthy & Falsy gotchas:\nconsole.log(Boolean([])); // true (empty array is truthy!)\nconsole.log(Boolean({})); // true (empty object is truthy!)\n\n// 3. Loose equality coercion chain:\nconsole.log([] == false); // true! ([] -> '' -> 0 == 0)"
      },
      "commonMistakes": [
        "Assuming `[]` or `{}` are falsy because they are empty (all objects and arrays are truthy in JavaScript).",
        "Expecting `+` to always perform arithmetic."
      ],
      "proTips": [
        "Explain ToPrimitive: 'When an object encounters an operator, JS internally invokes the `ToPrimitive` algorithm, consulting `[Symbol.toPrimitive]`, `valueOf()`, and `toString()` to resolve a primitive representation.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Type Coercion হলো বিভিন্ন অপারেশনের সময় জাভাস্ক্রিপ্ট ইঞ্জিন কর্তৃক স্বয়ংক্রিয়ভাবে বা স্পষ্টভাবে এক ডেটা টাইপকে অন্য ডেটা টাইপে রূপান্তর করার প্রক্রিয়া।",
      "interviewSpeech": "টাইপ কোয়েরশন দুই প্রকার: **এক্সপ্লিসিট (Explicit)**, যা ডেভেলপার নিজে করে (যেমন `Number('10')`), এবং **ইমপ্লিসিট (Implicit)**, যা জাভাস্ক্রিপ্ট নিজে নিজে ব্যাকগ্রাউন্ডে রূপান্তর করে। যেমন `+` অপারেটরের একপাশে স্ট্রিং থাকলে অন্য পাশকেও স্ট্রিং বানিয়ে কনক্যাট করে (`'5' + 2 = '52'`)। কিন্তু বিয়োগ (`-`), গুণ (`*`) বা ভাগের ক্ষেত্রে স্ট্রিংকে নাম্বারে রূপান্তর করে ফেলে (`'10' - 2 = 8`)। এছাড়া `if` কন্ডিশনে যেকোনো মান ট্রু বা ফলসে কনভার্ট হয়ে যায় (Truthy/Falsy)।",
      "deepDive": [
        "**যোগ বনাম বিয়োগ**: যোগের ক্ষেত্রে স্ট্রিং অগ্রাধিকার পায় (কনক্যাটিনেশন), কিন্তু বিয়োগ, গুণ ও ভাগে নাম্বার অগ্রাধিকার পায়।",
        "**ফলসি (Falsy) মান**: জাভাস্ক্রিপ্টে ফলসি মান মাত্র ৮টি: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, এবং `NaN`। বাকি সব (এমনকি খালি `[]` ও `{}`) ট্রুথি!",
        "**ToPrimitive অ্যালগরিদম**: অবজেক্টের সাথে প্রিমিটিভ অপারেশন করলে ইঞ্জিন অবজেক্টের `valueOf()` ও `toString()` মেথড কল করে প্রিমিটিভে রূপান্তর করে।"
      ],
      "commonMistakes": [
        "খালি অ্যারে `[]` বা খালি অবজেক্ট `{}`-কে ফলসি মনে করা (জাভাস্ক্রিপ্টে সব অবজেক্ট ট্রুথি)।"
      ],
      "proTips": [
        "বলুন: 'ইন্টারভিউতে ফলসি মানগুলোর সঠিক তালিকা ও `ToPrimitive` মেকানিজমের ব্যাখ্যা দিলে টেকনিক্যাল গভীরতা প্রমাণিত হয়।'"
      ]
    }
  },
  {
    "id": "pa-d1-q15-iife",
    "questionNumber": 15,
    "module": "Day 1 — JavaScript Fundamentals I",
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
      "quickAnswer": "An IIFE is a JavaScript function expression that executes immediately upon definition, creating an isolated private scope to prevent polluting the global namespace.",
      "interviewSpeech": "An IIFE (Immediately Invoked Function Expression) is a function wrapped in grouping parentheses and executed instantly: `(function() { ... })();` or `(() => { ... })();`. Prior to ES6 modules and `let`/`const` block scoping, JavaScript only offered function-level scope via `var`. IIFEs were the foundational design pattern for creating private state, encapsulating utilities, and preventing global namespace collision (famously used by jQuery and earlier libraries). While modern ES6 modules have reduced the necessity of IIFEs in everyday application code, they remain valuable for executing top-level asynchronous code (`(async () => { ... })()`), running one-time initialization setups, and inside module bundlers.",
      "deepDive": [
        "**Syntax Mechanics**: The surrounding parentheses `(function(){ ... })` convert the statement into a function expression, preventing syntax errors from trailing `()` invocation.",
        "**Module Pattern Precursor**: Prior to ES6 modules, libraries used IIFEs to expose a single global namespace object while hiding internal helper methods and state.",
        "**Modern Use Cases**: Top-level async in environments lacking Top-Level Await, isolating complex variable setups that shouldn't leak, and within build tool bundle outputs."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Classic IIFE and Modern Async IIFE",
        "code": "// 1. Classic IIFE for private data encapsulation:\nconst counterModule = (function() {\n  let privateCount = 0; // Inaccessible from outside\n  return {\n    increment() { return ++privateCount; },\n    get() { return privateCount; }\n  };\n})();\nconsole.log(counterModule.increment()); // 1\nconsole.log(counterModule.privateCount); // undefined\n\n// 2. Modern Async IIFE for immediate async task:\n(async () => {\n  try {\n    // const res = await fetch(\"https://api.example.com/data\");\n    console.log(\"Async initialization complete!\");\n  } catch (err) {\n    console.error(err);\n  }\n})();"
      },
      "commonMistakes": [
        "Omitting the grouping parentheses around `function() {}`, leading to a `SyntaxError: Function statements require a function name`.",
        "Forgetting trailing semicolons before an IIFE, which can cause the JS ASI (Automatic Semicolon Insertion) to merge the IIFE with the previous line."
      ],
      "proTips": [
        "Acknowledge modern relevance: 'While ES6 modules have replaced IIFEs for file-level isolation, IIFEs remain essential for isolated initialization blocks and legacy bundle architectures.'"
      ]
    },
    "bangla": {
      "quickAnswer": "IIFE হলো এমন একটি ফাংশন যা ডিফাইন করার সাথে সাথেই নিজে নিজে এক্সিকিউট হয়ে যায় এবং একটি প্রাইভেট স্কোপ তৈরি করে গ্লোবাল স্কোপ দূষণমুক্ত রাখে।",
      "interviewSpeech": "IIFE (Immediately Invoked Function Expression) হলো এমন ফাংশন যা লেখার পরপরই দুটি প্রথম বন্ধনী দিয়ে সাথে সাথে কল হয়ে যায়: `(function() { ... })();`। ES6 আসার আগে যখন শুধু `var` ছিল, তখন গ্লোবাল ভেরিয়েবল ওভাররাইট হয়ে যাওয়া ঠেকাতে এবং প্রাইভেট কোড তৈরি করতে IIFE ছিল প্রধান হাতিয়ার (যেমন jQuery লাইব্রেরি তৈরিতে)। আধুনিক ES6 মডিউল ও ব্লক স্কোপের কারণে এর ব্যবহার কিছুটা কমলেও, টপ-লেভেল অ্যাসিঙ্ক কোড এক নিমেষে রান করাতে বা এককালীন ইনিশিয়ালাইজেশন লজিক আটকাতে এখনো IIFE ব্যবহৃত হয়।",
      "deepDive": [
        "**সিনট্যাক্স ব্যাখ্যা**: প্রথম বন্ধনী `(function() {})` স্টেটমেন্টকে এক্সপ্রেশনে রূপান্তর করে, যার ফলে সাথে সাথে `()` দিয়ে কল করা সম্ভব হয়।",
        "**মডিউল প্যাটার্ন**: ES6-এর আগে jQuery বা অন্যান্য লাইব্রেরি তাদের সমস্ত প্রাইভেট কোড IIFE-এর ভেতরে রেখে শুধু একটি গ্লোবাল অবজেক্ট (যেমন `$`) উন্মুক্ত করত।",
        "**টপ লেভেল অ্যাসিঙ্ক**: যেসব পরিবেশে Top-Level Await নেই, সেখানে `(async () => { await doTask(); })()` দিয়ে সাথে সাথে অ্যাসিঙ্ক কোড চালানো যায়।"
      ],
      "commonMistakes": [
        "IIFE-এর আগে সেমিকোলন না দেওয়া, যার ফলে অটোমেটিক সেমিকোলন ইনসার্শনে পূর্ববর্তী লাইনের সাথে মিশে বাগ তৈরি হতে পারে।"
      ],
      "proTips": [
        "বলুন: 'ES6 মডিউল আসার ফলে IIFE-এর ব্যবহার কমলেও অ্যাসিঙ্ক ইনিশিয়ালাইজেশন এবং বান্ডলারের ইন্টারনাল কোডে এটি এখনো সক্রিয়।'"
      ]
    }
  }
];
