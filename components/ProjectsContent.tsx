'use client';

import { useState } from 'react';
import { ExternalLink, ArrowRight, Code, Database, Layout, Server, Globe, Smartphone, ShoppingBag, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Apps', 'Management', 'Tourism', 'Agriculture'];

  const projects = [
    {
      id: 'avora',
      title: 'Avora Pig Farming',
      description: 'Comprehensive farm management system with herd tracking, production monitoring, and analytics dashboard.',
      image: '/avora.jpeg',
      tags: ['Next.js', 'MongoDB', 'Tailwind'],
      category: 'Agriculture',
      link: 'https://nicholusbriz.github.io/avora-pig-framing-website-/',
      featured: true,
      size: 'large',
    },
    {
      id: 'freedom',
      title: 'Selfless Student Portal',
      description: 'Management system for tech centers, handling student enrollment, course management, and administrative workflows.',
      image: '/freedom.jpeg',
      tags: ['Next.js', 'PostgreSQL', 'React'],
      category: 'Management',
      link: 'https://www.selflessstudentportal.org/',
      featured: true,
      size: 'large',
    },
    {
      id: 'liahona',
      title: 'Liahona Tourism',
      description: 'Tourism booking platform enabling visitors to browse tours, make reservations, and manage bookings.',
      image: '/tourism.jpeg',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      category: 'Tourism',
      link: 'https://liahona.vercel.app/',
      featured: false,
      size: 'medium',
    },
    {
      id: 'community',
      title: 'Community Platform',
      description: 'Social platform connecting people through shared interests with forums, events, and messaging.',
      image: '/community.png',
      tags: ['Next.js', 'React', 'Socket.io'],
      category: 'Web Apps',
      link: 'https://community-website-sigma.vercel.app/',
      featured: false,
      size: 'medium',
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Agriculture': return <ShoppingBag size={20} />;
      case 'Management': return <Building2 size={20} />;
      case 'Tourism': return <Globe size={20} />;
      case 'Web Apps': return <Smartphone size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              ATBRIZ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A showcase of my work building scalable applications and solving real-world problems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Pill design */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Large asymmetric cards */}
      {featuredProjects.length > 0 && (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition-all">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(project.category)}
                          <span className="text-white/90 text-sm font-medium">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700"
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
                        className="inline-flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition-all"
                      >
                        View Project
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects - Compact grid */}
      {otherProjects.length > 0 && (
        <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(project.category)}
                        <span className="text-xs text-gray-500">{project.category}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-indigo-600 font-medium"
                      >
                        View
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-xl text-gray-600">From idea to deployment</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding requirements and goals' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and UI/UX' },
              { step: '03', title: 'Development', desc: 'Building with modern technologies' },
              { step: '04', title: 'Launch', desc: 'Testing, deployment, and support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
