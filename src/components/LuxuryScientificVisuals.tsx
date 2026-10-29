import React from "react";

/**
 * 1. Abstract Reproductive Science & Cellular Glass Imagery
 * Translucent smoked glass cellular spheres, nucleus refraction & soft platinum rim lighting
 */
export const CellularGlassVisual: React.FC = () => {
  return (
    <div className="relative h-44 w-full rounded-lg bg-[#0d0f13] border border-white/10 overflow-hidden select-none group">
      {/* Soft Studio Luxury Lighting Backdrop */}
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(circle at 65% 38%, rgba(226, 232, 240, 0.22) 0%, rgba(100, 116, 139, 0.12) 38%, rgba(13, 15, 19, 0.98) 75%)",
        }}
      />

      {/* High-Precision SVG Cellular & Reproductive Science Glass Spheres */}
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.04]"
        fill="none"
      >
        <defs>
          <radialGradient id="cellOuter" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#cbd5e1" stopOpacity="0.16" />
            <stop offset="75%" stopColor="#475569" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.32" />
          </radialGradient>

          <radialGradient id="cellNucleus" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#94a3b8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.05" />
          </radialGradient>

          <radialGradient id="cellSecondary" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#64748b" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.25" />
          </radialGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle Scientific Grid Rings */}
        <circle cx="235" cy="100" r="82" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle cx="235" cy="100" r="64" stroke="rgba(255,255,255,0.09)" strokeWidth="0.75" />

        {/* Background Out-of-Focus Cellular Vesicles */}
        <circle cx="115" cy="62" r="24" fill="url(#cellSecondary)" opacity="0.55" />
        <circle cx="115" cy="62" r="24" stroke="rgba(255,255,255,0.18)" strokeWidth="0.75" />
        <circle cx="110" cy="58" r="7" fill="url(#cellNucleus)" opacity="0.6" />

        <circle cx="328" cy="142" r="19" fill="url(#cellSecondary)" opacity="0.5" />
        <circle cx="328" cy="142" r="19" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />

        {/* Primary Reproductive / Blastocyst Glass Sphere */}
        <circle cx="235" cy="98" r="54" fill="url(#cellOuter)" />
        <circle cx="235" cy="98" r="54" stroke="rgba(255,255,255,0.38)" strokeWidth="1.1" />

        {/* Inner Zona Pellucida Glass Membrane */}
        <circle cx="235" cy="98" r="44" stroke="rgba(255,255,255,0.16)" strokeWidth="0.8" />

        {/* Mitotic / Cellular Inner Cluster (Embryonic / Stem Cell Division Aesthetic) */}
        <circle cx="222" cy="88" r="18" fill="url(#cellNucleus)" filter="url(#softGlow)" />
        <circle cx="222" cy="88" r="18" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />

        <circle cx="249" cy="104" r="15" fill="url(#cellNucleus)" />
        <circle cx="249" cy="104" r="15" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />

        <circle cx="226" cy="113" r="11" fill="url(#cellSecondary)" />
        <circle cx="226" cy="113" r="11" stroke="rgba(255,255,255,0.28)" strokeWidth="0.7" />

        {/* Specular Glass Rim Highlights */}
        <path
          d="M 195 66 A 48 48 0 0 1 268 64"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="214" cy="80" r="2.2" fill="#ffffff" opacity="0.9" />
        <circle cx="244" cy="98" r="1.5" fill="#ffffff" opacity="0.8" />

        {/* Micro-Telemetry Callout Line */}
        <line x1="181" y1="98" x2="138" y2="98" stroke="rgba(255,255,255,0.22)" strokeWidth="0.75" />
        <circle cx="181" cy="98" r="2" fill="#ffffff" />
        <text x="28" y="95" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace" letterSpacing="1.5">
          CELLULAR VIABILITY
        </text>
        <text x="28" y="107" fill="rgba(255,255,255,0.45)" fontSize="7.5" fontFamily="monospace" letterSpacing="1">
          GTI • MEDTECH 98.6%
        </text>
      </svg>

      {/* Measured Dark Luxury Vignette Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-black/30 pointer-events-none z-20" />
    </div>
  );
};

/**
 * 2. DNA-Inspired Sculptural Glass & Liquid Titanium Form
 * Architectural double-helix with refractive glass nodes and soft silver studio lighting
 */
export const DnaHelixSculptureVisual: React.FC = () => {
  return (
    <div className="relative h-44 w-full rounded-lg bg-[#0d0f13] border border-white/10 overflow-hidden select-none group">
      {/* Studio Rim Backlight */}
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 52% 48%, rgba(241, 245, 249, 0.2) 0%, rgba(71, 85, 105, 0.1) 45%, rgba(13, 15, 19, 0.98) 80%)",
        }}
      />

      <svg
        viewBox="0 0 400 200"
        className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.04]"
        fill="none"
      >
        <defs>
          <linearGradient id="helixChrome1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="30%" stopColor="rgba(226,232,240,0.65)" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="rgba(148,163,184,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>

          <linearGradient id="helixChrome2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="40%" stopColor="rgba(148,163,184,0.45)" />
            <stop offset="65%" stopColor="rgba(248,250,252,0.85)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>

          <radialGradient id="glassNode" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Base-Pair Molecular Glass Rungs */}
        {[
          { x: 95, y1: 66, y2: 134 },
          { x: 130, y1: 52, y2: 148 },
          { x: 165, y1: 74, y2: 126 },
          { x: 200, y1: 100, y2: 100 },
          { x: 235, y1: 126, y2: 74 },
          { x: 270, y1: 148, y2: 52 },
          { x: 305, y1: 134, y2: 66 },
        ].map((rung, idx) => (
          <g key={idx}>
            <line
              x1={rung.x}
              y1={rung.y1}
              x2={rung.x}
              y2={rung.y2}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <circle cx={rung.x} cy={rung.y1} r="3.5" fill="url(#glassNode)" />
            <circle cx={rung.x} cy={rung.y2} r="3.5" fill="url(#glassNode)" />
          </g>
        ))}

        {/* Primary Sculptural DNA Wave 1 */}
        <path
          d="M 45 115 C 95 30, 155 30, 200 100 C 245 170, 305 170, 355 85"
          stroke="url(#helixChrome1)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Secondary Sculptural DNA Wave 2 */}
        <path
          d="M 45 85 C 95 170, 155 170, 200 100 C 245 30, 305 30, 355 115"
          stroke="url(#helixChrome2)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Glass Prismatic Focal Ring */}
        <circle cx="200" cy="100" r="34" stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" fill="rgba(255,255,255,0.03)" />
        <circle cx="200" cy="100" r="5" fill="#ffffff" />

        {/* Editorial Scientific Annotation */}
        <text x="24" y="32" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace" letterSpacing="1.8">
          GENOMIC & CLINICAL ARCHITECTURE
        </text>
        <text x="285" y="180" fill="rgba(255,255,255,0.45)" fontSize="7.5" fontFamily="monospace" letterSpacing="1.4">
          EB-1A • NIW
        </text>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-black/30 pointer-events-none z-20" />
    </div>
  );
};

