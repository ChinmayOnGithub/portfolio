// src/app/components/DarkModePage.tsx
'use client';
import Image from "next/image";

import { projects } from '../../constants';
import React from "react";

// Use only first 3 projects for homepage
const featuredProjects = projects.slice(0, 3);

// const skills = {
//   "Core Toolkit": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JavaScript (ES6+)"],
//   "Backend & APIs": ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"],
//   "Developer Tools": ["PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "Figma"],
// };

// --- DATA FOR SKILLS SECTION ---
// Unused arrays - kept for reference
// const languagesAndCore = [
//   { name: "C++", color: "#00599C", shadow: "rgba(0, 89, 156, 0.4)", hoverText: "text-white" },
//   { name: "Java", color: "#f89820", shadow: "rgba(248, 152, 32, 0.4)", hoverText: "text-black" },
//   { name: "JavaScript", color: "#F7DF1E", shadow: "rgba(247, 223, 30, 0.4)", hoverText: "text-black" },
//   { name: "OOP", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
//   { name: "DSA", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
//   { name: "DBMS", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black" },
// ].reverse();

// const frontendSkills = [
//   { name: "HTML", color: "#E34F26", shadow: "rgba(227, 79, 38, 0.4)", hoverText: "text-white" },
//   { name: "CSS", color: "#1572B6", shadow: "rgba(21, 114, 182, 0.4)", hoverText: "text-white" },
//   { name: "TailwindCSS", color: "#06B6D4", shadow: "rgba(6, 182, 212, 0.4)", hoverText: "text-black" },
//   { name: "React.js", color: "#61DAFB", shadow: "rgba(97, 218, 251, 0.4)", hoverText: "text-black" },
// ].reverse();

// const backendAndDatabases = [
//   { name: "Node.js", color: "#5FA04E", shadow: "rgba(95, 160, 78, 0.4)", hoverText: "text-white" },
//   { name: "MySQL", color: "#4479A1", shadow: "rgba(68, 121, 161, 0.4)", hoverText: "text-white" },
//   { name: "MongoDB", color: "#47A248", shadow: "rgba(71, 162, 72, 0.4)", hoverText: "text-white" },
// ].reverse();

// const devopsAndTools = [
//   { name: "GitHub", color: "#FFFFFF", shadow: "rgba(255, 255, 255, 0.4)", hoverText: "text-black" },
//   { name: "Postman", color: "#FF6C37", shadow: "rgba(255, 108, 55, 0.4)", hoverText: "text-white" },
//   { name: "Linux", color: "#FCC624", shadow: "rgba(252, 198, 36, 0.4)", hoverText: "text-black" },
//   { name: "Docker", color: "#2496ED", shadow: "rgba(36, 150, 237, 0.4)", hoverText: "text-white" },
//   { name: "AWS (EC2, S3)", color: "#232F3E", shadow: "rgba(35, 47, 62, 0.4)", hoverText: "text-white" },
//   { name: "Kubernetes", color: "#326CE5", shadow: "rgba(50, 108, 229, 0.4)", hoverText: "text-white" },
// ].reverse();

// Type definition for skills
type Skill = {
  name: string;
  color: string;
  shadow: string;
  hoverText: string;
};

