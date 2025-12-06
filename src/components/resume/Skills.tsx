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

  return (
    <Card className={isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <Badge
                key={index}
                className={`text-sm px-4 py-2 ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`font-medium mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm px-3 py-1 ${isDark ? 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800' : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'}`}
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
