// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';
// import RetroMusicPlayer from './RetroMusicPlayer'; // Import the player

// // --- NAVIGATION DATA ---
// const navItems = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#problems', label: 'Problems' },
// ];

// // --- SVG ICONS ---
// const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
// const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);
// const MusicNoteIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);

// // --- MAIN COMPONENT ---
// export default function Navigation() {
//   // --- STATE ---
//   const { setTheme, resolvedTheme } = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMounted, setIsMounted] = useState(false);
//   const [isPlayerOpen, setIsPlayerOpen] = useState(false); // State to control the player
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   // --- HANDLERS ---
//   const toggleTheme = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     if (observerRef.current) {
//       observerRef.current.disconnect();
//     }

//     const timeoutId = setTimeout(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveSection(entry.target.id);
//             }
//           });
//         },
//         { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//       );

//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) {
//           observer.observe(element);
//         }
//       });
//       observerRef.current = observer;
//     }, 100);

//     return () => {
//       clearTimeout(timeoutId);
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, [isMounted, resolvedTheme]);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'text-gray-300 hover:text-orange-500',
//       themeButton: 'text-gray-400 hover:text-white',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'text-[#062540] hover:text-[#D26911]',
//       themeButton: 'text-[#235E80] hover:text-black',
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;

//   const iconStrokeColor = hovered
//     ? (resolvedTheme === 'light' ? '#D26911' : '#ff4500')
//     : (resolvedTheme === 'light' ? '#062540' : 'white');

//   // --- JSX ---
//   return (
//     <>
//       <style jsx global>{`
//         @keyframes text-flicker {
//           0%, 100% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}, 0 0 2px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           25% { text-shadow: none; }
//           50% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           75% { text-shadow: none; }
//         }
//         .animate-flicker {
//           animation: text-flicker 3s linear infinite;
//         }
//       `}</style>
//       <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//         <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">
//           <div className="flex items-center">
//             {/* UPDATED: This button now toggles the player's visibility */}
//             <button onClick={() => setIsPlayerOpen(!isPlayerOpen)} className={`p-2 rounded-full transition-all duration-300 ${currentTheme.themeButton}`} aria-label="Toggle Music Player">
//               <MusicNoteIcon />
//             </button>
//           </div>
//           <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>

//           <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 hidden md:block ${currentTheme.logo}`} aria-label="Scroll to top">
//             <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
//               chinmaypatil
//             </span>
//           </button>

//           <div className="hidden lg:flex items-center gap-6">
//             {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//               <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//                 {label}
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//               {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//               <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//                 RESUME
//               </button>
//               <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//               <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//                 <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {/* Render the music player, controlled by state */}
//       <RetroMusicPlayer isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} />
//     </>
//   );
// }


// // src/app/components/Navigation.tsx
// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';
// import RetroMusicPlayer from './RetroMusicPlayer'; // Import the player

// // --- NAVIGATION DATA ---
// const navItems = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#problems', label: 'Problems' },
// ];

// // --- SVG ICONS ---
// const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
// const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);

// // --- MAIN COMPONENT ---
// export default function Navigation() {
//   // --- STATE ---
//   const { setTheme, resolvedTheme } = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMounted, setIsMounted] = useState(false);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   // --- HANDLERS ---
//   const toggleTheme = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;
//     if (observerRef.current) observerRef.current.disconnect();
//     const timeoutId = setTimeout(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) setActiveSection(entry.target.id);
//           });
//         },
//         { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//       );
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.observe(element);
//       });
//       observerRef.current = observer;
//     }, 100);
//     return () => {
//       clearTimeout(timeoutId);
//       if (observerRef.current) observerRef.current.disconnect();
//     };
//   }, [isMounted, resolvedTheme]);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'text-gray-300 hover:text-orange-500',
//       themeButton: 'text-gray-400 hover:text-white',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'text-[#062540] hover:text-[#D26911]',
//       themeButton: 'text-[#235E80] hover:text-black',
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
//   const iconStrokeColor = hovered
//     ? (resolvedTheme === 'light' ? '#D26911' : '#ff4500')
//     : (resolvedTheme === 'light' ? '#062540' : 'white');

