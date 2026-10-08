import { CompanyCampaignType, CompanyCaseStudy, FAQItem } from '../types';

export const COMPANY_HERO_METRICS = {
  activeEarnerNetwork: '70 Lakh+',
  partnerBrands: '5,000+',
  cityFootprint: '400+ Indian Cities',
  avgTurnaround: '48 – 72 Hours',
};

export const COMPANY_CAMPAIGN_TYPES: CompanyCampaignType[] = [
  {
    id: 'camp-1',
    title: 'Product Sampling & Direct Trial',
    category: 'Sampling',
    summary: 'Put physical products directly into the hands of target young consumers at home or on campus.',
    description: 'Distribute physical sample units to verified student demographics with structured trial conditions, followed by mandatory in-depth questionnaires and genuine social impressions.',
    typicalDeliverables: ['Home address dispatch verification', 'Structured 7-day usage feedback', 'Unboxing & first-impressions UGC'],
    idealFor: 'D2C Skincare, Gourmet Snacks, Functional Beverages, Personal Care',
    turnaroundTime: '7 – 10 days',
    sampleBrandObjective: 'Drive first physical trial among college students in top 15 metros.',
  },
  {
    id: 'camp-2',
    title: 'Authentic Creator UGC & Reels',
    category: 'Content Creation',
    summary: 'Generate high-volume, authentic user content from real Gen Z consumers without agency markups.',
    description: 'Mobilize hundreds of talented young creators to produce authentic, relatable short-form video content tailored to their real peer audiences.',
    typicalDeliverables: ['9:16 Vertical Video Reels', 'Story highlights & honest reviews', 'High-res RAW asset handover for ad whitelisting'],
    idealFor: 'App launches, Fashion D2C, Consumer Electronics, Quick Commerce',
    turnaroundTime: '3 – 5 days',
    sampleBrandObjective: 'Secure 200+ unique UGC reels for paid TikTok/Instagram ad testing.',
  },
  {
    id: 'camp-3',
    title: 'Campus Peer Referrals & Installs',
    category: 'Referrals & Growth',
    summary: 'Drive high-intent student app installs and registrations through trusted peer-to-peer advocacy.',
    description: 'Activate student micro-ambassadors across university campuses who introduce your digital product directly to their batchmates and club networks.',
    typicalDeliverables: ['Verified KYC/signup completions', 'First-time transaction activation', 'Campus WhatsApp & community shares'],
    idealFor: 'Student FinTech, Academic EdTech, Gaming, OTT Entertainment',
    turnaroundTime: '5 – 7 days',
    sampleBrandObjective: 'Acquire 5,000 active student users with sub-₹60 CAC.',
  },
  {
    id: 'camp-4',
    title: 'Real-Time Consumer Surveys & Insights',
    category: 'Surveys & Research',
    summary: 'Access deep, honest sentiment from Gen Z across Tier 1, 2, and 3 India within 48 hours.',
    description: 'Collect high-integrity quantitative and qualitative market research from targeted student segments, validated with demographic filters.',
    typicalDeliverables: ['500 to 10,000 completed surveys', 'Cross-tab demographic analysis', 'Verbatim qualitative consumer quotes'],
    idealFor: 'Brand Strategists, Product Managers, VC Research, FMCG Insights',
    turnaroundTime: '48 – 72 hours',
    sampleBrandObjective: 'Evaluate price sensitivity for an upcoming ₹199 subscription tier.',
  },
  {
    id: 'camp-5',
    title: 'Mobile App Testing & UX Feedback',
    category: 'App Testing',
    summary: 'Stress-test your mobile application across hundreds of diverse Android and iOS devices.',
    description: 'Deploy pre-release APKs and TestFlight builds to tech-savvy youth testers. Identify device-specific UI glitches, navigation bottlenecks, and battery drain issues.',
    typicalDeliverables: ['Device screen recordings with voiceover', 'Reproducible bug logs & steps', 'System usability score (SUS) feedback'],
    idealFor: 'Fintech startups, Social networks, Productivity apps, Casual games',
    turnaroundTime: '3 – 4 days',
    sampleBrandObjective: 'Validate Android 14 compatibility and student onboarding drop-offs.',
  },
  {
    id: 'camp-6',
    title: 'Student Micro-Influencer Cohorts',
    category: 'Influencer Briefs',
    summary: 'Coordinate localized nano-influencer waves that create genuine cultural buzz in key cities.',
    description: 'Reach niche student subcultures (design students, medical aspirants, esports clubs) through relatable peer voices rather than distant celebrity endorsements.',
    typicalDeliverables: ['Coordinated launch day blitz', 'Geo-tagged stories and posts', 'Direct engagement in comment threads'],
    idealFor: 'Lifestyle brands, Sneaker culture, Regional music drops, Event ticketing',
    turnaroundTime: '5 – 7 days',
    sampleBrandObjective: 'Generate multi-city campus conversations around an annual fest launch.',
  },
];

