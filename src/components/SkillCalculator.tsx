import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Scale, Milestone, HelpCircle, GraduationCap } from "lucide-react";

export default function SkillCalculator() {
  const { t } = useLanguage();
  const [age, setAge] = useState<number>(30); // points for age
  const [degree, setDegree] = useState<number>(20); // PhD=20, MSc/MD=15, BSc=15
  const [exp, setExp] = useState<number>(15); // overseas 8+ yrs = 15 points
  const [english, setEnglish] = useState<number>(20); // Superior=20, Proficient=10, Competent=0
  const [partner, setPartner] = useState<number>(10); // partner skills = 10 points

  const totalPoints = age + degree + exp + english + partner;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3.5 pb-5 border-b border-white/10">
        <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/15 flex items-center justify-center text-white shrink-0">
          <GraduationCap className="w-4 h-4 stroke-[1.6]" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
            {t("محاسبه‌گر امتیاز مهاجرت مهارتی (استرالیا و کانادا)", "General Skilled Migration Points Counter")}
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            {t("برآورد دقیق امتیاز لازم با فاکتورهای سن، مدرک، زبان و پارتنر", "Accurate GSM points model accounting for age, qualifications, and English level")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
              {t("سن متقاضی در زمان اقدام:", "Age Group Score Factor:")}
            </label>
            <select
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value={30} className="bg-[#14171c]">{t("۲۵ تا ۳۲ سال (حداکثر ۳۰ امتیاز)", "25 to 32 years (30 Points)")}</option>
              <option value={25} className="bg-[#14171c]">{t("۱۸ تا ۲۴ یا ۳۳ تا ۳۹ سال (۲۵ امتیاز)", "18-24 or 33-39 years (25 Points)")}</option>
              <option value={15} className="bg-[#14171c]">{t("۴۰ تا ۴۴ سال (۱۵ امتیاز)", "40 to 44 years (15 Points)")}</option>
              <option value={0} className="bg-[#14171c]">{t("بالای ۴۵ سال (شرط سنی منقضی - ۰ امتیاز)", "45 years or older (No points)")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
              {t("بالاترین مدرک تحصیلی کارشناسی یا دکتری:", "Highest Academic Qualification:")}
            </label>
            <select
              value={degree}
              onChange={(e) => setDegree(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value={20} className="bg-[#14171c]">{t("دکتری تخصصی / PhD یا بورد فوق تخصصی (۲۰ امتیاز)", "PhD or Board Specialist (20 Points)")}</option>
              <option value={15} className="bg-[#14171c]">{t("پزشکی عمومی / کارشناسی ارشد (۱۵ امتیاز)", "Master's Degree / MD / Bachelor's (15 Points)")}</option>
              <option value={10} className="bg-[#14171c]">{t("دیپلم فنی حرفه‌ای / مهارتی معتبر (۱۰ امتیاز)", "Technical Diploma (10 Points)")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
              {t("سابقه کار تخصصی مرتبط خارج از استرالیا (۱۰ سال اخیر):", "Skilled Employment Overseas (Last 10 Years):")}
            </label>
            <select
              value={exp}
              onChange={(e) => setExp(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value={15} className="bg-[#14171c]">{t("۸ سال به بالا (۱۵ امتیاز)", "8 years or more (15 Points)")}</option>
              <option value={10} className="bg-[#14171c]">{t("۵ تا ۷ سال (۱۰ امتیاز)", "5 to 7 years (10 Points)")}</option>
              <option value={5} className="bg-[#14171c]">{t("۳ تا ۴ سال (۵ امتیاز)", "3 to 4 years (5 Points)")}</option>
              <option value={0} className="bg-[#14171c]">{t("کمتر از ۳ سال (۰ امتیاز)", "Less than 3 years (0 Points)")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
              {t("سطح تسلط به زبان انگلیسی آزمون کادر درمان:", "Certified English Proficiency Level:")}
            </label>
            <select
              value={english}
              onChange={(e) => setEnglish(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value={20} className="bg-[#14171c]">{t("فوق‌العاده / Superior (آیلتس ۸ یا OET Grade A/B) - ۲۰ امتیاز", "Superior English (IELTS 8+ or OET Grade A/B) - 20 Points")}</option>
              <option value={10} className="bg-[#14171c]">{t("عالی / Proficient (آیلتس ۷ یا OET Grade B) - ۱۰ امتیاز", "Proficient English (IELTS 7 or OET Grade B) - 10 Points")}</option>
              <option value={0} className="bg-[#14171c]">{t("متوسط / Competent (آیلتس ۶) - ۰ امتیاز", "Competent English (IELTS 6 equivalent) - 0 Points")}</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 mb-1.5">
              {t("وضعیت تاهل و سوابق مهارتی همسر:", "Partner Skills & Marital Status:")}
            </label>
            <select
              value={partner}
              onChange={(e) => setPartner(parseInt(e.target.value))}
              className="w-full bg-black/40 border border-white/12 text-white rounded-lg text-xs p-3 outline-none focus:border-white/40 transition"
            >
              <option value={10} className="bg-[#14171c]">{t("مجرد هستم / یا همسر دارای ارزیابی مدرک و زبان - ۱۰ امتیاز", "Single / Partner has Skills assessment & English - 10 Points")}</option>
              <option value={5} className="bg-[#14171c]">{t("همسر دارای مدرک زبان آیلتس ۶ ولی بدون ارزیابی مهارتی - ۵ امتیاز", "Partner has Competent English only - 5 Points")}</option>
              <option value={0} className="bg-[#14171c]">{t("همسر بدون مدرک زبان و مدارک ارزیابی - ۰ امتیاز", "Partner lacks skills assessment & English - 0 Points")}</option>
            </select>
          </div>
        </div>

        {/* Display Score card */}
        <div className="av-card-inner p-6 rounded-xl flex flex-col justify-between">
          <div className="space-y-4 text-center py-4">
            <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-[0.18em] block">
              {t("جمع کل امتیاز مهاجرت مهارتی شما:", "Cumulative GSM Score:")}
            </span>

            <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border border-white/20 bg-white/[0.04] shadow-inner relative">
              <span className="text-4xl font-bold text-white font-mono tracking-tight">
                {totalPoints}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium mt-1">
                {t("امتیاز", "POINTS")}
              </span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed px-2">
              {totalPoints >= 65 ? (
                t(
                  "تبریک! امتیاز شما فراتر از حداقل شرط قانونی استرالیا (۶۵ امتیاز) است. پرونده شما آماده سابمیت قانونی EOI تحت نظارت تیم دکتر محبوبه تاج‌الدینی است.",
                  "Congratulations! You pass the legal baseline of 65 points. Your profile is viable for rapid EOI lodgement."
                )
              ) : (
                t(
                  "امتیاز شما کمتر از حداقل قانونی ۶۵ امتیاز لازم برای ویزاهای مهارتی استرالیا است. ارتقای نمرات زبان کادر درمان یا برخورداری از اسپانسر ایالتی می‌تواند امتیازتان را جبران کند.",
                  "You remain below the mandatory 65 points for independent GSM. Exploring state-sponsorship or superior language certifications is advised."
                )
              )}
            </p>
          </div>

          <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] text-zinc-400">
            <span>{t("مبنای مقایسه: استرالیا Subclass 189/190", "Australian Subclass 189/190 Standard")}</span>
            <span className="font-mono text-white font-semibold">{t("حداقل الزامی: ۶۵ امتیاز", "Min Baseline: 65 PTS")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
