import { MockInterviewItem } from "@/types";

export const day2Questions: MockInterviewItem[] = [
  {
    id: "pa-d2-q16-destructuring",
    questionNumber: 16,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is destructuring in JavaScript? Explain with array and object examples.",
    banglaQuestion: "JavaScript-এ Destructuring কী? Array এবং Object-এর উদাহরণসহ ব্যাখ্যা করুন।",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["JavaScript", "ES6", "Destructuring", "Objects", "Arrays"],
    english: {
      quickAnswer: "Destructuring is an ES6 syntax that unpacks values from arrays or properties from objects into distinct variables in a single, readable statement.",
      interviewSpeech: "Destructuring assignment is an ES6 feature that allows us to extract data from arrays and objects into distinct variables with concise syntax. Array destructuring is position-based (index-ordered), meaning variable names don't need to match any keys, and we can easily skip elements with commas or collect trailing items with the rest operator (`...rest`). Object destructuring, on the other hand, is property-name based (key-matched), where variable names correspond to object keys. It also supports property renaming with colons (`{ oldKey: newName }`), default fallback values (`{ timeout = 5000 }`), and deeply nested property extraction. Destructuring greatly enhances code clarity, especially in function parameter signatures and React component props.",
      deepDive: [
        "**Position vs. Key Mapping**: Array destructuring unpacks values sequentially by index (`[a, , c] = list`), whereas object destructuring looks up properties by string or symbol keys (`{ id, name } = user`).",
        "**Default Value Triggers**: Default values (`[x = 10]`, `{ y = 20 }`) only kick in when the targeted value is strictly `undefined`. Passing `null`, `false`, or `0` will NOT trigger defaults.",
        "**Nested and Dynamic Keys**: Object destructuring supports computed keys `const { [dynamicKey]: val } = obj` and nested extraction `const { user: { address: { zip } } } = response`.",
        "**Parameter Unpacking**: Widely leveraged in modern frameworks, e.g., React component props `const Profile = ({ name, role = 'member' }) => ...`."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Array & Object Destructuring Examples",
        code: "// 1. Array Destructuring (order-based)\nconst coords = [40.7128, -74.0060, 10];\nconst [lat, lng, elevation = 0] = coords;\nconst [first, , third] = coords; // skipping 2nd element\nlet a = 1, b = 2;\n[a, b] = [b, a]; // Swapping variables cleanly\n\n// 2. Object Destructuring (key-based)\nconst user = {\n  id: 101,\n  fullName: \"John Doe\",\n  profile: { role: \"Admin\" }\n};\nconst { fullName: name, profile: { role }, isVerified = true } = user;\nconsole.log(name, role, isVerified); // \"John Doe\", \"Admin\", true\n\n// 3. Function Parameter Destructuring\nfunction configure({ timeout = 3000, retries = 3 } = {}) {\n  return `Timeout: ${timeout}ms, Retries: ${retries}`;\n}\nconsole.log(configure()); // default options handled gracefully"
      },
      commonMistakes: [
        "Assuming `null` triggers default values: `{ val = 'default' }` given `{ val: null }` will evaluate to `null`, not `'default'`.",
        "Destructuring from `undefined` or `null` without defensive fallbacks, causing `TypeError: Cannot destructure property of undefined`."
      ],
      proTips: [
        "Always provide a default empty object in function parameters `function handler({ key } = {})` so calling `handler()` without arguments won't throw a runtime TypeError."
      ]
    },
    bangla: {
      quickAnswer: "Destructuring হলো ES6-এর একটি পাওয়ারফুল সিনট্যাক্স যার মাধ্যমে array থেকে পজিশন অনুযায়ী এবং object থেকে কী (key) অনুযায়ী মান বের করে আলাদা ভেরিয়েবলে অ্যাসাইন করা যায়।",
      interviewSpeech: "Destructuring অ্যাসাইনমেন্ট মূলত একটি ক্লিন সিনট্যাক্স যা দিয়ে আমরা কোনো array বা object-এর ভেতরের ডেটা ভেঙে এক লাইনে আলাদা ভেরিয়েবলে সংরক্ষণ করতে পারি। Array destructuring পজিশন বা ইনডেক্স ভিত্তিক কাজ করে—এখানে ভেরিয়েবলের নাম যেকোনো কিছু হতে পারে এবং কমা দিয়ে মাঝের এলিমেন্ট স্কিপ করা যায় বা `...rest` দিয়ে বাকিগুলো নেওয়া যায়। এমনকি দুটি ভেরিয়েবলের মান সোয়াপ (swap) করতে এটি দারুণ কার্যকর: `[a, b] = [b, a]`। অপরদিকে Object destructuring প্রোপার্টি নেম বা কী (key) ভিত্তিক কাজ করে। এতে প্রোপার্টির নাম রিনেম করা (`{ oldKey: newName }`), ডিফল্ট ভ্যালু সেট করা এবং নেস্টেড অবজেক্ট থেকে ডেটা এক্সট্রাক্ট করা যায়। এটি রিঅ্যাক্ট কম্পোনেন্টের props ডিসট্রাকচারিংয়ে বহুল ব্যবহৃত হয়।",
      deepDive: [
        "**পজিশন বনাম কী ম্যাপিং**: Array ডিসট্রাকচারিং ইনডেক্স সিকোয়েন্স অনুযায়ী মান নেয়, আর Object ডিসট্রাকচারিং প্রোপার্টির নামের সাথে মিলিয়ে ভেরিয়েবল তৈরি করে।",
        "**ডিফল্ট ভ্যালুর শর্ত**: কোনো প্রোপার্টির মান শুধুমাত্র `undefined` হলেই ডিফল্ট ভ্যালু কাজ করবে। মান `null`, `false` বা `0` হলে ডিফল্ট ভ্যালু অ্যাপ্লাই হবে না।",
        "**নেস্টেড ও রিনেমিং**: `{ user: { address: { city } } }` সিনট্যাক্সে ডিপ প্রোপার্টি বের করা যায় এবং `{ api_key: apiKey }` দিয়ে ভেরিয়েবল রিনেম করা সম্ভব।",
        "**ফাংশন প্যারামিটার**: অপশন কনফিগ পাস করার সময় `function init({ port = 8080, debug = false } = {})` প্যাটার্ন কোডকে দারুণ রিডেবল ও এররমুক্ত রাখে।"
      ],
      commonMistakes: [
        "মনে করা যে `null` থাকলে ডিফল্ট ভ্যালু কাজ করবে; আসলে ডিফল্ট ভ্যালু কেবল `undefined`-এর ক্ষেত্রে ট্রিগার হয়।",
        "`null` বা `undefined` অবজেক্ট থেকে সরাসরি ডিসট্রাকচার করতে গিয়ে `TypeError: Cannot destructure property...` বাগ তৈরি করা।"
      ],
      proTips: [
        "ফাংশন প্যারামিটারে অবজেক্ট ডিসট্রাকচার করার সময় সর্বদা শেষে `= {}` ডিফল্ট দিন, যেন আর্গুমেন্ট ছাড়া ফাংশন কল করলেও ক্র্যাশ না করে।"
      ]
    }
  },
  {
    id: "pa-d2-q17-spread-and-rest",
    questionNumber: 17,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What are the spread and rest operators and how are they used?",
    banglaQuestion: "Spread এবং Rest অপারেটর কী এবং এরা কীভাবে কাজ করে?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["JavaScript", "ES6", "Spread Operator", "Rest Parameters", "Immutability"],
    english: {
      quickAnswer: "Both share the `...` syntax: Rest gathers multiple discrete elements into a single array/object; Spread unpacks/expands an iterable or object into individual elements.",
      interviewSpeech: "While both operators use three consecutive dots (`...`), their purposes are polar opposites. The Rest operator gathers multiple elements and condenses them into a single collection. In function declarations, rest parameters (`function sum(...numbers)`) gather variable counts of arguments into a genuine array, replacing the legacy `arguments` object. In destructuring, rest captures remaining array items or object keys (`const { id, ...details } = item`). Conversely, the Spread operator unpacks elements from an array or iterable into individual arguments or elements, or copies enumerable properties between objects. It is the backbone of immutable state updates in modern JavaScript and React, enabling effortless array concats and shallow object merging.",
      deepDive: [
        "**Rest Placement Constraint**: Rest must strictly be the final element in parameter lists or destructuring patterns: `(...rest, last)` throws `SyntaxError: Rest element must be last element`.",
        "**Spread Unpacking**: Spread works on any iterable (`Symbol.iterator`), such as arrays, sets, maps, and strings. Object spread (`{ ...obj }`), introduced in ES2018, copies enumerable own properties.",
        "**Shallow Copy Guarantee**: Spreading an object creates a shallow clone. Nested reference types (arrays, objects) are copied by reference, not deep-cloned.",
        "**Math and API Applications**: Passing dynamic arrays to functions expecting positional arguments: `Math.max(...scores)`."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Rest (Gather) vs. Spread (Spread Out)",
        code: "// 1. REST: Gathers arguments into an array\nfunction calculateTotal(taxRate, ...prices) {\n  const subtotal = prices.reduce((sum, p) => sum + p, 0);\n  return subtotal + (subtotal * taxRate);\n}\nconsole.log(calculateTotal(0.1, 10, 20, 30)); // 66\n\n// 2. REST in destructuring: Captures remaining items\nconst [leader, runnerUp, ...participants] = [\"Alice\", \"Bob\", \"Charlie\", \"Dave\"];\nconsole.log(participants); // [\"Charlie\", \"Dave\"]\n\n// 3. SPREAD: Expands array into individual elements\nconst numbers = [5, 25, 10, 99, 4];\nconsole.log(Math.max(...numbers)); // 99\n\n// 4. SPREAD: Immutable object merging / shallow copying\nconst state = { count: 1, user: { name: \"Sarah\" } };\nconst nextState = { ...state, count: state.count + 1 };\nconsole.log(nextState.count); // 2"
      },
      commonMistakes: [
        "Putting the rest parameter anywhere other than the very end of the parameter or destructuring pattern.",
        "Assuming object spread `{ ...obj }` performs a deep clone; nested objects still share memory addresses."
      ],
      proTips: [
        "Remember the interview mnemonic: 'Rest gathers into a single bag; Spread unpacks the bag into individual items.'"
      ]
    },
    bangla: {
      quickAnswer: "দুটোর সিনট্যাক্সই `...`, তবে কাজ সম্পূর্ণ বিপরীত: Rest অপারেটর অনেকগুলো উপাদানকে একত্র করে একটি array বা object-এ পুট করে; আর Spread অপারেটর একটি কালেকশনকে ভেঙে উপাদানগুলোকে ছড়িয়ে দেয়।",
      interviewSpeech: "Spread এবং Rest অপারেটরের সিনট্যাক্স দেখতে একই (`...`), তবে কনটেক্সটের ওপর নির্ভর করে এদের কাজ সম্পূর্ণ আলাদা। Rest অপারেটরের কাজ হলো উপাদানগুলোকে 'একত্র করা' (gather)। যখন আমরা কোনো ফাংশনে একাধিক আর্গুমেন্ট গ্রহণ করি (`function sum(...nums)`), তখন এটি সব মানকে একটি বাস্তব array-তে রূপান্তর করে, যা পুরনো `arguments` অবজেক্টের চেয়ে অনেক কার্যকর। আবার destructuring-এর সময় বাকি মানগুলোকে আলাদা করতেও রেস্ট ব্যবহার করা হয়। অপরদিকে Spread অপারেটরের কাজ হলো কোনো array, স্ট্রিং বা অবজেক্টের উপাদানগুলোকে 'ছড়িয়ে দেওয়া' (unpack)। রিঅ্যাক্ট এবং আধুনিক জাভাস্ক্রিপ্টে ইমিউটেবল স্টেট আপডেট করতে অবজেক্ট ও অ্যারে ক্লোন করার জন্য স্প্রেড অপারেটর সর্বাধিক ব্যবহৃত হয়।",
      deepDive: [
        "**Rest-এর অবস্থান**: Rest প্যারামিটার সর্বদা প্যারামিটার লিস্ট বা destructuring প্যাটার্নের একদম শেষে থাকতে হয়, অন্যথায় `SyntaxError` ঘটে।",
        "**Spread-এর রূপান্তর**: Spread অপারেটর মূলত যেকোনো iterable (Array, Set, String) বা Object-এর নিজস্ব প্রোপার্টিগুলোকে খুলে দেয়।",
        "**শ্যালো ক্লোন সতর্কতা**: `{ ...user }` কেবল ফার্স্ট-লেভেল শ্যালো কপি করে; ভেতরের নেস্টেড অবজেক্টগুলো আগের রেফারেন্সেই রয়ে যায়।",
        "**ফাংশন কল ও কনক্যাট**: `Math.max(...arr)` বা `[...arr1, ...arr2]` ব্যবহারে কোড সংক্ষিপ্ত ও দ্রুততর হয়।"
      ],
      commonMistakes: [
        "Rest প্যারামিটারকে ফাংশনের শুরুতে বা মাঝে ডিক্লেয়ার করা।",
        "স্প্রেড অপারেটর দিয়ে অবজেক্ট কপি করলে ডিপ কপি (Deep Copy) হয়ে গেছে ভেবে নিশ্চিন্ত থাকা।"
      ],
      proTips: [
        "ইন্টারভিউতে এক বাক্যে বলুন: 'Rest অনেকগুলোকে বেঁধে এক করে (gathers), আর Spread একটাকে খুলে সবাইকে আলাদা করে দেয় (expands)।'"
      ]
    }
  },
  {
    id: "pa-d2-q18-map-filter-reduce",
    questionNumber: 18,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "Explain the difference between map(), filter(), and reduce().",
    banglaQuestion: "map(), filter(), এবং reduce()-এর মধ্যে মূল পার্থক্য কী কী?",
    difficulty: "Beginner",
    importance: "Must Know",
    tags: ["JavaScript", "Arrays", "Functional Programming", "map", "filter", "reduce"],
    english: {
      quickAnswer: "`map()` transforms each item 1:1 returning an array of equal length; `filter()` selects items based on a boolean condition; `reduce()` accumulates elements into a single calculated result.",
      interviewSpeech: "`map()`, `filter()`, and `reduce()` are the core higher-order array methods representing functional programming paradigms in JavaScript. All three are non-mutating—they do not alter the source array. `map()` applies a transformation callback to each element, producing a brand-new array of identical length. `filter()` tests each item against a predicate returning true or false, yielding a new array with only matching items (length ≤ original). `reduce()` is the most flexible: it iterates through the array while maintaining an 'accumulator' value across iterations, folding the array into any arbitrary output—such as a single sum, an aggregated object, a histogram, or a grouped dictionary. Specifying the initial value in `reduce` is critical to prevent runtime crashes on empty arrays.",
      deepDive: [
        "**Array Output Dimension**: `map()` output length == input length. `filter()` output length <= input length. `reduce()` produces any single value (primitive, object, array, or map).",
        "**Purity & Immutability**: None of the three methods mutate the original array; they create new memory structures, ideal for predictable state management.",
        "**Initial Value Rule for reduce()**: If `initialValue` is provided, `accumulator` starts with that value and the loop starts at index 0. If omitted, `accumulator` takes `array[0]` and iteration starts at index 1. Calling `[].reduce(...)` without an initial value throws `TypeError: Reduce of empty array with no initial value`.",
        "**Performance & Method Chaining**: While chaining `.filter().map()` is readable, it iterates over the array twice. For massive datasets, a single `.reduce()` or `for...of` loop avoids multiple intermediate array allocations."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "map(), filter(), and reduce() in Action",
        code: "const products = [\n  { id: 1, name: \"Laptop\", price: 1000, inStock: true },\n  { id: 2, name: \"Mouse\", price: 25, inStock: false },\n  { id: 3, name: \"Keyboard\", price: 75, inStock: true }\n];\n\n// 1. map(): Transform items 1:1 -> array of strings\nconst names = products.map(p => p.name);\nconsole.log(names); // [\"Laptop\", \"Mouse\", \"Keyboard\"]\n\n// 2. filter(): Select matching items -> subset array\nconst available = products.filter(p => p.inStock);\nconsole.log(available); // Laptop and Keyboard\n\n// 3. reduce(): Accumulate into a single aggregate (Total Value)\nconst totalCartValue = products\n  .filter(p => p.inStock)\n  .reduce((total, p) => total + p.price, 0);\nconsole.log(totalCartValue); // 1075\n\n// 4. reduce(): Building a lookup map { id: product }\nconst productMap = products.reduce((acc, p) => {\n  acc[p.id] = p.name;\n  return acc;\n}, {});"
      },
      commonMistakes: [
        "Using `map()` when not returning any value (e.g., executing side-effects like logging or DOM manipulation). Use `forEach()` or `for...of` instead.",
        "Forgetting to pass an `initialValue` to `reduce()`, which will cause a fatal runtime crash if the array is empty."
      ],
      proTips: [
        "State in the interview: 'Always supply the initial accumulator value in `reduce()`, not only for defensive coding against empty arrays, but also to guarantee type predictability.'"
      ]
    },
    bangla: {
      quickAnswer: "`map()` প্রতিটি এলিমেন্টকে রূপান্তর করে সমান দৈর্ঘ্যের নতুন array দেয়; `filter()` শর্ত অনুযায়ী বেছে নিয়ে উপসেট array তৈরি করে; আর `reduce()` সমস্ত উপাদান প্রসেস করে একটি চূড়ান্ত মান (বা অবজেক্ট/ম্যাপ) প্রদান করে।",
      interviewSpeech: "`map()`, `filter()` এবং `reduce()` হলো জাভাস্ক্রিপ্টের ফাংশনাল প্রোগ্রামিংয়ের ৩টি স্তম্ভ। এদের কোনোটিই মূল array-কে পরিবর্তন (mutate) করে না। `map()`-এর কাজ হলো প্রতিটি এলিমেন্টের ওপর নির্দিষ্ট কলব্যাক ফাংশন চালিয়ে ঠিক একই সাইজের একটি নতুন ট্রান্সফর্মড array রিটার্ন করা। `filter()` একটি ট্রু/ফলস কন্ডিশনের ওপর ভিত্তি করে শর্ত পূরণকারী উপাদানগুলোকে নিয়ে একটি নতুন উপসেট array দেয় (যার লেন্থ মূল অ্যারের সমান বা ছোট হতে পারে)। আর `reduce()` হলো সবচেয়ে শক্তিশালী ও বহুমুখী মেথড; এটি একটি অ্যাকুমুলেটর (accumulator)-এর সাহায্যে পুরো array-কে ভাঁজ করে একটি একক সংখ্যা, স্ট্রিং, অবজেক্ট বা গ্রুপিং তৈরি করে। `reduce`-এ সর্বদা ইনিশিয়াল ভ্যালু পাস করা উত্তম যাতে ফাঁকা array থাকলে কোড ক্র্যাশ না করে।",
      deepDive: [
        "**আউটপুট ডাইমেনশন**: `map()` সর্বদা সমান সংখ্যক উপাদান দেয়; `filter()` শূন্য থেকে শুরু করে মূল লেন্থ পর্যন্ত দিতে পারে; `reduce()` যেকোনো সিঙ্গেল ডেটাটাইপ (Primitive, Object, Array) দিতে পারে।",
        "**ইমিউটেবিলিটি**: ৩টি মেথডই অরিজিনাল array অপরিবর্তিত রেখে সম্পূর্ণ নতুন রেফারেন্স তৈরি করে।",
        "**ইনিশিয়াল ভ্যালুর গুরুত্ব**: `reduce`-এ দ্বিতীয় আর্গুমেন্ট (ইনিশিয়াল ভ্যালু) না দিলে প্রথম এলিমেন্টটি অ্যাকুমুলেটর হয়ে যায় এবং ইনডেক্স ১ থেকে লুপ শুরু হয়; তবে ফাঁকা array হলে `TypeError` দেয়।",
        "**চেইনিং বনাম পারফরম্যান্স**: `.filter().map()` লেখা কোড পড়তে সুন্দর হলেও এটি দুইবার লুপ চালায়। বিশাল ডেটাসেটের জন্য একটি সিঙ্গেল `reduce()` বেশি পারফরম্যান্ট।"
      ],
      commonMistakes: [
        "কোনো ভ্যালু রিটার্ন না করে কেবল সাইড-ইফেক্ট (যেমন console.log বা API কল) চালানোর জন্য `map()` ব্যবহার করা; এমন ক্ষেত্রে `forEach()` বা `for...of` ব্যবহার করা উচিত।",
        "`reduce()`-এ ইনিশিয়াল ভ্যালু না দেওয়া, যার ফলে ডেটা খালি থাকলে অ্যাপ ক্র্যাশ করে।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'রিটার্ন ভ্যালু ব্যবহার না করলে কখনই `map` ব্যবহার করা উচিত নয়, কারণ এটি অকারণে মেমরিতে নতুন array বানিয়ে আবর্জনা বাড়ায়।'"
      ]
    }
  },
  {
    id: "pa-d2-q19-for-in-vs-for-of",
    questionNumber: 19,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is the difference between for...in and for...of loops?",
    banglaQuestion: "for...in এবং for...of লুপের মধ্যে পার্থক্য কী?",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["JavaScript", "Loops", "Iteration", "Objects", "Iterables"],
    english: {
      quickAnswer: "`for...in` iterates over all enumerable property keys of an object (including its prototype chain); `for...of` iterates over the values of an iterable collection (like Array, Map, Set, String).",
      interviewSpeech: "The primary distinction between `for...in` and `for...of` lies in what they iterate over and what data structures they support. `for...in` is meant for object inspection: it loops over all enumerable properties (keys) of an object. Crucially, it does not stop at the object itself—it walks up the prototype chain and includes inherited enumerable properties, and the order of iteration is not strictly guaranteed. In contrast, `for...of` was introduced in ES6 specifically for iterable collections—data structures that implement the `Symbol.iterator` protocol, such as Arrays, Strings, Sets, Maps, and NodeLists. It iterates directly over the collection's values. Plain objects do not implement `Symbol.iterator` by default, so attempting `for...of` on a plain object throws a TypeError unless you iterate over `Object.entries(obj)`.",
      deepDive: [
        "**Iteration Targets**: `for...in` yields **keys / properties** (strings). `for...of` yields **values**.",
        "**Prototype Traversal Hazard**: `for...in` traverses prototype properties. If libraries modify `Array.prototype` or `Object.prototype`, those polluted methods will show up unless filtered with `Object.hasOwn(obj, key)`.",
        "**Array Anti-pattern**: Using `for...in` on arrays is considered an anti-pattern because array indexes are returned as strings (e.g. `'0'`, `'1'`), custom array properties are included, and index order is not guaranteed.",
        "**Iterable Protocol (`Symbol.iterator`)**: `for...of` relies under the hood on calling `[Symbol.iterator]()` to obtain an iterator with `.next()`. Generators can also be consumed seamlessly with `for...of`."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "for...in vs for...of Contrast",
        code: "const colors = [\"red\", \"green\", \"blue\"];\ncolors.theme = \"dark\"; // Custom property added to array\n\n// 1. for...in iterates over KEYS (strings) and includes custom properties:\nfor (const key in colors) {\n  console.log(key); // \"0\", \"1\", \"2\", \"theme\"\n}\n\n// 2. for...of iterates over VALUES of iterables only:\nfor (const val of colors) {\n  console.log(val); // \"red\", \"green\", \"blue\"\n}\n\n// 3. Iterating plain objects with for...of:\nconst user = { id: 1, name: \"Alex\" };\n// for (const item of user) {} // TypeError: user is not iterable!\nfor (const [key, value] of Object.entries(user)) {\n  console.log(`${key}: ${value}`); // id: 1, name: Alex\n}"
      },
      commonMistakes: [
        "Using `for...in` on arrays and assuming the loop counter is an integer (it is a string, so `index + 1` does string concatenation: `'0' + 1 = '01'`).",
        "Attempting to use `for...of` directly on a plain object without converting it via `Object.keys()`, `Object.values()`, or `Object.entries()`."
      ],
      proTips: [
        "Mnemonic rule: '`for...in` is for Object **IN**dexes/Keys; `for...of` is for Collection **OF** Values.'"
      ]
    },
    bangla: {
      quickAnswer: "`for...in` অবজেক্টের সমস্ত এনিউমারেবল প্রোপার্টি কী (Key) দিয়ে লুপ চালায় (এমনকি প্রোটোটাইপ চেইনও); আর `for...of` যেকোনো ইটারেবল কালেকশনের (Array, Set, Map, String) ভেতরের মান (Value) নিয়ে লুপ করে।",
      interviewSpeech: "`for...in` এবং `for...of`-এর মূল পার্থক্য হলো তারা কিসের ওপর ভিত্তি করে ইটারেট করে। `for...in` তৈরি করা হয়েছে মূলত অবজেক্টের জন্য। এটি অবজেক্টের প্রতিটি এনিউমারেবল প্রোপার্টির কী (key বা নাম) ধরে লুপ চালায়। এর সবচেয়ে বড় ঝুঁকি হলো এটি অবজেক্টের নিজস্ব প্রোপার্টির পাশাপাশি তার প্রোটোটাইপ চেইন থেকেও ইনহেরিটেড প্রোপার্টিগুলোকে নিয়ে আসে। অপরদিকে ES6-এ আসা `for...of` তৈরি হয়েছে Iterable কালেকশনগুলোর জন্য (যেগুলোতে `Symbol.iterator` ইমপ্লিমেন্ট করা আছে, যেমন Array, Map, Set, String)। এটি সরাসরি উপাদানগুলোর মান (values) নিয়ে কাজ করে। সাধারণ অবজেক্ট ডিফল্টভাবে ইটারেবল নয়, তাই অবজেক্টে `for...of` চালাতে হলে `Object.entries(obj)` ব্যবহার করতে হয়।",
      deepDive: [
        "**টার্গেট পার্থক্য**: `for...in` দেয় **কী/ইনডেক্স** (স্ট্রিং হিসেবে); `for...of` দেয় সরাসরি **এলিমেন্টের মান**।",
        "**প্রোটোটাইপ দূষণ**: `for...in` প্রোটোটাইপ চেইনে থাকা মেথডগুলোও তুলে আনে। তাই এটি ব্যবহার করলে `Object.hasOwn(obj, key)` দিয়ে ফিল্টার করা আবশ্যক।",
        "**অ্যারেতে for...in না চালানোর কারণ**: অ্যারেতে `for...in` চালালে ইনডেক্সগুলো স্ট্রিং হিসেবে আসে (`'0'`, `'1'`), ফলে `index + 1` করলে গাণিতিক যোগ না হয়ে কনক্যাটেনেশন (`'01'`) হয়ে যায়।",
        "**সিম্বল ইটারেটর**: `for...of` ব্যাকগ্রাউন্ডে অবজেক্টের `[Symbol.iterator]` মেথড কল করে এবং `break` বা `return` স্টেটমেন্ট সুন্দরভাবে সমর্থন করে।"
      ],
      commonMistakes: [
        "Array-তে `for...in` চালানো। এটি ভুলবশত কাস্টম প্রোপার্টি বা প্রোটোটাইপ মেথডও লুপের ভেতর ঢুকিয়ে ফেলে।",
        "সাধারণ অবজেক্টে সরাসরি `for...of` চালানো এবং `TypeError: obj is not iterable` এরর পাওয়া।"
      ],
      proTips: [
        "মনে রাখার সহজ কৌশল: 'for...in দিয়ে পাওয়া যায় ক**ইন** (Keys/Indexes); আর for...of দিয়ে পাওয়া যায় অবজেক্ট বা অ্যারের নিজস্ব ভ্যালু (Values)।'"
      ]
    }
  },
  {
    id: "pa-d2-q20-template-literals",
    questionNumber: 20,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What are template literals and tagged templates?",
    banglaQuestion: "Template Literals এবং Tagged Templates কী? এরা কীভাবে কাজ করে?",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["JavaScript", "ES6", "Template Literals", "Tagged Templates", "Strings"],
    english: {
      quickAnswer: "Template literals are backtick-delimited strings allowing interpolation (`${expr}`) and multiline text. Tagged templates allow prefixing a function to parse the template string and its expressions customly.",
      interviewSpeech: "Template literals, introduced in ES6, replace cumbersome string concatenation with backtick delimiters (`` ` ``). They offer native multiline formatting and string interpolation via `${expression}` placeholders, which evaluate any valid JavaScript expression inline. Beyond basic template literals, JavaScript provides Tagged Templates—an advanced feature where a function 'tag' precedes the template string without parentheses: `tag`Hello ${name}``. The tag function receives the static string tokens as an array for its first parameter, followed by the evaluated interpolation expressions as rest arguments. Tagged templates power popular industry tools like styled-components in React (`styled.div\`...\``), GraphQL query parsers (`gql\`...\``), and SQL query sanitizers to prevent injection attacks.",
      deepDive: [
        "**Tag Function Signature**: `function tag(strings, ...values)` where `strings` is a frozen array of string chunks between expressions, and `values` contains the evaluated expressions.",
        "**Raw Strings (`strings.raw`)**: The `strings` object has a `.raw` property allowing access to strings exactly as written, without interpreting escape characters (e.g. `\\n` remains literal characters `\\` and `n`).",
        "**Security & Sanitization**: Tagged templates inspect dynamic inputs *before* string construction, allowing automatic HTML entity escaping (preventing XSS) or parameterized database queries (preventing SQL Injection).",
        "**DSL Creation**: They allow creating domain-specific mini-languages inside JavaScript, such as CSS-in-JS (Emotion, styled-components)."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Template Literals and Custom Tagged Template Sanitizer",
        code: "// 1. Standard Template Literal (Multiline & Interpolation)\nconst user = \"Rahim\";\nconst score = 95;\nconst summary = `Candidate: ${user}\nStatus: ${score >= 80 ? \"Passed\" : \"Failed\"}`;\nconsole.log(summary);\n\n// 2. Advanced: Tagged Template for XSS Sanitization\nfunction sanitize(strings, ...values) {\n  return strings.reduce((acc, str, i) => {\n    const val = values[i] !== undefined ? String(values[i]) : \"\";\n    const clean = val.replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\");\n    return acc + str + clean;\n  }, \"\");\n}\n\nconst maliciousInput = \"<script>alert('pwned')</script>\";\nconst safeHTML = sanitize`<div>User bio: ${maliciousInput}</div>`;\nconsole.log(safeHTML);\n// Output: <div>User bio: &lt;script&gt;alert('pwned')&lt;/script&gt;</div>"
      },
      commonMistakes: [
        "Trying to execute tagged template functions with parentheses like `tag(...)` instead of prefixing: `tag\`...\``.",
        "Forgetting that `strings` array always has a length of `values.length + 1`, even when the template starts or ends with an expression."
      ],
      proTips: [
        "Mention real-world production libraries: 'Tagged templates are the architectural foundation of `styled-components` in React, Apollo's `gql`, and `sql` template tag libraries for parameterized database safety.'"
      ]
    },
    bangla: {
      quickAnswer: "Template Literals হলো ব্যাকটিক (`` ` ``) দিয়ে তৈরি স্ট্রিং যা মাল্টি-লাইন এবং ভ্যারিয়েবল ইন্টারপোলেশন (`${}`) সমর্থন করে; আর Tagged Templates হলো একটি বিশেষ ফাংশন যা টেমপ্লেট স্ট্রিংকে কাস্টমভাবে পার্স ও স্যানিটাইজ করতে ব্যবহৃত হয়।",
      interviewSpeech: "Template Literals হলো ES6-এর একটি দারুণ ফিচার যা ব্যাকটিক (`` ` ``) চিহ্নের মাধ্যমে লেখা হয়। এতে পুরনো যুগের প্লাস (`+`) দিয়ে স্ট্রিং জোড়া লাগানোর ঝামেলা দূর হয়েছে; খুব সহজে `${expression}` দিয়ে যেকোনো ভেরিয়েবল বা লজিক স্ট্রিংয়ের ভেতরে বসিয়ে দেওয়া যায় এবং কোনো `\\n` ছাড়াই সরাসরি মাল্টি-লাইন টেক্সট লেখা যায়। আর Tagged Templates হলো এর চেয়েও শক্তিশালী একটি মেকানিজম—যেখানে টেমপ্লেট লিটারেলের ঠিক আগে একটি ফাংশনের নাম বসিয়ে দেওয়া হয়, যেমন `myTag\`Hello ${name}\``। এই ফাংশনটি প্রথম আর্গুমেন্ট হিসেবে স্ট্যাটিক স্ট্রিংগুলোর একটি অ্যারে পায় এবং পরবর্তী আর্গুমেন্ট হিসেবে ডায়নামিক মানগুলো পায়। এটি মূলত XSS অ্যাটাক ঠেকাতে HTML স্যানিটাইজেশনে, SQL Injection ঠেকাতে এবং রিঅ্যাক্টের `styled-components` বা GraphQL-এর `gql` তৈরিতে ইন্টারনালি ব্যবহৃত হয়।",
      deepDive: [
        "**ফাংশন সিগনেচার**: `function myTag(strings, ...values)`—এখানে `strings` অ্যারের লেন্থ সর্বদা `values` অ্যারের চেয়ে ১ বেশি হয়।",
        "**র স্ট্রিং এক্সেস (`strings.raw`)**: `strings.raw` প্রোপার্টির মাধ্যমে এসকেপ ক্যারেক্টার (`\\n`, `\\t`) ইন্টারপ্রেট না করে অবিকল যেভাবে লেখা হয়েছে সেভাবে পাওয়া যায়।",
        "**নিরাপত্তা ও স্যানিটাইজেশন**: ডেটাবেজ কুয়েরি বা HTML রেন্ডার করার আগে ইউজারের আনট্রাস্টেড ইনপুট ক্লিন করার জন্য ট্যাগড টেমপ্লেট একটি আদর্শ প্যাটার্ন।",
        "**লাইব্রেরির বাস্তব উদাহরণ**: Styled Components (`styled.div\`background: red\``) এবং Apollo Client-এর `gql` কুয়েরি পার্সার সম্পূর্ণ ট্যাগড টেমপ্লেটের ওপর নির্মিত।"
      ],
      commonMistakes: [
        "ট্যাগড টেমপ্লেট কল করার সময় সাধারণ ফাংশনের মতো ব্র্যাকেট `myTag(...)` দিয়ে ফেলা; এর সঠিক ব্যবহার হলো সরাসরি `myTag\`...\``।",
        "ভুলে যাওয়া যে `${}` দিয়ে যেকোনো ভ্যালিড জাভাস্ক্রিপ্ট টারনারি বা ফাংশন কলও চালানো সম্ভব।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'React-এর styled-components এবং Apollo GraphQL-এর `gql` মূলত ট্যাগড টেমপ্লেটেরই ব্যবহারিক রূপ।'"
      ]
    }
  },
  {
    id: "pa-d2-q21-event-loop",
    questionNumber: 21,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is the event loop in JavaScript?",
    banglaQuestion: "JavaScript-এ Event Loop কী এবং এটি কীভাবে কাজ করে?",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["JavaScript", "Event Loop", "Asynchronous", "Microtasks", "Macrotasks", "Call Stack"],
    english: {
      quickAnswer: "The Event Loop is JavaScript's coordination engine that constantly monitors the Call Stack and Task Queues, pushing queued asynchronous callbacks to the stack when it becomes empty.",
      interviewSpeech: "JavaScript is inherently single-threaded, with a single Call Stack executing one operation at a time. The Event Loop is the architectural mechanism that enables JavaScript's non-blocking, asynchronous behavior. It operates in tandem with the Call Stack, Web APIs (or Node.js C++ bindings), the Microtask Queue, and the Macrotask (Callback) Queue. When asynchronous tasks like network calls, timers, or DOM events are invoked, their execution is delegated to browser background threads. Once finished, their callback handlers are queued. The Event Loop continually monitors the Call Stack: as soon as the stack is completely empty, it first exhausts ALL pending tasks in the Microtask Queue (Promise handlers, `queueMicrotask`, `process.nextTick`). Only when the microtask queue is entirely clear does it execute the next Macrotask (`setTimeout`, `setInterval`, I/O), followed by rendering updates.",
      deepDive: [
        "**Microtask Priority**: The Microtask Queue has absolute priority over the Macrotask Queue. Microtask callbacks can enqueue further microtasks, causing 'Microtask Starvation' where macrotasks and browser UI renders are starved/blocked.",
        "**Microtasks vs Macrotasks**: Microtasks = `Promise.then/catch/finally`, `queueMicrotask()`, `MutationObserver`, `process.nextTick` (Node). Macrotasks = `setTimeout`, `setInterval`, `setImmediate` (Node), I/O operations, UI events.",
        "**Browser Rendering Phase**: Browsers typically attempt to run screen repaints (~60fps / every 16.6ms) right after emptying the microtask queue and before the next macrotask.",
        "**Execution Flow Hierarchy**: 1) Run current synchronous script on Call Stack -> 2) Drain all Microtasks -> 3) Render UI (if needed) -> 4) Dequeue 1 Macrotask -> Repeat."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Event Loop Execution Order Prediction",
        code: "console.log(\"1. Start (Sync)\");\n\nsetTimeout(() => {\n  console.log(\"4. setTimeout Callback (Macrotask)\");\n}, 0);\n\nPromise.resolve()\n  .then(() => {\n    console.log(\"2. Promise Then (Microtask 1)\");\n  })\n  .then(() => {\n    console.log(\"3. Promise Chain (Microtask 2)\");\n  });\n\nconsole.log(\"End (Sync)\");\n\n// EXACT OUTPUT ORDER:\n// 1. Start (Sync)\n// End (Sync)\n// 2. Promise Then (Microtask 1)\n// 3. Promise Chain (Microtask 2)\n// 4. setTimeout Callback (Macrotask)"
      },
      commonMistakes: [
        "Believing `setTimeout(fn, 0)` executes immediately (it must wait for the call stack to clear AND all pending microtasks to drain).",
        "Assuming JavaScript is multi-threaded because of asynchronous APIs (JS engine execution remains strictly single-threaded; Web APIs handle background work)."
      ],
      proTips: [
        "Give the golden interview formula: 'Synchronous Call Stack first, then drain the ENTIRE Microtask Queue, perform UI rendering checks, then pick ONE Macrotask from the task queue, and loop.'"
      ]
    },
    bangla: {
      quickAnswer: "Event Loop হলো জাভাস্ক্রিপ্ট রানটাইমের এমন একটি মেকানিজম যা কল স্ট্যাক (Call Stack) খালি হওয়া মাত্রই মাইক্রোটাস্ক ও ম্যাক্রোটাস্ক কিউ থেকে অ্যাসিনক্রোনাস কলব্যাক এনে স্ট্যাকে এক্সিকিউট করে।",
      interviewSpeech: "জাভাস্ক্রিপ্ট মূলত একটি Single-threaded ভাষা, যার অর্থ এটি একবারে কেবল একটি কাজই করতে পারে। তবে Event Loop-এর কারণেই জাভাস্ক্রিপ্ট নন-ব্লকিং অ্যাসিনক্রোনাস আচরণ করতে সক্ষম হয়। এর পেছনে ৪টি প্রধান বিষয় কাজ করে: Call Stack, Web APIs (ব্রাউজার ব্যাকগ্রাউন্ড), Microtask Queue, এবং Macrotask Queue। যখন কোনো অ্যাসিঙ্ক কাজ (যেমন `setTimeout`, `fetch`, DOM ইভেন্ট) শুরু হয়, জাভাস্ক্রিপ্ট ইঞ্জিন তা ব্রাউজারের ব্যাকগ্রাউন্ডে পাঠিয়ে দেয় এবং স্ট্যাকের পরবর্তী সিনক্রোনাস কোড চালাতে থাকে। কাজ শেষ হলে তাদের কলব্যাকগুলো কিউ-তে এসে জমা হয়। ইভেন্ট লুপের একমাত্র কাজ হলো অবিরত চেক করা—কল স্ট্যাক কি সম্পূর্ণ খালি? স্ট্যাক খালি হওয়ামাত্রই সে প্রথমে Microtask Queue (প্রমিজ কলব্যাক, `queueMicrotask`)-এর সবগুলো কাজ এক নিমেষে শেষ করে। মাইক্রোটাস্ক কিউ শূন্য হলে সে একটি Macrotask (`setTimeout`, `setInterval`) তুলে নিয়ে স্ট্যাকে পুশ করে।",
      deepDive: [
        "**মাইক্রোটাস্কের সর্বোচ্চ অগ্রাধিকার**: Macrotask-এর তুলনায় Microtask-এর প্রায়োরিটি অসীম। মাইক্রোটাস্কের ভেতর থেকে নতুন মাইক্রোটাস্ক তৈরি হতে থাকলে ম্যাক্রোটাস্ক ও ব্রাউজারের ডিসপ্লে রেন্ডার পুরোপুরি আটকে যাবে (Microtask Starvation)।",
        "**টাস্কের শ্রেণিবিভাগ**: Microtasks = `Promise.then/catch/finally`, `queueMicrotask`, `process.nextTick` (Node)। Macrotasks = `setTimeout`, `setInterval`, `setImmediate`, DOM ইভেন্ট ও I/O।",
        "**UI রেন্ডারিং ফেজ**: ব্রাউজার মাইক্রোটাস্ক কিউ খালি হওয়ার পরপর এবং পরবর্তী ম্যাক্রোটাস্ক নেওয়ার ঠিক আগে স্ক্রিনের DOM রি-পেইন্ট ও রি-রেন্ডার সম্পন্ন করে।",
        "**এক্সিকিউশন অর্ডার**: ১) সিনক্রোনাস কোড শেষ হয় -> ২) সব মাইক্রোটাস্ক শেষ হয় -> ৩) ব্রাউজার রেন্ডার হয় -> ৪) একটি ম্যাক্রোটাস্ক রান হয় -> পুনরায় লুপ চলে।"
      ],
      commonMistakes: [
        "`setTimeout(..., 0)` মানে সাথে সাথে কোড চলবে মনে করা; এটি মূলত বর্তমান স্ট্যাক এবং মাইক্রোটাস্ক কিউ খালি না হওয়া পর্যন্ত অপেক্ষা করতে বাধ্য থাকে।",
        "জাভাস্ক্রিপ্টকে মাল্টি-থ্রেডেড ভাষা বলা। জাভাস্ক্রিপ্টের এক্সিকিউশন ইঞ্জিন একক থ্রেডেই চলে, ব্যাকগ্রাউন্ড কাজগুলো ব্রাউজার বা C++ থ্রেড পুল সামলায়।"
      ],
      proTips: [
        "ইন্টারভিউতে এক বাক্যে মেকানিজমটি স্পষ্ট করুন: 'কল স্ট্যাক খালি হলেই কেবল ইভেন্ট লুপ প্রথমে মাইক্রোটাস্ক কিউ সাফ করে, তারপর ম্যাক্রোটাস্ক কিউ থেকে একটি টাস্ক তোলে।'"
      ]
    }
  },
  {
    id: "pa-d2-q22-promises",
    questionNumber: 22,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "Explain how Promises work in JavaScript.",
    banglaQuestion: "JavaScript-এ Promise কীভাবে কাজ করে? এর বিভিন্ন স্টেট ব্যাখ্যা করুন।",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["JavaScript", "Promises", "Async", "ES6", "Microtasks"],
    english: {
      quickAnswer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation, existing in one of three states: pending, fulfilled, or rejected.",
      interviewSpeech: "A Promise in JavaScript serves as a proxy placeholder for a value that is not necessarily known when the promise is created. It transitions through three distinct lifecycle states: `pending` (initial state, neither resolved nor rejected), `fulfilled` (operation succeeded with a value), or `rejected` (operation failed with an error reason). Once a promise is either fulfilled or rejected, it is termed 'settled', and its state is strictly immutable—it can never change states again. Promises solve callback hell (pyramid of doom) by offering clean chainable methods: `.then()` for handling fulfilled values, `.catch()` for error propagation, and `.finally()` for cleanup logic. Every `.then()` automatically returns a brand new Promise, allowing linear sequential async workflows.",
      deepDive: [
        "**Synchronous Executor**: The executor function passed into `new Promise((resolve, reject) => { ... })` runs **immediately and synchronously**. Only the `.then()` and `.catch()` callbacks are deferred as asynchronous microtasks.",
        "**State Immutability**: Once resolved or rejected, subsequent calls to `resolve()` or `reject()` inside the same promise are completely ignored silently.",
        "**Promise Combinators**: `Promise.all` (fails fast on any rejection), `Promise.allSettled` (waits for all regardless of outcome), `Promise.race` (first to settle wins), and `Promise.any` (first fulfilled wins; aggregates errors if all fail).",
        "**Error Bubbling**: Unhandled rejections bubble down the chain until encountering the first `.catch()`, eliminating the need to check errors at every individual async step."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Promise Lifecycle, Chaining, and Error Handling",
        code: "function fetchUserData(userId) {\n  return new Promise((resolve, reject) => {\n    // Executor runs synchronously!\n    if (!userId) {\n      reject(new Error(\"Invalid User ID\"));\n      return;\n    }\n    setTimeout(() => {\n      resolve({ id: userId, username: \"tech_lead\" });\n    }, 100);\n  });\n}\n\n// Chaining promises cleanly:\nfetchUserData(42)\n  .then(user => {\n    console.log(\"User fetched:\", user.username);\n    return user.id; // automatically wrapped in Promise.resolve(42)\n  })\n  .then(id => {\n    console.log(\"Fetching permissions for ID:\", id);\n  })\n  .catch(err => {\n    console.error(\"Pipeline failed:\", err.message);\n  })\n  .finally(() => {\n    console.log(\"Async operation finished.\");\n  });"
      },
      commonMistakes: [
        "Forgetting to `return` inside a `.then()` handler, causing the next step in the chain to receive `undefined`.",
        "Nesting promises inside `.then()` callbacks, recreating the exact same 'callback hell' that promises were designed to eliminate."
      ],
      proTips: [
        "Highlight `Promise.allSettled()`: 'When orchestrating multiple concurrent API calls where partial failures shouldn't abort the entire page, prefer `Promise.allSettled()` over `Promise.all()`.'"
      ]
    },
    bangla: {
      quickAnswer: "Promise হলো একটি অবজেক্ট যা ভবিষ্যতে কোনো একটি অ্যাসিঙ্ক অপারেশনের ফলাফল (সফল বা ব্যর্থ) কেমন হবে তা রিপ্রেজেন্ট করে। এটি ৩টি স্টেটে থাকতে পারে: pending, fulfilled, এবং rejected।",
      interviewSpeech: "জাভাস্ক্রিপ্টে Promise হলো এমন একটি পাত্র বা প্রতিশ্রুতি যা তাৎক্ষণিকভাবে মান দিতে না পারলেও ভবিষ্যতে একটি ফলাফল পাওয়ার নিশ্চয়তা দেয়। প্রমিজ মূলত ৩টি অবস্থার (States) মধ্য দিয়ে যায়: ১) `pending` (প্রাথমিক অবস্থা, কাজ এখনো চলছে), ২) `fulfilled` (অপারেশন সফল হয়েছে এবং মান পাওয়া গেছে), ৩) `rejected` (অপারেশন ব্যর্থ হয়েছে এবং এরর ঘটেছে)। প্রমিজ একবার settled (fulfilled বা rejected) হয়ে গেলে তার মান আর পরিবর্তন করা যায় না। প্রমিজের মূল সুবিধা হলো এটি জাভাস্ক্রিপ্টের কুখ্যাত 'Callback Hell' দূর করে। `.then()` দিয়ে ফলাফল প্রসেস করা যায়, `.catch()` দিয়ে পুরো পাইপলাইনের এরর হ্যান্ডেল করা যায় এবং `.finally()` দিয়ে কাজ শেষ হওয়ার পর ক্লিনআপ সম্পন্ন করা যায়। প্রতিটি `.then()` স্বয়ংক্রিয়ভাবে একটি নতুন প্রমিজ তৈরি করে ফলে চেইনিং করা সহজ হয়।",
      deepDive: [
        "**সিনক্রোনাস এক্সিকিউটর**: `new Promise((resolve, reject) => { ... })`-এর ভেতরের কোড কিন্তু সরাসরি সিনক্রোনাসলি রান হয়। কেবল `.then()` ও `.catch()`-এর কলব্যাকগুলো মাইক্রোটাস্ক কিউ-তে জমা হয়।",
        "**একবারই স্টেট পরিবর্তন**: কোনো প্রমিজে একবার `resolve()` হয়ে গেলে পরবর্তীতে আবার `reject()` বা `resolve()` কল করলেও তা আর কোনো প্রভাব ফেলবে না।",
        "**প্রমিজ কম্বিনেটর মেথডস**: `Promise.all` (যেকোনো একটি ফেইল করলে সাথে সাথে ফেইল), `Promise.allSettled` (সবগুলোর সফল বা ব্যর্থ হওয়া পর্যন্ত অপেক্ষা করে), `Promise.race` (সবার আগে যে সেটেল হয়), `Promise.any` (প্রথম সফল ফলাফলটি নেয়)।",
        "**এরর বাবিলিং**: চেইনের যেকোনো ধাপে এরর হলে তা সরাসরি নিচে থাকা `.catch()` ব্লকে চলে যায়, প্রতিটি ধাপে আলাদা হ্যান্ডলার লেখার প্রয়োজন হয় না।"
      ],
      commonMistakes: [
        "`.then()` ব্লকের ভেতরে কোনো মান `return` করতে ভুলে যাওয়া, যার ফলে চেইনের পরের ধাপটি `undefined` পায়।",
        "প্রমিজ চেইনিং না করে `.then()`-এর ভেতরে আবার নেস্টেড প্রমিজ তৈরি করে নতুন করে 'Promise Hell' সৃষ্টি করা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'একাধিক প্যারালাল API কলের ক্ষেত্রে একটি ফেইল করলে যদি পুরো পেজ বন্ধ করতে না চান, তবে `Promise.all`-এর চেয়ে `Promise.allSettled` ব্যবহার করা উত্তম।'"
      ]
    }
  },
  {
    id: "pa-d2-q23-async-await",
    questionNumber: 23,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is async/await and how does it improve upon Promises?",
    banglaQuestion: "async/await কী এবং এটি কীভাবে Promise-এর ব্যবহারকে সহজ করে?",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["JavaScript", "Async/Await", "Promises", "ES2017", "Error Handling"],
    english: {
      quickAnswer: "`async/await` is ES2017 syntactic sugar built on top of Promises and Generators, allowing asynchronous code to be written and read like synchronous code with native `try...catch` blocks.",
      interviewSpeech: "Introduced in ES2017, `async/await` makes asynchronous JavaScript significantly cleaner, more expressive, and readable. Marking a function with the `async` keyword does two things: it guarantees the function returns a Promise (wrapping non-promise returns with `Promise.resolve()`), and it allows the use of the `await` keyword inside its body. The `await` expression pauses the execution of the async function in a non-blocking fashion until the awaited Promise settles, unpacking its resolved value or throwing its rejection. It dramatically improves upon raw Promises by eliminating chaining boilerplate, allowing familiar `try...catch...finally` blocks for unified error handling, and preserving readable synchronous stack traces that make debugging straightforward.",
      deepDive: [
        "**Under the Hood (Generators + Promises)**: `async/await` compiles down to ES6 Generators combined with recursive Promise resolution (equivalent to the classic `co` library pattern).",
        "**Avoid the Async Waterfall**: Running `await` sequentially in a `for` loop or back-to-back when requests are independent creates unnecessary delays. Independent calls should be triggered concurrently with `Promise.all([fetchA(), fetchB()])`.",
        "**Top-Level Await**: Modern ES modules (ES2022+) support `await` at the top level of modules outside of any enclosing async function, facilitating runtime configuration imports and database handshakes.",
        "**Stack Trace Clarity**: With `.then()` chains, stack traces can be fragmented across microtask turns; `async/await` provides cleaner, recognizable call stacks in browser DevTools."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Raw Promise vs Async/Await & Parallel Optimization",
        code: "// 1. Modern Async/Await with clean try/catch:\nasync function loadDashboard(userId) {\n  try {\n    // Parallel execution instead of waterfall delay!\n    const userPromise = fetch(`/api/users/${userId}`).then(r => r.json());\n    const postsPromise = fetch(`/api/users/${userId}/posts`).then(r => r.json());\n\n    const [user, posts] = await Promise.all([userPromise, postsPromise]);\n    return { user, posts };\n  } catch (error) {\n    console.error(\"Dashboard fetch failed:\", error.message);\n    throw error; // Propagate or fallback\n  }\n}\n\n// 2. Async function always returns a Promise automatically:\nconst resultPromise = loadDashboard(101);"
      },
      commonMistakes: [
        "The Waterfall Anti-Pattern: writing `const a = await getA(); const b = await getB();` when `a` and `b` do not depend on each other.",
        "Using `async` in an `Array.prototype.forEach` callback and expecting it to wait (it fires all promises concurrently without awaiting them; use `for...of` instead)."
      ],
      proTips: [
        "Warn about array loops in interviews: '`forEach` is not async-aware; to await promises sequentially, use a standard `for...of` loop; to run them concurrently, use `Promise.all(arr.map(async fn))`.'"
      ]
    },
    bangla: {
      quickAnswer: "`async/await` হলো Promise-এর ওপর তৈরি ES2017-এর একটি সিনট্যাকটিক সুগার, যা অ্যাসিনক্রোনাস কোডকে সাধারণ সিনক্রোনাস কোডের মতো সহজে লেখার ও `try...catch` দিয়ে হ্যান্ডেল করার সুবিধা দেয়।",
      interviewSpeech: "ES2017-এ যুক্ত হওয়া `async/await` মূলত জাভাস্ক্রিপ্ট প্রমিজ কোডকে নাটকীয়ভাবে সহজ ও দৃষ্টিনন্দন করে তুলেছে। কোনো ফাংশনের আগে `async` কিওয়ার্ড দিলে দুটি বিষয় ঘটে: ১) ফাংশনটি স্বয়ংক্রিয়ভাবে একটি Promise রিটার্ন করে, এবং ২) ফাংশনটির ভেতরে `await` কিওয়ার্ড ব্যবহারের অনুমতি মেলে। `await` কিওয়ার্ড কোনো প্রমিজের সামনে বসলে সেটির রেজাল্ট না আসা পর্যন্ত ফাংশনের ভেতরের পরবর্তী লাইনের এক্সিকিউশনকে নন-ব্লকিংভাবে পজ (pause) করে রাখে। এর ফলে বড় সুবিধা হলো: লম্বা `.then().catch()` চেইনিংয়ের কোনো প্রয়োজন হয় না, কোড দেখতে সাধারণ সিনক্রোনাস কোডের মতো লিনিয়ার মনে হয়, এবং সাধারণ `try...catch` ব্লক ব্যবহার করে সিনক্রোনাস ও অ্যাসিনক্রোনাস সব ধরনের এরর একই জায়গায় নিখুঁতভাবে ধরা যায়।",
      deepDive: [
        "**অভ্যন্তরীণ মেকানিজম**: `async/await` মূলত ES6 Generator এবং প্রমিজের সমন্বয়ে তৈরি। ইঞ্জিন ব্যাকগ্রাউন্ডে জেনারেটরের `yield` মেকানিজম ব্যবহার করে ফাংশন রিজ্যুম করে।",
        "**অ্যাসিঙ্ক ওয়াটারফল ফাঁদ**: দুটি স্বাধীন API কল থাকলে একের পর এক `await` না করে `Promise.all([fetch1, fetch2])` দিয়ে প্যারালালি কল করা উচিত, নইলে অ্যাপ অকারণে স্লো হয়ে যায়।",
        "**টপ-লেভেল অ্যাওয়েট (Top-Level Await)**: আধুনিক ES মডিউলে কোনো `async` ফাংশনের মোড়ক ছাড়াই সরাসরি ফাইলের টপ লেভেলে `await` ব্যবহার করা যায়।",
        "**ডিবাগিং ও স্ট্যাক ট্রেস**: `.then()` চেইনের চেয়ে `async/await`-এ এরর হলে ব্রাউজার কনসোলে স্পষ্ট লাইন নম্বরসহ কল স্ট্যাক ট্রেস দেখা যায়।"
      ],
      commonMistakes: [
        "পরস্পর সম্পর্কহীন দুটি API কলকে ক্রমান্বয়ে `await callA()` তারপর `await callB()` করে সময় দ্বিগুণ নষ্ট করা (Waterfall issue)।",
        "`arr.forEach(async (item) => ...)` ব্যবহার করা—কারণ `forEach` অ্যাওয়েট মানে না; লুপে ধাপে ধাপে অ্যাওয়েট করতে হলে `for...of` ব্যবহার করতে হয়।"
      ],
      proTips: [
        "ইন্টারভিউতে মনে করিয়ে দিন: 'অ্যারেতে সিরিয়ালি কাজ করতে হলে `for...of` ব্যবহার করবেন, আর একসাথে প্যারালালি চালাতে চাইলে `Promise.all(items.map(fn))` ব্যবহার করবেন—`forEach` কখনোই ব্যবহার করবেন না।'"
      ]
    }
  },
  {
    id: "pa-d2-q24-call-apply-bind",
    questionNumber: 24,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is the difference between call(), apply(), and bind()?",
    banglaQuestion: "call(), apply(), এবং bind()-এর মধ্যে পার্থক্য কী এবং এদের কখন ব্যবহার করা হয়?",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["JavaScript", "this keyword", "call", "apply", "bind", "Functions"],
    english: {
      quickAnswer: "`call()` and `apply()` invoke a function immediately with a specified `this` context (differing only in argument format: comma-separated vs array); `bind()` returns a new function with `this` permanently bound for later execution.",
      interviewSpeech: "All three methods belong to `Function.prototype` and are used to explicitly control the execution context—meaning the `this` value—of a function. `call()` invokes the function immediately, accepting the `this` object as the first parameter followed by individual arguments passed with commas (`fn.call(ctx, arg1, arg2)`). `apply()` also invokes the function immediately with the provided `this`, but requires arguments to be packaged inside a single array or array-like structure (`fn.apply(ctx, [arg1, arg2])`). On the other hand, `bind()` does NOT invoke the function immediately. Instead, it returns an entirely new function with its `this` permanently locked to the provided object, enabling delayed invocation, partial application (currying), and event-handler context fixing in React or UI classes.",
      deepDive: [
        "**Immediate vs Deferred Execution**: `call` & `apply` execute instantly; `bind` generates a callable function reference for future invocation.",
        "**Argument Passing Mnemonic**: **C**all takes **C**ommas; **A**pply takes an **A**rray; **B**ind **B**ounds for later.",
        "**Arrow Function Immutability**: Neither `call`, `apply`, nor `bind` can override the `this` binding of an arrow function; arrow functions retain their lexical `this` permanently.",
        "**Hard Binding with bind()**: A function bound with `bind()` cannot have its `this` context modified by a subsequent `.call()` or another `.bind()`. Only the `new` operator can override a bound `this`."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Comparing call(), apply(), and bind()",
        code: "const trainer = {\n  name: \"Tanvir\",\n  introduce(skill, level) {\n    return `${this.name} specializes in ${skill} (${level})`;\n  }\n};\n\nconst student = { name: \"Sakib\" };\n\n// 1. call(): Immediate execution, comma-separated arguments\nconsole.log(trainer.introduce.call(student, \"React\", \"Advanced\"));\n// Output: Sakib specializes in React (Advanced)\n\n// 2. apply(): Immediate execution, array of arguments\nconsole.log(trainer.introduce.apply(student, [\"Node.js\", \"Intermediate\"]));\n// Output: Sakib specializes in Node.js (Intermediate)\n\n// 3. bind(): Returns a new bound function for later invocation\nconst sakibIntro = trainer.introduce.bind(student, \"TypeScript\");\nconsole.log(sakibIntro(\"Expert\"));\n// Output: Sakib specializes in TypeScript (Expert)"
      },
      commonMistakes: [
        "Expecting `bind()` to execute the function immediately instead of calling the returned function.",
        "Trying to use `call`, `apply`, or `bind` to change `this` inside an ES6 arrow function (arrow functions ignore explicit `this` binding entirely)."
      ],
      proTips: [
        "Remember the classic acronym: **C**all = **C**omma separated; **A**pply = **A**rray arguments; **B**ind = **B**uilds a new function."
      ]
    },
    bangla: {
      quickAnswer: "`call()` এবং `apply()` কোনো ফাংশনকে নির্দিষ্ট `this` কনটেক্সট দিয়ে সাথে সাথে এক্সিকিউট করে (পার্থক্য কেবল আর্গুমেন্ট পাস করায়: কমা বনাম অ্যারে); আর `bind()` সাথে সাথে রান না করে ভবিষ্যতে চালানোর জন্য পার্মানেন্ট `this` যুক্ত একটি নতুন ফাংশন রিটার্ন করে।",
      interviewSpeech: "`call()`, `apply()` এবং `bind()`—তিনটি মেথডই `Function.prototype`-এর অংশ এবং এদের মূল উদ্দেশ্য হলো কোনো ফাংশনের ভেতরের `this` কী হবে তা জোরপূর্বক (Explicitly) নির্ধারণ করে দেওয়া। `call()` ফাংশনটিকে সাথে সাথে রান করে দেয়; এর প্রথম আর্গুমেন্ট হিসেবে `this` অবজেক্ট দিতে হয় এবং বাকি আর্গুমেন্টগুলো কমা দিয়ে আলাদা করে দিতে হয় (`fn.call(obj, a, b)`)। `apply()`-ও সাথে সাথে ফাংশন রান করে, তবে এর বাকি আর্গুমেন্টগুলো কমার বদলে একটি Array-এর ভেতর পাস করতে হয় (`fn.apply(obj, [a, b])`)। অপরপক্ষে `bind()` ফাংশনটিকে সাথে সাথে রান করে না; এটি একটি ব্র্যান্ড নিউ ফাংশন তৈরি করে রিটার্ন করে যার ভেতরে `this` স্থায়ীভাবে ফিক্স করা থাকে। ফলে রিঅ্যাক্ট ইভেন্ট হ্যান্ডলার বা পরবর্তীতে যেকোনো সময় কল করার জন্য `bind()` আদর্শ।",
      deepDive: [
        "**তাত্ক্ষণিক বনাম ভবিষ্যতের ব্যবহার**: `call` ও `apply` সাথে সাথে রান হয়ে যায়; কিন্তু `bind` একটি নতুন ফাংশন রেফারেন্স দেয় যা পরে যেকোনো সময় কল করা যায়।",
        "**অ্যারো ফাংশনে অপ্রযোজ্য**: Arrow Function-এর ক্ষেত্রে `call`, `apply` বা `bind` দিয়ে `this` পরিবর্তন করা যায় না; তারা সর্বদা লেক্সিক্যাল `this` ধরে রাখে।",
        "**হার্ড বাইন্ডিং (Hard Binding)**: `bind()` দিয়ে একবার কোনো অবজেক্টের সাথে বাঁধলে পরবর্তীতে তাকে আর অন্য কোনো অবজেক্ট দিয়ে রি-বাইন্ড বা `.call()` করা যায় না (শুধুমাত্র `new` কনস্ট্রাক্টর কল ছাড়া)।",
        "**আর্গুমেন্ট মনে রাখার ট্রিক**: **C**all নেয় **C**omma; **A**pply নেয় **A**rray; **B**ind দেয় **B**ound ফাংশন।"
      ],
      commonMistakes: [
        "`bind()` কল করলেই ফাংশন রান হয়ে যাবে ভেবে আউটপুটের জন্য বসে থাকা (এটি ফাংশন রিটার্ন করে, রান করে না)।",
        "Arrow Function-এ `call` বা `apply` দিয়ে `this` বদলানোর চেষ্টা করে ব্যর্থ হওয়া।"
      ],
      proTips: [
        "ইন্টারভিউতে শর্টকাট টেকনিক বলুন: '**C**all = **C**ommas, **A**pply = **A**rray, **B**ind = **B**ound function for later.'"
      ]
    }
  },
  {
    id: "pa-d2-q25-prototypal-inheritance",
    questionNumber: 25,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is prototypal inheritance in JavaScript?",
    banglaQuestion: "JavaScript-এ Prototypal Inheritance কী এবং Prototype Chain কীভাবে কাজ করে?",
    difficulty: "Advanced",
    importance: "High",
    tags: ["JavaScript", "Prototypes", "OOP", "Inheritance", "Object.create"],
    english: {
      quickAnswer: "Prototypal inheritance is JavaScript's object model where objects directly link to and inherit properties/methods from other prototype objects via an internal `[[Prototype]]` chain.",
      interviewSpeech: "Unlike classical object-oriented languages like Java or C++ which use class blueprints to instantiate objects, JavaScript uses prototypal inheritance—an object-based delegation model. Every JavaScript object possesses an internal hidden property called `[[Prototype]]` (historically exposed via `__proto__`, and formally accessed via `Object.getPrototypeOf()`). When accessing a property or method on an object, the JavaScript engine first checks the object's own direct properties. If not found, it traverses up the prototype chain to the linked prototype object, continuing until it either finds the property or reaches the end of the chain, which is `Object.prototype.[[Prototype]] === null` (returning `undefined`). ES6 `class` syntax is merely syntactic sugar layered over this underlying prototypal delegation mechanism.",
      deepDive: [
        "**`prototype` vs `[[Prototype]]`**: Functions in JS have a `.prototype` property that defines what becomes the `[[Prototype]]` of any instances created with `new Func()`. Instances have `[[Prototype]]` pointing back to that prototype.",
        "**Memory Efficiency via Delegation**: Methods declared on a prototype (e.g. `User.prototype.login = ...`) are instantiated in memory exactly once and shared by all instances, avoiding method duplication in every object.",
        "**Property Shadowing**: If an object defines a property with the identical name as one on its prototype, the object's 'own' property shadows/overrides the prototype's property for that instance without modifying the prototype.",
        "**`Object.create(proto)`**: Standard way to create a clean object linked directly to a prototype without running a constructor. `Object.create(null)` creates an object completely devoid of prototypes (no `toString`, no `hasOwnProperty`), ideal for secure dictionary lookups."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Prototypal Inheritance & Chain Lookup",
        code: "// 1. Base constructor function\nfunction Vehicle(type) {\n  this.type = type;\n}\n\n// Shared method stored in prototype (allocated once in memory)\nVehicle.prototype.start = function() {\n  return `${this.type} engine started!`;\n};\n\n// 2. Prototypal linking\nfunction Car(make) {\n  Vehicle.call(this, \"Car\"); // Super constructor call\n  this.make = make;\n}\n// Linking prototypes cleanly:\nCar.prototype = Object.create(Vehicle.prototype);\nCar.prototype.constructor = Car;\n\nCar.prototype.honk = function() {\n  return `${this.make} says Beep!`;\n};\n\nconst myTesla = new Car(\"Tesla\");\nconsole.log(myTesla.honk());  // \"Tesla says Beep!\" (Found on Car.prototype)\nconsole.log(myTesla.start()); // \"Car engine started!\" (Traversed up to Vehicle.prototype)\nconsole.log(myTesla.toString()); // Traversed up to Object.prototype"
      },
      commonMistakes: [
        "Confusing `func.prototype` (a property on functions used for new instances) with `obj.__proto__` (the internal prototype link of an instance).",
        "Modifying native built-in prototypes like `Array.prototype` or `Object.prototype` (known as 'Monkey Patching'), which causes catastrophic bugs and library conflicts."
      ],
      proTips: [
        "Clarify in the interview: 'ES6 `class` and `extends` are syntactic sugar over prototypal delegation. JavaScript does not copy class methods into instances; it delegates lookups along the prototype chain at runtime.'"
      ]
    },
    bangla: {
      quickAnswer: "Prototypal Inheritance হলো জাভাস্ক্রিপ্টের এমন একটি অবজেক্ট মডেল যেখানে একটি অবজেক্ট সরাসরি অন্য একটি অবজেক্টের সাথে `[[Prototype]]` লিংকের মাধ্যমে যুক্ত হয়ে তার প্রোপার্টি ও মেথড অ্যাক্সেস করতে পারে।",
      interviewSpeech: "জাভা বা C++-এর মতো ক্লাসিক্যাল ভাষার মতো জাভাস্ক্রিপ্টে ক্লাস থেকে অবজেক্ট তৈরি হয় না; জাভাস্ক্রিপ্ট মূলত Prototypal Delegation মডেল মেনে চলে। জাভাস্ক্রিপ্টের প্রতিটি অবজেক্টের ভেতরে `[[Prototype]]` নামক একটি হিডেন লিংক থাকে (যা কোডে `__proto__` বা `Object.getPrototypeOf()` দিয়ে দেখা যায়)। যখন আমরা কোনো অবজেক্টের কোনো প্রোপার্টি বা মেথড খুঁজি, জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমে অবজেক্টের নিজস্ব মেমরিতে খোঁজে। সেখানে না পেলে সে প্রোটোটাইপ চেইন ধরে তার প্যারেন্ট অবজেক্টে খোঁজে। এভাবে খুঁজতে খুঁজতে সে একদম শীর্ষে থাকা `Object.prototype`-এ যায়, যার প্রোটোটাইপ হলো `null`। সেখানেও না পেলে `undefined` রিটার্ন করে। ES6-এর যে `class` আমরা ব্যবহার করি, তা মূলত এই Prototypal Inheritance-এর ওপরই একটি আধুনিক সিনট্যাক্টিক সুগার মাত্র।",
      deepDive: [
        "**`prototype` বনাম `[[Prototype]]`**: সাধারণ ফাংশনের একটি নিজস্ব `.prototype` প্রোপার্টি থাকে যা `new` দিয়ে অবজেক্ট বানালে সন্তানের লিংক হিসেবে যুক্ত হয়; আর যেকোনো অবজেক্টের নিজস্ব ইন্টারনাল লিংক হলো `[[Prototype]]`।",
        "**মেমোরি সেভিং সুবিধা**: মেথডগুলো প্রোটোটাইপে ডিফাইন করলে (যেমন `User.prototype.login`) ১০০০টি অবজেক্ট তৈরি করলেও মেমরিতে মেথডটি কেবল একবারই স্থান নেয়, ফলে মেমোরি সাশ্রয় হয়।",
        "**শ্যাডোয়িং (Property Shadowing)**: প্রোটোটাইপে থাকা কোনো মেথডের একই নামে অবজেক্টে নিজস্ব মেথড বানালে নিজস্বটি অগ্রাধিকার পায়, যাকে শ্যাডোয়িং বলে।",
        "**`Object.create(null)`**: প্রোটোটাইপ ছাড়া একদম নিখাদ ডিকশনারি অবজেক্ট বানাতে `Object.create(null)` ব্যবহার করা হয় যার কোনো ডিফল্ট মেথড (যেমন `toString`) থাকে না।"
      ],
      commonMistakes: [
        "ফাংশনের `.prototype` প্রোপার্টি এবং অবজেক্টের `__proto__` লিংককে গুলিয়ে ফেলা।",
        "জাভাস্ক্রিপ্টের বিল্ট-ইন অবজেক্টে (যেমন `Array.prototype`)-এ কাস্টম মেথড ঢুকিয়ে গ্লোবাল প্রোটোটাইপ পলিউশন তৈরি করা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'ES6 ক্লাস আসলে কোনো ক্লাস নয়; এটি প্রোটোটাইপাল চেইনিংয়ের ওপর নির্মিত শুধুই একটি সিনট্যাক্টিক সুগার।'"
      ]
    }
  },
  {
    id: "pa-d2-q26-this-keyword",
    questionNumber: 26,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "Explain the concept of this keyword in different contexts.",
    banglaQuestion: "JavaScript-এ this কিওয়ার্ড কীভাবে কাজ করে? বিভিন্ন কনটেক্সটে এর মান ব্যাখ্যা করুন।",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["JavaScript", "this", "Scope", "Execution Context", "Arrow Functions"],
    english: {
      quickAnswer: "`this` refers to the object representing the current execution context, determined at call-time by how a function is invoked (except for arrow functions which capture `this` lexically).",
      interviewSpeech: "In JavaScript, the `this` keyword does not point to the function itself or its lexical scope; instead, its binding is determined strictly at runtime by *how* the function is invoked. There are four foundational rules governing `this`: 1) **Default Binding**: Standalone function invocation (`fn()`) binds `this` to the global object (`window` or `global`), or `undefined` in strict mode (`'use strict'`). 2) **Implicit Binding**: Calling a function as a method of an object (`user.getName()`) binds `this` to the object preceding the dot. 3) **Explicit Binding**: Using `.call()`, `.apply()`, or `.bind()` explicitly assigns `this`. 4) **New Binding**: Invoking a constructor with `new Fn()` binds `this` to the freshly allocated empty object. Finally, ES6 **Arrow Functions** bypass these rules entirely: they have no `this` of their own and lexically inherit `this` from their enclosing outer scope.",
      deepDive: [
        "**Strict Mode Impact**: In non-strict mode, standalone calls default `this` to `window`/`globalThis`. Under `'use strict'`, `this` remains safely `undefined`, preventing accidental global variable pollution.",
        "**Losing `this` Context**: Passing an object method as a callback (e.g. `setTimeout(user.login, 1000)`) strips its implicit binding because the function reference is invoked standalone. Solve via arrow wrapper or `.bind(user)`.",
        "**DOM Event Handlers**: In standard event listener callbacks, `this` is bound to the element that caught the event (`event.currentTarget`).",
        "**Arrow Function Lexical Fix**: Arrow functions do not declare their own `this`, `arguments`, or `super`. They resolve `this` just like any standard variable by looking up the lexical scope chain."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "The 4 Rules of `this` and Arrow Function Lexical Scope",
        code: "\"use strict\";\n\n// 1. Default Binding (Strict Mode -> undefined)\nfunction standalone() { return this; }\nconsole.log(standalone()); // undefined\n\n// 2. Implicit Binding (Object method)\nconst person = {\n  name: \"Maria\",\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  },\n  delayedGreet() {\n    // Arrow function captures lexical 'this' of delayedGreet\n    setTimeout(() => {\n      console.log(`Async: I'm ${this.name}`);\n    }, 50);\n  }\n};\nconsole.log(person.greet()); // \"Hello, I'm Maria\"\nperson.delayedGreet(); // \"Async: I'm Maria\"\n\n// 3. Losing this context trap:\nconst extractedGreet = person.greet;\n// extractedGreet(); // TypeError: Cannot read properties of undefined (reading 'name')"
      },
      commonMistakes: [
        "Assuming `this` refers to the function's own lexical scope or declaration site (it is determined at invocation time, not definition time).",
        "Using arrow functions as object methods where you intend to access other properties on that object (`this` will point to the surrounding outer scope, usually `window` or `{}`)."
      ],
      proTips: [
        "Hierarchy of precedence when rules conflict: `new` Binding > Explicit (`call/apply/bind`) > Implicit (`obj.fn()`) > Default Binding (`standalone`). Arrow functions take ultimate precedence by ignoring all four."
      ]
    },
    bangla: {
      quickAnswer: "`this` হলো এমন একটি রেফারেন্স যা বর্তমান এক্সিকিউশন কনটেক্সটের অবজেক্টকে নির্দেশ করে। ফাংশন কোথায় ডিফাইন করা হয়েছে তার ওপর নয়, বরং ফাংশনটিকে কীভাবে কল করা হয়েছে তার ওপর `this`-এর মান নির্ভর করে।",
      interviewSpeech: "জাভাস্ক্রিপ্টে `this` কোনো নির্দিষ্ট স্ট্যাটিক ভেরিয়েবল নয়; রানটাইমে কোনো ফাংশনকে *কীভাবে কল করা হলো* তার ওপর ভিত্তি করে `this`-এর মান নির্ধারিত হয়। এর প্রধান ৪টি নিয়ম রয়েছে: ১) **ডিফল্ট বাইন্ডিং**: সাধারণ ফাংশন সরাসরি কল করলে (`fn()`) নন-স্ট্রিক্ট মোডে `this` হয় গ্লোবাল `window` অবজেক্ট, আর স্ট্রিক্ট মোডে (`'use strict'`) হয় `undefined`। ২) **ইমপ্লিসিট বাইন্ডিং**: অবজেক্টের মেথড হিসেবে ডট দিয়ে কল করলে (`obj.fn()`) ডটের বামে থাকা অবজেক্টটিই হয় `this`। ৩) **এক্সপ্লিসিট বাইন্ডিং**: `call()`, `apply()` বা `bind()` দিয়ে নির্দিষ্ট কোনো অবজেক্টকে `this` হিসেবে জোরপূর্বক ধরিয়ে দেওয়া। ৪) **New বাইন্ডিং**: `new` কিওয়ার্ড দিয়ে কনস্ট্রাক্টর কল করলে সদ্য তৈরি হওয়া ফাঁকা অবজেক্টটি হয় `this`। সবশেষে, ES6-এর **Arrow Function**-এর নিজস্ব কোনো `this` নেই—এটি তার বাইরের স্কোপ থেকে লেক্সিক্যালি `this`-এর মান উত্তরাধিকার সূত্রে গ্রহণ করে।",
      deepDive: [
        "**স্ট্রিক্ট মোডের নিরাপত্তা**: স্ট্রিক্ট মোড ব্যবহার না করলে অনিচ্ছাকৃতভাবে গ্লোবাল `window` অবজেক্টের ভেতর প্রোপার্টি যোগ হয়ে বাগ তৈরি হয়; স্ট্রিক্ট মোডে ডিফল্ট কল সর্বদা `undefined` দেয়।",
        "**`this` হারানোর ফাঁদ**: কোনো অবজেক্টের মেথডকে যদি কলব্যাক হিসেবে অন্য কোথাও পাস করা হয় (যেমন `setTimeout(obj.login, 100)`), তখন অবজেক্টের রেফারেন্স হারিয়ে যায়। অ্যারো ফাংশন বা `.bind()` দিয়ে এটি সমাধান করতে হয়।",
        "**DOM ইভেন্ট লিসেনার**: সাধারণ ফাংশনে DOM ইভেন্ট হ্যান্ডলার বসালে `this` নির্দেশ করে ইভেন্ট টার্গেট এলিমেন্টটিকে (`event.currentTarget`)।",
        "**বাইন্ডিংয়ের অগ্রাধিকার ক্রম**: `new` বাইন্ডিং > Explicit (`call/apply/bind`) > Implicit (`obj.fn()`) > Default।"
      ],
      commonMistakes: [
        "অবজেক্টের মেথড তৈরি করতে Arrow Function ব্যবহার করা—কারণ তখন মেথডের ভেতরে `this` অবজেক্টকে না বুঝিয়ে গ্লোবাল স্কোপকে নির্দেশ করে।",
        "ফাংশন কলের সময় ডটের আগের রেফারেন্স কীভাবে বদলে যায় তা খেয়াল না করে `undefined` এরর খাওয়া।"
      ],
      proTips: [
        "অগ্রাধিকার ক্রম মুখস্থ রাখুন: `new` > `call/apply/bind` > `object.method()` > `standalone()`। আর অ্যারো ফাংশন এই সব নিয়ম উপেক্ষা করে বাইরের লেক্সিক্যাল স্কোপের `this` নেয়।"
      ]
    }
  },
  {
    id: "pa-d2-q27-modules",
    questionNumber: 27,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What are JavaScript modules (import/export)?",
    banglaQuestion: "JavaScript Modules (ESM বনাম CommonJS) কী এবং import/export কীভাবে কাজ করে?",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["JavaScript", "ES Modules", "CommonJS", "Architecture", "import/export"],
    english: {
      quickAnswer: "JavaScript Modules allow splitting code into isolated, reusable files with explicitly exported and imported functions/variables; ESM (`import/export`) is the official static standard, while CommonJS (`require/module.exports`) is Node's classic runtime system.",
      interviewSpeech: "JavaScript modules provide file-level encapsulation, ensuring variables and functions declared in a file do not pollute the global scope. Today there are two dominant module formats: ES Modules (ESM) and CommonJS (CJS). ESM (`import`/`export`) is the official ECMAScript standard supported natively by modern browsers and Node.js. It is static, meaning dependencies are analyzed at compile-time before code execution, which enables build tools to perform static tree-shaking (dead code elimination). ESM offers named exports (`export const x`), default exports (`export default`), dynamic imports (`import('...')` for code-splitting), and strict mode by default. CommonJS, historically used in Node.js, uses `require()` and `module.exports`, which are dynamic and synchronous at runtime.",
      deepDive: [
        "**Static Analysis & Tree-Shaking**: Because ESM `import` statements must exist at top-level and cannot be placed inside `if` statements, bundlers (Vite, Webpack, Rollup) can statically parse the AST and strip unreferenced exports.",
        "**Live Bindings**: In ESM, imports are live read-only references to the exported values. If the exporter modifies a variable, the importer sees the updated value immediately. In CommonJS, `require` returns a copied object snapshot.",
        "**Asynchronous Loading**: ESM loads module graphs asynchronously across network boundaries (crucial for browsers); CommonJS relies on synchronous local filesystem reads via `fs.readFileSync`.",
        "**Dynamic Imports**: `import('./module.js')` returns a Promise resolving to the module, enabling route-based code-splitting and on-demand lazy loading in modern web apps."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "ES Modules (ESM) vs CommonJS (CJS)",
        code: "// --- ES MODULES (ESM - Modern Standard) ---\n// math.js\nexport const add = (a, b) => a + b; // Named export\nexport const subtract = (a, b) => a - b; // Named export\nexport default function calculateTax(amount) { return amount * 0.15; } // Default export\n\n// main.js\nimport calculateTax, { add, subtract } from \"./math.js\";\n// Dynamic code splitting import:\nconst button = document.querySelector(\"#btn\");\nbutton.addEventListener(\"click\", async () => {\n  const { renderAnalytics } = await import(\"./analytics.js\");\n  renderAnalytics();\n});\n\n// --- COMMONJS (CJS - Legacy Node) ---\n// const { add } = require(\"./math\");\n// module.exports = { add };"
      },
      commonMistakes: [
        "Attempting to conditionally put static `import` statements inside an `if` block (use dynamic `await import()` instead).",
        "Mixing named and default exports without realizing default imports use arbitrary naming while named imports must match exact names or use `as` aliases."
      ],
      proTips: [
        "Highlight modern tooling: 'Tree-shaking relies on ESM's static structure. If your project uses CommonJS `require()`, bundlers cannot reliably drop unused code, resulting in larger client bundles.'"
      ]
    },
    bangla: {
      quickAnswer: "JavaScript Modules কোডকে ছোট ছোট আলাদা ফাইলে ভাগ করে পুনঃব্যবহারযোগ্য করে তোলে; আধুনিক অফিসিয়াল স্ট্যান্ডার্ড হলো ESM (`import`/`export`), আর Node.js-এর ঐতিহ্যবাহী রানটাইম ফরম্যাট হলো CommonJS (`require`/`module.exports`)।",
      interviewSpeech: "জাভাস্ক্রিপ্ট মডিউল সিস্টেম কোডকে আলাদা আলাদা ফাইলে ভাগ করে একটি গ্লোবাল দূষণমুক্ত আর্কিটেকচার তৈরি করতে সাহায্য করে। বর্তমানে মূলত দুটি মডিউল সিস্টেম প্রচলিত: ES Modules (ESM) এবং CommonJS (CJS)। আধুনিক ব্রাউজার এবং আধুনিক Node.js-এর স্ট্যান্ডার্ড হলো ESM, যাতে `import` এবং `export` সিনট্যাক্স ব্যবহৃত হয়। ESM হলো স্ট্যাটিক—অর্থাৎ কোড রান করার আগেই কম্পাইল/পার্স টাইমে ইঞ্জিন জেনে যায় কোন ফাইল কোনটির ওপর নির্ভরশীল। এর ফলে বান্ডলারগুলো খুব সহজে 'Tree-Shaking' (অব্যবহৃত কোড বাদ দেওয়া) করতে পারে। ESM-এ Named Export, Default Export এবং রাউট ভিত্তিক কোড স্প্লিটিংয়ের জন্য Dynamic `import()` রয়েছে। অপরদিকে CommonJS হলো Node.js-এর পুরনো সিনট্যাক্স যা `require()` এবং `module.exports` দিয়ে রানটাইমে সিনক্রোনাসভাবে ফাইল লোড করত।",
      deepDive: [
        "**স্ট্যাটিক অ্যানালাইসিস ও ট্রি-শেকিং**: ESM-এর ইমপোর্ট ফাইলের একদম টপ-লেভেলে থাকতে হয়; কোনো `if` ব্লকের ভেতর লেখা যায় না। এই স্ট্যাটিক বৈশিষ্ট্যের কারণেই Webpack/Vite অপ্রয়োজনীয় কোড ফাইল থেকে মুছে সাইজ ছোট করতে পারে।",
        "**লাইভ বাইন্ডিংস (Live Bindings)**: ESM-এ ইমপোর্ট করা ভেরিয়েবল একটি সরাসরি লাইভ পয়েন্টার। এক্সপোর্টার ফাইলে কোনো ভেরিয়েবলের মান বদলালে ইমপোর্টার ফাইলে স্বয়ংক্রিয়ভাবে পরিবর্তিত মানটি দৃশ্যমান হয়।",
        "**ডায়নামিক ইমপোর্ট**: পেজের গতি বাড়াতে কোনো বড় লাইব্রেরি কেবল বাটনে ক্লিকের পর লোড করাতে `const mod = await import('./heavy.js')` ব্যবহার করা যায়।",
        "**অটোমেটিক স্ট্রিক্ট মোড**: যেকোনো ES মডিউল স্বয়ংক্রিয়ভাবে `'use strict'` মোডে এক্সিকিউট হয়।"
      ],
      commonMistakes: [
        "কোনো শর্ত বা `if` ব্লকের ভেতরে স্ট্যাটিক `import` স্টেটমেন্ট লেখার চেষ্টা করা। শর্ত সাপেক্ষে লোড করতে `import()` প্রমিজ ফাংশন ব্যবহার করতে হয়।",
        "CommonJS লাইব্রেরি ব্যবহার করে বান্ডলারের ট্রি-শেকিং কাজ করছে না দেখে বিভ্রান্ত হওয়া।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'বান্ডলারের অপ্টিমাইজেশন ও ট্রি-শেকিংয়ের জন্য সর্বদা ESM ব্যবহার করা উচিত; CJS ডাইনামিক রানটাইম ইমপোর্ট হওয়ায় ট্রি-শেকিং সমর্থন করে না।'"
      ]
    }
  },
  {
    id: "pa-d2-q28-shallow-vs-deep-copy",
    questionNumber: 28,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What is the difference between shallow copy and deep copy of objects?",
    banglaQuestion: "Object-এর Shallow Copy এবং Deep Copy-এর মধ্যে পার্থক্য কী এবং এদের কীভাবে করা যায়?",
    difficulty: "Intermediate",
    importance: "Must Know",
    tags: ["JavaScript", "Objects", "Memory Management", "structuredClone", "Immutability"],
    english: {
      quickAnswer: "A shallow copy clones only top-level properties while nested objects/arrays remain shared by reference; a deep copy recursively clones all levels, producing an entirely independent copy in memory.",
      interviewSpeech: "The difference between shallow copy and deep copy is rooted in JavaScript's handling of reference types. When you create a shallow copy (using the spread operator `{ ...obj }`, `Object.assign()`, or `[...arr]`), JavaScript allocates a new top-level container and copies primitive values by value. However, any nested objects or arrays are copied by reference—meaning both the original and the cloned object point to the identical nested memory addresses. Modifying a nested property in the clone mutates the original. In contrast, a deep copy duplicates all nested objects and arrays recursively at every level, decoupling the clone completely. Modern JavaScript provides the native `structuredClone()` API for robust deep cloning, replacing older flawed workarounds like `JSON.parse(JSON.stringify())`.",
      deepDive: [
        "**Flaws of `JSON.parse(JSON.stringify(obj))`**: Fails completely on `undefined`, `Function`, `Symbol` properties (they are omitted), turns `Date` objects into ISO strings, converts `NaN`/`Infinity` to `null`, and throws a fatal `TypeError` on circular references.",
        "**Native `structuredClone()` (HTML Standard / ES2022)**: Handles circular references, deep-copies `Map`, `Set`, `Date`, `RegExp`, and `ArrayBuffer`. Still cannot copy functions or DOM nodes.",
        "**Shallow Methods**: Spread operator `{ ...obj }`, `Object.assign({}, obj)`, `arr.slice()`, `Array.from()`. Fast and performant for shallow 1-level data.",
        "**Third-Party Libraries**: Lodash's `_.cloneDeep()` remains widely used in legacy codebases before `structuredClone()` gained universal browser support."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Shallow Copy Hazard vs Native structuredClone()",
        code: "const original = {\n  title: \"Next.js Masterclass\",\n  details: { instructor: \"Rahim\", tags: [\"react\", \"web\"] }\n};\n\n// 1. SHALLOW COPY (Spread operator)\nconst shallow = { ...original };\nshallow.title = \"Updated Title\"; // Top-level: SAFE (doesn't affect original)\nshallow.details.instructor = \"Karim\"; // Nested: MUTATES ORIGINAL!\nconsole.log(original.details.instructor); // \"Karim\" (Ouch!)\n\n// 2. DEEP COPY (Modern native structuredClone)\nconst deep = structuredClone(original);\ndeep.details.instructor = \"Tanvir\";\ndeep.details.tags.push(\"performance\");\nconsole.log(original.details.instructor); // \"Karim\" (Original remains untouched!)\nconsole.log(original.details.tags.length); // 2\nconsole.log(deep.details.tags.length); // 3"
      },
      commonMistakes: [
        "Using `{ ...obj }` and assuming deeply nested state in React/Redux is safe from accidental mutations.",
        "Relying on `JSON.parse(JSON.stringify(obj))` on objects that contain dates, functions, or circular references, causing data loss or runtime errors."
      ],
      proTips: [
        "State modern best practices: 'Avoid the JSON stringify trick in production; prefer native `structuredClone()` for deep copies, and spread syntax for single-level state updates.'"
      ]
    },
    bangla: {
      quickAnswer: "Shallow Copy শুধুমাত্র অবজেক্টের প্রথম লেভেলের মান কপি করে কিন্তু নেস্টেড অবজেক্টগুলোর রেফারেন্স একই রাখে; আর Deep Copy অবজেক্টের প্রতিটি লেভেলের সমস্ত নেস্টেড অবজেক্ট রিকার্সিভভাবে মেমরিতে সম্পূর্ণ নতুনভাবে ক্লোন করে।",
      interviewSpeech: "জাভাস্ক্রিপ্টে প্রিমিটিভ ডেটা ভ্যালু দিয়ে কপি হয় এবং নন-প্রিমিটিভ (অবজেক্ট/অ্যারে) মেমোরি রেফারেন্স দিয়ে কপি হয়। যখন আমরা স্প্রেড অপারেটর (`{ ...obj }`) বা `Object.assign()` দিয়ে কোনো অবজেক্ট ক্লোন করি, তখন একটি Shallow Copy তৈরি হয়। এতে প্রথম লেভেলের প্রোপার্টিগুলো আলাদা হলেও ভেতরের নেস্টেড কোনো অবজেক্ট বা অ্যারে থাকলে তারা উভয়েই মেমরির একই ঠিকানাকে নির্দেশ করে। ফলে ক্লোন অবজেক্টের নেস্টেড প্রোপার্টি পরিবর্তন করলে মূল অবজেক্টের ডেটাও নষ্ট হয়ে যায়। অপরদিকে Deep Copy-তে অবজেক্টের সমস্ত ভেতরের অবজেক্ট ও অ্যারেকে মেমরিতে সম্পূর্ণ আলাদা নতুন অবজেক্ট হিসেবে কপি করা হয়, ফলে একটির পরিবর্তনে অন্যটির কোনো প্রভাব পড়ে না। আধুনিক জাভাস্ক্রিপ্টে ডিপ কপি করার অফিসিয়াল মেথড হলো নেটিভ `structuredClone()`।",
      deepDive: [
        "**`JSON.parse(JSON.stringify(obj))` এর সীমাবদ্ধতা**: এটি ফাংশন, `undefined` এবং `Symbol` মুছে ফেলে, `Date` অবজেক্টকে স্ট্রিং বানিয়ে দেয়, এবং কোনো অবজেক্টে সার্কুলার রেফারেন্স থাকলে কোড ক্র্যাশ করে।",
        "**নেটিভ `structuredClone()` এর সুবিধা**: এটি সার্কুলার রেফারেন্স হ্যান্ডেল করতে পারে এবং `Date`, `Set`, `Map`, `RegExp` ইত্যাদি জটিল ডেটা স্ট্রাকচার অবিকল বজায় রেখে ডিপ কপি করে।",
        "**শ্যালো কপি মেথডস**: `{ ...obj }`, `Object.assign({}, obj)`, `arr.slice()`, `[...arr]`—এগুলো কেবল ১-লেভেলের ডেটা কপি করতে দ্রুতগতির ও নিখুঁত।",
        "**রিঅ্যাক্ট স্টেটে প্রভাব**: রিঅ্যাক্টে নেস্টেড অবজেক্ট মিউটেট করলে রি-রেন্ডার মিস হতে পারে, তাই ডিপ ডেটার ক্ষেত্রে সতর্ক থাকতে হয়।"
      ],
      commonMistakes: [
        "স্প্রেড অপারেটর দিয়ে কপি করলেই নেস্টেড অবজেক্টের ডেটা সেফ থাকবে মনে করে রিঅ্যাক্ট স্টেট সরাসরি মিউটেট করে ফেলা।",
        "সার্কুলার রেফারেন্স বা ডেট অবজেক্ট থাকা সত্ত্বেও `JSON.parse(JSON.stringify())` ব্যবহার করে ডেটা হারিয়ে ফেলা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'আধুনিক কোডবেসে ডিপ কপির জন্য পুরনো JSON হ্যাক পরিহার করে নেটিভ `structuredClone()` ব্যবহার করাটাই সিনিয়র স্ট্যান্ডার্ড।'"
      ]
    }
  },
  {
    id: "pa-d2-q29-weakmap-and-weakset",
    questionNumber: 29,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "What are WeakMap and WeakSet and when would you use them?",
    banglaQuestion: "WeakMap এবং WeakSet কী? সাধারণ Map ও Set-এর সাথে এদের পার্থক্য এবং ব্যবহারের ক্ষেত্র কী?",
    difficulty: "Advanced",
    importance: "Medium",
    tags: ["JavaScript", "WeakMap", "WeakSet", "Garbage Collection", "Memory Management"],
    english: {
      quickAnswer: "`WeakMap` and `WeakSet` are specialized collections that hold *weak* references to objects, allowing those objects to be garbage-collected if no other references exist, preventing memory leaks.",
      interviewSpeech: "`WeakMap` and `WeakSet` are high-performance memory management collections introduced in ES6. Their distinguishing trait is that references to their keys (in `WeakMap`) or stored values (in `WeakSet`) are held 'weakly'. In standard `Map` and `Set`, storing an object reference prevents the JavaScript garbage collector from reclaiming its memory, even if the rest of your application has discarded all references to that object. With `WeakMap` and `WeakSet`, if an object has no other strong references remaining in memory, the engine automatically frees it and purges the collection entry. Because garbage collection timing is non-deterministic, these collections are deliberately non-iterable—they lack `.size`, `.keys()`, `.values()`, or `.forEach()`. They are commonly used for attaching metadata to DOM nodes, caching computed state without leaks, and managing private class fields.",
      deepDive: [
        "**Object-Only Restriction**: `WeakMap` keys and `WeakSet` values MUST be objects (or registered symbols in recent specs); primitives like strings or numbers are disallowed because primitives cannot be garbage-collected.",
        "**Non-Iterable by Design**: You cannot loop over a `WeakMap`/`WeakSet` or check `.size` because exposing enumeration would expose the unpredictable timing of the engine's internal garbage collection cycles.",
        "**Primary Use Case 1: DOM Node Metadata**: Associating listener counts, analytics tracking, or state with DOM elements without leaking memory when the element is removed from the DOM.",
        "**Primary Use Case 2: Memoization Caches**: Caching heavy calculation results keyed by object references; when the object goes out of scope, the cached computation is freed automatically."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Preventing Memory Leaks with WeakMap",
        code: "// 1. Memory Leak Prevention: DOM Node Metadata\nconst elementClicks = new WeakMap();\n\nfunction trackClicks(domElement) {\n  let clicks = elementClicks.get(domElement) || 0;\n  elementClicks.set(domElement, clicks + 1);\n}\n\nlet button = document.createElement(\"button\");\ntrackClicks(button);\nconsole.log(elementClicks.get(button)); // 1\n\n// When button is removed from DOM and dereferenced:\nbutton = null; \n// The button AND its associated metadata in elementClicks are safely garbage collected!\n\n// 2. WeakSet: Tracking visited objects without leaks (e.g. cycle detection)\nconst visitedObjects = new WeakSet();\nfunction processObject(obj) {\n  if (visitedObjects.has(obj)) {\n    throw new Error(\"Circular reference detected!\");\n  }\n  visitedObjects.add(obj);\n  // Process obj...\n}"
      },
      commonMistakes: [
        "Attempting to use primitive values (strings, numbers) as keys in a `WeakMap` (throws `TypeError: Invalid value used as weak map key`).",
        "Expecting to be able to iterate over a `WeakMap` with `for...of` or check `map.size` (neither property exists)."
      ],
      proTips: [
        "Connect with modern JS specs: 'Private class fields (`#privateField`) are implemented internally by JavaScript engines using WeakMap semantics under the hood.'"
      ]
    },
    bangla: {
      quickAnswer: "`WeakMap` এবং `WeakSet` হলো অবজেক্ট সংরক্ষণের বিশেষ কালেকশন যা অবজেক্টকে 'Weak Reference' হিসেবে ধরে রাখে, ফলে অবজেক্টের অন্য কোনো রেফারেন্স না থাকলে Garbage Collector স্বয়ংক্রিয়ভাবে মেমোরি খালি করে দেয়।",
      interviewSpeech: "`WeakMap` এবং `WeakSet` মূলত মেমোরি লিক (Memory Leak) প্রতিরোধ করার জন্য ডিজাইন করা হয়েছে। সাধারণ `Map` বা `Set`-এ কোনো অবজেক্ট ঢোকালে সেটির একটি স্ট্রং রেফারেন্স তৈরি হয়, যার ফলে অ্যাপ্লিকেশনের অন্য সব জায়গা থেকে অবজেক্টটি ডিলিট করে দিলেও জাভাস্ক্রিপ্টের Garbage Collector সেটিকে মেমোরি থেকে সরাতে পারে না। কিন্তু `WeakMap` (যেখানে কী হিসেবে অবজেক্ট থাকে) এবং `WeakSet`-এ অবজেক্টের রেফারেন্স দুর্বলভাবে (Weakly) সংরক্ষিত থাকে। বাইরে থেকে অবজেক্টের রেফারেন্স মুছে গেলেই ইঞ্জিন স্বয়ংক্রিয়ভাবে মেমোরি ক্লিন করে দেয়। যেহেতু মেমোরি ক্লিন হওয়ার সময় সুনির্দিষ্ট নয়, তাই এদের ওপর কোনো লুপ চালানো যায় না (`forEach`, `for...of`) এবং এদের কোনো `.size` প্রোপার্টিও থাকে না। DOM নোডের সাথে অতিরিক্ত ডেটা ট্যাগ করতে বা মেমোইজেশন ক্যাশিংয়ে এরা অত্যন্ত কার্যকরী।",
      deepDive: [
        "**শুধুমাত্র অবজেক্ট সমর্থন**: `WeakMap`-এর Key এবং `WeakSet`-এর Value অবশ্যই Object হতে হবে; কোনো Primitive (যেমন string, number) দেওয়া যাবে না।",
        "**নন-ইটারেবল বৈশিষ্ট্য**: মেমোরি গার্বেজ কালেকশন ব্রাউজারের অভ্যন্তরীণ বিষয়ের ওপর নির্ভর করে, তাই সিকিউরিটি ও প্রেডিক্টেবিলিটির জন্য এদের কোনো `.size` বা লুপ মেথড রাখা হয়নি।",
        "**বাস্তব ব্যবহার (DOM মেটাডেটা)**: কোনো বাটনে ক্লিক কাউন্ট বা কাস্টম ডেটা ট্র্যাক করতে WeakMap ব্যবহার করলে বাটনটি DOM থেকে মুছে যাওয়ার সাথে সাথে মেটাডেটাও মেমোরি থেকে সাফ হয়ে যায়।",
        "**প্রাইভেট ক্লাস ফিল্ডস**: জাভাস্ক্রিপ্টের আধুনিক `#privateField` ইন্টারনালি ইঞ্জিনে মূলত WeakMap লজিকের মাধ্যমেই কার্যকর করা হয়।"
      ],
      commonMistakes: [
        "`WeakMap`-এ কী (Key) হিসেবে স্ট্রিং বা নাম্বার ব্যবহার করার চেষ্টা করে `TypeError` পাওয়া।",
        "লুপ চালিয়ে `WeakMap`-এর সব ডেটা দেখার চেষ্টা করা বা সাইজ বের করার চেষ্টা করা।"
      ],
      proTips: [
        "ইন্টারভিউতে বলুন: 'DOM এলিমেন্টের লাইফসাইকেলের সাথে কোনো ডেটা ক্যাশ করতে চাইলে WeakMap আদর্শ, কারণ এটি মেমোরি লিক হওয়ার সমস্ত সম্ভাবনা দূর করে দেয়।'"
      ]
    }
  },
  {
    id: "pa-d2-q30-memoization",
    questionNumber: 30,
    module: "Day 2 — JavaScript Fundamentals II",
    topic: "Arrays, Objects, ES6+ & Async",
    question: "Explain the concept of memoization with an example.",
    banglaQuestion: "Memoization কী? Closures ব্যবহার করে কীভাবে এটি কাজ করে উদাহরণসহ বুঝিয়ে বলুন।",
    difficulty: "Intermediate",
    importance: "High",
    tags: ["JavaScript", "Memoization", "Closures", "Performance", "Optimization"],
    english: {
      quickAnswer: "Memoization is an optimization technique that caches the return values of expensive, pure function calls based on their input parameters, skipping re-computation when the same arguments recur.",
      interviewSpeech: "Memoization is a specific form of caching applied to pure functions. In JavaScript, it is universally implemented using **Closures** and Higher-Order Functions. A memoize utility takes an expensive function as an argument and returns a wrapped proxy function. The outer scope holds a private cache dictionary (an Object or a `Map`). When the wrapped function is invoked with arguments, it first serializes the arguments into a cache key. If the key exists in the cache, it instantly returns the cached result in O(1) time without re-running the computation. If the key is absent, it executes the original function, stores the output in the cache, and returns it. This technique powers React's `useMemo` hook, `React.memo()`, and dynamic programming algorithms like Fibonacci computation.",
      deepDive: [
        "**Prerequisite of Purity**: Memoization is strictly valid only for **Pure Functions** (deterministic functions where identical inputs always yield identical outputs with zero side-effects). Memoizing an impure function (e.g. reading from DB, using `Math.random()`, or inspecting the clock) leads to stale, incorrect data.",
        "**Cache Key Serialization Tradeoff**: Using `JSON.stringify(arguments)` as a cache key introduces serialization overhead. For simple primitive arguments, template string keys are fast; for object arguments, a nested `WeakMap` or reference check is required.",
        "**Memory Management & Unbounded Growth**: A naive memoization cache grows indefinitely, causing memory leaks over long sessions. Production implementations (like Lodash or LRU caches) enforce a maximum cache size with a Least-Recently-Used eviction policy.",
        "**React Equivalents**: `useMemo(fn, deps)` memoizes computed values between renders; `React.memo(Component)` memoizes the rendered output of functional components based on shallow prop comparisons."
      ],
      codeSnippet: {
        language: "javascript",
        caption: "Generic Memoization Utility via Closures",
        code: "// 1. Generic Memoize High-Order Function using Closure\nfunction memoize(fn) {\n  const cache = new Map(); // Private cache trapped in closure\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n\n    if (cache.has(key)) {\n      console.log(\"[CACHE HIT] Returning cached result for:\", key);\n      return cache.get(key);\n    }\n\n    console.log(\"[COMPUTING] Running heavy calculation for:\", key);\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\n// 2. Expensive Function (e.g. Factorial or Fibonacci)\nconst factorial = memoize(function(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n});\n\nconsole.log(factorial(5)); // COMPUTING -> 120\nconsole.log(factorial(5)); // CACHE HIT -> 120 (Instant O(1) return!)"
      },
      commonMistakes: [
        "Memoizing functions that have side effects (e.g., API mutations or DOM updates) or depend on mutable global state.",
        "Allowing cache memory to grow infinitely without any eviction strategy (LRU cache) in long-lived client applications."
      ],
      proTips: [
        "Connect with React internals: 'In React, `useMemo` is fundamentally memoization with a cache size of 1, invalidating only when dependency references change.'"
      ]
    },
    bangla: {
      quickAnswer: "Memoization হলো পারফরম্যান্স অপ্টিমাইজেশনের এমন একটি কৌশল যেখানে কোনো ভারী বা ব্যয়বহুল Pure Function-এর ইনপুট আর্গুমেন্টের ওপর ভিত্তি করে তার আউটপুট ক্যাশে সংরক্ষণ করা হয়, যাতে একই ইনপুট পুনরায় আসলে নতুন করে হিসাব না করে সরাসরি ক্যাশ থেকে দ্রুত রিটার্ন করা যায়।",
      interviewSpeech: "Memoization হলো ফাংশনাল প্রোগ্রামিংয়ের একটি জনপ্রিয় অপ্টিমাইজেশন টেকনিক। জাভাস্ক্রিপ্টে এটি মূলত Higher-Order Function এবং **Closure**-এর ওপর ভিত্তি করে তৈরি হয়। আমরা যখন কোনো ফাংশনকে মেমোইজ করি, তখন একটি আউটার ফাংশনের ভেতর একটি প্রাইভেট ক্যাশ অবজেক্ট বা `Map` তৈরি করে রাখা হয়। ক্লোজারের কারণে ভেতরের ফাংশনটি সবসময় সেই ক্যাশ এক্সেস করতে পারে। যখন ফাংশনটি কল করা হয়, সে প্রথমে আর্গুমেন্টগুলোর ওপর ভিত্তি করে ক্যাশে খোঁজে—মান পাওয়া গেলে (Cache Hit) কোনো হিসাব ছাড়াই তাৎক্ষণিকভাবে O(1) টাইমে মান দিয়ে দেয়। আর না পেলে (Cache Miss) আসল ক্যালকুলেশন সম্পন্ন করে ফলাফলটি ক্যাশে সেভ করে এবং রিটার্ন করে। এটি ফিবোনাচ্চি বা ফ্যাক্টোরিয়াল জাতীয় রিকার্সিভ অ্যালগরিদমে এবং রিঅ্যাক্টের `useMemo` ও `React.memo`-তে মূল ভিত্তি হিসেবে ব্যবহৃত হয়।",
      deepDive: [
        "**পিওর ফাংশন (Pure Function) হওয়া বাধ্যতামূলক**: মেমোইজেশন কেবল সেই ফাংশনেই কার্যকর যার আউটপুট কেবল ইনপুটের ওপর নির্ভরশীল এবং কোনো সাইড-ইফেক্ট নেই। কোনো ফাংশন যদি ডেটাবেজ কল করে বা `Date.now()` নেয়, তাকে মেমোইজ করলে ভুল ও বাসি (stale) ডেটা আসবে।",
        "**ক্যাশ কী (Key) তৈরির খরচ**: আর্গুমেন্ট অবজেক্ট হলে `JSON.stringify` করতে কিছু প্রসেসিং পাওয়ার খরচ হয়। তাই ক্যাশ কিউ তৈরির খরচ যেন ক্যালকুলেশনের খরচের চেয়ে বেশি না হয়ে যায় তা নিশ্চিত করতে হয়।",
        "**মেমোরি নিয়ন্ত্রণ (LRU Cache)**: আনলিমিটেড মেমোইজেশন করলে ক্যাশের সাইজ মেমরিতে বাড়তে বাড়তে ব্রাউজার মেমোরি লিক হতে পারে। প্রোডাকশনে LRU (Least Recently Used) স্ট্র্যাটেজি ব্যবহার করে ক্যাশের সাইজ নির্দিষ্ট রাখতে হয়।",
        "**React-এর ব্যবহার**: রিঅ্যাক্টের `useMemo` মূলত মেমোইজেশন টেকনিকের একটি রূপ, যার ক্যাশ সাইজ সাধারণত ১ এবং এটি ডিপেন্ডেন্সি পরিবর্তনের ওপর ভিত্তি করে ক্যাশ আপডেট করে।"
      ],
      commonMistakes: [
        "Impure ফাংশন (যেগুলো গ্লোবাল স্টেট পরিবর্তন করে বা র্যান্ডম মান দেয়) মেমোইজ করা।",
        "ক্যাশ মেমোরি খালি করার কোনো সীমা নির্ধারণ না করে মেমোরি ব্লোট তৈরি করা।"
      ],
      proTips: [
        "ইন্টারভিউতে রিঅ্যাক্টের সাথে কানেক্ট করুন: 'React-এর `useMemo` এবং `React.memo` হলো মেমোইজেশনের প্রত্যক্ষ উদাহরণ, যা অপ্রয়োজনীয় ক্যালকুলেশন ও কম্পোনেন্ট রি-রেন্ডার আটকে দেয়।'"
      ]
    }
  }
];
