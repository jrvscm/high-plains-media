import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the logo pulsing and scaling out smoothly
const logoPulseAndScaleOut = keyframes`
  0% {
    transform: scale(1);  /* Start at full size */
    opacity: 1;  /* Fully visible */
  }
  25% {
    transform: scale(1.2);  /* Slightly enlarge for pulse effect */
    opacity: 1;  /* Fully visible */
  }
  100% {
    transform: scale(0);  /* Uniformly scale down to 0 */
    opacity: 0;  /* Fade out */
  }
`;

// Keyframes for the splash screen sliding down
const slideDown = keyframes`
  0% {
    transform: translateY(0); /* Start in normal position */
  }
  100% {
    transform: translateY(100%); /* Slide down completely */
  }
`;

// Styled component for the splash screen
const SplashScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondaryDark};
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ $isVisible }) => !$isVisible && slideDown} 500ms cubic-bezier(0.77, 0, 0.175, 1) forwards;  // Slide down smoothly
`;

// Styled component for the logo with smoother pulsing and scaling animation
const LogoContainer = styled.div`
  animation: ${logoPulseAndScaleOut} 1000ms cubic-bezier(0.77, 0, 0.175, 1) forwards;  // Logo pulses and scales out smoothly
  animation-delay: 1000ms;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 30px rgb(164, 54, 227));  /* Apply drop shadow effect */
`;

const useSplashScreen = (logoSrc) => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);  // Start sliding down and shrinking after the pulse
    }, 1500);  // Matches the total animation time

    return () => clearTimeout(timer);
  }, []);

  // Return the splash screen JSX that can be inserted into any component
  const SplashComponent = (
    <SplashScreen $isVisible={isSplashVisible}>
      <LogoContainer>
        <Logo src={logoSrc} alt="Logo" />
      </LogoContainer>
    </SplashScreen>
  );

  return {
    isSplashVisible,
    SplashComponent,
  };
};

export default useSplashScreen;
