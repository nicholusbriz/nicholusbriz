'use client';

import { 
  ArrowRight, 
  Download, 
  Award, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  GitFork, 
  Link2,
  ChevronDown,
  Code2,
  Globe,
  Zap,
  Briefcase,
  Users,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Cloud,
  Terminal,
  Network,
  GitBranch,
  Brain,
  Heart,
  Monitor,
  Server,
  Shield,
  Box,
  Workflow,
  PenTool,
  BookOpen,
  Star,
  Trophy,
  Rocket,
  Coffee,
  Code,
  Palette,
  Settings,
  Wrench,
  Workflow as WorkflowIcon
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [activeTool, setActiveTool] = useState<number | null>(null);
  const [activeLang, setActiveLang] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [buildingText, setBuildingText] = useState('');
  const [buildingIndex, setBuildingIndex] = useState(0);
  const [showEcosystem, setShowEcosystem] = useState(false);
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, opacity: number}>>([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 });

  // Initialize particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        speed: 0.5 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: (p.y + p.speed * 0.1) % 100,
        x: (p.x + Math.sin(p.y / 10) * 0.1) % 100
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Building text animation
  useEffect(() => {
    const words = ['Building', 'Creating', 'Innovating', 'Connecting', 'Developing', 'Engineering'];
    const currentWord = words[buildingIndex % words.length];
    const typingSpeed = 80;
    const holdAtFull = 2000;
    const holdAtEmpty = 500;

    if (buildingText === currentWord) {
      const timeout = setTimeout(() => {
        setBuildingText('');
        setBuildingIndex(prev => prev + 1);
      }, holdAtFull);
      return () => clearTimeout(timeout);
    }

    if (buildingText === '') {
      const timeout = setTimeout(() => {
        setBuildingText(currentWord.slice(0, 1));
      }, holdAtEmpty);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setBuildingText(currentWord.slice(0, buildingText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [buildingText, buildingIndex]);

  // Ecosystem animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEcosystem(true);
    }, 1000);
    return () => clearTimeout(timer);
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

  // Mouse tracking for parallax - reduced effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Rotating orbit effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect for role
  useEffect(() => {
    const roles = ['Full-Stack Developer', 'Problem Solver', 'Community Builder', 'Innovation Creator', 'Software Engineer'];
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const holdAtFull = 1800;
    const holdAtEmpty = 400;

    if (!isDeleting && typedText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), holdAtFull);
      return () => clearTimeout(pause);
    }

    if (isDeleting && typedText === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, holdAtEmpty);
      return () => clearTimeout(pause);
    }

    const step = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting ? currentRole.slice(0, prev.length - 1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(step);
  }, [typedText, isDeleting, roleIndex]);

  // Stats with icons
  const stats = [
    { label: 'Projects', value: '15+', icon: <Briefcase size={16} /> },
    { label: 'Experience', value: '5+ yrs', icon: <Award size={16} /> },
    { label: 'Clients', value: '20+', icon: <Users size={16} /> },
  ];

  // Comprehensive Languages with names
  const languages = [
    { name: 'JavaScript', level: 'Expert', years: 5 },
    { name: 'TypeScript', level: 'Expert', years: 4 },
    { name: 'Python', level: 'Advanced', years: 4 },
    { name: 'Java', level: 'Advanced', years: 3 },
    { name: 'C#', level: 'Intermediate', years: 2 },
    { name: 'PHP', level: 'Advanced', years: 3 },
    { name: 'Ruby', level: 'Intermediate', years: 2 },
    { name: 'Go', level: 'Intermediate', years: 2 },
    { name: 'Rust', level: 'Intermediate', years: 1 },
    { name: 'Swift', level: 'Intermediate', years: 2 },
    { name: 'Kotlin', level: 'Intermediate', years: 2 },
    { name: 'C++', level: 'Intermediate', years: 3 },
  ];

  // Tools & Frameworks with names
  const tools = [
    { name: 'React', category: 'Frontend', years: 5 },
    { name: 'Next.js', category: 'Fullstack', years: 4 },
    { name: 'Node.js', category: 'Backend', years: 5 },
    { name: 'MongoDB', category: 'Database', years: 4 },
    { name: 'PostgreSQL', category: 'Database', years: 4 },
    { name: 'AWS', category: 'Cloud', years: 3 },
    { name: 'Docker', category: 'DevOps', years: 3 },
    { name: 'Kubernetes', category: 'DevOps', years: 2 },
    { name: 'GraphQL', category: 'API', years: 3 },
    { name: 'Tailwind CSS', category: 'Frontend', years: 4 },
    { name: 'Express.js', category: 'Backend', years: 5 },
    { name: 'Vue.js', category: 'Frontend', years: 3 },
    { name: 'Angular', category: 'Frontend', years: 2 },
    { name: 'Redis', category: 'Database', years: 3 },
    { name: 'ElasticSearch', category: 'Database', years: 2 },
    { name: 'Jenkins', category: 'DevOps', years: 2 },
  ];

  // Projects/Works
  const works = [
    { name: 'Avora Pig Farming', description: 'Farm Management System', status: 'Live' },
    { name: 'Freedom City Tech', description: 'Tech Center Management', status: 'Live' },
    { name: 'Liahona Tourism', description: 'Tourism Booking Platform', status: 'Live' },
    { name: 'Community Platform', description: 'Community Engagement Hub', status: 'Live' },
    { name: 'Tech Rise Africa', description: 'Tech Empowerment Platform', status: 'In Development' },
    { name: 'BYU Connect', description: 'Student Community Portal', status: 'Planning' },
  ];

  // Tech stack for ecosystem
  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'TypeScript', icon: '🔵', color: '#3178C6' },
  ];

  return (
    <>
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

      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/nicholusbriz.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Background glowing gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Background particles */}
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-purple-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity * 0.3,
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Status Badge with building animation */}
              <div 
                className={`inline-flex items-center gap-3 rounded-full px-4 py-2 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-white/80 tracking-wider">
                  {buildingText} Digital Ecosystems
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Nicholus Turyamureba
                  </span>
                </h1>
                
                <div 
                  className={`h-10 font-mono text-lg md:text-xl text-purple-400 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <span>{typedText}</span>
                  <span className="inline-block w-[2px] h-6 bg-purple-400 ml-1 align-middle animate-pulse" />
                </div>
              </div>

              {/* Stats */}
              <div 
                className={`grid grid-cols-3 gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 text-center bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white">
                      {stat.icon}
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p 
                className={`text-gray-300 leading-relaxed max-w-lg text-base md:text-lg transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                BSc in Software Development from BYU–Idaho. Ugandan software engineer building digital platforms that connect communities — 
                combining technical craft with clear, human storytelling.
              </p>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <a
                  href="/projects"
                  className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
                
                <a
                  href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                  download
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <a
                  href="https://github.com/nicholusbriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  <GitFork size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/nicholus-turyamureba-194363378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  <Link2 size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column - Video & Profile */}
            <div 
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Video Player - Reduced zoom effect */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10 transition-all duration-500 group-hover:shadow-purple-500/30">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover transition-all duration-300"
                    onClick={togglePlay}
                    style={{
                      transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <source src="/atbriz.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Play Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110"
                      >
                        <Play size={28} fill="currentColor" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/30">
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="text-xs text-gray-400">Education</div>
                  <div className="text-sm text-white font-medium">BYU–Idaho</div>
                  <div className="text-xs text-gray-500">BSc Software Dev</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-500/30">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="text-xs text-gray-400">Based in</div>
                  <div className="text-sm text-white font-medium">Uganda</div>
                  <div className="text-xs text-gray-500">Global Impact</div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 1: MY WORKS */}
          {/* ============================================ */}
          <div className="mt-32 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
                <Briefcase className="text-emerald-400" size={16} />
                <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">My Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Projects I've Built
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real-world applications that solve problems and connect communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-emerald-500/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-2xl font-bold text-white">{work.name}</div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      work.status === 'Live' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : work.status === 'In Development'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {work.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 2: LANGUAGES */}
          {/* ============================================ */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Code2 className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Languages</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Programming Languages
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                12+ languages I use to build digital solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50"
                  onMouseEnter={() => setActiveLang(index)}
                  onMouseLeave={() => setActiveLang(null)}
                >
                  <div className="text-lg font-bold text-white">{lang.name}</div>
                  <div className={`text-xs transition-all duration-300 ${
                    activeLang === index ? 'text-purple-400' : 'text-gray-500'
                  }`}>
                    {lang.level} • {lang.years} yrs
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 3: TOOLS & FRAMEWORKS */}
          {/* ============================================ */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
                <Settings className="text-blue-400" size={16} />
                <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Tools</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tools & Frameworks
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                16+ technologies I work with daily
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-500/50"
                  onMouseEnter={() => setActiveTool(index)}
                  onMouseLeave={() => setActiveTool(null)}
                >
                  <div className="text-lg font-bold text-white">{tool.name}</div>
                  <div className={`text-xs transition-all duration-300 ${
                    activeTool === index ? 'text-blue-400' : 'text-gray-500'
                  }`}>
                    {tool.category} • {tool.years} yrs
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 4: ECOSYSTEM NETWORK VISUALIZATION */}
          {/* ============================================ */}
          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-4">
                <Network className="text-pink-400" size={16} />
                <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Digital Ecosystem
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How everything connects — languages, tools, and projects working together
              </p>
            </div>

            {/* Ecosystem Visualization Card */}
            <div className="relative bg-gradient-to-br from-purple-900/20 via-black/50 to-pink-900/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12">
              {/* Glowing orbs behind the ecosystem */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Connected Ecosystem</div>
                      <div className="text-lg font-bold text-white">
                        {buildingText} Digital Solutions
                        <span className="inline-block w-[2px] h-4 bg-purple-400 ml-1 align-middle animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
                      Live
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400">
                      12 Languages
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">
                      16 Tools
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs text-pink-400">
                      6 Projects
                    </span>
                  </div>
                </div>

                {/* Simple Network Visualization with Names */}
                <div className="relative h-[500px] w-full">
                  {/* Center hub */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                        <Heart className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Languages with Names (inner) */}
                  {languages.slice(0, 8).map((lang, index) => {
                    const angle = (index / 8) * 360 + rotation * 0.7;
                    const radius = 160;
                    const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 500 * 100);
                    const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 500 * 100);
                    return (
                      <div
                        key={lang.name}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transition: 'all 0.1s linear'
                        }}
                      >
                        <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 hover:bg-purple-500/40 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                          <span className="text-sm font-medium text-white">{lang.name}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Orbiting Tools with Names (outer) */}
                  {tools.slice(0, 8).map((tool, index) => {
                    const angle = (index / 8) * 360 + rotation * 0.5 + 22.5;
                    const radius = 220;
                    const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 500 * 100);
                    const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 500 * 100);
                    return (
                      <div
                        key={tool.name}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transition: 'all 0.1s linear'
                        }}
                      >
                        <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 hover:bg-blue-500/40 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                          <span className="text-sm font-medium text-white">{tool.name}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Additional Tools on the outer orbit */}
                  {tools.slice(8, 12).map((tool, index) => {
                    const angle = (index / 4) * 360 + rotation * 0.5 + 67.5;
                    const radius = 260;
                    const x = 50 + Math.cos(angle * Math.PI / 180) * (radius / 500 * 100);
                    const y = 50 + Math.sin(angle * Math.PI / 180) * (radius / 500 * 100);
                    return (
                      <div
                        key={`extra-${tool.name}`}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transition: 'all 0.1s linear'
                        }}
                      >
                        <div className="px-3 py-1.5 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-500/30 hover:bg-cyan-500/40 transition-all duration-300 hover:scale-110 whitespace-nowrap">
                          <span className="text-xs font-medium text-white">{tool.name}</span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const rad = angle * Math.PI / 180;
                      const innerR = 160 / 500 * 100;
                      const outerR = 220 / 500 * 100;
                      const x1 = 50 + Math.cos(rad + rotation * 0.7 * Math.PI / 180) * innerR;
                      const y1 = 50 + Math.sin(rad + rotation * 0.7 * Math.PI / 180) * innerR;
                      const x2 = 50 + Math.cos(rad + rotation * 0.5 * Math.PI / 180 + 22.5 * Math.PI / 180) * outerR;
                      const y2 = 50 + Math.sin(rad + rotation * 0.5 * Math.PI / 180 + 22.5 * Math.PI / 180) * outerR;
                      return (
                        <line
                          key={i}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.2"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      );
                    })}
                  </svg>

                  {/* Labels */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="flex gap-4 justify-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-500/50" />
                        <span className="text-xs text-gray-400">Languages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500/50" />
                        <span className="text-xs text-gray-400">Tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-500/50" />
                        <span className="text-xs text-gray-400">Frameworks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats below ecosystem */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6</div>
                    <div className="text-xs text-gray-400">Projects Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-xs text-gray-400">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">16</div>
                    <div className="text-xs text-gray-400">Tools & Frameworks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                </div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}