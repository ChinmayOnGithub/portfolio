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
    <Card className={`${isDark ? 'bg-[#0F0F13]/80 backdrop-blur-md border-zinc-800/50 shadow-lg shadow-black/10' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
      <CardHeader className="pb-3">
        <CardTitle className={`text-lg font-semibold ${isDark ? 'text-[#E6E6E6]' : 'text-slate-900'}`}>Skills</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-6">
          <h3 className={`font-medium mb-3 text-sm ${isDark ? 'text-[#E6E6E6]' : 'text-slate-800'}`}>Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {topSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm px-3 py-1 ${isDark ? 'bg-[#E6E6E6] text-black border-zinc-200 hover:bg-white' : 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700'}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`font-medium mb-3 text-sm ${isDark ? 'text-[#E6E6E6]' : 'text-slate-800'}`}>All Skills</h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-sm px-3 py-1 ${isDark ? 'bg-zinc-900/60 text-zinc-300 border-zinc-800/50 hover:bg-zinc-800/80' : 'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300'}`}
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
