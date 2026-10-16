import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleHeart, WatercolorDoodleHeart, SparkleStar } from './Doodles';

/**
 * Hand-drawn ink sketch of Formal Wedding Attire (Evening Gown & Tuxedo)
 * Dynamically updates based on the selected dress code palette swatch:
 * - Pitch Black: /dresscode-img.png
 * - Deep Olive Green: /dresscode-img4.png
 * - Warm Taupe: /dresscode-img3.png
 * - Soft Cream: /dresscode-img2.png
 */
export default function DressCodeSketch({
  activeImage = '/dresscode-img.png',
  activeColorName = 'Pitch Black',
  onSketchClick
}) {
  return (
    <div
      className="dress-code-sketch-wrapper relative mx-auto flex items-center justify-center gpu-accelerated"
      onClick={onSketchClick}
      style={{
        width: '100%',
        maxWidth: '300px',
        minHeight: '220px',
        position: 'relative',
        margin: '4px auto',
        cursor: onSketchClick ? 'pointer' : 'default'
      }}
    >
      {/* ─── Floating Heart 1: Left Upper Margin - Watercolor Coral ─── */}
      <motion.div
        animate={{
          y: [0, -13, -4, -17, 0],
          x: [0, 4, -3, 4, 0],
          rotate: [-7, 7, -5, 8, -7],
          scale: [1, 1.12, 0.96, 1.08, 1]
        }}
        transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.38, rotate: 14 }}
        whileTap={{ scale: 0.88 }}
        style={{ position: 'absolute', top: '55px', left: '6px', zIndex: 4, cursor: 'pointer' }}
      >
        <WatercolorDoodleHeart
          size={19}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.28)"
          strokeWidth={2.2}
          doubleStroke={true}
        />
      </motion.div>

      {/* Tiny Sparkle Star Companion: Left */}
      <motion.div
        animate={{
          scale: [0.7, 1.25, 0.7],
          opacity: [0.35, 0.9, 0.35],
          rotate: [0, 90, 180]
        }}
        transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '46px', left: '0px', zIndex: 3, pointerEvents: 'none' }}
      >
        <SparkleStar size={10} color="#D66865" />
      </motion.div>

      {/* ─── Floating Heart 2: Left Lower Margin - Charcoal Sketch ─── */}
      <motion.div
        animate={{
          y: [0, -10, -2, -14, 0],
          x: [0, -3, 3, -3, 0],
          rotate: [4, -6, 4, -6, 4],
          scale: [1, 1.08, 0.98, 1.06, 1]
        }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        whileHover={{ scale: 1.35, rotate: -12 }}
        whileTap={{ scale: 0.88 }}
        style={{ position: 'absolute', top: '125px', left: '4px', zIndex: 4, cursor: 'pointer' }}
      >
        <DoodleHeart size={14} color="#232323" strokeWidth={2} />
      </motion.div>

      {/* ─── Floating Heart 3: Right Upper Margin - Charcoal Blush ─── */}
      <motion.div
        animate={{
          y: [0, -12, -4, -16, 0],
          x: [0, -4, 3, -4, 0],
          rotate: [5, -7, 4, -7, 5],
          scale: [1, 1.1, 0.96, 1.07, 1]
        }}
        transition={{ duration: 3.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        whileHover={{ scale: 1.35, rotate: -12 }}
        whileTap={{ scale: 0.88 }}
        style={{ position: 'absolute', top: '65px', right: '8px', zIndex: 4, cursor: 'pointer' }}
      >
        <DoodleHeart
          size={16}
          color="#232323"
          fill="rgba(214, 104, 101, 0.12)"
          strokeWidth={2}
        />
      </motion.div>

      {/* ─── Floating Heart 4: Right Mid Margin - Watercolor Coral ─── */}
      <motion.div
        animate={{
          y: [0, -15, -4, -18, 0],
          x: [0, 4, -3, 5, 0],
          rotate: [-6, 6, -5, 7, -6],
          scale: [1, 1.12, 0.95, 1.09, 1]
        }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        whileHover={{ scale: 1.38, rotate: 14 }}
        whileTap={{ scale: 0.88 }}
        style={{ position: 'absolute', top: '115px', right: '6px', zIndex: 4, cursor: 'pointer' }}
      >
        <WatercolorDoodleHeart
          size={20}
          strokeColor="#D66865"
          washColor="rgba(214, 104, 101, 0.28)"
          strokeWidth={2.2}
          doubleStroke={false}
        />
      </motion.div>

      {/* Tiny Sparkle Star Companion: Right */}
      <motion.div
        animate={{
          scale: [0.75, 1.3, 0.75],
          opacity: [0.3, 0.95, 0.3],
          rotate: [0, -90, -180]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ position: 'absolute', top: '108px', right: '2px', zIndex: 3, pointerEvents: 'none' }}
      >
        <SparkleStar size={11} color="#D66865" />
      </motion.div>

      {/* The Dynamic Dress Code Sketch Image - enlarged and centered optically */}
      <div
        style={{
          width: '100%',
          maxWidth: '255px',
          height: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'visible',
          transform: 'translateX(14px)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={`Dress Code - Evening Gown and Tailored Tuxedo in ${activeColorName}`}
            className="dresscode-sketch-img gpu-accelerated"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              width: '100%',
              maxHeight: '220px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
