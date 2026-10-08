import { TEEN_FAQS } from './teenData';
import { COMPANY_FAQS } from './companyData';

export const getStructuredData = (page: 'teen' | 'companies') => {
  const isTeen = page === 'teen';
  const url = isTeen ? 'https://funngro.com/teen' : 'https://funngro.com/companies';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Funngro',
    url: 'https://funngro.com/',
    logo: 'https://funngro.com/images/funngro-logo.svg',
    description: "India's premier youth earning and brand campaign platform connecting 70 Lakh+ young Indians with authentic brand opportunities.",
    sameAs: [
      'https://www.instagram.com/funngro/',
      'https://www.linkedin.com/company/funngro/',
      'https://www.youtube.com/@Funngro',
    ],
    foundingLocation: {
      '@type': 'Country',
      name: 'India',
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://funngro.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isTeen ? 'For Teens & Students' : 'For Companies & Brands',
        item: url,
      },
    ],
  };

  const faqList = isTeen ? TEEN_FAQS : COMPANY_FAQS;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Funngro App',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Android, iOS, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    description: 'Empowering young Indians to discover brand projects, build real career skills, and earn income safely.',
  };

  return {
    organizationSchema,
    breadcrumbsSchema,
    faqSchema,
    webAppSchema,
  };
};
