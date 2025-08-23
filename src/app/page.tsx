// 'use client';
// import Image from "next/image";
// import { useState, useEffect } from 'react';

// // --- DATA ARRAYS ---
// const projects = [
// 	{ logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
// 	{ logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
// 	{ logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
// 	"Frontend Jutsu": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
// 	"Backend Ninjutsu": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
// 	"Shinobi Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
// 	{ name: "LeetCode Dojo", url: "https://leetcode.com/u/ChinmayOnLeetcode/", description: "Honing my skills in data structures and algorithms." },
// 	{ name: "Codeforces Arena", url: "https://codeforces.com/profile/chinmaypatil", description: "Battling in competitive programming contests." }
// ];

// const contactLinks = [
// 	{ name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
// 	{ name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-patil-cp/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
// 	{ name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// // --- MAIN COMPONENT ---
// export default function Home() {
// 	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
// 	useEffect(() => {
// 		const isLightTheme = document.documentElement.classList.contains('light-theme');
// 		setTheme(isLightTheme ? 'light' : 'dark');
// 		const observer = new MutationObserver((mutations) => {
// 			mutations.forEach((mutation) => {
// 				if (mutation.attributeName === 'class') {
// 					const newIsLightTheme = (mutation.target as HTMLElement).classList.contains('light-theme');
// 					setTheme(newIsLightTheme ? 'light' : 'dark');
// 				}
// 			});
// 		});
// 		observer.observe(document.documentElement, { attributes: true });
// 		return () => observer.disconnect();
// 	}, []);

// 	const themeClasses = {
// 		dark: {
// 			bg: 'bg-[#1a1a1a]',
// 			text: 'text-gray-300',
// 			textMuted: 'text-gray-400',
// 			accent: 'text-orange-500',
// 			cardBg: 'bg-[#1f1f1f]',
// 			border: 'border-gray-800',
// 		},
// 		light: {
// 			bg: 'bg-[#FAF3E6]',
// 			text: 'text-[#062540]',
// 			textMuted: 'text-[#235E80]',
// 			accent: 'text-[#D26911]',
// 			cardBg: 'bg-white/50',
// 			border: 'border-[#D26911]/30',
// 		}
// 	};
// 	const currentTheme = themeClasses[theme];

// 	const scrollToContact = () => {
// 		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// 	};

// 	return (
// 		<div className={`${currentTheme.text} min-h-screen flex flex-col items-center overflow-x-hidden transition-colors duration-500`}>

// 			<div className={`fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${theme === 'dark' ? 'from-[#1a1a1a]' : 'from-[#FAF3E6]'} to-transparent z-20 pointer-events-none transition-colors duration-500`}></div>

// 			<section id="home" className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full min-h-screen items-center px-4 z-10 scroll-mt-24">
// 				<div className="pt-32 md:pt-0">
// 					<p className={`text-lg ${currentTheme.accent} pb-4 font-mono`}>
// 						Greetings, Shinobi...
// 					</p>
// 					<div className="flex flex-col text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
// 						<h1 className="font-bold" style={{ textShadow: theme === 'dark' ? '2px 2px #9400d3' : 'none' }}>
// 							I&apos;m <span className={currentTheme.accent}>Chinmay Patil</span>.
// 						</h1>
// 						<h2 className={currentTheme.textMuted}>
// 							I build things for the web.
// 						</h2>
// 					</div>
// 					<p className={`mt-8 max-w-xl ${currentTheme.textMuted}`}>
// 						I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
// 					</p>
// 					<button onClick={scrollToContact} className="mt-12 text-white font-bold py-3 px-6 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 border-2 border-transparent focus:border-white focus:outline-none">
// 						Let&apos;s Connect
// 					</button>
// 				</div>
// 				{/* <img src="/sukuna.gif" alt="just image" /> */}
// 			</section>

