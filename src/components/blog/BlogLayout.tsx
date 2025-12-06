"use client";

import { ReactNode } from 'react';
import { useResumeThemeSafe } from '../resume/ThemeProvider';
import { Button } from '../ui/button';
import { Home, User, Briefcase, BookOpen, Code, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

interface BlogLayoutProps {
  children: ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const navLinks = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/portfolio', icon: User, label: 'Portfolio' },
    { href: '/blogs', icon: BookOpen, label: 'Blog' },
    { href: '/projects', icon: Code, label: 'Projects' },
  ];

  const socialLinks = [
    { href: 'https://github.com/ChinmayOnGithub', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/chinmaydpatil', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:chinmaydpatil09@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      {/* Top Header */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-lg ${
        isDark ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blogs">
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Technical Blog
              </h1>
            </Link>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                onClick={toggleTheme} 
                variant="outline"
                className={`${isDark ? 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-64 shrink-0`}>
            <div className={`sticky top-24 space-y-6`}>
              {/* Navigation */}
              <div className={`rounded-lg border p-4 ${
                isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${
                          isDark 
                            ? 'text-zinc-300 hover:text-white hover:bg-zinc-800' 
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* About */}
              <div className={`rounded-lg border p-4 ${
                isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                  About
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                  Backend & DevOps Engineer sharing insights on system design, cloud infrastructure, and building scalable applications.
                </p>
                <div className="flex gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${
                        isDark 
                          ? 'border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white' 
                          : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Topics */}
              <div className={`rounded-lg border p-4 ${
                isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Backend', 'DevOps', 'Docker', 'AWS', 'Node.js', 'Blockchain'].map((topic) => (
                    <span
                      key={topic}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark 
                          ? 'bg-zinc-800 text-zinc-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
