import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Navigation, Car, Shield, Compass } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const LocationHours: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    // Dynamic calculation based on current hour
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours() + now.getMinutes() / 60;

    if (day === 0) {
      // Sunday: 8:00 to 15:00
      setIsOpenNow(hour >= 8 && hour < 15);
    } else if (day === 6) {
      // Saturday: 7:00 to 18:00
      setIsOpenNow(hour >= 7 && hour < 18);
    } else {
      // Mon-Fri: 5:30 to 21:00
      setIsOpenNow(hour >= 5.5 && hour < 21);
    }
  }, []);

  return (
    <section className="py-24 bg-[#0B0E14] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
            Facility Logistics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Location & training hours.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the Industrial District with dedicated member parking, transit access, and expansive training hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="bg-[#121620] border border-zinc-800 rounded-lg p-6 sm:p-7">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 mb-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <h3 className="font-display text-xl font-bold text-white">Operating Hours</h3>
                </div>
                {/* Live Status indicator */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'
                    }`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    {isOpenNow ? 'Facility Open Now' : 'Currently Closed'}
                  </span>
                </div>
              </div>

              {/* Weekly schedule */}
              <div className="space-y-4">
                {GYM_DETAILS.hours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-zinc-800/40 last:border-none"
                  >
                    <span className="text-zinc-300 font-medium">{schedule.days}</span>
                    <span className="text-zinc-400 font-mono tabular-nums">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-800/60 text-xs text-zinc-500 flex items-center gap-2">
                <span>Keycard access active during all operating blocks.</span>
              </div>
            </div>

            {/* Parking & Accessibility */}
            <div className="bg-[#121620] border border-zinc-800 rounded-lg p-6 space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Dedicated Member Parking:</strong>
                  24 reserved spots directly in front of the building entrance. Free for all active members.
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-zinc-800/60">
                <Navigation className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Transit Connections:</strong>
                  Located 300 meters from Central Industrial Station (Line B). Indoor secured bicycle lockers on-site.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address & Facility Floor Map Blueprint (7 cols) */}
          <div className="lg:col-span-7 bg-[#121620] border border-zinc-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-1">
                    Demo Facility Address
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {GYM_DETAILS.address.street}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">
                    {GYM_DETAILS.address.suite} · {GYM_DETAILS.address.cityStateZip}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-orange-400">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed bg-[#0B0E14] p-3.5 rounded border border-zinc-800/80">
                {GYM_DETAILS.address.directionsNote}
              </p>
            </div>

            {/* Stylized Architectural Floor Blueprint Graphic */}
            <div className="relative rounded-md bg-[#080A0E] border border-zinc-800 p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Facility Floor Layout — 9,500 Sq Ft
                </span>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded">
                  Zoned Training
                </span>
              </div>

              {/* Blueprint Grid schematic */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-[#121722] border border-zinc-700/60 p-4 rounded hover:border-orange-500/50 transition-colors">
                  <span className="font-mono text-orange-400 font-bold block mb-1">ZONE A</span>
                  <span className="text-white font-semibold block text-xs">8x Barbell Cages</span>
                  <span className="text-[11px] text-zinc-400">Eleiko Platforms</span>
                </div>
                <div className="bg-[#121722] border border-zinc-700/60 p-4 rounded hover:border-orange-500/50 transition-colors">
                  <span className="font-mono text-orange-400 font-bold block mb-1">ZONE B</span>
                  <span className="text-white font-semibold block text-xs">30m Sled Turf</span>
                  <span className="text-[11px] text-zinc-400">Ergometers & Bells</span>
                </div>
                <div className="bg-[#121722] border border-zinc-700/60 p-4 rounded hover:border-orange-500/50 transition-colors">
                  <span className="font-mono text-orange-400 font-bold block mb-1">ZONE C</span>
                  <span className="text-white font-semibold block text-xs">Recovery Suite</span>
                  <span className="text-[11px] text-zinc-400">Percussive & Bands</span>
                </div>
              </div>

              <p className="text-[11px] text-zinc-500 text-center mt-4">
                Note: Address and layout blueprint represent simulated portfolio concept specs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
