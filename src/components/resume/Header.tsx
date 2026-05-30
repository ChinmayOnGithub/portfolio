"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, AudioWaveform, Moon, Sun, Download } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import coverImg from './images/cover.png';
import profileImg from './images/profile.jpg';

export function ResumeHeader() {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className="rounded-none border-t-0 border-x-0 border-b p-0 gap-0 bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--text-color)] shadow-none">
      <div className="relative h-40 lg:h-56 overflow-hidden print:hidden">
        <img src={coverImg.src} alt="Cover" className="w-full h-full object-cover opacity-90 contrast-125" />
      </div>

      <div className="relative px-4 lg:px-6 pb-6 bg-[var(--card-bg)]">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="shrink-0 -mt-20 lg:-mt-24 print:hidden">
            <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full border-4 overflow-hidden flex items-center justify-center border-[var(--card-bg)] bg-[var(--card-bg)] shadow-lg relative z-10">
              <img src={profileImg.src} alt="Profile" className="w-full h-full object-cover filter contrast-[1.05]" />
            </div>
          </div>

          <div className="flex-1 pt-4 lg:pt-8 print:pt-0">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-2xl lg:text-3.5xl font-bold font-cormorant tracking-tight text-[var(--text-color)]">Chinmay Patil</h1>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 vintage-badge text-xs">
                      WCE '26 Graduate
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 vintage-badge text-xs">
                      Software Engineering Intern @ Qualys
                    </span>
                  </div>
                </div>
                <p className="text-sm lg:text-base mb-3 font-serif italic text-[var(--meta-color)]">Software Engineer | Backend & DevOps | WCE B.Tech IT Graduate</p>
                <div className="flex flex-col gap-2 text-xs lg:text-sm mb-4 font-serif text-[var(--meta-color)] print:hidden">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    Karad, Maharashtra, India
                  </span>
                  <span className="flex items-center gap-2">
                    <AudioWaveform className="w-4 h-4 shrink-0 text-[var(--accent-color)]" />
                    +91 8767691751
                  </span>
                </div>

                {/* Print-only contact info */}
                <div className="hidden print:grid grid-cols-2 gap-x-6 gap-y-1 text-xs font-serif text-black border-t border-b border-zinc-300/60 py-2 my-3">
                  <div><strong>Email:</strong> chinmaydpatil09@gmail.com</div>
                  <div><strong>Phone:</strong> +91 8767691751</div>
                  <div><strong>LinkedIn:</strong> linkedin.com/in/chinmaydpatil</div>
                  <div><strong>GitHub:</strong> github.com/ChinmayOnGithub</div>
                  <div className="col-span-2"><strong>Location:</strong> Karad, Maharashtra, India</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-serif print:hidden">
                  <Button
                    size="sm"
                    className="vintage-btn vintage-btn-primary h-8 px-4"
                    onClick={() => {
                      if (typeof window !== 'undefined') window.print();
                    }}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Print/Save Latest PDF
                  </Button>
                  <a
                    href="/resume.pdf"
                    download="ChinmayPatil_Resume.pdf"
                    className="text-xs text-[var(--meta-color)] hover:underline ml-2"
                  >
                    Download Archival PDF (2025)
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 shrink-0">
                <Button
                  size="sm"
                  onClick={toggleTheme}
                  className="vintage-btn h-8 w-8 p-0"
                >
                  {isDark ? <Sun className="w-4 h-4 text-[var(--accent-color)]" /> : <Moon className="w-4 h-4 text-[var(--accent-color)]" />}
                </Button>
                <Button
                  size="sm"
                  className="vintage-btn h-8 w-8 p-0"
                  asChild
                >
                  <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 text-[var(--accent-color)]" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="vintage-btn h-8 w-8 p-0"
                  asChild
                >
                  <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 text-[var(--accent-color)]" />
                  </a>
                </Button>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="mt-4 vintage-badge whitespace-normal wrap-break-word text-xs px-2.5 py-1"
            >
              Backend & DevOps • Cloud Infrastructure • System Design • Open-source Contributor
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
