// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Frontend Jutsu": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend Ninjutsu": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Shinobi Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode Dojo", url: "https://leetcode.com/u/ChinmayOnLeetcode/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces Arena", url: "https://codeforces.com/profile/chinmaypatil", description: "Battling in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-patil-cp/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center overflow-x-hidden">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>

//       <section id="home" className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full min-h-screen items-center px-4 z-10 scroll-mt-24">
//         <div className="pt-32 md:pt-0">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Greetings, Shinobi...
//           </p>
//           <div className="flex flex-col text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               I&apos;m <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           {/* --- NEW ANIMATED BUTTON --- */}
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             {/* The button text, which fades and scales out on hover */}
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>

//             {/* The image, which fades and scales in on hover */}
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image
//                 src="/connect-hands.png" // Make sure your image is here
//                 alt="A funny take on the Creation of Adam painting"
//                 layout="fill"
//                 objectFit="cover" // This makes the image fill the entire button
//               />
//             </div>
//           </button>
//         </div>
//       </section>

//       <section id="about" className="relative w-full flex justify-center min-h-screen items-center px-4 py-16 md:py-0 scroll-mt-24">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
//         <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_3fr] gap-10 max-w-6xl w-full z-10">
//           <div className="flex flex-col items-center justify-center">
//             <div className="w-64 h-64 sm:w-80 sm:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> The Shinobi&apos;s Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className="w-full flex justify-center px-4 py-16 md:py-32 bg-black/30 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide">
//             <span className="text-orange-500">02.</span> Missions & Projects
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl">
//             A few missions I&apos;ve undertaken recently. Many are open-source, so feel free to inspect the scrolls.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="skills" className="max-w-6xl w-full min-h-screen flex flex-col justify-center px-4 py-16 md:py-0 z-10 scroll-mt-24">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide">
//           <span className="text-orange-500">03.</span> Jutsu & Techniques
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {Object.entries(skills).map(([category, skillList]) => (
//             <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//               <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//               <ul className="space-y-2">
//                 {skillList.map(skill => (
//                   <li key={skill} className="flex items-center gap-3 text-gray-400">
//                     <span className="text-orange-500 font-bold text-xl">»</span>
//                     <span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="problems" className="max-w-6xl w-full min-h-screen flex flex-col justify-center px-4 py-16 md:py-0 z-10 scroll-mt-24">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide">
//           <span className="text-orange-500">04.</span> Dojo & Training
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {problemSolving.map((platform) => (
//             <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//               <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//               <div className="relative">
//                 <h3 className="text-xl font-bold flex items-center gap-2">
//                   {platform.name}
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                 </h3>
//                 <p className="mt-2 text-gray-400">{platform.description}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </section>

//       <footer id="contact" className="w-full flex justify-center px-4 py-24 bg-black/30 z-10">
//         <div className="max-w-3xl w-full text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Frontend Jutsu": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend Ninjutsu": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Shinobi Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode Dojo", url: "https://leetcode.com/u/ChinmayOnLeetcode/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces Arena", url: "https://codeforces.com/profile/chinmaypatil", description: "Battling in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-patil-cp/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center overflow-x-hidden">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="flex items-center justify-center w-full min-h-screen px-6 sm:px-8 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full text-center md:text-left">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Greetings, Shinobi...
//           </p>
//           {/* Responsive Typography */}
//           <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               I&apos;m <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="relative w-full flex justify-center items-center px-6 sm:px-8 py-24 scroll-mt-24">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
//         <div className="flex flex-col-reverse md:grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 max-w-6xl w-full z-10 items-center">
//           <div className="flex flex-col items-center justify-center">
//             {/* Responsive Image Size */}
//             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> The Shinobi&apos;s Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="w-full flex justify-center px-6 sm:px-8 py-24 bg-black/30 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">02.</span> Missions & Projects
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
//             A few missions I&apos;ve undertaken recently. Many are open-source, so feel free to inspect the scrolls.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION --- */}
//       <section id="skills" className="w-full flex justify-center px-6 sm:px-8 py-24 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">03.</span> Jutsu & Techniques
//           </h2>
//           {/* Responsive Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, skillList]) => (
//               <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//                 <ul className="space-y-2">
//                   {skillList.map(skill => (
//                     <li key={skill} className="flex items-center gap-3 text-gray-400">
//                       <span className="text-orange-500 font-bold text-xl">»</span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROBLEM SOLVING SECTION --- */}
//       <section id="problems" className="w-full flex justify-center px-6 sm:px-8 py-24 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">04.</span> Dojo & Training
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {problemSolving.map((platform) => (
//               <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//                 <div className="relative">
//                   <h3 className="text-xl font-bold flex items-center gap-2">
//                     {platform.name}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                   </h3>
//                   <p className="mt-2 text-gray-400">{platform.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <footer id="contact" className="w-full flex justify-center px-6 sm:px-8 py-24 bg-black/30 z-10">
//         <div className="max-w-3xl w-full text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           {/* Responsive Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Frontend Jutsu": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend Ninjutsu": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Shinobi Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode Dojo", url: "https://leetcode.com/u/ChinmayOnLeetcode/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces Arena", url: "https://codeforces.com/profile/chinmaypatil", description: "Battling in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-patil-cp/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center overflow-x-hidden">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="flex items-center justify-center w-full min-h-screen px-6 sm:px-8 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full text-center md:text-left">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Greetings, Shinobi...
//           </p>
//           <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               I&apos;m <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="relative w-full flex justify-center items-center px-6 sm:px-8 py-24 scroll-mt-24">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
//         {/* UPDATED: flex-col for mobile, md:grid for desktop */}
//         <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
//           {/* On mobile, image is on top. On desktop, it's the first grid item (left). */}
//           <div className="flex flex-col items-center justify-center order-first">
//             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> The Shinobi&apos;s Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="w-full flex justify-center px-6 sm:px-8 py-24 bg-black/30 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">02.</span> Missions & Projects
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
//             A few missions I&apos;ve undertaken recently. Many are open-source, so feel free to inspect the scrolls.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION --- */}
//       <section id="skills" className="w-full flex justify-center px-6 sm:px-8 py-24 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">03.</span> Jutsu & Techniques
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, skillList]) => (
//               <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//                 <ul className="space-y-2">
//                   {skillList.map(skill => (
//                     <li key={skill} className="flex items-center gap-3 text-gray-400">
//                       <span className="text-orange-500 font-bold text-xl">»</span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROBLEM SOLVING SECTION --- */}
//       <section id="problems" className="w-full flex justify-center px-6 sm:px-8 py-24 z-10 scroll-mt-24">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">04.</span> Dojo & Training
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {problemSolving.map((platform) => (
//               <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//                 <div className="relative">
//                   <h3 className="text-xl font-bold flex items-center gap-2">
//                     {platform.name}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                   </h3>
//                   <p className="mt-2 text-gray-400">{platform.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <footer id="contact" className="w-full flex justify-center px-6 sm:px-8 py-24 bg-black/30 z-10">
//         <div className="max-w-3xl w-full text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Core Toolkit": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Developer Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode", url: "https://leetcode.com/u/chinmaydpatil09/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces", url: "https://codeforces.com/profile/chinmaydpatil09", description: "Participating in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmaydpatil/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="flex flex-col items-center overflow-x-hidden">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-20 pointer-events-none"></div>

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="flex items-center justify-center w-full h-screen px-6 sm:px-8 z-10">
//         <div className="max-w-6xl w-full text-center md:text-left">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Hello, my name is
//           </p>
//           <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="relative w-full flex items-center justify-center h-screen px-6 sm:px-8">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
//           <div className="flex flex-col items-center justify-center">
//             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> My Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-black/30 z-10">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">02.</span> Featured Work
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
//             Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION --- */}
//       <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">03.</span> Core Toolkit
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, skillList]) => (
//               <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//                 <ul className="space-y-2">
//                   {skillList.map(skill => (
//                     <li key={skill} className="flex items-center gap-3 text-gray-400">
//                       <span className="text-orange-500 font-bold text-xl">»</span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROBLEM SOLVING SECTION --- */}
//       <section id="problems" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">04.</span> Professional Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {problemSolving.map((platform) => (
//               <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//                 <div className="relative">
//                   <h3 className="text-xl font-bold flex items-center gap-2">
//                     {platform.name}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                   </h3>
//                   <p className="mt-2 text-gray-400">{platform.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-black/30 z-10">
//         <div className="max-w-3xl w-full text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Core Toolkit": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Developer Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode", url: "https://leetcode.com/u/chinmaydpatil09/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces", url: "https://codeforces.com/profile/chinmaydpatil09", description: "Participating in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmaydpatil/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     // FIX: Main container is now transparent, allowing section backgrounds to control the color.
//     <div className="min-h-screen flex flex-col items-center overflow-x-hidden bg-transparent">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-20 pointer-events-none"></div>

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="flex items-center justify-center w-full h-screen px-6 sm:px-8 z-10">
//         <div className="max-w-6xl w-full text-center md:text-left">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Hello, my name is
//           </p>
//           <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="relative w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#121212]">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
//           <div className="flex flex-col items-center justify-center">
//             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> My Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#121212] z-10">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">02.</span> Featured Work
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
//             Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION --- */}
//       <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#121212]">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">03.</span> Core Toolkit
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, skillList]) => (
//               <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//                 <ul className="space-y-2">
//                   {skillList.map(skill => (
//                     <li key={skill} className="flex items-center gap-3 text-gray-400">
//                       <span className="text-orange-500 font-bold text-xl">»</span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROBLEM SOLVING SECTION --- */}
//       <section id="problems" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#121212]">
//         <div className="max-w-6xl w-full">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">04.</span> Professional Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {problemSolving.map((platform) => (
//               <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//                 <div className="relative">
//                   <h3 className="text-xl font-bold flex items-center gap-2">
//                     {platform.name}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                   </h3>
//                   <p className="mt-2 text-gray-400">{platform.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#121212] z-10">
//         <div className="max-w-3xl w-full text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


// // src/app/components/DarkModePage.tsx
// 'use client';
// import Image from "next/image";

// // --- DATA ARRAYS ---
// const projects = [
//   { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
//   { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
//   { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
// ];

// const skills = {
//   "Core Toolkit": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Developer Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// const problemSolving = [
//   { name: "LeetCode", url: "https://leetcode.com/u/chinmaydpatil09/", description: "Honing my skills in data structures and algorithms." },
//   { name: "Codeforces", url: "https://codeforces.com/profile/chinmaydpatil09", description: "Participating in competitive programming contests." }
// ];

// const contactLinks = [
//   { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
//   { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmaydpatil/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
//   { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
// ];

// export default function DarkModePage() {
//   const scrollToContact = () => {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center overflow-x-hidden bg-[#121212]">
//       <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-20 pointer-events-none"></div>

//       {/* --- HERO SECTION (Transparent) --- */}
//       <section id="home" className="flex items-center justify-center w-full h-screen px-6 sm:px-8 z-10 bg-transparent">
//         <div className="max-w-6xl w-full text-center md:text-left">
//           <p className="text-lg text-orange-500 pb-4 font-mono">
//             Hello, my name is
//           </p>
//           <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
//             <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
//               <span className="text-orange-500">Chinmay Patil</span>.
//             </h1>
//             <h2 className="text-gray-400">
//               I build things for the web.
//             </h2>
//           </div>
//           <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
//             I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
//           </p>
//           <button
//             onClick={scrollToContact}
//             className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
//           >
//             <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
//               Let&apos;s Connect
//             </span>
//             <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
//               <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
//             </div>
//           </button>
//         </div>
//       </section>

//       {/* --- ABOUT SECTION (Lighter Dark + Grainy Texture) --- */}
//       <section id="about" className="relative w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#181818]">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/grainy-texture.png")' }}></div>
//         <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
//           <div className="flex flex-col items-center justify-center">
//             <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
//               <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
//               <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
//               <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
//             </div>
//           </div>
//           <div className="flex flex-col text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
//               <span className="text-orange-500">01.</span> My Journey
//             </h2>
//             <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
//               <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
//               <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
//               <p>Soon, I’ll be graduating with a B.Tech from{' '}
//                 <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
//                   Walchand College of Engineering
//                 </a>, where I’ve honed my skills in system design and performance optimization.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION (Darker + Grid Texture) --- */}
//       <section id="projects" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#121212] z-10 relative">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(to right, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
//         <div className="max-w-6xl w-full relative">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">02.</span> Featured Work
//           </h2>
//           <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
//             Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
//                 <div className="relative flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
//                     <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-gray-400 text-sm">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION (Lighter Dark + Diagonal Lines) --- */}
//       <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#181818] relative">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #555, #555 1px, transparent 1px, transparent 20px)' }}></div>
//         <div className="max-w-6xl w-full relative">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">03.</span> Core Toolkit
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {Object.entries(skills).map(([category, skillList]) => (
//               <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
//                 <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
//                 <ul className="space-y-2">
//                   {skillList.map(skill => (
//                     <li key={skill} className="flex items-center gap-3 text-gray-400">
//                       <span className="text-orange-500 font-bold text-xl">»</span>
//                       <span>{skill}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- PROBLEM SOLVING SECTION (Darker + Dot Pattern) --- */}
//       <section id="problems" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#121212] relative">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
//         <div className="max-w-6xl w-full relative">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
//             <span className="text-orange-500">04.</span> Professional Growth
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {problemSolving.map((platform) => (
//               <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
//                 <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
//                 <div className="relative">
//                   <h3 className="text-xl font-bold flex items-center gap-2">
//                     {platform.name}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
//                   </h3>
//                   <p className="mt-2 text-gray-400">{platform.description}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- CONTACT SECTION (Lighter Dark + Final Texture) --- */}
//       <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#181818] z-10 relative">
//         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/grainy-texture.png")' }}></div>
//         <div className="max-w-3xl w-full text-center relative">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
//             <span className="text-orange-500">05.</span> Summoning Jutsu
//           </h2>
//           <p className="text-lg text-gray-400 mb-10">
//             My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {contactLinks.map((link) => (
//               <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
//                 {link.icon}
//                 <span className="font-semibold">{link.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }




// src/app/components/DarkModePage.tsx
'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

// --- DATA ARRAYS ---
const projects = [
  { logo: "/project-logos/stremora.svg", name: "Stremora", description: "Cloudinary based online video platform." },
  { logo: "/project-logos/verifyhub.svg", name: "VerifyHub", description: "Blockchain based certification vefication." },
  { logo: "/project-logos/another.svg", name: "Project Gamma", description: "Next.js app with server-side rendering." }
];

const skills = {
  "Core Toolkit": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
  "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
  "Developer Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
};

const problemSolving = [
  { name: "LeetCode", url: "https://leetcode.com/u/chinmaydpatil09/", description: "Honing my skills in data structures and algorithms." },
  { name: "Codeforces", url: "https://codeforces.com/profile/chinmaydpatil09", description: "Participating in competitive programming contests." }
];

const contactLinks = [
  { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmaydpatil/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
  { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
];

export default function DarkModePage() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 500);
      setScrollOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-[#121212]">
      {/* --- Integrated Background Video --- */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: scrollOpacity }}
      >
        <video
          src="/sukuna.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter blur-xl"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-20 pointer-events-none"></div>

      {/* --- HERO SECTION (Now transparent to show the video) --- */}
      <section id="home" className="flex items-center justify-center w-full h-screen px-6 sm:px-8 z-10 bg-transparent">
        <div className="max-w-6xl w-full text-center md:text-left">
          <p className="text-lg text-orange-500 pb-4 font-mono">
            Hello, my name is
          </p>
          <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
            <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
              <span className="text-orange-500">Chinmay Patil</span>.
            </h1>
            <h2 className="text-gray-400">
              I build things for the web.
            </h2>
          </div>
          <p className="mt-8 max-w-xl text-gray-400 mx-auto md:mx-0">
            I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
          </p>
          <button
            onClick={scrollToContact}
            className="relative mt-12 h-14 w-48 rounded-lg border-2 border-gray-800 bg-[#1f1f1f] font-bold text-gray-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden group"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-75 group-hover:opacity-0">
              Let&apos;s Connect
            </span>
            <div className="absolute inset-0 w-full h-full scale-125 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Image src="/connect-hands.png" alt="A funny take on the Creation of Adam painting" layout="fill" objectFit="cover" />
            </div>
          </button>
        </div>
      </section>

      {/* --- ABOUT SECTION (Lighter Dark + Grainy Texture) --- */}
      <section id="about" className="relative w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#181818] z-10">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/grainy-texture.png")' }}></div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
              <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
              <Image src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
              <span className="text-orange-500">01.</span> My Journey
            </h2>
            <div className="space-y-4 max-w-xl bg-[#1f1f1f] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
              <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
              <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
              <p>Soon, I’ll be graduating with a B.Tech from{' '}
                <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
                  Walchand College of Engineering
                </a>, where I’ve honed my skills in system design and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (Darker + Grid Texture) --- */}
      <section id="projects" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#121212] z-10 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(to right, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
            <span className="text-orange-500">02.</span> Featured Work
          </h2>
          <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a key={project.name} href="#" className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
                    <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=Logo'; }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (Lighter Dark + Diagonal Lines) --- */}
      <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#181818] relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #555, #555 1px, transparent 1px, transparent 20px)' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
            <span className="text-orange-500">03.</span> Core Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-[#1f1f1f] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-orange-500">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-gray-400">
                      <span className="text-orange-500 font-bold text-xl">»</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROBLEM SOLVING SECTION (Darker + Dot Pattern) --- */}
      <section id="problems" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#121212] relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-12 font-mono tracking-wide text-center md:text-left">
            <span className="text-orange-500">04.</span> Professional Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemSolving.map((platform) => (
              <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 80% 80%, #9400d3 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                <div className="relative">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {platform.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-400"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </h3>
                  <p className="mt-2 text-gray-400">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Lighter Dark + Final Texture) --- */}
      <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#181818] z-10 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("/grainy-texture.png")' }}></div>
        <div className="max-w-3xl w-full text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
            <span className="text-orange-500">05.</span> Summoning Jutsu
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-gray-800 bg-[#1f1f1f] hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-300">
                {link.icon}
                <span className="font-semibold">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
