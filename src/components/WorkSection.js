import { useEffect } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';
import { device } from '../styles/breakpoints';
import { useInView } from 'react-intersection-observer';
import TitleWithPill from '../components/TitleWithPill';
import { updateHash } from '../utils/routerUtil';
import { useHash } from '../components/contexts/HashContext';
import useResponsive from '../components/hooks/useResponsive';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xxxlg};
  height: 100%;
  will-change: transform;

  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing.smd} ${theme.spacing.xs}`};
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

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  ${({ $isVisible, theme }) => $isVisible && theme.tokens.fadeInUpAnimation}
`;

export const WorkSection = ({ title, headline, subhead, spanText }) => {
  const { setHash } = useHash(); // Consume setHash from context
  const { isMobile } = useResponsive();

  const { ref: sectionRef, inView: workInView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  useEffect(() => {
    if (workInView) {
      updateHash('work', setHash);
    }
  }, [workInView, setHash]);

  const cards = [
    {
      title: "julieschf.com",
      Icon: null,
      image: '/images/julieschf-homepage.png',
      text: "Web design, signup system and payment gateway for Sunshine Paint and Body annual Scramble Match Play Classic golf tournament.",
      overrideHref: 'https://www.julieschf.com'
    },
    {
      title: "Coming Soon",
      Icon: null,
      image: '/images/store2-screenshot.png',
      text: "Web design, signup system and payment gateway for Sunshine Paint and Body annual Scramble Match Play Classic golf tournament.",
      overrideHref: '#'
    },
    {
      title: "Coming Soon",
      Icon: null,
      image: '/images/store-screenshot.png',
      text: "Web design, signup system and payment gateway for Sunshine Paint and Body annual Scramble Match Play Classic golf tournament.",
      overrideHref: '#'
    },
  ];

  return (
    <Section id="work" style={{ minHeight: '705px' }} ref={sectionRef}>
      <StyledContainer>
        <Row className="justify-content-center align-items-center">
          <TitleWithPill title={title} headline={headline} subhead={subhead} spanText={spanText} />
        </Row>
      </StyledContainer>
      <Container>
        <StyledRow>
          {(workInView || isMobile) && cards?.length && cards.map(({ title, Icon, text, image, overrideHref }, index) => (
            <Card
              title={title}
              Icon={Icon}
              text={text}
              $delay={0.2 * index}
              $isVisible={workInView || isMobile}
              image={image}
              key={'card_' + index}
              overrideWidth={'350px'}
              overrideHeight={'374px'}
              isBlur={title === 'Coming Soon'}
              overrideBackground={true}
              overrideHref={overrideHref}
            />
          ))}
        </StyledRow>
      </Container>
    </Section>
  );
}

export default WorkSection;
