import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../components/Card';
import { device } from '../styles/breakpoints';
import { useInView } from 'react-intersection-observer';
import TitleWithPill from '../components/TitleWithPill';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.xxxlg};

    @media ${device.tablet} {
        padding: ${({ theme }) => `${theme.spacing.smd} ${theme.spacing.xs}`};
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

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-direction: column;

  ${({ $isVisible, theme }) => $isVisible && theme.tokens.fadeInUpAnimation}
`;


export const TeamSection = ({title, headline, subhead, spanText}) => {
    const {
        ref: containerRef, 
        inView: rowInView
      } = useInView({
        triggerOnce: true,
        threshold: 1.0
      });

    const cards = [
        {
          title: "Gage Cates", 
          Icon: null,
          image: '/images/headshot.jpeg',
          text: "Product Development Team Lead"
        },
        {
          title: "Chris Jarvis", 
          Icon: null,
          image: '/images/headshot.jpeg',
          text:  "Product Development Team Lead"
        },
        {
          title: "Cole Jarvis", 
          Icon: null,
          image: '/images/headshot.jpeg',
          text: "Qualty Assurance Team Lead"
        },
      ];

    return (
        <Section>
            <StyledContainer>
                <Row className="justify-content-center align-items-center">
                    <TitleWithPill title={title} headline={headline} subhead={subhead} spanText={spanText} />
                </Row>
            </StyledContainer>
            <Container ref={containerRef}>
                <StyledRow>
                    {rowInView && cards?.length && cards.map(({title, Icon, text, image}, index) => <Card title={title} Icon={Icon} text={text} $delay={0.2 * index} $isVisible={rowInView} image={image} key={'card_'+index} />)}
                </StyledRow>
            </Container>
        </Section>
    )
}

export default TeamSection;