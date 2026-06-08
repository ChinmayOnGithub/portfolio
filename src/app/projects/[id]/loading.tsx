import React from 'react';

export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] dark:bg-[#1E1C19] text-[#2A2A2A] dark:text-[#E8E2D8] flex flex-col items-center justify-center p-6 font-serif">
      <div className="max-w-[720px] w-full space-y-12 animate-pulse pt-20">
        
        {/* Navigation spacer */}
        <div className="h-6 w-32 bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm mb-12" />
        
        {/* Header Skeleton */}
        <div className="space-y-4">
          <div className="h-10 w-3/4 bg-[#DDD5C5]/50 dark:bg-[#443E38]/50 rounded-sm" />
          <div className="h-6 w-full bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
          <div className="h-6 w-5/6 bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
          
          <div className="h-[1px] w-full bg-[#DDD5C5] dark:bg-[#443E38] my-6" />
          <div className="flex justify-between">
            <div className="h-4 w-36 bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
            <div className="h-4 w-24 bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
          </div>
          <div className="h-[1px] w-full bg-[#DDD5C5] dark:bg-[#443E38]" />
        </div>

        {/* Plate / Image Skeleton */}
        <div className="border border-[#DDD5C5] dark:border-[#443E38] p-2 rounded-sm bg-black/5 dark:bg-white/5">
          <div className="h-72 w-full bg-[#DDD5C5]/30 dark:bg-[#443E38]/30 rounded-sm" />
        </div>

        {/* Text Paragraph Skeletons */}
        <div className="space-y-6">
          <div className="h-5 w-1/3 bg-[#DDD5C5]/50 dark:bg-[#443E38]/50 rounded-sm pb-1" />
          <div className="space-y-2.5">
            <div className="h-4 w-full bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
            <div className="h-4 w-full bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
            <div className="h-4 w-5/6 bg-[#DDD5C5]/40 dark:bg-[#443E38]/40 rounded-sm" />
          </div>
        </div>
        
        {/* Loading Indicator */}
        <div className="text-center text-xs italic opacity-60 animate-bounce pt-4">
          Binding archive ledger pages...
        </div>
      </div>
    </div>
  );
}
