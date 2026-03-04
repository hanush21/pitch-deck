"use client";

export default function DomeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial purple glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(152,129,215,0.35) 0%, rgba(152,129,215,0.08) 50%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />
      {/* Dome / constellation SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="domeGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#9881D7" stopOpacity="1" />
            <stop offset="100%" stopColor="#9881D7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dome arcs */}
        {[100, 200, 300, 400, 500, 600].map((r, i) => (
          <ellipse
            key={i}
            cx="720"
            cy="800"
            rx={r * 2.4}
            ry={r}
            fill="none"
            stroke="url(#domeGrad)"
            strokeWidth="0.8"
          />
        ))}

        {/* Vertical meridian lines */}
        {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n, i) => {
          const angle = n * 18;
          const rad = (angle * Math.PI) / 180;
          const x = 720 + Math.sin(rad) * 1400;
          const y = 800 - Math.abs(Math.cos(rad)) * 800;
          return (
            <line
              key={i}
              x1="720"
              y1="800"
              x2={x}
              y2={y}
              stroke="url(#domeGrad)"
              strokeWidth="0.6"
            />
          );
        })}

        {/* Constellation dots */}
        {[
          [280, 180], [420, 120], [600, 90], [720, 75], [840, 120], [1020, 160], [1140, 220],
          [350, 260], [500, 200], [680, 160], [760, 140], [900, 180], [1080, 250],
          [200, 320], [380, 290], [560, 240], [800, 220], [960, 270], [1200, 300],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill="#9881D7" opacity="0.8" />
        ))}

        {/* Constellation lines between some dots */}
        <g opacity="0.4" stroke="#9881D7" strokeWidth="0.4">
          <line x1="280" y1="180" x2="420" y2="120" />
          <line x1="420" y1="120" x2="600" y2="90" />
          <line x1="600" y1="90" x2="720" y2="75" />
          <line x1="720" y1="75" x2="840" y2="120" />
          <line x1="840" y1="120" x2="1020" y2="160" />
          <line x1="350" y1="260" x2="500" y2="200" />
          <line x1="500" y1="200" x2="680" y2="160" />
          <line x1="680" y1="160" x2="760" y2="140" />
          <line x1="760" y1="140" x2="900" y2="180" />
        </g>
      </svg>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to bottom, transparent, rgb(var(--c-bg)))",
        }}
      />
    </div>
  );
}
