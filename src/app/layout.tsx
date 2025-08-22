// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import ClientLayoutWrapper from './components/ClientLayoutWrapper';
import Navigation from './components/Navigation'; // Import Navigation here

// Setup for the Inter font (sans-serif)
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

// Setup for the Roboto Mono font (monospace)
const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
});

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
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[#1a1a1a] text-gray-400`}
			>
				<Navigation /> {/* The Navigation component now lives here */}
				<ClientLayoutWrapper>{children}</ClientLayoutWrapper>
			</body>
		</html>
	);
}