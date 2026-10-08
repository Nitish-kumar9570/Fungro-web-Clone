import React from 'react';
import { SectionHeading } from './SectionHeading';
import {
  Users,
  CheckCircle2,
  Layers,
  Zap,
  MessageCircle,
  BarChart3,
  Sliders,
  MapPin,
} from 'lucide-react';

const WHY_POINTS = [
  {
    icon: Users,
    title: 'Large Youth Network',
    desc: 'Access over 70 Lakh+ verified students and creators across 400+ Indian cities and university clusters.',
  },
  {
    icon: CheckCircle2,
    title: 'Authentic Participation',
    desc: 'Real consumers experiencing real products in natural environments—not scripted agency actors.',
  },
  {
    icon: Layers,
    title: 'Multiple Campaign Formats',
    desc: 'From sampling and video UGC to app bug testing and surveys—all orchestrated within a single platform.',
  },
  {
    icon: Zap,
    title: 'High-Velocity Execution',
    desc: 'Campaigns go live within 24–48 hours with first deliverables audited and streaming in by day three.',
  },
  {
    icon: MessageCircle,
    title: 'Real-World Feedback',
    desc: 'Unfiltered qualitative sentiment on taste, packaging, onboarding, and pricing direct from Gen Z.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Campaign Activity',
    desc: 'Zero vanity impressions. Track every verified trial, completed survey, and uploaded video asset.',
  },
  {
    icon: Sliders,
    title: 'Flexible Campaign Sizing',
    desc: 'Start with focused pilot sprints or scale pan-India waves across multiple regions simultaneously.',
  },
  {
    icon: MapPin,
    title: 'India-Wide Reach',
    desc: 'Penetrate beyond tier-1 metros into high-growth university campuses across tier-2 and tier-3 India.',
  },
];

export const CompanyWhyFunngro: React.FC = () => {
  return (
    <section id="why-funngro" className="py-20 bg-white border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Competitive Advantage"
          title="Why brands choose Funngro over traditional digital ads"
          description="A purpose-built infrastructure designed to replace passive scroll impressions with measurable, authentic consumer actions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_POINTS.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-stone-50 border border-stone-200 hover:border-emerald-600 rounded-2xl p-5 text-left transition-all hover:shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{pt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
