"use client"
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background min-h-screen flex justify-center items-center px-2 sm:px-0">
			<div className="flex flex-col-reverse sm:gap-2 sm:grid sm:grid-cols-[3fr_2fr] max-w-6xl w-full h-dvh">
				<div className="flex flex-col  pt-32 sm:px-4 ">
					<h1
						className="text-2xl sm:text-[42px] font-bold text-gray-50 font-anton mb-8 leading-[1.3] sm:leading-[1.15] tracking-wide sm:tracking-[0.04em] [word-spacing:0.04em] sm:[word-spacing:0.08em]">
						I&#39;m Chinmay Patil. A Full Stack Developer.
					</h1>
					<h1 className="font-inter text-base sm:text-lg text-gray-200 leading-[1.7] sm:leading-[1.5] tracking-normal sm:tracking-wide [word-spacing:0.02em] sm:[word-spacing:0.04em]">
						I&#39;m Chinmay Patil. I am a passionate developer.
						Here is a link <span className="text-text-links"><a href="https://github.com/ChinmayOnGithub" target="_blank">Github</a></span>
					</h1>
				</div>
				<div className="flex flex-col items-center  pt-8 sm:pt-32 px-4 sm:px-8 pb-8 sm:pb-0">
					<div className="sm:w-92 w-64">
						<Image
						src="/chinmaypatil.jpg"
						width={300}
						height={300}
						alt="Chinmay Patil"
						className="rounded-2xl bg-secondary sm:w-92 sm:h-92 item-center" />
					<div className="flex flex-row items-center w-full gap-2">
						<div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
							<button
								className="w-full bg-secondary flex-11 text-white font-semibold py-2 rounded-xl shadow-md transition-colors duration-200 hover:bg-accent hover:text-secondary focus:outline-none"
								onClick={() => window.open('/resume.pdf', '_blank')}
							>
								View Resume
							</button>
							<button
								className="w-full flex flex-6 items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl py-2 shadow-md transition-colors duration-200 hover:from-green-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-400/40"
								onClick={() => {
									const link = document.createElement('a');
									link.href = '/resume.pdf';
									link.download = 'ChinmayPatil_Resume.pdf';
									document.body.appendChild(link);
									link.click();
									document.body.removeChild(link);
								}}
								title="Download Resume"
							>
								<Image
									src="/download.svg"
									alt="Download"
									width={20}
									height={20}
									className="mr-2"
								/>
								<span className="font-medium text-sm">Download</span>
							</button>
						</div>
					</div>
					</div>
					<div className="flex flex-row items-center w-fit sm:w-92 gap-2 mt-4 text-text-secondary">
						<Image width={24} height={24} src="/mail.svg" alt="mail" className="w-6 h-6" />
						<h1>chinmaydpatil09@gmail.com</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
