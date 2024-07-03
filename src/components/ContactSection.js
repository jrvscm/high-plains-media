import { useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { device } from '../styles/breakpoints';
import TitleWithPill from '../components/TitleWithPill';
import ContactForm from '../components/ContactForm';
import { useInView } from 'react-intersection-observer';
import { updateHash } from '../utils/routerUtil';
import { useHash } from '../components/contexts/HashContext';

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  will-change: transform;
`;

const IconWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  padding: 8px;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 32px;
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px dotted ${({ theme }) => theme.colors.accentBlue};
`;

const H3 = styled.h3`
  ${({ theme }) => theme.fonts.font26RobotoSemiBold};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const P = styled.p`
  ${({ theme }) => theme.fonts.font16TextRegular};
  color: ${({ theme }) => theme.colors.lightGray};

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.lightGray};

    &:hover {
      filter: brightness(.7);
    }
  }
`;

const ShadowDiv = styled.div`
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};
  background: ${({ theme }) => theme.colors.white};
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};
  will-change: transform;
`;

const SkeletonWrapper = styled.div`
  background: ${({ theme: { colors }}) => colors.gray};
`;

const ContactSection = forwardRef((props, ref) => {
  const { setHash } = useHash(); // Consume setHash from context

  const { ref: inViewRef, inView: contactInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const innerRef = useRef(null);

  useEffect(() => {
    if (contactInView) {
      updateHash('contact', setHash);
    }
  }, [contactInView, setHash]);

  useImperativeHandle(ref, () => ({
    scrollToSection: () => {
      if (innerRef.current) {
        innerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  return (
    <Section className="pb-5" id="contact" ref={inViewRef}>
      <div ref={innerRef}>
        <Container>
          <Row className="py-5">
            <TitleWithPill
              title={'Contact'}
              headline={''}
              subhead={'Shoot us a message about your project. We will respond within one business day!'}
              spanText={'Contact Us'}
            />
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col lg={6} md={6} sm={12}>
              <ShadowDiv className="text-center py-3 my-3">
                <IconWrapper className="my-3 mx-auto">
                  <MdOutlineLocationOn />
                </IconWrapper>
                <H3>Our Address</H3>
                <P>Gillette WY, 82718</P>
              </ShadowDiv>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <ShadowDiv className="text-center py-3 my-3">
                <IconWrapper className="my-3 mx-auto">
                  <MdOutlineEmail />
                </IconWrapper>
                <H3>Email Us</H3>
                <P><a href="mailto:team@highplainsmedia.com">team@highplainsmedia.com</a></P>
              </ShadowDiv>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <ShadowDiv className="text-center py-3 my-3">
                <IconWrapper className="my-3 mx-auto">
                  <MdOutlinePhoneInTalk />
                </IconWrapper>
                <H3>Call Us</H3>
                <P>+1 307 680 6321</P>
              </ShadowDiv>
            </Col>
          </Row>

          <Row>
            <Col lg={6} sm={12} className="my-3">
              <ShadowDiv>
                <SkeletonWrapper><Image src="/images/office-workers-two.jpg" alt="man in office explaining" /></SkeletonWrapper>
              </ShadowDiv>
            </Col>
            <Col lg={6} sm={12} className="my-3">
              <ShadowDiv className="py-4 px-2">
                <ContactForm />
              </ShadowDiv>
            </Col>
          </Row>
        </Container>
      </div>
    </Section>
  );
});

// Add display name to the component
ContactSection.displayName = 'ContactSection';

export default ContactSection;
