import { MockInterviewItem, MockInterviewSession } from "@/types";

export const DATABASE_SQL_NOSQL_MOCK_QUESTIONS: MockInterviewItem[] = [
  {
    "id": "db-mock-tell-me-about-yourself",
    "questionNumber": 1,
    "question": "Tell me about yourself?",
    "banglaQuestion": "নিজের সম্পর্কে সংক্ষেপে কিছু বলুন?",
    "topic": "Interpersonal & HR",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "HR",
      "Introduction",
      "Soft Skills",
      "Career"
    ],
    "english": {
      "quickAnswer": "A structured, concise overview of my background, technical skill set in full-stack JavaScript/TypeScript and databases, notable projects, and my passion for building scalable software.",
      "interviewSpeech": "Thank you for the opportunity. I am a Full-Stack Software Developer specializing in building high-performance web applications with React, Next.js, Node.js, and modern database architectures including PostgreSQL and MongoDB. Over the past several years, I have architected and scaled multiple production-grade systems—handling everything from relational database normalization, indexing, and ACID transactions to high-throughput NoSQL document modeling. I love breaking down complex architectural problems, writing clean, type-safe code, and optimizing API latencies. In this role, I am eager to leverage my deep database and backend expertise to build resilient, scalable products for your team.",
      "deepDive": [
        "**The Past-Present-Future Framework**: Start with where you began, what you specialize in currently (technologies, scale, achievements), and why this specific role excites you.",
        "**Focus on Impact, Not Just Tech Names**: Mentioning performance improvements (e.g. reducing query latency by 40% using indexing) makes your story 10x more compelling.",
        "**Keep it under 90-120 seconds**: Avoid recounting your entire life history; stick to professional highlights."
      ],
      "commonMistakes": [
        "Reciting line-by-line what is already written on your CV without enthusiasm.",
        "Rambling for more than 3 minutes without a clear conclusion."
      ],
      "proTips": [
        "End with a forward-looking hook: 'That brings me to today, where I am looking forward to contributing to your backend and database infrastructure.'"
      ]
    },
    "bangla": {
      "quickAnswer": "নিজের ব্যাকগ্রাউন্ড, টেকনিক্যাল দক্ষতা (বিশেষ করে ডাটাবেস ও ফুল-স্ট্যাক), উল্লেখযোগ্য প্রজেক্ট এবং এই পদের প্রতি আগ্রহের একটি সুসংগঠিত সংক্ষিপ্ত রূপ।",
      "interviewSpeech": "ধন্যবাদ সুযোগ দেওয়ার জন্য। আমি একজন ফুল-স্ট্যাক সফটওয়্যার ডেভেলপার, যার মূল দক্ষতা আধুনিক ওয়েব অ্যাপ্লিকেশন ও ব্যাকএন্ড আর্কিটেকচারে—বিশেষ করে Node.js, TypeScript, PostgreSQL এবং MongoDB ডাটাবেসে। বিগত সময়ে আমি বেশ কিছু প্রোডাকশন-রেডি প্রজেক্টে কাজ করেছি, যেখানে জটিল রিলেশনাল স্কিমা নরম্যালাইজেশন, ইনডেক্সিং অপ্টিমাইজেশন এবং হাই-থ্রুপুট নো-স্কিউএল কালেকশন আর্কিটেকচার নিয়ে কাজ করার সুযোগ হয়েছে। আমি শুধু কোড লেখায় নয়, সিস্টেমের স্কেলেবিলিটি, এপিআই লেটেন্সি কমানো এবং টাইপ-সেফ ক্লিন আর্কিটেকচার বজায় রাখায় বিশ্বাসী। এই রোলে আমার ব্যাকএন্ড ও ডাটাবেস দক্ষতা দিয়ে টিমের লক্ষ্য অর্জনে সর্বোচ্চ অবদান রাখতে চাই।",
      "deepDive": [
        "**Past-Present-Future ফ্রেমওয়ার্ক**: শুরু করবেন কোথা থেকে যাত্রা শুরু করেছিলেন, বর্তমানে কী নিয়ে কাজ করছেন এবং ভবিষ্যতে এই কোম্পানিতে কীভাবে ভ্যালু অ্যাড করবেন।",
        "**কাজের প্রভাব (Impact) তুলে ধরুন**: শুধু টেকনোলজির নাম না বলে কী সমস্যার সমাধান করেছেন (যেমন: কুয়েরি অপ্টিমাইজ করে লেটেন্সি কমানো) তা বলুন।"
      ],
      "commonMistakes": [
        "সিভিতে যা লেখা আছে তা তোতাপাখির মতো মুখস্থ বলে যাওয়া।",
        "ব্যক্তিগত বা পারিবারিক অপ্রাসঙ্গিক গল্পে সময় নষ্ট করা।"
      ],
      "proTips": [
        "কথা বলার সময় আত্মবিশ্বাস ও মুখের মিষ্টি হাসি বজায় রাখুন এবং ১.৫ থেকে ২ মিনিটের মধ্যে শেষ করুন।"
      ]
    }
  },
  {
    "id": "db-mock-approach-to-learning-new-technology",
    "questionNumber": 2,
    "question": "What is your approach to learning new technology?",
    "banglaQuestion": "নতুন প্রযুক্তি বা ফ্রেমওয়ার্ক শেখার ক্ষেত্রে আপনার অ্যাপ্রোচ বা পদ্ধতি কী?",
    "topic": "Interpersonal & HR",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Learning Agility",
      "Problem Solving",
      "Growth Mindset"
    ],
    "english": {
      "quickAnswer": "A pragmatic, hands-on approach centered on official documentation, building real-world proof-of-concept projects, and understanding foundational design tradeoffs rather than just syntax.",
      "interviewSpeech": "My approach is driven by first principles and practical application. First, I read the official documentation to understand why the technology was created and what specific architectural problem it solves compared to existing tools. Next, instead of passively watching hours of tutorials, I immediately build a functional Proof of Concept (PoC)—for example, implementing authentication, caching, or database relations. Third, I dig into the community best practices, error patterns, and production pitfalls. This ensures I learn not just how to make it work, but how to deploy and scale it safely.",
      "deepDive": [
        "**First Principles Understanding**: Grasp the core abstractions (e.g. why LSM trees instead of B-trees in certain databases).",
        "**Hands-on Proof of Concept (PoC)**: Build a small end-to-end service within 48 hours to uncover real runtime gotchas.",
        "**Source Code & Community Issues**: Inspecting GitHub discussions and issues to see what breaks in production."
      ],
      "commonMistakes": [
        "Saying 'I just watch YouTube tutorials' without demonstrating active coding.",
        "Claiming to master a technology overnight."
      ],
      "proTips": [
        "Give a concrete example from your recent experience, such as learning Prisma ORM, Redis caching, or Docker containerization for a specific project."
      ]
    },
    "bangla": {
      "quickAnswer": "অফিসিয়াল ডকুমেন্টেশন পড়ে ফান্ডামেন্টাল আর্কিটেকচার বোঝা এবং সাথে সাথে ছোট প্রুফ-অফ-কনসেপ্ট (PoC) প্রজেক্ট বানিয়ে বাস্তব সমস্যা সমাধানের মাধ্যমে শেখা।",
      "interviewSpeech": "আমার শেখার পদ্ধতিটি মূলত ফার্স্ট-প্রিন্সিপালস ও প্র্যাক্টিক্যাল প্রয়োগের ওপর ভিত্তি করে তৈরি। প্রথমে আমি কোনো নতুন টেকনোলজি আসলে সেটির অফিসিয়াল ডকুমেন্টেশন পড়ি—বুঝতে চেষ্টা করি এটি বিদ্যমান কোন সমস্যার সমাধান দিতে এসেছে। এরপর ঘণ্টার পর ঘণ্টা ভিডিও টিউটোরিয়াল না দেখে, সরাসরি একটি ফাংশনাল মিনি-প্রজেক্ট (Proof of Concept) তৈরি করি—যেমন ডাটাবেস কুয়েরি অপ্টিমাইজেশন বা ইন্টিগ্রেশন। পাশাপাশি গিটহাব ইস্যু ও প্রোডাকশন পোস্টমর্টেম পড়ে সম্ভাব্য চ্যালেঞ্জগুলো জেনে নিই। এতে করে শুধুমাত্র সিনট্যাক্স নয়, টেকনোলজিটির লিমিটেশন ও বেস্ট প্র্যাকটিস আয়ত্তে চলে আসে।",
      "deepDive": [
        "**কেন তৈরি হয়েছে তা বোঝা**: যেকোনো টুলের পেছনের ডিজাইন ট্রেড-অফ বোঝা জরুরি।",
        "**হাতে-কলমে কাজ (Hands-on)**: নিজে কোড লিখে এরর ফেস না করলে শেখা অপূর্ণ থেকে যায়।"
      ],
      "commonMistakes": [
        "শুধু ভিডিও দেখে কোড না লিখে নিজেকে এক্সপার্ট দাবি করা।"
      ],
      "proTips": [
        "সাম্প্রতিক কোনো নতুন টুল বা লাইব্রেরি (যেমন Prisma, Redis, Docker) কীভাবে শিখেছিলেন তার একটি বাস্তব উদাহরণ যুক্ত করুন।"
      ]
    }
  },
  {
    "id": "db-mock-most-creative-sector-graphic-or-programming",
    "questionNumber": 3,
    "question": "What is the most creative sector — Graphic or Programming? (asked to a graphic designer)",
    "banglaQuestion": "কোন সেক্টরটি বেশি সৃজনশীল — গ্রাফিক্স নাকি প্রোগ্রামিং? (গ্রাফিক ডিজাইনার ব্যাকগ্রাউন্ডের কাউকে করা প্রশ্ন)",
    "topic": "Interpersonal & HR",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "tags": [
      "Creativity",
      "Design Thinking",
      "Perspective",
      "HR"
    ],
    "english": {
      "quickAnswer": "Both are deeply creative disciplines; Graphic Design creates visual emotional solutions, while Programming creates functional, architectural solutions. Coding is logic-driven engineering creativity.",
      "interviewSpeech": "Coming from a visual design background, I believe both fields represent pure creativity, but expressed through different mediums. Graphic design is creative problem-solving on a visual canvas—communicating emotions, brand identity, and intuitive hierarchy using typography, colors, and spatial harmony. Programming, on the other hand, is architectural and structural creativity—turning abstract business problems into living, self-healing algorithms and database schemas out of thin air. Combining design intuition with algorithmic thinking allows me to build applications that are not only rock-solid under the hood but also visually delightful for users.",
      "deepDive": [
        "**Visual vs Architectural Creativity**: Design focuses on user empathy and aesthetic communication; Programming focuses on systems design, abstraction, and problem resolution.",
        "**The Synergy**: A developer who understands design principles builds better UI/UX and empathizes better with product designers."
      ],
      "commonMistakes": [
        "Putting down one sector to praise the other.",
        "Saying programming has zero creativity and is purely mechanical math."
      ],
      "proTips": [
        "Frame your multi-disciplinary background as an unfair advantage: bridging the gap between Figma mockups and high-performance database code."
      ]
    },
    "bangla": {
      "quickAnswer": "উভয় সেক্টরই দারুণভাবে সৃজনশীল; গ্রাফিক্স মানুষের অনুভূতি ও ভিজ্যুয়াল আর্ট নিয়ে কাজ করে, আর প্রোগ্রামিং আর্কিটেকচারাল ও লজিক্যাল সমস্যার সমাধান তৈরি করে।",
      "interviewSpeech": "গ্রাফিক ডিজাইনের অভিজ্ঞতা থাকায় আমি দুটো মাধ্যমকেই অত্যন্ত ক্রিয়েটিভ মনে করি। গ্রাফিক্সের ক্রিয়েটিভিটি হলো ভিজ্যুয়াল ক্যানভাসে—রং, টাইপোগ্রাফি ও লেআউট দিয়ে ইউজারের সাইকোলজি ও অনুভূতিতে নাড়া দেওয়া। অন্যদিকে প্রোগ্রামিং হলো আর্কিটেকচারাল ক্রিয়েটিভিটি—যেখানে শূন্য থেকে চিন্তা করে লজিক, ডাটাবেস মডেল এবং উচ্চগতির অ্যালগরিদম দিয়ে বাস্তব জীবনের জটিল সমস্যার সমাধান তৈরি করা যায়। একজন ডেভেলপারের যখন ডিজাইনের সেন্স থাকে, তখন সে এমন সিস্টেম বানাতে পারে যা ভেতর থেকে পারফর্ম্যান্ট এবং বাইরে থেকে ব্যবহারকারীর জন্য আনন্দদায়ক।",
      "deepDive": [
        "**দ্বিমুখী সৃজনশীলতা**: ভিজ্যুয়াল আর্ট এবং সফটওয়্যার আর্কিটেকচার উভয়েই গভীর চিন্তার দাবি রাখে।",
        "**ব্রিজিং স্কিল**: ডিজাইন জানা থাকলে ডিজাইনারদের সাথে ইঞ্জিনিয়ারিং টিমের কোলাবোরেশন দুর্দান্ত হয়।"
      ],
      "commonMistakes": [
        "গ্রাফিক্স বা প্রোগ্রামিংয়ের যেকোনো একটিকে খাটো করে দেখা।"
      ],
      "proTips": [
        "আপনার ডিজাইন ব্যাকগ্রাউন্ড কীভাবে আপনার কোডিং ও ইউজার এক্সপেরিয়েন্সকে সমৃদ্ধ করেছে তা ইতিবাচকভাবে ব্যাখ্যা করুন।"
      ]
    }
  },
  {
    "id": "db-mock-enjoyable-math-vs-development",
    "questionNumber": 4,
    "question": "Which is more enjoyable: Math & Development? (asked to a Math student)",
    "banglaQuestion": "কোনটি বেশি উপভোগ্য: গণিত নাকি সফটওয়্যার ডেভেলপমেন্ট? (গণিতের ব্যাকগ্রাউন্ডের কাউকে করা প্রশ্ন)",
    "topic": "Interpersonal & HR",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "tags": [
      "Mathematics",
      "Logical Thinking",
      "Development",
      "HR"
    ],
    "english": {
      "quickAnswer": "Math provides the intellectual rigor and algorithmic elegance, while software development provides the tangible joy of seeing those abstractions power real-world applications in real time.",
      "interviewSpeech": "Mathematics is the foundational language of pure logic, proofs, and pattern recognition. I deeply enjoy math because it trains the brain to think in abstractions and edge cases. However, Software Development is where that mathematical rigor turns into tangible reality. In math, you write a proof on paper; in development, you write an algorithm, deploy it to a database cluster, and millions of users interact with it in milliseconds. The instant feedback loop, system design challenges, and practical problem-solving make development profoundly exhilarating for me.",
      "deepDive": [
        "**Mathematical Rigor in Databases**: Relational algebra is the foundation of SQL and relational databases. Graph theory drives indexes and query planners.",
        "**Tangible Feedback**: Math proves correctness; engineering delivers products to human beings."
      ],
      "commonMistakes": [
        "Saying math was boring and you hated it.",
        "Saying development is just copy-pasting code."
      ],
      "proTips": [
        "Connect math directly to engineering: relational algebra in SQL, time complexity (Big-O) in indexing, and hashing algorithms in database distribution."
      ]
    },
    "bangla": {
      "quickAnswer": "গণিত চিন্তা করার লজিক্যাল ভিত্তি ও গভীরতা দেয়, আর সফটওয়্যার ডেভেলপমেন্ট সেই লজিককে বাস্তবে রূপ দিয়ে মানুষের কাজে লাগানোর রোমাঞ্চ উপহার দেয়।",
      "interviewSpeech": "গণিত হলো খাঁটি যুক্তি এবং প্যাটার্ন খোঁজার ভাষা। গণিত আমাকে শিখিয়েছে কীভাবে জটিল বিষয়কে ছোট ছোট অংশে ভেঙে এবস্ট্রাক্ট চিন্তা করতে হয়। তবে সফটওয়্যার ডেভেলপমেন্ট আমার কাছে বেশি উপভোগ্য কারণ এখানে সেই গাণিতিক লজিক মুহূর্তের মধ্যে জীবন্ত রূপ নেয়। খাতায় থিওরেম প্রমাণের চেয়ে যখন আমার লেখা অ্যালগরিদম বা ডাটাবেস কুয়েরি লক্ষ লক্ষ ইউজারের ডেটা মিলি-সেকেন্ডে প্রসেস করে, তখন তার যে তাৎক্ষণিক সন্তুষ্টি (instant gratification), তা অতুলনীয়। গণিত আমার চিন্তার মেরুদণ্ড, আর ডেভেলপমেন্ট হলো আমার কাজের আনন্দ।",
      "deepDive": [
        "**SQL ও গণিতের সম্পর্ক**: রিলেশনাল ডাটাবেস তৈরিই হয়েছে রিলেশনাল অ্যালজেবরা ও সেট থিওরির ওপর ভিত্তি করে।",
        "**লজিক্যাল স্ট্রেংথ**: ম্যাথ ব্যাকগ্রাউন্ড ডাটাবেস ইনডেক্সিং (B-Tree) এবং টাইম কমপ্লেক্সিটি বুঝতে বড় সুবিধা দেয়।"
      ],
      "commonMistakes": [
        "গণিতকে বোরিং বা অনর্থক বলা।"
      ],
      "proTips": [
        "গণিতের সেট থিওরি কীভাবে আপনাকে SQL Joins এবং ডাটাবেস কুয়েরি দ্রুত বুঝতে সাহায্য করেছে তা সংক্ষেপে বলুন।"
      ]
    }
  },
  {
    "id": "db-mock-what-motivates-you-developer",
    "questionNumber": 5,
    "question": "What motivates you to become a developer?",
    "banglaQuestion": "ডেভেলপার হওয়ার পেছনে আপনার মূল অনুপ্রেরণা কী?",
    "topic": "Interpersonal & HR",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Motivation",
      "Passion",
      "Career Goals"
    ],
    "english": {
      "quickAnswer": "The power to transform mental logic into functional software that simplifies human lives, coupled with the endless learning curve of modern engineering.",
      "interviewSpeech": "What truly motivates me is the sheer leverage of software engineering—the fact that a few well-architected lines of code can automate complex human tasks, securely process financial transactions, or connect millions of people globally. I am fascinated by the craft of building resilient systems: optimizing a sluggish database query, designing a clean REST API, or architecting a fault-tolerant backend. Furthermore, technology never stands still; the constant evolution demands continuous learning, which keeps me intellectually hungry and deeply passionate every single day.",
      "deepDive": [
        "**Leverage & Problem Solving**: One engineer can build a system serving millions of users across the globe.",
        "**Craftsmanship**: Writing maintainable, well-tested code is an engineering craft akin to high-precision mechanics."
      ],
      "commonMistakes": [
        "Saying 'I only chose it because software engineers earn a high salary' without mentioning genuine passion."
      ],
      "proTips": [
        "Share a brief moment when you solved a hard bug or built a project and how the feeling of accomplishment cemented your passion."
      ]
    },
    "bangla": {
      "quickAnswer": "লজিক দিয়ে মানুষের বাস্তব সমস্যার সমাধান তৈরি করার ক্ষমতা এবং প্রতিদিন নতুন প্রযুক্তি শিখে নিজেকে আপগ্রেড করার অসীম সুযোগ।",
      "interviewSpeech": "আমাকে সবচেয়ে বেশি অনুপ্রাণিত করে সফটওয়্যারের অনন্য ক্ষমতা—কয়েক লাইন সুচিন্তিত কোড দিয়ে এমন একটি সিস্টেম তৈরি করা যায় যা মানুষের শত শত ঘণ্টার পরিশ্রম বাঁচিয়ে দেয় এবং বাস্তব সমস্যার সহজ সমাধান করে। একটি ধীরগতির কুয়েরি অপ্টিমাইজ করে সেকেন্ড থেকে মিলি-সেকেন্ডে নামিয়ে আনা, ক্লিন ব্যাকএন্ড ডিজাইন করা এবং নিজের তৈরি সিস্টেমে হাজার হাজার মানুষকে স্মুথলি কাজ করতে দেখার আনন্দ আমাকে প্রতিদিন নতুন উদ্যমে কাজ করতে বাধ্য করে। এছাড়া এই ফিল্ডে প্রতিদিন নতুন কিছু শেখার সুযোগ থাকে, যা আমাকে কখনোই একঘেয়েমিতে পড়তে দেয় না।",
      "deepDive": [
        "**বাস্তব সমাধান**: কোডের মাধ্যমে বাস্তব সমস্যার ডিজিটালাইজেশন করা।",
        "**কন্টিনিউয়াস লার্নিং**: প্রতিদিন প্রযুক্তি আপগ্রেড হওয়ায় নিজেকে চ্যালেঞ্জ করার সুযোগ থাকে।"
      ],
      "commonMistakes": [
        "শুধু 'টাকার জন্য এসেছি' এমন একপেশে উত্তর দেওয়া।"
      ],
      "proTips": [
        "কোনো একটি প্রজেক্টে কঠিন কোনো সমস্যা সমাধানের পর আপনার যে ভালোলাগা কাজ করেছিল তা উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "db-mock-next-5-years-plan",
    "questionNumber": 6,
    "question": "What's your next 5 years plan?",
    "banglaQuestion": "আগামী ৫ বছরে আপনি নিজেকে কোথায় দেখতে চান বা আপনার ভবিষ্যৎ পরিকল্পনা কী?",
    "topic": "Interpersonal & HR",
    "difficulty": "Beginner",
    "importance": "High",
    "tags": [
      "Career Vision",
      "Leadership",
      "Growth"
    ],
    "english": {
      "quickAnswer": "To transition from a strong Full-Stack Developer to a Senior Systems / Technical Architect, mastering distributed systems, cloud scalability, and mentoring junior engineers.",
      "interviewSpeech": "Over the next 2 to 3 years, my goal is to deepen my domain expertise in backend architecture, database optimization, and cloud-native distributed systems, taking complete ownership of core engineering modules. Over the 5-year horizon, I envision myself growing into a Lead Engineer or Technical Architect—designing resilient, high-throughput architectures, making critical database and infrastructure decisions, and actively mentoring younger developers to foster an engineering culture of excellence.",
      "deepDive": [
        "**Phase 1 (Years 1-2)**: Individual mastery, tackling complex bottlenecks, high-scale database modeling.",
        "**Phase 2 (Years 3-5)**: System architecture, cross-team technical leadership, mentorship, and high-level tech strategy."
      ],
      "commonMistakes": [
        "Saying 'I want your job' or 'I will launch my own startup and quit'.",
        "Having no clear technical trajectory or ambition."
      ],
      "proTips": [
        "Align your personal growth with the long-term success of the company you are interviewing with."
      ]
    },
    "bangla": {
      "quickAnswer": "আগামী ৫ বছরে ফুল-স্ট্যাক থেকে একজন অভিজ্ঞ সিনিয়র সিস্টেম/টেকনিক্যাল আর্কিটেক্টে পরিণত হওয়া, ডিস্ট্রিবিউটেড সিস্টেম ও ডাটাবেস ডিজাইন নেতৃত্ব দেওয়া এবং জুনিয়রদের মেন্টরিং করা।",
      "interviewSpeech": "আগামী ২ থেকে ৩ বছরে আমার লক্ষ্য হলো ব্যাকএন্ড আর্কিটেকচার, জটিল ডাটাবেস অপ্টিমাইজেশন এবং ক্লাউড সিস্টেমে গভীর দক্ষতা অর্জন করে টিমের কোর মডিউলগুলোর সম্পূর্ণ ওনারশিপ নেওয়া। আর আগামী ৫ বছরের মধ্যে আমি নিজেকে একজন লিড ইঞ্জিনিয়ার বা টেকনিক্যাল আর্কিটেক্ট হিসেবে দেখতে চাই—যেখানে আমি হাই-স্কেল সিস্টেমের আর্কিটেকচারাল সিদ্ধান্ত নেব, বিজনেস রিকোয়ারমেন্ট অনুযায়ী সঠিক টেকনোলজি স্ট্যাক বাছাই করব এবং তরুণ ডেভেলপারদের মেন্টর করে টিমের সার্বিক উৎপাদনশীলতা বৃদ্ধিতে নেতৃত্ব দেব।",
      "deepDive": [
        "**১-২ বছর**: টেকনিক্যাল স্কিলে এক্সপার্ট হওয়া এবং বড় প্রজেক্ট ডেলিভারি করা।",
        "**৩-৫ বছর**: আর্কিটেকচারাল ডিসিশন মেকিং ও ইঞ্জিনিয়ারিং লিডারশিপ।"
      ],
      "commonMistakes": [
        "২ বছর পরেই কোম্পানি ছেড়ে নিজের স্টার্টআপ দেব—এমন কথা বলা।"
      ],
      "proTips": [
        "কোম্পানির সাথে আপনার টেকনিক্যাল গ্রোথ কীভাবে সামঞ্জস্যপূর্ণ তা স্পষ্ট করুন।"
      ]
    }
  },
  {
    "id": "db-mock-c1-diff-mongodb-traditional-rdb",
    "questionNumber": 7,
    "question": "What is the difference between MongoDB and traditional RDB?",
    "banglaQuestion": "MongoDB এবং ট্র্যাডিশনাল রিলেশনাল ডাটাবেসের (RDBMS) মধ্যে মূল পার্থক্য কী?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "RDBMS",
      "NoSQL",
      "SQL",
      "Architecture"
    ],
    "english": {
      "quickAnswer": "MongoDB is a schema-less, document-oriented NoSQL database storing JSON-like BSON documents, whereas traditional RDBMS (like MySQL, PostgreSQL) stores structured tabular data enforcing strict ACID schemas and foreign keys.",
      "interviewSpeech": "The fundamental distinction is in data modeling, flexibility, and scaling. Traditional RDBMS stores structured data in normalized tables composed of rows and columns, strictly enforcing foreign key relationships and ACID transactions. MongoDB, by contrast, is a distributed document store where records are semi-structured BSON documents with dynamic schemas. RDBMS excels at complex multi-table joins and absolute transactional consistency, whereas MongoDB excels at rapid iterative development, hierarchical embedded documents, and horizontal sharding across commodity clusters.",
      "deepDive": [
        "**Schema Enforcement**: RDBMS requires DDL migrations to alter columns; MongoDB allows heterogeneous documents within the same collection.",
        "**Relationships vs Embedding**: RDBMS normalizes and uses SQL JOINs; MongoDB favors embedding subdocuments for fast atomic reads, or referencing when unbounded.",
        "**Scaling Paradigm**: RDBMS scales primarily vertically (CPU/RAM) or via read replicas; MongoDB was designed from inception for horizontal sharding."
      ],
      "codeSnippet": {
        "language": "json",
        "caption": "RDBMS Rows vs MongoDB Document",
        "code": "// Traditional RDBMS: Requires Users table JOIN Addresses table\n// MongoDB Document: Tightly coupled data embedded naturally\n{\n  \"_id\": \"66e81234567890abcdef1234\",\n  \"name\": \"Tanvir Ahmed\",\n  \"email\": \"tanvir@example.com\",\n  \"address\": {\n    \"street\": \"Dhanmondi 27\",\n    \"city\": \"Dhaka\",\n    \"postalCode\": \"1209\"\n  }\n}"
      },
      "commonMistakes": [
        "Saying MongoDB has zero schema rules; MongoDB supports JSON Schema validation at the database level if required.",
        "Claiming MongoDB cannot support transactions (it supports multi-document ACID transactions since v4.0)."
      ],
      "proTips": [
        "Mention the access pattern rule: 'In RDBMS you model for data relationships; in MongoDB you model for how your application reads the data.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MongoDB হলো স্কিমাহীন ডকুমেন্ট-ভিত্তিক NoSQL ডাটাবেস যা BSON ফরম্যাটে ডেটা রাখে, আর RDBMS (MySQL, PostgreSQL) কঠোর স্কিমা ও টেবিল-রো ভিত্তিক রিলেশনাল ডাটাবেস।",
      "interviewSpeech": "মূল পার্থক্যটি হলো ডেটা স্টোরেজ ও স্কেলিং মডেলে। ট্র্যাডিশনাল রিলেশনাল ডাটাবেস টেবিল, রো এবং কলামের মাধ্যমে কঠোর স্কিমা এবং ফরেন কি দিয়ে ডেটা নরম্যালাইজ করে রাখে এবং শক্তিশালী ACID ট্রানজ্যাকশন দেয়। অন্যদিকে MongoDB হলো ডকুমেন্ট ডাটাবেস, যেখানে ডেটা BSON ফরম্যাটে ফ্লেক্সিবল কালেকশনে জমা থাকে। RDBMS যেখানে জটিল মাল্টি-টেবিল JOIN এবং কঠোর ডেটা ইন্টিগ্রিটিতে সেরা, সেখানে MongoDB দ্রুত পরিবর্তনশীল স্কিমা, নেস্টেড হায়ারারকিক্যাল ডেটা হ্যান্ডলিং এবং হরিজন্টাল শার্ডিংয়ের মাধ্যমে ক্লাস্টার স্কেলিংয়ে অতুলনীয়।",
      "deepDive": [
        "**স্কিমা ফ্লেক্সিবিলিটি**: RDBMS-এ কলাম যোগ করতে DDL মাইগ্রেশন লাগে; MongoDB-তে ডকুমেন্টে সরাসরি নতুন ফিল্ড রাখা যায়।",
        "**JOIN বনাম এম্বেডিং**: RDBMS-এ জয়েন লাগে; MongoDB-তে সাব-ডকুমেন্ট এম্বেড করে ১টি কোয়ারিতে পুরো ডেটা পাওয়া যায়।",
        "**স্কেলিং মেকানিজম**: RDBMS মূলত ভার্টিক্যাল (বড় সার্ভার), MongoDB নেটিভলি হরিজন্টাল শার্ডিং সাপোর্ট করে।"
      ],
      "commonMistakes": [
        "MongoDB-তে ট্রানজ্যাকশন চলে না বলা (MongoDB 4.0+ থেকে ফুল মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন সাপোর্ট করে)।"
      ],
      "proTips": [
        "বলুন: 'RDBMS-এ ডেটা রিলেশনের ওপর ভিত্তি করে মডেলিং করা হয়, আর MongoDB-তে অ্যাপ্লিকেশন কুয়েরি প্যাটার্নের ওপর ভিত্তি করে মডেলিং করা হয়।'"
      ]
    }
  },
  {
    "id": "db-mock-c1-documents-and-collections",
    "questionNumber": 8,
    "question": "What are documents and collections in MongoDB?",
    "banglaQuestion": "MongoDB-তে ডকুমেন্টস (Documents) এবং কালেকশনস (Collections) বলতে কী বোঝায়?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Documents",
      "Collections",
      "BSON"
    ],
    "english": {
      "quickAnswer": "A Document is an individual record stored in BSON format (analogous to an RDBMS row), and a Collection is a grouped set of documents (analogous to an RDBMS table).",
      "interviewSpeech": "In MongoDB, the foundational building blocks are Documents and Collections. A Document is a self-contained data record composed of field-value pairs encoded in BSON. It can contain primitive types, arrays, and nested subdocuments up to a 16MB limit. A Collection is a container for related documents. Unlike SQL tables, a MongoDB collection does not enforce identical column schemas on all its documents by default, allowing dynamic field evolution.",
      "deepDive": [
        "**Document Mapping**: Equivalent to a Row or Record in SQL, with a mandatory 12-byte `_id` primary key.",
        "**Collection Mapping**: Equivalent to a Table in SQL, but schema-flexible.",
        "**Storage Engine**: Under WiredTiger, collections are stored in individual files on disk and compressed."
      ],
      "commonMistakes": [
        "Thinking documents inside a collection must have the exact same fields.",
        "Exceeding the strict 16MB document size limit."
      ],
      "proTips": [
        "Highlight that while collections are schema-free by default, modern enterprise teams use Schema Validation or Mongoose ODM to enforce application invariants."
      ]
    },
    "bangla": {
      "quickAnswer": "ডকুমেন্ট হলো BSON ফরম্যাটে সংরক্ষিত একটি একক ডেটা রেকর্ড (SQL Row-এর সমতুল্য), আর কালেকশন হলো সম্পর্কিত ডকুমেন্টের একটি গ্রুপ (SQL Table-এর সমতুল্য)।",
      "interviewSpeech": "MongoDB-র মূল দুটি ভিত্তি হলো কালেকশন এবং ডকুমেন্ট। একটি ডকুমেন্ট হলো ফিল্ড ও ভ্যালু জোড়ার সমন্বয়ে তৈরি স্বয়ংসম্পূর্ণ BSON রেকর্ড—যা SQL টেবিলের একটি 'রো' (Row)-এর মতো। প্রতিটি ডকুমেন্টে একটি ইউনিক `_id` ফিল্ড থাকে এবং এর সর্বোচ্চ সাইজ ১৬ মেগাবাইট পর্যন্ত হতে পারে। অন্যদিকে কালেকশন হলো অনেকগুলো ডকুমেন্টের একটি বান্ডিল—যা SQL-এর টেবিলের মতো কাজ করে। তবে রিলেশনাল টেবিলের মতো কালেকশনের সব ডকুমেন্টের গঠন হুবহু এক হতে হয় না, এটি ডাইনামিক ফিল্ড সমর্থন করে।",
      "deepDive": [
        "**Document = SQL Row**: নেস্টেড অ্যারে ও সাব-ডকুমেন্ট ধারণ করতে পারে।",
        "**Collection = SQL Table**: ডাটাবেসের ভেতর আলাদা ফাইল হিসেবে কম্প্রেসড হয়ে ডিস্কে জমা হয়।",
        "**16MB লিমিট**: একক ডকুমেন্টের সাইজ ১৬MB-র বেশি হতে পারে না।"
      ],
      "commonMistakes": [
        "কালেকশনকে ডাটাবেস বলে গুলিয়ে ফেলা। ডাটাবেসের ভেতর থাকে কালেকশন, কালেকশনের ভেতর থাকে ডকুমেন্ট।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: কালেকশনে স্কিমা রুলস না থাকলেও Mongoose ODM বা MongoDB JSON Validator দিয়ে অ্যাপ লেভেলে স্কিমা কন্ট্রোল করা হয়।"
      ]
    }
  },
  {
    "id": "db-mock-c1-what-is-bson-why-use-bson",
    "questionNumber": 9,
    "question": "What is BSON? Why does MongoDB use BSON instead of JSON?",
    "banglaQuestion": "BSON কী? MongoDB কেন প্লেইন JSON-এর বদলে BSON ব্যবহার করে?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "BSON",
      "JSON",
      "Storage Engine",
      "Performance"
    ],
    "english": {
      "quickAnswer": "BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents that provides high-speed scanning, lightweight indexing, and rich data types like Date, ObjectId, and 64-bit integers.",
      "interviewSpeech": "BSON stands for Binary JSON. MongoDB uses BSON internally over human-readable JSON for three critical reasons: First, **Data Type Richness**—standard JSON only supports strings, numbers, booleans, arrays, and null. BSON adds essential types like `ObjectId`, `Date`, `Decimal128`, `64-bit Int`, and raw binary buffers. Second, **Traversal & Scan Speed**—BSON prepends field lengths and type tags to each field, allowing the database engine to quickly skip irrelevant fields in memory without parsing the entire string. Third, **Storage & Parsing Efficiency**—decoding binary representations is dramatically faster on CPU than parsing textual JSON strings on every query.",
      "deepDive": [
        "**Field Length Prefix**: BSON stores length at the head of every field; the engine jumps directly to target offsets.",
        "**ObjectId Integration**: Native 12-byte binary representation combining timestamp, machine hash, process id, and counter.",
        "**Storage Tradeoff**: BSON can sometimes occupy slightly more space than minified JSON due to type/length prefixes, but yields massive CPU traversal gains."
      ],
      "commonMistakes": [
        "Saying BSON is purely designed to compress file sizes (its main purpose is fast traversal and rich types, not maximum disk compression)."
      ],
      "proTips": [
        "Emphasize: 'JSON is great for network interchange; BSON is optimized for database storage engine traversal and indexing.'"
      ]
    },
    "bangla": {
      "quickAnswer": "BSON (Binary JSON) হলো JSON-এর একটি বাইনারি রূপ যা মেমোরিতে উচ্চগতির ট্রাভার্সাল, দ্রুত পার্সিং এবং Date ও ObjectId-এর মতো অতিরিক্ত ডেটা টাইপ সমর্থন করে।",
      "interviewSpeech": "BSON মানে হলো Binary JSON। প্লেইন টেক্সট JSON-এর বদলে MongoDB BSON ব্যবহার করার ৩টি প্রধান কারণ রয়েছে: ১) **রিচ ডেটা টাইপ**: সাধারণ JSON-এ শুধু স্ট্রিং, নাম্বার, বুলিয়ান ও নাল থাকে; ডেট বা বাইনারি থাকে না। BSON-এ `ObjectId`, `Date`, `Decimal128`, `Regex` ইত্যাদি নেটিভ টাইপ রয়েছে। ২) **উচ্চগতির ট্রাভার্সাল (Fast Traversal)**: BSON প্রতিটি ফিল্ডের শুরুতে তার দৈর্ঘ্য (length) বাইনারি আকারে লিখে রাখে, ফলে ডাটাবেস ইঞ্জিন পুরো টেক্সট না পড়ে সরাসরি মেমরি পয়েন্টার স্কিপ করে কাঙ্ক্ষিত ফিল্ডে পৌঁছাতে পারে। ৩) **সিপিইউ পার্সিং স্পিড**: বাইনারি ডিকোড করা টেক্সট স্ট্রিং পার্স করার চেয়ে বহুগুণ ফাস্ট।",
      "deepDive": [
        "**ফিল্ড লেন্থ প্রিফিক্স**: অফসেট জাম্পিংয়ের মাধ্যমে কুয়েরি স্ক্যান গতি বাড়ায়।",
        "**ObjectId সাপোর্ট**: ১২-বাইটের ইউনিক টাইমস্ট্যাম্প-ভিত্তিক আইডি নেটিভলি সংরক্ষণ করে।"
      ],
      "commonMistakes": [
        "BSON শুধু সাইজ ছোট করার জন্য তৈরি—এমনটি ভাবা ভুল। মূলত এটি মেমোরিতে ফাস্ট জাম্পিং ও টাইপ সেফটির জন্য তৈরি।"
      ],
      "proTips": [
        "বলুন: ক্লায়েন্ট ও ব্রাউজারের মধ্যে JSON দিয়ে কমিউনিকেশন হলেও MongoDB সার্ভার ইঞ্জিনের ভেতর ডেটা সম্পূর্ণ BSON আকারে থাকে।"
      ]
    }
  },
  {
    "id": "db-mock-c1-what-is-mongoose-why-with-mongodb",
    "questionNumber": 10,
    "question": "What is Mongoose and why does it come with MongoDB?",
    "banglaQuestion": "Mongoose কী এবং কেন এটি MongoDB-র সাথে বহুলভাবে ব্যবহৃত হয়?",
    "topic": "MongoDB & Mongoose",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "ODM",
      "Node.js",
      "Validation"
    ],
    "english": {
      "quickAnswer": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js that provides schema definition, type casting, validation, middleware hooks, and business logic encapsulation.",
      "interviewSpeech": "Mongoose is an elegant Object Data Modeling (ODM) library designed for Node.js and MongoDB. While MongoDB is natively schema-less, real-world applications require discipline, predictable structures, and business rules. Mongoose bridges this gap by letting developers define strict application-level Schemas, perform automated data validation before write operations, leverage pre/post middleware hooks (like password hashing), implement virtual properties, and build expressive relationship models using populate.",
      "deepDive": [
        "**Native Driver vs ODM**: Native driver sends raw BSON queries; Mongoose wraps raw queries in models, validation pipelines, and lifecycle events.",
        "**Validation Pipeline**: Rejects invalid types or missing required fields before touching the database network socket.",
        "**Middleware / Hooks**: Intercepts `save`, `validate`, or `remove` to enforce business invariants."
      ],
      "commonMistakes": [
        "Calling Mongoose an ORM (it is technically an ODM because MongoDB is a document store, not a relational engine).",
        "Believing Mongoose creates tables in MongoDB."
      ],
      "proTips": [
        "State that Mongoose introduces slight CPU overhead due to document hydration, which can be bypassed using `.lean()` for high-throughput read operations."
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose হলো Node.js-এর জন্য তৈরি একটি Object Data Modeling (ODM) লাইব্রেরি যা MongoDB-তে স্কিমা ভ্যালিডেশন, মিডলওয়্যার হুক, টাইপ কাস্টিং এবং বিজনেস লজিক পরিচালনায় সাহায্য করে।",
      "interviewSpeech": "Mongoose হলো Node.js এবং MongoDB-র মধ্যকার একটি শক্তিশালী ODM (Object Data Modeler) ব্রিজ। MongoDB নিজে স্কিমাহীন হওয়ায় যেকোনো ফিল্ড ভুলবশত ঢুকে ডেটা নষ্ট হতে পারে। Mongoose অ্যাপ্লিকেশন লেভেলে কঠোর Schema ডিফাইন করতে দেয়, ডেটাবেসে লেখার আগেই রিকোয়ার্ড ফিল্ড ও ডাটা টাইপ ভ্যালিডেট করে, পাসওয়ার্ড হ্যাশিংয়ের জন্য `pre('save')` হুক ব্যবহারের সুবিধা দেয় এবং মডেলের মাধ্যমে চমৎকার কুয়েরি মেথড প্রদান করে। কাঁচা নেটিভ ড্রাইভার দিয়ে কাজ করার চেয়ে Mongoose কোডকে অনেক বেশি ক্লিন, মেইনটেইনেবল ও বাগ-ফ্রি রাখে।",
      "deepDive": [
        "**ODM বনাম ড্রাইভার**: ড্রাইভার সরাসরি কুয়েরি পাঠায়; Mongoose তার ওপর ভ্যালিডেশন ও ক্লাস মেথড যুক্ত করে।",
        "**হুক ও মিডলওয়্যার**: সেভ বা ডিলিটের আগে স্বয়ংক্রিয়ভাবে বিজনেস রুলস এক্সিকিউট করা যায়।"
      ],
      "commonMistakes": [
        "Mongoose-কে ORM বলা (এটি আসলে ODM কারণ রিলেশনাল টেবিল নয়, ডকুমেন্ট নিয়ে কাজ করে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে উল্লেখ করুন: Mongoose ডকুমেন্টে মেথড যুক্ত থাকার কারণে কিছুটা মেমোরি খরচ বেশি হয়, যা `.lean()` দিয়ে অপ্টিমাইজ করা যায়।"
      ]
    }
  },
  {
    "id": "db-mock-c1-purpose-mongoose-schema-model",
    "questionNumber": 11,
    "question": "What is the purpose of Mongoose schema and model?",
    "banglaQuestion": "Mongoose-এ Schema এবং Model-এর উদ্দেশ্য কী এবং এরা কীভাবে কাজ করে?",
    "topic": "MongoDB & Mongoose",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Schema",
      "Model",
      "Architecture"
    ],
    "english": {
      "quickAnswer": "A Schema defines the structure, data types, and validation rules of documents, while a Model is the compiled constructor compiled from that schema used to query and mutate the database collection.",
      "interviewSpeech": "The Schema and Model represent the architectural separation of configuration versus execution. A Schema acts as the blueprint: it specifies field names, data types, required constraints, default values, custom validators, and lifecycle middleware. It cannot query the database directly. A Model is a compiled JavaScript class created via `mongoose.model('User', userSchema)`. The Model binds the schema to an actual MongoDB collection, providing static methods like `find()`, `create()`, and `updateOne()`, while instances of the model represent active documents.",
      "deepDive": [
        "**Schema (Blueprint)**: Static metadata and rules. Purely in-memory definition.",
        "**Model (Factory & Query Engine)**: Provides active collection interface and connection binding.",
        "**Document Instance**: Represents an individual record with `.save()` and `.isModified()` capabilities."
      ],
      "commonMistakes": [
        "Attempting to run `userSchema.find()` instead of calling `User.find()`.",
        "Thinking Model and Schema are the exact same thing."
      ],
      "proTips": [
        "Use the architectural analogy: 'Schema is the architectural blueprint of a house; Model is the factory that builds and interacts with houses.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Schema হলো ডকুমেন্টের ফিল্ড, টাইপ ও ভ্যালিডেশন রুলসের ব্লুপ্রিন্ট; আর Model হলো সেই Schema থেকে তৈরি হওয়া অ্যাক্টিভ ক্লাস যা দিয়ে কালেকশনে কুয়েরি ও CRUD চালানো হয়।",
      "interviewSpeech": "Schema এবং Model হলো কনফিগারেশন এবং এক্সিকিউশনের সুন্দর সমন্বয়। Schema হলো একটি নকশা বা ব্লুপ্রিন্ট—যা নির্ধারণ করে ডকুমেন্টে কী কী ফিল্ড থাকবে, সেগুলোর ডেটা টাইপ কেমন হবে এবং কী কী ভ্যালিডেশন চলবে। কিন্তু Schema নিজে সরাসরি ডাটাবেসে কুয়েরি করতে পারে না। যখন আমরা `mongoose.model('User', userSchema)` কল করি, Mongoose একটি Model তৈরি করে। এই মডেল সংশ্লিষ্ট MongoDB কালেকশনের সাথে যুক্ত হয়ে `find()`, `create()`, `deleteMany()` ইত্যাদির মতো কুয়েরি ইন্টারফেস প্রদান করে।",
      "deepDive": [
        "**Schema**: শুধুমাত্র আর্কিটেকচারাল রুলস ও মেটাডেটা ধারণ করে।",
        "**Model**: ডাটাবেস কালেকশনে কুয়েরি চালানোর মূল ইন্টারফেস।",
        "**Document**: মডেলের একটি একক ইনস্ট্যান্স।"
      ],
      "commonMistakes": [
        "Schema দিয়ে সরাসরি `.find()` ডাকার চেষ্টা করা।"
      ],
      "proTips": [
        "সহজ উপমা দিন: 'Schema হলো বাড়ি তৈরির নকশা, আর Model হলো ঠিকাদার যে বাস্তবে ইট-সিমেন্ট দিয়ে বাড়ি তৈরি বা মেইনটেন করে।'"
      ]
    }
  },
  {
    "id": "db-mock-c1-diff-primary-foreign-key",
    "questionNumber": 12,
    "question": "What is the difference between primary key and foreign key?",
    "banglaQuestion": "Primary Key এবং Foreign Key-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "SQL & Relational DB",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "SQL",
      "Keys",
      "Primary Key",
      "Foreign Key",
      "RDBMS"
    ],
    "english": {
      "quickAnswer": "A Primary Key uniquely identifies each row within its own table (never null), while a Foreign Key is a column that references the primary key of another table to establish referential integrity.",
      "interviewSpeech": "In relational databases, keys establish identity and relationships. A Primary Key is a unique, indexed constraint on one or more columns that ensures every record in a table has an immutable, unique identifier; it strictly rejects null values, and each table can have only one primary key. A Foreign Key is a constraint placed on a column that points to the primary key of another parent table. Its purpose is to enforce Referential Integrity—preventing orphan records by disallowing child entries that lack a valid parent.",
      "deepDive": [
        "**Primary Key**: Unique + Not Null. Backed automatically by a unique clustered index in engines like InnoDB.",
        "**Foreign Key**: Can accept duplicates and null values (e.g. optional managerId pointing to employeeId).",
        "**Cascading Actions**: Foreign keys support `ON DELETE CASCADE` and `ON UPDATE CASCADE` to synchronize parent-child state."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Primary Key & Foreign Key in SQL",
        "code": "CREATE TABLE users (\n  id SERIAL PRIMARY KEY, -- Primary Key\n  username VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE orders (\n  id SERIAL PRIMARY KEY,\n  user_id INT NOT NULL,\n  amount DECIMAL(10, 2),\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- Foreign Key\n);"
      },
      "commonMistakes": [
        "Thinking a table can have multiple primary keys (it can have a composite primary key made of multiple columns, but only one primary key constraint).",
        "Assuming foreign keys cannot contain NULL values (they can, if the relationship is optional)."
      ],
      "proTips": [
        "Always remind the interviewer that foreign key columns should be indexed in SQL to prevent full-table scans during JOINs and cascade checks."
      ]
    },
    "bangla": {
      "quickAnswer": "Primary Key একটি টেবিলের প্রতিটি রেকর্ডকে অনন্যভাবে চিহ্নিত করে (কখনই null হয় না), আর Foreign Key অন্য টেবিলের Primary Key-কে রেফারেন্স করে টেবিল দুটির মধ্যে সম্পর্ক ও ইন্টিগ্রিটি বজায় রাখে।",
      "interviewSpeech": "রিলেশনাল ডাটাবেসে আইডেন্টিটি ও রিলেশনশিপ রক্ষায় এই দুটি কি অপরিহার্য। Primary Key হলো এমন একটি ইউনিক কলাম যা একটি টেবিলের প্রতিটি রো-কে এককভাবে চিহ্নিত করে। এটি কখনো NULL হতে পারে না এবং একটি টেবিলে একটিই প্রাইমারি কি থাকতে পারে। অন্যদিকে, Foreign Key হলো এমন একটি কলাম যা অন্য একটি প্যারেন্ট টেবিলের Primary Key-কে রেফারেন্স করে। এর মূল কাজ হলো রেফারেনশিয়াল ইন্টিগ্রিটি নিশ্চিত করা—যাতে ডাটাবেসে কোনো এতিম (orphan) চাইল্ড রেকর্ড তৈরি হতে না পারে।",
      "deepDive": [
        "**Primary Key**: Unique + NOT NULL (ইঞ্জিনে স্বয়ংক্রিয় ক্ল্যাস্টারড ইনডেক্স তৈরি হয়)।",
        "**Foreign Key**: ডুপ্লিকেট ও NULL মান নিতে পারে এবং ক্যাসকেড ডিলিট সাপোর্ট করে।"
      ],
      "commonMistakes": [
        "একটি টেবিলে একাধিক প্রাইমারি কি থাকতে পারে ভাবা। একাধিক কলাম মিলে কম্পোজিট কি হতে পারে, তবে প্রাইমারি কি একটাই থাকে।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: Foreign Key কলামে সবসময় B-Tree ইনডেক্স তৈরি করা উচিত, নয়তো JOIN বা ডিলিটের সময় টেবিল লক ও পারফরম্যান্স ইস্যু হতে পারে।"
      ]
    }
  },
  {
    "id": "db-mock-c1-diff-inner-outer-join",
    "questionNumber": 13,
    "question": "What is the difference between inner and outer join?",
    "banglaQuestion": "Inner Join এবং Outer Join-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "SQL & Relational DB",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "SQL",
      "JOIN",
      "Inner Join",
      "Outer Join"
    ],
    "english": {
      "quickAnswer": "An INNER JOIN returns only the rows that satisfy the matching condition in both tables, whereas an OUTER JOIN returns matched rows plus unmatched rows (padded with NULLs) from one or both tables.",
      "interviewSpeech": "The difference lies in how unmatched records are handled. An INNER JOIN computes the strict intersection of two tables based on a join predicate—any row that lacks a corresponding match in either table is excluded from the result set. An OUTER JOIN, on the other hand, preserves unmatched rows: a LEFT OUTER JOIN keeps all rows from the left table; a RIGHT OUTER JOIN keeps all rows from the right table; and a FULL OUTER JOIN keeps all rows from both tables, filling in missing columns with NULLs where matches do not exist.",
      "deepDive": [
        "**INNER JOIN**: Set intersection (A ∩ B). Most performant because non-matching rows are pruned early.",
        "**LEFT OUTER JOIN**: Set A, plus matched records from B. Ideal when optional relations exist (e.g. users who may have zero orders).",
        "**FULL OUTER JOIN**: Set union (A ∪ B). Supported in PostgreSQL and SQL Server; emulated via UNION in MySQL."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Inner vs Left Outer Join",
        "code": "-- Inner Join: Only customers with at least one order\nSELECT c.name, o.order_id\nFROM customers c\nINNER JOIN orders o ON c.id = o.customer_id;\n\n-- Left Join: All customers, even those with NO orders (o.order_id will be NULL)\nSELECT c.name, o.order_id\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;"
      },
      "commonMistakes": [
        "Forgetting that MySQL does not have a native FULL OUTER JOIN keyword (requires LEFT JOIN UNION RIGHT JOIN)."
      ],
      "proTips": [
        "Explain when to use which: 'Use INNER JOIN when data must strictly coexist; use LEFT JOIN when you need the complete parent entity regardless of child records.'"
      ]
    },
    "bangla": {
      "quickAnswer": "INNER JOIN শুধুমাত্র উভয় টেবিলে ম্যাচ করা রেকর্ডগুলো রিটার্ন করে, আর OUTER JOIN ম্যাচ করা রেকর্ডের পাশাপাশি অমিল রেকর্ডগুলোকেও (NULL মান দিয়ে) ফলাফল সেটে যুক্ত করে।",
      "interviewSpeech": "পার্থক্যটি মূলত অমিল ডেটা হ্যান্ডলিংয়ের মধ্যে। INNER JOIN হলো দুটি টেবিলের ইন্টারসেকশন (A ∩ B)—অর্থাৎ যে রোগুলোর জয়েন কন্ডিশন উভয় টেবিলেই সত্য হয়েছে, শুধুই সেগুলো ফলাফলে আসবে। কোনো একপাশে ম্যাচ না থাকলে সেই রো বাদ পড়ে যাবে। অন্যদিকে OUTER JOIN অমিল রেকর্ডগুলোকে বাদ না দিয়ে টিকিয়ে রাখে: LEFT JOIN বাম টেবিলের সব রেকর্ড রাখে, RIGHT JOIN ডান টেবিলের সব রেকর্ড রাখে এবং FULL OUTER JOIN উভয় টেবিলের সব রেকর্ড বজায় রাখে এবং যেখানে ম্যাচ নেই সেখানে NULL ভ্যালু বসিয়ে দেয়।",
      "deepDive": [
        "**INNER JOIN**: শুধুমাত্র কমন ডেটা ফিল্টার করে।",
        "**LEFT JOIN**: প্যারেন্ট টেবিলের সম্পূর্ণ তালিকা দেখাতে ব্যবহৃত হয় (যেমন: যেসব ইউজার কখনো কোনো অর্ডার করেনি তাদেরও লিস্টে রাখা)।",
        "**FULL JOIN**: উভয় পাশের সব ডেটা মার্চ করে।"
      ],
      "commonMistakes": [
        "MySQL-এ সরাসরি FULL OUTER JOIN কিওয়ার্ড চালানো যায় না, সেখানে LEFT ও RIGHT জয়েনকে UNION করতে হয়।"
      ],
      "proTips": [
        "ভেন ডায়াগ্রাম (Venn Diagram)-এর উপমা দিয়ে ইন্টারভিউয়ারকে বুঝিয়ে দিন।"
      ]
    }
  },
  {
    "id": "db-mock-c1-database-denormalization",
    "questionNumber": 14,
    "question": "What is database denormalization?",
    "banglaQuestion": "ডাটাবেস ডিনর্মালাইজেশন (Denormalization) কী এবং এটি কখন করা হয়?",
    "topic": "SQL & Relational DB",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "Denormalization",
      "Normalization",
      "Performance",
      "Optimization"
    ],
    "english": {
      "quickAnswer": "Denormalization is the deliberate architectural strategy of introducing redundant data into a normalized database to optimize read performance and eliminate expensive joins.",
      "interviewSpeech": "Denormalization is a calculated optimization technique where you intentionally inject redundant or pre-computed data into a database schema. While Normalization optimizes for write integrity and minimizes data duplication (3NF), it forces read queries to execute costly multi-table JOINs. In read-heavy systems where reads outnumber writes 100 to 1, denormalization trades disk space and write complexity for sub-millisecond read speed. A classic example is storing `author_name` directly on a `posts` record to eliminate an Author table join on every feed load.",
      "deepDive": [
        "**The Core Tradeoff**: Blazing fast reads vs. higher write complexity and potential data inconsistency risks.",
        "**Common Denormalization Patterns**: Embedding child items, caching aggregated counters (e.g. `like_count`), and pre-computing summary tables.",
        "**Sync Strategies**: Application transactions, database triggers, or asynchronous CDC (Change Data Capture) pipelines to keep duplicate fields updated."
      ],
      "commonMistakes": [
        "Denormalizing before benchmarking (premature optimization). Always normalize first, measure bottlenecks, then denormalize selectively.",
        "Forgetting to update all denormalized copies during a write operation."
      ],
      "proTips": [
        "Mention NoSQL alignment: 'MongoDB data modeling is inherently denormalized by default due to embedded documents.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ডিনর্মালাইজেশন হলো একটি সচেতন কৌশল যেখানে কুয়েরির গতি বাড়াতে এবং ব্যয়বহুল JOIN কমাতে নরমালাইজড ডাটাবেসে উদ্দেশ্যমূলকভাবে কিছু অতিরিক্ত ডুপ্লিকেট ডেটা রাখা হয়।",
      "interviewSpeech": "ডিনর্মালাইজেশন হলো একটি অপ্টিমাইজেশন স্ট্র্যাটেজি যেখানে রিড পারফরম্যান্স দ্রুত করার জন্য জেনে-বুঝে কিছু ডুপ্লিকেট বা ক্যালকুলেটেড ডেটা স্কিমাতে রাখা হয়। নরমালাইজেশন ডেটা ডুপ্লিকেশন রোধ করলেও রিড করার সময় অনেকগুলো টেবিল JOIN করতে হয়, যা হাই-ট্রাফিকে ডাটাবেসকে ধীরগতির করে দেয়। যে সিস্টেমে রাইটের চেয়ে রিড অনেক গুণ বেশি (Read-Heavy Systems), সেখানে JOIN কমাতে পোস্ট টেবিলের ভেতরেই সরাসরি `author_name` বা `comment_count` ফিল্ড রেখে দেওয়া হয়। ফলে এক কুয়েরিতেই সব ডেটা দ্রুত পাওয়া যায়।",
      "deepDive": [
        "**ট্রেড-অফ**: সুপারফাস্ট রিড স্পিড বনাম কিছুটা রাইট জটিলতা (কারণ মূল ডেটা আপডেট হলে ডুপ্লিকেট জায়গাতেও আপডেট করতে হয়)।",
        "**কখন করবেন**: অ্যানালিটিক্যাল ড্যাশবোর্ড, সোশ্যাল মিডিয়া কাউন্টার, এবং হাই-থ্রুপুট এপিআই-তে।"
      ],
      "commonMistakes": [
        "শুরুতেই ডিনর্মালাইজ করা। নিয়ম হলো প্রথমে ৩য় নরমাল ফর্ম (3NF) পর্যন্ত সাজানো, তারপর পারফরম্যান্স বটলনেক দেখলে নির্দিষ্ট জায়গায় ডিনর্মালাইজ করা।"
      ],
      "proTips": [
        "বলুন: NoSQL ডকুমেন্ট ডাটাবেস (MongoDB) মূল ধারণাতেই ডিনর্মালাইজড প্যাটার্ন ব্যবহার করে।"
      ]
    }
  },
  {
    "id": "db-mock-c1-diff-horizontal-vertical-scaling",
    "questionNumber": 15,
    "question": "What is the difference between horizontal scaling and vertical scaling?",
    "banglaQuestion": "Horizontal Scaling এবং Vertical Scaling-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "Scaling & Optimization",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Scaling",
      "Horizontal Scaling",
      "Vertical Scaling",
      "Sharding"
    ],
    "english": {
      "quickAnswer": "Vertical Scaling (Scale-Up) means adding more power (CPU, RAM, SSD) to an existing single server, while Horizontal Scaling (Scale-Out) means adding more machine nodes to a distributed cluster.",
      "interviewSpeech": "The difference centers on capacity limits, cost curves, and architecture. Vertical Scaling (Scale-Up) involves upgrading your current server with a faster multi-core CPU, more RAM, and NVMe drives. It requires zero application code changes, but suffers from hard hardware limits and high financial costs at the top tier, alongside creating a Single Point of Failure (SPOF). Horizontal Scaling (Scale-Out) involves distributing your database workload across dozens of smaller commodity servers via sharding or replication. While it provides virtually limitless scalability and high fault tolerance, it introduces complex distributed concerns such as network latency, partition tolerance, and eventual consistency.",
      "deepDive": [
        "**Vertical Scaling (Scale Up)**: Simpler architecture, zero distributed network overhead, but has an inevitable ceiling.",
        "**Horizontal Scaling (Scale Out)**: Near-infinite scaling via sharding; native to MongoDB, Cassandra, and CockroachDB.",
        "**Hybrid Cloud Pattern**: Most modern platforms vertically scale instances to a sweet-spot size, then horizontally scale read replicas and partitions."
      ],
      "commonMistakes": [
        "Assuming horizontal scaling is always better without factoring in network latency and distributed transaction complexity."
      ],
      "proTips": [
        "Use the transportation analogy: 'Vertical scaling is upgrading to a larger truck; horizontal scaling is deploying a fleet of vans.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Vertical Scaling (Scale-Up) মানে বিদ্যমান সার্ভারে বেশি CPU/RAM যোগ করা, আর Horizontal Scaling (Scale-Out) মানে ক্লাস্টারে একাধিক নতুন সার্ভার নোড যুক্ত করা।",
      "interviewSpeech": "স্কেলিংয়ের মূল দুটি দর্শন হলো স্কেল-আপ এবং স্কেল-আউট। Vertical Scaling হলো বিদ্যমান সিঙ্গেল সার্ভারটিকে আরও শক্তিশালী করা—যেমন 16GB র‍্যাম থেকে 128GB র‍্যাম এবং 8 কোর থেকে 64 কোর প্রসেসরে আপগ্রেড করা। এতে কোনো কোড পরিবর্তন করতে হয় না, তবে এর একটি হার্ডওয়্যার লিমিট রয়েছে এবং একটি পর্যায়ে খরচ অসম্ভব বেড়ে যায়, সাথে সিঙ্গেল পয়েন্ট অফ ফেইলিউর থেকে যায়। অন্যদিকে Horizontal Scaling হলো ক্লাস্টারে অনেকগুলো সাধারণ সার্ভার বা নোড যোগ করে শার্ডিংয়ের মাধ্যমে ডেটা ভাগ করে রাখা। এটি সীমাহীন স্কেলেবিলিটি এবং হাই-অ্যাভেইলেবিলিটি নিশ্চিত করলেও নেটওয়ার্ক লেটেন্সি ও ডিস্ট্রিবিউটেড জটিলতা তৈরি করে।",
      "deepDive": [
        "**Vertical**: সহজে বাস্তবায়নযোগ্য, কিন্তু হার্ডওয়্যারের সর্বোচ্চ সীমা রয়েছে।",
        "**Horizontal**: ক্লাউড-নেটিভ এবং NoSQL ডাটাবেসের মূল ভিত্তি (অটোমেটিক শার্ডিং)।"
      ],
      "commonMistakes": [
        "ভাবা যে Horizontal Scaling করলেই সব সমাধান হয়ে যায় (ডিস্ট্রিবিউটেড ট্রানজ্যাকশন কিন্তু অনেক জটিল)।"
      ],
      "proTips": [
        "উপমা দিন: 'ভার্টিক্যাল স্কেলিং হলো একটি ট্রাকে বেশি মালামাল তোলার জন্য বড় ট্রাক কেনা, আর হরিজন্টাল স্কেলিং হলো ১০টি ভ্যানগাড়ি নামিয়ে কাজ ভাগ করে দেওয়া।'"
      ]
    }
  },
  {
    "id": "db-mock-c1-database-for-banking-application",
    "questionNumber": 16,
    "question": "Which database would you choose for a Banking Application?",
    "banglaQuestion": "একটি ব্যাংকিং বা ফাইন্যান্সিয়াল অ্যাপ্লিকেশনের জন্য আপনি কোন ডাটাবেস বাছাই করবেন এবং কেন?",
    "topic": "SQL & Relational DB",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Banking",
      "PostgreSQL",
      "ACID",
      "Transactions",
      "System Design"
    ],
    "english": {
      "quickAnswer": "An ACID-compliant Relational Database like PostgreSQL (or enterprise Oracle/CockroachDB) because absolute consistency, serializable transactions, and strict auditability are strictly non-negotiable for financial ledgers.",
      "interviewSpeech": "For a core banking and financial ledger system, I would unequivocally choose a battle-tested relational database like PostgreSQL. In financial systems, the primary invariant is zero tolerance for data corruption, phantom balances, or eventual consistency lag. PostgreSQL offers rigorous ACID guarantees, Serializable Isolation levels, robust foreign key constraints, Write-Ahead Logging (WAL) for point-in-time recovery, and comprehensive audit trail extensions. If multi-region horizontal scaling is required, a distributed SQL database like CockroachDB would be selected. NoSQL document stores might be used for non-critical peripherals like notification history or session logs, but the financial core must remain in an ACID relational ledger.",
      "deepDive": [
        "**Strict ACID vs Eventual Consistency**: You cannot tolerate temporary balance discrepancies in banking; an account transfer must atomically debit one account and credit another.",
        "**Isolation Levels**: `SERIALIZABLE` or `REPEATABLE READ` prevents race conditions like double-spending.",
        "**Polyglot Persistence**: Core financial ledger in PostgreSQL; Analytics in ClickHouse/Snowflake; User activity feed in MongoDB/Redis."
      ],
      "commonMistakes": [
        "Saying 'I would choose MongoDB because it is faster' without understanding that financial systems value consistency far above raw write speed."
      ],
      "proTips": [
        "Introduce the concept of 'Double-Entry Bookkeeping' in SQL where balance is derived from an immutable ledger of credits and debits rather than a mutable counter."
      ]
    },
    "bangla": {
      "quickAnswer": "কঠোর ACID ট্রানজ্যাকশন, সিরিয়ালাইজেবল আইসোলেশন এবং ডেটা কনসিস্টেন্সির জন্য PostgreSQL (বা ডিস্ট্রিবিউটেড SQL CockroachDB) বেছে নেব।",
      "interviewSpeech": "ব্যাংকিং ও ফাইন্যান্সিয়াল অ্যাপ্লিকেশনের মূল কোর সিস্টেমের জন্য আমি নিশ্চিতভাবে একটি রিলেশনাল ডাটাবেস—বিশেষ করে PostgreSQL বেছে নেব। ব্যাংকে কোনো অবস্থাতেই ডেটা লস, ফ্যান্টম ব্যালেন্স বা কোনো অসামঞ্জস্য মেনে নেওয়া যায় না। একজন ব্যবহারকারী টাকা পাঠালে তার একাউন্ট থেকে ডেবিট হওয়া এবং অন্য একাউন্টে ক্রেডিট হওয়া অবশ্যই একটি একক পারমাণবিক (Atomic) ট্রানজ্যাকশনের মধ্যে সম্পন্ন হতে হবে। PostgreSQL সর্বোচ্চ মানের ACID গ্যারান্টি, কড়া ফরেন কি রেগুলেশন এবং ক্র্যাশ রিকভারির জন্য Write-Ahead Logging (WAL) নিশ্চিত করে। আনুষঙ্গিক কাজের জন্য (যেমন নোটিফিকেশন হিস্ট্রি) NoSQL ব্যবহার করা যেতে পারে, তবে মেইন লেজারের জন্য রিলেশনাল ডাটাবেসই একমাত্র নির্ভরযোগ্য সমাধান।",
      "deepDive": [
        "**অ্যাটমিক ব্যালেন্স ট্রান্সফার**: মাঝপথে সার্ভার ক্র্যাশ করলেও টাকা কখনোই হাওয়া হতে পারবে না।",
        "**ডাবল-এন্ট্রি বুককিপিং**: ব্যালেন্স শুধু একটি সংখ্যা নয়, ডেবিট ও ক্রেডিটের হিসেব মিলিয়ে তৈরি হয়।"
      ],
      "commonMistakes": [
        "শুধুমাত্র 'ফাস্ট' বলে ব্যাংকের মূল ব্যালেন্স হিসেবের জন্য NoSQL ডাটাবেসের নাম বলে ফেলা।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Polyglot Persistence' টার্মটি উল্লেখ করুন: মূল ব্যাংক একাউন্ট SQL-এ, আর নোটিফিকেশন বা ইউজার ফিড NoSQL-এ রাখা।"
      ]
    }
  },
  {
    "id": "db-mock-c2-indexing-in-mongodb",
    "questionNumber": 17,
    "question": "What is indexing in MongoDB?",
    "banglaQuestion": "MongoDB-তে ইনডেক্সিং (Indexing) কী এবং এটি কীভাবে কাজ করে?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Indexing",
      "B-Tree",
      "Performance",
      "Optimization"
    ],
    "english": {
      "quickAnswer": "Indexing in MongoDB creates specialized B-Tree data structures holding a small portion of the collection's data to avoid expensive full-collection scans (COLLSCAN) and provide logarithmic search performance (IXSCAN).",
      "interviewSpeech": "Without indexes, MongoDB must perform a full collection scan (`COLLSCAN`), inspecting every single document in the collection to satisfy a query. An Index is a dedicated, highly ordered B-Tree data structure that stores the values of specific fields alongside pointers to the actual documents on disk. When indexed (`IXSCAN`), MongoDB performs a binary search in O(log n) time, drastically slashing I/O operations and CPU usage. MongoDB automatically creates a unique index on the `_id` field upon collection creation, and developers can create single field, compound, multikey, text, or geospatial indexes.",
      "deepDive": [
        "**COLLSCAN vs IXSCAN**: COLLSCAN scans N documents; IXSCAN traverses a balanced B-Tree in log(N) operations.",
        "**Covered Queries**: If all queried fields and return projections exist within the index itself, MongoDB satisfies the query entirely from RAM without touching disk documents.",
        "**Write Tradeoff**: Every index speeds up reads but slightly penalizes writes (`insert`, `update`, `delete`) because the index tree must be updated synchronously."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Creating Single and Compound Indexes in MongoDB",
        "code": "// Create single field index on email\ndb.users.createIndex({ email: 1 }, { unique: true });\n\n// Create compound index on status and createdAt\ndb.orders.createIndex({ status: 1, createdAt: -1 });\n\n// Analyze query plan with explain()\ndb.orders.find({ status: \"completed\" }).sort({ createdAt: -1 }).explain(\"executionStats\");"
      },
      "commonMistakes": [
        "Creating too many indexes on high-write collections, hurting ingestion throughput.",
        "Forgetting index prefix ordering in compound indexes (Equality, Sort, Range - ESR rule)."
      ],
      "proTips": [
        "Mention the 'ESR Rule' (Equality first, Sort second, Range third) when architecting compound indexes in technical interviews."
      ]
    },
    "bangla": {
      "quickAnswer": "MongoDB-তে ইনডেক্সিং হলো একটি বিশেষায়িত B-Tree ডেটা স্ট্রাকচার যা পুরো কালেকশন স্ক্যান (COLLSCAN) না করে খুব দ্রুত নির্দিষ্ট ডেটা খুঁজে বের করতে সাহায্য করে।",
      "interviewSpeech": "ইনডেক্স ছাড়া MongoDB-কে প্রতিটি ডকুমেন্টে হাতড়ে ডেটা খুঁজতে হয়, যাকে কালেকশন স্ক্যান (`COLLSCAN`) বলে—যা ডাটাবেসকে মারাত্মক ধীর করে দেয়। ইনডেক্সিং একটি সাজানো B-Tree স্ট্রাকচার তৈরি করে যাতে নির্দিষ্ট ফিল্ডের মান এবং ডিস্কে তার মেমোরি পয়েন্টার জমা থাকে। ফলে O(log n) সময়ে খুব দ্রুত ইনডেক্স স্ক্যান (`IXSCAN`) করে রেজাল্ট পাওয়া যায়। MongoDB স্বয়ংক্রিয়ভাবে `_id` ফিল্ডে একটি ইউনিক ইনডেক্স তৈরি করে রাখে। ডেভেলপাররা প্রয়োজন অনুযায়ী সিঙ্গেল, কম্পাউন্ড বা টেক্সট ইনডেক্স বানাতে পারেন।",
      "deepDive": [
        "**COLLSCAN বনাম IXSCAN**: ইনডেক্স থাকলে লক্ষ লক্ষ রেকর্ডের মধ্যেও কয়েক মিলি-সেকেন্ডে কুয়েরি রেজাল্ট আসে।",
        "**Covered Query**: কুয়েরির সব ফিল্ড ইনডেক্সের ভেতর থাকলে ডিস্কে হাতই দিতে হয় না, মেমোরি থেকেই রেজাল্ট যায়।",
        "**ট্রেড-অফ**: ইনডেক্স রিড ফাস্ট করে, তবে বেশি ইনডেক্স থাকলে ইনসার্ট/আপডেট কিছুটা স্লো হয় কারণ ট্রিতে নতুন ভ্যালু সাজাতে হয়।"
      ],
      "commonMistakes": [
        "প্রয়োজন ছাড়াই সব ফিল্ডে ইনডেক্স বসিয়ে রাইট পারফরম্যান্স নষ্ট করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'ESR Rule' (Equality, Sort, Range) উল্লেখ করুন—কম্পাউন্ড ইনডেক্স বানানোর এটি গোল্ডেন রুল।"
      ]
    }
  },
  {
    "id": "db-mock-c2-aggregation-framework-mongodb",
    "questionNumber": 18,
    "question": "What is the aggregation framework of MongoDB?",
    "banglaQuestion": "MongoDB-র Aggregation Framework কী এবং এটি কীভাবে কাজ করে?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Aggregation",
      "Pipeline",
      "Analytics"
    ],
    "english": {
      "quickAnswer": "The Aggregation Framework is a high-performance multi-stage pipeline for data processing, filtering, grouping, reshaping, and analytics natively executed inside MongoDB's engine.",
      "interviewSpeech": "MongoDB's Aggregation Framework is inspired by Unix data processing pipelines. Documents pass through a sequence of stages where each stage transforms the stream of documents and passes the output to the next stage. Common stages include `$match` (filtering), `$group` (aggregating and computing metrics like sum or average), `$project` (reshaping fields), `$sort`, `$limit`, and `$lookup` (performing multi-collection left outer joins). It allows developers to perform enterprise-level reporting, faceted search, and analytics directly on the database engine without pulling massive raw datasets into Node.js memory.",
      "deepDive": [
        "**Pipeline Paradigm**: Stage 1 Output -> Stage 2 Input -> Stage 3 Output -> Final Result.",
        "**Memory Optimization**: In-memory aggregation stages are capped at 100MB RAM unless `{ allowDiskUse: true }` is enabled.",
        "**Stage Optimization**: Placing `$match` and `$sort` at the very beginning allows MongoDB to utilize B-Tree indexes directly."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Aggregation Pipeline: Total Revenue per Customer",
        "code": "db.orders.aggregate([\n  // Stage 1: Filter completed orders (Uses Index)\n  { $match: { status: \"completed\" } },\n  // Stage 2: Group by customerId and calculate totals\n  {\n    $group: {\n      _id: \"$customerId\",\n      totalSpent: { $sum: \"$amount\" },\n      orderCount: { $sum: 1 }\n    }\n  },\n  // Stage 3: Filter customers spending > 1000\n  { $match: { totalSpent: { $gte: 1000 } } },\n  // Stage 4: Sort descending by spent amount\n  { $sort: { totalSpent: -1 } }\n]);"
      },
      "commonMistakes": [
        "Placing `$group` before `$match`, forcing the database to group millions of unnecessary documents before filtering."
      ],
      "proTips": [
        "Highlight that `$lookup` inside an aggregation pipeline functions as an in-engine SQL JOIN, avoiding application-level multi-query stitching."
      ]
    },
    "bangla": {
      "quickAnswer": "Aggregation Framework হলো MongoDB-র একটি উচ্চগতির মাল্টি-স্টেজ পাইপলাইন ইঞ্জিন যা ডেটা ফিল্টারিং, গ্রুপিং, ট্রান্সফরমেশন এবং অ্যানালিটিক্যাল রিপোর্ট তৈরিতে ব্যবহৃত হয়।",
      "interviewSpeech": "MongoDB-র অ্যাগ্রিগেশন ফ্রেমওয়ার্ক অনেকটা পাইপলাইনের মতো কাজ করে—যেখানে এক স্টেজের আউটপুট পরের স্টেজের ইনপুট হিসেবে প্রবেশ করে। এর মাধ্যমে জটিল ক্যালকুলেশন ও বিজনেস রিপোর্ট ডাটাবেসের ভেতর থেকেই তৈরি করা যায়। এর জনপ্রিয় স্টেজগুলোর মধ্যে রয়েছে `$match` (ফিল্টারিং), `$group` (যোগফল বা গড় বের করা), `$project` (নির্দিষ্ট ফিল্ড সাজানো), এবং `$lookup` (অন্য কালেকশনের সাথে জয়েন করা)। কোটি কোটি ডেটা নোড সার্ভারে এনে লুপ চালানোর বদলে ডাটাবেস লেভেলে মুহূর্তেই হিসাব শেষ করে ফেলাই এর মূল শক্তি।",
      "deepDive": [
        "**পাইপলাইন মডেল**: Match -> Group -> Project -> Sort ক্রমানুসারে চলে।",
        "**ইনডেক্সিং টিপস**: পাইপলাইনের একদম শুরুতে `$match` এবং `$sort` রাখলে ডাটাবেস ইনডেক্স ব্যবহার করতে পারে।",
        "**মেমোরি লিমিট**: ডিফল্টভাবে প্রতিটি স্টেজের মেমোরি লিমিট ১০০MB, এর বেশি হলে `{ allowDiskUse: true }` ফ্ল্যাগ দিতে হয়।"
      ],
      "commonMistakes": [
        "শুরুতে ফিল্টার ($match) না করে আগে গ্রুপিং করা, এতে মেমোরি ও সিপিইউ খরচ বহুগুণ বেড়ে যায়।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: '$lookup স্টেজটি মূলত রিলেশনাল ডাটাবেসের LEFT OUTER JOIN-এর মতো কাজ করে।'"
      ]
    }
  },
  {
    "id": "db-mock-c2-virtual-fields-in-mongoose",
    "questionNumber": 19,
    "question": "What are the virtual fields in Mongoose?",
    "banglaQuestion": "Mongoose-এ Virtual Fields বলতে কী বোঝায় এবং কেন এগুলো ব্যবহার করা হয়?",
    "topic": "MongoDB & Mongoose",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "Mongoose",
      "Virtuals",
      "Schema",
      "Clean Code"
    ],
    "english": {
      "quickAnswer": "Virtual fields are logical document properties that you can get and set in JavaScript code, but they are NOT persisted or stored in the underlying MongoDB database.",
      "interviewSpeech": "Virtuals in Mongoose are computed document properties that behave like regular schema fields in application code but never get saved to the MongoDB disk. A classic use case is combining `firstName` and `lastName` into a computed `fullName` virtual. By using virtual getters and setters, we keep our database storage clean and normalized without storing redundant derived values, while keeping the JavaScript business layer clean and expressive.",
      "deepDive": [
        "**Getters**: Dynamically calculates a property on access (e.g. calculating user age from `birthDate`).",
        "**Setters**: Splits a composite input (e.g. setting `fullName = 'John Doe'` decomposes into `firstName` and `lastName`).",
        "**JSON Serialization**: Virtuals are omitted by default when converting a document to JSON/Object; you must explicitly enable `{ virtuals: true }` in `toJSON` schema options."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Virtual Field Getter and Setter in Mongoose",
        "code": "const userSchema = new Schema({\n  firstName: String,\n  lastName: String\n}, {\n  toJSON: { virtuals: true }, // Include virtuals in res.json()\n  toObject: { virtuals: true }\n});\n\n// Define fullName virtual getter\nuserSchema.virtual('fullName').get(function() {\n  return `${this.firstName} ${this.lastName}`;\n});\n\n// Define fullName virtual setter\nuserSchema.virtual('fullName').set(function(name: string) {\n  const [first, ...last] = name.split(' ');\n  this.firstName = first;\n  this.lastName = last.join(' ');\n});"
      },
      "commonMistakes": [
        "Trying to query database documents using a virtual field (e.g. `User.find({ fullName: '...' })` will fail because the field doesn't exist on disk).",
        "Forgetting to enable `toJSON: { virtuals: true }` when sending API responses."
      ],
      "proTips": [
        "Explain the performance advantage: Virtuals save disk space and eliminate the need to update derived fields every time the underlying field changes."
      ]
    },
    "bangla": {
      "quickAnswer": "Virtual Fields হলো এমন কিছু ডেরিভড প্রপার্টি যা জাভাস্ক্রিপ্ট কোডে অ্যাক্সেস করা যায়, কিন্তু সেগুলো কখনোই MongoDB ডাটাবেস ডিস্কে সেভ হয় না।",
      "interviewSpeech": "Mongoose-এর ভার্চুয়াল ফিল্ডস হলো ক্যালকুলেটেড প্রপার্টি যা অ্যাপ্লিকেশন লেভেলে সাধারণ ফিল্ডের মতো কাজ করে কিন্তু ডাটাবেসে কোনো জায়গা দখল করে না। সবচেয়ে ভালো উদাহরণ হলো `firstName` এবং `lastName` মিলিয়ে `fullName` তৈরি করা। আমরা যদি ডাটাবেসে `fullName` সেভ করতাম, তবে নাম আপডেট হওয়ার সাথে সাথে দুটি ফিল্ড আপডেট করতে হতো এবং মেমোরিও অপচয় হতো। ভার্চুয়াল ফিল্ডের গেটার ও সেটার ব্যবহারের মাধ্যমে ডাটাবেস হালকা থাকে এবং কোড অনেক পরিষ্কার ও মার্জিত হয়।",
      "deepDive": [
        "**গেটার (Getter)**: পড়ার সময় ডায়নামিক ভ্যালু রিটার্ন করে (যেমন `birthDate` থেকে বর্তমান বয়স বের করা)।",
        "**JSON সিরিয়ালাইজেশন**: এপিআই রেসপন্সে পাঠাতে চাইলে স্কিমার অপশনে `{ toJSON: { virtuals: true } }` কনফিগার করতে হয়।"
      ],
      "commonMistakes": [
        "ভার্চুয়াল ফিল্ড দিয়ে ডাটাবেসে কুয়েরি করার চেষ্টা করা (`User.find({ fullName: ... })` কাজ করবে না কারণ এটি ডাটাবেসে নেই)।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: ডেরিভড ফিল্ড ক্যালকুলেশনের জন্য ভার্চুয়াল ফিল্ড ব্যবহার করলে ডাটাবেস রিডানড্যান্সি জিরো থাকে।"
      ]
    }
  },
  {
    "id": "db-mock-c2-lean-method-in-mongoose",
    "questionNumber": 20,
    "question": "What is the lean method in Mongoose, and why does Mongoose use it?",
    "banglaQuestion": "Mongoose-এ .lean() মেথড কী এবং কেন এটি ব্যবহার করা হয়?",
    "topic": "MongoDB & Mongoose",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Lean",
      "Performance",
      "Optimization",
      "POJO"
    ],
    "english": {
      "quickAnswer": "Calling `.lean()` instructs Mongoose to skip document hydration and return Plain Old JavaScript Objects (POJOs), making read queries up to 4-5x faster while slashing RAM consumption.",
      "interviewSpeech": "By default, when Mongoose executes a read query, it performs a process called 'Hydration'—wrapping every single BSON record returned from MongoDB into a heavy Mongoose Document instance equipped with getters, setters, validation state, change tracking, and save methods. While powerful for updates, this adds massive CPU and memory overhead for read-only GET APIs. When you append `.lean()` to a query, Mongoose bypasses hydration and gives you lightweight, plain JavaScript objects directly. This improves query execution speed dramatically and reduces memory pressure by more than 50%.",
      "deepDive": [
        "**What is Skipped**: Change tracking (`$isModified`), custom instance methods, schema validation hooks, and `.save()` capabilities.",
        "**When to use**: All read-heavy operations, REST API endpoints, paginated tables, and background analytics exports.",
        "**When NOT to use**: When you plan on mutating the document and calling `.save()` on it directly."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Standard Query vs High-Performance Lean Query",
        "code": "// ❌ Slow & Heavy for read-only: Instantiates 1,000 Mongoose Document classes\nconst docs = await User.find({ status: 'active' }).limit(1000);\n\n// ✅ Blazing Fast: Returns plain JavaScript array, minimal RAM usage\nconst leanDocs = await User.find({ status: 'active' }).lean().limit(1000);\n// Note: leanDocs[0].save() does NOT exist!"
      },
      "commonMistakes": [
        "Calling `.save()` on a lean document (will throw `TypeError: doc.save is not a function`).",
        "Expecting Mongoose virtuals to appear on lean queries without using the `mongoose-lean-virtuals` plugin."
      ],
      "proTips": [
        "State this rule of thumb: 'If you are only sending JSON back to the client over an HTTP endpoint, ALWAYS use `.lean()`.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose-এ `.lean()` কুয়েরি মেথডটি ভারী Mongoose Document তৈরি না করে সরাসরি হালকা প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট (POJO) রিটার্ন করে, যা পড়ার গতি বহুগুণ বাড়ায় এবং মেমোরি কমায়।",
      "interviewSpeech": "বাই-ডিফল্ট Mongoose কুয়েরি করলে প্রতিটা রেকর্ডের সাথে Mongoose-এর নিজস্ব মেথড (যেমন `.save()`, চেঞ্জ ট্র্যাকিং, ভ্যালিডেশন) যুক্ত করে—যাকে 'হাইড্রেশন' (Hydration) বলে। এর ফলে প্রতিটা অবজেক্ট অনেক ভারী হয়ে যায় এবং র‍্যাম বেশি খরচ করে। কিন্তু কোনো রিড-অনলি কুয়েরিতে (যেমন এপিআই-তে ইউজার লিস্ট পাঠানো) যখন আমরা কোনো ডেটা সেভ করব না, তখন `.lean()` যুক্ত করলে Mongoose হাইড্রেশন বাদ দিয়ে সরাসরি পিওর জাভাস্ক্রিপ্ট অবজেক্ট রিটার্ন করে। এটি কুয়েরির গতি প্রায় ৩ থেকে ৫ গুণ পর্যন্ত বাড়িয়ে দেয়।",
      "deepDive": [
        "**হাইড্রেশন স্কিপ**: ক্লাসের অতিরিক্ত মেথড ও স্টেট মেমরিতে লোড হয় না।",
        "**কখন ব্যবহার করবেন**: যেকোনো GET রিকোয়েস্ট, পেজিনেশন ও বড় রিপোর্টের জন্য।",
        "**সীমাবদ্ধতা**: লিন অবজেক্টের উপর `.save()` বা কাস্টম স্কিমা মেথড কল করা যায় না।"
      ],
      "commonMistakes": [
        "`.lean()` দিয়ে ডেটা এনে `doc.save()` কল করার চেষ্টা করা (এরর খাবে)।"
      ],
      "proTips": [
        "গোল্ডেন রুল বলুন: 'GET API-তে যদি শুধুই JSON পাঠাতে হয়, তবে অবশ্যই .lean() ব্যবহার করা বেস্ট প্র্যাকটিস।'"
      ]
    }
  },
  {
    "id": "db-mock-c2-acid-properties-sql-database",
    "questionNumber": 21,
    "question": "What are ACID properties in SQL database?",
    "banglaQuestion": "SQL ডাটাবেসে ACID প্রোপার্টিজ বলতে কী বোঝায়?",
    "topic": "Transactions & ACID",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "ACID",
      "Transactions",
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "english": {
      "quickAnswer": "ACID stands for Atomicity, Consistency, Isolation, and Durability—a set of four foundational guarantees that ensure database transactions are processed reliably even during crashes and errors.",
      "interviewSpeech": "ACID guarantees transactional integrity. **Atomicity (All or Nothing)** ensures that all operations in a transaction either fully succeed or completely rollback; there are no partial writes. **Consistency** ensures that the database moves from one valid state to another, strictly obeying all constraints, foreign keys, and triggers. **Isolation** guarantees that concurrently running transactions execute independently without interfering with or seeing uncommitted states from one another. **Durability** guarantees that once a transaction commits, its mutations are permanently recorded in non-volatile storage (via Write-Ahead Logs) even if power fails immediately after.",
      "deepDive": [
        "**A - Atomicity**: Managed by Undo Logs; rolled back on error.",
        "**C - Consistency**: Enforces schema invariants (e.g. balance cannot be negative).",
        "**I - Isolation**: Implemented via locks or Multi-Version Concurrency Control (MVCC) with 4 standard levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.",
        "**D - Durability**: Implemented via Write-Ahead Logging (WAL) flushed to disk before acknowledging commit."
      ],
      "commonMistakes": [
        "Confusing Consistency in ACID with Consistency in CAP theorem (ACID Consistency means schema constraints; CAP Consistency means all nodes see the same data at the same time)."
      ],
      "proTips": [
        "Give the classic banking transfer example: debiting $100 from Person A and crediting $100 to Person B must be atomic, consistent, isolated, and durable."
      ]
    },
    "bangla": {
      "quickAnswer": "ACID হলো ডাটাবেসের ৪টি মূল নিশ্চয়তা—Atomicity, Consistency, Isolation এবং Durability—যা লেনদেন বা ট্রানজ্যাকশনকে ১০০% নির্ভরযোগ্য ও নিরাপদ রাখে।",
      "interviewSpeech": "ACID হলো ট্রানজ্যাকশনের চারটি স্তম্ভ। **Atomicity (অল অর নাথিং)**: ট্রানজ্যাকশনের সবগুলো কমান্ড সফল হতে হবে, কোনো একটি ফেইল করলে পূর্বের সব পরিবর্তন রোলব্যাক হয়ে যাবে। **Consistency**: ডাটাবেসের সব নিয়ম, ফরেন কি এবং কনস্ট্রেইন্ট সবসময় অক্ষুণ্ণ থাকবে। **Isolation**: একাধিক ট্রানজ্যাকশন একসাথে চললেও একটির ডেটা অন্যটির সাথে মিশে যাবে না, প্রত্যেকে স্বাধীনভাবে কাজ করবে। **Durability**: একবার ট্রানজ্যাকশন সফলভাবে Commit হলে সাথে সাথে সার্ভার বন্ধ বা ক্র্যাশ করলেও ডিস্কের লগ (WAL) থেকে ডেটা অক্ষত থাকবে।",
      "deepDive": [
        "**ব্যাংক ট্রান্সফার উদাহরণ**: একজনের একাউন্ট থেকে টাকা কেটে অন্যজনের একাউন্টে জমা হওয়া মাঝপথে আটকে যাওয়া অসম্ভব।",
        "**আইসোলেশন লেভেল**: রিড কমেটেড, রিপিটেবল রিড ও সিরিয়ালাইজেবল লেভেলের মাধ্যমে কনকারেন্ট লক নিয়ন্ত্রণ করা হয়।"
      ],
      "commonMistakes": [
        "ACID-এর Consistency এবং CAP Theorem-এর Consistency এক মনে করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে Write-Ahead Logging (WAL)-এর কথা উল্লেখ করে Durability ব্যাখ্যা করলে পরীক্ষক দারুণভাবে সন্তুষ্ট হবেন।"
      ]
    }
  },
  {
    "id": "db-mock-c2-transactions-in-database",
    "questionNumber": 22,
    "question": "What are transactions in a database?",
    "banglaQuestion": "ডাটাবেসে ট্রানজ্যাকশন (Transactions) কী এবং কেন এটি প্রয়োজন?",
    "topic": "Transactions & ACID",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Transactions",
      "COMMIT",
      "ROLLBACK",
      "ACID",
      "Database"
    ],
    "english": {
      "quickAnswer": "A database transaction is a single logical unit of work comprising one or more operations that are executed atomically: either all succeed (COMMIT) or all are aborted (ROLLBACK).",
      "interviewSpeech": "A database transaction is a sequence of read and write operations treated as a single indivisible unit. It exists to protect data consistency against network failures, hardware crashes, and concurrent race conditions. A transaction follows a strict lifecycle: it begins (`BEGIN TRANSACTION`), executes multiple operations, and if all queries succeed without errors, it commits (`COMMIT`) to persist the state. If any error or deadlock occurs, it issues a rollback (`ROLLBACK`), restoring the database state to the exact condition prior to the transaction.",
      "deepDive": [
        "**Lifecycle**: `BEGIN` -> Executions -> `COMMIT` or `ROLLBACK`.",
        "**Savepoints**: Allow partial rollbacks within a larger transaction without aborting the entire unit of work.",
        "**Concurrency Control**: Handled via Pessimistic locking (locks rows/tables) or Optimistic concurrency control (version checks)."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Atomic Bank Transfer Transaction in SQL",
        "code": "BEGIN TRANSACTION;\n\n-- Step 1: Deduct from Account A\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\n\n-- Step 2: Add to Account B\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\n\n-- If any step fails or balance < 0, ROLLBACK is called; otherwise:\nCOMMIT;"
      },
      "commonMistakes": [
        "Keeping transactions open for too long (e.g. waiting for external API calls inside a DB transaction), which holds table locks and exhausts connection pools."
      ],
      "proTips": [
        "Never perform external network HTTP requests inside a database transaction block; do network calls first, then run the atomic DB transaction."
      ]
    },
    "bangla": {
      "quickAnswer": "ট্রানজ্যাকশন হলো এক বা একাধিক ডাটাবেস অপারেশনের একটি অবিভাজ্য ইউনিট যা সম্পূর্ণভাবে সফল হলে COMMIT হয়, অথবা ব্যর্থ হলে ROLLBACK হয়ে আগের অবস্থায় ফিরে যায়।",
      "interviewSpeech": "ডাটাবেসে ট্রানজ্যাকশন হলো একাধিক কুয়েরির একটি সমন্বিত একক কাজ। বাস্তব জগতে কোনো একটি কাজের পেছনে একাধিক ডাটাবেস টেবিল আপডেট করতে হয়—যেমন ব্যাংকে টাকা পাঠানো বা ই-কমার্সে অর্ডার দিয়ে স্টক কমানো। যদি স্টক কমে কিন্তু অর্ডার টেবিলে এন্ট্রি না হয়, তবে বিশাল বিপর্যয় ঘটবে। ট্রানজ্যাকশন নিশ্চিত করে যে মাঝপথে কোনো সার্ভার ডাউন হলেও অর্ধেক কাজ হবে না; হয় পুরো কাজটি সফলভাবে ডেটাবেসে স্থায়ী (COMMIT) হবে, নয়তো সম্পূর্ণ কাজ বাতিল (ROLLBACK) হয়ে আগের অবস্থায় ফিরে যাবে।",
      "deepDive": [
        "**লাইফসাইকেল**: `BEGIN TRANSACTION` -> অপারেশনসমূহ -> `COMMIT` অথবা `ROLLBACK`।",
        "**সেভপয়েন্ট (Savepoints)**: বড় ট্রানজ্যাকশনের মধ্যে নির্দিষ্ট পয়েন্টে রোলব্যাক করার সুবিধা দেয়।"
      ],
      "commonMistakes": [
        "ট্রানজ্যাকশনের ভেতরে থার্ড-পার্টি পেমেন্ট গেটওয়ের API কল করা। এতে ডাটাবেস টেবিল দীর্ঘক্ষণ লক হয়ে অন্য কুয়েরি আটকে যায়।"
      ],
      "proTips": [
        "সতর্কতা বলুন: 'বাইরের কোনো API রিকোয়েস্ট কখনো ট্রানজ্যাকশন ব্লকের মধ্যে রাখা উচিত নয়, শুধু ডাটাবেস কুয়েরি ট্রানজ্যাকশনে রাখা উচিত।'"
      ]
    }
  },
  {
    "id": "db-mock-c2-diff-findunique-findfirst",
    "questionNumber": 23,
    "question": "What is the difference between findUnique and findFirst in Prisma?",
    "banglaQuestion": "Prisma-তে findUnique এবং findFirst মেথডের মধ্যে মূল পার্থক্য কী?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "findUnique",
      "findFirst",
      "Indexing",
      "ORM"
    ],
    "english": {
      "quickAnswer": "`findUnique` queries by a strictly unique field or primary key backed by a unique index, while `findFirst` searches by any arbitrary criteria and returns the first matching record.",
      "interviewSpeech": "The key distinction in Prisma between `findUnique` and `findFirst` is schema constraints, query planning, and type safety. `findUnique` requires the `where` clause to filter exclusively on a field (or compound fields) marked with `@id` or `@unique` in your Prisma schema. Because of this, the database planner guarantees that at most one row can match, allowing high-performance primary key or unique index lookups. `findFirst`, by contrast, allows arbitrary non-unique filtering (e.g. `where: { status: 'active', age: { gte: 18 } }`), supporting sorting, pagination, and picking the first matching row.",
      "deepDive": [
        "**findUnique**: Strict compile-time TypeScript enforcement. Only allows `@id` or `@unique` fields in `where`. Generates optimal SQL `WHERE id = ? LIMIT 1`.",
        "**findFirst**: Flexible where clause. Allows filtering on non-indexed and non-unique attributes, with optional `orderBy`.",
        "**findUniqueOrThrow**: Similar to findUnique, but throws a `NotFoundError` immediately if no row is returned."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Prisma findUnique vs findFirst Usage",
        "code": "// findUnique: Allowed ONLY on @id or @unique fields\nconst user = await prisma.user.findUnique({\n  where: { email: 'tanvir@example.com' } // email has @unique in schema\n});\n\n// findFirst: Allowed on ANY condition with ordering\nconst latestOrder = await prisma.order.findFirst({\n  where: { status: 'PENDING', total: { gte: 100 } },\n  orderBy: { createdAt: 'desc' }\n});"
      },
      "commonMistakes": [
        "Trying to use `findUnique` with non-unique fields like `name` or `status`—TypeScript compiler will reject it immediately."
      ],
      "proTips": [
        "Explain query optimization: 'findUnique enables Prisma to generate direct point-lookups and perform internal query batching using DataLoader patterns.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`findUnique` শুধুমাত্র `@id` বা `@unique` ইনডেক্স করা ফিল্ড দিয়ে রেকর্ড খুঁজে বের করে, আর `findFirst` যেকোনো সাধারণ শর্ত দিয়ে মিলে যাওয়া প্রথম রেকর্ডটি রিটার্ন করে।",
      "interviewSpeech": "Prisma-তে এই দুটির মূল পার্থক্য হলো ডেটাবেস কনস্ট্রেইন্ট এবং টাইপ সেফটিতে। `findUnique`-এর `where` ক্লজে শুধুমাত্র সেইসব ফিল্ড দেওয়া যায় যেগুলো প্রিজমা স্কিমাতে `@id` অথবা `@unique` দিয়ে চিহ্নিত করা আছে। ডাটাবেস গ্যারান্টি দেয় যে এই ফিল্ডে সর্বোচ্চ একটিই রেকর্ড থাকবে। অন্যদিকে `findFirst` যেকোনো ফিল্ড দিয়ে ফিল্টার করতে দেয় (যেমন: `status: 'ACTIVE'`), এবং একাধিক ম্যাচ থাকলে সেখান থেকে `orderBy` অনুযায়ী প্রথম রেকর্ডটি নিয়ে আসে। পারফরম্যান্স ও ডেটা ইন্টিগ্রিটির জন্য ইউনিক রেকর্ডের ক্ষেত্রে `findUnique` ব্যবহার করাই সেরা।",
      "deepDive": [
        "**findUnique**: টাইপস্ক্রিপ্ট লেভেলে কঠোর টাইপ সেফটি দেয়, নন-ইউনিক ফিল্ড দিলে কম্পাইল এরর হবে।",
        "**findFirst**: যেকোনো শর্ত ও সর্টিং সাপোর্ট করে।",
        "**কোয়ারি ব্যাচিং**: findUnique ব্যবহারের ফলে প্রিজমা ব্যাকগ্রাউন্ডে ডেটালোডার দিয়ে কুয়েরি ব্যাচিং করতে পারে।"
      ],
      "commonMistakes": [
        "নন-ইউনিক কোনো ফিল্ড দিয়ে findUnique চালানোর চেষ্টা করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'ডাটাবেসে যদি ইউনিক ইনডেক্স থাকে, তবে সবসময় findUnique ব্যবহার করা উচিত কারণ প্রিজমা এটি দ্রুত পয়েন্ট-লুকআপ হিসেবে অপ্টিমাইজ করে।'"
      ]
    }
  },
  {
    "id": "db-mock-c3-virtual-fields-mongodb",
    "questionNumber": 24,
    "question": "What are virtual fields in MongoDB (and computed fields in aggregation)?",
    "banglaQuestion": "MongoDB-তে Virtual বা Computed Fields বলতে কী বোঝায় এবং এগুলো কীভাবে তৈরি করা যায়?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "MongoDB",
      "Virtual Fields",
      "Aggregation",
      "$project",
      "$addFields"
    ],
    "english": {
      "quickAnswer": "Virtual fields are client/ODM abstractions in Mongoose, while in native MongoDB, computed fields are dynamically generated on-the-fly during query execution using `$project` or `$addFields` aggregation stages without disk storage.",
      "interviewSpeech": "It is important to differentiate between ODM-level and database-level virtuals. At the Mongoose ODM level, virtuals are JavaScript getters/setters that format or derive data without persisting it. At the native MongoDB database engine level, virtual or computed fields are created using Aggregation Pipelines. Stages like `$addFields` and `$project` let you compute expressions—such as calculating discounted prices (`$multiply`), concatenating strings (`$concat`), or computing date differences—returning fresh calculated attributes to the client while keeping the underlying stored BSON documents untouched.",
      "deepDive": [
        "**Mongoose Virtuals**: Pure Node.js memory computation; zero DB overhead.",
        "**MongoDB Native Computed Fields**: `$addFields: { totalPrice: { $multiply: [\"$price\", \"$quantity\"] } }` executed inside the MongoDB server.",
        "**Storage Efficiency**: Avoids storing redundant derived data, ensuring single source of truth."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Native MongoDB Computed Virtual Fields via Aggregation",
        "code": "db.products.aggregate([\n  {\n    $addFields: {\n      // Dynamic computed virtual field in native MongoDB\n      finalPrice: {\n        $subtract: [\"$price\", { $multiply: [\"$price\", { $divide: [\"$discountPercent\", 100] }] }]\n      },\n      isInStock: { $gt: [\"$stockCount\", 0] }\n    }\n  }\n]);"
      },
      "commonMistakes": [
        "Confusing Mongoose client-side virtuals with native database storage."
      ],
      "proTips": [
        "Clarify with the interviewer: 'In Mongoose, virtuals are schema getters; in native MongoDB, they are computed projection fields in aggregation pipelines.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Mongoose-এ Virtual Fields হলো মেমরিতে থাকা গেটার প্রপার্টি, আর নেটিভ MongoDB-তে Aggregation পাইপলাইনের `$addFields` বা `$project` দিয়ে রানটাইমে ক্যালকুলেটেড ফিল্ড তৈরি করা হয় যা ডিস্কে সেভ হয় না।",
      "interviewSpeech": "ইন্টারভিউতে স্পষ্ট করে বলুন যে ভার্চুয়াল ফিল্ড মূলত দুই স্তরে হতে পারে। Mongoose ODM লেভেলে এটি জাভাস্ক্রিপ্ট কোডের একটি গেটার প্রপার্টি যা মেমরিতে হিসাব হয়। আর আসল MongoDB ডাটাবেস লেভেলে ভার্চুয়াল বা কম্পিউটেড ফিল্ড তৈরি করা হয় Aggregation পাইপলাইনের মাধ্যমে। `$addFields` বা `$project` স্টেজ ব্যবহার করে দুটি ফিল্ডের গুণফল (যেমন `price * quantity = totalPrice`) বা স্ট্রিং কনক্যাট করে ক্লায়েন্টে পাঠানো যায়। এতে ডাটাবেসে অতিরিক্ত ডুপ্লিকেট কলাম রাখার প্রয়োজন হয় না এবং ডেটার নির্ভুলতা বজায় থাকে।",
      "deepDive": [
        "**Mongoose Virtual**: নোড.জেএস অ্যাপ্লিকেশনের মেমরিতে কাজ করে।",
        "**MongoDB $addFields**: ডাটাবেস সার্ভারের ভেতর পাইপলাইনে ডায়নামিক ফিল্ড হিসাব করে।"
      ],
      "commonMistakes": [
        "ভাবা যে MongoDB কালেকশনে ভার্চুয়াল ফিল্ড পার্মানেন্টলি সেভ হয়ে থাকে।"
      ],
      "proTips": [
        "বলুন: 'ডাটাবেস নরম্যালাইজড রাখতে এবং অপ্রয়োজনীয় ডুপ্লিকেশন এড়াতে কম্পিউটেড ফিল্ডের তুলনা নেই।'"
      ]
    }
  },
  {
    "id": "db-mock-c3-composite-indexes",
    "questionNumber": 25,
    "question": "What are composite indexes?",
    "banglaQuestion": "Composite Index বা Compound Index কী এবং এটি কেন ব্যবহার করা হয়?",
    "topic": "Scaling & Optimization",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Indexing",
      "Composite Index",
      "Compound Index",
      "SQL",
      "MongoDB"
    ],
    "english": {
      "quickAnswer": "A Composite (or Compound) Index is a database index constructed across two or more columns/fields, ordered sequentially to optimize queries that filter and sort on multiple attributes simultaneously.",
      "interviewSpeech": "A Composite Index is an index built on multiple fields within a single table or collection (e.g. `(tenant_id, status, created_at)`). Instead of the database engine scanning two separate single-column indexes and merging their bitmaps in memory, a composite index sorts data in a multi-level B-Tree hierarchy according to the specified column sequence. This drastically accelerates multi-condition queries. However, the order of columns matters critically: a query must query the leading prefix of the index to utilize it, adhering to the Equality, Sort, Range (ESR) rule.",
      "deepDive": [
        "**Index Prefixes**: An index on `(A, B, C)` can satisfy queries on `(A)`, `(A, B)`, and `(A, B, C)`, but CANNOT satisfy a query on `(B, C)` alone without leading column A.",
        "**The ESR Rule**: Place Equality fields first, Sort fields second, and Range fields (`>`, `<`, `BETWEEN`) last.",
        "**Index Overhead**: A composite index is larger in size than single indexes and requires more RAM in the buffer cache."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Composite Index in PostgreSQL and MongoDB",
        "code": "-- PostgreSQL Composite Index\nCREATE INDEX idx_orders_user_status_date \nON orders (user_id, status, created_at DESC);\n\n-- MongoDB Compound Index\ndb.orders.createIndex({ userId: 1, status: 1, createdAt: -1 });\n\n-- Query matching the composite index prefix:\nSELECT * FROM orders WHERE user_id = 42 AND status = 'COMPLETED' ORDER BY created_at DESC;"
      },
      "commonMistakes": [
        "Assuming an index on `(A, B)` works identically for queries filtering solely on `B`."
      ],
      "proTips": [
        "Always explain the 'Leftmost Prefix' rule: the query must utilize the leftmost column of the index for it to be engaged by the query planner."
      ]
    },
    "bangla": {
      "quickAnswer": "Composite Index (বা Compound Index) হলো এমন একটি ইনডেক্স যা দুই বা ততোধিক কলাম/ফিল্ডের সমন্বয়ে তৈরি করা হয়, যাতে একাধিক শর্তযুক্ত ফিল্টারিং ও সর্টিং কুয়েরি অত্যন্ত দ্রুত সম্পন্ন হয়।",
      "interviewSpeech": "কম্পোজিট ইনডেক্স হলো একাধিক কলামের ওপর গঠিত একটি সমন্বিত B-Tree ইনডেক্স—যেমন `(user_id, status, created_at)`। যখন কোনো কুয়েরিতে একসাথে ইউজারের আইডি ও অর্ডারের স্ট্যাটাস দিয়ে ফিল্টার করে ডেট দিয়ে সর্ট করতে হয়, তখন আলাদা আলাদা সিঙ্গেল ইনডেক্স ব্যবহার না করে কম্পোজিট ইনডেক্স ব্যবহার করলে ডাটাবেস এক দেখাতেই কাঙ্ক্ষিত ফলাফল বের করে ফেলে। তবে এখানে কলামের ক্রম (order) অত্যন্ত গুরুত্বপূর্ণ—যাকে 'Leftmost Prefix Rule' বলা হয়। কুয়েরি অবশ্যই প্রথম কলাম থেকে শুরু হতে হবে, নয়তো ডাটাবেস পুরো ইনডেক্স স্কিপ করে ফেলে।",
      "deepDive": [
        "**লেফটমোস্ট প্রিফিক্স রুল**: `(A, B, C)` ইনডেক্স থাকলে তা `A`, `(A, B)` এবং `(A, B, C)` কুয়েরির জন্য কাজ করবে, কিন্তু একা `B` বা `C`-এর জন্য কাজ করবে না।",
        "**ESR নীতি**: Equality ফিল্ড প্রথমে, Sort ফিল্ড মাঝে, এবং Range ফিল্ড শেষে রাখতে হয়।"
      ],
      "commonMistakes": [
        "ভাবা যে (A, B) ইনডেক্স তৈরি করলে B দিয়ে সার্চ করলেও সমান স্পিড পাওয়া যাবে।"
      ],
      "proTips": [
        "বলুন: 'দুটি আলাদা ইনডেক্স মার্চ করার চেয়ে একটি কম্পোজিট ইনডেক্স ব্যবহার করা মেমোরি ও সিপিইউ-এর দিক থেকে অনেক বেশি দক্ষ।'"
      ]
    }
  },
  {
    "id": "db-mock-c3-acid-properties-in-database",
    "questionNumber": 26,
    "question": "What are the ACID properties in a database?",
    "banglaQuestion": "ডাটাবেসে ACID প্রোপার্টিজের গুরুত্ব ও বাস্তবায়নের প্রক্রিয়া কী?",
    "topic": "Transactions & ACID",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "ACID",
      "Transactions",
      "Concurrency",
      "Database Internals"
    ],
    "english": {
      "quickAnswer": "Atomicity ensures all-or-nothing execution; Consistency maintains integrity constraints; Isolation prevents concurrent transaction interference; Durability guarantees committed data survives crashes via Write-Ahead Logs.",
      "interviewSpeech": "ACID properties define the baseline standard for transactional data management. Atomicity uses rollback/undo segments so that if any statement fails, the entire transaction reverts. Consistency enforces database rules, foreign key referential integrity, and data types so the database never enters a corrupt state. Isolation uses row-level locking or Multi-Version Concurrency Control (MVCC) so concurrent transactions execute as if they were serial. Durability relies on flushing Write-Ahead Logging (WAL) or Redo Logs to non-volatile disk before returning success, guaranteeing survival across power outages.",
      "deepDive": [
        "**Under the Hood of Durability**: OS write caches are bypassed via `fsync` to guarantee magnetic/flash persistence.",
        "**MVCC vs Locking**: Modern databases like PostgreSQL use MVCC for Isolation, ensuring readers do not block writers and writers do not block readers.",
        "**Isolation Levels**: Read Uncommitted (dirty reads allowed) up to Serializable (strict serial execution equivalent)."
      ],
      "commonMistakes": [
        "Thinking Durability means saving in RAM cache (Durability strictly requires non-volatile disk persistence)."
      ],
      "proTips": [
        "Mention that PostgreSQL implements isolation via MVCC (Multi-Version Concurrency Control) using system columns `xmin` and `xmax`."
      ]
    },
    "bangla": {
      "quickAnswer": "Atomicity (সব বা কিছুই না), Consistency (নিয়মের ধারাবাহিকতা), Isolation (কনকারেন্ট নিরাপত্তা) এবং Durability (ডিস্কে স্থায়ী সংরক্ষণ)।",
      "interviewSpeech": "ACID হলো ডাটাবেসের নির্ভরযোগ্যতার চার মূল স্তম্ভ। **Atomicity** নিশ্চিত করে Undo Logs-এর মাধ্যমে যে অপারেশনের কোনো অংশ ফেইল করলে পুরোটা বাতিল হবে। **Consistency** নিশ্চিত করে যে প্রতিটি লেনদেনের আগে ও পরে স্কিমার সব নিয়ম ও ফরেন কি অক্ষুণ্ণ থাকবে। **Isolation** নিশ্চিত করে MVCC (Multi-Version Concurrency Control) দিয়ে যে একাধিক ইউজার একই সময়ে কুয়েরি চালালেও একজন আরেকজনের অর্ধেক কাজ হওয়া আনকমিটেড ডেটা দেখবে না। এবং **Durability** নিশ্চিত করে WAL (Write-Ahead Log) ও `fsync` ডিস্কে লিখে যে কম্পিউটার হুট করে রিস্টার্ট হলেও সফল ডেটা হারিয়ে যাবে না।",
      "deepDive": [
        "**MVCC**: PostgreSQL-এ রিডাররা রাইটারদের ব্লক করে না এবং রাইটাররা রিডারদের আটকায় না।",
        "**fsync**: মেমোরির ডেটা ডিস্কে নিশ্চিতভাবে ফ্ল্যাশ করা।"
      ],
      "commonMistakes": [
        "দুরেবিলিটি মানে র‍্যামে রাখা ভাবা। এটি ডিস্কে স্থায়ী হওয়া আবশ্যক।"
      ],
      "proTips": [
        "PostgreSQL কীভাবে MVCC দিয়ে লক ছাড়া কনকারেন্সি নিয়ন্ত্রণ করে তা উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "db-mock-c3-1nf-2nf-3nf-normalization",
    "questionNumber": 27,
    "question": "What is First Normal Form (1NF), Second Normal Form (2NF) & Third Normal Form (3NF)?",
    "banglaQuestion": "ডাটাবেস নরমালাইজেশনের 1NF, 2NF এবং 3NF কী এবং এদের পার্থক্য কী?",
    "topic": "SQL & Relational DB",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Normalization",
      "1NF",
      "2NF",
      "3NF",
      "RDBMS",
      "Database Design"
    ],
    "english": {
      "quickAnswer": "1NF eliminates repeating groups and requires atomic values; 2NF is in 1NF and removes partial dependencies on composite keys; 3NF is in 2NF and removes transitive dependencies.",
      "interviewSpeech": "Database normalization systematically organizes relational tables to eliminate redundancy and insertion, update, and deletion anomalies. **First Normal Form (1NF)** dictates that every cell must hold atomic (indivisible) values with no repeating groups or comma-separated lists, and each record must have a unique identifier. **Second Normal Form (2NF)** requires 1NF compliance and mandates that all non-key attributes must be fully functionally dependent on the entire primary key, eliminating partial dependencies (applicable when primary keys are composite). **Third Normal Form (3NF)** requires 2NF compliance and removes transitive dependencies: non-key attributes must depend *only* on the primary key, not on another non-key attribute (e.g. moving zip code -> city into a separate lookup table).",
      "deepDive": [
        "**1NF**: Atomic columns only. No `phones: '017..., 018...'` in one cell.",
        "**2NF**: No Partial Dependency. If PK is `(StudentID, CourseID)`, `CourseName` depends only on `CourseID`, so it must be moved to a Courses table.",
        "**3NF**: No Transitive Dependency (`A -> B -> C`). If `EmployeeID -> DepartmentID` and `DepartmentID -> DepartmentName`, `DepartmentName` must move to a Departments table."
      ],
      "commonMistakes": [
        "Thinking 2NF applies when the primary key is just a single column (partial dependency can only exist if the primary key is composite)."
      ],
      "proTips": [
        "Remember the famous quote: 'Every non-key attribute must depend on the key, the whole key, and nothing but the key, so help me Codd.'"
      ]
    },
    "bangla": {
      "quickAnswer": "1NF: প্রতিটি সেলে অ্যাটমিক বা অবিভাজ্য মান থাকবে; 2NF: কম্পোজিট প্রাইমারি কি-র কোনো অংশের ওপর আংশিক নির্ভরতা (Partial Dependency) থাকবে না; 3NF: কোনো পরোক্ষ নির্ভরতা (Transitive Dependency) থাকবে না।",
      "interviewSpeech": "নরমালাইজেশনের লক্ষ্য হলো ডেটা ডুপ্লিকেশন কমানো এবং ইনসার্ট/ডিলিট অ্যানোমালি দূর করা। **1NF (First Normal Form)**: একটি সেলে কখনো কমা দিয়ে একাধিক মান (যেমন: ফোন নাম্বার: '০১৭১..., ০১৮১...') রাখা যাবে না, প্রতিটি ভ্যালু হতে হবে অ্যাটমিক। **2NF (Second Normal Form)**: টেবিলটি 1NF-এ থাকবে এবং কম্পোজিট প্রাইমারি কি থাকলে কোনো কলাম শুধুমাত্র কি-র একটি অংশের ওপর নির্ভর করতে পারবে না (Partial Dependency রিমুভ করা)। **3NF (Third Normal Form)**: টেবিলটি 2NF-এ থাকবে এবং কোনো নন-কি কলাম অন্য কোনো নন-কি কলামের ওপর নির্ভর করতে পারবে না (Transitive Dependency রিমুভ করা)—যেমন ইউজারের ডিপার্টমেন্ট আইডি থেকে ডিপার্টমেন্টের নাম পাওয়া গেলে নাম ফিল্ডটি আলাদা ডিপার্টমেন্ট টেবিলে সরিয়ে নিতে হবে।",
      "deepDive": [
        "**1NF**: সিঙ্গেল ভ্যালু ও নো রিপিটিং গ্রুপ।",
        "**2NF**: কম্পোজিট কি-র সম্পূর্ণ অংশের ওপর ডিপেন্ডেন্সি।",
        "**3NF**: A -> B -> C চেইন ভেঙে ফেলা।"
      ],
      "commonMistakes": [
        "সিঙ্গেল প্রাইমারি কি টেবিলে 2NF ভায়োলেশন খোঁজা (এটি শুধু কম্পোজিট কি টেবিলেই সম্ভব)।"
      ],
      "proTips": [
        "ঐতিহাসিক উক্তিটি মনে রাখুন: 'The key, the whole key, and nothing but the key, so help me Codd!'"
      ]
    }
  },
  {
    "id": "db-mock-c3-prisma-client-type-safety",
    "questionNumber": 28,
    "question": "How does Prisma Client provide type safety?",
    "banglaQuestion": "Prisma Client কীভাবে এন্ড-টু-এন্ড টাইপ সেফটি (Type Safety) প্রদান করে?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "TypeScript",
      "Type Safety",
      "Code Generation"
    ],
    "english": {
      "quickAnswer": "Prisma Client generates tailored TypeScript types directly from your `schema.prisma` file during build time, dynamically calculating exact return types based on your query's `select` and `include` arguments.",
      "interviewSpeech": "Prisma achieves end-to-end type safety through automated ahead-of-time code generation. Whenever you run `prisma generate`, Prisma reads your declarative `schema.prisma` model and generates customized TypeScript type definitions inside `node_modules/@prisma/client`. Unlike traditional ORMs that return generic `any` or loose interfaces, Prisma calculates dynamic types based on your query payload: if you use `select: { id: true, email: true }`, the returned TypeScript type contains *only* `id` and `email`. If you add `include: { profile: true }`, TypeScript automatically includes the populated profile object with full autocomplete.",
      "deepDive": [
        "**Code Generation vs Runtime Reflection**: Prisma does not guess types at runtime; it generates concrete TypeScript declaration files (`.d.ts`).",
        "**Exact Selection Types**: Query projections translate 1-to-1 into TypeScript Utility Types using generics (`Prisma.UserGetPayload<... >`).",
        "**Compile-Time Error Catching**: Renaming a column in schema causes immediate TypeScript compiler errors across all affected files before deployment."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Dynamic Type Safety with Prisma Client",
        "code": "// TypeScript knows user has ONLY id and email!\nconst user = await prisma.user.findUnique({\n  where: { id: 1 },\n  select: { id: true, email: true }\n});\n// console.log(user.name); // ❌ TypeScript Compile Error: Property 'name' does not exist!\n\n// With relations:\nconst userWithPosts = await prisma.user.findUnique({\n  where: { id: 1 },\n  include: { posts: true }\n});\n// userWithPosts.posts is fully typed as Post[] with full IDE autocomplete!"
      },
      "commonMistakes": [
        "Forgetting to run `npx prisma generate` after changing `schema.prisma`."
      ],
      "proTips": [
        "Emphasize: 'Prisma eliminates the drift between database schema and TypeScript interfaces by generating types from the single source of truth: the schema file.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Prisma Client আপনার `schema.prisma` ফাইল থেকে সরাসরি কাস্টম TypeScript টাইপস জেনারেট করে এবং কুয়েরির `select` ও `include` অনুযায়ী নিখুঁত রিটার্ন টাইপ নির্ধারণ করে।",
      "interviewSpeech": "Prisma-র টাইপ সেফটি মূলত বিল্ড-টাইম কোড জেনারেশনের মাধ্যমে কাজ করে। যখনই আমরা `npx prisma generate` রান করি, প্রিজমা স্কিমা পড়ে `node_modules`-এর ভেতর সরাসরি নিখুঁত TypeScript ডেফিনিশন তৈরি করে দেয়। সাধারণ ORM যেখানে generic অবজেক্ট বা `any` রিটার্ন করে, প্রিজমা আপনার কুয়েরি অনুযায়ী ডায়নামিক টাইপ রিটার্ন করে: আপনি যদি শুধু `id` এবং `email` সিলেক্ট করেন, টাইপস্ক্রিপ্ট নিশ্চিত করবে যে অন্য কোনো ফিল্ড (যেমন `name`) অ্যাক্সেস করতে গেলে কম্পাইল এরর দেবে। আবার রিলেশন `include` করলে স্বয়ংক্রিয়ভাবে সেই রিলেটেড ডেটার টাইপ যুক্ত হয়ে যাবে।",
      "deepDive": [
        "**সিঙ্গেল সোর্স অফ ট্রুথ**: ডাটাবেসের স্কিমা থেকেই টাইপস্ক্রিপ্ট টাইপ তৈরি হয়, আলাদা ইন্টারফেস লেখার দরকার হয় না।",
        "**অটো-কমপ্লিট সুবিধা**: কোড লেখার সময় VS Code-এ সব ফিল্ডের নির্ভুল ইনটেলিসেন্স পাওয়া যায়।"
      ],
      "commonMistakes": [
        "স্কিমা পরিবর্তনের পর `prisma generate` দিতে ভুলে যাওয়া।"
      ],
      "proTips": [
        "বলুন: 'স্কিমা পরিবর্তন করলে যদি কোডে কোথাও ভুল থাকে, তবে প্রজেক্ট রান করার আগেই টাইপস্ক্রিপ্ট কম্পাইলার তা লাল দাগ দিয়ে দেখিয়ে দেয়।'"
      ]
    }
  },
  {
    "id": "db-mock-c3-prisma-transaction-failure",
    "questionNumber": 29,
    "question": "What happens when a Prisma transaction fails?",
    "banglaQuestion": "Prisma ট্রানজ্যাকশন ব্যর্থ হলে কী ঘটে এবং এটি কীভাবে হ্যান্ডেল করা হয়?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "Transactions",
      "Rollback",
      "Error Handling"
    ],
    "english": {
      "quickAnswer": "When any query within a Prisma transaction fails, Prisma automatically issues an atomic database ROLLBACK, reverting all previous mutations and throwing an exception in Node.js.",
      "interviewSpeech": "In Prisma, transactions are executed using either the Sequential array API (`prisma.$transaction([op1, op2])`) or the Interactive transaction API (`prisma.$transaction(async (tx) => { ... })`). If any single query within that transaction rejects, throws an error, or encounters a constraint violation, Prisma immediately sends a `ROLLBACK` command to the underlying database engine. All mutations performed up to that failure point are reverted as if they never happened. The transaction promise rejects with a specific error (like `PrismaClientKnownRequestError`), allowing you to catch the exception in your service layer and respond gracefully.",
      "deepDive": [
        "**Sequential Transactions**: Prisma groups operations into a single native DB transaction block.",
        "**Interactive Transactions**: Uses a dedicated database connection lease with a configurable timeout (default 5000ms).",
        "**Error Codes**: Prisma throws typed errors (e.g. `P2002` for unique constraint violations, `P2025` for record not found)."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Handling Failed Interactive Transaction in Prisma",
        "code": "try {\n  await prisma.$transaction(async (tx) => {\n    // Operation 1\n    const sender = await tx.account.update({\n      where: { id: senderId },\n      data: { balance: { decrement: 500 } }\n    });\n\n    if (sender.balance < 0) {\n      // Throwing error triggers automatic ROLLBACK!\n      throw new Error(\"Insufficient funds!\");\n    }\n\n    // Operation 2\n    await tx.account.update({\n      where: { id: receiverId },\n      data: { balance: { increment: 500 } }\n    });\n  });\n} catch (error) {\n  // Database state is 100% untouched and rolled back!\n  console.error(\"Transaction rolled back safely:\", error.message);\n}"
      },
      "commonMistakes": [
        "Catching errors inside the interactive transaction callback without rethrowing, which mistakenly commits the partial transaction.",
        "Exceeding Prisma's interactive transaction timeout (default 5s) by performing heavy file I/O inside the block."
      ],
      "proTips": [
        "Configure timeouts if you anticipate high load: `prisma.$transaction(async (tx) => { ... }, { maxWait: 5000, timeout: 10000 })`."
      ]
    },
    "bangla": {
      "quickAnswer": "Prisma ট্রানজ্যাকশনের কোনো একটি কুয়েরি ব্যর্থ হলে প্রিজমা স্বয়ংক্রিয়ভাবে ডাটাবেসে ROLLBACK পাঠায়, আগের সব পরিবর্তন মুছে দিয়ে আগের অবস্থায় নিয়ে যায় এবং একটি এরর থ্রো করে।",
      "interviewSpeech": "Prisma-তে ট্রানজ্যাকশন মূলত দুইভাবে করা যায়: অ্যারে সিনট্যাক্স (`$transaction([op1, op2])`) অথবা ইন্টারঅ্যাক্টিভ ফাংশন সিনট্যাক্স (`$transaction(async (tx) => {...})`)। ট্রানজ্যাকশন চলাকালীন যেকোনো একটি অপারেশনে কোনো ভুল হলে বা কোনো কনস্ট্রেইন্ট ভায়োলেশন (যেমন ইউনিক ইমেইল ডুপ্লিকেট) ঘটলে, প্রিজমা সাথে সাথে ডাটাবেস ইঞ্জিনে `ROLLBACK` কমান্ড পাঠায়। ফলে ওই ট্রানজ্যাকশনের আগের সব রাইট অপারেশন পূর্বাবস্থায় ফিরে যায় এবং ডেটাবেস সম্পূর্ণ সুরক্ষিত থাকে। এরপর Node.js-এ একটি প্রিজমা এরর এক্সেপশন থ্রো হয় যা আমরা `try...catch` ব্লকে হ্যান্ডেল করতে পারি।",
      "deepDive": [
        "**অটোমেটিক রোলব্যাক**: আংশিক কোনো ডেটা সেভ হওয়ার সুযোগ নেই।",
        "**টাইমআউট মেকানিজম**: ডিফল্টভাবে ইন্টারঅ্যাক্টিভ ট্রানজ্যাকশন ৫ সেকেন্ডের মধ্যে শেষ হতে হয়, নয়তো টাইমআউট এরর দেয়।",
        "**প্রিজমা এরর কোড**: ইউনিক ভায়োলেশনের জন্য `P2002`, রেকর্ড না পেলে `P2025` কোড পাওয়া যায়।"
      ],
      "commonMistakes": [
        "ট্রানজ্যাকশনের ভেতরের `catch` ব্লকে এরর গিলে ফেলা এবং নতুন করে `throw` না করা (এতে রোলব্যাক বন্ধ হয়ে পার্শিয়াল ডেটা সেভ হয়ে যেতে পারে)।"
      ],
      "proTips": [
        "সবসময় ট্রানজ্যাকশনের বাইরে `try...catch` ব্যবহার করুন এবং ভেতরে কোনো দীর্ঘমেয়াদী ফাইল আপলোড বা নেটওয়ার্ক রিকোয়েস্ট রাখবেন না।"
      ]
    }
  },
  {
    "id": "db-mock-c3-scale-postgresql-query-optimization",
    "questionNumber": 30,
    "question": "How would you scale a PostgreSQL application, or how would you scale query optimization?",
    "banglaQuestion": "একটি PostgreSQL অ্যাপ্লিকেশনকে আপনি কীভাবে স্কেল করবেন এবং কুয়েরি অপ্টিমাইজ করবেন?",
    "topic": "Scaling & Optimization",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "PostgreSQL",
      "Scaling",
      "Query Optimization",
      "EXPLAIN ANALYZE",
      "Connection Pooling"
    ],
    "english": {
      "quickAnswer": "Scaling PostgreSQL involves query-level tuning with EXPLAIN ANALYZE and indexing, infrastructure pooling via PgBouncer, offloading reads to Read Replicas, and scaling writes through partitioning and caching.",
      "interviewSpeech": "Scaling a PostgreSQL database requires a multi-tiered approach: First, at the **Query & Index Layer**, I inspect slow query logs using `pg_stat_statements` and analyze execution bottlenecks with `EXPLAIN (ANALYZE, BUFFERS)`. I add targeted B-Tree, GIN, or partial indexes to eliminate sequential table scans, and refactor N+1 subqueries into joins or CTEs. Second, at the **Connection Layer**, PostgreSQL forks a separate process per connection; I implement PgBouncer for transaction-level connection pooling to handle thousands of concurrent clients without exhausting server memory. Third, at the **Infrastructure Layer**, I deploy Read Replicas with streaming replication to offload read-heavy GET traffic, place Redis in front for hot cache queries, and implement Table Partitioning for massive time-series tables.",
      "deepDive": [
        "**pg_stat_statements**: Essential PostgreSQL extension to identify the top 10 queries consuming the most cumulative execution time.",
        "**PgBouncer**: Solves the PostgreSQL connection scalability problem by pooling connections at the transaction level.",
        "**Vacuuming & Autovacuum Tuning**: Tuning autovacuum prevents table bloat caused by dead row tuples from MVCC updates."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Diagnosing Bottlenecks with EXPLAIN ANALYZE",
        "code": "-- Inspect query plan, actual execution time, and buffer hits\nEXPLAIN (ANALYZE, BUFFERS)\nSELECT u.id, u.email, COUNT(o.id) as order_count\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE u.created_at >= '2026-01-01'\nGROUP BY u.id, u.email;"
      },
      "commonMistakes": [
        "Throwing more hardware at the database without analyzing slow query execution plans.",
        "Opening hundreds of direct database connections from microservices without a connection pooler like PgBouncer."
      ],
      "proTips": [
        "Mention table partitioning: 'For tables exceeding tens of millions of rows, partitioning by range (e.g. created_at by month) allows partition pruning, speeding up queries exponentially.'"
      ]
    },
    "bangla": {
      "quickAnswer": "১) EXPLAIN ANALYZE ও ইনডেক্স দিয়ে কুয়েরি অপ্টিমাইজেশন, ২) PgBouncer দিয়ে কানেকশন পুলিং, ৩) Read Replica দিয়ে পড়ার ট্রাফিক ভাগ করা, এবং ৪) Redis ক্যাশিং ও টেবিল পার্টিশনিং।",
      "interviewSpeech": "PostgreSQL স্কেল করার জন্য আমি ৩টি স্তরে কাজ করি: **১. কুয়েরি অপ্টিমাইজেশন লেয়ার**: প্রথমে `pg_stat_statements` দিয়ে ধীরগতির কুয়েরিগুলো চিহ্নিত করি। এরপর `EXPLAIN ANALYZE` চালিয়ে সিকোয়েন্শিয়াল স্ক্যান বন্ধ করতে সঠিক B-Tree, GIN বা কম্পোজিট ইনডেক্স বসাই। **২. কানেকশন লেয়ার**: PostgreSQL প্রতি কানেকশনে আলাদা প্রসেস খুলে মেমোরি খরচ করে, তাই হাজার হাজার ট্রাফিক সামলাতে সামনে PgBouncer কানেকশন পুলার বসাই। **৩. ইনফ্রাস্ট্রাকচার স্কেলিং**: রিড-হেভি ট্রাফিকের জন্য Read Replica তৈরি করে রিড এবং রাইট কুয়েরি আলাদা করি, ঘনঘন পড়া ডেটার জন্য Redis ক্যাশ ব্যবহার করি এবং কোটি কোটি রো-র টেবিলকে সময় অনুযায়ী Partitioning করে দিই।",
      "deepDive": [
        "**EXPLAIN (ANALYZE, BUFFERS)**: কুয়েরি কত মেমোরি পেজ রিড করেছে এবং কত সময় নিয়েছে তা নিখুঁতভাবে দেখা যায়।",
        "**PgBouncer**: হাজার হাজার কনকারেন্ট নোড ক্লায়েন্টকে অল্প কিছু ফিজিক্যাল ডিবি কানেকশন দিয়ে পরিচালনা করে।",
        "**Autovacuum টিউনিং**: ডেড টুপল ক্লিন করে টেবিল ব্লোটিং রোধ করা।"
      ],
      "commonMistakes": [
        "কুয়েরি অপ্টিমাইজ না করে শুরুতেই সার্ভারের সাইজ বা র‍্যাম বাড়িয়ে টাকা নষ্ট করা।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Read Replicas + PgBouncer + Redis Cache' কম্বিনেশন তুলে ধরলে সিনিয়র আর্কিটেক্ট লেভেলের গভীরতা প্রকাশ পায়।"
      ]
    }
  },
  {
    "id": "db-mock-c3-partition-sql-database",
    "questionNumber": 31,
    "question": "How would you partition a SQL database?",
    "banglaQuestion": "একটি SQL ডাটাবেসে পার্টিশনিং (Partitioning) কীভাবে বাস্তবায়ন করবেন এবং এর সুবিধা কী?",
    "topic": "Scaling & Optimization",
    "difficulty": "Advanced",
    "importance": "High",
    "tags": [
      "Partitioning",
      "PostgreSQL",
      "SQL",
      "Sharding",
      "Big Data"
    ],
    "english": {
      "quickAnswer": "Table partitioning splits a giant SQL table into smaller physical pieces (partitions) while maintaining a single logical table interface, enabling Partition Pruning to drastically speed up query scans.",
      "interviewSpeech": "Table Partitioning is a physical optimization technique where a massive table—say, 100 million rows—is decomposed into smaller underlying tables called partitions based on a partition key. The application continues to query the parent table normally, but the query planner uses **Partition Pruning** to scan *only* the relevant partition disk pages, completely skipping 90% of the data. PostgreSQL supports declarative partitioning with three primary strategies: **Range Partitioning** (e.g. logs by month/year), **List Partitioning** (e.g. users by country code), and **Hash Partitioning** (e.g. distributing tenants evenly across N partitions).",
      "deepDive": [
        "**Partition Pruning**: If a query filters `WHERE created_at >= '2026-08-01'`, the engine only touches the August partition and ignores all other months.",
        "**Maintenance Advantages**: Dropping an entire partition (`DROP TABLE orders_2024_01`) is an instantaneous DDL operation, avoiding massive `DELETE` row locks and WAL bloat.",
        "**Partitioning vs Sharding**: Partitioning splits tables across the same database instance; Sharding splits data across multiple independent physical servers."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "Declarative Range Partitioning in PostgreSQL",
        "code": "-- 1. Create Parent Table partitioned by Range\nCREATE TABLE sales (\n  id SERIAL,\n  sale_date DATE NOT NULL,\n  amount DECIMAL(10, 2),\n  PRIMARY KEY (id, sale_date)\n) PARTITION BY RANGE (sale_date);\n\n-- 2. Create specific partitions for distinct months\nCREATE TABLE sales_2026_01 PARTITION OF sales\n  FOR VALUES FROM ('2026-01-01') TO ('2026-02-01');\n\nCREATE TABLE sales_2026_02 PARTITION OF sales\n  FOR VALUES FROM ('2026-02-01') TO ('2026-03-01');"
      },
      "commonMistakes": [
        "Partitioning small tables (under 1-2 million rows), which introduces query planner overhead with zero performance benefit.",
        "Excluding the partition key from the primary key constraint (PostgreSQL requires partition keys to be part of the PK)."
      ],
      "proTips": [
        "Mention the data lifecycle: 'Partitioning makes archiving ancient data effortless: you simply drop or detach the old partition instead of running a slow, blocking DELETE query.'"
      ]
    },
    "bangla": {
      "quickAnswer": "পার্টিশনিং হলো একটি বিশাল টেবিলকে লজিক্যালি এক রেখে ডিস্ক স্তরে ছোট ছোট ফিজিক্যাল টেবিলে বিভক্ত করা—যাতে Partition Pruning-এর মাধ্যমে কুয়েরি দ্রুত সম্পন্ন হয়।",
      "interviewSpeech": "যখন কোনো টেবিলে কোটি কোটি রো জমে যায় (যেমন ট্রানজ্যাকশন হিস্ট্রি বা লগ), তখন পুরো টেবিলে ইনডেক্স থাকলেও পারফরম্যান্স কমে যায়। পার্টিশনিংয়ের মাধ্যমে আমরা মূল টেবিলটিকে লজিক্যালি এক রেখে ডিস্কে ছোট ছোট টেবিলে ভাগ করে রাখি। অ্যাপ্লিকেশন আগের মতোই মূল টেবিলে কুয়েরি চালায়, কিন্তু ডাটাবেস ইঞ্জিন 'Partition Pruning' করে শুধু নির্দিষ্ট পার্টিশনে যায়—বাকি ৯০% টেবিল স্ক্যানই করে না। PostgreSQL-এ মূলত ৩ ধরনের পার্টিশনিং রয়েছে: **Range Partitioning** (তারিখ বা আইডি রেঞ্জ অনুযায়ী, যেমন প্রতি মাসের আলাদা টেবিল), **List Partitioning** (নির্দিষ্ট তালিকা বা দেশ অনুযায়ী), এবং **Hash Partitioning** (হ্যাশ কোড দিয়ে সমানভাবে ভাগ করা)।",
      "deepDive": [
        "**Partition Pruning**: কুয়েরি যদি অগাস্ট মাসের হয়, ডাটাবেস বাকি ১১ মাসের পার্টিশনে চোখই বুলাবে না।",
        "**সহজ ডেটা ক্লিনআপ**: পুরোনো বছরের ডেটা মুছতে হলে স্লো `DELETE` কুয়েরি না চালিয়ে এক সেকেন্ডে `DROP PARTITION` কমান্ড দিলেই মেমোরি খালি হয়ে যায়।",
        "**পার্টিশনিং বনাম শার্ডিং**: পার্টিশনিং একটি সার্ভারের ভেতর হয়; শার্ডিং একাধিক ভিন্ন সার্ভার জুড়ে হয়।"
      ],
      "commonMistakes": [
        "ছোট টেবিলে (কয়েক লাখ রো) পার্টিশন করা—এতে কুয়েরি প্ল্যানারের সময় বেশি নষ্ট হয়।"
      ],
      "proTips": [
        "বলুন: 'টাইম-সিরিজ ডেটা এবং ফাইনান্সিয়াল ট্রানজ্যাকশন আর্কিভ করার জন্য রেঞ্জ পার্টিশনিং হলো ইন্ডাস্ট্রি বেস্ট প্র্যাকটিস।'"
      ]
    }
  },
  {
    "id": "db-mock-c4-database-sharding",
    "questionNumber": 32,
    "question": "What is database sharding?",
    "banglaQuestion": "ডাটাবেস শার্ডিং (Database Sharding) কী এবং এটি কীভাবে অনুভূমিক স্কেলিং নিশ্চিত করে?",
    "topic": "Scaling & Optimization",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "Sharding",
      "Horizontal Scaling",
      "Distributed Databases",
      "System Design"
    ],
    "english": {
      "quickAnswer": "Database Sharding is an architectural horizontal partitioning pattern that distributes subsets of a dataset across multiple independent physical database server instances called shards.",
      "interviewSpeech": "Sharding is the ultimate horizontal scaling solution for databases that have outgrown the physical memory and storage limits of a single machine. In a sharded architecture, rows or documents are partitioned across multiple autonomous database servers (called shards) based on a **Shard Key**. A query router (such as `mongos` in MongoDB or Vitess in MySQL) inspects the query's shard key and routes the request directly to the specific shard holding that data partition. This divides both the storage footprint and the CPU/RAM read-write workload evenly across a cluster.",
      "deepDive": [
        "**Shard Key Selection**: Crucial to prevent 'hot spotting' (all writes overwhelming a single shard). Requires high cardinality and even distribution.",
        "**Cross-Shard Queries / Scatter-Gather**: If a query omits the shard key, the router must broadcast the query to every shard and merge results in memory, causing severe latency.",
        "**Distributed Transactions**: Complex and slower across shards due to Two-Phase Commit (2PC) protocols."
      ],
      "commonMistakes": [
        "Confusing Replication with Sharding (Replication copies the SAME data across nodes for redundancy; Sharding splits DIFFERENT subsets of data across nodes for scale)."
      ],
      "proTips": [
        "Emphasize: 'Replication gives you high availability and read scalability; Sharding gives you write scalability and unlimited storage capacity.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ডাটাবেস শার্ডিং হলো এমন একটি হরিজন্টাল পার্টিশনিং কৌশল যার মাধ্যমে বিশাল ডেটাসেটকে Shard Key-র ভিত্তিতে একাধিক স্বাধীন সার্ভারে ভাগ করে রাখা হয়।",
      "interviewSpeech": "যখন কোনো ডাটাবেস এত বড় হয়ে যায় যে বিশ্বের সবচেয়ে বড় সিঙ্গেল সার্ভারেও তার জায়গা হয় না বা রাইট ট্রাফিক সামলানো যায় না, তখন শার্ডিং প্রয়োগ করা হয়। শার্ডিংয়ের মাধ্যমে টেবিল বা কালেকশনের ডেটাকে একটি 'Shard Key'-র ওপর ভিত্তি করে একাধিক আলাদা ফিজিক্যাল সার্ভার বা নোডে (যাকে Shard বলে) ভাগ করে ছড়িয়ে দেওয়া হয়। অ্যাপ্লিকেশনের সামনে একটি রাউটার (যেমন MongoDB-র `mongos`) থাকে—যা কুয়েরির শার্ড কি দেখে সরাসরি নির্দিষ্ট সার্ভারে রিকোয়েস্ট পাঠিয়ে দেয়। এর ফলে স্টোরেজ এবং রিড/রাইট ট্রাফিক পুরো ক্লাস্টারের সব মেশিনে সমানভাবে ভাগ হয়ে যায়।",
      "deepDive": [
        "**শার্ড কি নির্বাচন**: শার্ড কি যদি দুর্বল হয়, তবে সব ডেটা একটি মাত্র সার্ভারে গিয়ে পড়বে (Hotspotting)।",
        "**Scatter-Gather কুয়েরি**: কুয়েরিতে শার্ড কি না থাকলে রাউটারকে সব সার্ভারে কুয়েরি পাঠিয়ে ডেটা মার্চ করতে হয়, যা ধীরগতির।",
        "**শার্ডিং বনাম রেপ্লিকেশন**: রেপ্লিকেশনে প্রতিটি সার্ভারে একই ডেটার কপি থাকে; শার্ডিংয়ে প্রতিটি সার্ভারে ডেটার ভিন্ন ভিন্ন অংশ থাকে।"
      ],
      "commonMistakes": [
        "রেপ্লিকেশন এবং শার্ডিং এক মনে করা।"
      ],
      "proTips": [
        "সহজ পার্থক্য বলুন: 'Replication protects against server failure; Sharding solves massive storage and write traffic bottlenecks.'"
      ]
    }
  },
  {
    "id": "db-mock-c4-diff-find-aggregation-pipeline",
    "questionNumber": 33,
    "question": "What is the difference between the find method & aggregation pipeline in MongoDB?",
    "banglaQuestion": "MongoDB-তে find() মেথড এবং Aggregation Pipeline-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "find",
      "Aggregation",
      "Queries",
      "Performance"
    ],
    "english": {
      "quickAnswer": "`find()` is optimized for simple querying, filtering, sorting, and projection of documents, whereas the Aggregation Pipeline is a comprehensive data transformation and computation engine.",
      "interviewSpeech": "The difference lies in operational scope and computational power. `find()` is designed for direct point lookups and simple collection queries—such as fetching a user by email or getting active products with pagination and projection. It is lightweight, executes with minimal CPU overhead, and relies directly on B-Tree indexes. The Aggregation Pipeline (`aggregate()`), by contrast, is a multi-stage data transformation framework. It allows you to group data (`$group`), compute running averages or sums, join separate collections (`$lookup`), unwind nested arrays (`$unwind`), and reshape documents dynamically inside the engine.",
      "deepDive": [
        "**Performance Tradeoff**: For basic CRUD, `find()` is faster and consumes fewer server CPU cycles than spinning up an aggregation pipeline.",
        "**Capabilities**: `find()` cannot join collections, group rows, or compute new statistical fields; `aggregate()` can perform all of these in a single pass.",
        "**Cursor Support**: Both return cursors for memory-efficient streaming of large results."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "find() vs aggregate()",
        "code": "// find(): Simple filter and projection\ndb.users.find({ status: \"active\" }, { name: 1, email: 1 }).sort({ createdAt: -1 });\n\n// aggregate(): Multi-stage grouping, computation, and joins\ndb.orders.aggregate([\n  { $match: { status: \"completed\" } },\n  { $group: { _id: \"$customerId\", total: { $sum: \"$amount\" } } },\n  { $lookup: { from: \"customers\", localField: \"_id\", foreignField: \"_id\", as: \"customer\" } }\n]);"
      },
      "commonMistakes": [
        "Using `aggregate()` for a simple `findById` lookup, adding unnecessary engine overhead."
      ],
      "proTips": [
        "State the rule: 'Use find() for CRUD and direct reads; use aggregate() for reporting, analytics, multi-collection joins, and complex document reshaping.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`find()` সাধারণ ডেটা খোঁজা, ফিল্টারিং ও সর্টিংয়ের জন্য অপ্টিমাইজড; আর Aggregation Pipeline জটিল ডেটা গ্রুপিং, জয়েন ও কম্পিউটেশনের জন্য তৈরি।",
      "interviewSpeech": "পার্থক্যটি হলো কাজের পরিধি এবং কম্পিউটেশনাল ক্ষমতায়। `find()` হলো দ্রুতগতির সাধারণ কুয়েরি টুল—যা দিয়ে নির্দিষ্ট শর্তে ডকুমেন্ট খোঁজা, প্রজেকশন (সিলেক্টেড ফিল্ডস) এবং পেজিনেশন করা হয়। এটি সরাসরি ইনডেক্স ব্যবহার করে এবং খুব কম সিপিইউ ব্যবহার করে। অন্যদিকে `aggregate()` হলো একটি পূর্ণাঙ্গ ডেটা প্রসেসিং ফ্রেমওয়ার্ক। এটি দিয়ে ডেটা গ্রুপ করে যোগফল বা গড় বের করা (`$group`), অন্য কালেকশনের সাথে রিলেশন জয়েন করা (`$lookup`), নেস্টেড অ্যারেকে ফ্ল্যাট করা (`$unwind`) এবং জটিল বিজনেস রিপোর্ট তৈরি করা যায়—যা `find()` দিয়ে কখনোই সম্ভব নয়।",
      "deepDive": [
        "**স্পিড**: সাধারণ কুয়েরিতে `find()` বেশি ফাস্ট।",
        "**ক্ষমতা**: গ্রুপিং বা টেবিল জয়েন করতে হলে অবশ্যই `aggregate()` লাগবে।"
      ],
      "commonMistakes": [
        "একটি সাধারণ ইউজারের ডেটা ফেচ করতে অনর্থক Aggregation পাইপলাইন চালানো।"
      ],
      "proTips": [
        "নিয়মটি মনে রাখুন: 'সাধারণ রিড অপারেশনে find(), আর অ্যানালিটিক্স বা মাল্টি-কালেকশন জয়েনে aggregate() ব্যবহার করতে হয়।'"
      ]
    }
  },
  {
    "id": "db-mock-c4-pre-post-hooks-middleware-mongoose",
    "questionNumber": 34,
    "question": "What are the pre & post hooks for middleware in Mongoose?",
    "banglaQuestion": "Mongoose-এ pre এবং post মিডলওয়্যার হুক কী এবং এদের বাস্তব ব্যবহার কী?",
    "topic": "MongoDB & Mongoose",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Hooks",
      "Middleware",
      "Bcrypt",
      "Lifecycle"
    ],
    "english": {
      "quickAnswer": "Pre hooks execute interceptor logic *before* an event occurs (e.g. hashing passwords before `save`), while post hooks execute *after* the event finishes (e.g. logging or sending welcome emails).",
      "interviewSpeech": "Mongoose middleware (pre and post hooks) intercept document and query lifecycle events such as `validate`, `save`, `find`, and `deleteOne`. A **Pre Hook** (`schema.pre('save', ...)`) runs prior to the action committing to the database; it is the industry standard location to hash user passwords with bcrypt, generate URL slugs, or validate business logic. If an error occurs, calling `next(err)` aborts the operation. A **Post Hook** (`schema.post('save', ...)`) executes after the document has been successfully persisted; it is ideal for audit logging, clearing Redis cache keys, or triggering asynchronous notifications.",
      "deepDive": [
        "**'this' Context**: In document middleware, `this` refers to the document being saved. Regular `function` syntax must be used (not arrow functions) to preserve binding.",
        "**Query Middleware Hooks**: Hooks on `find` or `findOneAndUpdate` allow global filters like soft-delete (`this.where({ isDeleted: false })`).",
        "**Flow Control**: Pre hooks support async/await promises or traditional `next()` callbacks."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Bcrypt Password Hashing with Mongoose Pre Hook",
        "code": "userSchema.pre('save', async function (next) {\n  // Only hash password if it was actually modified\n  if (!this.isModified('password')) return next();\n\n  try {\n    const salt = await bcrypt.genSalt(10);\n    this.password = await bcrypt.hash(this.password, salt);\n    next();\n  } catch (err: any) {\n    next(err); // Aborts the save operation\n  }\n});"
      },
      "commonMistakes": [
        "Using ES6 arrow functions `() => {}` in pre hooks, which breaks the `this` context binding.",
        "Forgetting `if (!this.isModified('password'))`, which re-hashes an already-hashed password every time the user updates their profile name."
      ],
      "proTips": [
        "Mention query middleware: 'You can implement global soft-delete by attaching a pre hook to `/^find/` queries to automatically filter out soft-deleted records.'"
      ]
    },
    "bangla": {
      "quickAnswer": "Pre হুক কোনো কাজ ডাটাবেসে ঘটার ঠিক পূর্বে চলে (যেমন সেভ হওয়ার আগে পাসওয়ার্ড হ্যাশ করা), আর Post হুক সফলভাবে শেষ হওয়ার ঠিক পরে চলে (যেমন অডিট লগিং বা ইমেইল পাঠানো)।",
      "interviewSpeech": "Mongoose মিডলওয়্যার হুক হলো লাইফসাইকেল ইন্টারসেপ্টর। **Pre Hook** কোনো ডাটাবেস অপারেশনের ঠিক আগে কার্যকর হয়। সবচেয়ে ক্লাসিক উদাহরণ হলো ব্যবহারকারীর পাসওয়ার্ড হ্যাশিং—আমরা কন্ট্রোলারে কোড না লিখে স্কিমার `pre('save')` হুকে পাসওয়ার্ড এনক্রিপ্ট করে দিই, যাতে ভুলবশতও কাঁচা পাসওয়ার্ড ডাটাবেসে না যায়। আর **Post Hook** অপারেশনটি সফলভাবে ডাটাবেসে রাইট হওয়ার পর রান হয়—যা অডিট লগিং, মেমোরি ক্যাশ ইনভ্যালিডেশন বা নোটিফিকেশন ইভেন্ট ট্রিগার করতে ব্যবহৃত হয়।",
      "deepDive": [
        "**'this' বাইন্ডিং**: হুকের ভেতরে অবশ্যই রেগুলার `function()` লিখতে হবে, অ্যারো ফাংশন লিখলে `this` নষ্ট হয়ে যাবে।",
        "**isModified চেক**: পাসওয়ার্ড পরিবর্তন না হলে যাতে বারবার হ্যাশ না হয়, সেজন্য `this.isModified('password')` চেক করা জরুরি।"
      ],
      "commonMistakes": [
        "অ্যারো ফাংশন ব্যবহার করে `this` আনডিফাইন্ড পাওয়া।"
      ],
      "proTips": [
        "বলুন: 'কন্ট্রোলারের ওপর নির্ভর না করে স্কিমা লেভেলে পাসওয়ার্ড হ্যাশ ও সফট-ডিলিট হ্যান্ডেল করা অনেক বেশি নিরাপদ ও পেশাদার কোডিং প্র্যাকটিস।'"
      ]
    }
  },
  {
    "id": "db-mock-c4-diff-delete-truncate-drop",
    "questionNumber": 35,
    "question": "What is the difference between DELETE, TRUNCATE & DROP in SQL?",
    "banglaQuestion": "SQL-এ DELETE, TRUNCATE এবং DROP কমান্ডের মধ্যে মূল পার্থক্য কী?",
    "topic": "SQL & Relational DB",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "SQL",
      "DELETE",
      "TRUNCATE",
      "DROP",
      "DDL",
      "DML"
    ],
    "english": {
      "quickAnswer": "`DELETE` is a DML command that removes specific rows with rollback logging; `TRUNCATE` is a fast DDL command that deallocates all table data pages; `DROP` is a DDL command that permanently removes the entire table structure and data.",
      "interviewSpeech": "These three commands differ fundamentally in scope, command classification, and logging overhead: **DELETE** is a DML (Data Manipulation Language) command. It removes specific rows using a `WHERE` clause, logs every individual deleted row to the transaction log, fires database triggers, and can be rolled back. **TRUNCATE** is a DDL command. It removes all rows by deallocating the physical data pages directly on disk without scanning individual rows. It does not fire row triggers, resets auto-increment counters, and is exponentially faster than DELETE. **DROP** is a DDL command that completely deletes both the data AND the table definition, indexes, constraints, and permissions from the database schema entirely.",
      "deepDive": [
        "**DELETE**: Row-by-row logging. Safe, supports `WHERE`, can be slow for millions of rows.",
        "**TRUNCATE**: Page-level deallocation. Cannot have a `WHERE` clause. High-speed table clearing.",
        "**DROP**: Obliterates the table structure entirely (`Table does not exist`)."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "DELETE vs TRUNCATE vs DROP",
        "code": "-- 1. DELETE: Removes filtered rows, logs each row\nDELETE FROM users WHERE status = 'INACTIVE';\n\n-- 2. TRUNCATE: Empties entire table instantly, resets IDs, table structure remains\nTRUNCATE TABLE users;\n\n-- 3. DROP: Removes table structure, metadata, indexes, and all data forever\nDROP TABLE users;"
      },
      "commonMistakes": [
        "Believing TRUNCATE cannot be rolled back (in engines like PostgreSQL and SQL Server inside a transaction block, TRUNCATE CAN be rolled back)."
      ],
      "proTips": [
        "In interviews, clearly classify them: 'DELETE is DML; TRUNCATE and DROP are DDL commands.'"
      ]
    },
    "bangla": {
      "quickAnswer": "DELETE (DML) ফিল্টার অনুযায়ী নির্দিষ্ট রো মুছে ফেলে ও প্রতি রো-র লগ রাখে; TRUNCATE (DDL) সম্পূর্ণ টেবিলের সব ডেটা এক নিমেষে মুছে আইডি রিসেট করে; DROP (DDL) পুরো টেবিলের স্ট্রাকচারসহ সবকিছু স্থায়ীভাবে ধ্বংস করে।",
      "interviewSpeech": "এই তিনটির মধ্যে পার্থক্য অত্যন্ত গুরুত্বপূর্ণ। **DELETE** হলো একটি DML কমান্ড। এটি `WHERE` ক্লজ দিয়ে নির্দিষ্ট রো মুছতে পারে এবং প্রতিটি রো মোছার বিস্তারিত ট্রানজ্যাকশন লগ রাখে। এটি রো-লেভেল ট্রিগার ফায়ার করে এবং তুলনামূলকভাবে কিছুটা ধীরগতির। **TRUNCATE** হলো একটি DDL কমান্ড। এটি কোনো `WHERE` ক্লজ ছাড়া একবারে পুরো টেবিলের ডেটা পেজ ডিস্ক থেকে ডিলিট করে দেয়, অটো-ইনক্রিমেন্ট আইডি ১-এ রিসেট করে এবং কোটি কোটি ডেটা কয়েক মিলি-সেকেন্ডে খালি করে ফেলে। আর **DROP** কমান্ড টেবিলের ডেটাসহ তার পুরো স্কিমা, কাঠামো, ইনডেক্স ও পারমিশন চিরতরে ডাটাবেস থেকে মুছে দেয়।",
      "deepDive": [
        "**DELETE**: নির্দিষ্ট রো মুছতে ব্যবহৃত হয় (`WHERE` সাপোর্ট করে)।",
        "**TRUNCATE**: টেবিলের খোলস রেখে ভেতরের সব ডেটা ঝেড়ে ফেলে দেয়।",
        "**DROP**: পুরো টেবিলটাই গায়েব করে দেয়।"
      ],
      "commonMistakes": [
        "TRUNCATE-এ `WHERE` ক্লজ ব্যবহারের চেষ্টা করা (এটি পুরো টেবিল একবারে পরিষ্কার করে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে DML বনাম DDL পার্থক্যটি প্রথমে উল্লেখ করুন।"
      ]
    }
  },
  {
    "id": "db-mock-c4-benefits-using-prisma",
    "questionNumber": 36,
    "question": "What are the benefits of using Prisma?",
    "banglaQuestion": "আধুনিক ব্যাকএন্ড অ্যাপ্লিকেশনে Prisma ORM ব্যবহারের মূল সুবিধাগুলো কী কী?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "ORM",
      "Developer Experience",
      "TypeScript",
      "Migrations"
    ],
    "english": {
      "quickAnswer": "Prisma provides human-readable declarative modeling, automated end-to-end type safety, deterministic migrations (Prisma Migrate), high-performance connection pooling, and an intuitive graphical database GUI (Prisma Studio).",
      "interviewSpeech": "Prisma has revolutionized developer experience in the TypeScript ecosystem. Its core benefits include: 1) **Declarative Modeling**: The `schema.prisma` DSL is clean, human-readable, and defines relationships intuitively. 2) **Automated Type Safety**: Zero boilerplate interface writing—Prisma generates tailored TypeScript types from your schema on build. 3) **Prisma Migrate**: Deterministic, version-controlled SQL migration generation that prevents database drift across environments. 4) **Intuitive Query API**: Eliminates SQL injection vulnerabilities while returning exactly the shape of data you requested without complex JOIN syntax. 5) **Prisma Studio**: A built-in browser GUI for rapid visual inspection and manipulation of records during development.",
      "deepDive": [
        "**Prisma vs TypeORM/Sequelize**: TypeORM relies heavily on experimental TypeScript decorators and mutable classes; Prisma uses clean declarative schemas and generates immutable query engines.",
        "**SQL Injection Prevention**: All queries are parameterized automatically at the Rust query engine layer.",
        "**Multi-Database Compatibility**: Write the same Prisma queries across PostgreSQL, MySQL, SQLite, SQL Server, CockroachDB, and MongoDB."
      ],
      "commonMistakes": [
        "Assuming Prisma is just another heavy, slow ORM; Prisma's core query engine is written in optimized Rust."
      ],
      "proTips": [
        "Mention the Rust query engine under the hood: 'Prisma delivers high throughput because query planning and SQL generation are executed by a compiled Rust binary.'"
      ]
    },
    "bangla": {
      "quickAnswer": "১) এন্ড-টু-এন্ড টাইপ সেফটি, ২) ডিক্ল্যারেটিভ স্কিমা মডেলিং, ৩) অটোমেটেড SQL মাইগ্রেশন (Prisma Migrate), ৪) SQL ইনজেকশন রোধ, এবং ৫) বিল্ট-ইন ভিজ্যুয়াল ডেটা ভিউয়ার (Prisma Studio)।",
      "interviewSpeech": "Node.js এবং TypeScript ইকোসিস্টেমে Prisma হলো আধুনিক ডেভেলপারদের সেরা পছন্দ। এর প্রধান সুবিধাগুলো হলো: ১) **সহজ স্কিমা মডেলিং**: `schema.prisma` ফাইলে রিলেশন ও মডেল খুব সহজে মানুষের পড়ার মতো করে ডিফাইন করা যায়। ২) **১০০% টাইপ সেফটি**: ডাটাবেস পরিবর্তন হলে স্বয়ংক্রিয়ভাবে টাইপস্ক্রিপ্ট টাইপ তৈরি হয়ে যায়, ফলে রানটাইম বাগের ঝুঁকি শূন্যের কোঠায় নেমে আসে। ৩) **নিরাপদ মাইগ্রেশন**: `prisma migrate` দিয়ে নিখুঁত SQL ফাইল জেনারেট করে ডাটাবেসের সংস্করণ ট্র্যাকিং করা যায়। ৪) **SQL ইনজেকশন প্রটেকশন**: প্রিজমা স্বয়ংক্রিয়ভাবে প্যারামিটারাইজড কুয়েরি চালায়। ৫) **Prisma Studio**: ব্রাউজারেই একটি সুন্দর ইন্টারফেস পাওয়া যায় যেখান থেকে সরাসরি ডেটা দেখা ও এডিট করা যায়।",
      "deepDive": [
        "**রাস্ট (Rust) ইঞ্জিন**: প্রিজমার ব্যাকগ্রাউন্ড ইঞ্জিনটি রাস্টে লেখা, যা এটিকে সাধারণ নোড ওআরএম-এর চেয়ে দ্রুতগতির করে।",
        "**মাল্টি-ডাটাবেস সাপোর্ট**: একই কোড দিয়ে PostgreSQL, MySQL বা MongoDB-তে কাজ করা যায়।"
      ],
      "commonMistakes": [
        "টাইপ ওআরএম-এর মতো জটিল ডেকোরেটর লেখা লাগে ভাবা। প্রিজমায় কোনো জটিল ডেকোরেটর নেই।"
      ],
      "proTips": [
        "ইন্টারভিউতে বলুন: 'Prisma Studio ডেভেলপমেন্টের সময় ডেটা ভেরিফাই করতে প্রচুর সময় বাঁচিয়ে দেয়।'"
      ]
    }
  },
  {
    "id": "db-mock-c4-clustered-vs-non-clustered-indexes",
    "questionNumber": 37,
    "question": "What is the difference between clustered vs non-clustered indexes?",
    "banglaQuestion": "Clustered Index এবং Non-Clustered Index-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "Scaling & Optimization",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Indexing",
      "Clustered Index",
      "Non-Clustered Index",
      "SQL",
      "B-Tree"
    ],
    "english": {
      "quickAnswer": "A Clustered Index dictates the physical sorting and storage order of the actual table rows on disk (only one per table), while a Non-Clustered Index is a separate secondary lookup structure containing pointers back to the data rows.",
      "interviewSpeech": "The difference is physical data organization versus secondary pointers. In a **Clustered Index**, the leaf nodes of the B-Tree *are* the actual table rows. Because physical rows on disk can only be sorted in one order, a table can have exactly ONE clustered index (almost always the Primary Key, such as in MySQL InnoDB). A **Non-Clustered (Secondary) Index** is an independent B-Tree structure stored separately from the table data. Its leaf nodes contain only the indexed column values and a pointer (or Primary Key reference) back to the actual data row. When querying via a non-clustered index, the engine traverses the index tree and then performs a 'bookmark lookup' to fetch the rest of the columns.",
      "deepDive": [
        "**Analogy**: A Clustered Index is like a Dictionary (the words are physically arranged alphabetically). A Non-Clustered Index is like the Index section at the back of a textbook (tells you the topic and page number to look up).",
        "**Storage Location**: Clustered index IS the table; Non-clustered indexes consume additional disk and RAM.",
        "**PostgreSQL Nuance**: Note that in PostgreSQL, standard tables are stored as unordered 'Heaps', and all indexes (including PK) are technically secondary indexes pointing to tuple IDs (`ctid`), though `CLUSTER` command can physically rewrite tables."
      ],
      "commonMistakes": [
        "Believing a table can have multiple clustered indexes (physical rows can only be arranged in one physical sequence)."
      ],
      "proTips": [
        "Use the Dictionary vs Textbook Index analogy—interviewers love this classic distinction."
      ]
    },
    "bangla": {
      "quickAnswer": "Clustered Index ডিস্কে টেবিলের আসল ডেটা কীভাবে সাজানো থাকবে তা নির্ধারণ করে (টেবিলে কেবল ১টিই হতে পারে), আর Non-Clustered Index হলো বইয়ের সূচিপত্রের মতো আলাদা ইনডেক্স যা মূল ডেটার পেজ নম্বর পয়েন্ট করে।",
      "interviewSpeech": "পার্থক্যটি ডেটার ফিজিক্যাল স্টোরেজ এবং পয়েন্টারের মধ্যে। **Clustered Index** ডাটাবেস ডিস্কে আসল রেকর্ডগুলোকে সরাসরি নির্দিষ্ট ক্রমে সাজিয়ে রাখে। যেহেতু ডিস্কের ডেটাকে শারীরিকভাবে কেবল একটি ক্রমেই সাজানো সম্ভব, তাই একটি টেবিলে একটির বেশি Clustered Index থাকতে পারে না (সাধারণত Primary Key-ই ক্ল্যাস্টারড ইনডেক্স হয়)। অন্যদিকে **Non-Clustered Index** হলো মূল টেবিল থেকে আলাদা একটি স্বতন্ত্ৰ B-Tree ইনডেক্স। এর পাতায় শুধু ইনডেক্স করা ফিল্ডের মান এবং মূল ডেটা রো-র মেমোরি পয়েন্টার থাকে। কুয়েরি করার সময় ডাটাবেস আগে ইনডেক্স খুঁজে পায়, তারপর পয়েন্টার ধরে মূল টেবিলের ডেটা নিয়ে আসে।",
      "deepDive": [
        "**উপমা**: ডিকশনারি হলো Clustered Index (শব্দগুলো নিজেই বর্ণানুক্রমে সাজানো থাকে)। আর পাঠ্যবইয়ের পেছনের সূচিপত্র হলো Non-Clustered Index (টপিক দেওয়া থাকে এবং পাশে পৃষ্ঠা নম্বর পয়েন্ট করা থাকে)।",
        "**সংখ্যা**: Clustered Index মাত্র ১টি হতে পারে; Non-Clustered Index প্রয়োজনমতো একাধিক হতে পারে।"
      ],
      "commonMistakes": [
        "একটি টেবিলে একাধিক ক্ল্যাস্টারড ইনডেক্স বানানো সম্ভব ভাবা।"
      ],
      "proTips": [
        "ডিকশনারি ও পাঠ্যবইয়ের ইনডেক্সের উপমাটি দিন—ইন্টারভিউয়ার এক বাক্যে আপনার কনসেপ্টের গভীরতা বুঝে যাবেন।"
      ]
    }
  },
  {
    "id": "db-mock-c4-prisma-middleware-experience",
    "questionNumber": 38,
    "question": "Did you ever use your Prisma middleware (and client extensions)?",
    "banglaQuestion": "আপনি কি কখনও Prisma Middleware বা Client Extensions ব্যবহার করেছেন? এর বাস্তব ব্যবহার কী?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "High",
    "tags": [
      "Prisma",
      "Middleware",
      "Client Extensions",
      "Soft Delete",
      "Logging"
    ],
    "english": {
      "quickAnswer": "Yes, Prisma Middleware (and modern Prisma Client Extensions `$extends`) is widely used for query performance logging, global soft-deletion filtering, and automated audit timestamps.",
      "interviewSpeech": "Yes, I have utilized Prisma Middleware and its modern successor, Prisma Client Extensions (`prisma.$extends`). A very common production implementation is **Global Soft-Deletion**: instead of manually appending `where: { isDeleted: false }` to every single query in our services, I configured an extension that intercepts all `findMany`, `findFirst`, and `findUnique` operations to automatically inject `{ isDeleted: false }`, and transforms `delete` calls into `update: { isDeleted: true }`. Another vital use case is **Query Performance Monitoring**—calculating query execution time and logging warnings whenever a query exceeds 200 milliseconds to detect unindexed bottlenecks in development.",
      "deepDive": [
        "**Prisma Middleware (Legacy) vs Extensions (Modern)**: Prisma v4.7+ introduced Client Extensions (`$extends`), which are type-safe and modular.",
        "**Audit Trails**: Automatically attaching `updatedBy` or `createdAt` timestamps to mutations.",
        "**Multi-Tenancy**: Automatically injecting `tenantId` into every database operation."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Global Soft-Delete with Prisma Client Extension",
        "code": "const prisma = new PrismaClient().$extends({\n  query: {\n    user: {\n      async findMany({ args, query }) {\n        // Automatically inject soft-delete filter\n        args.where = { ...args.where, isDeleted: false };\n        return query(args);\n      },\n      async delete({ args }) {\n        // Transform hard delete into soft-delete update!\n        return prisma.user.update({\n          where: args.where,\n          data: { isDeleted: true }\n        });\n      }\n    }\n  }\n});"
      },
      "commonMistakes": [
        "Not knowing that Prisma Middleware is deprecated in favor of Prisma Client Extensions (`$extends`) in modern Prisma v5+."
      ],
      "proTips": [
        "Highlighting Prisma Client Extensions shows that your Prisma knowledge is up to date with the latest 2024-2026 best practices."
      ]
    },
    "bangla": {
      "quickAnswer": "হ্যাঁ, গ্লোবাল সফট-ডিলিট (Soft-Delete) ফিল্টারিং, কুয়েরি এক্সিকিউশন টাইম লগিং এবং মাল্টি-টেন্যান্ট ডেটা আইসোলেশনে Prisma Client Extensions ($extends) ব্যবহার করেছি।",
      "interviewSpeech": "হ্যাঁ, আমি বাস্তব প্রজেক্টে Prisma Middleware এবং আধুনিক Prisma Client Extensions (`$extends`) ব্যবহার করেছি। এর সবচেয়ে চমৎকার ব্যবহার হলো **গ্লোবাল সফট-ডিলিট**: প্রতিটি সার্ভিসে বারবার `{ isDeleted: false }` ফিল্টার না লিখে, এক্সটেনশনের মাধ্যমে সব `find` কুয়েরিতে স্বয়ংক্রিয়ভাবে এটি যুক্ত করে দেওয়া যায় এবং `delete` কল হলে ব্যাকগ্রাউন্ডে `isDeleted: true` আপডেট করে দেওয়া যায়। এছাড়া **কোয়ারি লেটেন্সি লগিং**-এ এটি খুব কাজে দেয়—যেকোনো কুয়েরি যদি ২০০ মিলি-সেকেন্ডের বেশি সময় নেয়, তবে কনসোলে ওয়ার্নিং প্রিন্ট করে দেয়, ফলে অপ্টিমাইজেশন খুব সহজ হয়।",
      "deepDive": [
        "**Prisma $extends**: আধুনিক প্রিজমাতে মিডলওয়্যারের বদলে টাইপ-সেফ ক্লায়েন্ট এক্সটেনশন ব্যবহার করা হয়।",
        "**অডিট লগ**: কে কোন ডেটা পরিবর্তন করল তা স্বয়ংক্রিয়ভাবে সেভ করা যায়।"
      ],
      "commonMistakes": [
        "প্রিজমা ভার্সন ৫-এ যে `$extends` চলে তা না জানা।"
      ],
      "proTips": [
        "বলুন: 'Prisma Client Extensions ব্যবহার করে আমরা রিপিটেটিভ কোড পরিহার করে ড্রাই (DRY) প্রিন্সিপাল বজায় রাখি।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-diff-embedding-reference",
    "questionNumber": 39,
    "question": "What is the difference between embedding & reference in MongoDB?",
    "banglaQuestion": "MongoDB-তে Embedding (এম্বেডিং) এবং Referencing (রেফারেন্সিং)-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "MongoDB & NoSQL",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MongoDB",
      "Embedding",
      "Referencing",
      "Data Modeling"
    ],
    "english": {
      "quickAnswer": "Embedding stores related data directly inside the parent document as a nested subdocument (denormalized, fast reads), while Referencing stores an ObjectId pointing to a separate collection (normalized, avoids document growth).",
      "interviewSpeech": "This is the core architectural decision in NoSQL data modeling. **Embedding** encapsulates related data within a single document—such as embedding an Address inside a User. Its superpower is read performance: you fetch the entire entity in a single disk read without any JOINs or `$lookup`, and writes to that document are atomic. However, if the embedded array grows unbounded (e.g., thousands of comments on a post), it risks hitting MongoDB's 16MB document size limit and causes RAM fragmentation. **Referencing** stores the `_id` of a document in another collection, resembling a relational foreign key. It is the preferred choice when data is large, updated independently, or possesses a 1-to-Many cardinality where the 'Many' is unbounded.",
      "deepDive": [
        "**Rule of Thumb**: 'Embed when data is contained, bounded in size, and queried together. Reference when data is independently queried, large, or unbounded.'",
        "**16MB Limit**: Embedding an unbounded array is a classic anti-pattern leading to document overflow.",
        "**Query Cost**: Referencing requires multiple queries (`populate`) or server-side `$lookup` joins."
      ],
      "codeSnippet": {
        "language": "javascript",
        "caption": "Embedded Subdocuments vs Normalized Referencing",
        "code": "// Approach 1: Embedded (Fast, Atomic, Single Read)\n{\n  \"_id\": ObjectId(\"...\"),\n  \"title\": \"Clean Code\",\n  \"author\": { \"name\": \"Robert C. Martin\", \"bio\": \"Software Craftsman\" }\n}\n\n// Approach 2: Referenced (Decoupled, Normalized, Scalable)\n{\n  \"_id\": ObjectId(\"...\"),\n  \"title\": \"Clean Code\",\n  \"authorId\": ObjectId(\"66e81234567890abcdef1234\") // Points to Authors collection\n}"
      },
      "commonMistakes": [
        "Defaulting to referencing everywhere like in SQL, losing the read speed benefits of document databases.",
        "Embedding an array that can grow indefinitely (e.g. user activity logs)."
      ],
      "proTips": [
        "In interviews, categorize relationships into: 'One-to-Few' (always embed), 'One-to-Many' (embed or reference depending on access pattern), and 'One-to-Squillions' (always parent-reference)."
      ]
    },
    "bangla": {
      "quickAnswer": "Embedding সম্পর্কিত ডেটাকে মূল ডকুমেন্টের ভেতরে সাব-ডকুমেন্ট হিসেবে রেখে দেয় (সিঙ্গেল রিড, ফাস্ট), আর Referencing অন্য কালেকশনের ObjectId লিংক হিসেবে সংরক্ষণ করে (নরম্যালাইজড, ১৬MB লিমিট রোধ করে)।",
      "interviewSpeech": "NoSQL ডেটা মডেলিংয়ের সবচেয়ে গুরুত্বপূর্ণ সিদ্ধান্ত হলো এম্বেডিং বনাম রেফারেন্সিং। **Embedding** মানে হলো একটি ডকুমেন্টের ভেতরেই সম্পর্কিত সব তথ্য রাখা—যেমন ইউজারের ভেতরেই তার ঠিকানা বা সেটিংস রাখা। এর সবচেয়ে বড় সুবিধা হলো কোনো JOIN বা অতিরিক্ত কুয়েরি ছাড়াই ১টি মাত্র রিড অপারেশনে পুরো ডেটা পাওয়া যায়। তবে কোনো অ্যারে যদি আনলিমিটেড বড় হতে থাকে (যেমন একটি ব্লগের হাজার হাজার কমেন্ট), তখন এম্বেড করলে MongoDB-র ১৬ মেগাবাইট সাইজ লিমিট ক্রস করার ঝুঁকি থাকে। অন্যদিকে **Referencing** হলো SQL ফরেন কি-র মতো অন্য কালেকশনের আইডি সংরক্ষণ করা। ডেটা যদি বিশাল হয়, আলাদাভাবে বেশি অ্যাক্সেস হয় বা আনবাউন্ডেড গ্রোথ থাকে, তবে রেফারেন্সিং করাই আদর্শ।",
      "deepDive": [
        "**স্বর্ণালী নিয়ম**: ডেটা ছোট ও একসাথে পড়া হলে Embed; ডেটা বিশাল বা স্বাধীন হলে Reference।",
        "**১৬MB সীমা**: আনলিমিটেড অ্যারে এম্বেড করা নো-স্কিউএলের মারাত্মক অ্যান্টি-প্যাটার্ন।"
      ],
      "commonMistakes": [
        "SQL-এর অভ্যাসের কারণে সব জায়গায় রেফারেন্সিং করা, এতে NoSQL-এর গতির সুবিধা পাওয়া যায় না।"
      ],
      "proTips": [
        "ইন্টারভিউতে ৩টি ক্যাটাগরি উল্লেখ করুন: One-to-Few (এম্বেড), One-to-Many (পরিস্থিতি অনুযায়ী), এবং One-to-Squillions (প্যারেন্ট রেফারেন্স)।"
      ]
    }
  },
  {
    "id": "db-mock-c5-transaction-deadlock",
    "questionNumber": 40,
    "question": "What is a transaction deadlock in a database?",
    "banglaQuestion": "ডাটাবেসে Transaction Deadlock কী এবং এটি কেন ঘটে?",
    "topic": "Transactions & ACID",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Deadlock",
      "Transactions",
      "Locks",
      "Concurrency",
      "RDBMS"
    ],
    "english": {
      "quickAnswer": "A transaction deadlock is a state where two or more concurrent transactions are mutually blocked, each holding a lock that the other needs to proceed, resulting in an infinite standstill.",
      "interviewSpeech": "A deadlock occurs when two concurrent transactions have a cyclic lock dependency. For example: Transaction 1 locks Row A and requests a lock on Row B; simultaneously, Transaction 2 holds a lock on Row B and requests a lock on Row A. Neither transaction can proceed because each is waiting for the other to release its lock. Modern RDBMS engines feature automated **Deadlock Detection** algorithms (using Wait-For Graphs). Once a cyclic dependency is detected, the database engine automatically selects one transaction as the 'victim', aborts it with an error (e.g. PostgreSQL error `40P01: deadlock_detected`), and rolls it back so the other transaction can proceed.",
      "deepDive": [
        "**The Circular Wait Condition**: Tx 1 holds Resource A, wants B. Tx 2 holds Resource B, wants A. (Deadly Embrace).",
        "**Deadlock Victim**: The database rolls back the transaction that has accumulated the least amount of undo work.",
        "**Application Responsibility**: The application must catch the deadlock error and implement an exponential backoff retry policy."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "How a Deadlock Occurs",
        "code": "-- Time 1:\n-- Tx 1: UPDATE accounts SET balance = balance - 10 WHERE id = 1; (Locks Row 1)\n-- Tx 2: UPDATE accounts SET balance = balance - 20 WHERE id = 2; (Locks Row 2)\n\n-- Time 2:\n-- Tx 1: UPDATE accounts SET balance = balance + 10 WHERE id = 2; (Blocked: waiting for Tx 2 to release Row 2)\n-- Tx 2: UPDATE accounts SET balance = balance + 20 WHERE id = 1; (BLOCKED: waiting for Tx 1 -> DEADLOCK DETECTED!)"
      },
      "commonMistakes": [
        "Believing deadlocks mean a database bug (they are a natural consequence of concurrent locking)."
      ],
      "proTips": [
        "State that the database handles deadlocks by aborting the victim, but the application code must implement automated retry logic with jitter."
      ]
    },
    "bangla": {
      "quickAnswer": "Transaction Deadlock হলো এমন একটি অচলাবস্থা যেখানে দুটি কনকারেন্ট ট্রানজ্যাকশন একে অপরের দখল করা ডেটা লকের অপেক্ষায় অনির্দিষ্টকালের জন্য আটকে থাকে।",
      "interviewSpeech": "ডেডলক হলো কনকারেন্ট ট্রানজ্যাকশনের মধ্যে একটি সাইক্লিক লক নির্ভরতা। ধরা যাক, ১ম ট্রানজ্যাকশন রো 'A' লক করেছে এবং রো 'B' লক করতে চাইছে; একই সময়ে ২য় ট্রানজ্যাকশন রো 'B' লক করে রো 'A' লক করতে চাইছে। ফলে কেউই তার লক ছাড়ছে না এবং কেউই এগোতে পারছে না—একটি চিরস্থায়ী অচলাবস্থা তৈরি হয়েছে। আধুনিক ডাটাবেসগুলো (যেমন PostgreSQL) ভেতরে ভেতরে 'Wait-For Graph' চালিয়ে এই ডেডলক স্বয়ংক্রিয়ভাবে শনাক্ত করতে পারে। ডেডলক ধরা পড়লে ডাটাবেস যেকোনো একটি ট্রানজ্যাকশনকে 'ভিকটিম' (Victim) হিসেবে বেছে নিয়ে বাতিল ও রোলব্যাক করে দেয়, যাতে অন্য ট্রানজ্যাকশনটি নিরাপদে শেষ হতে পারে।",
      "deepDive": [
        "**সাইক্লিক নির্ভরতা**: ১ নং বসে আছে ২ নং-এর লকের আশায়, ২ নং বসে আছে ১ নং-এর লকের আশায়।",
        "**ভিকটিম নির্বাচন**: ডাটাবেস সাধারণত যে ট্রানজ্যাকশনে সবচেয়ে কম কাজ হয়েছে সেটিকে রোলব্যাক করে।"
      ],
      "commonMistakes": [
        "ডেডলক হওয়া মানে ডাটাবেস ক্র্যাশ করেছে ভাবা। এটি কনকারেন্সির একটি স্বাভাবিক বিষয় যা অ্যাপ্লিকেশনে হ্যান্ডেল করতে হয়।"
      ],
      "proTips": [
        "বলুন: 'ডেডলক এরর এলে অ্যাপ্লিকেশনের কাজ হলো সাথে সাথে এরর না দেখিয়ে ৩ বার এক্সপোনেনশিয়াল ব্যাক-অফ রিট্রাই (Retry) চালানো।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-diff-mysql-postgresql",
    "questionNumber": 41,
    "question": "What is the difference between MySQL and PostgreSQL?",
    "banglaQuestion": "MySQL এবং PostgreSQL-এর মধ্যে মূল পার্থক্য কী এবং কখন কোনটি বেছে নেবেন?",
    "topic": "SQL & Relational DB",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "MySQL",
      "PostgreSQL",
      "RDBMS",
      "Comparison",
      "JSONB"
    ],
    "english": {
      "quickAnswer": "MySQL is a lightweight, high-read-speed RDBMS widely used in standard web apps, while PostgreSQL is an advanced, highly extensible Object-Relational DBMS offering superior JSONB support, complex query parallelism, and strict SQL compliance.",
      "interviewSpeech": "Both are world-class open-source databases, but they cater to different philosophies. MySQL (backed by Oracle) focuses on speed, simplicity, and high read concurrency, widely popular in CMS, standard e-commerce, and LAMP stacks. PostgreSQL, by contrast, is known as the world's most advanced open-source database. It boasts strict SQL standard compliance, sophisticated Multi-Version Concurrency Control (MVCC), native support for rich data types (like Arrays, HSTORE, and binary indexed JSONB), powerful indexing mechanisms (GIN, GiST, BRIN), and massive extensibility through tools like PostGIS for geospatial data and pgvector for AI embeddings.",
      "deepDive": [
        "**JSON Handling**: MySQL supports JSON; PostgreSQL provides `JSONB` which is parsed into binary format and supports GIN indexing for sub-millisecond document lookups.",
        "**Concurrency & Locks**: PostgreSQL's MVCC implementation isolates reads from writes exceptionally well.",
        "**AI & Modern Ecosystem**: PostgreSQL leads modern AI development through `pgvector` for vector similarity search."
      ],
      "commonMistakes": [
        "Claiming MySQL does not support transactions (MySQL InnoDB engine fully supports ACID transactions)."
      ],
      "proTips": [
        "Selection rule: 'Choose MySQL for standard read-heavy web apps with simpler structures; choose PostgreSQL for complex analytics, JSONB requirements, GIS data, and modern AI/vector workflows.'"
      ]
    },
    "bangla": {
      "quickAnswer": "MySQL সহজ, লাইটওয়েট এবং রিড-হেভি সাধারণ ওয়েব অ্যাপ্লিকেশনের জন্য জনপ্রিয়; আর PostgreSQL অত্যন্ত শক্তিশালী, এক্সটেনসিবল, কঠোর SQL কমপ্লায়েন্ট এবং সেরা JSONB ও AI ভেক্টর সাপোর্ট দেয়।",
      "interviewSpeech": "উভয় ডাটাবেসই অসাধারণ হলেও তাদের মূল দর্শন আলাদা। MySQL তৈরি হয়েছে দ্রুতগতির রিড এবং সহজ আর্কিটেকচারের কথা মাথায় রেখে—যা ওয়ার্ডপ্রেস, পিএইচপি এবং সাধারণ ই-কমার্সে অত্যন্ত জনপ্রিয়। অন্যদিকে PostgreSQL-কে বলা হয় পৃথিবীর সবচেয়ে উন্নত ওপেন-সোর্স রিলেশনাল ডাটাবেস। এটি কঠোর SQL নিয়ম মেনে চলে, জটিল কুয়েরি ও প্যারালাল এক্সিকিউশনে সেরা, এবং এতে রয়েছে অসাধারণ `JSONB` সাপোর্ট (যা ডকুমেন্ট ডাটাবেসের মতো ইনডেক্স করা যায়)। এছাড়া জিওস্পেশিয়াল ডেটার জন্য PostGIS এবং আধুনিক AI অ্যাপ্লিকেশনে ভেক্টর খোঁজার জন্য `pgvector` ব্যবহারের কারণে আধুনিক ইঞ্জিনিয়ারিংয়ে PostgreSQL বেশি সমাদৃত।",
      "deepDive": [
        "**JSONB সুবিধা**: PostgreSQL-এর JSONB ফিল্ডে GIN ইনডেক্স বসিয়ে NoSQL-এর মতো গতি পাওয়া যায়।",
        "**AI ইকোসিস্টেম**: `pgvector` প্লাগিনের কারণে PostgreSQL এখন AI অ্যাপের প্রথম পছন্দ।"
      ],
      "commonMistakes": [
        "MySQL-এ ট্রানজ্যাকশন চলে না ভাবা (InnoDB ইঞ্জিনে পুরোপুরি ACID চলে)।"
      ],
      "proTips": [
        "বলুন: 'জটিল অ্যানালিটিক্স, হাই-স্কেল এন্টারপ্রাইজ এবং সেমি-স্ট্রাকচার্ড JSON ডেটার জন্য PostgreSQL-এর বিকল্প নেই।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-how-minimize-transaction-deadlocks",
    "questionNumber": 42,
    "question": "How can transaction deadlocks be minimized in databases?",
    "banglaQuestion": "ডাটাবেসে ট্রানজ্যাকশন ডেডলক কীভাবে কমানো বা প্রতিরোধ করা যায়?",
    "topic": "Transactions & ACID",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "tags": [
      "Deadlock",
      "Optimization",
      "Lock Ordering",
      "Transactions",
      "Best Practices"
    ],
    "english": {
      "quickAnswer": "Deadlocks can be minimized by accessing tables/rows in a consistent deterministic order, keeping transactions short and atomic, using proper indexing, and setting explicit lock timeouts with retry logic.",
      "interviewSpeech": "While deadlocks cannot be 100% prevented in highly concurrent systems, they can be minimized by following four critical engineering practices: First, **Enforce Consistent Lock Ordering**—always mutate multiple tables or rows in the exact same sequence across the codebase (e.g., if transferring between accounts, always lock the smaller account ID first before locking the larger ID). This mathematically breaks the circular wait condition. Second, **Keep Transactions Short**—never perform external API requests, email sending, or heavy file processing inside a transaction. Third, **Ensure Proper Indexing**—missing indexes cause the database to lock entire table ranges instead of specific rows. Fourth, **Tune Isolation Levels and Lock Timeouts**—downgrade from Serializable to Read Committed when applicable, and implement exponential backoff retries on the application tier.",
      "deepDive": [
        "**Deterministic Key Ordering Algorithm**: `const [first, second] = accountA.id < accountB.id ? [accountA, accountB] : [accountB, accountA];`",
        "**Lock Timeout Configuration**: Set `SET lock_timeout = '2s';` to fail fast rather than hanging indefinitely.",
        "**Optimistic Locking**: Use version counters (`WHERE version = 1`) to avoid taking aggressive pessimistic database locks."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Deterministic Lock Ordering to Prevent Deadlocks",
        "code": "// Prevent Deadlock by ordering Account IDs before locking\nasync function transferMoney(fromId: number, toId: number, amount: number) {\n  const [firstId, secondId] = fromId < toId ? [fromId, toId] : [toId, fromId];\n\n  await prisma.$transaction(async (tx) => {\n    // Always lock the lower ID first!\n    await tx.$executeRaw`SELECT * FROM accounts WHERE id = ${firstId} FOR UPDATE`;\n    await tx.$executeRaw`SELECT * FROM accounts WHERE id = ${secondId} FOR UPDATE`;\n\n    // Perform balance transfer safely without deadlocks...\n  });\n}"
      },
      "commonMistakes": [
        "Allowing transactions to lock rows in arbitrary random order across different service endpoints."
      ],
      "proTips": [
        "Always highlight: 'The #1 architectural solution to deadlocks is deterministic resource ordering across all application transactions.'"
      ]
    },
    "bangla": {
      "quickAnswer": "১) সব কুয়েরিতে একই ক্রমানুসারে (Consistent Order) রো লক করা, ২) ট্রানজ্যাকশন ছোট রাখা, ৩) ইনডেক্স ব্যবহার করা যাতে টেবিল লক না হয়, এবং ৪) অ্যাপ্লিকেশনে রিট্রাই লজিক রাখা।",
      "interviewSpeech": "কনকারেন্ট সিস্টেমে ডেডলক কমাতে আমি ৪টি নিয়ম কঠোরভাবে মেনে চলি: **১. নির্দিষ্ট লক অর্ডারিং (Consistent Ordering)**: একাধিক রো আপডেট করার সময় সবসময় একই অর্ডারে লক নিতে হবে। যেমন ব্যাংক ট্রান্সফারে সবসময় ছোট আইডি আগে এবং বড় আইডি পরে লক করলে সাইক্লিক নির্ভরতা গাণিতিকভাবে অসম্ভব হয়ে যায়। **২. ট্রানজ্যাকশন দ্রুত শেষ করা**: ট্রানজ্যাকশনের ভেতর কোনো বাইরের থার্ড পার্টি এপিআই কল বা ফাইল আপলোড না রাখা। **৩. সঠিক ইনডেক্সিং**: ইনডেক্স না থাকলে ডাটাবেস নির্দিষ্ট রো লক না করে পুরো টেবিল লক করে ফেলে, যা ডেডলক ডেকে আনে। **৪. অপটিমিস্টিক লকিং ও রিট্রাই লজিক**: ডেডলক ঘটলেও যেন ইউজার এরর না দেখে, অ্যাপ্লিকেশন লেভেলে ২-৩ বার অটোমেটিক রিট্রাই মেকানিজম রাখা।",
      "deepDive": [
        "**আইডি অর্ডারিং ফর্মুলা**: `first = Math.min(idA, idB); second = Math.max(idA, idB);`",
        "**লক টাইমআউট**: অনন্তকাল বসে না থেকে দ্রুত ফেল করানো যাতে ভিকটিম মুক্ত হয়।"
      ],
      "commonMistakes": [
        "কখনো A আগে B পরে, আবার অন্য এপিআই-তে B আগে A পরে আপডেট করা (এতেই ডেডলক তৈরি হয়)।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Deterministic Resource Ordering' শব্দটি বলুন—এটি ডেডলক প্রতিরোধে ইঞ্জিনিয়ারদের মূল অস্ত্র।"
      ]
    }
  },
  {
    "id": "db-mock-c5-prisma-connection-pooling",
    "questionNumber": 43,
    "question": "What is Prisma connection pooling and how does it work in serverless environments?",
    "banglaQuestion": "Prisma Connection Pooling কী এবং সার্ভারলেস বা এজ পরিবেশে এটি কেন অত্যন্ত গুরুত্বপূর্ণ?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "Connection Pooling",
      "Serverless",
      "PgBouncer",
      "Prisma Accelerate"
    ],
    "english": {
      "quickAnswer": "Connection pooling maintains a cache of pre-established physical database connections reused across queries, preventing the database server from exhausting its connection limit during high concurrency or serverless spikes.",
      "interviewSpeech": "Establishing a fresh TCP and TLS connection to a relational database like PostgreSQL takes considerable CPU and network time (up to 50-100ms per handshake). Furthermore, PostgreSQL allocates a separate OS process per connection, meaning 300 concurrent requests can exhaust database memory. Prisma Client includes an internal built-in connection pool where queries reuse idle connections. However, in **Serverless environments** (like AWS Lambda or Vercel Next.js App Router), functions scale to hundreds of concurrent lambdas, each spinning up its own connection pool, which quickly crashes PostgreSQL with 'too many connections'. To solve this, we place an external connection pooler like **PgBouncer** or **Prisma Accelerate** between the serverless app and the database.",
      "deepDive": [
        "**Default Pool Size**: In Prisma, `connection_limit = (num_physical_cpus * 2) + 1` by default.",
        "**Serverless Gotcha**: 1,000 serverless functions x default pool of 5 connections = 5,000 connections attempted, overwhelming DB limits.",
        "**PgBouncer Modes**: Session pooling vs Transaction pooling (Transaction pooling recommended for serverless)."
      ],
      "codeSnippet": {
        "language": "env",
        "caption": "Configuring Connection Pool in Prisma Connection String",
        "code": "# Standard connection pooling with limit and timeout\nDATABASE_URL=\"postgresql://user:password@localhost:5432/mydb?connection_limit=20&pool_timeout=10\"\n\n# Using PgBouncer in Serverless (Transaction Mode)\nDATABASE_URL=\"postgresql://user:password@pgbouncer.internal:6432/mydb?pgbouncer=true\"\nDIRECT_URL=\"postgresql://user:password@db.internal:5432/mydb\" # Used for migrations"
      },
      "commonMistakes": [
        "Running Prisma migrations through PgBouncer in transaction mode (migrations require direct connections, which is why Prisma provides `DIRECT_URL`)."
      ],
      "proTips": [
        "Mention the `DIRECT_URL` pattern in Prisma: use pooled URL for application traffic, and direct unpooled URL for `prisma migrate`."
      ]
    },
    "bangla": {
      "quickAnswer": "কানেকশন পুলিং আগে থেকেই তৈরি থাকা ডাটাবেস কানেকশন পুনরায় ব্যবহার করে পারফরম্যান্স বাড়ায় এবং সার্ভারলেস ট্রাফিকের চাপে ডাটাবেস ক্র্যাশ রোধ করে।",
      "interviewSpeech": "ডাটাবেসে প্রতিটি নতুন কানেকশন তৈরি করতে TCP ও TLS হ্যান্ডশেক মিলিয়ে ৫০-১০০ মিলি-সেকেন্ড সময় নষ্ট হয় এবং PostgreSQL-এ প্রতিটি কানেকশন আলাদা সার্ভার প্রসেস খুলে মেমোরি খরচ করে। Prisma Client-এর ভেতরে নিজস্ব কানেকশন পুল থাকে যা কানেকশন রিইউজ করে। কিন্তু **সার্ভারলেস পরিবেশে** (যেমন Vercel বা AWS Lambda) প্রতি রিকোয়েস্টে আলাদা আলাদা ফাংশন ইনস্ট্যান্স তৈরি হয়। ফলে শত শত ল্যাম্বডা একসাথে ডাটাবেসে কানেক্ট করতে গিয়ে ডাটাবেসের ম্যাক্সিমাম কানেকশন লিমিট শেষ করে দেয় এবং 'Too many connections' এরর দেয়। এই সংকট সমাধানে সার্ভারলেস অ্যাপ ও ডাটাবেসের মাঝখানে **PgBouncer** বা **Prisma Accelerate** ব্যবহার করা হয়।",
      "deepDive": [
        "**ডিফল্ট পুল সাইজ**: CPU কোর অনুযায়ী প্রিজমা নিজস্ব পুল নির্ধারণ করে।",
        "**সার্ভারলেস সমস্যা**: হাজারটা ল্যাম্বডা একসাথে উঠলে ডাটাবেস কয়েক সেকেন্ডে ডাউন হয়ে যায়।",
        "**DIRECT_URL কৌশল**: সাধারণ কুয়েরির জন্য পুলার ব্যবহার করা হলেও মাইগ্রেশন চালানোর জন্য সরাসরি আন-পুলড কানেকশন লাগে।"
      ],
      "commonMistakes": [
        "PgBouncer-এর ওপর দিয়ে মাইগ্রেশন চালানো (এতে মাইগ্রেশন ফেইল করে, তাই `DIRECT_URL` ব্যবহার করতে হয়)।"
      ],
      "proTips": [
        "বলুন: 'Next.js App Router ও সার্ভারলেস ডিপ্লয়মেন্টে PgBouncer বা Prisma Accelerate অপরিহার্য।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-diff-findunique-findfirst-prisma",
    "questionNumber": 44,
    "question": "What is the difference between findUnique & findFirst in Prisma?",
    "banglaQuestion": "Prisma-তে findUnique এবং findFirst ব্যবহারের মূল পার্থক্য ও সেরা প্র্যাকটিস কী?",
    "topic": "Prisma ORM",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Prisma",
      "findUnique",
      "findFirst",
      "Indexing",
      "Performance"
    ],
    "english": {
      "quickAnswer": "`findUnique` strictly requires unique/indexed identifier fields in its `where` clause for sub-millisecond point lookups; `findFirst` accepts any criteria, supports sorting, and returns the first matching record.",
      "interviewSpeech": "In Prisma, `findUnique` and `findFirst` reflect different access patterns: `findUnique` forces the developer to query exclusively on a field designated with `@id` (Primary Key) or `@unique` in `schema.prisma`. This guarantees at the compiler and database level that the query executes an optimized point lookup returning 0 or 1 row. `findFirst` is used when searching by non-unique fields (e.g. finding the first order with status 'PENDING' sorted by creation date). Using `findUnique` wherever possible allows Prisma to optimize query execution and leverage internal DataLoader batching.",
      "deepDive": [
        "**Compile-Time Guarantees**: TypeScript will throw an error if you pass a non-unique field to `findUnique`.",
        "**Batching**: Multiple `findUnique` calls inside the same tick are automatically batched into a single `SELECT ... WHERE id IN (...)` SQL query.",
        "**Sorting**: `findUnique` does NOT support `orderBy` (because only 1 record can exist); `findFirst` fully supports `orderBy`."
      ],
      "commonMistakes": [
        "Using `findFirst` when querying by unique fields like `id` or `email`, missing out on Prisma's automatic query batching optimization."
      ],
      "proTips": [
        "Mention DataLoader: 'Prisma automatically batches concurrent findUnique queries into single SQL IN-queries to eliminate N+1 problems.'"
      ]
    },
    "bangla": {
      "quickAnswer": "`findUnique` শুধুমাত্র `@id` বা `@unique` ইনডেক্স করা ফিল্ড দিয়ে ফাস্ট পয়েন্ট লুকআপ করে; আর `findFirst` যেকোনো সাধারণ ফিল্ড ও সর্টিং দিয়ে প্রথম ম্যাচিং রেকর্ড নিয়ে আসে।",
      "interviewSpeech": "Prisma-তে এই দুটির ব্যবহার ক্ষেত্র একদম স্পষ্ট: `findUnique`-এ শুধুমাত্র প্রাইমারি কি (`@id`) অথবা ইউনিক ফিল্ড (`@unique`) ব্যবহার করা যায়। ফলে ডাটাবেস নিশ্চিত জানে যে সর্বোচ্চ একটি রো রিটার্ন হবে এবং সরাসরি ইউনিক ইনডেক্স দিয়ে মিলি-সেকেন্ডের মধ্যে রেজাল্ট দিয়ে দেয়। অন্যদিকে `findFirst` যেকোনো সাধারণ ফিল্ড দিয়ে সার্চ করার সুযোগ দেয় এবং `orderBy` ব্যবহার করে যেকোনো শর্তের প্রথম রেকর্ডটি বের করে আনে। আইডি বা ইমেইল দিয়ে সার্চ করার সময় সবসময় `findUnique` ব্যবহার করা উচিত কারণ প্রিজমা এটি দিয়ে ব্যাকগ্রাউন্ডে কুয়েরি ব্যাচিং করতে পারে।",
      "deepDive": [
        "**টাইপস্ক্রিপ্ট গার্ড**: নন-ইউনিক ফিল্ড দিয়ে findUnique লিখলে কোড কম্পাইলই হবে না।",
        "**অটো ব্যাচিং**: একই সাথে একাধিক findUnique চললে প্রিজমা সেগুলোকে একটি মাত্র `IN (...)` কুয়েরিতে রূপান্তর করে।"
      ],
      "commonMistakes": [
        "আইডি দিয়ে খোঁজার সময়ও ভুল করে findFirst লেখা।"
      ],
      "proTips": [
        "বলুন: 'আইডি বা ইউনিক তথ্যের ক্ষেত্রে findUnique ব্যবহার করা হলো হাই-পারফরম্যান্স বেস্ট প্র্যাকটিস।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-diff-left-join-full-join",
    "questionNumber": 45,
    "question": "What is the difference between left join & full join in SQL?",
    "banglaQuestion": "SQL-এ Left Join এবং Full Join-এর মধ্যে মূল পার্থক্য কী?",
    "topic": "SQL & Relational DB",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "SQL",
      "Left Join",
      "Full Join",
      "Venn Diagram",
      "RDBMS"
    ],
    "english": {
      "quickAnswer": "A LEFT JOIN preserves all rows from the left table regardless of matches in the right table; a FULL JOIN preserves all rows from both tables, populating NULLs on whichever side lacks a matching row.",
      "interviewSpeech": "The core difference lies in directional retention versus bilateral retention. In a **LEFT JOIN**, every single row from Table A (the left table) is retained in the output. If a matching row exists in Table B, its columns are populated; if no match exists, Table B columns are padded with `NULL`. In a **FULL OUTER JOIN**, unmatched records from BOTH Table A and Table B are retained. If there are customers without orders, they appear with NULL order columns; if there are orphaned orders without valid customers, they appear with NULL customer columns. FULL JOIN represents the total mathematical union of both tables.",
      "deepDive": [
        "**Venn Diagram**: LEFT JOIN = All of A. FULL JOIN = All of A + All of B.",
        "**Database Support**: Native in PostgreSQL, SQL Server, Oracle; MySQL lacks a `FULL JOIN` keyword and must be emulated via `LEFT JOIN UNION RIGHT JOIN`.",
        "**Use Case for FULL JOIN**: Reconciling two financial systems to find unmatched discrepancies on both sides."
      ],
      "codeSnippet": {
        "language": "sql",
        "caption": "LEFT JOIN vs FULL OUTER JOIN",
        "code": "-- Left Join: All users, whether they have orders or not\nSELECT u.name, o.amount\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n\n-- Full Join: All users + All orders (even orphaned orders with missing users)\nSELECT u.name, o.amount\nFROM users u\nFULL OUTER JOIN orders o ON u.id = o.user_id;"
      },
      "commonMistakes": [
        "Attempting to run `FULL OUTER JOIN` directly in MySQL without using the `UNION` workaround."
      ],
      "proTips": [
        "Highlight financial auditing: 'FULL JOIN is exceptionally useful in data reconciliation to find orphans on both sides of a merger.'"
      ]
    },
    "bangla": {
      "quickAnswer": "LEFT JOIN বাম টেবিলের সব রেকর্ড বজায় রাখে (ডান পাশের ম্যাচ না থাকলে NULL দেয়); আর FULL JOIN উভয় টেবিলের সব রেকর্ড বজায় রাখে এবং যে পাশেই অমিল থাকুক সেখানে NULL বসিয়ে দেয়।",
      "interviewSpeech": "পার্থক্যটি ভেন ডায়াগ্রাম চিন্তা করলেই খুব সহজ হয়ে যায়। **LEFT JOIN**-এ বাম টেবিলের প্রতিটি রো বজায় থাকবেই। ডান টেবিলের সাথে ম্যাচ করলে তার মান বসবে, আর ম্যাচ না করলে ডান পাশের কলামগুলো ফাঁকা বা `NULL` থাকবে (যেমন: যেসব ইউজার কখনো কোনো অর্ডার করেনি তাদের লিস্ট করা)। অন্যদিকে **FULL OUTER JOIN** উভয় টেবিলের সম্পূর্ণ ডেটা নিয়ে আসে। কোনো ইউজারের অর্ডার না থাকলেও সে তালিকায় থাকবে, আবার কোনো অর্ডারের সাথে ইউজারের মিল না থাকলেও সেটি তালিকায় থাকবে এবং বিপরীত পাশে NULL বসে যাবে। এটি মূলত দুই টেবিলের সমস্ত ডেটার সার্বিক মিলন ঘটায়।",
      "deepDive": [
        "**LEFT JOIN**: প্যারেন্ট টেবিলের সম্পূর্ণ লিস্ট পেতে ব্যবহৃত হয়।",
        "**FULL JOIN**: দুটি সিস্টেমের মধ্যে হিসাব মেলানোর জন্য (Reconciliation) ব্যবহৃত হয়।"
      ],
      "commonMistakes": [
        "MySQL-এ সরাসরি FULL JOIN কাজ করে ভাবা (MySQL-এ LEFT JOIN এবং RIGHT JOIN লিখে UNION করতে হয়)।"
      ],
      "proTips": [
        "ভেন ডায়াগ্রামের উপমা দিয়ে বলুন: 'LEFT JOIN হলো বাম বৃত্তের পুরোটা, আর FULL JOIN হলো দুই বৃত্তের সার্বিক ইউনিয়ন।'"
      ]
    }
  },
  {
    "id": "db-mock-c5-database-replication",
    "questionNumber": 46,
    "question": "What is database replication?",
    "banglaQuestion": "ডাটাবেস রেপ্লিকেশন (Database Replication) কী এবং এটি কীভাবে কাজ করে?",
    "topic": "Scaling & Optimization",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Replication",
      "Primary-Replica",
      "Read Replicas",
      "High Availability",
      "WAL"
    ],
    "english": {
      "quickAnswer": "Database replication is the automated process of continuously synchronizing data from a primary database instance to one or more secondary replica instances for fault tolerance and read scaling.",
      "interviewSpeech": "Database replication is a foundational architecture for high availability and performance scaling. In a classic **Primary-Replica** (Master-Slave) topology, the Primary database node receives all write mutations (`INSERT`, `UPDATE`, `DELETE`). As mutations commit, the primary streams its Write-Ahead Log (WAL) or binary log to secondary Replica nodes, which replay those operations locally. This achieves two massive advantages: First, **High Availability & Disaster Recovery**—if the primary node dies, an automated failover promotes a replica to the new primary with minimal downtime. Second, **Horizontal Read Scaling**—analytics and read-heavy GET API traffic are routed to the replicas, preserving primary node CPU exclusively for mission-critical write transactions.",
      "deepDive": [
        "**Synchronous vs Asynchronous Replication**: Synchronous waits for replica acknowledgment before committing (zero data loss, slight latency); Asynchronous commits locally first and streams in the background (fast, but small replication lag).",
        "**Replication Lag**: In asynchronous replication, replicas might be a few milliseconds behind the primary, requiring sticky sessions for immediate read-after-write consistency.",
        "**Multi-Primary Replication**: Complex topology where multiple nodes accept writes, requiring conflict resolution strategies."
      ],
      "commonMistakes": [
        "Sending write mutations to a read replica (replicas are configured as read-only).",
        "Ignoring replication lag in critical workflows (e.g. user changes password on primary, then immediately tries to log in against a lagged replica)."
      ],
      "proTips": [
        "Explain Read-After-Write consistency: 'Always route write queries and their immediate subsequent reads to the primary database to avoid reading stale replica data.'"
      ]
    },
    "bangla": {
      "quickAnswer": "ডাটাবেস রেপ্লিকেশন হলো প্রাইমারি ডাটাবেসের ডেটাকে স্বয়ংক্রিয়ভাবে এক বা একাধিক সেকেন্ডারি রেপ্লিকা সার্ভারে ক্লোন ও সিঙ্ক করে রাখা—যাতে সার্ভার ক্র্যাশ এড়ানো এবং পড়ার গতি বাড়ানো যায়।",
      "interviewSpeech": "ডাটাবেস রেপ্লিকেশন হলো হাই-অ্যাভেইলেবিলিটি এবং স্কেলিংয়ের মূল হাতিয়ার। সাধারণ **Primary-Replica** আর্কিটেকচারে একটি প্রাইমারি (মাস্টার) সার্ভার থাকে যা সমস্ত রাইট অপারেশন (`INSERT`, `UPDATE`, `DELETE`) গ্রহণ করে। ডেটা সেভ হওয়ার সাথে সাথে প্রাইমারি সার্ভার তার লগ (WAL) সেকেন্ডারি রেপ্লিকা সার্ভারগুলোতে পাঠিয়ে দেয় এবং সেখানেও ডেটা সিঙ্ক হয়ে যায়। এর ফলে দুটি বিশাল সুবিধা পাওয়া যায়: **১. ডিজাস্টার রিকভারি**: কোনো কারণে প্রাইমারি সার্ভার পুড়ে গেলে বা ডাউন হলে সাথে সাথে একটি রেপ্লিকা সার্ভার নতুন প্রাইমারি হয়ে যায় এবং সিস্টেম সচল থাকে। **২. রিড ট্রাফিক স্কেলিং**: ওয়েবসাইটের ৯০% ট্রাফিক থাকে ডেটা পড়ার—সেই পড়ার ট্রাফিকগুলো রেপ্লিকা সার্ভারে পাঠিয়ে দিলে মূল সার্ভার একদম রিল্যাক্স থাকে।",
      "deepDive": [
        "**অ্যাসিঙ্ক্রোনাস রেপ্লিকেশন**: প্রাইমারি সাথে সাথে রেসপন্স দিয়ে ব্যাকগ্রাউন্ডে রেপ্লিকাতে ডেটা পাঠায়।",
        "**Replication Lag**: রেপ্লিকাতে ডেটা পৌঁছাতে কয়েক মিলি-সেকেন্ড দেরি হতে পারে, একে রেপ্লিকেশন ল্যাগ বলে।"
      ],
      "commonMistakes": [
        "রেপ্লিকা সার্ভারে ডেটা রাইট করার চেষ্টা করা (রেপ্লিকা সার্ভার সবসময় Read-Only থাকে)।"
      ],
      "proTips": [
        "ইন্টারভিউতে 'Read-After-Write Consistency' উল্লেখ করুন: ইউজার কিছু আপডেট করার ঠিক পরেই রিড করলে সেই কুয়েরিটি রেপ্লিকায় না পাঠিয়ে প্রাইমারি সার্ভারে পাঠাতে হয়।"
      ]
    }
  },
  {
    "id": "db-mock-c5-how-store-hashed-passwords",
    "questionNumber": 47,
    "question": "How do you store hashed passwords in databases?",
    "banglaQuestion": "ডাটাবেসে পাসওয়ার্ড সংরক্ষণ করার নিরাপদ পদ্ধতি কী?",
    "topic": "Security & Architecture",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "tags": [
      "Security",
      "Bcrypt",
      "Argon2",
      "Password Hashing",
      "Salt"
    ],
    "english": {
      "quickAnswer": "Never store plaintext or reversible passwords. Use a modern, slow, salted, memory-hard adaptive hashing algorithm like Argon2id or bcrypt, and store the resulting hash in a dedicated column.",
      "interviewSpeech": "Under no circumstances should passwords ever be stored in plaintext or encrypted using reversible symmetric encryption. The industry standard is to use a modern, adaptive, one-way cryptographic hashing algorithm like **Argon2id** (the winner of the Password Hashing Competition) or **bcrypt**. When a user creates a password, the system generates a cryptographically random, unique **Salt** and runs the password through a computationally intensive work factor (cost factor of 10-12 in bcrypt). The salt prevents Rainbow Table attacks, while the slow work factor thwarts brute-force hardware cracking via GPUs/ASICs. The resulting string—containing the algorithm ID, cost factor, salt, and hash digest—is stored in a `VARCHAR(255)` column. Verification uses constant-time comparison to prevent timing attacks.",
      "deepDive": [
        "**Why NOT SHA-256 or MD5**: Fast hashing algorithms (like SHA-256) are designed for message verification; a hacker with an modern GPU can test billions of SHA-256 hashes per second. Bcrypt/Argon2 are intentionally slow and memory-hard.",
        "**Salt**: A unique random byte sequence appended to passwords to ensure two users with the exact same password produce totally different hash digests.",
        "**Timing Attacks**: Authentication verification must compare hash strings using constant-time comparison functions (`crypto.timingSafeEqual`) to prevent side-channel timing analysis."
      ],
      "codeSnippet": {
        "language": "typescript",
        "caption": "Secure Bcrypt Hashing and Verification in Node.js",
        "code": "import bcrypt from 'bcrypt';\n\n// 1. Hashing on Registration (Cost Factor = 12)\nasync function hashPassword(plainTextPassword: string): Promise<string> {\n  const saltRounds = 12; // Computationally intensive to prevent brute force\n  return await bcrypt.hash(plainTextPassword, saltRounds);\n}\n\n// 2. Verification on Login (Constant-Time Safe)\nasync function verifyPassword(plainText: string, storedHash: string): Promise<boolean> {\n  // Automatically extracts salt & cost factor from storedHash and verifies\n  return await bcrypt.compare(plainText, storedHash);\n}"
      },
      "commonMistakes": [
        "Using fast hashing algorithms like MD5 or plain SHA-256.",
        "Using a hardcoded, static global salt across all users instead of unique per-password random salts.",
        "Encrypting passwords with AES instead of one-way hashing."
      ],
      "proTips": [
        "Mention Argon2: 'While bcrypt is industry standard, Argon2id is currently recommended by OWASP because it is memory-hard, making GPU and ASIC parallel cracking virtually impossible.'"
      ]
    },
    "bangla": {
      "quickAnswer": "কখনোই প্লেইন টেক্সট বা রিভার্সিবল এনক্রিপশনে রাখা যাবে না; সর্বদা ক্রিপ্টোগ্রাফিক সল্ট (Salt) এবং স্লো অ্যাডাপটিভ হ্যাশিং অ্যালগরিদম যেমন Argon2id বা bcrypt দিয়ে হ্যাশ করে রাখতে হবে।",
      "interviewSpeech": "ডাটাবেসে পাসওয়ার্ড সংরক্ষণে কোনো আপস করা যাবে না। পাসওয়ার্ড কখনোই প্লেইন টেক্সট বা রিভার্সিবল অ্যালগরিদম (যেমন AES) দিয়ে রাখা যাবে না, কারণ ডাটাবেস হ্যাক হলে কি (key) দিয়ে সব পাসওয়ার্ড উদ্ধার করা সম্ভব। সঠিক নিয়ম হলো একটি ওয়ান-ওয়ে ক্রিপ্টোগ্রাফিক অ্যালগরিদম—যেমন **Argon2id** বা **bcrypt** ব্যবহার করা। এটি প্রতিটি পাসওয়ার্ডের সাথে একটি ইউনিক র‍্যান্ডম 'Salt' যুক্ত করে এবং কস্ট ফ্যাক্টর (যেমন 12) দিয়ে গণনাকে ইচ্ছে করে কিছুটা ধীরগতির করে। সল্ট ব্যবহারের ফলে রেইনবো টেবিল অ্যাটাক কাজ করে না, আর স্লো হওয়ার কারণে হ্যাকাররা জিপিইউ দিয়ে কোটি কোটি ট্রাই করতে পারে না। স্টোর করা হ্যাশটি একটি নিরাপদ `VARCHAR(255)` কলামে সেভ রাখা হয়।",
      "deepDive": [
        "**SHA-256 কেন নয়?**: SHA-256 খুব ফাস্ট, জিপিইউ দিয়ে প্রতি সেকেন্ডে কোটি কোটি ট্রাই করা যায়। তাই পাসওয়ার্ডের জন্য স্লো অ্যালগরিদম (bcrypt, Argon2) দরকার।",
        "**Salt-এর কাজ**: একই পাসওয়ার্ড দুইজন দিলে সল্টের কারণে ডাটাবেসে তাদের হ্যাশ সম্পূর্ণ ভিন্ন দেখাবে।",
        "**টাইমিং অ্যাটাক**: পাসওয়ার্ড চেক করার সময় কনস্ট্যান্ট-টাইম তুলনা ব্যবহার করতে হয়।"
      ],
      "commonMistakes": [
        "MD5 বা SHA1 ব্যবহার করা (এগুলো সম্পূর্ণ ক্র্যাকড ও অনিরাপদ)।",
        "সব ইউজারের জন্য একই ফিক্সড সল্ট ব্যবহার করা।"
      ],
      "proTips": [
        "OWASP গাইডলাইন উল্লেখ করুন: 'OWASP বর্তমান সময়ে পাসওয়ার্ড হ্যাশিংয়ের জন্য Argon2id এবং bcrypt ব্যবহারের জোর সুপারিশ করে।'"
      ]
    }
  }
];

export const DATABASE_MOCK_SESSION: MockInterviewSession = {
  id: "database-sql-nosql-sep-2026",
  slug: "database-sql-nosql-sep-2026",
  title: "NLAP — Database (SQL vs NoSQL) Mock Interview Session",
  subtitle: "Comprehensive 47-Question Technical & Behavioral Interview Masterclass",
  date: "2026-09-16",
  formattedDate: "September 16, 2026",
  category: "Database (SQL vs NoSQL)",
  description:
    "An exhaustive mock interview covering Interpersonal/HR inquiries, MongoDB, Mongoose, PostgreSQL, MySQL, Normalization, ACID transactions, Prisma ORM, Sharding, Replication, and high-concurrency scaling. Fully equipped with bilingual English and Bengali responses, deep dives, code snippets, and pro tips.",
  totalQuestions: DATABASE_SQL_NOSQL_MOCK_QUESTIONS.length,
  durationEstimate: "90 - 120 mins",
  questions: DATABASE_SQL_NOSQL_MOCK_QUESTIONS,
};
