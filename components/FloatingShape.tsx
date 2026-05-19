type Variant = "sun" | "ripple" | "star" | "sign" | "blob";

export function FloatingShape({
  variant,
  className = "",
  rotate = 0,
  size = 80,
}: {
  variant: Variant;
  className?: string;
  rotate?: number;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    style: { animation: "var(--animate-float)", ["--r" as string]: `${rotate}deg` } as React.CSSProperties,
    className: `absolute ${className}`,
    "aria-hidden": true,
  };

  switch (variant) {
    case "sun":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <circle cx="50" cy="50" r="22" fill="#ffce3a" stroke="#131225" strokeWidth="4" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={50 + Math.cos(a) * 28}
                y1={50 + Math.sin(a) * 28}
                x2={50 + Math.cos(a) * 40}
                y2={50 + Math.sin(a) * 40}
                stroke="#131225"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      );
    case "ripple":
      return (
        <svg viewBox="0 0 120 60" {...common} width={size * 1.5} height={size * 0.75}>
          <path d="M5 30 Q 25 10 45 30 T 85 30 T 115 30" stroke="#2f8fd1" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M5 50 Q 25 32 45 50 T 85 50 T 115 50" stroke="#1d5f8f" strokeWidth="5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <path
            d="M50 6 L60 38 L94 40 L66 60 L76 92 L50 72 L24 92 L34 60 L6 40 L40 38 Z"
            fill="#ff6b3d"
            stroke="#131225"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "sign":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <path d="M50 6 L94 50 L50 94 L6 50 Z" fill="#a7e5c9" stroke="#131225" strokeWidth="4" strokeLinejoin="round" />
          <text x="50" y="60" textAnchor="middle" fontFamily="Fraunces, serif" fontWeight="900" fontSize="32" fill="#131225">
            ★
          </text>
        </svg>
      );
    case "blob":
      return (
        <svg viewBox="0 0 200 200" {...common}>
          <path
            d="M44 28 Q 102 8 144 38 Q 188 70 170 124 Q 152 178 96 178 Q 36 178 22 124 Q 6 78 44 28 Z"
            fill="#a7e5c9"
            stroke="#131225"
            strokeWidth="4"
          />
        </svg>
      );
  }
}
