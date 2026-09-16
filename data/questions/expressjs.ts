import { Question } from "@/types";

export const expressjsQuestions: Question[] = [
  // ==========================================
  // 🔵 Express.js Core (4 Questions)
  // ==========================================
  {
    id: "express-what-is-and-use-cases",
    slug: "express-what-is-and-use-cases",
    question: "What is Express.js, and what is it used for?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**Express.js** হলো Node.js-এর জন্য তৈরি সবচেয়ে জনপ্রিয়, ফাস্ট, আন-অপিনিয়নেটেড (Unopinionated) এবং মিনিমালিস্ট **Web Application Framework**। এটি Node.js-এর লো-লেভেল বিল্ট-ইন `http` মডিউলের ওপর একটি পাতলা স্তর তৈরি করে শক্তিশালী **Routing**, **Middleware Pipeline**, **HTTP Request/Response Handling**, এবং **RESTful API Development**-কে অত্যন্ত সহজ ও দ্রুততর করে তোলে। এটি মূলত ব্যাকএন্ড REST API, মাইক্রোসার্ভিস এবং ফুল-স্ট্যাক সার্ভার-সাইড রেন্ডারড অ্যাপ তৈরিতে ব্যবহৃত হয়।",
    easyExplanation: "সহজ উপমা:\n- **Node.js-এর বিল্ট-ইন http মডিউল**: যেন খালি একটি গাড়ির ইঞ্জিন আর ৪টি চাকা। এতে চড়ে কোথাও যেতে চাইলে সিট, ব্রেক প্যাডেল ও স্টিয়ারিং নিজেকে ম্যানুয়ালি বানাতে হবে (অনেক জটিল ও বড় কোড)।\n- **Express.js**: একটি রেডিমেড বিলাসবহুল গাড়ি! ইঞ্জিনের ওপর সুন্দর সিট (Routing), এয়ার কন্ডিশনার ও এয়ারব্যাগ (Middleware), এবং মসৃণ গিয়ার সিস্টেম (Request/Response Helpers) সাজিয়ে দেওয়া হয়েছে। আপনি শুধু বসবেন এবং এক লাইনে ড্রাইভ করা শুরু করবেন!",
    interviewAnswer: "Express.js is a fast, unopinionated, minimalist web framework for Node.js. It acts as an abstraction layer on top of Node.js's native `http` module, providing a robust suite of routing capabilities, a composable middleware architecture, unified error handling, and helper methods for request parsing and response rendering. Express is primarily used to architect RESTful APIs, JSON microservices, single-page application backends, and server-rendered web applications with template engines.",
    detailedExplanation: {
      whatItIs: "Node.js-এর ডি-ফ্যাক্টো স্ট্যান্ডার্ড ওয়েব অ্যাপ্লিকেশন ফ্রেমওয়ার্ক।",
      whyItExists: "Node.js-এর নেটিভ `http.createServer`-এ রাউটিং ও মিডলওয়্যার লেখার বিশাল জটিলতা দূর করতে।",
      howItWorks: "ইনকামিং রিকোয়েস্টকে মিডলওয়্যার স্ট্যাক এবং রাউট হ্যান্ডলার চেইনের মাধ্যমে ক্রমান্বয়ে পাস করে রেসপন্স তৈরি করে।",
      whenToUse: "REST API, GraphQL ব্যাকএন্ড, মাইক্রোসার্ভিস এবং ওয়েব সার্ভার তৈরিতে।",
      keyPoints: [
        "Minimalist and unopinionated (freedom to choose ORM, DB, and architecture).",
        "Middleware-driven request/response lifecycle.",
        "Built-in robust URL pattern matching and routing.",
        "Foundation for larger meta-frameworks like NestJS."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Express.js দিয়ে মাত্র কয়েক লাইনে প্রফেশনাল API সার্ভার
const express = require('express');
const app = express();
const PORT = 5000;

// বিল্ট-ইন JSON বডি পার্সার মিডলওয়্যার
app.use(express.json());

// হোম রুট
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express.js REST API', status: 'healthy' });
});

// ডায়নামিক API রুট
app.get('/api/users', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'Rakibul Islam', role: 'Full Stack Engineer' }
  ]);
});

