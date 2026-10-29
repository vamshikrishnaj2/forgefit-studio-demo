import React from 'react';
import { Award, ArrowUpRight, ShieldCheck, UserCheck } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { SafeImage } from './SafeImage';

interface TrainersProps {
  onSelectTrainer: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-[#0B0E14] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
              Coaching Staff
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Professional, credentialed coaches.
            </h2>
          </div>
          <div className="bg-[#121620] border border-orange-500/30 px-3.5 py-2 rounded text-xs text-orange-300 flex items-center gap-2 max-w-sm">
            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Fictional demo profiles created for portfolio display purposes.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#121620] border border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-all duration-200 shadow-xl"
            >
              <div>
                <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                  <SafeImage
                    src={trainer.image}
                    alt={`Coach ${trainer.name}`}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    fallbackContent={
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <UserCheck className="w-12 h-12 text-zinc-600 mb-3" />
                        <span className="font-display text-lg font-bold text-white mb-1">
                          {trainer.name}
                        </span>
                      </div>
                    }
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-zinc-700/80 px-2.5 py-1 rounded text-[10px] font-mono uppercase text-zinc-300">
                    Demo Profile
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                      {trainer.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 text-xs text-zinc-400 mb-4 pb-4 border-b border-zinc-800/70">
                    {trainer.credentials.map((cred, i) => (
                      <span key={i} className="inline-flex items-center gap-1">
                        <Award className="w-3 h-3 text-orange-500/80" />
                        <span className="text-zinc-300 font-mono text-[11px]">{cred}</span>
                        {i < trainer.credentials.length - 1 && <span className="text-zinc-600 ml-1">·</span>}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {trainer.bio}
                  </p>

                  <div className="mb-6">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                      Specializations:
                    </span>
                    <div className="space-y-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectTrainer(trainer.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white hover:text-black bg-zinc-800 hover:bg-orange-500 border border-zinc-700/80 hover:border-orange-500 rounded transition-all duration-150 uppercase tracking-wider cursor-pointer"
                >
                  <span>Book Demo Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
