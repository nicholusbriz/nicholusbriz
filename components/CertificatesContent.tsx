'use client';

import React, { useState } from 'react';
import {
  Award,
  Download,
  ExternalLink,
  X,
  Calendar,
  Building2,
  FileText,
  Eye,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

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
      status: 'Completed',
    },
    {
      id: 'pathway',
      title: 'PATHWAY Certificate',
      description: 'Professional development and technical skills certification program',
      file: '/PATHWAY CERTIFICATE.pdf',
      issuer: 'PATHWAY Program',
      date: '2024',
      category: 'Professional Development',
      status: 'Completed',
    },
    {
      id: 'professional',
      title: 'Professional Achievement',
      description: 'Professional certification and achievement recognition',
      file: '/Nicholas Turyamureba_Certificate_893164e1-3e6d-4bba-9482-dddfba0bf1dd_.pdf',
      issuer: 'Certificate Program',
      date: '2024',
      category: 'Achievement',
      status: 'Completed',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Recognized certifications that validate my expertise and commitment to continuous learning
            </p>

            {/* Stats */}
            <div className="flex gap-12 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-4xl font-bold text-gray-900">{certificates.length}</div>
                <div className="text-sm text-gray-500 mt-1">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">2024</div>
                <div className="text-sm text-gray-500 mt-1">Latest Issue</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500 mt-1">Completion Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid - Masonry-style layout */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={reveal}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-all hover:shadow-xl">
                  {/* Header */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                        {cert.category}
                      </span>
                    </div>
                    <Award className="w-16 h-16 text-white/80 mb-4" />
                    <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 line-clamp-2">{cert.description}</p>

                    {/* Metadata */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Building2 className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-500">Issuer:</span>
                        <span className="font-medium text-gray-900">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="w-4 h-4 text-indigo-600" />
                        <span className="text-gray-500">Date:</span>
                        <span className="font-medium text-gray-900">{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-500">Status:</span>
                        <span className="font-medium text-green-600">{cert.status}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
                      >
                        <Eye size={16} />
                        {expandedCert === cert.id ? 'Close' : 'Preview'}
                      </button>
                      <a
                        href={cert.file}
                        download
                        className="inline-flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expanded Certificate View */}
      <AnimatePresence>
        {expandedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-md"
            onClick={() => setExpandedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto mt-16 max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {certificates.find(c => c.id === expandedCert)?.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {certificates.find(c => c.id === expandedCert)?.issuer}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedCert(null)}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Certificate iframe */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="h-[calc(100vh-280px)]">
                  <iframe
                    src={certificates.find(c => c.id === expandedCert)?.file}
                    className="w-full h-full"
                    title="Certificate Preview"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={certificates.find(c => c.id === expandedCert)?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white rounded-xl font-medium text-gray-900 border-2 border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  Open in New Tab
                </a>
                <a
                  href={certificates.find(c => c.id === expandedCert)?.file}
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 rounded-xl font-medium text-white hover:bg-indigo-700 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-3xl mb-6">
              <FileText className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 rounded-xl font-medium hover:border-gray-400 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
