// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';

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
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   // FIX: Explicitly type the theme state to satisfy TypeScript
//   const [theme, setTheme] = useState<'light' | 'dark'>('dark');
//   const [musicStarted, setMusicStarted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

//   // --- HANDLERS ---
//   const toggleTheme = () => {
//     const newTheme = theme === 'dark' ? 'light' : 'dark';
//     setTheme(newTheme);
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   const fadeVolume = (targetVolume: number) => {
//     if (fadeIntervalRef.current) {
//       clearInterval(fadeIntervalRef.current);
//     }
//     if (!audioRef.current) return;

//     const step = 0.005;
//     const duration = 20; // ms per step

//     fadeIntervalRef.current = setInterval(() => {
//       if (!audioRef.current) return;
//       const currentVolume = audioRef.current.volume;
//       if (Math.abs(currentVolume - targetVolume) < step) {
//         audioRef.current.volume = targetVolume;
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//       } else if (currentVolume < targetVolume) {
//         audioRef.current.volume += step;
//       } else {
//         audioRef.current.volume -= step;
//       }
//     }, duration);
//   };

//   const toggleMute = () => {
//     if (!audioRef.current) return;

//     if (!musicStarted) {
//       audioRef.current.volume = 0; // Start muted
//       audioRef.current.play().catch(error => console.error("Audio play failed:", error));
//       setMusicStarted(true);
//       setIsMuted(false); // Set to unmuted state
//       fadeVolume(0.05); // Fade in to 5%
//     } else {
//       if (isMuted) {
//         fadeVolume(0.05); // Fade in
//       } else {
//         fadeVolume(0); // Fade out
//       }
//       setIsMuted(!isMuted);
//     }
//   };

//   // --- EFFECTS ---
//   useEffect(() => {
//     // FIX: Apply theme class to the root <html> element for global styling
//     document.documentElement.classList.toggle('light-theme', theme === 'light');

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveSection(entry.target.id);
//         });
//       },
//       { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//     );
//     navItems.forEach((item) => {
//       const element = document.querySelector(item.href);
//       if (element) observer.observe(element);
//     });
//     return () => {
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.unobserve(element);
//       });
//       if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     };
//   }, [theme]);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'hover:text-orange-500',
//       iconStroke: hovered ? "#ff4500" : "white",
//       themeButton: 'text-gray-400 hover:text-white',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'hover:text-[#D26911]',
//       iconStroke: hovered ? "#D26911" : "#062540",
//       themeButton: 'text-[#235E80] hover:text-black',
//     }
//   };
//   const currentTheme = themeClasses[theme]; // This line will now work without error

//   // --- JSX ---
//   return (
//     <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//       <audio ref={audioRef} src="/music/background-theme.mp3" loop />
//       <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

//         <div className="flex items-center">
//           <button onClick={toggleMute} className={`p-2 rounded-full transition-colors ${currentTheme.themeButton}`} aria-label="Toggle Music">
//             <div className={musicStarted ? 'animate-spin' : ''}>
//               <MusicNoteIcon />
//             </div>
//           </button>
//         </div>

//         <div className={`w-px h-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>

//         <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 ${currentTheme.logo} hidden md:block`} aria-label="Scroll to top">
//           chinmaypatil
//         </button>

//         <div className="hidden lg:flex items-center gap-6">
//           {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//             <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//               {label}
//               <span className={`absolute left-0 -bottom-1 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center gap-4">
//           <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//             {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
//           </button>

//           <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//             <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//               RESUME
//             </button>
//             <div className={`w-px h-5 ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//             <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//               <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={currentTheme.iconStroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

//the indicator not working here

// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';

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
//   const [musicStarted, setMusicStarted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   // --- HANDLERS ---
//   const toggleTheme = () => {
//     // FIX: Use resolvedTheme to ensure the toggle is always based on the current active theme.
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };

