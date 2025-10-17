'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectById } from '../../constants';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { resolvedTheme } = useTheme();
  const [resolvedParams, setResolvedParams] = React.useState<{ id: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`min-h-screen font-sans relative ${isDark ? 'bg-[#0d1117] text-[#e6edf3]' : 'bg-white text-black'
      }`}>
      {/* Modern UI Light Effect for Dark Mode */}
      {isDark && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Subtle light coming from top-right corner */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-orange-500/6 via-purple-500/3 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          {/* Secondary light from bottom-left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-blue-500/4 via-cyan-500/2 to-transparent rounded-full blur-3xl transform -translate-x-1/6 translate-y-1/6"></div>
        </div>
      )}
      {/* Wikipedia-style container */}
      <div className="max-w-[1200px] mx-auto px-4 pt-20 pb-8">

        {/* Article header with disambiguation */}
        <div className="mb-6">
          <p className={`text-sm mb-2 ${isDark ? 'text-[#7d8590]' : 'text-[#54595d]'}`}>
            From Chinmay Patil&apos;s Portfolio
          </p>
          <div className={`text-sm p-3 mb-4 border-l-4 ${isDark
            ? 'bg-[#161b22] border-[#30363d] text-[#7d8590]'
            : 'bg-[#f8f9fa] border-[#a2a9b1] text-[#54595d]'
            }`}>
            This article is about the {project.category} application. For other projects, see{' '}
            <Link href="/" className={isDark ? 'text-[#58a6ff]' : 'text-[#0645ad]'}>
              Portfolio (disambiguation)
            </Link>.
          </div>
        </div>

        {/* Main title */}
        <h1 className={`text-3xl font-serif mb-1 pb-1 border-b-3 ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
          }`} style={{ fontFamily: 'Georgia, serif', borderBottomWidth: '1px' }}>
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          <span className={`px-2 py-1 text-xs border rounded ${isDark
            ? 'bg-[#21262d] border-[#30363d] text-[#7d8590]'
            : 'bg-[#f8f9fa] border-[#a2a9b1] text-[#54595d]'
            }`}>
            Article
          </span>
          <span className={`px-2 py-1 text-xs border rounded ${isDark
            ? 'bg-[#21262d] border-[#30363d] text-[#7d8590]'
            : 'bg-[#f8f9fa] border-[#a2a9b1] text-[#54595d]'
            }`}>
            Talk
          </span>
        </div>

        <div className="flex">
          {/* Main content */}
          <div className="flex-1 pr-6">

            {/* Opening paragraph */}
            <div className="mb-6">
              <p className="text-base leading-relaxed mb-4">
                <strong>{project.name}</strong> is a {project.category} application developed in {project.year}.
                {project.longDescription}
              </p>
            </div>

            {/* Table of Contents */}
            <div className={`float-left mr-6 mb-4 p-4 border ${isDark
              ? 'bg-[#161b22] border-[#30363d]'
              : 'bg-[#f8f9fa] border-[#a2a9b1]'
              }`} style={{ width: '250px' }}>
              <div className={`text-center font-bold mb-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'
                }`}>
                Contents
              </div>
              <ol className={`text-sm space-y-1 ${isDark ? 'text-[#58a6ff]' : 'text-[#0645ad]'
                }`}>
                <li><a href="#overview" className="hover:underline">1 Overview</a></li>
                <li><a href="#features" className="hover:underline">2 Features</a></li>
                <li><a href="#technical" className="hover:underline">3 Technical implementation</a>
                  <ol className="ml-4 mt-1 space-y-1">
                    <li><a href="#architecture" className="hover:underline">3.1 Architecture</a></li>
                    <li><a href="#technologies" className="hover:underline">3.2 Technologies</a></li>
                  </ol>
                </li>
                <li><a href="#development" className="hover:underline">4 Development process</a></li>
                <li><a href="#gallery" className="hover:underline">5 Gallery</a></li>
                <li><a href="#references" className="hover:underline">6 References</a></li>
              </ol>
            </div>

            {/* Overview Section */}
            <section id="overview" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Overview
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {project.id === 'stremora' &&
                  `${project.name} represents a modern approach to video streaming platforms, combining the scalability of cloud-based infrastructure with user-centric design principles. The platform was conceived to address the growing demand for high-quality video content delivery while maintaining optimal performance across diverse network conditions and device capabilities.`
                }
                {project.id === 'verifyhub' &&
                  `${project.name} addresses the critical need for tamper-proof digital credential verification in educational and professional contexts. By leveraging blockchain technology, the platform ensures the immutability and authenticity of certificates while providing instant verification capabilities that eliminate the need for manual verification processes.`
                }
                {project.id === 'vqcompress' &&
                  `${project.name} implements advanced Vector Quantization algorithms for efficient image compression, serving as both a practical tool for researchers and a demonstration of sophisticated compression techniques. The application provides comprehensive analysis capabilities while maintaining an intuitive user interface suitable for both academic and professional use.`
                }
              </p>
              <p className="text-base leading-relaxed">
                The development of {project.name} began as a response to specific challenges in the {project.category} application domain,
                incorporating modern software engineering practices and industry-standard technologies to deliver a robust and scalable solution.
              </p>
            </section>

            {/* Features Section */}
            <section id="features" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Features
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {project.name} incorporates several key features designed to enhance user experience and operational efficiency:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-base leading-relaxed">
                    <strong>{feature.split(' ')[0]} {feature.split(' ')[1] || ''}:</strong> {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Implementation */}
            <section id="technical" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Technical implementation
              </h2>

              <h3 id="architecture" className={`text-xl font-serif mb-3 ${isDark ? 'text-[#e6edf3]' : 'text-black'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Architecture
              </h3>
              <p className="text-base leading-relaxed mb-4">
                {project.id === 'stremora' &&
                  `The ${project.name} architecture follows a modern full-stack approach, utilizing Next.js 14 with the App Router for server-side rendering and optimal SEO performance. The frontend implements React Server Components for improved performance, while the backend integrates with Cloudinary's comprehensive media management API for video processing, storage, and delivery optimization.`
                }
                {project.id === 'verifyhub' &&
                  `${project.name} employs a decentralized architecture built on Ethereum blockchain infrastructure. Smart contracts written in Solidity handle certificate issuance and verification logic, while IPFS (InterPlanetary File System) provides distributed storage for certificate metadata and associated documents. The frontend React application interfaces with the blockchain through Web3.js and MetaMask integration.`
                }
                {project.id === 'vqcompress' &&
                  `The ${project.name} architecture is built on Java's Swing framework, providing a native desktop experience with cross-platform compatibility. The application implements a multi-layered architecture separating the user interface, compression algorithms, and file management systems. Vector Quantization algorithms are implemented using optimized mathematical libraries for efficient processing.`
                }
              </p>

              <h3 id="technologies" className={`text-xl font-serif mb-3 ${isDark ? 'text-[#e6edf3]' : 'text-black'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Technologies
              </h3>
              <p className="text-base leading-relaxed mb-4">
                The technology stack for {project.name} includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <div key={tech} className={`p-2 border text-sm ${isDark
                    ? 'bg-[#21262d] border-[#30363d] text-[#e6edf3]'
                    : 'bg-[#f8f9fa] border-[#a2a9b1] text-black'
                    }`}>
                    {tech}
                  </div>
                ))}
              </div>
            </section>

            {/* Development Process */}
            <section id="development" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Development process
              </h2>
              <p className="text-base leading-relaxed mb-4">
                The development of {project.name} followed an iterative approach, incorporating user feedback and performance optimization throughout the development cycle.
              </p>

              <h3 className={`text-xl font-serif mb-3 ${isDark ? 'text-[#e6edf3]' : 'text-black'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Challenges and solutions
              </h3>
              <p className="text-base leading-relaxed mb-4">
                {project.id === 'stremora' &&
                  `Key development challenges included implementing efficient video streaming protocols, managing large file uploads, and ensuring consistent performance across varying network conditions. These were addressed through the implementation of adaptive bitrate streaming, progressive loading mechanisms, and comprehensive caching strategies using React Query for optimal data management.`
                }
                {project.id === 'verifyhub' &&
                  `Primary challenges involved optimizing blockchain transaction costs, ensuring smart contract security, and creating an intuitive interface for users unfamiliar with Web3 technologies. Solutions included implementing batch processing for cost optimization, comprehensive smart contract testing, and developing clear visual feedback systems for transaction states.`
                }
                {project.id === 'vqcompress' &&
                  `Development challenges centered on implementing efficient Vector Quantization algorithms, managing memory usage for large image files, and creating responsive user interfaces for real-time processing feedback. These were resolved through optimized algorithm implementation, streaming data processing, and multi-threaded architecture to prevent UI blocking during intensive operations.`
                }
              </p>
            </section>

            {/* Gallery */}
            <section id="gallery" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <div key={index} className={`border ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'
                    }`}>
                    <img
                      src={image}
                      alt={`${project.name} screenshot ${index + 2}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`p-2 text-sm text-center ${isDark ? 'bg-[#21262d] text-[#7d8590]' : 'bg-[#f8f9fa] text-[#54595d]'
                      }`}>
                      {project.id === 'stremora' && index === 0 && "Dashboard interface showing content management"}
                      {project.id === 'stremora' && index === 1 && "Video player with adaptive streaming controls"}
                      {project.id === 'stremora' && index === 2 && "Mobile-responsive design implementation"}
                      {project.id === 'verifyhub' && index === 0 && "Institution dashboard for certificate management"}
                      {project.id === 'verifyhub' && index === 1 && "Certificate verification interface"}
                      {project.id === 'verifyhub' && index === 2 && "Digital certificate display with blockchain verification"}
                      {project.id === 'vqcompress' && index === 0 && "Main compression interface with real-time preview"}
                      {project.id === 'vqcompress' && index === 1 && "Compression analysis and quality metrics"}
                      {project.id === 'vqcompress' && index === 2 && "Batch processing interface for multiple files"}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section id="references" className="mb-8">
              <h2 className={`text-2xl font-serif mb-4 pb-1 border-b ${isDark ? 'text-white border-[#30363d]' : 'text-black border-[#a2a9b1]'
                }`} style={{ fontFamily: 'Georgia, serif' }}>
                References
              </h2>
              <ol className="list-decimal ml-6 space-y-2 text-sm">
                <li>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className={isDark ? 'text-[#58a6ff]' : 'text-[#0645ad]'}>
                    &quot;{project.name} Source Code Repository&quot;
                  </a>. GitHub. Retrieved {new Date().getFullYear()}.
                </li>
                {project.liveUrl && (
                  <li>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className={isDark ? 'text-[#58a6ff]' : 'text-[#0645ad]'}>
                      &quot;{project.name} Live Application&quot;
                    </a>. Retrieved {new Date().getFullYear()}.
                  </li>
                )}
                <li>
                  &quot;Portfolio Projects Overview&quot;. Chinmay Patil. {project.year}.
                </li>
              </ol>
            </section>
          </div>

          {/* Wikipedia-style infobox */}
          <div className="w-80 flex-shrink-0">
            <div className={`border p-4 ${isDark
              ? 'bg-[#161b22] border-[#30363d]'
              : 'bg-[#f8f9fa] border-[#a2a9b1]'
              }`}>
              <div className={`text-center font-bold mb-3 ${isDark ? 'text-[#e6edf3]' : 'text-black'
                }`}>
                {project.name}
              </div>

              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full mb-3 border"
              />

              <div className={`text-xs text-center mb-3 ${isDark ? 'text-[#7d8590]' : 'text-[#54595d]'
                }`}>
                {project.name} main interface
              </div>

              <table className="w-full text-sm">
                <tbody>
                  <tr className={`border-b ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'}`}>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Developer
                    </td>
                    <td className={`py-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Chinmay Patil
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'}`}>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Initial release
                    </td>
                    <td className={`py-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      {project.year}
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'}`}>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Development status
                    </td>
                    <td className={`py-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'}`}>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Type
                    </td>
                    <td className={`py-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)} application
                    </td>
                  </tr>
                  <tr className={`border-b ${isDark ? 'border-[#30363d]' : 'border-[#a2a9b1]'}`}>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      License
                    </td>
                    <td className={`py-2 ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      MIT License
                    </td>
                  </tr>
                  <tr>
                    <td className={`py-2 font-bold ${isDark ? 'text-[#e6edf3]' : 'text-black'}`}>
                      Website
                    </td>
                    <td className="py-2">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className={isDark ? 'text-[#58a6ff]' : 'text-[#0645ad]'}>
                          Official site
                        </a>
                      ) : (
                        <span className={isDark ? 'text-[#7d8590]' : 'text-[#54595d]'}>
                          Repository only
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}