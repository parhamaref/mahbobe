import React from "react";
import { useLanguage } from "./LanguageContext";
import { PATHWAYS } from "../data";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  CellularGlassVisual,
  DnaHelixSculptureVisual,
  HormonalNetworkVisual,
} from "./LuxuryScientificVisuals";
import ProgramMonographPage from "./ProgramMonographPage";

export interface ProgramsGridProps {
  selectedPathway: string;
  onSelectPathway: (id: string) => void;
  onRequestConsultation: (programTitle: string) => void;
}

const FEATURED_CARDS = [
  {
    id: "gti-au",
    activeIds: ["gti-au"],
    titleFa: "ویزای استعداد جهانی استرالیا",
    titleEn: "Australia Global Talent",
    line1Fa: "اقامت دائم مستقیم (GTI 858)",
    line1En: "SUBCLASS 858 • DIRECT PR",
    line2Fa: "پردازش: ۴ تا ۸ ماه",
    line2En: "TIMELINE: 4 - 8 MONTHS",
    Visual: CellularGlassVisual,
  },
  {
    id: "eb1a-us",
    activeIds: ["eb1a-us", "niw-us"],
    titleFa: "نخبگان و منافع ملی آمریکا",
    titleEn: "US Extraordinary & NIW",
    line1Fa: "گرین کارت مستقل از کارفرما",
    line1En: "SELF-PETITION GREEN CARD",
    line2Fa: "داوری علمی و استنادی",
    line2En: "EB-1A & NATIONAL INTEREST",
    Visual: DnaHelixSculptureVisual,
  },
  {
    id: "amc-au",
    activeIds: ["amc-au", "gtv-uk"],
    titleFa: "معادل‌سازی پزشکان و بریتانیا",
    titleEn: "Medical AMC & UK Talent",
    line1Fa: "پزشکان عمومی و متخصص (AMC)",
    line1En: "CLINICAL REGISTRATION & GTV",
    line2Fa: "تاییدیه بورد سلطنتی و AHPRA",
    line2En: "ROYAL SOCIETY & AHPRA BOARD",
    Visual: HormonalNetworkVisual,
  },
];

export default function ProgramsGrid({
  selectedPathway,
  onSelectPathway,
  onRequestConsultation,
}: ProgramsGridProps) {
  const { language, dir, t } = useLanguage();
  const currentPathway =
    PATHWAYS.find((p) => p.id === selectedPathway) || PATHWAYS[0];

  return (
    <section id="pathways" className="mb-16">
      {/* Section Header Row */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-zinc-200 font-semibold">
          {t("مسیرهای برگزیده مهاجرت نخبگان", "FEATURED MIGRATION PATHWAYS")}
        </h2>
        <a
          href="#audit"
          className="text-[10.5px] uppercase tracking-[0.18em] text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <span>{t("مقایسه و بررسی تمام مسیرها", "EXPLORE ALL PATHWAYS")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 3 Featured Cards with Cinematic Medical Luxury Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FEATURED_CARDS.map((card) => {
          const isSelected = card.activeIds.includes(selectedPathway);
          return (
            <div
              key={card.id}
              onClick={() => onSelectPathway(card.id)}
              className={`av-card rounded-xl p-5 sm:p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 min-h-[340px] flex flex-col justify-between ${
                isSelected ? "ring-1 ring-white/40" : "hover:border-white/25"
              }`}
            >
              <card.Visual />

              <div className="pt-5 flex items-end justify-between gap-3 z-10" dir={dir}>
                <div>
                  <h3 className="text-xl sm:text-[22px] font-semibold text-white leading-snug mb-2">
                    {t(card.titleFa, card.titleEn)}
                  </h3>
                  <p className="text-[9.5px] uppercase tracking-[0.16em] text-zinc-400 leading-relaxed">
                    {t(card.line1Fa, card.line1En)}
                    <br />
                    {t(card.line2Fa, card.line2En)}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/25 group-hover:border-white group-hover:bg-white group-hover:text-black flex items-center justify-center text-white transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Pathway Selector Pills + Detailed Breakdown Drawer */}
      <div className="mt-5 av-card rounded-xl p-5 sm:p-7" dir={dir}>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
          <div className="flex flex-wrap gap-2">
            {PATHWAYS.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectPathway(p.id)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium transition cursor-pointer ${
                  selectedPathway === p.id
                    ? "bg-white text-black font-semibold"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {t(p.titleFa, p.titleEn)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
            <span>
              {t("سختی:", "Tier:")}{" "}
              <strong className="text-white">
                {t(currentPathway.difficultyFa, currentPathway.difficultyEn)}
              </strong>
            </span>
            <span>•</span>
            <span>
              {t("زمان:", "Timeline:")}{" "}
              <strong className="text-white">
                {t(currentPathway.processingTimeFa, currentPathway.processingTimeEn)}
              </strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-2">
            <h4 className="text-base font-semibold text-white">
              {t(currentPathway.titleFa, currentPathway.titleEn)}
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {t(currentPathway.descriptionFa, currentPathway.descriptionEn)}
            </p>
            <p className="text-[11px] text-zinc-300 pt-1">
              <span className="text-zinc-500">{t("مخاطب هدف: ", "Target: ")}</span>
              {t(currentPathway.targetAudienceFa, currentPathway.targetAudienceEn)}
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(language === "fa"
              ? currentPathway.requirementsFa
              : currentPathway.requirementsEn
            ).map((req, idx) => (
              <div
                key={idx}
                className="av-card-inner rounded-lg p-3 flex items-start gap-2.5 text-xs text-zinc-300"
              >
                <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive 10-Section Long-Form Program Monograph (1,500+ Words per Service Page) */}
      <ProgramMonographPage
        selectedProgramId={selectedPathway}
        onSelectProgram={onSelectPathway}
        onRequestConsultation={onRequestConsultation}
      />
    </section>
  );
}
