"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Image } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export function Featured() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const featuredItems = [
    {
      type: 'certificate',
      title: 'Red Hat Linux Fundamentals (RH104)',
      description: 'Red Hat Certified | September 2025',
      subtitle: 'Comprehensive Linux fundamentals certification covering system administration, security, and best practices.',
      icon: FileText,
    },
    {
      type: 'achievement',
      title: 'Hacktoberfest 2025 Contributor',
      description: 'Successfully completed with 6 merged PRs to open-source projects',
      subtitle: '🚀 Active contributor to the open-source community, submitted and merged contributions to established repositories.',
      engagement: '6 PRs • October 2025',
      icon: Image,
    },
    {
      type: 'achievement',
      title: 'Vision CTF - Finalist',
      description: 'Ranked top 5% among 60+ teams | 2024',
      subtitle: 'Competitive cybersecurity challenge demonstrating problem-solving and security expertise.',
      icon: Image,
    },
  ];

  return (
    <Card className={`gap-4 ${isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}`}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Featured</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 transition-colors cursor-pointer ${isDark ? 'border-zinc-900 hover:bg-zinc-900 text-zinc-400' : 'border-slate-300 hover:bg-slate-200 text-slate-600'
                }`}
            >
              <div className="flex items-start gap-3">
                <item.icon className={`w-5 h-5 mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-500'}`} />
                <div className="flex-1">
                  <p className={`text-xs uppercase mb-1 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{item.type}</p>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`text-sm mb-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{item.description}</p>
                  <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{item.subtitle}</p>
                  {item.engagement && (
                    <p className={`text-xs mt-2 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{item.engagement}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
