import React from 'react';
import { PageView } from '../types';
import { Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenDownloadModal: () => void;
  onOpenCampaignModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage,
  onNavigate,
  onOpenDownloadModal,
  onOpenCampaignModal,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                FUNNGRO
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering India's young generation to discover real work, cultivate transferable industry skills, and build transparent earnings with leading brands.
            </p>
            <div className="text-xs text-emerald-400 font-medium">
              Featured on Shark Tank India — Season 2
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/funngro/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Funngro on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/funngro/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Funngro on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Funngro"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Funngro on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* For Teens Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">For Teens</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onOpenDownloadModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Start Earning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teen', 'how-it-works')}
                  className="hover:text-white transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teen', 'opportunities')}
                  className="hover:text-white transition-colors text-left"
                >
                  Opportunities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teen', 'skills')}
                  className="hover:text-white transition-colors text-left"
                >
                  Growth & Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teen', 'stories')}
                  className="hover:text-white transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teen', 'faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Teen FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* For Companies Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">For Companies</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={onOpenCampaignModal}
                  className="hover:text-white transition-colors text-left text-emerald-400 font-medium"
                >
                  Start a Campaign
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies', 'campaign-types')}
                  className="hover:text-white transition-colors text-left"
                >
                  Campaign Types
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies', 'why-funngro')}
                  className="hover:text-white transition-colors text-left"
                >
                  Why Funngro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies', 'audience')}
                  className="hover:text-white transition-colors text-left"
                >
                  Audience Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies', 'case-studies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sample Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('companies', 'faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  Company FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Company</div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('teen', 'credibility')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Funngro
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCampaignModal}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Partnerships
                </button>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Careers (Hiring)</span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Parent Safety Guide</span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Privacy Policy</span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Mission */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 Funngro. All rights reserved.</div>
          <div className="font-medium text-slate-400">
            India's youth · India's brands.
          </div>
          <div className="flex items-center gap-4">
            <span>Parental Consent Protected</span>
            <span>·</span>
            <span>SSL 256-bit Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
