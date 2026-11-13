'use client';

import {
  ArrowRight,
  Award,
  Briefcase,
  Code,
  Database,
  Download,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  Server,
  Terminal,
  User,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function HomeContent() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? window.scrollY / height : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stats = [
    { label: 'Projects', value: '15+', icon: Briefcase },
    { label: 'Experience', value: '5+ years', icon: TrendingUp },
    { label: 'Clients', value: '20+', icon: User },
  ];

  const featuredProjects = [
    {
      title: 'Avora Pig Farming',
      description: 'Comprehensive farm management system',
      link: 'https://nicholusbriz.github.io/avora-pig-framing-website-/',
      stack: ['Next.js', 'MongoDB', 'UI'],
      featured: true,
    },
    {
      title: 'Freedom City Tech',
      description: 'Tech center management platform',
      link: 'https://selfless-henna.vercel.app/',
      stack: ['Next.js', 'PostgreSQL'],
      featured: true,
    },
  ];

  const skills = [
    { name: 'React', icon: Code, level: 95 },
    { name: 'Next.js', icon: Layers3, level: 90 },
    { name: 'Node.js', icon: Server, level: 88 },
    { name: 'TypeScript', icon: Terminal, level: 92 },
    { name: 'MongoDB', icon: Database, level: 85 },
    { name: 'AWS', icon: Globe, level: 75 },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 bg-gradient-to-r from-indigo-600 to-purple-600"
        style={{ scaleX: scrollProgress }}
      />

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left - Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
                <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                <span className="text-sm font-medium text-indigo-700">Available for projects</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                Hi, I'm
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  ATBRIZ
                </span>
              </motion.h1>

              <motion.p variants={reveal} className="text-xl text-gray-600 max-w-2xl">
                Nicholus Turyamureba — Full-stack engineer crafting scalable digital experiences with modern technologies.
              </motion.p>

              <motion.div variants={reveal} className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  View Work
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 rounded-xl font-medium hover:border-gray-300 transition-colors"
                >
                  <Download size={18} />
                  Resume
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div variants={reveal} className="flex gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-indigo-600" />
                      <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image with unique layout */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-square rounded-full overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 border-4 border-white shadow-2xl">
                  <Image
                    src="/nicholusbriz.png"
                    alt="ATBRIZ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">5+ Years</p>
                      <p className="text-sm text-gray-500">Experience</p>
                    </div>
                  </div>
                </motion.div>

                {/* Second floating card */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Kampala, Uganda</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What I do</h2>
            <p className="text-xl text-gray-600">Full-stack development with a focus on quality and performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                    <Code className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
                  <p className="text-gray-600">Building complete web applications from concept to deployment. Expert in React, Next.js, Node.js, and modern cloud infrastructure.</p>
                </div>
                <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-600 font-medium mt-6">
                  View projects <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Tall card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:row-span-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white"
            >
              <div className="h-full flex flex-col">
                <Layers3 className="w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-3">Modern Stack</h3>
                <div className="space-y-3 flex-1">
                  {skills.slice(0, 4).map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/70 text-sm">{skill.level}%</span>
                    </div>
                  ))}
                </div>
                <Link href="/skills" className="inline-flex items-center gap-2 text-white font-medium mt-6">
                  All skills <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Small card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <Server className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-sm text-gray-600">APIs, databases, and server architecture</p>
            </motion.div>

            {/* Small card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <Database className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-bold mb-2">Database</h3>
              <p className="text-sm text-gray-600">SQL and NoSQL data modeling</p>
            </motion.div>

            {/* Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-2 bg-white rounded-3xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Cloud & DevOps</h3>
                  <p className="text-sm text-gray-600">AWS, Docker, CI/CD pipelines and deployment automation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Asymmetric Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16 flex justify-between items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-xl text-gray-600">Selected projects that showcase my expertise</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-medium">
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-indigo-600/50" />
                  </div>
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.stack.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-600 font-medium">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section - Full width */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio Video</h2>
            <p className="text-xl text-gray-400">A quick overview of my work and approach</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gray-800"
          >
            <video
              ref={videoRef}
              src="/protforial.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="w-full"
              onPause={() => setIsPaused(true)}
              onPlay={() => setIsPaused(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-gray-900/90 to-transparent p-6">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPaused) {
                        videoRef.current.play();
                        setIsPaused(false);
                      } else {
                        videoRef.current.pause();
                        setIsPaused(true);
                      }
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isPaused ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsMuted(!isMuted);
                    if (videoRef.current) {
                      videoRef.current.muted = !isMuted;
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                      <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  )}
                </button>
              </div>
              <span className="text-sm text-gray-400">
                {isMuted ? 'Muted' : 'Sound On'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-32 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
                Get in touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-xl font-medium hover:border-gray-400 transition-colors"
              >
                View projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
