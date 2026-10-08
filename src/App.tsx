import React, { useState, useEffect } from 'react';
import { PageView, Opportunity } from './types';
import { SAMPLE_OPPORTUNITIES, TEEN_FAQS } from './data/teenData';
import { COMPANY_FAQS } from './data/companyData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { TeenHero } from './components/TeenHero';
import { TeenTrustStrip } from './components/TeenTrustStrip';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OpportunitiesSection } from './components/OpportunitiesSection';
import { GrowthJourney } from './components/GrowthJourney';
import { SkillsSection } from './components/SkillsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { SharkTankSection } from './components/SharkTankSection';
import { FAQAccordion } from './components/FAQAccordion';
import { TeenFinalCTA } from './components/TeenFinalCTA';

import { CompanyHero } from './components/CompanyHero';
import { CompanyProblemSection } from './components/CompanyProblemSection';
import { CompanyCampaignTypes } from './components/CompanyCampaignTypes';
import { CompanyHowItWorks } from './components/CompanyHowItWorks';
import { CompanyWhyFunngro } from './components/CompanyWhyFunngro';
import { CompanyAudienceSection } from './components/CompanyAudienceSection';
import { CompanyCaseStudies } from './components/CompanyCaseStudies';
import { CompanyFinalCTA } from './components/CompanyFinalCTA';

import { NotFoundView } from './components/NotFoundView';
import { CompanyCampaignFormModal } from './components/CompanyCampaignFormModal';
import { TeenAppDownloadModal } from './components/TeenAppDownloadModal';
import { TaskBriefModal } from './components/TaskBriefModal';
import { DemoLoginModal } from './components/DemoLoginModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('teen');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [selectedCampaignObjective, setSelectedCampaignObjective] = useState<string | undefined>();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState<'teen' | 'company'>('teen');
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync initial URL path
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (path.includes('/companies') || hash.includes('companies')) {
        setCurrentPage('companies');
      } else if (path.includes('/404')) {
        setCurrentPage('404');
      } else {
        setCurrentPage('teen');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleNavigate = (page: PageView, sectionId?: string) => {
    setCurrentPage(page);

    // Update browser URL history without reload
    const targetPath = page === 'teen' ? '/teen' : page === 'companies' ? '/companies' : '/404';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenTaskModalById = (taskId: string) => {
    const found = SAMPLE_OPPORTUNITIES.find((o) => o.id === taskId);
    if (found) {
      setSelectedOpportunity(found);
    }
  };

  const handleSelectCampaignType = (title: string) => {
    setSelectedCampaignObjective(title);
    setIsCampaignModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans">
      {/* Dynamic SEO & Head Injector */}
      <SeoHead currentPage={currentPage} />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl border border-slate-800 text-xs font-medium flex items-center gap-2 animate-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenCampaignModal={() => {
          setSelectedCampaignObjective(undefined);
          setIsCampaignModalOpen(true);
        }}
        onOpenLoginModal={(role = 'teen') => {
          setLoginRole(role);
          setIsLoginModalOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentPage === 'teen' && (
          <div className="animate-in fade-in duration-200">
            {/* 1. Hero Section */}
            <TeenHero
              onStartEarning={() => setIsDownloadModalOpen(true)}
              onSeeHowItWorks={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenTaskModal={handleOpenTaskModalById}
            />

            {/* 2. Trust Strip */}
            <TeenTrustStrip />

            {/* 3. Problem / Solution Comparison */}
            <ProblemSolution onStartEarning={() => setIsDownloadModalOpen(true)} />

            {/* 4. How It Works Timeline */}
            <HowItWorksSection onStartEarning={() => setIsDownloadModalOpen(true)} />

            {/* 5. Live Opportunities Catalog */}
            <OpportunitiesSection
              onViewBrief={(opp) => setSelectedOpportunity(opp)}
              onStartEarning={() => setIsDownloadModalOpen(true)}
            />

            {/* 6. Growth Journey */}
            <GrowthJourney />

            {/* 7. Skills & Capabilities */}
            <SkillsSection />

            {/* 8. Social Proof Stories */}
            <SocialProofSection />

            {/* 9. Shark Tank Credibility Block */}
            <SharkTankSection onStartEarning={() => setIsDownloadModalOpen(true)} />

            {/* 10. Teen FAQ */}
            <FAQAccordion
              eyebrow="Student & Earner FAQ"
              title="Frequently asked questions about earning on Funngro"
              items={TEEN_FAQS}
            />

            {/* 11. Final Action CTA */}
            <TeenFinalCTA
              onStartEarning={() => setIsDownloadModalOpen(true)}
              onExploreOpportunities={() => {
                document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {currentPage === 'companies' && (
          <div className="animate-in fade-in duration-200">
            {/* 1. Company Hero */}
            <CompanyHero
              onStartCampaign={() => {
                setSelectedCampaignObjective(undefined);
                setIsCampaignModalOpen(true);
              }}
              onExploreCampaigns={() => {
                document.getElementById('campaign-types')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 2. Problem / Solution */}
            <CompanyProblemSection
              onStartCampaign={() => {
                setSelectedCampaignObjective(undefined);
                setIsCampaignModalOpen(true);
              }}
            />

            {/* 3. Campaign Types */}
            <CompanyCampaignTypes onSelectCampaign={handleSelectCampaignType} />

            {/* 4. How It Works for Companies */}
            <CompanyHowItWorks
              onStartCampaign={() => {
                setSelectedCampaignObjective(undefined);
                setIsCampaignModalOpen(true);
              }}
            />

            {/* 5. Why Funngro Comparison */}
            <CompanyWhyFunngro />

            {/* 6. Audience Demographics */}
            <CompanyAudienceSection />

            {/* 7. Sample Case Studies */}
            <CompanyCaseStudies />

            {/* 8. Company FAQ */}
            <FAQAccordion
              eyebrow="Enterprise FAQ"
              title="Everything brand leaders ask about campaign execution"
              description="From commercial usage rights and audience verification to rapid turnaround timelines."
              items={COMPANY_FAQS}
            />

            {/* 9. Company Final CTA */}
            <CompanyFinalCTA
              onStartCampaign={() => {
                setSelectedCampaignObjective(undefined);
                setIsCampaignModalOpen(true);
              }}
            />
          </div>
        )}

        {currentPage === '404' && (
          <NotFoundView
            onReturnHome={() => handleNavigate('teen')}
            onExploreOpportunities={() => handleNavigate('teen', 'opportunities')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
        onOpenCampaignModal={() => {
          setSelectedCampaignObjective(undefined);
          setIsCampaignModalOpen(true);
        }}
      />

      {/* Interactive Modals */}
      <TeenAppDownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <CompanyCampaignFormModal
        isOpen={isCampaignModalOpen}
        defaultObjective={selectedCampaignObjective}
        onClose={() => setIsCampaignModalOpen(false)}
      />

      <TaskBriefModal
        opportunity={selectedOpportunity}
        isOpen={selectedOpportunity !== null}
        onClose={() => setSelectedOpportunity(null)}
        onDownloadApp={() => {
          setSelectedOpportunity(null);
          setIsDownloadModalOpen(true);
        }}
      />

      <DemoLoginModal
        isOpen={isLoginModalOpen}
        initialRole={loginRole}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(role) => {
          showToast(
            `Logged in as ${role === 'teen' ? 'Young Earner' : 'Brand Manager'} (Demo Mode)`
          );
        }}
      />
    </div>
  );
}
