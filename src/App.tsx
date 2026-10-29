import React, { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Archive,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  Compass,
  FlaskConical,
  HelpCircle,
  Home,
  Layers,
  Menu,
  Microscope,
  UserCheck,
  X,
} from "lucide-react";
import { ALL_FERTILITY_PROGRAMS } from "./fertilityInstituteData";
import FertilityInstituteHomepage, {
  InstituteViewMode,
} from "./components/FertilityInstituteHomepage";
import FertilityServicePage from "./components/FertilityServicePage";
import ScientistProfilePage from "./components/ScientistProfilePage";
import InstituteStrategyHub from "./components/InstituteStrategyHub";
import LegacyWebsitePage from "./components/LegacyWebsitePage";
import SeoHeadManager from "./components/SeoHeadManager";
import Footer from "./components/Footer";

function normalizeRoute(pathname: string): string {
  if (!pathname || pathname === "" || pathname === "/index.html") return "/";
  const clean = pathname.replace(/\/+$/, "");
  return clean === "" ? "/" : clean;
}

const DEDICATED_VIEW_MAP: Record<string, InstituteViewMode> = {
  "/": "home",
  "/programs": "programs",
  "/scientific-method": "scientific-method",
  "/fertility-journey": "fertility-journey",
  "/innovation-lab": "innovation-lab",
  "/faq": "faq",
  "/contact": "contact",
};

const PRIMARY_MENU_ITEMS = [
  { path: "/", labelFa: "صفحه اصلی", labelEn: "Home", Icon: Home },
  {
    path: "/programs",
    labelFa: "۶ کلینیک تخصصی",
    labelEn: "6 Clinics",
    Icon: FlaskConical,
    hasDropdown: true,
  },
  {
    path: "/scientific-method",
    labelFa: "متد علمی و علل شکست",
    labelEn: "Scientific Method",
    Icon: Layers,
  },
  {
    path: "/fertility-journey",
    labelFa: "مراحل سفر درمانی",
    labelEn: "Fertility Journey",
    Icon: Compass,
  },
  {
    path: "/innovation-lab",
    labelFa: "پژوهش و اختراعات",
    labelEn: "Research & Lab",
    Icon: Microscope,
  },
  {
    path: "/mahboubeh-tajaldini",
    labelFa: "دکتر محبوبه تاج‌الدینی",
    labelEn: "Dr. Tajaldini",
    Icon: UserCheck,
  },
  {
    path: "/faq",
    labelFa: "سوالات متداول",
    labelEn: "FAQ",
    Icon: HelpCircle,
  },
  {
    path: "/blog-strategy",
    labelFa: "۱۰۰ موضوع وبلاگ",
    labelEn: "100 Blogs",
    Icon: BookOpen,
  },
  {
    path: "/sitemap",
    labelFa: "نقشه سایت",
    labelEn: "Sitemap",
    Icon: Compass,
  },
];

const MOBILE_APP_TABS = [
  { path: "/", labelFa: "خانه", labelEn: "Home", Icon: Home },
  {
    path: "/programs",
    labelFa: "کلینیک‌ها",
    labelEn: "Clinics",
    Icon: FlaskConical,
  },
  {
    path: "/scientific-method",
    labelFa: "متد علمی",
    labelEn: "Method",
    Icon: Layers,
  },
  {
    path: "/innovation-lab",
    labelFa: "پژوهش",
    labelEn: "Research",
    Icon: Microscope,
  },
  {
    path: "/mahboubeh-tajaldini",
    labelFa: "دکتر تاج‌الدینی",
    labelEn: "Director",
    Icon: UserCheck,
  },
  {
    path: "/contact",
    labelFa: "نوبت‌دهی",
    labelEn: "Book",
    Icon: CalendarCheck,
  },
];

