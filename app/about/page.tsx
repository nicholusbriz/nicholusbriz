'use client';

import {
  Users,
  Lightbulb,
  Code,
  Heart,
  GraduationCap,
  Briefcase,
  MapPin,
  Mail,
  MessageCircle,
  Link as LinkIcon,
  Share2,
  GitFork,
  Link2,
  ChevronDown,
  Award,
  Clock,
  Rocket,
  Globe,
  Zap,
  Sparkles,
  Network,
  GitBranch,
  Brain,
  Star,
  Trophy,
  BookOpen,
  Monitor,
  Server,
  Database,
  Cloud,
  Cpu,
  Workflow,
  Target,
  Eye,
  Compass,
  ArrowRight,
  Hospital,
  Building,
  Users2,
  Coffee,
  Plane,
  Home,
  TreePine,
  School,
  Download
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [counts, setCounts] = useState({
    communities: 0,
    students: 0,
    projects: 0,
    years: 0
  });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  // Progress tracking
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

  // Rotating orbit effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Count up animation
  useEffect(() => {
    const targetCounts = {
      communities: 7,
      students: 20,
      projects: 15,
      years: 4
    };

    const duration = 2000;
    const steps = 60;
    const increment = {
      communities: targetCounts.communities / steps,
      students: targetCounts.students / steps,
      projects: targetCounts.projects / steps,
      years: targetCounts.years / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        communities: Math.min(Math.floor(increment.communities * currentStep), targetCounts.communities),
        students: Math.min(Math.floor(increment.students * currentStep), targetCounts.students),
        projects: Math.min(Math.floor(increment.projects * currentStep), targetCounts.projects),
        years: Math.min(Math.floor(increment.years * currentStep), targetCounts.years)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Section visibility on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Contacts data
  const contacts = [
    { icon: MapPin, label: 'Kampala, Uganda', href: undefined },
    { icon: Mail, label: 'turyamurebanicholus@gmail.com', href: 'mailto:turyamurebanicholus@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/256761996296' },
    { icon: LinkIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378' },
    { icon: Share2, label: 'GitHub', href: 'https://github.com/nicholusbriz' },
  ];

  // Values data
  const values = [
    { icon: Code, title: 'Creative Coding', description: 'Using code as a medium for storytelling and cultural expression' },
    { icon: Users, title: 'Community Leadership', description: 'Building inclusive developer communities and advocating for fairness' },
    { icon: Lightbulb, title: 'Digital Platforms', description: 'Architecting platforms that connect and empower communities' },
    { icon: Heart, title: 'Team Collaboration', description: 'Promoting effective teamwork and recognition in group projects' },
  ];

  // Skills with progress
  const skills = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Node.js', level: 92 },
    { name: 'System Design', level: 80 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 85 },
  ];

  // Ecosystem nodes with real words
  const ecosystemNodes = [
    { label: 'You', icon: <Heart size={20} />, x: 50, y: 50 },
    { label: 'Communities', icon: <Users size={16} />, x: 20, y: 25 },
    { label: 'Products', icon: <Briefcase size={16} />, x: 80, y: 25 },
    { label: 'Education', icon: <GraduationCap size={16} />, x: 20, y: 75 },
    { label: 'Open Source', icon: <GitBranch size={16} />, x: 80, y: 75 },
    { label: "Africa's Future", icon: <Globe size={16} />, x: 50, y: 85 },
  ];

  // Real world ecosystem nodes with text
  const realEcosystemNodes = [
    { label: 'Hospitals', x: 15, y: 15 },
    { label: 'Schools', x: 85, y: 15 },
    { label: 'Agriculture', x: 15, y: 50 },
    { label: 'Government', x: 85, y: 50 },
    { label: 'Businesses', x: 30, y: 85 },
    { label: 'Communities', x: 70, y: 85 },
    { label: 'Innovation Hubs', x: 50, y: 15 },
    { label: 'African Tech', x: 50, y: 85 },
  ];

  // Timeline data
  const timeline = [
    { year: '2004', title: 'Started Learning Technology', description: 'First exposure to computers and programming' },
    { year: '2018', title: 'First Project', description: 'Built my first web application' },
    { year: '2022', title: 'BYU–Idaho', description: 'Began Bachelor\'s in Software Development' },
    { year: '2023', title: 'Community Leader', description: 'Started leading developer communities' },
    { year: '2024', title: 'Freedom City Tech Center', description: 'Building management systems for tech centers' },
    { year: '2025', title: 'Graduated', description: 'Completed BSc in Software Development' },
    { year: '2026', title: 'Building Africa\'s Future', description: 'Creating platforms for African innovation' },
  ];

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
          transform: `translate(${mousePosition.x * 2 + window.innerWidth/2 - 8}px, ${mousePosition.y * 2 + window.innerHeight/2 - 8}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-3 h-3 bg-purple-500 rounded-full mix-blend-difference" />
        <div className="absolute -top-4 -left-4 w-11 h-11 border border-purple-500/30 rounded-full animate-pulse" />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/home-page-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Moving grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }} />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          
          {/* ===== HERO - Massive Statement ===== */}
          <div 
            ref={el => { sectionRefs.current[0] = el; }} 
            className={`min-h-[80vh] flex flex-col justify-center transition-all duration-1000 ${visibleSections.includes(0) ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="space-y-6">
              <div className="text-sm text-purple-400 font-mono tracking-widest animate-pulse">ABOUT / DISCOVER</div>
              <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold leading-[0.9]">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  I BUILD
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  SOFTWARE
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  FOR PEOPLE.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">Not just businesses. Not just code. Digital ecosystems that connect communities and tell human stories.</p>
              <div className="flex items-center gap-4">
                <a
                  href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                  download
                  className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <Download size={20} />
                  <span className="font-medium">Download Resume</span>
                </a>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm font-mono">Designed by</span>
                  <span className="text-white font-medium">Nicholus Turyamureba</span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== STATISTICS ===== */}
          <div 
            ref={el => { sectionRefs.current[1] = el; }} 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-y border-white/10 transition-all duration-1000 ${visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { label: 'Communities Built', value: counts.communities, icon: <Users className="text-purple-400" size={20} /> },
              { label: 'Students Mentored', value: counts.students, icon: <GraduationCap className="text-blue-400" size={20} /> },
              { label: 'Projects', value: counts.projects, icon: <Briefcase className="text-emerald-400" size={20} /> },
              { label: 'Years Building', value: counts.years, icon: <Clock className="text-pink-400" size={20} /> },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-white">
                  {stat.icon}
                  {stat.value}+
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ===== PORTRAIT + WHO I AM ===== */}
          <div 
            ref={el => { sectionRefs.current[2] = el; }} 
            className={`grid lg:grid-cols-2 gap-12 items-center py-16 transition-all duration-1000 ${visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Portrait with Image */}
            <div className="relative group">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  <Image
                    src="/nicholusbriz.png"
                    alt="Nicholus Turyamureba"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">Nicholus Turyamureba</h3>
                    <p className="text-purple-400 text-sm">Software Engineer • Community Builder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who I Am */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Eye className="text-purple-400" size={24} />
                <span className="text-sm font-mono text-purple-400 tracking-widest uppercase">Who I Am</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Software with Purpose</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a Ugandan software developer passionate about the intersection of code, culture, and creativity. 
                I believe software development is more than just writing code — it's about building platforms that 
                connect communities and tell meaningful stories.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As a developer community leader, I advocate for fairness in teamwork and inclusive communication. 
                I draw strength from my faith and family values, using them as inspiration to create digital solutions 
                that serve human needs.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <GraduationCap className="text-purple-400" size={16} />
                  BYU–Idaho Graduate
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Trophy className="text-purple-400" size={16} />
                  BSc Software Development
                </div>
              </div>
            </div>
          </div>

          {/* ===== JOURNEY TIMELINE ===== */}
          <div 
            ref={el => { sectionRefs.current[3] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Clock className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">My Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Path to Now</h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'} mb-8`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black z-10" />
                  <div className={`w-5/12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-purple-400 font-mono text-sm">{item.year}</div>
                    <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== DIGITAL PASSPORT (Education) ===== */}
          <div 
            ref={el => { sectionRefs.current[4] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-white">Digital Passport</h3>
                <div className="mt-4 space-y-3 text-gray-300">
                  <p><strong className="text-purple-400">BYU–Idaho</strong></p>
                  <p>Software Development • 2022-2025</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400">Full-stack</span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">Algorithms</span>
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">System Design</span>
                    <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs text-pink-400">Agile</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Projects Completed</span>
                      <span className="text-white font-bold">15+</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-400">Certificates</span>
                      <span className="text-white font-bold">8</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Technical Proficiency</h3>
                {skills.map((skill, index) => (
                  <div key={index} 
                    className="space-y-1"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className={`text-sm font-mono transition-all duration-300 ${activeSkill === index ? 'text-purple-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                        style={{ 
                          width: visibleSections.includes(4) ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== VALUES BENTO GRID ===== */}
          <div 
            ref={el => { sectionRefs.current[5] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Star className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">My Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How I Think & Work</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-all duration-300">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== REAL WORLD ECOSYSTEM NETWORK ===== */}
          <div 
            ref={el => { sectionRefs.current[6] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Network className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Real-World Impact</h2>
              <p className="text-gray-400 mt-2">Software touching every sector of African society</p>
            </div>

            <div className="relative bg-gradient-to-br from-purple-900/20 via-black/50 to-pink-900/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12">
              <div className="relative h-[500px] w-full">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {realEcosystemNodes.map((node, i) => (
                    realEcosystemNodes.map((target, j) => {
                      if (i === j) return null;
                      const x1 = node.x;
                      const y1 = node.y;
                      const x2 = target.x;
                      const y2 = target.y;
                      return (
                        <line
                          key={`${i}-${j}`}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="#8B5CF6"
                          strokeWidth="0.5"
                          opacity="0.15"
                          className="animate-pulse"
                          style={{ animationDelay: `${(i + j) * 0.1}s` }}
                        />
                      );
                    })
                  ))}
                </svg>

                {/* Center hub */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <Heart className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-white font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">You</span>
                  </div>
                </div>

                {/* Real World Nodes with Words */}
                {realEcosystemNodes.map((node, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transition: 'all 0.3s ease-out',
                      zIndex: activeNode === index ? 20 : 10
                    }}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className={`relative transition-all duration-300 ${activeNode === index ? 'scale-125' : 'group-hover:scale-110'}`}>
                      <div className={`px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 whitespace-nowrap ${
                        activeNode === index 
                          ? 'bg-purple-500/40 border-purple-500 shadow-lg shadow-purple-500/50 text-white' 
                          : 'bg-white/10 border-white/20 text-gray-300 group-hover:border-purple-500/50'
                      }`}>
                        <span className="text-sm font-medium">{node.label}</span>
                      </div>
                      {activeNode === index && (
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-purple-500/30">
                          <span className="text-xs text-white font-medium">Connected</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 flex-wrap justify-center">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs text-gray-300">Active Connections</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-xs text-gray-300">Impact Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CONTACT - FLOATING SOCIAL CARDS ===== */}
          <div 
            ref={el => { sectionRefs.current[7] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Compass className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Connect</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build Together</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contacts.map((contact, i) => {
                const Icon = contact.icon;
                const isSocial = contact.label === 'GitHub' || contact.label === 'LinkedIn';
                const isEmail = contact.label.includes('@');
                
                return (
                  <a
                    key={i}
                    href={contact.href || '#'}
                    target={contact.href?.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 ${
                      !contact.href ? 'cursor-default' : ''
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-all duration-300">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div className="text-sm font-medium text-white">{contact.label}</div>
                      {isSocial && (
                        <div className="text-xs text-gray-500">Professional Network</div>
                      )}
                      {isEmail && (
                        <div className="text-xs text-gray-500">Email Me</div>
                      )}
                      {contact.label === 'Kampala, Uganda' && (
                        <div className="text-xs text-gray-500">Based Here</div>
                      )}
                      {contact.label === 'WhatsApp' && (
                        <div className="text-xs text-gray-500">Quick Response</div>
                      )}
                      <ArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ===== CURRENT FOCUS ===== */}
          <div 
            ref={el => { sectionRefs.current[8] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-purple-400" size={24} />
                <span className="text-sm font-mono text-purple-400 tracking-widest uppercase">Current Focus</span>
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

          {/* ===== Scroll Indicator ===== */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-xs font-mono tracking-widest uppercase">Explore My Journey</span>
              <ChevronDown size={20} />
            </div>
          </div>
          
        </div>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float-particle {
          animation: float-particle 15s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}