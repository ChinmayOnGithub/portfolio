'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PaperError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Paper page error caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F8F5EE] dark:bg-[#1E1C19] text-[#2A2A2A] dark:text-[#E8E2D8] flex items-center justify-center p-6 font-serif">
      <div className="max-w-md w-full border border-[#DDD5C5] dark:border-[#443E38] p-8 shadow-xl rounded-sm vintage-card relative">
        <div className="vintage-card-inner-border" />
        <div className="relative z-10 text-center space-y-6">
          <div className="text-4xl">📜</div>
          <h2 className="text-2xl font-bold font-cormorant tracking-tight">Scroll Unreadable</h2>
          <p className="text-sm italic opacity-80 leading-relaxed font-times">
            "The technical manuscript could not be unrolled or retrieved from the vault."
          </p>
          <div className="text-xs opacity-60 font-mono bg-black/5 dark:bg-white/5 p-3 rounded-sm border border-[#DDD5C5]/50 dark:border-[#443E38]/50 break-words">
            {error.message || 'An unexpected error occurred while fetching this manuscript.'}
          </div>
          <div className="flex gap-4 pt-2 justify-center">
            <button
              onClick={() => reset()}
              className="px-4 py-2 border border-[#DDD5C5] dark:border-[#443E38] rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#8C6239] dark:hover:bg-[#D0A060] hover:text-[#F8F5EE] dark:hover:text-[#1E1C19] transition-all"
            >
              Try Reopening
            </button>
            <Link
              href="/"
              className="px-4 py-2 border border-[#DDD5C5] dark:border-[#443E38] rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#8C6239] dark:hover:bg-[#D0A060] hover:text-[#F8F5EE] dark:hover:text-[#1E1C19] transition-all inline-block"
            >
              Return to Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
