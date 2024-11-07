import { useState } from 'react';
import Head from "next/head";
import styled, { css } from 'styled-components';
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
    margin: 100px auto 16px auto;

    ${({ $isMobile }) => $isMobile && css`
      margin: 25px auto;
    `}
`;

export default function Home() {
  const { SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useResponsive();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Contact Us | High Plains Media - Let&apos;s Build Your Digital Future</title>
        <meta 
          name="description" 
          content="Get in touch with High Plains Media to discuss your digital goals. Reach out to our team for web development, mobile app, and e-commerce solutions tailored to your business needs." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/highplains-logo-v2.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/high-plains-favicon-dark.svg" media="(prefers-color-scheme: light)" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.highplainsmedia.com/contact" />

        <meta property="og:title" content="Contact Us | High Plains Media - Let&apos;s Build Your Digital Future" />
        <meta property="og:description" content="Get in touch with High Plains Media to discuss your digital goals. Reach out to our team for web development, mobile app, and e-commerce solutions tailored to your business needs." />
        <meta property="og:image" content="https://www.highplainsmedia.com/images/mobile-apps-min2.png"/>
        <meta property="og:url" content="https://www.highplainsmedia.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | High Plains Media - Let&apos;s Build Your Digital Future" />
        <meta name="twitter:description" content="Get in touch with High Plains Media to discuss your digital goals. Reach out to our team for web development, mobile app, and e-commerce solutions tailored to your business needs." />
        <meta name="twitter:image" content="https://www.highplainsmedia.com/images/mobile-apps-min2.png" />
      </Head>

      {SplashComponent}
      {!isMobile && <CustomCursor hovered={hovered}/>}
      <Wrapper>
        <Container>
          <HeaderPill title={'contact'} />
          <StyledRow $isMobile={isMobile} className="justify-content-center  align-items-center">
              <Col lg={4} md={12} sm={12} className={isMobile && 'px-0'}>
                <InfoWrapper className="text-center py-3 mt-3">
                  <IconWrapper className="my-3 mx-auto">
                    <MdOutlineLocationOn />
                  </IconWrapper>
                  <h3>ADDRESS</h3>
                  <p>Gillette WY, 82718</p>
                </InfoWrapper>
              </Col>
              <Col lg={4} md={12} sm={12} className={isMobile && 'px-0'}>
                <InfoWrapper className="text-center py-3 mt-3">
                      <IconWrapper className="my-3 mx-auto">
                    <MdOutlineEmail />
                  </IconWrapper>
                  <h3>EMAIL</h3>
                  <p><a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="mailto:team@highplainsmedia.com">team@highplainsmedia.com</a></p>
                </InfoWrapper>
              </Col>
              <Col lg={4} md={12} sm={12} className={isMobile && 'px-0'}>
                <InfoWrapper className="text-center py-3 mt-3">
                  <IconWrapper className="my-3 mx-auto">
                    <MdOutlinePhoneInTalk />
                  </IconWrapper>
                  <h3>CALL</h3>
                  <p>+1 307 680 6321</p>
                </InfoWrapper>
              </Col>
          </StyledRow>
          <FormWrapper>
              <H3>LET&apos;S GET IN TOUCH</H3>
              <ContactForm setHovered={setHovered} />
          </FormWrapper>
        </Container>
      </Wrapper>
    </>
  );
}
