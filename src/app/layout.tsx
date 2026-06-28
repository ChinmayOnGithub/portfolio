import type { Metadata, Viewport } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { ReaderSettingsProvider } from './components/ReaderSettingsContext';
import AppShell from './components/AppShell';
import Script from 'next/script';

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
	description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore Browser Tools (tools.chinmaypatil.com) - a suite of privacy-first client-side utilities, systems engineering, DevOps pipeline automations, and technical papers.',
	metadataBase: new URL('https://chinmaypatil.com'),
	keywords: ['Chinmay Patil', 'Browser Tools', 'tools.chinmaypatil.com', 'Software Engineer', 'Backend Engineer', 'DevOps', 'Cloud Infrastructure', 'Portfolio', 'System Design', 'C++', 'Linux'],
	authors: [{ name: 'Chinmay Patil' }],
	alternates: {
		types: {
			'application/rss+xml': [{ url: '/feed.xml', title: "Chinmay Patil's Technical Papers Feed" }],
		},
	},
	openGraph: {
		title: 'Chinmay Patil | Backend & DevOps Engineer',
		description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore Browser Tools (tools.chinmaypatil.com) - a suite of privacy-first client-side utilities, systems engineering, DevOps pipeline automations, and technical papers.',
		url: 'https://chinmaypatil.com',
		siteName: 'Chinmay Patil Portfolio',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Chinmay Patil | Backend & DevOps Engineer',
		description: 'Portfolio of Chinmay Patil, Software Engineer & Backend Developer. Explore Browser Tools (tools.chinmaypatil.com) - a suite of privacy-first client-side utilities, systems engineering, DevOps pipeline automations, and technical papers.',
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
			<head>
				{/* Google AdSense */}
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3402392908285195"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
				{/* Google Analytics */}
				{process.env.NEXT_PUBLIC_GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
							`}
						</Script>
					</>
				)}
				{/* Microsoft Clarity */}
				{process.env.NEXT_PUBLIC_CLARITY_ID && (
					<Script id="microsoft-clarity" strategy="afterInteractive">
						{`
							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");
						`}
					</Script>
				)}
			</head>
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
