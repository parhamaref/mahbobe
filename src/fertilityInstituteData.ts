import { FERTILITY_PROGRAMS_PART_1, FertilityServiceMonograph } from "./fertilityProgramsPart1";
import { FERTILITY_PROGRAMS_PART_2 } from "./fertilityProgramsPart2";

export const ALL_FERTILITY_PROGRAMS: FertilityServiceMonograph[] = [
  ...FERTILITY_PROGRAMS_PART_1,
  ...FERTILITY_PROGRAMS_PART_2,
];

// ============================================================================
// HOMEPAGE SECTION 02: WHY FERTILITY TREATMENTS SOMETIMES FAIL
// ============================================================================
export const WHY_TREATMENTS_FAIL = [
  {
    code: "FACTOR 01",
    titleFa: "تکرار سیکل‌های IVF بدون ریشه‌یابی قبلی",
    titleEn: "Repeated IVF Cycles Without Root-Cause Forensics",
    descFa:
      "ورود مجدد به سیکل تحریک تخمدان یا انتقال جنین با همان پروتکل قبلی، بدون بررسی اینکه چرا جنین قبلی متوقف شده یا لانه گزینی نکرده است، تنها زمان و ذخیره زیستی زوجین را مستهلک می‌کند.",
    descEn:
      "Entering consecutive ovarian stimulation or embryo transfer cycles with identical protocols—without investigating why prior embryos arrested or failed to implant—exhausts both biological reserves and emotional resilience.",
    metric: "CYCLE FORENSICS",
  },
  {
    code: "FACTOR 02",
    titleFa: "ناهماهنگی پنجره لانه‌گزینی و مقاومت آندومتر",
    titleEn: "Endometrial Desynchrony & Implantation Failure",
    descFa:
      "ضخامت ظاهری رحم در سونوگرافی به تنهایی کافی نیست؛ اختلال در خون‌رسانی مویرگی زیرآندومتری (Zone 3)، التهاب مزمن خاموش، دیس‌بیوز میکروبیوم یا مقاومت گیرنده‌های پروژسترون مانع چسبندگی جنین می‌شوند.",
    descEn:
      "A trilaminar ultrasound measurement does not guarantee molecular receptivity. Sub-endometrial hypoperfusion, silent chronic endometritis, microbiome dysbiosis, and luteal progesterone resistance silently block blastocyst adhesion.",
    metric: "UTERINE RECEPTIVITY",
  },
  {
    code: "FACTOR 03",
    titleFa: "مقاومت پنهان به انسولین و اختلال متابولیک فولیکولی",
    titleEn: "Subclinical Metabolic & Insulin Dysfunction",
    descFa:
      "حتی با قند خون ناشتای نرمال، انسولین بالا در مایع فولیکولی باعث افزایش آندروژن‌های موضعی، اختلال در عملکرد میتوکندری‌های تخمک و کاهش نرخ تبدیل جنین به بلاستوسیست سالم می‌شود.",
    descEn:
      "Even when fasting glucose appears normal, hyperinsulinemia within follicular fluid drives intra-ovarian androgen excess, impairs oocyte mitochondrial ATP synthesis, and compromises blastocyst euploidy.",
    metric: "METABOLIC BIOENERGETICS",
  },
  {
    code: "FACTOR 04",
    titleFa: "التهاب سیستمیک، استرس اکسیداتیو و عدم تعادل ایمنی",
    titleEn: "Systemic Inflammation, Oxidative Stress & Immune Rejection",
    descFa:
      "غلبه رادیکال‌های آزاد (ROS) به دوک تقسیم تخمک و رشته DNA اسپرم آسیب می‌زند و غلبه سایتوکاین‌های التهابی (Th1/Th17) در رحم مانع از پذیرش ایمنی جنین و بازسازی عروق جفتی می‌گردد.",
    descEn:
      "Unchecked reactive oxygen species (ROS) damage the oocyte meiotic spindle and fragment paternal sperm DNA, while pro-inflammatory decidual cytokines disrupt maternal-fetal immune tolerance.",
    metric: "REDOX & IMMUNE BALANCE",
  },
  {
    code: "FACTOR 05",
    titleFa: "عوامل اپی‌ژنتیک، ریتم سیرکادین خواب و سموم محیطی",
    titleEn: "Circadian Disruption, Epigenetic Methylation & Lifestyle",
    descFa:
      "کمبود ملاتونین داخل فولیکولی ناشی از اختلال خواب، افزایش هموسیستئین به دلیل نقص چرخه متیلاسیون فولات و مواجهه با سموم مختل‌کننده هورمونی (EDCs) مستقیماً کیفیت گامت‌ها را کاهش می‌دهند.",
    descEn:
      "Follicular melatonin depletion from disrupted sleep, elevated homocysteine from impaired one-carbon methylation, and exposure to endocrine-disrupting chemicals directly degrade gamete competence.",
    metric: "EPIGENETIC PRIMING",
  },
];

// ============================================================================
// HOMEPAGE SECTION 03: OUR SCIENTIFIC METHOD (THREE PILLARS)
// ============================================================================
export const SCIENTIFIC_METHOD_PILLARS = [
  {
    pillarNumber: "01",
    code: "PILLAR I • DIAGNOSTIC TELEMETRY",
    titleEn: "ASSESS",
    titleFa: "ارزیابی چندلایه فیزیولوژیک (ASSESS)",
    subtitleFa: "نقشه‌برداری عمیق متابولیک، اندوکرین، آندومتری، ایمنی و کروماتین اسپرم",
    subtitleEn: "Deep Biomarker, Metabolic, Endometrial & Paternal Chromatin Mapping",
    descFa:
      "ما فراتر از آزمایش‌های روتین حرکت می‌کنیم. پرونده شما از زاویه فیزیولوژی تولیدمثل، حساسیت انسولین (HOMA-IR)، متیلاسیون (هموسیستئین)، استرس اکسیداتیو، پرفیوژن داپلر شریان‌های رحمی، پنجره لانه‌گزینی و سلامت DNA اسپرم (DFI) کالبدشکافی می‌شود.",
    descEn:
      "We look far beneath surface fertility panels—auditing prior embryology flow sheets, insulin-glucose kinetics, one-carbon methylation, inflammatory cytokines, uterine artery Doppler perfusion, and sperm DNA fragmentation.",
    deliverablesFa: [
      "بازخوانی خط‌به‌خط سیکل‌های ناموفق قبلی (Forensic Cycle Audit)",
      "پنل پیشرفته بیومارکرهای متابولیک، تیروئید، التهابی و انعقادی",
      "ارزیابی همودینامیک آندومتر و شاخص شکست DNA اسپرم (SDF)",
    ],
    deliverablesEn: [
      "Line-by-line forensic reconstruction of prior IVF cycles",
      "High-resolution metabolic, endocrine, thyroid & thrombophilia profiling",
      "Sub-endometrial Doppler mapping & paternal chromatin integrity audit",
    ],
  },
  {
    pillarNumber: "02",
    code: "PILLAR II • CELLULAR BIO-CONDITIONING",
    titleEn: "OPTIMIZE",
    titleFa: "بهینه‌سازی سلولی و متابولیک (OPTIMIZE)",
    subtitleFa: "پروتکل‌های ۷۴ تا ۹۰ روزه بازسازی ریزومحیط فولیکولی، میتوکندریایی و رحمی",
    subtitleEn: "74-to-90-Day Follicular, Mitochondrial, Metabolic & Uterine Conditioning",
    descFa:
      "در پنجره طلایی ۹۰ روزه بلوغ فولیکول و اسپرماتوژنز، با استفاده از تغذیه بالینی ضدالتهابی، مکمل‌درمانی هدفمند میتوکندریایی، تنظیم ریتم سیرکادین و پروتکل‌های بازساختی مانند PRP اتولوگ، کیفیت تخمک، اسپرم و آندومتر را به اوج می‌رسانیم.",
    descEn:
      "Across the 90-day gametogenic window, we deploy targeted mitochondrial bioenergetics, insulin sensitization, circadian restoration, microbiome rebalancing, and autologous intrauterine PRP bio-priming.",
    deliverablesFa: [
      "مهار مقاومت به انسولین و شارژ ATP میتوکندریایی اووسیت و اسپرم",
      "بازسازی آندومتر و تقویت رگ‌زایی زیرآندومتری با پروتکل‌های PRP",
      "تنظیم اپی‌ژنتیک چرخه فولات، کاهش هموسیستئین و اصلاح خواب عمیق",
    ],
    deliverablesEn: [
      "Reversal of follicular insulin resistance & mitochondrial ATP amplification",
      "Endometrial regeneration & Zone-3 angiogenesis via autologous PRP",
      "One-carbon epigenetic methylation reset & nocturnal melatonin restoration",
    ],
  },
  {
    pillarNumber: "03",
    code: "PILLAR III • PRECISION CYCLE EXECUTION",
    titleEn: "SUPPORT",
    titleFa: "پشتیبانی هدفمند IVF و لانه‌گزینی (SUPPORT)",
    subtitleFa: "سینکرونیزاسیون دقیق تحریک تخمدان، انتقال جنین و پایش سه‌ماهه اول بارداری",
    subtitleEn: "Synchronized IVF Stimulation, Embryo Transfer & Early Gestational Monitoring",
    descFa:
      "زمانی که بیومارکرهای زوجین به تراز طلایی رسید، شما را با آمادگی کامل وارد سیکل پانکچر یا انتقال جنین می‌کنیم؛ ساعت دقیق مواجهه با پروژسترون، آرام‌سازی رحم در روز انتقال و پشتیبانی ایمنی-متابولیک را تا ثبت ضربان قلب جنین و پایان سه‌ماهه اول هدایت می‌نماییم.",
    descEn:
      "Once biomarker clearance is achieved, we synchronize your stimulation or Frozen Embryo Transfer—calibrating exact luteal progesterone exposure, uterine quiescence, and early gestational monitoring.",
    deliverablesFa: [
      "تایید آزمایشگاهی آمادگی بیولوژیک پیش از شروع داروهای سیکل",
      "کالیبراسیون دقیق پروژسترون سرمی و پنجره لانه‌گزینی در روز انتقال",
      "پایش مستمر هورمونی، متابولیک و عروقی در دوران اولیه بارداری",
    ],
    deliverablesEn: [
      "Pre-cycle biomarker verification clearance before stimulation or FET",
      "Day-of-transfer serum progesterone verification & luteal rescue",
      "Continuous first-trimester endocrine, vascular & metabolic surveillance",
    ],
  },
];

