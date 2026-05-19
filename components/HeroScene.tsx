export function HeroScene() {
  return (
    <svg
      viewBox="0 0 600 520"
      className="w-full h-auto"
      aria-hidden="true"
      style={{ filter: "drop-shadow(8px 8px 0 var(--color-ink))" }}
    >
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a7d7f5" />
          <stop offset="100%" stopColor="#fbf5ea" />
        </linearGradient>
        <linearGradient id="lake" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#2f8fd1" />
          <stop offset="100%" stopColor="#1d5f8f" />
        </linearGradient>
        <pattern id="lakeStripe" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 7 Q 3.5 4 7 7 T 14 7" stroke="#fbf5ea" strokeWidth="1.5" fill="none" opacity="0.55" />
        </pattern>
      </defs>

      {/* Sky panel */}
      <rect x="20" y="20" width="560" height="320" rx="36" fill="url(#sky)" stroke="#131225" strokeWidth="4" />

      {/* Sun */}
      <g style={{ animation: "var(--animate-float-slow)", transformOrigin: "470px 110px" }}>
        <circle cx="470" cy="110" r="48" fill="#ffce3a" stroke="#131225" strokeWidth="4" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 470 + Math.cos(angle) * 58;
          const y1 = 110 + Math.sin(angle) * 58;
          const x2 = 470 + Math.cos(angle) * 74;
          const y2 = 110 + Math.sin(angle) * 74;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#131225"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Clouds */}
      <g fill="#fbf5ea" stroke="#131225" strokeWidth="4">
        <path d="M80 130 q-20 0 -20 20 q0 20 20 20 h70 q22 0 22 -22 q0 -22 -22 -22 q-4 -18 -22 -18 q-18 0 -22 18 q-12 0 -12 12 q0 12 12 12 z" />
        <path d="M260 90 q-16 0 -16 16 q0 16 16 16 h54 q18 0 18 -18 q0 -18 -18 -18 q-4 -14 -18 -14 q-14 0 -18 14 z" transform="translate(0 8)" />
      </g>

      {/* Lake band */}
      <rect x="20" y="260" width="560" height="80" rx="0" fill="url(#lake)" stroke="#131225" strokeWidth="4" />
      <rect x="20" y="260" width="560" height="80" fill="url(#lakeStripe)" />

      {/* Road */}
      <path d="M20 340 L580 340 L580 460 L20 460 Z" fill="#131225" />
      <g stroke="#ffce3a" strokeWidth="6" strokeDasharray="28 22" strokeLinecap="round">
        <line x1="40" y1="400" x2="580" y2="400" />
      </g>

      {/* Car — friendly hatchback */}
      <g style={{ animation: "var(--animate-float)", transformOrigin: "300px 380px" }}>
        <g transform="translate(180 330)">
          <path
            d="M10 70 Q10 38 42 32 L70 18 Q90 8 120 8 L180 8 Q210 8 230 22 L258 42 Q282 46 282 70 L282 92 Q282 106 268 106 L250 106 A22 22 0 0 0 206 106 L98 106 A22 22 0 0 0 54 106 L24 106 Q10 106 10 92 Z"
            fill="#ff6b3d"
            stroke="#131225"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* windows */}
          <path
            d="M70 28 L86 18 Q104 12 124 12 L176 12 Q204 12 222 26 L242 42 L150 42 Z"
            fill="#a7d7f5"
            stroke="#131225"
            strokeWidth="3"
          />
          <path
            d="M148 42 L148 14 L176 14 Q194 14 210 22 L210 42 Z"
            fill="#a7d7f5"
            stroke="#131225"
            strokeWidth="3"
          />
          {/* coach decal */}
          <rect x="118" y="60" width="60" height="22" rx="6" fill="#ffce3a" stroke="#131225" strokeWidth="3" />
          <text
            x="148"
            y="76"
            textAnchor="middle"
            fontFamily="Fraunces, serif"
            fontWeight="900"
            fontSize="14"
            fill="#131225"
          >
            COACH
          </text>
          {/* wheels */}
          <circle cx="76" cy="108" r="20" fill="#131225" />
          <circle cx="76" cy="108" r="9" fill="#fbf5ea" />
          <circle cx="228" cy="108" r="20" fill="#131225" />
          <circle cx="228" cy="108" r="9" fill="#fbf5ea" />
          {/* headlight */}
          <circle cx="272" cy="74" r="6" fill="#fbf5ea" stroke="#131225" strokeWidth="3" />
        </g>
      </g>

      {/* Signpost */}
      <g transform="translate(70 360)">
        <rect x="-3" y="0" width="6" height="80" fill="#131225" />
        <g transform="translate(-44 -2)">
          <path d="M0 0 H80 L94 14 L80 28 H0 Z" fill="#a7e5c9" stroke="#131225" strokeWidth="3" />
          <text x="44" y="20" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="900" fontSize="14" fill="#131225">
            G2 ✓
          </text>
        </g>
      </g>
    </svg>
  );
}
