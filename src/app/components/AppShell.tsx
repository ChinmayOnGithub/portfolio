'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';
import ProjectNavigation from './ProjectNavigation';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Minimal Navigation for reader pages (projects and papers)
  const isReaderPage = pathname.startsWith('/projects') || pathname.startsWith('/papers');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[200] px-4 py-2 border font-serif font-bold uppercase tracking-wider text-xs rounded-sm shadow-md transition-colors"
        style={{
          backgroundColor: 'var(--accent-color)',
          color: 'var(--bg-color)',
          borderColor: 'var(--border-color)'
        }}
      >
        Skip to main content
      </a>

      <AnimatePresence>
        {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {isReaderPage && <ProjectNavigation />}

          <main id="main-content" className="relative z-0">
            {children}
          </main>
        </motion.div>
      )}
    </>
  );
}