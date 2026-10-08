import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { HOW_IT_WORKS_STEPS } from '../data/teenData';
import { UserCheck, Compass, CheckSquare, UploadCloud, IndianRupee, ArrowRight } from 'lucide-react';

const STEP_ICONS = [UserCheck, Compass, CheckSquare, UploadCloud, IndianRupee];

interface HowItWorksSectionProps {
  onStartEarning: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStartEarning }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple 5-Step Process"
          title="How young Indians earn and grow on Funngro"
          description="A clear, merit-based workflow designed to respect your schedule, protect your effort, and ensure timely direct compensation."
        />

        {/* 5-Step Grid / Interactive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            const isSelected = activeStepIdx === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`relative rounded-2xl p-5 border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-50 border-emerald-600 shadow-md ring-1 ring-emerald-600'
                    : 'bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xl font-extrabold font-mono tabular-nums ${
                        isSelected ? 'text-emerald-700' : 'text-slate-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-stone-100 text-slate-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
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

                <div className="pt-3 border-t border-stone-200/80 text-[11px] font-mono text-slate-500">
                  {step.microMetric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Step {HOW_IT_WORKS_STEPS[activeStepIdx].step} in Focus
            </div>
            <h4 className="text-xl font-bold text-white">
              {HOW_IT_WORKS_STEPS[activeStepIdx].title}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {HOW_IT_WORKS_STEPS[activeStepIdx].description}
            </p>
          </div>
          <button
            onClick={onStartEarning}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
