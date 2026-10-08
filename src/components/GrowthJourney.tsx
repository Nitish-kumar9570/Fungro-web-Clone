import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GROWTH_STAGES } from '../data/teenData';
import { CheckCircle2, TrendingUp, Sparkles, Award } from 'lucide-react';

export const GrowthJourney: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Structured Progression"
          title="Start small. Build skills. Grow bigger."
          description="Funngro is not a one-off gig website. It is an intentional 3-stage capability ladder where consistency and quality unlock higher responsibilities, leadership cohorts, and pre-placement opportunities."
        />

        {/* 3-Stage Progression (Desktop horizontal layout, Mobile vertical timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {GROWTH_STAGES.map((stage, idx) => (
            <div
              key={stage.stage}
              className={`rounded-2xl p-6 sm:p-7 border transition-all text-left flex flex-col justify-between ${
                idx === 1
                  ? 'bg-stone-50 border-emerald-600 shadow-md ring-1 ring-emerald-600'
                  : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold font-mono text-emerald-800 tabular-nums">
                      {stage.stage}
                    </span>
                    <span className="text-sm font-bold text-slate-900 tracking-wider">
                      {stage.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {stage.tagline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Unlocked Capabilities */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Unlocked Opportunities:
                  </div>
                  {stage.unlockedOpportunities.map((opp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{opp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="pt-4 border-t border-stone-200/80 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Benchmark:</span>
                  <span className="font-semibold text-slate-800">{stage.milestone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Typical Range:</span>
                  <span className="font-mono font-bold text-emerald-700 tabular-nums">
                    {stage.typicalEarnings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
