"use client";

import { Button } from '@/components/ui/button';
import { ArrowLeft, Moon, Sun, Home } from 'lucide-react';
import Link from 'next/link';
import { useResumeThemeSafe } from './ThemeProvider';

export function BlogHeader() {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-lg transition-colors duration-200 ${
      isDark ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm"
                className={`${isDark ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <div className={`h-6 w-px ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`} />
            <Link href="/blogs">
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technical Blog
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              onClick={toggleTheme} 
              variant="outline"
              className={`${isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
