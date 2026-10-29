export interface ProgramSectionItem {
  titleFa: string;
  titleEn: string;
  bodyFa: string;
  bodyEn: string;
  metrics?: string;
}

export interface ProgramFaqItem {
  qFa: string;
  qEn: string;
  aFa: string;
  aEn: string;
}

export interface ProgramPageData {
  id: string;
  code: string;
  visualType: "cellular" | "dna" | "hormonal";
  hero: {
    kickerFa: string;
    kickerEn: string;
    titleFa: string;
    titleEn: string;
    subtitleFa: string;
    subtitleEn: string;
    leadFa: string;
    leadEn: string;
    stats: { labelFa: string; labelEn: string; value: string }[];
  };
  overview: {
    headingFa: string;
    headingEn: string;
    paragraphsFa: string[];
    paragraphsEn: string[];
    keyPillars: ProgramSectionItem[];
  };
  whoIsThisFor: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    profiles: ProgramSectionItem[];
  };
  commonPatientSituations: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    cases: ProgramSectionItem[];
  };
  scientificBackground: {
    headingFa: string;
    headingEn: string;
    paragraphsFa: string[];
    paragraphsEn: string[];
    mechanisms: ProgramSectionItem[];
  };
  assessmentProcess: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    stages: ProgramSectionItem[];
  };
  optimizationProcess: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    phases: ProgramSectionItem[];
  };
  expectedOutcomes: {
    headingFa: string;
    headingEn: string;
    introFa: string;
    introEn: string;
    deliverables: ProgramSectionItem[];
  };
  faqs: ProgramFaqItem[];
  cta: {
    titleFa: string;
    titleEn: string;
    bodyFa: string;
    bodyEn: string;
    buttonFa: string;
    buttonEn: string;
  };
}

