import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FAQS } from "../data";
import { Search, HelpCircle } from "lucide-react";
import { ProgramFaqItem } from "../programPagesDataPart1";

export interface FAQSectionProps {
  variant?: "global-grid" | "program-accordion";
  programFaqs?: ProgramFaqItem[];
}

export default function FAQSection({
  variant = "global-grid",
  programFaqs = [],
}: FAQSectionProps) {
  const { dir, t } = useLanguage();
  const [faqSearch, setFaqSearch] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (variant === "program-accordion") {
    return (
      <div className="space-y-3">
        {programFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="av-card-inner rounded-xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                className="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {t(faq.qFa, faq.qEn)}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400 shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/10 text-xs sm:text-[13px] text-zinc-300 leading-[1.9] text-justify">
                  {t(faq.aFa, faq.aEn)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  const filteredFaqs = FAQS.filter((faq) => {
    const query = faqSearch.toLowerCase();
    return (
      faq.questionFa.toLowerCase().includes(query) ||
      faq.questionEn.toLowerCase().includes(query) ||
      faq.answerFa.toLowerCase().includes(query) ||
      faq.answerEn.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="mb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
          {t("سوالات متداول نخبگان و پزشکان", "FREQUENTLY ASKED QUESTIONS")}
        </h2>
        <div className="relative w-full sm:w-64 av-card rounded-full px-3.5 py-1.5 flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder={t("جستجو در سوالات...", "Search FAQ...")}
            className="bg-transparent text-xs text-white outline-none w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5" dir={dir}>
        {filteredFaqs.slice(0, 6).map((faq) => (
          <div key={faq.id} className="av-card rounded-xl p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs font-semibold text-white leading-snug">
                {t(faq.questionFa, faq.questionEn)}
              </h4>
              <span className="text-[9px] font-mono text-zinc-400 shrink-0 uppercase">
                {t(faq.categoryFa, faq.categoryEn)}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              {t(faq.answerFa, faq.answerEn)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
