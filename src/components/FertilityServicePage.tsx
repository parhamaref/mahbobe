import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FlaskConical,
  Microscope,
  Sparkles,
  Activity,
  HelpCircle,
  Clock,
  ShieldCheck,
  Camera,
} from "lucide-react";
import { FertilityServiceMonograph } from "../fertilityProgramsPart1";
import { ALL_FERTILITY_PROGRAMS } from "../fertilityInstituteData";
import {
  CellularGlassVisual,
  DnaHelixSculptureVisual,
  HormonalNetworkVisual,
} from "./LuxuryScientificVisuals";
import { FourPointStar } from "./ui/Icons";

interface FertilityServicePageProps {
  program: FertilityServiceMonograph;
  onNavigate: (path: string) => void;
  onBookConsultation: (contextTitle: string) => void;
}

const SECTION_NAV = [
  { id: "svc-hero", labelFa: "۰۱. معرفی", labelEn: "01. HERO" },
  { id: "svc-overview", labelFa: "۰۲. نمای کلی", labelEn: "02. OVERVIEW" },
  { id: "svc-who", labelFa: "۰۳. مخاطبان", labelEn: "03. WHO IT'S FOR" },
  { id: "svc-cases", labelFa: "۰۴. کیس‌های بالینی", labelEn: "04. SITUATIONS" },
  { id: "svc-science", labelFa: "۰۵. مبانی علمی", labelEn: "05. SCIENCE" },
  { id: "svc-assess", labelFa: "۰۶. ارزیابی", labelEn: "06. ASSESSMENT" },
  { id: "svc-optimize", labelFa: "۰۷. بهینه‌سازی", labelEn: "07. OPTIMIZATION" },
  { id: "svc-outcomes", labelFa: "۰۸. نتایج", labelEn: "08. OUTCOMES" },
  { id: "svc-faq", labelFa: "۰۹. سوالات", labelEn: "09. FAQ" },
  { id: "svc-cta", labelFa: "۱۰. رزرو مشاوره", labelEn: "10. CONSULTATION" },
];