// ============================================================================
// HOMEPAGE SECTION 05: THE FERTILITY JOURNEY (5-STAGE VISUAL TIMELINE)
// ============================================================================
export const INSTITUTE_JOURNEY_TIMELINE = [
  {
    step: "01",
    phaseCode: "STAGE 01 • WEEKS 1–2",
    titleEn: "Assessment",
    titleFa: "ارزیابی جامع فیزیولوژیک (Assessment)",
    descFa:
      "کالبدشکافی پرونده‌های قبلی، آنالیز بیومارکرهای متابولیک، هورمونی، ایمنی، داپلر آندومتر و سلامت DNA اسپرم.",
    descEn:
      "Forensic cycle review, metabolic/insulin profiling, endometrial Doppler mapping, and sperm DNA fragmentation audit.",
  },
  {
    step: "02",
    phaseCode: "STAGE 02 • WEEKS 3–10",
    titleEn: "Optimization",
    titleFa: "بهینه‌سازی سلولی و متابولیک (Optimization)",
    descFa:
      "اجرای پروتکل شخصی‌سازی‌شده تغذیه ضدالتهابی، شارژ میتوکندریایی تخمک و اسپرم، اصلاح خواب و کاهش استرس اکسیداتیو.",
    descEn:
      "Targeted mitochondrial priming, insulin sensitization, circadian restoration, and seminal/follicular antioxidant repletion.",
  },
  {
    step: "03",
    phaseCode: "STAGE 03 • WEEKS 10–12",
    titleEn: "IVF Preparation",
    titleFa: "آماده‌سازی اختصاصی سیکل IVF (IVF Preparation)",
    descFa:
      "هماهنگ‌سازی کوهورت فولیکولی، تایید رسیدن بیومارکرها به محدوده طلایی و انتخاب بهترین پروتکل تحریک تخمدان یا انتخاب اسپرم.",
    descEn:
      "Follicular cohort synchronization, biomarker clearance verification, and individualized stimulation/andrology protocol alignment.",
  },
  {
    step: "04",
    phaseCode: "STAGE 04 • TRANSFER WINDOW",
    titleEn: "Embryo Transfer Support",
    titleFa: "پشتیبانی لانه‌گزینی و انتقال جنین (Embryo Transfer Support)",
    descFa:
      "آماده‌سازی آندومتر سه‌خطی با پرفیوژن Zone 3، تزریق PRP داخل رحمی در صورت نیاز، تنظیم دقیق پروژسترون و آرام‌سازی رحم.",
    descEn:
      "Zone-3 vascular priming, autologous intrauterine PRP bio-stimulation, Window of Implantation timing, and luteal progesterone rescue.",
  },
  {
    step: "05",
    phaseCode: "STAGE 05 • FIRST TRIMESTER",
    titleEn: "Pregnancy Monitoring",
    titleFa: "پایش و تثبیت بارداری (Pregnancy Monitoring)",
    descFa:
      "پایش دقیق روند بتا، سطح پروژسترون، تیروئید، قند/انسولین و شاخص‌های انعقادی برای عبور ایمن از سه‌ماهه اول بارداری.",
    descEn:
      "Close surveillance of hCG kinetics, luteal steroid levels, thyroid stability, and microvascular perfusion through first-trimester graduation.",
  },
];

