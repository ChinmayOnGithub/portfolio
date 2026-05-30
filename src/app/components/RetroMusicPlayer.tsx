'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

// --- STYLIZED SVG ICONS ---
const PlayIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path></svg>);
const PauseIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18h4V6H6v12zm8-12v12h4V6h-4z"></path></svg>);
const NextIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18V6l8.5 6L7 18zM15 6v12h2V6h-2z"></path></svg>);
const PrevIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 18l-8.5-6L9 6v12zM17 6v12h-2V6h2z"></path></svg>);
const MusicNoteIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>);

// --- PLAYLIST ---
const playlist = [
  { src: "/music/song1.mp3" },
  { src: "/music/song2.mp3" },
  { src: "/music/song3.mp3" },
];

export default function RetroMusicPlayer() {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const playMusic = () => {
    audioRef.current?.play().catch(error => console.error("Audio play failed:", error));
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  const toggleOpen = () => {
    const willBeOpen = !isOpen;
    setIsOpen(willBeOpen);
    if (willBeOpen && !isPlaying) {
      playMusic();
    }
  };

  const nextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(newIndex);
  };

  const prevTrack = () => {
    const newIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(newIndex);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrackIndex].src;
      if (isPlaying) {
        playMusic();
      }
    }
  }, [currentTrackIndex]);


  const themeClasses = {
    dark: {
      button: 'text-gray-400 hover:text-white',
      buttonActive: 'text-orange-500',
      playerBg: 'bg-[#2D2D2D]/80',
      playPauseBg: 'bg-orange-500/20 hover:bg-orange-500/30',
    },
    light: {
      button: 'text-[#235E80] hover:text-black',
      buttonActive: 'text-[#D26911]',
      playerBg: 'bg-[#F0EADD]/80',
      playPauseBg: 'bg-[#D26911]/20 hover:bg-[#D26911]/30',
    }
  };

  if (!isMounted) {
    return <div className="w-10 h-10"></div>;
  }
  const currentTheme = resolvedTheme === 'light' ? themeClasses.light : themeClasses.dark;
  const vibeImageSrc = resolvedTheme === 'light' ? '/images/catty.png' : '/images/watching_tv.jpg';

  return (
    <div className={`relative flex items-center rounded-full transition-all duration-500 ease-in-out ${isOpen ? `w-56 p-1 ${currentTheme.playerBg}` : 'w-10'}`}>
      <audio
        ref={audioRef}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></audio>

      <button onClick={toggleOpen} className={`p-2 rounded-full transition-colors duration-300 flex-shrink-0 ${isPlaying ? currentTheme.buttonActive : currentTheme.button}`} aria-label="Toggle Music Player">
        <div className={isPlaying ? 'animate-spin' : ''}>
          <MusicNoteIcon />
        </div>
      </button>

      <div className={`flex items-center justify-between w-full overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 delay-200' : 'opacity-0'}`}>

        <div className="flex items-center gap-1 ml-2">
          <button onClick={prevTrack} className={`p-2 rounded-full transition-colors duration-300 ${currentTheme.button}`}>
            <PrevIcon />
          </button>

          <button
            onClick={isPlaying ? pauseMusic : playMusic}
            className={`p-2 transition-all duration-300 ease-in-out ${currentTheme.playPauseBg} ${currentTheme.buttonActive} ${isPlaying ? 'rounded-full' : 'rounded-lg'}`}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <button onClick={nextTrack} className={`p-2 rounded-full transition-colors duration-300 ${currentTheme.button}`}>
            <NextIcon />
          </button>
        </div>

        {/* Vibing GIF (Aura effect removed) */}
        <div className="relative w-10 h-10 flex-shrink-0 ml-2">
          <Image
            key={vibeImageSrc}
            src={vibeImageSrc}
            alt="Vibing animation"
            width={40}
            height={40}
            className="w-full h-full object-cover rounded-full"
            unoptimized
          />
        </div>

      </div>
    </div>
  );
}
