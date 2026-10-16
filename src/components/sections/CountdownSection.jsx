import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DoodleHeart, DoodleUnderline, DoodleArrow, SketchBurst } from '../../assets/illustrations/Doodles';

import { WEDDING_DATE, generateCalendar } from '../../utils/weddingDate';

/**
 * Proper Month Calendar Grid
 * - Real calendar grid dynamically generated for the wedding month
 * - Weekday headers: S M T W T F S
 * - Wedding day specially highlighted with a hand-drawn coral heart
 * - Top binder spiral rings
 */
function ProperCalendar({ targetDate = WEDDING_DATE }) {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const { monthName, weekday, weddingDay, calendarDays } = generateCalendar(targetDate);

  return (
    <div
      className="proper-calendar-card gpu-accelerated"
      style={{
        width: '100%',
        maxWidth: '250px',
        backgroundColor: '#FFFFFF',
        border: '1.5px solid #232323',
        borderRadius: '8px',
        padding: '7px 10px 8px 10px',
        margin: '0 auto',
        position: 'relative',
        boxShadow: '0 6px 16px rgba(35, 35, 35, 0.08), 0 2px 4px rgba(214, 104, 101, 0.05)',
        transform: 'rotate(-1.5deg)'
      }}
    >
      {/* Calendar Top Spiral Rings */}
      <div
        style={{
          position: 'absolute',
          top: '-9px',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '0 20px',
          pointerEvents: 'none'
        }}
      >
        {[0, 1, 2, 3].map((ring) => (
          <div
            key={ring}
            style={{
              width: '7px',
              height: '13px',
              border: '1.8px solid #232323',
              borderRadius: '3px',
              backgroundColor: '#FDFBF7'
            }}
          />
        ))}
      </div>

      {/* Header: Month & Year */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          paddingBottom: '4px',
          marginBottom: '5px',
          borderBottom: '1.2px dashed rgba(35, 35, 35, 0.2)'
        }}
      >
        <span
          style={{
            fontFamily: "'Patrick Hand', 'Amatic SC', cursive",
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: '#D66865'
          }}
        >
          {monthName} {targetDate.getFullYear()}
        </span>
        <DoodleHeart size={13} color="#D66865" strokeWidth={2.2} />
      </div>

      {/* Days of Week Header Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          textAlign: 'center',
          fontFamily: "'Patrick Hand', cursive",
          fontSize: '11px',
          fontWeight: 700,
          color: '#232323',
          marginBottom: '3px'
        }}
      >
        {daysOfWeek.map((day, idx) => (
          <span key={idx} style={{ opacity: 0.75 }}>
            {day}
          </span>
        ))}
      </div>

      {/* Dates Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          rowGap: '2px',
          textAlign: 'center',
          fontFamily: "'Patrick Hand', cursive",
          fontSize: '12px',
          color: '#232323'
        }}
      >
        {calendarDays.map((date, idx) => {
          if (!date) {
            return <span key={idx} />;
          }

          const isWeddingDay = date === weddingDay;

          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20px',
                position: 'relative'
              }}
            >
              {isWeddingDay ? (
                <div
                  className="relative flex items-center justify-center animate-pulse-gentle"
                  style={{
                    position: 'relative',
                    width: '24px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {/* Circled Heart around wedding day */}
                  <svg
                    viewBox="0 0 32 32"
                    fill="rgba(214, 104, 101, 0.16)"
                    stroke="#D66865"
                    strokeWidth="2.2"
                    style={{
                      position: 'absolute',
                      inset: '-2px',
                      width: '28px',
                      height: '26px',
                      overflow: 'visible'
                    }}
                  >
                    <path d="M16 28 C14 26, 3 19, 3 11 C3 6.5, 6.5 3, 11 3 C13.5 3, 15 4.5, 16 6 C17 4.5, 18.5 3, 21 3 C25.5 3, 29 6.5, 29 11 C29 19, 18 26, 16 28 Z" />
                  </svg>
                  <span
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      fontWeight: 800,
                      color: '#D66865',
                      fontSize: '12.5px'
                    }}
                  >
                    {date}
                  </span>
                </div>
              ) : (
                <span style={{ opacity: 0.85 }}>{date}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Little handwritten footer note */}
      <div
        style={{
          textAlign: 'center',
          fontFamily: "'Caveat', cursive",
          fontSize: '13.5px',
          color: '#D66865',
          marginTop: '3px',
          fontWeight: 600
        }}
      >
        The Big Day ♡ {weekday}, 2:30 PM
      </div>
    </div>
  );
}

/**
 * Section: Countdown Page ("Counting Down")
 * Placed after Dress Code and before Thank You.
 * - Live real-time countdown synchronized with the calendar date
 * - Dynamic Month Calendar Grid with wedding day circled in a coral heart
 * - 4 tactile doodle countdown cards (DAYS, HOURS, MINS, SECS)
 * - "ADD TO CALENDAR" interactive button
 */
