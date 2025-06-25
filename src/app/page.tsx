"using client"
// import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-background min-h-screen flex justify-center items-center">
			<div className="grid grid-cols-[2fr_1fr] bg-secondary max-w-6xl w-full min-h-screen">
				<div className=" pt-32 px-4">
					<h1 className="text-[36px] font-bold text-gray-50 font-anton leading-tight tracking-normal [word-spacing:0.002em] mb-4">
						Fullstack Web Developer
					</h1>
					<h1 className="font-inter">
						I&#39;m Chinmay Patil. I am a passionate developer.
					</h1>
				</div>
				<div className="flex flex-col items-center pt-32 px-4">
					{/* Right column content */}
				</div>
			</div>
		</div>

	);
}
