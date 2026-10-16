import React from 'react';
import { DoodleHeart } from './Doodles';

/**
 * Hand-drawn schedule doodle icons:
 * 1. WeddingRingsIcon (15:00 Ceremony)
 * 2. ChampagneFlutesIcon (16:00 Drinks)
 * 3. DinnerPlateIcon (18:00 Dinner)
 * 4. DiscoBallIcon (20:00 Let's Dance)
 * 5. ScheduleBracket (Center divider bracket with middle heart)
 */

// 1. Interlocking Wedding Rings (Ceremony)
export function WeddingRingsIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Sparkle burst ticks above diamond */}
      <path d="M19 5 L17 1" strokeWidth="1.6" />
      <path d="M22 4 L22 0" strokeWidth="1.6" />
      <path d="M25 5 L27 1" strokeWidth="1.6" />

      {/* Diamond Gem on left ring */}
      <polygon points="19,10 22,6 25,10 22,14" strokeWidth="1.6" fill="#FDFBF7" />

      {/* Left Ring */}
      <circle cx="21" cy="22" r="11" strokeWidth="2.2" />
      {/* Ring inner curve */}
      <path d="M14 20 C15 16, 20 15, 23 16" strokeWidth="1.2" strokeDasharray="2 2" />

      {/* Right Interlocking Ring */}
      <circle cx="29" cy="25" r="10" strokeWidth="2.2" />
      <path d="M25 24 C28 22, 33 23, 35 26" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

// 2. Clinking Champagne Flutes (Drinks)
export function ChampagneFlutesIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Clinking Sparkle Dots / Bubbles */}
      <circle cx="21" cy="5" r="1.5" fill="#232323" stroke="none" />
      <circle cx="25" cy="7" r="1" fill="#232323" stroke="none" />
      <circle cx="18" cy="9" r="1.2" fill="#232323" stroke="none" />
      <circle cx="23" cy="2" r="0.8" fill="#232323" stroke="none" />

      {/* Left Tilted Flute */}
      <g transform="rotate(12 18 24)">
        {/* Bowl */}
        <path d="M14 11 C14 11, 13 22, 17 24 C21 22, 20 11, 20 11 Z" strokeWidth="2" fill="#FDFBF7" />
        {/* Champagne liquid line */}
        <path d="M15 16 Q 17 17, 19 16" strokeWidth="1.2" />
        {/* Stem */}
        <line x1="17" y1="24" x2="17" y2="35" strokeWidth="2" />
        {/* Base */}
        <path d="M12 36 Q 17 35, 22 36" strokeWidth="2.2" />
      </g>

      {/* Right Tilted Flute */}
      <g transform="rotate(-12 26 24)">
        {/* Bowl */}
        <path d="M24 11 C24 11, 23 22, 27 24 C31 22, 30 11, 30 11 Z" strokeWidth="2" fill="#FDFBF7" />
        {/* Liquid line */}
        <path d="M25 16 Q 27 17, 29 16" strokeWidth="1.2" />
        {/* Stem */}
        <line x1="27" y1="24" x2="27" y2="35" strokeWidth="2" />
        {/* Base */}
        <path d="M22 36 Q 27 35, 32 36" strokeWidth="2.2" />
      </g>
    </svg>
  );
}

// 3. Dinner Plate with Cutlery (|O|) (Dinner)
export function DinnerPlateIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
    >
      {/* Left: Fork */}
      <path d="M9 10 L9 18 C9 21, 13 21, 13 18 L13 10" strokeWidth="1.8" />
      <line x1="11" y1="10" x2="11" y2="18" strokeWidth="1.4" />
      <line x1="11" y1="21" x2="11" y2="34" strokeWidth="2" />

      {/* Center: Circular Plate */}
      <circle cx="22" cy="22" r="11" strokeWidth="2.2" fill="#FDFBF7" />
      <circle cx="22" cy="22" r="7.5" strokeWidth="1.2" strokeDasharray="3 2" />

      {/* Right: Knife */}
      <path d="M33 10 C31 13, 31 18, 33 21 L33 34" strokeWidth="2" />
      <path d="M33 10 C34.5 12, 35 16, 33 21" strokeWidth="1.6" />
    </svg>
  );
}

