"use client";

import React, { useEffect, useState } from 'react';
import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { ResumeHeader } from '@/components/resume/Header';
import { About } from '@/components/resume/About';
import { SkillsSection } from '@/components/resume/Skills';
import { Experience } from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import { Projects } from '@/components/resume/Projects';


function ResumePageContent() {
  const [showSkills, setShowSkills] = useState(false);
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const handleSkillsNav = () => {
    if (!showSkills) {
      setShowSkills(true);
    }
    // Wait for the DOM element to render
    setTimeout(() => {
      const element = document.getElementById('skills');
      if (element) {
        const offset = 90; // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const colors = isDark ? {
    bg: '#1E1C19',
    text: '#E8E2D8',
    border: '#443E38',
    accent: '#D0A060',
    meta: '#A68B6D',
    cardBg: '#23201D',
    badgeBg: 'rgba(208, 160, 96, 0.08)',
    badgeBorder: 'rgba(208, 160, 96, 0.25)',
    badgeText: '#D0A060',
  } : {
    bg: '#FAF6EE',
    text: '#2B2620',
    border: '#D3C2B0',
    accent: '#8C6239', // Rich leather brown instead of blue
    meta: '#8B6F47',
    cardBg: '#F4EFE6',
    badgeBg: '#EFEAD8', // Warm clay-paper color
    badgeBorder: '#DDD5C5',
    badgeText: '#5D4B3E', // Muted ink-charcoal
  };

  const cssVariables = {
    '--bg-color': colors.bg,
    '--text-color': colors.text,
    '--border-color': colors.border,
    '--accent-color': colors.accent,
    '--meta-color': colors.meta,
    '--card-bg': colors.cardBg,
    '--badge-bg': colors.badgeBg,
    '--badge-border': colors.badgeBorder,
    '--badge-text': colors.badgeText,
  } as React.CSSProperties;

  return (
    <div
      className="min-h-screen transition-colors duration-300 relative pb-20 font-sans"
      style={{
        ...cssVariables,
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)'
      }}
    >
      <title>Chinmay Patil | Backend &amp; DevOps Engineer</title>
      <meta name="description" content="Backend &amp; DevOps focused B.Tech IT Graduate from Walchand College of Engineering specializing in designing APIs, homelabs, Linux administration, and containers." />
      
      {/* Flawless Faded Ledger Grid Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.22] dark:opacity-[0.12] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      <div className="w-full relative z-10">
        <div id="home">
          <ResumeHeader onSkillsClick={handleSkillsNav} />
        </div>
        <main className="p-4 lg:p-6 max-w-4xl mx-auto relative z-10 mt-8">
          <div className="space-y-8">

            {/* About & Optional Skills Layout Section */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div 
                id="about"
                className={showSkills ? "w-full lg:flex-1 scroll-mt-24" : "w-full scroll-mt-24"}
              >
                <About showSkills={showSkills} onToggleSkills={() => setShowSkills(!showSkills)} />
              </div>
              {showSkills && (
                <div
                  id="skills"
                  className="w-full lg:flex-1 scroll-mt-24"
                >
                  <SkillsSection />
                </div>
              )}
            </div>

            <section id="experience" className="scroll-mt-24">
              <Experience />
            </section>

            <section id="projects" className="scroll-mt-24 space-y-8">
              <Projects />
            </section>

            <section id="education" className="scroll-mt-24">
              <Education />
            </section>

          </div>
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
