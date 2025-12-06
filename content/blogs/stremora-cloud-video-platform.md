---
title: "Building Stremora: A Self-Hostable Cloud Video Platform"
slug: "stremora-cloud-video-platform"
date: "2025-06-15"
excerpt: "How I built a secure, scalable video storage and streaming backend using Node.js, Express, MongoDB, and Cloudinary, deployed on AWS EC2 with Docker."
coverImage: "/project-logos/stremora.svg"
tags: ["Backend", "Node.js", "Docker", "AWS", "MongoDB", "Cloudinary"]
readTime: "8 min read"
---

# Building Stremora: A Self-Hostable Cloud Video Platform

## The Problem

In today's digital age, video content is everywhere. But hosting and streaming videos efficiently while maintaining security and scalability is challenging. I wanted to build a solution that developers could self-host, with proper authentication, optimized media handling, and easy deployment.

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Media Storage**: Cloudinary
- **Authentication**: JWT
- **Containerization**: Docker
- **Web Server**: NGINX
- **Deployment**: AWS EC2

## Architecture Overview

Stremora follows a clean, modular architecture:

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   NGINX     │ (Reverse Proxy + HTTPS)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Express   │ (API Server)
└──────┬──────┘
       │
   ┌───┴───┐
   ▼       ▼
┌──────┐ ┌──────────┐
│ MongoDB│ │Cloudinary│
└────────┘ └──────────┘
```

## Key Features

### 1. Secure Video Upload

The upload endpoint handles videos up to ~50MB with proper validation:

```javascript
router.post('/upload', 
  authenticate, 
  upload.single('video'), 
  async (req, res) => {
    // Validate file type and size
    // Upload to Cloudinary
    // Store metadata in MongoDB
    // Return secure URL
  }
);
```

### 2. Time-Bound Streaming URLs

Security is crucial. All video URLs are time-bound and signed:

```javascript
const generateSecureUrl = (publicId) => {
  return cloudinary.url(publicId, {
    resource_type: 'video',
    sign_url: true,
    type: 'authenticated',
    expires_at: Date.now() + 3600000 // 1 hour
  });
};
```

### 3. JWT Authentication

Every request is authenticated using JWT tokens:

```javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
```

## Docker Deployment

One of the biggest wins was containerization. What used to take ~20 minutes of manual setup now takes under 1 minute:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

### Docker Compose Setup

```yaml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=${MONGODB_URI}
      - CLOUDINARY_URL=${CLOUDINARY_URL}
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb

  mongodb:
    image: mongo:6
    volumes:
      - mongo-data:/data/db

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - api

volumes:
  mongo-data:
```

## AWS EC2 Deployment

Deployed on AWS EC2 with NGINX as a reverse proxy:

1. **Security Groups**: Configured to allow HTTP/HTTPS traffic
2. **NGINX Configuration**: Handles SSL termination and load balancing
3. **PM2**: Keeps the Node.js process running
4. **Automated Backups**: MongoDB backups to S3

### NGINX Configuration

```nginx
server {
    listen 80;
    server_name stremora.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name stremora.example.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Performance Optimizations

### 1. Cloudinary Transformations

Videos are automatically optimized on-the-fly:

```javascript
const optimizedUrl = cloudinary.url(publicId, {
  resource_type: 'video',
  quality: 'auto',
  fetch_format: 'auto',
  streaming_profile: 'hd'
});
```

### 2. MongoDB Indexing

Proper indexing for fast queries:

```javascript
videoSchema.index({ userId: 1, createdAt: -1 });
videoSchema.index({ tags: 1 });
```

### 3. Response Caching

Implemented caching for frequently accessed data:

```javascript
const cache = new Map();

const getCachedVideo = async (videoId) => {
  if (cache.has(videoId)) {
    return cache.get(videoId);
  }
  
  const video = await Video.findById(videoId);
  cache.set(videoId, video);
  return video;
};
```

## Challenges & Solutions

### Challenge 1: Large File Uploads

**Problem**: Handling large video files without blocking the server.

**Solution**: Implemented streaming uploads with progress tracking:

```javascript
const busboy = require('busboy');

router.post('/upload', (req, res) => {
  const bb = busboy({ headers: req.headers });
  
  bb.on('file', (name, file, info) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'video' },
      (error, result) => {
        if (error) return res.status(500).json({ error });
        res.json({ url: result.secure_url });
      }
    );
    
    file.pipe(uploadStream);
  });
  
  req.pipe(bb);
});
```

### Challenge 2: Video Processing Time

**Problem**: Large videos take time to process on Cloudinary.

**Solution**: Implemented webhook notifications:

```javascript
router.post('/cloudinary-webhook', (req, res) => {
  const { notification_type, public_id } = req.body;
  
  if (notification_type === 'upload') {
    // Update video status in database
    Video.updateOne(
      { cloudinaryId: public_id },
      { status: 'ready' }
    );
  }
  
  res.sendStatus(200);
});
```

## Results

- ✅ **Upload Speed**: ~50MB videos upload in under 30 seconds
- ✅ **Deployment Time**: Reduced from 20 minutes to under 1 minute
- ✅ **Security**: JWT + time-bound URLs ensure secure access
- ✅ **Scalability**: Docker + NGINX handle concurrent requests efficiently
- ✅ **Cost**: Self-hostable, reducing cloud storage costs

## Lessons Learned

1. **Containerization is a game-changer**: Docker simplified deployment dramatically
2. **Security first**: Never expose direct file URLs; always use signed, time-bound URLs
3. **Streaming > Buffering**: Stream large files instead of loading them into memory
4. **Monitor everything**: Implement logging and monitoring from day one
5. **Documentation matters**: Good docs make self-hosting accessible

## Future Improvements

- [ ] Add video transcoding for multiple quality options
- [ ] Implement CDN integration for faster delivery
- [ ] Add real-time upload progress tracking
- [ ] Support for live streaming
- [ ] Admin dashboard for analytics

## Conclusion

Building Stremora taught me valuable lessons about backend architecture, security, and DevOps. The combination of Node.js, Docker, and cloud services creates a powerful, scalable solution that anyone can self-host.

The project is open-source and available on [GitHub](https://github.com/ChinmayOnGithub/stremora-backend). Feel free to contribute or use it for your own projects!

---

**Tech Stack Summary**: Node.js, Express, MongoDB, Cloudinary, JWT, Docker, NGINX, AWS EC2

**GitHub**: [github.com/ChinmayOnGithub/stremora-backend](https://github.com/ChinmayOnGithub/stremora-backend)
