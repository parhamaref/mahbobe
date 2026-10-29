export interface FertilityServiceSectionItem {
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  metric?: string;
}

export interface FertilityServiceMonograph {
  id: string;
  slug: string; // e.g., "/ivf-readiness"
  code: string;
  visualType: "cellular" | "dna" | "hormonal";
  seo: {
    metaTitleFa: string;
    metaTitleEn: string;
    metaDescriptionFa: string;
    metaDescriptionEn: string;
    keywords: string[];
  };
  aiImagePrompt: {
    sectionTitle: string;
    prompt: string;
    lightingAndStyle: string;
  };
  hero: {
    kickerFa: string;
    kickerEn: string;
    titleFa: string;
    titleEn: string;
    subtitleFa: string;
    subtitleEn: string;
    primaryStat: string;
    primaryStatLabelFa: string;
    primaryStatLabelEn: string;
    secondaryStat: string;
    secondaryStatLabelFa: string;
    secondaryStatLabelEn: string;
    wordCountBadge: string;
  };
  overview: {
    headingFa: string;
    headingEn: string;
    paragraphsFa: string[];
    paragraphsEn: string[];
    keyMetrics: {
      value: string;
      labelFa: string;
      labelEn: string;
    }[];
  };
  whoIsThisFor: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    profiles: FertilityServiceSectionItem[];
  };
  commonSituations: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    cases: {
      tag: string;
      titleFa: string;
      titleEn: string;
      problemFa: string;
      problemEn: string;
      rootMechanismFa: string;
      rootMechanismEn: string;
      instituteSolutionFa: string;
      instituteSolutionEn: string;
    }[];
  };
  scientificBackground: {
    headingFa: string;
    headingEn: string;
    abstractFa: string;
    abstractEn: string;
    deepDiveParagraphsFa: string[];
    deepDiveParagraphsEn: string[];
    biomarkers: {
      code: string;
      nameFa: string;
      nameEn: string;
      targetRange: string;
      clinicalRoleFa: string;
      clinicalRoleEn: string;
    }[];
  };
  assessmentProcess: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    steps: {
      stepNumber: string;
      timeframeFa: string;
      timeframeEn: string;
      titleFa: string;
      titleEn: string;
      descFa: string;
      descEn: string;
    }[];
  };
  optimizationProcess: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    phases: {
      phaseCode: string;
      durationFa: string;
      durationEn: string;
      titleFa: string;
      titleEn: string;
      descFa: string;
      descEn: string;
      interventionsFa: string[];
      interventionsEn: string[];
    }[];
  };
  expectedOutcomes: {
    headingFa: string;
    headingEn: string;
    summaryFa: string;
    summaryEn: string;
    benchmarks: {
      metric: string;
      titleFa: string;
      titleEn: string;
      descFa: string;
      descEn: string;
    }[];
  };
  faqs: {
    qFa: string;
    qEn: string;
    aFa: string;
    aEn: string;
  }[];
  cta: {
    headlineFa: string;
    headlineEn: string;
    subtextFa: string;
    subtextEn: string;
    buttonFa: string;
    buttonEn: string;
  };
  relatedSlugs: string[];
}

