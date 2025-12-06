// // src/app/layout.tsx
// import type { Metadata, Viewport } from 'next';
// import { Inter, Roboto_Mono } from 'next/font/google';
// import './globals.css';
// import ClientLayoutWrapper from './components/ClientLayoutWrapper';
// import Navigation from './components/Navigation'; // Import Navigation here

// // Setup for the Inter font (sans-serif)
// const inter = Inter({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// 	display: 'swap',
// });

// // Setup for the Roboto Mono font (monospace)
// const robotoMono = Roboto_Mono({
// 	subsets: ['latin'],
// 	variable: '--font-roboto-mono',
// 	display: 'swap',
// });

// export const metadata: Metadata = {
// 	title: 'chinmaypatil',
// 	description: 'Portfolio of Chinmay Patil',
// 	metadataBase: new URL('https://chinmaypatil.com'),
// };

// export const viewport: Viewport = {
// 	themeColor: '#1a1a1a',
// 	width: 'device-width',
// 	initialScale: 1,
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className="scroll-smooth">
// 			<body
// 				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[#1a1a1a] text-gray-400`}
// 			>
// 				<Navigation /> {/* The Navigation component now lives here */}
// 				<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
// 			</body>
// 		</html>
// 	);
// }


// // src/app/layout.tsx
// import type { Metadata, Viewport } from 'next';
// import { Inter, Roboto_Mono } from 'next/font/google';
// import './globals.css';
// import ClientLayoutWrapper from './components/ClientLayoutWrapper';
// import Navigation from './components/Navigation';

// const inter = Inter({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// 	display: 'swap',
// });

// const robotoMono = Roboto_Mono({
// 	subsets: ['latin'],
// 	variable: '--font-roboto-mono',
// 	display: 'swap',
// });

// export const metadata: Metadata = {
// 	title: 'chinmaypatil',
// 	description: 'Portfolio of Chinmay Patil',
// 	metadataBase: new URL('https://chinmaypatil.com'),
// };

// export const viewport: Viewport = {
// 	themeColor: '#1a1a1a',
// 	width: 'device-width',
// 	initialScale: 1,
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className="scroll-smooth">
// 			<body
// 				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[#1a1a1a] text-gray-400`}
// 			>
// 				<Navigation />

// 				{/* ---------------------------
//             Decorative right-half media
//             ---------------------------
//             - Fixed, covers right 50% on desktop
//             - heavy blur + saturate
//             - soft left fade via mask-image (inline style)
//             - separate div for radial glow (inline style)
//         */}
// 				<div
// 					className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen overflow-hidden pointer-events-none z-0"
// 					// mask so left edge fades smoothly (inline style because Tailwind can't express complex mask-image)
// 					style={{
// 						WebkitMaskImage:
// 							'linear-gradient(to left, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 100%)',
// 						maskImage:
// 							'linear-gradient(to left, rgba(0,0,0,1) 38%, rgba(0,0,0,0) 100%)',
// 					}}
// 					aria-hidden="true"
// 				>
// 					{/* radial glow behind content — implemented as a real element so no pseudo required */}
// 					<div
// 						className="absolute -left-[20vw] top-[40vh] w-[60vw] h-[60vh] pointer-events-none mix-blend-screen"
// 						style={{
// 							background:
// 								'radial-gradient(circle at 20% 40%, rgba(255,90,0,0.18), rgba(255,50,0,0.06) 25%, transparent 45%)',
// 						}}
// 					/>

// 					{/* image or video: image used here -> lazy loaded */}
// 					<img
// 						src="/sukuna.gif"
// 						alt=""
// 						loading="lazy"
// 						decoding="async"
// 						className={
// 							// Tailwind utilities for sizing, positioning and filters
// 							'absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-cover object-right filter blur-xl saturate-[1.08] contrast-[0.98] transition-filter duration-300'
// 						}
// 					/>
// 				</div>

// 				{/* Ensure main content sits on top of the decorative media */}
// 				<main className="relative z-10">
// 					<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
// 				</main>
// 			</body>
// 		</html>
// 	);
// }



// // src/app/layout.tsx
// import type { Metadata, Viewport } from 'next';
// import { Inter, Roboto_Mono } from 'next/font/google';
// import './globals.css';
// import ClientLayoutWrapper from './components/ClientLayoutWrapper';
// import Navigation from './components/Navigation';
// import InteractiveBackground from './components/InteractiveBackground'; // We will create this

// const inter = Inter({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// 	display: 'swap',
// });

// const robotoMono = Roboto_Mono({
// 	subsets: ['latin'],
// 	variable: '--font-roboto-mono',
// 	display: 'swap',
// });

// export const metadata: Metadata = {
// 	title: 'chinmaypatil',
// 	description: 'Portfolio of Chinmay Patil',
// 	metadataBase: new URL('https://chinmaypatil.com'),
// };

// export const viewport: Viewport = {
// 	themeColor: '#1a1a1a',
// 	width: 'device-width',
// 	initialScale: 1,
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className="scroll-smooth">
// 			<body
// 				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[#101010] text-gray-400`}
// 			>
// 				{/* The new interactive background lives here, behind everything else */}
// 				<InteractiveBackground />

// 				{/* The navigation and main content sit on top */}
// 				<div className="relative z-20">
// 					<Navigation />
// 				</div>

// 				<main className="relative z-10">
// 					<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
// 				</main>
// 			</body>
// 		</html>
// 	);
// }


// // src/app/layout.tsx
// import type { Metadata, Viewport } from 'next';
// import { Inter, Roboto_Mono } from 'next/font/google';
// import './globals.css';
// import ClientLayoutWrapper from './components/ClientLayoutWrapper';
// import Navigation from './components/Navigation';
// import InteractiveBackground from './components/InteractiveBackground';
// import { ThemeProvider } from './components/ThemeProvider';
// import Loader from './components/Loader'; // <-- 1. Import the new Loader

// const inter = Inter({
// 	subsets: ['latin'],
// 	variable: '--font-inter',
// 	display: 'swap',
// });

// const robotoMono = Roboto_Mono({
// 	subsets: ['latin'],
// 	variable: '--font-roboto-mono',
// 	display: 'swap',
// });

// export const metadata: Metadata = {
// 	title: 'chinmaypatil',
// 	description: 'Portfolio of Chinmay Patil',
// 	metadataBase: new URL('https://chinmaypatil.com'),
// };

// export const viewport: Viewport = {
// 	themeColor: '#1a1a1a',
// 	width: 'device-width',
// 	initialScale: 1,
// };

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	return (
// 		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
// 			<body
// 				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[#101010] text-gray-400`}
// 			>
// 				<ThemeProvider
// 					attribute="class"
// 					defaultTheme="dark"
// 					enableSystem
// 					disableTransitionOnChange={false}
// 				>
// 					<Loader /> {/* <-- 2. Add the Loader component here */}
// 					<InteractiveBackground />
// 					<div className="relative z-20">
// 						<Navigation />
// 					</div>
// 					<main className="relative z-10">
// 						<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
// 					</main>
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	);
// }


// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import AppShell from './components/AppShell';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
});

// Metadata is now correctly in a Server Component
export const metadata: Metadata = {
	title: 'chinmaypatil',
	description: 'Portfolio of Chinmay Patil',
	metadataBase: new URL('https://chinmaypatil.com'),
};

export const viewport: Viewport = {
	themeColor: '#1a1a1a',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange={false}
				>
					<AppShell>{children}</AppShell>
				</ThemeProvider>
			</body>
		</html>
	);
}
