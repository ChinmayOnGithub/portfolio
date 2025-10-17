// src/app/components/Loader.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

// --- MinimalLoader Sub-Component (No changes needed here) ---
const MinimalLoader = ({ progress, theme }: { progress: number, theme: string | undefined }) => {
  const themeClasses = {
    dark: {
      text: 'text-gray-300',
      bg: 'bg-gray-300',
      barBg: 'bg-gray-800',
    },
    light: {
      text: 'text-gray-700',
      bg: 'bg-gray-700',
      barBg: 'bg-gray-200',
    }
  };
  const currentTheme = theme === 'light' ? themeClasses.light : themeClasses.dark;

  return (
    <div className="relative z-10 flex flex-col items-center gap-3 w-64 sm:w-72">
      <div className="flex justify-between w-full font-mono text-sm">
        <p className={currentTheme.text}>INITIALIZING...</p>
        <p className={currentTheme.text}>{progress}%</p>
      </div>
      <div className={`w-full h-2 ${currentTheme.barBg} rounded-full overflow-hidden`}>
        <motion.div
          className={`h-full ${currentTheme.bg} rounded-full`}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: 'linear' }}
        />
      </div>
    </div>
  );
};


// --- Main Loader Component ---
export default function Loader({ onFinished }: { onFinished: () => void }) {
  const { resolvedTheme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect for running the loading animation
  useEffect(() => {
    if (!isMounted) return;

    const intervals = [
      { until: 70, speed: 20 },
      { until: 95, speed: 100 },
      { until: 100, speed: 15 },
    ];
    let currentIntervalIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const updateProgress = () => {
      setProgress(oldProgress => {
        if (oldProgress >= 100) {
          return 100;
        }

        if (oldProgress >= intervals[currentIntervalIndex].until) {
          currentIntervalIndex++;
        }

        const newProgress = oldProgress + 1;
        const currentSpeed = intervals[currentIntervalIndex].speed;

        timeoutId = setTimeout(updateProgress, currentSpeed);

        return newProgress;
      });
    };

    timeoutId = setTimeout(updateProgress, intervals[0].speed);

    return () => clearTimeout(timeoutId);
  }, [isMounted]);

  // FIX: A separate effect to safely call onFinished when progress is complete
  useEffect(() => {
    if (progress === 100) {
      // Wait for the progress bar to visually reach 100%
      setTimeout(() => {
        onFinished();
      }, 500); // Small delay for visual consistency
    }
  }, [progress, onFinished]);


  if (!isMounted) {
    return null;
  }

  const bgColor = resolvedTheme === 'light' ? 'bg-[#FAF3E6]' : 'bg-[#1a1a1a]';

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${bgColor}`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <MinimalLoader progress={progress} theme={resolvedTheme} />
      </motion.div>
    </AnimatePresence>
  );
}
