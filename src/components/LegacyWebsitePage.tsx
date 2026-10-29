import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import {
  Globe,
  Layers,
  Box,
  Monitor,
  PenTool,
  MousePointer,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Archive,
} from "lucide-react";
import { SUCCESS_STORIES } from "../data";
import AssessmentCalculator from "./AssessmentCalculator";
import ScientificEnhancer from "./ScientificEnhancer";
import SkillCalculator from "./SkillCalculator";
import HeroSection from "./HeroSection";
import ProgramsGrid from "./ProgramsGrid";
import ServiceCard from "./ServiceCard";
import ResearchSection from "./ResearchSection";
import TeamSection from "./TeamSection";
import JourneyTimeline from "./JourneyTimeline";
import FAQSection from "./FAQSection";
import ContactCTA from "./ContactCTA";
import FertilityInnovationLab from "./FertilityInnovationLab";
import { FourPointStar } from "./ui/Icons";

const CORE_CAPABILITIES = [
  {
    programId: "srep-program",
    titleFa: "تحلیل پروفایل علمی (Audit)",
    titleEn: "SCIENTIFIC QUALITY AUDIT",
    descFa:
      "نقشه‌برداری دقیق تراز استنادات گوگل اسکالر، بررسی رتبه مقالات در کلاریویت و آنالیز فاکتور تاثیر.",
    descEn:
      "Detailed mapping of Google Scholar indices, Clarivate metrics, and citation velocity.",
    Icon: PenTool,
  },
  {
    programId: "gti-au",
    titleFa: "نقشه راه استراتژیک فردی",
    titleEn: "STRATEGIC ROADMAPPING",
    descFa:
      "زمان‌بندی گام‌به‌گام مهندسی پرونده، معرفی به معرف‌های حاکمیتی و پورتفولیوسازی بورد سلطنتی.",
    descEn:
      "Custom timetable structuring of petition compilation and nominator peer matchmaking.",
    Icon: Monitor,
  },
  {
    programId: "srep-program",
    titleFa: "برنامه ارتقای رزومه SREP™",
    titleEn: "SREP CITATION BOOSTER",
    descFa:
      "ترجمه سوابق درمانی و کیس‌های بیمارستانی به مقالات ISI و افزایش هدفمند ارجاعات علمی.",
    descEn:
      "Converting clinical hospital cases into peer-reviewed Q1/Q2 publications and citations.",
    Icon: FourPointStar,
  },
  {
    programId: "eb1a-us",
    titleFa: "مدیریت جامع پرونده‌سازی",
    titleEn: "CASE PORTFOLIO ENGINEERING",
    descFa:
      "نگارش بیانیه‌های تبیینی منافع ملی آمریکا (NIW) و فرمول‌بندی توصیه‌نامه‌های تخصصی.",
    descEn:
      "Complete composition of National Interest statements and Royal Society reference letters.",
    Icon: MousePointer,
  },
  {
    programId: "pap-program",
    titleFa: "پروتکل آکادمیک PAP™",
    titleEn: "PAP FELLOWSHIP PROTOCOL",
    descFa:
      "برنامه ۳ ماهه اخذ اسکالرشیپ‌های تحقیقاتی فول‌فاند و جذب حامیان علمی در استرالیا و بریتانیا.",
    descEn:
      "3-month structured cycle securing academic fellowships and institutional research sponsors.",
    Icon: Layers,
  },
  {
    programId: "amc-au",
    titleFa: "معادل‌سازی کادر درمان (AMC)",
    titleEn: "CLINICAL LICENSING (AMC/OET)",
    descFa:
      "تایید مدارک در پورتال EPIC، آمادگی آزمون‌های AMC 1/2 و ثبت نام رسمی نظام پزشکی AHPRA.",
    descEn:
      "End-to-end EPIC verification, AMC theoretical/clinical prep, and AHPRA registration.",
    Icon: Box,
  },
];