// Skill card component to avoid hooks in callbacks
const SkillCard = ({ skill }: { skill: Skill }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="p-2.5 rounded-lg border-2 cursor-pointer
                 transition-all duration-300 ease-out backdrop-blur-sm"
      style={{
        backgroundColor: isHovered ? skill.color : 'rgba(40, 40, 40, 0.8)',
        borderColor: isHovered ? skill.color : 'rgba(68, 68, 68, 0.6)',
        color: isHovered ? (skill.hoverText === 'text-black' ? '#000' : '#FFF') : '#D1D5DB',
        boxShadow: isHovered ? `0 6px 20px ${skill.shadow}, 0 0 30px ${skill.shadow}` : '0 2px 8px rgba(0,0,0,0.3)',
        transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="font-bold text-center text-sm">{skill.name}</h4>
    </div>
  );
};

// Commented out - Alternative file drawer design
// type SkillWithSide = Skill & {
//   side: 'left' | 'right';
//   logo?: string | React.ReactNode;
// };

// const allSkills: SkillWithSide[] = [
//   { name: "GitHub", color: "#FFFFFF", shadow: "rgba(255, 255, 255, 0.4)", hoverText: "text-black", side: 'left' },
//   { name: "Postman", color: "#FF6C37", shadow: "rgba(255, 108, 55, 0.4)", hoverText: "text-white", side: 'right' },
//   { name: "Linux", color: "#FCC624", shadow: "rgba(252, 198, 36, 0.4)", hoverText: "text-black", side: 'left' },
//   { name: "AWS (EC2, S3)", color: "#232F3E", shadow: "rgba(35, 47, 62, 0.4)", hoverText: "text-white", side: 'right' },
//   { name: "Docker", color: "#2496ED", shadow: "rgba(36, 150, 237, 0.4)", hoverText: "text-white", side: 'left' },
//   { name: "Kubernetes", color: "#326CE5", shadow: "rgba(50, 108, 229, 0.4)", hoverText: "text-white", side: 'right' },
//   { name: "MySQL", color: "#4479A1", shadow: "rgba(68, 121, 161, 0.4)", hoverText: "text-white", side: 'left' },
//   { name: "MongoDB", color: "#47A248", shadow: "rgba(71, 162, 72, 0.4)", hoverText: "text-white", side: 'right' },
//   { name: "Node.js", color: "#5FA04E", shadow: "rgba(95, 160, 78, 0.4)", hoverText: "text-white", side: 'left' },
//   { name: "DBMS", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black", side: 'right' },
//   { name: "OOP", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black", side: 'left' },
//   { name: "DSA", color: "#A29BFE", shadow: "rgba(162, 155, 254, 0.4)", hoverText: "text-black", side: 'right' },
//   { name: "C++", color: "#00599C", shadow: "rgba(0, 89, 156, 0.4)", hoverText: "text-white", side: 'left' },
//   { name: "Java", color: "#f89820", shadow: "rgba(248, 152, 32, 0.4)", hoverText: "text-black", side: 'right' },
//   { name: "JavaScript", color: "#F7DF1E", shadow: "rgba(247, 223, 30, 0.4)", hoverText: "text-black", side: 'left' },
//   { name: "HTML", color: "#E34F26", shadow: "rgba(227, 79, 38, 0.4)", hoverText: "text-white", side: 'right' },
//   { name: "CSS", color: "#1572B6", shadow: "rgba(21, 114, 182, 0.4)", hoverText: "text-white", side: 'left' },
//   { name: "TailwindCSS", color: "#06B6D4", shadow: "rgba(6, 182, 212, 0.4)", hoverText: "text-black", side: 'right' },
//   { name: "React.js", color: "#61DAFB", shadow: "rgba(97, 218, 251, 0.4)", hoverText: "text-black", side: 'left' },
// ];

// Commented out - Alternative stacked design
// type SkillStackProps = {
//   title: string;
//   skills: Skill[];
// };

// const SkillStack = ({ title, skills }: SkillStackProps) => (
//   <div className="flex flex-col items-center">
//     <h3 className="text-xl font-bold text-gray-100 mb-6 font-mono">{title}</h3>
//     <div className="flex flex-col items-center w-full max-w-xs min-h-[250px]">
//       {skills.map((skill, index) => (
//         <div
//           key={skill.name}
//           className="group relative w-full p-4 rounded-lg 
//                      border border-lime-400 bg-[#1f1f1f] text-gray-300
//                      transition-all duration-300 ease-out 
//                      z-${10 + index} 
//                      ${index > 0 ? '-mt-10' : ''} 
//                      hover:-translate-y-2 hover:z-50 hover:scale-105"
//           style={{
//             minHeight: '60px',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = skill.color;
//             e.currentTarget.style.borderColor = skill.color;
//             e.currentTarget.style.color = skill.hoverText === 'text-black' ? '#000' : '#FFF';
//             e.currentTarget.style.boxShadow = `0 8px 30px 0 ${skill.shadow}`;
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#1f1f1f';
//             e.currentTarget.style.borderColor = '#B6F427';
//             e.currentTarget.style.color = '#D1D5DB';
//             e.currentTarget.style.boxShadow = 'none';
//           }}
//         >
//           <h4 className="text-lg font-semibold text-center group-hover:opacity-0 transition-opacity duration-150">
//             {skill.name}
//           </h4>
//           <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 
//                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
//                           pointer-events-none">
//             <span className="w-8 h-8 flex items-center justify-center text-xl font-bold">
//               {skill.color}
//             </span>
//             <span className="font-semibold">{skill.name}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );


const problemSolving = [
  { name: "LeetCode", url: "https://leetcode.com/u/chinmaydpatil09/", description: "Honing my skills in data structures and algorithms." },
  { name: "Codeforces", url: "https://codeforces.com/profile/chinmaydpatil09", description: "Participating in competitive programming contests." }
];

export default function DarkModePage() {

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Commented out - Alternative file folder design component
  // const FileFolder = ({ skill, index }: { skill: SkillWithSide, index: number }) => {
  //   const isLeftTab = skill.side === 'left';
  //   const [isHovered, setIsHovered] = React.useState(false);

  //   const folderContainerStyle = {
  //     transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)',
  //     boxShadow: isHovered ? `0 10px 35px 0 ${skill.shadow}` : 'none',
  //     width: '60%',
  //     minHeight: '60px',
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
  //     zIndex: 10 + index,
  //   };

  //   const mainFolderBodyStyle = {
  //     backgroundColor: isHovered ? skill.color : '#1f1f1f',
  //     borderColor: isHovered ? skill.color : '#B6F427',
  //     borderBottom: '2px solid',
  //     borderLeft: isLeftTab ? 'none' : '2px solid',
  //     borderRight: isLeftTab ? '2px solid' : 'none',
  //     borderTopLeftRadius: isLeftTab ? '0' : '0.375rem',
  //     borderTopRightRadius: isLeftTab ? '0.375rem' : '0',
  //   };

  //   const tabStyle = {
  //     backgroundColor: isHovered ? skill.color : '#1f1f1f',
  //     borderColor: isHovered ? skill.color : '#B6F427',
  //     borderTop: '2px solid',
  //     borderLeft: isLeftTab ? '2px solid' : 'none',
  //     borderRight: isLeftTab ? 'none' : '2px solid',
  //   };

  //   return (
  //     <div
  //       key={skill.name}
  //       className={`relative h-[70px] transition-all duration-300 ease-out 
  //                 ${index > 0 ? '-mt-10' : ''}`}
  //       style={folderContainerStyle as React.CSSProperties}
  //       onMouseEnter={() => setIsHovered(true)}
  //       onMouseLeave={() => setIsHovered(false)}
  //       tabIndex={0}
  //       onFocus={() => setIsHovered(true)}
  //       onBlur={() => setIsHovered(false)}
  //       role="listitem"
  //       aria-label={`Skill: ${skill.name}`}
  //     >
  //       <div className={`absolute inset-0 flex ${isLeftTab ? 'flex-row' : 'flex-row-reverse'}`}>
  //         <div
  //           className="relative h-[24px] w-[130px] flex-shrink-0 
  //                    rounded-t-md transition-colors duration-300 ease-out"
  //           style={tabStyle as React.CSSProperties}
  //         >
  //           <span
  //             className="absolute inset-0 flex items-center justify-center 
  //                      text-xs font-semibold transition-opacity duration-300"
  //             style={{
  //               color: isHovered ? skill.hoverText : '#D1D5DB',
  //               opacity: isHovered ? 0 : 1,
  //             }}
  //           >
  //             {skill.name}
  //           </span>
  //         </div>
  //         <div
  //           className="relative w-full h-full rounded-b-md
  //                    transition-colors duration-300 ease-out"
  //           style={mainFolderBodyStyle as React.CSSProperties}
  //         >
  //           <span
  //             className="absolute inset-0 flex items-center justify-center 
  //                      text-xl font-bold transition-all duration-300 ease-out"
  //             style={{
  //               color: skill.hoverText,
  //               opacity: isHovered ? 1 : 0,
  //               transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
  //             }}
  //           >
  //             {skill.name}
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-[#212121]">

      {/* --- Commented out Background Video ---
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
      */}

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181818] to-transparent z-20 pointer-events-none"></div>

      {/* --- HERO SECTION (Now transparent to show the video) --- */}
      <section id="home" className="flex items-center justify-center w-full h-screen px-6 sm:px-8 z-10 bg-[#252525]">
        <div className="max-w-6xl w-full text-center md:text-left">
          <p className="text-sm text-lime-300 pb-4 font-mono">
            Hello, I&apos;m
          </p>
          <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl font-bold text-gray-50 leading-tight tracking-tight mb-4">
            <h1 className="font-bold" style={{ textShadow: '2px 2px #9400d3' }}>
              <span className="text-orange-500">Chinmay Patil</span>.
            </h1>
            <h2 className="text-gray-100">
              I build things for the web.
            </h2>
            <div className="w-full bg-lime-400 h-0.5 mt-4 rounded-full"></div>
          </div>

          <p className="mt-8 max-w-xl text-gray-200 text-lg italic mx-auto md:mx-0">
            I&apos;m a software developer based in Maharashtra, IN, specializing in building beautiful, high-performance web applications and robust backend systems.
          </p>
          <div className="relative mt-12 inline-block">
            <button
              onClick={scrollToContact}
              className="relative bg-lime-400 text-black font-bold text-lg px-8 py-4 rounded-full border-4 border-lime-400 transition-all duration-200 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 z-10"
            >
              Let&apos;s Connect
            </button>
            <div className="absolute top-2 left-2 w-full h-full bg-gray-700 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (Lighter Dark + Grainy Texture) --- */}
      <section id="about" className="relative w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#212121] z-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(64, 64, 64, 0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full z-10 items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 relative group">
              <div className="absolute -inset-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 delay-100"></div>
              <Image src="/player.svg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-2 border-gray-800 transition-all duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/1a1a1a/ff4500?text=Chinmay'; }} />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide">
              <span className="text-orange-500">01.</span> My Journey
            </h2>
            <div className="space-y-4 max-w-xl bg-[#282828] p-6 rounded-lg border border-lime-400 backdrop-blur-sm">
              <p>Hello! I&apos;m Chinmay, a full‑stack developer with a passion for creating digital experiences that are not only functional but also a pleasure to use.</p>
              <p>I focus on writing clean, maintainable code and shipping features that solve real-world problems, from lightning‑fast UIs to rock‑solid backend services.</p>
              <p>Soon, I&apos;ll be graduating with a B.Tech from{' '}
                <a className="text-orange-500 font-medium underline" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
                  Walchand College of Engineering
                </a>, where I&apos;ve honed my skills in system design and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- PROJECTS SECTION (Darker + Grid Texture) --- */}
      <section id="projects" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#252525] z-10 relative">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(80, 80, 80, 0.12) 1px, transparent 1px), linear-gradient(to right, rgba(80, 80, 80, 0.12) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono tracking-wide text-center md:text-left">
            <span className="text-orange-500">02.</span> Featured Work
          </h2>
          <p className="text-base text-gray-400 mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a key={project.id} href={`/projects/${project.id}`} className="group relative block p-5 overflow-hidden rounded-lg border-2 border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-[#1f1f1f] transition-colors"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #ff4500 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-gray-800 transition-colors flex-shrink-0">
                    <Image src={project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48/1f1f1f/ff4500?text=' + project.name.charAt(0); }} />
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
      {/* <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#212121] relative">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(96, 96, 96, 0.1), rgba(96, 96, 96, 0.1) 1px, transparent 1px, transparent 25px)' }}></div>
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
      </section> */}

      {/* --- SKILLS SECTION (File Drawer) - COMMENTED OUT --- */}
      {/* <section id="skills" className="w-full flex items-center justify-center min-h-screen py-24 px-6 sm:px-8 z-10 bg-[#212121] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(182, 244, 39, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 126, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-4xl w-full relative flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-16 font-mono tracking-wide text-center">
            <span className="text-orange-500">03.</span> My Arsenal
          </h2>

          <div className="w-full flex flex-col items-center">
            {allSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative w-[55%] p-4 
                            rounded-t-lg 
                            border-b-0 border-2 border-lime-400 
                            bg-[#1f1f1f] text-gray-300
                            transition-all duration-300 ease-out 
                            z-${10 + index} 
                            ${index > 0 ? '-mt-10' : ''} 
                            ${index % 2 === 0 ? 'self-start' : 'self-end'}
                            hover:z-50`}
                style={{
                  minHeight: '60px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = skill.color;
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.color = skill.hoverText === 'text-black' ? '#000' : '#FFF';
                  e.currentTarget.style.boxShadow = `0 8px 30px 0 ${skill.shadow}`;
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1f1f1f';
                  e.currentTarget.style.borderColor = '#B6F427';
                  e.currentTarget.style.color = '#D1D5DB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                }}
              >
                <h4
                  className={`text-lg font-semibold transition-all duration-300 ease-out group-hover:scale-110
                              ${index % 2 === 0 ? 'text-left pl-4' : 'text-right pr-4'}`}
                >
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>

          <div className="w-[60%] h-4 bg-gray-700 rounded-b-md mt-0 z-0 shadow-inner"></div>
          <div className="w-32 h-8 bg-gray-600 rounded-b-lg flex items-center justify-center -mt-1 shadow-lg">
            <div className="w-16 h-1 bg-gray-800 rounded-full"></div>
          </div>

        </div>
      </section> */}


      {/* --- SKILLS SECTION (Enhanced with Glassmorphism) --- */}
      <section id="skills" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#212121] relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(182, 244, 39, 0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255, 126, 0, 0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-6xl w-full relative flex flex-col items-center">
          {/* Section title with glow */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 font-mono tracking-wide text-center relative">
            <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]">03.</span> My Arsenal
          </h2>

          {/* Compact grid - all skills in one view */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* --- Category: Languages & Core Concepts --- */}
            <div className="group bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border-2 border-lime-400/40 shadow-lg hover:shadow-lime-400/20 hover:border-lime-400/60 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold text-gray-100 mb-3 font-mono text-center group-hover:text-lime-400 transition-colors">Languages & Core</h3>
              <div className="grid grid-cols-2 gap-2">
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
            <div className="group bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border-2 border-lime-400/40 shadow-lg hover:shadow-lime-400/20 hover:border-lime-400/60 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold text-gray-100 mb-3 font-mono text-center group-hover:text-lime-400 transition-colors">Frontend</h3>
              <div className="grid grid-cols-2 gap-2">
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
            <div className="group bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border-2 border-lime-400/40 shadow-lg hover:shadow-lime-400/20 hover:border-lime-400/60 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold text-gray-100 mb-3 font-mono text-center group-hover:text-lime-400 transition-colors">Backend & DB</h3>
              <div className="grid grid-cols-2 gap-2">
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
            <div className="group bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border-2 border-lime-400/40 shadow-lg hover:shadow-lime-400/20 hover:border-lime-400/60 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold text-gray-100 mb-3 font-mono text-center group-hover:text-lime-400 transition-colors">DevOps & Tools</h3>
              <div className="grid grid-cols-2 gap-2">
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



      {/* --- PROBLEM SOLVING SECTION (Darker + Dot Pattern) --- */}
      <section id="problems" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 z-10 bg-[#252525] relative">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(72, 72, 72, 0.14) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
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
      {/* <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#212121] z-10 relative">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(88, 88, 88, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(88, 88, 88, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
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
      </footer> */}
      <footer id="contact" className="w-full flex items-center justify-center h-screen px-6 sm:px-8 bg-[#212121] z-10 relative">
        {/* Lime and Orange subtle grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(182, 244, 39, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 126, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-3xl w-full text-center relative flex flex-col items-center">
          {/* HEADER: Orange for the number, white for the text */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 font-mono">
            <span className="text-orange-500">05.</span> Summoning Jutsu
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-lg">
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you!
          </p>

          {/* 1. THE MAIN "JUTSU" BUTTON (EMAIL) */}
          {/* This mimics your flashy "Let's Connect" button for consistency */}
          <a
            href="mailto:chinmaydpatil09@gmail.com"
            className="group relative inline-flex items-center justify-center px-10 py-4 
                      font-bold text-gray-900 bg-lime-400 rounded-lg 
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:shadow-[0_6px_30px_0_rgba(182,244,39,0.4)]"
          >
            <span className="text-lg">Say Hello</span>
          </a>

          {/* 2. THE "SEAL" (SECONDARY ICON LINKS) */}
          <div className="flex gap-8 mt-10">
            {/* GitHub Icon Link */}
            <a
              href="#your-github-url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 ease-out
                        hover:text-lime-400 hover:scale-110 hover:-translate-y-1
                        hover:drop-shadow-[0_0_15px_rgba(182,244,39,0.5)]"
              aria-label="GitHub"
            >
              {/* Use an SVG icon, e.g., from 'react-icons' or a custom one */}
              {/* <FaGithub size={28} /> */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.387C8.807 23.49 9.027 23.13 9.027 22.817C9.027 22.533 9.017 21.683 9.01 20.6C5.53 21.37 4.84 19.14 4.84 19.14C4.29 17.72 3.53 17.36 3.53 17.36C2.42 16.58 3.61 16.57 3.61 16.57C4.82 16.66 5.48 17.8 5.48 17.8C6.56 19.61 8.35 19.09 9.05 18.78C9.16 18.15 9.42 17.72 9.7 17.46C7.07 17.15 4.34 16.1 4.34 11.63C4.34 10.33 4.81 9.27 5.58 8.44C5.46 8.13 5.08 7.03 5.69 5.5C5.69 5.5 6.71 5.17 9.02 6.64C10.01 6.37 11.05 6.24 12.08 6.23C13.11 6.24 14.15 6.37 15.14 6.64C17.45 5.17 18.47 5.5 18.47 5.5C19.08 7.03 18.7 8.13 18.58 8.44C19.35 9.27 19.82 10.33 19.82 11.63C19.82 16.11 17.09 17.15 14.45 17.46C14.81 17.79 15.13 18.4 15.13 19.34C15.13 20.72 15.12 21.84 15.12 22.21C15.12 22.53 15.34 22.89 15.95 22.78C20.56 21.3 24 16.8 24 12C24 5.373 18.627 0 12 0Z" />
              </svg>
            </a>

            {/* LinkedIn Icon Link */}
            <a
              href="#your-linkedin-url" // <-- REPLACE THIS
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 ease-out
                        hover:text-lime-400 hover:scale-110 hover:-translate-y-1
                        hover:drop-shadow-[0_0_15px_rgba(182,244,39,0.5)]"
              aria-label="LinkedIn"
            >
              {/* <FaLinkedin size={28} /> */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.02 0H4.98C2.23 0 0 2.23 0 4.98V19.02C0 21.77 2.23 24 4.98 24H19.02C21.77 24 24 21.77 24 19.02V4.98C24 2.23 21.77 0 19.02 0ZM8.08 19.02H5.06V8.41H8.08V19.02ZM6.57 7.01C5.55 7.01 4.73 6.19 4.73 5.17C4.73 4.15 5.55 3.33 6.57 3.33C7.59 3.33 8.41 4.15 8.41 5.17C8.41 6.19 7.59 7.01 6.57 7.01ZM19.02 19.02H16V14.1C16 11.7 15.97 8.73 13.01 8.73C10.02 8.73 9.64 11.31 9.64 14V19.02H6.62V8.41H9.5V9.75H9.55C9.96 8.94 11.2 8.16 12.87 8.16C15.75 8.16 16.02 10.3 16.02 13.43V19.02H19.02Z" />
              </svg>
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
