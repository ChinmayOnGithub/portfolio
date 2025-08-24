// // src/app/components/AppShell.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import Loader from './Loader';
// import InteractiveBackground from './InteractiveBackground';
// import Navigation from './Navigation';
// import ClientLayoutWrapper from './ClientLayoutWrapper';

// export default function AppShell({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // This check prevents the main content from rendering on the server,
//   // which is a key part of avoiding the hydration flash.
//   if (!isMounted) {
//     return <Loader onFinished={() => { }} />; // Show loader initially, but it won't finish on the server
//   }

//   return (
//     <>
//       <AnimatePresence>
//         {/* The Loader now controls when it disappears by calling the onFinished function */}
//         {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
//       </AnimatePresence>

//       {/* This content will only render after isLoading is false */}
//       {!isLoading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//         >
//           <InteractiveBackground />
//           <div className="relative z-20">
//             <Navigation />
//           </div>
//           <main className="relative z-10">
//             <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
//           </main>
//         </motion.div>
//       )}
//     </>
//   );
// }


// // src/app/components/AppShell.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import Loader from './Loader';
// import InteractiveBackground from './InteractiveBackground';
// import Navigation from './Navigation';
// import ClientLayoutWrapper from './ClientLayoutWrapper';

// export default function AppShell({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       {/* The cursor light effect */}
//       <div
//         className="fixed inset-0 z-30 pointer-events-none transition-all duration-300"
//         style={{
//           // FIX: Reduced brightness from 0.18 to a more subtle 0.1
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 90, 0, 0.1), transparent 80%)`,
//         }}
//       />

//       <AnimatePresence>
//         {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
//       </AnimatePresence>

//       {!isLoading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//         >
//           <InteractiveBackground />
//           <div className="relative z-20">
//             <Navigation />
//           </div>
//           <main className="relative z-10">
//             <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
//           </main>
//         </motion.div>
//       )}
//     </>
//   );
// }

// src/app/components/AppShell.tsx
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './Loader';
import Navigation from './Navigation';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

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
          {/* InteractiveBackground is no longer here */}
          <div className="relative z-20">
            <Navigation />
          </div>
          <main className="relative z-10">
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </main>
        </motion.div>
      )}
    </>
  );
}