import React from "react";
import { useLanguage } from "./LanguageContext";
import {
  Archive,
  BookOpen,
  CalendarCheck,
  Compass,
  FlaskConical,
  Globe,
  HelpCircle,
  Layers,
  Mail,
  MapPin,
  Microscope,
  Phone,
  UserCheck,
} from "lucide-react";
import { ALL_FERTILITY_PROGRAMS } from "../fertilityInstituteData";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { dir, t } = useLanguage();

  return (
    <footer
      dir={dir}
      className="mt-12 pt-10 pb-28 lg:pb-16 border-t border-white/10 space-y-8 text-xs text-zinc-400"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Col 1 (4 cols): Institute Identity & Contact Information */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl text-white">FII • TG</span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-white/10 text-zinc-200">
              GORGAN, IRAN
            </span>
          </div>
          <h3 className="font-iransans text-sm font-bold text-white leading-snug">
            {t(
              "موسسه نوآوری باروری (مرکز بهینه‌سازی سلامت تولیدمثل و موفقیت IVF)",
              "Fertility Innovation Institute — Center for Reproductive Health Optimization"
            )}
          </h3>
          <p className="text-[11.5px] text-zinc-400 leading-relaxed">
            {t(
              "تلفیق پزشکی بالینی، فیزیولوژی تولیدمثل، پژوهش‌های سلولی-مولکولی، ثبت اختراعات جهانی (WIPO) و علم داده به سرپرستی دکتر محبوبه تاج‌الدینی.",
              "Next-generation fertility innovation institute combining clinical medicine, reproductive physiology, WIPO-patented research, and data-driven IVF optimization under Dr. Mahboubeh Tajaldini."
            )}
          </p>

          {/* Official Address, Phone & Email Card */}
          <div className="av-card-inner rounded-xl p-3.5 border border-white/10 space-y-2 text-[11.5px] text-zinc-200">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span className="font-iransans">
                {t(
                  "آدرس: گلستان - گرگان - نبش عدالت 24",
                  "Address: Golestan, Gorgan, Corner of Edalat 24"
                )}
              </span>
            </div>
            <a
              href="tel:00989133494512"
              className="flex items-center gap-2.5 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span className="font-iransans">
                {t("تلفن تماس: 09133494512", "Phone: 09133494512 (00989133494512)")}
              </span>
            </a>
            <a
              href="mailto:mtajodini@gmail.com"
              className="flex items-center gap-2.5 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span className="font-mono">mtajodini@gmail.com</span>
            </a>

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
              <a
                href="tel:00989133494512"
                onClick={() => onNavigate("/contact")}
                className="font-iransans av-pill-btn px-3 py-1 rounded-lg text-[10.5px] font-bold"
              >
                {t("نوبت‌دهی تلفنی", "Book Call")}
              </a>
              <a
                href="https://wa.me/00989133494512"
                target="_blank"
                rel="noopener noreferrer"
                className="font-iransans px-2.5 py-1 rounded-lg border border-white/20 bg-white/[0.05] hover:border-white text-[10.5px] text-white transition"
              >
                {t("واتساپ", "WhatsApp")}
              </a>
              <a
                href="https://t.me/+989133494512"
                target="_blank"
                rel="noopener noreferrer"
                className="font-iransans px-2.5 py-1 rounded-lg border border-white/20 bg-white/[0.05] hover:border-white text-[10.5px] text-white transition"
              >
                {t("تلگرام", "Telegram")}
              </a>
            </div>
          </div>
        </div>

        {/* Col 2 (4 cols): Dedicated Service Pages */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="font-iransans text-xs text-white font-bold block">
            {t("کلینیک و ۶ برنامه تخصصی (صفحات مجزا)", "6 DEDICATED SERVICE CLINICS")}
          </span>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavigate("/programs")}
                className="font-iransans text-xs text-white hover:underline transition flex items-center gap-2 cursor-pointer font-semibold"
              >
                <FlaskConical className="w-3.5 h-3.5 text-zinc-300" />
                <span>
                  {t(
                    "صفحه جامع ۶ کلینیک تخصصی (/programs)",
                    "All 6 Specialized Clinics (/programs)"
                  )}
                </span>
              </button>
            </li>
            {ALL_FERTILITY_PROGRAMS.map((prog) => (
              <li key={prog.slug}>
                <button
                  onClick={() => onNavigate(prog.slug)}
                  className="font-iransans text-[11.5px] text-zinc-400 hover:text-white transition flex items-center gap-2 cursor-pointer text-start"
                >
                  <span className="font-mono text-[10px] text-zinc-500 shrink-0">
                    {prog.slug}
                  </span>
                  <span className="font-iransans">
                    {t(
                      prog.hero.titleFa.split("(")[0].trim(),
                      prog.hero.titleEn
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 (4 cols): Key Dedicated Pages, Sitemap & Legacy Website */}
        <div className="lg:col-span-4 space-y-2.5">
          <span className="font-iransans text-xs text-white font-bold block">
            {t(
              "صفحات اختصاصی منو، نقشه سایت و وبسایت خدمات مهاجرت نخبگان",
              "DEDICATED MENU PAGES & LEGACY ARCHIVE"
            )}
          </span>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onNavigate("/scientific-method")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "متد علمی ۳ ستونی و علل شکست IVF (/scientific-method)",
                    "Scientific Method & Why IVF Fails (/scientific-method)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/fertility-journey")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "نقشه راه ۵ مرحله‌ای سفر درمانی (/fertility-journey)",
                    "5-Stage Fertility Journey (/fertility-journey)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/innovation-lab")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <Microscope className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "پژوهش، اختراعات و آزمایشگاه نوآوری (/innovation-lab)",
                    "Patents & Innovation Lab (/innovation-lab)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/mahboubeh-tajaldini")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "پروفایل علمی دکتر محبوبه تاج‌الدینی (/mahboubeh-tajaldini)",
                    "Dr. Mahboubeh Tajaldini Profile (/mahboubeh-tajaldini)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/faq")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "سوالات متداول بیماران (/faq)",
                    "Patient FAQ (/faq)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <a
                href="tel:00989133494512"
                onClick={() => onNavigate("/contact")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "نوبت‌دهی و تماس مستقیم: 09133494512 (/contact)",
                    "Book Consultation & Call: 00989133494512 (/contact)"
                  )}
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/blog-strategy")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "استراتژی ۱۰۰ موضوع وبلاگ باروری (/blog-strategy)",
                    "100 Fertility Blog Topic Strategy (/blog-strategy)"
                  )}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("/sitemap")}
                className="font-iransans text-[11.5px] text-zinc-300 hover:text-white transition flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-zinc-400" />
                <span>
                  {t(
                    "نقشه جامع سایت، سئو و پرامپت‌ها (/sitemap)",
                    "Complete Sitemap, SEO & AI Prompts (/sitemap)"
                  )}
                </span>
              </button>
            </li>
            <li className="pt-1">
              {/* Mandatory "Legacy Website" Link in Footer Menu */}
              <button
                onClick={() => onNavigate("/legacy-website")}
                className="font-iransans px-3.5 py-2 rounded-lg border border-white/25 bg-white/[0.04] hover:border-white text-white text-xs font-semibold flex items-center gap-2 transition cursor-pointer"
              >
                <Archive className="w-3.5 h-3.5" />
                <span>
                  {t(
                    "وبسایت خدمات مهاجرت نخبگان",
                    "Legacy Website (/legacy-website)"
                  )}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Social Row */}
      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
        <div className="space-y-1 text-center sm:text-start">
          <span className="block">
            © {new Date().getFullYear()} Fertility Innovation Institute & TAJ
            Global (Dr. Mahboubeh Tajaldini). All Rights Reserved.
          </span>
          <span className="font-iransans block text-zinc-400">
            {t(
              "گلستان - گرگان - نبش عدالت 24 | تلفن: 09133494512 | ایمیل: mtajodini@gmail.com",
              "Golestan, Gorgan, Corner of Edalat 24 | Tel: 00989133494512 | Email: mtajodini@gmail.com"
            )}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-iransans text-[11px] text-zinc-400 font-medium">
            {t("ارتباط مستقیم (00989133494512)", "DIRECT (00989133494512)")}
          </span>
          <a
            href="https://t.me/+989133494512"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded border border-white/15 hover:border-white flex items-center justify-center text-zinc-400 hover:text-white transition text-[10px] font-bold"
            title="Telegram (00989133494512)"
          >
            TG
          </a>
          <a
            href="https://wa.me/00989133494512"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded border border-white/15 hover:border-white flex items-center justify-center text-zinc-400 hover:text-white transition text-[10px] font-bold"
            title="WhatsApp (00989133494512)"
          >
            WA
          </a>
          <a
            href="tel:00989133494512"
            className="w-7 h-7 rounded border border-white/15 hover:border-white flex items-center justify-center text-zinc-400 hover:text-white transition"
            title="Direct Call (00989133494512)"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:mtajodini@gmail.com"
            className="w-7 h-7 rounded border border-white/15 hover:border-white flex items-center justify-center text-zinc-400 hover:text-white transition"
            title="Email (mtajodini@gmail.com)"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://rd.tajglobal.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded border border-white/15 hover:border-white flex items-center justify-center text-zinc-400 hover:text-white transition"
            title="Research Portal"
          >
            <Globe className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