function AppContent() {
  const { language, toggleLanguage, dir, t } = useLanguage();

  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizeRoute(window.location.pathname)
  );
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [prefilledNotes, setPrefilledNotes] = useState<string>("");
  const [programsDropdownOpen, setProgramsDropdownOpen] =
    useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [headerAccordionOpen, setHeaderAccordionOpen] =
    useState<boolean>(false);
  const [openAccordionSection, setOpenAccordionSection] = useState<string>("clinics");

  const toggleAccordionSection = (sectionId: string) => {
    setOpenAccordionSection((prev) => (prev === sectionId ? "" : sectionId));
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizeRoute(window.location.pathname));
      setHeaderAccordionOpen(false);
      setProgramsDropdownOpen(false);
      setMobileMenuOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    const target = normalizeRoute(path);
    setProgramsDropdownOpen(false);
    setMobileMenuOpen(false);
    setHeaderAccordionOpen(false);
    try {
      window.history.pushState({}, "", target);
    } catch {
      // Fallback if running in restricted iframe history context
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookConsultation = (contextTitle: string) => {
    setPrefilledNotes(
      `${t("درخواست مشاوره تخصصی:", "Consultation Inquiry:")} ${contextTitle}`
    );
    setShowContactModal(true);
    navigateTo("/contact");
    window.location.href = "tel:00989133494512";
  };

  const matchedServiceProgram = ALL_FERTILITY_PROGRAMS.find(
    (prog) => prog.slug === currentPath
  );

  const activeHomepageView: InstituteViewMode =
    DEDICATED_VIEW_MAP[currentPath] || "home";

  const BackArrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  const getCurrentPageLabel = () => {
    if (matchedServiceProgram) {
      return t(
        matchedServiceProgram.hero.titleFa.split("(")[0].trim(),
        matchedServiceProgram.hero.titleEn
      );
    }
    const foundPrimary = PRIMARY_MENU_ITEMS.find((i) => i.path === currentPath);
    if (foundPrimary) return t(foundPrimary.labelFa, foundPrimary.labelEn);
    if (currentPath === "/contact")
      return t("رزرو مشاوره تخصصی", "Book Consultation");
    if (currentPath === "/legacy-website")
      return t("وبسایت خدمات مهاجرت نخبگان", "Elite Migration Services Website");
    return t("موسسه نوآوری باروری", "Fertility Innovation Institute");
  };

  const ACCORDION_GROUPS = [
    {
      id: "clinics",
      titleFa: "کلینیک و ۶ برنامه تخصصی بهینه‌سازی باروری و IVF",
      titleEn: "Clinic & 6 Specialized Fertility & IVF Programs",
      badgeFa: "۷ صفحه تخصصی",
      badgeEn: "7 Pages",
      items: [
        {
          path: "/programs",
          labelFa: "صفحه جامع کلینیک و ۶ برنامه تخصصی",
          labelEn: "All 6 Specialized Clinics Overview",
        },
        ...ALL_FERTILITY_PROGRAMS.map((prog, idx) => ({
          path: prog.slug,
          labelFa: `0${idx + 1}. ${prog.hero.titleFa.split("(")[0].trim()}`,
          labelEn: `0${idx + 1}. ${prog.hero.titleEn}`,
        })),
      ],
    },
    {
      id: "science",
      titleFa: "متد علمی، مراحل درمان و آزمایشگاه پژوهش",
      titleEn: "Scientific Method, Journey & Research Lab",
      badgeFa: "۴ صفحه علمی",
      badgeEn: "4 Pages",
      items: [
        {
          path: "/scientific-method",
          labelFa: "متد علمی و علل شکست سیکل‌های باروری",
          labelEn: "Scientific Method & Failure Analysis",
        },
        {
          path: "/fertility-journey",
          labelFa: "۵ مرحله سفر درمانی در موسسه",
          labelEn: "5-Stage Fertility Optimization Journey",
        },
        {
          path: "/innovation-lab",
          labelFa: "آزمایشگاه نوآوری، پژوهش و ثبت اختراعات",
          labelEn: "Research, Patents & Innovation Lab",
        },
        {
          path: "/mahboubeh-tajaldini",
          labelFa: "پروفایل علمی دکتر محبوبه تاج‌الدینی",
          labelEn: "Dr. Mahboubeh Tajaldini Scientific Profile",
        },
      ],
    },
    {
      id: "resources",
      titleFa: "راهنمای مراجعین، دانشنامه، نقشه سایت و وبسایت مهاجرت",
      titleEn: "Patient Resources, Sitemap & Elite Migration Website",
      badgeFa: "۶ بخش کاربردی",
      badgeEn: "6 Sections",
      items: [
        {
          path: "/",
          labelFa: "صفحه اصلی موسسه نوآوری باروری",
          labelEn: "Institute Homepage",
        },
        {
          path: "/faq",
          labelFa: "سوالات متداول مراجعین (FAQ)",
          labelEn: "Frequently Asked Questions (FAQ)",
        },
        {
          path: "/contact",
          labelFa: "نوبت‌دهی و مشاوره تخصصی (09133494512)",
          labelEn: "Book Consultation & Direct Contact",
        },
        {
          path: "/blog-strategy",
          labelFa: "بانک ۱۰۰ موضوع علمی و مقالات باروری",
          labelEn: "100 Scientific Fertility Blog Topics",
        },
        {
          path: "/sitemap",
          labelFa: "نقشه جامع سایت و معماری صفحات",
          labelEn: "Full Sitemap & Directory",
        },
        {
          path: "/legacy-website",
          labelFa: "وبسایت خدمات مهاجرت نخبگان",
          labelEn: "Elite Migration Services Website",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#101216] text-[#e5e7eb] font-sans relative overflow-x-hidden selection:bg-white selection:text-black">
      {/* Dynamic SEO & JSON-LD Schema Manager */}
      <SeoHeadManager currentPath={currentPath} />

      {/* Subtle Ambient Studio Lighting */}
      <div className="fixed top-[-10%] left-[20%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-slate-400/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* =================================================================
          MOBILE & TABLET NATIVE APP TOP BAR (< lg) - SINGLE ROW + ACCORDION
      ================================================================= */}
      {currentPath !== "/legacy-website" && (
        <header
          dir={dir}
          className="lg:hidden sticky top-0 z-50 app-glass-bar border-b border-white/10 px-3 sm:px-5 py-2.5"
        >
          <div className="flex items-center justify-between gap-2">
            {/* Start: Accordion Menu Toggle + Back Button + Brand */}
            <div className="flex items-center gap-2 min-w-0">
              <button
                onClick={() => setHeaderAccordionOpen((prev) => !prev)}
                aria-expanded={headerAccordionOpen}
                aria-label="Toggle Accordion Menu"
                className={`font-iransans h-9 px-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-bold active:scale-95 transition shrink-0 cursor-pointer ${
                  headerAccordionOpen
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.07] text-white border-white/15"
                }`}
              >
                {headerAccordionOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">
                  {t("منوی صفحات", "Menu")}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    headerAccordionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {currentPath !== "/" && (
                <button
                  onClick={() => navigateTo("/")}
                  aria-label="Back to Home"
                  className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 active:scale-95 transition shrink-0 cursor-pointer"
                >
                  <BackArrow className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => navigateTo("/")}
                className="flex items-center gap-2 text-start min-w-0 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-lg bg-white text-black font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  FII
                </span>
                <div className="truncate">
                  <span className="font-iransans block text-xs font-bold text-white truncate">
                    {getCurrentPageLabel()}
                  </span>
                  <span className="font-iransans block text-[9.5px] text-zinc-400 truncate">
                    {t(
                      "گلستان - گرگان - نبش عدالت 24 • 09133494512",
                      "Gorgan, Corner of Edalat 24 • 09133494512"
                    )}
                  </span>
                </div>
              </button>
            </div>

            {/* End: Language Toggle + Quick Consultation Button */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={toggleLanguage}
                className="font-iransans px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] text-[10px] font-bold text-zinc-200 cursor-pointer"
              >
                {language === "fa" ? "EN" : "FA"}
              </button>
              <a
                href="tel:00989133494512"
                onClick={() => navigateTo("/contact")}
                className="font-iransans av-pill-btn px-3 py-1.5 rounded-lg text-[10.5px] font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>{t("نوبت‌دهی", "Book")}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Collapsible Mobile/Tablet Header Accordion Menu */}
          {headerAccordionOpen && (
            <div className="mt-2.5 pt-2.5 border-t border-white/10 space-y-2 max-h-[75vh] overflow-y-auto pb-2">
              {ACCORDION_GROUPS.map((group) => {
                const isOpen = openAccordionSection === group.id;
                return (
                  <div
                    key={group.id}
                    className="rounded-xl border border-white/12 bg-[#141820]/95 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordionSection(group.id)}
                      className="font-iransans w-full px-3.5 py-2.5 flex items-center justify-between gap-2 text-start text-xs font-bold text-white hover:bg-white/[0.04] transition cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">
                          {t(group.titleFa, group.titleEn)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-normal px-2 py-0.5 rounded-md bg-white/[0.06] text-zinc-300">
                          {t(group.badgeFa, group.badgeEn)}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-white" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-2.5 pb-2.5 pt-1 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {group.items.map((item) => {
                          const active = currentPath === item.path;
                          return (
                            <button
                              key={item.path}
                              onClick={() => navigateTo(item.path)}
                              className={`font-iransans w-full px-3 py-2 rounded-lg text-start text-[11.5px] flex items-center justify-between gap-2 transition cursor-pointer ${
                                active
                                  ? "bg-white text-black font-bold"
                                  : "bg-white/[0.03] text-zinc-200 hover:bg-white/10 border border-white/[0.06]"
                              }`}
                            >
                              <span className="truncate">
                                {t(item.labelFa, item.labelEn)}
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75" />
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </header>
      )}

      {/* =================================================================
          MOBILE & TABLET SLIDE-OVER APP MENU DRAWER
      ================================================================= */}
      {mobileMenuOpen && (
        <div
          dir={dir}
          className="lg:hidden fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex flex-col justify-end sm:justify-center sm:items-center p-0 sm:p-6"
        >
          <div className="av-card w-full sm:max-w-lg max-h-[88vh] rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 border border-white/20 bg-[#12151b] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-white text-black font-serif font-bold text-sm flex items-center justify-center">
                  FII
                </span>
                <div>
                  <h3 className="font-iransans text-sm font-bold text-white">
                    {t("منوی آکاردئونی صفحات تخصصی", "Institute Accordion Menu")}
                  </h3>
                  <p className="font-iransans text-[10.5px] text-zinc-400">
                    {t(
                      "انتخاب هر موضوع، صفحه اختصاصی آن را باز می‌کند",
                      "Tap any topic to open its dedicated page"
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {ACCORDION_GROUPS.map((group) => {
              const isOpen = openAccordionSection === group.id;
              return (
                <div
                  key={group.id}
                  className="rounded-xl border border-white/12 bg-white/[0.03] overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordionSection(group.id)}
                    className="font-iransans w-full px-3.5 py-3 flex items-center justify-between gap-2 text-start text-xs font-bold text-white cursor-pointer"
                  >
                    <span className="truncate">
                      {t(group.titleFa, group.titleEn)}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3 pb-3 pt-1 border-t border-white/10 space-y-1.5">
                      {group.items.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => navigateTo(item.path)}
                          className={`font-iransans w-full px-3 py-2 rounded-lg text-start text-xs flex items-center justify-between transition cursor-pointer ${
                            currentPath === item.path
                              ? "bg-white text-black font-bold"
                              : "bg-white/[0.04] text-zinc-200 hover:bg-white/10"
                          }`}
                        >
                          <span className="truncate">
                            {t(item.labelFa, item.labelEn)}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================
          MULTI-DEVICE RESPONSIVE SHELL (Mobile -> Tablet -> Laptop -> Monitor -> All-in-One)
      ================================================================= */}
      <div className="responsive-shell relative z-10 pt-3 lg:pt-0">
        {/* ===============================================================
            DESKTOP / LAPTOP / MONITOR HEADER MENU (lg+)
            Single Clean Row + Responsive Adaptive Items + Collapsible Accordion
        =============================================================== */}
        {currentPath !== "/legacy-website" && (
          <header
            dir="ltr"
            className="hidden lg:flex pt-5 pb-3.5 flex-col relative z-40 border-b border-white/[0.08] mb-5"
          >
            {/* Single Primary Header Row */}
            <div className="flex items-center justify-between gap-3 xl:gap-5">
              {/* Left Brand Monogram + Institute Title */}
              <button
                onClick={() => navigateTo("/")}
                className="group flex items-center gap-2.5 xl:gap-3 text-left cursor-pointer shrink-0"
              >
                <span className="font-serif text-[30px] xl:text-[36px] tracking-[-0.1em] text-white font-normal leading-none select-none">
                  FII
                </span>
                <div className="border-l border-white/15 pl-2.5 xl:pl-3">
                  <span className="font-iransans block text-[11px] xl:text-xs text-white font-bold whitespace-nowrap">
                    {t(
                      "موسسه نوآوری باروری و بهینه‌سازی IVF",
                      "FERTILITY INNOVATION INSTITUTE"
                    )}
                  </span>
                  <span className="font-iransans block text-[9.5px] xl:text-[10px] text-zinc-400 whitespace-nowrap">
                    {t(
                      "گلستان - گرگان - نبش عدالت 24 • 09133494512",
                      "GORGAN, CORNER OF EDALAT 24 • 09133494512"
                    )}
                  </span>
                </div>
              </button>

              {/* Center/Right Adaptive Navigation + Accordion Trigger */}
              <div className="flex items-center gap-2 xl:gap-3.5 min-w-0">
                <nav
                  dir={dir}
                  className="font-iransans flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5 text-[11.5px] xl:text-[12.5px] text-zinc-300 font-medium"
                >
                  {/* Always visible on lg+ */}
                  <button
                    onClick={() => navigateTo("/")}
                    className={`font-iransans px-2.5 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      currentPath === "/"
                        ? "bg-white/[0.09] text-white font-bold"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {t("صفحه اصلی", "Home")}
                  </button>

                  {/* 6 Specialized Clinics Dropdown + Direct Page */}
                  <div className="relative flex items-center">
                    <button
                      onClick={() => navigateTo("/programs")}
                      className={`font-iransans px-2.5 py-1.5 rounded-s-lg whitespace-nowrap transition cursor-pointer ${
                        currentPath === "/programs" || matchedServiceProgram
                          ? "bg-white/[0.09] text-white font-bold"
                          : "hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {t("کلینیک و ۶ برنامه تخصصی", "6 Clinics")}
                    </button>
                    <button
                      onClick={() => {
                        setProgramsDropdownOpen((prev) => !prev);
                        setHeaderAccordionOpen(false);
                      }}
                      aria-label="Toggle Clinics Dropdown"
                      className="px-1.5 py-1.5 rounded-e-lg hover:bg-white/10 text-zinc-300 hover:text-white transition cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          programsDropdownOpen ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>

                    {programsDropdownOpen && (
                      <div
                        dir={dir}
                        className="font-iransans absolute top-full mt-2 start-0 w-80 av-card rounded-xl p-2 border border-white/20 shadow-2xl bg-[#101216]/95 backdrop-blur-xl z-50 space-y-1"
                      >
                        <button
                          onClick={() => navigateTo("/programs")}
                          className={`font-iransans w-full text-start px-3 py-2 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                            currentPath === "/programs"
                              ? "bg-white text-black font-bold"
                              : "text-white bg-white/[0.06] hover:bg-white/15 font-semibold"
                          }`}
                        >
                          <span>
                            {t(
                              "مشاهده صفحه جامع هر ۶ کلینیک",
                              "View All 6 Specialized Clinics"
                            )}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </button>
                        {ALL_FERTILITY_PROGRAMS.map((prog, idx) => (
                          <button
                            key={prog.slug}
                            onClick={() => navigateTo(prog.slug)}
                            className={`font-iransans w-full text-start px-3 py-2 rounded-lg text-xs flex items-center justify-between transition cursor-pointer ${
                              currentPath === prog.slug
                                ? "bg-white text-black font-bold"
                                : "text-zinc-200 hover:bg-white/10"
                            }`}
                          >
                            <span className="truncate">
                              0{idx + 1}.{" "}
                              {t(
                                prog.hero.titleFa.split("(")[0].trim(),
                                prog.hero.titleEn
                              )}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Always visible on lg+ */}
                  <button
                    onClick={() => navigateTo("/scientific-method")}
                    className={`font-iransans px-2.5 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      currentPath === "/scientific-method"
                        ? "bg-white/[0.09] text-white font-bold"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {t("متد علمی", "Scientific Method")}
                  </button>

                  {/* Visible on xl+ screens (Desktop Monitors) */}
                  <button
                    onClick={() => navigateTo("/fertility-journey")}
                    className={`font-iransans hidden xl:inline-block px-2.5 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      currentPath === "/fertility-journey"
                        ? "bg-white/[0.09] text-white font-bold"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {t("مراحل درمان", "Fertility Journey")}
                  </button>

                  <button
                    onClick={() => navigateTo("/innovation-lab")}
                    className={`font-iransans hidden xl:inline-block px-2.5 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      currentPath === "/innovation-lab"
                        ? "bg-white/[0.09] text-white font-bold"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {t("پژوهش و اختراعات", "Research & Lab")}
                  </button>

                  {/* Always visible on lg+ */}
                  <button
                    onClick={() => navigateTo("/mahboubeh-tajaldini")}
                    className={`font-iransans px-2.5 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer ${
                      currentPath === "/mahboubeh-tajaldini"
                        ? "bg-white/[0.09] text-white font-bold"
                        : "hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {t("دکتر محبوبه تاج‌الدینی", "Dr. Tajaldini")}
                  </button>

                  {/* Visible on 2xl+ screens (Wide Monitors & All-in-One) */}
                  <button
                    onClick={() => navigateTo("/ legacy-website".replace(" ", ""))}
                    className="font-iransans hidden 2xl:flex px-2.5 py-1.5 rounded-lg border border-white/20 bg-white/[0.04] hover:border-white text-zinc-200 hover:text-white transition items-center gap-1.5 cursor-pointer text-xs whitespace-nowrap"
                  >
                    <Archive className="w-3.5 h-3.5" />
                    <span>{t("وبسایت خدمات مهاجرت نخبگان", "Legacy Website")}</span>
                  </button>

                  {/* Accordion Menu Trigger Button (Replaces cluttered 2nd row) */}
                  <button
                    onClick={() => {
                      setHeaderAccordionOpen((prev) => !prev);
                      setProgramsDropdownOpen(false);
                    }}
                    aria-expanded={headerAccordionOpen}
                    className={`font-iransans px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer ${
                      headerAccordionOpen
                        ? "bg-white text-black border-white font-bold shadow-sm"
                        : "border-white/20 bg-white/[0.05] text-zinc-100 hover:border-white/40 hover:bg-white/[0.09]"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t("منوی آکاردئونی صفحات", "All Pages Menu")}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        headerAccordionOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </nav>

                {/* Language Switcher + Primary CTA Pill */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={toggleLanguage}
                    className="font-iransans px-2.5 xl:px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 text-[11px] font-bold text-zinc-300 hover:text-white transition cursor-pointer"
                  >
                    {language === "fa" ? "EN" : "FA"}
                  </button>

                  <a
                    href="tel:00989133494512"
                    onClick={() => navigateTo("/contact")}
                    className="font-iransans av-pill-btn px-3.5 xl:px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-transform hover:scale-[1.02] cursor-pointer"
                  >
                    <span>{t("نوبت‌دهی", "Book Consultation")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Expandable Desktop/Laptop Header Accordion Panel (Auto-closes on page navigation) */}
            {headerAccordionOpen && (
              <div
                dir={dir}
                className="mt-3.5 pt-3.5 border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-3 animate-fadeIn"
              >
                {ACCORDION_GROUPS.map((group) => {
                  const isOpen = openAccordionSection === group.id;
                  return (
                    <div
                      key={group.id}
                      className="av-card rounded-xl border border-white/15 bg-[#12161f]/95 overflow-hidden flex flex-col"
                    >
                      <button
                        onClick={() => toggleAccordionSection(group.id)}
                        className="font-iransans w-full px-4 py-3 flex items-center justify-between gap-2 text-start text-xs font-bold text-white hover:bg-white/[0.04] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                          <span className="truncate">
                            {t(group.titleFa, group.titleEn)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">
                            {t(group.badgeFa, group.badgeEn)}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-3 pb-3 pt-1.5 border-t border-white/10 space-y-1.5">
                          {group.items.map((item) => {
                            const active = currentPath === item.path;
                            return (
                              <button
                                key={item.path}
                                onClick={() => navigateTo(item.path)}
                                className={`font-iransans w-full px-3 py-2 rounded-lg text-start text-xs flex items-center justify-between gap-2 transition cursor-pointer ${
                                  active
                                    ? "bg-white text-black font-bold shadow-sm"
                                    : "bg-white/[0.03] text-zinc-200 hover:bg-white/10 hover:text-white border border-white/[0.05]"
                                }`}
                              >
                                <span className="truncate">
                                  {t(item.labelFa, item.labelEn)}
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-75" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </header>
        )}

        {/* ===============================================================
            MAIN ROUTE VIEW RENDERER (Every Menu Item Opens a Dedicated Page)
        =============================================================== */}
        <main>
          {currentPath === "/legacy-website" ? (
            <LegacyWebsitePage onNavigate={navigateTo} />
          ) : matchedServiceProgram ? (
            <FertilityServicePage
              program={matchedServiceProgram}
              onNavigate={navigateTo}
              onBookConsultation={handleBookConsultation}
            />
          ) : currentPath === "/mahboubeh-tajaldini" ? (
            <ScientistProfilePage
              onNavigate={navigateTo}
              onBookConsultation={handleBookConsultation}
            />
          ) : currentPath === "/blog-strategy" ? (
            <InstituteStrategyHub initialTab="blog" onNavigate={navigateTo} />
          ) : currentPath === "/sitemap" ? (
            <InstituteStrategyHub
              initialTab="sitemap"
              onNavigate={navigateTo}
            />
          ) : (
            <FertilityInstituteHomepage
              activeView={activeHomepageView}
              onNavigate={navigateTo}
              showContactModal={showContactModal}
              onToggleContactModal={setShowContactModal}
              prefilledNotes={prefilledNotes}
              onBookConsultation={handleBookConsultation}
            />
          )}
        </main>

        {/* ===============================================================
            GLOBAL FOOTER MENU & SITEMAP DIRECTORY (Includes "Legacy Website")
        =============================================================== */}
        <Footer onNavigate={navigateTo} />
      </div>

      {/* =================================================================
          MOBILE & TABLET NATIVE APP BOTTOM TAB DOCK (< lg)
      ================================================================= */}
      <nav
        dir={dir}
        aria-label="Mobile App Bottom Navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-50 app-glass-bar border-t border-white/15 px-2 py-1.5"
      >
        <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
          {MOBILE_APP_TABS.map((tab) => {
            const isActive =
              currentPath === tab.path ||
              (tab.path === "/programs" && Boolean(matchedServiceProgram));

            if (tab.path === "/contact") {
              return (
                <a
                  key={tab.path}
                  href="tel:00989133494512"
                  onClick={() => navigateTo("/contact")}
                  className={`font-iransans flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <tab.Icon className="w-4 h-4 mb-0.5 stroke-[2]" />
                  <span className="font-iransans text-[9.5px] leading-tight truncate max-w-full">
                    {t(tab.labelFa, tab.labelEn)}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={tab.path}
                onClick={() => navigateTo(tab.path)}
                className={`font-iransans flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <tab.Icon className="w-4 h-4 mb-0.5 stroke-[2]" />
                <span className="font-iransans text-[9.5px] leading-tight truncate max-w-full">
                  {t(tab.labelFa, tab.labelEn)}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Floating Direct Support Pills (Booking, Telegram, WhatsApp, Direct Call -> all connected via 00989133494512) */}
      <div className="fixed bottom-20 lg:bottom-4 left-3.5 sm:left-5 z-40 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <a
          href="tel:00989133494512"
          onClick={() => navigateTo("/contact")}
          className="font-iransans av-pill-btn text-[10.5px] font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 shadow-xl transition"
        >
          <span>{t("نوبت‌دهی", "Booking")}</span>
        </a>
        <a
          href="https://t.me/+989133494512"
          target="_blank"
          rel="noopener noreferrer"
          className="font-iransans av-card hover:border-white/40 text-zinc-200 hover:text-white text-[10.5px] font-medium px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 shadow-xl transition"
        >
          <span>{t("تلگرام", "Telegram")}</span>
        </a>
        <a
          href="https://wa.me/00989133494512"
          target="_blank"
          rel="noopener noreferrer"
          className="font-iransans av-card hover:border-white/40 text-zinc-200 hover:text-white text-[10.5px] font-medium px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 shadow-xl transition"
        >
          <span>{t("واتساپ", "WhatsApp")}</span>
        </a>
        <a
          href="tel:00989133494512"
          className="font-iransans av-card hover:border-white/40 text-white text-[10.5px] font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full flex items-center gap-1.5 shadow-xl transition"
        >
          <span>{t("تلفن مستقیم: 09133494512", "Direct Call")}</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
