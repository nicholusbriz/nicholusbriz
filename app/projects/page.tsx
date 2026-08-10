'use client';

import { useState } from 'react';
import { ExternalLink, ArrowRight, Code, Database, Layout, Server } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Apps', 'Management Systems', 'Tourism', 'Agriculture', 'Community'];

  const projects = [
    {
      id: 'avora',
      title: 'Avora Pig Farming Website',
      description: 'A comprehensive pig farming management website for Avora, featuring farm monitoring, herd management, and production tracking.',
      image: '/avora.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
      category: 'Agriculture',
      link: 'https://nicholusbriz.github.io/avora-pig-framing-website-/',
      featured: true,
    },
    {
      id: 'freedom',
      title: 'Freedom City Tech Center',
      description: 'A management system for Freedom City Tech Center, built to organize and administer the center\'s day-to-day operations.',
      image: '/freedom.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
      category: 'Management Systems',
      link: 'https://selfless-henna.vercel.app/',
      featured: true,
    },
    {
      id: 'liahona',
      title: 'Liahona Tourism Booking',
      description: 'A tourism booking website built for Liahona Company, letting visitors browse tours and make bookings online.',
      image: '/tourism.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
      category: 'Tourism',
      link: 'https://liahona.vercel.app/',
      featured: false,
    },
    {
      id: 'community',
      title: 'Community Website',
      description: 'A community platform designed to connect people and foster engagement through shared interests and collaborative features.',
      image: '/community.png',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
      category: 'Community',
      link: 'https://community-website-sigma.vercel.app/',
      featured: false,
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  const getTechIcon = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('react') || lowerTag.includes('next')) return <Code size={14} />;
    if (lowerTag.includes('sql') || lowerTag.includes('mongo')) return <Database size={14} />;
    if (lowerTag.includes('css') || lowerTag.includes('tailwind')) return <Layout size={14} />;
    if (lowerTag.includes('node') || lowerTag.includes('api')) return <Server size={14} />;
    return <Code size={14} />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-lg text-[#bbcbb2] max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and expertise
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#2fe92b] text-[#0f0f0f]'
                    : 'bg-[#1b1b1d] text-[#bbcbb2] hover:text-white hover:bg-[#2a2a2c]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-[#0f0f0f] rounded-lg border border-[#26272d] overflow-hidden hover:border-[#2fe92b]/50 transition-colors"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-[#bbcbb2] mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-[#1b1b1d] rounded text-xs text-[#bbcbb2]"
                        >
                          {getTechIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#2fe92b] hover:text-[#2fe92b]/80 transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-[#bbcbb2] mb-4 line-clamp-2 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#0f0f0f] rounded text-xs text-[#bbcbb2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2fe92b] hover:text-[#2fe92b]/80 transition-colors text-sm"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
          <p className="text-[#bbcbb2] mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2fe92b] text-[#0f0f0f] rounded-lg font-medium hover:bg-[#2fe92b]/90 transition-colors"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}