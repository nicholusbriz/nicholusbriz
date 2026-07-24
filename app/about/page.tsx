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
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function AboutPage() {
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

  const contacts = [
    {
      icon: MapPin,
      label: 'Kampala, Uganda',
      href: undefined,
    },
    {
      icon: Mail,
      label: 'turyamurebanicholus@gmail.com',
      href: 'mailto:turyamurebanicholus@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/256761996296',
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378',
    },
    {
      icon: Share2,
      label: 'GitHub',
      href: 'https://github.com/nicholusbriz',
    },
  ];

  const values = [
    {
      icon: Code,
      title: 'Creative Coding',
      description: 'Using code as a medium for storytelling and cultural expression',
    },
    {
      icon: Users,
      title: 'Community Leadership',
      description: 'Building inclusive developer communities and advocating for fairness',
    },
    {
      icon: Lightbulb,
      title: 'Digital Platforms',
      description: 'Architecting platforms that connect and empower communities',
    },
    {
      icon: Heart,
      title: 'Team Collaboration',
      description: 'Promoting effective teamwork and recognition in group projects',
    },
  ];

  const training = [
    'Full-stack web development (React, Node.js, TypeScript)',
    'Database design and management',
    'Software engineering best practices',
    'Agile methodologies and team collaboration',
  ];

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/home-page-image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className={`inline-block font-mono text-xs tracking-widest text-purple-400 uppercase mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              About / Home
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className={`text-xl text-gray-300 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '150ms' }}>
              Nicholus Turyamureba
            </p>
            <p className={`text-base text-purple-400 font-medium mt-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              Tech-Driven Storyteller &amp; Community Builder
            </p>
            <p className={`text-sm text-gray-500 mt-3 flex items-center justify-center gap-2 font-mono transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '250ms' }}>
              <GraduationCap className="text-purple-500" size={16} />
              BYU–Idaho Graduate · Bachelor's in Software Development
            </p>
          </div>

          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              const content = (
                <span 
                  className={`flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2.5 text-sm text-gray-300 transition-all duration-300 ${
                    contact.href ? 'hover:border-purple-500/50 hover:text-purple-400 hover:scale-105 cursor-pointer' : ''
                  }`}
                  style={{
                    transitionDelay: `${200 + i * 50}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  }}
                >
                  <Icon size={16} className="text-purple-500" />
                  {contact.label}
                </span>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label}>{content}</div>
              );
            })}
          </div>

          {/* Bio + Professional Readiness */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Education & Bio */}
            <div className="space-y-6">
              <div 
                className={`p-6 md:p-8 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <GraduationCap className="text-purple-500" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-purple-400">Bachelor's Degree in Software Development</strong> from
                  Brigham Young University–Idaho. Comprehensive training in software engineering, data
                  structures, algorithms, and modern development practices.
                </p>
              </div>

              <div 
                className={`space-y-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-gray-300 leading-relaxed">
                  I'm a Ugandan software developer passionate about the intersection of code, culture, and
                  creativity. I believe software development is more than just writing code — it's about
                  building platforms that connect communities and tell meaningful stories.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a developer community leader, I advocate for fairness in teamwork and inclusive
                  communication. I draw strength from my faith and family values, using them as inspiration
                  to create digital solutions that serve human needs.
                </p>
              </div>
            </div>

            {/* Professional Readiness */}
            <div 
              className={`p-6 md:p-8 transition-all duration-1000 h-fit ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Briefcase className="text-purple-500" size={26} />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Readiness</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-5">
                Successfully completed my Bachelor's degree program with comprehensive training in:
              </p>
              <ul className="space-y-3 text-gray-300">
                {training.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 transition-all duration-500 hover:translate-x-1"
                    style={{
                      transitionDelay: `${400 + i * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                    }}
                  >
                    <span className="text-purple-500 mt-1 font-mono">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`p-6 transition-all duration-500 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-purple-400" size={22} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
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

    </>
  );
}