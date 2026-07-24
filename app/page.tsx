'use client';

import { 
  ArrowRight, 
  Download, 
  Award, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  GitFork, 
  Link2,
  ChevronDown 
} from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const ROLES = ['Full-Stack Developer', 'Problem Solver', 'Community Builder'];
const STATS = [
  { label: 'Projects', value: '15+' },
  { label: 'Experience', value: '5+ yrs' },
  { label: 'Clients', value: '20+' },
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Enhanced typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;
    const holdAtFull = 1800;
    const holdAtEmpty = 400;

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
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 transition-all duration-200"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/nicholusbriz.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <main className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div 
                className={`inline-flex items-center gap-3 rounded-full px-4 py-2 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-white/80 tracking-wider">Open to Opportunities</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Nicholus Turyamureba
                  </span>
                </h1>
                
                <div 
                  className={`h-10 font-mono text-lg md:text-xl text-purple-400 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <span>{typedText}</span>
                  <span className="inline-block w-[2px] h-6 bg-purple-400 ml-1 align-middle animate-pulse" />
                </div>
              </div>

              {/* Stats */}
              <div 
                className={`grid grid-cols-3 gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {STATS.map((stat, index) => (
                  <div key={index} className="p-4 text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p 
                className={`text-gray-300 leading-relaxed max-w-lg text-base md:text-lg transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Ugandan software developer building digital platforms that connect communities — 
                combining technical craft with clear, human storytelling.
              </p>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <a
                  href="/projects"
                  className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                
                <button
                  className="flex items-center justify-center gap-2 px-8 py-3.5 text-white rounded-xl font-medium transition-all duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </button>
              </div>

              {/* Social Links with Text */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <a
                  href="https://github.com/nicholusbriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <GitFork size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/nicholus-turyamureba-194363378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Link2 size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Video Player */}
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover"
                    onClick={togglePlay}
                  >
                    <source src="/atbriz.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                      >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Play Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <button
                        onClick={togglePlay}
                        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110"
                      >
                        <Play size={28} fill="currentColor" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-2">🎓</div>
                  <div className="text-xs text-gray-400">BYU–Idaho</div>
                  <div className="text-sm text-white font-medium">Software Dev</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="text-xs text-gray-400">Based in</div>
                  <div className="text-sm text-white font-medium">Uganda</div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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

    </>
  );
}