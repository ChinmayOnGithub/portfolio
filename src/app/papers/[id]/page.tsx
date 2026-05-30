'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { getPaperById, papers } from '../../constants';

interface PaperPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PaperPage({ params }: PaperPageProps) {
  const { resolvedTheme } = useTheme();
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  // Reader sizing & theme settings (synced from localStorage or options)
  const [textSize, setTextSize] = React.useState<'small' | 'medium' | 'large'>('medium');
  const [bookTheme, setBookTheme] = React.useState<'paper' | 'newspaper' | 'sepia'>('paper');

  const [activeSection, setActiveSection] = React.useState('overview');
  const [showMobileToc, setShowMobileToc] = React.useState(false);

  // Mount check
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Resolve params
  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  // Scroll Progress
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync settings
  React.useEffect(() => {
    const loadSettings = () => {
      const storedTheme = localStorage.getItem('reader-book-theme');
      const storedSize = localStorage.getItem('reader-text-size');
      if (storedTheme) setBookTheme(storedTheme as any);
      if (storedSize) setTextSize(storedSize as any);
    };

    loadSettings();
    window.addEventListener('reader-settings-update', loadSettings);
    window.addEventListener('storage', loadSettings);
    return () => {
      window.removeEventListener('reader-settings-update', loadSettings);
      window.removeEventListener('storage', loadSettings);
    };
  }, []);

  // Resolve Paper
  const paper = React.useMemo(() => {
    return resolvedParams ? getPaperById(resolvedParams.id) : undefined;
  }, [resolvedParams]);

  const otherPapers = React.useMemo(() => {
    return paper ? papers.filter(p => p.id !== paper.id) : [];
  }, [paper]);

  // Construct TOC
  const tocItems = React.useMemo(() => {
    if (!paper) return [];
    return [
      { id: 'overview', title: 'Abstract Overview' },
      ...paper.sections.map((sec, idx) => ({ id: `section-${idx}`, title: sec.title })),
      { id: 'references', title: 'References & Citations' }
    ];
  }, [paper]);

