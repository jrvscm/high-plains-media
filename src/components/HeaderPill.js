import React from 'react';
import { styled, css } from 'styled-components';
import { device } from '../styles/breakpoints';
import Link from 'next/link';
import useResponsive from '../components/hooks/useResponsive';

const Wrapper = styled.div`
    padding-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        padding-top: 25px;
    }
`;

const PillContainer = styled.div`
    background: ${({ theme }) => theme.colors.primaryLight};
    padding: 15px 30px;
    border-radius: 50px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); /* Inset shadow for depth effect */
    text-transform: uppercase; 
    width: 35vw;
    z-index:1;
    
    ${({ $isMobile }) => $isMobile && css`
        width: 100%;
    `}
`;

const PillText = styled.h1`
    margin: 0;
    font-family: "Orbitron", sans-serif;
    font-size: 42px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

    @media ${device.tablet} {
        font-size: 24px;
    }
`;

const LinkWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 35vw;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    z-index: 1;

    @media ${device.tablet} {
        width: 90%;
        margin-top: 25px;
    }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.1px;
  position: relative;
  
  /* Add an underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -5px; /* Adjusts the position of the underline */
    left: 0;
    width: 0;
    height: 2px; /* Thickness of the underline */
    background-color: ${({ theme }) => theme.colors.white};
    transition: width 0.3s ease;

    ${({ $active }) => $active && `
        width: 100%;
    `}
  }

  &:hover {
    filter:brightness(80%);

    &::after {
      width: 100%; /* Animate underline width to full */
    }
  }


`;

const HeaderPill = ({title}) => {
    const { isMobile } = useResponsive();
    return (
    <Wrapper>
        <PillContainer $isMobile={isMobile}>
            <PillText>{title}</PillText>
        </PillContainer>
        <LinkWrapper>
            <StyledLink $active={'about' === title} href={'/about'}>ABOUT</StyledLink>
            {/* <StyledLink $active={'services' === title} href={'/services'}>SERVICES</StyledLink> */}
            <StyledLink $active={'work' === title} href={'/'}>WORK</StyledLink>
            <StyledLink $active={'contact' === title} href={'/contact'}>CONTACT</StyledLink>
        </LinkWrapper>
    </Wrapper>
)};

export default HeaderPill;