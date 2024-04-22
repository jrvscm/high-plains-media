import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { device } from '../styles/breakpoints';

const CardContainer = styled.div`
  flex: 0 1 300px; // Base width of each card
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.tokens.cardBoxShadow};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Center content inside each card
  text-align: left; // Ensures text within the card is centered

  ${({theme}) => theme.tokens.fadeInUpAnimation};

  @media ${device.tablet} {
      min-width: 100%;
  }

  ${({theme}) => theme.tokens.fadeInUpAnimation};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-delay: ${({ $delay }) => $delay}s; // Use the delay prop
  opacity: 0; // Start with the card invisible
  transform: translateY(30px);
  visibility: ${({ $isVisible }) => $isVisible ? 'visible' : 'hidden'};
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ $isHovered }) => $isHovered ? '100%' : '0'};
  z-index: 0;
  transition: height 0.3s ease;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  color: ${({ $isHovered, theme }) => $isHovered ? theme.colors.white : theme.colors.black};

  & h3 {
    transition: color 0.3s ease;
  }

  & svg {
    transition: color .4s ease;
    color: ${({ $isHovered, theme }) => $isHovered ? theme.colors.white : theme.colors.blue};
  }

  & p {
        transition: color 0.2s ease;
      ${({ theme }) => theme.fonts.font15TextRegular};
      color: ${({ $isHovered, theme }) => $isHovered ? theme.colors.white : theme.colors.textGray};
      line-height: 28px;
  }
`;

const Title = styled.h3`
    ${({ theme }) => theme.fonts.fontBody18Bold};
    color: ${({ $isHovered, theme }) => $isHovered ? theme.colors.white : theme.colors.black};
    margin-top: ${({theme}) => theme.spacing.lg};
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const Text = styled.p`
`;

const IconWrapper = styled.div`
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const ServiceCard = ({ Icon, title, text, $delay, $isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer $delay={$delay} $isVisible={$isVisible} className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <Background $isHovered={isHovered} />
        <Content $isHovered={isHovered}>
        <IconWrapper>{Icon && <Icon size={'48px'} />}</IconWrapper>
            <Title $isHovered={isHovered}>{title}</Title>
            <Text $isHovered={isHovered}>{text}</Text>
        </Content>
    </CardContainer>
  );
};

export default ServiceCard;
