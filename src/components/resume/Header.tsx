"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, Mail, Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import coverImg from './images/cover.png';
import profileImg from './images/profile.png';

export function ResumeHeader() {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
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
    
    // Smooth scroll with offset for sticky elements
    const targetId = href.replace('#', '');
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
      <div className="relative h-40 lg:h-56 overflow-hidden print:hidden">
        <Image 
          src={coverImg}
          alt="Professional cover background showcasing development environment"
          fill
          className="object-cover opacity-90 contrast-125"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          placeholder="blur"
        />
      </div>

      <div className="relative px-4 lg:px-6 pb-6 bg-[var(--card-bg)]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="shrink-0 -mt-20 lg:-mt-28 print:hidden">
            <div className="w-32 h-32 lg:w-52 lg:h-52 rounded-full border-4 overflow-hidden flex items-center justify-center border-[var(--card-bg)] bg-[var(--card-bg)] shadow-lg relative z-10">
              <Image 
                src={profileImg} 
                alt="Chinmay Patil Profile Photo" 
                width={208} 
                height={208} 
                className="w-full h-full object-cover filter contrast-[1.05]" 
                priority
              />
            </div>
          </div>

          <div className="flex-1 pt-4 lg:pt-8 print:pt-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-3xl lg:text-4xl font-bold font-cormorant tracking-tight text-[var(--text-color)]">Chinmay Patil</h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 vintage-badge text-sm">
                      Software Engineer | Backend Engineer
                    </span>
                  </div>
                </div>
                <p className="text-base lg:text-lg mb-3 font-serif italic text-[var(--meta-color)]">Intern @Qualys | C++ | Linux | WCE ’26</p>
                <div className="flex flex-col gap-2 text-sm lg:text-base mb-4 font-serif text-[var(--meta-color)] print:hidden">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    Karad, Maharashtra, India
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    chinmaydpatil09@gmail.com
                  </span>
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
                </div>
              </div>

              <div className="flex gap-2.5 shrink-0 items-center">
                {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
                <Button
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="vintage-btn h-8 w-8 p-0 lg:hidden"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4 text-[var(--accent-color)]" />
                  ) : (
                    <Menu className="w-4 h-4 text-[var(--accent-color)]" />
                  )}
                </Button>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden lg:flex gap-2.5">
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
                </div>
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
