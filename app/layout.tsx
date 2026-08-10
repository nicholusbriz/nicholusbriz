import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Nicholus Turyamureba - Software Engineer",
  description: "Portfolio of Nicholus Turyamureba, a Software Engineer specializing in full-stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#000000] text-[#ffffff]">
        <SmoothScroll />
        <Header />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}