export const COMPANY_HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Define Your Objective',
    subtitle: 'Strategic alignment',
    description: 'Share your key campaign goals—whether generating 500 UGC assets, sampling 2,000 units, or surveying college tier-2 trends. Select target age, cities, and demographics.',
    deliverable: 'Custom brief & audience criteria',
  },
  {
    step: '02',
    title: 'Design the Task Brief',
    subtitle: 'Clear, actionable guidelines',
    description: 'Our campaign success team translates your brand goals into precise, modular tasks with clear submission criteria, do’s and don’ts, and compliance checkpoints.',
    deliverable: 'Pre-approved task specification',
  },
  {
    step: '03',
    title: 'Activate Young India',
    subtitle: 'Targeted algorithmic matching',
    description: 'Your campaign is distributed to verified earners who match your demographic and quality score requirements. Track real-time submissions as they happen.',
    deliverable: 'Live execution dashboard',
  },
  {
    step: '04',
    title: 'Measure Real Action & Learn',
    subtitle: 'Audited deliverables & ROI',
    description: 'Review submissions with 100% asset proof. Download high-resolution media, structured survey datasets, and verified user outcomes directly into your analytics pipeline.',
    deliverable: 'Audited campaign report & asset handover',
  },
];

export const COMPANY_CASE_STUDIES: CompanyCaseStudy[] = [
  {
    id: 'cs-1',
    brandCategory: 'FMCG / Health & Wellness',
    brandConcept: 'Sample Campaign Concept · D2C Nutrition Launch',
    challenge: 'A high-protein snack brand needed to break through ad blindness on social media and build authentic word-of-mouth among university students in 8 major university hubs.',
    campaignType: 'Product Sampling + Authentic UGC Reels',
    execution: 'Shipped 1,500 sample snack boxes to verified college students. Each participant completed a 5-minute taste appraisal and produced a candid unboxing video.',
    keyOutcomes: [
      { label: 'Sample Units Shipped', metric: '1,500' },
      { label: 'UGC Reels Generated', metric: '640+' },
      { label: 'Structured Survey Responses', metric: '1,420' },
      { label: 'Average Customer Rating', metric: '4.6 / 5' },
    ],
    verifiableNote: 'Illustrative campaign execution framework based on Funngro standard brand sampling workflows.',
  },
  {
    id: 'cs-2',
    brandCategory: 'FinTech / Neobanking',
    brandConcept: 'Sample Campaign Concept · Student Financial App Trial',
    challenge: 'A youth pocket-money app wanted to eliminate onboarding drop-offs and drive authentic peer adoption across engineering and commerce colleges without expensive display ads.',
    campaignType: 'App Testing + Campus Micro-Ambassador Referrals',
    execution: 'Activated 450 tech-oriented students across 50 college campuses to test transaction flows and introduce the app to their student study groups.',
    keyOutcomes: [
      { label: 'Verified First Transactions', metric: '4,280' },
      { label: 'Detailed UX Bug Reports', metric: '86' },
      { label: 'Effective CAC Reduction', metric: '58%' },
      { label: '7-Day App Retention', metric: '64%' },
    ],
    verifiableNote: 'Sample campaign concept demonstrating Funngro peer-activation model for digital services.',
  },
  {
    id: 'cs-3',
    brandCategory: 'Consumer Tech / Audio',
    brandConcept: 'Sample Campaign Concept · Wireless Earbuds Feedback Sprint',
    challenge: 'An Indian electronics brand wanted to understand how college students perceive noise cancellation, case ergonomics, and gaming latency compared to legacy brands.',
    campaignType: 'Fast-Turnaround Consumer Survey & Focus Feedback',
    execution: 'Ran a targeted 48-hour feedback study with 2,000 verified youth audiophiles and casual gamers across Tier 1, 2, and 3 cities.',
    keyOutcomes: [
      { label: 'Verified Responses', metric: '2,000' },
      { label: 'Turnaround Time', metric: '36 Hours' },
      { label: 'Tier-2/3 City Representation', metric: '52%' },
      { label: 'Usable Product Tweaks Identified', metric: '11' },
    ],
    verifiableNote: 'Sample market research framework illustrating high-velocity youth consumer insights.',
  },
];

