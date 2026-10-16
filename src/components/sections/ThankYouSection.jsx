import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { IntertwinedHearts, DoodleHeart, DoodleDivider } from '../../assets/illustrations/Doodles';

/**
 * Section 5: Finale ("Thank You!")
 * - Height: 100% of mobile screen height (mobile-screen-section)
 * - Directly follows Dress Code section (RSVP completely omitted).
 * - Decorative divider at top
 * - Tilted (-6deg) stacked header: "THANK" / "YOU! ♡"
 * - Gratitude Copy in charcoal handwritten script (2 stanzas)
 * - Closing Motif: Two intertwined black outline hearts with radiating sketchbursts
 * - Interactive heart tap with playful romantic confetti!
 */
export default function ThankYouSection({ isVisible = true }) {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const triggerHeartsConfetti = (e) => {
    setHasCelebrated(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 35,
      spread: 60,
      startVelocity: 20,
      colors: ['#D66865', '#232323', '#EFCFD4', '#B59E88'],
      shapes: ['circle'],
      scalar: 0.9,
      ticks: 120,
      gravity: 0.8
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.05
      }
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

  const headerItem = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const copyItem = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const heartItem = {
    hidden: { opacity: 0, scale: 0.88, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const hintItem = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section thank-you-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Decorative transition divider at top */}
      <motion.div
        variants={dividerItem}
        style={{ width: '100%', maxWidth: '280px', marginTop: '6px' }}
      >
        <DoodleDivider />
      </motion.div>

      {/* Header Lockup: Tilted (-6deg) Stacked "THANK" / "YOU! ♡" */}
      <motion.div
        variants={headerItem}
        className="header-lockup flex items-center justify-center gpu-accelerated"
        style={{
          transform: 'rotate(-6deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <div
          style={{
            fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
            fontSize: '52px',
            fontWeight: 700,
            lineHeight: '0.88',
            letterSpacing: '3px',
            color: '#232323',
            textAlign: 'center'
          }}
        >
          <div>THANK</div>
          <div>YOU!</div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <DoodleHeart size={24} color="#D66865" strokeWidth={2.4} />
        </div>
      </motion.div>

      {/* Gratitude Copy in Centered Charcoal Handwritten Script */}
      <motion.div
        variants={copyItem}
        className="gratitude-copy flex flex-col items-center gpu-accelerated"
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '22px',
          fontWeight: 500,
          lineHeight: '1.38',
          color: '#232323',
          maxWidth: '280px',
          margin: '0 auto',
          letterSpacing: '0.4px'
        }}
      >
        {/* Stanza 1 */}
        <p style={{ marginBottom: '14px' }}>
          We are so happy<br />
          to have you with us<br />
          on this special day!
        </p>

        {/* Stanza 2 */}
        <p>
          Your love, support<br />
          and presence mean<br />
          the world to us.
        </p>
      </motion.div>

      {/* Closing Motif: Two Intertwined Hearts with Radiating Sketchbursts */}
      <motion.div
        variants={heartItem}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px' }}
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerHeartsConfetti}
          className="cursor-pointer gpu-accelerated"
          title="Tap with love!"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: '6px',
            cursor: 'pointer'
          }}
        >
          <IntertwinedHearts size={82} color="#232323" />
        </motion.button>

        {/* Subtle hint below intertwined hearts */}
        <motion.div
          variants={hintItem}
          style={{
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '12px',
            color: '#D66865',
            marginTop: '4px',
            opacity: 0.85
          }}
        >
          {hasCelebrated ? 'With all our love ♡ Aarav & Meera' : 'tap for love ♡'}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
