"use client";

import { useState } from "react";

interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = "" }: LogoIconProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (!imgFailed) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}
      >
        <img
          src="/images/logo.png"
          alt="Heradome"
          width={size}
          height={size}
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // SVG fallback while logo.png is not yet placed
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HeraDome logo"
    >
      <circle cx="50" cy="50" r="47" stroke="#9881D7" strokeWidth="5" fill="#160D2A" />
      <text
        x="50"
        y="67"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="48"
        fontWeight="800"
        fill="#9881D7"
      >
        H
      </text>
    </svg>
  );
}
