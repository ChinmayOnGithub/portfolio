"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useResumeThemeSafe } from './ThemeProvider';

export function About() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className={`${isDark ? 'bg-[#0F0F13]/80 backdrop-blur-md border-zinc-800/50 shadow-lg shadow-black/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`text-lg font-semibold ${isDark ? 'text-[#E6E6E6]' : 'text-slate-900'}`}>About Me</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-700'}`}>
          Backend and DevOps focused B.Tech IT student at Walchand College of Engineering. I like designing reliable APIs, working with Linux and containers, and building small tools or homelab setups that make development smoother. Strong problem‑solving background with 800+ problems solved across LeetCode, CodeForces, and CodeChef.
        </p>
      </CardContent>
    </Card>
  );
}
