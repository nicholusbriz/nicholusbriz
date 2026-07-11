'use client';

import { motion } from 'framer-motion';
import { Code2, Server, GraduationCap, BookOpen } from 'lucide-react';

type Course = {
  code: string;
  title: string;
  focus: string;
  tools: string[];
};

type CertGroup = {
  name: string;
  award: string;
  icon: typeof Code2;
  summary: string;
  courses: Course[];
};

export default function SkillsPage() {
  const certGroups: CertGroup[] = [
    {
      name: 'Web & Computer Programming',
      award: 'Introductory Certificate',
      icon: Code2,
      summary:
        'Core programming logic and the building blocks of the web — where every language and tool below started.',
      courses: [
        {
          code: 'CSE 110',
          title: 'Introduction to Programming',
          focus: 'Variables, conditionals, loops, and lists to solve real problems in Python.',
          tools: [
            'Python 3',
            'VS Code',
            'Python Debugger',
            'PEP 8',
            'Data Types',
            'Control Flow',
            'Functions',
            'Lists',
            'Dictionaries',
            'File I/O'
          ],
        },
        {
          code: 'CSE 111',
          title: 'Programming with Functions',
          focus:
            'Functions, parameters, scope, and return values, with an emphasis on structuring larger codebases.',
          tools: [
            'Python 3',
            'VS Code',
            'Unit Testing',
            'PyTest',
            'Exception Handling',
            'Error Logging',
            'Function Composition',
            'Lambda Functions',
            'Modules',
            'Packages'
          ],
        },
        {
          code: 'WDD 130',
          title: 'Web Fundamentals',
          focus: 'Semantic markup and styling fundamentals for the web.',
          tools: [
            'HTML5',
            'CSS3',
            'GitHub Pages',
            'Flexbox',
            'CSS Grid',
            'Responsive Design',
            'CSS Variables',
            'Web Accessibility',
            'WAI-ARIA',
            'Chrome DevTools'
          ],
        },
        {
          code: 'WDD 131',
          title: 'Dynamic Web Fundamentals',
          focus: 'Making pages interactive with client-side scripting.',
          tools: [
            'JavaScript ES6+',
            'DOM Manipulation',
            'Event Handling',
            'Async/Await',
            'Promises',
            'Fetch API',
            'JSON',
            'LocalStorage',
            'Form Validation',
            'Browser APIs'
          ],
        },
        {
          code: 'WDD 231',
          title: 'Web Frontend Development 1',
          focus:
            'Dynamic, standards-compliant sites that pull in live data and hold up to accessibility and performance audits.',
          tools: [
            'JavaScript ES6+',
            'Fetch API',
            'REST APIs',
            'JSON',
            'Web APIs',
            'Lighthouse',
            'Accessibility',
            'Performance Optimization',
            'CSS Frameworks',
            'Web Components'
          ],
        },
        {
          code: 'CSE 210',
          title: 'Programming with Classes',
          focus: 'Object-oriented design — classes, encapsulation, inheritance, and polymorphism.',
          tools: [
            'C#',
            'Visual Studio 2022',
            '.NET 6/7',
            'OOP Design Patterns',
            'SOLID Principles',
            'Inheritance',
            'Encapsulation',
            'Polymorphism',
            'Interfaces',
            'Abstract Classes'
          ],
        },
      ],
    },
    {
      name: 'Web Development',
      award: 'Associate Degree',
      icon: Server,
      summary:
        'Where the stack splits into frontend and backend — databases, servers, and secure services that talk to each other.',
      courses: [
        {
          code: 'ITM 111',
          title: 'Introduction to Databases',
          focus:
            'Relational database design and querying, including logical/physical data models and inner and outer joins.',
          tools: [
            'SQL',
            'MySQL',
            'PostgreSQL',
            'ER Diagrams',
            'Database Normalization',
            'ACID Properties',
            'Transactions',
            'Joins',
            'Indexing',
            'Query Optimization'
          ],
        },
        {
          code: 'WDD 330',
          title: 'Web Frontend Development 2',
          focus: 'Deeper JavaScript and mobile-first design, with a real emphasis on debugging.',
          tools: [
            'JavaScript ES6+',
            'React.js',
            'Mobile-First Design',
            'Chrome DevTools',
            'Debugging Techniques',
            'CSS Preprocessors',
            'Webpack',
            'Babel',
            'Progressive Web Apps',
            'Browser Storage'
          ],
        },
        {
          code: 'CSE 340',
          title: 'Web Backend Development',
          focus:
            'Server-rendered, database-backed sites built around the MVC pattern, from data validation to auth.',
          tools: [
            'Node.js',
            'Express.js',
            'MVC Architecture',
            'EJS/Pug Templates',
            'SQL',
            'PostgreSQL',
            'Session Management',
            'JWT Authentication',
            'Input Validation',
            'Error Handling'
          ],
        },
        {
          code: 'CSE 341',
          title: 'Web Services',
          focus:
            'Secure REST APIs performing full CRUD against a NoSQL database, documented and deployed for real use.',
          tools: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'Mongoose ODM',
            'REST APIs',
            'CRUD Operations',
            'JWT Authentication',
            'Swagger/OpenAPI',
            'Postman',
            'API Documentation',
            'Heroku',
            'Environment Variables'
          ],
        },
        {
          code: 'WDD 430',
          title: 'Web Full-Stack Development',
          focus:
            'A complete single-page application on the MEAN stack, wiring a JS frontend to a Node backend and NoSQL store.',
          tools: [
            'MongoDB',
            'Mongoose',
            'Express.js',
            'Angular',
            'Node.js',
            'TypeScript',
            'RxJS',
            'SPA Architecture',
            'RESTful Services',
            'Authentication',
            'Authorization',
            'Deployment'
          ],
        },
      ],
    },
    {
      name: 'Software Development',
      award: "Bachelor's Degree",
      icon: GraduationCap,
      summary:
        'Broader engineering skill — data structures, testing discipline, a second language, and shipping a real capstone.',
      courses: [
        {
          code: 'CSE 212',
          title: 'Programming with Data Structures',
          focus: 'Lists, stacks, queues, and trees, and reasoning about performance with Big O.',
          tools: [
            'Python',
            'Data Structures',
            'Arrays',
            'Linked Lists',
            'Stacks',
            'Queues',
            'Trees',
            'Graphs',
            'Big O Analysis',
            'Algorithm Design',
            'Complexity Analysis',
            'Problem Solving'
          ],
        },
        {
          code: 'CSE 270',
          title: 'Software Testing',
          focus: 'Writing test plans and cases, and applying verification and validation to catch defects early.',
          tools: [
            'Jest',
            'PyTest',
            'JUnit',
            'Manual Testing',
            'Automated Testing',
            'Unit Testing',
            'Integration Testing',
            'System Testing',
            'Test Plans',
            'Defect Tracking',
            'Bug Reports',
            'Quality Assurance'
          ],
        },
        {
          code: 'CSE 310',
          title: 'Applied Programming',
          focus: 'Independently picking up new languages, frameworks, and libraries to ship self-directed projects.',
          tools: [
            'Self-Directed Learning',
            'New Frameworks',
            'Libraries',
            'API Integration',
            'Full-Stack Development',
            'Project Management',
            'Agile Methodology',
            'Problem-Solving',
            'Technical Research'
          ],
        },
        {
          code: 'CSE 325',
          title: '.NET Software Development',
          focus: 'Building applications on the .NET Framework inside a professional IDE.',
          tools: [
            'C#',
            '.NET Framework',
            '.NET Core',
            'ASP.NET MVC',
            'Visual Studio',
            'Entity Framework',
            'LINQ',
            'WPF',
            'SQL Server',
            'NuGet Package Manager'
          ],
        },
        {
          code: 'CSE 370',
          title: 'Software Engineering Principles',
          focus: 'Comparing software lifecycle models and analyzing real projects phase by phase.',
          tools: [
            'SDLC Models',
            'Agile Development',
            'Scrum',
            'Waterfall Model',
            'UML',
            'Git',
            'GitHub',
            'Project Planning',
            'Risk Management',
            'Team Collaboration'
          ],
        },
        {
          code: 'CSE 300',
          title: 'Professional Readiness',
          focus: 'Building the professional connections, confidence, and employability of a working developer.',
          tools: [
            'Technical Portfolio',
            'GitHub',
            'LinkedIn',
            'Resume Writing',
            'Interview Preparation',
            'Networking',
            'Technical Communication',
            'Professional Development',
            'Team Collaboration'
          ],
        },
      ],
    },
    {
      name: 'Additional Required Courses',
      award: "Bachelor's-Level Requirement",
      icon: BookOpen,
      summary:
        "Required alongside the three certificates to complete the bachelor's — career development, leadership, and the capstone.",
      courses: [
        {
          code: 'GS 170',
          title: 'Career Development',
          focus:
            'Building a job-search toolkit — resume, digital profile, networking, and interviewing — for the software field.',
          tools: [
            'Resume Writing',
            'Digital Profile',
            'LinkedIn',
            'Networking Skills',
            'Interviewing Skills',
            'Career Planning',
            'Professional Communication'
          ],
        },
        {
          code: 'BUS 321',
          title: 'Organizational Leadership',
          focus: 'Leading and communicating effectively within a technical team.',
          tools: [
            'Team Leadership',
            'Organizational Behavior',
            'Conflict Resolution',
            'Team Dynamics',
            'Project Management',
            'Strategic Planning',
            'Communication Skills'
          ],
        },
        {
          code: 'CSE 499',
          title: 'Senior Project',
          focus:
            'A capstone applying the full software development life cycle end to end — planning through deployment.',
          tools: [
            'Full SDLC',
            'Git',
            'GitHub',
            'Agile Methodology',
            'Scrum',
            'Sprint Planning',
            'Technical Documentation',
            'Deployment',
            'Testing',
            'Project Management',
            'Team Collaboration'
          ],
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen px-6 sm:px-8 py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs tracking-widest text-[#A78BFA] uppercase mb-4">
            Skills / Home
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive breakdown of the technologies, frameworks, and tools mastered through
            BYU–Idaho's Software Development degree program.
          </p>
        </motion.div>

        {/* Certificate path */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {certGroups
            .filter((group) => group.award !== "Bachelor's-Level Requirement")
            .map((group, i, arr) => (
              <div key={group.name} className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#12121A] border border-[#8B5CF6]/30 rounded-full px-4 py-2">
                  <span className="font-mono text-xs text-[#A78BFA]">0{i + 1}</span>
                  <span className="text-sm text-gray-200">{group.name}</span>
                </div>
                {i < arr.length - 1 && <span className="text-gray-600">→</span>}
              </div>
            ))}
        </motion.div>

        {/* Certificate groups */}
        <div className="space-y-14">
          {certGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.05 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-11 h-11 shrink-0 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center">
                    <GroupIcon className="text-[#A78BFA]" size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">{group.name} Certificate</h3>
                      <span className="font-mono text-xs text-gray-500 border border-gray-800 rounded-full px-2 py-0.5">
                        {group.award}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1 max-w-2xl">{group.summary}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.courses.map((course, i) => (
                    <motion.div
                      key={course.code}
                      className="bg-[#12121A] border border-gray-800 rounded-xl p-5"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -3, borderColor: 'rgba(139, 92, 246, 0.4)' }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-[#A78BFA] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded px-1.5 py-0.5">
                          {course.code}
                        </span>
                        <h4 className="text-sm font-semibold text-white">{course.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{course.focus}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs text-gray-300 bg-white/5 border border-gray-800 rounded-full px-2.5 py-1"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Capstone note */}
        <motion.div
          className="mt-16 bg-[#12121A] border border-[#8B5CF6]/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Bachelor's Degree Completed</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Completed all three certificates in the Software Development track at Brigham
              Young University–Idaho, capped by a senior project (CSE 499) that applied the full
              software development life cycle — planning, design, development, testing, and
              deployment — end to end.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}