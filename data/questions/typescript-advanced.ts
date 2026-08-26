import { Question } from "@/types";

export const typescriptAdvancedQuestions: Question[] = [
  {
    id: "ts-mapped-types",
    slug: "ts-mapped-types",
    question: "Explain mapped types with an example in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Mapped Types হলো TypeScript-এর একটি মেকানিজম যার মাধ্যমে একটি বিদ্যমান টাইপের সমস্ত প্রোপার্টির ওপর লুপ চালিয়ে (ইটারেট করে) নতুন একটি টাইপ তৈরি করা যায়—ঠিক যেমন JavaScript-এ `Array.prototype.map()` প্রতিটি উপাদানের রূপান্তর ঘটায়। সিনট্যাক্সটি হলো `[K in keyof T]: NewType`।",
    easyExplanation: "সহজ ভাষায় বুঝুন:\n১. ধরুন আপনার কাছে একটি User টাইপ আছে যেখানে সব ফিল্ড সাধারণ: `{ name: string; age: number }`।\n২. এখন আপনার এমন একটি টাইপ লাগবে যেখানে সবগুলো ফিল্ড অপশনাল (`?`) হবে, অথবা সবগুলোর মান boolean হবে (`{ name: boolean; age: boolean }`), অথবা সবগুলো Readonly হবে।\n৩. ম্যানুয়ালি বারবার নতুন ইন্টারফেস না লিখে Mapped Type দিয়ে এক লাইনেই লুপ চালিয়ে সব প্রোপার্টিকে রূপান্তর করে ফেলা যায়।",
    interviewAnswer: "Mapped Types allow you to create new types based on an existing type by iterating over its keys using the index signature syntax `[K in keyof T]`. It functions like a map transformation over type properties, enabling modifiers such as adding/removing optionality (`?` or `-?`) and readonly flags (`readonly` or `-readonly`). TypeScript's built-in utility types like `Partial<T>`, `Required<T>`, `Readonly<T>`, and `Record<K, T>` are all built on top of Mapped Types.",
    detailedExplanation: {
      whatItIs: "টাইপস্ক্রিপ্টে অবজেক্ট টাইপের মেম্বারদের ট্রান্সফর্ম করার জেনেরিক মেটা-প্রোগ্রামিং টেকনিক।",
      whyItExists: "কোড ডুপ্লিকেশন ছাড়া অবজেক্ট টাইপ ভ্যারিয়েশন (যেমন ফর্ম স্টেট, পারমিশন ফ্ল্যাগ, পার্শিয়াল প্যাচ পেলোড) ডায়নামিকালি জেনারেট করতে।",
      howItWorks: "`keyof T` থেকে ইউনিয়ন অফ কিজ বের করে `in` কিওয়ার্ড দিয়ে প্রতিটির ওপর ইটারেট করা হয় এবং ভ্যালু টাইপ `T[K]` কে মডিফাই করা হয়।",
      whenToUse: "কাস্টম ইউটিলিটি টাইপস তৈরি, ফর্ম চেকবক্স স্টেট টাইপিং, গেটার/সেটার ইন্টারফেস জেনারেশনে।",
      keyPoints: [
        "Syntax: `type MyMapped<T> = { [K in keyof T]: Transformation }`",
        "Modifiers: `+?` / `-?` (Add/Remove optional), `+readonly` / `-readonly`.",
        "Built-in utilities (Partial, Readonly, Record) are implemented using mapped types."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `interface User {
  id: number;
  name: string;
  email: string;
}

// ১. কাস্টম Mapped Type: সমস্ত ফিল্ডকে Boolean ফ্ল্যাগে রূপান্তর (যেমন Form Dirty State)
type FormDirtyState<T> = {
  [K in keyof T]: boolean;
};

const userDirtyState: FormDirtyState<User> = {
  id: false,
  name: true,
  email: false
};

// ২. কীভাবে Partial<T> ইন্টারনালি কাজ করে (Mapped Type Implementation)
type CustomPartial<T> = {
  [K in keyof T]?: T[K]; // '?' দিয়ে প্রতিটি প্রোপার্টিকে অপশনাল করা হলো
};

// ৩. কীভাবে Required<T> কাজ করে ('-?' দিয়ে অপশনাল চিহ্ন সরানো)
type CustomRequired<T> = {
  [K in keyof T]-?: T[K]; // সব ফিল্ড বাধ্যতামূলক করা হলো
};`,
      explanationSteps: [
        {
          step: 1,
          title: "লুপ ও কি এক্সট্রাকশন",
          description: "K in keyof User প্রতিটি কি (id, name, email)-কে ক্রমানুসারে ধরে boolean টাইপে ম্যাপ করেছে।"
        },
        {
          step: 2,
          title: "মডিফায়ার প্রয়োগ",
          description: "-? ব্যবহারের মাধ্যমে বিদ্যমান অবজেক্টের সব অপশনাল প্রোপার্টিকে রিমুভ করে নিশ্চিত বাধ্যতামূলক করা হয়েছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Permission Matrix Generator",
        description: "`type Permissions<T> = { [K in keyof T as \`canEdit_\${string & K}\`]: boolean }`"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে দেখান কীভাবে `Partial<T>` ইন্টারনালি `[K in keyof T]?: T[K]` দিয়ে তৈরি হয়েছে। এটি আপনার ডিপ টাইপস্ক্রিপ্ট আন্ডারস্ট্যান্ডিং প্রমাণ করে।",
      deliveryStrategy: "সংজ্ঞা -> সিনট্যাক্স ব্রেকডাউন -> Partial/Required ইউটিলিটি কীভাবে তৈরি হয় তার কোড ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "Mapped Type শুধু অ্যারেতে কাজ করে।",
          right: "Mapped Type মূলত অবজেক্ট টাইপের কীগুলোর ওপর কম্পাইল টাইমে ইটারেট করে নতুন অবজেক্ট টাইপ তৈরি করে।"
        }
      ]
    },
    quickRevision: [
      "Mapped Type = `{ [K in keyof T]: NewType }` (টাইপের ওপর map লুপ).",
      "Partial, Required, Readonly, Record এগুলো সবই Mapped Type দিয়ে তৈরি।",
      "`+?` ও `-?` দিয়ে অপশনাল ফিল্ড যোগ বা অপসারণ করা যায়।",
      "`+readonly` ও `-readonly` দিয়ে রিড-অনলি ফ্ল্যাগ নিয়ন্ত্রণ করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "Difference between Partial, Required, Pick, Omit, Record.",
        targetId: "ts-partial-required-pick-omit-record",
        shortHint: "বিল্ট-ইন ইউটিলিটি টাইপস।"
      },
      {
        question: "What are conditional types in TypeScript?",
        targetId: "ts-conditional-types",
        shortHint: "কন্ডিশনাল টাইপ লজিক।"
      }
    ],
    tags: ["TypeScript", "Advanced Types", "Mapped Types", "Generics", "Utility Types"]
  },
  {
    id: "ts-conditional-types",
    slug: "ts-conditional-types",
    question: "What are conditional types in TypeScript?",
    category: "TypeScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Conditional Types হলো এমন একটি টাইপ মেকানিজম যা টার্নারি অপারেটরের (`T extends U ? X : Y`) মাধ্যমে ইনপুট টাইপের ওপর ভিত্তি করে ডায়নামিকালি আউটপুট টাইপ নির্বাচন করে। যদি টাইপ `T`, টাইপ `U`-কে অ্যাসাইন বা স্যাটিসফাই করে তবে টাইপ হবে `X`, অন্যথায় টাইপ হবে `Y`।",
    easyExplanation: "সহজ if-else শর্তের মতো বুঝুন:\nJavaScript-এ আমরা লিখি: `const result = age >= 18 ? 'Adult' : 'Minor';`\n\nTypeScript-এ টাইপের ক্ষেত্রেও ঠিক একইভাবে লেখা যায়:\n`type IsString<T> = T extends string ? true : false;`\n\n- `IsString<string>` দিলে পাবে `true`।\n- `IsString<number>` দিলে পাবে `false`।\n\nঅর্থাৎ কম্পাইল টাইমে টাইপের মানের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে ডিসিশন নেওয়ার উপায়ই হলো Conditional Types।",
    interviewAnswer: "Conditional Types in TypeScript introduce ternary-like branching logic into the type system using the syntax `T extends U ? X : Y`. When `T` is assignable to `U`, the type resolves to `X`; otherwise, it resolves to `Y`. Conditional types are particularly powerful because they distribute automatically over union types (Distributive Conditional Types) and enable type extraction when combined with the `infer` keyword.",
    detailedExplanation: {
      whatItIs: "টাইপ লেভেলে কন্ডিশনাল ব্রাঞ্চিং ও ফিল্টারিং মেকানিজম।",
      whyItExists: "ফাংশন রিটার্ন টাইপ, জেনেরিক প্যারামিটার এবং এপিআই রেসপন্সের জটিল টাইপ ডায়নামিকালি রেজলভ করতে।",
      howItWorks: "কম্পাইলার টাইপ রিলেশনশিপ পরীক্ষা করে। ইউনিয়নের ক্ষেত্রে প্রতিটা মেম্বারের ওপর আলাদা আলাদা শর্ত প্রয়োগ করে ফলাফল মার্জ করে (Distributive Property)।",
      whenToUse: "Exclude, Extract, NonNullable ইউটিলিটি টাইপ তৈরি, এবং পলিমরফিক ফাংশন টাইপিংয়ে।",
      keyPoints: [
        "Syntax: `T extends U ? TrueType : FalseType`",
        "Distributive over Unions: `(A | B) extends U ? X : Y` evaluates to `(A extends U ? X : Y) | (B extends U ? X : Y)`.",
        "Forms the foundation for `infer` keyword transformations."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. বেসিক কন্ডিশনাল টাইপ
type IsArray<T> = T extends any[] ? "Yes, it is an Array" : "No, it is not an Array";

type Test1 = IsArray<string[]>; // "Yes, it is an Array"
type Test2 = IsArray<number>;   // "No, it is not an Array"

// ২. Distributive Conditional Type (Exclude ইউটিলিটি কীভাবে কাজ করে)
type CustomExclude<T, U> = T extends U ? never : T;

type AvailableColors = "red" | "green" | "blue" | "yellow";
type NonPrimary = CustomExclude<AvailableColors, "red" | "blue">;
// Output: "green" | "yellow" (red ও blue বাদ হয়ে never হয়েছে, never ইউনিয়ন থেকে মুছে যায়)

// ৩. NonNullable ইউটিলিটি ইমপ্লিমেন্টেশন
type CustomNonNullable<T> = T extends null | undefined ? never : T;
type SafeString = CustomNonNullable<string | null | undefined>; // string`,
      explanationSteps: [
        {
          step: 1,
          title: "টার্নারি টাইপ ব্রাঞ্চিং",
          description: "T extends any[] শর্তটি চেক করে স্ট্রিং অ্যারের জন্য সত্য ব্রাঞ্চ নির্বাচন করেছে।"
        },
        {
          step: 2,
          title: "ইউনিয়ন ডিস্ট্রিবিউশন ও never",
          description: "Exclude-এ red এবং blue মিলে যাওয়ায় never হয়েছে, আর বাকিগুলো অপরিবর্তিত থেকেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Polymorphic Component Props in React",
        description: "React-এ `<Button as='a' href='...'>` হলে anchor ট্যাগের প্রপস এবং `<Button as='button'>` হলে button প্রপস দেওয়ার জন্য কন্ডিশনাল টাইপ ব্যবহার।"
      }
    ],
    interviewTips: {
      tip: "কন্ডিশনাল টাইপ কীভাবে ইউনিয়নের ওপর ডিস্ট্রিবিউট করে (`Exclude<T, U>` উদাহরণ) তা ব্যাখ্যা করলে ইন্টারভিউয়ার বুঝতে পারবেন আপনার টাইপস্ক্রিপ্ট বেস অনেক শক্তিশালী।",
      deliveryStrategy: "টার্নারি সিনট্যাক্স -> ডিস্ট্রিবিউটিভ প্রোপার্টি -> Exclude/NonNullable এর কোড উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "কন্ডিশনাল টাইপ রানটাইমে ডেটা চেক করে।",
          right: "কন্ডিশনাল টাইপ সম্পূর্ণ কম্পাইল-টাইম মেকানিজম, রানটাইমে কোনো জাভাস্ক্রিপ্ট কোড তৈরি করে না।"
        }
      ]
    },
    quickRevision: [
      "Conditional Types: `T extends U ? X : Y` (Type-level ternary).",
      "Distributive: ইউনিয়নের প্রতিটি মেম্বারে আলাদাভাবে শর্ত প্রযোজ্য হয়।",
      "Exclude, Extract, NonNullable এই নিয়মে তৈরি।",
      "`infer` কিওয়ার্ডের সাথে মিলিয়ে জটিল টাইপ এক্সট্রাক্ট করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "How does infer work in TypeScript?",
        targetId: "ts-infer-keyword",
        shortHint: "কন্ডিশনাল টাইপের ভেতর থেকে টাইপ এক্সট্রাকশন।"
      }
    ],
    tags: ["TypeScript", "Advanced Types", "Conditional Types", "Generics", "Exclude"]
  },
  {
    id: "ts-infer-keyword",
    slug: "ts-infer-keyword",
    question: "How does the infer keyword work in TypeScript?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "`infer` কিওয়ার্ডটি TypeScript-এ Conditional Types-এর `extends` ক্লজের মধ্যে ব্যবহৃত হয় এমন একটি ভ্যারিয়েবল ডিক্লেয়ার করার জন্য, যা কোনো অজানা বা জটিল টাইপের ভেতরের অভ্যন্তরীণ সাব-টাইপকে (যেমন ফাংশনের ReturnType, Parameters, বা Promise-এর ভেতরের রেজলভড টাইপ `Awaited<T>`) স্বয়ংক্রিয়ভাবে অনুমান (deduce/extract) করে বের করে আনে।",
    easyExplanation: "সহজ এক্স-রে মেশিনের মতো বুঝুন:\n১. ধরুন আপনার কাছে একটি বক্স বা ক্যাপসুল আছে (যেমন `Promise<User>` বা একটি ফাংশন `() => string[]`)।\n২. আপনি বক্সের বাইরের অংশ চান না, আপনি চান বক্সের ভেতরে কী ডেটা আছে তা বের করে আনতে।\n৩. `infer R` হলো এমন একটি লেবেল যা কম্পাইলারকে বলে: 'তুমি এই ভেতরের টাইপটা নিজে দেখে নাও এবং তার নাম দাও `R`। এরপর শর্ত সত্য হলে ওই `R`-কে আমাকে ফেরত দাও!'\n৪. ফলে `Promise<User>` থেকে সরাসরি `User` এবং ফাংশন থেকে তার রিটার্ন টাইপ সহজে এক্সট্রাক্ট করা যায়।",
    interviewAnswer: "The `infer` keyword is used exclusively within the `extends` clause of Conditional Types to declare a type variable that TypeScript will deduce/extract from another type. Instead of manually passing the type parameter, `infer` asks the compiler: 'look at the structural position of this type and infer what fits here'. It is the backbone of TypeScript utilities like `ReturnType<T>`, `Parameters<T>`, `Awaited<T>`, and `InstanceType<T>`.",
    detailedExplanation: {
      whatItIs: "কন্ডিশনাল টাইপের ভেতরে টাইপ প্যাটার্ন ম্যাচিং ও সাব-টাইপ এক্সট্রাকশন টুল।",
      whyItExists: "থার্ড-পার্টি ফাংশন বা জটিল জেনেরিক অবজেক্টের ভেতরের হিডেন টাইপ ম্যানুয়ালি রি-ডিক্লেয়ার না করে সরাসরি এক্সট্রাক্ট করতে।",
      howItWorks: "কম্পাইলার প্যাটার্ন ম্যাচ করে; যদি ইনপুট টাইপ প্যাটার্নের সাথে মিলে যায়, তবে `infer` চিহ্নিত স্লটের টাইপটি ভ্যারিয়েবলে বাইন্ড হয়ে ট্রু ব্রাঞ্চে চলে যায়।",
      whenToUse: "Promise আন-র‍্যাপিং, ফাংশন আর্গুমেন্ট টাইপ এক্সট্রাকশন, এবং Redux/Zustand অ্যাকশন টাইপ ড্রাইভ করতে।",
      keyPoints: [
        "Can ONLY be used in the `extends` clause of conditional types.",
        "Allows pattern matching on function signatures, promises, arrays, etc.",
        "Built-in utilities: `ReturnType<T>`, `Parameters<T>`, `Awaited<T>`."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. কীভাবে ReturnType<T> ইন্টারনালি কাজ করে (Using infer)
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUserProfile() {
  return { id: 101, username: "shuvo_dev", isPro: true };
}

// ফাংশনের রিটার্ন টাইপ স্বয়ংক্রিয়ভাবে এক্সট্রাক্ট হলো
type UserProfile = CustomReturnType<typeof fetchUserProfile>;
// Result: { id: number; username: string; isPro: boolean }

// ২. কীভাবে Promise-এর ভেতরের টাইপ বের করা হয় (Unwrap Promise / Awaited)
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type ApiPromise = Promise<{ token: string; expires: number }>;
type ResolvedData = UnwrapPromise<ApiPromise>;
// Result: { token: string; expires: number }

// ৩. অ্যারের উপাদানের টাইপ বের করা
type ArrayElement<T> = T extends (infer E)[] ? E : never;
type NumberItem = ArrayElement<number[]>; // number`,
      explanationSteps: [
        {
          step: 1,
          title: "ফাংশন সিগনেচার প্যাটার্ন ম্যাচিং",
          description: "(...args: any[]) => infer R প্যাটার্নের মাধ্যমে কম্পাইলার রিটার্ন পজিশনের টাইপকে R হিসেবে ধরে নিয়েছে।"
        },
        {
          step: 2,
          title: "প্রমিজ আন-র‍্যাপ",
          description: "Promise<infer U> সফলভাবে প্রমিজ বক্সের ভেতরের ডেটা অবজেক্টটিকে আলাদা করে এনেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "API Endpoint Response Typing",
        description: "ব্যাকএন্ড সার্ভিস ফাংশনের রিটার্ন টাইপ থেকে ফ্রন্টএন্ড স্টেট ইন্টারফেস তৈরি করা: `type UserResponse = ReturnType<typeof api.getUser>;`।"
      }
    ],
    interviewTips: {
      tip: "`ReturnType<T>` এবং `Awaited<T>` ইউটিলিটির ভেতরের কোড লিখে বুঝিয়ে দিন। এটি ইন্টারভিউতে সর্বোচ্চ স্কোর নিশ্চিত করে।",
      deliveryStrategy: "সংজ্ঞা -> এক্সট্রাকশন উপমা -> ReturnType ও UnwrapPromise কোড উদাহরণ -> বাস্তব API টাইপিংয়ের ব্যবহার বলুন।",
      avoidSaying: [
        {
          wrong: "infer যেকোনো সাধারণ ইন্টারফেসে সরাসরি ব্যবহার করা যায়।",
          right: "infer শুধুমাত্র Conditional Types-এর extends ক্লজের ভেতরেই কাজ করে।"
        }
      ]
    },
    quickRevision: [
      "infer = কন্ডিশনাল টাইপের ভেতর অজানা টাইপ এক্সট্রাক্ট করার মেকানিজম।",
      "প্যাটার্ন ম্যাচিংয়ের মতো কাজ করে (`Promise<infer T>` -> `T`).",
      "ReturnType, Parameters, Awaited এর মতো কোর ইউটিলিটির ফাউন্ডেশন।",
      "শুধুমাত্র `extends` ক্লজে ব্যবহৃত হতে পারে।"
    ],
    followUpQuestions: [
      {
        question: "Difference between Partial, Required, Pick, Omit, Record.",
        targetId: "ts-partial-required-pick-omit-record",
        shortHint: "কোর ইউটিলিটি টাইপস।"
      }
    ],
    tags: ["TypeScript", "Advanced Types", "infer", "ReturnType", "Generics"]
  },
  {
    id: "ts-partial-required-pick-omit-record",
    slug: "ts-partial-required-pick-omit-record",
    question: "Difference between Partial, Required, Pick, Omit, and Record in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "১. `Partial<T>`: সমস্ত প্রোপার্টিকে অপশনাল (`?`) করে।\n২. `Required<T>`: সমস্ত প্রোপার্টিকে বাধ্যতামূলক (Required) করে।\n৩. `Pick<T, K>`: একটি অবজেক্ট থেকে নির্দিষ্ট কিছু প্রোপার্টি বেছে নিয়ে নতুন টাইপ তৈরি করে।\n৪. `Omit<T, K>`: একটি অবজেক্ট থেকে নির্দিষ্ট কিছু প্রোপার্টি বাদ দিয়ে বাকিগুলো নিয়ে টাইপ তৈরি করে।\n৫. `Record<K, T>`: নির্দিষ্ট কী (Key) এবং নির্দিষ্ট মানের (Value) অবজেক্ট ডিকশনারি বা ম্যাপ তৈরি করে।",
    easyExplanation: "সহজ চার্টে মনে রাখুন:\n\n- `Partial<User>`: User-এর যেকোনো ফিল্ড দিলেও হবে, না দিলেও চলবে (যেমন Profile Update Form)।\n- `Required<User>`: কোনো ফিল্ড মিসিং থাকা চলবে না, সব পূরণ করতে হবে।\n- `Pick<User, 'name' | 'email'>`: User-এর অনেক ফিল্ড আছে, কিন্তু আমি শুধু নাম আর ইমেইল নেব (Shopping Card Header)।\n- `Omit<User, 'password'>`: পাসওয়ার্ড ফিল্ডটা বাদ দিয়ে User-এর বাকি সব ফিল্ড নিয়ে আসব (Safe User Object)।\n- `Record<string, User>` বা `Record<'admin' | 'guest', Permissions>`: নির্দিষ্ট চাবি এবং মান দিয়ে ডিকশনারি অবজেক্ট বানানো।",
    interviewAnswer: "TypeScript provides these essential utility types for object transformations:\n1. `Partial<T>`: Makes all properties in T optional (`?`).\n2. `Required<T>`: Makes all properties in T strictly required (`-?`).\n3. `Pick<T, K>`: Constructs a type by picking a subset of keys `K` from `T`.\n4. `Omit<T, K>`: Constructs a type by picking all properties from `T` and then removing `K`.\n5. `Record<K, T>`: Constructs an object type whose property keys are `K` and whose property values are `T`.",
    detailedExplanation: {
      whatItIs: "TypeScript স্ট্যান্ডার্ড লাইব্রেরির ৫টি বহুল ব্যবহৃত বিল্ট-ইন ইউটিলিটি টাইপ।",
      whyItExists: "একই ইন্টারফেসের বিভিন্ন রূপ তৈরি করার সময় বারবার নতুন কোড লেখার ঝামেলা (DRY ভায়োলেশন) দূর করতে।",
      howItWorks: "Partial এবং Required ম্যাপড টাইপ মডিফায়ার ব্যবহার করে। Pick এবং Record ইনডেক্সিং করে। Omit মূলত `Pick<T, Exclude<keyof T, K>>` এর ওপর নির্ভরশীল।",
      whenToUse: "PATCH API রিকোয়েস্টে Partial, পাসওয়ার্ড বাদ দিতে Omit, ইউজার টেবিল লিস্টে Pick, এবং কনফিগারেশন ম্যাপে Record।",
      keyPoints: [
        "Partial: All optional.",
        "Required: All mandatory.",
        "Pick: Select specific keys.",
        "Omit: Remove specific keys.",
        "Record: Key-Value dictionary mapping."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
}

// ১. Partial: PATCH Request Payload (যেকোনো ফিল্ড আসতে পারে)
type UpdateUserDto = Partial<User>;

// ২. Required: সব অপশনাল ফিল্ড বাধ্যতামূলক
type CompleteUser = Required<User>; // avatarUrl বাধ্যতামূলক

// ৩. Pick: ইউজার কার্ডে শুধু নাম ও ইমেইল দেখানো
type UserCardProps = Pick<User, "name" | "email">;

// ৪. Omit: ক্লায়েন্টকে পাঠানোর জন্য নিরাপদ ইউজার (পাসওয়ার্ড ছাড়া)
type SafeUser = Omit<User, "passwordHash">;

// ৫. Record: রোল অনুযায়ী ইউজার তালিকা ম্যাপ করা
type UserRoles = "superadmin" | "editor" | "subscriber";
const roleDescriptions: Record<UserRoles, string> = {
  superadmin: "Full administrative access",
  editor: "Can create and publish posts",
  subscriber: "Read-only access"
};`,
      explanationSteps: [
        {
          step: 1,
          title: "Partial এর নমনীয়তা",
          description: "UpdateUserDto-তে যেকোনো একটি বা একাধিক প্রোপার্টি পাঠানো সম্ভব।"
        },
        {
          step: 2,
          title: "Omit এর নিরাপত্তা",
          description: "SafeUser টাইপে passwordHash ফিল্ডটি সম্পূর্ণ বাদ হয়ে যাওয়ায় পাসওয়ার্ড লিক হওয়ার ঝুঁকি কমে।"
        },
        {
          step: 3,
          title: "Record এর টাইপ সেফ ডিকশনারি",
          description: "Record নিশ্চিত করেছে যে ৩টি রোলের প্রতিটির জন্যই বিবরণ অবজেক্টে উপস্থিত থাকতে হবে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Prisma & Backend DTOs",
        description: "`type CreatePostInput = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>;`"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Omit is implemented using Pick and Exclude: `type Omit<T, K> = Pick<T, Exclude<keyof T, K>>`' — এই টেকনিক্যাল পয়েন্টটি খুবই ইমপ্রেসিভ!",
      deliveryStrategy: "৫টি ইউটিলিটির প্রতিটির ১ লাইনের সংজ্ঞা -> রিয়েল ওয়ার্ল্ড DTO ও SafeUser ব্যবহারের উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "Pick এবং Omit একই কাজ করে।",
          right: "Pick নির্দিষ্ট ফিল্ড গ্রহণ করে বাকি সব ফেলে দেয়, আর Omit নির্দিষ্ট ফিল্ড ফেলে দিয়ে বাকি সব গ্রহণ করে।"
        }
      ]
    },
    quickRevision: [
      "Partial<T> = সব ফিল্ড অপশনাল (`?`).",
      "Required<T> = সব ফিল্ড বাধ্যতামূলক (`-?`).",
      "Pick<T, 'a' | 'b'> = নির্দিষ্ট ফিল্ড বাছাই করা।",
      "Omit<T, 'secret'> = নির্দিষ্ট ফিল্ড বাদ দেওয়া।",
      "Record<Keys, Values> = Key-Value অবজেক্ট ডিকশনারি।"
    ],
    followUpQuestions: [
      {
        question: "Explain keyof and typeof together in TypeScript.",
        targetId: "ts-keyof-and-typeof",
        shortHint: "অবজেক্ট কি ও টাইপ এক্সট্রাকশন।"
      }
    ],
    tags: ["TypeScript", "Utility Types", "Partial", "Pick", "Omit", "Record"]
  },
  {
    id: "ts-keyof-and-typeof",
    slug: "ts-keyof-and-typeof",
    question: "Explain keyof and typeof together in TypeScript.",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "JavaScript রানটাইম ভ্যালু থেকে টাইপস্ক্রিপ্ট টাইপ তৈরি করার জন্য `typeof` ব্যবহার করা হয় এবং কোনো অবজেক্ট টাইপের সমস্ত কী (Keys)-গুলোকে স্ট্রিং লিটারেল ইউনিয়ন হিসেবে এক্সট্রাক্ট করার জন্য `keyof` ব্যবহার করা হয়। এই দুটিকে একসাথে `keyof typeof obj` হিসেবে ব্যবহার করলে কোনো সাধারণ জাভাস্ক্রিপ্ট অবজেক্ট বা কনফিগারেশনের কী-গুলোর একটি পারফেক্ট অটোমেটিক টাইপ ইউনিয়ন পাওয়া যায়।",
    easyExplanation: "সহজ দুই ধাপে বুঝুন:\n১. `typeof config`: জাভাস্ক্রিপ্টের আসল `config` অবজেক্টটির হুবহু গঠন দেখে একটি TypeScript Type তৈরি করে।\n২. `keyof (সেই টাইপ)`: ওই টাইপের ভেতরের সব প্রোপার্টির নামগুলোকে নিয়ে একটি Union (`'theme' | 'apiUrl' | 'version'`) তৈরি করে।\n\nকেন এটি এত জনপ্রিয়?\nকারণ আপনাকে আলাদা করে কোনো নতুন Interface লিখতে হয় না। আপনি সাধারণ একটি JS অবজেক্ট লিখবেন, আর `keyof typeof` দিয়ে সরাসরি তার ১০০% নির্ভুল টাইপ পেয়ে যাবেন!",
    interviewAnswer: "In TypeScript, `typeof` (in type space) extracts the static TypeScript type of a runtime JavaScript object or variable. `keyof` takes an object type and produces a string or numeric literal union of its keys. When combined as `keyof typeof runtimeObject`, TypeScript automatically inspects a runtime object, derives its type, and extracts all its valid property names as a strict union type—eliminating manual type duplication and keeping types perfectly synchronized with runtime data.",
    detailedExplanation: {
      whatItIs: "রানটাইম ভ্যালু থেকে টাইপস্পেসে কী-ইউনিয়ন এক্সট্রাক্ট করার সবচেয়ে কার্যকরী প্যাটার্ন।",
      whyItExists: "Single Source of Truth বজায় রাখতে; অবজেক্টে নতুন প্রোপার্টি যোগ করলে টাইপ যেন নিজে নিজেই আপডেট হয়ে যায়।",
      howItWorks: "১. `typeof val` -> অবজেক্ট শেইপ টাইপ তৈরি হয়। ২. `keyof Type` -> কীগুলোর লিটারেল ইউনিয়ন বের হয়।",
      whenToUse: "থিম কালার কনফিগারেশন, রুট পাথ অবজেক্ট, এনাম্স রিপ্লেসমেন্ট এবং ইভেন্ট হ্যান্ডলার কী বাইন্ডিংয়ে।",
      keyPoints: [
        "`typeof` converts runtime value -> TypeScript type.",
        "`keyof` converts object type -> Union of its keys.",
        "`keyof typeof` creates dynamic key unions directly from runtime objects."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. রানটাইম কনফিগারেশন অবজেক্ট
const THEME_CONFIG = {
  primary: "#3b82f6",
  secondary: "#64748b",
  success: "#22c55e",
  danger: "#ef4444"
} as const; // as const দিলে মানগুলো readonly literals হয়ে যায়

// ২. typeof THEME_CONFIG -> অবজেক্টের টাইপ
// ৩. keyof typeof THEME_CONFIG -> "primary" | "secondary" | "success" | "danger"
type ThemeVariant = keyof typeof THEME_CONFIG;

// ৪. ভ্যালুর টাইপ এক্সট্রাক্ট করার উপায় (Indexed Access)
type ThemeColorHex = (typeof THEME_CONFIG)[ThemeVariant];
// Result: "#3b82f6" | "#64748b" | "#22c55e" | "#ef4444"

function applyButtonTheme(variant: ThemeVariant) {
  const color = THEME_CONFIG[variant];
  console.log(\`Applying \${variant} color: \${color}\`);
}

applyButtonTheme("primary"); // ✅ Valid
// applyButtonTheme("warning"); // ❌ Error: Argument of type '"warning"' is not assignable`,
      explanationSteps: [
        {
          step: 1,
          title: "as const অ্যাসোসিয়িয়েশন",
          description: "as const ভ্যালুগুলোকে সাধারণ string না রেখে নির্দিষ্ট হেক্স কোড লিটারেল হিসেবে লক করে দেয়।"
        },
        {
          step: 2,
          title: "কী ইউনিয়ন এক্সট্রাকশন",
          description: "ThemeVariant স্বয়ংক্রিয়ভাবে 'primary' | 'secondary' | 'success' | 'danger' ইউনিয়ন পেয়ে যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Type-Safe Routing Paths",
        description: "`const ROUTES = { HOME: '/', LOGIN: '/login', DASHBOARD: '/dashboard' } as const; type AppRoute = typeof ROUTES[keyof typeof ROUTES];`"
      }
    ],
    interviewTips: {
      tip: "`as const` (const assertion)-এর গুরুত্ব উল্লেখ করুন। কারণ `as const` ছাড়া TS প্রোপার্টি ভ্যালুগুলোকে জেনেরিক `string` ধরে নেয়।",
      deliveryStrategy: "typeof এর কাজ -> keyof এর কাজ -> দুটির কম্বিনেশন -> `as const` এর সাথে কালার প্যালেট উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "typeof শুধুমাত্র জাভাস্ক্রিপ্ট রানটাইমে স্ট্রিং চেক করতে ব্যবহৃত হয়।",
          right: "জাভাস্ক্রিপ্ট রানটাইমে typeof স্ট্রিং দিলেও, টাইপস্ক্রিপ্ট টাইপ স্পেসে typeof যেকোনো ভ্যারিয়েবলের পূর্ণাঙ্গ টাইপ এক্সট্রাক্ট করে।"
        }
      ]
    },
    quickRevision: [
      "typeof (in TS): Value -> Type রূপান্তর করে।",
      "keyof: Type -> Key Union রূপান্তর করে।",
      "`keyof typeof obj` = অবজেক্টের কীগুলোর অটোমেটিক টাইপ ইউনিয়ন।",
      "সেরা কম্বিনেশন: `const obj = { ... } as const` + `keyof typeof obj`।"
    ],
    followUpQuestions: [
      {
        question: "What is discriminated union and where is it useful?",
        targetId: "ts-discriminated-unions",
        shortHint: "ডিসক্রিমিনেটেড ইউনিয়ন।"
      }
    ],
    tags: ["TypeScript", "Advanced Types", "keyof", "typeof", "as const"]
  },
  {
    id: "ts-discriminated-unions",
    slug: "ts-discriminated-unions",
    question: "What is a discriminated union and where is it useful in TypeScript?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Discriminated Union (বা Tagged Union) হলো এমন একটি প্যাটার্ন যেখানে একাধিক অবজেক্ট টাইপের মধ্যে একটি কমন লিটারেল প্রোপার্টি (যাকে 'Discriminant' বা 'Tag' বলা হয়, যেমন `status` বা `type` বা `kind`) থাকে। TypeScript এই ট্যাগ ফিল্ডটি পরীক্ষা করার মাধ্যমে if-else বা switch ব্লকে স্বয়ংক্রিয়ভাবে নিশ্চিতভাবে টাইপ ন্যারো (Narrow) করে এবং ভুল ডেটা এক্সেস সম্পূর্ণ বন্ধ করে।",
    easyExplanation: "সহজ ভাষায় বুঝুন:\nধরুন আপনি একটি API কল করছেন:\n১. যদি রিকোয়েস্ট সফল হয়, তবে `{ status: 'success', data: [...] }` আসবে।\n২. যদি ফেইল করে, তবে `{ status: 'error', errorMessage: '...' }` আসবে।\n৩. যদি লোডিং হয়, তবে `{ status: 'loading' }` আসবে।\n\nএখানে `status` হলো ডিসক্রিমিন্যান্ট বা ট্যাগ।\n- আপনি যখন `if (res.status === 'success')` লিখবেন, TypeScript সাথে সাথে নিশ্চিত হবে যে এর ভেতর `data` আছে এবং সেখানে কোনো `errorMessage` নেই।\n- এর ফলে 'Cannot read properties of undefined' এর মতো রানটাইম ক্র্যাশ হওয়া ১০০% বন্ধ হয়ে যায়!",
    interviewAnswer: "A Discriminated Union (also known as Tagged Union or Algebraic Data Type) is an advanced pattern consisting of a union of object types that each share a common literal property—the discriminant. When you evaluate the discriminant property using conditional branches or switch statements, TypeScript's control flow analysis automatically narrows the union down to the specific variant, guaranteeing type safety and enabling exhaustive checks.",
    detailedExplanation: {
      whatItIs: "কমন লিটারেল কী দিয়ে টাইপ ভ্যারিয়েন্ট আলাদা করার প্যাটার্ন।",
      whyItExists: "জাভাস্ক্রিপ্ট অ্যাপ্লিকেশনে জটিল স্টেট ম্যানেজমেন্ট, রিমোট ডেটা ফেচিং এবং ইভেন্ট প্রসেসিং টাইপ-সেফ করতে।",
      howItWorks: "কম্পাইলার কমন প্রোপার্টির মান চেক করে অন্য সব ব্রাঞ্চ বাতিল করে এবং নির্দিষ্ট অবজেক্ট শেপ নিশ্চিত করে।",
      whenToUse: "Redux Actions, Network State (`loading | success | error`), Payment Gateway Responses, Form Multi-step wizards।",
      keyPoints: [
        "Shared literal discriminant property (e.g. `type`, `status`, `kind`).",
        "Control flow analysis eliminates impossible states.",
        "Combine with `never` for 100% exhaustive compile-time checking."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. Discriminated Union Definition
type PaymentResult =
  | { status: "success"; transactionId: string; amount: number }
  | { status: "failed"; errorCode: number; reason: string }
  | { status: "pending"; estimatedTime: string };

function handlePaymentResponse(result: PaymentResult) {
  // 'status' প্রোপার্টি দিয়ে টাইপ ন্যারোয়িং
  switch (result.status) {
    case "success":
      // TS জানে এখানে transactionId এবং amount আছে
      console.log(\`Success! TxID: \${result.transactionId}, Paid: $\${result.amount}\`);
      break;

    case "failed":
      // TS জানে এখানে errorCode এবং reason আছে
      console.error(\`Failed! Code: \${result.errorCode}, Reason: \${result.reason}\`);
      break;

    case "pending":
      console.log(\`Payment pending. Wait \${result.estimatedTime}\`);
      break;
  }
}`,
      explanationSteps: [
        {
          step: 1,
          title: "কমন ট্যাগ ডিফাইন",
          description: "PaymentResult-এর ৩টি অবজেক্টেই status ফিল্ডটি কমন লিটারেল হিসেবে বিদ্যমান।"
        },
        {
          step: 2,
          title: "কন্ট্রোল ফ্লো টাইপ ন্যারোয়িং",
          description: "switch(result.status) এর ভেতরে প্রতিটি কেসে TypeScript শুধু সংশ্লিষ্ট ভ্যালিড প্রোপার্টিগুলোর অ্যাক্সেস দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Redux Action Dispatcher",
        description: "`type Action = { type: 'ADD_TODO'; payload: Todo } | { type: 'TOGGLE_TODO'; id: string };`"
      },
      {
        title: "React Query / Async State",
        description: "`type AsyncData<T> = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: Error };`"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে 'Impossible States are impossible to represent' এই বাক্যটি বলুন—অর্থাৎ ডিসক্রিমিনেটেড ইউনিয়ন এমনভাবে তৈরি করা যায় যাতে ভুল স্টেট (যেমন Success অথচ data undefined) সংজ্ঞায়িত করাই অসম্ভব হয়ে যায়।",
      deliveryStrategy: "সংজ্ঞা ও ট্যাগ ধারণা -> PaymentResult বা AsyncData কোড উদাহরণ -> Redux ও React-এ ব্যবহারের প্রয়োজনীয়তা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "ডিসক্রিমিনেটেড ইউনিয়নে যেকোনো প্রোপার্টি ব্যবহার করা যায়।",
          right: "ডিসক্রিমিন্যান্ট হিসেবে অবশ্যই একটি কমন লিটারেল প্রোপার্টি (string/number/boolean literal) থাকতে হয়।"
        }
      ]
    },
    quickRevision: [
      "Discriminated Union = কমন লিটারেল ট্যাগ (`status` বা `type`) যুক্ত অবজেক্ট ইউনিয়ন।",
      "if/switch দিয়ে চেক করলেই TS নিজে থেকে টাইপ ন্যারো করে।",
      "Cannot read properties of undefined এরর চিরতরে বন্ধ করে।",
      "Redux Actions, Network State এবং Form Wizards-এর জন্য আদর্শ।"
    ],
    followUpQuestions: [
      {
        question: "Difference between any, unknown, and never.",
        targetId: "ts-any-unknown-never",
        shortHint: "never দিয়ে exhaustive check।"
      }
    ],
    tags: ["TypeScript", "Advanced Types", "Discriminated Union", "Pattern Matching", "State Management"]
  }
];
