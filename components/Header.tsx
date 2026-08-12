'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSocialLinks, setShowSocialLinks] = useState(true);
  const pathname = usePathname();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/nicholusbriz' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholus-turyamureba-194363378' },
    { name: 'WhatsApp', href: 'https://wa.me/256761996296' },
    { name: 'Email', href: 'mailto:turyamurebanicholus@gmail.com' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      if (scrollPosition > 100) {
        setShowSocialLinks(false);
      } else {
        setShowSocialLinks(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border border-[#26272d] rounded-2xl'
            : 'bg-black/90 backdrop-blur-xl border border-[#26272d] rounded-2xl'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Social Links Section */}
          <AnimatePresence>
            {showSocialLinks && (
              <motion.div
                initial={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-b border-[#26272d] pb-3 mb-3"
              >
                <div className="flex items-center justify-center gap-8 py-2 flex-wrap">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#bbcbb2] hover:text-[#2fe92b] transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Navigation */}
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-[#2fe92b]">
                  <img
                    src="/nicholusbriz.png"
                    alt="Nicholus Turyamureba"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm leading-tight">Nicholus</span>
                  <span className="text-[#2fe92b] text-[10px] font-medium">Turyamureba</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-[#2fe92b] bg-[#1b1b1d]'
                          : 'text-[#bbcbb2] hover:text-white hover:bg-[#1b1b1d]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#bbcbb2] hover:text-white hover:bg-[#1b1b1d] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm font-medium">
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </span>
            </motion.button>

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#2fe92b] text-black font-medium rounded-lg text-sm hover:bg-[#3dff3d] transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-16 left-0 right-0 bg-[#0f0f0f] border-b border-[#26272d]"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-[#2fe92b] bg-[#1b1b1d]'
                            : 'text-[#bbcbb2] hover:text-white hover:bg-[#1b1b1d]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile Social Links */}
                <div className="mt-6 pt-6 border-t border-[#26272d]">
                  <p className="text-[#bbcbb2] text-xs font-medium mb-3 px-4">Get in Touch</p>
                  <div className="flex flex-wrap gap-2 px-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#bbcbb2] hover:text-[#2fe92b] transition-colors text-sm px-3 py-1.5 bg-[#1b1b1d] rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.div
                  className="px-4 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-[#2fe92b] text-black font-medium rounded-lg text-sm hover:bg-[#3dff3d] transition-colors"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}