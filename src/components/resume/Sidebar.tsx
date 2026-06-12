'use client';

import React from 'react';
import { Award, GraduationCap, Github, Terminal } from 'lucide-react';
import { useResumeThemeSafe } from '@/components/resume/ThemeProvider';

interface Accolade {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
  stampText: string;
  icon: React.ReactNode;
}

export function AccoladesSidebar() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const accolades: Accolade[] = [
    {
      id: 'hacktoberfest',
      title: 'Hacktoberfest Contributor',
      issuer: 'GitHub & DigitalOcean',
      period: 'Oct 2024',
      description: 'Completed verified contributions to open-source projects during the annual global event.',
      stampText: 'HF',
      icon: <Github className="w-3.5 h-3.5" />
    },
    {
      id: 'open-source',
      title: 'Open Source Advocate',
      issuer: 'GitHub Community',
      period: 'Continuous',
      description: 'Active contributor to developer tooling, libraries, and public packages.',
      stampText: 'OS',
      icon: <Terminal className="w-3.5 h-3.5" />
    },
    {
      id: 'wce',
      title: 'WCE B.Tech IT Graduate',
      issuer: 'Walchand College of Engg.',
      period: 'Class of 2025',
      description: 'Specialized in systems engineering, distributed architecture, and network security.',
      stampText: 'WCE',
      icon: <GraduationCap className="w-3.5 h-3.5" />
    },
    {
      id: 'infrastructure',
      title: 'Homelab SysOps Architect',
      issuer: 'Self-Hosted Cloud',
      period: 'Continuous',
      description: 'Orchestrating containerized private networking, DNS proxies, and isolated virtualization.',
      stampText: 'SYS',
      icon: <Award className="w-3.5 h-3.5" />
    }
  ];

  return (
    <div className={`relative border p-6 pt-8 rounded-sm shadow-md font-serif overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-[#2B2520] text-[#E8E2D8] border-[#4E443A]' 
        : 'bg-[#FAF0D9] text-[#4A3B32] border-[#C5B59E]'
    }`}>
      {/* Decorative Vintage Paperclip */}
      <div className="absolute -top-5 left-6 z-20 pointer-events-none">
        <svg className={`w-7 h-10 drop-shadow-sm transform -rotate-12 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </div>

      <h3 className={`text-base font-bold font-cormorant tracking-wide uppercase mb-6 pb-2 border-b text-center transition-colors duration-300 ${
        isDark ? 'border-[#4E443A]/50 text-[#D0A060]' : 'border-[#C5B59E]/50 text-[#2C1E14]'
      }`}>
        Verified Seals & Accolades
      </h3>

      <div className="space-y-6 relative z-10">
        {accolades.map((item) => (
          <div 
            key={item.id} 
            className={`group flex items-start gap-4 border-b border-dashed pb-5 last:border-0 last:pb-0 transition-colors duration-300 ${
              isDark ? 'border-[#4E443A]/40' : 'border-[#C5B59E]/40'
            }`}
          >
            {/* Organic Wax Seal Emblem */}
            <div className="shrink-0 relative">
              <div 
                className="w-11 h-11 rounded-full border-2 border-dashed flex flex-col items-center justify-center select-none shadow-sm relative transition-all duration-300"
                style={{
                  borderRadius: '48% 52% 50% 50% / 50% 48% 52% 50%', // Simulates melted wax edge
                  transform: `rotate(${item.id === 'hacktoberfest' ? '-6deg' : item.id === 'wce' ? '4deg' : item.id === 'open-source' ? '-2deg' : '8deg'})`,
                  borderColor: isDark ? 'var(--accent-color)' : '#C2410C',
                  backgroundColor: isDark ? 'rgba(208, 160, 96, 0.12)' : 'rgba(194, 65, 12, 0.08)',
                  color: isDark ? 'var(--accent-color)' : '#C2410C',
                  boxShadow: 'inset 0 0 6px rgba(0,0,0,0.1)'
                }}
              >
                <span className="text-[9px] font-bold tracking-tighter uppercase leading-none font-cormorant">
                  {item.stampText}
                </span>
                <div className="opacity-80 scale-75 mt-0.5">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Accolade Metadata */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between text-[10px] tracking-wider uppercase">
                <span className={`font-semibold font-sans ${isDark ? 'text-[#D0A060]' : 'text-[#8A5A1B]'}`}>
                  {item.issuer}
                </span>
                <span className="opacity-60 font-sans">
                  {item.period}
                </span>
              </div>

              <h4 className={`font-bold font-cormorant text-sm leading-snug ${
                isDark ? 'text-[#E8E2D8]' : 'text-[#2C1E14]'
              }`}>
                {item.title}
              </h4>

              <p className={`text-xs leading-normal font-times ${
                isDark ? 'text-[#A68B6D]' : 'text-[#5D4B3E]/85'
              }`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Verified Stamp Seal at the bottom */}
      <div className="mt-6 flex justify-end">
        <div className={`w-12 h-12 border rounded-full flex items-center justify-center text-[7px] font-bold tracking-tighter uppercase transform rotate-12 select-none transition-colors duration-300 ${
          isDark ? 'border-[#D0A060]/30 text-[#D0A060]/50' : 'border-[#8A5A1B]/40 text-[#8A5A1B]/50'
        }`}>
          ARCHIVE SEC
        </div>
      </div>
      
      {/* Red margin accounting/ledger line */}
      <div className="absolute inset-y-0 right-3 w-px bg-red-500/10 pointer-events-none" />
    </div>
  );
}
