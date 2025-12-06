"use client";

import { ResumeThemeProvider, useResumeThemeSafe } from '@/components/resume/ThemeProvider';
import { BlogHeader } from '@/components/resume/BlogHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Github, ExternalLink } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function BlogPostContent() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  const params = useParams();
  const slug = params.slug as string;

  const [content, setContent] = useState('');
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Fetch blog content
    fetch(`/content/blogs/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        // Simple markdown parsing (you can use a library like react-markdown later)
        setContent(text);
        
        // Extract frontmatter (basic implementation)
        const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const lines = frontmatter.split('\n');
          const data: any = {};
          
          lines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
              const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              if (key === 'tags') {
                data[key] = value.replace(/[\[\]]/g, '').split(',').map((t: string) => t.trim().replace(/["']/g, ''));
              } else {
                data[key] = value;
              }
            }
          });
          
          setPost(data);
        }
      })
      .catch(err => console.error('Error loading blog post:', err));
  }, [slug]);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className={isDark ? 'text-zinc-400' : 'text-slate-600'}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      <BlogHeader />
      
      <article className="w-full max-w-4xl mx-auto px-4 lg:px-6 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {post.title}
          </h1>

          <p className={`text-xl mb-6 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">
            {post.tags && post.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                className={`${
                  isDark 
                    ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <Card className={`${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'}`}>
          <div className={`prose prose-lg max-w-none p-6 lg:p-8 ${
            isDark 
              ? 'prose-invert prose-headings:text-white prose-p:text-zinc-300 prose-a:text-orange-400 prose-strong:text-white prose-code:text-orange-400 prose-pre:bg-zinc-800' 
              : 'prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-orange-600 prose-strong:text-slate-900 prose-code:text-orange-600 prose-pre:bg-slate-100'
          }`}>
            <div dangerouslySetInnerHTML={{ __html: content.replace(/^---[\s\S]*?---/, '').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>').replace(/\n/g, '<br/>') }} />
          </div>
        </Card>

        {/* Footer with GitHub Link */}
        {slug.includes('stremora') && (
          <Card className={`mt-8 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Check out the project
              </h3>
              <a 
                href="https://github.com/ChinmayOnGithub/stremora-backend"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  isDark 
                    ? 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700' 
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        )}

        {slug.includes('verifyhub') && (
          <Card className={`mt-8 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Check out the project
              </h3>
              <a 
                href="https://github.com/ChinmayOnGithub/verifyhub-backend"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  isDark 
                    ? 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700' 
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        )}
      </article>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <ResumeThemeProvider>
      <BlogPostContent />
    </ResumeThemeProvider>
  );
}