  // TOC active observer
  React.useEffect(() => {
    if (!resolvedParams || !paper || tocItems.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -50% 0px', threshold: 0.1 }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [resolvedParams, paper, tocItems]);

  // Visual Theme Config
  const getThemeColors = () => {
    const isDark = resolvedTheme === 'dark';
    
    if (isDark) {
      switch (bookTheme) {
        case 'newspaper':
          return {
            bg: '#1C1D1F',
            text: '#E1E3E6',
            border: '#3F4145',
            accent: '#A1A8B3',
            meta: '#888D96',
            cardBg: '#25272A',
          };
        case 'sepia':
          return {
            bg: '#1A1512',
            text: '#EEDDC5',
            border: '#4D3B2E',
            accent: '#D99B59',
            meta: '#A8805F',
            cardBg: '#241D19',
          };
        case 'paper':
        default:
          return {
            bg: '#1E1C19',
            text: '#E8E2D8',
            border: '#443E38',
            accent: '#D0A060',
            meta: '#A68B6D',
            cardBg: '#23201D',
          };
      }
    } else {
      switch (bookTheme) {
        case 'newspaper':
          return {
            bg: '#EAE6DF',
            text: '#1F1F1F',
            border: '#B8B3A8',
            accent: '#3F3F3F',
            meta: '#555555',
            cardBg: 'rgba(215, 210, 200, 0.4)',
          };
        case 'sepia':
          return {
            bg: '#F4ECD8',
            text: '#332211',
            border: '#D2C4A5',
            accent: '#5A3D28',
            meta: '#805A3C',
            cardBg: 'rgba(235, 215, 180, 0.3)',
          };
        case 'paper':
        default:
          return {
            bg: '#F8F5EE',
            text: '#2A2A2A',
            border: '#DDD5C5',
            accent: '#8C6239',
            meta: '#8B6F47',
            cardBg: 'rgba(241, 238, 230, 0.35)',
          };
      }
    }
  };

  const colors = getThemeColors();

  // Font sizes
  const getTextSizeClass = () => {
    switch (textSize) {
      case 'small':
        return 'text-[16px] sm:text-[17px] leading-[1.7]';
      case 'large':
        return 'text-[20px] sm:text-[23px] leading-[1.8]';
      case 'medium':
      default:
        return 'text-[18px] sm:text-[20px] leading-[1.75]';
    }
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  if (!resolvedParams || !paper) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1E1C19] text-[#E8E2D8]">
        <div className="animate-pulse font-serif italic text-lg">Retrieving manuscript...</div>
      </div>
    );
  }

  const cssVariables = {
    '--bg-color': colors.bg,
    '--text-color': colors.text,
    '--border-color': colors.border,
    '--accent-color': colors.accent,
    '--meta-color': colors.meta,
    '--card-bg': colors.cardBg,
  } as React.CSSProperties;

  return (
    <div
      className="min-h-screen transition-colors duration-300 relative pb-28"
      style={{
        ...cssVariables,
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)'
      }}
    >
      <title>{`${paper.title} | Chinmay Patil Papers`}</title>
      <meta name="description" content={paper.summary} />

      {/* Dynamic Scroll Reading Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--accent-color)'
        }}
      />

      {/* Sticky Left TOC Sidebar */}
      <aside className="fixed top-36 left-[calc(50%-540px)] w-[165px] hidden xl:block z-20 font-serif text-[13px] select-none">
        <p className="font-bold uppercase tracking-widest mb-4 opacity-50 text-[12px]" style={{ color: 'var(--meta-color)' }}>
          Tome Index
        </p>
        <ul className="space-y-3.5 relative border-l" style={{ borderColor: 'var(--border-color)' }}>
          {tocItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative pl-3 text-[13px]">
                {isActive && (
                  <div
                    className="absolute -left-[1.5px] top-1.5 w-[2px] h-3.5 transition-all duration-200"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`hover:opacity-100 transition-opacity block truncate ${isActive ? 'font-bold opacity-100' : 'opacity-65'}`}
                  style={{ color: isActive ? 'var(--accent-color)' : 'var(--text-color)' }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Column */}
      <div className="max-w-[720px] mx-auto px-6 pt-32">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase font-bold tracking-widest font-serif px-2.5 py-1 rounded-sm" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent-color)', border: '1px solid var(--border-color)' }}>
              {paper.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3.5xl lg:text-[40px] font-bold tracking-tight mb-5 leading-[1.2] font-serif">
            {paper.title}
          </h1>

          <p className="text-base sm:text-lg italic opacity-85 mb-8 leading-relaxed font-serif">
            {paper.summary}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-between items-center py-3.5 border-y text-xs font-serif"
            style={{ borderColor: 'var(--border-color)', color: 'var(--meta-color)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: 'var(--text-color)' }}>Chinmay Patil</span>
              <span className="opacity-50">/</span>
              <span>Backend &amp; DevOps</span>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center gap-2">
              <span>Published {paper.date}</span>
              <span className="opacity-40">•</span>
              <span>{paper.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Collapsible Mobile TOC */}
        <div
          className="xl:hidden border rounded-sm p-4 text-sm sm:text-base mb-8 font-serif"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
        >
          <button
            onClick={() => setShowMobileToc(!showMobileToc)}
            aria-expanded={showMobileToc}
            className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-[11px]"
            style={{ color: 'var(--meta-color)' }}
          >
            <span>Table of Contents</span>
            <span className="text-sm leading-none">{showMobileToc ? '−' : '+'}</span>
          </button>
          {showMobileToc && (
            <ul className="mt-3.5 space-y-2.5 pl-3 border-l" style={{ borderColor: 'var(--border-color)' }}>
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        handleTocClick(e, item.id);
                        setShowMobileToc(false);
                      }}
                      className={`hover:opacity-100 transition-opacity block truncate ${isActive ? 'font-bold opacity-100' : 'opacity-70'}`}
                      style={{ color: isActive ? 'var(--accent-color)' : 'var(--text-color)' }}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Paper Content */}
        <main className={`space-y-12 ${getTextSizeClass()}`}>
          <section id="overview" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Abstract Overview
            </h2>
            <p className="indent-8 font-serif text-justify">
              {paper.content}
            </p>
          </section>

          {paper.sections.map((sec, idx) => (
            <section id={`section-${idx}`} key={idx} className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
                {sec.title}
              </h2>
              <p className="indent-8 font-serif text-justify">
                {sec.content}
              </p>
            </section>
          ))}

          {/* Footnotes & References */}
          <section id="references" className="scroll-mt-24 space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              References &amp; Citations
            </h2>
            <ol className="list-decimal pl-6 space-y-2.5 text-sm sm:text-base font-serif">
              {paper.references.map((ref, index) => (
                <li key={index} className="pl-1">
                  <span>{ref}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Read Other Papers */}
          <section
            className="pt-12 border-t space-y-6 font-serif"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
              <h3 className="text-sm font-bold">
                More Technical tomefolios
              </h3>
              <Link
                href="/"
                className="underline underline-offset-4 font-bold"
                style={{ color: 'var(--accent-color)' }}
              >
                Back to Index
              </Link>
            </div>

            <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
              {otherPapers.map((p) => (
                <Link
                  key={p.id}
                  href={`/papers/${p.id}`}
                  className="group py-4 block transition-all flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 hover:opacity-80"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[9px]" style={{ color: 'var(--accent-color)' }}>
                      {p.category}
                    </span>
                    <h4 className="text-base font-bold underline decoration-1 underline-offset-4">
                      {p.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs opacity-75">
                    <span className="line-clamp-1 max-w-[320px] italic">{p.summary}</span>
                    <span style={{ color: 'var(--meta-color)' }}>{p.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
