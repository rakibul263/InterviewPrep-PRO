import type { Metadata } from "next";
import { Inter, Hind_Siliguri, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { UserProgressProvider } from "@/hooks/useUserProgress";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InterviewPrep PRO | বাংলা জব ইন্টারভিউ প্রস্তুতি",
  description:
    "Modern, clean interview preparation portal for JavaScript, TypeScript, React, Next.js, Node.js, and Full-Stack Engineering with simple natural Bangla explanations.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${inter.variable} ${hindSiliguri.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#faf7f2] text-[#2c2520] antialiased selection:bg-[#d4a96a] selection:text-[#2c2520] dark:bg-[#0c0d12] dark:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-950"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProgressProvider>
            <div className="flex min-h-screen">
              {/* Desktop Sidebar */}
              <Sidebar />

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col md:pl-64 min-w-0">
                <Header />
                <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
                  {children}
                </main>
              </div>
            </div>
          </UserProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