// 4. Disco Ball with Sparkles (Let's Dance)
export function DiscoBallIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Hanging Chain */}
      <line x1="22" y1="0" x2="22" y2="10" strokeWidth="1.6" strokeDasharray="2 2" />

      {/* Sparkle 1: Top-Left */}
      <path d="M10 7 Q 10 11, 6 11 Q 10 11, 10 15 Q 10 11, 14 11 Q 10 11, 10 7 Z" strokeWidth="1.2" fill="#FDFBF7" />

      {/* Sparkle 2: Bottom-Right */}
      <path d="M34 29 Q 34 32, 31 32 Q 34 32, 34 35 Q 34 32, 37 32 Q 34 32, 34 29 Z" strokeWidth="1.2" fill="#FDFBF7" />

      {/* Sparkle 3: Bottom-Left small */}
      <path d="M8 32 L11 32 M9.5 30.5 L9.5 33.5" strokeWidth="1.4" />

      {/* Disco Ball Globe */}
      <circle cx="22" cy="22" r="11.5" strokeWidth="2.2" fill="#FDFBF7" />

      {/* Mirror Grid Lines */}
      {/* Horizontal latitude lines */}
      <path d="M12 17 Q 22 19, 32 17" strokeWidth="1.2" />
      <path d="M10.8 22 Q 22 24, 33.2 22" strokeWidth="1.2" />
      <path d="M12 27 Q 22 29, 32 27" strokeWidth="1.2" />

      {/* Vertical longitude lines */}
      <path d="M17 12 Q 15 22, 17 32" strokeWidth="1.2" />
      <path d="M22 10.5 Q 22 22, 22 33.5" strokeWidth="1.2" />
      <path d="M27 12 Q 29 22, 27 32" strokeWidth="1.2" />
    </svg>
  );
}

// 5. Haldi Ceremony (Traditional Brass Urli with Marigold Flowers & Turmeric Paste)
export function HaldiBowlIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Radiant blessings sparkles above haldi */}
      <path d="M22 4 L22 1 M15 7 L12 4 M29 7 L32 4" strokeWidth="1.6" />
      <circle cx="22" cy="7" r="1.3" fill="#D66865" stroke="none" />

      {/* Turmeric Paste Mound */}
      <path
        d="M13 22 C13 14, 31 14, 31 22"
        fill="#FAF2D2"
        stroke={color}
        strokeWidth="1.8"
      />
      {/* Turmeric swirl detail */}
      <path d="M18 19 Q 22 17, 26 19" strokeWidth="1.2" stroke="#D66865" />

      {/* Traditional Brass Urli / Haldi Bowl Rim */}
      <ellipse cx="22" cy="22" rx="14" ry="4.5" strokeWidth="2.2" fill="#FDFBF7" />

      {/* Rounded Bowl Body */}
      <path
        d="M8 22 C8 32, 36 32, 36 22"
        strokeWidth="2.2"
        fill="#FDFBF7"
      />
      {/* Bowl Base Ring */}
      <path d="M15 32 Q 22 34, 29 32" strokeWidth="2" />

      {/* Left Marigold Flower (Genda Phool) */}
      <g transform="translate(6, 17)">
        <circle cx="3" cy="3" r="3.5" fill="#FAF2D2" stroke={color} strokeWidth="1.4" />
        <path d="M1 3 C1 1.5, 5 1.5, 5 3 C5 4.5, 1 4.5, 1 3" strokeWidth="1" stroke="#D66865" />
      </g>

      {/* Right Marigold Flower */}
      <g transform="translate(32, 17)">
        <circle cx="3" cy="3" r="3.5" fill="#FAF2D2" stroke={color} strokeWidth="1.4" />
        <path d="M1 3 C1 1.5, 5 1.5, 5 3 C5 4.5, 1 4.5, 1 3" strokeWidth="1" stroke="#D66865" />
      </g>
    </svg>
  );
}

