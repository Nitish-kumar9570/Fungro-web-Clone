import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Eye, MousePointerClick, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

interface CompanyProblemSectionProps {
  onStartCampaign: () => void;
}

export const CompanyProblemSection: React.FC<CompanyProblemSectionProps> = ({
  onStartCampaign,
}) => {
  return (
    <section className="py-20 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Marketing Dilemma"
          title="Reach is easy. Getting people to act is harder."
          description="Standard programmatic ads and sponsored banners deliver passive scrolls and high cost-per-click. Young consumers tune out broadcast ads—they trust peer recommendations and hands-on trial."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Card: Passive Digital Ads */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 text-left flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Conventional Digital Channels
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Passive Views & Transient Clicks
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Brands spend heavily on social feed ads only to face high ad fatigue, bot traffic, and near-zero post-click brand recall among Gen Z audiences.
              </p>

              <div className="space-y-3">
                {[
                  'Passive impressions without physical engagement or retention',
                  'High cost-per-click with 90%+ immediate landing page drop-offs',
                  'Zero authentic user content created for future marketing collateral',
                  'Superficial metrics that fail to reveal true consumer sentiment',
                  'Declining ad conversion due to ad-blockers and banner blindness',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 text-xs text-slate-400">
              High CPMs · Transient Attention · Low Purchase Intent
            </div>
          </div>

          {/* Right Card: Funngro Action Engine */}
          <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-6 sm:p-8 text-left flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                The Funngro Solution
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Measurable Action & Youth Advocacy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Transform passive observers into active participants. Mobilize genuine young consumers to test products, create peer content, and advocate on campus.
              </p>

              <div className="space-y-3">
                {[
                  'Physical product trials delivered directly to verified student homes',
                  'Authentic, relatable UGC video assets ready for ad whitelisting',
                  'Peer-to-peer campus recommendations within trusted college circles',
                  'In-depth quantitative and qualitative consumer sentiment in 48 hours',
                  '100% verified proof of task completion before campaign payment',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
              <span className="text-xs text-emerald-400 font-medium">
                Audited deliverables & transparent ROI
              </span>
              <button
                onClick={onStartCampaign}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1"
              >
                <span>Launch Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