//   // --- JSX ---
//   return (
//     <>
//       <style jsx global>{`
//         @keyframes text-flicker {
//           0%, 100% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}, 0 0 2px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           25% { text-shadow: none; }
//           50% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           75% { text-shadow: none; }
//         }
//         .animate-flicker {
//           animation: text-flicker 3s linear infinite;
//         }
//       `}</style>
//       <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//         <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

//           {/* FIX: Group the player and divider together for optimal spacing */}
//           <div className="flex items-center gap-4">
//             <RetroMusicPlayer />
//             <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//           </div>

//           <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 hidden md:block ${currentTheme.logo}`} aria-label="Scroll to top">
//             <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
//               chinmaypatil
//             </span>
//           </button>
//           <div className="hidden lg:flex items-center gap-6">
//             {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//               <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//                 {label}
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//               {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//               <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//                 RESUME
//               </button>
//               <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//               <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//                 <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';
// import RetroMusicPlayer from './RetroMusicPlayer';

// // --- NAVIGATION DATA ---
// const navItems = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#problems', label: 'Problems' },
// ];

// // --- NEW THEME ICONS ---

// const CursedEyeIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <filter id="curseGlow" x="-50%" y="-50%" width="200%" height="200%">
//         <feGaussianBlur stdDeviation="1" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>
//     {/* Glowing Iris */}
//     <circle cx="12" cy="12" r="8" fill="#FF4500" opacity="0.6" style={{ filter: 'url(#curseGlow)' }} />
//     {/* Electric Ring */}
//     <circle cx="12" cy="12" r="10" stroke="#FF4500" strokeWidth="1.5" strokeDasharray="5 5" fill="none">
//       <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="4s" repeatCount="indefinite" />
//     </circle>
//     {/* Pulsating Pupil */}
//     <circle cx="12" cy="12" r="3" fill="#9400D3">
//       <animate attributeName="r" values="3;1.5;3" dur="2s" repeatCount="indefinite" />
//     </circle>
//   </svg>
// );

// // Icon for Light Mode: A "Serene Pond" with gentle ripples.
// const SerenePondIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* Ripple 1 */}
//     <circle cx="12" cy="12" r="0" stroke="#D26911" strokeWidth="2" fill="none">
//       <animate attributeName="r" from="0" to="11" dur="2.5s" begin="0s" repeatCount="indefinite" />
//       <animate attributeName="opacity" from="1" to="0" dur="2.5s" begin="0s" repeatCount="indefinite" />
//     </circle>
//     {/* Ripple 2 */}
//     <circle cx="12" cy="12" r="0" stroke="#235E80" strokeWidth="2" fill="none">
//       <animate attributeName="r" from="0" to="11" dur="2.5s" begin="1.25s" repeatCount="indefinite" />
//       <animate attributeName="opacity" from="1" to="0" dur="2.5s" begin="1.25s" repeatCount="indefinite" />
//     </circle>
//   </svg>
// );



// // --- MAIN COMPONENT ---
// export default function Navigation() {
//   // --- STATE ---
//   const { setTheme, resolvedTheme } = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMounted, setIsMounted] = useState(false);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   // --- HANDLERS ---
//   const toggleTheme = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;
//     if (observerRef.current) observerRef.current.disconnect();
//     const timeoutId = setTimeout(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) setActiveSection(entry.target.id);
//           });
//         },
//         { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//       );
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.observe(element);
//       });
//       observerRef.current = observer;
//     }, 100);
//     return () => {
//       clearTimeout(timeoutId);
//       if (observerRef.current) observerRef.current.disconnect();
//     };
//   }, [isMounted, resolvedTheme]);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'text-gray-300 hover:text-orange-500',
//       themeButton: 'text-gray-400 hover:text-orange-500/80',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'text-[#062540] hover:text-[#D26911]',
//       themeButton: 'text-[#235E80] hover:text-[#D26911]',
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
//   const iconStrokeColor = hovered
//     ? (resolvedTheme === 'light' ? '#D26911' : '#ff4500')
//     : (resolvedTheme === 'light' ? '#062540' : 'white');

