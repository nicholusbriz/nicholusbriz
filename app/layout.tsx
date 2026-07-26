"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedSidebar from "@/components/AnimeSidebar";
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronUp, 
  Download, 
  GitFork, 
  MessageCircle,
  Sparkles,
  Eye,
  Target,
  Code,
  Briefcase,
  GraduationCap,
  Home,
  User,
  Layers,
  Mail,
  Heart
} from 'lucide-react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Metadata export is not available in Client Components
// We'll need to use a different approach for metadata
// Option 1: Create a separate layout.tsx with metadata (server) and a client wrapper
// Option 2: Use next/head or other client-side SEO solutions

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pageIdentity, setPageIdentity] = useState('');
  const [showIdentity, setShowIdentity] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Page identity detection
  useEffect(() => {
    const path = window.location.pathname;
    const identities: { [key: string]: string } = {
      '/': 'HOME',
      '/about': 'ABOUT ME',
      '/skills': 'TECHNICAL EXPERTISE',
      '/projects': 'SELECTED WORK',
      '/contact': "LET'S BUILD TOGETHER",
    };
    const currentIdentity = identities[path] || 'HOME';
    setPageIdentity(currentIdentity);
    setShowIdentity(true);
    
    const timer = setTimeout(() => {
      setShowIdentity(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick actions
  const quickActions = [
    { icon: ChevronUp, label: 'Scroll Top', action: scrollToTop, color: 'purple' },
    { icon: Download, label: 'Resume', href: '/NICHOLUS TURYAMUREBA (ATBRIZ).pdf', color: 'blue' },
    { icon: GitFork, label: 'GitHub', href: 'https://github.com/nicholusbriz', color: 'gray' },
    { icon: Mail, label: 'Contact', href: '/contact', color: 'pink' },
  ];

  // Navigation items for sidebar enhancement
  const navItems = [
    { href: '/', icon: Home, label: 'Home', color: 'purple' },
    { href: '/about', icon: User, label: 'About', color: 'blue' },
    { href: '/skills', icon: Code, label: 'Skills', color: 'emerald' },
    { href: '/projects', icon: Briefcase, label: 'Projects', color: 'orange' },
    { href: '/contact', icon: Mail, label: 'Contact', color: 'pink' },
  ];

  // Get current page color
  const [pageColor, setPageColor] = useState('purple');

  useEffect(() => {
    const path = window.location.pathname;
    const colors: { [key: string]: string } = {
      '/': 'purple',
      '/about': 'blue',
      '/skills': 'emerald',
      '/projects': 'orange',
      '/contact': 'pink',
    };
    setPageColor(colors[path] || 'purple');
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* ===== PREMIUM CURSOR ===== */}
        <div 
          className="fixed pointer-events-none z-[9999] hidden lg:block"
          style={{
            transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
            transition: 'transform 0.05s ease-out'
          }}
        >
          <div className={`w-8 h-8 rounded-full border-2 border-${pageColor}-500/50 mix-blend-difference animate-pulse`} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
        </div>

        {/* ===== PAGE IDENTITY BANNER ===== */}
        <div 
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-all duration-700 ${
            showIdentity ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="text-center">
            <div className={`text-6xl md:text-8xl lg:text-[10rem] font-bold bg-gradient-to-r from-${pageColor}-500 via-${pageColor}-400 to-${pageColor}-600 bg-clip-text text-transparent animate-gradient`}>
              {pageIdentity}
            </div>
            <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        {/* ===== ANIMATED SIDEBAR ===== */}
        <AnimatedSidebar />

        {/* ===== DEVELOPER STATUS CARD ===== */}
        <div 
          className={`fixed right-4 top-20 z-40 transition-all duration-500 hidden lg:block ${
            isScrolled ? 'scale-90 opacity-80' : 'scale-100 opacity-100'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 min-w-[180px] hover:border-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                NT
              </div>
              <div>
                <div className="text-sm font-medium text-white">Nicholus Turyamureba</div>
                <div className="text-[10px] text-gray-400">Software Engineer</div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-emerald-400">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SCROLL PROGRESS RING ===== */}
        <div 
          className="fixed bottom-24 right-4 z-40 cursor-pointer hidden lg:block"
          onClick={scrollToTop}
        >
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke={`url(#progressGradient-${pageColor})`}
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 125.6,
                  strokeDashoffset: 125.6 - (scrollProgress / 100) * 125.6,
                  transition: 'stroke-dashoffset 0.2s ease-out'
                }}
              />
              <defs>
                <linearGradient id={`progressGradient-${pageColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`text-${pageColor}-500`} />
                  <stop offset="100%" className={`text-${pageColor}-400`} />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-mono text-white/70">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>

        {/* ===== QUICK ACTION DOCK ===== */}
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            const isLink = action.href && action.href.startsWith('http');
            const isInternal = action.href && !action.href.startsWith('http');
            
            const buttonContent = (
              <div 
                className={`group relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 hover:border-${action.color}-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${action.color}-500/20 flex items-center justify-center cursor-pointer`}
              >
                <Icon className={`w-4 h-4 text-gray-400 group-hover:text-${action.color}-400 transition-colors`} />
                <div className="absolute right-full mr-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {action.label}
                </div>
              </div>
            );

            if (action.href) {
              if (isLink) {
                return (
                  <a key={index} href={action.href} target="_blank" rel="noopener noreferrer">
                    {buttonContent}
                  </a>
                );
              }
              if (isInternal) {
                return (
                  <a key={index} href={action.href}>
                    {buttonContent}
                  </a>
                );
              }
            }

            return (
              <div key={index} onClick={action.action}>
                {buttonContent}
              </div>
            );
          })}
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <main className="lg:ml-64 pt-4 lg:pt-0">
            <div className="min-h-full transition-opacity duration-500">
              {children}
            </div>
          </main>
        </div>

        {/* ===== GLOBAL STYLES ===== */}
        <style jsx global>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* Global scrollbar styling */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(139, 92, 246, 0.4);
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 92, 246, 0.6);
          }

          /* Global selection color */
          ::selection {
            background: rgba(139, 92, 246, 0.3);
            color: white;
          }
        `}</style>
      </body>
    </html>
  );
}