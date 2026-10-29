import React from "react";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck } from "lucide-react";
import { INSTITUTE_JOURNEY_TIMELINE } from "../fertilityInstituteData";

export interface TimelineStageItem {
  step: string;
  phaseCode: string;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
}

interface TimelineProps {
  stages?: TimelineStageItem[];
  sectionId?: string;
}

export default function Timeline({
  stages = INSTITUTE_JOURNEY_TIMELINE,
  sectionId = "fertility-journey",
}: TimelineProps) {
  const { dir, t } = useLanguage();

  return (
    <section id={sectionId} className="space-y-6" dir={dir}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-zinc-400 block mb-1.5">
            SECTION 05 • LONGITUDINAL PATIENT ARCHITECTURE
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            {t(
              "نقشه راه و مراحل سفر باروری شما در موسسه",
              "The Fertility Journey: From Assessment to Pregnancy Monitoring"
            )}
          </h2>
        </div>
        <span className="text-[10.5px] font-mono text-zinc-400">
          ASSESSMENT ↓ OPTIMIZATION ↓ IVF PREP ↓ TRANSFER ↓ MONITORING
        </span>
      </div>

      <div className="av-card rounded-2xl p-6 sm:p-8 border border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="av-card-inner rounded-xl p-5 border border-white/10 flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white text-black">
                    {stage.step}
                  </span>
                  <span className="text-[9.5px] font-mono text-zinc-400">
                    {stage.phaseCode.split("•")[1]?.trim() || stage.phaseCode}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug pt-1">
                  {t(stage.titleFa, stage.titleEn)}
                </h3>
                <p className="text-[11.5px] text-zinc-300 leading-[1.75]">
                  {t(stage.descFa, stage.descEn)}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>{stage.titleEn.toUpperCase()}</span>
                {idx < stages.length - 1 ? (
                  <span>→</span>
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
