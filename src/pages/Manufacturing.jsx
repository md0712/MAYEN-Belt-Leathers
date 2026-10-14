import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  Factory, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function Manufacturing({ onOpenQuote, onNavigate }) {
  const steps = [
    {
      step: "01",
      title: "Full-Grain Hide Grading & Hand Selection",
      description: "We procure exclusively top 5% grade European steer hides. Master cutters inspect every hide under natural full-spectrum lighting to avoid neck wrinkles, wire marks, or scars while optimizing the prime bend section.",
      detail: "Zero top-coat buffing. All natural leather pores remain untouched."
    },
    {
      step: "02",
      title: "Botanical Vegetable Tanning & Drum Penetration",
      description: "Immersed in deep wooden vats utilizing natural tannins derived from chestnut wood, quebracho, and mimosa bark. The dye permeates through 100% of the hide's cross-section, guaranteeing that surface nicks never reveal white raw fibers.",
      detail: "40-day slow tanning cycle for unmatched tensile density."
    },
    {
      step: "03",
      title: "Precision Gauge Splitting & Feathered Skiving",
      description: "Computerized band-knife splitters calibrate uniform thickness to within ±0.1mm tolerance. The ends and keeper loops are precisely skived on beveling machines so the buckle fold lays completely flat with zero bulging.",
      detail: "Uniform 3.8mm to 4.2mm single-piece thickness."
    },
    {
      step: "04",
      title: "High-Tensile Saddle Stitching & Reinforcement",
      description: "Sewn using heavy-gauge bonded polyamide and double-waxed threads with reinforced back-tack lockstitches. Needle tension is individually balanced for each leather temper to prevent puckering.",
      detail: "Tested to 180kg pulling force per stitch line."
    },
    {
      step: "05",
      title: "5-Tier Edge Beveling & Natural Friction Burnish",
      description: "Raw edges are hand-planed with French edgers, coated with Italian organic edge-seal dye, heated with hot irons, and burnished with natural carnauba beeswax using high-speed rosewood wheels.",
      detail: "Produces a smooth, glass-like waterproof edge that never cracks or peels."
    },
    {
      step: "06",
      title: "Solid Hardware Fitting & Custom Brand Debossing",
      description: "Buckles are secured via heavy-duty solid brass Chicago screws or peened copper rivets. Private label logos, size denominations, and 'Handcrafted' stamps are applied via high-temperature pneumatic debossing dies.",
      detail: "Custom zinc, brass, or palladium hardware plating."
    },
    {
      step: "07",
      title: "ASTM Quality Control & Export Packaging",
      description: "Each finished belt undergoes 100% inspection for dimensional accuracy, color consistency, and hardware articulation. Rolled with protective velvet wraps or inserted in custom branded rigid gift boxes.",
      detail: "Barcoded, polybagged, and packed in heavy export master cartons."
    }
  ];

  return (
    <div className="py-8 sm:py-12 space-y-16 bg-[#faf7f4] text-stone-900">
      {/* Hero Banner (No Box, Clean Breadcrumb) */}
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
          <span className="text-stone-950 font-semibold">Manufacturing</span>
        </nav>

        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47148]/10 text-stone-900 border border-[#A47148]/25 text-[11px] sm:text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Factory className="w-3.5 h-3.5 text-[#A47148]" />
            Advanced Factory & Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-stone-950">
            The 7-Stage Manufacturing Architecture
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Where artisan bench traditions scale into a 350,000+ belt annual export facility. Precision, repeatability, and unyielding material integrity.
          </p>
        </div>
      </section>

      {/* Process Walkthrough Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="From Raw Hide to Finished Heirloom"
          title="The Standard of Master Execution"
          subtitle="Step inside our workflow to understand why our belts resist sagging, edge-peeling, and hardware failure."
        />

        <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-400 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-stone-950 text-white flex items-center justify-center font-serif text-xl sm:text-2xl font-bold shadow-md">
                {s.step}
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-950 mb-1.5 sm:mb-2">
                  {s.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-base leading-relaxed mb-3">
                  {s.description}
                </p>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-cognac bg-stone-50 px-2.5 sm:px-3 py-1 rounded-lg border border-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cognac flex-shrink-0" />
                  <span>Technical Benchmark: {s.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Capacities Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 border border-stone-200 shadow-sm">
          <SectionTitle 
            badge="Technical Specifications"
            title="OEM Factory Capabilities & Lead Times"
            subtitle="Reliable B2B parameters for retail brands, corporate gifts, and luxury department chains."
          />

          <div className="overflow-x-auto mt-8 -mx-5 px-5 sm:mx-0 sm:px-0">
            <table className="min-w-[600px] w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-stone-900 text-xs font-bold uppercase tracking-wider text-stone-950">
                  <th className="py-3 px-3 sm:px-4">Manufacturing Parameter</th>
                  <th className="py-3 px-3 sm:px-4">Factory Standard</th>
                  <th className="py-3 px-3 sm:px-4">Custom Options Available</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Monthly Belt Capacity</td>
                  <td className="py-3.5 px-3 sm:px-4">50,000 units / month</td>
                  <td className="py-3.5 px-3 sm:px-4">Scalable up to 80,000 for peak holiday retail</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Minimum Order Quantity (MOQ)</td>
                  <td className="py-3.5 px-3 sm:px-4">100 units / style / color</td>
                  <td className="py-3.5 px-3 sm:px-4">Sample prototypes available (1-10 pcs)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Strap Width Capabilities</td>
                  <td className="py-3.5 px-3 sm:px-4">25mm, 30mm, 32mm, 34mm, 35mm, 38mm, 40mm</td>
                  <td className="py-3.5 px-3 sm:px-4">Custom width dies tooling upon request</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Hardware Mold Casting</td>
                  <td className="py-3.5 px-3 sm:px-4">Solid Brass, Zinc-Alloy, Stainless Steel</td>
                  <td className="py-3.5 px-3 sm:px-4">Lost-wax sculptural bronze, laser logo engraving</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Production Lead Time</td>
                  <td className="py-3.5 px-3 sm:px-4">18 - 25 business days</td>
                  <td className="py-3.5 px-3 sm:px-4">Expedited air-dispatch batches available</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-stone-900">Compliance & Chemical Testing</td>
                  <td className="py-3.5 px-3 sm:px-4">REACH, Prop 65, Nickel-Free, Azo-Free</td>
                  <td className="py-3.5 px-3 sm:px-4">Independent SGS or Intertek batch testing certificates</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-stone-500 text-center sm:text-left">Need specific custom tooling or custom alloy finishes?</span>
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit Technical Drawing / Tech Pack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
