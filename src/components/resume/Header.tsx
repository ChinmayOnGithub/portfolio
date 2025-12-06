"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, AudioWaveform, Moon, Sun, Download } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export function ResumeHeader() {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className={`rounded-none border-t-0 border-x-0 p-0 gap-0 ${isDark ? 'bg-[#0F0F13] border-zinc-800/50' : 'bg-slate-50 border-slate-200 shadow-sm'
      }`}>
      <div className="relative h-40 lg:h-56 overflow-hidden">
        <img src="/cover.png" alt="Cover" className="w-full h-full object-cover" />
      </div>

      <div className={`relative px-4 lg:px-6 pb-6 ${isDark ? 'bg-[#0F0F13]/95 backdrop-blur-sm' : 'bg-white'
        }`}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="shrink-0 -mt-16 lg:-mt-20">
            <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 overflow-hidden flex items-center justify-center ${isDark ? 'border-[#0F0F13] bg-zinc-900/50 shadow-lg shadow-black/20' : 'border-white bg-slate-100 shadow-lg'
              }`}>
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 pt-4 lg:pt-8">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
              <div className="flex-1">
                <h1 className={`text-2xl lg:text-3xl font-bold mb-1 ${isDark ? 'text-[#E6E6E6]' : 'text-slate-900'
                  }`}>Chinmay Patil</h1>
                <p className={`text-sm lg:text-base mb-3 ${isDark ? 'text-zinc-400' : 'text-slate-600'
                  }`}>Backend Engineer | DevOps | Linux | WCE '26</p>
                <div className={`flex flex-col gap-2 text-xs lg:text-sm mb-4 ${isDark ? 'text-zinc-400' : 'text-slate-600'
                  }`}>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" />
                    Karad, Maharashtra, India
                  </span>
                  <span className="flex items-center gap-2">
                    <AudioWaveform className="w-4 h-4 shrink-0" />
                    +91 8767691751
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className={`${isDark ? 'bg-[#E6E6E6] text-black hover:bg-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`} asChild>
                    <a href="mailto:chinmaydpatil09@gmail.com">Contact</a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`${isDark ? 'border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:border-zinc-600' : 'border-slate-300 bg-white text-[#3A5FCD] hover:bg-slate-50 hover:border-[#3A5FCD]/30'}`}
                    asChild
                  >
                    <a href="/portfolio">Portfolio</a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`${isDark ? 'border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:border-zinc-600' : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400'}`}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'ChinmayPatil_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Resume
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 shrink-0">
                <Button 
                  size="sm" 
                  onClick={toggleTheme} 
                  variant="outline"
                  className={`${isDark ? 'border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:text-[#E6E6E6]' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className={`${isDark ? 'border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:text-[#E6E6E6]' : 'border-slate-300 bg-white text-[#3A5FCD] hover:bg-slate-50 hover:border-[#3A5FCD]/30'}`} 
                  asChild
                >
                  <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className={`${isDark ? 'border-zinc-700/50 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800/80 hover:text-[#E6E6E6]' : 'border-slate-300 bg-white text-[#3A5FCD] hover:bg-slate-50 hover:border-[#3A5FCD]/30'}`} 
                  asChild
                >
                  <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Badge
              variant="secondary"
              className={`mt-4 whitespace-normal wrap-break-word text-xs ${isDark ? 'bg-zinc-900/50 text-zinc-400 border-zinc-800/50' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
            >
              Backend & DevOps • Cloud Infrastructure • System Design • Open-source Contributor
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
