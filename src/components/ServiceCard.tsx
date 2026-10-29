import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  badge?: string;
  footerMeta?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "grid-cell" | "glass-inner" | "glass-card" | "accent-border";
  onClick?: () => void;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  badge,
  footerMeta,
  icon,
  variant = "glass-inner",
  onClick,
  className = "",
}: ServiceCardProps) {
  if (variant === "grid-cell") {
    return (
      <div
        onClick={onClick}
        className={`py-5 flex items-start gap-4 ${
          onClick ? "cursor-pointer group hover:bg-white/[0.02] transition-colors" : ""
        } ${className}`}
      >
        {icon && (
          <div className="text-zinc-300 group-hover:text-white shrink-0 mt-0.5 transition-colors">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white mb-1.5 flex items-center gap-1.5">
            <span>{title}</span>
            {onClick && (
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </h3>
          <p className="text-[11.5px] text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }

  const baseSurface =
    variant === "glass-card"
      ? "av-card rounded-xl p-5"
      : variant === "accent-border"
      ? "av-card-inner rounded-xl p-5 border-s-2 border-s-white/30"
      : "av-card-inner rounded-xl p-5";

  return (
    <div
      onClick={onClick}
      className={`${baseSurface} flex flex-col justify-between space-y-4 ${
        onClick ? "cursor-pointer group hover:border-white/30 transition-all" : ""
      } ${className}`}
    >
      <div className="space-y-2.5">
        {(badge || icon) && (
          <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-zinc-400">
            {badge ? <span>{badge}</span> : <span />}
            {icon && <div className="text-zinc-300 shrink-0">{icon}</div>}
          </div>
        )}
        <h4 className="text-sm font-semibold text-white leading-snug">{title}</h4>
        <p className="text-xs text-zinc-400 leading-[1.8] text-justify">{description}</p>
      </div>

      {footerMeta && (
        <div className="pt-3 border-t border-white/10 text-[9.5px] font-mono uppercase tracking-wider text-zinc-300">
          {footerMeta}
        </div>
      )}
    </div>
  );
}
