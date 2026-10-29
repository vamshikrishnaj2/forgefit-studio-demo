import React, { useState } from 'react';
import { Maximize2, Shield, Sparkles, X, Check } from 'lucide-react';
import { FACILITIES } from '../data/gymData';
import { FacilitySpotlight } from '../types';

export const Facilities: React.FC = () => {
  const [activeFacilityModal, setActiveFacilityModal] = useState<FacilitySpotlight | null>(null);

  return (
    <section id="facilities" className="py-24 bg-[#0A0C10] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
              Training Space & Equipment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Engineered for athletic performance.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Every square foot is optimized for clear bar paths, safe drops, and uninterrupted training cadence.
          </p>
        </div>

        {/* Large Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero Card: Barbell & Power Room (7 cols) */}
          <div
            onClick={() => setActiveFacilityModal(FACILITIES[0])}
            className="lg:col-span-7 group relative rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 cursor-pointer min-h-[360px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8"
          >
            <img
              src={FACILITIES[0].image}
              alt={FACILITIES[0].title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/40 to-transparent" />

            <div className="relative z-10">
              <span className="text-[11px] font-mono text-orange-400 font-semibold uppercase tracking-wider block mb-2">
                {FACILITIES[0].category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                {FACILITIES[0].title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-xl leading-relaxed mb-4">
                {FACILITIES[0].description}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-zinc-300">
                {FACILITIES[0].specs.map((spec, i) => (
                  <span key={i} className="bg-black/60 backdrop-blur-sm border border-zinc-700/70 px-2.5 py-1 rounded">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-orange-400" />
            </div>
          </div>

          {/* Right Column: 2 Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Card 2: Conditioning Turf */}
            <div
              onClick={() => setActiveFacilityModal(FACILITIES[1])}
              className="group relative rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 cursor-pointer min-h-[220px] sm:min-h-[240px] flex flex-col justify-end p-6"
            >
              <img
                src={FACILITIES[1].image}
                alt={FACILITIES[1].title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/50 to-transparent" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase tracking-wider block mb-1">
                  {FACILITIES[1].category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                  {FACILITIES[1].title}
                </h3>
                <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed">
                  {FACILITIES[1].description}
                </p>
              </div>

              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
              </div>
            </div>

            {/* Card 3: Recovery Studio */}
            <div
              onClick={() => setActiveFacilityModal(FACILITIES[2])}
              className="group relative rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 cursor-pointer min-h-[220px] sm:min-h-[240px] flex flex-col justify-end p-6"
            >
              <img
                src={FACILITIES[2].image}
                alt={FACILITIES[2].title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.55] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/50 to-transparent" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono text-orange-400 font-semibold uppercase tracking-wider block mb-1">
                  {FACILITIES[2].category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                  {FACILITIES[2].title}
                </h3>
                <p className="text-zinc-300 text-xs line-clamp-2 leading-relaxed">
                  {FACILITIES[2].description}
                </p>
              </div>

              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Standards Bottom Strip */}
        <div className="mt-8 bg-[#10131B] border border-zinc-800 rounded-lg p-6 flex flex-wrap items-center justify-between gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-orange-500 shrink-0" />
            <span className="text-zinc-300 font-medium">
              Equipment Standards: Eleiko Competition Bumpers · Rogue Monster 3.0 Racks · Concept2 Ergs · Custom Turf
            </span>
          </div>
          <div className="text-zinc-400">
            Sanitized daily · Capped facility access to eliminate wait times
          </div>
        </div>
      </div>

      {/* Facility Image Modal */}
      {activeFacilityModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveFacilityModal(null)}
        >
          <div
            className="bg-[#121620] border border-zinc-700 rounded-lg max-w-2xl w-full overflow-hidden text-zinc-100 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <img
                src={activeFacilityModal.image}
                alt={activeFacilityModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveFacilityModal(null)}
                className="absolute top-3 right-3 bg-black/70 hover:bg-black p-2 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-mono text-orange-400 font-semibold uppercase tracking-wider block mb-1">
                {activeFacilityModal.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {activeFacilityModal.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                {activeFacilityModal.description}
              </p>

              <div className="border-t border-zinc-800 pt-4">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                  Included Amenities & Hardware:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeFacilityModal.specs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-300 bg-zinc-800/40 p-2 rounded border border-zinc-800">
                      <Check className="w-3.5 h-3.5 text-orange-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
