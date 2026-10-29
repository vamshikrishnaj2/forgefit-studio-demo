import React, { useState } from 'react';
import { ArrowUpRight, Clock, Users, Calendar, Check, X } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-24 bg-[#0B0E14] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
              Coaching Curriculum
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Purpose-built training systems.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Every session is designed around progressive overload, biomechanical longevity, and measurable strength benchmarks.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROGRAMS.map((program, idx) => (
            <div
              key={program.id}
              className="group relative bg-[#121620] hover:bg-[#151a26] border border-zinc-800/80 hover:border-orange-500/50 rounded-lg p-7 sm:p-9 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header row: Index & Ratio */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-zinc-500 font-semibold tracking-wider">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-medium text-orange-400/90 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{program.coachingRatio}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-xs font-medium text-zinc-400 mb-4 uppercase tracking-wider">
                  {program.subtitle}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Key Outcomes */}
                <div className="space-y-2.5 mb-8">
                  {program.keyOutcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      <span className="leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="pt-6 border-t border-zinc-800/80">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-5">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{program.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{program.frequency}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/60 rounded transition-colors cursor-pointer text-center"
                  >
                    View Curriculum
                  </button>

                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 rounded transition-all cursor-pointer uppercase tracking-wider shadow-sm"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Curriculum Detail Modal */}
      {activeModalProgram && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModalProgram(null)}
        >
          <div
            className="bg-[#121620] border border-zinc-700/80 rounded-lg max-w-xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-zinc-100 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-md bg-zinc-800/60 hover:bg-zinc-800"
              aria-label="Close curriculum modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 block mb-2">
              Program Syllabus & Structure
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeModalProgram.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {activeModalProgram.description}
            </p>

            <div className="bg-[#0B0D12] border border-zinc-800 rounded-md p-4 mb-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                Weekly Microcycle Sample
              </h4>
              <div className="space-y-2.5">
                {activeModalProgram.scheduleSample.map((slot, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-zinc-800/60 last:border-none gap-1">
                    <span className="font-medium text-orange-400 shrink-0 sm:w-28">{slot.day}</span>
                    <span className="text-zinc-300">{slot.focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Program Specifications
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-zinc-800/40 p-3 rounded border border-zinc-800">
                  <span className="text-zinc-400 block mb-1">Coaching Attention</span>
                  <span className="font-semibold text-white">{activeModalProgram.coachingRatio}</span>
                </div>
                <div className="bg-zinc-800/40 p-3 rounded border border-zinc-800">
                  <span className="text-zinc-400 block mb-1">Duration</span>
                  <span className="font-semibold text-white">{activeModalProgram.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onSelectProgram(title);
                }}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-orange-500 hover:bg-orange-400 rounded transition-colors text-center cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Enquire for {activeModalProgram.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
