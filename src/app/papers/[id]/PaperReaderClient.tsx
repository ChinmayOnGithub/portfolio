'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { papers } from '../../constants';
import { BookOpen, X, ArrowUp } from 'lucide-react';
import { useReaderSettings, getReaderColors } from '../../components/ReaderSettingsContext';

interface PaperReaderClientProps {
  paper: typeof papers[0];
}

export default function PaperReaderClient({ paper }: PaperReaderClientProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showFloatingButton, setShowFloatingButton] = React.useState(false);
  const [showMobileTocOverlay, setShowMobileTocOverlay] = React.useState(false);

  const { textSize, bookTheme } = useReaderSettings();

  const [activeSection, setActiveSection] = React.useState('overview');
  const [showMobileToc, setShowMobileToc] = React.useState(false);

  // Mount check
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll Listener for Floating Button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherPapers = React.useMemo(() => {
    return papers.filter(p => p.id !== paper.id);
  }, [paper]);

  // Construct TOC
  const tocItems = React.useMemo(() => {
    return [
      { id: 'overview', title: 'Abstract Overview' },
      ...paper.sections.map((sec, idx) => ({ id: `section-${idx}`, title: sec.title })),
      { id: 'references', title: 'References & Citations' }
    ];
  }, [paper]);

  // TOC active observer
  React.useEffect(() => {
    if (tocItems.length === 0) return;
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
  }, [paper, tocItems]);

  const colors = getReaderColors(bookTheme, resolvedTheme === 'dark');

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

      {/* Sticky Left TOC Sidebar */}
      <aside className="fixed top-36 xl:left-[calc(50%-570px)] 2xl:left-[calc(50%-540px)] w-[165px] hidden xl:block z-20 font-serif text-sm select-none">
        <p className="font-bold uppercase tracking-widest mb-4 opacity-50 text-xs" style={{ color: 'var(--meta-color)' }}>
          Tome Index
        </p>
        <ul className="space-y-3.5 relative border-l" style={{ borderColor: 'var(--border-color)' }}>
          {tocItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative pl-3 text-sm">
                {isActive && (
                  <div
                    className="absolute -left-[1.5px] top-1.5 w-[2px] h-3.5 transition-all duration-200"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`hover:opacity-100 transition-opacity block whitespace-normal break-words ${isActive ? 'font-bold opacity-100' : 'opacity-65'}`}
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
          <h1 className="text-2xl sm:text-3.5xl lg:text-[40px] font-bold tracking-tight mb-5 leading-[1.2] font-cormorant">
            {paper.title}
          </h1>

          <p className="text-base sm:text-lg italic opacity-85 mb-8 leading-relaxed font-times">
            {paper.summary}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-between items-center py-3.5 border-y text-sm font-sans"
            style={{ borderColor: 'var(--border-color)', color: 'var(--meta-color)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: 'var(--text-color)' }}>Chinmay Patil</span>
              <span className="opacity-50">/</span>
              <span>Backend &amp; DevOps</span>
              <span className="opacity-50">/</span>
              <span className="italic font-medium" style={{ color: 'var(--accent-color)' }}>{paper.category}</span>
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
            className="flex justify-between items-center w-full font-bold uppercase tracking-widest text-xs"
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
            <h2 className="text-xl sm:text-2xl font-bold font-cormorant pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Abstract Overview
            </h2>
            <p className="indent-8 font-times text-justify">
              {paper.content}
            </p>
          </section>

          {paper.sections.map((sec, idx) => (
            <section id={`section-${idx}`} key={idx} className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-cormorant pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
                {sec.title}
              </h2>
              <p className="indent-8 font-times text-justify">
                {sec.content}
              </p>
            </section>
          ))}

          {/* Footnotes & References */}
          <section id="references" className="scroll-mt-24 space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold font-cormorant pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              References &amp; Citations
            </h2>
            <ul className="space-y-3 text-sm sm:text-base font-times">
              {paper.references.map((ref, index) => (
                <li key={index} className="pl-8 -indent-8">
                  <span className="select-none font-bold inline-block w-8" style={{ color: 'var(--meta-color)' }}>[{index + 1}]</span>
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Read Other Papers */}
          <section
            className="pt-12 border-t space-y-6 font-serif"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
              <h3 className="text-sm font-bold">
                More Technical Tomefolios
              </h3>
              <Link
                href="/"
                className="underline underline-offset-4 font-bold"
                style={{ color: 'var(--accent-color)' }}
              >
                Back to Index
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPapers.map((p) => (
                <Link
                  key={p.id}
                  href={`/papers/${p.id}`}
                  className="group relative border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md rounded-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    boxShadow: '2px 2px 0px var(--border-color)',
                  }}
                >
                  <div className="absolute top-1 left-1 right-1 bottom-1 border pointer-events-none opacity-25 rounded-[1px]" style={{ borderColor: 'var(--border-color)' }} />
                  
                  <div className="relative z-10 flex flex-col h-full justify-between gap-3 font-serif">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest block mb-1.5" style={{ color: 'var(--accent-color)' }}>
                        {p.category}
                      </span>
                      <h4 className="text-base font-bold font-cormorant group-hover:text-[var(--accent-color)] transition-colors line-clamp-2">
                        {p.title}
                      </h4>
                      <p className="text-xs italic mt-2 opacity-80 font-times line-clamp-2 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>
                    <div className="text-[10px] font-sans flex justify-between items-center opacity-65 border-t pt-2 mt-auto" style={{ borderColor: 'var(--border-color)' }}>
                      <span>{p.readTime} min read</span>
                      <span>{p.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Floating TOC Trigger Button for Mobile/Tablet */}
      {showFloatingButton && (
        <button
          onClick={() => setShowMobileTocOverlay(true)}
          className="fixed bottom-6 right-6 z-40 xl:hidden w-12 h-12 rounded-sm flex items-center justify-center shadow-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all duration-200"
          style={{ boxShadow: '2px 2px 0px var(--border-color)' }}
          aria-label="Open Table of Contents"
        >
          <BookOpen className="w-5 h-5" />
        </button>
      )}

      {/* Floating Back to Top Button */}
      {showFloatingButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 w-12 h-12 rounded-sm flex items-center justify-center shadow-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] transition-all duration-200 bottom-[88px] right-6 xl:bottom-8 xl:right-8"
          style={{ boxShadow: '2px 2px 0px var(--border-color)' }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile TOC Drawer Overlay */}
      {showMobileTocOverlay && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            onClick={() => setShowMobileTocOverlay(false)}
            aria-hidden="true"
          />
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-sm max-h-[70vh] z-50 bg-[var(--card-bg)] border-2 border-[var(--border-color)] p-6 rounded-sm shadow-2xl overflow-y-auto vintage-card flex flex-col font-serif xl:hidden"
            style={{ position: 'fixed' }}
          >
            <div className="vintage-card-inner-border" />
            <div className="flex items-center justify-between pb-4 border-b mb-4" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="font-bold font-cormorant text-lg text-[var(--text-color)] uppercase tracking-wider">Tome Index</h3>
              <button
                onClick={() => setShowMobileTocOverlay(false)}
                className="w-8 h-8 rounded-sm border border-[var(--border-color)] flex items-center justify-center bg-[var(--badge-bg)] text-[var(--text-color)] hover:bg-[var(--accent-color)]/10"
                aria-label="Close index"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="space-y-4">
              {tocItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="text-base">
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        handleTocClick(e, item.id);
                        setShowMobileTocOverlay(false);
                      }}
                      className={`hover:opacity-100 transition-opacity block truncate ${isActive ? 'font-bold opacity-100' : 'opacity-65'}`}
                      style={{ color: isActive ? 'var(--accent-color)' : 'var(--text-color)' }}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
