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

import { Mail, Phone, MapPin, Send, GitFork, Link2, MessageCircle, Code, Users, Briefcase, GraduationCap, Rocket, Coffee, Clock, Globe, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'turyamurebanicholus@gmail.com',
      description: 'Usually replies within 24 hours',
      href: 'mailto:turyamurebanicholus@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+256 761 996 296',
      description: 'Mon–Fri, 09:00–18:00 EAT',
      href: 'tel:+256761996296',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kampala, Uganda',
      description: 'Open to Remote Work Worldwide',
      href: undefined,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: GitFork,
      title: 'GitHub',
      description: '120+ Repositories',
      href: 'https://github.com/nicholusbriz',
      color: 'bg-gray-900',
    },
    {
      icon: Link2,
      title: 'LinkedIn',
      description: 'Professional Network',
      href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378',
      color: 'bg-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick Conversation',
      href: 'https://wa.me/256761996296',
      color: 'bg-green-500',
    },
  ];

  const services = [
    { icon: Code, title: 'Web Development', description: 'Full-stack applications with modern frameworks' },
    { icon: Users, title: 'Platform Building', description: 'Community and collaboration platforms' },
    { icon: Briefcase, title: 'Technical Consulting', description: 'Expert guidance for your projects' },
    { icon: GraduationCap, title: 'Mentorship', description: 'Helping developers grow and learn' },
    { icon: Rocket, title: 'Open Source', description: 'Contributing to the ecosystem' },
    { icon: Coffee, title: 'Collaboration', description: "Let's build something amazing" },
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '09:00 - 18:00 EAT' },
    { day: 'Saturday', hours: '10:00 - 14:00 EAT' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Let's Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Something Amazing
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <Clock className="w-5 h-5" />
                <span>Usually replies within 24 hours</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
                    <Send className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Quick Contact</h3>
                    <p className="text-gray-500">Send me a message directly</p>
                  </div>
                </div>
                <a
                  href="mailto:turyamurebanicholus@gmail.com"
                  className="block w-full text-center px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Large cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const content = (
                <div className="relative overflow-hidden rounded-3xl bg-white p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform`} />
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-lg text-gray-900 mb-2">{method.value}</p>
                  <p className="text-gray-500">{method.description}</p>
                </div>
              );

              if (method.href) {
                return (
                  <a key={method.title} href={method.href} className="block">
                    {content}
                  </a>
                );
              }
              return <div key={method.title}>{content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Social Links - Horizontal scroll */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-72"
                >
                  <div className={`h-full ${social.color} rounded-2xl p-6 text-white hover:opacity-90 transition-opacity`}>
                    <Icon className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{social.title}</h3>
                    <p className="text-white/80">{social.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - Bento grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Let's Collaborate On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-white rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 transition-colors ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <Icon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Working Hours</h2>
              <p className="text-gray-600 mb-8">
                I'm available for projects and consultations during these hours. Feel free to reach out anytime, and I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                {workingHours.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
              <Globe className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Availability</h3>
              <p className="text-white/90 mb-6">
                While I'm based in Kampala, Uganda (EAT timezone), I'm open to remote work with clients and teams worldwide.
              </p>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5" />
                <span>Kampala, Uganda (EAT)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/projects"
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg"
            >
              <Briefcase className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">View Projects</h3>
              <p className="text-gray-600">See my recent work and case studies</p>
            </Link>
            <Link
              href="/skills"
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg"
            >
              <Code className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">My Skills</h3>
              <p className="text-gray-600">Technologies and tools I work with</p>
            </Link>
            <Link
              href="/about"
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-lg"
            >
              <GraduationCap className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">About Me</h3>
              <p className="text-gray-600">Learn more about my journey and values</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Send me a message and let's discuss how we can work together to bring your ideas to life.
          </p>
          <a
            href="mailto:turyamurebanicholus@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            <Mail size={20} />
            Send Me an Email
          </a>
        </div>
      </section>
    </div>
  );
}
