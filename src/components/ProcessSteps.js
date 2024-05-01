import React from 'react';
import styled from 'styled-components';
import { PiNumberOneBold, PiNumberTwoBold, PiNumberThreeBold } from "react-icons/pi";
import { device } from '../styles/breakpoints';

// Styled components
const StyledList = styled.ul`
  list-style-type: none; 
  padding: 0;            
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &:first-child {
      margin: 35px 0px;
  }
  &:last-child {
      margin: 35px 0px;
  }

    @media ${device.tablet} {
        align-items: flex-start;
    }
`;

const IconWrapper = styled.div`
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 6px 15px rgba(16, 110, 234, 0.12); //move to token
    font-size: 24px;
    padding: 20px;
    margin-right: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.blue};
    border-radius: 32px;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        height: 42px;
        width: 42px;
        border-radius: 21px;
        padding: 10px;
    }
`;

const TextContainer = styled.div`
  text-align: left;
`;

const Heading = styled.h5`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  ${({ theme }) => theme.fonts.font18RobotoSemiBold};
`;

const Text = styled.p`
    ${({ theme }) => theme.fonts.font15TextRegular};
    color: ${({ theme }) => theme.colors.textGray};
    margin: 0;
`;

export const ProcessSteps = () => {
    return (
        <StyledList>
        <ListItem>
          <IconWrapper>
            <PiNumberOneBold />
          </IconWrapper>
          <TextContainer>
            <Heading>Collaborate with Our Engineers and Designers</Heading>
            <Text>During this initial phase, you'll work closely with our expert engineers and designers to define clear goals and develop a tailored content strategy for your project.</Text>
          </TextContainer>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <PiNumberTwoBold />
          </IconWrapper>
          <TextContainer>
            <Heading>Create and Refine Mockups</Heading>
            <Text>Our designers will then create detailed mockups of your project, which serve as a visual blueprint for your final product. This stage includes thorough reviews and revisions based on your feedback, ensuring that the design perfectly matches your vision before moving forward.</Text>
          </TextContainer>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <PiNumberThreeBold />
          </IconWrapper>
          <TextContainer>
            <Heading>Development and Quality Assurance</Heading>
            <Text>In the final stage, our development team builds out and deploys your project, incorporating all approved designs and functionalities. Rigorous QA testing follows to ensure everything runs smoothly. Once finalized, we deliver the fully realized project, ready for launch.</Text>
          </TextContainer>
        </ListItem>
      </StyledList>
    )
}

export default ProcessSteps;