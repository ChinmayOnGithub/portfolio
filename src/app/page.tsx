"use client";

import React, { useEffect } from 'react';
import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { ResumeHeader } from '@/components/resume/Header';
import { About } from '@/components/resume/About';
import { Featured } from '@/components/resume/Featured';
import { SkillsSection } from '@/components/resume/Skills';
import { Experience } from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import { Projects } from '@/components/resume/Projects';
import { TechnicalPapersSidebar } from '@/components/resume/Sidebar';


function ResumePageContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';


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
      <div className="w-full">
        <div id="home">
          <ResumeHeader />
        </div>
        <main className="p-4 lg:p-6 max-w-7xl mx-auto relative z-10 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Main Content Ledger */}
            <div className="lg:col-span-8 space-y-12">
              <section id="about" className="scroll-mt-24">
                <About />
              </section>
              <section id="projects" className="scroll-mt-24 space-y-12">
                <Featured />
                <Projects />
              </section>
              <section id="skills" className="scroll-mt-24">
                <SkillsSection />
              </section>
              <section id="experience" className="scroll-mt-24">
                <Experience />
              </section>
              <section id="education" className="scroll-mt-24">
                <Education />
              </section>
            </div>

            {/* Archival Case Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <TechnicalPapersSidebar />
            </div>

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
