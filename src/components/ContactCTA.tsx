import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle,
  FileText,
} from "lucide-react";
import { FourPointStarFilled } from "./ui/Icons";

export interface ContactCTAProps {
  showModal: boolean;
  onToggleModal: (open: boolean) => void;
  prefilledNotes?: string;
}

const CONTACT_CHANNELS = [
  {
    href: "tel:00989133494512",
    Icon: Phone,
    labelFa: "تلفن تماس: 09133494512",
    labelEn: "Tel: 00989133494512 (09133494512)",
    isMono: false,
  },
  {
    href: "mailto:mtajodini@gmail.com",
    Icon: Mail,
    labelFa: "mtajodini@gmail.com",
    labelEn: "mtajodini@gmail.com",
    isMono: true,
  },
  {
    href: "https://wa.me/00989133494512",
    Icon: MapPin,
    labelFa: "گلستان - گرگان - نبش عدالت 24",
    labelEn: "Golestan, Gorgan, Corner of Edalat 24",
    isMono: false,
    external: true,
  },
  {
    href: "https://t.me/+989133494512",
    Icon: Globe,
    labelFa: "تلگرام و واتساپ: 00989133494512",
    labelEn: "Telegram & WhatsApp: 00989133494512",
    isMono: false,
    external: true,
  },
];

