"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ResumeThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('resume-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('resume-theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useResumeTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useResumeTheme must be used within ResumeThemeProvider');
  }
  return context;
}

export function useResumeThemeSafe() {
  const context = useContext(ThemeContext);
  return context || { theme: 'dark' as const, toggleTheme: () => { } };
}
