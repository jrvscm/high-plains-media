import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AlienRingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  transform: translate(-50%, -50%);
  pointer-events: none;  /* Ensures it doesn’t interfere with grid interactions */
  animation: ${rotate} 60s linear infinite;  /* Slow continuous rotation */
  z-index: 0;  /* Place it behind the grid items */
`;

const AlienRing = () => (
  <AlienRingContainer>
    <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="alienRingGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: 'rgba(80, 0, 255, 0.2)', stopOpacity: 0 }} />
          <stop offset="30%" style={{ stopColor: 'rgba(80, 0, 255, 0.6)', stopOpacity: 0.4 }} />
          <stop offset="70%" style={{ stopColor: 'rgba(57, 255, 20, 0.6)', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(57, 255, 20, 0)', stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="140" fill="url(#alienRingGradient)" />
      <circle cx="150" cy="150" r="110" fill="none" stroke="rgba(57, 255, 20, 0.8)" strokeWidth="2" strokeDasharray="5, 5" />
      <circle cx="150" cy="150" r="125" fill="none" stroke="rgba(80, 0, 255, 0.6)" strokeWidth="3" strokeDasharray="10, 10" />
    </svg>
  </AlienRingContainer>
);

export default AlienRing;