export default function ContactCTA({
  showModal,
  onToggleModal,
  prefilledNotes = "",
}: ContactCTAProps) {
  const { language, dir, t } = useLanguage();

  const [frmName, setFrmName] = useState("");
  const [frmRole, setFrmRole] = useState("md");
  const [frmEmail, setFrmEmail] = useState("");
  const [frmPhone, setFrmPhone] = useState("");
  const [frmResearch, setFrmResearch] = useState("");
  const [frmCVText, setFrmCVText] = useState("");
  const [frmSubmitStatus, setFrmSubmitStatus] = useState(false);
  const [frmFile, setFrmFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledNotes) {
      setFrmCVText(prefilledNotes);
    }
  }, [prefilledNotes]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.split(",")[1];
        resolve(base64Data);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!frmName || !frmEmail || !frmPhone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      let fileData = "";
      let fileName = "";
      let fileType = "";

      if (frmFile) {
        fileData = await fileToBase64(frmFile);
        fileName = frmFile.name;
        fileType = frmFile.type;
      }

      const payload = {
        name: frmName,
        role: frmRole,
        email: frmEmail,
        phone: frmPhone,
        research: frmResearch,
        cvText: frmCVText,
        fileData,
        fileName,
        fileType,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(
          t(
            "خطا در ارسال اطلاعات به سرور",
            "Server returned an error message during dispatch."
          )
        );
      }

      setFrmSubmitStatus(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFrmName("");
    setFrmEmail("");
    setFrmPhone("");
    setFrmResearch("");
    setFrmCVText("");
    setFrmFile(null);
    setFrmSubmitStatus(false);
    setSubmitError(null);
  };

  return (
    <section id="contact-cta" className="mb-10">
      <div className="metallic-cta-bg rounded-xl border border-white/15 p-6 sm:p-9 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left 4 cols: Big Stacked Display Text + Sparkle Star */}
          <div className="lg:col-span-4 relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold uppercase leading-[1.08] tracking-tight text-white">
              {language === "fa" ? (
                <>
                  نوبت‌دهی و مشاوره
                  <br />
                  تخصصی باروری
                </>
              ) : (
                <>
                  BOOK YOUR
                  <br />
                  SCIENTIFIC
                  <br />
                  CONSULTATION
                </>
              )}
            </h2>
            <div className="inline-block ms-3 text-white align-middle">
              <FourPointStarFilled className="w-5 h-5 animate-pulse" />
            </div>
          </div>

          {/* Center 5 cols: Address/Phone Summary + Direct 00989133494512 Action Buttons */}
          <div className="lg:col-span-5 space-y-4" dir={dir}>
            <p className="text-xs sm:text-[13px] text-zinc-200 leading-relaxed">
              {t(
                "پذیرش حضوری در گلستان - گرگان - نبش عدالت 24 و مشاوره آنلاین با نظارت مستقیم دکتر محبوبه تاج‌الدینی. برای نوبت‌دهی فوری روی یکی از درگاه‌های زیر کلیک کنید:",
                "In-person appointments at Golestan, Gorgan, Corner of Edalat 24 and global online consultations supervised by Dr. Mahboubeh Tajaldini:"
              )}
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="tel:00989133494512"
                className="font-iransans av-rect-btn px-4 py-2.5 rounded-lg text-xs font-bold inline-flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t("نوبت‌دهی و تماس مستقیم (09133494512)", "Direct Call & Booking (00989133494512)")}</span>
              </a>

              <a
                href="https://wa.me/00989133494512"
                target="_blank"
                rel="noopener noreferrer"
                className="font-iransans px-3.5 py-2.5 rounded-lg border border-white/25 bg-white/[0.06] hover:border-white text-xs font-semibold text-white inline-flex items-center gap-1.5 transition"
              >
                <span>{t("نوبت‌دهی واتساپ", "WhatsApp Booking")}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://t.me/+989133494512"
                target="_blank"
                rel="noopener noreferrer"
                className="font-iransans px-3.5 py-2.5 rounded-lg border border-white/25 bg-white/[0.06] hover:border-white text-xs font-semibold text-white inline-flex items-center gap-1.5 transition"
              >
                <span>{t("نوبت‌دهی تلگرام", "Telegram Booking")}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => onToggleModal(!showModal)}
                className="font-iransans px-3.5 py-2.5 rounded-lg border border-white/20 bg-black/40 hover:border-white text-xs font-medium text-zinc-200 hover:text-white inline-flex items-center gap-1.5 cursor-pointer transition"
              >
                <span>{t("فرم ثبت پرونده آنلاین", "Online Intake Form")}</span>
              </button>
            </div>
          </div>

          {/* Right 3 cols: Vertical Divider + 4 Contact Details Rows */}
          <div
            dir={dir}
            className="lg:col-span-3 lg:border-s lg:border-white/15 lg:ps-6 space-y-2.5 text-xs text-zinc-200"
          >
            {CONTACT_CHANNELS.map((item, idx) => {
              const content = (
                <>
                  <item.Icon className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                  <span
                    className={`truncate text-[11.5px] ${
                      item.isMono ? "font-mono" : "font-iransans"
                    }`}
                  >
                    {t(item.labelFa, item.labelEn)}
                  </span>
                </>
              );

              if (!item.href) {
                return (
                  <div key={idx} className="flex items-center gap-3">
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>

        {/* Expandable Full Intake Form right inside the CTA box when clicked */}
        {showModal && (
          <div
            className="mt-8 pt-8 border-t border-white/15 animate-fade-in"
            dir={dir}
          >
            {frmSubmitStatus ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle className="w-10 h-10 text-white mx-auto" />
                <h3 className="text-lg font-bold text-white">
                  {t(
                    "پرونده ارزیابی شما با موفقیت ثبت شد",
                    "Sovereign Request Logged Successfully"
                  )}
                </h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  {t(
                    "اطلاعات علمی شما به دپارتمان تحقیقات TAJ Global به مدیریت دکتر محبوبه تاج‌الدینی ارسال شد.",
                    "Your dossier has been forwarded to Dr. Mahboubeh Tajeddini's review panel."
                  )}
                </p>
                <button
                  onClick={handleResetForm}
                  className="av-rect-btn px-4 py-2 rounded text-xs font-bold uppercase"
                >
                  {t("ثبت درخواست جدید", "Submit Another Profile")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    {t(
                      "فرم رسمی ارسال رزومه و تعیین وقت ارزیابی علمی",
                      "OFFICIAL SCIENTIFIC PORTFOLIO INTAKE FORM"
                    )}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onToggleModal(false)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    {t("بستن ✕", "Close ✕")}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <input
                    type="text"
                    required
                    value={frmName}
                    onChange={(e) => setFrmName(e.target.value)}
                    placeholder={t("نام و نام خانوادگی *", "Full Name *")}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                  />
                  <select
                    value={frmRole}
                    onChange={(e) => setFrmRole(e.target.value)}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                  >
                    <option value="md" className="bg-zinc-900">
                      {t("پزشک متخصص / جراح", "Specialist Physician / Surgeon")}
                    </option>
                    <option value="faculty" className="bg-zinc-900">
                      {t("عضو هیئت علمی / استاد", "Faculty Member / Professor")}
                    </option>
                    <option value="phd" className="bg-zinc-900">
                      {t("پژوهشگر دکتری / پست‌داک", "PhD Researcher / Postdoc")}
                    </option>
                    <option value="gp" className="bg-zinc-900">
                      {t("پزشک عمومی (AMC/OET)", "General Practitioner")}
                    </option>
                  </select>
                  <input
                    type="email"
                    required
                    value={frmEmail}
                    onChange={(e) => setFrmEmail(e.target.value)}
                    placeholder={t("ایمیل معتبر *", "Email Address *")}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                    dir="ltr"
                  />
                  <input
                    type="text"
                    required
                    value={frmPhone}
                    onChange={(e) => setFrmPhone(e.target.value)}
                    placeholder={t("شماره واتساپ فعال *", "Phone / WhatsApp *")}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                    dir="ltr"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={frmResearch}
                    onChange={(e) => setFrmResearch(e.target.value)}
                    placeholder={t(
                      "تعداد مقالات ISI / شاخص H-index",
                      "Publications / H-Index"
                    )}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    value={frmCVText}
                    onChange={(e) => setFrmCVText(e.target.value)}
                    placeholder={t(
                      "لینک گوگل اسکالر یا توضیحات تکمیلی",
                      "Google Scholar Link or Notes"
                    )}
                    className="bg-black/40 border border-white/15 rounded px-3.5 py-2.5 text-xs text-white outline-none focus:border-white"
                  />
                  <label className="bg-black/40 border border-dashed border-white/25 hover:border-white rounded px-3.5 py-2.5 text-xs text-zinc-300 flex items-center justify-center gap-2 cursor-pointer truncate">
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">
                      {frmFile
                        ? frmFile.name
                        : t("پیوست فایل رزومه (CV)", "Attach CV File (PDF/DOC)")}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={(e) => setFrmFile(e.target.files?.[0] || null)}
                      className="hidden"
                    />
                  </label>
                </div>

                {submitError && (
                  <p className="text-xs text-red-400">{submitError}</p>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="av-rect-btn px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {isSubmitting
                      ? t("در حال ارسال...", "Sending...")
                      : t("ارسال نهایی پرونده ارزیابی", "SUBMIT DOSSIER")}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