app.listen(PORT, () => {
  console.log(\`Express Server running on http://localhost:\${PORT}\`);
});`,
      explanationSteps: [
        {
          step: 1,
          title: "app ইন্সট্যান্স তৈরি",
          description: "`express()` কল করে সম্পূর্ণ অ্যাপ্লিকেশন অবজেক্ট তৈরি হয়।"
        },
        {
          step: 2,
          title: "JSON মিডলওয়্যার",
          description: "`app.use(express.json())` স্বয়ংক্রিয়ভাবে ইনকামিং রিকোয়েস্ট বডি পার্স করে।"
        },
        {
          step: 3,
          title: "রেসপন্স হেল্পার",
          description: "`res.status().json()` দিয়ে এক লাইনে ক্লিন JSON রেসপন্স পাঠানো যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce REST API Backend",
        description: "লাখ লাখ মোবাইল ও ওয়েব অ্যাপ ইউজারের প্রোডাক্ট ব্রাউজিং, কার্ট ও পেমেন্ট রিকোয়েস্ট হ্যান্ডেল করতে Express.js ব্যাকএন্ড রাউটিং ব্যবহার করা হয়।"
      }
    ],
    interviewTips: {
      tip: "Express.js-কে কেন 'Unopinionated' বলা হয় তা উল্লেখ করুন (কারণ এতে কোনো নির্দিষ্ট ফোল্ডার স্ট্রাকচার বা ডাটাবেস চাপিয়ে দেওয়া হয় না, সম্পূর্ণ স্বাধীনতা থাকে)।",
      deliveryStrategy: "সংজ্ঞা -> ৩টি মূল সুবিধা (Middleware, Routing, Minimalist) -> নেটিভ http মডিউলের সাথে তুলনা।",
      avoidSaying: [
        {
          wrong: "Express.js হলো একটি আলাদা প্রোগ্রামিং ল্যাঙ্গুয়েজ।",
          right: "Express.js হলো Node.js-এর ওপরে তৈরি একটি জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক।"
        }
      ]
    },
    quickRevision: [
      "Express.js = Node.js-এর দ্রুত ও জনপ্রিয় মিনিমালিস্ট ওয়েব ফ্রেমওয়ার্ক।",
      "রাউটিং, মিডলওয়্যার এবং রিকোয়েস্ট/রেসপন্স হ্যান্ডলিং সহজ করে।",
      "Unopinionated: ডেভেলপারকে নিজের মতো আর্কিটেকচার বানানোর স্বাধীনতা দেয়।",
      "REST API এবং মাইক্রোসার্ভিস তৈরিতে বহুল ব্যবহৃত।"
    ],
    followUpQuestions: [
      {
        question: "How do you create a basic Express server?",
        targetId: "express-create-basic-server",
        shortHint: "express(), app.use(), app.listen() steps."
      }
    ],
    tags: ["Express.js", "Web Framework", "REST API", "Routing", "Middleware"]
  },
  {
    id: "express-create-basic-server",
    slug: "express-create-basic-server",
    question: "How do you create a basic Express server?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "একটি বেসিক Express সার্ভার তৈরি করতে ৪টি সহজ ধাপ অনুসরণ করতে হয়:\n১. `npm init -y` ও `npm install express` দিয়ে প্যাকেজ ইনস্টল করা,\n২. ফাইলে `const express = require('express')` ইমপোর্ট করে `const app = express()` ইন্সট্যান্স তৈরি করা,\n৩. প্রয়োজনীয় রুট ও মিডলওয়্যার ডিফাইন করা (যেমন `app.get('/', (req, res) => res.send('Hello'))`),\n৪. `app.listen(PORT, callback)` মেথড দিয়ে নির্দিষ্ট পোর্টে সার্ভার লিসেন করানো।",
    easyExplanation: "সহজ ৪টি লাইন:\n১. `express` লাইব্রেরি ডাকুন।\n২. `app` নামক একটি রেস্তোরাঁ খুলুন।\n৩. মেন্যু কার্ডে লিখুন কে এলে কী খাবার পাবে (`app.get('/', handler)`).\n৪. রেস্তোরাঁর দরজা খুলে দিন (`app.listen(3000)`) যাতে কাস্টমাররা ঢুকতে পারে!",
    interviewAnswer: "Creating a fundamental Express server involves initializing an Express application instance, attaching route handlers, and binding to a network port:\n1. Import Express via `require('express')` (or ESM `import express from 'express'`).\n2. Initialize the application by invoking `const app = express()`.\n3. Configure global middleware such as `express.json()`.\n4. Declare route handlers using HTTP verb methods like `app.get()`, `app.post()`.\n5. Call `app.listen(port, callback)` to spin up the underlying HTTP server and listen on incoming connections.",
    detailedExplanation: {
      whatItIs: "Express.js অ্যাপ্লিকেশনের বুটস্ট্র্যাপিং প্রক্রিয়া।",
      whyItExists: "ক্লিন ও স্ট্যান্ডার্ড উপায়ে একটি HTTP ওয়েব সার্ভার চালু করতে।",
      howItWorks: "`app.listen()` ইন্টারনালি Node.js-এর `http.createServer(app).listen()` কল করে।",
      whenToUse: "যেকোনো নতুন Express API বা ব্যাকএন্ড সার্ভিস শুরু করার সময়।",
      keyPoints: [
        "app.listen() wraps Node's native http.createServer.",
        "Express creates a request listener callback passed to Node's HTTP engine.",
        "Always use environment variables (process.env.PORT) for port configuration.",
        "Include 404 fallback handler at the very end of routes."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// পরিবেশ ভেরিয়েবল থেকে পোর্ট নেওয়া (প্রোডাকশনের জন্য জরুরি)
const PORT = process.env.PORT || 3000;

// ১. রিকোয়েস্ট বডি পার্সিং
app.use(express.json());

// ২. রুট হ্যান্ডলার
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// ৩. আনডিফাইন্ড রুটের জন্য 404 হ্যান্ডলার
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ৪. সার্ভার চালু করা
app.listen(PORT, () => {
  console.log(\`Server is actively listening on port \${PORT}\`);
});`,
      explanationSteps: [
        {
          step: 1,
          title: "ডায়নামিক পোর্ট",
          description: "`process.env.PORT || 3000` ক্লাউড ডিপ্লয়মেন্ট নিশ্চিত করে।"
        },
        {
          step: 2,
          title: "404 ফলব্যাক",
          description: "অপরিচিত URL-এ সুন্দর 404 JSON এরর পাঠানো হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Dockerized Container Entrypoint",
        description: "ডকার ফাইলে `node server.js` কমান্ড রান করলে এই স্ক্রিপ্টটি চালু হয়ে কুবারনেটিস ক্লাস্টারের জন্য পোর্ট ওপেন করে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই হার্ডকোডেড পোর্ট (যেমন শুধু 3000) লিখবেন না; সর্বদা `process.env.PORT || 3000` ব্যবহার করার কথা বলুন।",
      deliveryStrategy: "৪টি ধাপ স্পষ্টভাবে বলুন -> process.env.PORT এর গুরুত্ব উল্লেখ করুন -> 404 ফলব্যাকের কথা বলুন।",
      avoidSaying: [
        {
          wrong: "app.listen সরাসরি ব্রাউজার ওপেন করে দেয়।",
          right: "app.listen অপারেটিং সিস্টেমের নেটওয়ার্ক পোর্টে সকেট ওপেন করে রিকোয়েস্ট শোনার জন্য অপেক্ষা করে।"
        }
      ]
    },
    quickRevision: [
      "`const app = express()` দিয়ে অ্যাপ শুরু হয়।",
      "`app.get()`, `app.post()` দিয়ে রুট ডিফাইন হয়।",
      "`app.listen(PORT)` দিয়ে সার্ভার সকেট চালু হয়।",
      "প্রোডাকশনের জন্য `process.env.PORT` ব্যবহার করা আবশ্যক।"
    ],
    followUpQuestions: [
      {
        question: "Explain the Express request-response lifecycle.",
        targetId: "express-request-response-lifecycle",
        shortHint: "Req -> Middlewares -> Controller -> Res pipeline."
      }
    ],
    tags: ["Express.js", "Server", "Setup", "app.listen", "Bootstrap"]
  },
  {
    id: "express-request-response-lifecycle",
    slug: "express-request-response-lifecycle",
    question: "Explain the Express request-response lifecycle.",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Express-এ **Request-Response Lifecycle** হলো ক্লায়েন্ট থেকে রিকোয়েস্ট আসা থেকে শুরু করে ফাইনাল রেসপন্স ফিরে যাওয়া পর্যন্ত একটি সুশৃঙ্খল পাইপলাইন:\n১. **Request Arrival**: ক্লায়েন্ট HTTP রিকোয়েস্ট পাঠায়, Node.js HTTP সার্ভার তা রিসিভ করে `req` এবং `res` অবজেক্ট তৈরি করে Express-এর কাছে দেয়।\n২. **Global Middlewares**: রিকোয়েস্টটি গ্লোবাল মিডলওয়্যার (যেমন Logger, CORS, Body Parser) অতিক্রম করে।\n৩. **Routing & Route-Level Middlewares**: URL এবং HTTP Method ম্যাচ করে নির্দিষ্ট রুটের অথেন্টিকেশন বা ভ্যালিডেশন মিডলওয়্যারে যায়।\n৪. **Controller / Route Handler**: মূল বিজনেজ লজিক এক্সিকিউট হয় এবং ডাটাবেস থেকে ডাটা এনে `res.json()` বা `res.send()` কল করে রেসপন্স সাইকেল **Terminate** করা হয়।\n৫. **Error Handling Middleware**: পথে কোনো এরর ঘটলে (`next(err)`) তা গ্লোবাল এরর হ্যান্ডলারে গিয়ে 500 রেসপন্স পাঠায়।",
    easyExplanation: "সহজ উপমা:\nএকটি এয়ারপোর্টের সিকিউরিটি ও বোর্ডিং প্রক্রিয়ার মতো:\n১. **চেকপোস্ট ১ (CORS & Body Parser)**: আপনার পাসপোর্ট ও ব্যাগ স্ক্যান করা হলো।\n২. **চেকপোস্ট ২ (Auth Middleware)**: আপনি আসল টিকিটধারী কি না তা ভেরিফাই করা হলো।\n৩. **বোর্ডিং গেট (Controller)**: আপনার ফ্লাইটের গেটে গিয়ে বিমানে উঠলেন এবং টিকিট কেটে নিলেন (`res.send() - সাইকেল সমাপ্ত`)।\n৪. **জরুরি বহির্গমন (Error Middleware)**: কোনো সমস্যা হলে আপনাকে স্পেশাল কেবিন এরিয়াতে নিয়ে গিয়ে সমাধান করা হলো!",
    interviewAnswer: "The Express Request-Response Lifecycle is a pipeline of functions executed sequentially:\n1. **HTTP Ingestion**: Node.js receives the raw TCP packet, constructs the `IncomingMessage` (`req`) and `ServerResponse` (`res`), and hands them off to the Express engine.\n2. **Middleware Execution Pipeline**: Request passes sequentially through registered application-level middlewares (parsers, CORS, rate limiters). Each middleware can mutate `req`/`res`, terminate the lifecycle via a response, or pass control downstream using `next()`.\n3. **Route Matching & Controllers**: Express matches the requested HTTP method and URI pattern to the designated route controller where business logic runs.\n4. **Lifecycle Termination**: The cycle MUST end when a terminating response method (`res.json()`, `res.send()`, `res.render()`, `res.end()`) is invoked.\n5. **Error Pipeline**: If any step passes an error to `next(err)` or throws an exception, normal execution halts and control leaps directly to registered 4-argument error-handling middlewares `(err, req, res, next)`.",
    detailedExplanation: {
      whatItIs: "Express অ্যাপ্লিকেশনে একটি HTTP রিকোয়েস্টের শুরু থেকে শেষ পর্যন্ত প্রবাহ।",
      whyItExists: "রিকোয়েস্ট প্রসেসিংয়ে মডিউলারিটি, সিকিউরিটি এবং ক্লিয়ার সেপারেশন অফ কনসার্ন বজায় রাখতে।",
      howItWorks: "`next()` চেইনিংয়ের মাধ্যমে একের পর এক মিডলওয়্যার অতিক্রম করে এবং রেসপন্স মেথডে শেষ হয়।",
      whenToUse: "অ্যাপ্লিকেশন আর্কিটেকচার ডিজাইন, ডিবাগিং এবং মিডলওয়্যার অর্ডার ঠিক করতে।",
      keyPoints: [
        "If neither a response is sent nor next() is called, the request hangs forever.",
        "Middlewares execute strictly in the order they are registered with app.use().",
        "Calling next(err) bypasses remaining normal middlewares and jumps to error handler.",
        "Only one response can be sent per request (avoid 'Cannot set headers after they are sent')."
      ]
    },
    visualDiagram: {
      title: "Express Request-Response Lifecycle পাইপলাইন",
      subtitle: "ক্লায়েন্ট রিকোয়েস্ট থেকে শুরু করে মিডলওয়্যার ও ফাইনাল রেসপন্সের ৫টি সুশৃঙ্খল স্তর:",
      steps: [
        {
          step: 1,
          title: "HTTP রিকোয়েস্ট ইনজেশন",
          subtitle: "Incoming TCP / Socket",
          location: "Node.js Native HTTP Server",
          icon: "network",
          description: "ক্লায়েন্ট থেকে রিকোয়েস্ট এলে Node.js req ও res অবজেক্ট তৈরি করে Express অ্যাপে পাঠায়।",
          highlightSnippet: "Client -> HTTP Request -> req (IncomingMessage) & res (ServerResponse)"
        },
        {
          step: 2,
          title: "গ্লোবাল মিডলওয়্যার স্ট্যাক",
          subtitle: "Helmet, CORS, Body Parsers",
          location: "Express Global Middleware Pipeline",
          icon: "shield",
          description: "রিকোয়েস্টটি প্রথমে সিকিউরিটি হেডার (Helmet), CORS পলিসি এবং JSON বডি পার্সার অতিক্রম করে।",
          highlightSnippet: "app.use(helmet());\napp.use(cors());\napp.use(express.json()); -> next()"
        },
        {
          step: 3,
          title: "রাউটিং ও গার্ড মিডলওয়্যার",
          subtitle: "URL Matching & Auth Guard",
          location: "Router Layer (express.Router)",
          icon: "layers",
          description: "URL এবং HTTP মেথড মিলিয়ে নির্দিষ্ট রুটে যায় এবং অথেন্টিকেশন/রোল যাচাই করে।",
          highlightSnippet: "router.get('/dashboard', authenticateToken, (req, res) => ...)"
        },
        {
          step: 4,
          title: "কন্ট্রোলার বিজনেস লজিক",
          subtitle: "Controller Execution",
          location: "Route Controller & Database Layer",
          icon: "database",
          description: "মূল ব্যবসায়িক লজিক সম্পন্ন হয়, ডাটাবেস থেকে ডাটা আনা হয় এবং রেসপন্স প্রস্তুত হয়।",
          highlightSnippet: "const data = await db.getUserProfile(req.user.id);"
        },
        {
          step: 5,
          title: "রেসপন্স দিয়ে সাইকেল সমাপ্তি",
          subtitle: "Lifecycle Termination",
          location: "Client Response Dispatch",
          icon: "zap",
          description: "res.json() বা res.send() কল করার সাথে সাথে রিকোয়েস্ট-রেসপন্স সাইকেল সফলভাবে সমাপ্ত হয়।",
          highlightSnippet: "res.status(200).json({ success: true, profile: data }); // Terminated!"
        }
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// ১. গ্লোবাল লগিং মিডলওয়্যার
app.use((req, res, next) => {
  console.log(\`[1. Global Middleware] \${req.method} \${req.url} at \${new Date().toLocaleTimeString()}\`);
  req.requestTime = Date.now(); // req অবজেক্টে ডাটা যুক্ত করা
  next(); // পরবর্তী ধাপে পাস
});

// ২. রুট স্পেসিফিক অথেন্টিকেশন মিডলওয়্যার
const checkAuth = (req, res, next) => {
  console.log('[2. Route Middleware] Checking Auth Token...');
  if (req.headers.authorization) {
    next();
  } else {
    // রেসপন্স পাঠিয়ে এখানেই লাইফসাইকেল শেষ (Terminate)
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// ৩. কন্ট্রোলার হ্যান্ডলার (Lifecycle Finisher)
app.get('/api/dashboard', checkAuth, (req, res) => {
  console.log('[3. Controller] Serving Dashboard Data');
  res.status(200).json({
    data: 'Welcome to VIP Dashboard',
    latencyMs: Date.now() - req.requestTime
  });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "next() কল",
          description: "`next()` কল করার মাধ্যমে রিকোয়েস্ট পরের মিডলওয়্যারে যায়।"
        },
        {
          step: 2,
          title: "রেসপন্স দিয়ে সমাপ্তি",
          description: "`res.json()` কল করার সাথে সাথে রিকোয়েস্ট-রেসপন্স সাইকেল শেষ হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "API Performance & Latency Tracking",
        description: "লাইফসাইকেলের শুরুতে `req.startTime` স্ট্যাম্প করে কন্ট্রোলারে রেসপন্স পাঠানোর সময় রেসপন্স টাইমের হিসেব ক্লাউড ওয়াচে পাঠানো হয়।"
      }
    ],
    interviewTips: {
      tip: "কখনোই ভুলবেন না: 'মিডলওয়্যারে অবশ্যই `res.send()` রেসপন্স পাঠাতে হবে অথবা `next()` কল করতে হবে; অন্যথায় ক্লায়েন্ট ব্রাউজার অনন্তকাল লোডিংয়ে আটকে থাকবে।'",
      deliveryStrategy: "৫টি ধাপ ক্রমানুসারে বলুন -> next() এর ভূমিকা -> রেসপন্স টার্মিনেশন -> error handler জাম্প।",
      avoidSaying: [
        {
          wrong: "একটি রিকোয়েস্টে একাধিকবার res.json() পাঠানো যায়।",
          right: "একটি রিকোয়েস্টে একবারই ফাইনাল রেসপন্স পাঠানো যায়; পুনরায় পাঠানোর চেষ্টা করলে `Cannot set headers after they are sent` এরর হবে।"
        }
      ]
    },
    quickRevision: [
      "Request -> Global Middlewares -> Route Middlewares -> Controller -> Response।",
      "প্রতিটি মিডলওয়্যারে `next()` দিয়ে পরের ধাপে যেতে হয়।",
      "`res.send()`, `res.json()` রিকোয়েস্ট সাইকেল সমাপ্ত করে।",
      "`next(err)` সরাসরি এরর হ্যান্ডলিং মিডলওয়্যারে জাম্প করে।"
    ],
    followUpQuestions: [
      {
        question: "Explain REST API and how it works in Express.js",
        targetId: "express-explain-rest-api",
        shortHint: "REST architecture, HTTP verbs, statelessness, status codes."
      }
    ],
    tags: ["Express.js", "Lifecycle", "Middleware", "next()", "Architecture"]
  },
  {
    id: "express-explain-rest-api",
    slug: "express-explain-rest-api",
    question: "Explain REST API and how it works in Express.js",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**REST (Representational State Transfer) API** হলো এমন একটি আর্কিটেকচারাল স্টাইল বা স্ট্যান্ডার্ড নিয়মাবলী যা ক্লায়েন্ট (Frontend/Mobile app) এবং সার্ভারের (Express.js Backend) মধ্যে স্ট্যান্ডার্ড **HTTP প্রোটোকল** ব্যবহার করে ডেটা আদান-প্রদান করতে ব্যবহৃত হয়। REST API-এর মূল ভিত্তি হলো: **১. Resource-ভিত্তিক URI** (যেমন `/api/users`), **২. স্ট্যান্ডার্ড HTTP Verbs** (GET, POST, PUT, PATCH, DELETE), **৩. Statelessness** (সার্ভার ক্লায়েন্টের কোনো সেশন স্টেট ধরে রাখে না; প্রতিটি রিকোয়েস্টে সব প্রয়োজনীয় তথ্য যেমন Auth Token থাকে), **৪. JSON ফরম্যাট**, এবং **৫. উপযুক্ত HTTP Status Codes** (যেমন 200, 201, 400, 401, 404, 500)।",
    easyExplanation: "সহজ ভাষায় ও বাস্তব উপমায় বুঝুন:\n১. **রেস্টুরেন্টের উপমা**:\n   - আপনি হলেন **Client (Frontend)**।\n   - কিচেন হলো **Server/Database (Backend)**।\n   - আর ওয়েটার হলো **REST API**!\n   - ওয়েটার একটি নির্দিষ্ট 'মেনু কার্ড' (API Endpoints) নিয়ে আসে। আপনি ওয়েটারকে অর্ডার দেন: 'একটি বার্গার দিন' (POST /orders)। ওয়েটার কিচেন থেকে বার্গার বানিয়ে আপনার টেবিলে এনে দেয় এবং একটি বিল/রসিদ দেয় (Status: 201 Created)।\n২. **সহজ ৪টি মূল নিয়ম**:\n   - **Resource (রিসোর্স)**: সবকিছুই একেকটি ডেটা সত্ত্বা, যেমন ইউজার, প্রোডাক্ট বা অর্ডার। ইউআরএল সবসময় Noun হবে (যেমন `/api/products`, কখনোই `/api/getProducts` নয়)।\n   - **HTTP Verbs (অ্যাকশন)**: আপনি কী করতে চান তা মেথড দিয়ে বোঝাবেন:\n     - `GET`: ডেটা পড়া বা দেখা (Read)\n     - `POST`: নতুন ডেটা তৈরি করা (Create)\n     - `PUT`: পুরো ডেটা সম্পূর্ণ রিপ্লেস করা (Full Update)\n     - `PATCH`: ডেটার নির্দিষ্ট কিছু অংশ আপডেট করা (Partial Update)\n     - `DELETE`: ডেটা মুছে ফেলা (Delete)\n   - **Stateless (স্টেটলেস)**: সার্ভার মনে রাখে না আপনি আগে কী রিকোয়েস্ট করেছিলেন। প্রতিটি রিকোয়েস্ট একদম স্বয়ংসম্পূর্ণ।\n   - **JSON রেসপন্স**: সব ডেটা সহজে মানুষের ও মেশিনের পড়ার উপযোগী JSON ফরম্যাটে আদান-প্রদান হয়।",
    interviewAnswer: "A **REST (Representational State Transfer) API** is an architectural style for designing networked applications that communicate over the stateless **HTTP protocol**. In an Express.js backend, a RESTful API adheres to key architectural constraints: 1. **Resource-Oriented URIs**: Endpoints represent resources as nouns (e.g., `/api/v1/courses`), while HTTP verbs define the operations. 2. **Standard HTTP Methods & Idempotency**: `GET` (read, idempotent & safe), `POST` (create, non-idempotent), `PUT` (full replacement, idempotent), `PATCH` (partial update, non-idempotent), and `DELETE` (removal, idempotent). 3. **Statelessness**: Every request contains all necessary context (headers, tokens, payload) to be processed; the server stores no client session state. 4. **Uniform Interface & Standard Status Codes**: Responses return structured JSON paired with explicit HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error). 5. **Layered System & Cacheability**: Responses indicate cacheability via headers (`Cache-Control`) to maximize CDN and browser efficiency.",
    detailedExplanation: {
      whatItIs: "ক্লায়েন্ট এবং সার্ভারের মধ্যে যোগাযোগের জন্য বহুল ব্যবহৃত স্ট্যান্ডার্ড ও স্টেটলেস আর্কিটেকচারাল গাইডলাইন।",
      whyItExists: "যেকোনো প্ল্যাটফর্ম (Web, iOS, Android, Desktop, IoT) যাতে একই Express.js ব্যাকএন্ডের সাথে কোনো টাইট কাপলিং ছাড়া ইউনিভার্সাল HTTP ও JSON-এর মাধ্যমে ডেটা আদান-প্রদান করতে পারে।",
      howItWorks: "ক্লায়েন্ট নির্দিষ্ট URI ও HTTP Method দিয়ে রিকোয়েস্ট পাঠায় -> Express রাউটার সেটি ধরে কন্ট্রোলারে পাঠায় -> কন্ট্রোলার ডাটাবেস অপারেশন সম্পন্ন করে -> উপযুক্ত HTTP স্ট্যাটাস কোড সহ JSON রেসপন্স ফেরত দেয়।",
      whenToUse: "সব আধুনিক সিঙ্গেল পেজ অ্যাপ (React, Next.js, Vue), মোবাইল ব্যাকএন্ড, পাবলিক এপিআই এবং মাইক্রোসার্ভিস তৈরিতে।",
      keyPoints: [
        "Idempotency: GET, PUT, এবং DELETE হলো Idempotent (একই রিকোয়েস্ট ১ বার পাঠালে যে ফলাফল হবে, ১০ বার পাঠালেও সার্ভারের চূড়ান্ত অবস্থা একই থাকবে)।",
        "POST এবং PATCH স্বাভাবিকভাবে Idempotent নয় (বারবার POST পাঠালে একাধিক নতুন রিসোর্স তৈরি হবে)।",
        "PUT বনাম PATCH: PUT পুরো অবজেক্ট প্রতিস্থাপন (Full Overwrite) করে, আর PATCH শুধুমাত্র পাঠানো নির্দিষ্ট ফিল্ডগুলো আংশিক আপডেট (Partial Update) করে।",
        "Stateless Authentication: কোনো সেশন মেমোরিতে না রেখে Bearer JWT টোকেন হেডার (`Authorization: Bearer <token>`) দিয়ে অথেনটিকেশন নিশ্চিত করা হয়।"
      ]
    },
    visualDiagram: {
      title: "Express.js RESTful Request-Response Architecture",
      subtitle: "ক্লায়েন্ট থেকে Express.js REST API এন্ডপয়েন্টে ডেটা আদান-প্রদানের পূর্ণাঙ্গ জীবনচক্র:",
      steps: [
        {
          step: 1,
          title: "ক্লায়েন্ট HTTP রিকোয়েস্ট",
          subtitle: "HTTP Verb + Resource URI",
          location: "Client (React / Mobile App)",
          icon: "network",
          description: "ক্লায়েন্ট নির্দিষ্ট মেথড, URI, হেডার এবং অপশনাল JSON বডিসহ রিকোয়েস্ট পাঠায় (যেমন `POST /api/courses`)।",
          highlightSnippet: "POST /api/courses HTTP/1.1\nContent-Type: application/json\nAuthorization: Bearer <token>\n{ \"title\": \"Node.js Masterclass\", \"price\": 49 }"
        },
        {
          step: 2,
          title: "মিডলওয়্যার ও পার্সিং স্তর",
          subtitle: "express.json() & Auth",
          location: "Express Middleware Pipeline",
          icon: "layers",
          description: "Express ইনকামিং JSON বডি পার্স করে `req.body`-তে দেয় এবং JWT টোকেন ভেরিফাই করে।",
          highlightSnippet: "app.use(express.json());\napp.use(verifyToken);"
        },
        {
          step: 3,
          title: "রিসোর্স রাউটিং ডিসপ্যাচ",
          subtitle: "Method & Path Matching",
          location: "express.Router()",
          icon: "server",
          description: "HTTP Verb এবং URI মিলিয়ে নির্দিষ্ট হ্যান্ডলার ফাংশনে রিকোয়েস্ট পাঠিয়ে দেয়।",
          highlightSnippet: "router.route('/courses')\n  .get(getCourses)\n  .post(createCourse);"
        },
        {
          step: 4,
          title: "ডাটাবেস ও বিজনেস লজিক",
          subtitle: "CRUD Operation",
          location: "Controller & Database",
          icon: "database",
          description: "কন্ট্রোলার ডাটা ভ্যালিডেশন করে ডাটাবেসে নতুন রেকর্ড ইনসার্ট করে বা কুয়েরি চালায়।",
          highlightSnippet: "const newCourse = await Course.create(req.body);"
        },
        {
          step: 5,
          title: "স্ট্যান্ডার্ড REST JSON রেসপন্স",
          subtitle: "Status Code + JSON Body",
          location: "Client Response Delivery",
          icon: "check",
          description: "সঠিক HTTP স্ট্যাটাস কোড (যেমন 201 Created) সহ JSON ডেটা ক্লায়েন্টকে রিটার্ন করে।",
          highlightSnippet: "res.status(201).json({\n  success: true,\n  data: newCourse\n});"
        }
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Express.js দিয়ে পূর্ণাঙ্গ RESTful CRUD API উদাহরণ
const express = require('express');
const app = express();

app.use(express.json());

// ইন-মেমোরি রিসোর্স
let courses = [
  { id: 1, title: 'Node.js Masterclass', price: 49 },
  { id: 2, title: 'Express.js Deep Dive', price: 39 }
];

// ১. GET /api/courses - Read all resources (200 OK)
app.get('/api/courses', (req, res) => {
  res.status(200).json({ success: true, count: courses.length, data: courses });
});

// ২. GET /api/courses/:id - Read single resource by ID (200 OK বা 404 Not Found)
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  res.status(200).json({ success: true, data: course });
});

// ৩. POST /api/courses - Create new resource (201 Created)
app.post('/api/courses', (req, res) => {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.status(400).json({ success: false, message: 'Title and price are required' });
  }
  const newCourse = { id: courses.length + 1, title, price };
  courses.push(newCourse);
  res.status(201).json({ success: true, data: newCourse });
});

// ৪. PATCH /api/courses/:id - Partial update (200 OK)
app.patch('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  if (req.body.title) course.title = req.body.title;
  if (req.body.price) course.price = req.body.price;
  res.status(200).json({ success: true, data: course });
});

// ৫. DELETE /api/courses/:id - Remove resource (204 No Content)
app.delete('/api/courses/:id', (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }
  courses.splice(index, 1);
  res.status(204).send(); // 204 No Content
});

app.listen(5000, () => console.log('REST API Server running on port 5000'));`,
      explanationSteps: [
        {
          step: 1,
          title: "Noun-ভিত্তিক Resource URI",
          description: "URI-তে কোনো ভার্ব না রেখে `/api/courses` বহুবচন Noun হিসেবে রাখা হয়েছে।"
        },
        {
          step: 2,
          title: "HTTP Methods দিয়ে অ্যাকশন নির্ধারণ",
          description: "GET দিয়ে পড়া, POST দিয়ে তৈরি, PATCH দিয়ে আংশিক আপডেট এবং DELETE দিয়ে মোছা হয়েছে।"
        },
        {
          step: 3,
          title: "স্ট্যান্ডার্ড HTTP Status Codes",
          description: "সফল পাঠে 200 OK, নতুন ডেটা তৈরিতে 201 Created, ডিলিটে 204 No Content, ভুল ইনপুটে 400 এবং না পেলে 404 রিটার্ন করা হয়েছে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "GitHub / Stripe REST APIs",
        description: "বিশ্বের জনপ্রিয়তম পাবলিক API যা স্ট্রিক্ট REST নীতিমালা, প্রেডিক্টেবল রিসোর্স ইউআরএল এবং আদর্শ HTTP কোড ব্যবহার করে।"
      },
      {
        title: "E-Commerce Mobile App Backend",
        description: "মোবাইল অ্যাপ ফ্রন্টএন্ড যাতে ক্যাটাগরি, প্রোডাক্ট, অর্ডার এবং পেমেন্ট সংক্রান্ত যেকোনো ডেটা সহজে আদান-প্রদান করতে পারে।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে অবশ্যই **PUT বনাম PATCH** এবং **Idempotency** ব্যাখ্যা করবেন: 'PUT পুরো অবজেক্ট প্রতিস্থাপন করে এবং Idempotent; আর PATCH শুধুমাত্র নির্দিষ্ট ফিল্ড আপডেট করে এবং Non-Idempotent'।",
      deliveryStrategy: "সংজ্ঞা -> রেস্টুরেন্টের ওয়েটার উপমা -> ৫টি কোর কনস্ট্রেইন্ট (Stateless, Uniform Interface) -> HTTP Methods ও Idempotency -> Status Codes।",
      avoidSaying: [
        {
          wrong: "REST API-এর URL-এ কাজ বোঝাতে ভার্ব লেখা উচিত, যেমন `/api/createCourse` বা `/api/deleteCourse?id=1`।",
          right: "REST-এ URL সবসময় Noun (রিসোর্স) হবে যেমন `/api/courses` বা `/api/courses/1` এবং অ্যাকশন নির্ধারিত হবে HTTP Verb (POST, DELETE) দ্বারা।"
        },
        {
          wrong: "সব রেসপন্সেই সবসময় status 200 OK পাঠিয়ে বডিতে `{ error: true }` পাঠানো ভালো প্র্যাকটিস।",
          right: "সঠিক HTTP Status Code ব্যবহার করা আবশ্যক: যেমন ক্লায়েন্ট ভুলের জন্য 400 Bad Request / 404 Not Found, অথেনটিকেশনে 401, সার্ভার ক্র্যাশে 500।"
        }
      ]
    },
    quickRevision: [
      "REST = Representational State Transfer (Stateless, Resource-oriented Architecture)।",
      "URI Nouns (`/api/courses`), HTTP Verbs (`GET, POST, PUT, PATCH, DELETE`)।",
      "Idempotent: GET, PUT, DELETE (একই রিকোয়েস্ট বারবার পাঠালেও সার্ভারে একই অবস্থা থাকে)।",
      "Non-Idempotent: POST (প্রতিবার নতুন রিসোর্স তৈরি করে)।",
      "PUT = Full overwrite; PATCH = Partial update।",
      "Status Codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error)।"
    ],
    followUpQuestions: [
      {
        question: "What is routing in Express.js?",
        targetId: "express-routing-explained",
        shortHint: "URI matching, HTTP methods, express.Router."
      }
    ],
    tags: ["Express.js", "REST API", "HTTP Methods", "Architecture", "CRUD", "Status Codes"]
  },

  // ==========================================
  // 🔵 Express.js Routing (3 Questions)
  // ==========================================
  {
    id: "express-routing-explained",
    slug: "express-routing-explained",
    question: "What is routing in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**Routing** হলো এমন একটি মেকানিজম যার মাধ্যমে একটি অ্যাপ্লিকেশন ক্লায়েন্টের পাঠানো নির্দিষ্ট **URI (বা Path)** এবং নির্দিষ্ট **HTTP Method** (যেমন `GET`, `POST`, `PUT`, `DELETE`)-এর ওপর ভিত্তি করে কীভাবে রেসপন্স করবে তা নির্ধারণ করা হয়। Express-এ রাউটিং দুইভাবে করা যায়: **১. Application Routing** (`app.get()`, `app.post()`) এবং **২. Modular Router** (`express.Router()`), যা বড় অ্যাপ্লিকেশনের রাউটগুলোকে আলাদা ফাইলে মডিউলার ও গোছানোভাবে বিভক্ত করতে ব্যবহৃত হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি বড় শপিং মলের ডিরেক্টরি বোর্ডের কথা ভাবুন:\n- আপনি ৩য় তলার 'ফুড কোর্ট' সাইন দেখে ৩য় তলায় গেলেন (URI Matching: `/food-court`).\n- সেখানে গিয়ে বললেন 'খাবার কিনতে চাই' (HTTP Method: `POST /order`).\n- সেখানকার কাউন্টার আপনাকে খাবার দিয়ে দিল (Controller Response).\n- আপনি যদি 'জুতো কিনতে চাই' বলতেন (ভুল Method বা Path), তবে সে বলতো 'এখানে জুতো বিক্রি হয় না' (404 Not Found)!",
    interviewAnswer: "Routing in Express refers to how an application's endpoints respond to client requests based on a specific URI pattern and HTTP method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`). Express provides two levels of routing:\n1. **Application-level Routing**: Directly on the app instance (`app.get('/users', handler)`).\n2. **Modular Router (`express.Router`)**: An isolated, mini-instance of middleware and routes capable of performing routing functions. `express.Router` enables clean modular architectures where routes are organized into feature-based files (e.g. `userRoutes.js`, `productRoutes.js`) and mounted onto prefix paths via `app.use('/api/v1/users', userRoutes)`.",
    detailedExplanation: {
      whatItIs: "URL ও HTTP মেথড অনুযায়ী রিকোয়েস্ট ডিরেক্ট করার সিস্টেম।",
      whyItExists: "বিশাল API এন্ডপয়েন্টগুলোকে পরিচ্ছন্ন, মডিউলার এবং সহজে স্কেল করার উপযোগী রাখতে।",
      howItWorks: "রেজেক্স ও পাথ-টোকেনাইজার দিয়ে ইনকামিং URL ম্যাচ করে নিবন্ধিত হ্যান্ডলার রান করায়।",
      whenToUse: "সব REST API এন্ডপয়েন্ট ও ওয়েব পেজ রাউট স্ট্রাকচার তৈরিতে।",
      keyPoints: [
        "Routes match URI path + HTTP verb simultaneously.",
        "express.Router creates isolated modular route files.",
        "Route paths support string patterns, params (:id), and regular expressions.",
        "app.route() allows chaining multiple HTTP verbs onto a single path."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. routes/userRoutes.js (Modular Router)
const express = require('express');
const router = express.Router();

// GET /api/v1/users
router.get('/', (req, res) => {
  res.json({ users: ['Shuvo', 'Tanvir', 'Hasan'] });
});

// POST /api/v1/users
router.post('/', (req, res) => {
  res.status(201).json({ message: 'User successfully created' });
});

// GET /api/v1/users/:id
router.get('/:id', (req, res) => {
  res.json({ userId: req.params.id, name: 'Shuvo' });
});

module.exports = router;


// ২. server.js (Mounting Router)
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
// প্রিফিক্স পাথে রাউটার মাউন্ট করা
app.use('/api/v1/users', userRoutes);`,
      explanationSteps: [
        {
          step: 1,
          title: "express.Router()",
          description: "আলাদা ফাইলে মিনি রাউটিং ইন্সট্যান্স তৈরি করা হয়।"
        },
        {
          step: 2,
          title: "মডিউলার মাউন্টিং",
          description: "`app.use('/api/v1/users', userRoutes)` দিয়ে প্রিফিক্স পাথে সহজে সংযুক্ত করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Microservices & Versioned REST APIs",
        description: "ভার্সনিং API-এর ক্ষেত্রে `app.use('/api/v1', v1Router)` এবং `app.use('/api/v2', v2Router)` দিয়ে চমৎকার ভার্সন সেপারেশন রাখা হয়।"
      }
    ],
    interviewTips: {
      tip: "`express.Router()` কে কেন 'mini-application' বলা হয় এবং বড় প্রজেক্টে কেন এটি ব্যবহার করা বেস্ট প্র্যাকটিস তা তুলে ধরুন।",
      deliveryStrategy: "রাউটিং কী -> HTTP Verbs + Path ম্যাচিং -> express.Router() এর মডিউলারিটি -> ভার্সনিং সুবিধা।",
      avoidSaying: [
        {
          wrong: "সব রাউট server.js ফাইলে এক জায়গায় লিখে ফেলাই ভালো।",
          right: "প্রোডাকশন গ্রেড অ্যাপে `express.Router()` দিয়ে প্রতিটি ডোমেইনের (Users, Orders, Products) জন্য আলাদা ফাইল বানানো স্ট্যান্ডার্ড আর্কিটেকচার।"
        }
      ]
    },
    quickRevision: [
      "Routing = URL Path + HTTP Method ম্যাচ করে রেসপন্স দেওয়া।",
      "`app.get()`, `app.post()`, `app.put()`, `app.delete()` হলো কোর ভার্ব।",
      "`express.Router()` মডিউলার ও ক্লিন কোডবেস নিশ্চিত করে।",
      "`app.use('/prefix', router)` দিয়ে রাউটার মাউন্ট করা হয়।"
    ],
    followUpQuestions: [
      {
        question: "What are route parameters, query parameters, and URL parameters?",
        targetId: "express-route-query-url-parameters",
        shortHint: "req.params vs req.query vs req.params comparison."
      }
    ],
    tags: ["Express.js", "Routing", "express.Router", "REST API", "Endpoints"]
  },
  {
    id: "express-route-query-url-parameters",
    slug: "express-route-query-url-parameters",
    question: "What are route parameters, query parameters, and URL parameters?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Express-এ URL ডেটা পাওয়ার ৩টি রূপ রয়েছে:\n১. **Route Parameters (`req.params`)**: URL পাথের ভেতর কোলন (`:paramName`) দিয়ে সংজ্ঞায়িত ডায়নামিক সেগমেন্ট যা নির্দিষ্ট রিসোর্স শনাক্ত করতে ব্যবহৃত হয় (যেমন `/users/:id` -> `req.params.id`)।\n২. **Query Parameters (`req.query`)**: URL-এর শেষে প্রশ্নবোধক চিহ্নের (`?key=value&sort=asc`) পর থাকা অপশনাল ফিল্টারিং, সার্চিং বা পেজিনেশন ডেটা (যেমন `req.query.sort`)।\n৩. **URL Parameters**: এটি সাধারণত Route Parameters এবং Query Parameters-এর সামগ্রিক সাধারণ নাম হিসেবে ব্যবহৃত হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি লাইব্রেরির বই খোঁজার কথা ভাবুন:\n- **Route Parameter (`/books/:id` বা `/books/99`)**: 'আমাকে ঠিক ৯৯ নম্বর আলমারির নির্দিষ্ট বইটি বের করে দিন' (নির্দিষ্ট রিসোর্স আইডেন্টিফায়ার).\n- **Query Parameter (`/books?genre=science&year=2026`)**: 'আমাকে বিজ্ঞান ক্যাটাগরির ২০২৬ সালের বইগুলোর লিস্ট ফিল্টার করে দিন' (ফিল্টারিং ও সার্চিং)!",
    interviewAnswer: "In Express.js:\n1. **Route Parameters (`req.params`)**: Named URL segments defined with a colon prefix (e.g. `/api/products/:category/:id`). Used to capture essential resource identifiers directly embedded in the URL path. Accessing `GET /api/products/shoes/42` yields `req.params = { category: 'shoes', id: '42' }`.\n2. **Query Parameters (`req.query`)**: Key-value pairs appended after the `?` delimiter in the URL (e.g. `/api/products?page=2&limit=10&sort=price_desc`). Used for non-structural parameters like pagination, sorting, search queries, and optional filters. Express automatically parses query strings into `req.query`.\n3. **URL Parameters**: The general umbrella term referencing any dynamic data transmitted via the URL (both path segments and query strings).",
    detailedExplanation: {
      whatItIs: "URL থেকে ডায়নামিক ডাটা এক্সট্র্যাক্ট করার মেকানিজম।",
      whyItExists: "RESTful রিসোর্স স্পেসিফিকেশন এবং ফ্লেক্সিবল সার্চ/ফিল্টার সুবিধা দিতে।",
      howItWorks: "Express ইন্টারনালি পাথ ম্যাচ করে `req.params` এবং URL কোয়েরি পার্স করে `req.query` অবজেক্টে রাখে।",
      whenToUse: "নির্দিষ্ট আইটেম ফেচ/আপডেট/ডিলিটে `req.params`; লিস্ট ফিল্টার ও পেজিনেশনে `req.query`।",
      keyPoints: [
        "Route params are mandatory path segments (e.g. /users/:id).",
        "Query params are optional query strings after '?' (e.g. ?search=js).",
        "Values in req.params and req.query are ALWAYS strings (parse numbers via parseInt/Number).",
        "Query strings with duplicate keys parse into an array."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// ১. Route Parameters উদাহরণ: /api/orders/:orderId
app.get('/api/orders/:orderId', (req, res) => {
  const orderId = req.params.orderId; // URL Path থেকে নেওয়া
  res.json({ message: \`Fetching details for Order ID: \${orderId}\` });
});

// ২. Query Parameters উদাহরণ: /api/products?category=laptop&minPrice=500&sort=asc
app.get('/api/products', (req, res) => {
  const { category, minPrice, sort } = req.query; // Query String থেকে নেওয়া
  
  res.json({
    filterCategory: category || 'all',
    minPrice: Number(minPrice) || 0,
    sortBy: sort || 'default'
  });
});

// রিকোয়েস্ট: GET /api/orders/ORD-789
// রিকোয়েস্ট: GET /api/products?category=electronics&sort=desc`,
      explanationSteps: [
        {
          step: 1,
          title: "req.params অ্যাক্সেস",
          description: "পাথের নির্দিষ্ট আইডি নিতে `req.params` ব্যবহৃত হয়।"
        },
        {
          step: 2,
          title: "req.query অ্যাক্সেস",
          description: "ফিল্টারিং ও সার্চিংয়ের জন্য `req.query` ব্যবহৃত হয়।"
        },
        {
          step: 3,
          title: "টাইপ কনভার্শন",
          description: "সবসময় মনে রাখতে হবে URL থেকে আসা মান স্ট্রিং থাকে, তাই সংখ্যায় কনভার্ট করতে হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Catalog with Pagination",
        description: "নির্দিষ্ট প্রোডাক্ট পেজে `/products/:slug` (Route Param) এবং ক্যাটালগ পেজে `/products?page=1&limit=20&brand=apple` (Query Param) ব্যবহার করা হয়।"
      }
    ],
    interviewTips: {
      tip: "কখন কোনটি ব্যবহার করবেন: নির্দিষ্ট একক রিসোর্সে `req.params` এবং সার্চ/ফিল্টার/পেজিনেশনে `req.query`। এবং মনে রাখবেন এরা সর্বদা `string` টাইপ রিটার্ন করে।",
      deliveryStrategy: "পার্থক্য ছক -> req.params কোড -> req.query কোড -> টাইপ কনভার্শনের সতর্কতা।",
      avoidSaying: [
        {
          wrong: "req.params.id স্বয়ংক্রিয়ভাবে Number টাইপ হিসেবে আসে।",
          right: "req.params এবং req.query-এর সব ভ্যালু সর্বদা string থাকে; গাণিতিক কাজের জন্য `Number(req.params.id)` করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "`req.params` = URL পাথের কোলন সেগমেন্ট (`/users/:id`), নির্দিষ্ট রিসোর্সের জন্য।",
      "`req.query` = URL-এর প্রশ্নচিহ্নের পরের অংশ (`?page=1&limit=10`), ফিল্টারিংয়ের জন্য।",
      "উভয় প্যারামিটার থেকেই ডেটা সর্বদা `string` আকারে পাওয়া যায়।",
      "RESTful স্ট্যান্ডার্ডে একক আইটেম খুঁজতে Route param এবং সার্চে Query param উত্তম।"
    ],
    followUpQuestions: [
      {
        question: "How do you create a route that handles HTTP methods?",
        targetId: "express-http-methods-handling",
        shortHint: "GET, POST, PUT, PATCH, DELETE and app.route()."
      }
    ],
    tags: ["Express.js", "Params", "req.params", "req.query", "URL"]
  },
  {
    id: "express-http-methods-handling",
    slug: "express-http-methods-handling",
    question: "How do you create a route that handles HTTP methods?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Express-এ HTTP মেথড হ্যান্ডেল করতে Express অ্যাপ বা রাউটার অবজেক্টের কারেসপন্ডিং মেথড কল করতে হয় (যেমন `app.get()`, `app.post()`, `app.put()`, `app.patch()`, `app.delete()`, `app.all()`)। এছাড়াও একই পাথের মাল্টিপল HTTP মেথডকে চেইনিং করতে **`app.route('/path')`** মেকানিজম ব্যবহার করা যায়, যা কোডকে আরও গোছানো রাখে।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্লগে আর্টিকেলের জীবনচক্র:\n- **`GET /articles`**: সব আর্টিকেল পড়া (Read).\n- **`POST /articles`**: নতুন আর্টিকেল লেখা ও প্রকাশ করা (Create).\n- **`PUT /articles/:id`**: পুরো আর্টিকেলের সব তথ্য নতুন করে বদলে দেওয়া (Full Replace).\n- **`PATCH /articles/:id`**: শুধু আর্টিকেলের শিরোনাম বা একটি ছোট অংশ ঠিক করা (Partial Update).\n- **`DELETE /articles/:id`**: আর্টিকেলটি চিরতরে মুছে ফেলা (Delete)!",
    interviewAnswer: "In Express.js, HTTP verbs are handled using dedicated application and router methods corresponding to RESTful standards:\n- `app.get(path, handler)`: Retrieve resource representations (Idempotent & Safe).\n- `app.post(path, handler)`: Create new resources or trigger actions (Non-Idempotent).\n- `app.put(path, handler)`: Complete replacement / update of an existing resource (Idempotent).\n- `app.patch(path, handler)`: Partial modification of an existing resource.\n- `app.delete(path, handler)`: Remove a specific resource.\n- `app.all(path, handler)`: Match any HTTP method for a designated path (useful for auth checks).\n- `app.route(path)`: Allows chaining multiple HTTP method handlers to a single URL path to eliminate duplicate path declarations.",
    detailedExplanation: {
      whatItIs: "RESTful HTTP Verbs বাস্তবায়ন করার Express API ইন্টারফেস।",
      whyItExists: "HTTP স্ট্যান্ডার্ড অনুযায়ী ডেটা ক্রিয়েট, রিড, আপডেট ও ডিলিট অপারেশন ম্যাপিং করতে।",
      howItWorks: "ইনকামিং রিকোয়েস্টের মেথড মিলিয়ে নির্দিষ্ট কলব্যাক ফাংশন এক্সিকিউট করে।",
      whenToUse: "সব CRUD (Create, Read, Update, Delete) REST API এন্ডপয়েন্টে।",
      keyPoints: [
        "GET is safe and idempotent.",
        "PUT replaces entire document; PATCH updates only sent fields.",
        "app.route() improves code readability by grouping handlers.",
        "Always return appropriate HTTP status codes (200, 201, 204, 400, 404)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();
app.use(express.json());

// ১. ক্লাসিক CRUD রাউটস
app.get('/api/users', (req, res) => res.json({ users: [] }));
app.post('/api/users', (req, res) => res.status(201).json({ created: req.body }));

// ২. app.route() চেইনিং প্যাটার্ন (ক্লিন ও রিইউজেবল)
app.route('/api/users/:id')
  .get((req, res) => {
    res.json({ id: req.params.id, name: 'Sample User' });
  })
  .put((req, res) => {
    res.json({ message: 'User fully replaced', updated: req.body });
  })
  .patch((req, res) => {
    res.json({ message: 'User partially updated', fields: req.body });
  })
  .delete((req, res) => {
    res.status(204).send(); // No Content
  });`,
      explanationSteps: [
        {
          step: 1,
          title: "CRUD মেথড ম্যাপিং",
          description: "প্রতিটি HTTP ভার্বকে যথাযথ ডেটাবেস অপারেশনের সাথে যুক্ত করা হয়।"
        },
        {
          step: 2,
          title: "app.route() চেইনিং",
          description: "একই পাথে `get`, `put`, `patch`, `delete` এক ব্লকে সুন্দরভাবে সাজানো যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "RESTful CRUD Controller Architecture",
        description: "MongoDB বা PostgreSQL-এর মডেল অপারেশনের সাথে কন্ট্রোলারের ৫টি মেথড (`getAll`, `getOne`, `create`, `update`, `delete`) সরাসরি ম্যাপ করা হয়।"
      }
    ],
    interviewTips: {
      tip: "`PUT` (পুরো অবজেক্ট রিপ্লেস) বনাম `PATCH` (শুধুমাত্র প্রেরিত নির্দিষ্ট ফিল্ড আপডেট) এর সূক্ষ্ম পার্থক্যটি বুঝিয়ে বলুন।",
      deliveryStrategy: "HTTP Verbs তালিকা -> PUT vs PATCH পার্থক্য -> `app.route()` চেইনিংয়ের সুবিধা।",
      avoidSaying: [
        {
          wrong: "GET রিকোয়েস্টে বডিতে পাসওয়ার্ড পাঠিয়ে লগইন করা ভালো।",
          right: "GET রিকোয়েস্টে বডি পাঠানো নিষিদ্ধ এবং তা ব্রাউজার হিস্ট্রিতে সেভ হয়; লগইন বা সংবেদনশীল ডেটা সর্বদা POST রিকোয়েস্টে পাঠাতে হবে।"
        }
      ]
    },
    quickRevision: [
      "`GET` = পড়া, `POST` = তৈরি, `PUT` = সম্পূর্ণ বদল, `PATCH` = আংশিক বদল, `DELETE` = মোছা।",
      "`app.route('/path')` দিয়ে একই পাথে একাধিক মেথড চেইন করা যায়।",
      "যথাযথ HTTP স্ট্যাটাস কোড (`200`, `201 Created`, `204 No Content`) ব্যবহার করুন।",
      "`app.all()` যেকোনো HTTP মেথড ম্যাচ করে।"
    ],
    followUpQuestions: [
      {
        question: "What is middleware?",
        targetId: "express-what-is-middleware",
        shortHint: "req, res, next signature and pipeline."
      }
    ],
    tags: ["Express.js", "HTTP Methods", "REST", "CRUD", "app.route"]
  },

  // ==========================================
  // 🔵 Middleware, Requests & Responses (7 Questions)
  // ==========================================
  {
    id: "express-what-is-middleware",
    slug: "express-what-is-middleware",
    question: "What is middleware?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**Middleware** হলো Express.js-এর এমন একটি ফাংশন যার কাছে অ্যাপ্লিকেশনের **Request অবজেক্ট (`req`)**, **Response অবজেক্ট (`res`)**, এবং রিকোয়েস্ট-রেসপন্স সাইকেলের পরবর্তী মিডলওয়্যারকে কল করার জন্য **`next` ফাংশন**-এর অ্যাক্সেস থাকে। মিডলওয়্যার যেকোনো কোড এক্সিকিউট করতে পারে, `req` বা `res` অবজেক্ট পরিবর্তন করতে পারে, রেসপন্স পাঠিয়ে সাইকেল সমাপ্ত করতে পারে অথবা `next()` কল করে পরবর্তী ফাংশনে কন্ট্রোল পাস করতে পারে।",
    easyExplanation: "সহজ উপমা:\nএকটি অটোমেটিক কার ওয়াশিং টানেলের কথা ভাবুন:\n- গাড়িটি (Request) টানেলে ঢুকল।\n- **মিডলওয়্যার ১**: গাড়ির ওপর সাবান-পানি স্প্রে করল এবং গাড়িটিকে সামনে এগিয়ে দিল (`next()`).\n- **মিডলওয়্যার ২**: ব্রাশ দিয়ে গাড়ি ঘষে পরিষ্কার করল এবং সামনে এগিয়ে দিল (`next()`).\n- **মিডলওয়্যার ৩**: ব্লোয়ার দিয়ে গাড়ি শুকিয়ে চকচকে করে ড্রাইভ করার জন্য ইউজারকে বুঝিয়ে দিল (`res.send()`).\n\nমাঝখানে কোনো সমস্যা হলে (যেমন গাড়ির দরজা খোলা থাকলে) কোনো একটি মিডলওয়্যার সাথে সাথে এলার্ম বাজিয়ে গাড়ি আটকে দিতে পারে (`res.status(400)`)!",
    interviewAnswer: "Middleware in Express is a function that sits between the incoming HTTP request and the final route handler. It has access to three core arguments: the request object (`req`), the response object (`res`), and the `next` middleware function in the application's request-response cycle.\n\n**Capabilities of Middleware**:\n1. Execute arbitrary synchronous or asynchronous code.\n2. Mutate request and response objects (e.g. attaching `req.user` after JWT verification).\n3. Terminate the request-response cycle by dispatching a response (`res.json()`).\n4. Pass execution to the next middleware in the stack by invoking `next()`.\n5. Trigger the error-handling pipeline by calling `next(error)`.",
    detailedExplanation: {
      whatItIs: "Express.js অ্যাপ্লিকেশনের মেরুদণ্ড বা ইন্টারসেপ্টর ফাংশন।",
      whyItExists: "লগিং, অথেন্টিকেশন, বডি পার্সিং ও সিকিউরিটিকে আলাদা ও রিইউজেবল লেয়ারে বিভক্ত রাখতে।",
      howItWorks: "Express একটি লিনিয়ার অ্যারে স্ট্যাকে মিডলওয়্যারগুলো সাজায় এবং `next()` কলের মাধ্যমে রান করায়।",
      whenToUse: "অথেন্টিকেশন, রিকোয়েস্ট ভ্যালিডেশন, লগিং, রেট লিমিটিং এবং ডাটা স্যানিটাইজেশনে।",
      keyPoints: [
        "Standard signature: (req, res, next) => {}.",
        "Error signature: (err, req, res, next) => {}.",
        "Must either call next() or send a response (res.send), otherwise request will hang.",
        "Middlewares execute in the exact order they are registered via app.use()."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// কাস্টম টাইমস্ট্যাম্প মিডলওয়্যার
const addTimestamp = (req, res, next) => {
  req.receivedAt = new Date().toISOString();
  console.log(\`Incoming Request: \${req.method} \${req.url} at \${req.receivedAt}\`);
  next(); // অবশ্যই next() কল করতে হবে!
};

// গ্লোবালি মিডলওয়্যার ব্যবহার করা
app.use(addTimestamp);

app.get('/api/time', (req, res) => {
  res.json({
    message: 'Middleware successfully added timestamp!',
    serverTime: req.receivedAt
  });
});

app.listen(3000);`,
      explanationSteps: [
        {
          step: 1,
          title: "সিগনেচার",
          description: "`req, res, next` তিনটি প্যারামিটার থাকে।"
        },
        {
          step: 2,
          title: "req মিউটেশন",
          description: "`req.receivedAt` যুক্ত করে পরবর্তী রুটে ডাটা পাস করা হয়।"
        },
        {
          step: 3,
          title: "next() ইনভোকেশন",
          description: "কন্ট্রোল পরবর্তী হ্যান্ডলারে চলে যায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "JWT Authentication Gatekeeper",
        description: "যেকোনো সুরক্ষিত রুটে প্রবেশের আগে `verifyToken` মিডলওয়্যার টোকেন যাচাই করে এবং সঠিক হলে `req.user = decoded` সেট করে কন্ট্রোলারে পাঠায়।"
      }
    ],
    interviewTips: {
      tip: "মিডলওয়্যারের ৪টি সুপারপাওয়ার (কোড রান, req/res মডিফাই, রেসপন্স পাঠানো, next কল) এক নিঃশ্বাসে বলে দিন।",
      deliveryStrategy: "সংজ্ঞা -> কার ওয়াশ উপমা -> req/res/next এর দায়িত্ব -> next() ভুলে গেলে কী ক্ষতি হয় তা বলুন।",
      avoidSaying: [
        {
          wrong: "মিডলওয়্যার শুধুমাত্র এরর হ্যান্ডলিং করার জন্য ব্যবহৃত হয়।",
          right: "মিডলওয়্যার সবকিছুর জন্য ব্যবহৃত হয়—লগিং, অথেন্টিকেশন, বডি পার্সিং, ভ্যালিডেশন, হেডার সিকিউরিটি এবং এরর হ্যান্ডলিং।"
        }
      ]
    },
    quickRevision: [
      "Middleware = `(req, res, next)` অ্যাক্সেস থাকা ইন্টারসেপ্টর ফাংশন।",
      "`req` ও `res` অবজেক্ট পরিবর্তন করতে পারে।",
      "হয় `res.send()` পাঠাতে হবে, নতুবা `next()` দিয়ে পরেরটায় যেতে হবে।",
      "নিবন্ধনের ক্রম (`app.use`) অনুযায়ী ধারাবাহিকভাবে রান হয়।"
    ],
    followUpQuestions: [
      {
        question: "What are the types of middleware in Express.js?",
        targetId: "express-types-of-middleware",
        shortHint: "Application, Router, Error, Built-in, Third-party."
      }
    ],
    tags: ["Express.js", "Middleware", "next()", "req", "res"]
  },
  {
    id: "express-types-of-middleware",
    slug: "express-types-of-middleware",
    question: "What are the types of middleware in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Express.js-এ মূলত **৫ ধরনের মিডলওয়্যার** রয়েছে:\n১. **Application-level Middleware**: `app.use()` বা `app.get()` দিয়ে সরাসরি পুরো অ্যাপে বাইন্ড করা মিডলওয়্যার (যেমন গ্লোবাল লগার)।\n২. **Router-level Middleware**: `router.use()` বা `router.get()` দিয়ে নির্দিষ্ট `express.Router()` ইন্সট্যান্সে বাইন্ড করা মিডলওয়্যার।\n৩. **Error-handling Middleware**: ৪টি আর্গুমেন্ট বিশিষ্ট `(err, req, res, next)` স্পেশাল মিডলওয়্যার যা অ্যাপ্লিকেশন এরর ক্যাচ করে।\n৪. **Built-in Middleware**: Express-এর সাথে আসা নিজস্ব মিডলওয়্যার (যেমন `express.json()`, `express.urlencoded()`, `express.static()`)।\n৫. **Third-party Middleware**: NPM থেকে ইনস্টল করা বহিরাগত মিডলওয়্যার (যেমন `cors`, `helmet`, `morgan`, `cookie-parser`, `multer`)।",
    easyExplanation: "সহজ ৫টি ধরণ:\n১. **পুরো বাড়ির সিকিউরিটি (Application-level)**: মেইন গেটে দাঁড়ানো দারোয়ান যে বাড়ির সবার জন্য কাজ করে (`app.use`).\n২. **রুমের সিকিউরিটি (Router-level)**: শুধুমাত্র দোতলার অফিসের রুমের দরজার ফিঙ্গারপ্রিন্ট স্ক্যানার (`router.use`).\n৩. **রেডিমেড টুলস (Built-in)**: Express-এর সাথে পাওয়া প্লাগইন (`express.json`).\n৪. **বাজারের দামি গ্যাজেট (Third-party)**: দোকান থেকে কিনে আনা স্পেশাল সিসিটিভি ক্যামেরা (`cors`, `helmet`).\n৫. **জরুরি অ্যাম্বুলেন্স (Error-handling)**: কেউ অসুস্থ হলে (Error হলে) তাকে হাসপাতালে নেওয়ার স্পেশাল টিম `(err, req, res, next)`!",
    interviewAnswer: "Express categorizes middlewares into five distinct types based on their scope and origin:\n1. **Application-level Middleware**: Bound directly to the `app` instance via `app.use()` or `app.METHOD()`. Runs for every matching request across the entire application.\n2. **Router-level Middleware**: Bound to an instance of `express.Router()` via `router.use()`. Scoped strictly to that specific sub-router module.\n3. **Error-handling Middleware**: Defined uniquely with **4 parameters**: `(err, req, res, next)`. Placed at the very bottom of the middleware stack to capture errors propagated via `next(err)`.\n4. **Built-in Middleware**: Native middlewares included within Express since v4.16+, namely `express.json()` (parses JSON bodies), `express.urlencoded()` (parses form data), and `express.static()` (serves static files).\n5. **Third-party Middleware**: Installed from NPM to add specialized capabilities, such as `cors` (CORS headers), `helmet` (security headers), `morgan` (HTTP logging), and `multer` (multipart uploads).",
    detailedExplanation: {
      whatItIs: "Express ফ্রেমওয়ার্কের মিডলওয়্যার ক্লাসিফিকেশন।",
      whyItExists: "সঠিক জায়গায় সঠিক স্কোপের মিডলওয়্যার ব্যবহার করে অ্যাপ স্ট্রাকচার পরিষ্কার রাখতে।",
      howItWorks: "অ্যাপ্লিকেশন, রাউটার এবং এরর পাইপলাইনে নির্দিষ্ট প্রায়োরিটিতে এক্সিকিউট হয়।",
      whenToUse: "আর্কিটেকচার প্ল্যানিং, সিকিউরিটি সেটআপ ও এরর ম্যানেজমেন্টের সময়।",
      keyPoints: [
        "Error-handling middleware MUST have exactly 4 arguments to be recognized by Express.",
        "Built-in express.json() replaced the old body-parser library.",
        "Router middleware only affects routes registered on that router.",
        "Third-party middlewares must be installed via npm."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const cors = require('cors'); // 5. Third-party Middleware
const app = express();
const router = express.Router();

// 4. Built-in Middleware
app.use(express.json());
app.use(express.static('public'));

// 5. Third-party Middleware
app.use(cors());

// 1. Application-level Middleware
app.use((req, res, next) => {
  console.log(\`App Level: \${req.method} \${req.url}\`);
  next();
});

// 2. Router-level Middleware
router.use((req, res, next) => {
  console.log('Router Level: Processing user route');
  next();
});

router.get('/profile', (req, res) => {
  res.json({ name: 'Shuvo' });
});

app.use('/users', router);

// 3. Error-handling Middleware (সবার শেষে থাকতে হবে)
app.use((err, req, res, next) => {
  console.error('Error Level Handler:', err.message);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "Built-in ও Third-party",
          description: "`express.json()` ও `cors()` গ্লোবালি সেট করা হয়।"
        },
        {
          step: 2,
          title: "Router vs App level",
          description: "অ্যাপ লেভেল পুরো অ্যাপে চলে, রাউটার লেভেল শুধু `/users`-এ চলে।"
        },
        {
          step: 3,
          title: "Error-handling (4 params)",
          description: "`err` সহ ৪টি প্যারামিটার দিয়ে সবার নিচে এরর হ্যান্ডলার বসে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Production Express Stack Layout",
        description: "প্রোডাকশন অ্যাপে প্রথমে `helmet` ও `cors`, এরপর `express.json()`, এরপর `router` এবং সবার নিচে গ্লোবাল `errorHandler` সাজানো থাকে।"
      }
    ],
    interviewTips: {
      tip: "Error-handling মিডলওয়্যারে যে **ঠিক ৪টি প্যারামিটার `(err, req, res, next)`** থাকতে হয়—এই পয়েন্টটি বিশেষভাবে হাইলাইট করুন (৩টি দিলে Express একে সাধারণ মিডলওয়্যার ভেবে ভুল করবে)।",
      deliveryStrategy: "৫টি প্রকারের নাম বলুন -> প্রতিটির ১ লাইনে কাজ ব্যাখ্যা করুন -> Error middleware এর ৪টি প্যারামিটারের রহস্য বলুন।",
      avoidSaying: [
        {
          wrong: "Express-এ কোনো Built-in মিডলওয়্যার নেই, সব npm থেকে নামাতে হয়।",
          right: "Express-এ `express.json()`, `express.urlencoded()`, এবং `express.static()` বিল্ট-ইন রয়েছে।"
        }
      ]
    },
    quickRevision: [
      "৫ প্রকার: Application-level, Router-level, Error-handling, Built-in, Third-party।",
      "Error-handling মিডলওয়্যারে ৪টি প্যারামিটার `(err, req, res, next)` থাকে।",
      "`express.json()` ও `express.static()` হলো Built-in।",
      "`cors`, `helmet`, `morgan` হলো Third-party।"
    ],
    followUpQuestions: [
      {
        question: "How does middleware work in Express.js?",
        targetId: "express-how-middleware-works",
        shortHint: "Middleware stack, next() execution, error bypassing."
      }
    ],
    tags: ["Express.js", "Middleware Types", "Router Middleware", "Error Handling", "Built-in"]
  },
  {
    id: "express-how-middleware-works",
    slug: "express-how-middleware-works",
    question: "How does middleware work in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Express.js-এ মিডলওয়্যার মূলত একটি **Sequential Execution Pipeline বা Stack** হিসেবে কাজ করে। যখন একটি রিকোয়েস্ট আসে, Express প্রথম নিবন্ধিত মিডলওয়্যার ফাংশনটিকে এক্সিকিউট করে। সেই ফাংশনটি যখন **`next()`** কল করে, তখন Express অভ্যন্তরীণ স্ট্যাক পয়েন্টার এগিয়ে নিয়ে পরবর্তী মিডলওয়্যারটিকে কল করে। যদি কোনো মিডলওয়্যার `next(error)`-এ আর্গুমেন্ট পাস করে, Express সাধারণ সব মিডলওয়্যার স্কিপ করে সরাসরি **Error Handling Middleware**-এ লাফ দেয়। আর যদি কোনো মিডলওয়্যার `res.json()` পাঠিয়ে দেয়, তবে পাইপলাইন সেখানেই থেমে যায়।",
    easyExplanation: "সহজ উপমা:\nএকটি রিলে রেস (Relay Race)-এর কথা ভাবুন:\n১. প্রথম দৌড়বিদ (Middleware 1) ব্যাটন নিয়ে দৌড়ে গিয়ে দ্বিতীয় দৌড়বিদের হাতে দিল (`next()`).\n২. দ্বিতীয় দৌড়বিদ (Middleware 2) ব্যাটন নিয়ে ৩য় জনের হাতে দিল (`next()`).\n৩. শেষ দৌড়বিদ (Controller) ফিনিশ লাইনে পৌঁছে ফিতা কেটে দিল (`res.send()`).\n\nযদি মাঝপথে কোনো দৌড়বিদ পড়ে গিয়ে ব্যথা পায় (Error), সাথে সাথে রেস থেমে গিয়ে মাঠে অ্যাম্বুলেন্স (Error Handler) ঢুকে পড়ে!",
    interviewAnswer: "Under the hood, Express maintains an array of Layer objects representing registered middlewares and routes. When an HTTP request enters:\n1. Express initializes a pointer at index 0 of the middleware stack.\n2. It invokes the first matching layer function, passing `(req, res, next)`.\n3. The `next()` function is an internal cursor advancing callback. When invoked, it increments the index and executes the subsequent layer.\n4. If `next()` is called with an argument (e.g. `next(new Error('...'))`), Express detects the error state, skips all subsequent standard 3-parameter middleware layers, and searches down the stack for the next 4-parameter error-handling middleware `(err, req, res, next)`.\n5. If a middleware dispatches a response, the client connection closes and downstream layers are not executed.",
    detailedExplanation: {
      whatItIs: "Express মিডলওয়্যার ইঞ্জিনের ইন্টারনাল এক্সিকিউশন মেকানিজম।",
      whyItExists: "কীভাবে `next()` এবং এরর প্রপাগেশন কাজ করে তা গভীরভাবে বুঝতে।",
      howItWorks: "Layer Array Pointer -> Middleware Execution -> next() Call -> Next Layer / Error Handler Jump।",
      whenToUse: "কাস্টম মিডলওয়্যার পাইপলাইন ও অ্যাসিনক্রোনাস এরর হ্যান্ডলার ডিজাইনে।",
      keyPoints: [
        "Express uses a linked Layer stack internally.",
        "Calling next('route') skips the rest of the middleware functions in the current router.",
        "Calling next(err) skips to the error-handling middleware.",
        "Not calling next() or sending a response results in a stalled request."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// স্ট্যাক লেয়ার ১
app.use((req, res, next) => {
  console.log('Layer 1: Entry');
  req.pipeline = ['Layer 1'];
  next();
  console.log('Layer 1: Exit (After downstream completes)');
});

// স্ট্যাক লেয়ার ২ (কন্ডিশনাল এরর জাম্প)
app.use((req, res, next) => {
  console.log('Layer 2: Checking query');
  if (req.query.fail === 'true') {
    return next(new Error('Forced pipeline error!')); // স্কিপ করে সরাসরি এরর হ্যান্ডলারে জাম্প
  }
  req.pipeline.push('Layer 2');
  next();
});

// স্ট্যাক লেয়ার ৩ (নরমাল রুট)
app.get('/test', (req, res) => {
  console.log('Layer 3: Route Handler');
  req.pipeline.push('Layer 3');
  res.json({ success: true, pipeline: req.pipeline });
});

// স্ট্যাক লেয়ার ৪ (গ্লোবাল এরর হ্যান্ডলার)
app.use((err, req, res, next) => {
  console.log('Layer 4: Error Handler caught ->', err.message);
  res.status(500).json({ error: err.message });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "next() প্রপাগেশন",
          description: "লেয়ার ১ থেকে ২ এবং ৩-এ পর্যায়ক্রমে কন্ট্রোল পাস হয়।"
        },
        {
          step: 2,
          title: "next(err) জাম্পিং",
          description: "`next(err)` কল হলে লেয়ার ৩ স্কিপ হয়ে সরাসরি লেয়ার ৪ (Error Handler)-এ পৌঁছায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Request Context Injection",
        description: "ট্রেসিং মিডলওয়্যার প্রতি রিকোয়েস্টে একটি ইউনিক `requestId` (UUID) জেনারেট করে `req.id`-এ সেট করে, যা পরের সব লগার ও কন্ট্রোলারে স্বয়ংক্রিয়ভাবে পাওয়া যায়।"
      }
    ],
    interviewTips: {
      tip: "`next('route')` দিলে কী হয় তা বলুন (এটি শুধুমাত্র `app.METHOD()` বা `router.METHOD()`-এ কাজ করে এবং বর্তমান রুট বাবল স্কিপ করে পরবর্তী রুটে যায়)।",
      deliveryStrategy: "ইন্টারনাল স্ট্যাক পয়েন্টার কনসেপ্ট -> next() এর ভূমিকা -> next(err) এর শর্ট-সার্কিট জাম্প।",
      avoidSaying: [
        {
          wrong: "next() কল করলে কোড স্বয়ংক্রিয়ভাবে রিটার্ন হয়ে যায়।",
          right: "next() কল করলে পরের ফাংশন চলে, কিন্তু বর্তমান ফাংশনের `next()` এর নিচের লাইনগুলোও পরে রান হয়; তাই রিটার্ন করতে `return next()` লেখা নিরাপদ।"
        }
      ]
    },
    quickRevision: [
      "Express মিডলওয়্যারগুলোকে একটি Layer Stack-এ সাজিয়ে রাখে।",
      "`next()` স্ট্যাক পয়েন্টারকে পরের মিডলওয়্যারে নিয়ে যায়।",
      "`next(err)` সব সাধারণ লেয়ার স্কিপ করে এরর হ্যান্ডলারে লাফ দেয়।",
      "সবসময় `return next()` ব্যবহার করা ভালো যাতে নিচের কোড ডাবল রান না হয়।"
    ],
    followUpQuestions: [
      {
        question: "How do you create custom middleware?",
        targetId: "express-create-custom-middleware",
        shortHint: "Auth guard, request timing, body validator middleware."
      }
    ],
    tags: ["Express.js", "Middleware Internals", "next()", "Layer Stack", "Pipeline"]
  },
  {
    id: "express-create-custom-middleware",
    slug: "express-create-custom-middleware",
    question: "How do you create custom middleware?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Express.js-এ কাস্টম মিডলওয়্যার তৈরি করতে এমন একটি জাভাস্ক্রিপ্ট ফাংশন লিখতে হয় যা ৩টি আর্গুমেন্ট গ্রহণ করে: **`(req, res, next)`**। ফাংশনটির ভেতরে লজিক সম্পাদন করে `req` অবজেক্টে কাস্টম ডেটা এটাচ করা যায়, শর্ত পূরণ না হলে `res.status().json()` দিয়ে রিকোয়েস্ট আটকে দেওয়া যায় এবং সবকিছু ঠিক থাকলে **`next()`** কল করে পরবর্তী মিডলওয়্যার বা কন্ট্রোলারে রিকোয়েস্ট পাস করতে হয়। প্রয়োজনে কনফিগারেবল মিডলওয়্যার তৈরির জন্য একটি ক্লোজার ফাংশন (Middleware Factory) রিটার্ন করা যায়।",
    easyExplanation: "সহজ উপমা:\nএকটি VIP ক্লাবের বাউন্সার (Security Guard) তৈরি করার মতো:\n১. বাউন্সারের কাছে ৩টি জিনিস থাকবে: মেহমান (`req`), ক্লাবের দরজা (`res`), এবং ভেতরে ঢোকার অনুমতিপত্র (`next`).\n২. বাউন্সার মেহমানের কার্ড চেক করবে (`req.headers.authorization`).\n৩. কার্ড ফেক হলে বাউন্সার বলবে 'আপনি ঢুকতে পারবেন না' (`res.status(401).json({ error })`).\n৪. কার্ড আসল হলে বাউন্সার মেহমানের গায়ে VIP ব্যাজ লাগিয়ে (`req.user = user`) ভেতরে যেতে বলবে (`next()`)!",
    interviewAnswer: "Creating custom middleware in Express involves defining a function with the `(req, res, next)` signature. Inside the function:\n1. Execute business logic or inspect incoming headers/body.\n2. Conditionally reject the request by terminating with `res.status(code).json(...)`.\n3. Mutate the `req` object with validated data (e.g. `req.user`, `req.requestId`).\n4. Pass control downstream by invoking `next()` or `return next()`.\n\nFor reusable, configurable middleware, you can implement a **Middleware Factory** pattern where an outer function accepts configuration options and returns the standard `(req, res, next)` middleware function.",
    detailedExplanation: {
      whatItIs: "কাস্টম রিকোয়েস্ট ইন্টারসেপশন ও ভ্যালিডেশন লজিক তৈরির নিয়ম।",
      whyItExists: "কন্ট্রোলারের ভেতর ডুপ্লিকেট অথেন্টিকেশন ও ভ্যালিডেশন কোড লেখা বন্ধ করতে।",
      howItWorks: "ফাংশনটি `app.use(myMiddleware)` অথবা নির্দিষ্ট রুটে `app.get('/path', myMiddleware, handler)` পাস করা হয়।",
      whenToUse: "JWT Auth Guard, Role-based Access Control (RBAC), Request Validator, Performance Timer।",
      keyPoints: [
        "Always call next() on success and return res.send() on failure.",
        "Use closures (factories) for parameterized middleware (e.g. requireRole('admin')).",
        "Attach clean metadata onto the req object.",
        "Wrap async middleware in try/catch or express-async-errors to forward errors to next(err)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();
app.use(express.json());

// ১. কাস্টম রিকোয়েস্ট টাইমার মিডলওয়্যার
const requestTimer = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`[\${req.method}] \${req.originalUrl} took \${duration}ms\`);
  });
  next();
};

// ২. প্যারামিটারাইজড রোল গার্ড মিডলওয়্যার (Middleware Factory Pattern)
const requireRole = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.headers['x-user-role']; // সিমুলেটেড রোল

    if (!userRole) {
      return res.status(401).json({ error: 'No user role provided' });
    }

    if (userRole !== requiredRole) {
      return res.status(403).json({ error: \`Access Denied. Requires \${requiredRole} role.\` });
    }

    req.role = userRole;
    next(); // রোল ম্যাচ করেছে, প্রবেশাধিকার মঞ্জুর!
  };
};

app.use(requestTimer);

// পাবলিক রুট
app.get('/api/public', (req, res) => res.json({ msg: 'Open to everyone' }));

// প্রটেক্টেড অ্যাডমিন রুট
app.get('/api/admin', requireRole('admin'), (req, res) => {
  res.json({ msg: 'Welcome Admin Master!' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "রেসপন্স ইভেন্ট লিসেনার",
          description: "`res.on('finish')` রেসপন্স পাঠানো শেষ হওয়া পর্যন্ত টাইম মাপে।"
        },
        {
          step: 2,
          title: "Middleware Factory",
          description: "`requireRole('admin')` প্যারামিটার গ্রহণ করে কাস্টম মিডলওয়্যার রিটার্ন করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "সুপার-অ্যাডমিন এবং সাধারণ ইউজারের পারমিশন চেক করতে `hasPermission('EDIT_PRODUCT')` মিডলওয়্যার ফ্যাক্টরি ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "একটি সাধারণ মিডলওয়্যারের পাশাপাশি একটি **Middleware Factory (`requireRole(role)`)**-এর উদাহরণ দিলে ইন্টারভিউয়ার বুঝবেন আপনার জাভাস্ক্রিপ্ট ক্লোজার এবং Express আর্কিটেকচারে দারুণ দখল আছে।",
      deliveryStrategy: "সাধারণ মিডলওয়্যার স্ট্রাকচার -> req মিউটেশন -> Middleware Factory কনসেপ্ট -> কোড ডেমো।",
      avoidSaying: [
        {
          wrong: "মিডলওয়্যারে কোনো প্যারামিটার পাঠানো যায় না।",
          right: "Higher-order function বা Factory pattern ব্যবহার করে যেকোনো কনফিগারেশন প্যারামিটার মিডলওয়্যারে পাস করা যায়।"
        }
      ]
    },
    quickRevision: [
      "কাস্টম মিডলওয়্যার সিগনেচার: `(req, res, next)`।",
      "শর্ত ব্যর্থ হলে `return res.status(400).json(...)` পাঠান।",
      "সফল হলে `req.user = data` সেট করে `next()` কল করুন।",
      "প্যারামিটার পাঠাতে Middleware Factory (`fn(options) => (req, res, next) => {}`) ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "What is third-party middleware?",
        targetId: "express-third-party-middleware",
        shortHint: "cors, helmet, morgan, multer, express-rate-limit."
      }
    ],
    tags: ["Express.js", "Custom Middleware", "Factory Pattern", "Auth Guard", "RBAC"]
  },
  {
    id: "express-third-party-middleware",
    slug: "express-third-party-middleware",
    question: "What is third-party middleware?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "**Third-party Middleware** হলো NPM কমিউনিটি কর্তৃক তৈরি ও ওপেন-সোর্স করা প্রি-বিল্ট মিডলওয়্যার প্যাকেজ যা Express.js অ্যাপ্লিকেশনে অতিরিক্ত ফিচার, সিকিউরিটি, লগিং ও ডেটা পার্সিং সহজে যুক্ত করতে ব্যবহৃত হয়।\n\n**সর্বাধিক ব্যবহৃত ৫টি থার্ড-পার্টি মিডলওয়্যার**:\n১. **`cors`**: ক্রস-অরিজিন রিকোয়েস্ট পারমিশন ও HTTP হেডার কনফিগার করে।\n২. **`helmet`**: ১৫+ সিকিউরিটি HTTP রেসপন্স হেডার সেট করে অ্যাপকে সুরক্ষিত রাখে।\n৩. **`morgan`**: সার্ভারে আসা সব HTTP রিকোয়েস্টের কনসোল ও ফাইল লগ তৈরি করে।\n৪. **`cookie-parser`**: ক্লায়েন্টের রিকোয়েস্ট হেডার থেকে কুকি পার্স করে `req.cookies`-এ দেয়।\n৫. **`multer`**: ফাইল আপলোডের মাল্টিপার্ট ফরম ডেটা (`multipart/form-data`) হ্যান্ডেল করে।",
    easyExplanation: "সহজ উপমা:\nএকটি নতুন ফ্ল্যাট কেনার মতো:\n- ফ্ল্যাট তৈরি হওয়ার পর আপনি বাজার থেকে রেডিমেড ডোরলক (`helmet`), সিসিটিভি ক্যামেরা (`morgan`), ইন্টারকম (`cors`), এবং ফিল্টার মেশিন (`cookie-parser`) কিনে এনে ঘরে বসিয়ে দিলেন।\n- নিজে স্ক্র্যাচ থেকে সিসিটিভি ক্যামেরা বা ডোরলক বানাতে গেলে মাসের পর মাস সময় লাগত ও ভুলের ঝুঁকি থাকত। থার্ড-পার্টি মিডলওয়্যার হলো ওপেন সোর্সের সেই রেডিমেড প্রিমিয়াম গ্যাজেট!",
    interviewAnswer: "Third-party middlewares are external, reusable npm packages designed to seamlessly integrate into the Express middleware stack via `app.use()`. They solve cross-cutting architectural concerns without reinventing the wheel.\n\n**Industry-Standard Third-Party Middlewares**:\n- **`cors`**: Manages Cross-Origin Resource Sharing and pre-flight `OPTIONS` requests.\n- **`helmet`**: Sets critical HTTP security headers (CSP, HSTS, X-Frame-Options, noSniff).\n- **`morgan`**: Automated HTTP request logger with customizable formatting presets (`dev`, `combined`).\n- **`cookie-parser`**: Parses the `Cookie` header into structured `req.cookies` and `req.signedCookies`.\n- **`multer`**: Middleware for handling `multipart/form-data`, primarily used for uploading files.\n- **`express-rate-limit`**: Protects public endpoints from brute-force and DDoS attacks.",
    detailedExplanation: {
      whatItIs: "NPM ইকোসিস্টেম থেকে ইন্টিগ্রেট করা রেডিমেড Express মিডলওয়্যার।",
      whyItExists: "সিকিউরিটি, পার্সিং ও ইউটিলিটি কোড দ্রুত এবং নির্ভরযোগ্যভাবে অ্যাপে যুক্ত করতে।",
      howItWorks: "`npm install <package>` দিয়ে ইন্সটল করে `app.use(package())` মেথডে মাউন্ট করা হয়।",
      whenToUse: "যেকোনো প্রোডাকশন-গ্রেড Express অ্যাপ্লিকেশন সেটআপ করার প্রথম দিন থেকেই।",
      keyPoints: [
        "Installed via NPM and registered via app.use().",
        "Must be placed near the top of the middleware stack for early effect.",
        "Always configure options explicitly in production (e.g. specific CORS whitelist).",
        "Ensures battle-tested security compliance."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// ১. সিকিউরিটি হেডার মিডলওয়্যার
app.use(helmet());

// ২. সুনির্দিষ্ট ডোমেইনের জন্য CORS কনফিগ
app.use(cors({
  origin: ['https://myfrontend.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ৩. HTTP রিকোয়েস্ট লগার
app.use(morgan('dev'));

// ৪. বডি ও কুকি পার্সার
app.use(express.json());
app.use(cookieParser('my-secret-key'));

app.get('/api/me', (req, res) => {
  res.json({
    cookies: req.cookies,
    message: 'Protected and logged with 3rd-party middlewares!'
  });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "helmet & cors",
          description: "সার্ভারের সবার শীর্ষে সিকিউরিটি ও ক্রস-অরিজিন পলিসি সেট করা হয়।"
        },
        {
          step: 2,
          title: "morgan লগার",
          description: "টার্মিনালে রঙিন স্ট্যাটাস কোড ও রেসপন্স টাইম লগ করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Secure Production API Gateway",
        description: "প্রোডাকশন গেটওয়েতে `helmet`, `cors`, `morgan`, `compression`, এবং `express-rate-limit` এই ৫টি থার্ড-পার্টি প্যাকেজ একযোগে ব্যবহার করা স্ট্যান্ডার্ড বেস্ট প্র্যাকটিস।"
      }
    ],
    interviewTips: {
      tip: "টপ ৫টি থার্ড-পার্টি প্যাকেজের নাম (`cors`, `helmet`, `morgan`, `cookie-parser`, `multer`) এবং তাদের কাজ এক লাইনে বুঝিয়ে বলুন।",
      deliveryStrategy: "সংজ্ঞা -> টপ ৫টি প্যাকেজের নাম ও কাজ -> প্রোডাকশন কনফিগারেশনের উদাহরণ।",
      avoidSaying: [
        {
          wrong: "CORS এবং Helmet একই কাজ করে।",
          right: "CORS শুধুমাত্র ব্রাউজারের ক্রস-অরিজিন পলিসি নিয়ন্ত্রণ করে; Helmet ব্রাউজার সিকিউরিটির জন্য ১৫টির বেশি বিভিন্ন সিকিউরিটি হেডার সেট করে।"
        }
      ]
    },
    quickRevision: [
      "Third-party middleware = NPM থেকে ইনস্টল করা রেডিমেড মিডলওয়্যার।",
      "`helmet` = সিকিউরিটি হেডার্স।",
      "`cors` = ক্রস-অরিজিন অ্যাক্সেস পলিসি।",
      "`morgan` = রিকোয়েস্ট লগিং।",
      "`multer` = ফাইল আপলোড হ্যান্ডলিং।"
    ],
    followUpQuestions: [
      {
        question: "How do you access request data (query parameters, body, headers, etc.) in Express.js?",
        targetId: "express-access-request-data",
        shortHint: "req.body, req.params, req.query, req.headers, req.cookies."
      }
    ],
    tags: ["Express.js", "Third-Party Middleware", "CORS", "Helmet", "Morgan", "Multer"]
  },
  {
    id: "express-access-request-data",
    slug: "express-access-request-data",
    question: "How do you access request data (query parameters, body, headers, etc.) in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "Express.js-এ ক্লায়েন্টের পাঠানো বিভিন্ন ধরনের রিকোয়েস্ট ডেটা অ্যাক্সেস করার প্রধান প্রপার্টিগুলো হলো:\n১. **`req.body`**: POST/PUT রিকোয়েস্টের JSON বা ফর্ম ডেটা (এর জন্য `app.use(express.json())` মিডলওয়্যার আবশ্যক)।\n২. **`req.params`**: URL পাথের ডায়নামিক সেগমেন্ট ডেটা (যেমন `/users/:id` -> `req.params.id`)।\n৩. **`req.query`**: URL-এর প্রশ্নচিহ্নের পরের কোয়েরি স্ট্রিং ডেটা (যেমন `?search=node` -> `req.query.search`)।\n৪. **`req.headers` বা `req.get('header-name')`**: HTTP রিকোয়েস্ট হেডার্স (যেমন `Authorization`, `User-Agent`)।\n৫. **`req.cookies`**: প্রেরিত ব্রাউজার কুকিজ (এর জন্য `cookie-parser` আবশ্যক)।\n৬. **`req.ip`**: ক্লায়েন্টের আইপি অ্যাড্রেস।",
    easyExplanation: "সহজ উপমা:\nএকটি কুরিয়ার পার্সেল পাওয়ার মতো:\n- **`req.body`**: পার্সেলের বাক্সের ভেতরের আসল চিঠি বা উপহার (Main Payload).\n- **`req.params`**: পার্সেলের ওপর লেখা প্রাপকের নির্দিষ্ট রুম নম্বর (`/room/402`).\n- **`req.query`**: কুরিয়ারের স্লিপে দেওয়া অতিরিক্ত নির্দেশনা (`?urgent=true`).\n- **`req.headers`**: পার্সেলের সীলমোহর, প্রেরকের নাম ও নিরাপত্তা স্ট্যাম্প (`Authorization Token`).\n- **`req.cookies`**: কুরিয়ার কোম্পানির দেওয়া ডিজিটাল মেম্বারশিপ টোকেন!",
    interviewAnswer: "In Express.js, incoming client data is extracted through distinct properties attached to the `req` object:\n1. **`req.body`**: Contains key-value pairs submitted in the HTTP request payload (JSON or URL-encoded). Requires body-parsing middleware (`express.json()` or `express.urlencoded({ extended: true })`).\n2. **`req.params`**: Key-value object mapping route parameter placeholders (e.g. `/api/users/:userId` -> `req.params.userId`).\n3. **`req.query`**: Key-value object parsed from URL query strings (e.g. `/api/search?q=express&limit=10` -> `req.query.q`).\n4. **`req.headers` / `req.get('Header-Name')`**: HTTP request headers. `req.get()` is case-insensitive and recommended for reading headers like `Authorization`.\n5. **`req.cookies`**: Parsed client cookies populated via the `cookie-parser` middleware.\n6. **`req.ip`**: The remote client IP address.",
    detailedExplanation: {
      whatItIs: "HTTP Request অবজেক্টের বিভিন্ন অংশ থেকে ইনপুট রিড করার পদ্ধতি।",
      whyItExists: "ক্লায়েন্ট থেকে আসা ডেটা সঠিকভাবে পার্স করে কন্ট্রোলারে প্রসেস করতে।",
      howItWorks: "Express ইন্টারনালি নেটওয়ার্ক সকেট ও পার্সার মিডলওয়্যার দিয়ে `req` অবজেক্ট পপুলেট করে।",
      whenToUse: "প্রতিটি API কন্ট্রোলার ও ইনপুট ভ্যালিডেশন লজিকে।",
      keyPoints: [
        "req.body is undefined if express.json() is not included.",
        "req.get('Authorization') is case-insensitive and safe.",
        "req.params values are always strings.",
        "req.ip reflects client IP (use 'trust proxy' if behind NGINX/Cloudflare)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json()); // req.body পড়ার জন্য
app.use(cookieParser()); // req.cookies পড়ার জন্য

// POST /api/users/:tenantId/register?ref=social
app.post('/api/users/:tenantId/register', (req, res) => {
  // ১. Route Parameter
  const tenantId = req.params.tenantId;

  // ২. Query Parameter
  const referralSource = req.query.ref;

  // ৩. Request Body
  const { username, email, password } = req.body;

  // ৪. Request Headers
  const authToken = req.get('Authorization');
  const userAgent = req.get('User-Agent');

  // ৫. Cookies
  const sessionId = req.cookies.sessionId;

  // ৬. Client IP
  const clientIp = req.ip;

  res.status(201).json({
    receivedData: {
      tenantId,
      referralSource,
      user: { username, email },
      authTokenPresent: Boolean(authToken),
      sessionId,
      clientIp
    }
  });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "req.body",
          description: "`express.json()` এর মাধ্যমে বডি পার্স হয়।"
        },
        {
          step: 2,
          title: "req.get()",
          description: "`req.get('Header-Name')` কেস-ইনসেনসিটিভভাবে হেডার রিড করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "User Registration & Authentication Controller",
        description: "ইউজার সাইনআপে `req.body` থেকে নাম/পাসওয়ার্ড, `req.headers` থেকে ক্লায়েন্ট টোকেন এবং `req.ip` থেকে ফ্রড ডিটেকশন লগ নেওয়া হয়।"
      }
    ],
    interviewTips: {
      tip: "কখনোই বলবেন না `req.body` এমনিতেই পাওয়া যায়; মনে করিয়ে দিন যে `app.use(express.json())` না দিলে `req.body` ডিফল্টভাবে `undefined` থাকে।",
      deliveryStrategy: "৫টি প্রধান ডাটা সোর্স তালিকাভুক্ত করুন -> req.body-এর জন্য মিডলওয়্যারের প্রয়োজনীয়তা বলুন -> req.get() এর কেস-ইনসেনসিটিভ সুবিধা উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "req.headers['authorization'] দিয়ে হেডার পড়া একমাত্র উপায়।",
          right: "`req.get('authorization')` ব্যবহার করা উত্তম কারণ এটি কেস-ইনসেনসিটিভ এবং নিরাপদ।"
        }
      ]
    },
    quickRevision: [
      "`req.body` = JSON/Form ডেটা (`express.json()` আবশ্যক)।",
      "`req.params` = URL পাথ প্যারামিটার (`/users/:id`)।",
      "`req.query` = কোয়েরি স্ট্রিং (`?page=1&sort=asc`)।",
      "`req.get('Authorization')` = কেস-ইনসেনসিটিভ হেডার রিডিং।",
      "`req.cookies` = পার্সড ব্রাউজার কুকি।"
    ],
    followUpQuestions: [
      {
        question: "How do you send responses in different formats (JSON, HTML, etc)?",
        targetId: "express-send-different-response-formats",
        shortHint: "res.json vs res.send vs res.render vs res.sendFile."
      }
    ],
    tags: ["Express.js", "Request", "req.body", "req.params", "req.headers", "req.query"]
  },
  {
    id: "express-send-different-response-formats",
    slug: "express-send-different-response-formats",
    question: "How do you send responses in different formats (JSON, HTML, etc)?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Beginner",
    importance: "High",
    shortAnswer: "Express.js-এ বিভিন্ন ফরম্যাটে ক্লায়েন্টকে রেসপন্স পাঠানোর জন্য সমৃদ্ধ বিল্ট-ইন মেথড রয়েছে:\n১. **JSON Response (`res.json()`)**: জাভাস্ক্রিপ্ট অবজেক্টকে স্বয়ংক্রিয়ভাবে JSON স্ট্রিংয়ে রূপান্তর করে `Content-Type: application/json` হেডারসহ পাঠায় (REST API-এর জন্য আদর্শ)।\n২. **General/HTML Response (`res.send()`)**: ইনপুটের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে HTML (`text/html`), Text (`text/plain`), বা Buffer হিসেবে রেসপন্স পাঠায়।\n৩. **Render View Template (`res.render()`)**: EJS, Pug বা Handlebars টেমপ্লেটে ডায়নামিক ডাটা বসিয়ে রেন্ডার করা HTML পাঠায়।\n৪. **File Download & Serving (`res.sendFile()`, `res.download()`)**: সরাসরি ডিস্ক থেকে ফাইল পাঠাতে বা ব্রাউজারে ফাইল ডাউনলোড ট্রিগার করতে ব্যবহৃত হয়।\n৫. **Redirect (`res.redirect()`)**: অন্য কোনো URL-এ ক্লায়েন্টকে রিডাইরেক্ট করে।",
    easyExplanation: "সহজ উপমা:\nএকটি রেস্তোরাঁর সার্ভিং স্টাইলের মতো:\n- **`res.json()`**: খাবার সুন্দর ফুড-বক্সে প্যাক করে ডিজিটাল ডেলিভারি দেওয়া (Modern Web/Mobile Apps).\n- **`res.send()`**: সাধারণ প্লেটে যেকোনো খাবার সার্ভ করা (HTML বা সাধারণ টেক্সট).\n- **`res.render()`**: কাঁচা শাকসবজি ও মসলা মিলিয়ে শেফ রান্না করে টেবিলে সাজিয়ে দেওয়া (Server-Side Template Engine).\n- **`res.download()`**: গ্রাহকের ব্যাগে পুরো পার্সেল ফাইল তুলে দেওয়া!",
    interviewAnswer: "Express provides tailored response helper methods on the `res` object depending on the required content format and MIME type:\n- **`res.json([body])`**: Serializes objects/arrays via `JSON.stringify()`, handles formatting settings (`json spaces`), and automatically sets `Content-Type: application/json`.\n- **`res.send([body])`**: Versatile method that inspects the parameter type; strings default to `text/html`, objects/arrays default to `application/json`, and Buffers default to `application/octet-stream`.\n- **`res.render(view, [locals])`**: Compiles dynamic template views (EJS, Pug, Handlebars) with passed data models into rendered HTML.\n- **`res.sendFile(path)` & `res.download(path, [filename])`**: `res.sendFile` transfers files directly to the browser; `res.download` sets the `Content-Disposition: attachment` header to force a download dialogue.\n- **`res.status(code)`**: Chains the HTTP status code (e.g. `res.status(201).json(...)`).",
    detailedExplanation: {
      whatItIs: "Express Response অবজেক্টের বিভিন্ন ডাটা ফরম্যাটিং মেথড।",
      whyItExists: "সঠিক MIME টাইপ ও হেডার কনফিগারেশন ম্যানুয়ালি না লিখে এক লাইনে রেসপন্স পাঠাতে।",
      howItWorks: "মেথডগুলো ইন্টারনালি উপযুক্ত `Content-Type` হেডার সেট করে `res.end()` কল করে।",
      whenToUse: "REST API-এ `res.json`; ফাইল ট্রাফিকে `res.download`; পেজ সার্ভিংয়ে `res.render`।",
      keyPoints: [
        "Always prefer res.json() over res.send() for REST APIs for consistent JSON formatting.",
        "res.status() returns 'res' object, allowing method chaining (res.status(200).json()).",
        "res.download() automatically sets Content-Disposition header.",
        "res.sendFile() requires an absolute path."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const path = require('path');
const app = express();

// ১. JSON রেসপন্স (REST API)
app.get('/api/user', (req, res) => {
  res.status(200).json({ id: 1, name: 'Rakibul Islam', verified: true });
});

// ২. HTML স্ট্রিং রেসপন্স
app.get('/welcome', (req, res) => {
  res.send('<h1>Welcome to Express Web App</h1><p>Served as text/html</p>');
});

// ৩. স্ট্যাটিক ফাইল সরাসরি ডিসপ্লে (PDF / Image)
app.get('/preview-doc', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'sample.pdf');
  res.sendFile(filePath);
});

// ৪. ফাইল ডাউনলোড বাধ্য করা (Attachment)
app.get('/download-report', (req, res) => {
  const filePath = path.join(__dirname, 'files', 'annual-report.pdf');
  res.download(filePath, 'Financial_Report_2026.pdf');
});

// ৫. রিডাইরেক্ট করা
app.get('/old-route', (req, res) => {
  res.redirect(301, '/welcome');
});`,
      explanationSteps: [
        {
          step: 1,
          title: "res.json() চেইনিং",
          description: "`res.status(200).json(...)` দিয়ে স্ট্যাটাস ও ডেটা একসাথে পাঠানো হয়।"
        },
        {
          step: 2,
          title: "res.download()",
          description: "কাস্টম ফাইলনেম দিয়ে ব্রাউজারে ডাউনলোড উইন্ডো ট্রিগার করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Invoice PDF Generation & Download",
        description: "পেমেন্ট কমপ্লিট হলে ব্যাকএন্ডে PDF জেনারেট করে `res.download(path, 'Invoice-INV-101.pdf')` দিয়ে ইউজারের ব্রাউজারে ইনভয়েস ডাউনলোড করানো হয়।"
      }
    ],
    interviewTips: {
      tip: "`res.send(obj)` এবং `res.json(obj)` এর পার্থক্য বলুন: `res.json()` নাল/আনডিফাইন্ড এবং কাস্টম JSON কনফিগারেশন নিখুঁতভাবে ফরম্যাট করে, তাই REST API-এর জন্য `res.json()` সর্বদা সেরা।",
      deliveryStrategy: "প্রধান মেথডসমূহ তালিকাভুক্ত করুন -> res.json vs res.send তুলনা -> res.download এর ব্যবহারিক উদাহরণ।",
      avoidSaying: [
        {
          wrong: "res.sendFile ফাইল ডাউনলোড করায় আর res.download ব্রাউজারে ফাইল শো করায়।",
          right: "res.sendFile ব্রাউজারে ফাইল ভিউ করায়; আর res.download `Content-Disposition: attachment` হেডার দিয়ে ফাইল ডাউনলোড করায়।"
        }
      ]
    },
    quickRevision: [
      "`res.json()` = REST API-এর জন্য স্ট্যান্ডার্ড JSON রেসপন্স।",
      "`res.send()` = অটো-টাইপ ডিটেকশন (HTML, Text, Buffer)।",
      "`res.render()` = সার্ভার-সাইড টেমপ্লেট রেন্ডারিং (EJS/Pug)।",
      "`res.download()` = ব্রাউজারে ফাইল ডাউনলোড উইন্ডো পপআপ করে।",
      "`res.redirect()` = অন্য URL-এ রিডাইরেক্ট করে।"
    ],
    followUpQuestions: [
      {
        question: "What is CORS, and how is it used?",
        targetId: "express-cors-explained",
        shortHint: "Cross-Origin Resource Sharing, Preflight OPTIONS, cors package."
      }
    ],
    tags: ["Express.js", "Response", "res.json", "res.send", "res.download", "HTTP"]
  },

  // ==========================================
  // 🔵 Security, Production & Error Handling (11 Questions)
  // ==========================================
  {
    id: "express-cors-explained",
    slug: "express-cors-explained",
    question: "What is CORS, and how is it used?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**CORS (Cross-Origin Resource Sharing)** হলো একটি ব্রাউজার-এনফোর্সড সিকিউরিটি মেকানিজম যা এক ডোমেইন/পোর্ট (Origin, যেমন `http://localhost:3000`) থেকে ভিন্ন ডোমেইন/পোর্টে (যেমন `https://api.myapp.com`) চলমান সার্ভারে HTTP রিকোয়েস্ট করার অনুমতি নিয়ন্ত্রণ করে। ব্রাউজার ডিফল্টভাবে **Same-Origin Policy** মেনে চলে; সার্ভার যদি উপযুক্ত HTTP রেসপন্স হেডার (যেমন `Access-Control-Allow-Origin`) না পাঠায়, তবে ব্রাউজার ক্লায়েন্ট জাভাস্ক্রিপ্টকে রেসপন্স রিড করতে ব্লক করে দেয়। Express-এ **`cors`** মিডলওয়্যার দিয়ে অনুমোদিত Origin, Method ও Headers কনফিগার করা হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি সুরক্ষিত দূতাবাসের ইমিগ্রেশন গেটের মতো:\n- আপনার বাড়ি 'বাংলাদেশ ডোমেইন' (`localhost:3000`).\n- আপনি 'আমেরিকা সার্ভার'-এর কাছে ডেটা চাইলেন (`api.myapp.com`).\n- ব্রাউজার হলো বর্ডার গার্ড: সে আমেরিকার সার্ভারকে জিজ্ঞেস করে: 'বাংলাদেশ থেকে আসা রিকোয়েস্টে কি তোমার পারমিশন আছে?'\n- আমেরিকার সার্ভার যদি ভিসা সিল (`Access-Control-Allow-Origin: http://localhost:3000`) দেয়, তবেই বর্ডার গার্ড আপনাকে ডেটা নিয়ে ঘরে ঢুকতে দেবে; অন্যথায় লাল বাতি জ্বেলে আটকে দেবে (CORS Error)!",
    interviewAnswer: "CORS (Cross-Origin Resource Sharing) is a security protocol implemented by web browsers to relax the default Same-Origin Policy (SOP). An origin is defined by the combination of **Protocol + Domain + Port**. When a client makes a cross-origin request (or triggers a Preflight `OPTIONS` check for non-simple requests), the browser checks for specific response headers such as `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers`.\n\nIn Express.js, CORS is managed using the official **`cors`** middleware:\n- In development: `app.use(cors())` allows all origins (`*`).\n- In production: An explicit whitelist origin array and credentials policy (`credentials: true`) must be configured to prevent unauthorized third-party sites from spoofing API requests.",
    detailedExplanation: {
      whatItIs: "ব্রাউজারের ক্রস-ডোমেইন রিকোয়েস্ট সিকিউরিটি কন্ট্রোল সিস্টেম।",
      whyItExists: "ক্ষতিকর সাইট যাতে ইউজারের ব্রাউজার থেকে গোপনে অন্য সাইটের প্রাইভেট API ডেটা চুরি করতে না পারে।",
      howItWorks: "ব্রাউজার প্রথমে Preflight `OPTIONS` রিকোয়েস্ট পাঠায় -> সার্ভার হেডার অনুমোদন দিলে আসল রিকোয়েস্ট এক্সিকিউট হয়।",
      whenToUse: "যেকোনো SPA (React, Next.js, Vue) যখন আলাদা ব্যাকএন্ড ডোমেইনের সাথে যোগাযোগ করে।",
      keyPoints: [
        "CORS is enforced by the BROWSER, not by the server or Postman/cURL.",
        "Preflight OPTIONS request occurs for custom headers or non-simple methods (PUT, DELETE, PATCH).",
        "Never use origin: '*' in production when credentials (cookies/auth headers) are enabled.",
        "Origin includes Protocol, Domain, and Port (http://localhost:3000 !== https://localhost:3000)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const cors = require('cors');
const app = express();

// প্রোডাকশন-গ্রেড সিকিউর CORS কনফিগারেশন
const allowedOrigins = [
  'https://www.myfrontend.com',
  'https://admin.myfrontend.com',
  'http://localhost:3000' // লোকাল ডেভেলপমেন্ট
];

const corsOptions = {
  origin: (origin, callback) => {
    // !origin মোবাইল অ্যাপ বা Postman রিকোয়েস্ট এলাউ করে
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Policy: Access denied from this origin.'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // কুকি ও অথরাইজেশন হেডার অনুমোদন
  optionsSuccessStatus: 200 // পুরানো ব্রাউজার সামঞ্জস্য
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Secure Cross-Origin Data Delivered!' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "হোয়াইটলিস্ট অ্যারে",
          description: "শুধুমাত্র অনুমোদিত বিশ্বস্ত ফ্রন্টএন্ড ডোমেইনগুলোকে অনুমোদন দেওয়া হয়।"
        },
        {
          step: 2,
          title: "credentials: true",
          description: "ক্রস-অরিজিনে কুকি ও বিয়ারার টোকেন আদান-প্রদানের অনুমতি দেয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Frontend on Vercel & Backend on AWS",
        description: "Vercel-এ থাকা Next.js অ্যাপ (`myapp.vercel.app`) যাতে AWS-এ থাকা Express API (`api.myapp.com`) থেকে নিরাপদে ডেটা ফেচ করতে পারে।"
      }
    ],
    interviewTips: {
      tip: "কখনোই ভুলবেন না: 'CORS এরর ব্রাউজারে ঘটে; Postman বা টার্মিনাল cURL-এ CORS এরর হয় না কারণ তারা ব্রাউজারের Same-Origin Policy এনফোর্স করে না।'",
      deliveryStrategy: "সংজ্ঞা -> ব্রাউজার বনাম সার্ভার এনফোর্সমেন্ট -> Preflight OPTIONS কল -> প্রোডাকশন হোয়াইটলিস্ট কোড।",
      avoidSaying: [
        {
          wrong: "CORS সার্ভার ক্র্যাশ করায় তাই Postman দিয়ে টেস্ট করা উচিত।",
          right: "CORS সার্ভার ক্র্যাশ করায় না; ব্রাউজার সিকিউরিটি পলিসি হিসেবে ফ্রন্টএন্ডকে ডাটা রিড করতে বাধা দেয়।"
        }
      ]
    },
    quickRevision: [
      "CORS = ব্রাউজারের ক্রস-অরিজিন রিকোয়েস্ট সিকিউরিটি প্রোটোকল।",
      "Origin = Protocol + Domain + Port।",
      "ব্রাউজার Preflight `OPTIONS` রিকোয়েস্ট দিয়ে হেডার যাচাই করে।",
      "প্রোডাকশনে `origin: ['https://mydomain.com']` এবং `credentials: true` ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "What is JWT, and how do you use it in Express.js?",
        targetId: "express-jwt-authentication",
        shortHint: "JSON Web Token, Header.Payload.Signature, verifyToken middleware."
      }
    ],
    tags: ["Express.js", "CORS", "Security", "Preflight", "Headers"]
  },
  {
    id: "express-jwt-authentication",
    slug: "express-jwt-authentication",
    question: "What is JWT, and how do you use it in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**JWT (JSON Web Token)** হলো একটি ওপেন স্ট্যান্ডার্ড (RFC 7519) যা দুই পক্ষের মধ্যে নিরাপদ ও কমপ্যাক্ট উপায়ে JSON অবজেক্ট হিসেবে তথ্য আদান-প্রদান করতে ব্যবহৃত হয়। এটি মূলত **Stateless Authentication**-এ ব্যবহৃত হয়। একটি JWT টোকেন ডট (`.`) দ্বারা বিভক্ত **৩টি অংশে** গঠিত: **`Header.Payload.Signature`**।\n\n**Express-এ ব্যবহারের ধাপ**:\n১. লগইনের সময় ইউজারের ক্রিডেনশিয়াল সঠিক হলে `jwt.sign(payload, secretKey, { expiresIn })` দিয়ে টোকেন তৈরি করে ক্লায়েন্টকে পাঠানো হয়।\n২. পরবর্তী প্রতিটি রিকোয়েস্টে ক্লায়েন্ট `Authorization: Bearer <token>` হেডারে টোকেন পাঠায়।\n৩. Express-এর কাস্টম মিডলওয়্যারে `jwt.verify(token, secretKey)` দিয়ে টোকেন ভ্যালিডেট করে `req.user = decoded` সেট করা হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি থিম পার্কের ডিজিটাল রিস্টব্যান্ড (Wristband)-এর মতো:\n- আপনি কাউন্টারে টিকিট কেটে টাকা দিলেন (Login).\n- কাউন্টার আপনাকে ডিজিটাল সাইন করা একটি রিস্টব্যান্ড (JWT Token) হাতে পরিয়ে দিল। রিস্টব্যান্ডে লেখা আছে আপনার নাম ও মেয়াদ (Payload) এবং পার্কের অফিশিয়াল সিল (Signature).\n- এরপর আপনি যত রাইডেই চড়ুন না কেন (Protected Routes), কাউন্টারে বারবার গিয়ে টাকা দিতে হবে না; রাইডের দারোয়ান শুধু আপনার হাতের রিস্টব্যান্ডের সিল স্ক্যান করবে (`jwt.verify`) এবং সাথে সাথে রাইডে উঠতে দেবে!",
    interviewAnswer: "JSON Web Token (JWT) is a compact, URL-safe standard for securely transmitting claims between parties. It enables stateless authentication where the server does not need to maintain active session records in a database or Redis.\n\n**Structure**: `Header.Payload.Signature`\n- **Header**: Token type (`JWT`) and cryptographic algorithm (e.g. `HS256`, `RS256`).\n- **Payload**: Claims/data (e.g. `userId`, `role`, `exp`). Base64Url-encoded (NOT encrypted).\n- **Signature**: Generated by hashing `Base64(Header) + '.' + Base64(Payload)` against a server secret key to prevent tampering.\n\n**Express Implementation**:\n1. Generate token on authentication via `jsonwebtoken.sign(payload, secret, { expiresIn: '1h' })`.\n2. Transmit token to client (returned as JSON or saved in `httpOnly` secure cookie).\n3. Protect routes via an `authenticateToken` middleware that extracts `Bearer <token>` from `req.headers.authorization`, verifies via `jsonwebtoken.verify()`, and attaches the decoded payload to `req.user`.",
    detailedExplanation: {
      whatItIs: "স্টেটলেস অথেনটিকেশন ও অথরাইজেশনের জন্য ক্রিপ্টোগ্রাফিক টোকেন স্ট্যান্ডার্ড।",
      whyItExists: "ডাটাবেসে সেশন স্টোরেজ ও লুকআপের বিশাল মেমরি ওভারহেড ছাড়া ডিস্ট্রিবিউটেড সার্ভার স্কেলিং নিশ্চিত করতে।",
      howItWorks: "সার্ভার সিক্রেট কি দিয়ে সাইন করে পাঠায়; পরবর্তী রিকোয়েস্টে সিগনেচার মেলালেই ভ্যালিডেশন নিশ্চিত হয়।",
      whenToUse: "REST API, মোবাইল অ্যাপ ব্যাকএন্ড, মাইক্রোসার্ভিস এবং সিঙ্গেল পেজ অ্যাপ্লিকেশনে।",
      keyPoints: [
        "Payload is Base64 encoded, NEVER put sensitive data like passwords inside JWT.",
        "Always set an expiration time (expiresIn: '15m' for access token).",
        "Use refresh tokens pattern for long-lived sessions.",
        "Store in httpOnly cookies to mitigate XSS attacks."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-2026';

// ১. লগইন রুট (টোকেন জেনারেশন)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // ডেমো ইউজার চেক (বাস্তবে ডাটাবেস ও bcrypt ব্যবহার করবেন)
  if (email === 'shuvo@example.com' && password === 'Pass1234!') {
    const payload = { userId: 'usr_101', email, role: 'admin' };
    
    // ১ ঘণ্টার জন্য টোকেন সাইন করা
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'Login successful', accessToken: token });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

// ২. JWT ভেরিফিকেশন গার্ড মিডলওয়্যার
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Access token missing' });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ error: 'Token is invalid or expired' });
    }
    req.user = decodedUser; // ডিকোড করা ডাটা রিকোয়েস্টে এটাচ করা
    next();
  });
};

// ৩. সুরক্ষিত রুট
app.get('/api/protected/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Secret Profile Accessed', user: req.user });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "jwt.sign()",
          description: "ইউজার ডাটা ও মেয়াদ দিয়ে টোকেন তৈরি করা হয়।"
        },
        {
          step: 2,
          title: "Bearer Token এক্সট্রাকশন",
          description: "Authorization হেডার স্প্লিট করে টোকেন বের করা হয়।"
        },
        {
          step: 3,
          title: "jwt.verify()",
          description: "সিক্রেট কি দিয়ে সিগনেচার যাচাই করে `req.user`-এ পাস করা হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Microservices Single Sign-On (SSO)",
        description: "Auth Service একবার JWT ইস্যু করলে অর্ডার, পেমেন্ট ও ইনভেন্টরি সার্ভিস কোনো সেন্ট্রাল ডাটাবেস কল ছাড়াই লোকালি টোকেন ভেরিফাই করতে পারে।"
      }
    ],
    interviewTips: {
      tip: "একটি মারাত্মক সিকিউরিটি পয়েন্ট উল্লেখ করুন: 'JWT পেলোড কিন্তু এনক্রিপ্টেড নয়, শুধু Base64 এনকোডেড; তাই পেলোডে কখনোই পাসওয়ার্ড বা ক্রেডিট কার্ডের তথ্য রাখা যাবে না।'",
      deliveryStrategy: "JWT এর ৩টি পার্ট ব্যাখ্যা করুন -> কেন স্টেটলেস (ডাটাবেস কল নেই) -> কোড ডেমো -> সিকিউরিটি টিপস (httpOnly cookie & refresh token)।",
      avoidSaying: [
        {
          wrong: "JWT পেলোড সম্পূর্ণ সিক্রেট এবং কেউ দেখতে পারে না।",
          right: "যে কেউ `jwt.io`-তে পেস্ট করে পেলোড দেখতে পারে; সিগনেচার শুধুমাত্র নিশ্চিত করে যে পেলোডের ডেটা হ্যাকার পরিবর্তন করতে পারেনি।"
        }
      ]
    },
    quickRevision: [
      "JWT = `Header.Payload.Signature` (Stateless Token)।",
      "`jwt.sign(payload, secret, { expiresIn })` দিয়ে টোকেন তৈরি হয়।",
      "`jwt.verify(token, secret)` দিয়ে টোকেন সত্যতা যাচাই করা হয়।",
      "পেলোডে কখনই পাসওয়ার্ড বা সংবেদনশীল ডেটা রাখবেন না।"
    ],
    followUpQuestions: [
      {
        question: "How do you handle global errors in Express.js?",
        targetId: "express-global-error-handling",
        shortHint: "(err, req, res, next) global error handler middleware."
      }
    ],
    tags: ["Express.js", "JWT", "Authentication", "Security", "Tokens"]
  },
  {
    id: "express-global-error-handling",
    slug: "express-global-error-handling",
    question: "How do you handle global errors in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Express.js-এ গ্লোবাল এরর হ্যান্ডেল করতে অ্যাপ্লিকেশনের সব রাউটের একদম শেষে **৪টি প্যারামিটার বিশিষ্ট** একটি স্পেশাল এরর হ্যান্ডলিং মিডলওয়্যার **`(err, req, res, next)`** রেজিস্টার করতে হয়। অ্যাপ্লিকেশনের যেকোনো রুট বা মিডলওয়্যারে কোনো এরর ঘটলে **`next(err)`** কল করা মাত্রই Express মাঝের সব রুট স্কিপ করে সরাসরি এই গ্লোবাল হ্যান্ডলারে চলে আসে। এই হ্যান্ডলারে এরর লগিং, সেন্ট্রাল ফরম্যাটিং এবং প্রোডাকশনে সেনসিটিভ স্ট্যাক ট্রেস গোপন রেখে ক্লায়েন্টকে উপযুক্ত HTTP স্ট্যাটাস কোডসহ সুন্দর JSON এরর রেসপন্স পাঠানো হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি ভবনের সেন্ট্রাল ফায়ার অ্যালার্ম সিস্টেমের মতো:\n- ভবনের যেকোনো ফ্লোরে (যেকোনো রাউটে) ধোঁয়া বা আগুন লাগলে কর্মীরা প্যানিক না করে ফায়ার অ্যালার্মের বোতাম চেপে দেয় (`next(err)`).\n- সাথে সাথে সেন্ট্রাল ফায়ার কন্ট্রোল রুমে (`(err, req, res, next)` গ্লোবাল হ্যান্ডলার) সিগন্যাল চলে যায়।\n- কন্ট্রোল রুম এক জায়গা থেকে পরিস্থিতি নিয়ন্ত্রণ করে এবং ভবনের সবাইকে জানিয়ে দেয় শান্তভাবে কী করতে হবে, ফলে পুরো ভবন ক্র্যাশ বা ধসে পড়া থেকে রক্ষা পায়!",
    interviewAnswer: "Global error handling in Express is implemented by registering a centralized error-handling middleware at the very bottom of the middleware stack, after all application routes. It is explicitly identified by its 4-parameter signature: `(err, req, res, next)`.\n\n**Architecture of a Robust Global Error Handler**:\n1. **Custom Application Error Class (`AppError`)**: Inherits from native `Error` to encapsulate operational properties like `statusCode`, `status` (fail/error), and `isOperational: true`.\n2. **Error Forwarding**: Routes catch errors and forward them using `next(err)`.\n3. **Centralized Formatting**: The global handler logs the error (via Winston or Pino) and returns a standardized JSON response.\n4. **Environment Differentiation**: In development, return full `err.stack` for debugging; in production, return generic user-friendly messages to prevent information leakage.",
    detailedExplanation: {
      whatItIs: "Express অ্যাপ্লিকেশনের সেন্ট্রালাইজড এরর ক্যাচিং ও রেসপন্স আর্কিটেকচার।",
      whyItExists: "প্রতিটি কন্ট্রোলারে ডুপ্লিকেট try/catch রেসপন্স কোড পরিহার করতে এবং সার্ভার ক্র্যাশ রোধ করতে।",
      howItWorks: "যেকোনো জায়গা থেকে `next(err)` দিলে Express সরাসরি ৪-আর্গুমেন্টের হ্যান্ডলারে চলে আসে।",
      whenToUse: "প্রতিটি প্রোডাকশন Express অ্যাপ্লিকেশনে এটি থাকা বাধ্যতামূলক।",
      keyPoints: [
        "Must be placed AFTER all route declarations.",
        "Must have all 4 parameters (err, req, res, next) in function definition.",
        "Distinguish between operational errors (400s) and programming bugs (500s).",
        "Hide error stack traces in production (process.env.NODE_ENV === 'production')."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();
app.use(express.json());

// ১. কাস্টম অপারেশনাল এরর ক্লাস
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // অপারেশনাল এরর ফ্ল্যাগ
    Error.captureStackTrace(this, this.constructor);
  }
}

// ডেমো রুট যেখানে এরর ট্রিগার হতে পারে
app.get('/api/user/:id', (req, res, next) => {
  const user = null; // ইউজার পাওয়া যায়নি
  if (!user) {
    return next(new AppError('User with this ID does not exist', 404));
  }
  res.json(user);
});

// ২. সেন্ট্রালাইজড গ্লোবাল এরর হ্যান্ডলিং মিডলওয়্যার (সবার নিচে থাকবে)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  console.error('[Global Error Logger]:', err.message);

  // ডেভেলপমেন্ট বনাম প্রোডাকশন রেসপন্স
  if (process.env.NODE_ENV === 'production') {
    res.status(statusCode).json({
      status,
      message: err.isOperational ? err.message : 'Something went wrong on the server!'
    });
  } else {
    res.status(statusCode).json({
      status,
      message: err.message,
      stack: err.stack // শুধু লোকাল ডেভে স্ট্যাক দেখাবে
    });
  }
});`,
      explanationSteps: [
        {
          step: 1,
          title: "AppError ক্লাস",
          description: "কাস্টম স্ট্যাটাস কোড ও মেসেজসহ ক্লিন এরর অবজেক্ট তৈরি করে।"
        },
        {
          step: 2,
          title: "সবার নিচে হ্যান্ডলার",
          description: "সব রাউট পার হয়ে শেষ লাইনে ৪-প্যারামিটারের এরর হ্যান্ডলার বসে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Enterprise Sentry / Datadog Integration",
        description: "গ্লোবাল এরর হ্যান্ডলারের ভেতরে `Sentry.captureException(err)` বসিয়ে প্রোডাকশনের সব আনহ্যান্ডেল্ড বাগ রিয়েল-টাইমে ট্র্যাক করা হয়।"
      }
    ],
    interviewTips: {
      tip: "Operational Errors (যেমন ৪০৪ ইউজার নট ফাউন্ড, ৪০০ ভ্যালিডেশন এরর) বনাম Programmer Bugs (যেমন ডাটাবেস ক্র্যাশ, নাল পয়েন্টার) এর পার্থক্য ব্যাখ্যা করুন।",
      deliveryStrategy: "৪-প্যারামিটার সিগনেচার -> AppError প্যাটার্ন -> next(err) ফরোয়ার্ডিং -> ডেভ বনাম প্রোডাকশন স্ট্যাক সিকিউরিটি।",
      avoidSaying: [
        {
          wrong: "গ্লোবাল এরর হ্যান্ডলার ফাইলের একদম শুরুতে বসানো উচিত।",
          right: "গ্লোবাল এরর হ্যান্ডলার অবশ্যই সব রাউটের একদম শেষে বসাতে হবে, অন্যথায় সে কোনো রাউটের এরর ক্যাচ করতে পারবে না।"
        }
      ]
    },
    quickRevision: [
      "গ্লোবাল এরর হ্যান্ডলারে ৪টি প্যারামিটার থাকে: `(err, req, res, next)`।",
      "সব রাউটের একদম শেষে এটি রেজিস্টার করতে হয়।",
      "কন্ট্রোলারে এরর হলে `next(err)` দিয়ে পাঠাতে হয়।",
      "প্রোডাকশনে সিকিউরিটির জন্য `err.stack` লুকানো উচিত।"
    ],
    followUpQuestions: [
      {
        question: "How to handle synchronous errors and asynchronous errors?",
        targetId: "express-sync-vs-async-error-handling",
        shortHint: "Sync throws automatically; Async requires next(err) or express-async-errors."
      }
    ],
    tags: ["Express.js", "Error Handling", "Global Error", "AppError", "Best Practices"]
  },
  {
    id: "express-sync-vs-async-error-handling",
    slug: "express-sync-vs-async-error-handling",
    question: "How to handle synchronous errors and asynchronous errors in Express.js?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "Express.js-এ সিনক্রোনাস ও অ্যাসিনক্রোনাস এরর হ্যান্ডলিংয়ের মেকানিজম ভিন্ন:\n১. **Synchronous Errors**: রাউট হ্যান্ডলারের ভেতরে কোনো সিঙ্ক এরর থ্রো (`throw new Error(...)`) হলে Express স্বয়ংক্রিয়ভাবে তা ক্যাচ করে গ্লোবাল এরর হ্যান্ডলারে পাঠিয়ে দেয়।\n২. **Asynchronous Errors (Express 4)**: `async/await` বা `Promise`-এর ভেতরের এরর Express 4 স্বয়ংক্রিয়ভাবে ক্যাচ করতে পারে না; ফলে `try/catch` ব্লকের ভেতর `catch (err) { next(err); }` কল করতে হয়, নতুবা **`express-async-handler`** র‍্যাপার ব্যবহার করতে হয়।\n*(নোট: আধুনিক Express 5-এ অ্যাসিনক্রোনাস এরর স্বয়ংক্রিয়ভাবে হ্যান্ডেল হয়)।*",
    easyExplanation: "সহজ উপমা:\n১. **Synchronous Error (হাতের সামনে গ্লাস ভাঙা)**: আপনি টেবিলে বসে আছেন, চোখের সামনে গ্লাস ভেঙে শব্দ হলো। এক্সপ্রেস সাথে সাথে দেখে ফেলে নিজেই ক্লিনিং টিমকে ডেকে নিল (`Auto caught`).\n২. **Asynchronous Error (দূরবর্তী গোডাউনে গ্লাস ভাঙা)**: গোডাউনে কাজ করার সময় দূরে গ্লাস ভাঙল। এক্সপ্রেস মূল টেবিলে বসে তা দেখতে পায় না! তাই আপনাকে ওয়াকিটকিতে ফোন করে জানাতে হবে 'গ্লাস ভেঙেছে!' (`catch (err) { next(err); }`), অন্যথায় এক্সপ্রেস ভাববে সব ঠিক আছে এবং ক্লায়েন্ট সারাজীবন লোডিংয়ে আটকে থাকবে!",
    interviewAnswer: "In Express.js (specifically v4, the dominant enterprise version):\n- **Synchronous Errors**: Handled automatically. If an error is thrown synchronously inside route handlers or middlewares (`throw new Error()`), Express catches it under the hood and forwards it to the default or custom 4-parameter error middleware.\n- **Asynchronous Errors**: Express 4 CANNOT automatically catch rejected Promises or errors thrown inside `async` functions / callbacks. If an async error is not caught, it leads to an unhandled promise rejection and the HTTP request hangs indefinitely.\n\n**Solutions for Async Errors**:\n1. **Manual `try/catch`**: Wrapping every async block and calling `next(err)` inside `catch`.\n2. **Async Wrapper Utility (`asyncHandler`)**: A higher-order function wrapping async route handlers that auto-chains `.catch(next)`.\n3. **`express-async-errors` Package**: Patches Express route layer to automatically catch rejected promises.\n*(Note: Express v5 natively catches rejected promises from async route handlers).*",
    detailedExplanation: {
      whatItIs: "Express.js-এ সিনক্রোনাস বনাম অ্যাসিনক্রোনাস এক্সেপশন ম্যানেজমেন্ট।",
      whyItExists: "জাভাস্ক্রিপ্ট ইভেন্ট লুপে অ্যাসিঙ্ক স্ট্যাক ট্রেস হারিয়ে যাওয়া এবং রিকোয়েস্ট হ্যাং হওয়া প্রতিরোধ করতে।",
      howItWorks: "AsyncWrapper প্রমিজ রিটার্ন করে এবং `.catch(next)` দিয়ে গ্লোবাল হ্যান্ডলারে ফরোয়ার্ড করে।",
      whenToUse: "সব ডাটাবেস কোয়েরি, এক্সটারনাল API কল এবং অ্যাসিঙ্ক কন্ট্রোলারে।",
      keyPoints: [
        "Express 4 does NOT auto-catch rejected promises in async routes.",
        "Uncaught async errors in Express 4 cause request hanging or process termination.",
        "Always use an asyncHandler wrapper function to keep controllers clean.",
        "Express 5 introduces native promise rejection catching."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const app = express();

// ১. রিইউজেবল Async Handler Wrapper (বেস্ট প্র্যাকটিস)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// ২. Synchronous Error - Express স্বয়ংক্রিয়ভাবে ক্যাচ করবে
app.get('/sync-error', (req, res) => {
  throw new Error('Sync error automatically caught by Express!');
});

// ৩. Asynchronous Error - asyncHandler দিয়ে ক্লিন কোড
app.get('/async-data', asyncHandler(async (req, res) => {
  // কোনো try/catch ব্লকের দরকার নেই!
  const user = await db.findUserById('invalid-id'); // প্রমিজ রিজেক্ট হলে অটো next(err) হবে
  res.json(user);
}));

// গ্লোবাল এরর হ্যান্ডলার
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "asyncHandler ইউটিলিটি",
          description: "হায়ার-অর্ডার ফাংশন যা প্রমিজ রিজেকশনকে স্বয়ংক্রিয়ভাবে `.catch(next)` করে।"
        },
        {
          step: 2,
          title: "ক্লিন কন্ট্রোলার",
          description: "প্রতিটি ফাংশনে বারবার বয়লারপ্লেট `try/catch` লেখা ছাড়াই এরর সেফ থাকে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Database Query Error Handling",
        description: "MongoDB বা Prisma ডাটাবেস ডাউন থাকলে `asyncHandler`-এর মাধ্যমে সংযোগ বিচ্ছিন্নতার এরর সরাসরি গ্লোবাল হ্যান্ডলারে যায় এবং ইউজারকে 'Database unavailable' মেসেজ দেয়।"
      }
    ],
    interviewTips: {
      tip: "`asyncHandler` প্যাটার্নের কোডটি লিখে দেখালে ইন্টারভিউয়াররা দারুণ সন্তুষ্ট হন। Express 4 বনাম Express 5-এর পার্থক্যের কথাটি যোগ করুন।",
      deliveryStrategy: "Sync এরর কীভাবে অটো ক্যাচ হয় -> Async এররে কেন হ্যাং হয় -> asyncHandler সমাধান -> Express 5 আপডেট।",
      avoidSaying: [
        {
          wrong: "Express 4-এ async ফাংশনের ভেতরে throw করলে এক্সপ্রেস নিজে নিজেই ধরে ফেলে।",
          right: "Express 4-এ async ফাংশনে throw করলে UnhandledPromiseRejection হয় এবং রিকোয়েস্ট আটকে থাকে; এজন্য asyncHandler বা next(err) দরকার।"
        }
      ]
    },
    quickRevision: [
      "Sync Error = Express স্বয়ংক্রিয়ভাবে ক্যাচ করে।",
      "Async Error (Express 4) = স্বয়ংক্রিয়ভাবে ক্যাচ হয় না, `try/catch` বা `asyncHandler` লাগে।",
      "`asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req,res,next)).catch(next)`।",
      "Express 5-এ প্রমিজ রিজেকশন নেটিভভাবে অটো-ক্যাচ হয়।"
    ],
    followUpQuestions: [
      {
        question: "How would you secure an Express API?",
        targetId: "express-securing-api-best-practices",
        shortHint: "Helmet, Rate Limiting, Input Validation, Sanitization, CORS, HTTPS."
      }
    ],
    tags: ["Express.js", "Async Errors", "asyncHandler", "Error Handling", "Promises"]
  },
  {
    id: "express-securing-api-best-practices",
    slug: "express-securing-api-best-practices",
    question: "How would you secure an Express API?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "একটি প্রোডাকশন Express API সুরক্ষিত করার জন্য একটি **মাল্টি-লেয়ার ডিফেন্স (Defense in Depth)** কৌশল বাস্তবায়ন করতে হয়:\n১. **HTTP Security Headers**: `helmet()` ব্যবহার করে XSS, Clickjacking এবং MIME-sniffing বন্ধ করা।\n২. **Rate Limiting & Throttling**: `express-rate-limit` দিয়ে ব্রুট-ফোর্স ও DDoS আক্রমণ ঠেকানো।\n৩. **Strict CORS Policy**: নির্দিষ্ট অনুমোদিত ফ্রন্টএন্ড ডোমেইন ছাড়া বাকি সব অরিজিন ব্লক করা।\n৪. **Input Validation & Sanitization**: `Zod` বা `Joi` দিয়ে ইনপুট স্কিমা ভ্যালিডেট করা এবং NoSQL/SQL ইনজেকশন স্যানিটাইজ করা (`express-mongo-sanitize`)।\n৫. **Authentication & Authorization**: `bcrypt` সল্টিং পাসওয়ার্ড হ্যাশিং, স্বল্পমেয়াদী JWT এবং `httpOnly` কুকি ব্যবহার।\n৬. **Data Payload Limits**: `express.json({ limit: '10kb' })` দিয়ে বড় পেলোড আক্রমণ রোধ করা।\n৭. **Hide Stack Traces & Fingerprints**: `app.disable('x-powered-by')` দেওয়া এবং এরর স্ট্যাক ট্রেস গোপন রাখা।",
    easyExplanation: "সহজ উপমা:\nএকটি দুর্ভেদ্য ব্যাংকের নিরাপত্তা ব্যবস্থার মতো:\n১. **বাইরের প্রাচীর (Helmet & CORS)**: অনাকাঙ্ক্ষিত লোক ও ক্ষতিকর ওয়েবসাইটকে গেটেই আটকে দেওয়া।\n২. **মেটাল ডিটেক্টর (Input Validation / Zod)**: ভেতরে ঢোকার সময় প্রতিটি চিঠি ও ব্যাগ স্ক্যান করে দেখা কোনো অস্ত্র (SQL Injection/XSS) আছে কি না।\n৩. **স্পেশাল আইডি কার্ড (JWT & Bcrypt)**: আসল কর্মী কি না তা বায়োমেট্রিক ও টোকেন দিয়ে যাচাই করা।\n৪. **ভিড় নিয়ন্ত্রণ (Rate Limiting)**: প্রতি মিনিটে লাইনে কয়জন দাঁড়াতে পারবে তা বেঁধে দেওয়া যাতে হুড়োহুড়ি (DDoS) না হয়!",
    interviewAnswer: "Securing an Express API requires implementing Defense in Depth across multiple layers:\n1. **HTTP Headers & Footprint Masking**: Use **`helmet()`** to enforce CSP, HSTS, and frameguards. Disable `app.disable('x-powered-by')` to prevent technology fingerprinting.\n2. **Traffic Protection**: Implement **`express-rate-limit`** and `express-slow-down` on public/authentication endpoints to prevent brute-force attacks and volumetric DDoS.\n3. **CORS Hardening**: Restrict `origin` to an explicit whitelist rather than wildcard `*`.\n4. **Input Validation & Sanitization**: Validate all `req.body`, `req.params`, and `req.query` using schema validation libraries like **Zod** or `express-validator`. Sanitize against NoSQL injection via `express-mongo-sanitize` and XSS via `xss-clean`.\n5. **Secure Authentication**: Hash passwords using **`bcrypt`** (work factor 10-12), enforce short-lived JWTs, and transmit tokens over **`httpOnly; Secure; SameSite=Strict`** cookies over HTTPS.\n6. **Payload Size Guardrails**: Restrict body size limits: `app.use(express.json({ limit: '10kb' }))` to prevent memory flooding.\n7. **Error Masking**: Ensure operational errors do not leak stack traces or internal DB schemas to clients.",
    detailedExplanation: {
      whatItIs: "প্রোডাকশন-গ্রেড ব্যাকএন্ড সিকিউরিটি চেকলিস্ট ও ইমপ্লিমেন্টেশন।",
      whyItExists: "OWASP Top 10 সাইবার আক্রমণ (XSS, Injection, Broken Auth, DDoS) থেকে ব্যাকএন্ড রক্ষা করতে।",
      howItWorks: "রিকোয়েস্ট প্রসেসিংয়ের প্রতিটি স্তরে আলাদা সিকিউরিটি গার্ড মিডলওয়্যার বসানো হয়।",
      whenToUse: "যেকোনো লাইভ পাবলিক API বা এন্টারপ্রাইজ ব্যাকএন্ড সার্ভারে।",
      keyPoints: [
        "Apply rate limiters strictly on /api/auth/login endpoints.",
        "Always validate input at the edge before passing to database ORMs.",
        "Never run Node.js as root user in Docker containers.",
        "Use npm audit in CI/CD pipelines to catch vulnerable dependencies."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// ১. এক্সপ্রেস ফিঙ্গারপ্রিন্ট লুকানো
app.disable('x-powered-by');

// ২. সিকিউরিটি হেডার
app.use(helmet());

// ৩. বডি সাইজ লিমিট (DoS অ্যাটাক প্রতিরোধ)
app.use(express.json({ limit: '10kb' }));

// ৪. রেট লিমিটিং (১৫ মিনিটে প্রতি আইপি থেকে সর্বোচ্চ ১০০ রিকোয়েস্ট)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', globalLimiter);

// ৫. স্ট্রিক্ট CORS
app.use(cors({
  origin: 'https://mytrusteddomain.com',
  credentials: true
}));

app.get('/api/health', (req, res) => {
  res.json({ status: 'Secure & Operational' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "x-powered-by বন্ধ",
          description: "হ্যাকারকে বুঝতে দেয় না যে ব্যাকএন্ডে Express চলছে।"
        },
        {
          step: 2,
          title: "রেট লিমিটার",
          description: "অটোমেটেড বট ও ব্রুট-ফোর্স ট্রাফিক ব্লক করে।"
        },
        {
          step: 3,
          title: "১০kb বডি লিমিট",
          description: "বিশাল পেলোড পাঠিয়ে মেমরি ক্র্যাশ করা থামায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "FinTech Banking Portal Security",
        description: "লগইন এপিআই-তে প্রতি মিনিটে ৫ বারের বেশি ভুল পাসওয়ার্ড দিলে অ্যাকাউন্ট সাময়িক লক করা হয় এবং Helmet ও Zod দিয়ে প্রতিটি রিকোয়েস্ট কঠোরভাবে যাচাই করা হয়।"
      }
    ],
    interviewTips: {
      tip: "**Defense in Depth** টার্মটি উল্লেখ করুন এবং OWASP Top 10 সিকিউরিটি ফ্রেমওয়ার্কের সাথে আপনার পয়েন্টগুলো লিংক করুন।",
      deliveryStrategy: "৭টি প্রধান সিকিউরিটি লেয়ার ক্রমানুসারে বলুন -> কোড ডেমো -> ইনপুট ভ্যালিডেশনের গুরুত্ব তুলে ধরুন।",
      avoidSaying: [
        {
          wrong: "শুধু HTTPS চালু করলেই Express API সম্পূর্ণ নিরাপদ হয়ে যায়।",
          right: "HTTPS শুধু নেটওয়ার্ক ট্রানজিট এনক্রিপ্ট করে; অ্যাপ লেভেলে Helmet, Rate Limiting, Input Validation ও Auth সিকিউরিটি থাকা আবশ্যক।"
        }
      ]
    },
    quickRevision: [
      "`helmet()` দিয়ে ১৫+ সিকিউরিটি রেসপন্স হেডার সেট করুন।",
      "`express-rate-limit` দিয়ে ব্রুট-ফোর্স ও স্প্যামিং রোধ করুন।",
      "`express.json({ limit: '10kb' })` দিয়ে পেলোড লিমিট করুন।",
      "`app.disable('x-powered-by')` দিয়ে সার্ভার পরিচয় লুকান।",
      "ইনপুট ভ্যালিডেশনে `Zod` বা `Joi` ব্যবহার করুন।"
    ],
    followUpQuestions: [
      {
        question: "How do rate limiting and API throttling work?",
        targetId: "express-rate-limiting-api-throttling",
        shortHint: "Token bucket, sliding window, HTTP 429 Too Many Requests."
      }
    ],
    tags: ["Express.js", "Security", "Helmet", "Rate Limiting", "OWASP", "Best Practices"]
  },
  {
    id: "express-rate-limiting-api-throttling",
    slug: "express-rate-limiting-api-throttling",
    question: "How do rate limiting and API throttling work?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Rate Limiting** হলো এমন একটি ডিফেন্স মেকানিজম যা একটি নির্দিষ্ট সময়সীমার মধ্যে (যেমন প্রতি ১৫ মিনিটে) একক ক্লায়েন্ট বা আইপি অ্যাড্রেস থেকে সর্বোচ্চ কতটি রিকোয়েস্ট গ্রহণ করা হবে তা সীমাবদ্ধ করে; সীমা অতিক্রম করলে সার্ভার তাৎক্ষণিক **`429 Too Many Requests`** স্ট্যাটাস কোড রিটার্ন করে। অপরদিকে, **API Throttling** অতিরিক্ত রিকোয়েস্ট সাথে সাথে রিজেক্ট না করে বরং রেসপন্সের গতি ধীর (Slow down/Delay) করে দেয় বা একটি কিউতে জমা রেখে ধীরে ধীরে প্রসেস করে। উভয় পদ্ধতিই সার্ভার রিসোর্স রক্ষা, ব্রুট-ফোর্স আক্রমণ প্রতিরোধ এবং ফেয়ার ইউসেজ নিশ্চিত করতে ব্যবহৃত হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যস্ত মিষ্টির দোকানের কথা ভাবুন:\n- **Rate Limiting**: দোকানের নিয়ম হলো 'একজন ক্রেতা দিনে সর্বোচ্চ ৫টি মিষ্টি কিনতে পারবেন'। ৬ নম্বর মিষ্টি চাইতে গেলে ক্যাশিয়ার মুখের ওপর না করে দেবে (`429 Too Many Requests`).\n- **API Throttling**: একজন ক্রেতা যদি ঘনঘন মিষ্টি চায়, ক্যাশিয়ার তাকে সরাসরি তাড়িয়ে না দিয়ে বলবে 'একটু দাঁড়ান, ৫ সেকেন্ড পর পর একটা করে মিষ্টি দেব'। অর্থাৎ গতি ধীর করে দেওয়া যাতে পেছনের মানুষও সুযোগ পায়!",
    interviewAnswer: "Rate Limiting and API Throttling are traffic-shaping controls used to ensure system stability, enforce API monetization tiers, and defend against DoS and credential stuffing attacks:\n\n1. **Rate Limiting**: Hard-caps the number of requests an IP or user key can dispatch within a fixed or sliding time window (e.g. 100 requests per 15 minutes). When the quota is exhausted, incoming requests are immediately rejected with HTTP status **`429 (Too Many Requests)`** along with headers like `RateLimit-Limit`, `RateLimit-Remaining`, and `Retry-After`.\n2. **API Throttling (Speed Limiting)**: Soft-caps traffic by progressively introducing synthetic latency (e.g. adding 500ms delay per excess request via `express-slow-down`) or buffering bursts into queues instead of outright dropping connections.\n\n**Common Algorithms**: Token Bucket, Leaky Bucket, Fixed Window Counter, and Sliding Window Log (often implemented using **Redis** in distributed clusters).",
    detailedExplanation: {
      whatItIs: "API ট্রাফিক রেগুলেশন ও রিসোর্স প্রোটেকশন মেকানিজম।",
      whyItExists: "সার্ভার ক্র্যাশ, API অ্যাবিউজ এবং ব্রুট-ফোর্স পাসওয়ার্ড ক্র্যাকিং ঠেকাতে।",
      howItWorks: "আইপি বা ইউজার আইডি কি হিসেবে মেমরি/রেডিসে কাউন্টার বাফারে টাইমস্ট্যাম্প ট্র্যাক করে।",
      whenToUse: "পাবলিক API গেটওয়ে, লগইন/রেজিস্ট্রেশন এন্ডপয়েন্ট এবং পেমেন্ট রিকোয়েস্টে।",
      keyPoints: [
        "Returns HTTP 429 Too Many Requests upon limit exhaustion.",
        "In production multi-server clusters, use Redis store (rate-limit-redis).",
        "Sliding Window Counter algorithm prevents burst attacks at window boundaries.",
        "Set strict limits on /login (e.g. 5 requests / 15 mins) and generous on /products (e.g. 1000 / hour)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const app = express();
app.use(express.json());

// ১. লগইন এন্ডপয়েন্টের জন্য কঠোর রেট লিমিটার
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ১৫ মিনিটের উইন্ডো
  max: 5, // সর্বোচ্চ ৫টি ব্যর্থ চেষ্টার সুযোগ
  message: {
    status: 429,
    error: 'Too many login attempts from this IP. Please try again after 15 minutes.'
  },
  standardHeaders: true, // Return standard RateLimit headers
  legacyHeaders: false,
});

// ২. API স্পিড থ্রটলার (অতিরিক্ত রিকোয়েস্টে গতি কমিয়ে দেওয়া)
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 50, // ৫০টি রিকোয়েস্ট পর্যন্ত স্বাভাবিক গতি
  delayMs: (hits) => (hits - 50) * 100 // ৫০-এর পর প্রতি রিকোয়েস্টে ১০০ms অতিরিক্ত দেরি
});

// সুরক্ষিত লগইন রাউট
app.post('/api/auth/login', loginLimiter, (req, res) => {
  res.json({ message: 'Login endpoint processed' });
});

// থ্রটল্ড পাবলিক API
app.get('/api/public-search', speedLimiter, (req, res) => {
  res.json({ results: ['Item 1', 'Item 2'] });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "loginLimiter",
          description: "লগইন পাথে ৫টির বেশি চেষ্টা হলে 429 স্ট্যাটাস পাঠায়।"
        },
        {
          step: 2,
          title: "speedLimiter",
          description: "৫০টির বেশি রিকোয়েস্ট হলে ল্যাগ দিয়ে সার্ভার লোড কমায়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "GitHub & Twitter API Rate Limits",
        description: "GitHub API ফ্রি ইউজারদের প্রতি ঘণ্টায় ৬০টি এবং অথেনটিকেটেড ইউজারদের ৫০০০টি রিকোয়েস্টের অনুমতি দেয় এবং রেসপন্স হেডারে `x-ratelimit-remaining` পাঠায়।"
      }
    ],
    interviewTips: {
      tip: "মাল্টি-সার্ভার ক্লাউড এনভায়রনমেন্টে রেট লিমিটিং মেমরিতে রাখলে কাজ করবে না; এজন্য **Redis Store (`rate-limit-redis`)** ব্যবহার করতে হয় তা উল্লেখ করুন।",
      deliveryStrategy: "Rate Limiting vs Throttling সংজ্ঞা -> HTTP 429 ও রেসপন্স হেডার্স -> অ্যালগরিদম (Token Bucket / Sliding Window) -> Redis স্টোরেজ।",
      avoidSaying: [
        {
          wrong: "সব এপিআই রাউটের জন্য একই রেট লিমিট রাখা উচিত।",
          right: "লগইন পাথে কড়া লিমিট (যেমন ৫টি/১৫ মিনিট) এবং সাধারণ রিড এপিআই-তে উদার লিমিট (যেমন ১০০০টি/ঘণ্টা) রাখা বেস্ট প্র্যাকটিস।"
        }
      ]
    },
    quickRevision: [
      "Rate Limiting = সীমা শেষ হলে সাথে সাথে `429 Too Many Requests` রিজেকশন।",
      "Throttling = অতিরিক্ত রিকোয়েস্টে কৃত্রিম ল্যাগ দিয়ে গতি ধীর করা।",
      "`express-rate-limit` এবং `express-slow-down` দিয়ে বাস্তবায়ন করা হয়।",
      "মাল্টিপল ক্লাস্টার সার্ভারে সিঙ্ক রাখতে Redis Store ব্যবহার করা আবশ্যক।"
    ],
    followUpQuestions: [
      {
        question: "What is salting in password hashing?",
        targetId: "express-salting-password-hashing",
        shortHint: "Rainbow table attacks, bcrypt salt rounds, unique salt per password."
      }
    ],
    tags: ["Express.js", "Rate Limiting", "Throttling", "Security", "DDoS", "Redis"]
  },
  {
    id: "express-salting-password-hashing",
    slug: "express-salting-password-hashing",
    question: "What is salting in password hashing?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Salting** হলো ক্রিপ্টোগ্রাফিক পাসওয়ার্ড হ্যাশিংয়ের এমন একটি সিকিউরিটি টেকনিক যেখানে ইউজারের পাসওয়ার্ড হ্যাশ করার ঠিক পূর্বে তার সাথে একটি ইউনিক, ক্রিপ্টোগ্রাফিক্যালি শক্তিশালী র‍্যান্ডম স্ট্রিং (**Salt**) যুক্ত করা হয়। এর ফলে দুটি ইউজার যদি হুবহু একই পাসওয়ার্ড (যেমন `Password123`) ব্যবহার করে, তবুও তাদের ডাটাবেসে সেভ হওয়া হ্যাশ সম্পূর্ণ ভিন্ন হয়। Salting মূলত হ্যাকারদের প্রি-কম্পিউটেড **Rainbow Table Attacks** এবং **Dictionary Attacks** সম্পূর্ণ অকার্যকর করে দেয়। Node.js-এ **`bcrypt`** লাইব্রেরি স্বয়ংক্রিয়ভাবে সল্ট তৈরি ও ম্যানেজ করে।",
    easyExplanation: "সহজ উপমা:\nএকটি গোপন রান্নার রেসিপির মতো:\n- ধরুন ক্লাসের ১০ জন ছাত্রের বাড়ি থেকে একই ডিম ভাজি আনতে বলা হলো। সবাই একই ডিম ভাজি আনলে চোর সহজেই বুঝতে পারবে কোনটি ডিম ভাজি।\n- **Salting**: শিক্ষক প্রতিটি ছাত্রের ডিম ভাজিতে গোপনে একেকটি ভিন্ন ভিন্ন অদ্ভুত মসলা (Salt) মিশিয়ে দিলেন। এখন প্রতিটি ডিমের স্বাদ ও ঘ্রাণ সম্পূর্ণ আলাদা হয়ে গেল! চোর আগের কোনো স্বাদের তালিকা (Rainbow Table) মিলিয়ে কখনোই আসল ডিম চিনতে পারবে না!",
    interviewAnswer: "Salting in password security refers to appending a cryptographically random, unique string of bytes (the 'salt') to a plaintext password before passing it through a cryptographic one-way hashing function (like Bcrypt or Argon2).\n\n**Key Objectives**:\n1. **Defeat Rainbow Table Attacks**: Rainbow tables are precomputed lookup tables of billions of common password hashes. Salting renders these tables completely useless because the attacker must recompute tables for each unique salt.\n2. **Prevent Identical Hash Collisions**: If two users have the same password (`qwerty`), their resulting hashes will be completely distinct.\n\n**Bcrypt Work Factor (Salt Rounds)**:\nBcrypt embeds the algorithm version, cost factor (e.g. 10 or 12 rounds representing $2^{10}$ iterations), the salt, and the hash into a single modular string (e.g. `$2b$10$...`).",
    detailedExplanation: {
      whatItIs: "পাসওয়ার্ড হ্যাশের সাথে ইউনিক র‍্যান্ডম স্ট্রিং যুক্ত করার নিরাপত্তা পদ্ধতি।",
      whyItExists: "ডাটাবেস হ্যাক হলেও প্রি-কম্পিউটেড রেইনবো টেবিল দিয়ে পাসওয়ার্ড ক্র্যাক হওয়া ঠেকাতে।",
      howItWorks: "`Hash = HashingFunction(Password + UniqueRandomSalt)`।",
      whenToUse: "সব ইউজার রেজিস্ট্রেশন ও পাসওয়ার্ড স্টোরেজ সিস্টেমে।",
      keyPoints: [
        "Never use plain MD5 or SHA-256 for password storage (too fast, susceptible to GPU cracking).",
        "Bcrypt generates and embeds the salt directly inside the resulting hash string.",
        "Salt rounds (Cost factor 10-12) introduces controlled computational delay.",
        "bcrypt.compare(password, hash) extracts the salt from the hash to verify."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const bcrypt = require('bcrypt');

async function demonstratePasswordSalting() {
  const plainPassword = 'SuperSecretPassword2026!';
  const saltRounds = 10; // 2^10 = 1024 হ্যাশিং ইটারেশন

  console.log('Plaintext Password:', plainPassword);

  // একই পাসওয়ার্ডকে ২ বার আলাদা সল্ট দিয়ে হ্যাশ করা
  const hash1 = await bcrypt.hash(plainPassword, saltRounds);
  const hash2 = await bcrypt.hash(plainPassword, saltRounds);

  console.log('\\nHash 1 (User A):', hash1);
  console.log('Hash 2 (User B):', hash2);
  console.log('একই পাসওয়ার্ড হওয়া সত্ত্বেও হ্যাশ দুটি সম্পূর্ণ আলাদা কি?', hash1 !== hash2);

  // লগইন ভেরিফিকেশন (Bcrypt নিজে থেকেই হ্যাশ থেকে সল্ট বের করে চেক করে)
  const isMatch = await bcrypt.compare(plainPassword, hash1);
  console.log('\\nLogin Verification Result:', isMatch ? 'Password Verified ✅' : 'Invalid ❌');
}

demonstratePasswordSalting();`,
      explanationSteps: [
        {
          step: 1,
          title: "bcrypt.hash()",
          description: "স্বয়ংক্রিয়ভাবে ইউনিক সল্ট তৈরি করে পাসওয়ার্ডের সাথে মিশিয়ে হ্যাশ করে।"
        },
        {
          step: 2,
          title: "ইউনিক হ্যাশ জেনারেশন",
          description: "একই পাসওয়ার্ড হওয়া সত্ত্বেও দুটি ভিন্ন হ্যাশ তৈরি হয়।"
        },
        {
          step: 3,
          title: "bcrypt.compare()",
          description: "হ্যাশ স্ট্রিংয়ের ভেতর থেকে সল্ট এক্সট্র্যাক্ট করে পাসওয়ার্ড মিলিয়ে দেখে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Enterprise User Database Protection",
        description: "ডাটাবেস লিক হলেও হ্যাকাররা সল্টেড হ্যাশের কারণে কোটি কোটি ইউজারের পাসওয়ার্ড ব্রুট-ফোর্স বা রেইনবো টেবিল দিয়ে ডিকোড করতে পারে না।"
      }
    ],
    interviewTips: {
      tip: "কেন MD5 বা SHA-256 পাসওয়ার্ডে ব্যবহার করা নিষিদ্ধ (কারণ এগুলো খুব ফাস্ট, জিপিইউ দিয়ে সেকেন্ডে শত কোটি ট্রাই করা যায়) এবং কেন `bcrypt` সেরা (স্লো ও অ্যাডাপ্টিভ কস্ট ফ্যাক্টর) তা তুলে ধরুন।",
      deliveryStrategy: "সল্টিং কী -> রেইনবো টেবিল অ্যাটাক ডিফেন্স -> Bcrypt এর সল্ট রাউন্ডস (10-12) -> কোড ডেমো।",
      avoidSaying: [
        {
          wrong: "সল্ট আলাদা সিক্রেট টেবিলে লুকিয়ে রাখতে হয়।",
          right: "সল্ট কোনো গোপন পাসওয়ার্ড নয়; সল্ট হ্যাশ স্ট্রিংয়ের ভেতরেই সেভ থাকে, এর মূল কাজ হলো হ্যাশকে ইউনিক করা যাতে রেইনবো টেবিল অকেজো হয়।"
        }
      ]
    },
    quickRevision: [
      "Salting = হ্যাশ করার আগে ইউনিক র‍্যান্ডম স্ট্রিং যুক্ত করা।",
      "একই পাসওয়ার্ডের ভিন্ন ভিন্ন হ্যাশ তৈরি করে।",
      "Rainbow Table ও Dictionary Attack সম্পূর্ণ ধ্বংস করে।",
      "`bcrypt.hash(password, 10)` দিয়ে স্বয়ংক্রিয়ভাবে ১০ রাউন্ড সল্ট যুক্ত হয়।"
    ],
    followUpQuestions: [
      {
        question: "What are the differences between stateless and stateful authentication?",
        targetId: "express-stateless-vs-stateful-auth",
        shortHint: "Session-based in DB/Redis vs Token-based JWT in client."
      }
    ],
    tags: ["Express.js", "Salting", "Bcrypt", "Security", "Hashing", "Passwords"]
  },
  {
    id: "express-stateless-vs-stateful-auth",
    slug: "express-stateless-vs-stateful-auth",
    question: "What are the differences between stateless and stateful authentication?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Stateful Authentication (Session-based)** পদ্ধতিতে ইউজার লগইন করার পর সার্ভার তার মেমরিতে বা সেন্ট্রাল ডাটাবেস/রেডিসে একটি **Session Record** সংরক্ষণ করে এবং ক্লায়েন্ট ব্রাউজারে একটি কুকির মাধ্যমে শুধুমাত্র একটি অস্বচ্ছ **Session ID** পাঠায়। প্রতি রিকোয়েস্টে সার্ভার ডাটাবেস থেকে ওই সেশন আইডি খুঁজে ইউজারকে ভেরিফাই করে।\n\nঅপরদিকে, **Stateless Authentication (Token/JWT-based)** পদ্ধতিতে সার্ভার কোনো সেশন রেকর্ড মেমরি বা ডাটাবেসে রাখে না। ইউজার লগইন করলে ক্রিপ্টোগ্রাফিক্যালি সাইন করা একটি **JWT Token** ক্লায়েন্টকে দিয়ে দেওয়া হয়। ক্লায়েন্ট প্রতি রিকোয়েস্টে টোকেন পাঠায় এবং সার্ভার কোনো ডাটাবেস লুকআপ ছাড়াই শুধুমাত্র টোকেনের সিগনেচার যাচাই করে ইউজারকে ভেরিফাই করে।",
    easyExplanation: "সহজ উপমা:\n\n১. **Stateful (ক্লাবের মেম্বারশিপ খাতা)**:\nআপনি ক্লাবে ঢুকলে দারোয়ান তার বড় রেজিস্ট্রি খাতায় (Server Redis) আপনার নাম লিখে একটি টোকেন নম্বর (Session ID: #55) দিল। আপনি যখনই কফি কিনতে যাবেন, বারটেন্ডার আবার সেই বড় খাতা উল্টে দেখবে ৫৫ নম্বরে আপনার নাম আছে কি না। খাতা হারিয়ে গেলে কেউ সেবা পাবে না!\n\n২. **Stateless (সরকারি ড্রাইভিং লাইসেন্স - JWT)**:\nসরকার আপনাকে একটি সিলমোহরযুক্ত ড্রাইভিং লাইসেন্স কার্ড দিল যাতে আপনার ছবি, নাম ও মেয়াদের তারিখ লেখা আছে। ট্রাফিক পুলিশ কোনো সেন্ট্রাল হেডকোয়ার্টারে ফোন না করে শুধু কার্ডের সরকারি হলোগ্রাম সিল (Signature) দেখেই আপনাকে গাড়ি চালানোর অনুমতি দিয়ে দিল!",
    interviewAnswer: "The architectural divergence lies in **where the authentication state lives**:\n\n1. **Stateful Authentication (Session-Based / `express-session`)**:\n   - **Mechanism**: The server generates a unique session ID, stores session data in server memory/database (e.g. Redis), and issues an `httpOnly` session cookie (`connect.sid`).\n   - **Pros**: Instant revocation (logging out a user or banning an account instantly deletes the session in Redis).\n   - **Cons**: Scalability bottlenecks; horizontal server scaling requires sticky sessions or shared Redis infrastructure.\n\n2. **Stateless Authentication (Token-Based / JWT)**:\n   - **Mechanism**: The server cryptographically signs user claims into a self-contained JWT. The client stores the token and transmits it via `Authorization: Bearer` or an `httpOnly` cookie.\n   - **Pros**: Superb horizontal scalability; zero server-side memory or database lookup required on requests.\n   - **Cons**: Hard to revoke before expiration (mitigated by short TTLs + Refresh Token rotation or token blacklists).",
    detailedExplanation: {
      whatItIs: "ওয়েব ব্যাকএন্ডের দুটি প্রধান ইউজার অথেন্টিকেশন আর্কিটেকচার।",
      whyItExists: "সেশন রিভোকেশন কন্ট্রোল বনাম অনুভূমিক (Horizontal) ক্লাউড স্কেলিংয়ের ট্রেডঅফ নির্ধারণ করতে।",
      howItWorks: "Stateful সেশন রেডিসে স্টোর করে; Stateless টোকেনের ক্রিপ্টো সিগনেচার চেক করে।",
      whenToUse: "Stateful: ঐতিহ্যবাহী এন্টারপ্রাইজ ও ব্যাংকিং অ্যাপে; Stateless: মোবাইল অ্যাপ, মাইক্রোসার্ভিস ও হাই-স্কেল REST APIs।",
      keyPoints: [
        "Stateful: Server stores session; easy immediate revocation.",
        "Stateless: Server stores nothing; high horizontal scalability.",
        "JWT requires secret key validation on every request.",
        "Combine short-lived JWT (15 min) + DB-tracked Refresh Token for best of both worlds."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Stateful মেমরি মডেল (express-session + Redis)
// req.session.userId = user.id; // সার্ভার রেডিসে স্টোর করে সেশন কুকি পাঠায়

// ২. Stateless মেমরি মডেল (JWT)
const jwt = require('jsonwebtoken');

// লগইন রেসপন্স (সার্ভার কোনো ডাটা সেভ করে রাখল না)
function loginStateless(user) {
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  return { token };
}

// ভেরিফিকেশন (ডাটাবেসে কোনো কোয়েরি না করেই ইনস্ট্যান্ট সত্যতা নিশ্চিত)
function verifyStateless(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}`,
      explanationSteps: [
        {
          step: 1,
          title: "Stateful ডাটাবেস স্টোরেজ",
          description: "সার্ভারে প্রতিটি সেশন মেমরি রেকর্ড ধরে রাখতে হয়।"
        },
        {
          step: 2,
          title: "Stateless জিরো স্টোরেজ",
          description: "সার্ভারে কিছুই জমা থাকে না, কেবল সিগনেচার দিয়ে ভেরিফাই হয়।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Microservices vs Banking Apps",
        description: "ব্যাংকিং অ্যাপে তাৎক্ষণিক ফ্রড ডিটেকশনে সেশন ক্যানসেল করতে Stateful Session ব্যবহৃত হয়; কিন্তু Netflix বা Spotify-এর মতো গ্লোবাল সার্ভিসে Stateless JWT ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "ট্রেডঅফটি পরিষ্কার করে বলুন: 'Stateful-এ সেশন তাৎক্ষণিক ডিলিট করা সহজ কিন্তু স্কেলিং কঠিন; Stateless-এ স্কেলিং সুপার ফাস্ট কিন্তু টোকেন এক্সপায়ার হওয়ার আগে ইনস্ট্যান্ট ব্যান করা জটিল (Token Blacklisting দরকার হয়)।'",
      deliveryStrategy: "সংজ্ঞা -> মেম্বারশিপ খাতা বনাম ড্রাইভিং লাইসেন্স উপমা -> সুবিধা ও অসুবিধা -> হাইব্রিড সলিউশন (Access + Refresh Token)।",
      avoidSaying: [
        {
          wrong: "JWT সবসময় সেশনের চেয়ে ভালো এবং সেশন এখন মৃত প্রযুক্তি।",
          right: "উভয়ের আলাদা গুরুত্ব আছে; হাই-সিকিউরিটি ব্যাংকিং সিস্টেমে এখনও সেশন সেরা, আর হাই-স্কেল মাইক্রোসার্ভিসে JWT সেরা।"
        }
      ]
    },
    quickRevision: [
      "Stateful = সার্ভার মেমরি/রেডিসে সেশন সেভ রাখে (সহজে ব্যান/লগআউট করা যায়)।",
      "Stateless = সার্ভার কিছুই সেভ রাখে না, JWT সিগনেচার চেক করে (সুপার ফাস্ট স্কেলিং)।",
      "Stateful স্কেল করতে Redis প্রয়োজন।",
      "Stateless-এ সিকিউরিটির জন্য স্বল্পমেয়াদী Access Token + Refresh Token সেরা।"
    ],
    followUpQuestions: [
      {
        question: "Explain CSRF, XSS, and SQL / NoSQL injection attacks.",
        targetId: "express-csrf-xss-sql-nosql-injection",
        shortHint: "Common web vulnerabilities and their Express mitigations."
      }
    ],
    tags: ["Express.js", "Authentication", "Stateless", "Stateful", "JWT", "Sessions"]
  },
  {
    id: "express-csrf-xss-sql-nosql-injection",
    slug: "express-csrf-xss-sql-nosql-injection",
    question: "Explain CSRF, XSS, and SQL / NoSQL injection attacks.",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "ওয়েব অ্যাপ্লিকেশনের প্রধান ৩টি মারাত্মক সাইবার আক্রমণ ও তাদের প্রতিরোধ:\n১. **XSS (Cross-Site Scripting)**: হ্যাকার ওয়েবসাইটে ক্ষতিকর জাভাস্ক্রিপ্ট কোড ইনজেক্ট করে ভিকটিমের সেশন টোকেন বা কুকি চুরি করে। **প্রতিরোধ**: ইনপুট স্যানিটাইজেশন, HTML এস্কেপিং, `httpOnly` কুকি এবং `helmet` CSP হেডার।\n২. **CSRF (Cross-Site Request Forgery)**: ব্রাউজারের অটোমেটিক কুকি পাঠানোর সুযোগ নিয়ে হ্যাকার ভিকটিমকে না জানিয়ে তার ব্যাংকিং বা সোশ্যাল একাউন্টে ক্ষতিকর অ্যাকশন (যেমন টাকা ট্রান্সফার) এক্সিকিউট করায়। **প্রতিরোধ**: `SameSite=Strict/Lax` কুকি এবং অ্যান্টি-CSRF টোকেন (`csurf`)।\n৩. **SQL / NoSQL Injection**: অনিরাপদ ইউজার ইনপুটের মাধ্যমে ডাটাবেস কোয়েরির লজিক ম্যানিপুলেট করে অবৈধ ডেটা রিড বা মুছে ফেলা (যেমন NoSQL-এ `{\\'$gt\\': \\'\\'}` পাঠানো)। **প্রতিরোধ**: Parameterized Queries, ORM/ODM (Prisma, Mongoose) এবং `express-mongo-sanitize`।",
    easyExplanation: "সহজ উপমা:\n\n১. **XSS (বিষাক্ত চিঠি)**: হ্যাকার আপনার ফেসবুক কমেন্ট বক্সে এমন এক স্ক্রিপ্ট লিখে রেখে দিল যা যে পড়বে তারই পাসওয়ার্ড চুরি হয়ে হ্যাকারের কাছে চলে যাবে!\n\n২. **CSRF (জাল চিঠি দিয়ে প্রতারণা)**: আপনি ব্যাংকের সাইটে লগইন আছেন। হ্যাকার আপনাকে একটি ভুয়া লটারি লিংকে ক্লিক করাল। ওই লিংক ব্যাকগ্রাউন্ডে আপনার ব্যাংকে গোপনে রিকোয়েস্ট পাঠাল 'হ্যাকারের একাউন্টে ১০০ টাকা পাঠাও'। ব্যাংক ভাবল আপনি নিজেই পাঠিয়েছেন কারণ আপনার লগইন কুকি ব্রাউজারে ছিল!\n\n৩. **SQL/NoSQL Injection (প্রশ্নপত্রে উত্তর ফাঁস)**: ফর্মের ইনপুট বক্সে পাসওয়ার্ড না লিখে এমন এক কোড (`' OR 1=1 --`) লেখা যা ডাটাবেসকে ফাঁকি দিয়ে পাসওয়ার্ড ছাড়াই লগইন করিয়ে দেয়!",
    interviewAnswer: "These represent three primary threats in the OWASP Top 10:\n\n1. **XSS (Cross-Site Scripting)**:\n   - **Mechanism**: Injecting malicious client-side JavaScript into web pages viewed by other users to steal session tokens, cookies, or manipulate the DOM.\n   - **Express Mitigations**: Storing auth tokens in `httpOnly` cookies (preventing `document.cookie` access), sanitizing HTML input (`xss-clean`, `DOMPurify`), and setting strict `Content-Security-Policy (CSP)` via Helmet.\n\n2. **CSRF (Cross-Site Request Forgery)**:\n   - **Mechanism**: Exploiting the browser's automatic inclusion of cookies on cross-origin requests to execute unauthorized state-changing actions (e.g. transferring funds) on behalf of an authenticated user.\n   - **Express Mitigations**: Set `SameSite=Strict` or `SameSite=Lax` cookie flags, enforce custom headers (`X-Requested-With`, `Authorization: Bearer`), and validate synchronized Anti-CSRF tokens.\n\n3. **SQL / NoSQL Injection**:\n   - **Mechanism**: Attacker inputs query operators (e.g. MongoDB `{\\'username\\': {\\'$gt\\': \\'\\'}}` or SQL `' OR '1'='1`) to bypass authentication or extract the entire database.\n   - **Express Mitigations**: Use Parameterized Queries (Prepared Statements), leverage ORMs/ODMs (Prisma, TypeORM, Mongoose), sanitize input using `express-mongo-sanitize`, and validate request bodies with **Zod**.",
    detailedExplanation: {
      whatItIs: "ওয়েবের ৩টি ক্লাসিক ও মারাত্মক সিকিউরিটি ভালনারেবিলিটি।",
      whyItExists: "ইউজার ইনপুটকে অন্ধভাবে বিশ্বাস করা এবং ব্রাউজার স্টেটলেস প্রটোকলের ফাঁকফোকরের কারণে।",
      howItWorks: "XSS ক্লায়েন্ট স্ক্রিপ্ট চালায়, CSRF ব্রাউজার সেশন অপব্যবহার করে, Injection ডাটাবেস হাইজ্যাক করে।",
      whenToUse: "সব সিকিউরিটি অডিট, কোড রিভিউ এবং ব্যাকএন্ড আর্কিটেকচার ডিজাইনে।",
      keyPoints: [
        "httpOnly cookies prevent 99% of XSS token-stealing attacks.",
        "SameSite=Strict cookie attribute eliminates CSRF vulnerability out of the box.",
        "Never concatenate raw user strings into SQL or NoSQL database queries.",
        "express-mongo-sanitize strips dollar signs ($) and dots (.) from input to stop NoSQL injection."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const { z } = require('zod');

const app = express();

app.use(helmet()); // XSS ও ক্লিকজ্যাকিং প্রতিরোধ
app.use(express.json());
app.use(mongoSanitize()); // NoSQL ইনজেকশন ($gt, $ne) রিমুভ করে

// Zod স্কিমা দিয়ে ইনপুট কঠোরভাবে ভ্যালিডেট করা
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

app.post('/api/login', async (req, res) => {
  // ১. ইনজেকশন ও ফরম্যাট প্রতিরোধে Zod পার্সিং
  const result = LoginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input format' });
  }

  const { email, password } = result.data;

  // ২. Mongoose / Prisma প্যারামিটারাইজড কুয়েরি (Injection Safe)
  const user = await User.findOne({ email: String(email) });

  // ৩. CSRF ও XSS-সেফ কুকি সেট করা
  res.cookie('token', 'jwt-token-value', {
    httpOnly: true, // XSS থেকে জাভাস্ক্রিপ্ট রিড বন্ধ
    secure: true,   // শুধুমাত্র HTTPS
    sameSite: 'strict' // CSRF আক্রমণ সম্পূর্ণ বন্ধ!
  });

  res.json({ message: 'Secure login completed' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "mongoSanitize",
          description: "বডি থেকে `$` সাইন মুছে NoSQL অপারেটর ইনজেকশন ব্লক করে।"
        },
        {
          step: 2,
          title: "Zod Schema",
          description: "ইউজার ইনপুটের টাইপ ও সাইজ নিশ্চিত করে।"
        },
        {
          step: 3,
          title: "httpOnly + sameSite: strict",
          description: "একযোগে XSS এবং CSRF আক্রমণ প্রতিহত করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Modern Banking App Cookie Strategy",
        description: "ব্যাংকিং পোর্টালে অথেন্টিকেশন টোকেন `httpOnly; Secure; SameSite=Strict` দিয়ে সেট করা হয় যাতে কোনো থার্ড পার্টি সাইট থেকে CSRF বা XSS অ্যাটাক চালানো অসম্ভব হয়ে পড়ে।"
      }
    ],
    interviewTips: {
      tip: "তিনটি আক্রমণের সংজ্ঞা এবং প্রত্যেকের নির্দিষ্ট ১টি করে ডিফেন্স টেকনিক (`httpOnly` for XSS, `SameSite=Strict` for CSRF, `Parameterized Queries` for Injection) মুখস্থ বলে ফেলুন।",
      deliveryStrategy: "XSS -> CSRF -> SQL/NoSQL Injection ক্রমানুসারে ব্যাখ্যা -> ডিফেন্স মেকানিজমের কোড ডেমো।",
      avoidSaying: [
        {
          wrong: "XSS এবং CSRF একই জিনিস।",
          right: "XSS হলো ব্রাউজারে ক্ষতিকর স্ক্রিপ্ট রান করানো; আর CSRF হলো লগইন থাকা কুকির অপব্যবহার করে ভিকটিমকে না জানিয়ে অন্য সাইট থেকে ক্ষতিকর রিকোয়েস্ট পাঠানো।"
        }
      ]
    },
    quickRevision: [
      "XSS = ব্রাউজারে ক্ষতিকর JS ইনজেকশন (প্রতিরোধ: `httpOnly`, Helmet CSP)।",
      "CSRF = লগইন সেশন চুরি করে জাল রিকোয়েস্ট (প্রতিরোধ: `SameSite=Strict`, Anti-CSRF token)।",
      "Injection = ডাটাবেস কোয়েরি ম্যানিপুলেশন (প্রতিরোধ: `Parameterized Queries`, `Zod`, `mongoSanitize`)।",
      "Defense in Depth কৌশল পুরো অ্যাপ্লিকেশন সুরক্ষিত রাখে।"
    ],
    followUpQuestions: [
      {
        question: "Explain Helmet.js and its importance.",
        targetId: "express-helmet-js-importance",
        shortHint: "Security response headers, CSP, HSTS, X-Frame-Options."
      }
    ],
    tags: ["Express.js", "Security", "XSS", "CSRF", "SQL Injection", "NoSQL Injection"]
  },
  {
    id: "express-helmet-js-importance",
    slug: "express-helmet-js-importance",
    question: "Explain Helmet.js and its importance.",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Intermediate",
    importance: "High",
    shortAnswer: "**Helmet.js** হলো Express.js-এর একটি অপরিহার্য সিকিউরিটি মিডলওয়্যার যা অ্যাপ্লিকেশন থেকে ক্লায়েন্ট ব্রাউজারে পাঠানো HTTP রেসপন্সে **১৫টির বেশি সিকিউরিটি হেডার** স্বয়ংক্রিয়ভাবে সেট করে দেয়। এটি মাত্র এক লাইনে (`app.use(helmet())`) কনফিগার করা যায়। Helmet ব্রাউজারের বিভিন্ন দুর্বলতা ও আক্রমণ যেমন **Clickjacking** (`X-Frame-Options`), **Cross-Site Scripting** (`Content-Security-Policy`), **MIME-Type Sniffing** (`X-Content-Type-Options`), এবং **Man-in-the-Middle** (`Strict-Transport-Security`) থেকে অ্যাপ্লিকেশনকে কার্যকরভাবে সুরক্ষিত রাখে।",
    easyExplanation: "সহজ উপমা:\nআপনি যখন বাইক চালান, আপনার মাথায় একটি সেফটি হেলমেট থাকে:\n- এটি বাইকের গতি বাড়ায় না, কিন্তু কোনো দুর্ঘটনা ঘটলে আপনার মাথাকে মারাত্মক আঘাত থেকে বাঁচায়।\n- **Helmet.js** হলো আপনার Express সার্ভারের ডিজিটাল হেলমেট! এটি এক লাইনে চালু করে দিলে ব্রাউজারকে ১৫টি কঠোর সিকিউরিটি রুলস মেনে চলার নির্দেশ দেয়, ফলে কোনো হ্যাকার সহজে ফাঁদ পাততে পারে না!",
    interviewAnswer: "Helmet.js is an essential security middleware collection for Express.js that secures applications by setting critical HTTP response headers according to industry best practices. By invoking `app.use(helmet())`, it automatically configures a suite of 15 specialized header middlewares:\n\n**Crucial Headers Configured by Helmet**:\n1. **`Content-Security-Policy (CSP)`**: Restricts the origins from which scripts, styles, images, and fonts can be loaded, drastically mitigating XSS and data injection.\n2. **`Strict-Transport-Security (HSTS)`**: Enforces secure HTTPS connections and prevents SSL-stripping man-in-the-middle attacks.\n3. **`X-Frame-Options`**: Blocks the website from being embedded inside `<frame>` or `<iframe>` on other domains, preventing Clickjacking attacks.\n4. **`X-Content-Type-Options: nosniff`**: Prevents the browser from MIME-sniffing a response away from the declared content type.\n5. **`X-Permitted-Cross-Domain-Policies`**: Restricts Adobe Flash and PDF cross-domain policy access.\n6. **`Hide X-Powered-By`**: Removes the `X-Powered-By: Express` header to obscure technology fingerprinting.",
    detailedExplanation: {
      whatItIs: "HTTP সিকিউরিটি রেসপন্স হেডার অটোমেশন লাইব্রেরি।",
      whyItExists: "১৫টি ভিন্ন সিকিউরিটি হেডার ম্যানুয়ালি কনফিগার করার ভুল ও জটিলতা দূর করতে।",
      howItWorks: "প্রতিটি ইনকামিং রিকোয়েস্টের রেসপন্স স্ট্রিমে প্রমিত হেডার ইনজেক্ট করে।",
      whenToUse: "প্রতিটি প্রোডাকশন Express অ্যাপ্লিকেশনের শীর্ষ মিডলওয়্যার হিসেবে।",
      keyPoints: [
        "One line implementation: app.use(helmet()).",
        "Provides 15 sub-middlewares in one bundle.",
        "Custom CSP policies can be configured via helmet.contentSecurityPolicy().",
        "Should be loaded before any route handler."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const helmet = require('helmet');

const app = express();

// ১. বেসিক অল-ইন-ওয়ান হেলমেট সেটআপ (ডিফল্ট ১৫টি হেডার চালু করে)
app.use(helmet());

// ২. অথবা কাস্টম Content-Security-Policy (CSP) কনফিগারেশন
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trusted-cdn.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

app.get('/api/secure-info', (req, res) => {
  res.json({ message: 'Protected by Helmet.js Security Headers!' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "app.use(helmet())",
          description: "১৫টি সিকিউরিটি হেডার স্বয়ংক্রিয়ভাবে সক্রিয় হয়।"
        },
        {
          step: 2,
          title: "CSP ডিরেক্টিভস",
          description: "শুধুমাত্র অনুমোদিত বিশ্বস্ত CDN থেকে স্ক্রিপ্ট ও ফন্ট লোড করার নিয়ম জারি করে।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "OWASP Security Header Auditing",
        description: "`securityheaders.com` এ কোনো Express সাইট টেস্ট করলে Helmet ব্যবহারের ফলে সরাসরি **A+ Grade** সিকিউরিটি রেটিং পাওয়া যায়।"
      }
    ],
    interviewTips: {
      tip: "Helmet যে ৩টি প্রধান আক্রমণ প্রতিহত করে তার নাম বলুন: **XSS (CSP দিয়ে)**, **Clickjacking (X-Frame-Options দিয়ে)**, এবং **MIME Sniffing (nosniff দিয়ে)**।",
      deliveryStrategy: "সংজ্ঞা -> হেলমেট উপমা -> প্রধান ৪টি হেডারের নাম ও কাজ -> কাস্টম CSP কোড।",
      avoidSaying: [
        {
          wrong: "Helmet.js ডাটাবেসের পাসওয়ার্ড এনক্রিপ্ট করে দেয়।",
          right: "Helmet.js কোনো ডাটাবেস লাইব্রেরি নয়; এটি ব্রাউজারের জন্য HTTP সিকিউরিটি রেসপন্স হেডার সেট করে।"
        }
      ]
    },
    quickRevision: [
      "`app.use(helmet())` = ১৫+ সিকিউরিটি HTTP হেডার কনফিগার করে।",
      "`Content-Security-Policy` (CSP) = স্ক্রিপ্ট সোর্স সীমাবদ্ধ করে XSS ঠেকায়।",
      "`X-Frame-Options` = ক্লিকজ্যাকিং (iFrame হাইজ্যাক) ঠেকায়।",
      "`X-Content-Type-Options: nosniff` = ফাইল টাইপ পরিবর্তন ঠেকায়।"
    ],
    followUpQuestions: [
      {
        question: "How do you prevent brute-force attacks?",
        targetId: "express-prevent-brute-force-attacks",
        shortHint: "Rate limiting, account lockout, CAPTCHA, bcrypt delay."
      }
    ],
    tags: ["Express.js", "Helmet", "Security Headers", "CSP", "Clickjacking", "HSTS"]
  },
  {
    id: "express-prevent-brute-force-attacks",
    slug: "express-prevent-brute-force-attacks",
    question: "How do you prevent brute-force attacks?",
    category: "Express.js",
    categorySlug: "expressjs",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "Express.js অ্যাপ্লিকেশনে **Brute-Force Attacks** (অটোমেটেড বটের সাহায্যে ঘনঘন হাজার হাজার পাসওয়ার্ড ট্রাই করে সঠিক পাসওয়ার্ড বের করার চেষ্টা) প্রতিরোধ করার প্রধান কৌশলগুলো হলো:\n১. **Strict Rate Limiting**: `express-rate-limit` দিয়ে লগইন রুটে প্রতি আইপি থেকে ১৫ মিনিটে সর্বোচ্চ ৫টি রিকোয়েস্টের সীমা বেঁধে দেওয়া।\n২. **Progressive Account Lockout**: ৫ বার ভুল পাসওয়ার্ড দিলে অ্যাকাউন্টটি ১৫-৩০ মিনিটের জন্য সাময়িকভাবে লক করে দেওয়া।\n৩. **CAPTCHA Integration**: পরপর ৩ বার ভুল পাসওয়ার্ড দিলে Google reCAPTCHA বা Cloudflare Turnstile চ্যালেঞ্জ দেখানো।\n৪. **Slow Password Hashing (Bcrypt)**: `bcrypt` এর কস্ট ফ্যাক্টর ১০-১২ ব্যবহার করা যা প্রতি হ্যাশে ~১০০ms কম্পিউটেশনাল সময় নেয়, ফলে বটের স্পিড নাটকীয়ভাবে কমে যায়।\n৫. **Multi-Factor Authentication (MFA/2FA)**: পাসওয়ার্ডের পাশাপাশি OTP বা অথেন্টিকেটর অ্যাপ কোড বাধ্যতামূলক করা।\n৬. **IP-based Speed Throttling**: `express-slow-down` দিয়ে প্রতি ভুল ট্রায়ে রেসপন্স ডিলে বাড়িয়ে দেওয়া।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যাংক লকারের ৩ স্তরের নিরাপত্তার মতো:\n১. **১ম বাধা (Rate Limiting)**: ৩ বার ভুল পিন দিলে কিপ্যাড ৫ মিনিটের জন্য লক হয়ে যাবে (`express-rate-limit`).\n২. **২য় বাধা (Bcrypt Delay)**: প্রতিবার পিন চাপলে তালা খুলতে ৩ সেকেন্ড সময় নেয়, ফলে রোবট সেকেন্ডে লাখ বার ট্রাই করতে পারবে না।\n৩. **৩য় বাধা (CAPTCHA / 2FA)**: আপনি মানুষ কি না তা প্রমাণের জন্য ধাঁধা মেলাতে হবে এবং আপনার ফোনে আসা ৬ ডিজিটের কোড (OTP) দিতে হবে!",
    interviewAnswer: "A brute-force attack involves systematically guessing credentials, tokens, or encryption keys through automated high-frequency requests. Defending an Express.js API requires a multi-layered defense strategy:\n\n1. **IP & User-Based Rate Limiting**: Enforce strict limits on sensitive endpoints (`/login`, `/reset-password`) using `express-rate-limit` with Redis persistence (e.g. max 5 attempts per 15 minutes per IP).\n2. **Exponential Delays (Throttling)**: Introduce artificial progressive delays using `express-slow-down` to throttle automated scripts.\n3. **Account Lockout Policy**: Track failed login attempts in the database; lock the account temporarily after 5 consecutive failures and notify the user via email.\n4. **CAPTCHA Verification**: Trigger interactive proof-of-work/CAPTCHA (Cloudflare Turnstile, reCAPTCHA v3) after 3 failed login attempts.\n5. **Adaptive Hashing Work Factor (Bcrypt)**: Use Bcrypt with 10-12 salt rounds so each hash takes ~100-250ms of CPU time, crippling GPU-based offline dictionary attacks.\n6. **Multi-Factor Authentication (MFA)**: Enforce Time-based One-Time Passwords (TOTP via speakeasy/otplib) as a secondary validation factor.",
    detailedExplanation: {
      whatItIs: "অটোমেটেড ক্রিডেনশিয়াল স্টাফিং ও পাসওয়ার্ড গেসিং আক্রমণ প্রতিরোধ ফ্রেমওয়ার্ক।",
      whyItExists: "ইউজার অ্যাকাউন্ট হাইজ্যাক হওয়া এবং সার্ভার ট্রাফিক ওভারলোড হওয়া ঠেকাতে।",
      howItWorks: "রেট লিমিটিং + একাউন্ট ট্র্যাকিং + ক্যাপচা চ্যালেঞ্জ + স্লো হ্যাশিংয়ের কম্বিনেশনে চলে।",
      whenToUse: "সব লগইন, রেজিস্ট্রেশন, পাসওয়ার্ড রিসেট এবং OTP ভেরিফিকেশন এন্ডপয়েন্টে।",
      keyPoints: [
        "Track attempts by both IP AND username/email to prevent distributed botnet attacks.",
        "Use Redis for tracking attempts across multiple scaled server instances.",
        "Always return generic error messages ('Invalid email or password') to prevent username enumeration.",
        "Notify users via email when multiple failed login attempts are detected."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `const express = require('express');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// ১. লগইন রুটে কড়া রেট লিমিটার (১৫ মিনিটে ৫টি রিকোয়েস্ট)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: 'Too many login attempts from this IP. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/auth/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  const user = await db.findUserByEmail(email);

  // ২. ইউজার লকড কি না চেক করা
  if (user && user.lockUntil && user.lockUntil > Date.now()) {
    return res.status(403).json({
      error: 'Account temporarily locked due to excessive failed attempts. Try later.'
    });
  }

  // ৩. Bcrypt স্লো হ্যাশ ভেরিফিকেশন (~100ms CPU কস্ট)
  const isMatch = user && (await bcrypt.compare(password, user.passwordHash));

  if (!isMatch) {
    if (user) {
      user.failedAttempts = (user.failedAttempts || 0) + 1;
      if (user.failedAttempts >= 5) {
        user.lockUntil = Date.now() + 15 * 60 * 1000; // ১৫ মিনিট লক
      }
      await user.save();
    }

    // ইউজারনেম ইনুমারেশন ঠেকাতে জেনেরিক এরর দেওয়া
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // সফল লগইনে কাউন্টার রিসেট
  user.failedAttempts = 0;
  user.lockUntil = null;
  await user.save();

  res.json({ message: 'Login successful', token: 'jwt-access-token' });
});`,
      explanationSteps: [
        {
          step: 1,
          title: "loginLimiter",
          description: "আইপি ভিত্তিক ব্রুট-ফোর্স রিকোয়েস্ট ব্লক করে।"
        },
        {
          step: 2,
          title: "অ্যাকাউন্ট লকআউট",
          description: "৫ বার ব্যর্থ হলে ডাটাবেসে `lockUntil` টাইমস্ট্যাম্প সেট করে।"
        },
        {
          step: 3,
          title: "জেনেরিক এরর মেসেজ",
          description: "'ইমেইল নেই' বা 'ভুল পাসওয়ার্ড' আলাদা না বলে 'Invalid email or password' বলা।"
        }
      ]
    },
    realWorldExamples: [
      {
        title: "Banking & Social Media Login Protection",
        description: "Google বা Facebook-এ নতুন কোনো ডিভাইস বা আইপি থেকে ৫ বার ভুল পাসওয়ার্ড দিলে স্ক্রিনে ক্যাপচা পাজল দেখায় এবং ব্যবহারকারীর ইমেইলে সিকিউরিটি অ্যালার্ট পাঠায়।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে **Username Enumeration** প্রতিরোধ করার কথা বলুন (অর্থাৎ ইউজার না মিললেও 'Invalid email or password' বলতে হবে, কখনো 'Email not found' বলা যাবে না, কারণ এতে হ্যাকার নিশ্চিত হয় কোন কোন ইমেইল সাইটে নিবন্ধিত আছে)।",
      deliveryStrategy: "ব্রুট-ফোর্স কী -> ৬টি ডিফেন্স টেকনিক (Rate Limit, Lockout, CAPTCHA, Bcrypt, MFA, Generic Error) -> কোড ডেমো।",
      avoidSaying: [
        {
          wrong: "লগইন এররে 'Email does not exist' লিখে দিলে ইউজারের বুঝতে সুবিধা হয়।",
          right: "এটি মারাত্মক ভুল (Username Enumeration ভালনারেবিলিটি); হ্যাকারদের হাত থেকে বাঁচাতে সর্বদা 'Invalid email or password' জেনেরিক মেসেজ দিতে হবে।"
        }
      ]
    },
    quickRevision: [
      "Rate Limiting (`express-rate-limit`) = প্রতি আইপিতে রিকোয়েস্ট সংখ্যা লিমিট।",
      "Account Lockout = ৫ বার ভুল হলে ১৫ মিনিট অ্যাকাউন্ট লক।",
      "CAPTCHA = ৩ বার ভুলের পর বট ফিল্টার।",
      "Bcrypt (Cost 10-12) = স্লো হ্যাশিং কম্পিউটেশনাল ওভারহেড বাড়ায়।",
      "Generic Error = 'Invalid email or password' বলে ইউজারনেম ইনুমারেশন আটকান।"
    ],
    followUpQuestions: [
      {
        question: "How do you handle global errors in Express.js?",
        targetId: "express-global-error-handling",
        shortHint: "Centralized error handling middleware in Express."
      }
    ],
    tags: ["Express.js", "Brute Force", "Security", "Rate Limiting", "Account Lockout", "Bcrypt"]
  }
];
