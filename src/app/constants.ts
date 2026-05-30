// src/app/constants.ts

export interface DocSection {
  title: string;
  content: string;
  image?: string;
}

export interface ProjectChallenge {
  hurdle: string;
  resolution: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  logo: string;
  logoLight?: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: string[];
  category: 'web' | 'mobile' | 'desktop' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
  overview: string;
  architecture: string;
  challenges: ProjectChallenge[];
  galleryCaptions: string[];
  docSections?: DocSection[];
}

export const projects: Project[] = [
  {
    id: 'stremora',
    name: 'Stremora',
    description: 'Cloudinary based online video platform.',
    longDescription: 'Stremora is a modern video streaming platform that revolutionizes content consumption with cutting-edge web technologies. Built with Next.js and powered by Cloudinary\'s robust media infrastructure, it delivers a Netflix-like experience with seamless video processing, adaptive streaming, and intelligent content delivery. The platform features user authentication, personalized recommendations, and real-time engagement tools.',
    logo: '/project-logos/stremora.svg',
    logoLight: '/project-logos/stremora.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Cloudinary', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    features: [
      'Cloudinary-powered video processing and optimization',
      'Adaptive bitrate streaming for optimal quality',
      'User authentication with social login options',
      'AI-driven content recommendation engine',
      'Real-time comments and social interactions',
      'Mobile-first responsive design',
      'Advanced video analytics and insights',
      'Content creator dashboard and tools'
    ],
    githubUrl: 'https://github.com/ChinmayOnGithub/stremora',
    liveUrl: 'https://stremora.vercel.app',
    images: [
      '/projects/stremora_hero.png',
      '/projects/stremora_details.png'
    ],
    category: 'web',
    status: 'completed',
    year: 2024,
    overview: 'Stremora represents a modern approach to video streaming platforms, combining the scalability of cloud-based infrastructure with user-centric design principles. The platform was conceived to address the growing demand for high-quality video content delivery while maintaining optimal performance across diverse network conditions and device capabilities.',
    architecture: 'The Stremora platform is built on Next.js using Server Components and Server Actions to optimize server-side rendering and page loading speeds. Data persistence is managed using PostgreSQL hosted on Supabase, with Prisma serving as the Object-Relational Mapper (ORM). Secure authentication is handled via NextAuth.js. Large media file uploads and transformation streams are offloaded directly to Cloudinary, reducing server load and ensuring smooth streaming delivery.',
    challenges: [
      {
        hurdle: 'Managing huge upload streams for video clips (~50MB) caused socket blockages and API memory crashes under peak concurrency.',
        resolution: 'Configured secure, direct cloud upload integrations using time-bound secure URLs. This bypassed the Express backend for video file writes, saving server memory.'
      }
    ],
    galleryCaptions: [
      'Interactive video streaming player client showing dynamic recommendation listings'
    ],
    docSections: [
      {
        title: 'CDN Video Delivery Pipeline',
        content: 'To ensure global low-latency video streaming, assets are cached dynamically across global Edge locations. Cache headers are carefully orchestrated, reducing database lookup hits by over 80% during concurrent stream requests.'
      }
    ]
  },
  {
    id: 'verifyhub',
    name: 'VerifyHub',
    description: 'Blockchain based certification verification.',
    longDescription: 'VerifyHub transforms digital credential verification through blockchain technology, creating an immutable and transparent system for educational certificates. Built on Ethereum, it eliminates fraud and provides instant verification for institutions, employers, and certificate holders. The platform features smart contracts for automated verification, IPFS for decentralized storage, and a user-friendly interface for seamless certificate management.',
    logo: '/project-logos/verifyhub.svg',
    logoLight: '/project-logos/verifyhub.svg',
    technologies: ['React', 'Ethereum', 'Solidity', 'Web3.js', 'IPFS', 'Node.js', 'Express', 'MetaMask'],
    features: [
      'Ethereum blockchain integration for immutable records',
      'Smart contracts for automated verification',
      'IPFS decentralized storage for certificate data',
      'QR code generation for instant verification',
      'Institution management dashboard',
      'Bulk certificate issuance system',
      'Real-time verification API',
      'Mobile-optimized verification interface'
    ],
    githubUrl: 'https://github.com/ChinmayOnGithub/verifyhub',
    liveUrl: 'https://verifyhub.netlify.app',
    images: [
      '/projects/verifyhub_hero.png',
      '/projects/verifyhub_details.png'
    ],
    category: 'web',
    status: 'completed',
    year: 2023,
    overview: 'VerifyHub addresses the critical need for tamper-proof digital credential verification in educational and professional contexts. By leveraging blockchain technology, the platform ensures the immutability and authenticity of certificates while providing instant verification capabilities that eliminate the need for manual verification processes.',
    architecture: 'The VerifyHub infrastructure utilizes Solidity smart contracts deployed on the Ethereum blockchain for handling verification claims. Decentralized storage is integrated using Pinata IPFS nodes for immutable hosting of certificate data. A React-based web client routes requests via Web3.js wrappers to authenticate credentials directly against the contract state.',
    challenges: [
      {
        hurdle: 'Executing individual public contract validations on the ledger incurred significant gas consumption fees, slowing transaction responsiveness.',
        resolution: 'Implemented SHA-256 cryptographic content hashes for batch listings, storing verification hashes in structured mappings to minimize contract writes.'
      }
    ],
    galleryCaptions: [
      'Institution dashboard view for issuing and managing credentials'
    ],
    docSections: [
      {
        title: 'Smart Contract Design',
        content: 'Verification states are encapsulated in highly optimized Solidity mapping schemas. Gas optimization patterns (such as short-circuiting conditions and utilizing indexed events) are strictly followed.'
      }
    ]
  },
  {
    id: 'compresso',
    name: 'Compresso',
    description: 'Java-based vector quantization compression tool.',
    longDescription: 'VQCompress is an advanced image compression desktop application that implements Vector Quantization algorithms for efficient image processing. Built entirely in Java with Swing UI, it provides researchers and developers with a powerful tool for image compression analysis. The application features multiple compression algorithms, real-time preview capabilities, and comprehensive compression metrics for academic and professional use.',
    logo: '/project-logos/compresso.svg',
    logoLight: '/project-logos/compresso.svg',
    technologies: ['Java', 'Swing', 'AWT', 'BufferedImage', 'Vector Quantization', 'K-means', 'LBG Algorithm'],
    features: [
      'Advanced Vector Quantization compression algorithms',
      'Multiple compression quality levels and codebook sizes',
      'Batch processing for multiple image files',
      'Real-time compression preview and comparison',
      'Support for PNG, JPEG, BMP, and TIFF formats',
      'Detailed compression ratio and quality analysis',
      'Custom codebook generation and optimization',
      'Export compressed images and compression reports'
    ],
    githubUrl: 'https://github.com/ChinmayOnGithub/vqcompress',
    images: [
      '/projects/compresso_hero.png',
      '/projects/compresso_details.png'
    ],
    category: 'desktop',
    status: 'completed',
    year: 2023,
    overview: 'Compresso implements advanced Vector Quantization algorithms for efficient image compression, serving as both a practical tool for researchers and a demonstration of sophisticated compression techniques. The application provides comprehensive analysis capabilities while maintaining an intuitive user interface suitable for both academic and professional use.',
    architecture: 'The Compresso application uses a multi-layered Java structure separating GUI inputs (built with Swing/AWT components) from the vector quantization engine. The encoding process breaks image files into block tiles, dispatching work blocks dynamically to multiple CPU threads via an executor thread pool to scale throughput.',
    challenges: [
      {
        hurdle: 'Processing massive color images pixel-by-pixel caused CPU bottlenecks and locked the Swing event dispatch thread, freezing the desktop interface.',
        resolution: 'Implemented a background SwingWorker thread model that handles image partitioning and dispatches sub-blocks to a multithreaded task pool, keeping the GUI responsive.'
      }
    ],
    galleryCaptions: [
      'Detailed compression analysis panels, block parameters, and PSNR vs bit-rate curves'
    ],
    docSections: [
      {
        title: 'Vector Quantization Pipeline',
        content: 'Tiled sections of images are converted to vector spaces, matched against a generated codebook using minimal Euclidean distance calculations, and stored as quantized indices.'
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

// --- TECHNICAL PAPERS SCHEMA & REGISTRY ---
export interface PaperSection {
  title: string;
  content: string;
  image?: string;
}

export interface Paper {
  id: string;
  title: string;
  category: string;
  date: string; // "May 2026", etc.
  readTime: number; // in minutes
  summary: string;
  content: string;
  sections: PaperSection[];
  references: string[];
}

export const papers: Paper[] = [
  {
    id: 'homelab-infrastructure',
    title: 'Designing an Isolated Homelab Infrastructure',
    category: 'DevOps & Networking',
    date: 'May 2026',
    readTime: 6,
    summary: 'A detailed blueprint for setting up a secure, multi-tenant home server utilizing Linux namespaces, private subnets, reverse proxies, and local DNS.',
    content: 'Developing a localized homelab environment requires careful orchestration of system network topologies and strict resource containment. This paper presents an architectural overview of a production-grade homelab setup built entirely on Linux containers and private virtual bridges, ensuring clean operational boundaries.',
    sections: [
      {
        title: 'Network Segmentation and Isolation Bridge',
        content: 'To prevent dynamic local tests from interfering with active home LAN nodes, the infrastructure relies on a dedicated host-only virtual bridge interface managed by systemd-networkd. This bridge acts as the core gateway, routing internal container traffic through a central proxy router.'
      },
      {
        title: 'Proxy Routing and Dynamic Local DNS',
        content: 'Private micro-services are partitioned using isolated docker-compose networks. A central reverse proxy automatically intercepts host headers, dynamically terminating local secure TLS certificates so that all active administrative interfaces run strictly under end-to-end HTTPS.'
      }
    ],
    references: [
      'Linux Virtual Bridging and Namespaces RFC Documentation',
      'Traefik Reverse Proxy Configuration Guide and Header Routing Guidelines'
    ]
  },
  {
    id: 'api-reliability-patterns',
    title: 'Building Resilient APIs: Fail-Safe Engineering',
    category: 'Backend Architecture',
    date: 'Apr 2026',
    readTime: 8,
    summary: 'An exploration of API reliability mechanisms, focusing on sliding-window rate limiters, token-bucket controls, circuit breakers, and redundant data fallbacks.',
    content: 'Modern distributed backend architectures must systematically design for upstream and downstream latency spikes at every database and API integration boundary. This technical paper details design patterns used to secure backend systems against client congestion, cascading network timeouts, and thread pool depletion.',
    sections: [
      {
        title: 'Sliding-Window Rate Limiting Engine',
        content: 'Standard rate limiters often face edge-burst leakage. By adopting a sliding-window algorithm backed by high-throughput Redis sorted sets, the API gateway evaluates client quotas over a rolling 60-second window, protecting database layers from query floods.'
      },
      {
        title: 'Circuit Breaker Interceptors & Fallbacks',
        content: 'When external micro-services or payment API pathways encounter transient blockages, a local circuit breaker interceptor transitions to an open state immediately. This triggers mock cached metadata fallbacks locally, protecting worker thread pools from resource exhaustion.'
      }
    ],
    references: [
      'Sliding Window Rate Limiter Algorithmic Specifications and Redis Implementation',
      'Martin Fowler Circuit Breaker Design Patterns and Fallback Interceptor Guidelines'
    ]
  }
];

export const getPaperById = (id: string): Paper | undefined => {
  return papers.find(p => p.id === id);
};