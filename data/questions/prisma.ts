import { Question } from "@/types";

export const prismaQuestions: Question[] = [
  {
    "id": "prisma-what-is-prisma-core-components",
    "slug": "prisma-what-is-prisma-core-components",
    "question": "What is Prisma and what are its core architectural components?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "Prisma হলো Node.js ও TypeScript-এর একটি পরবর্তী প্রজন্মের ORM যার ৩টি মূল উপাদান: ১) Prisma Schema, ২) Prisma Client, এবং ৩) Prisma Migrate।",
    "easyExplanation": "Prisma ডেটাবেসের সাথে কথা বলার সবচেয়ে আধুনিক ও টাইপ-সেফ উপায়। স্কিমা লিখলে এটি নিজে থেকেই টাইপস্ক্রিপ্ট কোড ও SQL মাইগ্রেশন তৈরি করে দেয়।",
    "interviewAnswer": "Prisma is a next-generation Object-Relational Mapper (ORM) for Node.js and TypeScript. Its architecture consists of three core components: 1) **Prisma Schema** (`schema.prisma` declarative data modeling file), 2) **Prisma Client** (auto-generated, type-safe query builder powered by a compiled Rust query engine), and 3) **Prisma Migrate** (declarative data modeling and version-controlled migration tool).",
    "detailedExplanation": {
      "whatItIs": "টাইপস্ক্রিপ্ট ইকোসিস্টেমের সবচেয়ে জনপ্রিয় ও আধুনিক ORM আর্কিটেকচার।",
      "whyItExists": "ঐতিহ্যবাহী ORM-এর টাইপিং জটিলতা ও বাগ দূর করতে।",
      "howItWorks": "স্কিমা থেকে রাস্ট কোয়েরি ইঞ্জিন এবং টাইপস্ক্রিপ্ট ক্লায়েন্ট জেনারেট করে।",
      "whenToUse": "সব আধুনিক ফুল-স্ট্যাক ও ব্যাকএন্ড TypeScript প্রজেক্টে।",
      "keyPoints": [
        "Prisma Schema: Single source of truth.",
        "Prisma Client: Auto-generated type-safe queries.",
        "Prisma Migrate: Version-controlled database migrations."
      ]
    },
    "codeExample": {
      "language": "prisma",
      "code": "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}",
      "explanationSteps": [
        {
          "step": 1,
          "title": "schema.prisma",
          "description": "প্রিজমা মডেল ডিফাইন করার উদাহরণ।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Next.js Fullstack Apps",
        "description": "Next.js App Router-এর সাথে সার্ভার অ্যাকশনে Prisma Client আদর্শ জুটি।"
      }
    ],
    "interviewTips": {
      "tip": "Prisma Studio-র কথা উল্লেখ করুন যা ডাটাবেস ব্রাউজ করার ভিজ্যুয়াল GUI।",
      "avoidSaying": [
        {
          "wrong": "Prisma শুধু জাভাস্ক্রিপ্ট চালায়।",
          "right": "Prisma-র কোর কুয়েরি ইঞ্জিনটি অপ্টিমাইজড Rust-এ তৈরি।"
        }
      ]
    },
    "quickRevision": [
      "Prisma = Prisma Schema + Prisma Client + Prisma Migrate."
    ],
    "followUpQuestions": [
      {
        "question": "How does Prisma Migrate work?",
        "targetId": "prisma-migrate-workflow"
      }
    ],
    "tags": [
      "Prisma",
      "ORM",
      "Architecture"
    ]
  },
  {
    "id": "prisma-migrate-workflow",
    "slug": "prisma-migrate-workflow",
    "question": "How does Prisma Migrate work and what are the best practices for production?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "ডেভেলপমেন্টে `prisma migrate dev` দিয়ে স্কিমা পার্থক্যের ওপর ভিত্তি করে SQL মাইগ্রেশন ফাইল তৈরি করা হয়; প্রোডাকশনে `prisma migrate deploy` দিয়ে পেন্ডিং মাইগ্রেশন নিরাপদে অ্যাপ্লাই করা হয়।",
    "easyExplanation": "ডেভেলপমেন্টে প্রিজমা স্কিমা বদলালে মাইগ্রেশন ফাইল স্বয়ংক্রিয়ভাবে তৈরি হয়; প্রোডাকশনে কোনো নতুন ফাইল তৈরি না করে শুধু জমাকৃত SQL ফাইলগুলো ডাটাবেসে চালানো হয়।",
    "interviewAnswer": "Prisma Migrate is a declarative database migration tool. In development, running `prisma migrate dev --name init` calculates schema diffs, generates human-readable SQL files in `prisma/migrations`, executes them on your local database, and updates Prisma Client. In production CI/CD pipelines, you strictly run `prisma migrate deploy`, which applies pending unapplied migration files without diffing or prompting, guaranteeing zero database drift.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেস সংস্করণ নিয়ন্ত্রণ ও পরিবর্তন ট্র্যাকিং সিস্টেম।",
      "whyItExists": "টিম মেম্বার এবং প্রোডাকশন ডাটাবেসের স্কিমা সিঙ্ক বজায় রাখতে।",
      "howItWorks": "ডাটাবেসের `_prisma_migrations` টেবিলে হ্যাশ ও মাইগ্রেশন হিস্ট্রি ট্র্যাক করে।",
      "whenToUse": "ডাটাবেসের টেবিলে কলাম যোগ, বিয়োগ বা পরিবর্তনের সময়।",
      "keyPoints": [
        "Development: `prisma migrate dev` (generates and applies SQL).",
        "Production: `prisma migrate deploy` (strictly applies pending migrations).",
        "Direct unpooled connection (DIRECT_URL) required for migrations."
      ]
    },
    "codeExample": {
      "language": "bash",
      "code": "# Development workflow:\nnpx prisma migrate dev --name add_user_role\n\n# Production CI/CD workflow:\nnpx prisma migrate deploy",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Commands",
          "description": "ডেভেলপমেন্ট বনাম প্রোডাকশন কমান্ডের পার্থক্য।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "CI/CD Deployment Pipelines",
        "description": "GitHub Actions-এ নতুন কোড ডিপ্লয় হওয়ার আগে `prisma migrate deploy` স্বয়ংক্রিয়ভাবে রান হয়।"
      }
    ],
    "interviewTips": {
      "tip": "প্রোডাকশনে কখনো `prisma migrate dev` চালাবেন না; সর্বদা `prisma migrate deploy` চালাবেন।",
      "avoidSaying": [
        {
          "wrong": "প্রোডাকশনেও migrate dev চালাই।",
          "right": "প্রোডাকশনে নিরাপদ নিয়ম হলো migrate deploy চালানো।"
        }
      ]
    },
    "quickRevision": [
      "dev creates & applies SQL; deploy strictly applies in production."
    ],
    "followUpQuestions": [
      {
        "question": "How are relationships modeled in Prisma schema?",
        "targetId": "prisma-schema-relationships"
      }
    ],
    "tags": [
      "Prisma",
      "Prisma Migrate",
      "DevOps",
      "Production"
    ]
  },
  {
    "id": "prisma-schema-relationships",
    "slug": "prisma-schema-relationships",
    "question": "How are 1-1, 1-N, and M-N relationships modeled in Prisma?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Prisma-তে `@relation` অ্যাট্রিবিউট দিয়ে রিলেশন ডিফাইন করা হয়। 1-1 এ `@unique` লাগে, 1-N এ চাইল্ডে ফরেন কি থাকে, এবং M-N এ স্বয়ংক্রিয় রিলেশন টেবিল তৈরি হয়।",
    "easyExplanation": "স্কিমাতে শুধু মডেলের রেফারেন্স ফিল্ড লিখে দিলে প্রিজমা নিজ দায়িত্বে ফরেন কি এবং জয়েন টেবিল বানিয়ে নেয়।",
    "interviewAnswer": "In Prisma, relations are configured via `@relation`. For 1-to-1 relations, the foreign key field is decorated with `@unique`. For 1-to-Many relations, the parent holds an array type (e.g. `posts Post[]`) while the child holds the scalar foreign key and relation attribute (`userId Int`, `@relation(fields: [userId], references: [id])`). For Many-to-Many relations, defining arrays on both models creates an implicit join table automatically without manual pivot table boilerplate.",
    "detailedExplanation": {
      "whatItIs": "রিলেশনাল ডাটাবেস সম্পর্কের ডিক্ল্যারেটিভ ম্যাপিং।",
      "whyItExists": "জটিল ফরেন কি ও পিভট টেবিল ম্যানেজমেন্ট সহজ ও স্বয়ংক্রিয় করতে।",
      "howItWorks": "প্রিজমা স্কিমা থেকে ডাটাবেস কনস্ট্রেইন্ট এবং টাইপস্ক্রিপ্ট টাইপ জেনারেট করে।",
      "whenToUse": "যেকোনো সম্পর্কিত ডেটা মডেলিংয়ে।",
      "keyPoints": [
        "Implicit Many-to-Many: Prisma manages the join table behind the scenes.",
        "Explicit Many-to-Many: Use a custom pivot model if you need metadata on the relation (e.g. assignedAt).",
        "Referential actions: onDelete: Cascade."
      ]
    },
    "codeExample": {
      "language": "prisma",
      "code": "model User {\n  id    Int    @id @default(autoincrement())\n  posts Post[] // 1-to-Many\n}\n\nmodel Post {\n  id       Int    @id @default(autoincrement())\n  authorId Int\n  author   User   @relation(fields: [authorId], references: [id], onDelete: Cascade)\n}",
      "explanationSteps": [
        {
          "step": 1,
          "title": "1-to-N Relation",
          "description": "ক্যাসকেড ডিলিট সহ রিলেশন কনফিগার করা হয়েছে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Post & Tags Many-to-Many",
        "description": "পোস্ট এবং ট্যাগের মধ্যে ইমপ্লিসিট মেনি-টু-মেনি রিলেশন ব্যবহার করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "কখন ইমপ্লিসিট বনাম এক্সপ্লিসিট মেনি-টু-মেনি ব্যবহার করবেন তা বলুন।",
      "avoidSaying": [
        {
          "wrong": "প্রিজমায় মেনি-টু-মেনির জন্য সবসময় আলাদা পিভট টেবিল নিজে বানাতে হয়।",
          "right": "প্রিজমা ইমপ্লিসিটলি নিজে পিভট টেবিল হ্যান্ডেল করতে পারে।"
        }
      ]
    },
    "quickRevision": [
      "@relation defines foreign keys; implicit many-to-many needs no manual pivot table."
    ],
    "followUpQuestions": [
      {
        "question": "How does Prisma handle database scaling and read replicas?",
        "targetId": "prisma-read-replicas-scaling"
      }
    ],
    "tags": [
      "Prisma",
      "Relations",
      "Data Modeling"
    ]
  },
  {
    "id": "prisma-read-replicas-scaling",
    "slug": "prisma-read-replicas-scaling",
    "question": "How do you configure Read Replicas and database scaling with Prisma?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Advanced",
    "importance": "High",
    "shortAnswer": "Prisma Client Extension (`@prisma/extension-read-replicas`) ব্যবহার করে প্রাইমারি ডাটাবেস এবং এক বা একাধিক রিড রেপ্লিকার মধ্যে রিড ও রাইট কুয়েরি স্বয়ংক্রিয়ভাবে আলাদা করা যায়।",
    "easyExplanation": "সব রাইট অপারেশন মূল ডাটাবেসে যাবে এবং পড়ার সব কুয়েরি স্বয়ংক্রিয়ভাবে রেপ্লিকা সার্ভারগুলোতে ভাগ হয়ে যাবে।",
    "interviewAnswer": "Prisma supports read replicas using the official `@prisma/extension-read-replicas` extension. You provide the primary database connection URL and an array of read replica URLs. Under the hood, the extension intercepts queries: write mutations (`create`, `update`, `delete`, transactions) are automatically routed to the primary, while read operations (`findMany`, `findFirst`, `count`) are load-balanced across the read replicas.",
    "detailedExplanation": {
      "whatItIs": "Prisma-র মাধ্যমে ডাটাবেস রিড-রাইট ট্রাফিক ভাগ করার ক্লায়েন্ট এক্সটেনশন।",
      "whyItExists": "প্রাইমারি ডাটাবেসের সিপিইউ লোড কমিয়ে রিড ট্রাফিক বহুগুণ স্কেল করতে।",
      "howItWorks": "মেথডের ধরন দেখে কুয়েরি রাউটিং নিয়ন্ত্রণ করে।",
      "whenToUse": "উচ্চ ট্রাফিকের প্রোডাকশন সিস্টেমে যেখানে রিড ট্রাফিক অনেক বেশি।",
      "keyPoints": [
        "Writes go to primary.",
        "Reads distributed across replicas.",
        "Can explicitly force reading from primary for read-after-write consistency via `$primary()`."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "import { PrismaClient } from '@prisma/client';\nimport { readReplicas } from '@prisma/extension-read-replicas';\n\nconst prisma = new PrismaClient().$extends(\n  readReplicas({\n    url: process.env.DATABASE_URL_REPLICA!\n  })\n);\n\n// Automatically queries replica:\nconst users = await prisma.user.findMany();\n\n// Force primary read for immediate consistency:\nconst freshUser = await prisma.$primary().user.findUnique({ where: { id: 1 } });",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Read Replicas Extension",
          "description": "প্রিজমাতে রিড রেপ্লিকা কনফিগারেশন।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Black Friday Traffic",
        "description": "মিলিয়ন মিলিয়ন ইউজার যখন ক্যাটালগ দেখে, তখন ট্রাফিক রেপ্লিকায় চলে যায়।"
      }
    ],
    "interviewTips": {
      "tip": "Read-after-write consistency নিশ্চিত করতে `$primary()` মেথডের ব্যবহার উল্লেখ করুন।",
      "avoidSaying": [
        {
          "wrong": "প্রিজমায় রিড রেপ্লিকা সাপোর্ট নেই।",
          "right": "অফিসিয়াল ক্লায়েন্ট এক্সটেনশন দিয়ে রিড রেপ্লিকা হ্যান্ডেল করা যায়।"
        }
      ]
    },
    "quickRevision": [
      "@prisma/extension-read-replicas routes writes to primary and reads to replicas."
    ],
    "followUpQuestions": [
      {
        "question": "What are the four sharding strategies in distributed databases?",
        "targetId": "scaling-four-sharding-types"
      }
    ],
    "tags": [
      "Prisma",
      "Read Replicas",
      "Scaling"
    ]
  },
  {
    "id": "scaling-four-sharding-types",
    "slug": "scaling-four-sharding-types",
    "question": "What are the core database sharding strategies (Range, Hash, Directory, Geographic)?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Advanced",
    "importance": "Must Know",
    "shortAnswer": "১) Range-Based (মান অনুযায়ী রেঞ্জ), ২) Hash-Based (হ্যাশ ফাংশন দিয়ে সুষম বণ্টন), ৩) Directory-Based (লুকআপ টেবিল ভিত্তিক), এবং ৪) Geo-Sharding (ভৌগোলিক অবস্থান অনুযায়ী)।",
    "easyExplanation": "Range হলো নামের আদ্যক্ষর (A-M, N-Z); Hash হলো অ্যালগরিদম দিয়ে সব সার্ভারে সমান ভাগ; Directory হলো কোন ডেটা কোথায় আছে তার ডিরেক্টরি রাখা; Geo হলো ইউরোপের ডেটা ইউরোপে, এশিয়ার ডেটা এশিয়ায় রাখা।",
    "interviewAnswer": "There are four primary database sharding architectures: 1) **Range-Based Sharding**: Data is partitioned based on contiguous value ranges (e.g. IDs 1-1M on Shard 1); simple, but prone to hotspotting. 2) **Hash-Based Sharding**: Shard key is hashed (`hash(key) % num_shards`) to evenly distribute records; prevents hotspots but makes range queries expensive. 3) **Directory-Based Sharding**: A central lookup directory tracks which shard holds each key; flexible, but the directory can become a bottleneck. 4) **Geographic / Location-Based Sharding**: Shards are placed near users geographically (e.g. EU shard, US shard) for low latency and data sovereignty compliance (GDPR).",
    "detailedExplanation": {
      "whatItIs": "ডিস্ট্রিবিউটেড ডাটাবেসে একাধিক সার্ভার নোডের মাঝে ডেটা ভাগ করার ৪টি মূল আর্কিটেকচার।",
      "whyItExists": "সিঙ্গেল মেশিনের সীমাবদ্ধতা ছাড়িয়ে সীমাহীন হরাইজন্টাল স্কেলিং নিশ্চিত করতে।",
      "howItWorks": "শার্ড কি এবং রাউটিং অ্যালগরিদম দিয়ে নির্দিষ্ট নোড নির্ধারণ করে।",
      "whenToUse": "গ্লোবাল স্কেল আর্কিটেকচারে।",
      "keyPoints": [
        "Range: Simple, prone to hotspots.",
        "Hash: Even distribution, expensive range scans.",
        "Directory: Dynamic, lookup table overhead.",
        "Geo: Low latency, GDPR compliance."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// Hash-based sharding routing function\nfunction getShardNode(userId: string, totalShards = 4): number {\n  const hash = crypto.createHash('md5').update(userId).digest('hex');\n  return parseInt(hash.substring(0, 8), 16) % totalShards;\n}",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Hash Routing",
          "description": "ইউজার আইডি হ্যাশ করে নির্দিষ্ট শার্ড নোড বের করা।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Global Multi-Region SaaS",
        "description": "ইউরোপের ইউজার ডেটা ইউরোপের শার্ডে রেখে জিডিপিআর আইন মানা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "কখন কোন শার্ডিং স্ট্র্যাটেজি বেছে নেবেন তার ট্রেড-অফ ব্যাখ্যা করুন।",
      "avoidSaying": [
        {
          "wrong": "সব শার্ডিং একই রকম কাজ করে।",
          "right": "হ্যাশ শার্ডিং হটস্পট রোধ করে, আর জিও শার্ডিং লেটেন্সি কমায়।"
        }
      ]
    },
    "quickRevision": [
      "Range (continuous), Hash (uniform), Directory (lookup), Geo (location & GDPR)."
    ],
    "followUpQuestions": [
      {
        "question": "What is the difference between horizontal and vertical scaling?",
        "targetId": "db-mock-c1-diff-horizontal-vertical-scaling"
      }
    ],
    "tags": [
      "Sharding",
      "Distributed Systems",
      "Scaling",
      "Architecture"
    ]
  },
  {
    "id": "prisma-schema-enums-attributes",
    "slug": "prisma-schema-enums-attributes",
    "question": "How do Enums and Field Attributes (@default, @updatedAt, @map) work in Prisma?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Beginner",
    "importance": "High",
    "shortAnswer": "Enums ডাটাবেস স্তরে নির্দিষ্ট অনুমোদিত মান সীমাবদ্ধ করে; আর `@default`, `@updatedAt`, `@map` ফিল্ডের আচরণ ও টেবিল কলামের নাম কাস্টমাইজ করে।",
    "easyExplanation": "রোল শুধু 'USER' বা 'ADMIN' হতে পারবে তা নিশ্চিত করে Enum; আর `@updatedAt` স্বয়ংক্রিয়ভাবে তারিখ আপডেট করে দেয়।",
    "interviewAnswer": "Enums in Prisma define strict custom scalar types with a finite set of allowed string values at the database engine level. Field attributes provide metadata: `@default()` sets initial values, `@updatedAt` automatically manages timestamp updates on mutations, and `@map()` maps Prisma camelCase properties to snake_case database columns without changing TypeScript code.",
    "detailedExplanation": {
      "whatItIs": "Prisma স্কিমার ফিল্ড কনফিগারেশন এবং ডাটাবেস লেভেল এনাম টাইপ।",
      "whyItExists": "ডেটা ইন্টিগ্রিটি ও ডেটাবেস নেমিং কনভেনশন সুন্দরভাবে হ্যান্ডেল করতে।",
      "howItWorks": "SQL DDL কমান্ডে ENUM তৈরি করে এবং ট্রিগার বা হ্যান্ডলারের মাধ্যমে updatedAt আপডেট করে।",
      "whenToUse": "ইউজার রোল, অর্ডার স্ট্যাটাস ও টাইমস্ট্যাম্প ফিল্ডে।",
      "keyPoints": [
        "Enums enforce integrity at the DB level.",
        "@map maps model property to DB column name."
      ]
    },
    "codeExample": {
      "language": "prisma",
      "code": "enum Role {\n  USER\n  ADMIN\n}\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  role      Role     @default(USER)\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n}",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Enums & Attributes",
          "description": "অ্যাট্রিবিউটের বাস্তব ব্যবহার।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "User Role Authorization",
        "description": "অ্যাসাইন করা রোল কেবল অনুমোদিত এনামের মধ্যে সীমাবদ্ধ রাখা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "@map এবং @@map-এর পার্থক্য বলুন: @map কলামের জন্য, @@map টেবিলের জন্য।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Enums restrict values; @map maps camelCase to snake_case columns."
    ],
    "followUpQuestions": [
      {
        "question": "How does Prisma prevent SQL Injection?",
        "targetId": "prisma-sql-injection-prevention"
      }
    ],
    "tags": [
      "Prisma",
      "Schema",
      "Enums"
    ]
  },
  {
    "id": "prisma-sql-injection-prevention",
    "slug": "prisma-sql-injection-prevention",
    "question": "How does Prisma prevent SQL Injection attacks?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Prisma Client সব কুয়েরি ইনপুট স্বয়ংক্রিয়ভাবে প্যারামিটারাইজড (Prepared Statements) করে পাঠায়, ফলে কাঁচা SQL ইনজেকশন অসম্ভব হয়ে যায়।",
    "easyExplanation": "ইউজারের ইনপুট কখনো সরাসরি SQL কমান্ড হিসেবে এক্সিকিউট হয় না, আলাদা নিরাপদ ডেটা ভ্যালু হিসেবে ডাটাবেসে যায়।",
    "interviewAnswer": "Prisma inherently prevents SQL Injection by compiling all query builder operations into parameterized SQL statements with prepared variables (`$1`, `$2`). Input values are never concatenated as raw strings. Even when executing raw queries via `$queryRaw`, Prisma uses tagged template literals to automatically parameterize dynamic variables.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেসের প্রধানতম সাইবার সিকিউরিটি হুমকি প্রতিরোধের মেকানিজম।",
      "whyItExists": "হ্যাকাররা যাতে কুয়েরি স্ট্রিংয়ের মাধ্যমে ডেটাবেস ড্রপ বা বাইপাস না করতে পারে।",
      "howItWorks": "কুয়েরি লজিক এবং ইউজার ডেটা সম্পূর্ণ আলাদা চ্যানেলে ডাটাবেস ইঞ্জিনে পাঠানো হয়।",
      "whenToUse": "সব কুয়েরিতে।",
      "keyPoints": [
        "All query builder methods are fully parameterized.",
        "`$queryRaw` uses ES6 tagged templates for safe parameterization.",
        "Never use `$queryRawUnsafe` with unescaped user input."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// 100% Safe from SQL injection via Tagged Template Literal:\nconst users = await prisma.$queryRaw`SELECT * FROM users WHERE email = ${userInput}`;\n\n// ❌ DANGEROUS: Do not use queryRawUnsafe with template strings!\n// await prisma.$queryRawUnsafe(`SELECT * FROM users WHERE email = '${userInput}'`);",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Safe Raw Query",
          "description": "ট্যাগড টেমপ্লেটের মাধ্যমে স্বয়ংক্রিয় প্যারামিটারাইজেশন।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Login & Search Forms",
        "description": "হ্যাকার 'OR 1=1' ইনপুট দিলেও তা স্ট্রিং হিসেবে সার্চ হবে, SQL কমান্ড হিসেবে নয়।"
      }
    ],
    "interviewTips": {
      "tip": "$queryRaw বনাম $queryRawUnsafe-এর পার্থক্য উল্লেখ করুন।",
      "avoidSaying": [
        {
          "wrong": "$queryRaw-তে স্ট্রিং কনক্যাট করে লিখি।",
          "right": "$queryRaw-তে ট্যাগড টেমপ্লেট লিটারেল ব্যবহার করি।"
        }
      ]
    },
    "quickRevision": [
      "Prisma parameterizes all queries automatically."
    ],
    "followUpQuestions": [
      {
        "question": "What are the limitations of Prisma ORM?",
        "targetId": "prisma-limitations-and-tradeoffs"
      }
    ],
    "tags": [
      "Prisma",
      "Security",
      "SQL Injection"
    ]
  },
  {
    "id": "prisma-limitations-and-tradeoffs",
    "slug": "prisma-limitations-and-tradeoffs",
    "question": "What are the limitations and tradeoffs of using Prisma in production?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Advanced",
    "importance": "High",
    "shortAnswer": "বাইনারি সাইজ (রাস্ট কোয়েরি ইঞ্জিন সার্ভারলেসে কিছুটা বড়), অত্যন্ত জটিল অ্যানালিটিক্যাল কুয়েরিতে কাঁচা SQL প্রয়োজন হওয়া, এবং হাই-কনকারেন্সিতে মেমরি কনফিগারেশন।",
    "easyExplanation": "সাধারণ কুয়েরির জন্য প্রিজমা সেরা, তবে জটিল অ্যানালিটিক্স বা উইন্ডো ফাংশনের জন্য `$queryRaw` লিখতে হয়।",
    "interviewAnswer": "While Prisma offers unmatched developer experience, engineering tradeoffs include: 1) **Binary Engine Size**: The compiled Rust engine increases deployment bundle sizes slightly in lambda cold-starts (mitigated by Prisma Accelerate). 2) **Complex Analytics**: Advanced SQL features like recursive CTEs or complex window functions must be written using `$queryRaw`. 3) **Connection Limits**: In serverless functions without pooling, spawning multiple Prisma instances can exhaust database connections.",
    "detailedExplanation": {
      "whatItIs": "Prisma ব্যবহারের বাস্তব ইঞ্জিনিয়ারিং ট্রেড-অফ ও সীমাবদ্ধতা।",
      "whyItExists": "সিস্টেম ডিজাইনে অন্ধভাবে টুল নির্বাচন না করে সচেতন সিদ্ধান্ত নিতে।",
      "howItWorks": "রাস্ট বাইনারি ও ক্লায়েন্ট ইন্টারঅ্যাকশনের আর্কিটেকচারাল প্রভাব।",
      "whenToUse": "টেকনোলজি স্ট্যাক মূল্যায়নের সময়।",
      "keyPoints": [
        "Serverless connection spikes require PgBouncer or Accelerate.",
        "Complex recursive CTEs need $queryRaw.",
        "Type generation requires build step."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// When Prisma query builder is not expressive enough, use $queryRaw\nconst complexReport = await prisma.$queryRaw`\n  WITH RECURSIVE CategoryTree AS (\n    SELECT id, name, parent_id FROM categories WHERE parent_id IS NULL\n    UNION ALL\n    SELECT c.id, c.name, c.parent_id FROM categories c\n    JOIN CategoryTree ct ON c.parent_id = ct.id\n  )\n  SELECT * FROM CategoryTree;\n`;",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Recursive CTE",
          "description": "জটিল কুয়েরিতে $queryRaw ব্যবহারের উদাহরণ।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "High-Frequency Trading & Complex Reporting",
        "description": "জটিল রিপোর্টিংয়ের জন্য ডেডিকেটেড কাঁচা SQL কুয়েরি চালানো হয়।"
      }
    ],
    "interviewTips": {
      "tip": "টুলের প্রশংসা করার পাশাপাশি তার সীমাবদ্ধতা সৎভাবে তুলে ধরলে সিনিয়র ডেভেলপার হিসেবে বিশ্বাসযোগ্যতা বাড়ে।",
      "avoidSaying": [
        {
          "wrong": "প্রিজমায় কোনো সীমাবদ্ধতা নেই, সবকিছুই করা যায়।",
          "right": "জটিল রিকার্সিভ কুয়েরি ও সার্ভারলেস কানেকশন পুলিংয়ে কিছু ট্রেডঅফ আছে।"
        }
      ]
    },
    "quickRevision": [
      "Prisma excels at DX; complex recursive SQL falls back to $queryRaw."
    ],
    "followUpQuestions": [
      {
        "question": "What is Prisma Accelerate and Pulse?",
        "targetId": "prisma-accelerate-pulse"
      }
    ],
    "tags": [
      "Prisma",
      "Tradeoffs",
      "Performance",
      "Architecture"
    ]
  },
  {
    "id": "prisma-accelerate-pulse",
    "slug": "prisma-accelerate-pulse",
    "question": "What are Prisma Accelerate and Prisma Pulse?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Advanced",
    "importance": "Medium",
    "shortAnswer": "Prisma Accelerate হলো গ্লোবাল এজ কানেকশন পুলিং ও ক্যাশিং সার্ভিস; আর Prisma Pulse হলো ডাটাবেসের চেঞ্জ স্ট্রিম রিয়েল-টাইমে সাবস্ক্রাইব করার ইভেন্ট সার্ভিস।",
    "easyExplanation": "Accelerate সার্ভারলেসে ডাটাবেস ক্র্যাশ হতে দেয় না এবং ক্যাশ করে; Pulse ডাটাবেসে কিছু পরিবর্তন হলে সাথে সাথে নোটিফিকেশন পাঠায়।",
    "interviewAnswer": "Prisma Accelerate is a managed connection pooler and global edge cache that eliminates serverless cold starts and scales read traffic globally without database strain. Prisma Pulse is a managed Change Data Capture (CDC) event stream service that lets your Node.js backend react in real time whenever records are created, updated, or deleted in your database without complex Kafka setups.",
    "detailedExplanation": {
      "whatItIs": "Prisma-র আধুনিক ক্লাউড স্কেলিং ও রিয়েল-টাইম সার্ভিসসমূহ।",
      "whyItExists": "সার্ভারলেস কানেকশন ক্র্যাশ রোধ করতে এবং রিয়েল-টাইম আর্কিটেকচার সহজ করতে।",
      "howItWorks": "Accelerate এজ প্রক্সির মাধ্যমে ক্যাশ করে; Pulse ডাটাবেসের WAL রেপ্লিকেশন লগ পড়ে ইভেন্ট ফায়ার করে।",
      "whenToUse": "সার্ভারলেস নেক্সট.জেএস অ্যাপ্লিকেশন ও রিয়েল-টাইম চ্যাট/নোটিফিকেশনে।",
      "keyPoints": [
        "Accelerate: Edge connection pooling and stale-while-revalidate caching.",
        "Pulse: Real-time database event subscriptions via CDC."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// Prisma Accelerate Cache Example:\nconst user = await prisma.user.findUnique({\n  where: { id: 1 },\n  cacheStrategy: { ttl: 60, swr: 30 } // Cached at global edge for 60s!\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Edge Caching",
          "description": "গ্লোবাল এজ ক্যাশিংয়ের উদাহরণ।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Real-time Order Updates",
        "description": "অর্ডার স্ট্যাটাস বদলালে Pulse দিয়ে সাথে সাথে ড্রাইভার ও কাস্টমারকে নোটিফাই করা।"
      }
    ],
    "interviewTips": {
      "tip": "আধুনিক সার্ভারলেস ও রিয়েল-টাইম ইকোসিস্টেমে এই দুটি টুলের ভূমিকা তুলে ধরুন।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Accelerate = Global connection pooler & cache; Pulse = Real-time CDC events."
    ],
    "followUpQuestions": [
      {
        "question": "What is database replication?",
        "targetId": "db-mock-c5-database-replication"
      }
    ],
    "tags": [
      "Prisma",
      "Serverless",
      "Edge",
      "Real-Time"
    ]
  },
  {
    "id": "prisma-crud-operations-deep-dive",
    "slug": "prisma-crud-operations-deep-dive",
    "question": "Explain Prisma CRUD Operations: upsert, createMany, deleteMany, and updateMany.",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Beginner",
    "importance": "Must Know",
    "shortAnswer": "upsert রেকর্ড থাকলে আপডেট করে না থাকলে তৈরি করে; createMany/updateMany/deleteMany একবারে ব্যাচ অপারেশনের মাধ্যমে একাধিক রেকর্ড প্রসেস করে।",
    "easyExplanation": "আলাদা খোঁজা ও সেভ করার বদলে `upsert` এক লাইনেই চেক করে থাকলে আপডেট, না থাকলে নতুন রেকর্ড বানিয়ে দেয়।",
    "interviewAnswer": "Prisma provides expressive CRUD methods: `upsert` atomically creates a record if it does not exist, or updates it if found based on a unique identifier; `createMany` executes a bulk SQL INSERT for arrays of data; `updateMany` and `deleteMany` execute batch mutations satisfying where conditions in a single query.",
    "detailedExplanation": {
      "whatItIs": "Prisma-র কোর ডেটা ম্যানিপুলেশন মেথডস।",
      "whyItExists": "লুপ চালিয়ে আলাদা আলাদা কুয়েরি না করে ব্যাচ অপারেশনে পারফরম্যান্স বাড়াতে।",
      "howItWorks": "একক SQL স্টেটমেন্টে একাধিক রেকর্ড প্রসেস করে।",
      "whenToUse": "সব ব্যাকএন্ড সার্ভিসে।",
      "keyPoints": [
        "upsert guarantees atomicity.",
        "createMany is batched in a single SQL round-trip."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// Atomically upsert user preferences\nconst user = await prisma.user.upsert({\n  where: { email: 'tanvir@example.com' },\n  update: { name: 'Tanvir Ahmed' },\n  create: { email: 'tanvir@example.com', name: 'Tanvir Ahmed' }\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "upsert",
          "description": "রেকর্ড থাকলে আপডেট, না থাকলে ইনসার্ট।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "OAuth User Login Sync",
        "description": "গুগল লগইনের সময় ইউজার আগে থেকেই থাকলে আপডেট, না থাকলে স্বয়ংক্রিয় রেজিস্ট্রেশন।"
      }
    ],
    "interviewTips": {
      "tip": "upsert রেস কন্ডিশন রোধ করে তা ব্যাখ্যা করুন।",
      "avoidSaying": []
    },
    "quickRevision": [
      "upsert = update or insert atomically."
    ],
    "followUpQuestions": [
      {
        "question": "What is Prisma connection pooling?",
        "targetId": "db-mock-c5-prisma-connection-pooling"
      }
    ],
    "tags": [
      "Prisma",
      "CRUD",
      "upsert"
    ]
  },
  {
    "id": "prisma-pagination-techniques",
    "slug": "prisma-pagination-techniques",
    "question": "Offset vs Cursor-based Pagination in Prisma: When to use which?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Intermediate",
    "importance": "Must Know",
    "shortAnswer": "Offset pagination (`skip` + `take`) সহজ কিন্তু বড় ডেটাসেটে স্লো; Cursor pagination (`cursor` + `take`) বড় ডেটাসেট ও ইনফিনিট স্ক্রোলের জন্য অত্যন্ত দ্রুত ও স্কেলেবল।",
    "easyExplanation": "Offset হলো ৫০ নম্বর পাতা খুলে দেখা (মাঝের সব গুনতে হয়); Cursor হলো 'লাস্ট দেখা পোস্টের পর থেকে ১০টা দাও' বলা।",
    "interviewAnswer": "Prisma supports both paradigms: **Offset Pagination** uses `skip` and `take`. While simple and supports jumping to arbitrary page numbers, it degrades on large offsets (e.g. `skip: 100000`) because the DB must scan and discard 100,000 rows. **Cursor-based Pagination** uses `cursor: { id: lastSeenId }` and `take: 10`. It leverages index seeks (`WHERE id > lastSeenId LIMIT 10`), providing constant O(1) time regardless of depth, making it ideal for infinite scroll feeds.",
    "detailedExplanation": {
      "whatItIs": "বিশাল ডেটাসেটকে ধাপে ধাপে ক্লায়েন্টে পাঠানোর দুটি প্রধান টেকনিক।",
      "whyItExists": "সব ডেটা একবারে মেমরিতে লোড না করে কুয়েরি দ্রুত রাখতে।",
      "howItWorks": "Offset গুনে গুনে স্কিপ করে; Cursor সরাসরি ইনডেক্স জাম্প করে।",
      "whenToUse": "এডমিন টেবিলে Offset; মোবাইল অ্যাপ ও সোশ্যাল ফিডে Cursor।",
      "keyPoints": [
        "Offset causes skipped row scans.",
        "Cursor provides O(1) performance using index seeks."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "// Cursor-based pagination in Prisma:\nconst posts = await prisma.post.findMany({\n  take: 10,\n  skip: 1, // Skip cursor record\n  cursor: { id: lastPostId },\n  orderBy: { id: 'asc' }\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Cursor Pagination",
          "description": "লাস্ট আইডির পর থেকে ১০টি রেকর্ড ফেচ।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Twitter / TikTok Infinite Feeds",
        "description": "ইউজার যত নিচে স্ক্রোল করুক, কার্সর পেজিনেশনের কারণে স্পিড সবসময় একই থাকে।"
      }
    ],
    "interviewTips": {
      "tip": "কেন বড় ডেটাসেটে `skip: 50000` ডেটাবেসকে ধ্বংস করে দেয় তা ব্যাখ্যা করুন।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Offset for page jumping; Cursor for infinite scroll and massive tables."
    ],
    "followUpQuestions": [
      {
        "question": "What is database sharding?",
        "targetId": "db-mock-c4-database-sharding"
      }
    ],
    "tags": [
      "Prisma",
      "Pagination",
      "Performance"
    ]
  },
  {
    "id": "prisma-nested-writes-and-transactions",
    "slug": "prisma-nested-writes-and-transactions",
    "question": "What are Nested Writes in Prisma and how do they ensure transactional integrity?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Intermediate",
    "importance": "High",
    "shortAnswer": "Nested Writes এক অপারেশনের ভেতরেই সম্পর্কিত প্যারেন্ট ও চাইল্ড রেকর্ড (যেমন User এবং Post) স্বয়ংক্রিয় ACID ট্রানজ্যাকশনের মধ্যে তৈরি বা আপডেট করতে দেয়।",
    "easyExplanation": "আলাদা করে ইউজার বানিয়ে আইডি নিয়ে পোস্ট বানাতে হয় না; `create: { name: '...', posts: { create: [...] } }` দিলে প্রিজমা নিজেই এক ট্রানজ্যাকশনে দুটো সেভ করে।",
    "interviewAnswer": "Nested Writes allow you to create, update, or connect related records within a single operation. Prisma wraps the entire nested write block inside an automated, native database transaction. If creating the child records fails, the parent record is automatically rolled back, ensuring referential integrity without manual transaction code.",
    "detailedExplanation": {
      "whatItIs": "সম্পর্কযুক্ত মডেলগুলোর একযোগে ডেটাবেসে রাইট করার মেকানিজম।",
      "whyItExists": "ফরেন কি রিলেশন তৈরিতে ম্যানুয়াল আইডি ট্র্যাকিং ও রোলব্যাকের কোড কমাতে।",
      "howItWorks": "প্রিজমা ইঞ্জিন ইন্টারনালি `BEGIN` এবং `COMMIT` ব্লকে স্টেটমেন্টগুলো এক্সিকিউট করে।",
      "whenToUse": "অর্ডার ও অর্ডার আইটেমস, ইউজার ও প্রোফাইল একসাথে সেভ করতে।",
      "keyPoints": [
        "Automatically atomic under the hood.",
        "Supports `create`, `connect`, `connectOrCreate`, `disconnect`."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "const userWithProfile = await prisma.user.create({\n  data: {\n    email: 'tanvir@example.com',\n    profile: {\n      create: { bio: 'Software Architect' } // Atomically created!\n    }\n  }\n});",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Nested Write",
          "description": "এক কুয়েরিতেই ইউজার ও প্রোফাইল স্বয়ংক্রিয় ট্রানজ্যাকশনে সেভ।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "E-Commerce Checkout Order Creation",
        "description": "অর্ডারের মূল তথ্যের সাথে ১০টি অর্ডার আইটেম এক নিমেষে নেস্টেড রাইটে সেভ করা হয়।"
      }
    ],
    "interviewTips": {
      "tip": "নেস্টেড রাইট স্বয়ংক্রিয়ভাবে ট্রানজ্যাকশনে চলে, আলাদা করে $transaction লেখার দরকার হয় না।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Nested writes execute atomically in a single automatic database transaction."
    ],
    "followUpQuestions": [
      {
        "question": "What happens when a Prisma transaction fails?",
        "targetId": "db-mock-c3-prisma-transaction-failure"
      }
    ],
    "tags": [
      "Prisma",
      "Nested Writes",
      "Transactions"
    ]
  },
  {
    "id": "prisma-optimistic-locking-concurrency",
    "slug": "prisma-optimistic-locking-concurrency",
    "question": "How do you implement Optimistic Concurrency Control (Optimistic Locking) in Prisma?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Advanced",
    "importance": "High",
    "shortAnswer": "মডেলে একটি `version` ইন্টিজার ফিল্ড রেখে আপডেটের সময় `where: { id, version }` এবং `data: { version: { increment: 1 } }` দিয়ে কনকারেন্ট ওভাররাইট রোধ করা হয়।",
    "easyExplanation": "দুজন মানুষ একই সাথে একই ফাইল এডিট করলে যাতে একজনের লেখা আরেকজনের অজান্তে মুছে না যায়, সেজন্য ভার্সন নম্বর চেক করা হয়।",
    "interviewAnswer": "Optimistic Concurrency Control in Prisma is implemented by maintaining a `version Int @default(0)` column on the model. When mutating a record, you include the expected version in the `where` clause and increment it: `where: { id, version: currentVersion }, data: { ...updates, version: { increment: 1 } }`. If another concurrent request mutated the record first, the version check fails, no rows are updated, and Prisma throws a record not found error, preventing lost updates without holding heavy database row locks.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেসে পেসিমিজটিক লক না নিয়ে কনকারেন্ট রাইট কনফ্লিক্ট ঠেকানোর প্যাটার্ন।",
      "whyItExists": "লক ছাড়াই উচ্চ পারফরম্যান্স ও কনকারেন্সি নিশ্চিত করতে।",
      "howItWorks": "ভার্সন নম্বর মিলিয়ে দেখা হয়; মিললে ১ বাড়িয়ে সেভ করে, অমিল হলে রিজেক্ট করে।",
      "whenToUse": "টিকিট বুকিং, ব্যাংক ব্যালেন্স এবং ইনভেন্টরি ম্যানেজমেন্টে।",
      "keyPoints": [
        "No database row locking required.",
        "Detects concurrent conflicts and allows retry.",
        "Prevents the classic 'Lost Update' problem."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "async function updateTicket(ticketId: number, currentVersion: number, newOwner: string) {\n  return await prisma.ticket.update({\n    where: { id: ticketId, version: currentVersion },\n    data: {\n      owner: newOwner,\n      version: { increment: 1 }\n    }\n  });\n}",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Optimistic Lock",
          "description": "ভার্সন ম্যাচ না করলে আপডেট ফেইল করবে।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Airline Seat Reservation",
        "description": "একই সিট দুজন একসাথে ক্লিক করলে শুধুমাত্র ১ম জনের ভার্সন ম্যাচ করবে, ২য় জন কনফ্লিক্ট এরর দেখবে।"
      }
    ],
    "interviewTips": {
      "tip": "Pessimistic Locking (SELECT FOR UPDATE) বনাম Optimistic Locking-এর পার্থক্য তুলে ধরুন।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Optimistic Locking uses version column checking to prevent lost updates."
    ],
    "followUpQuestions": [
      {
        "question": "What is a transaction deadlock?",
        "targetId": "db-mock-c5-transaction-deadlock"
      }
    ],
    "tags": [
      "Prisma",
      "Optimistic Locking",
      "Concurrency"
    ]
  },
  {
    "id": "prisma-seeding-best-practices",
    "slug": "prisma-seeding-best-practices",
    "question": "How does Database Seeding work in Prisma (`prisma/seed.ts`)?",
    "category": "Prisma",
    "categorySlug": "prisma",
    "difficulty": "Beginner",
    "importance": "Medium",
    "shortAnswer": "Prisma-তে `prisma/seed.ts` স্ক্রিপ্ট এবং package.json-এর `prisma.seed` কনফিগ দিয়ে টেস্ট ডেটা ও ইনিশিয়াল অ্যাডমিন ডেটা স্বয়ংক্রিয়ভাবে ইনজেক্ট করা যায়।",
    "easyExplanation": "প্রজেক্ট নতুন ক্লোন করার পর প্রাথমিক ক্যাটাগরি বা অ্যাডমিন একাউন্ট ডাটাবেসে এক ক্লিকে ঢুকিয়ে দেওয়ার মেকানিজম।",
    "interviewAnswer": "Prisma provides integrated database seeding. You create a TypeScript file at `prisma/seed.ts`, populate records using standard Prisma Client calls, and configure `\"prisma\": { \"seed\": \"ts-node prisma/seed.ts\" }` in your `package.json`. Running `npx prisma db seed` (or automatically via `prisma migrate reset`) executes the script, guaranteeing reproducible testing and development environments.",
    "detailedExplanation": {
      "whatItIs": "ডাটাবেসে প্রারম্ভিক ডামি বা কনফিগারেশন ডেটা স্বয়ংক্রিয়ভাবে প্রবেশ করানোর পদ্ধতি।",
      "whyItExists": "টিমের সব ডেভেলপারের লোকাল ডাটাবেস যেন একই প্রাথমিক ডেটা দিয়ে টেস্ট করা যায়।",
      "howItWorks": "প্রিজমা সিআই বা মাইগ্রেশন রিসেটের পর সিড স্ক্রিপ্ট রান করে।",
      "whenToUse": "ডেভেলপমেন্ট সেটআপ ও ইন্টিগ্রেশন টেস্টিংয়ে।",
      "keyPoints": [
        "Defined in `prisma/seed.ts`.",
        "Triggered via `npx prisma db seed`.",
        "Use upsert to make seeds idempotent so they can run multiple times safely."
      ]
    },
    "codeExample": {
      "language": "typescript",
      "code": "import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nasync function main() {\n  await prisma.user.upsert({\n    where: { email: 'admin@system.local' },\n    update: {},\n    create: { email: 'admin@system.local', name: 'Admin', role: 'ADMIN' }\n  });\n}\nmain().finally(() => prisma.$disconnect());",
      "explanationSteps": [
        {
          "step": 1,
          "title": "Idempotent Seed",
          "description": "upsert ব্যবহারের ফলে একাধিকবার চালালেও ডুপ্লিকেট এরর হয় না।"
        }
      ]
    },
    "realWorldExamples": [
      {
        "title": "Initial Country & Currency Seeds",
        "description": "সিস্টেমের ফিক্সড কারেন্সি ও দেশের লিস্ট ডাটাবেসে সিড করা।"
      }
    ],
    "interviewTips": {
      "tip": "সিড স্ক্রিপ্টকে Idempotent বানাতে `upsert` ব্যবহার করার কথা বলুন।",
      "avoidSaying": []
    },
    "quickRevision": [
      "Prisma seeding injects baseline test data idempotently."
    ],
    "followUpQuestions": [
      {
        "question": "What is the difference between findUnique and findFirst in Prisma?",
        "targetId": "db-mock-c2-diff-findunique-findfirst"
      }
    ],
    "tags": [
      "Prisma",
      "Seeding",
      "DevOps"
    ]
  }
];
