import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, ShoppingBag } from 'lucide-react';
import { companyInfo } from '../data/company';
import BrandLogo from './BrandLogo';
import { useCart } from '../context/CartContext';

export default function Navbar({ activePage, setActivePage, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile side drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Atelier' },
    { id: 'products', label: 'Products' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'quality', label: 'Quality & Standards' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar - Clean Single-line Responsive */}
      <div className="bg-[#A47148]/10 text-stone-800 text-[10px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-[#A47148]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A47148] animate-pulse flex-shrink-0"></span>
            <span className="hidden sm:inline text-stone-700">Worldwide Export & Private Label OEM &bull; </span>
            <span className="font-semibold text-stone-900">100% Full Grain Leather</span>
          </div>

          {/* Right Phone & Tagline */}
          <div className="flex items-center gap-2 sm:gap-4 text-stone-600 flex-shrink-0">
            <a 
              href={`tel:${companyInfo.contact.phone}`} 
              className="hover:text-stone-950 transition-colors flex items-center gap-1 font-medium"
              title="Call Sales Office"
            >
              <PhoneCall className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-stone-800 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs">{companyInfo.contact.phone}</span>
            </a>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="hidden md:inline font-serif italic text-stone-600">Est. 2021 &bull; Artisanal Excellence</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Pure White Luxury */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 bg-white ${
          isScrolled 
            ? 'shadow-md py-2.5 sm:py-3 border-b border-stone-200/90 bg-white/98 backdrop-blur-md' 
            : 'py-3 sm:py-4 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Wordmark */}
            <button 
              onClick={() => handleNavClick('home')}
              className="group focus:outline-none"
              aria-label="MAYEN - Home"
            >
              <BrandLogo size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all rounded-lg relative ${
                    activePage === item.id
                      ? 'text-stone-950 font-semibold bg-stone-100'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-stone-900 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button & Cart Icon */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => handleNavClick('cart')}
                className={`relative p-2.5 rounded-full border transition-all ${
                  activePage === 'cart'
                    ? 'bg-stone-950 text-white border-stone-900 shadow-sm'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                }`}
                aria-label="View Shopping Cart"
                title="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 text-stone-800" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8c4d28] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-95 shadow-sm transition-all"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Header: Cart Button & Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => handleNavClick('cart')}
                className="relative p-2 rounded-xl text-stone-800 hover:text-stone-950 hover:bg-stone-100 border border-stone-200 focus:outline-none transition-colors"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 text-stone-800" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8c4d28] text-white text-[9.5px] font-bold flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-stone-800 hover:text-stone-950 hover:bg-stone-100 border border-stone-200 focus:outline-none transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Side Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop Overlay with blur */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-stone-950/50 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Side Drawer Container - Slides in from right */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white shadow-2xl z-50 flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-stone-200">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
              <button 
                onClick={() => handleNavClick('home')}
                className="focus:outline-none"
              >
                <BrandLogo size="sm" />
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border border-stone-200 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body - Scrollable Links */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
              <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Menu Navigation
              </p>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                    activePage === item.id
                      ? 'bg-stone-950 text-white font-semibold shadow-sm'
                      : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    activePage === item.id ? 'text-white translate-x-1' : 'text-stone-400'
                  }`} />
                </button>
              ))}

              {/* Mobile Drawer Cart Link */}
              <button
                onClick={() => handleNavClick('cart')}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activePage === 'cart'
                    ? 'bg-stone-950 text-white font-semibold shadow-sm'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-950'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-cognac" />
                  <span>Shopping Cart</span>
                </div>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#8c4d28] text-white text-[10px] font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Quick Info Box in Mobile Side Menu */}
              <div className="mt-6 pt-5 border-t border-stone-100">
                <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                  Export & Atelier Office
                </p>
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs text-stone-600">
                  <a 
                    href={`tel:${companyInfo.contact.phone}`} 
                    className="flex items-center gap-2 hover:text-stone-950 transition-colors font-medium text-stone-900"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-cognac flex-shrink-0" />
                    <span>{companyInfo.contact.phone}</span>
                  </a>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Private label OEM & bulk worldwide export inquiries welcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Drawer Footer - Action Button */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <p className="text-center text-[10px] text-stone-400 uppercase tracking-widest font-medium">
                100% Certified Full Grain Leather
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
