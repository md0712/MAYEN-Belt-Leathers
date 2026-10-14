import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { companyInfo } from '../data/company';
import { ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function About({ onOpenQuote, onNavigate }) {
  const milestones = [
    { year: "2021", title: "Atelier Founded", desc: "Established with 6 master bench craftsmen dedicated purely to traditional veg-tan leather belts." },
    { year: "2022", title: "LWG Gold Tannery Alliance", desc: "Formed direct sourcing agreements with certified eco-friendly European tanneries." },
    { year: "2023", title: "Global Export Expansion", desc: "Surpassed 100,000 annual belts shipped across 18 countries, launching private-label division." },
    { year: "2024", title: "ISO 9001 & ASTM Lab Certification", desc: "Constructed on-site testing facility for tensile flex, hardware salt-spray, and color fastness." },
    { year: "2026", title: "Next-Gen Scaled Atelier", desc: "Operating with 350,000+ unit yearly capacity while preserving hand-burnished artisan methods." }
  ];

  return (
    <div className="py-8 sm:py-12 space-y-16 bg-[#faf7f4] text-stone-900">
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
          <span className="text-stone-950 font-semibold">About Atelier</span>
        </nav>

        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47148]/10 text-stone-900 border border-[#A47148]/25 text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#A47148]" />
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-stone-950">
            The Soul of the Atelier.
          </h1>
          <p className="text-sm sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
            We reject the planned obsolescence of synthetic fast fashion. At MAYEN, leather is treated with reverence—honoring the raw hide through time-tested botanical tanning and uncompromising hand-stitch integrity.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionTitle 
              badge="Our Story"
              title="A Generational Pursuit of the Flawless Belt"
              subtitle="Where tradition meets modern export discipline."
            />
            <p className="text-stone-700 leading-relaxed text-base">
              {companyInfo.about}
            </p>
            <p className="text-stone-600 leading-relaxed text-sm">
              {companyInfo.story}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="block text-2xl font-serif font-bold text-stone-950 mb-1">Zero PU</span>
                <span className="text-xs text-stone-500">100% natural fiber hides, never bonded or synthetic scrap leather.</span>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="block text-2xl font-serif font-bold text-stone-950 mb-1">5-Step Edge</span>
                <span className="text-xs text-stone-500">Every edge is hand-beveled, dyed, and sealed with friction beeswax.</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <img 
              src="/images/craftsmanship.jpg" 
              alt="Leather Craftsman Stitching Belt" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif text-xl font-bold">Artisanal Saddle Stitching</p>
              <p className="text-xs text-stone-200 mt-1">
                Hand-pierced with diamond awls and sewn with double-waxed linen thread to ensure seams never unravel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="bg-stone-50 py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Growth & Milestones"
            title="From Boutique Bench to Global Export"
            subtitle="The key chapters defining our reputation in international leather goods manufacturing."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {milestones.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative flex flex-col justify-between">
                <div>
                  <span className="block font-serif text-2xl font-bold text-cognac mb-2">{item.year}</span>
                  <h3 className="font-serif text-base font-bold text-stone-950 mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-8 h-1 bg-stone-200 rounded-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Ethical Sourcing"
          title="Sustainability & International Compliance"
          subtitle="We take environmental stewardship as seriously as our craftsmanship standards."
          center={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {companyInfo.certifications.map((cert, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-cognac" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-950 mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#8c4d28] font-semibold">
                <Check className="w-4 h-4" /> Audited & Verified
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-stone-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">Looking for a Reliable OEM Manufacturing Partner?</h3>
            <p className="text-xs sm:text-sm text-stone-300">Request our factory audit reports, compliance certificates, and sample prototypes.</p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 transition-colors whitespace-nowrap shadow text-center"
          >
            Request Factory Packet
          </button>
        </div>
      </section>
    </div>
  );
}
