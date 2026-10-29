import React from 'react';
import { Layers, CalendarCheck, ShieldCheck, Dumbbell, Compass, Award } from 'lucide-react';

export const WhyForgeFit: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Structured programs',
      kicker: 'Deliberate Periodization',
      description:
        'We do not program random daily sweat sessions. Training cycles run in focused 8-to-12-week phases where weights, rep tempos, and movement progressions are tracked. You know exactly what you are training for every time you step on the platform.',
      bulletPoints: [
        'Clear block progression and planned recovery weeks',
        'Data-backed load adjustments rather than subjective guessing',
        'Built for lifelong joint longevity and durable strength',
      ],
    },
    {
      icon: CalendarCheck,
      title: 'Flexible training options',
      kicker: 'Lifestyle Integration',
      description:
        'Your training must fit your life to remain consistent. Between dawn and evening coached cohort blocks, 1-on-1 private appointments, and designated open lifting bays, our scheduling accommodates demanding professional and family commitments.',
      bulletPoints: [
        'Coached slots spanning early mornings, lunch hours, and evenings',
        'Open platform reservations for self-directed lifters',
        'Seamless in-app slot reservations and real-time bay availability',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Supportive environment',
      kicker: 'Ego-Free Culture',
      description:
        'Intimidation has no place on a training floor. ForgeFit brings together first-time lifters learning barbell mechanics and seasoned athletes sharpening conditioning. Every member respects the effort, regardless of the weight on the bar.',
      bulletPoints: [
        'Coaches who prioritize education and proper form over exhaustion',
        'Capped training bay sizes so you are never crowded or overlooked',
        'A culture rooted in mutual respect, patience, and encouragement',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Modern training space',
      kicker: 'Competition Grade Setup',
      description:
        'Built by coaches, not commercial franchise marketers. You will find heavy-gauge steel power cages, calibrated bumper plates, competition barbells, continuous sprint turf, and dedicated recovery tools—kept spotless and impeccably maintained.',
      bulletPoints: [
        'Heavy-gauge power racks with dual spotter pins & band pegs',
        '30-meter high-speed sled track and Concept2 cardiovascular fleet',
        'Curated mobility studio with percussive and compression restoration',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0A0C10] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
            Core Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            Why train at ForgeFit.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            We stripped away the vanity distractions of typical commercial gyms to build an environment where consistency is sustainable and training is purposeful.
          </p>
        </div>

        {/* 4 Pillars - Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#10131B] border border-zinc-800/90 rounded-lg p-8 sm:p-10 transition-colors duration-200 hover:border-zinc-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-600 font-semibold uppercase">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">
                    {pillar.kicker}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-zinc-800/70">
                  {pillar.bulletPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/70 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
