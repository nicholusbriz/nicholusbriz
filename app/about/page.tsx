'use client';

import {
  MapPin,
  Mail,
  MessageCircle,
  Link as LinkIcon,
  Share2,
  Download,
  GraduationCap,
  Heart,
  Users,
  Lightbulb,
  Code,
  GitFork,
  Link2,
  Cloud,
  Database,
  Cpu,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useScroll, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';

const palette = {
  background: '#000000',
  foreground: '#ffffff',
  card: '#0f0f0f',
  surface: '#1b1b1d',
  border: '#26272d',
  muted: '#bbcbb2',
  accent: '#2fe92b',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18 });
  const springY = useSpring(y, { stiffness: 250, damping: 18 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SpotlightCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(47,233,43,0.08), transparent 38%), ${palette.card}`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent transition-colors duration-300 group-hover:border-[#2fe92b]/50" />
      {children}
    </motion.div>
  );
}

function ProfileVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 20 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(py * -14);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const orbitNodes = [
    { label: 'React', icon: Code, className: '-top-2 left-1/2 -translate-x-1/2' },
    { label: 'Next.js', icon: Link2, className: 'top-1/2 -right-8 -translate-y-1/2' },
    { label: 'Node.js', icon: GitFork, className: 'bottom-3 right-2' },
    { label: 'Cloud', icon: Cloud, className: 'bottom-1/2 -left-9 translate-y-1/2' },
    { label: 'MongoDB', icon: Database, className: 'bottom-2 left-2' },
  ];

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto h-[360px] w-[360px] max-w-full sm:h-[430px] sm:w-[430px]"
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-[8%] rounded-full border border-[#2fe92b]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-[15%] rounded-full border border-dashed border-[#26272d]"
        animate={{ rotate: -360 }}
        transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute inset-[3%] rounded-full bg-[#2fe92b]/10 blur-3xl"
        animate={{
          scale: [1, 1.16, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-[19%] overflow-hidden rounded-full border-4 border-[#26272d] shadow-[0_0_60px_rgba(47,233,43,0.10)]"
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
      >
        <Image
          src="/nicholusbriz.png"
          alt="Nicholus Turyamureba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/20 via-transparent to-[#2fe92b]/10" />
      </motion.div>

      {orbitNodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`absolute z-20 ${node.className}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.45 }}
          >
            <motion.div
              className="flex items-center gap-2 rounded-full border border-[#26272d] bg-[#0f0f0f]/90 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md"
              whileHover={{
                scale: 1.08,
                borderColor: '#2fe92b',
                y: -3,
              }}
            >
              <Icon size={14} className="text-[#2fe92b]" />
              {node.label}
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute right-[8%] top-[14%] text-[#2fe92b]"
        animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={18} />
      </motion.div>

      <motion.div
        className="absolute bottom-[13%] left-[12%] h-2 w-2 rounded-full bg-[#2fe92b]"
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default function AboutPage() {
  const contacts = [
    { icon: MapPin, label: 'Kampala, Uganda', href: undefined },
    { icon: Mail, label: 'turyamurebanicholus@gmail.com', href: 'mailto:turyamurebanicholus@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/256761996296' },
    { icon: LinkIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378' },
    { icon: Share2, label: 'GitHub', href: 'https://github.com/nicholusbriz' },
  ];

  const values = [
    { icon: Code, title: 'Creative Coding', description: 'Using code as a medium for storytelling and cultural expression' },
    { icon: Users, title: 'Community Leadership', description: 'Building inclusive developer communities and advocating for fairness' },
    { icon: Lightbulb, title: 'Digital Platforms', description: 'Architecting platforms that connect and empower communities' },
    { icon: Heart, title: 'Team Collaboration', description: 'Promoting effective teamwork and recognition in group projects' },
  ];

  const timeline = [
    { year: '2004', title: 'Started Learning Technology', description: 'First exposure to computers and programming' },
    { year: '2018', title: 'First Project', description: 'Built my first web application' },
    { year: '2022', title: 'BYU–Idaho', description: "Began Bachelor's in Software Development" },
    { year: '2023', title: 'Community Leader', description: 'Started leading developer communities' },
    { year: '2024', title: 'Freedom City Tech Center', description: 'Building management systems for tech centers' },
    { year: '2025', title: 'Graduated', description: 'Completed BSc in Software Development' },
    { year: '2026', title: "Building Africa's Future", description: 'Creating platforms for African innovation' },
  ];

  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start 75%', 'end 45%'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#000000] text-white">
      {/* Ambient page atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#2fe92b]/[0.025] blur-3xl"
          animate={{ x: [0, 70, 0], y: [0, 35, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 top-[45%] h-[30rem] w-[30rem] rounded-full bg-[#2fe92b]/[0.02] blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -45, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="space-y-7"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#26272d] bg-[#0f0f0f]/70 px-4 py-2 text-sm text-[#bbcbb2] backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#2fe92b]" />
                Software Engineer · Kampala, Uganda
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                About <span className="text-[#2fe92b]">Me</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-[#bbcbb2]">
                I'm Nicholus Turyamureba, a software engineer based in Kampala, Uganda, with a passion for
                building innovative solutions that make a difference in people's lives.
              </motion.p>

              <motion.p variants={fadeUp} className="max-w-2xl leading-7 text-[#bbcbb2]">
                With expertise in full-stack development, I specialize in creating robust applications
                using modern technologies like React, Next.js, Node.js, and various cloud services.
                My journey in tech started in 2004, and since then, I've been committed to continuous
                learning and community building.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                <MagneticButton>
                  <a
                    href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2fe92b] px-6 py-3 font-medium text-[#0f0f0f] transition-shadow hover:shadow-[0_0_30px_rgba(47,233,43,0.22)]"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1b1b1d] px-6 py-3 font-medium text-white transition-all hover:bg-[#2a2a2c] hover:shadow-[0_0_25px_rgba(47,233,43,0.08)]"
                  >
                    Get In Touch
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>

            <ProfileVisual />
          </div>
        </div>
      </section>

      {/* Contact */}
      <motion.section
        className="relative z-10 bg-[#0f0f0f] px-4 py-20 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#2fe92b]">Connect</p>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contacts.map((contact) => {
              const Icon = contact.icon;
              const content = (
                <motion.div
                  variants={fadeUp}
                  className="group relative h-full overflow-hidden rounded-lg border border-[#26272d] bg-[#1b1b1d] p-4 text-center transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,233,43,0.08),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    className="relative"
                  >
                    <Icon className="mx-auto mb-3 h-6 w-6 text-[#2fe92b]" />
                  </motion.div>
                  <p className="relative text-sm text-white">{contact.label}</p>
                </motion.div>
              );

              if (contact.href) {
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="h-full"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={contact.label} className="h-full">{content}</div>;
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Values */}
      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#2fe92b]">Principles</p>
            <h2 className="text-3xl font-bold text-white">My Values</h2>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={fadeUp}>
                  <SpotlightCard className="h-full rounded-xl border border-[#26272d]">
                    <div className="relative p-6">
                      <motion.div
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1b1b1d]"
                        whileHover={{ rotate: index % 2 === 0 ? 7 : -7, scale: 1.08 }}
                      >
                        <Icon className="h-7 w-7 text-[#2fe92b]" />
                      </motion.div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{value.title}</h3>
                      <p className="leading-7 text-[#bbcbb2]">{value.description}</p>
                      <motion.div
                        className="mt-5 h-px origin-left bg-[#2fe92b]/40"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + index * 0.08, duration: 0.7 }}
                      />
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section ref={journeyRef} className="relative z-10 bg-[#0f0f0f] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#2fe92b]">Timeline</p>
            <h2 className="text-3xl font-bold text-white">My Journey</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#26272d]" />
            <motion.div
              className="absolute left-[7px] top-2 w-0.5 origin-top bg-[#2fe92b]"
              style={{ height: 'calc(100% - 8px)', scaleY: lineScale }}
            />

            <div className="space-y-2">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="group relative flex gap-6 rounded-xl p-3 transition-colors hover:bg-[#1b1b1d]/60"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="relative z-10 mt-2 h-4 w-4 shrink-0 rounded-full border-2 border-[#2fe92b] bg-[#0f0f0f]"
                    whileInView={{ backgroundColor: '#2fe92b', scale: [0.8, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  />

                  <div className="pb-8">
                    <div className="mb-1 font-mono text-sm text-[#2fe92b]">{item.year}</div>
                    <h3 className="mb-1 text-lg font-semibold text-white transition-colors group-hover:text-[#2fe92b]">
                      {item.title}
                    </h3>
                    <p className="leading-7 text-[#bbcbb2]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-10 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#2fe92b]">Academic Background</p>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl border border-[#26272d] bg-[#0f0f0f]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="absolute left-0 right-0 top-0 h-px origin-left bg-[#2fe92b]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />

            <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6">
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#1b1b1d]"
                whileHover={{ rotate: 6, scale: 1.08 }}
              >
                <GraduationCap className="h-7 w-7 text-[#2fe92b]" />
              </motion.div>

              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-white">
                  Bachelor of Science in Software Development
                </h3>
                <p className="mt-2 text-[#bbcbb2]">Brigham Young University–Idaho</p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#26272d] bg-[#1b1b1d] px-3 py-1.5 text-sm text-[#bbcbb2]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2fe92b]" />
                  Graduated: 2025
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reduced-motion-friendly closing accent */}
      <div className="relative z-10 flex justify-center pb-16">
        <motion.div
          className="h-px w-24 bg-[#2fe92b]/50"
          animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}