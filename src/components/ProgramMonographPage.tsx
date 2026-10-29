import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  ALL_PROGRAM_PAGES,
  getProgramPageById,
} from "../programPagesDataPart2";
import {
  CellularGlassVisual,
  DnaHelixSculptureVisual,
  HormonalNetworkVisual,
} from "./LuxuryScientificVisuals";
import ServiceCard from "./ServiceCard";
import FAQSection from "./FAQSection";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Microscope,
  ShieldCheck,
  Activity,
  Compass,
  BookOpen,
  Users,
  FileText,
} from "lucide-react";

interface ProgramMonographPageProps {
  selectedProgramId: string;
  onSelectProgram: (id: string) => void;
  onRequestConsultation: (programTitle: string) => void;
}

const SECTION_JUMP_LINKS = [
  { id: "prog-hero", num: "01", labelFa: "معرفی و شاخص‌ها", labelEn: "Hero & Metrics" },
  { id: "prog-overview", num: "02", labelFa: "نمای کلی برنامه", labelEn: "Overview" },
  { id: "prog-who", num: "03", labelFa: "مخاطبان هدف", labelEn: "Who Is This For?" },
  { id: "prog-situations", num: "04", labelFa: "سناریوهای رایج", labelEn: "Common Situations" },
  { id: "prog-science", num: "05", labelFa: "مبانی علمی و رگولاتوری", labelEn: "Scientific Background" },
  { id: "prog-assessment", num: "06", labelFa: "فرآیند ارزیابی", labelEn: "Assessment Process" },
  { id: "prog-optimization", num: "07", labelFa: "فرآیند بهینه‌سازی", labelEn: "Optimization Process" },
  { id: "prog-outcomes", num: "08", labelFa: "نتایج و دستاوردها", labelEn: "Expected Outcomes" },
  { id: "prog-faq", num: "09", labelFa: "سوالات متداول", labelEn: "Program FAQ" },
  { id: "prog-cta", num: "10", labelFa: "رزرو مشاوره", labelEn: "Consultation CTA" },
];

const SHORT_PROGRAM_META: Record<string, { fa: string; en: string; tag: string }> = {
  "gti-au": {
    fa: "استعداد جهانی استرالیا (GTI 858)",
    en: "Australia Global Talent (858)",
    tag: "01 // CELLULAR & MEDTECH",
  },
  "eb1a-us": {
    fa: "نخبگان و منافع ملی آمریکا (EB-1A/NIW)",
    en: "US EB-1A & National Interest",
    tag: "02 // GENOMIC & CLINICAL",
  },
  "amc-au": {
    fa: "رجیستری پزشکان AMC و GTV بریتانیا",
    en: "Medical AMC & UK Royal Society",
    tag: "03 // ENDOCRINE & AHPRA",
  },
  "srep-program": {
    fa: "ارتقای رزومه و مقالات Q1 (SREP™)",
    en: "SREP™ Citation Architecture",
    tag: "04 // Q1 & SCIENTOMETRICS",
  },
  "pap-program": {
    fa: "پروتکل فلوشیپ و فول‌فاند (PAP™)",
    en: "PAP™ Fellowship & Grants",
    tag: "05 // NIH & AGRTP GRANTS",
  },
};

function MonographSectionHeader({
  number,
  title,
  kicker,
}: {
  number: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white font-mono text-xs">
          {number}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
      </div>
      {kicker && (
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 hidden sm:inline">
          {kicker}
        </span>
      )}
    </div>
  );
}

