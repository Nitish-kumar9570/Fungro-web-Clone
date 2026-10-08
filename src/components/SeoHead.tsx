import React, { useEffect } from 'react';
import { PageView } from '../types';
import { getStructuredData } from '../data/seoData';

interface SeoHeadProps {
  currentPage: PageView;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    // Dynamic page title & description sync
    if (currentPage === 'teen') {
      document.title = 'Earn Online with Real Brand Opportunities | Funngro';
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute(
          'content',
          'Discover flexible brand campaigns, complete meaningful tasks, build practical skills, and get paid for work you actually do. Join 70 Lakh+ young Indians on Funngro.'
        );
      }
    } else if (currentPage === 'companies') {
      document.title = 'Reach Young India Through Brand Campaigns | Funngro';
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute(
          'content',
          'Work with an active network of 70 Lakh+ young Indians through physical product sampling, authentic video UGC, student referrals, market surveys, and product feedback.'
        );
      }
    } else {
      document.title = 'Page Not Found | Funngro';
    }

    // Inject Schema.org JSON-LD structured data
    if (currentPage === 'teen' || currentPage === 'companies') {
      const schemas = getStructuredData(currentPage);
      const scriptId = 'funngro-jsonld';
      let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }

      scriptTag.textContent = JSON.stringify({
        '@graph': [
          schemas.organizationSchema,
          schemas.breadcrumbsSchema,
          schemas.faqSchema,
          schemas.webAppSchema,
        ],
      });
    }
  }, [currentPage]);

  return null;
};
