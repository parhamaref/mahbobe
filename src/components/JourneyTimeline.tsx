import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  ChevronRight,
} from "lucide-react";

const JOURNEY_STEPS = [
  {
    num: "01",
    titleFa: "کشف و تریاژ",
    titleEn: "DISCOVER",
    descFa: "بررسی عمیق رزومه، مقالات و پتانسیل‌های بالینی متقاضی.",
    descEn: "Auditing publications, clinical records, and H-index metrics in depth.",
    Icon: Search,
  },
  {
    num: "02",
    titleFa: "تعیین مسیر",
    titleEn: "DEFINE",
    descFa: "انتخاب بهینه‌ترین ویزای نخبگانی منطبق با قوانین حاکمیتی.",
    descEn: "Matching your profile with optimal sovereign visa benchmarks.",
    Icon: Target,
  },
  {
    num: "03",
    titleFa: "مهندسی علمی",
    titleEn: "ARCHITECT",
    descFa: "تقویت استنادات (SREP) و تالیف بیانیه‌های علمی و توصیه‌نامه‌ها.",
    descEn: "Enhancing citation velocity and drafting Royal Society petitions.",
    Icon: PenTool,
  },
  {
    num: "04",
    titleFa: "تاییدیه و داوری",
    titleEn: "ENDORSE",
    descFa: "اخذ تاییدیه معرف استرالیایی، بورد بریتانیا یا سابمیت USCIS.",
    descEn: "Securing nominator endorsement and official state filing.",
    Icon: Code2,
  },
  {
    num: "05",
    titleFa: "صدور اقامت",
    titleEn: "DELIVER",
    descFa: "دریافت ویزای اقامت دائم مستقیم و استقرار علمی در کشور مقصد.",
    descEn: "Finalizing permanent residency grant and global settlement.",
    Icon: Rocket,
  },
];

export default function JourneyTimeline() {
  const { dir, t } = useLanguage();

  return (
    <section className="mb-16">
      <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold mb-4">
        {t("فرآیند مهندسی پرونده در تاج گلوبال", "MY MIGRATION ARCHITECTURE PROCESS")}
      </h2>

      <div className="av-card rounded-xl p-6 sm:p-8" dir={dir}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {JOURNEY_STEPS.map((step, index) => (
            <div
              key={step.num}
              className="relative flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-zinc-400">{step.num}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {t(step.titleFa, step.titleEn)}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  {t(step.descFa, step.descEn)}
                </p>
              </div>

              {/* Dotted Connector Line + Bottom Icon */}
              <div className="pt-2 flex items-center gap-3">
                <step.Icon className="w-5 h-5 text-zinc-300 stroke-[1.4] shrink-0" />
                {index < JOURNEY_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center flex-1">
                    <div className="w-full border-t border-dashed border-white/20" />
                    <ChevronRight className="w-3 h-3 text-white/30 -ms-1.5" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
