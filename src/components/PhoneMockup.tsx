import React, { useState } from 'react';
import {
  Smartphone,
  Wallet,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
} from 'lucide-react';

interface PhoneMockupProps {
  onOpenTaskModal?: (taskId: string) => void;
  onOpenDownloadModal?: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  onOpenTaskModal,
  onOpenDownloadModal,
}) => {
  const [activeTab, setActiveTab] = useState<'campaigns' | 'wallet' | 'profile'>('campaigns');
  const [appliedTasks, setAppliedTasks] = useState<Record<string, boolean>>({});

  const handleApply = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAppliedTasks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px]">
      {/* Subtle background ambient blur glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Floating micro indicators (Subtle & clean, non-pill clutter) */}
      <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 -left-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/5 border border-stone-200/90 z-20 text-xs font-medium text-slate-800">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Live Payout: ₹750 via UPI</span>
      </div>

      <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -right-6 bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-xl z-20 text-xs font-medium border border-slate-800">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Vetted Corporate Briefs</span>
      </div>

      {/* Smartphone Device Frame */}
      <div className="relative bg-slate-950 p-3 sm:p-3.5 rounded-[42px] shadow-2xl ring-1 ring-slate-800 shadow-slate-950/25">
        {/* Screen Bezel & Dynamic Island / Camera cutout */}
        <div className="relative bg-stone-50 rounded-[34px] overflow-hidden border border-slate-800/80 min-h-[580px] flex flex-col text-slate-900">
          {/* Top Status Bar */}
          <div className="bg-slate-900 text-slate-300 px-6 pt-2.5 pb-2 flex items-center justify-between text-[11px] font-mono tabular-nums">
            <span className="font-semibold text-white">09:41</span>
            <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto" />
            <div className="flex items-center gap-1.5 text-slate-400">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white border-b border-stone-200 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-stone-500 font-medium">Welcome back</div>
              <div className="text-sm font-bold text-slate-900">Aarav Patel · Pune</div>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-2 py-0.5 rounded-lg text-xs font-semibold tabular-nums">
              <span>₹4,850</span>
            </div>
          </div>

          {/* App Tab Switcher */}
          <div className="bg-stone-100 p-1 mx-3 mt-3 rounded-lg flex text-xs font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                activeTab === 'campaigns'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'hover:text-slate-900'
              }`}
            >
              Live Tasks
            </button>
            <button
              onClick={() => setActiveTab('wallet')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                activeTab === 'wallet'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'hover:text-slate-900'
              }`}
            >
              Wallet
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-1.5 rounded-md transition-all ${
                activeTab === 'profile'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'hover:text-slate-900'
              }`}
            >
              Skills
            </button>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {activeTab === 'campaigns' && (
              <>
                {/* Highlight Announcement */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-3 rounded-xl shadow-sm text-left">
                  <div className="text-[10px] font-semibold text-emerald-200 uppercase tracking-wider">
                    Recommended for today
                  </div>
                  <div className="text-xs font-bold mt-0.5">3 High-Match Projects Available</div>
                  <div className="text-[11px] text-emerald-100 mt-1">
                    Based on your verified video & testing skills.
                  </div>
                </div>

                {/* Campaign Card 1 */}
                <div
                  onClick={() => onOpenTaskModal?.('opp-1')}
                  className="bg-white border border-stone-200 hover:border-emerald-300 rounded-xl p-3 shadow-xs transition-all cursor-pointer text-left group"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-900">Volt Nutrition</span>
                    <span className="font-bold text-emerald-700 tabular-nums">₹750</span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 line-clamp-1">
                    Authentic 30-Sec Product Unboxing & Reel
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> Due in 2 days
                    </span>
                    <span>·</span>
                    <span>Beginner friendly</span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={(e) => handleApply('opp-1', e)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        appliedTasks['opp-1']
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {appliedTasks['opp-1'] ? 'Applied ✓' : 'Quick Accept'}
                    </button>
                    <span className="text-[10px] text-slate-400 group-hover:text-emerald-700 font-medium flex items-center gap-0.5">
                      View brief <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>

                {/* Campaign Card 2 */}
                <div
                  onClick={() => onOpenTaskModal?.('opp-2')}
                  className="bg-white border border-stone-200 hover:border-emerald-300 rounded-xl p-3 shadow-xs transition-all cursor-pointer text-left group"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-900">Kosh Pay</span>
                    <span className="font-bold text-emerald-700 tabular-nums">₹450</span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 line-clamp-1">
                    Student Beta Testing: Financial Tracker UX
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> Due in 3 days
                    </span>
                    <span>·</span>
                    <span>24 spots left</span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={(e) => handleApply('opp-2', e)}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        appliedTasks['opp-2']
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      {appliedTasks['opp-2'] ? 'Applied ✓' : 'Quick Accept'}
                    </button>
                    <span className="text-[10px] text-slate-400 group-hover:text-emerald-700 font-medium flex items-center gap-0.5">
                      View brief <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>

                {/* Campaign Card 3 */}
                <div
                  onClick={() => onOpenTaskModal?.('opp-4')}
                  className="bg-white border border-stone-200 hover:border-emerald-300 rounded-xl p-3 shadow-xs transition-all cursor-pointer text-left group"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-900">BrewKraft Kombucha</span>
                    <span className="font-bold text-emerald-700 tabular-nums">₹200</span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 line-clamp-1">
                    Gen Z Beverage Taste & Packaging Survey
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> 15 mins task
                    </span>
                    <span>·</span>
                    <span>Fast payout</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'wallet' && (
              <div className="space-y-3 text-left">
                {/* Wallet Balance Card */}
                <div className="bg-slate-900 text-white p-4 rounded-xl">
                  <div className="text-[11px] text-slate-400">Total Available Balance</div>
                  <div className="text-2xl font-bold font-mono tabular-nums mt-0.5 text-emerald-400">
                    ₹4,850.00
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-slate-400">Lifetime Earned</div>
                      <div className="font-semibold tabular-nums text-slate-200">₹12,400</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Next Auto-Payout</div>
                      <div className="font-semibold text-emerald-400">This Friday</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-900 px-1">Recent Approvals</div>

                {/* Transaction 1 */}
                <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Volt Nutrition Task</div>
                      <div className="text-[10px] text-slate-500">Reel approved · UPI</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-700 tabular-nums">+₹750</div>
                    <div className="text-[10px] text-slate-400">Yesterday</div>
                  </div>
                </div>

                {/* Transaction 2 */}
                <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">BookWorm Referral</div>
                      <div className="text-[10px] text-slate-500">5 Student signups</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-700 tabular-nums">+₹500</div>
                    <div className="text-[10px] text-slate-400">3 days ago</div>
                  </div>
                </div>

                {/* Transaction 3 */}
                <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">FinTech Beta Audit</div>
                      <div className="text-[10px] text-slate-500">Detailed UX Log</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-700 tabular-nums">+₹450</div>
                    <div className="text-[10px] text-slate-400">5 days ago</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-3 text-left">
                <div className="bg-white p-3.5 rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Stage 2 · Growth Earner</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">890 XP · 96% Quality Score</div>
                    </div>
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-emerald-600 h-full w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Current Level</span>
                    <span>110 XP to Stage 3 (Leader)</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-900 px-1">Verified Badges</div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-lg">
                    <div className="font-semibold text-slate-900 text-[11px]">48h Quick Delivery</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">10 consecutive on-time briefs</div>
                  </div>
                  <div className="bg-stone-50 border border-stone-200 p-2.5 rounded-lg">
                    <div className="font-semibold text-slate-900 text-[11px]">Top Video Quality</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Rated 4.8/5 by 6 brands</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar in Phone */}
          <div className="bg-white border-t border-stone-200 px-4 py-2.5 flex items-center justify-between text-[11px]">
            <button
              onClick={onOpenDownloadModal}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Download Funngro App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
