import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const IconButton = ({ onClick, show }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  useEffect(() => {
    if(show !== isOpen) {
        setIsOpen(show);
    }
  }, [show]);

  // Spring animations for the menu and close icons
  const menuAnimation = useSpring({
    opacity: isOpen ? 0 : 1,
    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
    config: { tension: 200, friction: 15 },
  });

  const closeAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'rotate(0deg)' : 'rotate(-45deg)',
    config: { tension: 200, friction: 15 },
  });

  return (
    <Button onClick={toggleMenu}>
      <IconWrapper>
        {/* Menu Icon */}
        <animated.svg
          style={menuAnimation}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </animated.svg>
        
        {/* Close Icon */}
        <animated.svg
          style={closeAnimation}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 4.5l15 15M4.5 19.5l15-15" />
        </animated.svg>
      </IconWrapper>
    </Button>
  );
};

export default IconButton;

// Styled component for the button
const Button = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  z-index:1050;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #6b47dc;
  border: none;
  cursor: pointer;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #583bbd;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;

  svg {
    position: absolute;
  }
`;