// ============================================================================
// DEDICATED SCIENTIST PROFILE: DR. MAHBOUBEH TAJALDINI (/mahboubeh-tajaldini)
// ============================================================================
export const DR_TAJALDINI_PROFILE = {
  slug: "/mahboubeh-tajaldini",
  nameFa: "دکتر محبوبه تاج‌الدینی",
  nameEn: "Dr. Mahboubeh Tajaldini",
  titleFa: "مدیر فیزیولوژی تولیدمثل، بهینه‌سازی باروری و نوآوری پژوهشی",
  titleEn: "Director of Reproductive Physiology, Fertility Optimization & Research Innovation",
  credentialsShortFa:
    "دکتری تخصصی فیزیولوژی (PhD) • پژوهشگر پسادکتری • فلوشیپ تحقیقاتی دانشگاه بولونیا ایتالیا • دارنده ثبت اختراع WIPO • برنده مدال طلای ژنو و سیلیکون‌ولی",
  credentialsShortEn:
    "PhD in Physiology • Postdoctoral Researcher • University of Bologna Research Fellow • WIPO Patent Holder • Geneva & Silicon Valley Gold Medalist",
  portraitUrl:
    "https://panonama.ir/wp-content/uploads/2026/10/تاج-الدینی.jpg",
  seo: {
    metaTitleFa:
      "دکتر محبوبه تاج‌الدینی | دکتری فیزیولوژی، پژوهشگر باروری و مخترع بین‌المللی WIPO",
    metaTitleEn:
      "Dr. Mahboubeh Tajaldini | Director of Reproductive Physiology, Fertility Researcher & WIPO Inventor",
    metaDescriptionFa:
      "پروفایل علمی و پژوهشی دکتر محبوبه تاج‌الدینی: دکتری فیزیولوژی، پژوهشگر پسادکتری، فلوشیپ دانشگاه بولونیا، برنده مدال طلای ژنو و سیلیکون‌ولی، پژوهشگر PRP، شکست مکرر لانه‌گزینی و IVF.",
    metaDescriptionEn:
      "Official scientific monograph of Dr. Mahboubeh Tajaldini: PhD in Physiology, Postdoctoral Researcher, University of Bologna Research Fellow, WIPO Patent Holder, IFIA Member, and pioneer in PRP & IVF optimization.",
  },
  biographyFa: [
    "دکتر محبوبه تاج‌الدینی دانشمند، فیزیولوژیست، مخترع بین‌المللی و معمار پروتکل‌های نوین بهینه‌سازی باروری در ایران است. مسیر علمی ایشان با اخذ درجه دکتری تخصصی (PhD) در رشته فیزیولوژی و ادامه پژوهش‌های پیشرفته در مقطع پسادکتری (Postdoctoral Research) شکل گرفت؛ مسیری که همواره بر یک پرسش بنیادین متمرکز بوده است: چگونه می‌توان با مهندسی دقیق «ریزومحیط سلولی» (Cellular Microenvironment)، سرنوشت بیولوژیک بافت‌ها و سلول‌های انسانی را تغییر داد؟",
    "ایشان با حضور در فرصت مطالعاتی و فلوشیپ پژوهشی در دانشگاه بولونیا ایتالیا (University of Bologna — قدیمی‌ترین دانشگاه جهان غرب) و عضویت در بنیاد ملی نخبگان، پلی مستحکم میان علوم پایه سلولی-مولکولی و کاربردهای بالینی ایجاد کردند. پژوهش‌های پیشگامانه ایشان در زمینه زیست‌شناسی ریزومحیط بافتی، سیگنالینگ سایتوکاین‌ها، استرس اکسیداتیو و کاربرد پلاسمای غنی از پلاکت (PRP) در بازسازی آندومتر و شکست مکرر لانه‌گزینی (RIF)، دیدگاه تازه‌ای را وارد حوزه کمک‌باروری و IVF نموده است.",
    "به عنوان یک مخترع بین‌المللی، دستاوردهای فناورانه دکتر تاج‌الدینی موفق به ثبت در سازمان جهانی مالکیت فکری (WIPO) و عضویت رسمی در فدراسیون بین‌المللی انجمن‌های مخترعان (IFIA) در سوئیس شده و دو مدال طلای معتبر جهانی را در نمایشگاه بین‌المللی اختراعات ژنو (Geneva) و جشنواره اختراعات سیلیکون‌ولی آمریکا (Silicon Valley) به ارمغان آورده است.",
  ],
  biographyEn: [
    "Dr. Mahboubeh Tajaldini is a distinguished reproductive physiologist, translational biomedical scientist, and internationally decorated inventor serving as Director of Reproductive Physiology, Fertility Optimization & Research Innovation at the Fertility Innovation Institute in Gorgan, Iran.",
    "Holding a PhD in Physiology followed by advanced Postdoctoral Research and a prestigious Research Fellowship at the University of Bologna (Alma Mater Studiorum, Italy), Dr. Tajaldini has dedicated her career to decoding how cellular microenvironments, paracrine growth-factor networks, oxidative redox balance, and systemic metabolism govern tissue regeneration and human fertility.",
    "An elected member of the National Elites Foundation and the International Federation of Inventors' Associations (IFIA), she holds international patent registrations under the World Intellectual Property Organization (WIPO) and has been honored with Gold Medals at both the Geneva International Exhibition of Inventions (Switzerland) and the Silicon Valley International Invention Festival (USA). At the Institute, she translates this deep scientific rigor directly into individualized pre-IVF, endometrial receptivity, and recurrent implantation failure protocols.",
  ],
  coreBadges: [
    { labelFa: "دکتری تخصصی فیزیولوژی", labelEn: "PhD in Physiology" },
    { labelFa: "پژوهشگر پسادکتری", labelEn: "Postdoctoral Researcher" },
    { labelFa: "فلوشیپ پژوهشی دانشگاه بولونیا ایتالیا", labelEn: "University of Bologna Research Fellowship" },
    { labelFa: "دارنده ثبت اختراع جهانی WIPO", labelEn: "WIPO International Patent Holder" },
    { labelFa: "مدال طلای اختراعات ژنو سوئیس", labelEn: "Gold Medal Winner — Geneva Inventions" },
    { labelFa: "مدال طلای اختراعات سیلیکون‌ولی آمریکا", labelEn: "Gold Medal Winner — Silicon Valley" },
    { labelFa: "عضو رسمی فدراسیون جهانی مخترعان (IFIA)", labelEn: "Official IFIA Member (Geneva)" },
    { labelFa: "عضو بنیاد ملی نخبگان", labelEn: "National Elites Foundation Member" },
  ],
  scientificAchievements: [
    {
      metric: "WIPO / PCT",
      titleFa: "ثبت اختراع بین‌المللی در سازمان جهانی مالکیت فکری",
      titleEn: "International Patent Registration (WIPO)",
      descFa:
        "طراحی و ثبت فرمولاسیون‌ها و پروتکل‌های نوآورانه زیست‌پزشکی با تایید داوران بین‌المللی مالکیت فکری.",
      descEn:
        "Patented biomedical formulations and cellular microenvironment modulation protocols registered internationally.",
    },
    {
      metric: "GENEVA GOLD",
      titleFa: "کسب مدال طلای نمایشگاه بین‌المللی اختراعات ژنو (سوئیس)",
      titleEn: "Gold Medal — International Exhibition of Inventions of Geneva",
      descFa:
        "تقدیر عالی هیئت ژوری بین‌المللی در ژنو سوئیس به پاس نوآوری در علوم زیستی و پزشکی ترجمانی.",
      descEn:
        "Awarded top honors by the international scientific jury in Geneva for frontier biomedical innovation.",
    },
    {
      metric: "SILICON VALLEY GOLD",
      titleFa: "کسب مدال طلای فستیوال بین‌المللی اختراعات سیلیکون‌ولی (آمریکا)",
      titleEn: "Gold Medal — Silicon Valley International Invention Festival (SVIIF)",
      descFa:
        "دریافت مدال طلا در قطب فناوری جهان (کالیفرنیا، آمریکا) برای نوآوری‌های کاربردی در سلامت و زیست‌فناوری.",
      descEn:
        "Recognized with the Gold Medal in Santa Clara, California for translational healthcare biotechnology.",
    },
    {
      metric: "BOLOGNA FELLOW",
      titleFa: "پژوهشگر مهمان و فلوشیپ تحقیقاتی دانشگاه بولونیا (ایتالیا)",
      titleEn: "Research Fellowship — University of Bologna, Italy",
      descFa:
        "همکاری پژوهشی بین‌المللی در حوزه بیولوژی سلولی، ریزومحیط بافتی و مکانیسم‌های مولکولی در اروپا.",
      descEn:
        "Conducted advanced cellular microenvironment and translational physiology research at the University of Bologna.",
    },
  ],
  researchAreas: [
    {
      code: "AREA 01",
      titleFa: "کاربرد پلاسمای غنی از پلاکت (PRP) در IVF و بازسازی آندومتر",
      titleEn: "Autologous PRP Signaling in IVF & Endometrial Regeneration",
      descFa:
        "بررسی مکانیسم‌های مولکولی فاکتورهای رشد مشتق از پلاکت (VEGF, PDGF, TGF-β, IGF-1) در تحریک سلول‌های بنیادی آندومتر، افزایش ضخامت رحم‌های مقاوم و بهبود خون‌رسانی زیرآندومتری.",
      descEn:
        "Investigating how platelet-derived growth factors activate basal endometrial progenitor cells, drive spiral artery angiogenesis, and resolve refractory thin endometrium.",
    },
    {
      code: "AREA 02",
      titleFa: "پاتوفیزیولوژی شکست مکرر لانه‌گزینی (Recurrent Implantation Failure)",
      titleEn: "Molecular Pathophysiology of Recurrent Implantation Failure (RIF)",
      descFa:
        "مطالعه گفتگوی متقابل بلاستوسیست و دسیدوا، نقش سلول‌های ایمنی uNK و Treg، بیان ژن‌های HOXA10 و LIF و رفع مقاومت گیرنده‌های پروژسترون در بیماران دارای شکست مکرر IVF.",
      descEn:
        "Decoding embryo-maternal cross-talk, decidual immune tolerance (uNK/Treg polarization), and molecular adhesion cascades in repeated IVF failure.",
    },
    {
      code: "AREA 03",
      titleFa: "فیزیولوژی تولیدمثل، مقاومت به انسولین و بیوانرژتیک میتوکندری",
      titleEn: "Reproductive Physiology, Metabolic Signaling & Oocyte Bioenergetics",
      descFa:
        "تحلیل تاثیر هیپرانسولینمی، سندرم تخمدان پلی‌کیستیک (PCOS) و استرس اکسیداتیو بر بلوغ سیتوپلاسمی تخمک، سلامت دوک تقسیم میوزی و یکپارچگی کروماتین اسپرم.",
      descEn:
        "Studying how systemic insulin resistance, follicular oxidative stress, and mitochondrial ATP synthesis dictate oocyte competence and embryo euploidy.",
    },
    {
      code: "AREA 04",
      titleFa: "زیست‌شناسی ریزومحیط سرطان و مهندسی سیگنالینگ سلولی",
      titleEn: "Cancer Microenvironment Biology & Paracrine Signaling Networks",
      descFa:
        "مطالعه تطبیقی مکانیسم‌های تهاجم سلولی، رگ‌زایی (Angiogenesis)، بازسازی ماتریکس خارج سلولی و تعدیل ایمنی در ریزومحیط تومور و کاربرد آموزه‌های آن در درک لانه‌گزینی تروفوبلاست.",
      descEn:
        "Comparative biology of extracellular matrix remodeling, angiogenesis, and immune modulation across tumor microenvironments and physiological trophoblast invasion.",
    },
  ],
  publications: [
    {
      year: "Peer-Reviewed Monograph",
      journal: "International Journal of Reproductive BioMedicine / Translational Physiology",
      titleEn:
        "Intrauterine Infusion of Autologous Platelet-Rich Plasma (PRP) Modulates Endometrial Receptivity Biomarkers and Improves Clinical Pregnancy in Recurrent Implantation Failure",
      titleFa:
        "نقش انفوزیون داخل رحمی پلاسمای غنی از پلاکت اتولوگ (PRP) در تعدیل بیومارکرهای پذیرش آندومتر و ارتقای بارداری بالینی در بیماران مبتلا به شکست مکرر لانه‌گزینی",
      focusTag: "PRP & RIF CLINICAL RESEARCH",
    },
    {
      year: "Peer-Reviewed Study",
      journal: "Cellular & Molecular Microenvironment Research (Bologna Collaborative Track)",
      titleEn:
        "Microenvironment Cross-Talk, Oxidative Stress Signaling, and Extracellular Matrix Remodeling in Cellular Survival and Tissue Regeneration",
      titleFa:
        "برهم‌کنش ریزومحیط سلولی، سیگنالینگ استرس اکسیداتیو و بازسازی ماتریکس خارج سلولی در بقا و بازسازی بافتی",
      focusTag: "MICROENVIRONMENT PHYSIOLOGY",
    },
    {
      year: "Peer-Reviewed Study",
      journal: "Biomedicine & Pharmacotherapy / Oncology & Physiology Series",
      titleEn:
        "Targeting Inflammatory Cytokine Networks and Angiogenic Pathways within the Tissue Microenvironment: Therapeutic Implications of Bioactive Formulations",
      titleFa:
        "هدف‌گیری شبکه‌های سایتوکاینی التهابی و مسیرهای رگ‌زایی در ریزومحیط بافتی: کاربردهای درمانی فرمولاسیون‌های زیست‌فعال",
      focusTag: "CYTOKINE & ANGIOGENESIS RESEARCH",
    },
    {
      year: "Clinical Protocol Paper",
      journal: "Fertility Optimization & Metabolic Endocrinology Monograph",
      titleEn:
        "Metabolic Priming and Follicular Fluid Redox Restoration Prior to Controlled Ovarian Hyperstimulation: Impact on Metaphase-II Oocyte Yield and Blastocyst Development",
      titleFa:
        "آماده‌سازی متابولیک و احیای تعادل اکسیداتیو مایع فولیکولی پیش از تحریک تخمدان: تاثیر بر بلوغ تخمک MII و تکامل بلاستوسیست",
      focusTag: "PRE-IVF BIO-OPTIMIZATION",
    },
  ],
  academicTimeline: [
    {
      period: "FOUNDATION",
      titleFa: "دکتری تخصصی (PhD) در فیزیولوژی پزشکی",
      titleEn: "PhD in Medical Physiology",
      descFa:
        "تمرکز رساله و پژوهش‌های پایه بر فیزیولوژی سلولی، سیگنالینگ غشایی و مکانیسم‌های تنظیم همئوستاز بافتی.",
      descEn:
        "Doctoral training focused on cellular physiology, neuro-endocrine regulation, and microvascular tissue homeostasis.",
    },
    {
      period: "INTERNATIONAL FELLOWSHIP",
      titleFa: "فلوشیپ پژوهشی در دانشگاه بولونیا (University of Bologna, Italy)",
      titleEn: "Research Fellowship at the University of Bologna, Italy",
      descFa:
        "اجرای مطالعات پیشرفته در زمینه زیست‌شناسی ریزومحیط سلولی و فارماکولوژی مولکولی در یکی از معتبرترین مراکز علمی اروپا.",
      descEn:
        "Advanced translational research in cellular microenvironment dynamics at Europe's oldest university.",
    },
    {
      period: "POSTDOCTORAL & ELITES",
      titleFa: "پژوهشگر پسادکتری و عضویت در بنیاد ملی نخبگان",
      titleEn: "Postdoctoral Researcher & National Elites Foundation Inductee",
      descFa:
        "گسترش مرزهای دانش در زمینه پزشکی بازساختی، کاربردهای PRP و هدایت طرح‌های پژوهشی ملی و بین‌المللی.",
      descEn:
        "Postdoctoral investigations bridging regenerative growth-factor biology with clinical reproductive medicine.",
    },
    {
      period: "GLOBAL INVENTIONS",
      titleFa: "ثبت اختراع جهانی WIPO و کسب مدال طلای ژنو و سیلیکون‌ولی",
      titleEn: "WIPO Patent Registration & Geneva / Silicon Valley Gold Medals",
      descFa:
        "ثبت بین‌المللی اختراعات بیوپزشکی، عضویت در فدراسیون جهانی مخترعان (IFIA) و کسب عالی‌ترین نشان‌های نوآوری جهانی.",
      descEn:
        "Secured WIPO patent protection and won consecutive Gold Medals in Geneva and Silicon Valley.",
    },
    {
      period: "PRESENT LEADERSHIP",
      titleFa: "تاسیس و هدایت علمی موسسه نوآوری باروری (گرگان، ایران)",
      titleEn: "Director of Reproductive Physiology & Fertility Innovation Institute",
      descFa:
        "ایجاد نسل جدیدی از خدمات بهینه‌سازی باروری، آمادگی پیش از IVF و درمان شکست مکرر لانه‌گزینی بر پایه علم داده و فیزیولوژی.",
      descEn:
        "Leading Iran's premier data-driven institute for pre-IVF metabolic conditioning, RIF resolution, and reproductive research.",
    },
  ],
  researchPhilosophyFa:
    "«بدن انسان یک ماشین مکانیکی نیست که بتوان با تحمیل دوزهای بالاتر هورمون، آن را وادار به باروری کرد؛ بلکه یک اکوسیستم هوشمند و ظریف سلولی است. وقتی ما زبان فیزیولوژی سلول را می‌فهمیم، التهاب را خاموش می‌کنیم، انرژی میتوکندری را بازمی‌گردانیم و گفتگوی مولکولی میان جنین و رحم را همگام می‌سازیم، باروری نه به عنوان یک معجزه تصادفی، بلکه به عنوان نتیجه طبیعیِ یک محیط بیولوژیک سالم رخ می‌دهد.» — دکتر محبوبه تاج‌الدینی",
  researchPhilosophyEn:
    "\"The human reproductive system is not a mechanical machine that can be forced into pregnancy simply by escalating hormone doses; it is an exquisitely intelligent cellular ecosystem. When we respect reproductive physiology—quieting inflammation, refueling mitochondrial bioenergetics, and synchronizing the molecular dialogue between embryo and endometrium—successful implantation ceases to be a game of chance and becomes the natural outcome of a restored biological environment.\" — Dr. Mahboubeh Tajaldini",
};

