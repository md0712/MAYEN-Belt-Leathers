import React, { useState } from 'react';
import { ArrowRight, Mail, Heart, Search, Ruler, Shield, Cog, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCategoryCard({ category, onSelect, onQuoteRequest, onNavigate }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedSwatch, setSelectedSwatch] = useState(0);
  const { addToCart } = useCart();

  // Fallback defaults matching the authentic design
  const articleName = category.articleName || "ALCE";
  const badge = category.badge || "BEST SELLER";
  const swatches = category.swatches || [
    { name: "Black", hex: "#18181b" },
    { name: "Brown", hex: "#522b18" }
  ];
  
  const specs = category.structuredSpecs || {
    width: "30mm – 32mm",
    leather: "Italian Box Calf / Aniline",
    hardware: "Solid Brass / Palladium Finish"
  };

  const primaryImage = category.image || '/images/formal-belts.jpg';
  const secondaryImage = category.secondaryImage || '/images/casual-belts.jpg';

  return (
    <div 
      onClick={() => onSelect(category.id)}
      className="group bg-white rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.99]"
    >
      {/* --- Image Section: Overlapping Black & Brown Belt Photographs --- */}
      <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full overflow-hidden bg-stone-100">
        
        {/* Base Photo: Black Belt */}
        <img
          src={primaryImage}
          alt={`${category.name} Black Belt`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Overlapping Inset Photo: Brown Belt in Bottom-Right with Curved White Border */}
        <div className="absolute right-0 bottom-0 w-[58%] h-[50%] overflow-hidden rounded-tl-[2rem] sm:rounded-tl-[2.4rem] border-t-4 border-l-4 border-white shadow-[-6px_-6px_16px_rgba(0,0,0,0.14)] z-10">
          <img
            src={secondaryImage}
            alt={`${category.name} Brown Belt`}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Top-Right: Floating Heart Icon in a White Circle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md flex items-center justify-center text-stone-900 hover:scale-110 active:scale-95 transition-all"
          aria-label="Save to Wishlist"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'fill-[#e0533c] text-[#e0533c] scale-110' : 'fill-[#e0533c] text-[#e0533c]'
            }`} 
          />
        </button>

        {/* Bottom-Left: Floating Pill "QUOTE" Button in Tan Brown */}
        <div className="absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onQuoteRequest) onQuoteRequest(category.name);
              else if (onSelect) onSelect(category.id);
            }}
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#8c4d28] hover:bg-[#733e1e] active:bg-[#5c3016] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            QUOTE
          </button>
        </div>

      </div>

      {/* --- Card Footer: Required for Cart & Item Details ("cart using do need footer") --- */}
      <div className="sm:hidden p-3 sm:p-4 bg-white flex flex-col justify-between border-t border-stone-100 flex-1">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-sans font-bold text-xs sm:text-sm text-stone-900 truncate leading-snug">
              {category.name}
            </h3>
            <span className="font-bold text-xs sm:text-sm text-stone-950 font-sans whitespace-nowrap">
              $33.00
            </span>
          </div>
          <p className="text-[10.5px] sm:text-[11px] text-stone-500 font-medium truncate mt-0.5">
            {category.headline || (category.articleName ? `${category.articleName} &bull; Black / Brown Duo` : "Italian Leather")}
          </p>
        </div>

        {/* Direct Add to Cart Action in Tan Brown */}
        <div className="pt-2 mt-2 border-t border-stone-100 flex items-center justify-between gap-2">
          <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">
            100% Full-Grain
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: category.id,
                name: category.name,
                articleName: category.articleName || category.name,
                image: category.image,
                price: 33.00,
                color: "Black & Brown Duo",
                width: specs.width || "32mm"
              });
              if (onNavigate) onNavigate('cart');
              else window.location.hash = 'cart';
            }}
            className="px-3 py-1 rounded-full bg-[#8c4d28] hover:bg-[#733e1e] active:scale-95 text-white text-[10.5px] font-bold shadow-sm transition-all flex items-center gap-1.5"
            title="Add to Shopping Cart"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* --- TABLET & DESKTOP FULL LUXURY VIEW (sm:) --- */}
      <div className="hidden sm:flex p-5 sm:p-6 flex-1 flex-col justify-between space-y-4">
        <div>
          {/* Header Row: Article Code & Color Swatches */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-stone-400">
                  ARTICLE
                </span>
                <span className="w-7 h-[1px] bg-stone-300"></span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-none mb-1">
                {articleName}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-stone-500 font-sans">
                {category.name}
              </p>
            </div>

            {/* Color Swatch Selector Box */}
            <div className="flex items-center gap-2.5 bg-[#f5efe9] px-3 py-1.5 rounded-2xl border border-stone-200/70 shadow-sm flex-shrink-0">
              {swatches.map((swatch, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSwatch(idx);
                  }}
                  className="flex flex-col items-center gap-1 group/swatch focus:outline-none"
                  title={swatch.name}
                >
                  <span
                    style={{ backgroundColor: swatch.hex }}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border shadow-inner transition-transform ${
                      selectedSwatch === idx ? 'ring-2 ring-[#8c4d28] scale-110' : 'border-stone-300'
                    }`}
                  />
                  <span className="text-[9px] font-semibold text-stone-600">
                    {swatch.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed mt-3.5 mb-4">
            {category.description}
          </p>

          {/* 3-Column Specifications Grid with Distinct Round Icons */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-200/80">
            {/* Col 1: Width */}
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5efe9] flex items-center justify-center text-[#8c4d28] flex-shrink-0">
                <Ruler className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                  WIDTH
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-stone-900 leading-tight block truncate">
                  {specs.width}
                </span>
              </div>
            </div>

            {/* Col 2: Leather */}
            <div className="flex items-start gap-2 border-l border-stone-200/80 pl-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5efe9] flex items-center justify-center text-[#8c4d28] flex-shrink-0">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                  LEATHER
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-stone-900 leading-tight block line-clamp-2">
                  {specs.leather}
                </span>
              </div>
            </div>

            {/* Col 3: Hardware */}
            <div className="flex items-start gap-2 border-l border-stone-200/80 pl-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5efe9] flex items-center justify-center text-[#8c4d28] flex-shrink-0">
                <Cog className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-bold block">
                  HARDWARE
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-stone-900 leading-tight block line-clamp-2">
                  {specs.hardware}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: 2 Side-by-Side (EXPLORE LINE & QUOTE) */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(category.id);
            }}
            className="w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#7c3f1d] hover:bg-[#683416] active:scale-98 transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-md"
          >
            <span>EXPLORE LINE</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuoteRequest(category.name);
            }}
            className="w-full py-3 sm:py-3.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6e3717] bg-[#f7f2eb] hover:bg-[#ede5d8] border border-[#8c502b]/40 active:scale-98 transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8c4d28]" />
            <span>QUOTE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
