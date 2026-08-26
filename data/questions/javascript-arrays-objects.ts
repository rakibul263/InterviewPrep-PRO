import { Question } from "@/types";

export const javascriptArraysObjectsQuestions: Question[] = [
  {
    id: "possible-ways-to-create-objects-in-javascript",
    slug: "possible-ways-to-create-objects-in-javascript",
    question: "What are the possible ways to create objects in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer:
      "JavaScript-এ অবজেক্ট তৈরির প্রধান উপায়গুলো হলো: ১. Object Literal (`{}`), ২. Constructor Function (`new Person()`), ৩. `Object.create()`, ৪. ES6 `class`, ৫. Factory Function, এবং ৬. `Object.assign()`। প্রোডাকশনে সবচেয়ে বেশি Object Literal এবং ES6 Class ব্যবহৃত হয়।",
    easyExplanation:
      "JavaScript-এ অবজেক্ট তৈরির বিভিন্ন ধরন আছে এবং প্রতিটির নির্দিষ্ট উদ্দেশ্য রয়েছে:\n\n১. **Object Literal (`{}`)**: সবচেয়ে সহজ ও জনপ্রিয় উপায়। সরাসরি কী-ভ্যালু দিয়ে এক লাইনে অবজেক্ট ডিফাইন করা যায়।\n২. **Constructor Function**: `function` লিখে `this` দিয়ে প্রপার্টি বসানো এবং `new` কি-ওয়ার্ড দিয়ে ইনস্ট্যান্স তৈরি করা (ES6 ক্লাসের আগের ঐতিহ্যবাহী উপায়)।\n৩. **`Object.create(proto)`**: নির্দিষ্ট কোনো অবজেক্টকে সরাসরি প্রোটোটাইপ হিসেবে সেট করে নতুন অবজেক্ট তৈরি করার নিখুঁত মেথড।\n৪. **ES6 Class**: আধুনিক অবজেক্ট-ওরিয়েন্টেড স্টাইল (ভেতরে প্রোটোটাইপ ভিত্তিক হলেও সিনট্যাক্স পরিষ্কার)।\n৫. **Factory Function**: সাধারণ ফাংশন যা প্রতি কলে একটি নতুন অবজেক্ট রিটার্ন করে (`new` কি-ওয়ার্ড লাগে না)।\n৬. **`Object.assign()` বা Spread (`...`)**: বিদ্যমান অবজেক্ট ক্লোন বা মার্জ করে নতুন অবজেক্ট বানাতে ব্যবহৃত হয়।",
    interviewAnswer:
      "JavaScript-এ অবজেক্ট তৈরির একাধিক উপায় আছে। একক অবজেক্টের জন্য আমরা সচরাচর Object Literal (`{}`) ব্যবহার করি। একাধিক ইনস্ট্যান্স ও মেথড শেয়ারিংয়ের জন্য ES6 `class` বা Constructor Function ব্যবহৃত হয়। আর কোনো নির্দিষ্ট অবজেক্টকে সরাসরি প্রোটোটাইপ হিসেবে ইনহেরিট করতে চাইলে `Object.create()` সবচেয়ে কার্যকর। এছাড়া ইমিউটেবল কপি বা মার্জিংয়ের জন্য `Object.assign()` বা Spread অপারেটর ব্যবহার করা হয়।",
    detailedExplanation: {
      whatItIs:
        "JavaScript-এ অবজেক্ট হলো কী-ভ্যালু পেয়ারের মেমরি স্ট্রাকচার, যা বিভিন্ন সিনট্যাক্টিক ও প্রোগ্রাম্যাটিক উপায়ে ইনিশিয়ালাইজ করা যায়।",
      whyItExists:
        "প্রোগ্রামিংয়ের বিভিন্ন রিকোয়ারমেন্ট—যেমন সাধারণ ডেটা হোল্ডিং, রিইউজেবল ব্লুপ্রিন্ট, প্রোটোটাইপাল ইনহেরিট্যান্স এবং ডিপ/শ্যালো ক্লোনিং—সহজে হ্যান্ডেল করার জন্য এই বিভিন্ন উপায় দেওয়া হয়েছে।",
      howItWorks:
        "Object Literal সরাসরি `Object.prototype` ইনহেরিট করে। `Object.create(proto)` আর্গুমেন্ট হিসেবে দেওয়া অবজেক্টকে সরাসরি `__proto__` চেইনে বসায়। `new` কি-ওয়ার্ড একটি নতুন খালি অবজেক্ট তৈরি করে ফাংশনের `this` বাইন্ড করে এবং কনস্ট্রাক্টর প্রোটোটাইপ লিংক করে।",
      whenToUse:
        "সাধারণ কনফিগ বা ডেটা ট্রান্সফারে Object Literal; বড় অ্যাপ্লিকেশনে সার্ভিস বা মডেল ডিজাইনে ES6 Class; এবং লাইটওয়েট অবজেক্ট জেনারেশনে Factory Function ব্যবহার করুন।",
      keyPoints: [
        "Object Literal (`{}`) পারফরম্যান্স এবং ক্লিন কোডের জন্য ডিফল্ট পছন্দ।",
        "`Object.create(null)` দিলে অবজেক্টের কোনো প্রোটোটাইপ থাকে না (ডিকশনারি ব্যবহারের জন্য নিরাপদ)।",
        "ES6 Class ব্যাকগ্রাউন্ডে Constructor Function এবং Prototypal Inheritance-এর ওপর সিনট্যাক্টিক সুগার।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Object Literal
const user = { name: "Shuvo", role: "Engineer" };

// ২. Object.create (নির্দিষ্ট প্রোটোটাইপ দিয়ে)
const proto = { greet() { return \`Hello, \${this.name}\`; } };
const emp = Object.create(proto);
emp.name = "Rahim";

// ৩. Constructor Function
function Person(name) {
  this.name = name;
}
const p1 = new Person("Karim");

// ৪. ES6 Class (আধুনিক স্ট্যান্ডার্ড)
class Admin {
  constructor(name) {
    this.name = name;
  }
}
const admin = new Admin("SuperAdmin");`,
      explanationSteps: [
        {
          step: 1,
          title: "Object Literal",
          description: "সরাসরি ব্র্যাকেটের মধ্যে কী-ভ্যালু দিয়ে মেমরিতে অবজেক্ট তৈরি হয়।",
        },
        {
          step: 2,
          title: "Object.create",
          description: "proto অবজেক্টটি emp এর প্রোটোটাইপ হিসেবে লিংক হয়, ফলে emp.greet() মেথড কল করা যায়।",
        },
        {
          step: 3,
          title: "ES6 Class",
          description: "কনস্ট্রাক্টরের মাধ্যমে প্রপার্টি সেট হয় এবং মেথডগুলো প্রোটোটাইপে শেয়ার্ড থাকে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Clean Dictionary / Map Pattern",
        description: "`Object.create(null)` ব্যবহার করে প্রোটোটাইপ-হীন ক্লিন হ্যাশ ম্যাপ তৈরি করা যাতে `toString` বা `hasOwnProperty` এর মতো প্রোটোটাইপ কী কনফ্লিক্ট না করে।",
      },
      {
        title: "Factory Function in UI Component State",
        description: "স্টেটলেস ফাংশনের ভেতর থেকে কম্পোনেন্টের ডিফল্ট স্টেট অবজেক্ট রিটার্ন করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Modern JS-এ আমরা অবজেক্ট ডেটা তৈরিতে Literal এবং কমপ্লেক্স ডোমেইন মডেলে ES6 Class বেশি ব্যবহার করি।' `Object.create(null)` এর সুবিধা উল্লেখ করলে ভালো ইম্প্রেশন তৈরি হয়।",
      deliveryStrategy: "১-২টি মূল উদাহরণ দিয়ে শুরু করে প্রোটোটাইপ চেইনিংয়ের পার্থক্য স্পষ্ট করুন।",
      avoidSaying: [
        {
          wrong: "JavaScript এ অবজেক্ট শুধু {} দিয়ে তৈরি করা যায়।",
          right: "Object Literal ছাড়াও Object.create, Constructor Function এবং ES6 Class দিয়ে অবজেক্ট তৈরি করা যায়।",
        },
      ],
    },
    quickRevision: [
      "Object Literal: `{ key: value }` - সবচেয়ে কমন।",
      "Object.create(proto): সরাসরি কাস্টম প্রোটোটাইপ লিংক করে।",
      "Object.create(null): প্রোটোটাইপ-হীন ক্লিন অবজেক্ট।",
      "ES6 Class: আধুনিক অবজেক্ট-ওরিয়েন্টেড প্যাটার্ন।",
    ],
    followUpQuestions: [
      {
        question: "Object.create() এবং class-based inheritance এর মধ্যে মূল পার্থক্য কী?",
        targetId: "object-create-vs-class-inheritance",
        shortHint: "Object.create সরাসরি অবজেক্টকে লিংক করে, class তৈরি করে ব্লুপ্রিন্ট ইনস্ট্যান্স।",
      },
    ],
    tags: ["Objects", "Object.create", "OOP", "Classes"],
  },
  {
    id: "difference-between-slice-and-splice",
    slug: "difference-between-slice-and-splice",
    question: "What is the difference between Array slice and splice methods?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "`slice()` মূল অ্যারে পরিবর্তন করে না (ইমিউটেবল) এবং সাব-অ্যারে কপি রিটার্ন করে। পক্ষান্তরে `splice()` মূল অ্যারেকে সরাসরি পরিবর্তন বা মিউটেট করে (নতুন এলিমেন্ট যোগ/মুছে ফেলে) এবং বাদ পড়া এলিমেন্টগুলো রিটার্ন করে।",
    easyExplanation:
      "এই দুটি মেথডের মধ্যে নাম কাছাকাছি হলেও কাজের দিক থেকে সম্পূর্ণ বিপরীত:\n\n১. **`slice(start, end)` (পিস কাটা)**:\n- মূল অ্যারের কোনো ক্ষতি করে না (Immutable)।\n- `start` ইনডেক্স থেকে `end` (এক্সক্লুসিভ)-এর আগ পর্যন্ত কপি করে নতুন অ্যারে বানায়।\n- React-এ স্টেট পরিবর্তনের জন্য `slice` পারফেক্ট।\n\n২. **`splice(start, deleteCount, ...items)` (অপারেশন করা)**:\n- মূল অ্যারেকে সরাসরি মিউটেট/বদল করে (Mutable)।\n- `start` ইনডেক্স থেকে কয়টি আইটেম মুছবেন তা ঠিক করে এবং চাইলে নতুন আইটেম সেখানে ইনসার্ট করা যায়।\n- যা মুছে গেল সেগুলো রিটার্ন করে।",
    interviewAnswer:
      "Array-এর `slice` এবং `splice`-এর মূল পার্থক্য হলো Immutability। `slice()` মূল অ্যারেকে পরিবর্তন না করে নির্দিষ্ট অংশের একটি নতুন কপি রিটার্ন করে (`start` থেকে `end` পর্যন্ত)। অন্যদিকে `splice()` মূল অ্যারেকে সরাসরি মিউটেট করে নির্দিষ্ট ইনডেক্স থেকে উপাদান রিমুভ, রিপ্লেস বা ইনসার্ট করে। React স্টেট ম্যানেজমেন্টে আমরা সবসময় Immutability বজায় রাখতে `slice` ব্যবহার করি।",
    detailedExplanation: {
      whatItIs:
        "`slice` হলো অ্যারের শ্যালো কপি নেওয়ার মেথড, এবং `splice` হলো ইন-প্লেস অ্যারে ম্যানিপুলেশন (Insert/Delete/Replace) মেথড।",
      whyItExists:
        "একটি ফাংশনাল ও পিওর প্রোগ্রামিংয়ের জন্য (যেখানে মূল ডেটা অক্ষত রাখতে হয়), অন্যটি পারফরম্যান্স ও সরাসরি ইন-প্লেস মেমরি পরিবর্তনের জন্য।",
      howItWorks:
        "`slice(1, 3)` অ্যারের ইনডেক্স ১ ও ২ এর মান নিয়ে নতুন অ্যারে রেফারেন্স তৈরি করে। `splice(1, 2, 'new')` মূল অ্যারে থেকে ইনডেক্স ১ থেকে ২টি এলিমেন্ট কেটে ফেলে এবং সেখানে 'new' ইনসার্ট করে।",
      whenToUse:
        "React/Redux-এ স্টেট বা প্রপস থেকে সাবসেট নিতে `slice` ব্যবহার করুন। আর যদি অরিজিনাল অ্যারে ইন-প্লেস মডিফাই করতে হয় তবে `splice` ব্যবহার করুন।",
      keyPoints: [
        "`slice` ইমিউটেবল (Immutable), `splice` মিউটেবল (Mutable)।",
        "`slice(startIndex, endIndex)` - endIndex অন্তর্ভুক্ত নয়।",
        "`splice(startIndex, deleteCount, item1, item2)` - মূল অ্যারে পরিবর্তন করে।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// ১. slice (মূল অ্যারে পরিবর্তন হয় না)
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['Banana', 'Cherry']
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Date'] (অপরিবর্তিত)

// ২. splice (মূল অ্যারে পরিবর্তন হয়)
const removed = fruits.splice(1, 2, 'Mango', 'Orange');
console.log(removed); // ['Banana', 'Cherry'] (যা মুছে ফেলা হয়েছে)
console.log(fruits);  // ['Apple', 'Mango', 'Orange', 'Date'] (মূল অ্যারে মিউটেট হয়েছে!)`,
      explanationSteps: [
        {
          step: 1,
          title: "slice execution",
          description: "fruits এর ইনডেক্স ১ ও ২ এর মান নিয়ে sliced অ্যারে তৈরি হয়েছে, fruits আগের মতোই আছে।",
        },
        {
          step: 2,
          title: "splice execution",
          description: "fruits থেকে ২টি আইটেম মুছে নতুন ২টি যোগ করা হয়েছে, ফলে fruits অ্যারে সরাসরি বদলে গেছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Pagination Sub-array with slice",
        description: "`items.slice((page - 1) * pageSize, page * pageSize)` দিয়ে সহজে ডেটার পেজিনেশন বের করা।",
      },
      {
        title: "In-place Array Item Removal",
        description: "ভ্যানিলা JS বা পারফরম্যান্স ক্রিটিক্যাল কোডে ইনডেক্স দিয়ে আইটেম সরাসরি ডিলিট করতে `arr.splice(index, 1)`।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে এক লাইনে বলুন: '`slice` creates a shallow copy without modifying the original array, while `splice` mutates the original array by adding or removing elements.'",
      deliveryStrategy: "React State-এর সাথে এর সম্পর্ক উল্লেখ করুন (React-এ কেন splice নিষিদ্ধ)।",
      avoidSaying: [
        {
          wrong: "দুটোই অ্যারে কাটার জন্য এক জিনিস।",
          right: "দুটোর কাজের উদ্দেশ্য আলাদা; slice ডেটা কপি করে (ইমিউটেবল), splice মূল অ্যারে পরিবর্তন করে (মিউটেবল)।",
        },
      ],
    },
    quickRevision: [
      "`slice`: Non-mutating (অরিজিনাল অ্যারে বদলায় না)।",
      "`splice`: Mutating (অরিজিনাল অ্যারে সরাসরি বদলে দেয়)।",
      "React-এ `slice` নিরাপদ, `splice` স্টেট মিউটেট করায় নিষিদ্ধ।",
    ],
    followUpQuestions: [
      {
        question: "React-এ state array থেকে একটি item ডিলিট করার সবচেয়ে সেরা উপায় কী?",
        shortHint: "`arr.filter((_, idx) => idx !== targetIndex)` অথবা `[...arr.slice(0, idx), ...arr.slice(idx + 1)]`।",
      },
    ],
    tags: ["Arrays", "Methods", "Immutability", "slice", "splice"],
  },
  {
    id: "compare-object-and-map-in-javascript",
    slug: "compare-object-and-map-in-javascript",
    question: "How do you compare Object and Map in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer:
      "`Object`-এর কী শুধুমাত্র String বা Symbol হতে পারে, এতে ডিফল্ট প্রোটোটাইপ কী থাকে এবং সাইজ বের করতে ম্যানুয়াল লুপ লাগে। পক্ষান্তরে `Map`-এর কী হিসেবে যেকোনো ডেটা টাইপ (Function, Object, Number) রাখা যায়, ইনসার্ট করার ক্রম নিশ্চিত থাকে এবং সরাসরি `.size` দিয়ে দৈর্ঘ্য পাওয়া যায়।",
    easyExplanation:
      "JavaScript-এ ডেটা কি-ভ্যালু আকারে রাখতে `Object` ও `Map` দুটোই ব্যবহৃত হলেও তাদের মধ্যে গুরুত্বপূর্ণ কিছু পার্থক্য রয়েছে:\n\n১. **Key Types**: Object-এ সব কী স্বয়ংক্রিয়ভাবে স্ট্রিংয়ে কনভার্ট হয়ে যায়। Map-এ অবজেক্ট, ফাংশন, বা নাম্বার হুবহু কী হিসেবে কাজ করে।\n২. **Default Keys**: Object-এ প্রোটোটাইপ থাকে (যেমন `toString`), ফলে কী কনফ্লিক্ট হতে পারে। Map সম্পূর্ণ ফাঁকা থাকে।\n৩. **Key Ordering**: Map-এ ডেটা ঢোকানোর সময় অনুযায়ী সুনির্দিষ্টভাবে ইনসার্শন অর্ডার বজায় থাকে।\n৪. **Size Determination**: Map-এ সরাসরি `map.size` পাওয়া যায়। Object-এ `Object.keys(obj).length` কল করতে হয়।\n৫. **Performance**: ঘনঘন কী-ভ্যালু অ্যাড বা ডিলিট করার ক্ষেত্রে `Map` অনেক বেশি পারফরমেট ও ফাস্ট।",
    interviewAnswer:
      "Object এবং Map-এর প্রধান পার্থক্য হলো কী-এর ধরন ও পারফরম্যান্স। Object-এ কী শুধুমাত্র String অথবা Symbol হতে পারে, কিন্তু Map-এ যেকোনো ডেটা টাইপ (এমনকি Object বা Function-ও) কী হতে পারে। Map সরাসরি insertion order বজায় রাখে, `map.size` প্রপার্টি প্রদান করে এবং ফ্রিকোয়েন্ট অ্যাড-ডিলিট অপারেশনে Object-এর চেয়ে দ্রুত কাজ করে। তবে সাধারণ JSON ডেটা ও স্ট্রাকচার্ড কনফিগারেশনের জন্য Object বেশি মানানসই।",
    detailedExplanation: {
      whatItIs:
        "Object হলো JavaScript-এর কোর ডেটা স্ট্রাকচার, আর Map হলো ES6-এ আসা একটি ডেডিকেটেড হ্যাশ ম্যাপ কালেকশন।",
      whyItExists:
        "Object-এর সীমাবদ্ধতা যেমন স্ট্রিং-অনলি কী, প্রোটোটাইপ পলিউশন এবং সাইজ ট্র্যাকিংয়ের অসুবিধা দূর করতে ES6-এ `Map` আনা হয়।",
      howItWorks:
        "Map হ্যাশ টেবিল অ্যালগরিদম ব্যবহার করে যেখানে যেকোনো রেফারেন্স সরাসরি হ্যাশ কি হিসেবে সংরক্ষিত হয়।",
      whenToUse:
        "যদি রানটাইমে ঘনঘন কি অ্যাড/রিমুভ করতে হয়, কী-এর টাইপ অজানা থাকে, বা অর্ডার গুরুত্বপূর্ণ হয় তখন Map ব্যবহার করুন। সাধারণ স্ট্যাটিক ডেটা বা JSON-এর জন্য Object ব্যবহার করুন।",
      keyPoints: [
        "Map যেকোনো টাইপের কী সাপোর্ট করে (`obj as key`)।",
        "`map.size` সরাসরি O(1) টাইমে সাইজ দেয়।",
        "Map সরাসরি `for...of` দিয়ে Iterable, Object সরাসরি Iterable নয়।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Object: কী স্বয়ংক্রিয়ভাবে স্ট্রিং হয়ে যায়
const obj = {};
const keyObj = { id: 1 };
obj[keyObj] = "Data for keyObj";
console.log(Object.keys(obj)); // ["[object Object]"] (কী স্ট্রিং হয়ে গেছে!)

// ২. Map: যেকোনো অবজেক্টকে প্রকৃত কী হিসেবে রাখে
const myMap = new Map();
const userKey = { id: 101 };

myMap.set(userKey, "Shuvo's Profile Data");
myMap.set(42, "Answer to Life");

console.log(myMap.get(userKey)); // "Shuvo's Profile Data"
console.log(myMap.size);         // 2 (সরাসরি সাইজ পাওয়া যায়)

// সরাসরি লুপ চালানো যায়
for (const [k, v] of myMap) {
  console.log(k, "=>", v);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Object string conversion",
          description: "obj-এ keyObj পাস করায় তা [object Object] স্ট্রিং হয়ে গেছে।",
        },
        {
          step: 2,
          title: "Map direct reference",
          description: "myMap-এ userKey অবজেক্টটি নিজস্ব রেফারেন্স অক্ষত রেখে কী হিসেবে বসেছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "DOM Node Cache",
        description: "DOM এলিমেন্টগুলোকে কী বানিয়ে তাদের সাথে মেটাডাটা বা ইভেন্ট স্টেট ম্যাপে সংরক্ষণ করা।",
      },
      {
        title: "LRU Cache Implementation",
        description: "ইনসার্শন অর্ডার বজায় রেখে ফাস্ট ক্যাশিং তৈরি করতে Map ব্যবহার করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে ৩টি মূল পয়েন্ট বুলেট আকারে বলুন: ১. Any data type as key, ২. Guaranteed insertion order, ৩. `map.size` & better performance for frequent additions/deletions.",
      deliveryStrategy: "কেন `WeakMap` আছে তাও সংক্ষেপে উল্লেখ করলে (Garbage collection of object keys) প্লাস পয়েন্ট পাবেন।",
      avoidSaying: [
        {
          wrong: "Map আর Object একই জিনিস, শুধু নতুন সিনট্যাক্স।",
          right: "Map যেকোনো টাইপের কী সাপোর্ট করে এবং ইনসার্শন অর্ডার ধরে রাখে, যা Object পারে না।",
        },
      ],
    },
    quickRevision: [
      "Object Key: String বা Symbol মাত্র।",
      "Map Key: যেকোনো টাইপ (Object, Function, Number, etc.)।",
      "Map সরাসরি Iterable (`for..of`), `.size` প্রপার্টি আছে।",
      "ফ্রিকোয়েন্ট অ্যাড/ডিলিটে Map বেশি পারফরমেট।",
    ],
    followUpQuestions: [
      {
        question: "WeakMap এবং Map এর মধ্যে মূল পার্থক্য কী?",
        shortHint: "WeakMap-এর কী অবশ্যই Object হতে হবে এবং এটি গারবেজ কালেকশন প্রতিরোধ করে না (Weak references)।",
      },
    ],
    tags: ["Map", "Object", "Data Structures", "ES6"],
  },
  {
    id: "difference-between-double-equals-and-triple-equals",
    slug: "difference-between-double-equals-and-triple-equals",
    question: "What is the difference between == and === operators?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer:
      "`==` (Loose Equality) টাইপ চেক করে না, বরং প্রয়োজনে Type Coercion (স্বয়ংক্রিয় টাইপ রূপান্তর) করে মান তুলনা করে। আর `===` (Strict Equality) টাইপ রূপান্তর করে না; মান এবং ডেটা টাইপ উভয়ই এক হলে তবেই `true` রিটার্ন করে।",
    easyExplanation:
      "JavaScript-এ তুলনা করার দুটি অপারেটর রয়েছে:\n\n১. **`==` (Loose Equality)**:\n- যদি দুটি অপারেন্ডের ডেটা টাইপ ভিন্ন হয়, JavaScript তাদের ভেতর টাইপ কনভার্সন (Implicit Coercion) করে একই টাইপে এনে তুলনা করে।\n- উদাহরণ: `'5' == 5` দিলে `true` হবে (কারণ স্ট্রিং '5' কে নাম্বারে কনভার্ট করা হয়েছে)।\n- `0 == false` বা `null == undefined` ও `true` দেয়।\n\n২. **`===` (Strict Equality)**:\n- কোনো টাইপ কনভার্সন করে না।\n- আগে চেক করে ডেটা টাইপ এক কি না। টাইপ ভিন্ন হলে সরাসরি `false` রিটার্ন করে।\n- উদাহরণ: `'5' === 5` দিলে `false` হবে (কারণ একটি String, অন্যটি Number)।",
    interviewAnswer:
      "`==` এবং `===`-এর মূল পার্থক্য হলো Type Coercion। `==` অপারেটর তুলনার আগে অপারেন্ডগুলোর মধ্যে Implicit Type Conversion ঘটায়, যার ফলে `0 == false` বা `'5' == 5` সত্য হয়। পক্ষান্তরে `===` অপারেটর কোনো টাইপ কনভার্ট করে না; এটি ভ্যালু এবং টাইপ উভয়ই চেক করে। অপ্রত্যাশিত বাগ এড়াতে আধুনিক প্রোডাকশন কোডে সবসময় `===` ব্যবহার করাই বেস্ট প্র্যাকটিস।",
    detailedExplanation: {
      whatItIs:
        "`==` হলো অ্যাবস্ট্রাক্ট ইকুয়ালিটি কম্প্যারিজন এবং `===` হলো স্ট্রিক্ট ইকুয়ালিটি কম্প্যারিজন।",
      whyItExists:
        "প্রাথমিক জাভাস্ক্রিপ্টে ফ্লেক্সিবল টাইপিংয়ের জন্য `==` তৈরি করা হয়েছিল। পরবর্তীতে টাইপ সেফটি ও নির্ভরযোগ্য কোডের জন্য `===` স্ট্যান্ডার্ড করা হয়।",
      howItWorks:
        "`==` কাজ করার সময় JavaScript-এর `ToPrimitive`, `ToNumber` রুলস ফলো করে টাইপ পরিবর্তন করে। `===` সরাসরি মেমরি টাইপ এবং বিট-লেভেল ভ্যালু চেক করে।",
      whenToUse:
        "সর্বদা `===` ব্যবহার করুন। শুধুমাত্র `null` এবং `undefined` উভয়কে একসাথে চেক করার শর্টকাট হিসেবে কেউ কেউ `val == null` ব্যবহার করেন।",
      keyPoints: [
        "`==` Type Coercion করে, `===` কোনো Coercion করে না।",
        "`null == undefined` সত্য (`true`), কিন্তু `null === undefined` মিথ্যা (`false`)।",
        "`NaN === NaN` সবসময় `false` (NaN চেক করতে `Number.isNaN()` ব্যবহার করুন)।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// Loose Equality (==) -> Coercion ঘটে
console.log(5 == "5");           // true (স্ট্রিং 5 নাম্বারে কনভার্ট হয়)
console.log(0 == false);         // true (false -> 0)
console.log(null == undefined);   // true (বিশেষ স্পেসিফিকেশন নিয়ম)
console.log("" == 0);            // true (ফাঁকা স্ট্রিং -> 0)

// Strict Equality (===) -> টাইপ ও মান দুটোই এক হতে হবে
console.log(5 === "5");          // false (Number vs String)
console.log(0 === false);        // false (Number vs Boolean)
console.log(null === undefined);  // false (Null vs Undefined)
console.log(NaN === NaN);        // false (Object.is(NaN, NaN) দিলে true হবে)`,
      explanationSteps: [
        {
          step: 1,
          title: "Type Coercion",
          description: "== ব্যবহারের সময় টাইপ বদলে যাওয়ায় অপ্রত্যাশিত true রিটার্ন করতে পারে।",
        },
        {
          step: 2,
          title: "Strict comparison",
          description: "=== ব্যবহারের সময় টাইপ ম্যাচ না করায় সরাসরি false দিয়ে কোড নিরাপদ রাখে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Safe Form Input Validation",
        description: "HTML ইনপুট থেকে আসা স্ট্রিং ভ্যালুর সাথে ডাটাবেস আইডির সঠিক টাইপ-সেফ তুলনার জন্য `===` ব্যবহার।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'We always prefer `===` to avoid subtle bugs caused by implicit coercion. The only rare exception is `x == null`, which cleanly checks for both null and undefined in one check.'",
      deliveryStrategy: "`NaN === NaN` কেন `false` এবং `Object.is()` কী তা উল্লেখ করলে ভালো ইম্প্রেশন তৈরি হয়।",
      avoidSaying: [
        {
          wrong: "দুটো প্রায় একই, শুধু ৩টা সমান একটু শক্ত।",
          right: "== Implicit Type Coercion করে কিন্তু === কোনো টাইপ কনভার্ট না করে টাইপ ও ভ্যালু উভয়ই চেক করে।",
        },
      ],
    },
    quickRevision: [
      "`==`: Type Coercion করে (অনিরাপদ)।",
      "`===`: Type + Value চেক করে (নিরাপদ ও স্ট্যান্ডার্ড)।",
      "`null == undefined` -> `true`, কিন্তু `null === undefined` -> `false`।",
      "`NaN === NaN` -> `false`।",
    ],
    followUpQuestions: [
      {
        question: "Object.is() মেথড এবং === এর মধ্যে কী পার্থক্য?",
        shortHint: "`Object.is(NaN, NaN)` সত্য দেয় এবং `Object.is(+0, -0)` মিথ্যা দেয়।",
      },
    ],
    tags: ["Operators", "Coercion", "Equality", "Basics"],
  },
  {
    id: "first-class-vs-higher-order-functions",
    slug: "first-class-vs-higher-order-functions",
    question: "What is a First-Class Function vs Higher-Order Function in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer:
      "JavaScript-এ ফাংশন হলো **First-Class Citizen**, অর্থাৎ ফাংশনকে সাধারণ ভেরিয়েবলের মতো অ্যাসাইন করা, আর্গুমেন্ট হিসেবে পাস করা এবং অন্য ফাংশন থেকে রিটার্ন করা যায়। আর যে ফাংশন অন্য কোনো ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে অথবা অন্য ফাংশন রিটার্ন করে, তাকে **Higher-Order Function (HOC/HOF)** বলে (যেমন `map`, `filter`, `reduce`)।",
    easyExplanation:
      "ফাংশনাল প্রোগ্রামিংয়ের দুটি গুরুত্বপূর্ণ স্তম্ভ হলো:\n\n১. **First-Class Functions (প্রথম শ্রেণীর নাগরিক)**:\n- জাভাস্ক্রিপ্ট ল্যাঙ্গুয়েজের একটি বৈশিষ্ট্য।\n- এর মানে হলো ফাংশনকে সাধারণ ডাটা বা ভ্যালুর মতো ট্রিট করা যায়। ভেরিয়েবলে রাখা যায় (`const fn = () => {}`), অ্যারেতে ঢোকানো যায়, অবজেক্টে প্রপার্টি হিসেবে রাখা যায়।\n\n২. **Higher-Order Function (উচ্চতর ফাংশন)**:\n- এটি এমন একটি ফাংশন যা First-Class সুবিধার সুযোগ নিয়ে কাজ করে।\n- শর্ত: ফাংশনটিকে হয় আরেকটি ফাংশন প্যারামিটার হিসেবে নিতে হবে (যেমন কলব্যাক), অথবা ভেতর থেকে নতুন ফাংশন রিটার্ন করতে হবে।\n- উদাহরণ: `Array.prototype.map()`, `setTimeout()`, React Custom Hooks, HOC।",
    interviewAnswer:
      "JavaScript treats functions as **First-Class Citizens**, meaning functions can be assigned to variables, passed as arguments, and returned from other functions just like any primitive value. A **Higher-Order Function (HOF)** is a function that either accepts one or more functions as arguments (callbacks) or returns a new function. Built-in array methods like `.map()`, `.filter()`, and `.reduce()` are classic examples of Higher-Order Functions.",
    detailedExplanation: {
      whatItIs:
        "First-Class Function হলো ল্যাঙ্গুয়েজের ডিজাইন প্রপার্টি, আর Higher-Order Function হলো একটি ম্যাথমেটিকাল ও ফাংশনাল প্রোগ্রামিং প্যাটার্ন।",
      whyItExists:
        "কোড ডুপ্লিকেশন কমাতে, অ্যাবস্ট্রাকশন তৈরি করতে এবং কম্পোজেবল ও ডিক্লারেটিভ কোড লিখতে এই ফিচার ব্যবহৃত হয়।",
      howItWorks:
        "জাভাস্ক্রিপ্ট ইঞ্জিনে ফাংশন নিজেও এক ধরণের স্পেশাল অবজেক্ট (`Callable Object`), তাই একে মেমরির রেফারেন্স হিসেবে পাস ও রিটার্ন করা সম্ভব হয়।",
      whenToUse:
        "অ্যারে ট্রান্সফরমেশন (`map/filter`), ফাংশন কম্পোজিশন, কারিং, ইভেন্ট হ্যান্ডলিং ও মিডলওয়্যার প্যাটার্নে Higher-Order Functions ব্যবহৃত হয়।",
      keyPoints: [
        "First-Class Function ল্যাঙ্গুয়েজ ক্ষমতা দেয়; HOF সেই ক্ষমতা ব্যবহার করে তৈরি হয়।",
        "`map`, `filter`, `reduce`, `addEventListener` সবাই Higher-Order Functions।",
        "Higher-Order Components (HOC) ও Custom Hooks এই কনসেপ্টেরই অংশ।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. First-Class Function: ভেরিয়েবলে অ্যাসাইন করা
const greet = function(name) {
  return \`Welcome, \${name}!\`;
};

// ২. Higher-Order Function: ফাংশন প্যারামিটার হিসেবে গ্রহণ করে
function processUser(name, callbackFn) {
  console.log("Processing in database...");
  return callbackFn(name);
}
console.log(processUser("Shuvo", greet)); // Welcome, Shuvo!

// ৩. Higher-Order Function: নতুন ফাংশন রিটার্ন করে (Multiplier Generator)
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10
const triple = createMultiplier(3);
console.log(triple(5)); // 15`,
      explanationSteps: [
        {
          step: 1,
          title: "First-Class Assignment",
          description: "greet ফাংশনটি সাধারণ ভ্যালুর মতো একটি ভেরিয়েবলে রাখা হয়েছে।",
        },
        {
          step: 2,
          title: "HOF with Callback",
          description: "processUser ফাংশনটি greet ফাংশনকে আর্গুমেন্ট হিসেবে নিয়ে এক্সিকিউট করেছে।",
        },
        {
          step: 3,
          title: "HOF Returning Function",
          description: "createMultiplier একটি নতুন কাস্টম ফাংশন রিটার্ন করেছে যা ক্লোজারের মাধ্যমে factor মনে রাখে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "Array Data Transformation",
        description: "`users.filter(u => u.isActive).map(u => u.email)` — ডেটা প্রসেসিংয়ে HOF এর সেরা উদাহরণ।",
      },
      {
        title: "Express.js Middlewares",
        description: "Express-এর `(req, res, next) => {}` মিডলওয়্যার এবং অথেন্টিকেশন গার্ড HOF প্যাটার্নে তৈরি।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে ক্লিয়ার করে বলুন: 'First-class function is the language feature, and Higher-order function is the practical pattern built using that feature.'",
      deliveryStrategy: "ম্যাপ/ফিল্টারের পাশাপাশি একটি কাস্টম HOF এর উদাহরণ (যেমন কারিং বা টাইমার) মুখে বলুন।",
      avoidSaying: [
        {
          wrong: "দুটো একই জিনিস, নাম শুধু আলাদা।",
          right: "First-class হলো ল্যাঙ্গুয়েজের ক্ষমতা (ফাংশনকে ভেরিয়েবল হিসেবে ট্রিট করা), আর HOF হলো সেই ফাংশন যা অন্য ফাংশন গ্রহণ করে বা রিটার্ন করে।",
        },
      ],
    },
    quickRevision: [
      "First-Class: Functions treated as values (variables, args, returns)।",
      "Higher-Order: Functions that take functions OR return functions।",
      "Built-ins: `.map()`, `.filter()`, `.reduce()`, `setTimeout()`।",
    ],
    followUpQuestions: [
      {
        question: "Function Currying কী এবং এটি কীভাবে HOF এর সাথে সম্পর্কিত?",
        targetId: "currying-in-javascript",
        shortHint: "Currying হলো একটি HOF টেকনিক যা একটি করে আর্গুমেন্ট নিয়ে নতুন ফাংশন চেইন রিটার্ন করে।",
      },
    ],
    tags: ["Functions", "HOF", "Functional Programming", "Core JS"],
  },
  {
    id: "javascript-iife-immediately-invoked-function-expression",
    slug: "javascript-iife-immediately-invoked-function-expression",
    question: "What is an IIFE (Immediately Invoked Function Expression) and why is it used?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer:
      "IIFE (Immediately Invoked Function Expression) হলো এমন একটি জাভাস্ক্রিপ্ট ফাংশন যা ডিফাইন করার সাথে সাথেই স্বয়ংক্রিয়ভাবে এক্সিকিউট হয়ে যায়। এর মূল উদ্দেশ্য হলো গ্লোবাল স্কোপ পলিউশন রোধ করা এবং প্রাইভেট স্কোপ তৈরি করা।",
    easyExplanation:
      "IIFE মূলত দুটি অংশ নিয়ে গঠিত:\n\n১. **গ্রুপিং অপারেটর `()`**: ফাংশনটিকে স্টেটমেন্ট না বানিয়ে একটি এক্সপ্রেশনে রূপান্তর করে।\n২. **কলিং প্যারেন্থেসিস `()`**: যা সাথে সাথে ফাংশনটিকে রান করিয়ে দেয়।\n\n**কেন প্রয়োজন হতো?**\nES6 মডিউল (`import/export`) এবং `let`/`const` আসার আগে জাভাস্ক্রিপ্টে শুধুমাত্র Function Scope ছিল। কোনো ভেরিয়েবল বাইরে লিখলে তা গ্লোবাল হয়ে যেত এবং অন্য স্ক্রিপ্টের সাথে কনফ্লিক্ট করতো। IIFE ব্যবহার করে নিজস্ব প্রাইভেট স্কোপ তৈরি করে গ্লোবাল স্কোপকে ক্লিন রাখা হতো।",
    interviewAnswer:
      "An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It syntax looks like `(function() { ... })()`. Traditionally, before ES6 block scoping and modules, IIFEs were primarily used to create a private lexical scope, prevent global namespace pollution, and implement the module pattern with data privacy. While modern ES modules have reduced its usage, it is still valuable for top-level async initializations and isolated one-off executions.",
    detailedExplanation: {
      whatItIs:
        "IIFE হলো একটি সেলফ-এক্সিকিউটিং অ্যানোনিমাস বা নেমড ফাংশন যা ব্রাউজার পার্স করার সাথে সাথে একবারের জন্য রান করে।",
      whyItExists:
        "গ্লোবাল ভেরিয়েবল ক্ল্যাশ এড়াতে, প্রাইভেট স্টেট তৈরি করতে এবং লাইব্রেরিগুলোতে (যেমন jQuery, Lodash) সেফ আইসোলেশন নিশ্চিত করতে।",
      howItWorks:
        "প্রথম ব্র্যাকেট সেট `(...)` জাভাস্ক্রিপ্ট পার্সারকে বলে এটি একটি Function Expression (Declaration নয়), এবং পেছনের `()` সাথে সাথে ওই ফাংশন অবজেক্টটিকে ইনভোক করে।",
      whenToUse:
        "লাইব্রেরি ও প্লাগইন প্যাকেজিংয়ে, অ্যাসিনক্রোনাস ইনিশিয়ালাইজেশন কোড আইসোলেট করতে, এবং লুপের ভেতর ক্লোজার ক্যাপচার করতে।",
      keyPoints: [
        "সিনট্যাক্স: `(function() { /* code */ })();` অথবা Arrow: `(() => {})();`",
        "গ্লোবাল ভেরিয়েবল পলিউশন পুরোপুরি আটকায়।",
        "মডার্ন JS-এ ES Modules আসার পর এর সরাসরি ব্যবহার কমেছে, তবে কোর কনসেপ্ট হিসেবে ইন্টারভিউতে জনপ্রিয়।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. ট্র্যাডিশনাল IIFE
(function() {
  const secretApiKey = "SECRET_12345";
  console.log("IIFE Initialized safely!");
})();
// console.log(secretApiKey); // ReferenceError: secretApiKey is not defined!

// ২. IIFE দিয়ে প্রাইভেট মডিউল প্যাটার্ন (Data Encapsulation)
const counterModule = (function() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.increment()); // 2
console.log(counterModule.count);       // undefined (প্রাইভেট ভেরিয়েবল সুরক্ষিত!)

// ৩. Async IIFE
(async () => {
  const data = await Promise.resolve("Top level async data");
  console.log(data);
})();`,
      explanationSteps: [
        {
          step: 1,
          title: "Private Scope",
          description: "secretApiKey শুধুমাত্র IIFE-এর ভেতর সীমাবদ্ধ, গ্লোবাল উইন্ডোতে পৌঁছাতে পারে না।",
        },
        {
          step: 2,
          title: "Module Pattern",
          description: "counterModule অবজেক্ট মেথড রিটার্ন করেছে যা ক্লোজারের মাধ্যমে ভেতরের count এক্সেস করে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "SDK / Library Bundling (UMD)",
        description: "Google Analytics বা SDK স্ক্রিপ্টগুলো পুরো কোড একটি IIFE-এ মুড়িয়ে দেয় যাতে ইউজারের কোডের ভেরিয়েবলের সাথে কনফ্লিক্ট না হয়।",
      },
      {
        title: "Async Data Setup in Scripts",
        description: "টপ-লেভেল মডিউল ছাড়াও সাধারণ স্ক্রিপ্টে `(async () => { await init(); })()` দিয়ে অ্যাসিনক্রোনাস কাজ শুরু করা।",
      },
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Historically IIFE was the backbone of JS modularity and data privacy before ES6 modules. Today we also use async IIFEs for instant async execution.'",
      deliveryStrategy: "প্রথম ব্র্যাকেটের উদ্দেশ্য (Declaration কে Expression এ রূপান্তর করা) ব্যাখ্যা করলে অতিরিক্ত নম্বর পাওয়া যায়।",
      avoidSaying: [
        {
          wrong: "IIFE শুধু সাধারণ ফাংশনের মতো পরে কল করার জন্য।",
          right: "IIFE ডিফাইন করার সাথে সাথেই রান করে এবং এটি পরে আর ম্যানুয়ালি কল করা যায় না।",
        },
      ],
    },
    quickRevision: [
      "IIFE: `(function(){ ... })()` — তাৎক্ষণিক রান হয়।",
      "উদ্দেশ্য: গ্লোবাল স্কোপ সুরক্ষিত রাখা ও প্রাইভেট ডাটা তৈরি।",
      "মডিউল প্যাটার্নের (Module Pattern) মূল ভিত্তি।",
    ],
    followUpQuestions: [
      {
        question: "ES6 মডিউল আসার পর IIFE-এর প্রয়োজনীয়তা কি কমে গেছে?",
        shortHint: "হ্যাঁ, কারণ প্রতিটি ES Module ফাইল নিজস্ব ফাইল-লেভেল স্কোপ তৈরি করে।",
      },
    ],
    tags: ["IIFE", "Scope", "Closures", "Module Pattern"],
  },
  {
    id: "javascript-rest-parameter-vs-spread-operator",
    slug: "javascript-rest-parameter-vs-spread-operator",
    question: "What is the difference between Rest Parameter and Spread Operator in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer:
      "দুটোই তিনটি ডট (`...`) সিনট্যাক্স ব্যবহার করে, কিন্তু কাজ সম্পূর্ণ বিপরীত। **Rest Parameter** একাধিক আর্গুমেন্টকে একত্রিত করে একটি সিঙ্গেল অ্যারেতে বানায় (ফাংশন প্যারামিটারে ব্যবহৃত হয়)। পক্ষান্তরে **Spread Operator** একটি অ্যারে বা অবজেক্টের উপাদানগুলোকে খুলে আলাদা আলাদা উপাদানে ছড়িয়ে বা বিস্তার করে দেয়।",
    easyExplanation:
      "সহজ ভাষায়:\n\n১. **Rest Parameter (`...rest`) — একত্রিত করা (Collects into Array)**:\n- এটি ফাংশন ডিক্লারেশনের শেষ প্যারামিটারে বসে।\n- যতগুলো অতিরিক্ত আর্গুমেন্ট পাস করা হয়, সেগুলোকে একটি অ্যারে হিসেবে গুটিয়ে নেয়।\n- উদাহরণ: `function sum(...nums)` -> `nums` হলো `[1, 2, 3]`।\n\n২. **Spread Operator (`...spread`) — ছড়িয়ে দেওয়া (Expands elements)**:\n- এটি ফাংশন কলিং, অ্যারে লিটারেল বা অবজেক্ট লিটারেলে বসে।\n- একটি অ্যারে বা অবজেক্টকে খুলে তার ভেতরের উপাদানগুলোকে আলাদা আলাদা করে দেয়।\n- উদাহরণ: `Math.max(...[1, 5, 2])` -> `Math.max(1, 5, 2)`।",
    interviewAnswer:
      "Although both use the triple dot (`...`) syntax, their purposes are opposite. The **Rest Parameter** is used in function definitions to collect multiple individual arguments into a single real Array. It must always be the last parameter. On the other hand, the **Spread Operator** is used in function calls, array literals, or object literals to expand or unpack iterable elements into individual items, commonly used for shallow copying and merging data.",
    detailedExplanation: {
      whatItIs:
        "Rest হলো কালেকশন মেকানিজম (Gathers elements), আর Spread হলো আনপ্যাকিং মেকানিজম (Spreads elements)।",
      whyItExists:
        "পুরোনো `arguments` অবজেক্টের লিমিটেশন দূর করতে এবং সহজে ইমিউটেবল অ্যারে/অবজেক্ট মার্জ করার সুবিধার্থে ES6-এ এগুলো আনা হয়।",
      howItWorks:
        "Rest প্যারামিটার ফাংশন কলের সময় অবশিষ্ট আর্গুমেন্টগুলোকে দিয়ে একটি নতুন `Array` ইনস্ট্যান্স তৈরি করে। Spread অপারেটর ইটারেটর প্রটোকল (`[Symbol.iterator]`) ব্যবহার করে উপাদানগুলোকে আলাদা আলাদা স্থানে বসায়।",
      whenToUse:
        "যখন ফাংশনে কয়টি আর্গুমেন্ট আসবে তা নিশ্চিত নয় তখন Rest ব্যবহার করুন। আর অবজেক্ট/অ্যারে ক্লোন ও মার্জ করতে Spread ব্যবহার করুন।",
      keyPoints: [
        "Rest ফাংশন ডেফিনিশনের প্যারামিটারে বসে এবং অবশ্যই শেষ প্যারামিটার হতে হবে।",
        "Spread ফাংশন কলিংয়ে বা অবজেক্ট/অ্যারে লিটারেলে বসে।",
        "`arguments` অবজেক্টের চেয়ে Rest প্যারামিটার উত্তম কারণ Rest প্রকৃত অ্যারে মেথড (`map`, `filter`) সাপোর্ট করে।",
      ],
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Rest Parameter: একাধিক মানকে ১টি অ্যারেতে গুটিয়ে নেয়
function calculateTotal(taxRate, ...prices) {
  console.log("Tax Rate:", taxRate);
  console.log("Prices Array:", prices); // [100, 200, 300] (Real Array!)
  
  const sum = prices.reduce((acc, curr) => acc + curr, 0);
  return sum + (sum * taxRate);
}
console.log(calculateTotal(0.1, 100, 200, 300)); // 660

// ২. Spread Operator: ১টি অ্যারেকে ছড়িয়ে আলাদা মান বানায়
const numbers = [15, 82, 4];
console.log(Math.max(...numbers)); // 82 (Math.max(15, 82, 4) এর সমান)

// ৩. Spread দিয়ে Immutably Array & Object Merge
const user = { name: "Shuvo", role: "Developer" };
const updatedUser = { ...user, location: "Dhaka", role: "Lead" }; // shallow clone with override
console.log(updatedUser); // { name: 'Shuvo', role: 'Lead', location: 'Dhaka' }`,
      explanationSteps: [
        {
          step: 1,
          title: "Rest in Action",
          description: "...prices সমস্ত অবশিষ্ট আর্গুমেন্টকে [100, 200, 300] অ্যারেতে রূপান্তর করেছে।",
        },
        {
          step: 2,
          title: "Spread in Action",
          description: "...numbers অ্যারের উপাদানগুলোকে খুলে আলাদা আর্গুমেন্ট হিসেবে Math.max-এ পাঠিয়েছে।",
        },
        {
          step: 3,
          title: "Object Spread",
          description: "user অবজেক্টের প্রপার্টিগুলো নতুন অবজেক্টে স্প্রেড করে role ওভাররাইড করা হয়েছে।",
        },
      ],
    },
    realWorldExamples: [
      {
        title: "React State Updating",
        description: "`setUser(prev => ({ ...prev, name: 'New Name' }))` — React-এ ইমিউটেবল স্টেট আপডেটের প্রধান হাতিয়ার Spread।",
      },
      {
        title: "Dynamic Middleware Logger",
        description: "`function log(level, ...messages)` — লগিং ফাংশনে যেকোনো সংখ্যক মেসেজ গ্রহণ করা।",
      },
    ],
    interviewTips: {
      tip: "সহজ স্মৃতিসূত্র বলুন: 'Rest parameter collects items into an array, while Spread operator unpacks an array into individual items.'",
      deliveryStrategy: "Rest প্যারামিটার কেন শেষ প্যারামিটার হতে হয় এবং ফাংশনে কেন একাধিক Rest থাকা সম্ভব নয় তা ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "দুটোই স্প্রেড অপারেটর, শুধু জায়গায় ভেদে আলাদা।",
          right: "সিনট্যাক্স একই হলেও ফাংশন প্যারামিটারে থাকলে তাকে Rest Parameter এবং এক্সপ্রেশনে থাকলে Spread Operator বলে।",
        },
      ],
    },
    quickRevision: [
      "Rest (`...args`): ফাংশন প্যারামিটারে বসে -> মানগুলো গুটিয়ে অ্যারে বানায়।",
      "Spread (`...arr`): ফাংশন কল/অবজেক্টে বসে -> অ্যারে খুলে আলাদা করে দেয়।",
      "Rest প্যারামিটার সবসময় ফাংশনের শেষ প্যারামিটার হতে হবে।",
    ],
    followUpQuestions: [
      {
        question: "Rest parameter এবং arguments অবজেক্টের মধ্যে পার্থক্য কী?",
        shortHint: "Rest প্যারামিটার একটি আসল Array (map/filter কাজ করে), কিন্তু arguments হলো Array-like অবজেক্ট।",
      },
    ],
    tags: ["Rest Parameter", "Spread Operator", "ES6", "Syntax"],
  },
];
