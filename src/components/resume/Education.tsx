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
      field: 'CGPA: 8.37/10 · Graduated',
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
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold font-cormorant text-[var(--text-color)]">Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {education.map((edu, index) => (
          <div key={index} className="font-times">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-sm border border-[var(--border-color)] bg-[var(--badge-bg)] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[var(--accent-color)]" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold font-cormorant text-xl text-[var(--text-color)]">{edu.institution}</h3>
                <p className="text-base mt-1 text-[var(--text-color)]/95">{edu.degree}</p>
                <p className="text-sm text-[var(--meta-color)] italic">{edu.field}</p>
                <p className="text-sm text-[var(--meta-color)]">{edu.period}</p>

                {edu.skills && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-2.5 py-0.5 vintage-badge"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
