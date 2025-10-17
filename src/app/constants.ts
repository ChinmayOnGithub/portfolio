// src/app/constants.ts
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
}

export const projects: Project[] = [
  {
    id: 'stremora',
    name: 'Stremora',
    description: 'Cloudinary based online video platform.',
    longDescription: 'Stremora is a modern video streaming platform that revolutionizes content consumption with cutting-edge web technologies. Built with Next.js and powered by Cloudinary\'s robust media infrastructure, it delivers a Netflix-like experience with seamless video processing, adaptive streaming, and intelligent content delivery. The platform features user authentication, personalized recommendations, and real-time engagement tools.',
    logo: '/project-logos/stremora.svg',
    logoLight: '/project-logos/stremora-light.svg',
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
      'https://placehold.co/800x450/2a2a2a/ff4500?text=🎬+Stremora+Hero',
      'https://placehold.co/800x450/1f1f1f/ff6b35?text=📊+Dashboard+View',
      'https://placehold.co/800x450/252525/ff8c42?text=▶️+Video+Player',
      'https://placehold.co/800x450/1a1a1a/ffaa5e?text=📱+Mobile+Interface'
    ],
    category: 'web',
    status: 'completed',
    year: 2024
  },
  {
    id: 'verifyhub',
    name: 'VerifyHub',
    description: 'Blockchain based certification verification.',
    longDescription: 'VerifyHub transforms digital credential verification through blockchain technology, creating an immutable and transparent system for educational certificates. Built on Ethereum, it eliminates fraud and provides instant verification for institutions, employers, and certificate holders. The platform features smart contracts for automated verification, IPFS for decentralized storage, and a user-friendly interface for seamless certificate management.',
    logo: '/project-logos/verifyhub.svg',
    logoLight: '/project-logos/verifyhub-light.svg',
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
      'https://placehold.co/800x450/2a2a2a/ff4500?text=🔐+VerifyHub+Hero',
      'https://placehold.co/800x450/1f1f1f/ff6b35?text=🏛️+Institution+Dashboard',
      'https://placehold.co/800x450/252525/ff8c42?text=✅+Verification+Interface',
      'https://placehold.co/800x450/1a1a1a/ffaa5e?text=📜+Digital+Certificate'
    ],
    category: 'web',
    status: 'completed',
    year: 2023
  },
  {
    id: 'Compresso',
    name: 'Compresso',
    description: 'Java-based vector quantization compression tool.',
    longDescription: 'VQCompress is an advanced image compression desktop application that implements Vector Quantization algorithms for efficient image processing. Built entirely in Java with Swing UI, it provides researchers and developers with a powerful tool for image compression analysis. The application features multiple compression algorithms, real-time preview capabilities, and comprehensive compression metrics for academic and professional use.',
    logo: '/project-logos/compresso.svg',
    logoLight: '/project-logos/vqcompress-light.svg',
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
      'https://placehold.co/800x450/2a2a2a/ff4500?text=🗜️+VQCompress+Main',
      'https://placehold.co/800x450/1f1f1f/ff6b35?text=⚙️+Compression+Interface',
      'https://placehold.co/800x450/252525/ff8c42?text=📈+Analysis+Results',
      'https://placehold.co/800x450/1a1a1a/ffaa5e?text=📦+Batch+Processing'
    ],
    category: 'desktop',
    status: 'completed',
    year: 2023
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};