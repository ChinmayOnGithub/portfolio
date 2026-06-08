'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type TextSize = 'small' | 'medium' | 'large';
export type BookTheme = 'paper' | 'newspaper' | 'sepia';

export interface ReaderThemeColors {
  bg: string;
  text: string;
  border: string;
  accent: string;
  meta: string;
  cardBg: string;
  codeBg: string;
}

export function getReaderColors(bookTheme: BookTheme, isDark: boolean): ReaderThemeColors {
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
          accent: '#8C6239',
          meta: '#8B6F47',
          cardBg: 'rgba(241, 238, 230, 0.35)',
          codeBg: '#F1EEE6'
        };
    }
  }
}

interface SettingsContextType {
  textSize: TextSize;
  bookTheme: BookTheme;
  setTextSize: (size: TextSize) => void;
  setBookTheme: (theme: BookTheme) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function ReaderSettingsProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSizeState] = useState<TextSize>('medium');
  const [bookTheme, setBookThemeState] = useState<BookTheme>('paper');

  useEffect(() => {
    const storedTheme = localStorage.getItem('reader-book-theme') as BookTheme;
    const storedSize = localStorage.getItem('reader-text-size') as TextSize;
    if (storedTheme) setBookThemeState(storedTheme);
    if (storedSize) setTextSizeState(storedSize);
  }, []);

  const setTextSize = (size: TextSize) => {
    localStorage.setItem('reader-text-size', size);
    setTextSizeState(size);
    window.dispatchEvent(new Event('reader-settings-update'));
  };

  const setBookTheme = (theme: BookTheme) => {
    localStorage.setItem('reader-book-theme', theme);
    setBookThemeState(theme);
    window.dispatchEvent(new Event('reader-settings-update'));
  };

  useEffect(() => {
    const handleStorageUpdate = () => {
      const storedTheme = localStorage.getItem('reader-book-theme') as BookTheme;
      const storedSize = localStorage.getItem('reader-text-size') as TextSize;
      if (storedTheme) setBookThemeState(storedTheme);
      if (storedSize) setTextSizeState(storedSize);
    };

    window.addEventListener('reader-settings-update', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('reader-settings-update', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  return (
    <SettingsContext.Provider value={{ textSize, bookTheme, setTextSize, setBookTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useReaderSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    return {
      textSize: 'medium' as TextSize,
      bookTheme: 'paper' as BookTheme,
      setTextSize: () => {},
      setBookTheme: () => {},
    };
  }
  return context;
}
