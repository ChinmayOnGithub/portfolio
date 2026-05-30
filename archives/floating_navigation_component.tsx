'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

// --- NAVIGATION DATA ---
// Aligned with actual resume sections: #home, #about, #projects, #skills, #experience, #education
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
];

// --- ICONS (Dynamic Theme Control SVGs) ---
const SharinganIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="irisGradient" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#ea0606" />
        <stop offset="70%" stopColor="#a50000" />
        <stop offset="100%" stopColor="#420000" />
      </radialGradient>
      <filter id="irisGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff2c00" floodOpacity="0.23" />
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#irisGradient)" stroke="#000" strokeWidth="3" filter="url(#irisGlow)" />
    <circle cx="50" cy="50" r="23" fill="none" stroke="#000" strokeWidth="4" opacity="0.32" />
    <circle cx="50" cy="50" r="12" fill="#000" />
    <g transform="translate(50,50)">
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 0 0"
          to="360 0 0"
          dur="7s"
          repeatCount="indefinite"
        />
        <g transform="rotate(0) translate(0,-23)">
          <path d="M0,-8 Q8,-7 7,0 Q6,9 0,9 Q-6,8 -7,0 Q-8,-7 0,-8 Z" fill="#000" />
        </g>
        <g transform="rotate(120) translate(0,-23)">
          <path d="M0,-8 Q8,-7 7,0 Q6,9 0,9 Q-6,8 -7,0 Q-8,-7 0,-8 Z" fill="#000" />
        </g>
        <g transform="rotate(240) translate(0,-23)">
          <path d="M0,-8 Q8,-7 7,0 Q6,9 0,9 Q-6,8 -7,0 Q-8,-7 0,-8 Z" fill="#000" />
        </g>
      </g>
    </g>
  </svg>
);

const SageModeIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FADA5E" />
        <stop offset="100%" stopColor="#F08F00" />
      </radialGradient>
      <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#F0A000" floodOpacity="0.7" />
      </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#orangeGlow)" filter="url(#softGlow)" />
    <circle cx="50" cy="50" r="40" fill="#FFD700" stroke="#E09000" strokeWidth="3" />
    <rect x="25" y="45" width="50" height="10" fill="#2F1B00" rx="5" />
  </svg>
);

