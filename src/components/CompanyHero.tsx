import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CompanyDashboardMockup } from './CompanyDashboardMockup';
import { COMPANY_HERO_METRICS } from '../data/companyData';

interface CompanyHeroProps {
  onStartCampaign: () => void;
  onExploreCampaigns: () => void;
}

export const CompanyHero: React.FC<CompanyHeroProps> = ({
  onStartCampaign,
  onExploreCampaigns,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Strategic Copy */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>For Modern Consumer Brands & Startups</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
              Reach young India.{' '}
              <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                Get real action,
              </span>{' '}
              not just impressions.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Work with a verified network of 70 Lakh+ young Indians through physical sampling, authentic video UGC, student referrals, market surveys, and deep product feedback.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onStartCampaign}
                className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start a Campaign</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCampaigns}
                className="px-6 py-3.5 bg-white hover:bg-stone-100 text-slate-800 font-semibold rounded-xl text-sm border border-stone-300 transition-colors flex items-center justify-center"
              >
                Explore Campaign Types
              </button>
            </div>

            {/* Verified Enterprise Metrics Strip */}
            <div className="pt-6 border-t border-stone-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 tabular-nums">
                  {COMPANY_HERO_METRICS.activeEarnerNetwork}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Young Indians
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 tabular-nums">
                  {COMPANY_HERO_METRICS.partnerBrands}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Brands & Startups
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 tabular-nums">
                  400+
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Cities & Towns
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-mono text-emerald-700 tabular-nums">
                  48–72h
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Avg. Turnaround
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Console Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <CompanyDashboardMockup onOpenCampaignModal={onStartCampaign} />
          </div>
        </div>
      </div>
    </section>
  );
};
