# Funngro Website Redesign Challenge

> **A modern, high-conversion frontend redesign for Funngro** featuring dedicated **Teen / Young Earner** and **Company / Brand** experiences, modern fintech typography, zero-pill metadata discipline, responsive architecture, and enterprise technical SEO.

---

## 1. Project Overview

Funngro connects India's youth (aged 14–25) with authentic brand campaigns, micro-tasks, and practical skill-building opportunities. This challenge revamps the user experience and visual architecture into two primary surfaces:

1. **Teen / Young Earner Experience (`/teen`)**:
   - **Positioning**: *"Turn your spare time into real-world experience."*
   - Focus: Credible access to flexible brand projects, skill progression, transparent escrow-backed payouts, and safe parental alignment.
   - Core Features: Interactive Smartphone Preview, 5-Step timeline, Live project catalog with filters, 3-Stage growth journey, 8 practical skill sets, and Shark Tank credibility.

2. **Company / Brand Experience (`/companies`)**:
   - **Positioning**: *"Reach young India. Get real action, not just impressions."*
   - Focus: Replacing vanity scroll impressions with tangible consumer actions—product sampling, video UGC, campus referrals, app testing, and surveys.
   - Core Features: Enterprise campaign dashboard mockup, action vs. impressions comparison, modular campaign formats, demographic profiling, sample case studies, and an interactive campaign inquiry estimator.

---

## 2. Key Features

- **Strict Top Bar Contract**: Clean 1-row, 3-zone layout with brand wordmark, text navigation links, view toggling, demo authentication, and adaptive CTAs (*Start Earning* vs. *Start a Campaign*).
- **Interactive Phone Mockup**: Real-time interactive app simulation featuring Live Tasks, Wallet with UPI payouts, and Skill Badges.
- **Interactive Enterprise Campaign Console**: Concept dashboard showing reach (125K+), completed actions (8,420), engagement (32%), delivery progress (78%), live activity stream, and UGC asset library.
- **Live Opportunity Catalog & Brief Modal**: Filterable category selector, search bar, and full task brief modals with deliverables, timelines, and simulated application flow.
- **Interactive Campaign Brief Modal**: Dynamic quote and turnaround estimator for brand leads with validated inputs and instant feedback state.
- **Parental & Financial Safety Alignment**: Clear disclosures on escrow protection, 100% free account creation for minors, and guardian approval integration.
- **Custom 404 Experience**: Dedicated friendly error page with rapid recovery navigation.
- **Complete Technical SEO Suite**: Pre-configured JSON-LD schemas (`Organization`, `BreadcrumbList`, `FAQPage`, `SoftwareApplication`), canonical URLs, `robots.txt`, and `sitemap.xml`.

---

## 3. Tech Stack

- **Framework**: React 19 + Vite 8 (TypeScript)
- **Styling**: Tailwind CSS v4 with custom font pairing & utility tokens
- **Typography**: Plus Jakarta Sans (display & body) + JetBrains Mono (metrics & tabular numbers)
- **Icons**: Lucide React
- **Animations**: CSS GPU transforms with `prefers-reduced-motion` compliance
- **SEO & Structured Data**: Dynamic document title/meta sync + Schema.org JSON-LD

---

## 4. Folder Structure

```
├── public/
│   ├── robots.txt            # Crawling directives for search engines
│   └── sitemap.xml           # XML sitemap with priority & frequency
├── src/
│   ├── components/
│   │   ├── CompanyAudienceSection.tsx
│   │   ├── CompanyCampaignFormModal.tsx
│   │   ├── CompanyCampaignTypes.tsx
│   │   ├── CompanyCaseStudies.tsx
│   │   ├── CompanyDashboardMockup.tsx
│   │   ├── CompanyFinalCTA.tsx
│   │   ├── CompanyHero.tsx
│   │   ├── CompanyHowItWorks.tsx
│   │   ├── CompanyProblemSection.tsx
│   │   ├── CompanyWhyFunngro.tsx
│   │   ├── DemoLoginModal.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.tsx
│   │   ├── GrowthJourney.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotFoundView.tsx
│   │   ├── OpportunitiesSection.tsx
│   │   ├── OpportunityCard.tsx
│   │   ├── PhoneMockup.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SeoHead.tsx
│   │   ├── SharkTankSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── TaskBriefModal.tsx
│   │   ├── TeenAppDownloadModal.tsx
│   │   ├── TeenFinalCTA.tsx
│   │   ├── TeenHero.tsx
│   │   └── TeenTrustStrip.tsx
│   ├── data/
│   │   ├── companyData.ts    # Brand campaign formats, case studies, FAQs
│   │   ├── seoData.ts        # JSON-LD generators
│   │   └── teenData.ts       # Live opportunities, skills, testimonials
│   ├── types/
│   │   └── index.ts          # Strongly typed models
│   ├── App.tsx               # Main layout & routing orchestration
│   ├── index.css             # Tailwind v4 import, fonts & accessibility
│   └── main.tsx              # Application entry point
├── index.html                # Entry HTML with meta tags & Google fonts
├── metadata.json             # AI Studio app metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The development server runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Build artifacts will be compiled to `./dist` without any TypeScript or bundling warnings.

### Preview Production Build

```bash
npm run preview
```

---

## 6. Design Principles & Anti-Slop Discipline

1. **Zero-Pill Discipline**: Metadata (categories, dates, status, deliverables) are displayed as quiet, unboxed text using typographic separators (`·`), avoiding cluttered candy badges.
2. **Tabular Numerals**: Financial figures, turnaround times, and metrics utilize `tabular-nums` and monospace typography for vertical rhythm and accuracy.
3. **60-30-10 Color Discipline**: 60% warm neutral canvas (`#FAFAF9`), 30% structural surfaces and dark slate typography, and 10% emerald accent (`#059669` / `#0D9488`).
4. **Natural Editorial Numbering**: Steps and stages are written as clean editorial numerals (`01.`, `02.`), avoiding code-comment prefix slashes (`// 01`).
5. **Legibility & Accessibility**: Touch targets meet or exceed 44px on mobile, contrast passes WCAG AA standards, and visible outline rings appear on keyboard focus.

---

## 7. SEO Implementation

- **Page Titles**: Tailored under 60 characters with branded focus.
- **Meta Descriptions**: 120–160 character summaries targeting search intent.
- **OpenGraph & Twitter Cards**: Dynamic social sharing attributes for previews.
- **Structured Data**: Schema.org JSON-LD graphs containing `Organization`, `WebSite`, `BreadcrumbList`, and `FAQPage`.
- **Search Engine Discovery**: Standalone `public/robots.txt` and `public/sitemap.xml` configured for production crawling.

---

## 8. Future Backend Integration Blueprint

This codebase was structured to allow seamless transition to full-stack production:

- **Campaign Inquiries**: Connect `CompanyCampaignFormModal.tsx` to an Express route (`POST /api/campaigns`) or CRM webhook (HubSpot/Salesforce).
- **Student Opportunities Feed**: Replace `SAMPLE_OPPORTUNITIES` in `teenData.ts` with a React Query or SWR hook fetching from `GET /api/opportunities`.
- **Authentication**: Connect `DemoLoginModal.tsx` to an OTP SMS provider (Twilio, Gupshup, or Firebase Auth).
- **Direct Payout Gateway**: Integrate RazorpayX or Cashfree Payouts API for automated UPI transfers upon brand task approval.

---

© 2026 Funngro. All rights reserved. India's youth · India's brands.