// 6. Mehendi Ceremony (Hand Adorned with Traditional Henna / Mehendi Art)
export function MehendiHandIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Radiant sparkles above fingers */}
      <path d="M7 11 L10 11 M8.5 9.5 L8.5 12.5" stroke="#D66865" strokeWidth="1.4" />
      <path d="M35 8 L38 8 M36.5 6.5 L36.5 9.5" stroke="#D66865" strokeWidth="1.4" />

      {/* Hand Silhouette with Natural Contours */}
      <path
        d="M 16.5 39 
           C 15.5 34, 12.5 29, 9.5 25.5 
           C 7.8 23.5, 8.5 20, 11 19.5 
           C 13.2 19, 14.8 21.8, 16 24.5 
           L 16.5 11 
           C 16.5 8.5, 19.8 8.5, 20.2 11 
           L 20.8 15.5 
           L 21.5 7.5 
           C 21.5 5, 24.8 5, 25.2 7.5 
           L 25.8 15.5 
           L 26.5 9.5 
           C 26.5 7, 29.8 7, 30.2 9.5 
           L 30.8 17 
           L 31.5 14 
           C 31.5 12, 34.2 12, 34.8 14.5 
           C 35.2 17, 34 23, 33 28 
           C 31.8 33, 29 36.5, 27.5 39 
           Z"
        fill="#FDFBF7"
        stroke={color}
        strokeWidth="2"
      />

      {/* Traditional Henna Dip Caps on Fingertips */}
      <path d="M 16.5 12 Q 18.2 13.5, 20 12" strokeWidth="1.2" stroke="#D66865" />
      <path d="M 21.5 8.5 Q 23.2 10, 25 8.5" strokeWidth="1.2" stroke="#D66865" />
      <path d="M 26.5 10.5 Q 28.2 12, 30 10.5" strokeWidth="1.2" stroke="#D66865" />
      <path d="M 31.5 15 Q 33 16, 34.5 15" strokeWidth="1.2" stroke="#D66865" />
      <path d="M 9.5 21.5 Q 11 23, 12.5 21" strokeWidth="1.2" stroke="#D66865" />

      {/* Finger Henna Dots & Accents */}
      <circle cx="18.5" cy="16" r="0.9" fill="#D66865" stroke="none" />
      <circle cx="23.5" cy="13" r="0.9" fill="#D66865" stroke="none" />
      <circle cx="28.5" cy="14.5" r="0.9" fill="#D66865" stroke="none" />

      {/* Center Palm: Intricate Auspicious Henna Mandala Flower */}
      <circle cx="23.5" cy="27" r="4.2" strokeWidth="1.4" stroke={color} fill="#FAF2D2" />
      <circle cx="23.5" cy="27" r="1.6" fill="#D66865" stroke="none" />
      {/* 4 Cardinal Mandala Petals */}
      <path d="M 23.5 21.8 Q 22 22.8, 23.5 22.8 Q 25 22.8, 23.5 21.8 Z" fill="#D66865" stroke="#D66865" strokeWidth="0.8" />
      <path d="M 23.5 32.2 Q 22 31.2, 23.5 31.2 Q 25 31.2, 23.5 32.2 Z" fill="#D66865" stroke="#D66865" strokeWidth="0.8" />
      <path d="M 18.3 27 Q 19.3 25.5, 19.3 27 Q 19.3 28.5, 18.3 27 Z" fill="#D66865" stroke="#D66865" strokeWidth="0.8" />
      <path d="M 28.7 27 Q 27.7 25.5, 27.7 27 Q 27.7 28.5, 28.7 27 Z" fill="#D66865" stroke="#D66865" strokeWidth="0.8" />

      {/* Outer Mandala Ring of Henna Ticks */}
      <circle cx="23.5" cy="27" r="6" stroke="#D66865" strokeWidth="0.9" strokeDasharray="1.5 2" />

      {/* Wrist Mehendi Bangles / Bracelet */}
      <path d="M 16.5 35 Q 22 37, 27.5 35" strokeWidth="1.5" stroke={color} />
      <path d="M 17 37.5 Q 22 39.5, 27 37.5" strokeWidth="1.3" stroke="#D66865" strokeDasharray="2 2" />
    </svg>
  );
}

