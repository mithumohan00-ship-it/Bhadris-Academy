import React from "react";

export function DoodleArrow({ className = "", width = 58, height = 40, color = "#2e6fb7", style = {} }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width={width}
      height={height}
      viewBox="0 0 58 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M8 8 C 22 4, 44 10, 48 24 C 50 32, 42 36, 34 34 C 26 32, 24 24, 30 18 C 36 12, 46 14, 50 22"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 22 L50 22 L48 16"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ size = 20, color = "#c6a75e", className = "" }) {
  return (
    <svg
      className={`doodle-sparkle ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0 C 12 7, 17 12, 24 12 C 17 12, 12 17, 12 24 C 12 17, 7 12, 0 12 C 7 12, 12 7, 12 0 Z" />
    </svg>
  );
}

export function DoodleRays({ className = "", width = 48, height = 36, color = "#c6a75e" }) {
  return (
    <svg
      className={`doodle-rays ${className}`}
      width={width}
      height={height}
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 28 L18 16" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M24 24 L24 8" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M40 28 L30 16" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleSpiral({ size = 48, color = "#2e6fb7" }) {
  return (
    <svg
      className="doodle-spiral"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 24 m -2 0 a 2 2 0 1 0 4 0 a 6 6 0 1 0 -12 0 a 10 10 0 1 0 20 0 a 14 14 0 1 0 -28 0 a 18 18 0 1 0 36 0"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleGlobe({ size = 48, color = "#2e6fb7" }) {
  return (
    <svg
      className="doodle-globe"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.5" />
      <ellipse cx="24" cy="24" rx="8" ry="18" stroke={color} strokeWidth="2.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke={color} strokeWidth="2.5" />
      <path d="M9.5 15 C 14 17, 34 17, 38.5 15" stroke={color} strokeWidth="2.5" />
      <path d="M9.5 33 C 14 31, 34 31, 38.5 33" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

export function DoodleTarget({ size = 48, color = "#2e6fb7" }) {
  return (
    <svg
      className="doodle-target"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="11" stroke={color} strokeWidth="2.5" />
      <circle cx="24" cy="24" r="4" stroke={color} strokeWidth="2.5" />
      <path d="M36 12 L24 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
