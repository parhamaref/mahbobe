import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";

interface MainSliderProps {
  language: "fa" | "en";
  t: (fa: string, en: string) => string;
}

const SLIDER_SLIDES = [
  {
    image: "/src/assets/images/slider_1_1780182023838.png",
    titleFa: "طراحی پورتفولیو و شایستگی علمی کادر درمان",
    titleEn: "Resume Formulation & Scientific Merit Triage",
    descFa: "ارزیابی تخصصی و استراژیک رزومه پزشکان و نخبگان علمی بر اساس نوین‌ترین الگوهای داوری همکار بین‌المللی با نظارت مستقیم دکتر تاج‌الدینی برای ارزیاب‌های حاکمیتی.",
    descEn: "Deep assessment of doctor and researcher portfolios tailored uniquely to peak international peer-review standards supervised directly by Dr. Tajeddini.",
  },
  {
    image: "/src/assets/images/slider_2_1780182042996.png",
    titleFa: "ویزای استعدادهای درخشان استرالیا (GTI Subclass 858)",
    titleEn: "Australia Global Talent Visa Pathway (GTI)",
    descFa: "طراحی و مهندسی مسیر مهاجرت نخبگان حوزه سلامت و بیوتک بدون نیاز به اسپانسر شغلی کتبی کارفرما با تاییدیه سکتورهای استرالیایی.",
    descEn: "Self-sponsored permanent residency pathway designs bypass traditional employer constraints for pioneering scientific and clinical innovators.",
  },
  {
    image: "/src/assets/images/slider_3_1780182064443.png",
    titleFa: "بوردهای سلطنتی و معادل‌سازی انگلستان و استرالیا",
    titleEn: "UK & Australian Royal College Validation Blueprints",
    descFa: "تهیه و دفاع اختصاصی پرونده‌های هم‌ارزی جهت عضویت در کالج‌های عالی پزشکی و بهداشت عمومی بین‌المللی توسط دپارتمان تحقیقات TAJ Global.",
    descEn: "Academic clinical dossier production for senior medical authority approvals, registration endorsements, and supreme medical council validations.",
  },
  {
    image: "/src/assets/images/slider_4_1780182084469.png",
    titleFa: "ویزای منافع ملی و توانایی فوق‌العاده آمریکا (EB-1A / EB-2 NIW)",
    titleEn: "USA Alien of Extraordinary Ability & National Interest Waiver",
    descFa: "فرمول‌بندی ارزش جهانی دستاوردهای علمی پژوهشگران و ارتقا و بهینه‌سازی هدفمند شاخص‌های اچ‌ایندکس به منظور مجاب‌سازی اداره مهاجرت آمریکا.",
    descEn: "Bespoke citation mapping and petition development designed to solid-proof your research impact before United States adjudication tribunals.",
  },
  {
    image: "/src/assets/images/slider_5_1780182103413.png",
    titleFa: "کلاب هم‌نویسندگی علمی و مشارکت در مقالات ژورنال‌های Q1",
    titleEn: "Co-Authorship International Research Alliance & Q1 Papers",
    descFa: "افزایش پویای شاخص ارجاعات و اعتبار مقالات از طریق همفکری و مشارکت فعال در طرح‌های تحقیقاتی مشترک با مطرح‌ترین دانشمندان و پزشکان جهان.",
    descEn: "Collaborate directly within active biomedical studies to scale up your citation velocities, paper indexations, and peer-reviewed authority.",
  }
];

export default function MainSlider({ language, t }: MainSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDER_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDER_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDER_SLIDES.length) % SLIDER_SLIDES.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-navy border-b border-brand-gold/15 py-1 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3">
        {/* Slider Frame */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-brand-gold/20 shadow-2xl group">
          {/* Slides Track */}
          {SLIDER_SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                  isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
                }`}
              >
                {/* Background Image with subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent z-[2]" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]" />
                <img
                  src={slide.image}
                  alt={slide.titleEn}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover select-none filter brightness-[0.75] contrast-[1.05]"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 z-[3] text-white">
                  <div className="max-w-2xl space-y-3 sm:space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 px-2.5 py-1 rounded-full text-brand-gold text-[10px] font-mono tracking-widest uppercase">
                      <Sparkles className="w-3 h-3" />
                      <span>{t(`اسلایدر ${idx + 1}`, `SLIDE ${idx + 1}`)}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3.5xl font-serif font-bold text-white leading-tight drop-shadow-md">
                      {language === "fa" ? slide.titleFa : slide.titleEn}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light drop-shadow-sm line-clamp-2 sm:line-clamp-none">
                      {language === "fa" ? slide.descFa : slide.descEn}
                    </p>

                    {/* Call to action */}
                    <div className="pt-2">
                      <a
                        href="#assessment-section"
                        className="inline-flex items-center gap-1.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy text-xs font-bold px-4 py-2.5 rounded transition shadow-lg shadow-brand-gold/15"
                      >
                        <span>{t("تعیین وقت مشاوره و ارزیابی رزومه", "Book Initial Diagnostic Evaluation")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-navy/60 hover:bg-brand-gold/80 hover:text-brand-navy border border-brand-gold/30 text-brand-gold flex items-center justify-center transition-all z-20 cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-brand-navy/60 hover:bg-brand-gold/80 hover:text-brand-navy border border-brand-gold/30 text-brand-gold flex items-center justify-center transition-all z-20 cursor-pointer opacity-0 group-hover:opacity-100"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {SLIDER_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === current ? "w-7 h-2 bg-brand-gold" : "w-2 h-2 bg-slate-400/55 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
