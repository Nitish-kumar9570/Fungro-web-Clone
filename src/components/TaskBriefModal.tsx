import React, { useState } from 'react';
import { X, CheckCircle2, Clock, IndianRupee, ShieldCheck, ArrowRight, Award, AlertCircle } from 'lucide-react';
import { Opportunity } from '../types';

interface TaskBriefModalProps {
  opportunity: Opportunity | null;
  isOpen: boolean;
  onClose: () => void;
  onDownloadApp: () => void;
}

export const TaskBriefModal: React.FC<TaskBriefModalProps> = ({
  opportunity,
  isOpen,
  onClose,
  onDownloadApp,
}) => {
  const [applied, setApplied] = useState(false);

  if (!isOpen || !opportunity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brief-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              {opportunity.category} · {opportunity.brandIndustry}
            </div>
            <h3 id="brief-title" className="text-lg font-bold text-white">
              {opportunity.title}
            </h3>
          </div>
          <button
            onClick={() => {
              setApplied(false);
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:ring-2 focus:ring-emerald-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Key Facts Strip */}
          <div className="grid grid-cols-3 gap-2 bg-stone-50 border border-stone-200 rounded-xl p-3 text-center">
            <div>
              <div className="text-[10px] text-slate-500 font-medium">Verified Payout</div>
              <div className="text-base font-bold text-emerald-700 font-mono tabular-nums">
                {opportunity.payoutDisplay}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-medium">Submission Window</div>
              <div className="text-base font-bold text-slate-900 font-mono tabular-nums">
                {opportunity.deadlineDays} Days
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 font-medium">Difficulty Level</div>
              <div className="text-base font-bold text-slate-900">{opportunity.difficulty}</div>
            </div>
          </div>

          {/* Partner Brand Identity */}
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
              {opportunity.companyLogoText}
            </div>
            <div>
              <div className="text-xs text-slate-500">Commissioned by:</div>
              <div className="text-sm font-bold text-slate-900">{opportunity.company}</div>
            </div>
            <div className="ml-auto flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Brand Partner</span>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              Project Description
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">{opportunity.description}</p>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Required Deliverables
            </h4>
            <div className="space-y-1.5">
              {opportunity.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-slate-700 bg-stone-50 border border-stone-200/80 p-2 rounded-lg"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Developed */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              Skills You Cultivate
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {opportunity.skillsGained.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-stone-100 text-slate-800 px-2.5 py-1 rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Safety & Payout Note */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Safe Payout Guarantee: </span>
              Funds are held in escrow by Funngro before project publication and released directly to your account upon verified brand review.
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              <span className="font-bold text-slate-800">{opportunity.spotsLeft}</span> openings currently available
            </div>

            <div className="flex items-center gap-2">
              {applied ? (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Accepted in Demo!</span>
                </div>
              ) : (
                <button
                  onClick={() => setApplied(true)}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Accept Task Brief
                </button>
              )}

              <button
                onClick={() => {
                  onClose();
                  onDownloadApp();
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
              >
                <span>Open in App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