//   // --- JSX ---
//   return (
//     <>
//       <style jsx global>{`
//         @keyframes text-flicker {
//           0%, 100% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}, 0 0 2px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           25% { text-shadow: none; }
//           50% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           75% { text-shadow: none; }
//         }
//         .animate-flicker {
//           animation: text-flicker 3s linear infinite;
//         }
//       `}</style>
//       <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//         <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

//           <div className="flex items-center gap-4">
//             <RetroMusicPlayer />
//             <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//           </div>

//           <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 hidden md:block ${currentTheme.logo}`} aria-label="Scroll to top">
//             <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
//               chinmaypatil
//             </span>
//           </button>
//           <div className="hidden lg:flex items-center gap-6">
//             {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//               <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//                 {label}
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             {/* --- UPDATED THEME TOGGLE BUTTON --- */}
//             <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//               {resolvedTheme === 'dark' ? <CursedEyeIcon /> : <SerenePondIcon />}
//             </button>
//             <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//               <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//                 RESUME
//               </button>
//               <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//               <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//                 <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';
// import RetroMusicPlayer from './RetroMusicPlayer';

// // --- NAVIGATION DATA ---
// const navItems = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#problems', label: 'Problems' },
// ];

// // --- NEW THEME ICON COMPONENTS ---

// // Dark Mode: Sasuke's Mangekyō Sharingan
// const SharinganIcon = ({ className }: { className?: string }) => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 100 100"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     <defs>
//       <filter id="sharinganGlow" x="-50%" y="-50%" width="200%" height="200%">
//         <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>
//     </defs>
//     {/* Red Iris */}
//     <circle cx="50" cy="50" r="48" fill="#D80000" />
//     <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="3" fill="none" />
//     {/* Mangekyō Pattern */}
//     <g transform="translate(50,50)" style={{ filter: 'url(#sharinganGlow)' }}>
//       <path
//         d="M0-35 C20,-35 20,0 0,0 C-20,0 -20,-35 0,-35 Z"
//         fill="black"
//         transform="rotate(0)"
//       />
//       <path
//         d="M0-35 C20,-35 20,0 0,0 C-20,0 -20,-35 0,-35 Z"
//         fill="black"
//         transform="rotate(120)"
//       />
//       <path
//         d="M0-35 C20,-35 20,0 0,0 C-20,0 -20,-35 0,-35 Z"
//         fill="black"
//         transform="rotate(240)"
//       />
//     </g>
//     {/* Pupil */}
//     <circle cx="50" cy="50" r="10" fill="black" />
//   </svg>
// );

// // Light Mode: Naruto's Sage Mode Eye
// const SageModeIcon = ({ className }: { className?: string }) => (
//   <svg
//     width="24"
//     height="24"
//     viewBox="0 0 100 100"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//   >
//     {/* Orange Pigmentation */}
//     <circle cx="50" cy="50" r="48" fill="#F0A000" opacity="0.8" />
//     {/* Yellow Iris */}
//     <circle cx="50" cy="50" r="40" fill="#FFD700" stroke="#E09000" strokeWidth="3" />
//     {/* Pupil */}
//     <rect x="25" y="45" width="50" height="10" fill="#2F1B00" rx="5" />
//   </svg>
// );


