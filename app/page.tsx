import { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: "Nicholus Turyamureba (Atbriz) - Software Developer",
  description: "Hi, I'm Nicholus Turyamureba (Atbriz), a Software Engineer & Full-Stack Developer based in Kampala, Uganda. I build exceptional digital experiences that solve real-world problems using React, Next.js, Node.js, and modern technologies.",
  keywords: ["Software Developer", "Full-Stack Developer", "Nicholus Turyamureba", "Atbriz", "React Developer", "Next.js Developer", "Web Development", "Kampala Uganda", "Software Engineer"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app",
  },
  openGraph: {
    title: "Nicholus Turyamureba (Atbriz) - Software Developer",
    description: "Hi, I'm Nicholus Turyamureba (Atbriz), a Software Engineer & Full-Stack Developer based in Kampala, Uganda. I build exceptional digital experiences that solve real-world problems.",
    url: "https://nicholusbriz.vercel.app",
  },
};

export default function HomePage() {
  return <HomeContent />;
}