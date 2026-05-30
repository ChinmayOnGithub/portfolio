"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import Link from 'next/link';

export function Projects() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  
  const projects = [
    {
      id: 'stremora',
      title: 'Stremora | Cloud Video Storage Platform',
      period: 'Jun 2025',
      association: 'Personal Project',
      description:
        'Built a secure backend for video upload, storage and streaming using Express and MongoDB. Integrated Cloudinary for optimized media handling with secure, time-bound URLs, reliably supporting video uploads up to ~50MB. Deployed on AWS EC2 behind NGINX reverse proxy with HTTPS termination. Containerized backend using Docker, reducing manual environment setup from ~20 minutes to under 1 minute.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Docker', 'NGINX', 'AWS EC2'],
      link: 'https://github.com/ChinmayOnGithub/stremora-backend',
    },
    {
      id: 'verifyhub',
      title: 'VerifyHub | Blockchain Certificate Verification',
      period: 'Mar 2025',
      association: 'Personal Project',
      description:
        'Developed Solidity smart contracts to validate certificates using SHA-256 hashing. Used IPFS (Pinata) for decentralized, content-addressable certificate storage. Built verification APIs supporting QR-based and short-code lookups. Tested and validated workflow in local blockchain, reducing certificate verification to a single hash comparison.',
      skills: ['Solidity', 'Truffle', 'Ganache', 'Pinata/IPFS', 'MERN', 'Docker'],
      link: 'https://github.com/ChinmayOnGithub/verifyhub-backend',
    },
    {
      id: 'compresso',
      title: 'Compresso | Image Compression Engine',
      period: 'Jan 2025',
      association: 'Personal Project',
      description:
        'Implemented a Vector Quantization compressor with adaptive codebooks (32–256 entries). Achieved ~75% file size reduction with minimal visual degradation. Improved encoding performance using multithreaded tile processing across CPU cores, reaching roughly 1.5× faster throughput compared to single-threaded version. Designed full training, encoding and decoding workflow with Swing-based visualization UI.',
      skills: ['Java', 'Swing', 'Multi-threading', 'Vector Quantization'],
      link: 'https://github.com/ChinmayOnGithub/vector-quantization',
    },
  ];

  const getSkillStyle = () => {
    return 'vintage-badge';
  };

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <CardTitle className="text-lg font-bold font-cormorant text-[var(--text-color)]">Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-[var(--border-color)] last:border-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold font-cormorant text-lg flex items-center gap-2 text-[var(--text-color)]">
                  {project.title}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--meta-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className="text-xs font-serif italic text-[var(--meta-color)]">{project.period} · {project.association}</p>
              </div>
            </div>

            <p className="text-sm mb-4 leading-relaxed font-serif text-[var(--text-color)]/95">{project.description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-serif">
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`text-xs px-2.5 py-0.5 transition-all shadow-none ${getSkillStyle()}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="vintage-btn h-8 px-3 text-xs inline-flex items-center gap-1.5 font-bold tracking-wider shrink-0 transition-all"
              >
                <span>Read Architecture &amp; Docs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
