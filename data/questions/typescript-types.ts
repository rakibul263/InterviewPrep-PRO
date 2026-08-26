import { Question } from "@/types";

export const typescriptTypesQuestions: Question[] = [
  {
    id: "ts-type-vs-interface",
    slug: "ts-type-vs-interface",
    question: "Difference between type and interface in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "`interface` মূলত অবজেক্ট বা ক্লাসের আকার (Shape) সংজ্ঞায়িত করার জন্য ডিজাইন করা হয়েছে এবং এটি Declaration Merging (একই নামের একাধিক ইন্টারফেস স্বয়ংক্রিয়ভাবে জোড়া লাগা) এবং `extends` সমর্থন করে। আর `type` অ্যালিয়াস যেকোনো কিছুর টাইপ ডিফাইন করতে পারে—যার মধ্যে প্রিমিটিভস, Union (`|`), Intersection (`&`), Tuples, এবং Mapped Types অন্তর্ভুক্ত, তবে `type` Declaration Merging সমর্থন করে না।",
    easyExplanation: "সহজ তুলনা:\n\n১. Interface (ইন্টারফেস):\n- মূলত Object এবং Class-এর জন্য সেরা।\n- এক্সটেন্ড করতে `extends` কিওয়ার্ড ব্যবহার করে।\n- Declaration Merging সাপোর্ট করে (অর্থাৎ আপনি যদি একই ফাইলে `interface User` দুইবার লেখেন, তবে TS নিজে থেকেই দুটিকে একসাথে জুড়ে একটি বড় ইন্টারফেস বানিয়ে নেবে)। লাইব্রেরি তৈরির জন্য এটি দারুণ।\n\n২. Type (টাইপ অ্যালিয়াস):\n- অনেক বেশি ফ্লেক্সিবল।\n- শুধু অবজেক্ট নয়, `type ID = string | number;` (Union) বা `type Point = [number, number];` (Tuple) তৈরিতে Type আবশ্যক।\n- একই নামের Type দুইবার লিখলে Duplicate identifier এরর দেবে (No Merging)।",
    interviewAnswer: "Both `type` and `interface` are used to define contracts and object shapes in TypeScript, but they have key architectural differences. `interface` is optimized for object-oriented design, supports Declaration Merging (crucial for library development and extending third-party typings), and extends via the `extends` keyword with better compiler caching. `type` alias is more expressive and versatile—it can represent primitives, Unions (`|`), Intersections (`&`), Tuples, and Mapped/Conditional types. As a general rule: use `interface` for public API/object models and `type` for complex unions and utility type logic.",
    detailedExplanation: {
      whatItIs: "TypeScript-এ কাস্টম টাইপ ডেফিনিশন তৈরির দুটি প্রধান মেকানিজম।",
      whyItExists: "ইন্টারফেস অবজেক্ট-ওরিয়েন্টেড পলিমরফিজম ও লাইব্রেরি এক্সটেনসিবিলিটি দেয়, অন্যদিকে টাইপ অ্যালিয়াস ফাংশনাল ও কম্পোজিশনাল টাইপ সিস্টেম পরিচালনা করে।",
      howItWorks: "কম্পাইলার ইন্টারফেসগুলোকে একটি সিঙ্গেল ফ্ল্যাট ক্যানোনিকাল অবজেক্ট টাইপ হিসেবে ইন্টারনালি অপটিমাইজ করে ক্যাশ করে। টাইপ অ্যালিয়াসগুলোকে এক্সপ্রেশনের মতো মূল্যায়ন করা হয়।",
      whenToUse: "React Props/State এবং পাবলিক মডিউল ডেফিনিশনে `interface`, আর Union/Intersection, Mapped Types, Zod/tRPC স্কিমা টাইপিংয়ে `type`।",
      keyPoints: [
        "Declaration Merging: Supported only by `interface`.",
        "Unions & Primitives (`type Status = 'open' | 'closed'`): Supported only by `type`.",
        "Extending: `interface` uses `extends`; `type` uses intersection (`&`).",
        "Performance: `interface` provides slightly faster compiler type-checking in massive codebases due to internal shape caching."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. Interface ও Declaration Merging
interface User {
  name: string;
}

interface User {
  age: number; // স্বয়ংক্রিয়ভাবে জোড়া লেগে যাবে!
}

const shuvo: User = { name: "Shuvo", age: 26 }; // Valid!

// ২. Type Alias দিয়ে Union ও Tuple (যা interface পারে না)
type Status = "idle" | "loading" | "success" | "error"; // Union
type Coordinates = [number, number]; // Tuple
type ID = string | number; // Primitive Union

// ৩. Inheritance পার্থক্য
interface AdminInterface extends User {
  role: "admin";
}

type AdminType = User & {
  role: "admin";
};`,
      explanationSteps: [
        {
          step: 1,
          title: "ডিক্লেয়ারেশন মার্জিং",
          description: "User ইন্টারফেস দুইবার লেখার পর কম্পাইলার স্বয়ংক্রিয়ভাবে name এবং age উভয় ফিল্ডকে একত্রিত করেছে।"
        },
        {
          step: 2,
          title: "টাইপ অ্যালিয়াসের ফ্লেক্সিবিলিটি",
          description: "Status ও Coordinates তৈরিতে শুধুমাত্র type ব্যবহার করা সম্ভব, যা ইন্টারফেসে সম্ভব নয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Extending Express Request Object",
        description: "Express-এর `Request` ইন্টারফেসে ডিক্লেয়ারেশন মার্জিং দিয়ে `req.user` যোগ করা: `declare global { namespace Express { interface Request { user?: User } } }`।"
      },
      {
        title: "Redux Action Discriminated Union",
        description: "`type Action = { type: 'ADD'; payload: Item } | { type: 'REMOVE'; id: string }` তৈরিতে `type` ব্যবহার।"
      }
    ],
    interviewTips: {
      tip: "Declaration Merging এবং Unions-এর ক্ষমতা উল্লেখ করে উত্তর শেষ করুন। 'ইন্টারফেস অবজেক্টের জন্য এবং টাইপ জটিল কম্পোজিশনের জন্য' এই সারসংক্ষেপটি ইন্টারভিউয়াররা দারুণ পছন্দ করেন।",
      deliveryStrategy: "সাদৃশ্য (উভয়ই অবজেক্ট শেপ দেয়) -> ৩টি বড় পার্থক্য (Merging, Unions/Primitives, Syntax) -> রিয়েল ওয়ার্ল্ড ব্যবহারের সুপারিশ দিন।",
      avoidSaying: [
        {
          wrong: "interface পুরোনো, এখন সবসময় type ব্যবহার করা উচিত।",
          right: "উভয়ের আলাদা শক্তিশালী দিক রয়েছে; অবজেক্ট মডেল ও লাইব্রেরিতে interface এবং জটিল টাইপ ম্যানিপুলেশনে type ব্যবহার শ্রেয়।"
        }
      ]
    },
    quickRevision: [
      "interface: Declaration Merging সাপোর্ট করে, অবজেক্ট/ক্লাসের জন্য সেরা (`extends`).",
      "type: Union (`|`), Primitives, Tuples, Mapped Types সাপোর্ট করে (`&`).",
      "interface ডুপ্লিকেট নাম দিলে মার্জ হয়; type ডুপ্লিকেট নাম দিলে এরর দেয়।",
      "বেস্ট প্র্যাকটিস: অবজেক্ট মডেলে `interface`, ইউনিয়ন ও ইউটিলিটিতে `type`।"
    ],
    followUpQuestions: [
      {
        question: "When would you use union vs intersection types?",
        targetId: "ts-union-vs-intersection",
        shortHint: "ইউনিয়ন ও ইন্টারসেকশন ব্যবহার।"
      },
      {
        question: "Difference between any, unknown, and never.",
        targetId: "ts-any-unknown-never",
        shortHint: "টাইপ সেফটি।"
      }
    ],
    tags: ["TypeScript", "Types", "Interfaces", "OOP", "Declaration Merging"]
  },
  {
    id: "ts-any-unknown-never",
    slug: "ts-any-unknown-never",
    question: "Difference between any, unknown, and never in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "১. `any`: সম্পূর্ণ টাইপ চেকিং বন্ধ করে দেয় এবং যেকোনো অপারেশন করতে দেয় (Type-unsafe)।\n২. `unknown`: যেকোনো ভ্যালু গ্রহণ করতে পারে (Type-safe Top Type), তবে টাইপ ন্যারোয়িং বা টাইপ গার্ড (`typeof`, `instanceof`) ছাড়া এর ওপর কোনো অপারেশন করতে দেয় না।\n৩. `never`: এমন মান নির্দেশ করে যা কখনো ঘটতে পারে না বা কখনো কোনো ভ্যালু রিটার্ন হবে না (Bottom Type, যেমন ইনফিনিট লুপ বা এক্সেপশন থ্রো করা ফাংশন)।",
    easyExplanation: "বাস্তব উপমা দিয়ে সহজে বুঝুন:\n\n১. any (সব দরজা খোলা):\n- সিকিউরিটি গার্ড ঘুমিয়ে আছে। যা খুশি তাই ঢুকতে পারবে এবং যা খুশি করতে পারবে। কোনো এরর চেক হবে না।\n\n২. unknown (নিরাপদ চেকপোস্ট):\n- যেকোনো ব্যক্তি গেটে আসতে পারে, কিন্তু ভেতরে ঢুকতে হলে অবশ্যই আইডি কার্ড চেক (Type Guard) করে নিশ্চিত হতে হবে সে আসলেই কে।\n\n৩. never (অসম্ভব বা ব্ল্যাক হোল):\n- এমন একটি ফাংশন যা কখনো শেষ হয়ে কোনো ভ্যালু ফেরত দেবে না (যেমন ফাংশনের ভেতরে ক্র্যাশ করে `throw new Error()` হয়) অথবা switch-case এর exhaustiveness চেক যেখানে সব অপশন শেষ হয়ে গেছে।",
    interviewAnswer: "In TypeScript's type hierarchy:\n1. `any` is an escape hatch that disables all type-checking, allowing arbitrary property access and assignments (violates type safety).\n2. `unknown` is the type-safe Top Type. It accepts any value, but TypeScript forbids invoking methods or accessing properties on it until explicit Type Narrowing (via type guards or validation) is performed.\n3. `never` is the Bottom Type. It represents values that can never occur—used for functions that never return (infinite loops, throwing exceptions) and for exhaustive type checks in discriminated unions.",
    detailedExplanation: {
      whatItIs: "TypeScript-এর টাইপ হায়ারার্কির টপ ও বটম টাইপ সিস্টেম।",
      whyItExists: "রানটাইম টাইপ সেফটি বজায় রাখতে, অজানা ডেটা নিরাপদে হ্যান্ডেল করতে এবং কম্পাইলারকে কোডের আনরিচেবল স্টেট ডিটেক্ট করতে সাহায্য করতে।",
      howItWorks: "`any` কম্পাইলারকে বাইপাস করে। `unknown` অ্যাসাইনমেন্ট অনুমোদন করে কিন্তু অপারেশন ব্লক করে। `never` হলো খালি সেট (Empty Set)।",
      whenToUse: "API / থার্ড-পার্টি ইনপুটের জন্য `unknown`। সুইচ কেসের এগজস্টিভ চেকিংয়ের জন্য `never`। `any` সাধারণত প্রোডাকশন কোডে এড়িয়ে চলাই আদর্শ।",
      keyPoints: [
        "`any`: No type safety at all.",
        "`unknown`: Safe replacement for any. Requires type narrowing before use.",
        "`never`: Empty type. Used in exhaustive checks and throwing functions.",
        "Top Type: `unknown` / `any`; Bottom Type: `never`."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. any (ঝুঁকিপূর্ণ)
let valAny: any = "Hello";
valAny.nonExistentMethod(); // ❌ কম্পাইলার পাস করবে কিন্তু রানটাইমে ক্র্যাশ করবে!

// ২. unknown (নিরাপদ ও আধুনিক)
let valUnknown: unknown = "Hello";
// valUnknown.toUpperCase(); // ❌ Compiler Error: Object is of type 'unknown'.

// টাইপ ন্যারোয়িং করার পর নিরাপদ
if (typeof valUnknown === "string") {
  console.log(valUnknown.toUpperCase()); // ✅ Output: "HELLO"
}

// ৩. never (Exhaustive Check Example)
type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default: {
      // যদি ভবিষ্যতে কেউ Shape এ নতুন টাইপ (যেমন 'triangle') যোগ করে হ্যান্ডেল না করে,
      // তবে এখানে কম্পাইল টাইমে লাল এরর দেখাবে!
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    }
  }
}`,
      explanationSteps: [
        {
          step: 1,
          title: "any-র বিপদ",
          description: "any ব্যবহারের কারণে অস্তিত্বহীন মেথড কলেও TS কম্পাইলার চুপ থাকে যা রানটাইমে ক্র্যাশ ঘটায়।"
        },
        {
          step: 2,
          title: "unknown-এর টাইপ গার্ড",
          description: "typeof দিয়ে স্ট্রিং নিশ্চিত হওয়ার পরেই কেবল toUpperCase কল করার অনুমতি দেয়।"
        },
        {
          step: 3,
          title: "never দিয়ে Exhaustive Check",
          description: "ভবিষ্যতে কোনো মিসিং টাইপ হ্যান্ডলিং বাদ পড়লে TypeScript বিল্ড টাইমে এরর দিয়ে আটকে দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Safe API Parsing with Zod / unknown",
        description: "API রেসপন্সের ডেটাকে `unknown` ধরে Zod বা টাইপ গার্ড দিয়ে পার্স করে শতভাগ টাইপ সেফ করা।"
      },
      {
        title: "Exhaustive Redux Reducer Checking",
        description: "রেডিউসারের ডিফল্ট কেসে `const _exhaustive: never = action` বসিয়ে সব অ্যাকশন টাইপ হ্যান্ডেল হয়েছে কি না নিশ্চিত করা।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে 'Exhaustive Type Checking with never' উদাহরণটি দেখালে ইন্টারভিউয়ার বুঝবেন আপনি একজন সিনিয়র লেভেলের টাইপস্ক্রিপ্ট ইঞ্জিনিয়ার।",
      deliveryStrategy: "any বনাম unknown (নিরাপত্তা পার্থক্য) -> never (বটম টাইপ ও এক্সেপশন) -> Exhaustive Check কোড প্যাটার্ন তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "unknown এবং any একই কাজ করে।",
          right: "any সব টাইপ সেফটি নষ্ট করে, আর unknown টাইপ সেফটি বজায় রেখে টাইপ গার্ড ব্যবহার করতে বাধ্য করে।"
        }
      ]
    },
    quickRevision: [
      "any = টাইপ চেকিং সম্পূর্ণ বন্ধ (Type-unsafe).",
      "unknown = টাইপ সেফ শীর্ষ টাইপ, ব্যবহারের আগে Type Guard আবশ্যক।",
      "never = যা কখনো ঘটে না (Functions that throw, Exhaustiveness checks).",
      "যেকোনো অজানা ইনপুটে `any`-র বদলে `unknown` ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "How would you handle unknown backend data in TypeScript?",
        targetId: "ts-handle-unknown-backend-data",
        shortHint: "Zod এবং Type Guards দিয়ে আননোন ডেটা হ্যান্ডলিং।"
      }
    ],
    tags: ["TypeScript", "Types", "any", "unknown", "never", "Type Safety"]
  },
  {
    id: "ts-union-vs-intersection",
    slug: "ts-union-vs-intersection",
    question: "When would you use union vs intersection types in TypeScript?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "Union Type (`|`) ব্যবহার করা হয় যখন কোনো ভ্যালু একাধিক সম্ভাব্য টাইপের 'যেকোনো একটি' (OR) হতে পারে (যেমন `string | number` বা Discriminated Unions)। আর Intersection Type (`&`) ব্যবহার করা হয় যখন একাধিক টাইপের সমস্ত ফিল্ড বা প্রোপার্টিকে একসাথে একত্রিত করে একটি নতুন সম্মিলিত 'এবং' (AND) টাইপ তৈরি করতে হয় (যেমন অবজেক্ট মার্জিং বা মিক্সিন্স)।",
    easyExplanation: "সহজ লজিক্যাল তুলনা:\n\n১. Union (`|` - অথবা / OR):\n- আপনি দোকানে গিয়ে বললেন: 'আমাকে চা অথবা কফি দিন'।\n- আপনি যেকোনো একটি পাবেন।\n- যেমন: `type Theme = 'light' | 'dark' | 'system'`।\n\n২. Intersection (`&` - এবং / AND):\n- আপনি বললেন: 'আমাকে এমন একজন কর্মচারী দিন যিনি ডিজাইনার এবং প্রোগ্রামার দুটোই'।\n- সেই ব্যক্তিকে ডিজাইনের সব দক্ষতা এবং কোডিংয়ের সব দক্ষতা একসাথে ধারণ করতে হবে।\n- যেমন: `type FullStackDev = FrontendSkills & BackendSkills`।",
    interviewAnswer: "Union types (`A | B`) represent a value that can be of type A OR type B, allowing flexible polymorphism and state modeling (widely used in Discriminated Unions for state transitions). Intersection types (`A & B`) combine multiple types into one, requiring the resulting object to satisfy ALL properties of type A AND type B simultaneously (ideal for composing reusable interfaces, adding metadata timestamps, or extending third-party types).",
    detailedExplanation: {
      whatItIs: "টাইপস্ক্রিপ্টের সেট থিওরি ভিত্তিক টাইপ কম্পোজিশন অপারেটর।",
      whyItExists: "ডায়নামিক মাল্টিপল স্টেট মডেলিং এবং মডুলার টাইপ কম্বিনেশন তৈরি করতে।",
      howItWorks: "Union সেটের সমষ্টি (Set Union)। Intersection সেটের সাধারণ অংশ ও ফিল্ডের যৌথ সমাবেশ (Set Intersection)।",
      whenToUse: "Union: API Loading/Success/Error স্টেট, বাটন ভ্যারিয়েন্ট ('primary' | 'secondary')। Intersection: বেস মডেলের সাথে আইডি ও টাইমস্ট্যাম্প যোগ করতে (`BaseEntity & Timestamps`)।",
      keyPoints: [
        "Union (`|`): Value is ONE OF the specified types.",
        "Intersection (`&`): Value has ALL properties of combined types.",
        "Discriminated Unions use a shared literal tag (e.g. `status` or `kind`)."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. Union Type (OR)
type NetworkState = 
  | { status: "loading" }
  | { status: "success"; data: string[] }
  | { status: "error"; message: string };

function renderUI(state: NetworkState) {
  if (state.status === "success") {
    console.log("Data count:", state.data.length); // TS জানে data নিশ্চিত আছে
  } else if (state.status === "error") {
    console.log("Error:", state.message);
  }
}

// ২. Intersection Type (AND)
type Person = { name: string; email: string };
type Timestamps = { createdAt: Date; updatedAt: Date };

// দুটি টাইপকে একত্রিত করা
type DatabaseUser = Person & Timestamps & { id: string };

const userRecord: DatabaseUser = {
  id: "usr_101",
  name: "Shuvo",
  email: "shuvo@example.com",
  createdAt: new Date(),
  updatedAt: new Date()
};`,
      explanationSteps: [
        {
          step: 1,
          title: "ডিসক্রিমিনেটেড ইউনিয়ন",
          description: "status প্রোপার্টির ওপর ভিত্তি করে TypeScript স্বয়ংক্রিয়ভাবে সঠিক ব্রাঞ্চে ডেটা ন্যারো করে।"
        },
        {
          step: 2,
          title: "ইন্টারসেকশন দিয়ে মডেল কম্বিনেশন",
          description: "Person এবং Timestamps একত্রিত হয়ে একটি পূর্ণাঙ্গ ডেটাবেস এন্টিটি তৈরি করেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Component Props Extension",
        description: "`type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'primary' | 'outline'; isLoading?: boolean };`"
      }
    ],
    interviewTips: {
      tip: "Discriminated Union-এর গুরুত্ব তুলে ধরুন। এটি ফ্রন্টএন্ডে রিয়্যাক্ট স্টেট হ্যান্ডলিংয়ের গোল্ড স্ট্যান্ডার্ড।",
      deliveryStrategy: "OR বনাম AND ধারণা -> Discriminated Union কোড -> Props ইন্টারসেকশন ব্যবহার বলুন।",
      avoidSaying: [
        {
          wrong: "Intersection টাইপ শুধু ক্লাসের ইন্টারফেসে কাজ করে।",
          right: "Intersection টাইপ যেকোনো type alias বা অবজেক্ট শেইপের সাথে কাজ করে।"
        }
      ]
    },
    quickRevision: [
      "Union (`|`) = যেকোনো একটি টাইপ (OR).",
      "Intersection (`&`) = সমস্ত টাইপের সমন্বয় (AND).",
      "Union সেরা: State Modeling ও Literals-এর জন্য।",
      "Intersection সেরা: Mixins, Base Entity Compositions, এবং Props Extension-এর জন্য।"
    ],
    followUpQuestions: [
      {
        question: "What is discriminated union and where is it useful?",
        targetId: "ts-discriminated-unions",
        shortHint: "কমন লিটারেল ট্যাগ দিয়ে টাইপ ন্যারোয়িং।"
      }
    ],
    tags: ["TypeScript", "Types", "Union", "Intersection", "Discriminated Union"]
  },
  {
    id: "ts-structural-typing",
    slug: "ts-structural-typing",
    question: "How does structural typing (Duck Typing) work in TypeScript?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer: "TypeScript একটি Structural Type System (যাকে প্রায়ই Duck Typing বলা হয়) ব্যবহার করে। এর অর্থ হলো দুটি টাইপ সামঞ্জস্যপূর্ণ (compatible) কি না, তা তাদের নাম বা ডিক্লেয়ারেশনের ওপর নির্ভর করে না; বরং তাদের অভ্যন্তরীণ গঠন বা কাঠামোর (Structure / Members) ওপর নির্ভর করে। যদি কোনো অবজেক্টে প্রত্যাশিত টাইপের প্রয়োজনীয় সমস্ত প্রোপার্টি সঠিক টাইপসহ উপস্থিত থাকে, তবে TypeScript সেটিকে ভ্যালিড বলে গ্রহণ করে।",
    easyExplanation: "বিখ্যাত কথা দিয়ে বুঝুন:\n'If it walks like a duck and quacks like a duck, it's a duck.'\n\n১. Java বা C#-এর মতো ভাষায় (Nominal Typing) আপনি যদি বলেন `User` অবজেক্ট লাগবে, তবে তাকে অবিকল `new User()` ক্লাসের ইনস্ট্যান্স হতে হবে, অন্য ক্লাসের স্ট্রাকচার হুবহু মিললেও এরর দেবে।\n২. কিন্তু TypeScript-এ (Structural Typing) কম্পাইলার নামের তোয়াক্কা করে না।\n৩. যদি কোনো অবজেক্টের ভেতর `{ name: string, age: number }` থাকে, তবে সেটির নাম `Student`, `Customer`, বা `Anonymous Object` যাই হোক না কেন, TS বলবে: 'এর গঠন মিলে গেছে, আমি একে গ্রহণ করলাম!'",
    interviewAnswer: "TypeScript uses a Structural Type System (as opposed to Nominal Typing in languages like Java or C#). In structural typing, type compatibility and equivalence are determined solely by the object's shape and members (properties and methods), not by its explicit declaration or class name. If object B has at least all the required properties of type A with matching types, B is assignable to A (even if B has extra properties when passed as a reference).",
    detailedExplanation: {
      whatItIs: "টাইপ কম্প্যাটিবিলিটি যাচাইয়ের একটি পদ্ধতি যা টাইপের নামের বদলে তার শেইপ বা প্রোপার্টিজ পরীক্ষা করে।",
      whyItExists: "জাভাস্ক্রিপ্ট রানটাইমের অত্যন্ত ডাইনামিক অবজেক্ট লিটারেল এবং ডাক-টাইপিং স্বভাবের সাথে শতভাগ সামঞ্জস্যপূর্ণ থাকতে।",
      howItWorks: "কম্পাইলার টার্গেট টাইপের প্রতিটি রিকোয়ার্ড ফিল্ড সোর্স অবজেক্টে আছে কি না ম্যাচ করে। অতিরিক্ত প্রোপার্টি রেফারেন্সে এলাউড হলেও ডিরেক্ট অবজেক্ট লিটারেলে 'Excess Property Check' চালায়।",
      whenToUse: "সহজে মক ডেটা তৈরি করতে, টেস্ট লিখতে এবং ভিন্ন ভিন্ন সার্ভিসের সিমিলার অবজেক্ট নির্বিঘ্নে ইন্টারচেঞ্জ করতে।",
      keyPoints: [
        "Shape-based compatibility (Nominal typing uses explicit names/classes).",
        "Subset matching: Source must satisfy all required properties of Target.",
        "Excess Property Checking happens only on direct object literals."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function printPoint(point: Point2D) {
  console.log(\`X: \${point.x}, Y: \${point.y}\`);
}

const point3D: Point3D = { x: 10, y: 20, z: 30 };

// ✅ Valid! Point3D-তে Point2D-র প্রয়োজনীয় সব প্রোপার্টি (x, y) আছে
printPoint(point3D); // Output: X: 10, Y: 20

// ⚠️ Excess Property Check (Direct literal দিলে এরর দিবে)
// printPoint({ x: 10, y: 20, z: 30 }); 
// ❌ Error: 'z' does not exist in type 'Point2D'`,
      explanationSteps: [
        {
          step: 1,
          title: "স্ট্রাকচারাল কম্প্যাটিবিলিটি",
          description: "point3D অবজেক্টের নাম Point3D হওয়া সত্ত্বেও Point2D-র সমস্ত প্রোপার্টি থাকায় ফাংশনটি কোনো সমস্যা ছাড়াই রান করেছে।"
        },
        {
          step: 2,
          title: "এক্সসেস প্রোপার্টি চেক",
          description: "সরাসরি অবজেক্ট লিটারেল পাস করার সময় টাইপো ঠেকাতে TS অতিরিক্ত ফিল্ড থাকলে এরর দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Effortless Unit Testing Mocks",
        description: "সম্পূর্ণ ৫০টি প্রোপার্টি যুক্ত জটিল ডাটাবেস ক্লাস ইনস্ট্যান্স না বানিয়ে শুধুমাত্র টেস্টে প্রয়োজনীয় ফিল্ডের সিম্পল অবজেক্ট পাস করে টেস্ট চালানো।"
      }
    ],
    interviewTips: {
      tip: "Nominal Typing (Java/C#) বনাম Structural Typing (TypeScript)-এর পার্থক্য উল্লেখ করুন এবং Excess Property Check-এর কথা বলুন।",
      deliveryStrategy: "ডাক টাইপিং সংজ্ঞা -> Nominal বনাম Structural তুলনা -> সাবসেট কম্প্যাটিবিলিটি কোড উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "TypeScript সব অতিরিক্ত প্রোপার্টি সম্পূর্ণ ব্লক করে দেয়।",
          right: "রেফারেন্স ভ্যারিয়েবল পাস করলে অতিরিক্ত প্রোপার্টি অনুমোদিত; শুধুমাত্র ডিরেক্ট অবজেক্ট লিটারেলে Excess Property Check কার্যকর হয়।"
        }
      ]
    },
    quickRevision: [
      "Structural Typing = নামের ওপর নয়, গঠনের (Shape) ওপর টাইপ ম্যাচ করা হয়।",
      "Java/C# ব্যবহার করে Nominal Typing; TypeScript ব্যবহার করে Structural Typing।",
      "টার্গেট টাইপের সব ফিল্ড থাকলেই ভ্যালিড।",
      "ডিরেক্ট অবজেক্ট লিটারেলে Excess Property Check কাজ করে।"
    ],
    followUpQuestions: [
      {
        question: "What is readonly and how is it enforced?",
        targetId: "ts-readonly-enforcement",
        shortHint: "ইমিউটেবল প্রোপার্টি।"
      }
    ],
    tags: ["TypeScript", "Types", "Structural Typing", "Duck Typing", "Compiler"]
  },
  {
    id: "ts-generic-constraints",
    slug: "ts-generic-constraints",
    question: "What are generic constraints in TypeScript?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Generic Constraints হলো এমন একটি নিয়ম যেখানে `extends` কিওয়ার্ড ব্যবহার করে কোনো জেনেরিক টাইপ প্যারামিটারকে (`<T>`) একটি নির্দিষ্ট টাইপ, অবজেক্ট শেপ বা ইন্টারফেসের মধ্যে সীমাবদ্ধ বা ফিল্টার করা হয়—যাতে জেনেরিক ফাংশন বা ক্লাসের ভেতর নির্দিষ্ট প্রোপার্টি (যেমন `.length` বা `.id`) নিশ্চিতভাবে বিদ্যমান থাকে।",
    easyExplanation: "সহজ উপমা দিয়ে বুঝুন:\n১. সাধারণ Generic (`<T>`): আপনি বললেন 'যেকোনো ডেটা আসতে পারে (number, string, object ইত্যাদি)'। কিন্তু তখন আপনি ফাংশনের ভেতর `item.length` লিখতে পারবেন না, কারণ number-এর তো length থাকে না!\n২. Generic with Constraint (`<T extends { length: number }>`):\n- আপনি শর্ত দিলেন: 'T যেকোনো টাইপ হতে পারে, কিন্তু শর্ত হলো তার ভেতরে অবশ্যই একটি সংখ্যা টাইপের `length` প্রোপার্টি থাকতে হবে (যেমন String বা Array)'।\n- এখন কম্পাইলার নিশ্চিত জানে যে `.length` আছে, তাই কোনো এরর দেবে না এবং টাইপ সেফটি বজায় থাকবে।",
    interviewAnswer: "Generic Constraints in TypeScript allow developers to restrict the types that can be accepted by a generic type parameter using the `extends` keyword (e.g., `<T extends ConstraintType>`). Without constraints, a generic type `T` is treated as fully unknown, preventing access to specific properties. By applying constraints, you guarantee that the incoming type satisfies a minimum contract (like having an `.id` or `.length` property) while retaining the precise original type of the input for return values.",
    detailedExplanation: {
      whatItIs: "জেনেরিক টাইপ প্যারামিটারের ওপর আরোপিত টাইপ সীমাবদ্ধতা বা গ্যারান্টি।",
      whyItExists: "ফ্লেক্সিবল রিইউজেবল কোড লেখার পাশাপাশি অবজেক্টের সুনির্দিষ্ট মেম্বার বা মেথড এক্সেস করার সুবিধা পেতে।",
      howItWorks: "কম্পাইলার চেক করে আর্গুমেন্টে পাস করা টাইপটি কনস্ট্রেইন্ট ইন্টারফেসের সাবটাইপ কি না।",
      whenToUse: "অবজেক্টের নির্দিষ্ট কি (Key) অ্যাক্সেস করতে (`<K extends keyof T>`), ডাটাবেস এন্টিটি হ্যান্ডলিংয়ে (`<T extends { id: string }`)।",
      keyPoints: [
        "Syntax: `<T extends InterfaceOrType>`",
        "Allows safe property access inside generic function body.",
        "`<K extends keyof T>` restricts keys strictly to the properties of T."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. দৈর্ঘ্য (length) থাকা বাধ্যতামূলক এমন কনস্ট্রেইন্ট
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): T {
  console.log("Length is:", item.length); // ✅ TS জানে length নিশ্চিত আছে
  return item;
}

logLength("Hello World"); // ✅ String has length (11)
logLength([1, 2, 3, 4]);  // ✅ Array has length (4)
// logLength(12345);      // ❌ Compiler Error: number does not have 'length'

// ২. keyof কনস্ট্রেইন্ট (Type-safe Object Property Getter)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Shuvo", role: "admin" };
const userName = getProperty(user, "name"); // Type of userName is string
// getProperty(user, "salary"); // ❌ Error: "salary" is not a key of user`,
      explanationSteps: [
        {
          step: 1,
          title: "HasLength ইন্টারফেস কনস্ট্রেইন্ট",
          description: "T extends HasLength নিশ্চিত করেছে যে পাস করা আর্গুমেন্টে length ফিল্ড থাকবেই।"
        },
        {
          step: 2,
          title: "K extends keyof T",
          description: "শুধুমাত্র user অবজেক্টের আসল কি-গুলোকেই পাস করার অনুমতি দেয়, ফলে টাইপো বা ভুল প্রোপার্টি রিড অসম্ভব।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Generic Database Repository",
        description: "`class BaseRepo<T extends { id: string | number }> { async getById(id: T['id']): Promise<T> { ... } }`"
      },
      {
        title: "React Generic Select Component",
        description: "`<Select<T extends { value: string; label: string }> options={items} onSelect={...} />`"
      }
    ],
    interviewTips: {
      tip: "`<K extends keyof T>` উদাহরণটি ইন্টারভিউয়ারদের সামনে তুলে ধরুন। এটি টাইপস্ক্রিপ্টের সবথেকে কার্যকর এবং প্রশংসিত প্যাটার্ন।",
      deliveryStrategy: "Generic-এর সমস্যা (No property access) -> extends দিয়ে সমাধান -> keyof কনস্ট্রেইন্ট রিয়েল ওয়ার্ল্ড এক্সাম্পল দিন।",
      avoidSaying: [
        {
          wrong: "extends মানে এখানে ক্লাস ইনহেরিটেন্স হচ্ছে।",
          right: "জেনেরিক্সের ক্ষেত্রে extends মানে হলো 'Subtype Constraint' বা শর্ত পূরণ করা, ক্লাস ইনহেরিটেন্স নয়।"
        }
      ]
    },
    quickRevision: [
      "Generic Constraint: `<T extends SomeType>`",
      "জেনেরিক ভ্যালুর ওপর নির্দিষ্ট প্রোপার্টি (যেমন `.length`, `.id`) ব্যবহারের গ্যারান্টি দেয়।",
      "`<K extends keyof T>` টাইপ সেফ প্রোপার্টি অ্যাক্সেসের জন্য ব্যবহৃত হয়।",
      "শর্ত পূরণ না করা টাইপ পাস করলে কম্পাইল টাইমে এরর দেয়।"
    ],
    followUpQuestions: [
      {
        question: "Explain keyof and typeof together in TypeScript.",
        targetId: "ts-keyof-and-typeof",
        shortHint: "টাইপ এক্সট্রাকশন ও লুকআপ।"
      }
    ],
    tags: ["TypeScript", "Generics", "Constraints", "keyof", "Type Safety"]
  },
  {
    id: "ts-void-vs-never-return",
    slug: "ts-void-vs-never-return",
    question: "Difference between void and never return types in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "`void` নির্দেশ করে যে একটি ফাংশন সফলভাবে তার কাজ সম্পন্ন করে শেষ লাইনে পৌঁছায় কিন্তু কোনো অর্থবহ মান রিটার্ন করে না (ইন্টারনালি এটি `undefined` রিটার্ন করে)। আর `never` নির্দেশ করে যে ফাংশনটি কখনোই স্বাভাবিকভাবে সম্পন্ন হয়ে শেষ লাইনে পৌঁছাবেই না—হয় এটি এক্সেপশন থ্রো করে ক্র্যাশ করবে অথবা ইনফিনিট লুপে আটকে থাকবে।",
    easyExplanation: "সহজ ভাষায় পার্থক্য:\n\n১. void (কাজ শেষ হয়েছে, কিন্তু হাতে কিছু নেই):\n- আপনি কাউকে বললেন: 'দরজাটা বন্ধ করে আসুন'।\n- সে দরজা বন্ধ করে ফিরে এসে বলল: 'কাজ শেষ' (কোনো পার্সেল বা ডেটা নিয়ে আসেনি)।\n- এটি `void` (জাভাস্ক্রিপ্ট রানটাইমে এর মান `undefined`)।\n\n২. never (কখনোই ফিরে আসবে না):\n- আপনি কাউকে একটি অন্ধকার সুড়ঙ্গে পাঠালেন যেখান থেকে সে কোনোদিনই ফিরে আসে না (হয় সে দুর্ঘটনায় মারা গেল / Error Throw, অথবা অনন্তকাল হাঁটতেই থাকল / Infinite Loop)।\n- এটি `never` (ফাংশন কখনো তার রিটার্ন পয়েন্টে পৌঁছায় না)।",
    interviewAnswer: "In TypeScript, `void` represents the return type of a function that completes its execution normally without returning a meaningful value (evaluates to `undefined` at runtime). In contrast, `never` represents a function endpoint that is unreachable—the function NEVER successfully completes or returns anything because it either throws an unhandled exception or runs an infinite loop.",
    detailedExplanation: {
      whatItIs: "ফাংশন রিটার্ন কমপ্লিশন ও রিচেবিলিটির দুটি ভিন্ন টাইপ ডেফিনিশন।",
      whyItExists: "কম্পাইলার যাতে বুঝতে পারে ফাংশন কলের পর কোড এক্সিকিউশন সামনে এগোবে কি না।",
      howItWorks: "`void` রিটার্ন টাইপের ফাংশন কল হলে পরবর্তী লাইনগুলো এক্সিকিউট হয়। `never` রিটার্ন টাইপের ফাংশন কল হলে কম্পাইলার তার পরের লাইনগুলোকে Unreachable কোড হিসেবে চিহ্নিত করে।",
      whenToUse: "ইভেন্ট হ্যান্ডলার বা সাইড-ইফেক্ট ফাংশনে `void`। এরর ইউটিলিটি ফাংশনে (`throwError(msg)`) `never`।",
      keyPoints: [
        "`void`: Function finishes and returns `undefined`.",
        "`never`: Function never finishes (Throws or Infinite loop).",
        "A variable of type `never` cannot be assigned any value (except never itself)."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. void Return Type (সফলভাবে শেষ হয় কিন্তু মান দেয় না)
function logMessage(msg: string): void {
  console.log("Log:", msg);
  // implicitly returns undefined
}

const result = logMessage("System initialized");
console.log(result); // undefined

// ২. never Return Type (কখনোই শেষ লাইনে পৌঁছায় না)
function throwFatalError(message: string): never {
  throw new Error(\`FATAL ERROR: \${message}\`);
}

function runInfiniteProcess(): never {
  while (true) {
    // Background polling forever
  }
}

function processUserData(user?: { name: string }) {
  if (!user) {
    throwFatalError("User is required!");
  }
  
  // TS জানে throwFatalError никогда রিটার্ন করে না, 
  // তাই নিচে user নিশ্চিতভাবেই defined!
  console.log(user.name); // No optional chaining (?.) needed!
}`,
      explanationSteps: [
        {
          step: 1,
          title: "void এর সমাপ্তি",
          description: "logMessage স্বাভাবিকভাবে সম্পন্ন হয়ে undefined প্রদান করে।"
        },
        {
          step: 2,
          title: "never ও কন্ট্রোল ফ্লো",
          description: "throwFatalError never রিটার্ন করায় TS কম্পাইলার বুঝতে পারে if ব্লকে ঢুকলে কোড নিচে আর নামবে না, ফলে user.name স্বয়ংক্রিয়ভাবে টাইপ সেফ থাকে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Control Flow Analysis / Assert Functions",
        description: "কাস্টম `assertNonNull(value)` ফাংশন যা ভ্যালু না থাকলে throw করে never রিটার্ন দিয়ে নিচের কোডকে ন্যারো করে।"
      }
    ],
    interviewTips: {
      tip: "কন্ট্রোল ফ্লো অ্যানালাইসিসে `never` কীভাবে নিচের কোডকে ন্যারো করে (যেমন throwFatalError-এর পর user.name সেফ হয়ে যাওয়া) তা দেখালে ইন্টারভিউয়ার মুগ্ধ হবেন।",
      deliveryStrategy: "স্বাভাবিক সমাপ্তি (void/undefined) বনাম আনরিচেবল সমাপ্তি (never) -> কোড ট্রেস করে বুঝিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "void মানে কোনো ভ্যালু রিটার্ন করে না, আর never মানে নাল রিটার্ন করে।",
          right: "void ইন্টারনালি undefined রিটার্ন করে, আর never কোনো কিছুই রিটার্ন করে না কারণ ফাংশনটি কখনোই শেষ হয় না।"
        }
      ]
    },
    quickRevision: [
      "void: ফাংশন শেষ হয় এবং `undefined` রিটার্ন করে (ইভেন্ট লগিং, সাইড ইফেক্টস).",
      "never: ফাংশন কখনোই শেষ হয় না (throw error বা infinite loop).",
      "never টাইপ কম্পাইলারকে আনরিচেবল কোড বাদ দিতে সাহায্য করে।",
      "void ভেরিয়েবলে undefined অ্যাসাইন করা যায়, never-এ কিছুই অ্যাসাইন করা যায় না।"
    ],
    followUpQuestions: [
      {
        question: "Difference between any, unknown, and never.",
        targetId: "ts-any-unknown-never",
        shortHint: "টাইপ হায়ারার্কি।"
      }
    ],
    tags: ["TypeScript", "Functions", "Return Types", "void", "never", "Control Flow"]
  }
];
