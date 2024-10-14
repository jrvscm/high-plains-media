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
    background: url('images/julieschf-homepage.png');
    background-size: contain;
    background-position: center;
    border: 2px solid ${({ theme }) => theme.colors.sectionBackground};
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
    height: 80vh;
    width: 80%;
    margin-top: 100px;
    position: relative;
`;

const Phone = styled.div`
  height: 50vh;
  width: 20%;
  z-index: 1;
  border: 2px solid ${({ theme }) => theme.colors.sectionBackground};
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;

  position: absolute;
  bottom: -10%;
  right: -5%;
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
        {/* <Container>
            <HeaderPill title={'work'} />
        </Container> */}
        <Hero>
          <Phone></Phone>
        </Hero>
      </Wrapper>
    </>
  );
}

export default Project;
