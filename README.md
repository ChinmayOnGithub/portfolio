# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring an interactive resume page, custom portfolio design, and technical blog.

## 🚀 Features

- **Resume Page** (`/`) - Clean, professional resume with dark/light mode and live PDF printing support.
- **Portfolio** (`/portfolio`) - Sleek, custom-designed portfolio with interactive background particle and theme effects.
- **Technical Blog** (`/blogs`) - Dynamic blog system with category indexing and smooth markdown content parsing.
- **Responsive Design** - Perfectly optimized across mobile, tablet, and desktop views.
- **Micro-Animations** - Subtle, gorgeous interactive states, spinners, and page transitions powered by Framer Motion.
- **Fast Performance** - Tailored utilizing the Next.js App Router and Turbopack compiler.

---

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router directory
│   │   ├── page.tsx           # Resume (homepage)
│   │   ├── portfolio/         # Sleek modern Portfolio page
│   │   ├── blogs/             # Technical Blog listing and single-post views
│   │   ├── about/             # Personal About details page
│   │   ├── projects/          # Dynamic Project details page
│   │   ├── problems/          # Competitive programming and problem-solving hub
│   │   └── components/        # Page-specific interface elements
│   ├── components/            # Global UI and shared components
│   │   ├── resume/            # Interactive resume modules
│   │   ├── blog/              # Blog rendering widgets
│   │   └── ui/                # Shared baseline component library
│   └── lib/                   # Internal utilities & helper functions
├── public/                    # Static asset organization (strict separation)
│   ├── images/                # Static photos, avatar, cover images
│   ├── gifs/                  # Interactive background animations and video files
│   ├── icons/                 # UI assets, mail and action icons
│   ├── projects/              # Detailed project showcases & hero assets
│   ├── project-logos/         # Mini logos representing portfolio projects
│   ├── screenshots/           # General application view screenshots
│   └── resume.pdf             # Stored Resume PDF download package
└── content/                   # Blog content (structured markdown)
```

---

## 🎨 Asset & Content Guidelines

To maintain visual excellence and a pristine code workspace, **never place raw assets directly inside the root `public/` directory**. Always categorize them according to their format and purpose:

| Directory | Asset Type | Example Assets |
| :--- | :--- | :--- |
| `/public/images/` | Static photos, background covers | `profile.jpg`, `cover.png` |
| `/public/gifs/` | Video files, animations, loaded loops | `sukuna.mp4`, `watching_tv.jpg` |
| `/public/icons/` | Custom vector graphics & functional SVGs | `mail.svg`, `download.svg`, `crown.svg` |
| `/public/project-logos/` | Individual brand/project square icons | `stremora.svg`, `verifyhub.svg` |
| `/public/projects/` | Hero illustrations or high-res project banners | `stremora_hero.png` |
| `/public/screenshots/` | Full-screen previews or page captures | `hero.png`, `about.png` |

### Adding a New Project
1. **Prepare Assets**: Place the project's square brand logo in `/public/project-logos/` and any key showcase banner/hero in `/public/projects/`.
2. **Update Central Registry**: Add the project's details, description, tech stack, and links in `src/app/constants.ts`.
3. **Register Page/Card**: The site will dynamically generate the `/projects/[id]` route and display cards on the `/portfolio` view.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes (Persistent mood toggle)

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file based on `.env.example` and add your optional tokens:
   ```env
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_token
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```
   Start the compiled production runtime:
   ```bash
   npm start
   ```

---

## 📱 Routes & Pages

- `/` - Main Interactive Resume (with customized printing style sheets)
- `/portfolio` - Graphic and dynamic presentation of development history
- `/about` - Detailed narrative, resume downloads, and personal channels
- `/blogs` - Markdown-driven engineering blog posts
- `/projects/[id]` - Deep-dive explanations for specific development projects
- `/problems` - Dynamic dashboard detailing LeetCode/Codeforces progress

---

## 🔧 Legacy Paths & Cleanup Strategy

We have identified several legacy paths and dead code blocks inside components such as `Navigation.tsx` and `RetroMusicPlayer.tsx` containing obsolete asset links or unused UI layouts. 

> [!IMPORTANT]
> **Cleanup recommendation**: Do not delete these files or paths without user validation. When cleaning up legacy components, keep code backups intact in source control history and carefully test active links (like `/resume.pdf`) to maintain backward compatibility.

---

## 📝 License

Private project - All rights reserved.
