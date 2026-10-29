import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Award, Briefcase, FilePlus, ChevronRight, CornerDownLeft, Sparkles, Scale, RefreshCw } from "lucide-react";

export default function AssessmentCalculator() {
  const { t, language } = useLanguage();
  const [role, setRole] = useState<string>("md");
  const [publications, setPublications] = useState<number>(3);
  const [citations, setCitations] = useState<number>(45);
  const [reviews, setReviews] = useState<string>("some");
  const [english, setEnglish] = useState<string>("proficient");
  const [patent, setPatent] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("au");
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  // States of scores
  const [score, setScore] = useState<number>(0);
  const [viability, setViability] = useState<{ fa: string; en: string; color: string }>({ fa: "", en: "", color: "" });
  const [advice, setAdvice] = useState<{ fa: string; en: string }>({ fa: "", en: "" });
  const [suggestedPath, setSuggestedPath] = useState<{ fa: string; en: string }>({ fa: "", en: "" });

  const handleCalculate = () => {
    let baseScore = 30;

    // Role weighting
    if (role === "md") baseScore += 20;
    else if (role === "faculty") baseScore += 25;
    else if (role === "phd") baseScore += 15;
    else baseScore += 18; // tech/industry

    // Publications weighting
    if (publications > 10) baseScore += 20;
    else if (publications >= 5) baseScore += 15;
    else if (publications >= 2) baseScore += 10;
    else baseScore += 3;

    // Citations weighting
    if (citations > 200) baseScore += 20;
    else if (citations >= 100) baseScore += 15;
    else if (citations >= 30) baseScore += 10;
    else baseScore += 5;

    // Reviews weighting
    if (reviews === "board") baseScore += 15;
    else if (reviews === "some") baseScore += 8;

    // English weighting
    if (english === "proficient") baseScore += 10;
    else if (english === "intermediate") baseScore += 5;

    // Patent weighting
    if (patent) baseScore += 10;

    // Cap at 100
    if (baseScore > 100) baseScore = 100;

    setScore(baseScore);

    // Set status
    if (baseScore >= 80) {
      setViability({
        fa: "بسیار زیاد (کاندید ممتاز)",
        en: "Excellent Alignment (Elite Class)",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
      });
      setSuggestedPath({
        fa: target === "au" ? "استعداد جهانی استرالیا (GTI)" : target === "us" ? "گرین کارت استعداد درخشان EB-1A" : "ویزای استعداد جهانی بریتانیا (GTV)",
        en: target === "au" ? "Australia Global Talent Visa" : target === "us" ? "US Alien of Extraordinary Ability (EB-1A)" : "UK Global Talent Endorsement",
      });
      setAdvice({
        fa: "رزومه علمی شما دارای فونداسیون بسیار درخشانی است. اولویت اصلی شما هم‌اکنون بهینه‌سازی نحوه نگارش پروپوزال علمی، برقراری ارتباط هدفمند با معرفین (Nominators) تراز اول استرالیایی یا انگلیسی و صورت‌بندی دقیق نامه‌ها است.",
        en: "Your scientific credentials possess highly competitive baselines. Your focus now must transition towards high-level nomination engagement and drafting rigorous executive summaries aligned with the royal evaluation frameworks.",
      });
    } else if (baseScore >= 55) {
      setViability({
        fa: "متوسط (نیازمند بهینه‌سازی رزومه)",
        en: "Moderate (Portfolio Refinement Required)",
        color: "text-amber-400 border-amber-500/30 bg-amber-500/5",
      });
      setSuggestedPath({
        fa: target === "au" ? "مهاجرت مهارتی استرالیا / یا تقویت رزومه جهت GTI" : target === "us" ? "ویزای منافع ملی آمریکا EB-2 NIW" : "ویزای کار علمی آکادمیک بریتانیا و ارتقای پتنت",
        en: target === "au" ? "Australian General Skilled Migration / SREP Pathway for GTI" : target === "us" ? "US National Interest Waiver (EB-2 NIW)" : "UK Academic Partnership route",
      });
      setAdvice({
        fa: "شما شانس مناسبی دارید اما برای گارانتی تاییدیه، استنادات و پورتفولیوی پروژه‌های بالینی شما نیازمند غنی‌سازی علمی است. توصیه می‌کنیم در پروژه‌های تحقیقاتی مشترک کلاب علمی دکتر تاج‌الدینی مشارکت کرده و برنامه SREP را برای بالا کشیدن شاخص نفوذ مقالات فعال کنید.",
        en: "You maintain a solid baseline, but to secure approval under competitive non-employer routes, your citation quality demands enrichment. Enrolling in the SREP or co-authoring specialized peer audits is strongly recommended.",
      });
    } else {
      setViability({
        fa: "پایین (توصیه به تمرکز روی تولید مقاله و استناد)",
        en: "Baseline Alignment (Intense Profile Building Recommended)",
        color: "text-red-400 border-red-500/30 bg-red-500/5",
      });
      setSuggestedPath({
        fa: "بهبود علمی یکپارچه (PAP Method) پیش از اقدام رسمی",
        en: "Structured Academic Enhancement (PAP Method) before official lodgement",
      });
      setAdvice({
        fa: "اقدام فعلی شما بدون توسعه مجدد پرونده علمی ریسک بالایی دارد. پیشنهاد می‌شود بلافاصله پروژه‌های بالینی یا آکادمیک خود را ارتقا داده و تعداد ارجاعات علمی خود را تحت نظر دپارتمان تحقیقات ارتقا بخشید.",
        en: "Immediate lodgement carries significant risk of refusal. We advise initiating 3 to 6 months of structural profile boosting (PAP) focusing on top-tier journal inclusions and peer reviews to construct a viable petition.",
      });
    }

    setIsCalculated(true);
  };

  return (
    <div id="assessment-widget" className="relative overflow-hidden">
      <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-white border border-white/15">
            <Sparkles className="w-4 h-4 stroke-[1.6]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {t("سامانه ارزیابی هوشمند شایستگی نخبگان", "Elite Portfolio Eligibility Index")}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {t("محاسبه آنی و علمی شانس اخذ ویزاهای مستقل نخبگان بر اساس متریک‌های دپارتمان‌های دولتی", "Instant analytical viability assessment based on sovereign talent benchmarks")}
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
          TAJ-INDEX™ v2.6
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Form Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("۱) نقش یا جایگاه علمی شما", "01 / Academic or Professional Role")}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-black/40 border border-white/12 focus:border-white/40 text-white text-xs rounded-lg p-3 outline-none transition"
            >
              <option value="md" className="bg-[#14171c]">{t("پزشک متخصص، فوق تخصص یا جراح", "Specialist Physician or Surgeon")}</option>
              <option value="faculty" className="bg-[#14171c]">{t("عضو هیئت علمی دانشگاه / استاد تمام", "University Faculty Member / Professor")}</option>
              <option value="phd" className="bg-[#14171c]">{t("پژوهشگر دکتری تخصصی / فوق دکتری", "PhD Researcher / Postdoctoral Fellow")}</option>
              <option value="tech" className="bg-[#14171c]">{t("کارآفرین ارشد فناوری و بیوتکنولوژی", "STEM Pioneer / Biotech Leader")}</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
                {t("۲) مقالات Q1/Q2", "02 / Q1 & Q2 Papers")}
              </label>
              <input
                type="number"
                min="0"
                value={publications}
                onChange={(e) => setPublications(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-black/40 border border-white/12 focus:border-white/40 text-white text-xs font-mono rounded-lg p-3 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
                {t("۳) کل استنادها (Citations)", "03 / Total Citations")}
              </label>
              <input
                type="number"
                min="0"
                value={citations}
                onChange={(e) => setCitations(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-black/40 border border-white/12 focus:border-white/40 text-white text-xs font-mono rounded-lg p-3 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("۴) سابقه داوری مقالات ژورنال‌ها (Peer-Review)", "04 / Peer-Review Record")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "none", labelFa: "بدون تجربه", labelEn: "None" },
                { id: "some", labelFa: "گاه‌به‌گاه", labelEn: "Occasional" },
                { id: "board", labelFa: "عضو بورد رسمی", labelEn: "Editorial Board" }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setReviews(item.id)}
                  className={`px-3 py-2.5 text-xs rounded-lg border transition cursor-pointer ${
                    reviews === item.id
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {t(item.labelFa, item.labelEn)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("۵) وضعیت مدرک زبان معتبر کادر درمان/عمومی", "05 / Certified English Proficiency")}
            </label>
            <select
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              className="w-full bg-black/40 border border-white/12 focus:border-white/40 text-white text-xs rounded-lg p-3 outline-none transition"
            >
              <option value="proficient" className="bg-[#14171c]">{t("عالی (آیلتس ۷.۵+ یا OET Grade B)", "Advanced (IELTS 7.5+ or OET Grade B)")}</option>
              <option value="intermediate" className="bg-[#14171c]">{t("متوسط (آیلتس ۶.۵ تا ۷)", "Intermediate (IELTS 6.5 - 7.0)")}</option>
              <option value="basic" className="bg-[#14171c]">{t("مبتدی یا فاقد مدرک رسمی فعلی", "Limited / No Active Exam Practice")}</option>
            </select>
          </div>

          <div className="flex items-center gap-3 py-1.5">
            <input
              type="checkbox"
              id="patent-check"
              checked={patent}
              onChange={(e) => setPatent(e.target.checked)}
              className="w-4 h-4 rounded accent-white bg-black/40 border-white/20 cursor-pointer"
            />
            <label htmlFor="patent-check" className="text-xs text-zinc-300 font-normal cursor-pointer select-none">
              {t("دارای ثبت اختراع ملی/بین‌المللی یا طرح صنعتی تایید شده هستم", "Holds active National/International Patents or Industrial Designs")}
            </label>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("۶) کشور یا قاره مقصد مورد نظر", "06 / Target Jurisdiction")}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "au", fa: "استرالیا", en: "Australia" },
                { id: "us", fa: "آمریکا", en: "USA" },
                { id: "uk", fa: "بریتانیا", en: "United Kingdom" }
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTarget(item.id)}
                  className={`py-2.5 text-xs rounded-lg border transition cursor-pointer ${
                    target === item.id
                      ? "bg-white text-black border-white font-semibold"
                      : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {t(item.fa, item.en)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full av-rect-btn py-3 rounded-lg text-xs font-bold uppercase tracking-[0.16em] mt-3 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {t("آنالیز کتبی و ارزیابی شایستگی", "CALCULATE ELIGIBILITY SCORE")}
          </button>
        </div>

        {/* Results Output */}
        <div className="flex flex-col justify-between border-t md:border-t-0 md:border-s border-white/10 pt-6 md:pt-0 md:ps-7">
          {!isCalculated ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 av-card-inner rounded-xl">
              <div className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-zinc-300 mb-4">
                <Scale className="w-5 h-5 stroke-[1.5]" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
                {t("در انتظار مقداردهی پارامترهای علمی", "Awaiting Diagnostic Parameters")}
              </p>
              <p className="text-xs text-zinc-400 mt-2 max-w-xs leading-relaxed">
                {t("پس از تنظیم فیلدها روی دکمه آنالیز کتبی کلیک کنید تا شبیه‌ساز الگوریتمی دکتر محبوبه تاج‌الدینی اجرا شود.", "Select your academic metrics and execute the simulation to generate your sovereign viability index.")}
              </p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="av-card-inner p-5 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-[0.16em] font-medium">
                    {t("امتیاز شایستگی نخبگان:", "Elite Evaluation Index")}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] text-white font-mono bg-white/10 rounded border border-white/15">
                    TAJ-INDEX™
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white font-mono tracking-tight">
                    {score}
                  </span>
                  <span className="text-lg text-zinc-500 font-mono">/ 100</span>
                </div>

                {/* Meter gauge */}
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-zinc-400 to-white h-1.5 rounded-full transition-all duration-700"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] text-zinc-400 block">
                    {t("جایگاه انطباق حاکمیتی:", "Sovereign Alignment Tier:")}
                  </span>
                  <div className="px-3 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-xs font-semibold text-white">
                    {t(viability.fa, viability.en)}
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] text-zinc-400 block">
                    {t("مسیر مهاجرتی پیشنهادی دکتر محبوبه تاج‌الدینی:", "Recommended Sovereign Pathway:")}
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    {t(suggestedPath.fa, suggestedPath.en)}
                  </span>
                </div>
              </div>

              <div className="av-card-inner p-4 rounded-xl">
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-white block">
                      {t("استراتژی بهینه‌سازی اختصاصی:", "Tactical Profile Optimization:")}
                    </span>
                    <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                      {t(advice.fa, advice.en)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-1">
                <p className="text-[10px] text-zinc-500">
                  {t("* این ارزیابی بر پایه ماتریس مقایسه‌ای قوانین مصوب مهاجرت ۲۰۲۶ است.", "* Calibrated against 2026 sovereign immigration assessment frameworks.")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