/**
 * 3. Hormonal & Endocrine Network Visualization
 * Luminous silver molecular filaments, receptor glass nodes, and advanced healthcare aesthetics
 */
export const HormonalNetworkVisual: React.FC = () => {
  return (
    <div className="relative h-44 w-full rounded-lg bg-[#0d0f13] border border-white/10 overflow-hidden select-none group">
      {/* Ambient Platinum Glow */}
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(226, 232, 240, 0.18) 0%, rgba(51, 65, 85, 0.12) 48%, rgba(13, 15, 19, 0.98) 78%)",
        }}
      />

      <svg
        viewBox="0 0 400 200"
        className="w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-[1.04]"
        fill="none"
      >
        <defs>
          <radialGradient id="hormoneNode" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#cbd5e1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Hormonal Signaling Filaments & Hexagonal Endocrine Ring */}
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.9">
          <line x1="135" y1="68" x2="195" y2="54" />
          <line x1="195" y1="54" x2="255" y2="82" />
          <line x1="255" y1="82" x2="242" y2="138" />
          <line x1="242" y1="138" x2="178" y2="146" />
          <line x1="178" y1="146" x2="135" y2="112" />
          <line x1="135" y1="112" x2="135" y2="68" />
          {/* Internal cross-pathways */}
          <line x1="135" y1="68" x2="255" y2="82" stroke="rgba(255,255,255,0.12)" />
          <line x1="195" y1="54" x2="178" y2="146" stroke="rgba(255,255,255,0.12)" />
          <line x1="255" y1="82" x2="325" y2="64" />
          <line x1="255" y1="82" x2="318" y2="128" />
          <line x1="135" y1="112" x2="78" y2="134" />
          <line x1="135" y1="68" x2="82" y2="56" />
        </g>

        {/* Scientific Glass Receptor Nodes */}
        {[
          { cx: 195, cy: 54, r: 9 },
          { cx: 255, cy: 82, r: 14 },
          { cx: 242, cy: 138, r: 8 },
          { cx: 178, cy: 146, r: 11 },
          { cx: 135, cy: 112, r: 10 },
          { cx: 135, cy: 68, r: 8 },
          { cx: 325, cy: 64, r: 6 },
          { cx: 318, cy: 128, r: 7 },
          { cx: 78, cy: 134, r: 6 },
          { cx: 82, cy: 56, r: 5 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r={node.r * 1.65} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
            <circle cx={node.cx} cy={node.cy} r={node.r} fill="url(#hormoneNode)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          </g>
        ))}

        {/* Editorial Label */}
        <text x="24" y="32" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="monospace" letterSpacing="1.6">
          ENDOCRINE & CLINICAL NETWORK
        </text>
        <text x="24" y="180" fill="rgba(255,255,255,0.45)" fontSize="7.5" fontFamily="monospace" letterSpacing="1.3">
          AMC • UK ROYAL SOCIETY • AHPRA
        </text>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-[#14171d] via-transparent to-black/30 pointer-events-none z-20" />
    </div>
  );
};
