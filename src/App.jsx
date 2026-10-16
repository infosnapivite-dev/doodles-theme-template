import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import IPhoneFrame from './components/Chassis/IPhoneFrame';
import HeroInvited from './components/sections/HeroInvited';
import GallerySection from './components/sections/GallerySection';
import WhenAndWhere from './components/sections/WhenAndWhere';
import ScheduleSection from './components/sections/ScheduleSection';
import DressCodeSection from './components/sections/DressCodeSection';
import CountdownSection from './components/sections/CountdownSection';
import ThankYouSection from './components/sections/ThankYouSection';
import useSmoothScroll from './hooks/useSmoothScroll';
import './styles/iphone-mockup.css';
import './index.css';

export default function App() {
  const scrollRef = useRef(null);
  const contentRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(676);
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState({ 0: true });

  // Measure and track exact screen height of the container
  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth <= 600;
      if (isMobile) {
        setScreenHeight(window.innerHeight);
      } else if (scrollRef.current) {
        setScreenHeight(scrollRef.current.clientHeight || 676);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Compute active section and section visibility with hysteresis latch:
  // - Starts entering when >= 40% in view (or when centered)
  // - Once visible, stays visible until it has almost completely left the viewport (ratio <= 0.08)
  // - Sections never appear prematurely or on initial load
  const updateActiveSection = useCallback(() => {
    const isMobile = window.innerWidth <= 600;
    const content = contentRef.current;
    if (!content) return;

    const sections = Array.from(content.children);
    if (!sections.length) return;

    const viewportHeight = isMobile
      ? window.innerHeight
      : (scrollRef.current?.clientHeight || 676);
    const rootTop = !isMobile && scrollRef.current
      ? scrollRef.current.getBoundingClientRect().top
      : 0;
    const viewportCenter = viewportHeight / 2;

    let bestIndex = 0;
    let minDistance = Infinity;

    // Find the closest section to the viewport center
    sections.forEach((sec, idx) => {
      const rect = sec.getBoundingClientRect();
      const secTop = !isMobile ? rect.top - rootTop : rect.top;
      const secHeight = rect.height || viewportHeight;
      const secCenter = secTop + secHeight / 2;
      const dist = Math.abs(secCenter - viewportCenter);
      if (dist < minDistance) {
        minDistance = dist;
        bestIndex = idx;
      }
    });

    setActiveSection(bestIndex);

    setVisibleSections((prevVisible) => {
      const nextVisible = {};

      sections.forEach((sec, idx) => {
        const rect = sec.getBoundingClientRect();
        const secTop = !isMobile ? rect.top - rootTop : rect.top;
        const secBottom = !isMobile ? rect.bottom - rootTop : rect.bottom;
        const secHeight = rect.height || viewportHeight;

        const visibleTop = Math.max(0, secTop);
        const visibleBottom = Math.min(viewportHeight, secBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const ratio = visibleHeight / secHeight;

        const wasVisible = !!prevVisible[idx];

        if (idx === bestIndex) {
          // The currently centered section is always visible
          nextVisible[idx] = true;
        } else if (wasVisible) {
          // If already visible, keep it visible until it has left the viewport
          if (ratio > 0.08) {
            nextVisible[idx] = true;
          }
        } else {
          // If not yet visible, only trigger when it is substantially entering the screen
          if (ratio >= 0.40) {
            nextVisible[idx] = true;
          }
        }
      });

      // Quick equality check to avoid re-renders
      const prevKeys = Object.keys(prevVisible).filter((k) => prevVisible[k]);
      const nextKeys = Object.keys(nextVisible).filter((k) => nextVisible[k]);
      if (
        prevKeys.length === nextKeys.length &&
        prevKeys.every((k) => nextVisible[k])
      ) {
        return prevVisible;
      }

      return nextVisible;
    });
  }, []);

  // Initialize Lenis smooth scroll and wire up scroll callback
  const lenisRef = useSmoothScroll(scrollRef, contentRef, updateActiveSection);

  // Wire up native scroll event listeners and run initial check on mount
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const target = isMobile ? window : scrollRef.current;
    if (!target) return;

    target.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => {
      target.removeEventListener('scroll', updateActiveSection);
    };
  }, [updateActiveSection]);

  // Smooth jump to any of the 7 sections
  const scrollToSection = useCallback((index) => {
    const isMobile = window.innerWidth <= 600;
    const sections = contentRef.current ? Array.from(contentRef.current.children) : [];
    const targetEl = sections[index];

    setActiveSection(index);
    setVisibleSections((prev) => ({ ...prev, [index]: true }));

    if (!targetEl) return;

    if (lenisRef.current) {
      try {
        lenisRef.current.scrollTo(targetEl, {
          duration: 1.0,
          force: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
        return;
      } catch (err) {
        console.warn('Lenis scroll failed, falling back:', err);
      }
    }

    if (isMobile) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [lenisRef]);

  // Keyboard navigation (ArrowUp / ArrowDown / PageUp / PageDown / Spacebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrollToSection(Math.min(6, activeSection + 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(Math.max(0, activeSection - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(6);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, scrollToSection]);

  const sectionNames = [
    'Invited',
    'Moments',
    'When & Where',
    'Schedule',
    'Dress Code',
    'Countdown',
    'Thank You'
  ];

  return (
    <div className="desktop-viewport-container">

      {/* iPhone 15 Pro Chassis Frame with 3D Parallax Tilt */}
      <IPhoneFrame>
        {/* Scrollable Viewport with Cream Paper Texture */}
        <main
          ref={scrollRef}
          className="inner-app-scroll no-scrollbar paper-surface gpu-accelerated"
          style={{
            '--phone-screen-height': screenHeight ? `${screenHeight}px` : '676px',
            backgroundColor: '#FDFBF7',
            padding: 0,
            margin: 0
          }}
        >
          {/* Scroll Content Track wrapping all 7 sections for proper scroll limits */}
          <div ref={contentRef} className="scroll-content-track">
            {/* Section 1: Hero & Save the Date ("You're Invited") */}
            <HeroInvited
              isVisible={!!visibleSections[0]}
              onScrollNext={() => scrollToSection(1)}
            />

            {/* Section 2: Our Moments Gallery with Polaroid Carousel */}
            <GallerySection
              isVisible={!!visibleSections[1]}
            />

            {/* Section 3: Ceremony Time & Venue ("When & Where?") */}
            <WhenAndWhere
              isVisible={!!visibleSections[2]}
            />

            {/* Section 4: Schedule of Events ("Schedule") */}
            <ScheduleSection
              isVisible={!!visibleSections[3]}
            />

            {/* Section 5: Wardrobe & Attire ("Dress Code") */}
            <DressCodeSection
              isVisible={!!visibleSections[4]}
            />

            {/* Section 6: Live Countdown ("Counting Down") */}
            <CountdownSection
              isVisible={!!visibleSections[5]}
            />

            {/* Section 7: Finale ("Thank You!") */}
            <ThankYouSection
              isVisible={!!visibleSections[6]}
            />
          </div>
        </main>

        {/* Subtle Side Screen Progress Indicator (7 Dots inside phone screen) */}
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="section-indicator-dock gpu-accelerated"
          aria-label="Section navigation"
          data-no-drag="true"
        >
          {sectionNames.map((name, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToSection(idx)}
                aria-label={`Jump to ${name}`}
                aria-current={isActive ? 'true' : undefined}
                className={`progress-dot-btn ${isActive ? 'active' : ''}`}
                data-no-drag="true"
              >
                <span className="progress-dot-indicator" />
                <span className="progress-dot-tooltip">
                  {name}
                </span>
              </button>
            );
          })}
        </motion.nav>
      </IPhoneFrame>
    </div>
  );
}
