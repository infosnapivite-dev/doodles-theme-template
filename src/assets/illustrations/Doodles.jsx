import React from 'react';

/**
 * Organic hand-drawn doodle SVGs matching the sketchbook aesthetic
 */

// Hand-drawn sketchy heart
export function DoodleHeart({
  size = 24,
  color = '#232323',
  fill = 'none',
  strokeWidth = 2,
  className = '',
  style = {}
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`gpu-accelerated ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible', ...style }}
    >
      <path d="M16 28 C14 26, 3 19, 3 11 C3 6.5, 6.5 3, 11 3 C13.5 3, 15 4.5, 16 6 C17 4.5, 18.5 3, 21 3 C25.5 3, 29 6.5, 29 11 C29 19, 18 26, 16 28 Z" />
    </svg>
  );
}

// Hand-drawn sketchy heart with soft watercolor blush underlay & dual sketch contour
export function WatercolorDoodleHeart({
  size = 24,
  strokeColor = '#D66865',
  washColor = 'rgba(214, 104, 101, 0.28)',
  strokeWidth = 2.2,
  doubleStroke = true,
  className = '',
  style = {}
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`gpu-accelerated ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', overflow: 'visible', ...style }}
    >
      {/* Soft watercolor blush underlay */}
      <path
        d="M16 28 C14 26, 3 19, 3 11 C3 6.5, 6.5 3, 11 3 C13.5 3, 15 4.5, 16 6 C17 4.5, 18.5 3, 21 3 C25.5 3, 29 6.5, 29 11 C29 19, 18 26, 16 28 Z"
        fill={washColor}
      />
      {/* Primary hand-drawn contour */}
      <path
        d="M16 28 C14 26, 3 19, 3 11 C3 6.5, 6.5 3, 11 3 C13.5 3, 15 4.5, 16 6 C17 4.5, 18.5 3, 21 3 C25.5 3, 29 6.5, 29 11 C29 19, 18 26, 16 28 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Secondary sketchy interior dash for sketchbook feel */}
      {doubleStroke && (
        <path
          d="M16 25 C14.5 23.5, 6 17.5, 6 11 C6 7.5, 8.5 5.5, 11.5 5.5 C13.5 5.5, 15 6.6, 16 7.8 C17 6.6, 18.5 5.5, 20.5 5.5 C23.5 5.5, 26 7.5, 26 11 C26 17.5, 17.5 23.5, 16 25 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth={Math.max(1, strokeWidth - 1)}
          strokeDasharray="2 3"
          opacity={0.5}
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

// Hand-drawn sketchburst lines (3 outward tick marks)
export function SketchBurst({
  direction = 'left',
  color = '#232323',
  size = 28,
  className = ''
}) {
  const isLeft = direction === 'left';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      className={`gpu-accelerated ${className}`}
      style={{ overflow: 'visible' }}
    >
      {isLeft ? (
        <>
          <path d="M22 15 L6 15" />
          <path d="M20 9 L8 4" />
          <path d="M20 21 L8 26" />
        </>
      ) : (
        <>
          <path d="M8 15 L24 15" />
          <path d="M10 9 L22 4" />
          <path d="M10 21 L22 26" />
        </>
      )}
    </svg>
  );
}

// Hand-drawn location pin doodle
export function DoodlePin({
  size = 20,
  color = '#232323',
  className = ''
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`gpu-accelerated ${className}`}
    >
      <path d="M12 21 C12 21 18 14 18 9 C18 5.686 15.314 3 12 3 C8.686 3 6 5.686 6 9 C6 14 12 21 12 21 Z" />
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

// Hand-drawn right arrow doodle
export function DoodleArrow({
  size = 20,
  color = '#232323',
  className = ''
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`gpu-accelerated ${className}`}
    >
      <path d="M4 12 H19" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}

// Organic wavy underline for headers
export function DoodleUnderline({
  width = 140,
  height = 12,
  color = '#232323',
  className = ''
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 12"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      className={`gpu-accelerated ${className}`}
    >
      <path d="M3 6 Q 35 11, 70 5 T 137 7" />
    </svg>
  );
}

// Horizontal divider line broken in the center with a heart: ─── ♡ ───
export function DoodleDivider({
  className = ''
}) {
  return (
    <div className={`flex items-center justify-center my-6 relative ${className}`} style={{ width: '100%', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
      <svg width="35%" height="10" viewBox="0 0 100 10" fill="none" stroke="#232323" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 5 Q 50 7, 98 5" />
      </svg>
      <DoodleHeart size={16} color="#232323" />
      <svg width="35%" height="10" viewBox="0 0 100 10" fill="none" stroke="#232323" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 5 Q 50 3, 98 5" />
      </svg>
    </div>
  );
}

// Intertwined Hearts with Radiating Sketchbursts for Thank You Finale
export function IntertwinedHearts({
  size = 80,
  color = '#232323',
  className = ''
}) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`gpu-accelerated ${className}`}
      style={{ overflow: 'visible' }}
    >
      {/* Outer Radiating Sketchburst Lines */}
      <path d="M15 45 L5 45" />
      <path d="M18 28 L9 20" />
      <path d="M32 15 L26 6" />
      <path d="M60 8 L60 0" />
      <path d="M88 15 L94 6" />
      <path d="M102 28 L111 20" />
      <path d="M105 45 L115 45" />
      <path d="M100 62 L110 70" />
      <path d="M85 75 L92 84" />
      <path d="M35 75 L28 84" />
      <path d="M20 62 L10 70" />

      {/* Left Heart (Slightly tilted) */}
      <path
        d="M48 68 C43 64, 22 51, 22 36 C22 28, 28 22, 36 22 C41 22, 45 25, 48 28 C51 25, 55 22, 60 22 C68 22, 74 28, 74 36 C74 44, 66 53, 56 61"
        strokeWidth="2.4"
      />

      {/* Right Intertwined Heart */}
      <path
        d="M72 74 C66 70, 48 57, 48 44 C48 37, 53 32, 60 32 C64.5 32, 68.5 34.5, 71 38 C73.5 34.5, 77.5 32, 82 32 C89 32, 95 37, 95 44 C95 56, 79 69, 72 74 Z"
        strokeWidth="2.4"
      />
    </svg>
  );
}

// Sparkle Star doodle
export function SparkleStar({
  size = 18,
  color = '#232323',
  className = ''
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      className={`gpu-accelerated ${className}`}
    >
      <path d="M12 2 Q 12 12, 2 12 Q 12 12, 12 22 Q 12 12, 22 12 Q 12 12, 12 2 Z" />
    </svg>
  );
}
