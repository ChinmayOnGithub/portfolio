'use client';
import React from 'react';
import { projects } from '../../constants';

// Use only first 3 projects for homepage
const featuredProjects = projects.slice(0, 3);

// Type definition for skills
type Skill = {
  name: string;
  color: string;
  shadow: string;
  hoverText: string;
};

// Skill card component for light mode
const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="p-2.5 rounded-lg border-2 cursor-pointer
                 transition-all duration-300 ease-out backdrop-blur-sm"
      style={{
        backgroundColor: isHovered ? skill.color : 'rgba(255, 255, 255, 0.8)',
        borderColor: isHovered ? skill.color : 'rgba(210, 105, 17, 0.3)',
        color: isHovered ? (skill.hoverText === 'text-black' ? '#000' : '#FFF') : '#235E80',
        boxShadow: isHovered ? `0 6px 20px ${skill.shadow}, 0 0 30px ${skill.shadow}` : '0 2px 8px rgba(0,0,0,0.1)',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="font-bold text-center text-sm">{skill.name}</h4>
    </div>
  );
};

const skills = {
  "Core Expertise": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
  "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
  "Infrastructure": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
};

const problemSolving = [
  { name: "LeetCode", url: "https://leetcode.com/u/ChinmayOnLeetcode/", description: "Solving complex data structures and algorithms problems." },
  { name: "Codeforces", url: "https://codeforces.com/profile/chinmaypatil", description: "Participating in competitive programming contests." }
];

const contactLinks = [
  { name: "GitHub", url: "https://github.com/ChinmayOnGithub", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>) },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chinmay-patil-cp/", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>) },
  { name: "Email", url: "mailto:chinmaydpatil09@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
];

