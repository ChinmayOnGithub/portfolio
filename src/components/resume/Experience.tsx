"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

interface Role {
  title: string;
  type: string;
  period: string;
  description: string;
  workMode?: string;
  skills?: string[];
}

interface Experience {
  company: string;
  location: string;
  duration: string;
  roles: Role[];
}

export function Experience() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const experiences: Experience[] = [
    {
      company: 'WLUG (Walchand Linux Users Group)',
      location: 'Walchand College, Sangli',
      duration: '2023 - 2024',
      roles: [
        {
          title: 'Member',
          type: 'Community Involvement',
          period: '2023 - 2024',
          description: 'Assisted participants during LinuxDiary and Deostro meetups with system setup and debugging. Worked extensively with Linux systems, CLI tools and open-source workflows.',
          skills: ['Linux', 'CLI Tools', 'Open-source', 'System Administration'],
        },
      ],
    },
  ];

  return (
    <Card className={isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="relative">
            {expIndex !== 0 && <div className={`absolute left-5 -top-3 w-px h-3 ${isDark ? 'bg-zinc-800' : 'bg-slate-300'}`} />}

            <div className="flex gap-4">
              <div className={`w-10 h-10 rounded border flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-200 border-slate-300'}`}>
                <Building2 className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.company}</h3>
                  <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{exp.duration}</p>
                  <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{exp.location}</p>
                </div>

                <div className="space-y-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={`relative pl-6 border-l-2 ${isDark ? 'border-zinc-800' : 'border-slate-300'}`}>
                      <div className={`absolute -left-1 top-2 w-2 h-2 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-slate-400'}`} />

                      <h4 className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{role.title}</h4>
                      <p className={`text-sm mb-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{role.type} · {role.period}</p>
                      {role.workMode && (
                        <p className={`text-sm mb-2 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{role.workMode}</p>
                      )}
                      <p className={`text-sm mb-2 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{role.description}</p>

                      {role.skills && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {role.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className={isDark ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-slate-200 text-slate-700 border-slate-300'}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
