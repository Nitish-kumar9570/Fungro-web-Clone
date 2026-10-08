import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SKILLS_LIST } from '../data/teenData';
import {
  MessageSquare,
  Video,
  TrendingUp,
  Search,
  CheckCircle2,
  Clock,
  Share2,
  ShieldCheck,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  MessageSquare,
  Video,
  TrendingUp,
  Search,
  CheckCircle2,
  Clock,
  Share2,
  ShieldCheck,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Practical Career Capital"
          title="You're not just earning. You're building."
          description="Every campaign brief pushes you to meet corporate timelines, communicate with clarity, synthesize customer data, and deliver quality under authentic brand constraints."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS_LIST.map((skill) => {
            const Icon = ICON_MAP[skill.iconName] || CheckCircle2;

            return (
              <div
                key={skill.id}
                className="bg-white border border-stone-200 hover:border-emerald-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {skill.practicalValue}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Real Project Example: </span>
                  <span>{skill.sampleTask}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
