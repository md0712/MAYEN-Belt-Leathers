import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { products } from '../data/products';
import { beltCategories } from '../data/categories';
import { Filter, Check, ArrowRight, Eye, X, Star, Heart, Scan } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Products({ onOpenQuote, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 space-y-10 sm:space-y-12 bg-[#faf7f4] text-stone-900">
      {/* Page Header (No Box, Clean Breadcrumb) */}
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
          <span className="text-stone-950 font-semibold">Products</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A47148] block mb-1.5">
              Wholesale & Private Label
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
              Master Belt Collections
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              Explore our export-ready belts constructed with genuine full-grain hides, solid brass cast buckles, and custom debossing options.
            </p>
          </div>
          <div className="w-full sm:w-auto flex-shrink-0">
            <button
              onClick={() => onNavigate ? onNavigate('cart') : onOpenQuote()}
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
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-stone-950 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Collections ({products.length})
          </button>
          {beltCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid - 2-Column Mobile & Multi-Column Desktop Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 mt-6 sm:mt-8">
          {filteredProducts.map((prod) => (
            <div 
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className="bg-white rounded-[1.75rem] sm:rounded-2xl overflow-hidden border border-stone-200 hover:border-stone-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group active:scale-[0.99] cursor-pointer"
            >
              {/* Product Image - Overlapping Black and Brown Belts */}
              <div className="relative aspect-[3/4] sm:aspect-[16/11] overflow-hidden bg-stone-100">
                {/* Base Main Belt Photo */}
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Overlapping Inset: Brown Belt in Bottom-Right with White Curved Border */}
                <div className="absolute right-0 bottom-0 w-[58%] h-[50%] overflow-hidden rounded-tl-[1.8rem] sm:rounded-tl-[2rem] border-t-4 border-l-4 border-white shadow-[-6px_-6px_16px_rgba(0,0,0,0.14)] z-10">
                  <img 
                    src="/images/casual-belts.jpg" 
                    alt={`${prod.name} Brown Belt`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Top-Right: Floating Heart Icon in a White Circle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
                  aria-label="Save to Wishlist"
                >
                  <Heart className="w-4 h-4 fill-[#e0533c] text-[#e0533c]" />
                </button>

                {/* Bottom-Left: Floating Pill "QUOTE" in Tan Brown */}
                <div className="absolute bottom-2.5 left-2.5 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote(prod.name);
                    }}
                    className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#8c4d28] hover:bg-[#733e1e] active:scale-95 text-white text-[10.5px] sm:text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                  >
                    QUOTE
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(prod);
                  }}
                  className="hidden sm:flex absolute bottom-2.5 right-2.5 z-20 p-1.5 sm:p-2 rounded-full bg-white text-stone-800 hover:bg-stone-950 hover:text-white shadow-md transition-all opacity-0 group-hover:opacity-100"
                  title="Quick View Specs"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Compact Card View with Cart Footer (< sm) */}
              <div className="sm:hidden p-2.5 sm:p-3 pt-2 sm:pt-2.5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-sans font-bold text-xs text-stone-900 truncate leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-400 font-medium truncate mt-0.5">
                    {prod.leatherType}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 mt-1.5 border-t border-stone-100">
                  <span className="font-bold text-xs text-stone-950 font-sans">
                    $33.00
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: prod.id,
                        name: prod.name,
                        sku: prod.sku,
                        image: prod.image,
                        price: 33.00,
                        color: prod.colors[0],
                        width: prod.widths[0]
                      });
                      if (onNavigate) onNavigate('cart');
                      else window.location.hash = 'cart';
                    }}
                    className="px-2.5 py-1 rounded-full bg-[#8c4d28] hover:bg-[#733e1e] active:scale-95 text-white text-[10px] font-bold shadow-sm transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Desktop / Tablet Full Product Body (sm:) */}
              <div className="hidden sm:flex p-3.5 sm:p-4 flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-950 mb-1 leading-snug line-clamp-1 group-hover:text-cognac transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-600 line-clamp-2 mb-2.5 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Compact Specifications Box */}
                  <div className="space-y-0.5 bg-stone-50 p-2 sm:p-2.5 rounded-lg border border-stone-200/80 text-[10.5px] sm:text-[11px] mb-2.5">
                    <p className="text-stone-700 truncate"><strong>Leather:</strong> {prod.leatherType}</p>
                    <p className="text-stone-700 truncate"><strong>Buckle:</strong> {prod.buckleType}</p>
                    <p className="text-stone-700 truncate"><strong>Widths:</strong> {prod.widths.join(', ')}</p>
                  </div>

                  {/* Standard Colorways */}
                  <div className="mb-2.5">
                    <span className="text-[9.5px] font-semibold uppercase tracking-wider text-stone-500 block mb-1">
                      Standard Colorways:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {prod.colors.map((color, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-800 text-[9.5px] border border-stone-200">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Estimate & CTA Button */}
                <div className="pt-2.5 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-stone-500 block">Wholesale Guide</span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 font-serif">{prod.priceEstimate}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote(prod.name);
                    }}
                    className="px-3 py-1.5 sm:py-2 rounded-lg text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-95 transition-all flex items-center gap-1 shadow-sm whitespace-nowrap"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative z-10 bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-stone-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cognac">{selectedProduct.categoryName}</span>
                <h3 className="font-serif text-2xl font-bold text-stone-950">{selectedProduct.name}</h3>
                <span className="text-xs text-stone-500 font-mono">SKU: {selectedProduct.sku}</span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>

            <p className="text-stone-700 text-sm leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-950">Atelier Construction Details</h4>
              {selectedProduct.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                  <Check className="w-4 h-4 text-cognac flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 block">Indicative Pricing</span>
                <span className="font-serif text-lg font-bold text-stone-900">{selectedProduct.priceEstimate}</span>
              </div>
              <button
                onClick={() => {
                  const prodName = selectedProduct.name;
                  setSelectedProduct(null);
                  onOpenQuote(prodName);
                }}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-colors"
              >
                Quote This Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
