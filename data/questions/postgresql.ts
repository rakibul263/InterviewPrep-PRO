import { Question } from "@/types";

export const postgresqlQuestions: Question[] = [
  {
    "id": "sql-mysql-vs-postgresql-comparison",
    "slug": "sql-mysql-vs-postgresql-comparison",
    "question": "MySQL vs PostgreSQL: What are the core architectural differences?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "MySQL রিড-হেভি সাধারণ ওয়েব অ্যাপ্লিকেশনের জন্য জনপ্রিয় ও দ্রুত, আর PostgreSQL উন্নত অবজেক্ট-রিলেশনাল ডাটাবেস যা জটিল কুয়েরি, JSONB, এবং কঠোর SQL কমপ্লায়েন্স প্রদান করে।",
    "easyExplanation": "MySQL হলো ফাস্ট ও সহজ সিটি কার, আর PostgreSQL হলো ভারী বোঝা ও সব রাস্তায় চলার উপযোগী অল-টেরেইন ভেহিক্যাল।",
    "interviewAnswer": "MySQL focuses on speed, simplicity, and high read concurrency in web apps. PostgreSQL is an advanced, highly extensible Object-Relational DBMS offering superior JSONB support, complex query parallelism, GIN/GiST indexes, and strict SQL compliance.",
    "detailedExplanation": {
      "whatItIs": "ওপেন-সোর্স রিলেশনাল ডাটাবেস জগতের শীর্ষ দুটি ইঞ্জিনের আর্কিটেকচারাল তুলনা।",
      "whyItExists": "সিস্টেম রিকোয়ারমেন্ট অনুযায়ী সঠিক রিলেশনাল ইঞ্জিন নির্বাচন করতে।",
      "howItWorks": "MySQL স্টোরেজ ইঞ্জিন প্লাগেবল (InnoDB); PostgreSQL প্রসেস-বেসড আর্কিটেকচার ও উন্নত MVCC ব্যবহার করে।",
      "whenToUse": "সাধারণ সিএমএস/ওয়েবে MySQL; জটিল ফিনটেক, জিআইএস ও অ্যানালিটিক্সে PostgreSQL।",
      "keyPoints": [
        "JSON vs JSONB: PostgreSQL parses and indexes JSONB with GIN indexes.",
        "PostgreSQL excels at complex subqueries, window functions, and CTEs.",
        "MySQL traditionally excels at simple point lookups and high read concurrency."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- PostgreSQL JSONB with GIN Index\nCREATE TABLE events (\n  id SERIAL PRIMARY KEY,\n  payload JSONB NOT NULL\n);\nCREATE INDEX idx_events_payload ON events USING GIN (payload);\n\n-- Sub-millisecond lookup inside JSONB\nSELECT * FROM events WHERE payload @> '{\"type\": \"payment_success\"}';",
      "explanationSteps": [
        {
          "step": 1,
          "title": "JSONB GIN Index",
          "description": "JSONB ডকুমেন্টের ভেতরে B-Tree/GIN গতিতে সার্চ করা যায়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Fintech & GIS Platforms",
        "description": "কঠোর ACID ট্রানজ্যাকশন ও PostGIS স্পেশিয়াল ডেটার জন্য PostgreSQL সেরা।"
      }
    ],
    "interviewTips": {
      "tip": "PostgreSQL-এর pgvector প্লাগিনের কথা বলুন যা আধুনিক AI অ্যাপ্লিকেশনের জন্য একে শীর্ষ ডাটাবেস বানিয়েছে।",
      "avoidSaying": [
        {
          "wrong": "MySQL-এ ট্রানজ্যাকশন চলে না।",
          "right": "MySQL InnoDB ইঞ্জিনে ফুল ট্রানজ্যাকশন চলে।"
        }
      ]
    },
    "quickRevision": [
      "MySQL for simple read-heavy web apps; PostgreSQL for complex schemas, JSONB, and enterprise integrity."
    ],
    "followUpQuestions": [
      {
        "question": "When should you choose PostgreSQL over MySQL?",
        "targetId": "sql-when-choose-postgresql"
      }
    ],
    "tags": [
      "PostgreSQL",
      "MySQL",
      "RDBMS",
      "Architecture"
    ]
  },
  {
    "id": "sql-when-choose-postgresql",
    "slug": "sql-when-choose-postgresql",
    "question": "When should you choose PostgreSQL over MySQL?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "যখন জটিল অ্যানালিটিক্যাল কুয়েরি, উন্নত JSONB ডেটা প্রসেসিং, জিওস্পেশিয়াল ডেটা (PostGIS), বা AI ভেক্টর সার্চ (pgvector) প্রয়োজন হয়, তখন PostgreSQL বেছে নেওয়া উচিত।",
    "easyExplanation": "আপনার অ্যাপে যদি সেমি-স্ট্রাকচার্ড JSON লাগে, জটিল রিপোর্টিং লাগে বা জিওগ্রাফিক লোকেশন ভিত্তিক হিসাব লাগে, তবে PostgreSQL ডিফল্ট চয়েস।",
    "interviewAnswer": "Choose PostgreSQL when you require: 1) Advanced semi-structured data handling via indexed JSONB, 2) Complex multi-table analytical joins and window functions, 3) Geospatial GIS capabilities via PostGIS, 4) AI vector embeddings search via pgvector, and 5) Strict adherence to SQL standards.",
    "detailedExplanation": {
      "whatItIs": "প্রজেক্টের আর্কিটেকচারাল রিকোয়ারমেন্টের ভিত্তিতে PostgreSQL নির্বাচনের মাপকাঠি।",
      "whyItExists": "ভুল টেকনোলজি স্ট্যাক নির্বাচনজনিত স্কেলিং বটলনেক এড়াতে।",
      "howItWorks": "PostgreSQL-এর শক্তিশালী এক্সটেনশন ইকোসিস্টেম এবং কুয়েরি প্ল্যানার জটিল ডেটা টাইপ সহজে প্রসেস করে।",
      "whenToUse": "ফিনটেক, এন্টারপ্রাইজ ব্যাকএন্ড, জিআইএস ও এআই সিস্টেমে।",
      "keyPoints": [
        "PostGIS for industry-standard geospatial data.",
        "pgvector for high-speed AI embeddings and semantic search.",
        "Parallel query execution for multi-core analytical workloads."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Using pgvector extension in PostgreSQL\nCREATE EXTENSION IF NOT EXISTS vector;\nCREATE TABLE documents (\n  id SERIAL PRIMARY KEY,\n  content TEXT,\n  embedding vector(1536)\n);\n-- Find 5 most similar documents\nSELECT id, content FROM documents ORDER BY embedding <-> '[0.1, 0.2, ...]' LIMIT 5;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Vector Similarity",
          "description": "AI এমবেডিংয়ের ভেক্টর সার্চ PostgreSQL-এই সরাসরি চালানো যায়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Modern AI Applications",
        "description": "আলাদা ভেক্টর ডাটাবেস না কিনে PostgreSQL-এই রিলেশনাল ডেটা ও AI ভেক্টর একসাথে রাখা যায়।"
      }
    ],
    "interviewTips": {
      "tip": "PostGIS এবং pgvector-এর বাস্তব উপযোগিতা তুলে ধরুন।",
      "avoidSaying": [
        {
          "wrong": "সব প্রজেক্টেই চোখ বন্ধ করে PostgreSQL নেওয়া উচিত।",
          "right": "সহজ ও লাইটওয়েট প্রজেক্টে MySQL বা SQLite দ্রুত ও যথেষ্ট।"
        }
      ]
    },
    "quickRevision": [
      "Choose PostgreSQL for JSONB, PostGIS, pgvector, and complex analytics."
    ],
    "followUpQuestions": [
      {
        "question": "What are the core indexing strategies in PostgreSQL?",
        "targetId": "sql-postgresql-indexing-types"
      }
    ],
    "tags": [
      "PostgreSQL",
      "System Design",
      "Decision Making"
    ]
  },
  {
    "id": "sql-postgresql-indexing-types",
    "slug": "sql-postgresql-indexing-types",
    "question": "What are the core indexing strategies in PostgreSQL (B-Tree, GIN, GiST, BRIN)?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "shortAnswer": "B-Tree (ডিফল্ট, ইউনিক ও রেঞ্জ সার্চ), GIN (JSONB ও ফুল-টেক্সট সার্চ), GiST (জিওস্পেশিয়াল ও রেঞ্জ টাইপ), এবং BRIN (বিশাল টাইম-সিরিজ টেবিলের জন্য অতি হালকা ইনডেক্স)।",
    "easyExplanation": "B-Tree হলো সাধারণ নাম/আইডি খোঁজার জন্য; GIN হলো ডকুমেন্টের ভেতরে ট্যাগ বা কী খোঁজার জন্য; আর BRIN হলো কোটি কোটি ডেটার তারিখ ভিত্তিক টেবিল খুব কম মেমরিতে ইনডেক্স করার জন্য।",
    "interviewAnswer": "PostgreSQL provides specialized index types: B-Tree (default for equality, ranges, sorting); GIN (Generalized Inverted Index, ideal for arrays, JSONB, and full-text search); GiST (Generalized Search Tree, ideal for spatial geometry and overlapping ranges); and BRIN (Block Range Index, exceptionally lightweight for massive, physically ordered time-series tables).",
    "detailedExplanation": {
      "whatItIs": "বিভিন্ন ডেটা টাইপ ও কুয়েরি প্যাটার্নের জন্য PostgreSQL-এর বিশেষায়িত ইনডেক্স ইঞ্জিনসমূহ।",
      "whyItExists": "সব ধরনের ডেটার জন্য একক B-Tree যথেষ্ট নয়; যেমন অ্যারে বা জিওমেট্রি ডেটায় ভিন্ন ইনডেক্স প্রয়োজন।",
      "howItWorks": "GIN প্রতিটি উপাদানকে আলাদা কি বানায়; BRIN ব্লক রেঞ্জ মেটাডেটা জমা রাখে।",
      "whenToUse": "টাইম-সিরিজে BRIN; JSONB/অ্যারেতে GIN; সাধারণ কলামে B-Tree।",
      "keyPoints": [
        "B-Tree: O(log n) time, ideal for equality and sorted ranges.",
        "GIN: Superfast for containment queries (`@>`), slightly slower on writes.",
        "BRIN: Occupies 1% the disk space of B-Tree for time-ordered data."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- B-Tree\nCREATE INDEX idx_users_email ON users (email);\n\n-- GIN on JSONB\nCREATE INDEX idx_orders_items ON orders USING GIN (items);\n\n-- BRIN on Time-Series Logs\nCREATE INDEX idx_logs_created ON system_logs USING BRIN (created_at);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Index Types",
          "description": "ডেটার প্রকৃতি অনুযায়ী সঠিক ইনডেক্স ইঞ্জিন সিলেক্ট করা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Time-Series IoT Metrics",
        "description": "কোটি কোটি রো-র টেবিলে BRIN ইনডেক্স মাত্র কয়েক মেগাবাইট জায়গা নেয়।"
      }
    ],
    "interviewTips": {
      "tip": "BRIN ইনডেক্সের মেমরি সেভিংস ব্যাখ্যা করলে ইন্টারভিউয়ার মুগ্ধ হবেন।",
      "avoidSaying": [
        {
          "wrong": "সব ফিল্ডেই সাধারণ B-Tree ইনডেক্স দিয়ে দিলেই হয়।",
          "right": "JSONB বা ফুল-টেক্সটে GIN ইনডেক্স আবশ্যক।"
        }
      ]
    },
    "quickRevision": [
      "B-Tree for scalars, GIN for JSONB/Arrays, GiST for geometry, BRIN for massive time-series."
    ],
    "followUpQuestions": [
      {
        "question": "How does MVCC work in PostgreSQL?",
        "targetId": "sql-postgresql-mvcc-explained"
      }
    ],
    "tags": [
      "PostgreSQL",
      "Indexing",
      "GIN",
      "BRIN",
      "Performance"
    ]
  },
  {
    "id": "sql-postgresql-mvcc-explained",
    "slug": "sql-postgresql-mvcc-explained",
    "question": "How does Multi-Version Concurrency Control (MVCC) work in PostgreSQL?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "shortAnswer": "MVCC ডেটা আপডেটের সময় পুরোনো রো ওভাররাইট না করে নতুন ভার্সন (টুপল) তৈরি করে, ফলে পড়ার কুয়েরি কখনো লেখার কুয়েরিকে ব্লক করে না এবং লেখার কুয়েরি পড়ার কুয়েরিকে ব্লক করে না।",
    "easyExplanation": "কেউ যখন বই পড়ছে, অন্য কেউ সেটিতে এডিট করতে চাইলে মূল বই না কেড়ে নিয়ে একটি নতুন ফটোকপি তৈরি করে এডিট করা হয়। ফলে পাঠকের পড়া ব্যাহত হয় না।",
    "interviewAnswer": "PostgreSQL implements MVCC using hidden system columns (`xmin` and `xmax`). When a row is updated or deleted, PostgreSQL does NOT overwrite it in-place; it marks the old tuple with `xmax` and inserts a fresh tuple with a new `xmin`. Each transaction sees a point-in-time snapshot. This guarantees 'readers never block writers, and writers never block readers.' Dead tuples are subsequently cleaned up asynchronously by VACUUM.",
    "detailedExplanation": {
      "whatItIs": "লকিং ছাড়া উচ্চ কনকারেন্সি নিশ্চিত করার ডাটাবেস মেকানিজম।",
      "whyItExists": "রিড কুয়েরি যেন রাইট কুয়েরিকে দীর্ঘক্ষণ লক করে না রাখে।",
      "howItWorks": "প্রতিটি রো-তে xmin (তৈরির ট্রানজ্যাকশন আইডি) ও xmax (মুছে যাওয়ার ট্রানজ্যাকশন আইডি) থাকে।",
      "whenToUse": "উচ্চ কনকারেন্ট রিড/রাইট সিস্টেমে।",
      "keyPoints": [
        "Readers do not block writers; writers do not block readers.",
        "Dead tuples accumulate on disk and require VACUUM / Autovacuum cleanup.",
        "Enforces Snapshot Isolation."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Inspect hidden MVCC columns in PostgreSQL\nSELECT xmin, xmax, id, username FROM users;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "xmin & xmax",
          "description": "এই দুটি কলাম দিয়ে PostgreSQL ট্র্যাক করে কোন ট্রানজ্যাকশন কোন রো দেখবে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "High-Concurrency Web Services",
        "description": "হাজার হাজার ইউজার ডেটা পড়ার সময়ও ব্যাকগ্রাউন্ডে ব্যালেন্স বা অর্ডার আপডেট হতে পারে কোনো লক ছাড়াই।"
      }
    ],
    "interviewTips": {
      "tip": "VACUUM-এর প্রয়োজনীয়তা উল্লেখ করুন: ডেড টুপল পরিষ্কার না করলে টেবিল ব্লোটিং ঘটে।",
      "avoidSaying": [
        {
          "wrong": "আপডেট করলে ডিস্কের পুরোনো রো সরাসরি মুছে যায়।",
          "right": "পুরোনো রো ডেড টুপল হিসেবে থেকে যায় এবং নতুন ভার্সন রো তৈরি হয়।"
        }
      ]
    },
    "quickRevision": [
      "MVCC = Multi-Version Concurrency Control (Readers don't block writers; cleaned by VACUUM)."
    ],
    "followUpQuestions": [
      {
        "question": "What are database joins algorithms?",
        "targetId": "sql-database-joins-algorithms"
      }
    ],
    "tags": [
      "PostgreSQL",
      "MVCC",
      "Concurrency",
      "Internals"
    ]
  },
  {
    "id": "sql-database-joins-algorithms",
    "slug": "sql-database-joins-algorithms",
    "question": "What are the common SQL Join algorithms (Nested Loop, Hash Join, Merge Join)?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Advanced",
    "importance": "High",
    "shortAnswer": "কুয়েরি এক্সিকিউশনের ৩টি মূল জয়েন অ্যালগরিদম: ১) Nested Loop (ছোট টেবিল ও ইনডেক্সড লুকে), ২) Hash Join (বড় আনসর্টেড টেবিলে হ্যাশ টেবিল বানিয়ে), এবং ৩) Merge Join (উভয় টেবিল আগে থেকেই সর্ট করা থাকলে)।",
    "easyExplanation": "Nested Loop হলো সাধারণ দুটি লুপ; Hash Join হলো একপাশের ডেটা মেমরির হ্যাশম্যাপে রেখে দ্রুত ম্যাচ করা; Merge Join হলো দুটি সাজানো কার্ডের বান্ডিল পাশাপাশি মিলিয়ে দেখা।",
    "interviewAnswer": "The query planner selects one of three physical join algorithms based on statistics and table size: 1) **Nested Loop Join**: Iterates through the outer table and searches the inner table; fastest when the outer set is small and the inner table has an index. 2) **Hash Join**: Builds an in-memory hash table on the smaller table, then scans the larger table matching keys in O(1) time; best for large, unindexed equality joins. 3) **Merge Join**: Scans both tables sequentially in lockstep; extremely fast when both tables are already sorted on the join key.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেস অপ্টিমাইজার কীভাবে দুটি টেবিল শারীরিকভাবে মেমরিতে মেলায় তার অ্যালগরিদম।",
      "whyItExists": "টেবিলের আকার ও ইনডেক্সের ওপর ভিত্তি করে সর্বনিম্ন সময়ে জয়েন সম্পন্ন করতে।",
      "howItWorks": "EXPLAIN কমান্ডের মাধ্যমে প্ল্যানার কোন অ্যালগরিদম বেছে নিয়েছে তা দেখা যায়।",
      "whenToUse": "কুয়েরি পারফরম্যান্স টিউনিংয়ের সময়।",
      "keyPoints": [
        "Nested Loop: Ideal for small datasets with indexed lookups.",
        "Hash Join: Ideal for large equality joins (requires work_mem RAM).",
        "Merge Join: Optimal when join keys are pre-sorted by B-Tree index."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "-- Inspect the physical join algorithm selected by planner\nEXPLAIN SELECT * FROM customers c JOIN orders o ON c.id = o.customer_id;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "EXPLAIN Join",
          "description": "আউটপুটে Hash Join বা Nested Loop দেখা যায়।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Query Plan Tuning",
        "description": "work_mem বাড়িয়ে দিলে PostgreSQL ডিস্ক সোয়াপিং না করে ইন-মেমোরি Hash Join চালিয়ে কুয়েরি স্পিড ১০ গুণ বাড়িয়ে দেয়।"
      }
    ],
    "interviewTips": {
      "tip": "work_mem কনফিগারেশনের সাথে Hash Join-এর সম্পর্কের কথা বলুন।",
      "avoidSaying": [
        {
          "wrong": "সব জয়েন সাধারণ ফর-লুপ দিয়ে চলে।",
          "right": "প্ল্যানার ডেটা সাইজ দেখে হ্যাশ বা মার্জ জয়েন বেছে নেয়।"
        }
      ]
    },
    "quickRevision": [
      "Nested Loop for small/indexed; Hash Join for large unindexed; Merge Join for pre-sorted."
    ],
    "followUpQuestions": [
      {
        "question": "How does Prisma provide type safety?",
        "targetId": "db-mock-c3-prisma-client-type-safety"
      }
    ],
    "tags": [
      "PostgreSQL",
      "SQL",
      "Joins",
      "Query Optimization"
    ]
  },
  {
    "id": "sql-transactions-savepoints-isolation",
    "slug": "sql-transactions-savepoints-isolation",
    "question": "What are Savepoints and Transaction Isolation Levels in PostgreSQL?",
    "category": "PostgreSQL",
    "categorySlug": "postgresql",
    "difficulty": "Advanced",
    "importance": "High",
    "shortAnswer": "Savepoints হলো ট্রানজ্যাকশনের মধ্যে সাব-চেকপয়েন্ট যা পুরো ট্রানজ্যাকশন বাতিল না করে আংশিক রোলব্যাক করার সুযোগ দেয়; আর Isolation Levels কনকারেন্ট রিড সমস্যা (Dirty Read, Non-Repeatable Read, Phantom Read) প্রতিরোধ করে।",
    "easyExplanation": "Savepoint হলো গেমের চেকপয়েন্টের মতো—মারা গেলে পুরো গেম শুরু থেকে না খেলে চেকপয়েন্ট থেকে রিস্টার্ট নেওয়া যায়।",
    "interviewAnswer": "Savepoints allow nested, partial rollbacks within a transaction without aborting the parent unit. Transaction Isolation Levels control concurrency phenomena: Read Committed (default in Postgres, prevents dirty reads); Repeatable Read (guarantees consistent snapshot across queries); and Serializable (strictest, guarantees executions are identical to a purely serial order, aborting on serialization conflicts).",
    "detailedExplanation": {
      "whatItIs": "উন্নত ট্রানজ্যাকশন কন্ট্রোল ও কনকারেন্সি মেকানিজম।",
      "whyItExists": "দীর্ঘ ট্রানজ্যাকশনে আংশিক ফেইলিউর হ্যান্ডেল করতে এবং রেস কন্ডিশন রোধ করতে।",
      "howItWorks": "SAVEPOINT নাম দিয়ে চেকপয়েন্ট রাখা হয় এবং ROLLBACK TO SAVEPOINT দিয়ে সেখানে ফিরে যাওয়া যায়।",
      "whenToUse": "ব্যাংকিং, ব্যাচ প্রসেসিং ও জটিল অর্ডারিং সিস্টেমে।",
      "keyPoints": [
        "SAVEPOINT sp1; ROLLBACK TO sp1; RELEASE SAVEPOINT sp1;",
        "PostgreSQL does not allow Dirty Reads even in Read Uncommitted.",
        "Serializable isolation uses SSI (Serializable Snapshot Isolation) detection."
      ]
    },
    "codeExample": {
      "language": "sql",
      "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nSAVEPOINT my_savepoint;\n\n-- Try secondary action\nUPDATE perks SET status = 'ACTIVE' WHERE user_id = 1;\n-- If error in secondary action, rollback ONLY to savepoint:\nROLLBACK TO SAVEPOINT my_savepoint;\n\nCOMMIT; -- Account deduction is still preserved!",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Savepoint",
          "description": "আংশিক রোলব্যাকের মাধ্যমে মূল ট্রানজ্যাকশন বাঁচানো হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Multi-Step Checkout",
        "description": "অর্ডার কনফার্ম রেখে অপশনাল ডিসকাউন্ট কুপন ফেইল করলে সেভপয়েন্টে রোলব্যাক করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "Postgres-এ Read Uncommitted দিলেও এটি ইন্টারনালি Read Committed হিসেবেই কাজ করে।",
      "avoidSaying": [
        {
          "wrong": "রোলব্যাক করলে সবসময় পুরো ট্রানজ্যাকশনই মুছে যায়।",
          "right": "Savepoint থাকলে নির্দিষ্ট পয়েন্ট পর্যন্ত আংশিক রোলব্যাক করা যায়।"
        }
      ]
    },
    "quickRevision": [
      "Savepoints enable partial rollbacks. Isolation levels control concurrency phenomena."
    ],
    "followUpQuestions": [
      {
        "question": "What are the benefits of using Prisma?",
        "targetId": "db-mock-c4-benefits-using-prisma"
      }
    ],
    "tags": [
      "PostgreSQL",
      "Transactions",
      "Savepoints",
      "Isolation Levels"
    ]
  }
];
