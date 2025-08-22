// In a new file, e.g., VerticalNav.js
'use client';
import { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'projects'];

export default function VerticalNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block w-3 h-3 rounded-full transition-colors ${activeSection === id ? 'bg-green-400' : 'bg-gray-500'
                }`}
            ></a>
          </li>
        ))}
      </ul>
    </nav>
  );
}