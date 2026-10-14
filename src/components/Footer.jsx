import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';
import BrandLogo from './BrandLogo';

export default function Footer({ onNavigate, onOpenQuote }) {
  return (
    <footer 
      className="relative text-stone-700 border-t border-[#A47148]/25 pt-16 pb-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/footer-leather.jpg')`
      }}
    >
      {/* Subtle luxury light overlay for enhanced depth & legibility */}
      <div className="absolute inset-0 bg-[#faf7f4]/60 backdrop-blur-[0.5px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Line Sheet CTA Strip */}
        <div className="bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#A47148]/25 shadow-md mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A47148]">Wholesale Line Sheet & Catalog</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
              Download the 2026 / 2027 Belt Line Sheet
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Receive complete wholesale tiers, material specs, hardware finish guides, and packaging options.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Request Wholesale Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Brand & Atelier */}
          <div>
            <div className="mb-5">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Distinguished global manufacturer of heirloom-grade leather belts, private-label collections, and precision-engineered metal hardware. Dedicated to timeless craftsmanship since 2021.
            </p>
            <div className="flex items-center gap-2.5 text-xs text-stone-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-cognac" />
              <span>LWG Gold Certified &bull; ISO 9001</span>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-950 uppercase tracking-wider mb-4 border-b border-stone-200 pb-2">
              Signature Lines
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-stone-950 transition-colors">
                  Formal Italian Box-Calf Belts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-stone-950 transition-colors">
                  Rugged 10oz Veg-Tan Casual Belts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-stone-950 transition-colors">
                  Hand-Plaited 8-Strand Braided Belts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-stone-950 transition-colors">
                  Lost-Wax Cast Bronze Designer Belts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-stone-950 transition-colors">
                  Reversible 360° Gentleman Belts
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Manufacturing & Quality */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-950 uppercase tracking-wider mb-4 border-b border-stone-200 pb-2">
              Atelier & Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-600">
              <li>
                <button onClick={() => onNavigate('manufacturing')} className="hover:text-stone-950 transition-colors">
                  Vegetable Tanning & Hide Selection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('manufacturing')} className="hover:text-stone-950 transition-colors">
                  Edge Beveling & 5-Layer Burnishing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quality')} className="hover:text-stone-950 transition-colors">
                  ASTM Tensile & Hardware Salt-Spray Testing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-stone-950 transition-colors">
                  Bespoke Private-Label Tooling & Stamps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-stone-950 transition-colors">
                  Workshop Photographic Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Global Office */}
          <div>
            <h4 className="font-serif text-base font-bold text-stone-950 uppercase tracking-wider mb-4 border-b border-stone-200 pb-2">
              Export Headquarters
            </h4>
            <div className="space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cognac flex-shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}, {companyInfo.contact.city}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cognac flex-shrink-0" />
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-stone-950 transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cognac flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-stone-950 transition-colors">
                  {companyInfo.contact.email}
                </a>
              </div>
              <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-200">
                Operating Hours: {companyInfo.contact.hours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; 2026 {companyInfo.name}. All Rights Reserved. | Website Designed & Developed by{' '}
            <a 
              href="https://dmdigitallab.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-stone-800 font-semibold hover:text-cognac hover:underline transition-colors"
            >
              DM Digital Labs
            </a>
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-900 cursor-pointer">Export Compliance</span>
            <span className="hover:text-stone-900 cursor-pointer">Quality Guarantee</span>
            <span className="hover:text-stone-900 cursor-pointer">Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
