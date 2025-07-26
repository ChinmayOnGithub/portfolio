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
	metadataBase: new URL('https://chinmaypatil.com'),
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



				{/* LINKS FIXED on the screen */}
				<div className="fixed left-12 bottom-0 flex-col justify-center items-center gap-6 hidden lg:flex">

					<div>
						<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.469 23.907L17.874 27.38C17.25 28.005 16.39 28.265 15.442 28.265C14.494 28.265 13.635 28.005 13.01 27.38L7.234 21.568C6.614 20.943 6.297 20.031 6.297 19.083C6.297 18.131 6.614 17.271 7.234 16.651L12.994 10.807C13.614 10.188 14.494 9.94803 15.442 9.94803C16.39 9.94803 17.25 10.208 17.874 10.833L21.469 14.306C22.156 14.994 23.292 14.969 24.005 14.254C24.713 13.541 24.74 12.406 24.052 11.718L20.579 8.20703C19.678 7.31603 18.547 6.70203 17.318 6.42003L20.605 3.08703C21.293 2.40003 21.272 1.26403 20.558 0.551027C19.844 -0.161973 18.709 -0.183973 18.022 0.499027L4.553 13.968C3.246 15.28 2.564 17.081 2.564 19.081C2.564 21.077 3.247 22.941 4.553 24.249L10.35 30.061C11.657 31.368 13.465 31.998 15.465 31.998C17.46 31.998 19.266 31.315 20.574 30.009L24.053 26.488C24.741 25.805 24.714 24.671 24.001 23.957C23.288 23.243 22.152 23.217 21.47 23.905L21.469 23.907ZM27.749 17.349H14.218C13.286 17.349 12.526 18.15 12.526 19.14C12.526 20.131 13.286 20.937 14.218 20.937H27.749C28.682 20.937 29.442 20.13 29.442 19.14C29.442 18.151 28.682 17.349 27.749 17.349Z" fill="#8E959F" />
						</svg>
					</div>

					<div><svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2014_11)">
							<path fillRule="evenodd" clipRule="evenodd" d="M15.8167 8.14289V9.1579C16.7959 8.54955 17.9264 8.19496 19.6441 8.19496C25.2348 8.19496 25.9505 12.3738 25.9505 16.0141V25.9431L19.4863 26V16.5038C19.4863 14.9097 18.9154 14.6071 17.8597 14.6071C16.8561 14.6071 16.2331 14.9243 16.2331 16.5038V26L9.68428 25.9431V8.14287L15.8167 8.14289ZM6.5065 8.13216V25.9925H0V8.13218H6.5065V8.13216ZM4.87987 9.75879H1.62663V24.3659H4.87987V9.7588V9.75879ZM14.19 9.76951H11.3109V24.3311L14.6065 24.3604V16.5038C14.6065 13.4376 16.6446 12.9805 17.8597 12.9805C19.3432 12.9805 21.113 13.5921 21.113 16.5038V24.3604L24.3239 24.3311V16.0141C24.3239 11.5002 23.0568 9.82157 19.6441 9.82157C17.5929 9.82157 16.7048 10.4299 15.8346 11.1619L15.6085 11.3538H14.19V9.76951ZM3.25325 0C5.04743 0 6.5065 1.45909 6.5065 3.25325C6.5065 5.04743 5.04743 6.5065 3.25325 6.5065C1.45909 6.5065 0 5.04743 0 3.25325C0 1.45909 1.45909 0 3.25325 0ZM3.25325 1.62663C2.35698 1.62663 1.62663 2.35698 1.62663 3.25325C1.62663 4.14952 2.35698 4.87987 3.25325 4.87987C4.14952 4.87987 4.87987 4.14952 4.87987 3.25325C4.87987 2.35698 4.14952 1.62663 3.25325 1.62663Z" fill="#8E959F" />
						</g>
						<defs>
							<clipPath id="clip0_2014_11">
								<rect width="26" height="26" fill="white" />
							</clipPath>
						</defs>
					</svg></div>
					<div>
						<svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M25.1573 35.4167C25.1635 34.444 25.1696 31.0679 25.1696 29.7313C25.1696 27.7996 24.5098 26.5356 23.7698 25.8958C28.3638 25.3825 33.1867 23.6327 33.1867 15.6736C33.1867 13.4121 32.39 11.5621 31.0669 10.1146C31.2788 9.59043 31.9863 7.48335 30.8613 4.63126C30.8613 4.63126 29.1329 4.0746 25.1942 6.7571C23.5458 6.29605 21.7835 6.06793 20.0308 6.05876C18.2779 6.06793 16.5158 6.29626 14.8673 6.7571C10.9285 4.0746 9.20042 4.63126 9.20042 4.63126C8.07542 7.48335 8.78292 9.59043 8.99479 10.1146C7.67167 11.5621 6.875 13.4121 6.875 15.6736C6.875 23.6327 11.6977 25.3825 16.2917 25.8958C15.5519 26.5356 14.8919 27.7996 14.8919 29.7313C14.8919 31.0679 14.8981 34.444 14.9042 35.4167M5.625 27.0833C7.69563 27.2298 8.88958 29.1115 8.88958 29.1115C10.73 32.2779 13.7183 31.3621 14.8927 30.8333" stroke="#8E959F" stroke-width="3" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
					<div className="h-[75px] w-0.5 bg-faint rounded-full"></div>
				</div>


				{/* LINKS FIXED on the screen */}

				<div className="fixed right-0 bottom-0 hidden lg:flex flex-col justify-center items-center gap-6">
					<div className="rotate-90 translate-y-[-120px] text-faint">chinmay.patil.contact@gmail.com</div>
					<div className="h-[75px] w-0.5 bg-faint rounded-full"></div>
				</div>
			</body>
		</html>
	);
}
