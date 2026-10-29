import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Compass,
  FlaskConical,
  Globe,
  HelpCircle,
  Layers,
  Microscope,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import {
  ALL_FERTILITY_PROGRAMS,
  DR_TAJALDINI_PROFILE,
  SCIENTIFIC_METHOD_PILLARS,
  WHY_TREATMENTS_FAIL,
} from "../fertilityInstituteData";
import {
  CellularGlassVisual,
  DnaHelixSculptureVisual,
  HormonalNetworkVisual,
} from "./LuxuryScientificVisuals";
import FertilityInnovationLab from "./FertilityInnovationLab";
import Timeline from "./Timeline";
import ScientistProfile from "./ScientistProfile";
import FAQ from "./FAQ";
import ContactCTA from "./ContactCTA";
import { FourPointStar, FourPointStarFilled } from "./ui/Icons";

export type InstituteViewMode =
  | "home"
  | "programs"
  | "scientific-method"
  | "fertility-journey"
  | "innovation-lab"
  | "faq"
  | "contact";

interface FertilityInstituteHomepageProps {
  activeView?: InstituteViewMode;
  onNavigate: (path: string) => void;
  showContactModal: boolean;
  onToggleContactModal: (show: boolean) => void;
  prefilledNotes: string;
  onBookConsultation: (contextTitle: string) => void;
}

const PROMO_BANNERS = [
  {
    id: "promo-banner-language",
    href: "https://la.tajglobal.ir/",
    Icon: Globe,
    titleFa: "دپارتمان زبان آکادمی تاج گلوبال",
    titleEn: "TAJ Global Language Academy Department",
    descFa:
      "آموزش تخصصی زبان انگلیسی و آمادگی آزمون‌های بین‌المللی کادر درمان و پژوهشگران",
    descEn:
      "Specialized academic & medical English coaching for clinicians and scholars",
  },
  {
    id: "promo-banner-research",
    href: "https://rd.tajglobal.ir/",
    Icon: Sparkles,
    titleFa: "پرتال سازمان پژوهش و فناوری تاج",
    titleEn: "TAJ Research & Technology Organization Portal",
    descFa:
      "سامانه یکپارچه پروژه‌های تحقیقاتی، کارآزمایی‌های بالینی و کلاب علمی نخبگان",
    descEn:
      "Unified registry for high-impact biomedical studies & translational research",
  },
];

const INSTITUTE_HERO_STATS = [
  {
    value: "90 Days",
    labelFa: "پنجره طلایی بهینه‌سازی فولیکولی و اسپرماتوژنز",
    labelEn: "FOLLICULAR & SPERM OPTIMIZATION WINDOW",
    Icon: FourPointStar,
  },
  {
    value: "WIPO & IFIA",
    labelFa: "ثبت اختراع جهانی و مدال طلای ژنو و سیلیکون‌ولی",
    labelEn: "GLOBAL PATENTS & GENEVA / SV GOLD MEDALS",
    Icon: Trophy,
  },
  {
    value: "6 Clinics",
    labelFa: "کلینیک‌های تخصصی آمادگی IVF، RIF، PCOS و آندرولوژی",
    labelEn: "SPECIALIZED FERTILITY OPTIMIZATION CLINICS",
    Icon: FlaskConical,
  },
  {
    value: "Gorgan • IR",
    labelFa: "گلستان - گرگان - نبش عدالت 24 | تلفن: 09133494512",
    labelEn: "GOLESTAN, GORGAN, CORNER OF EDALAT 24 | 09133494512",
    Icon: Users,
  },
];

