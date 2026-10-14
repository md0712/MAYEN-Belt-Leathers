import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCategoryCard from '../components/ProductCategoryCard';
import FeatureCard from '../components/FeatureCard';
import QuoteForm from '../components/QuoteForm';
import { beltCategories } from '../data/categories';
import { companyInfo } from '../data/company';
import { 
  Sparkles, 
  Layers, 
  Scissors, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Factory, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';

export default function Home({ onOpenQuote, onNavigate }) {
  const craftFeatures = [
    {
      icon: Layers,
      title: "100% Full-Grain Selection",
      description: "Only the uppermost, densest grain layer of prime European cattle hides is selected. Natural grain texture and breathability remain uncorrected and intact.",
      stepNumber: "01",
    },
    {
      icon: Scissors,
      title: "Hand-Beveled & Burnished Edges",
      description: "Each belt edge undergoes a 5-step hand-beveling, organic dye saturation, and high-speed friction burnish with natural beeswax for a glass-smooth edge.",
      stepNumber: "02",
      highlight: true,
    },
    {
      icon: Award,
      title: "Solid Lost-Wax Cast Hardware",
      description: "No cheap hollow pot metals. Our buckles are solid forged brass, bronze, or palladium-plated stainless steel, rated for 200kg+ tensile yield.",
      stepNumber: "03",
    },
    {
      icon: Factory,
      title: "Private Label & Global Logistics",
      description: "From custom debossed logo heat stamping to bespoke retail luxury gift packaging and door-to-door DDP international air/sea freight forwarding.",
      stepNumber: "04",
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-20 pb-12 sm:pb-16 bg-white text-stone-900">
      {/* Hero Section */}
      <Hero 
        onExploreCatalog={() => onNavigate('products')}
        onOpenQuote={() => onOpenQuote()}
      />

      {/* Brand Heritage & Statistics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-12 border border-[#A47148]/20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A47148]/10 text-stone-900 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 border border-[#A47148]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#A47148]" />
                <span>Generational Leathercraft</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mb-3 sm:mb-6 leading-tight">
                Crafting Belts That Define Generations of Style
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base">
                At MAYEN Leather, we believe a belt is not merely an accessory—it is an anchor of composure and an emblem of personal standard. Our atelier operates at the intersection of classical Old-World leathercraft and scalable high-precision export manufacturing.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5 bg-[#A47148]/[0.08] px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#A47148]/20">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A47148] flex-shrink-0" /> Non-Toxic Veg-Tanning
                </span>
                <span className="flex items-center gap-1.5 bg-[#A47148]/[0.08] px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#A47148]/20">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A47148] flex-shrink-0" /> Double Saddle Stitching
                </span>
                <span className="flex items-center gap-1.5 bg-[#A47148]/[0.08] px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#A47148]/20">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A47148] flex-shrink-0" /> Zero Synthetic Fillers
                </span>
              </div>
            </div>

            {/* Stats Counter Grid - Responsive on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6 bg-[#A47148]/[0.06] p-3.5 sm:p-8 rounded-xl sm:rounded-2xl border border-[#A47148]/20">
              {companyInfo.stats.map((stat, idx) => (
                <div key={idx} className="border-b border-[#A47148]/15 pb-2.5 sm:pb-4 last:border-none">
                  <p className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-stone-950 mb-0.5 sm:mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[9.5px] sm:text-xs uppercase tracking-wider text-stone-600 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          badge="Product Lines"
          title="Curated Belt Collections"
          subtitle="Explore our specialized manufacturing lines engineered for executive formalwear, rugged denim durability, hand-plaited stretch, and runway fashion."
          center={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {beltCategories.map((category) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              onSelect={() => onNavigate('products')}
              onQuoteRequest={(name) => onOpenQuote(name)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* Craftsmanship Highlights Banner - Subtle Leather Texture */}
      <section 
        className="relative py-20 border-y border-[#A47148]/20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/footer-leather.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#faf7f4]/75 backdrop-blur-[0.5px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="The MAYEN Benchmark"
            title="Master Artisanship Meets Industrial Rigor"
            subtitle="Four unyielding standards that separate an heirloom MAYEN belt from mass-market department store alternatives."
            center={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {craftFeatures.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('manufacturing')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-all shadow"
            >
              <span>Explore The 7-Stage Manufacturing Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Visual Showcase Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200">
            <img 
              src="/images/manufacturing.jpg" 
              alt="MAYEN Factory Workshop" 
              className="w-full h-[260px] sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <span className="px-2.5 sm:px-3 py-1 rounded bg-white text-stone-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-1.5 sm:mb-2 shadow">
                Export Capacity
              </span>
              <h3 className="font-serif text-lg sm:text-2xl font-bold">
                50,000+ Belts Manufactured Monthly
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-200 mt-1">
                Precision automated strap cutting combined with individual artisan hand-finishing.
              </p>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold uppercase tracking-wider border border-stone-200">
              <Compass className="w-3.5 h-3.5 text-cognac" />
              <span>Private Label & OEM Services</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950">
              Your Brand's Name. Our Atelier's Mastery.
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              We operate as the invisible backbone behind some of the world's most reputable luxury labels and premium menswear houses. We provide end-to-end custom manufacturing from concept sketches, 3D hardware CAD modeling, and custom dye matching to embossed leather debossing and barcode retail packaging.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cognac flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-950">Low Minimum Order Quantity (MOQ)</h4>
                  <p className="text-xs text-stone-500">Flexible 100-unit starter orders for independent fashion boutiques and emerging labels.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cognac flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-950">Custom Mold & Hardware Development</h4>
                  <p className="text-xs text-stone-500">Proprietary buckle molds, monogram engraving, and antique brushed finishes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cognac flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-950">Strict Quality Assurance & Testing</h4>
                  <p className="text-xs text-stone-500">Salt-spray rust tests, pull-strength tension test, and leather flexibility cycles.</p>
                </div>
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-stone-950 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow"
              >
                <span>Request Private Label Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('quality')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors border border-stone-200 text-center"
              >
                View Quality Lab
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>
    </div>
  );
}
