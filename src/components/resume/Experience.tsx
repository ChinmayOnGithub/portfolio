"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  const experiences: Experience[] = [
    {
      company: 'Qualys',
      location: 'Pune, Maharashtra, India (Hybrid)',
      duration: 'Jan 2026 - Present',
      roles: [
        {
          title: 'Software Engineering Intern (Backend & DevOps)',
          type: 'Internship',
          period: 'Jan 2026 - Present',
          description: 'Developing and optimizing high-performance REST APIs for the enterprise vulnerability scanning platform. Automated end-to-end service orchestration and deployments using Docker and Kubernetes. Collaborated on observability tools, structuring CI/CD pipelines to streamline development workflows.',
          skills: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
        },
      ],
    },
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

  const getCompanyLogo = (company: string) => {
    const logoMap: { [key: string]: string } = {
      'Qualys': '/logo/qualys.png',
      'WLUG (Walchand Linux Users Group)': '/logo/wlug.png',
    };

    const logoSrc = logoMap[company];
    
    if (logoSrc) {
      return (
        <div className="w-16 h-16 rounded-sm border border-[var(--border-color)] flex items-center justify-center shrink-0 transition-all overflow-hidden">
          <img 
            src={logoSrc} 
            alt={`${company} logo`}
            className="w-14 h-14 object-contain"
          />
        </div>
      );
    }

    // Fallback to letter logo if no image found
    return (
      <div className="w-16 h-16 rounded-sm border border-[var(--border-color)] bg-[var(--badge-bg)] flex items-center justify-center shrink-0 transition-all">
        <span className="font-bold font-cormorant text-lg text-[var(--accent-color)]">{company[0]}</span>
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
        <CardTitle className="text-xl font-bold font-cormorant text-[var(--text-color)]">Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {experiences.map((exp, expIndex) => (
          <div key={expIndex} className="relative font-times">
            {expIndex !== 0 && <div className="absolute left-5 -top-3 w-px h-3 bg-[var(--border-color)]" />}

            <div className="flex gap-4">
              {getCompanyLogo(exp.company)}

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="font-bold font-cormorant text-xl text-[var(--text-color)]">{exp.company}</h3>
                  <p className="text-sm text-[var(--meta-color)] italic">{exp.duration} · {exp.location}</p>
                </div>

                <div className="space-y-4">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative pl-6 border-l border-[var(--border-color)]">
                      <div className="absolute -left-[4.5px] top-2 w-2 h-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)]" />

                      <h4 className="font-bold text-base font-cormorant text-[var(--text-color)]">{role.title}</h4>
                      <p className="text-sm mb-2 text-[var(--meta-color)]">{role.type} · {role.period}</p>
                      {role.workMode && (
                        <p className="text-sm mb-2 text-[var(--meta-color)]">{role.workMode}</p>
                      )}
                      <p className="text-base mb-3 leading-relaxed text-[var(--text-color)]/95">{role.description}</p>

                      {role.skills && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {role.skills.map((skill, skillIndex) => (
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
