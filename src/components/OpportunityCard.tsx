import React from 'react';
import { Opportunity } from '../types';
import { Clock, ShieldCheck, ArrowRight, Video, CheckCircle2, UserCheck, Star } from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onViewBrief: (opportunity: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  onViewBrief,
}) => {
  return (
    <div
      onClick={() => onViewBrief(opportunity)}
      className="bg-white border border-stone-200 hover:border-emerald-500 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between text-left group"
    >
      <div>
        {/* Top unboxed metadata line (Zero-Pill discipline) */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px]">
              {opportunity.category}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{opportunity.brandIndustry}</span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            {opportunity.spotsLeft} openings left
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug mb-2">
          {opportunity.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {opportunity.description}
        </p>

        {/* Deliverables snippet */}
        <div className="space-y-1 mb-4">
          <div className="text-[11px] font-semibold text-slate-700">Key Deliverable:</div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{opportunity.deliverables[0]}</span>
          </div>
        </div>
      </div>

      {/* Card Footer: Brand info & Payout */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
            {opportunity.companyLogoText}
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Partner</div>
            <div className="text-xs font-bold text-slate-800">{opportunity.company}</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm font-extrabold text-emerald-700 font-mono tabular-nums">
            {opportunity.payoutDisplay}
          </div>
          <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{opportunity.deadlineDays}d deadline</span>
          </div>
        </div>
      </div>
    </div>
  );
};
