"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from './ThemeProvider';
import { ResumeHeader } from './Header';
import { Featured } from './Featured';
import { SkillsSection } from './Skills';
import { Experience } from './Experience';
import Education from './Education';
import { Projects } from './Projects';

function ResumePageContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'
      }`}>
      <div className="w-full">
        <ResumeHeader />
        <main className="space-y-6 p-4 lg:p-6 max-w-5xl mx-auto">
          <Featured />
          <SkillsSection />
          <Experience />
          <Projects />
          <Education />
        </main>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <ResumeThemeProvider>
      <ResumePageContent />
    </ResumeThemeProvider>
  );
}
