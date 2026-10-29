import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { CheckCircle, XCircle, FileText, ChevronRight, HelpCircle, Activity, TrendingUp } from "lucide-react";

export default function ScientificEnhancer() {
  const { t } = useLanguage();
  const [hIndex, setHindex] = useState<number>(2);
  const [q1Papers, setQ1papers] = useState<number>(1);
  const [intlCollaborations, setIntlCollaborations] = useState<boolean>(false);
  const [citationSpeed, setCitationSpeed] = useState<string>("low"); // high, moderate, low
  const [showResult, setShowResult] = useState<boolean>(false);

  // Criteria simulation
  const checkList = [
    {
      id: "h-index",
      labelFa: "شاخص H-index حداقل ۵ در زمینه‌های علمی",
      labelEn: "H-index of 5 or higher in relevant life sciences",
      status: hIndex >= 5,
    },
    {
      id: "q1",
      labelFa: "حداقل ۲ مقاله به عنوان نویسنده اول در ژورنال‌های با ضریب تاثیر Q1",
      labelEn: "Minimum 2 first-authored papers in Q1 Impact Factor journals",
      status: q1Papers >= 2,
    },
    {
      id: "intl",
      labelFa: "مشارکت فعال یا مسئول در طرح‌های تحقیقاتی بین‌المللی",
      labelEn: "Active co-authorship in multi-national scientific collaborations",
      status: intlCollaborations,
    },
    {
      id: "citations",
      labelFa: "سرعت رشد ارجاعات سالانه به مقالات (بیش از ۳۰ استناد سالانه)",
      labelEn: "Annual citation growth velocity exceeds 30 citations/year",
      status: citationSpeed === "high",
    }
  ];

  const metCount = checkList.filter((item) => item.status).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3.5 pb-5 border-b border-white/10">
        <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/15 flex items-center justify-center text-white shrink-0">
          <Activity className="w-4 h-4 stroke-[1.6]" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {t("ارزیابی‌گر آنلاین سلامت پورتفولیوی علمی", "Scientific Portfolio Health Index")}
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            {t("شبیه‌سازی معیارهای داوری آکادمی‌های سلطنتی انگلستان و استرالیا", "Check resilience against Royal Academy clinical peer-review standards")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("شاخص H-index فعلی گوگل اسکالر شما:", "Active Google Scholar H-index:")}
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="25"
                value={hIndex}
                onChange={(e) => setHindex(parseInt(e.target.value))}
                className="flex-1 accent-white bg-white/15 h-1 rounded cursor-pointer"
              />
              <span className="w-11 text-center font-mono text-xs text-white font-bold bg-white/10 border border-white/15 px-2 py-1 rounded">
                {hIndex}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("تعداد مقالات چاپ شده در مجلات معتبر Q1/Q2:", "Publications in Q1/Q2 Impact Journals:")}
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="15"
                value={q1Papers}
                onChange={(e) => setQ1papers(parseInt(e.target.value))}
                className="flex-1 accent-white bg-white/15 h-1 rounded cursor-pointer"
              />
              <span className="w-11 text-center font-mono text-xs text-white font-bold bg-white/10 border border-white/15 px-2 py-1 rounded">
                {q1Papers}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("همکاری یا پروژه‌های فرامرزی بین‌المللی:", "Cross-border International Co-authorships:")}
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIntlCollaborations(true)}
                className={`flex-1 py-2 text-xs rounded-lg border transition cursor-pointer ${
                  intlCollaborations
                    ? "bg-white text-black border-white font-semibold"
                    : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {t("بله دارم", "Yes, active")}
              </button>
              <button
                type="button"
                onClick={() => setIntlCollaborations(false)}
                className={`flex-1 py-2 text-xs rounded-lg border transition cursor-pointer ${
                  !intlCollaborations
                    ? "bg-white text-black border-white font-semibold"
                    : "bg-white/[0.03] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {t("خیر ندارم", "No, none yet")}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-2">
              {t("سرعت رشد سالانه استنادات مقالات شما:", "Annual Citation Velocity:")}
            </label>
            <select
              value={citationSpeed}
              onChange={(e) => setCitationSpeed(e.target.value)}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value="low" className="bg-[#14171c]">{t("کم (کمتر از ۱۰ استناد در سال)", "Low (Under 10 per year)")}</option>
              <option value="moderate" className="bg-[#14171c]">{t("متوسط (بین ۱۰ تا ۳۰ استناد در سال)", "Moderate (10 - 30 per year)")}</option>
              <option value="high" className="bg-[#14171c]">{t("بسیار سریع (بیش از ۳۰ استناد سالانه)", "High (Above 30 per year)")}</option>
            </select>
          </div>

          <button
            onClick={() => setShowResult(true)}
            className="w-full av-rect-btn text-xs font-bold uppercase tracking-[0.15em] py-3 rounded-lg transition cursor-pointer"
          >
            {t("محاسبه تاییدیه پورتفولیو", "ANALYZE SCIENTIFIC RESILIENCY")}
          </button>
        </div>

        {/* Audit Sheet */}
        <div className="av-card-inner p-5 rounded-xl space-y-4">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-[0.18em] block">
            {t("چک‌لیست شایستگی داوران:", "Peer-Review Board Criteria:")}
          </span>

          <div className="space-y-3">
            {checkList.map((item) => (
              <div key={item.id} className="flex gap-2.5 items-start">
                {item.status ? (
                  <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                )}
                <span className={`text-xs leading-relaxed ${item.status ? "text-white font-medium" : "text-zinc-500"}`}>
                  {t(item.labelFa, item.labelEn)}
                </span>
              </div>
            ))}
          </div>

          {showResult && (
            <div className="border-t border-white/10 pt-4 mt-2 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">{t("شاخص همگرایی:", "Alignment Index:")}</span>
                <span className="text-sm font-bold text-white font-mono">{metCount} / 4</span>
              </div>

              {metCount >= 3 ? (
                <div className="p-3.5 bg-white/[0.06] border border-white/20 rounded-lg text-xs text-zinc-200 leading-relaxed">
                  {t(
                    "تبریک! رزومه پژوهشی شما پتانسیل قبولی بسیار بالایی دارد. پروتکل ارزیابی PAP ما می‌تواند شانس شما را برای دریافت فوری معرفی‌نامه به حداکثر برساند.",
                    "Excellent convergence! Your profile meets elite criteria. We recommend direct planning to secure royal endorsements via PAP protocol."
                  )}
                </div>
              ) : (
                <div className="p-3.5 bg-white/[0.03] border border-white/10 rounded-lg text-xs text-zinc-300 leading-relaxed">
                  {t(
                    "پورتفولیوی شما هم‌اکنون برای ویزاهای نخبه لب مرز است. توصیه اکید می‌گردد با استفاده از پلن SREP تحت نظر دکتر محبوبه تاج‌الدینی نسبت به اصلاح ساختاری، ثبت کیس‌های کلینیکال و همکاری‌های پژوهشی اقدام کنید.",
                    "Your profile requires development in citations and co-authorship. We strongly advocate entering our SREP model to safely fulfill elite thresholds."
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
