import { Metadata } from 'next';
import SkillsContent from '@/components/SkillsContent';

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description: "Explore the technical skills and expertise of Nicholus Turyamureba (Atbriz). Proficient in React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and modern web development technologies.",
  keywords: ["Skills", "Technical Skills", "React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Web Development", "Full-Stack Skills", "Atbriz Skills"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app/skills",
  },
  openGraph: {
    title: "Skills & Expertise | Atbriz - Software Developer",
    description: "Explore the technical skills and expertise of Nicholus Turyamureba (Atbriz). Proficient in React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and modern web development technologies.",
    url: "https://nicholusbriz.vercel.app/skills",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}