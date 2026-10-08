import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, Building2, Mail, User, Target, IndianRupee } from 'lucide-react';

interface CompanyCampaignFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultObjective?: string;
}

export const CompanyCampaignFormModal: React.FC<CompanyCampaignFormModalProps> = ({
  isOpen,
  onClose,
  defaultObjective = 'Sampling & Product Trials',
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [objective, setObjective] = useState(defaultObjective);
  const [budgetRange, setBudgetRange] = useState('₹50,000 – ₹1,50,000');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your name';
    if (!workEmail.trim() || !workEmail.includes('@') || !workEmail.includes('.')) {
      errs.workEmail = 'Please provide a valid work email';
    }
    if (!companyName.trim()) errs.companyName = 'Please enter your company or brand name';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setWorkEmail('');
    setCompanyName('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-form-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Brand Partnership Brief
            </div>
            <h3 id="campaign-form-title" className="text-lg font-bold text-white">
              Launch Your Campaign on Funngro
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:ring-2 focus:ring-emerald-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Campaign Brief Received!</h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thanks, <strong className="text-slate-900">{fullName}</strong> from{' '}
              <strong className="text-slate-900">{companyName}</strong>! Your campaign request for{' '}
              <span className="text-emerald-700 font-semibold">{objective}</span> has been captured in this frontend demo.
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-slate-600 text-left space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Budget:</span>
                <span className="font-semibold text-slate-900">{budgetRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span className="font-mono text-slate-900">{workEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Next Step:</span>
                <span className="text-emerald-700 font-medium">Account strategist brief call</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Live Estimator Callout */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3.5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900">
                <span className="font-semibold">Instant Campaign Model: </span>
                <span>
                  Our team curates and launches most campaigns within 48–72 hours across 400+ Indian university hubs.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="vikram@company.com"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
                {errors.workEmail && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.workEmail}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brand / Company Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Volt Beverages"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Campaign Objective
                </label>
                <div className="relative">
                  <Target className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white"
                  >
                    <option value="Sampling & Product Trials">Product Sampling & Trials</option>
                    <option value="Authentic UGC & Video Reels">Authentic UGC & Reels</option>
                    <option value="Campus Referrals & Signups">Campus Referrals & Signups</option>
                    <option value="Consumer Surveys & Market Research">Consumer Surveys</option>
                    <option value="App Testing & UX Bugs">App Testing & UX Feedback</option>
                    <option value="Nano-Influencer Campus Blitz">Nano-Influencer Blitz</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Planned Pilot Budget
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none bg-white font-mono"
                >
                  <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Pilot Sprint)</option>
                  <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000 (Standard Wave)</option>
                  <option value="₹1,50,000 – ₹5,00,000">₹1,50,000 – ₹5,00,000 (Multi-City)</option>
                  <option value="₹5,00,000+">₹5,00,000+ (Pan-India Enterprise Blitz)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Campaign Specifics or Target Audience Notes
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share target demographic (e.g., college students aged 18-22 in Bengaluru/Pune), target number of units, or desired launch timeline..."
                className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
              >
                <span>Submit Campaign Brief</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
