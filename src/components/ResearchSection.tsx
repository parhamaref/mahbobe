import React from "react";
import { useLanguage } from "./LanguageContext";

const INDEXING_PLATFORMS = [
  { abbr: "GS", name: "Google Scholar" },
  { abbr: "WOS", name: "Web of Science" },
  { abbr: "Q1", name: "Clarivate ISI" },
  { abbr: "IVF", name: "Morphokinetics" },
  { abbr: "PGT", name: "Genomic NGS" },
  { abbr: "HPO", name: "Endocrine Axis" },
  { abbr: "GTI", name: "Home Affairs AU" },
  { abbr: "NIW", name: "USCIS Portal" },
  { abbr: "R&D", name: "TAJ Institute" },
];

export default function ResearchSection() {
  const { dir, t } = useLanguage();

  return (
    <div id="research" className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
          {t("پلتفرم‌های پژوهش، باروری و نمایه‌های علمی", "RESEARCH, IVF & SOVEREIGN SYSTEMS")}
        </h2>
        <span className="text-[9.5px] font-mono text-zinc-500 uppercase tracking-widest">
          BIOMEDICAL & INDEXING OS
        </span>
      </div>

      <div className="av-card rounded-xl p-4 sm:p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-4">
          {INDEXING_PLATFORMS.map((tool, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-white/[0.06] border border-white/15 flex items-center justify-center text-[10px] font-bold text-white font-mono shrink-0">
                {tool.abbr}
              </div>
              <span className="text-[11px] text-zinc-300 font-medium leading-tight truncate">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Institute Translational Research Micro-Bar */}
        <div
          dir={dir}
          className="pt-3.5 border-t border-white/10 flex items-center justify-between gap-3 text-[10.5px] text-zinc-400"
        >
          <span>
            {t(
              "آزمایشگاه نوآوری سلامت تولیدمثل، بهینه‌سازی باروری و پژوهش‌های سلولی-بالینی",
              "Translational Reproductive Health, Fertility Optimization & Cellular R&D"
            )}
          </span>
          <a
            href="#fertility-institute"
            className="text-[10px] font-mono uppercase tracking-wider text-white hover:underline shrink-0"
          >
            {t("ورود به لب ↗", "OPEN LAB ↗")}
          </a>
        </div>
      </div>
    </div>
  );
}
