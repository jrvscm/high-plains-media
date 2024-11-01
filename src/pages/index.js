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
  background: ${({ theme }) => `${theme.colors.secondaryDark}F2`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 2;
  will-change: opacity, transform;

  > h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    color: white;
    z-index: 3;
  }
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

  & h3.mobile {
    font-family: 'Orbitron', sans-serif;
    font-size: 24px;
    color: #fff;
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5);
    padding: 10px;
    border-radius: 0px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    text-align: center;
    width: 100%;
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile } = useResponsive();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Our Work | High Plains Media Projects Gallery</title>
        <meta 
          name="description" 
          content="Explore High Plains Media's portfolio of custom websites, mobile applications, and e-commerce projects for small businesses. Discover how we bring ideas to life through innovative design and development." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/highplains-logo-v2.svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/projects" />
      </Head>
      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hoveredIndex !== null} />}
      <Wrapper>
        <Container>
          <HeaderPill title={'work'} />
          <GridWrapper $isMobile={isMobile} className={'container'}>
          <StyledLink href={'/projects/julieschf'}>
            <GridItem
              onMouseEnter={() => !isMobile && setHoveredIndex(0)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              $isMobile={isMobile}
            >
              <img src={'/images/sunshinePaintAndBody.png'} />
              {isMobile ? (
                <h3 className="mobile">julieschf.com</h3> 
              ) : (
                <GridTileOverlay>
                  <h3>julieschf.com</h3>
                </GridTileOverlay>
              )}
            </GridItem>
          </StyledLink>

            <StyledLink href={'/projects/mobile-apps'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHoveredIndex(1)}  
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                $isMobile={isMobile}
              >
                {isMobile ? (<h3 className={'mobile'}>Mobile Applications</h3>)
                : (
                  <GridTileOverlay>
                    <h3>Mobile Applications</h3>
                  </GridTileOverlay>
                )}
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/web-development'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHoveredIndex(2)}  // Set hover index for third tile
                onMouseLeave={() => !isMobile && setHoveredIndex(null)} // Reset hover index
                $isMobile={isMobile}
              >
                {isMobile ? (<h3 className={'mobile'}>Web Development</h3>)
                : (
                  <GridTileOverlay>
                    <h3>Web Development</h3>
                  </GridTileOverlay>
                )}
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/suitesleeps'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHoveredIndex(3)}  // Set hover index for fourth tile
                onMouseLeave={() => !isMobile && setHoveredIndex(null)} // Reset hover index
                $isMobile={isMobile}
              >
                <img src={'/images/suite-sleeps-mac.png'} />
                {isMobile ? (<h3 className={'mobile'}>suitesleeps.com</h3>)
                : (
                  <GridTileOverlay>
                    <h3>suitesleeps.com</h3>
                  </GridTileOverlay>
                )}
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/highplainsmedia'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHoveredIndex(4)}  // Set hover index for fifth tile
                onMouseLeave={() => !isMobile && setHoveredIndex(null)} // Reset hover index
                $isMobile={isMobile}
              >
                <img src={'/images/tvs.png'} />
                {isMobile ? (<h3 className={'mobile'}>highplainsmedia.com</h3>)
                : (
                  <GridTileOverlay>
                    <h3>highplainsmedia.com</h3>
                  </GridTileOverlay>
                )}
              </GridItem>
            </StyledLink>

            <StyledLink href={'/projects/ecommerce'}>
              <GridItem
                onMouseEnter={() => !isMobile && setHoveredIndex(5)}  // Set hover index for sixth tile
                onMouseLeave={() => !isMobile && setHoveredIndex(null)} // Reset hover index
                $isMobile={isMobile}
              >
                {isMobile ? (<h3 className={'mobile'}>e-commerce</h3>)
                : (
                  <GridTileOverlay>
                    <h3>e-commerce</h3>
                  </GridTileOverlay>
                )}
              </GridItem>
            </StyledLink>
          </GridWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
