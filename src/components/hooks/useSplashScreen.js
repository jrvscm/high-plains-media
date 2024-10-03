import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { 
    transform: scale(1); 
    filter: brightness(1) hue-rotate(0deg); /* Normal brightness, normal hue */
  }
  50% { 
    transform: scale(1.1); 
    svg {
        filter: brightness(1.3) hue-rotate(15deg); /* Brighter and slight hue shift */
    }
  }
  100% { 
    transform: scale(1); 
    filter: brightness(1) hue-rotate(0deg); /* Back to normal */
  }
`;

// Styled component for the splash screen
const SplashScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(100%)')}; // Slide down when hidden
`;

// Styled component for the logo with pulsing animation
const LogoContainer = styled.div`
  animation: ${pulse} 1.5s infinite;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const useSplashScreen = (logoSrc, duration = 3000) => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, duration); // Set the splash screen duration

    return () => clearTimeout(timer);
  }, [duration]);

  // Return the splash screen JSX that can be inserted into any component
  const SplashComponent = (
    <SplashScreen $isVisible={isSplashVisible}>
      <LogoContainer>
        <Logo src={logoSrc} alt="Logo" />
      </LogoContainer>
    </SplashScreen>
  );

  return {
    isSplashVisible, // To conditionally render the main content
    SplashComponent, // JSX for the splash screen to render
  };
};

export default useSplashScreen;
