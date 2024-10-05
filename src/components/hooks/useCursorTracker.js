import { useState, useEffect } from 'react';

export const useCustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  const speed = 0.9; // Adjust for smoother or tighter tracking

  // Capture mouse movement and track clientX and clientY
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY }); // Track mouse within the viewport
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Track scroll position to adjust cursor for scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos({
        x: window.scrollX,  // Capture horizontal scroll offset
        y: window.scrollY,  // Capture vertical scroll offset
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth cursor movement
  useEffect(() => {
    const moveCursor = () => {
      setCursorPos((prevPos) => ({
        x: prevPos.x + ((mousePos.x + scrollPos.x) - prevPos.x) * speed, // Account for scroll offset in X
        y: prevPos.y + ((mousePos.y + scrollPos.y) - prevPos.y) * speed, // Account for scroll offset in Y
      }));
      requestAnimationFrame(moveCursor); // Smooth movement
    };

    moveCursor();
  }, [mousePos, scrollPos]);

  return cursorPos;
};
