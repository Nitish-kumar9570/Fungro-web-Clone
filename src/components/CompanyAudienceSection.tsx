import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Users, GraduationCap, MapPin, Sparkles, Heart } from 'lucide-react';

const INTERESTS = [
  'Technology & AI',
  'FinTech & Personal Finance',
  'Fashion & Streetwear',
  'Food & Beverages',
  'Education & EdTech',
  'Gaming & Esports',
  'Lifestyle & Skincare',
  'Mobility & EVs',
  'Music & Entertainment',
];

export const CompanyAudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Youth Demographics"
          title="Understanding young India's most active generation"
          description="Funngro engages verified students, young professionals, and aspiring creators aged 14 to 25 across universities, colleges, and schools nationwide."
        />

        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-200">
            {/* Core Age demographic */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Target Age Bracket</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                14 – 25 Years
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Secondary school students (with guardian consent), undergraduates, and postgraduates eager for real career exposure.
              </p>
            </div>

            {/* Academic Representation */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Streams</span>
              </div>
              <div className="text-xl font-bold text-slate-900">
                Engineering · Commerce · Design · Arts
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Students across STEM, business administration, visual media, humanities, and professional vocational programs.
              </p>
            </div>

            {/* Geographic Footprint */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Geographic Footprint</span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                400+ Cities
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Balanced representation across Tier 1 metros (48%), Tier 2 educational hubs (38%), and Tier 3 towns (14%).
              </p>
            </div>
          </div>

          {/* Interest Verticals */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Top Youth Affinity Verticals
              </h3>
              <span className="text-xs text-slate-400">
                Self-declared & behavioral interest clustering
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {INTERESTS.map((interest, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2 bg-stone-50 border border-stone-200/90 rounded-xl text-xs font-medium text-slate-800 hover:border-emerald-500 transition-colors"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
