import React from 'react';
import { TEEN_TRUST_STATS } from '../data/teenData';

export const TeenTrustStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-stone-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
          {TEEN_TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-4 ${idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : ''} ${
                idx === 1 ? 'pt-0' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</div>
              <div className="mt-0.5 text-xs text-slate-500 leading-snug">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
