import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface TeenHeroProps {
  onStartEarning: () => void;
  onSeeHowItWorks: () => void;
  onOpenTaskModal: (taskId: string) => void;
}

export const TeenHero: React.FC<TeenHeroProps> = ({
  onStartEarning,
  onSeeHowItWorks,
  onOpenTaskModal,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>Real Brands · Real Work · Real Opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
              Turn your spare time into{' '}
              <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                real-world experience.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Discover flexible brand campaigns, complete meaningful tasks, build practical skills, and get paid for work you actually do. Designed specifically for young India.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onStartEarning}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Earning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onSeeHowItWorks}
                className="px-6 py-3.5 bg-white hover:bg-stone-100 text-slate-800 font-semibold rounded-xl text-sm border border-stone-300 transition-colors flex items-center justify-center"
              >
                See How It Works
              </button>
            </div>

            {/* Small Trust Row */}
            <div className="pt-6 border-t border-stone-200/90 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 font-mono tabular-nums">70 Lakh+</span>
                <span>Young Indians</span>
              </div>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 font-mono tabular-nums">5,000+</span>
                <span>Brands</span>
              </div>
              <span className="text-stone-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 font-mono tabular-nums">1,000+</span>
                <span>Live Projects</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup
              onOpenTaskModal={onOpenTaskModal}
              onOpenDownloadModal={onStartEarning}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