// 			<section id="about" className="relative w-full flex justify-center min-h-screen items-center px-4 py-16 md:py-0 scroll-mt-24">
// 				<div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
// 				<div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_3fr] gap-10 max-w-6xl w-full z-10">
// 					<div className="flex flex-col items-center justify-center">
// 						<div className="w-64 h-64 sm:w-80 sm:h-80 relative group">
// 							<div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
// 							<div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
// 							<Image
// 								src="/chinmaypatil.jpg"
// 								width={400} height={400} alt="A photo of Chinmay Patil"
// 								className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105"
// 								onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }}
// 							/>
// 						</div>
// 					</div>
// 					<div className="flex flex-col">
// 						<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
// 							<span className={currentTheme.accent}>01.</span> The Shinobi&apos;s Journey
// 						</h2>
// 						<div className={`space-y-4 max-w-xl ${currentTheme.cardBg} p-6 rounded-lg border ${currentTheme.border} backdrop-blur-sm`}>
// 							<p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
// 							<p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
// 							<p>Soon, I’ll be graduating with a B.Tech from{' '}
// 								<a className={`${currentTheme.accent} font-medium underline`} href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
// 									Walchand College of Engineering
// 								</a>
// 								, where I’ve honed my skills in system design and performance optimization.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			<section id="projects" className="w-full flex justify-center px-4 py-16 md:py-32 bg-black/30 z-10 scroll-mt-24">
// 				<div className="max-w-6xl w-full">
// 					<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide">
// 						<span className={currentTheme.accent}>02.</span> Missions & Projects
// 					</h2>
// 					<p className={`text-base ${currentTheme.textMuted} mb-10 max-w-3xl`}>
// 						A few missions I&apos;ve undertaken recently. Many are open-source, so feel free to inspect the scrolls.
// 					</p>
// 					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// 						{projects.map((project) => (
// 							<a key={project.name} href="#" className={`group relative block p-5 overflow-hidden rounded-lg border-2 ${currentTheme.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'hover:shadow-orange-500/10' : 'hover:shadow-orange-500/20'}`}>
// 								<div className={`absolute inset-0 ${currentTheme.cardBg} transition-colors`}></div>
// 								<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: `radial-gradient(circle at 20% 20%, ${theme === 'dark' ? '#ff4500' : '#D26911'} 1px, transparent 1px)`, backgroundSize: '10px 10px' }}></div>
// 								<div className="relative flex items-center gap-4">
// 									<div className={`w-12 h-12 rounded-md flex items-center justify-center border-2 ${currentTheme.border} transition-colors`}>
// 										<Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
// 									</div>
// 									<div>
// 										<h3 className="font-semibold text-lg">{project.name}</h3>
// 										<p className={`${currentTheme.textMuted} text-sm`}>{project.description}</p>
// 									</div>
// 								</div>
// 							</a>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			<section id="skills" className="max-w-6xl w-full min-h-screen flex flex-col justify-center px-4 py-16 md:py-0 z-10 scroll-mt-24">
// 				<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide">
// 					<span className={currentTheme.accent}>03.</span> Jutsu & Techniques
// 				</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					{Object.entries(skills).map(([category, skillList]) => (
// 						<div key={category} className={`${currentTheme.cardBg} p-6 rounded-lg border ${currentTheme.border}`}>
// 							<h3 className={`text-xl font-bold mb-4 ${currentTheme.accent}`}>{category}</h3>
// 							<ul className="space-y-2">
// 								{skillList.map(skill => (
// 									<li key={skill} className={`flex items-center gap-3 ${currentTheme.textMuted}`}>
// 										<span className={`${currentTheme.accent} font-bold text-xl`}>»</span>
// 										<span>{skill}</span>
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					))}
// 				</div>
// 			</section>

// 			<section id="problems" className="max-w-6xl w-full min-h-screen flex flex-col justify-center px-4 py-16 md:py-0 z-10 scroll-mt-24">
// 				<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide">
// 					<span className={currentTheme.accent}>04.</span> Dojo & Training
// 				</h2>
// 				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// 					{problemSolving.map((platform) => (
// 						<a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className={`group relative block p-6 overflow-hidden rounded-lg border-2 ${currentTheme.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${theme === 'dark' ? 'hover:shadow-orange-500/10' : 'hover:shadow-orange-500/20'}`}>
// 							<div className={`absolute inset-0 ${currentTheme.cardBg} transition-colors`}></div>
// 							<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
// 							<div className="relative">
// 								<h3 className="text-xl font-bold flex items-center gap-2">
// 									{platform.name}
// 									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-50 group-hover:opacity-100 transition-opacity ${currentTheme.textMuted}`}><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
// 								</h3>
// 								<p className={`mt-2 ${currentTheme.textMuted}`}>{platform.description}</p>
// 							</div>
// 						</a>
// 					))}
// 				</div>
// 			</section>

// 			<footer id="contact" className="w-full flex justify-center px-4 py-24 bg-black/30 z-10">
// 				<div className="max-w-3xl w-full text-center">
// 					<h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
// 						<span className={currentTheme.accent}>05.</span> Summoning Jutsu
// 					</h2>
// 					<p className={`text-lg ${currentTheme.textMuted} mb-10`}>
// 						My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
// 					</p>
// 					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// 						{contactLinks.map((link) => (
// 							<a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border ${currentTheme.border} ${currentTheme.cardBg} hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300`}>
// 								{link.icon}
// 								<span className="font-semibold">{link.name}</span>
// 							</a>
// 						))}
// 					</div>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }



// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import DarkModePage from './components/pages/DarkModePage';
import LightModePage from './components/pages/LightModePage';

export default function Home() {
	const { resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// We need to wait for the component to mount to know the theme.
	// This avoids a hydration mismatch between the server and client.
	if (!isMounted) {
		return null; // Or you could return a loading spinner here
	}

	// Conditionally render the correct page based on the theme
	return (
		<div>
			{resolvedTheme === 'light' ? <LightModePage /> : <DarkModePage />}
		</div>
	);
}