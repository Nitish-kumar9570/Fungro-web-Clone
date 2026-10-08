import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TeenFinalCTAProps {
  onStartEarning: () => void;
  onExploreOpportunities: () => void;
}

export const TeenFinalCTA: React.FC<TeenFinalCTAProps> = ({
  onStartEarning,
  onExploreOpportunities,
}) => {
  return (
    <section className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
              Start Your Journey
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your first opportunity starts with one step.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Discover real brand opportunities, build practical skills, and get paid for work you actually do. Zero fees, ever.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onStartEarning}
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Start Earning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreOpportunities}
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-sm border border-slate-800 transition-colors flex items-center justify-center"
              >
                Explore Opportunities
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-400">
              Free setup in under 3 minutes · Direct UPI & bank payouts · Available on Android & iOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
