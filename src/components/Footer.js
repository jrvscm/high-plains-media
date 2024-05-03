import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { MdOutlineChevronRight } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
`;

const H3 = styled.h3`
    ${({ theme }) => theme.fonts.fontBody24Regular};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
`;

const H4 = styled.h4`
    ${({ theme }) => theme.fonts.fontBody24Regular};
    font-size: 18px; //gross
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
`;


const Span = styled.span`
    color: ${({ theme }) => theme.colors.blue};
`;

const FooterP = styled.p`
    ${({ theme }) => theme.fonts.fontBody24Regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGray};
    line-height: 24px;
    transition: all .25s ease;
`;

const FooterList = styled.ul`
    padding: 0;
`;

const Li = styled.li`
    & > p {
        margin: 0;
    }

    &:hover {
        & > p {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.blue};
        }
    }
`;

const FooterIcon = styled(MdOutlineChevronRight)`
    color: ${({ theme }) => theme.colors.blue};
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;

  & a {
      margin: 0px 8px 0px 0px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;  // Ensuring it's a perfect square
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  margin: 0;
  border-radius: 5px;  // Slight rounding of corners

  &:hover {
    opacity: 0.8;
  }
`;

const CopyWrapper = styled(Row)`
    background: ${({ theme }) => theme.colors.sectionBackground};

    p {
        ${({ theme }) => theme.fonts.font13TextRegular};
        margin: 0;
    }
`;

export const Footer = () => {
    return (
    <>
        <Section className="py-5">
            <Container>
                <Row>
                    <Col lg={3} md={6} className="py-3">
                        <H3 className="mb-3">Peak Digital<Span>.</Span></H3>
                        <FooterP>
                            2704 Ridgecrest Drive<br />
                            Gillette, WY 82718<br/>
                            United States<br/><br/>

                            <strong>Phone:</strong> +1 307 680 6321<br/>
                            <strong>Email:</strong> jarvis@peakdigital.com<br/>
                        </FooterP>
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>Useful Links</H4>
                        <FooterList>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Home</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>About Us</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Services</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Terms of Service</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Privacy Policy</FooterP></Li>
                        </FooterList>
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>Our Services</H4>
                        <FooterList>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Mobile Applications</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Website Development</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Digital Marketing</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>E-commerce</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Content Strategy</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Funnel Creation</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>SEO Optimization</FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterIcon /><FooterP>Graphic Design</FooterP></Li>
                        </FooterList>
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>Socials</H4>
                        <FooterP>This is some text about staying social and the links will be below this. Just some dumn words I have no idea what will actually go here.</FooterP>
                        <SocialLinksContainer>
                            <SocialLink href="#" className="twitter">
                            <FaTwitter size="20" />
                            </SocialLink>
                            <SocialLink href="#" className="facebook">
                            <FaFacebook size="20" />
                            </SocialLink>
                            <SocialLink href="#" className="instagram">
                            <FaInstagram size="20" />
                            </SocialLink>
                            <SocialLink href="#" className="skype">
                            <FaSkype size="20" />
                            </SocialLink>
                            <SocialLink href="#" className="linkedin">
                            <FaLinkedin size="20" />
                            </SocialLink>
                        </SocialLinksContainer>
                    </Col>
                </Row>
            </Container>
        </Section>
        <CopyWrapper className="justify-content-center align-items-center py-3">
            <p className="text-center">&copy; { new Date().getFullYear() } Peak Digital</p>
        </CopyWrapper>
    </>
    )
};

export default Footer;