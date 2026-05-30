import React from 'react';
import { Award, FileCheck, Landmark } from 'lucide-react';

export function BookStack() {
  const books = [
    { title: "Linux System Programming", color: "bg-[#4B1A28] text-[#EAD2AC]", height: "h-9", width: "w-[95%]" },
    { title: "Designing Reliable APIs", color: "bg-[#1B3624] text-[#EFEFEF]", height: "h-10", width: "w-[100%]" },
    { title: "Docker & Containers", color: "bg-[#8A5A1B] text-[#FFFFFF]", height: "h-9", width: "w-[92%]" },
    { title: "Algorithms & Structures", color: "bg-[#152535] text-[#EAD2AC]", height: "h-8", width: "w-[96%]" },
    { title: "SysDesign Principles", color: "bg-[#7E3520] text-[#EFEFEF]", height: "h-10", width: "w-[98%]" },
  ];

  return (
    <div className="vintage-card p-6 flex flex-col items-center">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <h3 className="text-sm font-bold font-cormorant tracking-widest uppercase mb-6 text-[var(--text-color)] relative z-10 border-b border-[var(--border-color)] pb-2 w-full text-center">
        Reference Library
      </h3>
      
      {/* Bookshelf Stack */}
      <div className="flex flex-col items-center justify-end w-full space-y-0.5 relative z-10 pb-2">
        {books.map((book, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between px-4 cursor-help rounded-sm shadow-sm transition-all duration-300 hover:translate-x-3 border-x border-[var(--border-color)] ${book.height} ${book.width} ${book.color}`}
            title={`Reference reading on ${book.title}`}
          >
            {/* Book spine decorative details */}
            <div className="w-1.5 h-full opacity-35 bg-black/40" />
            <span className="font-cormorant text-[10px] lg:text-[11px] font-bold tracking-wider uppercase truncate max-w-[80%]">
              {book.title}
            </span>
            <div className="w-1.5 h-full opacity-35 bg-white/20" />
          </div>
        ))}
        {/* Bookshelf Base */}
        <div className="w-full h-3 bg-[#4A3B32] border-t border-b border-[#2A1F18] shadow-md mt-1 rounded-sm" />
      </div>
    </div>
  );
}

import { useResumeThemeSafe } from '@/components/resume/ThemeProvider';

export function ArchivalProofs() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const proofs = [
    { title: "B.Tech IT Degree", institution: "Walchand College of Engineering", date: "Class of 2026", icon: Landmark },
    { title: "Qualys Internship", role: "Software Engineering Intern", date: "Jan 2026 - Present", icon: FileCheck },
    { title: "Red Hat Fundamentals", id: "RH104 Certificate", date: "Sept 2025", icon: Award },
  ];

  return (
    <div className={`relative border p-6 pt-8 rounded-sm shadow-md font-serif overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-[#2B2520] text-[#E8E2D8] border-[#4E443A]' 
        : 'bg-[#FAF0D9] text-[#4A3B32] border-[#C5B59E]'
    }`}>
      {/* Paperclip */}
      <div className="absolute top-2 left-6 z-20 pointer-events-none">
        <svg className={`w-7 h-10 drop-shadow-sm transform -rotate-12 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </div>

      <h3 className={`text-base font-bold font-cormorant tracking-wide uppercase mb-4 pb-2 border-b text-center transition-colors duration-300 ${
        isDark ? 'border-[#4E443A]/50 text-[#D0A060]' : 'border-[#C5B59E]/50 text-[#2C1E14]'
      }`}>
        Archival Registry
      </h3>

      <div className="space-y-4">
        {proofs.map((proof, idx) => (
          <div key={idx} className={`flex gap-3 items-start border-b border-dashed pb-3 last:border-0 last:pb-0 transition-colors duration-300 ${
            isDark ? 'border-[#4E443A]/40' : 'border-[#C5B59E]/40'
          }`}>
            <proof.icon className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-300 ${isDark ? 'text-[#D0A060]' : 'text-[#8A5A1B]'}`} />
            <div className="flex-1 min-w-0">
              <h4 className={`font-bold text-sm truncate transition-colors duration-300 ${isDark ? 'text-[#E8E2D8]' : 'text-[#2C1E14]'}`}>{proof.title}</h4>
              <p className={`text-xs truncate transition-colors duration-300 ${isDark ? 'text-[#A68B6D]' : 'text-[#5D4B3E]/80'}`}>{proof.institution || proof.role || proof.id}</p>
              <p className={`text-[10px] italic mt-0.5 transition-colors duration-300 ${isDark ? 'text-[#A68B6D]/80' : 'text-[#8B6F47]'}`}>{proof.date}</p>
            </div>
            {/* Ink Stamp Seal */}
            <div className={`w-9 h-9 border rounded-full flex items-center justify-center text-[7px] font-bold tracking-tighter uppercase transform rotate-12 shrink-0 select-none transition-colors duration-300 ${
              isDark ? 'border-[#D0A060]/30 text-[#D0A060]/50' : 'border-[#8A5A1B]/40 text-[#8A5A1B]/50'
            }`}>
              Verified
            </div>
          </div>
        ))}
      </div>
      
      {/* Antique ledger lines */}
      <div className="absolute inset-y-0 right-3 w-px bg-red-500/10 pointer-events-none" />
    </div>
  );
}
