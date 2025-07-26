'use client';

import { useCallback, useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#problems', label: 'Problems' },
];


export default function Navigation() {
  const handleClick = useCallback((id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#212129] border-b border-white/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-lg sm:text-xl font-semibold text-white"
            onClick={() => handleClick('#')}
          >
            chinmaypatil
          </a>

          {/* Navigation */}
          <div className="flex gap-12">
            {navItems.map(({ href, label }, index) => (
              <button
                key={href}
                onClick={() => handleClick(href)}
                className="group relative text-sm sm:text-base text-gray-400 hover:text-gray-200 transition-colors"
              >
                <span className="text-[var(--almost-primary)] mr-1">{`0${index + 1}.`}</span>
                {label}
                <span
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                />
              </button>
            ))}
          </div>


          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <div className="group flex items-center justify-center gap-0 h-[40px] bg-normal-button  text-white rounded-[12px] transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg">
              {/* View Resume Button */}
              <button
                className="text-sm sm:text-base px-3 py-2 transition-colors duration-300 hover:text-link-on-hover font-medium"
                onClick={() => window.open('/resume.pdf', '_blank')}
                title="Open Resume in New Tab"
              >
                RESUME
              </button>

              {/* Download Resume Button */}
              <button
                className="bg-mygreen hover:bg-white rounded-[12px] h-[40px] w-[48px] flex justify-center items-center transition-colors duration-300"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "ChinmayPatil_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                title="Download Resume"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.75 21L21 29.75M21 29.75L12.25 21M21 29.75V7M29.75 35H12.25"
                    stroke={hovered ? "black" : "white"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <button
              className="bg-white/10 hover:bg-white/20 h-[40px] w-[40px] rounded-md flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.78 18C21.78 20.0876 20.0875 21.78 18 21.78C15.9124 21.78 14.22 20.0876 14.22 18C14.22 15.9124 15.9124 14.22 18 14.22C20.0875 14.22 21.78 15.9124 21.78 18Z" stroke="#FFD12A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.08 19.08C28.6764 19.08 29.16 18.5964 29.16 18C29.16 17.4036 28.6764 16.92 28.08 16.92V19.08ZM25.56 16.92C24.9635 16.92 24.48 17.4036 24.48 18C24.48 18.5964 24.9635 19.08 25.56 19.08V16.92ZM10.44 19.08C11.0364 19.08 11.52 18.5964 11.52 18C11.52 17.4036 11.0364 16.92 10.44 16.92V19.08ZM7.91997 16.92C7.3235 16.92 6.83997 17.4036 6.83997 18C6.83997 18.5964 7.3235 19.08 7.91997 19.08V16.92ZM19.08 7.92C19.08 7.32354 18.5964 6.84 18 6.84C17.4035 6.84 16.92 7.32354 16.92 7.92H19.08ZM16.92 10.44C16.92 11.0365 17.4035 11.52 18 11.52C18.5964 11.52 19.08 11.0365 19.08 10.44H16.92ZM19.08 25.56C19.08 24.9636 18.5964 24.48 18 24.48C17.4035 24.48 16.92 24.9636 16.92 25.56H19.08ZM16.92 28.08C16.92 28.6764 17.4035 29.16 18 29.16C18.5964 29.16 19.08 28.6764 19.08 28.08H16.92ZM25.8916 11.6357C26.3134 11.2139 26.3134 10.5301 25.8916 10.1083C25.4698 9.68656 24.7861 9.68656 24.3643 10.1083L25.8916 11.6357ZM22.5816 11.891C22.1598 12.3128 22.1598 12.9966 22.5816 13.4184C23.0034 13.8402 23.6871 13.8402 24.1089 13.4184L22.5816 11.891ZM13.4184 24.1089C13.8401 23.6871 13.8401 23.0034 13.4184 22.5816C12.9966 22.1599 12.3128 22.1599 11.891 22.5816L13.4184 24.1089ZM10.1083 24.3644C9.68653 24.7861 9.68653 25.4699 10.1083 25.8916C10.5301 26.3134 11.2139 26.3134 11.6356 25.8916L10.1083 24.3644ZM11.6356 10.1083C11.2139 9.68656 10.5301 9.68656 10.1083 10.1083C9.68653 10.5301 9.68653 11.2139 10.1083 11.6357L11.6356 10.1083ZM11.891 13.4184C12.3128 13.8402 12.9966 13.8402 13.4184 13.4184C13.8401 12.9966 13.8401 12.3128 13.4184 11.891L11.891 13.4184ZM24.1103 22.5831C23.6885 22.1613 23.0048 22.1613 22.5831 22.5831C22.1613 23.0049 22.1613 23.6886 22.5831 24.1104L24.1103 22.5831ZM24.3643 25.8916C24.7861 26.3134 25.4698 26.3134 25.8916 25.8916C26.3134 25.4699 26.3134 24.7861 25.8916 24.3644L24.3643 25.8916ZM28.08 16.92H25.56V19.08H28.08V16.92ZM10.44 16.92H7.91997V19.08H10.44V16.92ZM16.92 7.92V10.44H19.08V7.92H16.92ZM16.92 25.56V28.08H19.08V25.56H16.92ZM24.3643 10.1083L22.5816 11.891L24.1089 13.4184L25.8916 11.6357L24.3643 10.1083ZM11.891 22.5816L10.1083 24.3644L11.6356 25.8916L13.4184 24.1089L11.891 22.5816ZM10.1083 11.6357L11.891 13.4184L13.4184 11.891L11.6356 10.1083L10.1083 11.6357ZM22.5831 24.1104L24.3643 25.8916L25.8916 24.3644L24.1103 22.5831L22.5831 24.1104Z" fill="#FFD12A" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
