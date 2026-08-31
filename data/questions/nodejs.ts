import { Question } from "@/types";

export const nodejsQuestions: Question[] = [
  // ==========================================
  // 🔵 Node.js Core Concepts (6 Questions)
  // ==========================================
  {
    id: "nodejs-what-is-and-how-it-works",
    slug: "nodejs-what-is-and-how-it-works",
    question: "What is Node.js and how does it work?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Node.js কোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ বা ফ্রেমওয়ার্ক নয়; এটি গুগলের ওপেন-সোর্স **V8 JavaScript Engine**-এর ওপর নির্মিত একটি ক্রস-প্ল্যাটফর্ম **JavaScript Runtime Environment**। এটি ব্রাউজারের বাইরে সার্ভার বা মেশিনে সরাসরি জাভাস্ক্রিপ্ট কোড চালানোর সুযোগ দেয়। Node.js একটি **Single-Threaded**, **Event-Driven**, এবং **Non-Blocking I/O** আর্কিটেকচার ফলো করে, যা **Libuv** C++ লাইব্রেরির ইভেন্ট লুপ ও থ্রেড পুলের সাহায্যে হাজার হাজার কনকারেন্ট রিকোয়েস্ট বিদ্যুৎ গতিতে প্রসেস করে।",
    easyExplanation: "সহজ উপমা দিয়ে বুঝুন:\n\n১. সাধারণ সার্ভার (যেমন Apache/PHP) হলো এমন এক রেস্তোরাঁ যেখানে প্রতি গ্রাহকের জন্য একজন করে আলাদা ওয়েটার নিয়োগ করা হয় (Multi-threaded)। ১০০ জন গ্রাহক এলে ১০০ জন ওয়েটার লাগে, ফলে জায়গা ও খরচ (RAM & CPU) শেষ হয়ে যায়।\n\n২. Node.js হলো একজন সুপার-স্মার্ট ওয়েটার (Single Thread): সে টেবিলে এসে খাবারের অর্ডার নেয়, সাথে সাথে তা কিচেনে (Libuv/OS) পাঠিয়ে দেয় এবং কিচেন থেকে খাবার রান্না হওয়ার ফাঁকে অন্য টেবিলের অর্ডার নিতে চলে যায়। যখন খাবার রেডি হয়, কিচেনের বেল বাজে (Event Emitter / Callback Queue), ওয়েটার এসে খাবারটি টেবিলে সার্ভ করে দেয়। ফলে একজন ওয়েটার একাই হাজার গ্রাহক সামলাতে পারে!",
    interviewAnswer: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 engine. It allows developers to execute JavaScript code server-side outside the browser. Architecturally, Node.js operates on a single-threaded, event-driven, non-blocking I/O model enabled by the Libuv C++ library. While the main JavaScript execution thread executes code sequentially on the Call Stack, long-running asynchronous I/O tasks (such as database queries, disk access, and network requests) are delegated to the operating system kernel or the internal Libuv thread pool. When these tasks complete, their callbacks are pushed to event queues and processed by the Event Loop without blocking incoming requests.",
    detailedExplanation: {
      whatItIs: "সার্ভার-সাইডে জাভাস্ক্রিপ্ট রান করার ওপেন-সোর্স রানটাইম এনভায়রনমেন্ট।",
      whyItExists: "ঐতিহ্যবাহী মাল্টি-থ্রেডেড সার্ভারগুলোর থ্রেড কনটেক্সট সুইচিং এবং উচ্চ মেমরি কনজাম্পশন সমাধান করে স্কেলেবল I/O ইনটেনসিভ নেটওয়ার্ক অ্যাপ তৈরি করতে।",
      howItWorks: "১. V8 ইঞ্জিন জাভাস্ক্রিপ্ট কোডকে মেশিন কোডে রূপান্তর করে -> ২. সিঙ্ক কোড কল স্ট্যাকে এক্সিকিউট হয় -> ৩. অ্যাসিঙ্ক I/O কাজ Libuv ও OS কার্নেলে অফলোড হয় -> ৪. কাজ শেষ হলে ইভেন্ট লুপ কলব্যাক কিউ থেকে স্ট্যাকে এনে রান করে।",
      whenToUse: "REST APIs, রিয়েল-টাইম চ্যাট/স্ট্রিমিং অ্যাপস, মাইক্রোসার্ভিস এবং I/O-হেভি অ্যাপ্লিকেশনে।",
      keyPoints: [
        "V8 Engine: Compiles JS directly to native machine code.",
        "Libuv: Provides the cross-platform Event Loop and Thread Pool.",
        "Single-Threaded Event Loop handles concurrency efficiently.",
        "Best suited for I/O-bound tasks, not raw CPU-heavy math operations."
      ]
    },
    visualDiagram: {
      title: "Node.js নন-ব্লকিং আর্কিটেকচার ও এক্সিকিউশন ফ্লো",
      subtitle: "রিকোয়েস্ট আসা থেকে শুরু করে ব্যাকগ্রাউন্ড থ্রেড পুলে প্রসেসিং ও রেসপন্সের সম্পূর্ণ ভিজ্যুয়াল চক্র:",
      steps: [
        {
          step: 1,
          title: "ক্লায়েন্ট রিকোয়েস্ট আগমন",
          subtitle: "HTTP / Network Request",
          location: "Client Browser / Network Socket",
          icon: "network",
          description: "ব্যবহারকারী সার্ভারে ডেটা বা পেজের জন্য HTTP রিকোয়েস্ট পাঠায়।",
          highlightSnippet: "GET /api/async-data HTTP/1.1\nHost: api.myserver.com"
        },
        {
          step: 2,
          title: "V8 Call Stack এ সিঙ্ক এক্সিকিউশন",
          subtitle: "Main Single Thread",
          location: "Google V8 Call Stack (Main Thread)",
          icon: "cpu",
          description: "জাভাস্ক্রিপ্ট মেইন থ্রেড সিনক্রোনাস কোড রান করে। যখনই কোনো অ্যাসিঙ্ক মেথড (যেমন fs বা fetch) পায়, সে নিজে অপেক্ষা না করে তা Libuv-এ পাঠিয়ে দেয়।",
          highlightSnippet: "console.log('Sync code starts');\nfs.readFile('data.json', callback); // Offloaded!"
        },
        {
          step: 3,
          title: "Libuv থ্রেড পুলে ব্যাকগ্রাউন্ড কাজ",
          subtitle: "Multi-Threaded C++ Workers",
          location: "Libuv Worker Thread Pool / OS Kernel",
          icon: "server",
          description: "Libuv ব্যাকগ্রাউন্ডের C++ থ্রেড পুলে অথবা অপারেটিং সিস্টেমের নন-ব্লকিং কার্নেলে ফাইল পড়া বা নেটওয়ার্ক কোয়েরির কাজ চালাতে থাকে। মেইন থ্রেড সম্পূর্ণ মুক্ত!",
          highlightSnippet: "[Thread #1]: Reading bytes from NVMe Disk in C++...\n[Main Thread]: Handling next user request freely!"
        },
        {
          step: 4,
          title: "ইভেন্ট কিউ ও ইভেন্ট লুপ কোঅর্ডিনেশন",
          subtitle: "Callback Queue & Event Loop",
          location: "Event Loop (Libuv Orchestrator)",
          icon: "refresh",
          description: "ব্যাকগ্রাউন্ডের কাজ শেষ হলে Libuv কলব্যাকটিকে Callback Queue-তে দেয়। ইভেন্ট লুপ কল স্ট্যাক ফাঁকা থাকা মাত্রই কলব্যাক তুলে নিয়ে স্ট্যাকে রান করায়।",
          highlightSnippet: "CallbackQueue.push(onFileReadCallback);\nEventLoop.tick() -> pushes to Call Stack"
        },
        {
          step: 5,
          title: "ক্লায়েন্টে নন-ব্লকিং রেসপন্স প্রেরণ",
          subtitle: "Response Delivery",
          location: "HTTP Response Stream",
          icon: "zap",
          description: "কলব্যাক এক্সিকিউট হয়ে ক্লায়েন্টকে সফলভাবে JSON রেসপন্স পাঠিয়ে দেয়। পুরো প্রক্রিয়ায় কোনো থ্রেড ব্লক হয়নি!",
          highlightSnippet: "res.writeHead(200, { 'Content-Type': 'application/json' });\nres.end(JSON.stringify({ data: 'Delivered!' }));"
        }
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Node.js বিল্ট-ইন 'http' মডিউল দিয়ে একটি বেসিক নন-ব্লকিং সার্ভার
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from Node.js Server!', status: 'running' }));
  } else if (req.url === '/async-data') {
    // অ্যাসিঙ্ক্রোনাস নন-ব্লকিং অপারেশন সিমুলেশন
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ data: 'Fetched asynchronously without blocking others!' }));
    }, 1000);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      explanationSteps: [
        {
          step: 1,
          title: "মডিউল ইমপোর্ট",
          description: "কমনজেএস `require('http')` দিয়ে Node.js-এর কোর নেটওয়ার্কিং মডিউল লোড করা হয়।"
        },
        {
          step: 2,
          title: "ইভেন্ট-ড্রিভেন হ্যান্ডলার",
          description: "প্রতিটি ইনকামিং রিকোয়েস্টে `createServer` কলব্যাক ট্রিগার হয়।"
        },
        {
          step: 3,
          title: "নন-ব্লকিং এক্সিকিউশন",
          description: "অ্যাসিঙ্ক টাস্ক চলার সময় অন্য রিকোয়েস্টগুলো কোনো প্রকার ল্যাগ ছাড়া রেসপন্স পায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Netflix & LinkedIn API Gateway",
        description: "Netflix তাদের ক্লায়েন্ট ও মাইক্রোসার্ভিসের মাঝের লেয়ারে Node.js ব্যবহার করে স্টার্টআপ টাইম ৭০% কমিয়েছে এবং কনকারেন্ট রিকোয়েস্ট হ্যান্ডলিং বুস্ট করেছে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না 'Node.js একটি প্রোগ্রামিং ভাষা'। স্পষ্ট করে বলুন এটি V8 ও Libuv দ্বারা চালিত একটি জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট।",
      deliveryStrategy: "সংজ্ঞা -> ৩টি স্তম্ভ (Single-Threaded, Event-Driven, Non-blocking I/O) -> Libuv ও V8 এর ভূমিকা -> কোন কাজে সেরা তা বলুন।",
      avoidSaying: [
        {
          wrong: "Node.js হলো ব্যাকএন্ড ফ্রেমওয়ার্ক বা প্রোগ্রামিং ল্যাঙ্গুয়েজ।",
          right: "Node.js একটি জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট (Runtime Environment) যা ব্রাউজারের বাইরে সার্ভার-সাইডে কোড রান করায়।"
        }
      ]
    },
    quickRevision: [
      "Node.js = V8 JavaScript Engine + Libuv C++ Library + Core APIs।",
      "Single-Threaded Event Loop দিয়ে নন-ব্লকিং I/O পরিচালনা করে।",
      "I/O-ইনটেনসিভ ও রিয়েল-টাইম অ্যাপ্লিকেশনের জন্য অত্যন্ত দক্ষ।",
      "ফাইল ও ডাটাবেস অপারেশন ব্যাকগ্রাউন্ডে অফলোড করে থ্রেড ফ্রি রাখে।"
    ],
    followUpQuestions: [
      {
        question: "Explain the Node.js architecture.",
        targetId: "nodejs-architecture-explained",
        shortHint: "V8, Libuv, C++ Bindings এবং Event Loop এর গঠন।"
      }
    ],
    tags: ["Node.js", "V8", "Libuv", "Event Loop", "Runtime"]
  },
  {
    id: "nodejs-main-features",
    slug: "nodejs-main-features",
    question: "What are the main features of Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Node.js-এর প্রধান বৈশিষ্ট্যগুলো হলো: **১. Asynchronous & Non-Blocking I/O**, **২. Single-Threaded Event-Driven Architecture**, **৩. High Performance via Google V8**, **৪. Rich Ecosystem via NPM**, **৫. Native Stream & Buffer Support**, **৬. Cross-Platform & Full-Stack Unification** (একই ভাষায় ফ্রন্টএন্ড ও ব্যাকএন্ড লেখা যায়), এবং **৭. No Data Buffering** (ডেটা চাঙ্ক আকারে স্ট্রিম হয়)।",
    easyExplanation: "Node.js কেন বিশ্বজুড়ে এত জনপ্রিয়? ৭টি সহজ পয়েন্ট:\n১. **দেরি করায় না**: ডাটাবেস বা ফাইল অপারেশনের জন্য অপেক্ষা করে বসে থাকে না (Non-blocking)।\n২. **কম খরচে বেশি সার্ভিস**: একটি মাত্র মেইন থ্রেড দিয়ে লাখ লাখ রিকোয়েস্ট হ্যান্ডেল করে মেমরি বাঁচায়।\n৩. **সুপার ফাস্ট স্পিড**: গুগলের ক্রোম ব্রাউজারের V8 ইঞ্জিন দিয়ে চলে।\n৪. **বিশাল প্যাকেজ ভাণ্ডার (NPM)**: যেকোনো ফিচারের জন্য রেডিমেড লাইব্রেরি পাওয়া যায়।\n৫. **এক ভাষায় পুরো ওয়েব**: JavaScript জানলে ফ্রন্টএন্ড ও ব্যাকএন্ড দুটিই তৈরি করা যায়।\n৬. **স্ট্রিমিং পাওয়ার**: নেটফ্লিক্স বা ইউটিউবের মতো ভিডিও বা ফাইল ছোট ছোট টুকরো করে পাঠাতে পারে।",
    interviewAnswer: "The core features of Node.js include:\n1. **Asynchronous and Non-Blocking I/O**: APIs are non-blocking; the execution continues immediately while I/O operations are handled in the background.\n2. **Single-Threaded Event-Driven Loop**: Employs an event-driven architecture that scales massively under concurrent I/O loads without thread-spawning overhead.\n3. **Blazing Fast Execution (V8 Engine)**: Compiles JavaScript directly into machine code via JIT compilation.\n4. **Unified Language Stack**: JavaScript is used across client, server, and database (e.g. JSON/MongoDB).\n5. **Streams and Buffers**: Native support for processing binary and chunked data streams with minimal memory overhead.\n6. **NPM Ecosystem**: Access to over 2 million open-source reusable packages.\n7. **Cross-Platform**: Runs natively on Linux, macOS, and Windows.",
    detailedExplanation: {
      whatItIs: "Node.js প্ল্যাটফর্মের মূল শক্তি এবং আর্কিটেকচারাল সুবিধাসমূহ।",
      whyItExists: "ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট দ্রুততর, মেমরি-এফিশিয়েন্ট এবং কনকারেন্ট I/O-এর জন্য উপযোগী করতে।",
      howItWorks: "V8 ইঞ্জিন কোড রান করে, Libuv অ্যাসিঙ্ক I/O প্রসেস করে, আর NPM ইকোসিস্টেম মডিউলারিটি নিশ্চিত করে।",
      whenToUse: "যেকোনো হাই-কনকারেন্সি, ডেটা-স্ট্রিমিং বা রিয়েল-টাইম প্রজেক্ট শুরু করার সময় এই ফিচারগুলো বিবেচনা করতে হয়।",
      keyPoints: [
        "Non-blocking I/O prevents server freezing.",
        "Single-threaded model avoids deadlocks and context-switching overhead.",
        "High throughput with low memory footprint.",
        "Stream-oriented architecture for large payloads."
      ]
    },
    realWorldExamples: [
      {
        title: "Uber Dispatch System",
        description: "Uber তাদের রিয়েল-টাইম ড্রাইভার ম্যাচিং ও জিও-লোকেশন আপডেটে Node.js-এর অ্যাসিঙ্ক এবং লাইটওয়েট ইভেন্ট হ্যান্ডলিং ব্যবহার করে।"
      }
    ],
    interviewTips: {
      tip: "ফিচারগুলোর নাম বলার পাশাপাশি প্রতিটির একটি করে সুবিধা (যেমন: 'Streams minimizes memory usage') উল্লেখ করুন।",
      deliveryStrategy: "Top 4 ফিচার হাইলাইট করুন -> V8 ও Libuv উল্লেখ করুন -> বিজনেস ভ্যালু (একই ভাষায় ফ্রন্টএন্ড-ব্যাকএন্ড) দিয়ে শেষ করুন।",
      avoidSaying: [
        {
          wrong: "Node.js মাল্টি-থ্রেডেড তাই এটি খুব ফাস্ট।",
          right: "Node.js এর জাভাস্ক্রিপ্ট এক্সিকিউশন সিঙ্গল-থ্রেডেড, কিন্তু Libuv ব্যাকগ্রাউন্ডে মাল্টি-থ্রেডেড থ্রেড পুল ও কার্নেল ব্যবহার করে অ্যাসিঙ্ক I/O ফাস্ট করে।"
        }
      ]
    },
    quickRevision: [
      "Non-blocking I/O + Single-Threaded Event Loop।",
      "গুগল V8 ইঞ্জিনের মাধ্যমে দ্রুত মেশিন কোডে রূপান্তর।",
      "NPM: বিশ্বের বৃহত্তম ওপেন সোর্স প্যাকেজ রেজিস্ট্রি।",
      "নেটিভ স্ট্রিম ও বাফার সুবিধা মেমরি লিক ও স্পাইক রোধ করে।"
    ],
    followUpQuestions: [
      {
        question: "How does Node.js achieve non-blocking Input/Output?",
        targetId: "nodejs-achieve-non-blocking-io",
        shortHint: "Libuv, Event Demultiplexer ও Reactor Pattern।"
      }
    ],
    tags: ["Node.js", "Features", "V8", "NPM", "Streams"]
  },
  {
    id: "nodejs-achieve-non-blocking-io",
    slug: "nodejs-achieve-non-blocking-io",
    question: "How does Node.js achieve non-blocking Input/Output?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Node.js তার নন-ব্লকিং I/O অর্জন করে **Reactor Pattern** এবং **Libuv** C++ লাইব্রেরির মাধ্যমে। যখন কোডে কোনো I/O অপারেশন (যেমন ফাইল রিড, ডাটাবেস কোয়েরি, নেটওয়ার্ক কল) শুরু হয়, Node.js মেইন থ্রেড থামিয়ে অপেক্ষা করে না; সে কাজটি অপারেটিং সিস্টেমের নন-ব্লকিং কার্নেল (যেমন Linux-এ `epoll`, macOS-এ `kqueue`, Windows-এ `IOCP`) অথবা Libuv-এর ইন্টারনাল **Thread Pool**-এ হ্যান্ডওভার করে দেয়। কাজটি ব্যাকগ্রাউন্ডে শেষ হলে কলব্যাকটি ইভেন্ট কিউতে পাঠানো হয় এবং ইভেন্ট লুপ সুযোগ মতো তা কল স্ট্যাকে পুশ করে এক্সিকিউট করে।",
    easyExplanation: "সহজ উপমা:\nআপনি যখন কোনো কুরিয়ার সার্ভিসে পার্সেল ড্রপ করতে যান:\n- **ব্লকিং I/O (খারাপ উপায়)**: আপনি কাউন্টারে দাঁড়িয়ে থাকলেন যতক্ষণ না পার্সেলটি ঢাকা থেকে চট্টগ্রাম পৌঁছে সাইন হচ্ছে। এতে পেছনের সব মানুষ লাইনে দাঁড়িয়ে আটকে থাকবে।\n- **নন-ব্লকিং I/O (Node.js উপায়)**: আপনি কাউন্টারে পার্সেল জমা দিয়ে একটি ট্র্যাকিং স্লিপ (Promise/Callback) নিয়ে চলে এলেন এবং অন্যান্য কাজ করছেন। পার্সেল ডেলিভারি হলে তারা আপনার ফোনে SMS দিয়ে জানিয়ে দেবে (Event/Callback)। লাইনের অন্য মানুষদের এক সেকেন্ডও অপেক্ষা করতে হলো না!",
    interviewAnswer: "Node.js achieves non-blocking I/O through the **Reactor Pattern** implemented via the **Libuv** library. When an asynchronous I/O operation (like file reading or network socket communication) is initiated, Node.js registers the request with Libuv and immediately returns control to the Call Stack. For network operations, Libuv delegates to OS-level asynchronous system notification interfaces such as `epoll` on Linux, `kqueue` on macOS, or `IOCP` on Windows. For blocking operations that the OS kernel cannot do asynchronously (like disk I/O and DNS lookups), Libuv offloads them to its internal worker thread pool. Once complete, completion events are queued in the Event Loop phases and executed on the main thread.",
    detailedExplanation: {
      whatItIs: "I/O অপারেশনের সময় মেইন থ্রেডকে ব্লক না করে সমান্তরালভাবে অন্য রিকোয়েস্ট প্রসেস করার ক্ষমতা।",
      whyItExists: "প্রতিটি কানেকশনের জন্য আলাদা থ্রেড তৈরি করার বিশাল মেমরি অপচয় (Thread overhead) দূর করতে।",
      howItWorks: "১. রিকোয়েস্ট কল স্ট্যাকে আসে -> ২. Libuv-এ ডেলিগেট হয় -> ৩. কার্নেল/থ্রেড পুলে কাজ হয় -> ৪. ইভেন্ট লুপ কলব্যাক এক্সিকিউট করে।",
      whenToUse: "ফাইল I/O, ডাটাবেস কল, ৩য় পক্ষের API রিকোয়েস্টের মতো দীর্ঘ সময় নেওয়া সব অপারেশনে।",
      keyPoints: [
        "Network I/O utilizes native OS kernel async mechanisms (epoll/kqueue).",
        "File & DNS I/O utilizes Libuv thread pool (default 4 threads).",
        "Main thread is never blocked waiting for external responses.",
        "Reactor Pattern provides the architectural backbone."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');

console.log('1. শুরুর লগ (Sync)');

// নন-ব্লকিং অ্যাসিঙ্ক্রোনাস ফাইল রিড
fs.readFile('large-file.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error:', err.message);
  console.log('3. ফাইল রিড শেষ (Async Callback)');
});

console.log('2. শেষের লগ (Sync - ফাইল রিড শেষ হওয়ার আগেই প্রিন্ট হবে!)');

// আউটপুট সিকোয়েন্স:
// 1. শুরুর লগ (Sync)
// 2. শেষের লগ (Sync - ফাইল রিড শেষ হওয়ার আগেই প্রিন্ট হবে!)
// 3. ফাইল রিড শেষ (Async Callback)`,
      explanationSteps: [
        {
          step: 1,
          title: "মেইন থ্রেড ফাস্ট এক্সিকিউট হয়",
          description: "লগ ১ এবং লগ ২ তাত্ক্ষণিকভাবে কল স্ট্যাকে রান হয়ে শেষ হয়ে যায়।"
        },
        {
          step: 2,
          title: "ফাইল রিড ব্যাকগ্রাউন্ডে অফলোড",
          description: "Libuv থ্রেড পুল ব্যাকগ্রাউন্ডে ডিস্ক থেকে ফাইল পড়ে।"
        },
        {
          step: 3,
          title: "ইভেন্ট লুপ কলব্যাক চালায়",
          description: "ফাইল রিড সম্পন্ন হলে ৩ নম্বর লগটি কনসোলে প্রিন্ট হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "High-Traffic E-commerce Checkout",
        description: "পেমেন্ট গেটওয়ে, ইনভেন্টরি ডাটাবেস এবং ইমেইল সার্ভিসে একাধিক নেটওয়ার্ক কল করার সময় নন-ব্লকিং I/O-এর কারণে সার্ভার সেকেন্ডে হাজার হাজার অর্ডার হ্যান্ডেল করতে পারে।"
      }
    ],
    interviewTips: {
      tip: "`Reactor Pattern`, `Libuv`, `epoll/kqueue`, এবং `Thread Pool` শব্দগুলো সঠিকভাবে উচ্চারণ করুন।",
      deliveryStrategy: "নন-ব্লকিং কী -> Libuv কীভাবে ব্যাকগ্রাউন্ডে পাঠায় -> কার্নেল vs থ্রেড পুল পার্থক্য -> আউটপুট ফ্লো তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "জাভাস্ক্রিপ্ট মাল্টিপল ব্যাকগ্রাউন্ড থ্রেড তৈরি করে ফাইল পড়ে।",
          right: "জাভাস্ক্রিপ্ট নিজে সিঙ্গল-থ্রেডেড; Libuv এর C++ থ্রেড পুল এবং ওএস কার্নেল ব্যাকগ্রাউন্ডে কাজটি করে।"
        }
      ]
    },
    quickRevision: [
      "নন-ব্লকিং I/O = অপারেশন চলাকালে মেইন থ্রেড অন্য রিকোয়েস্ট প্রসেস করতে পারে।",
      "Network I/O: OS Kernel (epoll, kqueue, IOCP) দিয়ে পরিচালিত।",
      "File I/O & DNS: Libuv Thread Pool (default 4 threads) দিয়ে পরিচালিত।",
      "Reactor Pattern নিশ্চিত করে ইভেন্ট চালিত স্কেলেবিলিটি।"
    ],
    followUpQuestions: [
      {
        question: "How does Node.js handle asynchronous operations internally?",
        targetId: "nodejs-handle-async-internals",
        shortHint: "Call Stack, Libuv Thread Pool, Event Queue এবং Event Loop।"
      }
    ],
    tags: ["Node.js", "Non-Blocking", "Libuv", "I/O", "Reactor Pattern"]
  },
  {
    id: "nodejs-sync-vs-async-programming",
    slug: "nodejs-sync-vs-async-programming",
    question: "What is the difference between synchronous and asynchronous programming in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**Synchronous (ব্লকিং)** প্রোগ্রামিংয়ে কোডের প্রতিটি লাইন ধারাবাহিকভাবে একটার পর একটা এক্সিকিউট হয়। একটি লাইনের কাজ (যেমন বড় ফাইল পড়া) শেষ না হওয়া পর্যন্ত পরবর্তী লাইনের এক্সিকিউশন সম্পূর্ণ আটকে থাকে (Thread Blocked)। অপরদিকে, **Asynchronous (নন-ব্লকিং)** প্রোগ্রামিংয়ে দীর্ঘমেয়াদী কাজগুলো ব্যাকগ্রাউন্ডে শুরু করে দিয়ে মেইন থ্রেড সাথে সাথে পরের লাইনে চলে যায় এবং কাজ শেষ হলে Callback, Promise, বা `async/await`-এর মাধ্যমে রেজাল্ট প্রসেস করে।",
    easyExplanation: "বাস্তব জীবনের উদাহরণ:\n\n১. **Synchronous (ব্যাংকের লাইন)**:\nব্যাংকের ক্যাশ কাউন্টারে একজন গ্রাহকের টাকা জমা নেওয়া শেষ না হওয়া পর্যন্ত পেছনের কোনো ব্যক্তি সার্ভিস পাবে না। সামনের গ্রাহক আটকে গেলে পুরো ব্যাংক লাইন থেমে যায়।\n\n২. **Asynchronous (ফাস্টফুড টোকেন সিস্টেম)**:\nআপনি কাউন্টারে অর্ডার দিলেন, ক্যাশিয়ার আপনাকে একটি টোকেন স্লিপ দিয়ে বলল 'পাশের ওয়েটিং জোনে বসুন'। ক্যাশিয়ার সাথে সাথে পরবর্তী গ্রাহকের অর্ডার নেওয়া শুরু করল। আপনার বার্গার তৈরি হলে টোকেন নম্বর ডেকে খাবার বুঝিয়ে দিল!",
    interviewAnswer: "In Node.js, synchronous programming is blocking: execution happens strictly line-by-line, and if an operation takes time (like reading a large file with `fs.readFileSync`), the entire Call Stack is blocked, preventing any other requests from being handled. Asynchronous programming is non-blocking: long-running tasks are initiated and offloaded to Libuv/OS kernel, while the main thread immediately proceeds to execute subsequent code. When the asynchronous task completes, its callback, Promise resolution, or `async/await` continuation is placed onto the task queue and picked up by the Event Loop once the Call Stack is clear.",
    detailedExplanation: {
      whatItIs: "কোড এক্সিকিউশন ফ্লোতে ব্লকিং বনাম নন-ব্লকিং মেকানিজম।",
      whyItExists: "সিঙ্গল-থ্রেডেড এনভায়রনমেন্টে রেসপন্সিভনেস এবং হাই থ্রুপুট বজায় রাখার জন্য অ্যাসিঙ্ক মেকানিজম অপরিহার্য।",
      howItWorks: "সিঙ্ক কোড সরাসরি Call Stack ব্লক করে; অ্যাসিঙ্ক কোড Web APIs / Libuv-এ অফলোড হয়ে Microtask/Task Queue হয়ে ফেরে।",
      whenToUse: "সার্ভার স্টার্টআপ কনফিগ লোড করতে সিঙ্ক গ্রহণযোগ্য হলেও, প্রোডাকশন API রিকোয়েস্টে সর্বদা অ্যাসিঙ্ক কোড ব্যবহার করতে হবে।",
      keyPoints: [
        "Synchronous = Blocking (Stops Event Loop).",
        "Asynchronous = Non-Blocking (High concurrency).",
        "Avoid *Sync methods (like fs.readFileSync) inside HTTP request handlers.",
        "Async is managed via Callbacks, Promises, and async/await."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');

// ১. Synchronous (Blocking) উদাহরণ - সার্ভারকে ফ্রিজ করে দেয়
console.log('--- SYNC শুরু ---');
try {
  // মেমরি ও থ্রেড ব্লক করে সম্পূর্ণ ফাইল রিড করবে
  const syncData = fs.readFileSync('config.json', 'utf8');
  console.log('Sync Data read successfully');
} catch (err) {
  console.error('Sync Error:', err.message);
}
console.log('--- SYNC শেষ (অন্য সব রিকোয়েস্ট এতক্ষণ আটকে ছিল) ---');


// ২. Asynchronous (Non-Blocking) উদাহরণ - সেরা উপায়
console.log('\n--- ASYNC শুরু ---');
fs.promises.readFile('config.json', 'utf8')
  .then((data) => {
    console.log('Async Data read successfully via Promise');
  })
  .catch((err) => {
    console.error('Async Error:', err.message);
  });
console.log('--- ASYNC পরের কোড (তাত্ক্ষণিক রান হলো, কোনো ব্লক নেই!) ---');`,
      explanationSteps: [
        {
          step: 1,
          title: "Sync মেথড ব্লক করে",
          description: "`readFileSync` শেষ না হওয়া পর্যন্ত জাভাস্ক্রিপ্ট ইঞ্জিন পরের লাইনে যেতে পারে না।"
        },
        {
          step: 2,
          title: "Async মেথড নন-ব্লকিং",
          description: "`fs.promises.readFile` ব্যাকগ্রাউন্ডে চলতে থাকে এবং মেইন থ্রেড মুক্ত থাকে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Database Query Handling",
        description: "একটি ই-কমার্স সাইটে ১০,০০০ ইউজার একসাথে প্রোডাক্ট সার্চ করলে সিঙ্ক সিস্টেমে সার্ভার ক্র্যাশ করত, কিন্তু অ্যাসিঙ্ক সিস্টেমে প্রতিটি ডাটাবেস কোয়েরি নন-ব্লকিংভাবে প্রসেস হয়।"
      }
    ],
    interviewTips: {
      tip: "স্পষ্ট করে বলুন কেন Express API হ্যান্ডলারে কখনো `readFileSync` ব্যবহার করা মারাত্মক ভুল (কারণ তা অন্য সব ইউজারের রিকোয়েস্ট ব্লক করে দেয়)।",
      deliveryStrategy: "সংজ্ঞা -> ব্লকিং বনাম নন-ব্লকিং পার্থক্য -> কোড উপমা -> প্রোডাকশন টিপস।",
      avoidSaying: [
        {
          wrong: "অ্যাসিঙ্ক কোড মাল্টিপল CPU কোরে একই সাথে দুটো লাইন কোড এক্সিকিউট করে।",
          right: "মেইন জাভাস্ক্রিপ্ট থ্রেড সিঙ্গল-থ্রেডেডই থাকে; অ্যাসিঙ্ক কোড I/O ব্যাকগ্রাউন্ডে অফলোড করে নন-ব্লকিং আচরণ দেয়।"
        }
      ]
    },
    quickRevision: [
      "Sync = ব্লকিং, লাইন বাই লাইন অপেক্ষা করে, সার্ভার হ্যাং করতে পারে।",
      "Async = নন-ব্লকিং, ব্যাকগ্রাউন্ডে অফলোড করে কলব্যাক/প্রমিজের মাধ্যমে কাজ করে।",
      "প্রোডাকশন হ্যান্ডলারে কখনই `fs.*Sync` মেথড ব্যবহার করা যাবে না।",
      "আধুনিক কোডে Callback Hell এড়াতে `async/await` ব্যবহার করা উত্তম।"
    ],
    followUpQuestions: [
      {
        question: "What are the differences between fs.readFile and fs.readFileSync?",
        targetId: "nodejs-fs-readfile-vs-readfilesync",
        shortHint: "মেমরি বাফারিং এবং থ্রেড ব্লকিং আচরণ।"
      }
    ],
    tags: ["Node.js", "Sync vs Async", "Blocking", "Non-Blocking", "Promises"]
  },
  {
    id: "nodejs-handle-async-internals",
    slug: "nodejs-handle-async-internals",
    question: "How does Node.js handle asynchronous operations internally?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Node.js অভ্যন্তরীণভাবে অ্যাসিঙ্ক্রোনাস কাজ পরিচালনা করতে ৪টি মূল কম্পোনেন্টের কম্বিনেশন ব্যবহার করে: **১. V8 Call Stack** (যেখানে সিনক্রোনাস কোড রান হয়), **২. Libuv Thread Pool & OS Kernel** (যেখানে ফাইল, DNS বা নেটওয়ার্ক I/O ব্যাকগ্রাউন্ডে অফলোড হয়), **৩. Event Queues (Microtask Queue & Task Queue)** (যেখানে সমাপ্ত কাজের কলব্যাক জমা হয়), এবং **৪. Event Loop** (যা কল স্ট্যাক খালি হলে কিউ থেকে কলব্যাক এনে স্ট্যাকে পুশ করে)।",
    easyExplanation: "ভেতরের মেকানিজম ৪টি ধাপে ঘটে:\n\n১. **ধাপ ১ (Call Stack)**: কোড যখন কোনো অ্যাসিঙ্ক মেথড (যেমন `fs.readFile` বা `fetch`) পায়, সে কাজটি Libuv-এর হাতে দিয়ে সাথে সাথে স্ট্যাক খালি করে দেয়।\n২. **ধাপ ২ (Libuv / OS)**: Libuv ব্যাকগ্রাউন্ডে তার থ্রেড পুলে অথবা অপারেটিং সিস্টেমের নন-ব্লকিং কার্নেলে কাজটি করতে থাকে।\n৩. **ধাপ ৩ (Callback Queue)**: কাজ শেষ হওয়া মাত্রই Libuv কলব্যাক ফাংশনটিকে উপযুক্ত Event Queue-তে পাঠিয়ে দেয়।\n৪. **ধাপ ৪ (Event Loop)**: ইভেন্ট লুপ সারাক্ষণ চোখ রাখে। যখন দেখে কল স্ট্যাক ফাঁকা এবং কোনো সিঙ্ক কোড চলছে না, তখন সে কিউ থেকে কলব্যাকটি নিয়ে কল স্ট্যাকে দিয়ে এক্সিকিউট করায়!",
    interviewAnswer: "Internally, Node.js delegates asynchronous operations through a multi-tier pipeline:\n1. **V8 Call Stack**: Executes JavaScript synchronously. When an async API is invoked, its C++ binding is executed and delegated to Libuv.\n2. **Libuv Background Execution**: For network I/O, Libuv utilizes non-blocking OS kernel polling (`epoll`, `kqueue`). For disk I/O, crypto, and DNS, it schedules the work onto the Libuv worker thread pool.\n3. **Event Queues**: Upon completion, the result and its associated callback are pushed to the appropriate event queue (Microtask Queue for `process.nextTick` and Promises; Phase-specific Task Queues for timers and I/O).\n4. **Event Loop Coordination**: The Event Loop continuously monitors the Call Stack. As soon as the stack is empty, it processes queues in strict priority order, pushing callbacks back onto the V8 stack for execution.",
    detailedExplanation: {
      whatItIs: "Node.js-এর ব্যাকগ্রাউন্ড অ্যাসিঙ্ক্রোনাস প্রসেসিং পাইপলাইন।",
      whyItExists: "সিঙ্গল জাভাস্ক্রিপ্ট থ্রেড দিয়ে কীভাবে শত শত ব্যাকগ্রাউন্ড অপারেশন হ্যান্ডেল হয় তা নির্ধারণ করতে।",
      howItWorks: "Call Stack -> C++ Bindings -> Libuv (Thread Pool / OS Kernel) -> Task Queues -> Event Loop -> Call Stack।",
      whenToUse: "পারফরম্যান্স অপটিমাইজেশন, মেমরি লিক ডিবাগিং এবং ইন্টারভিউ টেকনিক্যাল রাউন্ডে।",
      keyPoints: [
        "JavaScript thread only executes code, never waits for I/O.",
        "Microtask Queue has higher priority than Macrotask Queue.",
        "process.nextTick() queue is processed immediately after the current operation.",
        "Libuv thread pool size defaults to 4 and is configurable via UV_THREADPOOL_SIZE."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// অ্যাসিঙ্ক ইন্টারনাল প্রায়োরিটি অর্ডার ডেমো
console.log('1. Call Stack (Sync)');

setTimeout(() => {
  console.log('5. Timer Queue (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise Microtask Queue');
});

process.nextTick(() => {
  console.log('2. process.nextTick (Highest Priority Microtask)');
});

setImmediate(() => {
  console.log('6. Check Phase (setImmediate)');
});

console.log('1b. Call Stack End (Sync)');

// আউটপুট সিকোয়েন্স:
// 1. Call Stack (Sync)
// 1b. Call Stack End (Sync)
// 2. process.nextTick
// 3. Promise Microtask Queue
// 5. Timer Queue / 6. Check Phase`,
      explanationSteps: [
        {
          step: 1,
          title: "সিঙ্ক কোড আগে চলে",
          description: "কল স্ট্যাকে থাকা সব সিঙ্ক কোড সবার আগে এক্সিকিউট হয়।"
        },
        {
          step: 2,
          title: "Microtasks প্রায়োরিটি পায়",
          description: "`process.nextTick` এবং `Promise` কিউ ম্যাক্রোটাস্কের আগে রান হয়।"
        },
        {
          step: 3,
          title: "Event Loop ফেজ এক্সিকিউশন",
          description: "এরপর টাইমার ও চেক ফেজের কলব্যাকগুলো স্ট্যাকে পুশ হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Cryptographic Password Hashing",
        description: "`crypto.pbkdf2` কল করলে তা মূল ইভেন্ট লুপ না থামিয়ে Libuv থ্রেড পুলে চলে যায় এবং কমপ্লিট হলে কলব্যাক ফায়ার করে।"
      }
    ],
    interviewTips: {
      tip: "Microtask Queue (Promises, nextTick) বনাম Macrotask Queue (setTimeout, I/O) এর প্রায়োরিটি সিকোয়েন্স উল্লেখ করুন।",
      deliveryStrategy: "৪টি কম্পোনেন্ট ডায়ালগ আকারে বলুন -> কোডের ফ্লো দেখান -> `process.nextTick` এর প্রায়োরিটি বুঝিয়ে চমকে দিন।",
      avoidSaying: [
        {
          wrong: "`setTimeout(fn, 0)` মানে ০ মিলিসেকেন্ডেই কোড রান হয়ে যাবে।",
          right: "`setTimeout(fn, 0)` কলব্যাকটি কিউতে জমা হয়, কল স্ট্যাক সম্পূর্ণ খালি হওয়ার পর ইভেন্ট লুপের পরবর্তী টিক-এ তা রান হয়।"
        }
      ]
    },
    quickRevision: [
      "Call Stack -> Libuv/OS -> Task Queue -> Event Loop -> Call Stack।",
      "Microtasks (`process.nextTick`, Promises) ম্যাক্রোটাস্কের চেয়ে আগে চলে।",
      "Network I/O ওএস কার্নেলে চলে, Disk I/O Libuv থ্রেড পুলে চলে।",
      "ইভেন্ট লুপ কখনই চলমান সিঙ্ক কোডকে ইন্টারাপ্ট করে না।"
    ],
    followUpQuestions: [
      {
        question: "What are the phases in Node.js event loop?",
        targetId: "nodejs-event-loop-phases",
        shortHint: "Timers, Pending Callbacks, Poll, Check, Close phases."
      }
    ],
    tags: ["Node.js", "Internals", "Libuv", "Call Stack", "Microtasks"]
  },
  {
    id: "nodejs-process-thread-worker-thread",
    slug: "nodejs-process-thread-worker-thread",
    question: "What are a process, a thread, and a worker thread?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "**১. Process (প্রসেস)**: অপারেটিং সিস্টেমে চলমান একটি সম্পূর্ণ স্বাধীন প্রোগ্রাম যার নিজস্ব ডেডিকেটেড মেমরি স্পেস, PID (Process ID) এবং রিসোর্স থাকে।\n**২. Thread (থ্রেড)**: একটি প্রসেসের মধ্যকার সবচেয়ে ছোট এক্সিকিউশন ইউনিট। একই প্রসেসের একাধিক থ্রেড পরস্পরের মেমরি স্পেস শেয়ার করতে পারে।\n**৩. Worker Thread (ওয়ার্কার থ্রেড)**: Node.js-এর `worker_threads` মডিউলের মাধ্যমে তৈরি করা থ্রেড, যা মূল ইভেন্ট লুপকে ব্লক না করে সমান্তরালে (Parallel) ভারী CPU-ইনটেনসিভ কাজ (যেমন ইমেজ প্রসেসিং, কৃত্রিম বুদ্ধিমত্তা বা ক্রিপ্টোগ্রাফি) আলাদা থ্রেডে রান করতে দেয় এবং `SharedArrayBuffer` বা মেসেজ পাসিং দিয়ে মেমরি শেয়ার করে।",
    easyExplanation: "বাস্তব জীবনের উদাহরণ:\n\n১. **Process (একটি সম্পূর্ণ ফ্যাক্টরি)**:\nএকটি ফ্যাক্টরির নিজস্ব জমি, সীমানা প্রাচীর ও নিজস্ব বাজেট আছে। এক ফ্যাক্টরি সরাসরি অন্য ফ্যাক্টরির ভেতরের জিনিস ব্যবহার করতে পারে না। Node.js রান করলে একটি মেইন প্রসেস তৈরি হয়।\n\n২. **Thread (ফ্যাক্টরির ভেতরের একজন শ্রমিক)**:\nফ্যাক্টরির একই ছাদের নিচে একাধিক শ্রমিক একই কাঁচামাল (মেমরি) ব্যবহার করে কাজ করে।\n\n৩. **Worker Thread (বিশেষ বিশেষজ্ঞ কর্মী)**:\nমেইন ফ্যাক্টরির ম্যানেজার (ইভেন্ট লুপ) যখন খুব ভারী কোনো জটিল নকশার কাজ পায়, সে দৈনন্দিন কাজ না থামিয়ে পাশের টেবিলে একজন স্পেশাল ওয়ার্কারকে বসিয়ে দেয় কাজটা আলাদা করে শেষ করার জন্য!",
    interviewAnswer: "1. **Process**: An isolated execution instance of a program managed by the OS, equipped with its own dedicated memory space, environment variables, and PID. Node.js typically runs as a single process (`process` global).\n2. **Thread**: The smallest schedulable unit of CPU execution within a process. Multiple threads within the same process share heap memory, which makes context switching faster but introduces potential race conditions.\n3. **Worker Thread**: Introduced via the `worker_threads` module in Node.js, worker threads allow developers to run CPU-intensive JavaScript execution in parallel across multiple OS threads. Unlike the `cluster` module (which spawns separate processes with isolated memory), worker threads run within the same process and can share memory using `SharedArrayBuffer` and `MessagePort`.",
    detailedExplanation: {
      whatItIs: "কম্পিউটিংয়ের মৌলিক ৩টি এক্সিকিউশন ইউনিট এবং Node.js-এ তাদের প্রয়োগ।",
      whyItExists: "CPU-বাউন্ড অপারেশনের কারণে Node.js-এর মেইন ইভেন্ট লুপ ফ্রিজ হওয়া ঠেকাতে।",
      howItWorks: "Worker Threads তৈরি হলে নতুন V8 আইসোলেট (Isolate) ও Libuv কনটেক্সট তৈরি হয় কিন্তু একই প্রসেস মেমরি শেয়ার করতে পারে।",
      whenToUse: "Process: পুরো অ্যাপ্লিকেশনের লাইফসাইকেলে; Worker Thread: ভিডিও কনভার্ট, হেভি ক্যালকুলেশন, মেশিন লার্নিং বা ফাইল কম্প্রেশনে।",
      keyPoints: [
        "Process = Isolated memory, heavy context switch.",
        "Thread = Shared memory within a process, lightweight.",
        "Worker Threads = Official Node.js solution for CPU-bound tasks.",
        "Do not use Worker Threads for I/O operations (Event loop already handles I/O)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// main.js - Worker Thread তৈরি ও মেসেজ আদান-প্রদান
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  console.log('Main Thread: ভারী হিসাব শুরু করার জন্য Worker তৈরি করছি...');
  
  const worker = new Worker(__filename, {
    workerData: { num: 42 }
  });

  worker.on('message', (result) => {
    console.log('Main Thread: Worker থেকে রেজাল্ট পেয়েছি ->', result);
  });

  worker.on('error', (err) => console.error(err));
  
  console.log('Main Thread: অন্য রিকোয়েস্ট প্রসেস করার জন্য মুক্ত!');
} else {
  // Worker Thread-এর ভেতরে এক্সিকিউট হওয়া কোড (CPU Heavy Math)
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const result = fibonacci(workerData.num);
  // মেইন থ্রেডে রেজাল্ট পাঠানো
  parentPort.postMessage(result);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "isMainThread চেক",
          description: "মেইন থ্রেড থেকে Worker ইন্সট্যান্স তৈরি করা হয়।"
        },
        {
          step: 2,
          title: "মেমরি নন-ব্লকিং প্যারালাল রান",
          description: "Worker থ্রেড ব্যাকগ্রাউন্ডে CPU ইনটেনসিভ ফিবোনাচ্চি হিসাব করে।"
        },
        {
          step: 3,
          title: "MessagePort কমিউনিকেশন",
          description: "`parentPort.postMessage` দিয়ে মেইন থ্রেডে নিরাপদে ডাটা পাঠানো হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Image Resizing & Video Transcoding",
        description: "ব্যবহারকারী ছবি আপলোড করলে `worker_threads` দিয়ে ব্যাকগ্রাউন্ডে থাম্বনেইল তৈরি করা হয় যাতে মেইন সার্ভার অন্য ইউজারের রিকোয়েস্টে স্লো না হয়।"
      }
    ],
    interviewTips: {
      tip: "কখন Worker Threads ব্যবহার করবেন (CPU-Bound) এবং কখন করবেন না (I/O-Bound) তা স্পষ্টভাবে তুলে ধরুন।",
      deliveryStrategy: "Process -> Thread -> Worker Thread সংজ্ঞায়ন -> Cluster vs Worker Thread-এর সূক্ষ্ম মেমরি পার্থক্য বলুন।",
      avoidSaying: [
        {
          wrong: "ডাটাবেস কোয়েরি ফাস্ট করতে Worker Thread ব্যবহার করা উচিত।",
          right: "ডাটাবেস কোয়েরি একটি I/O অপারেশন যা Node.js ইভেন্ট লুপ এমনিতেই নন-ব্লকিংভাবে করে। Worker Thread শুধু ভারী CPU ক্যালকুলেশনের জন্য।"
        }
      ]
    },
    quickRevision: [
      "Process = সম্পূর্ণ স্বাধীন প্রোগ্রাম (নিজস্ব মেমরি ও PID)।",
      "Thread = প্রসেসের ক্ষুদ্রতম এক্সিকিউশন ইউনিট (শেয়ার্ড মেমরি)।",
      "Worker Threads = Node.js-এ প্যারালাল CPU-ইনটেনসিভ কাজ করার অফিশিয়াল মেকানিজম।",
      "I/O-এর জন্য Worker Thread প্রয়োজন নেই, শুধু CPU-bound কাজের জন্য।"
    ],
    followUpQuestions: [
      {
        question: "What's the difference between worker threads and the cluster module?",
        targetId: "nodejs-worker-threads-vs-cluster",
        shortHint: "Shared memory (Worker Threads) vs Multi-process scaling (Cluster)।"
      }
    ],
    tags: ["Node.js", "Process", "Thread", "Worker Threads", "CPU-Bound"]
  },

  // ==========================================
  // 🔵 Node Architecture (11 Questions)
  // ==========================================
  {
    id: "nodejs-architecture-explained",
    slug: "nodejs-architecture-explained",
    question: "Explain the Node.js architecture.",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Node.js আর্কিটেকচার মূলত একটি **Layered, Event-Driven, Non-Blocking I/O Architecture**। এর প্রধান ৪টি লেয়ার হলো: **১. JavaScript Application Layer** (যেখানে আমরা কোড লিখি ও Core API ব্যবহার করি), **২. Node.js Bindings (Node API)** (যা জাভাস্ক্রিপ্ট এবং C/C++ কোডের মধ্যে সেতু হিসেবে কাজ করে), **৩. Google V8 Engine** (জাভাস্ক্রিপ্ট কোডকে মেশিন কোডে কম্পাইল করে), এবং **৪. Libuv & Low-level C/C++ Libraries** (যেমন `c-ares`, `zlib`, `OpenSSL`, যা ইভেন্ট লুপ, থ্রেড পুল, নেটওয়ার্কিং ও সিকিউরিটি পরিচালনা করে)।",
    easyExplanation: "একটি আধুনিক গাড়ির ইঞ্জিনের মতো ভাবুন:\n\n১. **স্টিয়ারিং ও ড্যাশবোর্ড (JavaScript Layer)**: যা ড্রাইভার (ডেভেলপার) সরাসরি স্পর্শ করে এবং নির্দেশ দেয়।\n২. **ইলেকট্রিক ওয়্যারিং (Node.js C++ Bindings)**: স্টিয়ারিংয়ের সিগন্যালকে ইঞ্জিনের ভাষায় রূপান্তর করে।\n৩. **টার্বো ইঞ্জিন (Google V8)**: গাড়ির মূল শক্তি যা সুপার ফাস্ট গতিতে কোড এক্সিকিউট করে।\n৪. **হুইল ও সাসপেনশন মেকানিজম (Libuv & Core C++ libs)**: যা ব্যাকগ্রাউন্ডে চাকা ঘুরিয়ে সব অসমতল রাস্তা (I/O, ফাইল, নেটওয়ার্ক) মসৃণভাবে পাড়ি দেয়!",
    interviewAnswer: "The Node.js architecture follows a multi-tier structure designed for high-concurrency and asynchronous I/O:\n1. **Application & Core JavaScript APIs**: The top layer consisting of built-in modules (`fs`, `http`, `crypto`, `stream`) and developer code.\n2. **Node.js C++ Bindings**: Glue code that bridges high-level JavaScript calls to lower-level C++ implementations.\n3. **V8 Engine**: Google's high-performance C++ engine providing the execution context, Call Stack, and Memory Heap with JIT compilation.\n4. **Libuv C Library**: The backbone handling the Event Loop, asynchronous non-blocking I/O abstractions, and the worker thread pool.\n5. **Low-Level Libraries**: `OpenSSL` (cryptography and TLS/SSL), `zlib` (compression), `llhttp` (HTTP parsing), and `c-ares` (DNS resolutions).",
    detailedExplanation: {
      whatItIs: "Node.js রানটাইমের অভ্যন্তরীণ স্ট্রাকচার এবং কম্পোনেন্ট ইন্টিগ্রেশন।",
      whyItExists: "জাভাস্ক্রিপ্টকে ওএস-লেভেল সিস্টেম কল, থ্রেডিং ও নেটওয়ার্কিংয়ের শক্তি প্রদান করতে।",
      howItWorks: "JS Code -> V8 Execution -> C++ Bindings -> Libuv Event Loop & OS Kernel -> Callback Execution।",
      whenToUse: "সিস্টেম আর্কিটেকচার ডিজাইন এবং হাই-পারফরম্যান্স ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ে।",
      keyPoints: [
        "Layer 1: JavaScript Core Modules.",
        "Layer 2: C++ Bindings (Node.js internal APIs).",
        "Layer 3: Google V8 Engine.",
        "Layer 4: Libuv (Event Loop + Thread Pool) + OpenSSL + zlib + c-ares."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Node.js আর্কিটেকচারের বিভিন্ন লেয়ারের ইন্টারঅ্যাকশন ডেমো
const crypto = require('crypto'); // C++ OpenSSL বাইন্ডিং ব্যবহার করে
const os = require('os');         // OS লেভেল মেমরি ও CPU ডাটা আনে
const fs = require('fs');         // Libuv থ্রেড পুলে অফলোড হয়

console.log('CPU Architecture:', os.arch());
console.log('Available Cores:', os.cpus().length);

// OpenSSL এবং Libuv Thread Pool ব্যবহার করে পাসওয়ার্ড হ্যাশ
crypto.pbkdf2('mySecretPassword', 'saltValue', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log('OpenSSL Derived Key (via Libuv Thread Pool):', derivedKey.toString('hex').substring(0, 32) + '...');
});`,
      explanationSteps: [
        {
          step: 1,
          title: "কোর মডিউল ইনভোকেশন",
          description: "`crypto` এবং `fs` মডিউলগুলো জাভাস্ক্রিপ্ট লেয়ারে কল হয়।"
        },
        {
          step: 2,
          title: "C++ বাইন্ডিং ও OpenSSL",
          description: "Node.js বাইন্ডিংসের মাধ্যমে কলটি নেটিভ OpenSSL এবং Libuv-এ পৌঁছায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Enterprise Microservices",
        description: "Node.js আর্কিটেকচারের লাইটওয়েট ফুটের কারণে ডকার কনটেইনারে মাত্র ৫০MB মেমরিতে ফুল প্রোডাকশন মাইক্রোসার্ভিস রান করা যায়।"
      }
    ],
    interviewTips: {
      tip: "V8, Libuv, C++ Bindings, এবং OpenSSL/zlib এই ৪টি কম্পোনেন্ট ডায়ালগে হাইলাইট করুন।",
      deliveryStrategy: "টপ-ডাউন অ্যাপ্রোচ: JS Layer -> C++ Bindings -> V8 + Libuv -> OS Kernel।",
      avoidSaying: [
        {
          wrong: "Node.js নিজেই একটি C++ কম্পাইলার।",
          right: "Node.js একটি রানটাইম যাতে V8 কম্পাইলার ও Libuv লাইব্রেরি ইন্টিগ্রেট করা আছে।"
        }
      ]
    },
    quickRevision: [
      "JS Core Modules -> C++ Bindings -> V8 Engine + Libuv Library।",
      "V8: জাভাস্ক্রিপ্ট কোড এক্সিকিউট করে।",
      "Libuv: ইভেন্ট লুপ ও থ্রেড পুল হ্যান্ডেল করে।",
      "OpenSSL ও zlib সিকিউরিটি ও কম্প্রেশন পরিচালনা করে।"
    ],
    followUpQuestions: [
      {
        question: "How does the event loop work in Node.js?",
        targetId: "nodejs-event-loop-explained",
        shortHint: "Libuv ইভেন্ট লুপের কাজের ধারা।"
      }
    ],
    tags: ["Node.js", "Architecture", "V8", "Libuv", "OpenSSL"]
  },
  {
    id: "nodejs-event-loop-explained",
    slug: "nodejs-event-loop-explained",
    question: "How does the event loop work in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Node.js-এর **Event Loop** হলো একটি নিরবচ্ছিন্ন মনিটরিং লুপ যা **Libuv** লাইব্রেরি দ্বারা পরিচালিত হয়। এর মূল কাজ হলো V8 **Call Stack** এবং ব্যাকগ্রাউন্ড **Event Queues**-এর সমন্বয় করা। যখনই কল স্ট্যাক সম্পূর্ণ ফাঁকা হয়, ইভেন্ট লুপ নির্দিষ্ট ফেজ অনুযায়ী কিউ থেকে অপেক্ষমাণ কলব্যাকগুলো তুলে এনে কল স্ট্যাকে এক্সিকিউট করে। ফলে সিঙ্গল-থ্রেডেড হওয়া সত্ত্বেও কোনো রিকোয়েস্ট ব্লক না হয়ে হাজার হাজার কানেকশন কনকারেন্টলি চলতে পারে।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যস্ত ট্রাফিক মোড়ের চৌকস ট্রাফিক পুলিশের কথা চিন্তা করুন:\n১. মেইন রাস্তায় (Call Stack) গাড়ি চলতে থাকলে পুলিশ অন্য কোনো গলি থেকে গাড়ি ঢুকতে দেয় না।\n২. যখনই মেইন রাস্তা ফাঁকা হয়, পুলিশ পাশের নির্দিষ্ট গলি (Timers Queue, I/O Queue, Check Queue) থেকে ক্রমান্বয়ে গাড়িগুলোকে মেইন রাস্তায় পাস করে দেয়।\n৩. এই ট্রাফিক পুলিশ সারাক্ষণ ঘুরতে থাকে (Loop) এবং নিশ্চিত করে কোনো গাড়ি যেন চিরদিনের জন্য আটকে না থাকে। এই নিরলস ট্রাফিক পুলিশই হলো Node.js-এর Event Loop!",
    interviewAnswer: "The Node.js Event Loop is a single-threaded orchestrator provided by the Libuv library that enables non-blocking asynchronous execution. It operates in a continuous cycle while the application is active. When the V8 Call Stack is executing synchronous JavaScript, the event loop waits. As soon as the Call Stack is empty, the Event Loop iterates through its designated phases (Timers, Pending Callbacks, Idle/Prepare, Poll, Check, and Close). In each phase, it processes callbacks from that specific FIFO queue up to a system limit before moving to the next phase, prioritizing Microtasks (`process.nextTick` and resolved Promises) between phase transitions.",
    detailedExplanation: {
      whatItIs: "Node.js-এর মূল অ্যাসিনক্রোনাস কোঅর্ডিনেশন ইঞ্জিন।",
      whyItExists: "সিঙ্গল-থ্রেডে কোনো প্রকার ডেডলক ছাড়াই মাল্টিপল অ্যাসিঙ্ক অপারেশন পরিচালনা করতে।",
      howItWorks: "Call Stack ফাঁকা হওয়া মাত্রই Event Loop বিভিন্ন ফেজের কিউ থেকে কলব্যাক এনে এক্সিকিউট করায়।",
      whenToUse: "Node.js-এর যেকোনো অ্যাসিঙ্ক কোড বিহেভিয়ার বুঝতে এটি জানা বাধ্যতামূলক।",
      keyPoints: [
        "Single JavaScript thread, but backed by Libuv's multi-threaded C++ internals.",
        "Executes callbacks only when Call Stack is empty.",
        "Microtask Queue is drained immediately between phase transitions.",
        "Ticks indefinitely until there are no active handles/timers left."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Event Loop এক্সিকিউশন সিকোয়েন্স
console.log('1. Start (Sync Code in Call Stack)');

setTimeout(() => {
  console.log('4. setTimeout Callback (Timers Phase)');
}, 0);

setImmediate(() => {
  console.log('5. setImmediate Callback (Check Phase)');
});

process.nextTick(() => {
  console.log('2. process.nextTick Callback (Microtask - Run before next loop tick)');
});

Promise.resolve().then(() => {
  console.log('3. Promise Callback (Microtask)');
});

console.log('1b. End of Script (Call Stack Emptying)');`,
      explanationSteps: [
        {
          step: 1,
          title: "মেইন সিঙ্ক কোড",
          description: "লগ ১ এবং ১b সরাসরি কল স্ট্যাকে রান হয়।"
        },
        {
          step: 2,
          title: "Microtasks ড্রেন",
          description: "ইভেন্ট লুপ পরের ফেজে যাওয়ার আগেই `process.nextTick` ও `Promise` কলব্যাক চালায়।"
        },
        {
          step: 3,
          title: "ইভেন্ট লুপ ফেজ",
          description: "এরপর টাইমার ও চেক ফেজের কলব্যাক যথাক্রমে ৪ ও ৫ প্রিন্ট করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Real-Time WebSocket Servers (Socket.io)",
        description: "হাজার হাজার ইউজার একসাথে মেসেজ পাঠালে ইভেন্ট লুপ প্রতিটি প্যাকেট গ্রহণ করে নন-ব্লকিংভাবে ব্রডকাস্ট কিউতে দিয়ে দেয়।"
      }
    ],
    interviewTips: {
      tip: "ব্রাউজার ইভেন্ট লুপ এবং Node.js ইভেন্ট লুপের পার্থক্য মনে রাখবেন (Node.js-এ Libuv-এর নির্দিষ্ট ফেজ থাকে)।",
      deliveryStrategy: "সংজ্ঞা -> Call Stack ফাঁকা হওয়া -> ফেজ অনুযায়ী কলব্যাক প্রসেস -> Microtasks প্রায়োরিটি।",
      avoidSaying: [
        {
          wrong: "Event Loop ব্যাকগ্রাউন্ডে ফাইল পড়ার কাজ করে।",
          right: "Event Loop ফাইল পড়ে না; ফাইল পড়ে Libuv থ্রেড পুল। কাজ শেষে কলব্যাক রান করানোই Event Loop-এর দায়িত্ব।"
        }
      ]
    },
    quickRevision: [
      "Event Loop = Libuv দ্বারা পরিচালিত নন-ব্লকিং কোঅর্ডিনেটর।",
      "কল স্ট্যাক খালি হলেই কিউ থেকে কলব্যাক এনে স্ট্যাকে দেয়।",
      "সব ফেজের মাঝে Microtasks (`nextTick`, `Promise`) সর্বোচ্চ প্রায়োরিটি পায়।",
      "হ্যান্ডলার বা টাইমার বেঁচে না থাকলে নোড প্রসেস এক্সিট করে।"
    ],
    followUpQuestions: [
      {
        question: "What are the phases in Node.js event loop?",
        targetId: "nodejs-event-loop-phases",
        shortHint: "৬টি প্রধান ফেজ এবং তাদের এক্সিকিউশন অর্ডার।"
      }
    ],
    tags: ["Node.js", "Event Loop", "Libuv", "Concurrency", "Call Stack"]
  },
  {
    id: "nodejs-event-loop-phases",
    slug: "nodejs-event-loop-phases",
    question: "What are the phases in Node.js event loop?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Node.js ইভেন্ট লুপ প্রতিটি ঘূর্ণনে (Tick) মূলত **৬টি প্রধান ফেজ** ধারাবাহিকভাবে অতিক্রম করে:\n১. **Timers Phase**: `setTimeout()` এবং `setInterval()` এর নির্ধারিত সময় পার হওয়া কলব্যাক রান করে।\n২. **Pending Callbacks (I/O Callbacks)**: পূর্ববর্তী লুপে স্থগিত থাকা সিস্টেম সম্পর্কিত এরর কলব্যাক (যেমন TCP error ECONNREFUSED) এক্সিকিউট করে।\n৩. **Idle, Prepare Phase**: শুধুমাত্র Node.js ইন্টারনাল কাজের জন্য ব্যবহৃত হয়।\n৪. **Poll Phase**: নতুন I/O ইভেন্ট রিট্রাইভ করে এবং I/O রিলেটেড প্রায় সব কলব্যাক (ফাইল রিড, নেটওয়ার্ক রেসপন্স) এক্সিকিউট করে।\n৫. **Check Phase**: শুধুমাত্র `setImmediate()` এর কলব্যাকগুলো এক্সিকিউট করে।\n৬. **Close Callbacks Phase**: সব ক্লোজিং ইভেন্ট কলব্যাক (যেমন `socket.on('close', ...)`) রান করে।",
    easyExplanation: "একটি ট্রেনের ৬টি স্টেশনের মতো মনে রাখুন:\n\n১. **স্টেশন ১ (Timers)**: যাদের অ্যালার্ম/টাইমার বেজেছে তাদের নামিয়ে দেয় (`setTimeout`).\n২. **স্টেশন ২ (Pending Callbacks)**: আগের ট্রিপে কোনো ওএস সিস্টেম এরর থাকলে তা হ্যান্ডেল করে.\n৩. **স্টেশন ৩ (Idle/Prepare)**: ট্রেনের অভ্যন্তরীণ ইঞ্জিন চেকিং (আমরা এতে হাত দিতে পারি না).\n৪. **স্টেশন ৪ (Poll - সবচেয়ে ব্যস্ত স্টেশন!)**: ফাইল রিড, ডাটাবেস কোয়েরি, নেটওয়ার্ক রিকোয়েস্টের যত সাধারণ কাজ আছে সব এই স্টেশনে নামে!\n৫. **স্টেশন ৫ (Check)**: বিশেষ জরুরি টিকিটধারী যাত্রী (`setImmediate`) এই স্টেশনে নামে.\n৬. **স্টেশন ৬ (Close)**: বন্ধ হওয়া সকেট ও কানেকশনের কাজ শেষ করে আবার ১ নম্বর স্টেশনে ফিরে যায়!",
    interviewAnswer: "The Node.js event loop consists of six distinct phases executed in a strict deterministic order during each tick:\n1. **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()` whose threshold has elapsed.\n2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration (such as specific OS-level network errors).\n3. **Idle, Prepare**: Used internally by Node.js for internal housekeeping.\n4. **Poll**: Retrieves new I/O events, calculates how long it should block and wait for I/O, and processes virtually all incoming I/O callbacks (HTTP, file read, database). If the queue is empty, it may jump to the Check phase or block waiting for events.\n5. **Check**: Dedicated exclusively to executing callbacks scheduled via `setImmediate()`.\n6. **Close Callbacks**: Handles socket and handle termination events, such as `socket.on('close', ...)`.\n\n*Crucially, between each phase transition, the Microtask Queue (`process.nextTick` followed by Promise microtasks) is fully drained.*",
    detailedExplanation: {
      whatItIs: "Node.js ইভেন্ট লুপের ৬টি নির্ধারিত এক্সিকিউশন স্টেজ।",
      whyItExists: "বিভিন্ন ক্যাটাগরির কলব্যাকের মধ্যে ফেয়ারনেস এবং প্রেডিক্টেবল প্রায়োরিটি বজায় রাখতে।",
      howItWorks: "Timers -> Pending -> Idle/Prepare -> Poll -> Check -> Close Callbacks (প্রতি ট্রানজিশনে Microtask Queue ড্রেন হয়)।",
      whenToUse: "অ্যাসিঙ্ক কোডের টাইমিং নির্ধারণ (`setTimeout` vs `setImmediate`) এবং পারফরম্যান্স টিউনিংয়ে।",
      keyPoints: [
        "Poll phase handles incoming connections and data reading.",
        "setImmediate() is specifically designed for the Check phase.",
        "process.nextTick() is NOT technically part of the event loop; it runs immediately after the current operation finishes.",
        "If poll phase becomes idle, it waits for I/O events unless setImmediate is queued."
      ]
    },
    visualDiagram: {
      title: "Node.js ইভেন্ট লুপের ৬টি ফেজ এক্সিকিউশন ট্র্যাকার",
      subtitle: "ইভেন্ট লুপ প্রতিটি ঘূর্ণনে (Tick) যেভাবে একের পর এক ফেজ পার হয়:",
      steps: [
        {
          step: 1,
          title: "Timers Phase",
          subtitle: "setTimeout & setInterval",
          location: "Timers Queue (Libuv Min-Heap)",
          icon: "clock",
          description: "যার নির্ধারিত সময় অতিক্রান্ত হয়েছে সেই টাইমারের কলব্যাকগুলো এক্সিকিউট করে।",
          highlightSnippet: "setTimeout(() => console.log('Timer expired'), 100);"
        },
        {
          step: 2,
          title: "Pending Callbacks Phase",
          subtitle: "Deferred I/O & System Errors",
          location: "Pending Queue",
          icon: "server",
          description: "পূর্ববর্তী লুপে স্থগিত থাকা ওএস-লেভেল সিস্টেম এরর (যেমন TCP ECONNREFUSED) হ্যান্ডেল করে।",
          highlightSnippet: "[Pending Callback]: TCP Socket Error handler"
        },
        {
          step: 3,
          title: "Poll Phase (প্রধান ফেজ)",
          subtitle: "Incoming I/O & Connection Handlers",
          location: "Poll Queue (I/O Operations)",
          icon: "refresh",
          description: "নতুন I/O ইভেন্ট ক্যালকুলেট করে এবং প্রায় সব ফাইল রিড ও নেটওয়ার্ক কলব্যাক প্রসেস করে।",
          highlightSnippet: "fs.readFile('data.txt', (err, data) => { /* Poll Phase */ });"
        },
        {
          step: 4,
          title: "Check Phase (setImmediate)",
          subtitle: "setImmediate Handlers",
          location: "Check Queue",
          icon: "zap",
          description: "শুধুমাত্র setImmediate() কলব্যাকগুলোর জন্য নির্ধারিত। Poll ফেজের পরপরই এটি চলে।",
          highlightSnippet: "setImmediate(() => console.log('Immediate check!'));"
        },
        {
          step: 5,
          title: "Close Callbacks Phase",
          subtitle: "Socket Cleanup & Shutdown",
          location: "Close Queue",
          icon: "shield",
          description: "সব ক্লোজিং ইভেন্ট (যেমন socket.on('close')) এক্সিকিউট করে পরবর্তী টিকে ফিরে যায়।",
          highlightSnippet: "socket.on('close', () => console.log('Socket closed'));"
        }
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');

// I/O সাইকেলের ভেতর setTimeout vs setImmediate এর আচরণ
fs.readFile(__filename, () => {
  // Poll ফেজের কলব্যাকের ভেতর অবস্থান করছি
  setTimeout(() => {
    console.log('2. setTimeout (পরবর্তী লুপের Timers ফেজে চলবে)');
  }, 0);

  setImmediate(() => {
    console.log('1. setImmediate (তাত্ক্ষণিক পরবর্তী Check ফেজে চলবে - সর্বদা আগে!)');
  });
});

// আউটপুট সর্বদা:
// 1. setImmediate
// 2. setTimeout`,
      explanationSteps: [
        {
          step: 1,
          title: "Poll ফেজে readFile শেষ হয়",
          description: "`fs.readFile` কলব্যাকটি Poll ফেজে রান হয়।"
        },
        {
          step: 2,
          title: "Poll থেকে Check ফেজে ট্রানজিশন",
          description: "Poll ফেজের পর সরাসরি Check ফেজ আসে, তাই `setImmediate` টাইমারের আগে এক্সিকিউট হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Event-Driven Telemetry Logging",
        description: "একটি রিকোয়েস্ট রেসপন্স পাঠানোর পর সকেট ক্লোজের সময় `Close Callbacks` ফেজে ক্লিনআপ ও মেট্রিক্স সেভ করা হয়।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারদের প্রিয় প্রশ্ন: 'I/O কলব্যাকের ভেতর `setTimeout` বনাম `setImmediate` দিলে কোনটি আগে চলবে?' উত্তর: `setImmediate` সর্বদা আগে চলবে কারণ Poll ফেজের পরেই Check ফেজ আসে।",
      deliveryStrategy: "৬টি ফেজের নাম ক্রমানুসারে বলুন -> Poll ও Check এর কাজ ব্যাখ্যা করুন -> Microtask ড্রেনিং উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "`process.nextTick` হলো ইভেন্ট লুপের ১ম ফেজ।",
          right: "`process.nextTick` ইভেন্ট লুপের কোনো ফেজ নয়, এটি ফেজ ট্রানজিশনের মাঝখানে তাত্ক্ষণিকভাবে এক্সিকিউট হওয়া সর্বোচ্চ প্রায়োরিটির মাইক্রোটাস্ক।"
        }
      ]
    },
    quickRevision: [
      "৬টি ফেজ: Timers -> Pending -> Idle/Prepare -> Poll -> Check -> Close।",
      "Poll Phase: প্রধান I/O অপারেশন ও ডেটা হ্যান্ডলিং করে।",
      "Check Phase: শুধুমাত্র `setImmediate` রান করে।",
      "I/O সাইকেলের ভেতর `setImmediate` সর্বদা `setTimeout(..., 0)` এর আগে চলে।"
    ],
    followUpQuestions: [
      {
        question: "Explain clustering in Node.js and when should you use it?",
        targetId: "nodejs-clustering-and-use-cases",
        shortHint: "মাল্টি-কোর CPU স্কেলিং ও চাইল্ড প্রসেস।"
      }
    ],
    tags: ["Node.js", "Event Loop", "Phases", "Poll Phase", "Check Phase"]
  },
  {
    id: "nodejs-clustering-and-use-cases",
    slug: "nodejs-clustering-and-use-cases",
    question: "Explain clustering in Node.js and when should you use it?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "High",
    shortAnswer: "**Clustering** হলো Node.js-এর একটি বিল্ট-ইন মেকানিজম (`cluster` মডিউল) যার মাধ্যমে একটি সিঙ্গেল সার্ভারের মাল্টিপল CPU কোরকে কাজে লাগানোর জন্য একাধিক চাইল্ড প্রসেস (Worker Process) স্পন (Spawn) করা হয়। প্রতিটি ওয়ার্কার প্রসেস নিজস্ব V8 ইঞ্জিন, মেমরি এবং ইভেন্ট লুপ নিয়ে চলে, কিন্তু তারা সবাই প্যারেন্ট (Primary/Master) প্রসেসের সাথে **একই সার্ভার পোর্ট (যেমন 3000)** শেয়ার করে। প্যারেন্ট প্রসেস ইনকামিং রিকোয়েস্টগুলোকে **Round-Robin** অ্যালগরিদমে ওয়ার্কারদের মধ্যে ডিস্ট্রিবিউট করে দেয়।",
    easyExplanation: "বাস্তব জীবনের উদাহরণ:\nআপনার সার্ভারে ৮টি CPU কোর আছে, কিন্তু Node.js ডিফল্টভাবে মাত্র ১টি কোর ব্যবহার করে। অর্থাৎ বাকি ৭টি কোর অলস বসে আছে!\n- **Clustering ছাড়া**: একটিমাত্র ক্যাশিয়ার কাউন্টার খোলা আছে, ফলে বিশাল কাস্টমার লাইনে ট্রাফিক জ্যাম লেগে যায়।\n- **Clustering সহ**: প্রাইমারি প্রসেস বাকি ৭টি কোরেও নতুন ক্যাশিয়ার কাউন্টার (Worker Process) খুলে দিল এবং একই দরজায় (Port 3000) আসা কাস্টমারদের ১, ২, ৩, ৪ করে সবার মাঝে ভাগ করে দিল। ফলে সার্ভারের ক্ষমতা ৮ গুণ বেড়ে গেল!",
    interviewAnswer: "Node.js runs by default in a single thread on a single CPU core. The `cluster` module allows developers to scale Node.js applications horizontally across multi-core systems by spawning a cluster of child processes (workers) that share the same server port. The primary (master) process orchestrates the workers and uses a Round-Robin algorithm (on POSIX systems) to distribute incoming network connections evenly across worker processes. Each worker runs its own isolated V8 instance and event loop. You should use clustering in production web servers to maximize hardware utilization, achieve high availability, and prevent a single unhandled crash from taking down the entire service.",
    detailedExplanation: {
      whatItIs: "মাল্টি-কোর সিপিইউতে Node.js অ্যাপ্লিকেশনের মাল্টি-প্রসেস স্কেলিং প্রযুক্তি।",
      whyItExists: "সিঙ্গেল থ্রেড আর্কিটেকচারের কারণে বাকি সিপিইউ কোর যাতে অব্যবহৃত পড়ে না থাকে।",
      howItWorks: "Primary process `cluster.fork()` দিয়ে প্রতিটি কোরের জন্য চাইল্ড প্রসেস তৈরি করে এবং OS পোর্ট শেয়ারিং হ্যান্ডেল করে।",
      whenToUse: "হাই-ট্রাফিক প্রোডাকশন API সার্ভারে যেখানে রিকোয়েস্ট থ্রুপুট বাড়ানো এবং জিরো-ডাউনটাইম রিলোড প্রয়োজন।",
      keyPoints: [
        "Spawns independent OS processes per CPU core.",
        "Workers share server port (IPC under the hood via Libuv).",
        "Each worker has isolated memory (no shared heap memory).",
        "In modern DevOps, often managed via PM2 or Kubernetes Pod replicas."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// cluster-demo.js - মাল্টি-কোর ক্লাস্টার সার্ভার
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(\`Primary Master Process \${process.pid} is running\`);
  console.log(\`Spawning \${numCPUs} worker processes across all CPU cores...\`);

  // প্রতিটি CPU কোরের জন্য একটি করে ওয়ার্কার তৈরি
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // কোনো ওয়ার্কার ক্র্যাশ করলে স্বয়ংক্রিয়ভাবে নতুন ওয়ার্কার রিস্টার্ট
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died. Forking a replacement...\`);
    cluster.fork();
  });
} else {
  // ওয়ার্কার প্রসেসগুলো একই পোর্ট 4000 শেয়ার করে সার্ভার চালাবে
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(\`Handled by Worker Process PID: \${process.pid}\\n\`);
  }).listen(4000);

  console.log(\`Worker \${process.pid} started and listening on port 4000\`);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "isPrimary চেকিং",
          description: "মাস্টার প্রসেস সনাক্ত করে প্রতিটি কোরের জন্য `cluster.fork()` কল করা হয়।"
        },
        {
          step: 2,
          title: "পোর্ট শেয়ারিং",
          description: "সব ওয়ার্কার একই পোর্ট ৪০০০-এ লিসেন করে এবং মাস্টার ট্রাফিক ব্যালেন্স করে।"
        },
        {
          step: 3,
          title: "অটো-হিলিং",
          description: "`cluster.on('exit')` ইভেন্টে ক্র্যাশ করা ওয়ার্কার রিপ্লেস হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Production PM2 Deployment",
        description: "প্রোডাকশন সার্ভারে `pm2 start app.js -i max` দিলে PM2 ইন্টারনালি Node.js ক্লাস্টার মডিউল ব্যবহার করে সব কোরে অ্যাপটি ছড়িয়ে দেয়।"
      }
    ],
    interviewTips: {
      tip: "ক্লাস্টারিংয়ে প্রতিটি ওয়ার্কারের মেমরি সম্পূর্ণ আলাদা থাকে, তাই ইন-মেমোরি সেশন (যেমন গ্লোবাল ভেরিয়েবল) কাজ করবে না; সেশন শেয়ারিংয়ের জন্য Redis ব্যবহার করতে হবে তা উল্লেখ করুন।",
      deliveryStrategy: "সংজ্ঞা -> কেন দরকার (মাল্টি-কোর ব্যবহার) -> কোড স্ট্রাকচার -> স্টেটলেস/Redis প্রয়োজনীয়তা।",
      avoidSaying: [
        {
          wrong: "ক্লাস্টারিং করলে সব প্রসেস একই মেমরি ভেরিয়েবল রিড-রাইট করতে পারে।",
          right: "ক্লাস্টারের প্রতিটি ওয়ার্কার আলাদা প্রসেস হওয়ায় তাদের মেমরি আইসোলেটেড থাকে; ডাটা শেয়ার করতে Redis বা IPC মেসেজ ব্যবহার করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "Clustering = সব CPU কোর ব্যবহারের জন্য মাল্টিপল চাইল্ড প্রসেস তৈরি করা।",
      "সব ওয়ার্কার একই সার্ভার পোর্ট শেয়ার করে।",
      "ইনকামিং ট্রাফিক Round-Robin অ্যালগরিদমে ভাগ হয়।",
      "স্টেটলেস আর্কিটেকচার বা Redis ক্যাশ প্রয়োজন হয়।"
    ],
    followUpQuestions: [
      {
        question: "What's the difference between worker threads and the cluster module?",
        targetId: "nodejs-worker-threads-vs-cluster",
        shortHint: "Multi-processing vs Multi-threading comparison."
      }
    ],
    tags: ["Node.js", "Clustering", "Scaling", "Multi-Core", "PM2"]
  },
  {
    id: "nodejs-worker-threads-vs-cluster",
    slug: "nodejs-worker-threads-vs-cluster",
    question: "What's the difference between worker threads and the cluster module?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "**Cluster Module** মাল্টিপল **OS Process** তৈরি করে যার প্রতিটি আলাদা মেমরি স্পেস নিয়ে চলে এবং সাধারণত নেটওয়ার্ক I/O ও সার্ভার রিকোয়েস্ট থ্রুপুট স্কেলিংয়ের জন্য ব্যবহৃত হয়। অপরদিকে, **Worker Threads (`worker_threads`)** একটি সিঙ্গেল প্রসেসের ভেতরেই মাল্টিপল **OS Thread** তৈরি করে যা একই মেমরি স্পেস শেয়ার করতে পারে (`SharedArrayBuffer`), এবং এটি মূলত ভারী **CPU-ইনটেনসিভ গাণিতিক কাজ** (যেমন ইমেজ/ভিডিও প্রসেসিং, ক্রিপ্টোগ্রাফি) মূল ইভেন্ট লুপ ব্লক না করে সমান্তরালে চালানোর জন্য ব্যবহৃত হয়।",
    easyExplanation: "সহজ পার্থক্য ছক:\n\n১. **Cluster Module (নতুন একাধিক দোকান খোলা)**:\n- প্রতিটি দোকান আলাদা বাড়ি, আলাদা গুদাম (Isolated Memory)।\n- একটি দোকান পুড়ে গেলেও অন্য দোকান বন্ধ হয় না (High Reliability)।\n- উদ্দেশ্য: বেশি কাস্টমারের ভিড় (Network Requests) সামলানো।\n\n২. **Worker Threads (একই দোকানের ভেতরে সহকারী নিয়োগ)**:\n- সবাই একই ছাদের নিচে একই টেবিল ও ড্রয়ার শেয়ার করে (Shared Memory)।\n- খুব কম মেমরি ও দ্রুত কমিউনিকেশন।\n- উদ্দেশ্য: জটিল ও ভারী কোনো কাঠের নকশা বানানোর কাজ (CPU-intensive task) সহকারীকে দিয়ে করানো।",
    interviewAnswer: "The core difference lies in **Processes vs Threads**:\n- **Cluster Module (`cluster`)**: Spawns multiple independent OS processes across CPU cores. Each process has its own isolated V8 instance, event loop, and dedicated memory space. Inter-process communication (IPC) has serialization overhead. Its primary use case is scaling **I/O-bound web servers** by distributing incoming HTTP requests across all CPU cores.\n- **Worker Threads (`worker_threads`)**: Spawns multiple threads within a single Node.js process. They share the same process memory space and can transfer or share binary memory efficiently via `SharedArrayBuffer` and `ArrayBuffer`. Its primary use case is offloading **CPU-intensive computations** (cryptography, image manipulation, AI parsing) to prevent blocking the main event loop.",
    detailedExplanation: {
      whatItIs: "Node.js-এ মাল্টি-প্রসেসিং বনাম মাল্টি-থ্রেডিংয়ের তুলনামূলক বিশ্লেষণ।",
      whyItExists: "সঠিক সমস্যার জন্য সঠিক স্কেলিং টুল নির্বাচন করতে (I/O থ্রুপুট vs CPU ক্যালকুলেশন)।",
      howItWorks: "Cluster প্রসেস ফর্ক করে OS পোর্ট শেয়ার করে; Worker Threads একই প্রসেসে V8 আইসোলেট তৈরি করে।",
      whenToUse: "সার্ভার স্কেলিং ও রিকোয়েস্ট লোড হ্যান্ডলিংয়ে Cluster; ম্যাথমেটিক্যাল ক্যালকুলেশন ও মিডিয়া কনভার্শনে Worker Threads।",
      keyPoints: [
        "Cluster = Separate processes, isolated memory, best for I/O request scaling.",
        "Worker Threads = Same process, shared memory capability, best for CPU-bound tasks.",
        "Cluster overhead is higher (spawns full Node.js runtime per core).",
        "Worker thread crashing can potentially crash the parent process if unhandled."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// সংক্ষেপে ব্যবহারের ক্ষেত্র:

// ১. Cluster: যখন রিকোয়েস্ট ট্রাফিক স্কেল করতে হবে (I/O Scaling)
// const cluster = require('cluster');
// cluster.fork(); // নতুন প্রসেস তৈরি করে পোর্ট শেয়ার করবে

// ২. Worker Threads: যখন CPU ইনটেনসিভ কাজ মূল লুপ না ব্লক করে করতে হবে
const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  // মেইন থ্রেডে ওয়েব সার্ভার চলছে
  const worker = new Worker('./cpu-heavy-task.js');
  worker.on('message', (result) => console.log('Calculation done:', result));
} else {
  // আলাদা থ্রেডে ভারী হিসাব
  let total = 0;
  for (let i = 0; i < 1e9; i++) total += i;
  require('worker_threads').parentPort.postMessage(total);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "আইসোলেশন বনাম শেয়ার্ড",
          description: "Cluster আলাদা প্রসেস দেয়, Worker Thread শেয়ার্ড মেমরি থ্রেড দেয়।"
        },
        {
          step: 2,
          title: "কাজের ক্ষেত্র নির্বাচন",
          description: "I/O রিকোয়েস্ট স্কেলিংয়ে Cluster এবং ভারী ক্যালকুলেশনে Worker Thread ব্যবহার করবেন।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "FinTech Trading Platform",
        description: "ব্যবহারকারীর হাজার হাজার HTTP অর্ডার রিসিভ করতে `Cluster` মোড ব্যবহৃত হয়, এবং জটিল অপশন প্রাইসিং অ্যালগরিদম রান করতে `Worker Threads` ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "একটি তুলনামূলক টেবিলের মতো করে উত্তর দিন: মেমরি শেয়ারিং, ক্রিয়েশন ওভারহেড, এবং প্রাইমারি ব্যবহারের ক্ষেত্র।",
      deliveryStrategy: "মৌলিক পার্থক্য (Process vs Thread) -> মেমরি মডেল -> ব্যবহারের ক্ষেত্র (I/O vs CPU)।",
      avoidSaying: [
        {
          wrong: "Cluster এবং Worker Thread একই জিনিস, শুধু নতুন ভার্সনে নাম বদলেছে।",
          right: "এরা সম্পূর্ণ ভিন্ন: Cluster হলো মাল্টি-প্রসেস (I/O স্কেলিং), আর Worker Threads হলো সিঙ্গেল প্রসেসে মাল্টি-থ্রেড (CPU স্কেলিং)।"
        }
      ]
    },
    quickRevision: [
      "Cluster = Multi-process, Isolated Memory, I/O Scaling (HTTP load balancing)।",
      "Worker Threads = Multi-thread, Shared Memory, CPU-bound computations।",
      "Cluster-এ সেশন শেয়ার করতে Redis প্রয়োজন।",
      "Worker Threads-এ `SharedArrayBuffer` দিয়ে দ্রুত ডেটা শেয়ার করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "Explain CommonJS and ES Modules in Node.js.",
        targetId: "nodejs-commonjs-vs-es-modules",
        shortHint: "require vs import, synchronous vs asynchronous module loading."
      }
    ],
    tags: ["Node.js", "Worker Threads", "Cluster", "Comparison", "Performance"]
  },
  {
    id: "nodejs-commonjs-vs-es-modules",
    slug: "nodejs-commonjs-vs-es-modules",
    question: "Explain CommonJS and ES Modules in Node.js.",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**CommonJS (CJS)** হলো Node.js-এর আদি ও ট্র্যাডিশনাল মডিউল সিস্টেম যা `require()` দিয়ে সিনক্রোনাসভাবে রানটাইমে মডিউল লোড করে এবং `module.exports` দিয়ে এক্সপোর্ট করে। অপরদিকে, **ES Modules (ESM)** হলো আধুনিক জাভাস্ক্রিপ্টের অফিশিয়াল স্ট্যান্ডার্ড মডিউল সিস্টেম যা `import` এবং `export` সিনট্যাক্স ব্যবহার করে স্ট্যাটিকভাবে কম্পাইল টাইমে (বা অ্যাসিনক্রোনাস ডায়নামিক `import()`) মডিউল লোড করে। ESM ট্রি-শেকিং (Tree-shaking) সাপোর্ট করে এবং ব্রাউজার ও সার্ভার উভয় জায়গায় ইউনিভার্সালভাবে চলে।",
    easyExplanation: "সহজ পার্থক্য:\n\n১. **CommonJS (require/module.exports)**:\n- যেন একটি বই পড়ার সময় মাঝপথে থেমে অন্য ঘর থেকে আরেকটি বই এনে পড়া (Synchronous)।\n- রানটাইমে কোডের যেকোনো জায়গায় `if/else` এর ভেতর `require()` লেখা যায়।\n\n২. **ES Modules (import/export)**:\n- পড়ার আগেই টেবিলের ওপর প্রয়োজনীয় সব রেফারেন্স বই আগে থেকেই সাজিয়ে রাখা (Static Analysis)।\n- ফাইলের একদম শীর্ষে `import` লিখতে হয়, ফলে বিল্ড টুলস জানে কোন ফাংশনটি কাজে লাগবে আর কোনটি লাগবে না, ফলে অপ্রয়োজনীয় কোড বাদ দিয়ে অ্যাপ হালকা করা যায় (Tree-shaking)!",
    interviewAnswer: "Node.js supports two distinct module systems:\n1. **CommonJS (CJS)**: The original Node.js module format. It uses synchronous `require()` and `module.exports`. Modules are loaded and evaluated synchronously at runtime on the file system. It provides dynamic loading inside conditions and gives access to `__dirname` and `__filename`.\n2. **ES Modules (ESM)**: The official ECMAScript standard module system introduced in ES6. It uses top-level static `import` and `export` statements. ESM enables static code analysis, asynchronous module resolution, top-level `await`, and tree-shaking by bundlers. In Node.js, ESM is enabled by adding `\"type\": \"module\"` in `package.json` or by using the `.mjs` file extension.",
    detailedExplanation: {
      whatItIs: "জাভাস্ক্রিপ্ট ও Node.js-এর দুটি প্রধান মডিউলার কোড অর্গানাইজেশন আর্কিটেকচার।",
      whyItExists: "ব্রাউজার ও সার্ভারের মধ্যে কোড স্ট্যান্ডার্ডাইজেশন এবং আধুনিক অপটিমাইজেশন (Tree-shaking) নিশ্চিত করতে।",
      howItWorks: "CJS রানটাইমে অবজেক্ট রিটার্ন করে; ESM প্রি-পার্সিং ধাপে স্ট্যাটিক মডিউল রেকর্ড ও লাইভ বাইন্ডিংস তৈরি করে।",
      whenToUse: "নতুন সব আধুনিক প্রজেক্টে ESM স্ট্যান্ডার্ড; লিগ্যাসি কোডবেসে CommonJS দেখা যায়।",
      keyPoints: [
        "CJS: require() is synchronous and runtime dynamic.",
        "ESM: import/export is static, asynchronous, and tree-shakeable.",
        "ESM supports top-level await; CJS requires wrapping in async IIFE.",
        "ESM uses import.meta.url instead of __dirname / __filename."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. CommonJS (CJS) সিনট্যাক্স (ডিফল্ট Node.js)
// math-cjs.js
const add = (a, b) => a + b;
module.exports = { add };

// app-cjs.js
const { add } = require('./math-cjs');
console.log('CJS Result:', add(2, 3));


// ২. ES Modules (ESM) সিনট্যাক্স ("type": "module" সহ)
// math-esm.js
export const multiply = (a, b) => a * b;

// app-esm.js
import { multiply } from './math-esm.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-এ __dirname তৈরি করার উপায়:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('ESM Result:', multiply(4, 5));`,
      explanationSteps: [
        {
          step: 1,
          title: "CJS এক্সপোর্ট ও ইমপোর্ট",
          description: "`module.exports` এবং `require()` সিনক্রোনাসলি কাজ করে।"
        },
        {
          step: 2,
          title: "ESM স্ট্যাটিক ইমপোর্ট",
          description: "`export` এবং `import` স্ট্যাটিক অ্যানালাইসিস ও ট্রি-শেকিং প্রদান করে।"
        },
        {
          step: 3,
          title: "__dirname প্রতিস্থাপন",
          description: "ESM-এ `import.meta.url` ব্যবহার করে ফাইলের পাথ বের করতে হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Modern NPM Packages (Chalk, Node-Fetch)",
        description: "আধুনিক জনপ্রিয় প্যাকেজগুলো (যেমন Chalk v5+, Got) সম্পূর্ণ Pure ESM মডিউলে কনভার্ট হয়েছে বান্ডেল সাইজ কমাতে ও ব্রাউজার কম্প্যাটিবিলিটির জন্য।"
      }
    ],
    interviewTips: {
      tip: "ESM-এ কীভাবে `__dirname` এবং `__filename` অ্যাক্সেস করতে হয় (`import.meta.url` দিয়ে) তা উল্লেখ করলে ইন্টারভিউয়ার খুব ইমপ্রেসড হবেন।",
      deliveryStrategy: "সিনট্যাক্স পার্থক্য -> লোডিং মেকানিজম (Sync vs Async/Static) -> ট্রি-শেকিং সুবিধা -> `package.json`-এর `type: module`।",
      avoidSaying: [
        {
          wrong: "ESM শুধু ব্রাউজারে চলে, Node.js-এ চলে না।",
          right: "Node.js v14+ থেকে ES Modules সম্পূর্ণ অফিশিয়ালি এবং ফার্স্ট-ক্লাস নাগরিক হিসেবে সমর্থিত।"
        }
      ]
    },
    quickRevision: [
      "CommonJS = `require()` + `module.exports` (Synchronous, Runtime)।",
      "ES Modules = `import` + `export` (Static, Tree-shakeable, Top-level await)।",
      "Node.js-এ ESM এনাবল করতে `package.json`-এ `\"type\": \"module\"` দিতে হয়।",
      "ESM-এ `__dirname`-এর বদলে `import.meta.url` ব্যবহৃত হয়।"
    ],
    followUpQuestions: [
      {
        question: "How do you create and use modules in Node.js?",
        targetId: "nodejs-create-and-use-modules",
        shortHint: "কাস্টম মডিউল তৈরি ও ফোল্ডার স্ট্রাকচার।"
      }
    ],
    tags: ["Node.js", "CommonJS", "ES Modules", "ESM", "Modular JS"]
  },
  {
    id: "nodejs-create-and-use-modules",
    slug: "nodejs-create-and-use-modules",
    question: "How do you create and use modules in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Node.js-এ মডিউল তৈরি করতে কোনো ফাইল বা ফোল্ডারে নির্দিষ্ট ফাংশন, অবজেক্ট বা ক্লাস লিখে তা **CommonJS**-এ `module.exports` বা `exports`-এর মাধ্যমে এবং **ES Modules**-এ `export` বা `export default`-এর মাধ্যমে এক্সপোজ করতে হয়। অন্য ফাইলে এই মডিউলটি ব্যবহার করার জন্য রিলেটিভ পাথ দিয়ে `require('./path/to/module')` অথবা `import from './path/to/module.js'` কল করতে হয়।",
    easyExplanation: "সহজ ৩টি ধাপ:\n১. **তৈরি করুন (Create)**: একটি ফাইলে আপনার লজিক লিখুন (যেমন: `authUtils.js`)।\n২. **দরজা খুলে দিন (Export)**: যা বাইরে শেয়ার করতে চান তা `module.exports = { hashPassword }` দিয়ে এক্সপোর্ট করুন।\n৩. **ব্যবহার করুন (Import/Require)**: অন্য ফাইলে `const { hashPassword } = require('./authUtils')` দিয়ে এনে সহজে ব্যবহার করুন।",
    interviewAnswer: "In Node.js, modules encapsulate reusable code into isolated units. To create a module:\n1. Define your business logic, functions, or classes in a `.js` or `.mjs` file.\n2. In CommonJS, export them by assigning to `module.exports` (for single entity or object map) or `exports.functionName`.\n3. In ES Modules, use named exports (`export const fn = ...`) or default exports (`export default fn`).\n4. Consume the module in consumer files using relative paths with `require('./utils')` in CJS or `import { fn } from './utils.js'` in ESM.",
    detailedExplanation: {
      whatItIs: "Node.js অ্যাপ্লিকেশনে কোড রিইউজেবিলিটি ও মডিউলার কাঠামোর নিয়ম।",
      whyItExists: "বড় কোডবেসকে পরিষ্কার, টেস্টেবল এবং সহজে মেইনটেইনেবল লেয়ারে বিভক্ত রাখতে।",
      howItWorks: "Node.js প্রতিটি মডিউল ফাইলকে বিহাইন্ড দ্য সিনসে একটি Module Wrapper Function `(function(exports, require, module, __filename, __dirname) { ... })`-এর মধ্যে র‍্যাপ করে রান করায়।",
      whenToUse: "সব হেল্পার ফাংশন, সার্ভিস লেয়ার, কন্ট্রোলার এবং কনফিগারেশনে।",
      keyPoints: [
        "Module Wrapper Function gives local scope to every file.",
        "Relative paths (./ or ../) must be used for local file modules.",
        "Built-in and npm packages are imported without path prefix.",
        "Modules are cached after the first require/import call."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. userService.js (Module Creation)
const users = [];

function createUser(name, email) {
  const user = { id: users.length + 1, name, email, createdAt: new Date() };
  users.push(user);
  return user;
}

function getAllUsers() {
  return [...users];
}

// এক্সপোর্ট অবজেক্ট
module.exports = {
  createUser,
  getAllUsers,
};

// ২. app.js (Module Usage)
const { createUser, getAllUsers } = require('./userService');

const user1 = createUser('Rahim', 'rahim@example.com');
const user2 = createUser('Karim', 'karim@example.com');

console.log('All Users:', getAllUsers());`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রাইভেট ডাটা এনক্যাপসুলেশন",
          description: "`users` অ্যারেটি মডিউলের নিজস্ব স্কোপে সুরক্ষিত থাকে।"
        },
        {
          step: 2,
          title: "এক্সপোর্ট ও ইমপোর্ট",
          description: "শুধুমাত্র প্রয়োজনীয় মেথডগুলো এক্সপোর্ট করে `app.js`-এ ব্যবহার করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Clean Architecture Service Layer",
        description: "প্রোডাকশন ব্যাকএন্ডে `authService.js`, `paymentService.js`, এবং `emailService.js` আলাদা মডিউল বানিয়ে কন্ট্রোলারে ইমপোর্ট করা হয়।"
      }
    ],
    interviewTips: {
      tip: "Node.js-এর **Module Wrapper Function**-এর কথা উল্লেখ করুন, যা ব্যাখ্যা করে কেন ফাইলে গ্লোবাল স্কোপ পল্যুশন হয় না।",
      deliveryStrategy: "মডিউল কী -> CJS/ESM এক্সপোর্ট প্যাটার্ন -> Module Caching এর সুবিধা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "মডিউলে কোনো ভেরিয়েবল বানালে তা স্বয়ংক্রিয়ভাবে গ্লোবাল ভেরিয়েবল হয়ে যায়।",
          right: "প্রতিটি ফাইল Module Wrapper Function-এর ভেতর চলে, তাই ভেরিয়েবলগুলো ফাইল-স্কোপড থাকে।"
        }
      ]
    },
    quickRevision: [
      "মডিউল তৈরি = ফাংশন/ক্লাস লিখে `module.exports` বা `export` করা।",
      "মডিউল ব্যবহার = `require('./path')` বা `import from './path'`।",
      "Module Wrapper Function স্কোপ সেপারেশন নিশ্চিত করে।",
      "একবার লোড হওয়া মডিউল মেমরিতে ক্যাশ থাকে।"
    ],
    followUpQuestions: [
      {
        question: "What are the core modules in Node.js?",
        targetId: "nodejs-core-modules",
        shortHint: "fs, path, http, events, crypto, os, streams."
      }
    ],
    tags: ["Node.js", "Modules", "module.exports", "require", "Architecture"]
  },
  {
    id: "nodejs-core-modules",
    slug: "nodejs-core-modules",
    question: "What are the core modules in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Node.js-এর **Core Modules** হলো রানটাইমের সাথে প্রি-ইন্সটল করা বিল্ট-ইন মডিউলসমূহ, যা ব্যবহারের জন্য আলাদাভাবে `npm install` করার প্রয়োজন হয় না। প্রধান কোর মডিউলগুলো হলো:\n১. `fs` (File System): ফাইল রিড, রাইট ও ম্যানিপুলেশন।\n২. `path`: ক্রস-প্ল্যাটফর্ম ফাইল ও ডিরেক্টরি পাথ হ্যান্ডলিং।\n৩. `http` / `https`: ওয়েব সার্ভার ও ক্লায়েন্ট রিকোয়েস্ট তৈরি।\n৪. `events`: EventEmitter পাব/সাব প্যাটার্ন।\n৫. `crypto`: হ্যাশিং, এনক্রিপশন ও সাইবার সিকিউরিটি।\n৬. `stream`: চাঙ্কড ডেটা স্ট্রিমিং।\n৭. `os`: অপারেটিং সিস্টেম মেমরি ও CPU ইনফো।\n৮. `child_process`: এক্সটারনাল টার্মিনাল কমান্ড বা প্রসেস এক্সিকিউট।\n৯. `cluster` ও `worker_threads`: প্রসেস ও থ্রেড স্কেলিং।",
    easyExplanation: "যেমন একটি নতুন স্মার্টফোন কিনলে তার ভেতর ক্যামেরা, ক্যালকুলেটর, ডায়লার এবং সেটিংস অ্যাপ আগে থেকেই ইনস্টল করা থাকে (Core Apps), তেমনই Node.js ইনস্টল করলে ফাইল সিস্টেম (`fs`), নেটওয়ার্কিং (`http`), এবং ক্রিপ্টোগ্রাফি (`crypto`) এর মতো প্রয়োজনীয় সব শক্তিশালী টুলস আগে থেকেই রেডি থাকে!",
    interviewAnswer: "Node.js Core Modules are native modules compiled directly into the Node.js binary. They require no external installation via npm and can be imported immediately using `node:` prefix or module name:\n- **`http` / `https`**: Create low-level HTTP/S servers and dispatch outbound requests.\n- **`fs` / `fs/promises`**: Synchronous and asynchronous file system operations.\n- **`path`**: Utilities for handling cross-platform file path resolution (`join`, `resolve`, `extname`).\n- **`events`**: Provides the foundational `EventEmitter` class.\n- **`crypto`**: OpenSSL cryptographic wrappers (hashes, HMAC, ciphers, randomBytes).\n- **`stream`**: Handling flowing and paused data streams.\n- **`os`**: Hardware and OS-level diagnostics (CPUs, total memory, free memory).\n- **`child_process`**: Executing shell commands (`exec`, `spawn`, `fork`).\n- **`cluster` & `worker_threads`**: Multi-processing and multi-threading scalability.",
    detailedExplanation: {
      whatItIs: "Node.js বাইনারির অন্তর্ভুক্ত বিল্ট-ইন স্ট্যান্ডার্ড লাইব্রেরি।",
      whyItExists: "কোনো থার্ড-পার্টি ডিপেন্ডেন্সি ছাড়াই ফাইল, ওএস, নেটওয়ার্ক ও সিকিউরিটি অপারেশন সম্পাদন করতে।",
      howItWorks: "C++ কোর এবং JS ইন্টারফেস ইন্টিগ্রেট করে তৈরি। আধুনিক Node.js-এ `node:fs`, `node:path` প্রিফিক্স দিয়ে কল করা সুপারিশকৃত।",
      whenToUse: "যেকোনো ব্যাকএন্ড স্ক্রিপ্ট, সার্ভার ও সিস্টেম ইউটিলিটি তৈরিতে।",
      keyPoints: [
        "Zero external installation required.",
        "Highly optimized C++ bindings underneath.",
        "Use 'node:' protocol prefix (e.g. require('node:fs')) for unambiguous imports.",
        "Provides cross-platform OS abstractions."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// আধুনিক node: প্রোটোকল দিয়ে কোর মডিউলের ব্যবহার
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');

// ১. Path মডিউল (OS ইন্ডিপেনডেন্ট পাথ তৈরি)
const fullPath = path.join(__dirname, 'uploads', 'images', 'profile.png');
console.log('Resolved Path:', fullPath);
console.log('File Extension:', path.extname(fullPath));

// ২. OS মডিউল (মেমরি ক্যালকুলেশন)
const freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);
const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log(\`Free Memory: \${freeMemoryGB} GB / \${totalMemoryGB} GB\`);

// ৩. Crypto মডিউল (সিকিউর র‍্যান্ডম টোকেন তৈরি)
const resetToken = crypto.randomBytes(16).toString('hex');
console.log('Secure Token:', resetToken);`,
      explanationSteps: [
        {
          step: 1,
          title: "node: প্রিফিক্স",
          description: "কোর মডিউল ইমপোর্টে `node:` প্রিফিক্স ব্যবহার করা আধুনিক স্ট্যান্ডার্ড।"
        },
        {
          step: 2,
          title: "ক্রস-প্ল্যাটফর্ম পাথ",
          description: "`path.join()` উইন্ডোজের `\\` এবং ম্যাক/লিনাক্সের `/` স্ল্যাশ সঠিকভাবে হ্যান্ডেল করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Secure Reset Password Link Generation",
        description: "ইউজারের পাসওয়ার্ড রিসেট টোকেন তৈরিতে `crypto.randomBytes(32)` ব্যবহার করে ক্রিপ্টোগ্রাফিক্যালি শক্তিশালী র‍্যান্ডম স্ট্রিং তৈরি করা হয়।"
      }
    ],
    interviewTips: {
      tip: "টপ ৫টি কোর মডিউলের নাম দ্রুত বলে আধুনিক `node:path` প্রিফিক্স কনভেনশন উল্লেখ করুন।",
      deliveryStrategy: "কোর মডিউল কী -> ক্যাটাগরি অনুযায়ী উদাহরণ (I/O, Networking, Security, OS) -> কোড ব্যবহারের ক্ষেত্র।",
      avoidSaying: [
        {
          wrong: "Express.js বা Mongoose হলো Node.js-এর কোর মডিউল।",
          right: "Express ও Mongoose হলো থার্ড-পার্টি NPM প্যাকেজ। কোর মডিউল হলো fs, http, path, crypto ইত্যাদি।"
        }
      ]
    },
    quickRevision: [
      "কোর মডিউল = Node.js-এ আগে থেকেই থাকা বিল্ট-ইন লাইব্রেরি।",
      "প্রধান মডিউল: `fs`, `path`, `http`, `events`, `crypto`, `os`, `stream`।",
      "আলাদা NPM ইনস্টল করতে হয় না।",
      "আধুনিক কোডে `node:fs` প্রিফিক্স দিয়ে ইমপোর্ট করা ভালো অভ্যাস।"
    ],
    followUpQuestions: [
      {
        question: "What is the difference between module.exports and exports?",
        targetId: "nodejs-module-exports-vs-exports",
        shortHint: "Reference vs Object assignment."
      }
    ],
    tags: ["Node.js", "Core Modules", "fs", "path", "crypto", "http"]
  },
  {
    id: "nodejs-module-exports-vs-exports",
    slug: "nodejs-module-exports-vs-exports",
    question: "What is the difference between module.exports and exports?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "**`module.exports`** হলো আসল অবজেক্ট যা কোনো ফাইল `require()` করার সময় Node.js প্রকৃতপক্ষে রিটার্ন করে। অপরদিকে, **`exports`** হলো `module.exports`-এর মেমরি রেফারেন্স পয়েন্টার বা একটি সুবিধাজনক শর্টকাট (`exports = module.exports`)। আপনি `exports.add = fn` দিয়ে প্রপার্টি যুক্ত করতে পারেন, কিন্তু যদি সরাসরি `exports = fn` দিয়ে নতুন ভ্যালু অ্যাসাইন করে দেন, তবে `module.exports`-এর সাথে তার রেফারেন্স লিংক সম্পূর্ণ ভেঙে যায় এবং ফাইলটি খালি অবজেক্ট `{}` রিটার্ন করে।",
    easyExplanation: "সহজ উপমা:\n- `module.exports` হলো একটি আসল ট্রলি ব্যাগ।\n- `exports` হলো সেই ট্রলি ব্যাগের ওপর সাঁটানো একটি স্টিকার বা শর্টকাট হাতল।\n\n১. আপনি হাতল দিয়ে ট্রলির ভেতরে আপেল ও কমলা রাখলেন (`exports.apple = '🍎'`), তাহলে ট্রলি ব্যাগের ভেতরেই ফলগুলো থাকবে।\n২. কিন্তু আপনি যদি হাতলটা টেনে ছিঁড়ে অন্য কোনো বাক্সের সাথে লাগিয়ে দেন (`exports = 'নতুন বাক্স'`), আসল ট্রলি ব্যাগের (`module.exports`) ভেতরে কোনো পরিবর্তন হবে না এবং ক্রেতা খালি ট্রলি ব্যাগই পাবে!",
    interviewAnswer: "In Node.js CommonJS, `module.exports` is the actual object that is returned when another file calls `require()`. `exports` is simply a reference variable that initially points to `module.exports` (i.e. `exports = module.exports`). You can attach properties to `exports` (e.g. `exports.foo = 'bar'`), which mutates the shared underlying object. However, if you reassign `exports` directly (e.g. `exports = function() {}`), you overwrite the local reference variable, breaking the link to `module.exports`. As a result, `require()` will still return the original `module.exports` object.",
    detailedExplanation: {
      whatItIs: "CommonJS মডিউলে এক্সপোর্ট মেকানিজমের ইন্টারনাল রেফারেন্স স্ট্রাকচার।",
      whyItExists: "কোড লেখার সুবিধার জন্য `exports` শর্টকাট দেওয়া হয়েছে, কিন্তু মূল কন্ট্রোল `module.exports`-এর কাছে রাখা হয়েছে।",
      howItWorks: "Node.js মডিউল র‍্যাপারে `exports = module.exports = {}` ইনিশিয়ালাইজ করে।",
      whenToUse: "একক ফাংশন বা ক্লাস এক্সপোর্ট করতে সর্বদা `module.exports = MyClass` ব্যবহার করবেন।",
      keyPoints: [
        "require() ALWAYS returns module.exports, never exports.",
        "exports is just a shorthand reference pointing to module.exports.",
        "Reassigning exports breaks the reference link.",
        "Mutating properties on exports works, reassigning does not."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সঠিক উপায় - প্রপার্টি যুক্ত করা (উভয়ই কাজ করে)
exports.sayHello = () => 'Hello!';
// এটি module.exports.sayHello-এর ভেতরেই যুক্ত হবে।

// ২. ভুল উপায় - সরাসরি exports রিঅ্যাসাইন করা (BROKEN!)
exports = function() {
  return 'আমি সরাসরি এক্সপোর্ট হতে চাই!';
};
// ফলাফল: require('./file') করলে এটি পাওয়া যাবে না, খালি {} আসবে!

// ৩. একক ফাংশন বা ক্লাস এক্সপোর্টের সঠিক উপায়:
module.exports = function() {
  return 'আমি সফলভাবে এক্সপোর্ট হয়েছি!';
};`,
      explanationSteps: [
        {
          step: 1,
          title: "প্রপার্টি মিউটেশন",
          description: "`exports.key = val` করলে তা আসল `module.exports`-এ জমা হয়।"
        },
        {
          step: 2,
          title: "রেফারেন্স ব্রেকিং",
          description: "`exports = fn` করলে রেফারেন্স ভেঙে যায়।"
        },
        {
          step: 3,
          title: "একক এক্সপোর্টে module.exports",
          description: "সরাসরি ফাংশন এক্সপোর্টে সর্বদা `module.exports` অ্যাসাইন করবেন।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Express Router & Model Export",
        description: "Mongoose মডেল বা Express রাউটারে একক ইন্সট্যান্স পাঠাতে সর্বদা `module.exports = mongoose.model('User', UserSchema)` লেখা হয়।"
      }
    ],
    interviewTips: {
      tip: "`require()` সর্বদা `module.exports` রিটার্ন করে—এই লাইনটি জোর দিয়ে বলুন।",
      deliveryStrategy: "সংজ্ঞা -> রেফারেন্স লিংক (`exports = module.exports`) -> রিঅ্যাসাইনমেন্ট ভুল -> সঠিক প্র্যাকটিস।",
      avoidSaying: [
        {
          wrong: "exports হলো ক্লায়েন্ট সাইড এবং module.exports হলো সার্ভার সাইড।",
          right: "দুটিই Node.js CommonJS সার্ভার সাইডের অংশ; exports শুধুই module.exports-এর রেফারেন্স শর্টকাট।"
        }
      ]
    },
    quickRevision: [
      "`module.exports` হলো আসল অবজেক্ট যা `require()` রিটার্ন করে।",
      "`exports` হলো `module.exports`-এর রেফারেন্স শর্টকাট।",
      "`exports = ...` রিঅ্যাসাইন করলে রেফারেন্স লিংক ভেঙে যায়।",
      "একক ফাংশন বা ক্লাস এক্সপোর্টে সর্বদা `module.exports` ব্যবহার করবেন।"
    ],
    followUpQuestions: [
      {
        question: "What is NPM and how do you use it?",
        targetId: "nodejs-npm-and-how-to-use",
        shortHint: "Package management, registry, scripts."
      }
    ],
    tags: ["Node.js", "module.exports", "exports", "CommonJS", "Gotchas"]
  },
  {
    id: "nodejs-npm-and-how-to-use",
    slug: "nodejs-npm-and-how-to-use",
    question: "What is NPM and how do you use it?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "**NPM (Node Package Manager)** হলো বিশ্বের বৃহত্তম সফটওয়্যার রেজিস্ট্রি এবং Node.js-এর ডিফল্ট প্যাকেজ ও ডিপেন্ডেন্সি ম্যানেজার টুল। এর দুটি প্রধান অংশ রয়েছে: **১. NPM Registry** (অনলাইন ডাটাবেস যেখানে ২০ লাখের বেশি ওপেন সোর্স প্যাকেজ সংরক্ষিত আছে) এবং **২. NPM CLI** (টার্মিনাল কমান্ড টুল যার মাধ্যমে প্রজেক্ট ইনিশিয়ালাইজ `npm init`, প্যাকেজ ইনস্টল `npm install <pkg>`, ভার্সন আপডেট ও কাস্টম স্ক্রিপ্ট `npm run dev` চালানো যায়)।",
    easyExplanation: "সহজ উপমা:\nNPM হলো স্মার্টফোনের **Google Play Store** বা **App Store**-এর মতো:\n- আপনার অ্যাপে যদি কোনো স্পেশাল ফিচার (যেমন: পাসওয়ার্ড এনক্রিপশন বা PDF জেনারেশন) দরকার হয়, আপনাকে চাকা নতুন করে আবিষ্কার করতে হবে না।\n- আপনি টার্মিনালে `npm install bcrypt` লিখলেই বিশ্বের টপ ইঞ্জিনিয়ারদের লেখা সিকিউর কোড প্যাকেজ হিসেবে আপনার প্রজেক্টের `node_modules` ফোল্ডারে ডাউনলোড হয়ে যাবে!",
    interviewAnswer: "NPM (Node Package Manager) is the default package management ecosystem for Node.js. It comprises three components: the online public registry hosting millions of reusable JavaScript packages, the Command Line Interface (CLI) used to install and manage dependencies, and the website for exploring packages. Developers use NPM to initialize projects (`npm init`), manage dependency trees (`dependencies`, `devDependencies`), execute custom automation scripts (`npm run build`, `npm test`), and publish proprietary or open-source packages to the registry.",
    detailedExplanation: {
      whatItIs: "Node.js-এর প্যাকেজ ডিস্ট্রিবিউশন ও ম্যানেজমেন্ট টুল।",
      whyItExists: "ওপেন-সোর্স কোড সহজে শেয়ার, ডিপেন্ডেন্সি ভার্সন ট্র্যাক এবং বিল্ড স্ক্রিপ্ট অটোমেট করতে।",
      howItWorks: "`package.json` পড়ে প্যাকেজ ডাউনলোড করে `node_modules`-এ রাখে এবং `package-lock.json` দিয়ে লক করে।",
      whenToUse: "প্রতিটি Node.js, Express, React ও Next.js প্রজেক্টের লাইফসাইকেলে।",
      keyPoints: [
        "npm init -y: Creates a default package.json.",
        "npm install <pkg>: Installs production dependency.",
        "npm install -D <pkg>: Installs development-only dependency.",
        "npx: Executes npm package binaries directly without permanent installation."
      ]
    },
    codeExample: {
      language: "bash",
      code: `# ১. নতুন Node.js প্রজেক্ট ইনিশিয়ালাইজ
npm init -y

# ২. প্রোডাকশন ডিপেন্ডেন্সি ইনস্টল (Express, Dotenv)
npm install express dotenv

# ৩. ডেভেলপমেন্ট ডিপেন্ডেন্সি ইনস্টল (Nodemon)
npm install -D nodemon

# ৪. গ্লোবাল ইনস্টলেশন ছাড়া সরাসরি প্যাকেজ এক্সিকিউট করা (npx)
npx prisma init

# ৫. package.json-এ স্ক্রিপ্ট রান করা
npm run dev`,
      explanationSteps: [
        {
          step: 1,
          title: "npm init",
          description: "প্রজেক্টের মেটাডাটা ও কনফিগ ফাইল `package.json` তৈরি করে।"
        },
        {
          step: 2,
          title: "প্রোডাকশন বনাম ডেভ ডিপেন্ডেন্সি",
          description: "`-D` ফ্ল্যাগ দিয়ে ডেভেলপমেন্ট টুল আলাদা করা হয়।"
        },
        {
          step: 3,
          title: "npx এক্সিকিউশন",
          description: "প্যাকেজ বাইনারি ডাউনলোড ছাড়াই সরাসরি রান করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Automated CI/CD Pipeline",
        description: "GitHub Actions বা Docker বিল্ডের সময় `npm ci` (Clean Install) কমান্ড ব্যবহার করে এক্সাক্ট লকবুক অনুযায়ী সুপার ফাস্ট ডিপেন্ডেন্সি ইনস্টল করা হয়।"
      }
    ],
    interviewTips: {
      tip: "`npm install` বনাম `npm ci` এর পার্থক্য উল্লেখ করুন (`npm ci` সরাসরি `package-lock.json` থেকে ক্লিন ইনস্টল দেয়, যা CI/CD-এর জন্য সেরা)।",
      deliveryStrategy: "NPM কী -> CLI বনাম Registry -> প্রধান কমান্ডসমূহ -> `package-lock.json` এর ভূমিকা।",
      avoidSaying: [
        {
          wrong: "NPM কোড রান করার ইঞ্জিন।",
          right: "NPM প্যাকেজ ম্যানেজার ও স্ক্রিপ্ট রানার; কোড রান করে Node.js রানটাইম।"
        }
      ]
    },
    quickRevision: [
      "NPM = Registry + CLI Tool।",
      "`npm install` প্রজেক্টে প্যাকেজ নামায়।",
      "`dependencies` (প্রোডাকশন) vs `devDependencies` (ডেভেলপমেন্ট)।",
      "`npm ci` প্রোডাকশন ও CI/CD পাইপলাইনে ক্লিন ইনস্টলের জন্য ব্যবহৃত হয়।"
    ],
    followUpQuestions: [
      {
        question: "What are dependencies, and how do you handle them?",
        targetId: "nodejs-dependencies-management",
        shortHint: "dependencies, devDependencies, peerDependencies এবং SemVer."
      }
    ],
    tags: ["Node.js", "NPM", "Package Manager", "CLI", "Dependencies"]
  },
  {
    id: "nodejs-dependencies-management",
    slug: "nodejs-dependencies-management",
    question: "What are dependencies, and how do you handle them?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "**Dependencies** হলো কোনো প্রোজেক্ট চালু রাখতে বা ডেভেলপ করতে প্রয়োজনীয় এক্সটারনাল ৩য় পক্ষের লাইব্রেরি বা প্যাকেজসমূহ। Node.js-এ এগুলো `package.json` ফাইলে ৪টি প্রধান ক্যাটাগরিতে হ্যান্ডেল করা হয়:\n১. **`dependencies`**: প্রোডাকশন রানটাইমে অপরিহার্য প্যাকেজ (যেমন `express`, `bcrypt`, `pg`)।\n২. **`devDependencies`**: শুধুমাত্র লোকাল ডেভেলপমেন্ট ও টেস্টিংয়ে দরকারি প্যাকেজ (যেমন `nodemon`, `eslint`, `typescript`, `jest`)।\n৩. **`peerDependencies`**: প্লাগইন বা প্যাকেজ তৈরির ক্ষেত্রে ব্যবহৃত হয়, যা প্যারেন্ট অ্যাপে থাকা নির্দিষ্ট ভার্সন দাবি করে (যেমন `react` প্লাগইন)।\n৪. **`package-lock.json` & SemVer**: নির্দিষ্ট ভার্সন লক করে সেমান্টিক ভার্সনিং (`^` Caret, `~` Tilde) নিয়ন্ত্রণ করে।",
    easyExplanation: "সহজ উপমা:\nএকটি বাড়ি বানানোর মতো করে ভাবুন:\n- **`dependencies` (ইট, সিমেন্ট, রড)**: যা দিয়ে বাড়ি তৈরি হয় এবং বাড়ি দাঁড়িয়ে থাকার জন্য সারাজীবন দরকার (Production).\n- **`devDependencies` (মই, ক্রেন, রাজমিস্ত্রির হাতুড়ি)**: বাড়ি তৈরির সময় দরকার, কিন্তু বাড়ি তৈরি শেষ হয়ে গেলে এগুলো সরিয়ে ফেলা হয় (Development).\n- **`package-lock.json`**: প্রকৌশলীর নিখুঁত নীল নকশা যাতে বিশ্বের যেকোনো ঠিকাদার ঠিক একই মাপের বাড়ি বানাতে পারে!",
    interviewAnswer: "Dependencies are external reusable modules that an application relies upon. In Node.js, they are defined in `package.json` across distinct scopes:\n1. **`dependencies`**: Required at runtime in production (`npm i <pkg>`). Bundled with the deployed artifact.\n2. **`devDependencies`**: Needed exclusively during local development, linting, compiling, or testing (`npm i -D <pkg>`). Stripped in production builds via `--omit=dev`.\n3. **`peerDependencies`**: Specifies compatibility requirements when authoring plugins or libraries, ensuring the host project provides the expected dependency version.\n4. **Semantic Versioning (SemVer)**: Handled via `MAJOR.MINOR.PATCH`:\n   - `^1.2.3` (Caret): Allows backwards-compatible minor and patch updates (`<2.0.0`).\n   - `~1.2.3` (Tilde): Allows only patch bug-fix updates (`<1.3.0`).\n   - `1.2.3` (Exact): Locks to this specific version.\n5. **`package-lock.json`**: Guarantees deterministic installations across all machines by locking exact hashes and sub-dependency trees.",
    detailedExplanation: {
      whatItIs: "Node.js প্রজেক্টের প্যাকেজ ক্যাটাগরি ও ভার্সন কন্ট্রোল মেকানিজম।",
      whyItExists: "প্রোডাকশন বান্ডেল হালকা রাখা, ডিপেন্ডেন্সি কনফ্লিক্ট ও সিকিউরিটি ভার্সন ব্রেকিং প্রতিরোধ করতে।",
      howItWorks: "`package.json` ডিক্লেয়ার করে, `package-lock.json` লক করে, এবং NPM ডিপেন্ডেন্সি ট্রি রিজলভ করে।",
      whenToUse: "প্যাকেজ ইনস্টল, ডকার ইমেজ তৈরি ও CI/CD অপটিমাইজেশনের সময়।",
      keyPoints: [
        "Use npm install --production to skip devDependencies in Docker.",
        "package-lock.json should always be committed to Git.",
        "npm audit detects security vulnerabilities in dependency trees.",
        "SemVer: ^ allows minor updates, ~ allows patch updates."
      ]
    },
    codeExample: {
      language: "json",
      code: `// package.json-এ ডিপেন্ডেন্সি স্ট্রাকচার
{
  "name": "my-secure-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  },
  "dependencies": {
    "bcrypt": "^5.1.1",
    "express": "~4.19.2",
    "jsonwebtoken": "9.0.2"
  },
  "devDependencies": {
    "eslint": "^9.0.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.0"
  },
  "peerDependencies": {
    "react": ">=18.0.0"
  }
}`,
      explanationSteps: [
        {
          step: 1,
          title: "dependencies",
          description: "`bcrypt` ও `express` প্রোডাকশনে সার্ভার রান করতে আবশ্যক।"
        },
        {
          step: 2,
          title: "devDependencies",
          description: "`nodemon` ও `jest` শুধু কোড ডেভেলপ ও টেস্ট করার জন্য।"
        },
        {
          step: 3,
          title: "SemVer সিম্বল",
          description: "`^` মাইনর আপডেট নেয়, `~` প্যাচ আপডেট নেয়, এবং কোনো চিহ্ন না থাকলে এক্সাক্ট ভার্সন লক থাকে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Lightweight Docker Production Container",
        description: "ডকার ফাইলে `RUN npm ci --omit=dev` চালিয়ে অপ্রয়োজনীয় টেস্ট/লিন্ট লাইব্রেরি বাদ দিয়ে ইমেজ সাইজ ১GB থেকে ১০০MB-তে নামিয়ে আনা হয়।"
      }
    ],
    interviewTips: {
      tip: "Caret (`^`) এবং Tilde (`~`) এর পার্থক্য এবং `package-lock.json` গিট-এ কেন কমিট করা বাধ্যতামূলক তা স্পষ্টভাবে বলুন।",
      deliveryStrategy: "ক্যাটাগরিগুলো বলুন (Prod, Dev, Peer) -> SemVer এর ৩টি পার্ট ব্যাখ্যা করুন -> package-lock এর গুরুত্ব দিয়ে শেষ করুন।",
      avoidSaying: [
        {
          wrong: "package-lock.json ফাইলটি ভারী তাই এটি .gitignore-এ দিয়ে দেওয়া উচিত।",
          right: "package-lock.json অবশ্যই গিট-এ রাখতে হবে যাতে পুরো টিম এবং প্রোডাকশন সার্ভারে এক্সাক্ট একই প্যাকেজ ভার্সন ইনস্টল হয়।"
        }
      ]
    },
    quickRevision: [
      "`dependencies` = প্রোডাকশন রানটাইম প্যাকেজ।",
      "`devDependencies` = লোকাল ডেভেলপমেন্ট ও টেস্টিং প্যাকেজ।",
      "`^` (Caret) = Minor + Patch আপডেট নেয়; `~` (Tilde) = শুধুই Patch আপডেট নেয়।",
      "`package-lock.json` সব মেশিনে এক্সাক্ট ডিপেন্ডেন্সি ভার্সন নিশ্চিত করে।"
    ],
    followUpQuestions: [
      {
        question: "What are streams in Node.js?",
        targetId: "nodejs-streams-types-and-working",
        shortHint: "ফাইল ও ডেটা স্ট্রিমিং মেকানিজম।"
      }
    ],
    tags: ["Node.js", "Dependencies", "SemVer", "package.json", "package-lock"]
  },

  // ==========================================
  // 🔵 File System (8 Questions)
  // ==========================================
  {
    id: "nodejs-streams-types-and-working",
    slug: "nodejs-streams-types-and-working",
    question: "What are streams in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Streams** হলো Node.js-এর একটি অন্যতম শক্তিশালী ডেটা প্রসেসিং মেকানিজম যার মাধ্যমে সম্পূর্ণ ফাইল বা ডেটাকে একবারে মেমরিতে লোড না করে ক্ষুদ্র ক্ষুদ্র অংশে (**Chunks**) ক্রমান্বয়ে রিড বা রাইট করা যায়। Node.js-এ ৪ প্রকারের স্ট্রিম রয়েছে:\n১. **Readable Stream**: যেখান থেকে ডেটা পড়া যায় (যেমন `fs.createReadStream`, HTTP `req`)।\n২. **Writable Stream**: যেখানে ডেটা লেখা যায় (যেমন `fs.createWriteStream`, HTTP `res`)।\n৩. **Duplex Stream**: যা একই সাথে Readable এবং Writable উভয় হিসেবে কাজ করে (যেমন `net.Socket` TCP সংযোগ)।\n৪. **Transform Stream**: এক ধরনের Duplex স্ট্রিম যা ডেটা পড়ার পর পরিবর্তন/রিসাইজ/কম্প্রেস করে রাইট করে (যেমন `zlib.createGzip`)।",
    easyExplanation: "সহজ উপমা:\n- **সাধারণ মেথড (যেমন fs.readFile)**: ইউজারকে ২ ঘণ্টার একটি সিনেমা পুরোটা (২ GB) তার ফোনে ডাউনলোড না হওয়া পর্যন্ত অপেক্ষা করিয়ে রাখা এবং পুরো ২ GB র‍্যামে ঢুকিয়ে দেওয়া।\n- **Streams মেথড (যেমন Netflix / YouTube)**: সিনেমাটির প্রথম ২ সেকেন্ডের ভিডিও ডেটা (২ MB Chunk) আসার সাথে সাথে স্ক্রিনে প্লে করা শুরু করা এবং পেছনের অংশ একটু একটু করে ব্যাকগ্রাউন্ডে পড়তে থাকা। ফলে র‍্যাম এক ফোঁটাও লোড হয় না এবং তাত্ক্ষণিক ভিডিও চলতে থাকে!",
    interviewAnswer: "Streams in Node.js are collections of data that allow reading and writing data sequentially in chunks rather than buffering entire payloads into RAM. Inheriting from the `EventEmitter` class, streams enable processing massive datasets (like multi-gigabyte files or real-time media) with minimal memory footprint and low time-to-first-byte (TTFB).\n\nThere are four fundamental stream types:\n1. **Readable**: Source of streaming data (e.g. `fs.createReadStream`, `http.IncomingMessage`).\n2. **Writable**: Destination for streaming data (e.g. `fs.createWriteStream`, `http.ServerResponse`).\n3. **Duplex**: Bidirectional streams capable of both reading and writing independently (e.g. `net.Socket`).\n4. **Transform**: Duplex streams where output is computed by transforming the input data (e.g. `zlib.createGzip`, `crypto.createCipheriv`).",
    detailedExplanation: {
      whatItIs: "মেমরি অপটিমাইজড সিকোয়েনশিয়াল ডেটা রিড/রাইট মেকানিজম।",
      whyItExists: "বড় ফাইলের ক্ষেত্রে মেমরি ক্র্যাশ (Heap out of memory) রোধ করতে এবং পারফরম্যান্স বাড়াতে।",
      howItWorks: "ডেটা বাফার চাঙ্কে বিভক্ত হয়ে ইভেন্ট (`data`, `end`, `error`, `drain`) ফায়ার করার মাধ্যমে প্রবাহিত হয়।",
      whenToUse: "ফাইল আপলোড/ডাউনলোড, ভিডিও স্ট্রিমিং, CSV ডেটা পার্সিং এবং লগ প্রসেসিংয়ে।",
      keyPoints: [
        "Streams prevent RAM exhaustion on large files.",
        "Streams inherit from EventEmitter (data, end, error events).",
        "Piping (.pipe() or pipeline()) automatically connects readable to writable streams.",
        "Default highWaterMark (chunk size) is 64KB for normal streams and 16KB for objects."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

// বিশাল ফাইলকে চাঙ্ক আকারে পড়ে সাথে সাথে GZIP কম্প্রেস করে ফাইলে রাইট করা
const source = fs.createReadStream('large-video.mp4');
const gzip = zlib.createGzip(); // Transform Stream
const destination = fs.createWriteStream('large-video.mp4.gz');

// pipeline ব্যবহার করা সেরা কারণ এটি স্বয়ংক্রিয়ভাবে ক্লিনআপ ও এরর হ্যান্ডেল করে
pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('Pipeline failed:', err.message);
  } else {
    console.log('Video successfully compressed via Streams with minimal RAM usage!');
  }
});`,
      explanationSteps: [
        {
          step: 1,
          title: "Readable Stream",
          description: "ডিস্ক থেকে চাঙ্ক আকারে ডেটা রিড করে।"
        },
        {
          step: 2,
          title: "Transform Stream",
          description: "যেই চাঙ্ক আসে তাকে তাত্ক্ষণিক জিপ কম্প্রেস করে।"
        },
        {
          step: 3,
          title: "Writable Stream",
          description: "কম্প্রেসড চাঙ্ক ডেস্টিনেশন ফাইলে রাইট করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Video on Demand & Large CSV Export",
        description: "লাখ লাখ রো-এর ডাটাবেস এক্সপোর্ট করার সময় একবারে মেমরিতে না রেখে স্ট্রিমিং রেসপন্স (`res.write()`) দিয়ে ক্লায়েন্টকে সাথে সাথে ডাউনলোড শুরু করতে দেওয়া হয়।"
      }
    ],
    interviewTips: {
      tip: "৪ প্রকারের স্ট্রিমের নাম (Readable, Writable, Duplex, Transform) এবং মেমরি সেভিংসের সুবিধা উদাহরণসহ উল্লেখ করুন।",
      deliveryStrategy: "সংজ্ঞা -> Netflix উপমা -> ৪ প্রকার স্ট্রিম -> `pipeline` এর মাধ্যমে এরর-সেফ কোড দেখান।",
      avoidSaying: [
        {
          wrong: "স্ট্রিম শুধু ভিডিও চালানোর জন্য ব্যবহৃত হয়।",
          right: "স্ট্রিম যেকোনো ধরনের ডেটা (ফাইল, নেটওয়ার্ক রিকোয়েস্ট, ডাটাবেস রো, লগ) চাঙ্ক আকারে প্রসেস করতে ব্যবহৃত হয়।"
        }
      ]
    },
    quickRevision: [
      "Streams = পুরো ফাইল লোড না করে Chunks আকারে ডেটা প্রসেস করা।",
      "৪ প্রকার: Readable, Writable, Duplex, Transform।",
      "RAM ক্র্যাশ (Heap Out of Memory) রোধ করে।",
      "নিরাপদ স্ট্রিমিংয়ের জন্য `stream.pipeline` ব্যবহার করা বেস্ট প্র্যাকটিস।"
    ],
    followUpQuestions: [
      {
        question: "How would you handle large file uploads efficiently in Node.js?",
        targetId: "nodejs-handle-large-file-uploads",
        shortHint: "Busboy, Multer Streaming, S3 Multipart Upload."
      }
    ],
    tags: ["Node.js", "Streams", "Readable", "Writable", "Transform", "Memory"]
  },
  {
    id: "nodejs-handle-large-file-uploads",
    slug: "nodejs-handle-large-file-uploads",
    question: "How would you handle large file uploads efficiently in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Node.js-এ বড় ফাইল আপলোড (যেমন ১-১০ GB ভিডিও) দক্ষতার সাথে হ্যান্ডেল করতে কখনোই ফাইলকে সম্পূর্ণ সার্ভার মেমরি (RAM)-এ বাফার করা যাবে না। সেরা উপায় হলো **Streaming & Multipart Parsing**: **১. Busboy / Formidable** লাইব্রেরি ব্যবহার করে রিকোয়েস্টের ইনকামিং বাইনারি ডেটাকে স্ট্রিমিং চাঙ্ক হিসেবে রিড করা, **২. Direct Cloud Upload via Multipart Stream** (সার্ভারের লোকাল ডিস্কে ফাইল সেভ না করে সরাসরি AWS S3 বা ক্লাউড স্টোরেজে `s3.upload()` স্ট্রিমে পাইপ করা), **৩. Backpressure Management** যাতে দ্রুত ডেটা আসলেও মেমরি বাফার ওভারফ্লো না হয়, এবং **৪. Chunk Size ও Memory Limits** কঠোরভাবে কনফিগার করা।",
    easyExplanation: "সহজ উপমা:\nআপনি একটি ট্রাক থেকে ৫ টন বালু একটি গুদামে রাখবেন:\n- **খারাপ উপায়**: সব বালু আগে আপনার বসার ঘরে (Server RAM) ঢেলে স্তূপ করলেন, তারপর সেখান থেকে গুদামে নিলেন। এতে আপনার বসার ঘর ভেঙে ধ্বংস হয়ে যাবে!\n- **স্মার্ট উপায় (Streams Pipe)**: ট্রাক থেকে সরাসরি একটি কনভেয়ার বেল্ট (Stream Pipeline) গুদামের ভেতর লাগিয়ে দিলেন। বালু ট্রাকে নামার সাথে সাথে বেল্ট বেয়ে গুদামে চলে যাচ্ছে। আপনার ঘরে ১ কেজি বালুও জমল না!",
    interviewAnswer: "To handle large file uploads efficiently in Node.js:\n1. **Avoid In-Memory Buffering**: Never use default memory-storage handlers (like `multer.memoryStorage()`) because large payloads will quickly trigger `JavaScript heap out of memory` errors.\n2. **Stream-based Multipart Parsing**: Use streaming multipart parsers like **`busboy`** or `formidable` that emit file chunks sequentially as they arrive on the network socket.\n3. **Direct Cloud Piping**: Pipe the readable file stream directly to object storage (e.g. AWS S3 using `@aws-sdk/lib-storage` with Multipart Upload) without ever saving the full file to local server disk.\n4. **Apply Backpressure & Flow Control**: Leverage `stream.pipeline` to prevent fast network upload streams from overwhelming slow storage write streams.\n5. **Rate Limiting & File Validation**: Validate mime-type from initial magic bytes, enforce max file size limits early, and clean up temporary sockets on aborted connections.",
    detailedExplanation: {
      whatItIs: "হাই-স্কেল ওয়েব অ্যাপ্লিকেশনে গিগাবাইট সাইজের ফাইল নিরাপদে আপলোড করার আর্কিটেকচার।",
      whyItExists: "কনকারেন্ট মাল্টিপল ইউজারের বড় ফাইল আপলোডে সার্ভার ক্র্যাশ এবং ডিস্ক স্পেস ফুল হওয়া থামাতে।",
      howItWorks: "HTTP Request Socket -> Busboy stream parser -> Cloud S3 Writable Upload Stream।",
      whenToUse: "ভিডিও শেয়ারিং প্ল্যাটফর্ম, ড্রাইভ স্টোরেজ এবং বড় ডেটাসেট আপলোড সিস্টেমে।",
      keyPoints: [
        "Never use memoryStorage for large files.",
        "Use stream.pipeline for safe error handling and auto-destruction.",
        "Upload directly to S3 via Upload class with multipart upload chunks.",
        "Abort and drain the stream immediately if unauthorized."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const http = require('http');
const busboy = require('busboy');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const bb = busboy({ headers: req.headers, limits: { fileSize: 2 * 1024 * 1024 * 1024 } }); // 2GB Max

    bb.on('file', (name, fileStream, info) => {
      const { filename } = info;
      const saveTo = path.join(__dirname, 'uploads', \`\${Date.now()}-\${filename}\`);
      const writeStream = fs.createWriteStream(saveTo);

      console.log(\`Uploading \${filename} via Stream...\`);
      
      // মেমরিতে না রেখে সরাসরি ডিস্কে চাঙ্ক পাইপ করা
      fileStream.pipe(writeStream);

      fileStream.on('end', () => {
        console.log(\`File [\${filename}] uploaded successfully without RAM spike!\`);
      });
    });

    bb.on('finish', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'Upload completed' }));
    });

    req.pipe(bb);
  }
});

server.listen(3000);`,
      explanationSteps: [
        {
          step: 1,
          title: "Busboy স্ট্রিমিং",
          description: "রিকোয়েস্টকে সরাসরি বাসবয় পার্সারে পাইপ করা হয়।"
        },
        {
          step: 2,
          title: "চাঙ্ক পাইপিং",
          description: "`fileStream.pipe(writeStream)` প্রতিটি চাঙ্ক সাথে সাথে ডিস্কে সেভ করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "YouTube / Vimeo Video Processing",
        description: "ভিডিও ফাইল সার্ভারে জমা না রেখে সরাসরি S3-এ চাঙ্ক আপলোড হয় এবং S3 ইভেন্ট ট্রিগার দিয়ে ব্যাকগ্রাউন্ডে AWS Lambda দিয়ে এনকোডিং শুরু হয়।"
      }
    ],
    interviewTips: {
      tip: "`multer.memoryStorage()` কেন প্রোডাকশনে বিপদজনক এবং `Busboy` + `Direct S3 Multipart Streaming` কেন সেরা সমাধান তা ব্যাখ্যা করুন।",
      deliveryStrategy: "সমস্যা (RAM exhaustion) -> সমাধান (Streaming & Busboy) -> আর্কিটেকচার (Direct Cloud Upload) -> সিকিউরিটি লিমিট।",
      avoidSaying: [
        {
          wrong: "ফাইল আপলোড করতে সার্ভারের RAM সাইজ বাড়িয়ে ৩২ GB করে দিলেই সমস্যা সমাধান।",
          right: "হার্ডওয়্যার বাড়িয়ে সমাধান হবে না; স্ট্রিম-বেসড প্রসেসিং দিয়ে মাত্র ৫০ MB RAM ব্যবহার করেই আনলিমিটেড সাইজের ফাইল হ্যান্ডেল করা যায়।"
        }
      ]
    },
    quickRevision: [
      "কখনই বড় ফাইল RAM-এ বাফার করবেন না (`memoryStorage` নিষিদ্ধ)।",
      "Busboy দিয়ে চাঙ্ক আকারে স্ট্রিম পার্স করুন।",
      "সরাসরি S3 Multipart Upload-এ পাইপ করুন।",
      "সাইজ লিমিট এবং ব্যাকপ্রেশার ঠিকমতো হ্যান্ডেল করুন।"
    ],
    followUpQuestions: [
      {
        question: "What is backpressure in streams, and how do you solve it?",
        targetId: "nodejs-backpressure-in-streams",
        shortHint: "HighWaterMark, pause/resume, stream.pipeline।"
      }
    ],
    tags: ["Node.js", "File Upload", "Streams", "Busboy", "Performance"]
  },
  {
    id: "nodejs-backpressure-in-streams",
    slug: "nodejs-backpressure-in-streams",
    question: "What is backpressure in streams, and how do you solve it?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "**Backpressure** হলো স্ট্রিমিংয়ের এমন একটি পরিস্থিতি যেখানে ডেটা পড়ার গতি (**Readable Stream**) ডেটা লেখার গতির (**Writable Stream**) চেয়ে অনেক বেশি দ্রুত হয়। এর ফলে ডেস্টিনেশন স্ট্রিম সময়মতো ডেটা প্রসেস বা ডিস্কে রাইট করতে না পারায় মধ্যবর্তী বাফারে বিপুল পরিমাণ ডেটা জমতে থাকে, যার ফলে মেমরি স্পাইক এবং অ্যাপ্লিকেশন ক্র্যাশ হতে পারে। এটি সমাধান করার উপায় হলো:\n১. **`readable.pipe(writable)` বা `stream.pipeline()` ব্যবহার করা** (Node.js স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার ম্যানেজ করে),\n২. ম্যানুয়াল কোডে `writable.write(chunk)` যদি `false` রিটার্ন করে, তবে `readable.pause()` কল করে রিডিং থামানো এবং Writable স্ট্রিম ফাঁকা হলে `drain` ইভেন্টে আবার `readable.resume()` করা।",
    easyExplanation: "সহজ উপমা:\n- আপনি একটি ছোট ফানেলে (Writable Stream) বিশাল এক বালতি পানি (Readable Stream) এক সেকেন্ডে ঢেলে দিচ্ছেন।\n- ফানেলের নিচের চিকন নল দিয়ে পানি ধীরে ধীরে নামছে। কিন্তু উপর থেকে অতিরিক্ত পানি আসায় ফানেল উপচে মেঝেতে পানি ছড়িয়ে পড়ে বন্যা (Memory Leak/Crash) তৈরি হবে!\n- **Backpressure Solution**: ফানেলের মুখ ভরে যাওয়া মাত্রই (`write() === false`) উপরের বালতি থেকে পানি ঢালা বন্ধ রাখা (`pause()`), এবং ফানেল খালি হওয়া মাত্রই (`drain` event) আবার পানি ঢালা শুরু করা (`resume()`)!",
    interviewAnswer: "Backpressure occurs in a stream pipeline when the data production rate (Readable Stream) exceeds the data consumption rate (Writable Stream). When the writable stream's internal buffer exceeds its configured `highWaterMark` threshold, `write()` returns `false`, indicating that the buffer is full. If the readable stream continues pushing data, incoming chunks accumulate in memory, causing severe memory bloat and potential process crashes.\n\n**Solutions**:\n1. **Automated via `.pipe()` or `stream.pipeline()`**: Node.js handles backpressure out-of-the-box by pausing the source when the destination buffer fills up and resuming it once the destination emits the `'drain'` event.\n2. **Manual Handling**: Check the boolean return value of `writable.write(chunk)`. If `false`, call `readable.pause()`. Attach a listener to `writable.on('drain', ...)` and call `readable.resume()` once the buffer is cleared.",
    detailedExplanation: {
      whatItIs: "ফাস্ট প্রডিউসার এবং স্লো কনজিউমারের মধ্যকার ডেটা ফ্লো রেগুলেশন মেকানিজম।",
      whyItExists: "নেটওয়ার্ক ও ডিস্ক স্পিড অসমতার কারণে বাফার ওভারফ্লো ও মেমরি ক্র্যাশ ঠেকাতে।",
      howItWorks: "`highWaterMark` লিমিট পূর্ণ হলে `write()` মেথড `false` দেয় -> সোর্স পজ হয় -> বাফার খালি হলে `drain` ইভেন্ট সোর্স চালু করে।",
      whenToUse: "কাস্টম স্ট্রিম তৈরি, বড় ফাইল ট্রান্সফার ও ডাটাবেস ব্যাচিং অপারেশনে।",
      keyPoints: [
        "write() returns false when buffer exceeds highWaterMark.",
        "The 'drain' event signals when it is safe to resume writing.",
        "pipe() and pipeline() handle backpressure automatically.",
        "Manual stream loops must respect backpressure to avoid OOM crashes."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ম্যানুয়াল ব্যাকপ্রেশার হ্যান্ডলিং প্যাটার্ন
const fs = require('fs');

const readable = fs.createReadStream('huge-source.log');
const writable = fs.createWriteStream('destination.log');

readable.on('data', (chunk) => {
  // writable.write() যদি false দেয়, তার মানে বাফার ফুল!
  const canContinue = writable.write(chunk);

  if (!canContinue) {
    console.log('Backpressure detected! Pausing readable stream...');
    readable.pause(); // ডাটা পড়া সাময়িক বন্ধ
  }
});

// যখন Writable স্ট্রিম ডিস্কে ডাটা রাইট করে তার বাফার খালি করবে:
writable.on('drain', () => {
  console.log('Buffer drained! Resuming readable stream...');
  readable.resume(); // আবার ডাটা পড়া চালু
});

readable.on('end', () => {
  writable.end();
  console.log('Finished streaming with perfect backpressure control.');
});`,
      explanationSteps: [
        {
          step: 1,
          title: "write() রিটার্ন চেক",
          description: "`writable.write(chunk)` এর রিটার্ন মান `false` হলে সোর্স পজ করা হয়।"
        },
        {
          step: 2,
          title: "drain ইভেন্টে রিজিউম",
          description: "ডেস্টিনেশন বাফার খালি হলে `drain` ইভেন্ট ফায়ার করে এবং সোর্স আবার রিজিউম হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Fast SSD to Slow Network Streaming",
        description: "সার্ভার যখন দ্রুতগতিতে NVMe SSD থেকে ফাইল পড়ে কিন্তু ক্লায়েন্ট ২G স্লো মোবাইলে ডাউনলোড করে, ব্যাকপ্রেশার সার্ভারের মেমরি ফুলে যাওয়া রোধ করে।"
      }
    ],
    interviewTips: {
      tip: "`highWaterMark`, `write() === false`, এবং `drain` ইভেন্ট—এই ৩টি টার্ম সঠিকভাবে বলুন।",
      deliveryStrategy: "সমস্যা কী -> ফানেল উপচে পড়ার উপমা -> `write()` এর `false` ও `drain` ইভেন্ট -> `.pipe()` এর অটো সুবিধা।",
      avoidSaying: [
        {
          wrong: "Backpressure হলো একটি এরর যা কোড ক্র্যাশ করায়।",
          right: "Backpressure কোনো এরর নয়, এটি একটি ফ্লো-কন্ট্রোল সিগন্যাল যার মাধ্যমে মেমরি ক্র্যাশ প্রতিরোধ করা হয়।"
        }
      ]
    },
    quickRevision: [
      "Backpressure = ডাটা রিডিং স্পিড > রাইটিং স্পিড।",
      "বাফার ফুল হলে `writable.write()` মেথড `false` রিটার্ন করে।",
      "`readable.pause()` দিয়ে পড়া থামানো হয়, `drain` ইভেন্টে `readable.resume()` করা হয়।",
      "`.pipe()` এবং `stream.pipeline` স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার হ্যান্ডেল করে।"
    ],
    followUpQuestions: [
      {
        question: "What are buffers in Node.js?",
        targetId: "nodejs-buffers-explained",
        shortHint: "বাইনারি মেমরি এবং V8 হিপের বাইরে স্টোরেজ।"
      }
    ],
    tags: ["Node.js", "Backpressure", "Streams", "Performance", "Flow Control"]
  },
  {
    id: "nodejs-buffers-explained",
    slug: "nodejs-buffers-explained",
    question: "What are buffers in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "**Buffer** হলো Node.js-এর একটি গ্লোবাল ক্লাস যা খাঁটি **Raw Binary Data** সংরক্ষণের জন্য V8 জাভাস্ক্রিপ্ট হিপ মেমরির বাইরে সরাসরি ফিক্সড-সাইজ মেমরি ব্লক বরাদ্দ (Allocate) করে। জাভাস্ক্রিপ্ট আদিমকালে শুধুমাত্র স্ট্রিং নিয়ে কাজ করতে পারত এবং বাইনারি ডেটা হ্যান্ডেল করতে পারত না; Buffer সেই সীমাবদ্ধতা দূর করে ফাইল সিস্টেম (`fs`), ক্রিপ্টোগ্রাফি ও নেটওয়ার্কিং স্ট্রিমের কাঁচা বাইট (Octets/Hexadecimal) অতি দ্রুত প্রসেস করার সুযোগ দেয়।",
    easyExplanation: "সহজ উপমা:\nকম্পিউটার কোনো ছবি, অডিও বা ভিডিওর ভাষা বোঝে না; সে শুধু বোঝে ০ এবং ১ (বাইনারি বাইটস)।\n- সাধারণ জাভাস্ক্রিপ্ট ভেরিয়েবল হলো 'টেক্সট খাতা'।\n- **Buffer** হলো সরাসরি মেমরির একটি 'র কাঁচা খোদাই করা বক্স' যেখানে ছবি বা ফাইলের প্রতি বাইট বাইনারি সংখ্যা (যেমন `<Buffer 48 65 6c 6c 6f>`) হুবহু সেভ থাকে যাতে কোনো ক্যারেক্টার লস বা এনকোডিং এরর ছাড়াই সুপার ফাস্ট স্পিডে ডেটা ট্রান্সফার করা যায়!",
    interviewAnswer: "In Node.js, the `Buffer` class is a globally available utility designed for handling raw binary data directly outside the V8 JavaScript heap in dedicated memory chunks. Because pure JavaScript was historically designed for UTF-16 string manipulation, Node.js introduced `Buffer` (built on top of JavaScript's `Uint8Array`) to interact with TCP network streams, file system I/O, and cryptographic operations where direct byte manipulation is required. Buffers have a fixed memory allocation upon creation and support various encodings like `utf-8`, `hex`, `base64`, and `binary`.",
    detailedExplanation: {
      whatItIs: "বাইনারি ডেটা ম্যানিপুলেশনের জন্য ডেডিকেটেড ফিক্সড সাইজ মেমরি স্ট্রাকচার।",
      whyItExists: "ফাইল রিড/রাইট এবং নেটওয়ার্ক সকেটে বাইনারি বাইট সরাসরি হ্যান্ডেল করতে।",
      howItWorks: "C++ মেমরি পুলে বরাদ্দ হয় এবং প্রতিটি এলিমেন্ট ০ থেকে ২৫৫ (১ বাইট) পর্যন্ত পূর্ণসংখ্যা ধারণ করে।",
      whenToUse: "ইমেজ প্রসেসিং, ফাইল আপলোড, ক্রিপ্টো হ্যাশিং এবং নেটওয়ার্ক প্যাকেট পার্সিংয়ে।",
      keyPoints: [
        "Allocated outside the V8 heap in native C++ memory.",
        "Buffer length is fixed and cannot be dynamically resized.",
        "Buffer.alloc() initializes memory with zeroes (Safe).",
        "Buffer.allocUnsafe() allocates memory faster without clearing old data (Careful!)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Buffer তৈরি এবং এনকোডিং কনভার্শন ডেমো

// ১. স্ট্রিং থেকে বাফার তৈরি
const bufFromString = Buffer.from('Node.js Pro');
console.log('Raw Binary Buffer (Hex):', bufFromString);
console.log('Buffer Byte Length:', bufFromString.length);

// ২. বাফার থেকে Base64 এবং UTF-8 কনভার্ট
const base64String = bufFromString.toString('base64');
console.log('Base64 Encoded:', base64String);

const decodedBack = Buffer.from(base64String, 'base64').toString('utf8');
console.log('Decoded Back:', decodedBack);

// ৩. সেফ মেমরি এলোকেশন (১০ বাইটের খালি বাফার)
const safeBuffer = Buffer.alloc(10);
safeBuffer.write('Hi');
console.log('Safe Buffer:', safeBuffer);`,
      explanationSteps: [
        {
          step: 1,
          title: "Buffer.from()",
          description: "স্ট্রিংকে বাইনারি বাইট অ্যারেতে রূপান্তর করে।"
        },
        {
          step: 2,
          title: "এনকোডিং রূপান্তর",
          description: "`toString('base64')` দিয়ে সহজে ফরম্যাট বদলানো যায়।"
        },
        {
          step: 3,
          title: "Buffer.alloc()",
          description: "নিরাপদ ০ দিয়ে পূর্ণ নির্দিষ্ট সাইজের বাফার তৈরি করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "JWT & Image Base64 Conversion",
        description: "JWT টোকেনের পেলোড ডিকোড করতে বা ক্যানভাস ইমেজকে বেস৬৪-এ কনভার্ট করে ক্লাউডে পাঠাতে `Buffer.from(data, 'base64')` অপরিহার্য।"
      }
    ],
    interviewTips: {
      tip: "`Buffer.alloc()` (নিরাপদ, মেমরি জিরো দিয়ে ক্লিয়ার করে) বনাম `Buffer.allocUnsafe()` (দ্রুত কিন্তু পুরানো মেমরি ট্র্যাশ থাকতে পারে) এর পার্থক্য বলুন।",
      deliveryStrategy: "সংজ্ঞা -> কেন দরকার (বাইনারি I/O) -> মেমরি মডেল (V8 হিপের বাইরে) -> কোড ব্যবহারের ক্ষেত্র।",
      avoidSaying: [
        {
          wrong: "বাফার হলো সাধারণ জাভাস্ক্রিপ্ট স্ট্রিং বা ডায়নামিক অ্যারে।",
          right: "বাফার হলো ফিক্সড-সাইজের খাঁটি বাইনারি মেমরি যা Uint8Array-এর ওপর ভিত্তি করে তৈরি।"
        }
      ]
    },
    quickRevision: [
      "Buffer = V8 হিপের বাইরে থাকা ফিক্সড-সাইজ কাঁচা বাইনারি মেমরি।",
      "ফাইল ও নেটওয়ার্ক স্ট্রিমের বাইট প্রসেস করতে ব্যবহৃত হয়।",
      "`Buffer.alloc()` নিরাপদ; `Buffer.allocUnsafe()` দ্রুত কিন্তু আনক্লিনড মেমরি রাখে।",
      "`utf-8`, `base64`, `hex` ইত্যাদি এনকোডিং সাপোর্ট করে।"
    ],
    followUpQuestions: [
      {
        question: "How do you read and write files in Node.js?",
        targetId: "nodejs-read-and-write-files",
        shortHint: "fs মডিউল, fs.promises, এবং Streams।"
      }
    ],
    tags: ["Node.js", "Buffer", "Binary", "Memory", "Encoding"]
  },
  {
    id: "nodejs-read-and-write-files",
    slug: "nodejs-read-and-write-files",
    question: "How do you read and write files in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Node.js-এ ফাইল রিড ও রাইট করার জন্য ৩টি প্রধান পদ্ধতি রয়েছে:\n১. **`fs/promises` (আধুনিক ও সেরা)**: `async/await` দিয়ে নন-ব্লকিংভাবে ক্লিন কোডে `fs.readFile()` ও `fs.writeFile()` ব্যবহার করা।\n২. **Streams (বড় ফাইলের জন্য সেরা)**: `fs.createReadStream()` এবং `fs.createWriteStream()` দিয়ে চাঙ্ক আকারে মেমরি সেভ করে ফাইল হ্যান্ডেল করা।\n৩. **Callback-based `fs` (ঐতিহ্যবাহী)**: `fs.readFile(path, 'utf8', (err, data) => {})` কলব্যাক প্যাটার্ন।",
    easyExplanation: "সহজ উপমা:\n১. **ছোট ফাইল (যেমন config.json)**: চিঠি পড়ার মতো—একবারে চোখের সামনে পুরো চিঠিটি খুলে পড়ে ফেলা (`await fs.readFile`).\n২. **বড় ফাইল (যেমন ৫ GB মুভি)**: পাইপ দিয়ে পানি নেওয়ার মতো—একটু একটু করে চাঙ্ক আকারে পাইপ দিয়ে ফাইলে ট্রান্সফার করা (`fs.createReadStream.pipe`).",
    interviewAnswer: "In Node.js, file reading and writing can be accomplished through three primary APIs in the `fs` module:\n1. **`fs.promises` with `async/await` (Recommended for typical files)**: Provides a clean Promise-based asynchronous interface using `await fs.readFile(path, 'utf8')` and `await fs.writeFile(path, data)`.\n2. **Streams (Mandatory for large files)**: Employs `fs.createReadStream()` and `fs.createWriteStream()` with `stream.pipeline()` to process data chunk-by-chunk without memory spikes.\n3. **Traditional Callbacks (`fs.readFile`)**: The classic error-first callback pattern.\n*Note: Synchronous methods (`fs.readFileSync`) exist but must be avoided in request-handling code to prevent thread blocking.*",
    detailedExplanation: {
      whatItIs: "Node.js ফাইল সিস্টেমের মূল I/O অপারেশন কৌশল।",
      whyItExists: "লোকাল কনফিগ লোড, লগ রাইট, ডেটা প্রসেসিং এবং রিপোর্ট জেনারেশন করতে।",
      howItWorks: "Libuv থ্রেড পুলে ফাইল I/O অফলোড হয়ে নন-ব্লকিংভাবে সম্পন্ন হয়।",
      whenToUse: "ছোট ফাইলে `fs/promises`; বড় ফাইলে Streams; সার্ভার বুটস্ট্র্যাপিংয়ে Sync।",
      keyPoints: [
        "Always specify encoding ('utf8') in readFile to get string instead of raw Buffer.",
        "fs.writeFile overwrites by default; use { flag: 'a' } to append data or fs.appendFile.",
        "Use fs.promises with try/catch for robust error handling.",
        "Use stream.pipeline for large multi-megabyte payloads."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('node:fs/promises');
const path = require('node:path');

async function handleFiles() {
  const filePath = path.join(__dirname, 'demo.txt');

  try {
    // ১. ফাইল রাইট করা (নন-ব্লকিং)
    await fs.writeFile(filePath, 'Hello Shuvo! Welcome to Node.js Mastery.\\n', 'utf8');
    console.log('1. File written successfully.');

    // ২. ফাইলে অতিরিক্ত ডাটা অ্যাপেন্ড করা
    await fs.appendFile(filePath, 'Adding another line at the end.\\n', 'utf8');
    console.log('2. File appended.');

    // ৩. ফাইল রিড করা
    const content = await fs.readFile(filePath, 'utf8');
    console.log('3. File Content:\\n' + content);
  } catch (error) {
    console.error('File operation failed:', error.message);
  }
}

handleFiles();`,
      explanationSteps: [
        {
          step: 1,
          title: "fs/promises ব্যবহার",
          description: "ক্লিন `async/await` সিনট্যাক্সে নন-ব্লকিং ফাইল অপারেশন।"
        },
        {
          step: 2,
          title: "try/catch হ্যান্ডলিং",
          description: "ফাইল না পাওয়া গেলে বা পারমিশন এরর হলে সুন্দরভাবে হ্যান্ডেল হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Daily Server Error Logging",
        description: "সার্ভারের আনহ্যান্ডেল্ড এররগুলো `fs.appendFile('error.log', err.stack)` দিয়ে টাইমস্ট্যাম্পসহ ফাইলে লগ করা হয়।"
      }
    ],
    interviewTips: {
      tip: "ছোট ফাইল বনাম বড় ফাইলের পার্থক্যে `fs/promises` এবং `Streams`-এর যথাযথ ব্যবহারের কথা বলুন।",
      deliveryStrategy: "৩টি পদ্ধতি উল্লেখ করুন -> `fs/promises` এর কোড ব্যাখ্যা করুন -> `utf8` এনকোডিংয়ের প্রয়োজনীয়তা বলুন।",
      avoidSaying: [
        {
          wrong: "`fs.writeFile` ফাইলে নতুন ডেটা যোগ করে আগের ডেটা রেখে দেয়।",
          right: "`fs.writeFile` ডিফল্টভাবে আগের ডেটা মুছে ওভাররাইট করে; অ্যাপেন্ড করতে `fs.appendFile` ব্যবহার করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "সাধারণ ফাইলে `fs/promises` এবং `async/await` ব্যবহার করুন।",
      "বড় ফাইলে `fs.createReadStream` ও Streams ব্যবহার করুন।",
      "`fs.readFile(path, 'utf8')` দিলে টেক্সট স্ট্রিং রিটার্ন করে।",
      "ডাটা যুক্ত করতে `fs.appendFile` ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "What is the difference between synchronous and asynchronous file operations?",
        targetId: "nodejs-sync-vs-async-file-operations",
        shortHint: "থ্রেড ব্লকিং এবং পারফরম্যান্স তুলনা।"
      }
    ],
    tags: ["Node.js", "File System", "fs", "fs/promises", "I/O"]
  },
  {
    id: "nodejs-sync-vs-async-file-operations",
    slug: "nodejs-sync-vs-async-file-operations",
    question: "What is the difference between synchronous and asynchronous file operations?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "**Synchronous File Operations** (যেমন `fs.readFileSync`, `fs.writeFileSync`) মূল জাভাস্ক্রিপ্ট কল স্ট্যাক এবং ইভেন্ট লুপকে সম্পূর্ণ **ব্লক** করে দেয় যতক্ষণ না ডিস্ক থেকে ফাইলটি সম্পূর্ণ পড়া বা লেখা শেষ হয়। ফলে এই সময়ে সার্ভারে অন্য কোনো ইউজার রিকোয়েস্ট করতে পারে না। অপরদিকে, **Asynchronous File Operations** (যেমন `fs.readFile`, `fs/promises`) ফাইল অপারেশনের কাজটি Libuv থ্রেড পুলে অফলোড করে মেইন থ্রেডকে মুক্ত রাখে, ফলে সার্ভার শত শত অন্যান্য ইউজারের রিকোয়েস্ট ল্যাগ ছাড়া প্রসেস করতে পারে।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যস্ত দোকানের বিক্রেতার কথা ভাবুন:\n- **Synchronous**: একজন ক্রেতা এসে বলল 'পেছনের গোডাউন থেকে বড় একটি বাক্স এনে দিন'। বিক্রেতা নিজে গোডাউনে গেল এবং ৫ মিনিট পর ফিরে এল। এই ৫ মিনিট দোকানের অন্য ২০ জন ক্রেতা কাউন্টারে দাঁড়িয়ে হা-হুতাশ করল!\n- **Asynchronous**: বিক্রেতা গোডাউনের বয়-কে বলল 'বাক্সটা নিয়ে এসো', এবং সেই ফাঁকে সামনের ২০ জন ক্রেতাকে পণ্য বিক্রি করে ক্যাশ বুঝে নিল। বাক্স চলে এলে প্রথম ক্রেতাকে দিয়ে দিল!",
    interviewAnswer: "The distinction lies in **blocking vs non-blocking execution**:\n- **Synchronous File APIs (`*Sync`)**: Execute directly on the single JavaScript thread. The V8 engine halts and waits for the physical hard drive to complete the I/O before executing the next line of code. In an active HTTP server, this freezes the entire event loop, causing severe latency spikes and connection timeouts for all concurrent users.\n- **Asynchronous File APIs**: Offload the file I/O task to the Libuv worker thread pool. The main thread immediately resumes serving other incoming network requests. Once the file read/write is finished, the callback or Promise resolution is scheduled back onto the event loop, ensuring high throughput.",
    detailedExplanation: {
      whatItIs: "ফাইল I/O-তে ব্লকিং বনাম নন-ব্লকিং এক্সিকিউশনের টেকনিক্যাল তুলনা।",
      whyItExists: "সিঙ্গেল থ্রেডেড সার্ভারকে হাই পারফরম্যান্স ও রেসপন্সিভ রাখতে।",
      howItWorks: "Sync মেথড Call Stack আটকে রাখে; Async মেথড Libuv থ্রেড পুলে অফলোড করে।",
      whenToUse: "Sync: শুধুমাত্র অ্যাপ স্টার্টআপের সময় কনফিগ ফাইল লোডে; Async: সব রানটাইম ও API রিকোয়েস্টে।",
      keyPoints: [
        "Synchronous methods block the entire Node.js event loop.",
        "Asynchronous methods leverage Libuv thread pool in background.",
        "Sync errors are caught via try/catch; Async errors are caught via Promise.catch or error-first callback.",
        "Never use Sync file operations inside Express route handlers."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');

// ১. Synchronous (Blocking) - সার্ভার হ্যাং হতে পারে
console.time('Sync Read');
const syncContent = fs.readFileSync('large-data.json', 'utf8');
console.log('Sync Read Completed');
console.timeEnd('Sync Read');

// ২. Asynchronous (Non-Blocking) - মেইন থ্রেড মুক্ত থাকে
console.time('Async Read');
fs.readFile('large-data.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Async Read Completed in Background');
  console.timeEnd('Async Read');
});
console.log('মেইন থ্রেড অন্য কাজ করার জন্য সাথে সাথে ফ্রি!');`,
      explanationSteps: [
        {
          step: 1,
          title: "Sync টাইম ব্লক",
          description: "টাইম শেষ না হওয়া পর্যন্ত কোনো কোড চলবে না।"
        },
        {
          step: 2,
          title: "Async তাৎক্ষণিক রিলিজ",
          description: "অ্যাসিঙ্ক কোড ব্যাকগ্রাউন্ডে দিয়ে মেইন থ্রেড সাথে সাথে পরবর্তী লাইনে চলে যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Startup Config vs Request Handler",
        description: "সার্ভার বুট হওয়ার সময় `fs.readFileSync('.env')` ঠিক আছে, কিন্তু কোনো ইউজার যখন প্রোফাইল পিকচার আপলোড করে তখন অবশ্যই `fs.promises.writeFile` ব্যবহার করতে হবে।"
      }
    ],
    interviewTips: {
      tip: "কখন Sync ব্যবহার করা বৈধ (App startup config) এবং কখন মারাত্মক ভুল (API endpoints) তা স্পষ্টভাবে বুঝিয়ে বলুন।",
      deliveryStrategy: "পার্থক্য -> ইভেন্ট লুপ ব্লকিংয়ের প্রভাব -> অনুমোদিত ব্যবহারের ক্ষেত্র।",
      avoidSaying: [
        {
          wrong: "Sync ফাইল অপারেশন ফাস্ট তাই এটি সবসময় ব্যবহার করা ভালো।",
          right: "Sync অপারেশন একক ইউজারের জন্য সহজ মনে হলেও সার্ভারে একসাথে একাধিক ইউজার থাকলে পুরো সার্ভার হ্যাং করে ফেলে।"
        }
      ]
    },
    quickRevision: [
      "Sync = ব্লকিং, ইভেন্ট লুপ থামিয়ে দেয়, অন্য ইউজার আটকে যায়।",
      "Async = নন-ব্লকিং, Libuv থ্রেড পুলে ব্যাকগ্রাউন্ডে কাজ করে।",
      "API হ্যান্ডলারের ভেতর কখনই `*Sync` মেথড ব্যবহার করা যাবে না।",
      "শুধুমাত্র সার্ভার স্টার্টআপের শুরুতে কনফিগ লোডে Sync বৈধ।"
    ],
    followUpQuestions: [
      {
        question: "How do you watch for file changes in Node.js?",
        targetId: "nodejs-watch-file-changes",
        shortHint: "fs.watch vs fs.watchFile vs chokidar."
      }
    ],
    tags: ["Node.js", "Sync vs Async", "File System", "fs", "Performance"]
  },
  {
    id: "nodejs-watch-file-changes",
    slug: "nodejs-watch-file-changes",
    question: "How do you watch for file changes in Node.js?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Medium",
    shortAnswer: "Node.js-এ ফাইল বা ডিরেক্টরির পরিবর্তন (Create, Update, Delete) ওয়াচ করার জন্য ৩টি উপায় আছে:\n১. **`fs.watch()` (কোর API - সেরা ও দ্রুত)**: অপারেটিং সিস্টেমের নেটিভ ফাইল নোটিফিকেশন ইভেন্ট (Linux `inotify`, macOS `FSEvents`, Windows `ReadDirectoryChangesW`) ব্যবহার করে লাইটওয়েটভাবে ইভেন্ট পাঠায়।\n২. **`fs.watchFile()` (Polling-based)**: নির্দিষ্ট সময় পর পর (`interval`) ফাইলের স্ট্যাটাস পোলিং করে পরিবর্তন খোঁজে (CPU কনজাম্পশন বেশি)।\n৩. **`chokidar` (প্রোডাকশন গ্রেড প্যাকেজ)**: `fs.watch`-এর ক্রস-প্ল্যাটফর্ম অসামঞ্জস্যতা ও ডুপ্লিকেট ইভেন্ট দূর করে নির্ভরযোগ্য ফাইল ওয়াচিং প্রদান করে (Nodemon ও Webpack এটি ব্যবহার করে)।",
    easyExplanation: "সহজ উপমা:\n১. **`fs.watch()` (দরজার স্মার্ট বেল)**: যখনই দরজায় কেউ টোকা দেয় সাথে সাথে বেল বেজে ওঠে (OS Event - অত্যন্ত ফাস্ট ও লো পাওয়ার)।\n২. **`fs.watchFile()` (বারবার উঠে গিয়ে দরজায় উঁকি দেওয়া)**: দারোয়ান প্রতি ৫ সেকেন্ড পর পর গিয়ে দেখে কেউ দাঁড়িয়ে আছে কি না (Polling - অপ্রয়োজনীয় ক্লান্তি ও CPU অপচয়)।\n৩. **`chokidar` (প্রফেশনাল সিকিউরিটি গার্ড)**: যে স্মার্ট বেল ব্যবহার করে এবং নিশ্চিত করে কোনো ভুয়া কল না আসে!",
    interviewAnswer: "In Node.js, file and directory watching can be implemented using:\n1. **`fs.watch(filename, [options], listener)`**: Highly efficient native watcher that uses low-level OS notifications (`inotify` on Linux, `FSEvents` on macOS). It is fast and low-resource, but OS-dependent and can occasionally fire duplicate events.\n2. **`fs.watchFile(filename, [options], listener)`**: Employs periodic polling (stat checking). Slower and resource-intensive, but works across network-mounted file systems where native OS events are unavailable.\n3. **`chokidar` (Industry Standard Library)**: Wraps `fs.watch` and `fs.watchFile` to normalize cross-platform quirks, handle rapid file writes, eliminate duplicate events, and provide a clean EventEmitter API. Widely used by build tools like Vite, Webpack, and Nodemon.",
    detailedExplanation: {
      whatItIs: "ফাইল সিস্টেমে কোনো পরিবর্তন হলে কোড স্বয়ংক্রিয়ভাবে ট্রিগার করার মেকানিজম।",
      whyItExists: "হট-রিলোডিং (Nodemon), কনফিগ অটো-আপডেট এবং ফাইল সিঙ্কিংয়ের জন্য।",
      howItWorks: "OS কার্নেল ইভেন্ট লিসেন করে অথবা ফাইল মেটাডাটা পোল করে পরিবর্তন শনাক্ত করে।",
      whenToUse: "ডেভেলপমেন্ট টুলস, ফাইল কনভার্টার ও অটোমেটেড ওয়াচার সার্ভিস তৈরিতে।",
      keyPoints: [
        "fs.watch uses native OS events (fast and efficient).",
        "fs.watchFile uses stat polling (CPU heavy).",
        "chokidar is the recommended production solution for complex directory watching.",
        "fs.watch listener provides (eventType, filename) parameters."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'config.json');

console.log(\`Watching for changes on \${targetFile}...\`);

// fs.watch দিয়ে ফাইল পরিবর্তন পর্যবেক্ষণ
const watcher = fs.watch(targetFile, (eventType, filename) => {
  console.log(\`Event Detected: [\${eventType}] on file [\${filename}]\`);

  if (eventType === 'change') {
    fs.readFile(targetFile, 'utf8', (err, data) => {
      if (!err) {
        console.log('Updated File Content:', data);
      }
    });
  }
});

// ১০ সেকেন্ড পর ওয়াচিং বন্ধ করা
setTimeout(() => {
  watcher.close();
  console.log('Stopped watching.');
}, 10000);`,
      explanationSteps: [
        {
          step: 1,
          title: "fs.watch কল",
          description: "ফাইলের পাথে ওএস ইভেন্ট লিসেনার সেট করা হয়।"
        },
        {
          step: 2,
          title: "eventType চেকিং",
          description: "`change` বা `rename` ইভেন্ট আসলে নতুন কনটেন্ট রিড করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Nodemon & Tailwind CLI",
        description: "আপনি কোড সেভ করার সাথে সাথে Nodemon সার্ভার রিস্টার্ট দেয় এবং Tailwind CSS ফাইল ওয়াচ করে নতুন ক্লাস জেনারেট করে।"
      }
    ],
    interviewTips: {
      tip: "`fs.watch` (OS events) বনাম `fs.watchFile` (Polling) এর পার্থক্য এবং কেন প্রোডাকশন টুলে `chokidar` ব্যবহার করা হয় তা উল্লেখ করুন।",
      deliveryStrategy: "কোর মেথড দুটি বলুন -> পোলিং বনাম ওএস ইভেন্ট তুলনা -> Chokidar লাইব্রেরির উপযোগিতা তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "ফাইল চেঞ্জ দেখতে `setInterval` দিয়ে বারবার ফাইল রিড করা সেরা উপায়।",
          right: "বারবার ফাইল রিড করা মারাত্মক ক্ষতিকর; `fs.watch` বা `chokidar` দিয়ে ইভেন্ট-ড্রিভেন পদ্ধতিতে ওয়াচ করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "`fs.watch` = OS নেটিভ ইভেন্ট ব্যবহার করে (ফাস্ট ও মেমরি সেভিং)।",
      "`fs.watchFile` = পোলিং করে স্ট্যাটাস চেক করে (ধীর ও ভারী)।",
      "`chokidar` = প্রোডাকশন-রেডি লাইব্রেরি যা Nodemon ও Vite ব্যবহার করে।",
      "`watcher.close()` দিয়ে রিসোর্স লিক এড়াতে লিসেনার বন্ধ করতে হয়।"
    ],
    followUpQuestions: [
      {
        question: "What are the differences between fs.readFile and fs.readFileSync?",
        targetId: "nodejs-fs-readfile-vs-readfilesync",
        shortHint: "Non-blocking vs blocking behavior."
      }
    ],
    tags: ["Node.js", "File System", "fs.watch", "chokidar", "DevTools"]
  },
  {
    id: "nodejs-fs-readfile-vs-readfilesync",
    slug: "nodejs-fs-readfile-vs-readfilesync",
    question: "What are the differences between fs.readFile and fs.readFileSync?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**`fs.readFile`** হলো একটি **Asynchronous (নন-ব্লকিং)** মেথড যা ফাইল পড়ার কাজ ব্যাকগ্রাউন্ডে Libuv থ্রেড পুলে পাঠায় এবং মেইন জাভাস্ক্রিপ্ট থ্রেডকে অন্য কাজ করার জন্য তাৎক্ষণিক মুক্ত রাখে। অপরদিকে, **`fs.readFileSync`** হলো একটি **Synchronous (ব্লকিং)** মেথড যা ফাইল সম্পূর্ণ পড়া শেষ না হওয়া পর্যন্ত মেইন এক্সিকিউশন থ্রেড এবং ইভেন্ট লুপকে সম্পূর্ণ ফ্রিজ করে আটকে রাখে।",
    easyExplanation: "সহজ পার্থক্য ছক:\n\n১. **`fs.readFile` (অ্যাসিঙ্ক্রোনাস - স্মার্ট)**:\n- ফাইল পড়ার অর্ডার দিয়ে কোড পরের লাইনে চলে যায়।\n- ফাইল পড়া শেষ হলে কলব্যাক বা প্রমিজে ডাটা পাওয়া যায়।\n- সার্ভারে থাকা অন্য কোনো ইউজার ল্যাগ পায় না।\n\n২. **`fs.readFileSync` (সিনক্রোনাস - ব্লকিং)**:\n- যতক্ষণ ফাইল পড়া শেষ না হয়, পরবর্তী লাইনের কোড এক্সিকিউট হবে না।\n- ১ GB ফাইলের ক্ষেত্রে পুরো সার্ভার কয়েক সেকেন্ডের জন্য জমে পাথর হয়ে যাবে!",
    interviewAnswer: "The core differences are:\n1. **Execution Model**: `fs.readFile` is asynchronous and non-blocking, offloading disk I/O to the Libuv thread pool. `fs.readFileSync` is synchronous and blocking, halting the single JavaScript thread on the Call Stack.\n2. **Concurrency Impact**: In an active web server, `fs.readFile` allows incoming HTTP requests to be processed concurrently, while `fs.readFileSync` freezes all request handling until file reading completes.\n3. **Return Value & Error Handling**: `fs.readFile` accepts an error-first callback (or returns a Promise via `fs.promises`) and returns `undefined`. `fs.readFileSync` directly returns the file contents (Buffer or string) and throws exceptions requiring a `try/catch` block.\n4. **Recommended Use Case**: Use `fs.readFileSync` only during initial application bootstrap (e.g. loading SSL certificates or initial `.env` configuration). Use `fs.readFile` (or `fs.promises.readFile`) for all runtime operations.",
    detailedExplanation: {
      whatItIs: "Node.js ফাইল রিডিংয়ের দুটি মৌলিক মেথডের তুলনামূলক বিশ্লেষণ।",
      whyItExists: "ব্লকিং বনাম নন-ব্লকিং কনসেপ্ট পরিষ্কার করা ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ের মূল ভিত্তি।",
      howItWorks: "readFile Libuv থ্রেড পুলে যায়; readFileSync সরাসরি V8 স্ট্যাক আটকে রাখে।",
      whenToUse: "রানটাইমে সর্বদা readFile; সার্ভার বুটস্ট্র্যাপিংয়ে readFileSync।",
      keyPoints: [
        "fs.readFile: Non-blocking, callback/promise, high concurrency.",
        "fs.readFileSync: Blocking, returns data directly, throws on error.",
        "Never use readFileSync inside Express routes.",
        "Both load the entire file into memory (use streams for large files)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const fs = require('fs');

console.log('--- 1. শুরুর লগ ---');

// Asynchronous Non-Blocking
fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) return console.error('Async Error:', err.message);
  console.log('--- 3. Async Callback সম্পন্ন (শেষে আসবে) ---');
});

console.log('--- 2. মাঝের কোড (Async কলব্যাক আসার আগেই সাথে সাথে রান হবে!) ---');

// Synchronous Blocking (সাবধান!)
try {
  const syncData = fs.readFileSync('message.txt', 'utf8');
  console.log('--- Sync Data Read Done ---');
} catch (err) {
  console.error('Sync Error:', err.message);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "নন-ব্লকিং ফ্লো",
          description: "`fs.readFile` কল করার পর লগ ২ আগে চলে, এরপর কলব্যাক চলে।"
        },
        {
          step: 2,
          title: "এরর হ্যান্ডলিং",
          description: "Async-এ কলব্যাক এরর প্যারামিটার এবং Sync-এ `try/catch` ব্যবহৃত হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "SSL Certificate Loading",
        description: "HTTPS সার্ভার স্টার্ট করার সময় `https.createServer({ key: fs.readFileSync('key.pem') })` ব্যবহার করা বৈধ কারণ সার্ভার চালুর আগেই সার্টিফিকেট মেমরিতে থাকা আবশ্যক।"
      }
    ],
    interviewTips: {
      tip: "একটি সুন্দর পয়েন্ট উল্লেখ করুন: 'উভয় মেথডই পুরো ফাইল মেমরিতে লোড করে, তাই ফাইল যদি ১ GB হয় তবে readFile হলেও মেমরি স্পাইক হবে; সেক্ষেত্রে Streams ব্যবহার করা বাধ্যতামূলক।'",
      deliveryStrategy: "পার্থক্য ৩টি ধাপে বলুন (থ্রেড বিহেভিয়ার, এরর হ্যান্ডলিং, ব্যবহারের ক্ষেত্র)।",
      avoidSaying: [
        {
          wrong: "fs.readFile মেমরি কম নেয় আর fs.readFileSync বেশি মেমরি নেয়।",
          right: "উভয় মেথডই পুরো ফাইল মেমরিতে নেয়; পার্থক্য হলো readFile নন-ব্লকিং আর readFileSync থ্রেড ব্লক করে।"
        }
      ]
    },
    quickRevision: [
      "`fs.readFile` = Non-blocking, Libuv থ্রেড পুলে রান হয়, সার্ভার ফ্রি রাখে।",
      "`fs.readFileSync` = Blocking, মেইন থ্রেড আটকে দেয়, সার্ভার ফ্রিজ করে।",
      "API রাউটের ভেতর কখনোই `readFileSync` ব্যবহার করবেন না।",
      "বড় ফাইলের জন্য উভয় মেথডের বদলে `fs.createReadStream` ব্যবহার করতে হয়।"
    ],
    followUpQuestions: [
      {
        question: "Why is Node.js used in microservice architecture?",
        targetId: "nodejs-in-microservice-architecture",
        shortHint: "Lightweight footprint, fast startup, JSON/REST nativeness."
      }
    ],
    tags: ["Node.js", "fs.readFile", "fs.readFileSync", "Comparison", "Blocking"]
  },

  // ==========================================
  // 🔵 Optimization & Performance (4 Questions)
  // ==========================================
  {
    id: "nodejs-in-microservice-architecture",
    slug: "nodejs-in-microservice-architecture",
    question: "Why is Node.js used in microservice architecture?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "Node.js মাইক্রোসার্ভিস আর্কিটেকচারে বহুল ব্যবহৃত হওয়ার প্রধান কারণগুলো হলো:\n১. **Extremely Lightweight Footprint**: Node.js সার্ভিসগুলো খুব কম মেমরি (৩০-৬০ MB RAM) নেয়, ফলে ডকার কনটেইনারে শত শত সার্ভিস সহজে রান করা যায়।\n২. **Fast Cold-Start Time**: মিলিসেকেন্ডের মধ্যে সার্ভিস স্টার্ট হয়, যা ক্লাউড ও সার্ভারলেস (AWS Lambda) অটো-স্কেলিংয়ের জন্য পারফেক্ট।\n৩. **High Concurrency for I/O & API Gateways**: নন-ব্লকিং I/O দিয়ে একাধিক ডাউনস্ট্রিম মাইক্রোসার্ভিস ও মেসেজ কিউ (RabbitMQ, Kafka)-এর কল সহজে কোঅর্ডিনেট করতে পারে।\n৪. **Native JSON Support**: সার্ভিসগুলোর মধ্যে ডেটা আদান-প্রদান করতে অতিরিক্ত রূপান্তরের প্রয়োজন হয় না।\n৫. **Rich Ecosystem**: gRPC, GraphQL, Redis, এবং Docker-এর জন্য চমৎকার লাইব্রেরি সাপোর্ট।",
    easyExplanation: "সহজ উপমা:\nএকটি বিশাল যুদ্ধজাহাজ (Monolith) ঘোরানো অনেক কঠিন এবং ব্যয়বহুল।\n- **Microservices** হলো এক ঝাঁক ছোট স্পিডবোট।\n- Node.js হলো প্রতিটি স্পিডবোটের জন্য তৈরি **সুপার-লাইটওয়েট ও ফাস্ট ইঞ্জিন**: এটি স্টার্ট হতে ১ সেকেন্ডও নেয় না, সামান্য তেল (RAM) খরচ করে এবং ঝড়ের গতিতে এক বোট থেকে অন্য বোটে বার্তা ও পণ্য (API Data) আদান-প্রদান করতে পারে!",
    interviewAnswer: "Node.js is a premier choice for microservice architectures due to several distinct architectural advantages:\n1. **Minimal Resource Overhead**: Unlike heavy enterprise runtimes (like Java JVM), a Node.js microservice runs with a lightweight memory footprint (typically 30–70MB), maximizing container density in Kubernetes clusters.\n2. **Near-Instant Cold Starts**: Fast execution initialization makes it exceptionally well-suited for serverless functions (AWS Lambda, Google Cloud Run) and dynamic auto-scaling under traffic spikes.\n3. **Superior I/O Orchestration**: Microservices communicate heavily over the network (REST, gRPC, WebSockets, Kafka). Node.js's non-blocking I/O model handles thousands of concurrent inter-service network requests efficiently.\n4. **Native JSON Serialization**: JSON is the lingua franca of microservices; V8 serializes and deserializes JSON natively at machine speed.\n5. **Shared Language Across Teams**: Enables full-stack teams to build frontend, backend services, and API gateways using a unified JavaScript/TypeScript codebase.",
    detailedExplanation: {
      whatItIs: "ডিস্ট্রিবিউটেড ক্লাউড সিস্টেমে Node.js-এর উপযোগিতা।",
      whyItExists: "মনোলিথ সিস্টেম ভেঙে ইন্ডিপেন্ডেন্ট স্কেলেবল ক্লাউড-নেটিভ সার্ভিস গড়ে তুলতে।",
      howItWorks: "প্রতিটি সার্ভিস ছোট ডকার কনটেইনারে রান হয়ে API Gateway এবং মেসেজ ব্রোকার দিয়ে যোগাযোগ করে।",
      whenToUse: "ই-কমার্স, ফিনটেক, স্ট্রিমিং এবং হাই-স্কেল ডিস্ট্রিবিউটেড প্ল্যাটফর্মে।",
      keyPoints: [
        "Lightweight containerization (Docker images under 100MB).",
        "Fast startup times ideal for Kubernetes horizontal pod auto-scaling.",
        "Non-blocking I/O makes it ideal for API Gateways aggregating multiple services.",
        "gRPC and Protocol Buffers support via @grpc/grpc-js."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// মাইক্রোসার্ভিস কমিউনিকেশন ডেমো (API Gateway Aggregator)
const http = require('http');

// দুটি ভিন্ন মাইক্রোসার্ভিস (UserService ও OrderService) থেকে প্যারালাল ডেটা ফেচ
async function getAggregatedUserProfile(userId) {
  const [userRes, ordersRes] = await Promise.all([
    fetch(\`http://user-service:4001/users/\${userId}\`).then(r => r.json()),
    fetch(\`http://order-service:4002/orders/user/\${userId}\`).then(r => r.json())
  ]);

  return {
    user: userRes,
    orders: ordersRes,
    timestamp: new Date().toISOString()
  };
}

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/user-dashboard') {
    const data = await getAggregatedUserProfile('user-101');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }
});

server.listen(3000);`,
      explanationSteps: [
        {
          step: 1,
          title: "Promise.all প্যারালাল ফেচ",
          description: "একাধিক মাইক্রোসার্ভিস থেকে নন-ব্লকিংভাবে একই সাথে ডেটা আনা হয়।"
        },
        {
          step: 2,
          title: "API Gateway Aggregation",
          description: "লাইটওয়েট মেমরিতে ডেটা মার্চ করে ফ্রন্টএন্ডকে রেসপন্স দেওয়া হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "PayPal & Netflix Microservices",
        description: "PayPal তাদের মনোলিথ জাভা আর্কিটেকচার থেকে Node.js মাইক্রোসার্ভিসে কনভার্ট হয়ে দ্বিগুণ রিকোয়েস্ট হ্যান্ডেল করার ক্ষমতা অর্জন করেছে এবং ডেভেলপমেন্ট সাইকেল দ্রুত করেছে।"
      }
    ],
    interviewTips: {
      tip: "মেমরি লাইটওয়েট (ডকার ডেনসিটি) এবং নন-ব্লকিং I/O (API Gateway Aggregation)-এর মতো সিস্টেম ডিজাইন টার্মগুলো ব্যবহার করুন।",
      deliveryStrategy: "টপ ৩টি কারণ (Lightweight, Fast Startup, I/O efficiency) -> ডকার/কুবারনেটিসের সুবিধা -> রিয়েল-ওয়ার্ল্ড উদাহরণ।",
      avoidSaying: [
        {
          wrong: "Node.js দিয়ে খুব ভারী ম্যাথমেটিক্যাল ক্যালকুলেশন মাইক্রোসার্ভিস বানানো ভালো।",
          right: "হেভি CPU-বাউন্ড কাজের জন্য Go বা Rust ভালো; কিন্তু I/O, API Gateway ও নেটওয়ার্ক মাইক্রোসার্ভিসের জন্য Node.js সেরা।"
        }
      ]
    },
    quickRevision: [
      "কম মেমরি (Lightweight Footprint) ডকার ও কুবারনেটিসে কনটেইনার ডেনসিটি বাড়ায়।",
      "দ্রুত কোল্ড স্টার্ট (Fast Startup) সার্ভারলেস ও অটো-স্কেলিংয়ে চমৎকার।",
      "নন-ব্লকিং I/O多个 সার্ভিসের মধ্যে ডেটা অ্যাগ্রিগেশন ফাস্ট করে।",
      "নেটিভ JSON হ্যান্ডলিং এবং বিশাল প্যাকেজ ইকোসিস্টেম।"
    ],
    followUpQuestions: [
      {
        question: "Explain event emitters with practical use cases.",
        targetId: "nodejs-event-emitters-practical-use-cases",
        shortHint: "Pub/Sub pattern, custom events, memory leaks with listeners."
      }
    ],
    tags: ["Node.js", "Microservices", "System Design", "Architecture", "Docker"]
  },
  {
    id: "nodejs-event-emitters-practical-use-cases",
    slug: "nodejs-event-emitters-practical-use-cases",
    question: "Explain event emitters with practical use cases.",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**EventEmitter** হলো Node.js-এর `events` মডিউলের একটি কোর ক্লাস যা **Publish-Subscribe (Pub/Sub)** ডিজাইন প্যাটার্ন বাস্তবায়ন করে। এর মাধ্যমে অবজেক্টগুলো কাস্টম ইভেন্ট ফায়ার করতে পারে (`emit`) এবং অন্য মডিউলগুলো সেই ইভেন্ট লিসেন করে রিঅ্যাক্ট করতে পারে (`on`, `once`)। Node.js-এর Streams, HTTP Server, এবং Socket সবই EventEmitter-এর ওপর নির্মিত। বাস্তব জীবনের প্রধান ব্যবহার: **অর্ডার প্লেস হওয়ার পর ইমেইল/এসএমএস নোটিফিকেশন পাঠানো**, **অডিট লগ তৈরি**, এবং **রিয়েল-টাইম চ্যাট ব্রডকাস্টিং**।",
    easyExplanation: "সহজ উপমা:\nএকটি বেল ও ড্রয়ারের মতো ভাবুন:\n১. আপনি বেল সেটিং করলেন: 'বেল বাজলে আমি দরজা খুলব' (`emitter.on('bell_rang', openDoor)`).\n২. কোনো ভিজিটর এসে বেল প্রেস করল (`emitter.emit('bell_rang')`).\n৩. সাথে সাথে আপনার কোড রান হয়ে গেল!\n\nসবচেয়ে বড় সুবিধা হলো: যিনি বেল টিপলেন তাকে জানতে হবে না আপনি কী করছেন (Decoupled Code); আপনি দরজা খুলতে পারেন, লাইট জ্বালাতে পারেন বা কুকুর ডেকে দিতে পারেন—প্রতিটি লিসেনার সম্পূর্ণ স্বাধীনভাবে কাজ করবে!",
    interviewAnswer: "The `EventEmitter` class from the `events` module is the foundation of Node.js's event-driven architecture. It implements the Observer / Publish-Subscribe pattern, allowing objects to emit named events that trigger registered listener functions synchronously in the order they were registered.\n\n**Key Methods**:\n- `emitter.on(event, listener)`: Registers a persistent listener.\n- `emitter.once(event, listener)`: Registers a one-time listener that auto-unsubscribes after first execution.\n- `emitter.emit(event, ...args)`: Emits the event and passes arguments to listeners.\n- `emitter.off()` / `removeListener()`: Cleans up listeners to prevent memory leaks.\n\n**Practical Production Use Cases**:\n1. **Decoupled Business Workflows**: Emitting an `order:created` event that triggers invoice generation, inventory reservation, and welcome emails without tightly coupling services.\n2. **Audit Logging & Telemetry**: Emitting analytics events on user actions.\n3. **Long-Running Job Progress**: Notifying web clients of video transcode progress.",
    detailedExplanation: {
      whatItIs: "Node.js-এর ইভেন্ট-ড্রিভেন আর্কিটেকচারের কোর ইভেন্ট সিস্টেম।",
      whyItExists: "কোডের বিভিন্ন অংশের মধ্যে টাইট কাপলিং দূর করে পরিষ্কার ডিকাপল্ড আর্কিটেকচার তৈরি করতে।",
      howItWorks: "ইন্টারনাল অবজেক্টে ইভেন্টের নাম কি (Key) এবং লিসেনার ফাংশনগুলোর অ্যারে ভ্যালু (Value) হিসেবে থাকে।",
      whenToUse: "অ্যাসিঙ্ক ইভেন্ট হ্যান্ডলিং, কাস্টম প্লাগইন আর্কিটেকচার ও নোটিফিকেশন সিস্টেমে।",
      keyPoints: [
        "Listeners are called synchronously in the order they were registered.",
        "MaxListeners limit defaults to 10 to help detect memory leaks (emitter.setMaxListeners(n)).",
        "Always remove unused listeners (removeListener/off) to avoid memory leaks.",
        "Streams and HTTP servers inherit from EventEmitter."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const EventEmitter = require('events');

// কাস্টম অর্ডার সার্ভিস যা EventEmitter ইনহেরিট করে
class OrderService extends EventEmitter {
  placeOrder(orderId, userEmail, amount) {
    console.log(\`[OrderService] Order \${orderId} saved to database for $\${amount}.\`);
    
    // ইভেন্ট ফায়ার (Publish Event)
    this.emit('order:placed', { orderId, userEmail, amount, timestamp: new Date() });
  }
}

const orderApp = new OrderService();

// লিসেনার ১: ইমেইল পাঠানোর দায়িত্ব
orderApp.on('order:placed', (order) => {
  console.log(\` -> [Email Service] Sending receipt email to \${order.userEmail}\`);
});

// লিসেনার ২: ইনভেন্টরি কমানোর দায়িত্ব
orderApp.on('order:placed', (order) => {
  console.log(\` -> [Inventory Service] Deducting stock for Order #\${order.orderId}\`);
});

// লিসেনার ৩: অডিট লগ সেভ করা
orderApp.once('order:placed', (order) => {
  console.log(\` -> [Audit Log] First order of the session logged!\`);
});

// অর্ডার প্লেস করা
orderApp.placeOrder('ORD-999', 'shuvo@example.com', 250);`,
      explanationSteps: [
        {
          step: 1,
          title: "EventEmitter ক্লাস এক্সটেন্ড",
          description: "কাস্টম সার্ভিসে ইভেন্ট ইমিট করার ক্ষমতা যুক্ত করা হয়।"
        },
        {
          step: 2,
          title: "ডিকাপল্ড লিসেনার",
          description: "ইমেইল ও ইনভেন্টরি লজিক আলাদা আলাদা লিসেনারে রেজিস্টার করা হয়।"
        },
        {
          step: 3,
          title: "emit() ইনভোকেশন",
          description: "ইভেন্ট ফায়ার হওয়া মাত্রই সব লিসেনার স্বয়ংক্রিয়ভাবে এক্সিকিউট হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Checkout Pipeline",
        description: "পেমেন্ট সাকসেস হলে `payment:success` ইভেন্ট ফায়ার হয়, যা প্যারালালে ইনভয়েস তৈরি, SMS অ্যালার্ট এবং লজিস্টিকস ডেলিভারি বুকিং ট্রিগার করে।"
      }
    ],
    interviewTips: {
      tip: "EventEmitter লিসেনারগুলো সিঙ্ক্রোনাসলি রান হয় তা উল্লেখ করুন এবং মেমরি লিক এড়াতে `removeListener` করার গুরুত্ব তুলে ধরুন।",
      deliveryStrategy: "সংজ্ঞা -> মূল মেথডগুলো (`on`, `emit`, `once`) -> ডিকাপলিং সুবিধা -> বাস্তব অর্ডার ইভেন্টের কোড।",
      avoidSaying: [
        {
          wrong: "EventEmitter ইভেন্ট লুপের বাইরে মাল্টি-থ্রেডে চলে।",
          right: "EventEmitter সিঙ্ক্রোনাসলি লিসেনার কল করে; কোনো লিসেনারে অ্যাসিঙ্ক কোড থাকলে তা ইভেন্ট লুপে যায়।"
        }
      ]
    },
    quickRevision: [
      "EventEmitter = Node.js-এর Pub/Sub ইভেন্ট ক্লাস (`events` মডিউল)।",
      "`emitter.on()` দিয়ে লিসেন এবং `emitter.emit()` দিয়ে ইভেন্ট ফায়ার করা হয়।",
      "`emitter.once()` শুধুমাত্র একবার রান হয়ে নিজে আনসাবস্ক্রাইব হয়।",
      "আনইউজড লিসেনার রিমুভ না করলে মেমরি লিক হতে পারে।"
    ],
    followUpQuestions: [
      {
        question: "How would you optimize a slow Node.js application?",
        targetId: "nodejs-optimize-slow-application",
        shortHint: "Clustering, Caching, Streams, Worker Threads, DB Indexing."
      }
    ],
    tags: ["Node.js", "EventEmitter", "PubSub", "Architecture", "Design Patterns"]
  },
  {
    id: "nodejs-optimize-slow-application",
    slug: "nodejs-optimize-slow-application",
    question: "How would you optimize a slow Node.js application?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "একটি ধীরগতির Node.js অ্যাপ্লিকেশন অপটিমাইজ করার সিস্টেমেটিক ধাপগুলো হলো:\n১. **Profiling & APM Tooling**: Clinic.js, Chrome DevTools (`--inspect`), অথবা New Relic দিয়ে CPU bottlenecks ও Event Loop Delay মেপে আসল সমস্যা শনাক্ত করা।\n২. **Avoid Blocking the Event Loop**: কোনো সিনক্রোনাস API (`fs.*Sync`, ভারী JSON পার্সিং বা রেজেক্স) না রাখা; ভারী ক্যালকুলেশন **Worker Threads**-এ অফলোড করা।\n৩. **Database & Caching Layer**: ডাটাবেসে উপযুক্ত **Indexing** করা, N+1 কোয়েরি বন্ধ করা এবং ঘনঘন ব্যবহৃত ডেটা **Redis Cache**-এ রাখা।\n৪. **Utilize Streams & Buffers**: বড় ডেটাসেট ও ফাইল প্রসেসিংয়ে মেমরি স্পাইক রোধ করতে Streams ব্যবহার করা।\n৫. **Horizontal Scaling**: **Clustering / PM2** অথবা Kubernetes Pods দিয়ে সব CPU কোরে লোড ব্যালেন্স করা।\n৬. **Connection Pooling & Compression**: ডাটাবেস কানেকশন পুলিং এবং Gzip/Brotli কম্প্রেশন (`compression` middleware) এনাবল করা।",
    easyExplanation: "সহজ চেকলিস্ট:\n১. **ডাক্তারি পরীক্ষা (Profiling)**: আন্দাজে ওষুধ না দিয়ে আগে রোগ ধরা (কোথায় সময় নষ্ট হচ্ছে)।\n২. **ক্যাশিং (Redis)**: যে প্রশ্নের উত্তর জানা আছে তা বারবার ডাটাবেস থেকে না খুঁজে পকেটে (Redis) লিখে রাখা।\n৩. **মাল্টি-কোর ব্যবহার (Cluster)**: ১ জন শ্রমিকের জায়গায় ৮ জন শ্রমিককে কাজ ভাগ করে দেওয়া।\n৪. **নন-ব্লকিং রাখা**: লাইনের মাঝে দীর্ঘ কাজ না করে সহকারীকে (Worker Thread) দেওয়া।\n৫. **স্ট্রিমিং**: বড় ডেটা একবারে না গিলে অল্প অল্প করে গেলা!",
    interviewAnswer: "Optimizing a slow Node.js application requires a methodical full-stack approach:\n1. **Performance Profiling & Bottleneck Identification**: Use tools like **Clinic.js (Doctor/Flame/Bubbleprof)** or Chrome DevTools profiler (`node --inspect`) to inspect the Call Stack, garbage collection pauses, and event loop lag.\n2. **Freeing the Event Loop**: Eliminate all synchronous I/O (`*Sync` calls) and catastrophic backtracking RegExps. Offload CPU-heavy mathematical computations to **Worker Threads** or dedicated microservices.\n3. **Caching with Redis**: Cache high-frequency database reads and expensive API responses in Redis to slash database query latency to under 2ms.\n4. **Database Query Optimization**: Add proper database indexes, paginate large queries, resolve N+1 relational queries, and implement connection pooling.\n5. **Multi-Core Scaling**: Enable the `cluster` module or run under **PM2 Cluster Mode** to utilize 100% of available CPU cores.\n6. **Streaming & Payload Compression**: Stream large file downloads/uploads and enable HTTP payload compression (Gzip / Brotli).",
    detailedExplanation: {
      whatItIs: "Node.js অ্যাপ্লিকেশন পারফরম্যান্স টিউনিং ও স্কেলেবিলিটি ফ্রেমওয়ার্ক।",
      whyItExists: "হাই-কনকারেন্সি লোডে হাই ল্যাটেন্সি, মেমরি স্পাইক ও সার্ভার ড্রপ প্রতিরোধ করতে।",
      howItWorks: "প্রোফাইলিং -> কোড অপটিমাইজেশন -> ডাটাবেস/ক্যাশিং টিউনিং -> ক্লাস্টার স্কেলিং।",
      whenToUse: "প্রোডাকশন স্কেলিং, স্লো API ডিবাগিং ও হাই-ট্রাফিক ইভেন্ট প্রস্তুতির সময়।",
      keyPoints: [
        "Always profile first with Clinic.js or Chrome DevTools before optimizing.",
        "Redis caching reduces database load by up to 80%.",
        "Clustering maximizes multi-core CPU efficiency.",
        "Worker Threads prevent CPU operations from starving the Event Loop."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// অপটিমাইজড ক্যাশিং প্যাটার্ন (Redis + Connection Pool)
const express = require('express');
const Redis = require('ioredis');
const compression = require('compression');

const app = express();
const redis = new Redis(); // Redis ক্যাশ ক্লায়েন্ট

app.use(compression()); // Gzip/Brotli কম্প্রেশন মিডলওয়্যার

app.get('/api/products', async (req, res) => {
  const cacheKey = 'products:all';

  // ১. প্রথমে Redis ক্যাশ চেক করা (২ms রেসপন্স)
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  // ২. ক্যাশে না থাকলে ডাটাবেস থেকে অপটিমাইজড কোয়েরি আনা
  const products = await db.query('SELECT id, name, price FROM products LIMIT 50');

  // ৩. ভবিষ্যতে দ্রুত রেসপন্সের জন্য ৬০ সেকেন্ডের জন্য ক্যাশ সেভ করা
  await redis.set(cacheKey, JSON.stringify(products), 'EX', 60);

  res.json(products);
});`,
      explanationSteps: [
        {
          step: 1,
          title: "Gzip কম্প্রেশন",
          description: "`compression()` ব্যান্ডউইথ খরচ ৬০% কমায়।"
        },
        {
          step: 2,
          title: "Redis ক্যাশিং",
          description: "ডাটাবেসের ভারী কোয়েরি বন্ধ করে দ্রুত মেমরি রেসপন্স দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Black Friday E-Commerce Flash Sale",
        description: "Flash Sale-এর সময় প্রোডাক্ট পেজে Redis ক্যাশিং, PM2 ক্লাস্টার এবং DB Connection Pooling ব্যবহার করে সেকেন্ডে ৫০,০০০ রিকোয়েস্ট ল্যাগ ছাড়া হ্যান্ডেল করা হয়।"
      }
    ],
    interviewTips: {
      tip: "সবসময় বলবেন: 'আমি আন্দাজে অপটিমাইজ করি না; প্রথমে `Clinic.js` বা APM দিয়ে প্রোফাইল করে আসল বটলনেক খুঁজি।' এই একটি বাক্য আপনাকে সিনিয়র ইঞ্জিনিয়ার হিসেবে তুলে ধরবে।",
      deliveryStrategy: "প্রোফাইলিং -> কোড লেভেল (Event Loop/Streams) -> ইনফ্রা লেভেল (Redis/Cluster) -> ডাটাবেস লেভেল।",
      avoidSaying: [
        {
          wrong: "অ্যাপ স্লো হলে সাথে সাথে নতুন বড় সার্ভার কিনে র‍্যাম বাড়িয়ে দেব।",
          right: "আগে কোডের বটলনেক প্রোফাইল করা, ক্যাশিং ও ক্লাস্টারিং করা উচিত; অপটিমাইজ না করে সার্ভার বাড়ালে খরচ বৃথা যায়।"
        }
      ]
    },
    quickRevision: [
      "প্রথমে `Clinic.js` বা `--inspect` দিয়ে প্রোফাইল করুন।",
      "ইভেন্ট লুপে কোনো ব্লকিং কোড রাখা যাবে না।",
      "Redis ক্যাশ ও ডাটাবেস ইনডেক্সিং ল্যাটেন্সি কমায়।",
      "PM2 ক্লাস্টার মোড দিয়ে সব CPU কোর ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "What are memory leaks in Node.js and what are the main causes?",
        targetId: "nodejs-memory-leaks-causes-and-fixes",
        shortHint: "Global variables, uncleaned event listeners, closures, heap snapshots."
      }
    ],
    tags: ["Node.js", "Performance", "Optimization", "Redis", "Clustering"]
  },
  {
    id: "nodejs-memory-leaks-causes-and-fixes",
    slug: "nodejs-memory-leaks-causes-and-fixes",
    question: "What are memory leaks in Node.js and what are the main causes?",
    category: "Node.js",
    categorySlug: "nodejs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Node.js-এ **Memory Leak** হলো এমন একটি অবস্থা যেখানে মেমরিতে থাকা ডেটা বা অবজেক্টের কাজ শেষ হয়ে যাওয়া সত্ত্বেও তার মেমরি রেফারেন্স কোনো না কোনোভাবে টিকে থাকে, যার ফলে **Garbage Collector (GC)** সেই মেমরি ক্লিন করতে পারে না। সময়ের সাথে সাথে মেমরি বাড়তে বাড়তে এক পর্যায়ে সার্ভার **`JavaScript heap out of memory`** এরর দিয়ে ক্র্যাশ করে।\n\n**প্রধান ৪টি কারণ**:\n১. **Global Variables**: গ্লোবাল স্কোপে ভুলবশত ডেটা অ্যাসাইন করা যা কখনই ডিলিট হয় না।\n২. **Uncleaned Event Listeners**: ইভেন্ট লিসেনার যোগ করে কাজ শেষে `removeListener()` না করা।\n৩. **Forgotten Timers / Callbacks**: `setInterval` বা ক্লোজার মেমরিতে অবজেক্ট রেফারেন্স ধরে রাখা।\n৪. **Unbounded In-Memory Caching**: লিমিট ছাড়া মেমরি অবজেক্টে ডেটা জমতে থাকা (LRU ক্যাশ ব্যবহার না করা)।",
    easyExplanation: "সহজ উপমা:\nআপনার ঘরে প্রতিদিন অতিথিরা আসেন এবং তাদের জন্য পানি ও বিস্কুটের প্লেট দেওয়া হয়।\n- **নরমাল সিস্টেম**: অতিথি চলে যাওয়ার পর পরিচ্ছন্নতাকর্মী (Garbage Collector) টেবিলের নোংরা প্লেট ধুয়ে পরিষ্কার করে দেয়।\n- **Memory Leak**: আপনি প্লেটের সাথে অদৃশ্য সুতো দিয়ে অতিথির নাম বেঁধে সোফার তলায় রেখে দিলেন! পরিচ্ছন্নতাকর্মী ভাবল প্লেটগুলো এখনও ব্যবহৃত হচ্ছে, তাই সে হাত দিল না। দিন দিন সোফার নিচে প্লেটের পাহাড় জমে একদিন পুরো ঘর ভর্তি হয়ে বাড়ি ভেঙে পড়ল (Crash)!",
    interviewAnswer: "A memory leak in Node.js occurs when allocated memory in the V8 heap is no longer needed by the application but remains unreachable to the Garbage Collector due to lingering references from root objects. Over time, the memory footprint increases continuously until the process terminates with an `out of memory` fatal crash.\n\n**Primary Causes**:\n1. **Accidental Global Variables**: Defining variables without `let`/`const` binds them to the global root, preventing GC.\n2. **Dangling Event Listeners**: Registering persistent event listeners on objects with a longer lifespan without removing them with `removeListener()` or `AbortController`.\n3. **Stale Closures & Long-lived Callbacks**: Inner functions capturing large outer variables in memory.\n4. **Unbounded In-Memory Caches**: Using simple objects/maps as caches without an eviction policy (like TTL or LRU cache).\n\n**Diagnosis & Fixes**:\n- Take Heap Snapshots using `node --inspect` and Chrome DevTools.\n- Use `heapdump` and Clinic.js Doctor to track heap growth over time.\n- Replace unbounded Maps with LRU caches (`lru-cache`) and always clean up timers and listeners.",
    detailedExplanation: {
      whatItIs: "মেমরি ডি-অ্যালোকেশন ফেইলিউর যা সার্ভার ক্র্যাশ করায়।",
      whyItExists: "জাভাস্ক্রিপ্ট রেফারেন্স ধরে রাখলে V8 Mark-and-Sweep অ্যালগরিদম তাকে জীবিত মনে করে।",
      howItWorks: "Root (Global) -> Reference Chain -> Object (GC একে সুইপ করতে পারে না)।",
      whenToUse: "সার্ভার মেমরি মনিটরিং, ডিবাগিং এবং স্টেবিলিটি নিশ্চিত করতে।",
      keyPoints: [
        "V8 GC frees memory using Mark-and-Sweep from Root references.",
        "Always use LRU (Least Recently Used) cache with max limits.",
        "Clean up timers (clearInterval) and event listeners (off/removeListener).",
        "Heap snapshot comparison reveals objects with high retained size."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. মেমরি লিকের ভুল কোড (Unbounded Cache & Uncleaned Listener)
const express = require('express');
const app = express();

const leakCache = {}; // ❌ কোনো লিমিট ছাড়া গ্লোবাল অবজেক্ট - মেমরি লিক!

app.get('/api/leak', (req, res) => {
  const heavyData = new Array(1000000).fill('leak-item');
  leakCache[Date.now()] = heavyData; // কখনোই ডিলিট হচ্ছে না!
  res.send('Leaking RAM...');
});

// ২. সঠিক ফিক্স কোড (LRU Cache ব্যবহার করা)
const { LRUCache } = require('lru-cache');

const safeCache = new LRUCache({
  max: 100, // ✅ সর্বোচ্চ ১০০টি আইটেম রাখবে, অতিরিক্ত হলে পুরনোগুলো অটো-রিমুভ করবে
  ttl: 1000 * 60 * 5 // ৫ মিনিট পর মেয়াদ শেষ
});

app.get('/api/safe', (req, res) => {
  safeCache.set(req.ip, { lastSeen: Date.now() });
  res.send('Safe memory management.');
});`,
      explanationSteps: [
        {
          step: 1,
          title: "গ্লোবাল অবজেক্ট লিক",
          description: "সীমাহীন গ্লোবাল ম্যাপে ডাটা রাখলে গারবেজ কালেক্টর মেমরি ছাড়তে পারে না।"
        },
        {
          step: 2,
          title: "LRU Cache ফিক্স",
          description: "নির্দিষ্ট `max` সাইজ ও TTL দিয়ে মেমরি নিয়ন্ত্রণ করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Socket.io Memory Leak Fix",
        description: "ইউজার ডিসকানেক্ট হওয়ার পর `socket.on('message', ...)` লিসেনার আনসাবস্ক্রাইব না করায় ১ লাখ ইউজারের সার্ভার প্রতি ২৪ ঘণ্টায় ক্র্যাশ করত; `socket.removeAllListeners()` দিয়ে তা ফিক্স করা হয়।"
      }
    ],
    interviewTips: {
      tip: "মেমরি লিক কীভাবে ডিবাগ করবেন তা বলুন: 'Chrome DevTools দিয়ে দুটি Heap Snapshot নিয়ে `Comparison` ভিউতে Retained Size চেক করি।'",
      deliveryStrategy: "সংজ্ঞা -> ৪টি প্রধান কারণ -> LRU ক্যাশ সমাধান -> Chrome Heap Snapshot ডিবাগিং টেকনিক।",
      avoidSaying: [
        {
          wrong: "জাভাস্ক্রিপ্টে মেমরি লিক হয় না কারণ এতে অটোমেটিক গারবেজ কালেক্টর আছে।",
          right: "গারবেজ কালেক্টর থাকা সত্ত্বেও ভুল রেফারেন্স ধরে রাখলে মেমরি লিক হয় এবং V8 ক্র্যাশ করে।"
        }
      ]
    },
    quickRevision: [
      "Memory Leak = অপ্রয়োজনীয় অবজেক্টের রেফারেন্স টিকে থাকা যা GC মুছতে পারে না।",
      "কারণ: গ্লোবাল ভেরিয়েবল, অনিবন্ধিত ইভেন্ট লিসেনার, আনক্লিনড টাইমার, আনবাউন্ডেড ক্যাশ।",
      "ডিবাগিং: Chrome DevTools Heap Snapshots & Clinic.js।",
      "প্রতিরোধ: `LRU Cache`, `clearInterval()`, এবং `removeListener()` ব্যবহার করা।"
    ],
    followUpQuestions: [
      {
        question: "What is Express.js, and what is it used for?",
        targetId: "express-what-is-and-use-cases",
        shortHint: "Express.js কোর কনসেপ্ট ও রিকোয়েস্ট লাইফসাইকেল।"
      }
    ],
    tags: ["Node.js", "Memory Leak", "Garbage Collection", "Heap Snapshot", "Debugging"]
  }
];
