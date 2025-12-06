"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { BlogLayout } from '@/components/blog/BlogLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Github, ExternalLink } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

// Blog post data with personal experiences
const blogData: Record<string, any> = {
  'stremora-cloud-video-platform': {
    title: 'Building Stremora: A Self-Hostable Cloud Video Platform',
    excerpt: 'My journey building a secure video streaming platform from scratch, the challenges I faced, and what I learned about backend architecture and DevOps.',
    date: 'June 15, 2025',
    readTime: '8 min read',
    tags: ['Backend', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/ChinmayOnGithub/stremora-backend',
    content: `
I wanted to build something that solved a real problem - a video platform that developers could actually self-host without dealing with complex cloud setups. Here's how I built Stremora and what I learned along the way.

## Why I Built This

I was frustrated with existing video hosting solutions. They were either too expensive, too complex, or locked you into their ecosystem. I wanted something simple that I could deploy on my own server and have full control over.

## The Tech Stack Decision

Choosing the right tools was crucial. I went with:

**Node.js + Express** because I'm comfortable with JavaScript and needed something fast to prototype with. The async nature of Node.js is perfect for handling file uploads.

**MongoDB** for flexibility. I knew the schema would evolve as I added features, and MongoDB's document model made that easy.

**Cloudinary** was a game-changer. Instead of building my own video processing pipeline, I could leverage their API for transcoding, optimization, and delivery.

**Docker** because I wanted anyone to be able to run this with a single command. No more "works on my machine" problems.

## The Biggest Challenge: File Uploads

Handling large video files was harder than I expected. My first attempt loaded entire files into memory, which crashed the server with anything over 10MB.

I learned about streaming uploads using \`busboy\`. Instead of buffering the entire file, I could pipe it directly to Cloudinary. This was a huge breakthrough - suddenly 50MB+ videos were no problem.

## Security Was Tricky

I initially just returned direct Cloudinary URLs. Bad idea. Anyone with the URL could access any video.

I implemented JWT authentication for all endpoints and time-bound signed URLs for video access. Each URL expires after an hour. It took me a while to get the signing logic right, but it was worth it.

## Docker Changed Everything

Before Docker, setting up the project took 20+ minutes:
- Install Node.js
- Install MongoDB
- Configure environment variables
- Set up NGINX
- Configure SSL certificates

With Docker Compose, it's literally one command: \`docker-compose up\`

I spent a weekend learning Docker properly, and it paid off immediately. The multi-stage build reduced my image size from 800MB to 200MB.

## Deploying to AWS EC2

This was my first time deploying a real application to production. I learned about:

**Security Groups** - Had to configure them to allow HTTP/HTTPS traffic while blocking everything else.

**NGINX** - Set it up as a reverse proxy. It handles SSL termination and serves as a load balancer.

**PM2** - Keeps the Node.js process running even if it crashes. Saved me multiple times during early testing.

## What I'd Do Differently

**Add proper logging from day one.** I spent hours debugging issues that would have been obvious with proper logs.

**Write tests earlier.** I added tests after building most features, which meant refactoring was scary.

**Use TypeScript.** I started with JavaScript, but as the codebase grew, I really missed type safety.

## The Results

- Videos upload in under 30 seconds (for ~50MB files)
- Deployment time: under 1 minute
- Self-hostable on any server
- Secure with JWT + signed URLs

## What I Learned

**Streaming is essential** for handling large files. Never load everything into memory.

**Security can't be an afterthought.** Design it in from the start.

**Docker is worth learning.** It makes deployment so much easier.

**Cloud services are powerful.** Cloudinary saved me months of work building video processing.

The project is open-source on GitHub. Feel free to use it, contribute, or just learn from the code!
    `
  },
  'verifyhub-blockchain-certificates': {
    title: 'VerifyHub: Building a Blockchain-Based Certificate Verification System',
    excerpt: 'How I learned blockchain development by building a real-world certificate verification system, and why decentralization actually matters.',
    date: 'March 20, 2025',
    readTime: '10 min read',
    tags: ['Blockchain', 'Solidity', 'IPFS', 'Web3', 'Smart Contracts', 'MERN'],
    github: 'https://github.com/ChinmayOnGithub/verifyhub-backend',
    content: `
I built VerifyHub to learn blockchain development, but it turned into something more - a real solution to certificate forgery. Here's my journey from knowing nothing about blockchain to deploying a working dApp.

## The Problem That Got Me Started

A friend's company was dealing with fake certificates. People were photoshopping PDFs and claiming credentials they didn't have. Traditional verification meant calling the issuing institution - slow and unreliable.

I thought: what if certificates were on a blockchain? Immutable, verifiable, and instant.

## Learning Solidity Was Humbling

I started with zero blockchain knowledge. Solidity looked like JavaScript but behaved completely differently.

**Everything costs gas.** My first smart contract was so inefficient it would have cost $50 to issue a single certificate on mainnet. I learned to optimize every operation.

**State is expensive.** Storing data on-chain is costly. I had to rethink my entire data model.

**Testing is crucial.** Once deployed, you can't change a smart contract. I spent more time testing than coding.

## The Smart Contract Design

After many iterations, I settled on a simple design:

Store only certificate hashes on-chain, not the actual data. This keeps gas costs low while maintaining security.

Each certificate has:
- A SHA-256 hash (unique identifier)
- IPFS hash (points to actual certificate data)
- Issuer address
- Timestamp
- Validity status

The beauty is in the simplicity. Verification is just a hash lookup - instant and cheap.

## IPFS Was a Revelation

I discovered IPFS while researching decentralized storage. It's perfect for this use case:

**Content-addressed** - Files are identified by their content, not location. If the content changes, the hash changes.

**Decentralized** - No single point of failure.

**Permanent** - With pinning services like Pinata, files stay available forever.

I store the full certificate data on IPFS and only the hash on the blockchain. Best of both worlds.

## The Development Setup

**Ganache** was my best friend during development. It's a local blockchain that:
- Gives you 10 test accounts with fake ETH
- Mines blocks instantly
- Lets you reset state anytime

I could test my contracts hundreds of times without spending real money.

**Truffle** made deployment and testing so much easier. The migration system is brilliant.

## Building the Backend API

The Express backend bridges Web3 and traditional web:

**Issuing certificates:**
1. Upload data to IPFS
2. Generate hash from certificate details
3. Call smart contract to store hash
4. Return transaction hash to user

**Verifying certificates:**
1. Query smart contract with hash
2. If valid, fetch data from IPFS
3. Display certificate details

The tricky part was handling blockchain transactions asynchronously. They're not instant like database queries.

## The QR Code Feature

This was a late addition but became the most used feature. Each certificate gets a QR code that anyone can scan to verify it instantly.

I used the \`qrcode\` library to generate codes that link to the verification page. Simple but effective.

## Challenges I Faced

**Gas optimization** - My first version used way too much gas. I learned to:
- Use bytes32 instead of strings
- Batch operations when possible
- Minimize storage operations

**IPFS reliability** - Free IPFS nodes can be slow or offline. I switched to Pinata's paid pinning service for guaranteed availability.

**User experience** - Blockchain is complex. I had to hide all the Web3 complexity from users. They shouldn't need to know what gas or transactions are.

## What Surprised Me

**Blockchain isn't always the answer.** For this use case, it's perfect. But I learned that many problems don't need blockchain.

**The community is amazing.** When I got stuck, the Ethereum and Solidity communities were incredibly helpful.

**Testing is different.** You can't just console.log() your way through debugging. I had to learn proper testing practices.

## The Results

- Certificate verification takes ~100ms
- Completely tamper-proof
- No central authority needed
- Costs pennies to issue certificates

## What I Learned

**Start simple.** My first smart contract was way too complex. The final version is 100 lines of Solidity.

**Gas matters.** Every operation costs money. Optimize ruthlessly.

**Security is hard.** I found and fixed multiple vulnerabilities during testing.

**Documentation is essential.** Smart contracts are permanent. Document everything.

## Future Plans

I want to add:
- Zero-knowledge proofs for privacy
- Multi-signature verification
- Mobile app with QR scanner
- Integration with educational institutions

The project taught me more about blockchain than any tutorial could. Building something real is the best way to learn.
    `
  }
};

function BlogPostContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const params = useParams();
  const slug = params.slug as string;

  const post = useMemo(() => blogData[slug], [slug]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Blog Post Not Found
        </h2>
        <p className={isDark ? 'text-zinc-400' : 'text-slate-600'}>
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    const codeClass = isDark ? 'bg-zinc-800 text-blue-400' : 'bg-slate-100 text-blue-600';
    
    return content
      .trim()
      .split('\n\n')
      .map(paragraph => {
        // Headers
        if (paragraph.startsWith('## ')) {
          return `<h2 class="text-xl font-bold mt-6 mb-3">${paragraph.slice(3)}</h2>`;
        }
        
        // Bold text
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
        
        // Code blocks
        paragraph = paragraph.replace(/`([^`]+)`/g, `<code class="px-1.5 py-0.5 rounded text-sm ${codeClass}">$1</code>`);
        
        // Regular paragraphs
        if (!paragraph.startsWith('<')) {
          return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
        }
        
        return paragraph;
      })
      .join('\n');
  };

  return (
    <article className="max-w-3xl">
      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className={`text-2xl lg:text-3xl font-bold mb-3 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {post.title}
        </h1>

        <p className={`text-base mb-4 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className={`text-xs ${
                isDark 
                  ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Article Content - No Card */}
      <div 
        className={`prose prose-lg max-w-none mb-8 ${
          isDark 
            ? 'prose-invert prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-code:text-blue-400' 
            : 'prose-slate prose-headings:text-slate-900 prose-p:text-slate-800 prose-strong:text-slate-900 prose-code:text-blue-600'
        }`}
        style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
      >
        <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
      </div>

      {/* GitHub Link */}
      {post.github && (
        <div className={`mt-8 p-4 rounded-lg border ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'}`}>
          <h3 className={`text-base font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Check out the project
          </h3>
          <Button
            asChild
            size="sm"
            className={`${
              isDark 
                ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-zinc-700' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
            }`}
            variant="outline"
          >
            <a href={post.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </a>
          </Button>
        </div>
      )}
    </article>
  );
}

export default function BlogPostPage() {
  return (
    <ResumeThemeProvider>
      <BlogLayout>
        <BlogPostContent />
      </BlogLayout>
    </ResumeThemeProvider>
  );
}
