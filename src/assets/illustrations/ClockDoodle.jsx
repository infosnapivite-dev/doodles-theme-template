import React from 'react';
import { motion } from 'framer-motion';
import { DoodleHeart } from './Doodles';

/**
 * Hand-drawn analog clock doodle showing 2:30 (14:30 PM)
 * Features:
 * - Hand-drawn organic circular clock body
 * - Radiating sketchburst tick marks around outer rim
 * - Tiny coral-red heart perched on the top-right rim
 * - Clock hands pointing to 2:30
 */
export default function ClockDoodle({ size = 72, className = '' }) {
  return (
    <div
      className={`clock-doodle-wrapper relative inline-flex items-center justify-center gpu-accelerated ${className}`}
      style={{
        position: 'relative',
        width: size,
        height: size,
        margin: '6px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Tiny Coral Red Heart perched on the top-right rim */}
      <motion.div
        animate={{ y: [0, -2, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-6px',
          right: '8px',
          zIndex: 5
        }}
      >
        <DoodleHeart size={14} color="#D66865" strokeWidth={2.4} />
      </motion.div>

      {/* Hand-Drawn Clock Face SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gpu-accelerated"
        style={{ overflow: 'visible' }}
      >
        {/* Radiating Sketchburst Lines around the perimeter */}
        <g stroke="#232323" strokeWidth="1.8" strokeLinecap="round">
          {/* Top */}
          <path d="M50 12 L50 4" />
          {/* Top-Left */}
          <path d="M23 23 L16 16" />
          {/* Left */}
          <path d="M12 50 L4 50" />
          {/* Bottom-Left */}
          <path d="M23 77 L16 84" />
          {/* Bottom */}
          <path d="M50 88 L50 96" />
          {/* Bottom-Right */}
          <path d="M77 77 L84 84" />
          {/* Right */}
          <path d="M88 50 L96 50" />
          {/* Top-Right (near heart) */}
          <path d="M75 25 L82 18" />
        </g>

        {/* Hand-drawn Outer Clock Circle (Organic loose sketch double-stroke) */}
        <path
          d="M50 18 C68 18, 82 32, 82 50 C82 68, 68 82, 50 82 C32 82, 18 68, 18 50 C18 32, 32 18, 50 18 Z"
          stroke="#232323"
          strokeWidth="2.2"
          fill="#FDFBF7"
        />
        {/* Subtle sketch contour */}
        <path
          d="M48 20 C65 19, 80 34, 80 50 C80 66, 66 80, 50 80 C34 80, 20 66, 20 50"
          stroke="#232323"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          fill="none"
        />

        {/* Hour Dots / Marks on clock face */}
        <circle cx="50" cy="24" r="1.5" fill="#232323" />
        <circle cx="76" cy="50" r="1.5" fill="#232323" />
        <circle cx="50" cy="76" r="1.5" fill="#232323" />
        <circle cx="24" cy="50" r="1.5" fill="#232323" />

        {/* Center Clock Pin */}
        <circle cx="50" cy="50" r="2.8" fill="#232323" />

        {/* Clock Hands pointing to 2:30 (14:30) */}
        {/* Hour Hand: pointing towards 2:30 (approx 75 degrees) */}
        <path
          d="M50 50 L64 43"
          stroke="#232323"
          strokeWidth="2.6"
          strokeLinecap="round"
        />

        {/* Minute Hand: pointing straight down at 6 (30 min) */}
        <path
          d="M50 50 L50 72"
          stroke="#232323"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
