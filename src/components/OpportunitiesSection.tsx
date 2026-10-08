import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { OpportunityCard } from './OpportunityCard';
import { SAMPLE_OPPORTUNITIES } from '../data/teenData';
import { Opportunity } from '../types';
import { Search, Sparkles, SlidersHorizontal } from 'lucide-react';

interface OpportunitiesSectionProps {
  onViewBrief: (opportunity: Opportunity) => void;
  onStartEarning: () => void;
}

const CATEGORIES = [
  'All',
  'Content Creation',
  'App Testing',
  'Referrals',
  'Surveys',
  'Sampling',
  'Product Feedback',
];

export const OpportunitiesSection: React.FC<OpportunitiesSectionProps> = ({
  onViewBrief,
  onStartEarning,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOpportunities = SAMPLE_OPPORTUNITIES.filter((opp) => {
    const matchesCategory =
      selectedCategory === 'All' || opp.category === selectedCategory;
    const matchesSearch =
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.brandIndustry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="opportunities" className="py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Explore Live Tasks"
          title="What can you actually do?"
          description="From authentic reel creation and consumer taste tests to app UX auditing and campus referrals. Find projects aligned with your genuine interests."
        />

        {/* Filter Bar & Search */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, category, industry, or task keyword (e.g., 'Volt', 'FinTech', 'Survey')..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-xl focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-slate-900 shadow-xs"
            />
          </div>

          {/* Category Tabs (Segmented control button tabs) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 p-1 bg-stone-200/60 rounded-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                onViewBrief={onViewBrief}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center max-w-md mx-auto space-y-3">
            <div className="text-slate-400 text-sm">No tasks matching your current filter.</div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-emerald-700 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-3">
            Tasks refresh weekly. Earnings are credited upon verified brand completion.
          </p>
          <button
            onClick={onStartEarning}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Unlock All 1,000+ Live Projects in App
          </button>
        </div>
      </div>
    </section>
  );
};
