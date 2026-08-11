'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Brain, Monitor } from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming Languages',
    file: 'languages.ts',
    icon: Code2,
    skills: [
      { name: 'JavaScript', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'C#', level: 'Advanced' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'SQL', level: 'Expert' },
    ],
  },
  {
    name: 'Frontend Development',
    file: 'frontend.tsx',
    icon: Monitor,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Expert' },
    ],
  },
  {
    name: 'Backend Development',
    file: 'backend.py',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'Authentication', level: 'Advanced' },
    ],
  },
  {
    name: 'Databases',
    file: 'schema.sql',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Redis', level: 'Intermediate' },
      { name: 'Database Design', level: 'Advanced' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    file: 'infra.yaml',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git', level: 'Expert' },
      { name: 'CI/CD', level: 'Intermediate' },
      { name: 'Linux', level: 'Advanced' },
    ],
  },
  {
    name: 'Software Engineering',
    file: 'architecture.md',
    icon: Brain,
    skills: [
      { name: 'System Design', level: 'Intermediate' },
      { name: 'Data Structures', level: 'Advanced' },
      { name: 'Algorithms', level: 'Advanced' },
      { name: 'Testing', level: 'Advanced' },
      { name: 'Agile/Scrum', level: 'Advanced' },
    ],
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Expert: '#2fe92b',
  Advanced: '#ff9821',
  Intermediate: '#f57733',
};
const DEFAULT_LEVEL_COLOR = '#6b7367';
const getLevelColor = (level: string) => LEVEL_COLOR[level] ?? DEFAULT_LEVEL_COLOR;

const tools = [
  'vs-code', 'github', 'gitlab', 'postman', 'figma', 'docker',
  'aws-cli', 'vercel', 'netlify', 'mongodb-atlas', 'jest', 'cypress',
  'webpack', 'vite', 'npm', 'yarn', 'linux', 'macos',
  'chrome-devtools', 'graphql-playground', 'redis', 'nginx', 'pm2', 'slack',
];

// Deterministic pseudo-version per tool name, so numbers are stable across renders.
const versionFor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  const major = 1 + (hash % 4);
  const minor = (hash >> 3) % 20;
  const patch = hash % 10;
  return `^${major}.${minor}.${patch}`;
};

const experience = [
  { label: 'frontend-development', years: '5+ years', level: 95 },
  { label: 'backend-development', years: '4+ years', level: 90 },
  { label: 'database-management', years: '4+ years', level: 88 },
  { label: 'cloud-devops', years: '3+ years', level: 75 },
  { label: 'system-design', years: '3+ years', level: 80 },
];

const terminalLines = [
  { prompt: '$', text: 'ls skills/' },
  { prompt: '>', text: 'languages.ts  frontend.tsx  backend.py  schema.sql  infra.yaml  architecture.md' },
  { prompt: '$', text: 'cat skills/*.* | wc -l' },
  { prompt: '>', text: '35 skills across 6 categories, updated continuously' },
];

function TerminalHero() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="max-w-2xl mx-auto rounded-lg border border-[#26272d] bg-[#0f0f0f] overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#26272d] bg-[#1b1b1d]">
        <span className="w-2 h-2 rounded-full bg-[#2fe92b]" />
        <span className="text-[#6b7367] text-xs">zsh — skills.sh — 80×24</span>
      </div>
      <div className="p-5 space-y-2">
        {terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : i * 0.35, duration: 0.4 }}
            className={line.prompt === '$' ? 'text-white' : 'text-[#bbcbb2]'}
          >
            <span className="text-[#2fe92b] mr-2">{line.prompt}</span>
            {line.text}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduceMotion ? 0 : terminalLines.length * 0.35 }}
          className="inline-block w-2 h-4 bg-[#2fe92b] align-middle animate-pulse"
          aria-hidden
        />
      </div>
    </div>
  );
}

function CommitGraph({ level }: { level: number }) {
  const cellCount = 28;
  const lit = Math.round((level / 100) * cellCount);
  return (
    <div className="flex flex-wrap gap-1" aria-hidden>
      {Array.from({ length: cellCount }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.015, duration: 0.25 }}
          className="w-3 h-3 rounded-[2px]"
          style={{
            backgroundColor: i < lit ? '#2fe92b' : '#26272d',
            opacity: i < lit ? 0.35 + 0.65 * (i / cellCount) : 1,
          }}
        />
      ))}
    </div>
  );
}

export default function SkillsContent() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="font-mono text-xs tracking-widest text-[#2fe92b] mb-3">// skills.tsx</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Skills & Expertise</h1>
          <p className="text-lg text-[#bbcbb2] max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        <TerminalHero />
      </section>

      {/* Skill files */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: (catIndex % 3) * 0.08 }}
                  className="rounded-lg border border-[#26272d] bg-[#1b1b1d] overflow-hidden hover:border-[#2fe92b]/50 transition-colors"
                >
                  {/* file tab */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#26272d]">
                    <div className="p-1.5 bg-[#2fe92b]/10 rounded">
                      <Icon className="w-4 h-4 text-[#2fe92b]" />
                    </div>
                    <span className="font-mono text-sm text-white">{category.file}</span>
                    <span className="ml-auto font-mono text-[10px] text-[#6b7367]">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* code body */}
                  <div className="p-4 font-mono text-[13px] space-y-1.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-baseline justify-between gap-3">
                        <span className="text-[#bbcbb2] truncate">{skill.name}</span>
                        <span
                          className="whitespace-nowrap"
                          style={{ color: getLevelColor(skill.level) }}
                        >
                          {'// ' + skill.level.toLowerCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools as a dependency manifest */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Tools & Technologies</h2>
          <p className="text-[#6b7367] text-center font-mono text-xs mb-8">devtools.json</p>

          <div className="rounded-lg border border-[#26272d] bg-[#0f0f0f] p-6 font-mono text-[13px] overflow-x-auto">
            <div className="text-[#bbcbb2]">{'{'}</div>
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.02 }}
                className="pl-6 hover:bg-[#1b1b1d] rounded px-2 -mx-2 transition-colors"
              >
                <span className="text-[#ff9821]">&quot;{tool}&quot;</span>
                <span className="text-[#6b7367]">: </span>
                <span className="text-[#2fe92b]">&quot;{versionFor(tool)}&quot;</span>
                {i < tools.length - 1 && <span className="text-[#6b7367]">,</span>}
              </motion.div>
            ))}
            <div className="text-[#bbcbb2]">{'}'}</div>
          </div>
        </div>
      </section>

      {/* Experience as commit history */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Experience Level</h2>
          <p className="text-[#6b7367] text-center font-mono text-xs mb-8">git log --stat --author=me</p>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.label} className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d]">
                <div className="flex justify-between items-baseline mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="font-mono text-sm text-white">{exp.label}</h3>
                    <p className="text-sm text-[#6b7367]">{exp.years}</p>
                  </div>
                  <span className="text-[#2fe92b] font-mono font-semibold text-sm">
                    {exp.level}% coverage
                  </span>
                </div>
                <CommitGraph level={exp.level} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}