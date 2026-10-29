import { Pathway, SuccessStory, FAQItem, BlogArticle } from "./types";

export const PATHWAYS: Pathway[] = [
  {
    id: "gti-au",
    titleFa: "ویزای استعداد جهانی استرالیا (GTI)",
    titleEn: "Australia Global Talent Visa (Subclass 858)",
    descriptionFa: "مسیر سریع‌السیر مهاجرت نخبگان با دستاوردهای برجسته بین‌المللی در حوزه‌های هدف پزشکان و پژوهشگران.",
    descriptionEn: "Fast-track permanent residency for individuals with internationally recognized outstanding achievements.",
    difficultyFa: "ویژه",
    difficultyEn: "Elite",
    processingTimeFa: "۴ تا ۸ ماه",
    processingTimeEn: "4 - 8 Months",
    targetAudienceFa: "پژوهشگران برتر، اعضای هیئت علمی، پزشکان با مقالات تأثیرگذار",
    targetAudienceEn: "Senior Researchers, Academics, Specialists with Impactful Publications",
    requirementsFa: [
      "ثبت دستاوردهای بین‌المللی برجسته و مداوم",
      "فعالیت در یکی از ۱۰ بخش آینده‌نگر هدف (سلامت، بیوتکنولوژی، آموزش و غیره)",
      "توانایی کسب درآمد معادل آستانه حقوق استعداد جهانی (FWHIT)",
      "داشتن معرف (Nominator) معتبر استرالیایی"
    ],
    requirementsEn: [
      "Prove international prominence and exceptional achievements",
      "Operate in one of the 10 target sectors (MedTech, Health, BioTech, etc.)",
      "Capability to earn equivalent to the Fair Work High Income Threshold (FWHIT)",
      "Nomination by an Australian citizen/organization of national reputation"
    ]
  },
  {
    id: "eb1a-us",
    titleFa: "ویزای استعداد درخشان آمریکا (EB-1A)",
    titleEn: "US Alien of Extraordinary Ability (EB-1A Visa)",
    descriptionFa: "مهاجرت مستقیم به آمریکا بدون نیاز به جاب‌آفر برای افراد دارای رتبه علمی و پژوهشی برتر بین‌المللی.",
    descriptionEn: "Direct Green Card pathway for individuals with extraordinary ability in sciences, arts, or education.",
    difficultyFa: "سخت",
    difficultyEn: "High",
    processingTimeFa: "۶ تا ۱۲ ماه",
    processingTimeEn: "6 - 12 Months",
    targetAudienceFa: "فوق‌دکتری، اساتید دانشگاه، محققان با استنادات علمی بالا",
    targetAudienceEn: "Postdocs, University Professors, Researchers with Significant Citations",
    requirementsFa: [
      "پوشش حداقل ۳ معیار از ۱۰ معیار اداره مهاجرت آمریکا",
      "جوایز ملی یا بین‌المللی معتبر",
      "عضویت در انجمن‌های تخصصی نخبگانی",
      "آثار پژوهشی منتشر شده و داوری مقالات علمی همکاران"
    ],
    requirementsEn: [
      "Meet at least 3 out of 10 USCIS regulatory criteria",
      "Recipient of nationally or internationally recognized prizes",
      "Membership in associations requiring outstanding achievements",
      "Published scholarly articles and evidence of peer-review work"
    ]
  },
  {
    id: "niw-us",
    titleFa: "ویزای منافع ملی آمریکا (EB-2 NIW)",
    titleEn: "US National Interest Waiver (EB-2 NIW)",
    descriptionFa: "معافیت از ارائه پیشنهاد کار بر اساس تأثیر استراتژیک پژوهش‌ها و تخصص متقاضی بر منافع ملی ایالات متحده.",
    descriptionEn: "Employment-based Green Card for advanced degree professionals whose work has substantial merit.",
    difficultyFa: "متوسط",
    difficultyEn: "Medium",
    processingTimeFa: "۸ تا ۱۴ ماه",
    processingTimeEn: "8 - 14 Months",
    targetAudienceFa: "پزشکان، دندانپزشکان، مهندسان و تخصص‌های علمی علوم پزشکی با پژوهش‌های کاربردی",
    targetAudienceEn: "MDs, Researchers, STEM Professionals with Applied Scientific Focus",
    requirementsFa: [
      "دارا بودن مدرک تحصیلی پیشرفته (کارشناسی ارشد، دکتری تخصصی یا پزشکی عمومی)",
      "طرح پیشنهادی با شایستگی ذاتی و اهمیت ملی بالا",
      "موقعیت مناسب متقاضی برای پیشبرد کار پیشنهادی",
      "مزیت کلی اثبات منافع حذف شرط پیشنهاد کار"
    ],
    requirementsEn: [
      "Hold an Advanced Degree (Master's, PhD, MD, or equivalent)",
      "Proposed endeavor has substantial merit and national importance",
      "Applicant is well-positioned to advance the proposed endeavor",
      "Beneficial to the US to waive the labor certification requirement"
    ]
  },
  {
    id: "gtv-uk",
    titleFa: "ویزای استعداد جهانی بریتانیا (UK GTV)",
    titleEn: "UK Global Talent Visa",
    descriptionFa: "مسیر استثنایی کار و زندگی در بریتانیا با تأیید انجمن‌های سلطنتی علمی (Royal Society) یا آکادمی‌های تخصصی.",
    descriptionEn: "Work in the UK for world leaders or potential leaders in science, medicine, and engineering.",
    difficultyFa: "ویژه",
    difficultyEn: "Elite",
    processingTimeFa: "۳ تا ۵ ماه",
    processingTimeEn: "3 - 5 Months",
    targetAudienceFa: "پژوهشگران فعال، دریافت‌کنندگان فلوشیپ‌های معتبر علمی و اساتید تراز اول",
    targetAudienceEn: "Active Life Scientists, Fellowship Holders, High-Rank Academics",
    requirementsFa: [
      "انجام ارزیابی و دریافت تاییدیه (Endorsement) از نهادهای علمی نظیر بریتانیا آکادمی",
      "مشارکت در پژوهش‌های برجسته ملی یا بین‌المللی",
      "دارا بودن توصیه نامه‌های معتبر علمی از چهره‌های شاخص بریتانیایی",
      "رزومه فعال در پروژه‌های تحقیقاتی با بودجه‌های کلان"
    ],
    requirementsEn: [
      "Obtain an endorsement from a recognized body (Royal Society, Academy of Medical Sciences, etc.)",
      "Proven contribution to significant research projects",
      "Letters of recommendation from prominent UK-based specialists",
      "Active engagement in funded, peer-reviewed scientific investigations"
    ]
  },
  {
    id: "amc-au",
    titleFa: "مسیر پزشکان استرالیا (AMC & AHPRA)",
    titleEn: "Australia Medical Council Registry (AMC Pathway)",
    descriptionFa: "ارزیابی مدارک، قبولی در آزمون‌های تئوری و عملی AMC و معادل‌سازی مدرک پزشکی برای اشتغال رسمی در استرالیا.",
    descriptionEn: "Step-by-step AMC and AHPRA licensing portfolio construction and pathway strategic planning.",
    difficultyFa: "ویژه",
    difficultyEn: "Elite",
    processingTimeFa: "۱۲ تا ۲۴ ماه",
    processingTimeEn: "12 - 24 Months",
    targetAudienceFa: "پزشکان عمومی، متخصصان و جراحان مایل به طبابت در استرالیا",
    targetAudienceEn: "General Practitioners, Specialists, and Surgeons aiming to practice in Australia",
    requirementsFa: [
      "تایید پرونده تحصیلی در پورتال EPIC/ECFMG",
      "کسب نمره قبولی در آزمون چندگزینه‌ای AMC Part 1 (MCQ)",
      "آزمون بالینی AMC Part 2 یا گذراندن دوره ارزیابی همکار کارگاهی (WBA)",
      "مدرک زبان آیلتس حداقل ۷ یا OET درجه B"
    ],
    requirementsEn: [
      "Primary medical degree verification through EPIC/ECFMG portal",
      "Pass AMC MCQ Exam (Part 1 MCQ theoretical test)",
      "Pass AMC Clinical Exam (Part 2) or complete Workplace Based Assessment (WBA)",
      "English Proficiency: IELTS 7.0 minimum in all bands or OET Grade B"
    ]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "case-1",
    nameFa: "دکتر مریم سهرابی",
    nameEn: "Dr. Maryam Sohrabi",
    fieldFa: "پژوهشگر نوروساینس و جراح مغز و اعصاب",
    fieldEn: "Neuroscience Researcher & Neurosurgeon",
    destinationFa: "ملبورن، استرالیا - دانشگاه مونا‌ش",
    destinationEn: "Melbourne, Australia - Monash University",
    resultFa: "کسب ویزای استعداد جهانی استرالیا (GTI) در ۲.۵ ماه",
    resultEn: "Gained Australian GTI Visa (Subclass 858) in 2.5 months",
    beforeFa: "H-index: 8 | تعداد کل استنادات: ۱۹۰ | عدم تایید رزومه پژوهشی در ارزیابی اولیه‌ انفرادی",
    beforeEn: "H-index: 8 | Citations: 190 | Initial self-application draft was rejected due to lack of proof",
    afterFa: "بهبود معماری رزومه، بهینه‌سازی نقشه استنادی، معرفی توسط معرف با رتبه بین‌المللی و تایید فوری پرونده.",
    afterEn: "Re-engineered scientific resume, citation optimization, nomination by a senior fellow of Australian Academy with instant processing.",
    timelineFa: " شروع پرونده: مهر ۱۴۰۴ | تاییدیه نهایی: دی ۱۴۰۴",
    timelineEn: "File Initiated: October 2025 | Visa Granted: January 2026",
    metricFa: "کاهش ۶۰٪ زمان پردازش",
    metricEn: "60% processing time cut",
    icon: "award"
  },
  {
    id: "case-2",
    nameFa: "پروفسور آرش امین‌پور",
    nameEn: "Prof. Arash Aminpour",
    fieldFa: "فوق تخصص جراحی کبد و مجاری صفراوی",
    fieldEn: "Specialist Hepato-Pancreato-Biliary Surgeon",
    destinationFa: "آمریکا - کلینیک مایو (Minnesota)",
    destinationEn: "USA - Mayo Clinic (Minnesota)",
    resultFa: "صدور گرین کارت نخبگان آمریکا (EB-1A) بدون جاب‌آفر",
    resultEn: "EB-1A Extraordinary Green Card approved without Job Offer",
    beforeFa: "پزشک کلینیکال برجسته با سوابق جراحی ولی فاقد استنادات دانشگاهی گسترده",
    beforeEn: "Elite Clinical Surgeon with extensive surgery records but low academic citations",
    afterFa: "تحلیل دقیق پرونده، تولید پورتفولیو همپوشان SREP، استخراج پروژه‌های ملی تاثیرگذار با تایید علمی.",
    afterEn: "Detailed clinical profile alignment, constructed an overlap SREP portfolio, extracted national surgical protocols approved as top tier criteria.",
    timelineFa: "شروع پرونده: اردیبهشت ۱۴۰۴ | تاییدیه: آبان ۱۴۰۴",
    timelineEn: "File Initiated: May 2025 | Approved: November 2025",
    metricFa: "نرخ موفقیت ۱۰۰٪",
    metricEn: "100% approval score",
    icon: "shield"
  },
  {
    id: "case-3",
    nameFa: "آناهیتا راد",
    nameEn: "Anahita Rad",
    fieldFa: "دانش‌آموخته دکتری مهندسی بیومتریال",
    fieldEn: "PhD Graduate in Biomaterials Engineering",
    destinationFa: "کمبریج، بریتانیا - پژوهشکده سلطنتی علوم زیستی",
    destinationEn: "Cambridge, UK - Royal Biosciences Institute",
    resultFa: "دریافت ویزای استعداد جهانی بریتانیا (UK GTV) با کمک آکادمی سلطنتی",
    resultEn: "Endorsed for UK Global Talent (GTV) via Royal Academy of Sciences",
    beforeFa: "فارغ‌التحصیل ممتاز با ۳ مقاله Q1 و بدون آگاهی از فرآیند داوری سلطنتی",
    beforeEn: "Honor graduate with 3 Q1 papers, lacked knowledge of Royal endorsement process",
    afterFa: "بکارگیری روش PAP برای ارتقای رزومه علمی، اصلاح استراتژیک خلاصه پژوهش و جلب نظر داور آکادمی مرجع بریتانیایی.",
    afterEn: "Applied Research Integration Method (PAP), strategic rewrites of research briefs, successfully secured high-reputation endorsement letters.",
    timelineFa: "شروع پرونده: بهمن ۱۴۰۴ | تاییدیه: اردیبهشت ۱۴۰۵",
    timelineEn: "File Started: February 2026 | Granted: May 2026",
    metricFa: "بدون نیاز به آیلتس بالا",
    metricEn: "No high IELTS stress",
    icon: "graduation-cap"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    questionFa: "آیا فرآیند همسان‌سازی پزشکان عمومی در استرالیا واقعاً نیاز به آزمون به صورت حضوری دارد؟",
    questionEn: "Does GP licensing and AMC recognition in Australia require in-person exams?",
    answerFa: "بله، آزمون اول تئوری (AMC MCQ) به صورت آنلاین در مراکز بین‌المللی (پپیرسون وو) قابل برگزاری است، اما آزمون بالینی مرحله دوم (AMC Clinical) باید در کشور استرالیا یا از طریق شیوه الکترونیکی پیشرفته اختصاصی یا به عنوان جایگزین آن شرکت در پورتفولیوی درون‌گاهی (WBA) با تایید قبلی پس از استخدام اولیه صورت گیرد.",
    answerEn: "Yes, the Part 1 MCQ theoretical exam is delivered globally online via Pearson VUE. However, the Part 2 Clinical counterpart traditionally requires local attendance in Australia or successful enrolment into the Workplace Based Assessment (WBA) via an approved health service board.",
    categoryFa: "مهاجرت پزشکان",
    categoryEn: "Medical Migration"
  },
  {
    id: "faq-2",
    questionFa: "در ویزای استعداد جهانی استرالیا (GTI) داشتن 'معرف' یا Nominator تا چه حد اهمیت دارد؟",
    questionEn: "How heavily does the Nominator impact the Australian GTI program?",
    answerFa: "معرف یکی از ارکان اصلی است. معرف باید فردی با شهرت بین‌المللی عالی در حوزه شما و دارای تابعیت استرالیا، اقامت دایم یا یک سازمان استرالیایی برجسته باشد تا مشروعیت دستاوردهای شما را به دپارتمان تایید کند. تیم دکتر تاج‌الدینی با ایجاد ارتباطات علمی با نخبگان استرالیا این مسئله را برای شما ميسر می‌کند.",
    answerEn: "An elite Nominee must possess an Australian citizen, PR, or national body sponsor of repute in the same field. They vouch for your national prominence. Our center helps correctly position your CV to foster these peer relationships scientific validation.",
    categoryFa: "ویزای استعداد جهانی",
    categoryEn: "Global Talent"
  },
  {
    id: "faq-3",
    questionFa: "تفاوت مسیر ویزای علمی EB-1A با ویزای EB-2 NIW کشور آمریکا چیست؟",
    questionEn: "What is the key difference between US EB-1A and EB-2 NIW pathways?",
    answerFa: "ویزای EB-1A دارای معیارهای بسیار سختگیرانه‌تر (استعداد فوق‌استثنایی ملی یا بین‌المللی) است ولی سریع‌تر پردازش شده و نیازی به ارزیابی منافع ملی ندارد. ویزای EB-2 NIW معیار آسان‌تری دارد اما نیازمند اثبات شایستگی طرح پیشنهادی شما و اثر مستقیم آن بر اقتصاد، سلامت یا امنیت ملت آمریکا است.",
    answerEn: "EB-1A requires standard-defining proof of extraordinary status (top percentiles) and builds on rigid regulatory criteria but processes quicker. EB-2 NIW relies heavily on proving 'substantial merit' and 'national importance' of your specific upcoming research initiatives in the United States.",
    categoryFa: "مهاجرت نخبگان",
    categoryEn: "Elite Visas"
  },
  {
    id: "faq-4",
    questionFa: "برنامه SREP چیست و چگونه به ارتقای رزومه پزشکان کمک می‌کند؟",
    questionEn: "What is the SREP program and how does it advance medical profiles?",
    answerFa: "برنامه علمی–بومی ارتقای رزومه به پزشکان کمک می‌کند علاوه بر تمرکز روی کار بالینی، خروجی‌های پژوهش ترجمانی، بررسی شیوع بیمارگاهی و تحلیل‌های مقایسه‌ای درمان را به عنوان پتانسیل‌های همکار در قالب پرونده‌های تحقیقاتی آماده انتشار بنویسند که منجر به افزایش ناگهانی تعداد مقالات علمی در ژورنال‌های معتبر خواهد شد.",
    answerEn: "The Scientific Resume Enhancement program focuses on translating clinical cases, surgical protocols, and peer observations into peer-reviewed published academic frameworks globally, transforming a purely clinical career into a highly attractive scientific profile.",
    categoryFa: "ارتقای رزومه علمی",
    categoryEn: "Scientific Enhancement"
  },
  {
    id: "faq-5",
    questionFa: "حداقل شاخص H-index لازم برای اقدام ویزاهای استعداد درخشان چقدر است؟",
    questionEn: "What is the baseline H-index for academic and elite talent visas?",
    answerFa: "هیچ قانون صلب و عددی از سوی دپارتمان مهاجرت وجود ندارد. با این وجود، تجارب ما نشان می‌دهد در حوزه علوم تجربی و پزشکی، شاخص H بالای ۶ در کنار استنادات کیفی و توصیه‌نامه‌های هدفمند از دانشمندان تراز اول برای موفقیت فوق‌العاده الزامی است.",
    answerEn: "There is no static bureaucratic minimum. However, in medicine and life sciences, an H-index of 6+ combined with high quality-of-citation insights and letters from key world leaders is historically a strong indicator of candidate viability.",
    categoryFa: "ارتقای رزومه علمی",
    categoryEn: "Scientific Enhancement"
  },
  {
    id: "faq-6",
    questionFa: "آیا برای مهاجرت علمی حتماً به پذیرش جاب‌آفر نیازمندیم؟",
    questionEn: "Is a formal foreign job offer mandatory for scientific visas?",
    answerFa: "خیر، خوشبختانه برنامه‌هایی نظیر GTI استرالیا، EB-1A و EB-2 NIW آمریکا به صورت کاملاً مستقل و خود-اسپانسری بدون نیاز به داشتن کارفرما پیاده شده و اقامت دائم را به شخص محقق اعطا می‌کنند.",
    answerEn: "No, pathways such as Australia GTI Subclass 858, US EB-1A, and EB-2 NIW are specifically built as independent self-petition avenues, granting absolute immunity from structural employer-bound ties.",
    categoryFa: "مهاجرت نخبگان",
    categoryEn: "Elite Visas"
  },
  {
    id: "faq-7",
    questionFa: "پرتکل PAP به چه شکل اجرا می‌شود؟",
    questionEn: "How is the PAP scientific methodology applied?",
    answerFa: "در پروتکل پپ (Prospect Academic Protocol)، رزومه متقاضی بر اساس الگوهای ارزیابی آکادمی‌های سلطنتی بررسی شده و نقشه تحقیقاتی شخصی وی طی یک برنامه ۳ ماهه بازنویسی شده تا برای جذب حداکثری اسکلارشیپ‌های بین‌المللی آماده گردد.",
    answerEn: "The PAP protocol maps a researcher's academic history against the exact selection models of Royal Societies, engineering a 3-month strategic research outline optimized for massive international institutional funding.",
    categoryFa: "واحد پژوهش",
    categoryEn: "Research Unit"
  },
  {
    id: "faq-8",
    questionFa: "آیا در طول طراحی مسیر با شخص دکتر تاج‌الدینی مستقیم ملاقات می‌کنیم؟",
    questionEn: "Do clients receive hands-on design consultations directly with Dr. Tajeddini?",
    answerFa: "بله، شالوده اصلی طراحی مسیرهای نخبگان در TAJ Global با نظارت علمی مستقیم و نگارش استراتژیک دکتر تاج‌الدینی صورت می‌گیرد. هر مراجعه‌کننده پیش از شروع قرارداد، جلسه ارزیابی عمیق با شخص ایشان خواهد داشت.",
    answerEn: "Absolutely. The conceptual architecture of every scientific portfolio designed under TAJ Global is directed and written under Dr. Tajeddini's exact professional oversight, including direct strategic video calls.",
    categoryFa: "درباره ما",
    categoryEn: "About Dr. Taj"
  },
  {
    id: "faq-9",
    questionFa: "آیا پزشکان عمومی نیز می‌توانند از طریق استعداد درخشان اقدام کنند؟",
    questionEn: "Can general practitioners also apply for outstanding talent pathways?",
    answerFa: "بله، اگر پزشکان عمومی در پروژه‌های بهداشتی منطقه‌ای، فناوری‌های دیجیتال سلامت و یا پژوهش‌های همه‌گیرشناسی دارای اثرگذار بالینی بوده‌اند، امکان تشکیل پرونده برای دریافت تاییدیه استعداد درخشان بریتانیا یا ویزاهای استرالیا را دارا می‌باشند.",
    answerEn: "Yes, if a general practitioner has engineered notable health interventions, integrated digital wellness services, or has participated in epidemiologic trials with published outputs, they qualify under multiple talent frameworks.",
    categoryFa: "مهاجرت پزشکان",
    categoryEn: "Medical Migration"
  },
  {
    id: "faq-10",
    questionFa: "پروسه انجام تحلیل پروفایل ما در تفتیذ چقدر طول می‌کشد؟",
    questionEn: "How long serves the profile analysis and path mapping stage?",
    answerFa: "تحلیل اولیه فرم ثبت اطلاعات ظرف ۴۸ ساعت انجام می‌شود. اما طراحی تخصصی نقشه راه استراتژیک مهاجرت نخبگان و ارائه گزارش جامع کتبی بین ۷ الی ۱۰ روز کاری زمان لازم دارد.",
    answerEn: "The initial assessment response is prompt within 48 hours. The deeper strategic blueprinting and comprehensive written report are meticulously drafted across 7 to 10 business days.",
    categoryFa: "خدمات اصلی",
    categoryEn: "Core Services"
  },
  {
    id: "faq-11",
    questionFa: "آیا هزینه‌های خدمات طراحی مسیر بازگردانده می‌شود؟",
    questionEn: "Are service fees refundable under any conditions?",
    answerFa: "در قراردادهای تضمینی تایید شایستگی علمی، بخشی از وجوه پرداختی به عنوان شالوده امنیت سرمایه علمی به صورت مشروط به توافق تضمین بازگشت وجه خواهد بود، زیرا ما تنها پرونده‌هایی را پذیرش می‌کنیم که به شایستگی علمی آن‌ها اطمینان داریم.",
    answerEn: "In our structured Elite Guaranteed Agreement models, critical components of the retainers are backed by scientific success safety performance clauses, reflecting our dedication to taking on verified, viable cases.",
    categoryFa: "قوانین و مقررات",
    categoryEn: "Terms"
  },
  {
    id: "faq-12",
    questionFa: "تاییدیه تحصیلی موسساتی مانند EPIC چقدر زمان می‌برد؟",
    questionEn: "How long does EPIC identity and medical degree verification take?",
    answerFa: "معمولاً تایید هویت و استعلام مستقیم مدرک پزشکی عمومی یا تخصصی از دانشگاه مبدا توسط پورتال بین‌المللی اپیک، بین ۳ الی ۸ هفته بسته به سرعت پاسخگویی دانشگاه علوم پزشکی مربوطه به طول می‌انجامد.",
    answerEn: "Primary verification via EPIC usually requires between 3 to 8 weeks, strongly depending on the backend response times of your native Medical University registrars to international inquiries.",
    categoryFa: "مهاجرت پزشکان",
    categoryEn: "Medical Migration"
  },
  {
    id: "faq-13",
    questionFa: "آیا آزمون OET برای مهاجرت کادر درمان به سایر کشورها معتبر تر از آیلتس است؟",
    questionEn: "Is the OET exam universally preferred over IELTS for medical migration?",
    answerFa: "در کشورهای استرالیا، ایرلند، بریتانیا و نیوزیلند آزمون تخصصی OET (آزمون زبان انگلیسی کادر درمان) از محبوبیت فوق‌العاده‌ای میان پزشکان برخوردار است زیرا سناریوهای تستی آن منطق بر مهارت‌های واقعی بالینی است، با این حال نمرات آیلتس آکادمی نیز به طور همتراز قابل پذیرش است.",
    answerEn: "In Australia, UK, Ireland, and NZ, the Occupational English Test (OET) is frequently preferred by healthcare clients since testing scenarios emulate standard clinical shifts, though Academic IELTS continues to have parity.",
    categoryFa: "مهاجرت پزشکان",
    categoryEn: "Medical Migration"
  },
  {
    id: "faq-14",
    questionFa: "چه کسانی واجد شرایط دریافت کلاب علمی پژوهشی دکتر تاج‌الدینی هستند؟",
    questionEn: "Who can access Dr. Tajeddini's scientific research community?",
    answerFa: "دانشجویان تخصص‌های پزشکی، دارندگان مدرک دکتری و محققان ارشد پس از بررسی رزومه و مصاحبه با واحد پژوهش می‌توانند در طرح‌های تحقیقاتی مشترک بین‌المللی برند شرکت کرده و بخشی از هسته همکار برون‌مرزی ما باشند.",
    answerEn: "Medical residents, doctoral candidates, and elite clinical researchers who clear our research director interview are invited into active co-authorship pipelines on cross-border studies.",
    categoryFa: "واحد پژوهش",
    categoryEn: "Research Unit"
  },
  {
    id: "faq-15",
    questionFa: "آیا مقالات ارائه شده در کنفرانس‌ها ارزش لازم برای پرونده‌های نخبگان را دارند؟",
    questionEn: "Do conference papers hold true weight in elite talend petitions?",
    answerFa: "ارزش بسیار کمتر از مقالات داوری شده در ژورنال‌های معتبر ISI (رتبه‌بندی Q1 و Q2) دارند. با این وجود، به عنوان دلیلی بر پویایی مستمر علمی در پرونده گنجانده شده و نقشی تکمیلی ایفا می‌کنند.",
    answerEn: "They offer considerably less authority than indexed peer-reviewed journal articles in Q1 or Q2 ranks. However, they serve as excellent diagnostic evidence of ongoing scholarly dialogue.",
    categoryFa: "ارتقای رزومه علمی",
    categoryEn: "Scientific Enhancement"
  },
  {
    id: "faq-16",
    questionFa: "نقشه راه استراتژیک اختصاصی TAJ Global شامل چه سرفصل‌هایی است؟",
    questionEn: "What key segments are outlined in a TAJ Global Strategic Roadmap?",
    answerFa: "تحلیل کیفی کلان پرونده، استخراج مچینگ پوینت‌های علمی با قوانین هدف، تعیین بازه زمانی دقیق اقدام، شناسایی معرف‌های احتمالی، برنامه‌ریزی برای ارتقای استناددهی و تخمین دقیق درصد بخت موفقیت پرونده.",
    answerEn: "Qualitative capability audit, immigration criteria alignment matrix, target timeline, identification of potential nominating peers, citation growth strategy, and analytical viability scores.",
    categoryFa: "خدمات اصلی",
    categoryEn: "Core Services"
  },
  {
    id: "faq-17",
    questionFa: "آیا با ویزای نخبگان همراهان متقاضی نیز اجازه کار دائم دارند؟",
    questionEn: "Does the elite applicant's family receive full work authorization upon migration?",
    answerFa: "بله، در تمامی برنامه‌های اقامت دائم استعدادهای جهانی، همسر متقاضی دارای حق کار بدون محدودیت (Full Work Rights) بوده و فرزندان حق استفاده رایگان از تسهيلات آموزشی مدارس دولتی را دارا خواهند بود.",
    answerEn: "Yes, in all premium talent-based permanent residency pathways, the spouse receives unrestricted open work rights (PR equivalent), and children access domestic fee public education.",
    categoryFa: "ویزای استعداد جهانی",
    categoryEn: "Global Talent"
  },
  {
    id: "faq-18",
    questionFa: "تا کِی می‌توانیم پرونده ارسالی خود را بروز رسانی کنیم؟",
    questionEn: "Until what stage of the application can we append scientific records?",
    answerFa: "تا پیش از زمان صدور دعوتنامه رسمی اولیه یا نامه تاییدیه صلاحیت علمی، شما می‌توانید مقالات پذیرفته شده جدید یا مدارک ارزشمند علمی-پژوهشی به دست آمده را برای افزودن به وزن کلی پرونده ارسال نمایید.",
    answerEn: "Up until the precise moment of official invitation or the definitive scientific referral board review, new acceptances, patents, or citations can be added to reinforce your core active weight.",
    categoryFa: "خدمات اصلی",
    categoryEn: "Core Services"
  },
  {
    id: "faq-19",
    questionFa: "معیار کسر امتیاز در سیستم مهاجرت مهارتی چیست؟",
    questionEn: "How does the skills assessment board deduct points in skill pathways?",
    answerFa: "در سازمان‌های ارزیابی، بر اساس سنخ مدرک، میزان انطباق تحصیلی و تجارب کاری خارج از کشور، معمولاً بین ۱ الی ۳ سال از سنوات کاری متقاضی جهت معادل‌سازی مدرک اولیه تحصیلی و حرفه‌ای کسر خواهد شد.",
    answerEn: "Depending on course syllabus alignment and overseas employment, organizations such as ACS or Vetassess deduct between 1 to 3 years of work experience to equate international credentials to the local standard.",
    categoryFa: "مهاجرت مهارتی",
    categoryEn: "Skill Migration"
  },
  {
    id: "faq-20",
    questionFa: "چرا رویکرد دیتامحور در مهاجرت برتر از رویکرد سنتی وکلای دادگستری است؟",
    questionEn: "Why is a data-driven scientific approach superior to standard legal consulting?",
    answerFa: "زیرا به جای برخورد بوروکراتیک، دستاوردهای علمی شما به درستی توسط دکتر تاج‌الدینی فرمول‌بندی و داوری همکار می‌شود. افسر پرونده به ندرت کدهای علمی پژوهش ها را می‌داند؛ ما وظیفه عینی داریم تا ارزش بین‌المللی طرح و استنادات علمی را با زبان شفاف علمی تبیین کنیم.",
    answerEn: "Because standard legal lawyers lack peer scientific domains. Officers evaluate impact data; index metrics represent complex paradigms. We specialize in scientific articulation that bridges high medicine and legislative demands.",
    categoryFa: "درباره ما",
    categoryEn: "About Dr. Taj"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "article-1",
    titleFa: "تحلیل تحولات اساسی در معیارهای ویزای استعداد بریتانیا در سال ۲۰۲۶",
    titleEn: "Revisiting UK Global Talent Visa Criteria Reforms in 2026",
    summaryFa: "تغییرات عمیق در نحوه موافقت آکادمی علوم پزشکی سلطنتی با توصیه نامه‌ها و لزوم پورتفولیوی چندرشته‌ای.",
    summaryEn: "Detailed review of royal medical academies' endorsement shifts, highlighting new multi-disciplinary citation mandates.",
    contentFa: "این مقاله تحلیلی به بررسی آخرین دستورالعمل‌های مصوب دپارتمان بهداشت و مهاجرت بریتانیا برای صدور تاییدیه آکادمی اختصاص دارد. در سال جدید، داشتن سابقه رهبری در پژوهش‌های مبتنی بر هوش مصنوعی پزشکی و ثبت اختراعات زیستی شانس بررسی سریع پرونده را تا ۴۰٪ افزایش می‌دهد...",
    contentEn: "This research briefing details the latest royal medical board modifications in endorsing life sciences candidates. Under recent edits, leading medical AI research initiatives and possessing health patents drastically increases approval rates...",
    authorFa: "دکتر تاج‌الدینی",
    authorEn: "Dr. Tajeddini",
    dateFa: "۳ خرداد ۱۴۰۵",
    dateEn: "May 23, 2026",
    readTimeFa: "۶ دقیقه مطالعه",
    readTimeEn: "6 min read",
    tagFa: "بریتانیا",
    tagEn: "United Kingdom"
  },
  {
    id: "article-2",
    titleFa: "راهنمای استراتژیک استخراج فاکتور تاثیرگذار (Impact Factor) پرونده‌های پزشکان عمومی",
    titleEn: "Leveraging Citation Metrics and Impact Factors for MD Applications",
    summaryFa: "چگونه پزشکانی که بیشتر فعالیت درمانی و کلینیکالی داشته‌اند، می‌توانند پرونده پژوهشی مورد تایید نخبگان بسازند.",
    summaryEn: "How practicing hospital doctors can engineer a strong citation and peer-reviewed profile for self-petition green cards.",
    contentFa: "بسیاری از پزشکان متخصص یا عمومی با وجود کارهای بالینی فوق‌العاده ارزشمند، تصور کاذبی دارند که واجد شرایط ویزاهای استعداد نیستند. پاسخ در بازتولید پرونده‌های بیماران شاخص به صورت پژوهش بالینی مشترک و انتشار سازمان‌یافته با همکاری تیم‌های دانشگاهی پیشرو قرار دارد...",
    contentEn: "Many physicians erroneously assume that because their primary focus is clinical practice, they do not satisfy elite research-driven immigration tiers. In reality, co-authored clinical studies and collaborative reporting of rare trials fill this criteria perfectly...",
    authorFa: "دکتر تاج‌الدینی",
    authorEn: "Dr. Tajeddini",
    dateFa: "۱۸ اردیبهشت ۱۴۰۵",
    dateEn: "May 8, 2026",
    readTimeFa: "۸ دقیقه مطالعه",
    readTimeEn: "8 min read",
    tagFa: "ارتقای رزومه",
    tagEn: "CV Enhancement"
  }
];
