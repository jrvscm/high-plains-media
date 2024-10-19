import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HamburgerButton = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryLight}; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1001;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  div {
    width: 30px;
    height: 2px;
    background-color: white;
    position: relative;
    transition: all 0.3s ease;

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

    ${({ open }) =>
      open &&
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
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`;

const SlideInNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryDark}; 
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;

  ul {
    padding: 100px 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
  transition: color 0.3s ease, transform 0.3s ease;
  margin: 15px 0px;
  
  ${({ $active }) => !$active && `filter: brightness(70%);`}
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0%'};
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryLight}; /* Corrected hover color */
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    filter: brightness(100%);
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} open={isOpen}>
        <div open={isOpen} />
      </HamburgerButton>
      <Overlay open={isOpen} onClick={() => setIsOpen(false)} />
      <SlideInNav open={isOpen}>
        <ul>
          <li>
            <StyledLink href="/" $active={asPath === '/'}>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/about" $active={asPath === '/about'}>
              About Us
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/projects" $active={asPath.includes('/projects')}>
              Our Projects
            </StyledLink>
          </li>
          <li>
            <StyledLink href="/contact" $active={asPath === '/contact'}>
              Contact Us
            </StyledLink>
          </li>
        </ul>
      </SlideInNav>
    </>
  );
};

export default HamburgerMenu;
