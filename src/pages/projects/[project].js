import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { device } from '../../styles/breakpoints';
import useResponsive from '../../components/hooks/useResponsive';
import useSplashScreen from '../../components/hooks/useSplashScreen';

import HeaderPill from '../../components/HeaderPill';
import CustomCursor from '../../components/CustomCursor';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  background: ${({theme}) => theme.colors.backgroundGradient}; 

  @media ${device.tablet} {
    background: ${({theme}) => theme.colors.mobileBackgroundGradient};
  }
`;

const Hero = styled(Container)`
    background: url('/images/julieschf-homepage.png') top center no-repeat;
    background-size: cover;
    ${'' /* border: 5px solid ${({ theme }) => theme.colors.black}; */}
    border: 5px solid turquoise;
    border-radius: 25px;
    width: 80%;
    aspect-ratio: 5 / 3; /* Aspect ratio 4:3 for the Hero component */
    margin-top: 100px;
    position: relative;
`;

const Phone = styled.div`
  background: url('/images/julieschf_reg_page.png') bottom center no-repeat;
  background-size: cover;
  aspect-ratio: 8 / 16; /* Aspect ratio 9:16 for the Phone component */
  width: 20%;
  z-index: 1;
  ${'' /* border: 5px solid ${({ theme }) => theme.colors.black}; */}
  border: 5px solid turquoise;
  border-radius: 25px;
  position: absolute;
  bottom: -10%;
  right: -8%;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3); /* Add shadow here */
`;

const Technologies = styled.div`
    background: ${({ theme }) => theme.colors.primaryLight};
    height: 100px;
    border-radius: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6); /* Inset shadow for depth effect */
    text-transform: uppercase; 
    ${'' /* width: 35vw; */}
    width: 50vw;
    z-index:1;
    margin: 140px auto 60px auto;
    border: 5px solid turquoise;

    color: ${({ theme }) => theme.colors.white};
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    ${({ $isMobile }) => $isMobile && css`
        width: 100%;
    `}
`;

const H3 = styled.h3`
  margin: 0;
  margin-right: 20px;
  padding: 0;
  letter-spacing: 2px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px; /* Space between icons */
  padding: 0; 
  margin: 0;

  img {
    height: 100%;
    width: auto;
  }

  /* Add a vertical divider between each image */
  img:not(:first-child) {
    border-left: 2px solid ${({ theme }) => theme.colors.white}; /* Divider color */
    padding-left: 20px; /* Space after divider */
  }
`;

const DescriptionWrapper = styled(Container)`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Project = () => {
  const router = useRouter();
  const { project } = router.query;
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
        <Container>
            <HeaderPill title={'work'} />
        </Container>
        <Hero>
          <Phone />
        </Hero>
        <Technologies>
          <H3>BUILT WITH</H3>
          <IconWrapper>
            <img src="/images/tech-stack-nextjs.svg" />
            <img src="/images/tech-stack-react.svg" />
            <img src="/images/tech-stack-netlify.svg" />
            <img src="/images/tech-stack-figma.svg" />
          </IconWrapper>
        </Technologies>
        <DescriptionWrapper>
          <Description>Julie&apos;s Caring Heart Foundation is a non profit in Gillette, Wyoming USA. They fund raise for charitable causes. 
          Julie&apos;s Caring Heart Foundation's annual golf tournament needed a website that could handle player signups, sponsor signups, and let users make and manage payments.</Description>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
}

export default Project;
