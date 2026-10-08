import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { FAQItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  items: FAQItem[];
  id?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = 'Frequently Asked Questions',
  eyebrow = 'Got Questions?',
  description = 'Everything you need to know about getting started, safety, payouts, and brand campaigns.',
  items,
  id = 'faq',
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id={id} className="py-20 bg-stone-50 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="space-y-3 text-left">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-colors shadow-xs"
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleIndex(index)}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-3"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