// 7. Sangeet & Dance (Traditional Indian Dholak Drum with Drumsticks & Music Notes)
export function DholakIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Musical Melody Notes Flying */}
      <path d="M30 4 L30 10 M36 2 L36 8 M30 5 L36 3" strokeWidth="1.5" stroke="#D66865" />
      <circle cx="30" cy="10" r="2" fill="#D66865" stroke="none" />
      <circle cx="36" cy="8" r="1.8" fill="#D66865" stroke="none" />
      <path d="M7 6 Q 9 4, 11 7" strokeWidth="1.4" stroke="#D66865" />

      {/* Dhol Drum Barrel (Angled slightly) */}
      <g transform="rotate(-8 22 24)">
        {/* Barrel Body */}
        <path
          d="M10 15 Q 22 11, 34 15 L34 31 Q 22 35, 10 31 Z"
          strokeWidth="2.2"
          fill="#FDFBF7"
        />

        {/* Left Drum Head (Bass side) */}
        <ellipse cx="10" cy="23" rx="3.5" ry="8" strokeWidth="2.2" fill="#FAF6EE" />
        <ellipse cx="10" cy="23" rx="1.8" ry="4" strokeWidth="1.2" fill="#232323" />

        {/* Right Drum Head (Treble side) */}
        <ellipse cx="34" cy="23" rx="3.5" ry="8" strokeWidth="2.2" fill="#FAF6EE" />
        <circle cx="34" cy="23" r="1.8" fill="#D66865" stroke="none" />

        {/* Criss-Cross Tension Ropes on Barrel */}
        <path d="M10 16 L22 33 L34 16" strokeWidth="1.3" />
        <path d="M10 30 L22 13 L34 30" strokeWidth="1.3" />
        {/* Center Leather Ring Band */}
        <path d="M22 13 Q 23 23, 22 33" strokeWidth="1.6" stroke="#D66865" />
      </g>

      {/* Curved Drumstick (Daga / Tilli) */}
      <path d="M6 34 Q 9 39, 13 36" strokeWidth="2.2" stroke="#232323" />
    </svg>
  );
}

// 8. Shaadi / Sacred Phere (Havan Kund with Holy Agni Flames & Garland)
export function MandapFireIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Sacred Sparkle Blessings */}
      <path d="M22 2 L22 0 M14 5 L12 2 M30 5 L32 2" strokeWidth="1.5" stroke="#D66865" />

      {/* Holy Fire Flames (Agni Kund) */}
      {/* Outer Flame */}
      <path
        d="M22 5 C16 11, 15 17, 19 22 C20 18, 22 15, 23 15 C24 18, 27 16, 26 13 C29 17, 28 21, 25 22 C29 20, 28 14, 22 5 Z"
        fill="#FAF2D2"
        stroke="#D66865"
        strokeWidth="1.8"
      />
      {/* Inner Heart Flame */}
      <path
        d="M22 12 C20 16, 20 19, 22 22 C24 19, 24 16, 22 12 Z"
        fill="rgba(214, 104, 101, 0.45)"
        stroke="#D66865"
        strokeWidth="1.2"
      />

      {/* Sacred Havan Kund (Stepped Copper Altar) */}
      {/* Top Rim */}
      <polygon points="10,22 34,22 32,26 12,26" strokeWidth="2.2" fill="#FDFBF7" />
      {/* Middle Step */}
      <polygon points="12,26 32,26 29,31 15,31" strokeWidth="2" fill="#FAF6EE" />
      {/* Bottom Step Base */}
      <polygon points="14,31 30,31 28,35 16,35" strokeWidth="2" fill="#FDFBF7" />
      <line x1="12" y1="36" x2="32" y2="36" strokeWidth="2.4" />

      {/* Draped Marigold Garland Accent on Altar */}
      <path d="M12 26 Q 22 30, 32 26" strokeWidth="1.6" stroke="#D66865" strokeDasharray="2 3" />
      <circle cx="22" cy="28" r="1.5" fill="#D66865" stroke="none" />
    </svg>
  );
}

