'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectById, projects } from '../../constants';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { resolvedTheme } = useTheme();
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  // Settings synced from navigation storage events
  const [textSize, setTextSize] = React.useState<'small' | 'medium' | 'large'>('medium');
  const [bookTheme, setBookTheme] = React.useState<'paper' | 'newspaper' | 'sepia'>('paper');

  // Interactive reader helpers
  const [activeSection, setActiveSection] = React.useState('overview');
  const [showMobileToc, setShowMobileToc] = React.useState(false);
  const [zoomedImage, setZoomedImage] = React.useState<string | null>(null);

  const settingsRef = React.useRef<HTMLDivElement>(null);

  // Set mount state on client load
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Unconditional Parameter resolution hook
  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  // Unconditional Scroll progress hook
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

  // Unconditional settings syncing from storage events
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

  // Unconditional Escape key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Resolve project details unconditionally (returns undefined if parameters are still loading)
  const project = React.useMemo(() => {
    return resolvedParams ? getProjectById(resolvedParams.id) : undefined;
  }, [resolvedParams]);

  const customSections = React.useMemo(() => {
    return project ? (project.docSections || []) : [];
  }, [project]);

  const otherProjects = React.useMemo(() => {
    return project ? projects.filter(p => p.id !== project.id) : [];
  }, [project]);

  // Unconditional dynamic reading time calculation (approx 220 words per minute)
  const dynamicReadTime = React.useMemo(() => {
    if (!project) return 1;
    const getWordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;
    let totalWords = 0;
    totalWords += getWordCount(project.overview);
    totalWords += getWordCount(project.longDescription);
    totalWords += getWordCount(project.architecture);
    project.features.forEach(f => totalWords += getWordCount(f));
    project.challenges.forEach(c => {
      totalWords += getWordCount(c.hurdle);
      totalWords += getWordCount(c.resolution);
    });
    customSections.forEach(sec => {
      totalWords += getWordCount(sec.title);
      totalWords += getWordCount(sec.content);
    });
    return Math.max(1, Math.ceil(totalWords / 220));
  }, [project, customSections]);

  // Unconditional Table of Contents items construction
  const tocItems = React.useMemo(() => {
    if (!project) return [];
    return [
      { id: 'overview', title: 'Overview' },
      { id: 'features', title: 'Key Features' },
      { id: 'architecture', title: 'System Architecture' },
      { id: 'challenges', title: 'Challenges & Solutions' },
      ...customSections.map((sec, idx) => ({ id: `section-${idx}`, title: sec.title })),
      { id: 'gallery', title: 'Visual Gallery' },
      { id: 'references', title: 'References & Links' }
    ];
  }, [project, customSections]);

  // Unconditional Table of Contents active highlight observer hook
  React.useEffect(() => {
    if (!resolvedParams || !project || tocItems.length === 0) return;
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
  }, [resolvedParams, project, tocItems]);

  // Resolve visual page theme palette based on selection
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
            codeBg: '#2E3033'
          };
        case 'sepia':
          return {
            bg: '#1A1512',
            text: '#EEDDC5',
            border: '#4D3B2E',
            accent: '#D99B59',
            meta: '#A8805F',
            cardBg: '#241D19',
            codeBg: '#2E2520'
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
            codeBg: '#2D2824'
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
            codeBg: '#DEDAD2'
          };
        case 'sepia':
          return {
            bg: '#F4ECD8',
            text: '#332211',
            border: '#D2C4A5',
            accent: '#5A3D28',
            meta: '#805A3C',
            cardBg: 'rgba(235, 215, 180, 0.3)',
            codeBg: '#EAE0C7'
          };
        case 'paper':
        default:
          return {
            bg: '#F8F5EE',
            text: '#2A2A2A',
            border: '#DDD5C5',
            accent: '#8C6239', // Warm leather brown instead of blue
            meta: '#8B6F47',
            cardBg: 'rgba(241, 238, 230, 0.35)',
            codeBg: '#F1EEE6'
          };
      }
    }
  };

  const colors = getThemeColors();

  // Resolve typography sizing classes
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
      const offset = 90; // offset for sticky navigation header
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Safe checks for parameters loading / non-existing project profiles
  if (!resolvedParams || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1E1C19] text-[#E8E2D8]">
        <div className="animate-pulse font-serif italic text-lg">Loading archive...</div>
      </div>
    );
  }

  // CSS variables mapping object to bind clean tokens
  const cssVariables = {
    '--bg-color': colors.bg,
    '--text-color': colors.text,
    '--border-color': colors.border,
    '--accent-color': colors.accent,
    '--meta-color': colors.meta,
    '--card-bg': colors.cardBg,
    '--code-bg': colors.codeBg
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
      {/* Dynamic Scroll Reading Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--accent-color)'
        }}
      />

      {/* 1. STICKY DESKTOP TABLE OF CONTENTS SIDEBAR */}
      <aside className="fixed top-36 left-[calc(50%-540px)] w-[165px] hidden xl:block z-20 font-serif text-[13px] select-none">
        <p className="font-bold uppercase tracking-widest mb-4 opacity-50 text-[12px]" style={{ color: 'var(--meta-color)' }}>
          Contents
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
                  className={`hover:opacity-100 transition-opacity block truncate ${isActive ? 'font-bold opacity-100' : 'opacity-65'
                    }`}
                  style={{ color: isActive ? 'var(--accent-color)' : 'var(--text-color)' }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Main Content Column (Centered 720px width) */}
      <div className="max-w-[720px] mx-auto px-6 pt-32">

        {/* Document Cover Page Header */}
        <header className="mb-14">

          <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold tracking-tight mb-5 leading-[1.15] font-serif">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg italic opacity-85 mb-8 leading-relaxed font-serif">
            {project.description}
          </p>

          {/* Clean Author Strip */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center py-3.5 border-y text-xs font-serif"
            style={{ borderColor: 'var(--border-color)', color: 'var(--meta-color)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: 'var(--text-color)' }}>Chinmay Patil</span>
              <span className="opacity-50">/</span>
              <span>Qualys Intern</span>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center gap-2">
              <span>Released {project.year}</span>
              <span className="opacity-40">•</span>
              <span>{dynamicReadTime} min read</span>
            </div>
          </div>
        </header>

        {/* 2. COLLAPSIBLE MOBILE/TABLET TABLE OF CONTENTS */}
        <div
          className="xl:hidden border rounded-sm p-4 text-sm sm:text-base mb-8 font-serif"
          style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
        >
          <button
            onClick={() => setShowMobileToc(!showMobileToc)}
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
                      className={`hover:opacity-100 transition-opacity block truncate ${isActive ? 'font-bold opacity-100' : 'opacity-70'
                        }`}
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

        {/* Dynamic Body content with custom sizes */}
        <main className={`space-y-12 ${getTextSizeClass()}`}>

          {/* Main Visual Plate/Cover Image */}
          <figure className="my-8">
            <div
              className="border p-2 rounded-sm cursor-zoom-in group relative overflow-hidden"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--card-bg)'
              }}
              onClick={() => setZoomedImage(project.images[0])}
            >
              <img
                src={project.images[0]}
                alt={`${project.name} primary plate illustration`}
                className="w-full h-auto object-cover rounded-sm filter brightness-95 group-hover:brightness-100 transition-all"
              />
            </div>
            <figcaption className="mt-2.5 text-center text-xs sm:text-sm italic" style={{ color: 'var(--meta-color)' }}>
              Plate 1.1: {project.name} client workspace interface model.
            </figcaption>
          </figure>

          {/* Overview */}
          <section id="overview" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Overview
            </h2>
            <p className="indent-8 font-serif">
              {project.overview}
            </p>
            <p className="font-serif">
              {project.longDescription}
            </p>
          </section>

          {/* Key Features */}
          <section id="features" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Key Features
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 font-serif">
              {project.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* System Architecture */}
          <section id="architecture" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              System Architecture
            </h2>
            <p className="indent-8 font-serif">
              {project.architecture}
            </p>
            <div className="pt-4 font-serif">
              <span className="font-bold block mb-2 uppercase tracking-widest text-xs" style={{ color: 'var(--meta-color)' }}>
                System Dependencies &amp; Stack
              </span>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm sm:text-base opacity-80">
                {project.technologies.map((tech, idx) => (
                  <span key={tech} className="font-serif">
                    {tech}{idx < project.technologies.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section id="challenges" className="scroll-mt-24 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Challenges &amp; Solutions
            </h2>
            <div className="space-y-7">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="pl-4 border-l-2"
                  style={{ borderColor: 'var(--accent-color)' }}
                >
                  <p className="text-xs uppercase tracking-widest font-bold mb-2 font-serif" style={{ color: 'var(--meta-color)' }}>
                    Technical Hurdle {index + 1}
                  </p>
                  <p className="font-bold text-[19px] sm:text-[21px] mb-2 leading-snug font-serif">
                    {challenge.hurdle}
                  </p>
                  <p className="leading-relaxed font-serif">
                    <span className="font-bold">Resolution:</span> {challenge.resolution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dynamic custom sections */}
          {customSections.map((sec, idx) => (
            <section id={`section-${idx}`} key={idx} className="scroll-mt-24 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
                {sec.title}
              </h2>
              <p className="indent-8 font-serif">
                {sec.content}
              </p>
              {sec.image && (
                <figure className="my-6">
                  <div
                    className="border p-2 rounded-sm cursor-zoom-in group relative overflow-hidden"
                    style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                    onClick={() => setZoomedImage(sec.image || null)}
                  >
                    <img src={sec.image} alt={sec.title} className="w-full h-auto rounded-sm filter brightness-95 group-hover:brightness-100 transition-all" />
                  </div>
                  <figcaption className="mt-2 text-center text-xs italic" style={{ color: 'var(--meta-color)' }}>
                    Plate 1.2: {sec.title} schema layout.
                  </figcaption>
                </figure>
              )}
            </section>
          ))}

          {/* Visual Gallery */}
          <section id="gallery" className="scroll-mt-24 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              Visual Gallery
            </h2>
            <div className="space-y-8 pt-2">
              {project.images.slice(1).map((image, index) => (
                <figure key={index} className="my-6">
                  <div
                    className="border p-2 rounded-sm cursor-zoom-in group relative overflow-hidden"
                    style={{
                      borderColor: 'var(--border-color)',
                      backgroundColor: 'var(--card-bg)'
                    }}
                    onClick={() => setZoomedImage(image)}
                  >
                    <img
                      src={image}
                      alt={project.galleryCaptions[index] || `Screenshot ${index + 2}`}
                      className="w-full h-auto object-cover rounded-sm filter brightness-95 group-hover:brightness-100 transition-all"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-xs sm:text-sm italic" style={{ color: 'var(--meta-color)' }}>
                    Plate 1.3: {project.galleryCaptions[index] || `Screenshot display model ${index + 1}.`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* References */}
          <section id="references" className="scroll-mt-24 space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif pb-1.5 border-b" style={{ borderColor: 'var(--border-color)' }}>
              References &amp; Links
            </h2>
            <ul className="space-y-2 text-sm sm:text-base font-serif">
              <li className="flex items-center gap-2">
                <span style={{ color: 'var(--meta-color)' }}>[1]</span>
                <span>Source Code Archive:</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                  style={{ color: 'var(--accent-color)' }}
                >
                  {project.name} on GitHub
                </a>
              </li>
              {project.liveUrl && (
                <li className="flex items-center gap-2">
                  <span style={{ color: 'var(--meta-color)' }}>[2]</span>
                  <span>Interactive Live Link:</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    {project.name} Production Release
                  </a>
                </li>
              )}
            </ul>
          </section>

          {/* Quiet Bottom Index: Browse Other Projects */}
          <section
            className="pt-12 border-t space-y-6 font-serif"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
              <h3 className="text-sm font-bold">
                More Case Studies
              </h3>
              <Link
                href="/"
                className="underline underline-offset-4 font-bold"
                style={{ color: 'var(--accent-color)' }}
              >
                View Index
              </Link>
            </div>

            {/* Quiet, text-first navigation links */}
            <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group py-4 block transition-all flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 hover:opacity-80"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[9px]" style={{ color: 'var(--accent-color)' }}>
                      {p.category}
                    </span>
                    <h4 className="text-base font-bold underline decoration-1 underline-offset-4">
                      {p.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs opacity-75">
                    <span className="line-clamp-1 max-w-[320px] italic">{p.description}</span>
                    <span style={{ color: 'var(--meta-color)' }}>{p.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Lightbox / Zoom-to-Click Overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out select-none"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} alt="Zoomed illustration plate" className="max-w-full max-h-full object-contain rounded-sm" />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-400 text-xs font-serif bg-zinc-950/80 px-4 py-2 border border-zinc-800 rounded-sm">
            Press ESC or click anywhere to exit zoom
          </div>
        </div>
      )}
    </div>
  );
}