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
import { BookStack, ArchivalProofs } from '@/components/resume/Sidebar';

const playTypewriterSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // 1. Mechanical clack (white noise burst)
    const bufferSize = audioCtx.sampleRate * 0.025; // 25ms burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1100;
    filter.Q.value = 4;
    
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.04, audioCtx.currentTime); // Subtle keytap sound
    noiseGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
    
    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    
    // 2. Resonant bottom out (low striker pitch)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, audioCtx.currentTime + 0.03);
    
    oscGain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
    
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    
    noise.start();
    osc.start();
    
    noise.stop(audioCtx.currentTime + 0.03);
    osc.stop(audioCtx.currentTime + 0.03);
  } catch (e) {
    // Blocked or unsupported
  }
};

function ResumePageContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  // Global mechanical typewriter click sound
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers typewriter sound on cards, buttons, badges, links, or clickable tags
      if (target.closest('.vintage-btn, .vintage-badge, .vintage-card, a, button')) {
        playTypewriterSound();
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

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
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 h-fit">
              <BookStack />
              <ArchivalProofs />
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
