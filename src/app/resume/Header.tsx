"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Linkedin, Github, AudioWaveform, Moon, Sun } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export function ResumeHeader() {
  const { theme, toggleTheme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Card className={`rounded-none border-t-0 border-x-0 p-0 gap-0 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-50 border-slate-200'
      }`}>
      <div className="relative h-40 lg:h-56 overflow-hidden">
        <img src="/cover.png" alt="Cover" className="w-full h-full object-cover" />
      </div>

      <div className={`relative px-4 lg:px-6 pb-6 ${isDark ? 'bg-zinc-800' : 'bg-white'
        }`}>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-shrink-0 -mt-16 lg:-mt-20">
            <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 overflow-hidden flex items-center justify-center ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-white bg-slate-100'
              }`}>
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 pt-4 lg:pt-8">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
              <div className="flex-1">
                <h1 className={`text-2xl lg:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'
                  }`}>Chinmay Patil</h1>
                <p className={`text-sm lg:text-base mb-3 ${isDark ? 'text-zinc-400' : 'text-slate-600'
                  }`}>Backend Engineer | DevOps | Linux | WCE '26</p>
                <div className={`flex flex-col gap-2 text-xs lg:text-sm mb-4 ${isDark ? 'text-zinc-400' : 'text-slate-600'
                  }`}>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    Karad, Maharashtra, India
                  </span>
                  <span className="flex items-center gap-2">
                    <AudioWaveform className="w-4 h-4 flex-shrink-0" />
                    +91 8767691751
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" className={`${isDark ? 'bg-white text-black hover:bg-zinc-300' : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`} asChild>
                    <a href="mailto:chinmaydpatil09@gmail.com">Contact</a>
                  </Button>
                  <Button size="sm" className={`border ${isDark ? 'border-zinc-700 bg-transparent text-white hover:bg-zinc-800' : 'border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100'
                    }`} asChild>
                    <a href="https://www.chinmaypatil.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <Button size="sm" onClick={toggleTheme} className={`${isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}>
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
                <Button size="sm" className={`${isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`} asChild>
                  <a href="https://linkedin.com/in/chinmaydpatil" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="sm" className={`${isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`} asChild>
                  <a href="https://github.com/ChinmayOnGithub" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Badge
              variant="secondary"
              className={`mt-4 whitespace-normal break-words text-xs ${isDark ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-slate-100 text-slate-700 border-slate-200'
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
