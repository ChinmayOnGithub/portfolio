"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export default function Education() {
  const { theme } = useResumeThemeSafe();
  const isDark = theme === 'dark';

  const education = [
    {
      institution: 'Walchand College of Engineering, Sangli',
      degree: 'B.Tech (Information Technology)',
      field: 'CGPA: 8.37/10',
      period: '2022 - 2026',
      grade: null,
      activities: null,
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'Database Management', 'Computer Networks'],
    },
    {
      institution: 'Bapuji Salunkhe Mahavidyalaya, Karad',
      degree: 'Higher Secondary Education',
      field: 'Percentage: 80.33%',
      period: '2022',
      grade: null,
      activities: null,
      skills: null,
    },
    {
      institution: 'Anandrao Chavan Vidyalaya, Karad',
      degree: 'Secondary School Education',
      field: 'Percentage: 97.00%',
      period: '2020',
      grade: null,
      activities: null,
      skills: null,
    },
  ];

  return (
    <Card className={isDark ? 'bg-zinc-850 border-zinc-700' : 'bg-slate-100 border-slate-200'}>
      <CardHeader>
        <CardTitle className={isDark ? 'text-white' : 'text-slate-900'}>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className={`w-10 h-10 rounded border flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-200 border-slate-300'}`}>
              <GraduationCap className={`w-5 h-5 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`} />
            </div>

            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.institution}</h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>{edu.degree}</p>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{edu.field}</p>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{edu.period}</p>

              {edu.grade && (
                <p className={`text-sm mt-2 ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>Grade: {edu.grade}</p>
              )}

              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((skill, skillIndex) => (
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
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
