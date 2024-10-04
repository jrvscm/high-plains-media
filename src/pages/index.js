import { useEffect, useRef } from 'react';
import Head from "next/head";
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button, { primaryHoverStyle, primaryButtonStyle, secondaryButtonStyle, secondaryHoverStyle } from '../components/Button';
import Card from '../components/Card';
import ImageLeftContentRight from '../components/ImageLeftContentRight';
import { MdOutlinePhoneIphone, MdLaptop, MdOutlineShoppingCart, MdOutlineBrush, MdOutlineContentCopy, MdOutlineTrendingUp, MdFilterList } from "react-icons/md";
import { IoMdAnalytics } from 'react-icons/io';
import { device } from '../styles/breakpoints';
import useResponsive from '../components/hooks/useResponsive';
import WorkSection from '../components/WorkSection';
import ReviewsCarousel from '../components/ReviewsCarousel';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import { useRouter } from 'next/router';
import { useHash } from '../components/contexts/HashContext';
import { updateHash } from '../utils/routerUtil';
import useSplashScreen from '../components/hooks/useSplashScreen';

import HeaderPill from '../components/HeaderPill';

const Hero = styled.div`
  height: 75vh;
  background: url('/images/tetons-plains.jpg') top left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  position: relative;
  transform: translateZ(0);
  &:before {
    content: "";
    background: rgb(0,0,0, 0.1);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  ${'' /* @media ${device.tablet} {
    background-attachment: scroll;
  }

  @media ${device.mobile} {
    background-attachment: scroll;
  } */}
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-direction: column;

  /* Initially visible without opacity fade, and transition the blur */
  ${({ $isVisible, theme }) => $isVisible && `
    opacity: 1;
    transition: backdrop-filter 0.3s ease-in-out; 
  `}
`;

const TextWrapper = styled.div`
  justify-self: flex-start;
  padding: 20px; /* Add padding to give the text room to breathe */
  /* Blurred background */
  background: rgba(255, 255, 255, 0.3); /* Semi-transparent white */
  backdrop-filter: blur(20px); /* The blur effect */
  border-radius: 10px; /* Optional for a cleaner look */
  z-index: 2; /* Ensure it's above the background */
  will-change: transform, backdrop-filter;
  backface-visibility: hidden;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const H1 = styled.h1`
  ${({ theme }) => theme.fonts.font48ExtraBold};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const H2 = styled.h1`
  ${({ theme }) => theme.fonts.fontBody24Regular};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.tablet} {
    flex-direction: column;
    margin: 0 auto;

    button {
      min-width: 90vw;
      &:last-of-type {
        margin: 0px 0px 16px 0px;
      }
    }
  }
`;

const Services = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxlg};
  background: ${({ theme }) => theme.colors.sectionBackground};

  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing.xlg} ${theme.spacing.sm}`};
  }
`;

const StyledRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: 0 auto;
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: 110vh;
  background: ${({theme}) => theme.colors.backgroundGradient};

  @media ${device.tablet} {
    background: ${({theme}) => theme.colors.mobileBackgroundGradient};
  }
