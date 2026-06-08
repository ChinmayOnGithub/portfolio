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
        <CardTitle className="text-xl font-bold font-cormorant text-[var(--text-color)]">Skills</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 font-times relative z-10">
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-base text-[var(--meta-color)] font-cormorant tracking-wide uppercase">Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm px-3 py-1 transition-all shadow-none ${getSkillStyle()}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-base text-[var(--meta-color)] font-cormorant tracking-wide uppercase">All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm px-3 py-1 transition-all shadow-none ${getSkillStyle()}`}
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
