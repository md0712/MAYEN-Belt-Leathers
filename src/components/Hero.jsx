import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Globe, 
  Sparkles, 
  Play, 
  Film, 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw 
} from 'lucide-react';

export default function Hero({ onExploreCatalog, onOpenQuote }) {
  const mediaItems = [
    {
      type: 'image',
      id: 'img-1',
      title: 'Artisan Workbench & Finished Belts',
      subtitle: 'Prime European Full-Grain Hides with Solid Cast Buckles',
      src: '/images/hero-belts.jpg',
      badge: 'Bench Craft'
    },
    {
      type: 'video',
      id: 'vid-1',
      title: 'Artisan Belt Craftsmanship (Film)',
      subtitle: 'Live leathercrafting, edge skiving, hole punching, and burnishing',
      videoUrl: 'https://www.youtube-nocookie.com/embed/lRe5DuoRZXg?autoplay=1&rel=0&modestbranding=1',
      poster: '/images/craftsmanship.jpg',
      badge: 'Atelier Film'
    },
    {
      type: 'image',
      id: 'img-2',
      title: 'Generational Saddle Stitching',
      subtitle: 'Double-waxed linen threads and French edge beveling',
      src: '/images/craftsmanship.jpg',
      badge: 'Hand Stitch'
    },
    {
      type: 'video',
      id: 'vid-2',
      title: 'Master Beltmaking Architecture',
      subtitle: 'Comprehensive step-by-step master execution',
      videoUrl: 'https://www.youtube-nocookie.com/embed/R9K1J9uPj50?autoplay=1&rel=0&modestbranding=1',
      poster: '/images/hero-belts.jpg',
      badge: 'Workshop Video'
    },
    {
      type: 'image',
      id: 'img-3',
      title: '350,000+ Export Workshop Facility',
      subtitle: 'Computerized band-knife splitters & certified leather stockroom',
      src: '/images/manufacturing.jpg',
      badge: 'Export Atelier'
    },
    {
      type: 'image',
      id: 'img-4',
      title: 'Executive Italian Calfskin Dress Line',
      subtitle: 'Mirror-finish palladium hardware & feathered edges',
      src: '/images/formal-belts.jpg',
      badge: 'Formal Collection'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentMedia = mediaItems[activeIndex];

  return (
    <section 
      className="relative overflow-hidden text-stone-900 border-b border-[#A47148]/20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/footer-leather.jpg')` }}
    >
      {/* Subtle translucent veil for pristine text contrast and soft luxury glow */}
      <div className="absolute inset-0 bg-[#faf7f4]/60 backdrop-blur-[0.5px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#A47148]/10 border border-[#A47148]/25 text-stone-900 text-[11px] sm:text-xs uppercase tracking-widest font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#A47148]" />
              <span>Artisan Leather Atelier & Global Export OEM</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.15]">
              Timeless Elegance. <br />
              <span className="italic font-normal text-stone-700">Master Handcrafted</span> Leather Belts.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              Handcrafting full-grain leather belts with European certified tanneries, 
              solid cast hardware, and generational saddle stitching. Tailored for luxury private labels, high-end menswear, and international department retailers.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-95 shadow-md transition-all"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 transition-all"
              >
                <span>View Belt Collections</span>
              </button>
            </div>

            {/* Trust Badges Strip - Stacked on Mobile, 3 Cols on Tablet/Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-6 border-t border-[#A47148]/20">
              <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-[#A47148]/15 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#A47148]/10 border border-[#A47148]/20 flex items-center justify-center text-stone-800 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#A47148]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">100% Full Grain</p>
                  <p className="text-[11px] text-stone-600">Pure Uncorrected Hide</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-[#A47148]/15 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#A47148]/10 border border-[#A47148]/20 flex items-center justify-center text-stone-800 flex-shrink-0">
                  <Award className="w-5 h-5 text-[#A47148]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">LWG Gold Tannery</p>
                  <p className="text-[11px] text-stone-600">Eco Vegetable Tanning</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/90 p-3 rounded-xl border border-[#A47148]/15 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#A47148]/10 border border-[#A47148]/20 flex items-center justify-center text-stone-800 flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#A47148]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">Global Export</p>
                  <p className="text-[11px] text-stone-600">32 Countries Worldwide</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Video Showcase (5 cols) */}
          <div className="lg:col-span-5 relative space-y-3">
            {/* Top Mode Filter Switcher */}
            <div className="flex items-center justify-between gap-2 px-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-stone-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A47148]" />
                Atelier Media Showcase
              </span>
              <div className="flex items-center gap-1.5 bg-white/90 p-1 rounded-xl border border-stone-200/90 shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveIndex(0)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    currentMedia.type === 'image'
                      ? 'bg-stone-950 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Photos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(1)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    currentMedia.type === 'video'
                      ? 'bg-[#A47148] text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Videos (2)</span>
                </button>
              </div>
            </div>

            {/* Main Media Player / Image Display Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xl bg-stone-950 aspect-[4/3] lg:aspect-[5/6] group">
              {currentMedia.type === 'image' ? (
                <>
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-stone-950/70 backdrop-blur-md text-amber-200 border border-white/15 text-[10px] font-bold uppercase tracking-wider">
                      {currentMedia.badge}
                    </span>
                  </div>

                  {/* Play Video Teaser Pill */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(1)}
                    className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/80 hover:bg-stone-950 backdrop-blur-md text-white border border-white/20 text-xs font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#A47148] flex items-center justify-center text-white">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                    <span>Watch Craft Video</span>
                  </button>

                  {/* Image Navigation Arrows */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1))}
                    aria-label="Previous Media"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-md flex items-center justify-center opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1))}
                    aria-label="Next Media"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-900 shadow-md flex items-center justify-center opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <p className="text-xs font-semibold text-amber-200 uppercase tracking-widest">
                      {currentMedia.title}
                    </p>
                    <p className="text-[11px] text-stone-200 line-clamp-1 mt-0.5">
                      {currentMedia.subtitle}
                    </p>
                  </div>
                </>
              ) : (
                /* Video Player Frame */
                <div className="relative w-full h-full bg-stone-950 flex flex-col">
                  <iframe
                    key={currentMedia.id}
                    src={currentMedia.videoUrl}
                    title={currentMedia.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* Floating Video Switcher Bar */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(activeIndex === 1 ? 3 : 1)}
                      className="px-2.5 py-1 rounded-lg bg-stone-950/80 hover:bg-stone-950 backdrop-blur-md text-amber-200 border border-white/20 text-[11px] font-semibold flex items-center gap-1 shadow"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{activeIndex === 1 ? "Switch to Video 2" : "Switch to Video 1"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(0)}
                      className="px-2.5 py-1 rounded-lg bg-stone-950/80 hover:bg-stone-950 backdrop-blur-md text-white border border-white/20 text-[11px] font-semibold shadow"
                    >
                      Photos
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Navigation Selector (Photos + Videos) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
              {mediaItems.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      isActive
                        ? 'border-stone-950 ring-2 ring-stone-950/20 scale-105'
                        : 'border-stone-200 hover:border-stone-400 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.type === 'video' ? item.poster : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-[#A47148] text-white flex items-center justify-center shadow">
                          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
