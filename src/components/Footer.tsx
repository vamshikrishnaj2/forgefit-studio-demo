import React from 'react';
import { GYM_DETAILS } from '../data/gymData';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07090D] border-t border-zinc-900 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Concept notice (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block font-display text-2xl font-extrabold tracking-tight text-white">
              FORGE<span className="text-orange-500">FIT</span>
            </a>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Athletic strength and conditioning studio concept. Structured barbell training, functional capacity, and small-group accountability.
            </p>
            <div className="pt-2 text-[11px] text-zinc-500">
              <strong className="text-zinc-400">Notice:</strong> This website is an interactive concept built for portfolio presentation. All statistics, testimonials, trainer biographies, and pricing models are fictional demo artifacts.
            </div>
          </div>

          {/* Quick Nav (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Navigation
            </span>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact Summary (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Location & Contact (Demo)
            </span>
            <p className="text-zinc-300">
              {GYM_DETAILS.address.street} <br />
              {GYM_DETAILS.address.cityStateZip}
            </p>
            <p className="text-zinc-400">
              Phone: {GYM_DETAILS.contact.phoneDisplay} <br />
              Email: {GYM_DETAILS.contact.email}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} ForgeFit Studio Concept. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Portfolio Concept Demonstration</span>
            <span aria-hidden="true">·</span>
            <span>Non-Commercial Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