export const COMPANY_FAQS: FAQItem[] = [
  {
    question: 'What types of campaigns can brands run on Funngro?',
    answer: 'Brands can run diverse performance and engagement campaigns including physical product sampling, user-generated content (UGC), app testing and bug hunts, consumer research surveys, peer referral drives, campus activations, and focused focus-group feedback.',
    category: 'Campaigns',
  },
  {
    question: 'How does Funngro verify participant quality and authenticity?',
    answer: 'We employ a multi-step verification process: profile verification, educational background checks, past task completion scores, and manual review of media submissions. Fraudulent or substandard submissions are rejected automatically or by brand review.',
    category: 'Quality',
  },
  {
    question: 'How quickly can a campaign go live?',
    answer: 'Most standardized campaigns (UGC, surveys, app testing) can go live within 24 to 48 hours following brief confirmation. Physical sampling campaigns typically launch within 3 to 5 business days to coordinate inventory dispatch.',
    category: 'Timeline',
  },
  {
    question: 'Do brands own the commercial rights to generated user content?',
    answer: 'Yes. For UGC and content campaigns, brands receive full digital usage rights to download high-resolution video and photo assets for repurposing across organic social channels and paid digital advertisements.',
    category: 'Usage & Rights',
  },
  {
    question: 'What is the minimum budget required to start a campaign?',
    answer: 'Funngro accommodates both pilot experiments starting from ₹25,000 for focused survey/testing sprints as well as scaled nationwide campaigns for enterprise FMCG and consumer brands spanning ₹2 Lakh to ₹20+ Lakh.',
    category: 'Pricing',
  },
  {
    question: 'How can brands track campaign progress and results in real time?',
    answer: 'Brands receive access to a live campaign management portal displaying real-time task uptake, geographic distribution, individual media submissions for review/approval, and downloadable data exports.',
    category: 'Reporting',
  },
  {
    question: 'Can we segment the audience by city tier, gender, or academic discipline?',
    answer: 'Yes. Our platform provides granular targeting filters based on location (Tier 1 vs Tier 2/3, specific states/metros), age bracket (14–17 vs 18–25), gender, college stream (Engineering, Design, Commerce, Arts), and personal interests.',
    category: 'Targeting',
  },
  {
    question: 'How does Funngro handle physical product sampling logistics?',
    answer: 'Brands can either ship kits directly to verified user addresses provided through secure tokenized labels, or leverage Funngro fulfillment partners for bulk warehouse dispatch and delivery tracking.',
    category: 'Logistics',
  },
];
