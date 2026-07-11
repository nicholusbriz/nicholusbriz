import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedSidebar from "@/components/AnimeSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicholus Turyamureba (atbriz) - Software Developer | Freedom City Tech Center",
  description: "Nicholus Turyamureba (atbriz) - Ugandan software developer and Selfless CE at Freedom City Tech Center. BYU–Idaho graduate with Bachelor's in Software Development. Expert in React, TypeScript, Next.js, and building digital platforms that connect communities.",
  keywords: ["Nicholus Turyamureba", "atbriz", "Freedom City Tech Center", "Selfless CE", "Software Developer", "Uganda", "BYU–Idaho", "React", "TypeScript", "Next.js", "Web Development", "Full Stack Developer"],
  authors: [{ name: "Nicholus Turyamureba" }],
  creator: "Nicholus Turyamureba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicholusbriz.vercel.app",
    title: "Nicholus Turyamureba (atbriz) - Software Developer",
    description: "Ugandan software developer and Selfless CE at Freedom City Tech Center. BYU–Idaho graduate specializing in React, TypeScript, and community-driven development.",
    siteName: "Nicholus Turyamureba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicholus Turyamureba (atbriz) - Software Developer",
    description: "Ugandan software developer and Selfless CE at Freedom City Tech Center. BYU–Idaho graduate specializing in React, TypeScript, and community-driven development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'CWp1CoMCJwY7mM1h2Ds4IjRT6rRLqmNL3hy8-mU_MLQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Animated Sidebar */}
          <AnimatedSidebar />

          {/* Main Content Area */}
          <main className="lg:ml-64 pt-4 lg:pt-0">
            <div className="min-h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
