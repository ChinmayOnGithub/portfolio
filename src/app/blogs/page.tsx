"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { BlogCard } from '@/components/blog/BlogCard';

function BlogsPageContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const blogPosts = [
    {
      slug: 'stremora-cloud-video-platform',
      title: 'Building Stremora: A Self-Hostable Cloud Video Platform',
      excerpt: 'How I built a secure, scalable video storage and streaming backend using Node.js, Express, MongoDB, and Cloudinary, deployed on AWS EC2 with Docker.',
      date: 'June 15, 2025',
      readTime: '8 min read',
      tags: ['Backend', 'Node.js', 'Docker', 'AWS', 'MongoDB'],
      coverImage: '/project-logos/stremora.svg',
    },
    {
      slug: 'verifyhub-blockchain-certificates',
      title: 'VerifyHub: Building a Blockchain-Based Certificate Verification System',
      excerpt: 'How I built a decentralized certificate verification system using Solidity smart contracts, IPFS, and the MERN stack to ensure tamper-proof digital credentials.',
      date: 'March 20, 2025',
      readTime: '10 min read',
      tags: ['Blockchain', 'Solidity', 'IPFS', 'Web3', 'Smart Contracts'],
      coverImage: '/project-logos/verifyhub.svg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-6">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Latest Articles
        </h2>
        <p className={`${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
          Deep dives into backend development, DevOps, system design, and building scalable applications.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className={`mt-8 rounded-lg border p-6 text-center ${
        isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'
      }`}>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          More Articles Coming Soon
        </h3>
        <p className={`mb-4 text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
          I'm working on creating quality technical content. Topics include:
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {['System Design', 'Microservices', 'Kubernetes', 'Database Optimization', 'API Design', 'CI/CD'].map((topic) => (
            <span
              key={topic}
              className={`px-3 py-1 rounded text-xs ${
                isDark 
                  ? 'bg-zinc-800 text-zinc-300' 
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <ResumeThemeProvider>
      <BlogLayout>
        <BlogsPageContent />
      </BlogLayout>
    </ResumeThemeProvider>
  );
}
