import { useEffect, useRef, useState } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { device } from '../styles/breakpoints';
import useResponsive from '../components/hooks/useResponsive';
import useSplashScreen from '../components/hooks/useSplashScreen';

import HeaderPill from '../components/HeaderPill';
import CustomCursor from '../components/CustomCursor';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: ${({theme}) => theme.colors.backgroundGradient}; 

  @media ${device.tablet} {
    background: ${({theme}) => theme.colors.mobileBackgroundGradient};
  }
`;

const GridTileOverlay  = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => `${theme.colors.secondaryDark}F2`};  /* Semi-transparent black background */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: 0;  /* Initially invisible */
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 2;  /* Above everything else */
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* Two equal columns */
  grid-template-rows: repeat(2, 1fr);  /* Two equal rows */
  gap: ${({ $isMobile }) => $isMobile ? '16px' : '35px'};  /* Gap between grid items */
  padding: 40px; /* Padding around the grid */
  
  position: relative;  /* Position the grid on top of the normal content */

  width: 100%;
  height: 100%;
  z-index: 10;  /* Ensure it stays above other content */

  @media ${device.tablet} {
    grid-template-columns: 1fr;  /* One column on smaller screens */
    grid-template-rows: auto;  /* Auto rows on smaller screens */
    padding: 50px 0px;
  }
`;

const GridItem = styled.div`
  position: relative;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFB6C1;
  overflow: hidden;
  /* Add hover effect if needed */
  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    > ${GridTileOverlay} {
      opacity: 1;
      visibility: visible;
    }
  }

  &::before {
    content: ' ';
    position: absolute;
    height: 300px;
    width: 300px;
    top: -100px;
    right: -100px;
    border-top-right-radius: 150px;
    border-top-left-radius: 150px;
    border-bottom-right-radius: 150px;
    border-bottom-left-radius: 150px;
    background: #9370DB;
    z-index: 0;
  }

  & > img {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  &:nth-of-type(2) {
    background: #98FF98;

    &::before {
      background: #D2B48C;
    }
  }

  &:nth-of-type(3) {
    &::before {
      display:none;
    }
    background: url('/images/web-development-tile.svg') center center;
    background-size: cover;

    ${'' /* &::before {
      background: #008080;
    } */}
  }

  &:nth-of-type(4) {
    background: #FF6F61;
    &::before {
      background: #FFC107;
    }
  }

  & h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

export default function Home() {
  const { isSplashVisible, SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useResponsive();
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>High Plains Media | Leading Digital Agency</title>
        <meta name="description" content="Elevate your business with High Plains Media, a leading digital agency specializing in tailored web development, SEO, and online marketing strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/highplains-logo-v2.svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/" />
      </Head>
      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hovered}/>}
      <Wrapper>
        <Container>
        <HeaderPill title={'work'} />
        <GridWrapper $isMobile={isMobile} className={'container'}>
          <GridItem 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={'/images/sunshinePaintAndBody.png'} />
            <GridTileOverlay><h3>julieschf.com</h3></GridTileOverlay>
          </GridItem>
          <GridItem
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={'/images/suite-sleeps-mac.png'} />
            <GridTileOverlay><h3>suitesleeps.com</h3></GridTileOverlay>
          </GridItem>
          <GridItem
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* <img src={'/images/web-development-tile.svg'} /> */}
            <GridTileOverlay><h3>DETAILS</h3></GridTileOverlay>
          </GridItem>
          <GridItem
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={'/images/sunshinePaintAndBody.png'} />
            <GridTileOverlay><h3>DETAILS</h3></GridTileOverlay>
          </GridItem>
        </GridWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
