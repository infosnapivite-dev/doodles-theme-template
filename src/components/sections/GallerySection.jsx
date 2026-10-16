import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleHeart, DoodleUnderline } from '../../assets/illustrations/Doodles';

/**
 * Section 2: Gallery Page with Polaroid Design Carousel
 * Placed immediately after Hero/Home Page.
 * - Polaroid frame with washi tape doodle and handwritten caption
 * - Swipeable & clickable carousel with smooth Framer Motion spring physics
 * - Hand-drawn arrow controls & progress indicator dots
 */
export default function GallerySection({ isVisible = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const polaroids = [
    {
      img: '/polaroids/moment1.jpg',
      caption: 'Golden hour walks with you ♡',
      date: 'August 2024',
      rotation: -2.5
    },
    {
      img: '/polaroids/moment2.jpg',
      caption: "The easiest 'YES' of my life 💍",
      date: 'December 2024',
      rotation: 2.2
    },
    {
      img: '/polaroids/moment3.jpg',
      caption: 'Sunset whispers & endless laughter ✨',
      date: 'January 2025',
      rotation: -1.8
    },
    {
      img: '/polaroids/moment4.jpg',
      caption: 'To all our tomorrows, cheers! 🥂',
      date: 'February 2025',
      rotation: 2.6
    }
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + polaroids.length) % polaroids.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 160 : -160,
      opacity: 0,
      scale: 0.9,
      rotate: dir > 0 ? 6 : -6
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: polaroids[currentIndex].rotation,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 26 },
        opacity: { duration: 0.3 },
        rotate: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 160 : -160,
      opacity: 0,
      scale: 0.9,
      rotate: dir < 0 ? 6 : -6,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 26 },
        opacity: { duration: 0.25 }
      }
    })
  };

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

  const stageItem = {
    hidden: { opacity: 0, scale: 0.92, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const controlsItem = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const hintItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.section
      className="mobile-screen-section gallery-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Header Lockup: Tilted (-6deg) "OUR MOMENTS ♡" */}
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
              fontSize: '46px',
              fontWeight: 700,
              lineHeight: '0.92',
              letterSpacing: '3px',
              color: '#232323'
            }}
          >
            OUR MOMENTS
          </h2>
          <DoodleHeart size={22} color="#D66865" strokeWidth={2.4} />
        </div>
        <div style={{ marginTop: '2px' }}>
          <DoodleUnderline width={140} height={10} color="#232323" />
        </div>
      </motion.div>

      {/* Main Polaroid Carousel Stage */}
      <motion.div
        variants={stageItem}
        className="polaroid-stage relative flex items-center justify-center gpu-accelerated"
        style={{
          width: '100%',
          maxWidth: '280px',
          height: '350px',
          position: 'relative',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100 || offset.x < -60) {
                paginate(1);
              } else if (swipe > 100 || offset.x > 60) {
                paginate(-1);
              }
            }}
            className="polaroid-card cursor-grab active:cursor-grabbing gpu-accelerated"
            style={{
              position: 'absolute',
              width: '240px',
              backgroundColor: '#FFFFFF',
              borderRadius: '2px',
              boxShadow: '0 12px 28px rgba(35, 35, 35, 0.14), 0 3px 8px rgba(0,0,0,0.06)',
              padding: '10px 10px 20px 10px',
              boxSizing: 'border-box',
              border: '1px solid rgba(35, 35, 35, 0.08)'
            }}
          >
            {/* Washi Tape Doodle at Top Center */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%) rotate(1deg)',
                width: '64px',
                height: '18px',
                backgroundColor: 'rgba(239, 207, 212, 0.75)',
                borderLeft: '2px dashed rgba(214, 104, 101, 0.3)',
                borderRight: '2px dashed rgba(214, 104, 101, 0.3)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            {/* Photo Inside Polaroid Frame */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundColor: '#EBE4D8',
                position: 'relative'
              }}
            >
              <img
                src={polaroids[currentIndex].img}
                alt={polaroids[currentIndex].caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Handwritten Caption on Polaroid Bottom Chin */}
            <div
              style={{
                marginTop: '10px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px'
              }}
            >
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#232323',
                  lineHeight: '1.2'
                }}
              >
                {polaroids[currentIndex].caption}
              </span>
              <span
                style={{
                  fontFamily: "'Patrick Hand', cursive",
                  fontSize: '12px',
                  color: '#D66865',
                  letterSpacing: '0.5px'
                }}
              >
                {polaroids[currentIndex].date}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Controls & Pagination Dock */}
      <motion.div
        variants={controlsItem}
        className="carousel-controls flex items-center justify-center gap-4 gpu-accelerated"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '260px',
          margin: '0 auto',
          marginBottom: '6px'
        }}
      >
        {/* Prev Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="doodle-arrow-btn"
          title="Previous photo"
          style={{
            background: 'transparent',
            border: '1.5px solid #232323',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '18px',
            color: '#232323',
            lineHeight: '1',
            padding: 0,
            transition: 'all 0.2s ease'
          }}
        >
          ←
        </button>

        {/* Indicator Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {polaroids.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: idx === currentIndex ? '#D66865' : 'rgba(35, 35, 35, 0.25)',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.25s ease'
              }}
            />
          ))}
        </div>

        {/* Next Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(1)}
          className="doodle-arrow-btn"
          title="Next photo"
          style={{
            background: 'transparent',
            border: '1.5px solid #232323',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontFamily: "'Patrick Hand', cursive",
            fontSize: '18px',
            color: '#232323',
            lineHeight: '1',
            padding: 0,
            transition: 'all 0.2s ease'
          }}
        >
          →
        </button>
      </motion.div>

      {/* Swipe / Tap Hint */}
      <motion.div
        variants={hintItem}
        style={{
          fontFamily: "'Patrick Hand', cursive",
          fontSize: '11px',
          color: '#D66865',
          opacity: 0.85
        }}
      >
        swipe or tap arrows to flip photos ♡
      </motion.div>
    </motion.section>
  );
}
