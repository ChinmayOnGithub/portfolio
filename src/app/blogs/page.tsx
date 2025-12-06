"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { BlogHeader } from '@/components/resume/BlogHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <BlogHeader />
      
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Latest Articles
          </h2>
          <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
            Deep dives into backend development, DevOps, system design, and building scalable applications.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blogs/${post.slug}`}>
              <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200'
              }`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Cover Image */}
                    <div className={`md:w-64 h-48 md:h-auto flex items-center justify-center ${
                      isDark ? 'bg-zinc-800' : 'bg-slate-100'
                    }`}>
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-32 h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {post.title}
                      </h3>

                      <p className={`mb-4 line-clamp-2 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className={`${
                              isDark 
                                ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                                : 'bg-slate-100 text-slate-700 border-slate-200'
                            }`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className={`flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all ${
                        isDark ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter Section */}
        <Card className={`mt-12 ${isDark ? 'bg-gradient-to-br from-zinc-900 to-zinc-800 border-zinc-700' : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'}`}>
          <CardContent className="p-8 text-center">
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              More Articles Coming Soon
            </h3>
            <p className={`mb-6 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              I'm working on creating quality technical content about backend development, DevOps, system design, and building scalable applications.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className={`px-4 py-2 ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-200 text-slate-700'}`}>
                System Design
              </Badge>
              <Badge className={`px-4 py-2 ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-200 text-slate-700'}`}>
                Microservices
              </Badge>
              <Badge className={`px-4 py-2 ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-200 text-slate-700'}`}>
                Docker & Kubernetes
              </Badge>
              <Badge className={`px-4 py-2 ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-200 text-slate-700'}`}>
                Database Optimization
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <ResumeThemeProvider>
      <BlogsPageContent />
    </ResumeThemeProvider>
  );
}
