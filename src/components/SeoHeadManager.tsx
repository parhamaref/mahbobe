import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import {
  ALL_FERTILITY_PROGRAMS,
  DR_TAJALDINI_PROFILE,
  INSTITUTE_FAQS,
} from "../fertilityInstituteData";

interface SeoHeadManagerProps {
  currentPath: string;
}

export default function SeoHeadManager({ currentPath }: SeoHeadManagerProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const matchedProgram = ALL_FERTILITY_PROGRAMS.find(
      (p) => p.slug === currentPath
    );

    let title =
      language === "fa"
        ? "موسسه نوآوری باروری | مرکز بهینه‌سازی سلامت تولیدمثل و موفقیت IVF | دکتر محبوبه تاج‌الدینی"
        : "Fertility Innovation Institute | Center for Reproductive Health Optimization & IVF Success | Dr. Mahboubeh Tajaldini";

    let description =
      language === "fa"
        ? "موسسه نوآوری باروری در گرگان به سرپرستی دکتر محبوبه تاج‌الدینی: رویکرد علمی به بهینه‌سازی باروری، آمادگی پیش از IVF، درمان شکست مکرر لانه‌گزینی (RIF)، PRP، تنبلی تخمدان (PCOS) و سلامت اسپرم."
        : "Next-generation Fertility Innovation Institute in Gorgan, Iran led by Dr. Mahboubeh Tajaldini: scientific pre-IVF readiness, recurrent IVF failure forensics, endometrial PRP optimization, PCOS & male fertility.";

    if (matchedProgram) {
      title =
        language === "fa"
          ? matchedProgram.seo.metaTitleFa
          : matchedProgram.seo.metaTitleEn;
      description =
        language === "fa"
          ? matchedProgram.seo.metaDescriptionFa
          : matchedProgram.seo.metaDescriptionEn;
    } else if (currentPath === "/mahboubeh-tajaldini") {
      title =
        language === "fa"
          ? DR_TAJALDINI_PROFILE.seo.metaTitleFa
          : DR_TAJALDINI_PROFILE.seo.metaTitleEn;
      description =
        language === "fa"
          ? DR_TAJALDINI_PROFILE.seo.metaDescriptionFa
          : DR_TAJALDINI_PROFILE.seo.metaDescriptionEn;
    } else if (currentPath === "/blog-strategy") {
      title =
        language === "fa"
          ? "بانک ۱۰۰ موضوع مقاله تخصصی باروری، IVF و فیزیولوژی تولیدمثل | موسسه نوآوری باروری"
          : "100 Fertility, IVF, PRP & Reproductive Physiology Blog Strategy | Fertility Innovation Institute";
    } else if (currentPath === "/sitemap") {
      title =
        language === "fa"
          ? "نقشه جامع سایت، معماری سئو و پرامپت‌های تصویر | موسسه نوآوری باروری"
          : "Interactive Sitemap, SEO Architecture & AI Image Prompts | Fertility Innovation Institute";
    } else if (currentPath === "/legacy-website") {
      title =
        language === "fa"
          ? "وبسایت خدمات مهاجرت نخبگان | مرکز طراحی مسیر مهاجرت نخبگان تاج گلوبال"
          : "Legacy Website — TAJ Global Sovereign Migration & Research Portal";
    }

    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute("property", prop);
        } else {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    // Build dynamic Schema.org JSON-LD graph
    const activeFaqs = matchedProgram ? matchedProgram.faqs : INSTITUTE_FAQS;
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalOrganization",
          "@id": "https://tajglobal.ir/#institute",
          name: "Fertility Innovation Institute (Center for Reproductive Health Optimization)",
          alternateName: "موسسه نوآوری باروری دکتر محبوبه تاج‌الدینی",
          description: description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "گلستان - گرگان - نبش عدالت 24 (Corner of Edalat 24)",
            addressLocality: "Gorgan",
            addressRegion: "Golestan Province",
            addressCountry: "IR",
          },
          telephone: "00989133494512",
          email: "mtajodini@gmail.com",
          medicalSpecialty: [
            "Reproductive Physiology",
            "Fertility Optimization",
            "Reproductive Endocrinology",
            "Andrology",
          ],
          founder: {
            "@id": "https://tajglobal.ir/#dr-mahboubeh-tajaldini",
          },
        },
        {
          "@type": "Person",
          "@id": "https://tajglobal.ir/#dr-mahboubeh-tajaldini",
          name: "Dr. Mahboubeh Tajaldini",
          alternateName: "دکتر محبوبه تاج‌الدینی",
          jobTitle:
            "Director of Reproductive Physiology, Fertility Optimization & Research Innovation",
          alumniOf: [
            {
              "@type": "CollegeOrUniversity",
              name: "University of Bologna",
            },
          ],
          award: [
            "Gold Medal — Geneva International Exhibition of Inventions",
            "Gold Medal — Silicon Valley International Invention Festival",
            "WIPO International Patent Holder",
            "IFIA Official Member",
            "National Elites Foundation Member",
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: activeFaqs.map((faq) => ({
            "@type": "Question",
            name: language === "fa" ? faq.qFa : faq.qEn,
            acceptedAnswer: {
              "@type": "Answer",
              text: language === "fa" ? faq.aFa : faq.aEn,
            },
          })),
        },
      ],
    };

    let scriptEl = document.getElementById(
      "dynamic-json-ld-schema"
    ) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement("script");
      scriptEl.id = "dynamic-json-ld-schema";
      scriptEl.type = "application/ld+json";
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLdData);
  }, [currentPath, language]);

  return null;
}
