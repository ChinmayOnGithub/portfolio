'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Calendar, Clock } from 'lucide-react';
import { papers } from '@/app/constants';
import { useResumeThemeSafe } from '@/components/resume/ThemeProvider';

export function TechnicalPapersSidebar() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <div className={`relative border p-6 pt-8 rounded-sm shadow-md font-serif overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-[#2B2520] text-[#E8E2D8] border-[#4E443A]' 
        : 'bg-[#FAF0D9] text-[#4A3B32] border-[#C5B59E]'
    }`}>
      {/* Decorative Vintage Paperclip */}
      <div className="absolute top-2 left-6 z-20 pointer-events-none">
        <svg className={`w-7 h-10 drop-shadow-sm transform -rotate-12 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      </div>

      <h3 className={`text-base font-bold font-cormorant tracking-wide uppercase mb-6 pb-2 border-b text-center transition-colors duration-300 ${
        isDark ? 'border-[#4E443A]/50 text-[#D0A060]' : 'border-[#C5B59E]/50 text-[#2C1E14]'
      }`}>
        Technical Papers Ledger
      </h3>

      <div className="space-y-6 relative z-10">
        {papers.map((paper) => (
          <div 
            key={paper.id} 
            className={`group flex flex-col gap-2 border-b border-dashed pb-5 last:border-0 last:pb-0 transition-colors duration-300 ${
              isDark ? 'border-[#4E443A]/40' : 'border-[#C5B59E]/40'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] tracking-widest uppercase">
              <span className={`font-semibold ${isDark ? 'text-[#D0A060]' : 'text-[#8A5A1B]'}`}>
                {paper.category}
              </span>
              <div className="flex items-center gap-2 opacity-60">
                <span className="flex items-center gap-0.5">
                  <Calendar className="w-3 h-3" />
                  {paper.date.split(' ')[0]}
                </span>
                <span>•</span>
                <span className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3" />
                  {paper.readTime}m
                </span>
              </div>
            </div>

            <Link 
              href={`/papers/${paper.id}`}
              className={`font-bold text-sm leading-snug underline decoration-1 underline-offset-4 group-hover:opacity-85 transition-opacity ${
                isDark ? 'text-[#E8E2D8]' : 'text-[#2C1E14]'
              }`}
            >
              {paper.title}
            </Link>

            <p className={`text-xs leading-relaxed line-clamp-2 ${
              isDark ? 'text-[#A68B6D]' : 'text-[#5D4B3E]/85'
            }`}>
              {paper.summary}
            </p>
          </div>
        ))}
      </div>

      {/* Verified Stamp Seal */}
      <div className="mt-6 flex justify-end">
        <div className={`w-12 h-12 border rounded-full flex items-center justify-center text-[8px] font-bold tracking-tighter uppercase transform rotate-12 select-none transition-colors duration-300 ${
          isDark ? 'border-[#D0A060]/30 text-[#D0A060]/50' : 'border-[#8A5A1B]/40 text-[#8A5A1B]/50'
        }`}>
          Published
        </div>
      </div>
      
      {/* Red margin accounting/ledger line */}
      <div className="absolute inset-y-0 right-3 w-px bg-red-500/10 pointer-events-none" />
    </div>
  );
}
