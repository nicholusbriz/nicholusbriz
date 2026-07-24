'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Link as LinkIcon, 
  Share2, 
  MessageCircle, 
  GraduationCap, 
  GitFork, 
  Link2,
  ChevronDown 
} from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 bg-[#0a0a0f] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
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
            backgroundImage: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'drift 20s linear infinite',
          }}
        />
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className={`inline-block font-mono text-xs tracking-widest text-purple-400 uppercase mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Contact / Home
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className={`text-lg text-gray-300 max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '150ms' }}>
              I'm always interested in collaborating on community-building projects, creative coding initiatives, and opportunities to blend technology with cultural storytelling. Whether you want to discuss developer communities, share ideas, or explore potential partnerships, I'd love to connect!
            </p>
            <p className={`text-sm text-purple-400 mt-2 font-medium transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              Bachelor's Degree in Software Development | BYU–Idaho Graduate
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold text-white mb-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '250ms' }}>
                  Let's Connect
                </h3>
                
                <div className="space-y-4">
                  <div 
                    className={`flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-400">turyamurebanicholus@gmail.com</p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '350ms' }}
                  >
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-400">+256 761 996 296</p>
                    </div>
                  </div>

                  <div 
                    className={`flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-400">Kampala, Uganda</p>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '450ms' }}
              >
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/nicholus-turyamureba-194363378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:border-purple-500/40 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Link2 size={24} />
                  </a>
                  <a
                    href="https://github.com/nicholusbriz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:border-purple-500/40 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <GitFork size={24} />
                  </a>
                  <a
                    href="https://wa.me/256761996296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:border-purple-500/40 hover:text-purple-400 hover:scale-110 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div 
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-1000 hover:border-purple-500/40 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
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
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105'
                  }`}
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
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center animate-fadeIn">
                    ✓ Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center animate-fadeIn">
                    ✗ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div 
            className={`mt-12 md:mt-16 pt-8 border-t border-white/10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-purple-500" size={24} />
                  <h4 className="font-bold text-white">Nicholus Turyamureba</h4>
                </div>
                <p className="text-sm text-gray-400">
                  Tech-driven storyteller and community builder, passionate about blending code, culture & creativity to connect and empower communities.
                </p>
                <p className="text-xs text-purple-400 mt-2 font-medium">
                  Bachelor's in Software Development
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-purple-400 transition-colors">About</a></li>
                  <li><a href="/skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
                  <li><a href="/projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
                  <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1">
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/resume.pdf" className="hover:text-purple-400 transition-colors">Resume</a></li>
                  <li><a href="https://github.com/nicholusbriz" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/nicholus-turyamureba-194363378" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>© 2026 Nicholus Turyamureba. All rights reserved. Made with ❤️ by Nicholus</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}