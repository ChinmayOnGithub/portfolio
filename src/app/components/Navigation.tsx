'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' }
  ];

  const handleMouseEnter = useCallback((href: string) => {
    // Prefetch the page when hovering over the link
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }, []);

  return (
    <nav className="top-0 left-0 right-0 bg-primary border-b border-gray-600/40 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-50 hover:text-gray-200 transition-colors"
            onMouseEnter={() => handleMouseEnter('/')}
          >
            chinmaypatil
          </Link>
          <div className="flex space-x-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-300 hover:text-gray-50 transition-colors ${pathname === href ? 'text-gray-50 font-medium' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter(href)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav >
  );
} 