// ============================================================================
// HOMEPAGE SECTION 08: INSTITUTE FAQ
// ============================================================================
export const INSTITUTE_FAQS = [
  {
    qFa: "آیا «موسسه نوآوری باروری» یک کلینیک سنتی IVF است یا مرکز تخصصی بهینه‌سازی باروری؟",
    qEn: "How is the Fertility Innovation Institute different from a traditional IVF clinic?",
    aFa: "موسسه ما یک «انستیتوی علمی بهینه‌سازی سلامت تولیدمثل و موفقیت IVF» است. در کلینیک‌های سنتی، تمرکز صرفاً بر اجرای عمل پانکچر و انتقال جنین است؛ اما ما بر ۹۰ روز حیاتی پیش از پانکچر و انتقال جنین تمرکز داریم: یعنی اصلاح مقاومت به انسولین، تقویت کیفیت تخمک و اسپرم، ریشه‌یابی شکست‌های قبلی و آماده‌سازی مولکولی و عروقی رحم (از جمله با PRP اتولوگ) تا سیکل درمانی شما با بالاترین شانس موفقیت همراه شود.",
    aEn: "We are a specialized Reproductive Physiology & Fertility Optimization Institute. While traditional clinics focus on the mechanical procedures of egg retrieval and embryo transfer, we engineer the 90-day biological foundation that determines whether those procedures succeed—optimizing oocyte bioenergetics, sperm DNA integrity, metabolic insulin sensitivity, and endometrial receptivity.",
  },
  {
    qFa: "تحت نظر چه کسی پروتکل‌های علمی و درمانی طراحی می‌شوند؟",
    qEn: "Who directs the scientific and clinical optimization protocols at the Institute?",
    aFa: "تمامی پروتکل‌های ارزیابی و بهینه‌سازی زیر نظر مستقیم دکتر محبوبه تاج‌الدینی (دکتری تخصصی فیزیولوژی، پژوهشگر پسادکتری، فلوشیپ تحقیقاتی دانشگاه بولونیا ایتالیا، دارنده ثبت اختراع WIPO و برنده مدال طلای ژنو و سیلیکون‌ولی) و تیم تخصصی موسسه طراحی و پایش می‌شوند.",
    aEn: "All protocols are architected and supervised by Dr. Mahboubeh Tajaldini—PhD in Physiology, Postdoctoral Researcher, University of Bologna Research Fellow, WIPO Patent Holder, and Gold Medalist in Geneva and Silicon Valley—alongside our multidisciplinary clinical fellows.",
  },
  {
    qFa: "آیا مراجعانی که در شهرهای دیگر یا خارج از کشور هستند نیز می‌توانند از خدمات موسسه بهره‌مند شوند؟",
    qEn: "Can patients outside Gorgan or living internationally access the Institute's programs?",
    aFa: "بله؛ بخش بزرگی از فرآیند کالبدشکافی سیکل‌های قبلی (Forensic Cycle Review)، طراحی پنل آزمایش‌های تخصصی، تفسیر بیومارکرها و اجرای پروتکل ۹۰ روزه آمادگی پیش از IVF یا درمان PCOS و فاکتور مردانه به صورت آنلاین و تله‌مدیسین اختصاصی برای مراجعان سراسر ایران و خارج از کشور قابل انجام است و مراجعات حضوری در گرگان برای اقدامات بالینی هماهنگ می‌شود.",
    aEn: "Yes. Comprehensive forensic cycle audits, biomarker panel design, 90-day metabolic/cellular optimization protocols, and pre-IVF conditioning are seamlessly available both in-person at our Gorgan institute and via dedicated tele-medicine consultations nationwide and internationally.",
  },
  {
    qFa: "چگونه می‌توانیم به وبسایت خدمات مهاجرت نخبگان تاج گلوبال دسترسی داشته باشیم؟",
    qEn: "Where can I access the original TAJ Global Legacy Website (Elite Migration & Academic Programs)?",
    aFa: "تمامی بخش‌ها، مونوگراف‌های مهاجرت نخبگان، ماشین‌حساب‌های ارزیابی رزومه علمی و محتوای کامل در صفحه «وبسایت خدمات مهاجرت نخبگان» (/legacy-website) از طریق منوی بالای صفحه، فوتر و نقشه سایت در دسترس شماست.",
    aEn: "100% of the original TAJ Global website—including all elite migration monographs, scientific calculators, and resources—is permanently preserved and accessible at any time via the 'Legacy Website' link in the Header Menu, Footer Menu, and Sitemap.",
  },
];

// ============================================================================
// DELIVERABLE 07: 100 BLOG TOPIC IDEAS ACROSS 12 CATEGORIES
// ============================================================================
export interface BlogCategoryCluster {
  id: string;
  categoryFa: string;
  categoryEn: string;
  targetPillarUrl: string;
  topics: {
    number: number;
    titleFa: string;
    titleEn: string;
    searchIntent: "Informational" | "Clinical Deep-Dive" | "High-Conversion";
  }[];
}

