# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, featuring a resume page, designed portfolio, and technical blog.

## 🚀 Features

- **Resume Page** (`/`) - Clean, professional resume with dark/light mode
- **Portfolio** (`/portfolio`) - Designed portfolio with interactive background and navigation
- **Technical Blog** (`/blogs`) - Blog system with sidebar navigation
- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Mode** - Theme toggle with persistent preferences
- **Fast Performance** - Optimized with Next.js 16 and Turbopack


## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Resume (homepage)
│   │   ├── portfolio/         # Portfolio page
│   │   ├── blogs/             # Blog listing and posts
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects pages
│   │   └── components/        # Portfolio-specific components
│   ├── components/
│   │   ├── resume/            # Resume components
│   │   ├── blog/              # Blog components
│   │   └── ui/                # Shared UI components
│   └── lib/                   # Utility functions
├── public/                    # Static assets
└── content/                   # Blog content (markdown)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Add your GitHub token (optional):
```
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## 📝 Content Management

### Resume Content

Edit resume data in `src/components/resume/data.ts`:
- Personal information
- Skills
- Projects
- Experience
- Education
- Certifications

### Blog Posts

Blog posts are stored in `src/app/blogs/[slug]/page.tsx` as structured data. To add a new post:

1. Add post data to the `blogData` object
2. Include title, excerpt, date, tags, and content
3. Add to the listing in `src/app/blogs/page.tsx`

## 🎨 Customization

### Colors

Theme colors are defined in Tailwind CSS. Main colors used:
- **Dark Mode**: zinc-950, zinc-900, zinc-800
- **Light Mode**: white, slate-50, slate-100
- **Accent**: Blue (blue-600, blue-400)

### Fonts

- **Sans-serif**: Inter (default)
- **Monospace**: Roboto Mono
- **Serif**: Georgia/Times New Roman (blog content)

## 📱 Routes

- `/` - Resume (homepage)
- `/portfolio` - Designed portfolio
- `/blogs` - Blog listing
- `/blogs/[slug]` - Individual blog posts
- `/about` - About page
- `/projects/[id]` - Project details
- `/problems` - Problem-solving profiles

## 🔧 Configuration

### Next.js Config

Configuration is in `next.config.mjs`. Current settings:
- MDX support
- Optimized CSS with Critters

### TypeScript

TypeScript configuration in `tsconfig.json` with strict mode enabled.

### ESLint

Linting configuration in `eslint.config.mjs` following Next.js best practices.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in `.next/` directory. Serve with:
```bash
npm start
```

## 📄 Environment Variables

Required environment variables:

- `NEXT_PUBLIC_GITHUB_TOKEN` - GitHub API token (optional, for GitHub data)


## 📝 License

Private project - All rights reserved

## 👤 Author

**Chinmay Patil**
- GitHub: [@ChinmayOnGithub](https://github.com/ChinmayOnGithub)
- LinkedIn: [chinmaydpatil](https://linkedin.com/in/chinmaydpatil)
- Email: chinmaydpatil09@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- Radix UI for accessible components
- Tailwind CSS for styling utilities


