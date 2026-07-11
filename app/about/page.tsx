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
  Link,
  Share2,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const contacts = [
    {
      icon: MapPin,
      label: 'Kampala, Uganda',
      href: undefined as string | undefined,
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
      icon: Link,
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
          <span className="inline-block font-mono text-xs tracking-widest text-[#A78BFA] uppercase mb-4">
            About / Home
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">About Me</h2>
          <p className="text-xl text-gray-300">Nicholus Turyamureba</p>
          <p className="text-base text-[#A78BFA] font-medium mt-1">
            Tech-Driven Storyteller &amp; Community Builder
          </p>
          <p className="text-sm text-gray-500 mt-3 flex items-center justify-center gap-2 font-mono">
            <GraduationCap className="text-[#8B5CF6]" size={16} />
            BYU–Idaho Graduate · Bachelor's in Software Development
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            const content = (
              <motion.span
                className="flex items-center gap-2 bg-[#12121A] border border-gray-800 rounded-full px-4 py-2.5 text-sm text-gray-300"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                whileHover={
                  contact.href
                    ? {
                        y: -3,
                        borderColor: 'rgba(139, 92, 246, 0.5)',
                        color: '#A78BFA',
                      }
                    : undefined
                }
              >
                <Icon size={16} className="text-[#8B5CF6]" />
                {contact.label}
              </motion.span>
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
        </motion.div>

        {/* Bio + Professional Readiness */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#12121A] border border-gray-800 rounded-2xl p-8 hover:border-[#8B5CF6]/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: -12, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <GraduationCap className="text-[#8B5CF6]" size={26} />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-[#A78BFA]">Bachelor's Degree in Software Development</strong> from
                Brigham Young University–Idaho. Comprehensive training in software engineering, data
                structures, algorithms, and modern development practices.
              </p>
            </div>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              I'm a Ugandan software developer passionate about the intersection of code, culture, and
              creativity. I believe software development is more than just writing code — it's about
              building platforms that connect communities and tell meaningful stories.
            </motion.p>
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              As a developer community leader, I advocate for fairness in teamwork and inclusive
              communication. I draw strength from my faith and family values, using them as inspiration
              to create digital solutions that serve human needs.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-[#12121A] border border-gray-800 rounded-2xl p-8 hover:border-[#8B5CF6]/40 transition-colors duration-300 h-fit"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[#8B5CF6]" size={26} />
              <h3 className="text-2xl font-bold text-white">Professional Readiness</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-5">
              Successfully completed my Bachelor's degree program with comprehensive training in:
            </p>
            <ul className="space-y-3 text-gray-300">
              {training.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <span className="text-[#8B5CF6] mt-1 font-mono">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                className="bg-[#12121A] border border-gray-800 rounded-xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -4, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              >
                <div className="w-12 h-12 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#A78BFA]" size={22} />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}