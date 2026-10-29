import React from "react";
import { useLanguage } from "./LanguageContext";
import { Archive, ArrowUpRight, HelpCircle } from "lucide-react";
import { INSTITUTE_FAQS } from "../fertilityInstituteData";

export interface FAQItemData {
  qFa: string;
  qEn: string;
  aFa: string;
  aEn: string;
}

interface FAQProps {
  items?: FAQItemData[];
  sectionId?: string;
  kicker?: string;
  titleFa?: string;
  titleEn?: string;
  showStrategyHubLinks?: boolean;
  onNavigate?: (path: string) => void;
}

export default function FAQ({
  items = INSTITUTE_FAQS,
  sectionId = "institute-faq",
  kicker = "SECTION 08 • FREQUENTLY ASKED QUESTIONS",
  titleFa = "سوالات متداول درباره موسسه نوآوری باروری",
  titleEn = "Frequently Asked Questions",
  showStrategyHubLinks = false,
  onNavigate,
}: FAQProps) {
  const { dir, t } = useLanguage();

  return (
    <section id={sectionId} className="space-y-6" dir={dir}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 block mb-1.5">
            {kicker}
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            {t(titleFa, titleEn)}
          </h2>
        </div>
        <HelpCircle className="w-6 h-6 text-zinc-400 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((faq, idx) => (
          <div
            key={idx}
            className="av-card rounded-xl p-5 sm:p-6 border border-white/10 space-y-2.5"
          >
            <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
              {t(faq.qFa, faq.qEn)}
            </h3>
            <p className="text-xs text-zinc-300 leading-[1.85]">
              {t(faq.aFa, faq.aEn)}
            </p>
          </div>
        ))}
      </div>

      {showStrategyHubLinks && onNavigate && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <button
            onClick={() => onNavigate("/blog-strategy")}
            className="av-card rounded-xl p-5 text-start border border-white/15 hover:border-white/40 transition flex items-center justify-between gap-3 cursor-pointer"
          >
            <div>
              <span className="text-[9.5px] font-mono text-zinc-400 block">
                /blog-strategy • 100 TOPICS
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t(
                  "استراتژی ۱۰۰ موضوع وبلاگ باروری و IVF",
                  "100 Fertility & IVF Blog Topic Strategy"
                )}
              </h4>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-300 shrink-0" />
          </button>

          <button
            onClick={() => onNavigate("/sitemap")}
            className="av-card rounded-xl p-5 text-start border border-white/15 hover:border-white/40 transition flex items-center justify-between gap-3 cursor-pointer"
          >
            <div>
              <span className="text-[9.5px] font-mono text-zinc-400 block">
                /sitemap • ARCHITECTURE & SEO
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t(
                  "نقشه جامع سایت، سئو و پرامپت‌های تصویر",
                  "Complete Sitemap, SEO & AI Image Prompts"
                )}
              </h4>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-300 shrink-0" />
          </button>

          <button
            onClick={() => onNavigate("/legacy-website")}
            className="av-card rounded-xl p-5 text-start border border-white/15 hover:border-white/40 transition flex items-center justify-between gap-3 cursor-pointer"
          >
            <div>
              <span className="text-[9.5px] font-mono text-zinc-400 block">
                /legacy-website • PRESERVED ARCHIVE
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">
                {t(
                  "وبسایت خدمات مهاجرت نخبگان",
                  "Legacy Website (100% Preserved Content)"
                )}
              </h4>
            </div>
            <Archive className="w-4 h-4 text-zinc-300 shrink-0" />
          </button>
        </div>
      )}
    </section>
  );
}
