import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface StickyMobileCTAProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <aside
      aria-label="Quick mobile action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#0A0C10]/95 backdrop-blur-md border-t border-zinc-800 px-4 flex items-center justify-between gap-3 shadow-2xl safe-area-bottom"
    >
      <a
        href={GYM_DETAILS.contact.phoneHref}
        className="h-10 px-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded transition-colors shrink-0"
        title="Call ForgeFit Demo"
      >
        <Phone className="w-3.5 h-3.5 text-orange-400" />
        <span className="hidden xs:inline">Call Demo</span>
      </a>

      <button
        onClick={onOpenEnquiry}
        className="flex-1 h-10 inline-flex items-center justify-center gap-2 text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 active:scale-[0.98] rounded uppercase tracking-wider cursor-pointer shadow-md shadow-orange-500/20"
      >
        <span>Enquire Now</span>
        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
      </button>
    </aside>
  );
};
