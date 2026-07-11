'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link, Share2, MessageCircle, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="min-h-screen px-6 sm:px-8 py-24 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs tracking-widest text-[#A78BFA] uppercase mb-4">
            Contact / Home
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always interested in collaborating on community-building projects, creative coding initiatives, and opportunities to blend technology with cultural storytelling. Whether you want to discuss developer communities, share ideas, or explore potential partnerships, I'd love to connect!
          </p>
          <p className="text-sm text-[#A78BFA] mt-2 font-medium">
            Bachelor's Degree in Software Development | BYU–Idaho Graduate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 bg-[#12121A] border border-gray-800 rounded-xl p-4 hover:border-[#8B5CF6]/40 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#A78BFA]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-400">turyamurebanicholus@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 bg-[#12121A] border border-gray-800 rounded-xl p-4 hover:border-[#8B5CF6]/40 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#A78BFA]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400">+256 761 996 296</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 bg-[#12121A] border border-gray-800 rounded-xl p-4 hover:border-[#8B5CF6]/40 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#A78BFA]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400">Kampala, Uganda</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/nicholus-turyamureba-194363378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#12121A] border border-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:border-[#8B5CF6]/40 hover:text-[#A78BFA] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  aria-label="LinkedIn"
                >
                  <Link size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/nicholusbriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#12121A] border border-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:border-[#8B5CF6]/40 hover:text-[#A78BFA] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  aria-label="GitHub"
                >
                  <Share2 size={24} />
                </motion.a>
                <motion.a
                  href="https://wa.me/256761996296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#12121A] border border-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:border-[#8B5CF6]/40 hover:text-[#A78BFA] transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#12121A] border border-gray-800 rounded-2xl p-8 hover:border-[#8B5CF6]/40 transition-colors duration-300"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0A0A0F] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5CF6] text-white rounded-lg font-medium transition-colors duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#7C3AED]'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  ✗ Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              className="bg-[#12121A] border border-gray-800 rounded-xl p-6 hover:border-[#8B5CF6]/40 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[#8B5CF6]" size={24} />
                <h4 className="font-bold text-white">Nicholus Turyamureba</h4>
              </div>
              <p className="text-sm text-gray-400">
                Tech-driven storyteller and community builder, passionate about blending code, culture & creativity to connect and empower communities.
              </p>
              <p className="text-xs text-[#A78BFA] mt-2 font-medium">
                Bachelor's in Software Development
              </p>
            </motion.div>

            <motion.div
              className="bg-[#12121A] border border-gray-800 rounded-xl p-6 hover:border-[#8B5CF6]/40 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-[#A78BFA] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#A78BFA] transition-colors">About</a></li>
                <li><a href="/skills" className="hover:text-[#A78BFA] transition-colors">Skills</a></li>
                <li><a href="/projects" className="hover:text-[#A78BFA] transition-colors">Projects</a></li>
                <li><a href="/contact" className="hover:text-[#A78BFA] transition-colors">Contact</a></li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-[#12121A] border border-gray-800 rounded-xl p-6 hover:border-[#8B5CF6]/40 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/resume.pdf" className="hover:text-[#A78BFA] transition-colors">Resume</a></li>
                <li><a href="https://github.com/nicholusbriz" target="_blank" rel="noopener noreferrer" className="hover:text-[#A78BFA] transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/nicholus-turyamureba-194363378" target="_blank" rel="noopener noreferrer" className="hover:text-[#A78BFA] transition-colors">LinkedIn</a></li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>© 2026 Nicholus Turyamureba. All rights reserved. Made with ❤️ by Nicholus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}