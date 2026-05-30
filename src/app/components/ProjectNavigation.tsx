'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowLeft, Sun, Moon, Github } from 'lucide-react';

export default function ProjectNavigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Reader Options States
  const [textSize, setTextSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [bookTheme, setBookTheme] = useState<'paper' | 'newspaper' | 'sepia'>('paper');

  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Initialize state from localStorage
    const t = localStorage.getItem('reader-book-theme') || 'paper';
    const s = localStorage.getItem('reader-text-size') || 'medium';
    setBookTheme(t as any);
    setTextSize(s as any);
  }, []);

  // Handle outside clicks and Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const updateSetting = (key: 'reader-book-theme' | 'reader-text-size', value: string) => {
    localStorage.setItem(key, value);
    if (key === 'reader-book-theme') setBookTheme(value as any);
    if (key === 'reader-text-size') setTextSize(value as any);
    // Dispatch event to sync page
    window.dispatchEvent(new Event('reader-settings-update'));
  };

  // Theme styling tokens matching the page
  const getNavColors = () => {
    if (isDark) {
      switch (bookTheme) {
        case 'newspaper':
          return { bg: '#121212', border: '#333333', text: '#E0E0E0', accent: '#66A3FF', cardBg: 'rgba(50,50,50,0.15)' };
        case 'sepia':
          return { bg: '#251D14', border: '#4D3B26', text: '#E5D6B6', accent: '#D0A060', cardBg: 'rgba(60,40,20,0.15)' };
        case 'paper':
        default:
          return { bg: '#1E1C19', border: '#443E38', text: '#E8E2D8', accent: '#7EA6D8', cardBg: 'rgba(41,38,34,0.15)' };
      }
    } else {
      switch (bookTheme) {
        case 'newspaper':
          return { bg: '#F4F4F4', border: '#CCCCCC', text: '#111111', accent: '#1A3052', cardBg: 'rgba(220,220,220,0.3)' };
        case 'sepia':
          return { bg: '#F4ECD8', border: '#D2C4A5', text: '#332211', accent: '#5A3D28', cardBg: 'rgba(235,215,180,0.3)' };
        case 'paper':
        default:
          return { bg: '#F8F5EE', border: '#DDD5C5', text: '#2A2A2A', accent: '#2B4C7E', cardBg: 'rgba(241,238,230,0.35)' };
      }
    }
  };

  const navColors = getNavColors();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 font-serif" 
      style={{ 
        backgroundColor: navColors.bg,
        borderColor: navColors.border,
        color: navColors.text
      }}
    >
      <div className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors underline decoration-1 underline-offset-4"
          style={{ color: navColors.accent }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex items-center gap-4 relative">
          
          {/* Reader Settings Toggle */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-sm font-semibold underline decoration-1 underline-offset-4 transition-colors"
            style={{ color: navColors.accent }}
          >
            Aa Options
          </button>

          {showSettings && (
            <div 
              ref={settingsRef}
              className="absolute right-12 top-8 z-50 p-4 border rounded-sm shadow-lg w-52 font-serif text-[11px]"
              style={{ 
                backgroundColor: navColors.bg,
                borderColor: navColors.border,
                color: navColors.text
              }}
            >
              <div className="mb-3">
                <span className="block font-bold mb-1.5 uppercase tracking-wider opacity-75">Text Size</span>
                <div className="flex gap-1.5">
                  {(['small', 'medium', 'large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('reader-text-size', size)}
                      className={`px-1.5 py-0.5 border rounded-sm flex-1 capitalize transition-colors ${
                        textSize === size ? 'font-bold' : 'opacity-70'
                      }`}
                      style={{
                        borderColor: textSize === size ? navColors.accent : navColors.border,
                        backgroundColor: textSize === size ? navColors.cardBg : 'transparent'
                      }}
                    >
                      {size === 'medium' ? 'Reg' : size === 'small' ? 'A-' : 'A+'}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="block font-bold mb-1.5 uppercase tracking-wider opacity-75">Page Tone</span>
                <div className="flex flex-col gap-1">
                  {(['paper', 'newspaper', 'sepia'] as const).map((tone) => (
                    <button
                      key={tone}
                      onClick={() => updateSetting('reader-book-theme', tone)}
                      className={`px-2 py-0.5 border rounded-sm text-left capitalize transition-colors flex justify-between items-center ${
                        bookTheme === tone ? 'font-bold' : 'opacity-70'
                      }`}
                      style={{
                        borderColor: bookTheme === tone ? navColors.accent : navColors.border,
                        backgroundColor: bookTheme === tone ? navColors.cardBg : 'transparent'
                      }}
                    >
                      <span>{tone}</span>
                      <span 
                        className="w-3.5 h-3.5 rounded-full border" 
                        style={{ 
                          backgroundColor: tone === 'paper' 
                            ? (isDark ? '#1E1C19' : '#F8F5EE') 
                            : tone === 'newspaper' 
                              ? (isDark ? '#121212' : '#F4F4F4') 
                              : (isDark ? '#251D14' : '#F4ECD8'),
                          borderColor: navColors.border
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`p-1 rounded transition-colors ${
              isDark ? 'hover:opacity-80' : 'hover:opacity-85'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/ChinmayOnGithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}