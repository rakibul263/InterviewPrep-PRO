import { Question } from "@/types";

export const databaseCoreQuestions: Question[] = [
  {
    "id": "db-what-is-database-why-necessary",
    "slug": "db-what-is-database-why-necessary",
    "question": "What is a database and why is it necessary?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Database** হলো ইলেকট্রনিক উপায়ে সংরক্ষিত ও সুশৃঙ্খলভাবে সাজানো ডেটার একটি সমন্বিত সংগ্রহ (Organized collection of data)। এটি প্রয়োজনীয় কারণ সাধারণ ফাইল সিস্টেমে (যেমন টেক্সট ফাইল বা এক্সেল) কনকারেন্ট অ্যাক্সেস, বিশাল ডেটা হ্যান্ডলিং, নিরাপত্তা, ACID ট্রানজ্যাকশন, দ্রুত ইন্ডেক্স সার্চিং এবং ডেটা ইন্টিগ্রিটি নিশ্চিত করা প্রায় অসম্ভব। ডাটাবেস উচ্চগতির কুয়েরি, ডেটা রিডানড্যান্সি রোধ এবং স্বয়ংক্রিয় ব্যাকআপের মাধ্যমে আধুনিক সফটওয়্যার আর্কিটেকচারকে স্কেলেবল রাখে।",
    "easyExplanation": "সহজ উপমা:\n- **ফাইল সিস্টেম**: একটি এলোমেলো ড্রয়ার যেখানে হাজার হাজার কাগজের ফাইল রাখা। কোনো নির্দিষ্ট ফাইল খুঁজতে পুরো ড্রয়ার হাতড়াতে হবে, দুজন মানুষ একসাথে একই ফাইলে লিখলে লেখা নষ্ট হবে, আর ড্রয়ার পুড়ে গেলে কোনো ব্যাকআপ থাকবে না।\n- **Database**: একটি আধুনিক স্বয়ংক্রিয় ব্যাংকের লকার বা ক্যাবিনেট। প্রতিটি ফাইলের গায়ে বারকোড (Index) লাগানো, কে কখন ঢুকছে তার সিকিউরিটি লগ আছে, একাধিক কর্মকর্তা একসাথে নিরাপদে কাজ করতে পারেন এবং মুহূর্তের মধ্যে যেকোনো ডেটা খুঁজে বের করা যায়।",
    "interviewAnswer": "A database is a systematic, organized collection of structured or semi-structured data stored electronically in a computer system, controlled by a Database Management System (DBMS). Databases are essential because traditional file-based storage fails to provide efficient indexing, ACID transactional consistency, concurrent multi-user access control, crash recovery, referential integrity, and sub-millisecond search capabilities across millions of records.",
    "detailedExplanation": {
      "whatItIs": "কম্পিউটার সিস্টেমে সুবিন্যস্ত ও নিরাপদে তথ্য সংরক্ষণ ও পরিচালনার কেন্দ্রীয় ভাণ্ডার।",
      "whyItExists": "ফাইল সিস্টেমের সীমাবদ্ধতা (কনকারেন্সি সমস্যা, ধীরগতির সার্চিং ও ডেটা ডুপ্লিকেশন) দূর করতে।",
      "howItWorks": "স্টোরেজ ইঞ্জিনের মাধ্যমে ডিস্কে ডেটা ব্লক বা পেজ আকারে রাখে এবং B-Tree/LSM-Tree ইনডেক্স দিয়ে দ্রুত খুঁজে দেয়।",
      "whenToUse": "যেকোনো সফটওয়্যার অ্যাপ্লিকেশন যাতে ডায়নামিক ইউজার ডেটা, লেনদেন বা অ্যানালিটিক্স সংরক্ষণ প্রয়োজন।",
      "keyPoints": [
        "Eliminates data redundancy and inconsistencies.",
        "Provides multi-user concurrency control (locking/MVCC).",
        "Enforces security, authentication, and authorization.",
        "Guarantees durability and point-in-time recovery via WAL (Write-Ahead Logging)."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- রিলেশনাল ডাটাবেসে ডেটা টেবিল তৈরি ও ইন্টিগ্রিটি প্রয়োগ\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  username VARCHAR(50) UNIQUE NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- কনকারেন্ট ও দ্রুত কুয়েরি এক্সিকিউশন\nSELECT id, username, email \nFROM users \nWHERE email = 'rakibul@example.com';",
      "explanationSteps": [
        {
          "step": 1,
          "title": "PRIMARY KEY",
          "description": "প্রতিটি রেকর্ডকে ইউনিকভাবে চিহ্নিত করে।"
        },
        {
          "step": 2,
          "title": "UNIQUE Constraint",
          "description": "একই ইমেইল বা ইউজারনেম যাতে দুইবার না ঢুকতে পারে তা রোধ করে।"
        },
        {
          "step": 3,
          "title": "Indexed Lookup",
          "description": "B-Tree ইনডেক্স ব্যবহারের ফলে লাখ লাখ রেকর্ডের মধ্য থেকেও ও(লগ এন) সময়ে রেজাল্ট রিটার্ন করে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Banking & Financial Platforms",
        "description": "ব্যালেন্স ট্রান্সফার, একাউন্ট ব্যালেন্স এবং লেজার স্টেটমেন্ট নিখুঁত নির্ভুলতায় রাখতে ডাটাবেসের ব্যবহার অপরিহার্য।"
      }
    ],
    "interviewTips": {
      "tip": "ফাইল সিস্টেমের সাথে ডাটাবেসের মূল ৩টি পার্থক্য তুলে ধরুন: Concurrency Control, Crash Recovery (WAL), এবং Indexing Speed।",
      "deliveryStrategy": "সংজ্ঞা -> ফাইল সিস্টেমের সমস্যা -> ডাটাবেসের সমাধান ও ACID ট্রানজ্যাকশন।",
      "avoidSaying": [
        {
          "wrong": "ডাটাবেস হলো এক্সেল ফাইলের মতো একটি সফটওয়্যার।",
          "right": "ডাটাবেস হলো একটি অপ্টিমাইজড ডেটা স্টোরেজ ও ম্যানেজমেন্ট সিস্টেম যা ডিস্ক ব্লক, বাফার পুল এবং ইনডেক্সিং ইঞ্জিন দিয়ে গঠিত।"
        }
      ]
    },
    "quickRevision": [
      "Database = সুশৃঙ্খল ও সুরক্ষিত ইলেকট্রনিক ডেটা ভাণ্ডার।",
      "ফাইল সিস্টেমের ডেটা লস, কনকারেন্সি ও স্লো সার্চের সমাধান করে।",
      "প্রদান করে ACID প্রোপার্টিজ, ইনডেক্সিং এবং রিকভারি।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a DBMS?",
        "targetId": "db-what-is-dbms",
        "shortHint": "Software that manages databases."
      }
    ],
    "tags": [
      "Database",
      "DBMS",
      "Storage",
      "Architecture",
      "Fundamentals"
    ]
  },
  {
    "id": "db-what-is-dbms",
    "slug": "db-what-is-dbms",
    "question": "What is a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**DBMS (Database Management System)** হলো এমন একটি সিস্টেম সফটওয়্যার যা ডেটাবেস তৈরি, রক্ষণাবেক্ষণ, কুয়েরি এক্সিকিউশন, নিয়ন্ত্রণ ও পরিচালনার সম্পূর্ণ দায়িত্ব পালন করে। এটি ব্যবহারকারী/অ্যাপ্লিকেশন এবং ফিজিক্যাল ডাটাবেসের মধ্যে একটি ইন্টারফেস হিসেবে কাজ করে। DBMS মূলত তিনটি কোর বিষয় নিশ্চিত করে: **Data Definition (DDL)**, **Data Manipulation (DML)**, এবং **Data Control (DCL)**।",
    "easyExplanation": "সহজ উপমা:\nএকটি ব্যাংক ভবনের বিশাল ভল্ট (Data) আছে। কিন্তু সাধারণ মানুষ বা ক্যাশিয়াররা সরাসরি ভল্টের ভেতর ঢুকে টাকা ওড়ে না। ভল্টটির দায়িত্বে আছেন একজন চিফ ক্যাশ ম্যানেজার (DBMS)। আপনি রিকোয়েস্ট দিলে তিনি ভল্ট থেকে সঠিক টাকা বের করে দেন, হিসেব রেজিস্টারে লিখে রাখেন এবং নিরাপত্তার পাহারা দেন।",
    "interviewAnswer": "A DBMS (Database Management System) is a software layer that manages the creation, storage, retrieval, updating, and administration of data. It acts as an interface between end-user applications and the raw operating system storage, abstracting physical disk storage into logical models while providing query optimization, transaction management, concurrency control, and security access policies.",
    "detailedExplanation": {
      "whatItIs": "ফিজিক্যাল ডেটা স্টোরেজ এবং ক্লায়েন্ট কুয়েরির মধ্যবর্তী সফটওয়্যার ইঞ্জিন।",
      "whyItExists": "ডেটা ইন্টিগ্রিটি বজায় রাখতে, মেমোরি ক্যাশিং (বাফার পুল) পরিচালনা করতে এবং ফাইল লক হ্যান্ডেল করতে।",
      "howItWorks": "পার্সার, কুয়েরি অপ্টিমাইজার এবং এক্সিকিউশন ইঞ্জিনের সমন্বয়ে SQL বা NoSQL কম্যান্ড প্রসেস করে ডিস্কে রাইট/রিড করে।",
      "whenToUse": "সব ধরনের ডেটা-ড্রাইভেন সফটওয়্যার ব্যাকএন্ডে।",
      "keyPoints": [
        "Data Abstraction: ৩টি স্তর (Physical, Logical, View Level)।",
        "Transaction Management: কনকারেন্ট ইউজারদের মাঝে ডেটা কনসিস্টেন্সি রক্ষা।",
        "Security & Backup: ইউজার রোলস, পারমিশন এবং অটোমেটিক ব্যাকআপ ব্যবস্থা।"
      ]
    },
    "realWorldExamples": [
      {
        "title": "Enterprise Application Backends",
        "description": "PostgreSQL, MySQL, এবং MongoDB সার্ভার সফটওয়্যারগুলো ক্লায়েন্টদের হাজার হাজার রিকোয়েস্টকে সেন্ট্রাল DBMS ইঞ্জিনে প্রসেস করে।"
      }
    ],
    "interviewTips": {
      "tip": "DBMS-এর ৩টি লেভেল অফ অ্যাবস্ট্রাকশন (Physical Level, Logical/Conceptual Level, View Level) উল্লেখ করলে এক্সট্রা পয়েন্ট পাওয়া যায়।",
      "deliveryStrategy": "সংজ্ঞা -> আর্কিটেকচারাল লেয়ার -> মূল ৩টি কাজ (DDL, DML, DCL)।",
      "avoidSaying": [
        {
          "wrong": "DBMS এবং Database হুবহু একই জিনিস।",
          "right": "Database হলো মূল ডেটার সংগ্রহ, আর DBMS হলো সেই ডেটা ম্যানেজ করার সফটওয়্যার।"
        }
      ]
    },
    "quickRevision": [
      "DBMS = সফটওয়্যার যা ডাটাবেস তৈরি, কুয়েরি ও সিকিউর করে।",
      "৩টি স্তর: Physical, Logical, View Level।",
      "উদাহরণ: PostgreSQL, MySQL, Oracle, MongoDB।"
    ],
    "followUpQuestions": [
      {
        "question": "What is the difference between DBMS and Relational DBMS?",
        "targetId": "db-dbms-vs-rdbms",
        "shortHint": "Flat files vs Relational Tables."
      }
    ],
    "tags": [
      "DBMS",
      "Software",
      "Database",
      "Architecture"
    ]
  },
  {
    "id": "db-dbms-vs-rdbms",
    "slug": "db-dbms-vs-rdbms",
    "question": "What is the difference between DBMS and Relational DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**DBMS** সাধারণত ডেটাকে ফ্ল্যাট ফাইল বা হায়ারারকিক্যাল আকারে স্টোর করে, যেখানে টেবিলগুলোর মধ্যে রিলেশনশিপ (ফরেন কি) বাধ্যতামূলক নয় এবং ACID ট্রানজ্যাকশন নিশ্চিত নাও থাকতে পারে (যেমন XML, FileMaker, MS Access)। পক্ষান্তরে, **RDBMS (Relational DBMS)** এডগার এফ. কড (E.F. Codd)-এর রিলেশনাল মডেল অনুসরণ করে ডেটাকে সারি ও কলামবিশিষ্ট টেবিলে সংরক্ষণ করে, কঠোর **Primary Key - Foreign Key** রিলেশন বজায় রাখে এবং **ACID ট্রানজ্যাকশন** সম্পূর্ণভাবে নিশ্চিত করে (যেমন PostgreSQL, MySQL, Oracle)।",
    "easyExplanation": "সহজ উপমা:\n- **DBMS**: একটি সাধারণ নোটবুক বা এক্সেল শিট যেখানে আপনি যেকোনোভাবে নাম আর ফোন নাম্বার টুকে রাখতে পারেন; শিটগুলোর মাঝে কোনো বাধ্যতামূলক নিয়ম বা সম্পর্ক থাকে না।\n- **RDBMS**: একটি সুসংগঠিত ব্যাংকিং লেজার বুক যেখানে গ্রাহকের একাউন্ট টেবিলের সাথে ট্রানজ্যাকশন টেবিলের কঠোর লিংক আছে। একাউন্ট ছাড়া ট্রানজ্যাকশন এন্ট্রি করা অসম্ভব (Foreign Key Constraint)।",
    "interviewAnswer": "The core difference lies in relational data modeling and integrity constraints. A standard DBMS stores data as independent flat files or hierarchical trees without enforcing relational constraints or strict ACID guarantees. An RDBMS (Relational DBMS) is based on relational algebra and Codd's 12 rules, organizing data into structured two-dimensional tables (relations) with enforced primary-foreign key relationships, normalized schemas, and atomic transactions.",
    "detailedExplanation": {
      "whatItIs": "ফ্ল্যাট ফাইল/ট্রি স্টোরেজ (DBMS) বনাম রিলেশনাল টেবিল ভিত্তিক ইঞ্জিন (RDBMS)।",
      "whyItExists": "এন্টারপ্রাইজ অ্যাপ্লিকেশনে জটিল রিলেশন ও ট্রানজ্যাকশনাল সিকিউরিটি নিশ্চিত করতে RDBMS-এর আবির্ভাব।",
      "howItWorks": "RDBMS ফরেন কি কনস্ট্রেইন্ট এবং জয়েন অ্যালগরিদম (Hash Join, Merge Join) দিয়ে একাধিক টেবিলের ডেটা সংযুক্ত করে।",
      "whenToUse": "ফিনটেক, ই-কমার্স এবং স্ট্রাকচার্ড ডেটা সিস্টেমে সর্বদা RDBMS সেরা।",
      "keyPoints": [
        "Data Storage: DBMS stores as files; RDBMS stores as tables (Tuples & Attributes).",
        "Relationships: DBMS has no relation enforcement; RDBMS enforces Foreign Keys.",
        "ACID: DBMS rarely supports distributed ACID; RDBMS enforces full ACID.",
        "Normalization: Supported and enforced in RDBMS to prevent anomalies."
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Orders & Customers",
        "description": "গ্রাহকের ইউজার টেবিলের সাথে অর্ডার টেবিলের ওয়ান-টু-মেনি রিলেশনশিপ বজায় রাখতে PostgreSQL (RDBMS) ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Codd's Rules এবং Foreign Key এনফোর্সমেন্টের কথা উল্লেখ করুন।",
      "deliveryStrategy": "সংজ্ঞা -> স্টোরেজ মডেল পার্থক্য -> রিলেশন ও ফরেন কি -> উদাহরণ।",
      "avoidSaying": [
        {
          "wrong": "সব DBMS-ই আসলে RDBMS।",
          "right": "সব RDBMS হলো DBMS, কিন্তু সব DBMS রিলেশনাল মডেল সমর্থন করে না।"
        }
      ]
    },
    "quickRevision": [
      "DBMS = ফ্ল্যাট ফাইল বা হায়ারারকিক্যাল ডেটা।",
      "RDBMS = টেবিল, সারি, কলাম এবং Foreign Key ভিত্তিক সম্পর্ক।",
      "RDBMS কঠোরভাবে ACID এবং Normalization মেনে চলে।"
    ],
    "followUpQuestions": [
      {
        "question": "Difference between SQL and NoSQL databases",
        "targetId": "db-sql-vs-nosql",
        "shortHint": "Relational tables vs flexible document/KV models."
      }
    ],
    "tags": [
      "RDBMS",
      "DBMS",
      "Relational",
      "SQL"
    ]
  },
  {
    "id": "db-types-of-dbms",
    "slug": "db-types-of-dbms",
    "question": "What are the different types of DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Medium",
    "shortAnswer": "আর্কিটেকচার এবং ডেটা মডেলের ওপর ভিত্তি করে DBMS প্রধানত ৪ প্রকার:\n১. **Hierarchical DBMS**: ডেটা ট্রি বা প্যারেন্ট-চাইল্ড আকারে থাকে (যেমন IBM IMS)।\n২. **Network DBMS**: মেনি-টু-মেনি গ্রাফ স্ট্রাকচারে ডেটা থাকে (যেমন IDMS)।\n৩. **Relational DBMS (RDBMS)**: ডেটা টু-ডাইমেনশনাল টেবিল (সারি ও কলাম)-এ থাকে (যেমন PostgreSQL, MySQL)।\n৪. **NoSQL / Non-Relational DBMS**: ফ্লেক্সিবল স্কিমায় ডকুমেন্ট, কি-ভ্যালু, কলাম-ফ্যামিলি বা গ্রাফ আকারে ডেটা রাখে (যেমন MongoDB, Redis, Neo4j, Cassandra)।",
    "easyExplanation": "সহজ উপমা:\n- **Hierarchical**: একটি কোম্পানির অর্গানোগ্রাম (CEO -> Manager -> Employee)। চাইল্ডের একটাই প্যারেন্ট থাকে।\n- **Network**: ফেসবুকের ফ্রেন্ড নেটওয়ার্ক (একজনের একাধিক বন্ধু বা প্যারেন্ট থাকতে পারে)।\n- **Relational**: এক্সেল শিটের মতো নিখুঁত টেবিল ও আইডি দিয়ে লিংক।\n- **NoSQL**: একটি ফোল্ডার যেখানে ডিরেক্ট JSON ফাইল ও হ্যাশম্যাপ রাখা থাকে।",
    "interviewAnswer": "DBMS engines are categorized by their underlying data structures: 1. **Hierarchical** (1:N tree structures), 2. **Network** (M:N graph pointer sets), 3. **Relational (RDBMS)** (Tables with schema constraints and SQL querying), and 4. **NoSQL / Non-Relational** (Document, Key-Value, Wide-Column, and Graph stores designed for horizontal scale and flexible schemas). Modern systems also include **NewSQL** (distributed relational databases like CockroachDB).",
    "detailedExplanation": {
      "whatItIs": "ডেটা সংরক্ষণের লজিক্যাল মডেলের ওপর ভিত্তি করে ডেটাবেসের শ্রেণীবিন্যাস।",
      "whyItExists": "বিভিন্ন ধরনের ডেটা অ্যাক্সেস প্যাটার্ন (কঠোর লেনদেন বনাম বিশাল স্কেলের রিয়েল-টাইম স্ট্রিমিং)-এর অপটিমাইজেশন নিশ্চিত করতে।",
      "howItWorks": "মডেল অনুযায়ী পয়েন্টার, রিলেশনাল ইনডেক্স বা হ্যাশম্যাপ দিয়ে রেকর্ড ট্রাভার্স করে।",
      "whenToUse": "রিলেশনাল ডেটায় RDBMS; ক্যাটালগ ও বিগ ডেটায় Document/NoSQL; ক্যাশিংয়ে Key-Value; সোশ্যাল নেটওয়ার্কে Graph DB।",
      "keyPoints": [
        "Hierarchical: Fast 1:N navigation, rigid tree schema.",
        "Relational: Standard SQL, rigid schema, high consistency.",
        "NoSQL: Dynamic schema, eventual consistency, high partition tolerance."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Social Network Recommendations",
        "description": "বন্ধুদের পারস্পরিক নেটওয়ার্ক ও মিউচুয়াল কানেকশন কুয়েরি করতে Neo4j (Graph DBMS) ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "আধুনিক সিস্টেমে 'NewSQL' (যেমন Google Spanner, CockroachDB) এর নাম যোগ করলে ইন্টারভিউয়ার প্রভাবিত হন।",
      "deliveryStrategy": "৪টি মূল ক্যাটাগরি বলুন -> স্টোরেজ মডেল উল্লেখ করুন -> প্র্যাকটিকাল উদাহরণ দিন।",
      "avoidSaying": [
        {
          "wrong": "NoSQL মানে কোনো SQL সাপোর্ট করে না।",
          "right": "NoSQL মানে 'Not Only SQL', অর্থাৎ এটি নন-রিলেশনাল এবং ফ্লেক্সিবল ডেটা মডেল সমর্থন করে।"
        }
      ]
    },
    "quickRevision": [
      "৪ প্রকার: Hierarchical, Network, Relational, এবং NoSQL।",
      "RDBMS রিলেশন ও ট্রানজ্যাকশনে সেরা।",
      "NoSQL ফ্লেক্সিবিলিটি ও ডিস্ট্রিবিউটেড স্কেলিংয়ে সেরা।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain different NoSQL types with examples",
        "targetId": "db-nosql-types-with-examples",
        "shortHint": "Document, Key-Value, Columnar, Graph."
      }
    ],
    "tags": [
      "DBMS",
      "Categories",
      "Relational",
      "NoSQL"
    ]
  },
  {
    "id": "db-table-row-column",
    "slug": "db-table-row-column",
    "question": "What is a table in a DBMS? (Row, Column)",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "একটি RDBMS-এ **Table (বা Relation)** হলো ডেটার একটি টু-ডাইমেনশনাল কাঠামো যা অনুভূমিক **Row (সারি বা Record / Tuple)** এবং উল্লম্ব **Column (কলাম বা Field / Attribute)** নিয়ে গঠিত।\n- **Row (Tuple)**: একটি স্বতন্ত্র সিঙ্গেল সত্ত্বার (যেমন নির্দিষ্ট একজন ইউজারের) সম্পূর্ণ তথ্য প্রকাশ করে।\n- **Column (Attribute)**: একটি নির্দিষ্ট বৈশিষ্ট্যের (যেমন নাম, বয়স, ইমেইল) ডেটা টাইপ ও মান ধারণ করে।",
    "easyExplanation": "সহজ উপমা:\nএকটি ক্লাসরুমের হাজিরা খাতা (Attendance Sheet) কল্পনা করুন:\n- পুরো শিটটি হলো **Table** (Students)।\n- খাতার উপরের হেডলাইনগুলো (Roll, Name, Phone) হলো **Columns**।\n- প্রতিটি ছাত্রের জন্য পূরণ করা একেকটি অনুভূমিক লাইন হলো **Row**।",
    "interviewAnswer": "In a relational database, a table (formally termed a 'relation') is a two-dimensional collection of related data organized into columns and rows. A **Column** (attribute) represents a specific data property with a predefined data type and domain constraint. A **Row** (tuple or record) represents a single, discrete entity instance comprising values for each attribute, uniquely identified by a primary key.",
    "detailedExplanation": {
      "whatItIs": "রিলেশনাল ডেটাবেসের মৌলিক স্টোরেজ একক।",
      "whyItExists": "বাস্তব জগতের এন্টিটি ও তাদের এট্রিবিউটগুলোকে স্ট্রাকচার্ড উপায়ে ডিস্কে সংরক্ষণ করতে।",
      "howItWorks": "ডিস্কে পেজ বা ব্লক আকারে প্রতিটি টাপলের বাইনারি রিপ্রেজেন্টেশন সেভ থাকে।",
      "whenToUse": "সব রিলেশনাল ডেটাবেস স্কিমা ডিজাইনে।",
      "keyPoints": [
        "Table = Relation (Entity Set).",
        "Row = Tuple / Record (Specific Entity Instance).",
        "Column = Attribute / Field (Entity Characteristic).",
        "Degree = কলামের মোট সংখ্যা; Cardinality = সারির মোট সংখ্যা।"
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Table তৈরি (Product Table)\nCREATE TABLE products (\n  id INT PRIMARY KEY,       -- Column 1: Primary Identifier\n  name VARCHAR(100),        -- Column 2: Attribute\n  price DECIMAL(10, 2),     -- Column 3: Attribute\n  stock_quantity INT        -- Column 4: Attribute\n);\n\n-- Row ইনসার্ট (Single Tuple)\nINSERT INTO products (id, name, price, stock_quantity)\nVALUES (101, 'Mechanical Keyboard', 85.50, 40);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Columns Definition",
          "description": "`id`, `name`, `price` হলো ফিল্ড যা ডেটা টাইপ নির্ধারণ করে।"
        },
        {
          "step": 2,
          "title": "Row Insertion",
          "description": "ইনসার্ট করা ভ্যালুগুলোর সেট হলো একটি সম্পূর্ণ Row বা Tuple।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User Management Schema",
        "description": "একটি অ্যাপ্লিকেশনের রেজিস্টার্ড ব্যবহারকারীদের তথ্য টেবিলের সারি হিসেবে থাকে।"
      }
    ],
    "interviewTips": {
      "tip": "ফর্মাল রিলেশনাল পরিভাষাগুলো মনে রাখুন: Table = Relation, Row = Tuple, Column = Attribute, Number of rows = Cardinality, Number of columns = Degree।",
      "deliveryStrategy": "সংজ্ঞা -> Row vs Column -> রিলেশনাল বীজগণিতের টার্মিনোলজি (Tuple, Attribute)।",
      "avoidSaying": [
        {
          "wrong": "Row এবং Column একই জিনিস।",
          "right": "Row হলো একক রেকর্ডের অনুভূমিক সেট, আর Column হলো নির্দিষ্ট বৈশিষ্ট্যের উল্লম্ব ফিল্ড।"
        }
      ]
    },
    "quickRevision": [
      "Table = সারি ও কলামের সমন্বয়ে গঠিত রিলেশন।",
      "Row = Tuple (একটি সম্পূর্ণ রেকর্ড)।",
      "Column = Attribute (নির্দিষ্ট বৈশিষ্ট্য বা ফিল্ড)।"
    ],
    "followUpQuestions": [
      {
        "question": "What is data redundancy in database?",
        "targetId": "db-data-redundancy",
        "shortHint": "Duplication of data."
      }
    ],
    "tags": [
      "Table",
      "Row",
      "Column",
      "Tuple",
      "Schema"
    ]
  },
  {
    "id": "db-data-redundancy",
    "slug": "db-data-redundancy",
    "question": "What is data redundancy in database?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Data Redundancy** হলো একটি ডাটাবেসের একাধিক ভিন্ন ভিন্ন জায়গায় একই ডেটা অপ্রয়োজনীয়ভাবে বারবার ডুপ্লিকেট আকারে সংরক্ষিত থাকা। এর ফলে তিনটি মারাত্মক সমস্যা দেখা দেয়: **১. ডিস্ক স্পেসের অপচয়**, **২. ডেটা অ্যানোমালি বা অসঙ্গতি (Insertion, Deletion, Update Anomalies)**, এবং **৩. পারফরম্যান্স ড্রপ** (একই তথ্য এক জায়গায় আপডেট হয়ে অন্য জায়গায় পুরনো থেকে যায়)। ডাটাবেস **Normalization**-এর প্রধান লক্ষ্যই হলো এই ডেটা রিডানড্যান্সি দূর করা।",
    "easyExplanation": "সহজ উপমা:\nএকটি শপিং সাইটের অর্ডার টেবিলে যদি প্রতিবার অর্ডারের সাথে কাস্টমারের পুরো নাম, বাড়ির ঠিকানা ও ফোন নাম্বার বারবার লেখা হয়: কাস্টমার ১০টি অর্ডার করলে তার ঠিকানা ১০ বার লেখা হলো। এখন কাস্টমার বাসা বদল করলে যদি ৯টি অর্ডারে ঠিকানা বদলানো হয় আর ১টিতে ভুলে আগেরটি থেকে যায়, তবে ডেলিভারিম্যান বিভ্রান্ত হয়ে ভুল ঠিকানায় পার্সেল নিয়ে যাবে! এটাই Data Redundancy এবং Update Anomaly।",
    "interviewAnswer": "Data redundancy refers to the unnecessary duplication of the same piece of data across multiple tables or locations within a database. Redundancy causes increased storage overhead and leads to critical data anomalies: Insertion Anomaly (cannot insert data without dummy entries), Update Anomaly (modifying data in one place leaves conflicting stale data elsewhere), and Deletion Anomaly (deleting one record accidentally deletes other independent information). Database normalization systematically eliminates redundancy.",
    "detailedExplanation": {
      "whatItIs": "একই ডেটা পয়েন্টের অযাচিত অনুলিপি তৈরি হওয়া।",
      "whyItExists": "খারাপ ডাটাবেস ডিজাইন বা আন-নরমালাইজড টেবিল স্ট্রাকচারের কারণে ঘটে।",
      "howItWorks": "প্যারেন্ট সত্ত্বাকে আলাদা না করে চাইল্ড রেকর্ডের ভেতরেই সম্পূর্ণ প্যারেন্ট ডেটা কপি-পেস্ট করলে রিডানড্যান্সি তৈরি হয়।",
      "whenToUse": "রিলেশনাল ডেটাবেসে রিডানড্যান্সি পরিহার্য; তবে NoSQL-এ হাই-স্পিড রিডের জন্য নিয়ন্ত্রিত রিডানড্যান্সি (Denormalization) ইচ্ছাকৃতভাবে করা হয়।",
      "keyPoints": [
        "Leads to Update, Insert, and Delete anomalies.",
        "Wastes disk space and RAM cache.",
        "Solved primarily through Database Normalization (1NF to BCNF).",
        "Controlled redundancy is allowed only in Denormalized OLAP / Data Warehouses."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ❌ খারাপ ডিজাইন (Severe Redundancy):\n-- গ্রাহকের নাম ও ঠিকানা প্রতি অর্ডারে ডুপ্লিকেট হচ্ছে\nCREATE TABLE bad_orders (\n  order_id INT PRIMARY KEY,\n  customer_name VARCHAR(100),\n  customer_address VARCHAR(200),\n  product_name VARCHAR(100),\n  amount DECIMAL(10, 2)\n);\n\n-- ✅ সঠিক ডিজাইন (Normalized - No Redundancy):\nCREATE TABLE customers (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100),\n  address VARCHAR(200)\n);\n\nCREATE TABLE orders (\n  order_id SERIAL PRIMARY KEY,\n  customer_id INT REFERENCES customers(id),\n  product_name VARCHAR(100),\n  amount DECIMAL(10, 2)\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Anomalous Table",
          "description": "একই কাস্টমারের নাম-ঠিকানা বহুবার রিপিট হয়।"
        },
        {
          "step": 2,
          "title": "Normalized Tables",
          "description": "কাস্টমার আলাদা টেবিলে থাকে, অর্ডারে শুধুমাত্র রেফারেন্স আইডি থাকে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User Profile & Addresses",
        "description": "ই-কমার্সে ইউজারের প্রোফাইল তথ্য ও শিট আলাদা টেবিলে রেখে ডুপ্লিকেশন রোধ করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "অবশ্যই ৩টি 'Anomalies' (Insert, Update, Delete Anomaly) এর নাম উল্লেখ করবেন।",
      "deliveryStrategy": "সংজ্ঞা -> বাস্তব উদাহরণ -> ৩টি ক্ষতিকর অ্যানোমালি -> দূর করার উপায় (Normalization)।",
      "avoidSaying": [
        {
          "wrong": "রিডানড্যান্সি মানে শুধুই মেমোরি নষ্ট হওয়া।",
          "right": "মেমোরির চেয়ে বড় বিপদ হলো ডেটা মিসম্যাচ এবং ইনকনসিস্টেন্সি তৈরি হওয়া।"
        }
      ]
    },
    "quickRevision": [
      "Data Redundancy = ডেটার অপ্রয়োজনীয় ডুপ্লিকেশন।",
      "তৈরি করে ৩টি অ্যানোমালি: Insert, Update, Delete।",
      "Normalization-এর মাধ্যমে রিডানড্যান্সি দূর করা হয়।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain the concept of normalization in database",
        "targetId": "db-normalization-concept",
        "shortHint": "Organizing data to reduce redundancy."
      }
    ],
    "tags": [
      "Redundancy",
      "Anomalies",
      "Database Design",
      "Normalization"
    ]
  },
  {
    "id": "db-reduction-method-eliminate-redundancy",
    "slug": "db-reduction-method-eliminate-redundancy",
    "question": "Reduction method: Normalization, Eliminate data redundancy",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "ডাটাবেস থেকে ডেটা রিডানড্যান্সি দূর করার প্রধান পদ্ধতি হলো **Database Normalization**। এটি একটি বড় ও জটিল টেবিলকে যুক্তিযুক্তভাবে একাধিক ছোট ছোট টেবিলে বিভক্ত করে এবং তাদের মধ্যে **Foreign Key** রিলেশন তৈরি করে। নরমাল ফর্ম (1NF, 2NF, 3NF, BCNF) ক্রমান্বয়ে প্রয়োগ করার মাধ্যমে ডুপ্লিকেট অ্যাট্রিবিউট আলাদা টেবিলে সরিয়ে দেওয়া হয়। ফলে ডেটা শুধুমাত্র এক জায়গায় সংরক্ষিত থাকে এবং কোনো অ্যানোমালি ছাড়াই সিঙ্গেল পয়েন্ট অব আপডেটে কাজ সম্পন্ন হয়।",
    "easyExplanation": "সহজ উপমা:\nএকটি আলমারিতে যদি জামা, বই, জুতো, খাবার সব একসাথে স্তূপ করে রাখা হয়—তাহলে নোংরা হবে এবং জায়গা নষ্ট হবে। রিডাকশন মেথড হলো: জামার জন্য আলাদা ড্রয়ার (Wardrobe Table), বইয়ের জন্য বুকশেলফ (Books Table) এবং জুতোর জন্য র্যাক তৈরি করা। এখন আলমারির মূল ইনডেক্সে শুধু লিখে রাখবেন: 'বই শেলফে আছে' (Foreign Key Reference)।",
    "interviewAnswer": "The formal reduction methodology to eliminate data redundancy is Database Normalization based on Functional Dependency analysis. The process involves systematically decomposing unnormalized schemas into 1NF (atomic attributes), 2NF (eliminating partial functional dependencies), and 3NF/BCNF (eliminating transitive dependencies). By isolating repeating groups and dependent attributes into dedicated parent tables linked by foreign keys, redundancy is minimized to only the necessary linking keys.",
    "detailedExplanation": {
      "whatItIs": "ফাংশনাল ডিপেন্ডেন্সি অ্যানালাইসিসের মাধ্যমে স্কিমা ডিকম্পোজিশন প্রক্রিয়া।",
      "whyItExists": "ডুপ্লিকেট স্টোরেজ কমাতে এবং ডেটাবেসকে ম্যাথমেটিক্যালি কনসিস্টেন্ট রাখতে।",
      "howItWorks": "বড় টেবিল ভেঙে আলাদা ছোট টেবিলে নেওয়া হয় এবং তাদের আইডি দিয়ে রেফারেন্স করা হয়।",
      "whenToUse": "সব OLTP (Online Transaction Processing) রিলেশনাল ডাটাবেস ডিজাইনে।",
      "keyPoints": [
        "1NF: Atomic values, no repeating columns.",
        "2NF: No partial dependency on composite keys.",
        "3NF: No transitive dependencies (non-key attributes determining other non-key attributes).",
        "Lossless Join Decomposition: টেবিল ভাঙার পর পুনরায় সঠিকভাবে জয়েন করার নিশ্চয়তা।"
      ]
    },
    "realWorldExamples": [
      {
        "title": "University Student Course Registration",
        "description": "স্টুডেন্ট তথ্য এবং কোর্স তথ্য আলাদা টেবিলে রেখে মধ্যবর্তী একটি enrollments টেবিলে শুধুমাত্র student_id ও course_id দিয়ে রেজিস্ট্রেশন ম্যাপ করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ডিকম্পোজিশনের দুটি সোনার নিয়ম বলুন: 1. Lossless Join (ডেটা লস না হওয়া) এবং 2. Dependency Preservation।",
      "deliveryStrategy": "টেবিল স্প্লিটিং কনসেপ্ট -> ফরেন কি লিংকিং -> নরমাল ফর্মের পর্যায়ক্রমিক বাস্তবায়ন।",
      "avoidSaying": [
        {
          "wrong": "টেবিল ভাঙলে মূল ডেটা ফেরত পাওয়া যাবে না।",
          "right": "সঠিক নরম্যালাইজেশনের মাধ্যমে Lossless Join গ্যারান্টি থাকে, ফলে JOIN দিয়ে মূল ডেটা হুবহু পাওয়া যায়।"
        }
      ]
    },
    "quickRevision": [
      "Normalization হলো রিডানড্যান্সি কমানোর স্ট্যান্ডার্ড বৈজ্ঞানিক পদ্ধতি।",
      "বড় টেবিল ভেঙে ছোট ছোট টেবিলে ফরেন কি দিয়ে লিংক করা হয়।",
      "Lossless Join এবং Dependency Preservation নিশ্চিত করে।"
    ],
    "followUpQuestions": [
      {
        "question": "Describe the different normal forms",
        "targetId": "db-normal-forms-1nf-2nf-3nf-bcnf",
        "shortHint": "1NF, 2NF, 3NF, BCNF rules."
      }
    ],
    "tags": [
      "Normalization",
      "Redundancy",
      "Schema Design",
      "Functional Dependency"
    ]
  },
  {
    "id": "db-sql-vs-nosql",
    "slug": "db-sql-vs-nosql",
    "question": "Difference between SQL and NoSQL databases",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**SQL (Relational) Databases** কঠোর স্কিমাযুক্ত টু-ডাইমেনশনাল টেবিলে ডেটা রাখে, ACID ট্রানজ্যাকশন মেনে চলে, শক্তিশালী SQL দিয়ে জটিল JOIN অপারেশন চালায় এবং প্রধানত **Vertical Scaling** (Scale-up) সমর্থন করে (যেমন PostgreSQL, MySQL)। অপরদিকে, **NoSQL (Non-relational) Databases** ডাইনামিক বা স্কিমা-লেস মডেলে (JSON Document, Key-Value, Graph) ডেটা রাখে, BASE মডেল ও Eventual Consistency অনুসরণ করে, হাই-স্পিড রাইট এবং ক্লাস্টারে সহজ **Horizontal Scaling** (Sharding) সমর্থন করে (যেমন MongoDB, Redis, Cassandra)।",
    "easyExplanation": "সহজ উপমা:\n- **SQL (PostgreSQL)**: একটি সুশৃঙ্খল অ্যাকাউন্টস বুক বা এক্সেল স্প্রেডশিট। এখানে নির্দিষ্ট কলাম আগে থেকেই ঠিক করা। কোনো ঘরের ফরম্যাট ভুল হলে সে এন্ট্রি করতে দেবে না। নির্ভুল হিসাব-নিকাশ ও ব্যাংকিংয়ের জন্য আদর্শ।\n- **NoSQL (MongoDB)**: একটি ড্রপবক্স ফোল্ডার যেখানে আপনি আলাদা আলাদা JSON ফাইল রেখে দিচ্ছেন। কোনো ফাইলে ৩টি প্রোপার্টি থাকতে পারে, আবার কোনোটিতে ১০টি। দ্রুত পরিবর্তনশীল স্টার্টআপ প্রজেক্ট ও বিশাল ট্রাফিকের জন্য আদর্শ।",
    "interviewAnswer": "The fundamental differences span data models, schemas, scaling strategies, and consistency guarantees:\n1. **Data Model**: SQL uses relational tables with fixed schemas; NoSQL uses flexible models (documents, key-value pairs, wide-column, graphs).\n2. **Scaling**: SQL scales vertically by adding more compute/RAM to a single server; NoSQL is architected for native horizontal scaling (sharding across distributed commodity clusters).\n3. **Consistency vs Flexibility**: SQL prioritizes ACID consistency and complex relational joins; NoSQL embraces BASE (Basically Available, Soft state, Eventual consistency) for extreme throughput and schema agility.",
    "detailedExplanation": {
      "whatItIs": "স্ট্রাকচার্ড রিলেশনাল মডেল বনাম ডিস্ট্রিবিউটেড ফ্লেক্সিবল ডেটা মডেলের তুলনা।",
      "whyItExists": "সফটওয়্যার জগতে হাই-কনসিস্টেন্সি (ফিনটেক) বনাম হাই-স্কেলিং (সোশ্যাল মিডিয়া/IoT)-এর ভিন্ন ভিন্ন চাহিদা মেটাতে।",
      "howItWorks": "SQL ইঞ্জিন বাফার পুল ও B-Tree ইনডেক্স ব্যবহার করে; NoSQL ইঞ্জিন ডিস্ট্রিবিউটেড হ্যাশ রিং ও ডোরমেন্ট পার্টিশনিং ব্যবহার করে।",
      "whenToUse": "অর্থনৈতিক লেনদেন ও জটিল রিলেশনে SQL; রিয়েল-টাইম বিগ ডেটা ও দ্রুত স্কিমা পরিবর্তনে NoSQL।",
      "keyPoints": [
        "SQL: Schema-rigid, ACID, Vertical scale, SQL language, Joins natively optimized.",
        "NoSQL: Schema-flexible, BASE/CAP theorem, Horizontal scale, No native complex joins.",
        "SQL Examples: PostgreSQL, MySQL, SQL Server.",
        "NoSQL Examples: MongoDB, DynamoDB, Redis, Cassandra."
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Hybrid Architecture",
        "description": "অর্ডার ও পেমেন্ট ট্রানজ্যাকশনের জন্য PostgreSQL (SQL) এবং ইউজার সেশন ও প্রোডাক্ট ক্যাটালগের জন্য Redis / MongoDB (NoSQL) একসাথে ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "CAP Theorem এবং ACID vs BASE-এর পয়েন্টটি যুক্ত করে পার্থক্য বলুন।",
      "deliveryStrategy": "টেবিল ও কাঠামোগত পার্থক্য -> স্কেলিং পার্থক্য (Vertical vs Horizontal) -> ট্রানজ্যাকশন ও কনসিস্টেন্সি -> কখন কোনটি বেছে নেবেন।",
      "avoidSaying": [
        {
          "wrong": "NoSQL সবসময় SQL-এর চেয়ে দ্রুত।",
          "right": "NoSQL নির্দিষ্ট হাইপার-রাইট বা আন-স্ট্রাকচার্ড ডেটায় দ্রুত, কিন্তু জটিল রিলেশনাল কুয়েরিতে SQL অপ্টিমাইজেশনের চেয়ে এগিয়ে।"
        }
      ]
    },
    "quickRevision": [
      "SQL = রিলেশনাল, ফিক্সড স্কিমা, ACID, Vertical Scaling।",
      "NoSQL = নন-রিলেশনাল, ডাইনামিক স্কিমা, BASE, Horizontal Scaling।",
      "SQL ব্যাংকিং ও ই-কমার্সে সেরা; NoSQL বিগ ডেটা ও দ্রুত প্রোটোটাইপিংয়ে সেরা।"
    ],
    "followUpQuestions": [
      {
        "question": "Why NoSQL databases are popular today",
        "targetId": "db-why-nosql-popular-today",
        "shortHint": "Big data, agile schema, cloud scale."
      }
    ],
    "tags": [
      "SQL",
      "NoSQL",
      "Database Comparison",
      "Architecture",
      "Scaling"
    ]
  },
  {
    "id": "db-why-nosql-popular-today",
    "slug": "db-why-nosql-popular-today",
    "question": "Why NoSQL databases are popular today",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Medium",
    "shortAnswer": "আধুনিক ক্লাউড যুগে NoSQL ডাটাবেসের জনপ্রিয়তার মূল কারণগুলো হলো:\n১. **Horizontal Scalability**: ক্লাউডে কম খরচে একাধিক কমোডিটি সার্ভারে ডেটা অটোমেটিক শার্ডিং করা যায়।\n২. **Schema Flexibility (Agile Development)**: কোনো ডাটাবেস মাইগ্রেশন বা ডাউনটাইম ছাড়া যেকোনো সময় নতুন ফিল্ড যোগ করা যায়।\n৩. **High Write/Read Throughput**: কোটি কোটি রিকোয়েস্ট ডিস্ট্রিবিউটেড মেমরিতে সেকেন্ডের মধ্যে প্রসেস করতে পারে।\n৪. **Natural JSON/Object Mapping**: আধুনিক ফ্রন্টএন্ড ও ব্যাকএন্ড (Node.js/React)-এর JSON অবজেক্ট সরাসরি ডাটাবেসে সেইভ হয়ে যায়, কোনো জটিল ORM ম্যাপিং লাগে না।",
    "easyExplanation": "সহজ উপমা:\nএকটি দ্রুত বর্ধনশীল স্টার্টআপে প্রতিদিন নতুন ফিচার যোগ হচ্ছে। SQL-এ প্রতি সপ্তাহে ডাটাবেস মাইগ্রেশন স্ক্রিপ্ট চালানো এবং টেবিল লক হওয়া বড় ঝামেলার। MongoDB বা NoSQL-এ ডেভেলপাররা ফ্রন্টএন্ড থেকে নতুন ফিল্ড যোগ করে সেভ করলেই ডেটাবেস কোনো প্রশ্ন ছাড়াই তা গ্রহণ করে নেয়।",
    "interviewAnswer": "NoSQL has surged in popularity due to modern application demands that clash with traditional monolithic RDBMS architectures: 1. **Big Data & High Velocity**: Ability to ingest terabytes of semi-structured streaming data (logs, IoT, social feeds). 2. **Native Horizontal Partitioning**: Seamless auto-sharding across commodity cloud nodes without expensive enterprise hardware. 3. **Developer Velocity**: Schema-on-read flexibility aligns with agile development, eliminating complex migrations. 4. **JSON-Native Synergy**: Direct mapping to JavaScript/TypeScript object representations without ORM impedance mismatch.",
    "detailedExplanation": {
      "whatItIs": "আধুনিক ওয়েব ও মোবাইল স্কেলে NoSQL এডপশনের পেছনের ড্রাইভিং ফ্যাক্টরসমূহ।",
      "whyItExists": "বিশাল ডেটা ভলিউম এবং ডিস্ট্রিবিউটেড ক্লাউড আর্কিটেকচারের সাথে মানিয়ে নিতে।",
      "howItWorks": "লুকলি ডিস্ট্রিবিউটেড হ্যাশ ও ডকুমেন্ট পার্টিশনিং দিয়ে কাজ করে।",
      "whenToUse": "সোশ্যাল ফিড, চ্যাট অ্যাপ্লিকেশন, ক্যাটালগ ম্যানেজমেন্ট, এবং আইওটি ডেটা স্টোরেজে।",
      "keyPoints": [
        "Eliminates object-relational impedance mismatch.",
        "Optimized for cloud elasticity and microservices.",
        "Built-in replica sets for high availability across data centers."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Uber / Netflix Big Data Stream",
        "description": "কোটি কোটি রাইড স্ট্যাটাস এবং মুভি ভিউ হিস্ট্রি রিয়েল-টাইমে লগ করতে Cassandra ও MongoDB-এর মতো NoSQL ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "'Object-Relational Impedance Mismatch' টার্মটি উল্লেখ করবেন—অর্থাৎ কোডের অবজেক্ট এবং রিলেশনাল টেবিলের মধ্যকার অমিল NoSQL চমৎকারভাবে দূর করে।",
      "deliveryStrategy": "৪টি মূল কারণ (Scalability, Flexibility, Performance, Developer experience) সংক্ষেপে তুলে ধরুন।",
      "avoidSaying": [
        {
          "wrong": "NoSQL জনপ্রিয় কারণ SQL ডাটাবেস বাতিল হয়ে গেছে।",
          "right": "SQL এখনো সবচেয়ে নির্ভরযোগ্য ও জনপ্রিয়; NoSQL নির্দিষ্ট স্কেলিং ও ফ্লেক্সিবল ডেটা প্যাটার্নের ক্ষেত্রে বিকল্প হিসেবে জায়গা করে নিয়েছে।"
        }
      ]
    },
    "quickRevision": [
      "NoSQL জনপ্রিয়: Horizontal Scaling, Schema Flexibility, এবং High Write Throughput-এর কারণে।",
      "জাভাস্ক্রিপ্ট এবং JSON-এর সাথে প্রাকৃতিক মিল।",
      "ক্লাউড মাইক্রোসার্ভিসের সাথে নিখুঁত সামঞ্জস্য।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain different NoSQL types with examples",
        "targetId": "db-nosql-types-with-examples",
        "shortHint": "Key-value, document, wide-column, graph."
      }
    ],
    "tags": [
      "NoSQL",
      "Scalability",
      "Agile",
      "Microservices"
    ]
  },
  {
    "id": "db-nosql-types-with-examples",
    "slug": "db-nosql-types-with-examples",
    "question": "Explain different NoSQL types with examples",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "NoSQL ডাটাবেস মূলত ৪টি প্রধান ভাগে বিভক্ত:\n১. **Document Databases**: ডেটা JSON/BSON ফরম্যাটে ডকুমেন্টে সংরক্ষিত থাকে (যেমন **MongoDB**, CouchDB)।\n২. **Key-Value Stores**: দ্রুততম হ্যাশম্যাপ স্টাইল যেখানে প্রতি কি (Key)-এর বিপরীতে ভ্যালু থাকে (যেমন **Redis**, Amazon DynamoDB)।\n৩. **Wide-Column / Columnar Databases**: ডেটা সারি নয় বরং কলাম-ফ্যামিলি আকারে ডিস্কে থাকে, বিশাল অ্যানালিটিক্স ও টাইম-সিরিজে সেরা (যেমন **Apache Cassandra**, ScyllaDB, HBase)।\n৪. **Graph Databases**: নোড এবং এজ (Nodes & Edges) দিয়ে জটিল রিলেশনশিপ সংরক্ষণ করে (যেমন **Neo4j**, Amazon Neptune)।",
    "easyExplanation": "সহজ উপমা:\n- **Document**: একটি ফাইলে পুরো বায়োডাটা JSON হিসেবে থাকা (MongoDB)।\n- **Key-Value**: হোটেলের লকার কি ও ভেতরের জিনিস (Redis)।\n- **Columnar**: একটি বিশালাকার স্প্রেডশিটের বিলিয়ন বিলিয়ন রো থেকে এক নিমিষে গড় বা সাম বের করার স্টাইল (Cassandra)।\n- **Graph**: ফেসবুকের মিউচুয়াল ফ্রেন্ড বা ম্যাপের রাস্তা ট্র্যাকিং নেটওয়ার্ক (Neo4j)।",
    "interviewAnswer": "NoSQL databases fall into four distinct architectural paradigms based on storage format and access patterns: 1. **Document Stores** (MongoDB): Semi-structured hierarchical JSON/BSON objects, perfect for catalogs and dynamic apps. 2. **Key-Value Stores** (Redis, DynamoDB): O(1) in-memory or SSD lookups keyed by a hash string, ideal for caching and sessions. 3. **Wide-Column Stores** (Cassandra): Sparse, high-throughput tables partitioned across columns, optimized for time-series and write-heavy workloads. 4. **Graph Databases** (Neo4j): Stores interconnected entities as nodes, properties, and relationships (edges), optimized for traversing complex connected networks.",
    "detailedExplanation": {
      "whatItIs": "নন-রিলেশনাল ডাটাবেসের ৪টি মৌলিক ক্যাটাগরি।",
      "whyItExists": "স্পেসিফিক ডেটা মডেলিং চ্যালেঞ্জ সমাধান করতে (ক্যাশিং বনাম সোশ্যাল নেটওয়ার্ক ট্রাভার্সাল)।",
      "howItWorks": "ডকুমেন্ট ইনডেক্সিং, ইন-মেমোরি হ্যাশ টেবিল, এলএসএম-ট্রি কলাম ফাইল এবং ইন-মেমোরি পয়েন্টার গ্রাফ ইঞ্জিনের মাধ্যমে।",
      "whenToUse": "অ্যাপ্লিকেশনের ডেটা প্যাটার্ন অনুযায়ী নির্দিষ্ট NoSQL নির্বাচন করতে হয়।",
      "keyPoints": [
        "Document: MongoDB (Product catalog, CMS, e-commerce).",
        "Key-Value: Redis (Session store, real-time leaderboard, cache).",
        "Wide-Column: Cassandra (IoT telemetry, activity logging).",
        "Graph: Neo4j (Fraud detection, recommendation engines, social graphs)."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Twitter / X Architecture",
        "description": "ইউজারের টুইট স্টোরেজে NoSQL Document/Columnar, হোম টাইমলাইন ক্যাশিংয়ে Redis (Key-Value), এবং ফলোয়ার গ্রাফে Graph DB ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "প্রতিটি ক্যাটাগরির সাথে বাস্তব একটি করে ইউজ-কেস উল্লেখ করলে উত্তরটি অত্যন্ত পরিণত মনে হয়।",
      "deliveryStrategy": "৪টি ক্যাটাগরি নাম -> ডেটা স্ট্রাকচার -> বাস্তব ডাটাবেসের নাম -> আদর্শ ব্যবহারের ক্ষেত্র।",
      "avoidSaying": [
        {
          "wrong": "NoSQL মানেই শুধু MongoDB।",
          "right": "MongoDB হলো NoSQL-এর শুধু একটি ধরন (Document Store); এর বাইরে Key-Value, Columnar এবং Graph ডাটাবেসও NoSQL।"
        }
      ]
    },
    "quickRevision": [
      "৪ প্রকার NoSQL: Document, Key-Value, Wide-Column, Graph।",
      "Document = MongoDB; Key-Value = Redis।",
      "Wide-Column = Cassandra; Graph = Neo4j।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain ACID versus BASE properties",
        "targetId": "db-acid-vs-base",
        "shortHint": "Consistency models in SQL vs NoSQL."
      }
    ],
    "tags": [
      "NoSQL",
      "MongoDB",
      "Redis",
      "Cassandra",
      "Neo4j"
    ]
  },
  {
    "id": "db-normalization-concept",
    "slug": "db-normalization-concept",
    "question": "Explain the concept of normalization in database",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Database Normalization** হলো একটি রিলেশনাল ডাটাবেস ডিজাইন টেকনিক যার মাধ্যমে টেবিলগুলোকে গাণিতিক নিয়মে এমনভাবে বিন্যস্ত করা হয় যাতে **ডেটা রিডানড্যান্সি (ডুপ্লিকেশন) সর্বনিম্ন পর্যায়ে নেমে আসে** এবং **ডেটা ইন্টিগ্রিটি সর্বোচ্চ থাকে**। এটি Functional Dependency-র ওপর ভিত্তি করে একটি বড় ও ত্রুটিযুক্ত টেবিলকে একাধিক ছোট সুসংগঠিত টেবিলে বিভক্ত করে এবং Foreign Key দিয়ে সম্পর্ক যুক্ত রাখে। এর মাধ্যমে Insert, Update এবং Delete অ্যানোমালি সম্পূর্ণ দূর হয়।",
    "easyExplanation": "সহজ উপমা:\nএকটি শপিং ব্যাগে মাছ, দুধের প্যাকেট, শার্ট ও বই সব একসাথে রাখলে দুধ ফেটে শার্ট ও বই নষ্ট হয়ে যাবে। Normalization হলো আলাদা আলাদা জিপার ব্যাগে শার্ট, বই ও খাবার গুছিয়ে রাখা। এতে কোনো ঝামেলা হয় না এবং যেকোনো জিনিস সহজে খুঁজে পাওয়া যায়।",
    "interviewAnswer": "Database normalization is a systematic approach to decomposing tables to eliminate data redundancy and undesirable insertion, update, and deletion anomalies. Rooted in functional dependency theory developed by E.F. Codd, it organizes fields and relations to ensure that dependencies are properly enforced by database integrity constraints (primarily primary and foreign keys). Most transactional (OLTP) systems are normalized up to 3NF or BCNF.",
    "detailedExplanation": {
      "whatItIs": "রিলেশনাল ডেটাবেস স্কিমা অপটিমাইজেশন ও অ্যানোমালি দূরীকরণ পদ্ধতি।",
      "whyItExists": "ডেটা ইনকনসিস্টেন্সি, স্টোরেজ অপচয় এবং লজিক্যাল এরর প্রতিরোধ করতে।",
      "howItWorks": "টেবিলগুলোকে 1NF থেকে ধাপে ধাপে BCNF বা 5NF পর্যন্ত ডিকম্পোজ করে।",
      "whenToUse": "সব OLTP ও রিলেশনাল অ্যাপ্লিকেশনের কোর স্কিমা ডিজাইনে।",
      "keyPoints": [
        "Eliminates Insertion, Update, and Deletion anomalies.",
        "Guarantees data consistency across the entire database.",
        "Tradeoff: Increases the number of JOIN operations during read queries."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Unnormalized Form (UNF):\n-- এক কলামে একাধিক ফোন নাম্বার (Violates 1NF)\n-- | emp_id | name  | phones                  |\n-- | 1      | Rahat | 01711..., 01911...      |\n\n-- Normalized 1NF Form (Atomic values):\nCREATE TABLE employee_phones (\n  emp_id INT REFERENCES employees(id),\n  phone_number VARCHAR(20),\n  PRIMARY KEY (emp_id, phone_number)\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Atomic Values",
          "description": "প্রতিটি সেলে শুধুমাত্র একটি একক (অ্যাটোমিক) মান থাকে।"
        },
        {
          "step": 2,
          "title": "Composite Key",
          "description": "emp_id এবং phone_number মিলে ইউনিক আইডেন্টিফায়ার তৈরি করে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Hospital Management Patients & Doctors",
        "description": "রোগীর ব্যক্তিগত তথ্য, ডাক্তারের শিডিউল এবং অ্যাপয়েন্টমেন্ট হিস্ট্রি আলাদা টেবিলে নরমালাইজড করে রাখা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে ট্রেড-অফ বলুন: 'Normalization ডেটা নির্ভুল রাখে কিন্তু অতিরিক্ত JOIN-এর কারণে জটিল রিড কুয়েরি কিছুটা ধীর হতে পারে।'",
      "deliveryStrategy": "সংজ্ঞা -> মূল উদ্দেশ্য (Anomalies দূর করা) -> ট্রেড-অফ (JOIN Overhead)।",
      "avoidSaying": [
        {
          "wrong": "ডাটাবেস যত বেশি টেবিল বানাবে তত ভালো।",
          "right": "সাধারণত 3NF বা BCNF পর্যন্ত নরমালাইজ করাই পারফরম্যান্স ও ইন্টিগ্রিটির জন্য আদর্শ ভারসাম্য।"
        }
      ]
    },
    "quickRevision": [
      "Normalization = রিডানড্যান্সি ও অ্যানোমালি দূর করার বৈজ্ঞানিক প্রক্রিয়া।",
      "Functional Dependency-র ওপর ভিত্তি করে বড় টেবিলকে ছোট টেবিলে ভাঙে।",
      "OLTP অ্যাপ্লিকেশনের জন্য 3NF হলো ইন্ডাস্ট্রি স্ট্যান্ডার্ড।"
    ],
    "followUpQuestions": [
      {
        "question": "Describe the different normal forms",
        "targetId": "db-normal-forms-1nf-2nf-3nf-bcnf",
        "shortHint": "1NF, 2NF, 3NF, BCNF rules."
      }
    ],
    "tags": [
      "Normalization",
      "1NF",
      "2NF",
      "3NF",
      "BCNF",
      "Database Design"
    ]
  },
  {
    "id": "db-normal-forms-1nf-2nf-3nf-bcnf",
    "slug": "db-normal-forms-1nf-2nf-3nf-bcnf",
    "question": "Describe the different normal forms",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "রিলেশনাল ডাটাবেসের প্রধান ৪টি নরমাল ফর্ম ক্রমান্বয়ে সাজানো হলো:\n১. **1NF (First Normal Form)**: প্রতিটি কলামে **Atomic (একক/অবিভাজ্য)** মান থাকতে হবে; কোনো কমা-সেপারেটেড লিস্ট বা রিপিটিং গ্রুপ থাকা যাবে না।\n২. **2NF (Second Normal Form)**: অবশ্যই 1NF হতে হবে এবং কোনো **Partial Dependency** থাকা যাবে না (নন-প্রাইম অ্যাট্রিবিউট কম্পোজিট প্রাইমারি কি-র কোনো আংশিক অংশের ওপর নির্ভর করতে পারবে না; পুরো প্রাইমারি কি-র ওপর নির্ভর করতে হবে)।\n৩. **3NF (Third Normal Form)**: অবশ্যই 2NF হতে হবে এবং কোনো **Transitive Dependency** থাকা যাবে না (নন-কি অ্যাট্রিবিউট অন্য কোনো নন-কি অ্যাট্রিবিউটের ওপর নির্ভর করতে পারবে না; X -> Y হলে X কে Super Key হতে হবে)।\n৪. **BCNF (Boyce-Codd Normal Form)**: 3NF-এর আরও কঠোর রূপ; প্রতিটি ফাংশনাল ডিপেন্ডেন্সি `X -> Y`-তে **X-কে অবশ্যই Super Key** বা Candidate Key হতে হবে।",
    "easyExplanation": "সহজ ছন্দ ও উপমা:\n- **1NF**: প্রতিটি ঘরে একটি মাত্র মান বসবে (একাধিক ফোন নাম্বার কমা দিয়ে রাখা যাবে না)।\n- **2NF**: ছাত্রের পরীক্ষার রেজাল্ট শুধুমাত্র রোল বা বিষয় নয়, 'রোল + বিষয়' দুজনের ওপরেই পুরোপুরি নির্ভর করবে। আংশিক নির্ভরতা চলবে না।\n- **3NF**: রোল দিয়ে জিপকোড জানা যায়, আবার জিপকোড দিয়ে শহর জানা যায়। অতএব রোল দিয়ে সরাসরি শহর রাখার দরকার নেই। শহর আলাদা টেবিলে নিয়ে যান (Transitive Dependency দূর করুন)।\n- **চিটকোড প্রবাদ**: 'Every non-key attribute must provide a fact about the key, the whole key (2NF), and nothing but the key (3NF), so help me Codd!'",
    "interviewAnswer": "Database normalization progresses through hierarchical constraints:\n1. **1NF**: Requires atomicity of attribute values, unique column names, and unique rows identified by a primary key (no multi-valued arrays).\n2. **2NF**: Satisfies 1NF and eliminates Partial Functional Dependencies; all non-prime attributes must be fully functionally dependent on the entire composite primary key.\n3. **3NF**: Satisfies 2NF and eliminates Transitive Dependencies; non-key attributes cannot depend on other non-key attributes (X -> A implies X is a superkey or A is prime).\n4. **BCNF**: An extension of 3NF where for every non-trivial functional dependency X -> Y, X must strictly be a Super Key (resolves edge-case anomalies in overlapping candidate keys).",
    "detailedExplanation": {
      "whatItIs": "রিলেশনাল টেবিলের বিশুদ্ধতা যাচাইয়ের ধাপভিত্তিক স্ট্যান্ডার্ড লেভেল।",
      "whyItExists": "বিভিন্ন স্তরের ফাংশনাল ডিপেন্ডেন্সিজনিত অ্যানোমালি দূর করতে।",
      "howItWorks": "1NF -> 2NF -> 3NF -> BCNF ক্রমান্বয়ে টেবিল স্প্লিট করে নতুন রিলেশন তৈরি করে।",
      "whenToUse": "অধিকাংশ প্রোডাকশন সিস্টেমে 3NF পর্যন্ত ডিজাইন করা বাধ্যতামূলক।",
      "keyPoints": [
        "1NF = Atomic values only.",
        "2NF = Full functional dependency (No partial dependency).",
        "3NF = No transitive dependency.",
        "BCNF = For all X -> Y, X must be a super key."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Order Processing Schema",
        "description": "OrderItems টেবিলে অর্ডার আইডি ও প্রোডাক্ট আইডি কম্পোজিট কি হলে প্রোডাক্টের দাম ও নাম আলাদা Products টেবিলে রেখে 2NF ও 3NF পূরণ করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "বিখ্যাত উক্তিটি মনে রাখুন: 'The key, the whole key, and nothing but the key' (2NF = the whole key; 3NF = nothing but the key)।",
      "deliveryStrategy": "1NF থেকে BCNF পর্যন্ত ১ লাইনে সংজ্ঞা ও শর্ত বলুন -> ডিপেন্ডেন্সি প্রকার উল্লেখ করুন।",
      "avoidSaying": [
        {
          "wrong": "BCNF আর 3NF হুবহু একই জিনিস।",
          "right": "BCNF হলো 3NF-এর চেয়েও কঠোর, যেখানে overlapping candidate key-র অ্যানোমালি দূর করা হয়।"
        }
      ]
    },
    "quickRevision": [
      "1NF: Atomic values (no arrays/repeats)।",
      "2NF: No partial dependency (1NF + full key dependency)।",
      "3NF: No transitive dependency (non-key determines non-key বাদ)।",
      "BCNF: সব X -> Y-তে X অবশ্যই Super Key।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain the concept of denormalization",
        "targetId": "db-denormalization-concept",
        "shortHint": "Adding redundancy for read performance."
      }
    ],
    "tags": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF",
      "Normalization",
      "Relational Theory"
    ]
  },
  {
    "id": "db-denormalization-concept",
    "slug": "db-denormalization-concept",
    "question": "Explain the concept of denormalization",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Denormalization** হলো রিড পারফরম্যান্স বাড়ানোর উদ্দেশ্যে নরমালাইজড ডাটাবেসে **ইচ্ছাকৃত ও নিয়ন্ত্রিতভাবে ডেটা রিডানড্যান্সি (ডুপ্লিকেশন)** যুক্ত করার কৌশল। নরমালাইজড ডাটাবেসে জটিল রিপোর্ট বা ড্যাশবোর্ড তৈরি করতে ৭-৮টি টেবিল JOIN করতে হয়, যা হাই-ট্রাফিকে সার্ভারকে ধীরগতির করে ফেলে। ডিনরমালাইজেশনের মাধ্যমে প্যারেন্ট টেবিলের নির্দিষ্ট কিছু তথ্য (যেমন কাস্টমার নাম বা টোটাল অর্ডার কাউন্ট) চাইল্ড টেবিলে কপি করে রাখা হয়, যাতে কোনো JOIN ছাড়াই এক ক্লিকে ও(১) স্পিডে রেজাল্ট রিড করা যায়।",
    "easyExplanation": "সহজ উপমা:\nএকটি লাইব্রেরিতে সব বই শেলফে সাজানো (Normalized)। কিন্তু সবচেয়ে বেশি ধার নেওয়া ১০টি জনপ্রিয় বই লাইব্রেরিয়ান আলাদা করে সামনের কাউন্টারের টেবিলে রেখে দিলেন (Denormalization)। এখন ছাত্ররা এলে শেলফে না গিয়েই কাউন্টার থেকে সাথে সাথে বই পেয়ে যায়। তবে বই ছিঁড়ে গেলে বা হারালে মূল শেলফ এবং কাউন্টার উভয় জায়গায় আপডেট করতে হবে।",
    "interviewAnswer": "Denormalization is an optimization strategy where redundant data is deliberately added back into a normalized relational schema to optimize read performance and eliminate expensive SQL JOIN operations. While normalization optimizes for write integrity and storage efficiency in OLTP, denormalization optimizes for heavy read traffic in OLAP, reporting dashboards, and read-heavy web APIs. The tradeoff is increased write complexity and the need for application-level consistency mechanisms (like database triggers or background sync jobs).",
    "detailedExplanation": {
      "whatItIs": "রিড স্পিড অপটিমাইজেশনের জন্য পরিকল্পিত রিডানড্যান্সি কৌশল।",
      "whyItExists": "মিলিয়ন ট্রাফিকের রিড কুয়েরিতে একাধিক টেবিল JOIN করার হাই CPU ও I/O কস্ট কমাতে।",
      "howItWorks": "ঘন ঘন অ্যাক্সেস হওয়া অ্যাট্রিবিউট সরাসরি টার্গেট টেবিলে কপি রাখা হয়।",
      "whenToUse": "Data Warehouses (OLAP), রিপোর্টিং ড্যাশবোর্ড, এবং হাই-রিড ই-কমার্স সিস্টেমে।",
      "keyPoints": [
        "Eliminates multi-table JOIN overhead for critical endpoints.",
        "Significantly speeds up complex analytical aggregation queries.",
        "Tradeoff: Write operations (INSERT, UPDATE) become slower and require sync logic.",
        "Risks: Stale data and inconsistencies if sync fails."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Normalized (প্রতিবার JOIN করতে হয়):\n-- SELECT o.id, c.name, o.total FROM orders o JOIN customers c ON o.customer_id = c.id;\n\n-- Denormalized (Orders টেবিলেই customer_name কপি রাখা হয়েছে):\nALTER TABLE orders ADD COLUMN customer_name VARCHAR(100);\n\n-- এখন কোনো JOIN ছাড়াই সুপার ফাস্ট রিড:\nSELECT id, customer_name, total FROM orders WHERE id = 105;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Redundant Column",
          "description": "`customer_name` সরাসরি অর্ডারে ঢুকানো হলো।"
        },
        {
          "step": 2,
          "title": "Zero-Join Query",
          "description": "সিঙ্গেল টেবিল স্ক্যান করেই পুরো ডেটা পাওয়া যায়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce User Order History",
        "description": "অর্ডার দেওয়ার সময়ের প্রোডাক্টের নাম ও তৎকালীন ইউনিট প্রাইস অর্ডার হিস্ট্রিতে ডিনরমালাইজড করে রাখা হয়, যাতে ভবিষ্যতে মেইন প্রোডাক্টের দাম পরিবর্তন হলেও অতীতের অর্ডারের তথ্যে কোনো গরমিল না হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে বলুন: 'First normalize until it hurts, then denormalize until it works!' অর্থাৎ আগে 3NF পর্যন্ত ডিজাইন করুন, তারপর প্রোফাইলিং করে যেখানে স্লো সেখানে ডিনরমালাইজ করুন।",
      "deliveryStrategy": "সংজ্ঞা -> কেন প্রয়োজন (JOIN কস্ট) -> ট্রেড-অফ (স্লো রাইট) -> বাস্তব উদাহরণ।",
      "avoidSaying": [
        {
          "wrong": "ডিনরমালাইজেশন মানে খারাপ ডাটাবেস ডিজাইন।",
          "right": "ডিনরমালাইজেশন হলো একটি সচেতন ও উন্নত ইঞ্জিনিয়ারিং সিদ্ধান্ত যা হাই-স্কেল রিড পারফরম্যান্সের জন্য নেওয়া হয়।"
        }
      ]
    },
    "quickRevision": [
      "Denormalization = রিড স্পিড বাড়াতে সচেতনভাবে ডেটা ডুপ্লিকেট করা।",
      "Expensive JOIN অপারেশন কমিয়ে দেয়।",
      "OLAP ও রিপোর্টিং সিস্টেমে বহুল ব্যবহৃত।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain what data redundancy is and how normalization helps to prevent it.",
        "targetId": "db-redundancy-prevention-normalization",
        "shortHint": "Functional dependency and normalization."
      }
    ],
    "tags": [
      "Denormalization",
      "Performance",
      "JOIN",
      "OLAP",
      "Optimization"
    ]
  },
  {
    "id": "db-redundancy-prevention-normalization",
    "slug": "db-redundancy-prevention-normalization",
    "question": "Explain what data redundancy is and how normalization helps to prevent it.",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Data Redundancy** হলো ডাটাবেসে একই তথ্যের পুনরাবৃত্তি বা অনাবশ্যক ডুপ্লিকেশন। এটি ডাটাবেসের তিনটি প্রধান অ্যানোমালি (Insert, Update, Delete) সৃষ্টি করে এবং মেমোরি নষ্ট করে। **Normalization** এই সমস্যা সমাধান করে Functional Dependency-র নিয়মে বড় টেবিল ভেঙে সম্পর্কিত সত্ত্বাগুলোকে আলাদা টেবিলে বিভক্ত করার মাধ্যমে। উদাহরণস্বরূপ, কাস্টমার তথ্যকে `Customers` টেবিলে একবার রেখে `Orders` টেবিলে শুধুমাত্র `customer_id` (Foreign Key) রেফারেন্স করা হয়। ফলে মূল তথ্য এক জায়গায় থাকে এবং কোনো ডুপ্লিকেশন বা অ্যানোমালি ঘটে না।",
    "easyExplanation": "সহজ উপমা:\nআপনি যদি ৫টি ফেসবুক পোস্টে একই মন্তব্য করতে চান, আপনি পুরো বক্তব্য বারবার টাইপ না করে পোস্টের লিংক দিয়ে দিচ্ছেন। Normalization হলো সেই লিংক সিস্টেম—মূল তথ্য একবার লিখে বাকি জায়গায় শুধুমাত্র লিংক আইডি (Foreign Key) বসিয়ে ডুপ্লিকেশন বন্ধ করা।",
    "interviewAnswer": "Data redundancy is the duplicate storage of identical data points across a database system, exposing the architecture to storage bloating, CPU caching penalties, and critical mutation anomalies (inconsistent update propagation). Normalization prevents redundancy by using formal decomposition rules based on candidate keys. It isolates recurring attributes into authoritative single-source-of-truth tables and links them via lightweight foreign key pointers, ensuring that any data mutation happens in exactly one place.",
    "detailedExplanation": {
      "whatItIs": "রিডানড্যান্সি সৃষ্টি ও নরমালাইজেশনের মাধ্যমে তা মোকাবিলার সমন্বিত কনসেপ্ট।",
      "whyItExists": "ডেটাবেসকে লজিক্যালি পিওর এবং মেমোরি-অপটিমাইজড রাখতে।",
      "howItWorks": "Candidate Key ও Foreign Key কনস্ট্রেইন্ট দিয়ে রেফারেনশিয়াল ইনটিগ্রিটি বজায় রেখে টেবিল ডিকম্পোজিশন করে।",
      "whenToUse": "যেকোনো এন্টারপ্রাইজ রিলেশনাল ডেটাবেস স্কিমা আর্কিটেকচারে।",
      "keyPoints": [
        "Establishes a 'Single Source of Truth' for each entity.",
        "Completely resolves Update and Deletion anomalies.",
        "Foreign keys occupy negligible bytes compared to full text fields."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Hospital Management Billing",
        "description": "বিলিং সিস্টেমে রোগীর রোগ নির্ণয় ও টেস্টের নাম আলাদা মেটাডাটা টেবিলে আইডি দিয়ে রেখে বিল তৈরি করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "'Single Source of Truth' (SSOT) শব্দগুচ্ছটি ব্যবহার করবেন।",
      "deliveryStrategy": "রিডানড্যান্সির ক্ষতিকর দিক -> ৩টি অ্যানোমালি -> নরমালাইজেশনের মাধ্যমে SSOT তৈরি।",
      "avoidSaying": [
        {
          "wrong": "নরমালাইজেশনে সব ডুপ্লিকেট একদম শূন্য হয়ে যায়।",
          "right": "ডেটা অ্যাট্রিবিউটের ডুপ্লিকেশন শূন্য হয়, তবে টেবিলগুলোর মাঝে সংযোগ রাখতে Foreign Key হিসেবে আইডি ডুপ্লিকেট থাকে।"
        }
      ]
    },
    "quickRevision": [
      "Redundancy = ক্ষতিকর ডুপ্লিকেশন যা অ্যানোমালি তৈরি করে।",
      "Normalization টেবিল ভেঙে Single Source of Truth তৈরি করে।",
      "Foreign Key দিয়ে রেফারেন্স করে ডুপ্লিকেশন বন্ধ করে।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain ACID versus BASE properties",
        "targetId": "db-acid-vs-base",
        "shortHint": "RDBMS consistency vs NoSQL availability."
      }
    ],
    "tags": [
      "Redundancy",
      "Normalization",
      "Single Source of Truth",
      "Anomalies"
    ]
  },
  {
    "id": "db-acid-vs-base",
    "slug": "db-acid-vs-base",
    "question": "Explain ACID versus BASE properties",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**ACID** এবং **BASE** হলো ডাটাবেস সিস্টেমে ডেটা কনসিস্টেন্সি ও ট্রানজ্যাকশন নির্ভরযোগ্যতার দুটি বিপরীতধর্মী মডেল:\n- **ACID (SQL/RDBMS)**: **Atomicity, Consistency, Isolation, Durability**—এটি কঠোর তাৎক্ষণিক কনসিস্টেন্সি (Pessimistic/Immediate Consistency) নিশ্চিত করে। ব্যাংকিং ও লেনদেনের জন্য এটি আবশ্যক।\n- **BASE (NoSQL/Distributed)**: **Basically Available, Soft state, Eventual consistency**—এটি তাৎক্ষণিক কনসিস্টেন্সির চেয়ে সিস্টেমের হাই-অ্যাভেইলেবিলিটি ও পারফরম্যান্সকে অগ্রাধিকার দেয়। কিছু সময়ের ব্যবধানে ডেটা সব নোডে স্বয়ংক্রিয়ভাবে সিঙ্ক হয়ে যায় (Eventual Consistency)।",
    "easyExplanation": "সহজ উপমা:\n- **ACID (ব্যাংক ব্যালেন্স)**: আপনি এটিএম থেকে টাকা তুললে সাথে সাথে ব্যালেন্স কমবে। কোনো অবস্থাতেই এক সেকেন্ডের জন্যও ভুল ব্যালেন্স দেখাবে না (Immediate Consistency)।\n- **BASE (ফেসবুক লাইক বা ইউটিউব ভিউ)**: আপনি একটি ভিডিওতে লাইক দিলেন। আপনার পাশের বন্ধুর ফোনে সেই লাইক কাউন্ট পৌঁছাতে ২-৩ সেকেন্ড দেরি হতে পারে (Soft state), কিন্তু একটু পরেই সবার কাছে সংখ্যাটি সমান হয়ে যাবে (Eventual consistency)।",
    "interviewAnswer": "ACID and BASE represent the philosophical divide between centralized relational systems and distributed NoSQL systems under the CAP Theorem:\n1. **ACID**: Prioritizes immediate consistency and strict transactional isolation (CP or CA systems). Essential for financial ledgers, inventory, and order processing.\n2. **BASE**: Embraces optimistic eventual consistency for massive horizontal partition tolerance (AP systems):\n   - **Basically Available**: Cluster guarantees availability by serving reads from healthy nodes.\n   - **Soft State**: System state may fluctuate over time even without new inputs due to node replication delays.\n   - **Eventual Consistency**: Given sufficient time without new updates, all replica nodes will converge to identical data.",
    "detailedExplanation": {
      "whatItIs": "রিলেশনাল বনাম ডিস্ট্রিবিউটেড ডাটাবেসের কনসিস্টেন্সি প্যারাডাইম।",
      "whyItExists": "CAP Theorem-এর সীমাবদ্ধতা মেনে সিস্টেম ডিজাইনে ট্রেড-অফ নির্ধারণ করতে।",
      "howItWorks": "ACID লক ও টু-ফেজ কমিট (2PC) দিয়ে কনসিস্টেন্সি রক্ষা করে; BASE গসিপ প্রোটোকল ও ভেক্টর ক্লক দিয়ে সিঙ্ক করে।",
      "whenToUse": "লেনদেন ও কঠোর হিসাবে ACID; চ্যাট, সোশ্যাল ফিড ও গ্লোবাল কন্টেন্টে BASE।",
      "keyPoints": [
        "ACID: Pessimistic, immediate consistency, high lock contention.",
        "BASE: Optimistic, eventual consistency, zero lock contention.",
        "ACID = PostgreSQL, Oracle, MySQL InnoDB.",
        "BASE = Cassandra, DynamoDB, Couchbase."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Amazon Checkout vs Product Reviews",
        "description": "পেমেন্ট চার্জ এবং ইনভেন্টরি স্টক কমাতে ACID ট্রানজ্যাকশন ব্যবহার করা হয়, কিন্তু প্রোডাক্টের রিভিউ ও স্টার রেটিং কাউন্টে BASE (Eventual Consistency) ব্যবহার করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "CAP Theorem-এর সাথে যুক্ত করে উত্তর দিন: ACID সিস্টেম সাধারণত CP বা CA হয়, আর BASE সিস্টেম সাধারণত AP (Availability + Partition Tolerance) মেনে চলে।",
      "deliveryStrategy": "উভয়ের পূর্ণরূপ বলুন -> তাৎক্ষণিক বনাম ইভেনচুয়াল কনসিস্টেন্সি -> বাস্তব উদাহরণ দিন।",
      "avoidSaying": [
        {
          "wrong": "BASE সিস্টেমে ডেটা ভুল থাকে।",
          "right": "BASE সিস্টেমে সাময়িক সময়ের জন্য রেপ্লিকেশন ল্যাগ থাকে, কিন্তু সিস্টেম দ্রুত 'Eventual Consistency'-তে পৌঁছায়।"
        }
      ]
    },
    "quickRevision": [
      "ACID = Atomicity, Consistency, Isolation, Durability (তাৎক্ষণিক ও কঠোর কনসিস্টেন্সি)।",
      "BASE = Basically Available, Soft state, Eventual consistency (উচ্চ প্রাপ্যতা ও ইভেনচুয়াল সিঙ্ক)।",
      "ব্যাংকিংয়ে ACID; সোশ্যাল মিডিয়া ও বিগ ডেটায় BASE।"
    ],
    "followUpQuestions": [
      {
        "question": "What is an ACID property in a DBMS?",
        "targetId": "db-acid-properties-deep-dive",
        "shortHint": "Atomicity, Consistency, Isolation, Durability."
      }
    ],
    "tags": [
      "ACID",
      "BASE",
      "CAP Theorem",
      "Distributed Systems",
      "Transactions"
    ]
  },
  {
    "id": "db-acid-properties-deep-dive",
    "slug": "db-acid-properties-deep-dive",
    "question": "What is an ACID property in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**ACID** হলো ডাটাবেস ট্রানজ্যাকশনের নির্ভরযোগ্যতা নিশ্চিতকারী ৪টি মৌলিক স্তম্ভ:\n১. **Atomicity (অল-অর-নাথিং)**: ট্রানজ্যাকশনের সব কাজ সফলভাবে সম্পন্ন হতে হবে, নয়তো একটি কাজ ফেইল করলে পুরো ট্রানজ্যাকশন সম্পূর্ণ রোলব্যাক (Rollback) হবে।\n২. **Consistency (কনসিস্টেন্সি)**: ট্রানজ্যাকশন শুরুর আগে এবং শেষের পরেও ডাটাবেসের সমস্ত ভ্যালিডেশন ও কনস্ট্রেইন্ট রুলস অক্ষুণ্ন থাকবে।\n৩. **Isolation (আইসোলেশন)**: একাধিক ট্রানজ্যাকশন একই সময়ে চললেও একটির অপূর্ণাঙ্গ ডেটা অন্য ট্রানজ্যাকশনকে প্রভাবিত করবে না।\n৪. **Durability (স্থায়িত্ব)**: ট্রানজ্যাকশন একবার Commit হয়ে গেলে সার্ভার ক্র্যাশ বা পাওয়ার কাট হলেও সেই ডেটা চিরতরে সুরক্ষিত থাকবে (WAL লগিংয়ের মাধ্যমে)।",
    "easyExplanation": "সহজ উপমা (ব্যাংক ব্যালেন্স ট্রান্সফার):\nরহিম করিমকে ১০০০ টাকা পাঠাবে:\n- **Atomicity**: রহিমের অ্যাকাউন্ট থেকে ১০০০ কাটা হলো কিন্তু সার্ভার ক্র্যাশ করায় করিমের অ্যাকাউন্টে ঢুকলো না। সঙ্গে সঙ্গে রহিমের কাটা ১০০০ টাকা স্বয়ংক্রিয়ভাবে ফেরত আসবে (Rollback)।\n- **Consistency**: দুজনের অ্যাকাউন্টের মোট ব্যালেন্সের যোগফল ট্রানজ্যাকশনের আগেও যা ছিল, পরেও তাই থাকবে। কোনো কাল্পনিক টাকা তৈরি হবে না।\n- **Isolation**: এই ট্রান্সফারের মাঝমুহূর্তে রহিমের ব্যালেন্স অন্য কেউ চেক করলে সে পুরনো ব্যালেন্সই দেখবে, মাঝপথে আটকে থাকা ভুল তথ্য দেখবে না।\n- **Durability**: ট্রান্সফার সফল হওয়ার মেসেজ আসার ১ সেকেন্ড পরেই ব্যাংকের সার্ভার পুড়ে গেলেও ডেটাবেস ডিস্ক থেকে এই ১০০০ টাকার হিসাব হারাবে না।",
    "interviewAnswer": "ACID properties define the bedrock guarantees for reliable database transactions:\n1. **Atomicity**: Managed by Undo Logs / Write-Ahead Logs (WAL). Guarantees that a transaction executes as a single indivisible unit—either all operations commit, or the entire batch is rolled back upon failure.\n2. **Consistency**: Ensures that a transaction transitions the database from one valid state to another, strictly adhering to all defined invariants, schemas, triggers, and referential constraints.\n3. **Isolation**: Controlled via concurrency control mechanisms (Pessimistic 2PL locking or Optimistic MVCC). Ensures that concurrent transactions execute without interfering with one another, preventing phenomena like dirty reads, non-repeatable reads, and phantom reads.\n4. **Durability**: Managed by Redo Logs / fsync to non-volatile storage. Guarantees that once a transaction commits, its state survives system crashes, power outages, and OS failures.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেস ট্রানজ্যাকশন বিশ্বস্ততার ৪টি বৈজ্ঞানিক গ্যারান্টি।",
      "whyItExists": "হার্ডওয়্যার ফেইলিউর এবং কনকারেন্ট ইউজার সংঘর্ষের মাঝেও ডেটা লস রোধ করতে।",
      "howItWorks": "WAL (Write-Ahead Logging), MVCC (Multi-Version Concurrency Control), এবং Lock Managers দিয়ে বাস্তবায়িত হয়।",
      "whenToUse": "সব ধরনের আর্থিক, ই-কমার্স ও ক্রিটিকাল ডেটাবেস অপারেশনে।",
      "keyPoints": [
        "A = Undo Log (Rollback mechanism).",
        "C = Constraints & Schema enforcement.",
        "I = MVCC / Lock isolation levels (Read Committed, Serializable).",
        "D = Redo Log / fsync to durable storage."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ACID ট্রানজ্যাকশনের বাস্তব উদাহরণ (Bank Transfer)\nBEGIN TRANSACTION;\n\n-- ১. রহিমের থেকে ১০০০ টাকা ডেবিট\nUPDATE accounts \nSET balance = balance - 1000 \nWHERE account_id = 101 AND balance >= 1000;\n\n-- ২. করিমের একাউন্টে ১০০০ টাকা ক্রেডিট\nUPDATE accounts \nSET balance = balance + 1000 \nWHERE account_id = 102;\n\n-- কোনো এরর হলে ROLLBACK; সফল হলে COMMIT\nCOMMIT;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "BEGIN TRANSACTION",
          "description": "অ্যাটোমিক ব্লক শুরু করে।"
        },
        {
          "step": 2,
          "title": "Two-step Update",
          "description": "উভয় আপডেট সফল না হলে কোনো ব্যালেন্স পরিবর্তন হবে না।"
        },
        {
          "step": 3,
          "title": "COMMIT",
          "description": "ডিস্কে পার্মানেন্টলি সেভ করে স্থায়িত্ব (Durability) নিশ্চিত করে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Stripe Payment Gateway",
        "description": "গ্রাহকের কার্ড থেকে পেমেন্ট চার্জ করার পর ডাটাবেসে পেমেন্ট রেকর্ড ও সাবস্ক্রিপশন স্ট্যাটাস ACID ট্রানজ্যাকশনে আপডেট করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউয়ারদের প্রিয় প্রশ্ন: 'Durability কিভাবে নিশ্চিত করা হয়?' উত্তর দিন: 'WAL (Write-Ahead Logging) এবং Redo Log দিয়ে ডিস্কে fsync কল করে'।",
      "deliveryStrategy": "৪টি অক্ষরের পূর্ণরূপ বলুন -> ব্যাংক ট্রান্সফারের উপমা দিন -> ইন্টারনাল মেকানিজম (WAL, MVCC) উল্লেখ করুন।",
      "avoidSaying": [
        {
          "wrong": "Consistency মানে ডাটাবেস সবসময় রানিং থাকা।",
          "right": "Consistency মানে ট্রানজ্যাকশন ডাটাবেসের সমস্ত রুলস ও ইন্টিগ্রিটি কনস্ট্রেইন্ট বজায় রেখে স্টেট পরিবর্তন করা।"
        }
      ]
    },
    "quickRevision": [
      "A = Atomicity (সব হবে নয়তো কিছুই হবে না)।",
      "C = Consistency (সব রুলস ও কনস্ট্রেইন্ট মানবে)।",
      "I = Isolation (একের কাজ অন্যকে ব্যাহত করবে না)।",
      "D = Durability (কমিটের পর ক্র্যাশ করলেও ডেটা হারাবে না)।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a transaction in a DBMS?",
        "targetId": "db-transaction-in-dbms",
        "shortHint": "Logical unit of work."
      }
    ],
    "tags": [
      "ACID",
      "Transactions",
      "WAL",
      "MVCC",
      "Database Engine"
    ]
  },
  {
    "id": "db-erd-diagram",
    "slug": "db-erd-diagram",
    "question": "What is an Entity-Relationship Diagram (ERD)?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**ERD (Entity-Relationship Diagram)** হলো ডাটাবেসের একটি ভিজ্যুয়াল বা গ্রাফিক্যাল ব্লুপ্রিন্ট যা বাস্তব জগতের বিভিন্ন সত্ত্বা (**Entities**), তাদের বৈশিষ্ট্যসমূহ (**Attributes**), এবং তাদের মধ্যকার পারস্পরিক সংযোগ বা সম্পর্ক (**Relationships**) চিত্রায়িত করে। কোড লেখা বা ডাটাবেসে টেবিল তৈরির আগে সমগ্র সিস্টেমের স্থাপত্য সঠিকভাবে পরিকল্পনা ও অ্যানালাইসিস করতে ERD অপরিহার্য।",
    "easyExplanation": "সহজ উপমা:\nএকটি বহুতল ভবন নির্মাণের আগে আর্কিটেক্ট যেমন একটি ব্লুপ্রিন্ট বা নকশা আঁকেন—কোথায় লিফট হবে, কোথায় পিলার হবে, ঘরের সাথে বারান্দার কী সম্পর্ক হবে—ঠিক তেমনি ডাটাবেসের টেবিল তৈরির আগের স্থাপত্য নকশাই হলো ERD।",
    "interviewAnswer": "An Entity-Relationship Diagram (ERD) is a high-level conceptual data model that visually represents the logical structure of a database. It consists of three foundational components: Entities (represented as rectangles, corresponding to database tables), Attributes (ovals or property lists, representing table columns), and Relationships (diamonds or crow's foot lines, defining cardinalities such as 1:1, 1:N, and M:N). ERDs bridge domain requirements and physical relational schemas.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেসের লজিক্যাল ও কনসেপচুয়াল স্থাপত্যের গ্রাফিক্যাল চিত্র।",
      "whyItExists": "জটিল বিজনেস রিকোয়ারমেন্টকে সহজে বুঝে নিখুঁত রিলেশনাল মডেলে রূপান্তর করতে।",
      "howItWorks": "Entity, Attribute এবং Cardinality (Crow's foot notation) দিয়ে সম্পর্ক দেখায়।",
      "whenToUse": "যেকোনো নতুন ডাটাবেস ডিজাইন বা বিদ্যমান আর্কিটেকচার রিফ্যাক্টরিং করার সময়।",
      "keyPoints": [
        "Entity: Real-world object (User, Product, Order).",
        "Attribute: Properties of entity (id, email, price).",
        "Cardinality: 1-to-1, 1-to-Many, Many-to-Many relationships.",
        "Crow's Foot Notation is the modern industry standard."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Hospital Management ERD",
        "description": "ডাক্তার, রোগী, প্রেসক্রিপশন ও বিলিং সত্ত্বার মধ্যকার 1:N এবং M:N রিলেশনশিপ ম্যাপ করতে ERD ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে Cardinality (1:1, 1:N, M:N) এবং Crow's Foot Notation-এর কথা উল্লেখ করুন।",
      "deliveryStrategy": "সংজ্ঞা -> ৩টি মূল উপাদান (Entity, Attribute, Relationship) -> কার্ডিনালিটি প্রকারভেদ।",
      "avoidSaying": [
        {
          "wrong": "ERD শুধুমাত্র SQL কোড লেখার পর তৈরি করতে হয়।",
          "right": "ERD সবসময় কোড বা স্কিমা তৈরি করার পূর্বে ডিজাইন ও প্ল্যানিং ফেজে তৈরি করা হয়।"
        }
      ]
    },
    "quickRevision": [
      "ERD = ডাটাবেস আর্কিটেকচারের ভিজ্যুয়াল ব্লুপ্রিন্ট।",
      "৩টি কোর উপাদান: Entity (সত্ত্বা), Attribute (বৈশিষ্ট্য), Relationship (সম্পর্ক)।",
      "কার্ডিনালিটি: 1:1, 1:N, M:N।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain the concept of SQL types and joins",
        "targetId": "db-sql-types-and-joins",
        "shortHint": "Combining data from multiple tables."
      }
    ],
    "tags": [
      "ERD",
      "Database Design",
      "Cardinality",
      "Relationships"
    ]
  },
  {
    "id": "db-sql-types-and-joins",
    "slug": "db-sql-types-and-joins",
    "question": "Explain the concept of SQL types and joins",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**SQL Joins** হলো একটি ক্লজ যার মাধ্যমে দুই বা ততোধিক ভিন্ন ভিন্ন টেবিলের মধ্যকার কমন কলামের (সাধারণত Primary Key এবং Foreign Key) ওপর ভিত্তি করে সারিগুলোকে একত্রিত করে একক রেজাল্ট সেটে রিড করা হয়। SQL-এর মূল জয়েনগুলো হলো: **১. INNER JOIN** (শুধুমাত্র উভয় টেবিলে ম্যাচ করা রেকর্ড ফেরত দেয়), **২. LEFT JOIN** (বাম টেবিলের সব এবং ডান টেবিলের ম্যাচিং রেকর্ড ফেরত দেয়), **৩. RIGHT JOIN** (ডান টেবিলের সব রেকর্ড), **৪. FULL OUTER JOIN** (উভয় টেবিলের সব রেকর্ড), এবং **৫. CROSS JOIN** (কার্টেশিয়ান গুণফল বা সব কম্বিনেশন)।",
    "easyExplanation": "সহজ উপমা (ভেন ডায়াগ্রাম):\nদুটি বৃত্ত কল্পনা করুন—একটি Students (বৃত্ত A) এবং অন্যটি LibraryMembers (বৃত্ত B):\n- **INNER JOIN**: দুই বৃত্তের মিলনস্থল (Intersection)—যারা একই সাথে ছাত্র এবং লাইব্রেরি মেম্বার।\n- **LEFT JOIN**: পুরো বৃত্ত A (সব ছাত্র)—আর লাইব্রেরি মেম্বার থাকলে তার কার্ড নাম্বার দেখাবে, না থাকলে ফাকা (NULL) দেখাবে।\n- **FULL OUTER JOIN**: উভয় বৃত্তের ভেতরের সবাইকে (Union) নিয়ে আসবে।",
    "interviewAnswer": "SQL Joins are relational algebra operators that combine rows from two or more tables based on a shared logical predicate, typically bridging a primary key and foreign key relationship. The primary JOIN types include:\n1. **INNER JOIN**: Returns only records where the join predicate evaluates to true in both relations.\n2. **LEFT (OUTER) JOIN**: Preserves all tuples from the left relation, padding unmatched right relation attributes with NULLs.\n3. **RIGHT (OUTER) JOIN**: Preserves all tuples from the right relation.\n4. **FULL (OUTER) JOIN**: Preserves all tuples from both relations, padding unmatched sides with NULLs.\n5. **CROSS JOIN**: Produces the Cartesian product of both relations (M x N rows).",
    "detailedExplanation": {
      "whatItIs": "একাধিক নরমালাইজড টেবিল থেকে সমন্বিত তথ্য বের করার কুয়েরি মেকানিজম।",
      "whyItExists": "নরমালাইজেশনের কারণে বিভক্ত হওয়া ডেটাকে প্রয়োজন অনুযায়ী একসাথে দেখতে।",
      "howItWorks": "ডাটাবেস অপটিমাইজার ৩টি অ্যালগরিদম ব্যবহার করে: Nested Loop Join, Hash Join, অথবা Merge Join।",
      "whenToUse": "যখন একাধিক সম্পর্কিত টেবিল থেকে ফিল্ড মিলিয়ে সিঙ্গেল রেসপন্স তৈরি করতে হয়।",
      "keyPoints": [
        "INNER JOIN filters out non-matching rows from both sides.",
        "OUTER JOINs (LEFT, RIGHT, FULL) preserve non-matching rows by filling with NULL.",
        "Joining on unindexed foreign keys causes slow sequential table scans."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ১. INNER JOIN (যারা অর্ডার করেছে শুধু তাদের ডেটা)\nSELECT u.name, o.id AS order_id, o.amount\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\n-- ২. LEFT JOIN (সব ইউজার, কোনো অর্ডার না থাকলেও তাদের নাম আসবে, অর্ডারে NULL থাকবে)\nSELECT u.name, o.id AS order_id\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Join Predicate",
          "description": "`ON u.id = o.user_id` দ্বারা ম্যাচিং কন্ডিশন সেট করা হয়েছে।"
        },
        {
          "step": 2,
          "title": "Left Join Preservation",
          "description": "যেসব ইউজারের কোনো অর্ডার নেই তাদের ক্ষেত্রে `order_id` এর মান `NULL` আসবে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Customer Order Reporting",
        "description": "ইউজার প্রোফাইল এবং তাদের বিগত অর্ডারের সম্পূর্ণ তথ্য দেখতে LEFT JOIN ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "অপটিমাইজেশন টিপ বলুন: 'সবসময় নিশ্চিত করতে হবে যে JOIN-এর Foreign Key কলামের ওপর B-Tree Index তৈরি করা আছে, অন্যথায় বিলিয়ন রোতে কুয়েরি হ্যাং করবে'।",
      "deliveryStrategy": "সংজ্ঞা -> ভেন ডায়াগ্রামের ব্যাখ্যা -> ৫টি জয়েন টাইপ -> ইনডেক্সিং গুরুত্ব।",
      "avoidSaying": [
        {
          "wrong": "JOIN যত খুশি তত ব্যবহার করা উচিত কোনো সমস্যা ছাড়াই।",
          "right": "প্রতিটি JOIN-এ মেমোরি ও CPU খরচ হয়, তাই অপ্রয়োজনীয় টেবিল জয়েন করা পরিহার করা উচিত।"
        }
      ]
    },
    "quickRevision": [
      "INNER JOIN = শুধুমাত্র ম্যাচিং রেকর্ড।",
      "LEFT JOIN = বামের সব + ডানের ম্যাচিং (নন-ম্যাচে NULL)।",
      "FULL JOIN = উভয় টেবিলের সব রেকর্ড।"
    ],
    "followUpQuestions": [
      {
        "question": "Difference between inner join and outer join",
        "targetId": "db-inner-vs-outer-join",
        "shortHint": "Matched rows vs preserving unmatched rows."
      }
    ],
    "tags": [
      "SQL",
      "JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "Relational Algebra"
    ]
  },
  {
    "id": "db-inner-vs-outer-join",
    "slug": "db-inner-vs-outer-join",
    "question": "Difference between inner join and outer join",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**INNER JOIN** শুধুমাত্র সেইসব সারি (Rows) রিটার্ন করে যেগুলোর জন্য উভয় টেবিলেই `ON` কন্ডিশন শর্ত পূরণ হয়েছে; কোনো টেবিলে ম্যাচ না থাকলে সেই রেকর্ডটি বাদ পড়ে যায়। অপরদিকে, **OUTER JOIN (Left, Right, বা Full)** ম্যাচিং রেকর্ডের পাশাপাশি কোনো একটি বা উভয় টেবিলের অমিল বা নন-ম্যাচিং রেকর্ডগুলোকে রেজাল্ট সেটে সংরক্ষণ করে এবং অনুপস্থিত কলামগুলোতে **NULL** মান বসিয়ে দেয়।",
    "easyExplanation": "সহজ উপমা:\nআপনার প্রতিষ্ঠানে কর্মচারীদের তালিকা (Employees) আছে এবং গাড়ি বরাদ্দের তালিকা (CompanyCars) আছে:\n- **INNER JOIN**: শুধুমাত্র সেই কর্মচারীদের দেখাবে যাদেরকে কোনো গাড়ি বরাদ্দ দেওয়া হয়েছে (বাকি কর্মচারীরা বাদ)।\n- **LEFT OUTER JOIN**: সমস্ত কর্মচারীর তালিকা দেখাবে। যাদের গাড়ি আছে তাদের গাড়ির নাম্বার দেখাবে, আর যাদের গাড়ি নেই তাদের পাশে 'NULL' (গাড়ি নেই) লিখে দেবে।",
    "interviewAnswer": "The defining distinction is how unmatched records are handled:\n- **INNER JOIN**: Performs an intersection. It strictly discards any row from either table that does not have a matching counterpart satisfying the join condition.\n- **OUTER JOIN**: Performs an inclusive set operation. It retains unmatched rows from one or both tables (LEFT preserves left, RIGHT preserves right, FULL preserves both) and synthesizes missing attribute values with SQL `NULL` values. Outer joins are critical when looking for orphan records or analyzing incomplete relationships.",
    "detailedExplanation": {
      "whatItIs": "ম্যাচিং ডেটা ফিল্টারিং (INNER) বনাম মিসিং ডেটা প্রিজারভেশন (OUTER)-এর তুলনা।",
      "whyItExists": "ডেটা অ্যানালাইসিসে 'যাদের রেকর্ড নেই' তাদের খুঁজে বের করতে OUTER JOIN অপরিহার্য।",
      "howItWorks": "ইনার জয়েন ম্যাচ না পেলে ডিসকার্ড করে; আউটার জয়েন মেমোরিতে রো রেখে ডানদিকের প্রজেকশনে নাল বসিয়ে দেয়।",
      "whenToUse": "শুধু সক্রিয় সম্পর্ক দেখতে INNER; ইনঅ্যাক্টিভ বা আনম্যাচড রেকর্ডসহ দেখতে OUTER।",
      "keyPoints": [
        "INNER JOIN = Intersection (Never produces NULLs unless original data has NULL).",
        "OUTER JOIN = Preserves non-matches with synthetic NULL values.",
        "Finding users who never ordered: `LEFT JOIN orders ON ... WHERE orders.id IS NULL`."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Finding Inactive Customers",
        "description": "যেসব কাস্টমার সাইটে একাউন্ট খুলেছে কিন্তু কোনোদিন কোনো অর্ডার করেনি তাদেরকে মার্কেটিং ইমেইল পাঠানোর জন্য `LEFT JOIN ... WHERE order.id IS NULL` ব্যবহার করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "অ্যান্টি-প্যাটার্ন বা ইনঅ্যাক্টিভ রেকর্ড খোঁজার টেকনিকটি উল্লেখ করুন: 'LEFT JOIN সাথে WHERE right_table.id IS NULL'।",
      "deliveryStrategy": "ম্যাচিং বনাম নন-ম্যাচিং রেকর্ড হ্যান্ডলিং -> NULL ইনসার্ট হওয়া -> ব্যবহারিক উদাহরণ।",
      "avoidSaying": [
        {
          "wrong": "OUTER JOIN সবসময় ধীরগতির তাই কখনোই ব্যবহার করা উচিত নয়।",
          "right": "প্রয়োজন অনুযায়ী OUTER JOIN অত্যন্ত শক্তিশালী এবং অ্যান্টি-জয়েন হিসেবে অপরিহার্য।"
        }
      ]
    },
    "quickRevision": [
      "INNER JOIN = শুধুই ম্যাচ করা ডেটা (Strict match)।",
      "OUTER JOIN = ম্যাচিং + নন-ম্যাচিং ডেটা (NULL সহ)।",
      "অ্যাক্টিভ ডেটায় INNER, সম্পূর্ণ অডিট বা অমিল ডেটায় OUTER।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain how relationships are modeled in database",
        "targetId": "db-how-relationships-modeled",
        "shortHint": "1:1, 1:N, M:N modeling techniques."
      }
    ],
    "tags": [
      "INNER JOIN",
      "OUTER JOIN",
      "SQL",
      "Relational Queries"
    ]
  },
  {
    "id": "db-how-relationships-modeled",
    "slug": "db-how-relationships-modeled",
    "question": "Explain how relationships are modeled in database",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "রিলেশনাল ডাটাবেসে ৩ ধরনের সম্পর্ক বা রিলেশনশিপ মডেল করা হয়:\n১. **One-to-One (1:1)**: চাইল্ড টেবিলে প্যারেন্ট টেবিলের Primary Key-কে **UNIQUE Foreign Key** হিসেবে রেখে মডেল করা হয় (যেমন User -> Profile)।\n২. **One-to-Many (1:N)**: 'Many' বা চাইল্ড টেবিলে 'One' বা প্যারেন্ট টেবিলের Primary Key-কে সাধারণ **Foreign Key** হিসেবে রেখে মডেল করা হয় (যেমন User -> Orders)।\n৩. **Many-to-Many (M:N)**: সরাসরি টেবিল লিংক করা যায় না; একটি মধ্যবর্তী **Junction Table (বা Bridge Table)** তৈরি করে উভয় টেবিলের Foreign Key দিয়ে কম্পোজিট কি তৈরি করে মডেল করা হয় (যেমন Students <-> Courses-এর মাঝে `Enrollments` টেবিল)।",
    "easyExplanation": "সহজ বাস্তব উপমা:\n- **1:1**: একজন নাগরিকের ১টি পাসপোর্ট থাকে। Passport টেবিলে `citizen_id` থাকবে যা UNIQUE।\n- **1:N**: একজন মায়ের একাধিক সন্তান থাকতে পারে। প্রতিটি সন্তানের কপালের ফাইলে মায়ের নাম লেখা থাকবে (Children টেবিলে `mother_id`)।\n- **M:N**: একজন ছাত্র একাধিক বিষয়ে পড়ে, আবার একটি বিষয়ে শত শত ছাত্র পড়ে। মাঝখানে একটি রেজিস্ট্রেশন খাতা (Junction Table) রাখা হয় যেখানে প্রতি লাইনে 'ছাত্র আইডি + কোর্স আইডি' লেখা হয়।",
    "interviewAnswer": "In relational modeling, relationships represent business cardinalities enforced via foreign keys:\n1. **One-to-One (1:1)**: Implemented by placing the primary key of the parent as a Foreign Key with a `UNIQUE` constraint in the dependent table (e.g. `users` and `user_profiles`).\n2. **One-to-Many (1:N)**: Implemented by placing the parent's Primary Key as a standard Foreign Key in the child table (e.g. `customer_id` in the `orders` table).\n3. **Many-to-Many (M:N)**: Decomposed into two 1:N relationships using an associative **Junction / Bridge Table** containing composite foreign keys pointing to both parent tables (e.g. `student_courses` table holding `student_id` and `course_id`).",
    "detailedExplanation": {
      "whatItIs": "বাস্তব জীবনের সত্ত্বাগুলোর কার্ডিনালিটি রিলেশনাল স্কিমায় রূপান্তর পদ্ধতি।",
      "whyItExists": "ডেটা রিডানড্যান্সি ছাড়া বিভিন্ন এনটিটির সংযোগ অক্ষুণ্ন রাখতে।",
      "howItWorks": "Foreign Key কনস্ট্রেইন্ট এবং জাংশন টেবিল ব্যবহার করে রেফারেনশিয়াল লিংক বজায় রাখে।",
      "whenToUse": "সব ধরনের ডেটাবেস স্কিমা আর্কিটেকচার ডিজাইনে।",
      "keyPoints": [
        "1:1 = Foreign key + UNIQUE constraint.",
        "1:N = Foreign key in child table.",
        "M:N = Requires associative Junction Table with composite primary key.",
        "Indexes should always be added on all foreign key columns."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Many-to-Many (M:N) মডেলিং: Students ও Courses\nCREATE TABLE students (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100)\n);\n\nCREATE TABLE courses (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(100)\n);\n\n-- Junction / Bridge Table\nCREATE TABLE enrollments (\n  student_id INT REFERENCES students(id) ON DELETE CASCADE,\n  course_id INT REFERENCES courses(id) ON DELETE CASCADE,\n  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  PRIMARY KEY (student_id, course_id) -- Composite Primary Key\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Independent Tables",
          "description": "Students এবং Courses টেবিল সম্পূর্ণ স্বাধীন।"
        },
        {
          "step": 2,
          "title": "Associative Table",
          "description": "`enrollments` টেবিল দুজনের Foreign Key নিয়ে M:N সম্পর্ক তৈরি করেছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Products and Categories",
        "description": "একটি প্রোডাক্ট একাধিক ক্যাটাগরিতে পড়তে পারে (যেমন 'Electronics' এবং 'Gifts'), আবার একটি ক্যাটাগরিতে হাজারো প্রোডাক্ট থাকে; এটি `product_categories` জাংশন টেবিল দিয়ে মডেল করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "M:N সম্পর্কের ক্ষেত্রে 'Junction Table / Associative Table / Cross-reference Table' এই পরিভাষাগুলো ব্যবহার করবেন।",
      "deliveryStrategy": "৩টি কার্ডিনালিটি (1:1, 1:N, M:N) নাম বলুন -> প্রতিটি কিভাবে Foreign Key দিয়ে বাস্তবায়িত হয় তা ব্যাখ্যা করুন।",
      "avoidSaying": [
        {
          "wrong": "M:N সম্পর্কের জন্য একটি কলামের ভেতর কমা দিয়ে সব আইডি অ্যারে হিসেবে রেখে দেওয়া যায়।",
          "right": "কমা দিয়ে আইডি রাখা 1NF নিয়ম ভঙ্গ করে; এর জন্য সর্বদা জাংশন টেবিল ব্যবহার করা আবশ্যক।"
        }
      ]
    },
    "quickRevision": [
      "1:1 = UNIQUE Foreign Key।",
      "1:N = Child টেবিলে সাধারণ Foreign Key।",
      "M:N = Junction / Bridge Table যার প্রাইমারি কি কম্পোজিট।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain primary key and foreign key",
        "targetId": "db-primary-key-vs-foreign-key",
        "shortHint": "Unique identifier vs relational reference."
      }
    ],
    "tags": [
      "Relationships",
      "1:1",
      "1:N",
      "M:N",
      "Junction Table",
      "Foreign Key"
    ]
  },
  {
    "id": "db-primary-key-vs-foreign-key",
    "slug": "db-primary-key-vs-foreign-key",
    "question": "Explain primary key and foreign key",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Primary Key (PK)** হলো একটি টেবিলের এক বা একাধিক কলামের এমন একটি কম্বিনেশন যা প্রতিটি সারিকে (Row) সম্পূর্ণ স্বতন্ত্র ও ইউনিকভাবে চিহ্নিত করে; এটি কখনো **NULL হতে পারে না** এবং একটি টেবিলে কেবল **একটিই Primary Key** থাকতে পারে। অপরদিকে, **Foreign Key (FK)** হলো একটি টেবিলের এমন একটি কলাম যা অন্য একটি টেবিলের Primary Key-কে নির্দেশ (Reference) করে; এটি দুটি টেবিলের মধ্যে যৌক্তিক সম্পর্ক তৈরি করে এবং **Referential Integrity** নিশ্চিত করে (অর্থাৎ প্যারেন্ট টেবিলে অস্তিত্বহীন কোনো রেফারেন্স চাইল্ড টেবিলে ঢুকতে দেয় না)।",
    "easyExplanation": "সহজ উপমা:\n- **Primary Key**: আপনার জাতীয় পরিচয়পত্র (NID) বা পাসপোর্ট নাম্বার। এটি সবার জন্য একদম ইউনিক এবং কারো NID কখনোই ফাঁকা (NULL) হতে পারে না।\n- **Foreign Key**: একটি সিম কার্ড কেনার ফর্মে লেখা 'গ্রাহকের NID নাম্বার'। সিম কার্ড টেবিল জানে এই সিমের মালিক কে, কারণ এটি আসল নাগরিক টেবিলের NID-র সাথে লিঙ্ক করা। ভুয়া NID দিলে সিম রেজিস্টার হবে না (Foreign Key Constraint)।",
    "interviewAnswer": "Primary and Foreign keys are the foundational integrity constraints of relational database theory:\n- **Primary Key**: A minimal set of attributes that uniquely identifies every tuple in a relation. It enforces both an implicit `UNIQUE` constraint and a `NOT NULL` constraint. RDBMS engines automatically construct a unique clustered B-Tree index on the primary key.\n- **Foreign Key**: An attribute or collection of attributes in a referencing (child) relation that maps to the candidate/primary key of a referenced (parent) relation. It enforces **Referential Integrity**, preventing orphaned records and offering cascade options (`ON DELETE CASCADE`, `ON UPDATE RESTRICT`).",
    "detailedExplanation": {
      "whatItIs": "ইউনিক রেকর্ড আইডেন্টিফায়ার (PK) বনাম টেবিল সংযোগকারী পয়েন্টার (FK)।",
      "whyItExists": "ডুপ্লিকেট রো প্রতিরোধ করতে এবং সম্পর্কিত টেবিলগুলোর মাঝে ডেটা ইনকনসিস্টেন্সি রোধ করতে।",
      "howItWorks": "ইঞ্জিন PK-তে ইউনিক B-Tree ইনডেক্স রাখে এবং FK ইনসার্টের সময় প্যারেন্ট টেবিলে চেক চালায়।",
      "whenToUse": "সব রিলেশনাল টেবিল স্ট্রাকচারে।",
      "keyPoints": [
        "Primary Key cannot accept NULL; Foreign Key can accept NULL (unless explicitly marked NOT NULL).",
        "A table can have only ONE Primary Key; but can have MULTIPLE Foreign Keys.",
        "ON DELETE CASCADE / SET NULL governs how child records behave when parent is deleted."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- প্যারেন্ট টেবিল (Primary Key)\nCREATE TABLE authors (\n  author_id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);\n\n-- চাইল্ড টেবিল (Foreign Key)\nCREATE TABLE books (\n  book_id SERIAL PRIMARY KEY,\n  title VARCHAR(200) NOT NULL,\n  author_id INT NOT NULL,\n  CONSTRAINT fk_author FOREIGN KEY (author_id) \n    REFERENCES authors(author_id) \n    ON DELETE CASCADE -- লেখক ডিলিট হলে তার বইগুলোও মুছে যাবে\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Primary Key",
          "description": "`author_id` হলো authors টেবিলের ইউনিক আইডেন্টিফায়ার।"
        },
        {
          "step": 2,
          "title": "Foreign Key & Cascade",
          "description": "`fk_author` নিশ্চিত করে যে অস্তিত্বহীন কোনো লেখক আইডিতে বই যোগ করা অসম্ভব।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Fintech Transaction & Wallet",
        "description": "গ্রাহকের ওয়ালেট আইডি ট্রানজ্যাকশন টেবিলে Foreign Key হিসেবে থাকে, ফলে ওয়ালেট ছাড়া কোনো লেনদেন এন্ট্রি হতে পারে না।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে 'ON DELETE CASCADE' এবং 'ON DELETE RESTRICT / SET NULL'-এর পার্থক্য উল্লেখ করবেন।",
      "deliveryStrategy": "PK সংজ্ঞা ও বৈশিষ্ট্য (No NULL, Single) -> FK সংজ্ঞা ও বৈশিষ্ট্য (Referential Integrity, Multiple) -> Cascade অপশন।",
      "avoidSaying": [
        {
          "wrong": "Foreign Key কখনোই NULL হতে পারে না।",
          "right": "Foreign Key ক্ষেত্রবিশেষে NULL হতে পারে (যেমন কোনো কর্মীর এখনো কোনো ডিপার্টমেন্টে অ্যাসাইন না হওয়া)।"
        }
      ]
    },
    "quickRevision": [
      "Primary Key = ইউনিক আইডেন্টিফায়ার (কখনো NULL নয়, টেবিলে একটাই থাকে)।",
      "Foreign Key = অন্য টেবিলের PK-র রেফারেন্স (রিলেশন ও ইন্টিগ্রিটি বজায় রাখে)।",
      "FK এতিম রেকর্ড (Orphan Records) হওয়া রোধ করে।"
    ],
    "followUpQuestions": [
      {
        "question": "What is referential integrity in a DBMS?",
        "targetId": "db-referential-integrity",
        "shortHint": "Enforcing valid references between tables."
      }
    ],
    "tags": [
      "Primary Key",
      "Foreign Key",
      "Constraints",
      "Referential Integrity"
    ]
  },
  {
    "id": "db-schema-concept",
    "slug": "db-schema-concept",
    "question": "What is a schema in database?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Database Schema** হলো একটি ডাটাবেসের সম্পূর্ণ কাঠামোগত নকশা বা কঙ্কাল (Skeleton/Blueprint)। এটি ডেটাবেসে ডেটা কীভাবে সংগঠিত থাকবে, কী কী টেবিল, ভিউ ও ফিল্ড থাকবে, তাদের ডেটা টাইপ কী হবে এবং তাদের মধ্যকার রিলেশনশিপ ও কনস্ট্রেইন্টগুলো কেমন হবে তা আনুষ্ঠানিকভাবে সংজ্ঞায়িত করে। এটি মূলত তিনটি স্তরে থাকে: **Physical Schema** (ডিস্কে কীভাবে স্টোর হয়), **Logical Schema** (টেবিল ও সম্পর্কের লজিক্যাল গঠন), এবং **View Schema** (ব্যবহারকারী বা অ্যাপ্লিকেশনের জন্য দৃশ্যমান সাবসেট)।",
    "easyExplanation": "সহজ উপমা:\nএকটি নতুন বাড়ি তৈরির জন্য আর্কিটেক্টের দেওয়া নীল নকশা (Blueprints) হলো স্কিমা। নকশায় লেখা থাকে কোথায় ডাইনিং রুম হবে, মাপ কত ফুট হবে, পাইপলাইন কীভাবে যাবে। বাড়ি তৈরির পর যে মানুষরা সেখানে থাকবে তারা হলো ডেটা (Data), আর ব্লুপ্রিন্টটি হলো স্কিমা (Schema)।",
    "interviewAnswer": "A database schema is the formal structural blueprint defining the organization, relational constraints, data types, and logical entities within a DBMS. It defines the 'shape' of the database without holding actual data values. The ANSI/SPARC architecture divides schema definitions into three abstraction tiers: 1. **Physical Schema** (low-level block storage, page allocation, compression), 2. **Logical / Conceptual Schema** (tables, foreign keys, business integrity rules), and 3. **View / External Schema** (user-facing filtered projections, virtual views, security access controls).",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেসের আর্কিটেকচারাল গঠন ও ভ্যালিডেশন বিধিমালার আনুষ্ঠানিক রূপরেখা।",
      "whyItExists": "ডেটার শৃঙ্খলা, টাইপ সেফটি এবং ইন্টিগ্রিটি সুরক্ষা নিশ্চিত করতে।",
      "howItWorks": "DDL (Data Definition Language যেমন CREATE, ALTER) স্টেটমেন্টের মাধ্যমে তৈরি ও মডিফাই হয়।",
      "whenToUse": "সব ধরনের সিস্টেম ডিজাইনে ডাটাবেস ইন্সট্যান্স শুরুর পূর্বে।",
      "keyPoints": [
        "Defines table names, column data types, and relationships.",
        "Enforces domain and integrity constraints.",
        "Schema-on-write (RDBMS) requires validation before write; Schema-on-read (NoSQL) formats during read."
      ]
    },
    "realWorldExamples": [
      {
        "title": "PostgreSQL Multi-Tenancy Schemas",
        "description": "একটি সিঙ্গেল ডাটাবেসের ভেতরেই আলাদা আলাদা ক্লায়েন্ট বা অর্গানাইজেশনের জন্য পৃথক `tenant_a`, `tenant_b` স্কিমা তৈরি করে ডেটা আইসোলেট রাখা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "'Schema-on-Write' (SQL) বনাম 'Schema-on-Read' (NoSQL)-এর পার্থক্য উল্লেখ করলে ইন্টারভিউয়ার অত্যন্ত খুশি হন।",
      "deliveryStrategy": "সংজ্ঞা -> ৩টি আর্কিটেকচারাল লেভেল (Physical, Logical, View) -> বাস্তব প্রয়োগ।",
      "avoidSaying": [
        {
          "wrong": "স্কিমা মানেই ডাটাবেসের ভেতরে থাকা সমস্ত ডেটা।",
          "right": "স্কিমা হলো কেবল কাঠামো বা নকশা; ডেটা হলো সেই কাঠামোর ভেতরে রাখা তথ্য।"
        }
      ]
    },
    "quickRevision": [
      "Schema = ডাটাবেসের কাঠামোগত ব্লুপ্রিন্ট।",
      "টেবিল, ডেটা টাইপ ও কনস্ট্রেইন্ট সংজ্ঞায়িত করে।",
      "৩ স্তর: Physical, Logical, View Level।"
    ],
    "followUpQuestions": [
      {
        "question": "What are constraints?",
        "targetId": "db-database-constraints",
        "shortHint": "Rules enforced on data columns."
      }
    ],
    "tags": [
      "Schema",
      "Database Design",
      "DDL",
      "Architecture"
    ]
  },
  {
    "id": "db-database-constraints",
    "slug": "db-database-constraints",
    "question": "What are constraints?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Constraints** হলো একটি ডাটাবেসের কলাম বা টেবিলের ওপর আরোপিত নির্দিষ্ট নিয়মাবলী বা শর্তাবলী যা নির্ধারণ করে কোন ধরনের ডেটা সেখানে প্রবেশ করতে পারবে। ভুল, অসম্পূর্ণ বা অযাচিত ডেটা প্রবেশে বাধা দিয়ে ডেটার নির্ভুলতা ও নির্ভরযোগ্যতা (**Data Integrity & Accuracy**) বজায় রাখাই কনস্ট্রেইন্টের কাজ। প্রধান কনস্ট্রেইন্টগুলো হলো: **NOT NULL**, **UNIQUE**, **PRIMARY KEY**, **FOREIGN KEY**, **CHECK**, এবং **DEFAULT**।",
    "easyExplanation": "সহজ উপমা:\nএকটি ভিআইপি ক্লাবের প্রবেশদ্বারে থাকা সিকিউরিটি গার্ড হলো Constraints:\n- 'আইডি কার্ড ছাড়া ঢোকা নিষেধ' ➔ **NOT NULL**\n- 'একই টিকিট দিয়ে দুজন ঢুকতে পারবে না' ➔ **UNIQUE**\n- 'বয়স ১৮ এর কম হলে ঢোকা যাবে না' ➔ **CHECK (age >= 18)**\n- 'ক্লাবে ঢুকলেই ফ্রি ওয়েলকাম ড্রিঙ্ক দেওয়া হবে' ➔ **DEFAULT 'Welcome Drink'**",
    "interviewAnswer": "Database constraints are declarative programmatic rules enforced by the DBMS engine on table columns to ensure semantic data integrity, domain accuracy, and relational validity. Any INSERT or UPDATE operation violating a constraint is instantly aborted by the engine with a transactional error. Core constraints include: 1. `NOT NULL` (disallows missing values), 2. `UNIQUE` (prohibits duplicate values), 3. `PRIMARY KEY` (uniquely identifies tuples; NOT NULL + UNIQUE), 4. `FOREIGN KEY` (guarantees referential validity), 5. `CHECK` (evaluates arbitrary boolean domain logic), and 6. `DEFAULT` (provides a fallback literal/function).",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেস লেভেলে ডেটা ভ্যালিডেশন নিশ্চিতকারী স্বয়ংক্রিয় রুলস।",
      "whyItExists": "অ্যাপ্লিকেশন কোডের বাগ সত্ত্বেও ডাটাবেসে যেন কোনো দূষিত বা অসংলগ্ন ডেটা না ঢুকতে পারে।",
      "howItWorks": "প্রতিটি DML অপারেশনের পূর্বে ইঞ্জিন মেমোরিতে কন্ডিশন মূল্যায়ন করে এবং ভায়োলেশনে এক্সেপশন থ্রো করে।",
      "whenToUse": "সব রিলেশনাল টেবিল কলাম সংজ্ঞায়িত করার সময়।",
      "keyPoints": [
        "NOT NULL: Column cannot hold NULL.",
        "UNIQUE: All values in column must be distinct.",
        "CHECK: Custom logic (e.g. `salary > 0`, `status IN ('active', 'pending')`).",
        "DEFAULT: Automatic value when field is omitted (e.g. `created_at DEFAULT NOW()`)."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- বিভিন্ন Constraints এর সমন্বয়ে নিখুঁত টেবিল\nCREATE TABLE employees (\n  id SERIAL PRIMARY KEY,                          -- PK Constraint\n  email VARCHAR(100) UNIQUE NOT NULL,             -- UNIQUE + NOT NULL\n  age INT CHECK (age >= 18 AND age <= 65),        -- CHECK Constraint\n  status VARCHAR(20) DEFAULT 'active',            -- DEFAULT Constraint\n  salary DECIMAL(10,2) CHECK (salary > 0)         -- Domain CHECK\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Integrity Guards",
          "description": "`email` ডুপ্লিকেট বা নাল হতে পারবে না।"
        },
        {
          "step": 2,
          "title": "CHECK Validation",
          "description": "বয়স ১৮ এর কম বা ৬৫ এর বেশি দিলে ডাটাবেস স্বয়ংক্রিয়ভাবে রিকোয়েস্ট রিজেক্ট করবে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Product Stock",
        "description": "`CHECK (stock >= 0)` কনস্ট্রেইন্ট ব্যবহার করা হয় যাতে কোনো অবস্থাতেই প্রোডাক্টের ইনভেন্টরি স্টক মাইনাসে না যেতে পারে।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে বলুন: 'অ্যাপ্লিকেশন লেভেলে ভ্যালিডেশন থাকলেও ডাটাবেস লেভেলে Constraints থাকা আবশ্যক, কারণ সরাসরি স্ক্রিপ্ট বা অন্য সার্ভিসের মাধ্যমে ডেটা ঢুকলে ডাটাবেস কনস্ট্রেইন্টই শেষ প্রতিরক্ষা প্রাচীর হিসেবে কাজ করে'।",
      "deliveryStrategy": "সংজ্ঞা -> মূল ৫-৬টি কনস্ট্রেইন্টের নাম ও কাজ -> কেন অ্যাপ লেভেলের চেয়ে DB লেভেলে রাখা জরুরি।",
      "avoidSaying": [
        {
          "wrong": "ফ্রন্টএন্ডে ফর্ম ভ্যালিডেশন করলেই ডাটাবেস কনস্ট্রেইন্টের আর প্রয়োজন নেই।",
          "right": "ফ্রন্টএন্ড বা ব্যাকএন্ড বাইপাস হলেও ডাটাবেস কনস্ট্রেইন্ট ডেটাকে শতভাগ সুরক্ষিত রাখে।"
        }
      ]
    },
    "quickRevision": [
      "Constraints = ডাটাবেস লেভেলে ডেটা সুরক্ষার অলঙ্ঘনীয় নিয়ম।",
      "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT।",
      "ইনভ্যালিড ডেটা প্রবেশ আটকাতে এটি শেষ নিরাপত্তা স্তর।"
    ],
    "followUpQuestions": [
      {
        "question": "What are subqueries in SQL? Provide an example",
        "targetId": "db-sql-subqueries",
        "shortHint": "Nested queries."
      }
    ],
    "tags": [
      "Constraints",
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "Data Integrity"
    ]
  },
  {
    "id": "db-sql-subqueries",
    "slug": "db-sql-subqueries",
    "question": "What are subqueries in SQL? Provide an example",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Subquery (বা Nested Query)** হলো একটি প্রধান SQL কুয়েরির (Outer Query) ভেতরে প্রথম বন্ধনী `(...)` দিয়ে লেখা আরেকটি অভ্যন্তরীণ কুয়েরি (Inner Query)। এটি মূল কুয়েরির সিদ্ধান্ত নেওয়ার জন্য প্রয়োজনীয় অন্তর্বর্তী ডেটা তৈরি করে দেয়। সাবকুয়েরি প্রধানত দুই প্রকার:\n১. **Non-Correlated Subquery**: অভ্যন্তরীণ কুয়েরিটি বাইরের কুয়েরির ওপর নির্ভরশীল নয় এবং মাত্র একবার স্বাধীনভাবে এক্সিকিউট হয়।\n২. **Correlated Subquery**: অভ্যন্তরীণ কুয়েরিটি বাইরের কুয়েরির প্রতিটি সারির (Row) জন্য বারবার পুনঃমূল্যায়ন বা এক্সিকিউট হয়।",
    "easyExplanation": "সহজ উপমা:\nআপনি ক্লাসের সেই ছাত্রদের পুরস্কৃত করতে চান যারা 'গড় নম্বরের চেয়ে বেশি' পেয়েছে। আপনি আগে জানেন না গড় নম্বর কত! তাই:\n১. অভ্যন্তরীণ প্রশ্ন (Inner Query): 'পুরো ক্লাসের গড় নম্বর কত?' (বের হলো ৭৫)।\n২. মূল প্রশ্ন (Outer Query): 'যাদের নম্বর ৭৫ এর বেশি তাদের তালিকা দাও!'",
    "interviewAnswer": "A subquery is an inner SQL query nested within an outer `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement, or within another subquery. Subqueries are evaluated in two execution patterns:\n1. **Independent (Non-Correlated)**: The inner query executes once independently, returning a scalar, vector, or table that is used by the outer query.\n2. **Correlated**: The inner query references columns from the outer query relation (e.g. `WHERE inner.dept_id = outer.dept_id`), forcing the optimizer to evaluate the inner query for every candidate tuple in the outer relation, which can degrade performance without proper indexes.",
    "detailedExplanation": {
      "whatItIs": "মূল কুয়েরির ভেতর নেস্টেড অবস্থায় থাকা সহায়ক কুয়েরি।",
      "whyItExists": "ডায়নামিক ক্যালকুলেশন ও মাল্টি-স্টেপ ফিল্টারিং এক স্টেটমেন্টে করতে।",
      "howItWorks": "অপটিমাইজার ক্ষেত্রবিশেষে সাবকুয়েরিকে ফ্ল্যাট করে JOIN-এ রূপান্তর করে নেয়।",
      "whenToUse": "এগ্রিগেট ফিল্টারিং, অস্তিত্ব যাচাই (EXISTS/IN), এবং ভিউ তৈরিতে।",
      "keyPoints": [
        "Scalar subquery returns single value; Multi-row returns set (used with IN, ANY, ALL).",
        "Correlated subqueries have O(N*M) worst-case cost if unoptimized.",
        "Modern engines optimize many subqueries into Joins via query rewriting."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ১. Non-Correlated Subquery: গড়ের চেয়ে বেশি বেতনের কর্মী খোঁজা\nSELECT name, salary \nFROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- ২. Correlated Subquery: যে কর্মচারীদের বেতন তাদের ডিপার্টমেন্টের গড়ের চেয়ে বেশি\nSELECT e1.name, e1.department_id, e1.salary\nFROM employees e1\nWHERE e1.salary > (\n  SELECT AVG(e2.salary) \n  FROM employees e2 \n  WHERE e2.department_id = e1.department_id\n);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Scalar Evaluation",
          "description": "`AVG(salary)` বের হয়ে সিঙ্গেল মান রিটার্ন করে যা বাইরের `WHERE` ক্লজে বসে।"
        },
        {
          "step": 2,
          "title": "Correlated Lookup",
          "description": "প্রতিটি ডিপার্টমেন্টের গড় হিসাব করতে বাইরের `e1.department_id` ব্যবহার করে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Top Spending Customers",
        "description": "ই-কমার্সে যারা প্ল্যাটফর্মের গড় অর্ডার ভ্যালুর চেয়ে বেশি কেনাকাটা করেছে তাদের VIP তালিকায় অন্তর্ভুক্ত করতে সাবকুয়েরি ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Correlated বনাম Non-Correlated-এর এক্সিকিউশন মেকানিজম ব্যাখ্যা করুন এবং বলুন: 'বড় ডেটাসেটে Correlated সাবকুয়েরির চেয়ে Window Functions (`AVG() OVER (PARTITION BY ...)`) অনেক বেশি পারফরম্যান্ট'।",
      "deliveryStrategy": "সংজ্ঞা -> ২ প্রকারভেদ -> কোড উদাহরণ -> Window Function অল্টারনেটিভ।",
      "avoidSaying": [
        {
          "wrong": "সাবকুয়েরি সবসময় JOIN-এর চেয়ে ফাস্ট।",
          "right": "অধিকাংশ ক্ষেত্রে সঠিক ইনডেক্সিং থাকলে JOIN বা Window Function সাবকুয়েরির চেয়ে ভালো পারফর্ম করে।"
        }
      ]
    },
    "quickRevision": [
      "Subquery = মূল কুয়েরির ভেতরে নেস্টেড কুয়েরি।",
      "Non-Correlated = একবার এক্সিকিউট হয়।",
      "Correlated = বাইরের কুয়েরির প্রতিটি রো-র জন্য বারবার রান হয়।"
    ],
    "followUpQuestions": [
      {
        "question": "What is the difference between DELETE and TRUNCATE in SQL",
        "targetId": "db-delete-vs-truncate",
        "shortHint": "DML vs DDL, logging overhead, rollback ability."
      }
    ],
    "tags": [
      "Subquery",
      "Correlated",
      "SQL",
      "Optimization",
      "Window Functions"
    ]
  },
  {
    "id": "db-delete-vs-truncate",
    "slug": "db-delete-vs-truncate",
    "question": "What is the difference between DELETE and TRUNCATE in SQL",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**DELETE** হলো একটি **DML (Data Manipulation Language)** কমান্ড যা টেবিলের নির্দিষ্ট সারিগুলোকে `WHERE` ক্লজের শর্ত অনুযায়ী একটি একটি করে ডিলিট করে, প্রতিটি সারির জন্য পৃথক ট্রানজ্যাকশন লগ (Undo Log) তৈরি করে এবং সাধারণত অনেক ধীরগতির হলেও নিরাপদে **Rollback** করা যায়। অপরদিকে, **TRUNCATE** হলো একটি **DDL (Data Definition Language)** কমান্ড যা পুরো টেবিল খালি করে ফেলে, কোনো `WHERE` ক্লজ সমর্থন করে না, টেবিলের ডেটা পেজ ডিললোকেট করে কাজ করে বলে এটি **অত্যন্ত দ্রুতগামী**, কোনো রো-লেভেল ট্রিগার ফায়ার করে না এবং Auto-Increment কাউন্টারকে রিসেট করে দেয়।",
    "easyExplanation": "সহজ উপমা:\n- **DELETE**: একটি বাড়ির প্রতিটি রুমের আসবাবপত্র একটি একটি করে গুনে ট্রাকে তুলে নিয়ে যাওয়া। অনেক সময় লাগবে কিন্তু চাইলে মাঝপথে কাজ থামিয়ে ফিরিয়ে আনা যাবে।\n- **TRUNCATE**: পুরো বাড়ির মেঝে এক নিমিষে ধুয়ে মুছে ফেলে একদম নতুনের মতো খালি করে দেওয়া। কয়েক সেকেন্ডে কাজ শেষ, কোনো জিনিস আলাদা গোনা হয় না।",
    "interviewAnswer": "The differences span SQL command classification, execution internals, logging, and rollback mechanics:\n1. **Operation Type**: `DELETE` is DML; `TRUNCATE` is DDL.\n2. **Granularity**: `DELETE` supports `WHERE` filters to remove specific tuples; `TRUNCATE` purges all tuples indiscriminately.\n3. **Internals & Speed**: `DELETE` performs sequential row scans, writing full row before-images to the transaction log (WAL) and invoking row-level triggers. `TRUNCATE` deallocates whole storage data pages directly and logs only extent deallocations, making it orders of magnitude faster.\n4. **Identity Reset**: `TRUNCATE` resets identity/auto-increment sequence counters back to their seed values; `DELETE` preserves sequence counters.\n5. **Triggers**: `DELETE` activates row-level triggers (`ON DELETE`); `TRUNCATE` does not fire triggers.",
    "detailedExplanation": {
      "whatItIs": "সারিভিত্তিক ডিলিশন বনাম হোল-টেবিল পেজ ডিঅ্যালোকেশনের পার্থক্য।",
      "whyItExists": "লাখ লাখ রেকর্ড এক ক্লিকে সাফ করার জন্য ওভারহেড-মুক্ত DDL স্পিড নিশ্চিত করতে।",
      "howItWorks": "DELETE প্রতিটি টাপলে ডিলিট ফ্ল্যাগ সেট করে ও লগ লেখে; TRUNCATE বি-ট্রি পেজ আনলিংক করে।",
      "whenToUse": "নির্দিষ্ট ডেটা মুছতে DELETE; টেস্ট ডাটাবেস রিসেট বা ট্র্যাকিং টেবিল খালি করতে TRUNCATE।",
      "keyPoints": [
        "DELETE is slow, logs every row deletion in WAL.",
        "TRUNCATE is fast, deallocates data pages directly.",
        "TRUNCATE cannot be executed on tables referenced by active Foreign Keys.",
        "TRUNCATE resets AUTO_INCREMENT."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ১. DELETE: নির্দিষ্ট শর্তে কিছু রেকর্ড ডিলিট (ট্রিগার রান হবে, রোলব্যাক সম্ভব)\nDELETE FROM orders \nWHERE status = 'cancelled' AND created_at < NOW() - INTERVAL '1 year';\n\n-- ২. TRUNCATE: টেবিলের সমস্ত রেকর্ড মুহূর্তে সাফ (সুপার ফাস্ট)\nTRUNCATE TABLE staging_logs RESTART IDENTITY;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "DELETE Filter",
          "description": "`WHERE` দিয়ে সুনির্দিষ্ট ডেটা মোছা যায়।"
        },
        {
          "step": 2,
          "title": "TRUNCATE Reset",
          "description": "`RESTART IDENTITY` দিলে আইডি আবার ১ থেকে গণনা শুরু করে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Daily Staging Logs Cleanup",
        "description": "প্রতিদিন রাতের ETL পাইপলাইনে কোটি কোটি পুরনো স্ট্যাজিং লগ এক সেকেন্ডে ডিলিট করতে TRUNCATE ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "একটি বহুল প্রচলিত ভুল ধারণা ভাঙিয়ে দিন: অনেকে বলে 'TRUNCATE রোলব্যাক করা যায় না'। কিন্তু PostgreSQL বা আধুনিক SQL Server-এ ট্রানজ্যাকশন ব্লকের ভেতর (`BEGIN; TRUNCATE; ROLLBACK;`) চালালে TRUNCATE-ও সম্পূর্ণ রোলব্যাক হয়!",
      "deliveryStrategy": "DML vs DDL -> স্পিড ও পেজ ডিঅ্যালোকেশন মেকানিজম -> ট্রিগার ও আইডেন্টিটি রিসেট।",
      "avoidSaying": [
        {
          "wrong": "TRUNCATE কখনোই কোনো পরিস্থিতিতে রোলব্যাক করা যায় না।",
          "right": "স্ট্যান্ডার্ড ট্রানজ্যাকশন ব্লকে পোস্টগ্রেস বা এসকিউএল সার্ভারে ট্রানকেটও রোলব্যাক করা সম্ভব।"
        }
      ]
    },
    "quickRevision": [
      "DELETE = DML, শর্ত সাপেক্ষে রো ডিলিট, স্লো, ট্রিগার রান করে।",
      "TRUNCATE = DDL, পুরো টেবিল খালি করে, পেজ ডিঅ্যালোকেট করায় সুপার ফাস্ট।",
      "TRUNCATE অটো-ইনক্রিমেন্ট রিসেট করে।"
    ],
    "followUpQuestions": [
      {
        "question": "Explain what an index is and its types",
        "targetId": "db-index-and-types",
        "shortHint": "B-Tree, Hash, GIN, Clustered vs Non-clustered."
      }
    ],
    "tags": [
      "DELETE",
      "TRUNCATE",
      "DML",
      "DDL",
      "Performance"
    ]
  },
  {
    "id": "db-index-and-types",
    "slug": "db-index-and-types",
    "question": "Explain what an index is and its types",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Database Index** হলো একটি বিশেষায়িত সহায়ক ডেটা স্ট্রাকচার (প্রধানত **B-Tree** বা Balanced Tree) যা পুরো টেবিল ক্রমান্বয়ে স্ক্যান না করে লাখ লাখ রেকর্ডের মধ্য থেকে বিদ্যুৎ গতিতে ডেটা খুঁজে পেতে সাহায্য করে। এটি বইয়ের পেছনের ইনডেক্স পেজের মতো কাজ করে। প্রধান ইনডেক্স প্রকারভেদ হলো:\n১. **Clustered Index**: টেবিলের ফিজিক্যাল ডেটাকে সাজিয়ে রাখে (প্রতি টেবিলে মাত্র একটি থাকে)।\n২. **Non-Clustered (Secondary) Index**: আলাদা একটি জায়গায় কি (Key) এবং মূল রো-এর পয়েন্টার রাখে।\n৩. **Unique Index**: ডুপ্লিকেট ভ্যালু প্রতিরোধ করে।\n৪. **Composite Index**: একাধিক কলামের ওপর যৌথ ইনডেক্স।\n৫. **Specialized Indexes**: Hash Index, Partial Index, Full-Text Index, এবং GIN/GiST Index (JSONB ও জিওমেট্রির জন্য)।",
    "easyExplanation": "সহজ উপমা:\nএকটি ১০০০ পৃষ্ঠার ডিকশনারি বা এনসাইক্লোপিডিয়া কল্পনা করুন:\n- **ইনডেক্স ছাড়া (Full Table Scan)**: 'Zebra' শব্দটি খুঁজতে ১ নম্বর পৃষ্ঠা থেকে ১০০০ নম্বর পৃষ্ঠা পর্যন্ত প্রতিটি শব্দ লাইন ধরে পড়তে হবে।\n- **ইনডেক্স সহ**: বইয়ের একদম পেছনে বর্ণানুক্রমিক ইনডেক্স আছে। 'Z' বর্ণে আঙুল দিয়ে এক সেকেন্ডেই দেখে ফেললেন পৃষ্ঠা ৯৮০। সরাসরি ৯৮০ পৃষ্ঠায় চলে গেলেন!",
    "interviewAnswer": "A database index is a redundant, auxiliary data structure (most commonly implemented as an on-disk B+Tree or LSM-Tree) that enables the storage engine to locate targeted tuples in O(log N) logarithmic time rather than O(N) full table scans. Core index types include:\n1. **Clustered Index**: Dictates the physical sorting and page storage of table records on disk. Strictly one per table.\n2. **Non-Clustered (Secondary) Index**: A separate B-Tree structure storing indexed keys mapped to physical tuple locators (heap row IDs or clustered key values).\n3. **Composite (Compound) Index**: Indexes multiple attributes together following Leftmost Prefix rules.\n4. **Partial / Filtered Index**: Indexes only tuples matching a `WHERE` clause.\n5. **Specialized Engines**: Hash (O(1) point lookups), GIN (Generalized Inverted Index for JSONB/Arrays), and GiST (spatial/geometric data).",
    "detailedExplanation": {
      "whatItIs": "কুয়েরি এক্সিকিউশন দ্রুত করার জন্য B+Tree ডেটা স্ট্রাকচার।",
      "whyItExists": "মিলিয়ন রো বিশিষ্ট টেবিলে ডিস্ক I/O এবং লেটেন্সি সর্বনিম্ন রাখতে।",
      "howItWorks": "রুট নোড থেকে বাইনারি/মাল্টি-ওয়ে সার্চ করে কাঙ্ক্ষিত লিফ নোডে পৌঁছায়।",
      "whenToUse": "WHERE, JOIN, ORDER BY, এবং GROUP BY ক্লজে ব্যবহৃত ফিল্ডগুলোতে।",
      "keyPoints": [
        "B+Tree structure: Balanced height, all leaf nodes at same depth.",
        "Massively speeds up SELECT queries.",
        "Tradeoff: Slows down INSERT, UPDATE, DELETE because index trees must be balanced.",
        "Consumes additional disk space and RAM buffer pool."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ১. সাধারণ Secondary Index (B-Tree)\nCREATE INDEX idx_users_email ON users(email);\n\n-- ২. Composite Index (মাল্টিপল কলাম)\nCREATE INDEX idx_orders_customer_status ON orders(customer_id, status);\n\n-- ৩. Partial Index (শুধুমাত্র একটিভ অর্ডারে ইনডেক্স, সাইজ ছোট ও ফাস্ট)\nCREATE INDEX idx_active_orders ON orders(created_at) \nWHERE status = 'pending';",
      "explanationSteps": [
        {
          "step": 1,
          "title": "B-Tree Single Column",
          "description": "`email` দিয়ে লগইনের সময় ও(লগ এন) সময়ে সার্চ হবে।"
        },
        {
          "step": 2,
          "title": "Partial Index",
          "description": "শুধুমাত্র পেন্ডিং অর্ডারের জন্য ইনডেক্স হবে, ফলে ডিস্ক স্পেস বেঁচে যায়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Auth User Email Lookup",
        "description": "কোটি কোটি ইউজারের প্ল্যাটফর্মে লগইনের সময় ইমেইল দিয়ে ইনস্ট্যান্ট ইউজার অবজেক্ট ফেচ করতে B-Tree Index অপরিহার্য।"
      }
    ],
    "interviewTips": {
      "tip": "ট্রেড-অফটি অবশ্যই বলবেন: 'ইনডেক্স রিড ফাস্ট করে, কিন্তু রাইট (INSERT/UPDATE) স্লো করে কারণ প্রতি রাইটে ইনডেক্স ট্রি রি-ব্যালেন্স করতে হয়'।",
      "deliveryStrategy": "বইয়ের ইনডেক্সের উপমা -> B+Tree স্ট্রাকচার -> ক্লাস্টার্ড বনাম নন-ক্লাস্টার্ড -> ট্রেড-অফ।",
      "avoidSaying": [
        {
          "wrong": "টেবিলের প্রতিটি কলামের ওপরেই ইনডেক্স তৈরি করে ফেলা উচিত।",
          "right": "অপ্রয়োজনীয় ইনডেক্স তৈরি করলে ডাটাবেসের রাইট স্পিড মারাত্মক স্লো হয়ে যায় এবং মেমোরি নষ্ট হয়।"
        }
      ]
    },
    "quickRevision": [
      "Index = B+Tree স্ট্রাকচার যা ও(লগ এন) সময়ে রেকর্ড খুঁজে দেয়।",
      "Clustered (ফিজিক্যাল বিন্যাস) এবং Non-Clustered (পয়েন্টার ইনডেক্স)।",
      "রিড সুপার ফাস্ট করে, তবে অতিরিক্ত ইনডেক্স রাইট স্লো করে।"
    ],
    "followUpQuestions": [
      {
        "question": "What are the differences between a clustered and non-clustered index?",
        "targetId": "db-clustered-vs-nonclustered-index",
        "shortHint": "Physical data layout vs pointer tree."
      }
    ],
    "tags": [
      "Index",
      "B-Tree",
      "Optimization",
      "Performance",
      "Clustered Index"
    ]
  },
  {
    "id": "db-indexing-performance-optimization",
    "slug": "db-indexing-performance-optimization",
    "question": "Explain indexing and performance optimization in a database",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "ডাটাবেসে ইনডেক্সিং পারফরম্যান্স অপটিমাইজেশনের মূল কৌশলগুলো হলো:\n১. **EXPLAIN ANALYZE ব্যবহার**: কোনো কুয়েরি স্লো হলে আগে তার কোয়েরি এক্সিকিউশন প্ল্যান দেখা (Sequential Scan হচ্ছে নাকি Index Scan)।\n২. **Leftmost Prefix Rule মানা**: কম্পোজিট ইনডেক্স `(A, B)` থাকলে কুয়েরিতে কলাম `A` থাকতে হবে, অন্যথায় ইনডেক্স কাজ করবে না।\n৩. **Covering Index তৈরি**: ইনডেক্সেই কাঙ্ক্ষিত সব কলাম অন্তর্ভুক্ত করে টেবিল হিপ রিড (Table Lookup) সম্পূর্ণ এড়িয়ে যাওয়া।\n৪. **কলামের ওপর ফাংশন ব্যবহার পরিহার**: `WHERE LOWER(email) = '...'` লিখলে সাধারণ ইনডেক্স কাজ করে না; এর জন্য Function-Based Index ব্যবহার করতে হয়।\n৫. **অব্যবহৃত ইনডেক্স মুছে ফেলা**: রাইট পারফরম্যান্স বাড়াতে অপ্রয়োজনীয় ডুপ্লিকেট ইনডেক্স ড্রপ করা।",
    "easyExplanation": "সহজ উপমা:\nআপনার কাছে একটি টেলিফোন ডিরেক্টরি আছে যা 'পদবী -> নাম' (যেমন: Khan, Rahat) অনুযায়ী সাজানো। আপনি যদি শুধু পদবী 'Khan' দিয়ে খোঁজেন, সেকেন্ডেই পেয়ে যাবেন। কিন্তু আপনি যদি বলেন 'যাদের নামের শুরুতে Rahat আছে তাদের বের করো'—তাহলে পুরো ডিরেক্টরি প্রথম থেকে শেষ পর্যন্ত পাতা উল্টাতে হবে (Index失效)। এটাই Leftmost Prefix Rule।",
    "interviewAnswer": "Database query optimization via indexing revolves around reducing disk I/O and CPU evaluation cycles:\n1. **Index Scan vs Seq Scan**: Converting costly O(N) sequential page scans into O(log N) Index/Index-Only scans verified using `EXPLAIN ANALYZE`.\n2. **Covering Indexes**: Utilizing the `INCLUDE` clause so the query can be satisfied entirely from the leaf pages of the index tree without fetching heap tuples.\n3. **Leftmost Prefix Compliance**: In compound indexes `(A, B, C)`, queries filtering on `B` and `C` alone cannot leverage the B-Tree root traversal.\n4. **Avoiding Functional Index Invalidation**: Applying operators directly to columns (e.g. `WHERE YEAR(created_at) = 2024`) invalidates the B-Tree unless expression/functional indexes are explicitly defined.\n5. **High Selectivity**: Indexes yield peak efficiency on high-cardinality columns (unique values like IDs, emails) rather than low-cardinality boolean flags.",
    "detailedExplanation": {
      "whatItIs": "সিস্টেম্যাটিক ইন্ডেক্স টিউনিং ও কুয়েরি অপ্টিমাইজেশন নীতিমালা।",
      "whyItExists": "প্রোডাকশনে ডেটাবেস CPU স্পাইক এবং থ্রোটলিং দূর করতে।",
      "howItWorks": "EXPLAIN প্ল্যানারের কস্ট মডেল বিশ্লেষণ করে উপযুক্ত ইনডেক্স স্থাপন করে।",
      "whenToUse": "হাই-ট্রাফিক ব্যাকএন্ড এন্ডপয়েন্ট ও স্লো কুয়েরি ফিক্স করতে।",
      "keyPoints": [
        "Use EXPLAIN ANALYZE to observe execution cost, buffer hits, and scan types.",
        "Avoid wildcard prefix like `LIKE '%term'` which forces sequential scans.",
        "Index high-cardinality columns (unique keys, foreign keys).",
        "Maintain indexes using REINDEX/VACUUM to combat index bloat."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- ❌ ইনডেক্স নষ্ট করা কুয়েরি (Function on Column):\n-- SELECT * FROM users WHERE LOWER(username) = 'rakibul';\n\n-- ✅ সঠিক Expression Index তৈরি:\nCREATE INDEX idx_users_lower_username ON users(LOWER(username));\n\n-- ✅ Covering Index (Heap fetch ছাড়া সুপার ফাস্ট রেজাল্ট):\nCREATE INDEX idx_users_email_name ON users(email) INCLUDE (name);\n\n-- কুয়েরি অপটিমাইজেশন যাচাই\nEXPLAIN ANALYZE\nSELECT name FROM users WHERE email = 'test@example.com';",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Expression Index",
          "description": "কলামে ফাংশন থাকলেও ইনডেক্স কার্যকর থাকে।"
        },
        {
          "step": 2,
          "title": "Index Only Scan",
          "description": "`INCLUDE (name)` থাকায় টেবিল হিপ স্ক্যান না করে ইনডেক্স থেকেই ডাটা চলে আসে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Optimizing 5-second API endpoint to 20ms",
        "description": "ই-কমার্সে প্রোডাক্ট সার্চ কুয়েরিতে একটি কম্পোজিট কভারিং ইনডেক্স এবং `EXPLAIN ANALYZE` প্রয়োগ করে লেটেন্সি ৫ সেকেন্ড থেকে ২০ মিলিসেকেন্ডে নামিয়ে আনা।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে 'Cardinality' এবং 'Covering Index / Index-Only Scan' শব্দ দুটি ব্যবহার করবেন।",
      "deliveryStrategy": "EXPLAIN ANALYZE ব্যাখ্যা -> কভারিং ইনডেক্স -> Leftmost prefix -> ফাংশনাল ইনডেক্সিং।",
      "avoidSaying": [
        {
          "wrong": "যেকোনো কুয়েরিতে ইনডেক্স বসালেই স্পিড ১০০ গুণ বেড়ে যাবে।",
          "right": "লো-কার্ডিনালিটি কলামে (যেমন জেন্ডার: মেল/ফিমেল) ইনডেক্স কোনো কাজে আসে না, উল্টো রাইট স্লো করে।"
        }
      ]
    },
    "quickRevision": [
      "অপটিমাইজেশনের প্রথম ধাপ: `EXPLAIN ANALYZE` দেখা।",
      "Covering Index টেবিল স্ক্যান ছাড়াই রেজাল্ট রিটার্ন করে।",
      "কলামে ফাংশন বা ওয়াইল্ডকার্ড `%word` বসালে ইনডেক্স অকেজো হয়ে যায়।"
    ],
    "followUpQuestions": [
      {
        "question": "What are the differences between a clustered and non-clustered index?",
        "targetId": "db-clustered-vs-nonclustered-index",
        "shortHint": "Data page ordering vs index leaf pointers."
      }
    ],
    "tags": [
      "Optimization",
      "Index Tuning",
      "EXPLAIN ANALYZE",
      "Covering Index"
    ]
  },
  {
    "id": "db-clustered-vs-nonclustered-index",
    "slug": "db-clustered-vs-nonclustered-index",
    "question": "What are the differences between a clustered and non-clustered index?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Clustered Index** টেবিলের ফিজিক্যাল ডেটাকে ডিস্ক পেজে সরাসরি ইনডেক্স কি-র ক্রমানুসারে সাজিয়ে সংরক্ষণ করে; এর লিফ নোডগুলোই হলো মূল ডেটা রো। যেহেতু ফিজিক্যাল ডেটা কেবল একদিকেই সাজানো সম্ভব, তাই **একটি টেবিলে শুধুমাত্র একটিই Clustered Index থাকতে পারে** (স্বভাবতই এটি Primary Key)। অপরদিকে, **Non-Clustered (Secondary) Index** ডেটার ফিজিক্যাল বিন্যাস পরিবর্তন করে না; এটি আলাদা একটি B-Tree স্ট্রাকচারে সাজানো থাকে যার লিফ নোডে মূল ডেটার ফিজিক্যাল ঠিকানা বা ক্লাস্টার্ড কি-র **পয়েন্টার** থাকে। একটি টেবিলে **একাধিক Non-Clustered Index** থাকতে পারে।",
    "easyExplanation": "সহজ বাস্তব উপমা:\n- **Clustered Index**: একটি ইংরেজি অভিধান বা ডিকশনারি। ডিকশনারির শব্দগুলো নিজে থেকেই A থেকে Z অক্ষরে ফিজিক্যালি সাজানো। কোনো আলাদা ইনডেক্স পাতা লাগে না; বইয়ের পাতাই মূল ডেটা। (একটি বই কেবল একভাবেই সাজানো যায়)।\n- **Non-Clustered Index**: একটি পাঠ্যবইয়ের পেছনের ইনডেক্স পাতা। মূল বইয়ের অধ্যায়গুলো যেভাবে আছে সেভাবেই থাকে, পেছনের পাতায় শুধুমাত্র টপিকের নাম ও পৃষ্ঠা নম্বর (পয়েন্টার) লেখা থাকে। একটি বইয়ে বিভিন্ন বিষয়ের একাধিক ইনডেক্স পাতা থাকা সম্ভব।",
    "interviewAnswer": "The architectural distinction lies in physical on-disk data organization:\n1. **Clustered Index**: Defines the actual physical storage order of rows in data pages. The leaf nodes of the B+Tree ARE the actual data records. Consequently, only ONE clustered index can exist per table (by default, the Primary Key). Lookups do not require secondary pointer dereferencing, delivering maximum range-scan and sequential-read performance.\n2. **Non-Clustered (Secondary) Index**: A separate, auxiliary B+Tree stored independently from data pages. The leaf nodes contain the indexed key values along with row locators (either a physical tuple RID in heap-based engines like PostgreSQL, or the Clustered Key value in index-organized engines like MySQL InnoDB). A table can possess multiple non-clustered indexes.",
    "detailedExplanation": {
      "whatItIs": "ফিজিক্যাল ডেটা পেজ বিন্যাস বনাম পয়েন্টার-ভিত্তিক ইনডেক্সিংয়ের তুলনা।",
      "whyItExists": "রেঞ্জ কুয়েরি (Range scan) বনাম মাল্টি-কলাম অল্টারনেটিভ সার্চিং অপটিমাইজ করতে।",
      "howItWorks": "Clustered B-Tree leaf holds raw data; Non-clustered leaf holds pointer/RID.",
      "whenToUse": "Primary Key-তে Clustered; অন্যান্য ঘন ঘন কুয়েরি করা কলামে Non-clustered।",
      "keyPoints": [
        "Clustered: 1 per table, leaf nodes = data rows, fastest for range queries (`BETWEEN`).",
        "Non-Clustered: Multiple per table, leaf nodes = pointers, requires secondary lookup.",
        "PostgreSQL uses Heap Tables with all indexes being non-clustered by default (with a `CLUSTER` maintenance command).",
        "MySQL InnoDB strictly organizes every table as a Clustered Index (Index-Organized Table)."
      ]
    },
    "realWorldExamples": [
      {
        "title": "MySQL InnoDB Primary Key vs Foreign Key",
        "description": "MySQL-এ `id` হলো Clustered Index (সরাসরি রো ডেটা ধারণ করে) এবং `user_id` কলামের ইনডেক্স হলো Non-Clustered (যা লিফ নোডে `id` পয়েন্টার ধারণ করে)।"
      }
    ],
    "interviewTips": {
      "tip": "ইঞ্জিন ভেদে সূক্ষ্ম পার্থক্য বলুন: 'MySQL InnoDB সবসময় Clustered Index ব্যবহার করে, কিন্তু PostgreSQL ডিফল্টভাবে Heap Storage ব্যবহার করে যেখানে সব ইনডেক্সই টেকনিক্যালি Non-Clustered (Secondary)'।",
      "deliveryStrategy": "ডিকশনারি উপমা -> ফিজিক্যাল স্টোরেজ গঠন -> পয়েন্টার ডিরিফারেন্সিং -> ইঞ্জিনের আচরণ (PostgreSQL vs MySQL)।",
      "avoidSaying": [
        {
          "wrong": "একটি টেবিলে ৩-৪টি ক্লাস্টার্ড ইনডেক্স বানানো যায়।",
          "right": "ডিস্কে ডেটা সারি ফিজিক্যালি শুধুমাত্র একটি অর্ডারে থাকতে পারে, তাই ক্লাস্টার্ড ইনডেক্স কেবল একটাই হতে পারে।"
        }
      ]
    },
    "quickRevision": [
      "Clustered = ডেটা ফিজিক্যালি সাজানো (১টি টেবিলে একটাই থাকে)।",
      "Non-Clustered = পয়েন্টার সমৃদ্ধ আলাদা B-Tree (টেবিলে একাধিক থাকতে পারে)।",
      "রেঞ্জ কুয়েরিতে Clustered সেরা।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a transaction in a DBMS?",
        "targetId": "db-transaction-in-dbms",
        "shortHint": "Logical unit of work."
      }
    ],
    "tags": [
      "Clustered Index",
      "Non-Clustered Index",
      "B-Tree",
      "Storage Engine"
    ]
  },
  {
    "id": "db-transaction-in-dbms",
    "slug": "db-transaction-in-dbms",
    "question": "What is a transaction in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Transaction** হলো ডাটাবেসে সম্পাদিত একাধিক ডেটাবেস অপারেশনের (Read, Insert, Update, Delete) একটি সমন্বিত যৌক্তিক একক (**Single Logical Unit of Work**)। ট্রানজ্যাকশনের মূল দর্শন হলো: ভেতরের সবকটি অপারেশন সফলভাবে সম্পন্ন হতে হবে (**COMMIT**), নয়তো কোনো একটি অপারেশন ব্যর্থ হলে পুরো ট্রানজ্যাকশন শুরুর আগের অবস্থায় ফিরে যাবে (**ROLLBACK**)। এটি মূলত ডাটাবেসে **ACID বৈশিষ্ট্য** কার্যকর করার মূল হাতিয়ার।",
    "easyExplanation": "সহজ উপমা:\nআপনি যখন কাউকে বিকাশ বা ব্যাংকে টাকা পাঠান, দুটি ঘটনা ঘটে: আপনার একাউন্ট থেকে টাকা মাইনাস হয় এবং বন্ধুর একাউন্টে টাকা প্লাস হয়। এই দুটি ঘটনা আলাদা নয়—একটি ট্রানজ্যাকশন। যদি আপনার থেকে টাকা কেটে বন্ধুর একাউন্টে ঢোকার মুহূর্তে নেটওয়ার্ক চলে যায়, তবে টাকা মাঝপথে উবে যাবে না; ট্রানজ্যাকশন রোলব্যাক হয়ে আপনার ব্যালেন্স স্বয়ংক্রিয়ভাবে ফিরে আসবে।",
    "interviewAnswer": "A transaction in a DBMS is a sequence of one or more database operations executed as a single, atomic, indivisible logical unit of work. A transaction follows the all-or-nothing principle: either all statements are persistently committed to the database state via `COMMIT`, or all interim modifications are erased via `ROLLBACK` upon failure or error. Transactions guarantee business integrity under concurrent multi-user execution and hardware crashes by enforcing the ACID contract.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেস পরিবর্তনের অবিভাজ্য একক।",
      "whyItExists": "আংশিক পরিবর্তন রোধ করে ডেটা অখণ্ডতা রক্ষা করতে।",
      "howItWorks": "ট্রানজ্যাকশন ম্যানেজার Undo/Redo লগ এবং ট্রানজ্যাকশন আইডি (XID) ট্র্যাক করে।",
      "whenToUse": "ব্যাংকিং, ইনভেন্টরি হ্রাস, অর্ডার প্লেসমেন্ট ইত্যাদি ক্রিটিক্যাল অপারেশনে।",
      "keyPoints": [
        "Starts with BEGIN / START TRANSACTION.",
        "Ends with COMMIT (persist) or ROLLBACK (abort).",
        "Savepoints allow partial rollbacks within a larger transaction block.",
        "Enforces ACID consistency."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Transaction বাস্তব উদাহরণ (Savepoint সহ)\nBEGIN;\n\nUPDATE inventory \nSET stock = stock - 1 \nWHERE product_id = 50;\n\nSAVEPOINT inventory_updated;\n\nINSERT INTO orders (user_id, product_id, amount) \nVALUES (10, 50, 150.00);\n\n-- কোনো এরর হলে সেভপয়েন্টে রোলব্যাক করা যায়\n-- ROLLBACK TO SAVEPOINT inventory_updated;\n\nCOMMIT; -- পার্মানেন্টলি ডিস্কে রাইট",
      "explanationSteps": [
        {
          "step": 1,
          "title": "BEGIN",
          "description": "লজিক্যাল ট্রানজ্যাকশন ব্লক চালু করে।"
        },
        {
          "step": 2,
          "title": "SAVEPOINT",
          "description": "বড় ট্রানজ্যাকশনে আংশিক রোলব্যাকের জন্য চেকপয়েন্ট রাখে।"
        },
        {
          "step": 3,
          "title": "COMMIT",
          "description": "সমস্ত পরিবর্তন চূড়ান্তভাবে ডাটাবেসে লিখে দেয়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Flight Booking System",
        "description": "যাত্রীর সিট রিজার্ভেশন, পেমেন্ট গেটওয়ে প্রসেসিং এবং টিকিট ইস্যু—এই তিনটি ভিন্ন টেবিলের কাজ একটি সিঙ্গেল ট্রানজ্যাকশনে পরিচালিত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Savepoint এবং Transaction Isolation Levels (Read Committed, Repeatable Read, Serializable)-এর নাম উল্লেখ করুন।",
      "deliveryStrategy": "সংজ্ঞা (Logical unit of work) -> অল-অর-নাথিং নীতি -> ব্যাংক ট্রান্সফারের উপমা -> কোড ব্লক।",
      "avoidSaying": [
        {
          "wrong": "প্রতিটি সিঙ্গেল SELECT কুয়েরিও একটি জটিল ট্রানজ্যাকশন ব্লক খুলতে হয়।",
          "right": "ডিফল্টভাবে অধিকাংশ ডাটাবেস Auto-commit মোডে থাকে, তবে একাধিক DML পরিবর্তনের ক্ষেত্রে ম্যানুয়াল ট্রানজ্যাকশন শুরু করা হয়।"
        }
      ]
    },
    "quickRevision": [
      "Transaction = একাধিক কাজের অবিভাজ্য একক (Logical Unit of Work)।",
      "COMMIT দিয়ে সফল শেষ; ROLLBACK দিয়ে বাতিল।",
      "Savepoint দিয়ে আংশিক রোলব্যাক সম্ভব।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a deadlock in a DBMS?",
        "targetId": "db-deadlock-in-dbms",
        "shortHint": "Circular wait lock condition."
      }
    ],
    "tags": [
      "Transaction",
      "ACID",
      "COMMIT",
      "ROLLBACK",
      "Savepoint"
    ]
  },
  {
    "id": "db-deadlock-in-dbms",
    "slug": "db-deadlock-in-dbms",
    "question": "What is a deadlock in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "**Deadlock** হলো ডাটাবেসের এমন একটি অচলাবস্থা যেখানে দুই বা ততোধিক কনকারেন্ট ট্রানজ্যাকশন একে অপরের দখল করা রিসোর্সের (রো বা টেবিল লক) ওপর নির্ভর করে অনন্তকাল ধরে অপেক্ষা করতে থাকে, ফলে কোনো ট্রানজ্যাকশনই সামনে এগোতে পারে না। উদাহরণস্বরূপ: ট্রানজ্যাকশন ১ রো A লক করে রো B চাচ্ছে, আর একই সময়ে ট্রানজ্যাকশন ২ রো B লক করে রো A চাচ্ছে। আধুনিক DBMS স্বয়ংক্রিয় **Wait-For Graph** এবং **Deadlock Detector** ব্যবহার করে এই সাইকেল শনাক্ত করে এবং অপেক্ষাকৃত কম গুরুত্বপূর্ণ যেকোনো একটি ট্রানজ্যাকশনকে জোরপূর্বক **Abort/Rollback** করে অচলাবস্থা ভেঙে দেয়।",
    "easyExplanation": "সহজ উপমা (একমুখী সরু সেতু):\nএকটি সরু ব্রিজের ওপর দুই দিক থেকে দুটি গাড়ি এসে মুখোমুখি আটকে গেল। পেছনের গাড়িগুলোর জন্য কেউ পেছনে ফিরতে পারছে না, আবার সরু রাস্তার কারণে কেউ সামনেও এগোতে পারছে না। দুজনই বসে আছে যে অপরজন সরলে আমি যাব। এটাই Deadlock! ট্রাফিক পুলিশ এসে যেকোনো একটি গাড়িকে পেছনে ঠেলে দিলে অচলাবস্থা কাটে।",
    "interviewAnswer": "A deadlock is an intractable concurrency failure in which two or more transactions form a circular dependency (Wait-For Graph cycle), with each transaction waiting for an exclusive lock currently held by another transaction in the cycle. Because no transaction can proceed, a permanent impasse occurs.\nDBMS engines resolve deadlocks using automated **Deadlock Detection Threads** (polling at intervals, e.g. every 1000ms). When a cycle is detected, the engine selects a 'victim transaction' (typically the one that consumed the fewest CPU cycles or wrote the fewest log bytes), aborts it with an error (e.g. Postgres `40P01 deadlock_detected`), and rolls it back, allowing the surviving transaction to complete.",
    "detailedExplanation": {
      "whatItIs": "সার্কুলার লক ডিপেন্ডেন্সির কারণে সৃষ্ট অচলাবস্থা।",
      "whyItExists": "কনকারেন্ট ট্রানজ্যাকশনে বিভিন্ন ক্রমে রো লক করার কারণে ঘটে।",
      "howItWorks": "Wait-For Graph তৈরি করে সাইক্লিক্যাল লুপ খোঁজে এবং ভিকটিম সিলেক্ট করে কিল করে।",
      "whenToUse": "হাই কনকারেন্সি সিস্টেমে ট্রানজ্যাকশন রিট্রাই লজিক তৈরি করার সময়।",
      "keyPoints": [
        "Occurs when 4 Coffman conditions meet (Mutual exclusion, Hold and wait, No preemption, Circular wait).",
        "DBMS detector identifies cycles in the Wait-For Graph.",
        "Victim is rolled back with an error; application must implement retry logic.",
        "Prevention: Always access resources in a globally consistent order across all transactions."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Two Users Transferring Money to Each Other",
        "description": "রহিম করিমকে টাকা পাঠাচ্ছে এবং একই সেকেন্ডে করিম রহিমকে টাকা পাঠাচ্ছে; রহিম আগে নিজের রো লক করে করিমের রো চাচ্ছে, আর করিম নিজের রো লক করে রহিমের রো চাচ্ছে—এতে ডেডলক তৈরি হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ডেডলক প্রতিরোধের সেরা সমাধান বলুন: 'Always access tables and rows in the EXACT same order across all codebase queries (e.g., sorting IDs before locking)'।",
      "deliveryStrategy": "সংজ্ঞা -> মুখোমুখি গাড়ির উপমা -> Wait-For Graph মেকানিজম -> কিভাবে সমাধান/প্রতিরোধ করা যায়।",
      "avoidSaying": [
        {
          "wrong": "ডেডলক মানে পুরো ডাটাবেস চিরতরে ক্র্যাশ করে নষ্ট হয়ে যাওয়া।",
          "right": "ডেডলক হলে ডাটাবেস ক্র্যাশ করে না; ইঞ্জিন স্বয়ংক্রিয়ভাবে ভিকটিমকে রোলব্যাক করে বাকিদের কাজ চালিয়ে নেয়।"
        }
      ]
    },
    "quickRevision": [
      "Deadlock = সার্কুলার ওয়েটিংয়ের কারণে ট্রানজ্যাকশন আটকে থাকা।",
      "Wait-For Graph দিয়ে DBMS ডেডলক সাইকেল ধরে।",
      "একটি ট্রানজ্যাকশনকে 'Victim' বানিয়ে রোলব্যাক করে অচলাবস্থা কাটায়।",
      "প্রতিরোধ: সব কোডে একই অর্ডারে লক করা।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a database cursor?",
        "targetId": "db-database-cursor",
        "shortHint": "Pointer to query result rows."
      }
    ],
    "tags": [
      "Deadlock",
      "Concurrency",
      "Locking",
      "Wait-For Graph",
      "Transactions"
    ]
  },
  {
    "id": "db-database-cursor",
    "slug": "db-database-cursor",
    "question": "What is a database cursor?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "shortAnswer": "**Database Cursor** হলো ডাটাবেসে কুয়েরির মাধ্যমে ফেরত আসা একটি রেজাল্ট সেটের ওপর নির্দিষ্ট সারি নির্দেশকারী একটি কন্ট্রোল স্ট্রাকচার বা পয়েন্টার (**Pointer**)। সাধারণ SQL কুয়েরি সেট-ভিত্তিক (Set-based) উপায়ে একবারে সমস্ত ডেটা প্রসেস করে। কিন্তু যখন কোনো জটিল ব্যবসায়িক লজিকে একটি একটি করে সারি ধরে ধরে ক্রমান্বয়ে প্রসেস (Row-by-row / Iterative processing) করতে হয়, তখন কার্সর ব্যবহার করা হয়। এর ৪টি মূল ধাপ রয়েছে: **DECLARE**, **OPEN**, **FETCH**, এবং **CLOSE**।",
    "easyExplanation": "সহজ উপমা:\nআপনার মনিটরে মাউসের কার্সরের কথা ভাবুন। স্ক্রিনে অনেক লেখা আছে, কিন্তু কার্সরটি একটি নির্দিষ্ট লাইনের ওপর থাকে এবং আপনি চাকা ঘুরিয়ে লাইন ধরে ধরে নিচে নামেন। ডাটাবেস কার্সরও ঠিক তাই—লাখ লাখ রেজাল্টের ভেতর লাইন ধরে ধরে এক লাইন এক লাইন করে পড়ার যন্ত্র।",
    "interviewAnswer": "A database cursor is a temporary work area and pointer mechanism created in memory that allows traversal over the tuples of a SQL query result set one row at a time. While SQL is fundamentally declarative and set-oriented, cursors bridge the gap for procedural programming where row-by-row iteration, custom conditional transformations, or complex business logic is strictly necessary.\nThe cursor lifecycle consists of: 1. `DECLARE` (defines query), 2. `OPEN` (allocates memory and populates set), 3. `FETCH` (retrieves current row and advances pointer), and 4. `CLOSE & DEALLOCATE` (releases server resources).",
    "detailedExplanation": {
      "whatItIs": "রেজাল্ট সেটের সারি ধরে ধরে প্রসেস করার মেমোরি পয়েন্টার।",
      "whyItExists": "যখন সেট-ভিত্তিক SQL দিয়ে জটিল সিঙ্গেল-রো গণনা সম্ভব হয় না।",
      "howItWorks": "সার্ভার মেমোরিতে রেজাল্ট বাফার রাখে এবং FETCH কম্যান্ডে পয়েন্টার এক ঘর আগায়।",
      "whenToUse": "ডাটাবেস মাইগ্রেশন স্ক্রিপ্ট, লেগাসি স্টোর্ড প্রসিডিউর বা জটিল ব্যাচ প্রসেসিংয়ে।",
      "keyPoints": [
        "Row-by-row procedural processing (RBAR - 'Row By Agonizing Row').",
        "Heavy memory and lock consumption on the server.",
        "Always prefer declarative set-based SQL over cursors whenever possible."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Legacy Payroll Processing",
        "description": "প্রতিটি কর্মীর ট্যাক্স স্ল্যাব, ইনস্যুরেন্স ও ছুটির দিন ম্যানুয়ালি ক্যালকুলেট করে স্যালারি স্লিপ জেনারেট করতে স্টোর্ড প্রসিডিউরে কার্সর ব্যবহৃত হয়।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউতে অবশ্যই বলবেন: 'Cursors have high performance overhead (RBAR - Row By Agonizing Row); hence modern engineering prefers Set-Based operations or Window Functions wherever feasible'.",
      "deliveryStrategy": "সংজ্ঞা -> মাউস কার্সরের উপমা -> ৪টি লাইফসাইকেল ধাপ -> পারফরম্যান্স সতর্কতা।",
      "avoidSaying": [
        {
          "wrong": "সাধারণ SELECT কুয়েরির জায়গায় সবসময় কার্সর ব্যবহার করা ভালো প্র্যাকটিস।",
          "right": "কার্সর সার্ভারের মেমোরি ও লক ধরে রাখে, তাই খুব প্রয়োজন ছাড়া সাধারণ কুয়েরিতে কার্সর ব্যবহার করা অনুচিত।"
        }
      ]
    },
    "quickRevision": [
      "Cursor = রেজাল্ট সেটে রো-বাই-রো প্রসেস করার পয়েন্টার।",
      "ধাপ ৪টি: DECLARE -> OPEN -> FETCH -> CLOSE।",
      "মেমোরি কনজিউমিং; সম্ভব হলে Set-Based SQL ব্যবহার করাই শ্রেয়।"
    ],
    "followUpQuestions": [
      {
        "question": "What is referential integrity in a DBMS?",
        "targetId": "db-referential-integrity",
        "shortHint": "Foreign key relationships consistency."
      }
    ],
    "tags": [
      "Cursor",
      "Stored Procedure",
      "Procedural SQL",
      "Performance"
    ]
  },
  {
    "id": "db-referential-integrity",
    "slug": "db-referential-integrity",
    "question": "What is referential integrity in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "**Referential Integrity** হলো রিলেশনাল ডাটাবেসের একটি মৌলিক নিয়ম যা নিশ্চিত করে যে দুটি সম্পর্কিত টেবিলের মধ্যকার সম্পর্ক বা রেফারেন্স সর্বদা বৈধ ও সঠিক থাকবে। এর মূল সূত্র হলো: **একটি চাইল্ড টেবিলের Foreign Key কলামের মান অবশ্যই প্যারেন্ট টেবিলের Primary Key কলামে উপস্থিত থাকতে হবে (অথবা মানটি NULL হতে পারে)**। এর ফলে ডাটাবেসে কোনো অস্তিত্বহীন আইডি বা 'এতিম রেকর্ড' (Orphan Record) তৈরি হতে পারে না।",
    "easyExplanation": "সহজ উপমা:\nএকটি বিশ্ববিদ্যালয়ে ছাত্র ভর্তি না হয়ে কেউ পরীক্ষার হলে বসতে পারে না। পরীক্ষার রোল শিট হলো চাইল্ড টেবিল, আর রেজিস্টার্ড ছাত্র তালিকা হলো প্যারেন্ট টেবিল। যদি এমন কোনো ছাত্রের রোল পরীক্ষার শিটে থাকে যার নাম ভর্তি তালিকাতেই নেই—তবে Referential Integrity নষ্ট হলো। ডাটাবেস এটি কোনোভাবেই হতে দেয় না।",
    "interviewAnswer": "Referential Integrity is a core relational database constraint guaranteeing that relationships between tables remain consistently valid. Specifically, it dictates that any foreign key attribute in a referencing table must always match an existing, valid primary key value in the referenced parent table, or otherwise be explicitly NULL. It prevents the creation of orphaned child rows and blocks invalid parent record deletions via cascade configurations (`RESTRICT`, `CASCADE`, `SET NULL`).",
    "detailedExplanation": {
      "whatItIs": "ফরেন কি ও প্রাইমারি কি সম্পর্কের নির্ভরযোগ্যতার অভিভাবক।",
      "whyItExists": "এতিম বা ব্রোকেন রেফারেন্স প্রতিরোধ করে ডেটাবেসকে নির্ভুল রাখতে।",
      "howItWorks": "প্রতিটি ইনসার্ট/আপডেট/ডিলিটে ইঞ্জিন ইনডেক্স লুকআপ করে রেফারেন্স যাচাই করে।",
      "whenToUse": "সব রিলেশনাল ডাটাবেসের টেবিল লিংকিংয়ে।",
      "keyPoints": [
        "Prevents orphan records.",
        "Guarantees that links between tuples are always valid.",
        "Controls deletion behavior via ON DELETE CASCADE / RESTRICT."
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Customer Deletion",
        "description": "যদি একজন কাস্টমারের আগের অর্ডার হিস্ট্রি থাকে, তবে তাকে ডাটাবেস থেকে সরাসরি ডিলিট করতে বাধা দেওয়া (`ON DELETE RESTRICT`) যাতে হিসাবের রেফারেনশিয়াল ইন্টিগ্রিটি অক্ষুণ্ন থাকে।"
      }
    ],
    "interviewTips": {
      "tip": "'Orphan Records' শব্দটি ব্যবহার করবেন—রেফারেনশিয়াল ইন্টিগ্রিটির প্রধান কাজই হলো এতিম রেকর্ড তৈরি হতে না দেওয়া।",
      "deliveryStrategy": "সংজ্ঞা -> বিশ্ববিদ্যালয়ের উপমা -> Orphan Record দূরীকরণ -> ডিলিট রুলস (CASCADE, RESTRICT)।",
      "avoidSaying": [
        {
          "wrong": "রেফারেনশিয়াল ইন্টিগ্রিটি শুধুমাত্র জাভাস্ক্রিপ্ট/অ্যাপ্লিকেশন কোডে রক্ষা করা যায়।",
          "right": "অ্যাপ্লিকেশন কোডের বাইরে ডাটাবেস ইঞ্জিনে Foreign Key Constraint দিয়ে রেফারেনশিয়াল ইন্টিগ্রিটি শতভাগ গ্যারান্টি করা হয়।"
        }
      ]
    },
    "quickRevision": [
      "Referential Integrity = টেবিল সম্পর্কের অখণ্ডতা ও বৈধতা রক্ষা।",
      "FK-র মান অবশ্যই ভ্যালিড PK হতে হবে অথবা NULL হতে হবে।",
      "Orphan Records হওয়া প্রতিহত করে।"
    ],
    "followUpQuestions": [
      {
        "question": "What are the different phases of the DBMS query processing cycle?",
        "targetId": "db-query-processing-cycle-phases",
        "shortHint": "Parsing, Optimization, Execution."
      }
    ],
    "tags": [
      "Referential Integrity",
      "Foreign Key",
      "Data Integrity",
      "Orphan Records"
    ]
  },
  {
    "id": "db-query-processing-cycle-phases",
    "slug": "db-query-processing-cycle-phases",
    "question": "What are the different phases of the DBMS query processing cycle?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "shortAnswer": "একটি SQL কুয়েরি ক্লায়েন্ট থেকে পাঠানোর পর DBMS-এর ভেতরে মূলত ৩টি প্রধান ধাপে প্রসেস হয়ে চূড়ান্ত রেজাল্ট দেয়:\n১. **Parsing & Translation**: কুয়েরির সিনট্যাক্স ও সেমান্টিক ভ্যালিডেশন চেক করে এবং রিলেশনাল অ্যালজেব্রা এক্সপ্রেশন ট্রি (Parse Tree)-তে রূপান্তর করে।\n২. **Query Optimization**: সবচেয়ে গুরুত্বপূর্ণ ধাপ! **Cost-Based Optimizer (CBO)** বিভিন্ন বিকল্প এক্সিকিউশন প্ল্যান (ইনডেক্স স্ক্যান, হ্যাশ জয়েন ইত্যাদি) মূল্যায়ন করে সর্বনিম্ন CPU ও I/O খরচের **Optimal Execution Plan** নির্বাচন করে।\n৩. **Query Execution**: এক্সিকিউশন ইঞ্জিন প্ল্যানটি গ্রহণ করে স্টোরেজ ইঞ্জিন ও বাফার পুল থেকে ডেটা পেজ ফেচ করে চূড়ান্ত রেজাল্ট ক্লায়েন্টকে ফেরত পাঠায়।",
    "easyExplanation": "সহজ উপমা (গুগল ম্যাপে গন্তব্য খোঁজা):\n- **Parsing**: আপনি গন্তব্যের নাম লিখলেন। গুগল ম্যাপ বানান ঠিক আছে কিনা এবং জায়গাটি সত্যিই পৃথিবীতে আছে কিনা দেখল।\n- **Optimization**: গন্তব্যে যাওয়ার ৫টি ভিন্ন রাস্তা আছে (ফ্লাইওভার, গলি, হাইওয়ে)। গুগল ম্যাপ কোন রাস্তায় ট্রাফিক কম ও কম তেল খরচ হবে তা হিসাব করে সেরা রুটটি বের করল (Execution Plan)।\n- **Execution**: আপনি সেই সেরা রুট দিয়ে গাড়ি চালিয়ে গন্তব্যে পৌঁছালেন!",
    "interviewAnswer": "The DBMS Query Processing Pipeline consists of three discrete phases:\n1. **Parsing and Translation**: The SQL parser validates lexical syntax, checks table and column existence against the system catalog, validates user permissions, and translates the raw SQL text into an internal Relational Algebra Parse Tree.\n2. **Optimization (Cost-Based Optimizer / CBO)**: The heart of the engine. The optimizer generates multiple candidate physical execution plans, calculates estimated disk I/O, CPU cycles, and buffer hits based on table statistics and histograms, and chooses the lowest-cost plan.\n3. **Code Generation & Execution**: The Execution Engine evaluates the chosen physical plan (executing Index Scans, Hash Joins, Filter stages) interacting with the Buffer Pool and storage engine, streaming rows back to the client.",
    "detailedExplanation": {
      "whatItIs": "SQL টেক্সট থেকে ডেটা রিট্রিভাল পর্যন্ত ইঞ্জিনের অভ্যন্তরীণ জীবনচক্র।",
      "whyItExists": "ঘোষণামূলক (Declarative) SQL কোডকে সর্বনিম্ন খরচে এক্সিকিউট করতে।",
      "howItWorks": "পার্সার -> অ্যালজেব্রা ট্রি -> অপটিমাইজার (Cost Model) -> এক্সিকিউটর (Volcano Iterator Model)।",
      "whenToUse": "কুয়েরি টিউনিং ও `EXPLAIN` আউটপুট বুঝতে এই নলেজ অপরিহার্য।",
      "keyPoints": [
        "Parsing checks syntax and schema semantics.",
        "Query Optimizer is Cost-Based (uses table statistics from `ANALYZE`).",
        "Execution uses the Volcano Iterator Model (`open()`, `next()`, `close()`)."
      ]
    },
    "realWorldExamples": [
      {
        "title": "PostgreSQL ANALYZE Command",
        "description": "ডাটাবেসে লাখ লাখ ডেটা ইনসার্ট করার পর `ANALYZE` কমান্ড চালালে অপটিমাইজারের টেবিল স্ট্যাটিস্টিকস আপডেট হয়, ফলে অপটিমাইজার নিখুঁত এক্সিকিউশন প্ল্যান বানাতে পারে।"
      }
    ],
    "interviewTips": {
      "tip": "'Cost-Based Optimizer (CBO)' এবং 'Table Statistics / Histograms'-এর কথা উল্লেখ করবেন।",
      "deliveryStrategy": "৩টি ধাপ (Parsing -> Optimization -> Execution) সংক্ষেপে বলুন -> গুগল ম্যাপের উপমা দিন -> CBO-এর গুরুত্ব বোঝান।",
      "avoidSaying": [
        {
          "wrong": "ডাটাবেস সবসময় কুয়েরি যেভাবে লেখা হয়েছে হুবহু লাইন ধরে সেভাবেই এক্সিকিউট করে।",
          "right": "SQL হলো ডিক্লোরেটিভ; ডেভেলপার কী চায় তা বলে, কিন্তু কীভাবে সর্বনিম্ন খরচে আনবে তা অপটিমাইজার নিজে ঠিক করে।"
        }
      ]
    },
    "quickRevision": [
      "৩টি ধাপ: Parsing (সিনট্যাক্স ও স্কিমা চেক), Optimization (সেরা প্ল্যান নির্বাচন), Execution (ডেটা ফেচ)।",
      "Cost-Based Optimizer (CBO) সর্বনিম্ন খরচের প্ল্যান বেছে নেয়।",
      "`EXPLAIN` দিয়ে এই নির্বাচিত প্ল্যানটি দেখা যায়।"
    ],
    "followUpQuestions": [
      {
        "question": "What are the different types of backup in a DBMS?",
        "targetId": "db-backup-types-dbms",
        "shortHint": "Full, Differential, Incremental, WAL archiving."
      }
    ],
    "tags": [
      "Query Processing",
      "Optimizer",
      "Parsing",
      "Execution Plan",
      "CBO"
    ]
  },
  {
    "id": "db-backup-types-dbms",
    "slug": "db-backup-types-dbms",
    "question": "What are the different types of backup in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "shortAnswer": "ডাটাবেস দুর্যোগে ডেটা রিকভারি নিশ্চিত করতে ব্যাকআপ প্রধানত ৪ প্রকার:\n১. **Full Backup**: সম্পূর্ণ ডাটাবেসের (সব ফাইল ও ডেটা) একটি নিখুঁত সম্পূর্ণ অনুলিপি। সবচেয়ে নিরাপদ কিন্তু সময় ও স্টোরেজ বেশি নেয়।\n২. **Differential Backup**: সর্বশেষ 'Full Backup'-এর পর থেকে এ পর্যন্ত যত ডেটা পরিবর্তিত হয়েছে শুধুমাত্র সেগুলোর ব্যাকআপ রাখা হয়।\n৩. **Incremental Backup**: সর্বশেষ যেকোনো ব্যাকআপের (Full বা Incremental) পর থেকে ঠিক যতটুকু নতুন ডেটা যোগ/বদল হয়েছে শুধুমাত্র সেটুকুর ব্যাকআপ। এটি দ্রুততম ও সর্বনিম্ন স্টোরেজ নেয়।\n৪. **Transaction Log / WAL Backup**: ডাটাবেসের প্রতিটি ট্রানজ্যাকশন লগের অনুলিপি সংরক্ষণ করা, যার মাধ্যমে যেকোনো সেকেন্ডের ঠিক পূর্বাবস্থায় ডেটা রিকভার (**Point-in-Time Recovery - PITR**) করা যায়।",
    "easyExplanation": "সহজ উপমা:\n- **Full Backup**: প্রতি রবিবার পুরো আলমারির সব বই ও জামার ছবি তোলা।\n- **Differential Backup**: সোমবার থেকে রবিবারের পর যা যা নতুন এসেছে সবকিছুর ছবি একসাথে তোলা।\n- **Incremental Backup**: শুধু আজকের দিনে যে ১টি নতুন বই এসেছে শুধু সেটির ছবি তোলা।\n- **Log Backup**: সিসিটিভি ক্যামেরা ফুটেজ যা দিয়ে যেকোনো সেকেন্ডে কী ঘটেছিল তা হুবহু রিওয়াইন্ড করা যায় (PITR)।",
    "interviewAnswer": "Database backup strategies are architected to meet enterprise Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO):\n1. **Full Backup**: A comprehensive, standalone snapshot of the entire database state. Slowest to capture and largest in size, but provides the fastest restoration baseline.\n2. **Differential Backup**: Captures all cumulative data changes made since the last Full Backup. Restoration requires only the base Full Backup plus the latest Differential file.\n3. **Incremental Backup**: Captures only the delta of changes since the most recent backup of any kind (Full or Incremental). Fastest to take and minimal storage, but restoration requires sequential replaying of all incremental chains.\n4. **Write-Ahead Log (WAL) / Transaction Log Backup**: Continuously archiving transaction redo logs. Essential for Point-In-Time Recovery (PITR), allowing the database to be restored to an exact millisecond prior to a catastrophic event or drop table mistake.",
    "detailedExplanation": {
      "whatItIs": "ডিজাস্টার রিকভারির জন্য ডেটা স্ন্যাপশট ও লগ সংরক্ষণ কৌশল।",
      "whyItExists": "হার্ডওয়্যার নষ্ট, হ্যাকিং বা হিউম্যান এররে ডেটা যাতে চিরতরে না হারায়।",
      "howItWorks": "ডিস্ক পেজ কপি এবং WAL ফাইলের অবিরাম আর্কাইভ করে রিমোট S3/ক্লাউড স্টোরেজে পাঠায়।",
      "whenToUse": "সব প্রোডাকশন সিস্টেমের ব্যাকআপ পলিসিতে (সাধারণত সপ্তাহে ১টি Full, প্রতিদিন Differential/Incremental, এবং প্রতি ৫ মিনিটে WAL)।",
      "keyPoints": [
        "RPO (Recovery Point Objective): কতটা ডেটা লস সহ্য করা সম্ভব।",
        "RTO (Recovery Time Objective): কত দ্রুত সিস্টেম আপ করতে হবে।",
        "Point-in-Time Recovery (PITR) relies on Full Backup + WAL logs."
      ]
    },
    "realWorldExamples": [
      {
        "title": "AWS RDS Automated Backups",
        "description": "AWS RDS প্রতিদিন একটি অটোমেটিক স্ন্যাপশট (Full/Differential) নেয় এবং প্রতি ৫ মিনিটে ট্রানজ্যাকশন লগ S3-তে পাঠায়, ফলে ইউজার চাইলে বিগত ৩৫ দিনের যেকোনো সেকেন্ডের সময়ে ডেটা রিস্টোর করতে পারে।"
      }
    ],
    "interviewTips": {
      "tip": "'RPO (Recovery Point Objective)', 'RTO (Recovery Time Objective)', এবং 'Point-in-Time Recovery (PITR)' শব্দগুলো ইন্টারভিউয়ারকে মুগ্ধ করবে।",
      "deliveryStrategy": "৪টি ব্যাকআপের প্রকারভেদ বলুন -> রিস্টোর স্পিড তুলনা করুন -> PITR ও WAL আর্টাকাইভিংয়ের গুরুত্ব বলুন।",
      "avoidSaying": [
        {
          "wrong": "শুধুমাত্র সপ্তাহে একটি Full Backup নিলেই যথেষ্ট।",
          "right": "Full Backup-এর মাঝে যদি ডেটাবেস ক্র্যাশ করে তবে পুরো সপ্তাহের ডেটা হারাবে; তাই সাথে Incremental এবং WAL লগ ব্যাকআপ থাকা আবশ্যক।"
        }
      ]
    },
    "quickRevision": [
      "Full = সম্পূর্ণ ডাটাবেস।",
      "Differential = লাস্ট Full-এর পর থেকে সমস্ত পরিবর্তন।",
      "Incremental = ঠিক পূর্ববর্তী ব্যাকআপের পর থেকে কেবল নতুনটুকু।",
      "WAL / Log Backup = পয়েন্ট-ইন-টাইম রিকভারি (PITR)-এর চাবিকাঠি।"
    ],
    "followUpQuestions": [
      {
        "question": "What is a hashing technique in a DBMS?",
        "targetId": "db-hashing-technique-dbms",
        "shortHint": "Hash functions, hash indexes, bucketing."
      }
    ],
    "tags": [
      "Backup",
      "Disaster Recovery",
      "PITR",
      "WAL",
      "RPO",
      "RTO"
    ]
  },
  {
    "id": "db-hashing-technique-dbms",
    "slug": "db-hashing-technique-dbms",
    "question": "What is a hashing technique in a DBMS?",
    "category": "Database (SQL & NoSQL)",
    "categorySlug": "database",
    "difficulty": "Intermediate",
    "importance": "Medium",
    "shortAnswer": "**Hashing Technique** হলো একটি সরাসরি অনুসন্ধান পদ্ধতি যেখানে একটি গাণিতিক **Hash Function** ব্যবহার করে সার্চ কি-র (Search Key) মানকে একটি সাংখ্যিক মেমোরি ঠিকানায় (**Bucket Address**) রূপান্তরিত করা হয়। এর মাধ্যমে কোনো ইনডেক্স ট্রি ব্রাউজ না করেই সরাসরি **O(1) কনস্ট্যান্ট সময়ে** রেকর্ড খুঁজে বের করা যায়। তবে হ্যাশিংয়ের প্রধান সীমাবদ্ধতা হলো এটি পয়েন্ট লুকআপে (`WHERE id = 105`) জাদুকরী দ্রুত হলেও কোনো **Range Query** (`WHERE age BETWEEN 20 AND 30`) সমর্থন করতে পারে না।",
    "easyExplanation": "সহজ উপমা (লকার রুম):\nএকটি জিমের লকার রুমে আপনার মেম্বারশিপ নম্বর হলো ১০২৫। একটি গাণিতিক নিয়ম আছে: শেষ দুটি সংখ্যাই আপনার লকার রুম নম্বর (২৫ নম্বর লকার)। আপনাকে ১ থেকে ১০০টি লকার ঘুরে দেখতে হবে না; মেম্বারশিপ দেখেই আপনি সরাসরি ২৫ নম্বর লকারে চলে গেলেন! এটাই Hashing (O(1) স্পিড)।",
    "interviewAnswer": "Hashing in a DBMS is a direct-addressing retrieval technique that maps search key values to specific disk block addresses (data buckets) using a deterministic mathematical hash function: `h(K) -> Bucket Address`. It offers instantaneous O(1) time complexity for exact point queries (`WHERE key = value`).\nDBMS hashing is categorized into:\n1. **Static Hashing**: The number of buckets is fixed; overflows are handled via chained overflow buckets, leading to degradation as data grows.\n2. **Dynamic / Extendible Hashing**: Buckets grow and split dynamically using a directory or linear hashing, accommodating fluctuating table sizes without performance cliffs.\nLimitation: Hash indexes cannot support range queries or sorting (`ORDER BY`), which is why B+Trees remain the default general-purpose database index.",
    "detailedExplanation": {
      "whatItIs": "গাণিতিক হ্যাশ ফাংশন দিয়ে O(1) পয়েন্ট এক্সেস মেকানিজম।",
      "whyItExists": "B-Tree-র ও(লগ এন) সার্চের চেয়েও দ্রুত পয়েন্ট লুকআপ নিশ্চিত করতে।",
      "howItWorks": "কী ইনপুট দিলে হ্যাশ ফাংশন বাকেট নাম্বার দেয়, সেখান থেকে সরাসরি ডিস্ক ব্লক রিড হয়।",
      "whenToUse": "মেমোরি ক্যাশ (Redis), Hash Joins, এবং স্ট্যাটিক আইডি ভিত্তিক ইউনিক পয়েন্ট কুয়েরিতে।",
      "keyPoints": [
        "Delivers O(1) constant time point lookups.",
        "Useless for range scans (`>`, `<`, `BETWEEN`) and ordering (`ORDER BY`).",
        "Collisions handled via Chaining or Open Addressing.",
        "PostgreSQL supports Hash Indexes (WAL-logged since v10)."
      ]
    },
    "realWorldExamples": [
      {
        "title": "Redis Key-Value Lookups & PostgreSQL Hash Joins",
        "description": "Redis মেমোরিতে কোটি কোটি কি-র ভ্যালু এক মিলি-সেকেন্ডের ভগ্নাংশে রিড করতে ইন্টারনাল হ্যাশিং টেকনিক ব্যবহার করে।"
      }
    ],
    "interviewTips": {
      "tip": "ইন্টারভিউয়ারের প্রিয় ট্রিক প্রশ্ন: 'কেন B-Tree ডিফল্ট ইনডেক্স আর Hash Index নয়?' উত্তর দিন: 'কারণ বাস্তব সফটওয়্যারে Range Scan ও Sorting (`ORDER BY`) প্রচুর লাগে যা Hash Index পারে না কিন্তু B-Tree অনায়াসে পারে'।",
      "deliveryStrategy": "সংজ্ঞা -> লকার রুমের উপমা -> O(1) বনাম O(log N) -> Range Scan সীমাবদ্ধতা।",
      "avoidSaying": [
        {
          "wrong": "হ্যাশ ইনডেক্স দিয়ে সব ধরনের কুয়েরি দ্রুত করা সম্ভব।",
          "right": "হ্যাশ ইনডেক্স শুধুমাত্র হুবহু সমতা (`=`) কুয়েরিতে কাজ করে, কোনো লেস-দ্যান, গ্রেটার-দ্যান বা রেঞ্জ কুয়েরিতে সম্পূর্ণ অকেজো।"
        }
      ]
    },
    "quickRevision": [
      "Hashing = হ্যাশ ফাংশন দিয়ে সরাসরি O(1) সময়ে রেকর্ড খোঁজা।",
      "পয়েন্ট লুকআপে (`=`) সুপার ফাস্ট।",
      "Range Queries (`BETWEEN`, `>`, `<`) সমর্থন করে না।"
    ],
    "followUpQuestions": [
      {
        "question": "What is MongoDB? (Document-oriented database, BSON format)",
        "targetId": "mongo-what-is-mongodb-bson",
        "shortHint": "Document store with flexible BSON."
      }
    ],
    "tags": [
      "Hashing",
      "Hash Index",
      "Data Structures",
      "O(1)",
      "Performance"
    ]
  }
];
