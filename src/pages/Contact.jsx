import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import QuoteForm from '../components/QuoteForm';
import { companyInfo } from '../data/company';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

export default function Contact({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is your Minimum Order Quantity (MOQ) for custom belts?",
      a: "Our standard production MOQ is 100 units per style/colorway. For emerging independent brands or new product testing, we offer sample prototype runs (1 to 10 units) with complete tooling and custom embossing prior to mass production."
    },
    {
      q: "Can you emboss our private label brand logo on the straps and buckle?",
      a: "Yes. We offer hot-stamped gold/silver foil debossing, blind heat debossing, laser engraving, and custom buckle casting with your brand trademark. We provide digital vector mockups within 24 hours of receiving your logo file."
    },
    {
      q: "What are the sample and bulk production lead times?",
      a: "Pre-production physical prototypes are produced and dispatched in 5 to 7 business days via DHL Express. Bulk manufacturing of 500 to 5,000 units is typically completed in 18 to 25 business days."
    },
    {
      q: "Which international incoterms and payment terms do you support?",
      a: "We support EXW, FOB, CIF, and DDP (Delivered Duty Paid directly to your commercial warehouse). Standard payment terms are 30% deposit upon order confirmation and 70% balance upon final pre-shipment inspection."
    }
  ];

  return (
    <div className="py-8 sm:py-12 space-y-16 bg-[#faf7f4] text-stone-900">
      {/* Top Banner (No Box, Clean Breadcrumb) */}
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
          <span className="text-stone-950 font-semibold">Contact</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A47148] block mb-1.5">
              Global Export & B2B Inquiries
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
              Connect With the Atelier
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              Whether you are an established department store chain, a high-end menswear label, or planning an exclusive corporate collection, our export directors are at your service.
            </p>
          </div>
          <a
            href={`https://web.whatsapp.com/send?phone=${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all flex items-center justify-center gap-2 whitespace-nowrap text-center flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Direct WhatsApp Inquiry</span>
          </a>
        </div>
      </section>

      {/* Main Grid: Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm space-y-5 sm:space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-950 border-b border-stone-100 pb-3">
                Factory & Atelier Headquarters
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-cognac" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Atelier Address</span>
                    <span className="text-stone-900 font-medium">{companyInfo.contact.address}</span>
                    <span className="text-stone-500 block text-xs">{companyInfo.contact.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-cognac" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Phone & WhatsApp Desk</span>
                    <a href={`tel:${companyInfo.contact.phone}`} className="text-stone-900 font-medium hover:text-cognac">
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-cognac" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">General & Export Email</span>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-stone-900 font-medium hover:text-cognac block">
                      {companyInfo.contact.email}
                    </a>
                    <a href={`mailto:${companyInfo.contact.exportEmail}`} className="text-stone-500 text-xs hover:text-cognac">
                      {companyInfo.contact.exportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-cognac" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">Business Hours</span>
                    <span className="text-stone-700 text-xs">{companyInfo.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B FAQ Accordion */}
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-stone-900" />
                <h3 className="font-serif text-lg font-bold text-stone-950">
                  Buyer Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left p-3.5 bg-stone-50 hover:bg-stone-100 flex justify-between items-center text-xs font-bold text-stone-950 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-stone-900" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-3.5 text-xs text-stone-600 leading-relaxed bg-white border-t border-stone-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form (7 cols) */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

        </div>
      </section>
    </div>
  );
}
