import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Maximize2, X, Eye, Sparkles } from 'lucide-react';

export default function Gallery({ onOpenQuote, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Artisan Workbench & Finished Leather Belts",
      category: "finished",
      categoryLabel: "Finished Belts",
      src: "/images/hero-belts.jpg",
      description: "Handcrafted full-grain belts displayed on oak craftsman bench with awls, mallets, and solid brass buckles."
    },
    {
      id: 2,
      title: "Italian Calfskin Formal Dress Line",
      category: "finished",
      categoryLabel: "Finished Belts",
      src: "/images/formal-belts.jpg",
      description: "Sleek obsidian black and dark mahogany belts with mirror-finish palladium hardware."
    },
    {
      id: 3,
      title: "Rugged Heavyweight Casual Denim Belt",
      category: "finished",
      categoryLabel: "Finished Belts",
      src: "/images/casual-belts.jpg",
      description: "Raw-edge 10oz veg-tan bridle leather with antique brass roller buckle, paired with raw denim."
    },
    {
      id: 4,
      title: "Intricate 8-Strand Hand-Plaited Weave",
      category: "details",
      categoryLabel: "Details & Craft",
      src: "/images/braided-belts.jpg",
      description: "Macro focus on hand-braided leather strips and hand-burnished edges on marble."
    },
    {
      id: 5,
      title: "Lost-Wax Cast Bronze Sculptural Belt",
      category: "hardware",
      categoryLabel: "Cast Hardware",
      src: "/images/designer-belts.jpg",
      description: "Bespoke high-fashion bronze emblem buckle with embossed calfskin strap."
    },
    {
      id: 6,
      title: "The Signature Men's Production Lineup",
      category: "finished",
      categoryLabel: "Finished Belts",
      src: "/images/mens-belts.jpg",
      description: "Multi-colorway lineup showcasing consistent stitch spacing and uniform burnishing."
    },
    {
      id: 7,
      title: "Master Saddle Stitching in Progress",
      category: "details",
      categoryLabel: "Details & Craft",
      src: "/images/craftsmanship.jpg",
      description: "Master artisan piercing leather with diamond awls and stitching with double-waxed linen thread."
    },
    {
      id: 8,
      title: "MAYEN Export Facility & Hide Stockroom",
      category: "factory",
      categoryLabel: "Atelier & Factory",
      src: "/images/manufacturing.jpg",
      description: "Spacious, naturally lit manufacturing floor with Italian hide rolls and master craftsmen."
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-8 sm:py-12 space-y-10 sm:space-y-12 bg-[#faf7f4] text-stone-900">
      {/* Header (No Box, Clean Breadcrumb) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-4 sm:mb-6">
          <button 
            onClick={() => onNavigate ? onNavigate('home') : (window.location.hash = 'home')}
            className="hover:text-stone-950 transition-colors"
          >
            Home
          </button>
          <span className="text-stone-400">&gt;</span>
          <span className="text-stone-950 font-semibold">Gallery</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A47148] block mb-1.5">
              Visual Archive & Atelier
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
              Atelier & Collection Gallery
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              A photographic tribute to raw hides, precision tooling, hand stitching, and finished luxury belts.
            </p>
          </div>
          <div className="w-full sm:w-auto flex-shrink-0">
            <button
              onClick={() => onOpenQuote && onOpenQuote()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-95 shadow-md transition-all text-center whitespace-nowrap"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'finished', label: 'Finished Belts' },
            { id: 'details', label: 'Craft & Stitching' },
            { id: 'hardware', label: 'Cast Hardware' },
            { id: 'factory', label: 'Atelier & Factory' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? 'bg-stone-950 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Responsive 2-Columns on Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative rounded-xl sm:rounded-3xl overflow-hidden bg-white border border-stone-200 hover:border-stone-400 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 aspect-[4/3] active:scale-[0.99]"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Category tag on mobile (always visible) */}
              <div className="sm:hidden absolute top-2 left-2 z-10">
                <span className="px-2 py-0.5 rounded-md bg-stone-950/75 backdrop-blur-sm text-amber-200 text-[9px] font-bold uppercase tracking-wider">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Mobile bottom caption strip */}
              <div className="sm:hidden absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent p-2.5 text-white">
                <h3 className="font-serif text-xs font-bold truncate">
                  {item.title}
                </h3>
              </div>

              {/* Desktop Hover Overlay */}
              <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-5 sm:p-6 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200/90 mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-white font-semibold">
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span>Click to view full photograph</span>
                </div>
              </div>

              <div className="hidden sm:block absolute top-3 sm:top-4 right-3 sm:right-4 p-2 rounded-full bg-white/90 text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setActiveLightbox(null)}></div>
          <div className="relative z-10 max-w-4xl w-full bg-white text-stone-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-2xl max-h-[95vh] overflow-y-auto">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-stone-100">
              <img 
                src={activeLightbox.src} 
                alt={activeLightbox.title} 
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-900 transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-stone-100">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cognac">
                  {activeLightbox.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-stone-950">
                  {activeLightbox.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                  {activeLightbox.description}
                </p>
              </div>
              <button
                onClick={() => {
                  const title = activeLightbox.title;
                  setActiveLightbox(null);
                  onOpenQuote(title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-colors text-center whitespace-nowrap shadow"
              >
                Inquire on this Style
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
