import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: 'swap',
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: 'swap',
});

export const metadata: Metadata = {
	title: "chinmaypatil",
	description: "Portfolio of Chinmay Patil",
	metadataBase: new URL('https://chinmaypatil.dev'),
};

export const viewport: Viewport = {
	themeColor: '#4B5563',
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
