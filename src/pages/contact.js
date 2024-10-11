import { useState } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import { device } from '../styles/breakpoints';import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";

import useSplashScreen from '../components/hooks/useSplashScreen';
import HeaderPill from '../components/HeaderPill';
import CustomCursor from '../components/CustomCursor';
import ContactForm from '../components/ContactForm';
import useResponsive from '../components/hooks/useResponsive';

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

const FormWrapper = styled.div`

`;

const GridItem = styled.div`
  position: relative;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  overflow: hidden;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFB6C1;
  overflow: hidden;

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
    background: #87CEEB;
    &::before {
      background: #008080;
    }
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

const H3 = styled.h3`
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    margin: 100px auto 60px auto;
`;

const InfoWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); 
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Raleway', sans-serif;

  & a {
      color: ${({ theme }) => theme.colors.white};
      transition: all .2s ease;
      &:hover {
          filter: brightness(80%);
      }
  }

  & h3 {
      font-family: 'Orbitron', sans-serif;
      font-size: 20px;
      letter-spacing: 2px;
      text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  padding: 8px;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dotted ${({ theme }) => theme.colors.accentBlue};
`;

const StyledRow = styled(Row)`
    margin: 16px auto;
`;

export default function Home() {
  const { SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
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
        <HeaderPill title={'contact'} />
   
        <StyledRow className="justify-content-center  align-items-center">
            <Col lg={3} md={3} sm={12}>
              <InfoWrapper className="text-center py-3 mt-3">
                <IconWrapper className="my-3 mx-auto">
                  <MdOutlineLocationOn />
                </IconWrapper>
                <h3>ADDRESS</h3>
                <p>Gillette WY, 82718</p>
              </InfoWrapper>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <InfoWrapper className="text-center py-3 mt-3">
                    <IconWrapper className="my-3 mx-auto">
                  <MdOutlineEmail />
                </IconWrapper>
                <h3>EMAIL</h3>
                <p><a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="mailto:team@highplainsmedia.com">team@highplainsmedia.com</a></p>
              </InfoWrapper>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <InfoWrapper className="text-center py-3 mt-3">
                <IconWrapper className="my-3 mx-auto">
                  <MdOutlinePhoneInTalk />
                </IconWrapper>
                <h3>CALL</h3>
                <p>+1 307 680 6321</p>
              </InfoWrapper>
            </Col>
        </StyledRow>
        <FormWrapper className={'container'}>
            <H3>LET&apos;S GET IN TOUCH</H3>
            <ContactForm setHovered={setHovered} />
        </FormWrapper>
      </Wrapper>
    </>
  );
}
