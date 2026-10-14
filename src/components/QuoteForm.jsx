import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, Building, User, MessageSquare, X } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function QuoteForm({ initialCategory = '', isModal = false, onClose }) {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm({ preferredCategory: initialCategory || 'all' });

  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl ${isModal ? 'p-4 sm:p-8 md:p-10 max-h-[92vh] overflow-y-auto' : 'p-5 sm:p-10 md:p-12 border border-stone-200 shadow-sm'}`}>
      {isModal && onClose && (
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cognac">Private Label & Bulk Inquiries</span>
            <h3 className="font-serif text-2xl font-bold text-stone-950">Request Factory Quotation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {isSubmitted ? (
        <div className="text-center py-10 px-4">
          <div className="w-16 h-16 rounded-full bg-[#A47148]/15 text-[#8c4d28] flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mb-3">
            Inquiry Dispatched to Atelier
          </h3>
          <p className="text-stone-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
            Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. Our export specialist has received your specifications. You will receive an official quotation and digital line sheet within 24 business hours.
          </p>
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 max-w-sm mx-auto mb-6 text-xs text-stone-600 text-left">
            <p><strong>Reference ID:</strong> MYN-RFQ-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p><strong>Company:</strong> {formData.company || 'Direct Brand Buyer'}</p>
            <p><strong>Preferred Type:</strong> {formData.inquiryType.replace('_', ' ').toUpperCase()}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`https://web.whatsapp.com/send?phone=${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}&text=Hello%20MAYEN%20Leather%2C%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.fullName)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#8c4d28] hover:bg-[#733e1e] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow"
            >
              <span>Instant Confirmation on WhatsApp</span>
            </a>
            <button
              onClick={resetForm}
              className="px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isModal && (
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-cognac">Direct B2B Manufacturing</span>
              <h3 className="font-serif text-3xl font-bold text-stone-950 mt-1">
                Request an Export Quotation
              </h3>
              <p className="text-stone-600 text-sm mt-2">
                Fill in your brand specifications or bulk wholesale order requirements below for custom pricing.
              </p>
            </div>
          )}

          {submitError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cognac" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Julian Sterling"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                  errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cognac" />
                <span>Business Email *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="julian@luxurygoods.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                  errors.email ? 'border-red-400 bg-red-50/30' : 'border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cognac" />
                <span>Phone / WhatsApp *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98842 14809"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all ${
                  errors.phone ? 'border-red-400 bg-red-50/30' : 'border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>

            {/* Company / Brand Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-cognac" />
                <span>Company / Brand Name</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Sterling & Co. London"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Inquiry Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                Inquiry Type *
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-3.5 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="custom_manufacturing">Custom OEM Manufacturing</option>
                <option value="private_label">Private Label (Your Brand Stamp)</option>
                <option value="wholesale_catalog">Wholesale Catalog Order</option>
                <option value="sample_request">Prototype Sample Request</option>
              </select>
            </div>

            {/* Estimated Quantity */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                Estimated Volume
              </label>
              <select
                name="estimatedQuantity"
                value={formData.estimatedQuantity}
                onChange={handleChange}
                className="w-full px-3.5 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="Sample Set">Sample Prototype Set (1-10)</option>
                <option value="100-300">100 - 300 Units (Low MOQ)</option>
                <option value="300-1000">300 - 1,000 Units</option>
                <option value="1000-5000">1,000 - 5,000 Units</option>
                <option value="5000+">5,000+ Units (Enterprise)</option>
              </select>
            </div>

            {/* Belt Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5">
                Belt Category
              </label>
              <select
                name="preferredCategory"
                value={formData.preferredCategory}
                onChange={handleChange}
                className="w-full px-3.5 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="all">All Belt Styles</option>
                <option value="formal">Formal & Dress Belts</option>
                <option value="casual">Casual & Heavy Veg-Tan</option>
                <option value="braided">Braided & Woven Belts</option>
                <option value="designer">Designer & Runway Statement</option>
                <option value="mens-core">Signature Men's Reversible</option>
              </select>
            </div>
          </div>

          {/* Message / Specifications */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-cognac" />
              <span>Project Details & Specifications *</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about desired leather finishes, width (e.g. 35mm), hardware preferences, custom debossing requirements, or target delivery dates..."
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition-all resize-y ${
                errors.message ? 'border-red-400 bg-red-50/30' : 'border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900'
              }`}
            ></textarea>
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-stone-950 hover:bg-stone-800 active:scale-[0.99] disabled:opacity-60 shadow transition-all flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Atelier Dispatch...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Quote & Production Inquiry</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-stone-500 text-center mt-3">
              We respect your IP. Non-Disclosure Agreements (NDA) honored for proprietary brand hardware & tooling.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
