import React from 'react';

export default function BrandLogo({ size = "md", light = false, className = "" }) {
  // Size configurations with responsive mobile scaling
  const sizes = {
    sm: {
      iconBox: "w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-0.5 sm:p-1",
      nameImg: "h-5 sm:h-6",
      gap: "gap-1.5 sm:gap-2",
    },
    md: {
      iconBox: "w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl p-1 sm:p-1.5",
      nameImg: "h-6 sm:h-7 md:h-8.5",
      gap: "gap-2 sm:gap-2.5 md:gap-3",
    },
    lg: {
      iconBox: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl p-1.5 sm:p-2",
      nameImg: "h-9 sm:h-11 md:h-13",
      gap: "gap-2.5 sm:gap-3 md:gap-4",
    }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Geometric Monogram M Emblem in Rounded Container */}
      <div 
        className={`${currentSize.iconBox} bg-white flex items-center justify-center border border-stone-200/90 shadow-sm flex-shrink-0 transition-all group-hover:border-stone-400 group-hover:shadow`}
      >
        <img 
          src="/images/logo.png" 
          alt="MAYEN Monogram" 
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Authentic Brand Wordmark Logo Image */}
      <div className="flex items-center">
        <img 
          src={light ? "/images/brand-name-white.png" : "/images/brand-name-transparent.png"} 
          alt="MAYEN - Crafted to Endure" 
          className={`${currentSize.nameImg} w-auto object-contain transition-opacity group-hover:opacity-90`}
          loading="eager"
        />
      </div>
    </div>
  );
}
