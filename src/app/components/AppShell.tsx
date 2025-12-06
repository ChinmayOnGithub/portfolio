'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';
import Navigation from './Navigation';
import ProjectNavigation from './ProjectNavigation';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Only show portfolio navigation on /portfolio page
  const isPortfolioPage = pathname === '/portfolio';
  const isProjectPage = pathname.startsWith('/projects');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader onFinished={() => { }} />;
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Portfolio Navigation only for /portfolio page */}
          {isPortfolioPage && (
            <div className="relative z-20">
              <Navigation />
            </div>
          )}

          {/* Minimal Navigation for project pages */}
          {isProjectPage && <ProjectNavigation />}

          <main className={`relative ${isPortfolioPage ? 'z-10' : 'z-0'}`}>
            {isPortfolioPage ? (
              <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
            ) : (
              children
            )}
          </main>
        </motion.div>
      )}
    </>
  );
}