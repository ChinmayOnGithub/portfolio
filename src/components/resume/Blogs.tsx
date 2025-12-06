"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, BookOpen } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import Link from 'next/link';

export function BlogsSection() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className={isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Blogs & Writing</CardTitle>
      </CardHeader>
      <CardContent>
        <Link 
          href="/blogs"
          className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
            isDark 
              ? 'border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700' 
              : 'border-slate-300 hover:bg-slate-200 hover:border-slate-400'
          }`}
        >
          <div className={`w-12 h-12 rounded-lg border flex items-center justify-center flex-shrink-0 ${
            isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-200 border-slate-300'
          }`}>
            <BookOpen className={`w-6 h-6 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold text-lg flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technical Blog
              <ExternalLink className="w-4 h-4" />
            </h3>
            <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              Articles about backend development, Linux, DevOps, and system design
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
