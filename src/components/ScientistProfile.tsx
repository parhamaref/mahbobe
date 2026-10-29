import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  FlaskConical,
  Globe,
  Layers,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  DR_TAJALDINI_PROFILE,
  ALL_FERTILITY_PROGRAMS,
} from "../fertilityInstituteData";
import { FourPointStar, FourPointStarFilled } from "./ui/Icons";

interface ScientistProfileProps {
  mode?: "spotlight" | "full-page";
  onNavigate: (path: string) => void;
  onBookConsultation: (contextTitle: string) => void;
}

export default function ScientistProfile({
  mode = "full-page",
  onNavigate,
  onBookConsultation,
}: ScientistProfileProps) {
  const { dir, t } = useLanguage();

  if (mode === "spotlight") {
    return (
      <section id="meet-the-experts" className="space-y-6" dir={dir}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 block mb-1.5">
              SECTION 07 • SCIENTIFIC LEADERSHIP & CLINICAL BOARD
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white">
              {t(
                "رهبری علمی و تیم متخصصان موسسه نوآوری باروری",
                "Meet The Experts & Scientific Leadership"
              )}
            </h2>
          </div>
          <button
            onClick={() => onNavigate("/mahboubeh-tajaldini")}
            className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <span>
              {t(
                "ورود به صفحه اختصاصی دکتر محبوبه تاج‌الدینی (/mahboubeh-tajaldini)",
                "FULL SCIENTIFIC PROFILE (/mahboubeh-tajaldini)"
              )}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary Spotlight Card: Dr. Mahboubeh Tajaldini (8 cols) */}
          <div className="lg:col-span-8 av-card rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-44 sm:w-52 h-60 sm:h-64 rounded-xl overflow-hidden border border-white/15 shrink-0 bg-[#101216]">
              <img
                src={DR_TAJALDINI_PROFILE.portraitUrl}
                alt={t(
                  DR_TAJALDINI_PROFILE.nameFa,
                  DR_TAJALDINI_PROFILE.nameEn
                )}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.95]"
              />
            </div>

            <div className="space-y-3.5 flex-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-white text-black text-[9.5px] font-mono font-bold uppercase">
                CHIEF SCIENTIFIC DIRECTOR
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t(DR_TAJALDINI_PROFILE.nameFa, DR_TAJALDINI_PROFILE.nameEn)}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-200">
                {t(DR_TAJALDINI_PROFILE.titleFa, DR_TAJALDINI_PROFILE.titleEn)}
              </p>
              <p className="text-xs text-zinc-300 leading-[1.85]">
                {t(
                  DR_TAJALDINI_PROFILE.biographyFa[0],
                  DR_TAJALDINI_PROFILE.biographyEn[0]
                )}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {DR_TAJALDINI_PROFILE.coreBadges.slice(0, 6).map((b, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.06] border border-white/10 text-zinc-200"
                  >
                    {t(b.labelFa, b.labelEn)}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("/mahboubeh-tajaldini")}
                  className="av-rect-btn px-5 py-2.5 rounded text-[10.5px] font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>
                    {t(
                      "مشاهده پروفایل کامل علمی و اختراعات",
                      "EXPLORE FULL SCIENTIST PROFILE"
                    )}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right 4 Cols: Executive Leadership & Clinical Fellows */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="av-card rounded-2xl p-5 border border-white/15 space-y-2.5">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-zinc-400 block">
                EXECUTIVE & SYSTEMS ARCHITECTURE
              </span>
              <h3 className="text-base font-bold text-white">
                {t("مهندس پرهام عارف", "Eng. Parham Aref")}
              </h3>
              <p className="text-xs text-zinc-300 font-medium">
                {t(
                  "هم‌بنیان‌گذار، مدیر اجرایی و معمار سیستم‌های سلامت دیجیتال و تله‌مدیسین",
                  "Co-Founder, Executive Director & Digital Health Systems Architect"
                )}
              </p>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                {t(
                  "هدایت زیرساخت‌های پلتفرم پایش داده‌محور باروری، پرتال پژوهش و فناوری و هماهنگی بین‌المللی پرونده‌ها.",
                  "Leading the Institute's data-driven patient telemetry infrastructure, research portal, and international operations."
                )}
              </p>
            </div>

            <div className="av-card rounded-2xl p-5 border border-white/15 space-y-2.5">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-zinc-400 block">
                MULTIDISCIPLINARY CLINICAL FELLOWS
              </span>
              <h3 className="text-base font-bold text-white">
                {t(
                  "بورد همکاران بالینی (زنان، جنین‌شناسی، اورولوژی و متابولیسم)",
                  "Collaborative Reproductive Physicians & Embryology Fellows"
                )}
              </h3>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                {t(
                  "شبکه یکپارچه متخصصان زنان و فلوشیپ‌های IVF، متخصصان آندرولوژی، تغذیه بالینی و ایمونولوژی تولیدمثل جهت اجرای هماهنگ پروتکل‌ها.",
                  "Integrated clinical network of collaborating reproductive endocrinologists, embryologists, andrologists, and metabolic specialists."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="space-y-10 pb-12" dir={dir}>
      {/* Top Breadcrumb Bar */}
      <div className="av-card rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("/")}
            className="px-3.5 py-2 rounded-lg border border-white/15 hover:border-white text-[10.5px] font-mono uppercase tracking-wider text-zinc-200 hover:text-white flex items-center gap-2 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("صفحه اصلی موسسه", "INSTITUTE HOME")}</span>
          </button>
          <span className="text-[10.5px] font-mono text-zinc-400">
            URL: <strong className="text-white">/mahboubeh-tajaldini</strong> •
            SCIENTIFIC LEADERSHIP MONOGRAPH
          </span>
        </div>

        <button
          onClick={() =>
            onBookConsultation(
              t(
                "مشاوره علمی مستقیم با دفتر دکتر محبوبه تاج‌الدینی",
                "Direct Scientific Consultation — Dr. Mahboubeh Tajaldini"
              )
            )
          }
          className="av-pill-btn px-5 py-2 rounded-full text-[10.5px] font-bold uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer"
        >
          <span>{t("رزرو جلسه مشاوره تخصصی", "BOOK SCIENTIFIC CONSULTATION")}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =================================================================
          01. HERO: SCIENTIST & INNOVATION LEADER MONOGRAPH
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: Title, Credentials & Executive Summary */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15">
              <FourPointStarFilled className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-200">
                SCIENTIFIC DIRECTOR • WIPO PATENT HOLDER • BOLOGNA FELLOW
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              {t(DR_TAJALDINI_PROFILE.nameFa, DR_TAJALDINI_PROFILE.nameEn)}
            </h1>

            <p className="text-sm sm:text-base font-medium text-zinc-200 leading-relaxed">
              {t(DR_TAJALDINI_PROFILE.titleFa, DR_TAJALDINI_PROFILE.titleEn)}
            </p>

            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              {t(
                DR_TAJALDINI_PROFILE.credentialsShortFa,
                DR_TAJALDINI_PROFILE.credentialsShortEn
              )}
            </p>

            {/* 8 Credential Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {DR_TAJALDINI_PROFILE.coreBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="av-card-inner rounded-lg px-3.5 py-2.5 flex items-center gap-2.5 border border-white/10"
                >
                  <FourPointStar className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  <span className="text-xs font-medium text-zinc-200">
                    {t(badge.labelFa, badge.labelEn)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Cols: Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="av-card-inner rounded-2xl p-4 border border-white/15 relative overflow-hidden">
              <div className="relative h-[380px] sm:h-[430px] rounded-xl overflow-hidden bg-[#101216] flex items-end justify-center">
                <img
                  src={DR_TAJALDINI_PROFILE.portraitUrl}
                  alt={t(
                    DR_TAJALDINI_PROFILE.nameFa,
                    DR_TAJALDINI_PROFILE.nameEn
                  )}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.95] saturate-[0.88]"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101216] via-[#101216]/70 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-[10px] font-mono text-zinc-200">
                  <span>PHD IN PHYSIOLOGY • POSTDOC</span>
                  <span>GENEVA & SILICON VALLEY GOLD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          02. RESEARCH PHILOSOPHY QUOTE BANNER
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 border-s-2 border-white">
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-2">
          RESEARCH & CLINICAL PHILOSOPHY
        </span>
        <blockquote className="text-sm sm:text-lg text-zinc-100 leading-[1.9] font-normal italic">
          {t(
            DR_TAJALDINI_PROFILE.researchPhilosophyFa,
            DR_TAJALDINI_PROFILE.researchPhilosophyEn
          )}
        </blockquote>
      </section>

      {/* =================================================================
          03. BIOGRAPHY & SCIENTIFIC TRAJECTORY
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              SCIENTIFIC BIOGRAPHY
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "بیوگرافی علمی و مسیر پژوهش‌های بین‌المللی",
                "Biography & Translational Scientific Trajectory"
              )}
            </h2>
          </div>
          <Microscope className="w-6 h-6 text-zinc-300" />
        </div>

        <div className="space-y-4 text-xs sm:text-[13.5px] text-zinc-300 leading-[1.95]">
          {(t("fa", "en") === "fa"
            ? DR_TAJALDINI_PROFILE.biographyFa
            : DR_TAJALDINI_PROFILE.biographyEn
          ).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* =================================================================
          04. INTERNATIONAL PATENTS, AWARDS & SCIENTIFIC ACHIEVEMENTS
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              WIPO PATENTS • GENEVA & SILICON VALLEY GOLD MEDALS • BOLOGNA FELLOWSHIP
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "ثبت اختراعات بین‌المللی، مدال‌های جهانی و افتخارات علمی",
                "International Patents, Global Invention Awards & Honors"
              )}
            </h2>
          </div>
          <Award className="w-6 h-6 text-zinc-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DR_TAJALDINI_PROFILE.scientificAchievements.map((ach, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 border border-white/15 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white text-black">
                  {ach.metric}
                </span>
                <ShieldCheck className="w-5 h-5 text-zinc-300" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {t(ach.titleFa, ach.titleEn)}
              </h3>
              <p className="text-xs text-zinc-300 leading-[1.8]">
                {t(ach.descFa, ach.descEn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          05. CORE RESEARCH AREAS & INNOVATION PROJECTS
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              CORE RESEARCH DOMAINS & INNOVATION PROJECTS
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "محورهای پژوهشی و پروژه‌های نوآوری در فیزیولوژی تولیدمثل",
                "Primary Research Areas & Translational Innovation Projects"
              )}
            </h2>
          </div>
          <FlaskConical className="w-6 h-6 text-zinc-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DR_TAJALDINI_PROFILE.researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 border border-white/10 space-y-2.5"
            >
              <span className="text-[10px] font-mono text-zinc-400 block">
                {area.code}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {t(area.titleFa, area.titleEn)}
              </h3>
              <p className="text-xs text-zinc-300 leading-[1.8]">
                {t(area.descFa, area.descEn)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          06. SELECTED SCIENTIFIC PUBLICATIONS & MONOGRAPHS
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              PEER-REVIEWED PUBLICATIONS & SCIENTIFIC MONOGRAPHS
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "گزیده انتشارات علمی و مطالعات پژوهشی",
                "Selected Scientific Publications & Research Themes"
              )}
            </h2>
          </div>
          <BookOpen className="w-6 h-6 text-zinc-300" />
        </div>

        <div className="space-y-3.5">
          {DR_TAJALDINI_PROFILE.publications.map((pub, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-zinc-200">
                    {pub.focusTag}
                  </span>
                  <span className="text-[10.5px] font-mono text-zinc-400">
                    {pub.journal}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  {t(pub.titleFa, pub.titleEn)}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                {pub.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          07. ACADEMIC & INNOVATION TIMELINE
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              ACADEMIC & SCIENTIFIC TIMELINE
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "تایم‌لاین مدارج دانشگاهی و دستاوردهای بین‌المللی",
                "Academic Career & International Innovation Timeline"
              )}
            </h2>
          </div>
          <Layers className="w-6 h-6 text-zinc-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {DR_TAJALDINI_PROFILE.academicTimeline.map((item, idx) => (
            <div
              key={idx}
              className="av-card-inner rounded-xl p-4 border border-white/10 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-zinc-400 block">
                  0{idx + 1} • {item.period}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  {t(item.titleFa, item.titleEn)}
                </h3>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  {t(item.descFa, item.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          08. CLINICAL PROGRAMS DIRECTED BY DR. MAHBOUBEH TAJALDINI
      ================================================================= */}
      <section className="av-card rounded-2xl p-6 sm:p-9 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              CLINICAL TRANSLATION
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {t(
                "برنامه‌های تخصصی تحت نظارت علمی دکتر محبوبه تاج‌الدینی",
                "Clinical Programs Directed by Dr. Mahboubeh Tajaldini"
              )}
            </h2>
          </div>
          <Globe className="w-6 h-6 text-zinc-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {ALL_FERTILITY_PROGRAMS.map((prog) => (
            <button
              key={prog.slug}
              onClick={() => onNavigate(prog.slug)}
              className="av-card-inner rounded-xl p-4 text-start border border-white/10 hover:border-white/40 transition flex flex-col justify-between gap-3 cursor-pointer"
            >
              <div>
                <span className="text-[9.5px] font-mono text-zinc-400 block mb-1">
                  {prog.slug}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                  {t(prog.hero.titleFa, prog.hero.titleEn)}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                  {t(prog.hero.subtitleFa, prog.hero.subtitleEn)}
                </p>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300 pt-2 border-t border-white/10">
                <span>{t("مطالعه مونوگراف کامل", "READ FULL MONOGRAPH")}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =================================================================
          09. CONSULTATION CTA
      ================================================================= */}
      <section className="metallic-cta-bg rounded-2xl p-7 sm:p-10 border border-white/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT SCIENTIFIC DOSSIER REVIEW • GORGAN & ONLINE</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            {t(
              "بررسی تخصصی پرونده باروری و IVF زیر نظر دکتر محبوبه تاج‌الدینی",
              "Request a Scientific Case Audit with Dr. Mahboubeh Tajaldini"
            )}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {t(
              "برای رزرو نوبت ارزیابی فیزیولوژیک پیش از IVF، بررسی شکست‌های قبلی یا همکاری‌های پژوهشی، درخواست خود را ثبت کنید.",
              "Schedule a private consultation for pre-IVF conditioning, recurrent IVF failure investigation, or scientific research collaboration."
            )}
          </p>
        </div>

        <button
          onClick={() =>
            onBookConsultation(
              t(
                "مشاوره اختصاصی با دکتر محبوبه تاج‌الدینی",
                "Private Consultation — Dr. Mahboubeh Tajaldini"
              )
            )
          }
          className="av-rect-btn px-7 py-4 rounded text-xs font-bold uppercase tracking-[0.16em] flex items-center gap-3 shrink-0 cursor-pointer"
        >
          <span>{t("ثبت درخواست مشاوره علمی", "BOOK CONSULTATION")}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
