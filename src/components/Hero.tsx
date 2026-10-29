import React from 'react';
import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE } from '../data/gymData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0C10]">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Athlete training with barbell at ForgeFit strength studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
        />
        {/* Measured dark gradient scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/70 to-[#0A0C10]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C10]/95 via-[#0A0C10]/60 to-transparent" />
      </div>

      {/* Atmospheric subtle radial glow (subtle, non-neon) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Subtle Lead In - Zero-pill clean text metadata */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-5">
            <span className="w-8 h-[2px] bg-orange-500 inline-block" />
            <span>Athletic Strength & Conditioning Facility</span>
          </div>

          {/* Headline - Bold athletic display typography */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6 [text-wrap:balance]">
            Build strength. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
              Build consistency.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Structured training, expert guidance and a space designed to help you stay consistent.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={() => scrollToSection('#programs')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 hover:border-zinc-600 rounded-md transition-all duration-150 uppercase tracking-wider cursor-pointer shadow-lg"
            >
              <span>Explore Programs</span>
              <ArrowDown className="w-4 h-4 text-orange-400" />
            </button>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-black bg-orange-500 hover:bg-orange-400 active:scale-[0.98] rounded-md transition-all duration-150 uppercase tracking-wider cursor-pointer shadow-xl shadow-orange-500/25 group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Quiet Pillars - Clean unboxed text with subtle typographic separators */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Olympic-grade lifting platforms</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Capped coaching cohorts</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Periodized training blocks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