const TOPIC_PORTAL_CARDS = [
  {
    path: "/programs",
    badge: "01 • CLINICS",
    titleFa: "۶ کلینیک تخصصی باروری",
    titleEn: "6 Specialized Clinics",
    descFa: "آمادگی IVF، شکست مکرر (RIF)، لانه‌گزینی، PCOS و آندرولوژی",
    descEn: "IVF Readiness, RIF, Implantation, PCOS & Male Fertility",
    Icon: FlaskConical,
  },
  {
    path: "/scientific-method",
    badge: "02 • METHOD",
    titleFa: "متد علمی و علل شکست IVF",
    titleEn: "Scientific Method & Root Causes",
    descFa: "بررسی ۵ علت پنهان شکست سیکل‌ها و متد ۳ ستونی ارزیابی و بهینه‌سازی",
    descEn: "5 root causes of cycle failure & 3-pillar physiology method",
    Icon: Layers,
  },
  {
    path: "/fertility-journey",
    badge: "03 • JOURNEY",
    titleFa: "مراحل ۵گانه سفر درمانی",
    titleEn: "5-Stage Fertility Journey",
    descFa: "نقشه راه گام‌به‌گام از رمزگشایی بیولوژیک تا پشتیبانی سیکل انتقال",
    descEn: "Step-by-step clinical roadmap across the 90-day biological window",
    Icon: Compass,
  },
  {
    path: "/innovation-lab",
    badge: "04 • RESEARCH",
    titleFa: "پژوهش، اختراعات و آزمایشگاه",
    titleEn: "Patents & Innovation Lab",
    descFa: "ثبت اختراعات WIPO، مدال‌های ژنو و سیلیکون‌ولی و شبیه‌ساز سلولی",
    descEn: "WIPO patents, Geneva gold medals & interactive cellular lab",
    Icon: Microscope,
  },
  {
    path: "/mahboubeh-tajaldini",
    badge: "05 • DIRECTOR",
    titleFa: "پروفایل دکتر محبوبه تاج‌الدینی",
    titleEn: "Dr. Mahboubeh Tajaldini",
    descFa: "بیوگرافی علمی، فلوشیپ بولونیا، مقالات، اختراعات و تیم تخصصی",
    descEn: "Scientific biography, Bologna fellowship, patents & executive team",
    Icon: UserCheck,
  },
  {
    path: "/faq",
    badge: "06 • FAQ",
    titleFa: "سوالات متداول بیماران",
    titleEn: "Patient FAQ & Guide",
    descFa: "پاسخ علمی به پرتکرارترین پرسش‌ها درباره زمان‌بندی و پروتکل‌ها",
    descEn: "Evidence-based answers on timelines, protocols & consultations",
    Icon: HelpCircle,
  },
  {
    path: "/blog-strategy",
    badge: "07 • KNOWLEDGE",
    titleFa: "بانک ۱۰۰ موضوع علمی وبلاگ",
    titleEn: "100 Scientific Blog Topics",
    descFa: "آرشیو موضوعات تخصصی سلامت تولیدمثل، اپی‌ژنتیک و تغذیه باروری",
    descEn: "Comprehensive reproductive health & IVF optimization library",
    Icon: BookOpen,
  },
  {
    path: "/contact",
    badge: "08 • BOOKING",
    titleFa: "نوبت‌دهی و ارتباط مستقیم (09133494512)",
    titleEn: "Book Consultation & Direct Contact",
    descFa: "گلستان - گرگان - نبش عدالت 24 | ایمیل: mtajodini@gmail.com",
    descEn: "Golestan, Gorgan, Corner of Edalat 24 | mtajodini@gmail.com",
    Icon: CalendarCheck,
  },
];

