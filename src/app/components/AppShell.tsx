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

  // Minimal Navigation for project pages
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
          {isProjectPage && <ProjectNavigation />}

          <main className="relative z-0">
            {children}
          </main>
        </motion.div>
      )}
    </>
  );
}