export const BLOG_TOPICS_100: BlogCategoryCluster[] = [
  {
    id: "cluster-01-ivf-readiness",
    categoryFa: "۱. آمادگی پیش از IVF و قانون ۹۰ روزه بلوغ تخمک (۱۰ موضوع)",
    categoryEn: "01. Pre-IVF Preparation & The 90-Day Oocyte Maturation Window (10 Topics)",
    targetPillarUrl: "/ivf-readiness",
    topics: [
      { number: 1, titleFa: "چرا کیفیت تخمک ۹۰ روز پیش از پانکچر IVF تعیین می‌شود؟ راهنمای علمی فولیکولوژنز", titleEn: "Why Oocyte Quality Is Determined 90 Days Before IVF Retrieval: The Science of Folliculogenesis", searchIntent: "Clinical Deep-Dive" },
      { number: 2, titleFa: "چک‌لیست کامل آزمایش‌های متابولیک و سلولی که باید قبل از شروع سیکل IVF انجام دهید", titleEn: "The Complete Pre-IVF Metabolic & Cellular Biomarker Checklist Before Starting Stimulation", searchIntent: "High-Conversion" },
      { number: 3, titleFa: "نقش میتوکندری‌های تخمک در تشکیل بلاستوسیست روز پنجم و جلوگیری از توقف رشد جنین", titleEn: "Oocyte Mitochondrial Bioenergetics: How Maternal ATP Powers Day-5 Blastocyst Development", searchIntent: "Clinical Deep-Dive" },
      { number: 4, titleFa: "کوآنزیم Q10 (یوبیکینول در برابر یوبیکینون): دوز علمی و مدت زمان مصرف پیش از پانکچر", titleEn: "Ubiquinol vs. Ubiquinone CoQ10 Before IVF: Clinical Dosing, Bioavailability & Spindle Protection", searchIntent: "Informational" },
      { number: 5, titleFa: "چگونه مقاومت پنهان به انسولین حتی با قند ناشتای نرمال کیفیت تخمک را در IVF تخریب می‌کند؟", titleEn: "How Subclinical Insulin Resistance Sabotages Egg Quality Even When Fasting Glucose Is Normal", searchIntent: "Clinical Deep-Dive" },
      { number: 6, titleFa: "ارتباط هموسیستئین بالا و چرخه متیلاسیون فولات (5-MTHF) با نرخ لقاح و سقط پس از IVF", titleEn: "Elevated Homocysteine & One-Carbon Methylation (5-MTHF) in IVF Fertilization and Early Loss", searchIntent: "Clinical Deep-Dive" },
      { number: 7, titleFa: "نقش ملاتونین داخل فولیکولی به عنوان قوی‌ترین آنتی‌اکسیدان محافظ تخمک در سیکل IVF", titleEn: "Intra-Follicular Melatonin: More Than a Sleep Hormone—The Master Oocyte ROS Scavenger", searchIntent: "Informational" },
      { number: 8, titleFa: "استراتژی بهینه‌سازی ذخیره تخمدان پایین (Low AMH / DOR) پیش از ورود به سیکل پانکچر", titleEn: "Pre-IVF Physiological Priming for Diminished Ovarian Reserve (Low AMH): Quality Over Quantity", searchIntent: "High-Conversion" },
      { number: 9, titleFa: "تاثیر سموم مختل‌کننده هورمونی (BPA و فتالات‌ها) بر مایع فولیکولی و پروتکل پاکسازی ۳۰ روزه", titleEn: "Endocrine-Disrupting Chemicals (BPA & Phthalates) in Follicular Fluid: A 30-Day Detox Protocol", searchIntent: "Informational" },
      { number: 10, titleFa: "تفاوت پروتکل‌های تحریک تخمدان (آنتاگونیست، آگونیست و ملایم) و نقش آمادگی قبلی بدن", titleEn: "Matching Ovarian Stimulation Protocols to Your Metabolic & Endocrine Readiness Profile", searchIntent: "High-Conversion" },
    ],
  },
  {
    id: "cluster-02-rif-failure",
    categoryFa: "۲. شکست مکرر IVF و کالبدشکافی علمی سیکل‌های ناموفق (۱۰ موضوع)",
    categoryEn: "02. Recurrent IVF Failure (RIF) & Forensic Cycle Analysis (10 Topics)",
    targetPillarUrl: "/ivf-failure-analysis",
    topics: [
      { number: 11, titleFa: "چرا جنین‌های گرید A لانه گزینی نمی‌کنند؟ ۷ علت علمی فراتر از «بدشانسی»", titleEn: "Why Grade-A Blastocysts Fail to Implant: 7 Physiological Root Causes Beyond 'Bad Luck'", searchIntent: "High-Conversion" },
      { number: 12, titleFa: "کالبدشکافی پرونده IVF ناموفق: چگونه گزارش آزمایشگاه جنین‌شناسی خود را رمزگشایی کنیم؟", titleEn: "Forensic Embryology Review: How to Decode Your Previous IVF Cycle Laboratory Sheet", searchIntent: "Clinical Deep-Dive" },
      { number: 13, titleFa: "توقف رشد جنین بین روز سوم تا پنجم: مقصر تخمک است یا فعال‌سازی ژنوم اسپرم؟", titleEn: "Day-3 to Day-5 Embryo Arrest: Distinguishing Maternal Mitochondrial vs. Late Paternal Effects", searchIntent: "Clinical Deep-Dive" },
      { number: 14, titleFa: "آندومتریت مزمن خاموش (CD138+): عفونت بدون علامتی که مانع لانه‌گزینی جنین در IVF می‌شود", titleEn: "Silent Chronic Endometritis (CD138): The Asymptomatic Barrier to Embryo Implantation", searchIntent: "Clinical Deep-Dive" },
      { number: 15, titleFa: "مقاومت به پروژسترون در فاز لوتئال و اهمیت حیاتی سنجش پروژسترون خون در روز انتقال جنین", titleEn: "Luteal Progesterone Resistance & Why Day-of-Transfer Serum Progesterone Levels Dictate FET Success", searchIntent: "High-Conversion" },
      { number: 16, titleFa: "نقش سلول‌های کشنده طبیعی رحم (uNK) و تعادل ایمنی Th1/Th2/Treg در شکست مکرر لانه‌گزینی", titleEn: "Uterine Natural Killer (uNK) Cells & Treg Tolerance: Decoding Reproductive Immunology in RIF", searchIntent: "Clinical Deep-Dive" },
      { number: 17, titleFa: "ترومبوفیلی، میکروترومبوز عروق جفتی و نقش PAI-1 در بارداری‌های شیمیایی پس از IVF", titleEn: "Microvascular Thrombophilia, PAI-1 & Antiphospholipid Screening After Biochemical IVF Losses", searchIntent: "Clinical Deep-Dive" },
      { number: 18, titleFa: "پنجره لانه‌گزینی (Window of Implantation) چیست و چگونه جابجایی آن باعث شکست FET می‌شود؟", titleEn: "Displaced Window of Implantation (WOI): Synchronizing Embryo Age with Endometrial Readiness", searchIntent: "Informational" },
      { number: 19, titleFa: "آنتی‌بادی‌های ضدتیروئید (Anti-TPO) و کم‌کاری تحت‌بالینی تیروئید در شکست IVF و سقط زودرس", titleEn: "Thyroid Autoimmunity (Anti-TPO) & Subclinical Hypothyroidism in Recurrent IVF Failure", searchIntent: "Informational" },
      { number: 20, titleFa: "چگونه از آخرین جنین‌های فریز شده و ارزشمند خود پیش از انتقال بعدی محافظت کنیم؟", titleEn: "Protecting Your Final Cryopreserved Embryos: The Ultimate Pre-Transfer Verification Protocol", searchIntent: "High-Conversion" },
    ],
  },
  {
    id: "cluster-03-prp-regenerative",
    categoryFa: "۳. پلاسمای غنی از پلاکت (PRP) و پزشکی بازساختی در باروری (۱۰ موضوع)",
    categoryEn: "03. Autologous PRP Therapy & Regenerative Reproductive Medicine (10 Topics)",
    targetPillarUrl: "/fertility-research",
    topics: [
      { number: 21, titleFa: "مکانیسم مولکولی تزریق داخل رحمی PRP: فاکتورهای رشد چگونه آندومتر نازک را بازسازی می‌کنند؟", titleEn: "Molecular Mechanics of Intrauterine PRP: How VEGF, PDGF & TGF-β Regenerate Thin Endometrium", searchIntent: "Clinical Deep-Dive" },
      { number: 22, titleFa: "نتایج کارآزمایی‌های بالینی PRP داخل رحمی در بیماران مبتلا به شکست مکرر لانه‌گزینی (RIF)", titleEn: "Clinical Trial Evidence for Autologous Intrauterine PRP in Recurrent Implantation Failure", searchIntent: "High-Conversion" },
      { number: 23, titleFa: "تفاوت PRP استانداردشده و کالیبره‌شده با روش‌های معمولی در افزایش بیان ژن‌های HOXA10 و LIF", titleEn: "Why Platelet Concentration & Leukocyte Calibration Matter in Endometrial PRP Bio-Priming", searchIntent: "Clinical Deep-Dive" },
      { number: 24, titleFa: "زمان‌بندی طلایی تزریق PRP داخل رحمی در سیکل انتقال جنین فریز شده (FET)", titleEn: "Optimal Cycle Timing for Intrauterine PRP Infusions During Frozen Embryo Transfer Preparation", searchIntent: "High-Conversion" },
      { number: 25, titleFa: "جوان‌سازی تخمدان با PRP (Ovarian PRP): واقعیت‌های علمی، کاندیداهای مناسب و محدودیت‌ها", titleEn: "Intra-Ovarian PRP for Diminished Ovarian Reserve & POI: Scientific Mechanisms and Realistic Outcomes", searchIntent: "Informational" },
      { number: 26, titleFa: "نقش PRP در فعال‌سازی سلول‌های بنیادی لایه بازال آندومتر پس از کورتاژ یا سندرم آشرمن", titleEn: "Awakening Basal Endometrial Progenitor Cells with PRP Following Curettage or Asherman's Syndrome", searchIntent: "Clinical Deep-Dive" },
      { number: 27, titleFa: "چگونه PRP داخل رحمی التهاب موضعی را کاهش داده و تعادل سایتوکاین‌های دسیدوا را تنظیم می‌کند؟", titleEn: "Immunomodulatory Effects of Autologous PRP on Decidual Cytokines and Endometritis Resolution", searchIntent: "Clinical Deep-Dive" },
      { number: 28, titleFa: "بررسی ایمنی، بدون درد بودن و مراحل انجام PRP رحمی به زبان ساده برای بیماران", titleEn: "What to Expect During an Intrauterine PRP Procedure: Safety, Comfort & Step-by-Step Guide", searchIntent: "Informational" },
      { number: 29, titleFa: "آینده پزشکی بازساختی در باروری: از PRP اتولوگ تا اگزوزوم‌ها و مهندسی ریزومحیط سلولی", titleEn: "The Future of Regenerative Fertility Medicine: Autologous Growth Factors, Exosomes & Bio-Scaffolds", searchIntent: "Informational" },
      { number: 30, titleFa: "مروری بر پژوهش‌ها و ثبت اختراعات دکتر محبوبه تاج‌الدینی در حوزه زیست‌شناسی ریزومحیط و PRP", titleEn: "Inside Dr. Mahboubeh Tajaldini's Research on Cellular Microenvironments and Translational PRP", searchIntent: "High-Conversion" },
    ],
  },
  {
    id: "cluster-04-implantation-endometrium",
    categoryFa: "۴. بهینه‌سازی لانه‌گزینی، خون‌رسانی رحم و میکروبیوم آندومتر (۱۰ موضوع)",
    categoryEn: "04. Endometrial Receptivity, Uterine Perfusion & Microbiome (10 Topics)",
    targetPillarUrl: "/implantation-optimization",
    topics: [
      { number: 31, titleFa: "چرا ضخامت آندومتر به تنهایی کافی نیست؟ اهمیت الگوی سه‌خطی و خون‌رسانی Zone 3 در داپلر", titleEn: "Beyond Millimeters: Why Trilaminar Morphology and Applebaum Zone-3 Doppler Flow Govern FET Success", searchIntent: "Clinical Deep-Dive" },
      { number: 32, titleFa: "میکروبیوم آندومتر: چرا غلبه ۹۰ درصدی لاکتوباسیلوس شانس لانه‌گزینی جنین را دو برابر می‌کند؟", titleEn: "The Endometrial Microbiome: Why >90% Lactobacillus Dominance Doubles Implantation Rates", searchIntent: "Clinical Deep-Dive" },
      { number: 33, titleFa: "درمان علمی آندومتر نازک و مقاوم به استروژن (<7mm) بدون افزایش بی‌رویه دوز قرص استرادیول", titleEn: "Resolving Estrogen-Refractory Thin Endometrium (<7mm) Without Receptor Down-Regulation", searchIntent: "High-Conversion" },
      { number: 34, titleFa: "نقش نیتریک اکساید، ال-آرژنین و پرفیوژن عروقی در کاهش مقاومت شریان‌های رحمی (PI)", titleEn: "Nitric Oxide Signaling & Uterine Artery Pulsatility Index (PI): Enhancing Pelvic Micro-Perfusion", searchIntent: "Informational" },
      { number: 35, titleFa: "مقایسه سیکل طبیعی، سیکل طبیعی اصلاح‌شده و سیکل هورمونی (HRT) برای انتقال جنین فریز شده", titleEn: "Natural vs. Modified-Natural vs. Medicated HRT Frozen Embryo Transfer: Choosing Your Ideal Protocol", searchIntent: "High-Conversion" },
      { number: 36, titleFa: "اهمیت حیاتی وجود جسم زرد (Corpus Luteum) در سیکل انتقال جنین برای سلامت عروقی بارداری", titleEn: "The Corpus Luteum Advantage in FET: Relaxin, VEGF, and Lowered Preeclampsia Risk", searchIntent: "Clinical Deep-Dive" },
      { number: 37, titleFa: "پینوپودها (Pinopodes) و مولکول‌های چسبندگی اینتگرین و LIF چگونه جنین را به رحم متصل می‌کنند؟", titleEn: "Pinopodes, Integrin αvβ3 & LIF: The Molecular Lock-and-Key of Human Blastocyst Adhesion", searchIntent: "Informational" },
      { number: 38, titleFa: "تاثیر اندومتریوز و آدنومیوز بر پذیرش آندومتر و پروتکل سرکوب التهاب پیش از انتقال جنین", titleEn: "Endometriosis & Adenomyosis in IVF: Overcoming Progesterone Resistance Before Embryo Transfer", searchIntent: "High-Conversion" },
      { number: 39, titleFa: "انقباضات غیرطبیعی رحم (Uterine Peristalsis) در روز انتقال جنین و روش‌های آرام‌سازی میومتر", titleEn: "Myometrial Quiescence on Transfer Day: Preventing Fundo-Cervical Contractions From Expelling the Embryo", searchIntent: "Clinical Deep-Dive" },
      { number: 40, titleFa: "فشردگی آندومتر (Endometrial Compaction) پس از شروع پروژسترون نشانه چیست؟", titleEn: "Luteal Endometrial Compaction Before FET: A Non-Invasive Marker of Progesterone Sensitivity", searchIntent: "Informational" },
    ],
  },
  {
    id: "cluster-05-pcos-metabolic",
    categoryFa: "۵. سندرم تخمدان پلی‌کیستیک (PCOS) و باروری متابولیک (۱۰ موضوع)",
    categoryEn: "05. PCOS Phenotypes, Insulin Resistance & Metabolic Fertility (10 Topics)",
    targetPillarUrl: "/pcos-fertility",
    topics: [
      { number: 41, titleFa: "پارادوکس PCOS در IVF: چرا برداشت ۲۰ تخمک گاهی به جنین‌های باکیفیت تبدیل نمی‌شود؟", titleEn: "The PCOS Quantity-vs-Quality Paradox in IVF: Why High Egg Numbers Can Yield Few Blastocysts", searchIntent: "High-Conversion" },
      { number: 42, titleFa: "چهار فنوتیپ مختلف PCOS: آیا تنبلی تخمدان شما متابولیک، آدرنال، التهابی یا Lean PCOS است؟", titleEn: "Decoding the 4 PCOS Phenotypes: Insulin-Resistant, Lean, Adrenal (DHEA-S), and Inflammatory", searchIntent: "Informational" },
      { number: 43, titleFa: "علم دقیق میواینوزیتول و دی‌کایرو اینوزیتول (نسبت ۴۰ به ۱) و نقش آنزیم اپی‌مراز در تخمدان", titleEn: "The 40:1 Myo- to D-Chiro-Inositol Ratio Explained: Ovarian Epimerase and FSH Receptor Signaling", searchIntent: "Clinical Deep-Dive" },
      { number: 44, titleFa: "چرا در بیماران «PCOS لاغر» (Lean PCOS) دوز بالای دی‌کایرو اینوزیتول یا متفورمین می‌تواند مضر باشد؟", titleEn: "Why High-Dose D-Chiro-Inositol or Metformin Can Backfire in Women with Lean PCOS", searchIntent: "Clinical Deep-Dive" },
      { number: 45, titleFa: "نقش AMH بسیار بالا در توقف رشد فولیکول‌ها (Follicular Arrest) و راهکارهای شکستن قفل تخمک‌گذاری", titleEn: "How Excess AMH Inhibits Aromatase and Causes Follicular Arrest in PCOS—And How to Unlock It", searchIntent: "Clinical Deep-Dive" },
      { number: 46, titleFa: "گلوبولین متصل‌شونده به هورمون جنسی (SHBG): کلید کبدی پاکسازی تستوسترون آزاد در PCOS", titleEn: "Hepatic SHBG: The Master Metabolic Switch for Clearing Free Testosterone in PCOS Fertility", searchIntent: "Informational" },
      { number: 47, titleFa: "پیشگیری ۱۰۰ درصدی از سندرم تحریک بیش از حد تخمدان (OHSS) در بیماران PCOS کاندیدای IVF", titleEn: "Zero-OHSS Architecture: Safe Ovarian Stimulation and Metabolic Priming for High-AMH Patients", searchIntent: "High-Conversion" },
      { number: 48, titleFa: "چرا خطر سقط زودرس در PCOS بالاتر است؟ نقش کلیدی انسولین و فاکتور انعقادی PAI-1", titleEn: "Why Early Miscarriage Risk Is Elevated in PCOS: The Hyperinsulinemia–PAI-1 Connection", searchIntent: "Clinical Deep-Dive" },
      { number: 49, titleFa: "درمان مقاومت به لتروزول و کلومیفن در بیماران PCOS با بازمهندسی متابولیک ۸ هفته‌ای", titleEn: "Overcoming Letrozole & Clomiphene Resistance Through 8-Week Metabolic Ovarian Sensitization", searchIntent: "High-Conversion" },
      { number: 50, titleFa: "پروتکل تغذیه کرونوبیولوژیک و تمرینات عضلانی GLUT-4 برای احیای تخمک‌گذاری طبیعی در PCOS", titleEn: "Chrono-Nutrition & Skeletal Muscle GLUT-4 Activation for Spontaneous Ovulation in PCOS", searchIntent: "Informational" },
    ],
  },
  {
    id: "cluster-06-male-fertility",
    categoryFa: "۶. بهینه‌سازی باروری مردان، شکست DNA اسپرم و آندرولوژی (۱۰ موضوع)",
    categoryEn: "06. Male Fertility Optimization, Sperm DNA Fragmentation & Andrology (10 Topics)",
    targetPillarUrl: "/male-fertility",
    topics: [
      { number: 51, titleFa: "چرا آزمایش اسپرم معمولی (Semen Analysis) نیمی از علل ناباروری مردان را تشخیص نمی‌دهد؟", titleEn: "Why Standard Semen Analysis Misses 50% of Male Factor Infertility: Inside the Sperm Nucleus", searchIntent: "High-Conversion" },
      { number: 52, titleFa: "شاخص قطعه قطعه شدن DNA اسپرم (DFI / SDF) چیست و چرا حتی روش ICSI نمی‌تواند آن را دور بزند؟", titleEn: "Sperm DNA Fragmentation (DFI): Why ICSI Cannot Bypass Damaged Paternal Chromatin", searchIntent: "Clinical Deep-Dive" },
      { number: 53, titleFa: "اثر پدری متاخر (Late Paternal Effect): نقش ژنوم اسپرم در توقف جنین پس از روز سوم و سقط مکرر", titleEn: "The Late Paternal Effect: How Sperm Chromatin Drives Day-3 to Day-5 Blastocyst Development", searchIntent: "Clinical Deep-Dive" },
      { number: 54, titleFa: "چرخه ۷۴ روزه اسپرماتوژنز: چگونه در ۳ ماه یک نسل کاملاً جدید و سالم از اسپرم‌ها بسازیم؟", titleEn: "The 74-Day Spermatogenic Cycle: Engineering a New Cohort of Genetically Intact Sperm", searchIntent: "Informational" },
      { number: 55, titleFa: "استرس اکسیداتیو مایع منی (ROS) و پراکسیداسیون لیپیدی غشای اسپرم: تشخیص و درمان آنتی‌اکسیدانی", titleEn: "Seminal Oxidative Stress & Membrane Lipid Peroxidation: Targeted Antioxidant Defense Protocols", searchIntent: "Clinical Deep-Dive" },
      { number: 56, titleFa: "بسته‌بندی پروتامین کروماتین اسپرم و نقش حیاتی روی (Zinc)، سلنیوم و فولات فعال (5-MTHF)", titleEn: "Histone-to-Protamine Compaction: How Zinc, Selenium & Methylfolate Lock Sperm DNA Against Damage", searchIntent: "Informational" },
      { number: 57, titleFa: "میتوکندری‌های قطعه میانی اسپرم: ترکیب ال-کارنیتین، استیل-ال-کارنیتین و CoQ10 برای درمان کم‌تحرکی", titleEn: "Midpiece Mitochondrial Propulsion: L-Carnitine, Acetyl-L-Carnitine & Ubiquinol for Sperm Motility", searchIntent: "High-Conversion" },
      { number: 58, titleFa: "پروتکل علمی زمان‌بندی انزال (Short Abstinence) پیش از روز پانکچر برای کاهش فوری DFI اسپرم", titleEn: "Short-Interval Ejaculation Kinetics Before IVF Retrieval: Lowering Epididymal DNA Fragmentation", searchIntent: "Clinical Deep-Dive" },
      { number: 59, titleFa: "هیپوگنادیسم متابولیک در مردان: چگونه چربی شکمی و آنزیم آروماتاز تستوسترون را به استروژن تبدیل می‌کنند؟", titleEn: "Visceral Adiposity & Aromatase Excess in Men: Reversing Metabolic Secondary Hypogonadism", searchIntent: "Informational" },
      { number: 60, titleFa: "مقایسه روش‌های نوین انتخاب اسپرم در آزمایشگاه IVF: میکروفلوئیدیک (ZyMot)، MACS و PICSI", titleEn: "Microfluidic Sperm Sorting (ZyMot), MACS & PICSI: Selecting Low-DFI Sperm in the Embryology Lab", searchIntent: "High-Conversion" },
    ],
  },
  {
    id: "cluster-07-reproductive-physiology",
    categoryFa: "۷. فیزیولوژی تولیدمثل، غدد درون‌ریز و بیولوژی سلولی (۱۰ موضوع)",
    categoryEn: "07. Reproductive Physiology, Neuro-Endocrinology & Cellular Biology (10 Topics)",
    targetPillarUrl: "/fertility-research",
    topics: [
      { number: 61, titleFa: "محور هیپوتالاموس-هیپوفیز-تخمدان (HPO): چگونه ضرباهنگ GnRH سرنوشت سیکل قاعدگی را رقم می‌زند؟", titleEn: "The Hypothalamic-Pituitary-Ovarian (HPO) Pulse Generator: How GnRH Frequency Directs FSH vs. LH", searchIntent: "Informational" },
      { number: 62, titleFa: "گفتگوی دوطرفه سلول‌های گرانولوزا، کومولوس و اووسیت از طریق اتصالات شکاف‌دار (Gap Junctions)", titleEn: "Cumulus-Oocyte Complex Bidirectional Signaling: Metabolic Cooperativity Inside the Follicle", searchIntent: "Clinical Deep-Dive" },
      { number: 63, titleFa: "تفسیر علمی هورمون AMH: چرا عدد AMH تنها کمیت فولیکول‌ها را نشان می‌دهد نه کیفیت ژنتیکی تخمک؟", titleEn: "Understanding Anti-Müllerian Hormone (AMH): Why Ovarian Reserve Does Not Equal Egg Quality", searchIntent: "Informational" },
      { number: 64, titleFa: "فیزیولوژی فاز لوتئال و دسیدوالیزاسیون: چگونه جسم زرد بارداری را تا تشکیل جفت حفظ می‌کند؟", titleEn: "Corpus Luteum Physiology & Stromal Decidualization: Bridging Ovulation to Placentation", searchIntent: "Clinical Deep-Dive" },
      { number: 65, titleFa: "چگونه کورتیزول بالا و استرس مزمن از طریق نوروپپتید Kisspeptin محور باروری را مهار می‌کنند؟", titleEn: "Cortisol, Kisspeptin & The HPA-HPO Cross-Talk: How Neuro-Endocrine Stress Suppresses Fertility", searchIntent: "Informational" },
      { number: 66, titleFa: "نقش گیرنده‌های ویتامین D (VDR) در تخمدان، آندومتر و جفت بر استروئیدوژنز و تحمل ایمنی", titleEn: "Vitamin D Receptor (VDR) Signaling in Ovarian Steroidogenesis and Maternal Immune Tolerance", searchIntent: "Clinical Deep-Dive" },
      { number: 67, titleFa: "فیزیولوژی تیروئید در باروری: چرا TSH زیر ۲.۰ و تراز Free T4 برای بلوغ تخمک و مغز جنین حیاتی است؟", titleEn: "Thyroid Physiology in Reproduction: Why Optimal TSH (<2.0) and Free T4 Govern Implantation", searchIntent: "Informational" },
      { number: 68, titleFa: "تغییرات اپی‌ژنتیک و بازبرنامه‌ریزی متیلاسیون DNA در روزهای اول پس از لقاح", titleEn: "Epigenetic Reprogramming in Early Human Embryogenesis: Protecting the Periconceptional Methylome", searchIntent: "Clinical Deep-Dive" },
      { number: 69, titleFa: "نقش ماتریکس خارج سلولی و آنزیم‌های MMP در نفوذ کنترل‌شده تروفوبلاست به دیواره رحم", titleEn: "Extracellular Matrix Remodeling & MMP Balance During Trophoblast Invasion", searchIntent: "Clinical Deep-Dive" },
      { number: 70, titleFa: "مقایسه فیزیولوژی ریزومحیط بافتی و ریزومحیط رحمی از نگاه پژوهش‌های سلولی-مولکولی", titleEn: "Tissue Microenvironment Physiology: Lessons for Endometrial Angiogenesis and Immune Tolerance", searchIntent: "Informational" },
    ],
  },
  {
    id: "cluster-08-womens-health-pregnancy-prep",
    categoryFa: "۸. سلامت زنان، آمادگی پیش از بارداری و ذخایر زیستی (۱۰ موضوع)",
    categoryEn: "08. Women's Health, Preconception Optimization & Ovarian Longevity (10 Topics)",
    targetPillarUrl: "/ivf-readiness",
    topics: [
      { number: 71, titleFa: "برنامه ۶ ماهه آمادگی پیش از بارداری طبیعی: بهینه‌سازی ذخایر آهن، متیلاسیون و تیروئید", titleEn: "The 6-Month Preconception Blueprint: Optimizing Ferritin, Methylation & Endocrine Reserves", searchIntent: "Informational" },
      { number: 72, titleFa: "کمبود پنهان فریتین (ذخیره آهن زیر ۵۰) حتی بدون کم‌خونی و تاثیر آن بر عدم تخمک‌گذاری و خستگی", titleEn: "Non-Anemic Iron Deficiency (Low Ferritin <50): A Hidden Cause of Ovulatory Dysfunction", searchIntent: "Informational" },
      { number: 73, titleFa: "اندومتریوز و کیفیت تخمک: چگونه التهاب مایع صفاقی و استرس اکسیداتیو تخمدان را مهار کنیم؟", titleEn: "Endometriosis & Oocyte Competence: Shielding Follicles from Peritoneal Inflammatory Cytokines", searchIntent: "High-Conversion" },
      { number: 74, titleFa: "فریز تخمک هوشمند (Social & Medical Egg Freezing): چگونه قبل از فریز کردن، کیفیت تخمک‌ها را بالا ببریم؟", titleEn: "Preparing for Elective Egg Freezing: A 90-Day Protocol to Maximize Mature Oocyte Yield", searchIntent: "High-Conversion" },
      { number: 75, titleFa: "نارسایی زودرس تخمدان (POI) و کاهش شدید ذخیره تخمدانی: رویکردهای نوین حفظ باروری", titleEn: "Premature Ovarian Insufficiency (POI) & Severe DOR: Emerging Physiological Strategies", searchIntent: "Clinical Deep-Dive" },
      { number: 76, titleFa: "متابولیسم استروژن در کبد و روده (Estrobolome): چگونه غلبه استروژن بر لانه‌گزینی اثر می‌گذارد؟", titleEn: "Hepatic Phase-I/II Estrogen Detoxification & The Gut Estrobolome in Reproductive Health", searchIntent: "Informational" },
      { number: 77, titleFa: "بارداری سالم در سنین ۳۵ تا ۴۳ سال: جبران تغییرات سنی میتوکندری با علم بیوانرژتیک", titleEn: "Reproductive Longevity After 35: Counteracting Age-Related Oocyte Mitochondrial Decline", searchIntent: "High-Conversion" },
      { number: 78, titleFa: "آشنایی با پلی‌مورفیسم ژن MTHFR و چرا مصرف اسید فولیک مصنوعی برای برخی بانوان کافی نیست؟", titleEn: "MTHFR Polymorphisms in Fertility: Active L-Methylfolate (5-MTHF) vs. Synthetic Folic Acid", searchIntent: "Clinical Deep-Dive" },
      { number: 79, titleFa: "سلامت واژن و دهانه رحم: ارتباط عفونت‌های تحت‌بالینی با صعود التهاب به حفره آندومتر", titleEn: "Cervicovaginal Microbiota & Ascending Endometrial Inflammation: Pre-Conception Screening", searchIntent: "Informational" },
      { number: 80, titleFa: "پایش علمی ۱۲ هفته اول بارداری پس از درمان ناباروری: از بتای اولیه تا غربالگری سه‌ماهه اول", titleEn: "First-Trimester Physiological Surveillance After Assisted Conception: Protecting Early Placentation", searchIntent: "Informational" },
    ],
  },
  {
    id: "cluster-09-art-ivf-success-lifestyle",
    categoryFa: "۹. تکنولوژی‌های نوین کمک‌باروری (ART)، هوش مصنوعی و سبک زندگی باروری (۲۰ موضوع)",
    categoryEn: "09. Advanced ART, AI in Fertility & Evidence-Based Fertility Lifestyle (20 Topics)",
    targetPillarUrl: "/fertility-research",
    topics: [
      { number: 81, titleFa: "تست ژنتیک پیش از لانه‌گزینی (PGT-A): در چه زوج‌هایی واقعاً ضروری است و محدودیت‌های آن چیست؟", titleEn: "Preimplantation Genetic Testing for Aneuploidy (PGT-A): Clinical Indications, Mosaicism & Nuances", searchIntent: "Clinical Deep-Dive" },
      { number: 82, titleFa: "جنین‌های موزائیک (Mosaic Embryos): آیا جنین‌های دارای موزائیسم پتانسیل تبدیل به نوزاد سالم را دارند؟", titleEn: "Understanding Mosaic Blastocysts: Self-Correction Mechanisms and Clinical Transfer Outcomes", searchIntent: "Informational" },
      { number: 83, titleFa: "کاربرد هوش مصنوعی و انکوباتورهای Time-Lapse در پایش سینتیک تقسیمات جنینی و انتخاب بهترین بلاستوسیست", titleEn: "AI Morphokinetics & Time-Lapse Embryoscopy: How Data Science Selects the Most Viable Blastocyst", searchIntent: "Informational" },
      { number: 84, titleFa: "استراتژی Freeze-All در برابر انتقال جنین تازه: چرا در بسیاری از بیماران انتقال فریز شده موفق‌تر است؟", titleEn: "Freeze-All vs. Fresh Embryo Transfer: Why Separating Stimulation from Implantation Boosts Receptivity", searchIntent: "Clinical Deep-Dive" },
      { number: 85, titleFa: "هچینگ کمکی با لیزر (Assisted Hatching) و چسب جنین (EmbryoGlue): بررسی شواهد علمی", titleEn: "Laser Assisted Hatching & Hyaluronan-Enriched Transfer Media: Evidence-Based Evaluation", searchIntent: "Informational" },
      { number: 86, titleFa: "تغذیه مدیترانه‌ای ضدالتهابی ویژه باروری: درشت‌مغذی‌ها و ریزمغذی‌های کلیدی در ۹۰ روز پیش از IVF", titleEn: "The Anti-Inflammatory Fertility Nutrition Architecture: Macronutrients & Polyphenols Before IVF", searchIntent: "Informational" },
      { number: 87, titleFa: "نقش اسیدهای چرب امگا-۳ (EPA و DHA با خلوص بالا) در کاهش التهاب لگنی و بهبود سیالیت غشای گامت‌ها", titleEn: "Marine Omega-3 Fatty Acids (EPA/DHA) in Prostaglandin Modulation and Gamete Membrane Fluidity", searchIntent: "Informational" },
      { number: 88, titleFa: "معماری خواب عمیق، نور آبی شبانه و تاثیر مستقیم ریتم سیرکادین بر هورمون‌های FSH، LH و پرولاکتین", titleEn: "Circadian Hygiene & Nocturnal Light Exposure: How Deep Sleep Regulates Reproductive Hormones", searchIntent: "Informational" },
      { number: 89, titleFa: "نسخه ورزشی باروری: چرا تمرینات مقاومتی ملایم مفیدند اما ورزش‌های سنگین هوازی (HIIT افراطی) تخمک‌گذاری را مهار می‌کنند؟", titleEn: "Exercise Prescription for Fertility: Metabolic Resistance Training vs. Hypothalamic Overtraining", searchIntent: "Informational" },
      { number: 90, titleFa: "مدیریت وزن پیش از IVF: چرا رژیم‌های لاغری سریع و شوک‌دهنده در ماه قبل از پانکچر کیفیت تخمک را کاهش می‌دهند؟", titleEn: "Why Crash Dieting Immediately Before IVF Harms Oocytes—And How to Optimize Weight Safely", searchIntent: "Clinical Deep-Dive" },
      { number: 91, titleFa: "نقش کولین، فولات و ویتامین‌های گروه B در سلامت اپی‌ژنتیک جنین و تکامل سیستم عصبی", titleEn: "Choline, Betaine & Folate Synergy in Periconceptional Epigenetics and Neural Tube Development", searchIntent: "Informational" },
      { number: 92, titleFa: "ان-استیل سیستئین (NAC) و گلوتاتیون: سپر دفاعی سلولی در برابر استرس اکسیداتیو تخمدان و بیضه", titleEn: "N-Acetylcysteine (NAC) & Intracellular Glutathione Repletion in Male and Female Infertility", searchIntent: "Clinical Deep-Dive" },
      { number: 93, titleFa: "آلفا لیپوئیک اسید (ALA) و ال-کارنیتین در بهبود متابولیسم گلوکز و انرژی میتوکندری‌های تولیدمثلی", titleEn: "Alpha-Lipoic Acid & Carnitine Shuttle Systems in Reproductive Mitochondrial Bioenergetics", searchIntent: "Informational" },
      { number: 94, titleFa: "چگونه از تداخل دارویی و مصرف بی‌رویه مکمل‌های غیرضروری در طول سیکل IVF جلوگیری کنیم؟", titleEn: "Precision Nutraceutical Stewardship: Avoiding Supplement Overload During Active IVF Stimulation", searchIntent: "High-Conversion" },
      { number: 95, titleFa: "روان‌فیزیولوژی ناباروری: تاثیر تنظیم عصب واگ و کاهش اضطراب بر جریان خون شریان‌های رحمی", titleEn: "Autonomic Nervous System Balance: How Vagal Tone Reduction of Sympathetic Vasoconstriction Aids Uterine Flow", searchIntent: "Informational" },
      { number: 96, titleFa: "راهنمای کامل ۱۴ روز انتظار پس از انتقال جنین (Two-Week Wait): بایدها و نبایدهای علمی", titleEn: "The Science-Backed Guide to the Two-Week Wait After Embryo Transfer: Activity, Nutrition & Peace of Mind", searchIntent: "Informational" },
      { number: 97, titleFa: "چرا گرگان و استان گلستان به قطب جدید نوآوری علمی و توریسم سلامت باروری تبدیل شده است؟", titleEn: "Why the Fertility Innovation Institute in Gorgan Is Redefining Precision Reproductive Healthcare", searchIntent: "High-Conversion" },
      { number: 98, titleFa: "نحوه آماده‌سازی مدارک پزشکی برای جلسه کالبدشکافی سیکل IVF با دکتر محبوبه تاج‌الدینی", titleEn: "How to Prepare Your Medical & Embryology Dossier for a Consultation with Dr. Mahboubeh Tajaldini", searchIntent: "High-Conversion" },
      { number: 99, titleFa: "نقش هوش مصنوعی و پزشکی داده‌محور در شخصی‌سازی دوز داروها و زمان انتقال جنین در دهه آینده", titleEn: "Data-Driven Fertility Care: How AI Biomarker Modeling Will Transform IVF Over the Next Decade", searchIntent: "Informational" },
      { number: 100, titleFa: "مانیفست موسسه نوآوری باروری: چرا سفر باروری شما شایسته رویکردی فراتر از تکرار یک سیکل دیگر است؟", titleEn: "The Fertility Innovation Manifesto: Why Your Journey Deserves Science, Not Just Another Cycle", searchIntent: "High-Conversion" },
    ],
  },
];

