import React from 'react';
import { Quote, AlertCircle, Sparkles } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/gymData';

export const SampleTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0C10] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Explicitly required title & demo label */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-700/80 px-3 py-1 rounded text-xs text-orange-400 font-medium mb-4">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>PORTFOLIO DEMONSTRATION CONTENT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Sample testimonial layout.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            The cards below illustrate typography, quote hierarchy, and member outcome formatting for portfolio demonstration purposes. All names and statements are fictional examples.
          </p>
        </div>

        {/* Testimonial Template Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#10131B] border border-zinc-800/90 rounded-lg p-7 sm:p-8 flex flex-col justify-between relative hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-orange-500/60" />
                  <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                    {item.archetype}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-zinc-200 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author / Demo Metadata */}
              <div className="pt-5 border-t border-zinc-800/80">
                <span className="font-semibold text-white text-xs block mb-0.5">
                  {item.memberContext}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                  <span className="text-orange-400">{item.focusArea}</span>
                  <span className="text-zinc-600" aria-hidden="true">·</span>
                  <span>{item.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design Note Box */}
        <div className="mt-8 p-4 rounded bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
          <p>
            <strong>Layout Integrity Note:</strong> In production gym deployments, this section connects to verified member outcome surveys or video case studies with before/after biomechanics tracking. For this portfolio demo, no real customer results are fabricated.
          </p>
        </div>
      </div>
    </section>
  );
};
