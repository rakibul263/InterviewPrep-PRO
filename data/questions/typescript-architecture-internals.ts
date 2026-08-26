import { Question } from "@/types";

export const typescriptArchitectureInternalsQuestions: Question[] = [
  {
    id: "ts-compile-to-js-internals",
    slug: "ts-compile-to-js-internals",
    question: "How does TypeScript compile to JavaScript and what happens to types at runtime?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "TypeScript কম্পাইলার (`tsc`) কোড প্রসেস করার সময় দুটি প্রধান কাজ করে: ১. Type Checking (টাইপ সঠিক কি না পরীক্ষা করা) এবং ২. Type Erasure / Transpilation (সমস্ত টাইপ, ইন্টারফেস ও জেনেরিক্স কোড থেকে সম্পূর্ণ মুছে ফেলে খাঁটি জাভাস্ক্রিপ্ট তৈরি করা)। রানটাইমে কোনো টাইপ অবশিষ্ট থাকে না (Zero Runtime Overhead); অর্থাৎ রানটাইমে টাইপস্ক্রিপ্ট কোড অবিকল সাধারণ জাভাস্ক্রিপ্টের মতো রান করে।",
    easyExplanation: "সহজ বাড়ি বানানোর ব্লু-প্রিন্টের মতো বুঝুন:\n১. রাজমিস্ত্রি যখন বাড়ি তৈরি করে, তখন তার কাছে একটি ব্লু-প্রিন্ট বা নকশা (TypeScript Types) থাকে যাতে কোনো দেয়াল ভুল জায়গায় না ওঠে।\n২. বাড়ি তৈরি শেষ হওয়ার পর ব্লু-প্রিন্টটি ফাইলে তুলে রাখা হয়। মূল বিল্ডিংয়ে (Runtime JavaScript) কোনো কাগজের নকশা ঝুলিয়ে রাখতে হয় না!\n৩. ঠিক একইভাবে, কোডিং করার সময় এবং বিল্ড করার সময় TypeScript সমস্ত টাইপ এরর চেক করে। কিন্তু ব্রাউজারে চালানোর জন্য যে `.js` ফাইল তৈরি হয়, সেখানে কোনো `interface`, `type` বা `<T>` থাকে না। সবকিছু সাধারণ JS কোড হিসেবে চলে।",
    interviewAnswer: "TypeScript compilation is a two-step process: Type Analysis and Code Transformation (Transpilation). The TypeScript compiler (`tsc`) parses the code into an Abstract Syntax Tree (AST), performs static type checking, and then strips away all type annotations, interfaces, type aliases, and generic declarations via 'Type Erasure'. At runtime, TypeScript types do NOT exist; JavaScript engines execute plain JavaScript without any runtime type-checking overhead.",
    detailedExplanation: {
      whatItIs: "টাইপস্ক্রিপ্টের স্ট্যাটিক কম্পাইলেশন আর্কিটেকচার এবং টাইপ ইরেজার মেকানিজম।",
      whyItExists: "ব্রাউজার ও Node.js ইঞ্জিনগুলো শুধুমাত্র খাঁটি JavaScript চেনে; টাইপস্ক্রিপ্ট শূন্য রানটাইম পারফরম্যান্স পেনাল্টি সহ টাইপ সেফটি দেওয়ার জন্য টাইপ ইরেজার নীতি অনুসরণ করে।",
      howItWorks: "`tsc` স্ক্যানার ও পার্সার দিয়ে AST তৈরি করে, চেকার দিয়ে টাইপ ভ্যালিডেট করে এবং এমিটার (Emitter) দিয়ে টাইপগুলো বাদ দিয়ে টার্গেট JS (ES6/ES2022) ফাইল তৈরি করে।",
      whenToUse: "Babel, esbuild, SWC এবং Vite শুধুমাত্র দ্রুত টাইপ স্ট্রিপিং করে, আর `tsc --noEmit` আলাদাভাবে টাইপ চেক করে।",
      keyPoints: [
        "Type Erasure: Types are completely removed in emitted JS.",
        "Zero Runtime Cost: Types do not impact application execution speed.",
        "Runtime validations require libraries like Zod, Yup, or manual Type Guards."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. ইনপুট TypeScript কোড (.ts)
interface User {
  id: number;
  name: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}\`;
}

// ২. কম্পাইল হওয়ার পর আউটপুট খাঁটি JavaScript (.js)
/*
function greetUser(user) {
  return \`Hello, \${user.name}\`;
}
*/
// দ্রষ্টব্য: interface User এবং ': User', ': string' টাইপ অ্যানোটেশনগুলো সম্পূর্ণ মুছে গেছে!`,
      explanationSteps: [
        {
          step: 1,
          title: "টাইপ চেকিং ফেজ",
          description: "বিল্ড টাইমে greetUser({ id: 1 }) কল করলে name মিসিং থাকার কারণে কম্পাইলার সাথে সাথে এরর দেবে।"
        },
        {
          step: 2,
          title: "টাইপ ইরেজার আউটপুট",
          description: "কম্পাইল্ড জাভাস্ক্রিপ্ট ফাইলে টাইপের কোনো চিহ্ন না থাকায় ব্রাউজার সর্বোচ্চ গতিতে কোড রান করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Next.js / Vite Build Pipeline",
        description: "Next.js বা Vite টার্বোপ্যাক ও SWC ব্যবহার করে মিলি-সেকেন্ডে টাইপ মুছে JS বানায় এবং ব্যাকগ্রাউন্ডে টাইপ চেক চালায়।"
      }
    ],
    interviewTips: {
      tip: "'Type Erasure' এবং 'Zero Runtime Overhead' কথাগুলো ইন্টারভিউতে স্পষ্টভাবে বলুন। মনে রাখবেন: `typeof myInterface` রানটাইমে কাজ করে না কারণ ইন্টারফেস রানটাইমে থাকেই না।",
      deliveryStrategy: "সংজ্ঞা -> টাইপ ইরেজার মেকানিজম -> রানটাইম ইমপ্যাক্ট (Zero cost) -> কেন Zod-এর মতো রানটাইম ভ্যালিডেটর দরকার হয় তা বুঝিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "টাইপস্ক্রিপ্ট রানটাইমে টাইপ চেক করে ডেটা সেফ রাখে।",
          right: "টাইপস্ক্রিপ্ট শুধুমাত্র কম্পাইল টাইমে টাইপ চেক করে; রানটাইমে কোনো টাইপ ভ্যালিডেশন স্বয়ংক্রিয়ভাবে ঘটে না।"
        }
      ]
    },
    quickRevision: [
      "TypeScript = Compile-time Type Checker + Transpiler.",
      "Type Erasure: সমস্ত Types, Interfaces ও Generics মুছে যায়।",
      "রানটাইমে Zero Performance Cost.",
      "রানটাইমে ভ্যালিডেশনের জন্য Type Guards বা Zod ব্যবহার করতে হয়।"
    ],
    followUpQuestions: [
      {
        question: "How would you handle unknown backend data in TypeScript?",
        targetId: "ts-handle-unknown-backend-data",
        shortHint: "রানটাইম স্কিমা ভ্যালিডেশন।"
      }
    ],
    tags: ["TypeScript", "Internals", "Compiler", "Type Erasure", "Transpilation"]
  },
  {
    id: "ts-handle-unknown-backend-data",
    slug: "ts-handle-unknown-backend-data",
    question: "How would you handle unknown backend data safely using TypeScript & Zod?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "যেহেতু TypeScript টাইপগুলো রানটাইমে থাকে না, তাই ব্যাকএন্ড API থেকে আসা রেসপন্সকে কখনই সরাসরি `as MyType` দিয়ে জোরপূর্বক কাস্ট করা উচিত নয়। সঠিক পদ্ধতি হলো: API ডেটাকে প্রথমে `unknown` টাইপ হিসেবে গ্রহণ করা এবং তারপর **Zod** বা **Valibot**-এর মতো রানটাইম স্কিমা ভ্যালিডেটর দিয়ে `.parse()` বা `.safeParse()` করা, অথবা কাস্টম **Type Guard Functions (`is`)** ব্যবহার করে ডেটা ভ্যালিডেট করে টাইপ-সেফ বানানো।",
    easyExplanation: "বাস্তব জীবনের নিরাপত্তা পরীক্ষার মতো বুঝুন:\n১. আপনি ইন্টারনেটে কোনো এপিআই থেকে ডেটা আনছেন। সার্ভার থেকে যে আসলেই সঠিক ডেটা আসবে তার কোনো রানটাইম গ্যারান্টি নেই (সার্ভার ডাউন বা ভুল ফিল্ড পাঠাতে পারে)।\n২. আপনি যদি লেখেন `const user = res.data as User;` তবে আপনি চোখ বন্ধ করে অন্ধের মতো বিশ্বাস করলেন। রানটাইমে কোনো ফিল্ড মিসিং থাকলে অ্যাপ ক্র্যাশ করবে!\n৩. সঠিক উপায় হলো: Zod স্কিমা দিয়ে একটি রানটাইম গার্ডিয়ান বসানো। Zod ডেটা চেক করে যদি দেখে সব ফিল্ড ঠিক আছে, তবেই সে TypeScript টাইপ সহ ডেটা পাস করবে; কোনো ভুল থাকলে সুন্দর এরর মেসেজ দেবে।",
    interviewAnswer: "Because TypeScript types are erased at compile time, treating incoming backend API data as strongly-typed via type casting (`data as User`) is a dangerous anti-pattern. The modern, robust industry solution is to type incoming API payloads as `unknown` and validate them at runtime at the application boundary using a schema validation library like **Zod**. Using `zodSchema.safeParse(data)` verifies the runtime shape, parses nested structures, handles errors gracefully, and automatically infers the static TypeScript type via `z.infer<typeof schema>`.",
    detailedExplanation: {
      whatItIs: "অ্যাপ্লিকেশন বাউন্ডারিতে রানটাইম ডেটা ভ্যালিডেশন এবং স্ট্যাটিক টাইপ জেনারেশনের সমন্বয়।",
      whyItExists: "ব্যাকএন্ড ব্রেকিং চেঞ্জ, ভুল API রেসপন্স বা ম্যালিশিয়াস ডেটার কারণে ফ্রন্টএন্ড রানটাইম এক্সেপশন (`undefined is not an object`) সম্পূর্ণ নির্মূল করতে।",
      howItWorks: "Zod স্কিমা রানটাইমে অবজেক্ট ভ্যালিডেট করে। `z.infer` কম্পাইল টাইমে TypeScript টাইপ তৈরি করে। ফলে সিঙ্গেল সোর্স অব ট্রুথ বজায় থাকে।",
      whenToUse: "সব `fetch` / `axios` API কল, LocalStorage রিডিং, URL Search Params পার্সিং, এবং React Hook Form হ্যান্ডলিংয়ে।",
      keyPoints: [
        "Never use unsafe type casting: `const data = (await res.json()) as User` ❌.",
        "Treat boundary data as `unknown`.",
        "Use `z.infer<typeof Schema>` to keep Types and Schemas DRY.",
        "Use Custom User-Defined Type Guards (`function isUser(data: unknown): data is User`) for lightweight scenarios without external libraries."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `import { z } from "zod"; // ইন্ডাস্ট্রি স্ট্যান্ডার্ড স্কিমা ভ্যালিডেটর

// ১. রানটাইম স্কিমা তৈরি
const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(["admin", "user", "guest"]),
  isVerified: z.boolean().default(false)
});

// ২. Zod থেকে স্বয়ংক্রিয়ভাবে TypeScript Type বের করা (DRY)
type User = z.infer<typeof UserSchema>;

// ৩. টাইপ-সেফ API ফেচিং ফাংশন
async function fetchSafeUser(userId: string): Promise<User> {
  const response = await fetch(\`/api/users/\${userId}\`);
  const rawData: unknown = await response.json(); // Type-safe: 'unknown'

  // ৪. রানটাইম ভ্যালিডেশন
  const parseResult = UserSchema.safeParse(rawData);

  if (!parseResult.success) {
    console.error("API Contract Mismatch:", parseResult.error.flatten());
    throw new Error("Invalid API response format");
  }

  // ✅ parseResult.data ১০০% গ্যারান্টিড টাইপ-সেফ User অবজেক্ট!
  return parseResult.data;
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Zod স্কিমা ডিফাইন",
          description: "রানটাইমে ফিল্ডগুলোর টাইপ ও ফরম্যাট (যেমন email, enum) চেক করার নিয়মাবলী সেট করা হলো।"
        },
        {
          step: 2,
          title: "z.infer অটো টাইপ",
          description: "আলাদা করে ইন্টারফেস না লিখে Zod স্কিমা থেকেই সরাসরি TypeScript টাইপ ড্রাইভ করা হয়েছে।"
        },
        {
          step: 3,
          title: "safeParse সেফ গার্ড",
          description: "রানটাইমে কোনো ফিল্ড মিসিং থাকলে ক্র্যাশ না করে এরর হ্যান্ডেল করে নিরাপদ ডেটা রিটার্ন করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Hook Form + Zod Resolver",
        description: "`useForm({ resolver: zodResolver(UserSchema) })` দিয়ে ফ্রন্টএন্ড ফর্ম ভ্যালিডেশন করা।"
      },
      {
        title: "tRPC & Next.js Server Actions",
        description: "সার্ভার অ্যাকশনের ইনপুট আর্গুমেন্টকে Zod দিয়ে ভ্যালিডেট করে অটোমেটিক এন্ড-টু-এন্ড টাইপ সেফটি পাওয়া।"
      }
    ],
    interviewTips: {
      tip: "`as SomeType` কাস্টিংকে 'Dangerous Type Assertion' হিসেবে উল্লেখ করে Zod এবং `z.infer` প্যাটার্ন ব্যাখ্যা করুন। এটি আধুনিক ফুলস্ট্যাক ইন্টারভিউতে শীর্ষ অগ্রাধিকার পায়।",
      deliveryStrategy: "টাইপ ইরেজারের সমস্যা (No runtime types) -> `as` কাস্টিংয়ের বিপদ -> `unknown` + Zod `safeParse` সমাধান কোড স্নিপেট দিন।",
      avoidSaying: [
        {
          wrong: "Axios-এ `axios.get<User>()` লিখলেই শতভাগ রানটাইম টাইপ সেফ হয়ে যায়।",
          right: "জেনেরিক `<User>` শুধু কম্পাইলারে বলে দেয় ডেটা কী হতে পারে, কিন্তু ব্যাকএন্ড ভুল ডেটা পাঠালে রানটাইমে কোনো এরর আটকায় না; Zod ভ্যালিডেশন আবশ্যক।"
        }
      ]
    },
    quickRevision: [
      "API ডেটাকে সরাসরি `as Type` কাস্ট করবেন না।",
      "API ইনপুটকে `unknown` হিসেবে গ্রহণ করুন।",
      "Zod দিয়ে রানটাইম স্কিমা ভ্যালিডেশন করুন (`safeParse`).",
      "`z.infer<typeof schema>` দিয়ে অটোমেটিক টাইপ তৈরি করুন।"
    ],
    followUpQuestions: [
      {
        question: "How do you handle shared types between frontend and backend?",
        targetId: "ts-shared-types-frontend-backend",
        shortHint: "Monorepo, tRPC, এবং Zod স্কিমা শেয়ারিং।"
      }
    ],
    tags: ["TypeScript", "Zod", "Type Safety", "API", "Runtime Validation"]
  },
  {
    id: "ts-shared-types-frontend-backend",
    slug: "ts-shared-types-frontend-backend",
    question: "How do you handle shared types between frontend and backend in modern web development?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "ফ্রন্টএন্ড এবং ব্যাকএন্ডের মধ্যে টাইপ সিঙ্ক রাখতে আধুনিক আর্কিটেকচারে প্রধানত ৩টি জনপ্রিয় পদ্ধতি ব্যবহার করা হয়: ১. **Monorepo (Turborepo / pnpm workspaces)**-এ একটি শেয়ার্ড প্যাকেজ (`@myorg/types` বা `@myorg/schemas`) তৈরি করে সেখানে Zod স্কিমা ও DTO রাখা, ২. **tRPC** ব্যবহার করা যা ব্যাকএন্ড রাউটার থেকে সরাসরি ফ্রন্টএন্ডে এন্ড-টু-এন্ড টাইপ ইনফার করে কোনো বিল্ড স্টেপ ছাড়াই, অথবা ৩. **OpenAPI / GraphQL Code Generator** দিয়ে ব্যাকএন্ড স্পেসিফিকেশন থেকে স্বয়ংক্রিয়ভাবে ফ্রন্টএন্ড টাইপস্ক্রিপ্ট ক্লায়েন্ট জেনারেট করা।",
    easyExplanation: "সহজ ভাষায় সমস্যা ও সমাধান:\n\nসমস্যা:\nব্যাকএন্ড ডেভেলপার ইউজার মডেলে `phoneNumber` বদলে `mobileNo` করল, কিন্তু ফ্রন্টএন্ড ডেভেলপার তা জানল না। ফলে প্রোডাকশনে অ্যাপ ক্র্যাশ করল!\n\nসমাধান:\n১. Monorepo Shared Package: ফ্রন্টএন্ড এবং ব্যাকএন্ড একই গিট রিপোজিটরিতে থাকবে এবং একটি কমন ফোল্ডার থেকে টাইপ ও Zod ভ্যালিডেশন ইম্পোর্ট করবে। ব্যাকএন্ড বদলালে ফ্রন্টএন্ডে সাথে সাথে লাল দাগ আসবে!\n২. tRPC (Next.js-এর জন্য সেরা): ব্যাকএন্ডের ফাংশনগুলোর টাইপ সরাসরি ফ্রন্টএন্ড রিঅ্যাক্ট কম্পোনেন্টে অটো-কমপ্লিট হয়ে যাবে, কোনো ম্যানুয়াল টাইপিং ছাড়াই।",
    interviewAnswer: "In modern full-stack TypeScript development, maintaining shared types between frontend and backend prevents contract drift and runtime crashes. The primary strategies are: 1. **Monorepo with Shared Packages (Turborepo / Nx)**: Housing a `@repo/schemas` package with shared Zod schemas and derived types consumed by both Next.js frontend and Express/Nest backend. 2. **End-to-End Type Inference (tRPC)**: Providing full-stack type safety without code generation by directly exporting the backend AppRouter type. 3. **API Schema Code Generation (OpenAPI / GraphQL Codegen / Prisma)**: Automatically generating TypeScript client SDKs from Swagger or GraphQL schema files in CI/CD.",
    detailedExplanation: {
      whatItIs: "ফুলস্ট্যাক ডেভেলপমেন্টে ফ্রন্টএন্ড ও ব্যাকএন্ডের API কন্ট্রাক্ট শতভাগ সিঙ্ক রাখার আর্কিটেকচার।",
      whyItExists: "টিমের মধ্যে মিস-কমিউনিকেশন, ম্যানুয়াল টাইপ ডুপ্লিকেশন এবং ব্যাকএন্ডের ফিল্ড পরিবর্তনের ফলে ফ্রন্টএন্ড ব্রেক হওয়া ঠেকাতে।",
      howItWorks: "শেয়ার্ড Zod স্কিমা বা tRPC রাউটারের টাইপ কম্পাইলার দ্বারা রিয়েল-টাইমে উভয় প্রজেক্টে শেয়ার হয়।",
      whenToUse: "Next.js ফুলস্ট্যাক অ্যাপে tRPC/Server Actions, বড় এন্টারপ্রাইজ সিস্টেমে Monorepo Shared Schema বা OpenAPI Codegen।",
      keyPoints: [
        "Eliminates contract drift between client and server.",
        "Monorepo (pnpm + Turborepo) is the gold standard for fullstack TS.",
        "tRPC provides zero-overhead full-stack type safety.",
        "OpenAPI Codegen bridges the gap if backend is in Go/Python/Java."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// packages/schemas/src/user.ts (Shared Package in Monorepo)
import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  role: z.enum(["user", "admin"])
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

// apps/backend/src/routes/user.ts (Backend Express Handler)
import { CreateUserSchema, CreateUserInput } from "@repo/schemas";

app.post("/users", (req, res) => {
  const validatedData: CreateUserInput = CreateUserSchema.parse(req.body);
  // ডেটাবেস সেভ লজিক...
});

// apps/frontend/src/components/UserForm.tsx (Frontend React Form)
import { CreateUserSchema, CreateUserInput } from "@repo/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function UserForm() {
  const form = useForm<CreateUserInput>({
    resolver: zodResolver(CreateUserSchema)
  });
  // ইনপুট ফর্ম...
}`,
      explanationSteps: [
        {
          step: 1,
          title: "শেয়ার্ড স্কিমা প্যাকেজ",
          description: "CreateUserSchema একবার ডিফাইন করে ফ্রন্টএন্ড ও ব্যাকএন্ড উভয় জায়গায় ইম্পোর্ট করা হয়েছে।"
        },
        {
          step: 2,
          title: "জিরো ডুপ্লিকেশন ও ব্রেকিং চেঞ্জ প্রটেকশন",
          description: "স্কিমাতে একটি নতুন ফিল্ড যোগ করলে সাথে সাথে ব্যাকএন্ড কন্ট্রোলার ও ফ্রন্টএন্ড ফর্মে কম্পাইলার টাইপ এরর প্রদর্শন করবে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Turborepo + Next.js + NestJS Monorepo",
        description: "উভয় প্রজেক্ট একই Zod স্কিমা প্যাকেজ ব্যবহার করে ফর্ম ভ্যালিডেশন ও DTO তৈরি করে।"
      },
      {
        title: "tRPC with Next.js App Router",
        description: "ব্যাকএন্ড রাউটারের `export type AppRouter = typeof appRouter;` সরাসরি ফ্রন্টএন্ড হুকসে টাইপ দেয়।"
      }
    ],
    interviewTips: {
      tip: "৩টি আর্কিটেকচারাল প্যাটার্ন (Monorepo Shared Package, tRPC, এবং OpenAPI Codegen) উল্লেখ করুন। ব্যাকএন্ড যদি অন্য ভাষায় (যেমন Python/Go) হয় তখন কীভাবে OpenAPI Codegen করতে হয় তা বললে ইন্টারভিউয়ার অসাধারণ ইমপ্রেসড হবেন।",
      deliveryStrategy: "সমস্যা (Contract Drift) -> ৩টি প্রধান সলিউশন -> Monorepo Zod কোড প্যাটার্ন বুঝিয়ে দিন।",
      avoidSaying: [
        {
          wrong: "ফ্রন্টএন্ডে ম্যানুয়ালি ব্যাকএন্ডের ইন্টারফেস কপি-পেস্ট করে রাখা ভালো।",
          right: "ম্যানুয়াল কপি-পেস্ট একটি অ্যান্টি-প্যাটার্ন; Monorepo Shared Package বা tRPC / Codegen দিয়ে অটোমেশন নিশ্চিত করা উচিত।"
        }
      ]
    },
    quickRevision: [
      "Shared Types সমস্যা: Contract Drift ও ফ্রন্টএন্ড রানটাইম ক্র্যাশ।",
      "সমাধান ১: Monorepo (Turborepo) + Shared Zod Package (ইন্ডাস্ট্রি স্ট্যান্ডার্ড).",
      "সমাধান ২: tRPC (Zero build-step End-to-End type safety).",
      "সমাধান ৩: OpenAPI / Swagger Codegen (যখন ব্যাকএন্ড অন্য ভাষায় থাকে)।"
    ],
    followUpQuestions: [
      {
        question: "How would you refactor a large JS project to TypeScript?",
        targetId: "ts-refactor-large-js-to-ts",
        shortHint: "ধাপে ধাপে টাইপস্ক্রিপ্ট মাইগ্রেশন স্ট্র্যাটেজি।"
      }
    ],
    tags: ["TypeScript", "Architecture", "Monorepo", "tRPC", "Zod", "Fullstack"]
  },
  {
    id: "ts-refactor-large-js-to-ts",
    slug: "ts-refactor-large-js-to-ts",
    question: "How would you migrate a large JavaScript codebase to TypeScript safely?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer: "একটি বিশাল প্রোডাকশন জাভাস্ক্রিপ্ট প্রোজেক্টকে এক রাতে সম্পূর্ণ টাইপস্ক্রিপ্টে রূপান্তর করা মারাত্মক ঝুঁকিপূর্ণ। নিরাপদ ও সঠিক পদ্ধতি হলো একটি **Incremental Migration (ধাপে ধাপে রূপান্তর)** স্ট্র্যাটেজি অনুসরণ করা: ১. `tsconfig.json` সেটআপ করে `allowJs: true` ও `checkJs: false` রাখা, ২. বিল্ড পাইপলাইন কনফিগার করা, ৩. নিচ থেকে ওপরে (Bottom-up) ইউটিলিটি ও শেয়ার্ড টাইপ দিয়ে শুরু করে ফাইলগুলোকে `.js` থেকে `.ts/.tsx`-এ রিনেম করা, ৪. সাময়িকভাবে টাইপ ব্লকার এড়াতে `any` না লিখে `unknown` বা `@ts-expect-error` দিয়ে ট্র্যাকিং রাখা, এবং ৫. সবশেষে ধাপে ধাপে `strict: true` চালু করা।",
    easyExplanation: "ধাপগুলো সহজভাবে বুঝুন:\n১. প্রস্তুতি (Setup): প্রোজেক্টে TypeScript ইনস্টল করুন এবং `allowJs: true` দিন যাতে পুরোনো `.js` ফাইল এবং নতুন `.ts` ফাইল একসাথে শান্তিতে পাশাপাশি চলতে পারে।\n২. লিফ বা বেস থেকে শুরু (Bottom-up): যে ফাইলগুলোর অন্য কোনো ডিপেনডেন্সি নেই (যেমন `utils/`, `helpers/`, `constants/`), সেগুলোকে আগে `.ts` করুন।\n৩. কোর ডেটা মডেল ও DTO তৈরি: আপনার API রেসপন্স ও ডেটাবেস অবজেক্টগুলোর জন্য ইন্টারফেস লিখে ফেলুন।\n৪. কম্পোনেন্ট রূপান্তর: এবার ওপরের বিজনেস লজিক ও React কম্পোনেন্টগুলোকে একে একে `.tsx` করুন।\n৫. স্ট্রিক্ট মোড অন: সব ফাইল মাইগ্রেট হওয়ার পর `noImplicitAny: true` এবং ফাইনালি `strict: true` অন করুন।",
    interviewAnswer: "Migrating a large enterprise JavaScript codebase to TypeScript must be done incrementally to prevent business disruption. The proven strategy is: \n1. Configure TypeScript compiler with `allowJs: true` to support mixed JS/TS codebases.\n2. Establish the build pipeline (Webpack/Vite/Babel) to transpile TS files seamlessly.\n3. Adopt a Bottom-Up Approach: Migrate leaf modules first (constants, pure utilities, shared models) before moving up to business services and UI components.\n4. Define core domain types and DTOs early.\n5. Avoid using `any` blindly; utilize `@ts-expect-error` with comments for temporary blockers.\n6. Enforce strictness gradually (`noImplicitAny`, then `strictNullChecks`, finally full `strict: true`) via CI checks.",
    detailedExplanation: {
      whatItIs: "রিস্ক-ফ্রি ও ইনক্রিমেন্টাল টাইপস্ক্রিপ্ট অ্যাডপশন রোডম্যাপ।",
      whyItExists: "বিশাল কোডবেসে বিগ-ব্যাং মাইগ্রেশন (একবারে সব চেঞ্জ) মার্জ কনফ্লিক্ট তৈরি করে এবং প্রোডাকশন সার্ভিস ভেঙে ফেলে।",
      howItWorks: "`allowJs` কম্পাইলারকে জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্ট ফাইল একই সাথে বান্ডল করার সুযোগ দেয়।",
      whenToUse: "যেকোনো লিগ্যাসি Express, Node.js বা React SPA প্রজেক্টকে আধুনিক টাইপ সেফটিতে রূপান্তর করতে।",
      keyPoints: [
        "Use `allowJs: true` for hybrid coexistence.",
        "Bottom-up migration: Leaf utilities -> Domain types -> Services -> UI Components.",
        "Prefer `@ts-expect-error` over `any` with Jira ticket annotations.",
        "Automate TS checks in CI with `tsc --noEmit`."
      ]
    },
    codeExample: {
      language: "json",
      code: `// tsconfig.json - প্রাথমিক ইনক্রিমেন্টাল মাইগ্রেশন কনফিগারেশন
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,           // ✅ পুরোনো .js ও .jsx ফাইল রান করার অনুমতি
    "checkJs": false,          // শুরুতে সব JS ফাইলে এরর বন্ধ রাখা
    "jsx": "preserve",
    "noEmit": true,
    "strict": false,           // শুরুতে স্ট্রিক্ট অফ রেখে ধাপে ধাপে অন করা
    "noImplicitAny": false,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"]
}`,
      explanationSteps: [
        {
          step: 1,
          title: "হাইব্রিড সাপোর্ট এনাবল",
          description: "allowJs: true থাকায় বিদ্যমান কোনো বিজনেস লজিক বন্ধ না করেই নতুন ফিচারগুলো সরাসরি TypeScript-এ লেখা যায়।"
        },
        {
          step: 2,
          title: "ইনক্রিমেন্টাল স্ট্রিক্টনেস",
          description: "কোডবেসের শতকরা হার বৃদ্ধির সাথে সাথে noImplicitAny এবং strictNullChecks ধাপে ধাপে ট্রু করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Airbnb & Stripe Migration Story",
        description: "Airbnb তাদের মিলিয়ন্স লাইন্স অব রিঅ্যাক্ট কোডবেস ইনক্রিমেন্টাল প্যাকেজ-বাই-প্যাকেজ এবং বটম-আপ অ্যাপ্রোচে টাইপস্ক্রিপ্টে রূপান্তর করেছে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'সব ফাইল একবারে রিনেম করে এরর ফিক্স করব'। বলুন 'Incremental Bottom-up approach with allowJs: true and CI gating' — এটি একজন আর্কিটেক্ট লেভেলের উত্তর।",
      deliveryStrategy: "বিগ ব্যাং মাইগ্রেশনের ঝুঁকি -> ইনক্রিমেন্টাল রোডম্যাপ (Config -> Utilities -> Core Types -> UI) -> `@ts-expect-error` বনাম `any` ডিসিশন তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "দ্রুত মাইগ্রেট করার জন্য সব জটিল জায়গায় :any বসিয়ে ফাইল .ts করে দেব।",
          right: ":any বসালে টাইপ সেফটির কোনো লাভই হয় না; যেখানে সমস্যা সেখানে @ts-expect-error দিয়ে টিকিট নাম্বার লিখে রাখা উচিত এবং পরে ফিক্স করা উচিত।"
        }
      ]
    },
    quickRevision: [
      "বিগ ব্যাং মাইগ্রেশন করবেন না, Incremental Migration করুন।",
      "`allowJs: true` দিয়ে JS ও TS পাশাপাশি চালান।",
      "Bottom-up রুল: Constants/Utils -> Domain Types -> Services -> Components.",
      "CI-তে `tsc --noEmit` দিয়ে নতুন কোডে টাইপ সেফটি নিশ্চিত করুন।"
    ],
    followUpQuestions: [
      {
        question: "What trade-offs does TypeScript introduce?",
        targetId: "ts-trade-offs-and-costs",
        shortHint: "টাইপস্ক্রিপ্টের সীমাবদ্ধতা ও ওভারহেড।"
      }
    ],
    tags: ["TypeScript", "Migration", "Architecture", "Refactoring", "Best Practices"]
  },
  {
    id: "ts-trade-offs-and-costs",
    slug: "ts-trade-offs-and-costs",
    question: "What trade-offs and costs does TypeScript introduce in software projects?",
    category: "TypeScript",
    categorySlug: "typescript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "TypeScript বিপুল সুবিধা দিলেও কিছু বাস্তবসম্মত ট্রেড-অফ ও খরচ তৈরি করে: ১. **Development Overhead & Boilerplate** (শুরুতে কোড লেখার গতি কিছুটা ধীর হওয়া ও টাইপ ডিফাইন করার বাড়তি কোড), ২. **Compilation & Build Time** (বড় প্রোজেক্টে টাইপ চেকিং বিল্ড টাইম বাড়ায়), ৩. **Learning Curve** (জটিল জেনেরিক্স ও কন্ডিশনাল টাইপ শেখার সময়), ৪. **False Sense of Security** (রানটাইম ডেটা টাইপস্ক্রিপ্ট চেক করতে পারে না বিধায় ডেভেলপাররা ভুল সুরক্ষা অনুভব করতে পারে), এবং ৫. **Third-party Typing Debt** (কিছু লাইব্রেরির ভুল বা মিসিং `@types` মেইনটেইনের ঝামেলা)।",
    easyExplanation: "সহজ বাস্তব দৃষ্টিভঙ্গিতে বুঝুন:\n\n১. সুবিধা: প্রোডাকশনে বাগ কমবে, অটো-কমপ্লিট ও রিফ্যাক্টরিং জলের মতো সহজ হবে।\n\n২. খরচ বা ট্রেড-অফ:\n- আপনাকে বাড়তি কোড লিখতে হবে (Type definitions, DTOs).\n- জুনিয়র ডেভেলপারদের শিখতে সময় লাগবে (জটিল Generics বুঝতে কষ্ট হতে পারে)।\n- বিল্ড করতে একটু বেশি সময় লাগবে।\n- সবচেয়ে বড় বিপদ: ডেভেলপাররা মনে করতে পারে 'TS এরর দিচ্ছে না মানে অ্যাপে কোনো বাগ নেই'—কিন্তু রানটাইমে API থেকে ভুল ডেটা আসলে টাইপস্ক্রিপ্ট একা বাঁচাতে পারে না!",
    interviewAnswer: "While TypeScript significantly improves maintainability and developer productivity in medium-to-large applications, it introduces several notable trade-offs: \n1. **Build-Time & Tooling Complexity**: Requires an explicit compilation step and slower CI build times for type checking.\n2. **Cognitive Overhead & Slower Initial Prototyping**: Writing and debugging complex generic types can slow down initial MVP development.\n3. **False Sense of Security**: Compile-time typing does not protect against invalid runtime payloads (requiring runtime validators like Zod).\n4. **Third-Party Ecosystem Friction**: Handling outdated or poorly written ambient type definitions (`@types`) can cause typing bottlenecks.",
    detailedExplanation: {
      whatItIs: "টাইপস্ক্রিপ্ট ব্যবহারের সুবিধা ও খরচের নিরপেক্ষ ইঞ্জিনিয়ারিং মূল্যায়ন।",
      whyItExists: "ইন্টারভিউতে কোনো টেকনোলজিকে অন্ধভাবে সাপোর্ট না করে বাস্তব সীমাবদ্ধতা ও ব্যবসায়িক প্রভাব বোঝার ক্ষমতা যাচাই করতে।",
      howItWorks: "স্ট্যাটিক টাইপিং বনাম ডাইনামিক স্পিডের ব্যালেন্স। ছোট স্ক্রিপ্টে JS দ্রুততম, বড় টিম প্রোজেক্টে TS বিনিয়োগ দীর্ঘমেয়াদে হাজার ঘণ্টার ডিবাগিং টাইম বাঁচায়।",
      whenToUse: "১-২ দিনের কুইক হ্যাকাথন প্রোটোটাইপে পিওর JS দ্রুত হতে পারে, কিন্তু যেকোনো প্রোডাকশন এন্টারপ্রাইজ অ্যাপে TS এর সুবিধা খরচের চেয়ে বহুগুণ বেশি।",
      keyPoints: [
        "Slows initial prototyping speed; accelerates long-term maintenance and refactoring.",
        "Requires Zod/runtime validation for external boundaries.",
        "Increases CI/CD pipeline duration (`tsc --noEmit`)."
      ]
    },
    codeExample: {
      language: "typescript",
      code: `// ১. জটিল টাইপিং ওভারহেড (Cognitive Cost)
type DeepReadonly<T> = T extends Function | boolean | number | string | null | undefined
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

// ২. False Sense of Security Example
interface User {
  id: string;
  name: string;
}

async function getUser() {
  const res = await fetch("/api/user");
  // ⚠️ ডেভেলপার ভাবছে res.json() নিশ্চিত User, কিন্তু সার্ভার 500 এরর পাঠালে এটি ক্র্যাশ করবে!
  const user = (await res.json()) as User; 
  console.log(user.name.toUpperCase()); // ❌ Runtime TypeError if user is undefined!
}`,
      explanationSteps: [
        {
          step: 1,
          title: "টাইপ কমপ্লেক্সিটি",
          description: "জটিল জেনেরিক কোডবেস বুঝতে টিমের মেম্বারদের অতিরিক্ত সময় লাগতে পারে।"
        },
        {
          step: 2,
          title: "মিথ্যা নিরাপত্তা অনুভূতি",
          description: "as User লেখার কারণে কম্পাইলার নিশ্চুপ থাকে, অথচ রানটাইমে ক্র্যাশ ঘটে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Svelte / TurboJS Repository Choices",
        description: "কিছু লাইব্রেরি (যেমন Svelte core বা Turbo) বিল্ড স্টেপ দ্রুত রাখতে এবং টাইপ ডিফিনিশন মেইনটেইনেন্স এড়াতে JSDoc + JavaScript ব্যবহার করার সিদ্ধান্ত নিয়েছিল।"
      }
    ],
    interviewTips: {
      tip: "একজন ম্যাচিউর ইঞ্জিনিয়ারের মতো কথা বলুন। কোনো প্রযুক্তিই ১০০% পারফেক্ট নয়; 'Initial speed vs Long-term maintainability'-এর ব্যালেন্স তুলে ধরুন।",
      deliveryStrategy: "স্বীকার করুন যে খরচ আছে (Build time, boilerplate, learning curve) -> কেন দীর্ঘমেয়াদে বড় টিমে TS জয়ী হয় তা যুক্তি দিয়ে প্রমাণ করুন।",
      avoidSaying: [
        {
          wrong: "টাইপস্ক্রিপ্টের কোনো নেতিবাচক দিক নেই, সব জায়গায় বাধ্যতামূলকভাবে ব্যবহার করা উচিত।",
          right: "টাইপস্ক্রিপ্টের কিছু প্রাথমিক খরচ এবং জটিলতা রয়েছে, তবে মাঝারি ও বড় টিমে এটি মেইনটেইনেবিলিটি বহুগুণ বাড়িয়ে দেয়।"
        }
      ]
    },
    quickRevision: [
      "ট্রেড-অফ ১: প্রোটোটাইপিং ও কোডিংয়ে কিছুটা বেশি সময় লাগে (Boilerplate).",
      "ট্রেড-অফ ২: অতিরিক্ত বিল্ড স্টেপ ও CI টাইপ চেক ওভারহেড।",
      "ট্রেড-অফ ৩: False sense of security (রানটাইম ভ্যালিডেশনের বিকল্প নয়)।",
      "তবে বড় প্রোজেক্টে রিফ্যাক্টরিং ও টিম কোলাবোরেশনের সুবিধা এই খরচের চেয়ে অনেক বেশি।"
    ],
    followUpQuestions: [
      {
        question: "How does TypeScript compile to JavaScript?",
        targetId: "ts-compile-to-js-internals",
        shortHint: "টাইপ ইরেজার আর্কিটেকচার।"
      }
    ],
    tags: ["TypeScript", "Architecture", "Trade-offs", "Engineering Decisions", "Performance"]
  }
];
