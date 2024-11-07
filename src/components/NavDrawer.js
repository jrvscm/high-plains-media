import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThreeDUfo from '../components/ThreeDAnimation';
import useResponsive from '../components/hooks/useResponsive';
import { device } from '../styles/breakpoints';

const HamburgerButton = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100; 
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover .circle {
    transform: scale(1); 
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: ${({ $open, $isMobile }) => ($open || $isMobile ? '0 16px 32px rgba(0, 0, 0, 0.9)' : '0 4px 10px rgba(0, 0, 0, 0.1)')};
  transform: scale(${({ $open, $isMobile }) => ($open || $isMobile ? 1 : 0)});
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: -1;
  opacity: ${({ $open, $isMobile }) => ($open || $isMobile ? 1 : 0)};
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease;
  z-index: 10;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${({ $open }) =>
    $open &&
    `
    background-color: transparent;

    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ $open }) => ($open ? '1' : '0')};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000; 
`;

const SlideInNav = styled.nav`
  position: fixed;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryDark}; 
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transform: ${({ $open }) => ($open ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};
  transition: transform 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }

  ul {
    padding: 100px 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    @media ${device.tablet} {
        padding: 150px 20px 0px;
    }
  }
`;

const Li = styled.li`
  position: relative; 
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0%')};
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%; 
  }

  &:hover {
    a { 
      filter: brightness(100%);
    }
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  text-decoration: none;
  position: relative;
  transition: color, filter, 0.3s ease, transform 0.3s ease;
  margin: 15px 0px;
  
  ${({ $active }) => !$active && `filter: brightness(70%);`}
`;

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { asPath } = router;
    const { isMobile } = useResponsive();

  // Close nav when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false); // Close the menu
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup listener on component unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <Circle $open={isOpen} $isMobile={isMobile} className="circle" />
        <HamburgerIcon $open={isOpen} $isMobile={isMobile} />
      </HamburgerButton>
      <Overlay $open={isOpen} onClick={() => setIsOpen(false)} />
      <SlideInNav $open={isOpen}>
        <ul>
          <Li $active={asPath === '/'}>
            <StyledLink href="/" $active={asPath === '/'}>
              Our Projects
            </StyledLink>
          </Li>
          <Li $active={asPath === '/about'}>
            <StyledLink href="/about" $active={asPath === '/about'}>
              About
            </StyledLink>
          </Li>
          <Li $active={asPath === '/contact'}>
            <StyledLink href="/contact" $active={asPath === '/contact'}>
              Contact
            </StyledLink>
          </Li>
        </ul>
        <ThreeDUfo setHovered={() => {/*noop*/}} isMobile={isMobile} />
      </SlideInNav>
    </>
  );
};

export default HamburgerMenu;
