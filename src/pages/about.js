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
        padding-top: 100px;
    }
`;

const Logo = styled.img`
  width: 300px;
  height: 300px;
  filter: drop-shadow(0 0 15px rgb(164, 54, 227));  /* Initial shadow */
  animation: flicker 1.5s infinite alternate;

  ${'' /* @keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      filter: drop-shadow(0 0 15px rgb(164, 54, 227));
    }
    20%, 24%, 55% {
      filter: drop-shadow(0 0 30px rgb(164, 54, 227));
    }
    23% {
      filter: drop-shadow(0 0 60px rgb(164, 54, 227));
    }
    58% {
      filter: drop-shadow(0 0 40px rgb(164, 54, 227));
    }
  } */}
`;

export default function Home() {
  const { isSplashVisible, SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const [hovered, setHovered] = useState(false);

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
      <CustomCursor hovered={hovered}/>
      <Wrapper>
        <StyledContainer>
            <HeaderPill title={'about'} />
            <Row className="align-items-center justify-content-around">
                <Col lg={6}  className="pt-3">
                    <H2>Who we are</H2>
                    <P>Our relentless pursuit of being the best digital transformation company 
                enables us to become industry experts in the digital world by actively adding 
                value to our partners' projects. We constantly learn, ideate, incubate, 
                iterate and scale. At Stixor, we consider clients our partners, and your 
                success is our success. This approach enables us to deliver effective digital 
                solutions that empower businesses and allow them to scale. We create unparalleled 
                technological experiences for their clients and help them stay ahead of the 
                digital curve.</P>
                </Col>
                <Col lg={6} className="pt-3 text-center">
                    <ThreeDAnimation setHovered={setHovered}/>
                </Col>
            </Row>
        </StyledContainer>
      </Wrapper>
    </>
  );
}
