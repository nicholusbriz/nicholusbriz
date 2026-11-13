'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Brain, Monitor, Layout, Zap, GitBranch, Cpu } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'GraphQL', level: 78 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 80 },
      { name: 'Redis', level: 72 },
      { name: 'Prisma', level: 78 },
    ],
  },
  {
    name: 'DevOps',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 78 },
      { name: 'Linux', level: 82 },
    ],
  },
];

const tools = [
  { name: 'VS Code', category: 'Editor' },
  { name: 'GitHub', category: 'Version Control' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'Figma', category: 'Design' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'MongoDB Atlas', category: 'Database' },
  { name: 'Jest', category: 'Testing' },
  { name: 'Cypress', category: 'E2E Testing' },
  { name: 'Webpack', category: 'Build Tools' },
  { name: 'Vite', category: 'Build Tools' },
  { name: 'Linux', category: 'OS' },
];

const experiences = [
  { title: 'Frontend Development', years: '5+ years', level: 95, description: 'Building modern user interfaces' },
  { title: 'Backend Development', years: '4+ years', level: 88, description: 'Server-side logic and APIs' },
  { title: 'Database Design', years: '4+ years', level: 85, description: 'Data modeling and optimization' },
  { title: 'Cloud Infrastructure', years: '3+ years', level: 75, description: 'AWS and deployment' },
];

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

export default function SkillsContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              ATBRIZ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Skills & Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Technologies and tools I use to build exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skill Categories - Vertical Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{category.skills.length} skills</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{category.name}</h3>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Grid - Unique Layout */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Tools & Technologies</h2>
            <p className="text-xl text-gray-600">Development tools I use daily</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-indigo-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experience Level</h2>
            <p className="text-xl text-gray-400">Years of hands-on experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-3xl p-8 border border-gray-700"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-indigo-400">{exp.level}%</p>
                    <p className="text-sm text-gray-500">{exp.years}</p>
                  </div>
                </div>

                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${exp.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <GitBranch className="w-5 h-5 text-purple-400" />
                  <Layout className="w-5 h-5 text-pink-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's build something together</h2>
            <p className="text-xl text-gray-600 mb-10">
              Have a project in mind? I'd love to hear about it.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
