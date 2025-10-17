'use client';
import { projects } from '../../constants';

// Use only first 3 projects for homepage
const featuredProjects = projects.slice(0, 3);

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
  { name: "Email", url: "mailto:chinmay.patil.contact@gmail.com", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>) }
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
              <img src="/chinmaypatil.jpg" width={400} height={400} alt="A photo of Chinmay Patil" className="relative rounded-lg w-full h-full object-cover border-4 border-white shadow-2xl transition-all duration-300 group-hover:scale-105" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/400x400/FAF3E6/D26911?text=Chinmay'; }} />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-8 py-20 md:py-0 z-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(210, 105, 17, 0.07) 1px, transparent 1px), linear-gradient(to right, rgba(210, 105, 17, 0.07) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-mono tracking-wide text-center md:text-left">
            <span className="text-[#D26911]">02.</span> Featured Work
          </h2>
          <p className="text-base text-[#235E80] mb-10 max-w-3xl text-center md:text-left mx-auto md:mx-0">
            Here are a few projects I&apos;ve worked on recently. Many are open-source, so feel free to check out the code.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a key={project.id} href={`/projects/${project.id}`} className="group relative block p-5 overflow-hidden rounded-lg border border-[#D26911]/30 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D26911]/20">
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center border-2 border-[#D26911]/30 bg-white flex-shrink-0">
                    <img src={project.logoLight || project.logo} alt={`${project.name} logo`} width={36} height={36} className="object-contain w-8 h-8" onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/48x48/ffffff/D26911?text=' + project.name.charAt(0); }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">{project.name}</h3>
                    <p className="text-[#235E80] text-sm">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="w-full h-screen flex items-center justify-center px-6 sm:px-8 z-10 relative bg-[#FDF8EF]">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(210, 105, 17, 0.06), rgba(210, 105, 17, 0.06) 1px, transparent 1px, transparent 25px)' }}></div>
        <div className="max-w-6xl w-full relative">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-mono tracking-wide text-center md:text-left">
            <span className="text-[#D26911]">03.</span> My Toolkit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white/70 p-6 rounded-lg border border-[#D26911]/30 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#D26911]">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map(skill => (
                    <li key={skill} className="flex items-center gap-3 text-[#235E80]">
                      <span className="text-[#D26911] font-bold text-xl">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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