export default function LightModePage() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden text-[#062540] bg-[#FAF3E6]">
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF3E6] to-transparent z-20 pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <section id="home" className="w-full h-screen flex items-center justify-center px-6 sm:px-8 z-10">
        <div className="max-w-6xl w-full text-center md:text-left">
          <p className="text-lg text-[#D26911] pb-4 font-mono">
            Hello, I&apos;m
          </p>
          <div className="flex flex-col text-5xl sm:text-6xl font-bold leading-tight tracking-tight mb-4">
            <h1 className="font-bold text-black">
              <span className="text-[#D26911]">Chinmay Patil</span>.
            </h1>
            <h2 className="text-[#235E80]">
              I build things for the web.
            </h2>
          </div>
          <p className="mt-8 max-w-xl text-[#235E80] mx-auto md:mx-0">
            I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
          </p>
          <button onClick={scrollToContact} className="mt-12 text-white font-bold py-3 px-6 rounded-md bg-[#D26911] hover:bg-[#EAA007] transition-all duration-300 shadow-lg hover:shadow-xl shadow-[#D26911]/30">
            Get In Touch
          </button>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="relative w-full h-screen flex items-center justify-center px-6 sm:px-8 bg-[#FDF8EF]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(35, 94, 128, 0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
          <div className="flex flex-col text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 font-mono tracking-wide">
              <span className="text-[#D26911]">01.</span> My Journey
            </h2>
            <div className="space-y-4 max-w-xl bg-white/70 p-6 rounded-lg border border-[#D26911]/30 backdrop-blur-sm shadow-lg mx-auto md:mx-0">
              <p>Hello! I’m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
              <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
              <p>Soon, I’ll be graduating with a B.Tech from{' '}
                <a className="text-[#D26911] font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
                  Walchand College of Engineering
                </a>, where I’ve honed my skills in system design and performance optimization.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
              <img src="/player.svg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-105" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/400x400/FAF3E6/D26911?text=Chinmay'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION (Mobile Responsive) --- */}
      <section id="projects" className="relative w-full min-h-screen py-20 md:py-0 md:h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(210, 105, 17, 0.07) 1px, transparent 1px), linear-gradient(to right, rgba(210, 105, 17, 0.07) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4 font-mono tracking-wide text-center md:text-left">
            <span className="text-[#D26911] drop-shadow-[0_0_15px_rgba(210,105,17,0.3)]">02.</span> Featured Work
          </h2>
          <p className="text-sm sm:text-base text-[#235E80] mb-6 md:mb-8 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative block p-4 md:p-6 overflow-hidden rounded-xl md:rounded-2xl border border-[#D26911]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D26911]/30 hover:border-[#D26911]" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
                
                {/* Status Indicator & Year */}
                <div className="relative mb-3 md:mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#D26911] animate-pulse shadow-[0_0_8px_rgba(210,105,17,0.6)]"></div>
                    <span className="text-xs text-gray-500 font-mono">{project.year}</span>
                  </div>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-[#D26911]/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 hover:text-[#D26911] transition-colors">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Logo and Title */}
                <a href={`/projects/${project.id}`} className="relative flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center border border-[#D26911]/30 bg-white group-hover:border-[#D26911]/60 transition-colors flex-shrink-0 shadow-sm">
                    <img src={project.logoLight || project.logo} alt={`${project.name} logo`} width={40} height={40} className="object-contain w-7 h-7 md:w-9 md:h-9" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/48x48/ffffff/D26911?text=' + project.name.charAt(0); }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg md:text-xl text-black group-hover:text-[#D26911] transition-colors mb-1 md:mb-1.5">{project.name}</h3>
                    <p className="text-[#235E80] text-xs md:text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </a>

                {/* Tech Stack Pills */}
                <div className="relative mt-3 md:mt-5 pt-3 md:pt-4 border-t border-[#D26911]/20">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold rounded-full bg-white border border-[#D26911]/30 text-[#235E80] hover:border-[#D26911]/60 hover:text-[#D26911] transition-all duration-200 shadow-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full bg-[#D26911]/15 border border-[#D26911]/40 text-[#D26911] shadow-[0_0_12px_rgba(210,105,17,0.15)]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA - Always visible on mobile, hover on desktop */}
                <a href={`/projects/${project.id}`} className="relative mt-3 md:mt-5 flex items-center justify-between md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs md:text-sm text-[#D26911] font-semibold flex items-center gap-1 md:gap-2">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                  {project.liveUrl && (
                    <span className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live
                    </span>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION (Mobile Responsive) --- */}
      <section id="skills" className="w-full min-h-screen py-20 md:py-0 md:h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 z-10 relative bg-[#FDF8EF] overflow-hidden">
        {/* Animated gradient background - light version */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#D26911]/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#235E80]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(210, 105, 17, 0.08) 1px, transparent 1px), linear-gradient(to right, rgba(35, 94, 128, 0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-6xl w-full relative flex flex-col items-center">
          {/* Section title with glow */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8 font-mono tracking-wide text-center relative">
            <span className="text-[#D26911] drop-shadow-[0_0_15px_rgba(210,105,17,0.3)]">03.</span> My Arsenal
          </h2>

          {/* Compact grid - all skills in one view */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

            {/* --- Category: Languages & Core Concepts --- */}
            <div className="group bg-white/60 backdrop-blur-md p-3 md:p-4 rounded-xl border-2 border-[#D26911]/40 shadow-lg hover:shadow-[#D26911]/20 hover:border-[#D26911]/60 transition-all duration-300">
              <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 font-mono text-center group-hover:text-[#D26911] transition-colors">Languages & Core</h3>
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  { name: "C++", color: "#00599C", shadow: "rgba(0, 89, 156, 0.4)", hoverText: "text-white" },
                  { name: "Java", color: "#f89820", shadow: "rgba(248, 152, 32, 0.4)", hoverText: "text-black" },
                  { name: "JavaScript", color: "#F7DF1E", shadow: "rgba(247, 223, 30, 0.4)", hoverText: "text-black" },
                  { name: "OOP", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
                  { name: "DSA", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
                  { name: "DBMS", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill as Skill} />
                ))}
              </div>
            </div>

            {/* --- Category: Frontend --- */}
            <div className="group bg-white/60 backdrop-blur-md p-3 md:p-4 rounded-xl border-2 border-[#D26911]/40 shadow-lg hover:shadow-[#D26911]/20 hover:border-[#D26911]/60 transition-all duration-300">
              <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 font-mono text-center group-hover:text-[#D26911] transition-colors">Frontend</h3>
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  { name: "HTML", color: "#E34F26", shadow: "rgba(227, 79, 38, 0.4)", hoverText: "text-white" },
                  { name: "CSS", color: "#1572B6", shadow: "rgba(21, 114, 182, 0.4)", hoverText: "text-white" },
                  { name: "TailwindCSS", color: "#06B6D4", shadow: "rgba(6, 182, 212, 0.4)", hoverText: "text-black" },
                  { name: "React.js", color: "#61DAFB", shadow: "rgba(97, 218, 251, 0.4)", hoverText: "text-black" },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill as Skill} />
                ))}
              </div>
            </div>

            {/* --- Category: Backend & Databases --- */}
            <div className="group bg-white/60 backdrop-blur-md p-3 md:p-4 rounded-xl border-2 border-[#D26911]/40 shadow-lg hover:shadow-[#D26911]/20 hover:border-[#D26911]/60 transition-all duration-300">
              <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 font-mono text-center group-hover:text-[#D26911] transition-colors">Backend & DB</h3>
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  { name: "Node.js", color: "#5FA04E", shadow: "rgba(95, 160, 78, 0.4)", hoverText: "text-white" },
                  { name: "MySQL", color: "#4479A1", shadow: "rgba(68, 121, 161, 0.4)", hoverText: "text-white" },
                  { name: "MongoDB", color: "#47A248", shadow: "rgba(71, 162, 72, 0.4)", hoverText: "text-white" },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill as Skill} />
                ))}
              </div>
            </div>

            {/* --- Category: DevOps & Tools --- */}
            <div className="group bg-white/60 backdrop-blur-md p-3 md:p-4 rounded-xl border-2 border-[#D26911]/40 shadow-lg hover:shadow-[#D26911]/20 hover:border-[#D26911]/60 transition-all duration-300">
              <h3 className="text-base md:text-lg font-bold text-black mb-2 md:mb-3 font-mono text-center group-hover:text-[#D26911] transition-colors">DevOps & Tools</h3>
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  { name: "GitHub", color: "#FFFFFF", shadow: "rgba(255, 255, 255, 0.4)", hoverText: "text-black" },
                  { name: "Postman", color: "#FF6C37", shadow: "rgba(255, 108, 55, 0.4)", hoverText: "text-white" },
                  { name: "Linux", color: "#FCC624", shadow: "rgba(252, 198, 36, 0.4)", hoverText: "text-black" },
                  { name: "Docker", color: "#2496ED", shadow: "rgba(36, 150, 237, 0.4)", hoverText: "text-white" },
                  { name: "AWS", color: "#232F3E", shadow: "rgba(35, 47, 62, 0.4)", hoverText: "text-white" },
                  { name: "K8s", color: "#326CE5", shadow: "rgba(50, 108, 229, 0.4)", hoverText: "text-white" },
                ].map((skill) => (
                  <SkillCard key={skill.name} skill={skill as Skill} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- PROBLEM SOLVING SECTION --- */}
      <section id="problems" className="w-full h-screen flex items-center justify-center px-6 sm:px-8 z-10 relative">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(35, 94, 128, 0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-mono tracking-wide text-center md:text-left">
            <span className="text-[#D26911]">04.</span> Professional Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemSolving.map((platform) => (
              <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 overflow-hidden rounded-lg border-2 border-[#D26911]/30 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D26911]/20">
                <div className="relative">
                  <h3 className="text-xl font-bold flex items-center gap-2 text-black">
                    {platform.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity text-gray-500"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                  </h3>
                  <p className="mt-2 text-[#235E80]">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <footer id="contact" className="w-full h-screen flex items-center justify-center px-6 sm:px-8 z-10 relative bg-[#FDF8EF]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(210, 105, 17, 0.07) 1px, transparent 1px), linear-gradient(to right, rgba(210, 105, 17, 0.07) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl w-full text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-mono">
            <span className="text-[#D26911]">05.</span> Let&apos;s Create Something
          </h2>
          <p className="text-lg text-[#235E80] mb-10">
            Have a project in mind or just want to chat? My inbox is always open.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 p-4 overflow-hidden rounded-lg border border-[#D26911]/30 bg-white/70 backdrop-blur-sm hover:bg-[#D26911] hover:text-white transition-all duration-300 text-[#062540]">
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

