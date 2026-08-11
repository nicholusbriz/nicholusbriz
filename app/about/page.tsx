import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: "About | Atbriz - Software Developer",
  description: "Learn about Nicholus Turyamureba (Atbriz), a Software Engineer based in Kampala, Uganda. Discover my journey, values, education, and passion for building innovative solutions.",
  keywords: ["About", "Software Engineer", "Nicholus Turyamureba", "Atbriz", "Software Developer", "Kampala Uganda", "Full-Stack Developer", "About Me"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app/about",
  },
  openGraph: {
    title: "About | Atbriz - Software Developer",
    description: "Learn about Nicholus Turyamureba (Atbriz), a Software Engineer based in Kampala, Uganda. Discover my journey, values, education, and passion for building innovative solutions.",
    url: "https://nicholusbriz.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}