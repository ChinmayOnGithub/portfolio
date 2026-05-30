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
  ];

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="pb-3 relative z-10">
        <CardTitle className="text-lg font-bold font-cormorant text-[var(--text-color)]">Featured</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="border border-[var(--border-color)] p-3 rounded-sm bg-[var(--card-bg)] hover:bg-[var(--badge-bg)]/20 transition-all font-serif"
            >
              <div className="flex items-start gap-3">
                <item.icon className="w-5 h-5 mt-1 text-[var(--accent-color)] shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] tracking-wider uppercase mb-1 font-bold text-[var(--meta-color)]">{item.type}</p>
                  <h3 className="font-bold mb-2 font-serif text-sm text-[var(--text-color)]">{item.title}</h3>
                  <p className="text-xs mb-1 text-[var(--text-color)]/90">{item.description}</p>
                  <p className="text-[11px] text-[var(--meta-color)] italic">{item.subtitle}</p>
                  {item.engagement && (
                    <p className="text-[11px] mt-2 font-bold text-[var(--accent-color)]">{item.engagement}</p>
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
