'use client'

import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LenisLayout = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll = null;

    const initLocomotiveScroll = () => {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Add more options as needed
      });
    };

    initLocomotiveScroll();

    // Handle window resize to refresh Locomotive Scroll
    const handleResize = () => {
      if (scroll) {
        scroll.update();
      } else {
        initLocomotiveScroll();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (scroll) {
        scroll.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main ref={scrollRef} style={{ minHeight: '100vh' }}>
      {children}
    </main>
  );
};

export default LenisLayout;