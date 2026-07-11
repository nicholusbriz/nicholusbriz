'use client';

import { ExternalLink, ArrowRight, Code, Database, Layout, Server, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
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
    <section className="min-h-screen px-6 sm:px-8 py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="inline-block font-mono text-xs tracking-widest text-[#A78BFA] uppercase bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-2">
              Projects / Home
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real, deployed applications built with modern technologies. Click any project to explore the live site.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-gradient-to-br from-[#12121A] to-[#0A0A0F] border border-[#8B5CF6]/30 rounded-3xl overflow-hidden hover:border-[#8B5CF6] transition-all duration-500 mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-transparent to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-[#A78BFA]">{project.year}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-400">Featured Project</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/30 transition-colors"
                    >
                      {getTechIcon(tag)}
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div
                  className="inline-flex items-center gap-2 text-[#A78BFA] font-medium group-hover:gap-4 transition-all"
                >
                  View Live Site
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#12121A] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#8B5CF6]/20 text-[#A78BFA] text-xs font-medium px-3 py-1.5 rounded-full border border-[#8B5CF6]/30">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-gray-500 group-hover:text-[#A78BFA] transition-colors flex-shrink-0 mt-1"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}