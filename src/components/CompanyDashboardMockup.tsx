import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  CheckCircle2,
  BarChart3,
  Video,
  Download,
  Filter,
  ArrowUpRight,
  Shield,
  Layers,
} from 'lucide-react';

interface CompanyDashboardMockupProps {
  onOpenCampaignModal?: () => void;
}

export const CompanyDashboardMockup: React.FC<CompanyDashboardMockupProps> = ({
  onOpenCampaignModal,
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'activity' | 'assets'>('metrics');

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Floating micro trust annotation */}
      <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-stone-200 text-xs font-medium text-slate-800 z-20">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Live Submissions Ingestion</span>
      </div>

      {/* Main Glass/Slate Console */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left text-white">
        {/* Console Header Bar */}
        <div className="border-b border-slate-800 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">
                Campaign: New Product Launch (Summer Refresh)
              </div>
              <div className="text-[11px] text-slate-400">
                Active Brand Brief · Pan-India Student Segment
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-300 font-mono border border-emerald-500/30 bg-emerald-950/50 px-2 py-0.5 rounded">
              CONCEPT PREVIEW
            </span>
            <button
              onClick={onOpenCampaignModal}
              className="text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-3 py-1 rounded-lg transition-colors flex items-center gap-1"
            >
              Configure <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Console Navigation Tabs */}
        <div className="px-5 pt-3 pb-1 border-b border-slate-800/80 flex gap-4 text-xs font-medium text-slate-400">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'metrics'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Performance Overview
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'activity'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Live Activity Stream
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`pb-2 transition-colors border-b-2 ${
              activeTab === 'assets'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent hover:text-slate-200'
            }`}
          >
            Approved UGC Assets
          </button>
        </div>

        {/* Tab 1: Key Performance Metrics */}
        {activeTab === 'metrics' && (
          <div className="p-5 space-y-5">
            {/* 4 Core Quantitative Metrics (Specified in user brief) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 font-medium">Estimated Reach</div>
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  125K+
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +18% vs target
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 font-medium">Tasks Completed</div>
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-emerald-400 mt-1">
                  8,420
                </div>
                <div className="text-[10px] text-slate-400 mt-1">100% human audited</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 font-medium">Avg. Engagement</div>
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white mt-1">
                  32%
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">4.2x above display ads</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl">
                <div className="text-[11px] text-slate-400 font-medium">Delivery Progress</div>
                <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-teal-300 mt-1">
                  78%
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Day 6 of 8</div>
              </div>
            </div>

            {/* Campaign Fulfillment Progress Bar */}
            <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-slate-200">
                  Target Fulfillment: 8,420 of 10,800 actions
                </span>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">78.0% Completed</span>
              </div>
              <div className="w-full bg-slate-700/60 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: '78%' }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
                <span>Phase 1: Sampling dispatched (100%)</span>
                <span>Phase 2: Video UGC & Reviews (74%)</span>
              </div>
            </div>

            {/* Geographic Distribution Breakdown */}
            <div className="bg-slate-800/40 border border-slate-700/50 p-3.5 rounded-xl">
              <div className="text-xs font-semibold text-slate-200 mb-2">
                Audience Geographic Representation
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-800/80 p-2 rounded-lg">
                  <div className="text-slate-400 text-[10px]">Tier 1 Metros</div>
                  <div className="font-bold text-white font-mono tabular-nums mt-0.5">48%</div>
                  <div className="text-[10px] text-slate-400">Delhi, BLR, BOM</div>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg">
                  <div className="text-slate-400 text-[10px]">Tier 2 Education Hubs</div>
                  <div className="font-bold text-emerald-400 font-mono tabular-nums mt-0.5">38%</div>
                  <div className="text-[10px] text-slate-400">Pune, Jaipur, Indore</div>
                </div>
                <div className="bg-slate-800/80 p-2 rounded-lg">
                  <div className="text-slate-400 text-[10px]">Tier 3 Towns</div>
                  <div className="font-bold text-white font-mono tabular-nums mt-0.5">14%</div>
                  <div className="text-[10px] text-slate-400">Regional campuses</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Activity Stream */}
        {activeTab === 'activity' && (
          <div className="p-5 space-y-2.5">
            <div className="text-xs font-semibold text-slate-300 mb-1">
              Real-time Ingestion Stream
            </div>
            {[
              {
                user: 'Ananya S. · Bengaluru',
                task: 'Submitted 30s UGC Unboxing Reel',
                time: '4 mins ago',
                status: 'Passed Quality Check',
              },
              {
                user: 'Karan T. · Lucknow',
                task: 'Completed 15-Question Beverage Survey',
                time: '9 mins ago',
                status: 'Audited & Recorded',
              },
              {
                user: 'Rhea P. · Mumbai',
                task: 'Logged 7-Day Product Trial Feedback',
                time: '18 mins ago',
                status: 'Verified Submission',
              },
              {
                user: 'Manish D. · Chandigarh',
                task: 'Campus Tech Club Referral Wave',
                time: '25 mins ago',
                status: 'Verified Signup',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700/60 p-2.5 rounded-lg flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-medium text-slate-200">{item.user}</div>
                  <div className="text-[11px] text-slate-400">{item.task}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-emerald-400 font-semibold">{item.status}</div>
                  <div className="text-[10px] text-slate-400">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: UGC Media Pipeline */}
        {activeTab === 'assets' && (
          <div className="p-5 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-200">Ready for Ad Whitelisting (640 Assets)</span>
              <button className="text-emerald-400 hover:text-emerald-300 text-[11px] flex items-center gap-1 font-medium">
                <Download className="w-3 h-3" /> Export ZIP
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { title: 'Dorm Taste Test', format: '9:16 Video · 4K', rating: '5.0 ★' },
                { title: 'Morning Gym Snack', format: '9:16 Video · 1080p', rating: '4.9 ★' },
                { title: 'Packaging Critique', format: '9:16 Reel · 1080p', rating: '4.8 ★' },
              ].map((asset, i) => (
                <div key={i} className="bg-slate-800/70 border border-slate-700 p-2.5 rounded-lg">
                  <div className="w-full aspect-video bg-slate-950 rounded flex items-center justify-center text-slate-500 mb-1.5">
                    <Video className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="font-medium text-slate-200 text-[11px] truncate">{asset.title}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{asset.format}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Console Footer */}
        <div className="border-t border-slate-800 px-5 py-2.5 bg-slate-950 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>FUNNGRO ENTERPRISE ENGINE</span>
          <span className="text-emerald-400">LATENCY: 0.12s · AUDITED METRICS</span>
        </div>
      </div>
    </div>
  );
};
