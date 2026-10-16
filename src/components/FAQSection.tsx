import { useState } from 'react';
import { faqs, siteConfig } from '../config/siteConfig';
import { ChevronDown, HelpCircle, PhoneCall, Search } from 'lucide-react';

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // First two open by default

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    return (
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section id="faq" className="w-full bg-white pt-6 sm:pt-12 lg:pt-14 pb-3 sm:pb-5 lg:pb-6 shadow-xs scroll-mt-24 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#4d7c0f] block mb-1.5 sm:mb-2">
              Help & Information
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#14351b] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-base text-stone-600 max-w-xl mx-auto">
              Everything you need to know about our pest control treatments, pet-safe methods, and Nottingham coverage.
            </p>

            {/* Search Bar */}
            <div className="mt-4 sm:mt-6 max-w-md mx-auto relative">
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. wasps, dogs, commercial)..."
                className="w-full pl-9 sm:pl-11 pr-4 py-2 sm:py-3 rounded-full bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-emerald-800 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-10 bg-stone-50 rounded-3xl">
                <p className="text-stone-600 font-medium text-sm">
                  No matching questions found for "{searchQuery}".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs font-bold text-[#14351b] underline cursor-pointer"
                >
                  Reset search
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndexes.includes(index);
                return (
                  <div
                    key={index}
                    className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'bg-[#f0f4f1]' : 'bg-stone-50 hover:bg-stone-100/80'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 select-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-[#14351b] text-base sm:text-lg leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-[#14351b] text-[#84cc16]' : 'bg-stone-200 text-stone-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-stone-700 text-sm leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Prompt card */}
          <div className="mt-10 p-6 rounded-3xl bg-[#f0f4f1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold text-[#14351b] text-sm sm:text-base">
                Have a question not listed here?
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Our Nottingham team is happy to provide free advice over the phone.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-squish-dark text-xs sm:text-sm py-2.5 px-5 flex-shrink-0"
            >
              <PhoneCall className="w-4 h-4 text-[#84cc16]" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
