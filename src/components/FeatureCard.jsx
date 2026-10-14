import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, stepNumber, highlight }) {
  return (
    <div className={`p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
      highlight 
        ? 'bg-stone-950 text-white border-stone-900 shadow-xl' 
        : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-200 hover:border-stone-400 shadow-sm hover:shadow-md'
    }`}>
      {stepNumber && (
        <span className={`absolute top-4 right-4 sm:top-6 sm:right-6 font-serif text-2xl sm:text-3xl font-bold select-none ${
          highlight ? 'text-stone-800' : 'text-stone-200'
        }`}>
          {stepNumber}
        </span>
      )}

      <div>
        <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
          highlight ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-900'
        }`}>
          {Icon && <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-cognac" />}
        </div>

        <h3 className={`font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
          highlight ? 'text-white' : 'text-stone-950'
        }`}>
          {title}
        </h3>

        <p className={`text-xs sm:text-sm leading-relaxed ${
          highlight ? 'text-stone-300' : 'text-stone-600'
        }`}>
          {description}
        </p>
      </div>

      <div className={`pt-4 sm:pt-6 mt-4 sm:mt-6 border-t ${highlight ? 'border-stone-800' : 'border-stone-100'}`}>
        <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
          highlight ? 'text-stone-200' : 'text-cognac'
        }`}>
          <span>MAYEN Standard Guarantee</span>
          &rarr;
        </span>
      </div>
    </div>
  );
}