// --- Hamburger Menu Icon with Motion Transitions ---
const HamburgerIcon = ({ isOpen, resolvedTheme }: { isOpen: boolean; resolvedTheme: string | undefined }) => {
  const lineBase = "h-0.5 w-6 rounded-full transition-all duration-300";
  const color = resolvedTheme === 'dark' ? 'bg-gray-200' : 'bg-[#062540]';

  return (
    <div className="flex flex-col justify-between w-6 h-5">
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? 9 : 0 }}
        className={`${lineBase} ${color}`}
      />
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        className={`${lineBase} ${color}`}
      />
      <motion.div
        animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? -9 : 0 }}
        className={`${lineBase} ${color}`}
      />
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Navigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleThemeToggle = () => {
    if (isSwitching) return;
    setIsSwitching(true);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    setTimeout(() => setIsSwitching(false), 500);
  };

  const handleClick = useCallback((id: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(id) as HTMLElement | null;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Section Observer Configuration
  useEffect(() => {
    if (!isMounted) return;
    if (observerRef.current) observerRef.current.disconnect();
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      );
      navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (element) observer.observe(element);
      });
      observerRef.current = observer;
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [isMounted, resolvedTheme]);

  // Dynamic Aesthetic Theme Configuration
  const themeClasses = {
    dark: {
      nav: 'bg-[#23201D]/90 border-[#443E38]/80 shadow-black/40',
      logo: 'text-[#A68B6D] hover:text-[#E8E2D8]',
      link: 'text-[#A68B6D] hover:text-[#E8E2D8]',
      activeLink: 'text-[#E8E2D8] font-semibold',
      underline: 'bg-[#D0A060]',
      resumeGroup: 'bg-[#2D2824]/80 border-[#4E443A]/60',
      resumeButton: 'text-[#A68B6D] hover:text-[#D0A060]',
      themeButton: 'text-[#A68B6D] hover:text-[#E8E2D8]',
    },
    light: {
      nav: 'bg-[#F4EFE6]/90 border-[#D3C2B0]/80 shadow-[#D3C2B0]/30',
      logo: 'text-[#5D4B3E] hover:text-[#2B2620]',
      link: 'text-[#5D4B3E] hover:text-[#2B2620]',
      activeLink: 'text-[#2B2620] font-semibold',
      underline: 'bg-[#8C6239]',
      resumeGroup: 'bg-[#EFEAD8]/80 border-[#DDD5C5]/60',
      resumeButton: 'text-[#5D4B3E] hover:text-[#8C6239]',
      themeButton: 'text-[#5D4B3E] hover:text-[#2B2620]',
    }
  };

  if (!isMounted) {
    return null;
  }

  const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
  const iconStrokeColor = hovered
    ? (resolvedTheme === 'light' ? '#8C6239' : '#D0A060')
    : (resolvedTheme === 'light' ? '#5D4B3E' : '#A68B6D');

  const rootStyles = {
    '--flicker-color-1': resolvedTheme === 'light' ? '#8C6239' : '#D0A060',
    '--flicker-color-2': resolvedTheme === 'light' ? '#8C6239' : '#D0A060',
  };

  return (
    <>
      <style jsx global>{`
        @keyframes text-flicker {
          0%, 100% { text-shadow: 0 0 1px var(--flicker-color-1), 0 0 2px var(--flicker-color-2); }
          25% { text-shadow: none; }
          50% { text-shadow: 0 0 1px var(--flicker-color-1); }
          75% { text-shadow: none; }
        }
        .animate-flicker { animation: text-flicker 3s linear infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-spin-fast { animation: spin-fast 0.5s ease-in-out; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-fast { from { transform: rotate(0deg); } to { transform: rotate(720deg); } }
      `}</style>

      {/* --- DESKTOP FLOATING BAR --- */}
      <nav
        className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav} hidden lg:block`}
        style={rootStyles as any}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">
          
          {/* Brand Logo & Flicker Effect */}
          <button onClick={() => handleClick('#home')} className={`pl-6 text-lg font-semibold transition-colors duration-300 ${currentTheme.logo}`} aria-label="Scroll to top">
            <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
              chinmaypatil
            </span>
          </button>

          {/* Links Section */}
          <div className="flex items-center gap-6">
            {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleClick(href)}
                className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1)
                  ? currentTheme.activeLink
                  : currentTheme.link}`
                }>
                {label}
                <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Interactive Utilities */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${isSwitching ? 'animate-spin-fast' : ''}`}
              aria-label="Toggle theme mood"
              disabled={isSwitching}
            >
              {resolvedTheme === 'dark' ? <SharinganIcon className="animate-spin-slow" /> : <SageModeIcon />}
            </button>

            {/* --- Resume Action Group --- */}
            <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
              <button 
                className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} 
                onClick={() => { if (typeof window !== 'undefined') window.print(); }} 
                title="Print/Save Live Resume"
              >
                RESUME
              </button>
              <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#8C6239]/50'}`}></div>
              <button 
                className="rounded-full h-[40px] w-[48px] flex justify-center items-center" 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)} 
                onClick={() => { if (typeof window !== 'undefined') window.print(); }} 
                title="Print/Save Live Resume"
              >
                <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE ACCORDION (Hamburger Trigger) --- */}
      <div className={`fixed top-5 right-5 z-50 rounded-full border shadow-lg p-2 ${currentTheme.nav} lg:hidden`}>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 z-50 rounded-full aspect-square" aria-label="Toggle Menu">
          <HamburgerIcon isOpen={isMenuOpen} resolvedTheme={resolvedTheme} />
        </button>
      </div>

      {/* --- MOBILE FULL SCREEN PANEL --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 right-0 p-8 pt-24 shadow-2xl rounded-b-3xl border-b
                bg-[#F4EFE6] border-[#D3C2B0]/80 
                dark:bg-[#23201D] dark:border-[#443E38]/80"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-6">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  onClick={handleThemeToggle}
                  className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${isSwitching ? 'animate-spin-fast' : ''}`}
                  aria-label="Toggle theme mood"
                  disabled={isSwitching}
                >
                  {resolvedTheme === 'dark' ? <SharinganIcon className="w-12 h-12 animate-spin-slow" /> : <SageModeIcon className="w-12 h-12" />}
                </motion.button>
                
                {navItems.map(({ href, label }, index) => (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (index + 1) * 0.07, duration: 0.4 }}
                    onClick={() => handleClick(href)}
                    className={`text-2xl font-semibold transition-colors duration-300
                      ${activeSection === href.substring(1)
                        ? 'text-[#2B2620] dark:text-[#E8E2D8]'
                        : 'text-[#5D4B3E]/70 hover:text-[#2B2620] dark:text-[#A68B6D] dark:hover:text-[#E8E2D8]'}`
                    }
                  >
                    {label}
                  </motion.button>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (navItems.length + 1) * 0.07, duration: 0.4 }}
                  onClick={() => { if (typeof window !== 'undefined') window.print(); }}
                  className="mt-6 text-lg font-medium px-6 py-2 rounded-full border 
                    border-[#8C6239]/50 text-[#5D4B3E] 
                    dark:border-[#D0A060]/50 dark:text-[#A68B6D]"
                >
                  Print/Save Resume
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
