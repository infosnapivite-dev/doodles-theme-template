import React from 'react';

/**
 * Hand-drawn architectural sketch of The Olive Barn
 * Features:
 * - Two-story country barn with pitched roof & front gable
 * - Rustic multi-pane windows and arched barn entrance
 * - Sketched winding pathway leading out to front
 * - Charming olive trees flanking left and right sides
 */
export default function OliveBarnSketch({ width = 140, height = 90, className = '' }) {
  return (
    <div
      className={`barn-sketch-wrapper inline-flex items-center justify-center gpu-accelerated ${className}`}
      style={{ overflow: 'visible' }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gpu-accelerated"
        style={{ overflow: 'visible', display: 'block' }}
      >
        {/* ========================================================
            FLANKING OLIVE TREES (LEFT & RIGHT)
           ======================================================== */}
        {/* Left Tree */}
        <g id="left-tree" stroke="#232323" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk */}
          <path d="M22 96 L22 75 M25 96 L25 76" strokeWidth="1.8" />
          {/* Branches */}
          <path d="M22 80 L16 72 M25 78 L29 70" strokeWidth="1.4" />
          {/* Foliage Canopy (Organic cloud puffs) */}
          <path
            d="M23 72 C16 72, 10 66, 12 59 C10 52, 16 46, 23 47 C25 40, 34 40, 37 47 C43 47, 47 53, 44 60 C47 67, 41 73, 34 72 Z"
            strokeWidth="1.6"
            fill="#FDFBF7"
          />
          {/* Internal leaf texture sketches */}
          <path d="M18 58 C22 56, 25 60, 29 58" strokeWidth="1.1" />
          <path d="M24 50 C28 48, 30 52, 33 50" strokeWidth="1.1" />
        </g>

        {/* Right Tree */}
        <g id="right-tree" stroke="#232323" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk */}
          <path d="M138 96 L138 75 M141 96 L141 77" strokeWidth="1.8" />
          {/* Branches */}
          <path d="M138 80 L133 72 M141 78 L146 71" strokeWidth="1.4" />
          {/* Foliage Canopy */}
          <path
            d="M139 72 C132 72, 126 66, 128 59 C126 52, 132 46, 139 47 C141 40, 150 40, 153 47 C159 47, 163 53, 160 60 C163 67, 157 73, 150 72 Z"
            strokeWidth="1.6"
            fill="#FDFBF7"
          />
          <path d="M134 58 C138 56, 141 60, 145 58" strokeWidth="1.1" />
          <path d="M140 50 C144 48, 146 52, 149 50" strokeWidth="1.1" />
        </g>

        {/* Ground Line */}
        <path d="M8 96 L154 96" stroke="#232323" strokeWidth="1.5" strokeLinecap="round" />

        {/* Winding Pathway in Foreground */}
        <path
          d="M72 96 C68 102, 60 105, 52 108"
          stroke="#232323"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <path
          d="M88 96 C92 102, 102 105, 110 108"
          stroke="#232323"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />

        {/* ========================================================
            BARN ARCHITECTURE (TWO STORIES, PITCHED ROOF & GABLE)
           ======================================================== */}
        <g id="barn-structure" stroke="#232323" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Wing Roof */}
          <path d="M38 64 L58 48 L80 48" strokeWidth="1.8" />
          {/* Left Wing Wall */}
          <path d="M42 64 L42 96" strokeWidth="1.6" />
          <path d="M48 72 L48 84 L56 84 L56 72 Z" strokeWidth="1.3" fill="#FDFBF7" />
          <line x1="52" y1="72" x2="52" y2="84" strokeWidth="1.1" />

          {/* Right Wing Roof */}
          <path d="M122 64 L102 48 L80 48" strokeWidth="1.8" />
          {/* Right Wing Wall */}
          <path d="M118 64 L118 96" strokeWidth="1.6" />
          <path d="M104 72 L104 84 L112 84 L112 72 Z" strokeWidth="1.3" fill="#FDFBF7" />
          <line x1="108" y1="72" x2="108" y2="84" strokeWidth="1.1" />

          {/* Central Main Barn Gable & Walls */}
          {/* Central Gable Pitch */}
          <path
            d="M58 54 L80 32 L102 54"
            strokeWidth="2.2"
            fill="#FDFBF7"
          />
          {/* Gable eaves overhanging */}
          <path d="M55 56 L80 30 L105 56" strokeWidth="1.6" />

          {/* Main Barn Walls */}
          <path d="M60 54 L60 96 L100 96 L100 54" strokeWidth="1.8" fill="#FDFBF7" />

          {/* Weather Vane on Top Peak */}
          <path d="M80 30 L80 22 M76 25 L84 25" strokeWidth="1.4" />
          <path d="M80 22 C82 20, 85 22, 82 24" strokeWidth="1.2" />

          {/* Upper Hayloft / Gable Window */}
          <path
            d="M74 46 C74 42, 86 42, 86 46 L86 54 L74 54 Z"
            strokeWidth="1.4"
            fill="#FDFBF7"
          />
          <line x1="80" y1="43" x2="80" y2="54" strokeWidth="1.1" />
          <line x1="74" y1="49" x2="86" y2="49" strokeWidth="1.1" />

          {/* Ground Floor Main Barn Double Doors (Arched) */}
          <path
            d="M70 96 L70 74 C70 68, 90 68, 90 74 L90 96"
            strokeWidth="1.8"
            fill="#FDFBF7"
          />
          {/* Door divider */}
          <line x1="80" y1="70" x2="80" y2="96" strokeWidth="1.4" />
          {/* Barn 'X' cross-brace on doors */}
          <line x1="71" y1="78" x2="79" y2="95" strokeWidth="1.1" />
          <line x1="79" y1="78" x2="71" y2="95" strokeWidth="1.1" />
          <line x1="81" y1="78" x2="89" y2="95" strokeWidth="1.1" />
          <line x1="89" y1="78" x2="81" y2="95" strokeWidth="1.1" />

          {/* Siding horizontal board lines (Rustic texture) */}
          <line x1="62" y1="62" x2="72" y2="62" strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="88" y1="62" x2="98" y2="62" strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="62" y1="68" x2="68" y2="68" strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="92" y1="68" x2="98" y2="68" strokeWidth="0.8" strokeDasharray="3 2" />
        </g>
      </svg>
    </div>
  );
}