const PRICING_TIERS = [
  {
    phase: "PHASE 01",
    titleFa: "آنالیز و مچینگ کتبی",
    titleEn: "Viability Audit",
    price: "$450",
    descFa: "بررسی کامل رزومه، استنادات و تعیین ۳ مسیر طلایی مهاجرت.",
    descEn: "Full scholar citation audit & 3 viable sovereign routes.",
    ctaFa: "ثبت درخواست",
    ctaEn: "SELECT",
    featured: false,
  },
  {
    phase: "PHASE 02 • VIP",
    titleFa: "پک کامل نخبگانی",
    titleEn: "Full Sovereign",
    price: "VIP Retainer",
    descFa: "صفر تا صد پرونده، معرفی معرف استرالیا/بریتانیا و تضمین کتبی.",
    descEn: "End-to-end petition, nominator endorsement & warranty.",
    ctaFa: "مشاوره VIP",
    ctaEn: "BOOK VIP",
    featured: true,
  },
  {
    phase: "PHASE 03",
    titleFa: "تقویت رزومه SREP",
    titleEn: "SREP Research",
    price: "Custom",
    descFa: "مشارکت در مقالات Q1/Q2 و افزایش H-index ویژه کادر درمان.",
    descEn: "Co-authorship in active Q1/Q2 clinical trials & indexing.",
    ctaFa: "عضویت کلاب",
    ctaEn: "JOIN R&D",
    featured: false,
  },
];

interface LegacyWebsitePageProps {
  onNavigate?: (path: string) => void;
}

