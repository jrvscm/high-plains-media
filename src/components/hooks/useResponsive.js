// useResponsive.js
import { useState, useEffect } from 'react';
import breakpoints from '../../styles/breakpoints';

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return {
    isMobile: windowSize.width < breakpoints.tablet,
    isTablet: windowSize.width >= breakpoints.tablet && windowSize.width < breakpoints.laptop,
    isDesktop: windowSize.width >= breakpoints.laptop,
    // Add more breakpoint checks as needed
  };
};

export default useResponsive;