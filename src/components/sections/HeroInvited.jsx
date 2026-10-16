import React from 'react';
import { motion } from 'framer-motion';
import CoupleSketch from '../../assets/illustrations/CoupleSketch';
import { DoodleHeart } from '../../assets/illustrations/Doodles';
import { WEDDING_DATE, getWeddingDateInfo } from '../../utils/weddingDate';

/**
 * Section 1: Hero & Save the Date ("You're Invited")
 * - Height: 100% of mobile screen height (mobile-screen-section)
 * - Stacked tilted (-5deg) hand-drawn typography: "You're" / "INVITED"
 * - Central Bride & Groom sketch viewed from behind
 * - "Mia & Leo" centered coral-red handwritten script
 * - Vertical Date Stack: 15 / 05 / 2035 / ♡
 * - Bouncing scroll-down hint at the bottom
 */
export default function HeroInvited({ onScrollNext, isVisible = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const illustrationItem = {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section hero-invited-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Header Lockup: Stacked, slightly tilted (-5deg) */}
      <motion.div
        variants={headerItem}
        className="header-lockup cursor-default gpu-accelerated"
        style={{
          transform: 'rotate(-5deg)',
          marginTop: '6px'
        }}
      >
        <div
          style={{
            fontFamily: "'Nothing You Could Do', 'Caveat', cursive",
            fontSize: '34px',
            lineHeight: '1',
            color: '#232323',
            letterSpacing: '1px'
          }}
        >
          You're
        </div>
        <div
          style={{
            fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: '0.9',
            letterSpacing: '3px',
            color: '#232323',
            marginTop: '-4px'
          }}
        >
          INVITED
        </div>
      </motion.div>

      {/* Central Couple Ink Sketch */}
      <motion.div variants={illustrationItem} style={{ width: '100%' }}>
        <CoupleSketch />
      </motion.div>

      {/* Couple Names: Centered Coral-Red Script */}
      <motion.div
        variants={textItem}
        style={{
          marginTop: '2px',
          marginBottom: '2px'
        }}
      >
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '36px',
            fontWeight: 600,
            color: '#D66865',
            lineHeight: '1.1',
            letterSpacing: '1px',
            textShadow: '0 1px 2px rgba(214, 104, 101, 0.1)'
          }}
        >
          Aarav &amp; Meera
        </h2>
      </motion.div>

      {/* Handcrafted Save the Date Badge Card */}
      <motion.div
        variants={textItem}
        whileHover={{ scale: 1.03, rotate: 0 }}
        whileTap={{ scale: 0.97 }}
        className="hero-date-badge gpu-accelerated cursor-default"
        style={{
          width: '100%',
          maxWidth: '242px',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #232323',
          borderRadius: '8px',
          padding: '10px 10px 7px 10px',
          margin: '2px auto',
          position: 'relative',
          boxShadow: '0 5px 14px rgba(35, 35, 35, 0.07), 0 1px 3px rgba(214, 104, 101, 0.08)',
          transform: 'rotate(-1.5deg)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
      >
        {/* Top Washi Tape Sticker Accent */}
        <div
          style={{
            position: 'absolute',
            top: '-7px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '58px',
            height: '13px',
            backgroundColor: 'rgba(235, 228, 216, 0.88)',
            border: '1px dashed rgba(35, 35, 35, 0.28)',
            borderRadius: '2px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Header Tag: · SAVE THE DATE · */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.8px',
            color: '#D66865',
            lineHeight: 1,
            marginBottom: '5px'
          }}
        >
          <span>✦</span>
          <span>SAVE THE DATE</span>
          <span>✦</span>
        </div>

        {/* 3-Part Architectural Lockup: Day-of-week | Big Date | Month & Year */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '3px',
            borderTop: '1px dashed rgba(35, 35, 35, 0.16)'
          }}
        >
          {/* Left: Weekday & Time */}
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 1.15
            }}
          >
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#232323',
                letterSpacing: '0.5px'
              }}
            >
              {getWeddingDateInfo(WEDDING_DATE).weekday}
            </span>
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#D66865',
                letterSpacing: '0.3px',
                marginTop: '1px'
              }}
            >
              14:30 PM
            </span>
          </div>

          {/* Left Divider */}
          <div
            style={{
              width: '1px',
              height: '30px',
              borderLeft: '1.2px dashed rgba(35, 35, 35, 0.22)'
            }}
          />

          {/* Center: Big Bold Wedding Day Number with Coral Heart */}
          <div
            style={{
              flex: 1.1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '34px',
                fontWeight: 700,
                color: '#232323',
                lineHeight: 0.95
              }}
            >
              {getWeddingDateInfo(WEDDING_DATE).day}
            </span>
            <div style={{ marginTop: '1px' }}>
              <DoodleHeart size={12} color="#D66865" fill="rgba(214, 104, 101, 0.35)" strokeWidth={2.2} />
            </div>
          </div>

          {/* Right Divider */}
          <div
            style={{
              width: '1px',
              height: '30px',
              borderLeft: '1.2px dashed rgba(35, 35, 35, 0.22)'
            }}
          />

          {/* Right: Month & Year */}
          <div
            style={{
              flex: 1.1,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: 1.15
            }}
          >
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '13px',
                fontWeight: 700,
                color: '#232323',
                letterSpacing: '0.8px'
              }}
            >
              {getWeddingDateInfo(WEDDING_DATE).monthName}
            </span>
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '12px',
                fontWeight: 600,
                color: '#D66865',
                letterSpacing: '0.5px',
                marginTop: '1px'
              }}
            >
              {getWeddingDateInfo(WEDDING_DATE).year}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Subtle Bouncing Scroll Prompt */}
      <motion.div variants={textItem}>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '11px',
            color: '#D66865',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1px',
            opacity: 0.85,
            cursor: 'pointer',
            marginTop: '2px'
          }}
          onClick={onScrollNext}
        >
          <span>scroll down</span>
          <span style={{ fontSize: '13px' }}>↓</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
