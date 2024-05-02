import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineLocationOn, MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { device } from '../styles/breakpoints';
import TitleWithPill from '../components/TitleWithPill';
import ContactForm from '../components/ContactForm';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
`;

const IconWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    ${'' /* box-shadow: 0px 6px 15px rgba(16, 110, 234, 0.12); //move to token */}
    font-size: 24px;
    padding: 8px
    margin-right: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.blue};
    border-radius: 32px;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px dotted ${({ theme }) => theme.colors.accentBlue};
    
    @media ${device.tablet} {
        height: 42px;
        width: 42px;
        border-radius: 21px;
        padding: 10px;
    }
`;

const H3 = styled.h3`
    ${({ theme }) => theme.fonts.font26RobotoSemiBold};
    color: ${({ theme }) => theme.colors.lightGray};
`;

const P = styled.p`
    ${({ theme }) => theme.fonts.font16TextRegular};
    color: ${({ theme }) => theme.colors.lightGray};
`;

const ShadowDiv = styled.div`
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};
`;

const Image = styled.img`
    width: 100%;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};
`;

export const ContactSection = () => {
    return (
        <Section>
            <Container>
                <Row className="py-5">
                    <TitleWithPill title={'Contact'} headline={''} subhead={'Shoot us a message about your project. We will respond within one business day!'} spanText={'Contact Us'} />
                </Row>
                <Row classNames="justify-content-center align-items-center">
                    <Col lg={6} md={6} sm={12}>
                        <ShadowDiv className="text-center py-3 my-3">
                            <IconWrapper className="my-3 mx-auto">
                                <MdOutlineLocationOn />
                            </IconWrapper>
                            <H3>Our Address</H3>
                            <P>2704 Ridgecrest Drive, Gillette WY, 82718</P>
                        </ShadowDiv>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <ShadowDiv className="text-center py-3 my-3">
                            <IconWrapper className="my-3 mx-auto">
                                <MdOutlineEmail />
                            </IconWrapper>
                            <H3>Email Us</H3>
                            <P>jarvis@peakdigital.com</P>
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
                        <ShadowDiv className="">
                            <Image src="/images/office-workers.jpg" />
                        </ShadowDiv>
                    </Col>
                    <Col lg={6} sm={12} className="my-3">
                        <ShadowDiv className="py-4 px-2">
                            <ContactForm />
                        </ShadowDiv>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ContactSection;
