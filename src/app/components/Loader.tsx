// // src/app/components/Loader.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- New Pixel Art Loader Sub-Component ---
// const PixelLoader = ({ progress, theme }: { progress: number, theme: string | undefined }) => {
//   const totalSegments = 20;
//   const filledSegments = Math.round((progress / 100) * totalSegments);

//   const themeClasses = {
//     dark: {
//       text: 'text-gray-200',
//       borderOuter: 'border-gray-700',
//       borderInner: 'border-gray-800',
//       bg: 'bg-black/60',
//       segmentEmpty: 'bg-gray-800',
//       segmentFilled: 'bg-gray-200', // Changed from orange gradient to white
//     },
//     light: {
//       text: 'text-gray-800',
//       borderOuter: 'border-gray-300',
//       borderInner: 'border-gray-200',
//       bg: 'bg-white/60',
//       segmentEmpty: 'bg-gray-300',
//       segmentFilled: 'bg-gray-800', // Changed from orange gradient to black
//     }
//   };
//   const currentTheme = theme === 'light' ? themeClasses.light : themeClasses.dark;

//   return (
//     <div className={`relative z-10 flex flex-col items-center gap-4 p-4 border-2 ${currentTheme.borderOuter} ${currentTheme.bg} backdrop-blur-sm w-80 sm:w-96`}>
//       {/* Inner border for retro feel */}
//       <div className={`absolute inset-1 border-2 ${currentTheme.borderInner}`}></div>

//       <p className={`relative font-mono text-xl sm:text-2xl tracking-[0.2em] ${currentTheme.text}`}>
//         LOADING...
//       </p>
//       <div className={`w-full h-8 border-2 p-1 ${currentTheme.borderOuter}`}>
//         <div className="flex gap-1 w-full h-full">
//           {Array.from({ length: totalSegments }).map((_, i) => (
//             <div
//               key={i}
//               className={`flex-1 transition-colors duration-100 ${i < filledSegments ? currentTheme.segmentFilled : currentTheme.segmentEmpty}`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default function Loader() {
//   const { resolvedTheme } = useTheme();
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     // This timer simulates a 4-second loading process.
//     const timer = setInterval(() => {
//       setProgress(oldProgress => {
//         if (oldProgress >= 100) {
//           clearInterval(timer);
//           setTimeout(() => setLoading(false), 500); // Wait for fade out
//           return 100;
//         }
//         return oldProgress + 1;
//       });
//     }, 40); // 40ms * 100 = 4000ms = 4 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   // For now, we use a solid background to focus on the loader design
//   const bgColor = resolvedTheme === 'light' ? 'bg-[#FAF3E6]' : 'bg-[#1a1a1a]';

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${bgColor}`}
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//         >
//           <PixelLoader progress={progress} theme={resolvedTheme} />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


// // src/app/components/Loader.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- New Minimal & Realistic Loader ---
// const MinimalLoader = ({ progress, theme }: { progress: number, theme: string | undefined }) => {
//   const themeClasses = {
//     dark: {
//       text: 'text-gray-300',
//       bg: 'bg-gray-300',
//       barBg: 'bg-gray-800',
//     },
//     light: {
//       text: 'text-gray-700',
//       bg: 'bg-gray-700',
//       barBg: 'bg-gray-200',
//     }
//   };
//   const currentTheme = theme === 'light' ? themeClasses.light : themeClasses.dark;

//   return (
//     <div className="relative z-10 flex flex-col items-center gap-3 w-64 sm:w-72">
//       <div className="flex justify-between w-full font-mono text-sm">
//         <p className={currentTheme.text}>INITIALIZING...</p>
//         <p className={currentTheme.text}>{progress}%</p>
//       </div>
//       <div className={`w-full h-2 ${currentTheme.barBg} rounded-full overflow-hidden`}>
//         <motion.div
//           className={`h-full ${currentTheme.bg} rounded-full`}
//           initial={{ width: '0%' }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.2, ease: 'linear' }}
//         />
//       </div>
//     </div>
//   );
// };


// export default function Loader() {
//   const { resolvedTheme } = useTheme();
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     // This timer simulates a realistic, non-linear loading process
//     const intervals = [
//       { until: 70, speed: 20 },  // Fast at the beginning
//       { until: 95, speed: 100 }, // Slower in the middle
//       { until: 100, speed: 15 }, // Quick burst at the end
//     ];
//     let currentIntervalIndex = 0;

//     const updateProgress = () => {
//       setProgress(oldProgress => {
//         if (oldProgress >= 100) {
//           setTimeout(() => setLoading(false), 500); // Wait for fade out
//           return 100;
//         }

//         // Adjust speed based on progress
//         if (oldProgress >= intervals[currentIntervalIndex].until) {
//           currentIntervalIndex++;
//         }

//         const newProgress = oldProgress + 1;
//         const currentSpeed = intervals[currentIntervalIndex].speed;

//         // Schedule the next update
//         setTimeout(updateProgress, currentSpeed);

//         return newProgress;
//       });
//     };

//     // Start the loading process
//     const initialSpeed = intervals[0].speed;
//     const timeoutId = setTimeout(updateProgress, initialSpeed);

//     return () => clearTimeout(timeoutId);
//   }, [isMounted]);

//   if (!isMounted) {
//     return null;
//   }

//   const bgColor = resolvedTheme === 'light' ? 'bg-[#FAF3E6]' : 'bg-[#1a1a1a]';

//   return (
//     <AnimatePresence>
//       {loading && (
//         <motion.div
//           className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${bgColor}`}
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//         >
//           <MinimalLoader progress={progress} theme={resolvedTheme} />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // src/app/components/Loader.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- MinimalLoader Sub-Component (No changes needed here) ---
// const MinimalLoader = ({ progress, theme }: { progress: number, theme: string | undefined }) => {
//   const themeClasses = {
//     dark: {
//       text: 'text-gray-300',
//       bg: 'bg-gray-300',
//       barBg: 'bg-gray-800',
//     },
//     light: {
//       text: 'text-gray-700',
//       bg: 'bg-gray-700',
//       barBg: 'bg-gray-200',
//     }
//   };
//   const currentTheme = theme === 'light' ? themeClasses.light : themeClasses.dark;

