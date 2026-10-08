import React from 'react';
import { SectionHeading } from './SectionHeading';
import { TEEN_STORIES } from '../data/teenData';
import { Quote, CheckCircle2, MapPin } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="stories" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Journeys"
          title="Real people. Real journeys."
          description="Hear how students across India use Funngro to discover corporate workflows, gain confidence, and build independent earnings without neglecting their studies."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEEN_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-6 text-left flex flex-col justify-between shadow-xs hover:border-emerald-500 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                    {story.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {story.verifiedLabel}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">{story.name}</div>
                    <div className="text-xs text-slate-500">{story.role}</div>
                  </div>
                  <div className="text-right text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{story.city}</span>
                  </div>
                </div>

                <div className="mt-3 bg-white p-2 rounded-lg border border-stone-200 text-[11px] text-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-900">Milestone:</span>
                  <span className="truncate">{story.keyAchievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
