'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Link as LinkIcon, 
  Share2, 
  MessageCircle, 
  GraduationCap, 
  GitFork, 
  Link2,
  ChevronDown,
  Heart,
  Globe,
  Clock,
  CheckCircle,
  Sparkles,
  Rocket,
  Users,
  Briefcase,
  Code,
  Star,
  Coffee,
  Compass,
  ArrowRight,
  Zap,
  Eye,
  Target
} from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
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

  // Contact cards data
  const contactCards = [
    { 
      icon: Mail, 
      title: 'Email Me', 
      detail: 'turyamurebanicholus@gmail.com',
      description: 'Usually replies within 24 hours',
      href: 'mailto:turyamurebanicholus@gmail.com',
      color: 'purple'
    },
    { 
      icon: Phone, 
      title: 'Call Me', 
      detail: '+256 761 996 296',
      description: 'Available Mon–Fri, 09:00–18:00 EAT',
      href: 'tel:+256761996296',
      color: 'blue'
    },
    { 
      icon: MapPin, 
      title: 'Location', 
      detail: 'Kampala, Uganda',
      description: 'Open to Remote Work Worldwide',
      href: undefined,
      color: 'emerald'
    },
  ];

  // Social cards data
  const socialCards = [
    { 
      icon: GitFork, 
      title: 'GitHub', 
      detail: '120+ Repositories',
      description: 'Explore My Code →',
      href: 'https://github.com/nicholusbriz',
      color: 'purple'
    },
    { 
      icon: Link2, 
      title: 'LinkedIn', 
      detail: 'Professional Network',
      description: "Let's Connect →",
      href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378',
      color: 'blue'
    },
    { 
      icon: MessageCircle, 
      title: 'WhatsApp', 
      detail: 'Quick Conversation',
      description: 'Usually Active',
      href: 'https://wa.me/256761996296',
      color: 'green'
    },
  ];

  // Collaboration cards
  const collaborationAreas = [
    { icon: Code, title: 'Web Applications', description: 'Full-stack development with modern frameworks' },
    { icon: Users, title: 'Community Platforms', description: 'Building spaces that connect people' },
    { icon: Briefcase, title: 'Technical Consulting', description: 'Expert guidance for your projects' },
    { icon: GraduationCap, title: 'Mentorship', description: 'Helping developers grow and learn' },
    { icon: Rocket, title: 'Open Source', description: 'Contributing to the developer ecosystem' },
    { icon: Coffee, title: 'Collaboration', description: "Let's build something amazing together" },
  ];

  // Timeline steps
  const timelineSteps = [
    { label: 'Message', icon: Send, duration: '24 Hours' },
    { label: 'Discovery', icon: Eye, duration: '48 Hours' },
    { label: 'Planning', icon: Target, duration: '1 Week' },
    { label: 'Development', icon: Code, duration: 'Ongoing' },
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
          transform: `translate(${mousePosition.x * 2 + windowDimensions.width/2 - 8}px, ${mousePosition.y * 2 + windowDimensions.height/2 - 8}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-3 h-3 bg-purple-500 rounded-full mix-blend-difference" />
        <div className="absolute -top-4 -left-4 w-11 h-11 border border-purple-500/30 rounded-full animate-pulse" />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 bg-[#0a0a0f] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        
        {/* Large background typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <div className="text-[15rem] md:text-[25rem] font-bold text-white tracking-[0.2em] select-none">
            CONTACT
          </div>
        </div>

        {/* Network nodes */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {[...Array(25)].map((_, i) => (
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
                opacity="0.2"
              />
            ))}
          </svg>
        </div>

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
          
          {/* ===== HERO - Let's Build Something Amazing ===== */}
          <div 
            ref={el => { sectionRefs.current[0] = el; }} 
            className={`min-h-[50vh] flex flex-col justify-center text-center transition-all duration-1000 ${visibleSections.includes(0) ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-400">Available for Work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Let's Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Something Amazing.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to turn ideas into software. Let's create something extraordinary together.
              </p>
            </div>
          </div>

          {/* ===== PORTRAIT + STATUS ===== */}
          <div 
            ref={el => { sectionRefs.current[1] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Portrait */}
              <div className="relative group">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl"
                    style={{
                      transform: `perspective(500px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  >
                    <Image
                      src="/nicholusbriz.png"
                      alt="Nicholus Turyamureba"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Nicholus Turyamureba</h2>
                <p className="text-purple-400">Full Stack Software Engineer</p>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                  <span className="text-sm text-gray-400">Uganda 🇺🇬</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CONTACT CARDS ===== */}
          <div 
            ref={el => { sectionRefs.current[2] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <a
                    key={index}
                    href={card.href || '#'}
                    className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-${card.color}-500/50 ${!card.href ? 'cursor-default' : ''}`}
                    onMouseEnter={() => setHoveredCard(card.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-3 bg-${card.color}-500/10 rounded-xl group-hover:bg-${card.color}-500/20 transition-all duration-300`}>
                        <Icon className={`text-${card.color}-400`} size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      <p className="text-sm text-gray-300">{card.detail}</p>
                      <p className="text-xs text-gray-500">{card.description}</p>
                      {card.href && (
                        <ArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" size={16} />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ===== SOCIAL CARDS ===== */}
          <div 
            ref={el => { sectionRefs.current[3] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {socialCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <a
                    key={index}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-${card.color}-500/50`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-3 bg-${card.color}-500/10 rounded-xl group-hover:bg-${card.color}-500/20 transition-all duration-300`}>
                        <Icon className={`text-${card.color}-400`} size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      <p className="text-sm text-gray-300">{card.detail}</p>
                      <p className="text-xs text-gray-500">{card.description}</p>
                      <ArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ===== COLLABORATION AREAS ===== */}
          <div 
            ref={el => { sectionRefs.current[4] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white">What Can I Help You Build?</h2>
              <p className="text-gray-400 mt-2">Areas of expertise and collaboration</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collaborationAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-all duration-300">
                        <Icon className="text-purple-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">{area.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{area.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== TIMELINE ===== */}
          <div 
            ref={el => { sectionRefs.current[5] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white">How We'll Work Together</h3>
              <p className="text-gray-400 mt-2">From first message to final delivery</p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center min-w-[120px] hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-center gap-2">
                        <Icon className="text-purple-400" size={18} />
                        <span className="text-sm font-medium text-white">{step.label}</span>
                      </div>
                      <span className="text-xs text-gray-500">{step.duration}</span>
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <ArrowRight className="text-gray-600" size={20} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== BUILT WITH SIGNATURE ===== */}
          <div 
            ref={el => { sectionRefs.current[6] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">Next.js</span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">TypeScript</span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">Tailwind CSS</span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">Vercel</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-500">
                <Heart className="text-purple-400" size={16} />
                <span>Made with</span>
                <Heart className="text-pink-400" size={16} />
                <span>by</span>
                <span className="text-white font-medium">Nicholus Turyamureba</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Software Engineer • Uganda • 2026</p>
            </div>
          </div>

          {/* ===== FINAL MESSAGE ===== */}
          <div 
            ref={el => { sectionRefs.current[7] = el; }} 
            className={`py-16 text-center transition-all duration-1000 ${visibleSections.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-4">
              <Sparkles className="text-purple-400 mx-auto" size={32} />
              <p className="text-2xl text-gray-300">Looking forward to building with you.</p>
              <p className="text-sm text-gray-500">Thank you for visiting. See you soon.</p>
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
}