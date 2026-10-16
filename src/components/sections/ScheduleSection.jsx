import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HaldiBowlIcon,
  MehendiHandIcon,
  DholakIcon,
  MandapFireIcon
} from '../../assets/illustrations/ScheduleIcons';
import { DoodleUnderline, DoodleDivider, WatercolorDoodleHeart, DoodleHeart } from '../../assets/illustrations/Doodles';

/**
 * Section 3: Schedule of Indian Wedding Events ("Schedule")
 * - Height: 100% of mobile screen height (mobile-screen-section)
 * - Tilted (-5deg) header "SCHEDULE ♡" with wavy underline
 * - Pure sketchbook doodle layout matching the reference image:
 *   - Left: Hand-drawn sketchy doodle icon
 *   - Right: Stacked coral timestamp on top, black lowercase cursive event name underneath
 * - Interactive: Tapping any event opens a detailed hand-drawn sketchbook modal
 * - Bottom divider: ─── ♡ ───
 */
const EVENTS = [
  {
    id: 'haldi',
    time: '10:30',
    title: 'haldi',
    ceremonyName: 'Haldi Ceremony',
    venue: 'The Sunlit Courtyard & Lawn',
    dressCode: 'Sunshine Yellow & Florals',
    highlights: 'Flower Showers & Sweet Lassi',
    icon: <HaldiBowlIcon size={40} color="#232323" />
  },
  {
    id: 'mehendi',
    time: '15:00',
    title: 'mehendi',
    ceremonyName: 'Mehendi Celebration',
    venue: 'The Gulmohar Verandah',
    dressCode: 'Breezy Pastels & Bohemian Chic',
    highlights: 'Custom Henna, Bangle Bar & Live Folk',
    icon: <MehendiHandIcon size={40} color="#232323" />
  },
  {
    id: 'sangeet',
    time: '19:30',
    title: 'sangeet',
    ceremonyName: 'Sangeet & Dance Night',
    venue: 'The Grand Ballroom & Lawn',
    dressCode: 'Glitz & Glam Indo-Western',
    highlights: 'Family Dance Face-Offs & DJ Party',
    icon: <DholakIcon size={40} color="#232323" />
  },
  {
    id: 'shaadi',
    time: '21:00',
    title: 'shaadi & phere',
    ceremonyName: 'Shaadi & Saat Phere',
    venue: 'The Sacred Mandap under the Stars',
    dressCode: 'Traditional Indian Royal Attire',
    highlights: 'Varmala Exchange & Shahi Daawat',
    icon: <MandapFireIcon size={40} color="#232323" />
  }
];