`;

export default function Home() {
  const { isSplashVisible, SplashComponent } = useSplashScreen('/images/highplains-logo-v2.svg');
  const { hash, setHash } = useHash(); // Consume hash state from context
  const router = useRouter();
  const { isMobile } = useResponsive();
  const cards = [
    { title: "Website Development", Icon: MdLaptop, text: "Responsive and engaging websites that elevate your online presence." },
    { title: 'Mobile Applications', Icon: MdOutlinePhoneIphone, text: "Custom mobile solutions for iOS and Android that enhance engagement." },
    { title: "Digital Marketing", Icon: IoMdAnalytics, text: "Strategic digital marketing that boosts visibility and increases conversions." },
    { title: "E-commerce", Icon: MdOutlineShoppingCart, text: "Seamless e-commerce solutions tailored for growth so you can start selling today." },
    ...(!isMobile ? [
      { title: "Content Strategy", Icon: MdOutlineContentCopy, text: "Content strategy that engages your audience, enhances SEO, and drives traffic to your site." },
      { title: "Funnel Creation", Icon: MdFilterList, text: "Design effective marketing funnels that convert visitors into customers." },
      { title: "SEO Optimization", Icon: MdOutlineTrendingUp, text: "Boost search engine ranking and increase visibility with our expert SEO strategies." },
      { title: "Graphic Design", Icon: MdOutlineBrush, text: "Transform your projects and bring them to life with our graphic design services." }
    ] : []), // Use an empty array if not mobile to spread nothing
  ];
  

  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5, triggerOnce: true });

  //nav refs
  const { ref: heroRefNav, inView: heroInViewNav } = useInView({ threshold: 0.5 });
  const { ref: servicesRefNav, inView: servicesInViewNav } = useInView({ threshold: 0.5 });
  const { ref: workSectionRefNav, inView: workSectionInViewNav } = useInView({ threshold: 0.5 });
  const { ref: contactSectionRefNav, inView: contactSectionInViewNav } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (heroInViewNav) {
      updateHash('', setHash);
    } else if (servicesInViewNav) {
      updateHash('services', setHash); // Pass setHash to update the context
    } else if(workSectionInViewNav) {
      updateHash('work', setHash);
    } else if(contactSectionInViewNav) {
      updateHash('contact', setHash);
    }
  }, [heroInViewNav, setHash, servicesInViewNav, contactSectionInViewNav, workSectionInViewNav]);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      setHash(newHash);
    };

    router.events.on('hashChangeComplete', handleHashChange);

    handleHashChange(); // Handle initial load

    return () => {
      router.events.off('hashChangeComplete', handleHashChange);
    };
  }, [router, setHash]);

  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollToSection();
    }
  };

  const headerMsg = !isMobile
    ? 'Enhance your online reach and increase conversions through our AI-powered, project build-out. Our approach leverages the latest in AI technology to ensure every aspect of your project is optimized for success.'
    : 'Enhance your online reach and increase conversions through our AI-powered, project build-out.'

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
      <Wrapper>
        <HeaderPill title={'Services'} />
      </Wrapper>
      {/* <div ref={heroRefNav} id="hero-target"/>
      <Hero ref={heroRef}>
        <StyledContainer $isVisible={heroInView}>
          <TextWrapper>
            <H1>Welcome to <Span>High Plains Media</Span></H1>
            <H2>We are a team of talented engineers and designers building projects for the web</H2>
            <ButtonsWrapper>
              <Button variant="primary" $style={primaryButtonStyle} $hoverStyle={primaryHoverStyle} onClick={scrollToContact}>Schedule a Call</Button>
              <Button variant="secondary" $style={secondaryButtonStyle} $hoverStyle={secondaryHoverStyle} onClick={scrollToContact}>Send an Email</Button>
            </ButtonsWrapper>
          </TextWrapper>
        </StyledContainer>
      </Hero>

      <div ref={servicesRefNav} id="services-target"/>
      <Services ref={servicesRef} id="services" style={{ minHeight: '695px' }}>
        <Container>
          <StyledRow>
            {(servicesInView || isMobile) && cards.map(({ title, Icon, text }, index) => (
              <Card title={title} Icon={Icon} text={text} $delay={0.2 * index} $isVisible={servicesInView || isMobile} key={'service_' + index} overrideHref={false} />
            ))}
          </StyledRow>
        </Container>
      </Services>

      <ImageLeftContentRight 
        title={'process'}
        headline={'how our process '}
        spanText={'works'}
        subhead={headerMsg}
      />

      <div ref={workSectionRefNav} id="work-target"/>
      <WorkSection
        title={'work'}
        headline={"projects we've"}
        spanText={' Built'}
        subhead={'Our experienced team leverages cutting-edge technology and in-depth knowledge to deliver exceptional digital solutions tailored to your needs.'}
      />

      {/* <ReviewsCarousel imageSrc={'/images/tetons.jpg'} /> */}

      {/* <div ref={contactSectionRefNav} id="contact-target"/> */}
      {/* <ContactSection ref={contactSectionRef} /> */}

      {/* <NewsletterSection /> */} 
    </>
  );
}
