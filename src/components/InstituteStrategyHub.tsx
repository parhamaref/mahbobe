import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Camera,
  Code2,
  Compass,
  Search,
  Sparkles,
  Archive,
} from "lucide-react";
import {
  BLOG_TOPICS_100,
  INSTITUTE_SITEMAP,
  LUXURY_AI_IMAGE_PROMPTS,
  ALL_FERTILITY_PROGRAMS,
} from "../fertilityInstituteData";

interface InstituteStrategyHubProps {
  initialTab?: "blog" | "sitemap";
  onNavigate: (path: string) => void;
}

export default function InstituteStrategyHub({
  initialTab = "blog",
  onNavigate,
}: InstituteStrategyHubProps) {
  const { dir, t } = useLanguage();
  const [activeView, setActiveView] = useState<"blog" | "sitemap">(initialTab);
  const [selectedClusterId, setSelectedClusterId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredClusters = BLOG_TOPICS_100.map((cluster) => ({
    ...cluster,
    topics: cluster.topics.filter((tp) => {
      const matchesCluster =
        selectedClusterId === "all" || cluster.id === selectedClusterId;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        tp.titleFa.toLowerCase().includes(q) ||
        tp.titleEn.toLowerCase().includes(q) ||
        String(tp.number).includes(q);
      return matchesCluster && matchesQuery;
    }),
  })).filter((c) => c.topics.length > 0);

  return (
    <div className="space-y-10 pb-12" dir={dir}>
      {/* Top Bar */}
      <div className="av-card rounded-xl p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate("/")}
            className="px-3.5 py-2 rounded-lg border border-white/15 hover:border-white text-[10.5px] font-mono uppercase tracking-wider text-zinc-200 hover:text-white flex items-center gap-2 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("صفحه اصلی موسسه", "INSTITUTE HOME")}</span>
          </button>
          <span className="text-[10.5px] font-mono text-zinc-400">
            {activeView === "blog"
              ? "100 FERTILITY BLOG TOPICS & CONTENT STRATEGY"
              : "SITEMAP, SEO ARCHITECTURE & AI IMAGE PROMPTS"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveView("blog");
              onNavigate("/blog-strategy");
            }}
            className={`px-4 py-2 rounded-lg text-[10.5px] font-mono uppercase tracking-wider transition cursor-pointer ${
              activeView === "blog"
                ? "bg-white text-black font-bold"
                : "av-card-inner text-zinc-300 hover:text-white"
            }`}
          >
            {t("۱۰۰ موضوع وبلاگ (Blog Strategy)", "100 BLOG TOPICS")}
          </button>
          <button
            onClick={() => {
              setActiveView("sitemap");
              onNavigate("/sitemap");
            }}
            className={`px-4 py-2 rounded-lg text-[10.5px] font-mono uppercase tracking-wider transition cursor-pointer ${
              activeView === "sitemap"
                ? "bg-white text-black font-bold"
                : "av-card-inner text-zinc-300 hover:text-white"
            }`}
          >
            {t("نقشه سایت، سئو و پرامپت‌ها (Sitemap & SEO)", "SITEMAP & SEO")}
          </button>
        </div>
      </div>

      {activeView === "blog" ? (
        /* ===============================================================
           VIEW 01: 100 BLOG TOPIC IDEAS & EDITORIAL STRATEGY
        =============================================================== */
        <div className="space-y-8">
          <div className="av-card rounded-2xl p-6 sm:p-9 space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
                  EDITORIAL & TOPICAL AUTHORITY ENGINE • 100 TOPICS
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {t(
                    "استراتژی محتوا و ۱۰۰ موضوع تخصصی وبلاگ علمی باروری و IVF",
                    "100 Scientific Blog Topics: IVF, PRP, RIF, PCOS & Reproductive Physiology"
                  )}
                </h1>
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-zinc-400 absolute top-1/2 -translate-y-1/2 start-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(
                    "جستجو در میان ۱۰۰ موضوع (مثلا PRP، DFI، PCOS)...",
                    "Search 100 topics (e.g. PRP, DFI, PCOS)..."
                  )}
                  className="w-full av-card-inner rounded-xl py-2.5 ps-10 pe-4 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedClusterId("all")}
                className={`px-3 py-1.5 rounded-lg text-[10.5px] font-mono transition cursor-pointer ${
                  selectedClusterId === "all"
                    ? "bg-white text-black font-bold"
                    : "av-card-inner text-zinc-400 hover:text-white"
                }`}
              >
                {t("همه ۱۰۰ موضوع (All 100)", "ALL 100 TOPICS")}
              </button>
              {BLOG_TOPICS_100.map((cl) => (
                <button
                  key={cl.id}
                  onClick={() => setSelectedClusterId(cl.id)}
                  className={`px-3 py-1.5 rounded-lg text-[10.5px] font-mono transition cursor-pointer ${
                    selectedClusterId === cl.id
                      ? "bg-white text-black font-bold"
                      : "av-card-inner text-zinc-400 hover:text-white"
                  }`}
                >
                  {t(
                    cl.categoryFa.split("(")[0].trim(),
                    cl.categoryEn.split("(")[0].trim()
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Clusters List */}
          <div className="space-y-6">
            {filteredClusters.map((cluster) => (
              <section
                key={cluster.id}
                className="av-card rounded-2xl p-6 sm:p-8 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-zinc-300 shrink-0" />
                    <h2 className="text-base sm:text-lg font-bold text-white">
                      {t(cluster.categoryFa, cluster.categoryEn)}
                    </h2>
                  </div>
                  <button
                    onClick={() => onNavigate(cluster.targetPillarUrl)}
                    className="text-[10.5px] font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
                  >
                    <span>
                      {t("صفحه ستون مرتبط:", "PILLAR PAGE:")}{" "}
                      <strong className="text-white">
                        {cluster.targetPillarUrl}
                      </strong>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cluster.topics.map((topic) => (
                    <div
                      key={topic.number}
                      onClick={() => onNavigate(cluster.targetPillarUrl)}
                      className="av-card-inner rounded-xl p-4 border border-white/10 hover:border-white/30 transition cursor-pointer flex flex-col justify-between gap-2.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                          TOPIC #{String(topic.number).padStart(3, "0")}
                        </span>
                        <span className="text-[9.5px] font-mono uppercase tracking-wider text-zinc-400">
                          {topic.searchIntent}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-[13px] font-semibold text-white leading-relaxed">
                        {t(topic.titleFa, topic.titleEn)}
                      </h3>
                      <p className="text-[10.5px] text-zinc-400 font-mono truncate">
                        {t(topic.titleEn, topic.titleFa)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      ) : (
        /* ===============================================================
           VIEW 02: INTERACTIVE SITEMAP, SEO STRATEGY & AI IMAGE PROMPTS
        =============================================================== */
        <div className="space-y-8">
          {/* 1. Complete Interactive Sitemap */}
          <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
                  DELIVERABLE 01 & 10 • COMPLETE WEBSITE SITEMAP & INTERNAL LINKING
                </span>
                <h1 className="text-xl sm:text-3xl font-bold text-white">
                  {t(
                    "نقشه جامع صفحات وب‌سایت (Interactive Sitemap)",
                    "Complete Interactive Sitemap & URL Architecture"
                  )}
                </h1>
              </div>
              <Compass className="w-6 h-6 text-zinc-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INSTITUTE_SITEMAP.map((node) => {
                const isLegacy = node.path === "/legacy-website";
                return (
                  <button
                    key={node.path}
                    onClick={() => onNavigate(node.path)}
                    className={`av-card-inner rounded-xl p-5 text-start border transition flex flex-col justify-between gap-4 cursor-pointer ${
                      isLegacy
                        ? "border-white/30 bg-white/[0.04]"
                        : "border-white/10 hover:border-white/35"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-zinc-200">
                          {node.path}
                        </span>
                        {isLegacy ? (
                          <Archive className="w-4 h-4 text-white" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                        )}
                      </div>
                      <span className="text-[9.5px] font-mono uppercase tracking-wider text-zinc-400 block">
                        {node.category}
                      </span>
                      <h3 className="text-sm font-bold text-white">
                        {t(node.titleFa, node.titleEn)}
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {t(node.descFa, node.descEn)}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 pt-2 border-t border-white/10 block">
                      {t("ورود مستقیم به صفحه ↗", "OPEN PAGE DIRECTLY ↗")}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 2. SEO Meta Titles, Descriptions & Schema Architecture */}
          <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
                  DELIVERABLE 08 • TECHNICAL SEO, META TAGS & SCHEMA.ORG JSON-LD
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {t(
                    "معماری سئو، متاتگ‌ها و داده‌های ساختاریافته (Schema.org)",
                    "SEO Strategy: Meta Titles, Descriptions & Medical Schema"
                  )}
                </h2>
              </div>
              <Code2 className="w-6 h-6 text-zinc-300" />
            </div>

            <div className="space-y-3.5">
              {ALL_FERTILITY_PROGRAMS.map((prog) => (
                <div
                  key={prog.slug}
                  className="av-card-inner rounded-xl p-5 border border-white/10 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-white">
                      URL: {prog.slug}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.seo.keywords.slice(0, 4).map((kw) => (
                        <span
                          key={kw}
                          className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-zinc-100">
                    <strong className="text-zinc-400 font-mono">Title: </strong>
                    {t(prog.seo.metaTitleFa, prog.seo.metaTitleEn)}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <strong className="text-zinc-400 font-mono">
                      Description:{" "}
                    </strong>
                    {t(prog.seo.metaDescriptionFa, prog.seo.metaDescriptionEn)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Luxury Cinematic Medical AI Image Prompts */}
          <section className="av-card rounded-2xl p-6 sm:p-9 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-400 block mb-1">
                  DELIVERABLE 09 • LUXURY BIOMEDICAL VISUAL DIRECTION
                </span>
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {t(
                    "پرامپت‌های تولید تصاویر لوکس علمی و پزشکی (AI Image Prompts)",
                    "Section-by-Section Luxury Medical AI Image Prompts"
                  )}
                </h2>
              </div>
              <Camera className="w-6 h-6 text-zinc-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LUXURY_AI_IMAGE_PROMPTS.map((item, idx) => (
                <div
                  key={idx}
                  className="av-card-inner rounded-xl p-5 border border-white/10 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                    <h3 className="text-xs font-bold text-white">
                      {item.section}
                    </h3>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-300 leading-relaxed bg-black/30 p-3 rounded-lg border border-white/5">
                    "{item.prompt}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
