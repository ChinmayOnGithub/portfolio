'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ArrowLeft, Sun, Moon, Github } from 'lucide-react';
import { useReaderSettings, getReaderColors } from './ReaderSettingsContext';

export default function ProjectNavigation() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { textSize, bookTheme, setTextSize, setBookTheme } = useReaderSettings();

  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  if (!mounted) return null;

  const navColors = getReaderColors(bookTheme, isDark);

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
              className="absolute right-0 top-10 z-50 p-5 border rounded-sm shadow-2xl w-60 font-serif text-xs vintage-card"
              style={{ 
                position: 'absolute',
                backgroundColor: 'var(--card-bg, ' + navColors.bg + ')',
                borderColor: 'var(--border-color, ' + navColors.border + ')',
                color: 'var(--text-color, ' + navColors.text + ')',
                boxShadow: '3px 3px 0px var(--border-color, ' + navColors.border + ')'
              }}
            >
              <div className="vintage-card-inner-border" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b" style={{ borderColor: 'var(--border-color, ' + navColors.border + ')' }}>
                  <span className="font-bold uppercase tracking-wider text-[10px]" style={{ color: 'var(--meta-color)' }}>Reader Options</span>
                  <button onClick={() => setShowSettings(false)} className="text-[10px] uppercase font-bold opacity-60 hover:opacity-100">Close</button>
                </div>
                <div>
                  <span className="block font-bold mb-2 uppercase tracking-wider text-[10px]" style={{ color: 'var(--meta-color)' }}>Text Size</span>
                  <div className="flex gap-2">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setTextSize(size)}
                        className={`py-1 border rounded-sm flex-1 capitalize transition-colors text-[11px] font-bold ${
                          textSize === size ? 'opacity-100' : 'opacity-60 hover:opacity-85'
                        }`}
                        style={{
                          borderColor: textSize === size ? 'var(--accent-color, ' + navColors.accent + ')' : 'var(--border-color, ' + navColors.border + ')',
                          backgroundColor: textSize === size ? 'var(--accent-color, ' + navColors.accent + ')' : 'transparent',
                          color: textSize === size ? 'var(--bg-color, ' + navColors.bg + ')' : 'var(--text-color, ' + navColors.text + ')'
                        }}
                      >
                        {size === 'medium' ? 'Reg' : size === 'small' ? 'A-' : 'A+'}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="block font-bold mb-2 uppercase tracking-wider text-[10px]" style={{ color: 'var(--meta-color)' }}>Page Tone</span>
                  <div className="flex flex-col gap-1.5">
                    {(['paper', 'newspaper', 'sepia'] as const).map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setBookTheme(tone)}
                        className={`px-3 py-1.5 border rounded-sm text-left capitalize transition-colors flex justify-between items-center text-[11px] font-bold ${
                          bookTheme === tone ? 'opacity-100' : 'opacity-60 hover:opacity-85'
                        }`}
                        style={{
                          borderColor: bookTheme === tone ? 'var(--accent-color, ' + navColors.accent + ')' : 'var(--border-color, ' + navColors.border + ')',
                          backgroundColor: bookTheme === tone ? 'var(--accent-color, ' + navColors.accent + ')' : 'transparent',
                          color: bookTheme === tone ? 'var(--bg-color, ' + navColors.bg + ')' : 'var(--text-color, ' + navColors.text + ')'
                        }}
                      >
                        <span>{tone}</span>
                        <span 
                          className="w-3 h-3 rounded-full border" 
                          style={{ 
                            backgroundColor: tone === 'paper' 
                              ? (isDark ? '#1E1C19' : '#F8F5EE') 
                              : tone === 'newspaper' 
                                ? (isDark ? '#121212' : '#F4F4F4') 
                                : (isDark ? '#251D14' : '#F4ECD8'),
                            borderColor: bookTheme === tone ? 'var(--bg-color, ' + navColors.bg + ')' : 'var(--border-color, ' + navColors.border + ')'
                          }}
                        />
                      </button>
                    ))}
                  </div>
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