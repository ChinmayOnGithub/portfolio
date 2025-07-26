"use client";
import Image from "next/image";

const projects = [
	{
		logo: "/project-logos/stremora.svg",
		name: "Stremora",
		description: "Cloudinary based online video platform."
	},
	{
		logo: "/project-logos/verifyhub.svg",
		name: "VerifyHub",
		description: "Blockchain based certification vefication."
	}
];

export default function Home() {
	return (
		// Home section without any photo
		<div className="bg-background min-h-screen flex justify-center items-center flex-col">
			<div className="grid grid-cols-[2fr_1fr] max-w-6xl w-full min-h-screen bg-primary">
				<div className="pt-32 px-4">
					<p className="text-[24px] text-secondary pb-5">
						Hi, my name is
					</p>
					<div className="flex flex-col text-[64px] font-bold text-gray-50 font-inter leading-tight tracking-normal [word-spacing:0.002em] mb-4">
						<h1 className=" font-bold text-gray-50 ">
							I&apos;m <span className="hover:text-link-hover transition-colors duration-300">Chinmay Patil</span>.
						</h1>
						<h1 className="text-white/50">
							A <span className="">Full Stack</span> Developer, specialist in <span className="">React</span>.
						</h1>
					</div>

					<p className="mt-16">
						I&apos;m software developer based in Maharashtra, IN specializing in building Backend systems and more.
					</p>

					<button className="mt-12 bg-normal-button hover:bg-link-on-hover rounded-2xl p-2 flex items-center justify-center transition duration-300">
						<h1 className="mr-2 text-[24px] px-2 py-1">Let&apos;s Connect</h1>
						<div className="h-full rounded-lg flex items-center justify-center bg-white">
							<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5 27H40.5M40.5 27L29.25 15.75M40.5 27L29.25 38.25" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					</button>
				</div>

				<div className="flex flex-col items-center pt-32 px-4">
					{/* Right column content */}
				</div>
			</div>


			{/* Section 01. About */}
			<div className="flex flex-col-reverse sm:gap-2 sm:grid sm:grid-cols-[3fr_2fr] max-w-6xl w-full h-dvh">
				<div className="flex flex-col pt-32 sm:px-4">
					<h1 className="text-2xl sm:text-[42px] font-bold text-gray-50 mb-8 font-mono leading-[1.3] sm:leading-[1.15] tracking-wide sm:tracking-[0.04em] [word-spacing:0.04em] sm:[word-spacing:0.08em]">
						01. About
					</h1>
					<div className="prose prose-lg sm:prose-xl max-w-none text-secondary">
						<p className="mb-4">
							I&apos;m Chinmay Patil. I am a passionate developer. Here is a link{' '}
						</p>
						<p className="mb-4">
							Hello! I’m Chinmay Patil, a full‑stack developer based in Sangli, Maharashtra, IN.
						</p>
						<p className="mb-4">
							I love building web applications that solve real problems, from lightning‑fast UIs to rock‑solid backend services.
						</p>
						<p className="mb-4">
							I focus on writing clean, maintainable code and shipping features that users actually enjoy.
						</p>
						<p className="mb-4">
							Soon, I’ll be graduating with a B.Tech from{' '}
							<a className="text-links hover:text-link-hover" href="https://www.walchandsangli.ac.in/" target="_blank" rel="noopener noreferrer">
								Walchand College of Engineering, Sangli
							</a>
							, where I’ve honed my skills in system design and performance optimization.
						</p>
						<p className="mb-4">
							<span className="text-text-links">
								<a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer">
									Github
								</a>
							</span>
						</p>
					</div>
				</div>

				<div className="flex flex-col items-center pt-8 sm:pt-32 px-4 sm:px-8 pb-8 sm:pb-0">
					<div className="sm:w-92 w-64">
						<Image
							src="/chinmaypatil.jpg"
							width={200}
							height={200}
							alt="Chinmay Patil"
							className="rounded-none bg-secondary sm:w-92 sm:h-92 item-center"
						/>
					</div>

				</div>
			</div>

			{/* Section 02. Skills */}
			<div className="flex flex-col-reverse sm:gap-2 sm:grid sm:grid-cols-[3fr_2fr] max-w-6xl w-full h-dvh">
				<div className="flex flex-col pt-32 sm:px-4">
					<h1 className="text-[40px] font-bold font-mono">02. Skills</h1>
				</div>
				<div className="bg-black">

				</div>
			</div>


			<div className="bg-background min-h-screen w-full flex justify-center px-2 sm:px-4 py-16 sm:py-32">
				<div className="max-w-6xl w-full">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">03. Projects</h1>
					<p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
						I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{projects.map((project, i) => (
							<a
								key={i}
								href={`/blogs/${project.name.toLowerCase()}`}
								className="rounded-xl bg-secondary/80 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm transition-all duration-100 hover:bg-secondary/95 hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.015] active:scale-[0.97] focus:outline-none"
								style={{ textDecoration: 'none' }}
								tabIndex={0}
							>
								<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-700 flex items-center justify-center transition-colors duration-100 group-hover:bg-gray-600">
									<Image src={project.logo} alt={project.name + ' logo'} width={36} height={36} className="object-contain w-7 h-7 sm:w-9 sm:h-9" />
								</div>
								<div>
									<h2 className="font-semibold text-base sm:text-lg mb-1 transition-colors duration-100 group-hover:text-accent">{project.name}</h2>
									<p className="text-gray-400 text-xs sm:text-sm transition-colors duration-100 group-hover:text-gray-300">{project.description}</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
