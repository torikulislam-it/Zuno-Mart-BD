import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-50/80 rounded-2xl p-4 md:p-6 border border-gray-100 shadow-xs">
      <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-3">
        <HelpCircle className="text-amber-500" size={22} />
        <h3 className="font-extrabold text-gray-800 text-lg md:text-xl">
          সাধারণ জিজ্ঞাসা (FAQ)
        </h3>
      </div>

      <div className="flex flex-col gap-2.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-amber-400 shadow-md ring-1 ring-amber-100' : 'border-gray-100 hover:border-gray-200 hover:shadow-xs'
              }`}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 font-bold text-gray-800 text-sm md:text-base focus:outline-none transition-colors"
              >
                <span>{faq.question}</span>
                <span className={`text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-4 pb-4 pt-1 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-100 font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
