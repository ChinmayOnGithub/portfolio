"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export function Projects() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const projects = [
    {
      title: 'Stremora | Cloud Video Storage Platform',
      period: 'Jun 2025',
      association: 'Personal Project',
      description:
        'Built a secure backend for video upload, storage and streaming using Express and MongoDB. Integrated Cloudinary for optimized media handling with secure, time-bound URLs, reliably supporting video uploads up to ~50MB. Deployed on AWS EC2 behind NGINX reverse proxy with HTTPS termination. Containerized backend using Docker, reducing manual environment setup from ~20 minutes to under 1 minute.',
      skills: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Docker', 'NGINX', 'AWS EC2'],
      link: 'https://github.com/ChinmayOnGithub/stremora-backend',
    },
    {
      title: 'VerifyHub | Blockchain Certificate Verification',
      period: 'Mar 2025',
      association: 'Personal Project',
      description:
        'Developed Solidity smart contracts to validate certificates using SHA-256 hashing. Used IPFS (Pinata) for decentralized, content-addressable certificate storage. Built verification APIs supporting QR-based and short-code lookups. Tested and validated workflow in local blockchain, reducing certificate verification to a single hash comparison.',
      skills: ['Solidity', 'Truffle', 'Ganache', 'Pinata/IPFS', 'MERN', 'Docker'],
      link: 'https://github.com/ChinmayOnGithub/verifyhub-backend',
    },
    {
      title: 'Compresso | Image Compression Engine',
      period: 'Jan 2025',
      association: 'Personal Project',
      description:
        'Implemented a Vector Quantization compressor with adaptive codebooks (32–256 entries). Achieved ~75% file size reduction with minimal visual degradation. Improved encoding performance using multithreaded tile processing across CPU cores, reaching roughly 1.5× faster throughput compared to single-threaded version. Designed full training, encoding and decoding workflow with Swing-based visualization UI.',
      skills: ['Java', 'Swing', 'Multi-threading', 'Vector Quantization'],
      link: 'https://github.com/ChinmayOnGithub/vector-quantization',
    },
  ];

  return (
    <Card className={isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className={`border-b last:border-0 pb-6 last:pb-0 ${isDark ? 'border-zinc-800' : 'border-slate-300'}`}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`font-semibold text-lg flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isDark ? 'text-zinc-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} title="transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{project.period}</p>
              </div>
            </div>

            <p className={`text-sm mb-3 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Associated with {project.association}</p>

            <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className={isDark ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-slate-200 text-slate-700 border-slate-300'}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
