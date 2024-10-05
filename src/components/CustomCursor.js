import React from 'react';
import styled from 'styled-components';
import { useCustomCursor } from '../components/hooks/useCursorTracker';

const CustomCursor = ({ hovered }) => {
  const { x, y } = useCustomCursor();

  // Define cursor sizes for normal and hover states
  const cursorSize = hovered ? 32 : 24; // 24px for default, 32px on hover
  const offsetX = cursorSize / 2; // Half the size for accurate centering
  const offsetY = cursorSize / 2;

  return (
    <>
      {/* Custom Cursor */}
      <Cursor
        hovered={hovered}
        style={{ transform: `translate3d(${x - offsetX}px, ${y - offsetY}px, 0)` }}
        cursorSize={cursorSize} // Pass size for dynamic styling
      />
    </>
  );
};

export default CustomCursor;

// Styled custom cursor with size transitions
const Cursor = styled.div`
  position: absolute;
  width: ${({ cursorSize }) => cursorSize}px;
  height: ${({ cursorSize }) => cursorSize}px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  transition: 
    transform 0.3s ease, 
    background-color 0.3s ease, 
    border 0.3s ease,
    width 0.3s ease, 
    height 0.3s ease, 
    border-radius 0.3s ease; /* Smooth morph transition */

  /* Default state (solid purple circle) */
  background-color: ${({ hovered }) => (hovered ? 'transparent' : '#800080')}; /* Purple when not hovering */
  border: ${({ hovered }) => (hovered ? '4px solid white' : 'none')}; /* White border when hovering */

  /* Morph effect on hover */
  ${({ hovered }) =>
    hovered
      ? `
      width: 32px;
      height: 32px;
      border-radius: 16px; /* Stay a perfect circle */
      transform: scale(1.1); /* Slight enlargement for extra effect */
    `
      : `
      width: 18px;
      height: 18px;
      background-color: #800080;
      border-radius: 9px; /* Subtle square-like transformation */
      transform: scale(1); /* Reset scaling when not hovering */
    `}
`;