// ============================================================================
// DELIVERABLE 01 & 10: COMPLETE SITEMAP & INTERNAL LINKING ARCHITECTURE
// ============================================================================
export const INSTITUTE_SITEMAP = [
  {
    path: "/",
    titleFa: "صفحه اصلی موسسه نوآوری باروری",
    titleEn: "Homepage — Fertility Innovation Institute",
    category: "Core Architecture",
    descFa: "۹ بخش جامع شامل هیرو، علل شکست درمان‌ها، متد ۳ ستونی، ۶ برنامه اصلی، تایم‌لاین باروری، پژوهش، تیم، سوالات متداول و تماس.",
    descEn: "9-section flagship homepage: Hero, Why Treatments Fail, 3-Pillar Method, 6 Core Programs, Journey Timeline, Research, Experts, FAQ & Contact.",
  },
  {
    path: "/ivf-readiness",
    titleFa: "برنامه آمادگی پیش از IVF",
    titleEn: "IVF Readiness Program",
    category: "Dedicated Service Page (01)",
    descFa: "مونوگراف ۱۰ بخشی بهینه‌سازی متابولیک، میتوکندریایی، تغذیه، خواب و مقاومت به انسولین ۹۰ روز پیش از IVF.",
    descEn: "10-section monograph on 90-day pre-IVF metabolic conditioning, insulin resistance reversal, sleep, and oocyte bioenergetics.",
  },
  {
    path: "/ivf-failure-analysis",
    titleFa: "کلینیک بررسی شکست مکرر IVF",
    titleEn: "Recurrent IVF Failure Clinic",
    category: "Dedicated Service Page (02)",
    descFa: "کالبدشکافی سیکل‌های ناموفق قبلی، ریشه‌یابی جنینی، آندومتری، ایمنی، انعقادی و متابولیک.",
    descEn: "10-section forensic root-cause investigation for repeated IVF failure, biochemical losses, and prior cycle reconstruction.",
  },
  {
    path: "/implantation-optimization",
    titleFa: "کلینیک بهینه‌سازی لانه‌گزینی",
    titleEn: "Implantation Optimization Clinic",
    category: "Dedicated Service Page (03)",
    descFa: "پذیرش آندومتر، درمان آندومتر نازک با PRP اتولوگ، خون‌رسانی داپلر Zone 3 و میکروبیوم رحم.",
    descEn: "10-section monograph on endometrial receptivity, Zone-3 Doppler perfusion, autologous PRP priming, and WOI synchronization.",
  },
  {
    path: "/pcos-fertility",
    titleFa: "کلینیک PCOS و باروری متابولیک",
    titleEn: "PCOS & Metabolic Fertility Clinic",
    category: "Dedicated Service Page (04)",
    descFa: "تعیین فنوتیپ PCOS، درمان مقاومت به انسولین، نسبت ۴۰:۱ اینوزیتول‌ها، احیای تخمک‌گذاری و پیشگیری از OHSS.",
    descEn: "10-section monograph on PCOS phenotyping, ovarian insulin sensitization, ovulation restoration, and OHSS-free IVF.",
  },
  {
    path: "/male-fertility",
    titleFa: "کلینیک بهینه‌سازی باروری مردان",
    titleEn: "Male Fertility Optimization Clinic",
    category: "Dedicated Service Page (05)",
    descFa: "کاهش شکست DNA اسپرم (DFI)، مهار استرس اکسیداتیو مایع منی و پروتکل ۷۴ روزه اسپرماتوژنز.",
    descEn: "10-section monograph on Sperm DNA Fragmentation (DFI) reduction, seminal ROS clearance, and 74-day chromatin conditioning.",
  },
  {
    path: "/fertility-research",
    titleFa: "مرکز پژوهش و نوآوری باروری",
    titleEn: "Research & Innovation Center",
    category: "Dedicated Service Page (06)",
    descFa: "مطالعات بالینی PRP و RIF، ثبت اختراعات WIPO، مدال‌های جهانی ژنو و سیلیکون‌ولی و هوش مصنوعی در باروری.",
    descEn: "10-section monograph on translational reproductive physiology, WIPO patents, clinical trials, and predictive AI telemetry.",
  },
  {
    path: "/mahboubeh-tajaldini",
    titleFa: "پروفایل علمی دکتر محبوبه تاج‌الدینی",
    titleEn: "Dr. Mahboubeh Tajaldini — Scientific Profile",
    category: "Key Scientist Monograph",
    descFa: "بیوگرافی علمی، دستاوردها، مقالات، محورهای پژوهشی، ثبت اختراعات WIPO، مدال‌های طلا، تایم‌لاین دانشگاهی و فلسفه علمی.",
    descEn: "World-class scientist profile: Biography, WIPO Patents, Geneva & Silicon Valley Gold Medals, Bologna Fellowship & Publications.",
  },
  {
    path: "/blog-strategy",
    titleFa: "استراتژی محتوا و ۱۰۰ موضوع تخصصی وبلاگ",
    titleEn: "100 Fertility & IVF Blog Topic Strategy",
    category: "Editorial & SEO Hub",
    descFa: "بانک کامل ۱۰۰ موضوع مقاله علمی و سئو محور در ۹ خوشه تخصصی با قابلیت جستجو و فیلتر.",
    descEn: "Interactive repository of 100 categorized blog topics across IVF, PRP, RIF, PCOS, Male Fertility, and Reproductive Physiology.",
  },
  {
    path: "/sitemap",
    titleFa: "نقشه جامع سایت، سئو و پرامپت‌های تصویر",
    titleEn: "Interactive Sitemap, SEO & AI Image Prompts",
    category: "Architecture & SEO Hub",
    descFa: "نقشه کامل صفحات، متاتگ‌های سئو، اسکیماهای JSON-LD و پرامپت‌های تولید تصاویر لوکس پزشکی.",
    descEn: "Complete architectural directory, SEO meta tags, Schema.org JSON-LD structures, and section-by-section luxury AI image prompts.",
  },
  {
    path: "/legacy-website",
    titleFa: "وبسایت خدمات مهاجرت نخبگان",
    titleEn: "Legacy Website (Complete Preserved Edition)",
    category: "Preserved Archive (Step 1)",
    descFa: "نگهداری ۱۰۰٪ تمامی بخش‌ها، مونوگراف‌ها، ماشین‌حساب‌ها و محتوای وبسایت خدمات مهاجرت نخبگان تاج گلوبال بدون هیچ‌گونه حذفی.",
    descEn: "100% unaltered preservation of all previous website sections, migration monographs, calculators, banners, and content.",
  },
];