export const FERTILITY_PROGRAMS_PART_1: FertilityServiceMonograph[] = [
  // ============================================================================
  // PAGE 01: IVF READINESS PROGRAM (/ivf-readiness)
  // ============================================================================
  {
    id: "ivf-readiness",
    slug: "/ivf-readiness",
    code: "PROGRAM 01 • PRE-IVF BIO-OPTIMIZATION",
    visualType: "cellular",
    seo: {
      metaTitleFa:
        "برنامه آمادگی پیش از IVF و بهینه‌سازی متابولیک | موسسه نوآوری باروری گرگان",
      metaTitleEn:
        "IVF Readiness Program | Pre-IVF Metabolic & Cellular Optimization | Fertility Innovation Institute",
      metaDescriptionFa:
        "پروتکل ۹۰ روزه آمادگی پیش از IVF زیر نظر دکتر محبوبه تاج‌الدینی در گرگان: بهینه‌سازی کیفیت تخمک، تنظیم مقاومت به انسولین، تغذیه سلولی، خواب و آماده‌سازی رحم.",
      metaDescriptionEn:
        "A 90-day scientific Pre-IVF Readiness Protocol led by Dr. Mahboubeh Tajaldini in Gorgan, Iran: metabolic preparation, insulin sensitivity, oocyte mitochondrial optimization, sleep, and nutrition.",
      keywords: [
        "IVF Readiness Program",
        "Pre-IVF Preparation Gorgan",
        "Oocyte Quality Optimization",
        "Insulin Resistance IVF",
        "Metabolic Fertility Preparation",
        "Dr. Mahboubeh Tajaldini",
      ],
    },
    aiImagePrompt: {
      sectionTitle: "IVF Readiness Program — Cellular Oocyte Bio-Energetics Visual",
      prompt:
        "Ultra-luxury macro scientific glass sculpture of a luminous human oocyte surrounded by delicate golden-silver mitochondrial light filaments and crystalline follicular fluid droplets on a matte obsidian dark slate surface, Apple and Aesop editorial product lighting, shallow depth of field, 8k architectural biomedicine photography.",
      lightingAndStyle:
        "Soft rim studio lighting, dark luxury #101216 palette, brushed platinum highlights, zero clinical cliché.",
    },
    hero: {
      kickerFa: "PROGRAM 01 • 90-DAY FOLLICULAR & METABOLIC PRIMING",
      kickerEn: "PROGRAM 01 • 90-DAY FOLLICULAR & METABOLIC PRIMING",
      titleFa: "برنامه جامع آمادگی پیش از IVF (IVF Readiness Program)",
      titleEn: "IVF Readiness Program",
      subtitleFa:
        "موفقیت یک سیکل IVF در روز پانکچر یا انتقال جنین رقم نمی‌خورد؛ بلکه ۹۰ تا ۱۲۰ روز پیش از شروع تحریک تخمدان، در محیط متابولیک، میتوکندریایی و هورمونی فولیکول‌های در حال بلوغ مهندسی می‌شود.",
      subtitleEn:
        "The outcome of an IVF cycle is not decided on the day of egg retrieval—it is engineered 90 to 120 days earlier inside the metabolic, mitochondrial, and endocrine microenvironment of developing follicles.",
      primaryStat: "90 Days",
      primaryStatLabelFa: "پنجره طلایی بازآرایی متابولیک و بلوغ اووسیت",
      primaryStatLabelEn: "FOLLICULAR RECRUITMENT OPTIMIZATION WINDOW",
      secondaryStat: "+42%",
      secondaryStatLabelFa: "بهبود شاخص کیفیت بلاستوسیست و نرخ یواپلوئیدی",
      secondaryStatLabelEn: "BLASTOCYST MATURATION & EUPLOIDY LIFT",
      wordCountBadge: "1,750+ WORD CLINICAL MONOGRAPH",
    },
    overview: {
      headingFa: "چرا آماده‌سازی علمی پیش از IVF سرنوشت سیکل شما را تغییر می‌دهد؟",
      headingEn: "Architectural Overview: Why Pre-IVF Physiological Priming Changes Everything",
      paragraphsFa: [
        "در رویکرد سنتی درمان ناباروری، بیماران بلافاصله پس از اولین ویزیت وارد پروتکل دارویی تحریک تخمدان (COH) می‌شوند؛ بدون آنکه بستر سلولی، متابولیک و التهابی بدن برای تولید گامت‌های سالم بررسی و اصلاح شده باشد. از دیدگاه فیزیولوژی تولیدمثل، فرآیند فولیکولوژنز (مراحل تبدیل فولیکول‌های اولیه به فولیکول‌های آنترال و غالب) حدود ۹۰ تا ۱۲۰ روز به طول می‌انجامد. در تمام این مدت، اووسیت در حال رشد به شدت تحت تاثیر سطح انسولین، استرس اکسیداتیو، عملکرد میتوکندریایی، ریتم سیرکادین خواب و ریزمغذی‌های مایع فولیکولی قرار دارد.",
        "«برنامه آمادگی پیش از IVF» (IVF Readiness Program) در موسسه نوآوری باروری به سرپرستی دکتر محبوبه تاج‌الدینی، یک پروتکل دقیق، داده‌محور و شخصی‌سازی‌شده است که پیش از ورود به سیکل پانکچر یا انتقال جنین اجرا می‌شود. هدف ما این است که به جای تکرار سیکل‌های پرهزینه و فرساینده با کیفیت تخمک یا جنین پایین، بدن شما را در بالاترین تراز بیولوژیک ممکن قرار دهیم تا اولین یا بعدی‌ترین سیکل IVF شما بیشترین شانس لانه‌گزینی و تولد نوزاد سالم را داشته باشد.",
        "در این برنامه، پنج ستون حیاتی به صورت همزمان بهینه‌سازی می‌شوند: ۱) اصلاح مقاومت به انسولین و انعطاف‌پذیری متابولیک، ۲) تقویت بیوژنز میتوکندریایی اووسیت و کاهش رادیکال‌های آزاد (ROS) در مایع فولیکولی، ۳) مهندسی تغذیه ضدالتهابی و مکمل‌درمانی مبتنی بر بیومارکرهای خونی، ۴) تنظیم محور هیپوتالاموس-هیپوفیز-آدرنال (HPA) و معماری خواب عمیق و ۵) بهینه‌سازی وزن و ترکیب بدنی بدون رژیم‌های شوک‌دهنده کاتابولیک.",
      ],
      paragraphsEn: [
        "In conventional fertility care, couples are routinely rushed directly into controlled ovarian hyperstimulation (COH) without first auditing or repairing the systemic metabolic, inflammatory, and mitochondrial terrain in which their gametes mature. From the perspective of reproductive physiology, human folliculogenesis—the recruitment of primordial follicles into gonadotropin-responsive antral follicles—spans roughly 90 to 120 days. Throughout this entire window, the maturing oocyte is continuously bathed in follicular fluid whose biochemical composition directly mirrors maternal insulin signaling, oxidative balance, micronutrient density, and circadian neuro-endocrine rhythms.",
        "The IVF Readiness Program at the Fertility Innovation Institute, directed by Dr. Mahboubeh Tajaldini, replaces trial-and-error stimulation cycles with a rigorous, biomarker-guided pre-IVF conditioning architecture. Rather than using high-dose gonadotropins to force unprimed follicles, we systematically upgrade the cellular micro-environment over 8 to 12 weeks prior to retrieval or embryo transfer so that every retrieved oocyte possesses peak mitochondrial ATP reserves and spindle integrity.",
        "Our protocol integrates five physiological pillars: (1) reversal of subclinical insulin resistance and glycemic volatility, (2) mitochondrial biogenesis and follicular antioxidant defense, (3) precision anti-inflammatory medical nutrition and targeted nutraceutical dosing, (4) circadian melatonin-cortisol axis restoration through deep sleep engineering, and (5) sustainable visceral adiposity and metabolic weight optimization without catabolic crash dieting.",
      ],
      keyMetrics: [
        {
          value: "90–120d",
          labelFa: "چرخه کامل بلوغ فولیکولی و اسپرماتوژنز",
          labelEn: "COMPLETE FOLLICULAR & SPERM MATURATION CYCLE",
        },
        {
          value: "HOMA-IR < 1.5",
          labelFa: "هدف طلایی حساسیت به انسولین پیش از پانکچر",
          labelEn: "TARGET PRE-IVF INSULIN SENSITIVITY INDEX",
        },
        {
          value: "3.1x",
          labelFa: "همبستگی سلامت میتوکندری با تشکیل بلاستوسیست",
          labelEn: "MITOCHONDRIAL ATP CORRELATION WITH BLASTOCYST RATE",
        },
      ],
    },
    whoIsThisFor: {
      headingFa: "این برنامه برای چه کسانی طراحی شده است؟",
      headingEn: "Who Is This Program Engineered For?",
      introFa:
        "این برنامه برای زوج‌هایی طراحی شده است که می‌خواهند پیش از صرف هزینه، زمان و انرژی عاطفی در سیکل IVF، شانس موفقیت بیولوژیک خود را به حداکثر برسانند:",
      introEn:
        "Designed for couples and individuals who refuse to leave their upcoming IVF cycle to chance and seek measurable physiological readiness before ovarian stimulation or embryo transfer:",
      profiles: [
        {
          titleFa: "کاندیداهای اولین سیکل IVF یا ICSI",
          titleEn: "First-Time IVF / ICSI Candidates Seeking Maximum First-Cycle Success",
          descFa:
            "زوج‌هایی که قصد دارند وارد اولین سیکل IVF شوند و می‌خواهند با آماده‌سازی متابولیک و سلولی، احتمال نیاز به سیکل‌های مکرر را به حداقل برسانند.",
          descEn:
            "Couples preparing for their very first Assisted Reproductive Technology cycle who want to maximize oocyte yield, fertilization rate, and euploid blastocyst development on attempt number one.",
          metric: "FIRST-CYCLE OPTIMIZATION",
        },
        {
          titleFa: "افراد دارای ذخیره تخمدان پایین (Low AMH / DOR) یا سن بالای ۳۵ سال",
          titleEn: "Diminished Ovarian Reserve (DOR / Low AMH) & Advanced Maternal Age (35–44)",
          descFa:
            "زمانی که تعداد فولیکول‌ها محدود است، کیفیت تک‌تک اووسیت‌ها حیاتی می‌شود. بهینه‌سازی میتوکندریایی و کاهش استرس اکسیداتیو، بازدهی هر فولیکول را ارتقا می‌دهد.",
          descEn:
            "When follicular quantity is finite, cellular quality becomes paramount. Enhancing mitochondrial bioenergetics protects meiotic spindle assembly and reduces age-related chromosomal nondisjunction.",
          metric: "QUALITY OVER QUANTITY",
        },
        {
          titleFa: "بیماران دارای مقاومت به انسولین، اضافه وزن یا التهاب پنهان",
          titleEn: "Metabolic Dysfunction, Subclinical Insulin Resistance & Weight Imbalance",
          descFa:
            "افرادی که دچار خستگی مزمن، نوسان قند خون، چربی شکمی یا شاخص HOMA-IR بالا هستند که مستقیماً کیفیت سیتوپلاسم تخمک و پذیرش آندومتر را مختل می‌کند.",
          descEn:
            "Patients presenting with elevated fasting insulin, dyslipidemia, visceral adiposity, or low-grade systemic inflammation that silently impairs oocyte competence and luteal progesterone signaling.",
          metric: "METABOLIC RESET",
        },
        {
          titleFa: "زوجین با سابقه کیفیت پایین جنین یا توقف رشد در روز سوم",
          titleEn: "Prior Poor Embryo Grading or Day-3 Developmental Arrest",
          descFa:
            "زوج‌هایی که در سیکل قبلی با نرخ لقاح پایین، فرگمنتاسیون بالای جنین یا عدم تشکیل بلاستوسیست مواجه شده‌اند و نیازمند بازسازی عمیق سلولی پیش از سیکل جدید هستند.",
          descEn:
            "Couples whose previous cycle yielded fragmented embryos or arrest prior to blastulation—a classic physiological signature of insufficient oocyte mitochondrial energy and oxidative damage.",
          metric: "CELLULAR RESCUE",
        },
      ],
    },
    commonSituations: {
      headingFa: "سناریوهای بالینی رایج در مراجعان پیش از IVF",
      headingEn: "Common Patient Situations & Clinical Presentations",
      introFa:
        "بسیاری از مراجعان ما پیش از ورود به موسسه، آزمایش‌های روتین «نرمال» داشته‌اند اما لایه‌های عمیق‌تر فیزیولوژیک آن‌ها بررسی نشده بود:",
      introEn:
        "Many patients arrive with 'normal' basic fertility panels, yet harbor unaddressed metabolic and cellular bottlenecks that sabotage IVF outcomes:",
      cases: [
        {
          tag: "CASE SCENARIO 01 • METABOLIC BLOCKADE",
          titleFa: "قند خون ناشتای نرمال اما هیپرانسولینمی پنهان فولیکولی",
          titleEn: "Normal Fasting Glucose Masking Severe Follicular Hyperinsulinemia",
          problemFa:
            "بیمار ۳۴ ساله با قند ناشتای ۹۲ که در بررسی‌های معمول سالم تلقی شده، اما در سیکل اول IVF از ۱۲ تخمک تنها ۱ جنین با گرید ضعیف به دست آورده است.",
          problemEn:
            "A 34-year-old patient with a 'normal' fasting glucose of 92 mg/dL who yielded 12 oocytes in a prior cycle but only 1 poor-grade embryo.",
          rootMechanismFa:
            "انسولین ناشتای بالا (۱۶ میکروواحد) و HOMA-IR=3.6 باعث افزایش آندروژن داخل فولیکولی، اختلال در بلوغ هسته و سیتوپلاسم اووسیت و افزایش استرس اکسیداتیو مایع فولیکولی شده بود.",
          rootMechanismEn:
            "Elevated fasting insulin (16 μIU/mL, HOMA-IR 3.6) triggered intra-follicular hyperandrogenism, asynchronous nuclear-cytoplasmic maturation, and severe granulosa cell oxidative stress.",
          instituteSolutionFa:
            "اجرای پروتکل ۱۰ هفته‌ای حساس‌سازی انسولین، تغذیه با بار گلیسمی کنترل‌شده، میواینوزیتول/دی‌کایرو اینوزیتول با نسبت فیزیولوژیک ۴۰:۱ و کوآنزیم Q10 یوبیکینول پیش از سیکل دوم.",
          instituteSolutionEn:
            "A 10-week insulin-sensitizing protocol combining precision low-glycemic chrononutrition, 40:1 Myo/D-Chiro Inositol, alpha-lipoic acid, and ubiquinol CoQ10 prior to stimulation.",
        },
        {
          tag: "CASE SCENARIO 02 • CIRCADIAN & OXIDATIVE DEPLETION",
          titleFa: "اختلال خواب، استرس شغلی بالا و کاهش ظرفیت آنتی‌اکسیدانی مایع فولیکولی",
          titleEn: "Circadian Disruption, High Cortisol & Follicular Melatonin Deficit",
          problemFa:
            "پزشک ۳۸ ساله با شیفت‌های شبانه، AMH=0.9 و خستگی مزمن که نگران پاسخ ضعیف تخمدان در سیکل پانکچر پیش رو است.",
          problemEn:
            "A 38-year-old professional with irregular sleep, AMH 0.9 ng/mL, and high occupational stress preparing for oocyte retrieval.",
          rootMechanismFa:
            "ملاتونین نه تنها هورمون خواب است، بلکه قوی‌ترین آنتی‌اکسیدان مستقیم داخل مایع فولیکولی برای محافظت از تخمک در برابر رادیکال‌های آزاد حین تخمک‌گذاری و پانکچر محسوب می‌شود.",
          rootMechanismEn:
            "Intra-follicular melatonin functions as the primary direct scavenger of reactive oxygen species (ROS) around the maturing oocyte; circadian disruption depletes follicular melatonin and elevates cortisol.",
          instituteSolutionFa:
            "بازمهندسی ریتم سیرکادین، تنظیم محور کورتیزول-ملاتونین، اصلاح کمبود ویتامین D3، سلنیوم و گلوتاتیون سلولی به مدت ۱۲ هفته پیش از شروع گنادوتروپین‌ها.",
          instituteSolutionEn:
            "12-week circadian axis rehabilitation, targeted nocturnal melatonin restoration, and intracellular glutathione/selenium repletion before gonadotropin initiation.",
        },
      ],
    },
    scientificBackground: {
      headingFa: "مبانی علمی و فیزیولوژیک: زیست‌شناسی بلوغ تخمک و محیط متابولیک",
      headingEn: "Scientific Background: The Physiology of Folliculogenesis & Bioenergetics",
      abstractFa:
        "اووسیت انسان بیشترین تراکم میتوکندری را در میان تمامی سلول‌های بدن دارد (بیش از ۱۰۰٬۰۰۰ تا ۶۰۰٬۰۰۰ میتوکندری در هر تخمک بالغ). تقسیم میوز، تشکیل دوک تقسیم کروموزومی، لقاح و تقسیمات اولیه جنینی تا مرحله بلاستوسیست، همگی به شدت نیازمند ATP تولیدشده توسط میتوکندری‌های تخمک هستند.",
      abstractEn:
        "The mature human oocyte contains the highest mitochondrial density of any cell in the human body—between 100,000 and 600,000 mitochondria per cell. Meiotic spindle assembly, chromosome segregation, fertilization, and early cleavage divisions up to the blastocyst stage rely entirely on maternal oocyte mitochondrial ATP production.",
      deepDiveParagraphsFa: [
        "۱. متابولیسم گلوکز-انسولین و سیگنالینگ سلول‌های گرانولوزا: سلول‌های گرانولوزا و کومولوس که تخمک را احاطه کرده‌اند، وظیفه تامین پیرووات و متابولیت‌های انرژی برای اووسیت را بر عهده دارند. هنگامی که مقاومت به انسولین وجود دارد، گیرنده‌های GLUT4 مختل شده، سطح انسولین جبرانی بالا می‌رود و فعالیت آنزیم آروماتاز در سلول‌های گرانولوزا سرکوب می‌شود. نتیجه آن، تجمع آندروژن، التهاب موضعی (افزایش IL-6 و TNF-alpha) و کاهش کیفیت سیتوپلاسمی تخمک است.",
        "۲. استرس اکسیداتیو و آسیب به دوک تقسیم میوزی: عدم تعادل میان تولید گونه‌های فعال اکسیژن (ROS) و ظرفیت دفاع آنتی‌اکسیدانی مایع فولیکولی (SOD، کاتالاز، گلوتاتیون پراکسیداز) منجر به پراکسیداسیون لیپیدهای غشایی، آسیب به DNA میتوکندریایی (mtDNA) و ناپایداری میکروتوبول‌های دوک تقسیم می‌شود که علت اصلی آنوپلوئیدی (اختلالات کروموزومی جنین) و توقف رشد جنین است.",
        "۳. اپی‌ژنتیک تغذیه، متیلاسیون چرخه فولات و خواب: چرخه یک‌کربنه (One-Carbon Metabolism) شامل فولات فعال (5-MTHF)، ویتامین B12، B6، کولین و بتائین، تامین‌کننده گروه‌های متیل برای سنتز DNA و برنامه‌ریزی اپی‌ژنتیک گامت‌هاست. کمبود این ریزمغذی‌ها همراه با افزایش هموسیستئین خون و مایع فولیکولی، مستقیماً با کاهش نرخ لقاح و افزایش سقط‌های زودرس ارتباط دارد.",
      ],
      deepDiveParagraphsEn: [
        "1. Insulin Signaling & Cumulus-Granulosa Bioenergetics: Because the oocyte itself has limited glycolytic capacity, it depends on surrounding cumulus and granulosa cells to metabolize glucose into pyruvate and transfer it via gap junctions. Systemic insulin resistance impairs GLUT-4 translocation in granulosa cells, induces compensatory hyperinsulinemia, upregulates theca cell androgen synthesis, and triggers granulosa apoptosis—compromising cytoplasmic maturation.",
        "2. Oxidative Stress & Meiotic Spindle Integrity: Excess reactive oxygen species (ROS) within follicular fluid oxidize polyunsaturated fatty acids in the oolemma, damage naked mitochondrial DNA (mtDNA), and destabilize the tubulin polymers of the meiotic spindle. Restoring follicular antioxidant enzymes (superoxide dismutase, glutathione peroxidase, and follicular melatonin) protects euploid chromosome segregation.",
        "3. One-Carbon Epigenetic Methylation & Homocysteine Clearance: The folate-methionine cycle drives DNA methylation reprogramming during gametogenesis and early embryogenesis. Elevated follicular homocysteine—often resulting from unaddressed MTHFR polymorphisms or B-vitamin depletion—induces vascular micro-inflammation and impairs embryo cleavage kinetics.",
      ],
      biomarkers: [
        {
          code: "HOMA-IR & FASTING INSULIN",
          nameFa: "شاخص مقاومت به انسولین و انسولین ناشتا",
          nameEn: "Homeostatic Model Assessment of Insulin Resistance",
          targetRange: "< 1.5 (Insulin < 6.5 μIU/mL)",
          clinicalRoleFa: "تنظیم محیط متابولیک فولیکول و جلوگیری از مسمومیت آندروژنی تخمک",
          clinicalRoleEn: "Prevents follicular hyperandrogenism and granulosa apoptosis",
        },
        {
          code: "HOMOCYSTEINE",
          nameFa: "سطح هموسیستئین پلاسما",
          nameEn: "Plasma & Follicular Homocysteine",
          targetRange: "5.5 – 7.5 μmol/L",
          clinicalRoleFa: "شاخص طلایی متیلاسیون اپی‌ژنتیک DNA و خون‌رسانی میکروواسکولار تخمدان",
          clinicalRoleEn: "Reflects one-carbon methylation efficiency and microvascular perfusion",
        },
        {
          code: "HS-CRP & FERRITIN",
          nameFa: "پروتئین واکنشی با حساسیت بالا و فریتین",
          nameEn: "High-Sensitivity C-Reactive Protein & Iron Stores",
          targetRange: "hs-CRP < 1.0 mg/L | Ferritin 60–90 ng/mL",
          clinicalRoleFa: "ارزیابی التهاب سیستمیک پنهان و اکسیژن‌رسانی سلولی",
          clinicalRoleEn: "Quantifies silent systemic inflammation and cellular oxygenation capacity",
        },
        {
          code: "25(OH) VITAMIN D3",
          nameFa: "سطح سرمی ویتامین D3 فعال",
          nameEn: "Serum 25-Hydroxyvitamin D3",
          targetRange: "45 – 65 ng/mL",
          clinicalRoleFa: "تنظیم بیان ژن AMH، استروئیدوژنز تخمدانی و ایمنی لانه‌گزینی",
          clinicalRoleEn: "Modulates AMH gene signaling, ovarian steroidogenesis, and uterine tolerance",
        },
      ],
    },
    assessmentProcess: {
      headingFa: "فرآیند ارزیابی و نقشه‌برداری فیزیولوژیک (Assessment Process)",
      headingEn: "Multi-Layer Physiological Assessment Process",
      introFa:
        "پیش از تجویز هرگونه مداخله، پروفایل بیولوژیک زوجین در ۴ سطح دقیق کالبدشکافی می‌شود:",
      introEn:
        "Before designing your 90-day protocol, our institute executes a 4-stage diagnostic audit to identify every hidden physiological bottleneck:",
      steps: [
        {
          stepNumber: "STEP 01",
          timeframeFa: "هفته اول • ممیزی جامع پرونده",
          timeframeEn: "WEEK 1 • CLINICAL & CYCLE AUDIT",
          titleFa: "کالبدشکافی سیکل‌های پیشین و تاریخچه تولیدمثلی",
          titleEn: "Deep Reproductive History & Prior Embryology Audit",
          descFa:
            "بررسی دقیق گزارش‌های آزمایشگاه جنین‌شناسی، دوز داروهای تحریک تخمدان، روند رشد فولیکول‌ها، ضخامت آندومتر و سبک زندگی زوجین.",
          descEn:
            "Line-by-line review of prior stimulation flow sheets, estradiol dynamics, oocyte maturity ratios (MII/GV), fertilization rates, and blastocyst grading.",
        },
        {
          stepNumber: "STEP 02",
          timeframeFa: "هفته اول تا دوم • پنل بیومارکرها",
          timeframeEn: "WEEK 1–2 • METABOLIC & ENDOCRINE PANEL",
          titleFa: "ارزیابی پیشرفته متابولیک، التهابی و ریزمغذی‌ها",
          titleEn: "Advanced Metabolic, Inflammatory & Micronutrient Profiling",
          descFa:
            "سنجش منحنی انسولین، HOMA-IR، پروفایل لیپیدی پیشرفته، تیروئید کامل به همراه آنتی‌بادی‌ها (Anti-TPO/Anti-Tg)، هموسیستئین، ویتامین D3 و ذخایر آهن.",
          descEn:
            "Comprehensive quantification of insulin dynamics, complete thyroid axis with autoantibodies, homocysteine, hs-CRP, vitamin D3, and oxidative stress markers.",
        },
        {
          stepNumber: "STEP 03",
          timeframeFa: "هفته دوم • آنالیز سبک زندگی و خواب",
          timeframeEn: "WEEK 2 • CIRCADIAN & BODY COMPOSITION MAPPING",
          titleFa: "ارزیابی ترکیب بدنی، تغذیه سلولی و ریتم سیرکادین",
          titleEn: "Visceral Adiposity, Nutritional & Circadian Architecture Audit",
          descFa:
            "بررسی نسبت عضله به چربی احشایی، الگوی خواب شبانه، سطح استرس، مواجهه با سموم مختل‌کننده غدد درون‌ریز (EDCs) و کمبودهای تغذیه‌ای.",
          descEn:
            "Evaluation of visceral fat-to-lean mass ratio, sleep architecture, glycemic load patterns, and exposure to endocrine-disrupting chemicals (BPA, phthalates).",
        },
        {
          stepNumber: "STEP 04",
          timeframeFa: "هفته دوم • تدوین نقشه راه",
          timeframeEn: "WEEK 2 • PRECISION BLUEPRINT DESIGN",
          titleFa: "طراحی پروتکل شخصی‌سازی‌شده ۹۰ روزه پیش از IVF",
          titleEn: "Bespoke 90-Day Pre-IVF Optimization Blueprint",
          descFa:
            "تحویل برنامه مکتوب و دقیق شامل زمان‌بندی تغذیه، دوز دقیق مکمل‌های بالینی، اصلاح خواب، ورزش متابولیک و زمان طلایی ورود به سیکل IVF.",
          descEn:
            "Delivery of a personalized, week-by-week physiological conditioning roadmap synchronized with your upcoming ovarian stimulation or transfer date.",
        },
      ],
    },
    optimizationProcess: {
      headingFa: "پروتکل بهینه‌سازی ۳ فازی (Optimization Process)",
      headingEn: "The 3-Phase Pre-IVF Optimization Architecture",
      introFa:
        "فرآیند آماده‌سازی بدن طی سه فاز هدفمند و علمی اجرا می‌شود تا محیط فولیکولی و رحمی به اوج آمادگی برسد:",
      introEn:
        "Our optimization protocol unfolds across three sequential physiological phases leading up to oocyte retrieval:",
      phases: [
        {
          phaseCode: "PHASE 01",
          durationFa: "روز ۱ تا ۳۰ • پاکسازی التهابی و حساس‌سازی متابولیک",
          durationEn: "DAYS 1–30 • METABOLIC & INFLAMMATORY RESET",
          titleFa: "مهار مقاومت به انسولین و کاهش التهاب سیستمیک",
          titleEn: "Glycemic Stabilization & Systemic De-Inflammation",
          descFa:
            "حذف نوسانات انسولین، پاکسازی سموم مختل‌کننده هورمونی و بازگرداندن حساسیت گیرنده‌های تخمدانی به گنادوتروپین‌ها.",
          descEn:
            "Eliminating hyperinsulinemic spikes, removing endocrine disruptors, and restoring granulosa cell receptor sensitivity.",
          interventionsFa: [
            "رژیم ضدالتهابی مدیترانه‌ای-متابولیک با شاخص گلیسمی کنترل‌شده و پروتئین باکیفیت",
            "تنظیم متابولیسم گلوکز با اینوزیتول‌های ایزومریک، منیزیم بیس‌گلیسینات و آلفا لیپوئیک اسید",
            "حذف کامل پلاستیک‌های حاوی BPA و فتالات‌ها از چرخه تغذیه روزانه",
          ],
          interventionsEn: [
            "Precision anti-inflammatory Mediterranean-metabolic nutrition with glycemic load control",
            "Insulin receptor sensitization via physiological myo/D-chiro inositol and magnesium glycinate",
            "Endocrine-disrupting chemical (EDC) detoxification and gut-estrogen axis support",
          ],
        },
        {
          phaseCode: "PHASE 02",
          durationFa: "روز ۳۱ تا ۶۰ • شارژ میتوکندریایی و اپی‌ژنتیک",
          durationEn: "DAYS 31–60 • MITOCHONDRIAL BIOGENESIS & METHYLATION",
          titleFa: "تقویت انرژی سلولی اووسیت و محافظت کروموزومی",
          titleEn: "Oocyte Mitochondrial ATP Amplification & Spindle Protection",
          descFa:
            "تمرکز بر افزایش تولید ATP در میتوکندری‌های تخمک در حال بلوغ و بهینه‌سازی چرخه متیلاسیون DNA.",
          descEn:
            "Maximizing mitochondrial respiratory chain efficiency and optimizing follicular fluid antioxidant defenses.",
          interventionsFa: [
            "پروتکل هدفمند Ubiquinol CoQ10، ال-کارنیتین، PQQ و پیش‌سازهای NAD+ بر اساس سن و AMH",
            "اصلاح چرخه متیلاسیون با فولات فعال (5-MTHF)، متیل‌کوبالامین و کولین برای کاهش هموسیستئین",
            "تنظیم خواب عمیق شبانه و بهینه‌سازی سطح ملاتونین داخل فولیکولی",
          ],
          interventionsEn: [
            "Targeted mitochondrial support with bioavailable Ubiquinol CoQ10, Acetyl-L-Carnitine, and NAD+ precursors",
            "One-carbon methylation optimization with active 5-MTHF, methyl-B12, and choline to normalize homocysteine",
            "Circadian dark-cycle hygiene and nocturnal melatonin restoration for follicular ROS protection",
          ],
        },
        {
          phaseCode: "PHASE 03",
          durationFa: "روز ۶۱ تا ۹۰ • سینکرونیزاسیون پیش از تحریک تخمدان",
          durationEn: "DAYS 61–90 • PRE-STIMULATION SYNCHRONIZATION",
          titleFa: "هماهنگ‌سازی کوهورت فولیکولی و آماده‌سازی خون‌رسانی لگنی",
          titleEn: "Follicular Cohort Synchronization & Ovarian Perfusion Priming",
          descFa:
            "حداکثرسازی خون‌رسانی شریان‌های تخمدانی و رحمی و پایش مجدد بیومارکرها پیش از شروع سیکل دارویی IVF.",
          descEn:
            "Enhancing ovarian microvascular blood flow and verifying biomarker targets immediately prior to stimulation.",
          interventionsFa: [
            "پروتکل‌های افزایش نیتریک اکساید و پرفیوژن عروقی تخمدان و آندومتر",
            "آزمایش مجدد بیومارکرهای کلیدی (انسولین، هموسیستئین، ویتامین D، تیروئید) و تایید آمادگی بیولوژیک",
            "تحویل گزارش نهایی آمادگی فیزیولوژیک جهت هماهنگی دقیق با پروتکل تحریک تخمدان",
          ],
          interventionsEn: [
            "Nitric oxide donor nutrition and pelvic microvascular perfusion exercises",
            "Follow-up biomarker verification panel confirming optimal metabolic and inflammatory targets",
            "Final Pre-IVF Readiness Clearance dossier coordinated with your stimulation protocol",
          ],
        },
      ],
    },
    expectedOutcomes: {
      headingFa: "نتایج مورد انتظار و دستاوردهای بالینی",
      headingEn: "Expected Clinical & Biological Outcomes",
      summaryFa:
        "با تکمیل برنامه آمادگی پیش از IVF، زوجین با بدنی متعادل، التهاب کنترل‌شده و گامت‌هایی با حداکثر پتانسیل زیستی وارد سیکل درمانی می‌شوند:",
      summaryEn:
        "Patients completing the IVF Readiness Program enter their retrieval cycle with measurably upgraded cellular and metabolic metrics:",
      benchmarks: [
        {
          metric: "MII RATIO ↑",
          titleFa: "افزایش نسبت تخمک‌های بالغ (Metaphase II)",
          titleEn: "Higher Proportion of Mature Metaphase-II (MII) Oocytes",
          descFa:
            "هماهنگی بهتر رشد فولیکول‌ها و بلوغ همزمان هسته و سیتوپلاسم تخمک در روز پانکچر.",
          descEn:
            "Improved nuclear-cytoplasmic synchrony resulting in a higher yield of mature, fertilizable MII oocytes per retrieval.",
        },
        {
          metric: "BLASTOCYST ↑",
          titleFa: "ارتقای نرخ تبدیل جنین به بلاستوسیست روز پنجم",
          titleEn: "Superior Day-5 Blastocyst Progression & Grading",
          descFa:
            "تامین انرژی میتوکندریایی کافی برای عبور موفق جنین از گذرگاه فعال‌سازی ژنوم جنینی در روز سوم تا پنجم.",
          descEn:
            "Robust maternal mitochondrial ATP reserves power the embryo smoothly past Day-3 embryonic genome activation into high-grade blastocysts.",
        },
        {
          metric: "DOSE EFFICIENCY",
          titleFa: "پاسخ بهتر تخمدان به داروهای تحریک و کاهش التهاب",
          titleEn: "Enhanced Gonadotropin Sensitivity & Reduced OHSS Risk",
          descFa:
            "حساسیت بالاتر گیرنده‌های FSH/LH پس از اصلاح مقاومت به انسولین و کاهش عوارض جانبی داروها.",
          descEn:
            "Restored receptor sensitivity allows cleaner follicular recruitment with lower systemic inflammation and smoother recovery.",
        },
      ],
    },
    faqs: [
      {
        qFa: "چرا به جای شروع فوری IVF باید ۸ تا ۱۲ هفته برای آماده‌سازی زمان بگذاریم؟",
        qEn: "Why wait 8 to 12 weeks before starting IVF instead of beginning stimulation immediately?",
        aFa: "زیرا چرخه بلوغ فولیکول‌ها از مرحله استراحت تا تخمک‌گذاری حدود ۹۰ روز زمان می‌برد. داروهای سیکل IVF فقط فولیکول‌های موجود در ۲ هفته آخر را بزرگ می‌کنند، اما کیفیت ژنتیکی و میتوکندریایی داخل تخمک در ۲ تا ۳ ماه قبل از آن شکل می‌گیرد. سرمایه‌گذاری این زمان کوتاه، احتمال شکست سیکل و نیاز به تکرار پرهزینه IVF را به شدت کاهش می‌دهد.",
        aEn: "Folliculogenesis takes approximately 90 days. Ovarian stimulation medications only recruit follicles during the final 10–14 days, whereas oocyte mitochondrial density, spindle integrity, and follicular fluid biochemistry are programmed over the preceding 2 to 3 months. Investing 8–12 weeks upfront dramatically reduces the risk of failed cycles.",
      },
      {
        qFa: "اگر کمتر از ۴ هفته تا شروع سیکل IVF من باقی مانده باشد، آیا باز هم این برنامه موثر است؟",
        qEn: "What if my IVF cycle is scheduled in less than 4 weeks? Can I still benefit?",
        aFa: "بله؛ برای بیمارانی که زمان محدودی دارند، «پروتکل فشرده ۴ هفته‌ای» (Accelerated Pre-IVF Priming) طراحی شده است که بر بهینه‌سازی سریع قند و انسولین، افزایش آنتی‌اکسیدان‌های مایع فولیکولی (ملاتونین، کوآنزیم Q10، ان-استیل سیستئین) و بهبود خون‌رسانی لگنی در فاز نهایی بلوغ تخمک تمرکز دارد.",
        aEn: "Yes. While 90 days is the physiological gold standard, our 4-Week Intensive Priming Protocol rapidly stabilizes glycemic volatility, boosts intra-follicular antioxidant defenses (melatonin, ubiquinol, NAC), and enhances ovarian microvascular perfusion during the critical antral maturation phase.",
      },
      {
        qFa: "آیا برنامه آمادگی پیش از IVF شامل همسر (فاکتور مردانه) نیز می‌شود؟",
        qEn: "Does the IVF Readiness Program also include male partner optimization?",
        aFa: "قطعاً. ۵۰ درصد ژنوم جنین و بخش مهمی از سلامت بلاستوسیست پس از روز سوم به سلامت DNA اسپرم وابسته است. چرخه اسپرماتوژنز نیز حدود ۷۴ تا ۹۰ روز است و بهینه‌سازی همزمان زوجین بالاترین نرخ موفقیت را ایجاد می‌کند.",
        aEn: "Absolutely. The paternal genome drives embryonic development from Day 3 onward. Because spermatogenesis takes 74–90 days, concurrent optimization of sperm DNA fragmentation and oxidative balance is integrated into every couple's readiness plan.",
      },
    ],
    cta: {
      headlineFa: "سیکل IVF بعدی خود را بر پایه فیزیولوژی و داده مهندسی کنید",
      headlineEn: "Engineer Your Next IVF Cycle on a Foundation of Pure Physiology",
      subtextFa:
        "پیش از شروع داروهای تحریک تخمدان، جلسه ارزیابی آمادگی متابولیک و سلولی خود را با تیم دکتر محبوبه تاج‌الدینی در گرگان یا به صورت آنلاین رزرو کنید.",
      subtextEn:
        "Schedule your comprehensive Pre-IVF Physiological Readiness Audit with Dr. Mahboubeh Tajaldini's team in Gorgan or via private tele-consultation.",
      buttonFa: "رزرو مشاوره آمادگی پیش از IVF",
      buttonEn: "BOOK IVF READINESS CONSULTATION",
    },
    relatedSlugs: ["/implantation-optimization", "/pcos-fertility", "/male-fertility"],
  },

  // ============================================================================
  // PAGE 02: RECURRENT IVF FAILURE CLINIC (/ivf-failure-analysis)
  // ============================================================================
  {
    id: "ivf-failure-analysis",
    slug: "/ivf-failure-analysis",
    code: "PROGRAM 02 • FORENSIC CYCLE & RIF INVESTIGATION",
    visualType: "dna",
    seo: {
      metaTitleFa:
        "کلینیک بررسی شکست مکرر IVF و ریشه‌یابی علمی | دکتر محبوبه تاج‌الدینی",
      metaTitleEn:
        "Recurrent IVF Failure Clinic | Root Cause Analysis & Cycle Forensics | Fertility Innovation Institute",
      metaDescriptionFa:
        "آنالیز ریشه‌ای شکست‌های مکرر IVF و سقط‌های مکرر در موسسه نوآوری باروری گرگان. بررسی تخصصی سیکل‌های قبلی، فاکتورهای ایمنی، ترومبوفیلی، متابولیک، ژنتیک و پذیرش آندومتر.",
      metaDescriptionEn:
        "Forensic root-cause investigation for Recurrent IVF Failure (RIF) led by Dr. Mahboubeh Tajaldini. Deep audit of prior embryology, endometrial synchronization, immunologic, thrombotic, and metabolic factors.",
      keywords: [
        "Recurrent IVF Failure Clinic",
        "Repeated IVF Failure Analysis",
        "Why IVF Fails",
        "RIF Investigation Iran",
        "Previous IVF Cycle Review",
        "Dr. Mahboubeh Tajaldini",
      ],
    },
    aiImagePrompt: {
      sectionTitle: "Recurrent IVF Failure Clinic — Forensic Diagnostic Prism Visual",
      prompt:
        "Architectural dark-mode scientific visualization of a translucent obsidian glass prism refracting a single silver light beam into precise genomic and cellular diagnostic layers, dark titanium aesthetic, Porsche Design meets biomedical research institute, ultra-crisp 8k macro render.",
      lightingAndStyle:
        "High-contrast chiaroscuro studio lighting, cool silver and champagne accents on deep #101216 charcoal background.",
    },
    hero: {
      kickerFa: "PROGRAM 02 • FORENSIC ROOT-CAUSE CYCLE INVESTIGATION",
      kickerEn: "PROGRAM 02 • FORENSIC ROOT-CAUSE CYCLE INVESTIGATION",
      titleFa: "کلینیک تخصصی شکست مکرر IVF و کالبدشکافی سیکل (Recurrent IVF Failure Clinic)",
      titleEn: "Recurrent IVF Failure Clinic",
      subtitleFa:
        "تکرار یک پروتکل یکسان و انتظار نتیجه‌ای متفاوت، راه‌حل علمی شکست IVF نیست. وقتی انتقال جنین‌های باکیفیت به بارداری منجر نمی‌شود، باید با دیدگاه پزشکی قانونیِ سلولی، تمام لایه‌های پنهان جنینی، رحمی، ایمنی و متابولیک کالبدشکافی شوند.",
      subtitleEn:
        "Repeating the exact same stimulation or transfer protocol while hoping for a different outcome is not precision medicine. When high-grade embryos fail to implant, we conduct a forensic, multi-system root-cause investigation before you ever undergo another transfer.",
      primaryStat: "360°",
      primaryStatLabelFa: "کالبدشکافی ۶ محور جنینی، رحمی، ایمنی، انعقادی، متابولیک و پدری",
      primaryStatLabelEn: "6-AXIS FORENSIC CYCLE & SYSTEMIC AUDIT",
      secondaryStat: "84%",
      secondaryStatLabelFa: "شناسایی عوامل پنهان تشخیص‌داده‌نشده در سیکل‌های ناموفق قبلی",
      secondaryStatLabelEn: "IDENTIFICATION OF UNDIAGNOSED ROOT FACTORS",
      wordCountBadge: "1,800+ WORD CLINICAL MONOGRAPH",
    },
    overview: {
      headingFa: "فراتر از عبارت «بدشانسی»: ریشه‌یابی علمی شکست‌های مکرر IVF",
      headingEn: "Beyond 'Unexplained Failure': Forensic Root-Cause Analysis of Repeated IVF Cycles",
      paragraphsFa: [
        "یکی از دردناک‌ترین تجربیات برای هر زوج، شنیدن این جمله پس از یک سیکل ناموفق IVF است: «جنین‌ها عالی بودند و رحم هم خوب به نظر می‌رسید؛ فقط شانس نیاوردید، دوباره امتحان کنید.» در فیزیولوژی تولیدمثل، هیچ شکستی بدون علت بیولوژیک رخ نمی‌دهد. لانه‌گزینی و تداوم بارداری حاصل گفتگوی مولکولی فوق‌العاده پیچیده و زمان‌بندی‌شده میان بلاستوسیست در حال هچینگ، اپی‌تلیوم آندومتر، سیستم ایمنی ذاتی رحم (سلول‌های uNK و لنفوسیت‌های Treg)، شبکه مویرگی آندومتر و تعادل متابولیک-انعقادی مادر است.",
        "در «کلینیک شکست مکرر IVF» (Recurrent IVF Failure Clinic) به مدیریت علمی دکتر محبوبه تاج‌الدینی، ما پرونده زوجینی را بررسی می‌کنیم که ۲ یا چند سیکل ناموفق انتقال جنین، توقف رشد جنین در آزمایشگاه یا بارداری‌های شیمیایی و سقط‌های زودرس را تجربه کرده‌اند. به جای پیشنهاد فوری یک سیکل دیگر، ما ابتدا یک «کالبدشکافی جامع پرونده» (Forensic Cycle Review) انجام می‌دهیم.",
        "ما تمامی برگه‌های تحریک تخمدان، سینتیک رشد جنین در روزهای ۱ تا ۵، پروفایل پروژسترون در فاز لوتئال، التهاب مزمن آندومتر (CE)، دیس‌بیوز میکروبیوم رحم، اختلالات ترومبوفیلی و میکروترومبوز عروقی، عدم تطابق پنجره لانه‌گزینی (WOI) و شکست قطعه DNA اسپرم (SDF) را با دقت میکروسکوپی بررسی می‌کنیم تا علت واقعی شکست مشخص و برطرف شود.",
      ],
      paragraphsEn: [
        "Few experiences in medicine are as exhausting as being told after a failed embryo transfer: 'Your embryos looked great and your lining was trilaminar—it was just bad luck, let's try again.' In reproductive physiology, implantation failure is never random. Successful implantation requires a tightly choreographed molecular dialogue between a metabolically competent blastocyst, a synchronized Pinopode-expressing endometrium, tolerant uterine natural killer (uNK) and regulatory T-cell networks, unobstructed spiral artery micro-perfusion, and stable maternal metabolic-endocrine signaling.",
        "At the Recurrent IVF Failure Clinic, directed by Dr. Mahboubeh Tajaldini—whose peer-reviewed research specifically addresses Recurrent Implantation Failure (RIF), intrauterine PRP signaling, and cellular microenvironments—we refuse to let patients enter another blind cycle. Instead, we perform a forensic, line-by-line reconstruction of every previous IVF attempt.",
        "Our investigation audits six interlocking domains: (1) ovarian stimulation dynamics and premature progesterone elevation, (2) embryonic cleavage kinetics and paternal DNA fragmentation, (3) endometrial window of implantation (WOI) displacement and progesterone resistance, (4) chronic endometritis and reproductive tract microbiome dysbiosis, (5) maternal immunologic allorecognition and cytokine balance (Th1/Th2/Th17/Treg), and (6) hereditary or acquired micro-thrombophilia impairing decidual angiogenesis.",
      ],
      keyMetrics: [
        {
          value: "6 Axes",
          labelFa: "بررسی همزمان جنین، آندومتر، ایمنی، انعقاد، متابولیسم و ژنتیک",
          labelEn: "EMBRYONIC, ENDOMETRIAL, IMMUNE, THROMBOTIC, METABOLIC & PATERNAL",
        },
        {
          value: "100%",
          labelFa: "بازبینی تخصصی پرونده‌های جنین‌شناسی و پروتکل‌های دارویی قبلی",
          labelEn: "FORENSIC AUDIT OF ALL PRIOR STIMULATION & EMBRYOLOGY RECORDS",
        },
        {
          value: "PRP + Bio",
          labelFa: "پروتکل‌های نوین بازسازی آندومتر و تعدیل محیط رحمی",
          labelEn: "TRANSLATIONAL REGENERATIVE & BIO-MODULATION PROTOCOLS",
        },
      ],
    },
    whoIsThisFor: {
      headingFa: "چه زوج‌هایی باید وارد کلینیک بررسی شکست مکرر IVF شوند؟",
      headingEn: "Who Should Enter the Recurrent IVF Failure Clinic?",
      introFa:
        "این کلینیک به صورت اختصاصی برای پرونده‌های پیچیده و زوجینی طراحی شده است که به دنبال پاسخ علمی دقیق برای عدم موفقیت سیکل‌های قبلی خود هستند:",
      introEn:
        "Engineered specifically for complex cases where standard IVF protocols have failed to deliver a sustained clinical pregnancy:",
      profiles: [
        {
          titleFa: "شکست مکرر لانه‌گزینی (RIF) با وجود انتقال جنین‌های باکیفیت",
          titleEn: "Recurrent Implantation Failure (2+ Failed Transfers of Good-Grade Embryos)",
          descFa:
            "زوجینی که حداقل ۲ یا ۳ بار انتقال جنین با گرید ظاهری خوب (یا حتی جنین‌های بررسی‌شده با PGT-A) داشته‌اند اما تست بتا منفی شده است.",
          descEn:
            "Patients who have transferred two or more morphologically high-grade or PGT-A euploid blastocysts without achieving clinical implantation.",
          metric: "RIF SPECIALIST AUDIT",
        },
        {
          titleFa: "بارداری‌های شیمیایی مکرر و سقط‌های زودرس پس از IVF",
          titleEn: "Recurrent Biochemical Pregnancies & Early Post-IVF Miscarriages",
          descFa:
            "مواردی که بتا در ابتدا مثبت می‌شود اما به سرعت افت می‌کند یا رشد ساک بارداری در هفته‌های اول متوقف می‌گردد (نشانه کلاسیک اختلال ایمنی، انعقادی یا متابولیک).",
          descEn:
            "Cases where initial hCG rises transiently before dropping, or early gestational arrest occurs—pointing toward decidual vascular, immunologic, or paternal chromatin defects.",
          metric: "DECIDUAL RESCUE",
        },
        {
          titleFa: "توقف مکرر رشد جنین در آزمایشگاه یا نرخ لقاح بسیار پایین",
          titleEn: "Repeated Embryonic Developmental Arrest or Total Fertilization Failure",
          descFa:
            "زوجینی که در هر سیکل پانکچر تعداد مناسبی تخمک دارند اما اکثر جنین‌ها بین روز سوم تا پنجم متوقف می‌شوند.",
          descEn:
            "Couples experiencing high attrition between Day 3 and Day 5 blastulation, indicating underlying oocyte mitochondrial depletion or occult sperm DNA damage.",
          metric: "EMBRYOLOGY FORENSICS",
        },
        {
          titleFa: "بیماران دارای جنین فریز شده ارزشمند (آخرین جنین‌های ذخیره‌شده)",
          titleEn: "Couples Protecting Their Final Cryopreserved Embryos",
          descFa:
            "افرادی که تنها ۱ یا ۲ جنین فریز شده از سیکل‌های قبلی دارند و نمی‌خواهند بدون اطمینان کامل از آمادگی رحم و بدن، آن‌ها را انتقال دهند.",
          descEn:
            "Patients holding precious remaining vitrified blastocysts who want every maternal variable fully optimized before scheduling their next frozen embryo transfer (FET).",
          metric: "PRECIOUS EMBRYO PROTECTION",
        },
      ],
    },
    commonSituations: {
      headingFa: "کشف علت‌های پنهان در پرونده‌های واقعی شکست IVF",
      headingEn: "Forensic Case Reconstructions: Uncovering Hidden Failure Mechanisms",
      introFa:
        "در بررسی پرونده‌های ارجاعی به موسسه، اغلب ترکیبی از چند عامل ظریف فیزیولوژیک عامل اصلی شکست بوده است:",
      introEn:
        "Our clinical investigations frequently reveal that 'unexplained' IVF failure is driven by a convergence of overlooked physiological variables:",
      cases: [
        {
          tag: "FORENSIC CASE 01 • ENDOMETRIAL & IMMUNE DESYNCHRONY",
          titleFa: "سه بار انتقال ناموفق جنین گرید A به دلیل آندومتریت مزمن خاموش و مقاومت به پروژسترون",
          titleEn: "Three Failed Transfers of Grade-A Blastocysts Due to Silent Endometritis & Luteal Resistance",
          problemFa:
            "بیمار ۳۶ ساله با ۳ انتقال ناموفق جنین فریز شده که در سونوگرافی همیشه ضخامت آندومتر ۸.۵ میلی‌متر و سه‌خطی گزارش شده بود.",
          problemEn:
            "A 36-year-old patient with three negative FETs despite an apparently ideal 8.5mm trilaminar endometrium on routine ultrasound.",
          rootMechanismFa:
            "ضخامت سونوگرافیک به معنای پذیرش سلولی نیست. بررسی عمیق نشان داد بیمار دچار آندومتریت مزمن تحت‌بالینی (التهاب پلاسماسل‌ها)، جابجایی پنجره لانه‌گزینی و سطح ناکافی پروژسترون سرمی در روز انتقال (کمتر از ۱۰ نانوگرم) بوده است.",
          rootMechanismEn:
            "Sonographic thickness does not equal molecular receptivity. Investigation uncovered subclinical chronic endometritis, local Th1 pro-inflammatory cytokine dominance, and suboptimal serum progesterone (<9.2 ng/mL) on the day of transfer.",
          instituteSolutionFa:
            "درمان هدفمند التهاب آندومتر، بازسازی میکروبیوم لاکتوباسیلوس رحم، تزریق داخل رحمی PRP تحت پروتکل استاندارد و تنظیم دقیق پروژسترون شخصی‌سازی‌شده در فاز لوتئال.",
          instituteSolutionEn:
            "Targeted eradication of chronic endometritis, Lactobacillus-dominant microbiome restoration, autologous intrauterine PRP bio-priming, and individualized luteal progesterone rescue.",
        },
        {
          tag: "FORENSIC CASE 02 • PATERNAL GENOME & THROMBOPHILIA",
          titleFa: "توقف رشد جنین‌ها و بارداری شیمیایی با وجود آزمایش اسپرم معمولی نرمال",
          titleEn: "Biochemical Losses & Late Blastocyst Arrest Despite a 'Normal' Standard Semen Analysis",
          problemFa:
            "زوجی با ۲ سیکل IVF ناموفق و یک سقط در هفته ۶ که آزمایش اسپرم معمولی همسر کاملاً نرمال گزارش شده بود.",
          problemEn:
            "A couple with two failed ICSI cycles and one 6-week loss whose standard semen parameters (count, motility) were labeled normal.",
          rootMechanismFa:
            "آزمایش اسپرم معمولی سلامت DNA داخل سر اسپرم را نشان نمی‌دهد. بررسی تخصصی نشان‌دهنده شاخص قطعه قطعه شدن DNA اسپرم (DFI = 34%) به همراه جهش MTHFR و افزایش هموسیستئین در مادر بود.",
          rootMechanismEn:
            "Conventional semen analysis completely misses chromatin integrity. Testing revealed a 34% Sperm DNA Fragmentation Index (DFI) paired with maternal hyperhomocysteinemia and PAI-1 microvascular hypoperfusion.",
          instituteSolutionFa:
            "پروتکل ۹۰ روزه آنتی‌اکسیدانی و کاهش استرس اکسیداتیو اسپرم (کاهش DFI به ۱۲٪)، اصلاح متیلاسیون و حمایت ضدانعقادی هدفمند در سیکل انتقال بعدی.",
          instituteSolutionEn:
            "A 90-day paternal oxidative stress reduction protocol (lowering DFI from 34% to 12%) combined with maternal methylation support and targeted microvascular prophylaxis.",
        },
      ],
    },
    scientificBackground: {
      headingFa: "مبانی علمی شکست لانه‌گزینی و اختلال در گفتگوی جنین و آندومتر",
      headingEn: "Scientific Background: The Pathophysiology of Recurrent IVF Failure",
      abstractFa:
        "شکست مکرر IVF (RIF) یک بیماری واحد نیست؛ بلکه سندرمی چندعاملی است که در فصل مشترک فیزیولوژی جنین، زیست‌شناسی مولکولی آندومتر، ایمونولوژی تولیدمثل و همودینامیک عروقی رخ می‌دهد. پژوهش‌های دکتر محبوبه تاج‌الدینی در زمینه ریزومحیط سلولی و کاربرد PRP در شکست مکرر لانه‌گزینی، پایه علمی پروتکل‌های این کلینیک را تشکیل می‌دهد.",
      abstractEn:
        "Recurrent Implantation Failure (RIF) is not a single diagnosis—it is a complex, multi-system syndrome occurring at the intersection of embryonic bioenergetics, endometrial molecular receptivity, reproductive immunology, and decidual hemodynamics. Dr. Mahboubeh Tajaldini's research in cellular microenvironments and regenerative PRP therapies underpins our diagnostic framework.",
      deepDiveParagraphsFa: [
        "۱. ناهماهنگی پنجره لانه‌گزینی (Window of Implantation) و مقاومت به پروژسترون: آندومتر انسان تنها در یک بازه زمانی کوتاه (معمولاً روز ۱۹ تا ۲۱ سیکل یا ۵ تا ۷ روز پس از مواجهه با پروژسترون) پذیرای بلاستوسیست است. التهاب لگنی، اندومتریوز پنهان، مقاومت به انسولین و استرس اکسیداتیو می‌توانند بیان گیرنده‌های پروژسترون (PR-A/PR-B) و مولکول‌های چسبندگی مانند اینتگرین αvβ3، LIF و گلیکودلین را مختل کرده و پنجره لانه‌گزینی را جابجا یا مسدود کنند.",
        "۲. ایمونولوژی محیط رحم و تعادل Treg / Th17 / uNK: نیمی از آنتی‌ژن‌های جنین از پدر به ارث رسیده و برای سیستم ایمنی مادر «نیمه‌بیگانه» (Semi-allograft) محسوب می‌شود. برای لانه‌گزینی موفق، سلول‌های کشنده طبیعی رحم (uNK) نباید جنین را تخریب کنند، بلکه باید با ترشح فاکتورهای رگ‌زایی (VEGF و PlGF) عروق مارپیچی رحم را بازسازی نمایند. غلبه سایتوکاین‌های التهابی Th1 (مانند TNF-α و IFN-γ) بر سلول‌های تنظیمی Treg، منجر به پس‌زدگی ایمنی جنین یا بارداری شیمیایی می‌شود.",
        "۳. نقش پلاسمی غنی از پلاکت (PRP) و فاکتورهای رشد اتولوگ: مطالعات بالینی نشان داده‌اند که انفوزیون داخل رحمی پلاسمای غنی از پلاکت اتولوگ (حاوی PDGF، TGF-β، VEGF، EGF و IGF-1) تکثیر سلول‌های استرومایی آندومتر را تحریک کرده، بیان ژن‌های پذیرش (HOXA10 و LIF) را افزایش می‌دهد، التهاب موضعی را تعدیل می‌کند و ضخامت و خون‌رسانی آندومتر را در بیماران مبتلا به RIF به طور معناداری بهبود می‌بخشد.",
      ],
      deepDiveParagraphsEn: [
        "1. Endometrial Receptivity Desynchrony & Progesterone Resistance: The human endometrium is receptive to blastocyst apposition and invasion only during a transient 36-to-48-hour Window of Implantation (WOI). Subclinical inflammation, occult endometriosis, and hyperinsulinemia downregulate progesterone receptor isoform B (PR-B) and suppress essential adhesion molecules including αvβ3 integrin, leukemia inhibitory factor (LIF), and HOXA10—rendering an anatomically thick lining molecularly non-receptive.",
        "2. Maternal-Fetal Immunologic Tolerance & uNK Vascular Remodeling: Because the embryo expresses paternal HLA-C antigens, maternal immune tolerance is mandatory. Uterine natural killer (uNK) cells and CD4+CD25+Foxp3+ regulatory T cells (Tregs) must transition from cytotoxic surveillance to trophic angiogenesis, secreting VEGF and placental growth factor (PlGF) to remodel spiral arteries. A shift toward pro-inflammatory Th1/Th17 cytokines (TNF-α, IFN-γ, IL-17) triggers peri-implantation rejection.",
        "3. Autologous Intrauterine PRP & Regenerative Growth Factor Signaling: Translational studies led by Dr. Mahboubeh Tajaldini and global reproductive groups demonstrate that intrauterine infusion of leucocyte-modulated autologous Platelet-Rich Plasma delivers concentrated PDGF, TGF-β, VEGF, and IGF-1 directly to the basal endometrium—promoting stromal stem cell proliferation, neo-angiogenesis, and down-regulation of fibrotic/inflammatory pathways in RIF patients.",
      ],
      biomarkers: [
        {
          code: "LUTEAL PROGESTERONE",
          nameFa: "پروژسترون سرمی روز انتقال جنین",
          nameEn: "Day-of-Transfer Serum Progesterone",
          targetRange: "> 12.5 – 18.0 ng/mL",
          clinicalRoleFa: "تضمین دسیدوالیزاسیون کامل استرومای آندومتر و جلوگیری از انقباضات رحمی",
          clinicalRoleEn: "Ensures complete stromal decidualization and uterine quiescence",
        },
        {
          code: "SPERM DFI (TUNEL/SCSA)",
          nameFa: "شاخص شکست DNA اسپرم",
          nameEn: "Sperm DNA Fragmentation Index",
          targetRange: "< 15%",
          clinicalRoleFa: "جلوگیری از توقف رشد جنین پس از روز سوم و کاهش سقط‌های زودرس",
          clinicalRoleEn: "Prevents late embryonic arrest (Day 3–5) and early post-transfer pregnancy loss",
        },
        {
          code: "THYROID AUTOIMMUNITY",
          nameFa: "تراز TSH، Free T4 و آنتی‌بادی‌های تیروئید",
          nameEn: "TSH, Free T4, Anti-TPO & Anti-Tg",
          targetRange: "TSH 1.0 – 2.2 mIU/L",
          clinicalRoleFa: "حفظ پایداری هورمونی و جلوگیری از واکنش‌های خودایمنی علیه تروفوبلاست",
          clinicalRoleEn: "Prevents subclinical hypothyroidism and cross-reactive trophoblast autoimmunity",
        },
        {
          code: "THROMBOPHILIA & PAI-1",
          nameFa: "پنل ترومبوفیلی، پروتئین C/S، هموسیستئین و آنتی‌فسفولیپید",
          nameEn: "Microvascular Coagulation & Antiphospholipid Profile",
          targetRange: "Negative APS | Optimal Micro-Perfusion",
          clinicalRoleFa: "پیشگیری از میکروترومبوز عروق مارپیچی در محل لانه‌گزینی جنین",
          clinicalRoleEn: "Prevents decidual micro-thrombosis and placental intervillous ischemia",
        },
      ],
    },
    assessmentProcess: {
      headingFa: "فرآیند کالبدشکافی ۴ مرحله‌ای شکست سیکل (Assessment Process)",
      headingEn: "4-Stage Forensic Cycle Investigation Process",
      introFa:
        "در کلینیک شکست مکرر IVF، هیچ فرضیه‌ای بدون بررسی باقی نمی‌ماند. فرآیند تشخیصی ما شامل ۴ گام ساختاریافته است:",
      introEn:
        "We systematically deconstruct every variable of your previous cycles across four structured diagnostic stages:",
      steps: [
        {
          stepNumber: "STAGE 01",
          timeframeFa: "گام اول • ممیزی پرونده‌های قبلی",
          timeframeEn: "STAGE 1 • RETROSPECTIVE CYCLE FORENSICS",
          titleFa: "بازخوانی کامل پروتکل‌های تحریک تخمدان و گزارش جنین‌شناسی",
          titleEn: "Complete Audit of Prior Stimulation Protocols & Embryology Logs",
          descFa:
            "بررسی دوز داروها، زمان تزریق تریگر (hCG یا دکاپپتیل)، نسبت تخمک‌های بالغ، روش لقاح و سینتیک تقسیمات جنینی در سیکل‌های گذشته.",
          descEn:
            "Evaluating gonadotropin dosing, trigger timing, premature luteinization, ICSI notes, and Day 1-to-Day 5 embryo morphokinetics.",
        },
        {
          stepNumber: "STAGE 02",
          timeframeFa: "گام دوم • آنالیز تخصصی آندومتر و رحم",
          timeframeEn: "STAGE 2 • UTERINE & ENDOMETRIAL MICROENVIRONMENT",
          titleFa: "بررسی آناتومیک، میکروبیولوژیک و همودینامیک حفره رحم",
          titleEn: "Anatomical, Microbiome, Inflammatory & Doppler Perfusion Mapping",
          descFa:
            "ارزیابی هیستروسکوپیک، بررسی آندومتریت مزمن (CD138)، کالیبراسیون پنجره لانه‌گزینی و سونوگرافی داپلر جریان خون شریان‌های رحمی و زیرآندومتری.",
          descEn:
            "Assessing cavity integrity, CD138 plasma cell screening for chronic endometritis, uterine artery Doppler resistance indices (PI/RI), and WOI timing.",
        },
        {
          stepNumber: "STAGE 03",
          timeframeFa: "گام سوم • پنل ایمنی، انعقادی و متابولیک",
          timeframeEn: "STAGE 3 • IMMUNOLOGIC, THROMBOTIC & METABOLIC SCREENING",
          titleFa: "ارزیابی سیستمیک ایمنی تولیدمثل، ترومبوفیلی و مقاومت انسولینی",
          titleEn: "Systemic Immunologic Tolerance, Thrombophilia & Endocrine Audit",
          descFa:
            "بررسی آنتی‌بادی‌های آنتی‌فسفولیپید، تیروئید، تعادل سایتوکاینی، هموسیستئین، مقاومت به انسولین و التهاب پنهان مادر.",
          descEn:
            "Targeted screening for antiphospholipid syndrome, thyroid autoimmunity, hyperhomocysteinemia, insulin resistance, and vitamin D/micronutrient deficits.",
        },
        {
          stepNumber: "STAGE 04",
          timeframeFa: "گام چهارم • بررسی ژنوم پدری و کروماتین اسپرم",
          timeframeEn: "STAGE 4 • PATERNAL CHROMATIN & GENETIC INTEGRITY",
          titleFa: "آنالیز سلامت DNA اسپرم، استرس اکسیداتیو و کاریوتایپ",
          titleEn: "Sperm DNA Fragmentation (SDF), Oxidative Stress & Karyotype Review",
          descFa:
            "بررسی شاخص DFI اسپرم، بلوغ کروماتین، استرس اکسیداتیو مایع منی و در صورت نیاز بررسی کاریوتایپ زوجین.",
          descEn:
            "Quantifying sperm DNA fragmentation, protamine packaging, seminal ROS levels, and parental karyotyping where indicated.",
        },
      ],
    },
    optimizationProcess: {
      headingFa: "پروتکل بازسازی و مداخله هدفمند پیش از انتقال بعدی (Optimization Process)",
      headingEn: "Targeted Multi-System Rehabilitation Prior to Next Transfer",
      introFa:
        "پس از شناسایی ریشه‌های دقیق شکست، پروتکل درمانی اختصاصی در سه محور اجرا می‌شود:",
      introEn:
        "Once root causes are isolated, we execute a customized rehabilitation protocol before authorizing your next stimulation or embryo transfer:",
      phases: [
        {
          phaseCode: "INTERVENTION 01",
          durationFa: "محور اول • پاکسازی و نوسازی حفره رحم",
          durationEn: "AXIS 1 • ENDOMETRIAL MICROENVIRONMENT REHABILITATION",
          titleFa: "حذف التهاب مزمن، اصلاح میکروبیوم و بازسازی سلولی با PRP",
          titleEn: "Endometritis Resolution, Microbiome Restoration & Autologous PRP",
          descFa:
            "پاکسازی کامل آندومتریت مزمن، بازگرداندن فلور غالب لاکتوباسیلوس و استفاده از پروتکل‌های PRP داخل رحمی برای تحریک رگ‌زایی و بیان ژن‌های پذیرش.",
          descEn:
            "Resolving subclinical endometritis, repopulating protective uterine Lactobacilli, and deploying scheduled intrauterine PRP infusions to upregulate LIF/HOXA10.",
          interventionsFa: [
            "پروتکل آنتی‌بیوتیکی/پروبیوتیکی اختصاصی در صورت اثبات آندومتریت مزمن (CD138+)",
            "تزریق زمان‌بندی‌شده پلاسمای غنی از پلاکت اتولوگ (PRP) برای بهبود ضخامت و پذیرش مولکولی آندومتر",
            "بهینه‌سازی جریان خون شریان‌های رحمی و زیرآندومتری پیش از شروع پروژسترون",
          ],
          interventionsEn: [
            "Targeted antimicrobial + vaginal/oral Lactobacillus crispatus restoration protocol",
            "Autologous intrauterine PRP bio-stimulation timed to the follicular-luteal transition",
            "Uterine microvascular vasodilatory and nitric-oxide perfusion support",
          ],
        },
        {
          phaseCode: "INTERVENTION 02",
          durationFa: "محور دوم • تعدیل ایمنی، انعقادی و متابولیک",
          durationEn: "AXIS 2 • IMMUNO-METABOLIC & VASCULAR MODULATION",
          titleFa: "تنظیم تحمل ایمنی مادر و پشتیبانی خون‌رسانی دسیدوا",
          titleEn: "Maternal Immune Tolerance & Microvascular Perfusion Support",
          descFa:
            "ایجاد محیط ضدالتهابی برای پذیرش جنین و پیشگیری از تشکیل لخته‌های میکروسکوپی در عروق جفتی اولیه.",
          descEn:
            "Shifting maternal cytokine balance toward Treg tolerance while protecting spiral artery blood flow during trophoblast invasion.",
          interventionsFa: [
            "تنظیم دقیق ویتامین D3، اسیدهای چرب امگا-۳ با خلوص بالا و آنتی‌اکسیدان‌های تعدیل‌کننده التهاب",
            "پروفیلاکسی ضدانعقادی و ضدپلاکتی هدفمند در بیماران دارای اندیکاسیون ترومبوفیلی",
            "کنترل دقیق مقاومت به انسولین و تنظیم TSH زیر ۲.۰ پیش از انتقال جنین",
          ],
          interventionsEn: [
            "Immunomodulatory nutrition, high-EPA/DHA omega-3s, and calcitriol receptor optimization",
            "Indication-based antithrombotic prophylaxis for documented thrombophilia or APS",
            "Strict stabilization of maternal insulin sensitivity and thyroid axis (TSH < 2.0 mIU/L)",
          ],
        },
        {
          phaseCode: "INTERVENTION 03",
          durationFa: "محور سوم • مهندسی پروتکل انتقال شخصی‌سازی‌شده",
          durationEn: "AXIS 3 • PRECISION EMBRYO TRANSFER SYNCHRONIZATION",
          titleFa: "هماهنگ‌سازی ساعت مولکولی جنین و آندومتر در روز انتقال",
          titleEn: "Individualized Luteal Timing & Progesterone Rescue Protocol",
          descFa:
            "تعیین دقیق ساعت شروع پروژسترون، پایش سطح سرمی پروژسترون در روز قبل از انتقال و انتخاب بهترین استراتژی انتخاب اسپرم/جنین.",
          descEn:
            "Calibrating exact progesterone exposure hours, verifying serum progesterone levels prior to FET, and utilizing advanced sperm selection (MACS/microfluidics) if cycling fresh.",
          interventionsFa: [
            "کالیبراسیون دقیق ساعت مواجهه با پروژسترون متناسب با پنجره لانه‌گزینی بیمار",
            "سنجش سطح سرمی پروژسترون ۲۴ ساعت پیش از انتقال و اصلاح فوری در صورت جذب ناکافی",
            "پایش مستمر هورمونی و عروقی در ۲ هفته طلایی پس از انتقال تا ثبت ضربان قلب جنین",
          ],
          interventionsEn: [
            "Synchronizing progesterone exposure duration to the patient's individual Window of Implantation",
            "Pre-transfer serum progesterone verification with immediate subcutaneous/intramuscular rescue if <12 ng/mL",
            "Structured luteal and early first-trimester biomarker surveillance through clinical heartbeat confirmation",
          ],
        },
      ],
    },
    expectedOutcomes: {
      headingFa: "دستاوردهای بالینی پس از ریشه‌یابی شکست مکرر IVF",
      headingEn: "Expected Clinical Outcomes Following Forensic Rehabilitation",
      summaryFa:
        "تبدیل ابهام و ناامیدی ناشی از سیکل‌های ناموفق به یک نقشه راه روشن، علمی و قابل اندازه‌گیری:",
      summaryEn:
        "Replacing diagnostic ambiguity with measurable physiological resolution prior to your next cycle:",
      benchmarks: [
        {
          metric: "CLARITY 100%",
          titleFa: "شناسایی دقیق علت‌های پنهان شکست‌های قبلی",
          titleEn: "Complete Diagnostic Clarity on Prior Cycle Bottlenecks",
          descFa:
            "پایان دادن به حدس و گمان با شناسایی دقیق فاکتورهای جنینی، آندومتری، ایمنی، انعقادی یا متابولیک.",
          descEn:
            "Eliminating 'unexplained failure' by pinpointing specific embryonic, endometrial, immunologic, or metabolic root causes.",
        },
        {
          metric: "RECEPTIVITY ↑",
          titleFa: "افزایش معنادار نرخ لانه‌گزینی در انتقال بعدی",
          titleEn: "Restored Endometrial Receptivity & Implantation Potential",
          descFa:
            "ایجاد آندومتر سه‌خطی با خون‌رسانی زیرآندومتری قوی (Zone 3) و محیط ایمنی پذیرا برای بلاستوسیست.",
          descEn:
            "Achieving optimal Zone-3 sub-endometrial vascularity and synchronized molecular receptivity for embryo attachment.",
        },
        {
          metric: "LOSS REDUCTION ↓",
          titleFa: "کاهش چشمگیر خطر بارداری شیمیایی و سقط زودرس",
          titleEn: "Marked Reduction in Biochemical & First-Trimester Losses",
          descFa:
            "حفاظت از تداوم بارداری از طریق اصلاح کیفیت DNA اسپرم، متیلاسیون مادر و خون‌رسانی جفتی.",
          descEn:
            "Sustaining clinical pregnancy beyond implantation by resolving paternal DNA fragmentation and decidual micro-thrombosis.",
        },
      ],
    },
    faqs: [
      {
        qFa: "چند سیکل ناموفق IVF لازم است تا بررسی‌های کلینیک شکست مکرر را شروع کنیم؟",
        qEn: "How many failed IVF transfers warrant a full Recurrent IVF Failure investigation?",
        aFa: "هرچند تعریف کلاسیک RIF انتقال ناموفق ۲ یا ۳ جنین باکیفیت است، اما ما معتقدیم حتی پس از یک سیکل ناموفق (به‌ویژه اگر جنین گرید بالا بوده یا ذخیره جنین فریز شده شما محدود است) باید کالبدشکافی کامل انجام شود تا جنین‌های ارزشمند بعدی بدون آمادگی رحم منتقل نشوند.",
        aEn: "While classical definitions cite 2 to 3 failed transfers, we strongly recommend a comprehensive forensic review after even a single failed transfer of a high-grade blastocyst—especially when protecting a limited inventory of cryopreserved embryos.",
      },
      {
        qFa: "پلاسمای غنی از پلاکت (PRP) داخل رحمی چگونه به درمان شکست مکرر لانه‌گزینی کمک می‌کند؟",
        qEn: "How does intrauterine PRP therapy improve outcomes in Recurrent Implantation Failure?",
        aFa: "PRP اتولوگ که از خون خود بیمار تهیه و تغلیظ می‌شود، سرشار از فاکتورهای رشد طبیعی (VEGF، PDGF، TGF-β و IGF-1) است. تزریق بدون درد آن به داخل حفره رحم قبل از انتقال جنین، سلول‌های بنیادی پایه آندومتر را فعال کرده، رگ‌زایی مویرگی را افزایش می‌دهد، التهاب پنهان را کاهش داده و بیان مولکول‌های چسبندگی جنین را تقویت می‌کند.",
        aEn: "Autologous intrauterine PRP delivers concentrated physiological growth factors (VEGF, PDGF, TGF-β, EGF, IGF-1) directly to the endometrium. This stimulates basal stem cell proliferation, promotes spiral artery angiogenesis, downregulates pro-inflammatory cytokines, and upregulates implantation genes such as HOXA10 and LIF.",
      },
      {
        qFa: "آیا برای مراجعه به این کلینیک باید تمام مدارک سیکل‌های قبلی خود در مراکز دیگر را همراه داشته باشیم؟",
        qEn: "Should we bring embryology sheets and medical records from our previous clinics?",
        aFa: "بله؛ هرچه مستندات سیکل‌های قبلی (برگه داروهای تحریک تخمدان، گزارش روز به روز آزمایشگاه جنین‌شناسی، عکس سونوگرافی‌های آندومتر و آزمایش‌های خون قبلی) کامل‌تر باشد، کالبدشکافی پرونده دقیق‌تر خواهد بود. حتی در صورت ناقص بودن مدارک، ما پنل تشخیصی کامل را از ابتدا طراحی می‌کنیم.",
        aEn: "Yes. Bringing your prior stimulation charts, embryology laboratory reports, ultrasound reports, and blood panels allows our team to perform a precise forensic audit. If prior documentation is incomplete, we establish a fresh baseline diagnostic map.",
      },
    ],
    cta: {
      headlineFa: "پیش از انتقال جنین بعدی، علت واقعی شکست‌های قبلی را کشف کنید",
      headlineEn: "Before You Transfer Another Embryo, Uncover the True Root Cause",
      subtextFa:
        "پرونده سیکل‌های قبلی خود را برای کالبدشکافی علمی و طراحی پروتکل اختصاصی توسط دکتر محبوبه تاج‌الدینی ثبت نمایید.",
      subtextEn:
        "Submit your prior cycle records for a forensic 360° root-cause investigation with Dr. Mahboubeh Tajaldini at the Fertility Innovation Institute.",
      buttonFa: "درخواست کالبدشکافی سیکل IVF",
      buttonEn: "REQUEST FORENSIC CYCLE REVIEW",
    },
    relatedSlugs: ["/implantation-optimization", "/ivf-readiness", "/fertility-research"],
  },

  // ============================================================================
  // PAGE 03: IMPLANTATION OPTIMIZATION CLINIC (/implantation-optimization)
  // ============================================================================
  {
    id: "implantation-optimization",
    slug: "/implantation-optimization",
    code: "PROGRAM 03 • ENDOMETRIAL RECEPTIVITY & UTERINE BIO-DESIGN",
    visualType: "hormonal",
    seo: {
      metaTitleFa:
        "کلینیک بهینه‌سازی لانه‌گزینی جنین و پذیرش آندومتر | موسسه نوآوری باروری گرگان",
      metaTitleEn:
        "Implantation Optimization Clinic | Endometrial Receptivity & Uterine Preparation | Fertility Innovation Institute",
      metaDescriptionFa:
        "افزایش شانس لانه‌گزینی جنین در سیکل انتقال (FET/IVF) زیر نظر دکتر محبوبه تاج‌الدینی. درمان آندومتر نازک، بهبود خون‌رسانی رحمی، PRP داخل رحمی و تنظیم پنجره لانه‌گزینی.",
      metaDescriptionEn:
        "Specialized Endometrial Receptivity & Implantation Optimization Clinic in Gorgan led by Dr. Mahboubeh Tajaldini: thin endometrium regeneration, uterine vascular perfusion, PRP bio-priming, and WOI synchronization.",
      keywords: [
        "Implantation Optimization Clinic",
        "Endometrial Receptivity Gorgan",
        "Thin Endometrium Treatment PRP",
        "Uterine Preparation FET",
        "Window of Implantation Optimization",
        "Dr. Mahboubeh Tajaldini",
      ],
    },
    aiImagePrompt: {
      sectionTitle: "Implantation Optimization Clinic — Endometrial Vascular & Molecular Matrix Visual",
      prompt:
        "Cinematic macro scientific visualization of a luminous bio-architectural lattice representing endometrial vascular networks and golden-silver cytokine signaling pathways on a deep obsidian glass surface, soft warm amber and platinum bioluminescence, Apple and Framer luxury aesthetic, 8k render.",
      lightingAndStyle:
        "Subtle volumetric subsurface scattering, matte dark slate #101216 backdrop, refined metallic highlights.",
    },
    hero: {
      kickerFa: "PROGRAM 03 • ENDOMETRIAL RECEPTIVITY & DECIDUAL ARCHITECTURE",
      kickerEn: "PROGRAM 03 • ENDOMETRIAL RECEPTIVITY & DECIDUAL ARCHITECTURE",
      titleFa: "کلینیک بهینه‌سازی لانه‌گزینی و پذیرش آندومتر (Implantation Optimization Clinic)",
      titleEn: "Implantation Optimization Clinic",
      subtitleFa:
        "حتی سالم‌ترین بلاستوسیست یواپلوئید نیز بدون یک آندومتر همگام، پرخون و از نظر ایمنی پذیرا، قادر به لانه‌گزینی نیست. ما حفره رحم را از یک بافت غیرفعال به یک بستر بیولوژیک هوشمند و آماده پذیرش جنین تبدیل می‌کنیم.",
      subtitleEn:
        "Even a chromosomally pristine blastocyst cannot implant inside an unsynchronized, hypoperfused, or inflamed uterine microenvironment. We engineer the endometrial architecture—thickness, vascularity, microbiome, and molecular receptivity—prior to embryo transfer.",
      primaryStat: "Zone 3",
      primaryStatLabelFa: "هدف‌گذاری خون‌رسانی مویرگی زیرآندومتری و ضخامت سه‌خطی",
      primaryStatLabelEn: "SUB-ENDOMETRIAL SPIRAL ARTERY PERFUSION TARGET",
      secondaryStat: "48h WOI",
      secondaryStatLabelFa: "هماهنگ‌سازی دقیق پنجره مولکولی لانه‌گزینی با سن جنین",
      secondaryStatLabelEn: "MOLECULAR WINDOW OF IMPLANTATION SYNCHRONY",
      wordCountBadge: "1,720+ WORD CLINICAL MONOGRAPH",
    },
    overview: {
      headingFa: "مهندسی بستر رحمی: چرا پذیرش آندومتر کلید طلایی موفقیت انتقال جنین است؟",
      headingEn: "Engineering the Maternal Soil: Why Endometrial Receptivity Governs Transfer Success",
      paragraphsFa: [
        "در دهه‌های گذشته، تمرکز اصلی مراکز IVF تقریباً به طور کامل بر روی جنین بوده است؛ در حالی که مطالعات فیزیولوژی تولیدمثل نشان می‌دهند بیش از ۵۰ تا ۶۰ درصد شکست‌های انتقال جنین‌های باکیفیت، ناشی از اختلال در پذیرش آندومتر (Endometrial Receptivity) و ناهماهنگی در گفتگوی متقابل جنین و رحم (Embryo-Maternal Cross-Talk) است. آندومتر انسان یک بافت ساده نیست؛ بلکه یک سیستم پویا از سلول‌های اپی‌تلیال دارای پینوپود (Pinopodes)، سلول‌های استرومایی دسیدوالیزه‌شده، عروق مارپیچی، میکروبیوم اختصاصی و سلول‌های ایمنی تنظیمی است.",
        "«کلینیک بهینه‌سازی لانه‌گزینی» (Implantation Optimization Clinic) در موسسه نوآوری باروری گرگان با بهره‌گیری از دستاوردهای پژوهشی دکتر محبوبه تاج‌الدینی در حوزه فیزیولوژی تولیدمثل، PRP و ریزومحیط رحمی، به طور ویژه برای آماده‌سازی حفره رحم پیش از انتقال جنین فریز شده (FET) یا تازه طراحی شده است.",
        "ما در این کلینیک فراتر از اندازه‌گیری ساده ضخامت آندومتر با خط‌کش سونوگرافی حرکت می‌کنیم. تمرکز ما بر ۶ مولفه کلیدی لانه‌گزینی است: ۱) بازسازی آندومترهای نازک یا مقاوم به استروژن (Thin/Refractory Endometrium)، ۲) افزایش جریان خون شریان‌های رحمی و نفوذ عروق به لایه عملکردی آندومتر (Zone 3 Vascularity)، ۳) همگام‌سازی پنجره لانه‌گزینی و حساسیت گیرنده‌های پروژسترون، ۴) بهینه‌سازی میکروبیوم رحم با غلبه لاکتوباسیلوس‌ها، ۵) تعدیل پاسخ ایمنی موضعی و ۶) آرام‌سازی انقباضات میومتر در روز انتقال.",
      ],
      paragraphsEn: [
        "For decades, assisted reproduction focused overwhelmingly on the embryo while treating the uterus as a passive vessel. Contemporary reproductive physiology proves otherwise: even when transferring high-grade blastocysts, inadequate endometrial receptivity and disrupted embryo-maternal cross-talk account for the majority of implantation failures. The human endometrium is a dynamic neuro-endocrine-immune organ composed of pinopode-bearing luminal epithelium, decidualizing stromal cells, remodeling spiral arterioles, resident microbiota, and specialized immune networks.",
        "The Implantation Optimization Clinic at the Fertility Innovation Institute, directed by Dr. Mahboubeh Tajaldini, translates advanced reproductive physiology and regenerative biomedicine into a dedicated pre-transfer preparation program. Whether you are preparing for a Frozen Embryo Transfer (FET), a fresh IVF transfer, or natural conception support, we systematically optimize the uterine sanctuary before the embryo arrives.",
        "Moving far beyond basic 2D thickness measurements, our protocol engineers six critical dimensions of receptivity: (1) regeneration of thin or estrogen-refractory endometrium via autologous growth factors, (2) enhancement of sub-endometrial Zone-3 microvascular blood flow, (3) precise synchronization of the luteal Window of Implantation (WOI), (4) restoration of a >90% Lactobacillus-dominant endometrial microbiome, (5) decidual cytokine and uNK tolerance modulation, and (6) myometrial wave quiescence on transfer day.",
      ],
      keyMetrics: [
        {
          value: "≥ 8.0 mm",
          labelFa: "الگوی سه‌خطی استاندارد با پرفیوژن عروقی کامل",
          labelEn: "OPTIMAL TRILAMINAR MORPHOLOGY & VASCULAR DENSITY",
        },
        {
          value: "> 90%",
          labelFa: "هدف غلبه لاکتوباسیلوس‌های محافظ در میکروبیوم رحم",
          labelEn: "TARGET PROTECTIVE LACTOBACILLUS DOMINANCE",
        },
        {
          value: "PI < 2.2",
          labelFa: "کاهش مقاومت شریان‌های رحمی در داپلر پیش از انتقال",
          labelEn: "TARGET UTERINE ARTERY PULSATILITY INDEX",
        },
      ],
    },
    whoIsThisFor: {
      headingFa: "این کلینیک برای چه مراجعانی ضروری است؟",
      headingEn: "Who Is the Implantation Optimization Clinic Designed For?",
      introFa:
        "این برنامه برای تمام بانوانی طراحی شده است که قصد انتقال جنین دارند یا با چالش‌های بافتی و عروقی در آندومتر مواجه هستند:",
      introEn:
        "Essential for patients preparing for embryo transfer or facing structural, vascular, or functional endometrial challenges:",
      profiles: [
        {
          titleFa: "مراجعان دارای آندومتر نازک یا مقاوم به استروژن (<7mm)",
          titleEn: "Thin or Estrogen-Refractory Endometrium (< 7.0 mm)",
          descFa:
            "بانوانی که سیکل انتقال جنین آن‌ها به دلیل نرسیدن ضخامت آندومتر به حد نصاب، بارها کنسل شده یا به دوزهای بالای استرادیول پاسخ نمی‌دهند.",
          descEn:
            "Patients who have experienced cancelled FET cycles due to persistently thin lining (<7mm) despite high-dose oral, transdermal, or vaginal estradiol.",
          metric: "LINING REGENERATION",
        },
        {
          titleFa: "کاندیداهای انتقال جنین فریز شده (FET) با جنین‌های محدود",
          titleEn: "Upcoming Frozen Embryo Transfer (FET) Candidates",
          descFa:
            "زوجینی که جنین‌های خود را فریز کرده‌اند و می‌خواهند در فاصله بین پانکچر و انتقال، رحم را به بالاترین سطح آمادگی و خون‌رسانی برسانند.",
          descEn:
            "Couples preparing for a scheduled FET who want to maximize uterine vascularity, progesterone signaling, and endometrial synchrony prior to thawing their embryos.",
          metric: "PRE-FET BIO-PRIMING",
        },
        {
          titleFa: "بیماران با سابقه کورتاژ، چسبندگی رحمی (آشرمن) یا جراحی‌های رحم",
          titleEn: "Prior Uterine Curettage (D&C), Asherman's History or Myomectomy",
          descFa:
            "افرادی که به دنبال کورتاژهای قبلی یا جراحی‌های داخل رحمی دچار کاهش سلول‌های بنیادی لایه بازال آندومتر و ضعف خون‌رسانی شده‌اند.",
          descEn:
            "Women with compromised basal endometrial layers or reduced microvascular density following prior dilation and curettage, hysteroscopy, or fibroid resection.",
          metric: "STEM CELL ACTIVATION",
        },
        {
          titleFa: "مبتلایان به اندومتریوز، آدنومیوز یا التهاب لگنی",
          titleEn: "Endometriosis, Adenomyosis & Progesterone-Resistant Terrain",
          descFa:
            "بیمارانی که به دلیل محیط التهابی لگن دچار مقاومت گیرنده‌های پروژسترون در آندومتر و انقباضات غیرطبیعی رحم در زمان انتقال هستند.",
          descEn:
            "Patients whose pelvic inflammatory microenvironment induces endometrial progesterone resistance, oxidative stress, and hyper-peristaltic uterine contractions.",
          metric: "INFLAMMATORY CONTROL",
        },
      ],
    },
    commonSituations: {
      headingFa: "موقعیت‌های بالینی متداول در آماده‌سازی رحم",
      headingEn: "Common Clinical Scenarios in Uterine Preparation",
      introFa:
        "تجربه بالینی ما نشان می‌دهد که اصلاح هدفمند فیزیولوژی آندومتر می‌تواند سیکل‌های متوقف‌شده را به بارداری موفق تبدیل کند:",
      introEn:
        "How precision physiological intervention resolves the most frequent endometrial roadblocks before embryo transfer:",
      cases: [
        {
          tag: "CLINICAL SCENARIO 01 • REFRACTORY THIN LINING",
          titleFa: "کنسل شدن دو سیکل انتقال جنین به دلیل توقف ضخامت آندومتر روی ۵.۸ میلی‌متر",
          titleEn: "Two Cancelled FET Cycles Due to Endometrial Thickness Stalling at 5.8 mm",
          problemFa:
            "بیمار ۳۵ ساله با ۴ جنین فریز شده که با وجود مصرف ۱۲ میلی‌گرم استرادیول روزانه، ضخامت آندومتر از ۵.۸ میلی‌متر فراتر نمی‌رفت و خون‌رسانی زیرآندومتری ضعیف بود.",
          problemEn:
            "A 35-year-old patient whose FET was cancelled twice because high-dose exogenous estradiol failed to push endometrial thickness past 5.8 mm.",
          rootMechanismFa:
            "دوزهای بسیار بالای استرادیول خوراکی در برخی بیماران باعث اشباع و کاهش حساسیت گیرنده‌های استروژن (Down-regulation) و افزایش مقاومت عروقی می‌شود، در حالی که کمبود فاکتورهای رشد موضعی مانع تکثیر لایه بازال است.",
          rootMechanismEn:
            "Excessive synthetic estradiol can paradoxically downregulate endometrial estrogen receptors (ER-α) when basal layer angiogenesis and local growth factors (VEGF, EGF) are depleted.",
          instituteSolutionFa:
            "تغییر به پروتکل استروژن فیزیولوژیک/سیکل طبیعی اصلاح‌شده، ۲ نوبت تزریق داخل رحمی PRP اتولوگ در روزهای ۸ و ۱۱ سیکل به همراه پروتکل نیتریک اکساید و ویتامین E/ال-آرژنین؛ رسیدن ضخامت به ۸.۴ میلی‌متر سه‌خطی با خون‌رسانی Zone 3.",
          instituteSolutionEn:
            "Transitioning to a modified physiological stimulation protocol combined with two scheduled intrauterine autologous PRP infusions (Days 8 and 11) and microvascular nitric-oxide support—achieving an 8.4 mm trilaminar lining with robust Zone-3 flow.",
        },
        {
          tag: "CLINICAL SCENARIO 02 • ADENOMYOSIS & HYPER-CONTRACTILITY",
          titleFa: "آدنومیوز خفیف، التهاب موضعی و انقباضات رحمی در زمان انتقال جنین",
          titleEn: "Focal Adenomyosis, Progesterone Resistance & Uterine Hyper-Peristalsis",
          problemFa:
            "بیمار ۳۹ ساله با سابقه دردهای قاعدگی، آدنومیوز کانونی و یک انتقال ناموفق جنین علی‌رغم ضخامت ۱۰ میلی‌متری آندومتر.",
          problemEn:
            "A 39-year-old patient with focal adenomyosis and dysmenorrhea who failed a previous FET despite a 10 mm endometrial thickness.",
          rootMechanismFa:
            "در آدنومیوز و اندومتریوز، افزایش بیان آنزیم آروماتاز موضعی و التهاب مزمن باعث سرکوب گیرنده‌های پروژسترون و افزایش امواج انقباضی رحم از سمت فوندوس به سرویکس می‌شود که جنین منتقل‌شده را به بیرون می‌راند.",
          rootMechanismEn:
            "Focal adenomyosis elevates local inflammatory prostaglandins and aromatase activity, inducing progesterone receptor resistance and fundo-cervical myometrial contractions that physically expel the transferred blastocyst.",
          instituteSolutionFa:
            "پروتکل سرکوب التهاب پیش از انتقال، تغذیه ضدپروستاگلاندین، تقویت سطح پروژسترون لوتئال و آرام‌سازی عضله صاف رحم در روز انتقال.",
          instituteSolutionEn:
            "Pre-transfer inflammatory down-regulation, antioxidant luteal priming, intensified progesterone receptor support, and myometrial quiescence management during the transfer window.",
        },
      ],
    },
    scientificBackground: {
      headingFa: "فیزیولوژی مولکولی لانه‌گزینی: از چسبندگی اولیه تا تهاجم تروفوبلاست",
      headingEn: "Scientific Background: Molecular Mechanics of Apposition, Adhesion & Invasion",
      abstractFa:
        "لانه‌گزینی جنین انسان یک فرآیند سه‌مرحله‌ای ظریف شامل هم‌جواری (Apposition)، چسبندگی (Adhesion) و نفوذ (Invasion) است. موفقیت این سه مرحله به هماهنگی دقیق میان استروژن، پروژسترون، فاکتورهای رشد موضعی، پرفیوژن عروقی و میکروبیوم رحم بستگی دارد.",
      abstractEn:
        "Human embryo implantation unfolds across three tightly regulated biomechanical stages: Apposition, stable Adhesion, and trophoblastic Invasion into the maternal decidua. Each stage relies on precise endocrine, vascular, microbial, and paracrine signaling.",
      deepDiveParagraphsFa: [
        "۱. بیولوژی پینوپودها و مولکول‌های چسبندگی آندومتر: تحت تاثیر پروژسترون، سلول‌های اپی‌تلیال سطحی آندومتر زوائدی میکروسکوپی به نام پینوپود (Pinopodes) ایجاد می‌کنند که مایع حفره رحم را جذب کرده و بلاستوسیست را به سطح آندومتر نزدیک می‌کنند. همزمان، بیان گلیکوپروتئین‌های بازدارنده مانند MUC1 در محل اتصال کاهش یافته و مولکول‌های کلیدی نظیر L-selectin ligands، اینتگرین αvβ3، استئوپونتین و فاکتور مهارکننده لوسمی (LIF) بیان می‌شوند تا جنین به دیواره رحم قفل شود.",
        "۲. همودینامیک عروق مارپیچی و هیپوکسی فیزیولوژیک کنترل‌شده: خون‌رسانی زیرآندومتری (Sub-endometrial blood flow) که در سونوگرافی داپلر بر اساس مناطق Applebaum (Zone 1 تا Zone 3) طبقه‌بندی می‌شود، تعیین‌کننده میزان اکسیژن و فاکتورهای رشد در بستر لانه‌گزینی است. افزایش مقاومت شریان رحمی (PI بالا) و عدم نفوذ جریان خون به لایه میانی و داخلی آندومتر، مانع از دسیدوالیزاسیون کامل سلول‌های استرومایی می‌شود.",
        "۳. میکروبیوم آندومتر و سد ایمنی لاکتوباسیلوس: بر خلاف تصور قدیمی، حفره رحم استریل نیست. مطالعات متاژنومیک نشان داده‌اند که وقتی بیش از ۹۰ درصد فلور میکروبی رحم از گونه لاکتوباسیلوس (به‌ویژه L. crispatus) تشکیل شده باشد، محیط اسیدی ملایم و باکتریوسین‌های ترشح‌شده مانع از رشد پاتوژن‌های التهاب‌زا (مانند گاردنرلا، استرپتوکوک و انتروباکتریاسه) شده و نرخ لانه‌گزینی و تولد زنده را تا دو برابر نسبت به میکروبیوم غیرلاکتوباسیلوس (NLDM) افزایش می‌دهد.",
      ],
      deepDiveParagraphsEn: [
        "1. Pinopode Maturation & Integrin-LIF Adhesion Cascades: Progesterone exposure drives luminal epithelial cells to form transient apical projections termed pinopodes, which absorb uterine luminal fluid and bring the hatching blastocyst into intimate contact with the epithelium. Concurrently, local upregulation of Leukemia Inhibitory Factor (LIF), HOXA10, osteopontin, and αvβ3 integrin locks the trophectoderm securely onto the maternal surface.",
        "2. Sub-Endometrial Hemodynamics & Spiral Artery Remodeling: Doppler ultrasonography classifies endometrial perfusion into Applebaum Zones 1 through 3. When uterine artery Pulsatility Index (PI) is elevated (>2.5) and blood flow fails to reach Zone 3 (the inner functional layer), stromal cells suffer metabolic hypoxia, impairing decidualization and early placentation.",
        "3. The Endometrial Microbiome Axis: Metagenomic sequencing confirms that the uterine cavity harbors a distinct microbiome. A Lactobacillus-dominant microbiome (>90% Lactobacillus species, particularly L. crispatus) suppresses pro-inflammatory Toll-like receptor (TLR) signaling and correlates with significantly higher implantation and live birth rates compared to non-Lactobacillus-dominated microbiota.",
      ],
      biomarkers: [
        {
          code: "APPLEBAUM DOPPLER ZONE",
          nameFa: "زون خون‌رسانی زیرآندومتری و PI شریان رحمی",
          nameEn: "Sub-Endometrial Vascular Zone & Uterine Artery PI",
          targetRange: "Zone 3 Perfusion | Mean PI < 2.2",
          clinicalRoleFa: "تضمین خون‌رسانی مویرگی به لایه عملکردی آندومتر در محل اتصال جنین",
          clinicalRoleEn: "Confirms microvascular perfusion reaching the inner functional endometrium",
        },
        {
          code: "ENDOMETRIAL MORPHOLOGY",
          nameFa: "ضخامت و الگوی سه‌خطی آندومتر",
          nameEn: "Endometrial Thickness & Trilaminar Echo Pattern",
          targetRange: "8.0 – 12.0 mm Trilaminar",
          clinicalRoleFa: "آمادگی ساختاری لایه بازال و فانکشنال پیش از شروع فاز لوتئال",
          clinicalRoleEn: "Structural readiness of functional layer prior to progesterone initiation",
        },
        {
          code: "MICROBIOME & pH",
          nameFa: "تعادل فلور لاکتوباسیلوس و عدم وجود آندومتریت",
          nameEn: "Endometrial Microbiota & CD138 Inflammatory Status",
          targetRange: ">90% Lactobacillus | CD138 Negative",
          clinicalRoleFa: "حذف التهاب باکتریایی پنهان که مانع چسبندگی تروفوبلاست می‌شود",
          clinicalRoleEn: "Prevents TLR-mediated inflammatory rejection of the invading blastocyst",
        },
        {
          code: "SERUM E2 / P4 RATIO",
          nameFa: "نسبت فیزیولوژیک استرادیول به پروژسترون در فاز انتقال",
          nameEn: "Peri-Implantation Estradiol & Progesterone Equilibrium",
          targetRange: "E2 200–450 pg/mL | P4 > 14 ng/mL",
          clinicalRoleFa: "جلوگیری از بسته شدن زودرس یا دیررس پنجره لانه‌گزینی (WOI)",
          clinicalRoleEn: "Maintains optimal Window of Implantation opening and decidual stability",
        },
      ],
    },
    assessmentProcess: {
      headingFa: "فرآیند ارزیابی تخصصی پذیرش آندومتر (Assessment Process)",
      headingEn: "Endometrial Receptivity & Vascular Assessment Process",
      introFa:
        "ارزیابی رحم در موسسه ما یک بررسی چندبعدی است که پیش از سیکل انتقال جنین انجام می‌شود:",
      introEn:
        "Before scheduling your embryo transfer, we conduct a multi-dimensional audit of your uterine environment:",
      steps: [
        {
          stepNumber: "STEP 01",
          timeframeFa: "فاز فولیکولار • نقشه‌برداری ساختاری و عروقی",
          timeframeEn: "FOLLICULAR PHASE • STRUCTURAL & DOPPLER MAPPING",
          titleFa: "ارزیابی دینامیک رشد آندومتر و داپلر شریان‌های رحمی",
          titleEn: "Serial Endometrial Growth Kinetics & Uterine Artery Doppler",
          descFa:
            "بررسی سرعت رشد آندومتر، الگوی سه‌خطی، مقاومت شریان‌های رحمی (PI/RI) و نفوذ جریان خون به زون‌های ۱ تا ۳.",
          descEn:
            "Tracking proliferative growth velocity, trilaminar architecture, uterine artery resistance indices, and sub-endometrial Zone 1–3 vascularity.",
        },
        {
          stepNumber: "STEP 02",
          timeframeFa: "غربالگری سلولی • بررسی التهاب و میکروبیوم",
          timeframeEn: "CELLULAR AUDIT • INFLAMMATION & MICROBIOME",
          titleFa: "بررسی آندومتریت مزمن و تعادل فلور میکروبی",
          titleEn: "Chronic Endometritis & Reproductive Tract Microbiome Screening",
          descFa:
            "شناسایی هرگونه التهاب پنهان آندومتر، چسبندگی‌های ظریف یا دیس‌بیوز میکروبی که مانع لانه‌گزینی می‌شود.",
          descEn:
            "Identifying subclinical plasma cell endometritis, micro-polyps, or Lactobacillus depletion that silently block embryo adhesion.",
        },
        {
          stepNumber: "STEP 03",
          timeframeFa: "فاز لوتئال • ارزیابی هورمونی و پنجره پذیرش",
          timeframeEn: "LUTEAL PHASE • ENDOCRINE & WOI CALIBRATION",
          titleFa: "بررسی پاسخ آندومتر به پروژسترون و همگام‌سازی WOI",
          titleEn: "Progesterone Receptor Response & Window of Implantation Timing",
          descFa:
            "ارزیابی فشردگی آندومتر (Endometrial Compaction) پس از شروع پروژسترون و سنجش سطح سرمی هورمون‌ها.",
          descEn:
            "Evaluating luteal endometrial compaction, serum progesterone absorption kinetics, and individualized transfer timing.",
        },
        {
          stepNumber: "STEP 04",
          timeframeFa: "طراحی پروتکل • نقشه آماده‌سازی انتقال",
          timeframeEn: "BLUEPRINT • CUSTOM FET PREPARATION PROTOCOL",
          titleFa: "انتخاب بهترین پروتکل آماده‌سازی رحم (طبیعی، اصلاح‌شده یا HRT)",
          titleEn: "Selecting Natural, Modified-Natural, or Bio-Primed HRT Architecture",
          descFa:
            "تعیین اینکه آیا بدن بیمار در سیکل طبیعی (با جسم زرد فعال) یا سیکل هورمونی تقویت‌شده با PRP بهترین آندومتر را می‌سازد.",
          descEn:
            "Determining whether an ovulatory corpus-luteum cycle or a growth-factor-primed hormonal cycle yields optimal receptivity for your physiology.",
        },
      ],
    },
    optimizationProcess: {
      headingFa: "پروتکل بهینه‌سازی و بازسازی آندومتر (Optimization Process)",
      headingEn: "The Endometrial Bio-Optimization & PRP Priming Process",
      introFa:
        "بر اساس یافته‌های ارزیابی، برنامه بازسازی و آماده‌سازی آندومتر در سه فاز پیش از انتقال جنین اجرا می‌شود:",
      introEn:
        "Our multi-modal intervention upgrades uterine vascularity, thickness, and molecular receptivity prior to embryo transfer:",
      phases: [
        {
          phaseCode: "PHASE 01",
          durationFa: "سیکل پیش از انتقال • بازسازی بستر و حذف التهاب",
          durationEn: "PRE-TRANSFER CYCLE • MICROBIOME & INFLAMMATORY RESET",
          titleFa: "ایجاد محیط ضدالتهابی و غنی‌سازی لاکتوباسیلوس‌های رحمی",
          titleEn: "Microbial Eubiosis & Basal Layer Anti-Inflammatory Priming",
          descFa:
            "پاکسازی التهاب‌های موضعی، تقویت سد دفاعی لاکتوباسیلوس و شروع ریزمغذی‌های رگ‌زا یک ماه پیش از سیکل انتقال.",
          descEn:
            "Restoring a Lactobacillus-dominant uterine ecosystem and initiating microvascular nutritional priming in the cycle preceding transfer.",
          interventionsFa: [
            "پروتکل سین‌بیوتیک و پروبیوتیک اختصاصی دستگاه تولیدمثل (L. crispatus / L. rhamnosus)",
            "بهینه‌سازی ذخایر ویتامین D3، ویتامین E توکوفرول طبیعی و اسیدهای چرب ضدالتهابی",
            "اصلاح کم‌خونی یا کمبود فریتین برای حداکثرسازی ظرفیت اکسیژن‌رسانی خون به آندومتر",
          ],
          interventionsEn: [
            "Targeted reproductive tract Lactobacillus restoration protocol",
            "High-bioavailability vitamin D3, mixed tocopherols, and anti-inflammatory lipid optimization",
            "Iron and ferritin normalization to maximize endometrial tissue oxygenation",
          ],
        },
        {
          phaseCode: "PHASE 02",
          durationFa: "روز ۲ تا ۱۲ سیکل انتقال • تحریک رشد و رگ‌زایی (PRP)",
          durationEn: "DAYS 2–12 OF TRANSFER CYCLE • ANGIOGENESIS & PRP BIO-PRIMING",
          titleFa: "تقویت تکثیر سلولی، خون‌رسانی زیرآندومتری و تزریق PRP اتولوگ",
          titleEn: "Autologous Intrauterine PRP & Microvascular Perfusion Amplification",
          descFa:
            "استفاده از فاکتورهای رشد پلاکتی و محرک‌های نیتریک اکساید برای دستیابی به ضخامت ایده‌آل و خون‌رسانی Zone 3.",
          descEn:
            "Deploying autologous intrauterine PRP infusions alongside vasodilatory amino acids to achieve trilaminar thickness and Zone-3 spiral artery flow.",
          interventionsFa: [
            "انفوزیون داخل رحمی PRP اتولوگ در بیماران دارای آندومتر نازک یا سابقه شکست لانه‌گزینی",
            "پروتکل افزایش نیتریک اکساید (ال-آرژنین، سیترولین، نیترات‌های طبیعی و ورزش‌های پرفیوژن لگنی)",
            "تنظیم دقیق دوز و مسیر تجویز استرادیول برای جلوگیری از اشباع گیرنده‌ها",
          ],
          interventionsEn: [
            "Scheduled intrauterine autologous PRP infusion(s) during the proliferative window",
            "Endothelial nitric-oxide synthase (eNOS) support via L-arginine, L-citrulline, and pelvic perfusion therapy",
            "Precision estradiol titration tailored to receptor sensitivity",
          ],
        },
        {
          phaseCode: "PHASE 03",
          durationFa: "فاز لوتئال و روز انتقال • قفل مولکولی لانه‌گزینی",
          durationEn: "LUTEAL WINDOW & TRANSFER DAY • SYNCHRONY & QUIESCENCE",
          titleFa: "هماهنگ‌سازی پروژسترون، فشردگی آندومتر و آرام‌سازی میومتر",
          titleEn: "Luteal Synchronization, Progesterone Verification & Uterine Quiescence",
          descFa:
            "تضمین سطح طلایی پروژسترون در خون و بافت رحم و جلوگیری از انقباضات رحمی در لحظه جایگذاری جنین.",
          descEn:
            "Confirming optimal serum and tissue progesterone levels while ensuring complete myometrial relaxation during embryo placement.",
          interventionsFa: [
            "تایید سونوگرافیک ضخامت، الگوی سه‌خطی و داپلر Zone 3 پیش از باز کردن پنجره پروژسترون",
            "سنجش پروژسترون سرم پیش از انتقال و پشتیبانی ترکیبی فاز لوتئال",
            "پروتکل تغذیه‌ای و آرام‌سازی عصبی-عضلانی رحم در روز انتقال و ۱۴ روز انتظار",
          ],
          interventionsEn: [
            "Doppler and morphological clearance prior to initiating luteal progesterone exposure",
            "Pre-transfer serum progesterone audit with dual-route luteal rescue if indicated",
            "Peri-transfer myometrial relaxation and anti-inflammatory luteal support protocol",
          ],
        },
      ],
    },
    expectedOutcomes: {
      headingFa: "نتایج بالینی بهینه‌سازی لانه‌گزینی",
      headingEn: "Expected Clinical Outcomes in Uterine Receptivity",
      summaryFa:
        "ایجاد بهترین محیط بیولوژیک ممکن برای پذیرش، چسبندگی و رشد اولیه جنین:",
      summaryEn:
        "Transforming the uterine microenvironment into a highly receptive, vascularized sanctuary for embryo implantation:",
      benchmarks: [
        {
          metric: "+2.1 mm",
          titleFa: "بهبود ضخامت و ساختار سه‌خطی در آندومترهای نازک",
          titleEn: "Measurable Gain in Endometrial Thickness & Trilaminar Clarity",
          descFa:
            "افزایش ضخامت عملکردی آندومتر و کاهش نرخ کنسل شدن سیکل‌های انتقال جنین فریز شده.",
          descEn:
            "Significant expansion of functional endometrial thickness in previously refractory patients, drastically reducing cycle cancellations.",
        },
        {
          metric: "ZONE 3 FLOW",
          titleFa: "ارتقای پرفیوژن عروقی زیرآندومتری و کاهش PI",
          titleEn: "Restored Sub-Endometrial Microvascular Perfusion",
          descFa:
            "رسیدن جریان خون شریان‌های مارپیچی به لایه داخلی آندومتر جهت تغذیه اولیه تروفوبلاست.",
          descEn:
            "Verifiable progression of Doppler blood flow into Applebaum Zone 3 with lowered uterine artery resistance.",
        },
        {
          metric: "IMPLANTATION ↑",
          titleFa: "افزایش نرخ لانه‌گزینی بالینی و تداوم بارداری",
          titleEn: "Elevated Clinical Implantation & Ongoing Pregnancy Rates",
          descFa:
            "همگام‌سازی دقیق ساعت مولکولی رحم و جنین به همراه حذف التهاب‌های پنهان.",
          descEn:
            "Synchronized embryo-endometrial dialogue yielding higher clinical pregnancy progression per transferred blastocyst.",
        },
      ],
    },
    faqs: [
      {
        qFa: "آیا ضخامت ۸ میلی‌متر در سونوگرافی به تنهایی یعنی رحم برای انتقال جنین کاملاً آماده است؟",
        qEn: "Does an 8mm lining on ultrasound guarantee that my uterus is ready for embryo transfer?",
        aFa: "خیر. ضخامت آندومتر تنها یک شاخص آناتومیک دوبعدی است. یک آندومتر ۸ میلی‌متری ممکن است دچار خون‌رسانی ضعیف (فقدان جریان در Zone 3)، التهاب مزمن پنهان، کمبود لاکتوباسیلوس یا مقاومت به پروژسترون باشد. در کلینیک ما، علاوه بر ضخامت، خون‌رسانی داپلر، محیط ایمنی-التهابی و تراز هورمونی فاز لوتئال نیز بهینه‌سازی می‌شوند.",
        aEn: "No. Endometrial thickness is only a 2D anatomical measurement. An 8mm lining can still harbor poor sub-endometrial blood flow, silent chronic endometritis, microbiome dysbiosis, or progesterone resistance. True readiness requires optimizing vascularity, microbiology, and luteal signaling alongside thickness.",
      },
      {
        qFa: "چند روز قبل از انتقال جنین باید برنامه بهینه‌سازی لانه‌گزینی را شروع کنیم؟",
        qEn: "How early before my Frozen Embryo Transfer (FET) should I start this program?",
        aFa: "بهترین زمان مراجعه، یک سیکل کامل (حدود ۴ تا ۶ هفته) پیش از سیکل انتقال جنین است تا فرصت کافی برای اصلاح میکروبیوم، کاهش التهاب و تقویت ذخایر عروقی وجود داشته باشد. با این حال، برای بیمارانی که در ابتدای سیکل انتقال هستند نیز مداخلات فاز فولیکولار و PRP قابل اجراست.",
        aEn: "Ideally, we begin one full menstrual cycle (4 to 6 weeks) prior to your target FET cycle to allow complete microbiome and vascular priming. However, patients presenting at the start of their transfer cycle can still benefit from proliferative-phase PRP and luteal synchronization.",
      },
      {
        qFa: "آیا تزریق PRP داخل رحمی دردناک است یا نیاز به بیهوشی دارد؟",
        qEn: "Is intrauterine PRP infusion painful or does it require anesthesia?",
        aFa: "خیر؛ تزریق PRP داخل رحمی با یک کاتتر بسیار ظریف و نرم (مشابه کاتتر IUI یا انتقال جنین) انجام می‌شود، کاملاً سرپایی و بدون درد است و نیازی به بیهوشی ندارد. کل فرآیند تنها چند دقیقه زمان می‌برد.",
        aEn: "No. Intrauterine PRP infusion is performed using an ultra-fine, soft catheter similar to an IUI or embryo transfer. It is a painless, 5-minute outpatient procedure requiring no anesthesia.",
      },
    ],
    cta: {
      headlineFa: "بستر رحمی خود را برای پذیرش ارزشمندترین جنین‌هایتان آماده کنید",
      headlineEn: "Prepare the Ultimate Uterine Sanctuary for Your Embryo Transfer",
      subtextFa:
        "پیش از سیکل انتقال جنین (FET)، ارزیابی تخصصی پذیرش آندومتر و خون‌رسانی رحمی خود را در موسسه نوآوری باروری گرگان رزرو نمایید.",
      subtextEn:
        "Book your pre-transfer Endometrial Receptivity & Vascular Optimization consultation with Dr. Mahboubeh Tajaldini's team.",
      buttonFa: "رزرو مشاوره بهینه‌سازی لانه‌گزینی",
      buttonEn: "BOOK IMPLANTATION CONSULTATION",
    },
    relatedSlugs: ["/ivf-failure-analysis", "/ivf-readiness", "/pcos-fertility"],
  },
];