export default function ProgramMonographPage({
  selectedProgramId,
  onSelectProgram,
  onRequestConsultation,
}: ProgramMonographPageProps) {
  const { language, dir, t } = useLanguage();
  const program = getProgramPageById(selectedProgramId);

  const renderLuxuryVisual = () => {
    if (program.visualType === "cellular") return <CellularGlassVisual />;
    if (program.visualType === "dna") return <DnaHelixSculptureVisual />;
    return <HormonalNetworkVisual />;
  };

  return (
    <div className="mt-8 space-y-8" dir={dir}>
      {/* =========================================================
          TOP MONOGRAPH SWITCHER & EDITORIAL INDEX BAR
      ========================================================= */}
      <div className="av-card rounded-2xl p-5 sm:p-7 border border-white/15">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 mb-1.5">
              <BookOpen className="w-3.5 h-3.5 text-zinc-300" />
              <span>
                {t(
                  "مونوگراف‌های جامع تخصصی (۱۰ بخش کامل • بیش از ۱,۵۰۰ کلمه در هر برنامه)",
                  "COMPREHENSIVE CLINICAL & SOVEREIGN MONOGRAPHS (10 MANDATORY SECTIONS • 1,500+ WORDS EACH)"
                )}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {t(
                "انتخاب دپارتمان و مطالعه مستندات کامل علمی-اجرایی برنامه:",
                "Select a Sovereign Program Monograph to Explore Full Clinical & Scientific Documentation:"
              )}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-[10.5px] font-mono text-zinc-400 bg-white/[0.03] border border-white/10 px-3.5 py-2 rounded-lg shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
            <span>
              {t(
                "نظارت علمی: دکتر محبوبه تاج‌الدینی",
                "Lead Architect: Dr. Mahboubeh Tajeddini"
              )}
            </span>
          </div>
        </div>

        {/* 5 Comprehensive Program Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-5">
          {ALL_PROGRAM_PAGES.map((item, idx) => {
            const isActive = item.id === program.id;
            const meta = SHORT_PROGRAM_META[item.id] || {
              fa: item.hero.titleFa,
              en: item.hero.titleEn,
              tag: `0${idx + 1} // PROGRAM`,
            };

            return (
              <button
                key={item.id}
                onClick={() => onSelectProgram(item.id)}
                className={`text-start p-3.5 rounded-xl transition-all cursor-pointer flex flex-col justify-between gap-2 border ${
                  isActive
                    ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.18)]"
                    : "av-card-inner text-zinc-300 hover:text-white hover:border-white/25"
                }`}
              >
                <span
                  className={`text-[9px] font-mono uppercase tracking-[0.18em] block ${
                    isActive ? "text-zinc-700 font-bold" : "text-zinc-500"
                  }`}
                >
                  {meta.tag}
                </span>
                <span className="text-xs font-semibold leading-snug block">
                  {t(meta.fa, meta.en)}
                </span>
              </button>
            );
          })}
        </div>

        {/* 10-Section Chapter Navigation Bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 shrink-0 me-1">
            {t("فهرست ۱۰ بخش:", "10 SECTIONS:")}
          </span>
          {SECTION_JUMP_LINKS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-white/[0.1] border border-white/10 text-[10.5px] text-zinc-300 hover:text-white transition whitespace-nowrap flex items-center gap-1.5"
            >
              <span className="font-mono text-[9.5px] text-zinc-500">{sec.num}</span>
              <span>{t(sec.labelFa, sec.labelEn)}</span>
            </a>
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 01: PROGRAM HERO SECTION
      ========================================================= */}
      <div
        id="prog-hero"
        className="av-card rounded-2xl p-6 sm:p-9 lg:p-11 relative overflow-hidden border border-white/15"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              <span>{program.code}</span>
            </div>

            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
              {t(program.hero.kickerFa, program.hero.kickerEn)}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-[1.22] tracking-tight">
              {t(program.hero.titleFa, program.hero.titleEn)}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed border-s-2 border-white/40 ps-4">
              {t(program.hero.subtitleFa, program.hero.subtitleEn)}
            </p>

            <p className="text-xs sm:text-[13.5px] text-zinc-400 leading-[1.85] text-justify">
              {t(program.hero.leadFa, program.hero.leadEn)}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 p-2">
              {renderLuxuryVisual()}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {program.hero.stats.map((st, i) => (
                <div key={i} className="av-card-inner rounded-xl p-3.5 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-[9.5px] uppercase tracking-[0.16em] text-zinc-400 mt-1">
                    {t(st.labelFa, st.labelEn)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 02: OVERVIEW
      ========================================================= */}
      <div id="prog-overview" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="02"
          title={t(program.overview.headingFa, program.overview.headingEn)}
          kicker="SECTION 02 // ARCHITECTURAL OVERVIEW"
        />

        <div className="space-y-4">
          {(language === "fa"
            ? program.overview.paragraphsFa
            : program.overview.paragraphsEn
          ).map((para, idx) => (
            <p
              key={idx}
              className="text-xs sm:text-[13.5px] text-zinc-300 leading-[1.9] text-justify"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {program.overview.keyPillars.map((pillar, idx) => (
            <ServiceCard
              key={idx}
              badge={`PILLAR 0${idx + 1}`}
              icon={<Layers className="w-4 h-4" />}
              title={t(pillar.titleFa, pillar.titleEn)}
              description={t(pillar.bodyFa, pillar.bodyEn)}
              footerMeta={pillar.metrics}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 03: WHO IS THIS FOR?
      ========================================================= */}
      <div id="prog-who" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="03"
          title={t(program.whoIsThisFor.headingFa, program.whoIsThisFor.headingEn)}
          kicker="SECTION 03 // CANDIDATE PROFILES"
        />

        <p className="text-xs sm:text-[13.5px] text-zinc-300 leading-[1.85]">
          {t(program.whoIsThisFor.introFa, program.whoIsThisFor.introEn)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.whoIsThisFor.profiles.map((prof, idx) => (
            <ServiceCard
              key={idx}
              badge={`PROFILE 0${idx + 1}`}
              icon={<Users className="w-4 h-4" />}
              title={t(prof.titleFa, prof.titleEn)}
              description={t(prof.bodyFa, prof.bodyEn)}
              footerMeta={prof.metrics}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 04: COMMON PATIENT / APPLICANT SITUATIONS
      ========================================================= */}
      <div id="prog-situations" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="04"
          title={t(
            program.commonPatientSituations.headingFa,
            program.commonPatientSituations.headingEn
          )}
          kicker="SECTION 04 // CLINICAL & CASE SCENARIOS"
        />

        <p className="text-xs sm:text-[13.5px] text-zinc-300 leading-[1.85]">
          {t(
            program.commonPatientSituations.introFa,
            program.commonPatientSituations.introEn
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.commonPatientSituations.cases.map((cs, idx) => (
            <ServiceCard
              key={idx}
              variant="accent-border"
              badge={`CASE SCENARIO 0${idx + 1}`}
              icon={<Activity className="w-4 h-4" />}
              title={t(cs.titleFa, cs.titleEn)}
              description={t(cs.bodyFa, cs.bodyEn)}
              footerMeta={cs.metrics}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 05: SCIENTIFIC BACKGROUND
      ========================================================= */}
      <div id="prog-science" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="05"
          title={t(
            program.scientificBackground.headingFa,
            program.scientificBackground.headingEn
          )}
          kicker="SECTION 05 // SCIENTIFIC & BIOMETRIC MECHANISMS"
        />

        <div className="space-y-4">
          {(language === "fa"
            ? program.scientificBackground.paragraphsFa
            : program.scientificBackground.paragraphsEn
          ).map((para, idx) => (
            <p
              key={idx}
              className="text-xs sm:text-[13.5px] text-zinc-300 leading-[1.9] text-justify"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {program.scientificBackground.mechanisms.map((mech, idx) => (
            <ServiceCard
              key={idx}
              badge={`MECHANISM 0${idx + 1}`}
              icon={<Microscope className="w-4 h-4" />}
              title={t(mech.titleFa, mech.titleEn)}
              description={t(mech.bodyFa, mech.bodyEn)}
              footerMeta={mech.metrics}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 06 & 07: ASSESSMENT PROCESS & OPTIMIZATION PROCESS
      ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 06: ASSESSMENT PROCESS */}
        <div id="prog-assessment" className="av-card rounded-2xl p-6 sm:p-8 space-y-5">
          <MonographSectionHeader
            number="06"
            title={t(
              program.assessmentProcess.headingFa,
              program.assessmentProcess.headingEn
            )}
          />

          <p className="text-xs text-zinc-300 leading-relaxed">
            {t(program.assessmentProcess.introFa, program.assessmentProcess.introEn)}
          </p>

          <div className="space-y-3.5">
            {program.assessmentProcess.stages.map((stg, idx) => (
              <ServiceCard
                key={idx}
                badge={stg.metrics || `STAGE 0${idx + 1}`}
                icon={<Compass className="w-3.5 h-3.5" />}
                title={t(stg.titleFa, stg.titleEn)}
                description={t(stg.bodyFa, stg.bodyEn)}
              />
            ))}
          </div>
        </div>

        {/* SECTION 07: OPTIMIZATION PROCESS */}
        <div id="prog-optimization" className="av-card rounded-2xl p-6 sm:p-8 space-y-5">
          <MonographSectionHeader
            number="07"
            title={t(
              program.optimizationProcess.headingFa,
              program.optimizationProcess.headingEn
            )}
          />

          <p className="text-xs text-zinc-300 leading-relaxed">
            {t(program.optimizationProcess.introFa, program.optimizationProcess.introEn)}
          </p>

          <div className="space-y-3.5">
            {program.optimizationProcess.phases.map((phs, idx) => (
              <ServiceCard
                key={idx}
                badge={phs.metrics || `PHASE 0${idx + 1}`}
                icon={<Sparkles className="w-3.5 h-3.5" />}
                title={t(phs.titleFa, phs.titleEn)}
                description={t(phs.bodyFa, phs.bodyEn)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 08: EXPECTED OUTCOMES
      ========================================================= */}
      <div id="prog-outcomes" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="08"
          title={t(
            program.expectedOutcomes.headingFa,
            program.expectedOutcomes.headingEn
          )}
          kicker="SECTION 08 // VERIFIED DELIVERABLES & OUTCOMES"
        />

        <p className="text-xs sm:text-[13.5px] text-zinc-300 leading-[1.85]">
          {t(program.expectedOutcomes.introFa, program.expectedOutcomes.introEn)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.expectedOutcomes.deliverables.map((deliv, idx) => (
            <ServiceCard
              key={idx}
              badge={deliv.metrics || `OUTCOME 0${idx + 1}`}
              icon={<ShieldCheck className="w-4 h-4 text-white" />}
              title={t(deliv.titleFa, deliv.titleEn)}
              description={t(deliv.bodyFa, deliv.bodyEn)}
              footerMeta={
                <span className="flex items-center gap-2 text-[10.5px] text-zinc-300 normal-case tracking-normal font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                  <span>
                    {t(
                      "تضمین انطباق با استانداردهای رگولاتوری و داوری حاکمیتی",
                      "Guaranteed regulatory & sovereign adjudication compliance"
                    )}
                  </span>
                </span>
              }
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          SECTION 09: PROGRAM-SPECIFIC FAQ
      ========================================================= */}
      <div id="prog-faq" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <MonographSectionHeader
          number="09"
          title={t(
            "۰۹. سوالات متداول تخصصی این برنامه (Program-Specific Technical FAQ)",
            "09. Program-Specific Technical & Regulatory FAQ"
          )}
          kicker="SECTION 09 // TECHNICAL FAQ"
        />

        <FAQSection variant="program-accordion" programFaqs={program.faqs} />
      </div>

      {/* =========================================================
          SECTION 10: PROGRAM CONSULTATION CTA
      ========================================================= */}
      <div
        id="prog-cta"
        className="metallic-cta-bg rounded-2xl p-6 sm:p-9 border border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-300">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>SECTION 10 // EXECUTIVE CONSULTATION & DOSSIER INTAKE</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
            {t(program.cta.titleFa, program.cta.titleEn)}
          </h3>
          <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
            {t(program.cta.bodyFa, program.cta.bodyEn)}
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            onRequestConsultation(t(program.hero.titleFa, program.hero.titleEn))
          }
          className="av-rect-btn px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-[0.16em] inline-flex items-center gap-3 shrink-0 cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <span>{t(program.cta.buttonFa, program.cta.buttonEn)}</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
        </button>
      </div>
    </div>
  );
}
