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
