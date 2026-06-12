"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useResumeThemeSafe } from './ThemeProvider';

export function SkillsSection() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const topSkills = ['C++', 'Node.js', 'Express', 'MongoDB', 'Linux', 'Docker'];

  const allSkills = [
    'JavaScript',
    'Java',
    'REST APIs',
    'WebSockets',
    'React.js',
    'HTML/CSS',
    'TailwindCSS',
    'MySQL',
    'Git/GitHub',
    'GitHub Actions',
    'Postman',
    'VS Code',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'DBMS',
    'OOP',
  ];

  const getSkillStyle = () => {
    return 'vintage-badge';
  };

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="pb-3 relative z-10">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl lg:text-3xl font-bold font-cormorant text-[var(--text-color)]">Skills</CardTitle>
          <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1">
            [ SKILLS_INDEX_01 ]
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-0 font-times relative z-10">
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-lg text-[var(--meta-color)] font-cormorant tracking-wider uppercase">Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-2.5 py-0.5 vintage-badge"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-lg text-[var(--meta-color)] font-cormorant tracking-wider uppercase">All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-2.5 py-0.5 vintage-badge"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
