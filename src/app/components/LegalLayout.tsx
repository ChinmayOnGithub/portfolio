'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [copiedFooterEmail, setCopiedFooterEmail] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyFooterEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText('chinmaydpatil09@gmail.com').then(() => {
      setCopiedFooterEmail(true);
      setTimeout(() => setCopiedFooterEmail(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const colors = resolvedTheme === 'dark' ? {
    bg: '#1E1C19',
    text: '#E8E2D8',
    border: '#443E38',
    accent: '#D0A060',
    meta: '#A68B6D',
    cardBg: '#23201D',
  } : {
    bg: '#FAF6EE',
    text: '#2B2620',
    border: '#D3C2B0',
    accent: '#8C6239',
    meta: '#8B6F47',
    cardBg: '#F4EFE6',
  };

  const cssVariables = {
    '--bg-color': colors.bg,
    '--text-color': colors.text,
    '--border-color': colors.border,
    '--accent-color': colors.accent,
    '--meta-color': colors.meta,
    '--card-bg': colors.cardBg,
  } as React.CSSProperties;

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="min-h-screen relative pb-20 font-sans"
      style={{
        ...cssVariables,
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}
    >
      {/* Ledger Grid Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.22] dark:opacity-[0.12] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      <div className="w-full relative z-10 max-w-3xl mx-auto px-4 pt-12">
        {/* Navigation Link back */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-serif font-bold uppercase tracking-wider text-xs hover:text-[var(--accent-color)] border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-1.5 rounded-sm shadow-sm"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Vintage Card */}
        <article className="vintage-card bg-[var(--card-bg)] p-6 lg:p-10 font-serif">
          <div className="vintage-card-inner-border" />
          <div className="vintage-corner-flourish vintage-flourish-tl" />
          <div className="vintage-corner-flourish vintage-flourish-tr" />
          <div className="vintage-corner-flourish vintage-flourish-bl" />
          <div className="vintage-corner-flourish vintage-flourish-br" />

          <header className="relative z-10 mb-8 border-b border-[var(--border-color)] pb-6">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold font-cormorant text-[var(--text-color)] leading-tight">
                  {title}
                </h1>
                <p className="text-sm font-mono text-[var(--meta-color)] mt-1.5 uppercase tracking-wide">
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <span className="font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-2">
                [ REG: ARCHIVAL_LEGAL ]
              </span>
            </div>
          </header>

          <section className="relative z-10 space-y-6 text-base lg:text-[17px] leading-relaxed text-[var(--text-color)]/95">
            {children}
          </section>
        </article>

        {/* Extended Vintage Footer (Outside Card) */}
        <footer className="mt-12 pb-12 border-t border-[var(--border-color)] border-dashed text-center font-mono text-xs text-[var(--meta-color)]/80 relative z-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-3 font-serif text-xs pt-6">
            <Link href="/privacy" className="hover:text-[var(--accent-color)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--accent-color)] transition-colors">Terms</Link>
            <Link href="/cookie" className="hover:text-[var(--accent-color)] transition-colors">Cookie Policy</Link>
            <button
              onClick={handleCopyFooterEmail}
              className="hover:text-[var(--accent-color)] transition-colors cursor-pointer focus:outline-none"
            >
              {copiedFooterEmail ? '[ Email Copied! ]' : 'Contact'}
            </button>
            <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">LinkedIn</a>
            <a href="https://tools.chinmaypatil.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors font-bold text-[var(--accent-color)]">Browser Tools</a>
          </div>
          <p className="opacity-60 text-[10px]">© 2026 Chinmay Patil. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
