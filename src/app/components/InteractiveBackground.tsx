// // src/app/components/InteractiveBackground.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes'; // Import the useTheme hook

// export default function InteractiveBackground() {
//   const { theme } = useTheme(); // Get the current theme ('light' or 'dark')
//   const [scrollOpacity, setScrollOpacity] = useState(1);
//   const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
//   const [parallaxY, setParallaxY] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     // This ensures the component only renders on the client, preventing hydration errors with the theme.
//     setIsMounted(true);

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const newOpacity = Math.max(0, 1 - scrollY / 500);
//       setScrollOpacity(newOpacity);
//       setParallaxY(scrollY * 0.2);
//     };

//     const handleMouseMove = (event: MouseEvent) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Avoid rendering on the server where the theme is unknown.
//   if (!isMounted) {
//     return null;
//   }

//   // Conditionally choose the video source based on the current theme.
//   // Make sure you have both video files in your /public folder.
//   const videoSrc = theme === 'light' ? '/waves.gif' : '/sukuna.gif';

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none">
//       <div
//         className="absolute inset-0 transition-all duration-300"
//         style={{
//           background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 90, 0, 0.1), transparent 80%)`,
//         }}
//       />

//       <img
//         key={videoSrc} // Using a key forces React to re-render the video element when the source changes.
//         src={videoSrc}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 filter blur-xl"
//         style={{
//           opacity: scrollOpacity,
//           transform: `translateY(${parallaxY}px)`
//         }}
//       />

//       <div className="absolute inset-0 bg-black/75"></div>
//     </div>
//   );
// }




// src/app/components/InteractiveBackground.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function InteractiveBackground() {
  const { resolvedTheme } = useTheme();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [parallaxY, setParallaxY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 500);
      setScrollOpacity(newOpacity);
      setParallaxY(scrollY * 0.2);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Avoid rendering on the server to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Only render the background effect in dark mode
  if (resolvedTheme === 'light') {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Spotlight effect that follows the mouse */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 90, 0, 0.1), transparent 80%)`,
        }}
      />

      {/* UPDATED: Switched to a <video> tag for better performance */}
      <video
        src="/sukuna.mp4" // Make sure your video file is in the /public folder
        autoPlay
        loop
        muted
        playsInline // Important for mobile devices
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 filter blur-xl"
        style={{
          opacity: scrollOpacity,
          transform: `translateY(${parallaxY}px)`,
        }}
      />

      {/* A dark overlay to ensure text is always readable */}
      <div className="absolute inset-0 bg-black/75"></div>
    </div>
  );
}
