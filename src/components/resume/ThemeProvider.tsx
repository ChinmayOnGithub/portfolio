"use client";

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ResumeThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const theme = (mounted ? resolvedTheme : 'dark') as 'light' | 'dark';

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
