"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, Mail, Moon, Sun, Download, Menu, X, Rss } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import profileImg from './images/profile.png';

interface ResumeHeaderProps {
  onSkillsClick?: () => void;
}

export function ResumeHeader({ onSkillsClick }: ResumeHeaderProps = {}) {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLocation, setCopiedLocation] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'location') => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedLocation(true);
        setTimeout(() => setCopiedLocation(false), 2000);
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'education', label: 'Education', href: '#education' }
  ];

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    if (targetId === 'skills' && onSkillsClick) {
      onSkillsClick();
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Card className="rounded-none border-t-0 border-x-0 border-b p-0 gap-0 bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--text-color)] shadow-none">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
          <div className="shrink-0 print:hidden">
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-sm border-2 border-[var(--border-color)] bg-[var(--card-bg)] p-2 shadow-md relative z-10">
              {/* Vintage Archival Tape Overlay */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#C5B4A3]/40 dark:bg-[#4a423a]/50 backdrop-blur-[0.5px] border border-[#A8988A]/35 rotate-[-1.5deg] shadow-sm z-20 pointer-events-none" />
              <div className="absolute inset-2 border pointer-events-none opacity-25" style={{ borderColor: 'var(--border-color)' }} />
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src={profileImg} 
                  alt="Chinmay Patil Profile Photo" 
                  fill
                  className="object-cover filter sepia-[0.35] contrast-[1.05] saturate-[0.8] brightness-[0.98]" 
                  priority
                  sizes="(max-width: 768px) 128px, 192px"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 print:pt-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold font-cormorant tracking-tight text-[var(--text-color)] mb-1">Chinmay Patil</h1>
                <p className="text-base lg:text-lg mb-3 font-serif italic text-[var(--meta-color)]">Intern @Qualys | C++ | Linux | WCE ’26</p>
                <div className="flex flex-col gap-2 text-sm lg:text-base mb-4 font-serif text-[var(--meta-color)] print:hidden">
                  <button
                    onClick={() => copyToClipboard('Karad, Maharashtra, India', 'location')}
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 hover:text-[var(--accent-color)] transition-colors duration-150 text-left focus:outline-none group w-fit"
                    title="Click to copy location"
                  >
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    <span className="border-b border-dotted border-transparent group-hover:border-[var(--accent-color)]">
                      Karad, Maharashtra, India
                    </span>
                    {copiedLocation && (
                      <span className="ml-2 font-mono text-xs text-red-700/90 dark:text-red-400/90 font-bold tracking-wider animate-pulse">
                        [ COPIED! ]
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => copyToClipboard('chinmaydpatil09@gmail.com', 'email')}
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 hover:text-[var(--accent-color)] transition-colors duration-150 text-left focus:outline-none group w-fit"
                    title="Click to copy email"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    <span className="border-b border-dotted border-transparent group-hover:border-[var(--accent-color)]">
                      chinmaydpatil09@gmail.com
                    </span>
                    {copiedEmail && (
                      <span className="ml-2 font-mono text-xs text-red-700/90 dark:text-red-400/90 font-bold tracking-wider animate-pulse">
                        [ COPIED! ]
                      </span>
                    )}
                  </button>
                </div>

                {/* Print-only contact info */}
                <div className="hidden print:grid grid-cols-2 gap-x-6 gap-y-1 text-sm font-serif text-black border-t border-b border-zinc-300/60 py-2 my-3">
                  <div><strong>Email:</strong> chinmaydpatil09@gmail.com</div>
                  <div><strong>LinkedIn:</strong> linkedin.com/in/chinmaydpatil</div>
                  <div><strong>GitHub:</strong> github.com/ChinmayOnGithub</div>
                  <div className="col-span-2"><strong>Location:</strong> Karad, Maharashtra, India</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-serif print:hidden">
                  <a
                    href="/resume.pdf"
                    download="ChinmayPatil_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="vintage-btn vintage-btn-primary h-8 px-4 inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>

                  {/* Desktop Navigation - Hidden on mobile, grouped inline with download button */}
                  <div className="hidden lg:flex gap-2">
                    <Button
                      size="sm"
                      onClick={toggleTheme}
                      className="vintage-btn h-8 w-8 p-0"
                      aria-label="Toggle theme"
                    >
                      {isDark ? <Sun className="w-4 h-4 text-[var(--accent-color)]" /> : <Moon className="w-4 h-4 text-[var(--accent-color)]" />}
                    </Button>
                    <Button
                      size="sm"
                      className="vintage-btn h-8 w-8 p-0"
                      asChild
                    >
                      <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <Linkedin className="w-4 h-4 text-[var(--accent-color)]" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="vintage-btn h-8 w-8 p-0"
                      asChild
                    >
                      <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <Github className="w-4 h-4 text-[var(--accent-color)]" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="vintage-btn h-8 w-8 p-0"
                      asChild
                    >
                      <a href="/feed.xml" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed">
                        <Rss className="w-4 h-4 text-[var(--accent-color)]" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2.5 shrink-0 items-center lg:hidden">
                {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
                <Button
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="vintage-btn h-8 w-8 p-0"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4 text-[var(--accent-color)]" />
                  ) : (
                    <Menu className="w-4 h-4 text-[var(--accent-color)]" />
                  )}
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Navigation Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transition-transform duration-300 ease-in-out">
            <div 
              className="h-full border-l shadow-2xl vintage-card flex flex-col"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b shrink-0" style={{ borderColor: 'var(--border-color)' }}>
                <h2 className="font-bold font-cormorant text-lg text-[var(--text-color)]">Navigation</h2>
                <Button
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="vintage-btn h-8 w-8 p-0"
                  aria-label="Close navigation menu"
                >
                  <X className="w-4 h-4 text-[var(--accent-color)]" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 flex-1 overflow-y-auto" role="navigation" aria-label="Main navigation">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left py-3 px-4 rounded-sm border border-[var(--border-color)] bg-[var(--badge-bg)] hover:bg-[var(--accent-color)]/10 transition-all duration-200 font-serif text-[var(--text-color)] hover:text-[var(--accent-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2"
                        style={{
                          boxShadow: '1px 1px 0px var(--border-color)'
                        }}
                      >
                        <span className="font-cormorant font-bold tracking-wide uppercase text-sm">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Actions */}
              <div className="p-6 border-t shrink-0 bg-[var(--card-bg)]" style={{ borderColor: 'var(--border-color)' }}>
                <div className="space-y-3">
                  {/* Theme Toggle */}
                  <Button
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full vintage-btn h-10 flex items-center justify-center gap-2"
                  >
                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span className="font-cormorant font-bold text-sm">
                      {isDark ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </Button>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="vintage-btn flex-1 h-10 p-0"
                      asChild
                    >
                      <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="vintage-btn flex-1 h-10 p-0"
                      asChild
                    >
                      <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="vintage-btn flex-1 h-10 p-0"
                      asChild
                    >
                      <a href="/feed.xml" target="_blank" rel="noopener noreferrer" aria-label="RSS Feed">
                        <Rss className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
