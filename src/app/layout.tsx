import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { ReaderSettingsProvider } from './components/ReaderSettingsContext';
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
	title: 'Chinmay Patil | Backend & DevOps Engineer',
	description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore systems engineering, DevOps pipeline automations, cloud infrastructure, and technical case studies.',
	metadataBase: new URL('https://chinmaypatil.com'),
	keywords: ['Chinmay Patil', 'Software Engineer', 'Backend Engineer', 'DevOps', 'Cloud Infrastructure', 'Portfolio', 'System Design', 'C++', 'Linux'],
	authors: [{ name: 'Chinmay Patil' }],
	alternates: {
		types: {
			'application/rss+xml': [{ url: '/feed.xml', title: "Chinmay Patil's Technical Papers Feed" }],
		},
	},
	openGraph: {
		title: 'Chinmay Patil | Backend & DevOps Engineer',
		description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore systems engineering, DevOps pipeline automations, cloud infrastructure, and technical case studies.',
		url: 'https://chinmaypatil.com',
		siteName: 'Chinmay Patil Portfolio',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chinmay Patil | Backend & DevOps Engineer',
		description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore systems engineering, DevOps pipeline automations, cloud infrastructure, and technical case studies.',
	},
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
					<ReaderSettingsProvider>
						<AppShell>{children}</AppShell>
					</ReaderSettingsProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
