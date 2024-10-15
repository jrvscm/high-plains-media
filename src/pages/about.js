import { useState } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { device } from '../styles/breakpoints';
import useSplashScreen from '../components/hooks/useSplashScreen';
import HeaderPill from '../components/HeaderPill';
import CustomCursor from '../components/CustomCursor';
import ThreeDAnimation from '../components/ThreeDAnimation';
import useResponsive from '../components/hooks/useResponsive';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: ${({theme}) => theme.colors.backgroundGradient}; 

  @media ${device.tablet} {
    background: ${({theme}) => theme.colors.mobileBackgroundGradient};
  }
`;

const H2 = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    margin: 0;
    padding: 0;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
`;

const P = styled.p`
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
`;

const StyledContainer = styled(Container)`
    color: ${({ theme }) => theme.colors.white};

    & .row {
        padding-top: ${({ $isMobile }) => $isMobile ? '0px' : '100px'};
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
        <link rel="icon" href="/high-plains-favicon.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/" />
      </Head>
      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hovered}/>}
      <Wrapper>
        <StyledContainer $isMobile={isMobile}>
            <HeaderPill title={'about'} />
            <Row className="align-items-center justify-content-around">
                {!isMobile && 
                <>
                  <Col lg={6}  className="pt-3">
                    <H2>Who we are</H2>
                    <P>
                    We are &quot;out of this world&quote; developers and designers, creating engaging digital experiences across the web. With two decades of experience working for Fortune 500 companies in Silicon Valley, High Plains Media has cultivated a relentless pursuit of excellence in digital transformation. Today, we bring our expertise to small businesses, empowering them to scale and succeed in the digital world.
                    <br /><br />
                    Our commitment to being industry leaders drives us to continually learn, ideate, incubate, iterate, and scale. At High Plains Media, we view clients as partners. Your success is our success, and we strive to build digital solutions that elevate your brand and keep you ahead of the digital curve. We craft unparalleled technological experiences for your customers, ensuring your business is not just part of the digital landscape but a driving force within it.
                    </P>
                  </Col>
                  <Col lg={6} className="pt-3 text-center px-0">
                      <ThreeDAnimation setHovered={setHovered} isMobile={isMobile}/>
                  </Col>
                </>}

                {isMobile && 
                <>
                  <Col lg={6} className="pt-3 text-center px-0">
                    <ThreeDAnimation setHovered={setHovered} isMobile={isMobile}/>
                  </Col>
                  <Col lg={6}  className="pt-3" style={{'margin-top': '-100px'}}>
                    <H2>Who we are</H2>
                    <P>
                    We are &quot;out of this world&quot; developers and designers creating engaging digital experiences across the web. With two decades of experience working for Fortune 500 companies in Silicon Valley, High Plains Media has cultivated a relentless pursuit of excellence in digital transformation. Today, we bring our expertise to small businesses, empowering them to scale and succeed in the digital world.
                    <br /><br />
                    Our commitment to being industry leaders drives us to continually learn, ideate, incubate, iterate, and scale. At High Plains Media, we view clients as partners. Your success is our success, and we strive to build digital solutions that elevate your brand and keep you ahead of the digital curve. We craft unparalleled technological experiences for your customers, ensuring your business is not just part of the digital landscape but a driving force within it.
                    </P>
                  </Col>
                </>}
            </Row>
        </StyledContainer>
      </Wrapper>
    </>
  );
}
