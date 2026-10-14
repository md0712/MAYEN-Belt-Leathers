import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function WhatsAppButton() {
  const cleanNumber = companyInfo.contact.whatsapp.replace(/[^0-9]/g, '') || '919884214809';
  const message = encodeURIComponent("Hello MAYEN Leather team, I would like to inquire about your leather belt manufacturing and wholesale catalog.");
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${cleanNumber}&text=${message}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">

      {/* Main WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact MAYEN Leather on WhatsApp"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm group-hover:blur-md transition-all animate-pulse"></span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
