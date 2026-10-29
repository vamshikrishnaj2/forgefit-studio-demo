import React, { useState } from 'react';
import { Check, Info, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="membership" className="py-24 bg-[#0B0E14] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
            Membership Options
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Transparent training plans.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Straightforward pricing with zero sign-up initiation gimmicks, long-term trap contracts, or hidden facility fees.
          </p>

          {/* Mandatory Demo Label Banner */}
          <div className="mt-6 inline-flex items-center gap-2 bg-orange-950/60 border border-orange-500/40 px-4 py-1.5 rounded-full text-xs text-orange-300 font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span>SAMPLE DEMO PRICING — Prices and tiers are fictional portfolio examples</span>
          </div>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="inline-flex p-1 bg-[#121620] border border-zinc-800 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-zinc-800 text-white shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly Flexible
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-orange-500 text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Annual Commit</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                  billingCycle === 'annual' ? 'bg-black/20 text-black' : 'bg-orange-950 text-orange-400'
                }`}>
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPriceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-lg p-8 flex flex-col justify-between transition-all duration-200 ${
                  plan.isPopular
                    ? 'bg-[#141926] border-2 border-orange-500 shadow-2xl shadow-orange-500/10 scale-[1.02]'
                    : 'bg-[#10131B] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular Kicker */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[11px] font-bold uppercase tracking-wider px-3.5 py-0.5 rounded shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase bg-zinc-800/80 text-zinc-400 border border-zinc-700/60 px-2 py-0.5 rounded">
                      Demo Tier
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 min-h-[36px] mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price display with tabular nums */}
                  <div className="pb-6 mb-6 border-b border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white tracking-tight tabular-nums">
                        ${price}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-zinc-500 block mt-1">
                      {billingCycle === 'annual' ? 'Billed annually ($' + (price * 12) + '/yr demo)' : 'Month-to-month demo rate'}
                    </span>
                    <span className="text-[10px] text-orange-400/90 font-medium block mt-1">
                      SAMPLE DEMO PRICING
                    </span>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">
                      Included Privileges:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 transition-all ${
                      plan.isPopular
                        ? 'bg-orange-500 hover:bg-orange-400 text-black shadow-lg shadow-orange-500/20 active:scale-[0.98]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600'
                    }`}
                  >
                    <span>Select {plan.name} (Demo)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center mt-2.5">
                    No credit card required for demo enquiry
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
