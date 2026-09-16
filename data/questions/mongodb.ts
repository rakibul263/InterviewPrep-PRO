import { Question } from "@/types";

export const mongodbQuestions: Question[] = [
  // ==========================================
  // 🔵 MongoDB Basics & Core Concepts (5 Questions)
  // ==========================================
  {
    id: "mongo-what-is-mongodb-bson",
    slug: "mongo-what-is-mongodb-bson",
    question: "What is MongoDB? (Document-oriented database, BSON format)",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**MongoDB** হলো একটি আধুনিক, ওপেন-সোর্স, ডিস্ট্রিবিউটেড এবং হাই-পারফরম্যান্স **Document-Oriented NoSQL Database**। এটি রিলেশনাল ডাটাবেসের টেবিল ও সারির পরিবর্তে ফ্লেক্সিবল **Collections** এবং **BSON (Binary JSON)** ফরম্যাটের ডকুমেন্টে ডেটা সংরক্ষণ করে। BSON হলো সাধারণ JSON-এর একটি অপ্টিমাইজড বাইনারি রূপ যা উচ্চগতির ট্রাভার্সাল নিশ্চিত করে এবং অতিরিক্ত ডেটা টাইপ যেমন **ObjectId, Date, 64-bit Integer, ও Binary Data** সমর্থন করে।",
    easyExplanation: "সহজ উপমা:\nএকটি রিলেশনাল ডাটাবেস যেন একটি কঠোর এক্সেল শিট যেখানে আগে থেকেই কলাম লক করা। আর MongoDB হলো একটি স্মার্ট ড্রয়ার যেখানে আপনি প্রতি ফাইলের জন্য আলাদা আলাদা সমৃদ্ধ JSON ফাইল রেখে দিচ্ছেন। কোনো ফাইলে ইউজারের শুধু ফোন নাম্বার থাকতে পারে, আবার কোনো ফাইলে ফেসবুক প্রোফাইল, ফ্রেন্ড লিস্ট এবং ছবিও থাকতে পারে।",
    interviewAnswer: "MongoDB is an open-source, document-oriented NoSQL database engineered for high availability, horizontal scalability, and developer agility. Instead of relational tables and foreign keys, it stores semi-structured records as BSON (Binary JSON) documents organized within Collections. BSON enriches standard JSON with traversability optimizations and rich enterprise data types—including `ObjectId` (12-byte primary key), `ISODate`, `Decimal128`, and raw binary buffers with a 16MB document size limit.",
    detailedExplanation: {
      whatItIs: "JSON/BSON ভিত্তিক আধুনিক ডকুমেন্ট স্টোর ডাটাবেস।",
      whyItExists: "ডাইনামিক স্কিমা এবং হরিজন্টাল ক্লাস্টার স্কেলিং সহজ করতে।",
      howItWorks: "WiredTiger স্টোরেজ ইঞ্জিন ব্যবহার করে মেমোরিতে BSON ডকুমেন্ট ক্যাশ করে এবং ডিস্কে কমপ্রেস করে রাখে।",
      whenToUse: "ক্যাটালগ, কন্টেন্ট ম্যানেজমেন্ট, মোবাইল ব্যাকএন্ড, রিয়েল-টাইম অ্যানালিটিক্স এবং দ্রুত বর্ধনশীল স্টার্টআপে।",
      keyPoints: [
        "Document = Equivalent to an RDBMS Row.",
        "Collection = Equivalent to an RDBMS Table.",
        "BSON provides faster binary traversal and lightweight indexing.",
        "Max document size limit is strictly 16 MB."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// MongoDB BSON Document এর বাস্তব উদাহরণ
{
  "_id": ObjectId("66e81234567890abcdef1234"), // 12-byte Unique BSON ObjectId
  "username": "rakibul263",
  "email": "rakibul@example.com",
  "roles": ["developer", "admin"],              // Nested Array
  "profile": {                                 // Embedded Sub-document
    "fullName": "Rakibul Islam",
    "location": "Dhaka, Bangladesh"
  },
  "isActive": true,
  "createdAt": ISODate("2024-09-16T10:00:00Z") // BSON Date
}`,
      explanationSteps: [
        { step: 1, title: "BSON Types", description: "ObjectId এবং ISODate নেটিভ BSON টাইপ।" },
        { step: 2, title: "Embedded Documents", description: "আলাদা টেবিল JOIN না করে প্রোফাইল অবজেক্ট ডকুমেন্টের ভেতরেই সংরক্ষিত।" }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Dynamic Product Catalog",
        description: "কাপড়ের সাইজ/কালার এবং ল্যাপটপের RAM/Processor ভিন্ন বৈশিষ্ট্য সত্ত্বেও একই কালেকশনে সহজে স্টোর করা হয়।"
      }
    ],
    interviewTips: {
      tip: "BSON বনাম JSON-এর মূল পার্থক্য বলুন: 'BSON হলো বাইনারি এনকোডিং যা Date, Binary, ও ObjectId সাপোর্ট করে এবং মেমোরিতে ফাস্ট ট্রাভার্সাল নিশ্চিত করে'।",
      deliveryStrategy: "সংজ্ঞা -> BSON vs JSON পার্থক্য -> 16MB লিমিট উল্লেখ করুন।",
      avoidSaying: [
        {
          wrong: "MongoDB সরাসরি টেক্সট ফাইল হিসেবে ডিস্কে JSON স্টোর করে।",
          right: "MongoDB অপটিমাইজড BSON বাইনারি ফরম্যাটে ডেটা সংরক্ষণ করে।"
        }
      ]
    },
    quickRevision: [
      "MongoDB = Document NoSQL ডাটাবেস।",
      "ডেটা BSON (Binary JSON) ফরম্যাটে থাকে।",
      "ডকুমেন্টের সাইজ সর্বোচ্চ 16MB।"
    ],
    followUpQuestions: [
      {
        question: "Why is MongoDB considered a NoSQL database?",
        targetId: "mongo-why-nosql-database",
        shortHint: "Non-relational, dynamic schema, horizontal scaling."
      }
    ],
    tags: ["MongoDB", "BSON", "NoSQL", "Document Database", "Architecture"]
  },
  {
    id: "mongo-why-nosql-database",
    slug: "mongo-why-nosql-database",
    question: "Why is MongoDB considered a NoSQL database?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "MongoDB-কে **NoSQL (Not Only SQL)** বলা হয় কারণ এটি রিলেশনাল টেবিল ও কলামের পরিবর্তে ডাইনামিক BSON ডকুমেন্ট ব্যবহার করে, কোনো ফিক্সড স্কিমা প্রয়োগ করে না, ডিস্ট্রিবিউটেড ক্লাস্টারে নেটিভ অনুভূমিক স্কেলিং (**Auto-sharding**) সমর্থন করে এবং ডিক্লোরেটিভ SQL-এর বদলে অবজেক্ট-ভিত্তিক **MQL (MongoDB Query Language)** ব্যবহার করে।",
    easyExplanation: "সহজ উপমা:\nএকটি ফরমাল রেজিস্ট্রেশন ফর্মে ৫টি ছক বাঁধা থাকে (SQL)। আর MongoDB হলো একটি সাদা ডায়েরি যেখানে যেকোনো তথ্যের নতুন প্যারাগ্রাফ যখন ইচ্ছা লিখে ফেলা যায়।",
    interviewAnswer: "MongoDB is categorized as NoSQL because it dispenses with relational tables, foreign key joins, and fixed DDL schemas in favor of a distributed document paradigm with schema agility, horizontal scaling via sharding, and rich native object mapping.",
    detailedExplanation: {
      whatItIs: "নন-রিলেশনাল ডকুমেন্ট ডাটাবেস হিসেবে MongoDB-র প্রকৃতি।",
      whyItExists: "বিশাল স্কেলের ক্লাউড অ্যাপ্লিকেশন সহজে হ্যান্ডেল করতে।",
      howItWorks: "ডকুমেন্ট পার্টিশনিং ও ডাইনামিক ফিল্ড স্টোরেজের মাধ্যমে।",
      whenToUse: "চ্যাট, সোশ্যাল ফিড, বিগ ডেটা এবং অ্যাজাইল স্টার্টআপ ডেভেলপমেন্টে।",
      keyPoints: [
        "Schema-on-read flexibility.",
        "Built-in horizontal scale-out via Sharded Clusters.",
        "Native JavaScript/JSON object querying."
      ]
    },
    realWorldExamples: [
      {
        title: "Real-Time Telemetry and Event Logging",
        description: "IoT সেন্সর ডেটা যেখানে প্রতি মুহূর্তে নতুন মেট্রিক যোগ হতে পারে তা NoSQL ডকুমেন্টে কোনো ডাউনটাইম ছাড়াই সেভ হয়।"
      }
    ],
    interviewTips: {
      tip: "NoSQL মানে 'Not Only SQL' এটি ইন্টারভিউয়ারকে মনে করিয়ে দিন।",
      deliveryStrategy: "৪টি মূল কারণ (Schema-less, Document model, Sharding, MQL) সংক্ষেপে বলুন।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে ডেটা অগোছালো থাকে তাই রুলস দেওয়া যায় না।",
          right: "প্রয়োজনে MongoDB-তে কঠোর JSON Schema Validator ব্যবহার করা যায়।"
        }
      ]
    },
    quickRevision: [
      "NoSQL কারণ: ফিক্সড স্কিমা নেই, BSON ডকুমেন্ট ব্যবহার করে এবং সহজে শার্ডিং করা যায়।"
    ],
    followUpQuestions: [
      {
        question: "How is MongoDB different from relational databases?",
        targetId: "mongo-vs-relational-databases",
        shortHint: "Collections vs Tables."
      }
    ],
    tags: ["NoSQL", "MongoDB", "Architecture", "Scaling"]
  },
  {
    id: "mongo-vs-relational-databases",
    slug: "mongo-vs-relational-databases",
    question: "How is MongoDB different from relational databases?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "MongoDB এবং Relational Databases (SQL)-এর মূল পার্থক্য:\n- **Structure**: SQL-এ Table/Row/Column; MongoDB-তে Collection/Document/Field।\n- **Schema**: SQL ফিক্সড স্কিমা; MongoDB ডাইনামিক স্কিমা।\n- **Relationships**: SQL-এ Foreign Key ও JOIN; MongoDB-তে Embedding ও `$lookup`।\n- **Scaling**: SQL মূলত Vertical Scaling; MongoDB নেটিভ Horizontal Sharding সমর্থন করে।",
    easyExplanation: "সহজ উপমা:\nSQL হলো ৩টি আলাদা ড্রয়ার থেকে জামা, প্যান্ট ও জুতো মিলিয়ে পরা (JOIN)। আর MongoDB হলো এক হ্যাঙ্গারে পুরো স্যুট ঝুলিয়ে রাখা (Embedding)।",
    interviewAnswer: "RDBMS enforces strict schema-on-write tables with foreign-key joins and scales vertically. MongoDB leverages polymorphic BSON collections with embedded sub-documents and native horizontal sharding.",
    detailedExplanation: {
      whatItIs: "ডকুমেন্ট স্টোর বনাম রিলেশনাল ইঞ্জিনের সরাসরি তুলনা।",
      whyItExists: "সিস্টেমের প্রয়োজনে সঠিক ইঞ্জিন বেছে নিতে।",
      howItWorks: "BSON ট্রি বনাম রিলেশনাল টেবিল পেজ।",
      whenToUse: "ফিনটেকে SQL; কন্টেন্ট ও হাই-ভলিউম অ্যাপে MongoDB।",
      keyPoints: [
        "Table = Collection; Row = Document; Column = Field.",
        "Embedding replaces joins for high-read performance.",
        "Native sharding enables multi-terabyte clusters."
      ]
    },
    realWorldExamples: [
      {
        title: "Mobile App Profile with Preferences",
        description: "মোবাইল অ্যাপে ইউজারের সেটিংস ও প্রেফারেন্স এক অবজেক্টে এমবেড করে রাখা হয়।"
      }
    ],
    interviewTips: {
      tip: "ম্যাপিং টেবিলটি মুখস্থ রাখুন: Table=Collection, Row=Document, Column=Field।",
      deliveryStrategy: "ডেটা স্ট্রাকচার -> স্কিমা -> স্কেলিং -> রিলেশনশিপ মেকানিজম।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে কোনো ট্রানজ্যাকশন সাপোর্ট করে না।",
          right: "MongoDB v4.0+ থেকে মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন সম্পূর্ণ সমর্থন করে।"
        }
      ]
    },
    quickRevision: [
      "Table = Collection, Row = Document, Column = Field।",
      "SQL = ফিক্সড স্কিমা ও JOIN; Mongo = ফ্লেক্সিবল স্কিমা ও Embedding।"
    ],
    followUpQuestions: [
      {
        question: "Describe what a document and a collection are in MongoDB.",
        targetId: "mongo-document-and-collection",
        shortHint: "JSON documents and collections."
      }
    ],
    tags: ["MongoDB", "SQL", "Database Comparison"]
  },
  {
    id: "mongo-document-and-collection",
    slug: "mongo-document-and-collection",
    question: "Describe what a document and a collection are in MongoDB.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "- **Document**: MongoDB-তে ডেটার মৌলিক একক (RDBMS Row-এর সমতুল্য); এটি BSON ফরম্যাটের একটি স্বয়ংসম্পূর্ণ অবজেক্ট যার নিজস্ব ইউনিক `_id` থাকে। সর্বোচ্চ সাইজ ১৬ মেগাবাইট।\n- **Collection**: সম্পর্কিত একাধিক ডকুমেন্টের একটি পাত্র বা গ্রুপ (RDBMS Table-এর সমতুল্য); এতে ভিন্ন ভিন্ন ফিল্ডের ডকুমেন্ট থাকতে পারে।",
    easyExplanation: "সহজ উপমা:\nড্রয়ার হলো **Collection** (Employees); আর ড্রয়ারের ভেতরে রাখা প্রতিটি কর্মীর ফাইল ফোল্ডার হলো **Document**।",
    interviewAnswer: "A document is the atomic unit of storage in MongoDB—a structured BSON document with a 16MB maximum limit. A collection is a schema-less grouping of related documents analogous to an RDBMS table.",
    detailedExplanation: {
      whatItIs: "MongoDB-র মৌলিক স্টোরেজ একক ও তার কন্টেইনার।",
      whyItExists: "ন্যাচারাল অবজেক্ট আকারে ডেটা গ্রুপ করতে।",
      howItWorks: "কালেকশন মেটাডাটা ম্যানেজ করে, ডকুমেন্ট BSON পেজে থাকে।",
      whenToUse: "সব MongoDB ডেটা সংরক্ষণে।",
      keyPoints: [
        "Documents cannot exceed 16MB.",
        "Collections are automatically created upon first insert.",
        "Capped collections provide fixed-size circular logging."
      ]
    },
    realWorldExamples: [
      {
        title: "News Articles Collection",
        description: "`articles` কালেকশনে হাজারো আর্টিকেলের ডকুমেন্ট রাখা হয়।"
      }
    ],
    interviewTips: {
      tip: "Capped Collections-এর কথা উল্লেখ করুন (ফিক্সড সাইজ যা পুরনো ডেটা ওভাররাইট করে)।",
      deliveryStrategy: "ডকুমেন্ট ও কালেকশনের সংজ্ঞা -> অ্যানালজি -> 16MB লিমিট।",
      avoidSaying: [
        {
          wrong: "একটি কালেকশনে সব ডকুমেন্টের ফিল্ড এক হতে হবে।",
          right: "MongoDB পলিমরফিক, তাই ডকুমেন্টে ভিন্ন ফিল্ড থাকতে পারে।"
        }
      ]
    },
    quickRevision: [
      "Document = BSON রেকর্ড (Row)।",
      "Collection = ডকুমেন্টের গ্রুপ (Table)।"
    ],
    followUpQuestions: [
      {
        question: "Explain the importance of the _id field in MongoDB documents.",
        targetId: "mongo-importance-of-id-field",
        shortHint: "12-byte unique ObjectId."
      }
    ],
    tags: ["Document", "Collection", "MongoDB Architecture"]
  },
  {
    id: "mongo-importance-of-id-field",
    slug: "mongo-importance-of-id-field",
    question: "Explain the importance of the _id field in MongoDB documents.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে `_id` ফিল্ডটি প্রতিটি ডকুমেন্টের **বাধ্যতামূলক Primary Key**। এটি না দিলে MongoDB স্বয়ংক্রিয়ভাবে একটি **12-byte BSON ObjectId** তৈরি করে। MongoDB ডিফল্টভাবে `{ _id: 1 }` ফিল্ডের ওপর একটি **Unique B-Tree Index** তৈরি করে রাখে যা কখনো ড্রপ করা যায় না।",
    easyExplanation: "সহজ উপমা:\nহাসপাতালে নবজাতক শিশুর পায়ে লাগানো ইউনিক বারকোড ট্যাগ হলো `_id`। এটি দিয়ে কোটি কোটি ডকুমেন্টের ভেতর থেকে নিখুঁতভাবে ১টি ডকুমেন্টকে চেনা যায়।",
    interviewAnswer: "The `_id` field is the immutable primary key of every MongoDB document with an automatic, non-droppable unique index. Defaulting to a 12-byte BSON ObjectId comprising a 4-byte timestamp, 5-byte random identifier, and 3-byte counter.",
    detailedExplanation: {
      whatItIs: "ডকুমেন্টের অনন্য পরিচয়পত্র ও প্রাইমারি কি।",
      whyItExists: "ডিস্ট্রিবিউটেড ক্লাস্টারে ইউনিকনেস নিশ্চিত করতে।",
      howItWorks: "টাইমস্ট্যাম্প ও র্যান্ডম মেশিনের হ্যাশ দিয়ে 24 হেক্স ক্যারেক্টার বানায়।",
      whenToUse: "সব ডকুমেন্টে ব্যবহৃত হয়।",
      keyPoints: [
        "Mandatory in all documents.",
        "12-byte ObjectId has 4-byte timestamp, 5-byte random, 3-byte counter.",
        "`_id.getTimestamp()` extracts creation time."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ObjectId ইন্টারনাল স্ট্রাকচার ও মেথড
const { ObjectId } = require('mongodb');

const id = new ObjectId();
console.log(id.toString()); // '66e81234567890abcdef1234' (24 hex characters)

// _id থেকে সরাসরি ক্রিয়েশন ডেট বের করা যায়
console.log(id.getTimestamp()); // 2024-09-16T10:15:32.000Z`,
      explanationSteps: [
        { step: 1, title: "24 Hex String", description: "১২ বাইটের বাইনারি মানকে হেক্স স্ট্রিং হিসেবে প্রদর্শন করে।" },
        { step: 2, title: "Timestamp Extraction", description: "প্রথম ৪ বাইট থেকে নিখুঁত ক্রিয়েশন টাইম পাওয়া যায়।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Chronological Post Sorting",
        description: "`_id` নিজে টাইমস্ট্যাম্প অনুযায়ী সর্টেড থাকায় `sort({ _id: -1 })` দিয়ে লেটেস্ট পোস্ট পাওয়া যায়।"
      }
    ],
    interviewTips: {
      tip: "ObjectId-র ১২ বাইটের ৩টি অংশ (4-byte timestamp, 5-byte random, 3-byte counter) মুখস্থ বলুন।",
      deliveryStrategy: "সংজ্ঞা -> ১২ বাইটের ব্রেকডাউন -> getTimestamp() ফিচার।",
      avoidSaying: [
        {
          wrong: "_id তে অন্য কোনো কাস্টম মান দেওয়া যায় না।",
          right: "ডেভেলপার চাইলে স্ট্রিং বা ইন্টিজার কাস্টম _id দিতে পারে।"
        }
      ]
    },
    quickRevision: [
      "_id = বাধ্যতামূলক Primary Key।",
      "ডিফল্ট 12-byte ObjectId।",
      "`{ _id: 1 }` ইনডেক্স আনড্রপেবল।"
    ],
    followUpQuestions: [
      {
        question: "Explain what data modeling means in MongoDB.",
        targetId: "mongo-data-modeling-concept",
        shortHint: "Query-driven document design."
      }
    ],
    tags: ["_id", "ObjectId", "Primary Key", "Index"]
  },

  // ==========================================
  // 🔵 Data Modeling & Query Operators (8 Questions)
  // ==========================================
  {
    id: "mongo-data-modeling-concept",
    slug: "mongo-data-modeling-concept",
    question: "Explain what data modeling means in MongoDB.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে **Data Modeling** হলো অ্যাপ্লিকেশনের কুয়েরি প্যাটার্নের ওপর ভিত্তি করে BSON ডকুমেন্টের গঠন নির্ধারণ করার প্রক্রিয়া (**Query-Driven Modeling**)। রিলেশনাল ডাটাবেসের মতো 'ডেটা দেখতে কেমন' তা দিয়ে নয়, বরং **'অ্যাপ্লিকেশন কিভাবে ডেটা পড়বে ও লিখবে'** তার ওপর ভিত্তি করে Embedding বনাম Referencing সিদ্ধান্ত নেওয়া হয়।",
    easyExplanation: "সহজ উপমা:\nঅফিসে যাওয়ার সময় শার্ট ও টাই আলাদা ড্রয়ার থেকে না খুঁজে এক হ্যাঙ্গারে ঝুলিয়ে রাখা (Embedding)। যেন সকালে এক ক্লিকে পুরো সেট পাওয়া যায়।",
    interviewAnswer: "Data modeling in MongoDB is a query-driven design approach balancing between Embedded Data Models (denormalization for atomic, fast single-query reads) and Normalized/Referenced Models (ObjectIds across collections to prevent the 16MB document size ceiling).",
    detailedExplanation: {
      whatItIs: "কুয়েরি অপটিমাইজড ডকুমেন্ট স্কিমা ডিজাইন।",
      whyItExists: "নেটওয়ার্ক লেটেন্সি ও অতিরিক্ত জয়েন ছাড়াই হাই থ্রুপুট পেতে।",
      howItWorks: "একসাথে অ্যাক্সেস হওয়া ডেটা এমবেড করে, আনবাউন্ডেড ডেটা রেফারেন্স করে।",
      whenToUse: "সব MongoDB প্রজেক্টের শুরুতে।",
      keyPoints: [
        "Data accessed together should be stored together.",
        "Avoid embedding arrays that grow without bound.",
        "Query requirements drive the document schema."
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Product Details",
        description: "প্রোডাক্টের স্পেসিফিকেশন ও ভ্যারিয়েন্ট মূল প্রোডাক্ট ডকুমেন্টে এমবেড করা থাকে।"
      }
    ],
    interviewTips: {
      tip: "গোল্ডেন রুল বলুন: 'Data that is accessed together should be stored together'.",
      deliveryStrategy: "Query-driven দর্শন -> Embedding vs Referencing বিবেচনা।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে সবসময় সবকিছু এমবেড করাই একমাত্র নিয়ম।",
          right: "আনবাউন্ডেড ডেটায় রেফারেন্সিং ব্যবহার না করলে 16MB লিমিট ব্রেক করবে।"
        }
      ]
    },
    quickRevision: [
      "Data Modeling = কুয়েরি ভিত্তিক ডকুমেন্ট স্ট্রাকচার।",
      "Embedding (একসাথে থাকা) ও Referencing (আইডি দিয়ে লিংক)।"
    ],
    followUpQuestions: [
      {
        question: "Explain embedding and referencing in MongoDB.",
        targetId: "mongo-embedding-vs-referencing",
        shortHint: "Sub-documents vs normalized references."
      }
    ],
    tags: ["Data Modeling", "Schema Design", "MongoDB"]
  },
  {
    id: "mongo-embedding-vs-referencing",
    slug: "mongo-embedding-vs-referencing",
    question: "Explain embedding and referencing in MongoDB.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "- **Embedding (Denormalized)**: সম্পর্কিত চাইল্ড ডেটাকে সরাসরি প্যারেন্ট ডকুমেন্টের ভেতরে অবজেক্ট বা অ্যারে হিসেবে রাখা হয়। **1:1** এবং **1:Few** সম্পর্কের জন্য এটি সেরা কারণ কোনো JOIN ছাড়াই সিঙ্গেল কুয়েরিতে অ্যাটোমিকালি রিড করা যায়।\n- **Referencing (Normalized)**: চাইল্ড ডেটাকে আলাদা কালেকশনে রেখে তার `_id` প্যারেন্ট বা চাইল্ড ডকুমেন্টে রাখা হয়। **1:Many (Unbounded)** এবং **M:N** সম্পর্কের জন্য এটি সেরা, যাতে 16MB লিমিট অতিক্রম না করে।",
    easyExplanation: "সহজ উপমা:\nবইয়ের ভেতরেই চ্যাপ্টার প্রিন্ট করা হলো **Embedding**। আর লাইব্রেরির ক্যাটালগ কার্ডে বইয়ের তাকের নম্বর লিখে রাখা হলো **Referencing**।",
    interviewAnswer: "Embedding incorporates related data as nested subdocuments or arrays within a single document, providing atomic updates and zero-join read performance for 1:1 and 1:few relationships. Referencing stores related documents across separate collections linked by ObjectIds, preventing document bloating and unbounded array growth for 1:many and M:N relationships.",
    detailedExplanation: {
      whatItIs: "MongoDB-র দুটি কোর রিলেশনশিপ মডেলিং প্যারাডাইম।",
      whyItExists: "রিড স্পিড বনাম ডকুমেন্ট সাইজ লিমিটের ট্রেডঅফ ব্যালেন্স করতে।",
      howItWorks: "নেস্টেড BSON অবজেক্ট বনাম অন্য কালেকশনের ObjectId পয়েন্টার।",
      whenToUse: "অল্প ও ফিক্সড তথ্যে Embedding; আনবাউন্ডেড ও শেয়ার্ড তথ্যে Referencing।",
      keyPoints: [
        "Embed for 1:1 and 1:few relationships (bounded growth).",
        "Reference for 1:many (unbounded) and M:N relationships.",
        "Referenced documents can be populated or joined using $lookup."
      ]
    },
    realWorldExamples: [
      {
        title: "User Addresses vs Blog Comments",
        description: "ইউজারের ২-৩টি ঠিকানা ইউজার ডকুমেন্টে Embed করা হয়; কিন্তু ভাইরাল ব্লগের লাখ লাখ কমেন্ট আলাদা `comments` কালেকশনে Reference করা হয়।"
      }
    ],
    interviewTips: {
      tip: "'Unbounded Array Problem' টার্মটি উল্লেখ করুন—অ্যারেতে অসীম উপাদান যোগ হতে থাকলে ডকুমেন্ট ১৬ মেগাবাইট ছড়িয়ে ক্র্যাশ করবে, তাই সেখানে রেফারেন্সিং মাস্ট।",
      deliveryStrategy: "উভয়ের সংজ্ঞা -> কখন কোনটি বেছে নেবেন (1:Few vs 1:Many) -> বাস্তব উদাহরণ।",
      avoidSaying: [
        {
          wrong: "Referencing ব্যবহার করলে MongoDB আর NoSQL থাকে না।",
          right: "Referencing হলো NoSQL-এর একটি গুরুত্বপূর্ণ প্যাটার্ন যা আনবাউন্ডেড গ্রোথ প্রতিরোধ করে।"
        }
      ]
    },
    quickRevision: [
      "Embedding = ভেতরে থাকা (1:Few, Bounded, Fast read)।",
      "Referencing = আলাদা কালেকশনে ObjectId লিংক (1:Many, Unbounded)।"
    ],
    followUpQuestions: [
      {
        question: "Explain how one-to-one and one-to-many relationships are modeled in MongoDB.",
        targetId: "mongo-relationships-1-1-and-1-n",
        shortHint: "Modeling 1:1 and 1:N."
      }
    ],
    tags: ["Embedding", "Referencing", "Data Modeling", "Schema Design"]
  },
  {
    id: "mongo-relationships-1-1-and-1-n",
    slug: "mongo-relationships-1-1-and-1-n",
    question: "Explain how one-to-one and one-to-many relationships are modeled in MongoDB.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে রিলেশনশিপ মডেলিং:\n১. **One-to-One (1:1)**: সাধারণত একটি সাব-ডকুমেন্ট হিসেবে সরাসরি **Embed** করা হয় (যেমন User -> Profile)। তবে ডেটা খুব বড় হলে বা গোপনীয় হলে আলাদা কালেকশনে রেখে ObjectId দিয়ে রেফারেন্স করা যায়।\n২. **One-to-Few (1:N Bounded)**: প্যারেন্ট ডকুমেন্টের ভেতরেই অবজেক্টের একটি ছোট **Array Embed** করা হয় (যেমন User -> Addresses [২-৩টি ঠিকানা])।\n৩. **One-to-Many (1:N Unbounded)**: চাইল্ড কালেকশনে প্যারেন্টের `_id` রেফারেন্স করে রাখা হয় (**Parent Referencing**, যেমন একটি কোর্সে ১ লাখ স্টুডেন্ট রিভিউ)।",
    easyExplanation: "সহজ উপমা:\n- ১টি পাসপোর্ট ➔ ব্যক্তির পেটের ভেতর এমবেড করা (1:1)।\n- ব্যক্তির ২টি ফোন নাম্বার ➔ পকেটের ছোট ডায়েরিতে এমবেড করা (1:Few)।\n- একজন সেলিব্রিটির ১ কোটি ফলোয়ার ➔ প্রত্যেকের কপালের ফাইলে সেলিব্রিটির নাম লেখা (Parent Referencing, 1:Many)।",
    interviewAnswer: "1:1 relationships are typically modeled via embedded subdocuments for co-located reads, unless the document exceeds 16MB or security boundaries demand collection isolation. For 1:N, we distinguish between 1:Few (embedded array of subdocuments, e.g., user addresses) and 1:Squillions (Parent Referencing, where child documents store parent ObjectIds to avoid the 16MB unbounded array hazard).",
    detailedExplanation: {
      whatItIs: "1:1 এবং 1:N সম্পর্কের ব্যবহারিক বাস্তবায়ন নির্দেশিকা।",
      whyItExists: "অ্যারে গ্রোথ যেন ডাটাবেসকে ব্লোট না করে।",
      howItWorks: "Embedded sub-document, Child Referencing, অথবা Parent Referencing।",
      whenToUse: "সব ডেটাবেস স্কিমা প্ল্যানিংয়ে।",
      keyPoints: [
        "1:1 = Embedded subdocument.",
        "1:Few = Embedded array of subdocuments.",
        "1:Many (Unbounded) = Parent Referencing (child stores parent_id)."
      ]
    },
    realWorldExamples: [
      {
        title: "Course and Lesson Modules",
        description: "একটি কোর্সে ২০টি লেসন থাকলে তা কোর্সের ভেতরেই এমবেডেড থাকে; কিন্তু ১ লাখ স্টুডেন্ট এনরোলমেন্ট আলাদা কালেকশনে রেফারেন্স থাকে।"
      }
    ],
    interviewTips: {
      tip: "1:Many-কে দুটি ভাগে ভাগ করে বলুন: 1:Few (Embed) এবং 1:Many Unbounded (Parent Referencing)।",
      deliveryStrategy: "1:1 ব্যাখ্যা -> 1:Few ব্যাখ্যা -> 1:Many Unbounded-এ Parent Referencing-এর গুরুত্ব।",
      avoidSaying: [
        {
          wrong: "১ লাখ কমেন্টের সব আইডি পোস্ট ডকুমেন্টের একটি অ্যারেতে রাখা নিরাপদ।",
          right: "১ লাখ আইডি রাখলে অ্যারে বিশালাকার হবে এবং পারফরম্যান্স ক্র্যাশ করবে; চাইল্ডে পোস্ট আইডি রাখা উচিত।"
        }
      ]
    },
    quickRevision: [
      "1:1 = Embedded sub-document।",
      "1:Few = Embedded Array।",
      "1:Many Unbounded = Parent Referencing (Child holds Parent ID)।"
    ],
    followUpQuestions: [
      {
        question: "Explain how CRUD operations work in MongoDB",
        targetId: "mongo-crud-operations-deep-dive",
        shortHint: "insertOne, find, updateOne, deleteOne."
      }
    ],
    tags: ["1:1", "1:N", "Parent Referencing", "Relationships"]
  },
  {
    id: "mongo-crud-operations-deep-dive",
    slug: "mongo-crud-operations-deep-dive",
    question: "Explain how CRUD operations work in MongoDB",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে মৌলিক CRUD অপারেশনসমূহ:\n১. **Create**: `insertOne({ doc })` বা `insertMany([ docs ])` দিয়ে কালেকশনে নতুন BSON ডকুমেন্ট ঢোকানো হয়।\n২. **Read**: `find({ filter }, { projection })` এবং `findOne({ filter })` দিয়ে ডেটা কোয়েরি করা হয়।\n৩. **Update**: `updateOne({ filter }, { $set: { ... } })`, `updateMany()`, এবং `replaceOne()` দিয়ে ডেটা পরিবর্তন করা হয়।\n৪. **Delete**: `deleteOne({ filter })` এবং `deleteMany({ filter })` দিয়ে ডকুমেন্ট মোছা হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি ডায়েরিতে নতুন পাতা লেখা (Create), পাতা পড়ে দেখা (Read), কাটাকাটি করে সংশোধন করা (Update) এবং পাতা ছিঁড়ে ফেলা (Delete)।",
    interviewAnswer: "MongoDB executes CRUD operations via its native driver API:\n- **Create**: `insertOne()` / `insertMany()` persist BSON documents into collections, assigning `_id` automatically if absent.\n- **Read**: `find()` returns a cursor streaming matched documents, chained with `.sort()`, `.skip()`, and `.limit()`.\n- **Update**: `updateOne()` / `updateMany()` modify fields in-place using atomic update operators like `$set`, `$inc`, `$push`, and `$pull`.\n- **Delete**: `deleteOne()` / `deleteMany()` remove matching documents.",
    detailedExplanation: {
      whatItIs: "MongoDB-র মৌলিক ডেটা ম্যানিপুলেশন মেথডস।",
      whyItExists: "ডেটাবেসের সমস্ত মৌলিক রাইট ও রিড কুয়েরি চালাতে।",
      howItWorks: "WiredTiger মেমোরি বাফারে রাইট করে ও WAL (Journal) লগে লেখে।",
      whenToUse: "প্রতিটি ব্যাকএন্ড API কন্ট্রোলারে।",
      keyPoints: [
        "Always use atomic operators ($set, $inc) during updates to avoid overwriting entire documents.",
        "find() returns a cursor; findOne() returns a single document.",
        "upsert: true creates a document if it does not already exist."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// MongoDB CRUD অপারেশনস
// ১. Create
await db.collection('users').insertOne({ name: 'Shuvo', score: 10 });

// ২. Read
const user = await db.collection('users').findOne({ name: 'Shuvo' });

// ৩. Update (Atomic $inc ও $set)
await db.collection('users').updateOne(
  { name: 'Shuvo' },
  { $inc: { score: 5 }, $set: { status: 'active' } }
);

// ৪. Delete
await db.collection('users').deleteOne({ name: 'Shuvo' });`,
      explanationSteps: [
        { step: 1, title: "Insert", description: "নতুন রেকর্ড কালেকশনে ইনসার্ট করে।" },
        { step: 2, title: "Atomic Update", description: "$inc ফিল্ডের মান ১ বাড়ায় এবং $set নতুন মান বসায়।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Game Score Leaderboard",
        description: "প্লেয়ারের স্কোর বাড়াতে `$inc: { score: 10 }` ব্যবহার করা হয় যা সম্পূর্ণ অ্যাটোমিক ও কনকারেন্সি-সেফ।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে সতর্ক থাকুন: 'আপডেটের সময় `$set` না দিলে পুরো ডকুমেন্টটি রিপ্লেস হয়ে বাকি সব ফিল্ড মুছে যাবে!' এটি উল্লেখ করলে পরীক্ষক অত্যন্ত খুশি হন।",
      deliveryStrategy: "৪টি মেথডের নাম বলুন -> অ্যাটমিক অপারেটর ($set, $inc, $push) উল্লেখ করুন -> upsert অপশন বলুন।",
      avoidSaying: [
        {
          wrong: "updateOne({ id }, { name: 'New' }) লিখলে শুধু নাম আপডেট হয়।",
          right: "অপারেটর ($set) ছাড়া লিখলে মঙ্গোডিবি এরর দেবে বা পুরো ডকুমেন্ট রিপ্লেস করে ফেলবে।"
        }
      ]
    },
    quickRevision: [
      "Create = insertOne / insertMany।",
      "Read = find / findOne।",
      "Update = updateOne / updateMany (অবশ্যই $set ব্যবহার করতে হয়)।",
      "Delete = deleteOne / deleteMany।"
    ],
    followUpQuestions: [
      {
        question: "What is soft delete and how is it used in MongoDB?",
        targetId: "mongo-soft-delete-pattern",
        shortHint: "isDeleted flag pattern."
      }
    ],
    tags: ["CRUD", "MQL", "insertOne", "find", "updateOne", "deleteOne"]
  },
  {
    id: "mongo-soft-delete-pattern",
    slug: "mongo-soft-delete-pattern",
    question: "What is soft delete and how is it used in MongoDB?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Soft Delete** হলো ডাটাবেস থেকে কোনো ডকুমেন্টকে ফিজিক্যালি চিরতরে মুছে না ফেলে একটি ফ্ল্যাগ ফিল্ড (যেমন `isDeleted: true` অথবা `deletedAt: ISODate()`) সেট করে রাখা। এর ফলে অ্যাপ্লিকেশন কুয়েরিতে `isDeleted: false` দিয়ে ডেটা লুকিয়ে রাখা হয়, কিন্তু ব্যাকএন্ডে ডেটা সম্পূর্ণ অক্ষত থাকে। এটি **অডিট হিস্ট্রি রক্ষা, ভুলবশত ডিলিট হওয়া ডেটা রিকভারি, এবং লিগ্যাল কমপ্লায়েন্সের** জন্য অত্যন্ত জরুরি।",
    easyExplanation: "সহজ উপমা:\nআপনার কম্পিউটারের 'Recycle Bin'। আপনি কোনো ফাইল ডিলিট চাপলে তা কম্পিউটার থেকে চিরতরে নষ্ট হয় না, রিসাইকেল বিনে জমা থাকে। পরে ভুল বুঝতে পারলে এক ক্লিকে রিস্টোর করা যায়। Soft Delete হলো ডাটাবেসের রিসাইকেল বিন।",
    interviewAnswer: "Soft delete is an architectural persistence pattern where records are marked as logically deleted rather than physically purged from disk. In MongoDB, this is implemented by mutating documents with flags like `{ isDeleted: true, deletedAt: new Date() }`. All subsequent application queries filter with `{ isDeleted: false }`. It provides audit trails, historic integrity for linked foreign documents, and instantaneous recovery from accidental deletions.",
    detailedExplanation: {
      whatItIs: "লজিক্যাল ডিলিশন ফ্ল্যাগ প্যাটার্ন।",
      whyItExists: "ডেটা লস প্রতিরোধ এবং অডিট লগ অক্ষুণ্ন রাখতে।",
      howItWorks: "DELETE কুয়েরির বদলে updateOne চালিয়ে ফ্ল্যাগ ও টাইমস্ট্যাম্প সেট করা হয়।",
      whenToUse: "ইউজার একাউন্ট, ইনভয়েস, অর্ডার হিস্ট্রি এবং যেকোনো বিজনেস ক্রিটিকাল ডেটায়।",
      keyPoints: [
        "Preserves referential integrity for historic reports.",
        "Always create a compound partial index: `{ isDeleted: 1 }` or `{ deletedAt: 1 }`.",
        "Permanent purge can be handled later via automated TTL index."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Soft Delete করা (updateOne)
await db.collection('posts').updateOne(
  { _id: postId },
  { $set: { isDeleted: true, deletedAt: new Date() } }
);

// ২. সাধারণ ইউজার কুয়েরি (ডিলিট হওয়া পোস্ট বাদ দেওয়া)
const activePosts = await db.collection('posts').find({
  isDeleted: { $ne: true }
}).toArray();

// ৩. আনডিলিট বা রিস্টোর করা
await db.collection('posts').updateOne(
  { _id: postId },
  { $set: { isDeleted: false, deletedAt: null } }
);`,
      explanationSteps: [
        { step: 1, title: "Logical Delete", description: "ডকুমেন্ট মুছে না ফেলে ফ্ল্যাগ ও টাইমস্ট্যাম্প বসানো হয়।" },
        { step: 2, title: "Active Filtering", description: "শুধুমাত্র সচল পোস্ট ক্লায়েন্টে পাঠানো হয়।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Account Deactivation & Recovery",
        description: "ইউজার একাউন্ট ডিলিট করলে ৩০ দিনের জন্য Soft Delete রাখা হয় যাতে ইউজার চাইলে পুনরায় লগইন করে একাউন্ট রিঅ্যাক্টিভেট করতে পারে।"
      }
    ],
    interviewTips: {
      tip: "পারফরম্যান্স টিপ বলুন: 'Soft delete ফিল্ডের ওপর Partial Index বা Compound Index না বসালে প্রতিটি কুয়েরি ধীরগতির হতে পারে'।",
      deliveryStrategy: "সংজ্ঞা -> রিসাইকেল বিনের উপমা -> কোড ইমপ্লিমেন্টেশন -> ইনডেক্সিং সতর্কতা।",
      avoidSaying: [
        {
          wrong: "Soft Delete করলে ডাটাবেস স্টোরেজ খালি হয়।",
          right: "Soft Delete-এ ডেটা ডিস্কেই থাকে, ফলে কোনো স্টোরেজ কমে না বরং বাড়ে।"
        }
      ]
    },
    quickRevision: [
      "Soft Delete = চিরতরে না মুছে isDeleted: true ফ্ল্যাগ বসানো।",
      "ডেটা রিকভারি ও অডিট হিস্ট্রি রক্ষা করে।",
      "কুয়েরিতে সবসময় isDeleted: false ফিল্টার করতে হয়।"
    ],
    followUpQuestions: [
      {
        question: "Explain how projection improves performance in MongoDB queries.",
        targetId: "mongo-projection-performance",
        shortHint: "Selective field retrieval."
      }
    ],
    tags: ["Soft Delete", "Design Pattern", "Auditing", "MongoDB"]
  },
  {
    id: "mongo-projection-performance",
    slug: "mongo-projection-performance",
    question: "Explain how projection improves performance in MongoDB queries.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**Projection** হলো MongoDB-তে একটি কুয়েরি অপটিমাইজেশন টেকনিক যার মাধ্যমে সম্পূর্ণ ডকুমেন্ট ফেচ না করে শুধুমাত্র অ্যাপ্লিকেশনের প্রয়োজনীয় নির্দিষ্ট ফিল্ডগুলো (`{ field: 1 }` অন্তর্ভুক্ত বা `{ field: 0 }` বর্জন) সার্ভার থেকে রিড করা হয়। এটি পারফরম্যান্স বাড়ায় কারণ:\n১. **নেটওয়ার্ক ব্যান্ডউইথ সাশ্রয়**: অপ্রয়োজনীয় বড় টেক্সট বা অ্যারে ফিল্ড নেটওয়ার্কে ট্রাভেল করে না।\n২. **র‌্যাম ও বাফার পুল সেভ**: ক্লায়েন্ট ও নোড মেমোরিতে ছোট BSON অবজেক্ট পার্স হয়।\n৩. **Covered Query সক্ষমতা**: যদি প্রোজেকশনের সব ফিল্ড ইনডেক্সে থাকে, তবে MongoDB ডিস্ক থেকে মূল ডকুমেন্ট না পড়েই সরাসরি ইনডেক্স ট্রি থেকে সুপার ফাস্ট রেজাল্ট দিয়ে দেয়।",
    easyExplanation: "সহজ উপমা:\nআপনি একটি ফোনবুকে কারো শুধু ফোন নাম্বার জানতে চান। যদি পুরো বইয়ের জীবনবৃত্তান্ত, রক্তের গ্রুপ ও বাড়ির ঠিকানা রিড করতে হয় তবে প্রচুর সময় ও শক্তি নষ্ট হবে। শুধু 'নাম ও ফোন নাম্বার' চেয়ে নেওয়াটাই হলো Projection।",
    interviewAnswer: "Projection in MongoDB is the selective specification of document fields returned in a query result set. By declaring `{ fieldName: 1 }` or `{ fieldName: 0 }`, projection minimizes network serialization overhead, reduces Node.js V8 memory heap allocation, and unlocks **Covered Queries** (where an index alone satisfies both the filter and projection, eliminating disk heap I/O completely).",
    detailedExplanation: {
      whatItIs: "কুয়েরি রেসপন্সে নির্দিষ্ট ফিল্ড রিটার্ন করার অপশন।",
      whyItExists: "বিশাল 16MB ডকুমেন্টের মাঝে ছোট ফিল্ড দ্রুত রিড করতে।",
      howItWorks: "MongoDB এক্সিকিউশন ইঞ্জিন BSON ডকুমেন্ট থেকে ফিল্ড স্ট্রিপ করে ক্লায়েন্টে পাঠায়।",
      whenToUse: "সব ধরনের তালিকা, ড্রপডাউন, টেবিল গ্রিড এবং মোবাইল API এন্ডপয়েন্টে।",
      keyPoints: [
        "`_id` is included by default unless explicitly excluded with `{ _id: 0 }`.",
        "Cannot combine inclusion and exclusion in same projection (except for `_id`).",
        "Covered Queries = 100% Index scan + 0% document fetch."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Projection ব্যবহার (শুধুমাত্র নাম ও ইমেইল ফেচ করা)
const users = await db.collection('users').find(
  { isActive: true },
  { projection: { name: 1, email: 1, _id: 0 } } // _id বাদ দেওয়া হয়েছে
).toArray();`,
      explanationSteps: [
        { step: 1, title: "Field Inclusion", description: "name: 1, email: 1 দিয়ে শুধু দুটি ফিল্ড সিলেক্ট করা হয়েছে।" },
        { step: 2, title: "Exclude _id", description: "_id: 0 দিয়ে ডিফল্ট আইডি ফিল্ডটিও নেটওয়ার্ক থেকে বাদ দেওয়া হয়েছে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Mobile User Directory Dropdown",
        description: "মোবাইল স্ক্রিনে হাজার ইউজারের ড্রপডাউন দেখাতে ইউজারের সম্পূর্ণ বায়োডাটা বাদ দিয়ে শুধু `{ _id: 1, name: 1 }` প্রজেকশন করে ডেটা ট্রান্সফার ৯৫% কমানো হয়।"
      }
    ],
    interviewTips: {
      tip: "'Covered Query' শব্দটি উল্লেখ করবেন—যখন ফিল্টার এবং প্রোজেকশনের সব ফিল্ড একটি কম্পাউন্ড ইনডেক্সে থাকে, তখন MongoDB ডিস্ক টাচ না করেই রেজাল্ট রিটার্ন করে।",
      deliveryStrategy: "সংজ্ঞা -> ব্যান্ডউইথ ও মেমোরি সুবিধা -> Covered Query কনসেপ্ট -> কোড সিনট্যাক্স।",
      avoidSaying: [
        {
          wrong: "প্রোজেকশনে { name: 1, password: 0 } একসাথে মিক্স করে লেখা যায়।",
          right: "ইনক্লুশন ও এক্সক্লুশন একসাথে মিক্স করা যায় না (একমাত্র _id: 0 বাদে)।"
        }
      ]
    },
    quickRevision: [
      "Projection = শুধুমাত্র প্রয়োজনীয় কলাম/ফিল্ড সিলেক্ট করা।",
      "নেটওয়ার্ক ব্যান্ডউইথ এবং মেমোরি বাঁচায়।",
      "Covered Query নিশ্চিত করলে পারফরম্যান্স সর্বোচ্চ হয়।"
    ],
    followUpQuestions: [
      {
        question: "Explain MongoDB query operators.",
        targetId: "mongo-query-operators-comparison",
        shortHint: "$eq, $gt, $in, $and, $or, $exists."
      }
    ],
    tags: ["Projection", "Performance", "Covered Query", "Optimization"]
  },
  {
    id: "mongo-query-operators-comparison",
    slug: "mongo-query-operators-comparison",
    question: "Explain MongoDB query operators.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "MongoDB-র কোয়েরি অপারেটরগুলো বিভিন্ন ক্যাটাগরিতে বিভক্ত:\n১. **Comparison**: `$eq` (সমান), `$ne` (অসমান), `$gt` (বড়), `$gte` (বড় বা সমান), `$lt` (ছোট), `$lte` (ছোট বা সমান), `$in` (তালিকার ভেতর আছে), `$nin` (তালিকায় নেই)।\n২. **Logical**: `$and` (সব শর্ত সত্য), `$or` (যেকোনো একটি সত্য), `$not` (শর্ত বিপরীত), `$nor` (কোনোটিই সত্য নয়)।\n৩. **Element**: `$exists` (ফিল্ড আছে কি না), `$type` (BSON টাইপ চেক)।\n৪. **Evaluation**: `$regex` (প্যাটার্ন ম্যাচ), `$text` (ফুল-টেক্সট সার্চ), `$expr` (একই ডকুমেন্টের দুটি ফিল্ড তুলনা)।\n৫. **Array**: `$all` (সব উপাদান থাকা), `$elemMatch` (অ্যারে অবজেক্টের মাল্টিপল ফিল্ড ম্যাচ), `$size` (অ্যারের দৈর্ঘ্য)।",
    easyExplanation: "সহজ উপমা:\nএকটি শপিং সাইটে ফিল্টার করার মতো: 'দাম ৫০০ টাকার বেশি' (`$gt: 500`), 'ব্র্যান্ড নাইকি অথবা অ্যাডিডাস' (`$in: ['Nike', 'Adidas']`), এবং 'স্টক এভেইলেবল আছে' (`$exists: true`)।",
    interviewAnswer: "MongoDB provides rich query operators categorized into Comparison ($eq, $gt, $in), Logical ($and, $or, $not), Element ($exists, $type), Array ($all, $elemMatch, $size), and Evaluation ($regex, $expr). Most notably, `$elemMatch` allows matching multiple criteria against the same element within an array of subdocuments, while `$expr` allows comparing two separate fields within the same document.",
    detailedExplanation: {
      whatItIs: "MQL-এ ডেটা ফিল্টার করার এক্সপ্রেসিভ অপারেটর সেট।",
      whyItExists: "জটিল লজিক্যাল ও অ্যারে ফিল্টারিং সহজে করতে।",
      howItWorks: "BSON ফিল্ড ভ্যালু ও টাইপের ওপর শর্ত মূল্যায়ন করে।",
      whenToUse: "সব ধরনের find, update, ও aggregate পাইপলাইনে।",
      keyPoints: [
        "$in is faster than multiple $or conditions on the same field.",
        "$elemMatch is required when querying arrays of objects with multiple conditions.",
        "$expr allows comparing field A with field B."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// জটিল ফিল্টারিং কুয়েরি
const products = await db.collection('products').find({
  $and: [
    { price: { $gte: 100, $lte: 1000 } },
    { category: { $in: ['Electronics', 'Gaming'] } },
    { reviews: { $elemMatch: { rating: { $gte: 4 }, verified: true } } }
  ]
}).toArray();`,
      explanationSteps: [
        { step: 1, title: "Comparison & In", description: "প্রাইস রেঞ্জ এবং ক্যাটাগরি ফিল্টার করা হয়েছে।" },
        { step: 2, title: "$elemMatch", description: "একই রিভিউ অবজেক্টে রেটিং ৪+ এবং ভেরিফাইড সত্য হতে হবে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Multi-Faceted Filter",
        description: "গ্রাহকের সিলেক্ট করা প্রাইস রেঞ্জ, ব্র্যান্ড, কালার এবং মিনিমাম রেটিং মিলিয়ে প্রোডাক্ট ফিল্টার করতে এই অপারেটরগুলো ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "`$elemMatch`-এর গুরুত্ব ব্যাখ্যা করুন: সাধারণ ফিল্টারে এক এলিমেন্টের রেটিং ও অন্য এলিমেন্টের ভেরিফাইড মিলিয়ে ভুল ম্যাচ হতে পারে, কিন্তু `$elemMatch` একই এলিমেন্টের ভেতর উভয় শর্ত যাচাই করে।",
      deliveryStrategy: "ক্যাটাগরি ভিত্তিক অপারেটরের নাম বলুন -> $in vs $or পারফরম্যান্স বলুন -> $elemMatch ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "একই ফিল্ডে একাধিক শর্ত দিতে সবসময় $or ব্যবহার করা উচিত।",
          right: "একই ফিল্ডের মাল্টিপল মানের জন্য $or-এর চেয়ে $in অনেক বেশি পারফরম্যান্ট ও ইনডেক্স-ফ্রেন্ডলি।"
        }
      ]
    },
    quickRevision: [
      "Comparison: $eq, $ne, $gt, $gte, $lt, $lte, $in।",
      "Logical: $and, $or, $not, $nor।",
      "Array: $elemMatch (একই এলিমেন্টে একাধিক শর্ত), $all, $size।"
    ],
    followUpQuestions: [
      {
        question: "Explain pagination techniques in MongoDB",
        targetId: "mongo-pagination-techniques",
        shortHint: "Skip/Limit vs Keyset/Bucket pagination."
      }
    ],
    tags: ["Operators", "$in", "$or", "$elemMatch", "MQL"]
  },
  {
    id: "mongo-pagination-techniques",
    slug: "mongo-pagination-techniques",
    question: "Explain pagination techniques in MongoDB",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে পেজিনেশনের দুটি প্রধান টেকনিক রয়েছে:\n১. **Offset-based Pagination (`skip()` & `limit()`)**: সহজতম উপায় (যেমন: `skip(20).limit(10)` ৩য় পেজ আনে)। কিন্তু বড় ডেটাসেটে (যেমন পেজ ১০০০) এটি **মারাত্মক ধীরগতির (O(N) পারফরম্যান্স)** কারণ ডাটাবেসকে আগের ১০,০০০টি ডকুমেন্ট মেমোরিতে পড়ে ডিসকার্ড করতে হয়।\n২. **Keyset / Cursor-based Pagination (রেকমেন্ডেড)**: পূর্ববর্তী পেজের শেষ ডকুমেন্টের ইনডেক্সড মান (যেমন `_id` বা `createdAt`) ব্যবহার করে পরবর্তী পেজ ফেচ করা হয় (`find({ _id: { $gt: lastId } }).limit(10)`)। এটি কোটি কোটি ডেটাতেও **O(1) কনস্ট্যান্ট স্পিডে** চলে এবং ইনফিনিট স্ক্রলিংয়ের জন্য আদর্শ।",
    easyExplanation: "সহজ উপমা:\n- **Skip/Limit (বইয়ের পৃষ্ঠা গোনা)**: ৫০০ নম্বর পৃষ্ঠায় যেতে আপনি ১ম পাতা থেকে শুরু করে ৪৯৯টি পাতা গুনে গুনে উল্টালেন (প্রচুর সময় নষ্ট)।\n- **Cursor-based (বুকমার্ক)**: আপনি গতকাল যেখানে পড়া শেষ করেছিলেন সেখানে বুকমার্ক রেখে দিয়েছেন। আজ সরাসরি বুকমার্কের পরের পাতা থেকেই পড়া শুরু করলেন (১ সেকেন্ডে কাজ শেষ)!",
    interviewAnswer: "Pagination in MongoDB is implemented using two contrasting methodologies:\n1. **Offset Pagination (skip & limit)**: Simple to implement for UI page pickers, but exhibits O(N) performance degradation as skip values grow because the WiredTiger storage engine must sequentially scan and discard all preceding tuples.\n2. **Keyset / Cursor Pagination ($gt / $lt on indexed keys)**: Highly performant O(log N) or O(1) approach leveraging B-Tree index traversal on unique chronological keys (typically `_id` or `(createdAt, _id)`). It prevents the 'missing/duplicate item problem' during concurrent insertions and is the standard for modern infinite feeds.",
    detailedExplanation: {
      whatItIs: "বিশাল ডেটাসেট ছোট ছোট পেজে ক্লায়েন্টে পাঠানোর আর্কিটেকচার।",
      whyItExists: "একসাথে মিলিয়ন ডেটা ফেচ করে সার্ভার ক্র্যাশ হওয়া প্রতিরোধ করতে।",
      howItWorks: "Skip/Limit মেমোরি অফসেট ডিসকার্ড করে; Keyset ইনডেক্স রেঞ্জে সরাসরি ল্যান্ড করে।",
      whenToUse: "ইনফিনিট স্ক্রল ও সোশ্যাল ফিডে Keyset; সাধারণ ছোট টেবিলে Skip/Limit।",
      keyPoints: [
        "skip(10000) scans 10000 rows in memory before returning limit.",
        "Keyset pagination requires an indexed unique field (e.g. _id).",
        "Keyset handles concurrent writes without duplicated items across pages."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. ❌ Slow Offset Pagination (বড় পেজে স্লো)
const page3 = await db.collection('posts')
  .find({})
  .sort({ createdAt: -1 })
  .skip(20) // ২০টি রো ডিসকার্ড করে
  .limit(10)
  .toArray();

// ২. ✅ Super-Fast Keyset Pagination (লাখ লাখ পেজেও ফাস্ট)
const nextPage = await db.collection('posts')
  .find({ _id: { $lt: lastSeenId } }) // ইনডেক্স B-Tree দিয়ে সরাসরি জাম্প
  .sort({ _id: -1 })
  .limit(10)
  .toArray();`,
      explanationSteps: [
        { step: 1, title: "Offset Degradation", description: "skip() মেমোরিতে সব আগের রো স্ক্যান করে।" },
        { step: 2, title: "Keyset Leap", description: "_id: { $lt: lastSeenId } ইনডেক্স দিয়ে ও(১) সময়ে সরাসরি পরের ১০টি রোতে যায়।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Facebook / Twitter Infinite Feed",
        description: "ইউজার নিচে স্ক্রল করতে থাকলে `cursor` হিসেবে লাস্ট পোস্টের আইডি পাঠিয়ে পরবর্তী ১০টি পোস্ট নিমিষে লোড করা হয়।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউতে বলুন: 'Skip/Limit causes deep pagination latency; for production scale, Keyset/Cursor pagination based on an indexed _id or compound index is essential'.",
      deliveryStrategy: "২টি টেকনিকের নাম বলুন -> কেন skip() স্লো তা ব্যাখ্যা করুন -> Keyset-এর O(1) মেকানিজম বলুন।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে skip() সবসময় দ্রুত কারণ এটি NoSQL।",
          right: "লাখ রো স্কিপ করলে MongoDB ইঞ্জিনেরও হাই CPU ও মেমোরি খরচ হয়।"
        }
      ]
    },
    quickRevision: [
      "Skip/Limit = সহজ কিন্তু বড় পেজে মারাত্মক ধীরগতির (O(N))।",
      "Keyset Pagination = `_id: { $gt: lastId }` দিয়ে সরাসরি জাম্প করে (সুপার ফাস্ট O(1))।",
      "সোশ্যাল মিডিয়া ও মোবাইল অ্যাপে Keyset বাধ্যতামূলক।"
    ],
    followUpQuestions: [
      {
        question: "Explain what indexes are in MongoDB?",
        targetId: "mongo-indexes-overview",
        shortHint: "B-Tree indexes for fast queries."
      }
    ],
    tags: ["Pagination", "skip", "limit", "Keyset", "Performance"]
  },

  // ==========================================
  // 🔵 Indexing & Performance Optimization (5 Questions)
  // ==========================================
  {
    id: "mongo-indexes-overview",
    slug: "mongo-indexes-overview",
    question: "Explain what indexes are in MongoDB?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে **Index** হলো একটি বিশেষায়িত ডেটা স্ট্রাকচার (B-Tree) যা ডকুমেন্টের নির্দিষ্ট ফিল্ডের মানকে একটি ছোট, সর্টেড ক্রমে ধারণ করে। ইনডেক্স ছাড়া কোনো কুয়েরি চালালে MongoDB-কে পুরো কালেকশনের প্রতিটি ডকুমেন্ট একটি একটি করে স্ক্যান করতে হয় (**COLLSCAN বা Collection Scan**), যা বিশাল ডেটাসেটে অত্যন্ত ধীরগতির। ইনডেক্স ব্যবহারের ফলে ইঞ্জিন সরাসরি কাঙ্ক্ষিত ডকুমেন্টের মেমোরি ঠিকানায় পৌঁছে যায় (**IXSCAN বা Index Scan**), যা কুয়েরি টাইমকে O(N) থেকে **O(log N)**-এ নামিয়ে আনে।",
    easyExplanation: "সহজ উপমা:\nবইয়ের পেছনের ইনডেক্স পাতা। ইনডেক্স না থাকলে একটি শব্দ খুঁজতে ১০০০ পাতার প্রতিটি লাইন পড়তে হবে (COLLSCAN)। আর ইনডেক্স থাকলে ১ সেকেন্ডেই সঠিক পৃষ্ঠা নাম্বারে চলে যাওয়া যায় (IXSCAN)।",
    interviewAnswer: "Indexes in MongoDB are B-Tree data structures that store a small portion of the collection's data set in an easily traversable, sorted form. The index stores the value of a specific field (or set of fields), ordered by the value of the field. Without indexes, MongoDB must perform a collection scan (`COLLSCAN`), inspecting every document in a collection. With indexes (`IXSCAN`), query execution time drops from O(N) linear time to O(log N) logarithmic time.",
    detailedExplanation: {
      whatItIs: "WiredTiger ইঞ্জিনে সংরক্ষিত B-Tree সার্চ স্ট্রাকচার।",
      whyItExists: "ফুল কালেকশন স্ক্যান রোধ করে সাব-মিলিসেকেন্ড কুয়েরি স্পিড পেতে।",
      howItWorks: "রুট থেকে লিফ নোড ট্রাভার্স করে ডকুমেন্টের ডিস্ক পয়েন্টার খুঁজে বের করে।",
      whenToUse: "find, sort, এবং aggregate পাইপলাইনের ফিল্টারিং ফিল্ডগুলোতে।",
      keyPoints: [
        "Default index on `{ _id: 1 }` is automatically created and unique.",
        "COLLSCAN = Slow collection scan; IXSCAN = Fast index scan.",
        "Indexes consume RAM buffer pool and slow down write operations (INSERT/UPDATE)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. সিঙ্গেল ফিল্ড ইনডেক্স তৈরি (Ascending: 1, Descending: -1)
await db.collection('users').createIndex({ email: 1 }, { unique: true });

// ২. ইনডেক্স তালিকা দেখা
const indexes = await db.collection('users').indexes();`,
      explanationSteps: [
        { step: 1, title: "createIndex", description: "email ফিল্ডের ওপর ইউনিক B-Tree ইনডেক্স তৈরি করে।" },
        { step: 2, title: "Unique Constraint", description: "একই ইমেইল দুইবার ঢুকতে বাধা দেয়।" }
      ]
    },
    realWorldExamples: [
      {
        title: "User Authentication",
        description: "কোটি কোটি ইউজারের মাঝে `email` দিয়ে লগইন চেক করতে সিঙ্গেল ফিল্ড ইউনিক ইনডেক্স ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "COLLSCAN বনাম IXSCAN শব্দ দুটি ইন্টারভিউতে ব্যবহার করবেন।",
      deliveryStrategy: "সংজ্ঞা -> COLLSCAN vs IXSCAN -> B-Tree স্ট্রাকচার -> ট্রেড-অফ (Write overhead)।",
      avoidSaying: [
        {
          wrong: "ইনডেক্স বসালে রাইট অপারেশনও ফাস্ট হয়ে যায়।",
          right: "ইনডেক্স রিড ফাস্ট করে কিন্তু রাইট কিছুটা স্লো করে কারণ প্রতি ইনসার্টে ইনডেক্স ট্রি আপডেট করতে হয়।"
        }
      ]
    },
    quickRevision: [
      "Index = B-Tree স্ট্রাকচার যা COLLSCAN-কে IXSCAN-এ রূপান্তর করে।",
      "`{ _id: 1 }` ডিফল্ট ইউনিক ইনডেক্স।",
      "রিড ফাস্ট করে, তবে বেশি ইনডেক্স রাইট স্লো করে।"
    ],
    followUpQuestions: [
      {
        question: "Explain different types of indexes in MongoDB?",
        targetId: "mongo-index-types-compound-multikey-ttl",
        shortHint: "Single, Compound, Multikey, TTL, Text, Partial."
      }
    ],
    tags: ["Indexes", "B-Tree", "COLLSCAN", "IXSCAN", "Performance"]
  },
  {
    id: "mongo-index-types-compound-multikey-ttl",
    slug: "mongo-index-types-compound-multikey-ttl",
    question: "Explain different types of indexes in MongoDB?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-র প্রধান ইনডেক্স প্রকারভেদ:\n১. **Single Field Index**: একক ফিল্ডের ওপর ইনডেক্স (যেমন `{ email: 1 }`)।\n২. **Compound Index**: একাধিক ফিল্ডের সমন্বিত ইনডেক্স (যেমন `{ status: 1, createdAt: -1 }`), যা Leftmost Prefix নীতি মেনে চলে।\n৩. **Multikey Index**: কোনো ফিল্ড যদি একটি **Array** হয়, তবে MongoDB স্বয়ংক্রিয়ভাবে তার প্রতিটি উপাদানের জন্য আলাদা ইনডেক্স এন্ট্রি তৈরি করে (Multikey Index)।\n৪. **TTL (Time-To-Live) Index**: নির্দিষ্ট সময় পর পর স্বয়ংক্রিয়ভাবে ডকুমেন্ট মুছে ফেলে (যেমন ওটিপি বা সেশন লগ)।\n৫. **Partial / Filtered Index**: শুধুমাত্র নির্দিষ্ট শর্ত পূরণকারী ডকুমেন্টের ওপর ইনডেক্স তৈরি করে (যেমন `{ isDeleted: false }`)।\n৬. **Text Index**: একাধিক ফিল্ডের ওপর ফুল-টেক্সট সার্চ করার জন্য।",
    easyExplanation: "সহজ উপমা:\n- **TTL Index**: সেলফ-ডিস্ট্রাক্ট মেসেজ (১০ মিনিট পর অটো ডিলিট)।\n- **Multikey Index**: একটি বইয়ের সূচিতে একাধিক টপিক ট্যাগ থাকলে প্রতি ট্যাগের জন্য বইয়ের রেফারেন্স থাকা।\n- **Partial Index**: একটি গুদামের শুধুমাত্র 'বিক্রির জন্য রেডি' পণ্যের তালিকা তৈরি করা (ভাঙা পণ্য বাদ দিয়ে ইনডেক্স ছোট রাখা)।",
    interviewAnswer: "MongoDB offers several specialized index types:\n1. **Single Field**: Indexes a solitary attribute.\n2. **Compound Index**: Indexes multiple fields following the ESR (Equality, Sort, Range) rule and Leftmost Prefix constraint.\n3. **Multikey Index**: Automatically created when indexing an array field, generating index entries for every array element.\n4. **TTL (Time-To-Live) Index**: Single-field date index with an `expireAfterSeconds` parameter, where background threads purge expired documents.\n5. **Partial Index**: Indexes only documents satisfying a `partialFilterExpression`, dramatically conserving disk and RAM.\n6. **Text & Geospatial**: `$text` search and 2dsphere indexes for coordinate calculations.",
    detailedExplanation: {
      whatItIs: "MongoDB-র বৈচিত্র্যময় অপটিমাইজেশন ইনডেক্স পরিবার।",
      whyItExists: "স্পেসিফিক কুয়েরি ও ডেটা লাইফসাইকেল রিকোয়ারমেন্ট হ্যান্ডেল করতে।",
      howItWorks: "WiredTiger স্টোরেজে বি-ট্রি, ইনভার্টেড টেক্সট বা জিও-হ্যাশ কি ম্যাপ করে।",
      whenToUse: "সার্চ, সেশন এক্সপায়ারেশন, অ্যারে ফিল্টারিং ও মাল্টি-কলাম সর্টিংয়ে।",
      keyPoints: [
        "ESR Rule for compound indexes: Equality first, Sort second, Range last.",
        "TTL index only works on single date fields, not compound.",
        "A compound multikey index cannot have more than one array field."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// ১. Compound Index (ESR Rule মেনে)
await db.collection('orders').createIndex({ status: 1, createdAt: -1 });

// ২. TTL Index (১০ মিনিট পর অটোমেটিক ডিলিট হবে)
await db.collection('otps').createIndex(
  { createdAt: 1 }, 
  { expireAfterSeconds: 600 }
);

// ৩. Partial Index (শুধুমাত্র পেন্ডিং অর্ডারে ইনডেক্স)
await db.collection('orders').createIndex(
  { customerId: 1 },
  { partialFilterExpression: { status: 'pending' } }
);`,
      explanationSteps: [
        { step: 1, title: "Compound Index", description: "status দিয়ে ফিল্টার এবং createdAt দিয়ে সর্ট এক ইনডেক্সেই কাভার হয়।" },
        { step: 2, title: "TTL Auto-Purge", description: "৬০০ সেকেন্ড (১০ মিনিট) পর MongoDB ব্যাকগ্রাউন্ড থ্রেড নিজেই ডকুমেন্ট ডিলিট করবে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Password Reset OTPs",
        description: "ব্যবহারকারীর ওটিপি টোকেন সংরক্ষণে TTL Index ব্যবহার করা হয়, ফলে নোড ব্যাকএন্ডে কোনো আলাদা ক্রন-জব ছাড়াই ১০ মিনিট পর ওটিপি স্বয়ংক্রিয়ভাবে মুছে যায়।"
      }
    ],
    interviewTips: {
      tip: "কম্পাউন্ড ইনডেক্সের **ESR (Equality, Sort, Range)** রুলটি বলুন—ইন্টারভিউয়ার দারুণ ইমপ্রেস হবেন!",
      deliveryStrategy: "৫টি ইনডেক্সের নাম বলুন -> TTL-এর বাস্তব ব্যবহার বলুন -> ESR রুল ব্যাখ্যা করুন।",
      avoidSaying: [
        {
          wrong: "কম্পাউন্ড ইনডেক্সে ২টি আলাদা আলাদা অ্যারে ফিল্ড একসাথে দেওয়া যায়।",
          right: "MongoDB একই সাথে দুটি আলাদা অ্যারে ফিল্ডের ওপর কম্পাউন্ড মাল্টিকি ইনডেক্স সাপোর্ট করে না (Cartesian product এড়াতে)।"
        }
      ]
    },
    quickRevision: [
      "Compound = মাল্টিপল ফিল্ড (ESR Rule)।",
      "Multikey = অ্যারে ফিল্ডের জন্য স্বয়ংক্রিয় ইনডেক্স।",
      "TTL = expireAfterSeconds দিয়ে নির্দিষ্ট সময় পর অটো-ডিলিট।",
      "Partial = শর্ত পূরণকারী ডকুমেন্টের ছোট ইনডেক্স।"
    ],
    followUpQuestions: [
      {
        question: "Explain how explain() helps in query optimization.",
        targetId: "mongo-explain-query-optimization",
        shortHint: "executionStats, winningPlan, rejectedPlans."
      }
    ],
    tags: ["TTL Index", "Compound Index", "Multikey Index", "Partial Index", "ESR Rule"]
  },
  {
    id: "mongo-explain-query-optimization",
    slug: "mongo-explain-query-optimization",
    question: "Explain how explain() helps in query optimization.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "**`explain()`** হলো MongoDB-র একটি অত্যন্ত শক্তিশালী প্রোফাইলিং মেথড যা একটি কুয়েরি ডাটাবেসের ভেতরে কিভাবে এক্সিকিউট হচ্ছে তার পুঙ্খানুপুঙ্খ বিবরণ (**Query Execution Plan**) প্রকাশ করে। এর মাধ্যমে জানা যায়:\n১. কুয়েরিটি **COLLSCAN** (স্লো) নাকি **IXSCAN** (ফাস্ট) ব্যবহার করছে।\n২. **Winning Plan**: অপটিমাইজার কোন ইনডেক্সটি বেছে নিয়েছে।\n৩. **`totalDocsExamined` বনাম `nReturned`**: কতগুলো ডকুমেন্ট পরীক্ষা করে কাঙ্ক্ষিত কয়টি ডকুমেন্ট পাওয়া গেছে (আদর্শ অনুপাত ১:১)।\n৪. **`executionTimeMillis`**: কুয়েরিটি রান হতে ঠিক কত মিলিসেকেন্ড সময় লেগেছে।",
    easyExplanation: "সহজ উপমা:\nএকটি রক্ত পরীক্ষার ল্যাব রিপোর্ট বা ডায়াগনস্টিক রিপোর্ট। আপনার কুয়েরি কেন স্লো বা কোথায় আটকে যাচ্ছে (পুরো কালেকশন স্ক্যান নাকি ভুল ইনডেক্স)—তা `explain('executionStats')` রিপোর্ট দিয়ে নির্ভুলভাবে ধরা পড়ে।",
    interviewAnswer: "The `.explain('executionStats')` method provides deep visibility into the MongoDB query optimizer's decision-making process. Key diagnostic metrics evaluated include:\n- **`stage`**: Identifies whether the operation executed as `COLLSCAN` (table scan), `IXSCAN` (index scan), or `PROJECTION_COVERED`.\n- **`totalDocsExamined` vs `nReturned`**: A high ratio signifies index inefficiency (scanning 100,000 docs to return 5). The target golden ratio is 1:1.\n- **`totalKeysExamined`**: Number of index keys traversed.\n- **`executionTimeMillis`**: Cumulative execution latency.\n- **`winningPlan` & `rejectedPlans`**: Details which candidate index won the query race.",
    detailedExplanation: {
      whatItIs: "MongoDB কুয়েরি পারফরম্যান্স ডায়াগনস্টিক টুল।",
      whyItExists: "স্লো কুয়েরির সঠিক রুট-কজ শনাক্ত করে সঠিক ইনডেক্স ডিজাইন করতে।",
      howItWorks: "অপটিমাইজার রেসের স্ট্যাটিস্টিকস এবং স্টোরেজ এন্ট্রির মেট্রিক প্রিন্ট করে।",
      whenToUse: "যেকোনো প্রোডাকশন স্লো কোয়েরি ডিবাগ ও অপটিমাইজ করার সময়।",
      keyPoints: [
        "Verbosity modes: 'queryPlanner', 'executionStats', 'allPlansExecution'.",
        "If totalDocsExamined > 0 for an index-covered query, projection is missing.",
        "Target ratio: totalDocsExamined == nReturned."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// executionStats মোডে কুয়েরি প্ল্যান বিশ্লেষণ
const stats = await db.collection('orders')
  .find({ status: 'completed', total: { $gt: 500 } })
  .sort({ createdAt: -1 })
  .explain('executionStats');

console.log(stats.executionStats.winningPlan.stage); // 'IXSCAN'
console.log(stats.executionStats.totalDocsExamined); // e.g. 10
console.log(stats.executionStats.nReturned);         // e.g. 10
console.log(stats.executionStats.executionTimeMillis); // e.g. 2ms`,
      explanationSteps: [
        { step: 1, title: "executionStats", description: "কুয়েরিটি ব্যাকএন্ডে সত্যি এক্সিকিউট করে নিখুঁত মেট্রিক তোলে।" },
        { step: 2, title: "Ratio 1:1", description: "১০টি ডকুমেন্ট পরীক্ষা করে ১০টিই পাওয়া গেছে, অর্থাৎ ইনডেক্স ১০০% পারফেক্ট।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Debugging Slow 10-Second API",
        description: "একটি স্লো এন্ডপয়েন্টে `explain()` চালিয়ে দেখা গেল `COLLSCAN` হচ্ছে এবং ৫০ লাখ রো স্ক্যান করছে; সেখানে একটি কম্পাউন্ড ইনডেক্স বানিয়ে `IXSCAN`-এ রূপান্তর করে কুয়েরি টাইম ৩ মিলিসেকেন্ডে নামিয়ে আনা।"
      }
    ],
    interviewTips: {
      tip: "গোল্ডেন মেট্রিকটি বলুন: 'The ratio of `totalDocsExamined` to `nReturned` should ideally be 1:1. If it's 1000:1, your index is not selective enough'.",
      deliveryStrategy: "explain() এর ৩টি মোড বলুন -> executionStats এর মূল ৪টি মেট্রিক ব্যাখ্যা করুন -> ১:১ গোল্ডেন রেশিও বলুন।",
      avoidSaying: [
        {
          wrong: "explain() শুধু ডেভেলপার মেশিনে দেখার জিনিস, প্রোডাকশনে এর কোনো দরকার নেই।",
          right: "প্রোডাকশন স্লো কুয়েরি লগ (Slow Query Log / Profiler)-এর বিশ্লেষণ `explain()` দিয়েই করা হয়।"
        }
      ]
    },
    quickRevision: [
      "explain('executionStats') = কুয়েরির পূর্ণাঙ্গ ডায়াগনস্টিক রিপোর্ট।",
      "IXSCAN (ভালো) বনাম COLLSCAN (খারাপ)।",
      "`totalDocsExamined` বনাম `nReturned` এর অনুপাত ১:১ হওয়া আদর্শ।"
    ],
    followUpQuestions: [
      {
        question: "Explain how you would optimize MongoDB for high read traffic.",
        targetId: "mongo-optimize-high-read-traffic",
        shortHint: "Read Replicas, In-memory WiredTiger, Caching."
      }
    ],
    tags: ["explain", "executionStats", "Query Optimization", "COLLSCAN", "IXSCAN"]
  },
  {
    id: "mongo-optimize-high-read-traffic",
    slug: "mongo-optimize-high-read-traffic",
    question: "Explain how you would optimize MongoDB for high read traffic.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে উচ্চমাত্রার রিড ট্রাফিক (High Read Traffic) সামলানোর জন্য ৬টি প্রধান কৌশল প্রয়োগ করা হয়:\n১. **Secondary Read Replicas ও Read Preference**: রিড ট্রাফিক প্রাইমারি নোড থেকে সেকেন্ডারি নোডগুলোতে ডাইভার্ট করা (`readPreference: 'secondaryPreferred'`)।\n২. **সঠিক Indexing ও Covered Queries**: ইনডেক্স দিয়ে COLLSCAN দূর করা এবং প্রজেকশন মিলিয়ে Covered Query তৈরি করা।\n৩. **Redis Caching Layer**: ঘন ঘন রিড হওয়া ডেটা ডাটাবেসে না পাঠিয়ে Redis মেমোরি ক্যাশে ও(১) স্পিডে সার্ভ করা।\n৪. **Keyset Pagination**: `skip()` পরিহার করে `_id` ভিত্তিক কার্সর পেজিনেশন ব্যবহার করা।\n৫. **Lean Queries (Mongoose)**: ওভারহেড কমাতে `.lean()` ব্যবহার করা।\n৬. **Horizontal Sharding**: ডেটাবেসের আকার বিশাল হলে রিড কি-র ওপর ভিত্তি করে ক্লাস্টার শার্ডিং করা।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যাংকের মূল কাউন্টারে লম্বা লাইন। ভিড় সামলাতে:\n১. পাশের ৩টি নতুন হেল্প ডেস্ক খুলে দেওয়া (Read Replicas)।\n২. বাইরে একটি নোটিশ বোর্ডে সাধারণ তথ্য ঝুলিয়ে রাখা যাতে ভেতরে আসতেই না হয় (Redis Cache)।\n৩. ফাইলের গায়ে রঙিন স্টিকার লাগানো যাতে এক সেকেন্ডে ফাইল পাওয়া যায় (Indexing)।",
    interviewAnswer: "Optimizing MongoDB for high read concurrency involves architectural and query-level optimizations:\n1. **Read Preference & Replica Sets**: Offload read traffic to secondary replica nodes using `readPreference=secondaryPreferred` or `nearest`.\n2. **Covered Queries**: Design compound indexes matching query filters and projections, allowing WiredTiger to fulfill reads entirely from the in-memory index without touching collection pages.\n3. **Application Caching (Redis/Memcached)**: Implement Cache-Aside with TTLs for hot read documents to reduce DB hits by 80-90%.\n4. **Cursor-based Keyset Pagination**: Replace deep `skip()` operations with indexed range bounds.\n5. **Driver Optimization**: Use `.lean()` in Mongoose to bypass hydration of heavyweight Mongoose Documents into plain JavaScript objects.",
    detailedExplanation: {
      whatItIs: "মিলিয়ন কনকারেন্ট রিড হ্যান্ডেল করার আর্কিটেকচারাল কৌশল।",
      whyItExists: "প্রাইমারি নোডের CPU স্যাচুরেশন ও কুয়েরি থ্রোটলিং প্রতিরোধ করতে।",
      howItWorks: "সেকেন্ডারি নোড রেপ্লিকেশন, ইন-মেমোরি বি-ট্রি ক্যাশ এবং ডিস্ট্রিবিউটেড ক্যাশিং।",
      whenToUse: "সোশ্যাল মিডিয়া ফিড, লাইভ স্কোর, ইকমার্স সেলস ও হাই-স্কেল ব্যাকএন্ডে।",
      keyPoints: [
        "Read Preference: primary, primaryPreferred, secondary, secondaryPreferred, nearest.",
        "Covered queries eliminate disk heap fetch.",
        "WiredTiger Cache sizing: 50% of (RAM - 1GB) by default."
      ]
    },
    realWorldExamples: [
      {
        title: "Black Friday Sale Read Traffic",
        description: "হাজার হাজার ইউজার যখন প্রোডাক্ট ব্রাউজ করে, সমস্ত রিড কুয়েরি ৩টি Secondary Replica Node এবং Redis ক্যাশ থেকে প্রসেস করে Primary Node-কে শুধুমাত্র অর্ডার প্লেসমেন্টের জন্য ফ্রি রাখা হয়।"
      }
    ],
    interviewTips: {
      tip: "Read Preference-এর অপশনগুলো (`secondaryPreferred`, `nearest`) এবং 'Covered Query'-র নাম উল্লেখ করবেন।",
      deliveryStrategy: "আর্কিটেকচার লেভেল (Read Replicas, Redis) -> কুয়েরি লেভেল (Covered Queries, Keyset, Lean)।",
      avoidSaying: [
        {
          wrong: "রিড বেশি হলে সাথে সাথে বড় দামি সার্ভার কিনতে হবে (Vertical Scale)।",
          right: "প্রথমে ক্যাশিং, সেকেন্ডারি রিড রেপ্লিকা এবং ইনডেক্স টিউনিং করাই স্কেলিংয়ের আধুনিক ক্লাউড স্ট্যান্ডার্ড।"
        }
      ]
    },
    quickRevision: [
      "১. Read Preference = secondaryPreferred (সেকেন্ডারিতে রিড পাঠানো)।",
      "২. Covered Queries (ইনডেক্স থেকেই রিড)।",
      "৩. Redis Cache Layer।",
      "৪. Mongoose .lean() ও Keyset Pagination।"
    ],
    followUpQuestions: [
      {
        question: "Explain how MongoDB ensures security and access control.",
        targetId: "mongo-security-access-control",
        shortHint: "RBAC, TLS/SSL, Encryption at rest."
      }
    ],
    tags: ["Read Optimization", "Read Preference", "Replicas", "Covered Query", "Redis"]
  },
  {
    id: "mongo-security-access-control",
    slug: "mongo-security-access-control",
    question: "Explain how MongoDB ensures security and access control.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB এন্টারপ্রাইজ গ্রেড নিরাপত্তা নিশ্চিত করতে ৪টি প্রধান স্তম্ভ ব্যবহার করে:\n১. **Authentication (SCRAM-SHA-256 / x.509)**: ডিফল্টভাবে Salted Challenge Response Authentication Mechanism (SCRAM) দিয়ে পরিচয় যাচাই করা হয়।\n২. **Role-Based Access Control (RBAC)**: প্রতিটি ইউজারকে নির্দিষ্ট ভূমিকা বা রোল দেওয়া হয় (যেমন `read`, `readWrite`, `dbAdmin`); কোনো সাধারণ ইউজারকে আনলিমিটেড权限দেওয়া হয় না (Least Privilege Principle)।\n৩. **Network & Transport Encryption (TLS/SSL)**: ক্লায়েন্ট ও ক্লাস্টারের ডেটা আদান-প্রদান TLS 1.3 দিয়ে এনক্রিপ্ট থাকে।\n৪. **Encryption at Rest**: ডিস্কে ডেটা সেভ হওয়ার সময় AES-256 অ্যালগরিদম দিয়ে এনক্রিপ্ট থাকে।",
    easyExplanation: "সহজ উপমা:\nএকটি ভিআইপি ব্যাংক ভবনের নিরাপত্তা:\n- গেটে আঙুলের ছাপ ও পাসওয়ার্ড দিয়ে ঢোকা ➔ **Authentication**\n- ক্যাশিয়ার শুধু টাকা তুলতে পারে কিন্তু ম্যানেজারের লকারে ঢুকতে পারে না ➔ **RBAC**\n- রাস্তায় টাকা নিয়ে যাওয়ার সময় বুলেটপ্রুফ ক্যাশ ভ্যানে তালা মেরে নেওয়া ➔ **TLS/SSL Encryption**\n- ভল্টের ভেতরে টাকা সুরক্ষিত লকারে তালাবদ্ধ থাকা ➔ **Encryption at Rest**।",
    interviewAnswer: "MongoDB secures enterprise deployments across four security layers:\n1. **Authentication**: Implements SCRAM-SHA-256 as the default challenge-response protocol, alongside x.509 certificates and LDAP/Kerberos enterprise integration.\n2. **Authorization (RBAC)**: Granular Role-Based Access Control enforcing the Principle of Least Privilege through built-in roles (`read`, `readWrite`, `dbAdmin`, `userAdmin`) and custom privilege actions.\n3. **Encryption in Transit**: Strict TLS/SSL cryptographic tunnels for all inter-node cluster replication and client-driver connections.\n4. **Encryption at Rest**: WiredTiger storage engine encrypts data files using AES-256 via KMIP or local keyfiles.",
    detailedExplanation: {
      whatItIs: "MongoDB-র চার স্তরীয় নিরাপত্তা আর্কিটেকচার।",
      whyItExists: "ডেটা ফাঁস, অননুমোদিত অ্যাক্সেস এবং সাইবার হামলা প্রতিরোধ করতে।",
      howItWorks: "SCRAM পাসওয়ার্ড সিকিউরিটি, রোল পলিসি ইঞ্জিন, এবং ক্রিপ্টোগ্রাফিক ড্রাইভার।",
      whenToUse: "সব প্রোডাকশন MongoDB ডাটাবেস ইন্সট্যান্সে বাধ্যতামূলক।",
      keyPoints: [
        "Never run MongoDB in production without `--auth` enabled.",
        "Bind to private IP/VPC (never 0.0.0.0 publicly without IP Whitelist).",
        "Enable auditing to track DDL/DML security actions."
      ]
    },
    realWorldExamples: [
      {
        title: "Healthcare & Fintech Compliance",
        description: "রোগীর মেডিকেল রেকর্ড বা ব্যাংকিং তথ্য HIPAA এবং PCI-DSS কমপ্লায়েন্স নিশ্চিত করতে Encryption at Rest (AES-256) এবং RBAC দিয়ে লক করে রাখা হয়।"
      }
    ],
    interviewTips: {
      tip: "নিরাপত্তার ৪টি স্তর ক্রমান্বয়ে বলুন: 1. Authentication (SCRAM), 2. Authorization (RBAC), 3. Encryption in Transit (TLS), 4. Encryption at Rest (AES-256)।",
      deliveryStrategy: "৪টি স্তর সাজিয়ে বলুন -> Least Privilege নীতি উল্লেখ করুন -> প্রোডাকশন সতর্কবার্তা (Never open port 27017 to public)।",
      avoidSaying: [
        {
          wrong: "MongoDB ইন্সটল করলেই স্বয়ংক্রিয়ভাবে পাসওয়ার্ড লক থাকে।",
          right: "ডিফল্ট ফ্রেশ ইন্সটলেশনে অথেনটিকেশন অফ থাকতে পারে; প্রোডাকশনে অবশ্যই `--auth` ফ্ল্যাগ চালু করে অ্যাডমিন ইউজার বানাতে হবে।"
        }
      ]
    },
    quickRevision: [
      "১. Authentication = SCRAM-SHA-256 / x.509।",
      "২. Authorization = RBAC (Role-Based Access Control)।",
      "৩. Encryption in Transit = TLS/SSL।",
      "৪. Encryption at Rest = AES-256 (WiredTiger)।"
    ],
    followUpQuestions: [
      {
        question: "What is a transaction in MongoDB?",
        targetId: "mongo-transactions-replica-set",
        shortHint: "Multi-document ACID transactions."
      }
    ],
    tags: ["Security", "RBAC", "SCRAM", "TLS", "Encryption at Rest"]
  },

  // ==========================================
  // 🔵 Transactions & Aggregation Framework (5 Questions)
  // ==========================================
  {
    id: "mongo-transactions-replica-set",
    slug: "mongo-transactions-replica-set",
    question: "What is a transaction in MongoDB?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে **Transaction (Multi-Document ACID Transaction)** হলো একাধিক ডকুমেন্ট, কালেকশন বা এমনকি মাল্টিপল ডাটাবেস জুড়ে সম্পাদিত কতগুলো রাইট অপারেশনের একটি সমন্বিত ও অবিভাজ্য একক (**All-or-Nothing**)। MongoDB v4.0 থেকে **Replica Set**-এ এবং v4.2 থেকে **Sharded Cluster**-এ সম্পূর্ণ ACID ট্রানজ্যাকশন সমর্থিত। ট্রানজ্যাকশন চলাকালীন ভেতরের সমস্ত পরিবর্তন সফল হলে `commitTransaction()` কল করে ডেটা স্থায়ী করা হয়, অন্যথায় কোনো একটিতে সমস্যা হলে `abortTransaction()` কল করে সমস্ত পরিবর্তন রোলব্যাক করা হয়।",
    easyExplanation: "সহজ উপমা:\nএকটি ব্যাংকিং ট্রান্সফার—রহিমের ওয়ালেট ডকুমেন্ট থেকে ৫০০ টাকা মাইনাস করা এবং একই সাথে করিমের ওয়ালেট ডকুমেন্টে ৫০০ টাকা প্লাস করা। দুটি আলাদা কালেকশন বা ডকুমেন্টে কাজ হলেও এটি একটি সিঙ্গেল ট্রানজ্যাকশন; মাঝপথে কোনো ক্র্যাশ হলে রহিমের টাকা স্বয়ংক্রিয়ভাবে ফেরত আসবে।",
    interviewAnswer: "A transaction in MongoDB refers to Multi-Document ACID Transactions introduced in MongoDB 4.0 (for Replica Sets) and 4.2 (for Sharded Clusters). Utilizing client sessions (`client.startSession()`), it enables atomic operations across multiple documents, collections, and databases adhering strictly to snapshot isolation levels. Either all operations commit via `commitTransaction()`, or all interim modifications are rolled back via `abortTransaction()`.",
    detailedExplanation: {
      whatItIs: "MongoDB-র ডিস্ট্রিবিউটেড মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন।",
      whyItExists: "জটিল আর্থিক ও ইনভেন্টরি অপারেশনে ডেটা ইনকনসিস্টেন্সি রোধ করতে।",
      howItWorks: "WiredTiger স্টোরেজ ইঞ্জিনের গ্লোবাল স্ন্যাপশট ও টু-ফেজ কমিট (2PC) দিয়ে ক্লাস্টারে সিঙ্ক করে।",
      whenToUse: "পেমেন্ট প্রসেসিং, ওয়ালেট ট্রান্সফার, অর্ডার ইনভেন্টরি চেকআউট ইত্যাদি অপারেশনে।",
      keyPoints: [
        "Requires a Replica Set (cannot run on standalone mongod).",
        "Single-document writes are always atomic by default without transactions.",
        "Transactions carry lock overhead; keep transactions under 60 seconds (default transactionLifetimeLimitSeconds)."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// MongoDB Multi-Document ACID Transaction
const session = client.startSession();

try {
  session.startTransaction();

  // ১. ইউজারের অ্যাকাউন্ট থেকে টাকা ডেবিট
  await db.collection('accounts').updateOne(
    { _id: senderId, balance: { $gte: 500 } },
    { $inc: { balance: -500 } },
    { session }
  );

  // ২. রিসিভারের অ্যাকাউন্টে টাকা ক্রেডিট
  await db.collection('accounts').updateOne(
    { _id: receiverId },
    { $inc: { balance: 500 } },
    { session }
  );

  // ৩. উভয় অপারেশন সফল হলে কমিট
  await session.commitTransaction();
} catch (error) {
  // কোনো ভুল হলে সম্পূর্ণ রোলব্যাক
  await session.abortTransaction();
  throw error;
} finally {
  await session.endSession();
}`,
      explanationSteps: [
        { step: 1, title: "startSession", description: "ট্রানজ্যাকশনের মেমোরি কনটেক্সট চালু করে।" },
        { step: 2, title: "Pass session Option", description: "প্রতিটি কুয়েরিতে { session } পাস করা বাধ্যতামূলক।" },
        { step: 3, title: "commit / abort", description: "সফলতায় কমিট, এররে রোলব্যাক করে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "E-Commerce Checkout Pipeline",
        description: "অর্ডার স্ট্যাটাস 'Paid' করা, ইনভেন্টরি স্টক মাইনাস করা এবং ইউজারের রিওয়ার্ড পয়েন্ট অ্যাড করা—এই ৩টি কালেকশনের কাজ ট্রানজ্যাকশনে বাঁধা থাকে।"
      }
    ],
    interviewTips: {
      tip: "ইন্টারভিউয়ারের প্রিয় পয়েন্ট বলুন: 'In MongoDB, single-document updates are ALWAYS atomic without needing transactions. Transactions are only needed when spanning multiple documents across collections'.",
      deliveryStrategy: "সংজ্ঞা -> Replica Set শর্ত -> সিঙ্গেল বনাম মাল্টি-ডকুমেন্ট অ্যাটোমিসিটি -> কোড ফ্লো।",
      avoidSaying: [
        {
          wrong: "MongoDB-তে সাধারণ একটি ফিল্ড আপডেটের জন্যও ট্রানজ্যাকশন আবশ্যক।",
          right: "সিঙ্গেল ডকুমেন্টে প্রতিটি রাইট অপারেশন নিজে থেকেই শতভাগ অ্যাটোমিক।"
        }
      ]
    },
    quickRevision: [
      "Multi-document ACID transaction সমর্থন করে (Replica Set আবশ্যক)।",
      "`session.startTransaction()` -> `commitTransaction()` / `abortTransaction()`।",
      "সিঙ্গেল ডকুমেন্ট রাইট সবসময় অ্যাটোমিক।"
    ],
    followUpQuestions: [
      {
        question: "What does rollback mean in MongoDB transactions?",
        targetId: "mongo-transactions-rollback",
        shortHint: "Undoing uncommitted writes."
      }
    ],
    tags: ["Transactions", "ACID", "Replica Set", "Session", "Rollback"]
  },
  {
    id: "mongo-transactions-rollback",
    slug: "mongo-transactions-rollback",
    question: "What does rollback mean in MongoDB transactions?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB ট্রানজ্যাকশনে **Rollback (বা Abort)** মানে হলো ট্রানজ্যাকশনের কোনো একটি অপারেশন ব্যর্থ হলে বা এরর থ্রো করলে সেই ট্রানজ্যাকশনে হওয়া সমস্ত আংশিক পরিবর্তন বাতিল করে ডাটাবেসকে হুবহু ট্রানজ্যাকশন শুরুর আগের অবস্থায় ফিরিয়ে নেওয়া (`session.abortTransaction()`)। এছাড়া Replica Set আর্কিটেকচারে যখন একটি প্রাইমারি নোড ক্র্যাশ করে এবং এমন কিছু রাইট ছিল যা সেকেন্ডারিতে রেপ্লিকেট হওয়ার আগেই নোডটি বন্ধ হয়ে গিয়েছিল, নতুন প্রাইমারি নির্বাচিত হওয়ার পর পুরনো নোডটি ফিরে এলে সেই অমিল রাইটগুলো ডাটাবেস ফাইল থেকে স্বয়ংক্রিয়ভাবে মুছে আলাদা **Rollback Files (BSON)** আকারে ডিস্কে সেভ হয়ে যায়।",
    easyExplanation: "সহজ উপমা:\nআপনি একটি গুগল ডকে কিছু টাইপ করলেন, কিন্তু ভুল হওয়ায় 'Ctrl + Z' বা Undo চেপে লেখা শুরুর আগের অবস্থায় ফিরিয়ে নিলেন। Rollback হলো ডাটাবেসের প্রাতিষ্ঠানিক 'Ctrl + Z'।",
    interviewAnswer: "In MongoDB, rollback manifests in two contexts:\n1. **Application Transaction Rollback**: When an error occurs during a multi-document session, `session.abortTransaction()` is invoked, discarding all pending in-memory and journaled mutations to guarantee atomicity.\n2. **Replica Set Failover Rollback**: If a primary node accepts write operations with write concern `w:1` and abruptly crashes before replicating those writes to any secondary, a newly elected primary takes over. When the old primary rejoins, the divergence is automatically rolled back, and uncommitted operations are written to standalone rollback `.bson` files for manual administrative audit.",
    detailedExplanation: {
      whatItIs: "ট্রানজ্যাকশন ও রেপ্লিকেশন লেভেলে ডেটা রিভার্সাল প্রক্রিয়া।",
      whyItExists: "অসম্পূর্ণ পরিবর্তন ডাটাবেসকে নষ্ট করা থেকে বাঁচাতে।",
      howItWorks: "WiredTiger মেমোরি বাফার ক্লিয়ার করে এবং আনরেপ্লিকেটেড ডেটা বিএসওন ফাইলে আলাদা করে।",
      whenToUse: "যেকোনো ট্রানজ্যাকশন ট্রাই-ক্যাচ ব্লকের ক্যাচ অংশে।",
      keyPoints: [
        "abortTransaction() reverts all dirty writes.",
        "Replica set rollback can be prevented by using `w: 'majority'` write concern.",
        "Rollback files are stored in the database's `rollback/` directory."
      ]
    },
    realWorldExamples: [
      {
        title: "Payment Gateway Failure Handling",
        description: "পেমেন্ট গেটওয়ে রেসপন্স টাইমআউট হলে ট্রানজ্যাকশন রোলব্যাক করে কার্ড চার্জ ও অর্ডার ক্রিয়েশন বাতিল করা হয়।"
      }
    ],
    interviewTips: {
      tip: "রেপ্লিকেশন রোলব্যাক এড়ানোর সেরা উপায়টি বলুন: 'Always use Write Concern `w: majority`, so writes are only acknowledged after persisting to a majority of replica nodes'.",
      deliveryStrategy: "অ্যাপ্লিকেশন রোলব্যাক (abortTransaction) -> রেপ্লিকেশন নোড ফেইলওভার রোলব্যাক -> Write Concern majority।",
      avoidSaying: [
        {
          wrong: "রোলব্যাক হওয়া ডেটা চিরতরে শূন্যে হারিয়ে যায়।",
          right: "রেপ্লিকেশন ফেইলওভারের ক্ষেত্রে রোলব্যাক ডেটা অ্যাডমিন অডিটের জন্য ডিস্কে `.bson` ফাইলে সংরক্ষিত থাকে।"
        }
      ]
    },
    quickRevision: [
      "Rollback = সমস্ত আংশিক পরিবর্তন বাতিল করে পূর্বের স্টেটে ফিরে যাওয়া।",
      "`session.abortTransaction()` দিয়ে কোডে রোলব্যাক করা হয়।",
      "Write Concern `w: majority` রেপ্লিকেশন ফেইলওভার রোলব্যাক প্রতিরোধ করে।"
    ],
    followUpQuestions: [
      {
        question: "Explain the transaction lifecycle in MongoDB?",
        targetId: "mongo-transaction-lifecycle",
        shortHint: "startSession -> startTransaction -> commit -> endSession."
      }
    ],
    tags: ["Rollback", "Transactions", "Write Concern", "Failover", "Replica Set"]
  },
  {
    id: "mongo-transaction-lifecycle",
    slug: "mongo-transaction-lifecycle",
    question: "Explain the transaction lifecycle in MongoDB?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে একটি ট্রানজ্যাকশনের সুশৃঙ্খল লাইফসাইকেল মূলত ৫টি ধারাবাহিক ধাপে সম্পন্ন হয়:\n১. **Session Initialization (`client.startSession()`)**: ক্লায়েন্ট কানেকশন থেকে একটি লজিক্যাল সেশন শুরু হয়।\n২. **Transaction Start (`session.startTransaction()`)**: সেশনের ভেতর ট্রানজ্যাকশন ব্লক চালু হয় এবং Read/Write কনসার্ন লক নির্ধারিত হয়।\n৩. **CRUD Operations Execution**: সমস্ত `find`, `updateOne`, `insertOne` মেথডে `{ session }` অবজেক্ট পাস করে কুয়েরিগুলো চালানো হয়।\n৪. **Commit / Abort Decision**: সব কুয়েরি সফল হলে `session.commitTransaction()` চালিয়ে ডিস্কে পার্মানেন্ট করা হয়; কোনো এক্সেপশন হলে `session.abortTransaction()` দিয়ে রোলব্যাক করা হয়।\n৫. **Session Termination (`session.endSession()`)**: `finally` ব্লকে সেশন বন্ধ করে সার্ভারের মেমোরি রিসোর্স খালি করে দেওয়া হয়।",
    easyExplanation: "সহজ উপমা (এটিএম বুথ ব্যবহার):\n১. কার্ড ঢোকানো ➔ **startSession()**\n২. পিন নম্বর দিয়ে ট্রানজ্যাকশন শুরু ➔ **startTransaction()**\n৩. টাকা তোলা ও স্লিপ প্রিন্ট ➔ **CRUD Operations**\n৪. টাকা বের হয়ে সফল লেনদেন ➔ **commitTransaction()** (ব্যর্থ হলে Cancel/Abort)\n৫. কার্ড ফেরত নিয়ে বুথ থেকে বের হওয়া ➔ **endSession()**।",
    interviewAnswer: "The lifecycle of a MongoDB multi-document transaction encompasses five canonical phases: 1. `startSession()` creates a client session context, 2. `session.startTransaction(options)` initializes the ACID envelope with optional `readConcern` and `writeConcern`, 3. DML operations execute explicitly passing `{ session }`, 4. Outcome resolution via `commitTransaction()` on success or `abortTransaction()` on catch, and 5. Guaranteed cleanup via `session.endSession()` inside a `finally` block to release locks and WiredTiger cache handles.",
    detailedExplanation: {
      whatItIs: "ট্রানজ্যাকশনের শুরু থেকে সমাপ্তি পর্যন্ত ধাপসমূহ।",
      whyItExists: "লক লিক হওয়া এবং মেমোরি হ্যাং হওয়া প্রতিরোধ করতে।",
      howItWorks: "লজিক্যাল সেশন হ্যান্ডেল দিয়ে ক্লাস্টার লেনদেন ট্র্যাক করে।",
      whenToUse: "সব মাল্টি-ডকুমেন্ট ট্রানজ্যাকশন ইমপ্লিমেন্টেশনে।",
      keyPoints: [
        "Always call session.endSession() in a finally block to prevent resource leaks.",
        "Passing { session } to every operation is strictly required.",
        "Transactions timeout if held open past transactionLifetimeLimitSeconds (default 60s)."
      ]
    },
    realWorldExamples: [
      {
        title: "Hotel Room Booking",
        description: "হোটেল রুম বুকিং, ইনভয়েস জেনারেট এবং পেমেন্ট রসিদ কাটা—এই ৩টি অপারেশন ট্রানজ্যাকশন লাইফসাইকেল মেনে সম্পন্ন হয়।"
      }
    ],
    interviewTips: {
      tip: "অবশ্যই বলুন: 'session.endSession() must always be wrapped in a finally block to ensure memory is liberated even if the server crashes'.",
      deliveryStrategy: "৫টি ধাপ ক্রমান্বয়ে বলুন -> এটিএম বুথের উপমা -> finally ব্লকের গুরুত্ব।",
      avoidSaying: [
        {
          wrong: "সেশন ক্লোজ না করলেও কোনো সমস্যা নেই।",
          right: "সেশন ক্লোজ না করলে সার্ভারের সেশন পুল পূর্ণ হয়ে নতুন কানেকশন রিজেক্ট হওয়া শুরু করবে।"
        }
      ]
    },
    quickRevision: [
      "৫ ধাপ: startSession -> startTransaction -> Operations({session}) -> commit/abort -> endSession।",
      "`endSession()` সবসময় `finally` ব্লকে দেওয়া বাধ্যতামূলক।"
    ],
    followUpQuestions: [
      {
        question: "Explain the MongoDB aggregation framework?",
        targetId: "mongo-aggregation-framework-pipeline",
        shortHint: "Pipelines, $match, $group, $project."
      }
    ],
    tags: ["Lifecycle", "Session", "Transactions", "commit", "abort", "endSession"]
  },
  {
    id: "mongo-aggregation-framework-pipeline",
    slug: "mongo-aggregation-framework-pipeline",
    question: "Explain the MongoDB aggregation framework?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Advanced",
    importance: "Must Know",
    shortAnswer: "MongoDB-র **Aggregation Framework** হলো একটি অত্যন্ত শক্তিশালী ডেটা প্রসেসিং ও অ্যানালিটিক্স ইঞ্জিন, যা ডকুমেন্টের ওপর বিভিন্ন ধাপবিশিষ্ট পাইপলাইন (**Pipeline Stages**) চালিয়ে ডেটা ফিল্টারিং, ট্রান্সফর্মেশন, গ্রুপিং এবং গাণিতিক হিসাব-নিকাশ সম্পন্ন করে। প্রতিটি স্টেজের আউটপুট পরবর্তী স্টেজের ইনপুট হিসেবে কাজ করে। প্রধান স্টেজগুলো হলো:\n- **`$match`**: শর্ত অনুযায়ী ডেটা ফিল্টার করে (SQL `WHERE` এর মতো)।\n- **`$group`**: নির্দিষ্ট ফিল্ডের ওপর ভিত্তি করে গ্রুপ করে এগ্রিগেট (যেমন `$sum`, `$avg`) করে (SQL `GROUP BY` এর মতো)।\n- **`$project`**: ফিল্ডের আকার বদলানো বা নতুন ক্যালকুলেটেড ফিল্ড তৈরি করা।\n- **`$sort`**: ডেটা সাজানো (SQL `ORDER BY`)।\n- **`$limit` / `$skip`**: পেজিনেশন করা।\n- **`$lookup`**: অন্য কালেকশন থেকে সম্পর্কিত ডেটা জয়েন করা (SQL `LEFT JOIN`)।\n- **`$unwind`**: কোনো অ্যারে ফিল্ডকে ভেঙে প্রতি উপাদানের জন্য আলাদা ডকুমেন্ট বানানো।",
    easyExplanation: "সহজ উপমা:\nএকটি কারখানার অ্যাসেম্বলি লাইন (Assembly Line) কল্পনা করুন:\n১. কনভেয়র বেল্টে কাঁচামাল এলো ➔ নষ্টগুলো ফেলে দেওয়া হলো (**$match**)।\n২. কালার অনুযায়ী আলাদা ঝুড়িতে রাখা হলো (**$group**)।\n৩. প্রতিটি পণ্যের গায়ে মূল্য ও বারকোড স্টিকার লাগানো হলো (**$project**)।\n৪. বাক্সে সুন্দর করে সিরিয়াল অনুযায়ী সাজিয়ে ট্রাকের জন্য রেডি করা হলো (**$sort**)।",
    interviewAnswer: "The MongoDB Aggregation Framework is a high-performance data processing pipeline modeled on the concept of data flow pipelines. Documents enter a multi-stage pipeline where each stage transforms the stream before passing intermediate documents to the subsequent stage.\nEssential pipeline operators include:\n- `$match`: Early filtering utilizing B-Tree indexes.\n- `$group`: Groups documents by an accumulator key (`_id`) to compute metrics (`$sum`, `$avg`, `$min`, `$max`).\n- `$project`: Reshapes documents, computes dynamic expressions, and adds/removes fields.\n- `$lookup`: Performs left-outer joins against another collection.\n- `$unwind`: Deconstructs an array field into individual documents for each array element.\n- `$facet`: Executes multi-faceted aggregations within a single pipeline stage.",
    detailedExplanation: {
      whatItIs: "MongoDB-র পাইপলাইন ভিত্তিক অ্যানালিটিক্যাল প্রসেসিং ইঞ্জিন।",
      whyItExists: "সাধারণ find() দিয়ে যখন জটিল গ্রুপিং, পরিসংখ্যান ও জয়েন কুয়েরি করা যায় না।",
      howItWorks: "মেমোরিতে স্টেজভিত্তিক ডেটা স্ট্রিম প্রসেস করে (100MB মেমোরি লিমিট, allowDiskUse অপশন সহ)।",
      whenToUse: "ড্যাশবোর্ড অ্যানালিটিক্স, সেলস রিপোর্ট, চার্ট জেনারেশন এবং ডেটা ট্রান্সফর্মেশনে।",
      keyPoints: [
        "Place $match and $sort as early as possible to utilize indexes.",
        "Pipelines have a 100MB RAM limit per stage unless `allowDiskUse: true` is configured.",
        "$unwind is essential for flattening arrays before grouping."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// সেলস ড্যাশবোর্ড অ্যানালিটিক্স পাইপলাইন
const salesReport = await db.collection('orders').aggregate([
  // ১. ফিল্টার: শুধুমাত্র পেইড অর্ডার (ইনডেক্স ব্যবহার করবে)
  { $match: { status: 'paid', createdAt: { $gte: new Date('2024-01-01') } } },

  // ২. গ্রুপ: ক্যাটাগরি অনুযায়ী মোট বিক্রি ও গড় হিসাব
  {
    $group: {
      _id: '$category',
      totalRevenue: { $sum: '$amount' },
      averageOrderValue: { $avg: '$amount' },
      totalOrders: { $sum: 1 }
    }
  },

  // ৩. সর্ট: সবচেয়ে বেশি বিক্রি হওয়া ক্যাটাগরি সবার উপরে
  { $sort: { totalRevenue: -1 } },

  // ৪. লিমিট: সেরা ৫টি ক্যাটাগরি
  { $limit: 5 }
]).toArray();`,
      explanationSteps: [
        { step: 1, title: "$match first", description: "শুরুতেই ফিল্টার করায় পরবর্তী স্টেজে অপ্রয়োজনীয় ডেটা প্রসেস করতে হয় না।" },
        { step: 2, title: "$group Accumulators", description: "`$sum` এবং `$avg` দিয়ে রাজস্ব ও গড় অর্ডার ভ্যালু বের করা হয়েছে।" },
        { step: 3, title: "$sort and $limit", description: "টপ ৫টি ক্যাটাগরি সাজিয়ে রিটার্ন করা হয়েছে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Monthly Revenue & Customer Analytics",
        description: "অ্যাডমিন ড্যাশবোর্ডে গত ৬ মাসের প্রতি মাসের ক্যাটাগরিভিত্তিক আয় ও নতুন কাস্টমার গ্রাফ রেন্ডার করতে Aggregation Pipeline ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "অপটিমাইজেশন টিপ বলুন: 'Always place `$match` and `$sort` at the very beginning of the pipeline so MongoDB can leverage B-Tree indexes before documents are modified'.",
      deliveryStrategy: "অ্যাসেম্বলি লাইনের উপমা -> মূল ৬-৭টি স্টেজের কাজ -> পাইপলাইন অপটিমাইজেশন রুলস ($match first, 100MB limit)।",
      avoidSaying: [
        {
          wrong: "সব ডকুমেন্ট মেমোরিতে এনে জাভাস্ক্রিপ্টের .reduce() বা .filter() দিয়ে হিসাব করা ডাটাবেস এগ্রিগেশনের চেয়ে ভালো।",
          right: "ডাটাবেসের C++ কোর ইঞ্জিনে Aggregation Pipeline লক্ষ গুণ বেশি দ্রুত ও মেমোরি-দক্ষ।"
        }
      ]
    },
    quickRevision: [
      "Aggregation Framework = পাইপলাইন ভিত্তিক ডেটা প্রসেসিং ইঞ্জিন।",
      "$match (ফিল্টার) -> $group (গ্রুপিং ও সামারি) -> $project (রিশেপ) -> $sort -> $lookup (জয়েন)।",
      "শুরুতেই $match দিলে ইনডেক্স কাজ করে।"
    ],
    followUpQuestions: [
      {
        question: "Explain the role of $lookup and how it compares to SQL joins.",
        targetId: "mongo-lookup-vs-sql-joins",
        shortHint: "Left outer join in MongoDB."
      }
    ],
    tags: ["Aggregation", "Pipeline", "$match", "$group", "$project", "$lookup", "Analytics"]
  },
  {
    id: "mongo-lookup-vs-sql-joins",
    slug: "mongo-lookup-vs-sql-joins",
    question: "Explain the role of $lookup and how it compares to SQL joins.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Intermediate",
    importance: "Must Know",
    shortAnswer: "MongoDB-তে **`$lookup`** হলো অ্যাগ্রিগেশন পাইপলাইনের একটি স্টেজ যা মূলত SQL-এর **LEFT OUTER JOIN**-এর মতো কাজ করে। এটি একই ডাটাবেসের অন্য একটি কালেকশন থেকে ম্যাচ করা সম্পর্কিত ডেটাকে একটি **নতুন Array ফিল্ড** হিসেবে ইনপুট ডকুমেন্টে যুক্ত করে। তবে SQL JOIN-এর সাথে এর মূল পার্থক্য হলো: SQL JOIN একাধিক সারিকে গুণ করে ফ্ল্যাট টেবিল রেজাল্ট দেয় (যেখানে প্যারেন্ট ডেটা ডুপ্লিকেট হয়), কিন্তু `$lookup` চাইল্ড রেকর্ডগুলোকে প্যারেন্ট ডকুমেন্টের ভেতরেই একটি **সুন্দর নেস্টেড অ্যারে (Hierarchical Array)** হিসেবে সংরক্ষণ করে।",
    easyExplanation: "সহজ উপমা:\n- **SQL JOIN**: একজন কাস্টমারের ৩টি অর্ডার থাকলে রেজাল্ট টেবিলে কাস্টমারের নাম ৩ বার ডুপ্লিকেট হয়ে ৩টি আলাদা রো তৈরি হবে।\n- **MongoDB $lookup**: কাস্টমার ডকুমেন্টটি একটাই থাকবে, তার ভেতরে `orders: [ অর্ডার ১, অর্ডার ২, অর্ডার ৩ ]` নামে একটি পরিচ্ছন্ন অ্যারে যোগ হবে।",
    interviewAnswer: "The `$lookup` stage performs an equality-based left outer join to an unsharded collection in the same database, filtering in documents from the joined collection for processing. It matches a `localField` with a `foreignField` and outputs the resulting array of matched child documents into a specified `as` field.\nComparison with SQL JOINs:\n1. **Result Structure**: SQL joins flatten multi-table records into a 2D matrix, duplicating parent columns across matching rows. `$lookup` preserves the hierarchical document model, nesting joined records as a BSON array.\n2. **Performance**: Relational database optimizers feature highly mature join algorithms (Hash Join, Merge Join). `$lookup` in MongoDB can be CPU-intensive and requires indexing the `foreignField` on the foreign collection to prevent disastrous nested-loop scans.",
    detailedExplanation: {
      whatItIs: "MongoDB-র কালেকশন জয়েন স্টেজ।",
      whyItExists: "রেফারেন্স করা ডেটা কুয়েরি করার সময় এক পাইপলাইনে যুক্ত করতে।",
      howItWorks: "ফরেন কালেকশনে ইনডেক্স লুকআপ চালিয়ে রেজাল্ট অ্যারে আকারে এমবেড করে।",
      whenToUse: "1:Many বা M:N রেফারেন্সড ডেটা একসাথে ফেচ করতে।",
      keyPoints: [
        "Equivalent to a SQL LEFT OUTER JOIN.",
        "Foreign collection field MUST be indexed to avoid nested collection scans.",
        "Outputs matches as an array field (e.g. `as: 'userOrders'`).",
        "Sub-pipelines can be executed inside $lookup using `let` and `pipeline` syntax."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// $lookup দিয়ে ইউজার ও তার অর্ডারসমূহ জয়েন করা
const usersWithOrders = await db.collection('users').aggregate([
  { $match: { isActive: true } },
  {
    $lookup: {
      from: 'orders',          // যে কালেকশন থেকে ডেটা আসবে (Foreign Collection)
      localField: '_id',       // Users কালেকশনের ফিল্ড
      foreignField: 'userId',  // Orders কালেকশনের ফিল্ড
      as: 'orders'             // নতুন অ্যারে ফিল্ডের নাম
    }
  }
]).toArray();`,
      explanationSteps: [
        { step: 1, title: "localField vs foreignField", description: "users._id এর সাথে orders.userId ম্যাচ করে।" },
        { step: 2, title: "Output Array", description: "ম্যাচ করা সমস্ত অর্ডার ডকুমেন্টের ভেতর `orders: [...]` অ্যারে হিসেবে বসে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Order Details with Customer & Products",
        description: "অর্ডার হিস্ট্রিতে অর্ডারের সাথে কাস্টমারের নাম এবং অর্ডারের প্রোডাক্ট আইডি দিয়ে প্রোডাক্ট ক্যাটালগ জয়েন করতে `$lookup` ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "পারফরম্যান্স সতর্কতা বলুন: 'Foreign collection-এর `foreignField`-এর ওপর অবশ্যই ইনডেক্স থাকতে হবে, অন্যথায় প্রতি ডকুমেন্টের জন্য ফুল কালেকশন স্ক্যান হবে'।",
      deliveryStrategy: "SQL Left Join এর সাথে তুলনা -> রেজাল্ট স্ট্রাকচারের পার্থক্য (2D Flat vs Nested Array) -> ইনডেক্সিং রিকোয়ারমেন্ট।",
      avoidSaying: [
        {
          wrong: "$lookup চালালে SQL-এর মতোই হুবহু ডুপ্লিকেট সারি তৈরি হয়।",
          right: "$lookup কোনো রো ডুপ্লিকেট করে না, বরং চাইল্ড রেকর্ডগুলোকে একটি বিএসওন অ্যারেতে ধারণ করে।"
        }
      ]
    },
    quickRevision: [
      "$lookup = MongoDB-র SQL LEFT OUTER JOIN সমতুল্য।",
      "`from`, `localField`, `foreignField`, `as`।",
      "ফরেন ফিল্ডে ইনডেক্স থাকা আবশ্যক।",
      "ফলাফল ফ্ল্যাট না হয়ে নেস্টেড অ্যারে হিসেবে আসে।"
    ],
    followUpQuestions: [
      {
        question: "What is Mongoose?",
        targetId: "mongoose-what-is-mongoose-odm",
        shortHint: "ODM for MongoDB and Node.js."
      }
    ],
    tags: ["$lookup", "Aggregation", "JOIN", "Left Outer Join", "MQL"]
  },

  // ==========================================
  // 🔵 Mongoose Fundamentals (6 Questions)
  // ==========================================
  {
    id: "mongoose-what-is-mongoose-odm",
    slug: "mongoose-what-is-mongoose-odm",
    question: "What is Mongoose?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**Mongoose** হলো Node.js অ্যাপ্লিকেশনের জন্য তৈরি সবচেয়ে জনপ্রিয় **Object Data Modeling (ODM)** লাইব্রেরি। এটি MongoDB-র ওপর একটি কঠোর স্কিমা স্তর তৈরি করে যা **Schema Definition**, **Built-in & Custom Validation**, **Type Casting**, **Business Logic Hooks (Middleware)**, **Query Building Helpers**, এবং **Population**-এর মতো শক্তিশালী ফিচার প্রদান করে অ্যাপ্লিকেশন ডেভেলপমেন্টকে নিরাপদ, সুশৃঙ্খল ও দ্রুততর করে তোলে।",
    easyExplanation: "সহজ উপমা:\nMongoDB যেন একটি মুক্ত মাঠ যেখানে যে যেভাবে ইচ্ছা ডেটা ফেলে রাখতে পারে। আর Mongoose হলো একজন কঠোর ট্রাফিক পুলিশ এবং স্থপতি! সে মাঠের চারপাশে প্রাচীর তুলে দেয় (Schema), কে ঢুকবে আর কে ঢুকবে না তা আইডি কার্ড চেক করে ভ্যালিডেট করে (Validation) এবং ঢোকার আগে ও পরে বিশেষ নিয়মকানুন কার্যকর করে (Middleware Hooks)।",
    interviewAnswer: "Mongoose is an Object Data Modeling (ODM) library for Node.js and MongoDB. It abstracts raw MongoDB driver operations by providing a schema-based solution to model application data. Key architectural features include strictly typed schemas, built-in and asynchronous custom validators, pre and post middleware execution hooks, automated type casting, document methods/statics, and virtual properties.",
    detailedExplanation: {
      whatItIs: "Node.js-এর জন্য তৈরি ডি-ফ্যাক্টো স্ট্যান্ডার্ড MongoDB ODM লাইব্রেরি।",
      whyItExists: "MongoDB-র স্কিমা-লেস অনিয়ন্ত্রিত রূপকে অ্যাপ্লিকেশন লেভেলে টাইপ-সেফ ও সুসংগঠিত করতে।",
      howItWorks: "নেটিভ মঙ্গোডিবি ড্রাইভারের ওপর র‍্যাপার হিসেবে কাজ করে ও জাভাস্ক্রিপ্ট অবজেক্ট হাইড্রেট করে।",
      whenToUse: "Express.js বা Node.js ব্যাকএন্ডে যখন MongoDB ব্যবহার করা হয়।",
      keyPoints: [
        "Enforces schema validation at the application layer.",
        "Provides pre/post middleware hooks for hashing, cascading, and auditing.",
        "Populate mechanism simulates relational joins.",
        "Hydrates raw BSON into rich Mongoose Document instances."
      ]
    },
    codeExample: {
      language: "javascript",
      code: `// Mongoose দিয়ে স্কিমা ও মডেল তৈরি
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, lowercase: true },
  age: { type: Number, min: 18 }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);`,
      explanationSteps: [
        { step: 1, title: "Schema Definition", description: "কলামের টাইপ, বাধ্যতামূলক শর্ত ও ভ্যালিডেশন নির্ধারণ করে।" },
        { step: 2, title: "Model Compilation", description: "মডেল তৈরি করে ডাটাবেস কুয়েরি করার ইন্টারফেস প্রদান করে।" }
      ]
    },
    realWorldExamples: [
      {
        title: "Express.js User Registration",
        description: "ব্যবহারকারীর পাসওয়ার্ড হ্যাশিং, ইমেইল লোয়ারকেস করা এবং ইউনিকনেস যাচাই করতে Mongoose Schema ও Hook ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "Mongoose-এর ৩টি মূল স্তম্ভ উল্লেখ করুন: Schema, Model, এবং Validation/Hooks।",
      deliveryStrategy: "সংজ্ঞা -> কেন প্রয়োজন (Schema-less ডেটায় শৃঙ্খলা) -> মূল ফিচারসমূহ।",
      avoidSaying: [
        {
          wrong: "Mongoose হলো একটি আলাদা ডাটাবেস সফটওয়্যার।",
          right: "Mongoose কোনো ডাটাবেস নয়; এটি MongoDB-র সাথে যোগাযোগ করার জন্য Node.js-এর একটি ODM লাইব্রেরি।"
        }
      ]
    },
    quickRevision: [
      "Mongoose = Node.js-এর জন্য MongoDB ODM লাইব্রেরি।",
      "স্কিমা, ভ্যালিডেশন, মিডলওয়্যার হুকস এবং টাইপ কাস্টিং দেয়।",
      "নেটিভ ড্রাইভারের ওপর কাজ করে কোডকে সুরক্ষিত করে।"
    ],
    followUpQuestions: [
      {
        question: "Explain the difference between MongoDB and Mongoose.",
        targetId: "mongoose-vs-mongodb-native-driver",
        shortHint: "Database engine vs Application ODM layer."
      }
    ],
    tags: ["Mongoose", "ODM", "Node.js", "MongoDB", "Architecture"]
  },
  {
    id: "mongoose-vs-mongodb-native-driver",
    slug: "mongoose-vs-mongodb-native-driver",
    question: "Explain the difference between MongoDB and Mongoose.",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**MongoDB** হলো মূল ডাটাবেস ম্যানেজমেন্ট সিস্টেম সফটওয়্যার (ইঞ্জিন) যা BSON ডেটা ডিস্কে সংরক্ষণ করে। আর **Mongoose** হলো Node.js অ্যাপ্লিকেশনের ভেতরে ব্যবহৃত একটি **ODM লাইব্রেরি** যা নেটিভ MongoDB ড্রাইভারের ওপর অতিরিক্ত একটি সুরক্ষার স্তর হিসেবে কাজ করে।\n- **Native Driver**: কোনো স্কিমা চাপিয়ে দেয় না, কোনো ভ্যালিডেশন নেই, র স্পিড কিছুটা বেশি কিন্তু সব ভ্যালিডেশন কোডারকে নিজে লিখতে হয়।\n- **Mongoose**: কঠোর স্কিমা, অটোমেটিক টাইপ কাস্টিং, ভ্যালিডেশন, `pre/post` হুকস এবং রিলেশনাল পপুলেট সুবিধা দেয়।",
    easyExplanation: "সহজ উপমা:\n- **MongoDB**: একটি ইঞ্জিন এবং কাঁচামাল।\n- **Mongoose**: সেই ইঞ্জিনের ওপর বসানো সুন্দর রেডিমেড ড্যাশবোর্ড ও স্টিয়ারিং—যা স্পিড মিটার দেখায়, সিটবেল্ট না বাঁধলে শব্দ করে এবং গাড়ি চালানো নিরাপদ করে।",
    interviewAnswer: "MongoDB is the actual database server engine that stores unstructured BSON documents. Mongoose is an application-level Object Data Modeling (ODM) library built on top of the official Node.js `mongodb` native driver. The native driver delivers raw, minimal-overhead access without schema restrictions. Mongoose adds rich developer abstractions: structured schemas, built-in and custom validations, middleware lifecycle hooks, automated type casting, and relationship population, trading marginal memory/CPU overhead for developer velocity and data integrity.",
    detailedExplanation: {
      whatItIs: "ডাটাবেস সার্ভার (MongoDB) বনাম অ্যাপ্লিকেশনের ক্লায়েন্ট লাইব্রেরি (Mongoose)-এর তুলনা।",
      whyItExists: "র ড্রাইভার বনাম হাই-লেভেল অ্যাবস্ট্রাকশনের প্রয়োজনীয়তা বুঝতে।",
      howItWorks: "Mongoose ইন্টারনালি নেটিভ MongoDB Node.js ড্রাইভার ব্যবহার করে নেটওয়ার্ক সকেটে কম্যান্ড পাঠায়।",
      whenToUse: "হাই-কনসিস্টেন্সি ব্যবসায়িক অ্যাপে Mongoose; আল্ট্রা-হাই থ্রুপুট মাইক্রোসার্ভিসে Native Driver।",
      keyPoints: [
        "MongoDB = Database Engine; Mongoose = Application ODM Library.",
        "Mongoose validates at the Node.js layer before sending to MongoDB.",
        "Native driver returns plain JS objects; Mongoose returns hydrated Document instances."
      ]
    },
    realWorldExamples: [
      {
        title: "High Performance Ingestion vs Web API",
        description: "প্রতি সেকেন্ডে ১ লাখ IoT ইভেন্ট দ্রুত ডাম্প করতে Native Driver ব্যবহৃত হয়; কিন্তু গ্রাহকের পেমেন্ট ও প্রোফাইল ভ্যালিডেশনে Mongoose ব্যবহৃত হয়।"
      }
    ],
    interviewTips: {
      tip: "স্পষ্ট করে বলুন: 'Mongoose performs validation in Node.js memory BEFORE the write reaches the MongoDB engine'.",
      deliveryStrategy: "ইঞ্জিন বনাম লাইব্রেরির পার্থক্য -> র ড্রাইভার বনাম Mongoose এর ট্রেডঅফ -> কখন কোনটি বেছে নেবেন।",
      avoidSaying: [
        {
          wrong: "Mongoose ছাড়া Node.js দিয়ে MongoDB-র সাথে যুক্ত হওয়াই যায় না।",
          right: "অফিসিয়াল `mongodb` নেটিভ ড্রাইভার দিয়ে Mongoose ছাড়াই সরাসরি কানেক্ট ও কুয়েরি করা যায়।"
        }
      ]
    },
    quickRevision: [
      "MongoDB = মূল ডাটাবেস ইঞ্জিন।",
      "Mongoose = Node.js-এর ODM লাইব্রেরি (স্কিমা ও ভ্যালিডেশন দেয়)।",
      "Mongoose ইন্টারনালি অফিসিয়াল নেটিভ ড্রাইভারের ওপর চলে।"
    ],
    followUpQuestions: [
      {
        question: "What is an ODM?",
        targetId: "mongoose-what-is-an-odm",
        shortHint: "Object Data Modeling concept."
      }
    ],
    tags: ["Mongoose", "Native Driver", "MongoDB", "ODM Comparison"]
  },
  {
    id: "mongoose-what-is-an-odm",
    slug: "mongoose-what-is-an-odm",
    question: "What is an ODM?",
    category: "MongoDB",
    categorySlug: "mongodb",
    difficulty: "Beginner",
    importance: "Must Know",
    shortAnswer: "**ODM (Object Data Modeling)** হলো এমন একটি সফটওয়্যার ডিজাইন টেকনিক ও লাইব্রেরি যা কোডিং ভাষার অবজেক্ট (যেমন জাভাস্ক্রিপ্ট অবজেক্ট/ক্লাস) এবং ডকুমেন্ট-ভিত্তিক NoSQL ডাটাবেসের ডকুমেন্টের (যেমন MongoDB BSON) মধ্যে একটি অনুবাদক বা ম্যাপিং স্তর হিসেবে কাজ করে। রিলেশনাল ডাটাবেসে যেমন **ORM (Object Relational Mapping)** থাকে, তেমনি NoSQL ডকুমেন্ট ডাটাবেসের জন্য ব্যবহৃত হয় **ODM**। এটি টাইপ ভ্যালিডেশন, বিজনেস লজিক এনক্যাপসুলেশন এবং ডাটাবেস অপারেশনকে অবজেক্ট মেথডের মতো কল করতে সাহায্য করে।",
    easyExplanation: "সহজ উপমা:\nআপনি বাংলায় কথা বলেন, আর ডাটাবেস বোঝে স্প্যানিশ। ODM হলো আপনার ব্যক্তিগত দোভাষী। আপনি কোডে সহজ জাভাস্ক্রিপ্ট অবজেক্ট লিখবেন (`user.save()`), আর ODM নিজে থেকে ডাটাবেসের জটিল কম্যান্ডে অনুবাদ করে এক্সিকিউট করে নিয়ে আসবে।",
    interviewAnswer: "An ODM (Object Data Modeling) is an architectural abstraction layer for document-oriented NoSQL databases that maps native programming language objects to document data structures. Analogous to ORMs in the relational world, an ODM allows developers to define strongly typed schemas, enforce domain validations, define business methods directly on models, and manage relationships without writing raw database command primitives.",
    detailedExplanation: {
      whatItIs: "প্রোগ্রামিং ল্যাঙ্গুয়েজ অবজেক্ট এবং NoSQL ডকুমেন্টের মধ্যবর্তী ম্যাপিং প্রযুক্তি।",
      whyItExists: "কোডবেসের টাইপ সেফটি, রিডাবিলিটি এবং মেইনটেইনেবিলিটি বাড়াতে।",
      howItWorks: "মডেল ক্লাসের মেথডগুলোকে ইন্টারনাল কুয়েরি অপারেশনে ট্রান্সলেট করে।",
      whenToUse: "যেকোনো নো-এসকিউএল ব্যাকএন্ডে বিজনেস লজিক মডেলিং করতে।",
      keyPoints: [
        "ORM = Relational (SQL Tables); ODM = Document (NoSQL Collections).",
        "Encapsulates business rules, hooks, and validations.",
        "Hydration converts raw BSON into rich class instances."
      ]
    },
    realWorldExamples: [
      {
        title: "Mongoose (Node.js) & Prisma (Multi-DB)",
        description: "Node.js ইকোসিস্টেমে Mongoose হলো সবচেয়ে জনপ্রিয় ODM যা ডেভেলপারকে কাঁচা কুয়েরি না লিখে অবজেক্ট মেথড দিয়ে কাজ করতে দেয়।"
      }
    ],
    interviewTips: {
      tip: "ORM বনাম ODM-এর পার্থক্য বলুন: 'ORM রিলেশনাল টেবিল ম্যাপ করে (Prisma, TypeORM, Hibernate), আর ODM ডকুমেন্ট ডাটাবেস ম্যাপ করে (Mongoose, Morphia)'.",
      deliveryStrategy: "সংজ্ঞা -> ORM vs ODM পার্থক্য -> দোভাষীর উপমা -> মূল সুবিধাসমূহ।",
      avoidSaying: [
        {
          wrong: "Mongoose হলো একটি ORM।",
          right: "Mongoose হলো একটি ODM (Object Data Modeler), কারণ এটি রিলেশনাল টেবিল নয় বরং NoSQL ডকুমেন্ট নিয়ে কাজ করে।"
        }
      ]
    },
    quickRevision: [
      "ODM = Object Data Modeling (NoSQL ডকুমেন্টের অনুবাদক)।",
      "SQL-এর ORM-এর মতোই কিন্তু ডকুমেন্ট ডাটাবেসের জন্য।",
      "কোডের অবজেক্টের সাথে ডাটাবেস ডকুমেন্টের সিঙ্ক বজায় রাখে।"
    ],
    followUpQuestions: [
      {
        question: "What is a Mongoose Model, and how does it differ from a schema?",
        targetId: "mongoose-schema-vs-model",
        shortHint: "Blueprint vs Query Constructor."
      }
    ],
    tags: ["ODM", "ORM", "Mongoose", "Design Patterns"]
  },

  {
    "id": "mongoose-schema-definition",
    "slug": "mongoose-schema-definition",
    "question": "What is a Schema in Mongoose?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "Mongoose-এ Schema হলো একটি ব্লুপ্রিন্ট বা কাঠামো যা MongoDB ডকুমেন্টের শেপ, ফিল্ডের ডেটা টাইপ, ডিফল্ট ভ্যালু, ভ্যালিডেশন এবং মেথড সংজ্ঞায়িত করে।",
    "easyExplanation": "সহজ কথায়, বাড়ি বানানোর আগে যেমন নকশা লাগে, তেমনি MongoDB কালেকশনে কী কী ফিল্ড থাকবে এবং সেগুলোর ধরন কেমন হবে তা নির্ধারণ করে Schema।",
    "interviewAnswer": "In Mongoose, a Schema defines the structural blueprint and configuration of documents within a MongoDB collection. It enforces application-level structure by specifying field types, required constraints, default values, custom validators, getters/setters, and middleware hooks.",
    "detailedExplanation": {
      "whatItIs": "MongoDB ডকুমেন্টের কাঠামো, ডেটা টাইপ ও ভ্যালিডেশনের ব্লুপ্রিন্ট।",
      "whyItExists": "নো-স্কিউএল ডাটাবেসে অসঙ্গতিপূর্ণ ডেটা এন্ট্রি রোধ করতে এবং মডেল লেভেলে ডেটা ইন্টিগ্রিটি নিশ্চিত করতে।",
      "howItWorks": "BSON ডেটা পার্স করার সময় প্রতিটি ফিল্ড স্কিমার সংজ্ঞায়িত রুলসের সাথে মিলিয়ে ভ্যালিডেশন চালায়।",
      "whenToUse": "Mongoose মডেল ডিফাইন করার প্রথম ধাপ হিসেবে।",
      "keyPoints": [
        "Data Types: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map.",
        "Validation: required, min, max, minlength, maxlength, enum, match (Regex), ও custom validators.",
        "Timestamps: { timestamps: true } স্বয়ংক্রিয়ভাবে createdAt এবং updatedAt পরিচালনা করে।",
        "Schema সরাসরি কুয়েরি করতে পারে না, মডেল কম্পাইল করার কাজে লাগে।"
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "import { Schema } from 'mongoose';\n\nexport const userSchema = new Schema({\n  name: { type: String, required: true, trim: true },\n  email: { type: String, required: true, unique: true, lowercase: true },\n  role: { type: String, enum: ['user', 'admin'], default: 'user' }\n}, { timestamps: true });",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Schema Definition",
          "description": "ফিল্ড ও ভ্যালিডেশন রুলস সেট করা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User Registration Validation",
        "description": "ব্যবহারকারীর ডেটা টাইপ ও ইউনিক ইমেইল কঠোরভাবে নিয়ন্ত্রণ করতে Mongoose Schema ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Schema সরাসরি ডাটাবেসে কুয়েরি চালাতে পারে না; কুয়েরি করার জন্য Schema থেকে Model তৈরি করতে হয়।",
      "deliveryStrategy": "সংজ্ঞা -> ব্লুপ্রিন্ট উপমা -> ভ্যালিডেশন ও টাইমস্ট্যাম্প অপশন উল্লেখ করুন।",
      "avoidSaying": [
        {
          "wrong": "UserSchema.find() দিয়ে ডেটা খুঁজি।",
          "right": "Schema শুধু ডেটা স্ট্রাকচার ডিফাইন করে; .find() চালাতে Model প্রয়োজন।"
        }
      ]
    },
    "quickRevision": [
      "Schema = ডকুমেন্টের কাঠামোগত ব্লুপ্রিন্ট ও ভ্যালিডেশন রুলস।",
      "MongoDB স্কিমাহীন, কিন্তু Mongoose Schema অ্যাপ্লিকেশন-স্তরে টাইপ সেফটি দেয়।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a Model in Mongoose?",
        "targetId": "mongoose-model-definition",
        "shortHint": "Constructor compiled from schema."
      }
    ],
    "tags": [
      "Mongoose",
      "Schema",
      "Validation",
      "Node.js"
    ]
  },
  {
    "id": "mongoose-model-definition",
    "slug": "mongoose-model-definition",
    "question": "What is a Model in Mongoose?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "Mongoose Model হলো একটি কনস্ট্রাক্টর ফাংশন যা Schema থেকে সংকলিত হয় এবং MongoDB কালেকশনে CRUD অপারেশন করার মূল ইন্টারফেস প্রদান করে।",
    "easyExplanation": "Schema যদি হয় নকশা, Model হলো সেই ঠিকাদার যে বাস্তবে ইট-সিমেন্ট দিয়ে বাড়ি তৈরি করে। `mongoose.model('User', schema)` দিয়ে কুয়েরি ইন্টারফেস পাওয়া যায়।",
    "interviewAnswer": "A Mongoose Model is a constructor compiled from a Schema providing an active interface to MongoDB for creating, querying, updating, and deleting records in a specific collection.",
    "detailedExplanation": {
      "whatItIs": "Schema থেকে তৈরি ক্লাস যা MongoDB কালেকশনের উপর সরাসরি CRUD ইন্টারফেস দেয়।",
      "whyItExists": "ডাটাবেস কালেকশন কুয়েরি এবং অবজেক্ট ইনস্ট্যান্স অপারেশনের মধ্যে বিমূর্ততা প্রদান করতে।",
      "howItWorks": "মডেলের নামকে লোয়ারকেস ও প্লুরালাইজ করে সংশ্লিষ্ট কালেকশনের সাথে বাইন্ড করে।",
      "whenToUse": "ডাটাবেসে যেকোনো কুয়েরি, ইনসার্ট বা আপডেট চালানোর জন্য।",
      "keyPoints": [
        "mongoose.model('User', schema) স্বয়ংক্রিয়ভাবে 'users' কালেকশনের সাথে যুক্ত হয়।",
        "Static Methods: User.find(), User.create(), User.aggregate()।",
        "Document Methods: userInstance.save(), userInstance.isModified()।"
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "import mongoose from 'mongoose';\nimport { userSchema } from './userSchema';\n\nexport const User = mongoose.model('User', userSchema);\n\n// Usage\nconst users = await User.find({ role: 'admin' });",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Compilation",
          "description": "Schema থেকে Model কম্পাইল করে কুয়েরি ইন্টারফেস তৈরি।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Product Catalog Model",
        "description": "Product.find({ category: 'laptops' }) দিয়ে কুয়েরি চালানো হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Mongoose মডেলের প্রতিটি ইনস্ট্যান্স হলো একটি Mongoose Document যার নিজস্ব .save() মেথড থাকে।",
      "avoidSaying": [
        {
          "wrong": "Model আর Schema একই জিনিস।",
          "right": "Schema হলো নকশা, আর Model হলো এক্সিকিউটেবল ইন্টারফেস।"
        }
      ]
    },
    "quickRevision": [
      "Model = Schema থেকে সংকলিত ক্লাস যা কালেকশন অপারেশন পরিচালনা করে।"
    ],
    "followUpQuestions": [
      {
        "question": "What are the key differences between Schema and Model?",
        "targetId": "mongoose-schema-vs-model"
      }
    ],
    "tags": [
      "Mongoose",
      "Model",
      "CRUD"
    ]
  },
  {
    "id": "mongoose-schema-vs-model",
    "slug": "mongoose-schema-vs-model",
    "question": "What are the key differences between a Schema and a Model?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "Schema হলো ডকুমেন্টের কাঠামোর ব্লুপ্রিন্ট, আর Model হলো সেই Schema থেকে তৈরি অ্যাক্টিভ কুয়েরি ইন্টারফেস।",
    "easyExplanation": "Schema = ব্লুপ্রিন্ট নকশা; Model = ফ্যাক্টরি ক্লাস; Document = তৈরি হওয়া একক অবজেক্ট।",
    "interviewAnswer": "A Mongoose Schema is a configuration blueprint defining document shape, types, and validation rules with zero DB connection. A Model is a compiled constructor function connected to a MongoDB collection exposing static CRUD methods like find() and create().",
    "detailedExplanation": {
      "whatItIs": "Schema হলো গঠন সংজ্ঞায়ন এবং Model হলো কালেকশন এক্সিকিউশন ইন্টারফেস।",
      "whyItExists": "কনফিগারেশন এবং কুয়েরি লজিক আলাদা রাখতে।",
      "howItWorks": "Schema অবজেক্টকে mongoose.model() মেথডে পাস করলে কালেকশন বাইন্ডিং সহ Model রিটার্ন হয়।",
      "whenToUse": "প্রজেক্ট আর্কিটেকচারে স্কিমা ও মডেলিং লেয়ার ডিজাইন করতে।",
      "keyPoints": [
        "Schema cannot call .find(), Model can.",
        "Model represents the collection, Document represents a single row."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const schema = new Schema({ title: String });\nconst Post = mongoose.model('Post', schema);\n// Post.find() works, schema.find() errors!",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Schema vs Model",
          "description": "মডেল দিয়ে কুয়েরি এক্সিকিউট করা হয়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Clean Architecture",
        "description": "Schema ফাইল আলাদা ফোল্ডারে রেখে মডেল সার্ভিস লেয়ারে ইনজেক্ট করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "সংজ্ঞা ও অ্যানালজি দিয়ে উত্তর শুরু করুন।",
      "avoidSaying": [
        {
          "wrong": "Schema দিয়েই ডেটা সেভ করি।",
          "right": "Model দিয়ে ডেটা সেভ করি।"
        }
      ]
    },
    "quickRevision": [
      "Schema = Blueprint, Model = Query Constructor."
    ],
    "followUpQuestions": [
      {
        "question": "How do you implement 1-to-1 relationships?",
        "targetId": "mongoose-one-to-one-relationship"
      }
    ],
    "tags": [
      "Mongoose",
      "Schema",
      "Model"
    ]
  },
  {
    "id": "mongoose-one-to-one-relationship",
    "slug": "mongoose-one-to-one-relationship",
    "question": "How do you implement 1-to-1 relationships in Mongoose?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "High",
    "shortAnswer": "Mongoose-এ ১-টু-১ সম্পর্ক সাব-ডকুমেন্ট এম্বেডিং (Embedded Subdocument) অথবা ObjectId রেফারেন্সিং (unique: true সহ) দিয়ে করা যায়।",
    "easyExplanation": "ইউজারের ভেতরেই `profile: { bio, avatar }` এম্বেড করা (ফাস্ট), অথবা আলাদা Profile কালেকশনে রেখে `profile: { type: ObjectId, ref: 'Profile', unique: true }` দিয়ে লিংক করা।",
    "interviewAnswer": "In Mongoose, 1-to-1 relationships are modeled either via Embedded Subdocuments (preferred for tightly coupled data read together) or via Document Referencing with ObjectId and a `unique: true` index constraint (preferred for large, independently accessed entities).",
    "detailedExplanation": {
      "whatItIs": "দুটি সত্তার মধ্যে একক সম্পর্ক মডেল করার কৌশল।",
      "whyItExists": "ডকুমেন্টের আকার এবং অ্যাক্সেস প্যাটার্নের সাথে সামঞ্জস্য রেখে পারফরম্যান্স অপ্টিমাইজ করতে।",
      "howItWorks": "এম্বেডিং একই ডকুমেন্টে ডেটা রাখে; রেফারেন্সিং আইডি লিংক দিয়ে আলাদা কালেকশন পয়েন্ট করে।",
      "whenToUse": "ইউজার প্রোফাইল, সেটিংস ইত্যাদিতে।",
      "keyPoints": [
        "Embedding: Fast single-document read without joins.",
        "Referencing: Kept in separate collection, queried with populate().",
        "Unique constraint on reference field ensures strict 1-to-1."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const userSchema = new Schema({\n  name: String,\n  profile: { type: Schema.Types.ObjectId, ref: 'Profile', unique: true }\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "1-to-1 Reference",
          "description": "unique: true দিয়ে ১-টু-১ নিশ্চিত করা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User & Profile Settings",
        "description": "লাইটওয়েট সেটিংস এম্বেড করা হয়, বড় লিগ্যাল ডকুমেন্টস রেফারেন্স করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Default to embedding unless document size limit (16MB) demands referencing.",
      "avoidSaying": [
        {
          "wrong": "১-টু-১ মানেই আলাদা টেবিল বানানো।",
          "right": "NoSQL-এ ডিফল্ট হলো এম্বেডিং।"
        }
      ]
    },
    "quickRevision": [
      "Embedded for tight coupling, Referenced with unique: true for loose coupling."
    ],
    "followUpQuestions": [
      {
        "question": "How do you implement 1-to-Many relationships?",
        "targetId": "mongoose-one-to-many-relationship"
      }
    ],
    "tags": [
      "Mongoose",
      "Relationships",
      "1-to-1"
    ]
  },
  {
    "id": "mongoose-one-to-many-relationship",
    "slug": "mongoose-one-to-many-relationship",
    "question": "How do you implement 1-to-Many relationships in Mongoose?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "tags": [
      "Mongoose",
      "Relationships",
      "1-to-Many"
    ],
    "shortAnswer": "১) সাব-ডকুমেন্ট অ্যারে এম্বেডিং (One-to-Few), ২) চাইল্ড রেফারেন্সিং (অ্যারে অফ আইডি), এবং ৩) প্যারেন্ট রেফারেন্সিং (চাইল্ডে parentId রাখা - One-to-Squillions)।",
    "easyExplanation": "অল্প হলে প্যারেন্টে এম্বেড; হাজার হাজার বা লাখ লাখ হলে চাইল্ডের ভেতর `postId: ObjectId` দিয়ে ইনডেক্স করা (প্যারেন্ট রেফারেন্সিং)।",
    "interviewAnswer": "1-to-N relationships depend on cardinality: One-to-Few uses an embedded subdocument array; One-to-Many uses child referencing (array of ObjectIds); One-to-Squillions uses parent referencing (child holds parentId) to prevent the 16MB document size limit.",
    "detailedExplanation": {
      "whatItIs": "কার্ডিনালিটির ওপর ভিত্তি করে ১-টু-এন রিলেশন মডেলিং।",
      "whyItExists": "MongoDB-র ১৬MB লিমিট এবং অ্যারে মিউটেশন পারফরম্যান্স অপ্টিমাইজ করতে।",
      "howItWorks": "অল্প হলে প্যারেন্টে এম্বেড; অনেক বেশি হলে চাইল্ড কালেকশনে parentId দিয়ে ইনডেক্সিং।",
      "whenToUse": "পোস্ট-কমেন্ট, ইউজার-ঠিকানা রিলেশনে।",
      "keyPoints": [
        "One-to-Few: Embedded subdocuments.",
        "One-to-Squillions: Parent Referencing (Child points to Parent _id with index).",
        "Never allow unbounded arrays inside a parent document."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const commentSchema = new Schema({\n  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true, index: true },\n  text: String\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Parent Reference",
          "description": "কমেন্টে postId রেফারেন্স রাখা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Blog Posts and Comments",
        "description": "লাখ লাখ কমেন্ট হ্যান্ডেল করতে চাইল্ডে postId রেফারেন্স রাখা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "আনবাউন্ডেড অ্যারের বিপদ উল্লেখ করুন: 16MB overflow.",
      "avoidSaying": [
        {
          "wrong": "সবসময় প্যারেন্টে অ্যারে আকারে চাইল্ডের আইডি রাখতে হয়।",
          "right": "চাইল্ডের সংখ্যা বেশি হলে প্যারেন্ট রেফারেন্সিং বেস্ট প্র্যাকটিস।"
        }
      ]
    },
    "quickRevision": [
      "Unbounded 1-to-Many requires Parent Referencing."
    ],
    "followUpQuestions": [
      {
        "question": "What is referencing and how does populate() work?",
        "targetId": "mongoose-referencing-and-populate"
      }
    ]
  },
  {
    "id": "mongoose-referencing-and-populate",
    "slug": "mongoose-referencing-and-populate",
    "question": "What is referencing in Mongoose, and how does populate() work?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Referencing হলো ডকুমেন্টে অন্য কালেকশনের ObjectId সংরক্ষণ করা; আর populate() কুয়েরি সময়ে সেই ObjectId-কে আসল ডকুমেন্ট দিয়ে প্রতিস্থাপন করে।",
    "easyExplanation": "অর্ডারে কাস্টমারের `userId` রাখা থাকে। `Order.find().populate('userId')` দিলে Mongoose কাস্টমারের নাম, ইমেইল এনে অবজেক্টে বসিয়ে দেয়।",
    "interviewAnswer": "Referencing stores another document's ObjectId alongside a `ref` option. `populate()` dynamically replaces those ObjectIds with the actual documents from the referenced collection during query execution, emulating an application-level SQL JOIN.",
    "detailedExplanation": {
      "whatItIs": "রেফারেন্সড কালেকশন থেকে আইডি মিলিয়ে সম্পর্কিত ডেটা ফেচ করে অবজেক্টে বসিয়ে দেওয়ার কৌশল।",
      "whyItExists": "ডুপ্লিকেট ডেটা এড়াতে এবং ডকুমেন্টের আকার হালকা রাখতে।",
      "howItWorks": "মূল কুয়েরির পর Mongoose মেমোরিতে আইডি কালেক্ট করে $in কুয়েরি দিয়ে চাইল্ড রেকর্ডগুলো এনে মার্চ করে।",
      "whenToUse": "পোস্টের সাথে লেখক বা অর্ডারের সাথে কাস্টমার ডিটেইলস সংযুক্ত করতে।",
      "keyPoints": [
        "Schema: { type: Schema.Types.ObjectId, ref: 'ModelName' }.",
        "Field selection: .populate('author', 'name email').",
        "Executes multiple network round-trips behind the scenes."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const book = await Book.findById(id).populate('author', 'name email').exec();",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Populate",
          "description": "লেখকের নাম ও ইমেইল ফিল্ড পপুলেট করা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Post Author Populate",
        "description": "ফিডে পোস্ট লোড করার সময় লেখকের ইউজারনেম ও অবতার আনতে ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "populate() ডাটাবেস লেভেল জয়েন নয়, এটি নোড অ্যাপ্লিকেশন লেভেলে একাধিক কুয়েরি চালায়।",
      "avoidSaying": [
        {
          "wrong": "populate() ডাটাবেসে এক কুয়েরিতে জয়েন করে।",
          "right": "এটি অ্যাপ্লিকেশন লেভেলে ব্যাচ কুয়েরি মার্চ করে।"
        }
      ]
    },
    "quickRevision": [
      "populate() = replaces ObjectId with referenced document."
    ],
    "followUpQuestions": [
      {
        "question": "How does populate work under the hood?",
        "targetId": "mongoose-populate-under-the-hood"
      }
    ],
    "tags": [
      "Mongoose",
      "Populate",
      "Referencing"
    ]
  },
  {
    "id": "mongoose-populate-under-the-hood",
    "slug": "mongoose-populate-under-the-hood",
    "question": "How does populate() work under the hood?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "shortAnswer": "Under the hood, Mongoose ডাটাবেস স্তরে কোনো JOIN চালায় না; এটি মূল কুয়েরি থেকে সব ObjectId সংগ্রহ করে রেফারেন্সড কালেকশনে `$in` অপারেটর দিয়ে ব্যাচ কুয়েরি চালিয়ে মেমরিতে মার্চ করে।",
    "easyExplanation": "১ম কুয়েরিতে সব বই আনে -> বইগুলো থেকে লেখকের আইডি আলাদা করে -> ২য় কুয়েরিতে `Author.find({ _id: { $in: ids } })` চালিয়ে মেমরিতে জোড়া লাগায়।",
    "interviewAnswer": "Under the hood, Mongoose's populate() executes sequential batch queries at the application layer: 1) executes parent query, 2) extracts all distinct target ObjectIds, 3) executes a secondary batch query using `{ _id: { $in: [extractedIds] } }`, and 4) stitches returned child documents into parent objects in Node.js memory.",
    "detailedExplanation": {
      "whatItIs": "Mongoose-এর ক্লায়েন্ট সাইড কুয়েরি চেইনিং ও ইন-মেমোরি ডেটা স্টিচিং মেকানিজম।",
      "whyItExists": "MongoDB-তে নেটিভ জয়েন ছাড়াই অ্যাপ লেভেলে রিলেশনাল মডেলিং সাপোর্ট দিতে।",
      "howItWorks": "আইডি সংগ্রহ -> $in ব্যাচ কুয়েরি -> মেমোরিতে হ্যাশম্যাপ দিয়ে লিংক প্রতিস্থাপন।",
      "whenToUse": "সহজ রিলেশনে; ভারী অ্যানালিটিক্সে $lookup অগ্রাধিকার পায়।",
      "keyPoints": [
        "Does NOT execute a database-level join.",
        "Uses $in operator to batch fetch related records, avoiding N+1 problem.",
        "Stitches objects in Node.js RAM."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// What Mongoose executes conceptually:\nconst books = await Book.collection.find({}).toArray();\nconst authorIds = [...new Set(books.map(b => b.author))];\nconst authors = await Author.collection.find({ _id: { $in: authorIds } }).toArray();",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Batching",
          "description": "$in দিয়ে একবারে সব লেখক আনা হয়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Order Stitches",
        "description": "অর্ডারের সাথে প্রোডাক্ট ডিটেইলস ব্যাচ কুয়েরিতে আনা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "populate() বনাম $lookup পার্থক্য উল্লেখ করুন: application-level vs database-engine pipeline.",
      "avoidSaying": [
        {
          "wrong": "populate() ডাটাবেস ইঞ্জিনে জয়েন করে।",
          "right": "ডাটাবেসে জয়েন হয় শুধু $lookup দিয়ে।"
        }
      ]
    },
    "quickRevision": [
      "Populate uses $in batch queries and in-memory stitching."
    ],
    "followUpQuestions": [
      {
        "question": "What are Mongoose middleware hooks?",
        "targetId": "mongoose-middleware-pre-post-hooks"
      }
    ],
    "tags": [
      "Mongoose",
      "Populate",
      "Internals"
    ]
  },
  {
    "id": "mongoose-middleware-pre-post-hooks",
    "slug": "mongoose-middleware-pre-post-hooks",
    "question": "What are Mongoose Middleware/Hooks (pre and post hooks)?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Mongoose Middleware হলো ইন্টারসেপ্টর ফাংশন যা `save`, `validate`, বা `find` অপারেশনের ঠিক আগে (pre) বা ঠিক পরে (post) স্বয়ংক্রিয়ভাবে চলে।",
    "easyExplanation": "Pre Hook: সেভ হওয়ার আগে পাসওয়ার্ড হ্যাশ করা। Post Hook: সেভ হওয়ার পরে অডিট লগ লেখা বা কনফার্মেশন ইমেইল পাঠানো।",
    "interviewAnswer": "Mongoose Middleware (pre and post hooks) are interceptor functions executing control flow before or after document or query lifecycle events. Pre hooks are ideal for hashing passwords and sanitizing data; Post hooks are ideal for logging and async notifications.",
    "detailedExplanation": {
      "whatItIs": "Mongoose ডকুমেন্ট ও কুয়েরি লাইফসাইকেল ইভেন্টের পূর্বে ও পরে চলা ইন্টারসেপ্টর।",
      "whyItExists": "পাসওয়ার্ড হ্যাশিং বা সফট ডিলিটের মতো বিজনেস রুলস স্কিমা লেভেলে ক্যাপসুলড রাখতে।",
      "howItWorks": "অপারেশনের পূর্বে ও পরে রেজিস্টার্ড হুক ফাংশনগুলো ক্রম অনুযায়ী চলে।",
      "whenToUse": "পাসওয়ার্ড এনক্রিপশন, সফট ডিলিট ফিল্টারিং ও অডিট লগিংয়ে।",
      "keyPoints": [
        "Document middleware: runs on document instances (save, validate).",
        "Query middleware: runs on queries (find, findOneAndUpdate).",
        "Always use regular function syntax to preserve 'this' binding."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "userSchema.pre('save', async function (next) {\n  if (!this.isModified('password')) return next();\n  this.password = await bcrypt.hash(this.password, 10);\n  next();\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Pre Save Hook",
          "description": "পাসওয়ার্ড পরিবর্তিত হলে সেভ হওয়ার পূর্বে হ্যাশ করা হয়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Bcrypt Password Hashing",
        "description": "স্কিমার pre('save') হুকে পাসওয়ার্ড এনক্রিপ্ট করে রাখা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "কখনই Arrow Function ব্যবহার করবেন না, কারণ এতে this হারিয়ে যায়।",
      "avoidSaying": [
        {
          "wrong": "হুকের ভেতর অ্যারো ফাংশন ব্যবহার করি।",
          "right": "হুকের ভেতর রেগুলার function() ব্যবহার করি যাতে this অক্ষত থাকে।"
        }
      ]
    },
    "quickRevision": [
      "Pre Hook = Before operation, Post Hook = After operation."
    ],
    "followUpQuestions": [
      {
        "question": "How do you perform cascade deletes in Mongoose?",
        "targetId": "mongoose-cascade-deletes"
      }
    ],
    "tags": [
      "Mongoose",
      "Hooks",
      "Middleware",
      "Security"
    ]
  },
  {
    "id": "mongoose-cascade-deletes",
    "slug": "mongoose-cascade-deletes",
    "question": "How do you perform cascade deletes in Mongoose?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "High",
    "shortAnswer": "Mongoose-এ ক্যাসকেড ডিলিট `pre('deleteOne')` মিডলওয়্যার হুক দিয়ে অথবা ট্রানজ্যাকশনের মধ্যে `deleteMany()` চালিয়ে বাস্তবায়ন করা হয়।",
    "easyExplanation": "MongoDB-তে নেটিভ ক্যাসকেড ডিলিট নেই; তাই ইউজার মুছলে তার পোস্টগুলো মুছতে হুকের ভেতর `Post.deleteMany({ author: this._id })` লিখতে হয়।",
    "interviewAnswer": "Unlike relational databases offering ON DELETE CASCADE foreign keys, MongoDB lacks native cascading deletes. In Mongoose, this is implemented via pre('deleteOne', { document: true }) middleware hooks or programmatic deleteMany() calls within an ACID transaction.",
    "detailedExplanation": {
      "whatItIs": "প্যারেন্ট রেকর্ড মুছে ফেলার সাথে সংশ্লিষ্ট চাইল্ড রেকর্ডগুলো মুছে ফেলার লজিক।",
      "whyItExists": "MongoDB-তে নেটিভ ফরেন কি ক্যাসকেডিং না থাকায় এতিম ডেটা রোধ করতে।",
      "howItWorks": "ডকুমেন্ট বা কুয়েরি ডিলিট হুকে চাইল্ড মডেলের deleteMany() কল করা হয়।",
      "whenToUse": "ইউজার ডিলিটেশন, ব্লগ পোস্ট ডিলিটেশনে।",
      "keyPoints": [
        "No native ON DELETE CASCADE in MongoDB engine.",
        "Document hook: userSchema.pre('deleteOne', { document: true, query: false }).",
        "Wrap in an ACID transaction for production-grade atomicity."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "userSchema.pre('deleteOne', { document: true, query: false }, async function (next) {\n  await model('Post').deleteMany({ author: this._id });\n  next();\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Cascade Hook",
          "description": "ইউজার ডিলিট হলে তার সব পোস্ট মুছে দেওয়া হয়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User GDPR Account Deletion",
        "description": "ইউজার মুছলে তার সমস্ত কমেন্ট ও অর্ডার হিস্ট্রি ক্লিন করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "findByIdAndDelete চালালে ডকুমেন্ট হুক ট্রিগার হয় না, কুয়েরি হুক কনফিগার করতে হয়।",
      "avoidSaying": [
        {
          "wrong": "MongoDB-তে cascade: true ফ্ল্যাগ দিলেই স্বয়ংক্রিয়ভাবে মুছে যায়।",
          "right": "MongoDB-তে এমন কোনো ফ্ল্যাগ নেই, কোড দিয়ে হ্যান্ডেল করতে হয়।"
        }
      ]
    },
    "quickRevision": [
      "Implement cascade deletes via Mongoose hooks or ACID transactions."
    ],
    "followUpQuestions": [
      {
        "question": "What is .lean() in Mongoose?",
        "targetId": "mongoose-lean-queries-performance"
      }
    ],
    "tags": [
      "Mongoose",
      "Cascade Delete",
      "Hooks"
    ]
  },
  {
    "id": "mongoose-lean-queries-performance",
    "slug": "mongoose-lean-queries-performance",
    "question": "What is .lean() in Mongoose, and why does it improve performance?",
    "category": "MongoDB",
    "categorySlug": "mongodb",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Mongoose-এ `.lean()` কুয়েরি মেথডটি ভারী Mongoose Document তৈরি না করে সরাসরি হালকা প্লেইন জাভাস্ক্রিপ্ট অবজেক্ট (POJO) রিটার্ন করে, যা পড়ার গতি বহুগুণ বাড়ায় এবং মেমরি খরচ কমায়।",
    "easyExplanation": "বাই-ডিফল্ট কুয়েরি প্রতিটি ডকুমেন্টের সাথে Mongoose-এর মেথড (যেমন .save(), ভ্যালিডেশন) যুক্ত করে ভারী করে তোলে। `.lean()` দিলে সেই বাড়তি বোঝা ছাড়া খাঁটি JS Object পাওয়া যায়।",
    "interviewAnswer": "Calling `.lean()` on read queries skips document hydration, returning high-performance Plain Old JavaScript Objects (POJOs) instead of heavy Mongoose Documents. This achieves 3-5x faster query execution and slashes memory consumption by omitting change tracking, virtuals, and save methods.",
    "detailedExplanation": {
      "whatItIs": "Mongoose-এর একটি কুয়েরি অপ্টিমাইজার যা ডকুমেন্ট হাইড্রেশন স্কিপ করে কাঁচা POJO রিটার্ন করে।",
      "whyItExists": "লার্জ রিড কুয়েরিতে Mongoose ডকুমেন্টের অতিরিক্ত মেমোরি ও সিপিইউ ওভারহেড দূর করতে।",
      "howItWorks": "MongoDB ড্রাইভার থেকে পাওয়া র BSON/JS অবজেক্ট সরাসরি রিটার্ন করে।",
      "whenToUse": "সব ধরনের রিড-অনলি কুয়েরি যেমন GET APIs, এক্সপোর্ট, এবং অ্যানালিটিক্সে।",
      "keyPoints": [
        "Skips Mongoose Document hydration completely.",
        "3x to 5x faster read throughput with significantly lower RAM footprint.",
        "Returned objects cannot call .save() or custom instance methods."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const users = await User.find({ status: 'active' }).lean().limit(500);",
      "explanationSteps": [
        {
          "step": 1,
          "title": ".lean()",
          "description": "হাইড্রেশন স্কিপ করে দ্রুত POJO অ্যারে রিটার্ন।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "High-Traffic REST GET APIs",
        "description": "প্রোডাক্ট লিস্টিং এপিআই-তে .lean() ব্যবহার করে সার্ভার মেমরি ৫০% বাঁচানো হয়।"
      }
    ],
    "interviewTips": {
      "tip": "GET API-তে সবসময় .lean() ব্যবহার করা গোল্ডেন রুল।",
      "avoidSaying": [
        {
          "wrong": "সব জায়গায় .lean() দিয়ে doc.save() কল করা যায়।",
          "right": ".lean() দিলে doc.save() মেথড থাকে না।"
        }
      ]
    },
    "quickRevision": [
      ".lean() = Skips hydration, returns plain JS objects, 3-5x faster."
    ],
    "followUpQuestions": [
      {
        "question": "When should you choose PostgreSQL over MySQL?",
        "targetId": "sql-mysql-vs-postgresql-comparison"
      }
    ],
    "tags": [
      "Mongoose",
      "Lean",
      "Performance",
      "Optimization"
    ]
  }

];
