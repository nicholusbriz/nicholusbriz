'use client';

// Note: This is a client component that contains all the interactive elements
// The server component (page.tsx) handles metadata

import {
  ArrowRight,
  Briefcase,
  Check,
  Code,
  Database,
  Download,
  GitFork,
  Globe,
  Layers3,
  Mail,
  Server,
  Terminal,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const GREEN = '#2fe92b';
const ease = [0.22, 1, 0.36, 1] as const;

const hostnameOf = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const reveal = {
  hidden: { opacity: 0, y: 42, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.96 }}
    >
      <div className={className}>{children}</div>
    </motion.div>
  );
}

function InteractiveCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const rotateX = useSpring(useTransform(mouseY, [0, 100], [4, -4]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 100], [-4, 4]), {
    stiffness: 180,
    damping: 22,
  });

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => {
        setHovered(false);
        mouseX.set(50);
        mouseY.set(50);
      }}
      onPointerMove={(event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-24 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${GREEN}26 0%, transparent 60%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function CountUpValue({ value }: { value: string }) {
  const reducedMotion = useReducedMotion();
  const numeric = Number.parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [count, setCount] = useState(reducedMotion ? numeric : 0);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;
    const duration = 1000;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(numeric * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric, reducedMotion]);

  return `${count}${suffix}`;
}

function TypewriterCycle({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), 1700);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const speed = deleting ? 40 : 85;
    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, reducedMotion]);

  if (reducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  const current = words[index % words.length] ?? '';

  return (
    <span className={className}>
      {current.slice(0, subIndex)}
      <motion.span
        aria-hidden
        className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-current align-middle"
        style={{ height: '0.85em' }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#2fe92b]">
      <span className="h-px w-8 bg-[#2fe92b]/60" />
      {children}
    </div>
  );
}

function TechNode({
  name,
  icon: Icon,
  index,
  active,
  onSelect,
}: {
  name: string;
  icon: React.ElementType;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3 text-left backdrop-blur-xl transition-colors ${
        active
          ? 'border-[#2fe92b]/50 bg-[#1b1b1d]'
          : 'border-[#26272d] bg-[#0f0f0f]/90 hover:border-[#2fe92b]/30'
      }`}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
          active
            ? 'border-[#2fe92b]/40 bg-[#2fe92b]/10'
            : 'border-[#26272d] bg-[#1b1b1d]'
        }`}
      >
        <Icon className={`h-4 w-4 ${active ? 'text-[#2fe92b]' : 'text-[#bbcbb2]'}`} />
      </span>
      <span>
        <span className="block font-mono text-[9px] tracking-widest text-[#bbcbb2]/35">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`text-sm font-medium ${active ? 'text-[#2fe92b]' : 'text-white'}`}>
          {name}
        </span>
      </span>
      {active && (
        <motion.span
          layoutId="active-tech-dot"
          className="absolute right-3 h-1.5 w-1.5 rounded-full bg-[#2fe92b]"
        />
      )}
    </motion.button>
  );
}

const commandLinks = [
  { label: 'Home', href: '#top', hint: 'index' },
  { label: 'About', href: '#about', hint: 'bio' },
  { label: 'Skills', href: '#skills', hint: 'stack' },
  { label: 'Projects', href: '#projects', hint: 'work' },
  { label: 'Contact', href: '#contact', hint: 'reach out' },
  { label: 'Download Resume', href: '/NICHOLUS TURYAMUREBA (ATBRIZ).pdf', hint: '.pdf' },
  { label: 'Open GitHub', href: 'https://github.com/nicholusbriz', hint: 'external' },
];

