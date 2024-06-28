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

const Hero = styled.div`
  height: 75vh;
  background: url('/images/hero-bg.jpeg') top left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  @media ${device.tablet} {
    background-attachment: scroll;
  }

  @media ${device.mobile} {
    background-attachment: scroll;
  }
`;

const StyledContainer = styled(Container)`
  opacity: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-direction: column;

  ${({ $isVisible, theme }) => $isVisible && theme.tokens.fadeInUpAnimation}
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

const H1 = styled.h1`
  ${({ theme }) => theme.fonts.font48ExtraBold};
`;

const H2 = styled.h1`
  ${({ theme }) => theme.fonts.fontBody24Regular};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
  background: ${({ theme }) => theme.colors.white};

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

export default function Home() {
  const { hash, setHash } = useHash(); // Consume hash state from context
  const router = useRouter();
  const { isMobile } = useResponsive();
  const cards = [
    { title: 'Mobile Applications', Icon: MdOutlinePhoneIphone, text: "Custom mobile solutions for iOS and Android that enhance engagement." },
    { title: "Website Development", Icon: MdLaptop, text: "Responsive and engaging websites that elevate your online presence." },
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

  useEffect(() => {
    if (servicesInView) {
      updateHash('services', setHash); // Pass setHash to update the context
    } else if (heroInView) {
      updateHash('', setHash);
    }
  }, [heroInView, servicesInView, setHash]);

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
        <title>High Plains Media</title>
        <meta name="description" content="High Plains Media digital agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero ref={heroRef}>
        <StyledContainer $isVisible={heroInView}>
          <H1>Welcome to <Span>High Plains Media</Span></H1>
          <H2>We are a team of talented engineers and designers building projects for the web</H2>
          <ButtonsWrapper>
            <Button variant="primary" $style={primaryButtonStyle} $hoverStyle={primaryHoverStyle} onClick={scrollToContact}>Schedule a Call</Button>
            <Button variant="secondary" $style={secondaryButtonStyle} $hoverStyle={secondaryHoverStyle} onClick={scrollToContact}>Send an Email</Button>
          </ButtonsWrapper>
        </StyledContainer>
      </Hero>

      <Services ref={servicesRef} id="services" style={{ minHeight: '695px' }}>
        <Container>
          <StyledRow>
            {(servicesInView || isMobile) && cards.map(({ title, Icon, text }, index) => (
              <Card title={title} Icon={Icon} text={text} $delay={0.2 * index} $isVisible={servicesInView || isMobile} key={'service_' + index} overrideHref={'#services'} />
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

      <WorkSection
        title={'work'}
        headline={"projects we've"}
        spanText={' Built'}
        subhead={'Our experienced team leverages cutting-edge technology and in-depth knowledge to deliver exceptional digital solutions tailored to your needs.'}
      />

      <ReviewsCarousel imageSrc={'/images/tetons.jpg'} />

      <ContactSection ref={contactSectionRef} />

      <NewsletterSection />
    </>
  );
}
