import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';
import ProductCategoryCard from './ProductCategoryCard';

export default function ProductCategoryCarousel({ 
  categories, 
  onSelect, 
  onQuoteRequest, 
  onNavigate 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items visible:
  // Mobile (< 640px): 1 item ("single product")
  // Tablet (640px - 1024px): 2 items ("second")
  // Desktop (>= 1024px): 3 items ("three")
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, categories.length - visibleCount);

  // Auto-scroll loop timer
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, maxIndex]);

  // Keep index within bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Percentage width per item
  const itemWidthPercent = 100 / visibleCount;
  // Offset percentage
  const translateX = -(currentIndex * itemWidthPercent);

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Carousel Navigation & Status Header */}
      <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#A47148]/10 text-[#8c4d28] border border-[#A47148]/25">
            <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`}></span>
            {isHovered ? 'Paused on Hover' : 'Auto-Scroll Active'}
          </span>
          <span className="hidden sm:inline text-xs text-stone-500 font-medium">
            {visibleCount === 1 ? '1 Product' : visibleCount === 2 ? '2 Products' : '3 Products'} visible
          </span>
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 shadow-sm active:scale-95 transition-all"
            title={isAutoPlay ? 'Pause auto-scroll' : 'Play auto-scroll'}
            aria-label="Toggle auto scroll"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handlePrev}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#8c4d28] hover:text-white text-stone-800 border border-stone-200 shadow-sm active:scale-95 transition-all"
            title="Previous collection"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          <button
            onClick={handleNext}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#8c4d28] hover:text-white text-stone-800 border border-stone-200 shadow-sm active:scale-95 transition-all"
            title="Next collection"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>
      </div>

      {/* Overflow Carousel Track */}
      <div 
        className="overflow-hidden w-full -mx-2.5 sm:-mx-3 px-2.5 sm:px-3 py-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 px-2.5 sm:px-3 transition-opacity duration-300"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <ProductCategoryCard
                category={category}
                onSelect={onSelect}
                onQuoteRequest={onQuoteRequest}
                onNavigate={onNavigate}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx 
                ? 'w-8 h-2.5 bg-[#8c4d28] shadow-sm' 
                : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
