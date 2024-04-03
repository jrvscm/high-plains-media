import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router'
import { TfiEmail } from "react-icons/tfi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useScrollPosition } from './hooks/ScrollPosition';

const StyledContainer = styled(Container)`
    background: ${({ theme }) => theme.colors.blue};
`;

const UpperNav = styled.div`
    ${({ theme }) => theme.fonts.font14Regular};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    height: 40px;
    width: 100%;
    margin-top: 0;
    transition: all 0.3s ease; /* Add transition for smooth animation */
`;

const LowerNav = styled.div`
    width: 100%;
    padding: 20px 0px;
    transition: all 0.3s ease; /* Add transition for smooth animation */
    background: ${({ theme }) => theme.colors.white};
    ${({ $isScrolled }) => $isScrolled && `
        position: fixed;
        top: 0;
        padding: 10px 0;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    `}
`;

const StyledNavbar = styled(Navbar)`
    flex-direction: column;
    padding-top: 0px;
    padding-bottom: 0px;
`;

const IconGroup = styled.div`
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        margin-right: 4px;
    }
    svg,
    a {
        text-decoration: none;
        color: rgba(255,255,255,.6);
        transition: all .25s ease;
        color: #fff;
    }
    &:hover {
        svg,
        a {
            cursor: pointer;
        }
        a {
            text-decoration: underline;
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
    svg {
        cursor: pointer;
        color: rgba(255,255,255,.6);
        transition: all .25s ease;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.blue};
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    ${({theme}) => theme.fonts.font30Bold};

    span {
        color: ${({theme}) => theme.colors.blue};
    }
`;

const StyledLink = styled(Link)`
    ${({theme}) => theme.fonts.fontNavLink};
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
`;

const Li = styled.li`
    padding: 10px 0;
    transition: 0.3s;
    position: relative;
    margin-right: 20px;
    
    &:hover {
        a {
            color: ${({ theme }) => theme.colors.blue};
        }
        a::after {
            width: 100%;
        }
    }
    
    a {
        padding: 0 3px;
        text-decoration: none !important;
        font-size: 15px !important;
        position: relative;
        color: ${({theme, $active}) => $active ? theme.colors.blue : theme.colors.black};
    }
    
    a::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.blue};
        transition: width 0.3s ease;

        width: ${({ $active }) => $active ? '100%' : ''};
    }
`;

const Navigation = () => {
    const { pathname } = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollPosition = useScrollPosition();
    useEffect(() => {
        if (scrollPosition > 40) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollPosition]);

    return (
        <StyledNavbar expand="lg" className="bg-body-tertiary">
            <Wrapper>
                <StyledContainer>
                    <UpperNav>
                        <NavSection>
                            <IconGroup>
                                <TfiEmail size={'14px'}/>
                                <a href="mailto:jarvis@peakdigital.com">jarvis@peakdigital.com</a>
                            </IconGroup>
                            <IconGroup>
                                <IoPhonePortraitOutline size={'14px'}/>
                                <a href="tel:13076806321">1 307 680 6321</a>
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
                </StyledContainer>
            </Wrapper>
            <LowerNav $isScrolled={isScrolled}>
                <Container className="d-flex align-items-center justify-content-between">
                    <div>
                        <StyledNavbarBrand href="#home">Peak Digital<span>.</span></StyledNavbarBrand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <List>
                                    <Li $active={pathname == "/"}>
                                        <StyledLink href="/">Home</StyledLink>
                                    </Li>
                                    <Li $active={pathname == "/work"}>
                                        <StyledLink href="/work">Work</StyledLink>
                                    </Li>
                                    <Li $active={pathname == "/contact"}>
                                        <StyledLink href="/contact">Contact</StyledLink>
                                    </Li>
                                    <Li $active={pathname == "/services"}>
                                        <StyledLink href="/services">Services</StyledLink>
                                    </Li>
                                    <Li $active={pathname == "/payment"}>
                                        <StyledLink href="/payment">Payment</StyledLink>
                                    </Li>
                                </List>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </LowerNav>
        </StyledNavbar>
    );
}

export default Navigation;