export const PROGRAM_PAGES_PART_1: ProgramPageData[] = [
  {
    id: "gti-au",
    code: "PROGRAM 01 // SUBCLASS 858 & MEDTECH CELLULAR SCIENCE",
    visualType: "cellular",
    hero: {
      kickerFa: "برنامه جامع استراتژیک ۰۱ • اقامت دائم مستقیم استرالیا و علوم سلولی-پزشکی",
      kickerEn: "EXECUTIVE PROGRAM 01 • AUSTRALIA SUBCLASS 858 & CELLULAR MEDTECH",
      titleFa: "معماری جامع ویزای استعداد جهانی استرالیا (GTI 858) و انتقال دانش بالینی، سلولی و زیست‌فناوری",
      titleEn: "Australia Global Talent (Subclass 858) & Advanced Cellular-Clinical Architecture",
      subtitleFa:
        "طراحی مسیر اقامت دائم مستقیم بدون نیاز به اسپانسر کارفرما برای پزشکان فوق‌تخصص، پژوهشگران علوم تولیدمثل و جنین‌شناسی، متخصصان غدد و هورمون، و رهبران سلامت دیجیتال تحت نظارت مستقیم دکتر محبوبه تاج‌الدینی.",
      subtitleEn:
        "Direct permanent residency engineering without employer sponsorship for specialist clinicians, reproductive and cellular biologists, endocrinologists, and MedTech innovators under the executive supervision of Dr. Mahboubeh Tajeddini.",
      leadFa:
        "ویزای نخبگان جهانی استرالیا (Global Talent Independent - Subclass 858) یکی از پیشرفته‌ترین و در عین حال سخت‌گیرانه‌ترین چارچوب‌های مهاجرتی جهان برای جذب سرمایه‌های انسانی در حوزه‌های علوم پزشکی نوین، بیوتکنولوژی، سلامت دیجیتال، علوم سلولی و پزشکی بازساختی است. برخلاف مسیرهای سنتی مهاجرت پزشکان که نیازمند سال‌ها فرآیند فرسایشی آزمون‌های عمومی و کار در مناطق کم‌برخوردار هستند، این پروتکل بر پایه اثبات «برجستگی بین‌المللی» (Internationally Recognised Record of Exceptional and Outstanding Achievement) و ظرفیت انتقال فناوری‌های پیشرفته تشخیصی و درمانی به اکوسیستم سلامت استرالیا بنا شده است.",
      leadEn:
        "The Australian Global Talent Independent (Subclass 858) visa represents one of the world's most sophisticated sovereign pathways designed to attract premier human capital across modern medical sciences, reproductive biotechnology, cellular therapeutics, digital health, and precision diagnostics. Unlike conventional clinical migration tracks that mandate years of preliminary licensing examinations and regional placements before residency, this protocol is architected around demonstrating an 'Internationally Recognised Record of Exceptional and Outstanding Achievement' and the capacity to transfer high-impact clinical and scientific methodologies into Australia's healthcare ecosystem.",
      stats: [
        { labelFa: "نرخ تاییدیه علمی پرونده‌ها", labelEn: "Endorsement Success Rate", value: "98.6%" },
        { labelFa: "بازه زمانی صدور اقامت دائم", labelEn: "Direct PR Processing Window", value: "4–8 Months" },
        { labelFa: "سقف درآمد معیار (FWHIT)", labelEn: "Fair Work High Income Threshold", value: "$175,000 AUD" },
        { labelFa: "نیاز به اسپانسر کارفرما یا آزمون", labelEn: "Employer Sponsor / Exam Mandate", value: "Zero (Exempt)" },
      ],
    },
    overview: {
      headingFa: "۱. نمای کلی برنامه (Overview) و فلسفه مهندسی پرونده",
      headingEn: "01. Program Overview & Sovereign Architecture Philosophy",
      paragraphsFa: [
        "در دپارتمان تخصصی TAJ Global به مدیریت دکتر محبوبه تاج‌الدینی، پرونده ویزای Subclass 858 به عنوان یک پروژه صرفاً اداری یا ترجمه مدارک دیده نمی‌شود؛ بلکه به عنوان یک «مونوگراف علمی و بالینی» مهندسی می‌گردد. وزارت کشور استرالیا (Department of Home Affairs) متقاضیان بخش Health Industries و MedTech را بر اساس چهار شاخص کلیدی ارزیابی می‌کند: جایگاه بین‌المللی دستاوردهای پژوهشی و بالینی، برجستگی مستمر در ۳ تا ۵ سال اخیر، پتانسیل ایجاد ارزش افزوده اقتصادی یا علمی در استرالیا، و توانایی کسب درآمد بالاتر از سقف درآمدی Fair Work High Income Threshold (معادل ۱۷۵,۰۰۰ دلار استرالیا در سال) و یا اثبات شایستگی معادل آن برای پژوهشگران دکتری اخیر.",
        "بسیاری از پزشکان متخصص، جراحان، متخصصان زنان و ناباروری (IVF و جنین‌شناسی بالینی)، متخصصان غدد درون‌ریز و پژوهشگران علوم سلولی در ایران و خاورمیانه دارای حجم بالایی از تجربیات بالینی منحصر‌به‌فرد، کیس‌های نادر درمانی و مداخلات جراحی پیشرفته هستند، اما این دستاوردها به زبان استانداردهای بین‌المللی داوری (Scientometrics و مستندات کلینیکال) کدگذاری نشده‌اند. ماموریت ما در این برنامه، تبدیل تجربیات بالینی و آزمایشگاهی شما به یک پورتفولیوی غیرقابل‌رد از منظر داوران استرالیایی است.",
        "این برنامه به صورت یکپارچه تمامی ابعاد پرونده شما را از ممیزی اولیه گوگل اسکالر و اسکوپوس، استخراج پتانسیل‌های نوآورانه از پرونده‌های بیمارستانی و آزمایشگاهی، تدوین بیانیه دستاوردهای استثنایی، معرفی و اخذ تاییدیه رسمی روی فرم 1000 (Form 1000 Endorsement) از اشخاص یا نهادهای برجسته استرالیایی (Australian Citizens/PRs or Peak Bodies with National Reputation) تا ثبت نهایی EOI و پرونده ویزا پوشش می‌دهد.",
      ],
      paragraphsEn: [
        "At TAJ Global, under the direct leadership of Dr. Mahboubeh Tajeddini, a Subclass 858 petition is never treated as a clerical visa application or a mere bundle of translated certificates. Instead, it is engineered as an authoritative scientific and clinical monograph. The Australian Department of Home Affairs evaluates candidates in the Health Industries, Biotechnology, and MedTech sectors across four rigorous dimensions: international recognition of clinical or research breakthroughs, sustained prominence over the past three to five years, tangible asset value to the Australian biomedical landscape, and the verified capacity to command salaries at or above the Fair Work High Income Threshold (AUD $175,000 annually).",
        "A vast majority of senior clinicians, reproductive endocrinologists, embryologists, surgical specialists, and cellular researchers possess extraordinary patient caseloads, rare clinical interventions, and pioneering diagnostic insights. Yet, these accomplishments frequently remain unindexed in global scientometric databases or undocumented in the evidentiary format demanded by sovereign assessors. Our core mandate is to translate your clinical and laboratory mastery into an indisputable, peer-validated evidentiary dossier.",
        "This comprehensive program orchestrates every phase of your transition: from deep scientometric auditing across Web of Science and Scopus, extracting proprietary clinical protocols from your hospital or laboratory practice, drafting the Executive Statement of Exceptional Achievement, securing official Form 1000 nomination from nationally recognized Australian experts or peak bodies, and managing the Expression of Interest (EOI) through to final Permanent Residency grant.",
      ],
      keyPillars: [
        {
          titleFa: "معماری مستندات بالینی و سلولی در بخش Health Industries",
          titleEn: "Health Industries & Cellular MedTech Evidentiary Framing",
          bodyFa:
            "بازتعریف فعالیت‌های درمانی، کلینیکی و آزمایشگاهی متقاضی در قالب نوآوری‌های پزشکی بازساختی، پروتکل‌های تشخیصی مولکولی، بهینه‌سازی شبکه‌های هورمونی و هوش مصنوعی در تصویربرداری پزشکی به گونه‌ای که دقیقاً با اولویت‌های استراتژیک دولت فدرال استرالیا هم‌راستا شود.",
          bodyEn:
            "Reframing your clinical practice and laboratory research into priority sub-sectors—regenerative medicine, molecular diagnostics, reproductive endocrinology, cellular therapy, and AI-driven clinical decision systems—aligned directly with Australian federal health priorities.",
          metrics: "Priority Tier 1 Sector Alignment",
        },
        {
          titleFa: "اخذ تاییدیه رسمی معرف استرالیایی (Form 1000 Nominator)",
          titleEn: "Verified Australian Nominator Endorsement (Form 1000)",
          bodyFa:
            "یکی از بزرگ‌ترین چالش‌های متقاضیان، یافتن فرد یا سازمان دارای شهرت ملی در استرالیا در همان فیلد تخصصی برای امضای فرم ۱۰۰۰ است. شبکه آکادمیک و بالینی TAJ Global در ملبورن، سیدنی و بریزبن امکان ارتباط علمی مستند و اخذ تاییدیه رسمی از اساتید و متخصصان هم‌تراز را فراهم می‌سازد.",
          bodyEn:
            "Securing a Form 1000 signature from an Australian citizen, permanent resident, or peak organization with a national reputation in your exact field is often the primary bottleneck. Our established academic and clinical network across Melbourne, Sydney, and Brisbane facilitates peer-to-peer scientific review and formal endorsement.",
          metrics: "100% Verified Peer Nominators",
        },
        {
          titleFa: "اثبات پتانسیل درآمدی ۱۷۵,۰۰۰ دلار استرالیا (FWHIT Modeling)",
          titleEn: "FWHIT ($175,000 AUD) Economic & Salary Modeling",
          bodyFa:
            "تدوین گزارش‌های تحلیلی بازار کار پزشکی و بیوتکنولوژی استرالیا، ارزیابی قراردادهای پژوهشی، پوزیشن‌های Senior Medical Advisor، کلینیکال ترایال دایرکتور و هیئت علمی برای اثبات قطعی عبور از مرز درآمدی FWHIT بدون نیاز به جاب‌آفر اجباری.",
          bodyEn:
            "Constructing actuarial salary benchmarks, clinical trial directorship valuations, MedTech advisory compensation models, and academic fellowship equivalents that conclusively satisfy the AUD $175,000 FWHIT requirement even without a mandatory prior job offer.",
          metrics: "Actuarial Salary Substantiation",
        },
      ],
    },
    whoIsThisFor: {
      headingFa: "۲. این برنامه مناسب چه کسانی است؟ (Who Is This For?)",
      headingEn: "02. Who Is This Program Designed For?",
      introFa:
        "این برنامه به طور اختصاصی برای چهار گروه از نخبگان علوم پزشکی، زیستی و فناوری‌های سلامت طراحی شده است که خواهان دریافت اقامت دائم مستقیم برای خود و اعضای خانواده‌شان در کوتاه‌ترین زمان ممکن هستند:",
      introEn:
        "This flagship protocol is specifically architected for four distinct cohorts of medical, biological, and healthcare technology leaders seeking direct permanent residency for themselves and their families without clinical career interruption:",
      profiles: [
        {
          titleFa: "پزشکان متخصص، فوق‌تخصص، جراحان و متخصصان تولیدمثل و غدد",
          titleEn: "Specialist Physicians, Surgeons & Reproductive Endocrinologists",
          bodyFa:
            "پزشکانی که دارای بورد تخصصی یا فوق‌تخصصی، سابقه مدیریت بخش‌های بیمارستانی، کلینیک‌های فوق‌تخصصی باروری (IVF)، مراکز غدد و متابولیسم، جراحی‌های پیشرفته یا تالیف مقالات بالینی هستند و نمی‌خواهند سال‌ها درگیر صف آزمون‌های اولیه پزشکی عمومی شوند.",
          bodyEn:
            "Board-certified specialists, surgeons, reproductive medicine clinicians, and endocrinologists managing complex patient cohorts, fertility centers, or specialized hospital departments who wish to secure Permanent Residency first and transition into clinical or research leadership seamlessly.",
          metrics: "MD / Fellowship / Board Specialists",
        },
        {
          titleFa: "پژوهشگران علوم سلولی، ژنتیک پزشکی، جنین‌شناسی و داروسازی",
          titleEn: "Cellular Biologists, Medical Geneticists, Embryologists & PharmD Scientists",
          bodyFa:
            "متخصصان آزمایشگاه‌های ژنتیک، جنین‌شناسان بالینی، دکترای داروسازی، بیوشیمی بالینی و ایمونولوژیست‌هایی که روی نشانگرهای زیستی (Biomarkers)، درمان‌های سلولی، ویرایش ژنومی یا فرمولاسیون‌های دارویی نوین کار کرده‌اند و دارای مقالات Q1/Q2 یا ثبت اختراع هستند.",
          bodyEn:
            "Senior embryologists, medical geneticists, PharmD researchers, and cellular immunologists working on biomarker discovery, stem cell differentiation, genomic sequencing, or novel drug delivery systems with peer-reviewed outputs or patent filings.",
          metrics: "PhD / PharmD / Clinical Lab Directors",
        },
        {
          titleFa: "اعضای هیئت علمی دانشگاه‌های علوم پزشکی و سرپرستان طرح‌های تحقیقاتی",
          titleEn: "Medical University Faculty Members & Principal Investigators (PIs)",
          bodyFa:
            "استادیاران، دانشیاران و استادان تمام دانشگاه‌های علوم پزشکی و مراکز تحقیقاتی که سابقه هدایت پایان‌نامه‌ها، داوری در ژورنال‌های بین‌المللی (Peer Review)، تالیف کتاب یا اجرای طرح‌های تحقیقاتی بالینی را در کارنامه دارند.",
          bodyEn:
            "Assistant, Associate, and Full Professors at medical universities who have supervised doctoral theses, served on journal editorial or peer-review boards, authored clinical guidelines, or led funded biomedical investigations.",
          metrics: "Academic Faculty & Senior Researchers",
        },
        {
          titleFa: "بنیان‌گذاران و مدیران ارشد استارتاپ‌های سلامت دیجیتال، تجهیزات پزشکی و بیوتک",
          titleEn: "MedTech Founders, Digital Health Architects & Biotech Executives",
          bodyFa:
            "مدیران فنی و علمی شرکت‌های دانش‌بنیان حوزه تجهیزات پزشکی، پلتفرم‌های تله‌مدیسین، هوش مصنوعی در تشخیص پزشکی و کیت‌های آزمایشگاهی که محصول تجاری‌سازی‌شده، مالکیت فکری (IP) یا قراردادهای بیمارستانی معتبر دارند.",
          bodyEn:
            "Founders, CTOs, and Chief Scientific Officers of medical device enterprises, AI diagnostic platforms, bioinformatics pipelines, and diagnostic kit manufacturers possessing commercialized IP, regulatory approvals, or hospital deployment contracts.",
          metrics: "MedTech IP & Commercial Leaders",
        },
      ],
    },
    commonPatientSituations: {
      headingFa: "۳. وضعیت‌های رایج مراجعین و سناریوهای بالینی-پژوهشی (Common Situations)",
      headingEn: "03. Common Applicant & Clinical-Patient Scenarios",
      introFa:
        "در جلسات ارزیابی تخصصی که تحت نظر دکتر محبوبه تاج‌الدینی برگزار می‌شود، ما به طور مستمر با پزشکان و پژوهشگران برجسته‌ای روبه‌رو می‌شویم که به دلیل باورهای نادرست یا مشاوره‌های غیرتخصصی، تصور می‌کنند واجد شرایط ویزای نخبگان نیستند. در ادامه چهار سناریوی واقعی و پرتکرار را بررسی می‌کنیم:",
      introEn:
        "During diagnostic consultations led by Dr. Mahboubeh Tajeddini, we frequently encounter accomplished clinicians and researchers who mistakenly believe they do not qualify for sovereign talent visas due to conventional misconceptions. Below are four representative clinical and academic scenarios we routinely resolve:",
      cases: [
        {
          titleFa: "سناریوی اول: پزشک بالینی پرکار با حجم بالای بیمار اما تعداد مقالات محدود",
          titleEn: "Scenario A: High-Volume Clinical Specialist with Limited Recent Publications",
          bodyFa:
            "بسیاری از جراحان، متخصصان زنان و نازایی یا متخصصان داخلی به دلیل تمرکز ۱۲ ساعته روزانه بر درمان بیماران و مدیریت کلینیک، فرصت نگارش مقالات متعدد در سال‌های اخیر را نداشته‌اند و شاخص H-index آن‌ها زیر ۵ است. راه‌حل ما: در پروتکل TAJ Global، ما پرونده‌های بالینی منحصر‌به‌فرد، پروتکل‌های درمانی بهینه‌شده برای بیماران پیچیده (مانند اختلالات هورمونی مقاوم یا کیس‌های نادر جراحی) را استخراج کرده و از طریق برنامه SREP™ به مستندات علمی داوری‌شده، گزارش‌های بالینی بین‌المللی و گواهی‌های تاثیرگذاری در سلامت عمومی تبدیل می‌کنیم.",
          bodyEn:
            "Many senior surgeons, fertility specialists, and internists dedicate 60+ hours weekly to complex patient care, leaving minimal time for academic publishing—resulting in a modest H-index below 5. Our Resolution: Through our proprietary SREP™ protocol, we extract your rare patient cases, novel surgical modifications, and longitudinal treatment outcomes, transforming them into indexed clinical studies, international peer-review credentials, and documented healthcare impact statements.",
          metrics: "Clinical-to-Scientometric Conversion",
        },
        {
          titleFa: "سناریوی دوم: پژوهشگر علوم سلولی و تولیدمثل با مقالات بالا اما فاقد معرف استرالیایی",
          titleEn: "Scenario B: Cellular & Reproductive Scientist Lacking an Australian Nominator",
          bodyFa:
            "محقق یا جنین‌شناسی که بیش از ۱۰ مقاله ISI و صدها استناد علمی دارد اما هیچ ارتباط شخصی با اساتید یا نهادهای استرالیایی برای امضای فرم ۱۰۰۰ ندارد و ایمیل‌هایش به دانشگاه‌های استرالیا بی‌پاسخ مانده است. راه‌حل ما: تیم اجرایی ما خلاصه مدیریتی (Executive Dossier) استاندارد از دستاوردهای سلولی و مولکولی متقاضی تهیه کرده و آن را مستقیماً در پنل همکاران آکادمیک و بالینی خود در استرالیا مطرح می‌کند تا پس از داوری علمی، فرم ۱۰۰۰ به صورت رسمی و مستند امضا شود.",
          bodyEn:
            "A researcher or clinical embryologist possessing 10+ Q1/Q2 publications and strong citation velocity, yet lacking any personal connection in Australia to sign Form 1000 after cold emails to university faculty go unanswered. Our Resolution: We synthesize your research into an institutional-grade Executive Dossier and present it directly to our network of Australian professors and clinical directors for formal peer evaluation and Form 1000 endorsement.",
          metrics: "Direct Institutional Matchmaking",
        },
        {
          titleFa: "سناریوی سوم: نگرانی از سقف درآمدی ۱۷۵,۰۰۰ دلار به دلیل تفاوت ارزش ریال",
          titleEn: "Scenario C: Currency Disparity & Proving the $175,000 AUD Salary Threshold",
          bodyFa:
            "پزشکان و اساتید دانشگاه در ایران که به دلیل افت ارزش واحد پول ملی، معادل دلاری فیش حقوقی فعلی‌شان کمتر از ۱۷۵,۰۰۰ دلار استرالیا است و تصور می‌کنند به همین دلیل رد می‌شوند. راه‌حل ما: قانون مهاجرت استرالیا صراحتاً اجازه می‌دهد به جای درآمد فعلی، «توانایی کسب این درآمد در بازار کار استرالیا» (Future Earning Capacity) اثبات شود. ما با ارائه ارزیابی‌های رسمی حقوقی، بنچمارک‌های تخصصی نظام سلامت استرالیا و پیشنهادهای همکاری پژوهشی/مشاوره‌ای، این شرط را با موفقیت ۱۰۰٪ پوشش می‌دهیم.",
          bodyEn:
            "Clinicians and professors whose current domestic compensation—when converted at local exchange rates—falls below AUD $175,000, leading them to assume automatic disqualification. Our Resolution: Australian migration regulations explicitly permit demonstrating 'future capacity to attract a salary at or above the FWHIT in Australia.' We substantiate this using accredited Australian medical remuneration benchmarks, industry advisory valuations, and structured commercial impact models.",
          metrics: "Future Earning Capacity Substantiation",
        },
        {
          titleFa: "سناریوی چهارم: فاصله زمانی از فارغ‌التحصیلی یا تغییر گرایش از بالین به صنعت",
          titleEn: "Scenario D: Transitioning Between Clinical Practice, R&D, and MedTech Industry",
          bodyFa:
            "متخصصانی که پس از سال‌ها طبابت یا کار آزمایشگاهی، وارد حوزه مدیریت تجهیزات پزشکی، کلینیک‌های زیبایی و بازساختی یا توسعه دارویی شده‌اند و رزومه آن‌ها چندپاره به نظر می‌رسد. راه‌حل ما: ما یک «نخ تسبیح علمی واحد» (Unified Scientific Narrative) طراحی می‌کنیم که نشان می‌دهد چگونه تجربه بالینی اولیه به خلق نوآوری‌های صنعتی و مدیریتی منجر شده و متقاضی را به یک رهبر نادر دوگانه (Clinician-Innovator) تبدیل کرده است.",
          bodyEn:
            "Professionals who have pivoted from hospital practice or bench science into medical device leadership, regenerative aesthetics, or pharmaceutical R&D, leaving their CV appearing fragmented. Our Resolution: We engineer a Unified Scientific Narrative that bridges your clinical foundation with your commercial innovation, positioning you as a rare 'Clinician-Innovator'—the exact profile prized by Global Talent officers.",
          metrics: "Clinician-Innovator Positioning",
        },
      ],
    },
    scientificBackground: {
      headingFa: "۴. مبانی علمی و چارچوب‌های علم‌سنجی برنامه (Scientific Background)",
      headingEn: "04. Scientific Background & Scientometric Methodology",
      paragraphsFa: [
        "رویکرد دپارتمان پژوهشی TAJ Global بر پایه علم «سایمتریکس و علم‌سنجی پیشرفته» (Advanced Scientometrics) و استانداردهای ارزیابی کلینیکال آکادمی علوم پزشکی و سلامت استرالیا (AAHMS) استوار است. در ارزیابی یک پرونده Global Talent، افسران ارشد و پنل‌های تخصصی صرفاً به تعداد مقالات نگاه نمی‌کنند؛ بلکه «ضریب نفوذ استنادی نرمال‌شده بر اساس رشته» (Field-Weighted Citation Impact - FWCI)، جایگاه نویسندگی (First / Corresponding Authorship)، ضریب تاثیر ژورنال‌ها در رتبه‌بندی Clarivate Journal Citation Reports (JCR Q1/Q2) و میزان ارجاع به کار متقاضی در گایدلاین‌های بالینی یا پتنت‌های بین‌المللی را بررسی می‌کنند.",
        "در حوزه‌های تخصصی همچون پزشکی تولیدمثل، غدد درون‌ریز، زیست‌شناسی سلولی و پزشکی دقیق (Precision Medicine)، ارزش یک مطالعه به میزان حل یک چالش پاتوفیزیولوژیک یا بهبود نرخ موفقیت درمانی وابسته است. به عنوان مثال، بهینه‌سازی محیط کشت جنین، شناسایی نشانگرهای مولکولی مقاومت به انسولین یا طراحی الگوریتم‌های پیش‌بینی پاسخ هورمونی، زمانی برای افسر پرونده معنادار می‌شوند که تاثیر آن‌ها بر کاهش هزینه‌های سیستم سلامت استرالیا (Medicare) و ارتقای کیفیت زندگی بیماران با داده‌های آماری کمی‌سازی شود.",
        "ما از ماتریس‌های تحلیلی اختصاصی برای نقشه‌برداری از شبکه استنادات متقاضی استفاده می‌کنیم. هر استناد علمی در پرونده شما بر اساس اعتبار دانشگاه یا مرکز تحقیقاتی ارجاع‌دهنده (مثلاً ارجاع از محققان دانشگاه ملبورن، هاروارد، آکسفورد یا موسسه کارولینسکا) وزن‌دهی می‌شود تا اثبات گردد که دستاوردهای علمی شما در مرزهای دانش جهانی (Frontiers of Global Science) مورد استفاده قرار گرفته است.",
      ],
      paragraphsEn: [
        "The methodology of TAJ Global's Research Department is grounded in advanced scientometrics and the clinical evaluation standards of the Australian Academy of Health and Medical Sciences (AAHMS). When adjudicating a Subclass 858 dossier, senior immigration officers and technical panels look far beyond raw publication counts. They scrutinize Field-Weighted Citation Impact (FWCI), authorship hierarchy (First and Corresponding Authorship), Clarivate Journal Citation Reports quartiles (JCR Q1/Q2), and downstream citations within clinical practice guidelines or international patents.",
        "In specialized domains such as reproductive medicine, endocrinology, cellular biology, and precision healthcare, the weight of a scientific contribution is defined by its capacity to resolve a pathophysiological bottleneck or elevate patient outcomes. Whether optimizing blastocyst culture media, mapping molecular pathways in endocrine disorders, or deploying machine-learning models in diagnostic pathology, we quantify how your work reduces burden on national healthcare systems (such as Australia's Medicare) and advances translational medicine.",
        "We deploy proprietary bibliometric mapping to analyze the geographic and institutional topology of your citations. Every citation referencing your work from top-tier global institutions—such as the University of Melbourne, Harvard Medical School, Oxford, or Karolinska Institutet—is cataloged and highlighted as objective, third-party proof that your discoveries actively shape the frontiers of international medical science.",
      ],
      mechanisms: [
        {
          titleFa: "ضریب نفوذ استنادی وزنی (Field-Weighted Citation Impact - FWCI)",
          titleEn: "Field-Weighted Citation Impact (FWCI) Calibration",
          bodyFa:
            "استانداردسازی استنادات شما نسبت به میانگین جهانی همان زیرشاخه تخصصی پزشکی (مثلاً مقایسه جراحی مغز و اعصاب یا غدد با میانگین جهانی همان رشته) برای اثبات قرارگیری در صدک بالای ۵٪ یا ۱۰٪ پژوهشگران برتر.",
          bodyEn:
            "Normalizing your citation velocity against the global baseline of your exact clinical sub-specialty, proving mathematically that your research outputs rank within the top 5% to 10% of peers worldwide.",
          metrics: "Top 5%–10% Percentile Proof",
        },
        {
          titleFa: "مستندسازی انتقال بالینی (Translational Clinical Impact)",
          titleEn: "Translational Clinical & Patient Outcome Quantification",
          bodyFa:
            "کمی‌سازی نتایج درمانی از سطح سلولی و آزمایشگاهی (Bench) تا بالین بیمار (Bedside) شامل کاهش عوارض پس از درمان، افزایش دقت تشخیصی و بهبود پروتکل‌های استاندارد بیمارستانی.",
          bodyEn:
            "Quantifying bench-to-bedside impact, including diagnostic sensitivity improvements, reduction in post-operative morbidity, optimization of hormonal protocols, and adoption of your methods across clinical centers.",
          metrics: "Bench-to-Bedside Evidence",
        },
        {
          titleFa: "تحلیل شبکه داوری همتا و مرجعیت علمی (Peer-Review Authority)",
          titleEn: "Peer-Review Authority & Editorial Gatekeeping",
          bodyFa:
            "ثبت و نمایه‌سازی رسمی سوابق داوری شما در Web of Science (Publons) و مجلات انتشارات Elsevier، Springer Nature و Wiley به عنوان گواه جایگاه شما در مقام قاضی و داور علم دیگر دانشمندان.",
          bodyEn:
            "Verifying and indexing your peer-review records across Web of Science, Elsevier, Springer Nature, and Wiley journals to establish your status as an international scientific arbiter.",
          metrics: "Verified WOS / Publons Arbiter",
        },
      ],
    },
    assessmentProcess: {
      headingFa: "۵. فرآیند ارزیابی و عارضه‌یابی تخصصی (Assessment Process)",
      headingEn: "05. Diagnostic Assessment & Portfolio Audit Process",
      introFa:
        "پیش از عقد هرگونه قرارداد اجرایی، پرونده علمی و بالینی شما طی یک فرآیند ۴ مرحله‌ای دقیق توسط تیم کارشناسی و شخص دکتر محبوبه تاج‌الدینی ممیزی می‌شود تا نقاط قوت، شکاف‌های مدارک و شانس دقیق موفقیت شما به صورت کمی مشخص گردد:",
      introEn:
        "Before initiating any formal petition, every candidate undergoes a rigorous four-stage diagnostic audit supervised by Dr. Mahboubeh Tajeddini to establish baseline viability, identify evidentiary gaps, and calculate exact approval probability:",
      stages: [
        {
          titleFa: "مرحله ۰۱: ممیزی علم‌سنجی و بالینی پایه (Baseline Scientometric & Clinical Triage)",
          titleEn: "Stage 01: Baseline Scientometric & Clinical Triage",
          bodyFa:
            "بررسی کامل پروفایل‌های Google Scholar، Scopus، Web of Science، ORCID و سوابق طبابت، جراحی یا مدیریت آزمایشگاهی برای تعیین امتیاز پایه در ماتریس TAJ-INDEX™.",
          bodyEn:
            "Comprehensive extraction and audit of your Google Scholar, Scopus, Web of Science, and ORCID profiles alongside your clinical caseload and hospital leadership records to compute your baseline TAJ-INDEX™ score.",
          metrics: "48-Hour Diagnostic Turnaround",
        },
        {
          titleFa: "مرحله ۰۲: تحلیل شکاف در برابر معیارهای وزارتی (Ministerial Direction Gap Analysis)",
          titleEn: "Stage 02: Ministerial Direction & Priority Sector Gap Analysis",
          bodyFa:
            "مقایسه دقیق دستاوردهای فعلی شما با آخرین دستورالعمل‌های وزارت کشور استرالیا (Ministerial Direction) و شناسایی بخش‌هایی که نیازمند مستندسازی قوی‌تر، استناد بیشتر یا گواهی‌های بین‌المللی هستند.",
          bodyEn:
            "Benchmarking your existing credentials against the latest Australian Ministerial Directions for Subclass 858 to pinpoint specific evidentiary vulnerabilities before any government submission.",
          metrics: "Zero-Risk Gap Identification",
        },
        {
          titleFa: "مرحله ۰۳: امکان‌سنجی تطابق با معرفین استرالیایی (Nominator Compatibility Audit)",
          titleEn: "Stage 03: Australian Nominator Compatibility Mapping",
          bodyFa:
            "بررسی هم‌پوشانی موضوعی تخصص شما با اساتید، روسای بخش‌های بیمارستانی و نهادهای علمی استرالیا جهت تضمین دریافت فرم ۱۰۰۰ معتبر و مستند.",
          bodyEn:
            "Mapping your sub-specialty against active Australian research chairs, clinical department heads, and peak medical bodies to ensure seamless Form 1000 endorsement alignment.",
          metrics: "Peer Nominator Pre-Validation",
        },
        {
          titleFa: "مرحله ۰۴: تدوین گزارش کتبی و نقشه راه استراتژیک (Written Viability Blueprint)",
          titleEn: "Stage 04: Written Viability Blueprint & Timeline Delivery",
          bodyFa:
            "ارائه گزارش کتبی جامع شامل درصد شانس قبولی، مسیرهای جایگزین یا مکمل، جدول زمانی دقیق هر فاز و برنامه پیشنهادی بهینه‌سازی رزومه پیش از سابمیت.",
          bodyEn:
            "Delivering a formal written assessment detailing your exact probability of success, comparative sovereign options, milestone schedule, and required pre-lodgement optimization steps.",
          metrics: "Signed Executive Audit Report",
        },
      ],
    },
    optimizationProcess: {
      headingFa: "۶. فرآیند بهینه‌سازی و مهندسی ارتقای پرونده (Optimization Process)",
      headingEn: "06. Scientific & Evidentiary Optimization Process",
      introFa:
        "تفاوت اصلی TAJ Global با دفاتر مهاجرتی متعارف در این است که ما به جای ارسال رزومه خام فعلی شما، یک فاز «مهندسی و ارتقای علمی» (Optimization Phase) را اجرا می‌کنیم تا پرونده به سطح استاندارد صدک اول متقاضیان برسد:",
      introEn:
        "What distinguishes TAJ Global from conventional migration agencies is that we never submit a static, unoptimized CV. We execute a structured Scientific & Evidentiary Optimization protocol to elevate your profile into the top tier of global applicants:",
      phases: [
        {
          titleFa: "فاز اول: ارتقای ضریب نفوذ علمی و انتشارات هدفمند (SREP™ Integration)",
          titleEn: "Phase 01: Targeted Scientometric & Publication Fortification (SREP™)",
          bodyFa:
            "در صورت نیاز پرونده، متقاضی وارد پروژه‌های تحقیقاتی مشترک، نگارش مقالات مروری سیستماتیک (Systematic Reviews) یا متاآنالیزهای بالینی در ژورنال‌های Q1/Q2 و افزایش دیده‌شدن بین‌المللی مقالات پیشین می‌شود تا منحنی رشد استنادات شیب صعودی پیدا کند.",
          bodyEn:
            "Where required, candidates are integrated into active multi-center research collaborations, high-impact systematic reviews, and clinical meta-analyses in Q1/Q2 journals, accelerating citation velocity and international visibility.",
          metrics: "+40% to +120% Citation Velocity",
        },
        {
          titleFa: "فاز دوم: تثبیت جایگاه داوری و کمیته‌های علمی بین‌المللی",
          titleEn: "Phase 02: International Peer-Review & Editorial Credentialing",
          bodyFa:
            "ثبت رسمی دعوت‌نامه‌های داوری از ژورنال‌های معتبر بین‌المللی، دریافت گواهی‌های رسمی داوری (Certified Peer-Review Records) و عضویت در انجمن‌های تخصصی بین‌المللی هم‌راستا با پرونده.",
          bodyEn:
            "Securing and indexing formal peer-review invitations from leading international journals and establishing active memberships in prestigious global medical and scientific societies.",
          metrics: "Verified Journal Arbiter Status",
        },
        {
          titleFa: "فاز سوم: نگارش مونوگراف دستاوردها و توصیه‌نامه‌های استراتژیک",
          titleEn: "Phase 03: Executive Monograph & Reference Letter Architecture",
          bodyFa:
            "تالیف بیانیه جامع علمی متقاضی، طراحی ساختار ۶ تا ۸ توصیه‌نامه تخصصی از دانشمندان و پزشکان برجسته بین‌المللی و تکمیل مستندات فرم ۱۰۰۰ توسط معرف استرالیایی با ادبیات حقوقی-علمی بی‌نقص.",
          bodyEn:
            "Drafting your comprehensive Statement of Exceptional Achievement, structuring 6 to 8 authoritative letters of recommendation from international peers, and finalizing the Form 1000 nomination package.",
          metrics: "150–250 Page Evidentiary Dossier",
        },
        {
          titleFa: "فاز چهارم: سابمیت EOI با کد اولویت‌دار و مدیریت پرونده تا صدور اقامت",
          titleEn: "Phase 04: Priority EOI Lodgement & Sovereign Case Management",
          bodyFa:
            "ثبت Expression of Interest در پورتال SkillSelect/Global Talent با استراتژی برجسته‌سازی معیارهای اولویت‌دار، پیگیری دعوت‌نامه و ثبت نهایی ویزای Subclass 858 برای متقاضی و تمامی اعضای خانواده.",
          bodyEn:
            "Lodging the Expression of Interest (EOI) with precision priority-sector coding, managing departmental correspondence, and executing the final Subclass 858 visa application for the principal applicant and family.",
          metrics: "End-to-End Sovereign Representation",
        },
      ],
    },
    expectedOutcomes: {
      headingFa: "۷. نتایج مورد انتظار و دستاوردهای ملموس (Expected Outcomes)",
      headingEn: "07. Expected Outcomes & Measurable Deliverables",
      introFa:
        "با تکمیل پروتکل Subclass 858 در دپارتمان دکتر محبوبه تاج‌الدینی، متقاضی نه تنها به اقامت دائم دست می‌یابد، بلکه زیرساخت حرفه‌ای و علمی خود را برای ورود درخشان به استرالیا تثبیت می‌کند:",
      introEn:
        "Upon completing the Subclass 858 protocol under Dr. Mahboubeh Tajeddini's supervision, candidates secure not only direct Permanent Residency but also a fortified international academic and clinical standing:",
      deliverables: [
        {
          titleFa: "ویزای اقامت دائم مستقیم استرالیا (Subclass 858 PR) برای کل خانواده",
          titleEn: "Direct Permanent Residency (Subclass 858) for the Entire Family",
          bodyFa:
            "دریافت اقامت دائم از لحظه ورود برای متقاضی اصلی، همسر و فرزندان وابسته، همراه با دسترسی کامل به بیمه درمانی رایگان Medicare، تحصیل رایگان فرزندان در مدارس دولتی و حق کار و تحصیل بدون هیچ محدودیتی در تمام ایالت‌های استرالیا.",
          bodyEn:
            "Immediate Permanent Residency from day one for the primary applicant, spouse, and dependent children—granting full Medicare coverage, domestic university tuition rates, and unrestricted work and study rights across Australia.",
          metrics: "Unrestricted Permanent Residency",
        },
        {
          titleFa: "پورتفولیوی علمی و بالینی ارتقایافته در سطح بین‌المللی",
          titleEn: "Internationally Fortified Scientific & Clinical Portfolio",
          bodyFa:
            "افزایش پایدار شاخص H-index، مقالات نمایه‌شده در Web of Science و Scopus، گواهی‌های داوری بین‌المللی و رزومه‌ای استاندارد که برای اخذ پوزیشن‌های دانشگاهی، فلوشیپ‌های تحقیقاتی و مدیریت در صنعت سلامت استرالیا آماده است.",
          bodyEn:
            "A permanently elevated H-index, indexed Q1/Q2 publications, verified peer-review credentials, and an executive curriculum vitae tailored for Australian research institutes, hospitals, and MedTech enterprises.",
          metrics: "Global Career Acceleration",
        },
        {
          titleFa: "شبکه ارتباطی مستقیم با نخبگان و مراکز علمی استرالیا",
          titleEn: "Established Peer Network in Australian Academia & Healthcare",
          bodyFa:
            "ایجاد ارتباط رسمی و حرفه‌ای با معرف استرالیایی (Nominator) و شبکه‌ای از اساتید و متخصصان مقیم استرالیا که مسیر کاریابی تخصصی و ادغام حرفه‌ای پس از ورود را به شدت تسریع می‌کند.",
          bodyEn:
            "Direct professional linkage with your Australian nominator and peer specialists, accelerating post-arrival integration into clinical research teams, advisory boards, or specialist licensing pathways.",
          metrics: "Pre-Arrival Professional Integration",
        },
      ],
    },
    faqs: [
      {
        qFa: "آیا برای اقدام در ویزای استعداد جهانی استرالیا (Subclass 858) پزشکان نیاز به قبولی در آزمون AMC یا ثبت‌نام AHPRA دارند؟",
        qEn: "Do physicians need AMC exam clearance or AHPRA registration before applying for the Subclass 858 Global Talent visa?",
        aFa:
          "خیر. ویزای Subclass 858 بر پایه برجستگی علمی، پژوهشی و نوآوری در حوزه سلامت (Health Industries / MedTech) صادر می‌شود و نیازی به معادل‌سازی نظام پزشکی (AMC/AHPRA) پیش از دریافت اقامت دائم ندارد. پزشکان می‌توانند ابتدا اقامت دائم خود و خانواده‌شان را دریافت کرده و سپس با آرامش کامل و با داشتن اقامت دائم در داخل استرالیا، مسیر کلینیکال یا پژوهشی دلخواه خود را دنبال کنند.",
        aEn:
          "No. The Subclass 858 visa is adjudicated on your international scientific, clinical-research, and MedTech innovation record rather than general medical licensing. Physicians can secure Permanent Residency first without completing AMC exams or AHPRA registration beforehand, and subsequently pursue clinical registration or research leadership inside Australia as Permanent Residents.",
      },
      {
        qFa: "حداقل نمره زبان انگلیسی مورد نیاز برای ویزای Subclass 858 چقدر است؟",
        qEn: "What is the minimum English language requirement for the Subclass 858 visa?",
        aFa:
          "برخلاف ویزاهای مهارتی یا پزشکی که نیازمند آیلتس ۷ یا ۸ هستند، در ویزای Subclass 858 حداقل زبان مورد نیاز «Functional English» (معادل آیلتس ۴.۵ جنرال یا آکادمیک، یا PTE 30) است و حتی امکان پرداخت هزینه آموزشی زبان به جای ارائه مدرک نیز در چارچوب قانونی وجود دارد.",
        aEn:
          "Unlike general skilled or medical licensing visas that demand IELTS 7.0 or 8.0, Subclass 858 requires only 'Functional English' (equivalent to IELTS 4.5 overall or PTE 30), offering exceptional flexibility for busy senior clinicians and scientists.",
      },
      {
        qFa: "آیا محدودیت سنی (مانند سقف ۴۵ سال در ویزاهای مهارتی) در این برنامه وجود دارد؟",
        qEn: "Is there a strict age cap of 45 years as seen in general skilled migration?",
        aFa:
          "خیر، ویزای Subclass 858 برای افراد بین ۱۸ تا ۵۵ سال به صورت استاندارد باز است و حتی برای اساتید و پزشکان بالای ۵۵ سال نیز در صورت اثبات منفعت استثنایی برای جامعه علمی و اقتصادی استرالیا، معافیت سنی کاملاً تعریف‌شده و قابل اجراست.",
        aEn:
          "Standard eligibility extends up to age 55 (compared to the strict 45-year cap on skilled visas), and structured exemptions exist for distinguished specialists and professors over 55 who demonstrate exceptional scientific or economic benefit to Australia.",
      },
      {
        qFa: "در صورتی که در حال حاضر معرف استرالیایی (Nominator) نداشته باشم، چگونه فرم ۱۰۰۰ تکمیل می‌شود؟",
        qEn: "How is Form 1000 completed if I do not personally know an Australian nominator?",
        aFa:
          "دپارتمان TAJ Global پس از تکمیل مونوگراف علمی شما، پرونده را به کمیته اساتید، پزشکان و متخصصان همکار در استرالیا که دارای شهرت ملی در همان حوزه تخصصی هستند ارائه می‌دهد تا پس از بررسی و تایید اصالت علمی دستاوردها، فرم ۱۰۰۰ به صورت کاملاً رسمی و مستند صادر گردد.",
        aEn:
          "Once your scientific monograph is engineered, TAJ Global presents your dossier to our network of Australian professors, senior clinicians, and peak industry fellows in your discipline for peer evaluation and formal Form 1000 endorsement.",
      },
    ],
    cta: {
      titleFa: "ارزیابی تخصصی پرونده Subclass 858 شما توسط دکتر محبوبه تاج‌الدینی",
      titleEn: "Schedule Your Subclass 858 Diagnostic Audit with Dr. Mahboubeh Tajeddini",
      bodyFa:
        "برای دریافت آنالیز کتبی رزومه، بررسی دقیق شاخص‌های علم‌سنجی و تدوین نقشه راه اختصاصی ویزای استعداد جهانی استرالیا، پرونده خود را ثبت فرمایید.",
      bodyEn:
        "Submit your curriculum vitae and Google Scholar profile for a comprehensive written viability audit and custom Subclass 858 engineering roadmap.",
      buttonFa: "ثبت درخواست ارزیابی تخصصی GTI 858",
      buttonEn: "INITIATE SUBCLASS 858 PORTFOLIO AUDIT",
    },
  },
  {
    id: "eb1a-us",
    code: "PROGRAM 02 // US EB-1A & EB-2 NIW GENOMIC & CLINICAL PETITION",
    visualType: "dna",
    hero: {
      kickerFa: "برنامه جامع استراتژیک ۰۲ • گرین کارت مستقل آمریکا ویژه نخبگان پزشکی و علمی",
      kickerEn: "EXECUTIVE PROGRAM 02 • US EB-1A & EB-2 NIW SOVEREIGN GREEN CARD",
      titleFa: "معماری حقوقی-علمی گرین کارت آمریکا از طریق توانایی خارق‌العاده (EB-1A) و معافیت منافع ملی (EB-2 NIW)",
      titleEn: "United States Extraordinary Ability (EB-1A) & National Interest Waiver (EB-2 NIW) Architecture",
      subtitleFa:
        "اخذ اقامت دائم ایالات متحده (Green Card) به صورت Self-Petition (مستقل از کارفرما و بدون نیاز به گواهی PERM) برای پزشکان، پژوهشگران ژنتیک و سرطان، متخصصان علوم اعصاب و رهبران بیوتکنولوژی.",
      subtitleEn:
        "Self-petitioned United States Permanent Residency without employer sponsorship or PERM labor certification for physicians, genomic and oncology researchers, neuroscientists, and biotechnology pioneers.",
      leadFa:
        "ایالات متحده آمریکا از طریق دو مسیر طلایی EB-1A (Alien of Extraordinary Ability) و EB-2 NIW (National Interest Waiver) به پزشکان، پژوهشگران علوم پایه و بالینی، متخصصان ژنومیک و رهبران فناوری‌های سلامت اجازه می‌دهد بدون نیاز به پیشنهاد شغلی (Job Offer) و بدون وابستگی به کارفرمای آمریکایی، راساً برای دریافت گرین کارت خود و خانواده‌شان اقدام نمایند. کلید موفقیت در برابر افسران اداره مهاجرت آمریکا (USCIS) در مراکز نبراسکا و تگزاس، تلفیق دقیق «مستندات علمی و بالینی» با «استدلال‌های حقوقی مبتنی بر دکترین Dhanasar و Kazarian» است.",
      leadEn:
        "The United States offers two premier self-petitioned Permanent Residency conduits—EB-1A (Extraordinary Ability) and EB-2 NIW (National Interest Waiver)—enabling physicians, biomedical scientists, genomic researchers, and healthcare technologists to secure Green Cards independently of any US employer or PERM labor certification. Prevailing before USCIS adjudicators at the Nebraska and Texas Service Centers requires a masterfully engineered synthesis of peer-reviewed scientific evidence and legal argumentation anchored in the Kazarian and Matter of Dhanasar doctrines.",
      stats: [
        { labelFa: "بررسی فوری با Premium Processing", labelEn: "USCIS Premium Processing", value: "15–45 Days" },
        { labelFa: "نیاز به کارفرما یا PERM", labelEn: "Employer / PERM Requirement", value: "None (Self-Petition)" },
        { labelFa: "معیارهای قانونی Kazarian / Dhanasar", labelEn: "Statutory Evidentiary Prongs", value: "3 / 10 Criteria" },
        { labelFa: "پوشش گرین کارت خانواده", labelEn: "Spouse & Unmarried Under-21 Children", value: "100% Direct PR" },
      ],
    },
    overview: {
      headingFa: "۱. نمای کلی برنامه (Overview) و دکترین حقوقی-علمی USCIS",
      headingEn: "01. Program Overview & USCIS Evidentiary Doctrine",
      paragraphsFa: [
        "پرونده‌های EB-1A و EB-2 NIW در آمریکا بیش از هر چیز یک «دفاعیه علمی مستند» (Evidentiary Legal-Scientific Brief) هستند. در مسیر EB-2 NIW، متقاضی باید بر اساس پرونده مرجع Matter of Dhanasar سه شرط اساسی (Three Prongs) را اثبات کند: اول آنکه فعالیت پیشنهادی وی در آمریکا (Proposed Endeavor) دارای ارزش ذاتی چشمگیر و اهمیت ملی (Substantial Merit and National Importance) است؛ دوم آنکه متقاضی به دلیل سوابق علمی، مقالات، استنادات و مهارت‌های بالینی/آزمایشگاهی در جایگاه بسیار مناسبی برای پیشبرد این هدف قرار دارد (Well Positioned)؛ و سوم آنکه در مجموع، چشم‌پوشی از شرط کارفرما و گواهی کار به نفع ایالات متحده است.",
        "در سطح بالاتر یعنی ویزای EB-1A، متقاضی باید حداقل ۳ معیار از ۱۰ معیار قانونی اداره مهاجرت آمریکا (مانند انتشار مقالات علمی در ژورنال‌های برجسته، داوری کار سایر متخصصان، مشارکت‌های علمی با اهمیت ویژه در رشته تخصصی، عضویت در انجمن‌های نخبگانی یا دریافت جوایز ملی/بین‌المللی) را احراز کرده و در مرحله دوم (Final Merits Determination بر اساس دکترین Kazarian) نشان دهد که در زمره درصد کوچکی از متخصصان قرار دارد که به قله رشته خود رسیده‌اند.",
        "در دپارتمان دکتر محبوبه تاج‌الدینی، ما به جای نگارش کلی‌گویی‌های اداری، Proposed Endeavor شما را مستقیماً به اولویت‌های فدرال کاخ سفید، موسسات ملی سلامت آمریکا (NIH)، سازمان غذا و دارو (FDA) و مراکز کنترل بیماری‌ها (CDC)—نظیر ابتکار Cancer Moonshot، پزشکی بازساختی، سلامت مادر و جنین، اختلالات متابولیک و هوش مصنوعی در تشخیص بالینی—پیوند می‌زنیم.",
      ],
      paragraphsEn: [
        "EB-1A and EB-2 NIW petitions before USCIS are fundamentally rigorous legal-scientific briefs. Under the landmark precedent Matter of Dhanasar, an EB-2 NIW petitioner must satisfy a three-prong analytical framework: first, that the applicant's Proposed Endeavor possesses both substantial merit and national importance to the United States; second, that the petitioner is well-positioned to advance that endeavor based on past scientific, clinical, or technological achievements; and third, that on balance, it benefits the United States to waive the requirements of a job offer and labor certification.",
        "At the pinnacle tier, EB-1A (Alien of Extraordinary Ability) requires satisfying at least three of ten statutory regulatory criteria—such as authorship of scholarly articles, judging the work of peers, original scientific or clinical contributions of major significance, or critical leadership roles—followed by a holistic Final Merits Determination under the Kazarian two-step analysis proving sustained national or international acclaim.",
        "Under Dr. Mahboubeh Tajeddini's direction, we never rely on generic templates. We architect your Proposed Endeavor and Petition Letter to align directly with documented US federal initiatives issued by the National Institutes of Health (NIH), the FDA, the CDC, and the White House Office of Science and Technology Policy—spanning oncology genomics, reproductive endocrinology, cellular therapeutics, neurodegenerative disorders, and AI-assisted diagnostics.",
      ],
      keyPillars: [
        {
          titleFa: "طراحی Proposed Endeavor منطبق با اولویت‌های فدرال NIH و CDC",
          titleEn: "NIH & Federal Healthcare Priority Endeavor Engineering",
          bodyFa:
            "تدوین طرح پژوهشی و بالینی آینده شما در آمریکا با استناد به آمارهای رسمی سلامت عمومی آمریکا، بودجه‌های مصوب کنگره و گزارش‌های NIH برای اثبات بی‌چون‌وچرای اهمیت ملی (National Importance).",
          bodyEn:
            "Structuring your US Proposed Endeavor with direct citations to NIH strategic plans, CDC epidemiological data, and federal healthcare mandates to establish incontrovertible National Importance.",
          metrics: "Dhanasar Prong 1 Mastery",
        },
        {
          titleFa: "تحلیل دو مرحله‌ای Kazarian برای احراز حداقل ۳ تا ۵ معیار EB-1A",
          titleEn: "Kazarian Two-Step Evidentiary Fortification (EB-1A)",
          bodyFa:
            "مستندسازی دقیق معیارهای ده‌گانه با ارائه گزارش‌های مستقل علم‌سنجی، اثبات قرارگیری در صدک‌های بالای استنادی و تشریح اثرات بالینی کشفیات شما برای عبور مطمئن از مرحله Final Merits.",
          bodyEn:
            "Building ironclad documentation across 3 to 5 statutory criteria supported by percentile bibliometrics, independent expert testimonies, and clinical adoption proof to prevail in Final Merits adjudication.",
          metrics: "Zero-RFE Architecture Goal",
        },
        {
          titleFa: "نگارش توصیه‌نامه‌های مستقل (Independent Advisory Letters)",
          titleEn: "Independent Expert Testimonial & Advisory Structuring",
          bodyFa:
            "طراحی ساختار علمی نامه‌های تایید از اساتید و پزشکان مستقل (Independent Experts) که شخصاً با شما همکار نبوده‌اند اما بر اساس مقالات و دستاوردهایتان، اهمیت حیاتی کار شما را برای ایالات متحده گواهی می‌دهند.",
          bodyEn:
            "Drafting technical testimonial frameworks for independent subject-matter experts who validate the original significance of your research based purely on your published record and clinical impact.",
          metrics: "Independent Peer Validation",
        },
      ],
    },
    whoIsThisFor: {
      headingFa: "۲. این برنامه مناسب چه کسانی است؟ (Who Is This For?)",
      headingEn: "02. Who Is This Program Designed For?",
      introFa:
        "مسیرهای EB-1A و EB-2 NIW برای طیف گسترده‌ای از پزشکان، محققان دکتری و متخصصان علوم زیستی و مهندسی پزشکی طراحی شده است که می‌خواهند بدون محدودیت‌های ویزاهای موقت کاری (H-1B) یا توریستی/تحصیلی، مستقیماً گرین کارت دریافت کنند:",
      introEn:
        "Our EB-1A and EB-2 NIW protocols serve clinicians, doctoral researchers, and biomedical engineers seeking direct permanent residency without the lottery constraints of H-1B or the temporary limitations of J-1/F-1 visas:",
      profiles: [
        {
          titleFa: "پزشکان عمومی، متخصص و فوق‌تخصص (حتی پیش از قبولی در USMLE)",
          titleEn: "Physicians, Surgeons & Clinical Specialists (Pre- or Post-USMLE)",
          bodyFa:
            "پزشکانی که دارای سوابق پژوهشی، مقالات بالینی و تجربیات درمانی ارزشمند هستند می‌توانند از طریق تحقیق و توسعه پزشکی (Clinical & Translational Research) گرین کارت EB-2 NIW یا EB-1A دریافت کنند. داشتن گرین کارت پیش از ورود به آمریکا، شانس مچ شدن در دوره رزیدنسی یا فلوشیپ (Match) را به دلیل عدم نیاز بیمارستان به صدور ویزای J-1/H-1B چندین برابر می‌کند.",
          bodyEn:
            "Physicians with published clinical research can secure an EB-2 NIW or EB-1A Green Card anchored in translational medical research prior to completing USMLE steps. Holding a Green Card dramatically increases residency and fellowship match rates across US teaching hospitals.",
          metrics: "Green Card Before Residency Match",
        },
        {
          titleFa: "پژوهشگران دکتری (PhD)، پست‌داک و کارشناسی ارشد علوم زیستی و پزشکی",
          titleEn: "PhD Scientists, Postdoctoral Fellows & Advanced Degree Researchers",
          bodyFa:
            "متخصصان ژنتیک، بیوتکنولوژی، علوم سلولی، ایمونولوژی، نوروساینس، فارماکولوژی و بیوانفورماتیک که دارای مدرک تحصیلات تکمیلی (Advanced Degree) و سابقه انتشار مقاله در ژورنال‌های بین‌المللی هستند.",
          bodyEn:
            "Researchers in genomics, cellular biology, immunology, neuroscience, pharmacology, and bioinformatics holding an advanced degree and a track record of peer-reviewed publications and citations.",
          metrics: "Direct PhD / MSc Pathway",
        },
        {
          titleFa: "دندانپزشکان متخصص و داروسازان پژوهشی (DDS / DMD / PharmD)",
          titleEn: "Academic Dentists, Oral Surgeons & Pharmaceutical Scientists",
          bodyFa:
            "دندانپزشکان و داروسازانی که در حوزه‌های بیومواد دندانی، مهندسی بافت، ایمپلنتولوژی پیشرفته، نانوداروها و سیستم‌های دارورسانی هدفمند فعالیت پژوهشی و کلینیکی داشته‌اند.",
          bodyEn:
            "Dental specialists and pharmaceutical scientists pioneering biomaterials, tissue regeneration, craniofacial reconstruction, nanomedicine, and targeted drug delivery systems.",
          metrics: "DDS / PharmD Research Track",
        },
        {
          titleFa: "مهندسان پزشکی، متخصصان هوش مصنوعی در سلامت و بیومکانیک",
          titleEn: "Biomedical Engineers, Medical AI Architects & Biomechanics Experts",
          bodyFa:
            "محققانی که الگوریتم‌های یادگیری عمیق برای تشخیص تومورها، پردازش سیگنال‌های حیاتی، رباتیک جراحی یا پروتزهای هوشمند طراحی کرده‌اند.",
          bodyEn:
            "Engineers developing deep-learning diagnostic imaging models, physiological signal processing, surgical robotics, or smart implantable medical devices.",
          metrics: "STEM & AI Healthcare Priority",
        },
      ],
    },
    commonPatientSituations: {
      headingFa: "۳. وضعیت‌های رایج متقاضیان و چالش‌های پرونده‌های آمریکا (Common Situations)",
      headingEn: "03. Common Applicant Scenarios & USCIS Adjudication Challenges",
      introFa:
        "بسیاری از متقاضیان با ابهامات جدی درباره تعداد استنادات لازم، ریسک RFE (درخواست مدارک بیشتر توسط افسر) و نحوه اقدام از داخل ایران یا سایر کشورها روبه‌رو هستند. در ادامه چهار وضعیت رایج و راهکار تخصصی ما را مشاهده می‌کنید:",
      introEn:
        "Applicants frequently face uncertainty regarding citation thresholds, Requests for Evidence (RFEs), and consular processing logistics. Below are four common situations we systematically resolve:",
      cases: [
        {
          titleFa: "سناریوی اول: تردید بین انتخاب مسیر EB-1A یا EB-2 NIW",
          titleEn: "Scenario A: Deciding Between EB-1A and EB-2 NIW Filing Strategies",
          bodyFa:
            "متقاضیانی که بین ۵۰ تا ۲۰۰ استناد علمی دارند و نمی‌دانند آیا باید برای EB-1A (که صف انتظار کوتاه‌تر و سرعت بالاتری دارد) اقدام کنند یا EB-2 NIW. راه‌حل ما: در بسیاری از پرونده‌های قوی، ما استراتژی «اقدام موازی یا پلکانی» (Dual / Staged Filing Strategy) را اجرا می‌کنیم؛ به این صورت که ابتدا Priority Date متقاضی با پرونده مستحکم EB-2 NIW تثبیت شده و هم‌زمان با تقویت معیارهای داوری و استنادی در برنامه SREP™، پرونده EB-1A با سرویس Premium Processing (پاسخ ۱۵ روزه) ثبت می‌گردد.",
          bodyEn:
            "Candidates with 50 to 200 citations who are unsure whether to target the faster EB-1A category or the more flexible EB-2 NIW route. Our Resolution: We frequently deploy a Dual or Staged Filing Strategy—locking in your Priority Date via an ironclad EB-2 NIW petition while simultaneously fortifying your peer-review and citation metrics via SREP™ to file an upgraded EB-1A petition under 15-day Premium Processing.",
          metrics: "Dual Filing Optimization",
        },
        {
          titleFa: "سناریوی دوم: دریافت RFE در پرونده‌هایی که قبلاً توسط متقاضی یا دفاتر عمومی ثبت شده",
          titleEn: "Scenario B: Overcoming Complex USCIS Requests for Evidence (RFE)",
          bodyFa:
            "متقاضیانی که خودشان یا از طریق وکلای عمومی اقدام کرده‌اند و افسر USCIS با صدور یک RFE سنگین، «اهمیت ملی» (Prong 1) یا «اهمیت ویژه دستاوردها» (Major Significance) را زیر سوال برده است. راه‌حل ما: تیم علمی دکتر تاج‌الدینی با استخراج داده‌های اپیدمیولوژیک آمریکا، اخذ نظرات کارشناسی مستقل جدید و بازنویسی کامل استدلال‌های علمی-حقوقی، پاسخ‌هایی تدوین می‌کند که نرخ تبدیل RFE به Approval در آن‌ها بالای ۹۶٪ است.",
          bodyEn:
            "Applicants who previously filed pro se or through generalist firms and received a challenging RFE questioning 'National Importance' or 'Original Contributions of Major Significance.' Our Resolution: Our scientific-legal team reconstructs the evidentiary record using federal epidemiological data, new independent expert letters, and rigorous percentile bibliometrics to convert RFEs into approvals.",
          metrics: "96%+ RFE Rescue Rate",
        },
        {
          titleFa: "سناریوی سوم: پزشکان بالینی که قصد طبابت مستقیم قبل از گذراندن USMLE را ندارند",
          titleEn: "Scenario C: Clinicians Filing Without USMLE Licensure",
          bodyFa:
            "پزشکانی که نگرانند چون هنوز آزمون USMLE را نگذرانده‌اند، افسر مهاجرت پرونده NIW آن‌ها را به دلیل عدم امکان طبابت بلافاصله رد کند. راه‌حل ما: ما Proposed Endeavor شما را به طور دقیق بر «رهبری پژوهش‌های بالینی، توسعه پروتکل‌های تشخیصی-درمانی و انتقال دانش پزشکی» متمرکز می‌کنیم که قانوناً نیازمند لایسنس طبابت ایالتی در لحظه ورود نیست و کاملاً منطبق با رویه‌های قضایی USCIS است.",
          bodyEn:
            "Physicians concerned that lacking USMLE certification will trigger an NIW denial on the grounds of clinical licensing restrictions. Our Resolution: We structure your Proposed Endeavor around translational clinical research, diagnostic protocol development, and biomedical investigation—activities that do not require state medical licensure upon entry and fully satisfy USCIS precedent.",
          metrics: "USMLE-Independent Structuring",
        },
        {
          titleFa: "سناریوی چهارم: متقاضیان دارای مقالات مشترک (Co-Authored) که نویسنده اول نیستند",
          titleEn: "Scenario D: Demonstrating Individual Impact in Multi-Author Studies",
          bodyFa:
            "پژوهشگرانی که اکثر مقالاتشان حاصل کار تیمی است و در همه آن‌ها نویسنده اول یا مسئول نیستند. راه‌حل ما: ما با تهیه «گواهی‌های تفکیک نقش علمی» (Contribution Attestation Letters) از نویسندگان مسئول و سرپرستان آزمایشگاه، نقش حیاتی و منحصر‌به‌فرد متقاضی در طراحی آزمایش، تحلیل داده‌ها یا بخش بالینی مطالعه را برای افسر پرونده اثبات می‌کنیم.",
          bodyEn:
            "Researchers whose highest-cited papers involve large collaborative teams where they are co-authors rather than first authors. Our Resolution: We secure formal Contribution Attestation Letters from Principal Investigators and corresponding authors detailing your indispensable technical, clinical, or analytical role in the study.",
          metrics: "Co-Author Impact Substantiation",
        },
      ],
    },
    scientificBackground: {
      headingFa: "۴. مبانی علمی و استانداردهای مستندسازی USCIS (Scientific Background)",
      headingEn: "04. Scientific Background & USCIS Policy Manual Standards",
      paragraphsFa: [
        "در ویرایش جدید کتابچه سیاست‌گذاری اداره مهاجرت آمریکا (USCIS Policy Manual - Volume 6, Part F)، تاکید ویژه‌ای بر رشته‌های STEM (علوم، فناوری، مهندسی و ریاضیات) و زیرشاخه‌های علوم زیستی، ژنومیک، بیوتکنولوژی و سلامت پیشرفته صورت گرفته است. بر اساس این دستورالعمل، زمانی که یک پژوهشگر یا پزشک نشان می‌دهد فعالیت علمی وی با فناوری‌های حیاتی و نوظهور (Critical and Emerging Technologies - CET) فهرست‌شده توسط شورای ملی علم و فناوری کاخ سفید هم‌خوانی دارد، وزن اثبات شرط اول و سوم Dhanasar به شکل چشمگیری افزایش می‌یابد.",
        "از دیدگاه زیست‌پزشکی، حوزه‌هایی نظیر زیست‌شناسی تولیدمثل و ناباروری، مهندسی سلول‌های بنیادی، ایمونوتراپی سرطان، اختلالات غدد و متابولیسم، مقاومت آنتی‌بیوتیکی و هوش مصنوعی در تشخیص پزشکی مستقیماً با بحران‌های سلامت عمومی و امنیت زیستی ایالات متحده درگیر هستند. اما صرف اشاره به نام این رشته‌ها کافی نیست؛ افسر USCIS نیازمند مشاهده «مکانیسم اثر علمی» (Scientific Mechanism of Action) و «ردپای استنادی مستقل» (Independent Citation Footprint) است.",
        "تیم پژوهشی ما هر یک از مقالات شما را کالبدشکافی کرده و نشان می‌دهد که چگونه سایر دانشمندان در دانشگاه‌های آمریکا، اروپا و شرق آسیا، یافته‌های سلولی، مولکولی یا بالینی شما را به عنوان مبنایی برای تحقیقات بعدی خود (Foundational Reference) به کار برده‌اند؛ نه اینکه صرفاً در مقدمه مقاله به صورت گذرا به آن اشاره کرده باشند.",
      ],
      paragraphsEn: [
        "Under the updated USCIS Policy Manual (Volume 6, Part F), heightened evidentiary weight is accorded to STEM disciplines, explicitly encompassing biomedical sciences, genomics, cellular engineering, bioinformatics, and advanced healthcare technologies. When a petition demonstrates direct alignment with the White House National Science and Technology Council's list of Critical and Emerging Technologies (CET), the evidentiary threshold across Dhanasar Prongs 1 and 3 is substantially reinforced.",
        "From a biomedical standpoint, fields such as reproductive biology, stem cell therapeutics, oncology immunotherapy, endocrine network regulation, antimicrobial resistance, and AI diagnostic pathology directly address urgent US public health and biosecurity priorities. However, merely naming a field is insufficient; USCIS adjudicators demand proof of your specific scientific mechanism of action and an independent citation footprint.",
        "Our research analysts perform a granular content analysis of every paper citing your work, distinguishing substantive reliance—where independent laboratories in the US, Europe, and Asia build their experimental protocols upon your findings—from mere background mentions.",
      ],
      mechanisms: [
        {
          titleFa: "تحلیل کیفی استنادات مستقل (Substantive Citation Content Analysis)",
          titleEn: "Substantive Citation Content & Reliance Analysis",
          bodyFa:
            "استخراج پاراگراف‌های دقیق از مقالات محققان دیگر که در آن‌ها از روش، فرمولاسیون یا یافته‌های بالینی شما به عنوان منبع اصلی استفاده شده و ارائه هایلایت‌های مستند در پرونده.",
          bodyEn:
            "Extracting verbatim excerpts from independent global publications that explicitly credit your clinical trials, cellular assays, or diagnostic algorithms as foundational to their own findings.",
          metrics: "Qualitative Citation Exhibits",
        },
        {
          titleFa: "مقایسه صدک‌های Clarivate InCites و Essential Science Indicators",
          titleEn: "Clarivate InCites & ESI Percentile Benchmarking",
          bodyFa:
            "استفاده از جداول مرجع سال انتشار و رشته تخصصی برای اثبات اینکه مقاله متقاضی با داشتن مثلاً ۲۵ استناد در سال ۲۰۲۴، در واقع جزو ۳٪ مقالات برتر جهان در آن شاخه خاص پزشکی است.",
          bodyEn:
            "Deploying year- and discipline-adjusted Clarivate Essential Science Indicators (ESI) baselines to prove that even recent publications rank within the top 1%, 5%, or 10% globally.",
          metrics: "ESI Percentile Certification",
        },
        {
          titleFa: "هم‌راستاسازی با بودجه‌های فدرال NIH RePORTER",
          titleEn: "NIH RePORTER Federal Grant Alignment",
          bodyFa:
            "مستندسازی پروژه‌های فعال تامین مالی‌شده توسط دولت فدرال آمریکا در پایگاه NIH RePORTER که دقیقاً در راستای موضوع پژوهشی شما هستند تا تقاضای ملی برای تخصص شما اثبات شود.",
          bodyEn:
            "Cross-referencing your Proposed Endeavor with active multi-million-dollar federal grants indexed in NIH RePORTER to prove immediate national demand for your expertise.",
          metrics: "Federal Grant Corroboration",
        },
      ],
    },
    assessmentProcess: {
      headingFa: "۵. فرآیند ارزیابی و امکان‌سنجی پرونده آمریکا (Assessment Process)",
      headingEn: "05. USCIS Diagnostic Assessment & Criteria Audit",
      introFa:
        "ارزیابی پرونده‌های EB-1A و EB-2 NIW نیازمند بررسی هم‌زمان معیارهای کمی علم‌سنجی و قابلیت استدلال حقوقی است. فرآیند ارزیابی ما در ۴ گام استاندارد انجام می‌شود:",
      introEn:
        "Evaluating eligibility for EB-1A and EB-2 NIW requires simultaneous analysis of quantitative scientometrics and statutory legal criteria across four structured diagnostic steps:",
      stages: [
        {
          titleFa: "گام ۰۱: ممیزی ۱۰ معیار EB-1A و ۳ شرط Dhanasar",
          titleEn: "Step 01: Statutory 10-Criteria & 3-Prong Triage",
          bodyFa:
            "بررسی تک‌تک مدارک تحصیلی، مقالات، استنادات، داوری‌ها، جوایز، عضویت‌ها و مسئولیت‌های اجرایی برای تعیین اینکه متقاضی در حال حاضر کدام مسیر (EB-1A، EB-2 NIW یا هر دو) را با بالاترین شانس احراز می‌کند.",
          bodyEn:
            "Auditing your degrees, publications, citations, peer reviews, awards, memberships, and leadership roles against the 10 EB-1A criteria and 3 NIW prongs to determine optimal filing eligibility.",
          metrics: "Full Statutory Matrix Check",
        },
        {
          titleFa: "گام ۰۲: تحلیل تفکیکی استنادات خودی و مستقل (Self vs. Independent Citations)",
          titleEn: "Step 02: Independent vs. Self-Citation Disaggregation",
          bodyFa:
            "تفکیک استنادات مستقل از خوداستنادی‌ها و بررسی توزیع جغرافیایی دانشمندانی که به مقالات شما ارجاع داده‌اند جهت اطمینان از استحکام پرونده در برابر بررسی‌های سخت‌گیرانه افسران نبراسکا و تگزاس.",
          bodyEn:
            "Separating independent citations from self-citations and mapping the global institutional distribution of citing authors to ensure resilience under Texas and Nebraska Service Center scrutiny.",
          metrics: "Independent Acclaim Audit",
        },
        {
          titleFa: "گام ۰۳: طراحی اولیه عنوان و ساختار Proposed Endeavor",
          titleEn: "Step 03: Proposed Endeavor Conceptual Formulation",
          bodyFa:
            "تعریف دقیق محور فعالیت علمی-پزشکی شما در ایالات متحده به گونه‌ای که هم ادامه منطقی رزومه گذشته‌تان باشد و هم دارای اهمیت ملی سراسری در آمریکا شناخته شود.",
          bodyEn:
            "Formulating your specialized US Proposed Endeavor so that it seamlessly extends your past research track record while demonstrating broad national impact across the United States.",
          metrics: "Endeavor Viability Lock",
        },
        {
          titleFa: "گام ۰۴: ارائه گزارش مکتوب استراتژی اقدام و زمان‌بندی (Filing Roadmap)",
          titleEn: "Step 04: Written Filing Strategy & Priority Date Roadmap",
          bodyFa:
            "تحویل گزارش کامل شامل انتخاب سرویس عادی یا Premium Processing، برنامه تقویت معیارهای کسری و برآورد دقیق زمان دریافت Approval فرم I-140 و نوبت سفارت.",
          bodyEn:
            "Delivering a comprehensive written roadmap detailing Regular vs. Premium Processing options, pre-filing metric enhancement steps, and projected I-140 approval and consular timelines.",
          metrics: "Executive I-140 Blueprint",
        },
      ],
    },
    optimizationProcess: {
      headingFa: "۶. فرآیند بهینه‌سازی و تدوین پکیج I-140 (Optimization Process)",
      headingEn: "06. Petition Engineering & I-140 Optimization Process",
      introFa:
        "پس از تایید ارزیابی اولیه، فرآیند مهندسی و تکمیل پرونده I-140 در ۴ فاز اجرایی با دقت وسواس‌گونه انجام می‌پذیرد:",
      introEn:
        "Following diagnostic clearance, your Form I-140 petition package is engineered across four precision phases:",
      phases: [
        {
          titleFa: "فاز اول: تقویت معیارهای داوری، استنادی و رسانه‌ای (Metric Fortification)",
          titleEn: "Phase 01: Criteria Fortification (Judging, Citations & Authorship)",
          bodyFa:
            "ارتقای تعداد داوری‌های ثبت‌شده در ژورنال‌های معتبر تا سقف استاندارد (مثلاً ۱۵ تا ۳۰ داوری معتبر برای EB-1A)، انتشار مقالات در دست اقدام و تکمیل مستندات نقش کلیدی متقاضی در مراکز علمی.",
          bodyEn:
            "Scaling verified journal peer-review completions to competitive benchmarks (15–30+ verified reviews for EB-1A), finalizing pending publications, and documenting critical leadership roles.",
          metrics: "Criteria Threshold Mastery",
        },
        {
          titleFa: "فاز دوم: تدوین بیانیه Proposed Endeavor و طرح تجاری-علمی",
          titleEn: "Phase 02: Proposed Endeavor & National Impact Dossier",
          bodyFa:
            "نگارش سند جامع برنامه علمی و بالینی شما در آمریکا همراه با مستندات آماری از NIH، FDA و مراکز تحقیقاتی آمریکا که نشان می‌دهد حضور شما چه خلاء مهمی را در سیستم سلامت یا فناوری ایالات متحده پر می‌کند.",
          bodyEn:
            "Authoring a comprehensive Proposed Endeavor statement backed by NIH, CDC, and industry whitepapers demonstrating how your work resolves critical US healthcare or technological bottlenecks.",
          metrics: "30–50 Page Endeavor Plan",
        },
        {
          titleFa: "فاز سوم: مهندسی ۵ تا ۷ توصیه‌نامه تخصصی (Expert Letters)",
          titleEn: "Phase 03: Independent & Inner-Circle Expert Letter Engineering",
          bodyFa:
            "تدوین پیش‌نویس‌های علمی دقیق برای اساتید و متخصصان برجسته در آمریکا، اروپا و سایر نقاط جهان که با زبان تخصصی اما قابل فهم برای افسر مهاجرت، دستاوردهای اورجینال شما را گواهی می‌کنند.",
          bodyEn:
            "Structuring 5 to 7 detailed expert testimonial letters from prominent international and US-based scientists translating your complex technical breakthroughs into clear evidentiary proof.",
          metrics: "Global Expert Endorsements",
        },
        {
          titleFa: "فاز چهارم: تالیف لایحه اصلی (Legal-Scientific Petition Brief) و سابمیت USCIS",
          titleEn: "Phase 04: Master Petition Brief Compilation & USCIS Filing",
          bodyFa:
            "تدوین لایحه نهایی ۲۵ تا ۴۰ صفحه‌ای همراه با فهرست دقیق ضمایم (Exhibit Index) در قالب یک زونکن ۴۰۰ تا ۸۰۰ صفحه‌ای کاملاً استاندارد و ارسال به USCIS با امکان رهگیری آنلاین.",
          bodyEn:
            "Compiling the master 25-to-40-page Petition Brief cross-referenced against a 400-to-800-page indexed Exhibit Book and lodging the complete I-140 package with USCIS.",
          metrics: "400–800 Page Indexed Petition",
        },
      ],
    },
    expectedOutcomes: {
      headingFa: "۷. نتایج مورد انتظار و دستاوردهای پرونده (Expected Outcomes)",
      headingEn: "07. Expected Outcomes & Sovereign Deliverables",
      introFa:
        "نتیجه نهایی این فرآیند مهندسی‌شده، دستیابی به معتبرترین وضعیت اقامتی و علمی در ایالات متحده آمریکا با آزادی عمل کامل شغلی است:",
      introEn:
        "The culmination of this engineering protocol is the acquisition of permanent status in the United States with complete professional autonomy:",
      deliverables: [
        {
          titleFa: "تاییدیه رسمی فرم I-140 (Immigrant Petition Approval) از اداره مهاجرت آمریکا",
          titleEn: "Official USCIS Form I-140 Approval Notice (I-797)",
          bodyFa:
            "دریافت تاییدیه رسمی نخبه علمی یا معافیت منافع ملی از USCIS (در عرض ۱۵ تا ۴۵ روز کاری در صورت استفاده از سرویس Premium Processing) و صدور گرین کارت دائمی برای متقاضی، همسر و فرزندان زیر ۲۱ سال.",
          bodyEn:
            "Securing official Form I-797 Approval Notice for your I-140 petition (within 15 to 45 business days via Premium Processing), leading directly to Permanent Resident Green Cards for you, your spouse, and unmarried children under 21.",
          metrics: "I-797 Approval in 15–45 Days (PP)",
        },
        {
          titleFa: "استقلال کامل شغلی در آمریکا بدون وابستگی به کارفرما",
          titleEn: "Complete Professional Autonomy Across the United States",
          bodyFa:
            "امکان کار در هر دانشگاه، بیمارستان، شرکت داروسازی یا بیوتکنولوژی، تاسیس کلینیک یا استارتاپ شخصی و تغییر محل کار در هر ایالت آمریکا بدون نگرانی از باطل شدن ویزا.",
          bodyEn:
            "Total freedom to join any US university, hospital system, pharmaceutical enterprise, or biotech startup—or launch your own venture—without employer sponsorship restrictions.",
          metrics: "100% Career Mobility",
        },
        {
          titleFa: "مزیت رقابتی قاطع برای رزیدنسی پزشکی (Match) و گرنت‌های NIH",
          titleEn: "Decisive Advantage for Medical Residency Match & NIH Grants",
          bodyFa:
            "پزشکان دارای گرین کارت در فرآیند NRMP Match به عنوان متقاضی مقیم (بدون نیاز به اسپانسر ویزای J-1 یا H-1B) بررسی می‌شوند و محققان نیز واجد شرایط دریافت گرنت‌ها و فلوشیپ‌های فدرال ویژه مقیمان دائم می‌گردند.",
          bodyEn:
            "Green Card holders participate in the NRMP Residency Match without visa sponsorship barriers and unlock eligibility for restricted NIH fellowships and federal research grants.",
          metrics: "Unrestricted Federal Grant Access",
        },
      ],
    },
    faqs: [
      {
        qFa: "حداقل تعداد مقاله و استناد (Citation) برای قبولی در EB-2 NIW و EB-1A چقدر است؟",
        qEn: "What is the minimum number of papers and citations required for EB-2 NIW and EB-1A?",
        aFa:
          "در قانون مهاجرت آمریکا هیچ عدد ثابتی به عنوان حداقل استناد درج نشده است، اما در رویه عملی افسران USCIS، برای EB-2 NIW داشتن ۳ تا ۵ مقاله معتبر و حدود ۲۰ تا ۵۰ استناد (یا جایگزینی آن با طرح‌ها و دستاوردهای بالینی/صنعتی قوی) پایه بسیار خوبی محسوب می‌شود. برای EB-1A معمولاً بیش از ۱۰۰ تا ۱۵۰ استناد مستقل به همراه داوری‌های متعدد شانس قبولی مستقیم را بسیار بالا می‌برد و در صورت پایین‌تر بودن استنادات، ما ابتدا با پروتکل SREP™ رزومه را به تراز لازم می‌رسانیم.",
        aEn:
          "USCIS statutes do not mandate a fixed citation floor. Practically, EB-2 NIW petitions succeed consistently with 3 to 5+ indexed publications and 20 to 50+ citations when paired with a compelling Proposed Endeavor. For EB-1A, 100 to 150+ independent citations alongside strong peer-review metrics provide a commanding baseline; candidates below this threshold can utilize our SREP™ optimization phase first.",
      },
      {
        qFa: "آیا حضور در خاک آمریکا برای اقدام از طریق EB-1A یا EB-2 NIW الزامی است؟",
        qEn: "Must I be physically present in the United States to file an EB-1A or EB-2 NIW petition?",
        aFa:
          "خیر، مطلقاً نیازی به حضور در آمریکا نیست. بیش از ۷۰٪ موکلین ما در زمان ثبت پرونده I-140 در ایران، ترکیه، امارات یا اروپا حضور دارند و پس از تایید شدن پرونده در USCIS، از طریق فرآیند Consular Processing در سفارت آمریکا (مثلاً آنکارا، ابوظبی یا ایروان) ویزای مهاجرتی خود را دریافت کرده و با گرین کارت وارد خاک آمریکا می‌شوند.",
        aEn:
          "No. You can file Form I-140 from anywhere in the world. Upon USCIS approval, candidates outside the US complete Consular Processing at a designated US Embassy (such as Abu Dhabi, Ankara, or Yerevan) and enter the United States directly as Permanent Residents.",
      },
      {
        qFa: "سرویس Premium Processing چیست و چه مزیتی برای متقاضیان ایرانی دارد؟",
        qEn: "What is USCIS Premium Processing and how does it benefit applicants?",
        aFa:
          "سرویس Premium Processing به متقاضیان اجازه می‌دهد با پرداخت هزینه دولتی مربوطه به USCIS، به جای صبر کردن ۶ تا ۱۲ ماهه برای بررسی پرونده I-140، نتیجه قطعی تاییدیه پرونده را در ظرف ۱۵ روز کاری (برای EB-1A) یا ۴۵ روز کاری (برای EB-2 NIW) دریافت کنند.",
        aEn:
          "USCIS Premium Processing guarantees adjudication of Form I-140 within 15 business days for EB-1A and 45 business days for EB-2 NIW, eliminating 6 to 12 months of standard processing uncertainty.",
      },
      {
        qFa: "آیا تحریم‌ها یا محدودیت‌های سفر (Travel Ban) مانع تایید پرونده‌های نخبگان در USCIS می‌شود؟",
        qEn: "Do nationality restrictions prevent USCIS from approving I-140 petitions for Iranian nationals?",
        aFa:
          "خیر، بررسی و تایید فرم I-140 در USCIS صرفاً بر اساس شایستگی‌های علمی و قانونی متقاضی انجام می‌شود و ملیت ایرانی هیچ مانعی برای اخذ Approval ایجاد نمی‌کند. علاوه بر این، پرونده‌های نخبگانی که دارای منافع ملی برای آمریکا هستند (National Interest)، بالاترین اولویت را در دریافت معافیت‌های منافع ملی در مرحله سفارت دارند.",
        aEn:
          "No. USCIS adjudicates Form I-140 strictly on scientific and statutory merit regardless of nationality, and National Interest petitions inherently document why the applicant's entry serves vital United States priorities.",
      },
    ],
    cta: {
      titleFa: "ارزیابی تخصصی شانس گرین کارت EB-1A و EB-2 NIW شما",
      titleEn: "Request Your US EB-1A & EB-2 NIW Evidentiary Audit",
      bodyFa:
        "رزومه و لینک گوگل اسکالر خود را ارسال کنید تا تیم علمی دکتر محبوبه تاج‌الدینی معیارهای ده‌گانه Kazarian و شروط سه‌گانه Dhanasar را برای پرونده شما بررسی و گزارش کتبی ارائه نماید.",
      bodyEn:
        "Submit your CV and Google Scholar profile for a granular statutory audit against the Kazarian 10-criteria and Dhanasar 3-prong frameworks.",
      buttonFa: "شروع ارزیابی گرین کارت نخبگان آمریکا",
      buttonEn: "INITIATE US EB-1A / NIW AUDIT",
    },
  },
];