// ============================================================================
// DELIVERABLE 08: LUXURY CINEMATIC MEDICAL AI IMAGE PROMPTS (ALL SECTIONS)
// Style: Photorealistic, Cinematic, Luxury, Dark Theme, Premium Editorial, Apple-like, Scientific, No text in images
// ============================================================================
export const LUXURY_AI_IMAGE_PROMPTS = [
  {
    section: "Homepage Section 01 — Hero (Your Fertility Journey Deserves More Than Another Treatment Cycle)",
    prompt:
      "Photorealistic, cinematic, luxury dark-theme editorial portrait of a distinguished female reproductive scientist in a tailored charcoal blazer standing against a matte #101216 obsidian studio backdrop with a subtle silver orbital light arc and delicate optical glass refraction, Apple and Aesop campaign studio lighting, 85mm f/1.4 lens, 8k resolution, scientific elegance, no text in images, no typography, no watermarks.",
  },
  {
    section: "Homepage Section 02 — Why Fertility Treatments Sometimes Fail (Biological Root Causes)",
    prompt:
      "Photorealistic, cinematic macro scientific glass visualization of a translucent crystalline sphere surrounded by delicate silver and warm champagne light filaments representing cellular metabolic, immune cytokine, and endometrial vascular pathways resting on dark brushed slate, Apple-like industrial precision, dark theme #101216, premium editorial lighting, 8k render, no text in images.",
  },
  {
    section: "Homepage Section 03 — Our Scientific Method (Three Pillars: ASSESS • OPTIMIZE • SUPPORT)",
    prompt:
      "Photorealistic, luxury dark-theme architectural composition of three precision-machined optical quartz monoliths aligned on a matte black obsidian surface, illuminated by a single silver laser beam refracting through internal micro-fluidic channels, Porsche Design and Apple keynote aesthetic, scientific minimalism, 8k macro photography, no text in images.",
  },
  {
    section: "Homepage Section 04 — Core Programs (6 Specialized Fertility Clinics Grid)",
    prompt:
      "Photorealistic, cinematic dark-luxury arrangement of six bespoke borosilicate glass scientific vessels and titanium micro-instruments arranged in a minimalist geometric grid on a dark slate laboratory table, subtle bioluminescent silver and warm gold rim lighting, Aesop meets modern reproductive biomedicine, 8k resolution, no text in images.",
  },
  {
    section: "Homepage Section 05 — The Fertility Optimization Journey (5-Stage Visual Timeline)",
    prompt:
      "Photorealistic, cinematic dark-mode visualization of a continuous luminous platinum optical fiber flowing through five translucent crystal nodes on a matte obsidian surface, symbolizing a progressive biological transformation from cellular assessment to embryonic vitality, Framer and Linear luxury aesthetic, 8k macro render, no text in images.",
  },
  {
    section: "Homepage Section 06 — Research & Innovation (WIPO Patent, IFIA, Geneva & Silicon Valley Gold Medals)",
    prompt:
      "Photorealistic, luxury dark-theme still life of two brushed 24k gold scientific innovation medallions resting beside a precision glass microfluidic chip and a crystalline DNA double-helix sculpture on a dark architectural stone pedestal, museum-grade spotlighting, Apple Park scientific aesthetic, 8k, no text in images.",
  },
  {
    section: "Homepage Section 07 & /mahboubeh-tajaldini — Dr. Mahboubeh Tajaldini (Scientist & Inventor Profile)",
    prompt:
      "Photorealistic, cinematic medium-format editorial portrait of a senior female research director and biomedical inventor in a dark architectural laboratory with out-of-focus optical glass instrumentation and soft silver volumetric lighting in the background, Leica S3 medium format look, luxury editorial magazine quality, dark theme, no text in images.",
  },
  {
    section: "Homepage Section 08 — Frequently Asked Questions (Scientific Clarity & Patient Guidance)",
    prompt:
      "Photorealistic, minimalist dark-luxury architectural study of acoustic smoked-glass panels and warm diffused tungsten-silver ambient light in a private executive consultation sanctuary, Aesop and Porsche studio architecture, calm serene atmosphere, 8k photography, no text in images.",
  },
  {
    section: "Homepage Section 09 — Final CTA (Start With Clarity, Not Another Guess)",
    prompt:
      "Photorealistic, cinematic macro shot of a single luminous crystal lens focusing scattered silver light rays into one coherent, brilliant beam across a matte black obsidian horizon, symbolizing diagnostic clarity and scientific precision, Apple-like product photography, 8k, no text in images.",
  },
  {
    section: "Service Page 01 (/ivf-readiness) — IVF Readiness Program (90-Day Pre-IVF Bio-Optimization)",
    prompt:
      "Photorealistic, ultra-luxury macro scientific glass sculpture of a luminous human oocyte surrounded by golden-silver mitochondrial ATP light filaments and crystalline follicular fluid droplets on a matte obsidian dark slate surface, shallow depth of field, Apple-like scientific visualization, 8k, no text in images.",
  },
  {
    section: "Service Page 02 (/ivf-failure-analysis) — Recurrent IVF Failure Clinic (Forensic RIF Analysis)",
    prompt:
      "Photorealistic, architectural dark-mode scientific visualization of a translucent obsidian glass prism refracting a single silver light beam into precise genomic, immunological, and cellular diagnostic layers, Porsche Design meets biomedical research institute, 8k macro render, no text in images.",
  },
  {
    section: "Service Page 03 (/implantation-optimization) — Implantation Optimization & PRP Microenvironment",
    prompt:
      "Photorealistic, cinematic macro visualization of a luminous bio-architectural lattice representing endometrial spiral artery networks, autologous growth-factor vesicles, and platinum cytokine signaling pathways on a deep obsidian glass surface, soft warm champagne bioluminescence, 8k, no text in images.",
  },
  {
    section: "Service Page 04 (/pcos-fertility) — PCOS & Metabolic Fertility Clinic (Endocrine Synchronization)",
    prompt:
      "Photorealistic, luxury dark-mode scientific visualization of interconnected optical glass nodes and golden-platinum waveform harmonics representing the Hypothalamic-Pituitary-Ovarian and insulin-signaling axes on a deep obsidian surface, 8k photorealistic render, no text in images.",
  },
  {
    section: "Service Page 05 (/male-fertility) — Male Fertility Optimization Clinic (Chromatin & DFI Repair)",
    prompt:
      "Photorealistic, ultra-luxury dark-mode scientific sculpture of a double-stranded DNA helix encased in crystalline toroid protamine rings with silver-gold bioluminescent energy vectors on a matte black obsidian pedestal, 8k macro photography, no text in images.",
  },
  {
    section: "Service Page 06 (/fertility-research) — Research & Innovation Center (Translational Physiology)",
    prompt:
      "Photorealistic, futuristic dark-luxury biomedical research installation featuring precision optical glass microfluidic chips, cellular microenvironment models, and brushed anodized titanium instruments on a dark slate table, Apple Park scientific aesthetic, 8k, no text in images.",
  },
];

