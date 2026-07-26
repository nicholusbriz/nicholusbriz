'use client';

import { 
  Code2, 
  Server, 
  GraduationCap, 
  BookOpen, 
  ChevronDown,
  Layers,
  Database,
  Cloud,
  GitBranch,
  Brain,
  Users,
  Lightbulb,
  Target,
  Zap,
  Globe,
  Monitor,
  Smartphone,
  Terminal,
  Wrench,
  Shield,
  BarChart,
  Clock,
  Award,
  Star,
  Rocket,
  Sparkles,
  Network,
  Cpu,
  Workflow
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [counts, setCounts] = useState({
    technologies: 0,
    courses: 0,
    certificates: 0,
    degrees: 0
  });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

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
      technologies: 80,
      courses: 25,
      certificates: 3,
      degrees: 1
    };

    const duration = 2000;
    const steps = 60;
    const increment = {
      technologies: targetCounts.technologies / steps,
      courses: targetCounts.courses / steps,
      certificates: targetCounts.certificates / steps,
      degrees: targetCounts.degrees / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        technologies: Math.min(Math.floor(increment.technologies * currentStep), targetCounts.technologies),
        courses: Math.min(Math.floor(increment.courses * currentStep), targetCounts.courses),
        certificates: Math.min(Math.floor(increment.certificates * currentStep), targetCounts.certificates),
        degrees: Math.min(Math.floor(increment.degrees * currentStep), targetCounts.degrees)
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

  // Skill categories
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: Code2,
      color: 'purple',
      skills: [
        { name: 'Python', level: 'Advanced', years: 4 },
        { name: 'JavaScript', level: 'Advanced', years: 5 },
        { name: 'TypeScript', level: 'Advanced', years: 3 },
        { name: 'C#', level: 'Advanced', years: 3 },
        { name: 'SQL', level: 'Advanced', years: 4 },
        { name: 'Java', level: 'Intermediate', years: 2 },
        { name: 'PHP', level: 'Intermediate', years: 2 },
        { name: 'Ruby', level: 'Intermediate', years: 2 },
      ]
    },
    {
      name: 'Frontend Development',
      icon: Monitor,
      color: 'blue',
      skills: [
        { name: 'React', level: 'Advanced', years: 4 },
        { name: 'Next.js', level: 'Advanced', years: 3 },
        { name: 'HTML5', level: 'Expert', years: 5 },
        { name: 'CSS3', level: 'Expert', years: 5 },
        { name: 'Tailwind CSS', level: 'Advanced', years: 4 },
        { name: 'Angular', level: 'Intermediate', years: 2 },
        { name: 'Vue.js', level: 'Intermediate', years: 2 },
        { name: 'Responsive Design', level: 'Expert', years: 5 },
        { name: 'Web Accessibility', level: 'Advanced', years: 3 },
        { name: 'DOM Manipulation', level: 'Expert', years: 5 },
      ]
    },
    {
      name: 'Backend Development',
      icon: Server,
      color: 'green',
      skills: [
        { name: 'Node.js', level: 'Advanced', years: 4 },
        { name: 'Express.js', level: 'Advanced', years: 4 },
        { name: 'Python', level: 'Advanced', years: 4 },
        { name: 'C#/.NET', level: 'Advanced', years: 3 },
        { name: 'REST APIs', level: 'Expert', years: 4 },
        { name: 'JWT Authentication', level: 'Advanced', years: 3 },
        { name: 'MVC Architecture', level: 'Advanced', years: 4 },
        { name: 'Microservices', level: 'Intermediate', years: 2 },
      ]
    },
    {
      name: 'Databases',
      icon: Database,
      color: 'yellow',
      skills: [
        { name: 'MongoDB', level: 'Advanced', years: 4 },
        { name: 'PostgreSQL', level: 'Advanced', years: 4 },
        { name: 'MySQL', level: 'Advanced', years: 4 },
        { name: 'Database Design', level: 'Advanced', years: 4 },
        { name: 'SQL Queries', level: 'Expert', years: 4 },
        { name: 'Database Normalization', level: 'Advanced', years: 3 },
        { name: 'Redis', level: 'Intermediate', years: 2 },
        { name: 'ElasticSearch', level: 'Intermediate', years: 2 },
      ]
    },
    {
      name: 'Software Engineering',
      icon: Brain,
      color: 'pink',
      skills: [
        { name: 'Object-Oriented Programming', level: 'Expert', years: 5 },
        { name: 'Data Structures', level: 'Advanced', years: 4 },
        { name: 'Algorithms', level: 'Advanced', years: 4 },
        { name: 'Software Testing', level: 'Advanced', years: 4 },
        { name: 'Agile/Scrum', level: 'Advanced', years: 4 },
        { name: 'SOLID Principles', level: 'Advanced', years: 3 },
        { name: 'Design Patterns', level: 'Advanced', years: 3 },
        { name: 'System Design', level: 'Intermediate', years: 3 },
      ]
    },
    {
      name: 'Developer Tools',
      icon: Wrench,
      color: 'cyan',
      skills: [
        { name: 'Git', level: 'Expert', years: 5 },
        { name: 'GitHub', level: 'Expert', years: 5 },
        { name: 'VS Code', level: 'Expert', years: 5 },
        { name: 'Visual Studio', level: 'Advanced', years: 3 },
        { name: 'Postman', level: 'Advanced', years: 4 },
        { name: 'Chrome DevTools', level: 'Expert', years: 5 },
        { name: 'Docker', level: 'Intermediate', years: 3 },
        { name: 'Jest', level: 'Advanced', years: 3 },
        { name: 'PyTest', level: 'Advanced', years: 3 },
        { name: 'Swagger/OpenAPI', level: 'Advanced', years: 3 },
      ]
    },
  ];

  // Professional Strengths
  const strengths = [
    { icon: Brain, title: 'Problem Solving', description: 'Breaking down complex problems into elegant solutions' },
    { icon: Users, title: 'Team Collaboration', description: 'Leading and contributing to high-performing teams' },
    { icon: Lightbulb, title: 'Technical Communication', description: 'Explaining complex concepts clearly to stakeholders' },
    { icon: Target, title: 'Critical Thinking', description: 'Analyzing problems from multiple perspectives' },
    { icon: Star, title: 'Clean Code', description: 'Writing maintainable, readable, and efficient code' },
    { icon: Zap, title: 'Continuous Learning', description: 'Staying current with emerging technologies and best practices' },
  ];

  // Learning Journey
  const learningJourney = [
    { year: '2022', title: 'Web & Computer Programming', description: 'Introductory Certificate - Core programming logic and web fundamentals' },
    { year: '2023', title: 'Web Development', description: 'Associate Degree - Full-stack development with databases and services' },
    { year: '2024', title: 'Software Development', description: "Bachelor's Degree - Advanced engineering, testing, and capstone" },
    { year: '2025', title: 'Bachelor\'s Completed', description: 'Graduated with BSc in Software Development from BYU–Idaho' },
  ];

  const getLevelColor = (level: string) => {
    switch(level.toLowerCase()) {
      case 'expert': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'advanced': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'intermediate': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getLevelWidth = (level: string) => {
    switch(level.toLowerCase()) {
      case 'expert': return '95%';
      case 'advanced': return '80%';
      case 'intermediate': return '60%';
      default: return '40%';
    }
  };

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
      <div className="fixed inset-0 bg-[#0a0a0f] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        
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
          
          {/* ===== HERO - Technical Expertise ===== */}
          <div 
            ref={el => { sectionRefs.current[0] = el; }} 
            className={`min-h-[60vh] flex flex-col justify-center transition-all duration-1000 ${visibleSections.includes(0) ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="space-y-6">
              <div className="text-sm text-purple-400 font-mono tracking-widest animate-pulse">SKILLS / EXPERTISE</div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9]">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Technical
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Expertise
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Designing, Engineering & Building Modern Software.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 transition-all duration-1000 ${visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { label: 'Technologies', value: counts.technologies, icon: <Code2 className="text-purple-400" size={20} /> },
                { label: 'University Courses', value: counts.courses, icon: <BookOpen className="text-blue-400" size={20} /> },
                { label: 'Certificates', value: counts.certificates, icon: <Award className="text-emerald-400" size={20} /> },
                { label: "Bachelor's Degree", value: counts.degrees, icon: <GraduationCap className="text-pink-400" size={20} /> },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold text-white">
                    {stat.icon}
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== CORE EXPERTISE ===== */}
          <div 
            ref={el => { sectionRefs.current[1] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Sparkles className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Core Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Full-Stack Development Ecosystem</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-2">Every technology I work with, organized by discipline</p>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {skillCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? `bg-${category.color}-500 text-white shadow-lg shadow-${category.color}-500/30`
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <category.icon size={14} />
                    {category.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, categoryIndex) => {
                const isVisible = activeCategory === null || activeCategory === category.name;
                const Icon = category.icon;
                return (
                  <div
                    key={category.name}
                    className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'}`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 bg-${category.color}-500/10 rounded-lg border border-${category.color}-500/30`}>
                          <Icon className={`text-${category.color}-400`} size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{category.name}</h3>
                        <span className="text-xs text-gray-500 ml-auto">{category.skills.length} skills</span>
                      </div>

                      <div className="space-y-3">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-sm transition-colors duration-300 ${hoveredSkill === skill.name ? 'text-purple-400' : 'text-gray-300'}`}>
                                {skill.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className={`text-xs px-2 py-0.5 rounded-full border ${getLevelColor(skill.level)}`}>
                                  {skill.level}
                                </span>
                                <span className="text-xs text-gray-500">{skill.years}yrs</span>
                              </div>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 rounded-full transition-all duration-1000`}
                                style={{ 
                                  width: hoveredSkill === skill.name ? getLevelWidth(skill.level) : getLevelWidth(skill.level),
                                  transition: 'width 0.5s ease'
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== LEARNING JOURNEY ===== */}
          <div 
            ref={el => { sectionRefs.current[2] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Clock className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Learning Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">My Path to Software Engineering</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-2">From first line of code to Bachelor's degree</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />
              {learningJourney.map((item, index) => (
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

          {/* ===== PROFESSIONAL STRENGTHS ===== */}
          <div 
            ref={el => { sectionRefs.current[3] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
                <Star className="text-purple-400" size={16} />
                <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Professional Strengths</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What Makes Me Valuable</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-all duration-300">
                        <Icon className="text-purple-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{strength.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== BACHELOR'S COMPLETION ===== */}
          <div 
            ref={el => { sectionRefs.current[4] = el; }} 
            className={`py-16 border-t border-white/10 transition-all duration-1000 ${visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500 text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Bachelor's Degree Completed</h3>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Completed all three certificates in the Software Development track at Brigham
                Young University–Idaho, capped by a senior project (CSE 499) that applied the full
                software development life cycle — planning, design, development, testing, and
                deployment — end to end.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-400">Full SDLC</span>
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400">Agile/Scrum</span>
                <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">Team Leadership</span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs text-pink-400">Technical Communication</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-xs font-mono tracking-widest uppercase">Explore My Skills</span>
              <ChevronDown size={20} />
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
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}