import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Check, 
  MessageSquare, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Cart({ onNavigate, onOpenQuote }) {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'MAYEN10' || promoCode.trim().toUpperCase() === 'WHOLESALE') {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid code. Try "MAYEN10" for 10% wholesale trial discount.');
    }
  };

  const finalTotal = Math.max(0, subtotal - discount);

  // Generate WhatsApp order message with current cart contents
  const generateWhatsAppUrl = () => {
    let orderText = `Hello MAYEN Leather team, I would like to place an order for the following items:\n\n`;
    cartItems.forEach((item, idx) => {
      orderText += `${idx + 1}. ${item.name} (${item.sku || 'SKU'})\n   - Color: ${item.color}\n   - Width: ${item.width}\n   - Quantity: ${item.quantity}\n   - Price: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    orderText += `Subtotal: $${subtotal.toFixed(2)}\n`;
    if (discount > 0) orderText += `Discount: -$${discount.toFixed(2)}\n`;
    orderText += `Estimated Total: $${finalTotal.toFixed(2)}\n\nPlease provide invoice and shipping timeline.`;

    const phone = companyInfo.contact.whatsapp.replace(/[^0-9]/g, '');
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(orderText)}`;
  };

  return (
    <div className="py-8 sm:py-12 bg-[#faf7f4] text-stone-900 min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-medium mb-6">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-stone-900 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <button 
            onClick={() => onNavigate('products')} 
            className="hover:text-stone-900 transition-colors"
          >
            Collections
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-950 font-bold">Shopping Cart</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-950">
                Your Shopping Cart
              </h1>
              <span className="px-3 py-1 rounded-full bg-stone-950 text-white text-xs font-bold font-sans">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Export-grade handcrafted belts made with 100% full-grain European hides.
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-semibold text-stone-500 hover:text-red-600 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 sm:p-16 border border-stone-200/80 shadow-sm text-center max-w-xl mx-auto my-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A47148]/10 border border-[#A47148]/20 flex items-center justify-center text-[#A47148] mx-auto mb-5">
              <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950 mb-2">
              Your Cart is Currently Empty
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mb-8 leading-relaxed">
              Explore our master handcrafted full-grain leather belts collection and add your selected styles to your cart.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-95 transition-all shadow-md"
            >
              <span>Explore Belt Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Populated Cart Layout: 2 Columns */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (Items List - 8 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={`${item.id}-${item.color}-${index}`}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-stone-200 hover:border-stone-300 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                >
                  {/* Product Info with Image */}
                  <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                        <span className="text-[9.5px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700">
                          {item.sku}
                        </span>
                        {item.articleName && (
                          <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#A47148]">
                            {item.articleName}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xs sm:text-base font-bold text-stone-950 truncate leading-snug">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] sm:text-xs text-stone-500">
                        <span className="inline-flex items-center gap-1 bg-stone-50 px-1.5 sm:px-2 py-0.5 rounded border border-stone-200">
                          <strong>Color:</strong> {item.color}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-stone-50 px-1.5 sm:px-2 py-0.5 rounded border border-stone-200">
                          <strong>Width:</strong> {item.width}
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-stone-900 mt-1 sm:hidden">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity Stepper & Price Column */}
                  <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-5 w-full sm:w-auto pt-2.5 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                    
                    {/* Unit Price (Desktop) */}
                    <div className="hidden sm:block text-right">
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Unit Price</span>
                      <span className="text-xs font-bold text-stone-700 font-sans">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.color)}
                        className="p-1 sm:p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 sm:px-3 py-1 text-xs font-bold text-stone-900 font-mono select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.color)}
                        className="p-1 sm:p-2 text-stone-600 hover:text-stone-950 hover:bg-stone-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total for this line */}
                    <div className="text-right min-w-[60px] sm:min-w-[70px]">
                      <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Subtotal</span>
                      <span className="text-xs sm:text-sm font-bold text-stone-950 font-sans">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.color)}
                      className="p-1.5 sm:p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove Item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Bottom Actions Row */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>

            {/* Right Column (Order Summary Card - 5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md space-y-6">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                    Order Summary
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Wholesale and direct factory pricing.
                  </p>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Discount / Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[11px] font-semibold text-[#8c4d28] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-[#8c4d28]" /> 10% Wholesale Trial Discount Applied!
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] font-medium text-red-500">
                      {promoError}
                    </p>
                  )}
                </form>

                {/* Price Calculation Breakdown */}
                <div className="space-y-3 pt-4 border-t border-stone-100 text-xs sm:text-sm">
                  <div className="flex justify-between text-stone-600">
                    <span>Items Subtotal ({totalItems})</span>
                    <span className="font-semibold text-stone-900 font-sans">${subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#8c4d28] font-medium">
                      <span>Promo Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-stone-600">
                    <span>Global Express Shipping</span>
                    <span className="text-[#8c4d28] font-bold uppercase text-[11px] bg-[#A47148]/10 px-2 py-0.5 rounded border border-[#A47148]/25">
                      FREE (Included)
                    </span>
                  </div>

                  <div className="flex justify-between text-stone-600">
                    <span>Export Packaging & Box</span>
                    <span className="text-stone-900 font-medium">Included</span>
                  </div>

                  <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline">
                    <span className="font-serif text-base sm:text-lg font-bold text-stone-950">
                      Estimated Total
                    </span>
                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-950">
                        ${finalTotal.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-stone-400 block font-sans">
                        USD (Factory Ex-Works / FOB)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Action: Order Now / Proceed to Checkout */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenQuote(cartItems.map(i => `${i.quantity}x ${i.name}`).join(', '))}
                    className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Order Now &bull; Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Secondary Action: Order via WhatsApp */}
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Quick Order on WhatsApp</span>
                  </a>
                </div>

                {/* Assurance & Trust Badges */}
                <div className="pt-4 border-t border-stone-100 space-y-2.5 text-[11px] text-stone-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#A47148] flex-shrink-0" />
                    <span>100% Certified Full Grain European Leather</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#A47148] flex-shrink-0" />
                    <span>Insured International Air Freight Forwarding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#A47148] flex-shrink-0" />
                    <span>Custom Debossing & Hardware Available</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
