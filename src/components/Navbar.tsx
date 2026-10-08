import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Building2, Smartphone } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenDownloadModal: () => void;
  onOpenCampaignModal: () => void;
  onOpenLoginModal: (role?: 'teen' | 'company') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDownloadModal,
  onOpenCampaignModal,
  onOpenLoginModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTeen = currentPage === 'teen';

  const handleNavClick = (page: PageView, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Top Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Single Text Element Wordmark */}
          <button
            onClick={() => handleNavClick('teen')}
            className="group flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md py-1"
            aria-label="Funngro Home"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans">
              FUNNGRO
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block group-hover:scale-125 transition-transform" />
          </button>

          {/* Zone 2: 4–6 Clean Text Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('teen')}
              className={`hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 ${
                isTeen ? 'border-emerald-600 text-slate-950 font-semibold' : 'border-transparent'
              }`}
            >
              For Teens
            </button>

            <button
              onClick={() => handleNavClick('companies')}
              className={`hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 ${
                !isTeen ? 'border-emerald-600 text-slate-950 font-semibold' : 'border-transparent'
              }`}
            >
              For Companies
            </button>

            <button
              onClick={() => handleNavClick(currentPage, 'how-it-works')}
              className="hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
            >
              How It Works
            </button>

            <button
              onClick={() => handleNavClick(currentPage, isTeen ? 'opportunities' : 'campaign-types')}
              className="hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
            >
              {isTeen ? 'Opportunities' : 'Campaign Types'}
            </button>

            <button
              onClick={() => handleNavClick(currentPage, isTeen ? 'stories' : 'case-studies')}
              className="hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
            >
              {isTeen ? 'Success Stories' : 'Case Studies'}
            </button>

            <button
              onClick={() => handleNavClick(currentPage, 'faq')}
              className="hover:text-slate-950 transition-colors cursor-pointer py-1 border-b-2 border-transparent"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View Switcher Quick Link */}
            <button
              onClick={() => handleNavClick(isTeen ? 'companies' : 'teen')}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-stone-200/60 transition-colors"
            >
              Switch to {isTeen ? 'Brands' : 'Students'}
            </button>

            <button
              onClick={() => onOpenLoginModal(isTeen ? 'teen' : 'company')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-colors rounded-lg hover:bg-stone-200/50"
            >
              Log In
            </button>

            {isTeen ? (
              <button
                onClick={onOpenDownloadModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Start Earning</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onOpenCampaignModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Start a Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => (isTeen ? onOpenDownloadModal() : onOpenCampaignModal())}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
            >
              {isTeen ? 'Start' : 'Campaign'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg focus:ring-2 focus:ring-emerald-600"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
          <div className="w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <span className="text-xl font-black text-slate-950">FUNNGRO</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Page Mode Switcher */}
              <div className="bg-stone-100 p-1 rounded-xl flex text-xs font-semibold text-slate-600 my-5">
                <button
                  onClick={() => handleNavClick('teen')}
                  className={`flex-1 py-2 rounded-lg transition-all ${
                    isTeen ? 'bg-white text-slate-900 shadow-sm font-bold' : ''
                  }`}
                >
                  For Teens
                </button>
                <button
                  onClick={() => handleNavClick('companies')}
                  className={`flex-1 py-2 rounded-lg transition-all ${
                    !isTeen ? 'bg-white text-slate-900 shadow-sm font-bold' : ''
                  }`}
                >
                  For Companies
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 text-sm font-medium text-slate-700">
                <button
                  onClick={() => handleNavClick(currentPage, 'how-it-works')}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => handleNavClick(currentPage, isTeen ? 'opportunities' : 'campaign-types')}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  {isTeen ? 'Opportunities' : 'Campaign Types'}
                </button>
                <button
                  onClick={() => handleNavClick(currentPage, isTeen ? 'skills' : 'audience')}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  {isTeen ? 'Skills & Growth' : 'Youth Audience'}
                </button>
                <button
                  onClick={() => handleNavClick(currentPage, isTeen ? 'stories' : 'case-studies')}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  {isTeen ? 'Success Stories' : 'Case Studies'}
                </button>
                <button
                  onClick={() => handleNavClick(currentPage, 'faq')}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  FAQ
                </button>
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-stone-200 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLoginModal(isTeen ? 'teen' : 'company');
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              >
                Log In
              </button>

              {isTeen ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDownloadModal();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Start Earning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCampaignModal();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Start a Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <p className="text-[11px] text-center text-slate-400 pt-2">
                India's youth · India's brands
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