export default function ScheduleSection({ isVisible = true }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };
    if (selectedEvent) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
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

  const itemVariants = {
    hidden: { opacity: 0, x: -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const dividerItem = {
    hidden: { opacity: 0, scaleX: 0.8 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section schedule-section text-center gpu-accelerated relative"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      style={{ position: 'relative' }}
    >
      {/* Header Lockup: Tilted (-5deg) with Underline and Watercolor Heart */}
      <motion.div
        variants={headerItem}
        className="header-lockup flex flex-col items-center gpu-accelerated"
        style={{
          transform: 'rotate(-5deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '6px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h2
            style={{
              fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '0.95',
              letterSpacing: '3px',
              color: '#232323'
            }}
          >
            SCHEDULE
          </h2>
          <WatercolorDoodleHeart
            size={22}
            strokeColor="#D66865"
            washColor="rgba(214, 104, 101, 0.3)"
            strokeWidth={2.4}
          />
        </div>
        <div style={{ marginTop: '2px' }}>
          <DoodleUnderline width={135} height={10} color="#232323" />
        </div>
      </motion.div>

      {/* Schedule Timeline List - Exactly Matching Reference Image (Clickable for Details) */}
      <motion.div
        className="timeline-list flex flex-col gpu-accelerated"
        variants={containerVariants}
        style={{
          width: '100%',
          maxWidth: '215px',
          margin: '12px auto 6px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
      >
        {EVENTS.map((evt) => (
          <motion.div
            key={evt.title}
            variants={itemVariants}
            whileHover={{ x: 6, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setSelectedEvent(evt)}
            title="Tap to view ceremony details ♡"
            className="timeline-row flex items-center justify-between gpu-accelerated cursor-pointer select-none"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              cursor: 'pointer',
              padding: '3px 4px',
              borderRadius: '8px',
              transition: 'background-color 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
              {/* Hand-Drawn Doodle Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {evt.icon}
              </div>

              {/* Time (Coral) & Title (Black Cursive Script) */}
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span
                  style={{
                    fontFamily: "'Caveat', 'Patrick Hand', cursive",
                    fontSize: '21px',
                    fontWeight: 600,
                    color: '#D66865',
                    lineHeight: '1.05',
                    letterSpacing: '0.4px'
                  }}
                >
                  {evt.time}
                </span>
                <span
                  style={{
                    fontFamily: "'Caveat', 'Patrick Hand', cursive",
                    fontSize: '21px',
                    fontWeight: 500,
                    color: '#232323',
                    lineHeight: '1.15'
                  }}
                >
                  {evt.title}
                </span>
              </div>
            </div>

            {/* Subtle Right Arrow Indicator */}
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '18px',
                color: '#D66865',
                opacity: 0.55,
                paddingLeft: '4px'
              }}
            >
              ›
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Discrete Helpful Hint */}
      <div
        style={{
          fontFamily: "'Patrick Hand', cursive",
          fontSize: '12px',
          color: '#D66865',
          letterSpacing: '0.3px',
          marginTop: '-2px',
          marginBottom: '4px',
          opacity: 0.85
        }}
      >
        tap any event for details ♡
      </div>

      {/* Bottom Section Divider: ─── ♡ ─── */}
      <motion.div
        variants={dividerItem}
        style={{ width: '100%', maxWidth: '290px', marginBottom: '8px' }}
      >
        <DoodleDivider />
      </motion.div>

      {/* ─── Hand-Drawn Sketchbook Event Details Modal ─── */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="event-modal-backdrop gpu-accelerated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 50,
              backgroundColor: 'rgba(35, 35, 35, 0.45)',
              backdropFilter: 'blur(3px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              boxSizing: 'border-box'
            }}
          >
            <motion.div
              className="event-modal-card gpu-accelerated"
              initial={{ scale: 0.88, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 12 }}
              transition={{ type: 'spring', damping: 24, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '295px',
                maxHeight: '520px',
                backgroundColor: '#FDFBF7',
                border: '2px solid #232323',
                borderRadius: '12px',
                boxShadow: '4px 6px 0px rgba(35, 35, 35, 0.9)',
                padding: '18px 14px 14px 14px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxSizing: 'border-box'
              }}
            >
              {/* Handcrafted Top Washi Tape Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-9px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-2deg)',
                  width: '68px',
                  height: '16px',
                  backgroundColor: 'rgba(214, 104, 101, 0.35)',
                  border: '1px dashed #D66865',
                  borderRadius: '2px',
                  zIndex: 2
                }}
              />

              {/* Close Button ✕ */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="modal-close-btn gpu-accelerated"
                title="Close"
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '10px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  border: '1.5px solid #232323',
                  backgroundColor: '#FFFFFF',
                  color: '#232323',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 700,
                  outline: 'none',
                  padding: 0
                }}
              >
                ✕
              </button>

              {/* Icon & Time Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(214, 104, 101, 0.1)',
                    borderRadius: '50%',
                    border: '1.5px dashed #D66865'
                  }}
                >
                  {selectedEvent.icon}
                </div>
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #232323',
                    borderRadius: '16px',
                    padding: '2px 10px',
                    fontFamily: "'Patrick Hand', cursive",
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#D66865'
                  }}
                >
                  {selectedEvent.time}
                </div>
              </div>

              {/* Ceremony Title */}
              <h3
                style={{
                  fontFamily: "'Patrick Hand', 'Caveat', cursive",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#232323',
                  lineHeight: '1.1',
                  marginTop: '8px',
                  marginBottom: '2px'
                }}
              >
                {selectedEvent.ceremonyName}
              </h3>
              <div style={{ width: '90px', marginBottom: '8px' }}>
                <DoodleUnderline width={90} height={8} color="#D66865" />
              </div>

              {/* Ceremony Details Grid */}
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  border: '1.2px solid #232323',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  textAlign: 'left',
                  boxSizing: 'border-box',
                  marginBottom: '10px'
                }}
              >
                {/* Venue */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <span style={{ fontSize: '13px' }}>📍</span>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '11px', color: '#888', fontWeight: 600 }}>VENUE</span>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '13.5px', color: '#232323', fontWeight: 600 }}>{selectedEvent.venue}</span>
                  </div>
                </div>

                {/* Attire */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginTop: '2px' }}>
                  <span style={{ fontSize: '13px' }}>👗</span>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '11px', color: '#888', fontWeight: 600 }}>SUGGESTED ATTIRE</span>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '13px', color: '#D66865', fontWeight: 600 }}>{selectedEvent.dressCode}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginTop: '2px' }}>
                  <span style={{ fontSize: '13px' }}>✦</span>
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '11px', color: '#888', fontWeight: 600 }}>HIGHLIGHTS</span>
                    <span style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '13px', color: '#232323' }}>{selectedEvent.highlights}</span>
                  </div>
                </div>
              </div>

              {/* Dismiss Action Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#232323',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #232323',
                  borderRadius: '20px',
                  padding: '5px 18px',
                  boxShadow: '1.5px 2px 0px rgba(35, 35, 35, 0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  outline: 'none'
                }}
              >
                <span>Close</span>
                <DoodleHeart size={12} color="#D66865" fill="rgba(214, 104, 101, 0.3)" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
