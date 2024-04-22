import Head from "next/head";
import styled, { css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from '../components/Button';
import Card from '../components/Card';
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { GrIntegration } from "react-icons/gr";
import { device } from '../styles/breakpoints';

const Hero = styled.div`
  height: 75vh;
  background: url('/images/hero-bg.jpeg') top left;
  background-size: cover;
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
`;

const primaryButtonStyle = css`
  margin: ${({theme}) => `${theme.spacing.lg} 0px ${theme.spacing.smd} 0px`};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const primaryHoverStyle = css`
  border: ${({ theme }) => `1px solid ${theme.colors.blue}`};
  background: transparent;
  filter: blur(1px); 
`;

const secondaryButtonStyle = css`
  margin: ${({theme}) => `${theme.spacing.lg} 0px ${theme.spacing.smd} ${theme.spacing.smd}`};
  border: ${({theme}) => `1px solid ${theme.colors.blue}`};
  color: ${({theme}) => theme.colors.blue};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const secondaryHoverStyle = css`
  filter: blur(1px); 
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
  justify-content: center; // Ensures cards are centered horizontally in the container
  gap: ${({ theme }) => theme.spacing.md}; // Provides consistent spacing between cards
  margin: 0 auto; // Centers the row within the container if necessary
  width: 100%; // Ensures the row takes full width to contain all cards properly
`;

export default function Home() {

  const cards = [
    {
      title: 'Mobile Applications', 
      Icon: MdOutlinePhoneIphone,
      text: "Custom mobile solutions for iOS and Android that enhance engagement."
    },
    {
      title: "Website Development", 
      Icon: FaLaptopCode,
      text: "Responsive and engaging websites that elevate your online presence."
    },
    {
      title: "Digital Marketing", 
      Icon: IoMdAnalytics,
      text:  "Strategic digital marketing that boosts visibility and conversions."
    },
    {
      title: "Software Integration", 
      Icon: GrIntegration,
      text: "Streamline operations with efficient software integrations."
    }
  ]

  const {
    ref: heroRef, 
    inView: heroInView
  } = useInView({
    triggerOnce: true,
    threshold: 0.5  // Adjusted for your specific need, maybe 1 for full visibility
  });

  const {
    ref: rowRef, 
    inView: rowInView
  } = useInView({
    triggerOnce: true,
    threshold: 1.0
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero ref={heroRef}>
        <StyledContainer $isVisible={heroInView}>
          <H1>Welcome to <Span>Peak Digital</Span></H1>
          <H2>We are team of talented engineers building projects for the web</H2>
          <ButtonsWrapper>
            <Button variant="primary" $style={primaryButtonStyle} $hoverStyle={primaryHoverStyle} onClick={() => console.log('clickkkkked')}>Click Me</Button>
            <Button variant="secondary" $style={secondaryButtonStyle} $hoverStyle={secondaryHoverStyle} onClick={() => console.log('clickkkkked')}>Do sumtn crayz</Button>
          </ButtonsWrapper>
        </StyledContainer>
      </Hero>
      <Services ref={rowRef}>
        <Container>
          <StyledRow>
            {rowInView && cards?.length && cards.map(({title, Icon, text}, index) => <Card title={title} Icon={Icon} text={text} $delay={0.2 * index} $isVisible={rowInView} />)}
          </StyledRow>
        </Container>
      </Services>
    </>
  );
}
