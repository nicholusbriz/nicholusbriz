'use client';

import {
  MapPin,
  Mail,
  MessageCircle,
  Share2,
  Download,
  GraduationCap,
  Heart,
  Users,
  Lightbulb,
  Code,
  Target,
  TrendingUp,
  Calendar,
  Award,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

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

export default function AboutContent() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const contacts = [
    { icon: MapPin, label: 'Kampala, Uganda', href: undefined },
    { icon: Mail, label: 'turyamurebanicholus@gmail.com', href: 'mailto:turyamurebanicholus@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/256761996296' },
    { icon: Share2, label: 'GitHub', href: 'https://github.com/nicholusbriz' },
  ];

  const values = [
    { icon: Code, title: 'Creative Coding', description: 'Using code as a medium for storytelling and expression' },
    { icon: Users, title: 'Community Leadership', description: 'Building inclusive developer communities' },
    { icon: Lightbulb, title: 'Digital Innovation', description: 'Architecting platforms that empower communities' },
    { icon: Heart, title: 'Team Collaboration', description: 'Promoting effective teamwork and recognition' },
  ];

  const timeline = [
    { year: '2004', title: 'Started Learning', description: 'First exposure to computers and programming' },
    { year: '2018', title: 'First Project', description: 'Built my first web application' },
    { year: '2022', title: 'BYU–Idaho', description: "Began Bachelor's in Software Development" },
    { year: '2023', title: 'Community Leader', description: 'Started leading developer communities' },
    { year: '2024', title: 'Tech Center', description: 'Building management systems' },
    { year: '2025', title: 'Graduated', description: 'Completed BSc in Software Development' },
    { year: '2026', title: "Africa's Future", description: 'Creating platforms for African innovation' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Split layout */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl transform rotate-3" />
                <div className="absolute inset-4 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl transform -rotate-2" />

                {/* Main image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/nicholusbriz.png"
                    alt="ATBRIZ"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">5+ Years</p>
                      <p className="text-sm text-gray-500">Experience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="space-y-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={reveal} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full">
                <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                <span className="text-sm font-medium text-indigo-700">Software Engineer</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]"
              >
                I'm
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  ATBRIZ
                </span>
              </motion.h1>

              <motion.p variants={reveal} className="text-xl text-gray-600 max-w-2xl">
                Nicholus Turyamureba — Software engineer based in Kampala, Uganda, building innovative solutions that make a difference.
              </motion.p>

              <motion.p variants={reveal} className="text-gray-600 max-w-2xl">
                With expertise in full-stack development, I specialize in creating robust applications using modern technologies like React, Next.js, Node.js, and various cloud services. My journey in tech started in 2004, and since then, I've been committed to continuous learning and community building.
              </motion.p>

              <motion.div variants={reveal} className="flex flex-wrap gap-4">
                <a
                  href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 rounded-xl font-medium hover:border-gray-300 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Bento style */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '15+', label: 'Projects', icon: Code },
              { value: '5+', label: 'Years', icon: Calendar },
              { value: '20+', label: 'Clients', icon: Users },
              { value: '100%', label: 'Dedication', icon: Heart },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-indigo-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Asymmetric grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What I Value</h2>
            <p className="text-xl text-gray-600">Principles that guide my work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8 hover:bg-indigo-50 transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <value.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio Video</h2>
            <p className="text-xl text-gray-400">A quick overview of my work</p>
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

      {/* Timeline */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in my career</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}
                >
                  {/* Year badge */}
                  <div className={`absolute left-8 top-0 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold md:left-1/2 md:-translate-x-1/2 ${index % 2 === 0 ? 'md:-translate-x-1/2' : ''}`}>
                    {item.year}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm ml-24 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's connect and build something amazing</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-indigo-300 transition-colors hover:-translate-y-1"
                >
                  <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                  <p className="font-medium text-gray-900">{contact.label}</p>
                </motion.div>
              );

              if (contact.href) {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                );
              }

              return <div key={contact.label}>{content}</div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
