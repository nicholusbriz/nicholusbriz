import { Metadata } from 'next';
import ProjectsContent from '@/components/ProjectsContent';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio projects of Nicholus Turyamureba (Atbriz). Featuring web applications, management systems, tourism platforms, and community projects built with React, Next.js, and modern technologies.",
  keywords: ["Projects", "Portfolio", "Web Applications", "Management Systems", "Tourism Platforms", "React Projects", "Next.js Projects", "Atbriz Projects", "Nicholus Turyamureba Projects"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app/projects",
  },
  openGraph: {
    title: "Projects | Atbriz - Software Developer",
    description: "Explore the portfolio projects of Nicholus Turyamureba (Atbriz). Featuring web applications, management systems, tourism platforms, and community projects built with React, Next.js, and modern technologies.",
    url: "https://nicholusbriz.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}