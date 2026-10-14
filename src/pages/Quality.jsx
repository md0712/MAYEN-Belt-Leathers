import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  ShieldCheck, 
  FlaskConical, 
  Scale, 
  Droplets, 
  CheckCircle, 
  Award, 
  FileCheck2
} from 'lucide-react';

export default function Quality({ onOpenQuote, onNavigate }) {
  const tests = [
    {
      icon: Scale,
      title: "Tensile Strength & Hole Elongation (ASTM D2209)",
      standard: "Pass Threshold: > 180 kgf",
      description: "We subject belt straps and prong holes to extreme pneumatic tension pulling. The grain must not stretch beyond 2.5% elasticity or tear through the holes."
    },
    {
      icon: FlaskConical,
      title: "Bally Flexometer Endurance (ISO 5402)",
      standard: "Pass Threshold: 50,000 Flex Cycles",
      description: "Simulating decades of buckle buckling and unbuckling. The leather face, finish coats, and edge burnish must exhibit zero micro-cracks or delamination."
    },
    {
      icon: Droplets,
      title: "72-Hour Salt-Spray Hardware Chamber (ASTM B117)",
      standard: "Pass Threshold: 0% Rust / Tarnishing",
      description: "Buckles, keepers, and Chicago screws spend 3 full days suspended in heated saline vapor mist to ensure maritime humidity and sweat will never pit or oxidize the metal."
    },
    {
      icon: ShieldCheck,
      title: "Wet & Dry Crockmeter Colorfastness (ISO 11640)",
      standard: "Pass Threshold: Grade 4.5+ on Grey Scale",
      description: "Friction testing against white wool felt under dry and saturated moisture conditions. Guarantees your leather belt will never bleed dye onto white dress shirts or light chinos."
    },
    {
      icon: Award,
      title: "EN 1811 Nickel-Release Compliance",
      standard: "Pass Threshold: < 0.28 µg/cm²/week",
      description: "All metal components are tested for EU REACH chemical compliance and hypoallergenic standards, preventing skin irritation and metal allergies."
    },
    {
      icon: FileCheck2,
      title: "Dimensional & Edge Thickness Uniformity",
      standard: "Tolerance: ± 0.15 mm",
      description: "Laser micrometer scanning across the entire 120cm strap length to ensure zero taper variation or uneven thickness profile."
    }
  ];

  return (
    <div className="py-8 sm:py-12 space-y-16 bg-[#faf7f4] text-stone-900">
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
          <span className="text-stone-950 font-semibold">Quality Standards</span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 sm:pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A47148] block mb-1.5">
              ASTM & ISO Certified Standards
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 tracking-tight">
              Uncompromising Quality Assurance
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              We test beyond international luxury guidelines so that every belt bearing your brand's insignia earns an immaculate reputation.
            </p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#A47148]/25 shadow-sm flex items-center justify-center text-stone-900 flex-shrink-0">
            <ShieldCheck className="w-7 h-7 text-[#A47148]" />
          </div>
        </div>
      </section>

      {/* Laboratory Test Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="In-House Testing Laboratory"
          title="6 Rigorous Mechanical & Chemical Tests"
          subtitle="Every production run undergoes sample batch testing before leaving our facility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-12">
          {tests.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div key={idx} className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center mb-4 sm:mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cognac" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-950 mb-1.5 sm:mb-2">
                    {t.title}
                  </h3>
                  <div className="inline-block px-2.5 py-0.5 sm:py-1 rounded bg-[#A47148]/10 text-[#8c4d28] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2.5 sm:mb-3 border border-[#A47148]/25">
                    {t.standard}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {t.description}
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-cognac" /> Certified Laboratory Standard
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3-Tier Quality Inspection Protocol */}
      <section className="bg-stone-50 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Inspection Protocol"
            title="A 3-Gate Defense Against Defects"
            subtitle="How we maintain our 99.8% first-pass acceptance rate across export consignments."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-8 sm:mt-12">
            <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-stone-200 shadow-sm">
              <span className="font-serif text-3xl font-bold text-cognac block mb-2">Gate 1</span>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">Incoming Raw Hide Audit</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Inspection for moisture content, temper softness, grain thickness uniformity, and grain scar freedom prior to cutting.
              </p>
              <ul className="text-xs text-stone-500 space-y-2">
                <li>&bull; Moisture meter check (12-14% optimal)</li>
                <li>&bull; Thickness gauge verification</li>
                <li>&bull; Color spectrophotometer comparison</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <span className="font-serif text-3xl font-bold text-cognac block mb-2">Gate 2</span>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">In-Line Assembly Checks</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Real-time inspection after strap cutting, skiving, edge beveling, and initial buckle lock-stitch.
              </p>
              <ul className="text-xs text-stone-500 space-y-2">
                <li>&bull; Needle tension & stitch-per-inch count</li>
                <li>&bull; Edge dye adhesion & smoothness</li>
                <li>&bull; Centering of prong punch holes</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
              <span className="font-serif text-3xl font-bold text-cognac block mb-2">Gate 3</span>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-3">100% Pre-Pack Signoff</h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Every single individual belt is wiped with organic conditioning wax, polished, and checked under high-lumen white inspection lamps.
              </p>
              <ul className="text-xs text-stone-500 space-y-2">
                <li>&bull; Hardware scratch and torque verification</li>
                <li>&bull; Barcode, hangtag, and size labeling check</li>
                <li>&bull; Desiccant packet & master pack drop test</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-stone-950 p-10 rounded-3xl text-white shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Request an Independent Quality Audit Report
          </h3>
          <p className="text-sm text-stone-300 max-w-xl mx-auto mb-6">
            We happily furnish full lab test sheets, RoHS chemical declarations, and third-party inspection certifications for commercial buyers.
          </p>
          <button
            onClick={() => onOpenQuote()}
            className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-950 bg-white hover:bg-stone-100 transition-colors"
          >
            Request Lab Test Documentation
          </button>
        </div>
      </section>
    </div>
  );
}