export default function FertilityServicePage({
  program,
  onNavigate,
  onBookConsultation,
}: FertilityServicePageProps) {
  const { dir, t } = useLanguage();

  const renderScientificVisual = () => {
    if (program.visualType === "cellular") {
      return <CellularGlassVisual className="w-full h-full min-h-[260px]" />;
    }
    if (program.visualType === "dna") {
      return <DnaHelixSculptureVisual className="w-full h-full min-h-[260px]" />;
    }
    return <HormonalNetworkVisual className="w-full h-full min-h-[260px]" />;
  };

  const relatedPrograms = ALL_FERTILITY_PROGRAMS.filter((p) =>
    program.relatedSlugs.includes(p.slug)
  );

  return (
    <div className="space-y-10 pb-12" dir={dir}>
      {/* Top Breadcrumb & Program Switcher Bar */}
      <div className="av-card rounded-xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("/")}
            className="px-3.5 py-2 rounded-lg border border-white/15 hover:border-white text-[10.5px] font-mono uppercase tracking-wider text-zinc-200 hover:text-white flex items-center gap-2 transition cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("صفحه اصلی موسسه", "INSTITUTE HOME")}</span>
          </button>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <span className="text-[10.5px] font-mono text-zinc-400 uppercase tracking-widest truncate">
            URL: <strong className="text-white">{program.slug}</strong> •{" "}
            {program.hero.wordCountBadge}
          </span>
        </div>

        {/* Quick Switcher across all 6 Dedicated Service Pages */}
        <div className="flex flex-wrap gap-1.5">
          {ALL_FERTILITY_PROGRAMS.map((p) => {
            const isActive = p.slug === program.slug;
            return (
              <button
                key={p.slug}
                onClick={() => onNavigate(p.slug)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono transition cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-bold"
                    : "av-card-inner text-zinc-400 hover:text-white"
                }`}
              >
                {t(p.hero.titleFa.split("(")[0].trim(), p.hero.titleEn)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sticky 10-Section Monograph Anchor Bar */}
      <div className="sticky top-2 z-30 av-card rounded-xl px-4 py-2.5 backdrop-blur-xl bg-[#101216]/90 border border-white/15 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {SECTION_NAV.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/10 transition"
            >
              {t(sec.labelFa, sec.labelEn)}
            </a>
          ))}
        </div>
      </div>

      {/* =================================================================
          SECTION 01: HERO SECTION
      ================================================================= */}
      <section
        id="svc-hero"
        className="av-card rounded-2xl p-6 sm:p-10 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15">
              <FourPointStar className="w-3.5 h-3.5 text-zinc-200" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-200">
                {t(program.hero.kickerFa, program.hero.kickerEn)}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
              {t(program.hero.titleFa, program.hero.titleEn)}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 leading-[1.85]">
              {t(program.hero.subtitleFa, program.hero.subtitleEn)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="av-card-inner rounded-xl p-4">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono block mb-1">
                  {program.hero.primaryStat}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                  {t(
                    program.hero.primaryStatLabelFa,
                    program.hero.primaryStatLabelEn
                  )}
                </span>
              </div>
              <div className="av-card-inner rounded-xl p-4">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono block mb-1">
                  {program.hero.secondaryStat}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                  {t(
                    program.hero.secondaryStatLabelFa,
                    program.hero.secondaryStatLabelEn
                  )}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() =>
                  onBookConsultation(
                    t(program.hero.titleFa, program.hero.titleEn)
                  )
                }
                className="av-rect-btn px-6 py-3.5 rounded text-[11px] font-bold uppercase tracking-[0.16em] flex items-center gap-3 cursor-pointer"
              >
                <span>{t(program.cta.buttonFa, program.cta.buttonEn)}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("/mahboubeh-tajaldini")}
                className="px-5 py-3.5 rounded border border-white/15 hover:border-white text-[11px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition cursor-pointer"
              >
                {t(
                  "پروفایل علمی دکتر محبوبه تاج‌الدینی ↗",
                  "DR. MAHBOUBEH TAJALDINI PROFILE ↗"
                )}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="av-card-inner rounded-2xl p-3 border border-white/15">
              {renderScientificVisual()}
              <div className="pt-3 px-2 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>LUXURY BIOMEDICAL TELEMETRY</span>
                <span>GORGAN • IRAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 02: OVERVIEW
      ================================================================= */}
      <section id="svc-overview" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              SECTION 02 • ARCHITECTURAL OVERVIEW
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(program.overview.headingFa, program.overview.headingEn)}
            </h2>
          </div>
          <Microscope className="w-6 h-6 text-zinc-400 shrink-0" />
        </div>

        <div className="space-y-4 text-xs sm:text-[13.5px] text-zinc-300 leading-[1.95]">
          {(t("fa", "en") === "fa"
            ? program.overview.paragraphsFa
            : program.overview.paragraphsEn
          ).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {program.overview.keyMetrics.map((km, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-4 border border-white/10"
            >
              <span className="text-xl sm:text-2xl font-bold text-white font-mono block mb-1">
                {km.value}
              </span>
              <span className="text-[10.5px] text-zinc-400 leading-relaxed block">
                {t(km.labelFa, km.labelEn)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 03: WHO IS THIS FOR?
      ================================================================= */}
      <section id="svc-who" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
            SECTION 03 • PATIENT CANDIDACY PROFILE
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
            {t(program.whoIsThisFor.headingFa, program.whoIsThisFor.headingEn)}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t(program.whoIsThisFor.introFa, program.whoIsThisFor.introEn)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {program.whoIsThisFor.profiles.map((prof, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 flex flex-col justify-between space-y-3 border border-white/10 hover:border-white/25 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-zinc-200">
                    {prof.metric || `PROFILE 0${idx + 1}`}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-zinc-300" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {t(prof.titleFa, prof.titleEn)}
                </h3>
                <p className="text-xs text-zinc-300 leading-[1.8]">
                  {t(prof.descFa, prof.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 04: COMMON PATIENT SITUATIONS
      ================================================================= */}
      <section id="svc-cases" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
            SECTION 04 • CLINICAL CASE SCENARIOS
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
            {t(
              program.commonSituations.headingFa,
              program.commonSituations.headingEn
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t(
              program.commonSituations.introFa,
              program.commonSituations.introEn
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {program.commonSituations.cases.map((cs, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 sm:p-6 space-y-4 border border-white/10"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                {cs.tag}
              </span>
              <h3 className="text-base font-bold text-white leading-snug">
                {t(cs.titleFa, cs.titleEn)}
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                    {t("تظاهر بالینی مراجع:", "CLINICAL PRESENTATION:")}
                  </span>
                  <p className="text-zinc-300 leading-relaxed">
                    {t(cs.problemFa, cs.problemEn)}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-black/30 border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 block mb-1">
                    {t(
                      "مکانیسم فیزیولوژیک پنهان:",
                      "UNDERLYING PHYSIOLOGICAL MECHANISM:"
                    )}
                  </span>
                  <p className="text-zinc-300 leading-relaxed">
                    {t(cs.rootMechanismFa, cs.rootMechanismEn)}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white/[0.04] border border-white/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white block mb-1">
                    {t(
                      "پروتکل مداخله موسسه نوآوری باروری:",
                      "INSTITUTE PRECISION INTERVENTION:"
                    )}
                  </span>
                  <p className="text-zinc-200 leading-relaxed">
                    {t(cs.instituteSolutionFa, cs.instituteSolutionEn)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 05: SCIENTIFIC BACKGROUND & BIOMARKER MATRIX
      ================================================================= */}
      <section id="svc-science" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              SECTION 05 • REPRODUCTIVE PHYSIOLOGY & MOLECULAR MECHANICS
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                program.scientificBackground.headingFa,
                program.scientificBackground.headingEn
              )}
            </h2>
          </div>
          <FlaskConical className="w-6 h-6 text-zinc-300 shrink-0" />
        </div>

        <div className="av-card-inner rounded-xl p-5 border-s-2 border-white">
          <p className="text-xs sm:text-sm text-zinc-200 leading-[1.9] font-medium">
            {t(
              program.scientificBackground.abstractFa,
              program.scientificBackground.abstractEn
            )}
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-[13.5px] text-zinc-300 leading-[1.95]">
          {(t("fa", "en") === "fa"
            ? program.scientificBackground.deepDiveParagraphsFa
            : program.scientificBackground.deepDiveParagraphsEn
          ).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Biomarker Telemetry Table */}
        <div className="pt-3">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 mb-3">
            {t(
              "بیومارکرهای کلیدی و محدوده هدف فیزیولوژیک (TARGET BIOMARKER TELEMETRY)",
              "KEY PHYSIOLOGICAL BIOMARKERS & TARGET RANGES"
            )}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {program.scientificBackground.biomarkers.map((bio, idx) => (
              <div
                key={idx}
                className="av-card-inner rounded-xl p-4 border border-white/10 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-zinc-400">
                    {bio.code}
                  </span>
                  <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                    {bio.targetRange}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  {t(bio.nameFa, bio.nameEn)}
                </h4>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  {t(bio.clinicalRoleFa, bio.clinicalRoleEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 06: ASSESSMENT PROCESS
      ================================================================= */}
      <section id="svc-assess" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
            SECTION 06 • DIAGNOSTIC ARCHITECTURE
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
            {t(
              program.assessmentProcess.headingFa,
              program.assessmentProcess.headingEn
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t(
              program.assessmentProcess.introFa,
              program.assessmentProcess.introEn
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {program.assessmentProcess.steps.map((st, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 flex flex-col justify-between border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded bg-white/10">
                    {st.stepNumber}
                  </span>
                  <Clock className="w-4 h-4 text-zinc-400" />
                </div>
                <span className="text-[10px] font-mono text-zinc-400 block mb-1.5">
                  {t(st.timeframeFa, st.timeframeEn)}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {t(st.titleFa, st.titleEn)}
                </h3>
                <p className="text-[11.5px] text-zinc-300 leading-[1.75]">
                  {t(st.descFa, st.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 07: OPTIMIZATION PROCESS
      ================================================================= */}
      <section id="svc-optimize" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
            SECTION 07 • CLINICAL OPTIMIZATION PROTOCOL
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
            {t(
              program.optimizationProcess.headingFa,
              program.optimizationProcess.headingEn
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t(
              program.optimizationProcess.introFa,
              program.optimizationProcess.introEn
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {program.optimizationProcess.phases.map((ph, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 sm:p-6 flex flex-col justify-between border border-white/15 space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white text-black">
                    {ph.phaseCode}
                  </span>
                  <Activity className="w-4 h-4 text-zinc-300" />
                </div>
                <span className="text-[10.5px] font-mono text-zinc-400 block">
                  {t(ph.durationFa, ph.durationEn)}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {t(ph.titleFa, ph.titleEn)}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {t(ph.descFa, ph.descEn)}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  {t("مداخلات کلیدی:", "CORE INTERVENTIONS:")}
                </span>
                {(t("fa", "en") === "fa"
                  ? ph.interventionsFa
                  : ph.interventionsEn
                ).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-[11.5px] text-zinc-200 leading-relaxed"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 08: EXPECTED OUTCOMES
      ================================================================= */}
      <section id="svc-outcomes" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="border-b border-white/10 pb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
            SECTION 08 • MEASURABLE BIOLOGICAL OUTCOMES
          </span>
          <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
            {t(
              program.expectedOutcomes.headingFa,
              program.expectedOutcomes.headingEn
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            {t(
              program.expectedOutcomes.summaryFa,
              program.expectedOutcomes.summaryEn
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {program.expectedOutcomes.benchmarks.map((bm, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 border border-white/15 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg sm:text-xl font-bold font-mono text-white">
                  {bm.metric}
                </span>
                <ShieldCheck className="w-5 h-5 text-zinc-300" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {t(bm.titleFa, bm.titleEn)}
              </h3>
              <p className="text-xs text-zinc-300 leading-[1.8]">
                {t(bm.descFa, bm.descEn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 09: PROGRAM-SPECIFIC FAQ
      ================================================================= */}
      <section id="svc-faq" className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              SECTION 09 • CLINICAL QUESTIONS & ANSWERS
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "سوالات متداول علمی درباره این برنامه",
                "Frequently Asked Clinical Questions"
              )}
            </h2>
          </div>
          <HelpCircle className="w-6 h-6 text-zinc-400 shrink-0" />
        </div>

        <div className="space-y-4">
          {program.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 border border-white/10 space-y-2"
            >
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-start gap-2.5">
                <span className="font-mono text-zinc-400">0{idx + 1}.</span>
                <span>{t(faq.qFa, faq.qEn)}</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-[1.9] ps-6">
                {t(faq.aFa, faq.aEn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          DELIVERABLE METADATA: LUXURY AI IMAGE PROMPT & SEO CARD
      ================================================================= */}
      <section className="av-card rounded-xl p-5 border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-zinc-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              {t(
                "مشخصات سئو و پرامپت تصویر اختصاصی این صفحه (SEO & LUXURY AI VISUAL PROMPT)",
                "PAGE SEO ARCHITECTURE & CINEMATIC AI VISUAL PROMPT"
              )}
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400">
            {program.slug}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-[11px]">
          <div className="av-card-inner p-3.5 rounded-lg space-y-1">
            <span className="text-[9.5px] font-mono uppercase text-zinc-400 block">
              SEO META TITLE & DESCRIPTION:
            </span>
            <p className="text-white font-semibold">
              {t(program.seo.metaTitleFa, program.seo.metaTitleEn)}
            </p>
            <p className="text-zinc-400 leading-relaxed">
              {t(program.seo.metaDescriptionFa, program.seo.metaDescriptionEn)}
            </p>
          </div>
          <div className="av-card-inner p-3.5 rounded-lg space-y-1">
            <span className="text-[9.5px] font-mono uppercase text-zinc-400 block">
              LUXURY AI IMAGE PROMPT ({program.aiImagePrompt.sectionTitle}):
            </span>
            <p className="text-zinc-300 font-mono text-[10.5px] leading-relaxed">
              "{program.aiImagePrompt.prompt}"
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 10: CONSULTATION CTA & INTERNAL LINKING
      ================================================================= */}
      <section
        id="svc-cta"
        className="metallic-cta-bg rounded-2xl p-7 sm:p-10 border border-white/20 space-y-6"
      >
        <div className="max-w-2xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-300 block">
            SECTION 10 • PRIVATE CLINICAL CONSULTATION
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-white leading-tight">
            {t(program.cta.headlineFa, program.cta.headlineEn)}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {t(program.cta.subtextFa, program.cta.subtextEn)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() =>
              onBookConsultation(t(program.hero.titleFa, program.hero.titleEn))
            }
            className="av-rect-btn px-7 py-3.5 rounded text-xs font-bold uppercase tracking-[0.16em] flex items-center gap-3 cursor-pointer"
          >
            <span>{t(program.cta.buttonFa, program.cta.buttonEn)}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate("/mahboubeh-tajaldini")}
            className="px-5 py-3.5 rounded border border-white/25 hover:border-white text-xs font-semibold text-white transition cursor-pointer"
          >
            {t(
              "مشاهده رزومه علمی دکتر محبوبه تاج‌الدینی",
              "Dr. Mahboubeh Tajaldini Scientific Profile"
            )}
          </button>
        </div>

        {/* Internal Cross-Linking to Related Institute Programs */}
        {relatedPrograms.length > 0 && (
          <div className="pt-6 border-t border-white/15">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 block mb-3">
              {t(
                "برنامه‌های مکمل و مرتبط در موسسه نوآوری باروری:",
                "SYNERGISTIC & RELATED INSTITUTE PROGRAMS:"
              )}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedPrograms.map((rel) => (
                <button
                  key={rel.slug}
                  onClick={() => onNavigate(rel.slug)}
                  className="av-card-inner p-3.5 rounded-xl text-start hover:border-white/40 transition flex items-center justify-between gap-2 cursor-pointer"
                >
                  <div>
                    <span className="text-[9.5px] font-mono text-zinc-400 block">
                      {rel.slug}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {t(rel.hero.titleFa.split("(")[0].trim(), rel.hero.titleEn)}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
