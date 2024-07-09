import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useScrollPosition } from './hooks/ScrollPosition';
import useResponsive from '../components/hooks/useResponsive';
import { useHash } from '../components/contexts/HashContext';
import mainLogo from '/public/high-plains-logo.svg'

const StyledContainer = styled(Container)`
  background: ${({ theme }) => theme.colors.blue};
`;

const Stackable = styled(Container)`
  flex-direction: ${({ $isOpen }) => $isOpen ? 'column' : 'row'};
`;

const UpperNav = styled.div`
  ${({ theme }) => theme.fonts.font14Regular};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  height: 40px;
  width: 100%;
  margin-top: 0;
  transition: all 0.3s ease;
`;

const LowerNav = styled.div`
  width: 100%;
  padding: 20px 0px;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.white};
  ${({ $isScrolled }) => $isScrolled && `
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    padding: 10px 0;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  `}
`;

const StyledNavbar = styled(Navbar)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  padding-top: 0px;
  padding-bottom: 0px;
  z-index: 5;
`;

const IconGroup = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 4px;
  }
  svg,
  a {
    text-decoration: none;
    color: rgba(255,255,255,.6);
    transition: all .25s ease;
    color: #fff;
  }
  &:hover {
    svg,
    a {
      cursor: pointer;
    }
    a {
      text-decoration: underline;
    }
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    svg {
      color: #fff;
    }
  }
  svg {
    cursor: pointer;
    color: rgba(255,255,255,.6);
    transition: all .25s ease;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.blue};
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  ${({theme}) => theme.fonts.font30Bold};

  span {
    color: ${({theme}) => theme.colors.blue};
  }
`;

const StyledLink = styled(Link)`
  ${({theme}) => theme.fonts.fontNavLink};
`;

const List = styled.ul`
  display: flex;
  flex-direction: ${({ $isOpen }) => ($isOpen ? 'column' : 'row')};
  align-items: ${({ $isOpen }) => ($isOpen ? 'center' : '')};
  padding: ${({ $isOpen }) => ($isOpen ? '0px' : '')};
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  padding: 10px 0;
  transition: 0.3s;

  &:not(:last-of-type) {
    margin-right: 20px;

    ${({ $isOpen }) => $isOpen && css`margin-right: 0px`}
  }
  
  a {
    text-decoration: none;
    font-size: 15px;
    color: ${({ theme, $active }) => ($active ? theme.colors.blue : theme.colors.black)};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: ${({ $active }) => ($active ? '100%' : '0')};
      height: 2px;
      background-color: ${({ theme }) => theme.colors.blue};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.blue};

      &:after {
        width: 100%;
      }
    }
  }
`;

const Navigation = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollPosition = useScrollPosition();
  const { isDesktop } = useResponsive();
  const { hash, setHash } = useHash(); // Consume hash state from context

  useEffect(() => {
    const handleRouteChange = (url) => {
      const hashLink = url.includes('#') ? url.split('#')[1] : '';
      setHash(hashLink);
    };

    handleRouteChange(router.asPath); // handle initial load
    router.events.on('hashChangeComplete', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('hashChangeComplete', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router, setHash]);

  useEffect(() => {
    if (scrollPosition > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  const [$isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if($isOpen) {
      setTimeout(() => {
        setIsOpen(!$isOpen)
      }, 400)
    } else {
      setIsOpen(!$isOpen)
    }
  }

  return (
    <StyledNavbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Wrapper>
        <StyledContainer>
          <UpperNav>
            <NavSection>
              <IconGroup>
                <TfiEmail size={'14px'}/>
                <a href="mailto:team@highplainsmedia.com">team@highplainsmedia.com</a>
              </IconGroup>
              <IconGroup>
                <IoPhonePortraitOutline size={'14px'}/>
                <a href="tel:13076806321">1 307 680 6321</a>
              </IconGroup>
            </NavSection>
            {isDesktop && (<NavSection>
              <IconWrapper>
                <MdOutlineFacebook size={'16px'} />
              </IconWrapper>
              <IconWrapper>
                <FaInstagram size={'16px'} />
              </IconWrapper>
              <IconWrapper>
                <FaXTwitter size={'16px'} />
              </IconWrapper>
              <IconWrapper>
                <FaLinkedin size={'16px'} />
              </IconWrapper>
            </NavSection>)}
          </UpperNav>
        </StyledContainer>
      </Wrapper>
      <LowerNav $isScrolled={isScrolled}>
        <Stackable $isOpen={$isOpen} className="d-flex align-items-center justify-content-between">
          <div style={{paddingLeft: '0px'}} className="d-flex align-items-center justify-content-between container-fluid">
            <StyledNavbarBrand href="/"><Image src={mainLogo} alt='Logo' width={200}/></StyledNavbarBrand>
            <Navbar.Toggle onClick={toggleMenu} aria-controls="nav" />
          </div>
          <div className="d-flex justify-content-end">
            <Navbar.Collapse id="nav">
              <Nav>
                <List $isOpen={$isOpen}>
                  <Li $isOpen={$isOpen} $active={hash === ''}>
                    <StyledLink href="/">Home</StyledLink>
                  </Li>
                  <Li $isOpen={$isOpen} $active={hash === "services"}>
                    <StyledLink href="#services">Services</StyledLink>
                  </Li>
                  <Li $isOpen={$isOpen} $active={hash === "work"}>
                    <StyledLink href="#work">Work</StyledLink>
                  </Li>
                  <Li $isOpen={$isOpen} $active={hash === "contact"}>
                    <StyledLink href="#contact">Contact</StyledLink>
                  </Li>
                </List>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Stackable>
      </LowerNav>
    </StyledNavbar>
  );
}

export default Navigation;