export default function CountdownSection({ isVisible = true }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days: totalDays, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Calendar event link formatted with actual wedding date
  const isoDate = WEDDING_DATE.toISOString().replace(/[-:]/g, '').slice(0, 8);
  const googleCalendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent("Aarav & Meera's Wedding") +
    `&dates=${isoDate}T090000Z/${isoDate}T180000Z` +
    '&details=' + encodeURIComponent("Celebrating the wedding of Aarav & Meera at The Gulmohar Estate, Alibaug.") +
    '&location=' + encodeURIComponent("The Gulmohar Estate, Gulmohar Lane, Alibaug, MH 402201");

  // Format real days (padded to 2 digits, e.g. 05, 30, 99)
  const displayDays = String(timeLeft.days).padStart(2, '0');
  const displayHours = String(timeLeft.hours).padStart(2, '0');
  const displayMinutes = String(timeLeft.minutes).padStart(2, '0');
  const displaySeconds = String(timeLeft.seconds).padStart(2, '0');

  const timeUnits = [
    { label: 'days', value: displayDays },
    { label: 'hours', value: displayHours },
    { label: 'mins', value: displayMinutes },
    { label: 'secs', value: displaySeconds }
  ];

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

  const subtitleItem = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const calendarItem = {
    hidden: { opacity: 0, scale: 0.93, y: 14 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const countdownGridItem = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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
      className="mobile-screen-section countdown-section text-center gpu-accelerated"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      {/* Header Lockup: Tilted (-5deg) "COUNTING DOWN ♡" */}
      <motion.div
        variants={headerItem}
        className="header-lockup flex flex-col items-center gpu-accelerated"
        style={{
          transform: 'rotate(-5deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h2
            style={{
              fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
              fontSize: '44px',
              fontWeight: 700,
              lineHeight: '0.92',
              letterSpacing: '3px',
              color: '#232323'
            }}
          >
            COUNTING DOWN
          </h2>
          <DoodleHeart size={22} color="#D66865" strokeWidth={2.4} />
        </div>
        <div style={{ marginTop: '2px' }}>
          <DoodleUnderline width={145} height={10} color="#232323" />
        </div>
      </motion.div>

      {/* Subtitle in Coral Script */}
      <motion.div
        variants={subtitleItem}
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '23px',
          fontWeight: 600,
          color: '#D66865',
          letterSpacing: '0.8px',
          marginTop: '-4px'
        }}
      >
        Until we say "I do"
      </motion.div>

      {/* Proper May 2035 Month Calendar */}
      <motion.div variants={calendarItem} style={{ margin: '2px 0' }}>
        <ProperCalendar />
      </motion.div>

      {/* 4-Box Countdown Units Grid (All in exactly 2 numbers) */}
      <motion.div
        variants={countdownGridItem}
        className="countdown-grid flex items-center justify-center gap-2 gpu-accelerated"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          maxWidth: '290px',
          margin: '0 auto'
        }}
      >
        {timeUnits.map((unit, idx) => (
          <motion.div
            key={idx}
            variants={cardItem}
            whileHover={{ y: -2, scale: 1.04 }}
            className="countdown-card gpu-accelerated"
            style={{
              flex: '1',
              maxWidth: '64px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #232323',
              borderRadius: '6px',
              padding: '7px 4px 5px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 3px 8px rgba(35, 35, 35, 0.08)',
              position: 'relative'
            }}
          >
            {/* Value (Always 2 numbers) */}
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '24px',
                fontWeight: 700,
                color: '#232323',
                lineHeight: '1'
              }}
            >
              {unit.value}
            </span>

            {/* Label */}
            <span
              style={{
                fontFamily: "'Patrick Hand', cursive",
                fontSize: '12px',
                color: '#D66865',
                letterSpacing: '0.5px',
                marginTop: '2px',
                lineHeight: '1'
              }}
            >
              {unit.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Block: Add to Calendar CTA + Note */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Interactive CTA Button: ADD TO CALENDAR */}
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
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="doodle-btn"
            id="btn-add-calendar"
            title="Add Wedding to Google Calendar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '7px 14px',
              width: '100%',
              borderRadius: '6px'
            }}
          >
            <span style={{ fontSize: '15px' }}>📅</span>
            <span
              style={{
                fontFamily: "'Amatic SC', 'Patrick Hand', cursive",
                fontSize: '21px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#232323'
              }}
            >
              ADD TO CALENDAR
            </span>
            <DoodleArrow size={17} color="#232323" />
          </a>

          {/* Right Sketchburst */}
          <div style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)' }}>
            <SketchBurst direction="right" size={20} color="#232323" />
          </div>
        </motion.div>

        {/* Bottom Margin Note */}
        <motion.div
          variants={noteItem}
          className="w-full text-right gpu-accelerated"
          style={{
            width: '100%',
            maxWidth: '235px',
            textAlign: 'right',
            marginTop: '4px',
            paddingRight: '2px'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              transform: 'rotate(-8deg)',
              fontFamily: "'Patrick Hand', 'Amatic SC', cursive",
              fontSize: '11px',
              fontWeight: 600,
              color: '#232323',
              letterSpacing: '0.8px',
              lineHeight: '1.05'
            }}
          >
            <span>FOREVER BEGINS</span>
            <span>VERY SOON!</span>
            <div style={{ marginTop: '1px' }}>
              <DoodleHeart size={10} color="#232323" strokeWidth={2} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
