import styled from 'styled-components';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const UpperNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.blue};
    color: white;
    height: 40px;
    width: 100%;
    margin-top: 0;
`;

const LowerNav = styled.div`
    display: block;
`;

const StyledNavbar = styled(Navbar)`
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
`;

const IconGroup = styled.div`
    margin: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin-right: 8px;
    }
    svg,
    a {
        text-decoration: none;
        color: rgba(255,255,255,.6);
        transition: all .25s ease;
    }
    &:hover {
        svg,
        a {
            cursor: pointer;
            color: #fff;
        }
    }
`;

const NavSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconWrapper = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        svg {
            color: #fff;
        }
    }
    &:last-of-type {
        margin-right: 20px;
    }
    svg {
        cursor: pointer;
        color: rgba(255,255,255,.6);
        transition: all .25s ease;
    }
`;

const Navigation = () => {
  return (
    <StyledNavbar fixed="top" expand="lg" className="bg-body-tertiary">
        <UpperNav>
            <NavSection>
                <IconGroup>
                    <TfiEmail size={'16px'}/>
                    <a href="mailto:jarvis@peakdigital.com">jarvis@peakdigital.com</a>
                </IconGroup>
                <IconGroup>
                    <IoPhonePortraitOutline size={'16px'}/>
                    <a href="tel:13076806321">+1 307 680 6321</a>
                </IconGroup>
            </NavSection>
            <NavSection>
                <IconWrapper>
                    <MdOutlineFacebook size={'16px'} />
                </IconWrapper>
                <IconWrapper>
                    <FaInstagram size={'16px'} />
                </IconWrapper>
                <IconWrapper>
                    <FaXTwitter size={'16px'} />
                </IconWrapper>
                <IconWrapper>
                    <FaLinkedin size={'16px'} />
                </IconWrapper>
            </NavSection>
        </UpperNav>
        <LowerNav>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link href="/">Home</Link>
                    <Link href="#link">Link</Link>
                </Nav>
            </Navbar.Collapse>
        </LowerNav>
    </StyledNavbar>
  );
}

export default Navigation;