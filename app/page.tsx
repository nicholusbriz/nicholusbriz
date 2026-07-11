'use client';

import { ArrowRight, Download, Award, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ROLES = ['Full-Stack Developer', 'Problem Solver', 'Community Builder'];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Typewriter effect for the rotating role line
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;
    const holdAtFull = 1600;
    const holdAtEmpty = 300;

    if (!isDeleting && typedText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), holdAtFull);
      return () => clearTimeout(pause);
    }

    if (isDeleting && typedText === '') {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, holdAtEmpty);
      return () => clearTimeout(pause);
    }

    const step = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting ? currentRole.slice(0, prev.length - 1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(step);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
      {/* Subtle background video */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/software.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/95 to-[#0A0A0F]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/60" />
      </div>

      {/* Drifting dot grid — subtle overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.1] z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '32px 32px'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32 z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -24 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">Available for work</span>
            </motion.div>

            <motion.span
              className="inline-block font-mono text-xs tracking-widest text-[#A78BFA] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Portfolio / Home
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Nicholus Turyamureba
              </span>
            </motion.h1>

            {/* Typewriter role line */}
            <div className="h-10 mb-6 font-mono text-lg md:text-xl text-[#A78BFA]">
              <span>{typedText}</span>
              <motion.span
                className="inline-block w-[2px] h-6 bg-[#A78BFA] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>

            <motion.div
              className="flex items-center gap-2 mb-6 text-sm text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Award className="text-[#8B5CF6]" size={18} />
              <span className="text-gray-200">BYU–Idaho Graduate · Bachelor's in Software Development</span>
            </motion.div>

            <motion.p
              className="text-gray-200 mb-8 leading-relaxed max-w-lg text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Ugandan software developer building digital platforms that connect
              communities — combining technical craft with clear, human storytelling.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="/projects"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5CF6] text-white rounded-lg font-medium hover:bg-[#7C3AED] transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={18} />
              </motion.a>

              <motion.button
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-gray-200 rounded-lg font-medium cursor-not-allowed opacity-50 bg-white/5 backdrop-blur-sm"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Video Player & Profile */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 24 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Video Player */}
            <div className="relative w-full max-w-md">
              <motion.div
                className="relative rounded-2xl overflow-hidden border-2 border-[#8B5CF6]/30 shadow-2xl shadow-[#8B5CF6]/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover bg-[#0A0A0F]"
                  onClick={togglePlay}
                >
                  <source src="/atbriz.mp4" type="video/mp4" />
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <button
                      onClick={togglePlay}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transitioncolor"
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transitioncolor"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </div>
                </div>
                
                {/* Play/Pause indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <motion.button
                      onClick={togglePlay}
                      className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#7C3AED] transition-color"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={28} fill="currentColor" />
                    </motion.button>
                  </div>
                )}
              </motion.div>
              
              {/* Video Label */}
              <motion.div
                className="mt-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">Watch me in action</span>
              </motion.div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              {/* Glowing ring effect */}
              <motion.div
                className="absolute inset-0 bg-[#8B5CF6]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Rotating dashed ring */}
              <motion.svg
                className="absolute -inset-6"
                width="calc(100% + 48px)"
                height="calc(100% + 48px)"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeOpacity="0.4"
                  strokeWidth="0.8"
                  strokeDasharray="4 8"
                />
              </motion.svg>

              {/* Profile Image */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-3 border-[#8B5CF6] shadow-2xl shadow-[#8B5CF6]/30">
                <Image
                  src="/nicholusbriz.png"
                  alt="Nicholus Turyamureba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#12121A]/90 backdrop-blur-md border border-[#8B5CF6]/40 rounded-full px-5 py-2 whitespace-nowrap shadow-xl"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="flex items-center gap-2 text-xs text-gray-200 font-mono">
                  <span className="text-[#A78BFA]">@</span>
                  atbriz
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#8B5CF6] to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}