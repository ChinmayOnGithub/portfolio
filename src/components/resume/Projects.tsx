"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Search, X } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';
import Link from 'next/link';
import { projects } from './data';

export function Projects() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  // Transform projects data to match component expectations and link to papers
  const projectsData = projects.map(project => ({
    id: project.paperUrl?.split('/').pop() || '',
    title: project.title,
    period: project.date,
    association: 'Personal Project',
    description: project.backendLine,
    skills: project.tech,
    link: project.href,
    paperUrl: project.paperUrl,
  }));

  const getSkillStyle = () => {
    return 'vintage-badge';
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'systems' && (project.title.includes('GPU') || project.title.includes('Compresso'))) ||
      (selectedCategory === 'web' && project.title.includes('Stremora')) ||
      (selectedCategory === 'blockchain' && project.title.includes('VerifyHub'));

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl lg:text-3xl font-bold font-cormorant text-[var(--text-color)]">Projects</CardTitle>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1">
              [ CAT_NO: 804-SYS ]
            </span>
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="vintage-btn h-8 px-3 text-sm inline-flex items-center gap-1.5 font-bold tracking-wider transition-all duration-200"
            >
              {isSearchExpanded ? (
                <>
                  <X className="w-3.5 h-3.5" />
                  <span>Close Search</span>
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Catalog</span>
                </>
              )}
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {isSearchExpanded && (
          <div className="border border-[var(--border-color)] p-4 rounded-sm bg-[var(--badge-bg)]/20 space-y-4 font-sans animate-in slide-in-from-top duration-300">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <div className="flex-1 min-w-[200px] relative">
                <label htmlFor="catalog-search" className="block text-xs uppercase font-bold tracking-widest text-[var(--meta-color)] mb-1">
                  Catalog Search Index:
                </label>
                <input
                  id="catalog-search"
                  type="text"
                  placeholder="Search tools, skills, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[var(--card-bg)] border border-[var(--border-color)] px-3 py-1.5 text-sm font-mono rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] text-[var(--text-color)] placeholder-[var(--meta-color)]/60"
                  autoFocus
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--meta-color)]">
                  Classification:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'all', label: 'All Cards' },
                    { id: 'systems', label: 'Systems/K8s' },
                    { id: 'web', label: 'Web/Cloud' },
                    { id: 'blockchain', label: 'Blockchain' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`text-xs px-2.5 py-1 rounded-sm border transition-all font-cormorant font-bold uppercase tracking-wider ${
                        selectedCategory === tab.id
                          ? 'bg-[var(--accent-color)] text-[var(--bg-color)] border-[var(--accent-color)] shadow-sm'
                          : 'border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--card-bg)]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10 border border-dashed border-[var(--border-color)] rounded-sm">
            <p className="text-base font-times italic text-[var(--meta-color)]">
              No matching ledger entries found in the archives.
            </p>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group border-b border-[var(--border-color)] last:border-0 pb-6 last:pb-0 pt-4 first:pt-0 -mx-4 px-4 hover:bg-[var(--badge-bg)]/20 rounded-sm transition-all duration-300 ease-in-out"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold font-cormorant text-2xl flex items-center gap-2 text-[var(--text-color)]">
                    <Link
                      href={project.paperUrl}
                      className="hover:text-[var(--accent-color)] transition-colors"
                    >
                      {project.title}
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--meta-color)] hover:text-[var(--accent-color)] transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  <p className="text-sm lg:text-base font-sans italic text-[var(--meta-color)]">{project.period} · {project.association} · <Link href={project.paperUrl} className="text-[var(--accent-color)] hover:underline">Read Technical Paper</Link></p>
                </div>
              </div>

              <p className="text-base lg:text-[17px] mb-4 leading-relaxed font-times text-[var(--text-color)]/95">{project.description}</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-2.5 py-0.5 vintage-badge"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
