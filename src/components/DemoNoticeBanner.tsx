import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative z-50 bg-[#0E1118] border-b border-orange-500/30 text-zinc-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-orange-400 uppercase tracking-wider text-[11px] bg-orange-950/70 border border-orange-500/40 px-2 py-0.5 rounded">
            <AlertCircle className="w-3 h-3" />
            Portfolio Concept
          </span>
          <p className="text-zinc-200 font-medium">
            <span className="font-semibold text-white">DEMO CONCEPT</span> — Sample website for portfolio demonstration.
          </p>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] underline decoration-zinc-600 underline-offset-4"
          >
            <span>{isExpanded ? 'Hide Notice Details' : 'Portfolio Notice Details'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="bg-[#090B0F] border-t border-zinc-800/80 px-4 py-3 text-zinc-400 text-xs transition-all">
          <div className="max-w-7xl mx-auto flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-zinc-300 leading-relaxed">
              <p>
                <strong>Demo Disclaimer:</strong> ForgeFit is a fictional fitness studio concept created exclusively for portfolio evaluation.
              </p>
              <p className="text-zinc-400 text-[11px]">
                All business information, statistics, trainer profiles, schedules, membership pricing, and testimonials are mock design artifacts. No real-world contracts, transactions, or client claims are implied.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
