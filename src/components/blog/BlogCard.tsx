"use client";

import { Card } from '../ui/card';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useResumeThemeSafe } from '../resume/ThemeProvider';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

export function BlogCard({ slug, title, excerpt, date, readTime, tags, coverImage }: BlogCardProps) {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  return (
    <Link href={`/blogs/${slug}`}>
      <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-md border ${
        isDark 
          ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-700' 
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}>
        <div className="flex gap-4 p-4">
          {/* Cover Image */}
          {coverImage && (
            <div className={`w-20 h-20 shrink-0 rounded flex items-center justify-center ${
              isDark ? 'bg-zinc-800' : 'bg-slate-100'
            }`}>
              <img 
                src={coverImage} 
                alt={title}
                className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className={`text-base font-semibold mb-1.5 line-clamp-2 transition-colors ${
              isDark ? 'text-white group-hover:text-zinc-200' : 'text-slate-900 group-hover:text-slate-700'
            }`}>
              {title}
            </h3>

            <p className={`mb-2 line-clamp-2 text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
              {excerpt}
            </p>

            <div className="flex items-center gap-3 mb-2">
              <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-0.5 rounded ${
                    isDark 
                      ? 'bg-zinc-800 text-zinc-400' 
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
