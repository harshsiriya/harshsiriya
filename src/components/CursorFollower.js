'use client';
import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Hide cursor on screen widths < 1024px (tablet & mobile)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setShowCursor(mediaQuery.matches);

    const handleResize = () => setShowCursor(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    >
      <div className="w-5 h-5 bg-yellow-400 rounded-full opacity-80 mix-blend-difference" />
    </div>
  );
};

export default CursorFollower;
