import React from 'react';
import { motion } from 'framer-motion';
import ClockDoodle from '../../assets/illustrations/ClockDoodle';
import OliveBarnSketch from '../../assets/illustrations/OliveBarnSketch';
import { DoodleHeart, DoodlePin, DoodleArrow, SketchBurst } from '../../assets/illustrations/Doodles';

/**
 * Section 2: Ceremony Time & Venue ("When & Where?")
 * - Height: 100% of mobile screen height (mobile-screen-section)
 * - Tilted (-8deg) stacked doodle header "WHEN & WHERE? ♡"
 * - Arrival time "14:30 PM" in coral-red + ClockDoodle at 2:30
 * - "The Olive Barn" coral-red script
 * - 2-Column venue lockup: OliveBarnSketch (left) & address (right)
 * - Full-width hand-drawn bordered CTA button: "VIEW THE MAP →" flanked by sketchbursts
 * - Bottom right doodle note: "CAN'T WAIT TO SEE YOU! ♡"
 */
export default function WhenAndWhere({ isVisible = true }) {
  const mapUrl = 'https://maps.google.com/?q=The+Gulmohar+Estate+Alibaug+402201';

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

  const timeClockItem = {
    hidden: { opacity: 0, scale: 0.9, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const venueNameItem = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const venueLockupItem = {
    hidden: { opacity: 0, scale: 0.93, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const ctaItem = {
    hidden: { opacity: 0, scale: 0.92, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const noteItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section when-and-where-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Section Header: Tilted (-8deg) with Coral Heart */}
      <motion.div
        variants={headerItem}
        className="flex items-center justify-center gap-2 gpu-accelerated"
        style={{
          transform: 'rotate(-8deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '4px'
        }}
      >
        <h2
          style={{
            fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
            fontSize: '44px',
            fontWeight: 700,
            lineHeight: '1',
            letterSpacing: '2px',
            color: '#232323'
          }}
        >
          WHEN &amp; WHERE?
        </h2>
        <DoodleHeart size={22} color="#D66865" strokeWidth={2.4} />
      </motion.div>

      {/* Arrival Time: Centered Coral-Red */}
      <motion.div
        variants={timeClockItem}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div
          style={{
            fontFamily: "'Patrick Hand', 'Caveat', cursive",
            fontSize: '24px',
            fontWeight: 600,
            color: '#D66865',
            letterSpacing: '0.5px',
            marginBottom: '4px'
          }}
        >
          14:30 PM
        </div>
        {/* Analog Clock Doodle at 2:30 */}
        <ClockDoodle size={72} />
      </motion.div>

      {/* Venue Block */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* Venue Name: "The Gulmohar Estate" Coral-Red Script */}
        <motion.div
          variants={venueNameItem}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '32px',
            fontWeight: 600,
            color: '#D66865',
            letterSpacing: '1px',
            marginBottom: '6px'
          }}
        >
          The Gulmohar Estate
        </motion.div>

        {/* Two-Column Venue Lockup: Barn Sketch (Left) & Address (Right) */}
        <motion.div
          variants={venueLockupItem}
          className="venue-lockup flex items-center justify-center gpu-accelerated"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto'
          }}
        >
          {/* Left: Barn Sketch */}
          <div style={{ flex: '0 0 auto' }}>
            <OliveBarnSketch width={128} height={82} />
          </div>

          {/* Right: Tilted (-4deg) Coral-Red Address */}
          <div
            style={{
              transform: 'rotate(-4deg)',
              fontFamily: "'Patrick Hand', 'Caveat', cursive",
              fontSize: '17px',
              lineHeight: '1.25',
              color: '#D66865',
              textAlign: 'left'
            }}
          >
            <div style={{ fontWeight: 600 }}>Gulmohar Lane</div>
            <div>Alibaug, MH 402201</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Block: CTA Button + Can't wait note */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Interactive CTA Button: DIRECTION flanked by sketchbursts */}
        <motion.div
          variants={ctaItem}
          className="cta-wrapper relative flex items-center justify-center gpu-accelerated"
          style={{
            width: '100%',
            maxWidth: '225px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Left Sketchburst */}
          <div style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)' }}>
            <SketchBurst direction="left" size={20} color="#232323" />
          </div>

          {/* The Hand-Drawn Button */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="doodle-btn"
            id="btn-directions"
            title="Get Directions on Google Maps"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '7px 14px',
              width: '100%',
              borderRadius: '6px'
            }}
          >
            <DoodlePin size={17} color="#232323" />
            <span
              style={{
                fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
                fontSize: '21px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#232323'
              }}
            >
              DIRECTION
            </span>
            <DoodleArrow size={17} color="#232323" />
          </a>

          {/* Right Sketchburst */}
          <div style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)' }}>
            <SketchBurst direction="right" size={20} color="#232323" />
          </div>
        </motion.div>

        {/* Bottom Margin Note: Right-aligned, tilted (-10deg) "CAN'T WAIT TO SEE YOU! ♡" */}
        <motion.div
          variants={noteItem}
          className="w-full text-right gpu-accelerated"
          style={{
            width: '100%',
            maxWidth: '235px',
            textAlign: 'right',
            marginTop: '5px',
            paddingRight: '2px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'rotate(-10deg)',
              fontFamily: "'Patrick Hand', 'Amatic SC', cursive",
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#232323',
              letterSpacing: '0.8px',
              lineHeight: '1.05'
            }}
          >
            <span>CAN'T WAIT</span>
            <span>TO SEE YOU!</span>
            <div style={{ marginTop: '1px' }}>
              <DoodleHeart size={10} color="#232323" strokeWidth={2} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
