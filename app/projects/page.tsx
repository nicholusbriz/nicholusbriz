'use client';

import { ExternalLink, ArrowRight, Code, Database, Layout, Server, Smartphone, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'liahona',
      title: 'Liahona Tourism Booking',
      description:
        'A tourism booking website built for Liahona Company, letting visitors browse tours and make bookings online.',
      image: '/tourism.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Booking System'],
      link: 'https://liahona.vercel.app/',
      featured: true,
      status: 'Live',
      year: '2024',
    },
    {
      id: 'freedom',
      title: 'Freedom City Tech Center',
      description:
        "A management system for Freedom City Tech Center, built to organize and administer the center's day-to-day operations.",
      image: '/freedom.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Admin Dashboard'],
      link: 'https://selfless-henna.vercel.app/',
      featured: false,
      status: 'Live',
      year: '2024',
    },
    {
      id: 'community',
      title: 'Community Website',
      description:
        'A community platform designed to connect people and foster engagement through shared interests and collaborative features.',
      image: '/community.png',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Community Platform'],
      link: 'https://community-website-sigma.vercel.app/',
      featured: false,
      status: 'Live',
      year: '2024',
    },
  ];

  const getTechIcon = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('react') || lowerTag.includes('next')) return <Code size={14} />;
    if (lowerTag.includes('sql') || lowerTag.includes('mongo')) return <Database size={14} />;
    if (lowerTag.includes('css') || lowerTag.includes('tailwind')) return <Layout size={14} />;
    if (lowerTag.includes('node') || lowerTag.includes('api')) return <Server size={14} />;
    if (lowerTag.includes('mobile') || lowerTag.includes('app')) return <Smartphone size={14} />;
    return <Code size={14} />;
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 bg-[#0a0a0f] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'drift 20s linear infinite',
          }}
        />
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div 
              className={`inline-block mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="inline-block font-mono text-xs tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2">
                Projects / Home
              </span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className={`text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '150ms' }}>
              Real, deployed applications built with modern technologies. Click any project to explore the live site.
            </p>
          </div>

          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block bg-gradient-to-br from-white/5 to-[#0A0A0F] border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-500 mb-12 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative grid lg:grid-cols-2 gap-8 p-6 md:p-8">
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-purple-400">{project.year}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-400">Featured Project</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:bg-purple-500/20 hover:border-purple-500/30 transition-colors"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all">
                    View Live Site
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-500/30">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 rounded-full px-2 py-1"
                        >
                          {getTechIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-mono">{project.year}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </>
  );
}