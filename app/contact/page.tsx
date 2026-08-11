import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nicholus Turyamureba (Atbriz), a Software Developer based in Kampala, Uganda. Available for web development projects, collaborations, and consulting opportunities.",
  keywords: ["Contact", "Get In Touch", "Hire Developer", "Software Developer Contact", "Web Development Services", "Atbriz Contact", "Nicholus Turyamureba Contact"],
  alternates: {
    canonical: "https://nicholusbriz.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Atbriz - Software Developer",
    description: "Get in touch with Nicholus Turyamureba (Atbriz), a Software Developer based in Kampala, Uganda. Available for web development projects, collaborations, and consulting opportunities.",
    url: "https://nicholusbriz.vercel.app/contact",
  },
};

import { Mail, Phone, MapPin, Send, GitFork, Link2, MessageCircle, Code, Users, Briefcase, GraduationCap, Rocket, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactCards = [
    { 
      icon: Mail, 
      title: 'Email Me', 
      detail: 'turyamurebanicholus@gmail.com',
      description: 'Usually replies within 24 hours',
      href: 'mailto:turyamurebanicholus@gmail.com',
    },
    { 
      icon: Phone, 
      title: 'Call Me', 
      detail: '+256 761 996 296',
      description: 'Available Mon–Fri, 09:00–18:00 EAT',
      href: 'tel:+256761996296',
    },
    { 
      icon: MapPin, 
      title: 'Location', 
      detail: 'Kampala, Uganda',
      description: 'Open to Remote Work Worldwide',
      href: undefined,
    },
  ];

  const socialCards = [
    { 
      icon: GitFork, 
      title: 'GitHub', 
      detail: '120+ Repositories',
      description: 'Explore My Code →',
      href: 'https://github.com/nicholusbriz',
    },
    { 
      icon: Link2, 
      title: 'LinkedIn', 
      detail: 'Professional Network',
      description: "Let's Connect →",
      href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378',
    },
    { 
      icon: MessageCircle, 
      title: 'WhatsApp', 
      detail: 'Quick Conversation',
      description: 'Usually Active',
      href: 'https://wa.me/256761996296',
    },
  ];

  const collaborationAreas = [
    { icon: Code, title: 'Web Applications', description: 'Full-stack development with modern frameworks' },
    { icon: Users, title: 'Community Platforms', description: 'Building spaces that connect people' },
    { icon: Briefcase, title: 'Technical Consulting', description: 'Expert guidance for your projects' },
    { icon: GraduationCap, title: 'Mentorship', description: 'Helping developers grow and learn' },
    { icon: Rocket, title: 'Open Source', description: 'Contributing to the developer ecosystem' },
    { icon: Coffee, title: 'Collaboration', description: "Let's build something amazing together" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Build Something Amazing</h1>
          <p className="text-lg text-[#bbcbb2] max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors text-center">
                  <Icon className="w-8 h-8 text-[#2fe92b] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-[#bbcbb2] mb-1">{card.detail}</p>
                  <p className="text-sm text-[#bbcbb2]/70">{card.description}</p>
                </div>
              );

              if (card.href) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className="block"
                  >
                    {content}
                  </a>
                );
              }
              return <div key={card.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Connect With Me</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {socialCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-[#0f0f0f] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors text-center group"
                >
                  <Icon className="w-8 h-8 text-[#2fe92b] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-[#bbcbb2] mb-1">{card.detail}</p>
                  <p className="text-sm text-[#2fe92b]">{card.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Let's Collaborate On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#2fe92b] mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-[#bbcbb2] text-sm">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Message CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-[#0f0f0f] rounded-lg border border-[#26272d]">
            <Send className="w-12 h-12 text-[#2fe92b] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h2>
            <p className="text-[#bbcbb2] mb-6">
              Send me a message and let's discuss how we can work together to bring your ideas to life.
            </p>
            <a
              href="mailto:turyamurebanicholus@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2fe92b] text-[#0f0f0f] rounded-lg font-medium hover:bg-[#2fe92b]/90 transition-colors"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/projects"
              className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors text-center group"
            >
              <Briefcase className="w-8 h-8 text-[#2fe92b] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">View Projects</h3>
              <p className="text-[#bbcbb2] text-sm">See my recent work</p>
            </Link>
            <Link
              href="/skills"
              className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors text-center group"
            >
              <Code className="w-8 h-8 text-[#2fe92b] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">My Skills</h3>
              <p className="text-[#bbcbb2] text-sm">Technologies I work with</p>
            </Link>
            <Link
              href="/about"
              className="p-6 bg-[#1b1b1d] rounded-lg border border-[#26272d] hover:border-[#2fe92b]/50 transition-colors text-center group"
            >
              <GraduationCap className="w-8 h-8 text-[#2fe92b] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
              <p className="text-[#bbcbb2] text-sm">Learn more about my journey</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}