// // --- MAIN COMPONENT ---
// export default function Navigation() {
//   // --- STATE ---
//   const { setTheme, resolvedTheme } = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMounted, setIsMounted] = useState(false);
//   const [isSwitching, setIsSwitching] = useState(false); // State for animation
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   // --- HANDLERS ---
//   const handleThemeToggle = () => {
//     if (isSwitching) return; // Prevents re-clicking during animation
//     setIsSwitching(true);
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//     setTimeout(() => {
//       setIsSwitching(false);
//     }, 500); // Duration should match the 'spin-fast' animation
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;
//     if (observerRef.current) observerRef.current.disconnect();
//     const timeoutId = setTimeout(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) setActiveSection(entry.target.id);
//           });
//         },
//         { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//       );
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.observe(element);
//       });
//       observerRef.current = observer;
//     }, 100);
//     return () => {
//       clearTimeout(timeoutId);
//       if (observerRef.current) observerRef.current.disconnect();
//     };
//   }, [isMounted, resolvedTheme]);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'text-gray-300 hover:text-orange-500',
//       themeButton: 'text-gray-400 hover:text-white',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'text-[#062540] hover:text-[#D26911]',
//       themeButton: 'text-[#235E80] hover:text-black',
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
//   const iconStrokeColor = hovered
//     ? (resolvedTheme === 'light' ? '#D26911' : '#ff4500')
//     : (resolvedTheme === 'light' ? '#062540' : 'white');

//   // --- JSX ---
//   return (
//     <>
//       <style jsx global>{`
//         @keyframes text-flicker {
//           0%, 100% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}, 0 0 2px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           25% { text-shadow: none; }
//           50% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
//           75% { text-shadow: none; }
//         }
//         .animate-flicker {
//           animation: text-flicker 3s linear infinite;
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 15s linear infinite;
//         }

//         @keyframes spin-fast {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(720deg); }
//         }
//         .animate-spin-fast {
//           animation: spin-fast 0.5s ease-in-out;
//         }
//       `}</style>
//       <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//         <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

//           <div className="flex items-center gap-4">
//             <RetroMusicPlayer />
//             <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//           </div>

//           <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 hidden md:block ${currentTheme.logo}`} aria-label="Scroll to top">
//             <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
//               chinmaypatil
//             </span>
//           </button>
//           <div className="hidden lg:flex items-center gap-6">
//             {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//               <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//                 {label}
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//                 <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleThemeToggle}
//               className={`p-2 rounded-full transition-colors duration-300 ${currentTheme.themeButton} ${isSwitching ? 'animate-spin-fast' : ''}`}
//               aria-label="Toggle theme mood"
//               disabled={isSwitching}
//             >
//               {resolvedTheme === 'dark'
//                 ? <SharinganIcon className="animate-spin-slow" />
//                 : <SageModeIcon />}
//             </button>
//             <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//               <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//                 RESUME
//               </button>
//               <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//               <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//                 <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }




'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import RetroMusicPlayer from './RetroMusicPlayer';

// --- NAVIGATION DATA ---
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#problems', label: 'Problems' },
];

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

    {/* Outer iris */}
    <circle
      cx="50"
      cy="50"
      r="48"
      fill="url(#irisGradient)"
      stroke="#000"
      strokeWidth="3"
      filter="url(#irisGlow)"
    />

    {/* Semi-transparent inner ring */}
    <circle
      cx="50"
      cy="50"
      r="23"
      fill="none"
      stroke="#000"
      strokeWidth="4"
      opacity="0.32"
    />

    {/* Center pupil */}
    <circle cx="50" cy="50" r="12" fill="#000" />

    {/* Tomoe petals, perfectly centered over the ring */}
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
        {/* Draw petal centered on ring */}
        <g transform="rotate(0) translate(0,-23)">
          <path
            d="
              M0,-8
              Q8,-7 7,0
              Q6,9 0,9
              Q-6,8 -7,0
              Q-8,-7 0,-8
              Z
            "
            fill="#000"
          />
        </g>
        <g transform="rotate(120) translate(0,-23)">
          <path
            d="
              M0,-8
              Q8,-7 7,0
              Q6,9 0,9
              Q-6,8 -7,0
              Q-8,-7 0,-8
              Z
            "
            fill="#000"
          />
        </g>
        <g transform="rotate(240) translate(0,-23)">
          <path
            d="
              M0,-8
              Q8,-7 7,0
              Q6,9 0,9
              Q-6,8 -7,0
              Q-8,-7 0,-8
              Z
            "
            fill="#000"
          />
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

    {/* Orange background with glow */}
    <circle cx="50" cy="50" r="48" fill="url(#orangeGlow)" filter="url(#softGlow)" />

    {/* Yellow iris */}
    <circle cx="50" cy="50" r="40" fill="#FFD700" stroke="#E09000" strokeWidth="3" />

    {/* Pupil rectangle with rounded edges */}
    <rect x="25" y="45" width="50" height="10" fill="#2F1B00" rx="5" />
  </svg>
);


