import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
  className = ""
}) {
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${
          light 
            ? 'bg-white/20 text-white border border-white/30' 
            : 'bg-stone-100 text-stone-800 border border-stone-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-cognac'}`}></span>
          {badge}
        </div>
      )}

      <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 ${
        light ? 'text-white' : 'text-stone-950'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-stone-200' : 'text-stone-600'
        }`}>
          {subtitle}
        </p>
      )}

      <div className={`h-1 w-16 rounded-full mt-4 ${
        light ? 'bg-white/60' : 'bg-stone-900'
      } ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