// 9. Baraat (Royal Groom Safa / Turban with Kalgi Feathers)
export function BaraatIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Royal Kalgi (Feather Plume) */}
      <path d="M22 4 C19 8, 19 13, 22 16 C25 13, 25 8, 22 4 Z" fill="#FAF2D2" stroke="#D66865" strokeWidth="1.6" />
      <circle cx="22" cy="16" r="2.2" fill="#D66865" stroke="none" />
      {/* Sparkles */}
      <path d="M16 6 L14 4 M28 6 L30 4" strokeWidth="1.5" />

      {/* Royal Groom Turban (Safa / Pagdi) */}
      <path
        d="M10 24 C10 17, 16 14, 22 15 C28 14, 34 17, 34 24 C34 29, 28 32, 22 32 C16 32, 10 29, 10 24 Z"
        strokeWidth="2.2"
        fill="#FDFBF7"
      />
      {/* Fold swatches */}
      <path d="M11 21 Q 22 25, 33 21" strokeWidth="1.8" stroke="#D66865" />
      <path d="M13 26 Q 22 30, 31 26" strokeWidth="1.4" />

      {/* Flowing Turban Tail (Lappet) */}
      <path d="M30 26 C33 28, 36 33, 33 39 C31 38, 31 32, 30 29" strokeWidth="1.8" fill="#FAF2D2" stroke="#D66865" />
    </svg>
  );
}

// 10. Shahi Daawat (Royal Dinner Feast Thali & Delicacies)
export function RoyalFeastIcon({ size = 36, color = '#232323' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="gpu-accelerated"
      style={{ overflow: 'visible' }}
    >
      {/* Sparkles */}
      <circle cx="22" cy="6" r="1.5" fill="#D66865" stroke="none" />
      <path d="M19 4 L22 1 L25 4" strokeWidth="1.4" />

      {/* Royal Thali Plate */}
      <ellipse cx="22" cy="24" rx="15" ry="11" strokeWidth="2.2" fill="#FDFBF7" />
      <ellipse cx="22" cy="24" rx="12" ry="8.5" strokeWidth="1.2" strokeDasharray="3 2" />

      {/* Katori Bowls inside Thali */}
      <circle cx="16" cy="21" r="3.2" strokeWidth="1.4" fill="#FAF2D2" />
      <circle cx="23" cy="18" r="3" strokeWidth="1.4" fill="#FAF6EE" />
      <circle cx="29" cy="22" r="3.2" strokeWidth="1.4" fill="#FAF2D2" />

      {/* Center Indian Naan / Roti */}
      <ellipse cx="22" cy="27" rx="5" ry="3.5" strokeWidth="1.4" stroke="#D66865" />
    </svg>
  );
}

// Hand-Drawn Vertical Bracket with Center Heart
export function ScheduleBracket({ height = 240, color = '#232323' }) {
  return (
    <div
      className="schedule-bracket-container flex flex-col items-center justify-between gpu-accelerated"
      style={{
        height: `${height}px`,
        width: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      {/* Upper bracket half: top hook and vertical line */}
      <svg width="24" height="42%" viewBox="0 0 24 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
        {/* Top right hook extending inward from left */}
        <path d="M4 6 L18 6 L18 100" strokeWidth="2" />
      </svg>

      {/* Center Heart interrupting bracket */}
      <div style={{ margin: '4px 0', zIndex: 2 }}>
        <DoodleHeart size={16} color="#232323" strokeWidth={2.2} />
      </div>

      {/* Lower bracket half: vertical line and bottom hook */}
      <svg width="24" height="42%" viewBox="0 0 24 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" style={{ overflow: 'visible' }}>
        {/* Bottom vertical line and bottom right hook */}
        <path d="M18 0 L18 94 L4 94" strokeWidth="2" />
      </svg>
    </div>
  );
}
