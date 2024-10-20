import { useState } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { device } from '../styles/breakpoints';
import useResponsive from '../components/hooks/useResponsive';
import useSplashScreen from '../components/hooks/useSplashScreen';
import Link from 'next/link';

import HeaderPill from '../components/HeaderPill';
import CustomCursor from '../components/CustomCursor';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: ${({ theme }) => theme.colors.backgroundGradient};

  @media ${device.tablet} {
    background: ${({ theme }) => theme.colors.mobileBackgroundGradient};
  }
`;

const GridTileOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => `${theme.colors.secondaryDark}F2`}; /* Semi-transparent background */
  display: ${({ $isMobile }) => ($isMobile ? 'none' : 'flex')}; /* Hide overlay on mobile */
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: ${({ $isMobile }) => ($isMobile ? 0 : 0)};  /* Fully hidden on mobile */
  visibility: ${({ $isMobile }) => ($isMobile ? 'hidden' : 'hidden')}; /* Fully hidden on mobile */
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 2; /* Ensure it stays above the gradient and image */
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  grid-template-rows: repeat(2, 1fr); /* Two equal rows */
  gap: ${({ $isMobile }) => ($isMobile ? '16px' : '18px')}; /* Gap between grid items */
  padding: 40px 0px; /* Padding around the grid */
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10; /* Ensure it stays above other content */

  @media ${device.tablet} {
    grid-template-columns: 1fr; /* One column on smaller screens */
    grid-template-rows: auto; /* Auto rows on smaller screens */
    padding: 50px 0px;
  }
`;

const GridItem = styled.div`
  position: relative;
  min-height: 480px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media ${device.tablet} {
    min-height: 250px;
  }

  &:hover {
    ${'' /* Only scale on hover for non-mobile */}
    > ${GridTileOverlay} {
      opacity: 1;
      visibility: visible;
    }
  }

  & img {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1;
  }

  & h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    color: ${({ $isMobile, theme }) => ($isMobile ? theme.colors.white : 'transparent')}; /* Visible on mobile */
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 15px;
    width: 100%;
    text-align: center;

    @media ${device.tablet}{
      font-family: 'Orbitron', sans-serif;
      font-size: 24px;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5);
      padding: 10px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
    }
  }
`;

const StyledLink = styled(Link)`
  &:nth-child(1) ${GridItem}{
    background: #86C16B; /* Muted green */
    &::before {
      background: #F2E3C9; /* Pale beige */
    }
  }

  &:nth-child(2) ${GridItem} {
    background: url('/images/mobile-apps-min2.png') center center, linear-gradient(135deg, rgba(0,0,0,1), rgba(0,0,0,1));
      /* Gradient with image background */
    background-size: cover;
    z-index: 0;
    &::before {
      display: none;
    }
  }

  &:nth-child(3) ${GridItem} {
    background: #dfbccf; /* Muted Pink */
    background: url('/images/web-development-tile.svg') left center;
    background-size: cover;

    &::before {
      display: none;
    }
  }

  &:nth-child(4) ${GridItem} {
    background: #F9866F; /* Coral */
    &::before {
      background: #B3DDF2; /* Light sky blue */
    }
  }

  &:nth-child(5) ${GridItem} {
    background: #4D47A1; /* Coral */
    &::before {
      background: #C8B8E3; /* Light sky blue */
    }
  }

  &:nth-child(6) ${GridItem} {
    background: url('/images/ecommerce.png') center center, linear-gradient(135deg, rgba(0,0,0,1), rgba(0,0,0,1));
    background-size: cover;

    &::before {
      display: none;
    }
  }
`;

export default function Home() {
  const { isSplashVisible, SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>High Plains Media | Leading Digital Agency</title>
        <meta name="description" content="Elevate your business with High Plains Media, a leading digital agency specializing in tailored web development, SEO, and online marketing strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/highplains-logo-v2.svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/" />
      </Head>
      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hovered} />}
      <Wrapper>
        <Container>
          <HeaderPill title={'work'} />
          <GridWrapper $isMobile={isMobile} className={'container'}>
            <StyledLink href={'/projects/julieschf'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}  // Prevent hover on mobile
                onMouseLeave={() => !isMobile && setHovered(false)} // Prevent hover on mobile
                $isMobile={isMobile}
              >
                <img src={'/images/sunshinePaintAndBody.png'} />
                <h3 $isMobile={isMobile}>julieschf.com</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>julieschf.com</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>

            <StyledLink href={''}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
                $isMobile={isMobile}
              >
                <h3 $isMobile={isMobile}>Mobile Applications</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>Mobile Applications</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>

            <StyledLink href={''}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
                $isMobile={isMobile}
              >
                <h3 $isMobile={isMobile}>Web Development</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>Web Development</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/suitesleeps'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
                $isMobile={isMobile}
              >
                <img src={'/images/suite-sleeps-mac.png'} />
                <h3 $isMobile={isMobile}>suitesleeps.com</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>suitesleeps.com</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/suitesleeps'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
                $isMobile={isMobile}
              >
                <img src={'/images/tvs.png'} />
                <h3 $isMobile={isMobile}>highplainsmedia.com</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>highplainsmedia.com</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>

            <StyledLink href={''}>
              <GridItem
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
                $isMobile={isMobile}
              >
                <h3 $isMobile={isMobile}>e-commerce</h3>
                <GridTileOverlay $isMobile={isMobile}>
                  <h3>e-commerce</h3>
                </GridTileOverlay>
              </GridItem>
            </StyledLink>
          </GridWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
