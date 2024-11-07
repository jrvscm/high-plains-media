import React from 'react';
import { styled, css } from 'styled-components';
import { device } from '../styles/breakpoints';
import { useRouter } from 'next/router'
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
    min-width: fit-content;
    z-index:1;
    position: relative;
    
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

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: -50%;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border: none;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: auto;
    height: 62px;
    fill: white;
  }

  @media ${device.tablet}{
    left: unset;
    top: 8px;
    right: 8px;
    box-shadow: none;
    background-color: transparent;
  }
`;

const HeaderPill = ({ title }) => {
    const { isMobile } = useResponsive();
    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
    const { asPath } = router;
    return (
    <Wrapper>
        <PillContainer $isMobile={isMobile}>
            {asPath.includes(['projects']) &&  !isMobile && <BackButton onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"/>
                </svg>
            </BackButton>}
            <PillText>{title}</PillText>
        </PillContainer>
    </Wrapper>
)};

export default HeaderPill;