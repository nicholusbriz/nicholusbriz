'use client';

import { 
  ExternalLink, 
  ArrowRight, 
  Code, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  ChevronDown,
  Filter,
  Layers,
  Zap,
  Clock,
  Users,
  Award,
  Briefcase,
  Globe,
  GitBranch,
  BarChart,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  TrendingUp,
  Calendar,
  Target,
  Eye,
  Sparkles,
  Network,
  Heart,
  Star,
  Rocket
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    lines: 0,
    industries: 0
  });
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Set window dimensions on client side
  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
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

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Count up animation
  useEffect(() => {
    const targetCounts = {
      projects: 15,
      years: 4,
      lines: 20000,
      industries: 5
    };

    const duration = 2000;
    const steps = 60;
    const increment = {
      projects: targetCounts.projects / steps,
      years: targetCounts.years / steps,
      lines: targetCounts.lines / steps,
      industries: targetCounts.industries / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.min(Math.floor(increment.projects * currentStep), targetCounts.projects),
        years: Math.min(Math.floor(increment.years * currentStep), targetCounts.years),
        lines: Math.min(Math.floor(increment.lines * currentStep), targetCounts.lines),
        industries: Math.min(Math.floor(increment.industries * currentStep), targetCounts.industries)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const categories = ['All', 'Web Apps', 'Management Systems', 'Tourism', 'Agriculture', 'Community'];

  const projects = [
    {
      id: 'avora',
      title: 'Avora Pig Farming Website',
      description: 'A comprehensive pig farming management website for Avora, featuring farm monitoring, herd management, and production tracking.',
      image: '/avora.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Farm Management'],
      category: 'Agriculture',
      link: 'https://nicholusbriz.github.io/avora-pig-framing-website-/',
      featured: true,
      status: 'Live',
      year: '2025',
      industry: 'Agriculture',
      role: 'Full Stack Developer',
      duration: '4 Months',
      users: '500+',
      metrics: {
        research: 20,
        design: 30,
        development: 80,
        testing: 60,
        deployment: 90
      },
      features: ['Farm Monitoring', 'Herd Management', 'Production Tracking', 'Analytics Dashboard'],
      techStack: {
        frontend: ['React', 'Next.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB'],
        deployment: ['Vercel', 'GitHub']
      }
    },
    {
      id: 'freedom',
      title: 'Freedom City Tech Center',
      description: 'A management system for Freedom City Tech Center, built to organize and administer the center\'s day-to-day operations.',
      image: '/freedom.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Admin Dashboard'],
      category: 'Management Systems',
      link: 'https://selfless-henna.vercel.app/',
      featured: true,
      status: 'Live',
      year: '2024',
      industry: 'Education',
      role: 'Lead Developer',
      duration: '3 Months',
      users: '200+',
      metrics: {
        research: 15,
        design: 25,
        development: 85,
        testing: 70,
        deployment: 95
      },
      features: ['Student Management', 'Staff Dashboard', 'Analytics', 'Reports', 'Notifications'],
      techStack: {
        frontend: ['React', 'Next.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB', 'PostgreSQL'],
        deployment: ['Vercel', 'GitHub']
      }
    },
    {
      id: 'liahona',
      title: 'Liahona Tourism Booking',
      description: 'A tourism booking website built for Liahona Company, letting visitors browse tours and make bookings online.',
      image: '/tourism.jpeg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Booking System'],
      category: 'Tourism',
      link: 'https://liahona.vercel.app/',
      featured: false,
      status: 'Live',
      year: '2024',
      industry: 'Tourism',
      role: 'Full Stack Developer',
      duration: '3 Months',
      users: '100+',
      metrics: {
        research: 10,
        design: 20,
        development: 75,
        testing: 65,
        deployment: 85
      },
      features: ['Tour Booking', 'Payment Integration', 'User Dashboard', 'Admin Panel'],
      techStack: {
        frontend: ['React', 'Next.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB'],
        deployment: ['Vercel', 'GitHub']
      }
    },
    {
      id: 'community',
      title: 'Community Website',
      description: 'A community platform designed to connect people and foster engagement through shared interests and collaborative features.',
      image: '/community.png',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Community Platform'],
      category: 'Community',
      link: 'https://community-website-sigma.vercel.app/',
      featured: false,
      status: 'Live',
      year: '2024',
      industry: 'Community',
      role: 'Full Stack Developer',
      duration: '4 Months',
      users: '300+',
      metrics: {
        research: 15,
        design: 30,
        development: 80,
        testing: 60,
        deployment: 90
      },
      features: ['User Profiles', 'Discussion Forums', 'Events', 'Messaging', 'Groups'],
      techStack: {
        frontend: ['React', 'Next.js', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB'],
        deployment: ['Vercel', 'GitHub']
      }
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
    if (lowerTag.includes('mobile') || lowerTag.includes('app')) return <Smartphone size={14} />;
    if (lowerTag.includes('farm') || lowerTag.includes('management')) return <Database size={14} />;
    return <Code size={14} />;
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Premium Cursor */}
      <div 
        className="fixed pointer-events-none z-50 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * 2 + windowDimensions.width/2 - 8}px, ${mousePosition.y * 2 + windowDimensions.height/2 - 8}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-3 h-3 bg-purple-500 rounded-full mix-blend-difference" />
        <div className="absolute -top-4 -left-4 w-11 h-11 border border-purple-500/30 rounded-full animate-pulse" />
      </div>

      {/* Animated Background with Ecosystem */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0f]">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/projects.jpg)',
              opacity: '0.15',
            }}
          />
        </div>
        
        {/* Animated Network Nodes */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100 + '%'}
                cy={Math.random() * 100 + '%'}
                r="2"
                fill="#8B5CF6"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <line
                key={`line-${i}`}
                x1={Math.random() * 100 + '%'}
                y1={Math.random() * 100 + '%'}
                x2={Math.random() * 100 + '%'}
                y2={Math.random() * 100 + '%'}
                stroke="#8B5CF6"
                strokeWidth="0.5"
                opacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />
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
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'drift 20s linear infinite',
          }}
        />
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          
          {/* ===== CINEMATIC HERO ===== */}
          <div className="mb-16 md:mb-24">
            <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <span className="inline-block font-mono text-xs tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
                Portfolio / Projects
              </span>
            </div>
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Products
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                I've Brought
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                To Life.
              </span>
            </h1>
            <p className={`text-xl text-gray-300 max-w-2xl mt-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              Every project solves a real-world problem. Built with purpose, powered by code.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '300ms' }}>
              {[
                { label: 'Projects', value: counts.projects, icon: <Briefcase className="text-purple-400" size={20} /> },
                { label: 'Years Experience', value: counts.years, icon: <Clock className="text-blue-400" size={20} /> },
                { label: 'Lines of Code', value: `${(counts.lines / 1000).toFixed(1)}K+`, icon: <Code className="text-emerald-400" size={20} /> },
                { label: 'Industries', value: counts.industries, icon: <Globe className="text-pink-400" size={20} /> },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold text-white">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== CURRENTLY BUILDING ===== */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '350ms' }}>
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-purple-400" size={24} />
                <span className="text-sm font-mono text-purple-400 tracking-widest uppercase">Currently Building</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Freedom City Tech Center</h3>
              <p className="text-gray-300 mb-4">A management system for Freedom City Tech Center, built to organize and administer the center's day-to-day operations.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-purple-400 font-mono">82%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '82%' }} />
                </div>
                <div className="text-xs text-gray-500 mt-2">Expected Release: 2026</div>
              </div>
            </div>
          </div>

          {/* ===== CATEGORY FILTERS ===== */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <Filter className="text-purple-400" size={18} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ===== FEATURED PROJECTS ===== */}
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-[#0A0A0F]/90 border border-purple-500/30 rounded-3xl overflow-hidden hover:border-purple-500 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative grid lg:grid-cols-2 gap-8 p-6 md:p-8">
                  {/* Image with device mockup effect */}
                  <div className="relative">
                    <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-flex items-center gap-2 bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          {project.status}
                        </span>
                        <span className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                          {project.industry}
                        </span>
                      </div>
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300">
                          <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-500/30">
                            <span className="text-white text-sm font-medium flex items-center gap-2">
                              <Eye size={16} />
                              Preview Project
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-xs font-mono text-purple-400">{project.year}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-400">Featured Project</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-400">{project.role}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">What I Built</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span key={feature} className="text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack with Categories */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="space-y-2">
                        {Object.entries(project.techStack).map(([category, techs]) => (
                          <div key={category} className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 uppercase w-20">{category}</span>
                            <div className="flex flex-wrap gap-1.5">
                              {techs.map((tech: string) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center gap-1 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1"
                                >
                                  {getTechIcon(tech)}
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-3">Development Progress</h4>
                      <div className="grid grid-cols-5 gap-2">
                        {Object.entries(project.metrics).map(([phase, value]) => (
                          <div key={phase} className="text-center">
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                                style={{ width: hoveredProject === project.id ? `${value}%` : '0%' }}
                              />
                            </div>
                            <span className="text-[8px] text-gray-500 uppercase mt-1 block">{phase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all"
                      >
                        View Live Site
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {project.users} users
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ===== OTHER PROJECTS - BENTO GRID ===== */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const isTall = index % 3 === 1;
              const isWide = index % 3 === 2;
              return (
                <div
                  key={project.id}
                  className={`group transition-all duration-500 ${
                    isTall ? 'md:row-span-2' : ''
                  } ${isWide ? 'md:col-span-2' : ''} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`relative overflow-hidden ${isTall ? 'h-64' : 'h-48'}`}>
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-500/30">
                          {project.status}
                        </span>
                      </div>
                      {hoveredProject === project.id && (
                        <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300">
                          <ExternalLink className="text-white" size={24} />
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs text-gray-500 font-mono">{project.category}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="text-[10px] text-gray-400 bg-white/5 rounded-full px-2 py-1">
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 2).map((tag) => (
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
                </div>
              );
            })}
          </div>

          {/* ===== FINAL CTA ===== */}
          <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
            <div className="relative bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
              <div className="relative">
                <div className="text-6xl mb-6">✨</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Have an idea?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Let's build something extraordinary together.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-medium hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-xs font-mono tracking-widest uppercase">Explore More</span>
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}