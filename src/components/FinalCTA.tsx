import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  const scrollToMembership = () => {
    const el = document.querySelector('#membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0B0E14] border-t border-zinc-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-4">
          Take The First Step
        </span>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
          Ready to get started?
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a complimentary movement assessment and guided facility walkthrough. Learn how our structured programming helps you build sustainable strength.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 active:scale-[0.98] rounded transition-all uppercase tracking-wider cursor-pointer shadow-xl shadow-orange-500/25"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={scrollToMembership}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold text-zinc-200 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded transition-all uppercase tracking-wider cursor-pointer"
          >
            <span>Explore Membership Tiers</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400" />
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-6">
          Portfolio Concept Demonstration · No automated billing or real transactions
        </p>
      </div>
    </section>
  );
};