export default function FertilityInstituteHomepage({
  activeView = "home",
  onNavigate,
  showContactModal,
  onToggleContactModal,
  prefilledNotes,
  onBookConsultation,
}: FertilityInstituteHomepageProps) {
  const { language, dir, t } = useLanguage();
  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  // Sub-page top bar with breadcrumb back to homepage when opened as a dedicated menu route
  const renderDedicatedPageBanner = (
    kickerEn: string,
    titleFa: string,
    titleEn: string,
    subtitleFa: string,
    subtitleEn: string
  ) => (
    <div
      dir={dir}
      className="av-card rounded-2xl p-5 sm:p-7 lg:p-8 border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-5"
    >
      <div className="space-y-2 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onNavigate("/")}
            className="font-iransans px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-[11px] text-zinc-200 flex items-center gap-1.5 transition cursor-pointer"
          >
            <BackArrow className="w-3.5 h-3.5" />
            <span>{t("بازگشت به صفحه اصلی", "Back to Home")}</span>
          </button>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            {kickerEn}
          </span>
        </div>
        <h1 className="font-iransans text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight pt-1">
          {t(titleFa, titleEn)}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {t(subtitleFa, subtitleEn)}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
        <a
          href="tel:00989133494512"
          onClick={() => onBookConsultation(t(titleFa, titleEn))}
          className="font-iransans av-rect-btn px-5 py-3 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer"
        >
          <span>{t("نوبت‌دهی این بخش (09133494512)", "Book Consultation")}</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  // =====================================================================
  // DEDICATED VIEW 1: /programs (All 6 Specialized Clinics Directory)
  // =====================================================================
  if (activeView === "programs") {
    return (
      <div className="space-y-10 pb-8">
        {renderDedicatedPageBanner(
          "DEDICATED CLINICAL DIRECTORY • 6 PROGRAMS",
          "کلینیک و ۶ برنامه تخصصی بهینه‌سازی باروری و IVF",
          "Our 6 Core Fertility Optimization & Research Programs",
          "بر روی هر کلینیک کلیک کنید تا وارد صفحه اختصاصی ۱۰ بخشی و پروتکل‌های کامل آن شوید.",
          "Select any specialized clinic below to open its full 10-section scientific monograph and clinical protocol."
        )}

        <section id="core-programs" className="space-y-6" dir={dir}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-6">
            {ALL_FERTILITY_PROGRAMS.map((prog, idx) => (
              <div
                key={prog.id}
                onClick={() => onNavigate(prog.slug)}
                className="av-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/15 hover:border-white/40 transition-all group cursor-pointer space-y-5"
              >
                <div className="space-y-4">
                  <div className="h-36 sm:h-40 rounded-xl overflow-hidden border border-white/10 relative">
                    {prog.visualType === "cellular" && (
                      <CellularGlassVisual className="w-full h-full" />
                    )}
                    {prog.visualType === "dna" && (
                      <DnaHelixSculptureVisual className="w-full h-full" />
                    )}
                    {prog.visualType === "hormonal" && (
                      <HormonalNetworkVisual className="w-full h-full" />
                    )}
                    <div className="absolute top-2.5 inset-x-3 flex items-center justify-between">
                      <span className="text-[9.5px] font-mono px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-zinc-200 border border-white/15">
                        0{idx + 1} • {prog.slug}
                      </span>
                      <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">
                        {prog.hero.primaryStat}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                      {prog.code}
                    </span>
                    <h3 className="font-iransans text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 leading-snug mb-2">
                      {t(prog.hero.titleFa, prog.hero.titleEn)}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-[1.8]">
                      {t(prog.hero.subtitleFa, prog.hero.subtitleEn)}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-iransans text-xs text-zinc-200 group-hover:text-white font-semibold">
                    {t("ورود به صفحه اختصاصی کلینیک", "Open Dedicated Clinic Page")}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black flex items-center justify-center transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEDICATED VIEW 2: /scientific-method (Why Treatments Fail + 3 Pillars)
  // =====================================================================
  if (activeView === "scientific-method") {
    return (
      <div className="space-y-12 pb-8">
        {renderDedicatedPageBanner(
          "ROOT-CAUSE PHYSIOLOGY & 3-PILLAR METHOD",
          "متد علمی سه ستونی و رمزگشایی از علل شکست درمان‌های باروری",
          "Our Scientific Method & Why Fertility Treatments Fail",
          "بررسی دقیق متابولیک، ایمنی، عروقی و سلولی پیش از ورود به سیکل بعدی IVF به سرپرستی دکتر محبوبه تاج‌الدینی.",
          "Resolving metabolic, immunological, vascular, and chromatin bottlenecks before your next IVF cycle."
        )}

        {/* Why Fertility Treatments Sometimes Fail */}
        <section id="why-treatments-fail" className="space-y-6" dir={dir}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 block mb-1.5">
                PART 01 • ROOT-CAUSE REPRODUCTIVE PHYSIOLOGY
              </span>
              <h2 className="font-iransans text-lg sm:text-2xl font-bold text-white">
                {t(
                  "چرا درمان‌های باروری و سیکل‌های IVF گاهی با شکست مواجه می‌شوند؟",
                  "Why Fertility Treatments Sometimes Fail"
                )}
              </h2>
            </div>
            <button
              onClick={() => onNavigate("/ivf-failure-analysis")}
              className="font-iransans text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <span>
                {t(
                  "ورود به کلینیک بررسی شکست مکرر IVF",
                  "Explore Recurrent Failure Clinic"
                )}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 space-y-3.5">
              {WHY_TREATMENTS_FAIL.map((item) => (
                <div
                  key={item.code}
                  className="av-card rounded-xl p-5 border border-white/10 hover:border-white/25 transition space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-zinc-400">
                      {item.code}
                    </span>
                    <span className="text-[9.5px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-zinc-200">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-iransans text-sm sm:text-base font-bold text-white">
                    {t(item.titleFa, item.titleEn)}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-[1.85]">
                    {t(item.descFa, item.descEn)}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between av-card rounded-2xl p-6 border border-white/15 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 block">
                  CELLULAR MICROENVIRONMENT TELEMETRY
                </span>
                <h3 className="font-iransans text-base sm:text-lg font-bold text-white leading-snug">
                  {t(
                    "درمان ناباروری بدون آماده‌سازی بستر سلولی، مانند کاشتن بذر در خاکی بررسی‌نشده است.",
                    "Stimulating unprimed follicles or transferring embryos into an inflamed endometrium leaves outcomes to chance."
                  )}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t(
                    "در موسسه نوآوری باروری گرگان، ما به جای تحمیل دوزهای سنگین‌تر دارو، موانع متابولیک، التهابی، عروقی و کروماتینی را پیش از سیکل برطرف می‌کنیم.",
                    "At the Fertility Innovation Institute, we systematically resolve metabolic, inflammatory, vascular, and chromatin bottlenecks before your next cycle begins."
                  )}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10">
                <CellularGlassVisual className="w-full h-[250px]" />
              </div>

              <div className="av-card-inner rounded-xl p-4 space-y-2">
                <span className="font-iransans text-xs font-bold text-white block">
                  {t(
                    "راهکار علمی ما: قانون ۹۰ روزه بازسازی سلولی",
                    "THE 90-DAY PHYSIOLOGICAL ADVANTAGE"
                  )}
                </span>
                <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                  {t(
                    "بلوغ فولیکول و اسپرماتوژنز ۷۴ تا ۹۰ روز زمان می‌برد. بهینه‌سازی این پنجره طلایی، کیفیت رویان و پذیرش رحم را به شکل چشمگیری ارتقا می‌دهد.",
                    "Because folliculogenesis and spermatogenesis span 74 to 90 days, conditioning this window transforms gamete competence and uterine receptivity."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Pillar Scientific Method */}
        <section id="scientific-method" className="space-y-6" dir={dir}>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 block mb-1.5">
              PART 02 • THREE-PILLAR CLINICAL METHODOLOGY
            </span>
            <h2 className="font-iransans text-lg sm:text-2xl font-bold text-white">
              {t(
                "متد علمی سه ستونی ما: ارزیابی، بهینه‌سازی و پشتیبانی",
                "Our Scientific Method: ASSESS • OPTIMIZE • SUPPORT"
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCIENTIFIC_METHOD_PILLARS.map((pillar) => (
              <div
                key={pillar.pillarNumber}
                className="av-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/15 space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      {pillar.code}
                    </span>
                    <span className="text-2xl font-mono font-bold text-white">
                      {pillar.pillarNumber}
                    </span>
                  </div>
                  <div className="pt-1">
                    <span className="text-2xl sm:text-3xl font-display font-bold tracking-wider text-white block">
                      {pillar.titleEn}
                    </span>
                    <h3 className="font-iransans text-sm sm:text-base font-semibold text-zinc-200 mt-1">
                      {t(pillar.titleFa, pillar.subtitleEn)}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-[1.85]">
                    {t(pillar.descFa, pillar.descEn)}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <span className="font-iransans text-[11px] font-semibold text-zinc-300 block">
                    {t("خروجی‌های بالینی این مرحله:", "KEY CLINICAL DELIVERABLES:")}
                  </span>
                  {(t("fa", "en") === "fa"
                    ? pillar.deliverablesFa
                    : pillar.deliverablesEn
                  ).map((deliv, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11.5px] text-zinc-200 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEDICATED VIEW 3: /fertility-journey (5-Stage Visual Timeline)
  // =====================================================================
  if (activeView === "fertility-journey") {
    return (
      <div className="space-y-10 pb-8">
        {renderDedicatedPageBanner(
          "FIVE-STAGE CLINICAL ROADMAP",
          "نقشه راه ۵ مرحله‌ای سفر درمانی و بهینه‌سازی باروری",
          "The 5-Stage Fertility Optimization & IVF Journey",
          "مسیر گام‌به‌گام مراجعین از پایش ریشه‌ای بیومارکرها تا مهندسی پنجره ۹۰ روزه و پشتیبانی سیکل انتقال جنین.",
          "Your structured step-by-step clinical journey from root-cause biomarker auditing to IVF cycle execution."
        )}

        <Timeline />

        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEDICATED VIEW 4: /innovation-lab (Patents, Publications & Lab)
  // =====================================================================
  if (activeView === "innovation-lab") {
    return (
      <div className="space-y-10 pb-8">
        {renderDedicatedPageBanner(
          "WIPO PATENTS, GENEVA AWARDS & TELEMETRY LAB",
          "پژوهش، ثبت اختراعات جهانی (WIPO) و آزمایشگاه نوآوری باروری",
          "Research, Global Patents & Interactive Fertility Innovation Lab",
          "مرور دستاوردهای علمی بین‌المللی، مقالات پژوهشی و شبیه‌ساز تعاملی ریزومحیط سلولی دکتر محبوبه تاج‌الدینی.",
          "Explore international patents, peer-reviewed publications, and our interactive reproductive physiology lab."
        )}

        <section id="research-innovation" className="space-y-8" dir={dir}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3.5">
              {DR_TAJALDINI_PROFILE.scientificAchievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="av-card rounded-xl p-5 border border-white/15 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-white text-black">
                      {ach.metric}
                    </span>
                    <Award className="w-4 h-4 text-zinc-300" />
                  </div>
                  <h3 className="font-iransans text-xs sm:text-sm font-bold text-white">
                    {t(ach.titleFa, ach.titleEn)}
                  </h3>
                  <p className="text-[11.5px] text-zinc-300 leading-relaxed">
                    {t(ach.descFa, ach.descEn)}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7 av-card rounded-2xl p-6 sm:p-7 border border-white/15 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-iransans text-xs text-zinc-200 font-semibold">
                    {t(
                      "گزیده مقالات و طرح‌های پژوهشی (PRP • RIF • MICROENVIRONMENT)",
                      "SELECTED TRANSLATIONAL PUBLICATIONS & RESEARCH PROJECTS"
                    )}
                  </span>
                  <Microscope className="w-5 h-5 text-zinc-300" />
                </div>

                <div className="space-y-3">
                  {DR_TAJALDINI_PROFILE.publications.map((pub, idx) => (
                    <div
                      key={idx}
                      className="av-card-inner rounded-xl p-4 border border-white/10 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-200">
                          {pub.focusTag}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {pub.journal}
                        </span>
                      </div>
                      <h4 className="font-iransans text-xs sm:text-[13px] font-semibold text-white leading-relaxed">
                        {t(pub.titleFa, pub.titleEn)}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate("/fertility-research")}
                  className="font-iransans text-xs text-white hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {t(
                      "مشاهده مونوگراف کامل مرکز پژوهش (/fertility-research)",
                      "Open Full Research Monograph (/fertility-research)"
                    )}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate("/mahboubeh-tajaldini")}
                  className="font-iransans text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <span>
                    {t("پروفایل علمی دکتر تاج‌الدینی", "Dr. Tajaldini Profile")}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <FertilityInnovationLab
            onExploreMonograph={() => onNavigate("/fertility-research")}
            onRequestConsultation={onBookConsultation}
          />
        </section>

        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEDICATED VIEW 5: /faq (Patient FAQ & Knowledge Hub Links)
  // =====================================================================
  if (activeView === "faq") {
    return (
      <div className="space-y-10 pb-8">
        {renderDedicatedPageBanner(
          "PATIENT KNOWLEDGE BASE & FAQ",
          "پاسخ علمی به سوالات متداول مراجعین باروری و IVF",
          "Frequently Asked Questions on Fertility Optimization & IVF",
          "پاسخ‌های شفاف درباره مدت‌زمان پروتکل‌های ۹۰ روزه، نحوه هماهنگی با مراکز IVF و جلسات حضوری یا آنلاین.",
          "Clear scientific answers on 90-day preparation timelines, IVF center coordination, and consultations."
        )}

        <FAQ showStrategyHubLinks={true} onNavigate={onNavigate} />

        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEDICATED VIEW 6: /contact (Consultation Booking & Direct Channels)
  // =====================================================================
  if (activeView === "contact") {
    return (
      <div className="space-y-10 pb-8">
        {renderDedicatedPageBanner(
          "CONSULTATION & CASE AUDIT BOOKING",
          "نوبت‌دهی تخصصی و ارتباط مستقیم با موسسه نوآوری باروری",
          "Book Your Fertility Optimization Consultation & Case Audit",
          "آدرس: گلستان - گرگان - نبش عدالت 24 | تلفن مستقیم و واتساپ/تلگرام: 09133494512 (00989133494512) | ایمیل: mtajodini@gmail.com",
          "Address: Golestan, Gorgan, Corner of Edalat 24 | Direct Call, WhatsApp & Telegram: 00989133494512 | Email: mtajodini@gmail.com"
        )}

        <ContactCTA
          showModal={true}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      </div>
    );
  }

  // =====================================================================
  // DEFAULT VIEW: CONCISE, EXECUTIVE HOMEPAGE ("/")
  // =====================================================================
  return (
    <div className="space-y-10 sm:space-y-14 pb-6">
      {/* =================================================================
          SECTION 01: HERO SECTION (Full-Width Banner Background + Promo Banners + Stats)
      ================================================================= */}
      <div>
        <section
          dir="ltr"
          className="relative mb-4 sm:mb-6 rounded-2xl overflow-hidden min-h-[440px] sm:min-h-[540px] lg:min-h-[620px] 2xl:min-h-[680px] flex items-end border border-white/[0.08]"
        >
          {/* Full-Width Hero Banner Background Image */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
            <img
              src="https://panonama.ir/wp-content/uploads/2026/10/Gemini_Generated_Image_fqlx01fqlx01fqlx-scaled.jpg"
              alt={t(
                "دکتر محبوبه تاج‌الدینی - موسسه نوآوری باروری",
                "Dr. Mahboubeh Tajaldini — Fertility Innovation Institute"
              )}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101216]/90 via-[#101216]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101216] via-[#101216]/50 to-transparent" />
          </div>

          {/* Delicate Orbital Arc on Right Side + 4-Point Sparkle Star */}
          <div className="hidden sm:block absolute right-[2%] lg:right-[3%] top-[7%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[475px] lg:h-[475px] rounded-full border border-white/[0.15] hero-arc-mask pointer-events-none z-10">
            <div className="absolute bottom-[24%] right-[8.5%] text-zinc-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              <FourPointStarFilled className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </div>
          </div>

          {/* Left Column: Kicker + Metallic Display Title + Headline/Subheadline + 2 CTAs */}
          <div className="relative z-20 w-full lg:w-[64%] px-5 sm:px-9 lg:px-12 pb-7 sm:pb-11 lg:pb-14 pt-8 sm:pt-12 text-left">
            <p className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.22em] text-zinc-300 mb-2.5 sm:mb-3 font-medium">
              {t(
                "FERTILITY INNOVATION INSTITUTE • GORGAN, IRAN • DR. MAHBOUBEH TAJALDINI",
                "FERTILITY INNOVATION INSTITUTE • CENTER FOR REPRODUCTIVE HEALTH OPTIMIZATION"
              )}
            </p>

            {/* Preserved Half-Size Persian / Luxury Condensed Metallic Display Title */}
            <div className="hero-display-text font-display font-bold uppercase select-none tracking-[-0.02em] leading-[0.95] mb-3.5 sm:mb-4">
              {language === "fa" ? (
                <>
                  <span className="hero-line-1 block text-[18px] sm:text-[25px] lg:text-[31px] xl:text-[36px] leading-[1.2]">
                    موسسه نوآوری باروری
                  </span>
                  <span className="hero-line-2 block text-[18px] sm:text-[25px] lg:text-[31px] xl:text-[36px] leading-[1.2]">
                    و بهینه‌سازی موفقیت IVF
                  </span>
                </>
              ) : (
                <>
                  <span className="hero-line-1 block text-[30px] sm:text-[48px] md:text-[58px] lg:text-[68px]">
                    FERTILITY
                  </span>
                  <span className="hero-line-2 block text-[30px] sm:text-[48px] md:text-[58px] lg:text-[68px]">
                    INNOVATION
                  </span>
                </>
              )}
            </div>

            {/* Mandatory Headline & Subheadline */}
            <div dir={dir} className="max-w-[540px] space-y-2 mb-5 sm:mb-7">
              <h1 className="font-iransans text-sm sm:text-lg lg:text-xl font-bold text-white leading-snug">
                {t(
                  "مسیر باروری شما شایسته رویکردی فراتر از تکرار یک سیکل درمانی دیگر است.",
                  "Your Fertility Journey Deserves More Than Another Treatment Cycle."
                )}
              </h1>
              <p className="text-xs sm:text-[13.5px] text-zinc-200 leading-[1.75]">
                {t(
                  "رویکردی علمی، داده‌محور و فیزیولوژیک به بهینه‌سازی باروری، سلامت تولیدمثل و موفقیت IVF به سرپرستی دکتر محبوبه تاج‌الدینی در گرگان.",
                  "A scientific approach to fertility optimization, reproductive health and IVF success—combining clinical medicine, reproductive physiology, research, and data science."
                )}
              </p>
            </div>

            {/* Two Primary CTAs: Book Consultation (connects via 00989133494512) + Explore Programs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <a
                href="tel:00989133494512"
                onClick={() => onNavigate("/contact")}
                className="font-iransans av-rect-btn px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-[4px] text-[11px] sm:text-xs font-bold flex items-center gap-2.5 transition-transform hover:translate-y-[-1px] cursor-pointer"
              >
                <span>{t("نوبت‌دهی و مشاوره (09133494512)", "BOOK CONSULTATION")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </a>

              <button
                onClick={() => onNavigate("/programs")}
                className="font-iransans px-4 sm:px-5 py-2.5 sm:py-3 rounded-[4px] border border-white/25 bg-black/35 backdrop-blur-sm hover:border-white text-[11px] sm:text-xs font-semibold text-zinc-100 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t("مشاهده ۶ کلینیک تخصصی", "EXPLORE 6 CLINICS")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
              </button>
            </div>
          </div>

          {/* Bottom-Right Unboxed Status Text */}
          <div className="hidden md:block absolute bottom-8 lg:bottom-11 right-6 sm:right-10 z-30 text-right">
            <span className="block text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-zinc-300 font-medium">
              {t("مدیر علمی و پژوهشی", "SCIENTIFIC DIRECTOR")}
            </span>
            <span className="font-iransans block text-lg lg:text-[22px] font-bold text-white leading-[1.15] my-1">
              {t("دکتر محبوبه تاج‌الدینی", "DR. TAJALDINI")}
            </span>
            <button
              onClick={() => onNavigate("/mahboubeh-tajaldini")}
              className="font-iransans inline-flex items-center justify-end gap-1.5 text-[10.5px] text-zinc-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>{t("پروفایل علمی و اختراعات", "SCIENTIFIC PROFILE")}</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </section>

        {/* 2 Small Promotional Banners Below Hero */}
        <div className="relative z-20 mb-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {PROMO_BANNERS.map((banner) => (
            <a
              key={banner.id}
              href={banner.href}
              target="_blank"
              rel="noopener noreferrer"
              id={banner.id}
              dir={dir}
              className="av-card rounded-xl px-4 sm:px-5 py-3.5 flex items-center justify-between group hover:border-white/30 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                  <banner.Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-iransans text-xs sm:text-[13px] font-semibold text-white">
                    {t(banner.titleFa, banner.titleEn)}
                  </h3>
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

        {/* 4-Column Dark Rounded Stats Bar */}
        <section className="relative z-20">
          <div className="av-card rounded-xl py-3.5 sm:py-4 md:py-5 lg:py-6 px-2.5 sm:px-5 lg:px-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-0 divide-y md:divide-y-0 md:divide-x md:rtl:divide-x-reverse divide-white/10">
              {INSTITUTE_HERO_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center py-2.5 sm:py-3 md:py-1.5 px-2 sm:px-3 lg:px-4"
                >
                  <stat.Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 text-emerald-400/90 mb-1.5 stroke-[1.5]" />
                  <span
                    dir="ltr"
                    className="text-[11px] sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] font-semibold text-white tracking-wider uppercase leading-snug mb-1 font-mono bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-md"
                  >
                    {stat.value}
                  </span>
                  <span className="font-iransans text-[10px] sm:text-[11px] md:text-[11.5px] lg:text-xs text-zinc-300 font-medium leading-relaxed max-w-[220px]">
                    {t(stat.labelFa, stat.labelEn)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* =================================================================
          SECTION 02: INTERACTIVE APP-STYLE PORTAL LAUNCHER (Opens Each Topic in a Dedicated Page)
      ================================================================= */}
      <section className="space-y-4 sm:space-y-5" dir={dir}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              INSTITUTE NAVIGATION PORTAL • DEDICATED PAGES
            </span>
            <h2 className="font-iransans text-lg sm:text-2xl lg:text-3xl font-bold text-white">
              {t(
                "دسترسی سریع به بخش‌ها و صفحات تخصصی موسسه",
                "Quick Access to Dedicated Institute Pages"
              )}
            </h2>
          </div>
          <span className="font-iransans text-xs text-zinc-400">
            {t(
              "با کلیک روی هر موضوع، صفحه اختصاصی آن باز می‌شود ↗",
              "Click any topic below to open its dedicated page ↗"
            )}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 2xl:gap-5">
          {TOPIC_PORTAL_CARDS.map((card) => (
            <button
              key={card.path}
              onClick={() => onNavigate(card.path)}
              className="av-card rounded-2xl p-4 sm:p-5 text-start flex flex-col justify-between border border-white/10 hover:border-white/35 transition-all group cursor-pointer space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-zinc-200 group-hover:bg-white group-hover:text-black transition-colors">
                    <card.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-iransans text-xs sm:text-sm lg:text-[15px] font-bold text-white group-hover:text-zinc-100 leading-snug">
                  {t(card.titleFa, card.titleEn)}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {t(card.descFa, card.descEn)}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-300 group-hover:text-white">
                <span className="font-iransans font-medium">
                  {t("ورود به صفحه", "Open Page")}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 03: COMPACT 6 CORE SPECIALIZED CLINICS SHOWCASE
      ================================================================= */}
      <section id="core-programs" className="space-y-5" dir={dir}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
              SIX SPECIALIZED CLINICAL PROGRAMS
            </span>
            <h2 className="font-iransans text-lg sm:text-2xl lg:text-3xl font-bold text-white">
              {t(
                "کلینیک و ۶ برنامه تخصصی بهینه‌سازی باروری و IVF",
                "Our 6 Core Fertility Optimization Clinics"
              )}
            </h2>
          </div>
          <button
            onClick={() => onNavigate("/programs")}
            className="font-iransans text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <span>{t("مشاهده صفحه جامع کلینیک‌ها", "View All Clinics Page")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {ALL_FERTILITY_PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              onClick={() => onNavigate(prog.slug)}
              className="av-card rounded-2xl p-5 flex flex-col justify-between border border-white/15 hover:border-white/40 transition-all group cursor-pointer space-y-4"
            >
              <div className="space-y-3.5">
                <div className="h-28 sm:h-32 rounded-xl overflow-hidden border border-white/10 relative">
                  {prog.visualType === "cellular" && (
                    <CellularGlassVisual className="w-full h-full" />
                  )}
                  {prog.visualType === "dna" && (
                    <DnaHelixSculptureVisual className="w-full h-full" />
                  )}
                  {prog.visualType === "hormonal" && (
                    <HormonalNetworkVisual className="w-full h-full" />
                  )}
                  <div className="absolute top-2 inset-x-2.5 flex items-center justify-between">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-zinc-200 border border-white/15">
                      0{idx + 1} • {prog.slug}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white text-black font-bold">
                      {prog.hero.primaryStat}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-iransans text-sm sm:text-base font-bold text-white group-hover:text-zinc-100 leading-snug mb-1.5">
                    {t(prog.hero.titleFa, prog.hero.titleEn)}
                  </h3>
                  <p className="text-[11.5px] text-zinc-400 leading-[1.75] line-clamp-2">
                    {t(prog.hero.subtitleFa, prog.hero.subtitleEn)}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-iransans text-[11px] text-zinc-200 group-hover:text-white font-semibold">
                  {t("مشاهده صفحه اختصاصی کلینیک", "Open Dedicated Page")}
                </span>
                <div className="w-7 h-7 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black flex items-center justify-center transition">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================================================================
          SECTION 04: EXECUTIVE SPOTLIGHT FOR DR. MAHBOUBEH TAJALDINI
      ================================================================= */}
      <ScientistProfile
        mode="spotlight"
        onNavigate={onNavigate}
        onBookConsultation={onBookConsultation}
      />

      {/* Modal-only Contact Form when triggered from Header / Spotlight on Homepage */}
      {showContactModal && (
        <ContactCTA
          showModal={showContactModal}
          onToggleModal={onToggleContactModal}
          prefilledNotes={prefilledNotes}
        />
      )}
    </div>
  );
}

