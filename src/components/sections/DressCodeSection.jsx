import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DressCodeSketch from '../../assets/illustrations/DressCodeSketch';
import { DoodleHeart, DoodleUnderline } from '../../assets/illustrations/Doodles';

/**
 * Section 4: Wardrobe & Attire ("Dress Code")
 * - Height: 100% of mobile screen height (mobile-screen-section)
 * - Tilted (-8deg) 2-line header: "DRESS" / "CODE" (underlined) with coral heart
 * - DressCodeSketch illustration (Evening Gown & Tuxedo)
 * - 4 circular swatches with hand-drawn borders & interactive dress switcher:
 *   1. Pitch Black (#141414) -> /dresscode-img.png
 *   2. Deep Olive Green (#3D4327) -> /dresscode-img4.png
 *   3. Warm Taupe (#B59E88) -> /dresscode-img3.png
 *   4. Soft Cream (#EBE4D8) -> /dresscode-img2.png
 * - Caption: "Formal attire / in our color palette" in coral-red
 */
const SWATCHES = [
  { name: 'Pitch Black', hex: '#141414', border: '#232323', image: '/dresscode-img.png' },
  { name: 'Deep Olive Green', hex: '#3D4327', border: '#232323', image: '/dresscode-img4.png' },
  { name: 'Warm Taupe', hex: '#B59E88', border: '#232323', image: '/dresscode-img3.png' },
  { name: 'Soft Cream', hex: '#EBE4D8', border: '#232323', image: '/dresscode-img2.png' }
];

export default function DressCodeSection({ isVisible = true }) {
  const [activeSwatch, setActiveSwatch] = useState(0);

  // Preload all dress code images to ensure instantaneous switching without delay
  useEffect(() => {
    SWATCHES.forEach((swatch) => {
      const img = new Image();
      img.src = swatch.image;
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const headerItem = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const sketchItem = {
    hidden: { opacity: 0, scale: 0.93, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const swatchesItem = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const labelItem = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const captionItem = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section dress-code-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Header Lockup: Tilted (-8deg) 2-line uppercase */}
      <motion.div
        variants={headerItem}
        className="header-lockup flex flex-col items-center gpu-accelerated"
        style={{
          transform: 'rotate(-8deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
              fontSize: '44px',
              fontWeight: 700,
              lineHeight: '0.85',
              letterSpacing: '3px',
              color: '#232323',
              textAlign: 'center'
            }}
          >
            <div>DRESS</div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <span>CODE</span>
              <div style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0 }}>
                <DoodleUnderline width={72} height={8} color="#232323" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            <DoodleHeart size={22} color="#D66865" strokeWidth={2.4} />
          </div>
        </div>
      </motion.div>

      {/* Attire Sketch Illustration (Gown & Tuxedo) - changes based on selected color */}
      <motion.div variants={sketchItem} style={{ width: '100%' }}>
        <DressCodeSketch
          activeImage={SWATCHES[activeSwatch]?.image || SWATCHES[0].image}
          activeColorName={SWATCHES[activeSwatch]?.name || SWATCHES[0].name}
          onSketchClick={() => setActiveSwatch((prev) => (prev + 1) % SWATCHES.length)}
        />
      </motion.div>

      {/* Color Palette Swatches & Caption */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* Swatches Row */}
        <motion.div
          variants={swatchesItem}
          className="swatches-row flex items-center justify-center gap-3 gpu-accelerated"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            margin: '0 auto 6px auto',
            position: 'relative'
          }}
        >
          {SWATCHES.map((swatch, idx) => {
            const isSelected = activeSwatch === idx;
            return (
              <motion.button
                key={idx}
                type="button"
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setActiveSwatch(idx)}
                className="swatch-bubble relative cursor-pointer gpu-accelerated"
                title={`${swatch.name} (${swatch.hex}) - Tap to preview`}
                aria-label={`Select ${swatch.name} dress code`}
                aria-pressed={isSelected}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: swatch.hex,
                  border: isSelected ? '2.5px solid #232323' : '2px solid #232323',
                  boxShadow: isSelected
                    ? '0 0 0 3px #FAF7F2, 0 0 0 5.5px #D66865, 0 4px 12px rgba(214,104,101,0.35)'
                    : '0 2px 5px rgba(0,0,0,0.12)',
                  outline: 'none',
                  padding: 0,
                  position: 'relative',
                  transform: isSelected ? 'scale(1.12)' : 'scale(1)',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Inner dashed ring */}
                <span
                  style={{
                    position: 'absolute',
                    inset: '3px',
                    borderRadius: '50%',
                    border: idx === 3
                      ? '1px dashed rgba(0,0,0,0.25)'
                      : '1px dashed rgba(255,255,255,0.45)',
                    pointerEvents: 'none'
                  }}
                />
                {/* Active Selection Center Dot */}
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: idx === 3 ? '#232323' : '#FAF7F2',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.25)',
                      pointerEvents: 'none'
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active swatch toast label showing selected color */}
        <motion.div
          variants={labelItem}
          style={{
            minHeight: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4px'
          }}
        >
          <motion.div
            key={activeSwatch}
            initial={{ opacity: 0, y: -3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "'Patrick Hand', cursive",
              fontSize: '14px',
              color: '#232323',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>{SWATCHES[activeSwatch].name}</span>
            <span style={{ fontSize: '12px', opacity: 0.65 }}>({SWATCHES[activeSwatch].hex})</span>
          </motion.div>
        </motion.div>

        {/* Subtext: Centered Coral-Red Handwritten Caption */}
        <motion.div
          variants={captionItem}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '22px',
            fontWeight: 600,
            color: '#D66865',
            lineHeight: '1.2',
            letterSpacing: '0.5px'
          }}
        >
          <div>Formal attire</div>
          <div>in our color palette</div>
        </motion.div>
      </div>
    </motion.section>
  );
}
