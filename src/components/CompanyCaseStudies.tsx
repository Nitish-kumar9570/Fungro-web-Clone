import React from 'react';
import { SectionHeading } from './SectionHeading';
import { COMPANY_CASE_STUDIES } from '../data/companyData';
import { CheckCircle2, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export const CompanyCaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Execution Frameworks"
          title="Sample campaign concepts & performance architecture"
          description="Explore how enterprise consumer brands and high-growth startups structure campaigns for tangible, verified youth outcomes."
        />

        <div className="space-y-8 max-w-5xl mx-auto">
          {COMPANY_CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 sm:p-8 text-left transition-all hover:border-emerald-600 shadow-xs"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 mb-6">
                <div>
                  <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                    {cs.brandCategory}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{cs.brandConcept}</h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-white border border-stone-200 rounded-lg text-slate-700">
                  {cs.campaignType}
                </span>
              </div>

              {/* Challenge & Execution columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    The Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Campaign Execution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cs.execution}
                  </p>
                </div>
              </div>

              {/* Measured Outcomes */}
              <div className="bg-white rounded-xl p-4 border border-stone-200/90 mb-4">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Metrics
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                  {cs.keyOutcomes.map((out, i) => (
                    <div key={i}>
                      <div className="text-xl sm:text-2xl font-black font-mono text-emerald-700 tabular-nums">
                        {out.metric}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {out.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclosure Note */}
              <div className="text-[11px] text-slate-400 italic">
                * {cs.verifiableNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
