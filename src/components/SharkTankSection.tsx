import React from 'react';
import { ShieldCheck, Award, Tv, ArrowRight } from 'lucide-react';

interface SharkTankSectionProps {
  onStartEarning: () => void;
}

export const SharkTankSection: React.FC<SharkTankSectionProps> = ({ onStartEarning }) => {
  return (
    <section id="credibility" className="py-16 bg-slate-950 text-white border-y border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle background illumination */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-400 uppercase">
              <Tv className="w-4 h-4 text-emerald-400" />
              <span>National Investor Validation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured on Shark Tank India — Season 2
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Built for young India. Trusted enough to earn national attention from investors, educators, and 5,000+ top consumer brands.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs font-semibold text-emerald-400">Escrow Protected</div>
                <div className="text-xs text-slate-400 mt-1">
                  Brand funds locked in escrow prior to campaign start.
                </div>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs font-semibold text-emerald-400">Parental Safety</div>
                <div className="text-xs text-slate-400 mt-1">
                  Compliant minor onboarding with guardian approvals.
                </div>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs font-semibold text-emerald-400">Direct Bank & UPI</div>
                <div className="text-xs text-slate-400 mt-1">
                  Zero commission deducted from student earnings.
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onStartEarning}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Join India's Most Trusted Youth Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
