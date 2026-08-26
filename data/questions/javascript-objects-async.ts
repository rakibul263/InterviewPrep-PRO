import { Question } from "@/types";

export const javascriptObjectsAsyncQuestions: Question[] = [
  {
    id: "prototype-chaining",
    slug: "prototype-chaining",
    question: "Explain prototype chaining in JavaScript.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "JavaScript-এ প্রতিটি অবজেক্টের একটি লুকানো অভ্যন্তরীণ লিঙ্ক থাকে যা অন্য একটি অবজেক্টকে নির্দেশ করে, যাকে Prototype (`[[Prototype]]` বা `__proto__`) বলে। যখন কোনো অবজেক্টে কোনো প্রোপার্টি বা মেথড খোঁজা হয় এবং তা পাওয়া যায় না, তখন JS ইঞ্জিন প্রোটোটাইপ ধরে ধরে ওপরের অবজেক্টগুলোতে খুঁজতে থাকে যতক্ষণ না তা পাওয়া যায় অথবা চেইনের শেষ সীমা `null` এ পৌঁছায়। এই লিঙ্কযুক্ত মেকানিজমকেই Prototype Chaining বলে।",
    easyExplanation: "সহজ পারিবারিক বংশলতিকার মতো বুঝুন:\n১. ধরুন আপনার কাছে একটি বাড়ি (`myCar`) আছে। কেউ এসে জিজ্ঞেস করল: 'আপনার কি সুইমিং পুল আছে?'\n২. আপনি প্রথমে আপনার নিজের বাড়িতে খুঁজলেন। পেলেন না।\n৩. তখন আপনি আপনার বাবার বাড়ি (`Parent Prototype`)-এ গিয়ে দেখলেন সেখানে আছে কি না। সেখানেও নেই।\n৪. তখন আপনি দাদার বাড়ি (`Grandparent / Object.prototype`)-এ গিয়ে দেখলেন। সেখানেও না থাকলে আপনি বলবেন 'নাই' (`undefined`)।\n৫. এই যে নিজের অবজেক্ট থেকে শুরু করে বাবা -> দাদা -> আদি পিতা (`Object.prototype`) -> `null` পর্যন্ত খোঁজার সিঁড়ি, এটাই Prototype Chain।",
    interviewAnswer: "Prototype chaining is JavaScript's core mechanism for inheritance and property lookup. Every JavaScript object has an internal hidden reference [[Prototype]] (exposed via __proto__ or Object.getPrototypeOf). When accessing a property on an object, the JS engine first inspects the object itself. If not found, it traverses up the prototype chain to its prototype, then the prototype's prototype, continuing until it either finds the property or reaches the end of the chain (Object.prototype.[[Prototype]] === null), returning undefined.",
    detailedExplanation: {
      whatItIs: "অবজেক্টগুলোর মধ্যে মেথড এবং প্রোপার্টি শেয়ার করার জন্য তৈরি হওয়া প্রোটোটাইপাল লিঙ্কের চেইন।",
      whyItExists: "ক্লাসিক্যাল ক্লাসের মতো মেমরি ডুপ্লিকেশন না করে, কোটি কোটি ইনস্ট্যান্সের জন্য মেমরি সাশ্রয়ী উপায়ে কমন মেথড শেয়ার করতে।",
      howItWorks: "যখন `obj.method()` কল হয়:\n১. Check `obj.hasOwnProperty('method')`.\n২. না পেলে Check `Object.getPrototypeOf(obj).method`.\n৩. না পেলে চেইন ধরে উঠতে থাকে `Object.prototype` পর্যন্ত।\n৪. শেষ ধাপে `Object.prototype.__proto__` হলো `null`। তখন `undefined` রিটার্ন করে।",
      whenToUse: "সব জাভাস্ক্রিপ্ট বিল্ট-ইন মেথড (যেমন `Array.prototype.map`, `String.prototype.trim`) প্রোটোটাইপ চেইনের মাধ্যমেই কাজ করে।",
      keyPoints: [
        "All objects ultimately inherit from `Object.prototype` (except `Object.create(null)`).",
        "`Object.prototype.__proto__ === null` (End of the chain).",
        "Property shadowing: নিজের অবজেক্টে একই নামের প্রোপার্টি থাকলে প্রোটোটাইপের প্রোপার্টি ওভাররাইড/হাইড হয়ে যায়।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const animal = {
  eats: true,
  walk() {
    console.log("Animal is walking");
  }
};

// animal-কে প্রোটোটাইপ বানিয়ে dog অবজেক্ট তৈরি
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // Output: true (Found on dog itself)
console.log(dog.eats);  // Output: true (Inherited from animal via prototype chain)
dog.walk();             // Output: "Animal is walking"

// Prototype Chain Inspection
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (End of chain)

console.log(dog.flying); // undefined (Traversed till null, not found)`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রোটোটাইপ লিংক তৈরি",
          description: "Object.create(animal) ব্যবহারের ফলে dog অবজেক্টের [[Prototype]] লিংক সরাসরি animal অবজেক্টের দিকে পয়েন্ট করছে।"
        },
        {
          step: 2,
          title: "প্রোপার্টি লুকআপ ট্রেস",
          description: "dog.eats খোঁজার সময় dog-এ না পেয়ে চেইন বেয়ে animal-এ পাওয়া গেছে।"
        },
        {
          step: 3,
          title: "চেইনের সমাপ্তি",
          description: "dog -> animal -> Object.prototype -> null এই সিকোয়েন্সে সার্চ সম্পন্ন হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Array & Object Built-ins",
        description: "যেকোনো `[1, 2].map()` কল করার সময় অ্যারে ইনস্ট্যান্সের ভেতর map মেথড না থাকা সত্ত্বেও `Array.prototype.map` থেকে পাওয়া যায়।"
      },
      {
        title: "ES6 Class Syntactic Sugar",
        description: "ES6-এর `class Dog extends Animal` ইন্টারনালি প্রোটোটাইপ চেইনিংয়ের ওপরেই রান করে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'JS-এ ট্র্যাডিশনাল ক্লাসের মতো কোড কপি হয়'। বলবেন 'JS হলো Prototypal Inheritance, যেখানে লিঙ্কের মাধ্যমে লাইভ রেফারেন্স চেইনিং হয়'।",
      deliveryStrategy: "সংজ্ঞা -> লুকআপ অ্যালগরিদম -> Object.prototype থেকে null পর্যন্ত ধাপ -> কোড উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "JavaScript-এর ক্লাস C++ বা Java-এর মতো কাজ করে।",
          right: "JavaScript-এর class শুধুমাত্র Syntactic Sugar, এর মূল আর্কিটেকচার হলো Prototype Chaining।"
        }
      ]
    },
    quickRevision: [
      "Prototype Chain = অবজেক্টদের মধ্যে [[Prototype]] লিঙ্কের চেইন।",
      "লুকআপ অর্ডার: Own Object -> Parent Prototype -> ... -> Object.prototype -> null.",
      "চেইনের শেষ সীমা `Object.prototype.__proto__ === null`।",
      "মেথড না পাওয়া গেলে ক্র্যাশ করে না, `undefined` দেয়।"
    ],
    followUpQuestions: [
      {
        question: "Difference between Object.create() and class-based inheritance.",
        targetId: "object-create-vs-class",
        shortHint: "প্রোটোটাইপ অবজেক্ট বনাম ক্লাস কন্সট্রাক্টর।"
      }
    ],
    tags: ["JavaScript", "Prototypes", "OOP", "Inheritance", "Object"]
  },
  {
    id: "shallow-copy-vs-deep-copy",
    slug: "shallow-copy-vs-deep-copy",
    question: "What is the difference between shallow copy and deep copy?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Shallow Copy শুধুমাত্র অবজেক্টের প্রথম লেভেলের (top-level) প্রোপার্টিগুলোকে কপি করে, কিন্তু ভেতরের নেস্টেড অবজেক্ট বা অ্যারের আসল মেমরি রেফারেন্স শেয়ার করে। ফলে নেস্টেড ডেটা পরিবর্তন করলে আসল অবজেক্টও বদলে যায়। আর Deep Copy অবজেক্টের সমস্ত নেস্টেড লেভেলসহ সম্পূর্ণ নতুন একটি মেমরি ক্লোন তৈরি করে, ফলে আসল এবং নকল অবজেক্টের মধ্যে কোনো সম্পর্ক থাকে না।",
    easyExplanation: "সহজ উদাহরণ:\nধরুন একটি অবজেক্টে আছে: `{ name: 'Shuvo', address: { city: 'Dhaka' } }`\n\n১. Shallow Copy (যেমন `const clone = { ...original }`):\n- আপনি `clone.name = 'Rahim'` করলে আসলটার কোনো ক্ষতি হবে না।\n- কিন্তু `clone.address.city = 'Chittagong'` করলে আসলের address-ও বদলে 'Chittagong' হয়ে যাবে! কারণ address অবজেক্টের ভেতরের মেমরি অ্যাড্রেস একই রয়ে গেছে।\n\n২. Deep Copy (যেমন `structuredClone(original)`):\n- এটি ভেতরের সমস্ত নেস্টেড অবজেক্ট ও অ্যারেকেও সম্পূর্ণ আলাদা মেমরিতে ডুপ্লিকেট করে। ফলে ক্লোনে যাই পরিবর্তন করুন না কেন, আসল অবজেক্ট ১০০% সুরক্ষিত থাকবে।",
    interviewAnswer: "A Shallow Copy duplicates the top-level properties of an object to a new object, but nested objects or arrays are copied by reference. Modifying a nested property in the shallow copy directly mutates the original object. In contrast, a Deep Copy recursively duplicates all properties at every level, creating completely independent copies in memory. In modern JavaScript, deep copy is natively achieved via `structuredClone()`, whereas shallow copy is done via the spread operator `{...obj}` or `Object.assign()`.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্ট রেফারেন্স টাইপ (Objects/Arrays) ক্লোন করার দুটি ভিন্ন মেথডোলজি।",
      whyItExists: "জাভাস্ক্রিপ্টে প্রিমিটিভ ডেটা ভ্যালু দিয়ে এবং অবজেক্ট মেমরি রেফারেন্স দিয়ে কাজ করে। আন-ইন্টেনশনাল স্টেট মিউটেশন রোধ করতে কপি মেকানিজম জানা আবশ্যক।",
      howItWorks: "Shallow Copy-তে মেমরি পয়েন্টার কপি হয় নেস্টেড লেভেলে। Deep Copy-তে রিকার্সিভলি মেমরি ট্রাভার্স করে নতুন অবজেক্ট তৈরি হয়।",
      whenToUse: "ফ্ল্যাট অবজেক্ট হলে স্প্রেড অপারেটর `{...obj}` যথেষ্ট। কিন্তু জটিল নেস্টেড স্টেট বা Redux/React স্টেট আপডেটে Deep Copy বা `structuredClone` দরকার।",
      keyPoints: [
        "Shallow Copy methods: `{ ...obj }`, `Object.assign({}, obj)`, `[...arr]`, `arr.slice()`.",
        "Deep Copy methods: `structuredClone(obj)` (Modern & Recommended), `JSON.parse(JSON.stringify(obj))` (Legacy, loses Dates, Functions, undefined).",
        "`structuredClone` Circular References এবং Date, Map, Set ও হ্যান্ডেল করতে পারে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const user = {
  name: "Shuvo",
  skills: ["JavaScript", "TypeScript"],
  details: { role: "Engineer" }
};

// ১. Shallow Copy (Spread Operator)
const shallowUser = { ...user };
shallowUser.name = "Updated Shuvo"; // ✅ Top-level safe
shallowUser.skills.push("Next.js");  // ❌ Original-ও পরিবর্তিত হবে!

console.log("Original skills:", user.skills); 
// Output: ["JavaScript", "TypeScript", "Next.js"] (Mutated!)

// ২. Deep Copy (Modern structuredClone)
const deepUser = structuredClone(user);
deepUser.skills.push("PostgreSQL");
deepUser.details.role = "Architect";

console.log("Original skills:", user.skills); 
// Output: ["JavaScript", "TypeScript", "Next.js"] (Safe, no PostgreSQL!)
console.log("Original role:", user.details.role); 
// Output: "Engineer" (Unchanged!)`,
      explanationSteps: [
        {
          step: 1,
          title: "Shallow Copy-র সীমাবদ্ধতা",
          description: "স্প্রেড অপারেটর ব্যবহারের পরেও skills অ্যারের মেমরি রেফারেন্স একই থাকায় পুশ করার সাথে সাথে আসল অবজেক্ট মিউটেট হয়ে গেছে।"
        },
        {
          step: 2,
          title: "structuredClone সুবিধা",
          description: "structuredClone সম্পূর্ণ নেস্টেড স্ট্রাকচারকে রিকার্সিভলি মেমরিতে নতুন কপি করায় deepUser-এর পরিবর্তন আসল অবজেক্টকে স্পর্শ করেনি।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React / Redux Immutability",
        description: "রিঅ্যাক্ট স্টেটকে দুর্ঘটনাবশত মিউটেশন থেকে বাঁচাতে নেস্টেড অবজেক্ট আপডেটে ডিপ ক্লোন বা ইমার (Immer) লাইব্রেরি ব্যবহার করা।"
      },
      {
        title: "Form Initial Values Reset",
        description: "ইউজার ফর্মে ইনপুট দেওয়ার আগে অরিজিনাল ডেটার ডিপ ক্লোন রাখা যাতে 'Cancel' বাটনে ক্লিক করলে পূর্বের স্টেট রিস্টোর করা যায়।"
      }
    ],
    interviewTips: {
      tip: "JSON.parse(JSON.stringify(obj))-এর সীমাবদ্ধতাগুলো (Date অবজেক্ট স্ট্রিং হয়ে যায়, Functions ও undefined ড্রপ করে, Circular reference-এ ক্র্যাশ করে) উল্লেখ করে আধুনিক `structuredClone()`-কে সেরা সমাধান হিসেবে তুলে ধরুন।",
      deliveryStrategy: "সংজ্ঞা -> নেস্টেড রেফারেন্সের সমস্যা -> কোড ডেমো -> `structuredClone` বনাম `JSON.stringify` পার্থক্য বলুন।",
      avoidSaying: [
        {
          wrong: "JSON.parse(JSON.stringify()) সবসময় সব অবজেক্ট ডিপ কপি করতে পারে।",
          right: "JSON মেথড Date, Map, Set, RegEx, Functions এবং Circular Reference ঠিকমতো হ্যান্ডেল করতে পারে না; আধুনিক `structuredClone` ব্যবহার করা উচিত।"
        }
      ]
    },
    quickRevision: [
      "Shallow Copy: Top-level কপি হয়, Nested লেভেলে রেফারেন্স শেয়ার করে (`{...obj}`).",
      "Deep Copy: সমস্ত লেভেল সম্পূর্ণ আলাদা মেমরিতে ক্লোন হয় (`structuredClone(obj)`).",
      "JSON.parse(JSON.stringify(obj)) ফাংশন এবং ডেট অবজেক্ট সাপোর্ট করে না।",
      "Native সমাধান: Modern Browsers এবং Node.js 17+ এ `structuredClone()` সেরা।"
    ],
    followUpQuestions: [
      {
        question: "Explain immutability and why it matters.",
        targetId: "immutability-why-it-matters",
        shortHint: "ইমিউটেবিলিটি কেন গুরুত্বপূর্ণ।"
      },
      {
        question: "How does Object.freeze() differ from Object.seal()?",
        targetId: "object-freeze-vs-seal",
        shortHint: "অবজেক্ট মিউটেশন প্রতিরোধ।"
      }
    ],
    tags: ["JavaScript", "Objects", "Shallow Copy", "Deep Copy", "Immutability"]
  },
  {
    id: "object-freeze-vs-seal",
    slug: "object-freeze-vs-seal",
    question: "How does Object.freeze() differ from Object.seal()?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Medium",
    shortAnswer: "`Object.seal()` একটি অবজেক্টে নতুন প্রোপার্টি যোগ করা বা বিদ্যমান প্রোপার্টি মুছে ফেলা বন্ধ করে, তবে বিদ্যমান প্রোপার্টির মান পরিবর্তন (modify) করার অনুমতি দেয়। আর `Object.freeze()` আরও কঠোর—এটি নতুন যোগ, মুছে ফেলা এবং বিদ্যমান প্রোপার্টির মান পরিবর্তন—সবকিছুই সম্পূর্ণ নিষিদ্ধ করে অবজেক্টকে পুরোপুরি রিড-অনলি (read-only) বানিয়ে ফেলে।",
    easyExplanation: "সহজ নিয়মে বুঝুন:\n\n১. Object.seal (সিলমোহর করা):\n- নতুন কিছু ঢোকানো যাবে না (No Add).\n- কোনো প্রোপার্টি ডিলিট করা যাবে না (No Delete).\n- কিন্তু ভেতরে যা আছে তার মান এডিট বা আপডেট করা যাবে (Can Modify/Write).\n\n২. Object.freeze (বরফে জমিয়ে দেওয়া):\n- নতুন কিছু যোগ করা যাবে না (No Add).\n- ডিলিট করা যাবে না (No Delete).\n- কোনো মান পরিবর্তনও করা যাবে না (Cannot Modify).\n\nনোট: উভয় মেথডই shallow — অর্থাৎ নেস্টেড অবজেক্টকে সিল বা ফ্রিজ করে না।",
    interviewAnswer: "Object.freeze() and Object.seal() are methods to prevent object mutation. Object.seal() marks all existing properties as non-configurable, preventing adding new properties or deleting existing ones, but still permits modifying values of existing writable properties. Object.freeze() goes further by making all properties non-configurable AND non-writable, effectively making the entire top-level object read-only and immutable.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্ট অবজেক্টের ইনটেগ্রিটি এবং মিউটেবিলিটি লেভেল লক করার মেথড।",
      whyItExists: "কনফিগারেশন অবজেক্টকে অনাকাঙ্ক্ষিত পরিবর্তন থেকে রক্ষা করতে এবং কনস্ট্যান্ট অবজেক্ট নিশ্চিত করতে।",
      howItWorks: "Object.seal প্রোপার্টির ডেসক্রিপ্টরে `configurable: false` সেট করে। Object.freeze `configurable: false` এবং `writable: false` উভয়ই সেট করে।",
      whenToUse: "গ্লোবাল কনফিগারেশন, এনাম্স (Enums), বা স্টেট অবজেক্ট লক করতে freeze ব্যবহৃত হয়।",
      keyPoints: [
        "Object.seal(): No Add, No Delete, Can Modify existing values.",
        "Object.freeze(): No Add, No Delete, Cannot Modify existing values.",
        "উভয়ই Shallow; Deep Freeze করতে রিকার্সিভ ফাংশন প্রয়োজন।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Object.seal Example
const config = { api: "v1", port: 3000 };
Object.seal(config);

config.port = 8080; // ✅ মান পরিবর্তন সফল!
config.host = "localhost"; // ❌ নতুন প্রোপার্টি যোগ হবে না (সাইলেন্টলি ইগনোর বা স্ট্রিক্ট মোডে এরর)
delete config.api; // ❌ ডিলিট হবে না

console.log(config); // { api: "v1", port: 8080 }

// ২. Object.freeze Example
const constants = { PI: 3.1416, theme: "dark" };
Object.freeze(constants);

constants.PI = 4.0; // ❌ মান পরিবর্তন হবে না
constants.author = "Shuvo"; // ❌ যোগ হবে না
delete constants.theme; // ❌ ডিলিট হবে না

console.log(constants); // { PI: 3.1416, theme: "dark" }`,
      explanationSteps: [
        {
          step: 1,
          title: "সিল করা অবজেক্টের আচরণ",
          description: "port-এর মান পরিবর্তন করা গেছে, কিন্তু host প্রোপার্টি যোগ করা যায়নি।"
        },
        {
          step: 2,
          title: "ফ্রিজ করা অবজেক্টের কঠোরতা",
          description: "PI-এর মান পরিবর্তন ও সম্পূর্ণ ব্যর্থ হয়েছে কারণ প্রোপার্টিগুলো non-writable।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "JavaScript Enums Simulation",
        description: "TypeScript ছাড়া খাঁটি JS-এ এনাম ডিফাইন করতে: `const STATUS = Object.freeze({ ACTIVE: 'ACTIVE', PENDING: 'PENDING' });`।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে মনে করিয়ে দিন যে 'উভয় মেথডই shallow'। নেস্টেড অবজেক্ট সিল বা ফ্রিজ হয় না যদি না ডিপ ফ্রিজ করা হয়।",
      deliveryStrategy: "তুলনামূলক টেবিল (Add / Delete / Modify) আকারে ৩টি পয়েন্ট উপস্থাপন করুন।",
      avoidSaying: [
        {
          wrong: "const ভ্যারিয়েবল ডিক্লেয়ার করলেই অবজেক্টের ভেতর কেউ কিছু পরিবর্তন করতে পারে না।",
          right: "const শুধু ভ্যারিয়েবল রি-অ্যাসাইনমেন্ট ঠেকায়; অবজেক্টের ভেতরের ডেটা মিউটেশন ঠেকাতে Object.freeze() প্রয়োজন।"
        }
      ]
    },
    quickRevision: [
      "Object.seal(): No Add, No Delete, YES Modify.",
      "Object.freeze(): No Add, No Delete, NO Modify (সম্পূর্ণ Read-Only).",
      "উভয় মেথডই Shallow.",
      "Object.isFrozen(obj) এবং Object.isSealed(obj) দিয়ে স্ট্যাটাস চেক করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "Explain immutability and why it matters.",
        targetId: "immutability-why-it-matters",
        shortHint: "ইমিউটেবিলিটির মূল ধারণা।"
      }
    ],
    tags: ["JavaScript", "Objects", "Object.freeze", "Object.seal", "Immutability"]
  },
  {
    id: "promise-states-and-chaining",
    slug: "promise-states-and-chaining",
    question: "Explain Promise states and chaining in JavaScript.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Promise হলো এমন একটি অবজেক্ট যা ভবিষ্যতে কোনো অ্যাসিনক্রোনাস অপারেশনের চূড়ান্ত ফলাফল বা ব্যর্থতা প্রকাশ করে। একটি প্রমিজ ৩টি স্টেটের যেকোনো একটিতে থাকতে পারে: Pending (চলমান), Fulfilled (সফল), অথবা Rejected (ব্যর্থ)। আর Promise Chaining হলো একাধিক অ্যাসিনক্রোনাস কাজকে ক্রমানুসারে একটির পর একটি চালানোর কৌশল, যেখানে প্রতিটি `.then()` স্বয়ংক্রিয়ভাবে একটি নতুন Promise রিটার্ন করে।",
    easyExplanation: "বাস্তব জীবনের প্রতিশ্রুতি দিয়ে বুঝুন:\n১. আপনি দোকানে বার্গার অর্ডার দিলেন। দোকানদার আপনাকে একটি টোকেন (Promise) দিল।\n২. এই মুহূর্তে টোকেনটি 'Pending' (বার্গার তৈরি হচ্ছে)।\n৩. বার্গার ঠিকমতো পেলে টোকেনটি 'Fulfilled' (সফল) হলো।\n৪. মাংস শেষ হয়ে গেলে দোকানদার বার্গার দিতে পারবে না, তখন টোকেনটি 'Rejected' (ব্যর্থ) হলো।\n\nPromise Chaining কী?\nবার্গার পাওয়ার পর আপনি কোল্ড ড্রিঙ্ক কিনবেন, এরপর বিল দেবেন—একটির পর আরেকটি কাজ ধাপে ধাপে সম্পন্ন করার চেইনই হলো `.then().then().catch()` চেইনিং।",
    interviewAnswer: "A JavaScript Promise represents the eventual completion or failure of an asynchronous operation. It has three mutually exclusive states: Pending (initial state), Fulfilled (operation succeeded with a value), and Rejected (operation failed with an error reason). Once settled (Fulfilled or Rejected), a promise's state is immutable. Promise Chaining is a pattern where consecutive `.then()` callbacks return new promises, allowing asynchronous tasks to execute sequentially without nesting callbacks (avoiding callback hell). Any unhandled rejection propagates down the chain until caught by a `.catch()`.",
    detailedExplanation: {
      whatItIs: "ES6 অ্যাসিনক্রোনাস প্রোগ্রামিংয়ের স্ট্যান্ডার্ড ডেটা স্ট্রাকচার এবং চেইনিং মেকানিজম।",
      whyItExists: "কোলব্যাক হেল (Callback Hell বা Pyramid of Doom) দূর করতে এবং অ্যাসিনক্রোনাস কাজের এরর হ্যান্ডলিং সেন্ট্রালাইজ করতে।",
      howItWorks: "Executor ফাংশনে `resolve(data)` কল করলে প্রমিজ Fulfilled হয় এবং `.then()` ট্রিগার হয়। `reject(err)` কল করলে Rejected হয় এবং `.catch()` ট্রিগার হয়। `.then()` এর ভেতর থেকে যা রিটার্ন করা হয়, তা পরবর্তী `.then()`-এর আর্গুমেন্ট হিসেবে যায়।",
      whenToUse: "API fetch রিকোয়েস্ট, ডেটাবেস কোয়েরি, ফাইল রিড/রাইট এবং টাইমার ভিত্তিক অপারেশনে।",
      keyPoints: [
        "৩টি স্টেট: Pending -> Fulfilled বা Rejected (Settled).",
        "একবার Settled হলে স্টেট আর কখনো পরিবর্তন হয় না।",
        "প্রতিটি `.then()` একটি নতুন Promise রিটার্ন করে।",
        "একটি সিঙ্গেল `.catch()` পুরো চেইনের যেকোনো স্টেপের এরর হ্যান্ডেল করতে পারে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. প্রমিজ তৈরি
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Shuvo" });
      } else {
        reject(new Error("Invalid User ID"));
      }
    }, 500);
  });
}

function fetchUserPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([\`\${user.name}'s Post 1\`, \`\${user.name}'s Post 2\`]);
    }, 500);
  });
}

// ২. Promise Chaining
fetchUserData(1)
  .then((user) => {
    console.log("User Loaded:", user.name);
    return fetchUserPosts(user); // রিটার্ন করা প্রমিজ পরবর্তী then-এ যাবে
  })
  .then((posts) => {
    console.log("Posts Loaded:", posts);
  })
  .catch((err) => {
    console.error("Error in chain:", err.message);
  })
  .finally(() => {
    console.log("Operation Complete");
  });`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রথম প্রমিজ রেজলভ",
          description: "fetchUserData(1) সফল হয়ে user অবজেক্ট সহ resolve হয়।"
        },
        {
          step: 2,
          title: "পরবর্তী প্রমিজ চেইনিং",
          description: "প্রথম .then থেকে fetchUserPosts(user) রিটার্ন করায় দ্বিতীয় .then পোস্টগুলোর জন্য অপেক্ষা করে।"
        },
        {
          step: 3,
          title: "সেন্ট্রাল এরর হ্যান্ডলিং",
          description: "চেইনের যেকোনো ধাপে এরর হলে সরাসরি .catch ব্লকে চলে যায় এবং শেষে .finally রান করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Fetch API Request Chaining",
        description: "`fetch('/api/users').then(res => res.json()).then(data => setUsers(data)).catch(err => toast.error(err))` প্যাটার্ন।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বলুন: 'Promise is immutable once settled' — অর্থাৎ একবার fulfilled বা rejected হয়ে গেলে প্রমিজের স্টেট চিরতরে লক হয়ে যায়।",
      deliveryStrategy: "৩টি স্টেট -> Pending/Settled ব্যাখ্যা -> চেইনিং ও রিটার্নিং প্রমিজের নিয়ম -> `.catch` এর প্রপাগেশন বুঝিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "একটি প্রমিজ প্রথমে fulfilled হয়ে পরে rejected হতে পারে।",
          right: "প্রমিজ শুধুমাত্র একবারই ট্রানজিশন করতে পারে (Pending থেকে Fulfilled অথবা Rejected); স্টেট লক হয়ে যায়।"
        }
      ]
    },
    quickRevision: [
      "৩টি স্টেট: Pending, Fulfilled, Rejected.",
      "Settled = Fulfilled অথবা Rejected.",
      "Promise Chaining: একটি `.then()` এর আউটপুট পরের `.then()`-এ যায়।",
      "চেইনের শেষে `.catch()` দিলে যেকোনো লেভেলের এরর ক্যাচ করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "Difference between async/await and Promises internally.",
        targetId: "async-await-vs-promises-internals",
        shortHint: "async/await কীভাবে কাজ করে।"
      },
      {
        question: "Difference between Promise.all, allSettled, race, and any.",
        targetId: "promise-all-allsettled-race-any",
        shortHint: "কনকারেন্ট প্রমিজ মেথডসমূহ।"
      }
    ],
    tags: ["JavaScript", "Async", "Promises", "ES6", "Chaining"]
  },
  {
    id: "async-await-vs-promises-internals",
    slug: "async-await-vs-promises-internals",
    question: "Difference between async/await and Promises internally.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "`async/await` মূলত Promises এবং Generator Functions (`function*` ও `yield`)-এর সমন্বয়ে তৈরি একটি Syntactic Sugar। বাহ্যিকভাবে async/await কোডকে দেখতে সিনক্রোনাস ও ক্লিন মনে হলেও, ইন্টারনালি JS ইঞ্জিন await পাওয়া মাত্র বর্তমান ফাংশনের এক্সিকিউশন পজ করে মাইক্রোটাস্ক কিউতে প্রমিজ রেজলভের জন্য পাঠায় এবং কল স্ট্যাক অন্য কাজের জন্য ছেড়ে দেয়।",
    easyExplanation: "সহজভাবে বুঝুন:\n১. `async` কিওয়ার্ড কোনো সাধারণ ফাংশনের সামনে বসালে ফাংশনটি স্বয়ংক্রিয়ভাবে একটি Promise রিটার্ন করে।\n২. `await` কিওয়ার্ড শুধুমাত্র async ফাংশনের ভেতরে কাজ করে। এটি প্রমিজ রেজলভ হওয়া পর্যন্ত কোড লাইনে একটি 'পজ (Pause)' দেয়।\n৩. এই পজ কিন্তু পুরো ব্রাউজারকে ফ্রিজ করে না! ইঞ্জিন ওই ফাংশনটির কাজ সাময়িক বন্ধ রেখে ব্রাউজারের অন্যান্য কাজ চালাতে থাকে। প্রমিজ সফল হলে মাইক্রোটাস্ক কিউ থেকে এসে আবার বাকি লাইনগুলো চালায়।\n৪. ফলে `.then().then().catch()` চেইনের জটিল সিনট্যাক্স ছাড়াই সাধারণ `try...catch` দিয়ে সুন্দর ও পঠনযোগ্য কোড লেখা যায়।",
    interviewAnswer: "Internally, `async/await` is syntactic sugar built on top of JavaScript Promises and Generator functions (specifically coroutines). When a function is declared with `async`, it is guaranteed to return a Promise. When the engine encounters `await`, it pauses the execution of that specific async function context, yields control back to the event loop, and schedules the resumption as a Microtask upon the promise's resolution. This allows developers to write asynchronous code with synchronous-looking linear flow and native `try/catch` error handling without blocking the main thread.",
    detailedExplanation: {
      whatItIs: "ES2017 (ES8)-এ আসা অ্যাসিনক্রোনাস সিনট্যাক্স যা প্রমিজ হ্যান্ডলিংকে স্ট্রেইটফরোয়ার্ড করে।",
      whyItExists: "জটিল নেস্টেড প্রমিজ চেইন, কন্ডিশনাল অ্যাসিনক্রোনাস ব্রাঞ্চিং এবং ডিবাগিং সহজ করতে।",
      howItWorks: "ইন্টারনালি V8 ইঞ্জিন async ফাংশনকে একটি জেনারেটর কো-রুটিনের মতো এক্সিকিউট করে। await এক্সপ্রেশনটিকে `Promise.resolve(expression)` দিয়ে র‍্যাপ করা হয়। এরপর প্রমিজ সেটেল হওয়া পর্যন্ত ফাংশন স্টেট মেমরিতে সাসপেন্ড থাকে এবং মাইক্রোটাস্ক চেকপয়েন্টে রিজ্যুম হয়।",
      whenToUse: "সব আধুনিক অ্যাসিনক্রোনাস কোডে চেইনিংয়ের বদলে `async/await` ব্যবহার করাই স্ট্যান্ডার্ড বেস্ট প্র্যাকটিস।",
      keyPoints: [
        "`async` function always returns a Promise.",
        "`await` pauses local function execution, not the entire JS thread.",
        "Error handling utilizes standard `try...catch` blocks.",
        "Stack traces in async/await are cleaner and easier to debug than nested promise chains."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Promise চেইনিং পদ্ধতি
function getUserDataPromise(id) {
  return fetch(\`/api/user/\${id}\`)
    .then(res => res.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(res => res.json())
    .catch(err => console.error("Promise Error:", err));
}

// ২. async/await পদ্ধতি (সহজ ও ক্লিন)
async function getUserDataAsync(id) {
  try {
    const userRes = await fetch(\`/api/user/\${id}\`);
    const user = await userRes.json();
    
    const postRes = await fetch(\`/api/posts/\${user.id}\`);
    const posts = await postRes.json();
    
    return { user, posts };
  } catch (err) {
    console.error("Async Error:", err);
  }
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Linear Execution Flow",
          description: "async/await কোডকে সাধারণ সিনক্রোনাস কোডের মতো উপর থেকে নিচে ক্রমানুসারে পড়তে সাহায্য করে।"
        },
        {
          step: 2,
          title: "স্ট্যান্ডার্ড এরর হ্যান্ডলিং",
          description: "যেকোনো নেটওয়ার্ক বা পার্সিং ফেইলিউর সাধারণ try...catch ব্লকে সুন্দরভাবে ধরা পড়ে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Next.js Server Actions & API Routes",
        description: "Next.js App Router-এ ডেটাবেস কোয়েরি বা থার্ড-পার্টি API কল হ্যান্ডেল করতে সর্বত্র async/await ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "জেনারেটর ও মাইক্রোটাস্কের ভূমিকা উল্লেখ করুন। 'await থ্রেড ব্লক করে না, বরং ফাংশন সাসপেন্ড করে ইভেন্ট লুপে কন্ট্রোল ফেরত দেয়' — এটি বলা জরুরি।",
      deliveryStrategy: "Syntactic sugar উল্লেখ -> Internals (Generators + Microtasks) -> try/catch সুবিধা -> থ্রেড নন-ব্লকিং আচরণ বলুন।",
      avoidSaying: [
        {
          wrong: "await দিলে পুরো ব্রাউজার বা নোডজেএস থ্রেড থেমে থাকে।",
          right: "await শুধুমাত্র ওই নির্দিষ্ট লোকাল ফাংশন এক্সিকিউশন সাসপেন্ড করে, মেইন থ্রেড অন্য ইভেন্ট ও কোড চালাতে থাকে।"
        }
      ]
    },
    quickRevision: [
      "async/await = Promises + Generator syntax sugar.",
      "async ফাংশন সবসময় Promise রিটার্ন করে।",
      "await লোকাল ফাংশন পজ করে মাইক্রোটাস্ক হিসেবে রেজলভের পর রিজ্যুম হয়।",
      "মেইন থ্রেড ফ্রি থাকে এবং অন্য কোড রান করতে পারে।"
    ],
    followUpQuestions: [
      {
        question: "What happens if you don’t await an async function?",
        targetId: "not-awaiting-async-function",
        shortHint: "আন-অ্যাওয়েটেড প্রমিজ ও ফায়ার-অ্যান্ড-ফরগেট ঝুঁকি।"
      }
    ],
    tags: ["JavaScript", "Async", "async/await", "Promises", "Event Loop"]
  },
  {
    id: "not-awaiting-async-function",
    slug: "not-awaiting-async-function",
    question: "What happens if you don’t await an async function?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "একটি async ফাংশনকে `await` না করলে ফাংশনটি সাথে সাথে ব্যাকগ্রাউন্ডে এক্সিকিউশন শুরু করে এবং একটি Pending Promise রিটার্ন করে পরবর্তী লাইনে চলে যায়। ফলে আপনি প্রত্যাশিত ডেটার বদলে `Promise { <pending> }` অবজেক্ট পাবেন, কোনো রেজাল্টের ওপর নির্ভরশীল কোড ভুল মান পাবে এবং ফাংশনের ভেতর এরর ঘটলে তা আনহ্যান্ডেল্ড প্রমিজ রিজেকশন ঘটাতে পারে।",
    easyExplanation: "সহজ ভাষায় কী ঘটে:\n১. আপনি দোকানে টাকা দিয়ে বললেন: 'বার্গার দিন'। কিন্তু আপনি বার্গার হাতে নেওয়ার জন্য অপেক্ষা (await) করলেন না!\n২. আপনি সাথে সাথে খালি হাত নিয়ে বাড়ি চলে আসলেন। ফলে আপনার কাছে কোনো বার্গার নেই, শুধু একটি টোকেন (Pending Promise) আছে।\n৩. পরবর্তীতে যখন আপনি বার্গার খাওয়ার চেষ্টা করবেন, তখন পাবেন `undefined` বা এরর।\n৪. আরও খারাপ ব্যাপার: দোকানদার যদি পরে দেখে বার্গার নেই, সে এরর ছুড়ে মারবে, কিন্তু আপনি সামনে না থাকায় সেটি ক্র্যাশ করবে (UnhandledPromiseRejection)!",
    interviewAnswer: "If you do not await an async function, the function begins executing asynchronously in the background, but the calling code immediately receives a `Promise <pending>` and continues executing the subsequent lines without waiting for the async operation to complete. This leads to race conditions, working with unresolved promise objects instead of actual data, and potential unhandled promise rejections if the background operation throws an error without a `.catch()`.",
    detailedExplanation: {
      whatItIs: "অ্যাসিনক্রোনাস ফাংশন ইনভোকেশনে `await` কিওয়ার্ড মিস করার পরিণতি।",
      whyItExists: "JavaScript-এ async ফাংশন সর্বদা সিনক্রোনাসভাবে একটি Promise ইনস্ট্যান্স রিটার্ন করে, যা রেজলভ হতে সময় নেয়।",
      howItWorks: "কলিং ফাংশন প্রমিজটির জন্য অপেক্ষা না করে সাথে সাথে পরবর্তী লাইনে চলে যায়। ব্যাকগ্রাউন্ড প্রমিজ মাইক্রোটাস্কে চলে এবং এরর হলে কলিং ফাংশনের try/catch তা ধরতে পারে না।",
      whenToUse: "কখনো কখনো ইচ্ছাকৃতভাবে ফায়ার-অ্যান্ড-ফরগেট (Fire-and-forget) প্যাটার্নে (যেমন ব্যাকগ্রাউন্ডে অ্যানালিটিক্স লগ পাঠানো) await না করে কাজ চালানো হয়, তবে সেক্ষেত্রে `.catch()` হ্যান্ডলার যুক্ত রাখা আবশ্যক।",
      keyPoints: [
        "Returns `Promise { <pending> }` immediately.",
        "Code continues execution prematurely.",
        "try...catch cannot catch errors occurring inside un-awaited async functions.",
        "Potential race conditions and UnhandledPromiseRejection."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `async function fetchTotalBalance() {
  return 5000;
}

async function processPayment() {
  // ❌ ভুল: await করা হয়নি
  const balance = fetchTotalBalance();
  console.log("Balance received:", balance); 
  // Output: Balance received: Promise { <pending> }

  if (balance > 1000) { // ❌ Object comparison fails! (Promise > 1000 is false)
    console.log("Payment Approved");
  } else {
    console.log("Payment Declined"); // ভুলবশত ডিক্লাইন হবে!
  }

  // ✅ সঠিক: await করা হয়েছে
  const correctBalance = await fetchTotalBalance();
  console.log("Correct Balance:", correctBalance); // 5000
}`,
      explanationSteps: [
        {
          step: 1,
          title: "আন-রেজলভড প্রমিজ অবজেক্ট",
          description: "balance ভ্যারিয়েবলে আসল সংখ্যা 5000-এর বদলে Promise অবজেক্ট অ্যাসাইন হয়েছে।"
        },
        {
          step: 2,
          title: "ভুল লজিক্যাল ডিসিশন",
          description: "Promise > 1000 তুলনা করায় ফলস এসেছে এবং অ্যাপ্লিকেশনে মারাত্মক লজিক্যাল বাগ তৈরি হয়েছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Database Transaction Failures",
        description: "ORM বা SQL কোয়েরিতে `await db.user.create()` না করায় রেসপন্স আগে চলে যায় কিন্তু ডেটাবেসে ডেটা রাইট ফেল করে।"
      },
      {
        title: "Fire-and-forget Analytics",
        description: "ইউজারকে দ্রুত রেসপন্স দিতে `sendAnalyticsLog().catch(console.error)` ফায়ার করে await না করা।"
      }
    ],
    interviewTips: {
      tip: "উল্লেখ করুন যে 'try/catch আন-অ্যাওয়েটেড প্রমিজের এরর ধরতে পারে না'। এই পয়েন্টটি ইন্টারভিউয়ারদের খুব দৃষ্টি আকর্ষণ করে।",
      deliveryStrategy: "Pending Promise রিটার্ন -> লজিক্যাল বাগ/রেস কন্ডিশন -> try/catch এরর মিসিং -> ফায়ার-অ্যান্ড-ফরগেট এক্সেপশন বলুন।",
      avoidSaying: [
        {
          wrong: "await না করলে ফাংশনটি রানই হবে না।",
          right: "ফাংশনটি ব্যাকগ্রাউন্ডে সাথে সাথে রান হওয়া শুরু করবে, কিন্তু কলার কোড উত্তরের অপেক্ষা না করেই সামনে এগিয়ে যাবে।"
        }
      ]
    },
    quickRevision: [
      "await না দিলে আসল ডেটার বদলে `Promise <pending>` পাবেন।",
      "পরবর্তী কোড অবিলম্বে রান হবে (রেস কন্ডিশন হতে পারে)।",
      "try...catch এরর ধরতে পারবে না (UnhandledRejection হতে পারে)।",
      "ফায়ার-অ্যান্ড-ফরগেট করলেও `.catch()` দিয়ে হ্যান্ডেল করা জরুরি।"
    ],
    followUpQuestions: [
      {
        question: "Difference between Promise.all, allSettled, race, and any.",
        targetId: "promise-all-allsettled-race-any",
        shortHint: "কনকারেন্ট প্রমিজ পরিচালনার মেথড।"
      }
    ],
    tags: ["JavaScript", "Async", "async/await", "Error Handling", "Debugging"]
  },
  {
    id: "implement-promise-all-manually",
    slug: "implement-promise-all-manually",
    question: "How would you implement Promise.all() manually?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "একটি কাস্টম `promiseAll` ফাংশন তৈরি করতে একটি নতুন Promise রিটার্ন করতে হয়, একটি রেজাল্ট অ্যারে এবং একটি কমপ্লিটেড কাউন্টার মেইনটেইন করতে হয়। প্রতিটি প্রমিজ রেজলভ হলে তার মূল ইনপুট ইনডেক্স অনুযায়ী রেজাল্ট অ্যারেতে ভ্যালু বসিয়ে কাউন্টার ১ বাড়াতে হয়। কাউন্টার যখন মোট প্রমিজের সংখ্যার সমান হয়, তখন পুরো রেজাল্ট অ্যারেসহ resolve করতে হয়। আর যেকোনো একটি প্রমিজ ফেইল করলে সাথে সাথে মূল প্রমিজকে reject করতে হয় (Fail-fast)।",
    easyExplanation: "সহজ ৪টি ধাপে তৈরি করুন:\n১. একটি নতুন `new Promise((resolve, reject) => { ... })` রিটার্ন করুন।\n২. খালি অ্যারে বা নন-অ্যারে পাস হলে সাথে সাথে `resolve([])` করে দিন।\n৩. একটি `results = []` অ্যারে এবং `completedCount = 0` রাখুন।\n৪. প্রতিটি প্রমিজের ওপর লুপ চালিয়ে `Promise.resolve(item).then(...)` দিয়ে শুনুন। রেজাল্ট আসলে ওই নির্দিষ্ট ইনডেক্সে `results[i] = val` বসান এবং `completedCount++` করুন। সব শেষ হলে `resolve(results)` কল করুন। আর কোনো একটা ফেইল করলেই সাথে সাথে `reject(err)` কল করুন।",
    interviewAnswer: "To implement `Promise.all` manually (polyfill), we return a new Promise. We initialize a `results` array with the same length as the input and a `completedCount` counter. We iterate through each item, wrapping it with `Promise.resolve()` to handle non-promise values. As each promise resolves, we store the result at its corresponding index (preserving original order regardless of completion time) and increment our counter. When `completedCount === promises.length`, we resolve with `results`. If any single promise rejects, we immediately reject the outer promise (fail-fast behavior).",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্টের অন্যতম জনপ্রিয় কনকারেন্ট প্রমিজ কম্বিনেটরের কাস্টম অ্যালগরিদমিক ইমপ্লিমেন্টেশন।",
      whyItExists: "ইন্টারভিউতে প্রমিজ আর্কিটেকচার, ক্লোজার, ইনডেক্স প্রিজারভেশন এবং কনকারেন্সি হ্যান্ডলিংয়ের গভীরতা যাচাই করতে বহুল ব্যবহৃত প্রশ্ন।",
      howItWorks: "অ্যাসিনক্রোনাস কমপ্লিশন বিভিন্ন অর্ডারে ঘটতে পারে (যেমন ২ নম্বর প্রমিজ আগে শেষ হতে পারে ১ নম্বরের চেয়ে)। তাই `push()` ব্যবহার না করে `results[index] = val` দিয়ে আসল অর্ডার বজায় রাখা হয়।",
      whenToUse: "একাধিক স্বাধীন API কল প্যারালালি চালিয়ে সবগুলোর উত্তরের জন্য একসাথে অপেক্ষা করতে।",
      keyPoints: [
        "Preserves original input order in output array.",
        "Fail-fast: Rejects immediately on first error.",
        "Handles non-promise items using `Promise.resolve(item)`.",
        "Resolves immediately if passed an empty array `[]`."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // ১. এজ কেস: অ্যারে না হলে বা খালি হলে
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }
    
    if (promises.length === 0) {
      return resolve([]);
    }

    const results = [];
    let completedCount = 0;
    const total = promises.length;

    promises.forEach((promiseItem, index) => {
      // ২. নন-প্রমিজ ভ্যালু হ্যান্ডেল করতে Promise.resolve দিয়ে র‍্যাপ করা
      Promise.resolve(promiseItem)
        .then((value) => {
          results[index] = value; // আসল ইনডেক্স বজায় রাখা হলো
          completedCount++;

          // ৩. সব প্রমিজ শেষ হলে ফাইনাল resolve
          if (completedCount === total) {
            resolve(results);
          }
        })
        .catch((err) => {
          // ৪. যেকোনো একটি ফেইল করলে সাথে সাথে reject (Fail-fast)
          reject(err);
        });
    });
  });
}

// টেস্ট রান
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res("Shuvo"), 200));
const p3 = 30; // Non-promise value

customPromiseAll([p1, p2, p3]).then((data) => {
  console.log("Promise.all Success:", data); // [10, "Shuvo", 30]
});`,
      explanationSteps: [
        {
          step: 1,
          title: "আসল ইনডেক্সিং সংরক্ষণ",
          description: "results[index] = value ব্যবহারের মাধ্যমে প্রমিজগুলো যে অর্ডারে পাঠানো হয়েছিল, আউটপুটেও সেই একই অর্ডারে ডেটা নিশ্চিত করা হয়েছে।"
        },
        {
          step: 2,
          title: "নন-প্রমিজ সেফটি গার্ড",
          description: "Promise.resolve(promiseItem) সাধারণ সংখ্যা বা অবজেক্টকেও প্রমিজে রূপান্তর করে নিরাপদ এক্সিকিউশন নিশ্চিত করেছে।"
        },
        {
          step: 3,
          title: "ফেইল-ফাস্ট রিজেকশন",
          description: "catch ব্লকে সরাসরি reject(err) থাকায় যেকোনো একটি এরর হওয়ামাত্রই পুরো প্রমিজ বাতিল হয়ে যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Parallel Dashboard Loading",
        description: "ড্যাশবোর্ডের ইউজার প্রোফাইল, নোটিফিকেশন কাউন্ট এবং সাম্প্রতিক ট্রানজ্যাকশন প্যারালালি ফেচ করা।"
      }
    ],
    interviewTips: {
      tip: "কখনোই `results.push(val)` করবেন না! কারণ দ্রুত শেষ হওয়া প্রমিজ আগে পুশ হয়ে অর্ডার উল্টে যাবে। সবসময় `results[index] = val` লিখুন। ইন্টারভিউয়ার এটিই দেখেন!",
      deliveryStrategy: "Promise তৈরি -> ইনডেক্স প্রিজারভেশন ব্যাখ্যা -> কাউন্টার ট্র্যাকিং -> Fail-fast রিজেকশন কোড লিখে বুঝিয়ে দিন।",
      avoidSaying: [
        {
          wrong: "results.push(val) দিয়ে রেজাল্ট স্টোর করব।",
          right: "push করলে যে প্রমিজ আগে শেষ হবে সে আগে ঢুকে যাবে; অর্ডার ঠিক রাখতে results[index] = val ব্যবহার করতে হবে।"
        }
      ]
    },
    quickRevision: [
      "Custom Promise.all: results[index] দিয়ে অর্ডার প্রিজার্ভ করতে হয়।",
      "কাউন্টার completedCount === total হলে resolve(results)।",
      "Fail-fast: ১টি reject হলেই পুরোটা সাথে সাথে reject।",
      "Promise.resolve(item) দিয়ে সাধারণ প্রিমিটিভ ডেটাকেও প্রমিজ করা হয়।"
    ],
    followUpQuestions: [
      {
        question: "Difference between Promise.all, allSettled, race, and any.",
        targetId: "promise-all-allsettled-race-any",
        shortHint: "অন্যান্য প্রমিজ কম্বিনেটর মেথড।"
      }
    ],
    tags: ["JavaScript", "Promises", "Polyfill", "Algorithms", "Concurrency"]
  },
  {
    id: "promise-all-allsettled-race-any",
    slug: "promise-all-allsettled-race-any",
    question: "Difference between Promise.all, allSettled, race, and any.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "১. `Promise.all`: সবগুলো সফল হলে সবগুলোর রেজাল্ট দেয়; ১টি ফেইল করলে সাথে সাথে রিজেক্ট হয় (Fail-fast)।\n২. `Promise.allSettled`: সবগুলো প্রমিজের ফলাফল শেষ হওয়া পর্যন্ত অপেক্ষা করে এবং প্রতিটির স্ট্যাটাস (`fulfilled` বা `rejected`) সহ অ্যারে রিটার্ন করে (কখনো রিজেক্ট হয় না)।\n৩. `Promise.race`: যে প্রমিজটি সবার আগে শেষ (Fulfilled বা Rejected) হবে, তার রেজাল্ট নিয়েই সাথে সাথে সেটেল হয়।\n৪. `Promise.any`: যে প্রমিজটি সবার আগে সফলভাবে 'Fulfilled' হবে তার রেজাল্ট দেয়; শুধুমাত্র সবগুলো ফেইল করলেই `AggregateError` দিয়ে রিজেক্ট হয়।",
    easyExplanation: "সহজ চার ঘোড়ার দৌড় দিয়ে বুঝুন:\n\n১. Promise.all (দলগত পাস):\n- চারজনকেই পাস করতে হবে। একজন ফেল করলেই পুরো টিম ফেইল।\n\n২. Promise.allSettled (পরীক্ষার মার্কশিট):\n- কে পাস করল কে ফেল করল দেখার বিষয় না, সবার পরীক্ষা শেষ হওয়া পর্যন্ত অপেক্ষা করে সবার মার্কশিট এনে দেবে।\n\n৩. Promise.race (সাধারণ দৌড় প্রতিযোগিতা):\n- যে সবার আগে ফিনিশ লাইনে পৌঁছাবে (পাস হোক বা ফেল), খেলা ওখানেই শেষ!\n\n৪. Promise.any (প্রথম বিজয়ী খোঁজা):\n- যে সবার আগে সফলভাবে (Fulfilled) জিতবে তাকে নেবে। কেউ ফেল করলে পরোয়া নেই, যতক্ষণ না চারজনই ফেল করে।",
    interviewAnswer: "JavaScript provides 4 promise combinator methods for concurrency: \n1. `Promise.all`: Resolves when ALL promises fulfill, or rejects immediately when the FIRST promise rejects (Fail-fast).\n2. `Promise.allSettled`: Waits for ALL promises to settle regardless of outcome, returning an array of objects `{ status: 'fulfilled' | 'rejected', value | reason }` (Never short-circuits).\n3. `Promise.race`: Settles with the result of the FIRST promise that settles (either fulfilled OR rejected).\n4. `Promise.any`: Resolves with the FIRST FULFILLED promise. It ignores rejections unless ALL promises reject, throwing an `AggregateError`.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্টের ৪টি অফিশিয়াল প্রমিজ কনকারেন্সি মেথড।",
      whyItExists: "ভিন্ন ভিন্ন বিজনেস রিকোয়ারমেন্ট অনুযায়ী একাধিক অ্যাসিনক্রোনাস রিকোয়েস্টকে কম্বাইন ও হ্যান্ডেল করার জন্য।",
      howItWorks: "প্রতিটি মেথড অ্যারে অব প্রমিজেস ইনপুট নেয় এবং তাদের সেটেলমেন্ট স্টেট পর্যবেক্ষণ করে বিভিন্ন শর্ট-সার্কিট রুল অনুযায়ী আউটপুট তৈরি করে।",
      whenToUse: "সব ডেটা একসাথে লাগলে `.all`, বাল্ক অপারেশনের ফাইনাল স্ট্যাটাস দেখতে `.allSettled`, রিকোয়েস্ট টাইমআউট বানাতে `.race`, এবং ব্যাকআপ/মিরর সার্ভার থেকে দ্রুততম রেসপন্স পেতে `.any`।",
      keyPoints: [
        "all: All fulfill OR First reject.",
        "allSettled: All settle (Never rejects).",
        "race: First to settle (Fulfill or Reject).",
        "any: First to fulfill (Rejects only if ALL reject)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fastSuccess = new Promise(res => setTimeout(() => res("Fast Success (100ms)"), 100));
const slowSuccess = new Promise(res => setTimeout(() => res("Slow Success (500ms)"), 500));
const fastError = new Promise((_, rej) => setTimeout(() => rej("Fast Error (50ms)"), 50));

// ১. Promise.all -> ফেইল করবে fastError এর কারণে
Promise.all([fastSuccess, slowSuccess, fastError])
  .catch(err => console.log("Promise.all:", err)); 
  // Output: Promise.all: Fast Error (50ms)

// ২. Promise.allSettled -> সবগুলোর স্ট্যাটাস দেবে
Promise.allSettled([fastSuccess, fastError])
  .then(res => console.log("Promise.allSettled:", res));
  /* Output: [
       { status: 'fulfilled', value: 'Fast Success (100ms)' },
       { status: 'rejected', reason: 'Fast Error (50ms)' }
     ] */

// ৩. Promise.race -> সবার আগেরটা নেবে (fastError)
Promise.race([fastSuccess, fastError])
  .catch(err => console.log("Promise.race:", err));
  // Output: Promise.race: Fast Error (50ms)

// ৪. Promise.any -> প্রথম সফলটা নেবে (fastSuccess)
Promise.any([fastError, fastSuccess, slowSuccess])
  .then(res => console.log("Promise.any:", res));
  // Output: Promise.any: Fast Success (100ms)`,
      explanationSteps: [
        {
          step: 1,
          title: "Promise.all আচরণ",
          description: "fastError সবার আগে ফেইল করায় সাথে সাথে রিজেক্ট হয়েছে।"
        },
        {
          step: 2,
          title: "Promise.allSettled স্থায়িত্ব",
          description: "এরর হওয়া সত্ত্বেও ক্র্যাশ না করে প্রতিটি অপারেশনের ফুল রিপোর্ট অবজেক্ট আকারে দিয়েছে।"
        },
        {
          step: 3,
          title: "Promise.any নির্ভুলতা",
          description: "fastError অগ্রাহ্য করে পরবর্তী প্রথম সফল fastSuccess-কে গ্রহণ করেছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "API Timeout with Promise.race",
        description: "Fetch রিকোয়েস্ট এবং একটি ৫ সেকেন্ডের রিজেকশন টাইমারকে `.race()` করিয়ে সহজে রিকোয়েস্ট টাইমআউট তৈরি করা।"
      },
      {
        title: "CDN Redundancy with Promise.any",
        description: "একই ইমেজ ৩টি ভিন্ন CDN সার্ভার থেকে ফেচ করে যে সার্ভার সবার আগে সফল ডেটা দেবে তা রেন্ডার করা।"
      }
    ],
    interviewTips: {
      tip: "একটি তুলনামূলক টেবিল ইন্টারভিউয়ারের সামনে কল্পনা করিয়ে বলুন। 'all vs allSettled' এবং 'race vs any'-এর সূক্ষ্ম পার্থক্য পরিষ্কার করা সবচেয়ে জরুরি।",
      deliveryStrategy: "৪টি মেথডের প্রতিটির 'Fulfill Condition' এবং 'Reject Condition' ১ লাইনে উপস্থাপন করুন।",
      avoidSaying: [
        {
          wrong: "Promise.race এবং Promise.any একই কাজ করে।",
          right: "Promise.race প্রথম সেটেলমেন্ট (সফল বা ব্যর্থ যেকোনোটি) নেয়, কিন্তু Promise.any শুধুমাত্র প্রথম 'সফল (Fulfilled)' রেসপন্স নেয়।"
        }
      ]
    },
    quickRevision: [
      "all: All resolved / First rejected (Fail-fast).",
      "allSettled: All completed (Never rejects, returns status objects).",
      "race: First settled (Resolve or Reject).",
      "any: First resolved (Rejects only if all fail with AggregateError)."
    ],
    followUpQuestions: [
      {
        question: "How do you handle concurrent async requests with limits?",
        targetId: "concurrent-requests-with-limit",
        shortHint: "কনকারেন্সি লিমিট পুলিং।"
      }
    ],
    tags: ["JavaScript", "Async", "Promises", "Concurrency", "Methods"]
  },
  {
    id: "concurrent-requests-with-limit",
    slug: "concurrent-requests-with-limit",
    question: "How do you handle concurrent async requests with limits in JavaScript?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer: "একসাথে শত শত রিকোয়েস্ট পাঠিয়ে সার্ভার ওভারলোড বা ব্রাউজার মেমরি ক্র্যাশ না করে একটি কনকারেন্সি পুল (Concurrency Pool বা Semaphore) তৈরি করা হয়। যেখানে একবারে নির্দিষ্ট সংখ্যক (যেমন ৩ বা ৫টি) ওয়ার্কার রিকোয়েস্ট রান করে। যখনই একটি রিকোয়েস্ট সম্পন্ন হয়, তখনই কিউ (Queue) থেকে পরবর্তী রিকোয়েস্টটি এক্সিকিউট করা শুরু হয়।",
    easyExplanation: "সহজ ব্যাংক কাউন্টারের মতো বুঝুন:\n১. ব্যাংকে ৫০ জন গ্রাহক (Tasks) লাইনে দাঁড়িয়ে আছেন।\n২. কিন্তু ক্যাশ কাউন্টার আছে মাত্র ৩টি (Concurrency Limit = 3)।\n৩. শুরুতে ৩ জন গ্রাহক ৩টি কাউন্টারে সেবা নেবেন।\n৪. যখনই যেকোনো ১ জনের কাজ শেষ হবে, সাথে সাথে পেছনের লাইন থেকে পরবর্তী গ্রাহক ওই কাউন্টারে ঢুকবেন।\n৫. ফলে কোনো কাউন্টার খালি থাকবে না এবং ব্যাংকে বিশৃঙ্খলা বা ক্র্যাশও হবে না।",
    interviewAnswer: "To handle a large batch of concurrent asynchronous tasks with a concurrency limit (e.g., executing max 5 requests at a time out of 100), we use a Concurrency Pool or Worker Queue pattern. We maintain an iterator index and spawn N worker promises concurrently. Each worker repeatedly pulls and awaits the next task from the queue until all tasks are exhausted, storing results in an indexed array. Alternatively, in production, libraries like `p-limit` or `async.queue` are standard.",
    detailedExplanation: {
      whatItIs: "অ্যাসিনক্রোনাস থ্রোটলিং প্যাটার্ন যা এককালীন অ্যাক্টিভ প্রমিজের সংখ্যা সীমাবদ্ধ রাখে।",
      whyItExists: "ব্রাউজারে একই ডোমেনে সর্বোচ্চ ৬টি TCP কানেকশন লিমিট থাকে এবং অতিরিক্ত সমান্তরাল রিকোয়েস্টে ব্যাকএন্ড ডেটাবেস কানেকশন পুল এক্সহস্ট বা 429 Too Many Requests এরর দিতে পারে।",
      howItWorks: "একটি শেয়ার্ড কার্সার ইনডেক্স থেকে N সংখ্যক স্বাধীন async লুপ টাস্ক তুলতে থাকে। একটি শেষ হলে স্বয়ংক্রিয়ভাবে পরেরটি শুরু হয়।",
      whenToUse: "বাল্ক ইমেজ আপলোড, ওয়েব স্ক্র্যাপিং, লার্জ ফাইল ব্যাচ ডাউনলোডিং এবং এপিআই রেট লিমিটিং হ্যান্ডলিংয়ে।",
      keyPoints: [
        "Prevents Server 429 / 503 Overload.",
        "Respects Browser Max Socket Connections.",
        "Can be implemented easily with native Promise Pool or `p-limit`."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `async function pMap(tasks, limit) {
  const results = [];
  let index = 0;

  // প্রতিটি ওয়ার্কার লাইন ধরে একটার পর একটা টাস্ক তুলবে
  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index++;
      const taskFn = tasks[currentIndex];
      try {
        results[currentIndex] = await taskFn();
      } catch (err) {
        results[currentIndex] = { error: err };
      }
    }
  }

  // লিমিট অনুযায়ী প্যারালাল ওয়ার্কার চালু করা
  const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// টেস্ট সিমুলেশন
const mockTasks = Array.from({ length: 10 }, (_, i) => () => {
  return new Promise(res => {
    console.log(\`Running Task \${i + 1}...\`);
    setTimeout(() => res(\`Result \${i + 1}\`), 500);
  });
});

// একবারে সর্বোচ্চ ৩টি টাস্ক চলবে
pMap(mockTasks, 3).then(res => {
  console.log("All Completed with Limit 3:", res);
});`,
      explanationSteps: [
        {
          step: 1,
          title: "শেয়ার্ড ইনডেক্স কার্সার",
          description: "index++ ব্যবহারের ফলে ৩টি ওয়ার্কার নিজেদের মধ্যে কোনো ডুপ্লিকেট টাস্ক ছাড়া সিরিয়ালি কাজ ভাগ করে নেয়।"
        },
        {
          step: 2,
          title: "নির্দিষ্ট সংখ্যক সমান্তরাল থ্রেড",
          description: "Math.min(limit, tasks.length) সংখ্যক ওয়ার্কার একই সাথে সচল থাকে।"
        },
        {
          step: 3,
          title: "ফুল ব্যাচ কমপ্লিশন",
          description: "Promise.all(workers) নিশ্চিত করে যে সব ওয়ার্কারের কাজ শেষ হলেই ফাইনাল রেজাল্ট রিটার্ন হবে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Bulk File S3 Uploads",
        description: "একসাথে ৫০০ ফাইল আপলোড করার সময় মেমরি আউট অব বাউন্ড না হতে ৫টি ৫টি করে চ্যাঙ্কে আপলোড করা।"
      },
      {
        title: "Web Scraping with Puppeteer",
        description: "একসাথে শত শত ব্রাউজার পেজ না খুলে মেমরি বাঁচাতে সর্বোচ্চ ৪টি ট্যাব কনকারেন্টলি স্ক্র্যাপ করা।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে 'Worker Pool Pattern' এবং লাইব্রেরি হিসেবে 'p-limit'-এর নাম উল্লেখ করুন।",
      deliveryStrategy: "কেন কনকারেন্সি লিমিট দরকার (Rate limit / Browser Socket limit) -> Worker Loop এর আইডিয়া -> কোড ইমপ্লিমেন্টেশন তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "Promise.all-এ সব ১০০টি রিকোয়েস্ট একসাথে পাঠিয়ে দেওয়া ভালো।",
          right: "একসাথে অতিরিক্ত রিকোয়েস্ট পাঠালে সার্ভার রেট লিমিট (429) দিতে পারে বা ব্রাউজার নেটওয়ার্ক থ্রেড জ্যাম হতে পারে, তাই লিমিট করা প্রয়োজন।"
        }
      ]
    },
    quickRevision: [
      "Concurrency Limit = একবারে সর্বোচ্চ N টি রিকোয়েস্ট প্যারালালি চালানো।",
      "সার্ভার ক্র্যাশ (429 Too Many Requests) ও ব্রাউজার সকেট ব্লকিং প্রতিরোধ করে।",
      "Worker Pool লজিক দিয়ে легко ইমপ্লিমেন্ট করা যায়।",
      "জনপ্রিয় প্রোডাকশন প্যাকেজ: `p-limit`।"
    ],
    followUpQuestions: [
      {
        question: "Difference between debounce and throttle.",
        targetId: "debounce-vs-throttle",
        shortHint: "ইভেন্ট ফ্রিকোয়েন্সি নিয়ন্ত্রণ।"
      }
    ],
    tags: ["JavaScript", "Async", "Concurrency", "Rate Limiting", "Performance"]
  }
];
