import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * Custom smooth scroll hook powered by Lenis
 * - Scoped to inner mockup container on desktop
 * - Scoped to window on mobile (<= 600px)
 * - Enables scrolling anywhere on the desktop canvas (forwards wheel events to the phone)
 * - Supports drag-to-scroll (touch simulation) inside the phone
 */
export default function useSmoothScroll(wrapperRef, contentRef, onScrollCallback) {
  const lenisRef = useRef(null);
  const onScrollRef = useRef(onScrollCallback);

  useEffect(() => {
    onScrollRef.current = onScrollCallback;
  }, [onScrollCallback]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    const wrapper = isMobile ? window : wrapperRef?.current;
    const content = isMobile ? document.documentElement : contentRef?.current;

    if (!wrapper) return;

    // Initialize Lenis with proper wrapper and content
    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Forward Lenis scroll events to callback
    const handleLenisScroll = (e) => {
      onScrollRef.current?.(e);
    };
    lenis.on('scroll', handleLenisScroll);

    // RAF loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global desktop wheel forwarding:
    // If the user scrolls their mouse wheel anywhere on the desktop (outside the phone frame),
    // forward the scroll to the phone's Lenis instance!
    const handleGlobalWheel = (e) => {
      if (window.innerWidth <= 600) return;
      if (!lenisRef.current) return;

      // If wheel happened outside the phone frame, scroll the phone!
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        e.preventDefault();
        lenisRef.current.scrollTo(lenisRef.current.scroll + e.deltaY * 0.9, {
          immediate: false
        });
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });

    // Mouse drag-to-scroll simulation inside the phone
    let isDragging = false;
    let startY = 0;
    let startScroll = 0;

    const handleMouseDown = (e) => {
      if (window.innerWidth <= 600) return;
      // Only drag if left click and not clicking a button/link/progress dot
      if (e.button !== 0) return;
      if (e.target.closest('button, a, input, [data-no-drag="true"], .section-indicator-dock, .progress-dot-btn')) return;

      isDragging = true;
      startY = e.clientY;
      startScroll = lenisRef.current ? lenisRef.current.scroll : (wrapperRef.current?.scrollTop || 0);
      if (wrapperRef.current) {
        wrapperRef.current.style.cursor = 'grabbing';
        wrapperRef.current.style.userSelect = 'none';
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = startY - e.clientY;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(startScroll + deltaY * 1.2, { immediate: true });
      } else if (wrapperRef.current) {
        wrapperRef.current.scrollTop = startScroll + deltaY;
      }
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      if (wrapperRef.current) {
        wrapperRef.current.style.cursor = '';
        wrapperRef.current.style.userSelect = '';
      }
    };

    const wrapperEl = wrapperRef?.current;
    if (wrapperEl && !isMobile) {
      wrapperEl.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', handleGlobalWheel);
      if (wrapperEl && !isMobile) {
        wrapperEl.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
      lenis.off('scroll', handleLenisScroll);
      lenis.destroy();
    };
  }, [wrapperRef, contentRef]);

  return lenisRef;
}
