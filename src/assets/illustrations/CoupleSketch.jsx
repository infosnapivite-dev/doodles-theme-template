import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleHeart, WatercolorDoodleHeart, SparkleStar } from './Doodles';

/**
 * Hand-drawn ink sketch illustration of Bride & Groom walking away hand-in-hand
 * Using user-provided transparent PNG: /hero-img.png
 * Accompanied by:
 * - 8 Enhanced floating hearts with organic multi-axis drift, natural sway & breathing scale
 * - Romantic watercolor blush washes & hand-drawn dual sketch contours
 * - Twinkling doodle sparkle stars nestled with the hearts
 * - Interactive tap/click heart flutter emitter: tap anywhere or click hearts to send rising love flutters!
 * - Right-margin stacked doodle callout: "SAME PEOPLE MORE LOVE ♡"
 */
export default function CoupleSketch() {
  const [flutters, setFlutters] = useState([]);

  // Interactive tap/click handler that spawns graceful rising doodle hearts
  const handleContainerTap = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const clickY = e.clientY ? e.clientY - rect.top : rect.height / 2;

    const newFlutters = Array.from({ length: 4 }).map((_, idx) => ({
      id: `${Date.now()}-${idx}-${Math.random()}`,
      startX: clickX + (Math.random() * 24 - 12),
      startY: clickY + (Math.random() * 16 - 8),
      targetX: clickX + (Math.random() * 70 - 35),
      targetY: clickY - 55 - Math.random() * 45,
      scale: 0.75 + Math.random() * 0.45,
      rotate: Math.random() * 40 - 20,
      size: 13 + Math.floor(Math.random() * 9),
      isCoral: idx % 2 === 0
    }));

    setFlutters((prev) => [...prev.slice(-12), ...newFlutters]);
    setTimeout(() => {
      setFlutters((prev) => prev.filter((f) => !newFlutters.some((nf) => nf.id === f.id)));
    }, 1300);
  }, []);

  return (
    <div
      className="couple-sketch-container relative mx-auto flex flex-col items-center justify-center gpu-accelerated cursor-pointer select-none"
      onClick={handleContainerTap}
      title="Tap to send love ♡"
      style={{
        width: '100%',
        maxWidth: '300px',
        minHeight: '210px',
        position: 'relative',
        margin: '2px auto'
      }}
    >
      {/* ─── Interactive Floating Rising Flutters ─── */}
      <AnimatePresence>
        {flutters.map((f) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0.95, x: f.startX, y: f.startY, scale: 0.4, rotate: 0 }}
            animate={{
              opacity: 0,
              x: f.targetX,
              y: f.targetY,
              scale: f.scale,
              rotate: f.rotate
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 25
            }}
          >
            {f.isCoral ? (
              <WatercolorDoodleHeart
                size={f.size}
                strokeColor="#D66865"
                washColor="rgba(214, 104, 101, 0.45)"
                strokeWidth={2}
                doubleStroke={false}
              />
            ) : (
              <DoodleHeart
                size={f.size}
                color="#232323"
                fill="rgba(35, 35, 35, 0.08)"
                strokeWidth={1.8}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ─── Floating Heart 1: Top Left - Watercolor Coral Blush ─── */}
      <motion.div
        animate={{
          y: [0, -14, -5, -18, 0],
          x: [0, 4, -3, 5, 0],
          rotate: [-9, 8, -5, 10, -9],
          scale: [1, 1.12, 0.96, 1.08, 1]
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.4, rotate: 14 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '4px',
          left: '20px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <WatercolorDoodleHeart
          size={21}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.28)"
          strokeWidth={2.2}
          doubleStroke={true}
        />
      </motion.div>

      {/* Twinkling Star Companion 1: Near Top Left Heart */}
      <motion.div
        animate={{
          scale: [0.75, 1.25, 0.75],
          opacity: [0.35, 0.9, 0.35],
          rotate: [0, 90, 180]
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '2px',
          left: '8px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <SparkleStar size={11} color="#D66865" />
      </motion.div>

      {/* ─── Floating Heart 2: Middle Far Left - Charcoal Sketch ─── */}
      <motion.div
        animate={{
          y: [0, -15, -6, -19, 0],
          x: [0, -4, 3, -3, 0],
          rotate: [4, -8, 5, -7, 4],
          scale: [1, 1.09, 0.95, 1.07, 1]
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        whileHover={{ scale: 1.4, rotate: -12 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '64px',
          left: '10px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <DoodleHeart
          size={17}
          color="#232323"
          fill="rgba(35, 35, 35, 0.04)"
          strokeWidth={2}
        />
      </motion.div>

      {/* ─── Floating Heart 3: Lower-Mid Left - Soft Watercolor Coral ─── */}
      <motion.div
        animate={{
          y: [0, -12, -4, -16, 0],
          x: [0, 5, -2, 4, 0],
          rotate: [-6, 6, -4, 7, -6],
          scale: [1, 1.1, 0.97, 1.06, 1]
        }}
        transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        whileHover={{ scale: 1.4, rotate: 12 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '122px',
          left: '16px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <WatercolorDoodleHeart
          size={19}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.22)"
          strokeWidth={2}
          doubleStroke={false}
        />
      </motion.div>

      {/* ─── Floating Heart 4: Bottom Left - Petite Charcoal Sketch ─── */}
      <motion.div
        animate={{
          y: [0, -10, -3, -13, 0],
          x: [0, -3, 3, -4, 0],
          rotate: [3, -5, 4, -4, 3],
          scale: [1, 1.08, 0.98, 1.05, 1]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        whileHover={{ scale: 1.4, rotate: -10 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '168px',
          left: '6px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <DoodleHeart
          size={14}
          color="#232323"
          strokeWidth={2.2}
        />
      </motion.div>

      {/* ─── Floating Heart 5: Apex Center Crown (Showcase Pinnacle) ─── */}
      <motion.div
        animate={{
          y: [0, -16, -6, -21, 0],
          x: [0, 4, -4, 3, 0],
          rotate: [-5, 7, -4, 8, -5],
          scale: [1, 1.14, 0.95, 1.1, 1]
        }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        whileHover={{ scale: 1.45, rotate: 12 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '-6px',
          left: '46%',
          zIndex: 5,
          cursor: 'pointer'
        }}
      >
        <WatercolorDoodleHeart
          size={26}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.35)"
          strokeWidth={2.4}
          doubleStroke={true}
        />
      </motion.div>

      {/* Twinkling Star Companion 2: Near Apex Crown Heart */}
      <motion.div
        animate={{
          scale: [0.7, 1.3, 0.7],
          opacity: [0.3, 0.95, 0.3],
          rotate: [0, -90, -180]
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        style={{
          position: 'absolute',
          top: '2px',
          left: '57%',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <SparkleStar size={12} color="#D66865" />
      </motion.div>

      {/* ─── Floating Heart 6: Crown Right (Above Groom) - Charcoal Accent ─── */}
      <motion.div
        animate={{
          y: [0, -13, -4, -17, 0],
          x: [0, -4, 3, -5, 0],
          rotate: [6, -7, 4, -8, 6],
          scale: [1, 1.1, 0.96, 1.07, 1]
        }}
        transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        whileHover={{ scale: 1.4, rotate: -12 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '12px',
          right: '64px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <DoodleHeart
          size={16}
          color="#232323"
          fill="rgba(214, 104, 101, 0.12)"
          strokeWidth={2}
        />
      </motion.div>

      {/* ─── Floating Heart 7: High Right - Watercolor Coral ─── */}
      <motion.div
        animate={{
          y: [0, -15, -4, -19, 0],
          x: [0, 4, -3, 4, 0],
          rotate: [-7, 6, -5, 7, -7],
          scale: [1, 1.12, 0.96, 1.09, 1]
        }}
        transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        whileHover={{ scale: 1.4, rotate: 14 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '18px',
          right: '18px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <WatercolorDoodleHeart
          size={20}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.25)"
          strokeWidth={2.2}
          doubleStroke={false}
        />
      </motion.div>

      {/* Twinkling Star Companion 3: Near High Right Heart */}
      <motion.div
        animate={{
          scale: [0.75, 1.25, 0.75],
          opacity: [0.35, 0.9, 0.35],
          rotate: [0, 90, 180]
        }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '6px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        <SparkleStar size={10} color="#232323" />
      </motion.div>

      {/* ─── Floating Heart 8: Mid-Low Right - Coral Sketch ─── */}
      <motion.div
        animate={{
          y: [0, -11, -3, -15, 0],
          x: [0, -3, 4, -2, 0],
          rotate: [5, -6, 3, -6, 5],
          scale: [1, 1.09, 0.97, 1.06, 1]
        }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        whileHover={{ scale: 1.4, rotate: -12 }}
        whileTap={{ scale: 0.85 }}
        style={{
          position: 'absolute',
          top: '152px',
          right: '12px',
          zIndex: 4,
          cursor: 'pointer'
        }}
      >
        <WatercolorDoodleHeart
          size={15}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.2)"
          strokeWidth={1.9}
          doubleStroke={false}
        />
      </motion.div>

      {/* The User-Provided Authentic Couple Sketch Image */}
      <img
        src="/hero-img.png"
        alt="Aarav & Meera - Bride and Groom walking away hand-in-hand"
        className="couple-sketch-img gpu-accelerated"
        style={{
          width: '100%',
          maxWidth: '220px',
          height: 'auto',
          maxHeight: '215px',
          objectFit: 'contain',
          display: 'block',
          margin: '0 auto',
          pointerEvents: 'none'
        }}
      />

      {/* Right Margin Mini Stacked Doodle Text: "SAME PEOPLE MORE LOVE ♡" */}
      <div
        className="doodle-callout absolute text-center font-display leading-tight gpu-accelerated"
        style={{
          position: 'absolute',
          top: '72px',
          right: '2px',
          width: '56px',
          fontFamily: "'Patrick Hand', 'Amatic SC', cursive",
          fontSize: '11px',
          color: '#232323',
          lineHeight: '1.05',
          transform: 'rotate(-4deg)',
          pointerEvents: 'none'
        }}
      >
        <span style={{ display: 'block', letterSpacing: '0.5px', fontWeight: 600 }}>SAME</span>
        <span style={{ display: 'block', letterSpacing: '0.5px', fontWeight: 600 }}>PEOPLE</span>
        <span style={{ display: 'block', letterSpacing: '0.5px', fontWeight: 600 }}>MORE</span>
        <span style={{ display: 'block', letterSpacing: '0.5px', fontWeight: 600 }}>LOVE</span>
        <div style={{ marginTop: '2px' }}>
          <DoodleHeart size={11} color="#D66865" fill="rgba(214, 104, 101, 0.3)" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

