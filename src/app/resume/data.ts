// Structured data for Chinmay Patil's interactive resume page

export const header = {
  name: 'Chinmay Patil',
  title: 'Backend & DevOps Engineer',
  location: 'Karad, Maharashtra',
  email: 'chinmaydpatil09@gmail.com',
  phone: '+91 8767691751',
  portfolio: 'https://www.chinmaypatil.com',
  linkedin: 'https://linkedin.com/in/chinmaydpatil',
  github: 'https://github.com/ChinmayOnGithub',
};

export const about = `Backend and DevOps focused B.Tech IT student at Walchand College of Engineering. I like designing reliable APIs, working with Linux and containers, and building small tools or homelab setups that make development smoother. Strong problem‑solving background with 800+ problems solved across LeetCode, CodeForces, and CodeChef.`;

export const education = [
  {
    degree: 'B.Tech (Information Technology)',
    institute: 'Walchand College of Engineering, Sangli',
    scoreLabel: 'CGPA',
    score: '8.37 / 10',
    period: '2022 — 2026',
  },
];

export const projects = [
  {
    title: 'Stremora | Cloud Video Storage Platform',
    href: 'https://github.com/ChinmayOnGithub/stremora-backend',
    date: 'Jun 2025',
    tech: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Docker', 'NGINX', 'AWS EC2'],
    oneLine: 'Self-hostable cloud video storage and streaming backend.',
    backendLine:
      'Designed secure upload/stream endpoints with JWT auth, Dockerized services, and NGINX-backed deployment on AWS EC2.',
  },
  {
    title: 'VerifyHub | Blockchain Certificate Verification',
    href: 'https://github.com/ChinmayOnGithub/verifyhub-backend',
    date: 'Mar 2025',
    tech: ['Solidity', 'Truffle', 'Ganache', 'IPFS (Pinata)', 'MERN', 'Docker'],
    oneLine: 'On-chain digital certificate verification with IPFS-backed storage.',
    backendLine:
      'Built Solidity contracts and verification APIs, focusing on hashing logic, IPFS integration, and Docker-based local blockchain setup.',
  },
  {
    title: 'Compresso | Image Compression Engine',
    href: 'https://github.com/ChinmayOnGithub/vector-quantization',
    date: 'Jan 2025',
    tech: ['Java', 'Swing', 'Multithreading'],
    oneLine: 'Desktop image compression tool using vector quantization.',
    backendLine:
      'Implemented multi-threaded encoding pipeline and compression core, treating it like a systems/back-end performance project.',
  },
];

export const technicalInvolvement = {
  organization: 'WLUG (Walchand Linux Users Group)',
  role: 'Member',
  duration: '2023 — 2024',
  bullets: [
    'Assisted participants during LinuxDiary and Deostro meetups with system setup and debugging.',
    'Worked extensively with Linux systems, CLI tools, and open-source workflows.',
  ],
};

export const skills = {
  left: {
    Languages: ['C++', 'Java', 'JavaScript'],
    'Backend & Web': ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'React.js', 'HTML', 'CSS', 'TailwindCSS'],
    Databases: ['MongoDB', 'MySQL'],
  },
  right: {
    Coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'OOP'],
    'Tools & Platforms': ['Git', 'GitHub', 'Linux', 'Docker', 'GitHub Actions', 'Postman', 'VS Code'],
  },
};

export const certificates = [
  {
    title: 'Red Hat Linux Fundamentals (RH104)',
    org: 'Red Hat',
    date: 'Sept 2025',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    org: 'Postman',
    date: 'Oct 2025',
  },
  {
    title: 'Hacktoberfest 2025 Contributor',
    org: 'Hacktoberfest',
    date: 'Oct 2025',
  },
];

export const achievements = [
  'Finalist, Vision CTF — ranked top 5% among 60+ teams (2024).',
  'Finalist, WCPC — national-level programming contest (2024).',
];

export const profiles = [
  {
    label: 'LeetCode',
    handle: 'chinmaydpatil09',
    rating: 'Highest Rating: 1705',
    url: 'https://leetcode.com/u/chinmaydpatil09/',
  },
  {
    label: 'CodeForces',
    handle: 'chinmaydpatil09 (Pupil)',
    rating: 'Highest Rating: 1225',
    url: 'https://codeforces.com/profile/chinmaydpatil09',
  },
  {
    label: 'CodeChef',
    handle: 'chinmaydpatil0 (2★)',
    rating: 'Highest Rating: 1528',
    url: 'https://www.codechef.com/users/chinmaydpatil0',
  },
];

export const interests = [
  'Homelabbing',
  'Linux customization',
  'Building tools',
  'Open-source contribution',
  'Competitive programming',
];

export const blogs = {
  note: 'Blogs and technical write-ups will appear here. For now, this section highlights that you are open to writing about backend, Linux, and DevOps topics.',
};

export const homelab = {
  summary:
    'Small-scale homelab experiments focused on Linux, Docker, reverse proxies, and monitoring to mirror real backend environments.',
  stacks: [
    'Docker & docker-compose for local service orchestration',
    'NGINX reverse proxy for routing and TLS termination',
    'Self-hosted services for testing (APIs, dashboards, small tools)',
    'Linux server administration: systemd services, firewall, log inspection',
  ],
};
