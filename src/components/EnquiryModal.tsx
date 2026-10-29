import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROGRAMS, MEMBERSHIP_PLANS } from '../data/gymData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    plan?: string;
    program?: string;
    trainer?: string;
  };
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, prefill }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programOrPlan: 'Strength Training',
    preferredTime: 'Morning (5:30 AM – 9:00 AM)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefill) {
      if (prefill.plan) {
        setFormData((prev) => ({ ...prev, programOrPlan: `${prefill.plan} Plan` }));
      } else if (prefill.program) {
        setFormData((prev) => ({ ...prev, programOrPlan: prefill.program! }));
      }
      if (prefill.trainer) {
        setFormData((prev) => ({
          ...prev,
          notes: `Interested in working with Coach ${prefill.trainer}.`,
        }));
      }
    }
  }, [prefill]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone).');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-[#121620] border border-zinc-700/90 rounded-lg max-w-lg w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-zinc-100 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-md bg-zinc-800/80 hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Enquiry Submitted (Demo)
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Thanks <strong className="text-white">{formData.fullName}</strong>. In a live studio environment, our coaching team would reach out within 24 hours to confirm your consultation for <span className="text-orange-400">{formData.programOrPlan}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-black bg-orange-500 hover:bg-orange-400 rounded transition-colors cursor-pointer"
              >
                Close Demo Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 block mb-1">
              Start Your Journey · Consultation
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Book a Movement Consultation
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Experience the ForgeFit training methodology firsthand. Our team will review your movement and recommend the optimal training track.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cameron Diaz"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="cameron@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Phone *
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
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Program or Plan
                </label>
                <select
                  value={formData.programOrPlan}
                  onChange={(e) => setFormData({ ...formData, programOrPlan: e.target.value })}
                  className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <optgroup label="Training Programs">
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

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Notes or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific goals or schedule preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0B0D12] border border-zinc-800 rounded px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-orange-500 hover:bg-orange-400 rounded transition-all cursor-pointer shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Demo Form...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-zinc-500 text-center mt-2">
                  Portfolio Concept Demonstration · Fictional submission
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