//   const handleClick = useCallback((id: string) => {
//     const section = document.querySelector(id) as HTMLElement | null;
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   const fadeVolume = (targetVolume: number) => {
//     if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     if (!audioRef.current) return;
//     const step = 0.005;
//     const duration = 20;
//     fadeIntervalRef.current = setInterval(() => {
//       if (!audioRef.current) return;
//       const currentVolume = audioRef.current.volume;
//       if (Math.abs(currentVolume - targetVolume) < step) {
//         audioRef.current.volume = targetVolume;
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//       } else if (currentVolume < targetVolume) {
//         audioRef.current.volume += step;
//       } else {
//         audioRef.current.volume -= step;
//       }
//     }, duration);
//   };

//   const toggleMute = () => {
//     if (!audioRef.current) return;
//     if (!musicStarted) {
//       audioRef.current.volume = 0;
//       audioRef.current.play().catch(error => console.error("Audio play failed:", error));
//       setMusicStarted(true);
//       setIsMuted(false);
//       fadeVolume(0.05);
//     } else {
//       fadeVolume(isMuted ? 0.05 : 0);
//       setIsMuted(!isMuted);
//     }
//   };

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveSection(entry.target.id);
//         });
//       },
//       { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//     );
//     navItems.forEach((item) => {
//       const element = document.querySelector(item.href);
//       if (element) observer.observe(element);
//     });
//     return () => {
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.unobserve(element);
//       });
//       if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     };
//   }, []);

//   // --- THEME DEFINITIONS ---
//   const themeClasses = {
//     dark: {
//       nav: 'bg-[#1f1f1f]/80 border-gray-800 shadow-orange-500/10',
//       logo: 'text-gray-200 hover:text-white',
//       link: 'text-gray-400 hover:text-white',
//       activeLink: 'text-white font-medium',
//       underline: 'bg-orange-500',
//       resumeGroup: 'bg-[#1a1a1a] border-gray-700',
//       resumeButton: 'hover:text-orange-500',
//       iconStroke: hovered ? "#ff4500" : "white",
//       themeButton: 'text-gray-400 hover:text-white',
//     },
//     light: {
//       nav: 'bg-[#FAF3E6]/80 border-[#D26911]/30 shadow-[#D26911]/20',
//       logo: 'text-[#062540] hover:text-black',
//       link: 'text-[#235E80] hover:text-black',
//       activeLink: 'text-black font-medium',
//       underline: 'bg-[#EAA007]',
//       resumeGroup: 'bg-[#FAF3E6]/50 border-[#D26911]/50',
//       resumeButton: 'hover:text-[#D26911]',
//       iconStroke: hovered ? "#D26911" : "#062540",
//       themeButton: 'text-[#235E80] hover:text-black',
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;

//   // --- JSX ---
//   return (
//     <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//       <audio ref={audioRef} src="/music/background-theme.mp3" loop />
//       <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

//         <div className="flex items-center">
//           <button onClick={toggleMute} className={`p-2 rounded-full transition-colors ${currentTheme.themeButton}`} aria-label="Toggle Music">
//             <div className={musicStarted ? 'animate-spin' : ''}>
//               <MusicNoteIcon />
//             </div>
//           </button>
//         </div>

//         <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>

//         <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 ${currentTheme.logo} hidden md:block`} aria-label="Scroll to top">
//           chinmaypatil
//         </button>

//         <div className="hidden lg:flex items-center gap-6">
//           {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//             <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//               {label}
//               <span className={`absolute left-0 -bottom-1 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//             </button>
//           ))}
//         </div>

//         <div className="flex items-center gap-4">
//           <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//             {/* FIX: Use resolvedTheme to ensure the correct icon is always shown */}
//             {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
//           </button>

//           <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//             <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${resolvedTheme === 'light' ? 'text-[#062540]' : currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//               RESUME
//             </button>
//             <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//             <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//               <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={currentTheme.iconStroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }




// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';

// // --- NAVIGATION DATA ---
// const navItems = [
//   { href: '#home', label: 'Home' },
//   { href: '#about', label: 'About' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#problems', label: 'Problems' },
// ];

// // --- SVG ICONS ---
// const SunIcon = () => (<svg xmlns="http://www.w.3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
// const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);
// const MusicNoteIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);

// // --- MAIN COMPONENT ---
// export default function Navigation() {
//   // --- STATE ---
//   const { setTheme, resolvedTheme } = useTheme();
//   const [hovered, setHovered] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [musicStarted, setMusicStarted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

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

//   const fadeVolume = (targetVolume: number) => {
//     if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     if (!audioRef.current) return;
//     const step = 0.005;
//     const duration = 20;
//     fadeIntervalRef.current = setInterval(() => {
//       if (!audioRef.current) return;
//       const currentVolume = audioRef.current.volume;
//       if (Math.abs(currentVolume - targetVolume) < step) {
//         audioRef.current.volume = targetVolume;
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//       } else if (currentVolume < targetVolume) {
//         audioRef.current.volume += step;
//       } else {
//         audioRef.current.volume -= step;
//       }
//     }, duration);
//   };

//   const toggleMute = () => {
//     if (!audioRef.current) return;
//     if (!musicStarted) {
//       audioRef.current.volume = 0;
//       audioRef.current.play().catch(error => console.error("Audio play failed:", error));
//       setMusicStarted(true);
//       setIsMuted(false);
//       fadeVolume(0.05);
//     } else {
//       fadeVolume(isMuted ? 0.05 : 0);
//       setIsMuted(!isMuted);
//     }
//   };

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // FIX: This effect now re-runs whenever the theme changes, ensuring it can find the sections.
//   useEffect(() => {
//     if (!isMounted) return; // Only run after the component has mounted

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveSection(entry.target.id);
//         });
//       },
//       { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
//     );

//     // Find and observe the sections
//     navItems.forEach((item) => {
//       const element = document.querySelector(item.href);
//       if (element) observer.observe(element);
//     });

//     // Cleanup function
//     return () => {
//       navItems.forEach((item) => {
//         const element = document.querySelector(item.href);
//         if (element) observer.unobserve(element);
//       });
//       if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     };
//   }, [isMounted, resolvedTheme]); // Re-run when the theme changes

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
//     <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
//       <audio ref={audioRef} src="/music/background-theme.mp3" loop />
//       <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">
//         <div className="flex items-center">
//           <button onClick={toggleMute} className={`p-2 rounded-full transition-colors ${currentTheme.themeButton}`} aria-label="Toggle Music">
//             <div className={musicStarted ? 'animate-spin' : ''}>
//               <MusicNoteIcon />
//             </div>
//           </button>
//         </div>
//         <div className={`w-px h-6 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//         <button onClick={() => handleClick('#home')} className={`text-lg font-semibold transition-colors duration-300 ${currentTheme.logo} hidden md:block`} aria-label="Scroll to top">
//           chinmaypatil
//         </button>
//         <div className="hidden lg:flex items-center gap-6">
//           {navItems.filter(item => item.label !== 'Home').map(({ href, label }) => (
//             <button key={href} onClick={() => handleClick(href)} className={`group relative text-sm transition-colors duration-300 ${activeSection === href.substring(1) ? currentTheme.activeLink : currentTheme.link}`}>
//               {label}
//               <span className={`absolute left-0 -bottom-1.5 w-full h-0.5 transition-transform origin-center duration-300 ${currentTheme.underline} ${activeSection === href.substring(1) ? 'scale-x-100' : 'scale-x-0'}`} />
//               <span className={`absolute left-0 -bottom-1.5 w-full h-1.5 transition-opacity origin-center duration-300 ${currentTheme.underline} blur-md ${activeSection === href.substring(1) ? 'opacity-50' : 'opacity-0'}`} />
//             </button>
//           ))}
//         </div>
//         <div className="flex items-center gap-4">
//           <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
//             {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
//           </button>
//           <div className={`group flex items-center justify-center gap-0 h-[40px] rounded-full transition-colors duration-300 ease-in-out shadow-md border ${currentTheme.resumeGroup}`}>
//             <button className={`text-sm px-4 py-2 transition-colors duration-300 font-medium ${currentTheme.resumeButton}`} onClick={() => window.open('/resume.pdf', '_blank')} title="Open Resume">
//               RESUME
//             </button>
//             <div className={`w-px h-5 ${resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-[#D26911]/50'}`}></div>
//             <button className="rounded-full h-[40px] w-[48px] flex justify-center items-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => { const link = document.createElement("a"); link.href = "/resume.pdf"; link.download = "ChinmayPatil_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} title="Download Resume">
//               <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25" stroke={iconStrokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



// 'use client';

// import { useCallback, useState, useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes';

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
//   const [musicStarted, setMusicStarted] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
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

//   const fadeVolume = (targetVolume: number) => {
//     if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//     if (!audioRef.current) return;
//     const step = 0.005;
//     const duration = 20;
//     fadeIntervalRef.current = setInterval(() => {
//       if (!audioRef.current) return;
//       const currentVolume = audioRef.current.volume;
//       if (Math.abs(currentVolume - targetVolume) < step) {
//         audioRef.current.volume = targetVolume;
//         if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
//       } else if (currentVolume < targetVolume) {
//         audioRef.current.volume += step;
//       } else {
//         audioRef.current.volume -= step;
//       }
//     }, duration);
//   };

//   const toggleMute = () => {
//     if (!audioRef.current) return;
//     if (!musicStarted) {
//       audioRef.current.volume = 0;
//       audioRef.current.play().catch(error => console.error("Audio play failed:", error));
//       setMusicStarted(true);
//       setIsMuted(false);
//       fadeVolume(0.05);
//     } else {
//       fadeVolume(isMuted ? 0.05 : 0);
//       setIsMuted(!isMuted);
//     }
//   };

//   // --- EFFECTS ---
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     // Disconnect any existing observer before creating a new one
//     if (observerRef.current) {
//       observerRef.current.disconnect();
//     }

//     // FIX: Use a timeout to ensure the DOM has updated after a theme change
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
//     }, 100); // 100ms delay gives React time to render the new page component

//     return () => {
//       clearTimeout(timeoutId);
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//       if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
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
//       musicButtonActive: 'bg-orange-500/20 text-orange-500 shadow-[0_0_12px_theme(colors.orange.500)]',
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
//       musicButtonActive: 'bg-[#D26911]/20 text-[#D26911] shadow-[0_0_12px_#D26911]',
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
//         <audio ref={audioRef} src="/music/background-theme.mp3" loop />
//         <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">
//           <div className="flex items-center">
//             <button onClick={toggleMute} className={`p-2 rounded-full transition-all duration-300 ${!isMuted ? currentTheme.musicButtonActive : currentTheme.themeButton}`} aria-label="Toggle Music">
//               <div className={musicStarted ? 'animate-spin' : ''}>
//                 <MusicNoteIcon />
//               </div>
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
//     </>
//   );
// }



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


// src/app/components/Navigation.tsx
'use client';

import { useCallback, useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import RetroMusicPlayer from './RetroMusicPlayer'; // Import the player

// --- NAVIGATION DATA ---
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#problems', label: 'Problems' },
];

// --- SVG ICONS ---
const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>);
const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>);

// --- MAIN COMPONENT ---
export default function Navigation() {
  // --- STATE ---
  const { setTheme, resolvedTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // --- HANDLERS ---
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
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
      `}</style>
      <nav className={`fixed top-5 z-50 left-1/2 -translate-x-1/2 backdrop-blur-lg rounded-full border shadow-lg transition-colors duration-500 ${currentTheme.nav}`}>
        <div className="flex items-center justify-between gap-4 sm:gap-8 px-3 py-2">

          {/* FIX: Group the player and divider together for optimal spacing */}
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
            <button onClick={toggleTheme} className={`transition-colors duration-300 ${currentTheme.themeButton}`} aria-label="Toggle theme">
              {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
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