export type PageView = 'teen' | 'companies' | '404';

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogoText: string;
  category: 'Content Creation' | 'Brand Promotion' | 'Referrals' | 'Surveys' | 'Sampling' | 'App Testing' | 'Product Feedback';
  payout: number;
  payoutDisplay: string;
  deadlineDays: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  spotsLeft: number;
  deliverables: string[];
  description: string;
  skillsGained: string[];
  brandIndustry: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  microMetric: string;
}

export interface GrowthStage {
  stage: string;
  name: string;
  tagline: string;
  description: string;
  milestone: string;
  typicalEarnings: string;
  unlockedOpportunities: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  iconName: string;
  practicalValue: string;
  sampleTask: string;
}

export interface TestimonialStory {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  quote: string;
  keyAchievement: string;
  category: string;
  verifiedLabel: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CompanyCampaignType {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  typicalDeliverables: string[];
  idealFor: string;
  turnaroundTime: string;
  sampleBrandObjective: string;
}

export interface CompanyCaseStudy {
  id: string;
  brandCategory: string;
  brandConcept: string;
  challenge: string;
  campaignType: string;
  execution: string;
  keyOutcomes: {
    label: string;
    metric: string;
  }[];
  verifiableNote: string;
}

export interface CompanyInquiryForm {
  fullName: string;
  workEmail: string;
  companyName: string;
  campaignObjective: string;
  targetBudget: string;
  targetDeliverable: string;
  notes: string;
}
