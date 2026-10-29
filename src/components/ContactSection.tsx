import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import { GYM_DETAILS, PROGRAMS, MEMBERSHIP_PLANS } from '../data/gymData';

interface ContactSectionProps {
  initialPrefill?: {
    plan?: string;
    program?: string;
    trainer?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPrefill }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programOrPlan: initialPrefill?.plan || initialPrefill?.program || 'Strength Training',
    preferredTime: 'Morning (5:30 AM – 9:00 AM)',
    message: initialPrefill?.trainer ? `I would like to schedule a demo consultation with ${initialPrefill.trainer}.` : '',
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(GYM_DETAILS.contact.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name, email, and phone number.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate realistic asynchronous network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      programOrPlan: 'Strength Training',
      preferredTime: 'Morning (5:30 AM – 9:00 AM)',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0C10] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Direct contact & enquiries.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Reach out via phone, instant message, or complete the booking form below to arrange a guided floor tour and consultation.
          </p>
        </div>

        {/* 3 Channels: Call, WhatsApp, Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Quick Channels Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* 1. Call Card */}
            <div className="bg-[#121620] border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase font-mono block">Direct Voice (Demo)</span>
                  <span className="text-base font-bold text-white tabular-nums">{GYM_DETAILS.contact.phoneDisplay}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={GYM_DETAILS.contact.phoneHref}
                  className="flex-1 py-2 px-3 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-center transition-colors border border-zinc-700/60"
                >
                  Call Now
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors"
                  title="Copy demo number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 2. WhatsApp Card */}
            <div className="bg-[#121620] border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 uppercase font-mono block">Instant Messaging</span>
                  <span className="text-base font-bold text-white">Chat on WhatsApp</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Connect directly with our demo admissions desk for swift answers on training slots and availability.
              </p>
              <a
                href={GYM_DETAILS.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/50 rounded transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open WhatsApp Demo Chat</span>
              </a>
            </div>

            {/* Portfolio Notice Snippet */}
            <div className="bg-[#0B0D12] border border-zinc-800/80 rounded-lg p-4 text-[11px] text-zinc-400 space-y-1">
              <span className="font-semibold text-zinc-300 block">Portfolio Inquiry Note:</span>
              <p>
                All form submissions are simulated client-side events. No actual marketing emails or SMS calls will be dispatched.
              </p>
            </div>
          </div>

          {/* Enquiry Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-[#121620] border border-zinc-800 rounded-lg p-7 sm:p-9 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center max-w-md mx-auto space-y-4">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Demo Enquiry Received
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. In a live deployment, our admissions coach would review your selected focus (<span className="text-orange-400">{formData.programOrPlan}</span>) and reach out to schedule your movement consultation.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="py-2.5 px-6 text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded border border-zinc-700 cursor-pointer transition-colors"
                  >
                    Submit Another Demo Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Book a Facility Consultation
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Fill out the demo enquiry below to simulate scheduling a session.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Program or Membership Tier */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Program or Tier of Interest
                    </label>
                    <select
                      value={formData.programOrPlan}
                      onChange={(e) => setFormData({ ...formData, programOrPlan: e.target.value })}
                      className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <optgroup label="Programs">
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Membership Tiers">
                        {MEMBERSHIP_PLANS.map((m) => (
                          <option key={m.id} value={`${m.name} Plan`}>
                            {m.name} Plan
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Preferred Training Time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Preferred Daily Schedule
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="Early Morning (5:30 AM – 8:00 AM)">Early Morning (5:30 AM – 8:00 AM)</option>
                    <option value="Mid-Morning / Lunch (11:00 AM – 1:30 PM)">Mid-Morning / Lunch (11:00 AM – 1:30 PM)</option>
                    <option value="Evening (5:00 PM – 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                    <option value="Weekend Mornings (8:00 AM – 12:00 PM)">Weekend Mornings (8:00 AM – 12:00 PM)</option>
                  </select>
                </div>

                {/* Message / Goals */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Training Experience & Objectives (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your previous lifting background, current goals, or any injury considerations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold text-black bg-orange-500 hover:bg-orange-400 active:scale-[0.99] rounded transition-all uppercase tracking-wider cursor-pointer shadow-lg shadow-orange-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Demo Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Demo Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-zinc-500 text-center mt-2">
                    Simulated portfolio submission · No sensitive info required
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
