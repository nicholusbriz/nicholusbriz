import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "Atbriz - Software Developer | Nicholus Turyamureba",
    template: "%s | Atbriz - Software Developer"
  },
  description: "Atbriz is the professional brand of Nicholus Turyamureba, a Software Developer and Full-Stack Engineer based in Kampala, Uganda. Specializing in React, Next.js, Node.js, and building innovative digital solutions.",
  keywords: [
    "Atbriz",
    "Nicholus Turyamureba",
    "Software Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Kampala Uganda",
    "Full-Stack Engineer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL"
  ],
  authors: [{ name: "Nicholus Turyamureba", url: "https://github.com/nicholusbriz" }],
  creator: "Nicholus Turyamureba",
  publisher: "Atbriz",
  metadataBase: new URL("https://nicholusbriz.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicholusbriz.vercel.app",
    siteName: "Atbriz",
    title: "Atbriz - Software Developer | Nicholus Turyamureba",
    description: "Atbriz is the professional brand of Nicholus Turyamureba, a Software Developer and Full-Stack Engineer based in Kampala, Uganda. Specializing in React, Next.js, Node.js, and building innovative digital solutions.",
    images: [
      {
        url: "/nicholusbriz.png",
        width: 800,
        height: 800,
        alt: "Nicholus Turyamureba - Atbriz Software Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Atbriz - Software Developer | Nicholus Turyamureba",
    description: "Atbriz is the professional brand of Nicholus Turyamureba, a Software Developer and Full-Stack Engineer based in Kampala, Uganda.",
    images: ["/nicholusbriz.png"],
    creator: "@nicholusbriz"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "googlec261d0559dd1f6cb"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nicholus Turyamureba",
    "alternateName": "Atbriz",
    "jobTitle": "Software Developer",
    "description": "Software Developer and Full-Stack Engineer based in Kampala, Uganda. Specializing in React, Next.js, Node.js, and building innovative digital solutions.",
    "url": "https://nicholusbriz.vercel.app",
    "image": "https://nicholusbriz.vercel.app/nicholusbriz.png",
    "sameAs": [
      "https://github.com/nicholusbriz",
      "https://www.linkedin.com/in/nicholus-turyamureba-194363378",
      "https://wa.me/256761996296"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kampala",
      "addressCountry": "Uganda"
    },
    "email": "turyamurebanicholus@gmail.com",
    "telephone": "+256761996296",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Brigham Young University–Idaho"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Web Development",
      "Full-Stack Development",
      "Software Engineering"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Atbriz",
      "url": "https://nicholusbriz.vercel.app"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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