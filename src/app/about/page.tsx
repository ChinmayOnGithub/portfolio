"use client"
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background min-h-screen flex justify-center items-center px-2 sm:px-0">
			<div className="flex flex-col-reverse sm:gap-2 sm:grid sm:grid-cols-[3fr_2fr] bg-secondary max-w-6xl w-full h-dvh">
				<div className="flex flex-col  pt-32 sm:px-4 ">
					<h1
						className="text-2xl sm:text-[42px] font-bold text-gray-50 font-anton mb-8 leading-[1.3] sm:leading-[1.15] tracking-wide sm:tracking-[0.04em] [word-spacing:0.04em] sm:[word-spacing:0.08em]">
						Chinmay Patil. A Full Stack Developer.
					</h1>
					<h1 className="font-inter text-base sm:text-lg text-gray-200 leading-[1.7] sm:leading-[1.5] tracking-normal sm:tracking-wide [word-spacing:0.02em] sm:[word-spacing:0.04em]">
						I&#39;m Chinmay Patil. I am a passionate developer.
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
						<button
							className="bg-yellow-600/90 flex-11 h-fit rounded-lg text-gray-50 font-bold py-2 px-4 mt-4 hover:bg-yellow-600 transition-colors duration-300"
							onClick={() => window.open('/resume.pdf', '_blank')}
						>
							view resume
						</button>
						<button
							className="flex-1 bg-green-800  h-fit rounded-lg  font-bold py-2 px-4 mt-4"
							onClick={() => {
								const link = document.createElement('a');
								link.href = '/resume.pdf';
								link.download = 'ChinmayPatil_Resume.pdf';
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}
						>
							<Image src="/download.svg" alt="Download" width={20} height={20} className="inline-block mr-1 items-center" />
						</button>
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