// --- MAIN COMPONENT ---
export default function Navigation() {
  // --- STATE ---
  const { setTheme, resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false); // State for animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  // --- HANDLERS ---
  const handleThemeToggle = () => {
    if (isSwitching) return; // Prevents re-clicking during animation
    setIsSwitching(true);
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    setTimeout(() => {
      setIsSwitching(false);
    }, 500); // Duration should match the 'spin-fast' animation
  };

  const handleClick = useCallback((id: string) => {
    const section = document.querySelector(id) as HTMLElement | null;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // --- EFFECTS ---
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // --- THEME DEFINITIONS ---
  const themeClasses = {
    dark: {
      nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
      logo: 'text-gray-200 hover:text-white',
      link: 'text-gray-400 hover:text-white',
      activeLink: 'text-white font-medium',
      underline: 'bg-orange-500',
      resumeGroup: 'bg-[#1a1a1a] border-gray-700',
      resumeButton: 'text-gray-300 hover:text-orange-500',
      themeButton: 'text-gray-400 hover:text-white',
    },
    light: {
      nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
      logo: 'text-[#062540] hover:text-black',
      link: 'text-[#235E80] hover:text-black',
      activeLink: 'text-black font-medium',
      underline: 'bg-[#EAA007]',
      resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
      resumeButton: 'text-[#062540] hover:text-[#D26911]',
      themeButton: 'text-[#235E80] hover:text-black',
    }
  };

  if (!isMounted) {
    return null;
  }

  const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
  const iconStrokeColor = hovered
    ? (resolvedTheme === 'light' ? '#D26911' : '#ff4500')
    : (resolvedTheme === 'light' ? '#062540' : 'white');

  // --- JSX ---
  return (
    <>
      <style jsx global>{`
        @keyframes text-flicker {
          0%, 100% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}, 0 0 2px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
          25% { text-shadow: none; }
          50% { text-shadow: 0 0 1px ${resolvedTheme === 'light' ? '#D26911' : '#ff4500'}; }
          75% { text-shadow: none; }
        }
        .animate-flicker {
          animation: text-flicker 3s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
        .animate-spin-fast {
          animation: spin-fast 0.5s ease-in-out;
        }
      `}</style>
      <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
        <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

          <div className="flex items-center gap-4">
            <RetroMusicPlayer />
            <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
          </div>

          <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 hidden md:block ${currentTheme.logo}`} aria-label="Scroll to top">
            <span className={activeSection === 'home' ? 'animate-flicker' : ''}>
              chinmaypatil
            </span>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
              <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
                {label}
                <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
                <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${resolvedTheme === 'dark' ? 'focus:ring-orange-500 focus:ring-offset-gray-900' : 'focus:ring-[#D26911] focus:ring-offset-[#FAF3E6]'
                } ${isSwitching ? 'animate-spin-fast' : ''}`}
              aria-label="Toggle theme mood"
              disabled={isSwitching}
            >
              {resolvedTheme === 'dark'
                ? <SharinganIcon className="animate-spin-slow" />
                : <SageModeIcon />}
            </button>
            <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
              <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
                RESUME
              </button>
              <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
              <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
                <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}