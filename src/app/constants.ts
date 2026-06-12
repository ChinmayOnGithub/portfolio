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
    id: 'gpu-k8s-resource-management',
    name: 'GPU Resource Management System for Kubernetes',
    description: 'Fine-grained GPU allocation and intelligent autoscaling for containers.',
    longDescription: 'A comprehensive Kubernetes-based system for fractional GPU allocation and GPU-aware autoscaling that addresses critical limitations in container orchestration. The system implements a custom device plugin architecture that enables 1000 micro-slices per physical GPU with intelligent heuristic-based autoscaling, achieving significant performance improvements over standard CPU-based approaches.',
    logo: '/project-logos/gpu-k8s.svg',
    logoLight: '/project-logos/gpu-k8s.svg',
    technologies: ['Kubernetes', 'Go', 'Python', 'NVIDIA CUDA', 'NVML', 'Docker', 'Prometheus', 'Grafana', 'Flask', 'CuPy'],
    features: [
      'Custom Kubernetes Device Plugin for fractional GPU allocation',
      '1000 micro-slice architecture (0.001-1.000 precision)',
      'GPU-aware autoscaler with weighted heuristic scoring',
      'Real-time GPU utilization monitoring with NVML',
      'Prometheus/Grafana integration for metrics and alerting',
      'Mathematical validation using Freivalds algorithm',
      'Durable state management and crash recovery',
      'Consumer-grade GPU support (RTX 3050 tested)',
      'Production-ready monitoring and logging'
    ],
    githubUrl: 'https://github.com/ChinmayOnGithub/gpu-k8s-resource-manager',
    images: [
      '/projects/gpu-k8s_hero.png',
      '/projects/gpu-k8s_details.png'
    ],
    category: 'other',
    status: 'completed',
    year: 2026,
    overview: 'This project addresses two critical limitations in Kubernetes GPU resource management: inefficient whole-GPU allocation and CPU-centric autoscaling for GPU workloads. By implementing a micro-slice architecture and GPU-aware autoscaling, the system achieves substantial performance improvements while enabling fine-grained resource sharing on consumer-grade hardware.',
    architecture: 'The system follows a sidecar pattern with five main components: Device Plugin (Go), GPU Manager (Python/Flask), Custom GPU-Aware Scaler, Sidecar DaemonSet, and Workload Applications. The device plugin advertises 1000 micro-slices per GPU via Kubernetes extended resources, while the GPU manager tracks allocations using NVML. The custom scaler employs weighted heuristic scoring combining GPU utilization (30%), queue depth (45%), latency (15%), and growth rate (10%).',
    challenges: [
      {
        hurdle: 'Standard Kubernetes treats GPUs as indivisible resources, leading to significant underutilization when workloads require less than full GPU capacity.',
        resolution: 'Implemented a custom device plugin that advertises 1000 logical slices per physical GPU, enabling fractional allocation with 0.001 precision while maintaining compatibility with Kubernetes resource management.'
      },
      {
        hurdle: 'CPU-based autoscaling fails to capture GPU workload pressure, resulting in suboptimal scaling decisions and increased latency.',
        resolution: 'Developed a custom GPU-aware autoscaler using weighted heuristic scoring that considers GPU utilization, queue depth, latency metrics, and request growth rate for intelligent scaling decisions.'
      },
      {
        hurdle: 'Concurrent GPU workloads risk memory overflow and spatial interference on shared hardware without proper isolation.',
        resolution: 'Implemented software-level VRAM isolation using CuPy memory pool allocators with strict quotas, creating a reliable firewall against out-of-memory failures.'
      }
    ],
    galleryCaptions: [
      'System architecture showing Kubernetes components, custom GPU management, and hardware interactions',
      'Performance comparison demonstrating +96.7% throughput improvement over standard HPA'
    ],
    docSections: [
      {
        title: 'Micro-Slice Architecture',
        content: 'The system advertises GPU slices using Kubernetes extended resource model, representing each physical GPU as 1000 allocatable units. Pods request fractional access by specifying slice counts in resource requirements, maintaining compatibility with Kubernetes scheduler while enabling fine-grained allocation.'
      },
      {
        title: 'Heuristic Scoring Function',
        content: 'The custom scaler computes a composite score S = w1·Ûg + w2·Q̂ + w3·L̂95 + w4·R̂ where weights are optimized for GPU workloads: 45% queue depth, 30% GPU utilization, 15% latency, 10% growth rate. EWMA smoothing prevents spurious scaling from transient spikes.'
      },
      {
        title: 'Mathematical Validation',
        content: 'Real-time correctness verification using Freivalds randomized algorithm for matrix operations (A×B=C verification in O(N²) complexity). Ampere tensor core calibration handles TF32 truncation with rtol=10⁻², atol=10⁻¹ tolerances.'
      }
    ]
  },
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
    id: 'gpu-k8s-resource-management',
    title: 'Fine-Grained GPU Resource Sharing and Intelligent Autoscaling for Kubernetes: A Micro-Slice Allocation Approach',
    category: 'Systems & Infrastructure',
    date: 'May 15, 2026',
    readTime: 15,
    summary: 'A comprehensive Kubernetes-based system for fractional GPU allocation and GPU-aware autoscaling, demonstrating +96.7% throughput improvement and 78.9% P95 latency reduction through micro-slice architecture and heuristic scoring.',
    content: 'This research presents a Kubernetes-based system addressing two critical limitations in container orchestration: inefficient whole-GPU allocation and CPU-centric autoscaling for GPU workloads. The system implements a device plugin architecture that advertises 1000 micro-slices per physical GPU, enabling fine-grained resource sharing with fractional allocations ranging from 0.01 to 1.00.',
    sections: [
      {
        title: 'Abstract & Problem Statement',
        content: 'Modern cloud computing environments increasingly rely on Graphics Processing Units (GPUs) for accelerating compute-intensive workloads such as machine learning training, scientific simulations, and data analytics. However, Kubernetes treats GPUs as indivisible resources that can only be allocated in whole-integer quantities, leading to significant GPU underutilization and increased operational costs.'
      },
      {
        title: 'System Architecture',
        content: 'The system architecture follows a sidecar pattern where the device plugin and GPU manager are co-located in the same pod, enabling reliable localhost communication. The architecture comprises five main components: Device Plugin (Go), GPU Manager (Python/Flask), Sidecar DaemonSet, Custom GPU-Aware Scaler, and Workload Applications.'
      },
      {
        title: 'Micro-Slice Allocation Mechanism',
        content: 'The Device Plugin advertises example.com/gpu-slice as a custom resource type, with 1000 micro-slices available per physical GPU. This fine-grained allocation model enables fractional GPU sharing with precision of 0.001 (1 slice) up to 1.000 (1000 slices, full GPU). When a pod requests GPU slices, the kubelet invokes the plugin\'s Allocate() method, which communicates with the GPU Manager via REST API.'
      },
      {
        title: 'GPU-Aware Autoscaling with Heuristic Scoring',
        content: 'The custom scaler employs a weighted heuristic scoring function: S = w1·Ûg + w2·Q̂ + w3·L̂95 + w4·R̂ where Ûg is GPU utilization, Q̂ is normalized queue depth, L̂95 is P95 latency fraction, and R̂ is request growth rate. Weights are optimized for GPU workloads: w1=0.30, w2=0.45, w3=0.15, w4=0.10. Queue depth receives highest weight (45%) as it provides the most direct indicator of workload pressure.'
      },
      {
        title: 'Experimental Results',
        content: 'Experimental evaluation on an NVIDIA RTX 3050 Laptop GPU using K3s Kubernetes and CUDA 12.4 demonstrates significant performance improvements over standard HPA. The custom scaler achieves 64.13 requests per second compared to HPA\'s 32.60 req/s (+96.7% throughput improvement), 49.1% reduction in average latency, and 78.9% reduction in P95 latency (from 1117.03ms to 236.08ms).'
      },
      {
        title: 'Mathematical Validation & Memory Isolation',
        content: 'The system implements real-time mathematical validation using Freivalds\' randomized algorithm for matrix multiplication correctness in O(N²) complexity. Memory isolation is enforced through CuPy\'s memory pool allocators with strict VRAM quotas, creating software-level firewalls that prevent out-of-memory failures and spatial interference between containers.'
      },
      {
        title: 'Future Work & Adaptive Tuning',
        content: 'The system establishes theoretical foundation for adaptive heuristic tuning using reinforcement learning principles. A planned enhancement would adjust scale-up and scale-down thresholds based on observed performance using reward function R = α(ΔT/Tprev) - β(ΔL/Lprev), enabling self-optimizing GPU resource management without manual threshold calibration.'
      }
    ],
    references: [
      'NVIDIA Multi-Instance GPU (MIG) Documentation - Hardware-level GPU partitioning',
      'Kubernetes Device Plugin Framework - Custom resource management API',
      'NVIDIA Multi-Process Service (MPS) - Spatial GPU resource sharing',
      'Kubernetes Horizontal Pod Autoscaler - Standard CPU-based autoscaling',
      'NVIDIA Management Library (NVML) - GPU metrics and monitoring API',
      'Freivalds\' Algorithm - Randomized matrix multiplication verification',
      'Exponential Weighted Moving Average (EWMA) - Metric smoothing techniques'
    ]
  },
  {
    id: 'stremora-cloud-video-platform',
    title: 'Stremora: Scalable Cloud Video Storage and Streaming Architecture',
    category: 'Backend & Cloud Architecture', 
    date: 'June 8, 2025',
    readTime: 12,
    summary: 'Architecting a secure, scalable cloud video platform with Express.js, MongoDB, and Cloudinary integration, supporting 50MB+ uploads with optimized streaming delivery.',
    content: 'Stremora represents a comprehensive approach to cloud-based video storage and streaming, addressing the challenges of large file handling, secure authentication, and scalable deployment in cloud environments. The platform demonstrates production-ready patterns for media-heavy applications.',
    sections: [
      {
        title: 'Architecture Overview',
        content: 'Stremora employs a three-tier architecture with Express.js backend, MongoDB for metadata persistence, and Cloudinary for media processing. The system is containerized using Docker and deployed on AWS EC2 with NGINX reverse proxy for production-grade performance and security.'
      },
      {
        title: 'Secure Upload Pipeline',
        content: 'Large video files (~50MB) are handled through direct-to-cloud upload patterns using Cloudinary\'s secure, time-bound URLs. This approach bypasses server memory limitations and prevents API crashes during peak concurrency by offloading media processing to dedicated cloud infrastructure.'
      },
      {
        title: 'Authentication & Security',
        content: 'JWT-based authentication provides stateless security with role-based access control. The system implements secure token rotation, HTTPS-only communication, and input validation to protect against common web vulnerabilities.'
      },
      {
        title: 'Deployment & DevOps',
        content: 'Containerized deployment using Docker reduces environment setup from ~20 minutes to under 1 minute. AWS EC2 hosting with NGINX reverse proxy provides SSL termination, load balancing, and static asset serving for optimal performance.'
      },
      {
        title: 'Performance Optimization',
        content: 'Database query optimization with MongoDB indexing, CDN delivery through Cloudinary, and connection pooling ensure efficient resource utilization. The system handles concurrent video uploads while maintaining responsive API endpoints.'
      }
    ],
    references: [
      'Cloudinary Media Management API Documentation',
      'Express.js Security Best Practices and Middleware',
      'MongoDB Performance Optimization and Indexing Strategies',
      'Docker Containerization and AWS EC2 Deployment Patterns',
      'JWT Authentication and Security Implementation Guide'
    ]
  },
  {
    id: 'verifyhub-blockchain-verification',
    title: 'VerifyHub: Decentralized Certificate Verification on Ethereum',
    category: 'Blockchain & Web3',
    date: 'March 22, 2025',
    readTime: 10,
    summary: 'Building an immutable certificate verification system using Ethereum smart contracts, IPFS storage, and cryptographic hashing for tamper-proof digital credentials.',
    content: 'VerifyHub leverages blockchain technology to create an immutable, transparent system for digital credential verification. The platform eliminates certificate fraud through cryptographic validation and decentralized storage.',
    sections: [
      {
        title: 'Smart Contract Architecture',
        content: 'Solidity contracts handle certificate validation through SHA-256 cryptographic hashing. The contract design optimizes gas consumption using mapping structures and indexed events for efficient certificate lookups and batch operations.'
      },
      {
        title: 'Decentralized Storage with IPFS',
        content: 'Certificate data is stored on IPFS through Pinata nodes, ensuring content-addressable, decentralized storage. This approach provides immutable hosting while reducing on-chain storage costs and improving scalability.'
      },
      {
        title: 'Verification Workflow',
        content: 'The system supports QR-based and short-code verification methods, enabling instant validation through hash comparison. Certificate verification reduces to a single blockchain query, providing immediate authenticity confirmation.'
      },
      {
        title: 'Gas Optimization Techniques', 
        content: 'Individual contract validations are optimized through batch processing and efficient mapping structures. SHA-256 content hashes enable bulk certificate listings while minimizing transaction costs and blockchain storage requirements.'
      },
      {
        title: 'Development & Testing Environment',
        content: 'Local blockchain development using Truffle and Ganache provides controlled testing environment. Docker-based setup ensures consistent development experience and reliable contract deployment workflows.'
      }
    ],
    references: [
      'Ethereum Smart Contract Development with Solidity',
      'IPFS Decentralized Storage and Pinata Integration',
      'Truffle Framework and Ganache Local Blockchain',
      'Cryptographic Hashing and Certificate Validation',
      'Web3.js Client Integration and MetaMask Connectivity'
    ]
  },
  {
    id: 'compresso-vector-quantization',
    title: 'Compresso: High-Performance Image Compression with Vector Quantization',
    category: 'Systems Programming & Algorithms',
    date: 'January 12, 2025',
    readTime: 8,
    summary: 'Implementing advanced Vector Quantization algorithms in Java with multi-threaded optimization, achieving 75% file size reduction and 1.5× performance improvement through parallel processing.',
    content: 'Compresso demonstrates advanced algorithmic implementation and systems-level optimization for image compression. The application showcases multi-threaded design patterns, memory-efficient processing, and user interface development in Java.',
    sections: [
      {
        title: 'Vector Quantization Algorithm',
        content: 'The compression engine implements adaptive Vector Quantization with configurable codebook sizes (32-256 entries). The algorithm partitions image data into vector spaces, employing minimal Euclidean distance calculations for optimal compression ratios.'
      },
      {
        title: 'Multi-threaded Architecture',
        content: 'Performance optimization through multi-threaded tile processing across CPU cores. SwingWorker background threads handle image partitioning while dispatching sub-blocks to executor thread pools, maintaining UI responsiveness during intensive operations.'
      },
      {
        title: 'Performance Metrics',
        content: 'Achieved approximately 75% file size reduction with minimal visual degradation. Multi-threaded implementation delivers 1.5× faster throughput compared to single-threaded processing, demonstrating effective parallelization strategies.'
      },
      {
        title: 'Desktop Application Design',
        content: 'Swing-based GUI provides real-time compression preview, batch processing capabilities, and comprehensive analysis tools. The interface includes PSNR vs bit-rate visualization and detailed compression metrics for research applications.'
      },
      {
        title: 'Memory Management & Optimization',
        content: 'Efficient memory handling for large image processing through tile-based algorithms and garbage collection optimization. The system prevents UI thread blocking while processing massive pixel arrays through careful resource management.'
      }
    ],
    references: [
      'Vector Quantization Algorithms and Codebook Generation',
      'Java Multi-threading and Executor Framework Patterns',
      'Swing GUI Development and Event Dispatch Thread Management',
      'Image Processing Algorithms and Performance Optimization',
      'Memory Management in Java Applications'
    ]
  },
  {
    id: 'homelab-infrastructure',
    title: 'Designing an Isolated Homelab Infrastructure',
    category: 'DevOps & Networking',
    date: 'May 3, 2026',
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
    date: 'April 18, 2026',
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