import React from 'react';
import { SectionHeading } from './SectionHeading';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onStartEarning: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onStartEarning }) => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Traditional Roadblock"
          title="Your first opportunity shouldn't require years of experience."
          description="Every young person wants practical experience, legitimate income, confidence, and flexible work. Yet conventional internships demand prior credentials before giving you a chance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Traditional Barriers */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-bold text-red-700 tracking-wider uppercase mb-2">
                The Old System
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Traditional Student Internships
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Designed around rigid corporate hours, lengthy screening, and arbitrary qualification criteria that exclude driven students early in their journey.
              </p>

              <div className="space-y-3.5">
                {[
                  'Demands 1–2 years of prior verified work history',
                  'Rigid 9-to-5 schedules that clash with college lectures',
                  'Unpaid or delayed stipends after 3–6 months',
                  'Restricted to students living in expensive metro hubs',
                  'Weeks of formal interview rounds for basic tasks',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-slate-400">
              High friction · High rejection · Minimal practical skill gain
            </div>
          </div>

          {/* Card 2: Funngro Simpler Entry Point */}
          <div className="bg-gradient-to-b from-emerald-950 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between text-left relative overflow-hidden border border-emerald-800/40">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">
                The Funngro Model
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Action-First Brand Opportunities
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                A task-driven marketplace where young Indians start small, deliver clear project briefs, get compensated on merit, and build a verified portfolio.
              </p>

              <div className="space-y-3.5">
                {[
                  'Zero prior experience barrier — start with foundational briefs',
                  'Flexible modular tasks taking 1 to 3 hours on your terms',
                  'Guaranteed, transparent payouts held in escrow per project',
                  '100% remote work accessible from 400+ Indian towns & cities',
                  'Objective quality guidelines with fast 48–72h review feedback',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
              <span className="text-xs text-emerald-300 font-medium">
                Proven by 70 Lakh+ youth earners
              </span>
              <button
                onClick={onStartEarning}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Join Funngro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
