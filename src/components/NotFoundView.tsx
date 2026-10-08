import React from 'react';
import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundViewProps {
  onReturnHome: () => void;
  onExploreOpportunities: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  onReturnHome,
  onExploreOpportunities,
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md w-full bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
        <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto text-emerald-700">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '12s' }} />
        </div>

        <div>
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
            ERROR 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2">
            Looks like this opportunity hasn't been found.
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page or project you're seeking may have moved, expired, or been filled. Explore active brand opportunities or return to the main platform.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={onReturnHome}
            className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={onExploreOpportunities}
            className="flex-1 py-3 bg-stone-100 hover:bg-stone-200 text-slate-900 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Explore Tasks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
