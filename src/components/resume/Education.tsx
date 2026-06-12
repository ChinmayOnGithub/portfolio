"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useResumeThemeSafe } from './ThemeProvider';

export default function Education() {
  const education = [
    {
      institution: 'Walchand College of Engineering, Sangli',
      degree: 'B.Tech (Information Technology)',
      field: 'CGPA: 8.49/10 · Graduated',
      period: '2022 - 2026',
      grade: null,
      activities: null,
      skills: null,
    },
  ];

  const getInstitutionLogo = (institution: string) => {
    if (institution.includes('Walchand')) {
      return (
        <div className="w-16 h-16 rounded-sm border border-[var(--border-color)] flex items-center justify-center shrink-0 transition-all overflow-hidden">
          <img 
            src="/logo/walchand.png" 
            alt="Walchand College logo"
            className="w-14 h-14 object-contain"
          />
        </div>
      );
    }

    // Fallback to graduation cap icon
    return (
      <div className="w-16 h-16 rounded-sm border border-[var(--border-color)] bg-[var(--badge-bg)] flex items-center justify-center shrink-0">
        <GraduationCap className="w-6 h-6 text-[var(--accent-color)]" />
      </div>
    );
  };

  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl lg:text-3xl font-bold font-cormorant text-[var(--text-color)]">Education</CardTitle>
          <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1">
            [ ARCHIVAL_CLASS: DEGREES ]
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {education.map((edu, index) => (
          <div key={index} className="font-times">
            <div className="flex gap-4">
              {getInstitutionLogo(edu.institution)}

              <div className="flex-1">
                <h3 className="font-bold font-cormorant text-2xl text-[var(--text-color)]">{edu.institution}</h3>
                <p className="text-base lg:text-lg mt-1 text-[var(--text-color)]/95">{edu.degree}</p>
                <p className="text-sm lg:text-base text-[var(--meta-color)] italic">{edu.field}</p>
                <p className="text-sm lg:text-base text-[var(--meta-color)]">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
