import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowUpRight,
  Download,
  Globe,
  Sparkles,
  Users,
  Trophy,
} from "lucide-react";
import { FourPointStar, FourPointStarFilled } from "./ui/Icons";

const NAV_LINKS = [
  { href: "#pathways", labelFa: "مسیرهای مهاجرت", labelEn: "PATHWAYS" },
  { href: "#services", labelFa: "خدمات نخبگان", labelEn: "CAPABILITIES" },
  { href: "#research", labelFa: "واحد پژوهش", labelEn: "RESEARCH" },
  { href: "#audit", labelFa: "ارزیابی علمی", labelEn: "AUDIT" },
  { href: "#stories", labelFa: "موفقیت‌ها", labelEn: "WORK" },
  { href: "#pricing", labelFa: "تعرفه‌ها", labelEn: "PRICING" },
  { href: "#faq", labelFa: "سوالات متداول", labelEn: "FAQ" },
  { href: "#about", labelFa: "درباره ما", labelEn: "ABOUT" },
];

const PROMO_BANNERS = [
  {
    id: "promo-banner-language",
    href: "https://la.tajglobal.ir/",
    Icon: Globe,
    titleFa: "دپارتمان زبان آکادمی تاج گلوبال",
    titleEn: "TAJ Global Language Academy Department",
    descFa: "آموزش تخصصی زبان انگلیسی و آمادگی آزمون‌های بین‌المللی کادر درمان (IELTS / OET)",
    descEn: "Specialized English coaching & international clinical exam prep",
  },
  {
    id: "promo-banner-research",
    href: "https://rd.tajglobal.ir/",
    Icon: Sparkles,
    titleFa: "پرتال سازمان پژوهش و فناوری تاج",
    titleEn: "TAJ Research & Technology Organization Portal",
    descFa: "سامانه یکپارچه پروژه‌های تحقیقاتی، شبیه‌سازها و کلاب علمی نخبگان",
    descEn: "Unified registry for high-impact studies & researcher indexations",
  },
];

const HERO_STATS = [
  {
    value: "98.6%",
    labelFa: "نرخ اخذ دعوت‌نامه‌های علمی",
    labelEn: "ENDORSEMENT SUCCESS RATE",
    Icon: FourPointStar,
  },
  {
    value: "260+",
    labelFa: "پزشک و محقق در سراسر جهان",
    labelEn: "GLOBAL MDs & PhDs PLACED",
    Icon: Users,
  },
  {
    value: "$3.5M+",
    labelFa: "گرنت و بودجه علمی جذب‌شده",
    labelEn: "ACADEMIC GRANTS SECURED",
    Icon: Trophy,
  },
  {
    value: "24",
    labelFa: "ضمانت ماهانه تایید علمی پرونده",
    labelEn: "MONTHS SCIENTIFIC WARRANTY",
    Icon: Globe,
  },
];

