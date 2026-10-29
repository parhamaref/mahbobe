import React from "react";
import { useLanguage } from "./LanguageContext";
import { Award, GraduationCap } from "lucide-react";

const EXECUTIVE_MEMBERS = [
  {
    nameFa: "دکتر محبوبه تاج‌الدینی",
    nameEn: "Dr. Mahboubeh Tajeddini",
    roleFa: "مدیر ارشد اجرایی (CEO) و معمار مسیر مهاجرت نخبگان",
    roleEn: "Chief Executive Officer • Senior Scientific Architect",
    Icon: Award,
  },
  {
    nameFa: "مهندس پرهام عارف",
    nameEn: "Eng. Parham Aref",
    roleFa: "مدیر دپارتمان پذیرش و امور دپارتمانی",
    roleEn: "Director of Global Admissions & Departmental Affairs",
    Icon: GraduationCap,
  },
];

export default function TeamSection() {
  const { dir, t } = useLanguage();

  return (
    <div id="about">
      <div className="av-card rounded-xl p-4 sm:p-5 space-y-3" dir={dir}>
        <h3 className="text-[10.5px] uppercase tracking-[0.2em] text-zinc-300 font-semibold pb-1">
          {t("هیئت مدیره و کادر اجرایی ارشد مجموعه", "EXECUTIVE LEADERSHIP & BOARD")}
        </h3>

        {EXECUTIVE_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="av-card-inner rounded-lg p-3.5 flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center text-white shrink-0">
              <member.Icon className="w-5 h-5 stroke-[1.6]" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-semibold text-white truncate">
                {t(member.nameFa, member.nameEn)}
              </h4>
              <p className="text-[10.5px] text-zinc-400 truncate mt-0.5">
                {t(member.roleFa, member.roleEn)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