function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commandLinks.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setHighlighted(0);
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  const go = (href: string) => {
    onClose();
    if (href.startsWith('http') || href.endsWith('.pdf')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[16vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-lg overflow-hidden rounded-xl border border-[#26272d] bg-[#0f0f0f] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[#26272d] px-4 py-3">
              <span className="font-mono text-sm text-[#2fe92b]">/</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setHighlighted(0);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
                  }
                  if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    setHighlighted((h) => Math.max(h - 1, 0));
                  }
                  if (event.key === 'Enter' && filtered[highlighted]) {
                    go(filtered[highlighted].href);
                  }
                  if (event.key === 'Escape') onClose();
                }}
                placeholder="Jump to a section, or a command..."
                className="w-full bg-transparent font-mono text-sm text-white placeholder:text-[#bbcbb2]/40 focus:outline-none"
              />
              <span className="hidden shrink-0 rounded border border-[#26272d] px-1.5 py-0.5 font-mono text-[10px] text-[#bbcbb2]/50 sm:inline">
                ESC
              </span>
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-4 py-6 text-center text-sm text-[#bbcbb2]/50">
                  No matches
                </div>
              )}
              {filtered.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setHighlighted(index)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    highlighted === index
                      ? 'bg-[#1b1b1d] text-[#2fe92b]'
                      : 'text-[#bbcbb2]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] text-[#bbcbb2]/40">
                    {item.hint}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HomeContent() {
  const reducedMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState('Next.js');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen(true);
      } else if (event.key === '/') {
        event.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Clients', value: '20+' },
  ];

  const featuredProjects = [
    {
      title: 'Avora Pig Farming Website',
      description: 'Comprehensive farm management system',
      link: 'https://nicholusbriz.github.io/avora-pig-framing-website-/',
      stack: ['Web', 'Management', 'UI'],
    },
    {
      title: 'Freedom City Tech Center',
      description: 'Management system for tech centers',
      link: 'https://selfless-henna.vercel.app/',
      stack: ['Next.js', 'MongoDB', 'Portal'],
    },
    {
      title: 'Liahona Tourism Booking',
      description: 'Tourism booking platform',
      link: 'https://liahona.vercel.app/',
      stack: ['Next.js', 'Booking', 'Web'],
    },
  ];

  const skills = [
    { name: 'React', icon: Code, detail: 'Component-driven interfaces and interactive frontend experiences.' },
    { name: 'Next.js', icon: Layers3, detail: 'Full-stack applications, routing, rendering, and production architecture.' },
    { name: 'Node.js', icon: Server, detail: 'Backend services, APIs, authentication, and application logic.' },
    { name: 'TypeScript', icon: Terminal, detail: 'Typed application architecture for maintainable software.' },
    { name: 'MongoDB', icon: Database, detail: 'Document data modeling and application persistence.' },
    { name: 'PostgreSQL', icon: Database, detail: 'Relational data modeling and structured application data.' },
    { name: 'AWS', icon: Globe, detail: 'Cloud infrastructure and production deployment workflows.' },
    { name: 'Docker', icon: Layers3, detail: 'Containerized development and deployment environments.' },
  ];

  const aboutItems = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      desc: 'Building robust applications with modern technologies like React, Next.js, and Node.js',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      desc: 'Leading projects from conception to deployment with focus on quality and timeline',
    },
    {
      icon: User,
      title: 'Community Building',
      desc: 'Active in developer communities, mentoring and sharing knowledge with others',
    },
  ];

  const activeSkillData = skills.find((skill) => skill.name === activeSkill) ?? skills[1];

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? window.scrollY / height : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const orbitSkills = [
    { name: 'React', x: '8%', y: '18%', delay: 0 },
    { name: 'Next.js', x: '72%', y: '10%', delay: 0.6 },
    { name: 'TypeScript', x: '83%', y: '48%', delay: 1.2 },
    { name: 'Node.js', x: '62%', y: '82%', delay: 1.8 },
    { name: 'MongoDB', x: '10%', y: '72%', delay: 2.4 },
  ];

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-clip bg-[#000000] text-white selection:bg-[#2fe92b] selection:text-[#0f0f0f]"
    >
      {/* Global scroll indicator */}
      <motion.div
        className="fixed left-0 top-0 z-[70] h-px origin-left bg-[#2fe92b]"
        style={{ scaleX: scrollProgress }}
      />

      {/* Ambient page field */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: `${GREEN}0d` }}
          animate={
            reducedMotion
              ? undefined
              : { scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 75%)',
          }}
        />
      </div>

      {/* Hero Section - with image and text side by side */}
      <section
        ref={heroRef}
        className="relative z-10 flex min-h-[100svh] items-center px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={reveal}
                className="inline-flex items-center gap-2 rounded-full border border-[#26272d] bg-[#0f0f0f]/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#bbcbb2] backdrop-blur-xl"
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#2fe92b]"
                  animate={
                    reducedMotion ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.55, 1] }
                  }
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Available for new opportunities
              </motion.div>

              <div className="space-y-5">
                <motion.h1
                  variants={reveal}
                  className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                >
                  Hi, I&apos;m{' '}
                  <span className="relative inline-block text-[#2fe92b]">
                    <TypewriterCycle
                      words={[
                        'Nicholus',
                        'Turyamureba',
                        'aka atbriz',
                        'Software Developer',
                        'Full-Stack Engineer',
                        'Open Source Contributor',
                        'Tech Blogger',
                        'Problem Solver',
                        'Lifelong Learner',
                        'Coffee-Driven Developer'
                      ]}
                    />
                  </span>
                  <span className="mt-2 block text-white">I build software that moves.</span>
                </motion.h1>

                <motion.p
                  variants={reveal}
                  className="max-w-2xl text-xl leading-relaxed text-[#bbcbb2] sm:text-2xl"
                >
                  Software Engineer &amp; Full-Stack Developer
                </motion.p>

                <motion.p
                  variants={reveal}
                  className="max-w-xl text-base leading-7 text-[#bbcbb2]/80"
                >
                  I build exceptional digital experiences that solve real-world
                  problems. Passionate about clean code, scalable architecture,
                  and user-centered design.
                </motion.p>
              </div>

              <motion.div variants={reveal} className="flex flex-wrap gap-4">
                <MagneticButton className="rounded-lg">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#2fe92b] px-6 py-3 font-medium text-[#0f0f0f] shadow-[0_0_30px_rgba(47,233,43,0.12)] transition-shadow hover:shadow-[0_0_42px_rgba(47,233,43,0.25)]"
                  >
                    View Projects
                    <ArrowRight size={18} />
                  </Link>
                </MagneticButton>

                <MagneticButton className="rounded-lg">
                  <a
                    href="/NICHOLUS TURYAMUREBA (ATBRIZ).pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-[#26272d] bg-[#1b1b1d] px-6 py-3 font-medium text-white transition-colors hover:border-[#2fe92b]/40 hover:bg-[#202023]"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.button
                type="button"
                variants={reveal}
                onClick={() => setPaletteOpen(true)}
                className="group flex w-fit items-center gap-2 font-mono text-xs text-[#bbcbb2]/50 transition-colors hover:text-[#2fe92b]"
              >
                <span className="rounded border border-[#26272d] px-1.5 py-0.5 group-hover:border-[#2fe92b]/40">/</span>
                to jump around the site
              </motion.button>

              <motion.div
                variants={reveal}
                className="grid max-w-lg grid-cols-3 border-y border-[#26272d] py-5"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`${index > 0 ? 'border-l border-[#26272d]' : ''} px-4 first:pl-0`}
                    whileHover={{ y: -3 }}
                  >
                    <div className="text-2xl font-bold tracking-tight text-[#2fe92b] sm:text-3xl">
                      <CountUpValue value={stat.value} />
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[#bbcbb2]/65">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image with Orbit Skills */}
            <motion.div
              className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[34rem]"
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1, ease }}
            >
              <div className="relative aspect-square w-[min(82vw,31rem)]">
                <motion.div
                  className="absolute inset-[-8%] rounded-full blur-3xl"
                  style={{ background: `${GREEN}20` }}
                  animate={
                    reducedMotion
                      ? undefined
                      : { scale: [0.92, 1.08, 0.92], opacity: [0.45, 0.75, 0.45] }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div
                  className="absolute inset-[-3%] rounded-full border border-[#2fe92b]/15"
                  animate={reducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />

                <div className="absolute inset-0 rounded-full border border-[#26272d] bg-[#0f0f0f] p-2 shadow-[0_0_80px_rgba(47,233,43,0.08)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full border border-[#26272d]">
                    <Image
                      src="/nicholusbriz.png"
                      alt="Nicholus Turyamureba"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 70vw, 480px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Orbit technology labels */}
                {orbitSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="absolute z-20"
                    style={{ left: skill.x, top: skill.y }}
                    animate={
                      reducedMotion
                        ? undefined
                        : { y: [0, -7, 0], x: [0, 3, 0] }
                    }
                    transition={{
                      duration: 4.5,
                      delay: skill.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSkill(skill.name)}
                      className={`rounded-full border px-3 py-2 text-[10px] font-medium backdrop-blur-xl transition-all ${
                        activeSkill === skill.name
                          ? 'border-[#2fe92b]/50 bg-[#0f0f0f] text-[#2fe92b] shadow-[0_0_22px_rgba(47,233,43,0.15)]'
                          : 'border-[#26272d] bg-[#0f0f0f]/90 text-[#bbcbb2]'
                      }`}
                    >
                      {skill.name}
                    </button>
                  </motion.div>
                ))}

                <motion.div
                  className="absolute -bottom-3 left-1/2 z-30 -translate-x-1/2 rounded-full border border-[#26272d] bg-[#0f0f0f]/95 px-4 py-2 text-xs text-[#bbcbb2] shadow-2xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#2fe92b]" />
                  Building digital experiences
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Video Section - Now placed BELOW the hero content */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#26272d] bg-[#0f0f0f] shadow-[0_0_60px_rgba(47,233,43,0.08)]">
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
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-3">
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
                    className="rounded-full bg-[#2fe92b]/20 p-2 text-[#2fe92b] transition-colors hover:bg-[#2fe92b]/30"
                  >
                    {isPaused ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    className="rounded-full bg-[#2fe92b]/20 p-2 text-[#2fe92b] transition-colors hover:bg-[#2fe92b]/30"
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                        <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                    </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                    )}
                  </button>
                </div>
                <span className="font-mono text-xs text-[#bbcbb2]/60">
                  {isMuted ? 'Muted' : 'Sound On'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-[#bbcbb2]/50 transition-colors hover:text-[#2fe92b]"
              animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
              <span className="h-8 w-px bg-gradient-to-b from-[#2fe92b] to-transparent" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 border-y border-[#26272d]/70 bg-[#0f0f0f] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 max-w-2xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionLabel>About</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering with purpose.
            </h2>
            <p className="mt-5 leading-7 text-[#bbcbb2]">
              I&apos;m a software engineer based in Kampala, Uganda, with a
              passion for building innovative solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutItems.map((item, index) => (
              <motion.div key={item.title} variants={reveal}>
                <InteractiveCard className="h-full rounded-2xl border border-[#26272d] bg-[#1b1b1d] p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#26272d] bg-[#0f0f0f]"
                      whileHover={{ rotate: -6, scale: 1.08 }}
                    >
                      <item.icon className="h-6 w-6 text-[#2fe92b]" />
                    </motion.div>
                    <span className="font-mono text-[10px] tracking-widest text-[#bbcbb2]/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-7 text-[#bbcbb2]/75">{item.desc}</p>
                  <motion.div
                    className="mt-7 h-px origin-left bg-[#2fe92b]/40"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.8, ease }}
                  />
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#bbcbb2] transition-colors hover:text-[#2fe92b]"
            >
              Learn More About Me
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology marquee */}
      <section className="relative z-10 overflow-hidden border-b border-[#26272d]/70 bg-[#000000] py-5">
        <div className="flex w-max">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-[10px] uppercase tracking-[0.28em] text-[#bbcbb2]/40"
            animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill.name}-${index}`} className="inline-flex items-center gap-8">
                {skill.name}
                <span className="text-[#2fe92b]">●</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills / interactive technology system */}
      <section
        id="skills"
        className="relative z-10 overflow-hidden border-y border-[#26272d]/70 bg-[#0f0f0f] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 max-w-2xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionLabel>Toolkit</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Skills &amp; Expertise
            </h2>
            <p className="mt-5 leading-7 text-[#bbcbb2]">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={reveal}>
                  <TechNode
                    name={skill.name}
                    icon={skill.icon}
                    index={index}
                    active={activeSkill === skill.name}
                    onSelect={() => setActiveSkill(skill.name)}
                  />
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkillData.name}
                initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -15, filter: 'blur(5px)' }}
                transition={{ duration: 0.35, ease }}
                className="relative min-h-[250px] overflow-hidden rounded-2xl border border-[#26272d] bg-[#1b1b1d] p-7"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#2fe92b]/5 blur-3xl" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#bbcbb2]/35">
                        Selected technology
                      </span>
                      <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                        {activeSkillData.name}
                      </h3>
                    </div>
                    <activeSkillData.icon className="h-8 w-8 text-[#2fe92b]" />
                  </div>

                  <p className="mt-8 max-w-md leading-7 text-[#bbcbb2]/75">
                    {activeSkillData.detail}
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2fe92b]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bbcbb2]/45">
                      Core stack / actively used
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="mt-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/skills"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#bbcbb2] transition-colors hover:text-[#2fe92b]"
            >
              View All Skills
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How I build */}
      <section className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 max-w-2xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">How I build.</h2>
            <p className="mt-5 leading-7 text-[#bbcbb2]/75">
              From an idea to a production-ready experience, every stage has a purpose.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-[#26272d] md:left-1/2 md:block" />
            <div className="grid gap-5">
              {[
                ['01', 'THINK', 'Problem → Research → Requirements', 'Start with the problem, understand the user, and define what success looks like.'],
                ['02', 'DESIGN', 'UX → Architecture → Components', 'Turn requirements into a clear interface and scalable technical structure.'],
                ['03', 'BUILD', 'React → Next.js → APIs → Database', 'Build reusable components, application logic, integrations, and data systems.'],
                ['04', 'DEPLOY', 'Testing → Optimization → Deployment', 'Polish the experience, validate the system, and ship a dependable product.'],
              ].map(([number, title, flow, description], index) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`relative md:w-[calc(50%-2rem)] ${index % 2 ? 'md:ml-auto' : ''}`}
                >
                  <InteractiveCard className="rounded-2xl border border-[#26272d] bg-[#0f0f0f] p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-[#2fe92b]">
                          {number}
                        </span>
                        <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                      </div>
                      <span className="hidden text-right font-mono text-[9px] uppercase tracking-[0.15em] text-[#bbcbb2]/35 sm:block">
                        Engineering<br />workflow
                      </span>
                    </div>
                    <div className="mt-6 border-t border-[#26272d] pt-5">
                      <p className="font-mono text-xs text-[#2fe92b]/80">{flow}</p>
                      <p className="mt-3 leading-7 text-[#bbcbb2]/65">{description}</p>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 border-y border-[#26272d]/70 bg-[#0f0f0f] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Projects in motion.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#bbcbb2]/70">
              A selection of my recent work that showcases my skills and expertise.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={reveal}
                onMouseEnter={() => setActiveProject(project.title)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <InteractiveCard className="h-full min-h-[330px] rounded-2xl border border-[#26272d] bg-[#000000] p-7">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#bbcbb2]/40">
                      0{index + 1}
                    </span>
                    <motion.span
                      className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#bbcbb2]/40"
                      animate={{
                        color: activeProject === project.title ? GREEN : undefined,
                      }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2fe92b]" />
                      Live work
                    </motion.span>
                  </div>

                  <h3 className="max-w-xs text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-sm leading-7 text-[#bbcbb2]/70">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#26272d] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#bbcbb2]/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {activeProject === project.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="mt-5 overflow-hidden rounded-lg border border-[#26272d] bg-[#0a0a0a]"
                      >
                        <div className="px-3 py-2.5 font-mono text-[10px] leading-6 text-[#bbcbb2]/60">
                          {[
                            `deploying ${project.title.toLowerCase().replace(/\s+/g, '-')}...`,
                            'build complete',
                            `live at ${hostnameOf(project.link)}`,
                          ].map((line, lineIndex) => (
                            <motion.div
                              key={line}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lineIndex * 0.12, duration: 0.2 }}
                            >
                              <span className="mr-2 text-[#2fe92b]">
                                {lineIndex === 0 ? '$' : '✓'}
                              </span>
                              {line}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#2fe92b]"
                  >
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <motion.div
                    className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-[#2fe92b]"
                    animate={{
                      width: activeProject === project.title ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.35, ease }}
                  />
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#bbcbb2] transition-colors hover:text-[#2fe92b]"
            >
              View All Projects
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Developer dashboard */}
      <section className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="overflow-hidden rounded-2xl border border-[#26272d] bg-[#0f0f0f] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between border-b border-[#26272d] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2fe92b]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#bbcbb2]/55">
                  ATBRIZ.DEV
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#bbcbb2]/30">
                system / live
              </span>
            </div>

            <div className="grid md:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-9">
                <div className="font-mono text-xs leading-8 sm:text-sm">
                  <div className="text-[#bbcbb2]/30">01</div>
                  <div>
                    <span className="text-[#bbcbb2]/45">const</span>{' '}
                    <span className="text-[#2fe92b]">developer</span>{' '}
                    <span className="text-[#bbcbb2]/45">=</span>{' '}
                    <span className="text-white">{'{'}</span>
                  </div>
                  <div className="pl-5">
                    <span className="text-[#bbcbb2]/45">name:</span>{' '}
                    <span className="text-white">&quot;Nicholus Turyamureba&quot;</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-[#bbcbb2]/45">role:</span>{' '}
                    <span className="text-white">&quot;Full-Stack Developer&quot;</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-[#bbcbb2]/45">stack:</span>{' '}
                    <span className="text-[#2fe92b]">[</span>
                  </div>
                  <div className="pl-10 text-[#bbcbb2]/70">
                    &quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;,
                  </div>
                  <div className="pl-10 text-[#bbcbb2]/70">
                    &quot;Node.js&quot;, &quot;MongoDB&quot;
                  </div>
                  <div className="pl-5">
                    <span className="text-[#2fe92b]">]</span>
                  </div>
                  <div>
                    <span className="text-white">{'}'}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#26272d] p-6 md:w-72 md:border-l md:border-t-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#bbcbb2]/30">
                  Runtime
                </div>
                <div className="mt-6 space-y-4">
                  {['Frontend', 'Backend', 'Database', 'Deployment'].map((item) => (
                    <div key={item} className="flex items-center justify-between">
                      <span className="text-xs text-[#bbcbb2]/65">{item}</span>
                      <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-wider text-[#2fe92b]">
                        <Check size={12} /> Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 overflow-hidden px-4 py-32 sm:px-6 lg:px-8"
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
          style={{ background: `${GREEN}0c` }}
          animate={
            reducedMotion
              ? undefined
              : { scale: [0.85, 1.15, 0.85], opacity: [0.4, 0.8, 0.4] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative mx-auto max-w-4xl text-center"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionLabel>Next chapter</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#bbcbb2]">
            I&apos;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="mt-9 flex justify-center">
            <MagneticButton className="rounded-xl">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2fe92b] px-8 py-4 text-lg font-medium text-[#0f0f0f] shadow-[0_0_50px_rgba(47,233,43,0.14)] transition-shadow hover:shadow-[0_0_70px_rgba(47,233,43,0.28)]"
              >
                <Mail size={20} />
                Get In Touch
                <ArrowRight size={19} />
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <a
              href="https://github.com/nicholusbriz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[#26272d] bg-[#0f0f0f] p-3 text-[#bbcbb2]/60 transition-all hover:-translate-y-1 hover:border-[#2fe92b]/40 hover:text-[#2fe92b]"
            >
              <GitFork size={17} />
            </a>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="pointer-events-none fixed bottom-6 right-6 z-50 hidden rounded-full border border-[#26272d] bg-[#0f0f0f]/90 px-4 py-2 text-xs text-[#bbcbb2] shadow-2xl backdrop-blur-xl md:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Exploring · {activeProject}
          </motion.div>
        )}
      </AnimatePresence>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </main>
  );
}