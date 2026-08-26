import { Question } from "@/types";

export const javascriptCoreQuestions: Question[] = [
  {
    id: "hoisting-var-let-const-functions",
    slug: "hoisting-var-let-const-functions",
    question: "Explain hoisting for var, let, const, and function declarations.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Hoisting হলো JavaScript-এর এমন একটি আচরণ যেখানে কোড execute হওয়ার আগেই variable এবং function declaration-গুলোকে তাদের scope-এর একদম শুরুতে মেমরিতে রেজিস্টার করে রাখা হয়। তবে var undefined দিয়ে initialize হয়, let এবং const initialize না হয়ে TDZ-এ থাকে, আর function declaration সম্পূর্ণ বডিসহ hoist হয়।",
    easyExplanation: "JavaScript কোড যখন রান করে, তখন সে দুইটা ধাপে কাজ করে: ১. Creation Phase (মেমরি বরাদ্দ করা) এবং ২. Execution Phase (কোড লাইন বাই লাইন চালানো)।\n\n১. var: মেমরিতে জায়গা পায় এবং সাথে সাথে তার মান 'undefined' সেট করা হয়। তাই declare করার আগেই access করলে undefined পাওয়া যায়।\n২. let এবং const: মেমরিতে রেজিস্টার হয় ঠিকই, কিন্তু কোনো মান বা undefined দেওয়া হয় না। তাই declaration লাইনে পৌঁছানোর আগ পর্যন্ত তাদের access করতে গেলে ReferenceError দেয়। এই সময়টাকে Temporal Dead Zone (TDZ) বলে।\n৩. Function Declaration: সম্পূর্ণ ফাংশন কোডসহ মেমরিতে সেভ হয়ে যায়, তাই ফাংশন লেখার আগেই তাকে কল করা যায়।\n৪. Function Expression বা Arrow Function: এগুলো variable হিসেবে গণ্য হয়, তাই var হলে undefined এবং let/const হলে TDZ নিয়মে চলে।",
    interviewAnswer: "JavaScript engine কোড রান করার আগে Creation Phase-এ সব declarations মেমরিতে তুলে নেয়, যাকে আমরা Hoisting বলি। Function declarations সম্পূর্ণ বডিসহ hoist হয়, যার কারণে ফাংশন লেখার আগেই কল করা সম্ভব। 'var' hoist হয়ে undefined দিয়ে initialize হয়। অন্যদিকে 'let' এবং 'const' hoist হলেও initialize হয় না, বরং declaration লাইনে না পৌঁছানো পর্যন্ত Temporal Dead Zone (TDZ)-এ থাকে। ফলে আগেই access করতে গেলে ReferenceError থ্রো করে।",
    detailedExplanation: {
      whatItIs: "Hoisting হলো JavaScript compiler/engine-এর creation phase-এ identifier-গুলোর জন্য মেমরি allocation করার প্রসেস।",
      whyItExists: "JavaScript-এ mutual recursion (একটি ফাংশন অন্য ফাংশনকে কল করা) সহজে সাপোর্ট করার জন্য এবং এক-পাস কম্পাইলেশনের সুবিধার জন্য প্রথম থেকেই function hoisting ডিজাইন করা হয়েছিল। পরবর্তীতে ES6-এ let/const-এর ক্ষেত্রে নিরাপদ কোডিং নিশ্চিত করতে TDZ যুক্ত করা হয়।",
      howItWorks: "JS Engine execution context তৈরি করার সময় scope-এর প্রতিটি declaration খুঁজে বের করে। var-এর জন্য মেমরি তৈরি করে undefined বসায়। let/const-এর জন্য মেমরি স্লট তৈরি করলেও uninitialized রেখে দেয়। Function declaration-এর পুরো ফাংশন অবজেক্ট মেমরিতে রেফারেন্স করে দেয়।",
      whenToUse: "সাধারণত কোডের রিডাবিলিটির জন্য ফাংশন ডিক্লেয়ারেশনের hoisting কাজে দেয় (উপরে main logic রেখে নিচে helper function রাখা যায়)। তবে variable-এর ক্ষেত্রে hoisting-এর উপর নির্ভর না করে সবসময় let/const দিয়ে শুরুতে declare করাই best practice।",
      keyPoints: [
        "Function Declaration সম্পূর্ণ hoist হয় (কল করা যায় আগে)।",
        "var hoist হয়ে undefined পায় (error দেয় না কিন্তু unexpected bug হতে পারে)।",
        "let এবং const hoist হয় কিন্তু uninitialized থাকে (TDZ error দেয়)।",
        "Function Expression variable-এর hoisting নিয়ম মেনে চলে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Function Declaration
greet(); // Output: "Hello Shuvo!"
function greet() {
  console.log("Hello Shuvo!");
}

// ২. var Hoisting
console.log(myVar); // Output: undefined
var myVar = 10;

// ৩. let / const Hoisting (TDZ)
try {
  console.log(myLet); // Throws ReferenceError!
  let myLet = 20;
} catch (err) {
  console.log(err.message); // Cannot access 'myLet' before initialization
}

// ৪. Function Expression with var
try {
  sayHi(); // TypeError: sayHi is not a function (কারণ sayHi তখন undefined)
  var sayHi = function() { console.log("Hi"); };
} catch (err) {
  console.log(err.message);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "ফাংশন ডিক্লেয়ারেশন",
          description: "greet() ফাংশনটি কোডের নিচে থাকা সত্ত্বেও Engine আগেই সম্পূর্ণ মেমরিতে রেখে দেওয়ায় শুরুতে রান করেছে।"
        },
        {
          step: 2,
          title: "var ভ্যারিয়েবল",
          description: "myVar ডিক্লেয়ার করার আগে print করায় undefined এসেছে, কারণ JS Engine মেমরি তৈরিতে ডিফল্ট undefined বসায়।"
        },
        {
          step: 3,
          title: "let ও TDZ এরর",
          description: "myLet ডিক্লেয়ারেশনের আগে access করায় ReferenceError হয়েছে কারণ let আন-ইনিশিয়ালাইজড অবস্থায় থাকে।"
        },
        {
          step: 4,
          title: "ফাংশন এক্সপ্রেশন",
          description: "sayHi একটি var ভ্যারিয়েবল, তাই hoisting-এর সময় এটি undefined। undefined() কল করতে গিয়ে TypeError হয়েছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Clean Code Organization",
        description: "ፋইল বা মডিউলের উপরে হাই-লেভেল এক্সপোর্ট বা বিজনেস লজিক কল করে নিচে বিস্তারিত হেল্পার ফাংশন ডিক্লেয়ারেশন রাখার প্যাটার্ন।"
      },
      {
        title: "Babel / TypeScript Transpilation",
        description: "Modern bundler-গুলো ES6 কোডকে সুরক্ষিত রাখতে সাহায্য করে যাতে TDZ মিসইউজ সহজে ক্যাচ করা যায়।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'JS কোডকে ফিজিক্যালি ফাইলের উপরে টেনে নিয়ে যায়'। সবসময় বলবেন 'Creation Phase-এ মেমরিতে রেজিস্টার করে' — এতে ইন্টারভিউয়ার বুঝবেন আপনার JS Engine ইন্টারনালস জানা আছে।",
      deliveryStrategy: "প্রথমে ১ লাইনে সংজ্ঞা দিন, তারপর var বনাম let/const এবং function declaration-এর মেমরি হ্যান্ডলিংয়ের পার্থক্য তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "Hoisting মানে কোড উপরে মুভ করে চলে যায়।",
          right: "Hoisting হলো Execution Context Creation Phase-এ মেমরি অ্যালোকেট করার মেকানিজম, কোডের ফিজিক্যাল অবস্থান পরিবর্তন হয় না।"
        },
        {
          wrong: "let এবং const hoist হয় না।",
          right: "let এবং const ও hoist হয়, কিন্তু তারা uninitialized থাকে বিধায় TDZ-এ পড়ার কারণে ReferenceError দেয়।"
        }
      ]
    },
    quickRevision: [
      "Function Declarations: সম্পূর্ণ বডিসহ Hoist হয় (Safe to call before).",
      "var: Hoist হয় এবং 'undefined' দিয়ে ইনিশিয়ালাইজ হয়।",
      "let / const: Hoist হয় কিন্তু Uninitialized থাকে (TDZ-এ থাকে)।",
      "Function Expressions: Variable এর রুল ফলো করে (var হলে TypeError, let হলে ReferenceError)।"
    ],
    followUpQuestions: [
      {
        question: "What is the temporal dead zone (TDZ) and why does it exist?",
        targetId: "temporal-dead-zone-tdz",
        shortHint: "let ও const এর ডিক্লেয়ারেশনের আগের সময়সীমা।"
      },
      {
        question: "Difference between function declaration and function expression.",
        targetId: "function-declaration-vs-expression",
        shortHint: "কীভাবে মেমরিতে স্টোর হয় এবং হোস্টিং আচরণ।"
      }
    ],
    tags: ["JavaScript", "Core", "Hoisting", "Execution Context", "Variables"]
  },
  {
    id: "temporal-dead-zone-tdz",
    slug: "temporal-dead-zone-tdz",
    question: "What is the temporal dead zone (TDZ) and why does it exist?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "TDZ (Temporal Dead Zone) হলো একটি স্কোপের শুরু থেকে let বা const ভ্যারিয়েবল ডিক্লেয়ার এবং ইনিশিয়ালাইজ হওয়ার মধ্যবর্তী সময় বা জোন। এই জোনের মধ্যে ওই ভ্যারিয়েবল access করার চেষ্টা করলে JavaScript সরাসরি ReferenceError থ্রো করে।",
    easyExplanation: "সহজভাবে বুঝুন:\n১. যখন কোনো ব্লক ({ ... }) শুরু হয়, JS Engine বুঝতে পারে যে এর ভেতরে কোনো let বা const আছে।\n২. সে মেমরিতে তার নাম রেজিস্টার করে, কিন্তু কোনো মান (এমনকি undefined-ও না) দেয় না।\n৩. ব্লক শুরুর মুহূর্ত থেকে যতক্ষণ না কোড ওই 'let x = 10;' লাইনে পৌঁছায়, ততক্ষণ 'x' একটা নিষিদ্ধ জোনে থাকে। এই নিষিদ্ধ জোনটাই হলো TDZ।\n৪. এই সময়ে x-কে পড়তে বা লিখতে গেলে JS Engine বলে: 'Cannot access x before initialization'।",
    interviewAnswer: "Temporal Dead Zone বা TDZ হলো স্কোপের শুরুর পয়েন্ট থেকে let বা const ভ্যারিয়েবল ইনিশিয়ালাইজ হওয়ার লাইন পর্যন্ত সময়কাল। ES6-এ TDZ যুক্ত করার মূল কারণ ছিল ভ্যারিয়েবল ডিফাইন করার আগেই তা অ্যাক্সেস করে অপ্রত্যাশিত বাগ (যেমন var-এর undefined সমস্যা) তৈরি হওয়া ঠেকানো এবং const ভ্যারিয়েবলকে সত্যিকার অর্থে অপরিবর্তনীয় ও নিরাপদ রাখা।",
    detailedExplanation: {
      whatItIs: "TDZ হলো let, const এবং class ডিক্লেয়ারেশনের স্কোপ এন্ট্রি এবং একচুয়াল ইনিশিয়ালাইজেশনের মধ্যবর্তী আন-অ্যাক্সেসিবল উইন্ডো।",
      whyItExists: "var ব্যবহারের সময় ডিক্লেয়ারের আগে অ্যাক্সেস করলে undefined আসতো, যা রানটাইমে সাইলেন্ট বাগ তৈরি করতো। TDZ নিশ্চিত করে যে ডেভেলপার ভ্যারিয়েবল সংজ্ঞায়িত করার পরেই তা ব্যবহার করবে। বিশেষ করে const-এর ক্ষেত্রে ডিক্লেয়ার করার আগে ভ্যালু ছাড়া কোনো অবস্থাতেই রিড করতে না দেওয়াই এর লক্ষ্য।",
      howItWorks: "লেক্সিক্যাল এনভায়রনমেন্ট তৈরির সময় ভ্যারিয়েবল বাইন্ডিং তৈরি হয় ঠিকই, কিন্তু ফ্ল্যাগ থাকে uninitialized। যখন JS Execution Thread ইনিশিয়ালাইজার স্টেটমেন্টে পৌঁছায়, তখনই কেবল বাইন্ডিংয়ের মান সেট হয় এবং TDZ শেষ হয়।",
      whenToUse: "সবসময় ব্লকের শুরুতে ভ্যারিয়েবল ডিক্লেয়ার করে মান ইনিশিয়ালাইজ করুন, যাতে কোনো অবস্থাতেই কোড TDZ-এ আঘাত না হানে।",
      keyPoints: [
        "TDZ অবস্থানভিত্তিক (Spatial) নয়, বরং সময়ভিত্তিক (Temporal) — অর্থাৎ কোড এক্সিকিউশনের টাইমিংয়ের ওপর নির্ভর করে।",
        "typeof অপারেটরও TDZ-এ থাকা ভ্যারিয়েবলের ওপর কাজ করে না (ReferenceError দেয়)।",
        "let, const এবং class তিনটিই TDZ রুল মেনে চলে।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সাধারণ TDZ এরর
{
  // TDZ শুরু হলো 'name' এর জন্য
  // console.log(name); // ❌ Uncaught ReferenceError: Cannot access 'name' before initialization
  
  let name = "Shuvo"; // ✅ TDZ শেষ হলো এখানে
  console.log(name);  // Output: "Shuvo"
}

// ২. কেন এটিকে 'Temporal' (সময়ভিত্তিক) বলা হয়?
{
  const showAge = () => console.log(age); // ফাংশন তৈরি হলো
  
  // showAge(); // ❌ এখানে কল করলে TDZ এরর দিবে কারণ age এখনো ইনিশিয়ালাইজ হয়নি
  
  let age = 26; // age ইনিশিয়ালাইজ হলো
  showAge();    // ✅ এখন কল করলে কাজ করবে! Output: 26
}`,
      explanationSteps: [
        {
          step: 1,
          title: "স্কোপের সূচনা",
          description: "ব্লক শুরু হওয়ার সাথে সাথে let name ভ্যারিয়েবলটি মেমরিতে রেজিস্টার হলেও ইনিশিয়ালাইজ হয়নি।"
        },
        {
          step: 2,
          title: "ইনিশিয়ালাইজেশন লাইন",
          description: "let name = 'Shuvo' লাইনে এসে ভ্যালু অ্যাসাইন হওয়ার পর TDZ শেষ হয় এবং নিরাপদভাবে ব্যবহার করা যায়।"
        },
        {
          step: 3,
          title: "সময়ভিত্তিক আচরণ",
          description: "showAge ফাংশন টেক্সট ফাইলে উপরে থাকলেও যখন age-এর মান পাওয়া গেছে তখন কল করায় কোনো এরর হয়নি।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Catching Silent Bugs Early",
        description: "কোনো ভ্যারিয়েবল মিসিং বা ভুল ক্রমানুসারে কল হলে undefined পাস হয়ে পুরো অ্যাপ ক্র্যাশ করার চেয়ে কম্পাইল/রানটাইমে দ্রুত এরর ধরা পড়া।"
      },
      {
        title: "Type Safety in TypeScript",
        description: "TypeScript কম্পাইলার TDZ ভায়োলেশনগুলোকে বিল্ড টাইমে সরাসরি এরর হিসেবে ফ্ল্যাগ করে দেয়।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারকে বুঝিয়ে বলুন কেন এটিকে 'Temporal' বলা হয় — কারণ এটি কোডের লাইন পজিশন নয়, এক্সিকিউশন টাইমের ওপর নির্ভর করে (উপরের উদাহরণটি দিলে ইন্টারভিউয়ার মুগ্ধ হবেন)।",
      deliveryStrategy: "TDZ-এর সংজ্ঞা দিন -> var-এর undefined সমস্যার সমাধান কীভাবে করে বলুন -> টাইম ডিপেন্ডেন্সির উদাহরণ দিন।",
      avoidSaying: [
        {
          wrong: "TDZ মানে কোডের উপরের লাইনে থাকা ভ্যারিয়েবল।",
          right: "TDZ স্থানভিত্তিক নয় বরং সময়ভিত্তিক (Temporal); ফাংশন ডিক্লেয়ারেশনের সময় নয়, কল করার সময়ের ওপর নির্ভর করে।"
        }
      ]
    },
    quickRevision: [
      "TDZ = স্কোপের শুরু থেকে let/const ডিক্লেয়ারেশন ও ইনিশিয়ালাইজেশনের মধ্যবর্তী সময়।",
      "এই সময়ে ভ্যারিয়েবল অ্যাক্সেস করলে ReferenceError দেয়।",
      "const-কে সুরক্ষিত রাখতে এবং var-এর সাইলেন্ট undefined বাগ প্রতিরোধ করতে TDZ আনা হয়েছে।",
      "typeof ও TDZ-এ ReferenceError দেয়।"
    ],
    followUpQuestions: [
      {
        question: "Explain hoisting for var, let, const, and function declarations.",
        targetId: "hoisting-var-let-const-functions",
        shortHint: "Creation phase-এ ভ্যারিয়েবল রেজিস্ট্রি।"
      },
      {
        question: "Difference between any, unknown, and never in TypeScript.",
        targetId: "ts-any-unknown-never",
        shortHint: "টাইপস্ক্রিপ্টে আন-ইনিশিয়ালাইজড ও আন-টাইপড ডেটা হ্যান্ডলিং।"
      }
    ],
    tags: ["JavaScript", "Core", "TDZ", "ES6", "Variables"]
  },
  {
    id: "js-execution-context",
    slug: "js-execution-context",
    question: "How does the JavaScript execution context work?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Execution Context হলো JavaScript কোড মূল্যায়ন ও চালানোর জন্য তৈরি হওয়া একটি বিশেষ এনভায়রনমেন্ট। কোড রান করার সময় গ্লোবাল এক্সিকিউশন কনটেক্সট (GEC) এবং প্রতিটি ফাংশন কলের জন্য ফাংশন এক্সিকিউশন কনটেক্সট (FEC) তৈরি হয়, যা Creation Phase এবং Execution Phase—এই দুই ধাপে সম্পন্ন হয়।",
    easyExplanation: "JavaScript যখন আপনার কোনো কোড রান করে, তখন সে একটা অদৃশ্য বক্স বা এনভায়রনমেন্ট তৈরি করে, যাকে বলে Execution Context।\n\nএই বক্সে দুইটা প্রধান রুম থাকে:\n১. Memory Component (Variable Environment): যেখানে সব ভ্যারিয়েবল ও ফাংশন key-value আকারে রাখা হয়।\n২. Code Component (Thread of Execution): যেখানে কোড এক এক লাইন করে এক্সিকিউট করা হয়।\n\nকাজের দুটি ধাপ:\n- Creation Phase: কোড রান করার আগেই সব variable (undefined দিয়ে) এবং function মেমরিতে তুলে নেওয়া হয়।\n- Execution Phase: কোড এক এক লাইন পড়ে এবং ভ্যারিয়েবলগুলোতে আসল মান বসিয়ে কাজ শেষ করে।",
    interviewAnswer: "JavaScript Execution Context হলো কোড এক্সিকিউট হওয়ার রানটাইম এনভায়রনমেন্ট। প্রধানত দুই ধরনের কনটেক্সট থাকে: Global Execution Context (GEC) এবং Function Execution Context (FEC)। প্রতিটি কনটেক্সট দুটি ফেজে কাজ করে: Creation Phase (যেখানে Variable Object/Lexical Environment তৈরি হয়, Scope Chain ইনিশিয়ালাইজ হয় এবং this বাইন্ডিং সেট হয়) এবং Execution Phase (যেখানে কোড সিঙ্গেল থ্রেডেড সিনক্রোনাস অর্ডারে লাইন বাই লাইন রান করে)। এগুলো ম্যানেজ হয় Call Stack দিয়ে।",
    detailedExplanation: {
      whatItIs: "Execution Context হলো একটি ইন্টারনাল ডেটা স্ট্রাকচার যা কোডের বর্তমান এক্সিকিউশন স্টেট, স্কোপ, ভ্যারিয়েবল এবং 'this' রেফারেন্স ধারণ করে।",
      whyItExists: "জাভাস্ক্রিপ্ট ইঞ্জিন যাতে ট্র্যাক রাখতে পারে কোন লাইনে কোড চলছে, কোন ভ্যারিয়েবলগুলো বর্তমান স্কোপে দৃশ্যমান এবং ফাংশন শেষ হলে কোথায় ফিরে যেতে হবে।",
      howItWorks: "১. ব্রাউজার লোড হওয়ার সাথে সাথে Global Execution Context তৈরি হয়ে Call Stack-এ পুশ হয়। ২. কোনো ফাংশন ইনভোক হলে একটি নতুন Function Execution Context তৈরি হয় এবং Call Stack-এর শীর্ষে চলে যায়। ৩. ফাংশন রিটার্ন করলে তার কনটেক্সট স্ট্যাক থেকে পপ হয়ে ভ্যানিশ হয়ে যায়।",
      whenToUse: "কনসেপ্টটি জানা জরুরি কল স্ট্যাক ওভারফ্লো (Maximum call stack size exceeded) ডিবাগ করতে, ক্লোজার ও স্কোপ চেইনিং বুঝতে এবং 'this' এর মান প্রেডিক্ট করতে।",
      keyPoints: [
        "GEC ডিফল্টভাবে তৈরি হয় (window / global অবজেক্ট এবং this সেট করে)।",
        "প্রতিটি ফাংশন কলের জন্য আলাদা FEC তৈরি হয়।",
        "Creation Phase: Memory Allocation, Scope Chain Setup, this Binding.",
        "Execution Phase: Line-by-line code execution & variable assignment."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `var a = 2;
var b = 4;

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result1 = add(a, b);
var result2 = add(10, 20);

/* 
Execution Context Life Cycle:
১. Creation Phase (Global):
   - a: undefined
   - b: undefined
   - add: function code {...}
   - result1: undefined
   - result2: undefined

২. Execution Phase (Global):
   - a = 2, b = 4
   - add(a, b) কল হলো -> নতুন FEC তৈরি হলো
   - FEC Creation: num1, num2, sum মেমরিতে গেল
   - FEC Execution: sum = 6, return 6
   - FEC পপ হয়ে Call Stack থেকে মুছে গেল
   - result1 = 6
   - add(10, 20) কল হলো -> নতুন FEC তৈরি এবং পপ হলো
   - result2 = 30
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "গ্লোবাল ক্রিয়েশন ফেজ",
          description: "ভ্যারিয়েবল a, b, result1, result2 undefined পেল এবং add ফাংশনটির রেফারেন্স মেমরিতে সেভ হলো।"
        },
        {
          step: 2,
          title: "ফাংশন কল ও নতুন FEC",
          description: "add(a, b) কল হওয়ার সাথে সাথে গ্লোবাল কনটেক্সটের উপরে নতুন লোকাল এক্সিকিউশন কনটেক্সট স্ট্যাকে পুশ হলো।"
        },
        {
          step: 3,
          title: "রিটার্ন ও ক্লিনআপ",
          description: "sum রিটার্ন করার পর ফাংশনের কনটেক্সট মেমরি থেকে ডিলিট হয়ে গেল এবং কন্ট্রোল আবার গ্লোবালে ফিরে আসল।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Stack Overflow Debugging",
        description: "ইনফিনিট রিকার্শনে কল স্ট্যাকের ধারণক্ষমতা শেষ হয়ে গেলে 'RangeError: Maximum call stack size exceeded' কেন হয় তা বোঝা।"
      },
      {
        title: "Memory Profiling in DevTools",
        description: "Chrome DevTools-এর 'Sources' ট্যাবে ব্রেকপয়েন্ট দিয়ে Scope ও Call Stack উইন্ডোতে লাইভ Execution Context দেখা।"
      }
    ],
    interviewTips: {
      tip: "Memory Component (Variable Environment) এবং Code Component (Thread of Execution) এই দুটি টার্ম ব্যবহার করে ইন্টারভিউ শুরু করুন।",
      deliveryStrategy: "GEC -> Creation & Execution Phase -> Call Stack-এ পুশ/পপ কীভাবে হয় ক্রমানুসারে বলুন।",
      avoidSaying: [
        {
          wrong: "জাভাস্ক্রিপ্ট কোড সরাসরি রান হয়ে যায় কোনো স্টেপ ছাড়াই।",
          right: "জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমে ক্রিয়েশন ফেজে মেমরি অ্যালোকেট করে এবং পরে এক্সিকিউশন ফেজে কোড রান করে।"
        }
      ]
    },
    quickRevision: [
      "Execution Context = JS কোড রান হওয়ার পরিবেশ।",
      "ধাপ ২টি: ১. Creation Phase (Memory), ২. Execution Phase (Code execution)।",
      "ধরন: Global Execution Context (GEC) এবং Function Execution Context (FEC)।",
      "Call Stack এক্সিকিউশন কনটেক্সটের লাইফসাইকেল (LIFO অর্ডারে) নিয়ন্ত্রণ করে।"
    ],
    followUpQuestions: [
      {
        question: "Difference between call stack, task queue, and microtask queue.",
        targetId: "callstack-task-queue-microtask",
        shortHint: "ইভেন্ট লুপ ও কিউ ম্যানেজমেন্ট।"
      },
      {
        question: "How does the JavaScript execution context handle closures?",
        targetId: "js-closure-and-memory-leaks",
        shortHint: "ফাংশন পপ হলেও স্কোপ কীভাবে মেমরিতে থাকে।"
      }
    ],
    tags: ["JavaScript", "Core", "Execution Context", "Call Stack", "V8 Engine"]
  },
  {
    id: "callstack-task-queue-microtask",
    slug: "callstack-task-queue-microtask",
    question: "Difference between call stack, task queue, and microtask queue.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Call Stack সিঙ্ক্রোনাস কোড এক্সিকিউট করে। Task Queue (Macrotask) সাধারণ অ্যাসিনক্রোনাস কাজ (যেমন setTimeout, setInterval, I/O) ধরে রাখে। আর Microtask Queue হাই-প্রায়োরিটি অ্যাসিনক্রোনাস কাজ (যেমন Promise.then, queueMicrotask, MutationObserver) রাখে। ইভেন্ট লুপ সবসময় Call Stack খালি হলে Task Queue-এর আগে সমস্ত Microtask শেষ করে।",
    easyExplanation: "সহজ উপমা দিয়ে বুঝুন:\n১. Call Stack (ডাক্তারের চেম্বার): এখানে একজন ডাক্তার (JS Engine) একবারে একজন রোগীর (সিনক্রোনাস কোড) চিকিৎসা করেন।\n২. Microtask Queue (ভিআইপি বা ইমার্জেন্সি লাইন): Promise (.then/catch) বা async/await-এর কাজগুলো এই লাইনে থাকে। ডাক্তারের টেবিল খালি হলেই প্রথমে এই পুরো লাইনের সব কাজ শেষ করতে হবে।\n৩. Task Queue বা Macrotask Queue (সাধারণ টিকিট লাইন): setTimeout, setInterval-এর কাজগুলো এখানে থাকে। ডাক্তার খালি হওয়ার পর যদি কোনো ইমার্জেন্সি রোগী না থাকে, তবেই এই লাইন থেকে মাত্র ১টি কাজ নেওয়া হয়।",
    interviewAnswer: "JavaScript-এ Call Stack হলো LIFO স্ট্রাকচার যা সরাসরি সিঙ্ক্রোনাস কোড চালায়। অ্যাসিনক্রোনাস অপারেশনের জন্য দুটি কিউ আছে: Microtask Queue এবং Macrotask (বা Task) Queue। Promise callback, queueMicrotask এবং MutationObserver যায় Microtask Queue-তে; আর setTimeout, setInterval, DOM events যায় Task Queue-তে। Event Loop যখন দেখে Call Stack খালি, তখন সে Task Queue-র একটি টাস্ক নেওয়ার আগে Microtask Queue-তে থাকা সব কাজ সম্পূর্ণ শেষ করে। ফলে Promises সবসময় setTimeout-এর আগে রান করে।",
    detailedExplanation: {
      whatItIs: "এটি হলো ব্রাউজার বা Node.js রানটাইমের কনকারেন্সি মডেলের ৩টি মূল স্তম্ভ যা কোড এক্সিকিউশনের প্রায়োরিটি ঠিক করে।",
      whyItExists: "JavaScript সিঙ্গেল-থ্রেডেড হওয়ায় দীর্ঘমেয়াদী কাজগুলো (যেমন নেটওয়ার্ক রিকোয়েস্ট, টাইমার) যাতে মূল UI থ্রেডকে ব্লক না করে, সেজন্য এই কিউভিত্তিক আর্কিটেকচার তৈরি করা হয়েছে।",
      howItWorks: "১. সিনক্রোনাস কোড কল স্ট্যাকে রান হয়। ২. টাইমার বা প্রমিজ কল হলে Web API হ্যান্ডেল করে এবং যথাক্রমে Task বা Microtask Queue-তে পাঠায়। ৩. কল স্ট্যাক খালি হলে Event Loop প্রথমে Microtask Queue-এর সব টাস্ক এক্সিকিউট করে, রেন্ডারিং আপডেট করে, এবং সবশেষে Task Queue থেকে একটি টাস্ক কল স্ট্যাকে তোলে।",
      whenToUse: "ডেভেলপমেন্টে দ্রুত স্টেট আপডেট বা কোনো কাজ বর্তমান সিঙ্ক্রোনাস ফ্রেমের ঠিক পরপরই রান করাতে queueMicrotask() বা Promise ব্যবহার করা হয়।",
      keyPoints: [
        "Call Stack = সিঙ্ক্রোনাস এক্সিকিউশন (LIFO)।",
        "Microtask Queue = Promise (.then, .catch, .finally), async/await, queueMicrotask().",
        "Task/Macrotask Queue = setTimeout, setInterval, setImmediate, I/O, UI events.",
        "Prioritization: Call Stack -> ALL Microtasks -> UI Render -> ONE Macrotask."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("4. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise .then (Microtask)");
});

console.log("2. Synchronous End");

/* 
আউটপুট ক্রমানুসারে:
1. Synchronous Start
2. Synchronous End
3. Promise .then (Microtask)
4. setTimeout (Macrotask)
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "সিনক্রোনাস কোড রান",
          description: "console.log('1. Synchronous Start') এবং '2. Synchronous End' সরাসরি কল স্ট্যাকে সাথে সাথে রান করে।"
        },
        {
          step: 2,
          title: "অ্যাসিনক্রোনাস রেজিস্ট্রি",
          description: "setTimeout গেল Task Queue-তে এবং Promise.then গেল Microtask Queue-তে।"
        },
        {
          step: 3,
          title: "ইভেন্ট লুপের প্রায়োরিটি",
          description: "কল স্ট্যাক খালি হওয়ার পর ইভেন্ট লুপ আগে Microtask কিউ খালি করল (Promise output), তারপর Task কিউ থেকে setTimeout রান করল।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React State Batching",
        description: "React 18-এর অটোমেটিক ব্যাচিং ও মাইক্রোটাস্ক অপটিমাইজেশন নিশ্চিত করে অপ্রয়োজনীয় রি-রেন্ডার কমানো।"
      },
      {
        title: "UI Responsiveness",
        description: "ভারী কাজকে ছোট ছোট setTimeout বা requestAnimationFrame চাঙ্কে ভাগ করে UI ফ্রিজ হওয়া রোধ করা।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারদের খুব প্রিয় প্রশ্ন। কোড স্নিপেটের আউটপুট অর্ডার ব্যাখ্যা করার সময় 'Event loop prioritizes microtasks over macrotasks' স্পষ্ট করে বলুন।",
      deliveryStrategy: "Call Stack -> Microtask Queue -> Macrotask Queue এই তিনটির ভূমিকা ১টি কোড ট্রেস করে বুঝিয়ে দিন।",
      avoidSaying: [
        {
          wrong: "setTimeout(..., 0) মানে ০ মিলিসেকেন্ডেই সাথে সাথে এক্সিকিউট হবে।",
          right: "setTimeout(..., 0) মানে ০ms পর এটি Task Queue-তে পুশ হবে, কিন্তু কল স্ট্যাক ও মাইক্রোটাস্ক কিউ খালি না হওয়া পর্যন্ত রান হবে না।"
        }
      ]
    },
    quickRevision: [
      "Call Stack: সিঙ্ক্রোনাস কোড চালায়।",
      "Microtask: Promise, queueMicrotask (হাই প্রায়োরিটি, সব একবারে শেষ হয়)।",
      "Macrotask/Task: setTimeout, setInterval (লো প্রায়োরিটি, প্রতি লুপে ১টি করে)।",
      "অর্ডার: Call Stack -> Microtasks (All) -> Render -> Macrotask (One)।"
    ],
    followUpQuestions: [
      {
        question: "How does the event loop prioritize Promises over setTimeout?",
        targetId: "event-loop-promises-vs-settimeout",
        shortHint: "ইভেন্ট লুপের নির্দিষ্ট টিক সাইকেল।"
      },
      {
        question: "Difference between async/await and Promises internally.",
        targetId: "async-await-vs-promises-internals",
        shortHint: "জেনারেটর ও মাইক্রোটাস্কের সম্পর্ক।"
      }
    ],
    tags: ["JavaScript", "Event Loop", "Call Stack", "Microtasks", "Async"]
  },
  {
    id: "event-loop-promises-vs-settimeout",
    slug: "event-loop-promises-vs-settimeout",
    question: "How does the event loop prioritize Promises over setTimeout?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Event Loop প্রতিটি লুপ টার্ণে (tick) Call Stack খালি হওয়ার পর প্রথমে Microtask Queue-তে থাকা সমস্ত Promise কলব্যাক এক্সিকিউট করে শেষ করে। Microtask Queue সম্পূর্ণ খালি হওয়ার পরেই কেবল Task Queue থেকে একটি setTimeout কলব্যাক Call Stack-এ তোলে।",
    easyExplanation: "সহজভাবে বললে, ব্রাউজার ইঞ্জিনের কাছে Promise এবং setTimeout সমান নয়।\n- Promise হলো 'Microtask' (ভিআইপি প্রায়োরিটি)।\n- setTimeout হলো 'Macrotask' (সাধারণ প্রায়োরিটি)।\n\nযখন সিনক্রোনাস কোড শেষ হয়, ইভেন্ট লুপ চেক করে: 'Microtask কিউতে কি কিছু বাকি আছে?' যদি থাকে, সে আগে সেগুলো সব শেষ করবে। এমনকি একটি প্রমিজের ভেতরে যদি আরেকটি প্রমিজ চেইন থাকে, সেটাও আগে শেষ হবে। এরপর সে setTimeout-এর দিকে তাকাবে। তাই setTimeout(fn, 0) থাকলেও প্রমিজ সবসময় আগে জিতে যায়।",
    interviewAnswer: "The Event loop prioritizes Promises over setTimeout due to the distinction between the Microtask Queue and the Macrotask Queue. Promise callbacks (.then, .catch, .finally) are queued in the Microtask Queue, while timer callbacks like setTimeout are placed in the Task (Macrotask) Queue. According to the HTML Event Loop specification, at the end of each task execution, the JavaScript engine MUST process all available microtasks until the microtask queue is completely drained before yielding to rendering or picking the next macrotask.",
    detailedExplanation: {
      whatItIs: "HTML5 এবং ECMAScript স্পেসিফিকেশনে নির্ধারিত ইভেন্ট লুপ এক্সিকিউশন অ্যালগরিদম যা মাইক্রোটাস্ক ড্রেইনিংকে ম্যাক্রোটাস্কের চেয়ে অগ্রাধিকার দেয়।",
      whyItExists: "অ্যাপ্লিকেশনের স্টেট ও ডেটা যাতে দ্রুত এবং কনসিস্টেন্টভাবে সিঙ্ক হয় রেন্ডারিং ঘটার আগেই, সেজন্য প্রমিজ বা মাইক্রোটাস্ককে হাই প্রায়োরিটি দেওয়া হয়েছে।",
      howItWorks: "লুপের প্রতিটি সাইকেলে: ১. একটি ম্যাক্রোটাস্ক রান হয় (বা স্ক্রিপ্ট এক্সিকিউট হয়)। ২. 'Perform a microtask checkpoint' এক্সিকিউট হয়—যতক্ষণ মাইক্রোটাস্ক কিউতে আইটেম থাকবে ততক্ষণ একটার পর একটা চলতে থাকবে। ৩. ব্রাউজার UI রি-পেইন্ট করে। ৪. পরবর্তী ম্যাক্রোটাস্কে যায়।",
      whenToUse: "যখন আপনার কোনো অ্যাসিনক্রোনাস অ্যাকশন নিশ্চিত করতে হবে পরবর্তী পেইন্ট বা টাইমার ইভেন্টের আগেই সম্পন্ন হতে হবে।",
      keyPoints: [
        "Microtask starvation: যদি মাইক্রোটাস্ক কিউতে বারবার নতুন মাইক্রোটাস্ক যোগ হতে থাকে, তবে setTimeout কখনো রান হওয়ার সুযোগ নাও পেতে পারে (UI ফ্রিজ হতে পারে)।",
        "setTimeout(..., 0) কখনোই ০ মিলিসেকেন্ডের গ্যারান্টি দেয় না, এটি ন্যূনতম টাইম ডিলের আশ্বাস মাত্র।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return "Promise 2";
  })
  .then((res) => {
    console.log(res); // Nested microtask
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

/* 
Output:
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
*/`,
      explanationSteps: [
        {
          step: 1,
          title: "সিনক্রোনাস প্রিন্ট",
          description: "সরাসরি 'Start' এবং 'End' প্রিন্ট হলো।"
        },
        {
          step: 2,
          title: "মাইক্রোটাস্ক চেইনিং",
          description: "'Promise 1' এক্সিকিউট হওয়ার পর রিটার্ন করা 'Promise 2' মাইক্রোটাস্ক কিউতেই পুশ হয়ে সরাসরি Timeout-এর আগেই রান করল।"
        },
        {
          step: 3,
          title: "ম্যাক্রোটাস্ক প্রসেসিং",
          description: "সব মাইক্রোটাস্ক খালি হওয়ার পর ক্রমানুসারে 'Timeout 1' এবং 'Timeout 2' এক্সিকিউট হলো।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Microtask Starvation Warning",
        description: "রিকালসিভ Promise চেইন বা আনবাউন্ডেড queueMicrotask ব্যবহারের ফলে ব্রাউজার উইন্ডো আনরেসপনসিভ হয়ে পড়া।"
      },
      {
        title: "Analytics Event Flushing",
        description: "ইউজার পেজ ত্যাগ করার ঠিক আগের মুহূর্তে মাইক্রোটাস্ক ব্যবহার করে ডেটা নিরাপদে ডিসপ্যাচ করা।"
      }
    ],
    interviewTips: {
      tip: "'Microtask Checkpoint' কথাটি উল্লেখ করুন। বলুন যে স্পেসিফিকেশন অনুযায়ী প্রতিটি টাস্কের শেষে মাইক্রোটাস্ক কিউ ড্রেইন করা বাধ্যতামূলক।",
      deliveryStrategy: "স্পেসিফিকেশনের রুল উল্লেখ করুন এবং মাইক্রোটাস্ক ও ম্যাক্রোটাস্কের এক্সিকিউশন অর্ডার পরিষ্কার উদাহরণ দিয়ে দেখান।",
      avoidSaying: [
        {
          wrong: "Promise ব্রাউজারের আলাদা থ্রেডে দ্রুত চলে তাই আগে প্রিন্ট হয়।",
          right: "উভয়ই সিঙ্গেল থ্রেডেই চলে, তবে ইভেন্ট লুপ আর্কিটেকচারে Microtask Queue-কে Macrotask Queue-এর চেয়ে অগ্রাধিকার দেওয়া হয়।"
        }
      ]
    },
    quickRevision: [
      "Promise = Microtask, setTimeout = Macrotask.",
      "Call Stack খালি হলেই সমস্ত Microtasks শেষ করা হয়।",
      "সব Microtask শেষ না হলে পরবর্তী Macrotask শুরু হতে পারে না।",
      "নেস্টেড Promise ও setTimeout-এর আগেই রান করবে।"
    ],
    followUpQuestions: [
      {
        question: "Difference between async/await and Promises internally.",
        targetId: "async-await-vs-promises-internals",
        shortHint: "async/await কীভাবে মাইক্রোটাস্ক তৈরি করে।"
      }
    ],
    tags: ["JavaScript", "Event Loop", "Promises", "Async", "setTimeout"]
  },
  {
    id: "lexical-scoping-example",
    slug: "lexical-scoping-example",
    question: "Explain lexical scoping with an example.",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Lexical Scoping (বা Static Scoping) হলো এমন একটি নিয়ম যেখানে একটি ফাংশন কোন ভ্যারিয়েবলগুলোকে অ্যাক্সেস করতে পারবে, তা নির্ধারিত হয় কোড লেখার সময় ফাংশনটি ফিজিক্যালি কোথায় লেখা হয়েছে তার ওপর ভিত্তি করে—ফাংশনটি কোথা থেকে কল করা হচ্ছে তার ওপর নয়।",
    easyExplanation: "'Lexical' শব্দের অর্থ হলো কোড লেখার অবস্থান (Where the code is physically written)।\n\nসহজ নিয়ম:\n১. একটি ভেতরের ফাংশন (Inner function) সবসময় তার বাইরের ফাংশনের (Outer function) এবং গ্লোবাল স্কোপের ভ্যারিয়েবল দেখতে পায়।\n২. কিন্তু বাইরের ফাংশন ভেতরের ফাংশনের ভ্যারিয়েবল দেখতে পায় না।\n৩. ফাংশনকে আপনি যেখান থেকেই কল করুন না কেন, সে যেখানে জন্ম নিয়েছে (অর্থাৎ যেখানে ডিফাইন করা হয়েছে), সেখানকার চারপাশের স্কোপকেই চেনে। একেই বলে Lexical Scope।",
    interviewAnswer: "Lexical scoping means that variable resolution is determined by the physical location of functions within the source code during write-time (author-time), rather than where the function is called at runtime. An inner function has access to variables declared in its own scope, its parent outer function's scope, and the global scope via the Scope Chain.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্টের স্ট্যাটিক স্কোপিং মেকানিজম যা কোডের নেস্টিং স্ট্রাকচারের ওপর ভিত্তি করে ভ্যারিয়েবল লুকআপ পরিচালনা করে।",
      whyItExists: "ফাংশনগুলোকে প্রেডিক্টেবল এবং সেলফ-কন্টেইন্ড রাখা যাতে যেকোনো জায়গা থেকে ইনভোক করা হলেও তাদের রেফারেন্স লজিক পরিবর্তন না হয়।",
      howItWorks: "JS Engine কম্পাইল করার সময় প্রতিটি ফাংশনের সাথে তার চারপাশের Lexical Environment-এর একটি অভ্যন্তরীণ রেফারেন্স (`[[Environment]]`) সংরক্ষণ করে রাখে। যখন কোনো ভ্যারিয়েবল খোঁজা হয়, সে প্রথমে লোকাল স্কোপে খোঁজে, না পেলে Scope Chain বেয়ে ওপরের এনভায়রনমেন্টে যায়।",
      whenToUse: "ক্লোজার (Closure), প্রাইভেট ভ্যারিয়েবল এবং মডিউল প্যাটার্ন বাস্তবায়নের মূল ভিত্তি হলো লেক্সিক্যাল স্কোপিং।",
      keyPoints: [
        "Lexical = Author-time / Definition location.",
        "Dynamic Scoping-এর বিপরীত (যেখানে কল করার অবস্থানের ওপর স্কোপ ঠিক হয়)।",
        "Scope Chain একমুখী—ভেতর থেকে বাইরের দিকে যায়, কিন্তু বাইরে থেকে ভেতরে অ্যাক্সেস পাওয়া যায় না।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const globalVar = "আমি গ্লোবাল";

function outerFunction() {
  const outerVar = "আমি আউটার ফাংশনের";

  function innerFunction() {
    const innerVar = "আমি ইনার ফাংশনের";
    
    // ইনার ফাংশন ৩টি স্কোপেই অ্যাক্সেস পায়
    console.log(innerVar);   // Output: আমি ইনার ফাংশনের
    console.log(outerVar);   // Output: আমি আউটার ফাংশনের
    console.log(globalVar);  // Output: আমি গ্লোবাল
  }

  innerFunction();
  // console.log(innerVar); // ❌ ReferenceError! আউটার ফাংশন ভেতরের ভ্যারিয়েবল পায় না
}

outerFunction();`,
      explanationSteps: [
        {
          step: 1,
          title: "লেক্সিক্যাল নেস্টিং",
          description: "innerFunction ফিজিক্যালি outerFunction এর ভেতরে সংজ্ঞায়িত করা হয়েছে।"
        },
        {
          step: 2,
          title: "স্কোপ চেইনের লুকআপ",
          description: "innerFunction যখন outerVar খুঁজেছে, তখন লোকাল স্কোপে না পেয়ে লেক্সিক্যাল প্যারেন্ট outerFunction-এ গিয়ে মান পেয়েছে।"
        },
        {
          step: 3,
          title: "একমুখী স্কোপ সুরক্ষা",
          description: "outerFunction থেকে innerVar কল করলে ReferenceError দেবে কারণ স্কোপ চেইন বাইরের দিকে কাজ করে, ভেতরের দিকে নয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "React Functional Components",
        description: "কম্পোনেন্টের ভেতরে লেখা হেল্পার ফাংশন বা ইভেন্ট হ্যান্ডলারগুলো কম্পোনেন্টের Props ও State-কে লেক্সিক্যালি অ্যাক্সেস করতে পারে।"
      },
      {
        title: "Module Bundling",
        description: "Webpack ও Vite লেক্সিক্যাল স্কোপকে ভিত্তি করে Tree Shaking ও Scope Hoisting অপটিমাইজেশন করে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'কল করার জায়গার ওপর নির্ভর করে'। জোর দিয়ে বলুন 'কোথায় ডিফাইন করা হয়েছে (Author-time) তার ওপর নির্ভর করে'।",
      deliveryStrategy: "১ লাইনে সংজ্ঞা দিয়ে সহজ কোড উদাহরণে স্কোপ চেইনের একমুখী ডিরেকশন বুঝিয়ে বলুন।",
      avoidSaying: [
        {
          wrong: "যেখান থেকে কল করা হয় সেখান থেকে ভ্যারিয়েবল খুঁজে পায়।",
          right: "জাভাস্ক্রিপ্টে স্কোপিং ডাইনামিক নয় বরং লেক্সিক্যাল, তাই ফাংশনটি যেখানে সংজ্ঞায়িত (declared) হয়েছে তার পরিবেশ পায়।"
        }
      ]
    },
    quickRevision: [
      "Lexical = Written location (কোড লেখার অবস্থান)।",
      "Inner ফাংশন Outer ফাংশনের সব ভ্যারিয়েবল অ্যাক্সেস করতে পারে।",
      "Outer ফাংশন Inner ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে না।",
      "এটি Closure তৈরির মূল ফাউন্ডেশন।"
    ],
    followUpQuestions: [
      {
        question: "What is a closure, and when does it cause memory leaks?",
        targetId: "js-closure-and-memory-leaks",
        shortHint: "লেক্সিক্যাল স্কোপকে মেমরিতে ধরে রাখার মেকানিজম।"
      }
    ],
    tags: ["JavaScript", "Core", "Scope", "Lexical Scoping", "Scope Chain"]
  },
  {
    id: "undeclared-vs-undefined",
    slug: "undeclared-vs-undefined",
    question: "What happens when you access an undeclared variable vs undefined?",
    category: "JavaScript",
    categorySlug: "javascript",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Undefined হলো JavaScript-এর একটি ভ্যালিড প্রিমিটিভ টাইপ ও ভ্যালু যা নির্দেশ করে ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান অ্যাসাইন করা হয়নি। আর Undeclared ভ্যারিয়েবল হলো এমন একটি ভ্যারিয়েবল যা স্কোপে কখনোই ডিক্লেয়ার করা হয়নি; এটি অ্যাক্সেস করার চেষ্টা করলে সরাসরি ReferenceError থ্রো করে।",
    easyExplanation: "সহজ ভাষায় পার্থক্য:\n\n১. Undefined (ঘোষিত কিন্তু খালি):\n- আপনি মেমরিতে একটি পাত্র (variable) বানিয়েছেন, কিন্তু ভেতরে কিছু রাখেননি।\n- যেমন: let x; console.log(x); -> JS বলবে: 'x আছে, তবে এর মান undefined'।\n\n২. Undeclared (অস্তিত্বহীন):\n- আপনি পাত্রই বানাননি, কিন্তু সরাসরি ব্যবহার করতে চেয়েছেন।\n- যেমন: console.log(y); -> JS বলবে: 'ReferenceError: y is not defined' (অর্থাৎ y নামের কিছুই মেমরিতে নেই)।\n- নোট: ব্রাউজার এরর মেসেজে 'is not defined' লিখলেও টেকনিক্যালি এটি 'undeclared'।",
    interviewAnswer: "An 'undefined' variable is a variable that has been declared in memory using var, let, or const, but has not yet been assigned any value. In contrast, an 'undeclared' variable has never been declared within the current scope chain. Accessing an undeclared variable throws a runtime 'ReferenceError: [variable] is not defined', whereas accessing an unassigned declared variable safely returns the primitive value 'undefined'.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্ট মেমরি স্টেট এবং ভ্যারিয়েবল ডিক্লেয়ারেশন লাইফসাইকেলের দুটি সম্পূর্ণ ভিন্ন অবস্থা।",
      whyItExists: "Undefined ব্যবহৃত হয় কোনো ভ্যালুর ডিফল্ট অনুপস্থিতি নির্দেশ করতে। আর Undeclared এরর ডেভেলপারদের অসাবধানতাবশত টাইপো বা মিসিং ডিপেনডেন্সি ধরতে সাহায্য করে।",
      howItWorks: "JS Engine স্কোপ চেইনে ভ্যারিয়েবলের নাম খোঁজে। নাম পাওয়া গেলে কিন্তু ভ্যালু না থাকলে undefined রিটার্ন করে। পুরো গ্লোবাল স্কোপ পর্যন্ত খুঁজেও নাম না পেলে ReferenceError দেয়।",
      whenToUse: "নন-স্ট্রিক্ট মোডে আনডিক্লেয়ার্ড ভ্যারিয়েবলে ভ্যালু অ্যাসাইন করলে (যেমন `x = 5;`) তা স্বয়ংক্রিয়ভাবে গ্লোবাল ভ্যারিয়েবল বানিয়ে ফেলে—যা একটি বিপজ্জনক অ্যান্টি-প্যাটার্ন। 'use strict' ব্যবহার করলে এটি বন্ধ হয়।",
      keyPoints: [
        "undefined হলো একটি primitive type (`typeof undefined === 'undefined'`).",
        "Undeclared অ্যাক্সেসে ReferenceError হয় (`typeof undeclaredVar === 'undefined'` সেফ চেক দেয়).",
        "'use strict' মোডে আনডিক্লেয়ার্ড ভ্যারিয়েবলে অ্যাসাইনমেন্ট নিষিদ্ধ।"
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Undefined ভ্যারিয়েবল
let a;
console.log(a);        // Output: undefined
console.log(typeof a); // Output: "undefined"

// ২. Undeclared ভ্যারিয়েবল
try {
  console.log(b);      // ❌ ReferenceError: b is not defined
} catch (err) {
  console.log(err.name + ": " + err.message);
}

// ৩. typeof এর ব্যতিক্রমী সেফ আচরণ
console.log(typeof b); // Output: "undefined" (এরর দেয় না)

// ৪. স্ট্রিক্ট মোড বনাম আনডিক্লেয়ার্ড অ্যাসাইনমেন্ট
function test() {
  // "use strict";
  c = 50; // নন-স্ট্রিক্ট মোডে এটি উইন্ডোতে গ্লোবাল ভ্যারিয়েবল হয়ে যায়!
}
test();
console.log(window.c); // 50 (Polluting global scope)`,
      explanationSteps: [
        {
          step: 1,
          title: "Declared but Unassigned",
          description: "ভ্যারিয়েবল a মেমরিতে তৈরি হয়েছে কিন্তু কোনো মান দেওয়া হয়নি, তাই JS ইঞ্জিন ডিফল্ট undefined রিটার্ন করেছে।"
        },
        {
          step: 2,
          title: "Undeclared Access",
          description: "ভ্যারিয়েবল b স্কোপ চেইনে কোথাও না থাকায় ইঞ্জিন সরাসরি ReferenceError ছুড়ে দিয়েছে।"
        },
        {
          step: 3,
          title: "typeof সেফটি গার্ড",
          description: "typeof অপারেটর আনডিক্লেয়ার্ড ভ্যারিয়েবলের ক্ষেত্রেও ক্র্যাশ না করে নিরাপদে 'undefined' স্ট্রিং রিটার্ন করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Feature Detection",
        description: "পুরোনো ব্রাউজারে `if (typeof window.fetch !== 'undefined')` ব্যবহার করে আনডিক্লেয়ার্ড ক্র্যাশ ছাড়া ফিচার চেক করা।"
      },
      {
        title: "Strict Mode Cleanliness",
        description: "TypeScript বা ES Modules ডিফল্টভাবে strict mode চালু রাখে যাতে কেউ ভুল করে গ্লোবাল স্কোপ পলিউট করতে না পারে।"
      }
    ],
    interviewTips: {
      tip: "ব্রাউজার এররে 'b is not defined' লেখা দেখে বিভ্রান্ত হবেন না। ইন্টারভিউয়ারকে স্পষ্ট করে বলুন: 'এররে not defined লিখলেও টেকনিক্যালি এটি undeclared'।",
      deliveryStrategy: "সংজ্ঞা -> মেমরি স্টেট -> কোড এরর আচরণ -> typeof এর সেফটি গার্ড তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "Undefined এবং Undeclared একই জিনিস।",
          right: "Undefined হলো মানহীন ডিক্লেয়ার্ড ভ্যারিয়েবল, আর Undeclared হলো মেমরিতে কখনোই রেজিস্টার না হওয়া ভ্যারিয়েবল।"
        }
      ]
    },
    quickRevision: [
      "Undefined = ডিক্লেয়ার করা হয়েছে কিন্তু মান দেওয়া হয়নি (Primitive Value).",
      "Undeclared = কখনোই ডিক্লেয়ার করা হয়নি (Access করলে ReferenceError).",
      "typeof undeclaredVar দিলে ক্র্যাশ না করে 'undefined' স্ট্রিং দেয়।",
      "'use strict' ব্যবহার করলে আনডিক্লেয়ার্ড ভ্যারিয়েবলে অ্যাসাইনমেন্ট বন্ধ হয়।"
    ],
    followUpQuestions: [
      {
        question: "Difference between null and undefined in JavaScript.",
        shortHint: "ইচ্ছাকৃত শূন্যতা বনাম সিস্টেম ডিফল্ট মানহীনতা।"
      }
    ],
    tags: ["JavaScript", "Core", "Variables", "Data Types", "Error Handling"]
  }
];
