import React from 'react';
import { SectionHeading } from './SectionHeading';
import { COMPANY_CAMPAIGN_TYPES } from '../data/companyData';
import {
  Package,
  Video,
  Users,
  ClipboardList,
  Smartphone,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
} from 'lucide-react';

const TYPE_ICONS: Record<string, React.ElementType> = {
  Sampling: Package,
  'Content Creation': Video,
  'Referrals & Growth': Users,
  'Surveys & Research': ClipboardList,
  'App Testing': Smartphone,
  'Influencer Briefs': Sparkles,
};

interface CompanyCampaignTypesProps {
  onSelectCampaign: (title: string) => void;
}

export const CompanyCampaignTypes: React.FC<CompanyCampaignTypesProps> = ({
  onSelectCampaign,
}) => {
  return (
    <section id="campaign-types" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campaign Formats"
          title="Modular campaigns built for tangible consumer action."
          description="Select from high-velocity campaign formats customized for consumer product launches, app growth sprints, and market research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_CAMPAIGN_TYPES.map((camp) => {
            const Icon = TYPE_ICONS[camp.category] || Target;

            return (
              <div
                key={camp.id}
                className="bg-stone-50 border border-stone-200 hover:border-emerald-600 rounded-2xl p-6 text-left flex flex-col justify-between transition-all hover:shadow-md group"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                      {camp.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-slate-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2">
                    {camp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {camp.summary}
                  </p>

                  <div className="bg-white p-3 rounded-xl border border-stone-200/80 mb-4 space-y-1.5 text-xs">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Typical Deliverables:
                    </div>
                    {camp.typicalDeliverables.map((del, i) => (
                      <div key={i} className="text-slate-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {camp.turnaroundTime}
                    </span>
                    <span className="text-slate-400 font-medium truncate max-w-[150px]">
                      {camp.idealFor.split(',')[0]}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectCampaign(camp.title)}
                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Configure {camp.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
