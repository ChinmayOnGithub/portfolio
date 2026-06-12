"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useResumeThemeSafe } from './ThemeProvider';

export function About({
  showSkills,
  onToggleSkills,
}: {
  showSkills: boolean;
  onToggleSkills: () => void;
}) {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <div className="relative w-full">
      {/* Stacked sheets behind the card when folded */}
      {!showSkills && (
        <>
          {/* Sheet 1 */}
          <div 
            className="absolute inset-0 border border-[var(--border-color)] pointer-events-none rounded-sm"
            style={{
              backgroundColor: 'var(--card-bg)',
              transform: 'translate(2px, 2px)',
              zIndex: 1,
              clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)'
            }}
          />
          {/* Sheet 2 */}
          <div 
            className="absolute inset-0 border border-[var(--border-color)] pointer-events-none rounded-sm"
            style={{
              backgroundColor: 'var(--card-bg)',
              transform: 'translate(4px, 4px)',
              zIndex: 0,
              clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)'
            }}
          />
        </>
      )}

      <Card 
        className="vintage-card relative overflow-hidden"
        style={{
          clipPath: showSkills ? 'none' : 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)',
          zIndex: 10,
          boxShadow: showSkills ? undefined : 'none'
        }}
      >
        <div className="vintage-card-inner-border" />
        <div className="vintage-corner-flourish vintage-flourish-tl" />
        {showSkills && <div className="vintage-corner-flourish vintage-flourish-tr" />}
        <div className="vintage-corner-flourish vintage-flourish-bl" />
        <div className="vintage-corner-flourish vintage-flourish-br" />

        {/* Dog-ear Page Fold Overlay */}
        {!showSkills && (
          <button 
            onClick={onToggleSkills}
            className="absolute top-0 right-0 w-12 h-12 group z-30 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-color)]"
            title="Peel corner to view skills index"
            aria-label="Peel corner to view skills index"
            aria-expanded={showSkills}
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              className="absolute top-0 right-0 transition-all duration-300 ease-in-out group-hover:scale-105 origin-top-right"
              style={{ filter: 'drop-shadow(-2px 2px 2.5px rgba(0,0,0,0.18))' }}
            >
              {/* Cut-off space filled with page background */}
              <polygon points="0,0 48,0 48,48" fill="var(--bg-color)" />
              {/* Folded paper flap */}
              <polygon points="0,0 0,48 48,48" fill="var(--badge-bg)" stroke="var(--border-color)" strokeWidth="1" />
              {/* Crease line */}
              <line x1="0" y1="0" x2="48" y2="48" stroke="var(--border-color)" strokeWidth="1.5" />
            </svg>
            {/* Animated indicator inside */}
            <span className="absolute top-1 right-2 text-[9px] font-bold text-[var(--accent-color)] group-hover:translate-x-[-1px] group-hover:translate-y-[1px] transition-all duration-200 z-40">
              ▶
            </span>
          </button>
        )}

        <CardHeader className="pb-2 relative z-10">
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl lg:text-3xl font-bold font-cormorant text-[var(--text-color)]">About Me</CardTitle>
            <div className="flex items-center gap-3">
              {showSkills ? (
                <>
                  <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1">
                    [ REGISTRY REF: CP-1926 ]
                  </span>
                  <button 
                    onClick={onToggleSkills}
                    className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[var(--accent-color)] hover:opacity-80 transition-all font-sans focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-color)] mt-1"
                    title="Fold skills page back"
                    aria-label="Fold skills page back"
                    aria-expanded={showSkills}
                  >
                    <span>◀ Fold index</span>
                  </button>
                </>
              ) : (
                <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1 mr-12">
                  [ REGISTRY REF: CP-1926 ]
                </span>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 pb-4 relative z-10 pr-12">
          <p className="text-base lg:text-lg leading-relaxed font-times text-[var(--text-color)]/90 max-w-2xl">
            Backend and DevOps focused B.Tech IT Graduate from Walchand College of Engineering (Class of 2026). I like designing reliable APIs, working with Linux and containers, and building small tools or homelab setups that make development smoother. Strong problem‑solving background with 800+ problems solved across LeetCode, CodeForces, and CodeChef.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