//   return (
//     <div className="relative z-10 flex flex-col items-center gap-3 w-64 sm:w-72">
//       <div className="flex justify-between w-full font-mono text-sm">
//         <p className={currentTheme.text}>INITIALIZING...</p>
//         <p className={currentTheme.text}>{progress}%</p>
//       </div>
//       <div className={`w-full h-2 ${currentTheme.barBg} rounded-full overflow-hidden`}>
//         <motion.div
//           className={`h-full ${currentTheme.bg} rounded-full`}
//           initial={{ width: '0%' }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.2, ease: 'linear' }}
//         />
//       </div>
//     </div>
//   );
// };


// // --- Main Loader Component ---
// export default function Loader({ onFinished }: { onFinished: () => void }) {
//   const { resolvedTheme } = useTheme();
//   const [progress, setProgress] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     const intervals = [
//       { until: 70, speed: 20 },
//       { until: 95, speed: 100 },
//       { until: 100, speed: 15 },
//     ];
//     let currentIntervalIndex = 0;
//     let timeoutId: NodeJS.Timeout;

//     const updateProgress = () => {
//       setProgress(oldProgress => {
//         if (oldProgress >= 100) {
//           // When progress hits 100, tell the parent component we are done.
//           onFinished();
//           return 100;
//         }

//         if (oldProgress >= intervals[currentIntervalIndex].until) {
//           currentIntervalIndex++;
//         }

//         const newProgress = oldProgress + 1;
//         const currentSpeed = intervals[currentIntervalIndex].speed;

//         timeoutId = setTimeout(updateProgress, currentSpeed);

//         return newProgress;
//       });
//     };

//     timeoutId = setTimeout(updateProgress, intervals[0].speed);

//     return () => clearTimeout(timeoutId);
//   }, [isMounted, onFinished]);

//   if (!isMounted) {
//     return null;
//   }

//   const bgColor = resolvedTheme === 'light' ? 'bg-[#FAF3E6]' : 'bg-[#1a1a1a]';

//   // The component's visibility is now fully controlled by the parent (AppShell)
//   return (
//     <motion.div
//       className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${bgColor}`}
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8, ease: 'easeInOut' }}
//     >
//       <MinimalLoader progress={progress} theme={resolvedTheme} />
//     </motion.div>
//   );
// }



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
