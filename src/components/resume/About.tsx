"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useResumeThemeSafe } from './ThemeProvider';

export function About() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-lg font-bold font-cormorant text-[var(--text-color)]">About Me</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-4 relative z-10">
        <p className="text-sm leading-relaxed font-serif text-[var(--text-color)]/90">
          Backend and DevOps focused B.Tech IT Graduate from Walchand College of Engineering (Class of 2026). I like designing reliable APIs, working with Linux and containers, and building small tools or homelab setups that make development smoother. Strong problem‑solving background with 800+ problems solved across LeetCode, CodeForces, and CodeChef.
        </p>
      </CardContent>
    </Card>
  );
}
