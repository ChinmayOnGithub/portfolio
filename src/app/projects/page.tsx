"use client"

import Image from "next/image";

const projects = [
  {
    logo: "/project-logos/stremora.svg",
    name: "Stremora",
    description: "Cloudinary based online video platform."
  },
  {
    logo: "/logos/project2.svg",
    name: "Project Two",
    description: "Description for project two."
  },
  {
    logo: "/logos/project3.svg",
    name: "Project Three",
    description: "Description for project three."
  },
  {
    logo: "/logos/project4.svg",
    name: "Project Four",
    description: "Description for project four."
  },
  {
    logo: "/logos/project5.svg",
    name: "Project Five",
    description: "Description for project five."
  },
  {
    logo: "/logos/project6.svg",
    name: "Project Six",
    description: "Description for project six."
  },
];

export default function Projects() {
  return (
    <div className="bg-background min-h-screen w-full flex justify-center px-2 sm:px-4 py-16 sm:py-32">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
          I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <div key={i} className="rounded-xl bg-secondary/80 p-4 sm:p-5 flex items-center gap-3 sm:gap-4 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-700 flex items-center justify-center">
                <Image src={project.logo} alt={project.name + ' logo'} width={36} height={36} className="object-contain w-7 h-7 sm:w-9 sm:h-9" />
              </div>
              <div>
                <h2 className="font-semibold text-base sm:text-lg mb-1">{project.name}</h2>
                <p className="text-gray-400 text-xs sm:text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
