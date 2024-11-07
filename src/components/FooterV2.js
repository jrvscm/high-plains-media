import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

import { device } from '../styles/breakpoints';

const StyledContainer = styled(Container)`
    border-Bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const Section = styled.section`
    background: ${({ theme }) => theme.colors.primaryDark};
    padding-bottom: 0px;
`;

const H4 = styled.h4`
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
    font-family: 'Orbitron', sans-serif;
    font-size: 18px; 
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2px;
    font-weight: 600;
`;

const FooterP = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.lightGray};
    line-height: 24px;

    li > a,
    a {
        transition: all .25s ease;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.lightGray};
        &:hover {
            filter: brightness(80%);
        }
    }
`;

const FooterList = styled.ul`
    padding: 0;

    & li > a > p {
        transition: all .25s ease;
        &:hover {
            cursor: pointer;
            filter: brightness(80%);
        }
    }
`;

const Li = styled.li`
    & > p {
        margin: 0;
    }
    & > p {
        &:hover {
            cursor: pointer;
            filter: brightness(80%);
        }
    }
`;

const CopyWrapper = styled(Row)`
    background: ${({ theme }) => theme.colors.primaryDark};
    width: 100vw;
    margin: 0;
    p {
        font-family: 'Raleway', sans-serif;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.lightGray};
        margin: 0;
        padding: 0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    ${({ theme }) => theme.fonts.fontBody24Regular};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGray};
    line-height: 24px;
    transition: all .25s ease;

    > p {
        margin: 0;
    }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  @media ${device.tablet}{
    width: 125px;
    height: 125px;
  }
  ${'' /* filter: drop-shadow(0 0 30px rgb(164, 54, 227));  /* Apply drop shadow effect */ }
`;


export const Footer = () => {
    return (
    <>
        <Section className="pt-3 pb-0">
            <StyledContainer>
                <Row>
                    <Col lg={3} md={6} className="pt-3">
                        <Logo src={'/images/highplains-logo-v2.svg'} />
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>COMPANY</H4>
                        <FooterList>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterP><a href="https://www.highplainsmedia.com">Home</a></FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterP><a href="https://www.highplainsmedia.com/about">About</a></FooterP></Li>
                            <Li className="d-flex justify-content-start align-items-center py-1"><FooterP><a href="https://www.highplainsmedia.com/privacy">Privacy Policy</a></FooterP></Li>
                        </FooterList>
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>FOLLOW US</H4>
                        <FooterList>
                            <Li className="d-flex justify-content-start align-items-center py-1"><StyledLink href={`https://github.com/jrvscm`}><FooterP>Github</FooterP></StyledLink></Li>
                            {/* <Li className="d-flex justify-content-start align-items-center py-1"><StyledLink href={``}><FooterP>Instagram</FooterP></StyledLink></Li> */}
                            <Li className="d-flex justify-content-start align-items-center py-1"><StyledLink href={`https://www.linkedin.com/in/chris-jarvis-dev/`} target="_blank"><FooterP>LinkedIn</FooterP></StyledLink></Li>
                        </FooterList>
                    </Col>
                    <Col lg={3} md={6} className="py-3">
                        <H4>CONTACT US</H4>
                        <FooterP>
                            Gillette, WY USA<br/>
                            United States<br/><br/>

                            <strong>Phone:</strong> +1 307 680 6321<br/>
                            <strong>Email:</strong> <a href="mailto:team@highplainsmedia.com">team@highplainsmedia.com</a><br/>
                        </FooterP>
                    </Col>
                </Row>
            </StyledContainer>
        </Section>
        <CopyWrapper className="justify-content-center align-items-center py-4">
            <p className="text-center">&copy; { new Date().getFullYear() } High Plains Media</p>
        </CopyWrapper>
    </>
    )
};

export default Footer;