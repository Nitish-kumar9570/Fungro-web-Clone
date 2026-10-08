import React from 'react';
import { SectionHeading } from './SectionHeading';
import { COMPANY_HOW_IT_WORKS } from '../data/companyData';
import { Target, Layers, Users2, BarChart2, ArrowRight } from 'lucide-react';

const STEP_ICONS = [Target, Layers, Users2, BarChart2];

interface CompanyHowItWorksProps {
  onStartCampaign: () => void;
}

export const CompanyHowItWorks: React.FC<CompanyHowItWorksProps> = ({ onStartCampaign }) => {
  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enterprise Execution Workflow"
          title="From initial brief to audited campaign deliverables in 4 steps."
          description="A structured, reliable framework engineered to eliminate marketing agency overhead and connect directly with verified young Indian consumers."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {COMPANY_HOW_IT_WORKS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];

            return (
              <div
                key={step.step}
                className="bg-white border border-stone-200 rounded-2xl p-6 text-left flex flex-col justify-between shadow-xs hover:border-emerald-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold font-mono text-emerald-800 tabular-nums">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-slate-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-emerald-800 mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-800">Output: </span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onStartCampaign}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Design Your Brand Campaign Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
