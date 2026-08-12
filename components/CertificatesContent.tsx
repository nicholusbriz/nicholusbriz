'use client';

import React, { useState } from 'react';
import {
  Award,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Calendar,
  Building2,
  FileText,
  Eye,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';

const GREEN = '#2fe92b';
const ease = [0.22, 1, 0.36, 1] as const;

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-[#2fe92b]">
      <span className="h-px w-12 bg-[#2fe92b]/40" />
      {children}
      <span className="h-px flex-1 bg-[#2fe92b]/20" />
    </div>
  );
}

function InteractiveCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(47,233,43,0.15)] ${className}`}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-24 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${GREEN}20 0%, rgba(0,0,0,0) 60%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Subtle border glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-[rgba(0,0,0,0)] transition-colors duration-300"
        animate={{ borderColor: hovered ? `${GREEN}40` : 'rgba(0,0,0,0)' }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function CertificatesContent() {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 'web-programming',
      title: 'Web & Computer Programming',
      description: 'Comprehensive certification in web development and computer programming fundamentals',
      file: '/web-and-computer-programing-certificete.pdf',
      issuer: 'Programming Certificate',
      date: '2024',
      category: 'Development',
    },
    {
      id: 'pathway',
      title: 'PATHWAY Certificate',
      description: 'Professional development and technical skills certification program',
      file: '/PATHWAY CERTIFICATE.pdf',
      issuer: 'PATHWAY Program',
      date: '2024',
      category: 'Professional Development',
    },
    {
      id: 'professional',
      title: 'Professional Achievement Certificate',
      description: 'Professional certification and achievement recognition',
      file: '/Nicholas Turyamureba_Certificate_893164e1-3e6d-4bba-9482-dddfba0bf1dd_.pdf',
      issuer: 'Certificate Program',
      date: '2024',
      category: 'Achievement',
    },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#2fe92b] selection:text-[#0f0f0f]">
      {/* Hero Section - Enhanced padding and visual hierarchy */}
      <section className="relative z-10 px-6 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="max-w-3xl"
            variants={reveal}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel>Certifications</SectionLabel>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Professional
              <span className="block text-[#2fe92b] mt-2">Certificates</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-[#bbcbb2] max-w-2xl">
              Recognized certifications that validate my expertise and commitment 
              to continuous learning in technology and professional development.
            </p>
            
            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="h-8 w-0.5 bg-[#2fe92b]/40" />
                <div>
                  <div className="text-2xl font-bold">{certificates.length}</div>
                  <div className="text-xs uppercase tracking-wider text-[#bbcbb2]/50">Certifications</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-0.5 bg-[#2fe92b]/40" />
                <div>
                  <div className="text-2xl font-bold">2024</div>
                  <div className="text-xs uppercase tracking-wider text-[#bbcbb2]/50">Latest Issue</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid - Enhanced spacing */}
      <section className="relative z-10 border-y border-[#26272d] bg-[#0a0a0a] px-6 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight">My Certifications</h2>
            <p className="mt-3 text-[#bbcbb2]/70">Click on any certificate to preview or download</p>
          </div>
          
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {certificates.map((cert, index) => (
              <motion.div key={cert.id} variants={reveal}>
                <InteractiveCard className="h-full min-h-[340px] rounded-2xl border border-[#26272d] bg-[#000000] p-8 transition-all duration-300">
                  {/* Header with icon and badge */}
                  <div className="mb-8 flex items-start justify-between">
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#26272d] bg-[#0a0a0a]"
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Award className="h-7 w-7 text-[#2fe92b]" />
                    </motion.div>
                    <span className="rounded-full border border-[#26272d] px-3 py-1 text-[10px] font-mono tracking-wider text-[#bbcbb2]/40">
                      {cert.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-xl font-semibold tracking-tight leading-tight">
                      {cert.title}
                    </h3>
                    <p className="leading-relaxed text-[#bbcbb2]/70 text-sm">
                      {cert.description}
                    </p>
                  </div>

                  {/* Metadata with better icons */}
                  <div className="mb-8 space-y-3 border-t border-[#26272d]/50 pt-5">
                    <div className="flex items-center gap-3 text-sm text-[#bbcbb2]/60">
                      <Building2 className="h-3.5 w-3.5 text-[#2fe92b]/60" />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Issuer:</span>
                      <span className="text-white/80">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#bbcbb2]/60">
                      <Calendar className="h-3.5 w-3.5 text-[#2fe92b]/60" />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Date:</span>
                      <span className="text-white/80">{cert.date}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#2fe92b]/20 bg-[#2fe92b]/5 px-5 py-3 text-sm font-medium text-[#2fe92b] transition-all duration-300 hover:border-[#2fe92b]/40 hover:bg-[#2fe92b]/15 hover:shadow-[0_0_30px_rgba(47,233,43,0.1)]"
                  >
                    {expandedCert === cert.id ? (
                      <>
                        <ChevronUp size={16} />
                        Close Preview
                      </>
                    ) : (
                      <>
                        <Eye size={16} />
                        View Certificate
                      </>
                    )}
                  </button>

                  {/* Bottom accent line */}
                  <motion.div
                    className="pointer-events-none absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[rgba(0,0,0,0)] via-[#2fe92b] to-[rgba(0,0,0,0)]"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease }}
                  />
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expanded Certificate View - Enhanced with better spacing */}
      <AnimatePresence>
        {expandedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            onClick={() => setExpandedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className="relative mx-auto mt-16 max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - improved positioning */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-[#2fe92b]" />
                  <span className="text-sm font-medium text-white/80">
                    {certificates.find(c => c.id === expandedCert)?.title}
                  </span>
                </div>
                <button
                  onClick={() => setExpandedCert(null)}
                  className="flex items-center gap-2 rounded-lg border border-[#26272d] px-4 py-2 text-sm text-[#bbcbb2] transition-colors hover:border-[#2fe92b]/30 hover:text-white"
                >
                  <X size={18} />
                  Close
                </button>
              </div>

              {/* Certificate iframe with rounded corners */}
              <div className="overflow-hidden rounded-2xl border border-[#26272d] bg-[#0a0a0a] shadow-2xl">
                <div className="h-[calc(100vh-220px)]">
                  <iframe
                    src={certificates.find(c => c.id === expandedCert)?.file}
                    className="w-full h-full"
                    title="Certificate Preview"
                  />
                </div>
              </div>

              {/* Action buttons - improved spacing */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={certificates.find(c => c.id === expandedCert)?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[#26272d] bg-[#0a0a0a] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#2fe92b]/30 hover:bg-[#1a1a1a]"
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </a>
                <a
                  href={certificates.find(c => c.id === expandedCert)?.file}
                  download
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#2fe92b] px-6 py-3.5 text-sm font-medium text-[#0f0f0f] transition-all duration-300 hover:bg-[#3dff3d] hover:shadow-[0_0_40px_rgba(47,233,43,0.3)]"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - Enhanced with better spacing */}
      <section className="relative z-10 px-6 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#26272d] bg-[#0a0a0a]">
                <FileText className="h-5 w-5 text-[#2fe92b]" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ready to Collaborate?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#bbcbb2]">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#2fe92b] px-8 py-4 text-base font-medium text-[#0f0f0f] shadow-[0_0_50px_rgba(47,233,43,0.14)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(47,233,43,0.28)] hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-xl border border-[#26272d] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-[#2fe92b]/30 hover:bg-[#1a1a1a]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                View All Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}