"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import Link from 'next/link';

export function Projects() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'web' && project.id === 'stremora') ||
      (selectedCategory === 'blockchain' && project.id === 'verifyhub') ||
      (selectedCategory === 'systems' && project.id === 'compresso');

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold font-cormorant text-[var(--text-color)]">Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="border border-[var(--border-color)] p-4 rounded-sm bg-[var(--badge-bg)]/20 space-y-4 font-sans print:hidden">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            <div className="flex-1 min-w-[200px] relative">
              <label htmlFor="catalog-search" className="block text-xs uppercase font-bold tracking-widest text-[var(--meta-color)] mb-1">
                Catalog Search Index:
              </label>
              <input
                id="catalog-search"
                type="text"
                placeholder="Search tools, skills, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] px-3 py-1.5 text-sm font-mono rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] text-[var(--text-color)] placeholder-[var(--meta-color)]/60"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--meta-color)]">
                Classification:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Cards' },
                  { id: 'web', label: 'Web/Cloud' },
                  { id: 'blockchain', label: 'Blockchain' },
                  { id: 'systems', label: 'Systems' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`text-xs px-2.5 py-1 rounded-sm border transition-all font-cormorant font-bold uppercase tracking-wider ${
                      selectedCategory === tab.id
                        ? 'bg-[var(--accent-color)] text-[var(--bg-color)] border-[var(--accent-color)] shadow-sm'
                        : 'border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--card-bg)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-[var(--border-color)] rounded-sm">
            <p className="text-base font-times italic text-[var(--meta-color)]">
              No matching ledger entries found in the archives.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group border-b border-[var(--border-color)] last:border-0 pb-6 last:pb-0 pt-4 first:pt-0 -mx-4 px-4 hover:bg-[var(--badge-bg)]/20 rounded-sm transition-all duration-300 ease-in-out"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold font-cormorant text-xl flex items-center gap-2 text-[var(--text-color)]">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--meta-color)] hover:text-[var(--accent-color)] transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-sm font-sans italic text-[var(--meta-color)]">{project.period} · {project.association}</p>
                </div>
              </div>

              <p className="text-base mb-4 leading-relaxed font-times text-[var(--text-color)]/95">{project.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-sm px-2.5 py-0.5 transition-all shadow-none ${getSkillStyle()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  className="vintage-btn h-8 px-3 text-sm inline-flex items-center gap-1.5 font-bold tracking-wider shrink-0 transition-all duration-200"
                >
                  <span>Read Architecture &amp; Docs</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
