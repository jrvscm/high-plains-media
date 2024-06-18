import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { device } from '../styles/breakpoints';

const CardContainer = styled.div`
  flex: 0 1 ${({ $overrideWidth }) => $overrideWidth ? $overrideWidth : '300px'}; // Base width of each card
  max-width: ${({ $overrideWidth }) => $overrideWidth ? $overrideWidth : '300px'};
  ${'' /* flex: 0 1 300px; // Base width of each card
  max-width: 300px; */}
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

  ${({ $image }) => $image && css`padding: 0`};

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

  &:hover {
    box-shadow: ${({ theme, $overrideBackground }) => $overrideBackground ? theme.tokens.cardHoveredBoxShadow : theme.tokens.cardBoxShadow};
  }
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
    ${({$image, theme}) => $image && css`
      padding: 0 ${theme.spacing.smd};
      margin-bottom: ${theme.spacing.xxs}
    `};
`;

const Text = styled.p`
  ${({$image, theme}) => $image && css`
    padding: 0 ${theme.spacing.smd};
    ${theme.fonts.font13TextRegular};
    filter: ${({ $isBlur }) => $isBlur ? 'blur(5px)' : 'none'};
    padding-bottom: ${({ $overrideBackground, theme }) => $overrideBackground ? theme.spacing.xxs : '0px'};
  `};
`;

const IconWrapper = styled.div`
    margin-bottom: ${({theme}) => theme.spacing.md};
`;

const Image = styled.img`
  will-change: transform;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  filter: ${({ $isBlur }) => $isBlur ? 'blur(10px)' : 'none'};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

//only pass image if you want the image variant
const Card = ({ Icon, title, text, $delay, $isVisible, image = null, overrideWidth = null, overrideHeight = null, isBlur = null, overrideBackground = null, overrideHref = null, alt = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  } 

  return (
    <CardContainer 
      $overrideBackground={overrideBackground}
      $overrideHeight={overrideHeight}
      $overrideWidth={overrideWidth}
      $image={image} 
      $delay={$delay} 
      $isVisible={$isVisible} 
      className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
      onMouseEnter={() => overrideBackground ? setIsHovered(false) : setIsHovered(true)}
      onMouseLeave={() => overrideBackground ? setIsHovered(false) : setIsHovered(false)}
    >
      <StyledLink href={overrideHref ? overrideHref : `/posts/${slugify(title)}`}>
        {!isBlur && <Background $isHovered={isHovered} />}
        <Content $isHovered={isHovered}>
          {image && <Image $isBlur={isBlur} src={image} alt={alt} />}
          {Icon && <IconWrapper><Icon size={'48px'} /></IconWrapper>}
          {title && <Title $image={image}  $isHovered={isHovered}>{title}</Title>}
          {text && <Text $isBlur={isBlur} $image={image} $isHovered={isHovered} $overrideBackground={overrideBackground}>{text}</Text>}
        </Content>
      </StyledLink>
    </CardContainer>
  );
};

export default Card;