export default function HeroSection() {
  const { language, toggleLanguage, dir, t } = useLanguage();

  return (
    <>
      {/* =========================================================
          1. TOP NAVIGATION BAR (Exact match to AV top banner screenshot)
      ========================================================= */}
      <header dir="ltr" className="pt-5 sm:pt-7 pb-3 flex flex-col gap-3 relative z-30">
        <div className="flex items-center justify-between gap-4">
          {/* Left Monogram Logo */}
          <a href="#" className="group flex items-center">
            <span className="font-serif text-[30px] sm:text-[38px] tracking-[-0.1em] text-white font-normal leading-none select-none">
              TG
            </span>
          </a>

          {/* Right Nav Links + Pill Button */}
          <div className="flex items-center gap-4 lg:gap-7">
            <nav
              dir={dir}
              className="font-iransans hidden xl:flex items-center gap-5 2xl:gap-6 text-xs text-zinc-300 font-medium"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-iransans hover:text-white transition-colors"
                >
                  {t(item.labelFa, item.labelEn)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <button
                onClick={toggleLanguage}
                className="font-iransans px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 text-[10px] uppercase tracking-[0.14em] text-zinc-300 hover:text-white transition cursor-pointer"
              >
                {language === "fa" ? "EN" : "FA"}
              </button>

              <a
                href="#contact-cta"
                className="font-iransans av-pill-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] font-semibold flex items-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <span>{t("شروع مشاوره", "LET'S TALK")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet swipeable menu bar for Legacy Website */}
        <nav
          dir={dir}
          className="font-iransans xl:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-iransans px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] text-zinc-300 hover:text-white whitespace-nowrap transition"
            >
              {t(item.labelFa, item.labelEn)}
            </a>
          ))}
        </nav>
      </header>

      {/* =========================================================
          2. HERO SECTION (Full-Width Banner Background)
      ========================================================= */}
      <section
        dir="ltr"
        className="relative mb-6 rounded-2xl overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[650px] flex items-end border border-white/[0.08]"
      >
        {/* Full-Width Hero Banner Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <img
            src="https://panonama.ir/wp-content/uploads/2026/10/Gemini_Generated_Image_fqlx01fqlx01fqlx-scaled.jpg"
            alt={t("دکتر محبوبه تاج‌الدینی", "Dr. Mahboubeh Tajeddini")}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle left-side readability gradient & bottom blend into dark theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101216]/85 via-[#101216]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101216] via-[#101216]/45 to-transparent" />
        </div>

        {/* Delicate Orbital Arc on Right Side + 4-Point Sparkle Star */}
        <div className="hidden sm:block absolute right-[2%] lg:right-[3%] top-[7%] w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] lg:w-[475px] lg:h-[475px] rounded-full border border-white/[0.15] hero-arc-mask pointer-events-none z-10">
          <div className="absolute bottom-[24%] right-[8.5%] text-zinc-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            <FourPointStarFilled className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </div>
        </div>

        {/* Left Column: Kicker + Giant 2-Line Stacked Metallic Headline + Subtitle + CTA Row */}
        <div className="relative z-20 w-full lg:w-[64%] px-6 sm:px-10 lg:px-12 pb-10 sm:pb-12 lg:pb-14 pt-8 sm:pt-12 text-left">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-zinc-300 mb-3 sm:mb-4 font-medium">
            {t(
              "SOVEREIGN MIGRATION BLUEPRINTS • DR. MAHBOUBEH TAJEDDINI",
              "DIGITAL EXPERIENCES & SOVEREIGN MIGRATION THAT INSPIRE"
            )}
          </p>

          {/* 2-Line Condensed Metallic Headline (Exact half-size Persian font preserved) */}
          <h1 className="hero-display-text font-display font-bold uppercase select-none tracking-[-0.02em] leading-[0.95] mb-5 sm:mb-6">
            {language === "fa" ? (
              <>
                <span className="hero-line-1 block text-[19px] sm:text-[26px] lg:text-[31px] xl:text-[36px] leading-[1.15]">
                  طراحی مسیر
                </span>
                <span className="hero-line-2 block text-[19px] sm:text-[26px] lg:text-[31px] xl:text-[36px] leading-[1.15] whitespace-nowrap">
                  مهاجرت نخبگان
                </span>
              </>
            ) : (
              <>
                <span className="hero-line-1 block text-[34px] sm:text-[53px] md:text-[64px] lg:text-[72px]">
                  MIGRATION
                </span>
                <span className="hero-line-2 block text-[34px] sm:text-[53px] md:text-[64px] lg:text-[72px] whitespace-nowrap">
                  ARCHITECT
                </span>
              </>
            )}
          </h1>

          {/* Two-line Muted Subtitle Paragraph */}
          <p
            dir={dir}
            className="text-xs sm:text-[14px] text-zinc-200 max-w-[420px] leading-[1.65] mb-7 sm:mb-8 font-normal text-left"
          >
            {t(
              "مرکز تخصصی TAJ Global با نظارت مستقیم دکتر محبوبه تاج‌الدینی، مسیر مهاجرت نخبگان، پزشکان و پژوهشگران را با استراتژی دقیق، مستندسازی علمی و فناوری مهندسی می‌کند.",
              "We design elegant, high-performing sovereign migration portfolios with Dr. Mahboubeh Tajeddini that merge strategy, scientific evidence, and global impact."
            )}
          </p>

          {/* Bottom-Left CTA Row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <a
              href="#stories"
              className="av-rect-btn px-5 sm:px-6 py-3 sm:py-3.5 rounded-[3px] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] flex items-center gap-3.5 transition-transform hover:translate-y-[-1px]"
            >
              <span>{t("مشاهده پرونده‌های موفق", "VIEW MY WORK")}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>

            <a
              href="#audit"
              className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200 hover:text-white flex items-center gap-2.5 transition-colors py-2"
            >
              <span>{t("ارزیابی و رزومه علمی", "DOWNLOAD RESUME")}</span>
              <Download className="w-3.5 h-3.5 text-zinc-300" />
            </a>
          </div>
        </div>

        {/* Bottom-Right Unboxed Status Text */}
        <div className="hidden sm:block absolute bottom-8 lg:bottom-11 right-6 sm:right-10 z-30 text-right">
          <span className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
            {t("پذیرش پرونده‌های", "AVAILABLE FOR")}
          </span>
          <span className="block font-display text-2xl lg:text-[30px] font-bold uppercase tracking-[0.04em] text-white leading-[1.05] my-1">
            {t("نخبگان و پزشکان", "FREELANCE")}
          </span>
          <a
            href="#contact-cta"
            className="inline-flex items-center justify-end gap-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-zinc-200 hover:text-white transition-colors"
          >
            <span>{t("مشاوره تخصصی", "PROJECTS")}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* =========================================================
          PROMOTIONAL BANNERS (2 Small Banners below Hero/Slider)
      ========================================================= */}
      <div className="relative z-20 mb-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {PROMO_BANNERS.map((banner) => (
          <a
            key={banner.id}
            href={banner.href}
            target="_blank"
            rel="noopener noreferrer"
            id={banner.id}
            dir={dir}
            className="av-card rounded-xl px-5 py-3.5 flex items-center justify-between group hover:border-white/30 transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <banner.Icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-[13px] font-semibold text-white tracking-wide">
                  {t(banner.titleFa, banner.titleEn)}
                </h4>
                <p className="text-[10.5px] text-zinc-400 mt-0.5">
                  {t(banner.descFa, banner.descEn)}
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-zinc-300 group-hover:border-white group-hover:text-white transition shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        ))}
      </div>

      {/* =========================================================
          3. STATS BAR (Exact 4-Column Dark Rounded Panel with Dividers)
      ========================================================= */}
      <section className="relative z-20 mb-14">
        <div className="av-card rounded-xl py-7 px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center py-3 md:py-1 px-4"
              >
                <stat.Icon className="w-5 h-5 text-zinc-300 mb-2.5 stroke-[1.5]" />
                <span className="text-3xl sm:text-[38px] font-semibold text-white tracking-tight leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[9.5px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                  {t(stat.labelFa, stat.labelEn)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
