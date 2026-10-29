import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import {
  CellularGlassVisual,
  DnaHelixSculptureVisual,
  HormonalNetworkVisual,
} from "./LuxuryScientificVisuals";
import ServiceCard from "./ServiceCard";
import {
  Microscope,
  Sparkles,
  Activity,
  Dna,
  ShieldCheck,
  ArrowUpRight,
  Cpu,
  Layers,
} from "lucide-react";

interface FertilityInnovationLabProps {
  onExploreMonograph: (programId: string) => void;
  onRequestConsultation: (topic: string) => void;
}

interface InnovationModule {
  id: string;
  programLink: string;
  code: string;
  visual: "cellular" | "dna" | "hormonal";
  tabFa: string;
  tabEn: string;
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  telemetry: {
    labelFa: string;
    labelEn: string;
    value: string;
    delta: string;
  }[];
  protocols: {
    badge: string;
    titleFa: string;
    titleEn: string;
    bodyFa: string;
    bodyEn: string;
    footer: string;
  }[];
}

const INNOVATION_MODULES: InnovationModule[] = [
  {
    id: "ivf-morphokinetics",
    programLink: "gti-au",
    code: "LAB MODULE 01 // ADVANCED IVF & EMBRYO MORPHOKINETICS",
    visual: "cellular",
    tabFa: "بهینه‌سازی IVF و زیست‌فناوری جنین",
    tabEn: "Advanced IVF & Embryo Intelligence",
    titleFa: "مهندسی ریزمحیط سلولی، مورفوکینتیک بلاستوسیست و پشتیبانی پیشرفته IVF",
    titleEn: "Blastocyst Morphokinetic Intelligence & Advanced IVF Cellular Support",
    subtitleFa:
      "تلفیق امبریولوژی محاسباتی، پایش پیوسته تقسیمات سلولی (Time-Lapse Imaging) و بهینه‌سازی متابولیک میتوکندری تخمک تحت نظارت دکتر محبوبه تاج‌الدینی.",
    subtitleEn:
      "Integrating computational embryology, continuous time-lapse cleavage telemetry, and oocyte mitochondrial ATP optimization under Dr. Mahboubeh Tajeddini.",
    descriptionFa:
      "برخلاف کلینیک‌های سنتی که بر پروتکل‌های یکسان و استاندارد تکیه می‌کنند، انستیتو نوآوری باروری و سلامت تولیدمثل ما به هر سیکل IVF به چشم یک «سیستم بیولوژیک دقیق» می‌نگرد. ما با تحلیل کینتیک تقسیم سلولی (از مرحله همجوشی پرونوکلئوس‌ها تا تشکیل بلاستوسیست روز پنجم)، بررسی پتانسیل غشای میتوکندری و غربالگری غیرتهاجمی ژنتیکی محیط کشت (niPGT-A)، بالاترین شانس لانه گزینی موفق و تولد زنده سالم را مهندسی می‌کنیم.",
    descriptionEn:
      "Unlike conventional clinics bound to standardized protocols, our Fertility Innovation Institute treats every reproductive cycle as a precision biological system. By analyzing cleavage-stage morphokinetics (from pronuclear syngamy to Day-5 blastocyst expansion), calibrating oocyte mitochondrial bioenergetics, and deploying non-invasive spent-media genomic screening (niPGT-A), we engineer superior implantation and live-birth trajectories.",
    telemetry: [
      {
        labelFa: "شاخص یکپارچگی بلاستوسیست (Euploid Rate)",
        labelEn: "EUPLOID BLASTOCYST OPTIMIZATION",
        value: "94.2%",
        delta: "+28% vs Standard",
      },
      {
        labelFa: "دقت پنجره لانه‌گزینی آندومتر (ERA Sync)",
        labelEn: "ENDOMETRIAL RECEPTIVITY SYNC",
        value: "99.1%",
        delta: "Transcriptomic",
      },
      {
        labelFa: "پایش مورفوکینتیک ۲۴ ساعته",
        labelEn: "TIME-LAPSE CLEAVAGE TELEMETRY",
        value: "0.1 μm",
        delta: "Optical Precision",
      },
      {
        labelFa: "کاهش استرس اکسیداتیو فولیکولی",
        labelEn: "FOLLICULAR ROS REDUCTION",
        value: "-64%",
        delta: "CoQ10 / NAD+ Axis",
      },
    ],
    protocols: [
      {
        badge: "PROTOCOL 01 // OOCYTE BIOENERGETICS",
        titleFa: "بازسازی بیوانرژتیک میتوکندری و کیفیت سیتوپلاسمی تخمک",
        titleEn: "Oocyte Mitochondrial Bioenergetics & Cytoplasmic Maturation",
        bodyFa:
          "طراحی پروتکل‌های ۹۰ روزه پیش از پانکچر شامل تنظیم مسیرهای سیگنالینگ Sirtuin/NAD+، کاهش رادیکال‌های آزاد مایع فولیکولی و بهینه‌سازی دوک تقسیم میوزی برای کاهش آنوپلوئیدی‌های کروموزومی.",
        bodyEn:
          "90-day pre-retrieval cellular priming targeting Sirtuin/NAD+ pathways, follicular fluid antioxidant buffering, and meiotic spindle stabilization to minimize chromosomal nondisjunction.",
        footer: "90-DAY FOLLICULAR PRIMING • ATP SYNTHESIS ELEVATION",
      },
      {
        badge: "PROTOCOL 02 // EMBRYO TELEMETRY",
        titleFa: "پایش هوش مصنوعی مورفوکینتیک جنین و غربالگری niPGT-A",
        titleEn: "AI-Assisted Morphokinetic Grading & Non-Invasive PGT-A",
        bodyFa:
          "ارزیابی دقیق زمان‌بندی تقسیمات سلولی (t2, t3, t5, tB) و تحلیل DNA آزاد جنینی در محیط کشت بدون نیاز به بیوپسی تهاجمی تروفواکتودرم در موارد حساس.",
        bodyEn:
          "Precision tracking of cleavage intervals (t2, t3, t5, tB) combined with cell-free embryonic DNA profiling in spent culture media to preserve trophectoderm integrity.",
        footer: "NON-INVASIVE GENOMIC GRADING • ZERO-TRAUMA SELECTION",
      },
      {
        badge: "PROTOCOL 03 // ENDOMETRIAL TRANSCRIPTOMICS",
        titleFa: "همگام‌سازی ترنسکریپتومیک پنجره پذیرش آندومتر (WOI)",
        titleEn: "Transcriptomic Window of Implantation (WOI) Synchronization",
        bodyFa:
          "نقشه‌برداری بیان ژن‌های پذیرش آندومتر، تنظیم ایمونولوژیک سلول‌های uNK (Natural Killer رحمی) و شخصی‌سازی ساعت دقیق انتقال جنین (Personalized Embryo Transfer).",
        bodyEn:
          "Gene-expression profiling of endometrial receptivity, uterine Natural Killer (uNK) immunomodulation, and hour-precise Personalized Embryo Transfer (pET) scheduling.",
        footer: "PERSONALIZED EMBRYO TRANSFER • IMMUNE TOLERANCE MATRIX",
      },
    ],
  },
  {
    id: "endocrine-optimization",
    programLink: "amc-au",
    code: "LAB MODULE 02 // REPRODUCTIVE ENDOCRINOLOGY & HORMONE NETWORKS",
    visual: "hormonal",
    tabFa: "تنظیم شبکه‌های هورمونی و ذخیره تخمدان",
    tabEn: "Endocrine & Ovarian Reserve Optimization",
    titleFa: "کالیبراسیون محور هیپوتالاموس-هیپوفیز-تخمدان (HPO) و بهینه‌سازی ذخیره فولیکولی",
    titleEn: "Hypothalamic-Pituitary-Ovarian (HPO) Axis Calibration & Follicular Recruitment",
    subtitleFa:
      "پروتکل‌های اختصاصی برای ذخیره تخمدانی پایین (DOR)، سندرم تخمدان پلی‌کیستیک مقاوم (PCOS) و نارسایی زودرس تخمدان با رویکرد پزشکی دقیق.",
    subtitleEn:
      "Precision endocrine engineering for Diminished Ovarian Reserve (DOR), refractory PCOS phenotypes, and luteal-phase neuroendocrine synchronization.",
    descriptionFa:
      "باروری بهینه محصول هماهنگی میلی‌ثانیه‌ای میان شبکه‌های هورمونی، گیرنده‌های سلولی گرانولوزا و متابولیسم سیستمیک است. در این ماژول، ما به جای تجویز دوزهای سنگین و غیراختصاصی گنادوتروپین‌ها که منجر به افت کیفیت تخمک یا هایپراستیمولاسیون (OHSS) می‌شوند، پروفایل اندوکرین و متابولیک هر مراجع را در سطح گیرنده‌های FSHR/LHR، حساسیت به انسولین، محور تیروئید-پرولاکتین و آندروژن‌های درون‌فولیکولی کالیبره می‌کنیم.",
    descriptionEn:
      "Optimal fertility emerges from millisecond synchronization across neuroendocrine cascades, granulosa cell receptor density, and systemic metabolic signaling. Rather than administering blunt, high-dose gonadotropin regimens that compromise oocyte competence, we calibrate FSHR/LHR receptor sensitivity, insulin-IGF1 signaling, thyroid-prolactin homeostasis, and intra-follicular androgen priming.",
    telemetry: [
      {
        labelFa: "بهبود پاسخ فولیکولی در ذخیره پایین (DOR)",
        labelEn: "DOR FOLLICULAR RECRUITMENT YIELD",
        value: "+42%",
        delta: "Dual-Stim & Priming",
      },
      {
        labelFa: "تعادل متابولیک و حساسیت انسولینی در PCOS",
        labelEn: "PCOS METABOLIC HOMEOSTASIS",
        value: "96.4%",
        delta: "HOMA-IR Calibrated",
      },
      {
        labelFa: "کنترل ریسک تحریک بیش از حد (OHSS)",
        labelEn: "ZERO-SEVERITY OHSS PROTOCOL",
        value: "99.8%",
        delta: "GnRH Agonist Trigger",
      },
      {
        labelFa: "پایش بیومارکرهای اندوکرین و ایمنی",
        labelEn: "PRECISION BIOMARKER PANELS",
        value: "48+",
        delta: "Multi-Axis Assay",
      },
    ],
    protocols: [
      {
        badge: "PROTOCOL 01 // DOR & POSEIDON COHORTS",
        titleFa: "پروتکل DuoStim (تحریک دوگانه فولیکولار-لوتئال) و پرایمینگ آندروژنی",
        titleEn: "Follicular-Luteal DuoStim & Intra-Ovarian Androgen Priming",
        bodyFa:
          "بهره‌گیری از امواج چندگانه فولیکول‌زایی در یک سیکل ماهانه برای متقاضیان گروه POSEIDON 3 & 4 و افزایش بیان گیرنده‌های FSH بر سطح فولیکول‌های پره‌آنترال.",
        bodyEn:
          "Harnessing multiple waves of folliculogenesis within a single menstrual cycle for POSEIDON Group 3 & 4 patients while upregulating pre-antral FSH receptor density.",
        footer: "POSEIDON STRATIFICATION • DOUBLE OOCYTE ACCUMULATION",
      },
      {
        badge: "PROTOCOL 02 // METABOLIC-ENDOCRINE AXIS",
        titleFa: "مهندسی معکوس مقاومت به انسولین و التهاب مزمن در فنوتیپ‌های PCOS",
        titleEn: "Reversing Hyperinsulinemic Androgenism in PCOS Phenotypes",
        bodyFa:
          "تنظیم مسیر سیگنالینگ اینوزیتول-فسفوگلیکان، کاهش استرس شبکه آندوپلاسمی در سلول‌های تکا و بازیابی تخمک‌گذاری فیزیولوژیک یا بلوغ آزمایشگاهی تخمک (IVM).",
        bodyEn:
          "Modulating inositol-phosphoglycan signaling, resolving theca-cell endoplasmic reticulum stress, and restoring high-competence oocyte maturation.",
        footer: "MYO/D-CHIRO INOSITOL RATIO • ZERO-OHSS MATURATION",
      },
      {
        badge: "PROTOCOL 03 // NEUROENDOCRINE LUTEAL SUPPORT",
        titleFa: "شخصی‌سازی فاز لوتئال و پروفایل فارماکوکینتیک پروژسترون",
        titleEn: "Pharmacokinetic Luteal Phase Support & Progesterone Profiling",
        bodyFa:
          "پایش سطح سرمی و بافتی پروژسترون در روز انتقال جنین و تنظیم دقیق دوز پشتیبانی لوتئال برای جلوگیری از سقط‌های زودهنگام ناشی از نارسایی جسم زرد.",
        bodyEn:
          "Real-time serum and tissue progesterone pharmacokinetic tracking on embryo transfer day to eliminate sub-clinical luteal phase deficiency.",
        footer: "SERUM P4 THRESHOLD CALIBRATION • LUTEAL RESCUE",
      },
    ],
  },
  {
    id: "genomic-reproductive-science",
    programLink: "eb1a-us",
    code: "LAB MODULE 03 // REPRODUCTIVE GENOMICS, EPIGENETICS & CHROMATIN",
    visual: "dna",
    tabFa: "ژنومیک تولیدمثل و سلامت اپی‌ژنتیک",
    tabEn: "Reproductive Genomics & Epigenetics",
    titleFa: "معماری ژنومیک تولیدمثل، یکپارچگی کروماتین گامت و غربالگری بیماری‌های تک‌ژنی",
    titleEn: "Reproductive Genomics, Sperm Chromatin Integrity & Epigenetic Longevity",
    subtitleFa:
      "تحلیل شکست DNA اسپرم (SDF)، غربالگری ناقلین ژنتیکی با توالی‌یابی نسل جدید (NGS) و پیشگیری از انتقال اختلالات وراثتی به نسل بعد.",
    subtitleEn:
      "Next-Generation Sequencing (NGS) carrier screening, sperm DNA fragmentation remediation, and transgenerational epigenetic optimization.",
    descriptionFa:
      "نیمی از پتانسیل تکاملی جنین پس از روز سوم لقاح، مستقیماً به فعال‌سازی ژنوم پدری و سلامت کروماتین اسپرم وابسته است. در آزمایشگاه ژنومیک و اپی‌ژنتیک باروری ما، شکست‌های تک‌رشته‌ای و دورشته‌ای DNA اسپرم، متیلاسیون هیستون‌ها، کاریوتایپ با وضوح بالا و پنل‌های ۵۰۰+ ژنی ناقلین (Expanded Carrier Screening) به همراه تشخیص ژنتیکی پیش از لانه‌گزینی (PGT-M / PGT-SR) با دقت مولکولی بررسی و بهینه‌سازی می‌شوند.",
    descriptionEn:
      "Fifty percent of embryonic developmental competence beyond Day-3 genomic activation depends directly on paternal chromatin integrity and epigenetic methylation. Our Reproductive Genomics suite integrates double-strand Sperm DNA Fragmentation (SDF) assays, 500+ gene Expanded Carrier Screening (ECS), and high-resolution PGT-M / PGT-SR molecular diagnostics.",
    telemetry: [
      {
        labelFa: "کاهش شاخص قطعه قطعه شدن DNA (DFI)",
        labelEn: "SPERM DNA FRAGMENTATION REDUCTION",
        value: "< 12%",
        delta: "Microfluidic Sorting",
      },
      {
        labelFa: "رزولوشن توالی‌یابی ژنومی نسل جدید",
        labelEn: "NGS GENOMIC SCREENING COVERAGE",
        value: "99.9%",
        delta: "PGT-A / PGT-M / PGT-SR",
      },
      {
        labelFa: "غربالگری جامع ژن‌های مغلوب وراثتی",
        labelEn: "EXPANDED CARRIER PANEL (ECS)",
        value: "600+",
        delta: "Monogenic Loci",
      },
      {
        labelFa: "مقالات Q1 منتشرشده در واحد پژوهش",
        labelEn: "Q1 REPRODUCTIVE SCIENCE PAPERS",
        value: "85+",
        delta: "PubMed / Clarivate",
      },
    ],
    protocols: [
      {
        badge: "PROTOCOL 01 // CHROMATIN & MICROFLUIDICS",
        titleFa: "جداسازی میکروفلوئیدیک گامت و اصلاح شکست دورشته‌ای DNA (dsDNA)",
        titleEn: "Microfluidic Gamete Selection & Double-Strand DNA Repair",
        bodyFa:
          "استفاده از تراشه‌های میکروفلوئیدیک زیست‌تقلید (Biomimetic Microfluidics) بدون سانتریفیوژ برای انتخاب گامت‌های دارای کروماتین سالم و مورفولوژی فیزیولوژیک در ICSI / PICSI.",
        bodyEn:
          "Deploying centrifugation-free biomimetic microfluidic chips to isolate spermatozoa with intact chromatin packaging and zero oxidative DNA nicking for ICSI/PICSI.",
        footer: "CENTRIFUGATION-FREE SORTING • MINIMAL ROS DAMAGE",
      },
      {
        badge: "PROTOCOL 02 // PGT-M & PGT-SR ARCHITECTURE",
        titleFa: "طراحی پروب‌های اختصاصی PGT-M برای بیماری‌های نادر ژنتیکی خانواده",
        titleEn: "Custom Karyomapping & PGT-M Probe Design for Hereditary Conditions",
        bodyFa:
          "مهندسی نقشه هاپلوتایپ خانوادگی (Karyomapping) برای زوج‌های ناقل بیماری‌های تک‌ژنی یا جابه‌جایی‌های کروموزومی متوازن (Balanced Translocations) جهت تضمین سلامت ژنتیکی فرزند.",
        bodyEn:
          "Engineering custom family haplotype maps (Karyomapping) for couples carrying monogenic mutations or balanced chromosomal translocations to eradicate hereditary transmission.",
        footer: "SINGLE-CELL HAPLOTYPING • 99.9% DIAGNOSTIC FIDELITY",
      },
      {
        badge: "PROTOCOL 03 // TRANSLATIONAL R&D FELLOWSHIPS",
        titleFa: "همکاری‌های پژوهشی بین‌المللی و فلوشیپ‌های جنین‌شناسی و ژنتیک تولیدمثل",
        titleEn: "International Reproductive Science R&D & Clinical Fellowships",
        bodyFa:
          "امکان مشارکت پزشکان، جنین‌شناسان و متخصصان ژنتیک در پروژه‌های مشترک پرتال سازمان پژوهش و فناوری تاج و انتقال دانش به مراکز آکادمیک استرالیا، آمریکا و بریتانیا.",
        bodyEn:
          "Connecting reproductive endocrinologists, embryologists, and clinical geneticists with TAJ Research Portal consortia and tier-1 international fellowships.",
        footer: "SREP™ & PAP™ INTEGRATED • GLOBAL ACADEMIC MOBILITY",
      },
    ],
  },
];

