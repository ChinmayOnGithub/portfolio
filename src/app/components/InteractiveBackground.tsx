'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function InteractiveBackground() {
  const { resolvedTheme } = useTheme();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out the background video after scrolling past the hero section (e.g., 500px)
      const newOpacity = Math.max(0, 1 - scrollY / 500);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMounted || resolvedTheme === 'light') {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500"
      style={{
        opacity: scrollOpacity,
      }}
    >
      <video
        src="/gifs/sukuna.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter blur-xl"
      />

      {/* This dark overlay will now fade out with the video */}
      <div className="absolute inset-0 bg-black/75"></div>
    </div>
  );
}