export default function LegacyWebsitePage({ onNavigate }: LegacyWebsitePageProps) {
  const { dir, t } = useLanguage();

  const [activeTab, setActiveTab] = useState<string>("elite");
  const [selectedPathway, setSelectedPathway] = useState<string>("gti-au");
  const [selectedStory, setSelectedStory] = useState<number>(0);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [prefilledNotes, setPrefilledNotes] = useState<string>("");

  const handleSelectServiceProgram = (programId: string) => {
    setSelectedPathway(programId);
    document.getElementById("prog-hero")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRequestConsultation = (programTitle: string) => {
    setPrefilledNotes(
      `${t("درخواست مشاوره برای برنامه:", "Consultation Inquiry for:")} ${programTitle}`
    );
    setShowContactModal(true);
    document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const capabilityRows = [
    CORE_CAPABILITIES.slice(0, 2),
    CORE_CAPABILITIES.slice(2, 4),
    CORE_CAPABILITIES.slice(4, 6),
  ];

  return (
    <div className="relative z-10">
      {/* Legacy Archive Status Banner */}
      <div
        dir={dir}
        className="av-card rounded-xl px-5 py-3.5 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/15 bg-white/[0.03]"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
            <Archive className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-iransans text-[11px] font-bold text-zinc-200">
                {t("وبسایت خدمات مهاجرت نخبگان", "LEGACY WEBSITE • COMPLETE UNALTERED EDITION")}
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-200">
                100% PRESERVED
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              {t(
                "تمامی بخش‌ها، صفحات مونوگراف، ماشین‌حساب‌های ارزیابی علمی، بنرها و محتوای وبسایت خدمات مهاجرت نخبگان تاج گلوبال در این صفحه در دسترس شماست.",
                "All original sections, 1,500+ word migration monographs, calculators, promotional banners, and components are preserved intact on this page."
              )}
            </p>
          </div>
        </div>
        {onNavigate && (
          <button
            onClick={() => onNavigate("/")}
            className="av-pill-btn px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 shrink-0 cursor-pointer self-start sm:self-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>
              {t(
                "بازگشت به موسسه نوآوری باروری",
                "RETURN TO FERTILITY INNOVATION INSTITUTE"
              )}
            </span>
          </button>
        )}
      </div>

      {/* 1-3. HERO SECTION (Navbar + Frameless Portrait Hero + Promo Banners + Stats Bar) */}
      <HeroSection />

      {/* 4. PROGRAMS GRID & 10-SECTION MONOGRAPH VIEWER */}
      <ProgramsGrid
        selectedPathway={selectedPathway}
        onSelectPathway={setSelectedPathway}
        onRequestConsultation={handleRequestConsultation}
      />

      {/* 4B. REPRODUCTIVE SCIENCE, FERTILITY OPTIMIZATION & ADVANCED IVF INNOVATION INSTITUTE */}
      <FertilityInnovationLab
        onExploreMonograph={handleSelectServiceProgram}
        onRequestConsultation={handleRequestConsultation}
      />

      {/* 5. CORE CAPABILITIES (<ServiceCard />), <ResearchSection /> & <TeamSection /> */}
      <section id="services" className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): CORE CAPABILITIES using reusable <ServiceCard /> */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
                {t("خدمات تخصصی و قابلیت‌های هسته علمی", "CORE CAPABILITIES")}
              </h2>
              <span className="text-[10px] font-mono text-zinc-400">
                {t(
                  "برای مطالعه مونوگراف کامل کلیک کنید ↗",
                  "CLICK ANY SERVICE FOR FULL MONOGRAPH ↗"
                )}
              </span>
            </div>

            <div className="border-t border-white/10">
              {capabilityRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10 ${
                    rowIdx < capabilityRows.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                  dir={dir}
                >
                  {row.map((cap, colIdx) => (
                    <ServiceCard
                      key={cap.titleEn}
                      variant="grid-cell"
                      className={colIdx === 0 ? "sm:pe-6" : "sm:ps-6"}
                      icon={<cap.Icon className="w-5 h-5 stroke-[1.5]" />}
                      title={t(cap.titleFa, cap.titleEn)}
                      description={t(cap.descFa, cap.descEn)}
                      onClick={() => handleSelectServiceProgram(cap.programId)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): <ResearchSection /> + <TeamSection /> */}
          <div className="lg:col-span-5 space-y-6 lg:border-s lg:border-white/10 lg:ps-7">
            <ResearchSection />
            <TeamSection />
          </div>
        </div>
      </section>

      {/* 6. JOURNEY TIMELINE */}
      <JourneyTimeline />

      {/* 7. DIAGNOSTIC SCIENTIFIC AUDIT & CALCULATORS */}
      <section id="audit" className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
              {t(
                "ابزار هوشمند ارزیابی علمی و شبیه‌ساز امتیازات",
                "DIAGNOSTIC SCIENTIFIC AUDIT & CALCULATORS"
              )}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              {
                id: "elite",
                labelFa: "شبیه‌ساز نخبگان (GTI/EB-1A)",
                labelEn: "Elite Visa Audit",
              },
              {
                id: "skilled",
                labelFa: "امتیاز مهاجرت مهارتی",
                labelEn: "Skilled Points Calc",
              },
              {
                id: "health",
                labelFa: "تست سلامت رزومه علمی",
                labelEn: "Portfolio Health Check",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-[10.5px] uppercase tracking-wider font-medium transition cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-black font-semibold"
                    : "av-card text-zinc-400 hover:text-white"
                }`}
              >
                {t(tab.labelFa, tab.labelEn)}
              </button>
            ))}
          </div>
        </div>

        <div className="av-card rounded-xl p-5 sm:p-7">
          {activeTab === "elite" && <AssessmentCalculator />}
          {activeTab === "skilled" && <SkillCalculator />}
          {activeTab === "health" && <ScientificEnhancer />}
        </div>
      </section>

      {/* 8. VERIFIED CASE STUDIES & PRICING TIERS */}
      <section id="stories" className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 6 cols: Case Studies */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
              {t("پرونده‌های موفق نخبگان", "VERIFIED CASE STUDIES")}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setSelectedStory((prev) =>
                    prev > 0 ? prev - 1 : SUCCESS_STORIES.length - 1
                  )
                }
                className="w-7 h-7 rounded-full border border-white/15 hover:border-white flex items-center justify-center text-zinc-300 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-zinc-400">
                0{selectedStory + 1} / 0{SUCCESS_STORIES.length}
              </span>
              <button
                onClick={() =>
                  setSelectedStory((prev) =>
                    prev < SUCCESS_STORIES.length - 1 ? prev + 1 : 0
                  )
                }
                className="w-7 h-7 rounded-full border border-white/15 hover:border-white flex items-center justify-center text-zinc-300 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div
            className="av-card rounded-xl p-6 flex-1 flex flex-col justify-between space-y-4"
            dir={dir}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {t(
                    SUCCESS_STORIES[selectedStory].nameFa,
                    SUCCESS_STORIES[selectedStory].nameEn
                  )}
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/10 text-white">
                  {t(
                    SUCCESS_STORIES[selectedStory].metricFa,
                    SUCCESS_STORIES[selectedStory].metricEn
                  )}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-4">
                {t(
                  SUCCESS_STORIES[selectedStory].fieldFa,
                  SUCCESS_STORIES[selectedStory].fieldEn
                )}{" "}
                •{" "}
                {t(
                  SUCCESS_STORIES[selectedStory].destinationFa,
                  SUCCESS_STORIES[selectedStory].destinationEn
                )}
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="av-card-inner p-3 rounded-lg">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                    {t("وضعیت اولیه:", "BASELINE:")}
                  </span>
                  <p className="text-zinc-300 leading-relaxed">
                    {t(
                      SUCCESS_STORIES[selectedStory].beforeFa,
                      SUCCESS_STORIES[selectedStory].beforeEn
                    )}
                  </p>
                </div>
                <div className="av-card-inner p-3 rounded-lg border-white/20">
                  <span className="text-[10px] uppercase tracking-wider text-white block mb-1">
                    {t("نتیجه مهندسی پرونده:", "OUTCOME:")}
                  </span>
                  <p className="text-zinc-200 leading-relaxed">
                    {t(
                      SUCCESS_STORIES[selectedStory].afterFa,
                      SUCCESS_STORIES[selectedStory].afterEn
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span>
                {t(
                  SUCCESS_STORIES[selectedStory].resultFa,
                  SUCCESS_STORIES[selectedStory].resultEn
                )}
              </span>
              <span>
                {t(
                  SUCCESS_STORIES[selectedStory].timelineFa,
                  SUCCESS_STORIES[selectedStory].timelineEn
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Right 6 cols: Pricing Tiers */}
        <div id="pricing" className="lg:col-span-6 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
              {t("تعرفه‌ها و پلن‌های قرارداد تضمینی", "ENGAGEMENT & RETAINER TIERS")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 flex-1" dir={dir}>
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.phase}
                className={`av-card rounded-xl p-4 flex flex-col justify-between ${
                  tier.featured ? "ring-1 ring-white/40 bg-white/[0.04]" : ""
                }`}
              >
                <div>
                  <span
                    className={`text-[9.5px] font-mono uppercase tracking-widest block mb-1 ${
                      tier.featured ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {tier.phase}
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {t(tier.titleFa, tier.titleEn)}
                  </h4>
                  <span className="text-xl font-bold text-white font-mono block my-2">
                    {tier.price}
                  </span>
                  <p
                    className={`text-[11px] leading-relaxed ${
                      tier.featured ? "text-zinc-300" : "text-zinc-400"
                    }`}
                  >
                    {t(tier.descFa, tier.descEn)}
                  </p>
                </div>
                <a
                  href="#contact-cta"
                  className={`mt-4 w-full py-2 rounded text-center text-[10px] uppercase tracking-wider block ${
                    tier.featured
                      ? "av-rect-btn font-bold"
                      : "border border-white/20 hover:bg-white hover:text-black transition font-semibold"
                  }`}
                >
                  {t(tier.ctaFa, tier.ctaEn)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <FAQSection variant="global-grid" />

      {/* 10. CONTACT CTA BANNER & EXPANDABLE DOSSIER FORM */}
      <ContactCTA
        showModal={showContactModal}
        onToggleModal={setShowContactModal}
        prefilledNotes={prefilledNotes}
      />
    </div>
  );
}