export default function FertilityInnovationLab({
  onExploreMonograph,
  onRequestConsultation,
}: FertilityInnovationLabProps) {
  const { dir, t } = useLanguage();
  const [activeModuleId, setActiveModuleId] = useState<string>(
    INNOVATION_MODULES[0].id
  );

  const activeModule =
    INNOVATION_MODULES.find((m) => m.id === activeModuleId) ||
    INNOVATION_MODULES[0];

  const renderVisual = () => {
    if (activeModule.visual === "cellular") return <CellularGlassVisual />;
    if (activeModule.visual === "dna") return <DnaHelixSculptureVisual />;
    return <HormonalNetworkVisual />;
  };

  return (
    <section id="fertility-institute" className="mb-16" dir={dir}>
      {/* Top Editorial Header: Luxury Reproductive Medicine & Fertility Innovation Institute */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-300">
            <Microscope className="w-3.5 h-3.5 text-white" />
            <span>
              {t(
                "REPRODUCTIVE SCIENCE & FERTILITY INNOVATION INSTITUTE",
                "REPRODUCTIVE SCIENCE & FERTILITY INNOVATION INSTITUTE"
              )}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-white tracking-tight leading-snug">
            {t(
              "انستیتو نوآوری علوم باروری، بهینه‌سازی زیست‌شناختی و پشتیبانی پیشرفته IVF",
              "Precision Fertility Optimization, Cellular Science & Advanced IVF Architecture"
            )}
          </h2>
        </div>

        {/* Module Switcher Pills (Framer / Apple Hardware Segmented Control Style) */}
        <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-xl border border-white/10">
          {INNOVATION_MODULES.map((mod) => {
            const isSelected = mod.id === activeModule.id;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setActiveModuleId(mod.id)}
                className={`px-3.5 py-2 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {t(mod.tabFa, mod.tabEn)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Glassmorphic Innovation Deck */}
      <div className="av-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/15 space-y-8">
        {/* Top Row: Narrative + Live Optical Scientific Visual + Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left 7 Cols: Institute Scientific Thesis */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              <Cpu className="w-3.5 h-3.5 text-zinc-200" />
              <span>{activeModule.code}</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-[1.28]">
              {t(activeModule.titleFa, activeModule.titleEn)}
            </h3>

            <p className="text-xs sm:text-[13.5px] text-zinc-200 font-medium leading-relaxed border-s-2 border-white/40 ps-4">
              {t(activeModule.subtitleFa, activeModule.subtitleEn)}
            </p>

            <p className="text-xs sm:text-[13px] text-zinc-400 leading-[1.85] text-justify">
              {t(activeModule.descriptionFa, activeModule.descriptionEn)}
            </p>

            {/* Action Buttons: Deep-Dive Monograph or Direct Institute Consultation */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() =>
                  onRequestConsultation(
                    t(activeModule.titleFa, activeModule.titleEn)
                  )
                }
                className="av-rect-btn px-5 py-2.5 rounded-lg text-[10.5px] font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2.5 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <span>
                  {t(
                    "درخواست مشاوره تخصصی و طراحی پروتکل",
                    "REQUEST PRECISION PROTOCOL CONSULTATION"
                  )}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>

              <button
                type="button"
                onClick={() => onExploreMonograph(activeModule.programLink)}
                className="px-4 py-2.5 rounded-lg border border-white/15 hover:border-white/40 bg-white/[0.03] text-[10.5px] font-mono uppercase tracking-[0.14em] text-zinc-200 hover:text-white inline-flex items-center gap-2 cursor-pointer transition"
              >
                <span>
                  {t(
                    "مطالعه مونوگراف علمی کامل (۱,۵۰۰+ کلمه)",
                    "READ FULL SCIENTIFIC MONOGRAPH"
                  )}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Refractive Scientific Sculpture + Real-Time Biometric Telemetry */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-black/40 p-2">
              {renderVisual()}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {activeModule.telemetry.map((metric, idx) => (
                <div
                  key={idx}
                  className="av-card-inner rounded-xl p-3.5 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-lg sm:text-xl font-bold text-white font-mono tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.07] text-zinc-200 border border-white/10">
                      {metric.delta}
                    </span>
                  </div>
                  <span className="text-[9.5px] uppercase tracking-[0.14em] text-zinc-400 leading-snug">
                    {t(metric.labelFa, metric.labelEn)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 3-Column Translational Protocols Grid using Reusable <ServiceCard /> */}
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-zinc-300 flex items-center gap-2">
              <Dna className="w-3.5 h-3.5 text-white" />
              <span>
                {t(
                  "پروتکل‌های ترجمانی و بیولوژیک فعال در این ماژول",
                  "TRANSLATIONAL & CELLULAR OPTIMIZATION PROTOCOLS"
                )}
              </span>
            </span>
            <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
              SUPERVISED BY DR. MAHBOUBEH TAJEDDINI • TAJ R&D INSTITUTE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeModule.protocols.map((prot, idx) => (
              <ServiceCard
                key={idx}
                badge={prot.badge}
                icon={<Sparkles className="w-3.5 h-3.5 text-zinc-200" />}
                title={t(prot.titleFa, prot.titleEn)}
                description={t(prot.bodyFa, prot.bodyEn)}
                footerMeta={prot.footer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
