import React from 'react';

export const BeltStitchIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M7 6v12" strokeDasharray="2 2" />
    <path d="M12 6v12" />
    <circle cx="16" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const BuckleIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="8" y1="12" x2="16" y2="12" strokeWidth="3" />
  </svg>
);

export const HideLeatherIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 6 4 5 7c-1 3-3 4-3 6s2 3 3 5c1 2 3 2 7 2s6 0 7-2c1-2 3-3 3-5s-2-3-3-6c-1-3-3-5-7-5z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
