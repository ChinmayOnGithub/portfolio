"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { ResumeHeader } from '@/components/resume/Header';
import { About } from '@/components/resume/About';
import { Featured } from '@/components/resume/Featured';
import { SkillsSection } from '@/components/resume/Skills';
import { Experience } from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import { Projects } from '@/components/resume/Projects';

function ResumePageContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-[#000000] text-[#E6E6E6]' : 'bg-white text-slate-900'
      }`}>
      <div className="w-full">
        <ResumeHeader />
        <main className="space-y-6 p-4 lg:p-6 max-w-5xl mx-auto">
          <About />
          <Featured />
          <SkillsSection />
          <Projects />
          <Experience />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <ResumeThemeProvider>
      <ResumePageContent />
    </ResumeThemeProvider>
  );
}
