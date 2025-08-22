// src/app/components/ClientLayoutWrapper.tsx
'use client';

import { useState, useEffect } from 'react';

// --- SVG ICON ---
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
);

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- STATE ---
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // --- EFFECT for scroll button visibility ---
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- HANDLER for scrolling to top ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <main>{children}</main>

      {/* --- FIXED SOCIAL LINKS (Left Side) --- */}
      <div className="fixed left-12 bottom-0 flex-col justify-center items-center gap-6 hidden lg:flex z-20">
        <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-500 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.1573 35.4167C25.1635 34.444 25.1696 31.0679 25.1696 29.7313C25.1696 27.7996 24.5098 26.5356 23.7698 25.8958C28.3638 25.3825 33.1867 23.6327 33.1867 15.6736C33.1867 13.4121 32.39 11.5621 31.0669 10.1146C31.2788 9.59043 31.9863 7.48335 30.8613 4.63126C30.8613 4.63126 29.1329 4.0746 25.1942 6.7571C23.5458 6.29605 21.7835 6.06793 20.0308 6.05876C18.2779 6.06793 16.5158 6.29626 14.8673 6.7571C10.9285 4.0746 9.20042 4.63126 9.20042 4.63126C8.07542 7.48335 8.78292 9.59043 8.99479 10.1146C7.67167 11.5621 6.875 13.4121 6.875 15.6736C6.875 23.6327 11.6977 25.3825 16.2917 25.8958C15.5519 26.5356 14.8919 27.7996 14.8919 29.7313C14.8919 31.0679 14.8981 34.444 14.9042 35.4167M5.625 27.0833C7.69563 27.2298 8.88958 29.1115 8.88958 29.1115C10.73 32.2779 13.7183 31.3621 14.8927 30.8333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/chinmay-patil-cp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5065 8.13216V25.9925H0V8.13218H6.5065ZM3.25325 0C5.04743 0 6.5065 1.45909 6.5065 3.25325C6.5065 5.04743 5.04743 6.5065 3.25325 6.5065C1.45909 6.5065 0 5.04743 0 3.25325C0 1.45909 1.45909 0 3.25325 0ZM26 25.9431V16.0141C26 11.5002 23.0568 9.82157 19.6441 9.82157C17.5929 9.82157 16.2331 10.7325 15.8167 11.3538V8.14287L9.68428 8.14289V25.9431H15.8167V16.5038C15.8167 14.9243 16.8561 14.6071 17.8597 14.6071C18.9154 14.6071 19.4863 14.9097 19.4863 16.5038V26L26 25.9431Z" fill="currentColor" />
          </svg>
        </a>
        <div className="h-[90px] w-0.5 bg-gray-700 rounded-full"></div>
      </div>

      {/* --- FIXED EMAIL LINK (Right Side) --- */}
      <div className="fixed right-12 bottom-0 hidden lg:flex flex-col justify-center items-center gap-6 z-20">
        <a href="mailto:chinmay.patil.contact@gmail.com" className="[writing-mode:vertical-rl] text-gray-500 tracking-widest font-mono text-sm hover:text-orange-500 transition-all duration-300 hover:-translate-y-1">
          chinmay.patil.contact@gmail.com
        </a>
        <div className="h-[90px] w-0.5 bg-gray-700 rounded-full"></div>
      </div>

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-10 right-10 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 z-50 ${showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}